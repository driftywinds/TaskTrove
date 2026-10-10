"use client"

import { useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { v4 as uuidv4 } from "uuid"
import { Trophy, Coins, Gift, Palette, Plus, Trash2, Star } from "lucide-react"
import { useTranslation } from "@tasktrove/i18n"
import { settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { updateSettingsAtom } from "@tasktrove/atoms/core/settings"
import { DEFAULT_PRODUCTIVITY_SETTINGS } from "@tasktrove/types/defaults"
import { DEFAULT_CURRENCY, createCurrencyId } from "@tasktrove/types/rewards"
import { REWARD_THEMES, RewardThemeIdSchema } from "@tasktrove/types/reward-levels"
import type { RewardThemeId } from "@tasktrove/types/reward-levels"
import type { Currency, WishlistItem } from "@tasktrove/types/rewards"
import { SettingsCard } from "@/components/ui/custom/settings-card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

/**
 * Settings → Productivity (Pro rewards & gamification)
 *
 * Manages points rewards, currency rewards, custom currencies, wishlist
 * items, and reward themes. Writes into `settings.productivity` (deep-merged).
 */
export function ProductivityForm() {
  const { t } = useTranslation("settings")
  const settings = useAtomValue(settingsAtom)
  const updateSettings = useSetAtom(updateSettingsAtom)

  const productivity = settings.productivity ?? DEFAULT_PRODUCTIVITY_SETTINGS

  // New-item input state
  const [newCurrencyName, setNewCurrencyName] = useState("")
  const [newWishlistName, setNewWishlistName] = useState("")
  const [newWishlistValue, setNewWishlistValue] = useState("")
  const [newWishlistCurrencyId, setNewWishlistCurrencyId] = useState<string>(DEFAULT_CURRENCY.id)

  const currencies = productivity.customCurrencies ?? [DEFAULT_CURRENCY]
  const wishlistItems = productivity.wishlistItems ?? []

  const saveProductivity = (updates: Partial<typeof productivity>) => {
    void updateSettings({
      productivity: { ...productivity, ...updates },
    })
  }

  // -------------------------------------------------------------------------
  // Points rewards
  // -------------------------------------------------------------------------

  const handleToggleRewards = (enabled: boolean) => {
    saveProductivity({ rewardsEnabled: enabled })
  }

  const handleDailyCapChange = (value: string) => {
    const parsed = Number(value)
    if (!Number.isFinite(parsed) || parsed < 0) return
    saveProductivity({ dailyRewardPointCap: Math.floor(parsed) })
  }

  // -------------------------------------------------------------------------
  // Currency rewards
  // -------------------------------------------------------------------------

  const handleToggleCurrencyRewards = (enabled: boolean) => {
    saveProductivity({ currencyRewardsEnabled: enabled })
  }

  // -------------------------------------------------------------------------
  // Custom currencies
  // -------------------------------------------------------------------------

  const handleAddCurrency = () => {
    const name = newCurrencyName.trim()
    if (!name) return
    const newCurrency: Currency = {
      id: createCurrencyId(uuidv4()),
      name,
      exchangeRate: 1,
    }
    saveProductivity({ customCurrencies: [...currencies, newCurrency] })
    setNewCurrencyName("")
  }

  const handleDeleteCurrency = (currencyId: string) => {
    // The built-in default currency can never be removed
    if (currencyId === DEFAULT_CURRENCY.id) return
    saveProductivity({
      customCurrencies: currencies.filter((c) => c.id !== currencyId),
    })
  }

  // -------------------------------------------------------------------------
  // Wishlist items
  // -------------------------------------------------------------------------

  const handleAddWishlistItem = () => {
    const name = newWishlistName.trim()
    const value = Number(newWishlistValue)
    if (!name || !Number.isFinite(value) || value < 0) return
    const item: WishlistItem = {
      id: uuidv4(),
      name,
      value: Math.floor(value),
      currencyId: createCurrencyId(newWishlistCurrencyId),
    }
    saveProductivity({ wishlistItems: [...wishlistItems, item] })
    setNewWishlistName("")
    setNewWishlistValue("")
  }

  const handleDeleteWishlistItem = (itemId: string) => {
    saveProductivity({
      wishlistItems: wishlistItems.filter((item) => item.id !== itemId),
    })
  }

  // -------------------------------------------------------------------------
  // Reward themes
  // -------------------------------------------------------------------------

  const currentThemeId: RewardThemeId = productivity.rewardTheme ?? "default"
  const currentTheme = REWARD_THEMES[currentThemeId]

  const handleThemeChange = (value: string) => {
    const parsed = RewardThemeIdSchema.safeParse(value)
    if (parsed.success) {
      saveProductivity({ rewardTheme: parsed.data })
    }
  }

  return (
    <div className="space-y-6">
      {/* Points rewards */}
      <SettingsCard
        title={t("productivity.points.title", "Points Rewards")}
        description={t(
          "productivity.points.description",
          "Earn points every time you complete a task.",
        )}
        icon={Trophy}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5 sm:max-w-[65%]">
            <Label htmlFor="rewards-enabled">
              {t("productivity.points.enable.label", "Enable Points Rewards")}
            </Label>
            <p className="text-sm text-muted-foreground">
              {t(
                "productivity.points.enable.description",
                "Award points when you complete tasks to build streaks and levels.",
              )}
            </p>
          </div>
          <Switch
            id="rewards-enabled"
            checked={productivity.rewardsEnabled ?? false}
            onCheckedChange={handleToggleRewards}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5 sm:max-w-[65%]">
            <Label htmlFor="daily-point-cap">
              {t("productivity.points.dailyCap.label", "Daily Points Cap (0 = unlimited)")}
            </Label>
            <p className="text-sm text-muted-foreground">
              {t(
                "productivity.points.dailyCap.description",
                "Maximum points that can be earned per day.",
              )}
            </p>
          </div>
          <Input
            id="daily-point-cap"
            type="number"
            min={0}
            step={1}
            value={String(productivity.dailyRewardPointCap ?? 0)}
            onChange={(event) => handleDailyCapChange(event.target.value)}
            className="w-32"
          />
        </div>
      </SettingsCard>

      {/* Currency rewards */}
      <SettingsCard
        title={t("productivity.currency.title", "Currency Rewards")}
        description={t(
          "productivity.currency.description",
          "Reward tasks with custom currencies and redeem wishlist items.",
        )}
        icon={Coins}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5 sm:max-w-[65%]">
            <Label htmlFor="currency-rewards-enabled">
              {t("productivity.currency.enable.label", "Enable Currency Rewards")}
            </Label>
            <p className="text-sm text-muted-foreground">
              {t(
                "productivity.currency.enable.description",
                "Attach currency rewards to tasks and redeem them for wishlist items.",
              )}
            </p>
          </div>
          <Switch
            id="currency-rewards-enabled"
            checked={productivity.currencyRewardsEnabled ?? false}
            onCheckedChange={handleToggleCurrencyRewards}
          />
        </div>
      </SettingsCard>

      {/* Custom currencies */}
      <SettingsCard
        title={t("productivity.currencies.title", "Custom Currencies")}
        description={t(
          "productivity.currencies.description",
          "Define the currencies used for task rewards.",
        )}
        icon={Coins}
      >
        <div className="space-y-3">
          {currencies.map((currency) => (
            <div
              key={currency.id}
              className="flex items-center justify-between gap-2 rounded-md border p-2"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{currency.name}</span>
                {currency.id === DEFAULT_CURRENCY.id && (
                  <Badge variant="secondary">
                    {t("productivity.currencies.defaultBadge", "Default")}
                  </Badge>
                )}
                {currency.exchangeRate !== undefined && (
                  <span className="text-xs text-muted-foreground">1 = {currency.exchangeRate}</span>
                )}
              </div>
              {currency.id !== DEFAULT_CURRENCY.id && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  aria-label={`${t("productivity.currencies.delete", "Delete currency")} ${currency.name}`}
                  onClick={() => handleDeleteCurrency(currency.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              )}
            </div>
          ))}

          <div className="flex gap-2">
            <Input
              value={newCurrencyName}
              onChange={(event) => setNewCurrencyName(event.target.value)}
              placeholder={t("productivity.currencies.namePlaceholder", "New currency name")}
              aria-label={t("productivity.currencies.namePlaceholder", "New currency name")}
            />
            <Button
              onClick={handleAddCurrency}
              disabled={newCurrencyName.trim().length === 0}
              className="gap-2"
            >
              <Plus className="size-4" />
              {t("productivity.currencies.add", "Add")}
            </Button>
          </div>
        </div>
      </SettingsCard>

      {/* Wishlist items */}
      <SettingsCard
        title={t("productivity.wishlist.title", "Wishlist Items")}
        description={t(
          "productivity.wishlist.description",
          "Items that can be redeemed with currency rewards.",
        )}
        icon={Gift}
      >
        <div className="space-y-3">
          {wishlistItems.length === 0 && (
            <p className="text-sm text-muted-foreground">
              {t("productivity.wishlist.empty", "No wishlist items yet.")}
            </p>
          )}

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-2 rounded-md border p-2"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.name}</span>
                <Badge variant="outline">
                  {item.value}{" "}
                  {currencies.find((c) => c.id === item.currencyId)?.name ??
                    t("productivity.wishlist.coins", "coins")}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                aria-label={`${t("productivity.wishlist.delete", "Delete wishlist item")} ${item.name}`}
                onClick={() => handleDeleteWishlistItem(item.id)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          ))}

          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              value={newWishlistName}
              onChange={(event) => setNewWishlistName(event.target.value)}
              placeholder={t("productivity.wishlist.namePlaceholder", "Item name")}
              aria-label={t("productivity.wishlist.namePlaceholder", "Item name")}
              className="sm:flex-1"
            />
            <Input
              type="number"
              min={0}
              step={1}
              value={newWishlistValue}
              onChange={(event) => setNewWishlistValue(event.target.value)}
              placeholder={t("productivity.wishlist.valuePlaceholder", "Value")}
              aria-label={t("productivity.wishlist.valuePlaceholder", "Value")}
              className="sm:w-28"
            />
            <Select value={newWishlistCurrencyId} onValueChange={setNewWishlistCurrencyId}>
              <SelectTrigger
                className="sm:w-36"
                aria-label={t("productivity.wishlist.currency", "Currency")}
              >
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
            <Button
              onClick={handleAddWishlistItem}
              disabled={newWishlistName.trim().length === 0 || newWishlistValue.trim().length === 0}
              className="gap-2"
            >
              <Plus className="size-4" />
              {t("productivity.wishlist.add", "Add")}
            </Button>
          </div>
        </div>
      </SettingsCard>

      {/* Reward themes */}
      <SettingsCard
        title={t("productivity.themes.title", "Reward Themes")}
        description={t(
          "productivity.themes.description",
          "Choose how your progression levels are presented.",
        )}
        icon={Palette}
      >
        <div className="space-y-3">
          <Select value={currentThemeId} onValueChange={handleThemeChange}>
            <SelectTrigger
              id="reward-theme"
              className="w-full sm:w-auto sm:min-w-[220px]"
              aria-label={t("productivity.themes.select", "Reward theme")}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(REWARD_THEMES).map((theme) => (
                <SelectItem key={theme.id} value={theme.id}>
                  {theme.displayName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className="text-sm text-muted-foreground">{currentTheme.description}</p>

          <div className="flex flex-wrap gap-1">
            {currentTheme.levels.map((level) => (
              <Badge key={level.level} variant="outline" className="gap-1">
                <Star className="size-3" />
                {t("productivity.themes.level", "Lv")} {level.level} {level.name} ({level.threshold}
                )
              </Badge>
            ))}
          </div>
        </div>
      </SettingsCard>
    </div>
  )
}
