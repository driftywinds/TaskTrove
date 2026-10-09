var n = require("./30531.js");
var i = require("./18411.js");
export var m = new class extends n.Q {
  #W;
  #Y;
  #G;
  constructor() {
    super();
    this.#G = e => {
      if (!i.S$ && window.addEventListener) {
        let t = () => e();
        window.addEventListener("visibilitychange", t, false);
        return () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    };
  }
  onSubscribe() {
    if (!this.#Y) {
      this.setEventListener(this.#G);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#Y?.();
      this.#Y = undefined;
    }
  }
  setEventListener(e) {
    this.#G = e;
    this.#Y?.();
    this.#Y = e(e => {
      if (typeof e == "boolean") {
        this.setFocused(e);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(e) {
    if (this.#W !== e) {
      this.#W = e;
      this.onFocus();
    }
  }
  onFocus() {
    let e = this.isFocused();
    this.listeners.forEach(t => {
      t(e);
    });
  }
  isFocused() {
    if (typeof this.#W == "boolean") {
      return this.#W;
    } else {
      return globalThis.document?.visibilityState !== "hidden";
    }
  }
}();