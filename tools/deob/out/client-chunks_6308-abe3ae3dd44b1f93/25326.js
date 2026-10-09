function r({
  widthInt: e,
  heightInt: t,
  blurWidth: r,
  blurHeight: n,
  blurDataURL: o,
  objectFit: i
}) {
  let a = r ? r * 40 : e;
  let s = n ? n * 40 : t;
  let l = a && s ? `viewBox='0 0 ${a} ${s}'` : "";
  return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l ? "none" : i === "contain" ? "xMidYMid" : i === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
  enumerable: true,
  get: function () {
    return r;
  }
});