var n = require("./23164.js");
var u = {
  stream: true
};
var a = Object.prototype.hasOwnProperty;
var l = new Map();
function o(e) {
  var t = require(e);
  if (typeof t.then != "function" || t.status === "fulfilled") {
    return null;
  } else {
    t.then(function (e) {
      t.status = "fulfilled";
      t.value = e;
    }, function (e) {
      t.status = "rejected";
      t.reason = e;
    });
    return t;
  }
}
function i() {}
function s(e) {
  for (var t = e[1], n = [], u = 0; u < t.length;) {
    var a = t[u++];
    var s = t[u++];
    var c = l.get(a);
    if (c === undefined) {
      f.set(a, s);
      s = require.e(a);
      n.push(s);
      c = l.set.bind(l, a, null);
      s.then(c, i);
      l.set(a, s);
    } else if (c !== null) {
      n.push(c);
    }
  }
  if (e.length === 4) {
    if (n.length === 0) {
      return o(e[0]);
    } else {
      return Promise.all(n).then(function () {
        return o(e[0]);
      });
    }
  } else if (n.length > 0) {
    return Promise.all(n);
  } else {
    return null;
  }
}
function c(e) {
  var t = require(e[0]);
  if (e.length === 4 && typeof t.then == "function") {
    if (t.status === "fulfilled") {
      t = t.value;
    } else {
      throw t.reason;
    }
  }
  if (e[2] === "*") {
    return t;
  } else if (e[2] === "") {
    if (t.__esModule) {
      return t.default;
    } else {
      return t;
    }
  } else if (a.call(t, e[2])) {
    return t[e[2]];
  } else {
    return undefined;
  }
}
var f = new Map();
var d = require.u;
require.u = function (e) {
  var t = f.get(e);
  if (t !== undefined) {
    return t;
  } else {
    return d(e);
  }
};
var p = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var h = Symbol.for("react.transitional.element");
var y = Symbol.for("react.lazy");
var _ = Symbol.iterator;
var g = Symbol.asyncIterator;
var v = Array.isArray;
var b = Object.getPrototypeOf;
var m = Object.prototype;
var R = new WeakMap();
function E(e, t, r) {
  if (!R.has(e)) {
    R.set(e, {
      id: t,
      originalBind: e.bind,
      bound: r
    });
  }
}
function P(e, t, r) {
  this.status = e;
  this.value = t;
  this.reason = r;
}
function O(e) {
  switch (e.status) {
    case "resolved_model":
      L(e);
      break;
    case "resolved_module":
      I(e);
  }
  switch (e.status) {
    case "fulfilled":
      return e.value;
    case "pending":
    case "blocked":
    case "halted":
      throw e;
    default:
      throw e.reason;
  }
}
function S(e, t, r, n) {
  for (var u = 0; u < t.length; u++) {
    var a = t[u];
    if (typeof a == "function") {
      a(r);
    } else {
      H(e, a, r, n);
    }
  }
}
function j(e, t, r) {
  for (var n = 0; n < t.length; n++) {
    var u = t[n];
    if (typeof u == "function") {
      u(r);
    } else {
      B(e, u.handler, r);
    }
  }
}
function T(e, t) {
  var r = t.handler.chunk;
  if (r === null) {
    return null;
  }
  if (r === e) {
    return t.handler;
  }
  if ((t = r.value) !== null) {
    for (r = 0; r < t.length; r++) {
      var n = t[r];
      if (typeof n != "function" && (n = T(e, n)) !== null) {
        return n;
      }
    }
  }
  return null;
}
function M(e, t, r, n) {
  switch (t.status) {
    case "fulfilled":
      S(e, r, t.value, t);
      break;
    case "blocked":
      for (var u = 0; u < r.length; u++) {
        var a = r[u];
        if (typeof a != "function") {
          var l = T(t, a);
          if (l !== null) {
            H(e, a, l.value, t);
            r.splice(u, 1);
            u--;
            if (n !== null && (a = n.indexOf(a)) !== -1) {
              n.splice(a, 1);
            }
            switch (t.status) {
              case "fulfilled":
                S(e, r, t.value, t);
                return;
              case "rejected":
                if (n !== null) {
                  j(e, n, t.reason);
                }
                return;
            }
          }
        }
      }
    case "pending":
      if (t.value) {
        for (e = 0; e < r.length; e++) {
          t.value.push(r[e]);
        }
      } else {
        t.value = r;
      }
      if (t.reason) {
        if (n) {
          for (r = 0; r < n.length; r++) {
            t.reason.push(n[r]);
          }
        }
      } else {
        t.reason = n;
      }
      break;
    case "rejected":
      if (n) {
        j(e, n, t.reason);
      }
  }
}
function w(e, t, r) {
  if (t.status !== "pending" && t.status !== "blocked") {
    t.reason.error(r);
  } else {
    var n = t.reason;
    t.status = "rejected";
    t.reason = r;
    if (n !== null) {
      j(e, n, r);
    }
  }
}
function C(e, t, r) {
  return new P("resolved_model", (r ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + t + "}", e);
}
function A(e, t, r, n) {
  x(e, t, (n ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + r + "}");
}
function x(e, t, r) {
  if (t.status !== "pending") {
    t.reason.enqueueModel(r);
  } else {
    var n = t.value;
    var u = t.reason;
    t.status = "resolved_model";
    t.value = r;
    t.reason = e;
    if (n !== null) {
      L(t);
      M(e, t, n, u);
    }
  }
}
function N(e, t, r) {
  if (t.status === "pending" || t.status === "blocked") {
    var n = t.value;
    var u = t.reason;
    t.status = "resolved_module";
    t.value = r;
    t.reason = null;
    if (n !== null) {
      I(t);
      M(e, t, n, u);
    }
  }
}
P.prototype = Object.create(Promise.prototype);
P.prototype.then = function (e, t) {
  switch (this.status) {
    case "resolved_model":
      L(this);
      break;
    case "resolved_module":
      I(this);
  }
  switch (this.status) {
    case "fulfilled":
      if (typeof e == "function") {
        e(this.value);
      }
      break;
    case "pending":
    case "blocked":
      if (typeof e == "function") {
        if (this.value === null) {
          this.value = [];
        }
        this.value.push(e);
      }
      if (typeof t == "function") {
        if (this.reason === null) {
          this.reason = [];
        }
        this.reason.push(t);
      }
      break;
    case "halted":
      break;
    default:
      if (typeof t == "function") {
        t(this.reason);
      }
  }
};
var U = null;
function L(e) {
  var t = U;
  U = null;
  var r = e.value;
  var n = e.reason;
  e.status = "blocked";
  e.value = null;
  e.reason = null;
  try {
    var u = JSON.parse(r, n._fromJSON);
    var a = e.value;
    if (a !== null) {
      e.value = null;
      e.reason = null;
      r = 0;
      for (; r < a.length; r++) {
        var l = a[r];
        if (typeof l == "function") {
          l(u);
        } else {
          H(n, l, u, e);
        }
      }
    }
    if (U !== null) {
      if (U.errored) {
        throw U.reason;
      }
      if (U.deps > 0) {
        U.value = u;
        U.chunk = e;
        return;
      }
    }
    e.status = "fulfilled";
    e.value = u;
  } catch (t) {
    e.status = "rejected";
    e.reason = t;
  } finally {
    U = t;
  }
}
function I(e) {
  try {
    var t = c(e.value);
    e.status = "fulfilled";
    e.value = t;
  } catch (t) {
    e.status = "rejected";
    e.reason = t;
  }
}
function D(e, t) {
  e._closed = true;
  e._closedReason = t;
  e._chunks.forEach(function (r) {
    if (r.status === "pending") {
      w(e, r, t);
    } else if (r.status === "fulfilled" && r.reason !== null) {
      r.reason.error(t);
    }
  });
}
function F(e) {
  return {
    $$typeof: y,
    _payload: e,
    _init: O
  };
}
function k(e, t) {
  var r = e._chunks;
  var n = r.get(t);
  if (!n) {
    n = e._closed ? new P("rejected", null, e._closedReason) : new P("pending", null, null);
    r.set(t, n);
  }
  return n;
}
function H(e, t, r) {
  var n = t.handler;
  var u = t.parentObject;
  var a = t.key;
  var l = t.map;
  var o = t.path;
  try {
    for (var i = 1; i < o.length; i++) {
      while (typeof r == "object" && r !== null && r.$$typeof === y) {
        var s = r._payload;
        if (s === n.chunk) {
          r = n.value;
        } else {
          switch (s.status) {
            case "resolved_model":
              L(s);
              break;
            case "resolved_module":
              I(s);
          }
          switch (s.status) {
            case "fulfilled":
              r = s.value;
              continue;
            case "blocked":
              var c = T(s, t);
              if (c !== null) {
                r = c.value;
                continue;
              }
            case "pending":
              o.splice(0, i - 1);
              if (s.value === null) {
                s.value = [t];
              } else {
                s.value.push(t);
              }
              if (s.reason === null) {
                s.reason = [t];
              } else {
                s.reason.push(t);
              }
              return;
            case "halted":
              return;
            default:
              B(e, t.handler, s.reason);
              return;
          }
        }
      }
      r = r[o[i]];
    }
    while (typeof r == "object" && r !== null && r.$$typeof === y) {
      var f = r._payload;
      if (f === n.chunk) {
        r = n.value;
      } else {
        switch (f.status) {
          case "resolved_model":
            L(f);
            break;
          case "resolved_module":
            I(f);
        }
        if (f.status === "fulfilled") {
          r = f.value;
          continue;
        }
        break;
      }
    }
    var d = l(e, r, u, a);
    u[a] = d;
    if (a === "" && n.value === null) {
      n.value = d;
    }
    if (u[0] === h && typeof n.value == "object" && n.value !== null && n.value.$$typeof === h) {
      var p = n.value;
      if (a === "3") {
        p.props = d;
      }
    }
  } catch (r) {
    B(e, t.handler, r);
    return;
  }
  n.deps--;
  if (n.deps === 0 && (t = n.chunk) !== null && t.status === "blocked") {
    r = t.value;
    t.status = "fulfilled";
    t.value = n.value;
    t.reason = n.reason;
    if (r !== null) {
      S(e, r, n.value, t);
    }
  }
}
function B(e, t, r) {
  if (!t.errored) {
    t.errored = true;
    t.value = null;
    t.reason = r;
    if ((t = t.chunk) !== null && t.status === "blocked") {
      w(e, t, r);
    }
  }
}
function $(e, t, r, n, u, a) {
  if (U) {
    n = U;
    n.deps++;
  } else {
    n = U = {
      parent: null,
      chunk: null,
      value: null,
      reason: null,
      deps: 1,
      errored: false
    };
  }
  t = {
    handler: n,
    parentObject: t,
    key: r,
    map: u,
    path: a
  };
  if (e.value === null) {
    e.value = [t];
  } else {
    e.value.push(t);
  }
  if (e.reason === null) {
    e.reason = [t];
  } else {
    e.reason.push(t);
  }
  return null;
}
function K(e, t, r, n) {
  if (!e._serverReferenceConfig) {
    return function (e, t) {
      function r() {
        var e = Array.prototype.slice.call(arguments);
        if (u) {
          if (u.status === "fulfilled") {
            return t(n, u.value.concat(e));
          } else {
            return Promise.resolve(u).then(function (r) {
              return t(n, r.concat(e));
            });
          }
        } else {
          return t(n, e);
        }
      }
      var n = e.id;
      var u = e.bound;
      E(r, n, u);
      return r;
    }(t, e._callServer);
  }
  var u = function (e, t) {
    var r = "";
    var n = e[t];
    if (n) {
      r = n.name;
    } else {
      var u = t.lastIndexOf("#");
      if (u !== -1) {
        r = t.slice(u + 1);
        n = e[t.slice(0, u)];
      }
      if (!n) {
        throw Error("Could not find the module \"" + t + "\" in the React Server Manifest. This is probably a bug in the React Server Components bundler.");
      }
    }
    if (n.async) {
      return [n.id, n.chunks, r, 1];
    } else {
      return [n.id, n.chunks, r];
    }
  }(e._serverReferenceConfig, t.id);
  var a = s(u);
  if (a) {
    if (t.bound) {
      a = Promise.all([a, t.bound]);
    }
  } else {
    if (!t.bound) {
      E(a = c(u), t.id, t.bound);
      return a;
    }
    a = Promise.resolve(t.bound);
  }
  if (U) {
    var l = U;
    l.deps++;
  } else {
    l = U = {
      parent: null,
      chunk: null,
      value: null,
      reason: null,
      deps: 1,
      errored: false
    };
  }
  a.then(function () {
    var a = c(u);
    if (t.bound) {
      var o = t.bound.value.slice(0);
      o.unshift(null);
      a = a.bind.apply(a, o);
    }
    E(a, t.id, t.bound);
    r[n] = a;
    if (n === "" && l.value === null) {
      l.value = a;
    }
    if (r[0] === h && typeof l.value == "object" && l.value !== null && l.value.$$typeof === h && (o = l.value, n === "3")) {
      o.props = a;
    }
    l.deps--;
    if (l.deps === 0 && (a = l.chunk) !== null && a.status === "blocked") {
      o = a.value;
      a.status = "fulfilled";
      a.value = l.value;
      a.reason = null;
      if (o !== null) {
        S(e, o, l.value, a);
      }
    }
  }, function (t) {
    if (!l.errored) {
      l.errored = true;
      l.value = null;
      l.reason = t;
      var r = l.chunk;
      if (r !== null && r.status === "blocked") {
        w(e, r, t);
      }
    }
  });
  return null;
}
function z(e, t, r, n, u) {
  var a = parseInt((t = t.split(":"))[0], 16);
  switch ((a = k(e, a)).status) {
    case "resolved_model":
      L(a);
      break;
    case "resolved_module":
      I(a);
  }
  switch (a.status) {
    case "fulfilled":
      a = a.value;
      for (var l = 1; l < t.length; l++) {
        while (typeof a == "object" && a !== null && a.$$typeof === y) {
          switch ((a = a._payload).status) {
            case "resolved_model":
              L(a);
              break;
            case "resolved_module":
              I(a);
          }
          switch (a.status) {
            case "fulfilled":
              a = a.value;
              break;
            case "blocked":
            case "pending":
              return $(a, r, n, e, u, t.slice(l - 1));
            case "halted":
              if (U) {
                e = U;
                e.deps++;
              } else {
                U = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: null,
                  deps: 1,
                  errored: false
                };
              }
              return null;
            default:
              if (U) {
                U.errored = true;
                U.value = null;
                U.reason = a.reason;
              } else {
                U = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: a.reason,
                  deps: 0,
                  errored: true
                };
              }
              return null;
          }
        }
        a = a[t[l]];
      }
      while (typeof a == "object" && a !== null && a.$$typeof === y) {
        switch ((t = a._payload).status) {
          case "resolved_model":
            L(t);
            break;
          case "resolved_module":
            I(t);
        }
        if (t.status === "fulfilled") {
          a = t.value;
          continue;
        }
        break;
      }
      return u(e, a, r, n);
    case "pending":
    case "blocked":
      return $(a, r, n, e, u, t);
    case "halted":
      if (U) {
        e = U;
        e.deps++;
      } else {
        U = {
          parent: null,
          chunk: null,
          value: null,
          reason: null,
          deps: 1,
          errored: false
        };
      }
      return null;
    default:
      if (U) {
        U.errored = true;
        U.value = null;
        U.reason = a.reason;
      } else {
        U = {
          parent: null,
          chunk: null,
          value: null,
          reason: a.reason,
          deps: 0,
          errored: true
        };
      }
      return null;
  }
}
function V(e, t) {
  return new Map(t);
}
function X(e, t) {
  return new Set(t);
}
function G(e, t) {
  return new Blob(t.slice(1), {
    type: t[0]
  });
}
function q(e, t) {
  e = new FormData();
  for (var r = 0; r < t.length; r++) {
    e.append(t[r][0], t[r][1]);
  }
  return e;
}
function W(e, t) {
  return t[Symbol.iterator]();
}
function Y(e, t) {
  return t;
}
function Q() {
  throw Error("Trying to call a function from \"use server\" but the callServer option was not implemented in your router runtime.");
}
function J(e, t, r, n, u, a, l) {
  var o;
  var i = new Map();
  this._bundlerConfig = e;
  this._serverReferenceConfig = t;
  this._moduleLoading = r;
  this._callServer = n !== undefined ? n : Q;
  this._encodeFormAction = u;
  this._nonce = a;
  this._chunks = i;
  this._stringDecoder = new TextDecoder();
  this._fromJSON = null;
  this._closed = false;
  this._closedReason = null;
  this._tempRefs = l;
  this._fromJSON = (o = this, function (e, t) {
    if (typeof t == "string") {
      var r = o;
      var n = this;
      var u = e;
      var a = t;
      if (a[0] === "$") {
        if (a === "$") {
          if (U !== null && u === "0") {
            U = {
              parent: U,
              chunk: null,
              value: null,
              reason: null,
              deps: 0,
              errored: false
            };
          }
          return h;
        }
        switch (a[1]) {
          case "$":
            return a.slice(1);
          case "L":
            return F(r = k(r, n = parseInt(a.slice(2), 16)));
          case "@":
            return k(r, n = parseInt(a.slice(2), 16));
          case "S":
            return Symbol.for(a.slice(2));
          case "h":
            return z(r, a = a.slice(2), n, u, K);
          case "T":
            n = "$" + a.slice(2);
            if ((r = r._tempRefs) == null) {
              throw Error("Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.");
            }
            return r.get(n);
          case "Q":
            return z(r, a = a.slice(2), n, u, V);
          case "W":
            return z(r, a = a.slice(2), n, u, X);
          case "B":
            return z(r, a = a.slice(2), n, u, G);
          case "K":
            return z(r, a = a.slice(2), n, u, q);
          case "Z":
            return eu();
          case "i":
            return z(r, a = a.slice(2), n, u, W);
          case "I":
            return Infinity;
          case "-":
            if (a === "$-0") {
              return -0;
            } else {
              return -Infinity;
            }
          case "N":
            return NaN;
          case "u":
            return;
          case "D":
            return new Date(Date.parse(a.slice(2)));
          case "n":
            return BigInt(a.slice(2));
          default:
            return z(r, a = a.slice(1), n, u, Y);
        }
      }
      return a;
    }
    if (typeof t == "object" && t !== null) {
      if (t[0] === h) {
        e = {
          $$typeof: h,
          type: t[1],
          key: t[2],
          ref: null,
          props: t[3]
        };
        if (U !== null) {
          U = (t = U).parent;
          if (t.errored) {
            e = F(e = new P("rejected", null, t.reason));
          } else if (t.deps > 0) {
            var l = new P("blocked", null, null);
            t.value = e;
            t.chunk = l;
            e = F(l);
          }
        }
      } else {
        e = t;
      }
      return e;
    }
    return t;
  });
}
function Z(e, t, r) {
  var n = (e = e._chunks).get(t);
  if (n && n.status !== "pending") {
    n.reason.enqueueValue(r);
  } else {
    r = new P("fulfilled", r, null);
    e.set(t, r);
  }
}
function ee(e, t, r, n) {
  var u = e._chunks;
  var a = u.get(t);
  if (a) {
    if (a.status === "pending") {
      t = a.value;
      a.status = "fulfilled";
      a.value = r;
      a.reason = n;
      if (t !== null) {
        S(e, t, a.value, a);
      }
    }
  } else {
    e = new P("fulfilled", r, n);
    u.set(t, e);
  }
}
function et(e, t, r) {
  var n = null;
  var u = false;
  r = new ReadableStream({
    type: r,
    start: function (e) {
      n = e;
    }
  });
  var a = null;
  ee(e, t, r, {
    enqueueValue: function (e) {
      if (a === null) {
        n.enqueue(e);
      } else {
        a.then(function () {
          n.enqueue(e);
        });
      }
    },
    enqueueModel: function (t) {
      if (a === null) {
        var r = new P("resolved_model", t, e);
        L(r);
        if (r.status === "fulfilled") {
          n.enqueue(r.value);
        } else {
          r.then(function (e) {
            return n.enqueue(e);
          }, function (e) {
            return n.error(e);
          });
          a = r;
        }
      } else {
        r = a;
        var u = new P("pending", null, null);
        u.then(function (e) {
          return n.enqueue(e);
        }, function (e) {
          return n.error(e);
        });
        a = u;
        r.then(function () {
          if (a === u) {
            a = null;
          }
          x(e, u, t);
        });
      }
    },
    close: function () {
      if (!u) {
        u = true;
        if (a === null) {
          n.close();
        } else {
          var e = a;
          a = null;
          e.then(function () {
            return n.close();
          });
        }
      }
    },
    error: function (e) {
      if (!u) {
        u = true;
        if (a === null) {
          n.error(e);
        } else {
          var t = a;
          a = null;
          t.then(function () {
            return n.error(e);
          });
        }
      }
    }
  });
}
function er() {
  return this;
}
function en(e, t, r) {
  var n = [];
  var u = false;
  var a = 0;
  var l = {};
  l[g] = function () {
    var e;
    var t = 0;
    (e = {
      next: e = function (e) {
        if (e !== undefined) {
          throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
        }
        if (t === n.length) {
          if (u) {
            return new P("fulfilled", {
              done: true,
              value: undefined
            }, null);
          }
          n[t] = new P("pending", null, null);
        }
        return n[t++];
      }
    })[g] = er;
    return e;
  };
  ee(e, t, r ? l[g]() : l, {
    enqueueValue: function (t) {
      if (a === n.length) {
        n[a] = new P("fulfilled", {
          done: false,
          value: t
        }, null);
      } else {
        var r = n[a];
        var u = r.value;
        var l = r.reason;
        r.status = "fulfilled";
        r.value = {
          done: false,
          value: t
        };
        r.reason = null;
        if (u !== null) {
          M(e, r, u, l);
        }
      }
      a++;
    },
    enqueueModel: function (t) {
      if (a === n.length) {
        n[a] = C(e, t, false);
      } else {
        A(e, n[a], t, false);
      }
      a++;
    },
    close: function (t) {
      if (!u) {
        u = true;
        if (a === n.length) {
          n[a] = C(e, t, true);
        } else {
          A(e, n[a], t, true);
        }
        a++;
        while (a < n.length) {
          A(e, n[a++], "\"$undefined\"", true);
        }
      }
    },
    error: function (t) {
      if (!u) {
        u = true;
        if (a === n.length) {
          n[a] = new P("pending", null, null);
        }
        while (a < n.length) {
          w(e, n[a++], t);
        }
      }
    }
  });
}
function eu() {
  var e = Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
  e.stack = "Error: " + e.message;
  return e;
}
function ea(e, t) {
  for (var r = e.length, n = t.length, u = 0; u < r; u++) {
    n += e[u].byteLength;
  }
  n = new Uint8Array(n);
  for (var a = u = 0; a < r; a++) {
    var l = e[a];
    n.set(l, u);
    u += l.byteLength;
  }
  n.set(t, u);
  return n;
}
function el(e, t, r, n, u, a) {
  Z(e, t, u = new u((r = r.length === 0 && n.byteOffset % a == 0 ? n : ea(r, n)).buffer, r.byteOffset, r.byteLength / a));
}
function eo(e) {
  D(e, Error("Connection closed."));
}
function ei(e) {
  return new J(null, null, null, e && e.callServer ? e.callServer : undefined, undefined, undefined, e && e.temporaryReferences ? e.temporaryReferences : undefined);
}
function es(e, t, r) {
  function n(t) {
    D(e, t);
  }
  var a = {
    _rowState: 0,
    _rowID: 0,
    _rowTag: 0,
    _rowLength: 0,
    _buffer: []
  };
  var l = t.getReader();
  l.read().then(function t(o) {
    var i = o.value;
    if (o.done) {
      return r();
    }
    var c = 0;
    var f = a._rowState;
    o = a._rowID;
    for (var d = a._rowTag, h = a._rowLength, y = a._buffer, _ = i.length; c < _;) {
      var g = -1;
      switch (f) {
        case 0:
          if ((g = i[c++]) === 58) {
            f = 1;
          } else {
            o = o << 4 | (g > 96 ? g - 87 : g - 48);
          }
          continue;
        case 1:
          if ((f = i[c]) === 84 || f === 65 || f === 79 || f === 111 || f === 85 || f === 83 || f === 115 || f === 76 || f === 108 || f === 71 || f === 103 || f === 77 || f === 109 || f === 86) {
            d = f;
            f = 2;
            c++;
          } else if (f > 64 && f < 91 || f === 35 || f === 114 || f === 120) {
            d = f;
            f = 3;
            c++;
          } else {
            d = 0;
            f = 3;
          }
          continue;
        case 2:
          if ((g = i[c++]) === 44) {
            f = 4;
          } else {
            h = h << 4 | (g > 96 ? g - 87 : g - 48);
          }
          continue;
        case 3:
          g = i.indexOf(10, c);
          break;
        case 4:
          if ((g = c + h) > i.length) {
            g = -1;
          }
      }
      var v = i.byteOffset + c;
      if (g > -1) {
        (function (e, t, r, n, a, l) {
          switch (n) {
            case 65:
              Z(e, r, ea(a, l).buffer);
              return;
            case 79:
              el(e, r, a, l, Int8Array, 1);
              return;
            case 111:
              Z(e, r, a.length === 0 ? l : ea(a, l));
              return;
            case 85:
              el(e, r, a, l, Uint8ClampedArray, 1);
              return;
            case 83:
              el(e, r, a, l, Int16Array, 2);
              return;
            case 115:
              el(e, r, a, l, Uint16Array, 2);
              return;
            case 76:
              el(e, r, a, l, Int32Array, 4);
              return;
            case 108:
              el(e, r, a, l, Uint32Array, 4);
              return;
            case 71:
              el(e, r, a, l, Float32Array, 4);
              return;
            case 103:
              el(e, r, a, l, Float64Array, 8);
              return;
            case 77:
              el(e, r, a, l, BigInt64Array, 8);
              return;
            case 109:
              el(e, r, a, l, BigUint64Array, 8);
              return;
            case 86:
              el(e, r, a, l, DataView, 1);
              return;
          }
          t = e._stringDecoder;
          var o = "";
          for (var i = 0; i < a.length; i++) {
            o += t.decode(a[i], u);
          }
          a = o += t.decode(l);
          switch (n) {
            case 73:
              var c = e;
              var f = r;
              var d = a;
              var h = c._chunks;
              var y = h.get(f);
              d = JSON.parse(d, c._fromJSON);
              var _ = function (e, t) {
                if (e) {
                  var r = e[t[0]];
                  if (e = r && r[t[2]]) {
                    r = e.name;
                  } else {
                    if (!(e = r && r["*"])) {
                      throw Error("Could not find the module \"" + t[0] + "\" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.");
                    }
                    r = t[2];
                  }
                  if (t.length === 4) {
                    return [e.id, e.chunks, r, 1];
                  } else {
                    return [e.id, e.chunks, r];
                  }
                }
                return t;
              }(c._bundlerConfig, d);
              if (d = s(_)) {
                if (y) {
                  var g = y;
                  g.status = "blocked";
                } else {
                  g = new P("blocked", null, null);
                  h.set(f, g);
                }
                d.then(function () {
                  return N(c, g, _);
                }, function (e) {
                  return w(c, g, e);
                });
              } else if (y) {
                N(c, y, _);
              } else {
                y = new P("resolved_module", _, null);
                h.set(f, y);
              }
              break;
            case 72:
              r = a[0];
              e = JSON.parse(a = a.slice(1), e._fromJSON);
              a = p.d;
              switch (r) {
                case "D":
                  a.D(e);
                  break;
                case "C":
                  if (typeof e == "string") {
                    a.C(e);
                  } else {
                    a.C(e[0], e[1]);
                  }
                  break;
                case "L":
                  r = e[0];
                  n = e[1];
                  if (e.length === 3) {
                    a.L(r, n, e[2]);
                  } else {
                    a.L(r, n);
                  }
                  break;
                case "m":
                  if (typeof e == "string") {
                    a.m(e);
                  } else {
                    a.m(e[0], e[1]);
                  }
                  break;
                case "X":
                  if (typeof e == "string") {
                    a.X(e);
                  } else {
                    a.X(e[0], e[1]);
                  }
                  break;
                case "S":
                  if (typeof e == "string") {
                    a.S(e);
                  } else {
                    a.S(e[0], e[1] === 0 ? undefined : e[1], e.length === 3 ? e[2] : undefined);
                  }
                  break;
                case "M":
                  if (typeof e == "string") {
                    a.M(e);
                  } else {
                    a.M(e[0], e[1]);
                  }
              }
              break;
            case 69:
              l = (n = e._chunks).get(r);
              a = JSON.parse(a);
              (t = eu()).digest = a.digest;
              if (l) {
                w(e, l, t);
              } else {
                e = new P("rejected", null, t);
                n.set(r, e);
              }
              break;
            case 84:
              if ((n = (e = e._chunks).get(r)) && n.status !== "pending") {
                n.reason.enqueueValue(a);
              } else {
                a = new P("fulfilled", a, null);
                e.set(r, a);
              }
              break;
            case 78:
            case 68:
            case 74:
            case 87:
              throw Error("Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.");
            case 82:
              et(e, r, undefined);
              break;
            case 114:
              et(e, r, "bytes");
              break;
            case 88:
              en(e, r, false);
              break;
            case 120:
              en(e, r, true);
              break;
            case 67:
              if ((r = e._chunks.get(r)) && r.status === "fulfilled") {
                r.reason.close(a === "" ? "\"$undefined\"" : a);
              }
              break;
            default:
              if (l = (n = e._chunks).get(r)) {
                x(e, l, a);
              } else {
                e = new P("resolved_model", a, e);
                n.set(r, e);
              }
          }
        })(e, a, o, d, y, h = new Uint8Array(i.buffer, v, g - c));
        c = g;
        if (f === 3) {
          c++;
        }
        h = o = d = f = 0;
        y.length = 0;
      } else {
        i = new Uint8Array(i.buffer, v, i.byteLength - c);
        y.push(i);
        h -= i.byteLength;
        break;
      }
    }
    a._rowState = f;
    a._rowID = o;
    a._rowTag = d;
    a._rowLength = h;
    return l.read().then(t).catch(n);
  }).catch(n);
}
exports.createFromFetch = function (e, t) {
  var r = ei(t);
  e.then(function (e) {
    es(r, e.body, eo.bind(null, r));
  }, function (e) {
    D(r, e);
  });
  return k(r, 0);
};
exports.createFromReadableStream = function (e, t) {
  es(t = ei(t), e, eo.bind(null, t));
  return k(t, 0);
};
exports.createServerReference = function (e, t) {
  function r() {
    var r = Array.prototype.slice.call(arguments);
    return t(e, r);
  }
  E(r, e, null);
  return r;
};
exports.createTemporaryReferenceSet = function () {
  return new Map();
};
exports.encodeReply = function (e, t) {
  return new Promise(function (r, n) {
    var u = function (e, t, r, n, u) {
      function a(e, t) {
        t = new Blob([new Uint8Array(t.buffer, t.byteOffset, t.byteLength)]);
        var r = i++;
        if (c === null) {
          c = new FormData();
        }
        c.append("" + r, t);
        return "$" + e + r.toString(16);
      }
      function l(e, t) {
        if (t === null) {
          return null;
        }
        if (typeof t == "object") {
          switch (t.$$typeof) {
            case h:
              if (r !== undefined && e.indexOf(":") === -1) {
                var p;
                var E;
                var P;
                var O;
                var S;
                var j = f.get(this);
                if (j !== undefined) {
                  r.set(j + ":" + e, t);
                  return "$T";
                }
              }
              throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
            case y:
              j = t._payload;
              var T = t._init;
              if (c === null) {
                c = new FormData();
              }
              s++;
              try {
                var M = T(j);
                var w = i++;
                var C = o(M, w);
                c.append("" + w, C);
                return "$" + w.toString(16);
              } catch (e) {
                if (typeof e == "object" && e !== null && typeof e.then == "function") {
                  s++;
                  var A = i++;
                  j = function () {
                    try {
                      var e = o(t, A);
                      var r = c;
                      r.append("" + A, e);
                      s--;
                      if (s === 0) {
                        n(r);
                      }
                    } catch (e) {
                      u(e);
                    }
                  };
                  e.then(j, j);
                  return "$" + A.toString(16);
                }
                u(e);
                return null;
              } finally {
                s--;
              }
          }
          j = f.get(t);
          if (typeof t.then == "function") {
            if (j !== undefined) {
              if (d !== t) {
                return j;
              } else {
                d = null;
              }
            }
            if (c === null) {
              c = new FormData();
            }
            s++;
            var x = i++;
            e = "$@" + x.toString(16);
            f.set(t, e);
            t.then(function (e) {
              try {
                var t = f.get(e);
                var r = t !== undefined ? JSON.stringify(t) : o(e, x);
                (e = c).append("" + x, r);
                s--;
                if (s === 0) {
                  n(e);
                }
              } catch (e) {
                u(e);
              }
            }, u);
            return e;
          }
          if (j !== undefined) {
            if (d !== t) {
              return j;
            } else {
              d = null;
            }
          } else if (e.indexOf(":") === -1 && (j = f.get(this)) !== undefined) {
            e = j + ":" + e;
            f.set(t, e);
            if (r !== undefined) {
              r.set(e, t);
            }
          }
          if (v(t)) {
            return t;
          }
          if (t instanceof FormData) {
            if (c === null) {
              c = new FormData();
            }
            var N = c;
            var U = "" + (e = i++) + "_";
            t.forEach(function (e, t) {
              N.append(U + t, e);
            });
            return "$K" + e.toString(16);
          }
          if (t instanceof Map) {
            e = i++;
            j = o(Array.from(t), e);
            if (c === null) {
              c = new FormData();
            }
            c.append("" + e, j);
            return "$Q" + e.toString(16);
          }
          if (t instanceof Set) {
            e = i++;
            j = o(Array.from(t), e);
            if (c === null) {
              c = new FormData();
            }
            c.append("" + e, j);
            return "$W" + e.toString(16);
          }
          if (t instanceof ArrayBuffer) {
            e = new Blob([t]);
            j = i++;
            if (c === null) {
              c = new FormData();
            }
            c.append("" + j, e);
            return "$A" + j.toString(16);
          }
          if (t instanceof Int8Array) {
            return a("O", t);
          }
          if (t instanceof Uint8Array) {
            return a("o", t);
          }
          if (t instanceof Uint8ClampedArray) {
            return a("U", t);
          }
          if (t instanceof Int16Array) {
            return a("S", t);
          }
          if (t instanceof Uint16Array) {
            return a("s", t);
          }
          if (t instanceof Int32Array) {
            return a("L", t);
          }
          if (t instanceof Uint32Array) {
            return a("l", t);
          }
          if (t instanceof Float32Array) {
            return a("G", t);
          }
          if (t instanceof Float64Array) {
            return a("g", t);
          }
          if (t instanceof BigInt64Array) {
            return a("M", t);
          }
          if (t instanceof BigUint64Array) {
            return a("m", t);
          }
          if (t instanceof DataView) {
            return a("V", t);
          }
          if (typeof Blob == "function" && t instanceof Blob) {
            if (c === null) {
              c = new FormData();
            }
            e = i++;
            c.append("" + e, t);
            return "$B" + e.toString(16);
          }
          if (e = (p = t) === null || typeof p != "object" ? null : typeof (p = _ && p[_] || p["@@iterator"]) == "function" ? p : null) {
            if ((j = e.call(t)) === t) {
              e = i++;
              j = o(Array.from(j), e);
              if (c === null) {
                c = new FormData();
              }
              c.append("" + e, j);
              return "$i" + e.toString(16);
            } else {
              return Array.from(j);
            }
          }
          if (typeof ReadableStream == "function" && t instanceof ReadableStream) {
            return function (e) {
              try {
                var t;
                var r;
                var a;
                var o;
                var f;
                var d;
                var p;
                var h = e.getReader({
                  mode: "byob"
                });
              } catch (o) {
                t = e.getReader();
                if (c === null) {
                  c = new FormData();
                }
                r = c;
                s++;
                a = i++;
                t.read().then(function e(o) {
                  if (o.done) {
                    r.append("" + a, "C");
                    if (--s == 0) {
                      n(r);
                    }
                  } else {
                    try {
                      var i = JSON.stringify(o.value, l);
                      r.append("" + a, i);
                      t.read().then(e, u);
                    } catch (e) {
                      u(e);
                    }
                  }
                }, u);
                return "$R" + a.toString(16);
              }
              o = h;
              if (c === null) {
                c = new FormData();
              }
              f = c;
              s++;
              d = i++;
              p = [];
              o.read(new Uint8Array(1024)).then(function e(t) {
                if (t.done) {
                  t = i++;
                  f.append("" + t, new Blob(p));
                  f.append("" + d, "\"$o" + t.toString(16) + "\"");
                  f.append("" + d, "C");
                  if (--s == 0) {
                    n(f);
                  }
                } else {
                  p.push(t.value);
                  o.read(new Uint8Array(1024)).then(e, u);
                }
              }, u);
              return "$r" + d.toString(16);
            }(t);
          }
          if (typeof (e = t[g]) == "function") {
            E = t;
            P = e.call(t);
            if (c === null) {
              c = new FormData();
            }
            O = c;
            s++;
            S = i++;
            E = E === P;
            P.next().then(function e(t) {
              if (t.done) {
                if (t.value === undefined) {
                  O.append("" + S, "C");
                } else {
                  try {
                    var r = JSON.stringify(t.value, l);
                    O.append("" + S, "C" + r);
                  } catch (e) {
                    u(e);
                    return;
                  }
                }
                if (--s == 0) {
                  n(O);
                }
              } else {
                try {
                  var a = JSON.stringify(t.value, l);
                  O.append("" + S, a);
                  P.next().then(e, u);
                } catch (e) {
                  u(e);
                }
              }
            }, u);
            return "$" + (E ? "x" : "X") + S.toString(16);
          }
          if ((e = b(t)) !== m && (e === null || b(e) !== null)) {
            if (r === undefined) {
              throw Error("Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.");
            }
            return "$T";
          }
          return t;
        }
        if (typeof t == "string") {
          if (t[t.length - 1] === "Z" && this[e] instanceof Date) {
            return "$D" + t;
          } else {
            return e = t[0] === "$" ? "$" + t : t;
          }
        }
        if (typeof t == "boolean") {
          return t;
        }
        if (typeof t == "number") {
          if (Number.isFinite(t)) {
            if (t === 0 && 1 / t == -Infinity) {
              return "$-0";
            } else {
              return t;
            }
          } else if (t === Infinity) {
            return "$Infinity";
          } else if (t === -Infinity) {
            return "$-Infinity";
          } else {
            return "$NaN";
          }
        }
        if (t === undefined) {
          return "$undefined";
        }
        if (typeof t == "function") {
          if ((j = R.get(t)) !== undefined) {
            e = JSON.stringify({
              id: j.id,
              bound: j.bound
            }, l);
            if (c === null) {
              c = new FormData();
            }
            j = i++;
            c.set("" + j, e);
            return "$h" + j.toString(16);
          }
          if (r !== undefined && e.indexOf(":") === -1 && (j = f.get(this)) !== undefined) {
            r.set(j + ":" + e, t);
            return "$T";
          }
          throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");
        }
        if (typeof t == "symbol") {
          if (r !== undefined && e.indexOf(":") === -1 && (j = f.get(this)) !== undefined) {
            r.set(j + ":" + e, t);
            return "$T";
          }
          throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
        }
        if (typeof t == "bigint") {
          return "$n" + t.toString(10);
        }
        throw Error("Type " + typeof t + " is not supported as an argument to a Server Function.");
      }
      function o(e, t) {
        if (typeof e == "object" && e !== null) {
          t = "$" + t.toString(16);
          f.set(e, t);
          if (r !== undefined) {
            r.set(t, e);
          }
        }
        d = e;
        return JSON.stringify(e, l);
      }
      var i = 1;
      var s = 0;
      var c = null;
      var f = new WeakMap();
      var d = e;
      var p = o(e, 0);
      if (c === null) {
        n(p);
      } else {
        c.set("0", p);
        if (s === 0) {
          n(c);
        }
      }
      return function () {
        if (s > 0) {
          s = 0;
          if (c === null) {
            n(p);
          } else {
            n(c);
          }
        }
      };
    }(e, 0, t && t.temporaryReferences ? t.temporaryReferences : undefined, r, n);
    if (t && t.signal) {
      var a = t.signal;
      if (a.aborted) {
        u(a.reason);
      } else {
        function l() {
          u(a.reason);
          a.removeEventListener("abort", l);
        }
        a.addEventListener("abort", l);
      }
    }
  });
};
exports.registerServerReference = function (e, t) {
  E(e, t, null);
  return e;
};