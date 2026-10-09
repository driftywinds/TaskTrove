Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return l;
  }
});
let n = require(/*webcrack:missing*/"./8349.js");
let o = require(/*webcrack:missing*/"./87849.js");
let i = require("./99224.js");
function a(e) {
  return {
    default: e && "default" in e ? e.default : e
  };
}
require("./17797.js");
let s = {
  loader: () => Promise.resolve(a(() => null)),
  loading: null,
  ssr: true
};
let l = function (e) {
  let t = {
    ...s,
    ...e
  };
  let _Component7 = (0, o.lazy)(() => t.loader().then(a));
  let _Component6 = t.loading;
  function u(e) {
    let a = _Component6 ? <_Component6 isLoading={true} pastDelay={true} error={null} /> : null;
    let s = !t.ssr || !!t.loading;
    let _Component8 = s ? o.Suspense : o.Fragment;
    let c = t.ssr ? <n.Fragment>{null}<_Component7 {...e} /></n.Fragment> : <i.BailoutToCSR reason="next/dynamic"><_Component7 {...e} /></i.BailoutToCSR>;
    return <_Component8 {...s ? {
      fallback: a
    } : {}}>{c}</_Component8>;
  }
  u.displayName = "LoadableComponent";
  return u;
};