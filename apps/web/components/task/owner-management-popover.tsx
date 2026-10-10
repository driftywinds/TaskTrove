"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { Check } from "lucide-react"
import { usersAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateTaskAtom } from "@tasktrove/atoms/core/tasks"
import type { Task } from "@tasktrove/types/core"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import { useTranslation } from "@tasktrove/i18n"

interface OwnerManagementPopoverProps {
  task: Task
  children: ReactNode
}

/**
 * Popover to set the owner of a task (Pro).
 * Writes the task's `ownerId` via `updateTaskAtom`.
 *
 * Note: owner clearing needs explicit clear semantics in the partial-task
 * update path (the optimistic merge strips `undefined`), so this MVP sets an
 * owner but does not yet offer removal.
 */
export function OwnerManagementPopover({ task, children }: OwnerManagementPopoverProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const updateTask = useSetAtom(updateTaskAtom)
  const [open, setOpen] = useState(false)

  const setOwner = async (userId: (typeof users)[number]["id"]) => {
    try {
      await updateTask({ updateRequest: { id: task.id, ownerId: userId } })
      setOpen(false)
    } catch {
      // Error toast is surfaced by the mutation.
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <p className="mb-2 text-sm font-medium">{t("people.owner.title", "Owner")}</p>
        <div className="space-y-1">
          {users.map((user) => {
            const isOwner = task.ownerId === user.id
            return (
              <Button
                key={user.id}
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => void setOwner(user.id)}
              >
                <UserAvatar username={user.username} avatar={user.avatar} size="sm" />
                <span className="flex-1 text-left">{user.username}</span>
                {isOwner && <Check className="size-4" />}
              </Button>
            )
          })}
          {users.length === 0 && (
            <p className="text-sm text-muted-foreground">
              {t("people.owner.empty", "No users yet.")}
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
