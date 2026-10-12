/**
 * ICS emit/parse (Pro parity).
 *
 * Both functions reproduce the EXECUTED outputs of the original Pro modules
 * `Ev` and `Ze` (FINDINGS §5.5d, tools/deob/probe-7147.cjs) exactly:
 *
 * Ev input key for the summary is **`title`** (executed flag, §5.5d); a
 * `summary` key alone omits SUMMARY entirely - reproduced faithfully.
 */

import type { CalendarEventFields } from "./types";

// ---------------------------------------------------------------------------
// Helpers (local date handling only - no timezone math beyond what the
// executed Ze exhibited: allDay dates parse at local midnight)
// ---------------------------------------------------------------------------

/** Formats a Date as the ICS basic UTC form `YYYYMMDDTHHMMSSZ`. */
function toBasicUtc(date: Date): string {
  const pad = (n: number): string => String(n).padStart(2, "0");
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

/** Formats a Date as the ICS DATE value `YYYYMMDD`. */
function toBasicDate(date: Date): string {
  const pad = (n: number): string => String(n).padStart(2, "0");
  return (
    date.getUTCFullYear() + pad(date.getUTCMonth() + 1) + pad(date.getUTCDate())
  );
}

/** Parses `YYYY-MM-DD` at LOCAL midnight, returning the ISO-UTC string the
 *  executed Ze produced for allDay events (SS5.5d: "parsed at local midnight
 *  -> ISO-UTC, timezone 'floating'"). */
/** Parses an ICS DATE value (basic form `YYYYMMDD`, per RFC 5545) at LOCAL
 *  midnight, returning the ISO-UTC string the executed Ze produced for allDay
 *  events (§5.5d: "parsed at local midnight -> ISO-UTC, timezone 'floating'"). */
function dateOnlyToLocalMidnightIso(basicDate: string): string {
  const match = /^(\d{4})(\d{2})(\d{2})$/.exec(basicDate.trim());
  if (!match) {
    // Tolerate the dashed form as well (defensive; ICS emits basic form).
    const dashed = /^(\d{4})-(\d{2})-(\d{2})$/.exec(basicDate.trim());
    if (dashed) {
      const local = new Date(
        Number(dashed[1]),
        Number(dashed[2]) - 1,
        Number(dashed[3]),
        0,
        0,
        0,
        0,
      );
      return local.toISOString();
    }
    return new Date(basicDate).toISOString();
  }
  const [, y, m, d] = match;
  const local = new Date(Number(y), Number(m) - 1, Number(d), 0, 0, 0, 0);
  return local.toISOString();
}

/** Escapes embedded newlines in text values (executed Ev: newline -> `\n`). */
function escapeText(value: string): string {
  return value.replace(/\r\n/g, "\n").replace(/\n/g, "\\n");
}

/** Unescapes ICS text newlines (executed Ze: `\n` -> newline). */
function unescapeText(value: string): string {
  return value.replace(/\\n/g, "\n");
}

// ---------------------------------------------------------------------------
// Ev - event fields -> ICS payload (executed output, SS5.5d):
//   BEGIN:VCALENDAR
//   VERSION:2.0
//   CALSCALE:GREGORIAN
//   PRODID:tasktrove-calendar-sync
//   X-PUBLISHED-TTL:PT1H
//   BEGIN:VEVENT
//   UID:<uid>  DTSTAMP:<now basic utc>
//   DTSTART:<basic utc> | allDay: DTSTART;VALUE=DATE:<basic date>
//   DTEND:<...>  DESCRIPTION:...  LOCATION:...
//   END:VEVENT  END:VCALENDAR
// ---------------------------------------------------------------------------

/** Input for buildIcsPayload (the executed Ev shape: summary comes from the
 *  `title` key — a `summary` key alone omits SUMMARY entirely, §5.5d flag). */
export interface IcsEventInput {
  /** Summary source key — `title` per the executed flag (§5.5d). */
  title?: string;
  uid?: string;
  start: string | null;
  end: string | null;
  description?: string | null;
  location?: string | null;
  allDay: boolean;
}

export function buildIcsPayload(
  event: IcsEventInput,
  now: Date = new Date(),
): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "PRODID:tasktrove-calendar-sync",
    "X-PUBLISHED-TTL:PT1H",
    "BEGIN:VEVENT",
  ];

  lines.push(`UID:${event.uid ?? ""}`);
  lines.push(`DTSTAMP:${toBasicUtc(now)}`);

  if (event.allDay) {
    lines.push(
      `DTSTART;VALUE=DATE:${toBasicDate(new Date(event.start ?? ""))}`,
    );
    lines.push(`DTEND;VALUE=DATE:${toBasicDate(new Date(event.end ?? ""))}`);
  } else {
    lines.push(`DTSTART:${toBasicUtc(new Date(event.start ?? ""))}`);
    lines.push(`DTEND:${toBasicUtc(new Date(event.end ?? ""))}`);
  }

  // Executed behavior: Ev reads the summary from the `title` key; when only a
  // `summary` key is present, SUMMARY is omitted entirely (§5.5d flag).
  if (event.title !== undefined) {
    lines.push(`SUMMARY:${escapeText(event.title)}`);
  }

  if (event.description !== undefined && event.description !== null) {
    lines.push(`DESCRIPTION:${escapeText(event.description)}`);
  }
  if (event.location !== undefined && event.location !== null) {
    lines.push(`LOCATION:${escapeText(event.location)}`);
  }

  lines.push("END:VEVENT", "END:VCALENDAR", "");
  return lines.join("\r\n");
}

// ---------------------------------------------------------------------------
// Ze - ICS payload -> event fields (executed output, SS5.5d):
//   timed  -> {start/end: ISO-UTC, timezone: "UTC", summary, description,
//              location, uid, allDay: false}
//   allDay -> {start/end: local-midnight ISO-UTC, timezone: "floating",
//              absent fields: null}
// ---------------------------------------------------------------------------

export function parseIcsFields(ics: string): CalendarEventFields {
  const lines = ics.replace(/\r\n/g, "\n").split("\n");

  let start: string | null = null;
  let end: string | null = null;
  let timezone: string | null = null;
  let summary: string | null = null;
  let description: string | null = null;
  let location: string | null = null;
  let uid: string | null = null;
  let allDay = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.startsWith("DTSTART")) {
      const value = line.slice(line.indexOf(":") + 1);
      if (line.includes("VALUE=DATE")) {
        allDay = true;
        start = dateOnlyToLocalMidnightIso(value);
      } else {
        start = parseBasicUtcToIso(value);
      }
    } else if (line.startsWith("DTEND")) {
      const value = line.slice(line.indexOf(":") + 1);
      end = allDay
        ? dateOnlyToLocalMidnightIso(value)
        : parseBasicUtcToIso(value);
    } else if (line.startsWith("SUMMARY:")) {
      summary = unescapeText(line.slice("SUMMARY:".length));
    } else if (line.startsWith("DESCRIPTION:")) {
      description = unescapeText(line.slice("DESCRIPTION:".length));
    } else if (line.startsWith("LOCATION:")) {
      location = unescapeText(line.slice("LOCATION:".length));
    } else if (line.startsWith("UID:")) {
      uid = line.slice("UID:".length);
    }
  }

  timezone = allDay ? "floating" : "UTC";

  return { start, end, timezone, summary, description, location, uid, allDay };
}

/** `YYYYMMDDTHHMMSSZ` -> ISO-UTC string (the executed timed parse path). */
function parseBasicUtcToIso(basic: string): string {
  const match = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z?$/.exec(basic);
  if (!match) {
    return new Date(basic).toISOString();
  }
  const [, y, mo, d, h, mi, s] = match;
  return new Date(
    Date.UTC(
      Number(y),
      Number(mo) - 1,
      Number(d),
      Number(h),
      Number(mi),
      Number(s),
    ),
  ).toISOString();
}
