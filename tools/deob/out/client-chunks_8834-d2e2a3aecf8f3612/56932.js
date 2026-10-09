Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  appendLayoutVaryPath: function () {
    return c;
  },
  clonePageVaryPathWithNewSearchParams: function () {
    return y;
  },
  finalizeLayoutVaryPath: function () {
    return f;
  },
  finalizeMetadataVaryPath: function () {
    return p;
  },
  finalizePageVaryPath: function () {
    return d;
  },
  getFulfilledRouteVaryPath: function () {
    return s;
  },
  getRouteVaryPath: function () {
    return i;
  },
  getSegmentVaryPathForRequest: function () {
    return h;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./35485.js");
let l = require("./54161.js");
let o = require("./49966.js");
function i(e, t, r) {
  return {
    value: e,
    parent: {
      value: t,
      parent: {
        value: r,
        parent: null
      }
    }
  };
}
function s(e, t, r, n) {
  return {
    value: e,
    parent: {
      value: t,
      parent: {
        value: n ? r : l.Fallback,
        parent: null
      }
    }
  };
}
function c(e, t) {
  return {
    value: t,
    parent: e
  };
}
function f(e, t) {
  return {
    value: e,
    parent: t
  };
}
function d(e, t, r) {
  return {
    value: e,
    parent: {
      value: t,
      parent: r
    }
  };
}
function p(e, t, r) {
  return {
    value: e + o.HEAD_REQUEST_KEY,
    parent: {
      value: t,
      parent: r
    }
  };
}
function h(e, t) {
  let r = t.varyPath;
  if (t.isPage && e !== a.FetchStrategy.Full && e !== a.FetchStrategy.PPRRuntime) {
    let e = r.parent.parent;
    return {
      value: r.value,
      parent: {
        value: l.Fallback,
        parent: e
      }
    };
  }
  return r;
}
function y(e, t) {
  let r = e.parent;
  return {
    value: e.value,
    parent: {
      value: t,
      parent: r.parent
    }
  };
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}