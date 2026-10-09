var n = require("./61060.js");
var i = require("./913.js");
export function $(e, t) {
  let r = (0, n.q)();
  let a = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0;
  let o = (0, i.a)(e, t?.in);
  let s = o.getDay();
  let u = (s < a ? -7 : 0) + 6 - (s - a);
  o.setDate(o.getDate() + u);
  o.setHours(23, 59, 59, 999);
  return o;
}