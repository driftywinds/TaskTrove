"use client"

import { useState, useEffect } from "react"
import type { CalendarSyncState } from "@tasktrove/calendar-sync/types"

export function useCalendarSyncState() {
  const [state, setState] = useState<CalendarSyncState | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchState = async () => {
      try {
        const res = await fetch("/api/v1/calendar", {
          method: "GET",
          headers: { Accept: "application/json" },
        })
        if (!res.ok) {
          throw new Error(`Calendar sync state fetch failed: ${res.status}`)
        }
        const data = (await res.json()) as CalendarSyncState
        if (!cancelled) {
          setState(data)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error("Failed to fetch calendar sync state"))
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchState()
    return () => {
      cancelled = true
    }
  }, [])

  return { state, loading, error }
}
