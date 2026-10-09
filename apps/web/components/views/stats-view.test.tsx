import React from "react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@/test-utils"
import { StatsView } from "./stats-view"

vi.mock("@/components/analytics/analytics-dashboard", () => ({
  AnalyticsDashboard: () => (
    <div data-testid="analytics-dashboard">
      <h1>Analytics</h1>
    </div>
  ),
}))

describe("StatsView", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the stats view region", () => {
    render(<StatsView />)

    const region = screen.getByTestId("stats-view")
    expect(region).toBeInTheDocument()
    expect(region).toHaveAttribute("role", "region")
    expect(region).toHaveAttribute("aria-label", "Stats")
  })

  it("renders the analytics dashboard", () => {
    render(<StatsView />)

    expect(screen.getByTestId("analytics-dashboard")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Analytics" })).toBeInTheDocument()
  })

  it("uses a scrollable content container", () => {
    render(<StatsView />)

    const region = screen.getByTestId("stats-view")
    expect(region.className).toContain("overflow-y-auto")
    expect(region.className).toContain("h-full")
  })
})
