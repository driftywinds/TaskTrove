Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", {
  enumerable: true,
  get: function () {
    return function e(t, r, u, a, l, o) {
      if (Object.keys(a[1]).length === 0) {
        r.head = o;
        return;
      }
      for (let i in a[1]) {
        let s;
        let c = a[1][i];
        let f = c[0];
        let d = (0, n.createRouterCacheKey)(f);
        let p = l !== null && l[1][i] !== undefined ? l[1][i] : null;
        if (u) {
          let n = u.parallelRoutes.get(i);
          if (n) {
            let u;
            let a = new Map(n);
            let l = a.get(d);
            u = p !== null ? {
              lazyData: null,
              rsc: p[0],
              prefetchRsc: null,
              head: null,
              prefetchHead: null,
              loading: p[2],
              parallelRoutes: new Map(l?.parallelRoutes),
              navigatedAt: t
            } : {
              lazyData: null,
              rsc: null,
              prefetchRsc: null,
              head: null,
              prefetchHead: null,
              parallelRoutes: new Map(l?.parallelRoutes),
              loading: null,
              navigatedAt: t
            };
            a.set(d, u);
            e(t, u, l, c, p || null, o);
            r.parallelRoutes.set(i, a);
            continue;
          }
        }
        if (p !== null) {
          let e = p[0];
          let r = p[2];
          s = {
            lazyData: null,
            rsc: e,
            prefetchRsc: null,
            head: null,
            prefetchHead: null,
            parallelRoutes: new Map(),
            loading: r,
            navigatedAt: t
          };
        } else {
          s = {
            lazyData: null,
            rsc: null,
            prefetchRsc: null,
            head: null,
            prefetchHead: null,
            parallelRoutes: new Map(),
            loading: null,
            navigatedAt: t
          };
        }
        let h = r.parallelRoutes.get(i);
        if (h) {
          h.set(d, s);
        } else {
          r.parallelRoutes.set(i, new Map([[d, s]]));
        }
        e(t, s, undefined, c, p, o);
      }
    };
  }
});
let n = require("./1859.js");
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}