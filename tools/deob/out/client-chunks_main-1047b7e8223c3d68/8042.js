Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./34007.js");
let a = require(/*webcrack:missing*/"./62021.js");
let o = n._(require(/*webcrack:missing*/"./74361.js"));
let i = require("./58492.js");
async function s({
  Component: e,
  ctx: t
}) {
  return {
    pageProps: await (0, i.loadGetInitialProps)(e, t)
  };
}
class u extends o.default.Component {
  static {
    this.origGetInitialProps = s;
  }
  static {
    this.getInitialProps = s;
  }
  render() {
    let {
      Component: _Component,
      pageProps: t
    } = this.props;
    return <_Component {...t} />;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}