Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HTTPAccessFallbackBoundary", {
  enumerable: true,
  get: function () {
    return c;
  }
});
let n = require("./38035.js");
let u = require("./8349.js");
let a = n._(require("./87849.js"));
let l = require("./48935.js");
let o = require("./32968.js");
require("./44692.js");
let i = require("./21405.js");
class _Component4 extends a.default.Component {
  constructor(e) {
    super(e);
    this.state = {
      triggeredStatus: undefined,
      previousPathname: e.pathname
    };
  }
  componentDidCatch() {}
  static getDerivedStateFromError(e) {
    if ((0, o.isHTTPAccessFallbackError)(e)) {
      return {
        triggeredStatus: (0, o.getAccessFallbackHTTPStatus)(e)
      };
    }
    throw e;
  }
  static getDerivedStateFromProps(e, t) {
    if (e.pathname !== t.previousPathname && t.triggeredStatus) {
      return {
        triggeredStatus: undefined,
        previousPathname: e.pathname
      };
    } else {
      return {
        triggeredStatus: t.triggeredStatus,
        previousPathname: e.pathname
      };
    }
  }
  render() {
    let {
      notFound: e,
      forbidden: t,
      unauthorized: r,
      children: n
    } = this.props;
    let {
      triggeredStatus: a
    } = this.state;
    let l = {
      [o.HTTPAccessErrorStatus.NOT_FOUND]: e,
      [o.HTTPAccessErrorStatus.FORBIDDEN]: t,
      [o.HTTPAccessErrorStatus.UNAUTHORIZED]: r
    };
    if (a) {
      let i = a === o.HTTPAccessErrorStatus.NOT_FOUND && e;
      let s = a === o.HTTPAccessErrorStatus.FORBIDDEN && t;
      let c = a === o.HTTPAccessErrorStatus.UNAUTHORIZED && r;
      if (i || s || c) {
        return <u.Fragment><meta name="robots" content="noindex" />{false}{l[a]}</u.Fragment>;
      } else {
        return n;
      }
    }
    return n;
  }
}
function c({
  notFound: e,
  forbidden: t,
  unauthorized: r,
  children: n
}) {
  let o = (0, l.useUntrackedPathname)();
  let c = (0, a.useContext)(i.MissingSlotContext);
  if (e || t || r) {
    return <_Component4 pathname={o} notFound={e} forbidden={t} unauthorized={r} missingSlots={c}>{n}</_Component4>;
  } else {
    return <u.Fragment>{n}</u.Fragment>;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}