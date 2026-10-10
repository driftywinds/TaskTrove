/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import { BulkAssigneeButton } from "./bulk-assignee-button"
import { usersAtom, tasksAtom } from "@tasktrove/atoms/data/base/atoms"
import { createUserId, createTaskId } from "@tasktrove/types/id"
import type { User, Task } from "@tasktrove/types/core"

const mockUpdateTasks = vi.hoisted(() => vi.fn())

vi.mock("@tasktrove/atoms/core/tasks", async () => {
  const { atom } = await import("jotai")
  return {
    updateTasksAtom: atom(null, (_get, _set, updates: unknown) => {
      mockUpdateTasks(updates)
    }),
  }
})

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

const TASK_ID_1 = createTaskId("44444444-4444-4444-8444-444444444444")
const TASK_ID_2 = createTaskId("55555555-5555-4555-8555-555555555555")

function createTask(overrides: Partial<Task> & Pick<Task, "id">): Task {
  return {
    title: "Task",
    completed: false,
    priority: 4,
    labels: [],
    subtasks: [],
    comments: [],
    createdAt: new Date("2024-01-10T10:00:00.000Z"),
    recurringMode: "dueDate",
    ...overrides,
  }
}

function renderButton(taskIds: Task["id"][], users: User[], tasks: Task[]) {
  const initialValues: HydrateValues = [
    [usersAtom as unknown as WritableAtom<User[], [User[]], void>, users],
    [tasksAtom as unknown as WritableAtom<Task[], [Task[]], void>, tasks],
  ]
  return render(
    <TestJotaiProvider initialValues={initialValues}>
      <BulkAssigneeButton taskIds={taskIds} />
    </TestJotaiProvider>,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  mockUpdateTasks.mockReturnValue(undefined)
})

describe("BulkAssigneeButton", () => {
  it("renders nothing when there are no users", () => {
    const { container } = renderButton([TASK_ID_1], [], [createTask({ id: TASK_ID_1 })])
    expect(container).toBeEmptyDOMElement()
  })

  it("assigns a user to every selected task missing them", async () => {
    renderButton(
      [TASK_ID_1, TASK_ID_2],
      [adminUser, memberUser],
      [
        createTask({ id: TASK_ID_1, assignees: [] }),
        createTask({ id: TASK_ID_2, assignees: [MEMBER_ID] }),
      ],
    )

    fireEvent.click(screen.getByRole("button", { name: /add assignees/i }))
    fireEvent.click(await screen.findByRole("button", { name: /member/ }))

    await waitFor(() => {
      expect(mockUpdateTasks).toHaveBeenCalledWith([{ id: TASK_ID_1, assignees: [MEMBER_ID] }])
    })
  })

  it("clears assignees across the selection via Unassign all", async () => {
    renderButton(
      [TASK_ID_1, TASK_ID_2],
      [adminUser, memberUser],
      [
        createTask({ id: TASK_ID_1, assignees: [MEMBER_ID] }),
        createTask({ id: TASK_ID_2, assignees: [] }),
      ],
    )

    fireEvent.click(screen.getByRole("button", { name: /add assignees/i }))
    fireEvent.click(await screen.findByRole("button", { name: /unassign all/i }))

    await waitFor(() => {
      expect(mockUpdateTasks).toHaveBeenCalledWith([{ id: TASK_ID_1, assignees: [] }])
    })
  })
})
