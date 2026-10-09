var n = require("./87849.js");
function u(e) {
  var t = "https://react.dev/errors/" + e;
  if (arguments.length > 1) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var r = 2; r < arguments.length; r++) {
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
  }
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function a() {}
var l = {
  d: {
    f: a,
    r: function () {
      throw Error(u(522));
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
var o = Symbol.for("react.portal");
var i = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l;
exports.createPortal = function (e, t, r = null) {
  if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) {
    throw Error(u(299));
  }
  return function (e, t, r, n = null) {
    return {
      $$typeof: o,
      key: n == null ? null : "" + n,
      children: e,
      containerInfo: t,
      implementation: r
    };
  }(e, t, null, r);
};
exports.flushSync = function (e) {
  var t = i.T;
  var r = l.p;
  try {
    i.T = null;
    l.p = 2;
    if (e) {
      return e();
    }
  } finally {
    i.T = t;
    l.p = r;
    l.d.f();
  }
};
exports.preconnect = function (e, t) {
  if (typeof e == "string") {
    t = t ? typeof (t = t.crossOrigin) == "string" ? t === "use-credentials" ? t : "" : undefined : null;
    l.d.C(e, t);
  }
};
exports.prefetchDNS = function (e) {
  if (typeof e == "string") {
    l.d.D(e);
  }
};
exports.preinit = function (e, t) {
  if (typeof e == "string" && t && typeof t.as == "string") {
    var r = t.as;
    var n = s(r, t.crossOrigin);
    var u = typeof t.integrity == "string" ? t.integrity : undefined;
    var a = typeof t.fetchPriority == "string" ? t.fetchPriority : undefined;
    if (r === "style") {
      l.d.S(e, typeof t.precedence == "string" ? t.precedence : undefined, {
        crossOrigin: n,
        integrity: u,
        fetchPriority: a
      });
    } else if (r === "script") {
      l.d.X(e, {
        crossOrigin: n,
        integrity: u,
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
        var r = s(t.as, t.crossOrigin);
        l.d.M(e, {
          crossOrigin: r,
          integrity: typeof t.integrity == "string" ? t.integrity : undefined,
          nonce: typeof t.nonce == "string" ? t.nonce : undefined
        });
      }
    } else if (t == null) {
      l.d.M(e);
    }
  }
};
exports.preload = function (e, t) {
  if (typeof e == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
    var r = t.as;
    var n = s(r, t.crossOrigin);
    l.d.L(e, r, {
      crossOrigin: n,
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
      var r = s(t.as, t.crossOrigin);
      l.d.m(e, {
        as: typeof t.as == "string" && t.as !== "script" ? t.as : undefined,
        crossOrigin: r,
        integrity: typeof t.integrity == "string" ? t.integrity : undefined
      });
    } else {
      l.d.m(e);
    }
  }
};
exports.requestFormReset = function (e) {
  l.d.r(e);
};
exports.unstable_batchedUpdates = function (e, t) {
  return e(t);
};
exports.useFormState = function (e, t, r) {
  return i.H.useFormState(e, t, r);
};
exports.useFormStatus = function () {
  return i.H.useHostTransitionStatus();
};
exports.version = "19.3.0-canary-52684925-20251110";