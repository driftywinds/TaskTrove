Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return _;
  },
  defaultHead: function () {
    return f;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./34007.js");
let i = require("./26908.js");
let s = require(/*webcrack:missing*/"./62021.js");
let u = i._(require(/*webcrack:missing*/"./74361.js"));
let l = o._(require("./16710.js"));
let c = require("./5745.js");
function f() {
  return [<meta charSet="utf-8" key="charset" />, <meta name="viewport" content="width=device-width" key="viewport" />];
}
function d(e, t) {
  if (typeof t == "string" || typeof t == "number") {
    return e;
  } else if (t.type === u.default.Fragment) {
    return e.concat(u.default.Children.toArray(t.props.children).reduce((e, t) => typeof t == "string" || typeof t == "number" ? e : e.concat(t), []));
  } else {
    return e.concat(t);
  }
}
require("./81533.js");
let p = ["name", "httpEquiv", "charSet", "itemProp"];
function h(e) {
  let t;
  let r;
  let n;
  let a;
  return e.reduce(d, []).reverse().concat(f().reverse()).filter((t = new Set(), r = new Set(), n = new Set(), a = {}, e => {
    let o = true;
    let i = false;
    if (e.key && typeof e.key != "number" && e.key.indexOf("$") > 0) {
      i = true;
      let r = e.key.slice(e.key.indexOf("$") + 1);
      if (t.has(r)) {
        o = false;
      } else {
        t.add(r);
      }
    }
    switch (e.type) {
      case "title":
      case "base":
        if (r.has(e.type)) {
          o = false;
        } else {
          r.add(e.type);
        }
        break;
      case "meta":
        for (let t = 0, r = p.length; t < r; t++) {
          let r = p[t];
          if (e.props.hasOwnProperty(r)) {
            if (r === "charSet") {
              if (n.has(r)) {
                o = false;
              } else {
                n.add(r);
              }
            } else {
              let t = e.props[r];
              let n = a[r] || new Set();
              if ((r !== "name" || !i) && n.has(t)) {
                o = false;
              } else {
                n.add(t);
                a[r] = n;
              }
            }
          }
        }
    }
    return o;
  })).reverse().map((e, t) => {
    let r = e.key || t;
    return u.default.cloneElement(e, {
      key: r
    });
  });
}
let _ = function ({
  children: e
}) {
  let t = (0, u.useContext)(c.HeadManagerContext);
  return <l.default reduceComponentsToState={h} headManager={t}>{e}</l.default>;
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}