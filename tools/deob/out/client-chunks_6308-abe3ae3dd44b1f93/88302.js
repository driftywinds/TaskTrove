var n = require(/*webcrack:missing*/"./87849.js");
export function c(e) {
  let t = n.useRef(e);
  n.useEffect(() => {
    t.current = e;
  });
  return n.useMemo(() => (...e) => t.current?.(...e), []);
}