Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  Router: function () {
    return s.default;
  },
  createRouter: function () {
    return g;
  },
  default: function () {
    return _;
  },
  makePublicRouterInstance: function () {
    return E;
  },
  useRouter: function () {
    return m;
  },
  withRouter: function () {
    return c.default;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./34007.js");
let i = o._(require(/*webcrack:missing*/"./74361.js"));
let s = o._(require("./19750.js"));
let u = require("./14542.js");
let l = o._(require("./56834.js"));
let c = o._(require("./29809.js"));
let f = {
  router: null,
  readyCallbacks: [],
  ready(e) {
    if (this.router) {
      return e();
    }
    this.readyCallbacks.push(e);
  }
};
let d = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain", "domainLocales"];
let p = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
function h() {
  if (!f.router) {
    throw Object.defineProperty(Error("No router instance found.\nYou should only use \"next/router\" on the client side of your app.\n"), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
  }
  return f.router;
}
Object.defineProperty(f, "events", {
  get: () => s.default.events
});
d.forEach(e => {
  Object.defineProperty(f, e, {
    get: () => h()[e]
  });
});
p.forEach(e => {
  f[e] = (...t) => h()[e](...t);
});
["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach(e => {
  f.ready(() => {
    s.default.events.on(e, (...t) => {
      let r = `on${e.charAt(0).toUpperCase()}${e.substring(1)}`;
      if (f[r]) {
        try {
          f[r](...t);
        } catch (e) {
          console.error(`Error when running the Router event: ${r}`);
          console.error((0, l.default)(e) ? `${e.message}
${e.stack}` : e + "");
        }
      }
    });
  });
});
let _ = f;
function m() {
  let e = i.default.useContext(u.RouterContext);
  if (!e) {
    throw Object.defineProperty(Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted"), "__NEXT_ERROR_CODE", {
      value: "E509",
      enumerable: false,
      configurable: true
    });
  }
  return e;
}
function g(...e) {
  f.router = new s.default(...e);
  f.readyCallbacks.forEach(e => e());
  f.readyCallbacks = [];
  return f.router;
}
function E(e) {
  let t = {};
  for (let r of d) {
    if (typeof e[r] == "object") {
      t[r] = Object.assign(Array.isArray(e[r]) ? [] : {}, e[r]);
      continue;
    }
    t[r] = e[r];
  }
  t.events = s.default.events;
  p.forEach(r => {
    t[r] = (...t) => e[r](...t);
  });
  return t;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}