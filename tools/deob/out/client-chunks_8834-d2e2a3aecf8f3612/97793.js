Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
  enumerable: true,
  get: function () {
    return n;
  }
});
class r extends Error {
  constructor() {
    super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
  }
}
class n extends URLSearchParams {
  append() {
    throw new r();
  }
  delete() {
    throw new r();
  }
  set() {
    throw new r();
  }
  sort() {
    throw new r();
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}