Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require(/*webcrack:missing*/"./87849.js");
let o = n.useLayoutEffect;
let i = n.useEffect;
function a(e) {
  let {
    headManager: t,
    reduceComponentsToState: r
  } = e;
  function a() {
    if (t && t.mountedInstances) {
      let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
      t.updateHead(r(e));
    }
  }
  o(() => {
    t?.mountedInstances?.add(e.children);
    return () => {
      t?.mountedInstances?.delete(e.children);
    };
  });
  o(() => {
    if (t) {
      t._pendingUpdate = a;
    }
    return () => {
      if (t) {
        t._pendingUpdate = a;
      }
    };
  });
  i(() => {
    if (t && t._pendingUpdate) {
      t._pendingUpdate();
      t._pendingUpdate = null;
    }
    return () => {
      if (t && t._pendingUpdate) {
        t._pendingUpdate();
        t._pendingUpdate = null;
      }
    };
  });
  return null;
}