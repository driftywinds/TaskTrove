Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require("./71177.js");
function o({
  config: e,
  src: t,
  width: r,
  quality: o
}) {
  if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && e.localPatterns[0].pathname === "**" && e.localPatterns[0].search === "") {
    throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
      value: "E871",
      enumerable: false,
      configurable: true
    });
  }
  let i = (0, n.findClosestQuality)(o, e);
  return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${i}${t.startsWith("/_next/static/media/"), ""}`;
}
o.__next_img_default = true;
let i = o;