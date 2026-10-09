let n = "-";
let i = e => {
  let t = u(e);
  let {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: i
  } = e;
  return {
    getClassGroupId: e => {
      let r = e.split(n);
      if (r[0] === "" && r.length !== 1) {
        r.shift();
      }
      return a(r, t) || s(e);
    },
    getConflictingClassGroupIds: (e, t) => {
      let n = r[e] || [];
      if (t && i[e]) {
        return [...n, ...i[e]];
      } else {
        return n;
      }
    }
  };
};
let a = (e, t) => {
  if (e.length === 0) {
    return t.classGroupId;
  }
  let r = e[0];
  let i = t.nextPart.get(r);
  let o = i ? a(e.slice(1), i) : undefined;
  if (o) {
    return o;
  }
  if (t.validators.length === 0) {
    return;
  }
  let s = e.join(n);
  return t.validators.find(({
    validator: e
  }) => e(s))?.classGroupId;
};
let o = /^\[(.+)\]$/;
let s = e => {
  if (o.test(e)) {
    let t = o.exec(e)[1];
    let r = t?.substring(0, t.indexOf(":"));
    if (r) {
      return "arbitrary.." + r;
    }
  }
};
let u = e => {
  let {
    theme: t,
    classGroups: r
  } = e;
  let n = {
    nextPart: new Map(),
    validators: []
  };
  for (let e in r) {
    l(r[e], n, e, t);
  }
  return n;
};
let l = (e, t, r, n) => {
  e.forEach(e => {
    if (typeof e == "string") {
      (e === "" ? t : c(t, e)).classGroupId = r;
      return;
    }
    if (typeof e == "function") {
      if (d(e)) {
        l(e(n), t, r, n);
      } else {
        t.validators.push({
          validator: e,
          classGroupId: r
        });
      }
    } else {
      Object.entries(e).forEach(([e, i]) => {
        l(i, c(t, e), r, n);
      });
    }
  });
};
let c = (e, t) => {
  let r = e;
  t.split(n).forEach(e => {
    if (!r.nextPart.has(e)) {
      r.nextPart.set(e, {
        nextPart: new Map(),
        validators: []
      });
    }
    r = r.nextPart.get(e);
  });
  return r;
};
let d = e => e.isThemeGetter;
let f = e => {
  if (e < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let t = 0;
  let r = new Map();
  let n = new Map();
  let i = (i, a) => {
    r.set(i, a);
    if (++t > e) {
      t = 0;
      n = r;
      r = new Map();
    }
  };
  return {
    get(e) {
      let t = r.get(e);
      if (t !== undefined) {
        return t;
      } else if ((t = n.get(e)) !== undefined) {
        i(e, t);
        return t;
      } else {
        return undefined;
      }
    },
    set(e, t) {
      if (r.has(e)) {
        r.set(e, t);
      } else {
        i(e, t);
      }
    }
  };
};
let h = "!";
let p = ":";
let m = p.length;
let y = e => {
  let {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = e => {
    let t;
    let r = [];
    let n = 0;
    let i = 0;
    let a = 0;
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      if (n === 0 && i === 0) {
        if (s === p) {
          r.push(e.slice(a, o));
          a = o + m;
          continue;
        }
        if (s === "/") {
          t = o;
          continue;
        }
      }
      if (s === "[") {
        n++;
      } else if (s === "]") {
        n--;
      } else if (s === "(") {
        i++;
      } else if (s === ")") {
        i--;
      }
    }
    let o = r.length === 0 ? e : e.substring(a);
    let s = g(o);
    return {
      modifiers: r,
      hasImportantModifier: s !== o,
      baseClassName: s,
      maybePostfixModifierPosition: t && t > a ? t - a : undefined
    };
  };
  if (t) {
    let e = t + p;
    let r = n;
    n = t => t.startsWith(e) ? r(t.substring(e.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: t,
      maybePostfixModifierPosition: undefined
    };
  }
  if (r) {
    let e = n;
    n = t => r({
      className: t,
      parseClassName: e
    });
  }
  return n;
};
let g = e => e.endsWith(h) ? e.substring(0, e.length - 1) : e.startsWith(h) ? e.substring(1) : e;
let b = e => {
  let t = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, true]));
  return e => {
    if (e.length <= 1) {
      return e;
    }
    let r = [];
    let n = [];
    e.forEach(e => {
      if (e[0] === "[" || t[e]) {
        r.push(...n.sort(), e);
        n = [];
      } else {
        n.push(e);
      }
    });
    r.push(...n.sort());
    return r;
  };
};
let v = e => ({
  cache: f(e.cacheSize),
  parseClassName: y(e),
  sortModifiers: b(e),
  ...i(e)
});
let x = /\s+/;
let w = (e, t) => {
  let {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t;
  let o = [];
  let s = e.trim().split(x);
  let u = "";
  for (let e = s.length - 1; e >= 0; e -= 1) {
    let t = s[e];
    let {
      isExternal: l,
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: p
    } = r(t);
    if (l) {
      u = t + (u.length > 0 ? " " + u : u);
      continue;
    }
    let m = !!p;
    let y = n(m ? f.substring(0, p) : f);
    if (!y) {
      if (!m || !(y = n(f))) {
        u = t + (u.length > 0 ? " " + u : u);
        continue;
      }
      m = false;
    }
    let g = a(c).join(":");
    let b = d ? g + h : g;
    let v = b + y;
    if (o.includes(v)) {
      continue;
    }
    o.push(v);
    let x = i(y, m);
    for (let e = 0; e < x.length; ++e) {
      let t = x[e];
      o.push(b + t);
    }
    u = t + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function _() {
  let e;
  let t;
  let r = 0;
  let n = "";
  while (r < arguments.length) {
    if ((e = arguments[r++]) && (t = k(e))) {
      if (n) {
        n += " ";
      }
      n += t;
    }
  }
  return n;
}
let k = e => {
  let t;
  if (typeof e == "string") {
    return e;
  }
  let r = "";
  for (let n = 0; n < e.length; n++) {
    if (e[n] && (t = k(e[n]))) {
      if (r) {
        r += " ";
      }
      r += t;
    }
  }
  return r;
};
let $ = e => {
  let t = t => t[e] || [];
  t.isThemeGetter = true;
  return t;
};
let S = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
let I = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
let O = /^\d+\/\d+$/;
let E = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
let j = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
let U = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
let T = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
let A = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
let D = e => O.test(e);
let z = e => !!e && !Number.isNaN(Number(e));
let N = e => !!e && Number.isInteger(Number(e));
let P = e => e.endsWith("%") && z(e.slice(0, -1));
let R = e => E.test(e);
let C = () => true;
let M = e => j.test(e) && !U.test(e);
let L = () => false;
let Z = e => T.test(e);
let F = e => A.test(e);
let B = e => !W(e) && !Q(e);
let q = e => ei(e, eu, L);
let W = e => S.test(e);
let Y = e => ei(e, el, M);
let G = e => ei(e, ec, z);
let H = e => ei(e, eo, L);
let J = e => ei(e, es, F);
let X = e => ei(e, ef, Z);
let Q = e => I.test(e);
let K = e => ea(e, el);
let V = e => ea(e, ed);
let ee = e => ea(e, eo);
let et = e => ea(e, eu);
let er = e => ea(e, es);
let en = e => ea(e, ef, true);
let ei = (e, t, r) => {
  let n = S.exec(e);
  return !!n && (n[1] ? t(n[1]) : r(n[2]));
};
let ea = (e, t, r = false) => {
  let n = I.exec(e);
  return !!n && (n[1] ? t(n[1]) : r);
};
let eo = e => e === "position" || e === "percentage";
let es = e => e === "image" || e === "url";
let eu = e => e === "length" || e === "size" || e === "bg-size";
let el = e => e === "length";
let ec = e => e === "number";
let ed = e => e === "family-name";
let ef = e => e === "shadow";
export let QP = function e(t, ...r) {
  let n;
  let i;
  let a;
  let o = s;
  function s(e) {
    i = (n = v(r.reduce((e, t) => t(e), t()))).cache.get;
    a = n.cache.set;
    o = u;
    return u(e);
  }
  function u(e) {
    let t = i(e);
    if (t) {
      return t;
    }
    let r = w(e, n);
    a(e, r);
    return r;
  }
  return function () {
    return o(_.apply(null, arguments));
  };
}(() => {
  let e = $("color");
  let t = $("font");
  let r = $("text");
  let n = $("font-weight");
  let i = $("tracking");
  let a = $("leading");
  let o = $("breakpoint");
  let s = $("container");
  let u = $("spacing");
  let l = $("radius");
  let c = $("shadow");
  let d = $("inset-shadow");
  let f = $("text-shadow");
  let h = $("drop-shadow");
  let p = $("blur");
  let m = $("perspective");
  let y = $("aspect");
  let g = $("ease");
  let b = $("animate");
  let v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  let x = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"];
  let w = () => [...x(), Q, W];
  let _ = () => ["auto", "hidden", "clip", "visible", "scroll"];
  let k = () => ["auto", "contain", "none"];
  let S = () => [Q, W, u];
  let I = () => [D, "full", "auto", ...S()];
  let O = () => [N, "none", "subgrid", Q, W];
  let E = () => ["auto", {
    span: ["full", N, Q, W]
  }, N, Q, W];
  let j = () => [N, "auto", Q, W];
  let U = () => ["auto", "min", "max", "fr", Q, W];
  let T = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  let A = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  let M = () => ["auto", ...S()];
  let L = () => [D, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()];
  let Z = () => [e, Q, W];
  let F = () => [...x(), ee, H, {
    position: [Q, W]
  }];
  let ei = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  let ea = () => ["auto", "cover", "contain", et, q, {
    size: [Q, W]
  }];
  let eo = () => [P, K, Y];
  let es = () => ["", "none", "full", l, Q, W];
  let eu = () => ["", z, K, Y];
  let el = () => ["solid", "dashed", "dotted", "double"];
  let ec = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  let ed = () => [z, P, ee, H];
  let ef = () => ["", "none", p, Q, W];
  let eh = () => ["none", z, Q, W];
  let ep = () => ["none", z, Q, W];
  let em = () => [z, Q, W];
  let ey = () => [D, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [R],
      breakpoint: [R],
      color: [C],
      container: [R],
      "drop-shadow": [R],
      ease: ["in", "out", "in-out"],
      font: [B],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [R],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [R],
      shadow: [R],
      spacing: ["px", z],
      text: [R],
      "text-shadow": [R],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", D, W, Q, y]
      }],
      container: ["container"],
      columns: [{
        columns: [z, W, Q, s]
      }],
      "break-after": [{
        "break-after": v()
      }],
      "break-before": [{
        "break-before": v()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      sr: ["sr-only", "not-sr-only"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: w()
      }],
      overflow: [{
        overflow: _()
      }],
      "overflow-x": [{
        "overflow-x": _()
      }],
      "overflow-y": [{
        "overflow-y": _()
      }],
      overscroll: [{
        overscroll: k()
      }],
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: I()
      }],
      "inset-x": [{
        "inset-x": I()
      }],
      "inset-y": [{
        "inset-y": I()
      }],
      start: [{
        start: I()
      }],
      end: [{
        end: I()
      }],
      top: [{
        top: I()
      }],
      right: [{
        right: I()
      }],
      bottom: [{
        bottom: I()
      }],
      left: [{
        left: I()
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: [N, "auto", Q, W]
      }],
      basis: [{
        basis: [D, "full", "auto", s, ...S()]
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      flex: [{
        flex: [z, D, "auto", "initial", "none", W]
      }],
      grow: [{
        grow: ["", z, Q, W]
      }],
      shrink: [{
        shrink: ["", z, Q, W]
      }],
      order: [{
        order: [N, "first", "last", "none", Q, W]
      }],
      "grid-cols": [{
        "grid-cols": O()
      }],
      "col-start-end": [{
        col: E()
      }],
      "col-start": [{
        "col-start": j()
      }],
      "col-end": [{
        "col-end": j()
      }],
      "grid-rows": [{
        "grid-rows": O()
      }],
      "row-start-end": [{
        row: E()
      }],
      "row-start": [{
        "row-start": j()
      }],
      "row-end": [{
        "row-end": j()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": U()
      }],
      "auto-rows": [{
        "auto-rows": U()
      }],
      gap: [{
        gap: S()
      }],
      "gap-x": [{
        "gap-x": S()
      }],
      "gap-y": [{
        "gap-y": S()
      }],
      "justify-content": [{
        justify: [...T(), "normal"]
      }],
      "justify-items": [{
        "justify-items": [...A(), "normal"]
      }],
      "justify-self": [{
        "justify-self": ["auto", ...A()]
      }],
      "align-content": [{
        content: ["normal", ...T()]
      }],
      "align-items": [{
        items: [...A(), {
          baseline: ["", "last"]
        }]
      }],
      "align-self": [{
        self: ["auto", ...A(), {
          baseline: ["", "last"]
        }]
      }],
      "place-content": [{
        "place-content": T()
      }],
      "place-items": [{
        "place-items": [...A(), "baseline"]
      }],
      "place-self": [{
        "place-self": ["auto", ...A()]
      }],
      p: [{
        p: S()
      }],
      px: [{
        px: S()
      }],
      py: [{
        py: S()
      }],
      ps: [{
        ps: S()
      }],
      pe: [{
        pe: S()
      }],
      pt: [{
        pt: S()
      }],
      pr: [{
        pr: S()
      }],
      pb: [{
        pb: S()
      }],
      pl: [{
        pl: S()
      }],
      m: [{
        m: M()
      }],
      mx: [{
        mx: M()
      }],
      my: [{
        my: M()
      }],
      ms: [{
        ms: M()
      }],
      me: [{
        me: M()
      }],
      mt: [{
        mt: M()
      }],
      mr: [{
        mr: M()
      }],
      mb: [{
        mb: M()
      }],
      ml: [{
        ml: M()
      }],
      "space-x": [{
        "space-x": S()
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": S()
      }],
      "space-y-reverse": ["space-y-reverse"],
      size: [{
        size: L()
      }],
      w: [{
        w: [s, "screen", ...L()]
      }],
      "min-w": [{
        "min-w": [s, "screen", "none", ...L()]
      }],
      "max-w": [{
        "max-w": [s, "screen", "none", "prose", {
          screen: [o]
        }, ...L()]
      }],
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      "font-size": [{
        text: ["base", r, K, Y]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: [n, Q, G]
      }],
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", P, W]
      }],
      "font-family": [{
        font: [V, W, t]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      tracking: [{
        tracking: [i, Q, W]
      }],
      "line-clamp": [{
        "line-clamp": [z, "none", Q, G]
      }],
      leading: [{
        leading: [a, ...S()]
      }],
      "list-image": [{
        "list-image": ["none", Q, W]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "list-style-type": [{
        list: ["disc", "decimal", "none", Q, W]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "placeholder-color": [{
        placeholder: Z()
      }],
      "text-color": [{
        text: Z()
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...el(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: [z, "from-font", "auto", Q, Y]
      }],
      "text-decoration-color": [{
        decoration: Z()
      }],
      "underline-offset": [{
        "underline-offset": [z, "auto", Q, W]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: S()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q, W]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", Q, W]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: F()
      }],
      "bg-repeat": [{
        bg: ei()
      }],
      "bg-size": [{
        bg: ea()
      }],
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, N, Q, W],
          radial: ["", Q, W],
          conic: [N, Q, W]
        }, er, J]
      }],
      "bg-color": [{
        bg: Z()
      }],
      "gradient-from-pos": [{
        from: eo()
      }],
      "gradient-via-pos": [{
        via: eo()
      }],
      "gradient-to-pos": [{
        to: eo()
      }],
      "gradient-from": [{
        from: Z()
      }],
      "gradient-via": [{
        via: Z()
      }],
      "gradient-to": [{
        to: Z()
      }],
      rounded: [{
        rounded: es()
      }],
      "rounded-s": [{
        "rounded-s": es()
      }],
      "rounded-e": [{
        "rounded-e": es()
      }],
      "rounded-t": [{
        "rounded-t": es()
      }],
      "rounded-r": [{
        "rounded-r": es()
      }],
      "rounded-b": [{
        "rounded-b": es()
      }],
      "rounded-l": [{
        "rounded-l": es()
      }],
      "rounded-ss": [{
        "rounded-ss": es()
      }],
      "rounded-se": [{
        "rounded-se": es()
      }],
      "rounded-ee": [{
        "rounded-ee": es()
      }],
      "rounded-es": [{
        "rounded-es": es()
      }],
      "rounded-tl": [{
        "rounded-tl": es()
      }],
      "rounded-tr": [{
        "rounded-tr": es()
      }],
      "rounded-br": [{
        "rounded-br": es()
      }],
      "rounded-bl": [{
        "rounded-bl": es()
      }],
      "border-w": [{
        border: eu()
      }],
      "border-w-x": [{
        "border-x": eu()
      }],
      "border-w-y": [{
        "border-y": eu()
      }],
      "border-w-s": [{
        "border-s": eu()
      }],
      "border-w-e": [{
        "border-e": eu()
      }],
      "border-w-t": [{
        "border-t": eu()
      }],
      "border-w-r": [{
        "border-r": eu()
      }],
      "border-w-b": [{
        "border-b": eu()
      }],
      "border-w-l": [{
        "border-l": eu()
      }],
      "divide-x": [{
        "divide-x": eu()
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": eu()
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "border-style": [{
        border: [...el(), "hidden", "none"]
      }],
      "divide-style": [{
        divide: [...el(), "hidden", "none"]
      }],
      "border-color": [{
        border: Z()
      }],
      "border-color-x": [{
        "border-x": Z()
      }],
      "border-color-y": [{
        "border-y": Z()
      }],
      "border-color-s": [{
        "border-s": Z()
      }],
      "border-color-e": [{
        "border-e": Z()
      }],
      "border-color-t": [{
        "border-t": Z()
      }],
      "border-color-r": [{
        "border-r": Z()
      }],
      "border-color-b": [{
        "border-b": Z()
      }],
      "border-color-l": [{
        "border-l": Z()
      }],
      "divide-color": [{
        divide: Z()
      }],
      "outline-style": [{
        outline: [...el(), "none", "hidden"]
      }],
      "outline-offset": [{
        "outline-offset": [z, Q, W]
      }],
      "outline-w": [{
        outline: ["", z, K, Y]
      }],
      "outline-color": [{
        outline: Z()
      }],
      shadow: [{
        shadow: ["", "none", c, en, X]
      }],
      "shadow-color": [{
        shadow: Z()
      }],
      "inset-shadow": [{
        "inset-shadow": ["none", d, en, X]
      }],
      "inset-shadow-color": [{
        "inset-shadow": Z()
      }],
      "ring-w": [{
        ring: eu()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: Z()
      }],
      "ring-offset-w": [{
        "ring-offset": [z, Y]
      }],
      "ring-offset-color": [{
        "ring-offset": Z()
      }],
      "inset-ring-w": [{
        "inset-ring": eu()
      }],
      "inset-ring-color": [{
        "inset-ring": Z()
      }],
      "text-shadow": [{
        "text-shadow": ["none", f, en, X]
      }],
      "text-shadow-color": [{
        "text-shadow": Z()
      }],
      opacity: [{
        opacity: [z, Q, W]
      }],
      "mix-blend": [{
        "mix-blend": [...ec(), "plus-darker", "plus-lighter"]
      }],
      "bg-blend": [{
        "bg-blend": ec()
      }],
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      "mask-image-linear-pos": [{
        "mask-linear": [z]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ed()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ed()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ed()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ed()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ed()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ed()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ed()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ed()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ed()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ed()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ed()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ed()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ed()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ed()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Z()
      }],
      "mask-image-radial": [{
        "mask-radial": [Q, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ed()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ed()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [z]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ed()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ed()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Z()
      }],
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      "mask-position": [{
        mask: F()
      }],
      "mask-repeat": [{
        mask: ei()
      }],
      "mask-size": [{
        mask: ea()
      }],
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      "mask-image": [{
        mask: ["none", Q, W]
      }],
      filter: [{
        filter: ["", "none", Q, W]
      }],
      blur: [{
        blur: ef()
      }],
      brightness: [{
        brightness: [z, Q, W]
      }],
      contrast: [{
        contrast: [z, Q, W]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", h, en, X]
      }],
      "drop-shadow-color": [{
        "drop-shadow": Z()
      }],
      grayscale: [{
        grayscale: ["", z, Q, W]
      }],
      "hue-rotate": [{
        "hue-rotate": [z, Q, W]
      }],
      invert: [{
        invert: ["", z, Q, W]
      }],
      saturate: [{
        saturate: [z, Q, W]
      }],
      sepia: [{
        sepia: ["", z, Q, W]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none", Q, W]
      }],
      "backdrop-blur": [{
        "backdrop-blur": ef()
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [z, Q, W]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [z, Q, W]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", z, Q, W]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [z, Q, W]
      }],
      "backdrop-invert": [{
        "backdrop-invert": ["", z, Q, W]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [z, Q, W]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [z, Q, W]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": ["", z, Q, W]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": S()
      }],
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      "border-spacing-y": [{
        "border-spacing-y": S()
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Q, W]
      }],
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      duration: [{
        duration: [z, "initial", Q, W]
      }],
      ease: [{
        ease: ["linear", "initial", g, Q, W]
      }],
      delay: [{
        delay: [z, Q, W]
      }],
      animate: [{
        animate: ["none", b, Q, W]
      }],
      backface: [{
        backface: ["hidden", "visible"]
      }],
      perspective: [{
        perspective: [m, Q, W]
      }],
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      rotate: [{
        rotate: eh()
      }],
      "rotate-x": [{
        "rotate-x": eh()
      }],
      "rotate-y": [{
        "rotate-y": eh()
      }],
      "rotate-z": [{
        "rotate-z": eh()
      }],
      scale: [{
        scale: ep()
      }],
      "scale-x": [{
        "scale-x": ep()
      }],
      "scale-y": [{
        "scale-y": ep()
      }],
      "scale-z": [{
        "scale-z": ep()
      }],
      "scale-3d": ["scale-3d"],
      skew: [{
        skew: em()
      }],
      "skew-x": [{
        "skew-x": em()
      }],
      "skew-y": [{
        "skew-y": em()
      }],
      transform: [{
        transform: [Q, W, "", "none", "gpu", "cpu"]
      }],
      "transform-origin": [{
        origin: w()
      }],
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      translate: [{
        translate: ey()
      }],
      "translate-x": [{
        "translate-x": ey()
      }],
      "translate-y": [{
        "translate-y": ey()
      }],
      "translate-z": [{
        "translate-z": ey()
      }],
      "translate-none": ["translate-none"],
      accent: [{
        accent: Z()
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      "caret-color": [{
        caret: Z()
      }],
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q, W]
      }],
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": S()
      }],
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      "scroll-my": [{
        "scroll-my": S()
      }],
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      "scroll-me": [{
        "scroll-me": S()
      }],
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      "scroll-p": [{
        "scroll-p": S()
      }],
      "scroll-px": [{
        "scroll-px": S()
      }],
      "scroll-py": [{
        "scroll-py": S()
      }],
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Q, W]
      }],
      fill: [{
        fill: ["none", ...Z()]
      }],
      "stroke-w": [{
        stroke: [z, K, Y, G]
      }],
      stroke: [{
        stroke: ["none", ...Z()]
      }],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
});