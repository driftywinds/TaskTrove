Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "navigate", {
  enumerable: true,
  get: function () {
    return c;
  }
});
let n = require("./36124.js");
let u = require("./46664.js");
let a = require("./12877.js");
let l = require("./70426.js");
let o = require("./3764.js");
let i = require("./47325.js");
let s = require("./35485.js");
function c(e, t, r, n, u, a, i) {
  let c = Date.now();
  let d = e.href;
  let _ = d === window.location.href;
  let g = (0, o.createCacheKey)(d, u);
  let v = (0, l.readRouteCacheEntry)(c, g);
  if (v !== null && v.status === l.EntryStatus.Fulfilled) {
    let l = p(c, v, v.tree);
    let o = l.flightRouterState;
    let i = l.seedData;
    let s = h(c, v);
    let d = s.rsc;
    let y = s.isPartial;
    let g = v.canonicalUrl + e.hash;
    return f(c, e, t, u, _, r, n, o, i, d, y, g, v.renderedSearch, a, e.hash);
  }
  if (v === null || v.status !== l.EntryStatus.Rejected) {
    let o = (0, l.requestOptimisticRouteCacheEntry)(c, e, u);
    if (o !== null) {
      let l = p(c, o, o.tree);
      let i = l.flightRouterState;
      let s = l.seedData;
      let d = h(c, o);
      let y = d.rsc;
      let g = d.isPartial;
      let v = o.canonicalUrl + e.hash;
      return f(c, e, t, u, _, r, n, i, s, y, g, v, o.renderedSearch, a, e.hash);
    }
  }
  let b = i.collectedDebugInfo ?? [];
  if (i.collectedDebugInfo === undefined) {
    b = i.collectedDebugInfo = [];
  }
  return {
    tag: s.NavigationResultTag.Async,
    data: y(c, e, t, u, _, r, n, a, e.hash, b)
  };
}
function f(e, t, r, a, l, o, i, c, f, p, h, y, _, g, v) {
  let b = [];
  let m = (0, u.startPPRNavigation)(e, r, o, i, c, f, p, h, l, b);
  if (m !== null) {
    let e = m.dynamicRequestTree;
    if (e !== null) {
      let r = (0, n.fetchServerResponse)(new URL(y, t.origin), {
        flightRouterState: e,
        nextUrl: a
      });
      (0, u.listenForDynamicRequest)(m, r);
    }
    return d(m, o, y, _, b, g, v);
  }
  return {
    tag: s.NavigationResultTag.NoOp,
    data: {
      canonicalUrl: y,
      shouldScroll: g
    }
  };
}
function d(e, t, r, n, u, a, l) {
  let o = e.route;
  if (o === null) {
    return {
      tag: s.NavigationResultTag.MPA,
      data: r
    };
  }
  let i = e.node;
  return {
    tag: s.NavigationResultTag.Success,
    data: {
      flightRouterState: o,
      cacheNode: i !== null ? i : t,
      canonicalUrl: r,
      renderedSearch: n,
      scrollableSegments: u,
      shouldScroll: a,
      hash: l
    }
  };
}
function p(e, t, r) {
  let n = {};
  let u = {};
  let a = r.slots;
  if (a !== null) {
    for (let r in a) {
      let l = p(e, t, a[r]);
      n[r] = l.flightRouterState;
      u[r] = l.seedData;
    }
  }
  let o = null;
  let s = null;
  let c = true;
  let f = (0, l.readSegmentCacheEntry)(e, r.varyPath);
  if (f !== null) {
    switch (f.status) {
      case l.EntryStatus.Fulfilled:
        o = f.rsc;
        s = f.loading;
        c = f.isPartial;
        break;
      case l.EntryStatus.Pending:
        {
          let e = (0, l.waitForSegmentCacheEntry)(f);
          o = e.then(e => e !== null ? e.rsc : null);
          s = e.then(e => e !== null ? e.loading : null);
          c = true;
        }
      case l.EntryStatus.Empty:
      case l.EntryStatus.Rejected:
    }
  }
  return {
    flightRouterState: [(0, i.addSearchParamsIfPageSegment)(r.segment, Object.fromEntries(new URLSearchParams(t.renderedSearch))), n, null, null, r.isRootLayout],
    seedData: [o, u, s, c, false]
  };
}
function h(e, t) {
  let r = null;
  let n = true;
  let u = (0, l.readSegmentCacheEntry)(e, t.metadata.varyPath);
  if (u !== null) {
    switch (u.status) {
      case l.EntryStatus.Fulfilled:
        r = u.rsc;
        n = u.isPartial;
        break;
      case l.EntryStatus.Pending:
        r = (0, l.waitForSegmentCacheEntry)(u).then(e => e !== null ? e.rsc : null);
        n = true;
      case l.EntryStatus.Empty:
      case l.EntryStatus.Rejected:
    }
  }
  return {
    rsc: r,
    isPartial: n
  };
}
async function y(e, t, r, l, o, i, c, f, p, h) {
  let y = (0, n.fetchServerResponse)(t, {
    flightRouterState: c,
    nextUrl: l
  });
  let _ = await y;
  if (typeof _ == "string") {
    return {
      tag: s.NavigationResultTag.MPA,
      data: _
    };
  }
  let {
    flightData: g,
    canonicalUrl: v,
    renderedSearch: b,
    debugInfo: m
  } = _;
  if (m !== null) {
    h.push(...m);
  }
  let R = function (e, t) {
    let r = e;
    for (let {
      segmentPath: n,
      tree: u
    } of t) {
      let t = r !== e;
      r = function e(t, r, n, u, a) {
        if (a === n.length) {
          return r;
        }
        let l = n[a];
        let o = t[1];
        let i = {};
        for (let t in o) {
          if (t === l) {
            let l = o[t];
            i[t] = e(l, r, n, u, a + 2);
          } else {
            i[t] = o[t];
          }
        }
        if (u) {
          t[1] = i;
          return t;
        }
        let s = [t[0], i];
        if (2 in t) {
          s[2] = t[2];
        }
        if (3 in t) {
          s[3] = t[3];
        }
        if (4 in t) {
          s[4] = t[4];
        }
        return s;
      }(r, u, n, t, 0);
    }
    return r;
  }(c, g);
  let E = [];
  let P = (0, u.startPPRNavigation)(e, r, i, c, R, null, null, true, o, E);
  if (P !== null) {
    if (P.dynamicRequestTree !== null) {
      (0, u.listenForDynamicRequest)(P, y);
    }
    return d(P, i, (0, a.createHrefFromUrl)(v), b, E, f, p);
  } else {
    return {
      tag: s.NavigationResultTag.NoOp,
      data: {
        canonicalUrl: (0, a.createHrefFromUrl)(v),
        shouldScroll: f
      }
    };
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}