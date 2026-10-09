var n = require("./13947.js");
var i = require("./15837.js");
var a = require("./11380.js");
var o = require("./22350.js");
module.exports = function (e) {
  if (e.length < 1 || typeof e[0] != "function") {
    throw new i("a function is required");
  }
  return o(n, a, e);
};