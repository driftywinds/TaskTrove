Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  DYNAMIC_STALETIME_MS: function () {
    return c;
  },
  STATIC_STALETIME_MS: function () {
    return f;
  },
  generateSegmentsFromPatch: function () {
    return function e(t) {
      let r = [];
      let [n, u] = t;
      if (Object.keys(u).length === 0) {
        return [[n]];
      }
      for (let [t, a] of Object.entries(u)) {
        for (let u of e(a)) {
          if (n === "") {
            r.push([t, ...u]);
          } else {
            r.push([n, t, ...u]);
          }
        }
      }
      return r;
    };
  },
  handleExternalUrl: function () {
    return d;
  },
  navigateReducer: function () {
    return p;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./12877.js");
let l = require("./78421.js");
let o = require("./41250.js");
let i = require("./35485.js");
let s = require("./70426.js");
let c = Number("0") * 1000;
let f = (0, s.getStaleTimeMs)(Number("300"));
function d(e, t, r, n) {
  t.mpaNavigation = true;
  t.canonicalUrl = r;
  t.pendingPush = n;
  t.scrollableSegments = undefined;
  return (0, l.handleMutable)(e, t);
}
function p(e, t) {
  let {
    url: r,
    isExternalUrl: n,
    navigateType: u,
    shouldScroll: s
  } = t;
  let c = {};
  let f = (0, a.createHrefFromUrl)(r);
  let p = u === "push";
  c.preserveCustomHistoryState = false;
  c.pendingPush = p;
  if (n) {
    return d(e, c, r.toString(), p);
  }
  if (document.getElementById("__next-page-redirect")) {
    return d(e, c, f, p);
  }
  let h = new URL(e.canonicalUrl, location.origin);
  let y = (0, o.navigate)(r, h, e.cache, e.tree, e.nextUrl, s, c);
  return function e(t, r, n, u, a) {
    switch (a.tag) {
      case i.NavigationResultTag.MPA:
        return d(r, n, a.data, u);
      case i.NavigationResultTag.NoOp:
        {
          n.canonicalUrl = a.data.canonicalUrl;
          let e = new URL(r.canonicalUrl, t);
          if (t.pathname === e.pathname && t.search === e.search && t.hash !== e.hash) {
            n.onlyHashChange = true;
            n.shouldScroll = a.data.shouldScroll;
            n.hashFragment = t.hash;
            n.scrollableSegments = [];
          }
          return (0, l.handleMutable)(r, n);
        }
      case i.NavigationResultTag.Success:
        n.cache = a.data.cacheNode;
        n.patchedTree = a.data.flightRouterState;
        n.renderedSearch = a.data.renderedSearch;
        n.canonicalUrl = a.data.canonicalUrl;
        n.scrollableSegments = a.data.scrollableSegments;
        n.shouldScroll = a.data.shouldScroll;
        n.hashFragment = a.data.hash;
        return (0, l.handleMutable)(r, n);
      case i.NavigationResultTag.Async:
        return a.data.then(a => e(t, r, n, u, a), () => r);
      default:
        return r;
    }
  }(r, e, c, p, y);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}