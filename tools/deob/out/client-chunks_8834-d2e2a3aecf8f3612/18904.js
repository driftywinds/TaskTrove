Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require("./8349.js");
require("./86059.js");
let u = require("./21405.js");
let a = require("./87849.js");
let l = require("./22648.js");
let o = require("./95900.js");
function i({
  Component: _Component3,
  serverProvidedParams: t
}) {
  let i;
  let s;
  if (t !== null) {
    i = t.searchParams;
    s = t.params;
  } else {
    let e = (0, a.use)(u.LayoutRouterContext);
    s = e !== null ? e.parentParams : {};
    i = (0, l.urlSearchParamsToParsedUrlQuery)((0, a.use)(o.SearchParamsContext));
  }
  {
    let {
      createRenderSearchParamsFromClient: t
    } = require("./48927.js");
    let u = t(i);
    let {
      createRenderParamsFromClient: a
    } = require("./15304.js");
    let l = a(s);
    return <_Component3 params={l} searchParams={u} />;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}