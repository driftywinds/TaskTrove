Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  DecodeError: function () {
    return g;
  },
  MiddlewareNotFoundError: function () {
    return P;
  },
  MissingStaticPage: function () {
    return v;
  },
  NormalizeError: function () {
    return m;
  },
  PageNotFoundError: function () {
    return b;
  },
  SP: function () {
    return h;
  },
  ST: function () {
    return y;
  },
  WEB_VITALS: function () {
    return o;
  },
  execOnce: function () {
    return u;
  },
  getDisplayName: function () {
    return f;
  },
  getLocationOrigin: function () {
    return l;
  },
  getURL: function () {
    return c;
  },
  isAbsoluteUrl: function () {
    return i;
  },
  isResSent: function () {
    return s;
  },
  loadGetInitialProps: function () {
    return d;
  },
  normalizeRepeatedSlashes: function () {
    return p;
  },
  stringifyError: function () {
    return _;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
function u(e) {
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
let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
let i = e => a.test(e);
function l() {
  let {
    protocol: e,
    hostname: t,
    port: r
  } = window.location;
  return `${e}//${t}${r ? ":" + r : ""}`;
}
function c() {
  let {
    href: e
  } = window.location;
  let t = l();
  return e.substring(t.length);
}
function f(e) {
  if (typeof e == "string") {
    return e;
  } else {
    return e.displayName || e.name || "Unknown";
  }
}
function s(e) {
  return e.finished || e.headersSent;
}
function p(e) {
  let t = e.split("?");
  return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
}
async function d(e, t) {
  let r = t.res || t.ctx && t.ctx.res;
  if (!e.getInitialProps) {
    if (t.ctx && t.Component) {
      return {
        pageProps: await d(t.Component, t.ctx)
      };
    } else {
      return {};
    }
  }
  let n = await e.getInitialProps(t);
  if (r && s(r)) {
    return n;
  }
  if (!n) {
    throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
  }
  return n;
}
let h = typeof performance != "undefined";
let y = h && ["mark", "measure", "getEntriesByName"].every(e => typeof performance[e] == "function");
class g extends Error {}
class m extends Error {}
class b extends Error {
  constructor(e) {
    super();
    this.code = "ENOENT";
    this.name = "PageNotFoundError";
    this.message = `Cannot find module for page: ${e}`;
  }
}
class v extends Error {
  constructor(e, t) {
    super();
    this.message = `Failed to load static file for page: ${e} ${t}`;
  }
}
class P extends Error {
  constructor() {
    super();
    this.code = "ENOENT";
    this.message = "Cannot find the middleware module";
  }
}
function _(e) {
  return JSON.stringify({
    message: e.message,
    stack: e.stack
  });
}