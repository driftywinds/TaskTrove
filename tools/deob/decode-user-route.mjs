import { readFileSync, writeFileSync } from "node:fs"
import vm from "node:vm"

// Finish-decode module 50278 (user route): decoder aH(a,b)=as[a-199]; aliases i,k,m,x,v,w,g,s
const src = readFileSync("tools/deob/out/routes_app_api_v1_user_route/deobfuscated.js", "utf8")
const re = /(^|\n)\s*50278: \(/m
const m = re.exec(src)
const rest = src.slice(m.index + m[0].length)
const nm = /^ {2,4}\d+: \(/m.exec(rest)
let mod = nm ? rest.slice(0, nm.index) : rest

function extractFunction(source, name) {
  const fnStart = source.indexOf(`function ${name}()`)
  const openIdx = source.indexOf("{", fnStart)
  let depth = 0
  let inStr = null
  for (let i = openIdx; i < source.length; i++) {
    const ch = source[i]
    if (inStr) { if (ch === "\\") { i++; continue } if (ch === inStr) inStr = null; continue }
    if (ch === '"' || ch === "'" || ch === "`") { inStr = ch; continue }
    if (ch === "{") depth++
    else if (ch === "}") { depth--; if (depth === 0) return source.slice(fnStart, i + 1) }
  }
  return null
}
const arrSrc = extractFunction(mod, "as")
const checksumExpr = `parseInt(aH(312, 1243)) / 1 * (-parseInt(aH(308, 1175)) / 2) + parseInt(aH(335, 1212)) / 3 * (parseInt(aH(262, 1244)) / 4) + parseInt(aH(239, 1145)) / 5 + parseInt(aH(206, 288)) / 6 + -parseInt(aH(366, 1239)) / 7 + -parseInt(aH(383, 503)) / 8 + -parseInt(aH(242, 1171)) / 9 * (-parseInt(aH(261, 1243)) / 10)`

const aliases = [
  "function i(a, b, c, d) { return aH(d - 729, a); }",
  "function k(a, b, c, d) { return aH(d - 272, b); }",
  "function m(a, b, c, d) { return aH(c - -402 - -551, d); }",
  "function x(a, b, c, d) { return aH(d - -305 - 987, c); }",
  "function v(a, b, c, d) { return aH(c - 1246 - -551, a); }",
  "function w(a, b, c, d) { return aH(b - 836 - -551, d); }",
  "function g(a, b, c, d) { return aH(d - 753 - -551, b); }",
  "function s(a, b, c, d) { return aH(b - -1344 - 987, a); }",
]

function makeSandbox(rotate) {
  const sandbox = {}
  vm.createContext(sandbox)
  vm.runInContext(
    arrSrc.replace(/return \(as = function \(\) \{\s*return a;\s*\}\)\(\)/, "return (as_raw = function () { return a; })()") +
      "\nas();" +
      "\nfunction aH(a, b) { let c = as_raw(); return (aH = function (a, b) { return c[a -= 199]; })(a, b); }" +
      "\n" + aliases.join("\n"),
    sandbox,
  )
  const raw = sandbox.as_raw()
  for (let i = 0; i < rotate; i++) raw.push(raw.shift())
  return sandbox
}

let sandbox = null
for (let r = 0; r < 200; r++) {
  const candidate = makeSandbox(r)
  try {
    if (vm.runInContext(checksumExpr, candidate) === 635102) {
      sandbox = candidate
      console.log("rotation:", r)
      break
    }
  } catch (e) {
    if (r === 0) console.error("eval error:", e.message)
  }
}
if (!sandbox) { console.log("NOT solved"); process.exit(1) }

let changed = true
let pass = 0
while (changed && pass < 10) {
  changed = false
  pass++
  for (const name of ["aH", "i", "k", "m", "x", "v", "w", "g", "s"]) {
    const rx = new RegExp(String.raw`\b${name}\(([-\d\s,]+)\)`, "g")
    mod = mod.replace(rx, (full, argStr) => {
      if (!/^[-\d\s,]+$/.test(argStr)) return full
      try {
        const value = vm.runInContext(`${name}(${argStr})`, sandbox)
        if (typeof value === "string") { changed = true; return JSON.stringify(value) }
      } catch { /* leave */ }
      return full
    })
  }
}
writeFileSync("tools/deob/out/routes_app_api_v1_user_route/decoded-50278.js", mod)
console.log("written, passes:", pass)
