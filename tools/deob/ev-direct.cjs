const { findModuleFile, executeModule, sliceModule } = require("./exec-raw-module.cjs");
const ctx = { console, Buffer, process, URL, URLSearchParams, TextEncoder, TextDecoder, setTimeout, clearTimeout, crypto: require("node:crypto").webcrypto };
const src = sliceModule(findModuleFile(7147).text, 7147);
const exp = executeModule(findModuleFile(7147).text, 7147, ctx);
try {
  const out = exp.Ev({
    summary: "T",
    description: "d",
    location: "L",
    start: "2026-01-15T10:00:00.000Z",
    end: "2026-01-15T11:00:00.000Z",
    uid: "u-1",
    timezone: "UTC",
    allDay: false,
  });
  console.log("Ev OK:\n" + out);
} catch (e) {
  console.log("ERR:", e.message);
  const m = /<anonymous>:(\d+):(\d+)/.exec((e.stack || "").split("\n").find((l) => l.includes("<anonymous>")) || "");
  if (m) {
    const lines = src.split("\n");
    const line = lines[Number(m[1]) - 1] || "";
    console.log("at", m[1] + ":" + m[2], "of", lines.length, "line(s)");
    console.log("SRC:", JSON.stringify(line.slice(Math.max(0, Number(m[2]) - 300), Number(m[2]) + 200)));
  }
}
