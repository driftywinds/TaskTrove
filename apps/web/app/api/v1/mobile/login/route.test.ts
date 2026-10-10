/**
 * Tests for POST /api/v1/mobile/login (Pro mobile session login contract)
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { NextRequest } from "next/server"
import { POST } from "./route"
import { safeReadDataFile } from "@/lib/utils/safe-file-operations"
import { createUserId } from "@tasktrove/types/id"
import { DEFAULT_EMPTY_DATA_FILE } from "@tasktrove/types/defaults"
import { saltAndHashPassword } from "@tasktrove/utils"
import type { DataFile } from "@tasktrove/types/data-file"
import type { User } from "@tasktrove/types/core"

vi.mock("@/lib/utils/safe-file-operations", () => ({
  safeReadDataFile: vi.fn(),
  safeWriteDataFile: vi.fn(),
  safeReadUserFile: vi.fn(),
  safeWriteUserFile: vi.fn(),
}))

const mockSafeReadDataFile = vi.mocked(safeReadDataFile)

const USER_ID = createUserId("11111111-1111-4111-8111-111111111111")
const hashedPassword = saltAndHashPassword("correct-horse")

const testUser: User = {
  id: USER_ID,
  username: "mobile-user",
  password: hashedPassword,
  role: "admin",
}

function buildDataFile(): DataFile {
  return {
    ...DEFAULT_EMPTY_DATA_FILE,
    users: [testUser],
    user: [testUser],
  }
}

function loginRequest(body: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/v1/mobile/login", {
    method: "POST",
    body: typeof body === "string" ? body : JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
}

describe("POST /api/v1/mobile/login", () => {
  let originalAuthSecret: string | undefined

  beforeEach(() => {
    vi.clearAllMocks()
    originalAuthSecret = process.env.AUTH_SECRET
    process.env.AUTH_SECRET = "test-secret"
    mockSafeReadDataFile.mockResolvedValue(buildDataFile())
  })

  afterEach(() => {
    if (originalAuthSecret !== undefined) {
      process.env.AUTH_SECRET = originalAuthSecret
    } else {
      delete process.env.AUTH_SECRET
    }
  })

  it("returns a session token and the user identity for valid credentials", async () => {
    const response = await POST(
      loginRequest({ username: "mobile-user", password: "correct-horse" }),
    )

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(typeof data.token).toBe("string")
    expect(data.token.length).toBeGreaterThan(0)
    expect(data.user).toEqual({ id: USER_ID, username: "mobile-user" })
    expect(response.headers.get("Cache-Control")).toContain("no-store")
  })

  it("matches the username case-insensitively", async () => {
    const response = await POST(
      loginRequest({ username: "MOBILE-USER", password: "correct-horse" }),
    )

    expect(response.status).toBe(200)
    const data = await response.json()
    expect(data.user.username).toBe("mobile-user")
  })

  it("rejects invalid credentials with 401", async () => {
    const response = await POST(loginRequest({ username: "mobile-user", password: "wrong" }))

    expect(response.status).toBe(401)
    const data = await response.json()
    expect(data.error).toBe("Invalid credentials")
  })

  it("rejects an unknown username with 401", async () => {
    const response = await POST(loginRequest({ username: "nobody", password: "whatever" }))

    expect(response.status).toBe(401)
    const data = await response.json()
    expect(data.code).toBe("AUTHENTICATION_FAILED")
  })

  it("rejects a malformed body with 400", async () => {
    const response = await POST(loginRequest({ username: "mobile-user" }))

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.code).toBe("INVALID_REQUEST_BODY")
  })

  it("rejects invalid JSON with 400", async () => {
    const response = await POST(loginRequest("{not json"))

    expect(response.status).toBe(400)
  })

  it("returns 500 when AUTH_SECRET is not configured", async () => {
    delete process.env.AUTH_SECRET

    const response = await POST(loginRequest({ username: "mobile-user", password: "x" }))

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data.message).toContain("Auth secret")
  })

  it("returns 500 when the data file cannot be read", async () => {
    mockSafeReadDataFile.mockResolvedValue(undefined)

    const response = await POST(loginRequest({ username: "mobile-user", password: "x" }))

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data.code).toBe("DATA_FILE_READ_ERROR")
  })
})
