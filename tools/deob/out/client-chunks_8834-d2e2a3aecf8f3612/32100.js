Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "computeCacheBustingSearchParam", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./75052.js");
function u(e, t, r, u) {
  if ((e === undefined || e === "0") && t === undefined && r === undefined && u === undefined) {
    return "";
  } else {
    return (0, n.hexHash)([e || "0", t || "0", r || "0", u || "0"].join(","));
  }
}