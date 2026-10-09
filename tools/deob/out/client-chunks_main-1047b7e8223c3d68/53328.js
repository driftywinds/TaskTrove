Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "normalizeLocalePath", {
  enumerable: true,
  get: function () {
    return n;
  }
});
let r = new WeakMap();
function n(e, t) {
  let n;
  if (!t) {
    return {
      pathname: e
    };
  }
  let a = r.get(t);
  if (!a) {
    a = t.map(e => e.toLowerCase());
    r.set(t, a);
  }
  let o = e.split("/", 2);
  if (!o[1]) {
    return {
      pathname: e
    };
  }
  let i = o[1].toLowerCase();
  let s = a.indexOf(i);
  if (s < 0) {
    return {
      pathname: e
    };
  } else {
    n = t[s];
    return {
      pathname: e = e.slice(n.length + 1) || "/",
      detectedLocale: n
    };
  }
}