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

interface PeopleManagementPopoverProps {
  /** Task being edited. Absent in the quick-add draft context. */
  task?: Task
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

/**
 * Combined people picker (assignees) for a task (Pro).
 *
 * When a `task` is provided, toggling writes the task's `assignees` array.
 * In the quick-add draft context (no task) the picker lists users but does
 * not persist a draft selection yet (documented follow-up).
 */
export function PeopleManagementPopover({
  task,
  onOpenChange,
  children,
}: PeopleManagementPopoverProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const updateTask = useSetAtom(updateTaskAtom)
  const [open, setOpen] = useState(false)

  const assignees = task?.assignees ?? []

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  const toggleAssignee = async (userId: UserId) => {
    if (!task) return // draft context: not persisted yet
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
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
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
