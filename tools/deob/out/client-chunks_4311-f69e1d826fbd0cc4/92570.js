var n = require("./77687.js");
var i = require("./73432.js");
var a = i([n("%String.prototype.indexOf%")]);
module.exports = function (e, t) {
  var r = n(e, !!t);
  if (typeof r == "function" && a(e, ".prototype.") > -1) {
    return i([r]);
  } else {
    return r;
  }
};