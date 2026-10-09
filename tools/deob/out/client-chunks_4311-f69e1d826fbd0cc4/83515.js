var n = require(/*webcrack:missing*/"./37811.js");
var i = Object.getOwnPropertyDescriptors || function (e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
  }
  return r;
};
var a = /%[sdj%]/g;
exports.format = function (e) {
  if (!k(e)) {
    var t = [];
    for (var r = 0; r < arguments.length; r++) {
      t.push(l(arguments[r]));
    }
    return t.join(" ");
  }
  for (var r = 1, n = arguments, i = n.length, o = String(e).replace(a, function (e) {
      if (e === "%%") {
        return "%";
      }
      if (r >= i) {
        return e;
      }
      switch (e) {
        case "%s":
          return String(n[r++]);
        case "%d":
          return Number(n[r++]);
        case "%j":
          try {
            return JSON.stringify(n[r++]);
          } catch (e) {
            return "[Circular]";
          }
        default:
          return e;
      }
    }), s = n[r]; r < i; s = n[++r]) {
    if (w(s) || !I(s)) {
      o += " " + s;
    } else {
      o += " " + l(s);
    }
  }
  return o;
};
exports.deprecate = function (e, r) {
  if (n !== undefined && n.noDeprecation === true) {
    return e;
  }
  if (n === undefined) {
    return function () {
      return exports.deprecate(e, r).apply(this, arguments);
    };
  }
  var i = false;
  return function () {
    if (!i) {
      if (n.throwDeprecation) {
        throw Error(r);
      }
      if (n.traceDeprecation) {
        console.trace(r);
      } else {
        console.error(r);
      }
      i = true;
    }
    return e.apply(this, arguments);
  };
};
var o = {};
var s = /^$/;
if (n.env.NODE_DEBUG) {
  var u = n.env.NODE_DEBUG;
  s = RegExp("^" + (u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i");
}
function l(e, r) {
  var n = {
    seen: [],
    stylize: d
  };
  if (arguments.length >= 3) {
    n.depth = arguments[2];
  }
  if (arguments.length >= 4) {
    n.colors = arguments[3];
  }
  if (x(r)) {
    n.showHidden = r;
  } else if (r) {
    exports._extend(n, r);
  }
  if ($(n.showHidden)) {
    n.showHidden = false;
  }
  if ($(n.depth)) {
    n.depth = 2;
  }
  if ($(n.colors)) {
    n.colors = false;
  }
  if ($(n.customInspect)) {
    n.customInspect = true;
  }
  if (n.colors) {
    n.stylize = c;
  }
  return h(n, e, n.depth);
}
function c(e, t) {
  var r = l.styles[t];
  if (r) {
    return "[" + l.colors[r][0] + "m" + e + "[" + l.colors[r][1] + "m";
  } else {
    return e;
  }
}
function d(e, t) {
  return e;
}
function f(e) {
  var t = {};
  e.forEach(function (e, r) {
    t[e] = true;
  });
  return t;
}
function h(e, r, n) {
  if (e.customInspect && r && j(r.inspect) && r.inspect !== exports.inspect && (!r.constructor || r.constructor.prototype !== r)) {
    var i;
    var a = r.inspect(n, e);
    if (!k(a)) {
      a = h(e, a, n);
    }
    return a;
  }
  var o = p(e, r);
  if (o) {
    return o;
  }
  var s = Object.keys(r);
  var u = f(s);
  if (e.showHidden) {
    s = Object.getOwnPropertyNames(r);
  }
  if (E(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) {
    return m(r);
  }
  if (s.length === 0) {
    if (j(r)) {
      var l = r.name ? ": " + r.name : "";
      return e.stylize("[Function" + l + "]", "special");
    }
    if (S(r)) {
      return e.stylize(RegExp.prototype.toString.call(r), "regexp");
    }
    if (O(r)) {
      return e.stylize(Date.prototype.toString.call(r), "date");
    }
    if (E(r)) {
      return m(r);
    }
  }
  var c = "";
  var d = false;
  var x = ["{", "}"];
  if (v(r)) {
    d = true;
    x = ["[", "]"];
  }
  if (j(r)) {
    c = " [Function" + (r.name ? ": " + r.name : "") + "]";
  }
  if (S(r)) {
    c = " " + RegExp.prototype.toString.call(r);
  }
  if (O(r)) {
    c = " " + Date.prototype.toUTCString.call(r);
  }
  if (E(r)) {
    c = " " + m(r);
  }
  if (s.length === 0 && (!d || r.length == 0)) {
    return x[0] + c + x[1];
  }
  if (n < 0) {
    if (S(r)) {
      return e.stylize(RegExp.prototype.toString.call(r), "regexp");
    } else {
      return e.stylize("[Object]", "special");
    }
  }
  e.seen.push(r);
  i = d ? y(e, r, n, u, s) : s.map(function (t) {
    return g(e, r, n, u, t, d);
  });
  e.seen.pop();
  return b(i, c, x);
}
function p(e, t) {
  if ($(t)) {
    return e.stylize("undefined", "undefined");
  }
  if (k(t)) {
    var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
    return e.stylize(r, "string");
  }
  if (_(t)) {
    return e.stylize("" + t, "number");
  } else if (x(t)) {
    return e.stylize("" + t, "boolean");
  } else if (w(t)) {
    return e.stylize("null", "null");
  } else {
    return undefined;
  }
}
function m(e) {
  return "[" + Error.prototype.toString.call(e) + "]";
}
function y(e, t, r, n, i) {
  var a = [];
  for (var o = 0, s = t.length; o < s; ++o) {
    if (z(t, String(o))) {
      a.push(g(e, t, r, n, String(o), true));
    } else {
      a.push("");
    }
  }
  i.forEach(function (i) {
    if (!i.match(/^\d+$/)) {
      a.push(g(e, t, r, n, i, true));
    }
  });
  return a;
}
function g(e, t, r, n, i, a) {
  var o;
  var s;
  var u;
  if ((u = Object.getOwnPropertyDescriptor(t, i) || {
    value: t[i]
  }).get) {
    s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special");
  } else if (u.set) {
    s = e.stylize("[Setter]", "special");
  }
  if (!z(n, i)) {
    o = "[" + i + "]";
  }
  if (!s) {
    if (e.seen.indexOf(u.value) < 0) {
      if ((s = w(r) ? h(e, u.value, null) : h(e, u.value, r - 1)).indexOf("\n") > -1) {
        s = a ? s.split("\n").map(function (e) {
          return "  " + e;
        }).join("\n").slice(2) : "\n" + s.split("\n").map(function (e) {
          return "   " + e;
        }).join("\n");
      }
    } else {
      s = e.stylize("[Circular]", "special");
    }
  }
  if ($(o)) {
    if (a && i.match(/^\d+$/)) {
      return s;
    }
    if ((o = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      o = o.slice(1, -1);
      o = e.stylize(o, "name");
    } else {
      o = o.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
      o = e.stylize(o, "string");
    }
  }
  return o + ": " + s;
}
function b(e, t, r) {
  var n = 0;
  if (e.reduce(function (e, t) {
    n++;
    if (t.indexOf("\n") >= 0) {
      n++;
    }
    return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0) > 60) {
    return r[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
  } else {
    return r[0] + t + " " + e.join(", ") + " " + r[1];
  }
}
function v(e) {
  return Array.isArray(e);
}
function x(e) {
  return typeof e == "boolean";
}
function w(e) {
  return e === null;
}
function _(e) {
  return typeof e == "number";
}
function k(e) {
  return typeof e == "string";
}
function $(e) {
  return e === undefined;
}
function S(e) {
  return I(e) && U(e) === "[object RegExp]";
}
function I(e) {
  return typeof e == "object" && e !== null;
}
function O(e) {
  return I(e) && U(e) === "[object Date]";
}
function E(e) {
  return I(e) && (U(e) === "[object Error]" || e instanceof Error);
}
function j(e) {
  return typeof e == "function";
}
function U(e) {
  return Object.prototype.toString.call(e);
}
function T(e) {
  if (e < 10) {
    return "0" + e.toString(10);
  } else {
    return e.toString(10);
  }
}
exports.debuglog = function (e) {
  if (!o[e = e.toUpperCase()]) {
    if (s.test(e)) {
      var r = n.pid;
      o[e] = function () {
        var n = exports.format.apply(exports, arguments);
        console.error("%s %d: %s", e, r, n);
      };
    } else {
      o[e] = function () {};
    }
  }
  return o[e];
};
exports.inspect = l;
l.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
l.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
exports.types = require("./6548.js");
exports.isArray = v;
exports.isBoolean = x;
exports.isNull = w;
exports.isNullOrUndefined = function (e) {
  return e == null;
};
exports.isNumber = _;
exports.isString = k;
exports.isSymbol = function (e) {
  return typeof e == "symbol";
};
exports.isUndefined = $;
exports.isRegExp = S;
exports.types.isRegExp = S;
exports.isObject = I;
exports.isDate = O;
exports.types.isDate = O;
exports.isError = E;
exports.types.isNativeError = E;
exports.isFunction = j;
exports.isPrimitive = function (e) {
  return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === undefined;
};
exports.isBuffer = require("./49299.js");
var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function D() {
  var e = new Date();
  var t = [T(e.getHours()), T(e.getMinutes()), T(e.getSeconds())].join(":");
  return [e.getDate(), A[e.getMonth()], t].join(" ");
}
function z(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
exports.log = function () {
  console.log("%s - %s", D(), exports.format.apply(exports, arguments));
};
exports.inherits = require("./90966.js");
exports._extend = function (e, t) {
  if (!t || !I(t)) {
    return e;
  }
  var r = Object.keys(t);
  for (var n = r.length; n--;) {
    e[r[n]] = t[r[n]];
  }
  return e;
};
var N = typeof Symbol != "undefined" ? Symbol("util.promisify.custom") : undefined;
function P(e, t) {
  if (!e) {
    var r = Error("Promise was rejected with a falsy value");
    r.reason = e;
    e = r;
  }
  return t(e);
}
exports.promisify = function (e) {
  if (typeof e != "function") {
    throw TypeError("The \"original\" argument must be of type Function");
  }
  if (N && e[N]) {
    var t = e[N];
    if (typeof t != "function") {
      throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
    }
    Object.defineProperty(t, N, {
      value: t,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return t;
  }
  function t() {
    var t;
    var r;
    var n = new Promise(function (e, n) {
      t = e;
      r = n;
    });
    var i = [];
    for (var a = 0; a < arguments.length; a++) {
      i.push(arguments[a]);
    }
    i.push(function (e, n) {
      if (e) {
        r(e);
      } else {
        t(n);
      }
    });
    try {
      e.apply(this, i);
    } catch (e) {
      r(e);
    }
    return n;
  }
  Object.setPrototypeOf(t, Object.getPrototypeOf(e));
  if (N) {
    Object.defineProperty(t, N, {
      value: t,
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return Object.defineProperties(t, i(e));
};
exports.promisify.custom = N;
exports.callbackify = function (e) {
  if (typeof e != "function") {
    throw TypeError("The \"original\" argument must be of type Function");
  }
  function t() {
    var t = [];
    for (var r = 0; r < arguments.length; r++) {
      t.push(arguments[r]);
    }
    var i = t.pop();
    if (typeof i != "function") {
      throw TypeError("The last argument must be of type Function");
    }
    var a = this;
    function o() {
      return i.apply(a, arguments);
    }
    e.apply(this, t).then(function (e) {
      n.nextTick(o.bind(null, null, e));
    }, function (e) {
      n.nextTick(P.bind(null, e, o));
    });
  }
  Object.setPrototypeOf(t, Object.getPrototypeOf(e));
  Object.defineProperties(t, i(e));
  return t;
};