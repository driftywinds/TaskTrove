var r = require("./74361.js");
function l(e) {
  var t = "https://react.dev/errors/" + e;
  if (arguments.length > 1) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++) {
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
  }
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function a() {}
var o = {
  d: {
    f: a,
    r: function () {
      throw Error(l(522));
    },
    D: a,
    C: a,
    L: a,
    m: a,
    X: a,
    S: a,
    M: a
  },
  p: 0,
  findDOMNode: null
};
var i = Symbol.for("react.portal");
var u = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function s(e, t) {
  if (e === "font") {
    return "";
  } else if (typeof t == "string") {
    if (t === "use-credentials") {
      return t;
    } else {
      return "";
    }
  } else {
    return undefined;
  }
}
exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o;
exports.createPortal = function (e, t, n = null) {
  if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) {
    throw Error(l(299));
  }
  return function (e, t, n, r = null) {
    return {
      $$typeof: i,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }(e, t, null, n);
};
exports.flushSync = function (e) {
  var t = u.T;
  var n = o.p;
  try {
    u.T = null;
    o.p = 2;
    if (e) {
      return e();
    }
  } finally {
    u.T = t;
    o.p = n;
    o.d.f();
  }
};
exports.preconnect = function (e, t) {
  if (typeof e == "string") {
    t = t ? typeof (t = t.crossOrigin) == "string" ? t === "use-credentials" ? t : "" : undefined : null;
    o.d.C(e, t);
  }
};
exports.prefetchDNS = function (e) {
  if (typeof e == "string") {
    o.d.D(e);
  }
};
exports.preinit = function (e, t) {
  if (typeof e == "string" && t && typeof t.as == "string") {
    var n = t.as;
    var r = s(n, t.crossOrigin);
    var l = typeof t.integrity == "string" ? t.integrity : undefined;
    var a = typeof t.fetchPriority == "string" ? t.fetchPriority : undefined;
    if (n === "style") {
      o.d.S(e, typeof t.precedence == "string" ? t.precedence : undefined, {
        crossOrigin: r,
        integrity: l,
        fetchPriority: a
      });
    } else if (n === "script") {
      o.d.X(e, {
        crossOrigin: r,
        integrity: l,
        fetchPriority: a,
        nonce: typeof t.nonce == "string" ? t.nonce : undefined
      });
    }
  }
};
exports.preinitModule = function (e, t) {
  if (typeof e == "string") {
    if (typeof t == "object" && t !== null) {
      if (t.as == null || t.as === "script") {
        var n = s(t.as, t.crossOrigin);
        o.d.M(e, {
          crossOrigin: n,
          integrity: typeof t.integrity == "string" ? t.integrity : undefined,
          nonce: typeof t.nonce == "string" ? t.nonce : undefined
        });
      }
    } else if (t == null) {
      o.d.M(e);
    }
  }
};
exports.preload = function (e, t) {
  if (typeof e == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
    var n = t.as;
    var r = s(n, t.crossOrigin);
    o.d.L(e, n, {
      crossOrigin: r,
      integrity: typeof t.integrity == "string" ? t.integrity : undefined,
      nonce: typeof t.nonce == "string" ? t.nonce : undefined,
      type: typeof t.type == "string" ? t.type : undefined,
      fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : undefined,
      referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : undefined,
      imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : undefined,
      imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : undefined,
      media: typeof t.media == "string" ? t.media : undefined
    });
  }
};
exports.preloadModule = function (e, t) {
  if (typeof e == "string") {
    if (t) {
      var n = s(t.as, t.crossOrigin);
      o.d.m(e, {
        as: typeof t.as == "string" && t.as !== "script" ? t.as : undefined,
        crossOrigin: n,
        integrity: typeof t.integrity == "string" ? t.integrity : undefined
      });
    } else {
      o.d.m(e);
    }
  }
};
exports.requestFormReset = function (e) {
  o.d.r(e);
};
exports.unstable_batchedUpdates = function (e, t) {
  return e(t);
};
exports.useFormState = function (e, t, n) {
  return u.H.useFormState(e, t, n);
};
exports.useFormStatus = function () {
  return u.H.useHostTransitionStatus();
};
exports.version = "19.2.3";