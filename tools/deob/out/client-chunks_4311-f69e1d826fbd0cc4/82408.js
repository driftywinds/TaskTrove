var n = require("./34098.js")();
var i = require("./92570.js")("Object.prototype.toString");
function a(e) {
  return (!n || !e || typeof e != "object" || !(Symbol.toStringTag in e)) && i(e) === "[object Arguments]";
}
function o(e) {
  return !!a(e) || e !== null && typeof e == "object" && "length" in e && typeof e.length == "number" && e.length >= 0 && i(e) !== "[object Array]" && "callee" in e && i(e.callee) === "[object Function]";
}
var s = function () {
  return a(arguments);
}();
a.isLegacyArguments = o;
module.exports = s ? a : o;