var n = require("./92570.js");
var i = require("./36189.js")(/^\s*(?:function)?\*/);
var a = require("./34098.js")();
var o = require("./49735.js");
var s = n("Object.prototype.toString");
var u = n("Function.prototype.toString");
var l = require("./15336.js");
module.exports = function (e) {
  if (typeof e != "function") {
    return false;
  }
  if (i(u(e))) {
    return true;
  }
  if (!a) {
    return s(e) === "[object GeneratorFunction]";
  }
  if (!o) {
    return false;
  }
  var t = l();
  return t && o(e) === t.prototype;
};