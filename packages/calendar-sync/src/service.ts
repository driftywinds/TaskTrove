/**
 * Calendar-sync service (Pro parity).
 *
 * Reproduces the executed `TU` class from module 7147 (FINDINGS §5.5d):
 * - syncFromRemote(account): listCalendars -> withTransaction ->
 *   client.syncCalendars({oldCalendars, detailedResult: true}) -> diff into
 *   the 6-counter summary (deletions -> creations -> updates), VEVENT-only
 *   object ingestion with the executed record shapes and fallbacks.
 * - pushLocalChanges({calendar, changes, client, now}): create/update/delete
 *   via tsdav with fetch-style response checks (.ok, etag header, body text),
 *   ending with updateCalendarMetadata({updatedAt}).
 */

import { v4 as uuidv4 } from "uuid";
import type { InMemoryCalendarPersistence } from "./adapter";
import { parseIcsFields } from "./ics";
import { DEFAULT_CONNECTION_TIMEZONE, EMPTY_SYNC_SUMMARY } from "./types";
import type {
  CalendarObjectChangeSet,
  CalendarObjectRecord,
  CalendarRecord,
  SyncSummary,
} from "./types";

/** Old-calendar shape the executed syncCalendars call passes (§5.5d). */
export interface OldCalendarInput {
  url: string;
  ctag?: string;
  syncToken?: string;
  displayName?: string;
  timezone?: string;
}

/** Remote calendar shape tsdav returns from syncCalendars (§5.5d). */
export interface RemoteCalendar {
  url: string;
  displayName?: string;
  timezone?: string;
  ctag?: string;
  syncToken?: string;
  description?: string;
}

/** Remote calendar object shape from fetchCalendarObjects (§5.5d). */
export interface RemoteCalendarObject {
  url: string;
  etag?: string;
  data?: string;
}

/** The account object the executed syncFromRemote receives (§5.5d). */
export interface SyncAccount {
  account: {
    id: string;
    username: string;
    password: string;
    enabled: boolean;
    source: string;
  };
  source: string;
  headers: Record<string, string>;
  /** Minimal tsdav-like client: the executed service only calls the three methods. */
  client: SyncClient;
  defaultTimezone: string;
  userId: string;
  now?: Date;
}

/** The tsdav surface the executed TU actually calls (§5.5d, verified calls). */
export interface SyncClient {
  syncCalendars(args: {
    oldCalendars: OldCalendarInput[];
    detailedResult: boolean;
  }): Promise<{
    calendars?: RemoteCalendar[];
    deletedCalendars?: RemoteCalendar[];
    updatedCalendars?: RemoteCalendar[];
    createdObjects?: RemoteCalendarObject[];
    updatedObjects?: RemoteCalendarObject[];
    deletedObjects?: RemoteCalendarObject[];
  }>;
  fetchCalendarObjects(args: {
    calendar: { url: string };
  }): Promise<RemoteCalendarObject[]>;
  createCalendarObject(args: {
    calendar: { url: string; displayName: string; timezone: string };
    iCalString: string;
    filename: string;
  }): Promise<Response>;
  updateCalendarObject(args: {
    calendarObject: { url: string; data: string; etag: string };
  }): Promise<Response>;
  deleteCalendarObject(args: {
    calendarObject: { url: string };
  }): Promise<Response>;
}

/** PushLocalChanges input (executed shape, §5.5d). */
export interface PushLocalChangesInput {
  calendar: CalendarRecord;
  changes: CalendarObjectChangeSet;
  client: SyncClient;
  now?: Date;
}

export class CalendarSyncService {
  constructor(private readonly persistence: InMemoryCalendarPersistence) {}

  /** Executed syncFromRemote (§5.5d): diff remote into the store, count the 6 counters. */
  async syncFromRemote(account: SyncAccount): Promise<SyncSummary> {
    const now = (account.now ?? new Date()).toISOString();
    const summary = { ...EMPTY_SYNC_SUMMARY };

    const oldCalendars = await this.persistence.listCalendars(
      account.userId,
      account.source,
    );

    const byUrl = new Map(oldCalendars.map((cal) => [cal.url, cal]));

    // Executed order (§5.5d): listCalendars -> withTransaction ->
    // syncCalendars({oldCalendars, detailedResult: true}) -> diff inside the
    // transaction (deletions -> creations -> updates).
    await this.persistence.withTransaction(async () => {
      const synced = await account.client.syncCalendars({
        oldCalendars: oldCalendars.map((cal) => ({
          url: cal.url,
          ctag: cal.ctag,
          syncToken: cal.syncToken,
          displayName: cal.name,
          timezone: cal.timezone,
        })),
        detailedResult: true,
      });

      const deleted = synced.deletedCalendars ?? [];
      if (deleted.length > 0) {
        const urls = deleted.map((cal) => cal.url);
        const removed = deleted.filter((cal) => byUrl.has(cal.url));
        if (removed.length > 0) {
          const ids = removed.map((cal) => byUrl.get(cal.url)?.id ?? "");
          await this.persistence.deleteCalendarObjectsByCalendarIds(ids);
          await this.persistence.deleteCalendarsByUrls(urls);
          summary.deletedCalendars += removed.length;
        }
      }

      // Creations (executed record builder + fallbacks: "Remote calendar",
      // timezone UTC, empty ctag/syncToken)
      for (const remote of synced.calendars ?? []) {
        if (byUrl.has(remote.url)) continue;
        const record: CalendarRecord = {
          id: uuidv4(),
          userId: account.userId,
          timezone:
            remote.timezone ||
            account.defaultTimezone ||
            DEFAULT_CONNECTION_TIMEZONE,
          name:
            typeof remote.displayName === "string"
              ? remote.displayName
              : "Remote calendar",
          source: account.source,
          ctag: remote.ctag ?? "",
          syncToken: remote.syncToken ?? "",
          url: remote.url,
          credentialId: account.account.id,
          createdAt: now,
          updatedAt: now,
        };
        await this.persistence.insertCalendars([record]);
        summary.createdCalendars += 1;

        // Fetch this calendar's objects; keep only VEVENTs (executed filter).
        const objects = await account.client.fetchCalendarObjects({
          calendar: { url: remote.url },
        });
        const eventObjects = objects
          .filter(
            (obj) =>
              typeof obj.data === "string" && obj.data.includes("VEVENT"),
          )
          .map((obj) => this.buildObjectRecord(obj, record.id));
        await this.persistence.insertCalendarObjects(eventObjects);
        summary.createdObjects += eventObjects.length;
      }

      // Updates (executed: fetch + upsert per updated calendar)
      for (const remote of synced.updatedCalendars ?? []) {
        const existing = byUrl.get(remote.url);
        if (!existing) continue;
        await this.persistence.updateCalendarMetadata(existing.id, {
          ctag: remote.ctag ?? existing.ctag,
          syncToken: remote.syncToken ?? existing.syncToken,
          updatedAt: now,
        });
        summary.updatedCalendars += 1;

        const objects = await account.client.fetchCalendarObjects({
          calendar: { url: remote.url },
        });
        const eventObjects = objects
          .filter(
            (obj) =>
              typeof obj.data === "string" && obj.data.includes("VEVENT"),
          )
          .map((obj) => this.buildObjectRecord(obj, existing.id));
        for (const obj of eventObjects) {
          await this.persistence.upsertCalendarObject(obj.url, obj);
        }
        summary.updatedObjects += eventObjects.length;
      }
    });

    return summary;
  }

  /** Executed pushLocalChanges (§5.5d): push changes to the remote, fetch-style
   *  response handling (.ok / etag header / body text on failure). */
  async pushLocalChanges(input: PushLocalChangesInput): Promise<SyncSummary> {
    const now = (input.now ?? new Date()).toISOString();
    const summary = { ...EMPTY_SYNC_SUMMARY };
    const calendarUrl = this.ensureTrailingSlash(input.calendar.url);

    for (const change of input.changes.created ?? []) {
      const response = await input.client.createCalendarObject({
        calendar: {
          url: calendarUrl,
          displayName: input.calendar.name,
          timezone: input.calendar.timezone,
        },
        iCalString: change.data,
        filename: this.urlBasename(change.url, "event.ics"),
      });
      if (!response.ok) {
        const body = await response.text();
        throw new Error(
          `Calendar object create failed: ${response.status} ${body}`,
        );
      }
      const etag = response.headers.get("etag") ?? "";
      const createdUrl = this.absolutize(change.url, calendarUrl);
      await this.persistence.upsertCalendarObject(createdUrl, {
        id: uuidv4(),
        calendarId: input.calendar.id,
        ...this.objectFromIcs(change.data),
        url: createdUrl,
        etag,
      });
      summary.createdObjects += 1;
    }

    for (const change of input.changes.updated ?? []) {
      const response = await input.client.updateCalendarObject({
        calendarObject: {
          url: this.absolutize(change.url, calendarUrl),
          data: change.data,
          etag: change.etag,
        },
      });
      if (!response.ok) {
        const body = await response.text();
        throw new Error(
          `Calendar object update failed: ${response.status} ${body}`,
        );
      }
      const etag = response.headers.get("etag") ?? change.etag;
      const updatedUrl = this.absolutize(change.url, calendarUrl);
      await this.persistence.upsertCalendarObject(updatedUrl, {
        id: uuidv4(),
        calendarId: input.calendar.id,
        ...this.objectFromIcs(change.data),
        url: updatedUrl,
        etag,
      });
      summary.updatedObjects += 1;
    }

    for (const change of input.changes.deleted ?? []) {
      const response = await input.client.deleteCalendarObject({
        calendarObject: { url: this.absolutize(change.url, calendarUrl) },
      });
      if (!response.ok) {
        const body = await response.text();
        throw new Error(
          `Calendar object delete failed: ${response.status} ${body}`,
        );
      }
      await this.persistence.deleteCalendarObjects([
        this.absolutize(change.url, calendarUrl),
      ]);
      summary.deletedObjects += 1;
    }

    // Executed tail: updateCalendarMetadata({updatedAt: now ISO})
    await this.persistence.updateCalendarMetadata(input.calendar.id, {
      updatedAt: now,
    });

    return summary;
  }

  // -------------------------------------------------------------------------
  // Helpers (executed record builders + URL handling, §5.5b–d)
  // -------------------------------------------------------------------------

  private buildObjectRecord(
    remote: RemoteCalendarObject,
    calendarId: string,
  ): CalendarObjectRecord {
    const fields = remote.data
      ? parseIcsFields(remote.data)
      : {
          start: null,
          end: null,
          timezone: null,
          summary: null,
          description: null,
          location: null,
          uid: null,
          allDay: false,
        };
    return {
      id: uuidv4(),
      calendarId,
      url: remote.url,
      etag: remote.etag ?? "",
      data: typeof remote.data === "string" ? remote.data : "",
      start: fields.start,
      end: fields.end,
      summary: fields.summary,
      description: fields.description,
      location: fields.location,
      timezone: fields.timezone,
      uid: fields.uid,
      allDay: fields.allDay,
    };
  }

  private objectFromIcs(
    data: string,
  ): Omit<CalendarObjectRecord, "id" | "calendarId" | "url" | "etag"> {
    const fields = parseIcsFields(data);
    return {
      data,
      start: fields.start,
      end: fields.end,
      summary: fields.summary,
      description: fields.description,
      location: fields.location,
      timezone: fields.timezone,
      uid: fields.uid,
      allDay: fields.allDay,
    };
  }

  /** Executed connection builder: serverUrl trailing slashes collapse to one `/`. */
  private ensureTrailingSlash(url: string): string {
    return url.replace(/\/+$/, "/");
  }

  /** Executed filename: URL basename with `event.ics` fallback (§5.5d). */
  private urlBasename(url: string, fallback: string): string {
    const clean = url.split("?")[0]?.split("#")[0] ?? "";
    const base = clean.split("/").filter(Boolean).pop();
    return base && base.includes(".") ? base : fallback;
  }

  /** Executed update path: relative object URLs absolutize against the calendar URL. */
  private absolutize(objectUrl: string, calendarUrl: string): string {
    if (/^https?:\/\//i.test(objectUrl)) return objectUrl;
    return new URL(objectUrl, calendarUrl).toString();
  }
}
