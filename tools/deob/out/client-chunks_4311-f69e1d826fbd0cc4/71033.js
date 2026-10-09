var n = require("./62193.js");
var i = require("./78105.js");
var a = require("./61060.js");
var o = require("./22461.js");
var s = require("./35061.js");
function u(e, t) {
  let r = (0, a.q)();
  let n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1;
  let u = (0, s.h)(e, t);
  let l = (0, o.w)(t?.in || e, 0);
  l.setFullYear(u, 0, n);
  l.setHours(0, 0, 0, 0);
  return (0, i.k)(l, t);
}
var l = require("./913.js");
export function N(e, t) {
  let r = (0, l.a)(e, t?.in);
  return Math.round(((0, i.k)(r, t) - u(r, t)) / n.my) + 1;
}