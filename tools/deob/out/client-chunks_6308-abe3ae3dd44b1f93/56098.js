var n = require(/*webcrack:missing*/"./87849.js");
var o = require(/*webcrack:missing*/"./23164.js");
var i = require("./42038.js");
var a = require("./23878.js");
var s = require(/*webcrack:missing*/"./8349.js");
export var Z = n.forwardRef((e, t) => {
  let {
    container: r,
    ...l
  } = e;
  let [u, c] = n.useState(false);
  (0, a.N)(() => c(true), []);
  let d = r || u && globalThis?.document?.body;
  if (d) {
    return o.createPortal(<i.sG.div {...l} ref={t} />, d);
  } else {
    return null;
  }
});
Z.displayName = "Portal";