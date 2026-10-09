var n = require(/*webcrack:missing*/"./87849.js");
var o = require("./21701.js");
var i = require(/*webcrack:missing*/"./8349.js");
export function TL(e) {
  var t;
  let r;
  t = e;
  (r = n.forwardRef((e, t) => {
    let {
      children: r,
      ...i
    } = e;
    if (n.isValidElement(r)) {
      var a;
      let e;
      let s;
      a = r;
      let l = (s = (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (s = (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref;
      let u = function (e, t) {
        let r = {
          ...t
        };
        for (let n in t) {
          let o = e[n];
          let i = t[n];
          if (/^on[A-Z]/.test(n)) {
            if (o && i) {
              r[n] = (...e) => {
                let t = i(...e);
                o(...e);
                return t;
              };
            } else if (o) {
              r[n] = o;
            }
          } else if (n === "style") {
            r[n] = {
              ...o,
              ...i
            };
          } else if (n === "className") {
            r[n] = [o, i].filter(Boolean).join(" ");
          }
        }
        return {
          ...e,
          ...r
        };
      }(i, r.props);
      if (r.type !== n.Fragment) {
        u.ref = t ? (0, o.t)(t, l) : l;
      }
      return n.cloneElement(r, u);
    }
    if (n.Children.count(r) > 1) {
      return n.Children.only(null);
    } else {
      return null;
    }
  })).displayName = `${t}.SlotClone`;
  let _Component2 = r;
  let s = n.forwardRef((e, t) => {
    let {
      children: r,
      ...o
    } = e;
    let s = n.Children.toArray(r);
    let l = s.find(c);
    if (l) {
      let e = l.props.children;
      let r = s.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
      return <_Component2 {...o} ref={t}>{n.isValidElement(e) ? n.cloneElement(e, undefined, r) : null}</_Component2>;
    }
    return <_Component2 {...o} ref={t}>{r}</_Component2>;
  });
  s.displayName = `${e}.Slot`;
  return s;
}
export var DX = TL("Slot");
var l = Symbol("radix.slottable");
export function Dc(e) {
  let t = ({
    children: e
  }) => <i.Fragment>{e}</i.Fragment>;
  t.displayName = `${e}.Slottable`;
  t.__radixId = l;
  return t;
}
function c(e) {
  return n.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === l;
}