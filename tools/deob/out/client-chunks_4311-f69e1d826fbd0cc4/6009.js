function n(e, t) {
  return (n = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var r in t) {
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        e[r] = t[r];
      }
    }
  })(e, t);
}
export function C6(e, t) {
  if (typeof t != "function" && t !== null) {
    throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
  }
  function r() {
    this.constructor = e;
  }
  n(e, t);
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
export function Cl() {
  return (Cl = Object.assign || function (e) {
    var t;
    for (var r = 1, n = arguments.length; r < n; r++) {
      for (var i in t = arguments[r]) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          e[i] = t[i];
        }
      }
    }
    return e;
  }).apply(this, arguments);
}
export function Tt(e, t) {
  var r = {};
  for (var n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
      r[n] = e[n];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) {
      if (t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i])) {
        r[n[i]] = e[n[i]];
      }
    }
  }
  return r;
}
export function fX(e, t, r) {
  if (r || arguments.length == 2) {
    var n;
    for (var i = 0, a = t.length; i < a; i++) {
      if (!!n || !(i in t)) {
        n ||= Array.prototype.slice.call(t, 0, i);
        n[i] = t[i];
      }
    }
  }
  return e.concat(n || Array.prototype.slice.call(t));
}
if (typeof SuppressedError == "function") {
  SuppressedError;
}