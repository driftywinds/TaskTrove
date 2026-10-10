"use client"

import { useAtomValue } from "jotai"
import { Trophy } from "lucide-react"
import { rewardsAtom, userAtom, settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { DEFAULT_PRODUCTIVITY_SETTINGS } from "@tasktrove/types/defaults"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@tasktrove/i18n"

/**
 * Header badge showing the current user's total points balance (Pro).
 * Hidden when points rewards are disabled.
 */
export function RewardsBadge() {
  const { t } = useTranslation("layout")
  const rewards = useAtomValue(rewardsAtom)
  const currentUser = useAtomValue(userAtom)
  const settings = useAtomValue(settingsAtom)

  const productivity = settings.productivity ?? DEFAULT_PRODUCTIVITY_SETTINGS
  if (!productivity.rewardsEnabled) {
    return null
  }

  const totalPoints = rewards.rewardEvents
    .filter((event) => event.userId === currentUser.id)
    .reduce((sum, event) => sum + event.points, 0)

  return (
    <Badge variant="secondary" className="gap-1" data-testid="rewards-balance">
      <Trophy className="size-3" />
      {totalPoints} {t("rewards.pointsLabel", "pts")}
    </Badge>
  )
}
