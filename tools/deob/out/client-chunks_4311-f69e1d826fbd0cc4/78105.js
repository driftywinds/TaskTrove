var n = require("./61060.js");
var i = require("./913.js");
export function k(e, t) {
  let r = (0, n.q)();
  let a = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0;
  let o = (0, i.a)(e, t?.in);
  let s = o.getDay();
  let u = (s < a) * 7 + s - a;
  o.setDate(o.getDate() - u);
  o.setHours(0, 0, 0, 0);
  return o;
}