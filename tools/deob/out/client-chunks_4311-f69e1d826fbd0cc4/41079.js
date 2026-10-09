var n = require("./45334.js");
var i = n.Buffer;
function a(e, t) {
  for (var r in e) {
    t[r] = e[r];
  }
}
function o(e, t, r) {
  return i(e, t, r);
}
if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
  module.exports = n;
} else {
  a(n, exports);
  exports.Buffer = o;
}
o.prototype = Object.create(i.prototype);
a(i, o);
o.from = function (e, t, r) {
  if (typeof e == "number") {
    throw TypeError("Argument must not be a number");
  }
  return i(e, t, r);
};
o.alloc = function (e, t, r) {
  if (typeof e != "number") {
    throw TypeError("Argument must be a number");
  }
  var n = i(e);
  if (t !== undefined) {
    if (typeof r == "string") {
      n.fill(t, r);
    } else {
      n.fill(t);
    }
  } else {
    n.fill(0);
  }
  return n;
};
o.allocUnsafe = function (e) {
  if (typeof e != "number") {
    throw TypeError("Argument must be a number");
  }
  return i(e);
};
o.allocUnsafeSlow = function (e) {
  if (typeof e != "number") {
    throw TypeError("Argument must be a number");
  }
  return n.SlowBuffer(e);
};