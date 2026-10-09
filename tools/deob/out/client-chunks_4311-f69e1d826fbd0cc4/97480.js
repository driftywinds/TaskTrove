var n = require("./62193.js");
var i = require("./23514.js");
var a = require("./22461.js");
var o = require("./47556.js");
function _s(e, t) {
  let r = (0, o.p)(e, t);
  let n = (0, a.w)(t?.in || e, 0);
  n.setFullYear(r, 0, 4);
  n.setHours(0, 0, 0, 0);
  return (0, i.b)(n);
}
var u = require("./913.js");
export function s(e, t) {
  let r = (0, u.a)(e, t?.in);
  return Math.round(((0, i.b)(r) - _s(r)) / n.my) + 1;
}