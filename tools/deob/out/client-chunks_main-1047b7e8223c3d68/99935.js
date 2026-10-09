Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  HTTPAccessErrorStatus: function () {
    return a;
  },
  HTTP_ERROR_FALLBACK_ERROR_CODE: function () {
    return i;
  },
  getAccessFallbackErrorTypeByStatus: function () {
    return l;
  },
  getAccessFallbackHTTPStatus: function () {
    return u;
  },
  isHTTPAccessFallbackError: function () {
    return s;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = {
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401
};
let o = new Set(Object.values(a));
let i = "NEXT_HTTP_ERROR_FALLBACK";
function s(e) {
  if (typeof e != "object" || e === null || !("digest" in e) || typeof e.digest != "string") {
    return false;
  }
  let [t, r] = e.digest.split(";");
  return t === i && o.has(Number(r));
}
function u(e) {
  return Number(e.digest.split(";")[1]);
}
function l(e) {
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