var n;
var o = require(/*webcrack:missing*/"./87849.js");
var i = require("./23878.js");
var a = (n ||= require.t(o, 2))[" useId ".trim().toString()] || (() => undefined);
var s = 0;
export function B(e) {
  let [t, r] = o.useState(a());
  (0, i.N)(() => {
    if (!e) {
      r(e => e ?? String(s++));
    }
  }, [e]);
  return e || (t ? `radix-${t}` : "");
}