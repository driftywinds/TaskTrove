Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  DOC_PREFETCH_RANGE_HEADER_VALUE: function () {
    return a;
  },
  doesExportedHtmlMatchBuildId: function () {
    return i;
  },
  insertBuildIdComment: function () {
    return o;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let u = "<!DOCTYPE html>";
let a = "bytes=0-63";
function l(e) {
  return e.slice(0, 24).replace(/-/g, "_");
}
function o(e, t) {
  if (t.includes("-->") || !e.startsWith(u)) {
    return e;
  } else {
    return e.replace(u, u + "<!--" + l(t) + "-->");
  }
}
function i(e, t) {
  return e.startsWith(u + "<!--" + l(t) + "-->");
}