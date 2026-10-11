// Probe: execute ORIGINAL discover-route module (7097) and capture its response shape.
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

const { text } = M.findModuleFile(7097);
// identity middleware so the inner handler is reachable
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
class FakeAppRouteRouteModule {
  constructor(options) {
    this.userland = options && options.userland;
    // keep a module-level capture in case exports are read instead
    FakeAppRouteRouteModule.last = this;
  }
}
M.store.set(51027, new Proxy({}, {
  get: (_t, p) =>
    p === "AppRouteRouteModule"
      ? FakeAppRouteRouteModule
      : p === "RouteKind"
        ? { APP_ROUTE: "APP_ROUTE" }
        : undefined,
}));

// capture what discovery returns by wrapping the calendar-sync package's AO
const discovered = [];
try {
  const calFile = M.findModuleFile(7147);
  const cal = M.executeModule(calFile.text, 7147, ctx);
  const wrapped = Object.create(cal);
  wrapped.AO = async (creds) => {
    discovered.push(JSON.parse(JSON.stringify(creds)));
    return {
      rootUrl: "https://cal.example/",
      serverUrl: "https://cal.example/dav/",
      calendars: [{ displayName: "Work", url: "https://cal.example/dav/work/" }],
    };
  };
  M.store.set(7147, wrapped);
} catch (e) {
  console.log("calendar pkg prep failed:", e.message);
}

const exp = M.executeModule(text, 7097, ctx);
const rm = exp.routeModule || (FakeAppRouteRouteModule.last && FakeAppRouteRouteModule.last);
let POST = (rm && rm.userland && rm.userland.POST) || exp.POST;
if (typeof POST !== "function") {
  console.log("exports:", Object.keys(exp).map((k) => k + ":" + typeof exp[k]).join(","));
  if (rm) console.log("routeModule keys:", Object.getOwnPropertyNames(rm).join(","), "| userland keys:", rm.userland ? Object.keys(rm.userland).join(",") : "(none)");
  process.exit(0);
}

const body = {
  serverUrl: "https://cal.example/dav/",
  username: "alice",
  password: "secret",
  accountType: "caldav",
  allowInsecure: false,
};
(async () => {
  const res = await POST({ json: async () => body, headers: new Map(), method: "POST" });
  const described = res && typeof res === "object"
    ? { keys: Object.getOwnPropertyNames(res), json: typeof res.json === "function" ? await res.json().catch(() => "<not json>") : undefined, status: res.status, headers: res.headers }
    : res;
  console.log("=== POST result:", JSON.stringify(described, null, 1));
  console.log("=== discovery input captured:", JSON.stringify(discovered, null, 1));
})();
