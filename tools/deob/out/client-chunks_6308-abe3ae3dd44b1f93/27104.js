import * as n from /*webcrack:missing*/"./87849.js";
import * as o from "./42038.js";
import * as i from /*webcrack:missing*/"./8349.js";
export var Label = n.forwardRef((e, t) => <o.sG.label {...e} ref={t} onMouseDown={t => {
  if (!t.target.closest("button, input, select, textarea")) {
    e.onMouseDown?.(t);
    if (!t.defaultPrevented && t.detail > 1) {
      t.preventDefault();
    }
  }
}} />);
Label.displayName = "Label";
export var Root = Label;