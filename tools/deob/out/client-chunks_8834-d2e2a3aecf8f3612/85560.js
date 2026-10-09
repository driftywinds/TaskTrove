Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
  enumerable: true,
  get: function () {
    return l;
  }
});
let n = require("./8349.js");
require("./86059.js");
let u = require("./21405.js");
let a = require("./87849.js");
function l({
  Component: _Component6,
  slots: t,
  serverProvidedParams: l
}) {
  let o;
  if (l !== null) {
    o = l.params;
  } else {
    let e = (0, a.use)(u.LayoutRouterContext);
    o = e !== null ? e.parentParams : {};
  }
  {
    let {
      createRenderParamsFromClient: u
    } = require("./15304.js");
    let a = u(o);
    return <_Component6 {...t} params={a} />;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}