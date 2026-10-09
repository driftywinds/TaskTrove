Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  ACTION_HEADER: function () {
    return a;
  },
  FLIGHT_HEADERS: function () {
    return p;
  },
  NEXT_ACTION_NOT_FOUND_HEADER: function () {
    return m;
  },
  NEXT_DID_POSTPONE_HEADER: function () {
    return _;
  },
  NEXT_HMR_REFRESH_HASH_COOKIE: function () {
    return c;
  },
  NEXT_HMR_REFRESH_HEADER: function () {
    return s;
  },
  NEXT_HTML_REQUEST_ID_HEADER: function () {
    return E;
  },
  NEXT_IS_PRERENDER_HEADER: function () {
    return b;
  },
  NEXT_REQUEST_ID_HEADER: function () {
    return R;
  },
  NEXT_REWRITTEN_PATH_HEADER: function () {
    return g;
  },
  NEXT_REWRITTEN_QUERY_HEADER: function () {
    return v;
  },
  NEXT_ROUTER_PREFETCH_HEADER: function () {
    return o;
  },
  NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function () {
    return i;
  },
  NEXT_ROUTER_STALE_TIME_HEADER: function () {
    return y;
  },
  NEXT_ROUTER_STATE_TREE_HEADER: function () {
    return l;
  },
  NEXT_RSC_UNION_QUERY: function () {
    return h;
  },
  NEXT_URL: function () {
    return f;
  },
  RSC_CONTENT_TYPE_HEADER: function () {
    return d;
  },
  RSC_HEADER: function () {
    return u;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let u = "rsc";
let a = "next-action";
let l = "next-router-state-tree";
let o = "next-router-prefetch";
let i = "next-router-segment-prefetch";
let s = "next-hmr-refresh";
let c = "__next_hmr_refresh_hash__";
let f = "next-url";
let d = "text/x-component";
let p = [u, l, o, s, i];
let h = "_rsc";
let y = "x-nextjs-stale-time";
let _ = "x-nextjs-postponed";
let g = "x-nextjs-rewritten-path";
let v = "x-nextjs-rewritten-query";
let b = "x-nextjs-prerender";
let m = "x-nextjs-action-not-found";
let R = "x-nextjs-request-id";
let E = "x-nextjs-html-request-id";
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}