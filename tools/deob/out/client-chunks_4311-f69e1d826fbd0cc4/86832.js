var n = require("./30531.js");
var i = require("./18411.js");
export var t = new class extends n.Q {
  #H = true;
  #Y;
  #G;
  constructor() {
    super();
    this.#G = e => {
      if (!i.S$ && window.addEventListener) {
        let t = () => e(true);
        let r = () => e(false);
        window.addEventListener("online", t, false);
        window.addEventListener("offline", r, false);
        return () => {
          window.removeEventListener("online", t);
          window.removeEventListener("offline", r);
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
    this.#Y = e(this.setOnline.bind(this));
  }
  setOnline(e) {
    if (this.#H !== e) {
      this.#H = e;
      this.listeners.forEach(t => {
        t(e);
      });
    }
  }
  isOnline() {
    return this.#H;
  }
}();