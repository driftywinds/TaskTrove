Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  DecodeError: function () {
    return m;
  },
  MiddlewareNotFoundError: function () {
    return b;
  },
  MissingStaticPage: function () {
    return y;
  },
  NormalizeError: function () {
    return g;
  },
  PageNotFoundError: function () {
    return E;
  },
  SP: function () {
    return h;
  },
  ST: function () {
    return _;
  },
  WEB_VITALS: function () {
    return a;
  },
  execOnce: function () {
    return o;
  },
  getDisplayName: function () {
    return c;
  },
  getLocationOrigin: function () {
    return u;
  },
  getURL: function () {
    return l;
  },
  isAbsoluteUrl: function () {
    return s;
  },
  isResSent: function () {
    return f;
  },
  loadGetInitialProps: function () {
    return p;
  },
  normalizeRepeatedSlashes: function () {
    return d;
  },
  stringifyError: function () {
    return P;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
function o(e) {
  let t;
  let r = false;
  return (...n) => {
    if (!r) {
      r = true;
      t = e(...n);
    }
    return t;
  };
}
let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
let s = e => i.test(e);
function u() {
  let {
    protocol: e,
    hostname: t,
    port: r
  } = window.location;
  return `${e}//${t}${r ? ":" + r : ""}`;
}
function l() {
  let {
    href: e
  } = window.location;
  let t = u();
  return e.substring(t.length);
}
function c(e) {
  if (typeof e == "string") {
    return e;
  } else {
    return e.displayName || e.name || "Unknown";
  }
}
function f(e) {
  return e.finished || e.headersSent;
}
function d(e) {
  let t = e.split("?");
  return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
}
async function p(e, t) {
  let r = t.res || t.ctx && t.ctx.res;
  if (!e.getInitialProps) {
    if (t.ctx && t.Component) {
      return {
        pageProps: await p(t.Component, t.ctx)
      };
    } else {
      return {};
    }
  }
  let n = await e.getInitialProps(t);
  if (r && f(r)) {
    return n;
  }
  if (!n) {
    throw Object.defineProperty(Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
  }
  return n;
}
let h = typeof performance != "undefined";
let _ = h && ["mark", "measure", "getEntriesByName"].every(e => typeof performance[e] == "function");
class m extends Error {}
class g extends Error {}
class E extends Error {
  constructor(e) {
    super();
    this.code = "ENOENT";
    this.name = "PageNotFoundError";
    this.message = `Cannot find module for page: ${e}`;
  }
}
class y extends Error {
  constructor(e, t) {
    super();
    this.message = `Failed to load static file for page: ${e} ${t}`;
  }
}
class b extends Error {
  constructor() {
    super();
    this.code = "ENOENT";
    this.message = "Cannot find the middleware module";
  }
}
function P(e) {
  return JSON.stringify({
    message: e.message,
    stack: e.stack
  });
}