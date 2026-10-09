import * as n from /*webcrack:missing*/"./87849.js";
import * as o from "./50815.js";
import * as i from "./21701.js";
import * as a from "./55584.js";
import * as s from "./71446.js";
import * as l from "./22541.js";
import * as u from /*webcrack:missing*/"./8349.js";
var c = "AlertDialog";
export var [d, createAlertDialogScope] = (0, o.A)(c, [a.createDialogScope]);
var p = (0, a.createDialogScope)();
export var AlertDialog = e => {
  let {
    __scopeAlertDialog: t,
    ...r
  } = e;
  let n = p(t);
  return <a.Root {...n} {...r} modal={true} />;
};
AlertDialog.displayName = c;
export var AlertDialogTrigger = n.forwardRef((e, t) => {
  let {
    __scopeAlertDialog: r,
    ...n
  } = e;
  let o = p(r);
  return <a.Trigger {...o} {...n} ref={t} />;
});
AlertDialogTrigger.displayName = "AlertDialogTrigger";
export var AlertDialogPortal = e => {
  let {
    __scopeAlertDialog: t,
    ...r
  } = e;
  let n = p(t);
  return <a.Portal {...n} {...r} />;
};
AlertDialogPortal.displayName = "AlertDialogPortal";
export var AlertDialogOverlay = n.forwardRef((e, t) => {
  let {
    __scopeAlertDialog: r,
    ...n
  } = e;
  let o = p(r);
  return <a.Overlay {...o} {...n} ref={t} />;
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";
var y = "AlertDialogContent";
var [_Component, w] = d(y);
var E = (0, l.Dc)("AlertDialogContent");
export var AlertDialogContent = n.forwardRef((e, t) => {
  let {
    __scopeAlertDialog: r,
    children: o,
    ...l
  } = e;
  let c = p(r);
  let d = n.useRef(null);
  let f = (0, i.s)(t, d);
  let m = n.useRef(null);
  return <a.WarningProvider contentName={y} titleName={S} docsSlug="alert-dialog"><_Component scope={r} cancelRef={m}><a.Content role="alertdialog" {...c} {...l} ref={f} onOpenAutoFocus={(0, s.mK)(l.onOpenAutoFocus, e => {
        e.preventDefault();
        m.current?.focus({
          preventScroll: true
        });
      })} onPointerDownOutside={e => e.preventDefault()} onInteractOutside={e => e.preventDefault()}><E>{o}</E><R contentRef={d} /></a.Content></_Component></a.WarningProvider>;
});
AlertDialogContent.displayName = y;
var S = "AlertDialogTitle";
export var AlertDialogTitle = n.forwardRef((e, t) => {
  let {
    __scopeAlertDialog: r,
    ...n
  } = e;
  let o = p(r);
  return <a.Title {...o} {...n} ref={t} />;
});
AlertDialogTitle.displayName = S;
var _ = "AlertDialogDescription";
export var AlertDialogDescription = n.forwardRef((e, t) => {
  let {
    __scopeAlertDialog: r,
    ...n
  } = e;
  let o = p(r);
  return <a.Description {...o} {...n} ref={t} />;
});
AlertDialogDescription.displayName = _;
export var AlertDialogAction = n.forwardRef((e, t) => {
  let {
    __scopeAlertDialog: r,
    ...n
  } = e;
  let o = p(r);
  return <a.Close {...o} {...n} ref={t} />;
});
AlertDialogAction.displayName = "AlertDialogAction";
var A = "AlertDialogCancel";
export var AlertDialogCancel = n.forwardRef((e, t) => {
  let {
    __scopeAlertDialog: r,
    ...n
  } = e;
  let {
    cancelRef: o
  } = w(A, r);
  let s = p(r);
  let l = (0, i.s)(t, o);
  return <a.Close {...s} {...n} ref={l} />;
});
AlertDialogCancel.displayName = A;
var R = ({
  contentRef: e
}) => {
  let t = `\`${y}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${y}\` by passing a \`${_}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${y}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  n.useEffect(() => {
    if (!document.getElementById(e.current?.getAttribute("aria-describedby"))) {
      console.warn(t);
    }
  }, [t, e]);
  return null;
};
export var Root = AlertDialog;
export var Trigger = AlertDialogTrigger;
export var Portal = AlertDialogPortal;
export var Overlay = AlertDialogOverlay;
export var Content = AlertDialogContent;
export var Action = AlertDialogAction;
export var Cancel = AlertDialogCancel;
export var Title = AlertDialogTitle;
export var Description = AlertDialogDescription;