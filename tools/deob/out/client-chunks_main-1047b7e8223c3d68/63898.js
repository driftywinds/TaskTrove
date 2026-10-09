Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  createRouteLoader: function () {
    return E;
  },
  getClientBuildManifest: function () {
    return m;
  },
  isAssetError: function () {
    return d;
  },
  markAssetError: function () {
    return f;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
require("./34007.js");
require("./10749.js");
let o = require("./7628.js");
let i = require("./81525.js");
let s = require("./99775.js");
let u = require("./12822.js");
function l(e, t, r) {
  let n;
  let a = t.get(e);
  if (a) {
    if ("future" in a) {
      return a.future;
    } else {
      return Promise.resolve(a);
    }
  }
  let o = new Promise(e => {
    n = e;
  });
  t.set(e, {
    resolve: n,
    future: o
  });
  if (r) {
    return r().then(e => {
      n(e);
      return e;
    }).catch(r => {
      t.delete(e);
      throw r;
    });
  } else {
    return o;
  }
}
let c = Symbol("ASSET_LOAD_ERROR");
function f(e) {
  return Object.defineProperty(e, c, {});
}
function d(e) {
  return e && c in e;
}
let p = function (e) {
  try {
    e = document.createElement("link");
    return !!window.MSInputMethodContext && !!document.documentMode || e.relList.supports("prefetch");
  } catch {
    return false;
  }
}();
let h = () => (0, s.getDeploymentIdQueryOrEmptyString)();
function _(e, t, r) {
  return new Promise((n, a) => {
    let o = false;
    e.then(e => {
      o = true;
      n(e);
    }).catch(a);
    (0, i.requestIdleCallback)(() => setTimeout(() => {
      if (!o) {
        a(r);
      }
    }, t));
  });
}
function m() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  } else {
    return _(new Promise(e => {
      let t = self.__BUILD_MANIFEST_CB;
      self.__BUILD_MANIFEST_CB = () => {
        e(self.__BUILD_MANIFEST);
        if (t) {
          t();
        }
      };
    }), 3800, f(Object.defineProperty(Error("Failed to load client build manifest"), "__NEXT_ERROR_CODE", {
      value: "E273",
      enumerable: false,
      configurable: true
    })));
  }
}
function g(e, t) {
  return m().then(r => {
    if (!(t in r)) {
      throw f(Object.defineProperty(Error(`Failed to lookup route: ${t}`), "__NEXT_ERROR_CODE", {
        value: "E446",
        enumerable: false,
        configurable: true
      }));
    }
    let n = r[t].map(t => e + "/_next/" + (0, u.encodeURIPath)(t));
    return {
      scripts: n.filter(e => e.endsWith(".js")).map(e => (0, o.__unsafeCreateTrustedScriptURL)(e) + h()),
      css: n.filter(e => e.endsWith(".css")).map(e => e + h())
    };
  });
}
function E(e) {
  let t = new Map();
  let r = new Map();
  let n = new Map();
  let a = new Map();
  function o(e) {
    {
      var t;
      let n = r.get(e.toString());
      if (n) {
        return n;
      } else if (document.querySelector(`script[src^="${e}"]`)) {
        return Promise.resolve();
      } else {
        r.set(e.toString(), n = new Promise((r, n) => {
          (t = document.createElement("script")).onload = r;
          t.onerror = () => n(f(Object.defineProperty(Error(`Failed to load script: ${e}`), "__NEXT_ERROR_CODE", {
            value: "E74",
            enumerable: false,
            configurable: true
          })));
          t.crossOrigin = undefined;
          t.src = e;
          document.body.appendChild(t);
        }));
        return n;
      }
    }
  }
  function s(e) {
    let t = n.get(e);
    if (!t) {
      n.set(e, t = fetch(e, {
        credentials: "same-origin"
      }).then(t => {
        if (!t.ok) {
          throw Object.defineProperty(Error(`Failed to load stylesheet: ${e}`), "__NEXT_ERROR_CODE", {
            value: "E189",
            enumerable: false,
            configurable: true
          });
        }
        return t.text().then(t => ({
          href: e,
          content: t
        }));
      }).catch(e => {
        throw f(e);
      }));
    }
    return t;
  }
  return {
    whenEntrypoint: e => l(e, t),
    onEntrypoint(e, r) {
      (r ? Promise.resolve().then(() => r()).then(e => ({
        component: e && e.default || e,
        exports: e
      }), e => ({
        error: e
      })) : Promise.resolve(undefined)).then(r => {
        let n = t.get(e);
        if (n && "resolve" in n) {
          if (r) {
            t.set(e, r);
            n.resolve(r);
          }
        } else {
          if (r) {
            t.set(e, r);
          } else {
            t.delete(e);
          }
          a.delete(e);
        }
      });
    },
    loadRoute(r, n) {
      return l(r, a, () => {
        let a;
        return _(g(e, r).then(({
          scripts: e,
          css: n
        }) => Promise.all([t.has(r) ? [] : Promise.all(e.map(o)), Promise.all(n.map(s))])).then(e => this.whenEntrypoint(r).then(t => ({
          entrypoint: t,
          styles: e[1]
        }))), 3800, f(Object.defineProperty(Error(`Route did not complete loading: ${r}`), "__NEXT_ERROR_CODE", {
          value: "E12",
          enumerable: false,
          configurable: true
        }))).then(({
          entrypoint: e,
          styles: t
        }) => {
          let r = Object.assign({
            styles: t
          }, e);
          if ("error" in e) {
            return e;
          } else {
            return r;
          }
        }).catch(e => {
          if (n) {
            throw e;
          }
          return {
            error: e
          };
        }).finally(() => a?.());
      });
    },
    prefetch(t) {
      let r;
      if ((r = navigator.connection) && (r.saveData || /2g/.test(r.effectiveType))) {
        return Promise.resolve();
      } else {
        return g(e, t).then(e => Promise.all(p ? e.scripts.map(e => {
          var t;
          var r;
          var n;
          t = e.toString();
          r = "script";
          return new Promise((e, a) => {
            let o = `
      link[rel="prefetch"][href^="${t}"],
      link[rel="preload"][href^="${t}"],
      script[src^="${t}"]`;
            if (document.querySelector(o)) {
              return e();
            }
            n = document.createElement("link");
            if (r) {
              n.as = r;
            }
            n.rel = "prefetch";
            n.crossOrigin = undefined;
            n.onload = e;
            n.onerror = () => a(f(Object.defineProperty(Error(`Failed to prefetch: ${t}`), "__NEXT_ERROR_CODE", {
              value: "E268",
              enumerable: false,
              configurable: true
            })));
            n.href = t;
            document.head.appendChild(n);
          });
        }) : [])).then(() => {
          (0, i.requestIdleCallback)(() => this.loadRoute(t, true).catch(() => {}));
        }).catch(() => {});
      }
    }
  };
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}