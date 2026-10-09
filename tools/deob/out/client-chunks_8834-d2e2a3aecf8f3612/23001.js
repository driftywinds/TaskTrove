Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require("./12877.js");
let u = require("./3696.js");
let a = require("./29568.js");
let l = require("./2202.js");
let o = require("./1511.js");
function i({
  navigatedAt: e,
  initialFlightData: t,
  initialCanonicalUrlParts: r,
  initialRenderedSearch: i,
  initialParallelRoutes: s,
  location: c
}) {
  let f = r.join("/");
  let {
    tree: d,
    seedData: p,
    head: h
  } = (0, o.getFlightDataPartsFromPath)(t[0]);
  let y = {
    lazyData: null,
    rsc: p?.[0],
    prefetchRsc: null,
    head: null,
    prefetchHead: null,
    parallelRoutes: s,
    loading: p?.[2] ?? null,
    navigatedAt: e
  };
  let _ = c ? (0, n.createHrefFromUrl)(c) : f;
  (0, l.addRefreshMarkerToActiveParallelSegments)(d, _);
  if (s === null || s.size === 0) {
    (0, u.fillLazyItemsTillLeafWithHead)(e, y, undefined, d, p, h);
  }
  return {
    tree: d,
    cache: y,
    pushRef: {
      pendingPush: false,
      mpaNavigation: false,
      preserveCustomHistoryState: true
    },
    focusAndScrollRef: {
      apply: false,
      onlyHashChange: false,
      hashFragment: null,
      segmentPaths: []
    },
    canonicalUrl: _,
    renderedSearch: i,
    nextUrl: ((0, a.extractPathFromFlightRouterState)(d) || c?.pathname) ?? null,
    previousNextUrl: null,
    debugInfo: null
  };
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}