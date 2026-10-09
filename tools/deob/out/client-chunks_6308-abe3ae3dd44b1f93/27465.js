var n = require(/*webcrack:missing*/"./8349.js");
var o = require(/*webcrack:missing*/"./87849.js");
class i extends Error {
  constructor(e, t) {
    if (e instanceof Error) {
      super(undefined, {
        cause: {
          err: e,
          ...e.cause,
          ...t
        }
      });
    } else if (typeof e == "string") {
      if (t instanceof Error) {
        t = {
          err: t,
          ...t.cause
        };
      }
      super(e, t);
    } else {
      super(undefined, e);
    }
    this.name = this.constructor.name;
    this.type = this.constructor.type ?? "AuthError";
    this.kind = this.constructor.kind ?? "error";
    Error.captureStackTrace?.(this, this.constructor);
    const r = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
    this.message += `${this.message ? ". " : ""}Read more at ${r}`;
  }
}
class a extends i {}
a.kind = "signIn";
class s extends i {}
s.type = "AdapterError";
class l extends i {}
l.type = "AccessDenied";
class u extends i {}
u.type = "CallbackRouteError";
class c extends i {}
c.type = "ErrorPageLoop";
class d extends i {}
d.type = "EventError";
class f extends i {}
f.type = "InvalidCallbackUrl";
class p extends a {
  constructor() {
    super(...arguments);
    this.code = "credentials";
  }
}
p.type = "CredentialsSignin";
class m extends i {}
m.type = "InvalidEndpoints";
class h extends i {}
h.type = "InvalidCheck";
class v extends i {}
v.type = "JWTSessionError";
class g extends i {}
g.type = "MissingAdapter";
class y extends i {}
y.type = "MissingAdapterMethods";
class b extends i {}
b.type = "MissingAuthorize";
class w extends i {}
w.type = "MissingSecret";
class E extends a {}
E.type = "OAuthAccountNotLinked";
class x extends a {}
x.type = "OAuthCallbackError";
class S extends i {}
S.type = "OAuthProfileParseError";
class C extends i {}
C.type = "SessionTokenError";
class _ extends a {}
_.type = "OAuthSignInError";
class O extends a {}
O.type = "EmailSignInError";
class P extends i {}
P.type = "SignOutError";
class A extends i {}
A.type = "UnknownAction";
class j extends i {}
j.type = "UnsupportedStrategy";
class R extends i {}
R.type = "InvalidProvider";
class k extends i {}
k.type = "UntrustedHost";
class T extends i {}
T.type = "Verification";
class N extends a {}
N.type = "MissingCSRF";
class D extends i {}
D.type = "DuplicateConditionalUI";
class M extends i {}
M.type = "MissingWebAuthnAutocomplete";
class L extends i {}
L.type = "WebAuthnVerificationError";
class I extends a {}
I.type = "AccountNotLinked";
class $ extends i {}
$.type = "ExperimentalFeatureNotEnabled";
class U extends i {}
class F extends i {}
async function W(e, t, r, n = {}) {
  let o = `${z(t)}/${e}`;
  try {
    let e = {
      headers: {
        "Content-Type": "application/json",
        ...(n?.headers?.cookie ? {
          cookie: n.headers.cookie
        } : {})
      }
    };
    if (n?.body) {
      e.body = JSON.stringify(n.body);
      e.method = "POST";
    }
    let t = await fetch(o, e);
    let r = await t.json();
    if (!t.ok) {
      throw r;
    }
    return r;
  } catch (e) {
    r.error(new U(e.message, e));
    return null;
  }
}
function z(e) {
  if (typeof window == "undefined") {
    return `${e.baseUrlServer}${e.basePathServer}`;
  } else {
    return e.basePath;
  }
}
function B() {
  return Math.floor(Date.now() / 1000);
}
function q(e) {
  let t = new URL("http://localhost:3000/api/auth");
  if (e && !e.startsWith("http")) {
    e = `https://${e}`;
  }
  let r = new URL(e || t);
  let n = (r.pathname === "/" ? t.pathname : r.pathname).replace(/\/$/, "");
  let o = `${r.origin}${n}`;
  return {
    origin: r.origin,
    host: r.host,
    path: n,
    base: o,
    toString: () => o
  };
}
var X = require(/*webcrack:missing*/"./37811.js");
let H = {
  baseUrl: q(X.env.NEXTAUTH_URL ?? X.env.VERCEL_URL).origin,
  basePath: q(X.env.NEXTAUTH_URL).path,
  baseUrlServer: q(X.env.NEXTAUTH_URL_INTERNAL ?? X.env.NEXTAUTH_URL ?? X.env.VERCEL_URL).origin,
  basePathServer: q(X.env.NEXTAUTH_URL_INTERNAL ?? X.env.NEXTAUTH_URL).path,
  _lastSync: 0,
  _session: undefined,
  _getSession: () => {}
};
let K = null;
function V() {
  if (typeof BroadcastChannel == "undefined") {
    return {
      postMessage: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      name: "next-auth",
      onmessage: null,
      onmessageerror: null,
      close: () => {},
      dispatchEvent: () => false
    };
  } else {
    return new BroadcastChannel("next-auth");
  }
}
function G() {
  if (K === null) {
    K = V();
  }
  return K;
}
let Y = {
  debug: console.debug,
  error: console.error,
  warn: console.warn
};
let Z = o.createContext?.(undefined);
export function wV(e) {
  if (!Z) {
    throw Error("React Context is unavailable in Server Components");
  }
  let t = o.useContext(Z);
  let {
    required: r,
    onUnauthenticated: n
  } = e ?? {};
  let i = r && t.status === "unauthenticated";
  o.useEffect(() => {
    if (i) {
      let e = `${H.basePath}/signin?${new URLSearchParams({
        error: "SessionRequired",
        callbackUrl: window.location.href
      })}`;
      if (n) {
        n();
      } else {
        window.location.href = e;
      }
    }
  }, [i, n]);
  if (i) {
    return {
      data: t.data,
      update: t.update,
      status: "loading"
    };
  } else {
    return t;
  }
}
async function Q(e) {
  let t = await W("session", H, Y, e);
  if (e?.broadcast ?? true) {
    V().postMessage({
      event: "session",
      data: {
        trigger: "getSession"
      }
    });
  }
  return t;
}
async function ee() {
  let e = await W("csrf", H, Y);
  return e?.csrfToken ?? "";
}
async function et() {
  return W("providers", H, Y);
}
export async function Jv(e, t, r) {
  let {
    callbackUrl: n,
    ...o
  } = t ?? {};
  let {
    redirect: i = true,
    redirectTo: a = n ?? window.location.href,
    ...s
  } = o;
  let l = z(H);
  let u = await et();
  if (!u) {
    let e = `${l}/error`;
    window.location.href = e;
    return;
  }
  if (!e || !u[e]) {
    let e = `${l}/signin?${new URLSearchParams({
      callbackUrl: a
    })}`;
    window.location.href = e;
    return;
  }
  let c = u[e].type;
  if (c === "webauthn") {
    throw TypeError(`Provider id "${e}" refers to a WebAuthn provider.
Please use \`import { signIn } from "next-auth/webauthn"\` instead.`);
  }
  let d = `${l}/${c === "credentials" ? "callback" : "signin"}/${e}`;
  let f = await ee();
  let p = await fetch(`${d}?${new URLSearchParams(r)}`, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Auth-Return-Redirect": "1"
    },
    body: new URLSearchParams({
      ...s,
      csrfToken: f,
      callbackUrl: a
    })
  });
  let m = await p.json();
  if (i) {
    let e = m.url ?? a;
    window.location.href = e;
    if (e.includes("#")) {
      window.location.reload();
    }
    return;
  }
  let h = new URL(m.url).searchParams.get("error") ?? undefined;
  let v = new URL(m.url).searchParams.get("code") ?? undefined;
  if (p.ok) {
    await H._getSession({
      event: "storage"
    });
  }
  return {
    error: h,
    code: v,
    status: p.status,
    ok: p.ok,
    url: h ? null : m.url
  };
}
export async function CI(e) {
  let {
    redirect: t = true,
    redirectTo: r = e?.callbackUrl ?? window.location.href
  } = e ?? {};
  let n = z(H);
  let o = await ee();
  let i = await fetch(`${n}/signout`, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Auth-Return-Redirect": "1"
    },
    body: new URLSearchParams({
      csrfToken: o,
      callbackUrl: r
    })
  });
  let a = await i.json();
  G().postMessage({
    event: "session",
    data: {
      trigger: "signout"
    }
  });
  if (t) {
    let e = a.url ?? r;
    window.location.href = e;
    if (e.includes("#")) {
      window.location.reload();
    }
    return;
  }
  await H._getSession({
    event: "storage"
  });
  return a;
}
export function CP(e) {
  if (!Z) {
    throw Error("React Context is unavailable in Server Components");
  }
  let {
    children: t,
    basePath: r,
    refetchInterval: i,
    refetchWhenOffline: a
  } = e;
  if (r) {
    H.basePath = r;
  }
  let s = e.session !== undefined;
  H._lastSync = s ? B() : 0;
  let [l, u] = o.useState(() => {
    if (s) {
      H._session = e.session;
    }
    return e.session;
  });
  let [c, d] = o.useState(!s);
  o.useEffect(() => {
    H._getSession = async ({
      event: e
    } = {}) => {
      try {
        let t = e === "storage";
        if (t || H._session === undefined) {
          H._lastSync = B();
          H._session = await Q({
            broadcast: !t
          });
          u(H._session);
          return;
        }
        if (!e || H._session === null || B() < H._lastSync) {
          return;
        }
        H._lastSync = B();
        H._session = await Q();
        u(H._session);
      } catch (e) {
        Y.error(new F(e.message, e));
      } finally {
        d(false);
      }
    };
    H._getSession();
    return () => {
      H._lastSync = 0;
      H._session = undefined;
      H._getSession = () => {};
    };
  }, []);
  o.useEffect(() => {
    let e = () => H._getSession({
      event: "storage"
    });
    G().addEventListener("message", e);
    return () => G().removeEventListener("message", e);
  }, []);
  o.useEffect(() => {
    let {
      refetchOnWindowFocus: t = true
    } = e;
    let r = () => {
      if (t && document.visibilityState === "visible") {
        H._getSession({
          event: "visibilitychange"
        });
      }
    };
    document.addEventListener("visibilitychange", r, false);
    return () => document.removeEventListener("visibilitychange", r, false);
  }, [e.refetchOnWindowFocus]);
  let f = function () {
    let [e, t] = o.useState(typeof navigator != "undefined" && navigator.onLine);
    let r = () => t(true);
    let n = () => t(false);
    o.useEffect(() => {
      window.addEventListener("online", r);
      window.addEventListener("offline", n);
      return () => {
        window.removeEventListener("online", r);
        window.removeEventListener("offline", n);
      };
    }, []);
    return e;
  }();
  let p = a !== false || f;
  o.useEffect(() => {
    if (i && p) {
      let e = setInterval(() => {
        if (H._session) {
          H._getSession({
            event: "poll"
          });
        }
      }, i * 1000);
      return () => clearInterval(e);
    }
  }, [i, p]);
  let m = o.useMemo(() => ({
    data: l,
    status: c ? "loading" : l ? "authenticated" : "unauthenticated",
    async update(e) {
      if (c) {
        return;
      }
      d(true);
      let t = await W("session", H, Y, e === undefined ? undefined : {
        body: {
          csrfToken: await ee(),
          data: e
        }
      });
      d(false);
      if (t) {
        u(t);
        G().postMessage({
          event: "session",
          data: {
            trigger: "getSession"
          }
        });
      }
      return t;
    }
  }), [l, c]);
  return <Z.Provider value={m}>{t}</Z.Provider>;
}