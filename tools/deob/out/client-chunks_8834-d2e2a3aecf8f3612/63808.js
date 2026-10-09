Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "refreshReducer", {
  enumerable: true,
  get: function () {
    return y;
  }
});
let n = require("./36124.js");
let u = require("./12877.js");
let a = require("./62240.js");
let l = require("./77464.js");
let o = require("./88552.js");
let i = require("./78421.js");
let s = require("./3696.js");
let c = require("./78580.js");
let f = require("./78901.js");
let d = require("./42190.js");
let p = require("./2202.js");
let h = require("./70426.js");
function y(e, t) {
  let {
    origin: r
  } = t;
  let y = {};
  let _ = e.canonicalUrl;
  let g = e.tree;
  y.preserveCustomHistoryState = false;
  let v = (0, c.createEmptyCacheNode)();
  let b = (0, d.hasInterceptionRouteInCurrentTree)(e.tree);
  v.lazyData = (0, n.fetchServerResponse)(new URL(_, r), {
    flightRouterState: [g[0], g[1], g[2], "refetch"],
    nextUrl: b ? e.nextUrl : null
  });
  let m = Date.now();
  return v.lazyData.then(async r => {
    if (typeof r == "string") {
      return (0, o.handleExternalUrl)(e, y, r, e.pushRef.pendingPush);
    }
    let {
      flightData: n,
      canonicalUrl: c,
      renderedSearch: d
    } = r;
    v.lazyData = null;
    for (let r of n) {
      let {
        tree: n,
        seedData: i,
        head: R,
        isRootRender: E
      } = r;
      if (!E) {
        console.log("REFRESH FAILED");
        return e;
      }
      let P = (0, a.applyRouterStatePatchToTree)([""], g, n, e.canonicalUrl);
      if (P === null) {
        return (0, f.handleSegmentMismatch)(e, t, n);
      }
      if ((0, l.isNavigatingToNewRootLayout)(g, P)) {
        return (0, o.handleExternalUrl)(e, y, _, e.pushRef.pendingPush);
      }
      y.canonicalUrl = (0, u.createHrefFromUrl)(c);
      if (i !== null) {
        let t = i[0];
        let r = i[2];
        v.rsc = t;
        v.prefetchRsc = null;
        v.loading = r;
        (0, s.fillLazyItemsTillLeafWithHead)(m, v, undefined, n, i, R);
        (0, h.revalidateEntireCache)(e.nextUrl, P);
      }
      await (0, p.refreshInactiveParallelSegments)({
        navigatedAt: m,
        state: e,
        updatedTree: P,
        updatedCache: v,
        includeNextUrl: b,
        canonicalUrl: y.canonicalUrl || e.canonicalUrl
      });
      y.cache = v;
      y.patchedTree = P;
      y.renderedSearch = d;
      g = P;
    }
    return (0, i.handleMutable)(e, y);
  }, () => e);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}