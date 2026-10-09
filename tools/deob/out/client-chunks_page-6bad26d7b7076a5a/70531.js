let n;
var o = require(/*webcrack:missing*/"./87849.js");
var u = require(/*webcrack:missing*/"./35465.js");
var s = require(/*webcrack:missing*/"./35158.js");
var a = require(/*webcrack:missing*/"./48795.js");
var i = require(/*webcrack:missing*/"./27295.js");
var f = require(/*webcrack:missing*/"./31453.js");
let c = (n = true, function (t, r) {
  {
    let e = n ? function () {
      if (r) {
        let e = r.apply(t, arguments);
        r = null;
        return e;
      }
    } : function () {};
    n = false;
    return e;
  }
})(undefined, function () {
  return c.toString().search("(((.+)+)+)+$").toString().constructor(c).search("(((.+)+)+)+$");
});
export default function l() {
  let t = (0, u.useRouter)();
  let r = (0, s.md)(a.FU);
  let e = (0, s.md)(i.n_);
  (0, o.useEffect)(() => {
    let n;
    let o = r.general.startView ?? "all";
    n = o === "lastViewed" ? (e && e !== "/" && e.startsWith("/") ? e : null) ?? f.Sg : "/" + o;
    t.push(n);
  }, [t, r, e]);
  return null;
}
c();