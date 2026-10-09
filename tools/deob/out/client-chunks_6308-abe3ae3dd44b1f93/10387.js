Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return c;
  },
  getImageProps: function () {
    return u;
  }
};
for (var o in n) {
  Object.defineProperty(exports, o, {
    enumerable: true,
    get: n[o]
  });
}
let i = require(/*webcrack:missing*/"./21634.js");
let a = require("./93077.js");
let s = require("./48965.js");
let l = i._(require("./65023.js"));
function u(e) {
  let {
    props: t
  } = (0, a.getImgProps)(e, {
    defaultLoader: l.default,
    imgConf: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      qualities: [75],
      path: "/_next/image",
      loader: "default",
      dangerouslyAllowSVG: false,
      unoptimized: false
    }
  });
  for (let [e, r] of Object.entries(t)) {
    if (r === undefined) {
      delete t[e];
    }
  }
  return {
    props: t
  };
}
let c = s.Image;