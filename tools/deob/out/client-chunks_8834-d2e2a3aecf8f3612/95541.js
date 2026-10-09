Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  ReadonlyURLSearchParams: function () {
    return d.ReadonlyURLSearchParams;
  },
  RedirectType: function () {
    return d.RedirectType;
  },
  ServerInsertedHTMLContext: function () {
    return c.ServerInsertedHTMLContext;
  },
  forbidden: function () {
    return d.forbidden;
  },
  notFound: function () {
    return d.notFound;
  },
  permanentRedirect: function () {
    return d.permanentRedirect;
  },
  redirect: function () {
    return d.redirect;
  },
  unauthorized: function () {
    return d.unauthorized;
  },
  unstable_isUnrecognizedActionError: function () {
    return f.unstable_isUnrecognizedActionError;
  },
  unstable_rethrow: function () {
    return d.unstable_rethrow;
  },
  useParams: function () {
    return v;
  },
  usePathname: function () {
    return _;
  },
  useRouter: function () {
    return g;
  },
  useSearchParams: function () {
    return y;
  },
  useSelectedLayoutSegment: function () {
    return m;
  },
  useSelectedLayoutSegments: function () {
    return b;
  },
  useServerInsertedHTML: function () {
    return c.useServerInsertedHTML;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./38035.js")._(require("./87849.js"));
let l = require("./21405.js");
let o = require("./95900.js");
let i = require("./47325.js");
let s = require("./97793.js");
let c = require("./97974.js");
let f = require("./9206.js");
let d = require("./87520.js");
let p;
let h;
function y() {
  h?.("useSearchParams()");
  let e = (0, a.useContext)(o.SearchParamsContext);
  return (0, a.useMemo)(() => e ? new s.ReadonlyURLSearchParams(e) : null, [e]);
}
function _() {
  p?.("usePathname()");
  return (0, a.useContext)(o.PathnameContext);
}
function g() {
  let e = (0, a.useContext)(l.AppRouterContext);
  if (e === null) {
    throw Object.defineProperty(Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
      value: "E238",
      enumerable: false,
      configurable: true
    });
  }
  return e;
}
function v() {
  p?.("useParams()");
  return (0, a.useContext)(o.PathParamsContext);
}
function b(e = "children") {
  p?.("useSelectedLayoutSegments()");
  let t = (0, a.useContext)(l.LayoutRouterContext);
  if (t) {
    return (0, i.getSelectedLayoutSegmentPath)(t.parentTree, e);
  } else {
    return null;
  }
}
function m(e = "children") {
  p?.("useSelectedLayoutSegment()");
  (0, a.useContext)(o.NavigationPromisesContext);
  let t = b(e);
  return (0, i.computeSelectedLayoutSegment)(t, e);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}