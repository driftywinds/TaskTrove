/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, within, waitFor } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import type { ReactNode } from "react"
import { UserManagementForm } from "./user-management-form"
import { userAtom, usersAtom, tasksAtom, projectsAtom } from "@tasktrove/atoms/data/base/atoms"
import { createUserId, createTaskId, createProjectId } from "@tasktrove/types/id"
import { DEFAULT_PROJECT_SECTION } from "@tasktrove/types/defaults"
import { DEFAULT_MAX_USERS } from "@tasktrove/constants"
import type { User, Task, Project } from "@tasktrove/types/core"

const mutationMocks = vi.hoisted(() => ({
  create: { mutateAsync: vi.fn() },
  update: { mutateAsync: vi.fn() },
  delete: { mutateAsync: vi.fn() },
}))

vi.mock("@tasktrove/atoms/mutations/user", async () => {
  const { atom: createAtom } = await import("jotai")
  return {
    createUserMutationAtom: createAtom(mutationMocks.create),
    updateUserMutationAtom: createAtom(mutationMocks.update),
    deleteUserMutationAtom: createAtom(mutationMocks.delete),
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
  password: "hashed-admin",
  role: "admin",
}

const memberUser: User = {
  id: MEMBER_ID,
  username: "member",
  password: "hashed-member",
  role: "user",
}

const ownedTask: Task = {
  id: createTaskId("44444444-4444-4444-8444-444444444444"),
  title: "Owned by member",
  completed: false,
  priority: 1,
  labels: [],
  subtasks: [],
  comments: [],
  createdAt: new Date("2024-06-01T12:00:00Z"),
  recurringMode: "dueDate",
  ownerId: MEMBER_ID,
  assignees: [ADMIN_ID],
}

const sharedProject: Project = {
  id: createProjectId("55555555-5555-4555-8555-555555555555"),
  name: "Shared",
  color: "#ff0000",
  sections: [DEFAULT_PROJECT_SECTION],
  members: [ADMIN_ID, MEMBER_ID],
}

function renderForm(
  options: {
    users?: User[]
    currentUser?: User
    tasks?: Task[]
    projects?: Project[]
  } = {},
) {
  const users = options.users ?? [adminUser, memberUser]
  const currentUser = options.currentUser ?? adminUser
  // The test setup mocks these atoms as writable atoms; the real module types
  // usersAtom/userAtom as read-only (derived), so bridge the types for hydration.
  const initialValues: HydrateValues = [
    [usersAtom as unknown as WritableAtom<User[], [User[]], void>, users],
    [userAtom as unknown as WritableAtom<User, [User], void>, currentUser],
    [tasksAtom as unknown as WritableAtom<Task[], [Task[]], void>, options.tasks ?? [ownedTask]],
    [
      projectsAtom as unknown as WritableAtom<Project[], [Project[]], void>,
      options.projects ?? [sharedProject],
    ],
  ]
  return render(
    <TestJotaiProvider initialValues={initialValues}>
      <UserManagementForm />
    </TestJotaiProvider>,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  mutationMocks.create.mutateAsync.mockResolvedValue({ success: true })
  mutationMocks.update.mutateAsync.mockResolvedValue({ success: true })
  mutationMocks.delete.mutateAsync.mockResolvedValue({ success: true })
})

/** Returns the table row element that renders the given username. */
function rowFor(username: string): HTMLElement {
  const row = screen.getByText(username).closest("tr")
  if (!row) {
    throw new Error(`expected a table row for "${username}"`)
  }
  return row
}

describe("UserManagementForm", () => {
  it("lists users with role badges and the (You) marker", () => {
    renderForm()

    expect(screen.getByText("admin")).toBeInTheDocument()
    expect(screen.getByText("member")).toBeInTheDocument()
    expect(within(rowFor("admin")).getByText("Admin")).toBeInTheDocument()
    expect(within(rowFor("member")).getByText("User")).toBeInTheDocument()
    expect(within(rowFor("admin")).getByText("(You)")).toBeInTheDocument()
    expect(within(rowFor("member")).queryByText("(You)")).not.toBeInTheDocument()
  })

  it("shows the user limit and per-user task/project counts", () => {
    renderForm()

    expect(screen.getByText(/User limit: 2 \/ 50/)).toBeInTheDocument()
    // member owns the task and shares the project: 1 task + 1 project
    expect(within(rowFor("member")).getAllByText("1")).toHaveLength(2)
    // admin is assignee + member: 1 task + 1 project
    expect(within(rowFor("admin")).getAllByText("1")).toHaveLength(2)
  })

  it("lets an admin create a user after validation", async () => {
    renderForm()

    fireEvent.click(screen.getByRole("button", { name: /add user/i }))

    // Empty username -> inline validation error
    fireEvent.click(screen.getByRole("button", { name: /create user/i }))
    expect(screen.getByText("Username is required")).toBeInTheDocument()
    expect(mutationMocks.create.mutateAsync).not.toHaveBeenCalled()

    // Username without password -> inline validation error
    fireEvent.change(screen.getByLabelText("Username"), { target: { value: "newbie" } })
    fireEvent.click(screen.getByRole("button", { name: /create user/i }))
    expect(screen.getByText("Password is required")).toBeInTheDocument()

    // Valid input -> mutation called with the form values
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "s3cret" } })
    fireEvent.click(screen.getByRole("button", { name: /create user/i }))

    expect(mutationMocks.create.mutateAsync).toHaveBeenCalledWith({
      username: "newbie",
      password: "s3cret",
      role: "user",
    })
    // Dialog closes after the successful mutation
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })

  it("keeps the dialog open when the create mutation fails", async () => {
    mutationMocks.create.mutateAsync.mockRejectedValue(new Error("Username already exists"))
    renderForm()

    fireEvent.click(screen.getByRole("button", { name: /add user/i }))
    fireEvent.change(screen.getByLabelText("Username"), { target: { value: "dup" } })
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "pw" } })
    fireEvent.click(screen.getByRole("button", { name: /create user/i }))

    const dialog = await screen.findByRole("dialog")
    expect(within(dialog).getByRole("heading", { name: "Add user" })).toBeInTheDocument()
    expect(mutationMocks.create.mutateAsync).toHaveBeenCalled()
  })

  it("edits another user, sending only changed fields", async () => {
    renderForm()

    fireEvent.click(screen.getByRole("button", { name: "Edit user member" }))

    // Prefilled username; role control present for other users
    expect(screen.getByLabelText("Username")).toHaveValue("member")
    expect(screen.getByLabelText("Role")).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText("Username"), { target: { value: "renamed" } })
    fireEvent.click(screen.getByRole("button", { name: /save changes/i }))

    await waitFor(() => {
      expect(mutationMocks.update.mutateAsync).toHaveBeenCalledWith({
        id: MEMBER_ID,
        username: "renamed",
      })
    })
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })

  it("hides the role control when editing yourself", () => {
    renderForm()

    fireEvent.click(screen.getByRole("button", { name: "Edit user admin" }))

    expect(screen.getByLabelText("Username")).toHaveValue("admin")
    expect(screen.queryByLabelText("Role")).not.toBeInTheDocument()
  })

  it("never lets an admin delete themselves but allows deleting others", async () => {
    renderForm()

    // Self delete is disabled (server also guards it)
    expect(screen.getByRole("button", { name: "Delete user admin" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Delete user member" })).toBeEnabled()

    fireEvent.click(screen.getByRole("button", { name: "Delete user member" }))
    const dialog = screen.getByRole("dialog")
    expect(within(dialog).getByRole("heading", { name: "Delete user" })).toBeInTheDocument()

    fireEvent.click(within(dialog).getByRole("button", { name: "Delete user" }))
    await waitFor(() => {
      expect(mutationMocks.delete.mutateAsync).toHaveBeenCalledWith({ userId: MEMBER_ID })
    })
  })

  it("disables the add button when the user limit is reached", () => {
    const manyUsers = Array.from({ length: DEFAULT_MAX_USERS }, (_, index) => ({
      ...adminUser,
      id: createUserId(`00000000-0000-4000-8000-${String(index).padStart(12, "0")}`),
      username: `user${index}`,
    }))

    renderForm({ users: manyUsers })

    expect(screen.getByRole("button", { name: /add user/i })).toBeDisabled()
  })

  it("renders a read-only view for non-admins", () => {
    renderForm({ currentUser: memberUser })

    expect(screen.getByText("Only admins can manage users")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /add user/i })).not.toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /edit user/i })).not.toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /delete user/i })).not.toBeInTheDocument()
  })

  it("does not offer deleting the last remaining user", () => {
    renderForm({ users: [adminUser], tasks: [], projects: [] })

    expect(screen.getByRole("button", { name: "Delete user admin" })).toBeDisabled()
  })
})
