var n;
var i = require("./92570.js");
var a = require("./34098.js")();
var o = require("./74913.js");
var s = require("./16456.js");
if (a) {
  var u = i("RegExp.prototype.exec");
  var l = {};
  function c() {
    throw l;
  }
  var d = {
    toString: c,
    valueOf: c
  };
  if (typeof Symbol.toPrimitive == "symbol") {
    d[Symbol.toPrimitive] = c;
  }
  n = function (e) {
    if (!e || typeof e != "object") {
      return false;
    }
    var t = s(e, "lastIndex");
    if (!t || !o(t, "value")) {
      return false;
    }
    try {
      u(e, d);
    } catch (e) {
      return e === l;
    }
  };
} else {
  var f = i("Object.prototype.toString");
  var h = "[object RegExp]";
  n = function (e) {
    return !!e && (typeof e == "object" || typeof e == "function") && f(e) === h;
  };
}
module.exports = n;