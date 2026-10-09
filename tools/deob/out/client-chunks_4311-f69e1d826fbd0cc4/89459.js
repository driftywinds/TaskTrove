var t = "Function.prototype.bind called on incompatible ";
var r = Object.prototype.toString;
var n = Math.max;
var i = "[object Function]";
function a(e, t) {
  var r = [];
  for (var n = 0; n < e.length; n += 1) {
    r[n] = e[n];
  }
  for (var i = 0; i < t.length; i += 1) {
    r[i + e.length] = t[i];
  }
  return r;
}
function o(e, t) {
  var r = [];
  for (var n = t || 0, i = 0; n < e.length; n += 1, i += 1) {
    r[i] = e[n];
  }
  return r;
}
function s(e, t) {
  var r = "";
  for (var n = 0; n < e.length; n += 1) {
    r += e[n];
    if (n + 1 < e.length) {
      r += t;
    }
  }
  return r;
}
module.exports = function (e) {
  var u;
  var l = this;
  if (typeof l != "function" || r.apply(l) !== i) {
    throw TypeError(t + l);
  }
  var c = o(arguments, 1);
  var d = function () {
    if (this instanceof u) {
      var t = l.apply(this, a(c, arguments));
      if (Object(t) === t) {
        return t;
      } else {
        return this;
      }
    }
    return l.apply(e, a(c, arguments));
  };
  for (var f = n(0, l.length - c.length), h = [], p = 0; p < f; p++) {
    h[p] = "$" + p;
  }
  u = Function("binder", "return function (" + s(h, ",") + "){ return binder.apply(this,arguments); }")(d);
  if (l.prototype) {
    function m() {}
    m.prototype = l.prototype;
    u.prototype = new m();
    m.prototype = null;
  }
  return u;
};