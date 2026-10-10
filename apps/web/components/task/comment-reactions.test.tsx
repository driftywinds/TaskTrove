/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import type { ReactNode } from "react"
import { CommentReactions, REACTION_EMOJIS, toggleCommentReaction } from "./comment-reactions"
import { AddReactionButton } from "./add-reaction-button"
import { tasksAtom, userAtom, usersAtom } from "@tasktrove/atoms/data/base/atoms"
import { createUserId, createTaskId, createCommentId } from "@tasktrove/types/id"
import type { Task, TaskComment, User } from "@tasktrove/types/core"

const mockUpdateTask = vi.hoisted(() => vi.fn())

vi.mock("@tasktrove/atoms/core/tasks", async () => {
  const { atom: createAtom } = await import("jotai")
  return {
    updateTaskAtom: createAtom(null, (_get, _set, args: unknown) => {
      mockUpdateTask(args)
    }),
  }
})

const ME_ID = createUserId("11111111-1111-4111-8111-111111111111")
const OTHER_ID = createUserId("22222222-2222-4222-8222-222222222222")

const me: User = { id: ME_ID, username: "alice", password: "hashed", role: "admin" }
const other: User = { id: OTHER_ID, username: "bob", password: "hashed", role: "user" }

const TASK_ID = createTaskId("44444444-4444-4444-8444-444444444444")
const COMMENT_ID = createCommentId("55555555-5555-4555-8555-555555555555")

const comment: TaskComment = {
  id: COMMENT_ID,
  content: "Hello",
  userId: OTHER_ID,
  createdAt: new Date("2024-06-01T12:00:00Z"),
}

const task: Task = {
  id: TASK_ID,
  title: "Test task",
  completed: false,
  priority: 1,
  labels: [],
  subtasks: [],
  comments: [comment],
  createdAt: new Date("2024-06-01T12:00:00Z"),
  recurringMode: "dueDate",
}

function renderWithAtoms(ui: ReactNode, taskComment: TaskComment = comment) {
  const taskWithComment: Task = { ...task, comments: [taskComment] }
  const initialValues: HydrateValues = [
    [tasksAtom as unknown as WritableAtom<Task[], [Task[]], void>, [taskWithComment]],
    [usersAtom as unknown as WritableAtom<User[], [User[]], void>, [me, other]],
    [userAtom as unknown as WritableAtom<User, [User], void>, me],
  ]
  return render(<TestJotaiProvider initialValues={initialValues}>{ui}</TestJotaiProvider>)
}

beforeEach(() => {
  vi.clearAllMocks()
  mockUpdateTask.mockResolvedValue(undefined)
})

describe("toggleCommentReaction (recovered Pro semantics)", () => {
  it("appends the user's reaction when absent", () => {
    const next = toggleCommentReaction([comment], COMMENT_ID, "👍", ME_ID)
    expect(next[0]?.reactions).toEqual([{ emoji: "👍", userId: ME_ID }])
  })

  it("removes the user's exact reaction when present", () => {
    const withReaction: TaskComment = {
      ...comment,
      reactions: [
        { emoji: "👍", userId: ME_ID },
        { emoji: "👍", userId: OTHER_ID },
      ],
    }
    const next = toggleCommentReaction([withReaction], COMMENT_ID, "👍", ME_ID)
    expect(next[0]?.reactions).toEqual([{ emoji: "👍", userId: OTHER_ID }])
  })

  it("leaves other comments untouched", () => {
    const otherComment: TaskComment = {
      ...comment,
      id: createCommentId("66666666-6666-4666-8666-666666666666"),
    }
    const next = toggleCommentReaction([comment, otherComment], COMMENT_ID, "👍", ME_ID)
    expect(next[1]).toEqual(otherComment)
  })
})

describe("CommentReactions", () => {
  it("returns null when the comment has no reactions", () => {
    const { container } = renderWithAtoms(<CommentReactions comment={comment} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("groups reactions by emoji with counts", () => {
    const withReactions: TaskComment = {
      ...comment,
      reactions: [
        { emoji: "👍", userId: ME_ID },
        { emoji: "👍", userId: OTHER_ID },
        { emoji: "🎉", userId: OTHER_ID },
      ],
    }
    renderWithAtoms(<CommentReactions comment={withReactions} />)

    expect(screen.getByText("👍")).toBeInTheDocument()
    expect(screen.getByText("🎉")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
  })

  it("toggles the current user's reaction on click", async () => {
    const withMyReaction: TaskComment = {
      ...comment,
      reactions: [{ emoji: "🔥", userId: ME_ID }],
    }
    renderWithAtoms(<CommentReactions comment={withMyReaction} />, withMyReaction)

    fireEvent.click(screen.getByText("🔥"))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: {
          id: TASK_ID,
          comments: [{ ...withMyReaction, reactions: [] }],
        },
      })
    })
  })
})

describe("AddReactionButton", () => {
  it("renders the recovered test id and opens the emoji grid", () => {
    renderWithAtoms(<AddReactionButton comment={comment} />)

    expect(screen.getByTestId(`comment-react-button-${COMMENT_ID}`)).toBeInTheDocument()

    fireEvent.click(screen.getByTestId(`comment-react-button-${COMMENT_ID}`))

    // Recovered Pro palette: 10 emojis in a 5-column grid
    for (const emoji of REACTION_EMOJIS) {
      expect(screen.getByRole("button", { name: emoji })).toBeInTheDocument()
    }
  })

  it("adds the picked emoji for the current user and closes", async () => {
    renderWithAtoms(<AddReactionButton comment={comment} />)

    fireEvent.click(screen.getByTestId(`comment-react-button-${COMMENT_ID}`))
    fireEvent.click(screen.getByRole("button", { name: "🚀" }))

    await waitFor(() => {
      expect(mockUpdateTask).toHaveBeenCalledWith({
        updateRequest: {
          id: TASK_ID,
          comments: [{ ...comment, reactions: [{ emoji: "🚀", userId: ME_ID }] }],
        },
      })
    })
  })
})
