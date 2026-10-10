/**
 * Tests for the /api/v1/user endpoint (Phase 2 multi-user management)
 *
 * Covers the recovered Pro contract:
 * - GET    returns the full users array with meta
 * - POST   admin-only create with cap + case-insensitive duplicate checks
 * - PATCH  self update, admin cross-user update, role-change guards
 * - DELETE admin-only delete with cascade cleanup (never self, never last user)
 */

import { describe, it, expect, beforeEach, vi } from "vitest"
import { NextRequest } from "next/server"
import { GET, POST, PATCH, DELETE } from "./route"
import { safeReadDataFile, safeWriteDataFile } from "@/lib/utils/safe-file-operations"
import { getAuthUser } from "@/lib/middleware/auth"
import { verifyPassword } from "@tasktrove/utils"
import { createUserId, createTaskId, createCommentId, createProjectId } from "@tasktrove/types/id"
import { DEFAULT_EMPTY_DATA_FILE, DEFAULT_PROJECT_SECTION } from "@tasktrove/types/defaults"
import { DEFAULT_MAX_USERS } from "@tasktrove/constants"
import type { DataFile } from "@tasktrove/types/data-file"
import type { Task, User } from "@tasktrove/types/core"

// Mock safe file operations
vi.mock("@/lib/utils/safe-file-operations", () => ({
  safeReadDataFile: vi.fn(),
  safeWriteDataFile: vi.fn(),
  safeReadUserFile: vi.fn(),
  safeWriteUserFile: vi.fn(),
}))

// Override the global auth-bypass mock with one that exposes the acting
// identity so admin guards can be exercised per test.
vi.mock("@/lib/middleware/auth", () => ({
  withAuthentication: (handler: (...args: unknown[]) => unknown) => handler,
  getAuthUser: vi.fn(),
}))

const mockSafeReadDataFile = vi.mocked(safeReadDataFile)
const mockSafeWriteDataFile = vi.mocked(safeWriteDataFile)
const mockGetAuthUser = vi.mocked(getAuthUser)

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const ADMIN_ID = createUserId("11111111-1111-4111-8111-111111111111")
const MEMBER_ID = createUserId("22222222-2222-4222-8222-222222222222")
const UNKNOWN_ID = createUserId("33333333-3333-4333-8333-333333333333")

const adminUser: User = {
  id: ADMIN_ID,
  username: "admin",
  password: "hashed-admin",
  role: "admin",
}

const memberUser: User = {
  id: MEMBER_ID,
  username: "member",
  password: "hashed-member",
  role: "user",
}

function buildDataFile(overrides: Partial<DataFile> = {}): DataFile {
  return {
    ...DEFAULT_EMPTY_DATA_FILE,
    users: [adminUser, memberUser],
    user: [adminUser, memberUser],
    ...overrides,
  }
}

function buildTask(overrides: Partial<Task> = {}): Task {
  return {
    id: createTaskId("44444444-4444-4444-8444-444444444444"),
    title: "Fixture task",
    completed: false,
    priority: 1,
    labels: [],
    subtasks: [],
    comments: [],
    createdAt: new Date("2024-06-01T12:00:00Z"),
    recurringMode: "dueDate",
    ...overrides,
  }
}

function userRequest(method: string, body?: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/v1/user", {
    method,
    ...(body !== undefined
      ? { body: JSON.stringify(body), headers: { "Content-Type": "application/json" } }
      : {}),
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  mockSafeWriteDataFile.mockResolvedValue(true)
  mockGetAuthUser.mockReturnValue({ id: ADMIN_ID, role: "admin" })
})

/** Returns the data payload passed to the most recent safeWriteDataFile call. */
function writtenData(): DataFile {
  const call = mockSafeWriteDataFile.mock.calls[0]?.[0]
  if (call?.data === undefined) {
    throw new Error("expected safeWriteDataFile to be called with data")
  }
  return call.data
}

// ---------------------------------------------------------------------------
// GET
// ---------------------------------------------------------------------------

describe("GET /api/v1/user", () => {
  it("returns the full users array with meta and no-store headers", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await GET(userRequest("GET"))

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.user).toHaveLength(2)
    expect(data.user[0].username).toBe("admin")
    expect(data.user[0].role).toBe("admin")
    expect(data.user[1].username).toBe("member")
    expect(data.meta.count).toBe(2)
    expect(typeof data.meta.timestamp).toBe("string")
    expect(data.meta.version).toBe("v0.13.0")
    expect(response.headers.get("Cache-Control")).toContain("no-store")
  })

  it("returns 500 when the data file cannot be read", async () => {
    mockSafeReadDataFile.mockResolvedValue(undefined)

    const response = await GET(userRequest("GET"))

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data).toEqual({
      code: "DATA_FILE_READ_ERROR",
      error: "Failed to read data file",
      message: "File reading or validation failed",
    })
  })

  it("returns 500 when user data fails serialization", async () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- deliberately invalid role to exercise the serialization guard
    const brokenUser = { ...adminUser, role: "superadmin" } as unknown as User
    mockSafeReadDataFile.mockResolvedValue(buildDataFile({ users: [brokenUser] }))

    const response = await GET(userRequest("GET"))

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data.code).toBe("DATA_FILE_VALIDATION_ERROR")
    expect(data.error).toBe("Failed to serialize data file")
  })
})

// ---------------------------------------------------------------------------
// POST
// ---------------------------------------------------------------------------

describe("POST /api/v1/user", () => {
  it("creates a user, hashes the password, and appends to the users array", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(
      userRequest("POST", { username: "newuser", password: "secret123", role: "user" }),
    )

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
    expect(data.message).toBe("User created successfully")
    expect(data.user.username).toBe("newuser")
    expect(data.user.role).toBe("user")
    expect(data.user.id).toBeTruthy()
    expect(verifyPassword("secret123", data.user.password)).toBe(true)
    expect(data.user.password).not.toBe("secret123")

    expect(mockSafeWriteDataFile).toHaveBeenCalledTimes(1)
    const written = writtenData()
    expect(written.users).toHaveLength(3)
    expect(written.users?.[2]?.username).toBe("newuser")
    expect(written.user).toHaveLength(3)
  })

  it("rejects creation by a non-admin", async () => {
    mockGetAuthUser.mockReturnValue({ id: MEMBER_ID, role: "user" })
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(userRequest("POST", { username: "newuser", password: "secret123" }))

    expect(response.status).toBe(403)
    const data = await response.json()
    expect(data).toEqual({
      code: "AUTHORIZATION_DENIED",
      error: "Permission denied",
      message: "Only admins can create users",
    })
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects duplicate usernames case-insensitively", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(userRequest("POST", { username: "ADMIN", password: "secret123" }))

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.error).toBe("Username already exists")
    expect(data.message).toContain("ADMIN")
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects creation when the user limit is reached", async () => {
    const manyUsers = Array.from({ length: DEFAULT_MAX_USERS }, (_, index) => ({
      ...adminUser,
      id: createUserId(`00000000-0000-4000-8000-${String(index).padStart(12, "0")}`),
      username: `user${index}`,
    }))
    // acting admin + DEFAULT_MAX_USERS others exceeds the cap
    mockSafeReadDataFile.mockResolvedValue(
      buildDataFile({ users: [adminUser, ...manyUsers], user: [adminUser, ...manyUsers] }),
    )

    const response = await POST(
      userRequest("POST", { username: "late-joiner", password: "secret123" }),
    )

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.error).toBe("User limit reached")
    expect(data.message).toBe(`Maximum of ${DEFAULT_MAX_USERS} users allowed`)
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects an invalid body", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(userRequest("POST", { username: "no-password" }))

    expect(response.status).toBe(400)
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("returns 404 when the acting user is missing from the data file", async () => {
    mockGetAuthUser.mockReturnValue({ id: UNKNOWN_ID, role: "admin" })
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await POST(userRequest("POST", { username: "newuser", password: "secret123" }))

    expect(response.status).toBe(404)
    const data = await response.json()
    expect(data.error).toBe("User not found")
    expect(data.message).toBe("Authenticated user not found in data file")
  })
})

// ---------------------------------------------------------------------------
// PATCH
// ---------------------------------------------------------------------------

describe("PATCH /api/v1/user", () => {
  it("lets a user update their own profile without a target id", async () => {
    mockGetAuthUser.mockReturnValue({ id: MEMBER_ID, role: "user" })
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await PATCH(userRequest("PATCH", { username: "renamed" }))

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
    expect(data.message).toBe("User updated successfully")
    expect(data.user.username).toBe("renamed")
    expect(data.user.id).toBe(MEMBER_ID)

    const written = writtenData()
    expect(written.users?.find((u: User) => u.id === MEMBER_ID)?.username).toBe("renamed")
    // the other user is untouched
    expect(written.users?.find((u: User) => u.id === ADMIN_ID)?.username).toBe("admin")
  })

  it("lets an admin change another user's role", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await PATCH(userRequest("PATCH", { id: MEMBER_ID, role: "admin" }))

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.user.role).toBe("admin")

    const written = writtenData()
    expect(written.users?.find((u: User) => u.id === MEMBER_ID)?.role).toBe("admin")
  })

  it("rejects an admin changing their own role", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await PATCH(userRequest("PATCH", { id: ADMIN_ID, role: "user" }))

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data).toEqual({
      code: "INVALID_REQUEST_BODY",
      error: "Admins can't change own role",
      message: "Cannot change own role",
    })
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects a non-admin targeting another user", async () => {
    mockGetAuthUser.mockReturnValue({ id: MEMBER_ID, role: "user" })
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await PATCH(userRequest("PATCH", { id: ADMIN_ID, username: "hacked" }))

    expect(response.status).toBe(403)
    const data = await response.json()
    expect(data.message).toBe("Only admins can update users")
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects a non-admin escalating their own role", async () => {
    mockGetAuthUser.mockReturnValue({ id: MEMBER_ID, role: "user" })
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await PATCH(userRequest("PATCH", { role: "admin" }))

    expect(response.status).toBe(403)
    const data = await response.json()
    expect(data.message).toBe("Users cannot modify their own role")
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("returns 404 for an unknown target id", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await PATCH(userRequest("PATCH", { id: UNKNOWN_ID, username: "ghost" }))

    expect(response.status).toBe(404)
    const data = await response.json()
    expect(data.error).toBe("User not found")
    expect(data.message).toBe(`User with ID ${UNKNOWN_ID} not found`)
  })

  it("hashes a provided password", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await PATCH(userRequest("PATCH", { password: "brand-new" }))

    expect(response.status).toBe(200)
    const written = writtenData()
    const updated = written.users?.find((u: User) => u.id === ADMIN_ID)
    if (!updated) {
      throw new Error("expected the acting user to be updated")
    }
    expect(verifyPassword("brand-new", updated.password)).toBe(true)
    expect(updated.password).not.toBe("brand-new")
  })
})

// ---------------------------------------------------------------------------
// DELETE
// ---------------------------------------------------------------------------

describe("DELETE /api/v1/user", () => {
  it("deletes a user and cascades through tasks, comments, projects, and reward events", async () => {
    const cascadeTask = buildTask({
      ownerId: MEMBER_ID,
      assignees: [ADMIN_ID, MEMBER_ID],
      comments: [
        {
          id: createCommentId("55555555-5555-4555-8555-555555555555"),
          content: "hello",
          createdAt: new Date("2024-06-01T12:00:00Z"),
          userId: ADMIN_ID,
          reactions: [
            { emoji: "👍", userId: ADMIN_ID },
            { emoji: "🎉", userId: MEMBER_ID },
          ],
        },
      ],
    })
    const unrelatedTask = buildTask({
      id: createTaskId("66666666-6666-4666-8666-666666666666"),
      title: "Untouched",
    })
    mockSafeReadDataFile.mockResolvedValue(
      buildDataFile({
        tasks: [cascadeTask, unrelatedTask],
        projects: [
          {
            id: createProjectId("77777777-7777-4777-8777-777777777777"),
            name: "Shared project",
            color: "#ff0000",
            sections: [DEFAULT_PROJECT_SECTION],
            members: [ADMIN_ID, MEMBER_ID],
          },
        ],
        rewardEvents: [
          {
            id: "88888888-8888-4888-8888-888888888888",
            userId: MEMBER_ID,
            type: "TASK_COMPLETED",
            entityId: cascadeTask.id,
            points: 10,
            timestamp: new Date("2024-06-01T12:00:00Z"),
          },
          {
            id: "99999999-9999-4999-8999-999999999999",
            userId: ADMIN_ID,
            type: "TASK_COMPLETED",
            entityId: unrelatedTask.id,
            points: 5,
            timestamp: new Date("2024-06-01T12:00:00Z"),
          },
        ],
      }),
    )

    const response = await DELETE(userRequest("DELETE", { userId: MEMBER_ID }))

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
    expect(data.deletedUserId).toBe(MEMBER_ID)
    expect(data.message).toBe("User deleted successfully")

    const written = writtenData()
    expect(written.users).toHaveLength(1)
    expect(written.users?.[0]?.id).toBe(ADMIN_ID)

    // ownership cleared
    expect(written.tasks[0]?.ownerId).toBeUndefined()
    // removed from assignees
    expect(written.tasks[0]?.assignees).toEqual([ADMIN_ID])
    // reactions filtered to the remaining user
    expect(written.tasks[0]?.comments?.[0]?.reactions).toEqual([{ emoji: "👍", userId: ADMIN_ID }])
    // unrelated task untouched
    expect(written.tasks[1]?.title).toBe("Untouched")
    // project members filtered
    expect(written.projects[0]?.members).toEqual([ADMIN_ID])
    // only the deleted user's reward events removed
    expect(written.rewardEvents).toHaveLength(1)
    expect(written.rewardEvents[0]?.userId).toBe(ADMIN_ID)
  })

  it("refuses to delete yourself", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await DELETE(userRequest("DELETE", { userId: ADMIN_ID }))

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data).toEqual({
      code: "INVALID_REQUEST_BODY",
      error: "Admins can't delete self",
      message: "Admins cannot delete their own account",
    })
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects deletion by a non-admin", async () => {
    mockGetAuthUser.mockReturnValue({ id: MEMBER_ID, role: "user" })
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await DELETE(userRequest("DELETE", { userId: ADMIN_ID }))

    expect(response.status).toBe(403)
    const data = await response.json()
    expect(data.message).toBe("Only admins can delete users")
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("returns 404 for an unknown user id", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await DELETE(userRequest("DELETE", { userId: UNKNOWN_ID }))

    expect(response.status).toBe(404)
    const data = await response.json()
    expect(data.message).toBe(`User with ID ${UNKNOWN_ID} not found`)
  })

  it("never leaves the data file without users (self-guard protects the last user)", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile({ users: [adminUser], user: adminUser }))

    // The only user in the file is the acting admin -> self-delete guard
    const response = await DELETE(userRequest("DELETE", { userId: ADMIN_ID }))

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.error).toBe("Admins can't delete self")
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })

  it("rejects an invalid body", async () => {
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())

    const response = await DELETE(userRequest("DELETE", {}))

    expect(response.status).toBe(400)
    expect(mockSafeWriteDataFile).not.toHaveBeenCalled()
  })
})
