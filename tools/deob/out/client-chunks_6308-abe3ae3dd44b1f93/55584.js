import * as n from /*webcrack:missing*/"./87849.js";
import * as o from "./71446.js";
import * as i from "./21701.js";
import * as a from "./50815.js";
import * as s from "./32682.js";
import * as l from "./73710.js";
import * as u from "./42260.js";
import * as c from "./51521.js";
import * as d from "./56098.js";
import * as f from "./53557.js";
import * as p from "./42038.js";
import * as m from "./888.js";
import * as h from "./66270.js";
import * as v from "./26618.js";
import * as g from "./22541.js";
import * as y from /*webcrack:missing*/"./8349.js";
var b = "Dialog";
export var [w, createDialogScope] = (0, a.A)(b);
var [_Component5, S] = w(b);
export var Dialog = e => {
  let {
    __scopeDialog: t,
    children: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: u = true
  } = e;
  let c = n.useRef(null);
  let d = n.useRef(null);
  let [f, p] = (0, l.i)({
    prop: o,
    defaultProp: i ?? false,
    onChange: a,
    caller: b
  });
  return <_Component5 scope={t} triggerRef={c} contentRef={d} contentId={(0, s.B)()} titleId={(0, s.B)()} descriptionId={(0, s.B)()} open={f} onOpenChange={p} onOpenToggle={n.useCallback(() => p(e => !e), [p])} modal={u}>{r}</_Component5>;
};
Dialog.displayName = b;
var _ = "DialogTrigger";
export var DialogTrigger = n.forwardRef((e, t) => {
  let {
    __scopeDialog: r,
    ...n
  } = e;
  let a = S(_, r);
  let s = (0, i.s)(t, a.triggerRef);
  return <p.sG.button type="button" aria-haspopup="dialog" aria-expanded={a.open} aria-controls={a.contentId} data-state={H(a.open)} {...n} ref={s} onClick={(0, o.mK)(e.onClick, a.onOpenToggle)} />;
});
DialogTrigger.displayName = _;
var P = "DialogPortal";
var [A, j] = w(P, {
  forceMount: undefined
});
export var DialogPortal = e => {
  let {
    __scopeDialog: t,
    forceMount: r,
    children: o,
    container: i
  } = e;
  let a = S(P, t);
  return <A scope={t} forceMount={r}>{n.Children.map(o, e => <f.C present={r || a.open}><d.Z asChild={true} container={i}>{e}</d.Z></f.C>)}</A>;
};
DialogPortal.displayName = P;
var k = "DialogOverlay";
export var DialogOverlay = n.forwardRef((e, t) => {
  let r = j(k, e.__scopeDialog);
  let {
    forceMount: n = r.forceMount,
    ...o
  } = e;
  let i = S(k, e.__scopeDialog);
  if (i.modal) {
    return <f.C present={n || i.open}><D {...o} ref={t} /></f.C>;
  } else {
    return null;
  }
});
DialogOverlay.displayName = k;
var N = (0, g.TL)("DialogOverlay.RemoveScroll");
var D = n.forwardRef((e, t) => {
  let {
    __scopeDialog: r,
    ...n
  } = e;
  let o = S(k, r);
  return <h.A as={N} allowPinchZoom={true} shards={[o.contentRef]}><p.sG.div data-state={H(o.open)} {...n} ref={t} style={{
      pointerEvents: "auto",
      ...n.style
    }} /></h.A>;
});
var M = "DialogContent";
export var DialogContent = n.forwardRef((e, t) => {
  let r = j(M, e.__scopeDialog);
  let {
    forceMount: n = r.forceMount,
    ...o
  } = e;
  let i = S(M, e.__scopeDialog);
  return <f.C present={n || i.open}>{i.modal ? <I {...o} ref={t} /> : <$ {...o} ref={t} />}</f.C>;
});
DialogContent.displayName = M;
var I = n.forwardRef((e, t) => {
  let r = S(M, e.__scopeDialog);
  let a = n.useRef(null);
  let s = (0, i.s)(t, r.contentRef, a);
  n.useEffect(() => {
    let e = a.current;
    if (e) {
      return (0, v.Eq)(e);
    }
  }, []);
  return <U {...e} ref={s} trapFocus={r.open} disableOutsidePointerEvents={true} onCloseAutoFocus={(0, o.mK)(e.onCloseAutoFocus, e => {
    e.preventDefault();
    r.triggerRef.current?.focus();
  })} onPointerDownOutside={(0, o.mK)(e.onPointerDownOutside, e => {
    let t = e.detail.originalEvent;
    let r = t.button === 0 && t.ctrlKey === true;
    if (t.button === 2 || r) {
      e.preventDefault();
    }
  })} onFocusOutside={(0, o.mK)(e.onFocusOutside, e => e.preventDefault())} />;
});
var $ = n.forwardRef((e, t) => {
  let r = S(M, e.__scopeDialog);
  let o = n.useRef(false);
  let i = n.useRef(false);
  return <U {...e} ref={t} trapFocus={false} disableOutsidePointerEvents={false} onCloseAutoFocus={t => {
    e.onCloseAutoFocus?.(t);
    if (!t.defaultPrevented) {
      if (!o.current) {
        r.triggerRef.current?.focus();
      }
      t.preventDefault();
    }
    o.current = false;
    i.current = false;
  }} onInteractOutside={t => {
    e.onInteractOutside?.(t);
    if (!t.defaultPrevented) {
      o.current = true;
      if (t.detail.originalEvent.type === "pointerdown") {
        i.current = true;
      }
    }
    let n = t.target;
    if (r.triggerRef.current?.contains(n)) {
      t.preventDefault();
    }
    if (t.detail.originalEvent.type === "focusin" && i.current) {
      t.preventDefault();
    }
  }} />;
});
var U = n.forwardRef((e, t) => {
  let {
    __scopeDialog: r,
    trapFocus: o,
    onOpenAutoFocus: a,
    onCloseAutoFocus: s,
    ...l
  } = e;
  let d = S(M, r);
  let f = n.useRef(null);
  let p = (0, i.s)(t, f);
  (0, m.Oh)();
  return <y.Fragment><c.n asChild={true} loop={true} trapped={o} onMountAutoFocus={a} onUnmountAutoFocus={s}><u.qW role="dialog" id={d.contentId} aria-describedby={d.descriptionId} aria-labelledby={d.titleId} data-state={H(d.open)} {...l} ref={p} onDismiss={() => d.onOpenChange(false)} /></c.n><y.Fragment><Y titleId={d.titleId} /><Z contentRef={f} descriptionId={d.descriptionId} /></y.Fragment></y.Fragment>;
});
var F = "DialogTitle";
export var DialogTitle = n.forwardRef((e, t) => {
  let {
    __scopeDialog: r,
    ...n
  } = e;
  let o = S(F, r);
  return <p.sG.h2 id={o.titleId} {...n} ref={t} />;
});
DialogTitle.displayName = F;
var z = "DialogDescription";
export var DialogDescription = n.forwardRef((e, t) => {
  let {
    __scopeDialog: r,
    ...n
  } = e;
  let o = S(z, r);
  return <p.sG.p id={o.descriptionId} {...n} ref={t} />;
});
DialogDescription.displayName = z;
var q = "DialogClose";
export var DialogClose = n.forwardRef((e, t) => {
  let {
    __scopeDialog: r,
    ...n
  } = e;
  let i = S(q, r);
  return <p.sG.button type="button" {...n} ref={t} onClick={(0, o.mK)(e.onClick, () => i.onOpenChange(false))} />;
});
function H(e) {
  if (e) {
    return "open";
  } else {
    return "closed";
  }
}
DialogClose.displayName = q;
var K = "DialogTitleWarning";
export var [WarningProvider, G] = (0, a.q)(K, {
  contentName: M,
  titleName: F,
  docsSlug: "dialog"
});
var Y = ({
  titleId: e
}) => {
  let t = G(K);
  let r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  n.useEffect(() => {
    if (e) {
      if (!document.getElementById(e)) {
        console.error(r);
      }
    }
  }, [r, e]);
  return null;
};
var Z = ({
  contentRef: e,
  descriptionId: t
}) => {
  let r = G("DialogDescriptionWarning");
  let o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
  n.useEffect(() => {
    let r = e.current?.getAttribute("aria-describedby");
    if (t && r) {
      if (!document.getElementById(t)) {
        console.warn(o);
      }
    }
  }, [o, e, t]);
  return null;
};
export var Root = Dialog;
export var Trigger = DialogTrigger;
export var Portal = DialogPortal;
export var Overlay = DialogOverlay;
export var Content = DialogContent;
export var Title = DialogTitle;
export var Description = DialogDescription;
export var Close = DialogClose;