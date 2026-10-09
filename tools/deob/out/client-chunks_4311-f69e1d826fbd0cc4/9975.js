var t;
var r;
var n = Function.prototype.toString;
var i = typeof Reflect == "object" && Reflect !== null && Reflect.apply;
if (typeof i == "function" && typeof Object.defineProperty == "function") {
  try {
    t = Object.defineProperty({}, "length", {
      get: function () {
        throw r;
      }
    });
    r = {};
    i(function () {
      throw 42;
    }, null, t);
  } catch (e) {
    if (e !== r) {
      i = null;
    }
  }
} else {
  i = null;
}
var a = /^\s*class\b/;
function o(e) {
  try {
    var t = n.call(e);
    return a.test(t);
  } catch (e) {
    return false;
  }
}
function s(e) {
  try {
    if (o(e)) {
      return false;
    }
    n.call(e);
    return true;
  } catch (e) {
    return false;
  }
}
var u = Object.prototype.toString;
var l = "[object Object]";
var c = "[object Function]";
var d = "[object GeneratorFunction]";
var f = "[object HTMLAllCollection]";
var h = "[object HTML document.all class]";
var p = "[object HTMLCollection]";
var m = typeof Symbol == "function" && !!Symbol.toStringTag;
var y = !(0 in [,]);
function g() {
  return false;
}
if (typeof document == "object") {
  var b = document.all;
  if (u.call(b) === u.call(document.all)) {
    g = function (e) {
      if ((y || !e) && (e === undefined || typeof e == "object")) {
        try {
          var t = u.call(e);
          return (t === f || t === h || t === p || t === l) && e("") == null;
        } catch (e) {}
      }
      return false;
    };
  }
}
module.exports = i ? function (e) {
  if (g(e)) {
    return true;
  }
  if (!e || typeof e != "function" && typeof e != "object") {
    return false;
  }
  try {
    i(e, null, t);
  } catch (e) {
    if (e !== r) {
      return false;
    }
  }
  return !o(e) && s(e);
} : function (e) {
  if (g(e)) {
    return true;
  }
  if (!e || typeof e != "function" && typeof e != "object") {
    return false;
  }
  if (m) {
    return s(e);
  }
  if (o(e)) {
    return false;
  }
  var t = u.call(e);
  return (t === c || t === d || !!/^\[object HTML/.test(t)) && s(e);
};