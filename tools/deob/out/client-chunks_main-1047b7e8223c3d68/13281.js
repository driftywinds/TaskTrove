Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  getSortedRouteObjects: function () {
    return i;
  },
  getSortedRoutes: function () {
    return o;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
class a {
  insert(e) {
    this._insert(e.split("/").filter(Boolean), [], false);
  }
  smoosh() {
    return this._smoosh();
  }
  _smoosh(e = "/") {
    let t = [...this.children.keys()].sort();
    if (this.slugName !== null) {
      t.splice(t.indexOf("[]"), 1);
    }
    if (this.restSlugName !== null) {
      t.splice(t.indexOf("[...]"), 1);
    }
    if (this.optionalRestSlugName !== null) {
      t.splice(t.indexOf("[[...]]"), 1);
    }
    let r = t.map(t => this.children.get(t)._smoosh(`${e}${t}/`)).reduce((e, t) => [...e, ...t], []);
    if (this.slugName !== null) {
      r.push(...this.children.get("[]")._smoosh(`${e}[${this.slugName}]/`));
    }
    if (!this.placeholder) {
      let t = e === "/" ? "/" : e.slice(0, -1);
      if (this.optionalRestSlugName != null) {
        throw Object.defineProperty(Error(`You cannot define a route with the same specificity as a optional catch-all route ("${t}" and "${t}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
          value: "E458",
          enumerable: false,
          configurable: true
        });
      }
      r.unshift(t);
    }
    if (this.restSlugName !== null) {
      r.push(...this.children.get("[...]")._smoosh(`${e}[...${this.restSlugName}]/`));
    }
    if (this.optionalRestSlugName !== null) {
      r.push(...this.children.get("[[...]]")._smoosh(`${e}[[...${this.optionalRestSlugName}]]/`));
    }
    return r;
  }
  _insert(e, t, r) {
    if (e.length === 0) {
      this.placeholder = false;
      return;
    }
    if (r) {
      throw Object.defineProperty(Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
        value: "E392",
        enumerable: false,
        configurable: true
      });
    }
    let n = e[0];
    if (n.startsWith("[") && n.endsWith("]")) {
      let a = n.slice(1, -1);
      let i = false;
      if (a.startsWith("[") && a.endsWith("]")) {
        a = a.slice(1, -1);
        i = true;
      }
      if (a.startsWith("…")) {
        throw Object.defineProperty(Error(`Detected a three-dot character ('…') at ('${a}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
          value: "E147",
          enumerable: false,
          configurable: true
        });
      }
      if (a.startsWith("...")) {
        a = a.substring(3);
        r = true;
      }
      if (a.startsWith("[") || a.endsWith("]")) {
        throw Object.defineProperty(Error(`Segment names may not start or end with extra brackets ('${a}').`), "__NEXT_ERROR_CODE", {
          value: "E421",
          enumerable: false,
          configurable: true
        });
      }
      if (a.startsWith(".")) {
        throw Object.defineProperty(Error(`Segment names may not start with erroneous periods ('${a}').`), "__NEXT_ERROR_CODE", {
          value: "E288",
          enumerable: false,
          configurable: true
        });
      }
      function o(e, r) {
        if (e !== null && e !== r) {
          throw Object.defineProperty(Error(`You cannot use different slug names for the same dynamic path ('${e}' !== '${r}').`), "__NEXT_ERROR_CODE", {
            value: "E337",
            enumerable: false,
            configurable: true
          });
        }
        t.forEach(e => {
          if (e === r) {
            throw Object.defineProperty(Error(`You cannot have the same slug name "${r}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
              value: "E247",
              enumerable: false,
              configurable: true
            });
          }
          if (e.replace(/\W/g, "") === n.replace(/\W/g, "")) {
            throw Object.defineProperty(Error(`You cannot have the slug names "${e}" and "${r}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
              value: "E499",
              enumerable: false,
              configurable: true
            });
          }
        });
        t.push(r);
      }
      if (r) {
        if (i) {
          if (this.restSlugName != null) {
            throw Object.defineProperty(Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${e[0]}" ).`), "__NEXT_ERROR_CODE", {
              value: "E299",
              enumerable: false,
              configurable: true
            });
          }
          o(this.optionalRestSlugName, a);
          this.optionalRestSlugName = a;
          n = "[[...]]";
        } else {
          if (this.optionalRestSlugName != null) {
            throw Object.defineProperty(Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${e[0]}").`), "__NEXT_ERROR_CODE", {
              value: "E300",
              enumerable: false,
              configurable: true
            });
          }
          o(this.restSlugName, a);
          this.restSlugName = a;
          n = "[...]";
        }
      } else {
        if (i) {
          throw Object.defineProperty(Error(`Optional route parameters are not yet supported ("${e[0]}").`), "__NEXT_ERROR_CODE", {
            value: "E435",
            enumerable: false,
            configurable: true
          });
        }
        o(this.slugName, a);
        this.slugName = a;
        n = "[]";
      }
    }
    if (!this.children.has(n)) {
      this.children.set(n, new a());
    }
    this.children.get(n)._insert(e.slice(1), t, r);
  }
  constructor() {
    this.placeholder = true;
    this.children = new Map();
    this.slugName = null;
    this.restSlugName = null;
    this.optionalRestSlugName = null;
  }
}
function o(e) {
  let t = new a();
  e.forEach(e => t.insert(e));
  return t.smoosh();
}
function i(e, t) {
  let r = {};
  let n = [];
  for (let a = 0; a < e.length; a++) {
    let o = t(e[a]);
    r[o] = a;
    n[a] = o;
  }
  return o(n).map(t => e[r[t]]);
}