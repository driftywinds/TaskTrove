export var ZodFirstPartyTypeKind;
export var util = {
  BIGINT_FORMAT_RANGES: er,
  Class: e$,
  NUMBER_FORMAT_RANGES: et,
  aborted: ec,
  allowsEval: F,
  assert: _,
  assertEqual: b,
  assertIs: x,
  assertNever: w,
  assertNotEqual: v,
  assignProp: D,
  base64ToUint8Array: eb,
  base64urlToUint8Array: ex,
  cached: I,
  captureStackTrace: L,
  cleanEnum: eg,
  cleanRegex: E,
  clone: clone,
  cloneDef: N,
  createTransparentProxy: K,
  defineLazy: T,
  esc: M,
  escapeRegex: J,
  extend: ea,
  finalizeIssue: eh,
  floatSafeRemainder: j,
  getElementAtPath: P,
  getEnumValues: k,
  getLengthableOrigin: em,
  getParsedType: Y,
  getSizableOrigin: ep,
  hexToUint8Array: e_,
  isObject: Z,
  isPlainObject: B,
  issue: ey,
  joinValues: $,
  jsonStringifyReplacer: S,
  merge: es,
  mergeDefs: z,
  normalizeParams: Q,
  nullish: O,
  numKeys: W,
  objectClone: A,
  omit: ei,
  optionalKeys: ee,
  partial: eu,
  pick: en,
  prefixIssues: ed,
  primitiveTypes: H,
  promiseAllObject: R,
  propertyKeyTypes: G,
  randomString: C,
  required: el,
  safeExtend: eo,
  shallowClone: q,
  stringifyPrimitive: V,
  uint8ArrayToBase64: ev,
  uint8ArrayToBase64url: ew,
  uint8ArrayToHex: ek,
  unwrapMessage: ef
};
export var regexes = {
  base64: tb,
  base64url: tv,
  bigint: tj,
  boolean: tA,
  browserEmail: td,
  cidrv4: ty,
  cidrv6: tg,
  cuid: e4,
  cuid2: e2,
  date: t$,
  datetime: tO,
  domain: tw,
  duration: e7,
  e164: t_,
  email: to,
  emoji: th,
  extendedDuration: te,
  guid: tt,
  hex: tR,
  hostname: tx,
  html5Email: ts,
  idnEmail: tc,
  integer: tU,
  ipv4: tp,
  ipv6: tm,
  ksuid: e8,
  lowercase: tN,
  md5_base64: tZ,
  md5_base64url: tF,
  md5_hex: tL,
  nanoid: e9,
  null: tD,
  number: tT,
  rfc5322Email: tu,
  sha1_base64: tq,
  sha1_base64url: tW,
  sha1_hex: tB,
  sha256_base64: tG,
  sha256_base64url: tH,
  sha256_hex: tY,
  sha384_base64: tX,
  sha384_base64url: tQ,
  sha384_hex: tJ,
  sha512_base64: tV,
  sha512_base64url: t0,
  sha512_hex: tK,
  string: tE,
  time: tI,
  ulid: e3,
  undefined: tz,
  unicodeEmail: tl,
  uppercase: tP,
  uuid: tr,
  uuid4: tn,
  uuid6: ti,
  uuid7: ta,
  xid: e5
};
export var locales = {
  ar: nW,
  az: nG,
  be: nX,
  ca: nK,
  cs: n0,
  da: n6,
  de: n2,
  en: n8,
  eo: ie,
  es: ir,
  fa: ia,
  fi: is,
  fr: il,
  frCA: id,
  he: ip,
  hu: iy,
  id: ib,
  is: iw,
  it: ik,
  ja: iS,
  ka: iE,
  kh: iT,
  km: iU,
  ko: iD,
  lt: iM,
  mk: iZ,
  ms: iB,
  nl: iW,
  no: iG,
  ota: iJ,
  pl: iV,
  ps: iQ,
  pt: i1,
  ru: i2,
  sl: i5,
  sv: i9,
  ta: ae,
  th: ar,
  tr: aa,
  ua: au,
  uk: as,
  ur: ac,
  vi: af,
  yo: ab,
  zhCN: ap,
  zhTW: ay
};
var s = {};
export var core = {
  $ZodAny: r1,
  $ZodArray: r8,
  $ZodAsyncError: p,
  $ZodBase64: rL,
  $ZodBase64URL: rF,
  $ZodBigInt: rX,
  $ZodBigIntFormat: rQ,
  $ZodBoolean: rJ,
  $ZodCIDRv4: rR,
  $ZodCIDRv6: rC,
  $ZodCUID: rI,
  $ZodCUID2: rO,
  $ZodCatch: nj,
  $ZodCheck: t1,
  $ZodCheckBigIntFormat: t8,
  $ZodCheckEndsWith: rc,
  $ZodCheckGreaterThan: t2,
  $ZodCheckIncludes: ru,
  $ZodCheckLengthEquals: rn,
  $ZodCheckLessThan: t4,
  $ZodCheckLowerCase: ro,
  $ZodCheckMaxLength: rt,
  $ZodCheckMaxSize: t9,
  $ZodCheckMimeType: rh,
  $ZodCheckMinLength: rr,
  $ZodCheckMinSize: t7,
  $ZodCheckMultipleOf: t3,
  $ZodCheckNumberFormat: t5,
  $ZodCheckOverwrite: rp,
  $ZodCheckProperty: rf,
  $ZodCheckRegex: ra,
  $ZodCheckSizeEquals: re,
  $ZodCheckStartsWith: rl,
  $ZodCheckStringFormat: ri,
  $ZodCheckUpperCase: rs,
  $ZodCodec: nD,
  $ZodCustom: nF,
  $ZodCustomStringFormat: rY,
  $ZodDate: r3,
  $ZodDefault: nk,
  $ZodDiscriminatedUnion: na,
  $ZodE164: rB,
  $ZodEmail: r_,
  $ZodEmoji: r$,
  $ZodEncodeError: m,
  $ZodEnum: ny,
  $ZodError: eI,
  $ZodFile: nb,
  $ZodFunction: nM,
  $ZodGUID: rx,
  $ZodIPv4: rN,
  $ZodIPv6: rP,
  $ZodISODate: rA,
  $ZodISODateTime: rT,
  $ZodISODuration: rz,
  $ZodISOTime: rD,
  $ZodIntersection: no,
  $ZodJWT: rW,
  $ZodKSUID: rU,
  $ZodLazy: nZ,
  $ZodLiteral: ng,
  $ZodMap: nf,
  $ZodNaN: nU,
  $ZodNanoID: rS,
  $ZodNever: r4,
  $ZodNonOptional: nI,
  $ZodNull: r0,
  $ZodNullable: n_,
  $ZodNumber: rG,
  $ZodNumberFormat: rH,
  $ZodObject: nt,
  $ZodObjectJIT: nr,
  $ZodOptional: nw,
  $ZodPipe: nT,
  $ZodPrefault: nS,
  $ZodPromise: nL,
  $ZodReadonly: nP,
  $ZodRealError: eO,
  $ZodRecord: nd,
  $ZodRegistry: aw,
  $ZodSet: np,
  $ZodString: rb,
  $ZodStringFormat: rv,
  $ZodSuccess: nE,
  $ZodSymbol: rK,
  $ZodTemplateLiteral: nC,
  $ZodTransform: nv,
  $ZodTuple: nl,
  $ZodType: rg,
  $ZodULID: rE,
  $ZodURL: rk,
  $ZodUUID: rw,
  $ZodUndefined: rV,
  $ZodUnion: ni,
  $ZodUnknown: r6,
  $ZodVoid: r2,
  $ZodXID: rj,
  $brand: $brand,
  $constructor: f,
  $input: $input,
  $output: $output,
  Doc: rm,
  JSONSchema: s,
  JSONSchemaGenerator: so,
  NEVER: NEVER,
  TimePrecision: TimePrecision,
  _any: oa,
  _array: oL,
  _base64: aq,
  _base64url: aW,
  _bigint: a9,
  _boolean: a5,
  _catch: o2,
  _check: sn,
  _cidrv4: aF,
  _cidrv6: aB,
  _coercedBigint: a7,
  _coercedBoolean: a8,
  _coercedDate: oc,
  _coercedNumber: a0,
  _coercedString: aS,
  _cuid: aN,
  _cuid2: aP,
  _custom: se,
  _date: ol,
  _decode: eB,
  _decodeAsync: eG,
  _default: o1,
  _discriminatedUnion: oF,
  _e164: aY,
  _email: aI,
  _emoji: aD,
  _encode: eZ,
  _encodeAsync: eW,
  _endsWith: endsWith,
  _enum: oH,
  _file: oQ,
  _float32: a6,
  _float64: a4,
  _gt: gt,
  _gte: gte,
  _guid: aO,
  _includes: includes,
  _int: a1,
  _int32: a2,
  _int64: oe,
  _intersection: oB,
  _ipv4: aL,
  _ipv6: aZ,
  _isoDate: aX,
  _isoDateTime: aJ,
  _isoDuration: aK,
  _isoTime: aQ,
  _jwt: aG,
  _ksuid: aM,
  _lazy: o9,
  _length: length,
  _literal: oX,
  _lowercase: lowercase,
  _lt: lt,
  _lte: lte,
  _map: oY,
  _max: lte,
  _maxLength: maxLength,
  _maxSize: maxSize,
  _mime: mime,
  _min: gte,
  _minLength: minLength,
  _minSize: minSize,
  _multipleOf: multipleOf,
  _nan: od,
  _nanoid: az,
  _nativeEnum: oJ,
  _negative: negative,
  _never: os,
  _nonnegative: nonnegative,
  _nonoptional: o6,
  _nonpositive: nonpositive,
  _normalize: normalize,
  _null: oi,
  _nullable: o0,
  _number: aV,
  _optional: oV,
  _overwrite: overwrite,
  _parse: eD,
  _parseAsync: eN,
  _pipe: o3,
  _positive: positive,
  _promise: o7,
  _property: property,
  _readonly: o5,
  _record: oW,
  _refine: st,
  _regex: regex,
  _safeDecode: eQ,
  _safeDecodeAsync: e1,
  _safeEncode: eJ,
  _safeEncodeAsync: eV,
  _safeParse: eR,
  _safeParseAsync: eM,
  _set: oG,
  _size: size,
  _startsWith: startsWith,
  _string: a$,
  _stringFormat: sa,
  _stringbool: si,
  _success: o4,
  _superRefine: sr,
  _symbol: or,
  _templateLiteral: o8,
  _toLowerCase: toLowerCase,
  _toUpperCase: toUpperCase,
  _transform: oK,
  _trim: trim,
  _tuple: oq,
  _uint32: a3,
  _uint64: ot,
  _ulid: aR,
  _undefined: on,
  _union: oZ,
  _unknown: oo,
  _uppercase: uppercase,
  _url: aA,
  _uuid: aE,
  _uuidv4: aj,
  _uuidv6: aU,
  _uuidv7: aT,
  _void: ou,
  _xid: aC,
  clone: clone,
  config: config,
  decode: eq,
  decodeAsync: eH,
  encode: eF,
  encodeAsync: eY,
  flattenError: flattenError,
  formatError: formatError,
  globalConfig: y,
  globalRegistry: globalRegistry,
  isValidBase64: rM,
  isValidBase64URL: rZ,
  isValidJWT: rq,
  locales: locales,
  parse: ez,
  parseAsync: eP,
  prettifyError: prettifyError,
  regexes: regexes,
  registry: registry,
  safeDecode: eK,
  safeDecodeAsync: e6,
  safeEncode: eX,
  safeEncodeAsync: e0,
  safeParse: eC,
  safeParseAsync: eL,
  toDotPath: eT,
  toJSONSchema: toJSONSchema,
  treeifyError: treeifyError,
  util: util,
  version: ry
};
export var iso = {
  ZodISODate: ZodISODate,
  ZodISODateTime: ZodISODateTime,
  ZodISODuration: ZodISODuration,
  ZodISOTime: ZodISOTime,
  date: sf,
  datetime: sc,
  duration: sy,
  time: sp
};
export var coerce = {
  bigint: ce,
  boolean: l7,
  date: ct,
  number: l9,
  string: l8
};
export let NEVER = Object.freeze({
  status: "aborted"
});
function f(e, t, r) {
  function n(r, n) {
    var i;
    Object.defineProperty(r, "_zod", {
      value: r._zod ?? {},
      enumerable: false
    });
    (i = r._zod).traits ?? (i.traits = new Set());
    r._zod.traits.add(e);
    t(r, n);
    for (let a in o.prototype) {
      if (!(a in r)) {
        Object.defineProperty(r, a, {
          value: o.prototype[a].bind(r)
        });
      }
    }
    r._zod.constr = o;
    r._zod.def = n;
  }
  let i = r?.Parent ?? Object;
  class a extends i {}
  function o(e) {
    var t;
    let i = r?.Parent ? new a() : this;
    n(i, e);
    (t = i._zod).deferred ?? (t.deferred = []);
    for (let r of i._zod.deferred) {
      r();
    }
    return i;
  }
  Object.defineProperty(a, "name", {
    value: e
  });
  Object.defineProperty(o, "init", {
    value: n
  });
  Object.defineProperty(o, Symbol.hasInstance, {
    value: t => !!r?.Parent && t instanceof r.Parent || t?._zod?.traits?.has(e)
  });
  Object.defineProperty(o, "name", {
    value: e
  });
  return o;
}
export let $brand = Symbol("zod_brand");
class p extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class m extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`);
    this.name = "ZodEncodeError";
  }
}
let y = {};
export function config(e) {
  if (e) {
    Object.assign(y, e);
  }
  return y;
}
function b(e) {
  return e;
}
function v(e) {
  return e;
}
function x(e) {}
function w(e) {
  throw Error();
}
function _(e) {}
function k(e) {
  let t = Object.values(e).filter(e => typeof e == "number");
  return Object.entries(e).filter(([e, r]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function $(e, t = "|") {
  return e.map(e => V(e)).join(t);
}
function S(e, t) {
  if (typeof t == "bigint") {
    return t.toString();
  } else {
    return t;
  }
}
function I(e) {
  let t = false;
  return {
    get value() {
      if (!t) {
        let t = e();
        Object.defineProperty(this, "value", {
          value: t
        });
        return t;
      }
      throw Error("cached value already set");
    }
  };
}
function O(e) {
  return e == null;
}
function E(e) {
  let t = +!!e.startsWith("^");
  let r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function j(e, t) {
  let r = (e.toString().split(".")[1] || "").length;
  let n = t.toString();
  let i = (n.split(".")[1] || "").length;
  if (i === 0 && /\d?e-\d?/.test(n)) {
    let e = n.match(/\d?e-(\d?)/);
    if (e?.[1]) {
      i = Number.parseInt(e[1]);
    }
  }
  let a = r > i ? r : i;
  return Number.parseInt(e.toFixed(a).replace(".", "")) % Number.parseInt(t.toFixed(a).replace(".", "")) / 10 ** a;
}
let U = Symbol("evaluating");
function T(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== U) {
        if (n === undefined) {
          n = U;
          n = r();
        }
        return n;
      }
    },
    set(r) {
      Object.defineProperty(e, t, {
        value: r
      });
    },
    configurable: true
  });
}
function A(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function D(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function z(...e) {
  let t = {};
  for (let r of e) {
    Object.assign(t, Object.getOwnPropertyDescriptors(r));
  }
  return Object.defineProperties({}, t);
}
function N(e) {
  return z(e._zod.def);
}
function P(e, t) {
  if (t) {
    return t.reduce((e, t) => e?.[t], e);
  } else {
    return e;
  }
}
function R(e) {
  let t = Object.keys(e);
  return Promise.all(t.map(t => e[t])).then(e => {
    let r = {};
    for (let n = 0; n < t.length; n++) {
      r[t[n]] = e[n];
    }
    return r;
  });
}
function C(e = 10) {
  let t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let n = 0; n < e; n++) {
    r += t[Math.floor(Math.random() * t.length)];
  }
  return r;
}
function M(e) {
  return JSON.stringify(e);
}
let L = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Z(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
let F = I(() => {
  if (typeof navigator != "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    Function("");
    return true;
  } catch (e) {
    return false;
  }
});
function B(e) {
  if (Z(e) === false) {
    return false;
  }
  let t = e.constructor;
  if (t === undefined) {
    return true;
  }
  let r = t.prototype;
  return Z(r) !== false && Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") !== false;
}
function q(e) {
  if (B(e)) {
    return {
      ...e
    };
  } else if (Array.isArray(e)) {
    return [...e];
  } else {
    return e;
  }
}
function W(e) {
  let t = 0;
  for (let r in e) {
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      t++;
    }
  }
  return t;
}
let Y = e => {
  let t = typeof e;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      if (Number.isNaN(e)) {
        return "nan";
      } else {
        return "number";
      }
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(e)) {
        return "array";
      }
      if (e === null) {
        return "null";
      }
      if (e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function") {
        return "promise";
      }
      if (typeof Map != "undefined" && e instanceof Map) {
        return "map";
      }
      if (typeof Set != "undefined" && e instanceof Set) {
        return "set";
      }
      if (typeof Date != "undefined" && e instanceof Date) {
        return "date";
      }
      if (typeof File != "undefined" && e instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw Error(`Unknown data type: ${t}`);
  }
};
let G = new Set(["string", "number", "symbol"]);
let H = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function J(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export function clone(e, t, r) {
  let n = new e._zod.constr(t ?? e._zod.def);
  if (!t || r?.parent) {
    n._zod.parent = e;
  }
  return n;
}
function Q(e) {
  let t = e;
  if (!t) {
    return {};
  }
  if (typeof t == "string") {
    return {
      error: () => t
    };
  }
  if (t?.message !== undefined) {
    if (t?.error !== undefined) {
      throw Error("Cannot specify both `message` and `error` params");
    }
    t.error = t.message;
  }
  delete t.message;
  if (typeof t.error == "string") {
    return {
      ...t,
      error: () => t.error
    };
  } else {
    return t;
  }
}
function K(e) {
  let t;
  return new Proxy({}, {
    get: (r, n, i) => {
      t ??= e();
      return Reflect.get(t, n, i);
    },
    set: (r, n, i, a) => {
      t ??= e();
      return Reflect.set(t, n, i, a);
    },
    has: (r, n) => {
      t ??= e();
      return Reflect.has(t, n);
    },
    deleteProperty: (r, n) => {
      t ??= e();
      return Reflect.deleteProperty(t, n);
    },
    ownKeys: r => {
      t ??= e();
      return Reflect.ownKeys(t);
    },
    getOwnPropertyDescriptor: (r, n) => {
      t ??= e();
      return Reflect.getOwnPropertyDescriptor(t, n);
    },
    defineProperty: (r, n, i) => {
      t ??= e();
      return Reflect.defineProperty(t, n, i);
    }
  });
}
function V(e) {
  if (typeof e == "bigint") {
    return e.toString() + "n";
  } else if (typeof e == "string") {
    return `"${e}"`;
  } else {
    return `${e}`;
  }
}
function ee(e) {
  return Object.keys(e).filter(t => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
let et = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-3.4028234663852886e+38, 3.4028234663852886e+38],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
let er = {
  int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
  uint64: [BigInt(0), BigInt("18446744073709551615")]
};
function en(e, t) {
  let r = e._zod.def;
  let n = z(e._zod.def, {
    get shape() {
      let e = {};
      for (let n in t) {
        if (!(n in r.shape)) {
          throw Error(`Unrecognized key: "${n}"`);
        }
        if (t[n]) {
          e[n] = r.shape[n];
        }
      }
      D(this, "shape", e);
      return e;
    },
    checks: []
  });
  return clone(e, n);
}
function ei(e, t) {
  let r = e._zod.def;
  let n = z(e._zod.def, {
    get shape() {
      let n = {
        ...e._zod.def.shape
      };
      for (let e in t) {
        if (!(e in r.shape)) {
          throw Error(`Unrecognized key: "${e}"`);
        }
        if (t[e]) {
          delete n[e];
        }
      }
      D(this, "shape", n);
      return n;
    },
    checks: []
  });
  return clone(e, n);
}
function ea(e, t) {
  if (!B(t)) {
    throw Error("Invalid input to extend: expected a plain object");
  }
  let r = e._zod.def.checks;
  if (r && r.length > 0) {
    throw Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  }
  let n = z(e._zod.def, {
    get shape() {
      let r = {
        ...e._zod.def.shape,
        ...t
      };
      D(this, "shape", r);
      return r;
    },
    checks: []
  });
  return clone(e, n);
}
function eo(e, t) {
  if (!B(t)) {
    throw Error("Invalid input to safeExtend: expected a plain object");
  }
  let r = {
    ...e._zod.def,
    get shape() {
      let r = {
        ...e._zod.def.shape,
        ...t
      };
      D(this, "shape", r);
      return r;
    },
    checks: e._zod.def.checks
  };
  return clone(e, r);
}
function es(e, t) {
  let r = z(e._zod.def, {
    get shape() {
      let r = {
        ...e._zod.def.shape,
        ...t._zod.def.shape
      };
      D(this, "shape", r);
      return r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
  });
  return clone(e, r);
}
function eu(e, t, r) {
  let n = z(t._zod.def, {
    get shape() {
      let n = t._zod.def.shape;
      let i = {
        ...n
      };
      if (r) {
        for (let t in r) {
          if (!(t in n)) {
            throw Error(`Unrecognized key: "${t}"`);
          }
          if (r[t]) {
            i[t] = e ? new e({
              type: "optional",
              innerType: n[t]
            }) : n[t];
          }
        }
      } else {
        for (let t in n) {
          i[t] = e ? new e({
            type: "optional",
            innerType: n[t]
          }) : n[t];
        }
      }
      D(this, "shape", i);
      return i;
    },
    checks: []
  });
  return clone(t, n);
}
function el(e, t, r) {
  let n = z(t._zod.def, {
    get shape() {
      let n = t._zod.def.shape;
      let i = {
        ...n
      };
      if (r) {
        for (let t in r) {
          if (!(t in i)) {
            throw Error(`Unrecognized key: "${t}"`);
          }
          if (r[t]) {
            i[t] = new e({
              type: "nonoptional",
              innerType: n[t]
            });
          }
        }
      } else {
        for (let t in n) {
          i[t] = new e({
            type: "nonoptional",
            innerType: n[t]
          });
        }
      }
      D(this, "shape", i);
      return i;
    },
    checks: []
  });
  return clone(t, n);
}
function ec(e, t = 0) {
  if (e.aborted === true) {
    return true;
  }
  for (let r = t; r < e.issues.length; r++) {
    if (e.issues[r]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function ed(e, t) {
  return t.map(t => {
    t.path ??= [];
    t.path.unshift(e);
    return t;
  });
}
function ef(e) {
  if (typeof e == "string") {
    return e;
  } else {
    return e?.message;
  }
}
function eh(e, t, r) {
  let n = {
    ...e,
    path: e.path ?? []
  };
  if (!e.message) {
    n.message = ef(e.inst?._zod.def?.error?.(e)) ?? ef(t?.error?.(e)) ?? ef(r.customError?.(e)) ?? ef(r.localeError?.(e)) ?? "Invalid input";
  }
  delete n.inst;
  delete n.continue;
  if (!t?.reportInput) {
    delete n.input;
  }
  return n;
}
function ep(e) {
  if (e instanceof Set) {
    return "set";
  } else if (e instanceof Map) {
    return "map";
  } else if (e instanceof File) {
    return "file";
  } else {
    return "unknown";
  }
}
function em(e) {
  if (Array.isArray(e)) {
    return "array";
  } else if (typeof e == "string") {
    return "string";
  } else {
    return "unknown";
  }
}
function ey(...e) {
  let [t, r, n] = e;
  if (typeof t == "string") {
    return {
      message: t,
      code: "custom",
      input: r,
      inst: n
    };
  } else {
    return {
      ...t
    };
  }
}
function eg(e) {
  return Object.entries(e).filter(([e, t]) => Number.isNaN(Number.parseInt(e, 10))).map(e => e[1]);
}
function eb(e) {
  let t = atob(e);
  let r = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) {
    r[e] = t.charCodeAt(e);
  }
  return r;
}
function ev(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    t += String.fromCharCode(e[r]);
  }
  return btoa(t);
}
function ex(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/");
  let r = "=".repeat((4 - t.length % 4) % 4);
  return eb(t + r);
}
function ew(e) {
  return ev(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function e_(e) {
  let t = e.replace(/^0x/, "");
  if (t.length % 2 != 0) {
    throw Error("Invalid hex string length");
  }
  let r = new Uint8Array(t.length / 2);
  for (let e = 0; e < t.length; e += 2) {
    r[e / 2] = Number.parseInt(t.slice(e, e + 2), 16);
  }
  return r;
}
function ek(e) {
  return Array.from(e).map(e => e.toString(16).padStart(2, "0")).join("");
}
class e$ {
  constructor(...e) {}
}
let eS = (e, t) => {
  e.name = "$ZodError";
  Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: false
  });
  Object.defineProperty(e, "issues", {
    value: t,
    enumerable: false
  });
  e.message = JSON.stringify(t, S, 2);
  Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: false
  });
};
let eI = f("$ZodError", eS);
let eO = f("$ZodError", eS, {
  Parent: Error
});
export function flattenError(e, t = e => e.message) {
  let r = {};
  let n = [];
  for (let i of e.issues) {
    if (i.path.length > 0) {
      r[i.path[0]] = r[i.path[0]] || [];
      r[i.path[0]].push(t(i));
    } else {
      n.push(t(i));
    }
  }
  return {
    formErrors: n,
    fieldErrors: r
  };
}
export function formatError(e, t) {
  let r = t || function (e) {
    return e.message;
  };
  let n = {
    _errors: []
  };
  let i = e => {
    for (let t of e.issues) {
      if (t.code === "invalid_union" && t.errors.length) {
        t.errors.map(e => i({
          issues: e
        }));
      } else if (t.code === "invalid_key") {
        i({
          issues: t.issues
        });
      } else if (t.code === "invalid_element") {
        i({
          issues: t.issues
        });
      } else if (t.path.length === 0) {
        n._errors.push(r(t));
      } else {
        let e = n;
        let i = 0;
        while (i < t.path.length) {
          let n = t.path[i];
          if (i === t.path.length - 1) {
            e[n] = e[n] || {
              _errors: []
            };
            e[n]._errors.push(r(t));
          } else {
            e[n] = e[n] || {
              _errors: []
            };
          }
          e = e[n];
          i++;
        }
      }
    }
  };
  i(e);
  return n;
}
export function treeifyError(e, t) {
  let r = t || function (e) {
    return e.message;
  };
  let n = {
    errors: []
  };
  let i = (e, t = []) => {
    var a;
    var o;
    for (let s of e.issues) {
      if (s.code === "invalid_union" && s.errors.length) {
        s.errors.map(e => i({
          issues: e
        }, s.path));
      } else if (s.code === "invalid_key") {
        i({
          issues: s.issues
        }, s.path);
      } else if (s.code === "invalid_element") {
        i({
          issues: s.issues
        }, s.path);
      } else {
        let e = [...t, ...s.path];
        if (e.length === 0) {
          n.errors.push(r(s));
          continue;
        }
        let i = n;
        let u = 0;
        while (u < e.length) {
          let t = e[u];
          let n = u === e.length - 1;
          if (typeof t == "string") {
            i.properties ??= {};
            (a = i.properties)[t] ?? (a[t] = {
              errors: []
            });
            i = i.properties[t];
          } else {
            i.items ??= [];
            (o = i.items)[t] ?? (o[t] = {
              errors: []
            });
            i = i.items[t];
          }
          if (n) {
            i.errors.push(r(s));
          }
          u++;
        }
      }
    }
  };
  i(e);
  return n;
}
function eT(e) {
  let t = [];
  for (let r of e.map(e => typeof e == "object" ? e.key : e)) {
    if (typeof r == "number") {
      t.push(`[${r}]`);
    } else if (typeof r == "symbol") {
      t.push(`[${JSON.stringify(String(r))}]`);
    } else if (/[^\w$]/.test(r)) {
      t.push(`[${JSON.stringify(r)}]`);
    } else {
      if (t.length) {
        t.push(".");
      }
      t.push(r);
    }
  }
  return t.join("");
}
export function prettifyError(e) {
  let t = [];
  for (let r of [...e.issues].sort((e, t) => (e.path ?? []).length - (t.path ?? []).length)) {
    t.push(`✖ ${r.message}`);
    if (r.path?.length) {
      t.push(`  → at ${eT(r.path)}`);
    }
  }
  return t.join("\n");
}
let eD = e => (t, r, n, i) => {
  let a = n ? Object.assign(n, {
    async: false
  }) : {
    async: false
  };
  let o = t._zod.run({
    value: r,
    issues: []
  }, a);
  if (o instanceof Promise) {
    throw new p();
  }
  if (o.issues.length) {
    let t = new (i?.Err ?? e)(o.issues.map(e => eh(e, a, config())));
    L(t, i?.callee);
    throw t;
  }
  return o.value;
};
let ez = eD(eO);
let eN = e => async (t, r, n, i) => {
  let a = n ? Object.assign(n, {
    async: true
  }) : {
    async: true
  };
  let o = t._zod.run({
    value: r,
    issues: []
  }, a);
  if (o instanceof Promise) {
    o = await o;
  }
  if (o.issues.length) {
    let t = new (i?.Err ?? e)(o.issues.map(e => eh(e, a, config())));
    L(t, i?.callee);
    throw t;
  }
  return o.value;
};
let eP = eN(eO);
let eR = e => (t, r, n) => {
  let i = n ? {
    ...n,
    async: false
  } : {
    async: false
  };
  let a = t._zod.run({
    value: r,
    issues: []
  }, i);
  if (a instanceof Promise) {
    throw new p();
  }
  if (a.issues.length) {
    return {
      success: false,
      error: new (e ?? eI)(a.issues.map(e => eh(e, i, config())))
    };
  } else {
    return {
      success: true,
      data: a.value
    };
  }
};
let eC = eR(eO);
let eM = e => async (t, r, n) => {
  let i = n ? Object.assign(n, {
    async: true
  }) : {
    async: true
  };
  let a = t._zod.run({
    value: r,
    issues: []
  }, i);
  if (a instanceof Promise) {
    a = await a;
  }
  if (a.issues.length) {
    return {
      success: false,
      error: new e(a.issues.map(e => eh(e, i, config())))
    };
  } else {
    return {
      success: true,
      data: a.value
    };
  }
};
let eL = eM(eO);
let eZ = e => (t, r, n) => {
  let i = n ? Object.assign(n, {
    direction: "backward"
  }) : {
    direction: "backward"
  };
  return eD(e)(t, r, i);
};
let eF = eZ(eO);
let eB = e => (t, r, n) => eD(e)(t, r, n);
let eq = eB(eO);
let eW = e => async (t, r, n) => {
  let i = n ? Object.assign(n, {
    direction: "backward"
  }) : {
    direction: "backward"
  };
  return eN(e)(t, r, i);
};
let eY = eW(eO);
let eG = e => async (t, r, n) => eN(e)(t, r, n);
let eH = eG(eO);
let eJ = e => (t, r, n) => {
  let i = n ? Object.assign(n, {
    direction: "backward"
  }) : {
    direction: "backward"
  };
  return eR(e)(t, r, i);
};
let eX = eJ(eO);
let eQ = e => (t, r, n) => eR(e)(t, r, n);
let eK = eQ(eO);
let eV = e => async (t, r, n) => {
  let i = n ? Object.assign(n, {
    direction: "backward"
  }) : {
    direction: "backward"
  };
  return eM(e)(t, r, i);
};
let e0 = eV(eO);
let e1 = e => async (t, r, n) => eM(e)(t, r, n);
let e6 = e1(eO);
let e4 = /^[cC][^\s-]{8,}$/;
let e2 = /^[0-9a-z]+$/;
let e3 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
let e5 = /^[0-9a-vA-V]{20}$/;
let e8 = /^[A-Za-z0-9]{27}$/;
let e9 = /^[a-zA-Z0-9_-]{21}$/;
let e7 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
let te = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
let tt = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
let tr = e => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
let tn = tr(4);
let ti = tr(6);
let ta = tr(7);
let to = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
let ts = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let tu = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let tl = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
let tc = tl;
let td = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let tf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function th() {
  return RegExp(tf, "u");
}
let tp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
let tm = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
let ty = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
let tg = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
let tb = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
let tv = /^[A-Za-z0-9_-]*$/;
let tx = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
let tw = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
let t_ = /^\+(?:[0-9]){6,14}[0-9]$/;
let tk = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
let t$ = RegExp(`^${tk}$`);
function tS(e) {
  let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  if (typeof e.precision == "number") {
    if (e.precision === -1) {
      return `${t}`;
    } else if (e.precision === 0) {
      return `${t}:[0-5]\\d`;
    } else {
      return `${t}:[0-5]\\d\\.\\d{${e.precision}}`;
    }
  } else {
    return `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
}
function tI(e) {
  return RegExp(`^${tS(e)}$`);
}
function tO(e) {
  let t = tS({
    precision: e.precision
  });
  let r = ["Z"];
  if (e.local) {
    r.push("");
  }
  if (e.offset) {
    r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  }
  let n = `${t}(?:${r.join("|")})`;
  return RegExp(`^${tk}T(?:${n})$`);
}
let tE = e => {
  let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return RegExp(`^${t}$`);
};
let tj = /^-?\d+n?$/;
let tU = /^-?\d+$/;
let tT = /^-?\d+(?:\.\d+)?/;
let tA = /^(?:true|false)$/i;
let tD = /^null$/i;
let tz = /^undefined$/i;
let tN = /^[^A-Z]*$/;
let tP = /^[^a-z]*$/;
let tR = /^[0-9a-fA-F]*$/;
function tC(e, t) {
  return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function tM(e) {
  return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
let tL = /^[0-9a-fA-F]{32}$/;
let tZ = tC(22, "==");
let tF = tM(22);
let tB = /^[0-9a-fA-F]{40}$/;
let tq = tC(27, "=");
let tW = tM(27);
let tY = /^[0-9a-fA-F]{64}$/;
let tG = tC(43, "=");
let tH = tM(43);
let tJ = /^[0-9a-fA-F]{96}$/;
let tX = tC(64, "");
let tQ = tM(64);
let tK = /^[0-9a-fA-F]{128}$/;
let tV = tC(86, "==");
let t0 = tM(86);
let t1 = f("$ZodCheck", (e, t) => {
  var r;
  e._zod ??= {};
  e._zod.def = t;
  (r = e._zod).onattach ?? (r.onattach = []);
});
let t6 = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
let t4 = f("$ZodCheckLessThan", (e, t) => {
  t1.init(e, t);
  let r = t6[typeof t.value];
  e._zod.onattach.push(e => {
    let r = e._zod.bag;
    let n = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Infinity;
    if (t.value < n) {
      if (t.inclusive) {
        r.maximum = t.value;
      } else {
        r.exclusiveMaximum = t.value;
      }
    }
  });
  e._zod.check = n => {
    if (!(t.inclusive ? n.value <= t.value : n.value < t.value)) {
      n.issues.push({
        origin: r,
        code: "too_big",
        maximum: t.value,
        input: n.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let t2 = f("$ZodCheckGreaterThan", (e, t) => {
  t1.init(e, t);
  let r = t6[typeof t.value];
  e._zod.onattach.push(e => {
    let r = e._zod.bag;
    let n = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? -Infinity;
    if (t.value > n) {
      if (t.inclusive) {
        r.minimum = t.value;
      } else {
        r.exclusiveMinimum = t.value;
      }
    }
  });
  e._zod.check = n => {
    if (!(t.inclusive ? n.value >= t.value : n.value > t.value)) {
      n.issues.push({
        origin: r,
        code: "too_small",
        minimum: t.value,
        input: n.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let t3 = f("$ZodCheckMultipleOf", (e, t) => {
  t1.init(e, t);
  e._zod.onattach.push(e => {
    var r;
    (r = e._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  });
  e._zod.check = r => {
    if (typeof r.value != typeof t.value) {
      throw Error("Cannot mix number and bigint in multiple_of check.");
    }
    if (!(typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : j(r.value, t.value) === 0)) {
      r.issues.push({
        origin: typeof r.value,
        code: "not_multiple_of",
        divisor: t.value,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let t5 = f("$ZodCheckNumberFormat", (e, t) => {
  t1.init(e, t);
  t.format = t.format || "float64";
  let r = t.format?.includes("int");
  let n = r ? "int" : "number";
  let [i, a] = et[t.format];
  e._zod.onattach.push(e => {
    let n = e._zod.bag;
    n.format = t.format;
    n.minimum = i;
    n.maximum = a;
    if (r) {
      n.pattern = tU;
    }
  });
  e._zod.check = o => {
    let s = o.value;
    if (r) {
      if (!Number.isInteger(s)) {
        o.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: false,
          input: s,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(s)) {
        if (s > 0) {
          o.issues.push({
            input: s,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: e,
            origin: n,
            continue: !t.abort
          });
        } else {
          o.issues.push({
            input: s,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: e,
            origin: n,
            continue: !t.abort
          });
        }
        return;
      }
    }
    if (s < i) {
      o.issues.push({
        origin: "number",
        input: s,
        code: "too_small",
        minimum: i,
        inclusive: true,
        inst: e,
        continue: !t.abort
      });
    }
    if (s > a) {
      o.issues.push({
        origin: "number",
        input: s,
        code: "too_big",
        maximum: a,
        inst: e
      });
    }
  };
});
let t8 = f("$ZodCheckBigIntFormat", (e, t) => {
  t1.init(e, t);
  let [r, n] = er[t.format];
  e._zod.onattach.push(e => {
    let i = e._zod.bag;
    i.format = t.format;
    i.minimum = r;
    i.maximum = n;
  });
  e._zod.check = i => {
    let a = i.value;
    if (a < r) {
      i.issues.push({
        origin: "bigint",
        input: a,
        code: "too_small",
        minimum: r,
        inclusive: true,
        inst: e,
        continue: !t.abort
      });
    }
    if (a > n) {
      i.issues.push({
        origin: "bigint",
        input: a,
        code: "too_big",
        maximum: n,
        inst: e
      });
    }
  };
});
let t9 = f("$ZodCheckMaxSize", (e, t) => {
  var r;
  t1.init(e, t);
  (r = e._zod.def).when ?? (r.when = e => {
    let t = e.value;
    return !O(t) && t.size !== undefined;
  });
  e._zod.onattach.push(e => {
    let r = e._zod.bag.maximum ?? Infinity;
    if (t.maximum < r) {
      e._zod.bag.maximum = t.maximum;
    }
  });
  e._zod.check = r => {
    let n = r.value;
    if (!(n.size <= t.maximum)) {
      r.issues.push({
        origin: ep(n),
        code: "too_big",
        maximum: t.maximum,
        inclusive: true,
        input: n,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let t7 = f("$ZodCheckMinSize", (e, t) => {
  var r;
  t1.init(e, t);
  (r = e._zod.def).when ?? (r.when = e => {
    let t = e.value;
    return !O(t) && t.size !== undefined;
  });
  e._zod.onattach.push(e => {
    let r = e._zod.bag.minimum ?? -Infinity;
    if (t.minimum > r) {
      e._zod.bag.minimum = t.minimum;
    }
  });
  e._zod.check = r => {
    let n = r.value;
    if (!(n.size >= t.minimum)) {
      r.issues.push({
        origin: ep(n),
        code: "too_small",
        minimum: t.minimum,
        inclusive: true,
        input: n,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let re = f("$ZodCheckSizeEquals", (e, t) => {
  var r;
  t1.init(e, t);
  (r = e._zod.def).when ?? (r.when = e => {
    let t = e.value;
    return !O(t) && t.size !== undefined;
  });
  e._zod.onattach.push(e => {
    let r = e._zod.bag;
    r.minimum = t.size;
    r.maximum = t.size;
    r.size = t.size;
  });
  e._zod.check = r => {
    let n = r.value;
    let i = n.size;
    if (i === t.size) {
      return;
    }
    let a = i > t.size;
    r.issues.push({
      origin: ep(n),
      ...(a ? {
        code: "too_big",
        maximum: t.size
      } : {
        code: "too_small",
        minimum: t.size
      }),
      inclusive: true,
      exact: true,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
let rt = f("$ZodCheckMaxLength", (e, t) => {
  var r;
  t1.init(e, t);
  (r = e._zod.def).when ?? (r.when = e => {
    let t = e.value;
    return !O(t) && t.length !== undefined;
  });
  e._zod.onattach.push(e => {
    let r = e._zod.bag.maximum ?? Infinity;
    if (t.maximum < r) {
      e._zod.bag.maximum = t.maximum;
    }
  });
  e._zod.check = r => {
    let n = r.value;
    if (n.length <= t.maximum) {
      return;
    }
    let i = em(n);
    r.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: true,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
});
let rr = f("$ZodCheckMinLength", (e, t) => {
  var r;
  t1.init(e, t);
  (r = e._zod.def).when ?? (r.when = e => {
    let t = e.value;
    return !O(t) && t.length !== undefined;
  });
  e._zod.onattach.push(e => {
    let r = e._zod.bag.minimum ?? -Infinity;
    if (t.minimum > r) {
      e._zod.bag.minimum = t.minimum;
    }
  });
  e._zod.check = r => {
    let n = r.value;
    if (n.length >= t.minimum) {
      return;
    }
    let i = em(n);
    r.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: true,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
});
let rn = f("$ZodCheckLengthEquals", (e, t) => {
  var r;
  t1.init(e, t);
  (r = e._zod.def).when ?? (r.when = e => {
    let t = e.value;
    return !O(t) && t.length !== undefined;
  });
  e._zod.onattach.push(e => {
    let r = e._zod.bag;
    r.minimum = t.length;
    r.maximum = t.length;
    r.length = t.length;
  });
  e._zod.check = r => {
    let n = r.value;
    let i = n.length;
    if (i === t.length) {
      return;
    }
    let a = em(n);
    let o = i > t.length;
    r.issues.push({
      origin: a,
      ...(o ? {
        code: "too_big",
        maximum: t.length
      } : {
        code: "too_small",
        minimum: t.length
      }),
      inclusive: true,
      exact: true,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
let ri = f("$ZodCheckStringFormat", (e, t) => {
  var r;
  var n;
  t1.init(e, t);
  e._zod.onattach.push(e => {
    let r = e._zod.bag;
    r.format = t.format;
    if (t.pattern) {
      r.patterns ??= new Set();
      r.patterns.add(t.pattern);
    }
  });
  if (t.pattern) {
    (r = e._zod).check ?? (r.check = r => {
      t.pattern.lastIndex = 0;
      if (!t.pattern.test(r.value)) {
        r.issues.push({
          origin: "string",
          code: "invalid_format",
          format: t.format,
          input: r.value,
          ...(t.pattern ? {
            pattern: t.pattern.toString()
          } : {}),
          inst: e,
          continue: !t.abort
        });
      }
    });
  } else {
    (n = e._zod).check ?? (n.check = () => {});
  }
});
let ra = f("$ZodCheckRegex", (e, t) => {
  ri.init(e, t);
  e._zod.check = r => {
    t.pattern.lastIndex = 0;
    if (!t.pattern.test(r.value)) {
      r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: r.value,
        pattern: t.pattern.toString(),
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let ro = f("$ZodCheckLowerCase", (e, t) => {
  t.pattern ??= tN;
  ri.init(e, t);
});
let rs = f("$ZodCheckUpperCase", (e, t) => {
  t.pattern ??= tP;
  ri.init(e, t);
});
let ru = f("$ZodCheckIncludes", (e, t) => {
  t1.init(e, t);
  let r = J(t.includes);
  let n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n;
  e._zod.onattach.push(e => {
    let t = e._zod.bag;
    t.patterns ??= new Set();
    t.patterns.add(n);
  });
  e._zod.check = r => {
    if (!r.value.includes(t.includes, t.position)) {
      r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: t.includes,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let rl = f("$ZodCheckStartsWith", (e, t) => {
  t1.init(e, t);
  let r = RegExp(`^${J(t.prefix)}.*`);
  t.pattern ??= r;
  e._zod.onattach.push(e => {
    let t = e._zod.bag;
    t.patterns ??= new Set();
    t.patterns.add(r);
  });
  e._zod.check = r => {
    if (!r.value.startsWith(t.prefix)) {
      r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: t.prefix,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let rc = f("$ZodCheckEndsWith", (e, t) => {
  t1.init(e, t);
  let r = RegExp(`.*${J(t.suffix)}$`);
  t.pattern ??= r;
  e._zod.onattach.push(e => {
    let t = e._zod.bag;
    t.patterns ??= new Set();
    t.patterns.add(r);
  });
  e._zod.check = r => {
    if (!r.value.endsWith(t.suffix)) {
      r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: t.suffix,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function rd(e, t, r) {
  if (e.issues.length) {
    t.issues.push(...ed(r, e.issues));
  }
}
let rf = f("$ZodCheckProperty", (e, t) => {
  t1.init(e, t);
  e._zod.check = e => {
    let r = t.schema._zod.run({
      value: e.value[t.property],
      issues: []
    }, {});
    if (r instanceof Promise) {
      return r.then(r => rd(r, e, t.property));
    }
    rd(r, e, t.property);
  };
});
let rh = f("$ZodCheckMimeType", (e, t) => {
  t1.init(e, t);
  let r = new Set(t.mime);
  e._zod.onattach.push(e => {
    e._zod.bag.mime = t.mime;
  });
  e._zod.check = n => {
    if (!r.has(n.value.type)) {
      n.issues.push({
        code: "invalid_value",
        values: t.mime,
        input: n.value.type,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let rp = f("$ZodCheckOverwrite", (e, t) => {
  t1.init(e, t);
  e._zod.check = e => {
    e.value = t.tx(e.value);
  };
});
class rm {
  constructor(e = []) {
    this.content = [];
    this.indent = 0;
    if (this) {
      this.args = e;
    }
  }
  indented(e) {
    this.indent += 1;
    e(this);
    this.indent -= 1;
  }
  write(e) {
    if (typeof e == "function") {
      e(this, {
        execution: "sync"
      });
      e(this, {
        execution: "async"
      });
      return;
    }
    let t = e.split("\n").filter(e => e);
    let r = Math.min(...t.map(e => e.length - e.trimStart().length));
    for (let e of t.map(e => e.slice(r)).map(e => " ".repeat(this.indent * 2) + e)) {
      this.content.push(e);
    }
  }
  compile() {
    return Function(...this?.args, [...(this?.content ?? [""]).map(e => `  ${e}`)].join("\n"));
  }
}
let ry = {
  major: 4,
  minor: 1,
  patch: 11
};
let rg = f("$ZodType", (e, t) => {
  var r;
  e ??= {};
  e._zod.def = t;
  e._zod.bag = e._zod.bag || {};
  e._zod.version = ry;
  let n = [...(e._zod.def.checks ?? [])];
  if (e._zod.traits.has("$ZodCheck")) {
    n.unshift(e);
  }
  for (let t of n) {
    for (let r of t._zod.onattach) {
      r(e);
    }
  }
  if (n.length === 0) {
    (r = e._zod).deferred ?? (r.deferred = []);
    e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  } else {
    let t = (e, t, r) => {
      let n;
      let i = ec(e);
      for (let a of t) {
        if (a._zod.def.when) {
          if (!a._zod.def.when(e)) {
            continue;
          }
        } else if (i) {
          continue;
        }
        let t = e.issues.length;
        let o = a._zod.check(e);
        if (o instanceof Promise && r?.async === false) {
          throw new p();
        }
        if (n || o instanceof Promise) {
          n = (n ?? Promise.resolve()).then(async () => {
            await o;
            if (e.issues.length !== t) {
              i ||= ec(e, t);
            }
          });
        } else {
          if (e.issues.length === t) {
            continue;
          }
          i ||= ec(e, t);
        }
      }
      if (n) {
        return n.then(() => e);
      } else {
        return e;
      }
    };
    let r = (r, i, a) => {
      if (ec(r)) {
        r.aborted = true;
        return r;
      }
      let o = t(i, n, a);
      if (o instanceof Promise) {
        if (a.async === false) {
          throw new p();
        }
        return o.then(t => e._zod.parse(t, a));
      }
      return e._zod.parse(o, a);
    };
    e._zod.run = (i, a) => {
      if (a.skipChecks) {
        return e._zod.parse(i, a);
      }
      if (a.direction === "backward") {
        let t = e._zod.parse({
          value: i.value,
          issues: []
        }, {
          ...a,
          skipChecks: true
        });
        if (t instanceof Promise) {
          return t.then(e => r(e, i, a));
        } else {
          return r(t, i, a);
        }
      }
      let o = e._zod.parse(i, a);
      if (o instanceof Promise) {
        if (a.async === false) {
          throw new p();
        }
        return o.then(e => t(e, n, a));
      }
      return t(o, n, a);
    };
  }
  e["~standard"] = {
    validate: t => {
      try {
        let r = eC(e, t);
        if (r.success) {
          return {
            value: r.data
          };
        } else {
          return {
            issues: r.error?.issues
          };
        }
      } catch (r) {
        return eL(e, t).then(e => e.success ? {
          value: e.data
        } : {
          issues: e.error?.issues
        });
      }
    },
    vendor: "zod",
    version: 1
  };
});
let rb = f("$ZodString", (e, t) => {
  rg.init(e, t);
  e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? tE(e._zod.bag);
  e._zod.parse = (r, n) => {
    if (t.coerce) {
      try {
        r.value = String(r.value);
      } catch (e) {}
    }
    if (typeof r.value != "string") {
      r.issues.push({
        expected: "string",
        code: "invalid_type",
        input: r.value,
        inst: e
      });
    }
    return r;
  };
});
let rv = f("$ZodStringFormat", (e, t) => {
  ri.init(e, t);
  rb.init(e, t);
});
let rx = f("$ZodGUID", (e, t) => {
  t.pattern ??= tt;
  rv.init(e, t);
});
let rw = f("$ZodUUID", (e, t) => {
  if (t.version) {
    let e = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (e === undefined) {
      throw Error(`Invalid UUID version: "${t.version}"`);
    }
    t.pattern ??= tr(e);
  } else {
    t.pattern ??= tr();
  }
  rv.init(e, t);
});
let r_ = f("$ZodEmail", (e, t) => {
  t.pattern ??= to;
  rv.init(e, t);
});
let rk = f("$ZodURL", (e, t) => {
  rv.init(e, t);
  e._zod.check = r => {
    try {
      let n = r.value.trim();
      let i = new URL(n);
      if (t.hostname) {
        t.hostname.lastIndex = 0;
        if (!t.hostname.test(i.hostname)) {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: tx.source,
            input: r.value,
            inst: e,
            continue: !t.abort
          });
        }
      }
      if (t.protocol) {
        t.protocol.lastIndex = 0;
        if (!t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol)) {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: t.protocol.source,
            input: r.value,
            inst: e,
            continue: !t.abort
          });
        }
      }
      if (t.normalize) {
        r.value = i.href;
      } else {
        r.value = n;
      }
      return;
    } catch (n) {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let r$ = f("$ZodEmoji", (e, t) => {
  t.pattern ??= th();
  rv.init(e, t);
});
let rS = f("$ZodNanoID", (e, t) => {
  t.pattern ??= e9;
  rv.init(e, t);
});
let rI = f("$ZodCUID", (e, t) => {
  t.pattern ??= e4;
  rv.init(e, t);
});
let rO = f("$ZodCUID2", (e, t) => {
  t.pattern ??= e2;
  rv.init(e, t);
});
let rE = f("$ZodULID", (e, t) => {
  t.pattern ??= e3;
  rv.init(e, t);
});
let rj = f("$ZodXID", (e, t) => {
  t.pattern ??= e5;
  rv.init(e, t);
});
let rU = f("$ZodKSUID", (e, t) => {
  t.pattern ??= e8;
  rv.init(e, t);
});
let rT = f("$ZodISODateTime", (e, t) => {
  t.pattern ??= tO(t);
  rv.init(e, t);
});
let rA = f("$ZodISODate", (e, t) => {
  t.pattern ??= t$;
  rv.init(e, t);
});
let rD = f("$ZodISOTime", (e, t) => {
  t.pattern ??= tI(t);
  rv.init(e, t);
});
let rz = f("$ZodISODuration", (e, t) => {
  t.pattern ??= e7;
  rv.init(e, t);
});
let rN = f("$ZodIPv4", (e, t) => {
  t.pattern ??= tp;
  rv.init(e, t);
  e._zod.onattach.push(e => {
    e._zod.bag.format = "ipv4";
  });
});
let rP = f("$ZodIPv6", (e, t) => {
  t.pattern ??= tm;
  rv.init(e, t);
  e._zod.onattach.push(e => {
    e._zod.bag.format = "ipv6";
  });
  e._zod.check = r => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let rR = f("$ZodCIDRv4", (e, t) => {
  t.pattern ??= ty;
  rv.init(e, t);
});
let rC = f("$ZodCIDRv6", (e, t) => {
  t.pattern ??= tg;
  rv.init(e, t);
  e._zod.check = r => {
    let n = r.value.split("/");
    try {
      if (n.length !== 2) {
        throw Error();
      }
      let [e, t] = n;
      if (!t) {
        throw Error();
      }
      let r = Number(t);
      if (`${r}` !== t || r < 0 || r > 128) {
        throw Error();
      }
      new URL(`http://[${e}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function rM(e) {
  if (e === "") {
    return true;
  }
  if (e.length % 4 != 0) {
    return false;
  }
  try {
    atob(e);
    return true;
  } catch {
    return false;
  }
}
let rL = f("$ZodBase64", (e, t) => {
  t.pattern ??= tb;
  rv.init(e, t);
  e._zod.onattach.push(e => {
    e._zod.bag.contentEncoding = "base64";
  });
  e._zod.check = r => {
    if (!rM(r.value)) {
      r.issues.push({
        code: "invalid_format",
        format: "base64",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function rZ(e) {
  if (!tv.test(e)) {
    return false;
  }
  let t = e.replace(/[-_]/g, e => e === "-" ? "+" : "/");
  return rM(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
let rF = f("$ZodBase64URL", (e, t) => {
  t.pattern ??= tv;
  rv.init(e, t);
  e._zod.onattach.push(e => {
    e._zod.bag.contentEncoding = "base64url";
  });
  e._zod.check = r => {
    if (!rZ(r.value)) {
      r.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let rB = f("$ZodE164", (e, t) => {
  t.pattern ??= t_;
  rv.init(e, t);
});
function rq(e, t = null) {
  try {
    let r = e.split(".");
    if (r.length !== 3) {
      return false;
    }
    let [n] = r;
    if (!n) {
      return false;
    }
    let i = JSON.parse(atob(n));
    if ("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
let rW = f("$ZodJWT", (e, t) => {
  rv.init(e, t);
  e._zod.check = r => {
    if (!rq(r.value, t.alg)) {
      r.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let rY = f("$ZodCustomStringFormat", (e, t) => {
  rv.init(e, t);
  e._zod.check = r => {
    if (!t.fn(r.value)) {
      r.issues.push({
        code: "invalid_format",
        format: t.format,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
let rG = f("$ZodNumber", (e, t) => {
  rg.init(e, t);
  e._zod.pattern = e._zod.bag.pattern ?? tT;
  e._zod.parse = (r, n) => {
    if (t.coerce) {
      try {
        r.value = Number(r.value);
      } catch (e) {}
    }
    let i = r.value;
    if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) {
      return r;
    }
    let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? undefined : "Infinity" : undefined;
    r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: i,
      inst: e,
      ...(a ? {
        received: a
      } : {})
    });
    return r;
  };
});
let rH = f("$ZodNumber", (e, t) => {
  t5.init(e, t);
  rG.init(e, t);
});
let rJ = f("$ZodBoolean", (e, t) => {
  rg.init(e, t);
  e._zod.pattern = tA;
  e._zod.parse = (r, n) => {
    if (t.coerce) {
      try {
        r.value = !!r.value;
      } catch (e) {}
    }
    let i = r.value;
    if (typeof i != "boolean") {
      r.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: i,
        inst: e
      });
    }
    return r;
  };
});
let rX = f("$ZodBigInt", (e, t) => {
  rg.init(e, t);
  e._zod.pattern = tj;
  e._zod.parse = (r, n) => {
    if (t.coerce) {
      try {
        r.value = BigInt(r.value);
      } catch (e) {}
    }
    if (typeof r.value != "bigint") {
      r.issues.push({
        expected: "bigint",
        code: "invalid_type",
        input: r.value,
        inst: e
      });
    }
    return r;
  };
});
let rQ = f("$ZodBigInt", (e, t) => {
  t8.init(e, t);
  rX.init(e, t);
});
let rK = f("$ZodSymbol", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (t, r) => {
    let n = t.value;
    if (typeof n != "symbol") {
      t.issues.push({
        expected: "symbol",
        code: "invalid_type",
        input: n,
        inst: e
      });
    }
    return t;
  };
});
let rV = f("$ZodUndefined", (e, t) => {
  rg.init(e, t);
  e._zod.pattern = tz;
  e._zod.values = new Set([undefined]);
  e._zod.optin = "optional";
  e._zod.optout = "optional";
  e._zod.parse = (t, r) => {
    let n = t.value;
    if (n !== undefined) {
      t.issues.push({
        expected: "undefined",
        code: "invalid_type",
        input: n,
        inst: e
      });
    }
    return t;
  };
});
let r0 = f("$ZodNull", (e, t) => {
  rg.init(e, t);
  e._zod.pattern = tD;
  e._zod.values = new Set([null]);
  e._zod.parse = (t, r) => {
    let n = t.value;
    if (n !== null) {
      t.issues.push({
        expected: "null",
        code: "invalid_type",
        input: n,
        inst: e
      });
    }
    return t;
  };
});
let r1 = f("$ZodAny", (e, t) => {
  rg.init(e, t);
  e._zod.parse = e => e;
});
let r6 = f("$ZodUnknown", (e, t) => {
  rg.init(e, t);
  e._zod.parse = e => e;
});
let r4 = f("$ZodNever", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (t, r) => {
    t.issues.push({
      expected: "never",
      code: "invalid_type",
      input: t.value,
      inst: e
    });
    return t;
  };
});
let r2 = f("$ZodVoid", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (t, r) => {
    let n = t.value;
    if (n !== undefined) {
      t.issues.push({
        expected: "void",
        code: "invalid_type",
        input: n,
        inst: e
      });
    }
    return t;
  };
});
let r3 = f("$ZodDate", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (r, n) => {
    if (t.coerce) {
      try {
        r.value = new Date(r.value);
      } catch (e) {}
    }
    let i = r.value;
    let a = i instanceof Date;
    if (!a || !!Number.isNaN(i.getTime())) {
      r.issues.push({
        expected: "date",
        code: "invalid_type",
        input: i,
        ...(a ? {
          received: "Invalid Date"
        } : {}),
        inst: e
      });
    }
    return r;
  };
});
function r5(e, t, r) {
  if (e.issues.length) {
    t.issues.push(...ed(r, e.issues));
  }
  t.value[r] = e.value;
}
let r8 = f("$ZodArray", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (r, n) => {
    let i = r.value;
    if (!Array.isArray(i)) {
      r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: i,
        inst: e
      });
      return r;
    }
    r.value = Array(i.length);
    let a = [];
    for (let e = 0; e < i.length; e++) {
      let o = i[e];
      let s = t.element._zod.run({
        value: o,
        issues: []
      }, n);
      if (s instanceof Promise) {
        a.push(s.then(t => r5(t, r, e)));
      } else {
        r5(s, r, e);
      }
    }
    if (a.length) {
      return Promise.all(a).then(() => r);
    } else {
      return r;
    }
  };
});
function r9(e, t, r, n) {
  if (e.issues.length) {
    t.issues.push(...ed(r, e.issues));
  }
  if (e.value === undefined) {
    if (r in n) {
      t.value[r] = undefined;
    }
  } else {
    t.value[r] = e.value;
  }
}
function r7(e) {
  let t = Object.keys(e.shape);
  for (let r of t) {
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType")) {
      throw Error(`Invalid element at key "${r}": expected a Zod schema`);
    }
  }
  let r = ee(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function ne(e, t, r, n, i, a) {
  let o = [];
  let s = i.keySet;
  let u = i.catchall._zod;
  let l = u.def.type;
  for (let i of Object.keys(t)) {
    if (s.has(i)) {
      continue;
    }
    if (l === "never") {
      o.push(i);
      continue;
    }
    let a = u.run({
      value: t[i],
      issues: []
    }, n);
    if (a instanceof Promise) {
      e.push(a.then(e => r9(e, r, i, t)));
    } else {
      r9(a, r, i, t);
    }
  }
  if (o.length) {
    r.issues.push({
      code: "unrecognized_keys",
      keys: o,
      input: t,
      inst: a
    });
  }
  if (e.length) {
    return Promise.all(e).then(() => r);
  } else {
    return r;
  }
}
let nt = f("$ZodObject", (e, t) => {
  let r;
  rg.init(e, t);
  let n = Object.getOwnPropertyDescriptor(t, "shape");
  if (!n?.get) {
    let e = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        let r = {
          ...e
        };
        Object.defineProperty(t, "shape", {
          value: r
        });
        return r;
      }
    });
  }
  let i = I(() => r7(t));
  T(e._zod, "propValues", () => {
    let e = t.shape;
    let r = {};
    for (let t in e) {
      let n = e[t]._zod;
      if (n.values) {
        r[t] ??= new Set();
        for (let e of n.values) {
          r[t].add(e);
        }
      }
    }
    return r;
  });
  let a = Z;
  let o = t.catchall;
  e._zod.parse = (t, n) => {
    r ??= i.value;
    let s = t.value;
    if (!a(s)) {
      t.issues.push({
        expected: "object",
        code: "invalid_type",
        input: s,
        inst: e
      });
      return t;
    }
    t.value = {};
    let u = [];
    let l = r.shape;
    for (let e of r.keys) {
      let r = l[e]._zod.run({
        value: s[e],
        issues: []
      }, n);
      if (r instanceof Promise) {
        u.push(r.then(r => r9(r, t, e, s)));
      } else {
        r9(r, t, e, s);
      }
    }
    if (o) {
      return ne(u, s, t, n, i.value, e);
    } else if (u.length) {
      return Promise.all(u).then(() => t);
    } else {
      return t;
    }
  };
});
let nr = f("$ZodObjectJIT", (e, t) => {
  let r;
  let n;
  nt.init(e, t);
  let i = e._zod.parse;
  let a = I(() => r7(t));
  let o = e => {
    let t = new rm(["shape", "payload", "ctx"]);
    let r = a.value;
    let n = e => {
      let t = M(e);
      return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
    };
    t.write("const input = payload.value;");
    let i = Object.create(null);
    let o = 0;
    for (let e of r.keys) {
      i[e] = `key_${o++}`;
    }
    t.write("const newResult = {};");
    for (let e of r.keys) {
      let r = i[e];
      let a = M(e);
      t.write(`const ${r} = ${n(e)};`);
      t.write(`
        if (${r}.issues.length) {
          payload.issues = payload.issues.concat(${r}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${a}, ...iss.path] : [${a}]
          })));
        }
        
        
        if (${r}.value === undefined) {
          if (${a} in input) {
            newResult[${a}] = undefined;
          }
        } else {
          newResult[${a}] = ${r}.value;
        }
        
      `);
    }
    t.write("payload.value = newResult;");
    t.write("return payload;");
    let s = t.compile();
    return (t, r) => s(e, t, r);
  };
  let s = Z;
  let u = !y.jitless;
  let l = F;
  let c = u && l.value;
  let d = t.catchall;
  e._zod.parse = (l, f) => {
    n ??= a.value;
    let h = l.value;
    if (s(h)) {
      if (u && c && f?.async === false && f.jitless !== true) {
        r ||= o(t.shape);
        l = r(l, f);
        if (d) {
          return ne([], h, l, f, n, e);
        } else {
          return l;
        }
      } else {
        return i(l, f);
      }
    } else {
      l.issues.push({
        expected: "object",
        code: "invalid_type",
        input: h,
        inst: e
      });
      return l;
    }
  };
});
function nn(e, t, r, n) {
  for (let r of e) {
    if (r.issues.length === 0) {
      t.value = r.value;
      return t;
    }
  }
  let i = e.filter(e => !ec(e));
  if (i.length === 1) {
    t.value = i[0].value;
    return i[0];
  } else {
    t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: r,
      errors: e.map(e => e.issues.map(e => eh(e, n, config())))
    });
    return t;
  }
}
let ni = f("$ZodUnion", (e, t) => {
  rg.init(e, t);
  T(e._zod, "optin", () => t.options.some(e => e._zod.optin === "optional") ? "optional" : undefined);
  T(e._zod, "optout", () => t.options.some(e => e._zod.optout === "optional") ? "optional" : undefined);
  T(e._zod, "values", () => {
    if (t.options.every(e => e._zod.values)) {
      return new Set(t.options.flatMap(e => Array.from(e._zod.values)));
    }
  });
  T(e._zod, "pattern", () => {
    if (t.options.every(e => e._zod.pattern)) {
      let e = t.options.map(e => e._zod.pattern);
      return RegExp(`^(${e.map(e => E(e.source)).join("|")})$`);
    }
  });
  let r = t.options.length === 1;
  let n = t.options[0]._zod.run;
  e._zod.parse = (i, a) => {
    if (r) {
      return n(i, a);
    }
    let o = false;
    let s = [];
    for (let e of t.options) {
      let t = e._zod.run({
        value: i.value,
        issues: []
      }, a);
      if (t instanceof Promise) {
        s.push(t);
        o = true;
      } else {
        if (t.issues.length === 0) {
          return t;
        }
        s.push(t);
      }
    }
    if (o) {
      return Promise.all(s).then(t => nn(t, i, e, a));
    } else {
      return nn(s, i, e, a);
    }
  };
});
let na = f("$ZodDiscriminatedUnion", (e, t) => {
  ni.init(e, t);
  let r = e._zod.parse;
  T(e._zod, "propValues", () => {
    let e = {};
    for (let r of t.options) {
      let n = r._zod.propValues;
      if (!n || Object.keys(n).length === 0) {
        throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
      }
      for (let [t, r] of Object.entries(n)) {
        e[t] ||= new Set();
        for (let n of r) {
          e[t].add(n);
        }
      }
    }
    return e;
  });
  let n = I(() => {
    let e = t.options;
    let r = new Map();
    for (let n of e) {
      let e = n._zod.propValues?.[t.discriminator];
      if (!e || e.size === 0) {
        throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
      }
      for (let t of e) {
        if (r.has(t)) {
          throw Error(`Duplicate discriminator value "${String(t)}"`);
        }
        r.set(t, n);
      }
    }
    return r;
  });
  e._zod.parse = (i, a) => {
    let o = i.value;
    if (!Z(o)) {
      i.issues.push({
        code: "invalid_type",
        expected: "object",
        input: o,
        inst: e
      });
      return i;
    }
    let s = n.value.get(o?.[t.discriminator]);
    if (s) {
      return s._zod.run(i, a);
    } else if (t.unionFallback) {
      return r(i, a);
    } else {
      i.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        discriminator: t.discriminator,
        input: o,
        path: [t.discriminator],
        inst: e
      });
      return i;
    }
  };
});
let no = f("$ZodIntersection", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (e, r) => {
    let n = e.value;
    let i = t.left._zod.run({
      value: n,
      issues: []
    }, r);
    let a = t.right._zod.run({
      value: n,
      issues: []
    }, r);
    if (i instanceof Promise || a instanceof Promise) {
      return Promise.all([i, a]).then(([t, r]) => nu(e, t, r));
    } else {
      return nu(e, i, a);
    }
  };
});
function ns(e, t) {
  if (e === t || e instanceof Date && t instanceof Date && +e == +t) {
    return {
      valid: true,
      data: e
    };
  }
  if (B(e) && B(t)) {
    let r = Object.keys(t);
    let n = Object.keys(e).filter(e => r.indexOf(e) !== -1);
    let i = {
      ...e,
      ...t
    };
    for (let r of n) {
      let n = ns(e[r], t[r]);
      if (!n.valid) {
        return {
          valid: false,
          mergeErrorPath: [r, ...n.mergeErrorPath]
        };
      }
      i[r] = n.data;
    }
    return {
      valid: true,
      data: i
    };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) {
      return {
        valid: false,
        mergeErrorPath: []
      };
    }
    let r = [];
    for (let n = 0; n < e.length; n++) {
      let i = ns(e[n], t[n]);
      if (!i.valid) {
        return {
          valid: false,
          mergeErrorPath: [n, ...i.mergeErrorPath]
        };
      }
      r.push(i.data);
    }
    return {
      valid: true,
      data: r
    };
  }
  return {
    valid: false,
    mergeErrorPath: []
  };
}
function nu(e, t, r) {
  if (t.issues.length) {
    e.issues.push(...t.issues);
  }
  if (r.issues.length) {
    e.issues.push(...r.issues);
  }
  if (ec(e)) {
    return e;
  }
  let n = ns(t.value, r.value);
  if (!n.valid) {
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  }
  e.value = n.data;
  return e;
}
let nl = f("$ZodTuple", (e, t) => {
  rg.init(e, t);
  let r = t.items;
  let n = r.length - [...r].reverse().findIndex(e => e._zod.optin !== "optional");
  e._zod.parse = (i, a) => {
    let o = i.value;
    if (!Array.isArray(o)) {
      i.issues.push({
        input: o,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      });
      return i;
    }
    i.value = [];
    let s = [];
    if (!t.rest) {
      let t = o.length > r.length;
      let a = o.length < n - 1;
      if (t || a) {
        i.issues.push({
          ...(t ? {
            code: "too_big",
            maximum: r.length
          } : {
            code: "too_small",
            minimum: r.length
          }),
          input: o,
          inst: e,
          origin: "array"
        });
        return i;
      }
    }
    let u = -1;
    for (let e of r) {
      if (++u >= o.length && u >= n) {
        continue;
      }
      let t = e._zod.run({
        value: o[u],
        issues: []
      }, a);
      if (t instanceof Promise) {
        s.push(t.then(e => nc(e, i, u)));
      } else {
        nc(t, i, u);
      }
    }
    if (t.rest) {
      for (let e of o.slice(r.length)) {
        u++;
        let r = t.rest._zod.run({
          value: e,
          issues: []
        }, a);
        if (r instanceof Promise) {
          s.push(r.then(e => nc(e, i, u)));
        } else {
          nc(r, i, u);
        }
      }
    }
    if (s.length) {
      return Promise.all(s).then(() => i);
    } else {
      return i;
    }
  };
});
function nc(e, t, r) {
  if (e.issues.length) {
    t.issues.push(...ed(r, e.issues));
  }
  t.value[r] = e.value;
}
let nd = f("$ZodRecord", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (r, n) => {
    let i = r.value;
    if (!B(i)) {
      r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: i,
        inst: e
      });
      return r;
    }
    let a = [];
    if (t.keyType._zod.values) {
      let o;
      let s = t.keyType._zod.values;
      r.value = {};
      for (let e of s) {
        if (typeof e == "string" || typeof e == "number" || typeof e == "symbol") {
          let o = t.valueType._zod.run({
            value: i[e],
            issues: []
          }, n);
          if (o instanceof Promise) {
            a.push(o.then(t => {
              if (t.issues.length) {
                r.issues.push(...ed(e, t.issues));
              }
              r.value[e] = t.value;
            }));
          } else {
            if (o.issues.length) {
              r.issues.push(...ed(e, o.issues));
            }
            r.value[e] = o.value;
          }
        }
      }
      for (let e in i) {
        if (!s.has(e)) {
          (o = o ?? []).push(e);
        }
      }
      if (o && o.length > 0) {
        r.issues.push({
          code: "unrecognized_keys",
          input: i,
          inst: e,
          keys: o
        });
      }
    } else {
      r.value = {};
      for (let o of Reflect.ownKeys(i)) {
        if (o === "__proto__") {
          continue;
        }
        let s = t.keyType._zod.run({
          value: o,
          issues: []
        }, n);
        if (s instanceof Promise) {
          throw Error("Async schemas not supported in object keys currently");
        }
        if (s.issues.length) {
          r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: s.issues.map(e => eh(e, n, config())),
            input: o,
            path: [o],
            inst: e
          });
          r.value[s.value] = s.value;
          continue;
        }
        let u = t.valueType._zod.run({
          value: i[o],
          issues: []
        }, n);
        if (u instanceof Promise) {
          a.push(u.then(e => {
            if (e.issues.length) {
              r.issues.push(...ed(o, e.issues));
            }
            r.value[s.value] = e.value;
          }));
        } else {
          if (u.issues.length) {
            r.issues.push(...ed(o, u.issues));
          }
          r.value[s.value] = u.value;
        }
      }
    }
    if (a.length) {
      return Promise.all(a).then(() => r);
    } else {
      return r;
    }
  };
});
let nf = f("$ZodMap", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (r, n) => {
    let i = r.value;
    if (!(i instanceof Map)) {
      r.issues.push({
        expected: "map",
        code: "invalid_type",
        input: i,
        inst: e
      });
      return r;
    }
    let a = [];
    r.value = new Map();
    for (let [o, s] of i) {
      let u = t.keyType._zod.run({
        value: o,
        issues: []
      }, n);
      let l = t.valueType._zod.run({
        value: s,
        issues: []
      }, n);
      if (u instanceof Promise || l instanceof Promise) {
        a.push(Promise.all([u, l]).then(([t, a]) => {
          nh(t, a, r, o, i, e, n);
        }));
      } else {
        nh(u, l, r, o, i, e, n);
      }
    }
    if (a.length) {
      return Promise.all(a).then(() => r);
    } else {
      return r;
    }
  };
});
function nh(e, t, r, n, i, a, o) {
  if (e.issues.length) {
    if (G.has(typeof n)) {
      r.issues.push(...ed(n, e.issues));
    } else {
      r.issues.push({
        code: "invalid_key",
        origin: "map",
        input: i,
        inst: a,
        issues: e.issues.map(e => eh(e, o, config()))
      });
    }
  }
  if (t.issues.length) {
    if (G.has(typeof n)) {
      r.issues.push(...ed(n, t.issues));
    } else {
      r.issues.push({
        origin: "map",
        code: "invalid_element",
        input: i,
        inst: a,
        key: n,
        issues: t.issues.map(e => eh(e, o, config()))
      });
    }
  }
  r.value.set(e.value, t.value);
}
let np = f("$ZodSet", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (r, n) => {
    let i = r.value;
    if (!(i instanceof Set)) {
      r.issues.push({
        input: i,
        inst: e,
        expected: "set",
        code: "invalid_type"
      });
      return r;
    }
    let a = [];
    r.value = new Set();
    for (let e of i) {
      let i = t.valueType._zod.run({
        value: e,
        issues: []
      }, n);
      if (i instanceof Promise) {
        a.push(i.then(e => nm(e, r)));
      } else {
        nm(i, r);
      }
    }
    if (a.length) {
      return Promise.all(a).then(() => r);
    } else {
      return r;
    }
  };
});
function nm(e, t) {
  if (e.issues.length) {
    t.issues.push(...e.issues);
  }
  t.value.add(e.value);
}
let ny = f("$ZodEnum", (e, t) => {
  rg.init(e, t);
  let r = k(t.entries);
  let n = new Set(r);
  e._zod.values = n;
  e._zod.pattern = RegExp(`^(${r.filter(e => G.has(typeof e)).map(e => typeof e == "string" ? J(e) : e.toString()).join("|")})$`);
  e._zod.parse = (t, i) => {
    let a = t.value;
    if (!n.has(a)) {
      t.issues.push({
        code: "invalid_value",
        values: r,
        input: a,
        inst: e
      });
    }
    return t;
  };
});
let ng = f("$ZodLiteral", (e, t) => {
  rg.init(e, t);
  if (t.values.length === 0) {
    throw Error("Cannot create literal schema with no valid values");
  }
  e._zod.values = new Set(t.values);
  e._zod.pattern = RegExp(`^(${t.values.map(e => typeof e == "string" ? J(e) : e ? J(e.toString()) : String(e)).join("|")})$`);
  e._zod.parse = (r, n) => {
    let i = r.value;
    if (!e._zod.values.has(i)) {
      r.issues.push({
        code: "invalid_value",
        values: t.values,
        input: i,
        inst: e
      });
    }
    return r;
  };
});
let nb = f("$ZodFile", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (t, r) => {
    let n = t.value;
    if (!(n instanceof File)) {
      t.issues.push({
        expected: "file",
        code: "invalid_type",
        input: n,
        inst: e
      });
    }
    return t;
  };
});
let nv = f("$ZodTransform", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      throw new m(e.constructor.name);
    }
    let i = t.transform(r.value, r);
    if (n.async) {
      return (i instanceof Promise ? i : Promise.resolve(i)).then(e => {
        r.value = e;
        return r;
      });
    }
    if (i instanceof Promise) {
      throw new p();
    }
    r.value = i;
    return r;
  };
});
function nx(e, t) {
  if (e.issues.length && t === undefined) {
    return {
      issues: [],
      value: undefined
    };
  } else {
    return e;
  }
}
let nw = f("$ZodOptional", (e, t) => {
  rg.init(e, t);
  e._zod.optin = "optional";
  e._zod.optout = "optional";
  T(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, undefined]) : undefined);
  T(e._zod, "pattern", () => {
    let e = t.innerType._zod.pattern;
    if (e) {
      return RegExp(`^(${E(e.source)})?$`);
    } else {
      return undefined;
    }
  });
  e._zod.parse = (e, r) => {
    if (t.innerType._zod.optin === "optional") {
      let n = t.innerType._zod.run(e, r);
      if (n instanceof Promise) {
        return n.then(t => nx(t, e.value));
      } else {
        return nx(n, e.value);
      }
    }
    if (e.value === undefined) {
      return e;
    } else {
      return t.innerType._zod.run(e, r);
    }
  };
});
let n_ = f("$ZodNullable", (e, t) => {
  rg.init(e, t);
  T(e._zod, "optin", () => t.innerType._zod.optin);
  T(e._zod, "optout", () => t.innerType._zod.optout);
  T(e._zod, "pattern", () => {
    let e = t.innerType._zod.pattern;
    if (e) {
      return RegExp(`^(${E(e.source)}|null)$`);
    } else {
      return undefined;
    }
  });
  T(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : undefined);
  e._zod.parse = (e, r) => e.value === null ? e : t.innerType._zod.run(e, r);
});
let nk = f("$ZodDefault", (e, t) => {
  rg.init(e, t);
  e._zod.optin = "optional";
  T(e._zod, "values", () => t.innerType._zod.values);
  e._zod.parse = (e, r) => {
    if (r.direction === "backward") {
      return t.innerType._zod.run(e, r);
    }
    if (e.value === undefined) {
      e.value = t.defaultValue;
      return e;
    }
    let n = t.innerType._zod.run(e, r);
    if (n instanceof Promise) {
      return n.then(e => n$(e, t));
    } else {
      return n$(n, t);
    }
  };
});
function n$(e, t) {
  if (e.value === undefined) {
    e.value = t.defaultValue;
  }
  return e;
}
let nS = f("$ZodPrefault", (e, t) => {
  rg.init(e, t);
  e._zod.optin = "optional";
  T(e._zod, "values", () => t.innerType._zod.values);
  e._zod.parse = (e, r) => {
    if (r.direction !== "backward") {
      if (e.value === undefined) {
        e.value = t.defaultValue;
      }
    }
    return t.innerType._zod.run(e, r);
  };
});
let nI = f("$ZodNonOptional", (e, t) => {
  rg.init(e, t);
  T(e._zod, "values", () => {
    let e = t.innerType._zod.values;
    if (e) {
      return new Set([...e].filter(e => e !== undefined));
    } else {
      return undefined;
    }
  });
  e._zod.parse = (r, n) => {
    let i = t.innerType._zod.run(r, n);
    if (i instanceof Promise) {
      return i.then(t => nO(t, e));
    } else {
      return nO(i, e);
    }
  };
});
function nO(e, t) {
  if (!e.issues.length && e.value === undefined) {
    e.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: e.value,
      inst: t
    });
  }
  return e;
}
let nE = f("$ZodSuccess", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (e, r) => {
    if (r.direction === "backward") {
      throw new m("ZodSuccess");
    }
    let n = t.innerType._zod.run(e, r);
    if (n instanceof Promise) {
      return n.then(t => {
        e.value = t.issues.length === 0;
        return e;
      });
    } else {
      e.value = n.issues.length === 0;
      return e;
    }
  };
});
let nj = f("$ZodCatch", (e, t) => {
  rg.init(e, t);
  T(e._zod, "optin", () => t.innerType._zod.optin);
  T(e._zod, "optout", () => t.innerType._zod.optout);
  T(e._zod, "values", () => t.innerType._zod.values);
  e._zod.parse = (e, r) => {
    if (r.direction === "backward") {
      return t.innerType._zod.run(e, r);
    }
    let n = t.innerType._zod.run(e, r);
    if (n instanceof Promise) {
      return n.then(n => {
        e.value = n.value;
        if (n.issues.length) {
          e.value = t.catchValue({
            ...e,
            error: {
              issues: n.issues.map(e => eh(e, r, config()))
            },
            input: e.value
          });
          e.issues = [];
        }
        return e;
      });
    } else {
      e.value = n.value;
      if (n.issues.length) {
        e.value = t.catchValue({
          ...e,
          error: {
            issues: n.issues.map(e => eh(e, r, config()))
          },
          input: e.value
        });
        e.issues = [];
      }
      return e;
    }
  };
});
let nU = f("$ZodNaN", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (t, r) => {
    if (typeof t.value != "number" || !Number.isNaN(t.value)) {
      t.issues.push({
        input: t.value,
        inst: e,
        expected: "nan",
        code: "invalid_type"
      });
    }
    return t;
  };
});
let nT = f("$ZodPipe", (e, t) => {
  rg.init(e, t);
  T(e._zod, "values", () => t.in._zod.values);
  T(e._zod, "optin", () => t.in._zod.optin);
  T(e._zod, "optout", () => t.out._zod.optout);
  T(e._zod, "propValues", () => t.in._zod.propValues);
  e._zod.parse = (e, r) => {
    if (r.direction === "backward") {
      let n = t.out._zod.run(e, r);
      if (n instanceof Promise) {
        return n.then(e => nA(e, t.in, r));
      } else {
        return nA(n, t.in, r);
      }
    }
    let n = t.in._zod.run(e, r);
    if (n instanceof Promise) {
      return n.then(e => nA(e, t.out, r));
    } else {
      return nA(n, t.out, r);
    }
  };
});
function nA(e, t, r) {
  if (e.issues.length) {
    e.aborted = true;
    return e;
  } else {
    return t._zod.run({
      value: e.value,
      issues: e.issues
    }, r);
  }
}
let nD = f("$ZodCodec", (e, t) => {
  rg.init(e, t);
  T(e._zod, "values", () => t.in._zod.values);
  T(e._zod, "optin", () => t.in._zod.optin);
  T(e._zod, "optout", () => t.out._zod.optout);
  T(e._zod, "propValues", () => t.in._zod.propValues);
  e._zod.parse = (e, r) => {
    if ((r.direction || "forward") === "forward") {
      let n = t.in._zod.run(e, r);
      if (n instanceof Promise) {
        return n.then(e => nz(e, t, r));
      } else {
        return nz(n, t, r);
      }
    }
    {
      let n = t.out._zod.run(e, r);
      if (n instanceof Promise) {
        return n.then(e => nz(e, t, r));
      } else {
        return nz(n, t, r);
      }
    }
  };
});
function nz(e, t, r) {
  if (e.issues.length) {
    e.aborted = true;
    return e;
  }
  if ((r.direction || "forward") === "forward") {
    let n = t.transform(e.value, e);
    if (n instanceof Promise) {
      return n.then(n => nN(e, n, t.out, r));
    } else {
      return nN(e, n, t.out, r);
    }
  }
  {
    let n = t.reverseTransform(e.value, e);
    if (n instanceof Promise) {
      return n.then(n => nN(e, n, t.in, r));
    } else {
      return nN(e, n, t.in, r);
    }
  }
}
function nN(e, t, r, n) {
  if (e.issues.length) {
    e.aborted = true;
    return e;
  } else {
    return r._zod.run({
      value: t,
      issues: e.issues
    }, n);
  }
}
let nP = f("$ZodReadonly", (e, t) => {
  rg.init(e, t);
  T(e._zod, "propValues", () => t.innerType._zod.propValues);
  T(e._zod, "values", () => t.innerType._zod.values);
  T(e._zod, "optin", () => t.innerType._zod.optin);
  T(e._zod, "optout", () => t.innerType._zod.optout);
  e._zod.parse = (e, r) => {
    if (r.direction === "backward") {
      return t.innerType._zod.run(e, r);
    }
    let n = t.innerType._zod.run(e, r);
    if (n instanceof Promise) {
      return n.then(nR);
    } else {
      return nR(n);
    }
  };
});
function nR(e) {
  e.value = Object.freeze(e.value);
  return e;
}
let nC = f("$ZodTemplateLiteral", (e, t) => {
  rg.init(e, t);
  let r = [];
  for (let e of t.parts) {
    if (typeof e == "object" && e !== null) {
      if (!e._zod.pattern) {
        throw Error(`Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`);
      }
      let t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
      if (!t) {
        throw Error(`Invalid template literal part: ${e._zod.traits}`);
      }
      let n = +!!t.startsWith("^");
      let i = t.endsWith("$") ? t.length - 1 : t.length;
      r.push(t.slice(n, i));
    } else if (e === null || H.has(typeof e)) {
      r.push(J(`${e}`));
    } else {
      throw Error(`Invalid template literal part: ${e}`);
    }
  }
  e._zod.pattern = RegExp(`^${r.join("")}$`);
  e._zod.parse = (r, n) => {
    if (typeof r.value != "string") {
      r.issues.push({
        input: r.value,
        inst: e,
        expected: "template_literal",
        code: "invalid_type"
      });
    } else {
      e._zod.pattern.lastIndex = 0;
      if (!e._zod.pattern.test(r.value)) {
        r.issues.push({
          input: r.value,
          inst: e,
          code: "invalid_format",
          format: t.format ?? "template_literal",
          pattern: e._zod.pattern.source
        });
      }
    }
    return r;
  };
});
let nM = f("$ZodFunction", (e, t) => {
  rg.init(e, t);
  e._def = t;
  e._zod.def = t;
  e.implement = t => {
    if (typeof t != "function") {
      throw Error("implement() must be called with a function");
    }
    return function (...r) {
      let n = Reflect.apply(t, this, e._def.input ? ez(e._def.input, r) : r);
      if (e._def.output) {
        return ez(e._def.output, n);
      } else {
        return n;
      }
    };
  };
  e.implementAsync = t => {
    if (typeof t != "function") {
      throw Error("implementAsync() must be called with a function");
    }
    return async function (...r) {
      let n = e._def.input ? await eP(e._def.input, r) : r;
      let i = await Reflect.apply(t, this, n);
      if (e._def.output) {
        return await eP(e._def.output, i);
      } else {
        return i;
      }
    };
  };
  e._zod.parse = (t, r) => {
    if (typeof t.value != "function") {
      t.issues.push({
        code: "invalid_type",
        expected: "function",
        input: t.value,
        inst: e
      });
    } else if (e._def.output && e._def.output._zod.def.type === "promise") {
      t.value = e.implementAsync(t.value);
    } else {
      t.value = e.implement(t.value);
    }
    return t;
  };
  e.input = (...t) => {
    let r = e.constructor;
    return new r(Array.isArray(t[0]) ? {
      type: "function",
      input: new nl({
        type: "tuple",
        items: t[0],
        rest: t[1]
      }),
      output: e._def.output
    } : {
      type: "function",
      input: t[0],
      output: e._def.output
    });
  };
  e.output = t => new e.constructor({
    type: "function",
    input: e._def.input,
    output: t
  });
  return e;
});
let nL = f("$ZodPromise", (e, t) => {
  rg.init(e, t);
  e._zod.parse = (e, r) => Promise.resolve(e.value).then(e => t.innerType._zod.run({
    value: e,
    issues: []
  }, r));
});
let nZ = f("$ZodLazy", (e, t) => {
  rg.init(e, t);
  T(e._zod, "innerType", () => t.getter());
  T(e._zod, "pattern", () => e._zod.innerType._zod.pattern);
  T(e._zod, "propValues", () => e._zod.innerType._zod.propValues);
  T(e._zod, "optin", () => e._zod.innerType._zod.optin ?? undefined);
  T(e._zod, "optout", () => e._zod.innerType._zod.optout ?? undefined);
  e._zod.parse = (t, r) => e._zod.innerType._zod.run(t, r);
});
let nF = f("$ZodCustom", (e, t) => {
  t1.init(e, t);
  rg.init(e, t);
  e._zod.parse = (e, t) => e;
  e._zod.check = r => {
    let n = r.value;
    let i = t.fn(n);
    if (i instanceof Promise) {
      return i.then(t => nB(t, r, n, e));
    }
    nB(i, r, n, e);
  };
});
function nB(e, t, r, n) {
  if (!e) {
    let e = {
      code: "custom",
      input: r,
      inst: n,
      path: [...(n._zod.def.path ?? [])],
      continue: !n._zod.def.abort
    };
    if (n._zod.def.params) {
      e.params = n._zod.def.params;
    }
    t.issues.push(ey(e));
  }
}
let nq = () => {
  let e = {
    string: {
      unit: "حرف",
      verb: "أن يحوي"
    },
    file: {
      unit: "بايت",
      verb: "أن يحوي"
    },
    array: {
      unit: "عنصر",
      verb: "أن يحوي"
    },
    set: {
      unit: "عنصر",
      verb: "أن يحوي"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `مدخلات غير مقبولة: يفترض إدخال ${e.expected}، ولكن تم إدخال ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `مدخلات غير مقبولة: يفترض إدخال ${V(e.values[0])}`;
        }
        return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return ` أكبر من اللازم: يفترض أن تكون ${e.origin ?? "القيمة"} ${r} ${e.maximum.toString()} ${n.unit ?? "عنصر"}`;
          }
          return `أكبر من اللازم: يفترض أن تكون ${e.origin ?? "القيمة"} ${r} ${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${r} ${e.minimum.toString()} ${n.unit}`;
          }
          return `أصغر من اللازم: يفترض لـ ${e.origin} أن يكون ${r} ${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `نَص غير مقبول: يجب أن يبدأ بـ "${e.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `نَص غير مقبول: يجب أن ينتهي بـ "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `نَص غير مقبول: يجب أن يتضمَّن "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `نَص غير مقبول: يجب أن يطابق النمط ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} غير مقبول`;
        }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${e.divisor}`;
      case "unrecognized_keys":
        return `معرف${e.keys.length > 1 ? "ات" : ""} غريب${e.keys.length > 1 ? "ة" : ""}: ${$(e.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${e.origin}`;
      case "invalid_union":
      default:
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${e.origin}`;
    }
  };
};
function nW() {
  return {
    localeError: nq()
  };
}
let nY = () => {
  let e = {
    string: {
      unit: "simvol",
      verb: "olmalıdır"
    },
    file: {
      unit: "bayt",
      verb: "olmalıdır"
    },
    array: {
      unit: "element",
      verb: "olmalıdır"
    },
    set: {
      unit: "element",
      verb: "olmalıdır"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Yanlış dəyər: g\xf6zlənilən ${e.expected}, daxil olan ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Yanlış dəyər: g\xf6zlənilən ${V(e.values[0])}`;
        }
        return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${e.origin ?? "dəyər"} ${r}${e.maximum.toString()} ${n.unit ?? "element"}`;
          }
          return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${e.origin ?? "dəyər"} ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `\xc7ox ki\xe7ik: g\xf6zlənilən ${e.origin} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `\xc7ox ki\xe7ik: g\xf6zlənilən ${e.origin} ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Yanlış mətn: "${t.prefix}" ilə başlamalıdır`;
          }
          if (t.format === "ends_with") {
            return `Yanlış mətn: "${t.suffix}" ilə bitməlidir`;
          }
          if (t.format === "includes") {
            return `Yanlış mətn: "${t.includes}" daxil olmalıdır`;
          }
          if (t.format === "regex") {
            return `Yanlış mətn: ${t.pattern} şablonuna uyğun olmalıdır`;
          }
          return `Yanlış ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Yanlış ədəd: ${e.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan a\xe7ar${e.keys.length > 1 ? "lar" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `${e.origin} daxilində yanlış a\xe7ar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${e.origin} daxilində yanlış dəyər`;
      default:
        return `Yanlış dəyər`;
    }
  };
};
function nG() {
  return {
    localeError: nY()
  };
}
function nH(e, t, r, n) {
  let i = Math.abs(e);
  let a = i % 10;
  let o = i % 100;
  if (o >= 11 && o <= 19) {
    return n;
  } else if (a === 1) {
    return t;
  } else if (a >= 2 && a <= 4) {
    return r;
  } else {
    return n;
  }
}
let nJ = () => {
  let e = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "лік";
        }
      case "object":
        if (Array.isArray(e)) {
          return "масіў";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${e.expected}, атрымана ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Няправільны ўвод: чакалася ${V(e.values[0])}`;
        }
        return `Няправільны варыянт: чакаўся адзін з ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            let t = nH(Number(e.maximum), n.unit.one, n.unit.few, n.unit.many);
            return `Занадта вялікі: чакалася, што ${e.origin ?? "значэнне"} павінна ${n.verb} ${r}${e.maximum.toString()} ${t}`;
          }
          return `Занадта вялікі: чакалася, што ${e.origin ?? "значэнне"} павінна быць ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            let t = nH(Number(e.minimum), n.unit.one, n.unit.few, n.unit.many);
            return `Занадта малы: чакалася, што ${e.origin} павінна ${n.verb} ${r}${e.minimum.toString()} ${t}`;
          }
          return `Занадта малы: чакалася, што ${e.origin} павінна быць ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Няправільны радок: павінен пачынацца з "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Няправільны радок: павінен заканчвацца на "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Няправільны радок: павінен змяшчаць "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Няправільны радок: павінен адпавядаць шаблону ${t.pattern}`;
          }
          return `Няправільны ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${e.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${e.keys.length > 1 ? "ключы" : "ключ"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${e.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${e.origin}`;
      default:
        return `Няправільны ўвод`;
    }
  };
};
function nX() {
  return {
    localeError: nJ()
  };
}
let nQ = () => {
  let e = {
    string: {
      unit: "caràcters",
      verb: "contenir"
    },
    file: {
      unit: "bytes",
      verb: "contenir"
    },
    array: {
      unit: "elements",
      verb: "contenir"
    },
    set: {
      unit: "elements",
      verb: "contenir"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Tipus inv\xe0lid: s'esperava ${e.expected}, s'ha rebut ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Valor inv\xe0lid: s'esperava ${V(e.values[0])}`;
        }
        return `Opci\xf3 inv\xe0lida: s'esperava una de ${$(e.values, " o ")}`;
      case "too_big":
        {
          let r = e.inclusive ? "com a màxim" : "menys de";
          let n = t(e.origin);
          if (n) {
            return `Massa gran: s'esperava que ${e.origin ?? "el valor"} contingu\xe9s ${r} ${e.maximum.toString()} ${n.unit ?? "elements"}`;
          }
          return `Massa gran: s'esperava que ${e.origin ?? "el valor"} fos ${r} ${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? "com a mínim" : "més de";
          let n = t(e.origin);
          if (n) {
            return `Massa petit: s'esperava que ${e.origin} contingu\xe9s ${r} ${e.minimum.toString()} ${n.unit}`;
          }
          return `Massa petit: s'esperava que ${e.origin} fos ${r} ${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Format inv\xe0lid: ha de comen\xe7ar amb "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Format inv\xe0lid: ha d'acabar amb "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Format inv\xe0lid: ha d'incloure "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${t.pattern}`;
          }
          return `Format inv\xe0lid per a ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${e.divisor}`;
      case "unrecognized_keys":
        return `Clau${e.keys.length > 1 ? "s" : ""} no reconeguda${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xe0lida a ${e.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return `Element inv\xe0lid a ${e.origin}`;
      default:
        return `Entrada inv\xe0lida`;
    }
  };
};
function nK() {
  return {
    localeError: nQ()
  };
}
let nV = () => {
  let e = {
    string: {
      unit: "znaků",
      verb: "mít"
    },
    file: {
      unit: "bajtů",
      verb: "mít"
    },
    array: {
      unit: "prvků",
      verb: "mít"
    },
    set: {
      unit: "prvků",
      verb: "mít"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "číslo";
        }
      case "string":
        return "řetězec";
      case "boolean":
        return "boolean";
      case "bigint":
        return "bigint";
      case "function":
        return "funkce";
      case "symbol":
        return "symbol";
      case "undefined":
        return "undefined";
      case "object":
        if (Array.isArray(e)) {
          return "pole";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Neplatn\xfd vstup: oček\xe1v\xe1no ${e.expected}, obdrženo ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Neplatn\xfd vstup: oček\xe1v\xe1no ${V(e.values[0])}`;
        }
        return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Hodnota je př\xedliš velk\xe1: ${e.origin ?? "hodnota"} mus\xed m\xedt ${r}${e.maximum.toString()} ${n.unit ?? "prvků"}`;
          }
          return `Hodnota je př\xedliš velk\xe1: ${e.origin ?? "hodnota"} mus\xed b\xfdt ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Hodnota je př\xedliš mal\xe1: ${e.origin ?? "hodnota"} mus\xed m\xedt ${r}${e.minimum.toString()} ${n.unit ?? "prvků"}`;
          }
          return `Hodnota je př\xedliš mal\xe1: ${e.origin ?? "hodnota"} mus\xed b\xfdt ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Neplatn\xfd řetězec: mus\xed končit na "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Neplatn\xfd řetězec: mus\xed obsahovat "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${t.pattern}`;
          }
          return `Neplatn\xfd form\xe1t ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${e.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xe1m\xe9 kl\xedče: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xfd kl\xedč v ${e.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatn\xe1 hodnota v ${e.origin}`;
      default:
        return `Neplatn\xfd vstup`;
    }
  };
};
function n0() {
  return {
    localeError: nV()
  };
}
let n1 = () => {
  let e = {
    string: {
      unit: "tegn",
      verb: "havde"
    },
    file: {
      unit: "bytes",
      verb: "havde"
    },
    array: {
      unit: "elementer",
      verb: "indeholdt"
    },
    set: {
      unit: "elementer",
      verb: "indeholdt"
    }
  };
  let t = {
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  function r(t) {
    return e[t] ?? null;
  }
  function n(e) {
    return t[e] ?? e;
  }
  let i = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "tal";
        }
      case "object":
        if (Array.isArray(e)) {
          return "liste";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
        return "objekt";
    }
    return t;
  };
  let a = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Ugyldigt input: forventede ${n(e.expected)}, fik ${n(i(e.input))}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Ugyldig v\xe6rdi: forventede ${V(e.values[0])}`;
        }
        return `Ugyldigt valg: forventede en af f\xf8lgende ${$(e.values, "|")}`;
      case "too_big":
        {
          let t = e.inclusive ? "<=" : "<";
          let i = r(e.origin);
          let a = n(e.origin);
          if (i) {
            return `For stor: forventede ${a ?? "value"} ${i.verb} ${t} ${e.maximum.toString()} ${i.unit ?? "elementer"}`;
          }
          return `For stor: forventede ${a ?? "value"} havde ${t} ${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let t = e.inclusive ? ">=" : ">";
          let i = r(e.origin);
          let a = n(e.origin);
          if (i) {
            return `For lille: forventede ${a} ${i.verb} ${t} ${e.minimum.toString()} ${i.unit}`;
          }
          return `For lille: forventede ${a} havde ${t} ${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Ugyldig streng: skal starte med "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Ugyldig streng: skal ende med "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Ugyldig streng: skal indeholde "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Ugyldig streng: skal matche m\xf8nsteret ${t.pattern}`;
          }
          return `Ugyldig ${a[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Ugyldigt tal: skal v\xe6re deleligt med ${e.divisor}`;
      case "unrecognized_keys":
        return `${e.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xf8gle i ${e.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig v\xe6rdi i ${e.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function n6() {
  return {
    localeError: n1()
  };
}
let n4 = () => {
  let e = {
    string: {
      unit: "Zeichen",
      verb: "zu haben"
    },
    file: {
      unit: "Bytes",
      verb: "zu haben"
    },
    array: {
      unit: "Elemente",
      verb: "zu haben"
    },
    set: {
      unit: "Elemente",
      verb: "zu haben"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "Zahl";
        }
      case "object":
        if (Array.isArray(e)) {
          return "Array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Ung\xfcltige Eingabe: erwartet ${e.expected}, erhalten ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Ung\xfcltige Eingabe: erwartet ${V(e.values[0])}`;
        }
        return `Ung\xfcltige Option: erwartet eine von ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Zu gro\xdf: erwartet, dass ${e.origin ?? "Wert"} ${r}${e.maximum.toString()} ${n.unit ?? "Elemente"} hat`;
          }
          return `Zu gro\xdf: erwartet, dass ${e.origin ?? "Wert"} ${r}${e.maximum.toString()} ist`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Zu klein: erwartet, dass ${e.origin} ${r}${e.minimum.toString()} ${n.unit} hat`;
          }
          return `Zu klein: erwartet, dass ${e.origin} ${r}${e.minimum.toString()} ist`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Ung\xfcltiger String: muss mit "${t.prefix}" beginnen`;
          }
          if (t.format === "ends_with") {
            return `Ung\xfcltiger String: muss mit "${t.suffix}" enden`;
          }
          if (t.format === "includes") {
            return `Ung\xfcltiger String: muss "${t.includes}" enthalten`;
          }
          if (t.format === "regex") {
            return `Ung\xfcltiger String: muss dem Muster ${t.pattern} entsprechen`;
          }
          return `Ung\xfcltig: ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Ung\xfcltige Zahl: muss ein Vielfaches von ${e.divisor} sein`;
      case "unrecognized_keys":
        return `${e.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xfcltiger Schl\xfcssel in ${e.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ung\xfcltiger Wert in ${e.origin}`;
      default:
        return `Ung\xfcltige Eingabe`;
    }
  };
};
function n2() {
  return {
    localeError: n4()
  };
}
let n3 = e => {
  let t = typeof e;
  switch (t) {
    case "number":
      if (Number.isNaN(e)) {
        return "NaN";
      } else {
        return "number";
      }
    case "object":
      if (Array.isArray(e)) {
        return "array";
      }
      if (e === null) {
        return "null";
      }
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
        return e.constructor.name;
      }
  }
  return t;
};
let n5 = () => {
  let e = {
    string: {
      unit: "characters",
      verb: "to have"
    },
    file: {
      unit: "bytes",
      verb: "to have"
    },
    array: {
      unit: "items",
      verb: "to have"
    },
    set: {
      unit: "items",
      verb: "to have"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Invalid input: expected ${e.expected}, received ${n3(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Invalid input: expected ${V(e.values[0])}`;
        }
        return `Invalid option: expected one of ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Too big: expected ${e.origin ?? "value"} to have ${r}${e.maximum.toString()} ${n.unit ?? "elements"}`;
          }
          return `Too big: expected ${e.origin ?? "value"} to be ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Too small: expected ${e.origin} to have ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Too small: expected ${e.origin} to be ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Invalid string: must start with "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Invalid string: must end with "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Invalid string: must include "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Invalid string: must match pattern ${t.pattern}`;
          }
          return `Invalid ${r[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${e.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${e.origin}`;
      case "invalid_union":
      default:
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${e.origin}`;
    }
  };
};
function n8() {
  return {
    localeError: n5()
  };
}
let n9 = e => {
  let t = typeof e;
  switch (t) {
    case "number":
      if (Number.isNaN(e)) {
        return "NaN";
      } else {
        return "nombro";
      }
    case "object":
      if (Array.isArray(e)) {
        return "tabelo";
      }
      if (e === null) {
        return "senvalora";
      }
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
        return e.constructor.name;
      }
  }
  return t;
};
let n7 = () => {
  let e = {
    string: {
      unit: "karaktrojn",
      verb: "havi"
    },
    file: {
      unit: "bajtojn",
      verb: "havi"
    },
    array: {
      unit: "elementojn",
      verb: "havi"
    },
    set: {
      unit: "elementojn",
      verb: "havi"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Nevalida enigo: atendiĝis ${e.expected}, riceviĝis ${n9(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Nevalida enigo: atendiĝis ${V(e.values[0])}`;
        }
        return `Nevalida opcio: atendiĝis unu el ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Tro granda: atendiĝis ke ${e.origin ?? "valoro"} havu ${r}${e.maximum.toString()} ${n.unit ?? "elementojn"}`;
          }
          return `Tro granda: atendiĝis ke ${e.origin ?? "valoro"} havu ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Tro malgranda: atendiĝis ke ${e.origin} havu ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Tro malgranda: atendiĝis ke ${e.origin} estu ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Nevalida karaktraro: devas komenciĝi per "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Nevalida karaktraro: devas finiĝi per "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Nevalida karaktraro: devas inkluzivi "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Nevalida karaktraro: devas kongrui kun la modelo ${t.pattern}`;
          }
          return `Nevalida ${r[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${e.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${e.keys.length > 1 ? "j" : ""} ŝlosilo${e.keys.length > 1 ? "j" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${e.origin}`;
      case "invalid_union":
      default:
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${e.origin}`;
    }
  };
};
function ie() {
  return {
    localeError: n7()
  };
}
let it = () => {
  let e = {
    string: {
      unit: "caracteres",
      verb: "tener"
    },
    file: {
      unit: "bytes",
      verb: "tener"
    },
    array: {
      unit: "elementos",
      verb: "tener"
    },
    set: {
      unit: "elementos",
      verb: "tener"
    }
  };
  let t = {
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  function r(t) {
    return e[t] ?? null;
  }
  function n(e) {
    return t[e] ?? e;
  }
  let i = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype) {
          return e.constructor.name;
        }
        return "object";
    }
    return t;
  };
  let a = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Entrada inv\xe1lida: se esperaba ${n(e.expected)}, recibido ${n(i(e.input))}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Entrada inv\xe1lida: se esperaba ${V(e.values[0])}`;
        }
        return `Opci\xf3n inv\xe1lida: se esperaba una de ${$(e.values, "|")}`;
      case "too_big":
        {
          let t = e.inclusive ? "<=" : "<";
          let i = r(e.origin);
          let a = n(e.origin);
          if (i) {
            return `Demasiado grande: se esperaba que ${a ?? "valor"} tuviera ${t}${e.maximum.toString()} ${i.unit ?? "elementos"}`;
          }
          return `Demasiado grande: se esperaba que ${a ?? "valor"} fuera ${t}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let t = e.inclusive ? ">=" : ">";
          let i = r(e.origin);
          let a = n(e.origin);
          if (i) {
            return `Demasiado peque\xf1o: se esperaba que ${a} tuviera ${t}${e.minimum.toString()} ${i.unit}`;
          }
          return `Demasiado peque\xf1o: se esperaba que ${a} fuera ${t}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Cadena inv\xe1lida: debe comenzar con "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Cadena inv\xe1lida: debe terminar en "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Cadena inv\xe1lida: debe incluir "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${t.pattern}`;
          }
          return `Inv\xe1lido ${a[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${e.divisor}`;
      case "unrecognized_keys":
        return `Llave${e.keys.length > 1 ? "s" : ""} desconocida${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xe1lida en ${n(e.origin)}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inv\xe1lido en ${n(e.origin)}`;
      default:
        return `Entrada inv\xe1lida`;
    }
  };
};
function ir() {
  return {
    localeError: it()
  };
}
let ii = () => {
  let e = {
    string: {
      unit: "کاراکتر",
      verb: "داشته باشد"
    },
    file: {
      unit: "بایت",
      verb: "داشته باشد"
    },
    array: {
      unit: "آیتم",
      verb: "داشته باشد"
    },
    set: {
      unit: "آیتم",
      verb: "داشته باشد"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "عدد";
        }
      case "object":
        if (Array.isArray(e)) {
          return "آرایه";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `ورودی نامعتبر: می‌بایست ${e.expected} می‌بود، ${r(e.input)} دریافت شد`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `ورودی نامعتبر: می‌بایست ${V(e.values[0])} می‌بود`;
        }
        return `گزینه نامعتبر: می‌بایست یکی از ${$(e.values, "|")} می‌بود`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `خیلی بزرگ: ${e.origin ?? "مقدار"} باید ${r}${e.maximum.toString()} ${n.unit ?? "عنصر"} باشد`;
          }
          return `خیلی بزرگ: ${e.origin ?? "مقدار"} باید ${r}${e.maximum.toString()} باشد`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `خیلی کوچک: ${e.origin} باید ${r}${e.minimum.toString()} ${n.unit} باشد`;
          }
          return `خیلی کوچک: ${e.origin} باید ${r}${e.minimum.toString()} باشد`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `رشته نامعتبر: باید با "${t.prefix}" شروع شود`;
          }
          if (t.format === "ends_with") {
            return `رشته نامعتبر: باید با "${t.suffix}" تمام شود`;
          }
          if (t.format === "includes") {
            return `رشته نامعتبر: باید شامل "${t.includes}" باشد`;
          }
          if (t.format === "regex") {
            return `رشته نامعتبر: باید با الگوی ${t.pattern} مطابقت داشته باشد`;
          }
          return `${n[t.format] ?? e.format} نامعتبر`;
        }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${e.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${e.keys.length > 1 ? "های" : ""} ناشناس: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${e.origin}`;
      case "invalid_union":
      default:
        return `ورودی نامعتبر`;
      case "invalid_element":
        return `مقدار نامعتبر در ${e.origin}`;
    }
  };
};
function ia() {
  return {
    localeError: ii()
  };
}
let io = () => {
  let e = {
    string: {
      unit: "merkkiä",
      subject: "merkkijonon"
    },
    file: {
      unit: "tavua",
      subject: "tiedoston"
    },
    array: {
      unit: "alkiota",
      subject: "listan"
    },
    set: {
      unit: "alkiota",
      subject: "joukon"
    },
    number: {
      unit: "",
      subject: "luvun"
    },
    bigint: {
      unit: "",
      subject: "suuren kokonaisluvun"
    },
    int: {
      unit: "",
      subject: "kokonaisluvun"
    },
    date: {
      unit: "",
      subject: "päivämäärän"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${e.expected}, oli ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Virheellinen sy\xf6te: t\xe4ytyy olla ${V(e.values[0])}`;
        }
        return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Liian suuri: ${n.subject} t\xe4ytyy olla ${r}${e.maximum.toString()} ${n.unit}`.trim();
          }
          return `Liian suuri: arvon t\xe4ytyy olla ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Liian pieni: ${n.subject} t\xe4ytyy olla ${r}${e.minimum.toString()} ${n.unit}`.trim();
          }
          return `Liian pieni: arvon t\xe4ytyy olla ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${t.pattern}`;
          }
          return `Virheellinen ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Virheellinen luku: t\xe4ytyy olla luvun ${e.divisor} monikerta`;
      case "unrecognized_keys":
        return `${e.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return `Virheellinen sy\xf6te`;
    }
  };
};
function is() {
  return {
    localeError: io()
  };
}
let iu = () => {
  let e = {
    string: {
      unit: "caractères",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "éléments",
      verb: "avoir"
    },
    set: {
      unit: "éléments",
      verb: "avoir"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "nombre";
        }
      case "object":
        if (Array.isArray(e)) {
          return "tableau";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Entr\xe9e invalide : ${e.expected} attendu, ${r(e.input)} re\xe7u`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Entr\xe9e invalide : ${V(e.values[0])} attendu`;
        }
        return `Option invalide : une valeur parmi ${$(e.values, "|")} attendue`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Trop grand : ${e.origin ?? "valeur"} doit ${n.verb} ${r}${e.maximum.toString()} ${n.unit ?? "élément(s)"}`;
          }
          return `Trop grand : ${e.origin ?? "valeur"} doit \xeatre ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Trop petit : ${e.origin} doit ${n.verb} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Trop petit : ${e.origin} doit \xeatre ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Cha\xeene invalide : doit commencer par "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Cha\xeene invalide : doit se terminer par "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Cha\xeene invalide : doit inclure "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Cha\xeene invalide : doit correspondre au mod\xe8le ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} invalide`;
        }
      case "not_multiple_of":
        return `Nombre invalide : doit \xeatre un multiple de ${e.divisor}`;
      case "unrecognized_keys":
        return `Cl\xe9${e.keys.length > 1 ? "s" : ""} non reconnue${e.keys.length > 1 ? "s" : ""} : ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xe9 invalide dans ${e.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${e.origin}`;
      default:
        return `Entr\xe9e invalide`;
    }
  };
};
function il() {
  return {
    localeError: iu()
  };
}
let ic = () => {
  let e = {
    string: {
      unit: "caractères",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "éléments",
      verb: "avoir"
    },
    set: {
      unit: "éléments",
      verb: "avoir"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Entr\xe9e invalide : attendu ${e.expected}, re\xe7u ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Entr\xe9e invalide : attendu ${V(e.values[0])}`;
        }
        return `Option invalide : attendu l'une des valeurs suivantes ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "≤" : "<";
          let n = t(e.origin);
          if (n) {
            return `Trop grand : attendu que ${e.origin ?? "la valeur"} ait ${r}${e.maximum.toString()} ${n.unit}`;
          }
          return `Trop grand : attendu que ${e.origin ?? "la valeur"} soit ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? "≥" : ">";
          let n = t(e.origin);
          if (n) {
            return `Trop petit : attendu que ${e.origin} ait ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Trop petit : attendu que ${e.origin} soit ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Cha\xeene invalide : doit commencer par "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Cha\xeene invalide : doit se terminer par "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Cha\xeene invalide : doit inclure "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Cha\xeene invalide : doit correspondre au motif ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} invalide`;
        }
      case "not_multiple_of":
        return `Nombre invalide : doit \xeatre un multiple de ${e.divisor}`;
      case "unrecognized_keys":
        return `Cl\xe9${e.keys.length > 1 ? "s" : ""} non reconnue${e.keys.length > 1 ? "s" : ""} : ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xe9 invalide dans ${e.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${e.origin}`;
      default:
        return `Entr\xe9e invalide`;
    }
  };
};
function id() {
  return {
    localeError: ic()
  };
}
let ih = () => {
  let e = {
    string: {
      unit: "אותיות",
      verb: "לכלול"
    },
    file: {
      unit: "בייטים",
      verb: "לכלול"
    },
    array: {
      unit: "פריטים",
      verb: "לכלול"
    },
    set: {
      unit: "פריטים",
      verb: "לכלול"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "קלט",
    email: "כתובת אימייל",
    url: "כתובת רשת",
    emoji: "אימוג'י",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "תאריך וזמן ISO",
    date: "תאריך ISO",
    time: "זמן ISO",
    duration: "משך זמן ISO",
    ipv4: "כתובת IPv4",
    ipv6: "כתובת IPv6",
    cidrv4: "טווח IPv4",
    cidrv6: "טווח IPv6",
    base64: "מחרוזת בבסיס 64",
    base64url: "מחרוזת בבסיס 64 לכתובות רשת",
    json_string: "מחרוזת JSON",
    e164: "מספר E.164",
    jwt: "JWT",
    template_literal: "קלט"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `קלט לא תקין: צריך ${e.expected}, התקבל ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `קלט לא תקין: צריך ${V(e.values[0])}`;
        }
        return `קלט לא תקין: צריך אחת מהאפשרויות  ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `גדול מדי: ${e.origin ?? "value"} צריך להיות ${r}${e.maximum.toString()} ${n.unit ?? "elements"}`;
          }
          return `גדול מדי: ${e.origin ?? "value"} צריך להיות ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `קטן מדי: ${e.origin} צריך להיות ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `קטן מדי: ${e.origin} צריך להיות ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `מחרוזת לא תקינה: חייבת להתחיל ב"${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `מחרוזת לא תקינה: חייבת להסתיים ב "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `מחרוזת לא תקינה: חייבת לכלול "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} לא תקין`;
        }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${e.divisor}`;
      case "unrecognized_keys":
        return `מפתח${e.keys.length > 1 ? "ות" : ""} לא מזוה${e.keys.length > 1 ? "ים" : "ה"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `מפתח לא תקין ב${e.origin}`;
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${e.origin}`;
      default:
        return `קלט לא תקין`;
    }
  };
};
function ip() {
  return {
    localeError: ih()
  };
}
let im = () => {
  let e = {
    string: {
      unit: "karakter",
      verb: "legyen"
    },
    file: {
      unit: "byte",
      verb: "legyen"
    },
    array: {
      unit: "elem",
      verb: "legyen"
    },
    set: {
      unit: "elem",
      verb: "legyen"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "szám";
        }
      case "object":
        if (Array.isArray(e)) {
          return "tömb";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${e.expected}, a kapott \xe9rt\xe9k ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${V(e.values[0])}`;
        }
        return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `T\xfal nagy: ${e.origin ?? "érték"} m\xe9rete t\xfal nagy ${r}${e.maximum.toString()} ${n.unit ?? "elem"}`;
          }
          return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${e.origin ?? "érték"} t\xfal nagy: ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${e.origin} m\xe9rete t\xfal kicsi ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${e.origin} t\xfal kicsi ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `\xc9rv\xe9nytelen string: "${t.prefix}" \xe9rt\xe9kkel kell kezdődnie`;
          }
          if (t.format === "ends_with") {
            return `\xc9rv\xe9nytelen string: "${t.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`;
          }
          if (t.format === "includes") {
            return `\xc9rv\xe9nytelen string: "${t.includes}" \xe9rt\xe9ket kell tartalmaznia`;
          }
          if (t.format === "regex") {
            return `\xc9rv\xe9nytelen string: ${t.pattern} mint\xe1nak kell megfelelnie`;
          }
          return `\xc9rv\xe9nytelen ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `\xc9rv\xe9nytelen sz\xe1m: ${e.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `\xc9rv\xe9nytelen kulcs ${e.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${e.origin}`;
      default:
        return `\xc9rv\xe9nytelen bemenet`;
    }
  };
};
function iy() {
  return {
    localeError: im()
  };
}
let ig = () => {
  let e = {
    string: {
      unit: "karakter",
      verb: "memiliki"
    },
    file: {
      unit: "byte",
      verb: "memiliki"
    },
    array: {
      unit: "item",
      verb: "memiliki"
    },
    set: {
      unit: "item",
      verb: "memiliki"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${e.expected}, diterima ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Input tidak valid: diharapkan ${V(e.values[0])}`;
        }
        return `Pilihan tidak valid: diharapkan salah satu dari ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Terlalu besar: diharapkan ${e.origin ?? "value"} memiliki ${r}${e.maximum.toString()} ${n.unit ?? "elemen"}`;
          }
          return `Terlalu besar: diharapkan ${e.origin ?? "value"} menjadi ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Terlalu kecil: diharapkan ${e.origin} memiliki ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Terlalu kecil: diharapkan ${e.origin} menjadi ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `String tidak valid: harus dimulai dengan "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `String tidak valid: harus berakhir dengan "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `String tidak valid: harus menyertakan "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `String tidak valid: harus sesuai pola ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} tidak valid`;
        }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${e.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${e.origin}`;
      case "invalid_union":
      default:
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${e.origin}`;
    }
  };
};
function ib() {
  return {
    localeError: ig()
  };
}
let iv = e => {
  let t = typeof e;
  switch (t) {
    case "number":
      if (Number.isNaN(e)) {
        return "NaN";
      } else {
        return "númer";
      }
    case "object":
      if (Array.isArray(e)) {
        return "fylki";
      }
      if (e === null) {
        return "null";
      }
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
        return e.constructor.name;
      }
  }
  return t;
};
let ix = () => {
  let e = {
    string: {
      unit: "stafi",
      verb: "að hafa"
    },
    file: {
      unit: "bæti",
      verb: "að hafa"
    },
    array: {
      unit: "hluti",
      verb: "að hafa"
    },
    set: {
      unit: "hluti",
      verb: "að hafa"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Rangt gildi: \xde\xfa sl\xf3st inn ${iv(e.input)} \xfear sem \xe1 a\xf0 vera ${e.expected}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Rangt gildi: gert r\xe1\xf0 fyrir ${V(e.values[0])}`;
        }
        return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${e.origin ?? "gildi"} hafi ${r}${e.maximum.toString()} ${n.unit ?? "hluti"}`;
          }
          return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${e.origin ?? "gildi"} s\xe9 ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${e.origin} hafi ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${e.origin} s\xe9 ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${t.pattern}`;
          }
          return `Rangt ${r[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${e.divisor}`;
      case "unrecognized_keys":
        return `\xd3\xfeekkt ${e.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill \xed ${e.origin}`;
      case "invalid_union":
      default:
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi \xed ${e.origin}`;
    }
  };
};
function iw() {
  return {
    localeError: ix()
  };
}
let i_ = () => {
  let e = {
    string: {
      unit: "caratteri",
      verb: "avere"
    },
    file: {
      unit: "byte",
      verb: "avere"
    },
    array: {
      unit: "elementi",
      verb: "avere"
    },
    set: {
      unit: "elementi",
      verb: "avere"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "numero";
        }
      case "object":
        if (Array.isArray(e)) {
          return "vettore";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Input non valido: atteso ${e.expected}, ricevuto ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Input non valido: atteso ${V(e.values[0])}`;
        }
        return `Opzione non valida: atteso uno tra ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Troppo grande: ${e.origin ?? "valore"} deve avere ${r}${e.maximum.toString()} ${n.unit ?? "elementi"}`;
          }
          return `Troppo grande: ${e.origin ?? "valore"} deve essere ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Troppo piccolo: ${e.origin} deve avere ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Troppo piccolo: ${e.origin} deve essere ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Stringa non valida: deve iniziare con "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Stringa non valida: deve terminare con "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Stringa non valida: deve includere "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Stringa non valida: deve corrispondere al pattern ${t.pattern}`;
          }
          return `Invalid ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${e.divisor}`;
      case "unrecognized_keys":
        return `Chiav${e.keys.length > 1 ? "i" : "e"} non riconosciut${e.keys.length > 1 ? "e" : "a"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${e.origin}`;
      case "invalid_union":
      default:
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${e.origin}`;
    }
  };
};
function ik() {
  return {
    localeError: i_()
  };
}
let i$ = () => {
  let e = {
    string: {
      unit: "文字",
      verb: "である"
    },
    file: {
      unit: "バイト",
      verb: "である"
    },
    array: {
      unit: "要素",
      verb: "である"
    },
    set: {
      unit: "要素",
      verb: "である"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "数値";
        }
      case "object":
        if (Array.isArray(e)) {
          return "配列";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `無効な入力: ${e.expected}が期待されましたが、${r(e.input)}が入力されました`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `無効な入力: ${V(e.values[0])}が期待されました`;
        }
        return `無効な選択: ${$(e.values, "、")}のいずれかである必要があります`;
      case "too_big":
        {
          let r = e.inclusive ? "以下である" : "より小さい";
          let n = t(e.origin);
          if (n) {
            return `大きすぎる値: ${e.origin ?? "値"}は${e.maximum.toString()}${n.unit ?? "要素"}${r}必要があります`;
          }
          return `大きすぎる値: ${e.origin ?? "値"}は${e.maximum.toString()}${r}必要があります`;
        }
      case "too_small":
        {
          let r = e.inclusive ? "以上である" : "より大きい";
          let n = t(e.origin);
          if (n) {
            return `小さすぎる値: ${e.origin}は${e.minimum.toString()}${n.unit}${r}必要があります`;
          }
          return `小さすぎる値: ${e.origin}は${e.minimum.toString()}${r}必要があります`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `無効な文字列: "${t.prefix}"で始まる必要があります`;
          }
          if (t.format === "ends_with") {
            return `無効な文字列: "${t.suffix}"で終わる必要があります`;
          }
          if (t.format === "includes") {
            return `無効な文字列: "${t.includes}"を含む必要があります`;
          }
          if (t.format === "regex") {
            return `無効な文字列: パターン${t.pattern}に一致する必要があります`;
          }
          return `無効な${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `無効な数値: ${e.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${e.keys.length > 1 ? "群" : ""}: ${$(e.keys, "、")}`;
      case "invalid_key":
        return `${e.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${e.origin}内の無効な値`;
      default:
        return `無効な入力`;
    }
  };
};
function iS() {
  return {
    localeError: i$()
  };
}
let iI = e => {
  let t = typeof e;
  switch (t) {
    case "number":
      if (Number.isNaN(e)) {
        return "NaN";
      } else {
        return "რიცხვი";
      }
    case "object":
      if (Array.isArray(e)) {
        return "მასივი";
      }
      if (e === null) {
        return "null";
      }
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
        return e.constructor.name;
      }
  }
  return {
    string: "სტრინგი",
    boolean: "ბულეანი",
    undefined: "undefined",
    bigint: "bigint",
    symbol: "symbol",
    function: "ფუნქცია"
  }[t] ?? t;
};
let iO = () => {
  let e = {
    string: {
      unit: "სიმბოლო",
      verb: "უნდა შეიცავდეს"
    },
    file: {
      unit: "ბაიტი",
      verb: "უნდა შეიცავდეს"
    },
    array: {
      unit: "ელემენტი",
      verb: "უნდა შეიცავდეს"
    },
    set: {
      unit: "ელემენტი",
      verb: "უნდა შეიცავდეს"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `არასწორი შეყვანა: მოსალოდნელი ${e.expected}, მიღებული ${iI(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `არასწორი შეყვანა: მოსალოდნელი ${V(e.values[0])}`;
        }
        return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${$(e.values, "|")}-დან`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? "მნიშვნელობა"} ${n.verb} ${r}${e.maximum.toString()} ${n.unit}`;
          }
          return `ზედმეტად დიდი: მოსალოდნელი ${e.origin ?? "მნიშვნელობა"} იყოს ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `ზედმეტად პატარა: მოსალოდნელი ${e.origin} ${n.verb} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `ზედმეტად პატარა: მოსალოდნელი ${e.origin} იყოს ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `არასწორი სტრინგი: უნდა იწყებოდეს "${t.prefix}"-ით`;
          }
          if (t.format === "ends_with") {
            return `არასწორი სტრინგი: უნდა მთავრდებოდეს "${t.suffix}"-ით`;
          }
          if (t.format === "includes") {
            return `არასწორი სტრინგი: უნდა შეიცავდეს "${t.includes}"-ს`;
          }
          if (t.format === "regex") {
            return `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${t.pattern}`;
          }
          return `არასწორი ${r[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${e.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${e.keys.length > 1 ? "ები" : "ი"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${e.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${e.origin}-ში`;
      default:
        return `არასწორი შეყვანა`;
    }
  };
};
function iE() {
  return {
    localeError: iO()
  };
}
let ij = () => {
  let e = {
    string: {
      unit: "តួអក្សរ",
      verb: "គួរមាន"
    },
    file: {
      unit: "បៃ",
      verb: "គួរមាន"
    },
    array: {
      unit: "ធាតុ",
      verb: "គួរមាន"
    },
    set: {
      unit: "ធាតុ",
      verb: "គួរមាន"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "មិនមែនជាលេខ (NaN)";
        } else {
          return "លេខ";
        }
      case "object":
        if (Array.isArray(e)) {
          return "អារេ (Array)";
        }
        if (e === null) {
          return "គ្មានតម្លៃ (null)";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${e.expected} ប៉ុន្តែទទួលបាន ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${V(e.values[0])}`;
        }
        return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `ធំពេក៖ ត្រូវការ ${e.origin ?? "តម្លៃ"} ${r} ${e.maximum.toString()} ${n.unit ?? "ធាតុ"}`;
          }
          return `ធំពេក៖ ត្រូវការ ${e.origin ?? "តម្លៃ"} ${r} ${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `តូចពេក៖ ត្រូវការ ${e.origin} ${r} ${e.minimum.toString()} ${n.unit}`;
          }
          return `តូចពេក៖ ត្រូវការ ${e.origin} ${r} ${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${t.pattern}`;
          }
          return `មិនត្រឹមត្រូវ៖ ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${e.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
      case "invalid_union":
      default:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${e.origin}`;
    }
  };
};
function iU() {
  return {
    localeError: ij()
  };
}
function iT() {
  return iU();
}
let iA = () => {
  let e = {
    string: {
      unit: "문자",
      verb: "to have"
    },
    file: {
      unit: "바이트",
      verb: "to have"
    },
    array: {
      unit: "개",
      verb: "to have"
    },
    set: {
      unit: "개",
      verb: "to have"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `잘못된 입력: 예상 타입은 ${e.expected}, 받은 타입은 ${r(e.input)}입니다`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `잘못된 입력: 값은 ${V(e.values[0])} 이어야 합니다`;
        }
        return `잘못된 옵션: ${$(e.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big":
        {
          let r = e.inclusive ? "이하" : "미만";
          let n = r === "미만" ? "이어야 합니다" : "여야 합니다";
          let i = t(e.origin);
          let a = i?.unit ?? "요소";
          if (i) {
            return `${e.origin ?? "값"}이 너무 큽니다: ${e.maximum.toString()}${a} ${r}${n}`;
          }
          return `${e.origin ?? "값"}이 너무 큽니다: ${e.maximum.toString()} ${r}${n}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? "이상" : "초과";
          let n = r === "이상" ? "이어야 합니다" : "여야 합니다";
          let i = t(e.origin);
          let a = i?.unit ?? "요소";
          if (i) {
            return `${e.origin ?? "값"}이 너무 작습니다: ${e.minimum.toString()}${a} ${r}${n}`;
          }
          return `${e.origin ?? "값"}이 너무 작습니다: ${e.minimum.toString()} ${r}${n}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `잘못된 문자열: "${t.prefix}"(으)로 시작해야 합니다`;
          }
          if (t.format === "ends_with") {
            return `잘못된 문자열: "${t.suffix}"(으)로 끝나야 합니다`;
          }
          if (t.format === "includes") {
            return `잘못된 문자열: "${t.includes}"을(를) 포함해야 합니다`;
          }
          if (t.format === "regex") {
            return `잘못된 문자열: 정규식 ${t.pattern} 패턴과 일치해야 합니다`;
          }
          return `잘못된 ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `잘못된 숫자: ${e.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${e.origin}`;
      case "invalid_union":
      default:
        return `잘못된 입력`;
      case "invalid_element":
        return `잘못된 값: ${e.origin}`;
    }
  };
};
function iD() {
  return {
    localeError: iA()
  };
}
let iz = e => iN(typeof e, e);
let iN = (e, t) => {
  switch (e) {
    case "number":
      if (Number.isNaN(t)) {
        return "NaN";
      } else {
        return "skaičius";
      }
    case "bigint":
      return "sveikasis skaičius";
    case "string":
      return "eilutė";
    case "boolean":
      return "loginė reikšmė";
    case "undefined":
    case "void":
      return "neapibrėžta reikšmė";
    case "function":
      return "funkcija";
    case "symbol":
      return "simbolis";
    case "object":
      if (t === undefined) {
        return "nežinomas objektas";
      }
      if (t === null) {
        return "nulinė reikšmė";
      }
      if (Array.isArray(t)) {
        return "masyvas";
      }
      if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor) {
        return t.constructor.name;
      }
      return "objektas";
    case "null":
      return "nulinė reikšmė";
  }
  return e;
};
let iP = e => e.charAt(0).toUpperCase() + e.slice(1);
function iR(e) {
  let t = Math.abs(e);
  let r = t % 10;
  let n = t % 100;
  if (n >= 11 && n <= 19 || r === 0) {
    return "many";
  } else if (r === 1) {
    return "one";
  } else {
    return "few";
  }
}
let iC = () => {
  let e = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function t(t, r, n, i) {
    let a = e[t] ?? null;
    if (a === null) {
      return a;
    } else {
      return {
        unit: a.unit[r],
        verb: a.verb[i][n ? "inclusive" : "notInclusive"]
      };
    }
  }
  let r = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Gautas tipas ${iz(e.input)}, o tikėtasi - ${iN(e.expected)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Privalo būti ${V(e.values[0])}`;
        }
        return `Privalo būti vienas iš ${$(e.values, "|")} pasirinkimų`;
      case "too_big":
        {
          let r = iN(e.origin);
          let n = t(e.origin, iR(Number(e.maximum)), e.inclusive ?? false, "smaller");
          if (n?.verb) {
            return `${iP(r ?? e.origin ?? "reikšmė")} ${n.verb} ${e.maximum.toString()} ${n.unit ?? "elementų"}`;
          }
          let i = e.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
          return `${iP(r ?? e.origin ?? "reikšmė")} turi būti ${i} ${e.maximum.toString()} ${n?.unit}`;
        }
      case "too_small":
        {
          let r = iN(e.origin);
          let n = t(e.origin, iR(Number(e.minimum)), e.inclusive ?? false, "bigger");
          if (n?.verb) {
            return `${iP(r ?? e.origin ?? "reikšmė")} ${n.verb} ${e.minimum.toString()} ${n.unit ?? "elementų"}`;
          }
          let i = e.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
          return `${iP(r ?? e.origin ?? "reikšmė")} turi būti ${i} ${e.minimum.toString()} ${n?.unit}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Eilutė privalo prasidėti "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Eilutė privalo pasibaigti "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Eilutė privalo įtraukti "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Eilutė privalo atitikti ${t.pattern}`;
          }
          return `Neteisingas ${r[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Skaičius privalo būti ${e.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${e.keys.length > 1 ? "i" : "as"} rakt${e.keys.length > 1 ? "ai" : "as"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
      default:
        return "Klaidinga įvestis";
      case "invalid_element":
        {
          let t = iN(e.origin);
          return `${iP(t ?? e.origin ?? "reikšmė")} turi klaidingą įvestį`;
        }
    }
  };
};
function iM() {
  return {
    localeError: iC()
  };
}
let iL = () => {
  let e = {
    string: {
      unit: "знаци",
      verb: "да имаат"
    },
    file: {
      unit: "бајти",
      verb: "да имаат"
    },
    array: {
      unit: "ставки",
      verb: "да имаат"
    },
    set: {
      unit: "ставки",
      verb: "да имаат"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "број";
        }
      case "object":
        if (Array.isArray(e)) {
          return "низа";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Грешен внес: се очекува ${e.expected}, примено ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Invalid input: expected ${V(e.values[0])}`;
        }
        return `Грешана опција: се очекува една ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Премногу голем: се очекува ${e.origin ?? "вредноста"} да има ${r}${e.maximum.toString()} ${n.unit ?? "елементи"}`;
          }
          return `Премногу голем: се очекува ${e.origin ?? "вредноста"} да биде ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Премногу мал: се очекува ${e.origin} да има ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Премногу мал: се очекува ${e.origin} да биде ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Неважечка низа: мора да започнува со "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Неважечка низа: мора да завршува со "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Неважечка низа: мора да вклучува "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Неважечка низа: мора да одгоара на патернот ${t.pattern}`;
          }
          return `Invalid ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${e.divisor}`;
      case "unrecognized_keys":
        return `${e.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${e.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${e.origin}`;
      default:
        return `Грешен внес`;
    }
  };
};
function iZ() {
  return {
    localeError: iL()
  };
}
let iF = () => {
  let e = {
    string: {
      unit: "aksara",
      verb: "mempunyai"
    },
    file: {
      unit: "bait",
      verb: "mempunyai"
    },
    array: {
      unit: "elemen",
      verb: "mempunyai"
    },
    set: {
      unit: "elemen",
      verb: "mempunyai"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "nombor";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${e.expected}, diterima ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Input tidak sah: dijangka ${V(e.values[0])}`;
        }
        return `Pilihan tidak sah: dijangka salah satu daripada ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Terlalu besar: dijangka ${e.origin ?? "nilai"} ${n.verb} ${r}${e.maximum.toString()} ${n.unit ?? "elemen"}`;
          }
          return `Terlalu besar: dijangka ${e.origin ?? "nilai"} adalah ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Terlalu kecil: dijangka ${e.origin} ${n.verb} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Terlalu kecil: dijangka ${e.origin} adalah ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `String tidak sah: mesti bermula dengan "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `String tidak sah: mesti berakhir dengan "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `String tidak sah: mesti mengandungi "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `String tidak sah: mesti sepadan dengan corak ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} tidak sah`;
        }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${e.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${e.origin}`;
      case "invalid_union":
      default:
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${e.origin}`;
    }
  };
};
function iB() {
  return {
    localeError: iF()
  };
}
let iq = () => {
  let e = {
    string: {
      unit: "tekens"
    },
    file: {
      unit: "bytes"
    },
    array: {
      unit: "elementen"
    },
    set: {
      unit: "elementen"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "getal";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${e.expected}, ontving ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Ongeldige invoer: verwacht ${V(e.values[0])}`;
        }
        return `Ongeldige optie: verwacht \xe9\xe9n van ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Te lang: verwacht dat ${e.origin ?? "waarde"} ${r}${e.maximum.toString()} ${n.unit ?? "elementen"} bevat`;
          }
          return `Te lang: verwacht dat ${e.origin ?? "waarde"} ${r}${e.maximum.toString()} is`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Te kort: verwacht dat ${e.origin} ${r}${e.minimum.toString()} ${n.unit} bevat`;
          }
          return `Te kort: verwacht dat ${e.origin} ${r}${e.minimum.toString()} is`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Ongeldige tekst: moet met "${t.prefix}" beginnen`;
          }
          if (t.format === "ends_with") {
            return `Ongeldige tekst: moet op "${t.suffix}" eindigen`;
          }
          if (t.format === "includes") {
            return `Ongeldige tekst: moet "${t.includes}" bevatten`;
          }
          if (t.format === "regex") {
            return `Ongeldige tekst: moet overeenkomen met patroon ${t.pattern}`;
          }
          return `Ongeldig: ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${e.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${e.origin}`;
      case "invalid_union":
      default:
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${e.origin}`;
    }
  };
};
function iW() {
  return {
    localeError: iq()
  };
}
let iY = () => {
  let e = {
    string: {
      unit: "tegn",
      verb: "å ha"
    },
    file: {
      unit: "bytes",
      verb: "å ha"
    },
    array: {
      unit: "elementer",
      verb: "å inneholde"
    },
    set: {
      unit: "elementer",
      verb: "å inneholde"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "tall";
        }
      case "object":
        if (Array.isArray(e)) {
          return "liste";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${e.expected}, fikk ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Ugyldig verdi: forventet ${V(e.values[0])}`;
        }
        return `Ugyldig valg: forventet en av ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `For stor(t): forventet ${e.origin ?? "value"} til \xe5 ha ${r}${e.maximum.toString()} ${n.unit ?? "elementer"}`;
          }
          return `For stor(t): forventet ${e.origin ?? "value"} til \xe5 ha ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `For lite(n): forventet ${e.origin} til \xe5 ha ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `For lite(n): forventet ${e.origin} til \xe5 ha ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Ugyldig streng: m\xe5 starte med "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Ugyldig streng: m\xe5 ende med "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Ugyldig streng: m\xe5 inneholde "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${t.pattern}`;
          }
          return `Ugyldig ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${e.divisor}`;
      case "unrecognized_keys":
        return `${e.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xf8kkel i ${e.origin}`;
      case "invalid_union":
      default:
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${e.origin}`;
    }
  };
};
function iG() {
  return {
    localeError: iY()
  };
}
let iH = () => {
  let e = {
    string: {
      unit: "harf",
      verb: "olmalıdır"
    },
    file: {
      unit: "bayt",
      verb: "olmalıdır"
    },
    array: {
      unit: "unsur",
      verb: "olmalıdır"
    },
    set: {
      unit: "unsur",
      verb: "olmalıdır"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "numara";
        }
      case "object":
        if (Array.isArray(e)) {
          return "saf";
        }
        if (e === null) {
          return "gayb";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `F\xe2sit giren: umulan ${e.expected}, alınan ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `F\xe2sit giren: umulan ${V(e.values[0])}`;
        }
        return `F\xe2sit tercih: m\xfbteberler ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Fazla b\xfcy\xfck: ${e.origin ?? "value"}, ${r}${e.maximum.toString()} ${n.unit ?? "elements"} sahip olmalıydı.`;
          }
          return `Fazla b\xfcy\xfck: ${e.origin ?? "value"}, ${r}${e.maximum.toString()} olmalıydı.`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Fazla k\xfc\xe7\xfck: ${e.origin}, ${r}${e.minimum.toString()} ${n.unit} sahip olmalıydı.`;
          }
          return `Fazla k\xfc\xe7\xfck: ${e.origin}, ${r}${e.minimum.toString()} olmalıydı.`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `F\xe2sit metin: "${t.prefix}" ile başlamalı.`;
          }
          if (t.format === "ends_with") {
            return `F\xe2sit metin: "${t.suffix}" ile bitmeli.`;
          }
          if (t.format === "includes") {
            return `F\xe2sit metin: "${t.includes}" ihtiv\xe2 etmeli.`;
          }
          if (t.format === "regex") {
            return `F\xe2sit metin: ${t.pattern} nakşına uymalı.`;
          }
          return `F\xe2sit ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `F\xe2sit sayı: ${e.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `${e.origin} i\xe7in tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${e.origin} i\xe7in tanınmayan kıymet var.`;
      default:
        return `Kıymet tanınamadı.`;
    }
  };
};
function iJ() {
  return {
    localeError: iH()
  };
}
let iX = () => {
  let e = {
    string: {
      unit: "توکي",
      verb: "ولري"
    },
    file: {
      unit: "بایټس",
      verb: "ولري"
    },
    array: {
      unit: "توکي",
      verb: "ولري"
    },
    set: {
      unit: "توکي",
      verb: "ولري"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "عدد";
        }
      case "object":
        if (Array.isArray(e)) {
          return "ارې";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `ناسم ورودي: باید ${e.expected} وای, مګر ${r(e.input)} ترلاسه شو`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `ناسم ورودي: باید ${V(e.values[0])} وای`;
        }
        return `ناسم انتخاب: باید یو له ${$(e.values, "|")} څخه وای`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `ډیر لوی: ${e.origin ?? "ارزښت"} باید ${r}${e.maximum.toString()} ${n.unit ?? "عنصرونه"} ولري`;
          }
          return `ډیر لوی: ${e.origin ?? "ارزښت"} باید ${r}${e.maximum.toString()} وي`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `ډیر کوچنی: ${e.origin} باید ${r}${e.minimum.toString()} ${n.unit} ولري`;
          }
          return `ډیر کوچنی: ${e.origin} باید ${r}${e.minimum.toString()} وي`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `ناسم متن: باید د "${t.prefix}" سره پیل شي`;
          }
          if (t.format === "ends_with") {
            return `ناسم متن: باید د "${t.suffix}" سره پای ته ورسيږي`;
          }
          if (t.format === "includes") {
            return `ناسم متن: باید "${t.includes}" ولري`;
          }
          if (t.format === "regex") {
            return `ناسم متن: باید د ${t.pattern} سره مطابقت ولري`;
          }
          return `${n[t.format] ?? e.format} ناسم دی`;
        }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${e.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${e.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${e.origin} کې`;
      case "invalid_union":
      default:
        return `ناسمه ورودي`;
      case "invalid_element":
        return `ناسم عنصر په ${e.origin} کې`;
    }
  };
};
function iQ() {
  return {
    localeError: iX()
  };
}
let iK = () => {
  let e = {
    string: {
      unit: "znaków",
      verb: "mieć"
    },
    file: {
      unit: "bajtów",
      verb: "mieć"
    },
    array: {
      unit: "elementów",
      verb: "mieć"
    },
    set: {
      unit: "elementów",
      verb: "mieć"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "liczba";
        }
      case "object":
        if (Array.isArray(e)) {
          return "tablica";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Nieprawidłowe dane wejściowe: oczekiwano ${e.expected}, otrzymano ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Nieprawidłowe dane wejściowe: oczekiwano ${V(e.values[0])}`;
        }
        return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Za duża wartość: oczekiwano, że ${e.origin ?? "wartość"} będzie mieć ${r}${e.maximum.toString()} ${n.unit ?? "elementów"}`;
          }
          return `Zbyt duż(y/a/e): oczekiwano, że ${e.origin ?? "wartość"} będzie wynosić ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Za mała wartość: oczekiwano, że ${e.origin ?? "wartość"} będzie mieć ${r}${e.minimum.toString()} ${n.unit ?? "elementów"}`;
          }
          return `Zbyt mał(y/a/e): oczekiwano, że ${e.origin ?? "wartość"} będzie wynosić ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${t.pattern}`;
          }
          return `Nieprawidłow(y/a/e) ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${e.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${e.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${e.origin}`;
      default:
        return `Nieprawidłowe dane wejściowe`;
    }
  };
};
function iV() {
  return {
    localeError: iK()
  };
}
let i0 = () => {
  let e = {
    string: {
      unit: "caracteres",
      verb: "ter"
    },
    file: {
      unit: "bytes",
      verb: "ter"
    },
    array: {
      unit: "itens",
      verb: "ter"
    },
    set: {
      unit: "itens",
      verb: "ter"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "número";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "nulo";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Tipo inv\xe1lido: esperado ${e.expected}, recebido ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Entrada inv\xe1lida: esperado ${V(e.values[0])}`;
        }
        return `Op\xe7\xe3o inv\xe1lida: esperada uma das ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Muito grande: esperado que ${e.origin ?? "valor"} tivesse ${r}${e.maximum.toString()} ${n.unit ?? "elementos"}`;
          }
          return `Muito grande: esperado que ${e.origin ?? "valor"} fosse ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Muito pequeno: esperado que ${e.origin} tivesse ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Muito pequeno: esperado que ${e.origin} fosse ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Texto inv\xe1lido: deve come\xe7ar com "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Texto inv\xe1lido: deve terminar com "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Texto inv\xe1lido: deve incluir "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} inv\xe1lido`;
        }
      case "not_multiple_of":
        return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${e.divisor}`;
      case "unrecognized_keys":
        return `Chave${e.keys.length > 1 ? "s" : ""} desconhecida${e.keys.length > 1 ? "s" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xe1lida em ${e.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inv\xe1lido em ${e.origin}`;
      default:
        return `Campo inv\xe1lido`;
    }
  };
};
function i1() {
  return {
    localeError: i0()
  };
}
function i6(e, t, r, n) {
  let i = Math.abs(e);
  let a = i % 10;
  let o = i % 100;
  if (o >= 11 && o <= 19) {
    return n;
  } else if (a === 1) {
    return t;
  } else if (a >= 2 && a <= 4) {
    return r;
  } else {
    return n;
  }
}
let i4 = () => {
  let e = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "число";
        }
      case "object":
        if (Array.isArray(e)) {
          return "массив";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Неверный ввод: ожидалось ${e.expected}, получено ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Неверный ввод: ожидалось ${V(e.values[0])}`;
        }
        return `Неверный вариант: ожидалось одно из ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            let t = i6(Number(e.maximum), n.unit.one, n.unit.few, n.unit.many);
            return `Слишком большое значение: ожидалось, что ${e.origin ?? "значение"} будет иметь ${r}${e.maximum.toString()} ${t}`;
          }
          return `Слишком большое значение: ожидалось, что ${e.origin ?? "значение"} будет ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            let t = i6(Number(e.minimum), n.unit.one, n.unit.few, n.unit.many);
            return `Слишком маленькое значение: ожидалось, что ${e.origin} будет иметь ${r}${e.minimum.toString()} ${t}`;
          }
          return `Слишком маленькое значение: ожидалось, что ${e.origin} будет ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Неверная строка: должна начинаться с "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Неверная строка: должна заканчиваться на "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Неверная строка: должна содержать "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Неверная строка: должна соответствовать шаблону ${t.pattern}`;
          }
          return `Неверный ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${e.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${e.keys.length > 1 ? "ые" : "ый"} ключ${e.keys.length > 1 ? "и" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${e.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${e.origin}`;
      default:
        return `Неверные входные данные`;
    }
  };
};
function i2() {
  return {
    localeError: i4()
  };
}
let i3 = () => {
  let e = {
    string: {
      unit: "znakov",
      verb: "imeti"
    },
    file: {
      unit: "bajtov",
      verb: "imeti"
    },
    array: {
      unit: "elementov",
      verb: "imeti"
    },
    set: {
      unit: "elementov",
      verb: "imeti"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "število";
        }
      case "object":
        if (Array.isArray(e)) {
          return "tabela";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Neveljaven vnos: pričakovano ${e.expected}, prejeto ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Neveljaven vnos: pričakovano ${V(e.values[0])}`;
        }
        return `Neveljavna možnost: pričakovano eno izmed ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Preveliko: pričakovano, da bo ${e.origin ?? "vrednost"} imelo ${r}${e.maximum.toString()} ${n.unit ?? "elementov"}`;
          }
          return `Preveliko: pričakovano, da bo ${e.origin ?? "vrednost"} ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Premajhno: pričakovano, da bo ${e.origin} imelo ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Premajhno: pričakovano, da bo ${e.origin} ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Neveljaven niz: mora se začeti z "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Neveljaven niz: mora se končati z "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Neveljaven niz: mora vsebovati "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Neveljaven niz: mora ustrezati vzorcu ${t.pattern}`;
          }
          return `Neveljaven ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${e.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${e.keys.length > 1 ? "i ključi" : " ključ"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${e.origin}`;
      case "invalid_union":
      default:
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${e.origin}`;
    }
  };
};
function i5() {
  return {
    localeError: i3()
  };
}
let i8 = () => {
  let e = {
    string: {
      unit: "tecken",
      verb: "att ha"
    },
    file: {
      unit: "bytes",
      verb: "att ha"
    },
    array: {
      unit: "objekt",
      verb: "att innehålla"
    },
    set: {
      unit: "objekt",
      verb: "att innehålla"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "antal";
        }
      case "object":
        if (Array.isArray(e)) {
          return "lista";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Ogiltig inmatning: f\xf6rv\xe4ntat ${e.expected}, fick ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Ogiltig inmatning: f\xf6rv\xe4ntat ${V(e.values[0])}`;
        }
        return `Ogiltigt val: f\xf6rv\xe4ntade en av ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `F\xf6r stor(t): f\xf6rv\xe4ntade ${e.origin ?? "värdet"} att ha ${r}${e.maximum.toString()} ${n.unit ?? "element"}`;
          }
          return `F\xf6r stor(t): f\xf6rv\xe4ntat ${e.origin ?? "värdet"} att ha ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `F\xf6r lite(t): f\xf6rv\xe4ntade ${e.origin ?? "värdet"} att ha ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `F\xf6r lite(t): f\xf6rv\xe4ntade ${e.origin ?? "värdet"} att ha ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Ogiltig str\xe4ng: m\xe5ste sluta med "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${t.pattern}"`;
          }
          return `Ogiltig(t) ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xe5ste vara en multipel av ${e.divisor}`;
      case "unrecognized_keys":
        return `${e.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${e.origin ?? "värdet"}`;
      case "invalid_union":
      default:
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xe4rde i ${e.origin ?? "värdet"}`;
    }
  };
};
function i9() {
  return {
    localeError: i8()
  };
}
let i7 = () => {
  let e = {
    string: {
      unit: "எழுத்துக்கள்",
      verb: "கொண்டிருக்க வேண்டும்"
    },
    file: {
      unit: "பைட்டுகள்",
      verb: "கொண்டிருக்க வேண்டும்"
    },
    array: {
      unit: "உறுப்புகள்",
      verb: "கொண்டிருக்க வேண்டும்"
    },
    set: {
      unit: "உறுப்புகள்",
      verb: "கொண்டிருக்க வேண்டும்"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "எண் அல்லாதது";
        } else {
          return "எண்";
        }
      case "object":
        if (Array.isArray(e)) {
          return "அணி";
        }
        if (e === null) {
          return "வெறுமை";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${e.expected}, பெறப்பட்டது ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${V(e.values[0])}`;
        }
        return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${$(e.values, "|")} இல் ஒன்று`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? "மதிப்பு"} ${r}${e.maximum.toString()} ${n.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
          }
          return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${e.origin ?? "மதிப்பு"} ${r}${e.maximum.toString()} ஆக இருக்க வேண்டும்`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${r}${e.minimum.toString()} ${n.unit} ஆக இருக்க வேண்டும்`;
          }
          return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${e.origin} ${r}${e.minimum.toString()} ஆக இருக்க வேண்டும்`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `தவறான சரம்: "${t.prefix}" இல் தொடங்க வேண்டும்`;
          }
          if (t.format === "ends_with") {
            return `தவறான சரம்: "${t.suffix}" இல் முடிவடைய வேண்டும்`;
          }
          if (t.format === "includes") {
            return `தவறான சரம்: "${t.includes}" ஐ உள்ளடக்க வேண்டும்`;
          }
          if (t.format === "regex") {
            return `தவறான சரம்: ${t.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
          }
          return `தவறான ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `தவறான எண்: ${e.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${e.keys.length > 1 ? "கள்" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `${e.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${e.origin} இல் தவறான மதிப்பு`;
      default:
        return `தவறான உள்ளீடு`;
    }
  };
};
function ae() {
  return {
    localeError: i7()
  };
}
let at = () => {
  let e = {
    string: {
      unit: "ตัวอักษร",
      verb: "ควรมี"
    },
    file: {
      unit: "ไบต์",
      verb: "ควรมี"
    },
    array: {
      unit: "รายการ",
      verb: "ควรมี"
    },
    set: {
      unit: "รายการ",
      verb: "ควรมี"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "ไม่ใช่ตัวเลข (NaN)";
        } else {
          return "ตัวเลข";
        }
      case "object":
        if (Array.isArray(e)) {
          return "อาร์เรย์ (Array)";
        }
        if (e === null) {
          return "ไม่มีค่า (null)";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${e.expected} แต่ได้รับ ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `ค่าไม่ถูกต้อง: ควรเป็น ${V(e.values[0])}`;
        }
        return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "ไม่เกิน" : "น้อยกว่า";
          let n = t(e.origin);
          if (n) {
            return `เกินกำหนด: ${e.origin ?? "ค่า"} ควรมี${r} ${e.maximum.toString()} ${n.unit ?? "รายการ"}`;
          }
          return `เกินกำหนด: ${e.origin ?? "ค่า"} ควรมี${r} ${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? "อย่างน้อย" : "มากกว่า";
          let n = t(e.origin);
          if (n) {
            return `น้อยกว่ากำหนด: ${e.origin} ควรมี${r} ${e.minimum.toString()} ${n.unit}`;
          }
          return `น้อยกว่ากำหนด: ${e.origin} ควรมี${r} ${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${t.includes}" อยู่ในข้อความ`;
          }
          if (t.format === "regex") {
            return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${t.pattern}`;
          }
          return `รูปแบบไม่ถูกต้อง: ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${e.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${e.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${e.origin}`;
      default:
        return `ข้อมูลไม่ถูกต้อง`;
    }
  };
};
function ar() {
  return {
    localeError: at()
  };
}
let an = e => {
  let t = typeof e;
  switch (t) {
    case "number":
      if (Number.isNaN(e)) {
        return "NaN";
      } else {
        return "number";
      }
    case "object":
      if (Array.isArray(e)) {
        return "array";
      }
      if (e === null) {
        return "null";
      }
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
        return e.constructor.name;
      }
  }
  return t;
};
let ai = () => {
  let e = {
    string: {
      unit: "karakter",
      verb: "olmalı"
    },
    file: {
      unit: "bayt",
      verb: "olmalı"
    },
    array: {
      unit: "öğe",
      verb: "olmalı"
    },
    set: {
      unit: "öğe",
      verb: "olmalı"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Ge\xe7ersiz değer: beklenen ${e.expected}, alınan ${an(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Ge\xe7ersiz değer: beklenen ${V(e.values[0])}`;
        }
        return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `\xc7ok b\xfcy\xfck: beklenen ${e.origin ?? "değer"} ${r}${e.maximum.toString()} ${n.unit ?? "öğe"}`;
          }
          return `\xc7ok b\xfcy\xfck: beklenen ${e.origin ?? "değer"} ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `\xc7ok k\xfc\xe7\xfck: beklenen ${e.origin} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `\xc7ok k\xfc\xe7\xfck: beklenen ${e.origin} ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Ge\xe7ersiz metin: "${t.prefix}" ile başlamalı`;
          }
          if (t.format === "ends_with") {
            return `Ge\xe7ersiz metin: "${t.suffix}" ile bitmeli`;
          }
          if (t.format === "includes") {
            return `Ge\xe7ersiz metin: "${t.includes}" i\xe7ermeli`;
          }
          if (t.format === "regex") {
            return `Ge\xe7ersiz metin: ${t.pattern} desenine uymalı`;
          }
          return `Ge\xe7ersiz ${r[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Ge\xe7ersiz sayı: ${e.divisor} ile tam b\xf6l\xfcnebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${e.keys.length > 1 ? "lar" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `${e.origin} i\xe7inde ge\xe7ersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${e.origin} i\xe7inde ge\xe7ersiz değer`;
      default:
        return `Ge\xe7ersiz değer`;
    }
  };
};
function aa() {
  return {
    localeError: ai()
  };
}
let ao = () => {
  let e = {
    string: {
      unit: "символів",
      verb: "матиме"
    },
    file: {
      unit: "байтів",
      verb: "матиме"
    },
    array: {
      unit: "елементів",
      verb: "матиме"
    },
    set: {
      unit: "елементів",
      verb: "матиме"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "число";
        }
      case "object":
        if (Array.isArray(e)) {
          return "масив";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Неправильні вхідні дані: очікується ${e.expected}, отримано ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Неправильні вхідні дані: очікується ${V(e.values[0])}`;
        }
        return `Неправильна опція: очікується одне з ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Занадто велике: очікується, що ${e.origin ?? "значення"} ${n.verb} ${r}${e.maximum.toString()} ${n.unit ?? "елементів"}`;
          }
          return `Занадто велике: очікується, що ${e.origin ?? "значення"} буде ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Занадто мале: очікується, що ${e.origin} ${n.verb} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Занадто мале: очікується, що ${e.origin} буде ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Неправильний рядок: повинен починатися з "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Неправильний рядок: повинен закінчуватися на "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Неправильний рядок: повинен містити "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Неправильний рядок: повинен відповідати шаблону ${t.pattern}`;
          }
          return `Неправильний ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${e.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${e.keys.length > 1 ? "і" : ""}: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${e.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${e.origin}`;
      default:
        return `Неправильні вхідні дані`;
    }
  };
};
function as() {
  return {
    localeError: ao()
  };
}
function au() {
  return as();
}
let al = () => {
  let e = {
    string: {
      unit: "حروف",
      verb: "ہونا"
    },
    file: {
      unit: "بائٹس",
      verb: "ہونا"
    },
    array: {
      unit: "آئٹمز",
      verb: "ہونا"
    },
    set: {
      unit: "آئٹمز",
      verb: "ہونا"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "نمبر";
        }
      case "object":
        if (Array.isArray(e)) {
          return "آرے";
        }
        if (e === null) {
          return "نل";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `غلط ان پٹ: ${e.expected} متوقع تھا، ${r(e.input)} موصول ہوا`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `غلط ان پٹ: ${V(e.values[0])} متوقع تھا`;
        }
        return `غلط آپشن: ${$(e.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `بہت بڑا: ${e.origin ?? "ویلیو"} کے ${r}${e.maximum.toString()} ${n.unit ?? "عناصر"} ہونے متوقع تھے`;
          }
          return `بہت بڑا: ${e.origin ?? "ویلیو"} کا ${r}${e.maximum.toString()} ہونا متوقع تھا`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `بہت چھوٹا: ${e.origin} کے ${r}${e.minimum.toString()} ${n.unit} ہونے متوقع تھے`;
          }
          return `بہت چھوٹا: ${e.origin} کا ${r}${e.minimum.toString()} ہونا متوقع تھا`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `غلط سٹرنگ: "${t.prefix}" سے شروع ہونا چاہیے`;
          }
          if (t.format === "ends_with") {
            return `غلط سٹرنگ: "${t.suffix}" پر ختم ہونا چاہیے`;
          }
          if (t.format === "includes") {
            return `غلط سٹرنگ: "${t.includes}" شامل ہونا چاہیے`;
          }
          if (t.format === "regex") {
            return `غلط سٹرنگ: پیٹرن ${t.pattern} سے میچ ہونا چاہیے`;
          }
          return `غلط ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `غلط نمبر: ${e.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${e.keys.length > 1 ? "ز" : ""}: ${$(e.keys, "، ")}`;
      case "invalid_key":
        return `${e.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${e.origin} میں غلط ویلیو`;
      default:
        return `غلط ان پٹ`;
    }
  };
};
function ac() {
  return {
    localeError: al()
  };
}
let ad = () => {
  let e = {
    string: {
      unit: "ký tự",
      verb: "có"
    },
    file: {
      unit: "byte",
      verb: "có"
    },
    array: {
      unit: "phần tử",
      verb: "có"
    },
    set: {
      unit: "phần tử",
      verb: "có"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "số";
        }
      case "object":
        if (Array.isArray(e)) {
          return "mảng";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${e.expected}, nhận được ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${V(e.values[0])}`;
        }
        return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `Qu\xe1 lớn: mong đợi ${e.origin ?? "giá trị"} ${n.verb} ${r}${e.maximum.toString()} ${n.unit ?? "phần tử"}`;
          }
          return `Qu\xe1 lớn: mong đợi ${e.origin ?? "giá trị"} ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `Qu\xe1 nhỏ: mong đợi ${e.origin} ${n.verb} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `Qu\xe1 nhỏ: mong đợi ${e.origin} ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${t.pattern}`;
          }
          return `${n[t.format] ?? e.format} kh\xf4ng hợp lệ`;
        }
      case "not_multiple_of":
        return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${e.divisor}`;
      case "unrecognized_keys":
        return `Kh\xf3a kh\xf4ng được nhận dạng: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xf3a kh\xf4ng hợp lệ trong ${e.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${e.origin}`;
      default:
        return `Đầu v\xe0o kh\xf4ng hợp lệ`;
    }
  };
};
function af() {
  return {
    localeError: ad()
  };
}
let ah = () => {
  let e = {
    string: {
      unit: "字符",
      verb: "包含"
    },
    file: {
      unit: "字节",
      verb: "包含"
    },
    array: {
      unit: "项",
      verb: "包含"
    },
    set: {
      unit: "项",
      verb: "包含"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "非数字(NaN)";
        } else {
          return "数字";
        }
      case "object":
        if (Array.isArray(e)) {
          return "数组";
        }
        if (e === null) {
          return "空值(null)";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `无效输入：期望 ${e.expected}，实际接收 ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `无效输入：期望 ${V(e.values[0])}`;
        }
        return `无效选项：期望以下之一 ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `数值过大：期望 ${e.origin ?? "值"} ${r}${e.maximum.toString()} ${n.unit ?? "个元素"}`;
          }
          return `数值过大：期望 ${e.origin ?? "值"} ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `数值过小：期望 ${e.origin} ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `数值过小：期望 ${e.origin} ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `无效字符串：必须以 "${t.prefix}" 开头`;
          }
          if (t.format === "ends_with") {
            return `无效字符串：必须以 "${t.suffix}" 结尾`;
          }
          if (t.format === "includes") {
            return `无效字符串：必须包含 "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `无效字符串：必须满足正则表达式 ${t.pattern}`;
          }
          return `无效${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `无效数字：必须是 ${e.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `${e.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${e.origin} 中包含无效值(value)`;
      default:
        return `无效输入`;
    }
  };
};
function ap() {
  return {
    localeError: ah()
  };
}
let am = () => {
  let e = {
    string: {
      unit: "字元",
      verb: "擁有"
    },
    file: {
      unit: "位元組",
      verb: "擁有"
    },
    array: {
      unit: "項目",
      verb: "擁有"
    },
    set: {
      unit: "項目",
      verb: "擁有"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "number";
        }
      case "object":
        if (Array.isArray(e)) {
          return "array";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `無效的輸入值：預期為 ${e.expected}，但收到 ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `無效的輸入值：預期為 ${V(e.values[0])}`;
        }
        return `無效的選項：預期為以下其中之一 ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `數值過大：預期 ${e.origin ?? "值"} 應為 ${r}${e.maximum.toString()} ${n.unit ?? "個元素"}`;
          }
          return `數值過大：預期 ${e.origin ?? "值"} 應為 ${r}${e.maximum.toString()}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `數值過小：預期 ${e.origin} 應為 ${r}${e.minimum.toString()} ${n.unit}`;
          }
          return `數值過小：預期 ${e.origin} 應為 ${r}${e.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `無效的字串：必須以 "${t.prefix}" 開頭`;
          }
          if (t.format === "ends_with") {
            return `無效的字串：必須以 "${t.suffix}" 結尾`;
          }
          if (t.format === "includes") {
            return `無效的字串：必須包含 "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `無效的字串：必須符合格式 ${t.pattern}`;
          }
          return `無效的 ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `無效的數字：必須為 ${e.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${e.keys.length > 1 ? "們" : ""}：${$(e.keys, "、")}`;
      case "invalid_key":
        return `${e.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${e.origin} 中有無效的值`;
      default:
        return `無效的輸入值`;
    }
  };
};
function ay() {
  return {
    localeError: am()
  };
}
let ag = () => {
  let e = {
    string: {
      unit: "àmi",
      verb: "ní"
    },
    file: {
      unit: "bytes",
      verb: "ní"
    },
    array: {
      unit: "nkan",
      verb: "ní"
    },
    set: {
      unit: "nkan",
      verb: "ní"
    }
  };
  function t(t) {
    return e[t] ?? null;
  }
  let r = e => {
    let t = typeof e;
    switch (t) {
      case "number":
        if (Number.isNaN(e)) {
          return "NaN";
        } else {
          return "nọ́mbà";
        }
      case "object":
        if (Array.isArray(e)) {
          return "akopọ";
        }
        if (e === null) {
          return "null";
        }
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor) {
          return e.constructor.name;
        }
    }
    return t;
  };
  let n = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  };
  return e => {
    switch (e.code) {
      case "invalid_type":
        return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${e.expected}, \xe0mọ̀ a r\xed ${r(e.input)}`;
      case "invalid_value":
        if (e.values.length === 1) {
          return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${V(e.values[0])}`;
        }
        return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${$(e.values, "|")}`;
      case "too_big":
        {
          let r = e.inclusive ? "<=" : "<";
          let n = t(e.origin);
          if (n) {
            return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${e.origin ?? "iye"} ${n.verb} ${r}${e.maximum} ${n.unit}`;
          }
          return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${r}${e.maximum}`;
        }
      case "too_small":
        {
          let r = e.inclusive ? ">=" : ">";
          let n = t(e.origin);
          if (n) {
            return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${e.origin} ${n.verb} ${r}${e.minimum} ${n.unit}`;
          }
          return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${r}${e.minimum}`;
        }
      case "invalid_format":
        {
          let t = e;
          if (t.format === "starts_with") {
            return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${t.prefix}"`;
          }
          if (t.format === "ends_with") {
            return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${t.suffix}"`;
          }
          if (t.format === "includes") {
            return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${t.includes}"`;
          }
          if (t.format === "regex") {
            return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${t.pattern}`;
          }
          return `Aṣ\xecṣe: ${n[t.format] ?? e.format}`;
        }
      case "not_multiple_of":
        return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${e.divisor}`;
      case "unrecognized_keys":
        return `Bọt\xecn\xec \xe0\xecmọ̀: ${$(e.keys, ", ")}`;
      case "invalid_key":
        return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${e.origin}`;
      case "invalid_union":
      default:
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣ\xecṣe n\xedn\xfa ${e.origin}`;
    }
  };
};
function ab() {
  return {
    localeError: ag()
  };
}
export let $output = Symbol("ZodOutput");
export let $input = Symbol("ZodInput");
class aw {
  constructor() {
    this._map = new WeakMap();
    this._idmap = new Map();
  }
  add(e, ...t) {
    let r = t[0];
    this._map.set(e, r);
    if (r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id)) {
        throw Error(`ID ${r.id} already exists in the registry`);
      }
      this._idmap.set(r.id, e);
    }
    return this;
  }
  clear() {
    this._map = new WeakMap();
    this._idmap = new Map();
    return this;
  }
  remove(e) {
    let t = this._map.get(e);
    if (t && typeof t == "object" && "id" in t) {
      this._idmap.delete(t.id);
    }
    this._map.delete(e);
    return this;
  }
  get(e) {
    let t = e._zod.parent;
    if (t) {
      let r = {
        ...(this.get(t) ?? {})
      };
      delete r.id;
      let n = {
        ...r,
        ...this._map.get(e)
      };
      if (Object.keys(n).length) {
        return n;
      } else {
        return undefined;
      }
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
export function registry() {
  return new aw();
}
export let globalRegistry = registry();
function a$(e, t) {
  return new e({
    type: "string",
    ...Q(t)
  });
}
function aS(e, t) {
  return new e({
    type: "string",
    coerce: true,
    ...Q(t)
  });
}
function aI(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aO(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aE(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aj(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...Q(t)
  });
}
function aU(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...Q(t)
  });
}
function aT(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...Q(t)
  });
}
function aA(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aD(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function az(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aN(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aP(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aR(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aC(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aM(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aL(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aZ(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aF(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aB(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aq(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aW(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aY(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
function aG(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...Q(t)
  });
}
export let TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function aJ(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...Q(t)
  });
}
function aX(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...Q(t)
  });
}
function aQ(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Q(t)
  });
}
function aK(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Q(t)
  });
}
function aV(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...Q(t)
  });
}
function a0(e, t) {
  return new e({
    type: "number",
    coerce: true,
    checks: [],
    ...Q(t)
  });
}
function a1(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...Q(t)
  });
}
function a6(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...Q(t)
  });
}
function a4(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...Q(t)
  });
}
function a2(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...Q(t)
  });
}
function a3(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...Q(t)
  });
}
function a5(e, t) {
  return new e({
    type: "boolean",
    ...Q(t)
  });
}
function a8(e, t) {
  return new e({
    type: "boolean",
    coerce: true,
    ...Q(t)
  });
}
function a9(e, t) {
  return new e({
    type: "bigint",
    ...Q(t)
  });
}
function a7(e, t) {
  return new e({
    type: "bigint",
    coerce: true,
    ...Q(t)
  });
}
function oe(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...Q(t)
  });
}
function ot(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...Q(t)
  });
}
function or(e, t) {
  return new e({
    type: "symbol",
    ...Q(t)
  });
}
function on(e, t) {
  return new e({
    type: "undefined",
    ...Q(t)
  });
}
function oi(e, t) {
  return new e({
    type: "null",
    ...Q(t)
  });
}
function oa(e) {
  return new e({
    type: "any"
  });
}
function oo(e) {
  return new e({
    type: "unknown"
  });
}
function os(e, t) {
  return new e({
    type: "never",
    ...Q(t)
  });
}
function ou(e, t) {
  return new e({
    type: "void",
    ...Q(t)
  });
}
function ol(e, t) {
  return new e({
    type: "date",
    ...Q(t)
  });
}
function oc(e, t) {
  return new e({
    type: "date",
    coerce: true,
    ...Q(t)
  });
}
function od(e, t) {
  return new e({
    type: "nan",
    ...Q(t)
  });
}
export function lt(e, t) {
  return new t4({
    check: "less_than",
    ...Q(t),
    value: e,
    inclusive: false
  });
}
export function lte(e, t) {
  return new t4({
    check: "less_than",
    ...Q(t),
    value: e,
    inclusive: true
  });
}
export function gt(e, t) {
  return new t2({
    check: "greater_than",
    ...Q(t),
    value: e,
    inclusive: false
  });
}
export function gte(e, t) {
  return new t2({
    check: "greater_than",
    ...Q(t),
    value: e,
    inclusive: true
  });
}
export function positive(e) {
  return gt(0, e);
}
export function negative(e) {
  return lt(0, e);
}
export function nonpositive(e) {
  return lte(0, e);
}
export function nonnegative(e) {
  return gte(0, e);
}
export function multipleOf(e, t) {
  return new t3({
    check: "multiple_of",
    ...Q(t),
    value: e
  });
}
export function maxSize(e, t) {
  return new t9({
    check: "max_size",
    ...Q(t),
    maximum: e
  });
}
export function minSize(e, t) {
  return new t7({
    check: "min_size",
    ...Q(t),
    minimum: e
  });
}
export function size(e, t) {
  return new re({
    check: "size_equals",
    ...Q(t),
    size: e
  });
}
export function maxLength(e, t) {
  return new rt({
    check: "max_length",
    ...Q(t),
    maximum: e
  });
}
export function minLength(e, t) {
  return new rr({
    check: "min_length",
    ...Q(t),
    minimum: e
  });
}
export function length(e, t) {
  return new rn({
    check: "length_equals",
    ...Q(t),
    length: e
  });
}
export function regex(e, t) {
  return new ra({
    check: "string_format",
    format: "regex",
    ...Q(t),
    pattern: e
  });
}
export function lowercase(e) {
  return new ro({
    check: "string_format",
    format: "lowercase",
    ...Q(e)
  });
}
export function uppercase(e) {
  return new rs({
    check: "string_format",
    format: "uppercase",
    ...Q(e)
  });
}
export function includes(e, t) {
  return new ru({
    check: "string_format",
    format: "includes",
    ...Q(t),
    includes: e
  });
}
export function startsWith(e, t) {
  return new rl({
    check: "string_format",
    format: "starts_with",
    ...Q(t),
    prefix: e
  });
}
export function endsWith(e, t) {
  return new rc({
    check: "string_format",
    format: "ends_with",
    ...Q(t),
    suffix: e
  });
}
export function property(e, t, r) {
  return new rf({
    check: "property",
    property: e,
    schema: t,
    ...Q(r)
  });
}
export function mime(e, t) {
  return new rh({
    check: "mime_type",
    mime: e,
    ...Q(t)
  });
}
export function overwrite(e) {
  return new rp({
    check: "overwrite",
    tx: e
  });
}
export function normalize(e) {
  return overwrite(t => t.normalize(e));
}
export function trim() {
  return overwrite(e => e.trim());
}
export function toLowerCase() {
  return overwrite(e => e.toLowerCase());
}
export function toUpperCase() {
  return overwrite(e => e.toUpperCase());
}
function oL(e, t, r) {
  return new e({
    type: "array",
    element: t,
    ...Q(r)
  });
}
function oZ(e, t, r) {
  return new e({
    type: "union",
    options: t,
    ...Q(r)
  });
}
function oF(e, t, r, n) {
  return new e({
    type: "union",
    options: r,
    discriminator: t,
    ...Q(n)
  });
}
function oB(e, t, r) {
  return new e({
    type: "intersection",
    left: t,
    right: r
  });
}
function oq(e, t, r, n) {
  let i = r instanceof rg;
  let a = i ? n : r;
  return new e({
    type: "tuple",
    items: t,
    rest: i ? r : null,
    ...Q(a)
  });
}
function oW(e, t, r, n) {
  return new e({
    type: "record",
    keyType: t,
    valueType: r,
    ...Q(n)
  });
}
function oY(e, t, r, n) {
  return new e({
    type: "map",
    keyType: t,
    valueType: r,
    ...Q(n)
  });
}
function oG(e, t, r) {
  return new e({
    type: "set",
    valueType: t,
    ...Q(r)
  });
}
function oH(e, t, r) {
  return new e({
    type: "enum",
    entries: Array.isArray(t) ? Object.fromEntries(t.map(e => [e, e])) : t,
    ...Q(r)
  });
}
function oJ(e, t, r) {
  return new e({
    type: "enum",
    entries: t,
    ...Q(r)
  });
}
function oX(e, t, r) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...Q(r)
  });
}
function oQ(e, t) {
  return new e({
    type: "file",
    ...Q(t)
  });
}
function oK(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
function oV(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
function o0(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
function o1(e, t, r) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      if (typeof r == "function") {
        return r();
      } else {
        return q(r);
      }
    }
  });
}
function o6(e, t, r) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...Q(r)
  });
}
function o4(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
function o2(e, t, r) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
function o3(e, t, r) {
  return new e({
    type: "pipe",
    in: t,
    out: r
  });
}
function o5(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
function o8(e, t, r) {
  return new e({
    type: "template_literal",
    parts: t,
    ...Q(r)
  });
}
function o9(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
function o7(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
function se(e, t, r) {
  let n = Q(r);
  n.abort ??= true;
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
function st(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Q(r)
  });
}
function sr(e) {
  let t = sn(r => {
    r.addIssue = e => {
      if (typeof e == "string") {
        r.issues.push(ey(e, r.value, t._zod.def));
      } else {
        let n = e;
        if (n.fatal) {
          n.continue = false;
        }
        n.code ??= "custom";
        n.input ??= r.value;
        n.inst ??= t;
        n.continue ??= !t._zod.def.abort;
        r.issues.push(ey(n));
      }
    };
    return e(r.value, r);
  });
  return t;
}
function sn(e, t) {
  let r = new t1({
    check: "custom",
    ...Q(t)
  });
  r._zod.check = e;
  return r;
}
function si(e, t) {
  let r = Q(t);
  let n = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let i = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (r.case !== "sensitive") {
    n = n.map(e => typeof e == "string" ? e.toLowerCase() : e);
    i = i.map(e => typeof e == "string" ? e.toLowerCase() : e);
  }
  let a = new Set(n);
  let o = new Set(i);
  let s = e.Codec ?? nD;
  let u = e.Boolean ?? rJ;
  let l = new s({
    type: "pipe",
    in: new (e.String ?? rb)({
      type: "string",
      error: r.error
    }),
    out: new u({
      type: "boolean",
      error: r.error
    }),
    transform: (e, t) => {
      let n = e;
      if (r.case !== "sensitive") {
        n = n.toLowerCase();
      }
      return !!a.has(n) || !o.has(n) && (t.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...a, ...o],
        input: t.value,
        inst: l,
        continue: false
      }), {});
    },
    reverseTransform: (e, t) => e === true ? n[0] || "true" : i[0] || "false",
    error: r.error
  });
  return l;
}
function sa(e, t, r, n = {}) {
  let i = Q(n);
  let a = {
    ...Q(n),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof r == "function" ? r : e => r.test(e),
    ...i
  };
  if (r instanceof RegExp) {
    a.pattern = r;
  }
  return new e(a);
}
class so {
  constructor(e) {
    this.counter = 0;
    this.metadataRegistry = e?.metadata ?? globalRegistry;
    this.target = e?.target ?? "draft-2020-12";
    this.unrepresentable = e?.unrepresentable ?? "throw";
    this.override = e?.override ?? (() => {});
    this.io = e?.io ?? "output";
    this.seen = new Map();
  }
  process(e, t = {
    path: [],
    schemaPath: []
  }) {
    var r;
    let n = e._zod.def;
    let i = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
    };
    let a = this.seen.get(e);
    if (a) {
      a.count++;
      if (t.schemaPath.includes(e)) {
        a.cycle = t.path;
      }
      return a.schema;
    }
    let o = {
      schema: {},
      count: 1,
      cycle: undefined,
      path: t.path
    };
    this.seen.set(e, o);
    let s = e._zod.toJSONSchema?.();
    if (s) {
      o.schema = s;
    } else {
      let r = {
        ...t,
        schemaPath: [...t.schemaPath, e],
        path: t.path
      };
      let a = e._zod.parent;
      if (a) {
        o.ref = a;
        this.process(a, r);
        this.seen.get(a).isParent = true;
      } else {
        let t = o.schema;
        switch (n.type) {
          case "string":
            {
              let r = t;
              r.type = "string";
              let {
                minimum: n,
                maximum: a,
                format: s,
                patterns: u,
                contentEncoding: l
              } = e._zod.bag;
              if (typeof n == "number") {
                r.minLength = n;
              }
              if (typeof a == "number") {
                r.maxLength = a;
              }
              if (s) {
                r.format = i[s] ?? s;
                if (r.format === "") {
                  delete r.format;
                }
              }
              if (l) {
                r.contentEncoding = l;
              }
              if (u && u.size > 0) {
                let e = [...u];
                if (e.length === 1) {
                  r.pattern = e[0].source;
                } else if (e.length > 1) {
                  o.schema.allOf = [...e.map(e => ({
                    ...(this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? {
                      type: "string"
                    } : {}),
                    pattern: e.source
                  }))];
                }
              }
              break;
            }
          case "number":
            {
              let r = t;
              let {
                minimum: n,
                maximum: i,
                format: a,
                multipleOf: o,
                exclusiveMaximum: s,
                exclusiveMinimum: u
              } = e._zod.bag;
              if (typeof a == "string" && a.includes("int")) {
                r.type = "integer";
              } else {
                r.type = "number";
              }
              if (typeof u == "number") {
                if (this.target === "draft-4" || this.target === "openapi-3.0") {
                  r.minimum = u;
                  r.exclusiveMinimum = true;
                } else {
                  r.exclusiveMinimum = u;
                }
              }
              if (typeof n == "number") {
                r.minimum = n;
                if (typeof u == "number" && this.target !== "draft-4") {
                  if (u >= n) {
                    delete r.minimum;
                  } else {
                    delete r.exclusiveMinimum;
                  }
                }
              }
              if (typeof s == "number") {
                if (this.target === "draft-4" || this.target === "openapi-3.0") {
                  r.maximum = s;
                  r.exclusiveMaximum = true;
                } else {
                  r.exclusiveMaximum = s;
                }
              }
              if (typeof i == "number") {
                r.maximum = i;
                if (typeof s == "number" && this.target !== "draft-4") {
                  if (s <= i) {
                    delete r.maximum;
                  } else {
                    delete r.exclusiveMaximum;
                  }
                }
              }
              if (typeof o == "number") {
                r.multipleOf = o;
              }
              break;
            }
          case "boolean":
          case "success":
            t.type = "boolean";
            break;
          case "bigint":
            if (this.unrepresentable === "throw") {
              throw Error("BigInt cannot be represented in JSON Schema");
            }
            break;
          case "symbol":
            if (this.unrepresentable === "throw") {
              throw Error("Symbols cannot be represented in JSON Schema");
            }
            break;
          case "null":
            if (this.target === "openapi-3.0") {
              t.type = "string";
              t.nullable = true;
              t.enum = [null];
            } else {
              t.type = "null";
            }
            break;
          case "any":
          case "unknown":
            break;
          case "undefined":
            if (this.unrepresentable === "throw") {
              throw Error("Undefined cannot be represented in JSON Schema");
            }
            break;
          case "void":
            if (this.unrepresentable === "throw") {
              throw Error("Void cannot be represented in JSON Schema");
            }
            break;
          case "never":
            t.not = {};
            break;
          case "date":
            if (this.unrepresentable === "throw") {
              throw Error("Date cannot be represented in JSON Schema");
            }
            break;
          case "array":
            {
              let i = t;
              let {
                minimum: a,
                maximum: o
              } = e._zod.bag;
              if (typeof a == "number") {
                i.minItems = a;
              }
              if (typeof o == "number") {
                i.maxItems = o;
              }
              i.type = "array";
              i.items = this.process(n.element, {
                ...r,
                path: [...r.path, "items"]
              });
              break;
            }
          case "object":
            {
              let e = t;
              e.type = "object";
              e.properties = {};
              let i = n.shape;
              for (let t in i) {
                e.properties[t] = this.process(i[t], {
                  ...r,
                  path: [...r.path, "properties", t]
                });
              }
              let a = new Set([...new Set(Object.keys(i))].filter(e => {
                let t = n.shape[e]._zod;
                if (this.io === "input") {
                  return t.optin === undefined;
                } else {
                  return t.optout === undefined;
                }
              }));
              if (a.size > 0) {
                e.required = Array.from(a);
              }
              if (n.catchall?._zod.def.type === "never") {
                e.additionalProperties = false;
              } else if (n.catchall) {
                if (n.catchall) {
                  e.additionalProperties = this.process(n.catchall, {
                    ...r,
                    path: [...r.path, "additionalProperties"]
                  });
                }
              } else if (this.io === "output") {
                e.additionalProperties = false;
              }
              break;
            }
          case "union":
            t.anyOf = n.options.map((e, t) => this.process(e, {
              ...r,
              path: [...r.path, "anyOf", t]
            }));
            break;
          case "intersection":
            {
              let e = t;
              let i = this.process(n.left, {
                ...r,
                path: [...r.path, "allOf", 0]
              });
              let a = this.process(n.right, {
                ...r,
                path: [...r.path, "allOf", 1]
              });
              let o = e => "allOf" in e && Object.keys(e).length === 1;
              e.allOf = [...(o(i) ? i.allOf : [i]), ...(o(a) ? a.allOf : [a])];
              break;
            }
          case "tuple":
            {
              let i = t;
              i.type = "array";
              let a = this.target === "draft-2020-12" ? "prefixItems" : "items";
              let o = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems";
              let s = n.items.map((e, t) => this.process(e, {
                ...r,
                path: [...r.path, a, t]
              }));
              let u = n.rest ? this.process(n.rest, {
                ...r,
                path: [...r.path, o, ...(this.target === "openapi-3.0" ? [n.items.length] : [])]
              }) : null;
              if (this.target === "draft-2020-12") {
                i.prefixItems = s;
                if (u) {
                  i.items = u;
                }
              } else if (this.target === "openapi-3.0") {
                i.items = {
                  anyOf: s
                };
                if (u) {
                  i.items.anyOf.push(u);
                }
                i.minItems = s.length;
                if (!u) {
                  i.maxItems = s.length;
                }
              } else {
                i.items = s;
                if (u) {
                  i.additionalItems = u;
                }
              }
              let {
                minimum: l,
                maximum: c
              } = e._zod.bag;
              if (typeof l == "number") {
                i.minItems = l;
              }
              if (typeof c == "number") {
                i.maxItems = c;
              }
              break;
            }
          case "record":
            {
              let e = t;
              e.type = "object";
              if (this.target === "draft-7" || this.target === "draft-2020-12") {
                e.propertyNames = this.process(n.keyType, {
                  ...r,
                  path: [...r.path, "propertyNames"]
                });
              }
              e.additionalProperties = this.process(n.valueType, {
                ...r,
                path: [...r.path, "additionalProperties"]
              });
              break;
            }
          case "map":
            if (this.unrepresentable === "throw") {
              throw Error("Map cannot be represented in JSON Schema");
            }
            break;
          case "set":
            if (this.unrepresentable === "throw") {
              throw Error("Set cannot be represented in JSON Schema");
            }
            break;
          case "enum":
            {
              let e = t;
              let r = k(n.entries);
              if (r.every(e => typeof e == "number")) {
                e.type = "number";
              }
              if (r.every(e => typeof e == "string")) {
                e.type = "string";
              }
              e.enum = r;
              break;
            }
          case "literal":
            {
              let e = t;
              let r = [];
              for (let e of n.values) {
                if (e === undefined) {
                  if (this.unrepresentable === "throw") {
                    throw Error("Literal `undefined` cannot be represented in JSON Schema");
                  }
                } else if (typeof e == "bigint") {
                  if (this.unrepresentable === "throw") {
                    throw Error("BigInt literals cannot be represented in JSON Schema");
                  } else {
                    r.push(Number(e));
                  }
                } else {
                  r.push(e);
                }
              }
              if (r.length === 0) ;else if (r.length === 1) {
                let t = r[0];
                e.type = t === null ? "null" : typeof t;
                if (this.target === "draft-4" || this.target === "openapi-3.0") {
                  e.enum = [t];
                } else {
                  e.const = t;
                }
              } else {
                if (r.every(e => typeof e == "number")) {
                  e.type = "number";
                }
                if (r.every(e => typeof e == "string")) {
                  e.type = "string";
                }
                if (r.every(e => typeof e == "boolean")) {
                  e.type = "string";
                }
                if (r.every(e => e === null)) {
                  e.type = "null";
                }
                e.enum = r;
              }
              break;
            }
          case "file":
            {
              let r = t;
              let n = {
                type: "string",
                format: "binary",
                contentEncoding: "binary"
              };
              let {
                minimum: i,
                maximum: a,
                mime: o
              } = e._zod.bag;
              if (i !== undefined) {
                n.minLength = i;
              }
              if (a !== undefined) {
                n.maxLength = a;
              }
              if (o) {
                if (o.length === 1) {
                  n.contentMediaType = o[0];
                  Object.assign(r, n);
                } else {
                  r.anyOf = o.map(e => ({
                    ...n,
                    contentMediaType: e
                  }));
                }
              } else {
                Object.assign(r, n);
              }
              break;
            }
          case "transform":
            if (this.unrepresentable === "throw") {
              throw Error("Transforms cannot be represented in JSON Schema");
            }
            break;
          case "nullable":
            {
              let e = this.process(n.innerType, r);
              if (this.target === "openapi-3.0") {
                o.ref = n.innerType;
                t.nullable = true;
              } else {
                t.anyOf = [e, {
                  type: "null"
                }];
              }
              break;
            }
          case "nonoptional":
          case "promise":
          case "optional":
            this.process(n.innerType, r);
            o.ref = n.innerType;
            break;
          case "default":
            this.process(n.innerType, r);
            o.ref = n.innerType;
            t.default = JSON.parse(JSON.stringify(n.defaultValue));
            break;
          case "prefault":
            this.process(n.innerType, r);
            o.ref = n.innerType;
            if (this.io === "input") {
              t._prefault = JSON.parse(JSON.stringify(n.defaultValue));
            }
            break;
          case "catch":
            {
              let e;
              this.process(n.innerType, r);
              o.ref = n.innerType;
              try {
                e = n.catchValue(undefined);
              } catch {
                throw Error("Dynamic catch values are not supported in JSON Schema");
              }
              t.default = e;
              break;
            }
          case "nan":
            if (this.unrepresentable === "throw") {
              throw Error("NaN cannot be represented in JSON Schema");
            }
            break;
          case "template_literal":
            {
              let r = t;
              let n = e._zod.pattern;
              if (!n) {
                throw Error("Pattern not found in template literal");
              }
              r.type = "string";
              r.pattern = n.source;
              break;
            }
          case "pipe":
            {
              let e = this.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
              this.process(e, r);
              o.ref = e;
              break;
            }
          case "readonly":
            this.process(n.innerType, r);
            o.ref = n.innerType;
            t.readOnly = true;
            break;
          case "lazy":
            {
              let t = e._zod.innerType;
              this.process(t, r);
              o.ref = t;
              break;
            }
          case "custom":
            if (this.unrepresentable === "throw") {
              throw Error("Custom types cannot be represented in JSON Schema");
            }
            break;
          case "function":
            if (this.unrepresentable === "throw") {
              throw Error("Function types cannot be represented in JSON Schema");
            }
        }
      }
    }
    let u = this.metadataRegistry.get(e);
    if (u) {
      Object.assign(o.schema, u);
    }
    if (this.io === "input" && su(e)) {
      delete o.schema.examples;
      delete o.schema.default;
    }
    if (this.io === "input" && o.schema._prefault) {
      (r = o.schema).default ?? (r.default = o.schema._prefault);
    }
    delete o.schema._prefault;
    return this.seen.get(e).schema;
  }
  emit(e, t) {
    let r = {
      cycles: t?.cycles ?? "ref",
      reused: t?.reused ?? "inline",
      external: t?.external ?? undefined
    };
    let n = this.seen.get(e);
    if (!n) {
      throw Error("Unprocessed schema. This is a bug in Zod.");
    }
    let i = e => {
      let t = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (r.external) {
        let n = r.external.registry.get(e[0])?.id;
        let i = r.external.uri ?? (e => e);
        if (n) {
          return {
            ref: i(n)
          };
        }
        let a = e[1].defId ?? e[1].schema.id ?? `schema${this.counter++}`;
        e[1].defId = a;
        return {
          defId: a,
          ref: `${i("__shared")}#/${t}/${a}`
        };
      }
      if (e[1] === n) {
        return {
          ref: "#"
        };
      }
      let i = "#";
      let a = `${i}/${t}/`;
      let o = e[1].schema.id ?? `__schema${this.counter++}`;
      return {
        defId: o,
        ref: a + o
      };
    };
    let a = e => {
      if (e[1].schema.$ref) {
        return;
      }
      let t = e[1];
      let {
        ref: r,
        defId: n
      } = i(e);
      t.def = {
        ...t.schema
      };
      if (n) {
        t.defId = n;
      }
      let a = t.schema;
      for (let e in a) {
        delete a[e];
      }
      a.$ref = r;
    };
    if (r.cycles === "throw") {
      for (let e of this.seen.entries()) {
        let t = e[1];
        if (t.cycle) {
          throw Error(`Cycle detected: #/${t.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
      }
    }
    for (let t of this.seen.entries()) {
      let n = t[1];
      if (e === t[0]) {
        a(t);
        continue;
      }
      if (r.external) {
        let n = r.external.registry.get(t[0])?.id;
        if (e !== t[0] && n) {
          a(t);
          continue;
        }
      }
      if (this.metadataRegistry.get(t[0])?.id || n.cycle || n.count > 1 && r.reused === "ref") {
        a(t);
        continue;
      }
    }
    let o = (e, t) => {
      let r = this.seen.get(e);
      let n = r.def ?? r.schema;
      let i = {
        ...n
      };
      if (r.ref === null) {
        return;
      }
      let a = r.ref;
      r.ref = null;
      if (a) {
        o(a, t);
        let e = this.seen.get(a).schema;
        if (e.$ref && (t.target === "draft-7" || t.target === "draft-4" || t.target === "openapi-3.0")) {
          n.allOf = n.allOf ?? [];
          n.allOf.push(e);
        } else {
          Object.assign(n, e);
          Object.assign(n, i);
        }
      }
      if (!r.isParent) {
        this.override({
          zodSchema: e,
          jsonSchema: n,
          path: r.path ?? []
        });
      }
    };
    for (let e of [...this.seen.entries()].reverse()) {
      o(e[0], {
        target: this.target
      });
    }
    let s = {};
    if (this.target === "draft-2020-12") {
      s.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if (this.target === "draft-7") {
      s.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (this.target === "draft-4") {
      s.$schema = "http://json-schema.org/draft-04/schema#";
    } else if (this.target !== "openapi-3.0") {
      console.warn(`Invalid target: ${this.target}`);
    }
    if (r.external?.uri) {
      let t = r.external.registry.get(e)?.id;
      if (!t) {
        throw Error("Schema is missing an `id` property");
      }
      s.$id = r.external.uri(t);
    }
    Object.assign(s, n.def);
    let u = r.external?.defs ?? {};
    for (let e of this.seen.entries()) {
      let t = e[1];
      if (t.def && t.defId) {
        u[t.defId] = t.def;
      }
    }
    if (!r.external) {
      if (Object.keys(u).length > 0) {
        if (this.target === "draft-2020-12") {
          s.$defs = u;
        } else {
          s.definitions = u;
        }
      }
    }
    try {
      return JSON.parse(JSON.stringify(s));
    } catch (e) {
      throw Error("Error converting schema to JSON.");
    }
  }
}
export function toJSONSchema(e, t) {
  if (e instanceof aw) {
    let r = new so(t);
    let n = {};
    for (let t of e._idmap.entries()) {
      let [e, n] = t;
      r.process(n);
    }
    let i = {};
    let a = {
      registry: e,
      uri: t?.uri,
      defs: n
    };
    for (let n of e._idmap.entries()) {
      let [e, o] = n;
      i[e] = r.emit(o, {
        ...t,
        external: a
      });
    }
    if (Object.keys(n).length > 0) {
      i.__shared = {
        [r.target === "draft-2020-12" ? "$defs" : "definitions"]: n
      };
    }
    return {
      schemas: i
    };
  }
  let r = new so(t);
  r.process(e);
  return r.emit(e, t);
}
function su(e, t) {
  let r = t ?? {
    seen: new Set()
  };
  if (r.seen.has(e)) {
    return false;
  }
  r.seen.add(e);
  let n = e._zod.def;
  switch (n.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
    case "custom":
    case "success":
    case "catch":
    case "function":
      return false;
    case "array":
      return su(n.element, r);
    case "object":
      for (let e in n.shape) {
        if (su(n.shape[e], r)) {
          return true;
        }
      }
      return false;
    case "union":
      for (let e of n.options) {
        if (su(e, r)) {
          return true;
        }
      }
      return false;
    case "intersection":
      return su(n.left, r) || su(n.right, r);
    case "tuple":
      for (let e of n.items) {
        if (su(e, r)) {
          return true;
        }
      }
      if (n.rest && su(n.rest, r)) {
        return true;
      }
      return false;
    case "record":
    case "map":
      return su(n.keyType, r) || su(n.valueType, r);
    case "set":
      return su(n.valueType, r);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
    case "default":
    case "prefault":
      return su(n.innerType, r);
    case "lazy":
      return su(n.getter(), r);
    case "transform":
      return true;
    case "pipe":
      return su(n.in, r) || su(n.out, r);
  }
  throw Error(`Unknown schema type: ${n.type}`);
}
export let ZodISODateTime = f("ZodISODateTime", (e, t) => {
  rT.init(e, t);
  ZodStringFormat.init(e, t);
});
function sc(e) {
  return aJ(ZodISODateTime, e);
}
export let ZodISODate = f("ZodISODate", (e, t) => {
  rA.init(e, t);
  ZodStringFormat.init(e, t);
});
function sf(e) {
  return aX(ZodISODate, e);
}
export let ZodISOTime = f("ZodISOTime", (e, t) => {
  rD.init(e, t);
  ZodStringFormat.init(e, t);
});
function sp(e) {
  return aQ(ZodISOTime, e);
}
export let ZodISODuration = f("ZodISODuration", (e, t) => {
  rz.init(e, t);
  ZodStringFormat.init(e, t);
});
function sy(e) {
  return aK(ZodISODuration, e);
}
let sg = (e, t) => {
  eI.init(e, t);
  e.name = "ZodError";
  Object.defineProperties(e, {
    format: {
      value: t => formatError(e, t)
    },
    flatten: {
      value: t => flattenError(e, t)
    },
    addIssue: {
      value: t => {
        e.issues.push(t);
        e.message = JSON.stringify(e.issues, S, 2);
      }
    },
    addIssues: {
      value: t => {
        e.issues.push(...t);
        e.message = JSON.stringify(e.issues, S, 2);
      }
    },
    isEmpty: {
      get: () => e.issues.length === 0
    }
  });
};
export let ZodError = f("ZodError", sg);
export let ZodRealError = f("ZodError", sg, {
  Parent: Error
});
export let parse = eD(ZodRealError);
export let parseAsync = eN(ZodRealError);
export let safeParse = eR(ZodRealError);
export let safeParseAsync = eM(ZodRealError);
export let encode = eZ(ZodRealError);
export let decode = eB(ZodRealError);
export let encodeAsync = eW(ZodRealError);
export let decodeAsync = eG(ZodRealError);
export let safeEncode = eJ(ZodRealError);
export let safeDecode = eQ(ZodRealError);
export let safeEncodeAsync = eV(ZodRealError);
export let safeDecodeAsync = e1(ZodRealError);
export let ZodType = f("ZodType", (e, t) => {
  rg.init(e, t);
  e.def = t;
  e.type = t.type;
  Object.defineProperty(e, "_def", {
    value: t
  });
  e.check = (...r) => e.clone(z(t, {
    checks: [...(t.checks ?? []), ...r.map(e => typeof e == "function" ? {
      _zod: {
        check: e,
        def: {
          check: "custom"
        },
        onattach: []
      }
    } : e)]
  }));
  e.clone = (t, r) => clone(e, t, r);
  e.brand = () => e;
  e.register = (t, r) => {
    t.add(e, r);
    return e;
  };
  e.parse = (t, r) => parse(e, t, r, {
    callee: e.parse
  });
  e.safeParse = (t, r) => safeParse(e, t, r);
  e.parseAsync = async (t, r) => parseAsync(e, t, r, {
    callee: e.parseAsync
  });
  e.safeParseAsync = async (t, r) => safeParseAsync(e, t, r);
  e.spa = e.safeParseAsync;
  e.encode = (t, r) => encode(e, t, r);
  e.decode = (t, r) => decode(e, t, r);
  e.encodeAsync = async (t, r) => encodeAsync(e, t, r);
  e.decodeAsync = async (t, r) => decodeAsync(e, t, r);
  e.safeEncode = (t, r) => safeEncode(e, t, r);
  e.safeDecode = (t, r) => safeDecode(e, t, r);
  e.safeEncodeAsync = async (t, r) => safeEncodeAsync(e, t, r);
  e.safeDecodeAsync = async (t, r) => safeDecodeAsync(e, t, r);
  e.refine = (t, r) => e.check(refine(t, r));
  e.superRefine = t => e.check(superRefine(t));
  e.overwrite = t => e.check(overwrite(t));
  e.optional = () => optional(e);
  e.nullable = () => nullable(e);
  e.nullish = () => optional(nullable(e));
  e.nonoptional = t => nonoptional(e, t);
  e.array = () => array(e);
  e.or = t => union([e, t]);
  e.and = t => intersection(e, t);
  e.transform = t => pipe(e, transform(t));
  e.default = t => _default(e, t);
  e.prefault = t => prefault(e, t);
  e.catch = t => catch(e, t);
  e.pipe = t => pipe(e, t);
  e.readonly = () => readonly(e);
  e.describe = t => {
    let r = e.clone();
    globalRegistry.add(r, {
      description: t
    });
    return r;
  };
  Object.defineProperty(e, "description", {
    get: () => globalRegistry.get(e)?.description,
    configurable: true
  });
  e.meta = (...t) => {
    if (t.length === 0) {
      return globalRegistry.get(e);
    }
    let r = e.clone();
    globalRegistry.add(r, t[0]);
    return r;
  };
  e.isOptional = () => e.safeParse(undefined).success;
  e.isNullable = () => e.safeParse(null).success;
  return e;
});
export let _ZodString = f("_ZodString", (e, t) => {
  rb.init(e, t);
  ZodType.init(e, t);
  let r = e._zod.bag;
  e.format = r.format ?? null;
  e.minLength = r.minimum ?? null;
  e.maxLength = r.maximum ?? null;
  e.regex = (...t) => e.check(regex(...t));
  e.includes = (...t) => e.check(includes(...t));
  e.startsWith = (...t) => e.check(startsWith(...t));
  e.endsWith = (...t) => e.check(endsWith(...t));
  e.min = (...t) => e.check(minLength(...t));
  e.max = (...t) => e.check(maxLength(...t));
  e.length = (...t) => e.check(length(...t));
  e.nonempty = (...t) => e.check(minLength(1, ...t));
  e.lowercase = t => e.check(lowercase(t));
  e.uppercase = t => e.check(uppercase(t));
  e.trim = () => e.check(trim());
  e.normalize = (...t) => e.check(normalize(...t));
  e.toLowerCase = () => e.check(toLowerCase());
  e.toUpperCase = () => e.check(toUpperCase());
});
export let ZodString = f("ZodString", (e, t) => {
  rb.init(e, t);
  _ZodString.init(e, t);
  e.email = t => e.check(aI(ZodEmail, t));
  e.url = t => e.check(aA(ZodURL, t));
  e.jwt = t => e.check(aG(ZodJWT, t));
  e.emoji = t => e.check(aD(ZodEmoji, t));
  e.guid = t => e.check(aO(ZodGUID, t));
  e.uuid = t => e.check(aE(ZodUUID, t));
  e.uuidv4 = t => e.check(aj(ZodUUID, t));
  e.uuidv6 = t => e.check(aU(ZodUUID, t));
  e.uuidv7 = t => e.check(aT(ZodUUID, t));
  e.nanoid = t => e.check(az(ZodNanoID, t));
  e.guid = t => e.check(aO(ZodGUID, t));
  e.cuid = t => e.check(aN(ZodCUID, t));
  e.cuid2 = t => e.check(aP(ZodCUID2, t));
  e.ulid = t => e.check(aR(ZodULID, t));
  e.base64 = t => e.check(aq(ZodBase64, t));
  e.base64url = t => e.check(aW(ZodBase64URL, t));
  e.xid = t => e.check(aC(ZodXID, t));
  e.ksuid = t => e.check(aM(ZodKSUID, t));
  e.ipv4 = t => e.check(aL(ZodIPv4, t));
  e.ipv6 = t => e.check(aZ(ZodIPv6, t));
  e.cidrv4 = t => e.check(aF(ZodCIDRv4, t));
  e.cidrv6 = t => e.check(aB(ZodCIDRv6, t));
  e.e164 = t => e.check(aY(ZodE164, t));
  e.datetime = t => e.check(sc(t));
  e.date = t => e.check(sf(t));
  e.time = t => e.check(sp(t));
  e.duration = t => e.check(sy(t));
});
export function string(e) {
  return a$(ZodString, e);
}
export let ZodStringFormat = f("ZodStringFormat", (e, t) => {
  rv.init(e, t);
  _ZodString.init(e, t);
});
export let ZodEmail = f("ZodEmail", (e, t) => {
  r_.init(e, t);
  ZodStringFormat.init(e, t);
});
export function email(e) {
  return aI(ZodEmail, e);
}
export let ZodGUID = f("ZodGUID", (e, t) => {
  rx.init(e, t);
  ZodStringFormat.init(e, t);
});
export function guid(e) {
  return aO(ZodGUID, e);
}
export let ZodUUID = f("ZodUUID", (e, t) => {
  rw.init(e, t);
  ZodStringFormat.init(e, t);
});
export function uuid(e) {
  return aE(ZodUUID, e);
}
export function uuidv4(e) {
  return aj(ZodUUID, e);
}
export function uuidv6(e) {
  return aU(ZodUUID, e);
}
export function uuidv7(e) {
  return aT(ZodUUID, e);
}
export let ZodURL = f("ZodURL", (e, t) => {
  rk.init(e, t);
  ZodStringFormat.init(e, t);
});
export function url(e) {
  return aA(ZodURL, e);
}
export function httpUrl(e) {
  return aA(ZodURL, {
    protocol: /^https?$/,
    hostname: tw,
    ...Q(e)
  });
}
export let ZodEmoji = f("ZodEmoji", (e, t) => {
  r$.init(e, t);
  ZodStringFormat.init(e, t);
});
export function emoji(e) {
  return aD(ZodEmoji, e);
}
export let ZodNanoID = f("ZodNanoID", (e, t) => {
  rS.init(e, t);
  ZodStringFormat.init(e, t);
});
export function nanoid(e) {
  return az(ZodNanoID, e);
}
export let ZodCUID = f("ZodCUID", (e, t) => {
  rI.init(e, t);
  ZodStringFormat.init(e, t);
});
export function cuid(e) {
  return aN(ZodCUID, e);
}
export let ZodCUID2 = f("ZodCUID2", (e, t) => {
  rO.init(e, t);
  ZodStringFormat.init(e, t);
});
export function cuid2(e) {
  return aP(ZodCUID2, e);
}
export let ZodULID = f("ZodULID", (e, t) => {
  rE.init(e, t);
  ZodStringFormat.init(e, t);
});
export function ulid(e) {
  return aR(ZodULID, e);
}
export let ZodXID = f("ZodXID", (e, t) => {
  rj.init(e, t);
  ZodStringFormat.init(e, t);
});
export function xid(e) {
  return aC(ZodXID, e);
}
export let ZodKSUID = f("ZodKSUID", (e, t) => {
  rU.init(e, t);
  ZodStringFormat.init(e, t);
});
export function ksuid(e) {
  return aM(ZodKSUID, e);
}
export let ZodIPv4 = f("ZodIPv4", (e, t) => {
  rN.init(e, t);
  ZodStringFormat.init(e, t);
});
export function ipv4(e) {
  return aL(ZodIPv4, e);
}
export let ZodIPv6 = f("ZodIPv6", (e, t) => {
  rP.init(e, t);
  ZodStringFormat.init(e, t);
});
export function ipv6(e) {
  return aZ(ZodIPv6, e);
}
export let ZodCIDRv4 = f("ZodCIDRv4", (e, t) => {
  rR.init(e, t);
  ZodStringFormat.init(e, t);
});
export function cidrv4(e) {
  return aF(ZodCIDRv4, e);
}
export let ZodCIDRv6 = f("ZodCIDRv6", (e, t) => {
  rC.init(e, t);
  ZodStringFormat.init(e, t);
});
export function cidrv6(e) {
  return aB(ZodCIDRv6, e);
}
export let ZodBase64 = f("ZodBase64", (e, t) => {
  rL.init(e, t);
  ZodStringFormat.init(e, t);
});
export function base64(e) {
  return aq(ZodBase64, e);
}
export let ZodBase64URL = f("ZodBase64URL", (e, t) => {
  rF.init(e, t);
  ZodStringFormat.init(e, t);
});
export function base64url(e) {
  return aW(ZodBase64URL, e);
}
export let ZodE164 = f("ZodE164", (e, t) => {
  rB.init(e, t);
  ZodStringFormat.init(e, t);
});
export function e164(e) {
  return aY(ZodE164, e);
}
export let ZodJWT = f("ZodJWT", (e, t) => {
  rW.init(e, t);
  ZodStringFormat.init(e, t);
});
export function jwt(e) {
  return aG(ZodJWT, e);
}
export let ZodCustomStringFormat = f("ZodCustomStringFormat", (e, t) => {
  rY.init(e, t);
  ZodStringFormat.init(e, t);
});
export function stringFormat(e, t, r = {}) {
  return sa(ZodCustomStringFormat, e, t, r);
}
export function hostname(e) {
  return sa(ZodCustomStringFormat, "hostname", tx, e);
}
export function hex(e) {
  return sa(ZodCustomStringFormat, "hex", tR, e);
}
export function hash(e, t) {
  let r = t?.enc ?? "hex";
  let n = `${e}_${r}`;
  let i = regexes[n];
  if (!i) {
    throw Error(`Unrecognized hash format: ${n}`);
  }
  return sa(ZodCustomStringFormat, n, i, t);
}
export let ZodNumber = f("ZodNumber", (e, t) => {
  rG.init(e, t);
  ZodType.init(e, t);
  e.gt = (t, r) => e.check(gt(t, r));
  e.gte = (t, r) => e.check(gte(t, r));
  e.min = (t, r) => e.check(gte(t, r));
  e.lt = (t, r) => e.check(lt(t, r));
  e.lte = (t, r) => e.check(lte(t, r));
  e.max = (t, r) => e.check(lte(t, r));
  e.int = t => e.check(int(t));
  e.safe = t => e.check(int(t));
  e.positive = t => e.check(gt(0, t));
  e.nonnegative = t => e.check(gte(0, t));
  e.negative = t => e.check(lt(0, t));
  e.nonpositive = t => e.check(lte(0, t));
  e.multipleOf = (t, r) => e.check(multipleOf(t, r));
  e.step = (t, r) => e.check(multipleOf(t, r));
  e.finite = () => e;
  let r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? -Infinity, r.exclusiveMinimum ?? -Infinity) ?? null;
  e.maxValue = Math.min(r.maximum ?? Infinity, r.exclusiveMaximum ?? Infinity) ?? null;
  e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5);
  e.isFinite = true;
  e.format = r.format ?? null;
});
export function number(e) {
  return aV(ZodNumber, e);
}
export let ZodNumberFormat = f("ZodNumberFormat", (e, t) => {
  rH.init(e, t);
  ZodNumber.init(e, t);
});
export function int(e) {
  return a1(ZodNumberFormat, e);
}
export function float32(e) {
  return a6(ZodNumberFormat, e);
}
export function float64(e) {
  return a4(ZodNumberFormat, e);
}
export function int32(e) {
  return a2(ZodNumberFormat, e);
}
export function uint32(e) {
  return a3(ZodNumberFormat, e);
}
export let ZodBoolean = f("ZodBoolean", (e, t) => {
  rJ.init(e, t);
  ZodType.init(e, t);
});
export function boolean(e) {
  return a5(ZodBoolean, e);
}
export let ZodBigInt = f("ZodBigInt", (e, t) => {
  rX.init(e, t);
  ZodType.init(e, t);
  e.gte = (t, r) => e.check(gte(t, r));
  e.min = (t, r) => e.check(gte(t, r));
  e.gt = (t, r) => e.check(gt(t, r));
  e.gte = (t, r) => e.check(gte(t, r));
  e.min = (t, r) => e.check(gte(t, r));
  e.lt = (t, r) => e.check(lt(t, r));
  e.lte = (t, r) => e.check(lte(t, r));
  e.max = (t, r) => e.check(lte(t, r));
  e.positive = t => e.check(gt(BigInt(0), t));
  e.negative = t => e.check(lt(BigInt(0), t));
  e.nonpositive = t => e.check(lte(BigInt(0), t));
  e.nonnegative = t => e.check(gte(BigInt(0), t));
  e.multipleOf = (t, r) => e.check(multipleOf(t, r));
  let r = e._zod.bag;
  e.minValue = r.minimum ?? null;
  e.maxValue = r.maximum ?? null;
  e.format = r.format ?? null;
});
export function bigint(e) {
  return a9(ZodBigInt, e);
}
export let ZodBigIntFormat = f("ZodBigIntFormat", (e, t) => {
  rQ.init(e, t);
  ZodBigInt.init(e, t);
});
export function int64(e) {
  return oe(ZodBigIntFormat, e);
}
export function uint64(e) {
  return ot(ZodBigIntFormat, e);
}
export let ZodSymbol = f("ZodSymbol", (e, t) => {
  rK.init(e, t);
  ZodType.init(e, t);
});
export function symbol(e) {
  return or(ZodSymbol, e);
}
export let ZodUndefined = f("ZodUndefined", (e, t) => {
  rV.init(e, t);
  ZodType.init(e, t);
});
export function undefined(e) {
  return on(ZodUndefined, e);
}
export let ZodNull = f("ZodNull", (e, t) => {
  r0.init(e, t);
  ZodType.init(e, t);
});
export function null(e) {
  return oi(ZodNull, e);
}
export let ZodAny = f("ZodAny", (e, t) => {
  r1.init(e, t);
  ZodType.init(e, t);
});
export function any() {
  return oa(ZodAny);
}
export let ZodUnknown = f("ZodUnknown", (e, t) => {
  r6.init(e, t);
  ZodType.init(e, t);
});
export function unknown() {
  return oo(ZodUnknown);
}
export let ZodNever = f("ZodNever", (e, t) => {
  r4.init(e, t);
  ZodType.init(e, t);
});
export function never(e) {
  return os(ZodNever, e);
}
export let ZodVoid = f("ZodVoid", (e, t) => {
  r2.init(e, t);
  ZodType.init(e, t);
});
export function void(e) {
  return ou(ZodVoid, e);
}
export let ZodDate = f("ZodDate", (e, t) => {
  r3.init(e, t);
  ZodType.init(e, t);
  e.min = (t, r) => e.check(gte(t, r));
  e.max = (t, r) => e.check(lte(t, r));
  let r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null;
  e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
export function date(e) {
  return ol(ZodDate, e);
}
export let ZodArray = f("ZodArray", (e, t) => {
  r8.init(e, t);
  ZodType.init(e, t);
  e.element = t.element;
  e.min = (t, r) => e.check(minLength(t, r));
  e.nonempty = t => e.check(minLength(1, t));
  e.max = (t, r) => e.check(maxLength(t, r));
  e.length = (t, r) => e.check(length(t, r));
  e.unwrap = () => e.element;
});
export function array(e, t) {
  return oL(ZodArray, e, t);
}
export function keyof(e) {
  return enum(Object.keys(e._zod.def.shape));
}
export let ZodObject = f("ZodObject", (e, t) => {
  nr.init(e, t);
  ZodType.init(e, t);
  T(e, "shape", () => t.shape);
  e.keyof = () => enum(Object.keys(e._zod.def.shape));
  e.catchall = t => e.clone({
    ...e._zod.def,
    catchall: t
  });
  e.passthrough = () => e.clone({
    ...e._zod.def,
    catchall: unknown()
  });
  e.loose = () => e.clone({
    ...e._zod.def,
    catchall: unknown()
  });
  e.strict = () => e.clone({
    ...e._zod.def,
    catchall: never()
  });
  e.strip = () => e.clone({
    ...e._zod.def,
    catchall: undefined
  });
  e.extend = t => ea(e, t);
  e.safeExtend = t => eo(e, t);
  e.merge = t => es(e, t);
  e.pick = t => en(e, t);
  e.omit = t => ei(e, t);
  e.partial = (...t) => eu(ZodOptional, e, t[0]);
  e.required = (...t) => el(ZodNonOptional, e, t[0]);
});
export function object(e, t) {
  return new ZodObject({
    type: "object",
    shape: e ?? {},
    ...Q(t)
  });
}
export function strictObject(e, t) {
  return new ZodObject({
    type: "object",
    shape: e,
    catchall: never(),
    ...Q(t)
  });
}
export function looseObject(e, t) {
  return new ZodObject({
    type: "object",
    shape: e,
    catchall: unknown(),
    ...Q(t)
  });
}
export let ZodUnion = f("ZodUnion", (e, t) => {
  ni.init(e, t);
  ZodType.init(e, t);
  e.options = t.options;
});
export function union(e, t) {
  return new ZodUnion({
    type: "union",
    options: e,
    ...Q(t)
  });
}
export let ZodDiscriminatedUnion = f("ZodDiscriminatedUnion", (e, t) => {
  ZodUnion.init(e, t);
  na.init(e, t);
});
export function discriminatedUnion(e, t, r) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options: t,
    discriminator: e,
    ...Q(r)
  });
}
export let ZodIntersection = f("ZodIntersection", (e, t) => {
  no.init(e, t);
  ZodType.init(e, t);
});
export function intersection(e, t) {
  return new ZodIntersection({
    type: "intersection",
    left: e,
    right: t
  });
}
export let ZodTuple = f("ZodTuple", (e, t) => {
  nl.init(e, t);
  ZodType.init(e, t);
  e.rest = t => e.clone({
    ...e._zod.def,
    rest: t
  });
});
export function tuple(e, t, r) {
  let n = t instanceof rg;
  let i = n ? r : t;
  return new ZodTuple({
    type: "tuple",
    items: e,
    rest: n ? t : null,
    ...Q(i)
  });
}
export let ZodRecord = f("ZodRecord", (e, t) => {
  nd.init(e, t);
  ZodType.init(e, t);
  e.keyType = t.keyType;
  e.valueType = t.valueType;
});
export function record(e, t, r) {
  return new ZodRecord({
    type: "record",
    keyType: e,
    valueType: t,
    ...Q(r)
  });
}
export function partialRecord(e, t, r) {
  let n = clone(e);
  n._zod.values = undefined;
  return new ZodRecord({
    type: "record",
    keyType: n,
    valueType: t,
    ...Q(r)
  });
}
export let ZodMap = f("ZodMap", (e, t) => {
  nf.init(e, t);
  ZodType.init(e, t);
  e.keyType = t.keyType;
  e.valueType = t.valueType;
});
export function map(e, t, r) {
  return new ZodMap({
    type: "map",
    keyType: e,
    valueType: t,
    ...Q(r)
  });
}
export let ZodSet = f("ZodSet", (e, t) => {
  np.init(e, t);
  ZodType.init(e, t);
  e.min = (...t) => e.check(minSize(...t));
  e.nonempty = t => e.check(minSize(1, t));
  e.max = (...t) => e.check(maxSize(...t));
  e.size = (...t) => e.check(size(...t));
});
export function set(e, t) {
  return new ZodSet({
    type: "set",
    valueType: e,
    ...Q(t)
  });
}
export let ZodEnum = f("ZodEnum", (e, t) => {
  ny.init(e, t);
  ZodType.init(e, t);
  e.enum = t.entries;
  e.options = Object.values(t.entries);
  let r = new Set(Object.keys(t.entries));
  e.extract = (e, n) => {
    let i = {};
    for (let n of e) {
      if (r.has(n)) {
        i[n] = t.entries[n];
      } else {
        throw Error(`Key ${n} not found in enum`);
      }
    }
    return new ZodEnum({
      ...t,
      checks: [],
      ...Q(n),
      entries: i
    });
  };
  e.exclude = (e, n) => {
    let i = {
      ...t.entries
    };
    for (let t of e) {
      if (r.has(t)) {
        delete i[t];
      } else {
        throw Error(`Key ${t} not found in enum`);
      }
    }
    return new ZodEnum({
      ...t,
      checks: [],
      ...Q(n),
      entries: i
    });
  };
});
export function enum(e, t) {
  return new ZodEnum({
    type: "enum",
    entries: Array.isArray(e) ? Object.fromEntries(e.map(e => [e, e])) : e,
    ...Q(t)
  });
}
export function nativeEnum(e, t) {
  return new ZodEnum({
    type: "enum",
    entries: e,
    ...Q(t)
  });
}
export let ZodLiteral = f("ZodLiteral", (e, t) => {
  ng.init(e, t);
  ZodType.init(e, t);
  e.values = new Set(t.values);
  Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1) {
        throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return t.values[0];
    }
  });
});
export function literal(e, t) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...Q(t)
  });
}
export let ZodFile = f("ZodFile", (e, t) => {
  nb.init(e, t);
  ZodType.init(e, t);
  e.min = (t, r) => e.check(minSize(t, r));
  e.max = (t, r) => e.check(maxSize(t, r));
  e.mime = (t, r) => e.check(mime(Array.isArray(t) ? t : [t], r));
});
export function file(e) {
  return oQ(ZodFile, e);
}
export let ZodTransform = f("ZodTransform", (e, t) => {
  nv.init(e, t);
  ZodType.init(e, t);
  e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      throw new m(e.constructor.name);
    }
    r.addIssue = n => {
      if (typeof n == "string") {
        r.issues.push(ey(n, r.value, t));
      } else {
        let t = n;
        if (t.fatal) {
          t.continue = false;
        }
        t.code ??= "custom";
        t.input ??= r.value;
        t.inst ??= e;
        r.issues.push(ey(t));
      }
    };
    let i = t.transform(r.value, r);
    if (i instanceof Promise) {
      return i.then(e => {
        r.value = e;
        return r;
      });
    } else {
      r.value = i;
      return r;
    }
  };
});
export function transform(e) {
  return new ZodTransform({
    type: "transform",
    transform: e
  });
}
export let ZodOptional = f("ZodOptional", (e, t) => {
  nw.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function optional(e) {
  return new ZodOptional({
    type: "optional",
    innerType: e
  });
}
export let ZodNullable = f("ZodNullable", (e, t) => {
  n_.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function nullable(e) {
  return new ZodNullable({
    type: "nullable",
    innerType: e
  });
}
export function nullish(e) {
  return optional(nullable(e));
}
export let ZodDefault = f("ZodDefault", (e, t) => {
  nk.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
  e.removeDefault = e.unwrap;
});
export function _default(e, t) {
  return new ZodDefault({
    type: "default",
    innerType: e,
    get defaultValue() {
      if (typeof t == "function") {
        return t();
      } else {
        return q(t);
      }
    }
  });
}
export let ZodPrefault = f("ZodPrefault", (e, t) => {
  nS.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function prefault(e, t) {
  return new ZodPrefault({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      if (typeof t == "function") {
        return t();
      } else {
        return q(t);
      }
    }
  });
}
export let ZodNonOptional = f("ZodNonOptional", (e, t) => {
  nI.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function nonoptional(e, t) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType: e,
    ...Q(t)
  });
}
export let ZodSuccess = f("ZodSuccess", (e, t) => {
  nE.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function success(e) {
  return new ZodSuccess({
    type: "success",
    innerType: e
  });
}
export let ZodCatch = f("ZodCatch", (e, t) => {
  nj.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
  e.removeCatch = e.unwrap;
});
export function catch(e, t) {
  return new ZodCatch({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
export let ZodNaN = f("ZodNaN", (e, t) => {
  nU.init(e, t);
  ZodType.init(e, t);
});
export function nan(e) {
  return od(ZodNaN, e);
}
export let ZodPipe = f("ZodPipe", (e, t) => {
  nT.init(e, t);
  ZodType.init(e, t);
  e.in = t.in;
  e.out = t.out;
});
export function pipe(e, t) {
  return new ZodPipe({
    type: "pipe",
    in: e,
    out: t
  });
}
export let ZodCodec = f("ZodCodec", (e, t) => {
  ZodPipe.init(e, t);
  nD.init(e, t);
});
export function codec(e, t, r) {
  return new ZodCodec({
    type: "pipe",
    in: e,
    out: t,
    transform: r.decode,
    reverseTransform: r.encode
  });
}
export let ZodReadonly = f("ZodReadonly", (e, t) => {
  nP.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function readonly(e) {
  return new ZodReadonly({
    type: "readonly",
    innerType: e
  });
}
export let ZodTemplateLiteral = f("ZodTemplateLiteral", (e, t) => {
  nC.init(e, t);
  ZodType.init(e, t);
});
export function templateLiteral(e, t) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts: e,
    ...Q(t)
  });
}
export let ZodLazy = f("ZodLazy", (e, t) => {
  nZ.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.getter();
});
export function lazy(e) {
  return new ZodLazy({
    type: "lazy",
    getter: e
  });
}
export let ZodPromise = f("ZodPromise", (e, t) => {
  nL.init(e, t);
  ZodType.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function promise(e) {
  return new ZodPromise({
    type: "promise",
    innerType: e
  });
}
export let ZodFunction = f("ZodFunction", (e, t) => {
  nM.init(e, t);
  ZodType.init(e, t);
});
export function _function(e) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(e?.input) ? tuple(e?.input) : e?.input ?? array(unknown()),
    output: e?.output ?? unknown()
  });
}
export let ZodCustom = f("ZodCustom", (e, t) => {
  nF.init(e, t);
  ZodType.init(e, t);
});
export function check(e) {
  let t = new t1({
    check: "custom"
  });
  t._zod.check = e;
  return t;
}
export function custom(e, t) {
  return se(ZodCustom, e ?? (() => true), t);
}
export function refine(e, t = {}) {
  return st(ZodCustom, e, t);
}
export function superRefine(e) {
  return sr(e);
}
export function instanceof(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  let r = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: t => t instanceof e,
    abort: true,
    ...Q(t)
  });
  r._zod.bag.Class = e;
  return r;
}
export let stringbool = (...e) => si({
  Codec: ZodCodec,
  Boolean: ZodBoolean,
  String: ZodString
}, ...e);
export function json(e) {
  let t = lazy(() => union([string(e), number(), boolean(), null(), array(t), record(string(), t)]));
  return t;
}
export function preprocess(e, t) {
  return pipe(transform(e), t);
}
export let ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
export function setErrorMap(e) {
  config({
    customError: e
  });
}
export function getErrorMap() {
  return config().customError;
}
function l8(e) {
  return aS(ZodString, e);
}
function l9(e) {
  return a0(ZodNumber, e);
}
function l7(e) {
  return a8(ZodBoolean, e);
}
function ce(e) {
  return a7(ZodBigInt, e);
}
function ct(e) {
  return oc(ZodDate, e);
}
ZodFirstPartyTypeKind ||= {};
config(n8());