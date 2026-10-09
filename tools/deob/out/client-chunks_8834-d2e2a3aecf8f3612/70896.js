Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  ErrorBoundary: function () {
    return p;
  },
  ErrorBoundaryHandler: function () {
    return _Component5;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./21634.js");
let l = require("./8349.js");
let o = a._(require("./87849.js"));
let i = require("./48935.js");
let s = require("./54744.js");
require("./28450.js");
let c = require("./31621.js");
let f = (0, require("./99552.js").isBot)(window.navigator.userAgent);
class _Component5 extends o.default.Component {
  constructor(e) {
    super(e);
    this.reset = () => {
      this.setState({
        error: null
      });
    };
    this.state = {
      error: null,
      previousPathname: this.props.pathname
    };
  }
  static getDerivedStateFromError(e) {
    if ((0, s.isNextRouterError)(e)) {
      throw e;
    }
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, t) {
    let {
      error: r
    } = t;
    if (e.pathname !== t.previousPathname && t.error) {
      return {
        error: null,
        previousPathname: e.pathname
      };
    } else {
      return {
        error: t.error,
        previousPathname: e.pathname
      };
    }
  }
  render() {
    if (this.state.error && !f) {
      const Component = this.props.errorComponent;
      return <l.Fragment><c.HandleISRError error={this.state.error} />{this.props.errorStyles}{this.props.errorScripts}<Component error={this.state.error} reset={this.reset} /></l.Fragment>;
    } else {
      return this.props.children;
    }
  }
}
function p({
  errorComponent: e,
  errorStyles: t,
  errorScripts: r,
  children: n
}) {
  let u = (0, i.useUntrackedPathname)();
  if (e) {
    return <_Component5 pathname={u} errorComponent={e} errorStyles={t} errorScripts={r}>{n}</_Component5>;
  } else {
    return <l.Fragment>{n}</l.Fragment>;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}