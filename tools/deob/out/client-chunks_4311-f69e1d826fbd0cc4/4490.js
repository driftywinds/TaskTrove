var n = require("./18411.js");
var i = require("./94654.js");
var a = require("./55194.js");
var o = require("./30531.js");
var s = class extends o.Q {
  constructor(e = {}) {
    super();
    this.config = e;
    this.#e = new Map();
  }
  #e;
  build(e, t, r) {
    let a = t.queryKey;
    let o = t.queryHash ?? (0, n.F$)(a, t);
    let s = this.get(o);
    if (!s) {
      s = new i.X({
        client: e,
        queryKey: a,
        queryHash: o,
        options: e.defaultQueryOptions(t),
        state: r,
        defaultOptions: e.getQueryDefaults(a)
      });
      this.add(s);
    }
    return s;
  }
  add(e) {
    if (!this.#e.has(e.queryHash)) {
      this.#e.set(e.queryHash, e);
      this.notify({
        type: "added",
        query: e
      });
    }
  }
  remove(e) {
    let t = this.#e.get(e.queryHash);
    if (t) {
      e.destroy();
      if (t === e) {
        this.#e.delete(e.queryHash);
      }
      this.notify({
        type: "removed",
        query: e
      });
    }
  }
  clear() {
    a.jG.batch(() => {
      this.getAll().forEach(e => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.#e.get(e);
  }
  getAll() {
    return [...this.#e.values()];
  }
  find(e) {
    let t = {
      exact: true,
      ...e
    };
    return this.getAll().find(e => (0, n.MK)(t, e));
  }
  findAll(e = {}) {
    let t = this.getAll();
    if (Object.keys(e).length > 0) {
      return t.filter(t => (0, n.MK)(e, t));
    } else {
      return t;
    }
  }
  notify(e) {
    a.jG.batch(() => {
      this.listeners.forEach(t => {
        t(e);
      });
    });
  }
  onFocus() {
    a.jG.batch(() => {
      this.getAll().forEach(e => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    a.jG.batch(() => {
      this.getAll().forEach(e => {
        e.onOnline();
      });
    });
  }
};
var u = require("./31585.js");
var l = class extends o.Q {
  constructor(e = {}) {
    super();
    this.config = e;
    this.#t = new Set();
    this.#r = new Map();
    this.#n = 0;
  }
  #t;
  #r;
  #n;
  build(e, t, r) {
    let n = new u.s({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: r
    });
    this.add(n);
    return n;
  }
  add(e) {
    this.#t.add(e);
    let t = c(e);
    if (typeof t == "string") {
      let r = this.#r.get(t);
      if (r) {
        r.push(e);
      } else {
        this.#r.set(t, [e]);
      }
    }
    this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    if (this.#t.delete(e)) {
      let t = c(e);
      if (typeof t == "string") {
        let r = this.#r.get(t);
        if (r) {
          if (r.length > 1) {
            let t = r.indexOf(e);
            if (t !== -1) {
              r.splice(t, 1);
            }
          } else if (r[0] === e) {
            this.#r.delete(t);
          }
        }
      }
    }
    this.notify({
      type: "removed",
      mutation: e
    });
  }
  canRun(e) {
    let t = c(e);
    if (typeof t != "string") {
      return true;
    }
    {
      let r = this.#r.get(t);
      let n = r?.find(e => e.state.status === "pending");
      return !n || n === e;
    }
  }
  runNext(e) {
    let t = c(e);
    if (typeof t != "string") {
      return Promise.resolve();
    }
    {
      let r = this.#r.get(t)?.find(t => t !== e && t.state.isPaused);
      return r?.continue() ?? Promise.resolve();
    }
  }
  clear() {
    a.jG.batch(() => {
      this.#t.forEach(e => {
        this.notify({
          type: "removed",
          mutation: e
        });
      });
      this.#t.clear();
      this.#r.clear();
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(e) {
    let t = {
      exact: true,
      ...e
    };
    return this.getAll().find(e => (0, n.nJ)(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter(t => (0, n.nJ)(e, t));
  }
  notify(e) {
    a.jG.batch(() => {
      this.listeners.forEach(t => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter(e => e.state.isPaused);
    return a.jG.batch(() => Promise.all(e.map(e => e.continue().catch(n.lQ))));
  }
};
function c(e) {
  return e.options.scope?.id;
}
var d = require("./81497.js");
var f = require("./86832.js");
function h(e) {
  return {
    onFetch: (t, r) => {
      let i = t.options;
      let a = t.fetchOptions?.meta?.fetchMore?.direction;
      let o = t.state.data?.pages || [];
      let s = t.state.data?.pageParams || [];
      let u = {
        pages: [],
        pageParams: []
      };
      let l = 0;
      let c = async () => {
        let r = false;
        let c = e => {
          Object.defineProperty(e, "signal", {
            enumerable: true,
            get: () => {
              if (t.signal.aborted) {
                r = true;
              } else {
                t.signal.addEventListener("abort", () => {
                  r = true;
                });
              }
              return t.signal;
            }
          });
        };
        let d = (0, n.ZM)(t.options, t.fetchOptions);
        let f = async (e, i, a) => {
          if (r) {
            return Promise.reject();
          }
          if (i == null && e.pages.length) {
            return Promise.resolve(e);
          }
          let o = (() => {
            let e = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: i,
              direction: a ? "backward" : "forward",
              meta: t.options.meta
            };
            c(e);
            return e;
          })();
          let s = await d(o);
          let {
            maxPages: u
          } = t.options;
          let l = a ? n.ZZ : n.y9;
          return {
            pages: l(e.pages, s, u),
            pageParams: l(e.pageParams, i, u)
          };
        };
        if (a && o.length) {
          let e = a === "backward";
          let t = {
            pages: o,
            pageParams: s
          };
          let r = (e ? m : p)(i, t);
          u = await f(t, r, e);
        } else {
          let t = e ?? o.length;
          do {
            let e = l === 0 ? s[0] ?? i.initialPageParam : p(i, u);
            if (l > 0 && e == null) {
              break;
            }
            u = await f(u, e);
            l++;
          } while (l < t);
        }
        return u;
      };
      if (t.options.persister) {
        t.fetchFn = () => t.options.persister?.(c, {
          client: t.client,
          queryKey: t.queryKey,
          meta: t.options.meta,
          signal: t.signal
        }, r);
      } else {
        t.fetchFn = c;
      }
    }
  };
}
function p(e, {
  pages: t,
  pageParams: r
}) {
  let n = t.length - 1;
  if (t.length > 0) {
    return e.getNextPageParam(t[n], t, r[n], r);
  } else {
    return undefined;
  }
}
function m(e, {
  pages: t,
  pageParams: r
}) {
  if (t.length > 0) {
    return e.getPreviousPageParam?.(t[0], t, r[0], r);
  } else {
    return undefined;
  }
}
export var E = class {
  #i;
  #a;
  #o;
  #s;
  #u;
  #l;
  #c;
  #d;
  constructor(e = {}) {
    this.#i = e.queryCache || new s();
    this.#a = e.mutationCache || new l();
    this.#o = e.defaultOptions || {};
    this.#s = new Map();
    this.#u = new Map();
    this.#l = 0;
  }
  mount() {
    this.#l++;
    if (this.#l === 1) {
      this.#c = d.m.subscribe(async e => {
        if (e) {
          await this.resumePausedMutations();
          this.#i.onFocus();
        }
      });
      this.#d = f.t.subscribe(async e => {
        if (e) {
          await this.resumePausedMutations();
          this.#i.onOnline();
        }
      });
    }
  }
  unmount() {
    this.#l--;
    if (this.#l === 0) {
      this.#c?.();
      this.#c = undefined;
      this.#d?.();
      this.#d = undefined;
    }
  }
  isFetching(e) {
    return this.#i.findAll({
      ...e,
      fetchStatus: "fetching"
    }).length;
  }
  isMutating(e) {
    return this.#a.findAll({
      ...e,
      status: "pending"
    }).length;
  }
  getQueryData(e) {
    let t = this.defaultQueryOptions({
      queryKey: e
    });
    return this.#i.get(t.queryHash)?.state.data;
  }
  ensureQueryData(e) {
    let t = this.defaultQueryOptions(e);
    let r = this.#i.build(this, t);
    let i = r.state.data;
    if (i === undefined) {
      return this.fetchQuery(e);
    } else {
      if (e.revalidateIfStale && r.isStaleByTime((0, n.d2)(t.staleTime, r))) {
        this.prefetchQuery(t);
      }
      return Promise.resolve(i);
    }
  }
  getQueriesData(e) {
    return this.#i.findAll(e).map(({
      queryKey: e,
      state: t
    }) => [e, t.data]);
  }
  setQueryData(e, t, r) {
    let i = this.defaultQueryOptions({
      queryKey: e
    });
    let a = this.#i.get(i.queryHash);
    let o = a?.state.data;
    let s = (0, n.Zw)(t, o);
    if (s !== undefined) {
      return this.#i.build(this, i).setData(s, {
        ...r,
        manual: true
      });
    }
  }
  setQueriesData(e, t, r) {
    return a.jG.batch(() => this.#i.findAll(e).map(({
      queryKey: e
    }) => [e, this.setQueryData(e, t, r)]));
  }
  getQueryState(e) {
    let t = this.defaultQueryOptions({
      queryKey: e
    });
    return this.#i.get(t.queryHash)?.state;
  }
  removeQueries(e) {
    let t = this.#i;
    a.jG.batch(() => {
      t.findAll(e).forEach(e => {
        t.remove(e);
      });
    });
  }
  resetQueries(e, t) {
    let r = this.#i;
    return a.jG.batch(() => {
      r.findAll(e).forEach(e => {
        e.reset();
      });
      return this.refetchQueries({
        type: "active",
        ...e
      }, t);
    });
  }
  cancelQueries(e, t = {}) {
    let r = {
      revert: true,
      ...t
    };
    return Promise.all(a.jG.batch(() => this.#i.findAll(e).map(e => e.cancel(r)))).then(n.lQ).catch(n.lQ);
  }
  invalidateQueries(e, t = {}) {
    return a.jG.batch(() => (this.#i.findAll(e).forEach(e => {
      e.invalidate();
    }), e?.refetchType === "none") ? Promise.resolve() : this.refetchQueries({
      ...e,
      type: e?.refetchType ?? e?.type ?? "active"
    }, t));
  }
  refetchQueries(e, t = {}) {
    let r = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? true
    };
    return Promise.all(a.jG.batch(() => this.#i.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
      let t = e.fetch(undefined, r);
      if (!r.throwOnError) {
        t = t.catch(n.lQ);
      }
      if (e.state.fetchStatus === "paused") {
        return Promise.resolve();
      } else {
        return t;
      }
    }))).then(n.lQ);
  }
  fetchQuery(e) {
    let t = this.defaultQueryOptions(e);
    if (t.retry === undefined) {
      t.retry = false;
    }
    let r = this.#i.build(this, t);
    if (r.isStaleByTime((0, n.d2)(t.staleTime, r))) {
      return r.fetch(t);
    } else {
      return Promise.resolve(r.state.data);
    }
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(n.lQ).catch(n.lQ);
  }
  fetchInfiniteQuery(e) {
    e.behavior = h(e.pages);
    return this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(n.lQ).catch(n.lQ);
  }
  ensureInfiniteQueryData(e) {
    e.behavior = h(e.pages);
    return this.ensureQueryData(e);
  }
  resumePausedMutations() {
    if (f.t.isOnline()) {
      return this.#a.resumePausedMutations();
    } else {
      return Promise.resolve();
    }
  }
  getQueryCache() {
    return this.#i;
  }
  getMutationCache() {
    return this.#a;
  }
  getDefaultOptions() {
    return this.#o;
  }
  setDefaultOptions(e) {
    this.#o = e;
  }
  setQueryDefaults(e, t) {
    this.#s.set((0, n.EN)(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    let t = [...this.#s.values()];
    let r = {};
    t.forEach(t => {
      if ((0, n.Cp)(e, t.queryKey)) {
        Object.assign(r, t.defaultOptions);
      }
    });
    return r;
  }
  setMutationDefaults(e, t) {
    this.#u.set((0, n.EN)(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    let t = [...this.#u.values()];
    let r = {};
    t.forEach(t => {
      if ((0, n.Cp)(e, t.mutationKey)) {
        Object.assign(r, t.defaultOptions);
      }
    });
    return r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted) {
      return e;
    }
    let t = {
      ...this.#o.queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: true
    };
    t.queryHash ||= (0, n.F$)(t.queryKey, t);
    if (t.refetchOnReconnect === undefined) {
      t.refetchOnReconnect = t.networkMode !== "always";
    }
    if (t.throwOnError === undefined) {
      t.throwOnError = !!t.suspense;
    }
    if (!t.networkMode && t.persister) {
      t.networkMode = "offlineFirst";
    }
    if (t.queryFn === n.hT) {
      t.enabled = false;
    }
    return t;
  }
  defaultMutationOptions(e) {
    if (e?._defaulted) {
      return e;
    } else {
      return {
        ...this.#o.mutations,
        ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
        ...e,
        _defaulted: true
      };
    }
  }
  clear() {
    this.#i.clear();
    this.#a.clear();
  }
};