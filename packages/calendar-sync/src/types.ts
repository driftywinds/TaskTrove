/**
 * Calendar-sync engine types (Pro parity).
 *
 * Every shape in this file was recovered by EXECUTING the original Pro modules
 * (FINDINGS SS5.5b-5.5d; tools/deob/probe-7147.cjs), not inferred:
 *   - store state: {calendars, objects, summary, lastSyncedAt}
 *   - summary: the 6-counter shape returned by both syncFromRemote and pushLocalChanges
 *   - change sets: {created, updated, deleted} with {url, data, etag}
 *   - request schemas incl. verbatim superRefine messages (SS5.5c)
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Summary (the 6 counters - verbatim shape from executed syncFromRemote and
// pushLocalChanges return values)
// ---------------------------------------------------------------------------

export const SyncSummarySchema = z.object({
  createdCalendars: z.number(),
  updatedCalendars: z.number(),
  deletedCalendars: z.number(),
  createdObjects: z.number(),
  updatedObjects: z.number(),
  deletedObjects: z.number(),
});
export type SyncSummary = z.infer<typeof SyncSummarySchema>;

export const EMPTY_SYNC_SUMMARY: SyncSummary = {
  createdCalendars: 0,
  updatedCalendars: 0,
  deletedCalendars: 0,
  createdObjects: 0,
  updatedObjects: 0,
  deletedObjects: 0,
};

// ---------------------------------------------------------------------------
// Store records (calendar + object record shapes from the executed
// syncFromRemote calendar-record builder and VEVENT-object builder, SS5.5b)
// ---------------------------------------------------------------------------

export interface CalendarRecord {
  id: string;
  userId: string;
  timezone: string;
  name: string;
  source: string;
  ctag: string;
  syncToken: string;
  url: string;
  credentialId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CalendarObjectRecord {
  id: string;
  calendarId: string;
  url: string;
  etag: string;
  data: string;
  start: string | null;
  end: string | null;
  summary: string | null;
  description: string | null;
  location: string | null;
  timezone: string | null;
  uid: string | null;
  allDay: boolean;
}

// ---------------------------------------------------------------------------
// Engine state (GET /api/v1/calendar response shape - executed: sq() state)
// ---------------------------------------------------------------------------

export interface CalendarSyncState {
  calendars: CalendarRecord[];
  objects: CalendarObjectRecord[];
  summary: SyncSummary;
  lastSyncedAt: string | null;
}

// ---------------------------------------------------------------------------
// Change sets (pushLocalChanges input - executed shape, SS5.5d)
// ---------------------------------------------------------------------------

export interface CalendarObjectChangeSet {
  created?: Array<{ url: string; data: string; etag: string }>;
  updated?: Array<{ url: string; data: string; etag: string }>;
  deleted?: Array<{ url: string; etag?: string }>;
}

// ---------------------------------------------------------------------------
// Event field bundle (Ze output / Ev input - executed, SS5.5d)
// ---------------------------------------------------------------------------

export interface CalendarEventFields {
  start: string | null;
  end: string | null;
  timezone: string | null;
  summary: string | null;
  description: string | null;
  location: string | null;
  uid: string | null;
  allDay: boolean;
}

// ---------------------------------------------------------------------------
// Request schemas (Hz/Kq/ce - EXECUTED from module 85425 against real zod
// 4.1.11; superRefine messages are the actual emitted strings, SS5.5c)
// ---------------------------------------------------------------------------

const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

/** Verbatim, executed superRefine (module 85425 `l_`). */
function eventRefine(
  event: { start: string; end: string; allDay?: boolean },
  ctx: z.RefinementCtx,
): void {
  const addIssue = (issue: {
    code: "custom";
    message: string;
    path: Array<string>;
  }): void => {
    ctx.addIssue(issue);
  };
  if (event.allDay === true) {
    if (!DATE_ONLY.test(event.start)) {
      addIssue({
        code: "custom",
        message: "Start date must be a YYYY-MM-DD string for all-day events.",
        path: ["start"],
      });
    }
    if (!DATE_ONLY.test(event.end)) {
      addIssue({
        code: "custom",
        message: "End date must be a YYYY-MM-DD string for all-day events.",
        path: ["end"],
      });
    }
    return;
  }
  const datetime = z.string().datetime();
  if (!datetime.safeParse(event.start).success) {
    addIssue({
      code: "custom",
      message: "Start time must be an ISO datetime string.",
      path: ["start"],
    });
  }
  if (!datetime.safeParse(event.end).success) {
    addIssue({
      code: "custom",
      message: "End time must be an ISO datetime string.",
      path: ["end"],
    });
  }
}

/** Hz - POST /api/v1/calendar/events (create). */
export const CreateEventRequestSchema = z
  .object({
    calendarId: z.string().optional(),
    title: z.string().min(1),
    start: z.string(),
    end: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    timezone: z.string().optional(),
    allDay: z.boolean().optional(),
  })
  .superRefine(eventRefine);
export type CreateEventRequest = z.infer<typeof CreateEventRequestSchema>;

/** Kq - PATCH /api/v1/calendar/events (update): + url (required), etag. */
export const UpdateEventRequestSchema = z
  .object({
    calendarId: z.string().optional(),
    url: z.string().url(),
    etag: z.string().optional(),
    title: z.string().min(1),
    start: z.string(),
    end: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    timezone: z.string().optional(),
    allDay: z.boolean().optional(),
  })
  .superRefine(eventRefine);
export type UpdateEventRequest = z.infer<typeof UpdateEventRequestSchema>;

/** ce - DELETE /api/v1/calendar/events. */
export const DeleteEventRequestSchema = z.object({
  calendarId: z.string().optional(),
  url: z.string().url(),
  etag: z.string().optional(),
});
export type DeleteEventRequest = z.infer<typeof DeleteEventRequestSchema>;

// ---------------------------------------------------------------------------
// Discovery (discover route - request shape from decoded module 7097 + the
// connection defaults from the executed connection-builder R(), SS5.5b)
// ---------------------------------------------------------------------------

export const DiscoverRequestSchema = z.object({
  serverUrl: z.string().url("Valid CalDAV server URL is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  accountType: z.enum(["caldav", "carddav"]).optional(),
  allowInsecure: z.boolean().optional(),
});
export type DiscoverRequest = z.infer<typeof DiscoverRequestSchema>;

export interface DiscoveredCalendar {
  displayName: string;
  url: string;
  timezone?: string;
}

export interface DiscoverResult {
  success: boolean;
  serverUrl: string;
  calendars: DiscoveredCalendar[];
}

// ---------------------------------------------------------------------------
// Connection defaults (executed R(): authMethod "Basic", timezone "UTC",
// allowInsecure false)
// ---------------------------------------------------------------------------

export const DEFAULT_CONNECTION_AUTH_METHOD = "Basic";
export const DEFAULT_CONNECTION_TIMEZONE = "UTC";
export const DEFAULT_CONNECTION_ALLOW_INSECURE = false;
export const CALENDAR_SYNC_ACCOUNT_TYPE = "caldav";
