Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
  enumerable: true,
  get: function () {
    return o;
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
function a(e) {
  return ["async", "defer", "noModule"].includes(e);
}
function o(e, t) {
  for (let [o, i] of Object.entries(t)) {
    if (!t.hasOwnProperty(o) || n.includes(o) || i === undefined) {
      continue;
    }
    let s = r[o] || o.toLowerCase();
    if (e.tagName === "SCRIPT" && a(s)) {
      e[s] = !!i;
    } else {
      e.setAttribute(s, String(i));
    }
    if (i === false || e.tagName === "SCRIPT" && a(s) && (!i || i === "false")) {
      e.setAttribute(s, "");
      e.removeAttribute(s);
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