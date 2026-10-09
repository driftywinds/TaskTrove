var n = require(/*webcrack:missing*/"./87849.js");
var o = (e, t, r, n, o, i, a, s) => {
  let l = document.documentElement;
  let u = ["light", "dark"];
  function c(t) {
    var r;
    (Array.isArray(e) ? e : [e]).forEach(e => {
      let r = e === "class";
      let n = r && i ? o.map(e => i[e] || e) : o;
      if (r) {
        l.classList.remove(...n);
        l.classList.add(i && i[t] ? i[t] : t);
      } else {
        l.setAttribute(e, t);
      }
    });
    r = t;
    if (s && u.includes(r)) {
      l.style.colorScheme = r;
    }
  }
  if (n) {
    c(n);
  } else {
    try {
      let e = localStorage.getItem(t) || r;
      let n = a && e === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
      c(n);
    } catch (e) {}
  }
};
var i = ["light", "dark"];
var a = "(prefers-color-scheme: dark)";
var s = typeof window == "undefined";
var l = n.createContext(undefined);
var u = {
  setTheme: e => {},
  themes: []
};
export var D = () => {
  return n.useContext(l) ?? u;
};
export var ThemeProvider = e => n.useContext(l) ? n.createElement(n.Fragment, null, e.children) : n.createElement(p, {
  ...e
});
var f = ["light", "dark"];
var p = ({
  forcedTheme: e,
  disableTransitionOnChange: t = false,
  enableSystem: r = true,
  enableColorScheme: o = true,
  storageKey: s = "theme",
  themes: u = f,
  defaultTheme: c = r ? "system" : "light",
  attribute: d = "data-theme",
  value: p,
  children: y,
  nonce: b,
  scriptProps: w
}) => {
  let [E, x] = n.useState(() => h(s, c));
  let [S, C] = n.useState(() => E === "system" ? g() : E);
  let _ = p ? Object.values(p) : u;
  let O = n.useCallback(e => {
    let n = e;
    if (!n) {
      return;
    }
    if (e === "system" && r) {
      n = g();
    }
    let a = p ? p[n] : n;
    let s = t ? v(b) : null;
    let l = document.documentElement;
    let u = e => {
      if (e === "class") {
        l.classList.remove(..._);
        if (a) {
          l.classList.add(a);
        }
      } else if (e.startsWith("data-")) {
        if (a) {
          l.setAttribute(e, a);
        } else {
          l.removeAttribute(e);
        }
      }
    };
    if (Array.isArray(d)) {
      d.forEach(u);
    } else {
      u(d);
    }
    if (o) {
      let e = i.includes(c) ? c : null;
      let t = i.includes(n) ? n : e;
      l.style.colorScheme = t;
    }
    if (s != null) {
      s();
    }
  }, [b]);
  let P = n.useCallback(e => {
    let t = typeof e == "function" ? e(E) : e;
    x(t);
    try {
      localStorage.setItem(s, t);
    } catch (e) {}
  }, [E]);
  let A = n.useCallback(t => {
    C(g(t));
    if (E === "system" && r && !e) {
      O("system");
    }
  }, [E, e]);
  n.useEffect(() => {
    let e = window.matchMedia(a);
    e.addListener(A);
    A(e);
    return () => e.removeListener(A);
  }, [A]);
  n.useEffect(() => {
    let e = e => {
      if (e.key === s) {
        if (e.newValue) {
          x(e.newValue);
        } else {
          P(c);
        }
      }
    };
    window.addEventListener("storage", e);
    return () => window.removeEventListener("storage", e);
  }, [P]);
  n.useEffect(() => {
    O(e ?? E);
  }, [e, E]);
  let j = n.useMemo(() => ({
    theme: E,
    setTheme: P,
    forcedTheme: e,
    resolvedTheme: E === "system" ? S : E,
    themes: r ? [...u, "system"] : u,
    systemTheme: r ? S : undefined
  }), [E, P, e, S, r, u]);
  return n.createElement(l.Provider, {
    value: j
  }, n.createElement(m, {
    forcedTheme: e,
    storageKey: s,
    attribute: d,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: c,
    value: p,
    themes: u,
    nonce: b,
    scriptProps: w
  }), y);
};
var m = n.memo(({
  forcedTheme: e,
  storageKey: t,
  attribute: r,
  enableSystem: i,
  enableColorScheme: a,
  defaultTheme: s,
  value: l,
  themes: u,
  nonce: c,
  scriptProps: d
}) => {
  let f = JSON.stringify([r, t, s, e, u, l, i, a]).slice(1, -1);
  return n.createElement("script", {
    ...d,
    suppressHydrationWarning: true,
    nonce: typeof window == "undefined" ? c : "",
    dangerouslySetInnerHTML: {
      __html: `(${o.toString()})(${f})`
    }
  });
});
var h = (e, t) => {
  let r;
  if (!s) {
    try {
      r = localStorage.getItem(e) || undefined;
    } catch (e) {}
    return r || t;
  }
};
var v = e => {
  let t = document.createElement("style");
  if (e) {
    t.setAttribute("nonce", e);
  }
  t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"));
  document.head.appendChild(t);
  return () => {
    window.getComputedStyle(document.body);
    setTimeout(() => {
      document.head.removeChild(t);
    }, 1);
  };
};
var g = e => {
  e ||= window.matchMedia(a);
  if (e.matches) {
    return "dark";
  } else {
    return "light";
  }
};