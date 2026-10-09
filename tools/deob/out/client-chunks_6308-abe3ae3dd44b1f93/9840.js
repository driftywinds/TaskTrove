var n = require("./23982.js");
var o = require("./44230.js");
function i(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    if (t) {
      n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    r.push.apply(r, n);
  }
  return r;
}
function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] ?? {};
    if (t % 2) {
      i(Object(r), true).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
    } else {
      i(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
  }
  return e;
}
var s = Symbol("list-item-instruction");
var l = {
  vertical: {
    start: "top",
    end: "bottom",
    size: "height",
    point: "y"
  },
  horizontal: {
    start: "left",
    end: "right",
    size: "width",
    point: "x"
  }
};
var u = (0, o.m)();
function c() {
  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  return t.every(function (e) {
    return e === "available" || e === "blocked";
  });
}
function d() {
  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  return t.every(function (e) {
    return e === "not-available";
  });
}
export function G(e, t) {
  var f = t.operations;
  var p = t.element;
  var m = t.input;
  var h = t.axis;
  var v = h === undefined ? "vertical" : h;
  var g = {
    x: m.clientX,
    y: m.clientY
  };
  var y = p.getBoundingClientRect();
  var b = l[v];
  var w = f.combine ?? "not-available";
  var E = f["reorder-before"] ?? "not-available";
  var x = f["reorder-after"] ?? "not-available";
  var S = function () {
    if (!c(w)) {
      if (c(E, x)) {
        t = (e = {
          client: g,
          borderBox: y,
          axis: b
        }).client;
        o = (r = e.borderBox)[(n = e.axis).size] / 2;
        if (t[n.point] < r[n.start] + o) {
          return "reorder-before";
        } else {
          return "reorder-after";
        }
      } else if (c(E)) {
        return "reorder-before";
      } else if (c(x)) {
        return "reorder-after";
      } else {
        return null;
      }
    }
    var e;
    var t;
    var r;
    var n;
    var o;
    var i;
    var a;
    var s;
    var l;
    var u;
    a = (i = {
      client: g,
      borderBox: y,
      axis: b
    }).client;
    u = (s = i.borderBox)[(l = i.axis).size] / 4;
    var f = a[l.point] <= s[l.start] + u ? "reorder-before" : a[l.point] >= s[l.end] - u ? "reorder-after" : "combine";
    if (f === "reorder-after") {
      if (d(x)) {
        return "combine";
      } else {
        return f;
      }
    } else if (f === "reorder-before" && d(E)) {
      return "combine";
    } else {
      return f;
    }
  }();
  if (!S) {
    return e;
  }
  var C = u({
    operation: S,
    blocked: f[S] === "blocked",
    axis: v
  });
  return a(a({}, e), {}, (0, n.A)({}, s, C));
}
export function Q(e) {
  return e[s] ?? null;
}