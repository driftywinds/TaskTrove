var r = require(/*webcrack:missing*/"./23727.js");
var l = Symbol.for("react.transitional.element");
var a = Symbol.for("react.portal");
var o = Symbol.for("react.fragment");
var i = Symbol.for("react.strict_mode");
var u = Symbol.for("react.profiler");
var s = Symbol.for("react.consumer");
var c = Symbol.for("react.context");
var f = Symbol.for("react.forward_ref");
var d = Symbol.for("react.suspense");
var p = Symbol.for("react.memo");
var m = Symbol.for("react.lazy");
var h = Symbol.for("react.activity");
var g = Symbol.iterator;
var y = {
  isMounted: function () {
    return false;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};
var v = Object.assign;
var b = {};
function k(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = b;
  this.updater = n || y;
}
function w() {}
function S(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = b;
  this.updater = n || y;
}
k.prototype.isReactComponent = {};
k.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) {
    throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  }
  this.updater.enqueueSetState(this, e, t, "setState");
};
k.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
w.prototype = k.prototype;
var x = S.prototype = new w();
x.constructor = S;
v(x, k.prototype);
x.isPureReactComponent = true;
var E = Array.isArray;
function C() {}
var _ = {
  H: null,
  A: null,
  T: null,
  S: null
};
var z = Object.prototype.hasOwnProperty;
function P(e, t, n) {
  var r = n.ref;
  return {
    $$typeof: l,
    type: e,
    key: t,
    ref: r !== undefined ? r : null,
    props: n
  };
}
function N(e) {
  return typeof e == "object" && e !== null && e.$$typeof === l;
}
var T = /\/+/g;
function L(e, t) {
  var n;
  var r;
  if (typeof e == "object" && e !== null && e.key != null) {
    n = "" + e.key;
    r = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + n.replace(/[=:]/g, function (e) {
      return r[e];
    });
  } else {
    return t.toString(36);
  }
}
function O(e, t, n) {
  if (e == null) {
    return e;
  }
  var r = [];
  var o = 0;
  (function e(t, n, r, o, i) {
    var u;
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
            case l:
            case a:
              d = true;
              break;
            case m:
              return e((d = t._init)(t._payload), n, r, o, i);
          }
      }
    }
    if (d) {
      i = i(t);
      d = o === "" ? "." + L(t, 0) : o;
      if (E(i)) {
        r = "";
        if (d != null) {
          r = d.replace(T, "$&/") + "/";
        }
        e(i, n, r, "", function (e) {
          return e;
        });
      } else if (i != null) {
        if (N(i)) {
          u = i;
          s = r + (i.key == null || t && t.key === i.key ? "" : ("" + i.key).replace(T, "$&/") + "/") + d;
          i = P(u.type, s, u.props);
        }
        n.push(i);
      }
      return 1;
    }
    d = 0;
    var p = o === "" ? "." : o + ":";
    if (E(t)) {
      for (var h = 0; h < t.length; h++) {
        f = p + L(o = t[h], h);
        d += e(o, n, r, f, i);
      }
    } else if (typeof (h = (c = t) === null || typeof c != "object" ? null : typeof (c = g && c[g] || c["@@iterator"]) == "function" ? c : null) == "function") {
      t = h.call(t);
      h = 0;
      while (!(o = t.next()).done) {
        f = p + L(o = o.value, h++);
        d += e(o, n, r, f, i);
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
                e.then(C, C);
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
        }(t), n, r, o, i);
      }
      throw Error("Objects are not valid as a React child (found: " + ((n = String(t)) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    }
    return d;
  })(e, r, "", "", function (e) {
    return t.call(n, e, o++);
  });
  return r;
}
function D(e) {
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
var F = typeof reportError == "function" ? reportError : function (e) {
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
  } else if (typeof r == "object" && typeof r.emit == "function") {
    r.emit("uncaughtException", e);
    return;
  }
  console.error(e);
};
exports.Activity = h;
exports.Children = {
  map: O,
  forEach: function (e, t, n) {
    O(e, function () {
      t.apply(this, arguments);
    }, n);
  },
  count: function (e) {
    var t = 0;
    O(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return O(e, function (e) {
      return e;
    }) || [];
  },
  only: function (e) {
    if (!N(e)) {
      throw Error("React.Children.only expected to receive a single React element child.");
    }
    return e;
  }
};
exports.Component = k;
exports.Fragment = o;
exports.Profiler = u;
exports.PureComponent = S;
exports.StrictMode = i;
exports.Suspense = d;
exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _;
exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (e) {
    return _.H.useMemoCache(e);
  }
};
exports.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
exports.cacheSignal = function () {
  return null;
};
exports.cloneElement = function (e, t, n) {
  if (e == null) {
    throw Error("The argument must be a React element, but you passed " + e + ".");
  }
  var r = v({}, e.props);
  var l = e.key;
  if (t != null) {
    if (t.key !== undefined) {
      l = "" + t.key;
    }
    for (a in t) {
      if (z.call(t, a) && a !== "key" && a !== "__self" && a !== "__source" && (a !== "ref" || t.ref !== undefined)) {
        r[a] = t[a];
      }
    }
  }
  var a = arguments.length - 2;
  if (a === 1) {
    r.children = n;
  } else if (a > 1) {
    var o = Array(a);
    for (var i = 0; i < a; i++) {
      o[i] = arguments[i + 2];
    }
    r.children = o;
  }
  return P(e.type, l, r);
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
exports.createElement = function (e, t, n) {
  var r;
  var l = {};
  var a = null;
  if (t != null) {
    if (t.key !== undefined) {
      a = "" + t.key;
    }
    for (r in t) {
      if (z.call(t, r) && r !== "key" && r !== "__self" && r !== "__source") {
        l[r] = t[r];
      }
    }
  }
  var o = arguments.length - 2;
  if (o === 1) {
    l.children = n;
  } else if (o > 1) {
    var i = Array(o);
    for (var u = 0; u < o; u++) {
      i[u] = arguments[u + 2];
    }
    l.children = i;
  }
  if (e && e.defaultProps) {
    for (r in o = e.defaultProps) {
      if (l[r] === undefined) {
        l[r] = o[r];
      }
    }
  }
  return P(e, a, l);
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
exports.isValidElement = N;
exports.lazy = function (e) {
  return {
    $$typeof: m,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: D
  };
};
exports.memo = function (e, t) {
  return {
    $$typeof: p,
    type: e,
    compare: t === undefined ? null : t
  };
};
exports.startTransition = function (e) {
  var t = _.T;
  var n = {};
  _.T = n;
  try {
    var r = e();
    var l = _.S;
    if (l !== null) {
      l(n, r);
    }
    if (typeof r == "object" && r !== null && typeof r.then == "function") {
      r.then(C, F);
    }
  } catch (e) {
    F(e);
  } finally {
    if (t !== null && n.types !== null) {
      t.types = n.types;
    }
    _.T = t;
  }
};
exports.unstable_useCacheRefresh = function () {
  return _.H.useCacheRefresh();
};
exports.use = function (e) {
  return _.H.use(e);
};
exports.useActionState = function (e, t, n) {
  return _.H.useActionState(e, t, n);
};
exports.useCallback = function (e, t) {
  return _.H.useCallback(e, t);
};
exports.useContext = function (e) {
  return _.H.useContext(e);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (e, t) {
  return _.H.useDeferredValue(e, t);
};
exports.useEffect = function (e, t) {
  return _.H.useEffect(e, t);
};
exports.useEffectEvent = function (e) {
  return _.H.useEffectEvent(e);
};
exports.useId = function () {
  return _.H.useId();
};
exports.useImperativeHandle = function (e, t, n) {
  return _.H.useImperativeHandle(e, t, n);
};
exports.useInsertionEffect = function (e, t) {
  return _.H.useInsertionEffect(e, t);
};
exports.useLayoutEffect = function (e, t) {
  return _.H.useLayoutEffect(e, t);
};
exports.useMemo = function (e, t) {
  return _.H.useMemo(e, t);
};
exports.useOptimistic = function (e, t) {
  return _.H.useOptimistic(e, t);
};
exports.useReducer = function (e, t, n) {
  return _.H.useReducer(e, t, n);
};
exports.useRef = function (e) {
  return _.H.useRef(e);
};
exports.useState = function (e) {
  return _.H.useState(e);
};
exports.useSyncExternalStore = function (e, t, n) {
  return _.H.useSyncExternalStore(e, t, n);
};
exports.useTransition = function () {
  return _.H.useTransition();
};
exports.version = "19.2.3";