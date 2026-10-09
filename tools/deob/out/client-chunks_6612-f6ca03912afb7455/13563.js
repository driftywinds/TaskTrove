Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  formatUrl: function () {
    return i;
  },
  formatWithValidation: function () {
    return c;
  },
  urlObjectKeys: function () {
    return l;
  }
};
for (var o in n) {
  Object.defineProperty(exports, o, {
    enumerable: true,
    get: n[o]
  });
}
let u = require(/*webcrack:missing*/"./38035.js")._(require("./63489.js"));
let a = /https?|ftp|gopher|file/;
function i(e) {
  let {
    auth: t,
    hostname: r
  } = e;
  let n = e.protocol || "";
  let o = e.pathname || "";
  let i = e.hash || "";
  let l = e.query || "";
  let c = false;
  t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "";
  if (e.host) {
    c = t + e.host;
  } else if (r) {
    c = t + (~r.indexOf(":") ? `[${r}]` : r);
    if (e.port) {
      c += ":" + e.port;
    }
  }
  if (l && typeof l == "object") {
    l = String(u.urlQueryToSearchParams(l));
  }
  let f = e.search || l && `?${l}` || "";
  if (n && !n.endsWith(":")) {
    n += ":";
  }
  if (e.slashes || (!n || a.test(n)) && c !== false) {
    c = "//" + (c || "");
    if (o && o[0] !== "/") {
      o = "/" + o;
    }
  } else {
    c ||= "";
  }
  if (i && i[0] !== "#") {
    i = "#" + i;
  }
  if (f && f[0] !== "?") {
    f = "?" + f;
  }
  o = o.replace(/[?#]/g, encodeURIComponent);
  f = f.replace("#", "%23");
  return `${n}${c}${o}${f}${i}`;
}
let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
function c(e) {
  return i(e);
}