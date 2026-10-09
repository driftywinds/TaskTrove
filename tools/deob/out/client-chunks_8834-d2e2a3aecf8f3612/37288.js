var n = require("./37811.js");
var u = Symbol.for("react.transitional.element");
var a = Symbol.for("react.portal");
var l = Symbol.for("react.fragment");
var o = Symbol.for("react.strict_mode");
var i = Symbol.for("react.profiler");
var s = Symbol.for("react.consumer");
var c = Symbol.for("react.context");
var f = Symbol.for("react.forward_ref");
var d = Symbol.for("react.suspense");
var p = Symbol.for("react.memo");
var h = Symbol.for("react.lazy");
var y = Symbol.for("react.activity");
var _ = Symbol.for("react.view_transition");
var g = Symbol.iterator;
var v = {
  isMounted: function () {
    return false;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};
var b = Object.assign;
var m = {};
function R(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = m;
  this.updater = r || v;
}
function E() {}
function P(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = m;
  this.updater = r || v;
}
R.prototype.isReactComponent = {};
R.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) {
    throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  }
  this.updater.enqueueSetState(this, e, t, "setState");
};
R.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
E.prototype = R.prototype;
var O = P.prototype = new E();
O.constructor = P;
b(O, R.prototype);
O.isPureReactComponent = true;
var S = Array.isArray;
function j() {}
var T = {
  H: null,
  A: null,
  T: null,
  S: null
};
var M = Object.prototype.hasOwnProperty;
function w(e, t, r) {
  var n = r.ref;
  return {
    $$typeof: u,
    type: e,
    key: t,
    ref: n !== undefined ? n : null,
    props: r
  };
}
function C(e) {
  return typeof e == "object" && e !== null && e.$$typeof === u;
}
var A = /\/+/g;
function x(e, t) {
  var r;
  var n;
  if (typeof e == "object" && e !== null && e.key != null) {
    r = "" + e.key;
    n = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function (e) {
      return n[e];
    });
  } else {
    return t.toString(36);
  }
}
function N(e, t, r) {
  if (e == null) {
    return e;
  }
  var n = [];
  var l = 0;
  (function e(t, r, n, l, o) {
    var i;
    var s;
    var c;
    var f = typeof t;
    if (f === "undefined" || f === "boolean") {
      t = null;
    }
    var d = false;
    if (t === null) {
      d = true;
    } else {
      switch (f) {
        case "bigint":
        case "string":
        case "number":
          d = true;
          break;
        case "object":
          switch (t.$$typeof) {
            case u:
            case a:
              d = true;
              break;
            case h:
              return e((d = t._init)(t._payload), r, n, l, o);
          }
      }
    }
    if (d) {
      o = o(t);
      d = l === "" ? "." + x(t, 0) : l;
      if (S(o)) {
        n = "";
        if (d != null) {
          n = d.replace(A, "$&/") + "/";
        }
        e(o, r, n, "", function (e) {
          return e;
        });
      } else if (o != null) {
        if (C(o)) {
          i = o;
          s = n + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(A, "$&/") + "/") + d;
          o = w(i.type, s, i.props);
        }
        r.push(o);
      }
      return 1;
    }
    d = 0;
    var p = l === "" ? "." : l + ":";
    if (S(t)) {
      for (var y = 0; y < t.length; y++) {
        f = p + x(l = t[y], y);
        d += e(l, r, n, f, o);
      }
    } else if (typeof (y = (c = t) === null || typeof c != "object" ? null : typeof (c = g && c[g] || c["@@iterator"]) == "function" ? c : null) == "function") {
      t = y.call(t);
      y = 0;
      while (!(l = t.next()).done) {
        f = p + x(l = l.value, y++);
        d += e(l, r, n, f, o);
      }
    } else if (f === "object") {
      if (typeof t.then == "function") {
        return e(function (e) {
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw e.reason;
            default:
              if (typeof e.status == "string") {
                e.then(j, j);
              } else {
                e.status = "pending";
                e.then(function (t) {
                  if (e.status === "pending") {
                    e.status = "fulfilled";
                    e.value = t;
                  }
                }, function (t) {
                  if (e.status === "pending") {
                    e.status = "rejected";
                    e.reason = t;
                  }
                });
              }
              switch (e.status) {
                case "fulfilled":
                  return e.value;
                case "rejected":
                  throw e.reason;
              }
          }
          throw e;
        }(t), r, n, l, o);
      }
      throw Error("Objects are not valid as a React child (found: " + ((r = String(t)) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
    }
    return d;
  })(e, n, "", "", function (e) {
    return t.call(r, e, l++);
  });
  return n;
}
function U(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()).then(function (t) {
      if (e._status === 0 || e._status === -1) {
        e._status = 1;
        e._result = t;
      }
    }, function (t) {
      if (e._status === 0 || e._status === -1) {
        e._status = 2;
        e._result = t;
      }
    });
    if (e._status === -1) {
      e._status = 0;
      e._result = t;
    }
  }
  if (e._status === 1) {
    return e._result.default;
  }
  throw e._result;
}
var L = typeof reportError == "function" ? reportError : function (e) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var t = new window.ErrorEvent("error", {
      bubbles: true,
      cancelable: true,
      message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
      error: e
    });
    if (!window.dispatchEvent(t)) {
      return;
    }
  } else if (typeof n == "object" && typeof n.emit == "function") {
    n.emit("uncaughtException", e);
    return;
  }
  console.error(e);
};
function I(e) {
  var t = T.T;
  var r = {
    types: t !== null ? t.types : null
  };
  T.T = r;
  try {
    var n = e();
    var u = T.S;
    if (u !== null) {
      u(r, n);
    }
    if (typeof n == "object" && n !== null && typeof n.then == "function") {
      n.then(j, L);
    }
  } catch (e) {
    L(e);
  } finally {
    if (t !== null && r.types !== null) {
      t.types = r.types;
    }
    T.T = t;
  }
}
function D(e) {
  var t = T.T;
  if (t !== null) {
    var r = t.types;
    if (r === null) {
      t.types = [e];
    } else if (r.indexOf(e) === -1) {
      r.push(e);
    }
  } else {
    I(D.bind(null, e));
  }
}
exports.Activity = y;
exports.Children = {
  map: N,
  forEach: function (e, t, r) {
    N(e, function () {
      t.apply(this, arguments);
    }, r);
  },
  count: function (e) {
    var t = 0;
    N(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return N(e, function (e) {
      return e;
    }) || [];
  },
  only: function (e) {
    if (!C(e)) {
      throw Error("React.Children.only expected to receive a single React element child.");
    }
    return e;
  }
};
exports.Component = R;
exports.Fragment = l;
exports.Profiler = i;
exports.PureComponent = P;
exports.StrictMode = o;
exports.Suspense = d;
exports.ViewTransition = _;
exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T;
exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (e) {
    return T.H.useMemoCache(e);
  }
};
exports.addTransitionType = D;
exports.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
exports.cacheSignal = function () {
  return null;
};
exports.cloneElement = function (e, t, r) {
  if (e == null) {
    throw Error("The argument must be a React element, but you passed " + e + ".");
  }
  var n = b({}, e.props);
  var u = e.key;
  if (t != null) {
    if (t.key !== undefined) {
      u = "" + t.key;
    }
    for (a in t) {
      if (M.call(t, a) && a !== "key" && a !== "__self" && a !== "__source" && (a !== "ref" || t.ref !== undefined)) {
        n[a] = t[a];
      }
    }
  }
  var a = arguments.length - 2;
  if (a === 1) {
    n.children = r;
  } else if (a > 1) {
    var l = Array(a);
    for (var o = 0; o < a; o++) {
      l[o] = arguments[o + 2];
    }
    n.children = l;
  }
  return w(e.type, u, n);
};
exports.createContext = function (e) {
  (e = {
    $$typeof: c,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }).Provider = e;
  e.Consumer = {
    $$typeof: s,
    _context: e
  };
  return e;
};
exports.createElement = function (e, t, r) {
  var n;
  var u = {};
  var a = null;
  if (t != null) {
    if (t.key !== undefined) {
      a = "" + t.key;
    }
    for (n in t) {
      if (M.call(t, n) && n !== "key" && n !== "__self" && n !== "__source") {
        u[n] = t[n];
      }
    }
  }
  var l = arguments.length - 2;
  if (l === 1) {
    u.children = r;
  } else if (l > 1) {
    var o = Array(l);
    for (var i = 0; i < l; i++) {
      o[i] = arguments[i + 2];
    }
    u.children = o;
  }
  if (e && e.defaultProps) {
    for (n in l = e.defaultProps) {
      if (u[n] === undefined) {
        u[n] = l[n];
      }
    }
  }
  return w(e, a, u);
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (e) {
  return {
    $$typeof: f,
    render: e
  };
};
exports.isValidElement = C;
exports.lazy = function (e) {
  return {
    $$typeof: h,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: U
  };
};
exports.memo = function (e, t) {
  return {
    $$typeof: p,
    type: e,
    compare: t === undefined ? null : t
  };
};
exports.startTransition = I;
exports.unstable_useCacheRefresh = function () {
  return T.H.useCacheRefresh();
};
exports.use = function (e) {
  return T.H.use(e);
};
exports.useActionState = function (e, t, r) {
  return T.H.useActionState(e, t, r);
};
exports.useCallback = function (e, t) {
  return T.H.useCallback(e, t);
};
exports.useContext = function (e) {
  return T.H.useContext(e);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (e, t) {
  return T.H.useDeferredValue(e, t);
};
exports.useEffect = function (e, t) {
  return T.H.useEffect(e, t);
};
exports.useEffectEvent = function (e) {
  return T.H.useEffectEvent(e);
};
exports.useId = function () {
  return T.H.useId();
};
exports.useImperativeHandle = function (e, t, r) {
  return T.H.useImperativeHandle(e, t, r);
};
exports.useInsertionEffect = function (e, t) {
  return T.H.useInsertionEffect(e, t);
};
exports.useLayoutEffect = function (e, t) {
  return T.H.useLayoutEffect(e, t);
};
exports.useMemo = function (e, t) {
  return T.H.useMemo(e, t);
};
exports.useOptimistic = function (e, t) {
  return T.H.useOptimistic(e, t);
};
exports.useReducer = function (e, t, r) {
  return T.H.useReducer(e, t, r);
};
exports.useRef = function (e) {
  return T.H.useRef(e);
};
exports.useState = function (e) {
  return T.H.useState(e);
};
exports.useSyncExternalStore = function (e, t, r) {
  return T.H.useSyncExternalStore(e, t, r);
};
exports.useTransition = function () {
  return T.H.useTransition();
};
exports.version = "19.3.0-canary-52684925-20251110";