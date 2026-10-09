Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  addRefreshMarkerToActiveParallelSegments: function () {
    return function e(t, r) {
      let [n, u,, a] = t;
      if (n.includes(o.PAGE_SEGMENT_KEY) && a !== "refresh") {
        t[2] = r;
        t[3] = "refresh";
      }
      for (let l in u) {
        e(u[l], r);
      }
    };
  },
  refreshInactiveParallelSegments: function () {
    return i;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./25548.js");
let l = require("./36124.js");
let o = require("./47325.js");
async function i(e) {
  let t = new Set();
  await s({
    ...e,
    rootTree: e.updatedTree,
    fetchedSegments: t
  });
}
async function s({
  navigatedAt: e,
  state: t,
  updatedTree: r,
  updatedCache: n,
  includeNextUrl: u,
  fetchedSegments: o,
  rootTree: i = r,
  canonicalUrl: c
}) {
  let [, f, d, p] = r;
  let h = [];
  if (d && d !== c && p === "refresh" && !o.has(d)) {
    o.add(d);
    let r = (0, l.fetchServerResponse)(new URL(d, location.origin), {
      flightRouterState: [i[0], i[1], i[2], "refetch"],
      nextUrl: u ? t.nextUrl : null
    }).then(t => {
      if (typeof t != "string") {
        let {
          flightData: r
        } = t;
        for (let t of r) {
          (0, a.applyFlightData)(e, n, n, t);
        }
      }
    });
    h.push(r);
  }
  for (let r in f) {
    let a = s({
      navigatedAt: e,
      state: t,
      updatedTree: f[r],
      updatedCache: n,
      includeNextUrl: u,
      fetchedSegments: o,
      rootTree: i,
      canonicalUrl: c
    });
    h.push(a);
  }
  await Promise.all(h);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}