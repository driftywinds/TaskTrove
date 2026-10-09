Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
  enumerable: true,
  get: function () {
    return l;
  }
});
let n = require("./87849.js");
let u = require("./23164.js");
let a = "next-route-announcer";
function l({
  tree: e
}) {
  let [t, r] = (0, n.useState)(null);
  (0, n.useEffect)(() => {
    r(function () {
      let e = document.getElementsByName(a)[0];
      if (e?.shadowRoot?.childNodes[0]) {
        return e.shadowRoot.childNodes[0];
      }
      {
        let e = document.createElement(a);
        e.style.cssText = "position:absolute";
        let t = document.createElement("div");
        t.ariaLive = "assertive";
        t.id = "__next-route-announcer__";
        t.role = "alert";
        t.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        e.attachShadow({
          mode: "open"
        }).appendChild(t);
        document.body.appendChild(e);
        return t;
      }
    }());
    return () => {
      let e = document.getElementsByTagName(a)[0];
      if (e?.isConnected) {
        document.body.removeChild(e);
      }
    };
  }, []);
  let [l, o] = (0, n.useState)("");
  let i = (0, n.useRef)(undefined);
  (0, n.useEffect)(() => {
    let e = "";
    if (document.title) {
      e = document.title;
    } else {
      let t = document.querySelector("h1");
      if (t) {
        e = t.innerText || t.textContent || "";
      }
    }
    if (i.current !== undefined && i.current !== e) {
      o(e);
    }
    i.current = e;
  }, [e]);
  if (t) {
    return (0, u.createPortal)(l, t);
  } else {
    return null;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}