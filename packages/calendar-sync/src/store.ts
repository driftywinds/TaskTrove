/**
 * Calendar-sync store (Pro parity).
 *
 * Reproduces the executed global-singleton wiring from module 43729
 * (FINDINGS §5.5b): `BY("calendar-sync.state", () => ({persistence, service,
 * lastSyncedAt: null, lastSummary}))` — a process-global, in-memory cache that
 * is rebuilt by syncs. No calendar data is ever written to the data file;
 * credentials live in settings.data.calendarSync and the remote server is the
 * source of truth.
 */

import { getGlobalSingleton } from "@tasktrove/utils";
import { InMemoryCalendarPersistence } from "./adapter";
import { CalendarSyncService } from "./service";
import { EMPTY_SYNC_SUMMARY } from "./types";
import type { CalendarSyncState, SyncSummary } from "./types";

const STORE_KEY = "calendar-sync.state";

interface CalendarSyncStore {
  persistence: InMemoryCalendarPersistence;
  service: CalendarSyncService;
  lastSyncedAt: string | null;
  lastSummary: SyncSummary;
}

/** The process-global calendar-sync store (executed `P()`). */
export function getCalendarSyncStore(): CalendarSyncStore {
  return getGlobalSingleton<CalendarSyncStore>(STORE_KEY, () => {
    const persistence = new InMemoryCalendarPersistence();
    return {
      persistence,
      service: new CalendarSyncService(persistence),
      lastSyncedAt: null,
      lastSummary: { ...EMPTY_SYNC_SUMMARY },
    };
  });
}

/** State snapshot (the shape GET /api/v1/calendar returns — executed `sq()`). */
export function getCalendarSyncState(): CalendarSyncState {
  const store = getCalendarSyncStore();
  return {
    calendars: store.persistence.snapshotCalendars(),
    objects: store.persistence.snapshotObjects(),
    summary: store.lastSummary,
    lastSyncedAt: store.lastSyncedAt,
  };
}
