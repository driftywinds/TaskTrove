"use client"

import { useAtomValue } from "jotai"
import { usersAtom } from "@tasktrove/atoms/data/base/atoms"
import type { Task } from "@tasktrove/types/core"
import type { UserId } from "@tasktrove/types/id"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import { cn } from "@/lib/utils"

interface AssigneeBadgesProps {
  /** The task to show assignees for. Absent in the quick-add draft context. */
  task?: Task
  className?: string
  /** Also render the task owner (when not already an assignee) */
  showOwner?: boolean
}

/**
 * Renders the assignees of a task as avatar chips (Pro).
 * Unknown user ids fall back to an initial-less avatar. Optionally includes
 * the owner when `showOwner` is true (default). Returns null when there is no
 * task (quick-add draft context) or no assignees.
 */
export function AssigneeBadges({ task, className, showOwner = true }: AssigneeBadgesProps) {
  const users = useAtomValue(usersAtom)

  if (!task) {
    return null
  }

  const ids: UserId[] = [...(task.assignees ?? [])]
  if (showOwner && task.ownerId && !ids.includes(task.ownerId)) {
    ids.push(task.ownerId)
  }

  if (ids.length === 0) {
    return null
  }

  return (
    <span className={cn("flex items-center gap-0.5", className)}>
      {ids.map((userId) => {
        const user = users.find((u) => u.id === userId)
        return (
          <UserAvatar
            key={userId}
            username={user?.username}
            avatar={user?.avatar}
            size="sm"
            className="ring-1 ring-background"
          />
        )
      })}
    </span>
  )
}
