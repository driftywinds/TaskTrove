Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require(/*webcrack:missing*/"./74361.js");
let a = n.useLayoutEffect;
let o = n.useEffect;
function i(e) {
  let {
    headManager: t,
    reduceComponentsToState: r
  } = e;
  function i() {
    if (t && t.mountedInstances) {
      let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
      t.updateHead(r(e));
    }
  }
  a(() => {
    t?.mountedInstances?.add(e.children);
    return () => {
      t?.mountedInstances?.delete(e.children);
    };
  });
  a(() => {
    if (t) {
      t._pendingUpdate = i;
    }
    return () => {
      if (t) {
        t._pendingUpdate = i;
      }
    };
  });
  o(() => {
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