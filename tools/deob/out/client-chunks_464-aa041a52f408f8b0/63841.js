let {
  slice: i,
  forEach: o
} = [];
let r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
let a = function (e, t, s = {
  path: "/"
}) {
  let i = encodeURIComponent(t);
  let o = `${e}=${i}`;
  if (s.maxAge > 0) {
    let e = s.maxAge - 0;
    if (Number.isNaN(e)) {
      throw Error("maxAge should be a Number");
    }
    o += `; Max-Age=${Math.floor(e)}`;
  }
  if (s.domain) {
    if (!r.test(s.domain)) {
      throw TypeError("option domain is invalid");
    }
    o += `; Domain=${s.domain}`;
  }
  if (s.path) {
    if (!r.test(s.path)) {
      throw TypeError("option path is invalid");
    }
    o += `; Path=${s.path}`;
  }
  if (s.expires) {
    if (typeof s.expires.toUTCString != "function") {
      throw TypeError("option expires is invalid");
    }
    o += `; Expires=${s.expires.toUTCString()}`;
  }
  if (s.httpOnly) {
    o += "; HttpOnly";
  }
  if (s.secure) {
    o += "; Secure";
  }
  if (s.sameSite) {
    switch (typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite) {
      case true:
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw TypeError("option sameSite is invalid");
    }
  }
  if (s.partitioned) {
    o += "; Partitioned";
  }
  return o;
};
let n = {
  create(e, t, s, i, o = {
    path: "/",
    sameSite: "strict"
  }) {
    if (s) {
      o.expires = new Date();
      o.expires.setTime(o.expires.getTime() + s * 60 * 1000);
    }
    if (i) {
      o.domain = i;
    }
    document.cookie = a(e, t, o);
  },
  read(e) {
    let t = `${e}=`;
    let s = document.cookie.split(";");
    for (let e = 0; e < s.length; e++) {
      let i = s[e];
      while (i.charAt(0) === " ") {
        i = i.substring(1, i.length);
      }
      if (i.indexOf(t) === 0) {
        return i.substring(t.length, i.length);
      }
    }
    return null;
  },
  remove(e, t) {
    this.create(e, "", -1, t);
  }
};
var l = {
  name: "cookie",
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document != "undefined") {
      return n.read(t) || undefined;
    }
  },
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: s,
      cookieMinutes: i,
      cookieDomain: o,
      cookieOptions: r
    } = t;
    if (s && typeof document != "undefined") {
      n.create(s, e, i, o, r);
    }
  }
};
var u = {
  name: "querystring",
  lookup(e) {
    let t;
    let {
      lookupQuerystring: s
    } = e;
    if (typeof window != "undefined") {
      let {
        search: e
      } = window.location;
      if (!window.location.search && window.location.hash?.indexOf("?") > -1) {
        e = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      let i = e.substring(1).split("&");
      for (let e = 0; e < i.length; e++) {
        let o = i[e].indexOf("=");
        if (o > 0 && i[e].substring(0, o) === s) {
          t = i[e].substring(o + 1);
        }
      }
    }
    return t;
  }
};
var h = {
  name: "hash",
  lookup(e) {
    let t;
    let {
      lookupHash: s,
      lookupFromHashIndex: i
    } = e;
    if (typeof window != "undefined") {
      let {
        hash: e
      } = window.location;
      if (e && e.length > 2) {
        let o = e.substring(1);
        if (s) {
          let e = o.split("&");
          for (let i = 0; i < e.length; i++) {
            let o = e[i].indexOf("=");
            if (o > 0 && e[i].substring(0, o) === s) {
              t = e[i].substring(o + 1);
            }
          }
        }
        if (t) {
          return t;
        }
        if (!t && i > -1) {
          let t = e.match(/\/([a-zA-Z-]*)/g);
          if (!Array.isArray(t)) {
            return;
          }
          return t[typeof i == "number" ? i : 0]?.replace("/", "");
        }
      }
    }
    return t;
  }
};
let p = null;
let g = () => {
  if (p !== null) {
    return p;
  }
  try {
    if (!(p = typeof window != "undefined" && window.localStorage !== null)) {
      return false;
    }
    let e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo");
    window.localStorage.removeItem(e);
  } catch (e) {
    p = false;
  }
  return p;
};
var d = {
  name: "localStorage",
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && g()) {
      return window.localStorage.getItem(t) || undefined;
    }
  },
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: s
    } = t;
    if (s && g()) {
      window.localStorage.setItem(s, e);
    }
  }
};
let c = null;
let f = () => {
  if (c !== null) {
    return c;
  }
  try {
    if (!(c = typeof window != "undefined" && window.sessionStorage !== null)) {
      return false;
    }
    let e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo");
    window.sessionStorage.removeItem(e);
  } catch (e) {
    c = false;
  }
  return c;
};
var m = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && f()) {
      return window.sessionStorage.getItem(t) || undefined;
    }
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: s
    } = t;
    if (s && f()) {
      window.sessionStorage.setItem(s, e);
    }
  }
};
var y = {
  name: "navigator",
  lookup(e) {
    let t = [];
    if (typeof navigator != "undefined") {
      let {
        languages: e,
        userLanguage: s,
        language: i
      } = navigator;
      if (e) {
        for (let s = 0; s < e.length; s++) {
          t.push(e[s]);
        }
      }
      if (s) {
        t.push(s);
      }
      if (i) {
        t.push(i);
      }
    }
    if (t.length > 0) {
      return t;
    } else {
      return undefined;
    }
  }
};
var x = {
  name: "htmlTag",
  lookup(e) {
    let t;
    let {
      htmlTag: s
    } = e;
    let i = s || (typeof document != "undefined" ? document.documentElement : null);
    if (i && typeof i.getAttribute == "function") {
      t = i.getAttribute("lang");
    }
    return t;
  }
};
var v = {
  name: "path",
  lookup(e) {
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window == "undefined") {
      return;
    }
    let s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    if (Array.isArray(s)) {
      return s[typeof t == "number" ? t : 0]?.replace("/", "");
    }
  }
};
var b = {
  name: "subdomain",
  lookup(e) {
    let {
      lookupFromSubdomainIndex: t
    } = e;
    let s = typeof window != "undefined" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (s) {
      return s[typeof t == "number" ? t + 1 : 1];
    }
  }
};
let S = false;
try {
  document.cookie;
  S = true;
} catch (e) {}
let k = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
if (!S) {
  k.splice(1, 1);
}
export class A {
  constructor(e, t = {}) {
    this.type = "languageDetector";
    this.detectors = {};
    this.init(e, t);
  }
  init(e = {
    languageUtils: {}
  }, t = {}, s = {}) {
    this.services = e;
    this.options = function (e) {
      o.call(i.call(arguments, 1), t => {
        if (t) {
          for (let s in t) {
            if (e[s] === undefined) {
              e[s] = t[s];
            }
          }
        }
      });
      return e;
    }(t, this.options || {}, {
      order: k,
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
      convertDetectedLanguage: e => e
    });
    if (typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
      this.options.convertDetectedLanguage = e => e.replace("-", "_");
    }
    if (this.options.lookupFromUrlIndex) {
      this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
    }
    this.i18nOptions = s;
    this.addDetector(l);
    this.addDetector(u);
    this.addDetector(d);
    this.addDetector(m);
    this.addDetector(y);
    this.addDetector(x);
    this.addDetector(v);
    this.addDetector(b);
    this.addDetector(h);
  }
  addDetector(e) {
    this.detectors[e.name] = e;
    return this;
  }
  detect(e = this.options.order) {
    let t = [];
    e.forEach(e => {
      if (this.detectors[e]) {
        let s = this.detectors[e].lookup(this.options);
        if (s && typeof s == "string") {
          s = [s];
        }
        if (s) {
          t = t.concat(s);
        }
      }
    });
    t = t.filter(e => e != null && (typeof e != "string" || ![/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(t => t.test(e)))).map(e => this.options.convertDetectedLanguage(e));
    if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) {
      return t;
    } else if (t.length > 0) {
      return t[0];
    } else {
      return null;
    }
  }
  cacheUserLanguage(e, t = this.options.caches) {
    if (!!t && (!this.options.excludeCacheFor || !(this.options.excludeCacheFor.indexOf(e) > -1))) {
      t.forEach(t => {
        if (this.detectors[t]) {
          this.detectors[t].cacheUserLanguage(e, this.options);
        }
      });
    }
  }
}
A.type = "languageDetector";