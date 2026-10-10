/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import type { ReactNode } from "react"
import { AssigneeBadges } from "./assignee-badges"
import { OwnerBadge } from "./owner-badge"
import { AssigneeManagementPopover } from "./assignee-management-popover"
import { usersAtom } from "@tasktrove/atoms/data/base/atoms"
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

function renderWithUsers(ui: ReactNode) {
  const initialValues: HydrateValues = [
    [usersAtom as unknown as WritableAtom<User[], [User[]], void>, [adminUser, memberUser]],
  ]
  return render(<TestJotaiProvider initialValues={initialValues}>{ui}</TestJotaiProvider>)
}

beforeEach(() => {
  vi.clearAllMocks()
  mockUpdateTask.mockResolvedValue(undefined)
})

describe("AssigneeBadges", () => {
  it("renders assignees and the owner as avatars", () => {
    renderWithUsers(
      <AssigneeBadges task={{ ...baseTask, assignees: [MEMBER_ID], ownerId: ADMIN_ID }} />,
    )

    // UserAvatar falls back to initials: member -> "M", admin -> "A"
    expect(screen.getByText("M")).toBeInTheDocument()
    expect(screen.getByText("A")).toBeInTheDocument()
  })

  it("returns null when there is no task (quick-add draft)", () => {
    const { container } = renderWithUsers(<AssigneeBadges />)

    expect(container).toBeEmptyDOMElement()
  })

  it("returns null when there are no assignees and no owner", () => {
    const { container } = renderWithUsers(<AssigneeBadges task={baseTask} />)

    expect(container).toBeEmptyDOMElement()
  })

  it("hides the owner when showOwner is false", () => {
    const { container } = renderWithUsers(
      <AssigneeBadges task={{ ...baseTask, ownerId: ADMIN_ID }} showOwner={false} />,
    )

    // No assignees + owner hidden -> nothing rendered
    expect(container).toBeEmptyDOMElement()
  })
})

describe("OwnerBadge", () => {
  it("renders the owner", () => {
    renderWithUsers(<OwnerBadge task={{ ...baseTask, ownerId: ADMIN_ID }} />)

    expect(screen.getByText("A")).toBeInTheDocument()
  })

  it("returns null when there is no owner", () => {
    const { container } = renderWithUsers(<OwnerBadge task={baseTask} />)

    expect(container).toBeEmptyDOMElement()
  })
})

describe("AssigneeManagementPopover", () => {
  it("toggles an assignee via updateTask", async () => {
    renderWithUsers(
      <AssigneeManagementPopover task={{ ...baseTask, assignees: [] }}>
        <button type="button">open</button>
      </AssigneeManagementPopover>,
    )

    fireEvent.click(screen.getByRole("button", { name: "open" }))
    fireEvent.click(await screen.findByRole("button", { name: /member/ }))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, assignees: [MEMBER_ID] },
      })
    })
  })

  it("removes an existing assignee", async () => {
    renderWithUsers(
      <AssigneeManagementPopover task={{ ...baseTask, assignees: [MEMBER_ID] }}>
        <button type="button">open</button>
      </AssigneeManagementPopover>,
    )

    fireEvent.click(screen.getByRole("button", { name: "open" }))
    fireEvent.click(await screen.findByRole("button", { name: /member/ }))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: { id: baseTask.id, assignees: [] },
      })
    })
  })
})
