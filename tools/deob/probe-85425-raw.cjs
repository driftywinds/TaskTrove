const fs = require("fs"), path = require("path"), vm = require("vm");
const root = process.cwd();
const zod = require(require.resolve("zod", { paths: [path.join(root, "packages", "types")] }));

// Slice the ORIGINAL (non-inlined) module 85425 out of the raw chunk
const raw = fs.readFileSync("tools/deob/work/server-chunks/4934.js", "utf8");
const id = "85425";
const startRe = new RegExp(`(^|[,\\n{])\\s*${id}:\\s*\\(`, "m");
const sm = startRe.exec(raw);
if (!sm) throw new Error("module start not found");
const bodyStart = sm.index + sm[0].length;
const rest = raw.slice(bodyStart);
const nextMod = /(?:^\s{2,4}\d+: \(|[,{]\d+:\s*(?:\(|[A-Za-z_$][\w$]*\s*=>))/m.exec(rest);
const body = nextMod ? rest.slice(0, nextMod.index) : rest;
let wrapped = "(" + body.replace(/;\s*$/, ""); // body begins "a,b,c)=>{...}"
// balance: count braces/parens outside nothing (crude but tail issues are only at the end)
{
  const bal = (s) => {
    let b = 0;
    for (const ch of s) { if (ch === "{") b++; else if (ch === "}") b--; }
    return b;
  };
  while (bal(wrapped) < 0) {
    const idx = wrapped.lastIndexOf("}");
    wrapped = wrapped.slice(0, idx) + wrapped.slice(idx + 1);
  }
}
const src = wrapped;

const mk = () =>
  new Proxy(
    function Anything() {
      return mk();
    },
    {
      get(t, p) {
        if (p === "then") return undefined;
        if (typeof p === "symbol") return t[p];
        if (p === Symbol.toPrimitive) return () => "proxy";
        return mk(); // must be chain-indexable AND callable
      },
      apply: () => mk(),
      construct: () => mk(),
    },
  );
const chain = mk();
const req = (id) => (id === 92962 ? zod : chain);
req.d = (o, map) => {
  for (const k of Object.keys(map)) Object.defineProperty(o, k, { get: map[k], enumerable: true });
};
req.r = () => {};
req.n = (m) => m;

const exp = {};
const t0 = Date.now();
const mod = vm.runInNewContext(src, { console });
try {
  mod({}, exp, req);
} catch (e) {
  const m = /<anonymous>:1:(\d+)/.exec(e.stack.split("\n").find((l) => l.includes("<anonymous>")) || "");
  const pos = m ? Number(m[1]) : -1;
  console.log("LOAD ERROR:", e.message, "@", pos);
  console.log("context:", src.slice(Math.max(0, pos - 120), pos + 120));
  process.exit(1);
}
console.log("module loaded in", Date.now() - t0, "ms (rotation ran)");

const show = (label, r) =>
  console.log(label, JSON.stringify(r.success ? "VALID" : r.error.issues, null, 1));
show("1) allDay bad dates:", exp.Hz.safeParse({ title: "t", allDay: true, start: "13/99", end: "zz" }));
show("2) allDay good dates:", exp.Hz.safeParse({ title: "t", allDay: true, start: "2024-01-02", end: "2024-01-03" }));
show("3) timed bad datetimes:", exp.Hz.safeParse({ title: "t", start: "notadate", end: "alsonot" }));
show("4) timed good datetimes:", exp.Hz.safeParse({ title: "t", start: "2024-01-02T10:00:00.000Z", end: "2024-01-02T11:00:00.000Z" }));
show("5) update missing url:", exp.Kq.safeParse({ title: "t", start: "2024-01-02T10:00:00.000Z", end: "2024-01-02T11:00:00.000Z" }));
show("6) delete:", exp.ce.safeParse({ url: "https://x/y.ics" }));
show("7) create missing title:", exp.Hz.safeParse({ start: "2024-01-02T10:00:00.000Z", end: "2024-01-02T11:00:00.000Z" }));
