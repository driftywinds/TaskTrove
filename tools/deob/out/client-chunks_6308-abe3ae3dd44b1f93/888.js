var n = require(/*webcrack:missing*/"./87849.js");
var o = 0;
export function Oh() {
  n.useEffect(() => {
    let e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", e[0] ?? a());
    document.body.insertAdjacentElement("beforeend", e[1] ?? a());
    o++;
    return () => {
      if (o === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove());
      }
      o--;
    };
  }, []);
}
function a() {
  let e = document.createElement("span");
  e.setAttribute("data-radix-focus-guard", "");
  e.tabIndex = 0;
  e.style.outline = "none";
  e.style.opacity = "0";
  e.style.position = "fixed";
  e.style.pointerEvents = "none";
  return e;
}