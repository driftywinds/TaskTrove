Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Portal", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require(/*webcrack:missing*/"./74361.js");
let a = require(/*webcrack:missing*/"./80806.js");
let o = ({
  children: e,
  type: t
}) => {
  let [r, o] = (0, n.useState)(null);
  (0, n.useEffect)(() => {
    let e = document.createElement(t);
    document.body.appendChild(e);
    o(e);
    return () => {
      document.body.removeChild(e);
    };
  }, [t]);
  if (r) {
    return (0, a.createPortal)(e, r);
  } else {
    return null;
  }
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}