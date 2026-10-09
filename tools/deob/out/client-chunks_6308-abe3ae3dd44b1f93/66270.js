var n;
var o;
var i;
var a;
var s;
var l;
var u;
var c = require(/*webcrack:missing*/"./6009.js");
var d = require(/*webcrack:missing*/"./87849.js");
var f = "right-scroll-bar-position";
var p = "width-before-scroll-bar";
function m(e, t) {
  if (typeof e == "function") {
    e(t);
  } else if (e) {
    e.current = t;
  }
  return e;
}
var h = typeof window != "undefined" ? d.useLayoutEffect : d.useEffect;
var v = new WeakMap();
if (n === undefined) {
  n = {};
}
(o === undefined && (o = function (e) {
  return e;
}), i = [], a = false, s = {
  read: function () {
    if (a) {
      throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    }
    if (i.length) {
      return i[i.length - 1];
    } else {
      return null;
    }
  },
  useMedium: function (e) {
    var t = o(e, a);
    i.push(t);
    return function () {
      i = i.filter(function (e) {
        return e !== t;
      });
    };
  },
  assignSyncMedium: function (e) {
    for (a = true; i.length;) {
      var t = i;
      i = [];
      t.forEach(e);
    }
    i = {
      push: function (t) {
        return e(t);
      },
      filter: function () {
        return i;
      }
    };
  },
  assignMedium: function (e) {
    a = true;
    var t = [];
    if (i.length) {
      var r = i;
      i = [];
      r.forEach(e);
      t = i;
    }
    function n() {
      var r = t;
      t = [];
      r.forEach(e);
    }
    function o() {
      return Promise.resolve().then(n);
    }
    o();
    i = {
      push: function (e) {
        t.push(e);
        o();
      },
      filter: function (e) {
        t = t.filter(e);
        return i;
      }
    };
  }
}).options = (0, c.Cl)({
  async: true,
  ssr: false
}, n);
var g = s;
function y() {}
var b = d.forwardRef(function (e, t) {
  var r;
  var n;
  var o;
  var i;
  var a = d.useRef(null);
  var s = d.useState({
    onScrollCapture: y,
    onWheelCapture: y,
    onTouchMoveCapture: y
  });
  var l = s[0];
  var u = s[1];
  var f = e.forwardProps;
  var p = e.children;
  var b = e.className;
  var w = e.removeScrollBar;
  var E = e.enabled;
  var x = e.shards;
  var S = e.sideCar;
  var C = e.noRelative;
  var _ = e.noIsolation;
  var O = e.inert;
  var P = e.allowPinchZoom;
  var A = e.as;
  var j = e.gapMode;
  var R = (0, c.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  r = [a, t];
  n = function (e) {
    return r.forEach(function (t) {
      return m(t, e);
    });
  };
  (o = (0, d.useState)(function () {
    return {
      value: null,
      callback: n,
      facade: {
        get current() {
          return o.value;
        },
        set current(value) {
          var e = o.value;
          if (e !== value) {
            o.value = value;
            o.callback(value, e);
          }
        }
      }
    };
  })[0]).callback = n;
  i = o.facade;
  h(function () {
    var e = v.get(i);
    if (e) {
      var t = new Set(e);
      var n = new Set(r);
      var o = i.current;
      t.forEach(function (e) {
        if (!n.has(e)) {
          m(e, null);
        }
      });
      n.forEach(function (e) {
        if (!t.has(e)) {
          m(e, o);
        }
      });
    }
    v.set(i, r);
  }, [r]);
  var k = i;
  var T = (0, c.Cl)((0, c.Cl)({}, R), l);
  return d.createElement(d.Fragment, null, E && d.createElement(S, {
    sideCar: g,
    removeScrollBar: w,
    shards: x,
    noRelative: C,
    noIsolation: _,
    inert: O,
    setCallbacks: u,
    allowPinchZoom: !!P,
    lockRef: a,
    gapMode: j
  }), f ? d.cloneElement(d.Children.only(p), (0, c.Cl)((0, c.Cl)({}, T), {
    ref: k
  })) : d.createElement(A === undefined ? "div" : A, (0, c.Cl)({}, T, {
    className: b,
    ref: k
  }), p));
});
b.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
b.classNames = {
  fullWidth: p,
  zeroRight: f
};
function w(e) {
  var t = e.sideCar;
  var r = (0, c.Tt)(e, ["sideCar"]);
  if (!t) {
    throw Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var n = t.read();
  if (!n) {
    throw Error("Sidecar medium not found");
  }
  return d.createElement(n, (0, c.Cl)({}, r));
}
w.isSideCarExport = true;
function E() {
  var e = 0;
  var t = null;
  return {
    add: function (n) {
      if (e == 0 && (t = function () {
        if (!document) {
          return null;
        }
        var e = document.createElement("style");
        e.type = "text/css";
        var t = u || require.nc;
        if (t) {
          e.setAttribute("nonce", t);
        }
        return e;
      }())) {
        var o;
        var i;
        if ((o = t).styleSheet) {
          o.styleSheet.cssText = n;
        } else {
          o.appendChild(document.createTextNode(n));
        }
        i = t;
        (document.head || document.getElementsByTagName("head")[0]).appendChild(i);
      }
      e++;
    },
    remove: function () {
      if (! --e && !!t) {
        if (t.parentNode) {
          t.parentNode.removeChild(t);
        }
        t = null;
      }
    }
  };
}
function x() {
  var e = E();
  return function (t, r) {
    d.useEffect(function () {
      e.add(t);
      return function () {
        e.remove();
      };
    }, [t && r]);
  };
}
function S() {
  var e = x();
  return function (t) {
    e(t.styles, t.dynamic);
    return null;
  };
}
var C = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
function _(e) {
  return parseInt(e || "", 10) || 0;
}
function O(e) {
  var t = window.getComputedStyle(document.body);
  var r = t[e === "padding" ? "paddingLeft" : "marginLeft"];
  var n = t[e === "padding" ? "paddingTop" : "marginTop"];
  var o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [_(r), _(n), _(o)];
}
function P(e = "margin") {
  if (typeof window == "undefined") {
    return C;
  }
  var t = O(e);
  var r = document.documentElement.clientWidth;
  var n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}
var _A = S();
var j = "data-scroll-locked";
function R(e, t, r, n) {
  var o = e.left;
  var i = e.top;
  var a = e.right;
  var s = e.gap;
  if (r === undefined) {
    r = "margin";
  }
  return `
  .with-scroll-bars-hidden {
   overflow: hidden ${n};
   padding-right: ${s}px ${n};
  }
  body[${j}] {
    overflow: hidden ${n};
    overscroll-behavior: contain;
    ${[t && `position: relative ${n};`, r === "margin" && `
    padding-left: ${o}px;
    padding-top: ${i}px;
    padding-right: ${a}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${n};
    `, r === "padding" && `padding-right: ${s}px ${n};`].filter(Boolean).join("")}
  }
  
  .${f} {
    right: ${s}px ${n};
  }
  
  .${p} {
    margin-right: ${s}px ${n};
  }
  
  .${f} .${f} {
    right: 0 ${n};
  }
  
  .${p} .${p} {
    margin-right: 0 ${n};
  }
  
  body[${j}] {
    --removed-body-scroll-bar-size: ${s}px;
  }
`;
}
function k() {
  var e = parseInt(document.body.getAttribute(j) || "0", 10);
  if (isFinite(e)) {
    return e;
  } else {
    return 0;
  }
}
function T() {
  d.useEffect(function () {
    document.body.setAttribute(j, (k() + 1).toString());
    return function () {
      var e = k() - 1;
      if (e <= 0) {
        document.body.removeAttribute(j);
      } else {
        document.body.setAttribute(j, e.toString());
      }
    };
  }, []);
}
function N(e) {
  var t = e.noRelative;
  var r = e.noImportant;
  var n = e.gapMode;
  var o = n === undefined ? "margin" : n;
  T();
  var i = d.useMemo(function () {
    return P(o);
  }, [o]);
  return d.createElement(_A, {
    styles: R(i, !t, o, r ? "" : "!important")
  });
}
var D = false;
if (typeof window != "undefined") {
  try {
    var M = Object.defineProperty({}, "passive", {
      get: function () {
        D = true;
        return true;
      }
    });
    window.addEventListener("test", M, M);
    window.removeEventListener("test", M, M);
  } catch (e) {
    D = false;
  }
}
var L = !!D && {
  passive: false
};
function I(e, t) {
  if (!(e instanceof Element)) {
    return false;
  }
  var r = window.getComputedStyle(e);
  return r[t] !== "hidden" && (r.overflowY !== r.overflowX || e.tagName === "TEXTAREA" || r[t] !== "visible");
}
function $(e, t) {
  var r = t.ownerDocument;
  var n = t;
  do {
    if (typeof ShadowRoot != "undefined" && n instanceof ShadowRoot) {
      n = n.host;
    }
    if (U(e, n)) {
      var o = F(e, n);
      if (o[1] > o[2]) {
        return true;
      }
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return false;
}
function U(e, t) {
  if (e === "v") {
    return I(t, "overflowY");
  } else {
    return I(t, "overflowX");
  }
}
function F(e, t) {
  if (e === "v") {
    return [t.scrollTop, t.scrollHeight, t.clientHeight];
  } else {
    return [t.scrollLeft, t.scrollWidth, t.clientWidth];
  }
}
function W(e, t, r, n, o) {
  var i;
  i = window.getComputedStyle(t).direction;
  var a = e === "h" && i === "rtl" ? -1 : 1;
  var s = a * n;
  var l = r.target;
  var u = t.contains(l);
  var c = false;
  var d = s > 0;
  var f = 0;
  var p = 0;
  do {
    if (!l) {
      break;
    }
    var m = F(e, l);
    var h = m[0];
    var v = m[1] - m[2] - a * h;
    if ((h || v) && U(e, l)) {
      f += v;
      p += h;
    }
    var g = l.parentNode;
    l = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
  } while (!u && l !== document.body || u && (t.contains(l) || t === l));
  if (d && (o && Math.abs(f) < 1 || !o && s > f)) {
    c = true;
  } else if (!d && (o && Math.abs(p) < 1 || !o && -s > p)) {
    c = true;
  }
  return c;
}
function z(e) {
  if ("changedTouches" in e) {
    return [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
  } else {
    return [0, 0];
  }
}
function B(e) {
  return [e.deltaX, e.deltaY];
}
function q(e) {
  if (e && "current" in e) {
    return e.current;
  } else {
    return e;
  }
}
var X = 0;
var H = [];
l = function (e) {
  var t = d.useRef([]);
  var r = d.useRef([0, 0]);
  var n = d.useRef();
  var o = d.useState(X++)[0];
  var i = d.useState(S)[0];
  var a = d.useRef(e);
  d.useEffect(function () {
    a.current = e;
  }, [e]);
  d.useEffect(function () {
    if (e.inert) {
      document.body.classList.add(`block-interactivity-${o}`);
      var t = (0, c.fX)([e.lockRef.current], (e.shards || []).map(q), true).filter(Boolean);
      t.forEach(function (e) {
        return e.classList.add(`allow-interactivity-${o}`);
      });
      return function () {
        document.body.classList.remove(`block-interactivity-${o}`);
        t.forEach(function (e) {
          return e.classList.remove(`allow-interactivity-${o}`);
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = d.useCallback(function (e, t) {
    if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) {
      return !a.current.allowPinchZoom;
    }
    var o;
    var i = z(e);
    var s = r.current;
    var l = "deltaX" in e ? e.deltaX : s[0] - i[0];
    var u = "deltaY" in e ? e.deltaY : s[1] - i[1];
    var c = e.target;
    var d = Math.abs(l) > Math.abs(u) ? "h" : "v";
    if ("touches" in e && d === "h" && c.type === "range") {
      return false;
    }
    var f = $(d, c);
    if (!f) {
      return true;
    }
    if (f) {
      o = d;
    } else {
      o = d === "v" ? "h" : "v";
      f = $(d, c);
    }
    if (!f) {
      return false;
    }
    if (!n.current && "changedTouches" in e && (l || u)) {
      n.current = o;
    }
    if (!o) {
      return true;
    }
    var p = n.current || o;
    return W(p, t, e, p === "h" ? l : u, true);
  }, []);
  var l = d.useCallback(function (e) {
    if (H.length && H[H.length - 1] === i) {
      var r = "deltaY" in e ? B(e) : z(e);
      var n = t.current.filter(function (t) {
        var n;
        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta, n[0] === r[0] && n[1] === r[1]);
      })[0];
      if (n && n.should) {
        if (e.cancelable) {
          e.preventDefault();
        }
        return;
      }
      if (!n) {
        var o = (a.current.shards || []).map(q).filter(Boolean).filter(function (t) {
          return t.contains(e.target);
        });
        if ((o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) && e.cancelable) {
          e.preventDefault();
        }
      }
    }
  }, []);
  var u = d.useCallback(function (e, r, n, o) {
    var i = {
      name: e,
      delta: r,
      target: n,
      should: o,
      shadowParent: function (e) {
        for (var t = null; e !== null;) {
          if (e instanceof ShadowRoot) {
            t = e.host;
            e = e.host;
          }
          e = e.parentNode;
        }
        return t;
      }(n)
    };
    t.current.push(i);
    setTimeout(function () {
      t.current = t.current.filter(function (e) {
        return e !== i;
      });
    }, 1);
  }, []);
  var f = d.useCallback(function (e) {
    r.current = z(e);
    n.current = undefined;
  }, []);
  var p = d.useCallback(function (t) {
    u(t.type, B(t), t.target, s(t, e.lockRef.current));
  }, []);
  var m = d.useCallback(function (t) {
    u(t.type, z(t), t.target, s(t, e.lockRef.current));
  }, []);
  d.useEffect(function () {
    H.push(i);
    e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    });
    document.addEventListener("wheel", l, L);
    document.addEventListener("touchmove", l, L);
    document.addEventListener("touchstart", f, L);
    return function () {
      H = H.filter(function (e) {
        return e !== i;
      });
      document.removeEventListener("wheel", l, L);
      document.removeEventListener("touchmove", l, L);
      document.removeEventListener("touchstart", f, L);
    };
  }, []);
  var h = e.removeScrollBar;
  var v = e.inert;
  return d.createElement(d.Fragment, null, v ? d.createElement(i, {
    styles: `
  .block-interactivity-${o} {pointer-events: none;}
  .allow-interactivity-${o} {pointer-events: all;}
`
  }) : null, h ? d.createElement(N, {
    noRelative: e.noRelative,
    gapMode: e.gapMode
  }) : null);
};
g.useMedium(l);
let K = w;
var V = d.forwardRef(function (e, t) {
  return d.createElement(b, (0, c.Cl)({}, e, {
    ref: t,
    sideCar: K
  }));
});
V.classNames = b.classNames;
export let A = V;