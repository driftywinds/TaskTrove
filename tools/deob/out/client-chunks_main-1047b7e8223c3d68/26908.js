function n(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var r = new WeakMap();
  return (n = function (e) {
    if (e) {
      return r;
    } else {
      return t;
    }
  })(e);
}
export function _(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var r = n(t);
  if (r && r.has(e)) {
    return r.get(e);
  }
  var a = {
    __proto__: null
  };
  var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e) {
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(a, i, s);
      } else {
        a[i] = e[i];
      }
    }
  }
  a.default = e;
  if (r) {
    r.set(e, a);
  }
  return a;
}