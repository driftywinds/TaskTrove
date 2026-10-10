/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@/test-utils"
import userEvent from "@testing-library/user-event"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import { ProjectMembersDialog } from "./project-members-dialog"
import { usersAtom, userAtom } from "@tasktrove/atoms/data/base/atoms"
import { DEFAULT_PROJECT_SECTION } from "@tasktrove/types/defaults"
import { createProjectId, createUserId } from "@tasktrove/types/id"
import type { Project, User } from "@tasktrove/types/core"

const mockAddMember = vi.hoisted(() => vi.fn())
const mockRemoveMember = vi.hoisted(() => vi.fn())
const mockTransferOwnership = vi.hoisted(() => vi.fn())
const mockMakePublic = vi.hoisted(() => vi.fn())

vi.mock("@tasktrove/atoms/core/projects", async () => {
  const { atom: createAtom } = await import("jotai")
  return {
    addProjectMemberAtom: createAtom(null, (_get, _set, args: unknown) => {
      mockAddMember(args)
    }),
    removeProjectMemberAtom: createAtom(null, (_get, _set, args: unknown) => {
      mockRemoveMember(args)
    }),
    transferProjectOwnershipAtom: createAtom(null, (_get, _set, args: unknown) => {
      mockTransferOwnership(args)
    }),
    makeProjectPublicAtom: createAtom(null, (_get, _set, args: unknown) => {
      mockMakePublic(args)
    }),
  }
})

const OWNER_ID = createUserId("11111111-1111-4111-8111-111111111111")
const MEMBER_ID = createUserId("22222222-2222-4222-8222-222222222222")
const OTHER_ID = createUserId("33333333-3333-4333-8333-333333333333")
const PROJECT_ID = createProjectId("99999999-9999-4999-8999-999999999999")

const users: User[] = [
  { id: OWNER_ID, username: "alice", password: "x", role: "user" },
  { id: MEMBER_ID, username: "bob", password: "x", role: "user" },
  { id: OTHER_ID, username: "carol", password: "x", role: "user" },
]

function projectWith(members?: User["id"][]): Project {
  return {
    id: PROJECT_ID,
    name: "Test Project",
    color: "#3b82f6",
    sections: [DEFAULT_PROJECT_SECTION],
    ...(members ? { members } : {}),
  }
}

function renderDialog(project: Project, actingUserId: User["id"] = OWNER_ID) {
  const actingUser = users.find((u) => u.id === actingUserId) ?? users[0]
  const initialValues: HydrateValues = [
    [usersAtom as unknown as WritableAtom<User[], [User[]], void>, users],
    [userAtom as unknown as WritableAtom<User, [User], void>, actingUser],
  ]
  return render(
    <TestJotaiProvider initialValues={initialValues}>
      <ProjectMembersDialog project={project} open={true} onOpenChange={() => {}} />
    </TestJotaiProvider>,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe("ProjectMembersDialog (recovered Pro contract)", () => {
  it("shows the owner badge for members[0] and member badges for the rest", () => {
    renderDialog(projectWith([OWNER_ID, MEMBER_ID]))

    expect(screen.getByText("alice")).toBeInTheDocument()
    expect(screen.getByText("bob")).toBeInTheDocument()
    expect(screen.getByText("Owner")).toBeInTheDocument()
    expect(screen.getByText("Member")).toBeInTheDocument()
    expect(screen.getByText("(You)")).toBeInTheDocument()
    expect(screen.queryByText("No members in this project")).not.toBeInTheDocument()
  })

  it("shows the public notice for public projects", () => {
    renderDialog(projectWith())

    expect(
      screen.getByText("This project is public. Add members to make it private."),
    ).toBeInTheDocument()
    expect(screen.getByText("No members in this project")).toBeInTheDocument()
    expect(screen.queryByText("Make project public")).not.toBeInTheDocument()
  })

  it("lets the owner transfer ownership and remove members", async () => {
    renderDialog(projectWith([OWNER_ID, MEMBER_ID]))

    fireEvent.click(screen.getByTitle("Make owner"))
    await waitFor(() => {
      expect(mockTransferOwnership).toHaveBeenCalledWith({
        projectId: PROJECT_ID,
        userId: MEMBER_ID,
      })
    })

    fireEvent.click(screen.getByTitle("Remove member"))
    await waitFor(() => {
      expect(mockRemoveMember).toHaveBeenCalledWith({
        projectId: PROJECT_ID,
        userId: MEMBER_ID,
      })
    })
  })

  it("lets members leave (but never the owner)", () => {
    renderDialog(projectWith([OWNER_ID, MEMBER_ID]), MEMBER_ID)

    // The acting member sees "Leave project" on their own row; the owner row has no actions
    expect(screen.getByTitle("Leave project")).toBeInTheDocument()
    expect(screen.queryByTitle("Make owner")).not.toBeInTheDocument()
    expect(screen.queryByText("Make project public")).not.toBeInTheDocument()
  })

  it("makes the project public from the owner panel", async () => {
    renderDialog(projectWith([OWNER_ID, MEMBER_ID]))

    expect(screen.getByText("Make project public")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: /make public/i }))

    await waitFor(() => {
      expect(mockMakePublic).toHaveBeenCalledWith({
        projectId: PROJECT_ID,
        userId: OWNER_ID,
      })
    })
  })

  it("adds a selected user as member", async () => {
    const user = userEvent.setup()
    renderDialog(projectWith([OWNER_ID, MEMBER_ID]))

    // Open the Radix select and pick the addable user
    await user.click(screen.getByRole("combobox"))
    await user.click(await screen.findByRole("option", { name: /carol/ }))
    await user.click(screen.getByRole("button", { name: /add member/i }))

    await waitFor(() => {
      expect(mockAddMember).toHaveBeenCalledWith({
        projectId: PROJECT_ID,
        userId: OTHER_ID,
      })
    })
  })
})
