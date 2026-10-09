Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getRouteMatcher", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./58492.js");
let a = require("./93666.js");
function o({
  re: e,
  groups: t
}) {
  return (0, a.safeRouteMatcher)(r => {
    let a = e.exec(r);
    if (!a) {
      return false;
    }
    let o = e => {
      try {
        return decodeURIComponent(e);
      } catch {
        throw Object.defineProperty(new n.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
          value: "E528",
          enumerable: false,
          configurable: true
        });
      }
    };
    let i = {};
    for (let [e, r] of Object.entries(t)) {
      let t = a[r.pos];
      if (t !== undefined) {
        if (r.repeat) {
          i[e] = t.split("/").map(e => o(e));
        } else {
          i[e] = o(t);
        }
      }
    }
    return i;
  });
}