Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  doesStaticSegmentAppearInURL: function () {
    return f;
  },
  getCacheKeyForDynamicParam: function () {
    return d;
  },
  getParamValueFromCacheKey: function () {
    return h;
  },
  getRenderedPathname: function () {
    return s;
  },
  getRenderedSearch: function () {
    return i;
  },
  parseDynamicParamFromURLPart: function () {
    return c;
  },
  urlSearchParamsToParsedUrlQuery: function () {
    return y;
  },
  urlToUrlWithoutFlightMarker: function () {
    return p;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./47325.js");
let l = require("./49966.js");
let o = require("./16331.js");
function i(e) {
  let t = e.headers.get(o.NEXT_REWRITTEN_QUERY_HEADER);
  if (t !== null) {
    if (t === "") {
      return "";
    } else {
      return "?" + t;
    }
  } else {
    return p(new URL(e.url)).search;
  }
}
function s(e) {
  return e.headers.get(o.NEXT_REWRITTEN_PATH_HEADER) ?? p(new URL(e.url)).pathname;
}
function c(e, t, r) {
  switch (e) {
    case "c":
      if (r < t.length) {
        return t.slice(r).map(e => encodeURIComponent(e));
      } else {
        return [];
      }
    case "ci(..)(..)":
    case "ci(.)":
    case "ci(..)":
    case "ci(...)":
      {
        let n = e.length - 2;
        if (r < t.length) {
          return t.slice(r).map((e, t) => t === 0 ? encodeURIComponent(e.slice(n)) : encodeURIComponent(e));
        } else {
          return [];
        }
      }
    case "oc":
      if (r < t.length) {
        return t.slice(r).map(e => encodeURIComponent(e));
      } else {
        return null;
      }
    case "d":
      if (r >= t.length) {
        return "";
      }
      return encodeURIComponent(t[r]);
    case "di(..)(..)":
    case "di(.)":
    case "di(..)":
    case "di(...)":
      {
        let n = e.length - 2;
        if (r >= t.length) {
          return "";
        }
        return encodeURIComponent(t[r].slice(n));
      }
    default:
      return "";
  }
}
function f(e) {
  return e !== l.ROOT_SEGMENT_REQUEST_KEY && !e.startsWith(a.PAGE_SEGMENT_KEY) && (e[0] !== "(" || !e.endsWith(")")) && e !== a.DEFAULT_SEGMENT_KEY && e !== "/_not-found";
}
function d(e, t) {
  if (typeof e == "string") {
    return (0, a.addSearchParamsIfPageSegment)(e, Object.fromEntries(new URLSearchParams(t)));
  } else if (e === null) {
    return "";
  } else {
    return e.join("/");
  }
}
function p(e) {
  let t = new URL(e);
  t.searchParams.delete(o.NEXT_RSC_UNION_QUERY);
  return t;
}
function h(e, t) {
  if (t === "c" || t === "oc") {
    return e.split("/");
  } else {
    return e;
  }
}
function y(e) {
  let t = {};
  for (let [r, n] of e.entries()) {
    if (t[r] === undefined) {
      t[r] = n;
    } else if (Array.isArray(t[r])) {
      t[r].push(n);
    } else {
      t[r] = [t[r], n];
    }
  }
  return t;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}