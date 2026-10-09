var n = require("./91355.js");
var i = require("./56211.js");
var a = require("./65232.js");
var o = require("./92570.js");
var s = require("./16456.js");
var u = require("./49735.js");
var l = o("Object.prototype.toString");
var c = require("./34098.js")();
var d = typeof globalThis == "undefined" ? require.g : globalThis;
var f = i();
var h = o("String.prototype.slice");
var p = o("Array.prototype.indexOf", true) || function (e, t) {
  for (var r = 0; r < e.length; r += 1) {
    if (e[r] === t) {
      return r;
    }
  }
  return -1;
};
var m = {
  __proto__: null
};
if (c && s && u) {
  n(f, function (e) {
    var t = new d[e]();
    if (Symbol.toStringTag in t && u) {
      var r = u(t);
      var n = s(r, Symbol.toStringTag);
      if (!n && r) {
        n = s(u(r), Symbol.toStringTag);
      }
      m["$" + e] = a(n.get);
    }
  });
} else {
  n(f, function (e) {
    var t = new d[e]();
    var r = t.slice || t.set;
    if (r) {
      m["$" + e] = a(r);
    }
  });
}
function y(e) {
  var t = false;
  n(m, function (r, n) {
    if (!t) {
      try {
        if ("$" + r(e) === n) {
          t = h(n, 1);
        }
      } catch (e) {}
    }
  });
  return t;
}
function g(e) {
  var t = false;
  n(m, function (r, n) {
    if (!t) {
      try {
        r(e);
        t = h(n, 1);
      } catch (e) {}
    }
  });
  return t;
}
module.exports = function (e) {
  if (!e || typeof e != "object") {
    return false;
  }
  if (!c) {
    var t = h(l(e), 8, -1);
    if (p(f, t) > -1) {
      return t;
    } else {
      return t === "Object" && g(e);
    }
  }
  if (s) {
    return y(e);
  } else {
    return null;
  }
};