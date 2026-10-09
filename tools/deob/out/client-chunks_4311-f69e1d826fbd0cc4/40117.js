export function T() {
  let e;
  let t;
  let r = new Promise((r, n) => {
    e = r;
    t = n;
  });
  function n(e) {
    Object.assign(r, e);
    delete r.resolve;
    delete r.reject;
  }
  r.status = "pending";
  r.catch(() => {});
  r.resolve = t => {
    n({
      status: "fulfilled",
      value: t
    });
    e(t);
  };
  r.reject = e => {
    n({
      status: "rejected",
      reason: e
    });
    t(e);
  };
  return r;
}