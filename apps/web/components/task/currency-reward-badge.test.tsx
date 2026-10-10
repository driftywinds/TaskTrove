/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import type { ReactNode } from "react"
import { CurrencyRewardBadge } from "./currency-reward-badge"
import { settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { DEFAULT_USER_SETTINGS } from "@tasktrove/types/defaults"
import { createTaskId } from "@tasktrove/types/id"
import { createCurrencyId } from "@tasktrove/types/rewards"
import type { UserSettings } from "@tasktrove/types/settings"
import type { Task } from "@tasktrove/types/core"

vi.mock("@tasktrove/i18n", () => ({
  useTranslation: () => ({
    t: (key: string, fallback?: string) => fallback ?? key,
  }),
  LanguageProvider: ({ children }: { children: ReactNode }) => children,
}))

const baseTask: Task = {
  id: createTaskId("44444444-4444-4444-8444-444444444444"),
  title: "Test",
  completed: false,
  priority: 1,
  labels: [],
  subtasks: [],
  comments: [],
  createdAt: new Date("2024-06-01T12:00:00Z"),
  recurringMode: "dueDate",
}

function renderBadge(task: Task, settings: UserSettings = DEFAULT_USER_SETTINGS) {
  const initialValues: HydrateValues = [
    [settingsAtom as unknown as WritableAtom<UserSettings, [UserSettings], void>, settings],
  ]
  return render(
    <TestJotaiProvider initialValues={initialValues}>
      <CurrencyRewardBadge task={task} />
    </TestJotaiProvider>,
  )
}

describe("CurrencyRewardBadge", () => {
  it("shows a placeholder when the task has no reward", () => {
    renderBadge(baseTask)

    expect(screen.getByText("—")).toBeInTheDocument()
  })

  it("shows the amount and default currency name when rewarded", () => {
    renderBadge({
      ...baseTask,
      reward: {
        currencyId: createCurrencyId("00000000-0000-0000-0000-000000000000"),
        amount: 25,
      },
    })

    expect(screen.getByText(/25 coins/)).toBeInTheDocument()
  })

  it("resolves a custom currency name from settings", () => {
    const settings: UserSettings = {
      ...DEFAULT_USER_SETTINGS,
      productivity: {
        rewardTheme: "default",
        rewardsEnabled: true,
        customCurrencies: [
          {
            id: createCurrencyId("00000000-0000-0000-0000-000000000000"),
            name: "coins",
            exchangeRate: 1,
          },
          {
            id: createCurrencyId("11111111-1111-4111-8111-111111111111"),
            name: "gems",
            exchangeRate: 1,
          },
        ],
        wishlistItems: [],
      },
    }

    renderBadge(
      {
        ...baseTask,
        reward: {
          currencyId: createCurrencyId("11111111-1111-4111-8111-111111111111"),
          amount: 7,
        },
      },
      settings,
    )

    expect(screen.getByText(/7 gems/)).toBeInTheDocument()
  })
})
