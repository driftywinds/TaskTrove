var n = require("./61060.js");
var i = require("./22461.js");
var a = require("./78105.js");
var o = require("./913.js");
export function h(e, t) {
  let r = (0, o.a)(e, t?.in);
  let s = r.getFullYear();
  let u = (0, n.q)();
  let l = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? u.firstWeekContainsDate ?? u.locale?.options?.firstWeekContainsDate ?? 1;
  let c = (0, i.w)(t?.in || e, 0);
  c.setFullYear(s + 1, 0, l);
  c.setHours(0, 0, 0, 0);
  let d = (0, a.k)(c, t);
  let f = (0, i.w)(t?.in || e, 0);
  f.setFullYear(s, 0, l);
  f.setHours(0, 0, 0, 0);
  let h = (0, a.k)(f, t);
  if (+r >= +d) {
    return s + 1;
  } else if (+r >= +h) {
    return s;
  } else {
    return s - 1;
  }
}