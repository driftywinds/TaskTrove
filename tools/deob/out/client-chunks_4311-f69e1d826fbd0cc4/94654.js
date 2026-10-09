var n = require("./18411.js");
var i = require("./55194.js");
var a = require("./37315.js");
var o = require("./56179.js");
export var X = class extends o.k {
  #J;
  #X;
  #Q;
  #f;
  #p;
  #o;
  #K;
  constructor(e) {
    super();
    this.#K = false;
    this.#o = e.defaultOptions;
    this.setOptions(e.options);
    this.observers = [];
    this.#f = e.client;
    this.#Q = this.#f.getQueryCache();
    this.queryKey = e.queryKey;
    this.queryHash = e.queryHash;
    this.#J = l(this.options);
    this.state = e.state ?? this.#J;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#p?.promise;
  }
  setOptions(e) {
    this.options = {
      ...this.#o,
      ...e
    };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === undefined) {
      let e = l(this.options);
      if (e.data !== undefined) {
        this.setData(e.data, {
          updatedAt: e.dataUpdatedAt,
          manual: true
        });
        this.#J = e;
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.#Q.remove(this);
    }
  }
  setData(e, t) {
    let r = (0, n.pl)(this.state.data, e, this.options);
    this.#m({
      data: r,
      type: "success",
      dataUpdatedAt: t?.updatedAt,
      manual: t?.manual
    });
    return r;
  }
  setState(e, t) {
    this.#m({
      type: "setState",
      state: e,
      setStateOptions: t
    });
  }
  cancel(e) {
    let t = this.#p?.promise;
    this.#p?.cancel(e);
    if (t) {
      return t.then(n.lQ).catch(n.lQ);
    } else {
      return Promise.resolve();
    }
  }
  destroy() {
    super.destroy();
    this.cancel({
      silent: true
    });
  }
  reset() {
    this.destroy();
    this.setState(this.#J);
  }
  isActive() {
    return this.observers.some(e => (0, n.Eh)(e.options.enabled, this) !== false);
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    } else {
      return this.options.queryFn === n.hT || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
  }
  isStatic() {
    return this.getObserversCount() > 0 && this.observers.some(e => (0, n.d2)(e.options.staleTime, this) === "static");
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(e => e.getCurrentResult().isStale);
    } else {
      return this.state.data === undefined || this.state.isInvalidated;
    }
  }
  isStaleByTime(e = 0) {
    return this.state.data === undefined || e !== "static" && (!!this.state.isInvalidated || !(0, n.j3)(this.state.dataUpdatedAt, e));
  }
  onFocus() {
    let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
    e?.refetch({
      cancelRefetch: false
    });
    this.#p?.continue();
  }
  onOnline() {
    let e = this.observers.find(e => e.shouldFetchOnReconnect());
    e?.refetch({
      cancelRefetch: false
    });
    this.#p?.continue();
  }
  addObserver(e) {
    if (!this.observers.includes(e)) {
      this.observers.push(e);
      this.clearGcTimeout();
      this.#Q.notify({
        type: "observerAdded",
        query: this,
        observer: e
      });
    }
  }
  removeObserver(e) {
    if (this.observers.includes(e)) {
      this.observers = this.observers.filter(t => t !== e);
      if (!this.observers.length) {
        if (this.#p) {
          if (this.#K) {
            this.#p.cancel({
              revert: true
            });
          } else {
            this.#p.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#Q.notify({
        type: "observerRemoved",
        query: this,
        observer: e
      });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#m({
        type: "invalidate"
      });
    }
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== "idle" && this.#p?.status() !== "rejected") {
      if (this.state.data !== undefined && t?.cancelRefetch) {
        this.cancel({
          silent: true
        });
      } else if (this.#p) {
        this.#p.continueRetry();
        return this.#p.promise;
      }
    }
    if (e) {
      this.setOptions(e);
    }
    if (!this.options.queryFn) {
      let e = this.observers.find(e => e.options.queryFn);
      if (e) {
        this.setOptions(e.options);
      }
    }
    let r = new AbortController();
    let i = e => {
      Object.defineProperty(e, "signal", {
        enumerable: true,
        get: () => {
          this.#K = true;
          return r.signal;
        }
      });
    };
    let o = () => {
      let e = (0, n.ZM)(this.options, t);
      let r = (() => {
        let e = {
          client: this.#f,
          queryKey: this.queryKey,
          meta: this.meta
        };
        i(e);
        return e;
      })();
      this.#K = false;
      if (this.options.persister) {
        return this.options.persister(e, r, this);
      } else {
        return e(r);
      }
    };
    let s = (() => {
      let e = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#f,
        state: this.state,
        fetchFn: o
      };
      i(e);
      return e;
    })();
    this.options.behavior?.onFetch(s, this);
    this.#X = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== s.fetchOptions?.meta) {
      this.#m({
        type: "fetch",
        meta: s.fetchOptions?.meta
      });
    }
    this.#p = (0, a.II)({
      initialPromise: t?.initialPromise,
      fn: s.fetchFn,
      onCancel: e => {
        if (e instanceof a.cc && e.revert) {
          this.setState({
            ...this.#X,
            fetchStatus: "idle"
          });
        }
        r.abort();
      },
      onFail: (e, t) => {
        this.#m({
          type: "failed",
          failureCount: e,
          error: t
        });
      },
      onPause: () => {
        this.#m({
          type: "pause"
        });
      },
      onContinue: () => {
        this.#m({
          type: "continue"
        });
      },
      retry: s.options.retry,
      retryDelay: s.options.retryDelay,
      networkMode: s.options.networkMode,
      canRun: () => true
    });
    try {
      let e = await this.#p.start();
      if (e === undefined) {
        throw Error(`${this.queryHash} data is undefined`);
      }
      this.setData(e);
      this.#Q.config.onSuccess?.(e, this);
      this.#Q.config.onSettled?.(e, this.state.error, this);
      return e;
    } catch (e) {
      if (e instanceof a.cc) {
        if (e.silent) {
          return this.#p.promise;
        } else if (e.revert) {
          if (this.state.data === undefined) {
            throw e;
          }
          return this.state.data;
        }
      }
      this.#m({
        type: "error",
        error: e
      });
      this.#Q.config.onError?.(e, this);
      this.#Q.config.onSettled?.(this.state.data, e, this);
      throw e;
    } finally {
      this.scheduleGc();
    }
  }
  #m(e) {
    let t = t => {
      switch (e.type) {
        case "failed":
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...t,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...t,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...t,
            ...k(t.data, this.options),
            fetchMeta: e.meta ?? null
          };
        case "success":
          let r = {
            ...t,
            data: e.data,
            dataUpdateCount: t.dataUpdateCount + 1,
            dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...(!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            })
          };
          this.#X = e.manual ? r : undefined;
          return r;
        case "error":
          let n = e.error;
          return {
            ...t,
            error: n,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: n,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...t,
            isInvalidated: true
          };
        case "setState":
          return {
            ...t,
            ...e.state
          };
      }
    };
    this.state = t(this.state);
    i.jG.batch(() => {
      this.observers.forEach(e => {
        e.onQueryUpdate();
      });
      this.#Q.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
};
export function k(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: (0, a.v_)(t.networkMode) ? "fetching" : "paused",
    ...(e === undefined && {
      error: null,
      status: "pending"
    })
  };
}
function l(e) {
  let t = typeof e.initialData == "function" ? e.initialData() : e.initialData;
  let r = t !== undefined;
  let n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}