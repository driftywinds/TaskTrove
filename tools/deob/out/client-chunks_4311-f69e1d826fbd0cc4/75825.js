var n;
var i = require("./73432.js");
var a = require("./16456.js");
try {
  n = [].__proto__ === Array.prototype;
} catch (e) {
  if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
    throw e;
  }
}
var o = !!n && a && a(Object.prototype, "__proto__");
var s = Object;
var u = s.getPrototypeOf;
module.exports = o && typeof o.get == "function" ? i([o.get]) : typeof u == "function" && function (e) {
  return u(e == null ? e : s(e));
};