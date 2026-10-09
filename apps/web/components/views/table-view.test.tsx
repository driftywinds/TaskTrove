import React from "react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, within } from "@/test-utils"
import { labelsAtom } from "@tasktrove/atoms/data/base/atoms"
import type { Label, Project, Task, ViewState } from "@tasktrove/types/core"
import type { RouteContext } from "@tasktrove/atoms/ui/navigation"
import type { TaskId } from "@tasktrove/types/id"
import { createTaskId, createLabelId, createProjectId, createGroupId } from "@tasktrove/types/id"
import { TableView } from "./table-view"

const { mockToggleTask } = vi.hoisted(() => ({
  mockToggleTask: vi.fn(),
}))

// Replace the centralized toggleTaskAtom stub with a write-tracking atom so we can
// assert which task ids get toggled.
vi.mock("@tasktrove/atoms/core/tasks", async () => {
  const { atom } = await import("jotai")
  return {
    toggleTaskAtom: atom(null, (_get, _set, taskId: TaskId) => {
      mockToggleTask(taskId)
    }),
  }
})

const TASK_ID_1 = createTaskId("550e8400-e29b-41d4-a716-446655440101")
const TASK_ID_2 = createTaskId("550e8400-e29b-41d4-a716-446655440102")
const LABEL_ID_1 = createLabelId("550e8400-e29b-41d4-a716-446655440201")
const PROJECT_ID = createProjectId("550e8400-e29b-41d4-a716-446655440301")
const SECTION_ID_1 = createGroupId("550e8400-e29b-41d4-a716-446655440401")
const SECTION_ID_2 = createGroupId("550e8400-e29b-41d4-a716-446655440402")

const mockLabels: Label[] = [{ id: LABEL_ID_1, name: "Bug", color: "#ef4444" }]

const createFixtureTask = (overrides: Partial<Task> & Pick<Task, "id" | "title">): Task => ({
  completed: false,
  priority: 4,
  labels: [],
  subtasks: [],
  comments: [],
  recurringMode: "dueDate",
  createdAt: new Date("2024-01-01T00:00:00.000Z"),
  ...overrides,
})

const lowPriorityTask = createFixtureTask({
  id: TASK_ID_2,
  title: "Low priority task",
  priority: 4,
  projectId: PROJECT_ID,
})

const highPriorityTask = createFixtureTask({
  id: TASK_ID_1,
  title: "High priority task",
  priority: 1,
  labels: [LABEL_ID_1],
  estimation: 3600,
  projectId: PROJECT_ID,
})

const mockProject: Project = {
  id: PROJECT_ID,
  name: "Test Project",
  color: "#3b82f6",
  sections: [
    { id: SECTION_ID_1, name: "Backlog", type: "section", items: [] },
    { id: SECTION_ID_2, name: "Doing", type: "section", items: [TASK_ID_1] },
  ],
}

const mockRouteContext: RouteContext = {
  pathname: "/inbox",
  viewId: "inbox",
  routeType: "standard",
}

const defaultViewState: ViewState = {
  viewMode: "table",
  sortBy: "default",
  sortDirection: "asc",
  showCompleted: false,
  showOverdue: true,
  searchQuery: "",
  showSidePanel: false,
  compactView: false,
  collapsedSections: [],
}

function renderTableView(overrides: Partial<Parameters<typeof TableView>[0]> = {}) {
  const props: Parameters<typeof TableView>[0] = {
    tasks: [lowPriorityTask, highPriorityTask],
    project: mockProject,
    routeContext: mockRouteContext,
    viewState: defaultViewState,
    ...overrides,
  }
  return render(<TableView {...props} />, {
    initialAtomValues: [[labelsAtom, mockLabels]],
  })
}

describe("TableView", () => {
  beforeEach(() => {
    mockToggleTask.mockReset()
  })

  it("renders a row per task with titles", () => {
    renderTableView()

    expect(screen.getByText("Low priority task")).toBeInTheDocument()
    expect(screen.getByText("High priority task")).toBeInTheDocument()
    // header row + one row per task
    expect(screen.getAllByRole("row")).toHaveLength(3)
  })

  it("populates priority, labels, and estimation cells", () => {
    renderTableView()

    expect(screen.getByText("P1")).toBeInTheDocument()
    expect(screen.getByText("P4")).toBeInTheDocument()
    expect(screen.getByText("Bug")).toBeInTheDocument()
    expect(screen.getByText("1h")).toBeInTheDocument()
  })

  it("resolves section names from the project sections", () => {
    renderTableView()

    const rows = screen.getAllByRole("row")
    const [, firstRow, secondRow] = rows
    if (!firstRow || !secondRow) {
      throw new Error("Expected at least two table rows")
    }
    // low priority task sits in the default (first) section, high priority task in "Doing"
    expect(within(firstRow).getByText("Backlog")).toBeInTheDocument()
    expect(within(secondRow).getByText("Doing")).toBeInTheDocument()
  })

  it("toggles task completion via the toggle mutation", () => {
    renderTableView()

    fireEvent.click(screen.getByRole("checkbox", { name: "Toggle Low priority task" }))

    expect(mockToggleTask).toHaveBeenCalledTimes(1)
    expect(mockToggleTask).toHaveBeenCalledWith(TASK_ID_2)
  })

  it("sorts tasks when the priority column header is clicked", () => {
    renderTableView()

    const priorityHeader = screen.getByRole("columnheader", { name: "Priority" })
    expect(priorityHeader).toHaveAttribute("aria-sort", "none")

    // tasks arrive low-priority first (view pipeline order)
    let rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("Low priority task")
    expect(rows[2]).toHaveTextContent("High priority task")

    fireEvent.click(screen.getByRole("button", { name: "Priority" }))

    // react-table's first sort direction for the numeric priority column is descending
    expect(priorityHeader).toHaveAttribute("aria-sort", "descending")
    rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("Low priority task")
    expect(rows[2]).toHaveTextContent("High priority task")

    // second click toggles to ascending
    fireEvent.click(screen.getByRole("button", { name: "Priority" }))

    expect(priorityHeader).toHaveAttribute("aria-sort", "ascending")
    rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("High priority task")
    expect(rows[2]).toHaveTextContent("Low priority task")
  })

  it("initializes sorting from the view state sort settings", () => {
    renderTableView({
      viewState: { ...defaultViewState, sortBy: "priority", sortDirection: "desc" },
    })

    const priorityHeader = screen.getByRole("columnheader", { name: "Priority" })
    expect(priorityHeader).toHaveAttribute("aria-sort", "descending")

    // descending priority: lowest priority (4) first
    const rows = screen.getAllByRole("row")
    expect(rows[1]).toHaveTextContent("Low priority task")
    expect(rows[2]).toHaveTextContent("High priority task")
  })

  it("shows an empty state when there are no tasks", () => {
    renderTableView({ tasks: [] })

    expect(screen.getByText("No tasks to display")).toBeInTheDocument()
    expect(screen.queryByRole("table")).not.toBeInTheDocument()
  })
})
