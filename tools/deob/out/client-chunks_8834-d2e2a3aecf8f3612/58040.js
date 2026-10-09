Object.defineProperty(exports, "__esModule", {
  value: true
});
var r;
var n = {
  ACTION_HMR_REFRESH: function () {
    return s;
  },
  ACTION_NAVIGATE: function () {
    return l;
  },
  ACTION_REFRESH: function () {
    return a;
  },
  ACTION_RESTORE: function () {
    return o;
  },
  ACTION_SERVER_ACTION: function () {
    return c;
  },
  ACTION_SERVER_PATCH: function () {
    return i;
  },
  PrefetchKind: function () {
    return f;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = "refresh";
let l = "navigate";
let o = "restore";
let i = "server-patch";
let s = "hmr-refresh";
let c = "server-action";
(r = {}).AUTO = "auto";
r.FULL = "full";
r.TEMPORARY = "temporary";
var f = r;
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}