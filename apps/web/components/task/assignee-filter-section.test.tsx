/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import { AssigneeFilterSection } from "./assignee-filter-section"
import { usersAtom } from "@tasktrove/atoms/data/base/atoms"
import { createUserId } from "@tasktrove/types/id"
import type { User } from "@tasktrove/types/core"

const mockUpdateFilters = vi.hoisted(() => vi.fn())

vi.mock("@tasktrove/atoms/ui/views", async () => {
  const { atom } = await import("jotai")
  return {
    activeFiltersAtom: atom<Record<string, unknown>>({}),
    updateFiltersAtom: atom(null, (_get, _set, patch: unknown) => {
      mockUpdateFilters(patch)
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

function renderSection(users: User[]) {
  const initialValues: HydrateValues = [
    [usersAtom as unknown as WritableAtom<User[], [User[]], void>, users],
  ]
  return render(
    <TestJotaiProvider initialValues={initialValues}>
      <AssigneeFilterSection />
    </TestJotaiProvider>,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe("AssigneeFilterSection", () => {
  it("renders nothing when there are no users", () => {
    const { container } = renderSection([])
    expect(container).toBeEmptyDOMElement()
  })

  it("renders the section header and one row per user", () => {
    renderSection([adminUser, memberUser])

    expect(screen.getByText("Assignees")).toBeInTheDocument()
    expect(screen.getByText("admin")).toBeInTheDocument()
    expect(screen.getByText("member")).toBeInTheDocument()
  })

  it("adds a user to activeFilters.assignedTo on click", async () => {
    renderSection([adminUser, memberUser])

    fireEvent.click(screen.getByText("member"))

    expect(mockUpdateFilters).toHaveBeenCalledWith({
      assignedTo: [MEMBER_ID],
    })
  })
})
