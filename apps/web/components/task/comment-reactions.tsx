"use client"

import { useAtomValue, useSetAtom } from "jotai"
import { useTranslation } from "@tasktrove/i18n"
import { tasksAtom, userAtom, usersAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateTaskAtom } from "@tasktrove/atoms/core/tasks"
import type { TaskComment } from "@tasktrove/types/core"
import type { Reaction } from "@tasktrove/types/rewards"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

/**
 * Emoji palette recovered verbatim from the Pro bundle
 * (module 25748, `AddReactionButton`).
 */
export const REACTION_EMOJIS: readonly string[] = [
  "👍",
  "❤️",
  "😊",
  "😂",
  "🎉",
  "🚀",
  "👀",
  "🔥",
  "✨",
  "💯",
]

/**
 * Recovered Pro toggle semantics (module 25748): if the current user already
 * has this exact reaction, remove it; otherwise append `{ emoji, userId }`.
 */
export function toggleCommentReaction(
  comments: TaskComment[],
  commentId: TaskComment["id"],
  emoji: string,
  userId: Reaction["userId"],
): TaskComment[] {
  return comments.map((comment) => {
    if (comment.id !== commentId) return comment
    const reactions = comment.reactions ?? []
    const hasReaction = reactions.some((r) => r.emoji === emoji && r.userId === userId)
    const nextReactions = hasReaction
      ? reactions.filter((r) => r.emoji !== emoji || r.userId !== userId)
      : [...reactions, { emoji, userId }]
    return { ...comment, reactions: nextReactions }
  })
}

/**
 * Writes a reaction toggle for a comment (Pro behavior): finds the task that
 * owns the comment and updates its comments array. Comments that do not belong
 * to a saved task (e.g. quick-add drafts) are ignored, matching the Pro
 * bundle's task lookup.
 */
export function useToggleCommentReaction() {
  const currentUser = useAtomValue(userAtom)
  const tasks = useAtomValue(tasksAtom)
  const updateTask = useSetAtom(updateTaskAtom)

  return (comment: TaskComment, emoji: string) => {
    const task = tasks.find((candidate) => candidate.comments.some((c) => c.id === comment.id))
    if (!task) return
    updateTask({
      updateRequest: {
        id: task.id,
        comments: toggleCommentReaction(task.comments, comment.id, emoji, currentUser.id),
      },
    })
  }
}

interface CommentReactionsProps {
  comment: TaskComment
}

/**
 * Reaction chips for a comment (Pro `CommentReactions`).
 *
 * Groups the comment's reactions by emoji, shows the count per emoji with the
 * reacting usernames in a tooltip, and toggles the current user's reaction on
 * click. Returns null when the comment has no reactions.
 */
export function CommentReactions({ comment }: CommentReactionsProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const currentUser = useAtomValue(userAtom)
  const toggleReaction = useToggleCommentReaction()

  const reactions = comment.reactions ?? []
  const groups = reactions.reduce<Record<string, Reaction[]>>((acc, reaction) => {
    const existing = acc[reaction.emoji]
    if (existing) {
      existing.push(reaction)
    } else {
      acc[reaction.emoji] = [reaction]
    }
    return acc
  }, {})

  if (Object.keys(groups).length === 0) {
    return null
  }

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex flex-wrap gap-1 mt-1.5">
        {Object.entries(groups).map(([emoji, groupReactions]) => (
          <Tooltip key={emoji}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleReaction(comment, emoji)}
                className={cn(
                  "h-5 px-1.5 text-xs gap-1",
                  reactions.some((r) => r.emoji === emoji && r.userId === currentUser.id)
                    ? "bg-primary/10 hover:bg-primary/20"
                    : "hover:bg-accent",
                )}
              >
                <span>{emoji}</span>
                <span className="text-muted-foreground text-[10px]">{groupReactions.length}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">
                {groupReactions
                  .map(
                    (reaction) =>
                      users.find((user) => user.id === reaction.userId)?.username ||
                      t("reactions.unknownUser", "Unknown"),
                  )
                  .join(", ")}
              </p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
