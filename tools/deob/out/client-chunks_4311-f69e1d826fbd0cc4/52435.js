let n = /^D+$/;
let i = /^Y+$/;
let a = ["D", "DD", "YY", "YYYY"];
export function ef(e) {
  return n.test(e);
}
export function xM(e) {
  return i.test(e);
}
export function Ss(e, t, r) {
  let n = l(e, t, r);
  console.warn(n);
  if (a.includes(e)) {
    throw RangeError(n);
  }
}
function l(e, t, r) {
  let n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}