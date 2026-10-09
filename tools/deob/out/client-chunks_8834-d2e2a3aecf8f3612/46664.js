Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  abortTask: function () {
    return g;
  },
  listenForDynamicRequest: function () {
    return _;
  },
  startPPRNavigation: function () {
    return d;
  },
  updateCacheNodeOnPopstateRestoration: function () {
    return function e(t, r) {
      let n = r[1];
      let u = t.parallelRoutes;
      let a = new Map(u);
      for (let t in n) {
        let r = n[t];
        let l = r[0];
        let o = (0, i.createRouterCacheKey)(l);
        let s = u.get(t);
        if (s !== undefined) {
          let n = s.get(o);
          if (n !== undefined) {
            let u = e(n, r);
            let l = new Map(s);
            l.set(o, u);
            a.set(t, l);
          }
        }
      }
      let l = t.rsc;
      let o = m(l) && l.status === "pending";
      return {
        lazyData: null,
        rsc: l,
        head: t.head,
        prefetchHead: o ? t.prefetchHead : [null, null],
        prefetchRsc: o ? t.prefetchRsc : null,
        loading: t.loading,
        parallelRoutes: a,
        navigatedAt: t.navigatedAt
      };
    };
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./47325.js");
let l = require("./80949.js");
let o = require("./12877.js");
let i = require("./1859.js");
let s = require("./77464.js");
let c = require("./88552.js");
let f = {
  route: null,
  node: null,
  dynamicRequestTree: null,
  children: null
};
function d(e, t, r, n, u, s, c, d, y, _) {
  return function e(t, r, n, u, s, c, d, y, _, g, v, b) {
    let m = u[1];
    let R = s[1];
    let E = d !== null ? d[1] : null;
    if (!c) {
      if (s[4] === true) {
        c = true;
      }
    }
    let P = n.parallelRoutes;
    let O = new Map(P);
    let S = {};
    let j = null;
    let T = false;
    let M = {};
    for (let n in R) {
      let u;
      let s = R[n];
      let d = m[n];
      let w = P.get(n);
      let C = E !== null ? E[n] : null;
      let A = s[0];
      let x = v.concat([n, A]);
      let N = (0, i.createRouterCacheKey)(A);
      let U = d !== undefined ? d[0] : undefined;
      let L = w !== undefined ? w.get(N) : undefined;
      if ((u = A === a.DEFAULT_SEGMENT_KEY ? d !== undefined ? function (e, t) {
        let r;
        if (t[3] === "refresh") {
          r = t;
        } else {
          (r = h(t, t[1]))[2] = (0, o.createHrefFromUrl)(e);
          r[3] = "refresh";
        }
        return {
          route: r,
          node: null,
          dynamicRequestTree: null,
          children: null
        };
      }(r, d) : p(t, d, s, L, c, C !== undefined ? C : null, y, _, x, b) : g && Object.keys(s[1]).length === 0 ? p(t, d, s, L, c, C !== undefined ? C : null, y, _, x, b) : d !== undefined && U !== undefined && (0, l.matchSegment)(A, U) && L !== undefined && d !== undefined ? e(t, r, L, d, s, c, C, y, _, g, x, b) : p(t, d, s, L, c, C !== undefined ? C : null, y, _, x, b)) !== null) {
        if (u.route === null) {
          return f;
        }
        if (j === null) {
          j = new Map();
        }
        j.set(n, u);
        let e = u.node;
        if (e !== null) {
          let t = new Map(w);
          t.set(N, e);
          O.set(n, t);
        }
        let t = u.route;
        S[n] = t;
        let r = u.dynamicRequestTree;
        if (r !== null) {
          T = true;
          M[n] = r;
        } else {
          M[n] = t;
        }
      } else {
        S[n] = s;
        M[n] = s;
      }
    }
    if (j === null) {
      return null;
    }
    let w = {
      lazyData: null,
      rsc: n.rsc,
      prefetchRsc: n.prefetchRsc,
      head: n.head,
      prefetchHead: n.prefetchHead,
      loading: n.loading,
      parallelRoutes: O,
      navigatedAt: t
    };
    return {
      route: h(s, S),
      node: w,
      dynamicRequestTree: T ? h(s, M) : null,
      children: j
    };
  }(e, t, r, n, u, false, s, c, d, y, [], _);
}
function p(e, t, r, n, u, a, l, o, d, p) {
  if (!u && (t === undefined || (0, s.isNavigatingToNewRootLayout)(t, r))) {
    return f;
  } else {
    return function e(t, r, n, u, a, l, o, s) {
      let f;
      let d;
      let p;
      let _;
      let g = r[1];
      let v = Object.keys(g).length === 0;
      if (n !== undefined && n.navigatedAt + c.DYNAMIC_STALETIME_MS > t) {
        f = n.rsc;
        d = n.loading;
        p = n.head;
        _ = n.navigatedAt;
      } else if (u === null) {
        return y(t, r, null, a, l, o, s);
      } else {
        f = u[0];
        d = u[2];
        p = v ? a : null;
        _ = t;
        if (u[3] || l && v) {
          return y(t, r, u, a, l, o, s);
        }
      }
      let b = u !== null ? u[1] : null;
      let m = new Map();
      let R = n !== undefined ? n.parallelRoutes : null;
      let E = new Map(R);
      let P = {};
      let O = false;
      if (v) {
        s.push(o);
      } else {
        for (let r in g) {
          let n = g[r];
          let u = b !== null ? b[r] : null;
          let c = R !== null ? R.get(r) : undefined;
          let f = n[0];
          let d = o.concat([r, f]);
          let p = (0, i.createRouterCacheKey)(f);
          let h = e(t, n, c !== undefined ? c.get(p) : undefined, u, a, l, d, s);
          m.set(r, h);
          let y = h.dynamicRequestTree;
          if (y !== null) {
            O = true;
            P[r] = y;
          } else {
            P[r] = n;
          }
          let _ = h.node;
          if (_ !== null) {
            let e = new Map();
            e.set(p, _);
            E.set(r, e);
          }
        }
      }
      return {
        route: r,
        node: {
          lazyData: null,
          rsc: f,
          prefetchRsc: null,
          head: p,
          prefetchHead: null,
          loading: d,
          parallelRoutes: E,
          navigatedAt: _
        },
        dynamicRequestTree: O ? h(r, P) : null,
        children: m
      };
    }(e, r, n, a, l, o, d, p);
  }
}
function h(e, t) {
  let r = [e[0], t];
  if (2 in e) {
    r[2] = e[2];
  }
  if (3 in e) {
    r[3] = e[3];
  }
  if (4 in e) {
    r[4] = e[4];
  }
  return r;
}
function y(e, t, r, n, u, a, l) {
  let o = h(t, t[1]);
  o[3] = "refetch";
  return {
    route: t,
    node: function e(t, r, n, u, a, l, o) {
      let s = r[1];
      let c = n !== null ? n[1] : null;
      let f = new Map();
      for (let r in s) {
        let n = s[r];
        let d = c !== null ? c[r] : null;
        let p = n[0];
        let h = l.concat([r, p]);
        let y = (0, i.createRouterCacheKey)(p);
        let _ = e(t, n, d === undefined ? null : d, u, a, h, o);
        let g = new Map();
        g.set(y, _);
        f.set(r, g);
      }
      let d = f.size === 0;
      if (d) {
        o.push(l);
      }
      let p = n !== null ? n[0] : null;
      return {
        lazyData: null,
        parallelRoutes: f,
        prefetchRsc: p !== undefined ? p : null,
        prefetchHead: d ? u : [null, null],
        rsc: R(),
        head: d ? R() : null,
        loading: n !== null ? n[2] ?? null : R(),
        navigatedAt: t
      };
    }(e, t, r, n, u, a, l),
    dynamicRequestTree: o,
    children: null
  };
}
function _(e, t) {
  t.then(t => {
    if (typeof t == "string") {
      return;
    }
    let {
      flightData: r,
      debugInfo: n
    } = t;
    for (let t of r) {
      let {
        segmentPath: r,
        tree: u,
        seedData: a,
        head: o
      } = t;
      if (a) {
        (function (e, t, r, n, u, a) {
          let o = e;
          for (let e = 0; e < t.length; e += 2) {
            let r = t[e];
            let n = t[e + 1];
            let u = o.children;
            if (u !== null) {
              let e = u.get(r);
              if (e !== undefined) {
                let t = e.route[0];
                if ((0, l.matchSegment)(n, t)) {
                  o = e;
                  continue;
                }
              }
            }
            return;
          }
          (function e(t, r, n, u, a) {
            if (t.dynamicRequestTree === null) {
              return;
            }
            let o = t.children;
            let s = t.node;
            if (o === null) {
              if (s !== null) {
                (function e(t, r, n, u, a, o) {
                  let s = r[1];
                  let c = n[1];
                  let f = u[1];
                  let d = t.parallelRoutes;
                  for (let t in s) {
                    let r = s[t];
                    let n = c[t];
                    let u = f[t];
                    let p = d.get(t);
                    let h = r[0];
                    let y = (0, i.createRouterCacheKey)(h);
                    let _ = p !== undefined ? p.get(y) : undefined;
                    if (_ !== undefined) {
                      if (n !== undefined && (0, l.matchSegment)(h, n[0]) && u != null) {
                        e(_, r, n, u, a, o);
                      } else {
                        v(r, _, null, o);
                      }
                    }
                  }
                  let p = t.rsc;
                  let h = u[0];
                  if (p === null) {
                    t.rsc = h;
                  } else if (m(p)) {
                    p.resolve(h, o);
                  }
                  let y = t.loading;
                  if (m(y)) {
                    let e = u[2];
                    y.resolve(e, o);
                  }
                  let _ = t.head;
                  if (m(_)) {
                    _.resolve(a, o);
                  }
                })(s, t.route, r, n, u, a);
                t.dynamicRequestTree = null;
              }
              return;
            }
            let c = r[1];
            let f = n[1];
            for (let t in r) {
              let r = c[t];
              let n = f[t];
              let i = o.get(t);
              if (i !== undefined) {
                let t = i.route[0];
                if ((0, l.matchSegment)(r[0], t) && n != null) {
                  return e(i, r, n, u, a);
                }
              }
            }
          })(o, r, n, u, a);
        })(e, r, u, a, o, n);
      }
    }
    g(e, null, n);
  }, t => {
    g(e, t, null);
  });
}
function g(e, t, r) {
  let n = e.node;
  if (n === null) {
    return;
  }
  let u = e.children;
  if (u === null) {
    v(e.route, n, t, r);
  } else {
    for (let e of u.values()) {
      g(e, t, r);
    }
  }
  e.dynamicRequestTree = null;
}
function v(e, t, r, n) {
  let u = e[1];
  let a = t.parallelRoutes;
  for (let e in u) {
    let t = u[e];
    let l = a.get(e);
    if (l === undefined) {
      continue;
    }
    let o = t[0];
    let s = (0, i.createRouterCacheKey)(o);
    let c = l.get(s);
    if (c !== undefined) {
      v(t, c, r, n);
    }
  }
  let l = t.rsc;
  if (m(l)) {
    if (r === null) {
      l.resolve(null, n);
    } else {
      l.reject(r, n);
    }
  }
  let o = t.loading;
  if (m(o)) {
    o.resolve(null, n);
  }
  let s = t.head;
  if (m(s)) {
    s.resolve(null, n);
  }
}
let b = Symbol();
function m(e) {
  return e && typeof e == "object" && e.tag === b;
}
function R() {
  let e;
  let t;
  let r = [];
  let n = new Promise((r, n) => {
    e = r;
    t = n;
  });
  n.status = "pending";
  n.resolve = (t, u) => {
    if (n.status === "pending") {
      n.status = "fulfilled";
      n.value = t;
      if (u !== null) {
        r.push.apply(r, u);
      }
      e(t);
    }
  };
  n.reject = (e, u) => {
    if (n.status === "pending") {
      n.status = "rejected";
      n.reason = e;
      if (u !== null) {
        r.push.apply(r, u);
      }
      t(e);
    }
  };
  n.tag = b;
  n._debugInfo = r;
  return n;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}