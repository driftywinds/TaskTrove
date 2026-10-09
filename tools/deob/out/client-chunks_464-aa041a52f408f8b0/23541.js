let i = e => typeof e == "string";
let o = () => {
  let e;
  let t;
  let s = new Promise((s, i) => {
    e = s;
    t = i;
  });
  s.resolve = e;
  s.reject = t;
  return s;
};
let r = e => e == null ? "" : "" + e;
let a = /###/g;
let n = e => e && e.indexOf("###") > -1 ? e.replace(a, ".") : e;
let l = e => !e || i(e);
let u = (e, t, s) => {
  let o = i(t) ? t.split(".") : t;
  let r = 0;
  while (r < o.length - 1) {
    if (l(e)) {
      return {};
    }
    let t = n(o[r]);
    if (!e[t] && s) {
      e[t] = new s();
    }
    e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {};
    ++r;
  }
  if (l(e)) {
    return {};
  } else {
    return {
      obj: e,
      k: n(o[r])
    };
  }
};
let h = (e, t, s) => {
  let {
    obj: i,
    k: o
  } = u(e, t, Object);
  if (i !== undefined || t.length === 1) {
    i[o] = s;
    return;
  }
  let r = t[t.length - 1];
  let a = t.slice(0, t.length - 1);
  let n = u(e, a, Object);
  while (n.obj === undefined && a.length) {
    r = `${a[a.length - 1]}.${r}`;
    n = u(e, a = a.slice(0, a.length - 1), Object);
    if (n?.obj && n.obj[`${n.k}.${r}`] !== undefined) {
      n.obj = undefined;
    }
  }
  n.obj[`${n.k}.${r}`] = s;
};
let p = (e, t) => {
  let {
    obj: s,
    k: i
  } = u(e, t);
  if (s && Object.prototype.hasOwnProperty.call(s, i)) {
    return s[i];
  }
};
let g = (e, t, s) => {
  for (let o in t) {
    if (o !== "__proto__" && o !== "constructor") {
      if (o in e) {
        if (i(e[o]) || e[o] instanceof String || i(t[o]) || t[o] instanceof String) {
          if (s) {
            e[o] = t[o];
          }
        } else {
          g(e[o], t[o], s);
        }
      } else {
        e[o] = t[o];
      }
    }
  }
  return e;
};
var d = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
let c = e => i(e) ? e.replace(/[&<>"'\/]/g, e => d[e]) : e;
class f {
  constructor(e) {
    this.capacity = e;
    this.regExpMap = new Map();
    this.regExpQueue = [];
  }
  getRegExp(e) {
    let t = this.regExpMap.get(e);
    if (t !== undefined) {
      return t;
    }
    let s = new RegExp(e);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(e, s);
    this.regExpQueue.push(e);
    return s;
  }
}
let m = [" ", ",", "?", "!", ";"];
let y = new f(20);
let x = (e, t, s = ".") => {
  if (!e) {
    return;
  }
  if (e[t]) {
    if (!Object.prototype.hasOwnProperty.call(e, t)) {
      return;
    }
    return e[t];
  }
  let i = t.split(s);
  let o = e;
  for (let e = 0; e < i.length;) {
    let t;
    if (!o || typeof o != "object") {
      return;
    }
    let r = "";
    for (let a = e; a < i.length; ++a) {
      if (a !== e) {
        r += s;
      }
      r += i[a];
      if ((t = o[r]) !== undefined) {
        if (["string", "number", "boolean"].indexOf(typeof t) > -1 && a < i.length - 1) {
          continue;
        }
        e += a - e + 1;
        break;
      }
    }
    o = t;
  }
  return o;
};
let v = e => e?.replace("_", "-");
let b = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console?.[e]?.apply?.(console, t);
  }
};
class S {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:";
    this.logger = e || b;
    this.options = t;
    this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", true);
  }
  warn(...e) {
    return this.forward(e, "warn", "", true);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(e, t, s, o) {
    if (o && !this.debug) {
      return null;
    } else {
      if (i(e[0])) {
        e[0] = `${s}${this.prefix} ${e[0]}`;
      }
      return this.logger[t](e);
    }
  }
  create(e) {
    return new S(this.logger, {
      ...{
        prefix: `${this.prefix}:${e}:`
      },
      ...this.options
    });
  }
  clone(e) {
    (e = e || this.options).prefix = e.prefix || this.prefix;
    return new S(this.logger, e);
  }
}
var k = new S();
class w {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    e.split(" ").forEach(e => {
      this.observers[e] ||= new Map();
      let s = this.observers[e].get(t) || 0;
      this.observers[e].set(t, s + 1);
    });
    return this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    if (this.observers[e]) {
      Array.from(this.observers[e].entries()).forEach(([e, s]) => {
        for (let i = 0; i < s; i++) {
          e(...t);
        }
      });
    }
    if (this.observers["*"]) {
      Array.from(this.observers["*"].entries()).forEach(([s, i]) => {
        for (let o = 0; o < i; o++) {
          s.apply(s, [e, ...t]);
        }
      });
    }
  }
}
class O extends w {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super();
    this.data = e || {};
    this.options = t;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(e) {
    if (this.options.ns.indexOf(e) < 0) {
      this.options.ns.push(e);
    }
  }
  removeNamespaces(e) {
    let t = this.options.ns.indexOf(e);
    if (t > -1) {
      this.options.ns.splice(t, 1);
    }
  }
  getResource(e, t, s, o = {}) {
    let r;
    let a = o.keySeparator !== undefined ? o.keySeparator : this.options.keySeparator;
    let n = o.ignoreJSONStructure !== undefined ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    if (e.indexOf(".") > -1) {
      r = e.split(".");
    } else {
      r = [e, t];
      if (s) {
        if (Array.isArray(s)) {
          r.push(...s);
        } else if (i(s) && a) {
          r.push(...s.split(a));
        } else {
          r.push(s);
        }
      }
    }
    let l = p(this.data, r);
    if (!l && !t && !s && e.indexOf(".") > -1) {
      e = r[0];
      t = r[1];
      s = r.slice(2).join(".");
    }
    if (!l && n && i(s)) {
      return x(this.data?.[e]?.[t], s, a);
    } else {
      return l;
    }
  }
  addResource(e, t, s, i, o = {
    silent: false
  }) {
    let r = o.keySeparator !== undefined ? o.keySeparator : this.options.keySeparator;
    let a = [e, t];
    if (s) {
      a = a.concat(r ? s.split(r) : s);
    }
    if (e.indexOf(".") > -1) {
      a = e.split(".");
      i = t;
      t = a[1];
    }
    this.addNamespaces(t);
    h(this.data, a, i);
    if (!o.silent) {
      this.emit("added", e, t, s, i);
    }
  }
  addResources(e, t, s, o = {
    silent: false
  }) {
    for (let o in s) {
      if (i(s[o]) || Array.isArray(s[o])) {
        this.addResource(e, t, o, s[o], {
          silent: true
        });
      }
    }
    if (!o.silent) {
      this.emit("added", e, t, s);
    }
  }
  addResourceBundle(e, t, s, i, o, r = {
    silent: false,
    skipCopy: false
  }) {
    let a = [e, t];
    if (e.indexOf(".") > -1) {
      a = e.split(".");
      i = s;
      s = t;
      t = a[1];
    }
    this.addNamespaces(t);
    let n = p(this.data, a) || {};
    if (!r.skipCopy) {
      s = JSON.parse(JSON.stringify(s));
    }
    if (i) {
      g(n, s, o);
    } else {
      n = {
        ...n,
        ...s
      };
    }
    h(this.data, a, n);
    if (!r.silent) {
      this.emit("added", e, t, s);
    }
  }
  removeResourceBundle(e, t) {
    if (this.hasResourceBundle(e, t)) {
      delete this.data[e][t];
    }
    this.removeNamespaces(t);
    this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== undefined;
  }
  getResourceBundle(e, t) {
    t ||= this.options.defaultNS;
    return this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    let t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var L = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, s, i, o) {
    e.forEach(e => {
      t = this.processors[e]?.process(t, s, i, o) ?? t;
    });
    return t;
  }
};
let $ = Symbol("i18next/PATH_KEY");
function C(e, t) {
  let s;
  let i;
  let o;
  let {
    [$]: r
  } = e((i = [], (o = Object.create(null)).get = (e, t) => (s?.revoke?.(), t === $) ? i : (i.push(t), (s = Proxy.revocable(e, o)).proxy), Proxy.revocable(Object.create(null), o).proxy));
  return r.join(t?.keySeparator ?? ".");
}
let N = {};
let R = e => !i(e) && typeof e != "boolean" && typeof e != "number";
class P extends w {
  constructor(e, t = {}) {
    super();
    ((e, t, s) => {
      e.forEach(e => {
        if (t[e]) {
          s[e] = t[e];
        }
      });
    })(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this);
    this.options = t;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = ".";
    }
    this.logger = k.create("translator");
  }
  changeLanguage(e) {
    if (e) {
      this.language = e;
    }
  }
  exists(e, t = {
    interpolation: {}
  }) {
    let s = {
      ...t
    };
    if (e == null) {
      return false;
    }
    let i = this.resolve(e, s);
    return i?.res !== undefined;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== undefined ? t.nsSeparator : this.options.nsSeparator;
    if (s === undefined) {
      s = ":";
    }
    let o = t.keySeparator !== undefined ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    let a = s && e.indexOf(s) > -1;
    let n = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !((e, t, s) => {
      t = t || "";
      s = s || "";
      let i = m.filter(e => t.indexOf(e) < 0 && s.indexOf(e) < 0);
      if (i.length === 0) {
        return true;
      }
      let o = y.getRegExp(`(${i.map(e => e === "?" ? "\\?" : e).join("|")})`);
      let r = !o.test(e);
      if (!r) {
        let t = e.indexOf(s);
        if (t > 0 && !o.test(e.substring(0, t))) {
          r = true;
        }
      }
      return r;
    })(e, s, o);
    if (a && !n) {
      let t = e.match(this.interpolator.nestingRegexp);
      if (t && t.length > 0) {
        return {
          key: e,
          namespaces: i(r) ? [r] : r
        };
      }
      let a = e.split(s);
      if (s !== o || s === o && this.options.ns.indexOf(a[0]) > -1) {
        r = a.shift();
      }
      e = a.join(o);
    }
    return {
      key: e,
      namespaces: i(r) ? [r] : r
    };
  }
  translate(e, t, s) {
    let o = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler) {
      o = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof o == "object") {
      o = {
        ...o
      };
    }
    o ||= {};
    if (e == null) {
      return "";
    }
    if (typeof e == "function") {
      e = C(e, {
        ...this.options,
        ...o
      });
    }
    if (!Array.isArray(e)) {
      e = [String(e)];
    }
    let r = o.returnDetails !== undefined ? o.returnDetails : this.options.returnDetails;
    let a = o.keySeparator !== undefined ? o.keySeparator : this.options.keySeparator;
    let {
      key: n,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], o);
    let u = l[l.length - 1];
    let h = o.nsSeparator !== undefined ? o.nsSeparator : this.options.nsSeparator;
    if (h === undefined) {
      h = ":";
    }
    let p = o.lng || this.language;
    let g = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p?.toLowerCase() === "cimode") {
      if (g) {
        if (r) {
          return {
            res: `${u}${h}${n}`,
            usedKey: n,
            exactUsedKey: n,
            usedLng: p,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(o)
          };
        } else {
          return `${u}${h}${n}`;
        }
      } else if (r) {
        return {
          res: n,
          usedKey: n,
          exactUsedKey: n,
          usedLng: p,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(o)
        };
      } else {
        return n;
      }
    }
    let d = this.resolve(e, o);
    let c = d?.res;
    let f = d?.usedKey || n;
    let m = d?.exactUsedKey || n;
    let y = o.joinArrays !== undefined ? o.joinArrays : this.options.joinArrays;
    let x = !this.i18nFormat || this.i18nFormat.handleAsObject;
    let v = o.count !== undefined && !i(o.count);
    let b = P.hasDefaultValue(o);
    let S = v ? this.pluralResolver.getSuffix(p, o.count, o) : "";
    let k = o.ordinal && v ? this.pluralResolver.getSuffix(p, o.count, {
      ordinal: false
    }) : "";
    let w = v && !o.ordinal && o.count === 0;
    let O = w && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${S}`] || o[`defaultValue${k}`] || o.defaultValue;
    let L = c;
    if (x && !c && b) {
      L = O;
    }
    let $ = R(L);
    let N = Object.prototype.toString.apply(L);
    if (x && L && $ && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(N) < 0 && (!i(y) || !Array.isArray(L))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, L, {
          ...o,
          ns: l
        }) : `key '${n} (${this.language})' returned an object instead of string.`;
        if (r) {
          d.res = e;
          d.usedParams = this.getUsedParamsDetails(o);
          return d;
        } else {
          return e;
        }
      }
      if (a) {
        let e = Array.isArray(L);
        let t = e ? [] : {};
        let s = e ? m : f;
        for (let e in L) {
          if (Object.prototype.hasOwnProperty.call(L, e)) {
            let i = `${s}${a}${e}`;
            if (b && !c) {
              t[e] = this.translate(i, {
                ...o,
                defaultValue: R(O) ? O[e] : undefined,
                ...{
                  joinArrays: false,
                  ns: l
                }
              });
            } else {
              t[e] = this.translate(i, {
                ...o,
                joinArrays: false,
                ns: l
              });
            }
            if (t[e] === i) {
              t[e] = L[e];
            }
          }
        }
        c = t;
      }
    } else if (x && i(y) && Array.isArray(c)) {
      if (c = c.join(y)) {
        c = this.extendTranslation(c, e, o, s);
      }
    } else {
      let t = false;
      let i = false;
      if (!this.isValidLookup(c) && b) {
        t = true;
        c = O;
      }
      if (!this.isValidLookup(c)) {
        i = true;
        c = n;
      }
      let r = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i ? undefined : c;
      let l = b && O !== c && this.options.updateMissing;
      if (i || t || l) {
        this.logger.log(l ? "updateKey" : "missingKey", p, u, n, l ? O : c);
        if (a) {
          let e = this.resolve(n, {
            ...o,
            keySeparator: false
          });
          if (e && e.res) {
            this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
        }
        let e = [];
        let t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && t && t[0]) {
          for (let s = 0; s < t.length; s++) {
            e.push(t[s]);
          }
        } else if (this.options.saveMissingTo === "all") {
          e = this.languageUtils.toResolveHierarchy(o.lng || this.language);
        } else {
          e.push(o.lng || this.language);
        }
        let s = (e, t, s) => {
          let i = b && s !== c ? s : r;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(e, u, t, i, l, o);
          } else if (this.backendConnector?.saveMissing) {
            this.backendConnector.saveMissing(e, u, t, i, l, o);
          }
          this.emit("missingKey", e, u, t, c);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && v) {
            e.forEach(e => {
              let t = this.pluralResolver.getSuffixes(e, o);
              if (w && o[`defaultValue${this.options.pluralSeparator}zero`] && t.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                t.push(`${this.options.pluralSeparator}zero`);
              }
              t.forEach(t => {
                s([e], n + t, o[`defaultValue${t}`] || O);
              });
            });
          } else {
            s(e, n, O);
          }
        }
      }
      c = this.extendTranslation(c, e, o, d, s);
      if (i && c === n && this.options.appendNamespaceToMissingKey) {
        c = `${u}${h}${n}`;
      }
      if ((i || t) && this.options.parseMissingKeyHandler) {
        c = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${h}${n}` : n, t ? c : undefined, o);
      }
    }
    if (r) {
      d.res = c;
      d.usedParams = this.getUsedParamsDetails(o);
      return d;
    } else {
      return c;
    }
  }
  extendTranslation(e, t, s, o, r) {
    if (this.i18nFormat?.parse) {
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    } else if (!s.skipInterpolation) {
      let a;
      if (s.interpolation) {
        this.interpolator.init({
          ...s,
          ...{
            interpolation: {
              ...this.options.interpolation,
              ...s.interpolation
            }
          }
        });
      }
      let n = i(e) && (s?.interpolation?.skipOnVariables !== undefined ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      if (n) {
        let t = e.match(this.interpolator.nestingRegexp);
        a = t && t.length;
      }
      let l = s.replace && !i(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables) {
        l = {
          ...this.options.interpolation.defaultVariables,
          ...l
        };
      }
      e = this.interpolator.interpolate(e, l, s.lng || this.language || o.usedLng, s);
      if (n) {
        let t = e.match(this.interpolator.nestingRegexp);
        if (a < (t && t.length)) {
          s.nest = false;
        }
      }
      if (!s.lng && o && o.res) {
        s.lng = this.language || o.usedLng;
      }
      if (s.nest !== false) {
        e = this.interpolator.nest(e, (...e) => r?.[0] !== e[0] || s.context ? this.translate(...e, t) : (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null), s);
      }
      if (s.interpolation) {
        this.interpolator.reset();
      }
    }
    let a = s.postProcess || this.options.postProcess;
    let n = i(a) ? [a] : a;
    if (e != null && n?.length && s.applyPostProcessor !== false) {
      e = L.handle(n, e, t, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...o,
          usedParams: this.getUsedParamsDetails(s)
        },
        ...s
      } : s, this);
    }
    return e;
  }
  resolve(e, t = {}) {
    let s;
    let o;
    let r;
    let a;
    let n;
    if (i(e)) {
      e = [e];
    }
    e.forEach(e => {
      if (this.isValidLookup(s)) {
        return;
      }
      let l = this.extractFromKey(e, t);
      let u = l.key;
      o = u;
      let h = l.namespaces;
      if (this.options.fallbackNS) {
        h = h.concat(this.options.fallbackNS);
      }
      let p = t.count !== undefined && !i(t.count);
      let g = p && !t.ordinal && t.count === 0;
      let d = t.context !== undefined && (i(t.context) || typeof t.context == "number") && t.context !== "";
      let c = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach(e => {
        if (!this.isValidLookup(s)) {
          n = e;
          if (!N[`${c[0]}-${e}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(n)) {
            N[`${c[0]}-${e}`] = true;
            this.logger.warn(`key "${o}" for languages "${c.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          }
          c.forEach(i => {
            let o;
            if (this.isValidLookup(s)) {
              return;
            }
            a = i;
            let n = [u];
            if (this.i18nFormat?.addLookupKeys) {
              this.i18nFormat.addLookupKeys(n, u, i, e, t);
            } else {
              let e;
              if (p) {
                e = this.pluralResolver.getSuffix(i, t.count, t);
              }
              let s = `${this.options.pluralSeparator}zero`;
              let o = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
              if (p) {
                if (t.ordinal && e.indexOf(o) === 0) {
                  n.push(u + e.replace(o, this.options.pluralSeparator));
                }
                n.push(u + e);
                if (g) {
                  n.push(u + s);
                }
              }
              if (d) {
                let i = `${u}${this.options.contextSeparator || "_"}${t.context}`;
                n.push(i);
                if (p) {
                  if (t.ordinal && e.indexOf(o) === 0) {
                    n.push(i + e.replace(o, this.options.pluralSeparator));
                  }
                  n.push(i + e);
                  if (g) {
                    n.push(i + s);
                  }
                }
              }
            }
            while (o = n.pop()) {
              if (!this.isValidLookup(s)) {
                r = o;
                s = this.getResource(i, e, o, t);
              }
            }
          });
        }
      });
    });
    return {
      res: s,
      usedKey: o,
      exactUsedKey: r,
      usedLng: a,
      usedNS: n
    };
  }
  isValidLookup(e) {
    return e !== undefined && (!!this.options.returnNull || e !== null) && (!!this.options.returnEmptyString || e !== "");
  }
  getResource(e, t, s, i = {}) {
    if (this.i18nFormat?.getResource) {
      return this.i18nFormat.getResource(e, t, s, i);
    } else {
      return this.resourceStore.getResource(e, t, s, i);
    }
  }
  getUsedParamsDetails(e = {}) {
    let t = e.replace && !i(e.replace);
    let s = t ? e.replace : e;
    if (t && e.count !== undefined) {
      s.count = e.count;
    }
    if (this.options.interpolation.defaultVariables) {
      s = {
        ...this.options.interpolation.defaultVariables,
        ...s
      };
    }
    if (!t) {
      s = {
        ...s
      };
      for (let e of ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]) {
        delete s[e];
      }
    }
    return s;
  }
  static hasDefaultValue(e) {
    let t = "defaultValue";
    for (let s in e) {
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== undefined) {
        return true;
      }
    }
    return false;
  }
}
class j {
  constructor(e) {
    this.options = e;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = k.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (!(e = v(e)) || e.indexOf("-") < 0) {
      return null;
    }
    let t = e.split("-");
    if (t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x")) {
      return null;
    } else {
      return this.formatLanguageCode(t.join("-"));
    }
  }
  getLanguagePartFromCode(e) {
    if (!(e = v(e)) || e.indexOf("-") < 0) {
      return e;
    }
    let t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (i(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch (e) {}
      if (t && this.options.lowerCaseLng) {
        t = t.toLowerCase();
      }
      if (t) {
        return t;
      } else if (this.options.lowerCaseLng) {
        return e.toLowerCase();
      } else {
        return e;
      }
    }
    if (this.options.cleanCode || this.options.lowerCaseLng) {
      return e.toLowerCase();
    } else {
      return e;
    }
  }
  isSupportedCode(e) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      e = this.getLanguagePartFromCode(e);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    let t;
    if (e) {
      e.forEach(e => {
        if (t) {
          return;
        }
        let s = this.formatLanguageCode(e);
        if (!this.options.supportedLngs || this.isSupportedCode(s)) {
          t = s;
        }
      });
      if (!t && this.options.supportedLngs) {
        e.forEach(e => {
          if (t) {
            return;
          }
          let s = this.getScriptPartFromCode(e);
          if (this.isSupportedCode(s)) {
            return t = s;
          }
          let i = this.getLanguagePartFromCode(e);
          if (this.isSupportedCode(i)) {
            return t = i;
          }
          t = this.options.supportedLngs.find(e => {
            if (e === i || (!(e.indexOf("-") < 0) || !(i.indexOf("-") < 0)) && (e.indexOf("-") > 0 && i.indexOf("-") < 0 && e.substring(0, e.indexOf("-")) === i || e.indexOf(i) === 0 && i.length > 1)) {
              return e;
            }
          });
        });
      }
      t ||= this.getFallbackCodes(this.options.fallbackLng)[0];
      return t;
    } else {
      return null;
    }
  }
  getFallbackCodes(e, t) {
    if (!e) {
      return [];
    }
    if (typeof e == "function") {
      e = e(t);
    }
    if (i(e)) {
      e = [e];
    }
    if (Array.isArray(e)) {
      return e;
    }
    if (!t) {
      return e.default || [];
    }
    let s = e[t];
    s ||= e[this.getScriptPartFromCode(t)];
    s ||= e[this.formatLanguageCode(t)];
    s ||= e[this.getLanguagePartFromCode(t)];
    s ||= e.default;
    return s || [];
  }
  toResolveHierarchy(e, t) {
    let s = this.getFallbackCodes((t === false ? [] : t) || this.options.fallbackLng || [], e);
    let o = [];
    let r = e => {
      if (e) {
        if (this.isSupportedCode(e)) {
          o.push(e);
        } else {
          this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`);
        }
      }
    };
    if (i(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly") {
        r(this.formatLanguageCode(e));
      }
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") {
        r(this.getScriptPartFromCode(e));
      }
      if (this.options.load !== "currentOnly") {
        r(this.getLanguagePartFromCode(e));
      }
    } else if (i(e)) {
      r(this.formatLanguageCode(e));
    }
    s.forEach(e => {
      if (o.indexOf(e) < 0) {
        r(this.formatLanguageCode(e));
      }
    });
    return o;
  }
}
let E = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
let I = {
  select: e => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class T {
  constructor(e, t = {}) {
    this.languageUtils = e;
    this.options = t;
    this.logger = k.create("pluralResolver");
    this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    let s;
    let i = v(e === "dev" ? "en" : e);
    let o = t.ordinal ? "ordinal" : "cardinal";
    let r = JSON.stringify({
      cleanedCode: i,
      type: o
    });
    if (r in this.pluralRulesCache) {
      return this.pluralRulesCache[r];
    }
    try {
      s = new Intl.PluralRules(i, {
        type: o
      });
    } catch (o) {
      if (!Intl) {
        this.logger.error("No Intl support, please use an Intl polyfill!");
        return I;
      }
      if (!e.match(/-|_/)) {
        return I;
      }
      let i = this.languageUtils.getLanguagePartFromCode(e);
      s = this.getRule(i, t);
    }
    this.pluralRulesCache[r] = s;
    return s;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    s ||= this.getRule("dev", t);
    return s?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map(e => `${t}${e}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    s ||= this.getRule("dev", t);
    if (s) {
      return s.resolvedOptions().pluralCategories.sort((e, t) => E[e] - E[t]).map(e => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`);
    } else {
      return [];
    }
  }
  getSuffix(e, t, s = {}) {
    let i = this.getRule(e, s);
    if (i) {
      return `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}`;
    } else {
      this.logger.warn(`no plural rule found for: ${e}`);
      return this.getSuffix("dev", t, s);
    }
  }
}
let D = (e, t, s, o = ".", r = true) => {
  let a;
  let n = (a = p(e, s)) !== undefined ? a : p(t, s);
  if (!n && r && i(s) && (n = x(e, s, o)) === undefined) {
    n = x(t, s, o);
  }
  return n;
};
class F {
  constructor(e = {}) {
    this.logger = k.create("interpolator");
    this.options = e;
    this.format = e?.interpolation?.format || (e => e);
    this.init(e);
  }
  init(e = {}) {
    e.interpolation ||= {
      escapeValue: true
    };
    let {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: r,
      suffix: a,
      suffixEscaped: n,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: h,
      nestingPrefix: p,
      nestingPrefixEscaped: g,
      nestingSuffix: d,
      nestingSuffixEscaped: f,
      nestingOptionsSeparator: m,
      maxReplaces: y,
      alwaysFormat: x
    } = e.interpolation;
    this.escape = t !== undefined ? t : c;
    this.escapeValue = s === undefined || s;
    this.useRawValueToEscape = i !== undefined && i;
    this.prefix = o ? o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : r || "{{";
    this.suffix = a ? a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : n || "}}";
    this.formatSeparator = l || ",";
    this.unescapePrefix = u ? "" : h || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : u || "";
    this.nestingPrefix = p ? p.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : g || "$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    this.nestingSuffix = d ? d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : f || ")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    this.nestingOptionsSeparator = m || ",";
    this.maxReplaces = y || 1000;
    this.alwaysFormat = x !== undefined && x;
    this.resetRegExp();
  }
  reset() {
    if (this.options) {
      this.init(this.options);
    }
  }
  resetRegExp() {
    let e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, o) {
    let a;
    let n;
    let l;
    let u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    let h = e => {
      if (e.indexOf(this.formatSeparator) < 0) {
        let i = D(t, u, e, this.options.keySeparator, this.options.ignoreJSONStructure);
        if (this.alwaysFormat) {
          return this.format(i, undefined, s, {
            ...o,
            ...t,
            interpolationkey: e
          });
        } else {
          return i;
        }
      }
      let i = e.split(this.formatSeparator);
      let r = i.shift().trim();
      let a = i.join(this.formatSeparator).trim();
      return this.format(D(t, u, r, this.options.keySeparator, this.options.ignoreJSONStructure), a, s, {
        ...o,
        ...t,
        interpolationkey: r
      });
    };
    this.resetRegExp();
    let p = o?.missingInterpolationHandler || this.options.missingInterpolationHandler;
    let g = o?.interpolation?.skipOnVariables !== undefined ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    [{
      regex: this.regexpUnescape,
      safeValue: e => e.replace(/\$/g, "$$$$")
    }, {
      regex: this.regexp,
      safeValue: e => this.escapeValue ? this.escape(e).replace(/\$/g, "$$$$") : e.replace(/\$/g, "$$$$")
    }].forEach(t => {
      for (l = 0; a = t.regex.exec(e);) {
        let s = a[1].trim();
        if ((n = h(s)) === undefined) {
          if (typeof p == "function") {
            let t = p(e, a, o);
            n = i(t) ? t : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, s)) {
            n = "";
          } else if (g) {
            n = a[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${s} for interpolating ${e}`);
            n = "";
          }
        } else if (!i(n) && !this.useRawValueToEscape) {
          n = r(n);
        }
        let u = t.safeValue(n);
        e = e.replace(a[0], u);
        if (g) {
          t.regex.lastIndex += n.length;
          t.regex.lastIndex -= a[0].length;
        } else {
          t.regex.lastIndex = 0;
        }
        if (++l >= this.maxReplaces) {
          break;
        }
      }
    });
    return e;
  }
  nest(e, t, s = {}) {
    let o;
    let a;
    let n;
    let l = (e, t) => {
      let s = this.nestingOptionsSeparator;
      if (e.indexOf(s) < 0) {
        return e;
      }
      let i = e.split(RegExp(`${s}[ ]*{`));
      let o = `{${i[1]}`;
      e = i[0];
      let r = (o = this.interpolate(o, n)).match(/'/g);
      let a = o.match(/"/g);
      if ((r?.length ?? 0) % 2 == 0 && !a || a.length % 2 != 0) {
        o = o.replace(/'/g, "\"");
      }
      try {
        n = JSON.parse(o);
        if (t) {
          n = {
            ...t,
            ...n
          };
        }
      } catch (t) {
        this.logger.warn(`failed parsing options string in nesting for key ${e}`, t);
        return `${e}${s}${o}`;
      }
      if (n.defaultValue && n.defaultValue.indexOf(this.prefix) > -1) {
        delete n.defaultValue;
      }
      return e;
    };
    while (o = this.nestingRegexp.exec(e)) {
      let u = [];
      (n = (n = {
        ...s
      }).replace && !i(n.replace) ? n.replace : n).applyPostProcessor = false;
      delete n.defaultValue;
      let h = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
      if (h !== -1) {
        u = o[1].slice(h).split(this.formatSeparator).map(e => e.trim()).filter(Boolean);
        o[1] = o[1].slice(0, h);
      }
      if ((a = t(l.call(this, o[1].trim(), n), n)) && o[0] === e && !i(a)) {
        return a;
      }
      if (!i(a)) {
        a = r(a);
      }
      if (!a) {
        this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`);
        a = "";
      }
      if (u.length) {
        a = u.reduce((e, t) => this.format(e, t, s.lng, {
          ...s,
          interpolationkey: o[1].trim()
        }), a.trim());
      }
      e = e.replace(o[0], a);
      this.regexp.lastIndex = 0;
    }
    return e;
  }
}
let A = e => {
  let t = {};
  return (s, i, o) => {
    let r = o;
    if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
      r = {
        ...r,
        [o.interpolationkey]: undefined
      };
    }
    let a = i + JSON.stringify(r);
    let n = t[a];
    if (!n) {
      n = e(v(i), o);
      t[a] = n;
    }
    return n(s);
  };
};
let V = e => (t, s, i) => e(v(s), i)(t);
class U {
  constructor(e = {}) {
    this.logger = k.create("formatter");
    this.options = e;
    this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    let s = t.cacheInBuiltFormats ? A : V;
    this.formats = {
      number: s((e, t) => {
        let s = new Intl.NumberFormat(e, {
          ...t
        });
        return e => s.format(e);
      }),
      currency: s((e, t) => {
        let s = new Intl.NumberFormat(e, {
          ...t,
          style: "currency"
        });
        return e => s.format(e);
      }),
      datetime: s((e, t) => {
        let s = new Intl.DateTimeFormat(e, {
          ...t
        });
        return e => s.format(e);
      }),
      relativetime: s((e, t) => {
        let s = new Intl.RelativeTimeFormat(e, {
          ...t
        });
        return e => s.format(e, t.range || "day");
      }),
      list: s((e, t) => {
        let s = new Intl.ListFormat(e, {
          ...t
        });
        return e => s.format(e);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = A(t);
  }
  format(e, t, s, i = {}) {
    let o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find(e => e.indexOf(")") > -1)) {
      let e = o.findIndex(e => e.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, e)].join(this.formatSeparator);
    }
    return o.reduce((e, t) => {
      let {
        formatName: o,
        formatOptions: r
      } = (e => {
        let t = e.toLowerCase().trim();
        let s = {};
        if (e.indexOf("(") > -1) {
          let i = e.split("(");
          t = i[0].toLowerCase().trim();
          let o = i[1].substring(0, i[1].length - 1);
          if (t === "currency" && o.indexOf(":") < 0) {
            s.currency ||= o.trim();
          } else if (t === "relativetime" && o.indexOf(":") < 0) {
            s.range ||= o.trim();
          } else {
            o.split(";").forEach(e => {
              if (e) {
                let [t, ...i] = e.split(":");
                let o = i.join(":").trim().replace(/^'+|'+$/g, "");
                let r = t.trim();
                s[r] ||= o;
                if (o === "false") {
                  s[r] = false;
                }
                if (o === "true") {
                  s[r] = true;
                }
                if (!isNaN(o)) {
                  s[r] = parseInt(o, 10);
                }
              }
            });
          }
        }
        return {
          formatName: t,
          formatOptions: s
        };
      })(t);
      if (this.formats[o]) {
        let t = e;
        try {
          let a = i?.formatParams?.[i.interpolationkey] || {};
          let n = a.locale || a.lng || i.locale || i.lng || s;
          t = this.formats[o](e, n, {
            ...r,
            ...i,
            ...a
          });
        } catch (e) {
          this.logger.warn(e);
        }
        return t;
      }
      this.logger.warn(`there was no format function for ${o}`);
      return e;
    }, e);
  }
}
class M extends w {
  constructor(e, t, s, i = {}) {
    super();
    this.backend = e;
    this.store = t;
    this.services = s;
    this.languageUtils = s.languageUtils;
    this.options = i;
    this.logger = k.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = i.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5;
    this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    this.backend?.init?.(s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    let o = {};
    let r = {};
    let a = {};
    let n = {};
    e.forEach(e => {
      let i = true;
      t.forEach(t => {
        let a = `${e}|${t}`;
        if (!s.reload && this.store.hasResourceBundle(e, t)) {
          this.state[a] = 2;
        } else if (!(this.state[a] < 0)) {
          if (this.state[a] === 1) {
            if (r[a] === undefined) {
              r[a] = true;
            }
          } else {
            this.state[a] = 1;
            i = false;
            if (r[a] === undefined) {
              r[a] = true;
            }
            if (o[a] === undefined) {
              o[a] = true;
            }
            if (n[t] === undefined) {
              n[t] = true;
            }
          }
        }
      });
      if (!i) {
        a[e] = true;
      }
    });
    if (Object.keys(o).length || Object.keys(r).length) {
      this.queue.push({
        pending: r,
        pendingCount: Object.keys(r).length,
        loaded: {},
        errors: [],
        callback: i
      });
    }
    return {
      toLoad: Object.keys(o),
      pending: Object.keys(r),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(n)
    };
  }
  loaded(e, t, s) {
    let i = e.split("|");
    let o = i[0];
    let r = i[1];
    if (t) {
      this.emit("failedLoading", o, r, t);
    }
    if (!t && s) {
      this.store.addResourceBundle(o, r, s, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[e] = t ? -1 : 2;
    if (t && s) {
      this.state[e] = 0;
    }
    let a = {};
    this.queue.forEach(s => {
      ((e, t, s, i) => {
        let {
          obj: o,
          k: r
        } = u(e, t, Object);
        o[r] = o[r] || [];
        o[r].push(s);
      })(s.loaded, [o], r);
      if (s.pending[e] !== undefined) {
        delete s.pending[e];
        s.pendingCount--;
      }
      if (t) {
        s.errors.push(t);
      }
      if (s.pendingCount === 0 && !s.done) {
        Object.keys(s.loaded).forEach(e => {
          a[e] ||= {};
          let t = s.loaded[e];
          if (t.length) {
            t.forEach(t => {
              if (a[e][t] === undefined) {
                a[e][t] = true;
              }
            });
          }
        });
        s.done = true;
        if (s.errors.length) {
          s.callback(s.errors);
        } else {
          s.callback();
        }
      }
    });
    this.emit("loaded", a);
    this.queue = this.queue.filter(e => !e.done);
  }
  read(e, t, s, i = 0, o = this.retryTimeout, r) {
    if (!e.length) {
      return r(null, {});
    }
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: i,
        wait: o,
        callback: r
      });
      return;
    }
    this.readingCalls++;
    let a = (a, n) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        let e = this.waitingReads.shift();
        this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
      }
      if (a && n && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, i + 1, o * 2, r);
        }, o);
      } else {
        r(a, n);
      }
    };
    let n = this.backend[s].bind(this.backend);
    if (n.length === 2) {
      try {
        let s = n(e, t);
        if (s && typeof s.then == "function") {
          s.then(e => a(null, e)).catch(a);
        } else {
          a(null, s);
        }
      } catch (e) {
        a(e);
      }
      return;
    }
    return n(e, t, a);
  }
  prepareLoading(e, t, s = {}, o) {
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return o && o();
    }
    if (i(e)) {
      e = this.languageUtils.toResolveHierarchy(e);
    }
    if (i(t)) {
      t = [t];
    }
    let r = this.queueLoad(e, t, s, o);
    if (!r.toLoad.length) {
      if (!r.pending.length) {
        o();
      }
      return null;
    }
    r.toLoad.forEach(e => {
      this.loadOne(e);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: true
    }, s);
  }
  loadOne(e, t = "") {
    let s = e.split("|");
    let i = s[0];
    let o = s[1];
    this.read(i, o, "read", undefined, undefined, (s, r) => {
      if (s) {
        this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`, s);
      }
      if (!s && r) {
        this.logger.log(`${t}loaded namespace ${o} for language ${i}`, r);
      }
      this.loaded(e, s, r);
    });
  }
  saveMissing(e, t, s, i, o, r = {}, a = () => {}) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (s != null && s !== "") {
      if (this.backend?.create) {
        let n = {
          ...r,
          isUpdate: o
        };
        let l = this.backend.create.bind(this.backend);
        if (l.length < 6) {
          try {
            let o;
            if ((o = l.length === 5 ? l(e, t, s, i, n) : l(e, t, s, i)) && typeof o.then == "function") {
              o.then(e => a(null, e)).catch(a);
            } else {
              a(null, o);
            }
          } catch (e) {
            a(e);
          }
        } else {
          l(e, t, s, i, a, n);
        }
      }
      if (e && e[0]) {
        this.store.addResource(e[0], t, s, i);
      }
    }
  }
}
let K = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: e => {
    let t = {};
    if (typeof e[1] == "object") {
      t = e[1];
    }
    if (i(e[1])) {
      t.defaultValue = e[1];
    }
    if (i(e[2])) {
      t.tDescription = e[2];
    }
    if (typeof e[2] == "object" || typeof e[3] == "object") {
      let s = e[3] || e[2];
      Object.keys(s).forEach(e => {
        t[e] = s[e];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: true,
    format: e => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1000,
    skipOnVariables: true
  },
  cacheInBuiltFormats: true
});
let z = e => {
  if (i(e.ns)) {
    e.ns = [e.ns];
  }
  if (i(e.fallbackLng)) {
    e.fallbackLng = [e.fallbackLng];
  }
  if (i(e.fallbackNS)) {
    e.fallbackNS = [e.fallbackNS];
  }
  if (e.supportedLngs?.indexOf?.("cimode") < 0) {
    e.supportedLngs = e.supportedLngs.concat(["cimode"]);
  }
  if (typeof e.initImmediate == "boolean") {
    e.initAsync = e.initImmediate;
  }
  return e;
};
let H = () => {};
class B extends w {
  constructor(e = {}, t) {
    super();
    this.options = z(e);
    this.services = {};
    this.logger = k;
    this.modules = {
      external: []
    };
    (e => {
      Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
        if (typeof e[t] == "function") {
          e[t] = e[t].bind(e);
        }
      });
    })(this);
    if (t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync) {
        this.init(e, t);
        return this;
      }
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = true;
    if (typeof e == "function") {
      t = e;
      e = {};
    }
    if (e.defaultNS == null && e.ns) {
      if (i(e.ns)) {
        e.defaultNS = e.ns;
      } else if (e.ns.indexOf("translation") < 0) {
        e.defaultNS = e.ns[0];
      }
    }
    let s = K();
    this.options = {
      ...s,
      ...this.options,
      ...z(e)
    };
    this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    };
    if (e.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = e.keySeparator;
    }
    if (e.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = e.nsSeparator;
    }
    let r = e => e ? typeof e == "function" ? new e() : e : null;
    if (!this.options.isClone) {
      let e;
      if (this.modules.logger) {
        k.init(r(this.modules.logger), this.options);
      } else {
        k.init(null, this.options);
      }
      e = this.modules.formatter ? this.modules.formatter : U;
      let t = new j(this.options);
      this.store = new O(this.options.resources, this.options);
      let i = this.services;
      i.logger = k;
      i.resourceStore = this.store;
      i.languageUtils = t;
      i.pluralResolver = new T(t, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format) {
        this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting");
      }
      if (e && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format)) {
        i.formatter = r(e);
        if (i.formatter.init) {
          i.formatter.init(i, this.options);
        }
        this.options.interpolation.format = i.formatter.format.bind(i.formatter);
      }
      i.interpolator = new F(this.options);
      i.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      i.backendConnector = new M(r(this.modules.backend), i.resourceStore, i, this.options);
      i.backendConnector.on("*", (e, ...t) => {
        this.emit(e, ...t);
      });
      if (this.modules.languageDetector) {
        i.languageDetector = r(this.modules.languageDetector);
        if (i.languageDetector.init) {
          i.languageDetector.init(i, this.options.detection, this.options);
        }
      }
      if (this.modules.i18nFormat) {
        i.i18nFormat = r(this.modules.i18nFormat);
        if (i.i18nFormat.init) {
          i.i18nFormat.init(this);
        }
      }
      this.translator = new P(this.services, this.options);
      this.translator.on("*", (e, ...t) => {
        this.emit(e, ...t);
      });
      this.modules.external.forEach(e => {
        if (e.init) {
          e.init(this);
        }
      });
    }
    this.format = this.options.interpolation.format;
    t ||= H;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (e.length > 0 && e[0] !== "dev") {
        this.options.lng = e[0];
      }
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
      this[e] = (...t) => this.store[e](...t);
    });
    ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
      this[e] = (...t) => {
        this.store[e](...t);
        return this;
      };
    });
    let a = o();
    let n = () => {
      let e = (e, s) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) {
          this.logger.warn("init: i18next is already initialized. You should call init just once!");
        }
        this.isInitialized = true;
        if (!this.options.isClone) {
          this.logger.log("initialized", this.options);
        }
        this.emit("initialized", this.options);
        a.resolve(s);
        t(e, s);
      };
      if (this.languages && !this.isInitialized) {
        return e(null, this.t.bind(this));
      }
      this.changeLanguage(this.options.lng, e);
    };
    if (this.options.resources || !this.options.initAsync) {
      n();
    } else {
      setTimeout(n, 0);
    }
    return a;
  }
  loadResources(e, t = H) {
    let s = t;
    let o = i(e) ? e : this.language;
    if (typeof e == "function") {
      s = e;
    }
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (o?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) {
        return s();
      }
      let e = [];
      let t = t => {
        if (t && t !== "cimode") {
          this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
            if (t !== "cimode" && e.indexOf(t) < 0) {
              e.push(t);
            }
          });
        }
      };
      if (o) {
        t(o);
      } else {
        this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e));
      }
      this.options.preload?.forEach?.(e => t(e));
      this.services.backendConnector.load(e, this.options.ns, e => {
        if (!e && !this.resolvedLanguage && !!this.language) {
          this.setResolvedLanguage(this.language);
        }
        s(e);
      });
    } else {
      s(null);
    }
  }
  reloadResources(e, t, s) {
    let i = o();
    if (typeof e == "function") {
      s = e;
      e = undefined;
    }
    if (typeof t == "function") {
      s = t;
      t = undefined;
    }
    e ||= this.languages;
    t ||= this.options.ns;
    s ||= H;
    this.services.backendConnector.reload(e, t, e => {
      i.resolve();
      s(e);
    });
    return i;
  }
  use(e) {
    if (!e) {
      throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    }
    if (!e.type) {
      throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    }
    if (e.type === "backend") {
      this.modules.backend = e;
    }
    if (e.type === "logger" || e.log && e.warn && e.error) {
      this.modules.logger = e;
    }
    if (e.type === "languageDetector") {
      this.modules.languageDetector = e;
    }
    if (e.type === "i18nFormat") {
      this.modules.i18nFormat = e;
    }
    if (e.type === "postProcessor") {
      L.addPostProcessor(e);
    }
    if (e.type === "formatter") {
      this.modules.formatter = e;
    }
    if (e.type === "3rdParty") {
      this.modules.external.push(e);
    }
    return this;
  }
  setResolvedLanguage(e) {
    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let e = 0; e < this.languages.length; e++) {
        let t = this.languages[e];
        if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
          this.resolvedLanguage = t;
          break;
        }
      }
      if (!this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e)) {
        this.resolvedLanguage = e;
        this.languages.unshift(e);
      }
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    let s = o();
    this.emit("languageChanging", e);
    let r = e => {
      this.language = e;
      this.languages = this.services.languageUtils.toResolveHierarchy(e);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(e);
    };
    let a = (i, o) => {
      if (o) {
        if (this.isLanguageChangingTo === e) {
          r(o);
          this.translator.changeLanguage(o);
          this.isLanguageChangingTo = undefined;
          this.emit("languageChanged", o);
          this.logger.log("languageChanged", o);
        }
      } else {
        this.isLanguageChangingTo = undefined;
      }
      s.resolve((...e) => this.t(...e));
      if (t) {
        t(i, (...e) => this.t(...e));
      }
    };
    let n = t => {
      if (!e && !t && !!this.services.languageDetector) {
        t = [];
      }
      let s = i(t) ? t : t && t[0];
      let o = this.store.hasLanguageSomeTranslations(s) ? s : this.services.languageUtils.getBestMatchFromCodes(i(t) ? [t] : t);
      if (o) {
        if (!this.language) {
          r(o);
        }
        if (!this.translator.language) {
          this.translator.changeLanguage(o);
        }
        this.services.languageDetector?.cacheUserLanguage?.(o);
      }
      this.loadResources(o, e => {
        a(e, o);
      });
    };
    if (e || !this.services.languageDetector || this.services.languageDetector.async) {
      if (!e && this.services.languageDetector && this.services.languageDetector.async) {
        if (this.services.languageDetector.detect.length === 0) {
          this.services.languageDetector.detect().then(n);
        } else {
          this.services.languageDetector.detect(n);
        }
      } else {
        n(e);
      }
    } else {
      n(this.services.languageDetector.detect());
    }
    return s;
  }
  getFixedT(e, t, s) {
    let o = (e, t, ...i) => {
      let r;
      let a;
      (r = typeof t != "object" ? this.options.overloadTranslationOptionHandler([e, t].concat(i)) : {
        ...t
      }).lng = r.lng || o.lng;
      r.lngs = r.lngs || o.lngs;
      r.ns = r.ns || o.ns;
      if (r.keyPrefix !== "") {
        r.keyPrefix = r.keyPrefix || s || o.keyPrefix;
      }
      let n = this.options.keySeparator || ".";
      if (r.keyPrefix && Array.isArray(e)) {
        a = e.map(e => {
          if (typeof e == "function") {
            e = C(e, {
              ...this.options,
              ...t
            });
          }
          return `${r.keyPrefix}${n}${e}`;
        });
      } else {
        if (typeof e == "function") {
          e = C(e, {
            ...this.options,
            ...t
          });
        }
        a = r.keyPrefix ? `${r.keyPrefix}${n}${e}` : e;
      }
      return this.t(a, r);
    };
    if (i(e)) {
      o.lng = e;
    } else {
      o.lngs = e;
    }
    o.ns = t;
    o.keyPrefix = s;
    return o;
  }
  t(...e) {
    return this.translator?.translate(...e);
  }
  exists(...e) {
    return this.translator?.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    let s = t.lng || this.resolvedLanguage || this.languages[0];
    let i = !!this.options && this.options.fallbackLng;
    let o = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") {
      return true;
    }
    let r = (e, t) => {
      let s = this.services.backendConnector.state[`${e}|${t}`];
      return s === -1 || s === 0 || s === 2;
    };
    if (t.precheck) {
      let e = t.precheck(this, r);
      if (e !== undefined) {
        return e;
      }
    }
    return !!this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || !!this.options.resources && !this.options.partialBundledLanguages || !!r(s, e) && (!i || !!r(o, e));
  }
  loadNamespaces(e, t) {
    let s = o();
    if (this.options.ns) {
      if (i(e)) {
        e = [e];
      }
      e.forEach(e => {
        if (this.options.ns.indexOf(e) < 0) {
          this.options.ns.push(e);
        }
      });
      this.loadResources(e => {
        s.resolve();
        if (t) {
          t(e);
        }
      });
      return s;
    } else {
      if (t) {
        t();
      }
      return Promise.resolve();
    }
  }
  loadLanguages(e, t) {
    let s = o();
    if (i(e)) {
      e = [e];
    }
    let r = this.options.preload || [];
    let a = e.filter(e => r.indexOf(e) < 0 && this.services.languageUtils.isSupportedCode(e));
    if (a.length) {
      this.options.preload = r.concat(a);
      this.loadResources(e => {
        s.resolve();
        if (t) {
          t(e);
        }
      });
      return s;
    } else {
      if (t) {
        t();
      }
      return Promise.resolve();
    }
  }
  dir(e) {
    e ||= this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
    if (!e) {
      return "rtl";
    }
    try {
      let t = new Intl.Locale(e);
      if (t && t.getTextInfo) {
        let e = t.getTextInfo();
        if (e && e.direction) {
          return e.direction;
        }
      }
    } catch (e) {}
    let t = this.services?.languageUtils || new j(K());
    if (e.toLowerCase().indexOf("-latn") > 1) {
      return "ltr";
    } else if (["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1) {
      return "rtl";
    } else {
      return "ltr";
    }
  }
  static createInstance(e = {}, t) {
    return new B(e, t);
  }
  cloneInstance(e = {}, t = H) {
    let s = e.forkResourceStore;
    if (s) {
      delete e.forkResourceStore;
    }
    let i = {
      ...this.options,
      ...e,
      isClone: true
    };
    let o = new B(i);
    if (e.debug !== undefined || e.prefix !== undefined) {
      o.logger = o.logger.clone(e);
    }
    ["store", "services", "language"].forEach(e => {
      o[e] = this[e];
    });
    o.services = {
      ...this.services
    };
    o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    };
    if (s) {
      o.store = new O(Object.keys(this.store.data).reduce((e, t) => {
        e[t] = {
          ...this.store.data[t]
        };
        e[t] = Object.keys(e[t]).reduce((s, i) => {
          s[i] = {
            ...e[t][i]
          };
          return s;
        }, e[t]);
        return e;
      }, {}), i);
      o.services.resourceStore = o.store;
    }
    o.translator = new P(o.services, i);
    o.translator.on("*", (e, ...t) => {
      o.emit(e, ...t);
    });
    o.init(i, t);
    o.translator.options = i;
    o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    };
    return o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
export let Ay = B.createInstance();
Ay.createInstance = B.createInstance;
Ay.createInstance;
Ay.dir;
Ay.init;
Ay.loadResources;
Ay.reloadResources;
Ay.use;
Ay.changeLanguage;
Ay.getFixedT;
export let t = Ay.t;
Ay.exists;
Ay.setDefaultNamespace;
Ay.hasLoadedNamespace;
Ay.loadNamespaces;
Ay.loadLanguages;