var n = {
  setTimeout: (e, t) => setTimeout(e, t),
  clearTimeout: e => clearTimeout(e),
  setInterval: (e, t) => setInterval(e, t),
  clearInterval: e => clearInterval(e)
};
export var zs = new class {
  #B = n;
  #q = false;
  setTimeoutProvider(e) {
    this.#B = e;
  }
  setTimeout(e, t) {
    return this.#B.setTimeout(e, t);
  }
  clearTimeout(e) {
    this.#B.clearTimeout(e);
  }
  setInterval(e, t) {
    return this.#B.setInterval(e, t);
  }
  clearInterval(e) {
    this.#B.clearInterval(e);
  }
}();
export function Zq(e) {
  setTimeout(e, 0);
}