Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return o;
  }
});
require("./34007.js");
let n = require(/*webcrack:missing*/"./62021.js");
require(/*webcrack:missing*/"./74361.js");
let a = require("./36436.js");
function o(_Component5) {
  function t(t) {
    return <_Component5 router={(0, a.useRouter)()} {...t} />;
  }
  t.getInitialProps = _Component5.getInitialProps;
  t.origGetInitialProps = _Component5.origGetInitialProps;
  return t;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}