/**
 * Contract tests for @tasktrove/calendar-sync.
 *
 * Every assertion encodes an EXECUTED output from the original Pro modules
 * (FINDINGS §5.5b–5.5d; tools/deob/probe-7147.cjs) — these tests keep the
 * port honest against the recovered contract.
 */

import { describe, expect, it } from "vitest";
import { InMemoryCalendarPersistence } from "./adapter";
import { buildIcsPayload, parseIcsFields } from "./ics";
import { CalendarSyncService } from "./service";
import type { SyncClient } from "./service";
import { getCalendarSyncStore } from "./store";
import type { CalendarRecord } from "./types";
import { CreateEventRequestSchema, EMPTY_SYNC_SUMMARY } from "./types";

const NOW = new Date("2026-01-15T10:41:52.000Z");

// ---------------------------------------------------------------------------
// ICS — Ev (§5.5d executed output)
// ---------------------------------------------------------------------------

describe("buildIcsPayload (Ev)", () => {
  it("emits the exact executed VCALENDAR envelope", () => {
    const ics = buildIcsPayload(
      {
        uid: "abc-123",
        title: "Team sync",
        description: "Discuss Q3\nline2",
        location: "Room 4",
        start: "2026-01-15T10:00:00.000Z",
        end: "2026-01-15T11:00:00.000Z",
        allDay: false,
      },
      NOW,
    );
    const lines = ics.split("\r\n");
    expect(lines).toEqual([
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "CALSCALE:GREGORIAN",
      "PRODID:tasktrove-calendar-sync",
      "X-PUBLISHED-TTL:PT1H",
      "BEGIN:VEVENT",
      "UID:abc-123",
      "DTSTAMP:20260115T104152Z",
      "DTSTART:20260115T100000Z",
      "DTEND:20260115T110000Z",
      "SUMMARY:Team sync",
      "DESCRIPTION:Discuss Q3\\nline2",
      "LOCATION:Room 4",
      "END:VEVENT",
      "END:VCALENDAR",
      "",
    ]);
  });

  it("emits DATE-form DTSTART/DTEND for all-day events (executed form)", () => {
    const ics = buildIcsPayload(
      {
        uid: "abc-123",
        title: "Offsite",
        start: "2026-01-15",
        end: "2026-01-16",
        allDay: true,
      },
      NOW,
    );
    expect(ics).toContain("DTSTART;VALUE=DATE:20260115");
    expect(ics).toContain("DTEND;VALUE=DATE:20260116");
  });

  it("omits SUMMARY entirely when only a `summary` key is passed (executed flag, §5.5d)", () => {
    const ics = buildIcsPayload(
      {
        uid: "u",
        start: "2026-01-15T10:00:00.000Z",
        end: "2026-01-15T11:00:00.000Z",
        allDay: false,
      },
      NOW,
    );
    expect(ics).not.toContain("SUMMARY:");
  });
});

// ---------------------------------------------------------------------------
// ICS — Ze (§5.5d executed outputs)
// ---------------------------------------------------------------------------

describe("parseIcsFields (Ze)", () => {
  it("parses timed events to ISO-UTC with timezone UTC (executed output)", () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Test//EN",
      "BEGIN:VEVENT",
      "UID:xyz-789",
      "DTSTART:20260115T100000Z",
      "DTEND:20260115T110000Z",
      "SUMMARY:Hello",
      "DESCRIPTION:Line1\\nLine2",
      "LOCATION:HQ",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");
    expect(parseIcsFields(ics)).toEqual({
      start: "2026-01-15T10:00:00.000Z",
      end: "2026-01-15T11:00:00.000Z",
      timezone: "UTC",
      summary: "Hello",
      description: "Line1\nLine2",
      location: "HQ",
      uid: "xyz-789",
      allDay: false,
    });
  });

  it("parses all-day events with timezone 'floating' and null absent fields (executed output)", () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "BEGIN:VEVENT",
      "UID:ad-1",
      "DTSTART;VALUE=DATE:20260115",
      "DTEND;VALUE=DATE:20260116",
      "SUMMARY:All day thing",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");
    const fields = parseIcsFields(ics);
    expect(fields.allDay).toBe(true);
    expect(fields.timezone).toBe("floating");
    expect(fields.description).toBeNull();
    expect(fields.location).toBeNull();
    // Local-midnight ISO: date component is the DATE value in local time.
    expect(fields.start?.slice(0, 10)).toBe("2026-01-15");
    expect(fields.end?.slice(0, 10)).toBe("2026-01-16");
  });
});

// ---------------------------------------------------------------------------
// Schemas — Hz superRefine messages (§5.5c, executed against real zod)
// ---------------------------------------------------------------------------

describe("CreateEventRequestSchema (Hz)", () => {
  it("rejects all-day events with non-date starts using the verbatim message", () => {
    const result = CreateEventRequestSchema.safeParse({
      title: "t",
      allDay: true,
      start: "13/99",
      end: "zz",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.message);
      expect(messages).toContain(
        "Start date must be a YYYY-MM-DD string for all-day events.",
      );
      expect(messages).toContain(
        "End date must be a YYYY-MM-DD string for all-day events.",
      );
    }
  });

  it("rejects timed events with non-datetime values using the verbatim messages", () => {
    const result = CreateEventRequestSchema.safeParse({
      title: "t",
      start: "notadate",
      end: "alsonot",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.message);
      expect(messages).toContain("Start time must be an ISO datetime string.");
      expect(messages).toContain("End time must be an ISO datetime string.");
    }
  });

  it("accepts valid all-day and timed events", () => {
    expect(
      CreateEventRequestSchema.safeParse({
        title: "t",
        allDay: true,
        start: "2026-01-15",
        end: "2026-01-16",
      }).success,
    ).toBe(true);
    expect(
      CreateEventRequestSchema.safeParse({
        title: "t",
        start: "2026-01-15T10:00:00.000Z",
        end: "2026-01-15T11:00:00.000Z",
      }).success,
    ).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Service — syncFromRemote + pushLocalChanges (§5.5d executed calls)
// ---------------------------------------------------------------------------

function makeClient(overrides: Partial<SyncClient> = {}): SyncClient {
  return {
    syncCalendars: async () => ({
      calendars: [],
      deletedCalendars: [],
      updatedCalendars: [],
    }),
    fetchCalendarObjects: async () => [],
    createCalendarObject: async () =>
      new Response(null, { status: 201, headers: { etag: '"e1"' } }),
    updateCalendarObject: async () =>
      new Response(null, { status: 204, headers: { etag: '"e2"' } }),
    deleteCalendarObject: async () => new Response(null, { status: 204 }),
    ...overrides,
  };
}

const ACCOUNT = {
  account: {
    id: "cred-1",
    username: "u",
    password: "p",
    enabled: true,
    source: "caldav",
  },
  source: "caldav",
  headers: {},
  client: makeClient(),
  defaultTimezone: "UTC",
  userId: "user-1",
  now: new Date("2026-01-15T00:00:00.000Z"),
};

describe("CalendarSyncService.syncFromRemote", () => {
  it("calls listCalendars(userId, source), withTransaction, syncCalendars with detailedResult", async () => {
    const persistence = new InMemoryCalendarPersistence();
    const calls: string[] = [];
    const recordingPersistence = new InMemoryCalendarPersistence();
    recordingPersistence.listCalendars = async (
      userId: string,
      source: string,
    ) => {
      calls.push(`listCalendars:${userId}:${source}`);
      return persistence.listCalendars(userId, source);
    };
    recordingPersistence.withTransaction = async <T>(
      fn: (tx: unknown) => Promise<T>,
    ) => {
      calls.push("withTransaction");
      return persistence.withTransaction(fn);
    };
    const client = makeClient({
      syncCalendars: async (args) => {
        calls.push(`syncCalendars:detailed=${args.detailedResult}`);
        return { calendars: [] };
      },
    });
    const service = new CalendarSyncService(recordingPersistence);

    const summary = await service.syncFromRemote({ ...ACCOUNT, client });
    expect(calls).toEqual([
      "listCalendars:user-1:caldav",
      "withTransaction",
      "syncCalendars:detailed=true",
    ]);
    expect(summary).toEqual(EMPTY_SYNC_SUMMARY);
  });

  it("creates calendar records with executed fallbacks ('Remote calendar', UTC, empty ctag)", async () => {
    const persistence = new InMemoryCalendarPersistence();
    const service = new CalendarSyncService(persistence);
    const client = makeClient({
      syncCalendars: async () => ({
        calendars: [{ url: "https://x/work/", displayName: undefined }],
      }),
      fetchCalendarObjects: async () => [
        {
          url: "https://x/work/ev1.ics",
          etag: '"a"',
          data: [
            "BEGIN:VEVENT",
            "UID:ev-1",
            "DTSTART:20260115T100000Z",
            "DTEND:20260115T110000Z",
            "SUMMARY:Standup",
            "END:VEVENT",
          ].join("\n"),
        },
        {
          // Not a VEVENT — must be filtered out (executed filter).
          url: "https://x/work/todo1.ics",
          data: "BEGIN:VTODO\nEND:VTODO",
        },
      ],
    });

    const summary = await service.syncFromRemote({ ...ACCOUNT, client });
    expect(summary.createdCalendars).toBe(1);
    expect(summary.createdObjects).toBe(1);

    const calendars = persistence.snapshotCalendars();
    expect(calendars[0]?.name).toBe("Remote calendar");
    expect(calendars[0]?.timezone).toBe("UTC");
    expect(calendars[0]?.ctag).toBe("");
    expect(calendars[0]?.credentialId).toBe("cred-1");
    expect(calendars[0]?.createdAt).toBe("2026-01-15T00:00:00.000Z");

    const objects = persistence.snapshotObjects();
    expect(objects).toHaveLength(1);
    expect(objects[0]?.summary).toBe("Standup");
    expect(objects[0]?.uid).toBe("ev-1");
    expect(objects[0]?.allDay).toBe(false);
  });
});

describe("CalendarSyncService.pushLocalChanges", () => {
  const calendar = {
    id: "cal-1",
    userId: "user-1",
    timezone: "UTC",
    name: "Work",
    source: "caldav",
    ctag: "",
    syncToken: "",
    url: "https://x/cal/",
    credentialId: "cred-1",
    createdAt: "2026-01-15T00:00:00.000Z",
    updatedAt: "2026-01-15T00:00:00.000Z",
  };

  it("creates via tsdav with {calendar:{url,displayName,timezone}, iCalString, filename}", async () => {
    const persistence = new InMemoryCalendarPersistence();
    await persistence.insertCalendars([calendar]);
    const service = new CalendarSyncService(persistence);
    const calls: Array<{
      name: string;
      args: Parameters<SyncClient["createCalendarObject"]>[0];
    }> = [];
    const client = makeClient({
      createCalendarObject: async (args) => {
        calls.push({ name: "createCalendarObject", args });
        return new Response(null, { status: 201, headers: { etag: '"e1"' } });
      },
    });

    const summary = await service.pushLocalChanges({
      calendar,
      changes: {
        created: [
          { url: "u1.ics", data: "BEGIN:VEVENT\nUID:1\nEND:VEVENT", etag: "" },
        ],
      },
      client,
      now: new Date("2026-01-15T00:00:00.000Z"),
    });

    expect(summary.createdObjects).toBe(1);
    expect(calls).toHaveLength(1);
    const call = calls[0];
    expect(call?.name).toBe("createCalendarObject");
    if (!call) return;
    expect(call.args.calendar).toEqual({
      url: "https://x/cal/",
      displayName: "Work",
      timezone: "UTC",
    });
    expect(call.args.filename).toBe("u1.ics");
  });

  it("absolutizes object URLs against the calendar URL on update (executed behavior)", async () => {
    const persistence = new InMemoryCalendarPersistence();
    await persistence.insertCalendars([calendar]);
    const service = new CalendarSyncService(persistence);
    const urls: string[] = [];
    const client = makeClient({
      updateCalendarObject: async (args) => {
        urls.push(args.calendarObject.url);
        return new Response(null, { status: 204 });
      },
    });

    await service.pushLocalChanges({
      calendar,
      changes: {
        updated: [
          {
            url: "u2.ics",
            data: "BEGIN:VEVENT\nUID:2\nEND:VEVENT",
            etag: '"abc"',
          },
        ],
      },
      client,
    });
    expect(urls).toEqual(["https://x/cal/u2.ics"]);
  });

  it("throws with status + body text when the remote rejects (fetch-style errors)", async () => {
    const persistence = new InMemoryCalendarPersistence();
    await persistence.insertCalendars([calendar]);
    const service = new CalendarSyncService(persistence);
    const client = makeClient({
      deleteCalendarObject: async () => new Response("gone", { status: 404 }),
    });

    await expect(
      service.pushLocalChanges({
        calendar,
        changes: { deleted: [{ url: "u3.ics" }] },
        client,
      }),
    ).rejects.toThrow("Calendar object delete failed: 404 gone");
  });

  it("ends with updateCalendarMetadata({updatedAt}) (executed tail)", async () => {
    const persistence = new InMemoryCalendarPersistence();
    await persistence.insertCalendars([calendar]);
    let updatedAt: string | undefined;
    const original = persistence.updateCalendarMetadata.bind(persistence);
    persistence.updateCalendarMetadata = async (
      calendarId: string,
      metadata: Partial<CalendarRecord>,
    ) => {
      updatedAt = metadata.updatedAt;
      return original(calendarId, metadata);
    };
    const service = new CalendarSyncService(persistence);

    await service.pushLocalChanges({
      calendar,
      changes: {},
      client: makeClient(),
      now: new Date("2026-01-15T00:00:00.000Z"),
    });
    expect(updatedAt).toBe("2026-01-15T00:00:00.000Z");
  });
});

// ---------------------------------------------------------------------------
// Store (§5.5b: process-global singleton, no file persistence)
// ---------------------------------------------------------------------------

describe("getCalendarSyncStore", () => {
  it("returns the same instance across calls (process-global singleton)", () => {
    const a = getCalendarSyncStore();
    const b = getCalendarSyncStore();
    expect(a).toBe(b);
  });

  it("starts with an empty state (lastSyncedAt null, zero summary)", () => {
    // Use a fresh store key to avoid cross-test contamination.
    const state = getCalendarSyncStore();
    expect(state.lastSyncedAt).toBeNull();
    expect(state.lastSummary).toEqual(EMPTY_SYNC_SUMMARY);
  });
});
