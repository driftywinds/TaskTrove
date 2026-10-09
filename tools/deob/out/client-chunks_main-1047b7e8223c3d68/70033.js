Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return s;
  },
  isEqualNode: function () {
    return i;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./73585.js");
function i(e, t) {
  if (e instanceof HTMLElement && t instanceof HTMLElement) {
    let r = t.getAttribute("nonce");
    if (r && !e.getAttribute("nonce")) {
      let n = t.cloneNode(true);
      n.setAttribute("nonce", "");
      n.nonce = r;
      return r === e.nonce && e.isEqualNode(n);
    }
  }
  return e.isEqualNode(t);
}
function s() {
  return {
    mountedInstances: new Set(),
    updateHead: e => {
      let t = {};
      e.forEach(e => {
        if (e.type === "link" && e.props["data-optimized-fonts"]) {
          if (document.querySelector(`style[data-href="${e.props["data-href"]}"]`)) {
            return;
          } else {
            e.props.href = e.props["data-href"];
            e.props["data-href"] = undefined;
          }
        }
        let r = t[e.type] || [];
        r.push(e);
        t[e.type] = r;
      });
      let r = t.title ? t.title[0] : null;
      let n = "";
      if (r) {
        let {
          children: e
        } = r.props;
        n = typeof e == "string" ? e : Array.isArray(e) ? e.join("") : "";
      }
      if (n !== document.title) {
        document.title = n;
      }
      ["meta", "base", "link", "style", "script"].forEach(e => {
        (function (e, t) {
          let r = document.querySelector("head");
          if (!r) {
            return;
          }
          let n = new Set(r.querySelectorAll(`${e}[data-next-head]`));
          if (e === "meta") {
            let e = r.querySelector("meta[charset]");
            if (e !== null) {
              n.add(e);
            }
          }
          let a = [];
          for (let e = 0; e < t.length; e++) {
            let r = function ({
              type: e,
              props: t
            }) {
              let r = document.createElement(e);
              (0, o.setAttributesFromProps)(r, t);
              let {
                children: n,
                dangerouslySetInnerHTML: a
              } = t;
              if (a) {
                r.innerHTML = a.__html || "";
              } else if (n) {
                r.textContent = typeof n == "string" ? n : Array.isArray(n) ? n.join("") : "";
              }
              return r;
            }(t[e]);
            r.setAttribute("data-next-head", "");
            let s = true;
            for (let e of n) {
              if (i(e, r)) {
                n.delete(e);
                s = false;
                break;
              }
            }
            if (s) {
              a.push(r);
            }
          }
          for (let e of n) {
            e.parentNode?.removeChild(e);
          }
          for (let e of a) {
            if (e.tagName.toLowerCase() === "meta" && e.getAttribute("charset") !== null) {
              r.prepend(e);
            }
            r.appendChild(e);
          }
        })(e, t[e] || []);
      });
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