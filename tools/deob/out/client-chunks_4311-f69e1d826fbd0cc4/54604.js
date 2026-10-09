var n = require("./77687.js");
var i = require("./5601.js");
var a = require("./37048.js")();
var o = require("./16456.js");
var s = require("./15837.js");
var u = n("%Math.floor%");
module.exports = function (e, t) {
  if (typeof e != "function") {
    throw new s("`fn` is not a function");
  }
  if (typeof t != "number" || t < 0 || t > 4294967295 || u(t) !== t) {
    throw new s("`length` must be a positive 32-bit integer");
  }
  var r = arguments.length > 2 && !!arguments[2];
  var n = true;
  var l = true;
  if ("length" in e && o) {
    var c = o(e, "length");
    if (c && !c.configurable) {
      n = false;
    }
    if (c && !c.writable) {
      l = false;
    }
  }
  if (n || l || !r) {
    if (a) {
      i(e, "length", t, true, true);
    } else {
      i(e, "length", t);
    }
  }
  return e;
};