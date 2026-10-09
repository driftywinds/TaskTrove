var n = require("./55194.js");
var i = require("./56179.js");
var a = require("./37315.js");
export var s = class extends i.k {
  #f;
  #h;
  #a;
  #p;
  constructor(e) {
    super();
    this.#f = e.client;
    this.mutationId = e.mutationId;
    this.#a = e.mutationCache;
    this.#h = [];
    this.state = e.state || $();
    this.setOptions(e.options);
    this.scheduleGc();
  }
  setOptions(e) {
    this.options = e;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    if (!this.#h.includes(e)) {
      this.#h.push(e);
      this.clearGcTimeout();
      this.#a.notify({
        type: "observerAdded",
        mutation: this,
        observer: e
      });
    }
  }
  removeObserver(e) {
    this.#h = this.#h.filter(t => t !== e);
    this.scheduleGc();
    this.#a.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    if (!this.#h.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#a.remove(this);
      }
    }
  }
  continue() {
    return this.#p?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
      this.#m({
        type: "continue"
      });
    };
    let r = {
      client: this.#f,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#p = (0, a.II)({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e, r) : Promise.reject(Error("No mutationFn found")),
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
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#a.canRun(this)
    });
    let n = this.state.status === "pending";
    let i = !this.#p.canStart();
    try {
      if (n) {
        t();
      } else {
        this.#m({
          type: "pending",
          variables: e,
          isPaused: i
        });
        await this.#a.config.onMutate?.(e, this, r);
        let t = await this.options.onMutate?.(e, r);
        if (t !== this.state.context) {
          this.#m({
            type: "pending",
            context: t,
            variables: e,
            isPaused: i
          });
        }
      }
      let a = await this.#p.start();
      await this.#a.config.onSuccess?.(a, e, this.state.context, this, r);
      await this.options.onSuccess?.(a, e, this.state.context, r);
      await this.#a.config.onSettled?.(a, null, this.state.variables, this.state.context, this, r);
      await this.options.onSettled?.(a, null, e, this.state.context, r);
      this.#m({
        type: "success",
        data: a
      });
      return a;
    } catch (t) {
      try {
        await this.#a.config.onError?.(t, e, this.state.context, this, r);
        await this.options.onError?.(t, e, this.state.context, r);
        await this.#a.config.onSettled?.(undefined, t, this.state.variables, this.state.context, this, r);
        await this.options.onSettled?.(undefined, t, e, this.state.context, r);
        throw t;
      } finally {
        this.#m({
          type: "error",
          error: t
        });
      }
    } finally {
      this.#a.runNext(this);
    }
  }
  #m(e) {
    let t = t => {
      switch (e.type) {
        case "failed":
          return {
            ...t,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...t,
            isPaused: true
          };
        case "continue":
          return {
            ...t,
            isPaused: false
          };
        case "pending":
          return {
            ...t,
            context: e.context,
            data: undefined,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...t,
            data: undefined,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = t(this.state);
    n.jG.batch(() => {
      this.#h.forEach(t => {
        t.onMutationUpdate(e);
      });
      this.#a.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
};
export function $() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: undefined,
    submittedAt: 0
  };
}