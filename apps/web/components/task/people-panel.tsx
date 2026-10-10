"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { AlertTriangle, Check, Globe, User, Users } from "lucide-react"
import { usersAtom, userAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateTaskAtom } from "@tasktrove/atoms/core/tasks"
import { peopleOwnerCollapsedAtom, peopleAssigneesCollapsedAtom } from "@tasktrove/atoms/ui/views"
import type { Task } from "@tasktrove/types/core"
import type { UserId } from "@tasktrove/types/id"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import { useTranslation } from "@tasktrove/i18n"
import { cn } from "@/lib/utils"

// =============================================================================
// OWNER SECTION
// =============================================================================

interface OwnerSectionProps {
  task: Task
  className?: string
}

/**
 * Owner picker for a task (Pro `OH` component, recovered contract).
 *
 * - "Public" row clears the owner (ownerId → null).
 * - An owner id that no longer resolves to a user renders as a destructive
 *   "Unknown owner" row whose click clears it.
 * - Admins pick from all users; non-admins only see (and may set) themselves.
 */
export function OwnerSection({ task, className }: OwnerSectionProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const currentUser = useAtomValue(userAtom)
  const updateTask = useSetAtom(updateTaskAtom)

  const isAdmin = currentUser.role === "admin"
  const candidates = isAdmin ? users : users.filter((u) => u.id === currentUser.id)
  const ownerId = task.ownerId ?? null
  const unknownOwner = ownerId !== null && !users.some((u) => u.id === ownerId)

  const clearOwner = async () => {
    if (ownerId === null) return
    try {
      await updateTask({ updateRequest: { id: task.id, ownerId: null } })
    } catch {
      // Error toast is surfaced by the mutation.
    }
  }

  const setOwner = async (userId: UserId) => {
    // Recovered Pro guard: only admins may hand ownership to someone else.
    if (!isAdmin && userId !== currentUser.id) return
    try {
      await updateTask({ updateRequest: { id: task.id, ownerId: userId } })
    } catch {
      // Error toast is surfaced by the mutation.
    }
  }

  const rowClass = (selected: boolean, destructive?: boolean) =>
    cn(
      "flex w-full items-center gap-2 px-2 py-1.5 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm text-left",
      selected && !destructive && "bg-secondary/50",
      destructive && "border border-destructive/50 bg-destructive/10 hover:bg-destructive/20",
    )

  return (
    <div className={cn("space-y-1", className)} data-testid="people-owner-section">
      <div className="max-h-60 overflow-auto">
        {/* Public (no owner) */}
        <button
          type="button"
          className={rowClass(ownerId === null)}
          onClick={() => void clearOwner()}
        >
          <span
            className={cn(
              "flex h-4 w-4 items-center justify-center rounded-full border",
              ownerId === null
                ? "bg-primary text-primary-foreground border-primary"
                : "border-input",
            )}
          >
            {ownerId === null && <Check className="h-3 w-3" />}
          </span>
          <UserAvatar
            size="sm"
            icon={<Globe className="h-4 w-4" />}
            iconBackgroundColor="#6b7280"
            className="h-4 w-4"
          />
          <span className={cn("flex-1", ownerId === null ? "text-muted-foreground" : "")}>
            {t("owner.public", "Public")}
          </span>
        </button>

        {/* Unknown owner (dangling id) - click to clear */}
        {unknownOwner && (
          <button
            type="button"
            className={rowClass(false, true)}
            onClick={() => void clearOwner()}
            title={t("owner.invalid.tooltip", "Unknown owner - click to clear")}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full border bg-primary text-primary-foreground">
              <span className="h-2 w-2 rounded-full bg-primary-foreground" />
            </span>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span className="flex-1 text-muted-foreground italic">
              {t("owner.invalid.label", "Unknown owner")}
            </span>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </button>
        )}

        {/* Candidate owners */}
        {candidates.map((user) => {
          const selected = ownerId === user.id
          const isCurrentUser = user.id === currentUser.id
          return (
            <button
              key={user.id}
              type="button"
              className={rowClass(selected)}
              onClick={() => void setOwner(user.id)}
            >
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full border",
                  selected ? "bg-primary text-primary-foreground border-primary" : "border-input",
                )}
              >
                {selected && <Check className="h-3 w-3" />}
              </span>
              <UserAvatar
                username={user.username}
                avatar={user.avatar}
                size="sm"
                showInitials={true}
              />
              <span className="flex-1 truncate">{user.username}</span>
              {isCurrentUser && (
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
                  {t("assignee.currentUserBadge", "You")}
                </span>
              )}
            </button>
          )
        })}

        {candidates.length === 0 && (
          <p className="px-2 py-1.5 text-sm text-muted-foreground">
            {t("people.owner.empty", "No users yet.")}
          </p>
        )}
      </div>
    </div>
  )
}

// =============================================================================
// ASSIGNEES SECTION
// =============================================================================

interface AssigneesSectionProps {
  task: Task
  className?: string
}

/**
 * Assignee picker for a task (Pro `OL` component, recovered contract).
 *
 * - Dangling assignee ids render as destructive "Unknown user" rows that
 *   remove themselves on click.
 * - Toggling a user appends/removes them from `task.assignees`.
 */
export function AssigneesSection({ task, className }: AssigneesSectionProps) {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const currentUser = useAtomValue(userAtom)
  const updateTask = useSetAtom(updateTaskAtom)

  const assignees = task.assignees ?? []
  const invalidAssignees = assignees.filter((id) => !users.some((u) => u.id === id))

  const writeAssignees = async (next: UserId[]) => {
    try {
      await updateTask({ updateRequest: { id: task.id, assignees: next } })
    } catch {
      // Error toast is surfaced by the mutation.
    }
  }

  const removeInvalid = async (userId: UserId) => {
    await writeAssignees(assignees.filter((id) => id !== userId))
  }

  const toggleAssignee = async (userId: UserId) => {
    const next = assignees.includes(userId)
      ? assignees.filter((id) => id !== userId)
      : [...assignees, userId]
    await writeAssignees(next)
  }

  const rowClass = (selected: boolean, destructive?: boolean) =>
    cn(
      "flex w-full items-center gap-2 px-2 py-1.5 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm text-left",
      selected && !destructive && "bg-secondary/50",
      destructive && "border border-destructive/50 bg-destructive/10 hover:bg-destructive/20",
    )

  return (
    <div className={cn("space-y-1", className)} data-testid="people-assignees-section">
      <div className="max-h-60 overflow-auto">
        {invalidAssignees.map((userId) => (
          <button
            key={userId}
            type="button"
            className={rowClass(false, true)}
            onClick={() => void removeInvalid(userId)}
            title={t("assignee.invalid.tooltip", "Unknown user - click to remove")}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded border bg-primary text-primary-foreground">
              <span className="h-2 w-2 rounded-full bg-primary-foreground" />
            </span>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span className="flex-1 text-muted-foreground italic">
              {t("assignee.invalid.label", "Unknown user")}
            </span>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </button>
        ))}

        {users.map((user) => {
          const selected = assignees.includes(user.id)
          const isCurrentUser = user.id === currentUser.id
          return (
            <button
              key={user.id}
              type="button"
              className={rowClass(selected)}
              onClick={() => void toggleAssignee(user.id)}
            >
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded border",
                  selected ? "bg-primary text-primary-foreground border-primary" : "border-input",
                )}
              >
                {selected && <Check className="h-3 w-3" />}
              </span>
              <UserAvatar
                username={user.username}
                avatar={user.avatar}
                size="sm"
                showInitials={true}
              />
              <span className="flex-1 truncate">{user.username}</span>
              {isCurrentUser && (
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
                  {t("assignee.currentUserBadge", "You")}
                </span>
              )}
            </button>
          )
        })}

        {users.length === 0 && (
          <p className="px-2 py-1.5 text-sm text-muted-foreground">
            {t("people.assignees.empty", "No users yet.")}
          </p>
        )}
      </div>
    </div>
  )
}

// =============================================================================
// PEOPLE PANEL (Owner + Assignees collapsible sections)
// =============================================================================

interface PeoplePanelProps {
  task: Task
  className?: string
}

/**
 * People panel for a task (Pro `OP` component).
 *
 * Two collapsible sections - Owner and Assignees - whose collapsed state is
 * persisted in `GlobalViewOptions.peopleOwnerCollapsed` /
 * `peopleAssigneesCollapsed` (recovered from the Pro bundle).
 */
export function PeoplePanel({ task, className }: PeoplePanelProps) {
  const { t } = useTranslation("task")
  const ownerCollapsed = useAtomValue(peopleOwnerCollapsedAtom)
  const assigneesCollapsed = useAtomValue(peopleAssigneesCollapsedAtom)
  const setOwnerCollapsed = useSetAtom(peopleOwnerCollapsedAtom)
  const setAssigneesCollapsed = useSetAtom(peopleAssigneesCollapsedAtom)

  const value: string[] = []
  if (!ownerCollapsed) value.push("owner")
  if (!assigneesCollapsed) value.push("assignees")

  const handleValueChange = (next: string[]) => {
    setOwnerCollapsed(!next.includes("owner"))
    setAssigneesCollapsed(!next.includes("assignees"))
  }

  return (
    <div className={cn("space-y-1", className)}>
      <Accordion type="multiple" value={value} onValueChange={handleValueChange}>
        <AccordionItem value="owner" className="border-b-0">
          <AccordionTrigger className="w-full justify-between rounded-lg px-2 py-1.5 text-xs font-medium hover:no-underline hover:bg-accent/50">
            <span className="flex items-center gap-2">
              <User className="h-3 w-3" />
              {t("people.owner.title", "Owner")}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-1">
            <OwnerSection task={task} />
          </AccordionContent>
        </AccordionItem>
        <Separator />
        <AccordionItem value="assignees" className="border-b-0">
          <AccordionTrigger className="w-full justify-between rounded-lg px-2 py-1.5 text-xs font-medium hover:no-underline hover:bg-accent/50">
            <span className="flex items-center gap-2">
              <Users className="h-3 w-3" />
              {t("people.assignees.title", "Assignees")}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-1">
            <AssigneesSection task={task} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

// =============================================================================
// PEOPLE POPOVER
// =============================================================================

interface PeoplePopoverProps {
  task: Task
  className?: string
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

/**
 * Popover wrapper around {@link PeoplePanel} (Pro `RH` component):
 * w-80, p-2, max-h 400px, content scrollable.
 */
export function PeoplePopover({ task, className, onOpenChange, children }: PeoplePopoverProps) {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className={cn("w-80 p-2 max-h-[400px] overflow-hidden", className)}
        align="start"
      >
        <div className="max-h-[360px] overflow-y-auto">
          <PeoplePanel task={task} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
