Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyRouterStatePatchToTree", {
  enumerable: true,
  get: function () {
    return function e(t, r, n, i) {
      let s;
      let [c, f, d, p, h] = r;
      if (t.length === 1) {
        let e = o(r, n);
        (0, l.addRefreshMarkerToActiveParallelSegments)(e, i);
        return e;
      }
      let [y, _] = t;
      if (!(0, a.matchSegment)(y, c)) {
        return null;
      }
      if (t.length === 2) {
        s = o(f[_], n);
      } else if ((s = e((0, u.getNextFlightSegmentPath)(t), f[_], n, i)) === null) {
        return null;
      }
      let g = [t[0], {
        ...f,
        [_]: s
      }, d, p];
      if (h) {
        g[4] = true;
      }
      (0, l.addRefreshMarkerToActiveParallelSegments)(g, i);
      return g;
    };
  }
});
let n = require("./47325.js");
let u = require("./1511.js");
let a = require("./80949.js");
let l = require("./2202.js");
function o(e, t) {
  let [r, u] = e;
  let [l, i] = t;
  if (l === n.DEFAULT_SEGMENT_KEY && r !== n.DEFAULT_SEGMENT_KEY) {
    return e;
  }
  if ((0, a.matchSegment)(r, l)) {
    let t = {};
    for (let e in u) {
      if (i[e] !== undefined) {
        t[e] = o(u[e], i[e]);
      } else {
        t[e] = u[e];
      }
    }
    for (let e in i) {
      t[e] ||= i[e];
    }
    let n = [r, t];
    if (e[2]) {
      n[2] = e[2];
    }
    if (e[3]) {
      n[3] = e[3];
    }
    if (e[4]) {
      n[4] = e[4];
    }
    return n;
  }
  return t;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}