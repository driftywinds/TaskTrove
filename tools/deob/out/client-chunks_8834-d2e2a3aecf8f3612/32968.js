Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  HTTPAccessErrorStatus: function () {
    return u;
  },
  HTTP_ERROR_FALLBACK_ERROR_CODE: function () {
    return l;
  },
  getAccessFallbackErrorTypeByStatus: function () {
    return s;
  },
  getAccessFallbackHTTPStatus: function () {
    return i;
  },
  isHTTPAccessFallbackError: function () {
    return o;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let u = {
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401
};
let a = new Set(Object.values(u));
let l = "NEXT_HTTP_ERROR_FALLBACK";
function o(e) {
  if (typeof e != "object" || e === null || !("digest" in e) || typeof e.digest != "string") {
    return false;
  }
  let [t, r] = e.digest.split(";");
  return t === l && a.has(Number(r));
}
function i(e) {
  return Number(e.digest.split(";")[1]);
}
function s(e) {
  switch (e) {
    case 401:
      return "unauthorized";
    case 403:
      return "forbidden";
    case 404:
      return "not-found";
    default:
      return;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}