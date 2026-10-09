Object.defineProperty(exports, "__esModule", {
  value: true
});
var n;
var u = {
  EntryStatus: function () {
    return O;
  },
  canNewFetchStrategyProvideMoreContent: function () {
    return eu;
  },
  convertRouteTreeToFlightRouterState: function () {
    return function e(t) {
      let r = {};
      if (t.slots !== null) {
        for (let n in t.slots) {
          r[n] = e(t.slots[n]);
        }
      }
      return [t.segment, r, null, null, t.isRootLayout];
    };
  },
  createDetachedSegmentCacheEntry: function () {
    return K;
  },
  fetchRouteOnCacheMiss: function () {
    return Y;
  },
  fetchSegmentOnCacheMiss: function () {
    return Q;
  },
  fetchSegmentPrefetchesUsingDynamicRequest: function () {
    return J;
  },
  getCurrentCacheVersion: function () {
    return C;
  },
  getStaleTimeMs: function () {
    return P;
  },
  overwriteRevalidatingSegmentCacheEntry: function () {
    return B;
  },
  pingInvalidationListeners: function () {
    return x;
  },
  readOrCreateRevalidatingSegmentEntry: function () {
    return H;
  },
  readOrCreateRouteCacheEntry: function () {
    return I;
  },
  readOrCreateSegmentCacheEntry: function () {
    return k;
  },
  readRouteCacheEntry: function () {
    return N;
  },
  readSegmentCacheEntry: function () {
    return U;
  },
  requestOptimisticRouteCacheEntry: function () {
    return D;
  },
  revalidateEntireCache: function () {
    return A;
  },
  upgradeToPendingSegment: function () {
    return z;
  },
  upsertSegmentEntry: function () {
    return $;
  },
  waitForSegmentCacheEntry: function () {
    return L;
  }
};
for (var a in u) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: u[a]
  });
}
let l = require("./46555.js");
let o = require("./16331.js");
let i = require("./36124.js");
let s = require("./35017.js");
let c = require("./56932.js");
let f = require("./27190.js");
let d = require("./12877.js");
let p = require("./3764.js");
let h = require("./22648.js");
let y = require("./54161.js");
let _ = require("./49966.js");
let g = require("./1511.js");
let v = require("./88552.js");
let b = require("./37548.js");
let m = require("./47325.js");
require("./25181.js");
let R = require("./35485.js");
let E = require("./84670.js");
function P(e) {
  return Math.max(e, 30) * 1000;
}
(n = {})[n.Empty = 0] = "Empty";
n[n.Pending = 1] = "Pending";
n[n.Fulfilled = 2] = "Fulfilled";
n[n.Rejected = 3] = "Rejected";
var O = n;
let S = ["", {}, null, "metadata-only"];
let j = (0, y.createCacheMap)();
let T = (0, y.createCacheMap)();
let M = null;
let w = 0;
function C() {
  return w;
}
function A(e, t) {
  w++;
  (0, s.startRevalidationCooldown)();
  (0, b.pingVisibleLinks)(e, t);
  x(e, t);
}
function x(e, t) {
  if (M !== null) {
    let r = M;
    M = null;
    for (let n of r) {
      if ((0, s.isPrefetchTaskDirty)(n, e, t)) {
        (function (e) {
          let t = e.onInvalidate;
          if (t !== null) {
            e.onInvalidate = null;
            try {
              t();
            } catch (e) {
              if (typeof reportError == "function") {
                reportError(e);
              } else {
                console.error(e);
              }
            }
          }
        })(n);
      }
    }
  }
}
function N(e, t) {
  let r = (0, c.getRouteVaryPath)(t.pathname, t.search, t.nextUrl);
  return (0, y.getFromCacheMap)(e, w, j, r, false);
}
function U(e, t) {
  return (0, y.getFromCacheMap)(e, w, T, t, false);
}
function L(e) {
  let t = e.promise;
  if (t === null) {
    t = e.promise = (0, E.createPromiseWithResolvers)();
  }
  return t.promise;
}
function I(e, t, r) {
  if (t.onInvalidate !== null) {
    if (M === null) {
      M = new Set([t]);
    } else {
      M.add(t);
    }
  }
  let n = N(e, r);
  if (n !== null) {
    return n;
  }
  let u = {
    canonicalUrl: null,
    status: 0,
    blockedTasks: null,
    tree: null,
    metadata: null,
    couldBeIntercepted: true,
    isPPREnabled: false,
    renderedSearch: null,
    ref: null,
    size: 0,
    staleAt: Infinity,
    version: w
  };
  let a = (0, c.getRouteVaryPath)(r.pathname, r.search, r.nextUrl);
  (0, y.setInCacheMap)(j, a, u, false);
  return u;
}
function D(e, t, r) {
  let n = t.search;
  if (n === "") {
    return null;
  }
  let u = new URL(t);
  u.search = "";
  let a = N(e, (0, p.createCacheKey)(u.href, r));
  if (a === null || a.status !== 2) {
    return null;
  }
  let l = new URL(a.canonicalUrl, t.origin);
  let o = l.search !== "" ? l.search : n;
  let i = a.renderedSearch !== "" ? a.renderedSearch : n;
  let s = new URL(a.canonicalUrl, location.origin);
  s.search = o;
  return {
    canonicalUrl: (0, d.createHrefFromUrl)(s),
    status: 2,
    blockedTasks: null,
    tree: F(a.tree, i),
    metadata: F(a.metadata, i),
    couldBeIntercepted: a.couldBeIntercepted,
    isPPREnabled: a.isPPREnabled,
    renderedSearch: i,
    ref: null,
    size: 0,
    staleAt: a.staleAt,
    version: a.version
  };
}
function F(e, t) {
  let r = null;
  let n = e.slots;
  if (n !== null) {
    r = {};
    for (let e in n) {
      let u = n[e];
      r[e] = F(u, t);
    }
  }
  if (e.isPage) {
    return {
      requestKey: e.requestKey,
      segment: e.segment,
      varyPath: (0, c.clonePageVaryPathWithNewSearchParams)(e.varyPath, t),
      isPage: true,
      slots: r,
      isRootLayout: e.isRootLayout,
      hasLoadingBoundary: e.hasLoadingBoundary,
      hasRuntimePrefetch: e.hasRuntimePrefetch
    };
  } else {
    return {
      requestKey: e.requestKey,
      segment: e.segment,
      varyPath: e.varyPath,
      isPage: false,
      slots: r,
      isRootLayout: e.isRootLayout,
      hasLoadingBoundary: e.hasLoadingBoundary,
      hasRuntimePrefetch: e.hasRuntimePrefetch
    };
  }
}
function k(e, t, r, n) {
  let u = U(e, n.varyPath);
  if (u !== null) {
    return u;
  }
  let a = (0, c.getSegmentVaryPathForRequest)(t, n);
  let l = K(r.staleAt);
  (0, y.setInCacheMap)(T, a, l, false);
  return l;
}
function H(e, t, r, n) {
  var u;
  u = n.varyPath;
  let a = (0, y.getFromCacheMap)(e, w, T, u, true);
  if (a !== null) {
    return a;
  }
  let l = (0, c.getSegmentVaryPathForRequest)(t, n);
  let o = K(r.staleAt);
  (0, y.setInCacheMap)(T, l, o, true);
  return o;
}
function B(e, t, r) {
  let n = (0, c.getSegmentVaryPathForRequest)(e, r);
  let u = K(t.staleAt);
  (0, y.setInCacheMap)(T, n, u, true);
  return u;
}
function $(e, t, r) {
  if ((0, y.isValueExpired)(e, w, r)) {
    return null;
  }
  let n = U(e, t);
  if (n !== null) {
    var u;
    if (r.fetchStrategy !== n.fetchStrategy && (u = n.fetchStrategy, !(u < r.fetchStrategy)) || !n.isPartial && r.isPartial) {
      r.status = 3;
      r.loading = null;
      r.rsc = null;
      return null;
    }
    (0, y.deleteFromCacheMap)(n);
  }
  (0, y.setInCacheMap)(T, t, r, false);
  return r;
}
function K(e) {
  return {
    status: 0,
    fetchStrategy: R.FetchStrategy.PPR,
    rsc: null,
    loading: null,
    isPartial: true,
    promise: null,
    ref: null,
    size: 0,
    staleAt: e,
    version: 0
  };
}
function z(e, t) {
  e.status = 1;
  e.fetchStrategy = t;
  e.version = w;
  return e;
}
function V(e) {
  let t = e.blockedTasks;
  if (t !== null) {
    for (let e of t) {
      (0, s.pingPrefetchTask)(e);
    }
    e.blockedTasks = null;
  }
}
function X(e, t, r, n, u, a, o, i) {
  let s = {
    requestKey: _.HEAD_REQUEST_KEY,
    segment: _.HEAD_REQUEST_KEY,
    varyPath: r,
    isPage: true,
    slots: null,
    isRootLayout: false,
    hasLoadingBoundary: l.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,
    hasRuntimePrefetch: false
  };
  e.status = 2;
  e.tree = t;
  e.metadata = s;
  e.staleAt = n;
  e.couldBeIntercepted = u;
  e.canonicalUrl = a;
  e.renderedSearch = o;
  e.isPPREnabled = i;
  V(e);
  return e;
}
function G(e, t, r, n, u) {
  e.status = 2;
  e.rsc = t;
  e.loading = r;
  e.staleAt = n;
  e.isPartial = u;
  if (e.promise !== null) {
    e.promise.resolve(e);
    e.promise = null;
  }
  return e;
}
function q(e, t) {
  e.status = 3;
  e.staleAt = t;
  V(e);
}
function W(e, t) {
  e.status = 3;
  e.staleAt = t;
  if (e.promise !== null) {
    e.promise.resolve(null);
    e.promise = null;
  }
}
async function Y(e, t, r) {
  let n = r.pathname;
  let u = r.search;
  let a = r.nextUrl;
  let s = {
    [o.RSC_HEADER]: "1",
    [o.NEXT_ROUTER_PREFETCH_HEADER]: "1",
    [o.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: "/_tree"
  };
  if (a !== null) {
    s[o.NEXT_URL] = a;
  }
  try {
    let r;
    let p;
    let b = new URL(n + u, location.origin);
    r = await er(b, s);
    p = r !== null && r.redirected ? new URL(r.url) : b;
    if (!r || !r.ok || r.status === 204 || !r.body) {
      q(e, Date.now() + 10000);
      return null;
    }
    let O = (0, d.createHrefFromUrl)(p);
    let S = r.headers.get("vary");
    let T = S !== null && S.includes(o.NEXT_URL);
    let M = (0, E.createPromiseWithResolvers)();
    let w = r.headers.get(o.NEXT_DID_POSTPONE_HEADER) === "2";
    if (w) {
      let t;
      let n;
      let u = en(r.body, M.resolve, function (t) {
        (0, y.setSizeInCacheMap)(e, t);
      });
      let a = await (0, i.createFromNextReadableStream)(u, s);
      if (a.buildId !== (0, f.getAppBuildId)()) {
        q(e, Date.now() + 10000);
        return null;
      }
      let o = (0, h.getRenderedPathname)(r);
      let d = (0, h.getRenderedSearch)(r);
      let p = {
        metadataVaryPath: null
      };
      t = o.split("/").filter(e => e !== "");
      n = _.ROOT_SEGMENT_REQUEST_KEY;
      let g = function e(t, r, n, u, a, o, i, s) {
        let f;
        let d;
        let p = null;
        let y = t.slots;
        if (y !== null) {
          f = false;
          d = (0, c.finalizeLayoutVaryPath)(u, n);
          p = {};
          for (let t in y) {
            let r;
            let l;
            let f;
            let d = y[t];
            let g = d.name;
            let v = d.paramType;
            let b = d.paramKey;
            if (v !== null) {
              let e = (0, h.parseDynamicParamFromURLPart)(v, a, o);
              let t = b !== null ? b : (0, h.getCacheKeyForDynamicParam)(e, "");
              f = (0, c.appendLayoutVaryPath)(n, t);
              l = [g, t, v];
              r = true;
            } else {
              f = n;
              l = g;
              r = (0, h.doesStaticSegmentAppearInURL)(g);
            }
            let m = r ? o + 1 : o;
            let R = (0, _.createSegmentRequestKeyPart)(l);
            let E = (0, _.appendSegmentRequestKeyPart)(u, t, R);
            p[t] = e(d, l, f, E, a, m, i, s);
          }
        } else if (u.endsWith(m.PAGE_SEGMENT_KEY)) {
          f = true;
          d = (0, c.finalizePageVaryPath)(u, i, n);
          if (s.metadataVaryPath === null) {
            s.metadataVaryPath = (0, c.finalizeMetadataVaryPath)(u, i, n);
          }
        } else {
          f = false;
          d = (0, c.finalizeLayoutVaryPath)(u, n);
        }
        return {
          requestKey: u,
          segment: r,
          varyPath: d,
          isPage: f,
          slots: p,
          isRootLayout: t.isRootLayout,
          hasLoadingBoundary: l.HasLoadingBoundary.SegmentHasLoadingBoundary,
          hasRuntimePrefetch: t.hasRuntimePrefetch
        };
      }(a.tree, n, null, _.ROOT_SEGMENT_REQUEST_KEY, t, 0, d, p);
      let v = p.metadataVaryPath;
      if (v === null) {
        q(e, Date.now() + 10000);
        return null;
      }
      let b = P(a.staleTime);
      X(e, g, v, Date.now() + b, T, O, d, w);
    } else {
      let n = en(r.body, M.resolve, function (t) {
        (0, y.setSizeInCacheMap)(e, t);
      });
      let u = await (0, i.createFromNextReadableStream)(n, s);
      if (u.b !== (0, f.getAppBuildId)()) {
        q(e, Date.now() + 10000);
        return null;
      }
      (function (e, t, r, n, u, a, i, s, f) {
        let d = (0, h.getRenderedSearch)(n);
        let p = (0, g.normalizeFlightData)(u.f);
        if (typeof p == "string" || p.length !== 1) {
          return q(a, e + 10000);
        }
        let y = p[0];
        if (!y.isRootRender) {
          return q(a, e + 10000);
        }
        let b = y.tree;
        let R = typeof u.rp?.[1] == "number" ? u.rp[1] : parseInt(n.headers.get(o.NEXT_ROUTER_STALE_TIME_HEADER) ?? "", 10);
        let E = isNaN(R) ? v.STATIC_STALETIME_MS : P(R);
        let O = n.headers.get(o.NEXT_DID_POSTPONE_HEADER) === "1";
        let S = {
          metadataVaryPath: null
        };
        let j = function e(t, r, n, u, a) {
          let o;
          let i;
          let s;
          let f;
          let d = t[0];
          if (Array.isArray(d)) {
            s = false;
            let e = d[1];
            i = (0, c.appendLayoutVaryPath)(n, e);
            f = (0, c.finalizeLayoutVaryPath)(r, i);
            o = d;
          } else {
            i = n;
            if (r.endsWith(m.PAGE_SEGMENT_KEY)) {
              s = true;
              o = m.PAGE_SEGMENT_KEY;
              f = (0, c.finalizePageVaryPath)(r, u, i);
              if (a.metadataVaryPath === null) {
                a.metadataVaryPath = (0, c.finalizeMetadataVaryPath)(r, u, i);
              }
            } else {
              s = false;
              o = d;
              f = (0, c.finalizeLayoutVaryPath)(r, i);
            }
          }
          let p = null;
          let h = t[1];
          for (let t in h) {
            let n = h[t];
            let l = n[0];
            let o = (0, _.createSegmentRequestKeyPart)(l);
            let s = e(n, (0, _.appendSegmentRequestKeyPart)(r, t, o), i, u, a);
            if (p === null) {
              p = {
                [t]: s
              };
            } else {
              p[t] = s;
            }
          }
          return {
            requestKey: r,
            segment: o,
            varyPath: f,
            isPage: s,
            slots: p,
            isRootLayout: t[4] === true,
            hasLoadingBoundary: t[5] !== undefined ? t[5] : l.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,
            hasRuntimePrefetch: false
          };
        }(b, _.ROOT_SEGMENT_REQUEST_KEY, null, d, S);
        let T = S.metadataVaryPath;
        if (T === null) {
          return q(a, e + 10000);
        }
        let M = X(a, j, T, e + E, i, s, d, f);
        ee(e, t, r, n, u, O, M, null);
      })(Date.now(), t, R.FetchStrategy.LoadingBoundary, r, u, e, T, O, w);
    }
    if (!T) {
      let t = (0, c.getFulfilledRouteVaryPath)(n, u, a, T);
      (0, y.setInCacheMap)(j, t, e, false);
    }
    return {
      value: null,
      closed: M.promise
    };
  } catch (t) {
    q(e, Date.now() + 10000);
    return null;
  }
}
async function Q(e, t, r, n) {
  let u = new URL(e.canonicalUrl, location.origin);
  let a = r.nextUrl;
  let l = n.requestKey;
  let s = l === _.ROOT_SEGMENT_REQUEST_KEY ? "/_index" : l;
  let c = {
    [o.RSC_HEADER]: "1",
    [o.NEXT_ROUTER_PREFETCH_HEADER]: "1",
    [o.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: s
  };
  if (a !== null) {
    c[o.NEXT_URL] = a;
  }
  try {
    let r = await er(u, c);
    if (!r || !r.ok || r.status === 204 || r.headers.get(o.NEXT_DID_POSTPONE_HEADER) !== "2" || !r.body) {
      W(t, Date.now() + 10000);
      return null;
    }
    let n = (0, E.createPromiseWithResolvers)();
    let a = en(r.body, n.resolve, function (e) {
      (0, y.setSizeInCacheMap)(t, e);
    });
    let l = await (0, i.createFromNextReadableStream)(a, c);
    if (l.buildId !== (0, f.getAppBuildId)()) {
      W(t, Date.now() + 10000);
      return null;
    }
    return {
      value: G(t, l.rsc, l.loading, e.staleAt, l.isPartial),
      closed: n.promise
    };
  } catch (e) {
    W(t, Date.now() + 10000);
    return null;
  }
}
async function J(e, t, r, n, u) {
  let a = e.key;
  let l = new URL(t.canonicalUrl, location.origin);
  let s = a.nextUrl;
  if (u.size === 1 && u.has(t.metadata.requestKey)) {
    n = S;
  }
  let c = {
    [o.RSC_HEADER]: "1",
    [o.NEXT_ROUTER_STATE_TREE_HEADER]: (0, g.prepareFlightRouterStateForRequest)(n)
  };
  if (s !== null) {
    c[o.NEXT_URL] = s;
  }
  switch (r) {
    case R.FetchStrategy.Full:
      break;
    case R.FetchStrategy.PPRRuntime:
      c[o.NEXT_ROUTER_PREFETCH_HEADER] = "2";
      break;
    case R.FetchStrategy.LoadingBoundary:
      c[o.NEXT_ROUTER_PREFETCH_HEADER] = "1";
  }
  try {
    let n = await er(l, c);
    if (!n || !n.ok || !n.body || (0, h.getRenderedSearch)(n) !== t.renderedSearch) {
      Z(u, Date.now() + 10000);
      return null;
    }
    let a = (0, E.createPromiseWithResolvers)();
    let o = null;
    let s = en(n.body, a.resolve, function (e) {
      if (o === null) {
        return;
      }
      let t = e / o.length;
      for (let e of o) {
        (0, y.setSizeInCacheMap)(e, t);
      }
    });
    let f = await (0, i.createFromNextReadableStream)(s, c);
    let d = r === R.FetchStrategy.PPRRuntime && f.rp?.[0] === true;
    o = ee(Date.now(), e, r, n, f, d, t, u);
    return {
      value: null,
      closed: a.promise
    };
  } catch (e) {
    Z(u, Date.now() + 10000);
    return null;
  }
}
function Z(e, t) {
  let r = [];
  for (let n of e.values()) {
    if (n.status === 1) {
      W(n, t);
    } else if (n.status === 2) {
      r.push(n);
    }
  }
  return r;
}
function ee(e, t, r, n, u, a, l, i) {
  if (u.b !== (0, f.getAppBuildId)()) {
    if (i !== null) {
      Z(i, e + 10000);
    }
    return null;
  }
  let s = (0, g.normalizeFlightData)(u.f);
  if (typeof s == "string") {
    return null;
  }
  let c = typeof u.rp?.[1] == "number" ? u.rp[1] : parseInt(n.headers.get(o.NEXT_ROUTER_STALE_TIME_HEADER) ?? "", 10);
  let d = e + (isNaN(c) ? v.STATIC_STALETIME_MS : P(c));
  for (let n of s) {
    let u = n.seedData;
    if (u !== null) {
      let o = n.segmentPath;
      let s = l.tree;
      for (let t = 0; t < o.length; t += 2) {
        let r = o[t];
        if (s?.slots?.[r] === undefined) {
          if (i !== null) {
            Z(i, e + 10000);
          }
          return null;
        }
        s = s.slots[r];
      }
      (function e(t, r, n, u, a, l, o, i, s) {
        let c = o[0];
        et(t, n, u, c, o[2], c === null || i, l, a, s);
        let f = a.slots;
        if (f !== null) {
          let a = o[1];
          for (let o in f) {
            let c = f[o];
            let d = a[o];
            if (d != null) {
              e(t, r, n, u, c, l, d, i, s);
            }
          }
        }
      })(e, t, r, l, s, d, u, a, i);
    }
    let o = n.head;
    if (o !== null) {
      et(e, r, l, o, null, n.isHeadPartial, d, l.metadata, i);
    }
  }
  if (i !== null) {
    return Z(i, e + 10000);
  } else {
    return null;
  }
}
function et(e, t, r, n, u, a, l, o, i) {
  let s = i !== null ? i.get(o.requestKey) : undefined;
  if (s !== undefined) {
    G(s, n, u, l, a);
  } else {
    let i = k(e, t, r, o);
    if (i.status === 0) {
      G(z(i, t), n, u, l, a);
    } else {
      let r = G(z(K(l), t), n, u, l, a);
      $(e, (0, c.getSegmentVaryPathForRequest)(t, o), r);
    }
  }
}
async function er(e, t) {
  let r = await (0, i.createFetch)(e, t, "low", false);
  if (!r.ok) {
    return null;
  }
  {
    let e = r.headers.get("content-type");
    if (!e || !e.startsWith(o.RSC_CONTENT_TYPE_HEADER)) {
      return null;
    }
  }
  return r;
}
function en(e, t, r) {
  let n = 0;
  let u = e.getReader();
  return new ReadableStream({
    async pull(e) {
      while (true) {
        let {
          done: a,
          value: l
        } = await u.read();
        if (!a) {
          e.enqueue(l);
          r(n += l.byteLength);
          continue;
        }
        t();
        return;
      }
    }
  });
}
function eu(e, t) {
  return e < t;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}