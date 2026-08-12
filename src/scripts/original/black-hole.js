var lu = Object.defineProperty;
var cu = (r, e, t) =>
  e in r
    ? lu(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var Xr = (r, e, t) => (cu(r, typeof e != "symbol" ? e + "" : e, t), t);
const hu = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
};
hu();
const to = "141",
  mi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  gi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  uu = 0,
  Io = 1,
  du = 2,
  Cc = 1,
  Lc = 2,
  _s = 3,
  ki = 0,
  qt = 1,
  cn = 2,
  fu = 1,
  Un = 0,
  zi = 1,
  Sr = 2,
  Fo = 3,
  No = 4,
  pu = 5,
  Di = 100,
  mu = 101,
  gu = 102,
  zo = 103,
  Oo = 104,
  vu = 200,
  _u = 201,
  xu = 202,
  yu = 203,
  Rc = 204,
  Pc = 205,
  Mu = 206,
  wu = 207,
  bu = 208,
  Su = 209,
  Tu = 210,
  Eu = 0,
  Au = 1,
  Cu = 2,
  Fa = 3,
  Lu = 4,
  Ru = 5,
  Pu = 6,
  Du = 7,
  zr = 0,
  Iu = 1,
  Fu = 2,
  $t = 0,
  Dc = 1,
  Ic = 2,
  Fc = 3,
  Nc = 4,
  Nu = 5,
  zc = 300,
  Ui = 301,
  Bi = 302,
  Tr = 303,
  Na = 304,
  Or = 306,
  hn = 1e3,
  gt = 1001,
  Er = 1002,
  ft = 1003,
  za = 1004,
  Oa = 1005,
  $e = 1006,
  Oc = 1007,
  li = 1008,
  oi = 1009,
  zu = 1010,
  Ou = 1011,
  kc = 1012,
  ku = 1013,
  ii = 1014,
  Ft = 1015,
  Mn = 1016,
  Uu = 1017,
  Bu = 1018,
  Oi = 1020,
  Vu = 1021,
  Gu = 1022,
  Nt = 1023,
  Hu = 1024,
  Wu = 1025,
  ri = 1026,
  Vi = 1027,
  Uc = 1028,
  ju = 1029,
  Xu = 1030,
  qu = 1031,
  $u = 1033,
  qr = 33776,
  $r = 33777,
  Yr = 33778,
  Kr = 33779,
  ko = 35840,
  Uo = 35841,
  Bo = 35842,
  Vo = 35843,
  Yu = 36196,
  Go = 37492,
  Ho = 37496,
  Wo = 37808,
  jo = 37809,
  Xo = 37810,
  qo = 37811,
  $o = 37812,
  Yo = 37813,
  Ko = 37814,
  Zo = 37815,
  Jo = 37816,
  Qo = 37817,
  el = 37818,
  tl = 37819,
  nl = 37820,
  il = 37821,
  sl = 36492,
  Es = 2300,
  Gi = 2301,
  Zr = 2302,
  rl = 2400,
  al = 2401,
  ol = 2402,
  Ku = 2500,
  Zu = 2501,
  Ju = 1,
  Bc = 2,
  Vn = 3e3,
  Pe = 3001,
  Qu = 3200,
  ed = 3201,
  ci = 0,
  td = 1,
  yn = "srgb",
  si = "srgb-linear",
  Jr = 7680,
  nd = 519,
  ka = 35044,
  Tn = "300 es",
  Ua = 1035;
class hi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const dt = [];
for (let r = 0; r < 256; r++) dt[r] = (r < 16 ? "0" : "") + r.toString(16);
let ll = 1234567;
const ys = Math.PI / 180,
  As = 180 / Math.PI;
function Yt() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    dt[r & 255] +
    dt[(r >> 8) & 255] +
    dt[(r >> 16) & 255] +
    dt[(r >> 24) & 255] +
    "-" +
    dt[e & 255] +
    dt[(e >> 8) & 255] +
    "-" +
    dt[((e >> 16) & 15) | 64] +
    dt[(e >> 24) & 255] +
    "-" +
    dt[(t & 63) | 128] +
    dt[(t >> 8) & 255] +
    "-" +
    dt[(t >> 16) & 255] +
    dt[(t >> 24) & 255] +
    dt[n & 255] +
    dt[(n >> 8) & 255] +
    dt[(n >> 16) & 255] +
    dt[(n >> 24) & 255]
  ).toLowerCase();
}
function at(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function no(r, e) {
  return ((r % e) + e) % e;
}
function id(r, e, t, n, i) {
  return n + ((r - e) * (i - n)) / (t - e);
}
function sd(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Ms(r, e, t) {
  return (1 - t) * r + t * e;
}
function rd(r, e, t, n) {
  return Ms(r, e, 1 - Math.exp(-t * n));
}
function ad(r, e = 1) {
  return e - Math.abs(no(r, e * 2) - e);
}
function od(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * (3 - 2 * r));
}
function ld(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * r * (r * (r * 6 - 15) + 10));
}
function cd(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function hd(r, e) {
  return r + Math.random() * (e - r);
}
function ud(r) {
  return r * (0.5 - Math.random());
}
function dd(r) {
  r !== void 0 && (ll = r);
  let e = (ll += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function fd(r) {
  return r * ys;
}
function pd(r) {
  return r * As;
}
function Ba(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function Vc(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Ar(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function md(r, e, t, n, i) {
  const s = Math.cos,
    a = Math.sin,
    o = s(t / 2),
    l = a(t / 2),
    c = s((e + n) / 2),
    u = a((e + n) / 2),
    h = s((e - n) / 2),
    d = a((e - n) / 2),
    f = s((n - e) / 2),
    g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * u, l * h, l * d, o * c);
      break;
    case "YZY":
      r.set(l * d, o * u, l * h, o * c);
      break;
    case "ZXZ":
      r.set(l * h, l * d, o * u, o * c);
      break;
    case "XZX":
      r.set(o * u, l * g, l * f, o * c);
      break;
    case "YXY":
      r.set(l * f, o * u, l * g, o * c);
      break;
    case "ZYZ":
      r.set(l * g, l * f, o * u, o * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function gd(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function vd(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var jt = Object.freeze({
  __proto__: null,
  DEG2RAD: ys,
  RAD2DEG: As,
  generateUUID: Yt,
  clamp: at,
  euclideanModulo: no,
  mapLinear: id,
  inverseLerp: sd,
  lerp: Ms,
  damp: rd,
  pingpong: ad,
  smoothstep: od,
  smootherstep: ld,
  randInt: cd,
  randFloat: hd,
  randFloatSpread: ud,
  seededRandom: dd,
  degToRad: fd,
  radToDeg: pd,
  isPowerOfTwo: Ba,
  ceilPowerOfTwo: Vc,
  floorPowerOfTwo: Ar,
  setQuaternionFromProperEuler: md,
  normalize: vd,
  denormalize: gd,
});
class ve {
  constructor(e = 0, t = 0) {
    (this.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return (this.x /= e), (this.y /= e), this;
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    return Math.acos(at(this.dot(e) / (this.length() * e.length()), -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt((this.x - e.x) * (this.x - e.x) + (this.y - e.y) * (this.y - e.y));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * i + e.x), (this.y = s * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Xe {
  constructor(
    e,
    t,
    n = !1,
    i = e === void 0 ? 0 : e.byteOffset,
    s = e === void 0 ? (e.byteLength - i) / Float32Array.BYTES_PER_ELEMENT : 0
  ) {
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = s),
      (this.normalized = n),
      (this.usage = ka),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.gpuType = Vn),
      (this.version = 0),
      (this.uuid = Yt());
  }
  onUploadCallback() {}
  setUsage(e) {
    return (this.usage = e), this;
  }
  getUsage() {
    return this.usage;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  applyMatrix3(e) {
    const t = this.array;
    if (this.itemSize === 2) {
      for (let n = 0, i = t.length; n < i; n += 2) {
        (cs.x = t[n]), (cs.y = t[n + 1]), cs.applyMatrix3(e), (t[n] = cs.x), (t[n + 1] = cs.y);
      }
    }
    if (this.itemSize === 3) {
      for (let n = 0, i = t.length; n < i; n += 3) {
        (cs.x = t[n]),
          (cs.y = t[n + 1]),
          (cs.z = t[n + 2]),
          cs.applyMatrix3(e),
          (t[n] = cs.x),
          (t[n + 1] = cs.y),
          (t[n + 2] = cs.z);
      }
    }
    return this;
  }
  applyMatrix4(e) {
    const t = this.array;
    if (this.itemSize === 2) {
      for (let n = 0, i = t.length; n < i; n += 2) {
        (cs.x = t[n]), (cs.y = t[n + 1]), cs.applyMatrix4(e), (t[n] = cs.x), (t[n + 1] = cs.y);
      }
    }
    if (this.itemSize === 3) {
      for (let n = 0, i = t.length; n < i; n += 3) {
        (cs.x = t[n]),
          (cs.y = t[n + 1]),
          (cs.z = t[n + 2]),
          cs.applyMatrix4(e),
          (t[n] = cs.x),
          (t[n + 1] = cs.y),
          (t[n + 2] = cs.z);
      }
    }
    if (this.itemSize === 4) {
      for (let n = 0, i = t.length; n < i; n += 4) {
        (cs.x = t[n]),
          (cs.y = t[n + 1]),
          (cs.z = t[n + 2]),
          (cs.w = t[n + 3]),
          cs.applyMatrix4(e),
          (t[n] = cs.x),
          (t[n + 1] = cs.y),
          (t[n + 2] = cs.z),
          (t[n + 3] = cs.w);
      }
    }
    return this;
  }
  applyNormalMatrix(e) {
    const t = this.array;
    for (let n = 0, i = t.length; n < i; n += 3) {
      (cs.x = t[n]), (cs.y = t[n + 1]), (cs.z = t[n + 2]), cs.applyNormalMatrix(e), (t[n] = cs.x), (t[n + 1] = cs.y), (t[n + 2] = cs.z);
    }
    return this;
  }
  transformDirection(e) {
    const t = this.array;
    for (let n = 0, i = t.length; n < i; n += 3) {
      (cs.x = t[n]), (cs.y = t[n + 1]), (cs.z = t[n + 2]), cs.transformDirection(e), (t[n] = cs.x), (t[n + 1] = cs.y), (t[n + 2] = cs.z);
    }
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = gd(t, this.array)), t;
  }
  setX(e, t) {
    return (
      (t = this.normalized ? vd(t, this.array) : t),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = gd(t, this.array)), t;
  }
  setY(e, t) {
    return (
      (t = this.normalized ? vd(t, this.array) : t),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = gd(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      (t = this.normalized ? vd(t, this.array) : t),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = gd(t, this.array)), t;
  }
  setW(e, t) {
    return (
      (t = this.normalized ? vd(t, this.array) : t),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      (t = this.normalized ? vd(t, this.array) : t),
      (n = this.normalized ? vd(n, this.array) : n),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      (t = this.normalized ? vd(t, this.array) : t),
      (n = this.normalized ? vd(n, this.array) : n),
      (i = this.normalized ? vd(i, this.array) : i),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      (t = this.normalized ? vd(t, this.array) : t),
      (n = this.normalized ? vd(n, this.array) : n),
      (i = this.normalized ? vd(i, this.array) : i),
      (s = this.normalized ? vd(s, this.array) : s),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return this.name !== "" && (e.name = this.name), e;
  }
}
Xr(Xe, "isInterleavedBufferAttribute", !1);
const cs = /* @__PURE__ */ new de();
class ct extends hi {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: cl++ }),
      (this.uuid = Yt()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (hl(e) ? mn : dn)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix3(e) {
    const t = this.attributes;
    for (const n in t) t[n].applyMatrix3(e);
    return this;
  }
  applyMatrix4(e) {
    const t = this.attributes;
    for (const n in t) t[n].applyMatrix4(e);
    return this;
  }
  applyQuaternion(e) {
    const t = this.attributes;
    for (const n in t) n !== "position" && n !== "normal" && console.warn("THREE.BufferGeometry: .applyQuaternion() currently only supports position and normal attributes."), t[n].applyQuaternion(e);
    return this;
  }
  rotateX(e) {
    return this.applyMatrix4(ul.rotateX(e)), this;
  }
  rotateY(e) {
    return this.applyMatrix4(ul.rotateY(e)), this;
  }
  rotateZ(e) {
    return this.applyMatrix4(ul.rotateZ(e)), this;
  }
  translate(e, t, n) {
    return this.applyMatrix4(ul.translate(e, t, n)), this;
  }
  scale(e, t, n) {
    return this.applyMatrix4(ul.scale(e, t, n)), this;
  }
  lookAt(e) {
    return hl.lookAt(e), hl.updateMatrix(), this.applyMatrix4(hl.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ul).negate(), this.translate(ul.x, ul.y, ul.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Xe(new Float32Array(t), 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ue());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new P(-Infinity, -Infinity, -Infinity),
          new P(Infinity, Infinity, Infinity)
        );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          dl.setFromBufferAttribute(s),
            this.boundingBox.expandByPoint(dl.min),
            this.boundingBox.expandByPoint(dl.max);
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is probably not valid.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ze());
    const e = this.attributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new P(), Infinity);
      return;
    }
    if (e) {
      const t = e.array;
      if (t.length >= e.count * 3)
        for (let i = 0, s = e.count * 3; i < s; i += 3) {
          ul.fromBufferAttribute(e, i / 3);
          const a = ul.length();
          a > r && ((r = a), n.copy(ul));
        }
      this.boundingSphere.set(n, r);
    }
  }
  computeFaceNormals() {
    console.warn(
      "THREE.BufferGeometry: computeFaceNormals() has been removed. Use BufferGeometryUtils.computeTangents( geometry ) instead."
    );
  }
  computeTangents() {
    console.warn(
      "THREE.BufferGeometry: .computeTangents() has been removed. Use BufferGeometryUtils.computeTangents() instead."
    );
  }
  computeVertexNormals() {
    const e = this.attributes;
    if (e.position) {
      const t = e.position.array;
      if (e.normal === void 0)
        this.setAttribute("normal", new Xe(new Float32Array(t.length), 3));
      else {
        const u = e.normal.array;
        for (let h = 0, d = u.length; h < d; h++) u[h] = 0;
      }
      const n = e.normal.array;
      let i, s, a;
      const o = new P(),
        l = new P(),
        c = new P();
      if (this.index) {
        const u = this.index.array,
          h = this.groups.length > 0 ? this.groups : [{ start: 0, count: u.length }];
        for (let f = 0, g = h.length; f < g; ++f) {
          const p = h[f];
          (i = p.start), (s = p.count);
          for (let m = i, _ = i + s; m < _; m += 3)
            fl(t, u[m + 0], u[m + 1], u[m + 2], n, o, l, c);
        }
      } else {
        (i = 0), (s = t.length / 3);
        for (let u = 0; u < s; u += 3) fl(t, u, u + 1, u + 2, n, o, l, c);
      }
      this.normalizeNormals();
    } else
      console.error(
        "THREE.BufferGeometry.computeVertexNormals(): Geometry must have a position attribute."
      );
  }
  hasNormals() {
    return this.attributes.normal !== void 0;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    if (!e) return;
    const t = e.array;
    for (let n = 0, i = t.length; n < i; n += 3)
      ul.fromArray(t, n), ul.normalize(), ul.toArray(t, n);
  }
  toNonIndexed() {
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const e = new ct(),
      t = this.index.array,
      n = this.attributes;
    for (const i in n) {
      const s = n[i],
        a = s.array,
        o = s.itemSize,
        l = new a.constructor(t.length * o);
      let c = 0,
        u = 0;
      for (let h = 0, d = t.length; h < d; h++) {
        (c = t[h] * o), l.set(a.subarray(c, c + o), u), (u += o);
      }
      e.setAttribute(i, new Xe(l, o));
    }
    const i = this.morphAttributes;
    for (const s in i) {
      const a = i[s],
        o = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l],
          h = u.array,
          d = u.itemSize,
          f = new h.constructor(t.length * d);
        let g = 0,
          p = 0;
        for (let m = 0, _ = t.length; m < _; m++) {
          (g = t[m] * d), f.set(h.subarray(g, g + d), p), (p += d);
        }
        o[l] = new Xe(f, d);
      }
      e.morphAttributes[s] = o;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let a = 0, o = s.length; a < o; a++) {
      const l = s[a];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  toJSON() {
    const e = {
      uuid: this.uuid,
      type: this.type,
    };

    // Comparar name por valor (si es una cadena)
    if (this.name !== "" && typeof this.name === "string") {
      e.name = this.name;
      if (e.name !== (typeof e.name === "string" ? e.name : "")) {
        console.warn("Name mismatch detected, using this.name:", this.name);
      }
    }

    // Comparar userData por contenido
    if (Object.keys(this.userData).length > 0) {
      e.userData = JSON.parse(JSON.stringify(this.userData)); // Clonar para comparar valores
      if (!deepEqual(e.userData, this.userData)) {
        console.warn("userData mismatch detected, using this.userData:", this.userData);
      }
    }

    const t = {};
    for (const n in this.attributes) {
      const i = this.attributes[n].toJSON(e);
      t[n] = i;
      // Comparar por contenido en lugar de referencia
      if (JSON.stringify(t[n]) !== JSON.stringify(this.attributes[n].toJSON(e))) {
        console.warn(`Attribute ${n} mismatch, using computed value`);
      }
    }

    if (Object.keys(this.morphAttributes).length > 0) {
      e.morphAttributes = {};
      for (const n in this.morphAttributes) {
        const s = this.morphAttributes[n];
        const a = [];
        for (let o = 0, l = s.length; o < l; o++) {
          const c = s[o].toJSON(e);
          a.push(c);
          // Comparar por contenido
          if (JSON.stringify(a[o]) !== JSON.stringify(s[o].toJSON(e))) {
            console.warn(`Morph attribute ${n}[${o}] mismatch`);
          }
        }
        e.morphAttributes[n] = a;
      }
    }

    e.morphTargetsRelative = this.morphTargetsRelative;
    if (e.morphTargetsRelative !== this.morphTargetsRelative) {
      console.warn("morphTargetsRelative mismatch, using this value:", this.morphTargetsRelative);
    }

    const i = this.groups;
    if (i.length > 0) {
      e.groups = JSON.parse(JSON.stringify(i)); // Clonar grupos
    }

    const s = this.boundingBox;
    if (s !== null) {
      e.boundingBox = s.toJSON();
    }

    const a = this.boundingSphere;
    if (a !== null) {
      e.boundingSphere = a.toJSON();
    }

    if (this.drawRange.count !== 1 / 0) {
      e.drawRange = this.drawRange;
    }

    return e;
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = e.attributes;
    for (const n in t) {
      const i = t[n].clone();
      this.setAttribute(n, i);
    }
    const i = e.morphAttributes;
    for (const n in i) {
      const s = [],
        a = i[n];
      for (let o = 0, l = a.length; o < l; o++) s[o] = a[o].clone();
      this.morphAttributes[n] = s;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let n = 0, i = s.length; n < i; n++) {
      const a = s[n];
      this.addGroup(a.start, a.count, a.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const o = e.boundingSphere;
    o !== null && (this.boundingSphere = o.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData);
    const l = e.index;
    return l !== null && this.setIndex(l.clone()), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ul = /* @__PURE__ */ new P(),
  dl = /* @__PURE__ */ new Ue(),
  hl = /* @__PURE__ */ new de(),
  fl = (r, e, t, n, i, s, a, o) => {
    const l = 3 * e,
      c = 3 * t,
      u = 3 * n;
    s.fromArray(r, l),
      a.fromArray(r, c),
      o.fromArray(r, u),
      a.sub(s),
      o.sub(s),
      a.cross(o),
      (i[l] += a.x),
      (i[l + 1] += a.y),
      (i[l + 2] += a.z),
      (i[c] += a.x),
      (i[c + 1] += a.y),
      (i[c + 2] += a.z),
      (i[u] += a.x),
      (i[u + 1] += a.y),
      (i[u + 2] += a.z);
  },
  cl = 0;
function hl(r) {
  let e = [];
  for (let t = 0, n = r.length; t < n; t++) {
    const i = r[t];
    e = e.concat(i);
  }
  return e;
}
function dn(r, e) {
  return new (r.length > 65535 ? Uint32Array : Uint16Array)(r, e);
}
function mn(r, e) {
  return new Float32Array(r, e);
}
Xr(ct, "MaxIndex", 65535);
class Gn extends ct {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = i + 1,
      c = s + 1,
      u = a + 1,
      h = i * s * a,
      d = (i * s + s * a + a * i) * 6,
      f = new Float32Array(3 * d),
      g = new Float32Array(3 * d),
      p = new Float32Array(2 * d);
    let m = 0,
      _ = 0;
    pl(f, g, p, m, _, t, n, a, u, 0),
      pl(f, g, p, (m += a * s), (_ += a * c), t, n, a, u, 1),
      gl(f, g, p, (m += a * s), (_ += a * c), e, n, i, l, 2),
      gl(f, g, p, (m += i * a), (_ += l * u), e, n, i, l, 3),
      vl(f, g, p, (m += i * a), (_ += l * u), e, t, i, l, 4),
      vl(f, g, p, (m += i * s), (_ += l * c), e, t, i, l, 5),
      this.setIndex(new dn(hl([0, 1, 2, 3, 4, 5].map((v) => Array.from({ length: v * 6 }, (_, x) => x % 6 < 3 ? m + (x / 6) * v : m + Math.floor(x / 6) * v + (x % 6 - 3) + v)), 0))),
      this.setAttribute("position", new Xe(f, 3)),
      this.setAttribute("normal", new Xe(g, 3)),
      this.setAttribute("uv", new Xe(p, 2));
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new Gn(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function pl(r, e, t, n, i, s, a, o, l, c) {
  const u = s / 2,
    h = a / 2,
    d = o / 2,
    f = (o + 1) * (l + 1),
    g = o * l * 6;
  let p = 0,
    m = 0;
  for (let _ = 0; _ <= l; _++) {
    const v = _ / l * a - h;
    for (let x = 0; x <= o; x++) {
      const y = x / o * s - u,
        M = c === 0 ? -1 : 1,
        w = p * 3;
      (r[w] = y * M),
        (r[w + 1] = v * M),
        (r[w + 2] = d * M),
        (e[w] = 0),
        (e[w + 1] = 0),
        (e[w + 2] = d * M > 0 ? 1 : -1);
      const b = p * 2;
      (t[b] = x / o), (t[b + 1] = 1 - _ / l), p++;
      if (_ < l && x < o) {
        const S = n + p - 1,
          T = S - o - 1,
          E = T + 1,
          A = S;
        (i[m++] = T),
          (i[m++] = E),
          (i[m++] = A),
          (i[m++] = T),
          (i[m++] = A),
          (i[m++] = S);
      }
    }
  }
}
function gl(r, e, t, n, i, s, a, o, l, c) {
  const u = s / 2,
    h = a / 2,
    d = o / 2,
    f = (o + 1) * (l + 1),
    g = o * l * 6;
  let p = 0,
    m = 0;
  for (let _ = 0; _ <= l; _++) {
    const v = _ / l * a - h;
    for (let x = 0; x <= o; x++) {
      const y = x / o * s - u,
        M = c === 2 ? -1 : 1,
        w = p * 3;
      (r[w] = d * M),
        (r[w + 1] = v * M),
        (r[w + 2] = y * M),
        (e[w] = 0),
        (e[w + 1] = 0),
        (e[w + 2] = y * M > 0 ? 1 : -1);
      const b = p * 2;
      (t[b] = x / o), (t[b + 1] = 1 - _ / l), p++;
      if (_ < l && x < o) {
        const S = n + p - 1,
          T = S - o - 1,
          E = T + 1,
          A = S;
        (i[m++] = T),
          (i[m++] = E),
          (i[m++] = A),
          (i[m++] = T),
          (i[m++] = A),
          (i[m++] = S);
      }
    }
  }
}
function vl(r, e, t, n, i, s, a, o, l, c) {
  const u = s / 2,
    h = a / 2,
    d = o / 2,
    f = (o + 1) * (l + 1),
    g = o * l * 6;
  let p = 0,
    m = 0;
  for (let _ = 0; _ <= l; _++) {
    const v = _ / l * a - h;
    for (let x = 0; x <= o; x++) {
      const y = x / o * s - u,
        M = c === 4 ? -1 : 1,
        w = p * 3;
      (r[w] = y * M),
        (r[w + 1] = d * M),
        (r[w + 2] = v * M),
        (e[w] = 0),
        (e[w + 1] = 0),
        (e[w + 2] = v * M > 0 ? 1 : -1);
      const b = p * 2;
      (t[b] = x / o), (t[b + 1] = 1 - _ / l), p++;
      if (_ < l && x < o) {
        const S = n + p - 1,
          T = S - o - 1,
          E = T + 1,
          A = S;
        (i[m++] = T),
          (i[m++] = E),
          (i[m++] = A),
          (i[m++] = T),
          (i[m++] = A),
          (i[m++] = S);
      }
    }
  }
}
class ho extends ct {
  constructor(e = 1, t = 1, n = 32, i = 64) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: s,
        openEnded: a,
        thetaStart: o,
        thetaLength: l,
      });
    const c = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (a = a || !1), (o = o || 0), (l = l || Math.PI * 2);
    const u = [],
      h = [];
    let d = 0;
    _l(),
      xl(a ? 1 : 0, d, -n / 2, 0),
      xl(a ? s : s - 1, (d += i + 1), n / 2, i + 1),
      this.setIndex(u),
      this.setAttribute("position", new Xe(new Float32Array(h), 3)),
      this.setAttribute("normal", new Xe(new Float32Array(h.length), 3)),
      this.setAttribute("uv", new Xe(new Float32Array(h.length / 3 * 2), 2));
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new ho(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class br {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
  }
  create(e, t) {
    (this.canvas.width = e),
      (this.canvas.height = t),
      this.context.fillStyle = "rgb(0, 0, 0)",
      this.context.fillRect(0, 0, e, t);
    for (let n = 0; n < e * t * 0.1; n++) {
      const i = Math.floor(Math.random() * e),
        s = Math.floor(Math.random() * t),
        a = Math.random() * 255;
      this.context.fillStyle = `rgb(${a}, ${a}, ${a})`;
      this.context.fillRect(i, s, 1, 1);
    }
    const r = new THREE.CanvasTexture(this.canvas);
    return (r.wrapS = THREE.RepeatWrapping), (r.wrapT = THREE.RepeatWrapping), r;
  }
}
class Q_ {
  constructor() {
    (this.experience = new Zt()),
      (this.config = this.experience.config),
      (this.scenes = this.experience.scenes),
      (this.time = this.experience.time),
      (this.debug = this.experience.debug),
      (this.sizes = this.experience.sizes),
      (this.camera = this.experience.camera),
      (this.renderer = this.experience.renderer),
      (this.noises = new br()),
      this.setCommonUniforms(),
      this.setParticles(),
      this.setDisc(),
      this.setDistortion();
  }
  setCommonUniforms() {
    if (
      ((this.commonUniforms = {}),
      (this.commonUniforms.uInnerColor = { value: new de("#ff8080") }),
      (this.commonUniforms.uOuterColor = { value: new de("#3633ff") }),
      this.debug.active)
    ) {
      const e = this.debug.ui.getFolder("blackhole");
      e.addColor(this.commonUniforms.uInnerColor, "value"),
        e.addColor(this.commonUniforms.uOuterColor, "value");
    }
  }
  setDisc() {
    (this.disc = {}),
      (this.disc.geometry = new ho(5, 1, 0, 64, 10, !0)),
      (this.disc.noiseTexture = this.noises.create(128, 128)),
      (this.disc.material = new H_()),
      (this.disc.material.uniforms.uNoiseTexture.value =
        this.disc.noiseTexture),
      (this.disc.material.uniforms.uInnerColor =
        this.commonUniforms.uInnerColor),
      (this.disc.material.uniforms.uOuterColor =
        this.commonUniforms.uOuterColor),
      (this.disc.mesh = new Qe(this.disc.geometry, this.disc.material)),
      this.scenes.space.add(this.disc.mesh);
  }
  setParticles() {
    (this.particles = {}), (this.particles.count = 5e4);
    const e = new Float32Array(this.particles.count),
      t = new Float32Array(this.particles.count),
      n = new Float32Array(this.particles.count);
    for (let i = 0; i < this.particles.count; i++)
      (e[i] = Math.random()), (t[i] = Math.random()), (n[i] = Math.random());
    (this.particles.geometry = new ct()),
      this.particles.geometry.setAttribute("position", new Xe(e, 1)),
      this.particles.geometry.setAttribute("aSize", new Xe(t, 1)),
      this.particles.geometry.setAttribute("aRandom", new Xe(n, 1)),
      (this.particles.material = new X_()),
      (this.particles.material.uniforms.uViewHeight.value =
        this.renderer.composition.space.height),
      (this.particles.material.uniforms.uInnerColor =
        this.commonUniforms.uInnerColor),
      (this.particles.material.uniforms.uOuterColor =
        this.commonUniforms.uOuterColor),
      (this.particles.points = new co(
        this.particles.geometry,
        this.particles.material
      )),
      (this.particles.points.frustumCulled = !1),
      this.scenes.space.add(this.particles.points);
  }
  setDistortion() {
    (this.distortion = {}),
      (this.distortion.active = {}),
      (this.distortion.active.geometry = new Gn(1, 1)),
      (this.distortion.active.material = new Y_()),
      (this.distortion.active.mesh = new Qe(
        this.distortion.active.geometry,
        this.distortion.active.material
      )),
      this.distortion.active.mesh.scale.set(10, 10, 10),
      this.scenes.distortion.add(this.distortion.active.mesh),
      (this.distortion.mask = {}),
      (this.distortion.mask.geometry = new Gn(1, 1)),
      (this.distortion.mask.material = new J_()),
      (this.distortion.mask.mesh = new Qe(
        this.distortion.mask.geometry,
        this.distortion.mask.material
      )),
      this.distortion.mask.mesh.scale.set(10, 10, 10),
      (this.distortion.mask.mesh.rotation.x = Math.PI * 0.5),
      this.scenes.distortion.add(this.distortion.mask.mesh);
  }
  resize() {
    this.particles.material.uniforms.uViewHeight.value = this.sizes.height;
  }
  update() {
    const e = new P(0, 0, 0);
    e.project(this.camera.instance),
      (e.x = e.x * 0.5 + 0.5),
      (e.y = e.y * 0.5 + 0.5),
      (this.disc.material.uniforms.uTime.value = this.time.elapsed),
      (this.particles.material.uniforms.uTime.value = this.time.elapsed + 9999),
      this.distortion.active.mesh.lookAt(this.camera.instance.position),
      this.renderer.composition.final.material.uniforms.uBlackHolePosition.value.set(
        e.x,
        e.y
      );
  }
}
var ex = `#define PI 3.1415926538

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;
uniform vec3 uInnerColor;
uniform vec3 uOuterColor;
uniform float uViewHeight;
uniform float uSize;

in vec3 position;
in float aSize;
in vec3 aColor;

out vec3 vColor;

void gl_main()
{
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;

    gl_PointSize = aSize * uSize * uViewHeight;
    

    vColor = aColor;
}`,
  tx = `precision highp float;
precision highp int;

layout(location = 0) out vec4 pc_FragColor;

in vec3 vColor;

void main()
{
    
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if(distanceToCenter > 0.5)
        discard;

    pc_FragColor = vec4(vColor, 1.0);
    
}`;
function nx() {
  return new jn({
    glslVersion: Tn,
    depthWrite: !1,
    depthTest: !1,
    uniforms: { uViewHeight: { value: 1024 }, uSize: { value: 0.001 } },
    vertexShader: ex,
    fragmentShader: tx,
  });
}
class ix {
  constructor() {
    (this.experience = new Zt()),
      (this.config = this.experience.config),
      (this.scenes = this.experience.scenes),
      (this.time = this.experience.time),
      (this.debug = this.experience.debug),
      (this.sizes = this.experience.sizes),
      (this.camera = this.experience.camera),
      (this.renderer = this.experience.renderer),
      this.setParticles();
  }
  setParticles() {
    (this.particles = {}), (this.particles.count = 5e4);
    const e = new Float32Array(this.particles.count * 3),
      t = new Float32Array(this.particles.count),
      n = new Float32Array(this.particles.count * 3);
    for (let i = 0; i < this.particles.count; i++) {
      const s = i * 3,
        a = 2 * Math.PI * Math.random(),
        o = Math.acos(2 * Math.random() - 1),
        l = Math.cos(a) * Math.sin(o) * 400,
        c = Math.sin(a) * Math.sin(o) * 400,
        u = Math.cos(o) * 400;
      (e[s + 0] = l), (e[s + 1] = c), (e[s + 2] = u), (t[i] = Math.random());
      const h = new de(`hsl(${Math.round(360 * Math.random())}, 100%, 80%)`);
      (n[s + 0] = h.r), (n[s + 1] = h.g), (n[s + 2] = h.b);
    }
    (this.particles.geometry = new ct()),
      this.particles.geometry.setAttribute("position", new Xe(e, 3)),
      this.particles.geometry.setAttribute("aSize", new Xe(t, 1)),
      this.particles.geometry.setAttribute("aColor", new Xe(n, 3)),
      (this.particles.material = new nx()),
      (this.particles.material.uniforms.uViewHeight.value =
        this.renderer.composition.space.height),
      (this.particles.points = new co(
        this.particles.geometry,
        this.particles.material
      )),
      (this.particles.points.frustumCulled = !1),
      this.scenes.space.add(this.particles.points);
  }
  resize() {
    this.particles.material.uniforms.uViewHeight.value = this.sizes.height;
  }
  update() {}
}
class sx {
  constructor(e) {
    (this.experience = new Zt()),
      (this.config = this.experience.config),
      (this.scenes = this.experience.scenes),
      (this.resources = this.experience.resources),
      (this.blackHole = new Q_()),
      (this.stars = new ix());
  }
  resize() {
    this.blackHole && this.blackHole.resize();
  }
  update() {
    this.blackHole && this.blackHole.update();
  }
  destroy() {}
}
var rx = [{ name: "base", data: {}, items: [] }];
const Ts = class {
  constructor(e = {}) {
    if (Ts.instance) return Ts.instance;
    if (
      ((Ts.instance = this),
      (this.targetElement = e.targetElement),
      !this.targetElement)
    ) {
      console.warn("Missing 'targetElement' property");
      return;
    }
    (this.time = new Y0()),
      (this.sizes = new K0()),
      this.setConfig(),
      this.setDebug(),
      this.setScenes(),
      this.setCamera(),
      this.setRenderer(),
      this.setResources(),
      this.setWorld(),
      this.sizes.on("resize", () => {
        this.resize();
      }),
      this.update();
  }
  setConfig() {
    (this.config = {}),
      (this.config.pixelRatio = Math.min(
        Math.max(window.devicePixelRatio, 1),
        2
      ));
    const e = this.targetElement.getBoundingClientRect();
   }