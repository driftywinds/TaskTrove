var n = require("./9975.js");
var i = Object.prototype.toString;
var a = Object.prototype.hasOwnProperty;
function o(e, t, r) {
  for (var n = 0, i = e.length; n < i; n++) {
    if (a.call(e, n)) {
      if (r == null) {
        t(e[n], n, e);
      } else {
        t.call(r, e[n], n, e);
      }
    }
  }
}
function s(e, t, r) {
  for (var n = 0, i = e.length; n < i; n++) {
    if (r == null) {
      t(e.charAt(n), n, e);
    } else {
      t.call(r, e.charAt(n), n, e);
    }
  }
}
function u(e, t, r) {
  for (var n in e) {
    if (a.call(e, n)) {
      if (r == null) {
        t(e[n], n, e);
      } else {
        t.call(r, e[n], n, e);
      }
    }
  }
}
function l(e) {
  return i.call(e) === "[object Array]";
}
module.exports = function (e, t, r) {
  var i;
  if (!n(t)) {
    throw TypeError("iterator must be a function");
  }
  if (arguments.length >= 3) {
    i = r;
  }
  if (l(e)) {
    o(e, t, i);
  } else if (typeof e == "string") {
    s(e, t, i);
  } else {
    u(e, t, i);
  }
};