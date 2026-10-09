var n = require("./23353.js");
var i = require("./65314.js");
var a = require("./15837.js");
var o = require("./16456.js");
module.exports = function (e, t, r) {
  if (!e || typeof e != "object" && typeof e != "function") {
    throw new a("`obj` must be an object or a function`");
  }
  if (typeof t != "string" && typeof t != "symbol") {
    throw new a("`property` must be a string or a symbol`");
  }
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) {
    throw new a("`nonEnumerable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) {
    throw new a("`nonWritable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) {
    throw new a("`nonConfigurable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 6 && typeof arguments[6] != "boolean") {
    throw new a("`loose`, if provided, must be a boolean");
  }
  var s = arguments.length > 3 ? arguments[3] : null;
  var u = arguments.length > 4 ? arguments[4] : null;
  var l = arguments.length > 5 ? arguments[5] : null;
  var c = arguments.length > 6 && arguments[6];
  var d = !!o && o(e, t);
  if (n) {
    n(e, t, {
      configurable: l === null && d ? d.configurable : !l,
      enumerable: s === null && d ? d.enumerable : !s,
      value: r,
      writable: u === null && d ? d.writable : !u
    });
  } else if (!c && (s || u || l)) {
    throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  } else {
    e[t] = r;
  }
};