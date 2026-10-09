Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HTTPAccessErrorFallback", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let r = require(/*webcrack:missing*/"./8349.js");
let n = require("./19500.js");
function o({
  status: e,
  message: t
}) {
  return <r.Fragment><title>{`${e}: ${t}`}</title><div style={n.styles.error}><div><style dangerouslySetInnerHTML={{
          __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
        }} /><h1 className="next-error-h1" style={n.styles.h1}>{e}</h1><div style={n.styles.desc}><h2 style={n.styles.h2}>{t}</h2></div></div></div></r.Fragment>;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}