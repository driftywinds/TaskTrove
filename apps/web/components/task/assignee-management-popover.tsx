"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { Check } from "lucide-react"
import { usersAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateTaskAtom } from "@tasktrove/atoms/core/tasks"
import type { Task } from "@tasktrove/types/core"
import type { UserId } from "@tasktrove/types/id"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import { useTranslation } from "@tasktrove/i18n"

interface AssigneeManagementPopoverProps {
  task: Task
  className?: string
  children: ReactNode
}

/**
 * Popover to assign/unassign users to a task (Pro).
 * Writes the task's `assignees` array via `updateTaskAtom`.
 */
export function AssigneeManagementPopover({
  task,
  className,
  children,
}: AssigneeManagementPopoverProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const updateTask = useSetAtom(updateTaskAtom)
  const [open, setOpen] = useState(false)

  const assignees = task.assignees ?? []

  const toggleAssignee = async (userId: UserId) => {
    const next = assignees.includes(userId)
      ? assignees.filter((id) => id !== userId)
      : [...assignees, userId]
    try {
      await updateTask({ updateRequest: { id: task.id, assignees: next } })
    } catch {
      // Error toast is surfaced by the mutation.
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={className}>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <p className="mb-2 text-sm font-medium">{t("people.assignees.title", "Assignees")}</p>
        <div className="space-y-1">
          {users.map((user) => {
            const assigned = assignees.includes(user.id)
            return (
              <Button
                key={user.id}
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => void toggleAssignee(user.id)}
              >
                <UserAvatar username={user.username} avatar={user.avatar} size="sm" />
                <span className="flex-1 text-left">{user.username}</span>
                {assigned && <Check className="size-4" />}
              </Button>
            )
          })}
          {users.length === 0 && (
            <p className="text-sm text-muted-foreground">
              {t("people.assignees.empty", "No users yet.")}
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
