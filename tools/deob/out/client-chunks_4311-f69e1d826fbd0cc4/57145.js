var n = require("./75984.js");
var i = require("./55194.js");
var a = require("./81497.js");
var o = require("./94654.js");
var s = require("./30531.js");
var u = require("./40117.js");
var l = require("./18411.js");
var c = require("./65968.js");
var d = class extends s.Q {
  constructor(e, t) {
    super();
    this.options = t;
    this.#f = e;
    this.#g = null;
    this.#b = (0, u.T)();
    this.bindMethods();
    this.setOptions(t);
  }
  #f;
  #v = undefined;
  #x = undefined;
  #w = undefined;
  #_;
  #k;
  #b;
  #g;
  #$;
  #S;
  #I;
  #O;
  #E;
  #j;
  #U = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#v.addObserver(this);
      if (h(this.#v, this.options)) {
        this.#T();
      } else {
        this.updateResult();
      }
      this.#A();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return p(this.#v, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return p(this.#v, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = new Set();
    this.#D();
    this.#z();
    this.#v.removeObserver(this);
  }
  setOptions(e) {
    let t = this.options;
    let r = this.#v;
    this.options = this.#f.defaultQueryOptions(e);
    if (this.options.enabled !== undefined && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof (0, l.Eh)(this.options.enabled, this.#v) != "boolean") {
      throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
    }
    this.#N();
    this.#v.setOptions(this.options);
    if (t._defaulted && !(0, l.f8)(this.options, t)) {
      this.#f.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#v,
        observer: this
      });
    }
    let n = this.hasListeners();
    if (n && m(this.#v, r, this.options, t)) {
      this.#T();
    }
    this.updateResult();
    if (n && (this.#v !== r || (0, l.Eh)(this.options.enabled, this.#v) !== (0, l.Eh)(t.enabled, this.#v) || (0, l.d2)(this.options.staleTime, this.#v) !== (0, l.d2)(t.staleTime, this.#v))) {
      this.#P();
    }
    let i = this.#R();
    if (n && (this.#v !== r || (0, l.Eh)(this.options.enabled, this.#v) !== (0, l.Eh)(t.enabled, this.#v) || i !== this.#j)) {
      this.#C(i);
    }
  }
  getOptimisticResult(e) {
    let t = this.#f.getQueryCache().build(this.#f, e);
    let r = this.createResult(t, e);
    if (g(this, r)) {
      this.#w = r;
      this.#k = this.options;
      this.#_ = this.#v.state;
    }
    return r;
  }
  getCurrentResult() {
    return this.#w;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, r) => {
        this.trackProp(r);
        t?.(r);
        if (r === "promise" && !this.options.experimental_prefetchInRender && this.#b.status === "pending") {
          this.#b.reject(Error("experimental_prefetchInRender feature flag is not enabled"));
        }
        return Reflect.get(e, r);
      }
    });
  }
  trackProp(e) {
    this.#U.add(e);
  }
  getCurrentQuery() {
    return this.#v;
  }
  refetch({
    ...e
  } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    let t = this.#f.defaultQueryOptions(e);
    let r = this.#f.getQueryCache().build(this.#f, t);
    return r.fetch().then(() => this.createResult(r, t));
  }
  fetch(e) {
    return this.#T({
      ...e,
      cancelRefetch: e.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#w;
    });
  }
  #T(e) {
    this.#N();
    let t = this.#v.fetch(this.options, e);
    if (!e?.throwOnError) {
      t = t.catch(l.lQ);
    }
    return t;
  }
  #P() {
    this.#D();
    let e = (0, l.d2)(this.options.staleTime, this.#v);
    if (l.S$ || this.#w.isStale || !(0, l.gn)(e)) {
      return;
    }
    let t = (0, l.j3)(this.#w.dataUpdatedAt, e) + 1;
    this.#O = c.zs.setTimeout(() => {
      if (!this.#w.isStale) {
        this.updateResult();
      }
    }, t);
  }
  #R() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#v) : this.options.refetchInterval) ?? false;
  }
  #C(e) {
    this.#z();
    this.#j = e;
    if (!l.S$ && (0, l.Eh)(this.options.enabled, this.#v) !== false && (0, l.gn)(this.#j) && this.#j !== 0) {
      this.#E = c.zs.setInterval(() => {
        if (this.options.refetchIntervalInBackground || a.m.isFocused()) {
          this.#T();
        }
      }, this.#j);
    }
  }
  #A() {
    this.#P();
    this.#C(this.#R());
  }
  #D() {
    if (this.#O) {
      c.zs.clearTimeout(this.#O);
      this.#O = undefined;
    }
  }
  #z() {
    if (this.#E) {
      c.zs.clearInterval(this.#E);
      this.#E = undefined;
    }
  }
  createResult(e, t) {
    let r;
    let n = this.#v;
    let i = this.options;
    let a = this.#w;
    let s = this.#_;
    let c = this.#k;
    let d = e !== n ? e.state : this.#x;
    let {
      state: f
    } = e;
    let p = {
      ...f
    };
    let g = false;
    if (t._optimisticResults) {
      let r = this.hasListeners();
      let a = !r && h(e, t);
      let s = r && m(e, n, t, i);
      if (a || s) {
        p = {
          ...p,
          ...(0, o.k)(f.data, e.options)
        };
      }
      if (t._optimisticResults === "isRestoring") {
        p.fetchStatus = "idle";
      }
    }
    let {
      error: b,
      errorUpdatedAt: v,
      status: x
    } = p;
    r = p.data;
    let w = false;
    if (t.placeholderData !== undefined && r === undefined && x === "pending") {
      let e;
      if (a?.isPlaceholderData && t.placeholderData === c?.placeholderData) {
        e = a.data;
        w = true;
      } else {
        e = typeof t.placeholderData == "function" ? t.placeholderData(this.#I?.state.data, this.#I) : t.placeholderData;
      }
      if (e !== undefined) {
        x = "success";
        r = (0, l.pl)(a?.data, e, t);
        g = true;
      }
    }
    if (t.select && r !== undefined && !w) {
      if (a && r === s?.data && t.select === this.#$) {
        r = this.#S;
      } else {
        try {
          this.#$ = t.select;
          r = t.select(r);
          r = (0, l.pl)(a?.data, r, t);
          this.#S = r;
          this.#g = null;
        } catch (e) {
          this.#g = e;
        }
      }
    }
    if (this.#g) {
      b = this.#g;
      r = this.#S;
      v = Date.now();
      x = "error";
    }
    let _ = p.fetchStatus === "fetching";
    let k = x === "pending";
    let $ = x === "error";
    let S = k && _;
    let I = r !== undefined;
    let O = {
      status: x,
      fetchStatus: p.fetchStatus,
      isPending: k,
      isSuccess: x === "success",
      isError: $,
      isInitialLoading: S,
      isLoading: S,
      data: r,
      dataUpdatedAt: p.dataUpdatedAt,
      error: b,
      errorUpdatedAt: v,
      failureCount: p.fetchFailureCount,
      failureReason: p.fetchFailureReason,
      errorUpdateCount: p.errorUpdateCount,
      isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
      isFetchedAfterMount: p.dataUpdateCount > d.dataUpdateCount || p.errorUpdateCount > d.errorUpdateCount,
      isFetching: _,
      isRefetching: _ && !k,
      isLoadingError: $ && !I,
      isPaused: p.fetchStatus === "paused",
      isPlaceholderData: g,
      isRefetchError: $ && I,
      isStale: y(e, t),
      refetch: this.refetch,
      promise: this.#b,
      isEnabled: (0, l.Eh)(t.enabled, e) !== false
    };
    if (this.options.experimental_prefetchInRender) {
      let t = e => {
        if (O.status === "error") {
          e.reject(O.error);
        } else if (O.data !== undefined) {
          e.resolve(O.data);
        }
      };
      let r = () => {
        t(this.#b = O.promise = (0, u.T)());
      };
      let i = this.#b;
      switch (i.status) {
        case "pending":
          if (e.queryHash === n.queryHash) {
            t(i);
          }
          break;
        case "fulfilled":
          if (O.status === "error" || O.data !== i.value) {
            r();
          }
          break;
        case "rejected":
          if (O.status !== "error" || O.error !== i.reason) {
            r();
          }
      }
    }
    return O;
  }
  updateResult() {
    let e = this.#w;
    let t = this.createResult(this.#v, this.options);
    this.#_ = this.#v.state;
    this.#k = this.options;
    if (this.#_.data !== undefined) {
      this.#I = this.#v;
    }
    if ((0, l.f8)(t, e)) {
      return;
    }
    this.#w = t;
    let r = () => {
      if (!e) {
        return true;
      }
      let {
        notifyOnChangeProps: t
      } = this.options;
      let r = typeof t == "function" ? t() : t;
      if (r === "all" || !r && !this.#U.size) {
        return true;
      }
      let n = new Set(r ?? this.#U);
      if (this.options.throwOnError) {
        n.add("error");
      }
      return Object.keys(this.#w).some(t => {
        let r = t;
        return this.#w[r] !== e[r] && n.has(r);
      });
    };
    this.#M({
      listeners: r()
    });
  }
  #N() {
    let e = this.#f.getQueryCache().build(this.#f, this.options);
    if (e === this.#v) {
      return;
    }
    let t = this.#v;
    this.#v = e;
    this.#x = e.state;
    if (this.hasListeners()) {
      t?.removeObserver(this);
      e.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#A();
    }
  }
  #M(e) {
    i.jG.batch(() => {
      if (e.listeners) {
        this.listeners.forEach(e => {
          e(this.#w);
        });
      }
      this.#f.getQueryCache().notify({
        query: this.#v,
        type: "observerResultsUpdated"
      });
    });
  }
};
function f(e, t) {
  return (0, l.Eh)(t.enabled, e) !== false && e.state.data === undefined && (e.state.status !== "error" || t.retryOnMount !== false);
}
function h(e, t) {
  return f(e, t) || e.state.data !== undefined && p(e, t, t.refetchOnMount);
}
function p(e, t, r) {
  if ((0, l.Eh)(t.enabled, e) !== false && (0, l.d2)(t.staleTime, e) !== "static") {
    let n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== false && y(e, t);
  }
  return false;
}
function m(e, t, r, n) {
  return (e !== t || (0, l.Eh)(n.enabled, e) === false) && (!r.suspense || e.state.status !== "error") && y(e, r);
}
function y(e, t) {
  return (0, l.Eh)(t.enabled, e) !== false && e.isStaleByTime((0, l.d2)(t.staleTime, e));
}
function g(e, t) {
  return !(0, l.f8)(e.getCurrentResult(), t);
}
var b = require("./31585.js");
var v = class extends s.Q {
  #f;
  #w = undefined;
  #L;
  #Z;
  constructor(e, t) {
    super();
    this.#f = e;
    this.setOptions(t);
    this.bindMethods();
    this.#F();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    let t = this.options;
    this.options = this.#f.defaultMutationOptions(e);
    if (!(0, l.f8)(this.options, t)) {
      this.#f.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#L,
        observer: this
      });
    }
    if (t?.mutationKey && this.options.mutationKey && (0, l.EN)(t.mutationKey) !== (0, l.EN)(this.options.mutationKey)) {
      this.reset();
    } else if (this.#L?.state.status === "pending") {
      this.#L.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#L?.removeObserver(this);
    }
  }
  onMutationUpdate(e) {
    this.#F();
    this.#M(e);
  }
  getCurrentResult() {
    return this.#w;
  }
  reset() {
    this.#L?.removeObserver(this);
    this.#L = undefined;
    this.#F();
    this.#M();
  }
  mutate(e, t) {
    this.#Z = t;
    this.#L?.removeObserver(this);
    this.#L = this.#f.getMutationCache().build(this.#f, this.options);
    this.#L.addObserver(this);
    return this.#L.execute(e);
  }
  #F() {
    let e = this.#L?.state ?? (0, b.$)();
    this.#w = {
      ...e,
      isPending: e.status === "pending",
      isSuccess: e.status === "success",
      isError: e.status === "error",
      isIdle: e.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #M(e) {
    i.jG.batch(() => {
      if (this.#Z && this.hasListeners()) {
        let t = this.#w.variables;
        let r = this.#w.context;
        let n = {
          client: this.#f,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey
        };
        if (e?.type === "success") {
          this.#Z.onSuccess?.(e.data, t, r, n);
          this.#Z.onSettled?.(e.data, null, t, r, n);
        } else if (e?.type === "error") {
          this.#Z.onError?.(e.error, t, r, n);
          this.#Z.onSettled?.(undefined, e.error, t, r, n);
        }
      }
      this.listeners.forEach(e => {
        e(this.#w);
      });
    });
  }
};
var x = require(/*webcrack:missing*/"./22814.js");
let w = (e, t, r) => e?.suspense && _(t);
let _ = (e, t) => e.isPending && true;
let k = ({
  result: e,
  throwOnError: t,
  query: r
}) => e.isError && !e.isFetching && $(t, [e.error, r]);
function $(e, t) {
  if (typeof e == "function") {
    return e(...t);
  } else {
    return !!e;
  }
}
let S = e => e.suspense && typeof e.staleTime != "number" ? {
  ...e,
  staleTime: 1000
} : e;
function I(e, t, r = e => e(n.l)) {
  let a = (0, x.eU)(0);
  let o = (0, x.eU)(r);
  let s = (0, x.eU)(() => new WeakMap());
  let u = (0, x.eU)(t => {
    let r = t(o);
    let n = e(t);
    let i = r.defaultQueryOptions(n);
    let a = t(s).get(r);
    i._optimisticResults = "optimistic";
    if (a) {
      a.setOptions(i);
    }
    return S(i);
  });
  let l = (0, x.eU)(e => {
    let r = e(o);
    let n = e(u);
    let i = e(s);
    let a = i.get(r);
    if (a) {
      return a;
    }
    let l = new t(r, n);
    i.set(r, l);
    return l;
  });
  let c = (0, x.eU)(e => {
    let t = e(l);
    let r = e(u);
    let n = t.getOptimisticResult(r);
    let a = (0, x.eU)(n);
    a.onMount = e => {
      let r = t.subscribe(i.jG.batchCalls(e));
      return () => {
        if (t.getCurrentResult().isError) {
          t.getCurrentQuery().reset();
        }
        r();
      };
    };
    return a;
  });
  return (0, x.eU)(e => {
    e(a);
    let t = e(l);
    let r = e(u);
    let n = e(e(c));
    if (w(r, n)) {
      return t.fetchOptimistic(r);
    }
    if (k({
      result: n,
      query: t.getCurrentQuery(),
      throwOnError: r.throwOnError
    })) {
      throw n.error;
    }
    return n;
  }, (e, t) => {
    t(a, e => e + 1);
  });
}
export function qA(e, t = e => e(n.l)) {
  return I(e, d, t);
}
export function vy(e, t = e => e(n.l)) {
  let r = Symbol();
  let a = (0, x.eU)(r => {
    let n = t(r);
    let i = e(r);
    return n.defaultMutationOptions(i);
  });
  let o = (0, x.eU)(() => new WeakMap());
  let s = (0, x.eU)(e => {
    let n = e(a);
    let i = t(e);
    let s = e(o);
    let u = s.get(i);
    if (u) {
      u[r] = true;
      u.setOptions(n);
      delete u[r];
      return u;
    }
    let l = new v(i, n);
    s.set(i, l);
    return l;
  });
  let u = (0, x.eU)(e => {
    let t = e(s);
    let r = t.getCurrentResult();
    let n = (0, x.eU)(r);
    n.onMount = e => {
      t.subscribe(i.jG.batchCalls(e));
      return () => {
        t.reset();
      };
    };
    return n;
  });
  let l = (0, x.eU)(e => {
    let t = e(s);
    return (e, r) => {
      t.mutate(e, r).catch(j);
    };
  });
  return (0, x.eU)(e => {
    let t = e(s);
    let r = e(u);
    let n = e(r);
    let i = e(l);
    if (n.isError && $(t.options.throwOnError, [n.error])) {
      throw n.error;
    }
    return {
      ...n,
      mutate: i,
      mutateAsync: n.mutate
    };
  });
}
function j() {}