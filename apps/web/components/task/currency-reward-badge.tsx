"use client"

import { useAtomValue } from "jotai"
import { Coins } from "lucide-react"
import { settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { DEFAULT_CURRENCY } from "@tasktrove/types/rewards"
import type { Task } from "@tasktrove/types/core"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@tasktrove/i18n"

interface CurrencyRewardBadgeProps {
  task: Task
}

/**
 * Displays the currency reward attached to a task.
 * Shows "—" when the task has no reward set.
 */
export function CurrencyRewardBadge({ task }: CurrencyRewardBadgeProps) {
  const { t } = useTranslation("task")
  const settings = useAtomValue(settingsAtom)

  const currencies = settings.productivity?.customCurrencies ?? [DEFAULT_CURRENCY]

  if (!task.reward) {
    return <span className="text-xs text-muted-foreground">{t("rewards.badge.none", "—")}</span>
  }

  const currency = currencies.find((c) => c.id === task.reward?.currencyId) ?? DEFAULT_CURRENCY

  return (
    <Badge variant="secondary" className="gap-1">
      <Coins className="size-3" />
      {task.reward.amount} {currency.name}
    </Badge>
  )
}
