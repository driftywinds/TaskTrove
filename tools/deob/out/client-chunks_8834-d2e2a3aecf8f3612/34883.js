let n;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "serverActionReducer", {
  enumerable: true,
  get: function () {
    return C;
  }
});
let u = require("./4184.js");
let a = require("./5532.js");
let l = require("./16331.js");
let o = require("./9206.js");
let i = require("./68911.js");
let s = require("./94721.js");
let c = require("./12877.js");
let f = require("./88552.js");
let d = require("./62240.js");
let p = require("./77464.js");
let h = require("./78421.js");
let y = require("./3696.js");
let _ = require("./78580.js");
let g = require("./42190.js");
let v = require("./78901.js");
let b = require("./2202.js");
let m = require("./1511.js");
let R = require("./20567.js");
let E = require("./80376.js");
let P = require("./8464.js");
let O = require("./15200.js");
let S = require("./24558.js");
let j = require("./70426.js");
let T = i.createFromFetch;
async function M(e, t, {
  actionId: r,
  actionArgs: c
}) {
  let f;
  let d;
  let p;
  let h;
  let y = (0, i.createTemporaryReferenceSet)();
  let _ = (0, S.extractInfoFromServerReferenceId)(r);
  let g = _.type === "use-cache" ? (0, S.omitUnusedArgs)(c, _) : c;
  let v = await (0, i.encodeReply)(g, {
    temporaryReferences: y
  });
  let b = {
    Accept: l.RSC_CONTENT_TYPE_HEADER,
    [l.ACTION_HEADER]: r,
    [l.NEXT_ROUTER_STATE_TREE_HEADER]: (0, m.prepareFlightRouterStateForRequest)(e.tree)
  };
  if (t) {
    b[l.NEXT_URL] = t;
  }
  let R = await fetch(e.canonicalUrl, {
    method: "POST",
    headers: b,
    body: v
  });
  if (R.headers.get(l.NEXT_ACTION_NOT_FOUND_HEADER) === "1") {
    throw Object.defineProperty(new o.UnrecognizedActionError(`Server Action "${r}" was not found on the server. 
Read more: https://nextjs.org/docs/messages/failed-to-find-server-action`), "__NEXT_ERROR_CODE", {
      value: "E715",
      enumerable: false,
      configurable: true
    });
  }
  let P = R.headers.get("x-action-redirect");
  let [O, j] = P?.split(";") || [];
  switch (j) {
    case "push":
      f = E.RedirectType.push;
      break;
    case "replace":
      f = E.RedirectType.replace;
      break;
    default:
      f = undefined;
  }
  let M = !!R.headers.get(l.NEXT_IS_PRERENDER_HEADER);
  try {
    let e = JSON.parse(R.headers.get("x-action-revalidated") || "[[],0,0]");
    d = {
      paths: e[0] || [],
      tag: !!e[1],
      cookie: e[2]
    };
  } catch (e) {
    d = w;
  }
  let C = O ? (0, s.assignLocation)(O, new URL(e.canonicalUrl, window.location.href)) : undefined;
  let A = R.headers.get("content-type");
  let x = !!A && !!A.startsWith(l.RSC_CONTENT_TYPE_HEADER);
  if (!x && !C) {
    throw Object.defineProperty(Error(R.status >= 400 && A === "text/plain" ? await R.text() : "An unexpected response was received from the server."), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
  }
  if (x) {
    let e = await T(Promise.resolve(R), {
      callServer: u.callServer,
      findSourceMapURL: a.findSourceMapURL,
      temporaryReferences: y,
      debugChannel: n && n(b)
    });
    p = C ? undefined : e.a;
    h = (0, m.normalizeFlightData)(e.f);
  } else {
    p = undefined;
    h = undefined;
  }
  return {
    actionResult: p,
    actionFlightData: h,
    redirectLocation: C,
    redirectType: f,
    revalidatedParts: d,
    isPrerender: M
  };
}
let w = {
  paths: [],
  tag: false,
  cookie: false
};
function C(e, t) {
  let {
    resolve: r,
    reject: n
  } = t;
  let u = {};
  let a = e.tree;
  u.preserveCustomHistoryState = false;
  let l = (e.previousNextUrl || e.nextUrl) && (0, g.hasInterceptionRouteInCurrentTree)(e.tree) ? e.previousNextUrl || e.nextUrl : null;
  let o = Date.now();
  return M(e, l, t).then(async ({
    actionResult: i,
    actionFlightData: s,
    redirectLocation: g,
    redirectType: m,
    revalidatedParts: S
  }) => {
    let T;
    if (g) {
      if (m === E.RedirectType.replace) {
        e.pushRef.pendingPush = false;
        u.pendingPush = false;
      } else {
        e.pushRef.pendingPush = true;
        u.pendingPush = true;
      }
      u.canonicalUrl = T = (0, c.createHrefFromUrl)(g, false);
    }
    if (!s) {
      r(i);
      if (g) {
        return (0, f.handleExternalUrl)(e, u, g.href, e.pushRef.pendingPush);
      } else {
        return e;
      }
    }
    if (typeof s == "string") {
      r(i);
      return (0, f.handleExternalUrl)(e, u, s, e.pushRef.pendingPush);
    }
    let M = S.paths.length > 0 || S.tag || S.cookie;
    if (M) {
      t.didRevalidate = true;
    }
    for (let n of s) {
      let {
        tree: s,
        seedData: c,
        head: h,
        isRootRender: g
      } = n;
      if (!g) {
        console.log("SERVER ACTION APPLY FAILED");
        r(i);
        return e;
      }
      let m = (0, d.applyRouterStatePatchToTree)([""], a, s, T || e.canonicalUrl);
      if (m === null) {
        r(i);
        return (0, v.handleSegmentMismatch)(e, t, s);
      }
      if ((0, p.isNavigatingToNewRootLayout)(a, m)) {
        r(i);
        return (0, f.handleExternalUrl)(e, u, T || e.canonicalUrl, e.pushRef.pendingPush);
      }
      if (c !== null) {
        let t = c[0];
        let r = (0, _.createEmptyCacheNode)();
        r.rsc = t;
        r.prefetchRsc = null;
        r.loading = c[2];
        (0, y.fillLazyItemsTillLeafWithHead)(o, r, undefined, s, c, h);
        u.cache = r;
        (0, j.revalidateEntireCache)(e.nextUrl, m);
        if (M) {
          await (0, b.refreshInactiveParallelSegments)({
            navigatedAt: o,
            state: e,
            updatedTree: m,
            updatedCache: r,
            includeNextUrl: !!l,
            canonicalUrl: u.canonicalUrl || e.canonicalUrl
          });
        }
      }
      u.patchedTree = m;
      a = m;
    }
    if (g && T) {
      let e = (0, R.getRedirectError)((0, O.hasBasePath)(T) ? (0, P.removeBasePath)(T) : T, m || E.RedirectType.push);
      e.handled = true;
      n(e);
    } else {
      r(i);
    }
    return (0, h.handleMutable)(e, u);
  }, t => {
    n(t);
    return e;
  });
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}