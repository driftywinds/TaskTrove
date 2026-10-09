Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getImgProps", {
  enumerable: true,
  get: function () {
    return l;
  }
});
require(/*webcrack:missing*/"./44692.js");
let n = require("./25326.js");
let o = require("./84690.js");
let i = ["-moz-initial", "fill", "none", "scale-down", undefined];
function a(e) {
  return e.default !== undefined;
}
function s(e) {
  if (e === undefined) {
    return e;
  } else if (typeof e == "number") {
    if (Number.isFinite(e)) {
      return e;
    } else {
      return NaN;
    }
  } else if (typeof e == "string" && /^[0-9]+$/.test(e)) {
    return parseInt(e, 10);
  } else {
    return NaN;
  }
}
function l({
  src: e,
  sizes: t,
  unoptimized: r = false,
  priority: l = false,
  preload: u = false,
  loading: c,
  className: d,
  quality: f,
  width: p,
  height: m,
  fill: h = false,
  style: v,
  overrideSrc: g,
  onLoad: y,
  onLoadingComplete: b,
  placeholder: w = "empty",
  blurDataURL: E,
  fetchPriority: x,
  decoding: S = "async",
  layout: C,
  objectFit: _,
  objectPosition: O,
  lazyBoundary: P,
  lazyRoot: A,
  ...j
}, R) {
  var k;
  let T;
  let N;
  let D;
  let {
    imgConf: M,
    showAltText: L,
    blurComplete: I,
    defaultLoader: $
  } = R;
  let U = M || o.imageConfigDefault;
  if ("allSizes" in U) {
    T = U;
  } else {
    let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t);
    let t = U.deviceSizes.sort((e, t) => e - t);
    let r = U.qualities?.sort((e, t) => e - t);
    T = {
      ...U,
      allSizes: e,
      deviceSizes: t,
      qualities: r
    };
  }
  if ($ === undefined) {
    throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
      value: "E163",
      enumerable: false,
      configurable: true
    });
  }
  let F = j.loader || $;
  delete j.loader;
  delete j.srcSet;
  let W = "__next_img_default" in F;
  if (W) {
    if (T.loader === "custom") {
      throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
        value: "E252",
        enumerable: false,
        configurable: true
      });
    }
  } else {
    let e = F;
    F = t => {
      let {
        config: r,
        ...n
      } = t;
      return e(n);
    };
  }
  if (C) {
    if (C === "fill") {
      h = true;
    }
    let e = {
      intrinsic: {
        maxWidth: "100%",
        height: "auto"
      },
      responsive: {
        width: "100%",
        height: "auto"
      }
    }[C];
    if (e) {
      v = {
        ...v,
        ...e
      };
    }
    let r = {
      responsive: "100vw",
      fill: "100vw"
    }[C];
    if (r && !t) {
      t = r;
    }
  }
  let z = "";
  let B = s(p);
  let q = s(m);
  if ((k = e) && typeof k == "object" && (a(k) || k.src !== undefined)) {
    let t = a(e) ? e.default : e;
    if (!t.src) {
      throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
        value: "E460",
        enumerable: false,
        configurable: true
      });
    }
    if (!t.height || !t.width) {
      throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
        value: "E48",
        enumerable: false,
        configurable: true
      });
    }
    N = t.blurWidth;
    D = t.blurHeight;
    E = E || t.blurDataURL;
    z = t.src;
    if (!h) {
      if (B || q) {
        if (B && !q) {
          let e = B / t.width;
          q = Math.round(t.height * e);
        } else if (!B && q) {
          let e = q / t.height;
          B = Math.round(t.width * e);
        }
      } else {
        B = t.width;
        q = t.height;
      }
    }
  }
  let X = !l && !u && (c === "lazy" || c === undefined);
  if (!(e = typeof e == "string" ? e : z) || e.startsWith("data:") || e.startsWith("blob:")) {
    r = true;
    X = false;
  }
  if (T.unoptimized) {
    r = true;
  }
  if (W && !T.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg")) {
    r = true;
  }
  let H = s(f);
  let K = Object.assign(h ? {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    objectFit: _,
    objectPosition: O
  } : {}, L ? {} : {
    color: "transparent"
  }, v);
  let V = I || w === "empty" ? null : w === "blur" ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({
    widthInt: B,
    heightInt: q,
    blurWidth: N,
    blurHeight: D,
    blurDataURL: E || "",
    objectFit: K.objectFit
  })}")` : `url("${w}")`;
  let G = i.includes(K.objectFit) ? K.objectFit === "fill" ? "100% 100%" : "cover" : K.objectFit;
  let Y = V ? {
    backgroundSize: G,
    backgroundPosition: K.objectPosition || "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage: V
  } : {};
  let Z = function ({
    config: e,
    src: t,
    unoptimized: r,
    width: n,
    quality: o,
    sizes: i,
    loader: a
  }) {
    if (r) {
      return {
        src: t,
        srcSet: undefined,
        sizes: undefined
      };
    }
    let {
      widths: s,
      kind: l
    } = function ({
      deviceSizes: e,
      allSizes: t
    }, r, n) {
      if (n) {
        let r = /(^|\s)(1?\d?\d)vw/g;
        let o = [];
        for (let e; e = r.exec(n);) {
          o.push(parseInt(e[2]));
        }
        if (o.length) {
          let r = Math.min(...o) * 0.01;
          return {
            widths: t.filter(t => t >= e[0] * r),
            kind: "w"
          };
        }
        return {
          widths: t,
          kind: "w"
        };
      }
      if (typeof r != "number") {
        return {
          widths: e,
          kind: "w"
        };
      } else {
        return {
          widths: [...new Set([r, r * 2].map(e => t.find(t => t >= e) || t[t.length - 1]))],
          kind: "x"
        };
      }
    }(e, n, i);
    let u = s.length - 1;
    return {
      sizes: i || l !== "w" ? i : "100vw",
      srcSet: s.map((r, n) => `${a({
        config: e,
        src: t,
        quality: o,
        width: r
      })} ${l === "w" ? r : n + 1}${l}`).join(", "),
      src: a({
        config: e,
        src: t,
        quality: o,
        width: s[u]
      })
    };
  }({
    config: T,
    src: e,
    unoptimized: r,
    width: B,
    quality: H,
    sizes: t,
    loader: F
  });
  let J = X ? "lazy" : c;
  return {
    props: {
      ...j,
      loading: J,
      fetchPriority: x,
      width: B,
      height: q,
      decoding: S,
      className: d,
      style: {
        ...K,
        ...Y
      },
      sizes: Z.sizes,
      srcSet: Z.srcSet,
      src: g || Z.src
    },
    meta: {
      unoptimized: r,
      preload: u || l,
      placeholder: w,
      fill: h
    }
  };
}