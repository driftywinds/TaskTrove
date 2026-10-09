Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "appBootstrap", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./62393.js");
let u = require("./26880.js");
function a(e) {
  var t;
  var r;
  let a = (0, n.getAssetPrefix)();
  t = self.__next_s;
  r = () => {
    e(a);
  };
  if (t && t.length) {
    t.reduce((e, [t, r]) => e.then(() => new Promise((e, n) => {
      let a = document.createElement("script");
      if (r) {
        (0, u.setAttributesFromProps)(a, r);
      }
      if (t) {
        a.src = t;
        a.onload = () => e();
        a.onerror = n;
      } else if (r) {
        a.innerHTML = r.children;
        setTimeout(e);
      }
      document.head.appendChild(a);
    })), Promise.resolve()).catch(e => {
      console.error(e);
    }).then(() => {
      r();
    });
  } else {
    r();
  }
}
window.next = {
  version: "16.0.10",
  appDir: true
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}