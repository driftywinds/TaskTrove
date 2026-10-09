var n = new WeakMap();
var o = new WeakMap();
var i = {};
var a = 0;
function s(e) {
  return e && (e.host || s(e.parentNode));
}
function l(e, t, r, l) {
  var u = (Array.isArray(e) ? e : [e]).map(function (e) {
    if (t.contains(e)) {
      return e;
    }
    var r = s(e);
    if (r && t.contains(r)) {
      return r;
    } else {
      console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing");
      return null;
    }
  }).filter(function (e) {
    return !!e;
  });
  i[r] ||= new WeakMap();
  var c = i[r];
  var d = [];
  var f = new Set();
  var p = new Set(u);
  function m(e) {
    if (!!e && !f.has(e)) {
      f.add(e);
      m(e.parentNode);
    }
  }
  u.forEach(m);
  function h(e) {
    if (!!e && !p.has(e)) {
      Array.prototype.forEach.call(e.children, function (e) {
        if (f.has(e)) {
          h(e);
        } else {
          try {
            var t = e.getAttribute(l);
            var i = t !== null && t !== "false";
            var a = (n.get(e) || 0) + 1;
            var s = (c.get(e) || 0) + 1;
            n.set(e, a);
            c.set(e, s);
            d.push(e);
            if (a === 1 && i) {
              o.set(e, true);
            }
            if (s === 1) {
              e.setAttribute(r, "true");
            }
            if (!i) {
              e.setAttribute(l, "true");
            }
          } catch (t) {
            console.error("aria-hidden: cannot operate on ", e, t);
          }
        }
      });
    }
  }
  h(t);
  f.clear();
  a++;
  return function () {
    d.forEach(function (e) {
      var t = n.get(e) - 1;
      var i = c.get(e) - 1;
      n.set(e, t);
      c.set(e, i);
      if (!t) {
        if (!o.has(e)) {
          e.removeAttribute(l);
        }
        o.delete(e);
      }
      if (!i) {
        e.removeAttribute(r);
      }
    });
    if (! --a) {
      n = new WeakMap();
      n = new WeakMap();
      o = new WeakMap();
      i = {};
    }
  };
}
export function Eq(e, t, r = "data-aria-hidden") {
  var n = Array.from(Array.isArray(e) ? e : [e]);
  var o = t || (typeof document == "undefined" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
  if (o) {
    n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script")));
    return l(n, o, r, "aria-hidden");
  } else {
    return function () {
      return null;
    };
  }
}