/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import type { ReactNode } from "react"
import { RewardsBadge } from "./rewards-badge"
import { rewardsAtom, userAtom, settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { DEFAULT_USER_SETTINGS, DEFAULT_USER } from "@tasktrove/types/defaults"
import { createUserId } from "@tasktrove/types/id"
import type { UserSettings } from "@tasktrove/types/settings"
import type { User } from "@tasktrove/types/core"
import type { RewardEvent } from "@tasktrove/types/rewards"
import type { RewardsResource } from "@tasktrove/atoms/data/base/query"

vi.mock("@tasktrove/i18n", () => ({
  useTranslation: () => ({
    t: (key: string, fallback?: string) => fallback ?? key,
  }),
  LanguageProvider: ({ children }: { children: ReactNode }) => children,
}))

const USER_ID = createUserId("11111111-1111-4111-8111-111111111111")

const currentUser: User = {
  ...DEFAULT_USER,
  id: USER_ID,
  username: "tester",
}

function makeEvent(points: number, userId = USER_ID): RewardEvent {
  return {
    id: "55555555-5555-4555-8555-555555555555",
    userId,
    type: "TASK_COMPLETED",
    entityId: "44444444-4444-4444-8444-444444444444",
    points,
    timestamp: new Date(),
  }
}

function renderBadge(options: { enabled?: boolean; events?: RewardEvent[] } = {}) {
  const settings: UserSettings = {
    ...DEFAULT_USER_SETTINGS,
    productivity: {
      ...DEFAULT_USER_SETTINGS.productivity,
      rewardsEnabled: options.enabled ?? true,
    },
  }
  const initialValues: HydrateValues = [
    [
      rewardsAtom as unknown as WritableAtom<RewardsResource, [RewardsResource], void>,
      {
        rewardEvents: options.events ?? [],
        currencyRewardEvents: [],
      },
    ],
    [userAtom as unknown as WritableAtom<User, [User], void>, currentUser],
    [settingsAtom as unknown as WritableAtom<UserSettings, [UserSettings], void>, settings],
  ]
  return render(
    <TestJotaiProvider initialValues={initialValues}>
      <RewardsBadge />
    </TestJotaiProvider>,
  )
}

describe("RewardsBadge", () => {
  it("shows the summed points for the current user", () => {
    renderBadge({ events: [makeEvent(10), makeEvent(15)] })

    expect(screen.getByTestId("rewards-balance")).toHaveTextContent("25")
    expect(screen.getByTestId("rewards-balance")).toHaveTextContent("pts")
  })

  it("excludes other users' points", () => {
    renderBadge({
      events: [makeEvent(10), makeEvent(99, createUserId("22222222-2222-4222-8222-222222222222"))],
    })

    expect(screen.getByTestId("rewards-balance")).toHaveTextContent("10")
  })

  it("hides when points rewards are disabled", () => {
    renderBadge({ enabled: false, events: [makeEvent(10)] })

    expect(screen.queryByTestId("rewards-balance")).not.toBeInTheDocument()
  })
})
