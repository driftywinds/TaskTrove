const M = require("./exec-raw-module.cjs");
const src = M.sliceModule(M.findModuleFile(5876).text, 5876);
const imports = [];
for (const m of src.matchAll(/(?:var|,)\s*([A-Za-z_$][\w$]*)\s*=\s*c\((\d+)\)/g)) imports.push([m[2], m[1]]);
console.log("imports (id=localVar):");
for (const [id, v] of imports) console.log("  " + id + " = " + v);
console.log("\ntotal:", imports.length);
// what is used off the runtime module?
for (const m of src.matchAll(/\baD\.(\w+)/g)) console.log("aD." + m[1]);
