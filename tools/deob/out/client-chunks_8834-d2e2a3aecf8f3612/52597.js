Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  METADATA_BOUNDARY_NAME: function () {
    return u;
  },
  OUTLET_BOUNDARY_NAME: function () {
    return l;
  },
  ROOT_LAYOUT_BOUNDARY_NAME: function () {
    return o;
  },
  VIEWPORT_BOUNDARY_NAME: function () {
    return a;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let u = "__next_metadata_boundary__";
let a = "__next_viewport_boundary__";
let l = "__next_outlet_boundary__";
let o = "__next_root_layout_boundary__";