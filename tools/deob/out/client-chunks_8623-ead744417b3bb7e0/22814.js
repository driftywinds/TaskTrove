let r;
let n;
var o = require("./16289.js");
let s = 0;
export function eU(t, e) {
  let a = `atom${++s}`;
  let r = {
    toString() {
      if (this.debugLabel) {
        return a + ":" + this.debugLabel;
      } else {
        return a;
      }
    }
  };
  if (typeof t == "function") {
    r.read = t;
  } else {
    r.init = t;
    r.read = l;
    r.write = d;
  }
  if (e) {
    r.write = e;
  }
  return r;
}
function l(t) {
  return t(this);
}
function d(t, e, a) {
  return e(this, typeof a == "function" ? a(t(this)) : a);
}
export function y$() {
  if (r) {
    return r();
  } else {
    return (0, o.ff)();
  }
}
export function zp() {
  if (!n) {
    n = y$();
    globalThis.__JOTAI_DEFAULT_STORE__ ||= n;
    if (globalThis.__JOTAI_DEFAULT_STORE__ !== n) {
      console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044");
    }
  }
  return n;
}