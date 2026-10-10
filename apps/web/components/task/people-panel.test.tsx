/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor, within } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import type { ReactNode } from "react"
import { PeoplePanel, PeoplePopover } from "./people-panel"
import { usersAtom, userAtom, currentUserIdAtom } from "@tasktrove/atoms/data/base/atoms"
import { createUserId, createTaskId } from "@tasktrove/types/id"
import type { User, Task } from "@tasktrove/types/core"

const mockUpdateTask = vi.hoisted(() => vi.fn())

vi.mock("@tasktrove/atoms/core/tasks", async () => {
  const { atom: createAtom } = await import("jotai")
  return {
    updateTaskAtom: createAtom(null, (_get, _set, args: unknown) => {
      mockUpdateTask(args)
    }),
  }
})

vi.mock("@tasktrove/i18n", () => ({
  useTranslation: () => ({
    t: (key: string, fallback?: string) => fallback ?? key,
  }),
  LanguageProvider: ({ children }: { children: ReactNode }) => children,
}))

const ADMIN_ID = createUserId("11111111-1111-4111-8111-111111111111")
const MEMBER_ID = createUserId("22222222-2222-4222-8222-222222222222")
const DANGLING_ID = createUserId("33333333-3333-4333-8333-333333333333")

const adminUser: User = {
  id: ADMIN_ID,
  username: "admin",
  password: "hashed",
  role: "admin",
}

const memberUser: User = {
  id: MEMBER_ID,
  username: "member",
  password: "hashed",
  role: "user",
}

const baseTask: Task = {
  id: createTaskId("44444444-4444-4444-8444-444444444444"),
  title: "Test",
  completed: false,
  priority: 1,
  labels: [],
  subtasks: [],
  comments: [],
  createdAt: new Date("2024-06-01T12:00:00Z"),
  recurringMode: "dueDate",
}

function renderWithUsers(ui: ReactNode, currentUserId: User["id"] | null = null) {
  // Mirrors the real userAtom fallback: session user -> first user in the list.
  const actingUser = currentUserId === MEMBER_ID ? memberUser : adminUser
  const initialValues: HydrateValues = [
    [usersAtom as unknown as WritableAtom<User[], [User[]], void>, [adminUser, memberUser]],
    [currentUserIdAtom, currentUserId],
    [userAtom as unknown as WritableAtom<User, [User], void>, actingUser],
  ]
  return render(<TestJotaiProvider initialValues={initialValues}>{ui}</TestJotaiProvider>)
}

function ownerSection() {
  return within(screen.getByTestId("people-owner-section"))
}

function assigneesSection() {
  return within(screen.getByTestId("people-assignees-section"))
}

beforeEach(() => {
  vi.clearAllMocks()
  mockUpdateTask.mockResolvedValue(undefined)
})

describe("PeoplePanel", () => {
  it("renders both the Owner and Assignees sections", () => {
    renderWithUsers(<PeoplePanel task={baseTask} />)

    expect(screen.getByText("Owner")).toBeInTheDocument()
    expect(screen.getByText("Assignees")).toBeInTheDocument()
    expect(ownerSection().getByText("Public")).toBeInTheDocument()
  })
})

describe("OwnerSection", () => {
  it("lists every user as an owner candidate for admins", () => {
    renderWithUsers(<PeoplePanel task={baseTask} />)

    expect(ownerSection().getByText("admin")).toBeInTheDocument()
    expect(ownerSection().getByText("member")).toBeInTheDocument()
  })

  it("sets an owner via updateTask", async () => {
    renderWithUsers(<PeoplePanel task={baseTask} />)

    fireEvent.click(ownerSection().getByText("member"))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, ownerId: MEMBER_ID },
      })
    })
  })

  it("clears the owner (ownerId: null) from the Public row", async () => {
    renderWithUsers(<PeoplePanel task={{ ...baseTask, ownerId: ADMIN_ID }} />)

    fireEvent.click(ownerSection().getByText("Public"))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, ownerId: null },
      })
    })
  })

  it("renders a destructive Unknown owner row that clears the dangling id", async () => {
    renderWithUsers(<PeoplePanel task={{ ...baseTask, ownerId: DANGLING_ID }} />)

    fireEvent.click(ownerSection().getByText("Unknown owner"))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, ownerId: null },
      })
    })
  })

  it("restricts the candidate list for non-admin users to themselves", () => {
    renderWithUsers(<PeoplePanel task={baseTask} />, MEMBER_ID)

    expect(ownerSection().getByText("member")).toBeInTheDocument()
    expect(ownerSection().queryByText("admin")).not.toBeInTheDocument()
  })
})

describe("AssigneesSection", () => {
  it("toggles an assignee via updateTask", async () => {
    renderWithUsers(<PeoplePanel task={{ ...baseTask, assignees: [] }} />)

    fireEvent.click(assigneesSection().getByText("member"))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, assignees: [MEMBER_ID] },
      })
    })
  })

  it("removes an existing assignee", async () => {
    renderWithUsers(<PeoplePanel task={{ ...baseTask, assignees: [MEMBER_ID] }} />)

    fireEvent.click(assigneesSection().getByText("member"))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, assignees: [] },
      })
    })
  })

  it("renders a destructive Unknown user row that removes the dangling id", async () => {
    renderWithUsers(<PeoplePanel task={{ ...baseTask, assignees: [DANGLING_ID, MEMBER_ID] }} />)

    fireEvent.click(assigneesSection().getByText("Unknown user"))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, assignees: [MEMBER_ID] },
      })
    })
  })
})

describe("PeoplePopover", () => {
  it("opens and renders the panel content", async () => {
    renderWithUsers(
      <PeoplePopover task={baseTask}>
        <button type="button">people</button>
      </PeoplePopover>,
    )

    fireEvent.click(screen.getByRole("button", { name: "people" }))

    expect(await screen.findByText("Owner")).toBeInTheDocument()
    expect(screen.getByText("Assignees")).toBeInTheDocument()
  })
})
