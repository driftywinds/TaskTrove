var n;
var o = require(/*webcrack:missing*/"./87849.js");
var i = require("./71446.js");
var a = require("./42038.js");
var s = require("./21701.js");
var l = require("./88302.js");
var u = require(/*webcrack:missing*/"./8349.js");
var c = "dismissableLayer.update";
var d = o.createContext({
  layers: new Set(),
  layersWithOutsidePointerEventsDisabled: new Set(),
  branches: new Set()
});
export var qW = o.forwardRef((e, t) => {
  let {
    disableOutsidePointerEvents: r = false,
    onEscapeKeyDown: f,
    onPointerDownOutside: h,
    onFocusOutside: v,
    onInteractOutside: g,
    onDismiss: y,
    ...b
  } = e;
  let w = o.useContext(d);
  let [E, x] = o.useState(null);
  let S = E?.ownerDocument ?? globalThis?.document;
  let [, C] = o.useState({});
  let _ = (0, s.s)(t, e => x(e));
  let O = Array.from(w.layers);
  let [P] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1);
  let A = O.indexOf(P);
  let j = E ? O.indexOf(E) : -1;
  let R = w.layersWithOutsidePointerEventsDisabled.size > 0;
  let k = j >= A;
  let T = function (e, t = globalThis?.document) {
    let r = (0, l.c)(e);
    let n = o.useRef(false);
    let i = o.useRef(() => {});
    o.useEffect(() => {
      let e = e => {
        if (e.target && !n.current) {
          let n = function () {
            m("dismissableLayer.pointerDownOutside", r, o, {
              discrete: true
            });
          };
          let o = {
            originalEvent: e
          };
          if (e.pointerType === "touch") {
            t.removeEventListener("click", i.current);
            i.current = n;
            t.addEventListener("click", i.current, {
              once: true
            });
          } else {
            n();
          }
        } else {
          t.removeEventListener("click", i.current);
        }
        n.current = false;
      };
      let o = window.setTimeout(() => {
        t.addEventListener("pointerdown", e);
      }, 0);
      return () => {
        window.clearTimeout(o);
        t.removeEventListener("pointerdown", e);
        t.removeEventListener("click", i.current);
      };
    }, [t, r]);
    return {
      onPointerDownCapture: () => n.current = true
    };
  }(e => {
    let t = e.target;
    let r = [...w.branches].some(e => e.contains(t));
    if (k && !r) {
      h?.(e);
      g?.(e);
      if (!e.defaultPrevented) {
        y?.();
      }
    }
  }, S);
  let N = function (e, t = globalThis?.document) {
    let r = (0, l.c)(e);
    let n = o.useRef(false);
    o.useEffect(() => {
      let e = e => {
        if (e.target && !n.current) {
          m("dismissableLayer.focusOutside", r, {
            originalEvent: e
          }, {
            discrete: false
          });
        }
      };
      t.addEventListener("focusin", e);
      return () => t.removeEventListener("focusin", e);
    }, [t, r]);
    return {
      onFocusCapture: () => n.current = true,
      onBlurCapture: () => n.current = false
    };
  }(e => {
    let t = e.target;
    if (![...w.branches].some(e => e.contains(t))) {
      v?.(e);
      g?.(e);
      if (!e.defaultPrevented) {
        y?.();
      }
    }
  }, S);
  (function (e, t = globalThis?.document) {
    let r = (0, l.c)(e);
    o.useEffect(() => {
      let e = e => {
        if (e.key === "Escape") {
          r(e);
        }
      };
      t.addEventListener("keydown", e, {
        capture: true
      });
      return () => t.removeEventListener("keydown", e, {
        capture: true
      });
    }, [r, t]);
  })(e => {
    if (j === w.layers.size - 1) {
      f?.(e);
      if (!e.defaultPrevented && y) {
        e.preventDefault();
        y();
      }
    }
  }, S);
  o.useEffect(() => {
    if (E) {
      if (r) {
        if (w.layersWithOutsidePointerEventsDisabled.size === 0) {
          n = S.body.style.pointerEvents;
          S.body.style.pointerEvents = "none";
        }
        w.layersWithOutsidePointerEventsDisabled.add(E);
      }
      w.layers.add(E);
      p();
      return () => {
        if (r && w.layersWithOutsidePointerEventsDisabled.size === 1) {
          S.body.style.pointerEvents = n;
        }
      };
    }
  }, [E, S, r, w]);
  o.useEffect(() => () => {
    if (E) {
      w.layers.delete(E);
      w.layersWithOutsidePointerEventsDisabled.delete(E);
      p();
    }
  }, [E, w]);
  o.useEffect(() => {
    let e = () => C({});
    document.addEventListener(c, e);
    return () => document.removeEventListener(c, e);
  }, []);
  return <a.sG.div {...b} ref={_} style={{
    pointerEvents: R ? k ? "auto" : "none" : undefined,
    ...e.style
  }} onFocusCapture={(0, i.mK)(e.onFocusCapture, N.onFocusCapture)} onBlurCapture={(0, i.mK)(e.onBlurCapture, N.onBlurCapture)} onPointerDownCapture={(0, i.mK)(e.onPointerDownCapture, T.onPointerDownCapture)} />;
});
function p() {
  let e = new CustomEvent(c);
  document.dispatchEvent(e);
}
function m(e, t, r, {
  discrete: n
}) {
  let o = r.originalEvent.target;
  let i = new CustomEvent(e, {
    bubbles: false,
    cancelable: true,
    detail: r
  });
  if (t) {
    o.addEventListener(e, t, {
      once: true
    });
  }
  if (n) {
    (0, a.hO)(o, i);
  } else {
    o.dispatchEvent(i);
  }
}
qW.displayName = "DismissableLayer";
o.forwardRef((e, t) => {
  let r = o.useContext(d);
  let n = o.useRef(null);
  let i = (0, s.s)(t, n);
  o.useEffect(() => {
    let e = n.current;
    if (e) {
      r.branches.add(e);
      return () => {
        r.branches.delete(e);
      };
    }
  }, [r.branches]);
  return <a.sG.div {...e} ref={i} />;
}).displayName = "DismissableLayerBranch";