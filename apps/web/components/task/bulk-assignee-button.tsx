"use client"

import { useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { Check, Users } from "lucide-react"
import { usersAtom, tasksAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateTasksAtom } from "@tasktrove/atoms/core/tasks"
import type { UserId, TaskId } from "@tasktrove/types/id"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import { useTranslation } from "@tasktrove/i18n"
import { cn } from "@/lib/utils"

interface BulkAssigneeButtonProps {
  taskIds: TaskId[]
}

/**
 * Bulk assignee control for the selection toolbar (Pro).
 *
 * Assigning a user appends them to `assignees` of every selected task that
 * does not already have them (Pro `bulkAssignUsers` semantics: per-task
 * assigned/unassigned/notFound accounting, recovered from the bundle).
 * "Unassign all" clears `assignees` across the selection.
 */
export function BulkAssigneeButton({ taskIds }: BulkAssigneeButtonProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const allTasks = useAtomValue(tasksAtom)
  const updateTasks = useSetAtom(updateTasksAtom)
  const [open, setOpen] = useState(false)

  if (users.length === 0 || taskIds.length === 0) {
    return null
  }

  const selectedTaskIds = new Set<TaskId>(taskIds)
  const selectedTasks = allTasks.filter((task) => selectedTaskIds.has(task.id))

  const handleAssign = (userId: UserId) => {
    const updates = selectedTasks
      .filter((task) => !(task.assignees ?? []).includes(userId))
      .map((task) => ({ id: task.id, assignees: [...(task.assignees ?? []), userId] }))
    if (updates.length > 0) {
      updateTasks(updates)
    }
    setOpen(false)
  }

  const handleUnassignAll = () => {
    const updates = selectedTasks
      .filter((task) => (task.assignees ?? []).length > 0)
      .map((task) => ({ id: task.id, assignees: [] }))
    if (updates.length > 0) {
      updateTasks(updates)
    }
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost" className="h-8">
          <Users className="h-4 w-4 mr-1.5" />
          {t("actions.addAssignees", "Add assignees")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="start">
        <div className="space-y-1">
          {users.map((user) => {
            const assignedEverywhere = selectedTasks.every((task) =>
              (task.assignees ?? []).includes(user.id),
            )
            return (
              <Button
                key={user.id}
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => handleAssign(user.id)}
              >
                <UserAvatar username={user.username} avatar={user.avatar} size="sm" />
                <span className="flex-1 text-left truncate">{user.username}</span>
                {assignedEverywhere && <Check className="size-4" />}
              </Button>
            )
          })}
        </div>
        <div className="mt-2 border-t border-border/50 pt-2">
          <Button
            variant="ghost"
            className={cn("w-full justify-start gap-2 text-muted-foreground")}
            onClick={handleUnassignAll}
          >
            <Users className="size-4" />
            <span className="text-left">{t("people.assignees.unassignAll", "Unassign all")}</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
