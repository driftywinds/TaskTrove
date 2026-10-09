var n;
var o = require(/*webcrack:missing*/"./87849.js");
var _i = require("./23878.js");
var a = (n ||= require.t(o, 2))[" useInsertionEffect ".trim().toString()] || _i.N;
export function i({
  prop: e,
  defaultProp: t,
  onChange: r = () => {},
  caller: n
}) {
  let [i, s, l] = function ({
    defaultProp: e,
    onChange: t
  }) {
    let [r, n] = o.useState(e);
    let i = o.useRef(r);
    let s = o.useRef(t);
    a(() => {
      s.current = t;
    }, [t]);
    o.useEffect(() => {
      if (i.current !== r) {
        s.current?.(r);
        i.current = r;
      }
    }, [r, i]);
    return [r, n, s];
  }({
    defaultProp: t,
    onChange: r
  });
  let u = e !== undefined;
  let c = u ? e : i;
  {
    let t = o.useRef(e !== undefined);
    o.useEffect(() => {
      let e = t.current;
      if (e !== u) {
        let t = u ? "controlled" : "uncontrolled";
        console.warn(`${n} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      t.current = u;
    }, [u, n]);
  }
  return [c, o.useCallback(t => {
    if (u) {
      let r = typeof t == "function" ? t(e) : t;
      if (r !== e) {
        l.current?.(r);
      }
    } else {
      s(t);
    }
  }, [u, e, s, l])];
}
Symbol("RADIX:SYNC_STATE");