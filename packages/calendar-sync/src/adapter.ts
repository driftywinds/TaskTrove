/**
 * In-memory calendar persistence adapter (Pro parity).
 *
 * Reproduces the executed adapter class from module 43729 (FINDINGS SS5.5b):
 * plain Maps, pass-through withTransaction, and the exact method surface the
 * executed TU service calls (listCalendars / insertCalendars / listCalendarObjects /
 * insertCalendarObjects / upsertCalendarObject / deleteCalendarObjects /
 * deleteCalendarObjectsByCalendarIds / deleteCalendarsByUrls / updateCalendarMetadata).
 * The Pro engine keeps ALL state in memory - remote is the source of truth.
 */

import type { CalendarRecord, CalendarObjectRecord } from "./types";

export class InMemoryCalendarPersistence {
  private readonly calendars = new Map<string, CalendarRecord>();
  private readonly calendarObjects = new Map<string, CalendarObjectRecord>();

  /** Pass-through transaction (executed semantics: fn(null)). */
  async withTransaction<T>(fn: (tx: unknown) => Promise<T>): Promise<T> {
    return await fn(null);
  }

  async listCalendars(
    userId: string,
    source: string,
  ): Promise<CalendarRecord[]> {
    return [...this.calendars.values()].filter(
      (cal) => cal.userId === userId && cal.source === source,
    );
  }

  async listCalendarObjects(
    calendarId: string,
  ): Promise<CalendarObjectRecord[]> {
    return [...this.calendarObjects.values()].filter(
      (obj) => obj.calendarId === calendarId,
    );
  }

  async insertCalendars(records: CalendarRecord[]): Promise<void> {
    for (const record of records) {
      this.calendars.set(record.id, record);
    }
  }

  async insertCalendarObjects(records: CalendarObjectRecord[]): Promise<void> {
    for (const record of records) {
      this.calendarObjects.set(record.id, record);
    }
  }

  async upsertCalendarObject(
    url: string,
    record: CalendarObjectRecord,
  ): Promise<void> {
    const existing = [...this.calendarObjects.values()].find(
      (obj) => obj.url === url,
    );
    if (existing) {
      this.calendarObjects.set(existing.id, { ...existing, ...record });
    } else {
      this.calendarObjects.set(record.id, record);
    }
  }

  async deleteCalendarObjects(urls: string[]): Promise<void> {
    for (const obj of [...this.calendarObjects.values()]) {
      if (urls.includes(obj.url)) {
        this.calendarObjects.delete(obj.id);
      }
    }
  }

  async deleteCalendarObjectsByCalendarIds(ids: string[]): Promise<void> {
    for (const obj of [...this.calendarObjects.values()]) {
      if (ids.includes(obj.calendarId)) {
        this.calendarObjects.delete(obj.id);
      }
    }
  }

  async deleteCalendarsByUrls(urls: string[]): Promise<void> {
    for (const cal of [...this.calendars.values()]) {
      if (urls.includes(cal.url)) {
        this.calendars.delete(cal.id);
      }
    }
  }

  async updateCalendarMetadata(
    calendarId: string,
    metadata: Partial<CalendarRecord>,
  ): Promise<void> {
    const existing = this.calendars.get(calendarId);
    if (existing) {
      this.calendars.set(calendarId, { ...existing, ...metadata });
    }
  }

  /** Read-only snapshot of all calendars (for store snapshots / API responses). */
  snapshotCalendars(): CalendarRecord[] {
    return [...this.calendars.values()];
  }

  /** Read-only snapshot of all calendar objects (for store snapshots). */
  snapshotObjects(): CalendarObjectRecord[] {
    return [...this.calendarObjects.values()];
  }
}
