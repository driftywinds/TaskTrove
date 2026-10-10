"use client"

import { useAtomValue, useSetAtom } from "jotai"
import { useTranslation } from "@tasktrove/i18n"
import { User } from "lucide-react"
import { activeFiltersAtom, updateFiltersAtom } from "@tasktrove/atoms/ui/views"
import { usersAtom } from "@tasktrove/atoms/data/base/atoms"
import type { UserId } from "@tasktrove/types/id"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { UserAvatar } from "@/components/ui/custom/user-avatar"
import { cn } from "@/lib/utils"

/**
 * "Owner" filter section for the task filter dialog (Pro).
 *
 * Toggles `activeFilters.ownedBy` (Pro `filters.owner`); filtering is applied
 * by `filterTasksByOwner` in the view pipeline.
 */
export function OwnerFilterSection() {
  const { t } = useTranslation("task")
  const users = useAtomValue(usersAtom)
  const activeFilters = useAtomValue(activeFiltersAtom)
  const updateFilters = useSetAtom(updateFiltersAtom)

  if (users.length === 0) {
    return null
  }

  const selected = activeFilters.ownedBy ?? []

  const handleOwnerChange = (userId: UserId, checked: boolean) => {
    const next = checked ? [...selected, userId] : selected.filter((id) => id !== userId)
    updateFilters({ ownedBy: next.length > 0 ? next : undefined })
  }

  return (
    <>
      <Separator className="my-6" />
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <Label className="text-sm font-semibold text-foreground">
            {t("filters.owner", "Owner")}
          </Label>
        </div>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {users.map((user) => {
            const isSelected = selected.includes(user.id)
            return (
              <Button
                key={user.id}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => handleOwnerChange(user.id, !isSelected)}
                className={cn(
                  "w-full justify-start text-xs h-auto py-2 px-3 transition-all duration-200",
                  !isSelected && "hover:bg-muted hover:border-muted-foreground/20",
                )}
              >
                <UserAvatar
                  username={user.username}
                  avatar={user.avatar}
                  size="sm"
                  className="mr-2 flex-shrink-0"
                />
                <span className="truncate">{user.username}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}
