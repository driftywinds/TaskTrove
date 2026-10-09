Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;
var n;
var u;
var a = {
  FetchStrategy: function () {
    return s;
  },
  NavigationResultTag: function () {
    return o;
  },
  PrefetchPriority: function () {
    return i;
  }
};
for (var l in a) {
  Object.defineProperty(exports, l, {
    enumerable: true,
    get: a[l]
  });
}
(r = {})[r.MPA = 0] = "MPA";
r[r.Success = 1] = "Success";
r[r.NoOp = 2] = "NoOp";
r[r.Async = 3] = "Async";
var o = r;
(n = {})[n.Intent = 2] = "Intent";
n[n.Default = 1] = "Default";
n[n.Background = 0] = "Background";
var i = n;
(u = {})[u.LoadingBoundary = 0] = "LoadingBoundary";
u[u.PPR = 1] = "PPR";
u[u.PPRRuntime = 2] = "PPRRuntime";
u[u.Full = 3] = "Full";
var s = u;
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}