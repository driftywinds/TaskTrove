var n = require("./22251.js");
var i = require("./91915.js");
var a = require("./75825.js");
module.exports = n ? function (e) {
  return n(e);
} : i ? function (e) {
  if (!e || typeof e != "object" && typeof e != "function") {
    throw TypeError("getProto: not an object");
  }
  return i(e);
} : a ? function (e) {
  return a(e);
} : null;