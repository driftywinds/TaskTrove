let n = (e, t) => {
  switch (e) {
    case "P":
      return t.date({
        width: "short"
      });
    case "PP":
      return t.date({
        width: "medium"
      });
    case "PPP":
      return t.date({
        width: "long"
      });
    default:
      return t.date({
        width: "full"
      });
  }
};
let i = (e, t) => {
  switch (e) {
    case "p":
      return t.time({
        width: "short"
      });
    case "pp":
      return t.time({
        width: "medium"
      });
    case "ppp":
      return t.time({
        width: "long"
      });
    default:
      return t.time({
        width: "full"
      });
  }
};
let a = (e, t) => {
  let r;
  let a = e.match(/(P+)(p+)?/) || [];
  let o = a[1];
  let s = a[2];
  if (!s) {
    return n(e, t);
  }
  switch (o) {
    case "P":
      r = t.dateTime({
        width: "short"
      });
      break;
    case "PP":
      r = t.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      r = t.dateTime({
        width: "long"
      });
      break;
    default:
      r = t.dateTime({
        width: "full"
      });
  }
  return r.replace("{{date}}", n(o, t)).replace("{{time}}", i(s, t));
};
export let m = {
  p: i,
  P: a
};