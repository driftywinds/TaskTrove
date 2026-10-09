Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let r = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv",
  noModule: "noModule"
};
let n = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];
function u(e) {
  return ["async", "defer", "noModule"].includes(e);
}
function a(e, t) {
  for (let [a, l] of Object.entries(t)) {
    if (!t.hasOwnProperty(a) || n.includes(a) || l === undefined) {
      continue;
    }
    let o = r[a] || a.toLowerCase();
    if (e.tagName === "SCRIPT" && u(o)) {
      e[o] = !!l;
    } else {
      e.setAttribute(o, String(l));
    }
    if (l === false || e.tagName === "SCRIPT" && u(o) && (!l || l === "false")) {
      e.setAttribute(o, "");
      e.removeAttribute(o);
    }
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}