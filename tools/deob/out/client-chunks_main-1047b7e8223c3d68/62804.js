Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  RouteAnnouncer: function () {
    return c;
  },
  default: function () {
    return f;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./34007.js");
let i = require(/*webcrack:missing*/"./62021.js");
let s = o._(require(/*webcrack:missing*/"./74361.js"));
let u = require("./36436.js");
let l = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  top: 0,
  width: "1px",
  whiteSpace: "nowrap",
  wordWrap: "normal"
};
let c = () => {
  let {
    asPath: e
  } = (0, u.useRouter)();
  let [t, r] = s.default.useState("");
  let n = s.default.useRef(e);
  s.default.useEffect(() => {
    if (n.current !== e) {
      n.current = e;
      if (document.title) {
        r(document.title);
      } else {
        let t = document.querySelector("h1");
        r((t?.innerText ?? t?.textContent) || e);
      }
    }
  }, [e]);
  return <p aria-live="assertive" id="__next-route-announcer__" role="alert" style={l}>{t}</p>;
};
let f = c;
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}