// Execute ORIGINAL (raw) obfuscated webpack modules in a vm for contract verification.
// - Slices the module out of a chunk (or finds it across all work chunks by id)
// - Shared require: chainable proxies by default; native/zod hooks; lazy sibling-module
//   loading from the extracted chunks (memoized), so intra-image imports behave for real.
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const WORK = path.join(ROOT, "tools", "deob", "work");

// chainable proxy: indexable AND callable, not thenable
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
        return mk();
      },
      apply: () => mk(),
      construct: () => mk(),
    },
  );

const store = new Map(); // id -> exports object
const requested = [];
const natives = new Map([
  [55511, () => require("node:crypto")],
  [77598, () => require("node:crypto")],
  [55591, () => require("node:https")],
  [44708, () => require("node:https")],
]);

function makeRequire(sourceDesc) {
  const req = (id) => {
    requested.push(id);
    if (natives.has(id)) return natives.get(id)();
    if (store.has(id)) return store.get(id);
    // lazy-load sibling module from extracted chunks
    try {
      return loadModule(id);
    } catch {
      return mk();
    }
  };
  req.d = (o, map) => {
    for (const k of Object.keys(map)) Object.defineProperty(o, k, { get: map[k], enumerable: true });
  };
  req.r = () => {};
  // webpack's __webpack_require__.n: returns a THUNK — `n(mod)()` unwraps
  // (default for ESM, module itself for CJS), never the raw object.
  req.n = (m) => () => (m && m.__esModule ? m.default : m);
  return req;
}

function sliceModule(text, id) {
  const startRe = new RegExp(`(^|[,\\n{])\\s*${id}:\\s*(\\(|function|[A-Za-z_$][\\w$]*\\s*=>)`, "m");
  const sm = startRe.exec(text);
  if (!sm) throw new Error(`module ${id} start not found`);
  const head = sm[2]; // "(" for arrow modules, "function" for legacy ones
  const rest = text.slice(sm.index + sm[0].length);
  const nextMod = /(?:^\s{2,4}\d+: \(|[,{]\d+:\s*(?:\(|[A-Za-z_$][\w$]*\s*=>|function))/m.exec(rest);
  if (process.env.DEBUG_SLICE && nextMod) {
    console.error("BOUNDARY @", nextMod.index, JSON.stringify(rest.slice(Math.max(0, nextMod.index - 80), nextMod.index + 80)));
  }
  let body;
  if (nextMod) {
    body = rest.slice(0, nextMod.index);
  } else {
    // last module in file: cut before the webpack runtime tail
    const rt = /;var b=require\(|;module\.exports=|;var b=/.exec(rest);
    body = rt ? rest.slice(0, rt.index) : rest;
  }
  body = body.replace(/;\s*$/, "");
  // brace balance only — parens/brackets are unreliable (they occur inside string
  // literals such as "(((.+)+)+)"). Strip trailing excess closers (e.g. the
  // exports.modules map closer when the module is the last in the chunk).
  const opens = (s) => s.split("{").length - 1;
  const closes = (s) => s.split("}").length - 1;
  let guard = 0;
  while (closes(body) > opens(body) && guard++ < 50 && body.endsWith("}")) body = body.slice(0, -1);
  if (closes(body) !== opens(body)) throw new Error(`unbalanced braces for module ${id}: ${opens(body)}/${closes(body)}`);
  if (process.env.DEBUG_SLICE) {
    console.error("BODY tail:", JSON.stringify(body.slice(-60)));
  }
  const expr =
    head === "function"
      ? `function${body}`
      : head.endsWith("=>")
        ? `${head}${body}` // named arrow: head = "a=>", body = "{...}"
        : body.startsWith("(")
          ? body
          : `(${body}`; // paren arrow: body = "a,b,c)=>{...}"
  return `(${expr})`;
}

const chunkCache = new Map(); // file -> text
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".js")) out.push(p);
  }
  return out;
}
function findModuleFile(id) {
  if (chunkCache.size === 0) {
    for (const f of walk(WORK)) {
      try {
        chunkCache.set(f, fs.readFileSync(f, "utf8"));
      } catch {}
    }
  }
  for (const [file, text] of chunkCache) {
    if (text.includes(`,${id}:`) || text.includes(`{${id}:`)) return { file, text };
  }
  throw new Error(`module ${id} not found in any chunk`);
}

let activeCtx = { console };
function setContext(ctx) {
  activeCtx = ctx;
}

function executeModule(text, id, ctx = null) {
  const src = sliceModule(text, id);
  const exp = {};
  const useCtx = ctx || activeCtx;
  const mod = vm.runInNewContext(src, useCtx);
  if (ctx) activeCtx = ctx;
  const req = makeRequire();
  const modObj = {};
  try {
    mod(modObj, exp, req);
  } catch (e) {
    const pos = Number((/:(\d+):/.exec((e.stack || "").split("\n").find((l) => l.includes("<native>")) || (e.stack || "").split("\n").find((l) => l.includes("<anonymous>")) || "") || [])[1]);
    const err = new Error(`load failed for ${id}: ${e.message}`);
    err.context = Number.isFinite(pos) ? src.slice(Math.max(0, pos - 150), pos + 150) : "";
    err.cause = e;
    throw err;
  }
  // CJS-style modules reassign module.exports — carry it over (incl. non-enumerable
  // props: Object.defineProperty(g, "runes", {value}) style exports are common)
  if (modObj.exports && modObj.exports !== exp) {
    for (const k of Object.getOwnPropertyNames(modObj.exports)) {
      if (!(k in exp)) {
        Object.defineProperty(exp, k, Object.getOwnPropertyDescriptor(modObj.exports, k));
      }
    }
  }
  store.set(id, exp);
  return exp;
}

function loadModule(id) {
  if (store.has(id)) return store.get(id);
  const { text } = findModuleFile(id);
  return executeModule(text, id);
}

module.exports = { mk, store, natives, requested, sliceModule, executeModule, loadModule, findModuleFile };
