Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  setCacheBustingSearchParam: function () {
    return o;
  },
  setCacheBustingSearchParamWithHash: function () {
    return i;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./32100.js");
let l = require("./16331.js");
let o = (e, t) => {
  i(e, (0, a.computeCacheBustingSearchParam)(t[l.NEXT_ROUTER_PREFETCH_HEADER], t[l.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], t[l.NEXT_ROUTER_STATE_TREE_HEADER], t[l.NEXT_URL]));
};
let i = (e, t) => {
  let r = e.search;
  let n = (r.startsWith("?") ? r.slice(1) : r).split("&").filter(e => e && !e.startsWith(`${l.NEXT_RSC_UNION_QUERY}=`));
  if (t.length > 0) {
    n.push(`${l.NEXT_RSC_UNION_QUERY}=${t}`);
  } else {
    n.push(`${l.NEXT_RSC_UNION_QUERY}`);
  }
  e.search = n.length ? `?${n.join("&")}` : "";
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}