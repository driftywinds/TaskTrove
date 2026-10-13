"use client"

import { useTranslation } from "@tasktrove/i18n"
import { Calendar as CalendarIcon, Clock } from "lucide-react"
import type { CalendarObjectRecord } from "@tasktrove/calendar-sync/types"
import { format, parseISO } from "date-fns"

interface CalendarSyncEventRendererProps {
  date: Date
  dayKey: string
  isToday: boolean
  events: CalendarObjectRecord[]
  isExpanded: boolean
  maxVisibleEvents?: number
  onExpand: () => void
}
export function CalendarSyncAllDayRenderer({
  events,
  isToday,
}: CalendarSyncEventRendererProps) {
  const { t } = useTranslation("calendar")

  return (
    <div className="space-y-1">
      {events.map((event) => {
        const title = event.summary ?? t("calendar.event.unnamed", "Calendar Event")
        const start = event.start ? format(parseISO(event.start), "HH:mm") : null
        const isAllDay = !event.start || event.allDay

        return (
          <div
            key={event.id}
            className={`text-xs px-1.5 py-0.5 rounded border border-transparent cursor-pointer transition-colors ${
              isToday ? "bg-primary/10 border-primary/30 text-primary" : "bg-amber-50/80 border-amber-200/50 text-amber-900"
            }`}
            title={event.description ?? undefined}
          >
            {isAllDay ? (
              <CalendarIcon className="mr-1 h-3 w-3" />
            ) : (
              <Clock className="mr-1 h-3 w-3" />
            )}
            <span>{title}</span>
            {start && !isAllDay && <span className="ml-1 opacity-60">{start}</span>}
          </div>
        )
      })}
    </div>
  )
}
