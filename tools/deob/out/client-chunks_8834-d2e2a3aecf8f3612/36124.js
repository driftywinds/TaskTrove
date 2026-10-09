let n;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var u = {
  createFetch: function () {
    return m;
  },
  createFromNextReadableStream: function () {
    return R;
  },
  fetchServerResponse: function () {
    return b;
  }
};
for (var a in u) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: u[a]
  });
}
let l = require("./68911.js");
let o = require("./16331.js");
let i = require("./4184.js");
let s = require("./5532.js");
let c = require("./58040.js");
let f = require("./1511.js");
let d = require("./27190.js");
let p = require("./63111.js");
let h = require("./22648.js");
let y = l.createFromReadableStream;
let _ = l.createFromFetch;
function g(e) {
  return (0, h.urlToUrlWithoutFlightMarker)(new URL(e, location.origin)).toString();
}
let v = false;
async function b(e, t) {
  let {
    flightRouterState: r,
    nextUrl: n,
    prefetchKind: u
  } = t;
  let a = {
    [o.RSC_HEADER]: "1",
    [o.NEXT_ROUTER_STATE_TREE_HEADER]: (0, f.prepareFlightRouterStateForRequest)(r, t.isHmrRefresh)
  };
  if (u === c.PrefetchKind.AUTO) {
    a[o.NEXT_ROUTER_PREFETCH_HEADER] = "1";
  }
  if (n) {
    a[o.NEXT_URL] = n;
  }
  try {
    let t = u ? u === c.PrefetchKind.TEMPORARY ? "high" : "low" : "auto";
    let r = await m(e, a, t, true);
    let n = (0, h.urlToUrlWithoutFlightMarker)(new URL(r.url));
    let l = r.redirected ? n : e;
    let i = r.headers.get("content-type") || "";
    let s = !!r.headers.get("vary")?.includes(o.NEXT_URL);
    let p = !!r.headers.get(o.NEXT_DID_POSTPONE_HEADER);
    let y = r.headers.get(o.NEXT_ROUTER_STALE_TIME_HEADER);
    let _ = y !== null ? parseInt(y, 10) * 1000 : -1;
    if (!i.startsWith(o.RSC_CONTENT_TYPE_HEADER) || !r.ok || !r.body) {
      if (e.hash) {
        n.hash = e.hash;
      }
      return g(n.toString());
    }
    let v = r.flightResponse;
    if (v === null) {
      let e;
      let t = p ? (e = r.body.getReader(), new ReadableStream({
        async pull(t) {
          while (true) {
            let {
              done: r,
              value: n
            } = await e.read();
            if (!r) {
              t.enqueue(n);
              continue;
            }
            return;
          }
        }
      })) : r.body;
      v = R(t, a);
    }
    let b = await v;
    if ((0, d.getAppBuildId)() !== b.b) {
      return g(r.url);
    }
    let E = (0, f.normalizeFlightData)(b.f);
    if (typeof E == "string") {
      return g(E);
    }
    return {
      flightData: E,
      canonicalUrl: l,
      renderedSearch: (0, h.getRenderedSearch)(r),
      couldBeIntercepted: s,
      prerendered: b.S,
      postponed: p,
      staleTime: _,
      debugInfo: v._debugInfo ?? null
    };
  } catch (t) {
    if (!v) {
      console.error(`Failed to fetch RSC payload for ${e}. Falling back to browser navigation.`, t);
    }
    return e.toString();
  }
}
async function m(e, t, r, u, a) {
  var l;
  var c;
  let f = new URL(e);
  (0, p.setCacheBustingSearchParam)(f, t);
  let d = fetch(f, {
    credentials: "same-origin",
    headers: t,
    priority: r || undefined,
    signal: a
  });
  let h = u ? (l = d, c = t, _(l, {
    callServer: i.callServer,
    findSourceMapURL: s.findSourceMapURL,
    debugChannel: n && n(c)
  })) : null;
  let y = await d;
  let g = y.redirected;
  let v = new URL(y.url, f);
  v.searchParams.delete(o.NEXT_RSC_UNION_QUERY);
  return {
    url: v.href,
    redirected: g,
    ok: y.ok,
    headers: y.headers,
    body: y.body,
    status: y.status,
    flightResponse: h
  };
}
function R(e, t) {
  return y(e, {
    callServer: i.callServer,
    findSourceMapURL: s.findSourceMapURL,
    debugChannel: n && n(t)
  });
}
window.addEventListener("pagehide", () => {
  v = true;
});
window.addEventListener("pageshow", () => {
  v = false;
});
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}