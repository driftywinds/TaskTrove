Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return w;
  }
});
let n = require(/*webcrack:missing*/"./21634.js");
let o = require(/*webcrack:missing*/"./38035.js");
let i = require(/*webcrack:missing*/"./8349.js");
let a = o._(require(/*webcrack:missing*/"./87849.js"));
let s = n._(require(/*webcrack:missing*/"./23164.js"));
let l = n._(require("./38558.js"));
let u = require("./93077.js");
let c = require("./84690.js");
let d = require("./75262.js");
require(/*webcrack:missing*/"./44692.js");
let f = require("./22575.js");
let p = n._(require("./65023.js"));
let m = require(/*webcrack:missing*/"./36052.js");
let h = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [32, 48, 64, 96, 128, 256, 384],
  qualities: [75],
  path: "/_next/image",
  loader: "default",
  dangerouslyAllowSVG: false,
  unoptimized: false
};
function v(e, t, r, n, o, i, a) {
  let s = e?.src;
  if (e && e["data-loaded-src"] !== s) {
    e["data-loaded-src"] = s;
    ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
      if (e.parentElement && e.isConnected) {
        if (t !== "empty") {
          o(true);
        }
        if (r?.current) {
          let t = new Event("load");
          Object.defineProperty(t, "target", {
            writable: false,
            value: e
          });
          let n = false;
          let o = false;
          r.current({
            ...t,
            nativeEvent: t,
            currentTarget: e,
            target: e,
            isDefaultPrevented: () => n,
            isPropagationStopped: () => o,
            persist: () => {},
            preventDefault: () => {
              n = true;
              t.preventDefault();
            },
            stopPropagation: () => {
              o = true;
              t.stopPropagation();
            }
          });
        }
        if (n?.current) {
          n.current(e);
        }
      }
    });
  }
}
function g(e) {
  if (a.use) {
    return {
      fetchPriority: e
    };
  } else {
    return {
      fetchpriority: e
    };
  }
}
let _Component3 = (0, a.forwardRef)(({
  src: e,
  srcSet: t,
  sizes: r,
  height: n,
  width: o,
  decoding: s,
  className: l,
  style: u,
  fetchPriority: c,
  placeholder: d,
  loading: f,
  unoptimized: p,
  fill: h,
  onLoadRef: y,
  onLoadingCompleteRef: b,
  setBlurComplete: w,
  setShowAltText: E,
  sizesInput: x,
  onLoad: S,
  onError: C,
  ..._
}, O) => {
  let P = (0, a.useCallback)(e => {
    if (e) {
      if (C) {
        e.src = e.src;
      }
      if (e.complete) {
        v(e, d, y, b, w, p, x);
      }
    }
  }, [e, d, y, b, w, C, p, x]);
  let A = (0, m.useMergedRef)(O, P);
  return <img {..._} {...g(c)} loading={f} width={o} height={n} decoding={s} data-nimg={h ? "fill" : "1"} className={l} style={u} sizes={r} srcSet={t} src={e} ref={A} onLoad={e => {
    v(e.currentTarget, d, y, b, w, p, x);
  }} onError={e => {
    E(true);
    if (d !== "empty") {
      w(true);
    }
    if (C) {
      C(e);
    }
  }} />;
});
function _Component4({
  isAppRouter: e,
  imgAttributes: t
}) {
  let r = {
    as: "image",
    imageSrcSet: t.srcSet,
    imageSizes: t.sizes,
    crossOrigin: t.crossOrigin,
    referrerPolicy: t.referrerPolicy,
    ...g(t.fetchPriority)
  };
  if (e && s.default.preload) {
    s.default.preload(t.src, r);
    return null;
  } else {
    return <l.default><link rel="preload" href={t.srcSet ? undefined : t.src} {...r} key={"__nimg-" + t.src + t.srcSet + t.sizes} /></l.default>;
  }
}
let w = (0, a.forwardRef)((e, t) => {
  let r = (0, a.useContext)(f.RouterContext);
  let n = (0, a.useContext)(d.ImageConfigContext);
  let o = (0, a.useMemo)(() => {
    let e = h || n || c.imageConfigDefault;
    let t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t);
    let r = e.deviceSizes.sort((e, t) => e - t);
    let o = e.qualities?.sort((e, t) => e - t);
    return {
      ...e,
      allSizes: t,
      deviceSizes: r,
      qualities: o,
      localPatterns: e.localPatterns
    };
  }, [n]);
  let {
    onLoad: s,
    onLoadingComplete: l
  } = e;
  let m = (0, a.useRef)(s);
  (0, a.useEffect)(() => {
    m.current = s;
  }, [s]);
  let v = (0, a.useRef)(l);
  (0, a.useEffect)(() => {
    v.current = l;
  }, [l]);
  let [g, w] = (0, a.useState)(false);
  let [E, x] = (0, a.useState)(false);
  let {
    props: S,
    meta: C
  } = (0, u.getImgProps)(e, {
    defaultLoader: p.default,
    imgConf: o,
    blurComplete: g,
    showAltText: E
  });
  return <i.Fragment><_Component3 {...S} unoptimized={C.unoptimized} placeholder={C.placeholder} fill={C.fill} onLoadRef={m} onLoadingCompleteRef={v} setBlurComplete={w} setShowAltText={x} sizesInput={e.sizes} ref={t} />{C.preload ? <_Component4 isAppRouter={!r} imgAttributes={S} /> : null}</i.Fragment>;
});
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}