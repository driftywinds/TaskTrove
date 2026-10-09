Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  cancelPrefetchTask: function () {
    return R;
  },
  isPrefetchTaskDirty: function () {
    return P;
  },
  pingPrefetchTask: function () {
    return w;
  },
  reschedulePrefetchTask: function () {
    return E;
  },
  schedulePrefetchTask: function () {
    return m;
  },
  startRevalidationCooldown: function () {
    return b;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./46555.js");
let l = require("./80949.js");
let o = require("./70426.js");
let i = require("./56932.js");
let s = require("./3764.js");
let c = require("./35485.js");
let f = require("./47325.js");
let d = typeof queueMicrotask == "function" ? queueMicrotask : e => Promise.resolve().then(e).catch(e => setTimeout(() => {
  throw e;
}));
let p = [];
let h = 0;
let y = 0;
let _ = false;
let g = null;
let v = null;
function b() {
  if (v !== null) {
    clearTimeout(v);
  }
  v = setTimeout(() => {
    v = null;
    S();
  }, 300);
}
function m(e, t, r, n, u) {
  let a = {
    key: e,
    treeAtTimeOfPrefetch: t,
    cacheVersion: (0, o.getCurrentCacheVersion)(),
    priority: n,
    phase: 1,
    hasBackgroundWork: false,
    spawnedRuntimePrefetches: null,
    fetchStrategy: r,
    sortId: y++,
    isCanceled: false,
    onInvalidate: u,
    _heapIndex: -1
  };
  O(a);
  B(p, a);
  S();
  return a;
}
function R(e) {
  e.isCanceled = true;
  (function (e, t) {
    let r = t._heapIndex;
    if (r !== -1 && (t._heapIndex = -1, e.length !== 0)) {
      let n = e.pop();
      if (n !== t) {
        e[r] = n;
        n._heapIndex = r;
        X(e, n, r);
      }
    }
  })(p, e);
}
function E(e, t, r, n) {
  e.isCanceled = false;
  e.phase = 1;
  e.sortId = y++;
  e.priority = e === g ? c.PrefetchPriority.Intent : n;
  e.treeAtTimeOfPrefetch = t;
  e.fetchStrategy = r;
  O(e);
  if (e._heapIndex !== -1) {
    z(p, e);
  } else {
    B(p, e);
  }
  S();
}
function P(e, t, r) {
  let n = (0, o.getCurrentCacheVersion)();
  return e.cacheVersion !== n || e.treeAtTimeOfPrefetch !== r || e.key.nextUrl !== t;
}
function O(e) {
  if (e.priority === c.PrefetchPriority.Intent && e !== g) {
    if (g !== null && g.priority !== c.PrefetchPriority.Background) {
      g.priority = c.PrefetchPriority.Default;
      z(p, g);
    }
    g = e;
  }
}
function S() {
  if (!_) {
    _ = true;
    d(C);
  }
}
function j(e) {
  return v === null && (e.priority === c.PrefetchPriority.Intent ? h < 12 : h < 4);
}
function T(e) {
  h++;
  return e.then(e => e === null ? (M(), null) : (e.closed.then(M), e.value));
}
function M() {
  h--;
  S();
}
function w(e) {
  if (!e.isCanceled && e._heapIndex === -1) {
    B(p, e);
    S();
  }
}
function C() {
  _ = false;
  let e = Date.now();
  let t = $(p);
  while (t !== null && j(t)) {
    t.cacheVersion = (0, o.getCurrentCacheVersion)();
    let r = function (e, t) {
      let r = t.key;
      let n = (0, o.readOrCreateRouteCacheEntry)(e, t, r);
      let u = function (e, t, r) {
        switch (r.status) {
          case o.EntryStatus.Empty:
            T((0, o.fetchRouteOnCacheMiss)(r, t, t.key));
            r.staleAt = e + 60000;
            r.status = o.EntryStatus.Pending;
          case o.EntryStatus.Pending:
            {
              let e = r.blockedTasks;
              if (e === null) {
                r.blockedTasks = new Set([t]);
              } else {
                e.add(t);
              }
              return 1;
            }
          case o.EntryStatus.Rejected:
            break;
          case o.EntryStatus.Fulfilled:
            {
              if (t.phase !== 0) {
                return 2;
              }
              if (!j(t)) {
                return 0;
              }
              let i = r.tree;
              let s = t.fetchStrategy === c.FetchStrategy.PPR ? r.isPPREnabled ? c.FetchStrategy.PPR : c.FetchStrategy.LoadingBoundary : t.fetchStrategy;
              switch (s) {
                case c.FetchStrategy.PPR:
                  {
                    var n;
                    var u;
                    var l;
                    U(n = e, u = t, l = r, (0, o.readOrCreateSegmentCacheEntry)(n, c.FetchStrategy.PPR, l, l.metadata), u.key, l.metadata);
                    if (function e(t, r, n, u, a) {
                      let l = (0, o.readOrCreateSegmentCacheEntry)(t, r.fetchStrategy, n, a);
                      U(t, r, n, l, r.key, a);
                      let i = u[1];
                      let s = a.slots;
                      if (s !== null) {
                        for (let u in s) {
                          if (!j(r)) {
                            return 0;
                          }
                          let a = s[u];
                          let l = a.segment;
                          let c = i[u];
                          let f = c?.[0];
                          if ((f !== undefined && k(n, l, f) ? e(t, r, n, c, a) : function e(t, r, n, u) {
                            if (u.hasRuntimePrefetch) {
                              if (r.spawnedRuntimePrefetches === null) {
                                r.spawnedRuntimePrefetches = new Set([u.requestKey]);
                              } else {
                                r.spawnedRuntimePrefetches.add(u.requestKey);
                              }
                              return 2;
                            }
                            let a = (0, o.readOrCreateSegmentCacheEntry)(t, r.fetchStrategy, n, u);
                            U(t, r, n, a, r.key, u);
                            if (u.slots !== null) {
                              if (!j(r)) {
                                return 0;
                              }
                              for (let a in u.slots) {
                                if (e(t, r, n, u.slots[a]) === 0) {
                                  return 0;
                                }
                              }
                            }
                            return 2;
                          }(t, r, n, a)) === 0) {
                            return 0;
                          }
                        }
                      }
                      return 2;
                    }(e, t, r, t.treeAtTimeOfPrefetch, i) === 0) {
                      return 0;
                    }
                    let a = t.spawnedRuntimePrefetches;
                    if (a !== null) {
                      let n = new Map();
                      x(e, t, r, n, c.FetchStrategy.PPRRuntime);
                      let u = function e(t, r, n, u, a, l) {
                        if (a.has(u.requestKey)) {
                          return N(t, r, n, u, false, l, c.FetchStrategy.PPRRuntime);
                        }
                        let o = {};
                        let i = u.slots;
                        if (i !== null) {
                          for (let u in i) {
                            let s = i[u];
                            o[u] = e(t, r, n, s, a, l);
                          }
                        }
                        return [u.segment, o, null, null];
                      }(e, t, r, i, a, n);
                      if (n.size > 0) {
                        T((0, o.fetchSegmentPrefetchesUsingDynamicRequest)(t, r, c.FetchStrategy.PPRRuntime, u, n));
                      }
                    }
                    return 2;
                  }
                case c.FetchStrategy.Full:
                case c.FetchStrategy.PPRRuntime:
                case c.FetchStrategy.LoadingBoundary:
                  {
                    let n = new Map();
                    x(e, t, r, n, s);
                    let u = function e(t, r, n, u, l, i, s) {
                      let f = u[1];
                      let d = l.slots;
                      let p = {};
                      if (d !== null) {
                        for (let u in d) {
                          let l = d[u];
                          let h = l.segment;
                          let y = f[u];
                          let _ = y?.[0];
                          if (_ !== undefined && k(n, h, _)) {
                            let a = e(t, r, n, y, l, i, s);
                            p[u] = a;
                          } else {
                            switch (s) {
                              case c.FetchStrategy.LoadingBoundary:
                                {
                                  let e = l.hasLoadingBoundary !== a.HasLoadingBoundary.SubtreeHasNoLoadingBoundary ? function e(t, r, n, u, l, i) {
                                    let s = l === null ? "inside-shared-layout" : null;
                                    let f = (0, o.readOrCreateSegmentCacheEntry)(t, r.fetchStrategy, n, u);
                                    switch (f.status) {
                                      case o.EntryStatus.Empty:
                                        i.set(u.requestKey, (0, o.upgradeToPendingSegment)(f, c.FetchStrategy.LoadingBoundary));
                                        if (l !== "refetch") {
                                          s = l = "refetch";
                                        }
                                        break;
                                      case o.EntryStatus.Fulfilled:
                                        if (u.hasLoadingBoundary === a.HasLoadingBoundary.SegmentHasLoadingBoundary) {
                                          return (0, o.convertRouteTreeToFlightRouterState)(u);
                                        }
                                      case o.EntryStatus.Pending:
                                      case o.EntryStatus.Rejected:
                                    }
                                    let d = {};
                                    if (u.slots !== null) {
                                      for (let a in u.slots) {
                                        let o = u.slots[a];
                                        d[a] = e(t, r, n, o, l, i);
                                      }
                                    }
                                    return [u.segment, d, null, s, u.isRootLayout];
                                  }(t, r, n, l, null, i) : (0, o.convertRouteTreeToFlightRouterState)(l);
                                  p[u] = e;
                                  break;
                                }
                              case c.FetchStrategy.PPRRuntime:
                                {
                                  let e = N(t, r, n, l, false, i, s);
                                  p[u] = e;
                                  break;
                                }
                              case c.FetchStrategy.Full:
                                {
                                  let e = N(t, r, n, l, false, i, s);
                                  p[u] = e;
                                }
                            }
                          }
                        }
                      }
                      return [l.segment, p, null, null, l.isRootLayout];
                    }(e, t, r, t.treeAtTimeOfPrefetch, i, n, s);
                    if (n.size > 0) {
                      T((0, o.fetchSegmentPrefetchesUsingDynamicRequest)(t, r, s, u, n));
                    }
                    return 2;
                  }
              }
            }
        }
        return 2;
      }(e, t, n);
      if (u !== 0 && r.search !== "") {
        let n = new URL(r.pathname, location.origin);
        let u = (0, s.createCacheKey)(n.href, r.nextUrl);
        let a = (0, o.readOrCreateRouteCacheEntry)(e, t, u);
        switch (a.status) {
          case o.EntryStatus.Empty:
            if (A(t)) {
              a.status = o.EntryStatus.Pending;
              T((0, o.fetchRouteOnCacheMiss)(a, t, u));
            }
          case o.EntryStatus.Pending:
          case o.EntryStatus.Fulfilled:
          case o.EntryStatus.Rejected:
        }
      }
      return u;
    }(e, t);
    let n = t.hasBackgroundWork;
    t.hasBackgroundWork = false;
    t.spawnedRuntimePrefetches = null;
    switch (r) {
      case 0:
        return;
      case 1:
        K(p);
        t = $(p);
        continue;
      case 2:
        if (t.phase === 1) {
          t.phase = 0;
          z(p, t);
        } else if (n) {
          t.priority = c.PrefetchPriority.Background;
          z(p, t);
        } else {
          K(p);
        }
        t = $(p);
        continue;
    }
  }
}
function A(e) {
  return e.priority === c.PrefetchPriority.Background || (e.hasBackgroundWork = true, false);
}
function x(e, t, r, n, u) {
  N(e, t, r, r.metadata, false, n, u === c.FetchStrategy.LoadingBoundary ? c.FetchStrategy.Full : u);
}
function N(e, t, r, n, u, a, l) {
  let i = (0, o.readOrCreateSegmentCacheEntry)(e, l, r, n);
  let s = null;
  switch (i.status) {
    case o.EntryStatus.Empty:
      s = (0, o.upgradeToPendingSegment)(i, l);
      break;
    case o.EntryStatus.Fulfilled:
      if (i.isPartial && (0, o.canNewFetchStrategyProvideMoreContent)(i.fetchStrategy, l)) {
        s = I(e, r, n, l);
      }
      break;
    case o.EntryStatus.Pending:
    case o.EntryStatus.Rejected:
      if ((0, o.canNewFetchStrategyProvideMoreContent)(i.fetchStrategy, l)) {
        s = I(e, r, n, l);
      }
  }
  let c = {};
  if (n.slots !== null) {
    for (let o in n.slots) {
      let i = n.slots[o];
      c[o] = N(e, t, r, i, u || s !== null, a, l);
    }
  }
  if (s !== null) {
    a.set(n.requestKey, s);
  }
  let f = u || s === null ? null : "refetch";
  return [n.segment, c, null, f, n.isRootLayout];
}
function U(e, t, r, n, u, a) {
  switch (n.status) {
    case o.EntryStatus.Empty:
      T((0, o.fetchSegmentOnCacheMiss)(r, (0, o.upgradeToPendingSegment)(n, c.FetchStrategy.PPR), u, a));
      break;
    case o.EntryStatus.Pending:
      switch (n.fetchStrategy) {
        case c.FetchStrategy.PPR:
        case c.FetchStrategy.PPRRuntime:
        case c.FetchStrategy.Full:
          break;
        case c.FetchStrategy.LoadingBoundary:
          if (A(t)) {
            L(e, r, u, a);
          }
          break;
        default:
          n.fetchStrategy;
      }
      break;
    case o.EntryStatus.Rejected:
      switch (n.fetchStrategy) {
        case c.FetchStrategy.PPR:
        case c.FetchStrategy.PPRRuntime:
        case c.FetchStrategy.Full:
          break;
        case c.FetchStrategy.LoadingBoundary:
          L(e, r, u, a);
          break;
        default:
          n.fetchStrategy;
      }
    case o.EntryStatus.Fulfilled:
  }
}
function L(e, t, r, n) {
  let u = (0, o.readOrCreateRevalidatingSegmentEntry)(e, c.FetchStrategy.PPR, t, n);
  switch (u.status) {
    case o.EntryStatus.Empty:
      F(T((0, o.fetchSegmentOnCacheMiss)(t, (0, o.upgradeToPendingSegment)(u, c.FetchStrategy.PPR), r, n)), (0, i.getSegmentVaryPathForRequest)(c.FetchStrategy.PPR, n));
    case o.EntryStatus.Pending:
    case o.EntryStatus.Fulfilled:
    case o.EntryStatus.Rejected:
  }
}
function I(e, t, r, n) {
  let u = (0, o.readOrCreateRevalidatingSegmentEntry)(e, n, t, r);
  if (u.status === o.EntryStatus.Empty) {
    let e = (0, o.upgradeToPendingSegment)(u, n);
    F((0, o.waitForSegmentCacheEntry)(e), (0, i.getSegmentVaryPathForRequest)(n, r));
    return e;
  }
  if ((0, o.canNewFetchStrategyProvideMoreContent)(u.fetchStrategy, n)) {
    let e = (0, o.overwriteRevalidatingSegmentCacheEntry)(n, t, r);
    let u = (0, o.upgradeToPendingSegment)(e, n);
    F((0, o.waitForSegmentCacheEntry)(u), (0, i.getSegmentVaryPathForRequest)(n, r));
    return u;
  }
  switch (u.status) {
    case o.EntryStatus.Pending:
    case o.EntryStatus.Fulfilled:
    case o.EntryStatus.Rejected:
    default:
      return null;
  }
}
let D = () => {};
function F(e, t) {
  e.then(e => {
    if (e !== null) {
      (0, o.upsertSegmentEntry)(Date.now(), t, e);
    }
  }, D);
}
function k(e, t, r) {
  if (r === f.PAGE_SEGMENT_KEY) {
    return t === (0, f.addSearchParamsIfPageSegment)(f.PAGE_SEGMENT_KEY, Object.fromEntries(new URLSearchParams(e.renderedSearch)));
  } else {
    return (0, l.matchSegment)(r, t);
  }
}
function H(e, t) {
  let r = t.priority - e.priority;
  if (r !== 0) {
    return r;
  }
  let n = t.phase - e.phase;
  if (n !== 0) {
    return n;
  } else {
    return t.sortId - e.sortId;
  }
}
function B(e, t) {
  let r = e.length;
  e.push(t);
  t._heapIndex = r;
  V(e, t, r);
}
function $(e) {
  if (e.length === 0) {
    return null;
  } else {
    return e[0];
  }
}
function K(e) {
  if (e.length === 0) {
    return null;
  }
  let t = e[0];
  t._heapIndex = -1;
  let r = e.pop();
  if (r !== t) {
    e[0] = r;
    r._heapIndex = 0;
    X(e, r, 0);
  }
  return t;
}
function z(e, t) {
  let r = t._heapIndex;
  if (r !== -1) {
    if (r === 0) {
      X(e, t, 0);
    } else if (H(e[r - 1 >>> 1], t) > 0) {
      V(e, t, r);
    } else {
      X(e, t, r);
    }
  }
}
function V(e, t, r) {
  let n = r;
  while (n > 0) {
    let r = n - 1 >>> 1;
    let u = e[r];
    if (!(H(u, t) > 0)) {
      return;
    }
    e[r] = t;
    t._heapIndex = r;
    e[n] = u;
    u._heapIndex = n;
    n = r;
  }
}
function X(e, t, r) {
  let n = r;
  let u = e.length;
  let a = u >>> 1;
  while (n < a) {
    let r = (n + 1) * 2 - 1;
    let a = e[r];
    let l = r + 1;
    let o = e[l];
    if (H(a, t) < 0) {
      if (l < u && H(o, a) < 0) {
        e[n] = o;
        o._heapIndex = n;
        e[l] = t;
        t._heapIndex = l;
        n = l;
      } else {
        e[n] = a;
        a._heapIndex = n;
        e[r] = t;
        t._heapIndex = r;
        n = r;
      }
    } else {
      if (!(l < u) || !(H(o, t) < 0)) {
        return;
      }
      e[n] = o;
      o._heapIndex = n;
      e[l] = t;
      t._heapIndex = l;
      n = l;
    }
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}