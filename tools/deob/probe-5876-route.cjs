// Probe: execute ORIGINAL events-route module (5876) and capture the exact object it
// hands to Ev() and to the engine's pushLocalChanges (ay). Resolves the §5.5d title-key
// flag and records the route -> engine call contract.
const path = require("path");
const M = require("./exec-raw-module.cjs");
const zod = require(require.resolve("zod", { paths: [path.join(process.cwd(), "packages", "types")] }));

const ctx = {
  console,
  Buffer,
  process,
  URL,
  URLSearchParams,
  TextEncoder,
  TextDecoder,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  crypto: require("node:crypto").webcrypto,
};

M.natives.set(92962, () => zod);

const { text } = M.findModuleFile(5876);
const src = M.sliceModule(text, 5876);

// 1) print the route's import map so stubs target the right ids
const importMap = [...src.matchAll(/var (a[A-Za-z])=c\((\d+)\)/g)].map((m) => `${m[1]}=${m[2]}`);
console.log("import map:", importMap.join(" "));

const evInputs = [];
const ayCalls = [];

// 2) real calendar-sync package module, with Ev wrapped
const calFile = M.findModuleFile(7147);
const cal = M.executeModule(calFile.text, 7147, ctx);
const calWrapped = Object.create(cal);
calWrapped.Ev = (input) => {
  evInputs.push(JSON.parse(JSON.stringify(input)));
  return cal.Ev(input);
};
M.store.set(7147, calWrapped);

// 3) middleware stubs (identity) so the handler chain reaches the real inner handler
for (const [id, key] of [
  [74218, "kF"],
  [77766, "Z"],
  [7852, "D"],
  [50336, "F0"],
]) {
  const stub = {};
  stub[key] = (h) => h;
  M.store.set(id, stub);
}

// 3b) Next.js runtime stub: intercept constructed route modules and capture `userland`
let capturedOptions = null;
class FakeAppRouteRouteModule {
  constructor(options) {
    capturedOptions = options;
    this.userland = options && options.userland;
  }
}
const runtimeStub = new Proxy(
  {},
  {
    get: (_t, p) => {
      if (p === "AppRouteRouteModule") return FakeAppRouteRouteModule;
      if (p === "RouteKind") return { APP_ROUTE: "APP_ROUTE", PAGES: "PAGES", APP_PAGE: "APP_PAGE" };
      return undefined;
    },
  },
);
M.store.set(51027, runtimeStub);

// 4) engine stub: capture ay() args, provide sq() state
const state = {
  calendars: [
    {
      id: "11111111-1111-4111-8111-111111111111",
      url: "https://cal.example/work/",
      name: "Work",
      timezone: "UTC",
      credentialId: "22222222-2222-4222-8222-222222222222",
    },
  ],
  objects: [],
  summary: {
    createdCalendars: 0,
    updatedCalendars: 0,
    deletedCalendars: 0,
    createdObjects: 0,
    updatedObjects: 0,
    deletedObjects: 0,
  },
  lastSyncedAt: null,
};
M.store.set(43729, {
  sq: async () => state,
  ay: async (args) => {
    ayCalls.push(JSON.parse(JSON.stringify(args)));
    return state.summary;
  },
  GX: async () => state,
});

// 5) helpers stub: validation passes through, error responses are tagged
M.store.set(5639, {
  sv: async (req) => ({ success: true, data: await req.json() }),
  WX: (...args) => ({ isErrorResponse: true, args }),
});

const exp = M.executeModule(text, 5876, ctx);
console.log("5876 exports:", Object.keys(exp).join(","));

// 6) locate the POST handler: prefer captured userland, fall back to exports
let POST = capturedOptions && capturedOptions.userland && capturedOptions.userland.POST;
if (typeof POST !== "function") POST = exp.POST;
if (typeof POST !== "function") {
  console.log("POST handler not found; export shapes:", Object.keys(exp).map((k) => k + ":" + typeof exp[k]).join(","));
  if (exp.routeModule) console.log("routeModule keys:", Object.getOwnPropertyNames(exp.routeModule).join(","));
  process.exit(0);
}

const body = {
  title: "Probe event",
  description: "probe description",
  location: "Room 1",
  start: "2026-03-04T09:00:00.000Z",
  end: "2026-03-04T10:00:00.000Z",
  timezone: "America/New_York",
  allDay: false,
};
const req = { json: async () => body, headers: new Map(), method: "POST" };

(async () => {
  const res = await POST(req);
  console.log("\n=== POST result:", JSON.stringify(res, null, 1));
  console.log("\n=== Ev() input keys:", evInputs.length ? JSON.stringify(evInputs[0], null, 1) : "(Ev never called)");
  console.log("\n=== pushLocalChanges (ay) args:", JSON.stringify(ayCalls, null, 1));
})();
