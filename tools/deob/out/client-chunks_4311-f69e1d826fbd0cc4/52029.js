var n = typeof Symbol != "undefined" && Symbol;
var i = require("./48367.js");
module.exports = function () {
  return typeof n == "function" && typeof Symbol == "function" && typeof n("foo") == "symbol" && typeof Symbol("bar") == "symbol" && i();
};