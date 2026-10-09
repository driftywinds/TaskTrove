Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  fillCacheWithNewSubTreeData: function () {
    return c;
  },
  fillCacheWithNewSubTreeDataButOnlyLoading: function () {
    return f;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./83442.js");
let l = require("./3696.js");
let o = require("./1859.js");
let i = require("./47325.js");
function s(e, t, r, n, u) {
  let {
    segmentPath: s,
    seedData: c,
    tree: f,
    head: d
  } = n;
  let p = t;
  let h = r;
  for (let t = 0; t < s.length; t += 2) {
    let r = s[t];
    let n = s[t + 1];
    let y = t === s.length - 2;
    let _ = (0, o.createRouterCacheKey)(n);
    let g = h.parallelRoutes.get(r);
    if (!g) {
      continue;
    }
    let v = p.parallelRoutes.get(r);
    if (!v || v === g) {
      v = new Map(g);
      p.parallelRoutes.set(r, v);
    }
    let b = g.get(_);
    let m = v.get(_);
    if (y) {
      if (c && (!m || !m.lazyData || m === b)) {
        let t = c[0];
        let r = c[2];
        m = {
          lazyData: null,
          rsc: u || n !== i.PAGE_SEGMENT_KEY ? t : null,
          prefetchRsc: null,
          head: null,
          prefetchHead: null,
          loading: r,
          parallelRoutes: u && b ? new Map(b.parallelRoutes) : new Map(),
          navigatedAt: e
        };
        if (b && u) {
          (0, a.invalidateCacheByRouterState)(m, b, f);
        }
        if (u) {
          (0, l.fillLazyItemsTillLeafWithHead)(e, m, b, f, c, d);
        }
        v.set(_, m);
      }
      continue;
    }
    if (m && b) {
      if (m === b) {
        m = {
          lazyData: m.lazyData,
          rsc: m.rsc,
          prefetchRsc: m.prefetchRsc,
          head: m.head,
          prefetchHead: m.prefetchHead,
          parallelRoutes: new Map(m.parallelRoutes),
          loading: m.loading
        };
        v.set(_, m);
      }
      p = m;
      h = b;
    }
  }
}
function c(e, t, r, n) {
  s(e, t, r, n, true);
}
function f(e, t, r, n) {
  s(e, t, r, n, false);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}