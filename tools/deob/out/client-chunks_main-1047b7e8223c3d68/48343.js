Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return h;
  }
});
let n = require("./34007.js");
let a = require(/*webcrack:missing*/"./62021.js");
let o = n._(require(/*webcrack:missing*/"./74361.js"));
let i = n._(require("./63985.js"));
let s = {
  400: "Bad Request",
  404: "This page could not be found",
  405: "Method Not Allowed",
  500: "Internal Server Error"
};
function u({
  req: e,
  res: t,
  err: r
}) {
  return {
    statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
    hostname: window.location.hostname
  };
}
let l = {
  fontFamily: "system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"",
  height: "100vh",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};
let c = {
  lineHeight: "48px"
};
let f = {
  display: "inline-block",
  margin: "0 20px 0 0",
  paddingRight: 23,
  fontSize: 24,
  fontWeight: 500,
  verticalAlign: "top"
};
let d = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "28px"
};
let p = {
  display: "inline-block"
};
class h extends o.default.Component {
  static {
    this.displayName = "ErrorPage";
  }
  static {
    this.getInitialProps = u;
  }
  static {
    this.origGetInitialProps = u;
  }
  render() {
    let {
      statusCode: e,
      withDarkMode: t = true
    } = this.props;
    let r = this.props.title || s[e] || "An unexpected error has occurred";
    return <div style={l}><i.default><title>{e ? `${e}: ${r}` : "Application error: a client-side exception has occurred"}</title></i.default><div style={c}><style dangerouslySetInnerHTML={{
          __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}${t ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : ""}`
        }} />{e ? <h1 className="next-error-h1" style={f}>{e}</h1> : null}<div style={p}><h2 style={d}>{this.props.title || e ? r : <a.Fragment>Application error: a client-side exception has occurred {!!this.props.hostname && <a.Fragment>while loading {this.props.hostname}</a.Fragment>} (see the browser console for more information)</a.Fragment>}.</h2></div></div></div>;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}