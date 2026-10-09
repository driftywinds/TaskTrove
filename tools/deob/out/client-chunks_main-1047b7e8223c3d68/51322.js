Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return y;
  },
  handleClientScriptLoad: function () {
    return m;
  },
  initScriptLoader: function () {
    return g;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./34007.js");
let i = require("./26908.js");
let s = require(/*webcrack:missing*/"./62021.js");
let u = o._(require(/*webcrack:missing*/"./80806.js"));
let l = i._(require(/*webcrack:missing*/"./74361.js"));
let c = require("./5745.js");
let f = require("./73585.js");
let d = require("./81525.js");
let p = new Map();
let h = new Set();
let _ = e => {
  let {
    src: t,
    id: r,
    onLoad: n = () => {},
    onReady: a = null,
    dangerouslySetInnerHTML: o,
    children: i = "",
    strategy: s = "afterInteractive",
    onError: l,
    stylesheets: c
  } = e;
  let d = r || t;
  if (d && h.has(d)) {
    return;
  }
  if (p.has(t)) {
    h.add(d);
    p.get(t).then(n, l);
    return;
  }
  let _ = () => {
    if (a) {
      a();
    }
    h.add(d);
  };
  let m = document.createElement("script");
  let g = new Promise((e, t) => {
    m.addEventListener("load", function (t) {
      e();
      if (n) {
        n.call(this, t);
      }
      _();
    });
    m.addEventListener("error", function (e) {
      t(e);
    });
  }).catch(function (e) {
    if (l) {
      l(e);
    }
  });
  if (o) {
    m.innerHTML = o.__html || "";
    _();
  } else if (i) {
    m.textContent = typeof i == "string" ? i : Array.isArray(i) ? i.join("") : "";
    _();
  } else if (t) {
    m.src = t;
    p.set(t, g);
  }
  (0, f.setAttributesFromProps)(m, e);
  if (s === "worker") {
    m.setAttribute("type", "text/partytown");
  }
  m.setAttribute("data-nscript", s);
  if (c) {
    (e => {
      if (u.default.preinit) {
        return e.forEach(e => {
          u.default.preinit(e, {
            as: "style"
          });
        });
      }
      {
        let t = document.head;
        e.forEach(e => {
          let r = document.createElement("link");
          r.type = "text/css";
          r.rel = "stylesheet";
          r.href = e;
          t.appendChild(r);
        });
      }
    })(c);
  }
  document.body.appendChild(m);
};
function m(e) {
  let {
    strategy: t = "afterInteractive"
  } = e;
  if (t === "lazyOnload") {
    window.addEventListener("load", () => {
      (0, d.requestIdleCallback)(() => _(e));
    });
  } else {
    _(e);
  }
}
function g(e) {
  e.forEach(m);
  [...document.querySelectorAll("[data-nscript=\"beforeInteractive\"]"), ...document.querySelectorAll("[data-nscript=\"beforePageRender\"]")].forEach(e => {
    let t = e.id || e.getAttribute("src");
    h.add(t);
  });
}
function E(e) {
  let {
    id: t,
    src: r = "",
    onLoad: n = () => {},
    onReady: a = null,
    strategy: o = "afterInteractive",
    onError: i,
    stylesheets: f,
    ...p
  } = e;
  let {
    updateScripts: m,
    scripts: g,
    getIsSsr: E,
    appDir: y,
    nonce: b
  } = (0, l.useContext)(c.HeadManagerContext);
  b = p.nonce || b;
  let P = (0, l.useRef)(false);
  (0, l.useEffect)(() => {
    let e = t || r;
    if (!P.current) {
      if (a && e && h.has(e)) {
        a();
      }
      P.current = true;
    }
  }, [a, t, r]);
  let R = (0, l.useRef)(false);
  (0, l.useEffect)(() => {
    if (!R.current) {
      if (o === "afterInteractive") {
        _(e);
      } else if (o === "lazyOnload") {
        if (document.readyState === "complete") {
          (0, d.requestIdleCallback)(() => _(e));
        } else {
          window.addEventListener("load", () => {
            (0, d.requestIdleCallback)(() => _(e));
          });
        }
      }
      R.current = true;
    }
  }, [e, o]);
  if (o === "beforeInteractive" || o === "worker") {
    if (m) {
      g[o] = (g[o] || []).concat([{
        id: t,
        src: r,
        onLoad: n,
        onReady: a,
        onError: i,
        ...p,
        nonce: b
      }]);
      m(g);
    } else if (E && E()) {
      h.add(t || r);
    } else if (E && !E()) {
      _({
        ...e,
        nonce: b
      });
    }
  }
  if (y) {
    if (f) {
      f.forEach(e => {
        u.default.preinit(e, {
          as: "style"
        });
      });
    }
    if (o === "beforeInteractive") {
      if (!r) {
        if (p.dangerouslySetInnerHTML) {
          p.children = p.dangerouslySetInnerHTML.__html;
          delete p.dangerouslySetInnerHTML;
        }
        return <script nonce={b} dangerouslySetInnerHTML={{
          __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0, {
            ...p,
            id: t
          }])})`
        }} />;
      } else {
        u.default.preload(r, p.integrity ? {
          as: "script",
          integrity: p.integrity,
          nonce: b,
          crossOrigin: p.crossOrigin
        } : {
          as: "script",
          nonce: b,
          crossOrigin: p.crossOrigin
        });
        return <script nonce={b} dangerouslySetInnerHTML={{
          __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r, {
            ...p,
            id: t
          }])})`
        }} />;
      }
    }
    if (o === "afterInteractive" && r) {
      u.default.preload(r, p.integrity ? {
        as: "script",
        integrity: p.integrity,
        nonce: b,
        crossOrigin: p.crossOrigin
      } : {
        as: "script",
        nonce: b,
        crossOrigin: p.crossOrigin
      });
    }
  }
  return null;
}
Object.defineProperty(E, "__nextScript", {
  value: true
});
let y = E;
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}