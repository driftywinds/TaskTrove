Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "serverPatchReducer", {
  enumerable: true,
  get: function () {
    return c;
  }
});
let n = require("./12877.js");
let u = require("./62240.js");
let a = require("./77464.js");
let l = require("./88552.js");
let o = require("./25548.js");
let i = require("./78421.js");
let s = require("./78580.js");
function c(e, t) {
  let {
    serverResponse: r,
    navigatedAt: c
  } = t;
  let f = {
    preserveCustomHistoryState: false
  };
  if (typeof r == "string") {
    return (0, l.handleExternalUrl)(e, f, r, e.pushRef.pendingPush);
  }
  let {
    flightData: d,
    canonicalUrl: p,
    renderedSearch: h
  } = r;
  let y = e.tree;
  let _ = e.cache;
  for (let t of d) {
    let {
      segmentPath: r,
      tree: i
    } = t;
    let d = (0, u.applyRouterStatePatchToTree)(["", ...r], y, i, e.canonicalUrl);
    if (d === null) {
      return e;
    }
    if ((0, a.isNavigatingToNewRootLayout)(y, d)) {
      return (0, l.handleExternalUrl)(e, f, e.canonicalUrl, e.pushRef.pendingPush);
    }
    f.canonicalUrl = (0, n.createHrefFromUrl)(p);
    let g = (0, s.createEmptyCacheNode)();
    (0, o.applyFlightData)(c, _, g, t);
    f.patchedTree = d;
    f.renderedSearch = h;
    f.cache = g;
    _ = g;
    y = d;
  }
  return (0, i.handleMutable)(e, f);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}