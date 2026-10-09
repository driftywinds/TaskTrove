var n = require("./92570.js");
var i = require("./92763.js");
var a = n("RegExp.prototype.exec");
var o = require("./15837.js");
module.exports = function (e) {
  if (!i(e)) {
    throw new o("`regex` must be a RegExp");
  }
  return function (t) {
    return a(e, t) !== null;
  };
};