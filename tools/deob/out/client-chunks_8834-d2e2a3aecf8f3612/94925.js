Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "restoreReducer", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./12877.js");
let u = require("./29568.js");
function a(e, t) {
  let r;
  let a;
  let {
    url: l,
    historyState: o
  } = t;
  let i = (0, n.createHrefFromUrl)(l);
  if (o) {
    r = o.tree;
    a = o.renderedSearch;
  } else {
    r = e.tree;
    a = e.renderedSearch;
  }
  let s = e.cache;
  return {
    canonicalUrl: i,
    renderedSearch: a,
    pushRef: {
      pendingPush: false,
      mpaNavigation: false,
      preserveCustomHistoryState: true
    },
    focusAndScrollRef: e.focusAndScrollRef,
    cache: s,
    tree: r,
    nextUrl: (0, u.extractPathFromFlightRouterState)(r) ?? l.pathname,
    previousNextUrl: null,
    debugInfo: null
  };
}
require("./46664.js");
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}