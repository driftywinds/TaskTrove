(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9492], {
  11009: (e, t, l) => {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/_not-found/page", function () {
      return l(30437);
    }]);
  },
  19373: (e, t, l) => {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: true
    });
    Object.defineProperty(t, "HTTPAccessErrorFallback", {
      enumerable: true,
      get: function () {
        return o;
      }
    });
    let r = l(8349);
    let n = l(19500);
    function o({
      status: e,
      message: t
    }) {
      return <r.Fragment><title>{`${e}: ${t}`}</title><div style={n.styles.error}><div><style dangerouslySetInnerHTML={{
              __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
            }} /><h1 className="next-error-h1" style={n.styles.h1}>{e}</h1><div style={n.styles.desc}><h2 style={n.styles.h2}>{t}</h2></div></div></div></r.Fragment>;
    }
    if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
      Object.defineProperty(t.default, "__esModule", {
        value: true
      });
      Object.assign(t.default, t);
      e.exports = t.default;
    }
  },
  19500: (e, t) => {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: true
    });
    Object.defineProperty(t, "styles", {
      enumerable: true,
      get: function () {
        return l;
      }
    });
    let l = {
      error: {
        fontFamily: "system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      desc: {
        display: "inline-block"
      },
      h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        padding: "0 23px 0 0",
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
      },
      h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
      }
    };
    if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
      Object.defineProperty(t.default, "__esModule", {
        value: true
      });
      Object.assign(t.default, t);
      e.exports = t.default;
    }
  },
  30437: (e, t, l) => {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: true
    });
    Object.defineProperty(t, "default", {
      enumerable: true,
      get: function () {
        return o;
      }
    });
    let r = l(8349);
    let n = l(19373);
    let o = function () {
      return <html><body><n.HTTPAccessErrorFallback status={404} message="This page could not be found." /></body></html>;
    };
    if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
      Object.defineProperty(t.default, "__esModule", {
        value: true
      });
      Object.assign(t.default, t);
      e.exports = t.default;
    }
  }
}, e => {
  e.O(0, [5893, 8834, 7358], () => e(e.s = 11009));
  _N_E = e.O();
}]);