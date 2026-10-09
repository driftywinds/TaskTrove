var n = require(/*webcrack:missing*/"./87849.js");
var a = (e, t, r, n, a, s, o, i) => {
  let l = document.documentElement;
  let c = ["light", "dark"];
  function u(t) {
    var r;
    (Array.isArray(e) ? e : [e]).forEach(e => {
      let r = e === "class";
      let n = r && s ? a.map(e => s[e] || e) : a;
      if (r) {
        l.classList.remove(...n);
        l.classList.add(s && s[t] ? s[t] : t);
      } else {
        l.setAttribute(e, t);
      }
    });
    r = t;
    if (i && c.includes(r)) {
      l.style.colorScheme = r;
    }
  }
  if (n) {
    u(n);
  } else {
    try {
      let e = localStorage.getItem(t) || r;
      let n = o && e === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
      u(n);
    } catch (e) {}
  }
};
var s = ["light", "dark"];
var o = "(prefers-color-scheme: dark)";
var i = typeof window == "undefined";
var l = n.createContext(undefined);
var c = {
  setTheme: e => {},
  themes: []
};
export var D = () => {
  return n.useContext(l) ?? c;
};
export var ThemeProvider = e => n.useContext(l) ? n.createElement(n.Fragment, null, e.children) : n.createElement(f, {
  ...e
});
var d = ["light", "dark"];
var f = ({
  forcedTheme: e,
  disableTransitionOnChange: t = false,
  enableSystem: r = true,
  enableColorScheme: a = true,
  storageKey: i = "theme",
  themes: c = d,
  defaultTheme: u = r ? "system" : "light",
  attribute: m = "data-theme",
  value: f,
  children: b,
  nonce: I,
  scriptProps: g
}) => {
  let [_, x] = n.useState(() => h(i, u));
  let [S, k] = n.useState(() => _ === "system" ? y() : _);
  let w = f ? Object.values(f) : c;
  let T = n.useCallback(e => {
    let n = e;
    if (!n) {
      return;
    }
    if (e === "system" && r) {
      n = y();
    }
    let o = f ? f[n] : n;
    let i = t ? v(I) : null;
    let l = document.documentElement;
    let c = e => {
      if (e === "class") {
        l.classList.remove(...w);
        if (o) {
          l.classList.add(o);
        }
      } else if (e.startsWith("data-")) {
        if (o) {
          l.setAttribute(e, o);
        } else {
          l.removeAttribute(e);
        }
      }
    };
    if (Array.isArray(m)) {
      m.forEach(c);
    } else {
      c(m);
    }
    if (a) {
      let e = s.includes(u) ? u : null;
      let t = s.includes(n) ? n : e;
      l.style.colorScheme = t;
    }
    if (i != null) {
      i();
    }
  }, [I]);
  let E = n.useCallback(e => {
    let t = typeof e == "function" ? e(_) : e;
    x(t);
    try {
      localStorage.setItem(i, t);
    } catch (e) {}
  }, [_]);
  let C = n.useCallback(t => {
    k(y(t));
    if (_ === "system" && r && !e) {
      T("system");
    }
  }, [_, e]);
  n.useEffect(() => {
    let e = window.matchMedia(o);
    e.addListener(C);
    C(e);
    return () => e.removeListener(C);
  }, [C]);
  n.useEffect(() => {
    let e = e => {
      if (e.key === i) {
        if (e.newValue) {
          x(e.newValue);
        } else {
          E(u);
        }
      }
    };
    window.addEventListener("storage", e);
    return () => window.removeEventListener("storage", e);
  }, [E]);
  n.useEffect(() => {
    T(e ?? _);
  }, [e, _]);
  let L = n.useMemo(() => ({
    theme: _,
    setTheme: E,
    forcedTheme: e,
    resolvedTheme: _ === "system" ? S : _,
    themes: r ? [...c, "system"] : c,
    systemTheme: r ? S : undefined
  }), [_, E, e, S, r, c]);
  return n.createElement(l.Provider, {
    value: L
  }, n.createElement(p, {
    forcedTheme: e,
    storageKey: i,
    attribute: m,
    enableSystem: r,
    enableColorScheme: a,
    defaultTheme: u,
    value: f,
    themes: c,
    nonce: I,
    scriptProps: g
  }), b);
};
var p = n.memo(({
  forcedTheme: e,
  storageKey: t,
  attribute: r,
  enableSystem: s,
  enableColorScheme: o,
  defaultTheme: i,
  value: l,
  themes: c,
  nonce: u,
  scriptProps: m
}) => {
  let d = JSON.stringify([r, t, i, e, c, l, s, o]).slice(1, -1);
  return n.createElement("script", {
    ...m,
    suppressHydrationWarning: true,
    nonce: typeof window == "undefined" ? u : "",
    dangerouslySetInnerHTML: {
      __html: `(${a.toString()})(${d})`
    }
  });
});
var h = (e, t) => {
  let r;
  if (!i) {
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
var y = e => {
  e ||= window.matchMedia(o);
  if (e.matches) {
    return "dark";
  } else {
    return "light";
  }
};