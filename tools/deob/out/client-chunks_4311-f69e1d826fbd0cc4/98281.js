var n = require("./22461.js");
export function x(e, ...t) {
  let r = n.w.bind(null, e || t.find(e => typeof e == "object"));
  return t.map(r);
}