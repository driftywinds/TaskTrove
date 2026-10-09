let n;
let u;
let a;
let l;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hydrate", {
  enumerable: true,
  get: function () {
    return F;
  }
});
let o = require("./21634.js");
let i = require("./8349.js");
require("./3716.js");
let s = o._(require("./57447.js"));
let c = o._(require("./87849.js"));
let f = require("./68911.js");
let d = require("./33480.js");
let p = require("./38992.js");
let h = require("./42285.js");
let y = require("./4184.js");
let _ = require("./5532.js");
let g = require("./28076.js");
let v = o._(require("./78580.js"));
let b = require("./23001.js");
require("./21405.js");
let m = require("./27190.js");
let R = require("./1511.js");
let E = f.createFromReadableStream;
let P = f.createFromFetch;
let O = document;
let S = new TextEncoder();
let j = false;
let T = false;
let M = null;
function w(e) {
  if (e[0] === 0) {
    a = [];
  } else if (e[0] === 1) {
    if (!a) {
      throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", {
        value: "E18",
        enumerable: false,
        configurable: true
      });
    }
    if (l) {
      l.enqueue(S.encode(e[1]));
    } else {
      a.push(e[1]);
    }
  } else if (e[0] === 2) {
    M = e[1];
  } else if (e[0] === 3) {
    if (!a) {
      throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", {
        value: "E18",
        enumerable: false,
        configurable: true
      });
    }
    let r = atob(e[1]);
    let n = new Uint8Array(r.length);
    for (var t = 0; t < r.length; t++) {
      n[t] = r.charCodeAt(t);
    }
    if (l) {
      l.enqueue(n);
    } else {
      a.push(n);
    }
  }
}
let C = function () {
  if (l && !T) {
    l.close();
    T = true;
    a = undefined;
  }
  j = true;
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", C, false);
} else {
  setTimeout(C);
}
let A = self.__next_f = self.__next_f || [];
A.forEach(w);
A.length = 0;
A.push = w;
let x = new ReadableStream({
  start(e) {
    if (a && (a.forEach(t => {
      e.enqueue(typeof t == "string" ? S.encode(t) : t);
    }), j && !T)) {
      if (e.desiredSize === null || e.desiredSize < 0) {
        e.error(Object.defineProperty(Error("The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection."), "__NEXT_ERROR_CODE", {
          value: "E117",
          enumerable: false,
          configurable: true
        }));
      } else {
        e.close();
      }
      T = true;
      a = undefined;
    }
    l = e;
  }
});
let N = window.__NEXT_CLIENT_RESUME;
function U({
  initialRSCPayload: e,
  actionQueue: t,
  webSocket: r,
  staticIndicatorState: n
}) {
  return <v.default actionQueue={t} globalErrorState={e.G} webSocket={r} staticIndicatorState={n} />;
}
u = N ? Promise.resolve(P(N, {
  callServer: y.callServer,
  findSourceMapURL: _.findSourceMapURL,
  debugChannel: n
})).then(async e => (0, R.createInitialRSCPayloadFromFallbackPrerender)(await N, e)) : E(x, {
  callServer: y.callServer,
  findSourceMapURL: _.findSourceMapURL,
  debugChannel: n,
  startTime: 0
});
let L = c.default.StrictMode;
function I({
  children: e
}) {
  return e;
}
let D = {
  onDefaultTransitionIndicator: function () {
    return () => {};
  },
  onRecoverableError: p.onRecoverableError,
  onCaughtError: h.onCaughtError,
  onUncaughtError: h.onUncaughtError
};
async function F(e, t) {
  let r;
  let n;
  let a = await u;
  (0, m.setAppBuildId)(a.b);
  let l = Date.now();
  let o = (0, g.createMutableActionQueue)((0, b.createInitialRouterState)({
    navigatedAt: l,
    initialFlightData: a.f,
    initialCanonicalUrlParts: a.c,
    initialRenderedSearch: a.q,
    initialParallelRoutes: new Map(),
    location: window.location
  }), e);
  let f = <L><d.HeadManagerContext.Provider value={{
      appDir: true
    }}><I><U initialRSCPayload={a} actionQueue={o} webSocket={n} staticIndicatorState={r} /></I></d.HeadManagerContext.Provider></L>;
  if (document.documentElement.id === "__next_error__") {
    s.default.createRoot(O, D).render(f);
  } else {
    c.default.startTransition(() => {
      s.default.hydrateRoot(O, f, {
        ...D,
        formState: M
      });
    });
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}