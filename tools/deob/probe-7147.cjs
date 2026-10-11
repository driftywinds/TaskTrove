// Probe: execute ORIGINAL calendar-sync package module (7147) and interrogate Ev/Ze/TU/AO.
// STAGE=ev|ze|tu|all
const { findModuleFile, executeModule, loadModule, requested } = require("./exec-raw-module.cjs");

const ctx = { console, Buffer, process, URL, URLSearchParams, TextEncoder, TextDecoder, setTimeout, clearTimeout }; // shared realm for all loaded modules (instanceof consistency)
const main = findModuleFile(7147);
const exp = executeModule(main.text, 7147, ctx);
console.log("LOADED 7147. exports:", Object.keys(exp).join(", "));

const stage = process.env.STAGE || "all";

if (stage === "all" || stage === "ev") {
  const sample = {
    summary: "Team sync",
    description: "Discuss Q3\nline2",
    location: "Room 4",
    start: "2026-01-15T10:00:00.000Z",
    end: "2026-01-15T11:00:00.000Z",
    uid: "abc-123",
    timezone: "America/New_York",
    allDay: false,
  };
  try {
    const ics = exp.Ev(sample);
    console.log("Ev(timed) =>\n" + String(ics));
  } catch (e) {
    console.log("Ev(timed) ERROR:", e.message, "\n", (e.stack || "").split("\n").slice(1, 7).join("\n"));
  }
  try {
    const ics = exp.Ev({ ...sample, allDay: true, start: "2026-01-15", end: "2026-01-16" });
    console.log("Ev(allDay) =>\n" + String(ics));
  } catch (e) {
    console.log("Ev(allDay) ERROR:", e.message);
  }
}

if (stage === "all" || stage === "ze") {
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
  try {
    const parsed = exp.Ze(ics);
    console.log("Ze(timed ics) =>", JSON.stringify(parsed, null, 1));
  } catch (e) {
    console.log("Ze ERROR:", e.message);
  }
  try {
    const allDayIcs = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Test//EN",
      "BEGIN:VEVENT",
      "UID:ad-1",
      "DTSTART;VALUE=DATE:20260115",
      "DTEND;VALUE=DATE:20260116",
      "SUMMARY:All day thing",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");
    console.log("Ze(allDay ics) =>", JSON.stringify(exp.Ze(allDayIcs), null, 1));
  } catch (e) {
    console.log("Ze(allDay) ERROR:", e.message);
  }
}

(async () => {
  if (stage === "all" || stage === "tu") {
  const calls = [];
  const fakePersistence = new Proxy(
    {},
    {
      get: (_t, p) =>
        async (...args) => {
          calls.push({ method: String(p), args: args.map((a) => (typeof a === "function" ? "<fn>" : a)) });
          if (String(p).startsWith("listCalendars")) return [];
          if (String(p).startsWith("listCalendarObjects")) return [];
          if (String(p) === "withTransaction") return await args[0](null);
          return undefined;
        },
    },
  );
  const service = new exp.TU(fakePersistence);
  console.log("TU methods:", Object.getOwnPropertyNames(Object.getPrototypeOf(service)).join(", "));

  const record = [];
  const resp = { ok: true, status: 201, headers: { get: (k) => (String(k).toLowerCase() === "etag" ? '"e1"' : null) } };
  const simple = (a) => (a && typeof a === "object" ? JSON.parse(JSON.stringify(a, (_k, v) => (typeof v === "function" ? "<fn>" : v))) : a);
  const mkClient = (name) =>
    new Proxy(function () {}, {
      get: (_t, p) => (p === "then" ? undefined : mkClient(name + "." + String(p))),
      apply: (_t, _this, args) => {
        record.push({ call: name, args: args.map(simple) });
        if (name.endsWith("syncCalendars")) return Promise.resolve(new Proxy({}, { get: (_t2, p2) => (p2 === "then" ? undefined : []) }));
        if (name.endsWith("fetchCalendarObjects")) return Promise.resolve([]);
        return Promise.resolve(resp);
      },
    });

  const account = {
    account: { id: "cred-1", username: "u", password: "p", enabled: true, source: "caldav" },
    source: "caldav",
    headers: {},
    client: mkClient("client"),
    defaultTimezone: "UTC",
    userId: "user-vs-cred-1",
    now: new Date("2026-01-15T00:00:00Z"),
  };
  try {
    const r = await service.syncFromRemote(account);
    console.log("syncFromRemote =>", JSON.stringify(r, null, 1));
    console.log("client calls:", JSON.stringify(record, null, 1));
    console.log("persistence calls:", JSON.stringify(calls, null, 1));
  } catch (e) {
    console.log("syncFromRemote ERROR:", e.message);
    console.log("client calls:", JSON.stringify(record, null, 1));
    console.log("persistence calls:", JSON.stringify(calls, null, 1));
  }

  record.length = 0;
  calls.length = 0;
  try {
    const pushChanges = {
      created: [{ url: "u1.ics", data: "BEGIN:VEVENT\nUID:1\nEND:VEVENT", etag: "" }],
      updated: [{ url: "u2.ics", data: "BEGIN:VEVENT\nUID:2\nEND:VEVENT", etag: '"abc"' }],
      deleted: [{ url: "u3.ics" }],
    };
    const r = await service.pushLocalChanges({
      calendar: { id: "cal-1", name: "Work", url: "https://x/cal/", timezone: "UTC", credentialId: "cred-1" },
      changes: pushChanges,
      client: mkClient("pclient"),
      now: new Date("2026-01-15T00:00:00Z"),
    });
    console.log("pushLocalChanges =>", JSON.stringify(r, null, 1));
    console.log("client calls:", JSON.stringify(record, null, 1));
    console.log("persistence calls:", JSON.stringify(calls, null, 1));
  } catch (e) {
    console.log("pushLocalChanges ERROR:", e.message);
    console.log("client calls:", JSON.stringify(record, null, 1));
    console.log("persistence calls:", JSON.stringify(calls, null, 1));
  }
  }
})();

