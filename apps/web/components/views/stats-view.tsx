"use client"

import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard"

/**
 * Stats view (Pro feature)
 *
 * Renders the analytics dashboard (metric cards + charts) inside the
 * scrollable content area of the stats view mode. The dashboard reads all
 * analytics data from atoms itself, so no props are required.
 */
export function StatsView() {
  return (
    <div
      className="h-full overflow-y-auto px-4 py-6 md:px-6"
      data-testid="stats-view"
      role="region"
      aria-label="Stats"
    >
      <AnalyticsDashboard />
    </div>
  )
}
