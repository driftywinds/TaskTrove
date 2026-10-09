Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  getRedirectError: function () {
    return i;
  },
  getRedirectStatusCodeFromError: function () {
    return p;
  },
  getRedirectTypeFromError: function () {
    return d;
  },
  getURLFromRedirectError: function () {
    return f;
  },
  permanentRedirect: function () {
    return c;
  },
  redirect: function () {
    return s;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./11978.js");
let l = require("./80376.js");
let o;
function i(e, t, r = a.RedirectStatusCode.TemporaryRedirect) {
  let n = Object.defineProperty(Error(l.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
    value: "E394",
    enumerable: false,
    configurable: true
  });
  n.digest = `${l.REDIRECT_ERROR_CODE};${t};${e};${r};`;
  return n;
}
function s(e, t) {
  throw i(e, t ??= o?.getStore()?.isAction ? l.RedirectType.push : l.RedirectType.replace, a.RedirectStatusCode.TemporaryRedirect);
}
function c(e, t = l.RedirectType.replace) {
  throw i(e, t, a.RedirectStatusCode.PermanentRedirect);
}
function f(e) {
  if ((0, l.isRedirectError)(e)) {
    return e.digest.split(";").slice(2, -2).join(";");
  } else {
    return null;
  }
}
function d(e) {
  if (!(0, l.isRedirectError)(e)) {
    throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
      value: "E260",
      enumerable: false,
      configurable: true
    });
  }
  return e.digest.split(";", 2)[1];
}
function p(e) {
  if (!(0, l.isRedirectError)(e)) {
    throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
      value: "E260",
      enumerable: false,
      configurable: true
    });
  }
  return Number(e.digest.split(";").at(-2));
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}