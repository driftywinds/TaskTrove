/* eslint-disable @typescript-eslint/consistent-type-assertions -- hydration bridges the runtime-mocked writable atoms with the real read-only typings */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@/test-utils"
import { TestJotaiProvider, type HydrateValues } from "@/test-utils/jotai-mocks"
import type { WritableAtom } from "jotai"
import type { ReactNode } from "react"
import { ProductivityForm } from "./productivity-form"
import { settingsAtom } from "@tasktrove/atoms/data/base/atoms"
import { DEFAULT_USER_SETTINGS } from "@tasktrove/types/defaults"
import { createCurrencyId } from "@tasktrove/types/rewards"
import type { UserSettings } from "@tasktrove/types/settings"

const mockUpdateSettings = vi.hoisted(() => vi.fn())

vi.mock("@tasktrove/atoms/core/settings", async () => {
  const { atom: createAtom } = await import("jotai")
  return {
    updateSettingsAtom: createAtom(null, (_get, _set, partial: unknown) => {
      mockUpdateSettings(partial)
    }),
  }
})

vi.mock("@tasktrove/i18n", () => ({
  useTranslation: () => ({
    t: (key: string, fallback?: string) => fallback ?? key,
  }),
  LanguageProvider: ({ children }: { children: ReactNode }) => children,
}))

function buildSettings(overrides: Partial<UserSettings> = {}): UserSettings {
  return {
    ...DEFAULT_USER_SETTINGS,
    ...overrides,
  }
}

function renderForm(settings: UserSettings = buildSettings()) {
  const initialValues: HydrateValues = [
    [settingsAtom as unknown as WritableAtom<UserSettings, [UserSettings], void>, settings],
  ]
  return render(
    <TestJotaiProvider initialValues={initialValues}>
      <ProductivityForm />
    </TestJotaiProvider>,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  mockUpdateSettings.mockResolvedValue(undefined)
})

/** Returns the nth "Add" button (currencies render before wishlist). */
function addButton(index: number): HTMLElement {
  const buttons = screen.getAllByRole("button", { name: "Add" })
  const button = buttons[index]
  if (!button) {
    throw new Error(`expected an "Add" button at index ${index}`)
  }
  return button
}

describe("ProductivityForm", () => {
  it("renders all sections", () => {
    renderForm()

    expect(screen.getByText("Points Rewards")).toBeInTheDocument()
    expect(screen.getByText("Currency Rewards")).toBeInTheDocument()
    expect(screen.getByText("Custom Currencies")).toBeInTheDocument()
    expect(screen.getByText("Wishlist Items")).toBeInTheDocument()
    expect(screen.getByText("Reward Themes")).toBeInTheDocument()
  })

  it("shows the default currency as non-deletable", () => {
    renderForm()

    // "coins" appears in the currency list and the wishlist currency select
    expect(screen.getAllByText("coins").length).toBeGreaterThan(0)
    expect(screen.getByText("Default")).toBeInTheDocument()
    // No delete button for the default currency
    expect(screen.queryByRole("button", { name: /delete currency coins/i })).not.toBeInTheDocument()
  })

  it("toggles points rewards", async () => {
    renderForm()

    const toggle = screen.getByLabelText("Enable Points Rewards")
    // Default productivity settings have rewardsEnabled: true -> toggle off
    fireEvent.click(toggle)

    await waitFor(() => {
      expect(mockUpdateSettings).toHaveBeenCalledWith(
        expect.objectContaining({
          productivity: expect.objectContaining({ rewardsEnabled: false }),
        }),
      )
    })
  })

  it("adds a custom currency", async () => {
    renderForm()

    fireEvent.change(screen.getByLabelText("New currency name"), {
      target: { value: "gems" },
    })
    // Currency "Add" renders before the wishlist "Add"
    fireEvent.click(addButton(0))

    await waitFor(() => {
      expect(mockUpdateSettings).toHaveBeenCalledWith(
        expect.objectContaining({
          productivity: expect.objectContaining({
            customCurrencies: expect.arrayContaining([expect.objectContaining({ name: "gems" })]),
          }),
        }),
      )
    })
  })

  it("keeps the default currency when deleting another currency", async () => {
    renderForm(
      buildSettings({
        productivity: {
          rewardTheme: "default",
          rewardsEnabled: true,
          currencyRewardsEnabled: true,
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
      }),
    )

    expect(screen.getByText("gems")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: /delete currency gems/i }))

    await waitFor(() => {
      expect(mockUpdateSettings).toHaveBeenCalledWith(
        expect.objectContaining({
          productivity: expect.objectContaining({
            customCurrencies: [expect.objectContaining({ name: "coins" })],
          }),
        }),
      )
    })
  })

  it("adds a wishlist item", async () => {
    renderForm()

    fireEvent.change(screen.getByLabelText("Item name"), {
      target: { value: "Pizza night" },
    })
    fireEvent.change(screen.getByLabelText("Value"), { target: { value: "25" } })
    // Currency "Add" renders before the wishlist "Add"
    fireEvent.click(addButton(1))

    await waitFor(() => {
      expect(mockUpdateSettings).toHaveBeenCalledWith(
        expect.objectContaining({
          productivity: expect.objectContaining({
            wishlistItems: expect.arrayContaining([
              expect.objectContaining({ name: "Pizza night", value: 25 }),
            ]),
          }),
        }),
      )
    })
  })

  it("changes the reward theme", async () => {
    renderForm()

    // Default theme selected; pick fantasy via the select trigger
    fireEvent.click(screen.getByLabelText("Reward theme"))
    fireEvent.click(screen.getByRole("option", { name: /fantasy/i }))

    await waitFor(() => {
      expect(mockUpdateSettings).toHaveBeenCalledWith(
        expect.objectContaining({
          productivity: expect.objectContaining({ rewardTheme: "fantasy" }),
        }),
      )
    })
  })
})
