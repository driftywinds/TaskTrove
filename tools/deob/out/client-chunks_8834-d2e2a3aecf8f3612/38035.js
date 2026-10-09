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
  var u = {
    __proto__: null
  };
  var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e) {
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var o = a ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(u, l, o);
      } else {
        u[l] = e[l];
      }
    }
  }
  u.default = e;
  if (r) {
    r.set(e, u);
  }
  return u;
}