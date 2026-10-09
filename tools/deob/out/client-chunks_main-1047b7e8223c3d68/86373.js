Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  VALID_LOADERS: function () {
    return a;
  },
  imageConfigDefault: function () {
    return o;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = ["default", "imgix", "cloudinary", "akamai", "custom"];
let o = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [32, 48, 64, 96, 128, 256, 384],
  path: "/_next/image",
  loader: "default",
  loaderFile: "",
  domains: [],
  disableStaticImages: false,
  minimumCacheTTL: 14400,
  formats: ["image/webp"],
  maximumRedirects: 3,
  dangerouslyAllowLocalIP: false,
  dangerouslyAllowSVG: false,
  contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
  contentDispositionType: "attachment",
  localPatterns: undefined,
  remotePatterns: [],
  qualities: [75],
  unoptimized: false
};