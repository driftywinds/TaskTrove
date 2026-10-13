"use client"

import { useMemo } from "react"
import type { CalendarObjectRecord } from "@tasktrove/calendar-sync/types"
import type { CalendarViewMode } from "@/lib/calendar/types"
import type { CalendarViewExtensionState } from "@/components/views/calendar-view.extensions"
import {
  startOfDay,
  parseISO,
  isSameDay,
  format,
  setHours,
  setMinutes,
  getHours,
  getMinutes,
} from "date-fns"

interface UseCalendarViewEventsParams {
  objects: CalendarObjectRecord[]
  calendarDays: Date[]
  viewMode: CalendarViewMode
}

function objectToTimeGridItem(obj: CalendarObjectRecord, day: Date): {
  id: string
  startMinutes: number
  endMinutes: number
  data: unknown
} | null {
  if (!obj.start || !obj.end) return null

  const start = parseISO(obj.start)
  const end = parseISO(obj.end)
  if (!start || !end) return null

  const startOnDay = setHours(setMinutes(startOfDay(day), 0), start.getHours())
  const endOnDay = setHours(setMinutes(startOfDay(day), 0), end.getHours())

  // Only include if the event is on this day
  if (!isSameDay(start, day) && !isSameDay(end, day)) return null

  const startMinutes = startOnDay.getHours() * 60 + startOnDay.getMinutes()
  const endMinutes = endOnDay.getHours() * 60 + endOnDay.getMinutes()

  if (endMinutes <= startMinutes) return null
  if (startMinutes < 0 || startMinutes >= 24 * 60) return null

  return {
    id: obj.id,
    startMinutes,
    endMinutes,
    data: obj,
  }
}

function objectToAllDayEvent(obj: CalendarObjectRecord, day: Date): unknown {
  if (!obj.start || !obj.end) return obj
  const start = parseISO(obj.start)
  const end = parseISO(obj.end)
  if (!start || !end) return obj
  if (!isSameDay(start, day) && !isSameDay(end, day)) return null
  return obj
}

export function useCalendarViewEvents({
  objects,
  calendarDays,
  viewMode,
}: UseCalendarViewEventsParams): CalendarViewExtensionState {
  return useMemo(() => {
    const allDayEventsByDate: Record<string, unknown[]> = {}
    const timeGridItemsByDate: Record<string, { id: string; startMinutes: number; endMinutes: number; data: unknown }[]> = {}
    const monthEventsByDate: Record<string, unknown[]> = {}

    for (const day of calendarDays) {
      const dayKey = format(day, "yyyy-MM-dd")
      const dayAllDay: unknown[] = []
      const dayTimeGrid: { id: string; startMinutes: number; endMinutes: number; data: unknown }[] = []

      for (const obj of objects) {
        // All-day events (no start/end set, or allDay flag)
        if (!obj.start || !obj.end || obj.allDay) {
          const event = objectToAllDayEvent(obj, day)
          if (event) dayAllDay.push(event)
          continue
        }

        // Timed events — only in time-grid mode
        const item = objectToTimeGridItem(obj, day)
        if (item) dayTimeGrid.push(item)
      }

      if (dayAllDay.length > 0) allDayEventsByDate[dayKey] = dayAllDay
      if (dayTimeGrid.length > 0) timeGridItemsByDate[dayKey] = dayTimeGrid
      if (dayAllDay.length > 0 || dayTimeGrid.length > 0) monthEventsByDate[dayKey] = [...dayAllDay, ...dayTimeGrid.map((i) => i.data)]
    }

    return {
      allDayEventsByDate,
      timeGridItemsByDate,
      monthEventsByDate,
      monthMaxVisibleEventsPerDay: 20,
      allDayMaxVisibleEventsPerDay: 10,
    }
  }, [objects, calendarDays, viewMode])
}
