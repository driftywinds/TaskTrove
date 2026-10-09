var t;
var r = typeof Reflect == "object" ? Reflect : null;
var n = r && typeof r.apply == "function" ? r.apply : function (e, t, r) {
  return Function.prototype.apply.call(e, t, r);
};
function i(e) {
  if (console && console.warn) {
    console.warn(e);
  }
}
t = r && typeof r.ownKeys == "function" ? r.ownKeys : Object.getOwnPropertySymbols ? function (e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function (e) {
  return Object.getOwnPropertyNames(e);
};
var a = Number.isNaN || function (e) {
  return e != e;
};
function o() {
  o.init.call(this);
}
module.exports = o;
module.exports.once = b;
o.EventEmitter = o;
o.prototype._events = undefined;
o.prototype._eventsCount = 0;
o.prototype._maxListeners = undefined;
var s = 10;
function u(e) {
  if (typeof e != "function") {
    throw TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
  }
}
function l(e) {
  if (e._maxListeners === undefined) {
    return o.defaultMaxListeners;
  } else {
    return e._maxListeners;
  }
}
function c(e, t, r, n) {
  u(r);
  if ((o = e._events) === undefined) {
    o = e._events = Object.create(null);
    e._eventsCount = 0;
  } else {
    if (o.newListener !== undefined) {
      e.emit("newListener", t, r.listener ? r.listener : r);
      o = e._events;
    }
    s = o[t];
  }
  if (s === undefined) {
    s = o[t] = r;
    ++e._eventsCount;
  } else {
    if (typeof s == "function") {
      s = o[t] = n ? [r, s] : [s, r];
    } else if (n) {
      s.unshift(r);
    } else {
      s.push(r);
    }
    if ((a = l(e)) > 0 && s.length > a && !s.warned) {
      s.warned = true;
      var a;
      var o;
      var s;
      var c = Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      c.name = "MaxListenersExceededWarning";
      c.emitter = e;
      c.type = t;
      c.count = s.length;
      i(c);
    }
  }
  return e;
}
function d() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length == 0) {
      return this.listener.call(this.target);
    } else {
      return this.listener.apply(this.target, arguments);
    }
  }
}
function f(e, t, r) {
  var n = {
    fired: false,
    wrapFn: undefined,
    target: e,
    type: t,
    listener: r
  };
  var i = d.bind(n);
  i.listener = r;
  n.wrapFn = i;
  return i;
}
function h(e, t, r) {
  var n = e._events;
  if (n === undefined) {
    return [];
  }
  var i = n[t];
  if (i === undefined) {
    return [];
  } else if (typeof i == "function") {
    if (r) {
      return [i.listener || i];
    } else {
      return [i];
    }
  } else if (r) {
    return g(i);
  } else {
    return m(i, i.length);
  }
}
function p(e) {
  var t = this._events;
  if (t !== undefined) {
    var r = t[e];
    if (typeof r == "function") {
      return 1;
    }
    if (r !== undefined) {
      return r.length;
    }
  }
  return 0;
}
function m(e, t) {
  var r = Array(t);
  for (var n = 0; n < t; ++n) {
    r[n] = e[n];
  }
  return r;
}
function y(e, t) {
  for (; t + 1 < e.length; t++) {
    e[t] = e[t + 1];
  }
  e.pop();
}
function g(e) {
  for (var t = Array(e.length), r = 0; r < t.length; ++r) {
    t[r] = e[r].listener || e[r];
  }
  return t;
}
function b(e, t) {
  return new Promise(function (r, n) {
    function i(r) {
      e.removeListener(t, a);
      n(r);
    }
    function a() {
      if (typeof e.removeListener == "function") {
        e.removeListener("error", i);
      }
      r([].slice.call(arguments));
    }
    x(e, t, a, {
      once: true
    });
    if (t !== "error") {
      v(e, i, {
        once: true
      });
    }
  });
}
function v(e, t, r) {
  if (typeof e.on == "function") {
    x(e, "error", t, r);
  }
}
function x(e, t, r, n) {
  if (typeof e.on == "function") {
    if (n.once) {
      e.once(t, r);
    } else {
      e.on(t, r);
    }
  } else if (typeof e.addEventListener == "function") {
    e.addEventListener(t, function i(a) {
      if (n.once) {
        e.removeEventListener(t, i);
      }
      r(a);
    });
  } else {
    throw TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e);
  }
}
Object.defineProperty(o, "defaultMaxListeners", {
  enumerable: true,
  get: function () {
    return s;
  },
  set: function (e) {
    if (typeof e != "number" || e < 0 || a(e)) {
      throw RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
    }
    s = e;
  }
});
o.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};
o.prototype.setMaxListeners = function (e) {
  if (typeof e != "number" || e < 0 || a(e)) {
    throw RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
  }
  this._maxListeners = e;
  return this;
};
o.prototype.getMaxListeners = function () {
  return l(this);
};
o.prototype.emit = function (e) {
  var t = [];
  for (var r = 1; r < arguments.length; r++) {
    t.push(arguments[r]);
  }
  var i = e === "error";
  var a = this._events;
  if (a !== undefined) {
    i = i && a.error === undefined;
  } else if (!i) {
    return false;
  }
  if (i) {
    if (t.length > 0) {
      o = t[0];
    }
    if (o instanceof Error) {
      throw o;
    }
    var o;
    var s = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    s.context = o;
    throw s;
  }
  var u = a[e];
  if (u === undefined) {
    return false;
  }
  if (typeof u == "function") {
    n(u, this, t);
  } else {
    for (var l = u.length, c = m(u, l), r = 0; r < l; ++r) {
      n(c[r], this, t);
    }
  }
  return true;
};
o.prototype.addListener = function (e, t) {
  return c(this, e, t, false);
};
o.prototype.on = o.prototype.addListener;
o.prototype.prependListener = function (e, t) {
  return c(this, e, t, true);
};
o.prototype.once = function (e, t) {
  u(t);
  this.on(e, f(this, e, t));
  return this;
};
o.prototype.prependOnceListener = function (e, t) {
  u(t);
  this.prependListener(e, f(this, e, t));
  return this;
};
o.prototype.removeListener = function (e, t) {
  var r;
  var n;
  var i;
  var a;
  var o;
  u(t);
  if ((n = this._events) === undefined || (r = n[e]) === undefined) {
    return this;
  }
  if (r === t || r.listener === t) {
    if (--this._eventsCount == 0) {
      this._events = Object.create(null);
    } else {
      delete n[e];
      if (n.removeListener) {
        this.emit("removeListener", e, r.listener || t);
      }
    }
  } else if (typeof r != "function") {
    i = -1;
    a = r.length - 1;
    for (; a >= 0; a--) {
      if (r[a] === t || r[a].listener === t) {
        o = r[a].listener;
        i = a;
        break;
      }
    }
    if (i < 0) {
      return this;
    }
    if (i === 0) {
      r.shift();
    } else {
      y(r, i);
    }
    if (r.length === 1) {
      n[e] = r[0];
    }
    if (n.removeListener !== undefined) {
      this.emit("removeListener", e, o || t);
    }
  }
  return this;
};
o.prototype.off = o.prototype.removeListener;
o.prototype.removeAllListeners = function (e) {
  var t;
  var r;
  var n;
  if ((r = this._events) === undefined) {
    return this;
  }
  if (r.removeListener === undefined) {
    if (arguments.length == 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (r[e] !== undefined) {
      if (--this._eventsCount == 0) {
        this._events = Object.create(null);
      } else {
        delete r[e];
      }
    }
    return this;
  }
  if (arguments.length == 0) {
    var i;
    var a = Object.keys(r);
    for (n = 0; n < a.length; ++n) {
      if ((i = a[n]) !== "removeListener") {
        this.removeAllListeners(i);
      }
    }
    this.removeAllListeners("removeListener");
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  if (typeof (t = r[e]) == "function") {
    this.removeListener(e, t);
  } else if (t !== undefined) {
    for (n = t.length - 1; n >= 0; n--) {
      this.removeListener(e, t[n]);
    }
  }
  return this;
};
o.prototype.listeners = function (e) {
  return h(this, e, true);
};
o.prototype.rawListeners = function (e) {
  return h(this, e, false);
};
o.listenerCount = function (e, t) {
  if (typeof e.listenerCount == "function") {
    return e.listenerCount(t);
  } else {
    return p.call(e, t);
  }
};
o.prototype.listenerCount = p;
o.prototype.eventNames = function () {
  if (this._eventsCount > 0) {
    return t(this._events);
  } else {
    return [];
  }
};