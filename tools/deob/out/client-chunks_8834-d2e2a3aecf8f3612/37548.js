Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  IDLE_LINK_STATUS: function () {
    return f;
  },
  PENDING_LINK_STATUS: function () {
    return c;
  },
  mountFormInstance: function () {
    return m;
  },
  mountLinkInstance: function () {
    return b;
  },
  onLinkVisibilityChanged: function () {
    return E;
  },
  onNavigationIntent: function () {
    return P;
  },
  pingVisibleLinks: function () {
    return S;
  },
  setLinkForCurrentNavigation: function () {
    return d;
  },
  unmountLinkForCurrentNavigation: function () {
    return p;
  },
  unmountPrefetchableInstance: function () {
    return R;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./35485.js");
let l = require("./3764.js");
let o = require("./35017.js");
let i = require("./87849.js");
let s = null;
let c = {
  pending: true
};
let f = {
  pending: false
};
function d(e) {
  (0, i.startTransition)(() => {
    s?.setOptimisticLinkStatus(f);
    e?.setOptimisticLinkStatus(c);
    s = e;
  });
}
function p(e) {
  if (s === e) {
    s = null;
  }
}
let h = typeof WeakMap == "function" ? new WeakMap() : new Map();
let y = new Set();
let _ = typeof IntersectionObserver == "function" ? new IntersectionObserver(function (e) {
  for (let t of e) {
    let e = t.intersectionRatio > 0;
    E(t.target, e);
  }
}, {
  rootMargin: "200px"
}) : null;
function g(e, t) {
  if (h.get(e) !== undefined) {
    R(e);
  }
  h.set(e, t);
  if (_ !== null) {
    _.observe(e);
  }
}
function v(e) {
  {
    let {
      createPrefetchURL: t
    } = require("./22192.js");
    try {
      return t(e);
    } catch {
      (typeof reportError == "function" ? reportError : console.error)(`Cannot prefetch '${e}' because it cannot be converted to a URL.`);
      return null;
    }
  }
}
function b(e, t, r, n, u, a) {
  if (u) {
    let u = v(t);
    if (u !== null) {
      let t = {
        router: r,
        fetchStrategy: n,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: u.href,
        setOptimisticLinkStatus: a
      };
      g(e, t);
      return t;
    }
  }
  return {
    router: r,
    fetchStrategy: n,
    isVisible: false,
    prefetchTask: null,
    prefetchHref: null,
    setOptimisticLinkStatus: a
  };
}
function m(e, t, r, n) {
  let u = v(t);
  if (u !== null) {
    g(e, {
      router: r,
      fetchStrategy: n,
      isVisible: false,
      prefetchTask: null,
      prefetchHref: u.href,
      setOptimisticLinkStatus: null
    });
  }
}
function R(e) {
  let t = h.get(e);
  if (t !== undefined) {
    h.delete(e);
    y.delete(t);
    let r = t.prefetchTask;
    if (r !== null) {
      (0, o.cancelPrefetchTask)(r);
    }
  }
  if (_ !== null) {
    _.unobserve(e);
  }
}
function E(e, t) {
  let r = h.get(e);
  if (r !== undefined) {
    r.isVisible = t;
    if (t) {
      y.add(r);
    } else {
      y.delete(r);
    }
    O(r, a.PrefetchPriority.Default);
  }
}
function P(e, t) {
  let r = h.get(e);
  if (r !== undefined && r !== undefined) {
    O(r, a.PrefetchPriority.Intent);
  }
}
function O(e, t) {
  {
    let n = e.prefetchTask;
    if (!e.isVisible) {
      if (n !== null) {
        (0, o.cancelPrefetchTask)(n);
      }
      return;
    }
    let {
      getCurrentAppRouterState: u
    } = require("./28076.js");
    let a = u();
    if (a !== null) {
      let r = a.tree;
      if (n === null) {
        let n = a.nextUrl;
        let u = (0, l.createCacheKey)(e.prefetchHref, n);
        e.prefetchTask = (0, o.schedulePrefetchTask)(u, r, e.fetchStrategy, t, null);
      } else {
        (0, o.reschedulePrefetchTask)(n, r, e.fetchStrategy, t);
      }
    }
  }
}
function S(e, t) {
  for (let r of y) {
    let n = r.prefetchTask;
    if (n !== null && !(0, o.isPrefetchTaskDirty)(n, e, t)) {
      continue;
    }
    if (n !== null) {
      (0, o.cancelPrefetchTask)(n);
    }
    let u = (0, l.createCacheKey)(r.prefetchHref, e);
    r.prefetchTask = (0, o.schedulePrefetchTask)(u, t, r.fetchStrategy, a.PrefetchPriority.Default, null);
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}