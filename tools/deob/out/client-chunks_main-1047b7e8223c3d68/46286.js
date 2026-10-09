Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  formatUrl: function () {
    return s;
  },
  formatWithValidation: function () {
    return l;
  },
  urlObjectKeys: function () {
    return u;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./26908.js")._(require("./17870.js"));
let i = /https?|ftp|gopher|file/;
function s(e) {
  let {
    auth: t,
    hostname: r
  } = e;
  let n = e.protocol || "";
  let a = e.pathname || "";
  let s = e.hash || "";
  let u = e.query || "";
  let l = false;
  t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "";
  if (e.host) {
    l = t + e.host;
  } else if (r) {
    l = t + (~r.indexOf(":") ? `[${r}]` : r);
    if (e.port) {
      l += ":" + e.port;
    }
  }
  if (u && typeof u == "object") {
    u = String(o.urlQueryToSearchParams(u));
  }
  let c = e.search || u && `?${u}` || "";
  if (n && !n.endsWith(":")) {
    n += ":";
  }
  if (e.slashes || (!n || i.test(n)) && l !== false) {
    l = "//" + (l || "");
    if (a && a[0] !== "/") {
      a = "/" + a;
    }
  } else {
    l ||= "";
  }
  if (s && s[0] !== "#") {
    s = "#" + s;
  }
  if (c && c[0] !== "?") {
    c = "?" + c;
  }
  a = a.replace(/[?#]/g, encodeURIComponent);
  c = c.replace("#", "%23");
  return `${n}${l}${a}${c}${s}`;
}
let u = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
function l(e) {
  return s(e);
}