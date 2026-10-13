// Debug: instrument discover handler Z to find the "Cannot convert object to primitive"
// operand, and stub NextResponse (27618) so error paths don't crash the probe.
const path = require("path");
const vm = require("vm");
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
M.store.set(27618, {
  NextResponse: {
    json: (body, init) => ({ __json: body, __init: init }),
  },
});
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
    FakeAppRouteRouteModule.last = this;
  }
}
M.store.set(
  51027,
  new Proxy(
    {},
    {
      get: (_t, p) =>
        p === "AppRouteRouteModule"
          ? FakeAppRouteRouteModule
          : p === "RouteKind"
            ? { APP_ROUTE: "APP_ROUTE" }
            : undefined,
    },
  ),
);

// real 7147 with instrumented AO (defineProperty: AO is a getter on exports, a plain
// assignment to the prototype-created object is silently ignored)
const calFile = M.findModuleFile(7147);
const cal = M.executeModule(calFile.text, 7147, ctx);
const wrapped = Object.create(cal);
Object.defineProperty(wrapped, "AO", {
  value: async (creds) => {
    console.log("AO called with:", JSON.stringify(creds));
    return {
      rootUrl: "https://cal.example/",
      serverUrl: "https://cal.example/dav/",
      calendars: [{ displayName: "Work", url: "https://cal.example/dav/work/" }],
    };
  },
  enumerable: true,
});
M.store.set(7147, wrapped);

// instrument: log every decode call result used in the success path
let src = M.sliceModule(M.findModuleFile(7097).text, 7097);
src = src.replace(
  "let n=await (0,Q.AO)(m),o={};",
  'let n=await (0,Q.AO)(m),o={};console.log("Q.AO fn:",String(Q.AO).slice(0,120));console.log("DECODE k1=",JSON.stringify(c(-59,-39,-64,-36)),"k2=",JSON.stringify(b(123,130,116,131)),"k3=",JSON.stringify(c(-18,-39,-46,-70)),"vkey=",JSON.stringify(b(125,106,157,136)),"m1=",JSON.stringify(b(153,151,141,164)),"m2=",JSON.stringify(b(166,145,147,170)),"m3=",JSON.stringify(b(136,129,147,151)),"mkey=",JSON.stringify(c(-31,-77,-46,-72)));',
);
const exp = {};
const mod = vm.runInNewContext(src, ctx);
const req = (id) => {
  if (id === 55511) return require("node:crypto");
  if (id === 44708) return require("node:https");
  if (M.store.has(id)) {
    if (id === 7147) console.log("req(7147) -> store, AO is mine:", M.store.get(7147).AO === wrapped.AO);
    return M.store.get(id);
  }
  try {
    const r = M.loadModule(id);
    console.log("req(" + id + ") -> lazy load OK");
    return r;
  } catch (e) {
    console.log("req(" + id + ") -> PROXY (load failed: " + e.message + ")");
    return M.mk();
  }
};
req.d = (o, map) => {
  for (const k of Object.keys(map)) Object.defineProperty(o, k, { get: map[k], enumerable: true });
};
req.r = () => {};
req.n = (m) => () => (m && m.__esModule ? m.default : m);
const modObj = {};
mod(modObj, exp, req);

let POST =
  (FakeAppRouteRouteModule.last && FakeAppRouteRouteModule.last.userland && FakeAppRouteRouteModule.last.userland.POST) ||
  exp.POST;

const body = {
  serverUrl: "https://cal.example/dav/",
  username: "alice",
  password: "secret",
  accountType: "caldav",
  allowInsecure: false,
};
(async () => {
  try {
    const res = await POST({ json: async () => body, headers: new Map(), method: "POST" });
    console.log("=== POST result:", JSON.stringify(res, null, 1));
  } catch (e) {
    console.log("=== POST threw:", e.message);
    console.log(e.stack);
  }
})();
