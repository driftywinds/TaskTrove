var n = require("./72157.js");
var i = typeof globalThis == "undefined" ? require.g : globalThis;
module.exports = function () {
  var e = [];
  for (var t = 0; t < n.length; t++) {
    if (typeof i[n[t]] == "function") {
      e[e.length] = n[t];
    }
  }
  return e;
};