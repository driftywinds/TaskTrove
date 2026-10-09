let a;
let r = (a = true, function (e, t) {
  let i = a ? function () {
    if (t) {
      {
        let i = t.apply(e, arguments);
        t = null;
        return i;
      }
    }
  } : function () {};
  a = false;
  return i;
})(undefined, function () {
  return r.toString().search("(((.+)+)+)+$").toString().constructor(r).search("(((.+)+)+)+$");
});
r();
export let yL = "en";
export let eo = [yL, "zh", "fr", "de", "es", "nl", "ko", "ja", "it", "pt"];
export let xU = "common";
export let Ok = "i18next";
export let r$ = ["common", "dialogs", "settings", "layout", "navigation", "task", "auth"];
export function fW(e) {
  return eo.includes(e);
}