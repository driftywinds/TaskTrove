let _n;
var o = require(/*webcrack:missing*/"./87849.js");
var i = require("./21701.js");
var a = require("./42038.js");
var s = require("./88302.js");
var l = require(/*webcrack:missing*/"./8349.js");
var u = "focusScope.autoFocusOnMount";
var c = "focusScope.autoFocusOnUnmount";
var d = {
  bubbles: false,
  cancelable: true
};
export var n = o.forwardRef((e, t) => {
  let {
    loop: r = false,
    trapped: n = false,
    onMountAutoFocus: f,
    onUnmountAutoFocus: g,
    ...y
  } = e;
  let [b, w] = o.useState(null);
  let E = (0, s.c)(f);
  let x = (0, s.c)(g);
  let S = o.useRef(null);
  let C = (0, i.s)(t, e => w(e));
  let _ = o.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  o.useEffect(() => {
    if (n) {
      let e = function (e) {
        if (_.paused || !b) {
          return;
        }
        let t = e.target;
        if (b.contains(t)) {
          S.current = t;
        } else {
          h(S.current, {
            select: true
          });
        }
      };
      let t = function (e) {
        if (_.paused || !b) {
          return;
        }
        let t = e.relatedTarget;
        if (t !== null) {
          if (!b.contains(t)) {
            h(S.current, {
              select: true
            });
          }
        }
      };
      document.addEventListener("focusin", e);
      document.addEventListener("focusout", t);
      let r = new MutationObserver(function (e) {
        if (document.activeElement === document.body) {
          for (let t of e) {
            if (t.removedNodes.length > 0) {
              h(b);
            }
          }
        }
      });
      if (b) {
        r.observe(b, {
          childList: true,
          subtree: true
        });
      }
      return () => {
        document.removeEventListener("focusin", e);
        document.removeEventListener("focusout", t);
        r.disconnect();
      };
    }
  }, [n, b, _.paused]);
  o.useEffect(() => {
    if (b) {
      v.add(_);
      let e = document.activeElement;
      if (!b.contains(e)) {
        let t = new CustomEvent(u, d);
        b.addEventListener(u, E);
        b.dispatchEvent(t);
        if (!t.defaultPrevented) {
          (function (e, {
            select: t = false
          } = {}) {
            let r = document.activeElement;
            for (let n of e) {
              h(n, {
                select: t
              });
              if (document.activeElement !== r) {
                return;
              }
            }
          })(p(b).filter(e => e.tagName !== "A"), {
            select: true
          });
          if (document.activeElement === e) {
            h(b);
          }
        }
      }
      return () => {
        b.removeEventListener(u, E);
        setTimeout(() => {
          let t = new CustomEvent(c, d);
          b.addEventListener(c, x);
          b.dispatchEvent(t);
          if (!t.defaultPrevented) {
            h(e ?? document.body, {
              select: true
            });
          }
          b.removeEventListener(c, x);
          v.remove(_);
        }, 0);
      };
    }
  }, [b, E, x, _]);
  let O = o.useCallback(e => {
    if (!r && !n || _.paused) {
      return;
    }
    let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey;
    let o = document.activeElement;
    if (t && o) {
      var i;
      let t;
      let n = e.currentTarget;
      let [a, s] = [m(t = p(i = n), i), m(t.reverse(), i)];
      if (a && s) {
        if (e.shiftKey || o !== s) {
          if (e.shiftKey && o === a) {
            e.preventDefault();
            if (r) {
              h(s, {
                select: true
              });
            }
          }
        } else {
          e.preventDefault();
          if (r) {
            h(a, {
              select: true
            });
          }
        }
      } else if (o === n) {
        e.preventDefault();
      }
    }
  }, [r, n, _.paused]);
  return <a.sG.div tabIndex={-1} {...y} ref={C} onKeyDown={O} />;
});
function p(e) {
  let t = [];
  let r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: e => {
      let t = e.tagName === "INPUT" && e.type === "hidden";
      if (e.disabled || e.hidden || t) {
        return NodeFilter.FILTER_SKIP;
      } else if (e.tabIndex >= 0) {
        return NodeFilter.FILTER_ACCEPT;
      } else {
        return NodeFilter.FILTER_SKIP;
      }
    }
  });
  while (r.nextNode()) {
    t.push(r.currentNode);
  }
  return t;
}
function m(e, t) {
  for (let r of e) {
    if (!function (e, {
      upTo: t
    }) {
      if (getComputedStyle(e).visibility === "hidden") {
        return true;
      }
      while (e && (t === undefined || e !== t)) {
        if (getComputedStyle(e).display === "none") {
          return true;
        }
        e = e.parentElement;
      }
      return false;
    }(r, {
      upTo: t
    })) {
      return r;
    }
  }
}
function h(e, {
  select: t = false
} = {}) {
  if (e && e.focus) {
    var r;
    let n = document.activeElement;
    e.focus({
      preventScroll: true
    });
    if (e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t) {
      e.select();
    }
  }
}
n.displayName = "FocusScope";
_n = [];
var v = {
  add(e) {
    let t = _n[0];
    if (e !== t) {
      t?.pause();
    }
    (_n = g(_n, e)).unshift(e);
  },
  remove(e) {
    _n = g(_n, e);
    _n[0]?.resume();
  }
};
function g(e, t) {
  let r = [...e];
  let n = r.indexOf(t);
  if (n !== -1) {
    r.splice(n, 1);
  }
  return r;
}