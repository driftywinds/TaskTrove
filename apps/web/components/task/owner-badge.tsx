"use client"

import { useAtomValue } from "jotai"
import { usersAtom } from "@tasktrove/atoms/data/base/atoms"
import type { Task } from "@tasktrove/types/core"
import { UserAvatar } from "@/components/ui/custom/user-avatar"

interface OwnerBadgeProps {
  task: Task
  className?: string
}

/**
 * Renders the owner of a task as an avatar chip (Pro).
 * Returns null when the task has no owner.
 */
export function OwnerBadge({ task, className }: OwnerBadgeProps) {
  const users = useAtomValue(usersAtom)

  if (!task.ownerId) {
    return null
  }

  const owner = users.find((u) => u.id === task.ownerId)

  return (
    <span className={className}>
      <UserAvatar username={owner?.username} avatar={owner?.avatar} size="sm" />
    </span>
  )
}
