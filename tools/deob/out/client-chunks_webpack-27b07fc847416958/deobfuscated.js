(() => {
  "use strict";

  var e;
  var t;
  var r;
  var o;
  var n;
  var i;
  var a;
  var l;
  var u = {};
  var d = {};
  function c(e) {
    var t = d[e];
    if (t !== undefined) {
      return t.exports;
    }
    var r = d[e] = {
      id: e,
      loaded: false,
      exports: {}
    };
    var o = true;
    try {
      u[e].call(r.exports, r, r.exports, c);
      o = false;
    } finally {
      if (o) {
        delete d[e];
      }
    }
    r.loaded = true;
    return r.exports;
  }
  c.m = u;
  e = [];
  c.O = (t, r, o, n) => {
    if (r) {
      n = n || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > n; i--) {
        e[i] = e[i - 1];
      }
      e[i] = [r, o, n];
      return;
    }
    var a = Infinity;
    for (var i = 0; i < e.length; i++) {
      for (var [r, o, n] = e[i], l = true, u = 0; u < r.length; u++) {
        if ((n & false || a >= n) && Object.keys(c.O).every(e => c.O[e](r[u]))) {
          r.splice(u--, 1);
        } else {
          l = false;
          if (n < a) {
            a = n;
          }
        }
      }
      if (l) {
        e.splice(i--, 1);
        var d = o();
        if (d !== undefined) {
          t = d;
        }
      }
    }
    return t;
  };
  c.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    c.d(t, {
      a: t
    });
    return t;
  };
  r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
  c.t = function (e, o) {
    if (o & 1) {
      e = this(e);
    }
    if (o & 8 || typeof e == "object" && e && (o & 4 && e.__esModule || o & 16 && typeof e.then == "function")) {
      return e;
    }
    var n = Object.create(null);
    c.r(n);
    var i = {};
    t = t || [null, r({}), r([]), r(r)];
    for (var a = o & 2 && e; typeof a == "object" && !~t.indexOf(a); a = r(a)) {
      Object.getOwnPropertyNames(a).forEach(t => i[t] = () => e[t]);
    }
    i.default = () => e;
    c.d(n, i);
    return n;
  };
  c.d = (e, t) => {
    for (var r in t) {
      if (c.o(t, r) && !c.o(e, r)) {
        Object.defineProperty(e, r, {
          enumerable: true,
          get: t[r]
        });
      }
    }
  };
  c.f = {};
  c.e = e => Promise.all(Object.keys(c.f).reduce((t, r) => {
    c.f[r](e, t);
    return t;
  }, []));
  c.u = e => {};
  c.miniCssF = e => {};
  c.g = function () {
    if (typeof globalThis == "object") {
      return globalThis;
    }
    try {
      return this || Function("return this")();
    } catch (e) {
      if (typeof window == "object") {
        return window;
      }
    }
  }();
  c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  o = {};
  c.l = (e, t, r, n) => {
    if (o[e]) {
      o[e].push(t);
      return;
    }
    if (r !== undefined) {
      var i;
      var a;
      for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
        var d = l[u];
        if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == "_N_E:" + r) {
          i = d;
          break;
        }
      }
    }
    if (!i) {
      a = true;
      (i = document.createElement("script")).charset = "utf-8";
      i.timeout = 120;
      if (c.nc) {
        i.setAttribute("nonce", c.nc);
      }
      i.setAttribute("data-webpack", "_N_E:" + r);
      i.src = c.tu(e);
    }
    o[e] = [t];
    var s = (t, r) => {
      i.onerror = i.onload = null;
      clearTimeout(f);
      var n = o[e];
      delete o[e];
      if (i.parentNode) {
        i.parentNode.removeChild(i);
      }
      if (n) {
        n.forEach(e => e(r));
      }
      if (t) {
        return t(r);
      }
    };
    var f = setTimeout(s.bind(null, undefined, {
      type: "timeout",
      target: i
    }), 120000);
    i.onerror = s.bind(null, i.onerror);
    i.onload = s.bind(null, i.onload);
    if (a) {
      document.head.appendChild(i);
    }
  };
  c.r = e => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  c.nmd = e => {
    e.paths = [];
    e.children ||= [];
    return e;
  };
  c.tt = () => {
    if (n === undefined) {
      n = {
        createScriptURL: e => e
      };
      if (typeof trustedTypes != "undefined" && trustedTypes.createPolicy) {
        n = trustedTypes.createPolicy("nextjs#bundler", n);
      }
    }
    return n;
  };
  c.tu = e => c.tt().createScriptURL(e);
  c.p = "/_next/";
  i = {
    8068: 0,
    2863: 0,
    2666: 0,
    4129: 0,
    6797: 0
  };
  c.f.j = (e, t) => {
    var r = c.o(i, e) ? i[e] : undefined;
    if (r !== 0) {
      if (r) {
        t.push(r[2]);
      } else if (/^(2666|2863|4129|6797|8068)$/.test(e)) {
        i[e] = 0;
      } else {
        var o = new Promise((t, o) => r = i[e] = [t, o]);
        t.push(r[2] = o);
        var n = c.p + c.u(e);
        var a = Error();
        c.l(n, t => {
          if (c.o(i, e) && ((r = i[e]) !== 0 && (i[e] = undefined), r)) {
            var o = t && (t.type === "load" ? "missing" : t.type);
            var n = t && t.target && t.target.src;
            a.message = "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")";
            a.name = "ChunkLoadError";
            a.type = o;
            a.request = n;
            r[1](a);
          }
        }, "chunk-" + e, e);
      }
    }
  };
  c.O.j = e => i[e] === 0;
  a = (e, t) => {
    var r;
    var o;
    var [n, a, l] = t;
    var u = 0;
    if (n.some(e => i[e] !== 0)) {
      for (r in a) {
        if (c.o(a, r)) {
          c.m[r] = a[r];
        }
      }
      if (l) {
        var d = l(c);
      }
    }
    for (e && e(t); u < n.length; u++) {
      o = n[u];
      if (c.o(i, o) && i[o]) {
        i[o][0]();
      }
      i[o] = 0;
    }
    return c.O(d);
  };
  (l = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(a.bind(null, 0));
  l.push = a.bind(null, l.push.bind(l));
  c.nc = undefined;
})();