Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  HEAD_REQUEST_KEY: function () {
    return o;
  },
  ROOT_SEGMENT_REQUEST_KEY: function () {
    return l;
  },
  appendSegmentRequestKeyPart: function () {
    return s;
  },
  convertSegmentPathToStaticExportFilename: function () {
    return d;
  },
  createSegmentRequestKeyPart: function () {
    return i;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./47325.js");
let l = "";
let o = "/_head";
function i(e) {
  if (typeof e == "string") {
    if (e.startsWith(a.PAGE_SEGMENT_KEY)) {
      return a.PAGE_SEGMENT_KEY;
    } else if (e === "/_not-found") {
      return "_not-found";
    } else {
      return f(e);
    }
  }
  let t = e[0];
  return "$" + e[2] + "$" + f(t);
}
function s(e, t, r) {
  return e + "/" + (t === "children" ? r : `@${f(t)}/${r}`);
}
let c = /^[a-zA-Z0-9\-_@]+$/;
function f(e) {
  if (c.test(e)) {
    return e;
  } else {
    return "!" + btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
}
function d(e) {
  return `__next${e.replace(/\//g, ".")}.txt`;
}