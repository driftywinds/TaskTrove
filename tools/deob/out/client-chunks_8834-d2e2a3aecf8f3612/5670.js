Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  GracefulDegradeBoundary: function () {
    return o;
  },
  default: function () {
    return i;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./8349.js");
let l = require("./87849.js");
class o extends l.Component {
  constructor(e) {
    super(e);
    this.state = {
      hasError: false
    };
    this.rootHtml = "";
    this.htmlAttributes = {};
    this.htmlRef = (0, l.createRef)();
  }
  static getDerivedStateFromError(e) {
    return {
      hasError: true
    };
  }
  componentDidMount() {
    let e = this.htmlRef.current;
    if (this.state.hasError && e) {
      Object.entries(this.htmlAttributes).forEach(([t, r]) => {
        e.setAttribute(t, r);
      });
    }
  }
  render() {
    let {
      hasError: e
    } = this.state;
    if (!this.rootHtml) {
      this.rootHtml = document.documentElement.innerHTML;
      this.htmlAttributes = function (e) {
        let t = {};
        for (let r = 0; r < e.attributes.length; r++) {
          let n = e.attributes[r];
          t[n.name] = n.value;
        }
        return t;
      }(document.documentElement);
    }
    if (e) {
      return <html ref={this.htmlRef} suppressHydrationWarning={true} dangerouslySetInnerHTML={{
        __html: this.rootHtml
      }} />;
    } else {
      return this.props.children;
    }
  }
}
let i = o;
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}