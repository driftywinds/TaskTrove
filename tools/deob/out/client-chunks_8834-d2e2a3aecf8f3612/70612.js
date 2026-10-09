Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  MetadataBoundary: function () {
    return o;
  },
  OutletBoundary: function () {
    return s;
  },
  RootLayoutBoundary: function () {
    return c;
  },
  ViewportBoundary: function () {
    return i;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./52597.js");
let l = {
  [a.METADATA_BOUNDARY_NAME]: function ({
    children: e
  }) {
    return e;
  },
  [a.VIEWPORT_BOUNDARY_NAME]: function ({
    children: e
  }) {
    return e;
  },
  [a.OUTLET_BOUNDARY_NAME]: function ({
    children: e
  }) {
    return e;
  },
  [a.ROOT_LAYOUT_BOUNDARY_NAME]: function ({
    children: e
  }) {
    return e;
  }
};
let o = l[a.METADATA_BOUNDARY_NAME.slice(0)];
let i = l[a.VIEWPORT_BOUNDARY_NAME.slice(0)];
let s = l[a.OUTLET_BOUNDARY_NAME.slice(0)];
let c = l[a.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];