var n = require("./54604.js");
var i = require("./23353.js");
var a = require("./73432.js");
var o = require("./45579.js");
module.exports = function (e) {
  var t = a(arguments);
  var r = e.length - (arguments.length - 1);
  return n(t, 1 + (r > 0 ? r : 0), true);
};
if (i) {
  i(module.exports, "apply", {
    value: o
  });
} else {
  module.exports.apply = o;
}