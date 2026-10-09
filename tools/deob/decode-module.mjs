// Reusable decoder for webcrack output of javascript-obfuscator bundles.
//
// Usage: node decode-module.mjs <deobfuscated.js> <moduleId> [outFile]
//
// For every string-array decoder family in the target webpack module
// (rotation IIFE + index-offset decoder + named aliases), solves the rotation
// via the checksum expression and inlines all decoder calls as string
// literals. Output: <outFile> (default <file>__<moduleId>.decoded.js).
import { readFileSync, writeFileSync } from "node:fs"
import vm from "node:vm"

const [file, moduleId, outFile] = process.argv.slice(2)
if (!file || !moduleId) {
  console.error("usage: node decode-module.mjs <file> <moduleId> [outFile]")
  process.exit(1)
}

const src = readFileSync(file, "utf8")

// --- isolate module source -------------------------------------------------
const modStartRe = new RegExp(`(^|\\n)\\s*${moduleId}: \\(`, "m")
const startMatch = modStartRe.exec(src)
if (!startMatch) {
  console.error(`module ${moduleId} not found`)
  process.exit(1)
}
const bodyStart = startMatch.index + startMatch[0].length
const rest = src.slice(bodyStart)
const nextMod = /^ {2,4}\d+: \(/m.exec(rest)
let modSource = nextMod ? rest.slice(0, nextMod.index) : rest

// --- helpers ---------------------------------------------------------------
function extractFunction(source, name) {
  const fnStart = source.indexOf(`function ${name}()`)
  if (fnStart === -1) return null
  const openIdx = source.indexOf("{", fnStart)
  let depth = 0
  let inStr = null
  for (let i = openIdx; i < source.length; i++) {
    const ch = source[i]
    if (inStr) {
      if (ch === "\\") {
        i++
        continue
      }
      if (ch === inStr) inStr = null
      continue
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = ch
      continue
    }
    if (ch === "{") depth++
    else if (ch === "}") {
      depth--
      if (depth === 0) return source.slice(fnStart, i + 1)
    }
  }
  return null
}

const rotRe =
  /if \(([-+]?parseInt\([\s\S]*?)\) \{\s*break;\s*\}\s*c\.push\(c\.shift\(\)\);\s*\} catch \(a\) \{\s*c\.push\(c\.shift\(\)\);\s*\}\s*\}\s*\}\s*\)\((\w+), 0\);/g

let familiesSolved = 0

for (const rotMatch of modSource.matchAll(rotRe)) {
  const checksumExpr = rotMatch[1]
  const arrayName = rotMatch[2]
  const targetMatch = /=== (-?\d+)/.exec(checksumExpr)
  if (!targetMatch) continue
  const checksumTarget = Number(targetMatch[1])
  // evaluate just the LHS of the comparison
  const lhsExpr = checksumExpr.replace(/\s*=== -?\d+\s*$/, "")

  const calledNames = [...new Set([...checksumExpr.matchAll(/(\w+)\(/g)].map((x) => x[1]))]
  let decMatch = null
  let decoderName = null
  for (const name of calledNames) {
    const cand = new RegExp(
      String.raw`function ${name}\(a, b\) \{\s*let c = (\w+)\(\);\s*return \(${name} = function \(a, b\) \{\s*return c\[a -= (\d+)\];`,
    ).exec(modSource)
    if (cand) {
      decMatch = cand
      decoderName = name
      break
    }
  }
  if (!decMatch) continue
  const offset = Number(decMatch[2])

  const aliasRe = new RegExp(
    `function (\\w+)\\(([^)]*)\\) \\{\\s*return ${decoderName}\\(([^;]+)\\);\\s*\\}`,
    "g",
  )
  const aliases = []
  let am
  while ((am = aliasRe.exec(modSource)) !== null) {
    aliases.push({ name: am[1], params: am[2], expr: am[3] })
  }

  const arrayFnSource = extractFunction(modSource, arrayName)
  if (!arrayFnSource) {
    console.error(`  family ${decoderName}: array fn ${arrayName} not found, skipping`)
    continue
  }

  function tryRotation(rotateCount) {
    const sandbox = {}
    vm.createContext(sandbox)
    vm.runInContext(
      arrayFnSource.replace(
        /return \(\w+ = function \(\) \{\s*return a;\s*\}\)\(\)/,
        `return (${arrayName}_raw = function () { return a; })()`,
      ) +
        `\n${arrayName}();
         function ${decoderName}(a, b) {
           let c = ${arrayName}_raw();
           return (${decoderName} = function (a, b) { return c[a -= ${offset}]; })(a, b);
         }`,
      sandbox,
    )
    const raw = sandbox[`${arrayName}_raw`]()
    for (let i = 0; i < rotateCount; i++) raw.push(raw.shift())
    for (const alias of aliases) {
      vm.runInContext(`function ${alias.name}(${alias.params}) { return ${alias.expr}; }`, sandbox)
    }
    return sandbox
  }

  const probe = tryRotation(0)
  const arrayLen = vm.runInContext(`${arrayName}_raw().length`, probe)

  let sandbox = null
  for (let r = 0; r < arrayLen; r++) {
    const candidate = tryRotation(r)
    try {
      const value = vm.runInContext(lhsExpr, candidate)
      if (value === checksumTarget) {
        sandbox = candidate
        break
      }
    } catch {
      /* keep trying */
    }
  }
  if (!sandbox) {
    console.error(`  family ${decoderName}: rotation unsolved, skipping`)
    continue
  }
  // checksum eval may clobber globals named in its sequence assignments —
  // re-declare decoder + aliases against the (already rotated) array
  vm.runInContext(
    `function ${decoderName}(a, b) {
       let c = ${arrayName}_raw();
       return (${decoderName} = function (a, b) { return c[a -= ${offset}]; })(a, b);
     }` +
      aliases.map((a) => `\nfunction ${a.name}(${a.params}) { return ${a.expr}; }`).join(""),
    sandbox,
  )
  console.error(
    `  family ${decoderName} (array ${arrayName}, offset ${offset}, ${aliases.length} aliases): rotation solved`,
  )
  familiesSolved++

  // --- rewrite decoder calls in current text --------------------------------
  let changed = true
  let pass = 0
  while (changed && pass < 10) {
    changed = false
    pass++
    // wrapper IIFEs: function (a, b, c, d) { return bW(EXPR); }(1, 2, 3, 4)
    modSource = modSource.replace(
      /function \(([^)]*)\) \{\s*return (\w+\([^;]*?\));\s*\}\s*\(([-\d,\s]+)\)/g,
      (full, params, expr, args) => {
        try {
          const fn = vm.runInContext(`(function (${params}) { return ${expr}; })`, sandbox)
          const parsedArgs = args.split(",").map((s) => Number(s.trim()))
          const value = fn(...parsedArgs)
          if (typeof value === "string") {
            changed = true
            return JSON.stringify(value)
          }
        } catch {
          /* leave as-is */
        }
        return full
      },
    )
    // direct decoder/alias calls with all-numeric args
    const names = [decoderName, ...aliases.map((a) => a.name)]
    for (const name of names) {
      const re = new RegExp(String.raw`\b${name}\(([-\d\s,]+)\)`, "g")
      modSource = modSource.replace(re, (full, argStr) => {
        if (!/^[-\d\s,]+$/.test(argStr)) return full
        try {
          const value = vm.runInContext(`${name}(${argStr})`, sandbox)
          if (typeof value === "string") {
            changed = true
            return JSON.stringify(value)
          }
        } catch {
          /* leave as-is */
        }
        return full
      })
    }
  }
}

if (familiesSolved === 0) {
  console.error("no decoder families solved")
  process.exit(1)
}

const dest = outFile || file.replace(/\.js$/, `__${moduleId}.decoded.js`)
writeFileSync(dest, modSource)
console.error(`decoded module ${moduleId} (${familiesSolved} families) -> ${dest}`)
