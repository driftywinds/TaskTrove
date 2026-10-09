Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  ReadonlyURLSearchParams: function () {
    return a.ReadonlyURLSearchParams;
  },
  RedirectType: function () {
    return o.RedirectType;
  },
  forbidden: function () {
    return s.forbidden;
  },
  notFound: function () {
    return i.notFound;
  },
  permanentRedirect: function () {
    return l.permanentRedirect;
  },
  redirect: function () {
    return l.redirect;
  },
  unauthorized: function () {
    return c.unauthorized;
  },
  unstable_isUnrecognizedActionError: function () {
    return d;
  },
  unstable_rethrow: function () {
    return f.unstable_rethrow;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./97793.js");
let l = require("./20567.js");
let o = require("./80376.js");
let i = require("./70073.js");
let s = require("./37816.js");
let c = require("./4477.js");
let f = require("./55637.js");
function d() {
  throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
    value: "E776",
    enumerable: false,
    configurable: true
  });
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}