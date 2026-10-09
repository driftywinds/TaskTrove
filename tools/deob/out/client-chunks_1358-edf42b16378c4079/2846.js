let n;
var o = require(/*webcrack:missing*/"./22814.js");
var i = require(/*webcrack:missing*/"./62759.js");
var u = require(/*webcrack:missing*/"./10327.js");
var a = require(/*webcrack:missing*/"./51547.js");
var l = require("./70015.js");
var s = require("./78730.js");
var c = require("./84783.js");
var d = require("./72133.js");
var f = require("./52126.js");
let p = (n = true, function (e, t) {
  let r = n ? function () {
    if (t) {
      let r = t.apply(e, arguments);
      t = null;
      return r;
    }
  } : function () {};
  n = false;
  return r;
})(undefined, function () {
  return p.toString().search("(((.+)+)+)+$").toString().constructor(p).search("(((.+)+)+)+$");
});
p();
export let yK = (0, a.XO)("tasksAtom", (0, o.eU)(e => e(i.cY).data ?? [], async (e, t, r) => {
  try {
    let t = e(l.Oq);
    await t.mutateAsync(r);
  } catch (t) {
    let e = {
      error: t,
      module: "tasks"
    };
    a.Rm.error(e, "Failed to update tasks in createTaskMutationAtom");
    throw t;
  }
}));
export let ls = (0, a.XO)("taskByIdAtom", (0, o.eU)(e => (0, a.Uj)(() => {
  let t = e(yK);
  let r = new Map();
  for (let e of t) {
    r.set(e.id, e);
  }
  return r;
}, "taskByIdAtom", new Map())));
export let u5 = (0, o.eU)(e => e(i.Ou).data ?? [], async (e, t, r) => {
  try {
    let t = e(s.Ks);
    await t.mutateAsync(r);
  } catch (t) {
    let e = {
      error: t,
      module: "projects"
    };
    a.Rm.error(e, "Failed to update projects");
    throw t;
  }
});
u5.debugLabel = "projectsAtom";
export let jc = (0, a.XO)("labelsAtom", (0, o.eU)(e => e(i.bO).data ?? [], async (e, t, r) => {
  try {
    let t = e(c.B);
    await t.mutateAsync(r);
  } catch (t) {
    let e = {
      error: t,
      module: "labels"
    };
    a.Rm.error(e, "Failed to update labels");
    throw t;
  }
}));
export let FU = (0, o.eU)(e => {
  let t = e(i.jL);
  if (t.data) {
    return t.data;
  }
  return u.cL;
}, async (e, t, r) => {
  try {
    let t = e(d.l);
    let i = {
      settings: r
    };
    await t.mutateAsync(i);
  } catch (e) {
    {
      let t = {
        error: e,
        module: "settings"
      };
      a.Rm.error(t, "Failed to update settings in settingsAtom");
      throw e;
    }
  }
});
FU.debugLabel = "settingsAtom";
let h = (0, o.eU)(e => e(i.$E).data ?? u.Az, async (e, t, r) => {
  try {
    let t = e(f.x0);
    await t.mutateAsync(r);
  } catch (e) {
    {
      let t = {
        error: e,
        module: "user"
      };
      a.Rm.error(t, "Failed to update user in userAtom");
      throw e;
    }
  }
});
h.debugLabel = "userAtom";
(0, a.XO)("usersAtom", (0, o.eU)(e => [e(h)]));
(0, a.XO)("userByIdAtom", (0, o.eU)(e => e(h)));