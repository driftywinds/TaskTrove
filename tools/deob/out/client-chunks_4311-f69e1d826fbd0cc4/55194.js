var n = require("./65968.js").Zq;
export var jG = function () {
  let e = [];
  let t = 0;
  let r = e => {
    e();
  };
  let i = e => {
    e();
  };
  let a = n;
  let o = n => {
    if (t) {
      e.push(n);
    } else {
      a(() => {
        r(n);
      });
    }
  };
  let s = () => {
    let t = e;
    e = [];
    if (t.length) {
      a(() => {
        i(() => {
          t.forEach(e => {
            r(e);
          });
        });
      });
    }
  };
  return {
    batch: e => {
      let r;
      t++;
      try {
        r = e();
      } finally {
        if (! --t) {
          s();
        }
      }
      return r;
    },
    batchCalls: e => (...t) => {
      o(() => {
        e(...t);
      });
    },
    schedule: o,
    setNotifyFunction: e => {
      r = e;
    },
    setBatchNotifyFunction: e => {
      i = e;
    },
    setScheduler: e => {
      a = e;
    }
  };
}();