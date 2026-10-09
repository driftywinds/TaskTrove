Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  RedirectBoundary: function () {
    return p;
  },
  RedirectErrorBoundary: function () {
    return _Component8;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./38035.js");
let l = require("./8349.js");
let o = a._(require("./87849.js"));
let i = require("./95541.js");
let s = require("./20567.js");
let c = require("./80376.js");
function _Component7({
  redirect: e,
  reset: t,
  redirectType: r
}) {
  let n = (0, i.useRouter)();
  (0, o.useEffect)(() => {
    o.default.startTransition(() => {
      if (r === c.RedirectType.push) {
        n.push(e, {});
      } else {
        n.replace(e, {});
      }
      t();
    });
  }, [e, r, t, n]);
  return null;
}
class _Component8 extends o.default.Component {
  constructor(e) {
    super(e);
    this.state = {
      redirect: null,
      redirectType: null
    };
  }
  static getDerivedStateFromError(e) {
    if ((0, c.isRedirectError)(e)) {
      let t = (0, s.getURLFromRedirectError)(e);
      let r = (0, s.getRedirectTypeFromError)(e);
      if ("handled" in e) {
        return {
          redirect: null,
          redirectType: null
        };
      } else {
        return {
          redirect: t,
          redirectType: r
        };
      }
    }
    throw e;
  }
  render() {
    let {
      redirect: e,
      redirectType: t
    } = this.state;
    if (e !== null && t !== null) {
      return <_Component7 redirect={e} redirectType={t} reset={() => this.setState({
        redirect: null
      })} />;
    } else {
      return this.props.children;
    }
  }
}
function p({
  children: e
}) {
  let t = (0, i.useRouter)();
  return <_Component8 router={t}>{e}</_Component8>;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}