var n = require(/*webcrack:missing*/"./87849.js");
var o = require(/*webcrack:missing*/"./23164.js");
var i = require("./22541.js");
var a = require(/*webcrack:missing*/"./8349.js");
export var sG = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
  let r = (0, i.TL)(`Primitive.${t}`);
  let o = n.forwardRef((e, n) => {
    let {
      asChild: o,
      ...i
    } = e;
    if (typeof window != "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    const Component = o ? r : t;
    return <Component {...i} ref={n} />;
  });
  o.displayName = `Primitive.${t}`;
  return {
    ...e,
    [t]: o
  };
}, {});
export function hO(e, t) {
  if (e) {
    o.flushSync(() => e.dispatchEvent(t));
  }
}