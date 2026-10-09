var n = require(/*webcrack:missing*/"./87849.js");
var o = require("./21701.js");
var i = require("./23878.js");
export var C = e => {
  var t;
  let r;
  let a;
  let {
    present: l,
    children: u
  } = e;
  let c = function (e) {
    var t;
    var r;
    let [o, a] = n.useState();
    let l = n.useRef(null);
    let u = n.useRef(e);
    let c = n.useRef("none");
    t = e ? "mounted" : "unmounted";
    r = {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    };
    let [d, f] = n.useReducer((e, t) => r[e][t] ?? e, t);
    n.useEffect(() => {
      let e = s(l.current);
      c.current = d === "mounted" ? e : "none";
    }, [d]);
    (0, i.N)(() => {
      let t = l.current;
      let r = u.current;
      if (r !== e) {
        let n = c.current;
        let o = s(t);
        if (e) {
          f("MOUNT");
        } else if (o === "none" || t?.display === "none") {
          f("UNMOUNT");
        } else if (r && n !== o) {
          f("ANIMATION_OUT");
        } else {
          f("UNMOUNT");
        }
        u.current = e;
      }
    }, [e, f]);
    (0, i.N)(() => {
      if (o) {
        let e;
        let t = o.ownerDocument.defaultView ?? window;
        let r = r => {
          let n = s(l.current).includes(CSS.escape(r.animationName));
          if (r.target === o && n && (f("ANIMATION_END"), !u.current)) {
            let r = o.style.animationFillMode;
            o.style.animationFillMode = "forwards";
            e = t.setTimeout(() => {
              if (o.style.animationFillMode === "forwards") {
                o.style.animationFillMode = r;
              }
            });
          }
        };
        let n = e => {
          if (e.target === o) {
            c.current = s(l.current);
          }
        };
        o.addEventListener("animationstart", n);
        o.addEventListener("animationcancel", r);
        o.addEventListener("animationend", r);
        return () => {
          t.clearTimeout(e);
          o.removeEventListener("animationstart", n);
          o.removeEventListener("animationcancel", r);
          o.removeEventListener("animationend", r);
        };
      }
      f("ANIMATION_END");
    }, [o, f]);
    return {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: n.useCallback(e => {
        l.current = e ? getComputedStyle(e) : null;
        a(e);
      }, [])
    };
  }(l);
  let d = typeof u == "function" ? u({
    present: c.isPresent
  }) : n.Children.only(u);
  let f = (0, o.s)(c.ref, (t = d, (a = (r = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) && "isReactWarning" in r && r.isReactWarning) ? t.ref : (a = (r = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning" in r && r.isReactWarning) ? t.props.ref : t.props.ref || t.ref));
  if (typeof u == "function" || c.isPresent) {
    return n.cloneElement(d, {
      ref: f
    });
  } else {
    return null;
  }
};
function s(e) {
  return e?.animationName || "none";
}
C.displayName = "Presence";