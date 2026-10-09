Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  normalizeAppPath: function () {
    return s;
  },
  normalizeRscURL: function () {
    return u;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./81392.js");
let i = require("./29796.js");
function s(e) {
  return (0, o.ensureLeadingSlash)(e.split("/").reduce((e, t, r, n) => !t || (0, i.isGroupSegment)(t) || t[0] === "@" || (t === "page" || t === "route") && r === n.length - 1 ? e : `${e}/${t}`, ""));
}
function u(e) {
  return e.replace(/\.rsc($|\?)/, "$1");
}