"use client"

import { useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateTaskAtom } from "@tasktrove/atoms/core/tasks"
import { DEFAULT_CURRENCY, createCurrencyId } from "@tasktrove/types/rewards"
import type { Task } from "@tasktrove/types/core"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslation } from "@tasktrove/i18n"

interface CurrencyRewardContentProps {
  task: Task
  onOpenChange?: (open: boolean) => void
}

/**
 * Popover body for setting a currency reward on a task.
 * Writes via `updateTaskAtom` (dismisses on save).
 *
 * Note: reward removal needs an explicit clear semantics in the partial-task
 * update path (the optimistic merge strips `undefined`), so this MVP sets a
 * reward but does not yet offer removal.
 */
export function CurrencyRewardContent({ task, onOpenChange }: CurrencyRewardContentProps) {
  const { t } = useTranslation("task")
  const settings = useAtomValue(settingsAtom)
  const updateTask = useSetAtom(updateTaskAtom)

  const currencies = settings.productivity?.customCurrencies ?? [DEFAULT_CURRENCY]

  const [currencyId, setCurrencyId] = useState<string>(
    task.reward?.currencyId ?? DEFAULT_CURRENCY.id,
  )
  const [amount, setAmount] = useState(String(task.reward?.amount ?? ""))
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    const parsedAmount = Number(amount)
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) return

    setSaving(true)
    try {
      await updateTask({
        updateRequest: {
          id: task.id,
          reward: {
            currencyId: createCurrencyId(currencyId),
            amount: Math.floor(parsedAmount),
          },
        },
      })
      onOpenChange?.(false)
    } catch {
      // Error toast is surfaced by the mutation; keep the popover open.
      setSaving(false)
    }
  }

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <Label htmlFor="reward-currency">{t("rewards.popover.currency", "Currency")}</Label>
        <Select value={currencyId} onValueChange={setCurrencyId}>
          <SelectTrigger id="reward-currency" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency.id} value={currency.id}>
                {currency.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="reward-amount">{t("rewards.popover.amount", "Amount")}</Label>
        <Input
          id="reward-amount"
          type="number"
          min={1}
          step={1}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder={t("rewards.popover.amountPlaceholder", "0")}
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving || amount.trim().length === 0}>
          {t("rewards.popover.save", "Save reward")}
        </Button>
      </div>
    </div>
  )
}
