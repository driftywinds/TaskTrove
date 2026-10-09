Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  createInitialRSCPayloadFromFallbackPrerender: function () {
    return s;
  },
  getFlightDataPartsFromPath: function () {
    return i;
  },
  getNextFlightSegmentPath: function () {
    return c;
  },
  normalizeFlightData: function () {
    return f;
  },
  prepareFlightRouterStateForRequest: function () {
    return d;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./47325.js");
let l = require("./22648.js");
let o = require("./12877.js");
function i(e) {
  let [t, r, n, u] = e.slice(-4);
  let a = e.slice(0, -4);
  return {
    pathToSegment: a.slice(0, -1),
    segmentPath: a,
    segment: a[a.length - 1] ?? "",
    tree: t,
    seedData: r,
    head: n,
    isHeadPartial: u,
    isRootRender: e.length === 4
  };
}
function s(e, t) {
  let r = (0, l.getRenderedPathname)(e);
  let n = (0, l.getRenderedSearch)(e);
  let u = (0, o.createHrefFromUrl)(new URL(location.href));
  let a = t.f[0];
  let i = a[0];
  return {
    b: t.b,
    c: u.split("/"),
    q: n,
    i: t.i,
    f: [[function e(t, r, n, u) {
      let a;
      let o;
      let i = t[0];
      if (typeof i == "string") {
        a = i;
        o = (0, l.doesStaticSegmentAppearInURL)(i);
      } else {
        let e = i[0];
        let t = i[2];
        let s = (0, l.parseDynamicParamFromURLPart)(t, n, u);
        a = [e, (0, l.getCacheKeyForDynamicParam)(s, r), t];
        o = true;
      }
      let s = o ? u + 1 : u;
      let c = t[1];
      let f = {};
      for (let t in c) {
        let u = c[t];
        f[t] = e(u, r, n, s);
      }
      return [a, f, null, t[3], t[4]];
    }(i, n, r.split("/").filter(e => e !== ""), 0), a[1], a[2], a[2]]],
    m: t.m,
    G: t.G,
    S: t.S
  };
}
function c(e) {
  return e.slice(2);
}
function f(e) {
  if (typeof e == "string") {
    return e;
  } else {
    return e.map(e => i(e));
  }
}
function d(e, t) {
  if (t) {
    return encodeURIComponent(JSON.stringify(e));
  } else {
    return encodeURIComponent(JSON.stringify(function e(t) {
      var r;
      var n;
      let [u, l, o, i, s, c] = t;
      let f = typeof (r = u) == "string" && r.startsWith(a.PAGE_SEGMENT_KEY + "?") ? a.PAGE_SEGMENT_KEY : r;
      let d = {};
      for (let [t, r] of Object.entries(l)) {
        d[t] = e(r);
      }
      let p = [f, d, null, (n = i) && n !== "refresh" ? i : null];
      if (s !== undefined) {
        p[4] = s;
      }
      if (c !== undefined) {
        p[5] = c;
      }
      return p;
    }(e)));
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}