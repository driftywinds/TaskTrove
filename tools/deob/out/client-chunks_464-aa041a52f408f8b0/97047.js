let i;
var o = require(/*webcrack:missing*/"./87849.js");
require("./3095.js");
Object.create(null);
let r = {};
let a = (e, t, s, i) => {
  if (!h(s) || !r[s]) {
    if (h(s)) {
      r[s] = new Date();
    }
    ((e, t, s, i) => {
      let o = [s, {
        code: t,
        ...(i || {})
      }];
      if (e?.services?.logger?.forward) {
        return e.services.logger.forward(o, "warn", "react-i18next::", true);
      }
      if (h(o[0])) {
        o[0] = `react-i18next:: ${o[0]}`;
      }
      if (e?.services?.logger?.warn) {
        e.services.logger.warn(...o);
      } else if (console?.warn) {
        console.warn(...o);
      }
    })(e, t, s, i);
  }
};
let n = (e, t) => () => {
  if (e.isInitialized) {
    t();
  } else {
    let s = () => {
      setTimeout(() => {
        e.off("initialized", s);
      }, 0);
      t();
    };
    e.on("initialized", s);
  }
};
let l = (e, t, s) => {
  e.loadNamespaces(t, n(e, s));
};
let u = (e, t, s, i) => {
  if (h(s)) {
    s = [s];
  }
  if (e.options.preload && e.options.preload.indexOf(t) > -1) {
    return l(e, s, i);
  }
  s.forEach(t => {
    if (e.options.ns.indexOf(t) < 0) {
      e.options.ns.push(t);
    }
  });
  e.loadLanguages(t, n(e, i));
};
let h = e => typeof e == "string";
let p = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
let g = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": "\"",
  "&#34;": "\"",
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
let d = e => g[e];
let c = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape: e => e.replace(p, d)
};
export let r9 = {
  type: "3rdParty",
  init(e) {
    ((e = {}) => {
      c = {
        ...c,
        ...e
      };
    })(e.options.react);
    i = e;
  }
};
let m = (0, o.createContext)();
class y {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach(e => {
      this.usedNamespaces[e] ||= true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
export let Bd = (e, t = {}) => {
  var s;
  var r;
  var n;
  var p;
  let g;
  let {
    i18n: d
  } = t;
  let {
    i18n: f,
    defaultNS: x
  } = (0, o.useContext)(m) || {};
  let v = d || f || i;
  if (v && !v.reportNamespaces) {
    v.reportNamespaces = new y();
  }
  if (!v) {
    a(v, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    let e = (e, t) => h(t) ? t : typeof t == "object" && t !== null && h(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e;
    let t = [e, {}, false];
    t.t = e;
    t.i18n = {};
    t.ready = false;
    return t;
  }
  if (v.options.react?.wait) {
    a(v, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  }
  let b = {
    ...c,
    ...v.options.react,
    ...t
  };
  let {
    useSuspense: S,
    keyPrefix: k
  } = b;
  let w = e || x || v.options?.defaultNS;
  w = h(w) ? [w] : w || ["translation"];
  v.reportNamespaces.addUsedNamespaces?.(w);
  let O = (v.isInitialized || v.initializedStoreOnce) && w.every(e => ((e, t, s = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
    lng: s.lng,
    precheck: (t, i) => {
      if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e)) {
        return false;
      }
    }
  }) : (a(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
    languages: t.languages
  }), true))(e, v, b));
  s = t.lng || null;
  r = b.nsMode === "fallback" ? w : w[0];
  let L = (0, o.useCallback)(v.getFixedT(s, r, k), [v, s, r, k]);
  let $ = () => L;
  let C = () => {
    let e;
    let s;
    e = t.lng || null;
    s = b.nsMode === "fallback" ? w : w[0];
    return v.getFixedT(e, s, k);
  };
  let [N, R] = (0, o.useState)($);
  let P = w.join();
  if (t.lng) {
    P = `${t.lng}${P}`;
  }
  n = P;
  g = (0, o.useRef)();
  (0, o.useEffect)(() => {
    g.current = p ? g.current : n;
  }, [n, p]);
  let j = g.current;
  let E = (0, o.useRef)(true);
  (0, o.useEffect)(() => {
    let {
      bindI18n: e,
      bindI18nStore: s
    } = b;
    E.current = true;
    if (!O && !S) {
      if (t.lng) {
        u(v, t.lng, w, () => {
          if (E.current) {
            R(C);
          }
        });
      } else {
        l(v, w, () => {
          if (E.current) {
            R(C);
          }
        });
      }
    }
    if (O && j && j !== P && E.current) {
      R(C);
    }
    let i = () => {
      if (E.current) {
        R(C);
      }
    };
    if (e) {
      v?.on(e, i);
    }
    if (s) {
      v?.store.on(s, i);
    }
    return () => {
      E.current = false;
      if (v && e) {
        e?.split(" ").forEach(e => v.off(e, i));
      }
      if (s && v) {
        s.split(" ").forEach(e => v.store.off(e, i));
      }
    };
  }, [v, P]);
  (0, o.useEffect)(() => {
    if (E.current && O) {
      R($);
    }
  }, [v, k, O]);
  let I = [N, v, O];
  I.t = N;
  I.i18n = v;
  I.ready = O;
  if (O || !O && !S) {
    return I;
  }
  throw new Promise(e => {
    if (t.lng) {
      u(v, t.lng, w, () => e());
    } else {
      l(v, w, () => e());
    }
  });
};