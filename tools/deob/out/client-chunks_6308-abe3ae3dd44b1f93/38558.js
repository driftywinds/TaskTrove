Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return h;
  },
  defaultHead: function () {
    return d;
  }
};
for (var o in n) {
  Object.defineProperty(exports, o, {
    enumerable: true,
    get: n[o]
  });
}
let i = require(/*webcrack:missing*/"./21634.js");
let a = require(/*webcrack:missing*/"./38035.js");
let s = require(/*webcrack:missing*/"./8349.js");
let l = a._(require(/*webcrack:missing*/"./87849.js"));
let u = i._(require("./87427.js"));
let c = require(/*webcrack:missing*/"./33480.js");
function d() {
  return [<meta charSet="utf-8" key="charset" />, <meta name="viewport" content="width=device-width" key="viewport" />];
}
function f(e, t) {
  if (typeof t == "string" || typeof t == "number") {
    return e;
  } else if (t.type === l.default.Fragment) {
    return e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => typeof t == "string" || typeof t == "number" ? e : e.concat(t), []));
  } else {
    return e.concat(t);
  }
}
require(/*webcrack:missing*/"./44692.js");
let p = ["name", "httpEquiv", "charSet", "itemProp"];
function m(e) {
  let t;
  let r;
  let n;
  let o;
  return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set(), r = new Set(), n = new Set(), o = {}, e => {
    let i = true;
    let a = false;
    if (e.key && typeof e.key != "number" && e.key.indexOf("$") > 0) {
      a = true;
      let r = e.key.slice(e.key.indexOf("$") + 1);
      if (t.has(r)) {
        i = false;
      } else {
        t.add(r);
      }
    }
    switch (e.type) {
      case "title":
      case "base":
        if (r.has(e.type)) {
          i = false;
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
                i = false;
              } else {
                n.add(r);
              }
            } else {
              let t = e.props[r];
              let n = o[r] || new Set();
              if ((r !== "name" || !a) && n.has(t)) {
                i = false;
              } else {
                n.add(t);
                o[r] = n;
              }
            }
          }
        }
    }
    return i;
  })).reverse().map((e, t) => {
    let r = e.key || t;
    return l.default.cloneElement(e, {
      key: r
    });
  });
}
let h = function ({
  children: e
}) {
  let t = (0, l.useContext)(c.HeadManagerContext);
  return <u.default reduceComponentsToState={m} headManager={t}>{e}</u.default>;
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}