Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./8349.js");
let u = require("./31621.js");
let a = {
  fontFamily: "system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"",
  height: "100vh",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};
let l = {
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "28px",
  margin: "0 8px"
};
let o = function ({
  error: e
}) {
  let t = e?.digest;
  return <html id="__next_error__"><head /><body><u.HandleISRError error={e} /><div style={a}><div><h2 style={l}>Application error: a {t ? "server" : "client"}-side exception has occurred while loading {window.location.hostname} (see the {t ? "server logs" : "browser console"} for more information).</h2>{t ? <p style={l}>{`Digest: ${t}`}</p> : null}</div></div></body></html>;
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}