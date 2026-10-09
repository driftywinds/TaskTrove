Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  normalizeAppPath: function () {
    return o;
  },
  normalizeRscURL: function () {
    return i;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./98627.js");
let l = require("./47325.js");
function o(e) {
  return (0, a.ensureLeadingSlash)(e.split("/").reduce((e, t, r, n) => !t || (0, l.isGroupSegment)(t) || t[0] === "@" || (t === "page" || t === "route") && r === n.length - 1 ? e : `${e}/${t}`, ""));
}
function i(e) {
  return e.replace(/\.rsc($|\?)/, "$1");
}