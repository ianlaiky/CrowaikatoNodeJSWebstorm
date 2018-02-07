!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ForceGraph3D = e()
}(this, function () {
    "use strict";
    !function (t, e) {
        if ("undefined" == typeof document) return e;
        t = t || "";
        var n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
        r.type = "text/css", n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
    }(".graph-nav-info {\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  text-align: center;\n  color: slategrey;\n  opacity: 0.7;\n  font-size: 10px;\n}\n\n.graph-info-msg {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  color: lavender;\n  opacity: 0.7;\n  font-size: 22px;\n}\n\n.graph-tooltip {\n  position: absolute;\n  color: lavender;\n  font-size: 18px;\n}", void 0), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), void 0 === Math.sign && (Math.sign = function (t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function () {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && (Object.assign = function (t) {
        if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (void 0 !== r && null !== r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
        }
        return e
    });

    function t() {
    }

    Object.assign(t.prototype, {
        addEventListener: function (t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
        }, hasEventListener: function (t, e) {
            if (void 0 === this._listeners) return !1;
            var n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        }, removeEventListener: function (t, e) {
            if (void 0 !== this._listeners) {
                var n = this._listeners[t];
                if (void 0 !== n) {
                    var r = n.indexOf(e);
                    -1 !== r && n.splice(r, 1)
                }
            }
        }, dispatchEvent: function (t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var n = e.slice(0), r = 0, i = n.length; r < i; r++) n[r].call(this, t)
                }
            }
        }
    });
    var e = "89", n = 0, r = 1, i = 2, a = 0, o = 1, s = 2, c = 0, h = 1, u = 2, l = 0, f = 1, d = 2, p = 0, m = 1,
        g = 2, v = 3, y = 4, b = 5, x = 100, w = 101, _ = 102, M = 103, E = 104, T = 200, S = 201, A = 202, L = 203,
        R = 204, P = 205, C = 206, N = 207, O = 208, I = 209, D = 210, U = 0, z = 1, B = 2, F = 3, k = 4, G = 5, H = 6,
        V = 7, j = 0, W = 1, q = 2, X = 0, Y = 1, Z = 2, J = 3, Q = 4, K = 301, $ = 302, tt = 303, et = 304, nt = 305,
        rt = 306, it = 307, at = 1e3, ot = 1001, st = 1002, ct = 1003, ht = 1004, ut = 1005, lt = 1006, ft = 1007,
        dt = 1008, pt = 1009, mt = 1010, gt = 1011, vt = 1012, yt = 1013, bt = 1014, xt = 1015, wt = 1016, _t = 1017,
        Mt = 1018, Et = 1019, Tt = 1020, St = 1021, At = 1022, Lt = 1023, Rt = 1024, Pt = 1025, Ct = Lt, Nt = 1026,
        Ot = 1027, It = 2001, Dt = 2002, Ut = 2003, zt = 2004, Bt = 2100, Ft = 2101, kt = 2102, Gt = 2103, Ht = 2151,
        Vt = 2201, jt = 2400, Wt = 0, qt = 1, Xt = 2, Yt = 3e3, Zt = 3001, Jt = 3007, Qt = 3002, Kt = 3004, $t = 3005,
        te = 3006, ee = 3200, ne = 3201, re = {
            DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function () {
                for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16).toUpperCase();
                return function () {
                    var e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0,
                        r = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
                    return t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & r | 128] + t[r >> 8 & 255] + "-" + t[r >> 16 & 255] + t[r >> 24 & 255] + t[255 & i] + t[i >> 8 & 255] + t[i >> 16 & 255] + t[i >> 24 & 255]
                }
            }(), clamp: function (t, e, n) {
                return Math.max(e, Math.min(n, t))
            }, euclideanModulo: function (t, e) {
                return (t % e + e) % e
            }, mapLinear: function (t, e, n, r, i) {
                return r + (t - e) * (i - r) / (n - e)
            }, lerp: function (t, e, n) {
                return (1 - n) * t + n * e
            }, smoothstep: function (t, e, n) {
                return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
            }, smootherstep: function (t, e, n) {
                return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
            }, randInt: function (t, e) {
                return t + Math.floor(Math.random() * (e - t + 1))
            }, randFloat: function (t, e) {
                return t + Math.random() * (e - t)
            }, randFloatSpread: function (t) {
                return t * (.5 - Math.random())
            }, degToRad: function (t) {
                return t * re.DEG2RAD
            }, radToDeg: function (t) {
                return t * re.RAD2DEG
            }, isPowerOfTwo: function (t) {
                return 0 == (t & t - 1) && 0 !== t
            }, ceilPowerOfTwo: function (t) {
                return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
            }, floorPowerOfTwo: function (t) {
                return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
            }
        };

    function ie(t, e) {
        this.x = t || 0, this.y = e || 0
    }

    Object.defineProperties(ie.prototype, {
        width: {
            get: function () {
                return this.x
            }, set: function (t) {
                this.x = t
            }
        }, height: {
            get: function () {
                return this.y
            }, set: function (t) {
                this.y = t
            }
        }
    }), Object.assign(ie.prototype, {
        isVector2: !0, set: function (t, e) {
            return this.x = t, this.y = e, this
        }, setScalar: function (t) {
            return this.x = t, this.y = t, this
        }, setX: function (t) {
            return this.x = t, this
        }, setY: function (t) {
            return this.y = t, this
        }, setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        }, getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y)
        }, copy: function (t) {
            return this.x = t.x, this.y = t.y, this
        }, add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        }, addScalar: function (t) {
            return this.x += t, this.y += t, this
        }, addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        }, addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        }, sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        }, subScalar: function (t) {
            return this.x -= t, this.y -= t, this
        }, subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        }, multiply: function (t) {
            return this.x *= t.x, this.y *= t.y, this
        }, multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this
        }, divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this
        }, divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        }, applyMatrix3: function (t) {
            var e = this.x, n = this.y, r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this
        }, min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        }, max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        }, clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        }, clampScalar: function () {
            var t = new ie, e = new ie;
            return function (n, r) {
                return t.set(n, n), e.set(r, r), this.clamp(t, e)
            }
        }(), clampLength: function (t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }, floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this
        }, dot: function (t) {
            return this.x * t.x + this.y * t.y
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y)
        }, normalize: function () {
            return this.divideScalar(this.length() || 1)
        }, angle: function () {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t
        }, distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        }, distanceToSquared: function (t) {
            var e = this.x - t.x, n = this.y - t.y;
            return e * e + n * n
        }, manhattanDistanceTo: function (t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        }, setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        }, lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        }, lerpVectors: function (t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        }, equals: function (t) {
            return t.x === this.x && t.y === this.y
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        }, fromBufferAttribute: function (t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
        }, rotateAround: function (t, e) {
            var n = Math.cos(e), r = Math.sin(e), i = this.x - t.x, a = this.y - t.y;
            return this.x = i * n - a * r + t.x, this.y = i * r + a * n + t.y, this
        }
    });

    function ae() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    Object.assign(ae.prototype, {
        isMatrix4: !0, set: function (t, e, n, r, i, a, o, s, c, h, u, l, f, d, p, m) {
            var g = this.elements;
            return g[0] = t, g[4] = e, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = u, g[14] = l, g[3] = f, g[7] = d, g[11] = p, g[15] = m, this
        }, identity: function () {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }, clone: function () {
            return (new ae).fromArray(this.elements)
        }, copy: function (t) {
            var e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
        }, copyPosition: function (t) {
            var e = this.elements, n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
        }, extractBasis: function (t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
        }, makeBasis: function (t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
        }, extractRotation: function () {
            var t = new se;
            return function (e) {
                var n = this.elements, r = e.elements, i = 1 / t.setFromMatrixColumn(e, 0).length(),
                    a = 1 / t.setFromMatrixColumn(e, 1).length(), o = 1 / t.setFromMatrixColumn(e, 2).length();
                return n[0] = r[0] * i, n[1] = r[1] * i, n[2] = r[2] * i, n[4] = r[4] * a, n[5] = r[5] * a, n[6] = r[6] * a, n[8] = r[8] * o, n[9] = r[9] * o, n[10] = r[10] * o, this
            }
        }(), makeRotationFromEuler: function (t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements, n = t.x, r = t.y, i = t.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r),
                c = Math.sin(r), h = Math.cos(i), u = Math.sin(i);
            if ("XYZ" === t.order) {
                var l = a * h, f = a * u, d = o * h, p = o * u;
                e[0] = s * h, e[4] = -s * u, e[8] = c, e[1] = f + d * c, e[5] = l - p * c, e[9] = -o * s, e[2] = p - l * c, e[6] = d + f * c, e[10] = a * s
            } else if ("YXZ" === t.order) {
                var m = s * h, g = s * u, v = c * h, y = c * u;
                e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s
            } else if ("ZXY" === t.order) {
                m = s * h, g = s * u, v = c * h, y = c * u;
                e[0] = m - y * o, e[4] = -a * u, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
            } else if ("ZYX" === t.order) {
                l = a * h, f = a * u, d = o * h, p = o * u;
                e[0] = s * h, e[4] = d * c - f, e[8] = l * c + p, e[1] = s * u, e[5] = p * c + l, e[9] = f * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s
            } else if ("YZX" === t.order) {
                var b = a * s, x = a * c, w = o * s, _ = o * c;
                e[0] = s * h, e[4] = _ - b * u, e[8] = w * u + x, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = x * u + w, e[10] = b - _ * u
            } else if ("XZY" === t.order) {
                b = a * s, x = a * c, w = o * s, _ = o * c;
                e[0] = s * h, e[4] = -u, e[8] = c * h, e[1] = b * u + _, e[5] = a * h, e[9] = x * u - w, e[2] = w * u - x, e[6] = o * h, e[10] = _ * u + b
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }, makeRotationFromQuaternion: function (t) {
            var e = this.elements, n = t._x, r = t._y, i = t._z, a = t._w, o = n + n, s = r + r, c = i + i, h = n * o,
                u = n * s, l = n * c, f = r * s, d = r * c, p = i * c, m = a * o, g = a * s, v = a * c;
            return e[0] = 1 - (f + p), e[4] = u - v, e[8] = l + g, e[1] = u + v, e[5] = 1 - (h + p), e[9] = d - m, e[2] = l - g, e[6] = d + m, e[10] = 1 - (h + f), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }, lookAt: function () {
            var t = new se, e = new se, n = new se;
            return function (r, i, a) {
                var o = this.elements;
                return n.subVectors(r, i), 0 === n.lengthSq() && (n.z = 1), n.normalize(), t.crossVectors(a, n), 0 === t.lengthSq() && (1 === Math.abs(a.z) ? n.x += 1e-4 : n.z += 1e-4, n.normalize(), t.crossVectors(a, n)), t.normalize(), e.crossVectors(n, t), o[0] = t.x, o[4] = e.x, o[8] = n.x, o[1] = t.y, o[5] = e.y, o[9] = n.y, o[2] = t.z, o[6] = e.z, o[10] = n.z, this
            }
        }(), multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        }, premultiply: function (t) {
            return this.multiplyMatrices(t, this)
        }, multiplyMatrices: function (t, e) {
            var n = t.elements, r = e.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], h = n[1],
                u = n[5], l = n[9], f = n[13], d = n[2], p = n[6], m = n[10], g = n[14], v = n[3], y = n[7], b = n[11],
                x = n[15], w = r[0], _ = r[4], M = r[8], E = r[12], T = r[1], S = r[5], A = r[9], L = r[13], R = r[2],
                P = r[6], C = r[10], N = r[14], O = r[3], I = r[7], D = r[11], U = r[15];
            return i[0] = a * w + o * T + s * R + c * O, i[4] = a * _ + o * S + s * P + c * I, i[8] = a * M + o * A + s * C + c * D, i[12] = a * E + o * L + s * N + c * U, i[1] = h * w + u * T + l * R + f * O, i[5] = h * _ + u * S + l * P + f * I, i[9] = h * M + u * A + l * C + f * D, i[13] = h * E + u * L + l * N + f * U, i[2] = d * w + p * T + m * R + g * O, i[6] = d * _ + p * S + m * P + g * I, i[10] = d * M + p * A + m * C + g * D, i[14] = d * E + p * L + m * N + g * U, i[3] = v * w + y * T + b * R + x * O, i[7] = v * _ + y * S + b * P + x * I, i[11] = v * M + y * A + b * C + x * D, i[15] = v * E + y * L + b * N + x * U, this
        }, multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        }, applyToBufferAttribute: function () {
            var t = new se;
            return function (e) {
                for (var n = 0, r = e.count; n < r; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix4(this), e.setXYZ(n, t.x, t.y, t.z);
                return e
            }
        }(), determinant: function () {
            var t = this.elements, e = t[0], n = t[4], r = t[8], i = t[12], a = t[1], o = t[5], s = t[9], c = t[13],
                h = t[2], u = t[6], l = t[10], f = t[14];
            return t[3] * (+i * s * u - r * c * u - i * o * l + n * c * l + r * o * f - n * s * f) + t[7] * (+e * s * f - e * c * l + i * a * l - r * a * f + r * c * h - i * s * h) + t[11] * (+e * c * u - e * o * f - i * a * u + n * a * f + i * o * h - n * c * h) + t[15] * (-r * o * h - e * s * u + e * o * l + r * a * u - n * a * l + n * s * h)
        }, transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        }, setPosition: function (t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        }, getInverse: function (t, e) {
            var n = this.elements, r = t.elements, i = r[0], a = r[1], o = r[2], s = r[3], c = r[4], h = r[5], u = r[6],
                l = r[7], f = r[8], d = r[9], p = r[10], m = r[11], g = r[12], v = r[13], y = r[14], b = r[15],
                x = d * y * l - v * p * l + v * u * m - h * y * m - d * u * b + h * p * b,
                w = g * p * l - f * y * l - g * u * m + c * y * m + f * u * b - c * p * b,
                _ = f * v * l - g * d * l + g * h * m - c * v * m - f * h * b + c * d * b,
                M = g * d * u - f * v * u - g * h * p + c * v * p + f * h * y - c * d * y,
                E = i * x + a * w + o * _ + s * M;
            if (0 === E) {
                var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(T);
                return console.warn(T), this.identity()
            }
            var S = 1 / E;
            return n[0] = x * S, n[1] = (v * p * s - d * y * s - v * o * m + a * y * m + d * o * b - a * p * b) * S, n[2] = (h * y * s - v * u * s + v * o * l - a * y * l - h * o * b + a * u * b) * S, n[3] = (d * u * s - h * p * s - d * o * l + a * p * l + h * o * m - a * u * m) * S, n[4] = w * S, n[5] = (f * y * s - g * p * s + g * o * m - i * y * m - f * o * b + i * p * b) * S, n[6] = (g * u * s - c * y * s - g * o * l + i * y * l + c * o * b - i * u * b) * S, n[7] = (c * p * s - f * u * s + f * o * l - i * p * l - c * o * m + i * u * m) * S, n[8] = _ * S, n[9] = (g * d * s - f * v * s - g * a * m + i * v * m + f * a * b - i * d * b) * S, n[10] = (c * v * s - g * h * s + g * a * l - i * v * l - c * a * b + i * h * b) * S, n[11] = (f * h * s - c * d * s - f * a * l + i * d * l + c * a * m - i * h * m) * S, n[12] = M * S, n[13] = (f * v * o - g * d * o + g * a * p - i * v * p - f * a * y + i * d * y) * S, n[14] = (g * h * o - c * v * o - g * a * u + i * v * u + c * a * y - i * h * y) * S, n[15] = (c * d * o - f * h * o + f * a * u - i * d * u - c * a * p + i * h * p) * S, this
        }, scale: function (t) {
            var e = this.elements, n = t.x, r = t.y, i = t.z;
            return e[0] *= n, e[4] *= r, e[8] *= i, e[1] *= n, e[5] *= r, e[9] *= i, e[2] *= n, e[6] *= r, e[10] *= i, e[3] *= n, e[7] *= r, e[11] *= i, this
        }, getMaxScaleOnAxis: function () {
            var t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, r))
        }, makeTranslation: function (t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
        }, makeRotationX: function (t) {
            var e = Math.cos(t), n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
        }, makeRotationY: function (t) {
            var e = Math.cos(t), n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
        }, makeRotationZ: function (t) {
            var e = Math.cos(t), n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }, makeRotationAxis: function (t, e) {
            var n = Math.cos(e), r = Math.sin(e), i = 1 - n, a = t.x, o = t.y, s = t.z, c = i * a, h = i * o;
            return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, h * o + n, h * s - r * a, 0, c * s - r * o, h * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this
        }, makeScale: function (t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        }, makeShear: function (t, e, n) {
            return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this
        }, compose: function (t, e, n) {
            return this.makeRotationFromQuaternion(e), this.scale(n), this.setPosition(t), this
        }, decompose: function () {
            var t = new se, e = new ae;
            return function (n, r, i) {
                var a = this.elements, o = t.set(a[0], a[1], a[2]).length(), s = t.set(a[4], a[5], a[6]).length(),
                    c = t.set(a[8], a[9], a[10]).length();
                this.determinant() < 0 && (o = -o), n.x = a[12], n.y = a[13], n.z = a[14], e.copy(this);
                var h = 1 / o, u = 1 / s, l = 1 / c;
                return e.elements[0] *= h, e.elements[1] *= h, e.elements[2] *= h, e.elements[4] *= u, e.elements[5] *= u, e.elements[6] *= u, e.elements[8] *= l, e.elements[9] *= l, e.elements[10] *= l, r.setFromRotationMatrix(e), i.x = o, i.y = s, i.z = c, this
            }
        }(), makePerspective: function (t, e, n, r, i, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements, s = 2 * i / (e - t), c = 2 * i / (n - r), h = (e + t) / (e - t),
                u = (n + r) / (n - r), l = -(a + i) / (a - i), f = -2 * a * i / (a - i);
            return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = l, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        }, makeOrthographic: function (t, e, n, r, i, a) {
            var o = this.elements, s = 1 / (e - t), c = 1 / (n - r), h = 1 / (a - i), u = (e + t) * s, l = (n + r) * c,
                f = (a + i) * h;
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -l, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        }, equals: function (t) {
            for (var e = this.elements, n = t.elements, r = 0; r < 16; r++) if (e[r] !== n[r]) return !1;
            return !0
        }, fromArray: function (t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 16; n++) this.elements[n] = t[n + e];
            return this
        }, toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
        }
    });

    function oe(t, e, n, r) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1
    }

    Object.assign(oe, {
        slerp: function (t, e, n, r) {
            return n.copy(t).slerp(e, r)
        }, slerpFlat: function (t, e, n, r, i, a, o) {
            var s = n[r + 0], c = n[r + 1], h = n[r + 2], u = n[r + 3], l = i[a + 0], f = i[a + 1], d = i[a + 2],
                p = i[a + 3];
            if (u !== p || s !== l || c !== f || h !== d) {
                var m = 1 - o, g = s * l + c * f + h * d + u * p, v = g >= 0 ? 1 : -1, y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var b = Math.sqrt(y), x = Math.atan2(b, g * v);
                    m = Math.sin(m * x) / b, o = Math.sin(o * x) / b
                }
                var w = o * v;
                if (s = s * m + l * w, c = c * m + f * w, h = h * m + d * w, u = u * m + p * w, m === 1 - o) {
                    var _ = 1 / Math.sqrt(s * s + c * c + h * h + u * u);
                    s *= _, c *= _, h *= _, u *= _
                }
            }
            t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u
        }
    }), Object.defineProperties(oe.prototype, {
        x: {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this.onChangeCallback()
            }
        }, y: {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this.onChangeCallback()
            }
        }, z: {
            get: function () {
                return this._z
            }, set: function (t) {
                this._z = t, this.onChangeCallback()
            }
        }, w: {
            get: function () {
                return this._w
            }, set: function (t) {
                this._w = t, this.onChangeCallback()
            }
        }
    }), Object.assign(oe.prototype, {
        set: function (t, e, n, r) {
            return this._x = t, this._y = e, this._z = n, this._w = r, this.onChangeCallback(), this
        }, clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._w)
        }, copy: function (t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        }, setFromEuler: function (t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var n = t._x, r = t._y, i = t._z, a = t.order, o = Math.cos, s = Math.sin, c = o(n / 2), h = o(r / 2),
                u = o(i / 2), l = s(n / 2), f = s(r / 2), d = s(i / 2);
            return "XYZ" === a ? (this._x = l * h * u + c * f * d, this._y = c * f * u - l * h * d, this._z = c * h * d + l * f * u, this._w = c * h * u - l * f * d) : "YXZ" === a ? (this._x = l * h * u + c * f * d, this._y = c * f * u - l * h * d, this._z = c * h * d - l * f * u, this._w = c * h * u + l * f * d) : "ZXY" === a ? (this._x = l * h * u - c * f * d, this._y = c * f * u + l * h * d, this._z = c * h * d + l * f * u, this._w = c * h * u - l * f * d) : "ZYX" === a ? (this._x = l * h * u - c * f * d, this._y = c * f * u + l * h * d, this._z = c * h * d - l * f * u, this._w = c * h * u + l * f * d) : "YZX" === a ? (this._x = l * h * u + c * f * d, this._y = c * f * u + l * h * d, this._z = c * h * d - l * f * u, this._w = c * h * u - l * f * d) : "XZY" === a && (this._x = l * h * u - c * f * d, this._y = c * f * u - l * h * d, this._z = c * h * d + l * f * u, this._w = c * h * u + l * f * d), !1 !== e && this.onChangeCallback(), this
        }, setFromAxisAngle: function (t, e) {
            var n = e / 2, r = Math.sin(n);
            return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this.onChangeCallback(), this
        }, setFromRotationMatrix: function (t) {
            var e, n = t.elements, r = n[0], i = n[4], a = n[8], o = n[1], s = n[5], c = n[9], h = n[2], u = n[6],
                l = n[10], f = r + s + l;
            return f > 0 ? (e = .5 / Math.sqrt(f + 1), this._w = .25 / e, this._x = (u - c) * e, this._y = (a - h) * e, this._z = (o - i) * e) : r > s && r > l ? (e = 2 * Math.sqrt(1 + r - s - l), this._w = (u - c) / e, this._x = .25 * e, this._y = (i + o) / e, this._z = (a + h) / e) : s > l ? (e = 2 * Math.sqrt(1 + s - r - l), this._w = (a - h) / e, this._x = (i + o) / e, this._y = .25 * e, this._z = (c + u) / e) : (e = 2 * Math.sqrt(1 + l - r - s), this._w = (o - i) / e, this._x = (a + h) / e, this._y = (c + u) / e, this._z = .25 * e), this.onChangeCallback(), this
        }, setFromUnitVectors: function () {
            var t, e = new se;
            return function (n, r) {
                return void 0 === e && (e = new se), (t = n.dot(r) + 1) < 1e-6 ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, r), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
            }
        }(), inverse: function () {
            return this.conjugate().normalize()
        }, conjugate: function () {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        }, dot: function (t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }, lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }, length: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }, normalize: function () {
            var t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
        }, multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        }, premultiply: function (t) {
            return this.multiplyQuaternions(t, this)
        }, multiplyQuaternions: function (t, e) {
            var n = t._x, r = t._y, i = t._z, a = t._w, o = e._x, s = e._y, c = e._z, h = e._w;
            return this._x = n * h + a * o + r * c - i * s, this._y = r * h + a * s + i * o - n * c, this._z = i * h + a * c + n * s - r * o, this._w = a * h - n * o - r * s - i * c, this.onChangeCallback(), this
        }, slerp: function (t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var n = this._x, r = this._y, i = this._z, a = this._w, o = a * t._w + n * t._x + r * t._y + i * t._z;
            if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
            var s = Math.sqrt(1 - o * o);
            if (Math.abs(s) < .001) return this._w = .5 * (a + this._w), this._x = .5 * (n + this._x), this._y = .5 * (r + this._y), this._z = .5 * (i + this._z), this;
            var c = Math.atan2(s, o), h = Math.sin((1 - e) * c) / s, u = Math.sin(e * c) / s;
            return this._w = a * h + this._w * u, this._x = n * h + this._x * u, this._y = r * h + this._y * u, this._z = i * h + this._z * u, this.onChangeCallback(), this
        }, equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        }, onChange: function (t) {
            return this.onChangeCallback = t, this
        }, onChangeCallback: function () {
        }
    });

    function se(t, e, n) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0
    }

    Object.assign(se.prototype, {
        isVector3: !0, set: function (t, e, n) {
            return this.x = t, this.y = e, this.z = n, this
        }, setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this
        }, setX: function (t) {
            return this.x = t, this
        }, setY: function (t) {
            return this.y = t, this
        }, setZ: function (t) {
            return this.z = t, this
        }, setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        }, getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y, this.z)
        }, copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        }, add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        }, addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this
        }, addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        }, addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        }, sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        }, subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        }, subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        }, multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        }, multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        }, multiplyVectors: function (t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        }, applyEuler: function () {
            var t = new oe;
            return function (e) {
                return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e))
            }
        }(), applyAxisAngle: function () {
            var t = new oe;
            return function (e, n) {
                return this.applyQuaternion(t.setFromAxisAngle(e, n))
            }
        }(), applyMatrix3: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6] * r, this.y = i[1] * e + i[4] * n + i[7] * r, this.z = i[2] * e + i[5] * n + i[8] * r, this
        }, applyMatrix4: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.elements, a = 1 / (i[3] * e + i[7] * n + i[11] * r + i[15]);
            return this.x = (i[0] * e + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * e + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * e + i[6] * n + i[10] * r + i[14]) * a, this
        }, applyQuaternion: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.x, a = t.y, o = t.z, s = t.w, c = s * e + a * r - o * n,
                h = s * n + o * e - i * r, u = s * r + i * n - a * e, l = -i * e - a * n - o * r;
            return this.x = c * s + l * -i + h * -o - u * -a, this.y = h * s + l * -a + u * -i - c * -o, this.z = u * s + l * -o + c * -a - h * -i, this
        }, project: function () {
            var t = new ae;
            return function (e) {
                return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyMatrix4(t)
            }
        }(), unproject: function () {
            var t = new ae;
            return function (e) {
                return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyMatrix4(t)
            }
        }(), transformDirection: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.elements;
            return this.x = i[0] * e + i[4] * n + i[8] * r, this.y = i[1] * e + i[5] * n + i[9] * r, this.z = i[2] * e + i[6] * n + i[10] * r, this.normalize()
        }, divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        }, divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        }, min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        }, max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        }, clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        }, clampScalar: function () {
            var t = new se, e = new se;
            return function (n, r) {
                return t.set(n, n, n), e.set(r, r, r), this.clamp(t, e)
            }
        }(), clampLength: function (t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }, floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }, manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }, normalize: function () {
            return this.divideScalar(this.length() || 1)
        }, setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        }, lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        }, lerpVectors: function (t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        }, cross: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
        }, crossVectors: function (t, e) {
            var n = t.x, r = t.y, i = t.z, a = e.x, o = e.y, s = e.z;
            return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this
        }, projectOnVector: function (t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        }, projectOnPlane: function () {
            var t = new se;
            return function (e) {
                return t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(), reflect: function () {
            var t = new se;
            return function (e) {
                return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(), angleTo: function (t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(re.clamp(e, -1, 1))
        }, distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        }, distanceToSquared: function (t) {
            var e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
            return e * e + n * n + r * r
        }, manhattanDistanceTo: function (t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        }, setFromSpherical: function (t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
        }, setFromCylindrical: function (t) {
            return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this
        }, setFromMatrixPosition: function (t) {
            var e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this
        }, setFromMatrixScale: function (t) {
            var e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(),
                r = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = r, this
        }, setFromMatrixColumn: function (t, e) {
            return this.fromArray(t.elements, 4 * e)
        }, equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        }, fromBufferAttribute: function (t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
    });

    function ce() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }

    Object.assign(ce.prototype, {
        isMatrix3: !0, set: function (t, e, n, r, i, a, o, s, c) {
            var h = this.elements;
            return h[0] = t, h[1] = r, h[2] = o, h[3] = e, h[4] = i, h[5] = s, h[6] = n, h[7] = a, h[8] = c, this
        }, identity: function () {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }, clone: function () {
            return (new this.constructor).fromArray(this.elements)
        }, copy: function (t) {
            var e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
        }, setFromMatrix4: function (t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        }, applyToBufferAttribute: function () {
            var t = new se;
            return function (e) {
                for (var n = 0, r = e.count; n < r; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix3(this), e.setXYZ(n, t.x, t.y, t.z);
                return e
            }
        }(), multiply: function (t) {
            return this.multiplyMatrices(this, t)
        }, premultiply: function (t) {
            return this.multiplyMatrices(t, this)
        }, multiplyMatrices: function (t, e) {
            var n = t.elements, r = e.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], h = n[4],
                u = n[7], l = n[2], f = n[5], d = n[8], p = r[0], m = r[3], g = r[6], v = r[1], y = r[4], b = r[7],
                x = r[2], w = r[5], _ = r[8];
            return i[0] = a * p + o * v + s * x, i[3] = a * m + o * y + s * w, i[6] = a * g + o * b + s * _, i[1] = c * p + h * v + u * x, i[4] = c * m + h * y + u * w, i[7] = c * g + h * b + u * _, i[2] = l * p + f * v + d * x, i[5] = l * m + f * y + d * w, i[8] = l * g + f * b + d * _, this
        }, multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        }, determinant: function () {
            var t = this.elements, e = t[0], n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7],
                h = t[8];
            return e * a * h - e * o * c - n * i * h + n * o * s + r * i * c - r * a * s
        }, getInverse: function (t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var n = t.elements, r = this.elements, i = n[0], a = n[1], o = n[2], s = n[3], c = n[4], h = n[5], u = n[6],
                l = n[7], f = n[8], d = f * c - h * l, p = h * u - f * s, m = l * s - c * u, g = i * d + a * p + o * m;
            if (0 === g) {
                var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(v);
                return console.warn(v), this.identity()
            }
            var y = 1 / g;
            return r[0] = d * y, r[1] = (o * l - f * a) * y, r[2] = (h * a - o * c) * y, r[3] = p * y, r[4] = (f * i - o * u) * y, r[5] = (o * s - h * i) * y, r[6] = m * y, r[7] = (a * u - l * i) * y, r[8] = (c * i - a * s) * y, this
        }, transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        }, getNormalMatrix: function (t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        }, transposeIntoArray: function (t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        }, setUvTransform: function (t, e, n, r, i, a, o) {
            var s = Math.cos(i), c = Math.sin(i);
            this.set(n * s, n * c, -n * (s * a + c * o) + a + t, -r * c, r * s, -r * (-c * a + s * o) + o + e, 0, 0, 1)
        }, scale: function (t, e) {
            var n = this.elements;
            return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
        }, rotate: function (t) {
            var e = Math.cos(t), n = Math.sin(t), r = this.elements, i = r[0], a = r[3], o = r[6], s = r[1], c = r[4],
                h = r[7];
            return r[0] = e * i + n * s, r[3] = e * a + n * c, r[6] = e * o + n * h, r[1] = -n * i + e * s, r[4] = -n * a + e * c, r[7] = -n * o + e * h, this
        }, translate: function (t, e) {
            var n = this.elements;
            return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
        }, equals: function (t) {
            for (var e = this.elements, n = t.elements, r = 0; r < 9; r++) if (e[r] !== n[r]) return !1;
            return !0
        }, fromArray: function (t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 9; n++) this.elements[n] = t[n + e];
            return this
        }, toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
        }
    });
    var he = 0;

    function ue(t, e, n, r, i, a, o, s, c, h) {
        Object.defineProperty(this, "id", {value: he++}), this.uuid = re.generateUUID(), this.name = "", this.image = void 0 !== t ? t : ue.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : ue.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : ot, this.wrapT = void 0 !== r ? r : ot, this.magFilter = void 0 !== i ? i : lt, this.minFilter = void 0 !== a ? a : dt, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : Lt, this.type = void 0 !== s ? s : pt, this.offset = new ie(0, 0), this.repeat = new ie(1, 1), this.center = new ie(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ce, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : Yt, this.version = 0, this.onUpdate = null
    }

    ue.DEFAULT_IMAGE = void 0, ue.DEFAULT_MAPPING = 300, ue.prototype = Object.assign(Object.create(t.prototype), {
        constructor: ue,
        isTexture: !0,
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var n = {
                metadata: {version: 4.5, type: "Texture", generator: "Texture.toJSON"},
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var r = this.image;
                void 0 === r.uuid && (r.uuid = re.generateUUID()), e || void 0 !== t.images[r.uuid] || (t.images[r.uuid] = {
                    uuid: r.uuid,
                    url: function (t) {
                        var e;
                        if (t instanceof HTMLCanvasElement) e = t; else {
                            (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width, e.height = t.height;
                            var n = e.getContext("2d");
                            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height)
                        }
                        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                    }(r)
                }), n.image = r.uuid
            }
            return e || (t.textures[this.uuid] = n), n
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        },
        transformUv: function (t) {
            if (300 === this.mapping) {
                if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
                    case at:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case ot:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case st:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
                if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                    case at:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case ot:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case st:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    }), Object.defineProperty(ue.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    });

    function le(t, e, n, r) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== r ? r : 1
    }

    Object.assign(le.prototype, {
        isVector4: !0, set: function (t, e, n, r) {
            return this.x = t, this.y = e, this.z = n, this.w = r, this
        }, setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        }, setX: function (t) {
            return this.x = t, this
        }, setY: function (t) {
            return this.y = t, this
        }, setZ: function (t) {
            return this.z = t, this
        }, setW: function (t) {
            return this.w = t, this
        }, setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        }, getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y, this.z, this.w)
        }, copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        }, add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        }, addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        }, addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        }, addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        }, sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        }, subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        }, subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        }, multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        }, applyMatrix4: function (t) {
            var e = this.x, n = this.y, r = this.z, i = this.w, a = t.elements;
            return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * i, this
        }, divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        }, setAxisAngleFromQuaternion: function (t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        }, setAxisAngleFromRotationMatrix: function (t) {
            var e, n, r, i, a = t.elements, o = a[0], s = a[4], c = a[8], h = a[1], u = a[5], l = a[9], f = a[2],
                d = a[6], p = a[10];
            if (Math.abs(s - h) < .01 && Math.abs(c - f) < .01 && Math.abs(l - d) < .01) {
                if (Math.abs(s + h) < .1 && Math.abs(c + f) < .1 && Math.abs(l + d) < .1 && Math.abs(o + u + p - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                var m = (o + 1) / 2, g = (u + 1) / 2, v = (p + 1) / 2, y = (s + h) / 4, b = (c + f) / 4,
                    x = (l + d) / 4;
                return m > g && m > v ? m < .01 ? (n = 0, r = .707106781, i = .707106781) : (r = y / (n = Math.sqrt(m)), i = b / n) : g > v ? g < .01 ? (n = .707106781, r = 0, i = .707106781) : (n = y / (r = Math.sqrt(g)), i = x / r) : v < .01 ? (n = .707106781, r = .707106781, i = 0) : (n = b / (i = Math.sqrt(v)), r = x / i), this.set(n, r, i, e), this
            }
            var w = Math.sqrt((d - l) * (d - l) + (c - f) * (c - f) + (h - s) * (h - s));
            return Math.abs(w) < .001 && (w = 1), this.x = (d - l) / w, this.y = (c - f) / w, this.z = (h - s) / w, this.w = Math.acos((o + u + p - 1) / 2), this
        }, min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        }, max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        }, clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        }, clampScalar: function () {
            var t, e;
            return function (n, r) {
                return void 0 === t && (t = new le, e = new le), t.set(n, n, n, n), e.set(r, r, r, r), this.clamp(t, e)
            }
        }(), clampLength: function (t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }, floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        }, dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }, manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }, normalize: function () {
            return this.divideScalar(this.length() || 1)
        }, setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        }, lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        }, lerpVectors: function (t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        }, equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        }, fromBufferAttribute: function (t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
    });

    function fe(t, e, n) {
        this.uuid = re.generateUUID(), this.width = t, this.height = e, this.scissor = new le(0, 0, t, e), this.scissorTest = !1, this.viewport = new le(0, 0, t, e), void 0 === (n = n || {}).minFilter && (n.minFilter = lt), this.texture = new ue(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }

    fe.prototype = Object.assign(Object.create(t.prototype), {
        constructor: fe,
        isWebGLRenderTarget: !0,
        setSize: function (t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    });

    function de(t, e, n) {
        fe.call(this, t, e, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    de.prototype = Object.create(fe.prototype), de.prototype.constructor = de, de.prototype.isWebGLRenderTargetCube = !0;

    function pe(t, e, n, r, i, a, o, s, c, h, u, l) {
        ue.call(this, null, a, o, s, c, h, r, i, u, l), this.image = {
            data: t,
            width: e,
            height: n
        }, this.magFilter = void 0 !== c ? c : ct, this.minFilter = void 0 !== h ? h : ct, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    pe.prototype = Object.create(ue.prototype), pe.prototype.constructor = pe, pe.prototype.isDataTexture = !0;

    function me(t, e, n, r, i, a, o, s, c, h) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : K, ue.call(this, t, e, n, r, i, a, o, s, c, h), this.flipY = !1
    }

    me.prototype = Object.create(ue.prototype), me.prototype.constructor = me, me.prototype.isCubeTexture = !0, Object.defineProperty(me.prototype, "images", {
        get: function () {
            return this.image
        }, set: function (t) {
            this.image = t
        }
    });
    var ge = new ue, ve = new me;

    function ye() {
        this.seq = [], this.map = {}
    }

    var be = [], xe = [], we = new Float32Array(16), _e = new Float32Array(9);

    function Me(t, e, n) {
        var r = t[0];
        if (r <= 0 || r > 0) return t;
        var i = e * n, a = be[i];
        if (void 0 === a && (a = new Float32Array(i), be[i] = a), 0 !== e) {
            r.toArray(a, 0);
            for (var o = 1, s = 0; o !== e; ++o) s += n, t[o].toArray(a, s)
        }
        return a
    }

    function Ee(t, e) {
        var n = xe[e];
        void 0 === n && (n = new Int32Array(e), xe[e] = n);
        for (var r = 0; r !== e; ++r) n[r] = t.allocTextureUnit();
        return n
    }

    function Te(t, e) {
        t.uniform1f(this.addr, e)
    }

    function Se(t, e) {
        t.uniform1i(this.addr, e)
    }

    function Ae(t, e) {
        void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
    }

    function Le(t, e) {
        void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
    }

    function Re(t, e) {
        void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
    }

    function Pe(t, e) {
        t.uniformMatrix2fv(this.addr, !1, e.elements || e)
    }

    function Ce(t, e) {
        void 0 === e.elements ? t.uniformMatrix3fv(this.addr, !1, e) : (_e.set(e.elements), t.uniformMatrix3fv(this.addr, !1, _e))
    }

    function Ne(t, e) {
        void 0 === e.elements ? t.uniformMatrix4fv(this.addr, !1, e) : (we.set(e.elements), t.uniformMatrix4fv(this.addr, !1, we))
    }

    function Oe(t, e, n) {
        var r = n.allocTextureUnit();
        t.uniform1i(this.addr, r), n.setTexture2D(e || ge, r)
    }

    function Ie(t, e, n) {
        var r = n.allocTextureUnit();
        t.uniform1i(this.addr, r), n.setTextureCube(e || ve, r)
    }

    function De(t, e) {
        t.uniform2iv(this.addr, e)
    }

    function Ue(t, e) {
        t.uniform3iv(this.addr, e)
    }

    function ze(t, e) {
        t.uniform4iv(this.addr, e)
    }

    function Be(t, e) {
        t.uniform1fv(this.addr, e)
    }

    function Fe(t, e) {
        t.uniform1iv(this.addr, e)
    }

    function ke(t, e) {
        t.uniform2fv(this.addr, Me(e, this.size, 2))
    }

    function Ge(t, e) {
        t.uniform3fv(this.addr, Me(e, this.size, 3))
    }

    function He(t, e) {
        t.uniform4fv(this.addr, Me(e, this.size, 4))
    }

    function Ve(t, e) {
        t.uniformMatrix2fv(this.addr, !1, Me(e, this.size, 4))
    }

    function je(t, e) {
        t.uniformMatrix3fv(this.addr, !1, Me(e, this.size, 9))
    }

    function We(t, e) {
        t.uniformMatrix4fv(this.addr, !1, Me(e, this.size, 16))
    }

    function qe(t, e, n) {
        var r = e.length, i = Ee(n, r);
        t.uniform1iv(this.addr, i);
        for (var a = 0; a !== r; ++a) n.setTexture2D(e[a] || ge, i[a])
    }

    function Xe(t, e, n) {
        var r = e.length, i = Ee(n, r);
        t.uniform1iv(this.addr, i);
        for (var a = 0; a !== r; ++a) n.setTextureCube(e[a] || ve, i[a])
    }

    function Ye(t, e, n) {
        this.id = t, this.addr = n, this.setValue = function (t) {
            switch (t) {
                case 5126:
                    return Te;
                case 35664:
                    return Ae;
                case 35665:
                    return Le;
                case 35666:
                    return Re;
                case 35674:
                    return Pe;
                case 35675:
                    return Ce;
                case 35676:
                    return Ne;
                case 35678:
                case 36198:
                    return Oe;
                case 35680:
                    return Ie;
                case 5124:
                case 35670:
                    return Se;
                case 35667:
                case 35671:
                    return De;
                case 35668:
                case 35672:
                    return Ue;
                case 35669:
                case 35673:
                    return ze
            }
        }(e.type)
    }

    function Ze(t, e, n) {
        this.id = t, this.addr = n, this.size = e.size, this.setValue = function (t) {
            switch (t) {
                case 5126:
                    return Be;
                case 35664:
                    return ke;
                case 35665:
                    return Ge;
                case 35666:
                    return He;
                case 35674:
                    return Ve;
                case 35675:
                    return je;
                case 35676:
                    return We;
                case 35678:
                    return qe;
                case 35680:
                    return Xe;
                case 5124:
                case 35670:
                    return Fe;
                case 35667:
                case 35671:
                    return De;
                case 35668:
                case 35672:
                    return Ue;
                case 35669:
                case 35673:
                    return ze
            }
        }(e.type)
    }

    function Je(t) {
        this.id = t, ye.call(this)
    }

    Je.prototype.setValue = function (t, e) {
        for (var n = this.seq, r = 0, i = n.length; r !== i; ++r) {
            var a = n[r];
            a.setValue(t, e[a.id])
        }
    };
    var Qe = /([\w\d_]+)(\])?(\[|\.)?/g;

    function Ke(t, e) {
        t.seq.push(e), t.map[e.id] = e
    }

    function $e(t, e, n) {
        var r = t.name, i = r.length;
        for (Qe.lastIndex = 0; ;) {
            var a = Qe.exec(r), o = Qe.lastIndex, s = a[1], c = "]" === a[2], h = a[3];
            if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === i) {
                Ke(n, void 0 === h ? new Ye(s, t, e) : new Ze(s, t, e));
                break
            }
            var u = n.map[s];
            void 0 === u && Ke(n, u = new Je(s)), n = u
        }
    }

    function tn(t, e, n) {
        ye.call(this), this.renderer = n;
        for (var r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), i = 0; i < r; ++i) {
            var a = t.getActiveUniform(e, i), o = a.name;
            $e(a, t.getUniformLocation(e, o), this)
        }
    }

    tn.prototype.setValue = function (t, e, n) {
        var r = this.map[e];
        void 0 !== r && r.setValue(t, n, this.renderer)
    }, tn.prototype.setOptional = function (t, e, n) {
        var r = e[n];
        void 0 !== r && this.setValue(t, n, r)
    }, tn.upload = function (t, e, n, r) {
        for (var i = 0, a = e.length; i !== a; ++i) {
            var o = e[i], s = n[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, r)
        }
    }, tn.seqWithValue = function (t, e) {
        for (var n = [], r = 0, i = t.length; r !== i; ++r) {
            var a = t[r];
            a.id in e && n.push(a)
        }
        return n
    };
    var en = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };

    function nn(t, e, n) {
        return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }

    Object.assign(nn.prototype, {
        isColor: !0, r: 1, g: 1, b: 1, set: function (t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        }, setScalar: function (t) {
            return this.r = t, this.g = t, this.b = t, this
        }, setHex: function (t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        }, setRGB: function (t, e, n) {
            return this.r = t, this.g = e, this.b = n, this
        }, setHSL: function () {
            function t(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
            }

            return function (e, n, r) {
                if (e = re.euclideanModulo(e, 1), n = re.clamp(n, 0, 1), r = re.clamp(r, 0, 1), 0 === n) this.r = this.g = this.b = r; else {
                    var i = r <= .5 ? r * (1 + n) : r + n - r * n, a = 2 * r - i;
                    this.r = t(a, i, e + 1 / 3), this.g = t(a, i, e), this.b = t(a, i, e - 1 / 3)
                }
                return this
            }
        }(), setStyle: function (t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }

            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var r, i = n[1], a = n[2];
                switch (i) {
                    case"rgb":
                    case"rgba":
                        if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, e(r[5]), this;
                        if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, e(r[5]), this;
                        break;
                    case"hsl":
                    case"hsla":
                        if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                            var o = parseFloat(r[1]) / 360, s = parseInt(r[2], 10) / 100, c = parseInt(r[3], 10) / 100;
                            return e(r[5]), this.setHSL(o, s, c)
                        }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var h = (u = n[1]).length;
                if (3 === h) return this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255, this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255, this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255, this;
                if (6 === h) return this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255, this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255, this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255, this
            }
            if (t && t.length > 0) {
                var u;
                void 0 !== (u = en[t]) ? this.setHex(u) : console.warn("THREE.Color: Unknown color " + t)
            }
            return this
        }, clone: function () {
            return new this.constructor(this.r, this.g, this.b)
        }, copy: function (t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        }, copyGammaToLinear: function (t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        }, copyLinearToGamma: function (t, e) {
            void 0 === e && (e = 2);
            var n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
        }, convertGammaToLinear: function () {
            var t = this.r, e = this.g, n = this.b;
            return this.r = t * t, this.g = e * e, this.b = n * n, this
        }, convertLinearToGamma: function () {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        }, getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        }, getHexString: function () {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        }, getHSL: function (t) {
            var e, n, r = t || {h: 0, s: 0, l: 0}, i = this.r, a = this.g, o = this.b, s = Math.max(i, a, o),
                c = Math.min(i, a, o), h = (c + s) / 2;
            if (c === s) e = 0, n = 0; else {
                var u = s - c;
                switch (n = h <= .5 ? u / (s + c) : u / (2 - s - c), s) {
                    case i:
                        e = (a - o) / u + (a < o ? 6 : 0);
                        break;
                    case a:
                        e = (o - i) / u + 2;
                        break;
                    case o:
                        e = (i - a) / u + 4
                }
                e /= 6
            }
            return r.h = e, r.s = n, r.l = h, r
        }, getStyle: function () {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        }, offsetHSL: function (t, e, n) {
            var r = this.getHSL();
            return r.h += t, r.s += e, r.l += n, this.setHSL(r.h, r.s, r.l), this
        }, add: function (t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        }, addColors: function (t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        }, addScalar: function (t) {
            return this.r += t, this.g += t, this.b += t, this
        }, sub: function (t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
        }, multiply: function (t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        }, multiplyScalar: function (t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        }, lerp: function (t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        }, equals: function (t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        }, toJSON: function () {
            return this.getHex()
        }
    });
    var rn = {
        common: {
            diffuse: {value: new nn(15658734)},
            opacity: {value: 1},
            map: {value: null},
            uvTransform: {value: new ce},
            alphaMap: {value: null}
        },
        specularmap: {specularMap: {value: null}},
        envmap: {
            envMap: {value: null},
            flipEnvMap: {value: -1},
            reflectivity: {value: 1},
            refractionRatio: {value: .98}
        },
        aomap: {aoMap: {value: null}, aoMapIntensity: {value: 1}},
        lightmap: {lightMap: {value: null}, lightMapIntensity: {value: 1}},
        emissivemap: {emissiveMap: {value: null}},
        bumpmap: {bumpMap: {value: null}, bumpScale: {value: 1}},
        normalmap: {normalMap: {value: null}, normalScale: {value: new ie(1, 1)}},
        displacementmap: {displacementMap: {value: null}, displacementScale: {value: 1}, displacementBias: {value: 0}},
        roughnessmap: {roughnessMap: {value: null}},
        metalnessmap: {metalnessMap: {value: null}},
        gradientmap: {gradientMap: {value: null}},
        fog: {
            fogDensity: {value: 25e-5},
            fogNear: {value: 1},
            fogFar: {value: 2e3},
            fogColor: {value: new nn(16777215)}
        },
        lights: {
            ambientLightColor: {value: []},
            directionalLights: {
                value: [],
                properties: {direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}}
            },
            directionalShadowMap: {value: []},
            directionalShadowMatrix: {value: []},
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {value: []},
            spotShadowMatrix: {value: []},
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {value: []},
            pointShadowMatrix: {value: []},
            hemisphereLights: {value: [], properties: {direction: {}, skyColor: {}, groundColor: {}}},
            rectAreaLights: {value: [], properties: {color: {}, position: {}, width: {}, height: {}}}
        },
        points: {
            diffuse: {value: new nn(15658734)},
            opacity: {value: 1},
            size: {value: 1},
            scale: {value: 1},
            map: {value: null},
            uvTransform: {value: new ce}
        }
    }, an = {
        merge: function (t) {
            for (var e = {}, n = 0; n < t.length; n++) {
                var r = this.clone(t[n]);
                for (var i in r) e[i] = r[i]
            }
            return e
        }, clone: function (t) {
            var e = {};
            for (var n in t) {
                e[n] = {};
                for (var r in t[n]) {
                    var i = t[n][r];
                    i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? e[n][r] = i.clone() : Array.isArray(i) ? e[n][r] = i.slice() : e[n][r] = i
                }
            }
            return e
        }
    }, on = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "\nvec3 transformed = vec3( position );\n",
        beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
        bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
        defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
        encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
        fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
        gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
        lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
        lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
        map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
        map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
        normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
        project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
        dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
        dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
        tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
        cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
        equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
    }, sn = {
        basic: {
            uniforms: an.merge([rn.common, rn.specularmap, rn.envmap, rn.aomap, rn.lightmap, rn.fog]),
            vertexShader: on.meshbasic_vert,
            fragmentShader: on.meshbasic_frag
        },
        lambert: {
            uniforms: an.merge([rn.common, rn.specularmap, rn.envmap, rn.aomap, rn.lightmap, rn.emissivemap, rn.fog, rn.lights, {emissive: {value: new nn(0)}}]),
            vertexShader: on.meshlambert_vert,
            fragmentShader: on.meshlambert_frag
        },
        phong: {
            uniforms: an.merge([rn.common, rn.specularmap, rn.envmap, rn.aomap, rn.lightmap, rn.emissivemap, rn.bumpmap, rn.normalmap, rn.displacementmap, rn.gradientmap, rn.fog, rn.lights, {
                emissive: {value: new nn(0)},
                specular: {value: new nn(1118481)},
                shininess: {value: 30}
            }]), vertexShader: on.meshphong_vert, fragmentShader: on.meshphong_frag
        },
        standard: {
            uniforms: an.merge([rn.common, rn.envmap, rn.aomap, rn.lightmap, rn.emissivemap, rn.bumpmap, rn.normalmap, rn.displacementmap, rn.roughnessmap, rn.metalnessmap, rn.fog, rn.lights, {
                emissive: {value: new nn(0)},
                roughness: {value: .5},
                metalness: {value: .5},
                envMapIntensity: {value: 1}
            }]), vertexShader: on.meshphysical_vert, fragmentShader: on.meshphysical_frag
        },
        points: {uniforms: an.merge([rn.points, rn.fog]), vertexShader: on.points_vert, fragmentShader: on.points_frag},
        dashed: {
            uniforms: an.merge([rn.common, rn.fog, {
                scale: {value: 1},
                dashSize: {value: 1},
                totalSize: {value: 2}
            }]), vertexShader: on.linedashed_vert, fragmentShader: on.linedashed_frag
        },
        depth: {
            uniforms: an.merge([rn.common, rn.displacementmap]),
            vertexShader: on.depth_vert,
            fragmentShader: on.depth_frag
        },
        normal: {
            uniforms: an.merge([rn.common, rn.bumpmap, rn.normalmap, rn.displacementmap, {opacity: {value: 1}}]),
            vertexShader: on.normal_vert,
            fragmentShader: on.normal_frag
        },
        cube: {
            uniforms: {tCube: {value: null}, tFlip: {value: -1}, opacity: {value: 1}},
            vertexShader: on.cube_vert,
            fragmentShader: on.cube_frag
        },
        equirect: {
            uniforms: {tEquirect: {value: null}},
            vertexShader: on.equirect_vert,
            fragmentShader: on.equirect_frag
        },
        distanceRGBA: {
            uniforms: an.merge([rn.common, rn.displacementmap, {
                referencePosition: {value: new se},
                nearDistance: {value: 1},
                farDistance: {value: 1e3}
            }]), vertexShader: on.distanceRGBA_vert, fragmentShader: on.distanceRGBA_frag
        },
        shadow: {
            uniforms: an.merge([rn.lights, rn.fog, {color: {value: new nn(0)}, opacity: {value: 1}}]),
            vertexShader: on.shadow_vert,
            fragmentShader: on.shadow_frag
        }
    };
    sn.physical = {
        uniforms: an.merge([sn.standard.uniforms, {clearCoat: {value: 0}, clearCoatRoughness: {value: 0}}]),
        vertexShader: on.meshphysical_vert,
        fragmentShader: on.meshphysical_frag
    };

    function cn(t, e) {
        this.min = void 0 !== t ? t : new ie(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new ie(-1 / 0, -1 / 0)
    }

    Object.assign(cn.prototype, {
        set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        }, setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this
        }, setFromCenterAndSize: function () {
            var t = new ie;
            return function (e, n) {
                var r = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y
        }, getCenter: function (t) {
            var e = t || new ie;
            return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        }, getSize: function (t) {
            var e = t || new ie;
            return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
        }, expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        }, expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        }, expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        }, containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        }, containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        }, getParameter: function (t, e) {
            return (e || new ie).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        }, intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        }, clampPoint: function (t, e) {
            return (e || new ie).copy(t).clamp(this.min, this.max)
        }, distanceToPoint: function () {
            var t = new ie;
            return function (e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(), intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this
        }, union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        }, translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        }, equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    });

    function hn(t, e, n, r, i) {
        var a, o, s, c, h, u, l, f;

        function d() {
            var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                r = new Uint16Array([0, 1, 2, 0, 2, 3]);
            a = e.createBuffer(), o = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, a), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o), e.bufferData(e.ELEMENT_ARRAY_BUFFER, r, e.STATIC_DRAW), l = e.createTexture(), f = e.createTexture(), n.bindTexture(e.TEXTURE_2D, l), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), n.bindTexture(e.TEXTURE_2D, f), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), s = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "\tvUV = uv;", "\tvec2 pos = position;", "\tif ( renderType == 2 ) {", "\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "\t\tvVisibility =        visibility.r / 9.0;", "\t\tvVisibility *= 1.0 - visibility.g / 9.0;", "\t\tvVisibility *=       visibility.b / 9.0;", "\t\tvVisibility *= 1.0 - visibility.a / 9.0;", "\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "\t}", "\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "\tif ( renderType == 0 ) {", "\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "\t} else if ( renderType == 1 ) {", "\t\tgl_FragColor = texture2D( map, vUV );", "\t} else {", "\t\tvec4 texture = texture2D( map, vUV );", "\t\ttexture.a *= opacity * vVisibility;", "\t\tgl_FragColor = texture;", "\t\tgl_FragColor.rgb *= color;", "\t}", "}"].join("\n")
            }, c = function (t) {
                var n = e.createProgram(), r = e.createShader(e.FRAGMENT_SHADER), a = e.createShader(e.VERTEX_SHADER),
                    o = "precision " + i.precision + " float;\n";
                return e.shaderSource(r, o + t.fragmentShader), e.shaderSource(a, o + t.vertexShader), e.compileShader(r), e.compileShader(a), e.attachShader(n, r), e.attachShader(n, a), e.linkProgram(n), n
            }(s), h = {
                vertex: e.getAttribLocation(c, "position"),
                uv: e.getAttribLocation(c, "uv")
            }, u = {
                renderType: e.getUniformLocation(c, "renderType"),
                map: e.getUniformLocation(c, "map"),
                occlusionMap: e.getUniformLocation(c, "occlusionMap"),
                opacity: e.getUniformLocation(c, "opacity"),
                color: e.getUniformLocation(c, "color"),
                scale: e.getUniformLocation(c, "scale"),
                rotation: e.getUniformLocation(c, "rotation"),
                screenPosition: e.getUniformLocation(c, "screenPosition")
            }
        }

        this.render = function (t, i, s, p) {
            if (0 !== t.length) {
                var m = new se, g = p.w / p.z, v = .5 * p.z, y = .5 * p.w, b = 16 / p.w, x = new ie(b * g, b),
                    w = new se(1, 1, 0), _ = new ie(1, 1), M = new cn;
                M.min.set(p.x, p.y), M.max.set(p.x + (p.z - 16), p.y + (p.w - 16)), void 0 === c && d(), n.useProgram(c), n.initAttributes(), n.enableAttribute(h.vertex), n.enableAttribute(h.uv), n.disableUnusedAttributes(), e.uniform1i(u.occlusionMap, 0), e.uniform1i(u.map, 1), e.bindBuffer(e.ARRAY_BUFFER, a), e.vertexAttribPointer(h.vertex, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(h.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o), n.disable(e.CULL_FACE), n.buffers.depth.setMask(!1);
                for (var E = 0, T = t.length; E < T; E++) {
                    b = 16 / p.w, x.set(b * g, b);
                    var S = t[E];
                    if (m.set(S.matrixWorld.elements[12], S.matrixWorld.elements[13], S.matrixWorld.elements[14]), m.applyMatrix4(s.matrixWorldInverse), m.applyMatrix4(s.projectionMatrix), w.copy(m), _.x = p.x + w.x * v + v - 8, _.y = p.y + w.y * y + y - 8, !0 === M.containsPoint(_)) {
                        n.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, null), n.activeTexture(e.TEXTURE1), n.bindTexture(e.TEXTURE_2D, l), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGB, _.x, _.y, 16, 16, 0), e.uniform1i(u.renderType, 0), e.uniform2f(u.scale, x.x, x.y), e.uniform3f(u.screenPosition, w.x, w.y, w.z), n.disable(e.BLEND), n.enable(e.DEPTH_TEST), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), n.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, f), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGBA, _.x, _.y, 16, 16, 0), e.uniform1i(u.renderType, 1), n.disable(e.DEPTH_TEST), n.activeTexture(e.TEXTURE1), n.bindTexture(e.TEXTURE_2D, l), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), S.positionScreen.copy(w), S.customUpdateCallback ? S.customUpdateCallback(S) : S.updateLensFlares(), e.uniform1i(u.renderType, 2), n.enable(e.BLEND);
                        for (var A = 0, L = S.lensFlares.length; A < L; A++) {
                            var R = S.lensFlares[A];
                            R.opacity > .001 && R.scale > .001 && (w.x = R.x, w.y = R.y, w.z = R.z, b = R.size * R.scale / p.w, x.x = b * g, x.y = b, e.uniform3f(u.screenPosition, w.x, w.y, w.z), e.uniform2f(u.scale, x.x, x.y), e.uniform1f(u.rotation, R.rotation), e.uniform1f(u.opacity, R.opacity), e.uniform3f(u.color, R.color.r, R.color.g, R.color.b), n.setBlending(R.blending, R.blendEquation, R.blendSrc, R.blendDst), r.setTexture2D(R.texture, 1), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                n.enable(e.CULL_FACE), n.enable(e.DEPTH_TEST), n.buffers.depth.setMask(!0), n.reset()
            }
        }
    }

    function un(t, e, n, r, i, a, o, s, c) {
        ue.call(this, t, e, n, r, i, a, o, s, c), this.needsUpdate = !0
    }

    un.prototype = Object.create(ue.prototype), un.prototype.constructor = un;

    function ln(t, e, n, r, i) {
        var a, o, s, c, h, u, l = new se, f = new oe, d = new se;

        function p() {
            var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                n = new Uint16Array([0, 1, 2, 0, 2, 3]);
            a = e.createBuffer(), o = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, a), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o), e.bufferData(e.ELEMENT_ARRAY_BUFFER, n, e.STATIC_DRAW), s = function () {
                var t = e.createProgram(), n = e.createShader(e.VERTEX_SHADER), r = e.createShader(e.FRAGMENT_SHADER);
                return e.shaderSource(n, ["precision " + i.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvUV = uvOffset + uv * uvScale;", "\tvec2 alignedPosition = position * scale;", "\tvec2 rotatedPosition;", "\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "\tvec4 mvPosition;", "\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "\tmvPosition.xy += rotatedPosition;", "\tgl_Position = projectionMatrix * mvPosition;", "\tfogDepth = - mvPosition.z;", "}"].join("\n")), e.shaderSource(r, ["precision " + i.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvec4 texture = texture2D( map, vUV );", "\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "\tif ( gl_FragColor.a < alphaTest ) discard;", "\tif ( fogType > 0 ) {", "\t\tfloat fogFactor = 0.0;", "\t\tif ( fogType == 1 ) {", "\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );", "\t\t} else {", "\t\t\tconst float LOG2 = 1.442695;", "\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );", "\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "\t\t}", "\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );", "\t}", "}"].join("\n")), e.compileShader(n), e.compileShader(r), e.attachShader(t, n), e.attachShader(t, r), e.linkProgram(t), t
            }(), c = {
                position: e.getAttribLocation(s, "position"),
                uv: e.getAttribLocation(s, "uv")
            }, h = {
                uvOffset: e.getUniformLocation(s, "uvOffset"),
                uvScale: e.getUniformLocation(s, "uvScale"),
                rotation: e.getUniformLocation(s, "rotation"),
                scale: e.getUniformLocation(s, "scale"),
                color: e.getUniformLocation(s, "color"),
                map: e.getUniformLocation(s, "map"),
                opacity: e.getUniformLocation(s, "opacity"),
                modelViewMatrix: e.getUniformLocation(s, "modelViewMatrix"),
                projectionMatrix: e.getUniformLocation(s, "projectionMatrix"),
                fogType: e.getUniformLocation(s, "fogType"),
                fogDensity: e.getUniformLocation(s, "fogDensity"),
                fogNear: e.getUniformLocation(s, "fogNear"),
                fogFar: e.getUniformLocation(s, "fogFar"),
                fogColor: e.getUniformLocation(s, "fogColor"),
                fogDepth: e.getUniformLocation(s, "fogDepth"),
                alphaTest: e.getUniformLocation(s, "alphaTest")
            };
            var r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            r.width = 8, r.height = 8;
            var l = r.getContext("2d");
            l.fillStyle = "white", l.fillRect(0, 0, 8, 8), u = new un(r)
        }

        this.render = function (i, g, v) {
            if (0 !== i.length) {
                void 0 === s && p(), n.useProgram(s), n.initAttributes(), n.enableAttribute(c.position), n.enableAttribute(c.uv), n.disableUnusedAttributes(), n.disable(e.CULL_FACE), n.enable(e.BLEND), e.bindBuffer(e.ARRAY_BUFFER, a), e.vertexAttribPointer(c.position, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(c.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o), e.uniformMatrix4fv(h.projectionMatrix, !1, v.projectionMatrix.elements), n.activeTexture(e.TEXTURE0), e.uniform1i(h.map, 0);
                var y = 0, b = 0, x = g.fog;
                x ? (e.uniform3f(h.fogColor, x.color.r, x.color.g, x.color.b), x.isFog ? (e.uniform1f(h.fogNear, x.near), e.uniform1f(h.fogFar, x.far), e.uniform1i(h.fogType, 1), y = 1, b = 1) : x.isFogExp2 && (e.uniform1f(h.fogDensity, x.density), e.uniform1i(h.fogType, 2), y = 2, b = 2)) : (e.uniform1i(h.fogType, 0), y = 0, b = 0);
                for (var w = 0, _ = i.length; w < _; w++) {
                    (E = i[w]).modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, E.matrixWorld), E.z = -E.modelViewMatrix.elements[14]
                }
                i.sort(m);
                var M = [];
                for (w = 0, _ = i.length; w < _; w++) {
                    var E, T = (E = i[w]).material;
                    if (!1 !== T.visible) {
                        E.onBeforeRender(t, g, v, void 0, T, void 0), e.uniform1f(h.alphaTest, T.alphaTest), e.uniformMatrix4fv(h.modelViewMatrix, !1, E.modelViewMatrix.elements), E.matrixWorld.decompose(l, f, d), M[0] = d.x, M[1] = d.y;
                        var S = 0;
                        g.fog && T.fog && (S = b), y !== S && (e.uniform1i(h.fogType, S), y = S), null !== T.map ? (e.uniform2f(h.uvOffset, T.map.offset.x, T.map.offset.y), e.uniform2f(h.uvScale, T.map.repeat.x, T.map.repeat.y)) : (e.uniform2f(h.uvOffset, 0, 0), e.uniform2f(h.uvScale, 1, 1)), e.uniform1f(h.opacity, T.opacity), e.uniform3f(h.color, T.color.r, T.color.g, T.color.b), e.uniform1f(h.rotation, T.rotation), e.uniform2fv(h.scale, M), n.setBlending(T.blending, T.blendEquation, T.blendSrc, T.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T.premultipliedAlpha), n.buffers.depth.setTest(T.depthTest), n.buffers.depth.setMask(T.depthWrite), n.buffers.color.setMask(T.colorWrite), r.setTexture2D(T.map || u, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), E.onAfterRender(t, g, v, void 0, T, void 0)
                    }
                }
                n.enable(e.CULL_FACE), n.reset()
            }
        };

        function m(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }
    }

    var fn = 0;

    function dn() {
        Object.defineProperty(this, "id", {value: fn++}), this.uuid = re.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = m, this.side = c, this.flatShading = !1, this.vertexColors = l, this.opacity = 1, this.transparent = !1, this.blendSrc = R, this.blendDst = P, this.blendEquation = x, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = F, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    dn.prototype = Object.assign(Object.create(t.prototype), {
        constructor: dn,
        isMaterial: !0,
        onBeforeCompile: function () {
        },
        setValues: function (t) {
            if (void 0 !== t) for (var e in t) {
                var n = t[e];
                if (void 0 !== n) if ("shading" !== e) {
                    var r = this[e];
                    void 0 !== r ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = "overdraw" === e ? Number(n) : n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n; else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
            }
        },
        toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t;
            e && (t = {textures: {}, images: {}});
            var n = {metadata: {version: 4.5, type: "Material", generator: "Material.toJSON"}};
            n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== m && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== c && (n.side = this.side), this.vertexColors !== l && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation = this.rotation), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData);

            function r(t) {
                var e = [];
                for (var n in t) {
                    var r = t[n];
                    delete r.metadata, e.push(r)
                }
                return e
            }

            if (e) {
                var i = r(t.textures), a = r(t.images);
                i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a)
            }
            return n
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes, n = null;
            if (null !== e) {
                var r = e.length;
                n = new Array(r);
                for (var i = 0; i !== r; ++i) n[i] = e[i].clone()
            }
            return this.clippingPlanes = n, this
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    });

    function pn(t) {
        dn.call(this), this.type = "MeshDepthMaterial", this.depthPacking = ee, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    pn.prototype = Object.create(dn.prototype), pn.prototype.constructor = pn, pn.prototype.isMeshDepthMaterial = !0, pn.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    };

    function mn(t) {
        dn.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new se, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    mn.prototype = Object.create(dn.prototype), mn.prototype.constructor = mn, mn.prototype.isMeshDistanceMaterial = !0, mn.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    };

    function gn(t, e) {
        this.min = void 0 !== t ? t : new se(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new se(-1 / 0, -1 / 0, -1 / 0)
    }

    Object.assign(gn.prototype, {
        isBox3: !0, set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        }, setFromArray: function (t) {
            for (var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var h = t[s], u = t[s + 1], l = t[s + 2];
                h < e && (e = h), u < n && (n = u), l < r && (r = l), h > i && (i = h), u > a && (a = u), l > o && (o = l)
            }
            return this.min.set(e, n, r), this.max.set(i, a, o), this
        }, setFromBufferAttribute: function (t) {
            for (var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var h = t.getX(s), u = t.getY(s), l = t.getZ(s);
                h < e && (e = h), u < n && (n = u), l < r && (r = l), h > i && (i = h), u > a && (a = u), l > o && (o = l)
            }
            return this.min.set(e, n, r), this.max.set(i, a, o), this
        }, setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this
        }, setFromCenterAndSize: function () {
            var t = new se;
            return function (e, n) {
                var r = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
            }
        }(), setFromObject: function (t) {
            return this.makeEmpty(), this.expandByObject(t)
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }, getCenter: function (t) {
            var e = t || new se;
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        }, getSize: function (t) {
            var e = t || new se;
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        }, expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        }, expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        }, expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        }, expandByObject: function () {
            var t, e, n, r = new se;

            function i(i) {
                var a = i.geometry;
                if (void 0 !== a) if (a.isGeometry) {
                    var o = a.vertices;
                    for (e = 0, n = o.length; e < n; e++) r.copy(o[e]), r.applyMatrix4(i.matrixWorld), t.expandByPoint(r)
                } else if (a.isBufferGeometry) {
                    var s = a.attributes.position;
                    if (void 0 !== s) for (e = 0, n = s.count; e < n; e++) r.fromBufferAttribute(s, e).applyMatrix4(i.matrixWorld), t.expandByPoint(r)
                }
            }

            return function (e) {
                return t = this, e.updateMatrixWorld(!0), e.traverse(i), this
            }
        }(), containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        }, containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }, getParameter: function (t, e) {
            return (e || new se).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        }, intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        }, intersectsSphere: function () {
            var t = new se;
            return function (e) {
                return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(), intersectsPlane: function (t) {
            var e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= t.constant && n >= t.constant
        }, clampPoint: function (t, e) {
            return (e || new se).copy(t).clamp(this.min, this.max)
        }, distanceToPoint: function () {
            var t = new se;
            return function (e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(), getBoundingSphere: function () {
            var t = new se;
            return function (e) {
                var n = e || new vn;
                return this.getCenter(n.center), n.radius = .5 * this.getSize(t).length(), n
            }
        }(), intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        }, union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        }, applyMatrix4: function () {
            var t = [new se, new se, new se, new se, new se, new se, new se, new se];
            return function (e) {
                return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
            }
        }(), translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        }, equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    });

    function vn(t, e) {
        this.center = void 0 !== t ? t : new se, this.radius = void 0 !== e ? e : 0
    }

    Object.assign(vn.prototype, {
        set: function (t, e) {
            return this.center.copy(t), this.radius = e, this
        }, setFromPoints: function () {
            var t = new gn;
            return function (e, n) {
                var r = this.center;
                void 0 !== n ? r.copy(n) : t.setFromPoints(e).getCenter(r);
                for (var i = 0, a = 0, o = e.length; a < o; a++) i = Math.max(i, r.distanceToSquared(e[a]));
                return this.radius = Math.sqrt(i), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        }, empty: function () {
            return this.radius <= 0
        }, containsPoint: function (t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        }, distanceToPoint: function (t) {
            return t.distanceTo(this.center) - this.radius
        }, intersectsSphere: function (t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        }, intersectsBox: function (t) {
            return t.intersectsSphere(this)
        }, intersectsPlane: function (t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        }, clampPoint: function (t, e) {
            var n = this.center.distanceToSquared(t), r = e || new se;
            return r.copy(t), n > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
        }, getBoundingBox: function (t) {
            var e = t || new gn;
            return e.set(this.center, this.center), e.expandByScalar(this.radius), e
        }, applyMatrix4: function (t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        }, translate: function (t) {
            return this.center.add(t), this
        }, equals: function (t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    });

    function yn(t, e) {
        this.normal = void 0 !== t ? t : new se(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }

    Object.assign(yn.prototype, {
        set: function (t, e) {
            return this.normal.copy(t), this.constant = e, this
        }, setComponents: function (t, e, n, r) {
            return this.normal.set(t, e, n), this.constant = r, this
        }, setFromNormalAndCoplanarPoint: function (t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        }, setFromCoplanarPoints: function () {
            var t = new se, e = new se;
            return function (n, r, i) {
                var a = t.subVectors(i, r).cross(e.subVectors(n, r)).normalize();
                return this.setFromNormalAndCoplanarPoint(a, n), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        }, normalize: function () {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        }, negate: function () {
            return this.constant *= -1, this.normal.negate(), this
        }, distanceToPoint: function (t) {
            return this.normal.dot(t) + this.constant
        }, distanceToSphere: function (t) {
            return this.distanceToPoint(t.center) - t.radius
        }, projectPoint: function (t, e) {
            return (e || new se).copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        }, intersectLine: function () {
            var t = new se;
            return function (e, n) {
                var r = n || new se, i = e.delta(t), a = this.normal.dot(i);
                if (0 !== a) {
                    var o = -(e.start.dot(this.normal) + this.constant) / a;
                    if (!(o < 0 || o > 1)) return r.copy(i).multiplyScalar(o).add(e.start)
                } else if (0 === this.distanceToPoint(e.start)) return r.copy(e.start)
            }
        }(), intersectsLine: function (t) {
            var e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        }, intersectsBox: function (t) {
            return t.intersectsPlane(this)
        }, intersectsSphere: function (t) {
            return t.intersectsPlane(this)
        }, coplanarPoint: function (t) {
            return (t || new se).copy(this.normal).multiplyScalar(-this.constant)
        }, applyMatrix4: function () {
            var t = new se, e = new ce;
            return function (n, r) {
                var i = r || e.getNormalMatrix(n), a = this.coplanarPoint(t).applyMatrix4(n),
                    o = this.normal.applyMatrix3(i).normalize();
                return this.constant = -a.dot(o), this
            }
        }(), translate: function (t) {
            return this.constant -= t.dot(this.normal), this
        }, equals: function (t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    });

    function bn(t, e, n, r, i, a) {
        this.planes = [void 0 !== t ? t : new yn, void 0 !== e ? e : new yn, void 0 !== n ? n : new yn, void 0 !== r ? r : new yn, void 0 !== i ? i : new yn, void 0 !== a ? a : new yn]
    }

    Object.assign(bn.prototype, {
        set: function (t, e, n, r, i, a) {
            var o = this.planes;
            return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            for (var e = this.planes, n = 0; n < 6; n++) e[n].copy(t.planes[n]);
            return this
        }, setFromMatrix: function (t) {
            var e = this.planes, n = t.elements, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], c = n[5], h = n[6],
                u = n[7], l = n[8], f = n[9], d = n[10], p = n[11], m = n[12], g = n[13], v = n[14], y = n[15];
            return e[0].setComponents(o - r, u - s, p - l, y - m).normalize(), e[1].setComponents(o + r, u + s, p + l, y + m).normalize(), e[2].setComponents(o + i, u + c, p + f, y + g).normalize(), e[3].setComponents(o - i, u - c, p - f, y - g).normalize(), e[4].setComponents(o - a, u - h, p - d, y - v).normalize(), e[5].setComponents(o + a, u + h, p + d, y + v).normalize(), this
        }, intersectsObject: function () {
            var t = new vn;
            return function (e) {
                var n = e.geometry;
                return null === n.boundingSphere && n.computeBoundingSphere(), t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(), intersectsSprite: function () {
            var t = new vn;
            return function (e) {
                return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(), intersectsSphere: function (t) {
            for (var e = this.planes, n = t.center, r = -t.radius, i = 0; i < 6; i++) {
                if (e[i].distanceToPoint(n) < r) return !1
            }
            return !0
        }, intersectsBox: function () {
            var t = new se, e = new se;
            return function (n) {
                for (var r = this.planes, i = 0; i < 6; i++) {
                    var a = r[i];
                    t.x = a.normal.x > 0 ? n.min.x : n.max.x, e.x = a.normal.x > 0 ? n.max.x : n.min.x, t.y = a.normal.y > 0 ? n.min.y : n.max.y, e.y = a.normal.y > 0 ? n.max.y : n.min.y, t.z = a.normal.z > 0 ? n.min.z : n.max.z, e.z = a.normal.z > 0 ? n.max.z : n.min.z;
                    var o = a.distanceToPoint(t), s = a.distanceToPoint(e);
                    if (o < 0 && s < 0) return !1
                }
                return !0
            }
        }(), containsPoint: function (t) {
            for (var e = this.planes, n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
            return !0
        }
    });

    function xn(t, e, n) {
        for (var r = new bn, i = new ae, a = new ie, s = new ie(n, n), l = new se, f = new se, d = 1, p = 2, m = 1 + (d | p), g = new Array(m), v = new Array(m), y = {}, b = [new se(1, 0, 0), new se(-1, 0, 0), new se(0, 0, 1), new se(0, 0, -1), new se(0, 1, 0), new se(0, -1, 0)], x = [new se(0, 1, 0), new se(0, 1, 0), new se(0, 1, 0), new se(0, 1, 0), new se(0, 0, 1), new se(0, 0, -1)], w = [new le, new le, new le, new le, new le, new le], _ = 0; _ !== m; ++_) {
            var M = 0 != (_ & d), E = 0 != (_ & p), T = new pn({depthPacking: ne, morphTargets: M, skinning: E});
            g[_] = T;
            var S = new mn({morphTargets: M, skinning: E});
            v[_] = S
        }
        var A = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = o, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function (e, n, o) {
            if (!1 !== A.enabled && (!1 !== A.autoUpdate || !1 !== A.needsUpdate) && 0 !== e.length) {
                var c = t.context, h = t.state;
                h.disable(c.BLEND), h.buffers.color.setClear(1, 1, 1, 1), h.buffers.depth.setTest(!0), h.setScissorTest(!1);
                for (var u, d = 0, p = e.length; d < p; d++) {
                    var m = e[d], g = m.shadow, v = m && m.isPointLight;
                    if (void 0 !== g) {
                        var y = g.camera;
                        if (a.copy(g.mapSize), a.min(s), v) {
                            var _ = a.x, M = a.y;
                            w[0].set(2 * _, M, _, M), w[1].set(0, M, _, M), w[2].set(3 * _, M, _, M), w[3].set(_, M, _, M), w[4].set(3 * _, 0, _, M), w[5].set(_, 0, _, M), a.x *= 4, a.y *= 2
                        }
                        if (null === g.map) {
                            var E = {minFilter: ct, magFilter: ct, format: Lt};
                            g.map = new fe(a.x, a.y, E), g.map.texture.name = m.name + ".shadowMap", y.updateProjectionMatrix()
                        }
                        g.isSpotLightShadow && g.update(m);
                        var T = g.map, S = g.matrix;
                        f.setFromMatrixPosition(m.matrixWorld), y.position.copy(f), v ? (u = 6, S.makeTranslation(-f.x, -f.y, -f.z)) : (u = 1, l.setFromMatrixPosition(m.target.matrixWorld), y.lookAt(l), y.updateMatrixWorld(), S.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), S.multiply(y.projectionMatrix), S.multiply(y.matrixWorldInverse)), t.setRenderTarget(T), t.clear();
                        for (var L = 0; L < u; L++) {
                            if (v) {
                                l.copy(y.position), l.add(b[L]), y.up.copy(x[L]), y.lookAt(l), y.updateMatrixWorld();
                                var P = w[L];
                                h.viewport(P)
                            }
                            i.multiplyMatrices(y.projectionMatrix, y.matrixWorldInverse), r.setFromMatrix(i), R(n, o, y, v)
                        }
                    } else console.warn("THREE.WebGLShadowMap:", m, "has no shadow.")
                }
                A.needsUpdate = !1
            }
        };

        function L(e, n, r, i, a, o) {
            var s = e.geometry, l = null, f = g, m = e.customDepthMaterial;
            if (r && (f = v, m = e.customDistanceMaterial), m) l = m; else {
                var b = !1;
                n.morphTargets && (s && s.isBufferGeometry ? b = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (b = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
                var x = e.isSkinnedMesh && n.skinning, w = 0;
                b && (w |= d), x && (w |= p), l = f[w]
            }
            if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                var _ = l.uuid, M = n.uuid, E = y[_];
                void 0 === E && (E = {}, y[_] = E);
                var T = E[M];
                void 0 === T && (T = l.clone(), E[M] = T), l = T
            }
            l.visible = n.visible, l.wireframe = n.wireframe;
            var S = n.side;
            return A.renderSingleSided && S == u && (S = c), A.renderReverseSided && (S === c ? S = h : S === h && (S = c)), l.side = S, l.clipShadows = n.clipShadows, l.clippingPlanes = n.clippingPlanes, l.clipIntersection = n.clipIntersection, l.wireframeLinewidth = n.wireframeLinewidth, l.linewidth = n.linewidth, r && l.isMeshDistanceMaterial && (l.referencePosition.copy(i), l.nearDistance = a, l.farDistance = o), l
        }

        function R(n, i, a, o) {
            if (!1 !== n.visible) {
                if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || r.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
                    var s = e.update(n), c = n.material;
                    if (Array.isArray(c)) for (var h = s.groups, u = 0, l = h.length; u < l; u++) {
                        var d = h[u], p = c[d.materialIndex];
                        if (p && p.visible) {
                            var m = L(n, p, o, f, a.near, a.far);
                            t.renderBufferDirect(a, null, s, m, n, d)
                        }
                    } else if (c.visible) {
                        m = L(n, c, o, f, a.near, a.far);
                        t.renderBufferDirect(a, null, s, m, n, null)
                    }
                }
                for (var g = n.children, v = 0, y = g.length; v < y; v++) R(g[v], i, a, o)
            }
        }
    }

    function wn(t) {
        var e = {};
        return {
            get: function (t) {
                return t.isInterleavedBufferAttribute && (t = t.data), e[t.uuid]
            }, remove: function (n) {
                n.isInterleavedBufferAttribute && (n = n.data);
                var r = e[n.uuid];
                r && (t.deleteBuffer(r.buffer), delete e[n.uuid])
            }, update: function (n, r) {
                n.isInterleavedBufferAttribute && (n = n.data);
                var i = e[n.uuid];
                void 0 === i ? e[n.uuid] = function (e, n) {
                    var r = e.array, i = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW, a = t.createBuffer();
                    t.bindBuffer(n, a), t.bufferData(n, r, i), e.onUploadCallback();
                    var o = t.FLOAT;
                    return r instanceof Float32Array ? o = t.FLOAT : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? o = t.UNSIGNED_SHORT : r instanceof Int16Array ? o = t.SHORT : r instanceof Uint32Array ? o = t.UNSIGNED_INT : r instanceof Int32Array ? o = t.INT : r instanceof Int8Array ? o = t.BYTE : r instanceof Uint8Array && (o = t.UNSIGNED_BYTE), {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }(n, r) : i.version < n.version && (function (e, n, r) {
                    var i = n.array, a = n.updateRange;
                    t.bindBuffer(r, e), !1 === n.dynamic ? t.bufferData(r, i, t.STATIC_DRAW) : -1 === a.count ? t.bufferSubData(r, 0, i) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(r, a.offset * i.BYTES_PER_ELEMENT, i.subarray(a.offset, a.offset + a.count)), a.count = -1)
                }(i.buffer, n, r), i.version = n.version)
            }
        }
    }

    function _n(t, e, n, r) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = r || _n.DefaultOrder
    }

    _n.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], _n.DefaultOrder = "XYZ", Object.defineProperties(_n.prototype, {
        x: {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this.onChangeCallback()
            }
        }, y: {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this.onChangeCallback()
            }
        }, z: {
            get: function () {
                return this._z
            }, set: function (t) {
                this._z = t, this.onChangeCallback()
            }
        }, order: {
            get: function () {
                return this._order
            }, set: function (t) {
                this._order = t, this.onChangeCallback()
            }
        }
    }), Object.assign(_n.prototype, {
        isEuler: !0, set: function (t, e, n, r) {
            return this._x = t, this._y = e, this._z = n, this._order = r || this._order, this.onChangeCallback(), this
        }, clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._order)
        }, copy: function (t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        }, setFromRotationMatrix: function (t, e, n) {
            var r = re.clamp, i = t.elements, a = i[0], o = i[4], s = i[8], c = i[1], h = i[5], u = i[9], l = i[2],
                f = i[6], d = i[10];
            return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(f, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-l, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(r(f, -1, 1)), Math.abs(f) < .99999 ? (this._y = Math.atan2(-l, d), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-r(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(r(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, h), this._y = Math.atan2(-l, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-r(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(f, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== n && this.onChangeCallback(), this
        }, setFromQuaternion: function () {
            var t = new ae;
            return function (e, n, r) {
                return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, n, r)
            }
        }(), setFromVector3: function (t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        }, reorder: function () {
            var t = new oe;
            return function (e) {
                return t.setFromEuler(this), this.setFromQuaternion(t, e)
            }
        }(), equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        }, fromArray: function (t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        }, toVector3: function (t) {
            return t ? t.set(this._x, this._y, this._z) : new se(this._x, this._y, this._z)
        }, onChange: function (t) {
            return this.onChangeCallback = t, this
        }, onChangeCallback: function () {
        }
    });

    function Mn() {
        this.mask = 1
    }

    Object.assign(Mn.prototype, {
        set: function (t) {
            this.mask = 1 << t | 0
        }, enable: function (t) {
            this.mask |= 1 << t | 0
        }, toggle: function (t) {
            this.mask ^= 1 << t | 0
        }, disable: function (t) {
            this.mask &= ~(1 << t | 0)
        }, test: function (t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var En = 0;

    function Tn() {
        Object.defineProperty(this, "id", {value: En++}), this.uuid = re.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Tn.DefaultUp.clone();
        var t = new se, e = new _n, n = new oe, r = new se(1, 1, 1);
        e.onChange(function () {
            n.setFromEuler(e, !1)
        }), n.onChange(function () {
            e.setFromQuaternion(n, void 0, !1)
        }), Object.defineProperties(this, {
            position: {enumerable: !0, value: t},
            rotation: {enumerable: !0, value: e},
            quaternion: {enumerable: !0, value: n},
            scale: {enumerable: !0, value: r},
            modelViewMatrix: {value: new ae},
            normalMatrix: {value: new ce}
        }), this.matrix = new ae, this.matrixWorld = new ae, this.matrixAutoUpdate = Tn.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Mn, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    Tn.DefaultUp = new se(0, 1, 0), Tn.DefaultMatrixAutoUpdate = !0, Tn.prototype = Object.assign(Object.create(t.prototype), {
        constructor: Tn,
        isObject3D: !0,
        onBeforeRender: function () {
        },
        onAfterRender: function () {
        },
        applyMatrix: function (t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function (t) {
            return this.quaternion.premultiply(t), this
        },
        setRotationFromAxisAngle: function (t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function (t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function (t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function (t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function () {
            var t = new oe;
            return function (e, n) {
                return t.setFromAxisAngle(e, n), this.quaternion.multiply(t), this
            }
        }(),
        rotateOnWorldAxis: function () {
            var t = new oe;
            return function (e, n) {
                return t.setFromAxisAngle(e, n), this.quaternion.premultiply(t), this
            }
        }(),
        rotateX: function () {
            var t = new se(1, 0, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function () {
            var t = new se(0, 1, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function () {
            var t = new se(0, 0, 1);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function () {
            var t = new se;
            return function (e, n) {
                return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(n)), this
            }
        }(),
        translateX: function () {
            var t = new se(1, 0, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function () {
            var t = new se(0, 1, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function () {
            var t = new se(0, 0, 1);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function (t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function () {
            var t = new ae;
            return function (e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function () {
            var t = new ae, e = new se;
            return function (n, r, i) {
                n.isVector3 ? e.copy(n) : e.set(n, r, i), this.isCamera ? t.lookAt(this.position, e, this.up) : t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
            }
        }(),
        add: function (t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({type: "added"}), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        },
        remove: function (t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                return this
            }
            var n = this.children.indexOf(t);
            return -1 !== n && (t.parent = null, t.dispatchEvent({type: "removed"}), this.children.splice(n, 1)), this
        },
        getObjectById: function (t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function (t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function (t, e) {
            if (this[t] === e) return this;
            for (var n = 0, r = this.children.length; n < r; n++) {
                var i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i) return i
            }
        },
        getWorldPosition: function (t) {
            var e = t || new se;
            return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function () {
            var t = new se, e = new se;
            return function (n) {
                var r = n || new oe;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, r, e), r
            }
        }(),
        getWorldRotation: function () {
            var t = new oe;
            return function (e) {
                var n = e || new _n;
                return this.getWorldQuaternion(t), n.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function () {
            var t = new se, e = new oe;
            return function (n) {
                var r = n || new se;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, r), r
            }
        }(),
        getWorldDirection: function () {
            var t = new oe;
            return function (e) {
                var n = e || new se;
                return this.getWorldQuaternion(t), n.set(0, 0, 1).applyQuaternion(t)
            }
        }(),
        raycast: function () {
        },
        traverse: function (t) {
            t(this);
            for (var e = this.children, n = 0, r = e.length; n < r; n++) e[n].traverse(t)
        },
        traverseVisible: function (t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, n = 0, r = e.length; n < r; n++) e[n].traverseVisible(t)
            }
        },
        traverseAncestors: function (t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        },
        updateMatrix: function () {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function (t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = this.children, n = 0, r = e.length; n < r; n++) e[n].updateMatrixWorld(t)
        },
        toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t, n = {};
            e && (t = {geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}}, n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var r = {};
            r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), !0 === this.castShadow && (r.castShadow = !0), !0 === this.receiveShadow && (r.receiveShadow = !0), !1 === this.visible && (r.visible = !1), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), r.matrix = this.matrix.toArray();

            function i(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
            }

            if (void 0 !== this.geometry) {
                r.geometry = i(t.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var o = a.shapes;
                    if (Array.isArray(o)) for (var s = 0, c = o.length; s < c; s++) {
                        var h = o[s];
                        i(t.shapes, h)
                    } else i(t.shapes, o)
                }
            }
            if (void 0 !== this.material) if (Array.isArray(this.material)) {
                var u = [];
                for (s = 0, c = this.material.length; s < c; s++) u.push(i(t.materials, this.material[s]));
                r.material = u
            } else r.material = i(t.materials, this.material);
            if (this.children.length > 0) {
                r.children = [];
                for (s = 0; s < this.children.length; s++) r.children.push(this.children[s].toJSON(t).object)
            }
            if (e) {
                var l = m(t.geometries), f = m(t.materials), d = m(t.textures), p = m(t.images);
                o = m(t.shapes);
                l.length > 0 && (n.geometries = l), f.length > 0 && (n.materials = f), d.length > 0 && (n.textures = d), p.length > 0 && (n.images = p), o.length > 0 && (n.shapes = o)
            }
            return n.object = r, n;

            function m(t) {
                var e = [];
                for (var n in t) {
                    var r = t[n];
                    delete r.metadata, e.push(r)
                }
                return e
            }
        },
        clone: function (t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function (t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (var n = 0; n < t.children.length; n++) {
                var r = t.children[n];
                this.add(r.clone())
            }
            return this
        }
    });

    function Sn() {
        Tn.call(this), this.type = "Camera", this.matrixWorldInverse = new ae, this.projectionMatrix = new ae
    }

    Sn.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Sn, isCamera: !0, copy: function (t, e) {
            return Tn.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
        }, getWorldDirection: function () {
            var t = new oe;
            return function (e) {
                var n = e || new se;
                return this.getWorldQuaternion(t), n.set(0, 0, -1).applyQuaternion(t)
            }
        }(), updateMatrixWorld: function (t) {
            Tn.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
        }, clone: function () {
            return (new this.constructor).copy(this)
        }
    });

    function An(t, e, n, r, i, a) {
        Sn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = void 0 !== i ? i : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }

    An.prototype = Object.assign(Object.create(Sn.prototype), {
        constructor: An,
        isOrthographicCamera: !0,
        copy: function (t, e) {
            return Sn.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        },
        setViewOffset: function (t, e, n, r, i, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom),
                n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - t, a = n + t, o = r + e,
                s = r - e;
            if (null !== this.view && this.view.enabled) {
                var c = this.zoom / (this.view.width / this.view.fullWidth),
                    h = this.zoom / (this.view.height / this.view.fullHeight),
                    u = (this.right - this.left) / this.view.width, l = (this.top - this.bottom) / this.view.height;
                a = (i += u * (this.view.offsetX / c)) + u * (this.view.width / c), s = (o -= l * (this.view.offsetY / h)) - l * (this.view.height / h)
            }
            this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far)
        },
        toJSON: function (t) {
            var e = Tn.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
    });

    function Ln(t, e, n, r, i, a) {
        this.a = t, this.b = e, this.c = n, this.normal = r && r.isVector3 ? r : new se, this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new nn, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== a ? a : 0
    }

    Object.assign(Ln.prototype, {
        clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
            for (var e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    });
    var Rn = 0;

    function Pn() {
        Object.defineProperty(this, "id", {value: Rn += 2}), this.uuid = re.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    Pn.prototype = Object.assign(Object.create(t.prototype), {
        constructor: Pn,
        isGeometry: !0,
        applyMatrix: function (t) {
            for (var e = (new ce).getNormalMatrix(t), n = 0, r = this.vertices.length; n < r; n++) {
                this.vertices[n].applyMatrix4(t)
            }
            for (n = 0, r = this.faces.length; n < r; n++) {
                var i = this.faces[n];
                i.normal.applyMatrix3(e).normalize();
                for (var a = 0, o = i.vertexNormals.length; a < o; a++) i.vertexNormals[a].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        },
        rotateX: function () {
            var t = new ae;
            return function (e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function () {
            var t = new ae;
            return function (e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function () {
            var t = new ae;
            return function (e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function () {
            var t = new ae;
            return function (e, n, r) {
                return t.makeTranslation(e, n, r), this.applyMatrix(t), this
            }
        }(),
        scale: function () {
            var t = new ae;
            return function (e, n, r) {
                return t.makeScale(e, n, r), this.applyMatrix(t), this
            }
        }(),
        lookAt: function () {
            var t = new Tn;
            return function (e) {
                t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        fromBufferGeometry: function (t) {
            var e = this, n = null !== t.index ? t.index.array : void 0, r = t.attributes, i = r.position.array,
                a = void 0 !== r.normal ? r.normal.array : void 0, o = void 0 !== r.color ? r.color.array : void 0,
                s = void 0 !== r.uv ? r.uv.array : void 0, c = void 0 !== r.uv2 ? r.uv2.array : void 0;
            void 0 !== c && (this.faceVertexUvs[1] = []);
            for (var h = [], u = [], l = [], f = 0, d = 0; f < i.length; f += 3, d += 2) e.vertices.push(new se(i[f], i[f + 1], i[f + 2])), void 0 !== a && h.push(new se(a[f], a[f + 1], a[f + 2])), void 0 !== o && e.colors.push(new nn(o[f], o[f + 1], o[f + 2])), void 0 !== s && u.push(new ie(s[d], s[d + 1])), void 0 !== c && l.push(new ie(c[d], c[d + 1]));

            function p(t, n, r, i) {
                var f = new Ln(t, n, r, void 0 !== a ? [h[t].clone(), h[n].clone(), h[r].clone()] : [], void 0 !== o ? [e.colors[t].clone(), e.colors[n].clone(), e.colors[r].clone()] : [], i);
                e.faces.push(f), void 0 !== s && e.faceVertexUvs[0].push([u[t].clone(), u[n].clone(), u[r].clone()]), void 0 !== c && e.faceVertexUvs[1].push([l[t].clone(), l[n].clone(), l[r].clone()])
            }

            var m = t.groups;
            if (m.length > 0) for (f = 0; f < m.length; f++) for (var g = m[f], v = g.start, y = (d = v, v + g.count); d < y; d += 3) void 0 !== n ? p(n[d], n[d + 1], n[d + 2], g.materialIndex) : p(d, d + 1, d + 2, g.materialIndex); else if (void 0 !== n) for (f = 0; f < n.length; f += 3) p(n[f], n[f + 1], n[f + 2]); else for (f = 0; f < i.length / 3; f += 3) p(f, f + 1, f + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        normalize: function () {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center, e = this.boundingSphere.radius, n = 0 === e ? 1 : 1 / e, r = new ae;
            return r.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix(r), this
        },
        computeFaceNormals: function () {
            for (var t = new se, e = new se, n = 0, r = this.faces.length; n < r; n++) {
                var i = this.faces[n], a = this.vertices[i.a], o = this.vertices[i.b], s = this.vertices[i.c];
                t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), i.normal.copy(t)
            }
        },
        computeVertexNormals: function (t) {
            void 0 === t && (t = !0);
            var e, n, r, i, a, o;
            for (o = new Array(this.vertices.length), e = 0, n = this.vertices.length; e < n; e++) o[e] = new se;
            if (t) {
                var s, c, h, u = new se, l = new se;
                for (r = 0, i = this.faces.length; r < i; r++) a = this.faces[r], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], u.subVectors(h, c), l.subVectors(s, c), u.cross(l), o[a.a].add(u), o[a.b].add(u), o[a.c].add(u)
            } else for (this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++) o[(a = this.faces[r]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
            for (e = 0, n = this.vertices.length; e < n; e++) o[e].normalize();
            for (r = 0, i = this.faces.length; r < i; r++) {
                var f = (a = this.faces[r]).vertexNormals;
                3 === f.length ? (f[0].copy(o[a.a]), f[1].copy(o[a.b]), f[2].copy(o[a.c])) : (f[0] = o[a.a].clone(), f[1] = o[a.b].clone(), f[2] = o[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function () {
            var t, e, n;
            for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                var r = (n = this.faces[t]).vertexNormals;
                3 === r.length ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function () {
            var t, e, n, r, i;
            for (n = 0, r = this.faces.length; n < r; n++) for ((i = this.faces[n]).__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), t = 0, e = i.vertexNormals.length; t < e; t++) i.__originalVertexNormals[t] ? i.__originalVertexNormals[t].copy(i.vertexNormals[t]) : i.__originalVertexNormals[t] = i.vertexNormals[t].clone();
            var a = new Pn;
            for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                    var o = this.morphNormals[t].faceNormals, s = this.morphNormals[t].vertexNormals;
                    for (n = 0, r = this.faces.length; n < r; n++) h = new se, u = {
                        a: new se,
                        b: new se,
                        c: new se
                    }, o.push(h), s.push(u)
                }
                var c = this.morphNormals[t];
                a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals();
                var h, u;
                for (n = 0, r = this.faces.length; n < r; n++) i = this.faces[n], h = c.faceNormals[n], u = c.vertexNormals[n], h.copy(i.normal), u.a.copy(i.vertexNormals[0]), u.b.copy(i.vertexNormals[1]), u.c.copy(i.vertexNormals[2])
            }
            for (n = 0, r = this.faces.length; n < r; n++) (i = this.faces[n]).normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
        },
        computeLineDistances: function () {
            for (var t = 0, e = this.vertices, n = 0, r = e.length; n < r; n++) n > 0 && (t += e[n].distanceTo(e[n - 1])), this.lineDistances[n] = t
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new gn), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function () {
            null === this.boundingSphere && (this.boundingSphere = new vn), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function (t, e, n) {
            if (t && t.isGeometry) {
                var r, i = this.vertices.length, a = this.vertices, o = t.vertices, s = this.faces, c = t.faces,
                    h = this.faceVertexUvs[0], u = t.faceVertexUvs[0], l = this.colors, f = t.colors;
                void 0 === n && (n = 0), void 0 !== e && (r = (new ce).getNormalMatrix(e));
                for (var d = 0, p = o.length; d < p; d++) {
                    var m = o[d].clone();
                    void 0 !== e && m.applyMatrix4(e), a.push(m)
                }
                for (d = 0, p = f.length; d < p; d++) l.push(f[d].clone());
                for (d = 0, p = c.length; d < p; d++) {
                    var g, v, y, b = c[d], x = b.vertexNormals, w = b.vertexColors;
                    (g = new Ln(b.a + i, b.b + i, b.c + i)).normal.copy(b.normal), void 0 !== r && g.normal.applyMatrix3(r).normalize();
                    for (var _ = 0, M = x.length; _ < M; _++) v = x[_].clone(), void 0 !== r && v.applyMatrix3(r).normalize(), g.vertexNormals.push(v);
                    g.color.copy(b.color);
                    for (_ = 0, M = w.length; _ < M; _++) y = w[_], g.vertexColors.push(y.clone());
                    g.materialIndex = b.materialIndex + n, s.push(g)
                }
                for (d = 0, p = u.length; d < p; d++) {
                    var E = u[d], T = [];
                    if (void 0 !== E) {
                        for (_ = 0, M = E.length; _ < M; _++) T.push(E[_].clone());
                        h.push(T)
                    }
                }
            } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function (t) {
            t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
        },
        mergeVertices: function () {
            var t, e, n, r, i, a, o, s, c = {}, h = [], u = [], l = Math.pow(10, 4);
            for (n = 0, r = this.vertices.length; n < r; n++) t = this.vertices[n], void 0 === c[e = Math.round(t.x * l) + "_" + Math.round(t.y * l) + "_" + Math.round(t.z * l)] ? (c[e] = n, h.push(this.vertices[n]), u[n] = h.length - 1) : u[n] = u[c[e]];
            var f = [];
            for (n = 0, r = this.faces.length; n < r; n++) {
                (i = this.faces[n]).a = u[i.a], i.b = u[i.b], i.c = u[i.c], a = [i.a, i.b, i.c];
                for (var d = 0; d < 3; d++) if (a[d] === a[(d + 1) % 3]) {
                    f.push(n);
                    break
                }
            }
            for (n = f.length - 1; n >= 0; n--) {
                var p = f[n];
                for (this.faces.splice(p, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(p, 1)
            }
            var m = this.vertices.length - h.length;
            return this.vertices = h, m
        },
        setFromPoints: function (t) {
            this.vertices = [];
            for (var e = 0, n = t.length; e < n; e++) {
                var r = t[e];
                this.vertices.push(new se(r.x, r.y, r.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function () {
            for (var t = this.faces, e = t.length, n = 0; n < e; n++) t[n]._id = n;
            t.sort(function (t, e) {
                return t.materialIndex - e.materialIndex
            });
            var r, i, a = this.faceVertexUvs[0], o = this.faceVertexUvs[1];
            a && a.length === e && (r = []), o && o.length === e && (i = []);
            for (n = 0; n < e; n++) {
                var s = t[n]._id;
                r && r.push(a[s]), i && i.push(o[s])
            }
            r && (this.faceVertexUvs[0] = r), i && (this.faceVertexUvs[1] = i)
        },
        toJSON: function () {
            var t = {metadata: {version: 4.5, type: "Geometry", generator: "Geometry.toJSON"}};
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            for (var r = [], i = 0; i < this.vertices.length; i++) {
                var a = this.vertices[i];
                r.push(a.x, a.y, a.z)
            }
            var o = [], s = [], c = {}, h = [], u = {}, l = [], f = {};
            for (i = 0; i < this.faces.length; i++) {
                var d = this.faces[i], p = void 0 !== this.faceVertexUvs[0][i], m = d.normal.length() > 0,
                    g = d.vertexNormals.length > 0, v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                    y = d.vertexColors.length > 0, b = 0;
                if (b = M(b = M(b = M(b = M(b = M(b = M(b = M(b = M(b, 0, 0), 1, !0), 2, !1), 3, p), 4, m), 5, g), 6, v), 7, y), o.push(b), o.push(d.a, d.b, d.c), o.push(d.materialIndex), p) {
                    var x = this.faceVertexUvs[0][i];
                    o.push(S(x[0]), S(x[1]), S(x[2]))
                }
                if (m && o.push(E(d.normal)), g) {
                    var w = d.vertexNormals;
                    o.push(E(w[0]), E(w[1]), E(w[2]))
                }
                if (v && o.push(T(d.color)), y) {
                    var _ = d.vertexColors;
                    o.push(T(_[0]), T(_[1]), T(_[2]))
                }
            }

            function M(t, e, n) {
                return n ? t | 1 << e : t & ~(1 << e)
            }

            function E(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== c[e] ? c[e] : (c[e] = s.length / 3, s.push(t.x, t.y, t.z), c[e])
            }

            function T(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== u[e] ? u[e] : (u[e] = h.length, h.push(t.getHex()), u[e])
            }

            function S(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== f[e] ? f[e] : (f[e] = l.length / 2, l.push(t.x, t.y), f[e])
            }

            return t.data = {}, t.data.vertices = r, t.data.normals = s, h.length > 0 && (t.data.colors = h), l.length > 0 && (t.data.uvs = [l]), t.data.faces = o, t
        },
        clone: function () {
            return (new Pn).copy(this)
        },
        copy: function (t) {
            var e, n, r, i, a, o;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var s = t.vertices;
            for (e = 0, n = s.length; e < n; e++) this.vertices.push(s[e].clone());
            var c = t.colors;
            for (e = 0, n = c.length; e < n; e++) this.colors.push(c[e].clone());
            var h = t.faces;
            for (e = 0, n = h.length; e < n; e++) this.faces.push(h[e].clone());
            for (e = 0, n = t.faceVertexUvs.length; e < n; e++) {
                var u = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), r = 0, i = u.length; r < i; r++) {
                    var l = u[r], f = [];
                    for (a = 0, o = l.length; a < o; a++) {
                        var d = l[a];
                        f.push(d.clone())
                    }
                    this.faceVertexUvs[e].push(f)
                }
            }
            var p = t.morphTargets;
            for (e = 0, n = p.length; e < n; e++) {
                var m = {};
                if (m.name = p[e].name, void 0 !== p[e].vertices) for (m.vertices = [], r = 0, i = p[e].vertices.length; r < i; r++) m.vertices.push(p[e].vertices[r].clone());
                if (void 0 !== p[e].normals) for (m.normals = [], r = 0, i = p[e].normals.length; r < i; r++) m.normals.push(p[e].normals[r].clone());
                this.morphTargets.push(m)
            }
            var g = t.morphNormals;
            for (e = 0, n = g.length; e < n; e++) {
                var v = {};
                if (void 0 !== g[e].vertexNormals) for (v.vertexNormals = [], r = 0, i = g[e].vertexNormals.length; r < i; r++) {
                    var y = g[e].vertexNormals[r], b = {};
                    b.a = y.a.clone(), b.b = y.b.clone(), b.c = y.c.clone(), v.vertexNormals.push(b)
                }
                if (void 0 !== g[e].faceNormals) for (v.faceNormals = [], r = 0, i = g[e].faceNormals.length; r < i; r++) v.faceNormals.push(g[e].faceNormals[r].clone());
                this.morphNormals.push(v)
            }
            var x = t.skinWeights;
            for (e = 0, n = x.length; e < n; e++) this.skinWeights.push(x[e].clone());
            var w = t.skinIndices;
            for (e = 0, n = w.length; e < n; e++) this.skinIndices.push(w[e].clone());
            var _ = t.lineDistances;
            for (e = 0, n = _.length; e < n; e++) this.lineDistances.push(_[e]);
            var M = t.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var E = t.boundingSphere;
            return null !== E && (this.boundingSphere = E.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    });

    function Cn(t, e, n) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = re.generateUUID(), this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function () {
        }, this.version = 0
    }

    Object.defineProperty(Cn.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(Cn.prototype, {
        isBufferAttribute: !0, setArray: function (t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t
        }, setDynamic: function (t) {
            return this.dynamic = t, this
        }, copy: function (t) {
            return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
        }, copyAt: function (t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for (var r = 0, i = this.itemSize; r < i; r++) this.array[t + r] = e.array[n + r];
            return this
        }, copyArray: function (t) {
            return this.array.set(t), this
        }, copyColorsArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new nn), e[n++] = a.r, e[n++] = a.g, e[n++] = a.b
            }
            return this
        }, copyIndicesArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                e[n++] = a.a, e[n++] = a.b, e[n++] = a.c
            }
            return this
        }, copyVector2sArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new ie), e[n++] = a.x, e[n++] = a.y
            }
            return this
        }, copyVector3sArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new se), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z
            }
            return this
        }, copyVector4sArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new le), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z, e[n++] = a.w
            }
            return this
        }, set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        }, getX: function (t) {
            return this.array[t * this.itemSize]
        }, setX: function (t, e) {
            return this.array[t * this.itemSize] = e, this
        }, getY: function (t) {
            return this.array[t * this.itemSize + 1]
        }, setY: function (t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        }, getZ: function (t) {
            return this.array[t * this.itemSize + 2]
        }, setZ: function (t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        }, getW: function (t) {
            return this.array[t * this.itemSize + 3]
        }, setW: function (t, e) {
            return this.array[t * this.itemSize + 3] = e, this
        }, setXY: function (t, e, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
        }, setXYZ: function (t, e, n, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this
        }, setXYZW: function (t, e, n, r, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = i, this
        }, onUpload: function (t) {
            return this.onUploadCallback = t, this
        }, clone: function () {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
    });

    function Nn(t, e, n) {
        Cn.call(this, new Int8Array(t), e, n)
    }

    Nn.prototype = Object.create(Cn.prototype), Nn.prototype.constructor = Nn;

    function On(t, e, n) {
        Cn.call(this, new Uint8Array(t), e, n)
    }

    On.prototype = Object.create(Cn.prototype), On.prototype.constructor = On;

    function In(t, e, n) {
        Cn.call(this, new Uint8ClampedArray(t), e, n)
    }

    In.prototype = Object.create(Cn.prototype), In.prototype.constructor = In;

    function Dn(t, e, n) {
        Cn.call(this, new Int16Array(t), e, n)
    }

    Dn.prototype = Object.create(Cn.prototype), Dn.prototype.constructor = Dn;

    function Un(t, e, n) {
        Cn.call(this, new Uint16Array(t), e, n)
    }

    Un.prototype = Object.create(Cn.prototype), Un.prototype.constructor = Un;

    function zn(t, e, n) {
        Cn.call(this, new Int32Array(t), e, n)
    }

    zn.prototype = Object.create(Cn.prototype), zn.prototype.constructor = zn;

    function Bn(t, e, n) {
        Cn.call(this, new Uint32Array(t), e, n)
    }

    Bn.prototype = Object.create(Cn.prototype), Bn.prototype.constructor = Bn;

    function Fn(t, e, n) {
        Cn.call(this, new Float32Array(t), e, n)
    }

    Fn.prototype = Object.create(Cn.prototype), Fn.prototype.constructor = Fn;

    function kn(t, e, n) {
        Cn.call(this, new Float64Array(t), e, n)
    }

    kn.prototype = Object.create(Cn.prototype), kn.prototype.constructor = kn;

    function Gn() {
        this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    Object.assign(Gn.prototype, {
        computeGroups: function (t) {
            for (var e, n = [], r = void 0, i = t.faces, a = 0; a < i.length; a++) {
                var o = i[a];
                o.materialIndex !== r && (r = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, n.push(e)), e = {
                    start: 3 * a,
                    materialIndex: r
                })
            }
            void 0 !== e && (e.count = 3 * a - e.start, n.push(e)), this.groups = n
        }, fromGeometry: function (t) {
            var e, n = t.faces, r = t.vertices, i = t.faceVertexUvs, a = i[0] && i[0].length > 0,
                o = i[1] && i[1].length > 0, s = t.morphTargets, c = s.length;
            if (c > 0) {
                e = [];
                for (var h = 0; h < c; h++) e[h] = [];
                this.morphTargets.position = e
            }
            var u, l = t.morphNormals, f = l.length;
            if (f > 0) {
                u = [];
                for (h = 0; h < f; h++) u[h] = [];
                this.morphTargets.normal = u
            }
            var d = t.skinIndices, p = t.skinWeights, m = d.length === r.length, g = p.length === r.length;
            for (h = 0; h < n.length; h++) {
                var v = n[h];
                this.vertices.push(r[v.a], r[v.b], r[v.c]);
                var y = v.vertexNormals;
                if (3 === y.length) this.normals.push(y[0], y[1], y[2]); else {
                    var b = v.normal;
                    this.normals.push(b, b, b)
                }
                var x = v.vertexColors;
                if (3 === x.length) this.colors.push(x[0], x[1], x[2]); else {
                    var w = v.color;
                    this.colors.push(w, w, w)
                }
                if (!0 === a) {
                    void 0 !== (_ = i[0][h]) ? this.uvs.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new ie, new ie, new ie))
                }
                if (!0 === o) {
                    var _;
                    void 0 !== (_ = i[1][h]) ? this.uvs2.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new ie, new ie, new ie))
                }
                for (var M = 0; M < c; M++) {
                    var E = s[M].vertices;
                    e[M].push(E[v.a], E[v.b], E[v.c])
                }
                for (M = 0; M < f; M++) {
                    var T = l[M].vertexNormals[h];
                    u[M].push(T.a, T.b, T.c)
                }
                m && this.skinIndices.push(d[v.a], d[v.b], d[v.c]), g && this.skinWeights.push(p[v.a], p[v.b], p[v.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }
    });

    function Hn(t) {
        if (0 === t.length) return -1 / 0;
        for (var e = t[0], n = 1, r = t.length; n < r; ++n) t[n] > e && (e = t[n]);
        return e
    }

    var Vn = 1;

    function jn() {
        Object.defineProperty(this, "id", {value: Vn += 2}), this.uuid = re.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }

    jn.prototype = Object.assign(Object.create(t.prototype), {
        constructor: jn,
        isBufferGeometry: !0,
        getIndex: function () {
            return this.index
        },
        setIndex: function (t) {
            Array.isArray(t) ? this.index = new (Hn(t) > 65535 ? Bn : Un)(t, 1) : this.index = t
        },
        addAttribute: function (t, e) {
            return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(e)) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(t, new Cn(arguments[1], arguments[2])))
        },
        getAttribute: function (t) {
            return this.attributes[t]
        },
        removeAttribute: function (t) {
            return delete this.attributes[t], this
        },
        addGroup: function (t, e, n) {
            this.groups.push({start: t, count: e, materialIndex: void 0 !== n ? n : 0})
        },
        clearGroups: function () {
            this.groups = []
        },
        setDrawRange: function (t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        },
        applyMatrix: function (t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
            var n = this.attributes.normal;
            if (void 0 !== n) {
                (new ce).getNormalMatrix(t).applyToBufferAttribute(n), n.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function () {
            var t = new ae;
            return function (e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function () {
            var t = new ae;
            return function (e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function () {
            var t = new ae;
            return function (e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function () {
            var t = new ae;
            return function (e, n, r) {
                return t.makeTranslation(e, n, r), this.applyMatrix(t), this
            }
        }(),
        scale: function () {
            var t = new ae;
            return function (e, n, r) {
                return t.makeScale(e, n, r), this.applyMatrix(t), this
            }
        }(),
        lookAt: function () {
            var t = new Tn;
            return function (e) {
                t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        setFromObject: function (t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var n = new Fn(3 * e.vertices.length, 3), r = new Fn(3 * e.colors.length, 3);
                if (this.addAttribute("position", n.copyVector3sArray(e.vertices)), this.addAttribute("color", r.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var i = new Fn(e.lineDistances.length, 1);
                    this.addAttribute("lineDistance", i.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function (t) {
            for (var e = [], n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.push(i.x, i.y, i.z || 0)
            }
            return this.addAttribute("position", new Fn(e, 3)), this
        },
        updateFromObject: function (t) {
            var e = t.geometry;
            if (t.isMesh) {
                var n = e.__directGeometry;
                if (!0 === e.elementsNeedUpdate && (n = void 0, e.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(e);
                n.verticesNeedUpdate = e.verticesNeedUpdate, n.normalsNeedUpdate = e.normalsNeedUpdate, n.colorsNeedUpdate = e.colorsNeedUpdate, n.uvsNeedUpdate = e.uvsNeedUpdate, n.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = n
            }
            var r;
            return !0 === e.verticesNeedUpdate && (void 0 !== (r = this.attributes.position) && (r.copyVector3sArray(e.vertices), r.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (void 0 !== (r = this.attributes.normal) && (r.copyVector3sArray(e.normals), r.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (void 0 !== (r = this.attributes.color) && (r.copyColorsArray(e.colors), r.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (void 0 !== (r = this.attributes.uv) && (r.copyVector2sArray(e.uvs), r.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (void 0 !== (r = this.attributes.lineDistance) && (r.copyArray(e.lineDistances), r.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
        },
        fromGeometry: function (t) {
            return t.__directGeometry = (new Gn).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function (t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new Cn(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                var n = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new Cn(n, 3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var r = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new Cn(r, 3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var i = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new Cn(i, 2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var a = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new Cn(a, 2).copyVector2sArray(t.uvs2))
            }
            if (t.indices.length > 0) {
                var o = new (Hn(t.indices) > 65535 ? Uint32Array : Uint16Array)(3 * t.indices.length);
                this.setIndex(new Cn(o, 1).copyIndicesArray(t.indices))
            }
            this.groups = t.groups;
            for (var s in t.morphTargets) {
                for (var c = [], h = t.morphTargets[s], u = 0, l = h.length; u < l; u++) {
                    var f = h[u], d = new Fn(3 * f.length, 3);
                    c.push(d.copyVector3sArray(f))
                }
                this.morphAttributes[s] = c
            }
            if (t.skinIndices.length > 0) {
                var p = new Fn(4 * t.skinIndices.length, 4);
                this.addAttribute("skinIndex", p.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var m = new Fn(4 * t.skinWeights.length, 4);
                this.addAttribute("skinWeight", m.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new gn);
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function () {
            var t = new gn, e = new se;
            return function () {
                null === this.boundingSphere && (this.boundingSphere = new vn);
                var n = this.attributes.position;
                if (n) {
                    var r = this.boundingSphere.center;
                    t.setFromBufferAttribute(n), t.getCenter(r);
                    for (var i = 0, a = 0, o = n.count; a < o; a++) e.x = n.getX(a), e.y = n.getY(a), e.z = n.getZ(a), i = Math.max(i, r.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function () {
        },
        computeVertexNormals: function () {
            var t = this.index, e = this.attributes, n = this.groups;
            if (e.position) {
                var r = e.position.array;
                if (void 0 === e.normal) this.addAttribute("normal", new Cn(new Float32Array(r.length), 3)); else for (var i = e.normal.array, a = 0, o = i.length; a < o; a++) i[a] = 0;
                var s, c, h, u = e.normal.array, l = new se, f = new se, d = new se, p = new se, m = new se;
                if (t) {
                    var g = t.array;
                    0 === n.length && this.addGroup(0, g.length);
                    for (var v = 0, y = n.length; v < y; ++v) {
                        var b = n[v], x = b.start;
                        for (a = x, o = x + b.count; a < o; a += 3) s = 3 * g[a + 0], c = 3 * g[a + 1], h = 3 * g[a + 2], l.fromArray(r, s), f.fromArray(r, c), d.fromArray(r, h), p.subVectors(d, f), m.subVectors(l, f), p.cross(m), u[s] += p.x, u[s + 1] += p.y, u[s + 2] += p.z, u[c] += p.x, u[c + 1] += p.y, u[c + 2] += p.z, u[h] += p.x, u[h + 1] += p.y, u[h + 2] += p.z
                    }
                } else for (a = 0, o = r.length; a < o; a += 9) l.fromArray(r, a), f.fromArray(r, a + 3), d.fromArray(r, a + 6), p.subVectors(d, f), m.subVectors(l, f), p.cross(m), u[a] = p.x, u[a + 1] = p.y, u[a + 2] = p.z, u[a + 3] = p.x, u[a + 4] = p.y, u[a + 5] = p.z, u[a + 6] = p.x, u[a + 7] = p.y, u[a + 8] = p.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        },
        merge: function (t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0);
                var n = this.attributes;
                for (var r in n) if (void 0 !== t.attributes[r]) for (var i = n[r].array, a = t.attributes[r], o = a.array, s = 0, c = a.itemSize * e; s < o.length; s++, c++) i[c] = o[s];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: function () {
            var t = new se;
            return function () {
                for (var e = this.attributes.normal, n = 0, r = e.count; n < r; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.normalize(), e.setXYZ(n, t.x, t.y, t.z)
            }
        }(),
        toNonIndexed: function () {
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var t = new jn, e = this.index.array, n = this.attributes;
            for (var r in n) {
                for (var i = n[r], a = i.array, o = i.itemSize, s = new a.constructor(e.length * o), c = 0, h = 0, u = 0, l = e.length; u < l; u++) {
                    c = e[u] * o;
                    for (var f = 0; f < o; f++) s[h++] = a[c++]
                }
                t.addAttribute(r, new Cn(s, o))
            }
            return t
        },
        toJSON: function () {
            var t = {metadata: {version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {attributes: {}};
            var r = this.index;
            if (null !== r) {
                var i = Array.prototype.slice.call(r.array);
                t.data.index = {type: r.array.constructor.name, array: i}
            }
            var a = this.attributes;
            for (var n in a) {
                var o = a[n];
                i = Array.prototype.slice.call(o.array);
                t.data.attributes[n] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: i,
                    normalized: o.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (t.data.boundingSphere = {center: c.center.toArray(), radius: c.radius}), t
        },
        clone: function () {
            return (new jn).copy(this)
        },
        copy: function (t) {
            var e, n, r;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var i = t.index;
            null !== i && this.setIndex(i.clone());
            var a = t.attributes;
            for (e in a) {
                var o = a[e];
                this.addAttribute(e, o.clone())
            }
            var s = t.morphAttributes;
            for (e in s) {
                var c = [], h = s[e];
                for (n = 0, r = h.length; n < r; n++) c.push(h[n].clone());
                this.morphAttributes[e] = c
            }
            var u = t.groups;
            for (n = 0, r = u.length; n < r; n++) {
                var l = u[n];
                this.addGroup(l.start, l.count, l.materialIndex)
            }
            var f = t.boundingBox;
            null !== f && (this.boundingBox = f.clone());
            var d = t.boundingSphere;
            return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    });

    function Wn(t, e, n, r, i, a) {
        Pn.call(this), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: a
        }, this.fromBufferGeometry(new qn(t, e, n, r, i, a)), this.mergeVertices()
    }

    Wn.prototype = Object.create(Pn.prototype), Wn.prototype.constructor = Wn;

    function qn(t, e, n, r, i, a) {
        jn.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: a
        };
        var o = this;
        t = t || 1, e = e || 1, n = n || 1, r = Math.floor(r) || 1, i = Math.floor(i) || 1;
        var s = [], c = [], h = [], u = [], l = 0, f = 0;
        d("z", "y", "x", -1, -1, n, e, t, a = Math.floor(a) || 1, i, 0), d("z", "y", "x", 1, -1, n, e, -t, a, i, 1), d("x", "z", "y", 1, 1, t, n, e, r, a, 2), d("x", "z", "y", 1, -1, t, n, -e, r, a, 3), d("x", "y", "z", 1, -1, t, e, n, r, i, 4), d("x", "y", "z", -1, -1, t, e, -n, r, i, 5), this.setIndex(s), this.addAttribute("position", new Fn(c, 3)), this.addAttribute("normal", new Fn(h, 3)), this.addAttribute("uv", new Fn(u, 2));

        function d(t, e, n, r, i, a, d, p, m, g, v) {
            var y, b, x = a / m, w = d / g, _ = a / 2, M = d / 2, E = p / 2, T = m + 1, S = g + 1, A = 0, L = 0,
                R = new se;
            for (b = 0; b < S; b++) {
                var P = b * w - M;
                for (y = 0; y < T; y++) {
                    var C = y * x - _;
                    R[t] = C * r, R[e] = P * i, R[n] = E, c.push(R.x, R.y, R.z), R[t] = 0, R[e] = 0, R[n] = p > 0 ? 1 : -1, h.push(R.x, R.y, R.z), u.push(y / m), u.push(1 - b / g), A += 1
                }
            }
            for (b = 0; b < g; b++) for (y = 0; y < m; y++) {
                var N = l + y + T * b, O = l + y + T * (b + 1), I = l + (y + 1) + T * (b + 1), D = l + (y + 1) + T * b;
                s.push(N, O, D), s.push(O, I, D), L += 6
            }
            o.addGroup(f, L, v), f += L, l += A
        }
    }

    qn.prototype = Object.create(jn.prototype), qn.prototype.constructor = qn;

    function Xn(t, e, n, r) {
        Pn.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: r
        }, this.fromBufferGeometry(new Yn(t, e, n, r)), this.mergeVertices()
    }

    Xn.prototype = Object.create(Pn.prototype), Xn.prototype.constructor = Xn;

    function Yn(t, e, n, r) {
        jn.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: r
        };
        var i, a, o = (t = t || 1) / 2, s = (e = e || 1) / 2, c = Math.floor(n) || 1, h = Math.floor(r) || 1, u = c + 1,
            l = h + 1, f = t / c, d = e / h, p = [], m = [], g = [], v = [];
        for (a = 0; a < l; a++) {
            var y = a * d - s;
            for (i = 0; i < u; i++) {
                var b = i * f - o;
                m.push(b, -y, 0), g.push(0, 0, 1), v.push(i / c), v.push(1 - a / h)
            }
        }
        for (a = 0; a < h; a++) for (i = 0; i < c; i++) {
            var x = i + u * a, w = i + u * (a + 1), _ = i + 1 + u * (a + 1), M = i + 1 + u * a;
            p.push(x, w, M), p.push(w, _, M)
        }
        this.setIndex(p), this.addAttribute("position", new Fn(m, 3)), this.addAttribute("normal", new Fn(g, 3)), this.addAttribute("uv", new Fn(v, 2))
    }

    Yn.prototype = Object.create(jn.prototype), Yn.prototype.constructor = Yn;

    function Zn(t) {
        dn.call(this), this.type = "MeshBasicMaterial", this.color = new nn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = j, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
    }

    Zn.prototype = Object.create(dn.prototype), Zn.prototype.constructor = Zn, Zn.prototype.isMeshBasicMaterial = !0, Zn.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    };

    function Jn(t) {
        dn.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
    }

    Jn.prototype = Object.create(dn.prototype), Jn.prototype.constructor = Jn, Jn.prototype.isShaderMaterial = !0, Jn.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = an.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, Jn.prototype.toJSON = function (t) {
        var e = dn.prototype.toJSON.call(this, t);
        return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    };

    function Qn(t, e) {
        this.origin = void 0 !== t ? t : new se, this.direction = void 0 !== e ? e : new se
    }

    Object.assign(Qn.prototype, {
        set: function (t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        }, at: function (t, e) {
            return (e || new se).copy(this.direction).multiplyScalar(t).add(this.origin)
        }, lookAt: function (t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
        }, recast: function () {
            var t = new se;
            return function (e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(), closestPointToPoint: function (t, e) {
            var n = e || new se;
            n.subVectors(t, this.origin);
            var r = n.dot(this.direction);
            return r < 0 ? n.copy(this.origin) : n.copy(this.direction).multiplyScalar(r).add(this.origin)
        }, distanceToPoint: function (t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        }, distanceSqToPoint: function () {
            var t = new se;
            return function (e) {
                var n = t.subVectors(e, this.origin).dot(this.direction);
                return n < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(n).add(this.origin), t.distanceToSquared(e))
            }
        }(), distanceSqToSegment: function () {
            var t = new se, e = new se, n = new se;
            return function (r, i, a, o) {
                t.copy(r).add(i).multiplyScalar(.5), e.copy(i).sub(r).normalize(), n.copy(this.origin).sub(t);
                var s, c, h, u, l = .5 * r.distanceTo(i), f = -this.direction.dot(e), d = n.dot(this.direction),
                    p = -n.dot(e), m = n.lengthSq(), g = Math.abs(1 - f * f);
                if (g > 0) if (c = f * d - p, u = l * g, (s = f * p - d) >= 0) if (c >= -u) if (c <= u) {
                    var v = 1 / g;
                    h = (s *= v) * (s + f * (c *= v) + 2 * d) + c * (f * s + c + 2 * p) + m
                } else c = l, h = -(s = Math.max(0, -(f * c + d))) * s + c * (c + 2 * p) + m; else c = -l, h = -(s = Math.max(0, -(f * c + d))) * s + c * (c + 2 * p) + m; else c <= -u ? h = -(s = Math.max(0, -(-f * l + d))) * s + (c = s > 0 ? -l : Math.min(Math.max(-l, -p), l)) * (c + 2 * p) + m : c <= u ? (s = 0, h = (c = Math.min(Math.max(-l, -p), l)) * (c + 2 * p) + m) : h = -(s = Math.max(0, -(f * l + d))) * s + (c = s > 0 ? l : Math.min(Math.max(-l, -p), l)) * (c + 2 * p) + m; else c = f > 0 ? -l : l, h = -(s = Math.max(0, -(f * c + d))) * s + c * (c + 2 * p) + m;
                return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(e).multiplyScalar(c).add(t), h
            }
        }(), intersectSphere: function () {
            var t = new se;
            return function (e, n) {
                t.subVectors(e.center, this.origin);
                var r = t.dot(this.direction), i = t.dot(t) - r * r, a = e.radius * e.radius;
                if (i > a) return null;
                var o = Math.sqrt(a - i), s = r - o, c = r + o;
                return s < 0 && c < 0 ? null : s < 0 ? this.at(c, n) : this.at(s, n)
            }
        }(), intersectsSphere: function (t) {
            return this.distanceToPoint(t.center) <= t.radius
        }, distanceToPlane: function (t) {
            var e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        }, intersectPlane: function (t, e) {
            var n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        }, intersectsPlane: function (t) {
            var e = t.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t.normal.dot(this.direction) * e < 0
        }, intersectBox: function (t, e) {
            var n, r, i, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z,
                l = this.origin;
            return c >= 0 ? (n = (t.min.x - l.x) * c, r = (t.max.x - l.x) * c) : (n = (t.max.x - l.x) * c, r = (t.min.x - l.x) * c), h >= 0 ? (i = (t.min.y - l.y) * h, a = (t.max.y - l.y) * h) : (i = (t.max.y - l.y) * h, a = (t.min.y - l.y) * h), n > a || i > r ? null : ((i > n || n != n) && (n = i), (a < r || r != r) && (r = a), u >= 0 ? (o = (t.min.z - l.z) * u, s = (t.max.z - l.z) * u) : (o = (t.max.z - l.z) * u, s = (t.min.z - l.z) * u), n > s || o > r ? null : ((o > n || n != n) && (n = o), (s < r || r != r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, e)))
        }, intersectsBox: function () {
            var t = new se;
            return function (e) {
                return null !== this.intersectBox(e, t)
            }
        }(), intersectTriangle: function () {
            var t = new se, e = new se, n = new se, r = new se;
            return function (i, a, o, s, c) {
                e.subVectors(a, i), n.subVectors(o, i), r.crossVectors(e, n);
                var h, u = this.direction.dot(r);
                if (u > 0) {
                    if (s) return null;
                    h = 1
                } else {
                    if (!(u < 0)) return null;
                    h = -1, u = -u
                }
                t.subVectors(this.origin, i);
                var l = h * this.direction.dot(n.crossVectors(t, n));
                if (l < 0) return null;
                var f = h * this.direction.dot(e.cross(t));
                if (f < 0) return null;
                if (l + f > u) return null;
                var d = -h * t.dot(r);
                return d < 0 ? null : this.at(d / u, c)
            }
        }(), applyMatrix4: function (t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
        }, equals: function (t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    });

    function Kn(t, e) {
        this.start = void 0 !== t ? t : new se, this.end = void 0 !== e ? e : new se
    }

    Object.assign(Kn.prototype, {
        set: function (t, e) {
            return this.start.copy(t), this.end.copy(e), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        }, getCenter: function (t) {
            return (t || new se).addVectors(this.start, this.end).multiplyScalar(.5)
        }, delta: function (t) {
            return (t || new se).subVectors(this.end, this.start)
        }, distanceSq: function () {
            return this.start.distanceToSquared(this.end)
        }, distance: function () {
            return this.start.distanceTo(this.end)
        }, at: function (t, e) {
            var n = e || new se;
            return this.delta(n).multiplyScalar(t).add(this.start)
        }, closestPointToPointParameter: function () {
            var t = new se, e = new se;
            return function (n, r) {
                t.subVectors(n, this.start), e.subVectors(this.end, this.start);
                var i = e.dot(e), a = e.dot(t) / i;
                return r && (a = re.clamp(a, 0, 1)), a
            }
        }(), closestPointToPoint: function (t, e, n) {
            var r = this.closestPointToPointParameter(t, e), i = n || new se;
            return this.delta(i).multiplyScalar(r).add(this.start)
        }, applyMatrix4: function (t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        }, equals: function (t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    });

    function $n(t, e, n) {
        this.a = void 0 !== t ? t : new se, this.b = void 0 !== e ? e : new se, this.c = void 0 !== n ? n : new se
    }

    Object.assign($n, {
        normal: function () {
            var t = new se;
            return function (e, n, r, i) {
                var a = i || new se;
                a.subVectors(r, n), t.subVectors(e, n), a.cross(t);
                var o = a.lengthSq();
                return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
            }
        }(), barycoordFromPoint: function () {
            var t = new se, e = new se, n = new se;
            return function (r, i, a, o, s) {
                t.subVectors(o, i), e.subVectors(a, i), n.subVectors(r, i);
                var c = t.dot(t), h = t.dot(e), u = t.dot(n), l = e.dot(e), f = e.dot(n), d = c * l - h * h,
                    p = s || new se;
                if (0 === d) return p.set(-2, -1, -1);
                var m = 1 / d, g = (l * u - h * f) * m, v = (c * f - h * u) * m;
                return p.set(1 - g - v, v, g)
            }
        }(), containsPoint: function () {
            var t = new se;
            return function (e, n, r, i) {
                var a = $n.barycoordFromPoint(e, n, r, i, t);
                return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
            }
        }()
    }), Object.assign($n.prototype, {
        set: function (t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
        }, setFromPointsAndIndices: function (t, e, n, r) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        }, area: function () {
            var t = new se, e = new se;
            return function () {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(), midpoint: function (t) {
            return (t || new se).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }, normal: function (t) {
            return $n.normal(this.a, this.b, this.c, t)
        }, plane: function (t) {
            return (t || new yn).setFromCoplanarPoints(this.a, this.b, this.c)
        }, barycoordFromPoint: function (t, e) {
            return $n.barycoordFromPoint(t, this.a, this.b, this.c, e)
        }, containsPoint: function (t) {
            return $n.containsPoint(t, this.a, this.b, this.c)
        }, closestPointToPoint: function () {
            var t = new yn, e = [new Kn, new Kn, new Kn], n = new se, r = new se;
            return function (i, a) {
                var o = a || new se, s = 1 / 0;
                if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(i, n), !0 === this.containsPoint(n)) o.copy(n); else {
                    e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a);
                    for (var c = 0; c < e.length; c++) {
                        e[c].closestPointToPoint(n, !0, r);
                        var h = n.distanceToSquared(r);
                        h < s && (s = h, o.copy(r))
                    }
                }
                return o
            }
        }(), equals: function (t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    });

    function tr(t, e) {
        Tn.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new jn, this.material = void 0 !== e ? e : new Zn({color: 16777215 * Math.random()}), this.drawMode = Wt, this.updateMorphTargets()
    }

    tr.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: tr, isMesh: !0, setDrawMode: function (t) {
            this.drawMode = t
        }, copy: function (t) {
            return Tn.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
        }, updateMorphTargets: function () {
            var t, e, n, r = this.geometry;
            if (r.isBufferGeometry) {
                var i = r.morphAttributes, a = Object.keys(i);
                if (a.length > 0) {
                    var o = i[a[0]];
                    if (void 0 !== o) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) n = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                }
            } else {
                var s = r.morphTargets;
                if (void 0 !== s && s.length > 0) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) n = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
            }
        }, raycast: function () {
            var t = new ae, e = new Qn, n = new vn, r = new se, i = new se, a = new se, o = new se, s = new se,
                c = new se, l = new ie, f = new ie, d = new ie, p = new se, m = new se, g = new se;

            function v(t, e, n, r, i, a, o) {
                return $n.barycoordFromPoint(t, e, n, r, p), i.multiplyScalar(p.x), a.multiplyScalar(p.y), o.multiplyScalar(p.z), i.add(a).add(o), i.clone()
            }

            function y(t, e, n, r, i, a, o, s) {
                if (null === (e.side === h ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, e.side !== u, s))) return null;
                g.copy(s), g.applyMatrix4(t.matrixWorld);
                var c = n.ray.origin.distanceTo(g);
                return c < n.near || c > n.far ? null : {distance: c, point: g.clone(), object: t}
            }

            function b(t, e, n, o, s, c, h, u) {
                r.fromBufferAttribute(o, c), i.fromBufferAttribute(o, h), a.fromBufferAttribute(o, u);
                var p = y(t, t.material, e, n, r, i, a, m);
                return p && (s && (l.fromBufferAttribute(s, c), f.fromBufferAttribute(s, h), d.fromBufferAttribute(s, u), p.uv = v(m, r, i, a, l, f, d)), p.face = new Ln(c, h, u, $n.normal(r, i, a)), p.faceIndex = c), p
            }

            return function (h, u) {
                var p = this.geometry, g = this.material, x = this.matrixWorld;
                if (void 0 !== g && (null === p.boundingSphere && p.computeBoundingSphere(), n.copy(p.boundingSphere), n.applyMatrix4(x), !1 !== h.ray.intersectsSphere(n) && (t.getInverse(x), e.copy(h.ray).applyMatrix4(t), null === p.boundingBox || !1 !== e.intersectsBox(p.boundingBox)))) {
                    var w;
                    if (p.isBufferGeometry) {
                        var _, M, E, T, S, A = p.index, L = p.attributes.position, R = p.attributes.uv;
                        if (null !== A) for (T = 0, S = A.count; T < S; T += 3) _ = A.getX(T), M = A.getX(T + 1), E = A.getX(T + 2), (w = b(this, h, e, L, R, _, M, E)) && (w.faceIndex = Math.floor(T / 3), u.push(w)); else if (void 0 !== L) for (T = 0, S = L.count; T < S; T += 3) (w = b(this, h, e, L, R, _ = T, M = T + 1, E = T + 2)) && (w.index = _, u.push(w))
                    } else if (p.isGeometry) {
                        var P, C, N, O, I = Array.isArray(g), D = p.vertices, U = p.faces, z = p.faceVertexUvs[0];
                        z.length > 0 && (O = z);
                        for (var B = 0, F = U.length; B < F; B++) {
                            var k = U[B], G = I ? g[k.materialIndex] : g;
                            if (void 0 !== G) {
                                if (P = D[k.a], C = D[k.b], N = D[k.c], !0 === G.morphTargets) {
                                    var H = p.morphTargets, V = this.morphTargetInfluences;
                                    r.set(0, 0, 0), i.set(0, 0, 0), a.set(0, 0, 0);
                                    for (var j = 0, W = H.length; j < W; j++) {
                                        var q = V[j];
                                        if (0 !== q) {
                                            var X = H[j].vertices;
                                            r.addScaledVector(o.subVectors(X[k.a], P), q), i.addScaledVector(s.subVectors(X[k.b], C), q), a.addScaledVector(c.subVectors(X[k.c], N), q)
                                        }
                                    }
                                    r.add(P), i.add(C), a.add(N), P = r, C = i, N = a
                                }
                                if (w = y(this, G, h, e, P, C, N, m)) {
                                    if (O && O[B]) {
                                        var Y = O[B];
                                        l.copy(Y[0]), f.copy(Y[1]), d.copy(Y[2]), w.uv = v(m, P, C, N, l, f, d)
                                    }
                                    w.face = k, w.faceIndex = B, u.push(w)
                                }
                            }
                        }
                    }
                }
            }
        }(), clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });

    function er(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }

    function nr(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }

    function rr() {
        var t = {};
        return {
            get: function (e, n) {
                var r = e.id + "," + n.id, i = t[r];
                return void 0 === i && (i = new function () {
                    var t = [], e = 0, n = [], r = [];
                    return {
                        opaque: n, transparent: r, init: function () {
                            e = 0, n.length = 0, r.length = 0
                        }, push: function (i, a, o, s, c) {
                            var h = t[e];
                            void 0 === h ? (h = {
                                id: i.id,
                                object: i,
                                geometry: a,
                                material: o,
                                program: o.program,
                                renderOrder: i.renderOrder,
                                z: s,
                                group: c
                            }, t[e] = h) : (h.id = i.id, h.object = i, h.geometry = a, h.material = o, h.program = o.program, h.renderOrder = i.renderOrder, h.z = s, h.group = c), (!0 === o.transparent ? r : n).push(h), e++
                        }, sort: function () {
                            n.length > 1 && n.sort(er), r.length > 1 && r.sort(nr)
                        }
                    }
                }, t[r] = i), i
            }, dispose: function () {
                t = {}
            }
        }
    }

    function ir(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }

    function ar() {
        var t = new function () {
            var t = {};
            return {
                get: function (e) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    var n;
                    switch (e.type) {
                        case"DirectionalLight":
                            n = {
                                direction: new se,
                                color: new nn,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new ie
                            };
                            break;
                        case"SpotLight":
                            n = {
                                position: new se,
                                direction: new se,
                                color: new nn,
                                distance: 0,
                                coneCos: 0,
                                penumbraCos: 0,
                                decay: 0,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new ie
                            };
                            break;
                        case"PointLight":
                            n = {
                                position: new se,
                                color: new nn,
                                distance: 0,
                                decay: 0,
                                shadow: !1,
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new ie,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                            break;
                        case"HemisphereLight":
                            n = {direction: new se, skyColor: new nn, groundColor: new nn};
                            break;
                        case"RectAreaLight":
                            n = {color: new nn, position: new se, halfWidth: new se, halfHeight: new se}
                    }
                    return t[e.id] = n, n
                }
            }
        }, e = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        }, n = new se, r = new ae, i = new ae;
        return {
            setup: function (a, o, s) {
                for (var c = 0, h = 0, u = 0, l = 0, f = 0, d = 0, p = 0, m = 0, g = s.matrixWorldInverse, v = 0, y = a.length; v < y; v++) {
                    var b = a[v], x = b.color, w = b.intensity, _ = b.distance,
                        M = b.shadow && b.shadow.map ? b.shadow.map.texture : null;
                    if (b.isAmbientLight) c += x.r * w, h += x.g * w, u += x.b * w; else if (b.isDirectionalLight) {
                        if ((T = t.get(b)).color.copy(b.color).multiplyScalar(b.intensity), T.direction.setFromMatrixPosition(b.matrixWorld), n.setFromMatrixPosition(b.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(g), T.shadow = b.castShadow, b.castShadow) {
                            var E = b.shadow;
                            T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize
                        }
                        e.directionalShadowMap[l] = M, e.directionalShadowMatrix[l] = b.shadow.matrix, e.directional[l] = T, l++
                    } else if (b.isSpotLight) (T = t.get(b)).position.setFromMatrixPosition(b.matrixWorld), T.position.applyMatrix4(g), T.color.copy(x).multiplyScalar(w), T.distance = _, T.direction.setFromMatrixPosition(b.matrixWorld), n.setFromMatrixPosition(b.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(g), T.coneCos = Math.cos(b.angle), T.penumbraCos = Math.cos(b.angle * (1 - b.penumbra)), T.decay = 0 === b.distance ? 0 : b.decay, T.shadow = b.castShadow, b.castShadow && (E = b.shadow, T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize), e.spotShadowMap[d] = M, e.spotShadowMatrix[d] = b.shadow.matrix, e.spot[d] = T, d++; else if (b.isRectAreaLight) (T = t.get(b)).color.copy(x).multiplyScalar(w / (b.width * b.height)), T.position.setFromMatrixPosition(b.matrixWorld), T.position.applyMatrix4(g), i.identity(), r.copy(b.matrixWorld), r.premultiply(g), i.extractRotation(r), T.halfWidth.set(.5 * b.width, 0, 0), T.halfHeight.set(0, .5 * b.height, 0), T.halfWidth.applyMatrix4(i), T.halfHeight.applyMatrix4(i), e.rectArea[p] = T, p++; else if (b.isPointLight) (T = t.get(b)).position.setFromMatrixPosition(b.matrixWorld), T.position.applyMatrix4(g), T.color.copy(b.color).multiplyScalar(b.intensity), T.distance = b.distance, T.decay = 0 === b.distance ? 0 : b.decay, T.shadow = b.castShadow, b.castShadow && (E = b.shadow, T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize, T.shadowCameraNear = E.camera.near, T.shadowCameraFar = E.camera.far), e.pointShadowMap[f] = M, e.pointShadowMatrix[f] = b.shadow.matrix, e.point[f] = T, f++; else if (b.isHemisphereLight) {
                        var T;
                        (T = t.get(b)).direction.setFromMatrixPosition(b.matrixWorld), T.direction.transformDirection(g), T.direction.normalize(), T.skyColor.copy(b.color).multiplyScalar(w), T.groundColor.copy(b.groundColor).multiplyScalar(w), e.hemi[m] = T, m++
                    }
                }
                e.ambient[0] = c, e.ambient[1] = h, e.ambient[2] = u, e.directional.length = l, e.spot.length = d, e.rectArea.length = p, e.point.length = f, e.hemi.length = m, e.hash = l + "," + f + "," + d + "," + p + "," + m + "," + o.length
            }, state: e
        }
    }

    function or(t, e, n) {
        var r = t.createShader(e);
        return t.shaderSource(r, n), t.compileShader(r), !1 === t.getShaderParameter(r, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(r) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(r), function (t) {
            for (var e = t.split("\n"), n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
            return e.join("\n")
        }(n)), r
    }

    var sr = 0;

    function cr(t) {
        switch (t) {
            case Yt:
                return ["Linear", "( value )"];
            case Zt:
                return ["sRGB", "( value )"];
            case Qt:
                return ["RGBE", "( value )"];
            case Kt:
                return ["RGBM", "( value, 7.0 )"];
            case $t:
                return ["RGBM", "( value, 16.0 )"];
            case te:
                return ["RGBD", "( value, 256.0 )"];
            case Jt:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + t)
        }
    }

    function hr(t, e) {
        var n = cr(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }

    function ur(t) {
        return "" !== t
    }

    function lr(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }

    function fr(t) {
        return t.replace(/^[ \t]*#include +<([\w\d.]+)>/gm, function (t, e) {
            var n = on[e];
            if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
            return fr(n)
        })
    }

    function dr(t) {
        return t.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function (t, e, n, r) {
            for (var i = "", a = parseInt(e); a < parseInt(n); a++) i += r.replace(/\[ i \]/g, "[ " + a + " ]");
            return i
        })
    }

    function pr(t, e, n, r, i, a) {
        var c = t.context, h = r.defines, u = i.vertexShader, l = i.fragmentShader, f = "SHADOWMAP_TYPE_BASIC";
        a.shadowMapType === o ? f = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === s && (f = "SHADOWMAP_TYPE_PCF_SOFT");
        var d = "ENVMAP_TYPE_CUBE", p = "ENVMAP_MODE_REFLECTION", m = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (r.envMap.mapping) {
                case K:
                case $:
                    d = "ENVMAP_TYPE_CUBE";
                    break;
                case rt:
                case it:
                    d = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case tt:
                case et:
                    d = "ENVMAP_TYPE_EQUIREC";
                    break;
                case nt:
                    d = "ENVMAP_TYPE_SPHERE"
            }
            switch (r.envMap.mapping) {
                case $:
                case et:
                    p = "ENVMAP_MODE_REFRACTION"
            }
            switch (r.combine) {
                case j:
                    m = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case W:
                    m = "ENVMAP_BLENDING_MIX";
                    break;
                case q:
                    m = "ENVMAP_BLENDING_ADD"
            }
        }
        var g, v, y, b, x, w = t.gammaFactor > 0 ? t.gammaFactor : 1,
            _ = (g = r.extensions, v = a, y = e, [(g = g || {}).derivatives || v.envMapCubeUV || v.bumpMap || v.normalMap || v.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (g.fragDepth || v.logarithmicDepthBuffer) && y.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", g.drawBuffers && y.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (g.shaderTextureLOD || v.envMap) && y.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ur).join("\n")),
            M = function (t) {
                var e = [];
                for (var n in t) {
                    var r = t[n];
                    !1 !== r && e.push("#define " + n + " " + r)
                }
                return e.join("\n")
            }(h), E = c.createProgram();
        r.isRawShaderMaterial ? ((b = [M].filter(ur).join("\n")).length > 0 && (b += "\n"), (x = [_, M].filter(ur).join("\n")).length > 0 && (x += "\n")) : (b = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, M, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + w, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes, a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + f : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ur).join("\n"), x = [_, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, M, a.alphaTest ? "#define ALPHATEST " + a.alphaTest : "", "#define GAMMA_FACTOR " + w, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + m : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (a.numClippingPlanes - a.numClipIntersection), a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + f : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && e.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== X ? "#define TONE_MAPPING" : "", a.toneMapping !== X ? on.tonemapping_pars_fragment : "", a.toneMapping !== X ? function (t, e) {
            var n;
            switch (e) {
                case Y:
                    n = "Linear";
                    break;
                case Z:
                    n = "Reinhard";
                    break;
                case J:
                    n = "Uncharted2";
                    break;
                case Q:
                    n = "OptimizedCineon";
                    break;
                default:
                    throw new Error("unsupported toneMapping: " + e)
            }
            return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? on.encodings_pars_fragment : "", a.mapEncoding ? hr("mapTexelToLinear", a.mapEncoding) : "", a.envMapEncoding ? hr("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? hr("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? function (t, e) {
            var n = cr(e);
            return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
        }("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "", "\n"].filter(ur).join("\n")), u = lr(u = fr(u), a), l = lr(l = fr(l), a), r.isShaderMaterial || (u = dr(u), l = dr(l));
        var T = b + u, S = x + l, A = or(c, c.VERTEX_SHADER, T), L = or(c, c.FRAGMENT_SHADER, S);
        c.attachShader(E, A), c.attachShader(E, L), void 0 !== r.index0AttributeName ? c.bindAttribLocation(E, 0, r.index0AttributeName) : !0 === a.morphTargets && c.bindAttribLocation(E, 0, "position"), c.linkProgram(E);
        var R = c.getProgramInfoLog(E), P = c.getShaderInfoLog(A), C = c.getShaderInfoLog(L), N = !0, O = !0;
        !1 === c.getProgramParameter(E, c.LINK_STATUS) ? (N = !1, console.error("THREE.WebGLProgram: shader error: ", c.getError(), "gl.VALIDATE_STATUS", c.getProgramParameter(E, c.VALIDATE_STATUS), "gl.getProgramInfoLog", R, P, C)) : "" !== R ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", R) : "" !== P && "" !== C || (O = !1), O && (this.diagnostics = {
            runnable: N,
            material: r,
            programLog: R,
            vertexShader: {log: P, prefix: b},
            fragmentShader: {log: C, prefix: x}
        }), c.deleteShader(A), c.deleteShader(L);
        var I;
        this.getUniforms = function () {
            return void 0 === I && (I = new tn(c, E, t)), I
        };
        var D;
        return this.getAttributes = function () {
            return void 0 === D && (D = function (t, e) {
                for (var n = {}, r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), i = 0; i < r; i++) {
                    var a = t.getActiveAttrib(e, i).name;
                    n[a] = t.getAttribLocation(e, a)
                }
                return n
            }(c, E)), D
        }, this.destroy = function () {
            c.deleteProgram(E), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            }, attributes: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.id = sr++, this.code = n, this.usedTimes = 1, this.program = E, this.vertexShader = A, this.fragmentShader = L, this
    }

    function mr(t, e, n) {
        var r = [], i = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow"
            },
            a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

        function o(t, e) {
            var n;
            return t ? t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = t.texture.encoding) : n = Yt, n === Yt && e && (n = Jt), n
        }

        this.getParameters = function (e, r, a, s, c, l, f) {
            var d = i[e.type], p = f.isSkinnedMesh ? function (t) {
                var e = t.skeleton.bones;
                if (n.floatVertexTextures) return 1024;
                var r = n.maxVertexUniforms, i = Math.floor((r - 20) / 4), a = Math.min(i, e.length);
                return a < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + a + "."), 0) : a
            }(f) : 0, m = n.precision;
            null !== e.precision && (m = n.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", m, "instead.");
            var g = t.getRenderTarget();
            return {
                shaderID: d,
                precision: m,
                supportsVertexTextures: n.vertexTextures,
                outputEncoding: o(g ? g.texture : null, t.gammaOutput),
                map: !!e.map,
                mapEncoding: o(e.map, t.gammaInput),
                envMap: !!e.envMap,
                envMapMode: e.envMap && e.envMap.mapping,
                envMapEncoding: o(e.envMap, t.gammaInput),
                envMapCubeUV: !!e.envMap && (e.envMap.mapping === rt || e.envMap.mapping === it),
                lightMap: !!e.lightMap,
                aoMap: !!e.aoMap,
                emissiveMap: !!e.emissiveMap,
                emissiveMapEncoding: o(e.emissiveMap, t.gammaInput),
                bumpMap: !!e.bumpMap,
                normalMap: !!e.normalMap,
                displacementMap: !!e.displacementMap,
                roughnessMap: !!e.roughnessMap,
                metalnessMap: !!e.metalnessMap,
                specularMap: !!e.specularMap,
                alphaMap: !!e.alphaMap,
                gradientMap: !!e.gradientMap,
                combine: e.combine,
                vertexColors: e.vertexColors,
                fog: !!s,
                useFog: e.fog,
                fogExp: s && s.isFogExp2,
                flatShading: e.flatShading,
                sizeAttenuation: e.sizeAttenuation,
                logarithmicDepthBuffer: n.logarithmicDepthBuffer,
                skinning: e.skinning && p > 0,
                maxBones: p,
                useVertexTexture: n.floatVertexTextures,
                morphTargets: e.morphTargets,
                morphNormals: e.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: r.directional.length,
                numPointLights: r.point.length,
                numSpotLights: r.spot.length,
                numRectAreaLights: r.rectArea.length,
                numHemiLights: r.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: l,
                dithering: e.dithering,
                shadowMapEnabled: t.shadowMap.enabled && f.receiveShadow && a.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: e.premultipliedAlpha,
                alphaTest: e.alphaTest,
                doubleSided: e.side === u,
                flipSided: e.side === h,
                depthPacking: void 0 !== e.depthPacking && e.depthPacking
            }
        }, this.getProgramCode = function (e, n) {
            var r = [];
            if (n.shaderID ? r.push(n.shaderID) : (r.push(e.fragmentShader), r.push(e.vertexShader)), void 0 !== e.defines) for (var i in e.defines) r.push(i), r.push(e.defines[i]);
            for (var o = 0; o < a.length; o++) r.push(n[a[o]]);
            return r.push(e.onBeforeCompile.toString()), r.push(t.gammaOutput), r.join()
        }, this.acquireProgram = function (n, i, a, o) {
            for (var s, c = 0, h = r.length; c < h; c++) {
                var u = r[c];
                if (u.code === o) {
                    ++(s = u).usedTimes;
                    break
                }
            }
            return void 0 === s && (s = new pr(t, e, o, n, i, a), r.push(s)), s
        }, this.releaseProgram = function (t) {
            if (0 == --t.usedTimes) {
                var e = r.indexOf(t);
                r[e] = r[r.length - 1], r.pop(), t.destroy()
            }
        }, this.programs = r
    }

    function gr(t, e, n, r, i, a, o) {
        var s = "undefined" != typeof WebGL2RenderingContext && t instanceof window.WebGL2RenderingContext, c = {};

        function h(t, e) {
            if (t.width > e || t.height > e) {
                var n = e / Math.max(t.width, t.height),
                    r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                r.width = Math.floor(t.width * n), r.height = Math.floor(t.height * n);
                return r.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + r.width + "x" + r.height, t), r
            }
            return t
        }

        function u(t) {
            return re.isPowerOfTwo(t.width) && re.isPowerOfTwo(t.height)
        }

        function l(t, e) {
            return t.generateMipmaps && e && t.minFilter !== ct && t.minFilter !== lt
        }

        function f(e) {
            return e === ct || e === ht || e === ut ? t.NEAREST : t.LINEAR
        }

        function d(e) {
            var n = e.target;
            n.removeEventListener("dispose", d), function (e) {
                var n = r.get(e);
                if (e.image && n.__image__webglTextureCube) t.deleteTexture(n.__image__webglTextureCube); else {
                    if (void 0 === n.__webglInit) return;
                    t.deleteTexture(n.__webglTexture)
                }
                r.remove(e)
            }(n), n.isVideoTexture && delete c[n.id], o.textures--
        }

        function p(e) {
            var n = e.target;
            n.removeEventListener("dispose", p), function (e) {
                var n = r.get(e), i = r.get(e.texture);
                if (!e) return;
                void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLRenderTargetCube) for (var a = 0; a < 6; a++) t.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[a]); else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                r.remove(e.texture), r.remove(e)
            }(n), o.textures--
        }

        function m(e, f) {
            var p = r.get(e);
            if (e.version > 0 && p.__version !== e.version) {
                var m = e.image;
                if (void 0 === m) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e); else {
                    if (!1 !== m.complete) return void function (e, r, f) {
                        void 0 === e.__webglInit && (e.__webglInit = !0, r.addEventListener("dispose", d), e.__webglTexture = t.createTexture(), r.isVideoTexture && (c[r.id] = r), o.textures++);
                        n.activeTexture(t.TEXTURE0 + f), n.bindTexture(t.TEXTURE_2D, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment);
                        var p = h(r.image, i.maxTextureSize);
                        m = r, (m.wrapS !== ot || m.wrapT !== ot || m.minFilter !== ct && m.minFilter !== lt) && !1 === u(p) && (p = function (t) {
                            if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
                                var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                                return e.width = re.floorPowerOfTwo(t.width), e.height = re.floorPowerOfTwo(t.height), e.getContext("2d").drawImage(t, 0, 0, e.width, e.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + e.width + "x" + e.height, t), e
                            }
                            return t
                        }(p));
                        var m;
                        var v = u(p), y = a.convert(r.format), b = a.convert(r.type);
                        g(t.TEXTURE_2D, r, v);
                        var x, w = r.mipmaps;
                        if (r.isDepthTexture) {
                            var _ = t.DEPTH_COMPONENT;
                            if (r.type === xt) {
                                if (!s) throw new Error("Float Depth Texture only supported in WebGL2.0");
                                _ = t.DEPTH_COMPONENT32F
                            } else s && (_ = t.DEPTH_COMPONENT16);
                            r.format === Nt && _ === t.DEPTH_COMPONENT && r.type !== vt && r.type !== bt && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = vt, b = a.convert(r.type)), r.format === Ot && (_ = t.DEPTH_STENCIL, r.type !== Tt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = Tt, b = a.convert(r.type))), n.texImage2D(t.TEXTURE_2D, 0, _, p.width, p.height, 0, y, b, null)
                        } else if (r.isDataTexture) if (w.length > 0 && v) {
                            for (var M = 0, E = w.length; M < E; M++) x = w[M], n.texImage2D(t.TEXTURE_2D, M, y, x.width, x.height, 0, y, b, x.data);
                            r.generateMipmaps = !1
                        } else n.texImage2D(t.TEXTURE_2D, 0, y, p.width, p.height, 0, y, b, p.data); else if (r.isCompressedTexture) for (var M = 0, E = w.length; M < E; M++) x = w[M], r.format !== Lt && r.format !== At ? n.getCompressedTextureFormats().indexOf(y) > -1 ? n.compressedTexImage2D(t.TEXTURE_2D, M, y, x.width, x.height, 0, x.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(t.TEXTURE_2D, M, y, x.width, x.height, 0, y, b, x.data); else if (w.length > 0 && v) {
                            for (var M = 0, E = w.length; M < E; M++) x = w[M], n.texImage2D(t.TEXTURE_2D, M, y, y, b, x);
                            r.generateMipmaps = !1
                        } else n.texImage2D(t.TEXTURE_2D, 0, y, y, b, p);
                        l(r, v) && t.generateMipmap(t.TEXTURE_2D);
                        e.__version = r.version, r.onUpdate && r.onUpdate(r)
                    }(p, e, f);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
                }
            }
            n.activeTexture(t.TEXTURE0 + f), n.bindTexture(t.TEXTURE_2D, p.__webglTexture)
        }

        function g(n, o, s) {
            var c;
            if (s ? (t.texParameteri(n, t.TEXTURE_WRAP_S, a.convert(o.wrapS)), t.texParameteri(n, t.TEXTURE_WRAP_T, a.convert(o.wrapT)), t.texParameteri(n, t.TEXTURE_MAG_FILTER, a.convert(o.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, a.convert(o.minFilter))) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), o.wrapS === ot && o.wrapT === ot || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", o), t.texParameteri(n, t.TEXTURE_MAG_FILTER, f(o.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, f(o.minFilter)), o.minFilter !== ct && o.minFilter !== lt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", o)), c = e.get("EXT_texture_filter_anisotropic")) {
                if (o.type === xt && null === e.get("OES_texture_float_linear")) return;
                if (o.type === wt && null === e.get("OES_texture_half_float_linear")) return;
                (o.anisotropy > 1 || r.get(o).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, i.getMaxAnisotropy())), r.get(o).__currentAnisotropy = o.anisotropy)
            }
        }

        function v(e, i, o, s) {
            var c = a.convert(i.texture.format), h = a.convert(i.texture.type);
            n.texImage2D(s, 0, c, i.width, i.height, 0, c, h, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, o, s, r.get(i.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function y(e, n) {
            t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : n.depthBuffer && n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, n.width, n.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
        }

        function b(e) {
            var n = r.get(e), i = !0 === e.isWebGLRenderTargetCube;
            if (e.depthTexture) {
                if (i) throw new Error("target.depthTexture not supported in Cube render targets");
                !function (e, n) {
                    if (n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
                    if (t.bindFramebuffer(t.FRAMEBUFFER, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), m(n.depthTexture, 0);
                    var i = r.get(n.depthTexture).__webglTexture;
                    if (n.depthTexture.format === Nt) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, i, 0); else {
                        if (n.depthTexture.format !== Ot) throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, i, 0)
                    }
                }(n.__webglFramebuffer, e)
            } else if (i) {
                n.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++) t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = t.createRenderbuffer(), y(n.__webglDepthbuffer[a], e)
            } else t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), y(n.__webglDepthbuffer, e);
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        this.setTexture2D = m, this.setTextureCube = function (e, s) {
            var c = r.get(e);
            if (6 === e.image.length) if (e.version > 0 && c.__version !== e.version) {
                c.__image__webglTextureCube || (e.addEventListener("dispose", d), c.__image__webglTextureCube = t.createTexture(), o.textures++), n.activeTexture(t.TEXTURE0 + s), n.bindTexture(t.TEXTURE_CUBE_MAP, c.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                for (var f = e && e.isCompressedTexture, p = e.image[0] && e.image[0].isDataTexture, m = [], v = 0; v < 6; v++) m[v] = f || p ? p ? e.image[v].image : e.image[v] : h(e.image[v], i.maxCubemapSize);
                var y = u(m[0]), b = a.convert(e.format), x = a.convert(e.type);
                for (g(t.TEXTURE_CUBE_MAP, e, y), v = 0; v < 6; v++) if (f) for (var w, _ = m[v].mipmaps, M = 0, E = _.length; M < E; M++) w = _[M], e.format !== Lt && e.format !== At ? n.getCompressedTextureFormats().indexOf(b) > -1 ? n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, M, b, w.width, w.height, 0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, M, b, w.width, w.height, 0, b, x, w.data); else p ? n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, b, m[v].width, m[v].height, 0, b, x, m[v].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, b, b, x, m[v]);
                l(e, y) && t.generateMipmap(t.TEXTURE_CUBE_MAP), c.__version = e.version, e.onUpdate && e.onUpdate(e)
            } else n.activeTexture(t.TEXTURE0 + s), n.bindTexture(t.TEXTURE_CUBE_MAP, c.__image__webglTextureCube)
        }, this.setTextureCubeDynamic = function (e, i) {
            n.activeTexture(t.TEXTURE0 + i), n.bindTexture(t.TEXTURE_CUBE_MAP, r.get(e).__webglTexture)
        }, this.setupRenderTarget = function (e) {
            var i = r.get(e), a = r.get(e.texture);
            e.addEventListener("dispose", p), a.__webglTexture = t.createTexture(), o.textures++;
            var s = !0 === e.isWebGLRenderTargetCube, c = u(e);
            if (s) {
                i.__webglFramebuffer = [];
                for (var h = 0; h < 6; h++) i.__webglFramebuffer[h] = t.createFramebuffer()
            } else i.__webglFramebuffer = t.createFramebuffer();
            if (s) {
                for (n.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), g(t.TEXTURE_CUBE_MAP, e.texture, c), h = 0; h < 6; h++) v(i.__webglFramebuffer[h], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + h);
                l(e.texture, c) && t.generateMipmap(t.TEXTURE_CUBE_MAP), n.bindTexture(t.TEXTURE_CUBE_MAP, null)
            } else n.bindTexture(t.TEXTURE_2D, a.__webglTexture), g(t.TEXTURE_2D, e.texture, c), v(i.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), l(e.texture, c) && t.generateMipmap(t.TEXTURE_2D), n.bindTexture(t.TEXTURE_2D, null);
            e.depthBuffer && b(e)
        }, this.updateRenderTargetMipmap = function (e) {
            var i = e.texture;
            if (l(i, u(e))) {
                var a = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D, o = r.get(i).__webglTexture;
                n.bindTexture(a, o), t.generateMipmap(a), n.bindTexture(a, null)
            }
        }, this.updateVideoTextures = function () {
            for (var t in c) c[t].update()
        }
    }

    function vr(t, e, n, r) {
        Sn.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== r ? r : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    vr.prototype = Object.assign(Object.create(Sn.prototype), {
        constructor: vr,
        isPerspectiveCamera: !0,
        copy: function (t, e) {
            return Sn.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        },
        setFocalLength: function (t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * re.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
        },
        getFocalLength: function () {
            var t = Math.tan(.5 * re.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function () {
            return 2 * re.RAD2DEG * Math.atan(Math.tan(.5 * re.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function () {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function () {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function (t, e, n, r, i, a) {
            this.aspect = t / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = this.near, e = t * Math.tan(.5 * re.DEG2RAD * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n,
                i = -.5 * r, a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth, s = a.fullHeight;
                i += a.offsetX * r / o, e -= a.offsetY * n / s, r *= a.width / o, n *= a.height / s
            }
            var c = this.filmOffset;
            0 !== c && (i += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, e, e - n, t, this.far)
        },
        toJSON: function (t) {
            var e = Tn.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    });

    function yr(t) {
        vr.call(this), this.cameras = t || []
    }

    yr.prototype = Object.assign(Object.create(vr.prototype), {constructor: yr, isArrayCamera: !0});

    function br(t) {
        var e = this, n = null, r = null, i = null;
        "undefined" != typeof window && "VRFrameData" in window && (r = new window.VRFrameData);
        var a = new ae, o = new vr;
        o.bounds = new le(0, 0, .5, 1), o.layers.enable(1);
        var s = new vr;
        s.bounds = new le(.5, 0, .5, 1), s.layers.enable(2);
        var c = new yr([o, s]);
        c.layers.enable(1), c.layers.enable(2);
        var h, u;

        function l() {
            if (null !== n && n.isPresenting) {
                var r = n.getEyeParameters("left"), i = r.renderWidth, a = r.renderHeight;
                u = t.getPixelRatio(), h = t.getSize(), t.setDrawingBufferSize(2 * i, a, 1)
            } else e.enabled && t.setDrawingBufferSize(h.width, h.height, u)
        }

        "undefined" != typeof window && window.addEventListener("vrdisplaypresentchange", l, !1), this.enabled = !1, this.getDevice = function () {
            return n
        }, this.setDevice = function (t) {
            void 0 !== t && (n = t)
        }, this.setPoseTarget = function (t) {
            void 0 !== t && (i = t)
        }, this.getCamera = function (t) {
            if (null === n) return t;
            n.depthNear = t.near, n.depthFar = t.far, n.getFrameData(r);
            var e = r.pose, h = null !== i ? i : t;
            if (null !== e.position ? h.position.fromArray(e.position) : h.position.set(0, 0, 0), null !== e.orientation && h.quaternion.fromArray(e.orientation), h.updateMatrixWorld(), !1 === n.isPresenting) return t;
            o.near = t.near, s.near = t.near, o.far = t.far, s.far = t.far, c.matrixWorld.copy(t.matrixWorld), c.matrixWorldInverse.copy(t.matrixWorldInverse), o.matrixWorldInverse.fromArray(r.leftViewMatrix), s.matrixWorldInverse.fromArray(r.rightViewMatrix);
            var u = h.parent;
            null !== u && (a.getInverse(u.matrixWorld), o.matrixWorldInverse.multiply(a), s.matrixWorldInverse.multiply(a)), o.matrixWorld.getInverse(o.matrixWorldInverse), s.matrixWorld.getInverse(s.matrixWorldInverse), o.projectionMatrix.fromArray(r.leftProjectionMatrix), s.projectionMatrix.fromArray(r.rightProjectionMatrix), c.projectionMatrix.copy(o.projectionMatrix);
            var l = n.getLayers();
            if (l.length) {
                var f = l[0];
                null !== f.leftBounds && 4 === f.leftBounds.length && o.bounds.fromArray(f.leftBounds), null !== f.rightBounds && 4 === f.rightBounds.length && s.bounds.fromArray(f.rightBounds)
            }
            return c
        }, this.submitFrame = function () {
            n && n.isPresenting && n.submitFrame()
        }, this.dispose = function () {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", l)
        }
    }

    function xr(t, e) {
        return {
            convert: function (n) {
                var r;
                if (n === at) return t.REPEAT;
                if (n === ot) return t.CLAMP_TO_EDGE;
                if (n === st) return t.MIRRORED_REPEAT;
                if (n === ct) return t.NEAREST;
                if (n === ht) return t.NEAREST_MIPMAP_NEAREST;
                if (n === ut) return t.NEAREST_MIPMAP_LINEAR;
                if (n === lt) return t.LINEAR;
                if (n === ft) return t.LINEAR_MIPMAP_NEAREST;
                if (n === dt) return t.LINEAR_MIPMAP_LINEAR;
                if (n === pt) return t.UNSIGNED_BYTE;
                if (n === _t) return t.UNSIGNED_SHORT_4_4_4_4;
                if (n === Mt) return t.UNSIGNED_SHORT_5_5_5_1;
                if (n === Et) return t.UNSIGNED_SHORT_5_6_5;
                if (n === mt) return t.BYTE;
                if (n === gt) return t.SHORT;
                if (n === vt) return t.UNSIGNED_SHORT;
                if (n === yt) return t.INT;
                if (n === bt) return t.UNSIGNED_INT;
                if (n === xt) return t.FLOAT;
                if (n === wt && null !== (r = e.get("OES_texture_half_float"))) return r.HALF_FLOAT_OES;
                if (n === St) return t.ALPHA;
                if (n === At) return t.RGB;
                if (n === Lt) return t.RGBA;
                if (n === Rt) return t.LUMINANCE;
                if (n === Pt) return t.LUMINANCE_ALPHA;
                if (n === Nt) return t.DEPTH_COMPONENT;
                if (n === Ot) return t.DEPTH_STENCIL;
                if (n === x) return t.FUNC_ADD;
                if (n === w) return t.FUNC_SUBTRACT;
                if (n === _) return t.FUNC_REVERSE_SUBTRACT;
                if (n === T) return t.ZERO;
                if (n === S) return t.ONE;
                if (n === A) return t.SRC_COLOR;
                if (n === L) return t.ONE_MINUS_SRC_COLOR;
                if (n === R) return t.SRC_ALPHA;
                if (n === P) return t.ONE_MINUS_SRC_ALPHA;
                if (n === C) return t.DST_ALPHA;
                if (n === N) return t.ONE_MINUS_DST_ALPHA;
                if (n === O) return t.DST_COLOR;
                if (n === I) return t.ONE_MINUS_DST_COLOR;
                if (n === D) return t.SRC_ALPHA_SATURATE;
                if ((n === It || n === Dt || n === Ut || n === zt) && null !== (r = e.get("WEBGL_compressed_texture_s3tc"))) {
                    if (n === It) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (n === Dt) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (n === Ut) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (n === zt) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((n === Bt || n === Ft || n === kt || n === Gt) && null !== (r = e.get("WEBGL_compressed_texture_pvrtc"))) {
                    if (n === Bt) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (n === Ft) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (n === kt) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (n === Gt) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (n === Ht && null !== (r = e.get("WEBGL_compressed_texture_etc1"))) return r.COMPRESSED_RGB_ETC1_WEBGL;
                if ((n === M || n === E) && null !== (r = e.get("EXT_blend_minmax"))) {
                    if (n === M) return r.MIN_EXT;
                    if (n === E) return r.MAX_EXT
                }
                return n === Tt && null !== (r = e.get("WEBGL_depth_texture")) ? r.UNSIGNED_INT_24_8_WEBGL : 0
            }
        }
    }

    function wr(t) {
        console.log("THREE.WebGLRenderer", e);
        var o = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            s = void 0 !== t.context ? t.context : null, c = void 0 !== t.alpha && t.alpha,
            f = void 0 === t.depth || t.depth, d = void 0 === t.stencil || t.stencil,
            x = void 0 !== t.antialias && t.antialias, w = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            _ = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            M = void 0 !== t.powerPreference ? t.powerPreference : "default", E = [], T = [], S = null, A = [], L = [];
        this.domElement = o, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Y, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var R = this, P = !1, C = null, N = null, O = -1, I = "", D = null, j = null, W = new le, q = new le, X = null,
            Z = 0, J = o.width, Q = o.height, K = 1, $ = new le(0, 0, J, Q), tt = new le(0, 0, J, Q), et = !1,
            nt = new bn, rt = new function () {
                var t = this, e = null, n = 0, r = !1, i = !1, a = new yn, o = new ce, s = {value: null, needsUpdate: !1};
                this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, i, a) {
                    var o = 0 !== t.length || i || 0 !== n || r;
                    return r = i, e = h(t, a, 0), n = t.length, o
                }, this.beginShadows = function () {
                    i = !0, h(null)
                }, this.endShadows = function () {
                    i = !1, c()
                }, this.setState = function (t, a, o, u, l, f) {
                    if (!r || null === t || 0 === t.length || i && !o) i ? h(null) : c(); else {
                        var d = i ? 0 : n, p = 4 * d, m = l.clippingState || null;
                        s.value = m, m = h(t, u, p, f);
                        for (var g = 0; g !== p; ++g) m[g] = e[g];
                        l.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
                    }
                };

                function c() {
                    s.value !== e && (s.value = e, s.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0
                }

                function h(e, n, r, i) {
                    var c = null !== e ? e.length : 0, h = null;
                    if (0 !== c) {
                        if (h = s.value, !0 !== i || null === h) {
                            var u = r + 4 * c, l = n.matrixWorldInverse;
                            o.getNormalMatrix(l), (null === h || h.length < u) && (h = new Float32Array(u));
                            for (var f = 0, d = r; f !== c; ++f, d += 4) a.copy(e[f]).applyMatrix4(l, o), a.normal.toArray(h, d), h[d + 3] = a.constant
                        }
                        s.value = h, s.needsUpdate = !0
                    }
                    return t.numPlanes = c, h
                }
            }, it = !1, at = !1, ot = new ae, st = new se, ct = {geometries: 0, textures: 0},
            ht = {frame: 0, calls: 0, vertices: 0, faces: 0, points: 0};
        this.info = {render: ht, memory: ct, programs: null};

        function ut() {
            return null === C ? K : 1
        }

        var lt;
        try {
            var ft = {
                alpha: c,
                depth: f,
                stencil: d,
                antialias: x,
                premultipliedAlpha: w,
                preserveDrawingBuffer: _,
                powerPreference: M
            };
            if (o.addEventListener("webglcontextlost", Bt, !1), o.addEventListener("webglcontextrestored", Ft, !1), null === (lt = s || o.getContext("webgl", ft) || o.getContext("experimental-webgl", ft))) throw null !== o.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === lt.getShaderPrecisionFormat && (lt.getShaderPrecisionFormat = function () {
                return {rangeMin: 1, rangeMax: 1, precision: 1}
            })
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t.message)
        }
        var dt, mt, gt, vt, yt, bt, _t, Mt, Et, Tt, St, At, Rt, Pt, Ct, Nt, Ot, It;

        function Dt() {
            (dt = new function (t) {
                var e = {};
                return {
                    get: function (n) {
                        if (void 0 !== e[n]) return e[n];
                        var r;
                        switch (n) {
                            case"WEBGL_depth_texture":
                                r = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                                break;
                            case"EXT_texture_filter_anisotropic":
                                r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                                break;
                            case"WEBGL_compressed_texture_s3tc":
                                r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                                break;
                            case"WEBGL_compressed_texture_pvrtc":
                                r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                                break;
                            case"WEBGL_compressed_texture_etc1":
                                r = t.getExtension("WEBGL_compressed_texture_etc1");
                                break;
                            default:
                                r = t.getExtension(n)
                        }
                        return null === r && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = r, r
                    }
                }
            }(lt)).get("WEBGL_depth_texture"), dt.get("OES_texture_float"), dt.get("OES_texture_float_linear"), dt.get("OES_texture_half_float"), dt.get("OES_texture_half_float_linear"), dt.get("OES_standard_derivatives"), dt.get("OES_element_index_uint"), dt.get("ANGLE_instanced_arrays"), It = new xr(lt, dt), mt = new function (t, e, n) {
                var r;

                function i(e) {
                    if ("highp" === e) {
                        if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
                        e = "mediump"
                    }
                    return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
                }

                var a = void 0 !== n.precision ? n.precision : "highp", o = i(a);
                o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
                var s = !0 === n.logarithmicDepthBuffer, c = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                    h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), u = t.getParameter(t.MAX_TEXTURE_SIZE),
                    l = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), f = t.getParameter(t.MAX_VERTEX_ATTRIBS),
                    d = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), p = t.getParameter(t.MAX_VARYING_VECTORS),
                    m = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), g = h > 0, v = !!e.get("OES_texture_float");
                return {
                    getMaxAnisotropy: function () {
                        if (void 0 !== r) return r;
                        var n = e.get("EXT_texture_filter_anisotropic");
                        return r = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                    },
                    getMaxPrecision: i,
                    precision: a,
                    logarithmicDepthBuffer: s,
                    maxTextures: c,
                    maxVertexTextures: h,
                    maxTextureSize: u,
                    maxCubemapSize: l,
                    maxAttributes: f,
                    maxVertexUniforms: d,
                    maxVaryings: p,
                    maxFragmentUniforms: m,
                    vertexTextures: g,
                    floatFragmentTextures: v,
                    floatVertexTextures: g && v
                }
            }(lt, dt, t), (gt = new function (t, e, a) {
                var o = new function () {
                        var e = !1, n = new le, r = null, i = new le(0, 0, 0, 0);
                        return {
                            setMask: function (n) {
                                r === n || e || (t.colorMask(n, n, n, n), r = n)
                            }, setLocked: function (t) {
                                e = t
                            }, setClear: function (e, r, a, o, s) {
                                !0 === s && (e *= o, r *= o, a *= o), n.set(e, r, a, o), !1 === i.equals(n) && (t.clearColor(e, r, a, o), i.copy(n))
                            }, reset: function () {
                                e = !1, r = null, i.set(-1, 0, 0, 0)
                            }
                        }
                    }, s = new function () {
                        var e = !1, n = null, r = null, i = null;
                        return {
                            setTest: function (e) {
                                e ? tt(t.DEPTH_TEST) : et(t.DEPTH_TEST)
                            }, setMask: function (r) {
                                n === r || e || (t.depthMask(r), n = r)
                            }, setFunc: function (e) {
                                if (r !== e) {
                                    if (e) switch (e) {
                                        case U:
                                            t.depthFunc(t.NEVER);
                                            break;
                                        case z:
                                            t.depthFunc(t.ALWAYS);
                                            break;
                                        case B:
                                            t.depthFunc(t.LESS);
                                            break;
                                        case F:
                                            t.depthFunc(t.LEQUAL);
                                            break;
                                        case k:
                                            t.depthFunc(t.EQUAL);
                                            break;
                                        case G:
                                            t.depthFunc(t.GEQUAL);
                                            break;
                                        case H:
                                            t.depthFunc(t.GREATER);
                                            break;
                                        case V:
                                            t.depthFunc(t.NOTEQUAL);
                                            break;
                                        default:
                                            t.depthFunc(t.LEQUAL)
                                    } else t.depthFunc(t.LEQUAL);
                                    r = e
                                }
                            }, setLocked: function (t) {
                                e = t
                            }, setClear: function (e) {
                                i !== e && (t.clearDepth(e), i = e)
                            }, reset: function () {
                                e = !1, n = null, r = null, i = null
                            }
                        }
                    }, c = new function () {
                        var e = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, h = null;
                        return {
                            setTest: function (e) {
                                e ? tt(t.STENCIL_TEST) : et(t.STENCIL_TEST)
                            }, setMask: function (r) {
                                n === r || e || (t.stencilMask(r), n = r)
                            }, setFunc: function (e, n, o) {
                                r === e && i === n && a === o || (t.stencilFunc(e, n, o), r = e, i = n, a = o)
                            }, setOp: function (e, n, r) {
                                o === e && s === n && c === r || (t.stencilOp(e, n, r), o = e, s = n, c = r)
                            }, setLocked: function (t) {
                                e = t
                            }, setClear: function (e) {
                                h !== e && (t.clearStencil(e), h = e)
                            }, reset: function () {
                                e = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, h = null
                            }
                        }
                    }, l = t.getParameter(t.MAX_VERTEX_ATTRIBS), f = new Uint8Array(l), d = new Uint8Array(l),
                    x = new Uint8Array(l), w = {}, _ = null, M = null, E = null, T = null, S = null, A = null, L = null,
                    R = null, P = null, C = !1, N = null, O = null, I = null, D = null, j = null,
                    W = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    q = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]), X = parseFloat(q) >= 1,
                    Y = null, Z = {}, J = new le, Q = new le;

                function K(e, n, r) {
                    var i = new Uint8Array(4), a = t.createTexture();
                    t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
                    for (var o = 0; o < r; o++) t.texImage2D(n + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, i);
                    return a
                }

                var $ = {};
                $[t.TEXTURE_2D] = K(t.TEXTURE_2D, t.TEXTURE_2D, 1), $[t.TEXTURE_CUBE_MAP] = K(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), o.setClear(0, 0, 0, 1), s.setClear(1), c.setClear(0), tt(t.DEPTH_TEST), s.setFunc(F), rt(!1), it(r), tt(t.CULL_FACE), tt(t.BLEND), nt(m);

                function tt(e) {
                    !0 !== w[e] && (t.enable(e), w[e] = !0)
                }

                function et(e) {
                    !1 !== w[e] && (t.disable(e), w[e] = !1)
                }

                function nt(e, n, r, i, o, s, c, h) {
                    if (e !== p ? tt(t.BLEND) : et(t.BLEND), e !== b) {
                        if (e !== E || h !== C) switch (e) {
                            case g:
                                h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE));
                                break;
                            case v:
                                h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR));
                                break;
                            case y:
                                h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR));
                                break;
                            default:
                                h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA))
                        }
                        T = null, S = null, A = null, L = null, R = null, P = null
                    } else o = o || n, s = s || r, c = c || i, n === T && o === L || (t.blendEquationSeparate(a.convert(n), a.convert(o)), T = n, L = o), r === S && i === A && s === R && c === P || (t.blendFuncSeparate(a.convert(r), a.convert(i), a.convert(s), a.convert(c)), S = r, A = i, R = s, P = c);
                    E = e, C = h
                }

                function rt(e) {
                    N !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), N = e)
                }

                function it(e) {
                    e !== n ? (tt(t.CULL_FACE), e !== O && (e === r ? t.cullFace(t.BACK) : e === i ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : et(t.CULL_FACE), O = e
                }

                function at(e, n, r) {
                    e ? (tt(t.POLYGON_OFFSET_FILL), D === n && j === r || (t.polygonOffset(n, r), D = n, j = r)) : et(t.POLYGON_OFFSET_FILL)
                }

                function ot(e) {
                    void 0 === e && (e = t.TEXTURE0 + W - 1), Y !== e && (t.activeTexture(e), Y = e)
                }

                return {
                    buffers: {color: o, depth: s, stencil: c}, initAttributes: function () {
                        for (var t = 0, e = f.length; t < e; t++) f[t] = 0
                    }, enableAttribute: function (n) {
                        f[n] = 1, 0 === d[n] && (t.enableVertexAttribArray(n), d[n] = 1), 0 !== x[n] && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n, 0), x[n] = 0)
                    }, enableAttributeAndDivisor: function (n, r) {
                        f[n] = 1, 0 === d[n] && (t.enableVertexAttribArray(n), d[n] = 1), x[n] !== r && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n, r), x[n] = r)
                    }, disableUnusedAttributes: function () {
                        for (var e = 0, n = d.length; e !== n; ++e) d[e] !== f[e] && (t.disableVertexAttribArray(e), d[e] = 0)
                    }, enable: tt, disable: et, getCompressedTextureFormats: function () {
                        if (null === _ && (_ = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1"))) for (var n = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), r = 0; r < n.length; r++) _.push(n[r]);
                        return _
                    }, useProgram: function (e) {
                        return M !== e && (t.useProgram(e), M = e, !0)
                    }, setBlending: nt, setMaterial: function (e, n) {
                        e.side === u ? et(t.CULL_FACE) : tt(t.CULL_FACE);
                        var r = e.side === h;
                        n && (r = !r), rt(r), !0 === e.transparent ? nt(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : nt(p), s.setFunc(e.depthFunc), s.setTest(e.depthTest), s.setMask(e.depthWrite), o.setMask(e.colorWrite), at(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
                    }, setFlipSided: rt, setCullFace: it, setLineWidth: function (e) {
                        e !== I && (X && t.lineWidth(e), I = e)
                    }, setPolygonOffset: at, setScissorTest: function (e) {
                        e ? tt(t.SCISSOR_TEST) : et(t.SCISSOR_TEST)
                    }, activeTexture: ot, bindTexture: function (e, n) {
                        null === Y && ot();
                        var r = Z[Y];
                        void 0 === r && (r = {
                            type: void 0,
                            texture: void 0
                        }, Z[Y] = r), r.type === e && r.texture === n || (t.bindTexture(e, n || $[e]), r.type = e, r.texture = n)
                    }, compressedTexImage2D: function () {
                        try {
                            t.compressedTexImage2D.apply(t, arguments)
                        } catch (t) {
                            console.error("THREE.WebGLState:", t)
                        }
                    }, texImage2D: function () {
                        try {
                            t.texImage2D.apply(t, arguments)
                        } catch (t) {
                            console.error("THREE.WebGLState:", t)
                        }
                    }, scissor: function (e) {
                        !1 === J.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), J.copy(e))
                    }, viewport: function (e) {
                        !1 === Q.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), Q.copy(e))
                    }, reset: function () {
                        for (var e = 0; e < d.length; e++) 1 === d[e] && (t.disableVertexAttribArray(e), d[e] = 0);
                        w = {}, _ = null, Y = null, Z = {}, M = null, E = null, N = null, O = null, o.reset(), s.reset(), c.reset()
                    }
                }
            }(lt, dt, It)).scissor(q.copy(tt).multiplyScalar(K)), gt.viewport(W.copy($).multiplyScalar(K)), vt = new function () {
                var t = {};
                return {
                    get: function (e) {
                        var n = e.uuid, r = t[n];
                        return void 0 === r && (r = {}, t[n] = r), r
                    }, remove: function (e) {
                        delete t[e.uuid]
                    }, clear: function () {
                        t = {}
                    }
                }
            }, yt = new gr(lt, dt, gt, vt, mt, It, ct), bt = new wn(lt), _t = new function (t, e, n) {
                var r = {}, i = {};

                function a(t) {
                    var o = t.target, s = r[o.id];
                    null !== s.index && e.remove(s.index);
                    for (var c in s.attributes) e.remove(s.attributes[c]);
                    o.removeEventListener("dispose", a), delete r[o.id];
                    var h = i[o.id];
                    h && (e.remove(h), delete i[o.id]), (h = i[s.id]) && (e.remove(h), delete i[s.id]), n.geometries--
                }

                return {
                    get: function (t, e) {
                        var i = r[e.id];
                        return i || (e.addEventListener("dispose", a), e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new jn).setFromObject(t)), i = e._bufferGeometry), r[e.id] = i, n.geometries++, i)
                    }, update: function (n) {
                        var r = n.index, i = n.attributes;
                        null !== r && e.update(r, t.ELEMENT_ARRAY_BUFFER);
                        for (var a in i) e.update(i[a], t.ARRAY_BUFFER);
                        var o = n.morphAttributes;
                        for (var a in o) for (var s = o[a], c = 0, h = s.length; c < h; c++) e.update(s[c], t.ARRAY_BUFFER)
                    }, getWireframeAttribute: function (n) {
                        var r = i[n.id];
                        if (r) return r;
                        var a = [], o = n.index, s = n.attributes;
                        if (null !== o) for (var c = 0, h = (d = o.array).length; c < h; c += 3) {
                            var u = d[c + 0], l = d[c + 1], f = d[c + 2];
                            a.push(u, l, l, f, f, u)
                        } else {
                            var d;
                            for (c = 0, h = (d = s.position.array).length / 3 - 1; c < h; c += 3) u = c + 0, l = c + 1, f = c + 2, a.push(u, l, l, f, f, u)
                        }
                        return r = new (Hn(a) > 65535 ? Bn : Un)(a, 1), e.update(r, t.ELEMENT_ARRAY_BUFFER), i[n.id] = r, r
                    }
                }
            }(lt, bt, ct), Mt = new function (t, e) {
                var n = {};
                return {
                    update: function (r) {
                        var i = e.frame, a = r.geometry, o = t.get(r, a);
                        return n[o.id] !== i && (a.isGeometry && o.updateFromObject(r), t.update(o), n[o.id] = i), o
                    }, clear: function () {
                        n = {}
                    }
                }
            }(_t, ht), Rt = new function (t) {
                var e = {}, n = new Float32Array(8);
                return {
                    update: function (r, i, a, o) {
                        var s = r.morphTargetInfluences, c = s.length, h = e[i.id];
                        if (void 0 === h) {
                            h = [];
                            for (var u = 0; u < c; u++) h[u] = [u, 0];
                            e[i.id] = h
                        }
                        var l = a.morphTargets && i.morphAttributes.position,
                            f = a.morphNormals && i.morphAttributes.normal;
                        for (u = 0; u < c; u++) 0 !== (d = h[u])[1] && (l && i.removeAttribute("morphTarget" + u), f && i.removeAttribute("morphNormal" + u));
                        for (u = 0; u < c; u++) (d = h[u])[0] = u, d[1] = s[u];
                        for (h.sort(ir), u = 0; u < 8; u++) {
                            var d;
                            if (d = h[u]) {
                                var p = d[0], m = d[1];
                                if (m) {
                                    l && i.addAttribute("morphTarget" + u, l[p]), f && i.addAttribute("morphNormal" + u, f[p]), n[u] = m;
                                    continue
                                }
                            }
                            n[u] = 0
                        }
                        o.getUniforms().setValue(t, "morphTargetInfluences", n)
                    }
                }
            }(lt), Tt = new mr(R, dt, mt), Et = new ar, St = new rr, At = new function (t, e, n, r) {
                var i, a, o, s = new nn(0), c = 0;

                function u(t, n) {
                    e.buffers.color.setClear(t.r, t.g, t.b, n, r)
                }

                return {
                    getClearColor: function () {
                        return s
                    }, setClearColor: function (t, e) {
                        s.set(t), u(s, c = void 0 !== e ? e : 1)
                    }, getClearAlpha: function () {
                        return c
                    }, setClearAlpha: function (t) {
                        u(s, c = t)
                    }, render: function (e, r, l, f) {
                        var d = r.background;
                        null === d ? u(s, c) : d && d.isColor && (u(d, 1), f = !0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), d && d.isCubeTexture ? (void 0 === o && ((o = new tr(new qn(1, 1, 1), new Jn({
                            uniforms: sn.cube.uniforms,
                            vertexShader: sn.cube.vertexShader,
                            fragmentShader: sn.cube.fragmentShader,
                            side: h,
                            depthTest: !0,
                            depthWrite: !1,
                            fog: !1
                        }))).geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function (t, e, n) {
                            this.matrixWorld.copyPosition(n.matrixWorld)
                        }, n.update(o.geometry)), o.material.uniforms.tCube.value = d, e.push(o, o.geometry, o.material, 0, null)) : d && d.isTexture && (void 0 === i && (i = new An(-1, 1, 1, -1, 0, 1), a = new tr(new Yn(2, 2), new Zn({
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        })), n.update(a.geometry)), a.material.map = d, t.renderBufferDirect(i, null, a.geometry, a.material, a, null))
                    }
                }
            }(R, gt, _t, w), Pt = new function (t, e, n) {
                var r;
                this.setMode = function (t) {
                    r = t
                }, this.render = function (e, i) {
                    t.drawArrays(r, e, i), n.calls++, n.vertices += i, r === t.TRIANGLES ? n.faces += i / 3 : r === t.POINTS && (n.points += i)
                }, this.renderInstances = function (i, a, o) {
                    var s = e.get("ANGLE_instanced_arrays");
                    if (null !== s) {
                        var c = i.attributes.position;
                        c.isInterleavedBufferAttribute ? (o = c.data.count, s.drawArraysInstancedANGLE(r, 0, o, i.maxInstancedCount)) : s.drawArraysInstancedANGLE(r, a, o, i.maxInstancedCount), n.calls++, n.vertices += o * i.maxInstancedCount, r === t.TRIANGLES ? n.faces += i.maxInstancedCount * o / 3 : r === t.POINTS && (n.points += i.maxInstancedCount * o)
                    } else console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
                }
            }(lt, dt, ht), Ct = new function (t, e, n) {
                var r, i, a;
                this.setMode = function (t) {
                    r = t
                }, this.setIndex = function (t) {
                    i = t.type, a = t.bytesPerElement
                }, this.render = function (e, o) {
                    t.drawElements(r, o, i, e * a), n.calls++, n.vertices += o, r === t.TRIANGLES ? n.faces += o / 3 : r === t.POINTS && (n.points += o)
                }, this.renderInstances = function (o, s, c) {
                    var h = e.get("ANGLE_instanced_arrays");
                    null !== h ? (h.drawElementsInstancedANGLE(r, c, i, s * a, o.maxInstancedCount), n.calls++, n.vertices += c * o.maxInstancedCount, r === t.TRIANGLES ? n.faces += o.maxInstancedCount * c / 3 : r === t.POINTS && (n.points += o.maxInstancedCount * c)) : console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
                }
            }(lt, dt, ht), Nt = new hn(R, lt, gt, yt, mt), Ot = new ln(R, lt, gt, yt, mt), R.info.programs = Tt.programs, R.context = lt, R.capabilities = mt, R.extensions = dt, R.properties = vt, R.renderLists = St, R.state = gt
        }

        Dt();
        var Ut = new br(R);
        this.vr = Ut;
        var zt = new xn(R, Mt, mt.maxTextureSize);
        this.shadowMap = zt, this.getContext = function () {
            return lt
        }, this.getContextAttributes = function () {
            return lt.getContextAttributes()
        }, this.forceContextLoss = function () {
            var t = dt.get("WEBGL_lose_context");
            t && t.loseContext()
        }, this.forceContextRestore = function () {
            var t = dt.get("WEBGL_lose_context");
            t && t.restoreContext()
        }, this.getPixelRatio = function () {
            return K
        }, this.setPixelRatio = function (t) {
            void 0 !== t && (K = t, this.setSize(J, Q, !1))
        }, this.getSize = function () {
            return {width: J, height: Q}
        }, this.setSize = function (t, e, n) {
            var r = Ut.getDevice();
            r && r.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (J = t, Q = e, o.width = t * K, o.height = e * K, !1 !== n && (o.style.width = t + "px", o.style.height = e + "px"), this.setViewport(0, 0, t, e))
        }, this.getDrawingBufferSize = function () {
            return {width: J * K, height: Q * K}
        }, this.setDrawingBufferSize = function (t, e, n) {
            J = t, Q = e, K = n, o.width = t * n, o.height = e * n, this.setViewport(0, 0, t, e)
        }, this.setViewport = function (t, e, n, r) {
            $.set(t, Q - e - r, n, r), gt.viewport(W.copy($).multiplyScalar(K))
        }, this.setScissor = function (t, e, n, r) {
            tt.set(t, Q - e - r, n, r), gt.scissor(q.copy(tt).multiplyScalar(K))
        }, this.setScissorTest = function (t) {
            gt.setScissorTest(et = t)
        }, this.getClearColor = function () {
            return At.getClearColor()
        }, this.setClearColor = function () {
            At.setClearColor.apply(At, arguments)
        }, this.getClearAlpha = function () {
            return At.getClearAlpha()
        }, this.setClearAlpha = function () {
            At.setClearAlpha.apply(At, arguments)
        }, this.clear = function (t, e, n) {
            var r = 0;
            (void 0 === t || t) && (r |= lt.COLOR_BUFFER_BIT), (void 0 === e || e) && (r |= lt.DEPTH_BUFFER_BIT), (void 0 === n || n) && (r |= lt.STENCIL_BUFFER_BIT), lt.clear(r)
        }, this.clearColor = function () {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function () {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function () {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function (t, e, n, r) {
            this.setRenderTarget(t), this.clear(e, n, r)
        }, this.dispose = function () {
            o.removeEventListener("webglcontextlost", Bt, !1), o.removeEventListener("webglcontextrestored", Ft, !1), St.dispose(), Ut.dispose()
        };

        function Bt(t) {
            t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = !0
        }

        function Ft() {
            console.log("THREE.WebGLRenderer: Context Restored."), P = !1, Dt()
        }

        function kt(t) {
            var e = t.target;
            e.removeEventListener("dispose", kt), Gt(n = e), vt.remove(n);
            var n
        }

        function Gt(t) {
            var e = vt.get(t).program;
            t.program = void 0, void 0 !== e && Tt.releaseProgram(e)
        }

        this.renderBufferImmediate = function (t, e, n) {
            gt.initAttributes();
            var r = vt.get(t);
            t.hasPositions && !r.position && (r.position = lt.createBuffer()), t.hasNormals && !r.normal && (r.normal = lt.createBuffer()), t.hasUvs && !r.uv && (r.uv = lt.createBuffer()), t.hasColors && !r.color && (r.color = lt.createBuffer());
            var i = e.getAttributes();
            if (t.hasPositions && (lt.bindBuffer(lt.ARRAY_BUFFER, r.position), lt.bufferData(lt.ARRAY_BUFFER, t.positionArray, lt.DYNAMIC_DRAW), gt.enableAttribute(i.position), lt.vertexAttribPointer(i.position, 3, lt.FLOAT, !1, 0, 0)), t.hasNormals) {
                if (lt.bindBuffer(lt.ARRAY_BUFFER, r.normal), !n.isMeshPhongMaterial && !n.isMeshStandardMaterial && !n.isMeshNormalMaterial && !0 === n.flatShading) for (var a = 0, o = 3 * t.count; a < o; a += 9) {
                    var s = t.normalArray, c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3,
                        h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3, u = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                    s[a + 0] = c, s[a + 1] = h, s[a + 2] = u, s[a + 3] = c, s[a + 4] = h, s[a + 5] = u, s[a + 6] = c, s[a + 7] = h, s[a + 8] = u
                }
                lt.bufferData(lt.ARRAY_BUFFER, t.normalArray, lt.DYNAMIC_DRAW), gt.enableAttribute(i.normal), lt.vertexAttribPointer(i.normal, 3, lt.FLOAT, !1, 0, 0)
            }
            t.hasUvs && n.map && (lt.bindBuffer(lt.ARRAY_BUFFER, r.uv), lt.bufferData(lt.ARRAY_BUFFER, t.uvArray, lt.DYNAMIC_DRAW), gt.enableAttribute(i.uv), lt.vertexAttribPointer(i.uv, 2, lt.FLOAT, !1, 0, 0)), t.hasColors && n.vertexColors !== l && (lt.bindBuffer(lt.ARRAY_BUFFER, r.color), lt.bufferData(lt.ARRAY_BUFFER, t.colorArray, lt.DYNAMIC_DRAW), gt.enableAttribute(i.color), lt.vertexAttribPointer(i.color, 3, lt.FLOAT, !1, 0, 0)), gt.disableUnusedAttributes(), lt.drawArrays(lt.TRIANGLES, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function (t, e, n, r, i, a) {
            var o = i.isMesh && i.matrixWorld.determinant() < 0;
            gt.setMaterial(r, o);
            var s = Qt(t, e, r, i), c = n.id + "_" + s.id + "_" + (!0 === r.wireframe), h = !1;
            c !== I && (I = c, h = !0), i.morphTargetInfluences && (Rt.update(i, n, r, s), h = !0);
            var u = n.index, l = n.attributes.position, f = 1;
            !0 === r.wireframe && (u = _t.getWireframeAttribute(n), f = 2);
            var d, p = Pt;
            null !== u && (d = bt.get(u), (p = Ct).setIndex(d)), h && (!function (t, e, n, r) {
                if (n && n.isInstancedBufferGeometry && null === dt.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                void 0 === r && (r = 0);
                gt.initAttributes();
                var i = n.attributes, a = e.getAttributes(), o = t.defaultAttributeValues;
                for (var s in a) {
                    var c = a[s];
                    if (c >= 0) {
                        var h = i[s];
                        if (void 0 !== h) {
                            var u = h.normalized, l = h.itemSize, f = bt.get(h);
                            if (void 0 === f) continue;
                            var d = f.buffer, p = f.type, m = f.bytesPerElement;
                            if (h.isInterleavedBufferAttribute) {
                                var g = h.data, v = g.stride, y = h.offset;
                                g && g.isInstancedInterleavedBuffer ? (gt.enableAttributeAndDivisor(c, g.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = g.meshPerAttribute * g.count)) : gt.enableAttribute(c), lt.bindBuffer(lt.ARRAY_BUFFER, d), lt.vertexAttribPointer(c, l, p, u, v * m, (r * v + y) * m)
                            } else h.isInstancedBufferAttribute ? (gt.enableAttributeAndDivisor(c, h.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = h.meshPerAttribute * h.count)) : gt.enableAttribute(c), lt.bindBuffer(lt.ARRAY_BUFFER, d), lt.vertexAttribPointer(c, l, p, u, 0, r * l * m)
                        } else if (void 0 !== o) {
                            var b = o[s];
                            if (void 0 !== b) switch (b.length) {
                                case 2:
                                    lt.vertexAttrib2fv(c, b);
                                    break;
                                case 3:
                                    lt.vertexAttrib3fv(c, b);
                                    break;
                                case 4:
                                    lt.vertexAttrib4fv(c, b);
                                    break;
                                default:
                                    lt.vertexAttrib1fv(c, b)
                            }
                        }
                    }
                }
                gt.disableUnusedAttributes()
            }(r, s, n), null !== u && lt.bindBuffer(lt.ELEMENT_ARRAY_BUFFER, d.buffer));
            var m = 0;
            null !== u ? m = u.count : void 0 !== l && (m = l.count);
            var g = n.drawRange.start * f, v = n.drawRange.count * f, y = null !== a ? a.start * f : 0,
                b = null !== a ? a.count * f : 1 / 0, x = Math.max(g, y), w = Math.min(m, g + v, y + b) - 1,
                _ = Math.max(0, w - x + 1);
            if (0 !== _) {
                if (i.isMesh) if (!0 === r.wireframe) gt.setLineWidth(r.wireframeLinewidth * ut()), p.setMode(lt.LINES); else switch (i.drawMode) {
                    case Wt:
                        p.setMode(lt.TRIANGLES);
                        break;
                    case qt:
                        p.setMode(lt.TRIANGLE_STRIP);
                        break;
                    case Xt:
                        p.setMode(lt.TRIANGLE_FAN)
                } else if (i.isLine) {
                    var M = r.linewidth;
                    void 0 === M && (M = 1), gt.setLineWidth(M * ut()), i.isLineSegments ? p.setMode(lt.LINES) : i.isLineLoop ? p.setMode(lt.LINE_LOOP) : p.setMode(lt.LINE_STRIP)
                } else i.isPoints && p.setMode(lt.POINTS);
                n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && p.renderInstances(n, x, _) : p.render(x, _)
            }
        };
        this.compile = function (t, e) {
            E.length = 0, T.length = 0, t.traverse(function (t) {
                t.isLight && (E.push(t), t.castShadow && T.push(t))
            }), Et.setup(E, T, e), t.traverse(function (e) {
                if (e.material) if (Array.isArray(e.material)) for (var n = 0; n < e.material.length; n++) Jt(e.material[n], t.fog, e); else Jt(e.material, t.fog, e)
            })
        };
        var Ht = !1, Vt = null;

        function jt(t) {
            null !== Vt && Vt(t);
            var e = Ut.getDevice();
            e && e.isPresenting ? e.requestAnimationFrame(jt) : window.requestAnimationFrame(jt)
        }

        this.animate = function (t) {
            Vt = t, function () {
                if (!Ht) {
                    var t = Ut.getDevice();
                    t && t.isPresenting ? t.requestAnimationFrame(jt) : window.requestAnimationFrame(jt), Ht = !0
                }
            }()
        }, this.render = function (t, e, n, r) {
            if (e && e.isCamera) {
                if (!P) {
                    I = "", O = -1, D = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Ut.enabled && (e = Ut.getCamera(e)), ot.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), nt.setFromMatrix(ot), E.length = 0, T.length = 0, A.length = 0, L.length = 0, at = this.localClippingEnabled, it = rt.init(this.clippingPlanes, at, e), (S = St.get(t, e)).init(), function t(e, n, r) {
                        if (!1 === e.visible) return;
                        var i = e.layers.test(n.layers);
                        if (i) if (e.isLight) E.push(e), e.castShadow && T.push(e); else if (e.isSprite) e.frustumCulled && !nt.intersectsSprite(e) || A.push(e); else if (e.isLensFlare) L.push(e); else if (e.isImmediateRenderObject) r && st.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ot), S.push(e, null, e.material, st.z, null); else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || nt.intersectsObject(e))) {
                            r && st.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ot);
                            var a = Mt.update(e), o = e.material;
                            if (Array.isArray(o)) for (var s = a.groups, c = 0, h = s.length; c < h; c++) {
                                var u = s[c], l = o[u.materialIndex];
                                l && l.visible && S.push(e, a, l, st.z, u)
                            } else o.visible && S.push(e, a, o, st.z, null)
                        }
                        var f = e.children;
                        for (var c = 0, h = f.length; c < h; c++) t(f[c], n, r)
                    }(t, e, R.sortObjects), !0 === R.sortObjects && S.sort(), yt.updateVideoTextures(), it && rt.beginShadows(), zt.render(T, t, e), Et.setup(E, T, e), it && rt.endShadows(), ht.frame++, ht.calls = 0, ht.vertices = 0, ht.faces = 0, ht.points = 0, void 0 === n && (n = null), this.setRenderTarget(n), At.render(S, t, e, r);
                    var i = S.opaque, a = S.transparent;
                    if (t.overrideMaterial) {
                        var o = t.overrideMaterial;
                        i.length && Yt(i, t, e, o), a.length && Yt(a, t, e, o)
                    } else i.length && Yt(i, t, e), a.length && Yt(a, t, e);
                    Ot.render(A, t, e), Nt.render(L, t, e, W), n && yt.updateRenderTargetMipmap(n), gt.buffers.depth.setTest(!0), gt.buffers.depth.setMask(!0), gt.buffers.color.setMask(!0), gt.setPolygonOffset(!1), Ut.enabled && Ut.submitFrame()
                }
            } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        };

        function Yt(t, e, n, r) {
            for (var i = 0, a = t.length; i < a; i++) {
                var o = t[i], s = o.object, c = o.geometry, h = void 0 === r ? o.material : r, u = o.group;
                if (n.isArrayCamera) {
                    j = n;
                    for (var l = n.cameras, f = 0, d = l.length; f < d; f++) {
                        var p = l[f];
                        if (s.layers.test(p.layers)) {
                            var m = p.bounds, g = m.x * J, v = m.y * Q, y = m.z * J, b = m.w * Q;
                            gt.viewport(W.set(g, v, y, b).multiplyScalar(K)), Zt(s, e, p, c, h, u)
                        }
                    }
                } else j = null, Zt(s, e, n, c, h, u)
            }
        }

        function Zt(t, e, n, r, i, a) {
            if (t.onBeforeRender(R, e, n, r, i, a), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                var o = t.isMesh && t.matrixWorld.determinant() < 0;
                gt.setMaterial(i, o);
                var s = Qt(n, e.fog, i, t);
                I = "", c = s, h = i, t.render(function (t) {
                    R.renderBufferImmediate(t, c, h)
                })
            } else R.renderBufferDirect(n, e.fog, r, i, t, a);
            var c, h;
            t.onAfterRender(R, e, n, r, i, a)
        }

        function Jt(t, e, n) {
            var r = vt.get(t), i = Tt.getParameters(t, Et.state, T, e, rt.numPlanes, rt.numIntersection, n),
                a = Tt.getProgramCode(t, i), o = r.program, s = !0;
            if (void 0 === o) t.addEventListener("dispose", kt); else if (o.code !== a) Gt(t); else {
                if (void 0 !== i.shaderID) return;
                s = !1
            }
            if (s) {
                if (i.shaderID) {
                    var c = sn[i.shaderID];
                    r.shader = {
                        name: t.type,
                        uniforms: an.clone(c.uniforms),
                        vertexShader: c.vertexShader,
                        fragmentShader: c.fragmentShader
                    }
                } else r.shader = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                };
                t.onBeforeCompile(r.shader), o = Tt.acquireProgram(t, r.shader, i, a), r.program = o, t.program = o
            }
            var h = o.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var u = 0; u < R.maxMorphTargets; u++) h["morphTarget" + u] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (u = 0; u < R.maxMorphNormals; u++) h["morphNormal" + u] >= 0 && t.numSupportedMorphNormals++
            }
            var l = r.shader.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (r.numClippingPlanes = rt.numPlanes, r.numIntersection = rt.numIntersection, l.clippingPlanes = rt.uniform), r.fog = e, r.lightsHash = Et.state.hash, t.lights && (l.ambientLightColor.value = Et.state.ambient, l.directionalLights.value = Et.state.directional, l.spotLights.value = Et.state.spot, l.rectAreaLights.value = Et.state.rectArea, l.pointLights.value = Et.state.point, l.hemisphereLights.value = Et.state.hemi, l.directionalShadowMap.value = Et.state.directionalShadowMap, l.directionalShadowMatrix.value = Et.state.directionalShadowMatrix, l.spotShadowMap.value = Et.state.spotShadowMap, l.spotShadowMatrix.value = Et.state.spotShadowMatrix, l.pointShadowMap.value = Et.state.pointShadowMap, l.pointShadowMatrix.value = Et.state.pointShadowMatrix);
            var f = r.program.getUniforms(), d = tn.seqWithValue(f.seq, l);
            r.uniformsList = d
        }

        function Qt(t, e, n, r) {
            Z = 0;
            var i = vt.get(n);
            if (it && (at || t !== D)) {
                var a = t === D && n.id === O;
                rt.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, i, a)
            }
            !1 === n.needsUpdate && (void 0 === i.program ? n.needsUpdate = !0 : n.fog && i.fog !== e ? n.needsUpdate = !0 : n.lights && i.lightsHash !== Et.state.hash ? n.needsUpdate = !0 : void 0 === i.numClippingPlanes || i.numClippingPlanes === rt.numPlanes && i.numIntersection === rt.numIntersection || (n.needsUpdate = !0)), n.needsUpdate && (Jt(n, e, r), n.needsUpdate = !1);
            var o = !1, s = !1, c = !1, h = i.program, u = h.getUniforms(), l = i.shader.uniforms;
            if (gt.useProgram(h.program) && (o = !0, s = !0, c = !0), n.id !== O && (O = n.id, s = !0), o || t !== D) {
                if (u.setValue(lt, "projectionMatrix", t.projectionMatrix), mt.logarithmicDepthBuffer && u.setValue(lt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), D !== (j || t) && (D = j || t, s = !0, c = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
                    var f = u.map.cameraPosition;
                    void 0 !== f && f.setValue(lt, st.setFromMatrixPosition(t.matrixWorld))
                }
                (n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && u.setValue(lt, "viewMatrix", t.matrixWorldInverse)
            }
            if (n.skinning) {
                u.setOptional(lt, r, "bindMatrix"), u.setOptional(lt, r, "bindMatrixInverse");
                var d = r.skeleton;
                if (d) {
                    var p = d.bones;
                    if (mt.floatVertexTextures) {
                        if (void 0 === d.boneTexture) {
                            var m = Math.sqrt(4 * p.length);
                            m = re.ceilPowerOfTwo(m), m = Math.max(m, 4);
                            var g = new Float32Array(m * m * 4);
                            g.set(d.boneMatrices);
                            var v = new pe(g, m, m, Lt, xt);
                            d.boneMatrices = g, d.boneTexture = v, d.boneTextureSize = m
                        }
                        u.setValue(lt, "boneTexture", d.boneTexture), u.setValue(lt, "boneTextureSize", d.boneTextureSize)
                    } else u.setOptional(lt, d, "boneMatrices")
                }
            }
            s && (u.setValue(lt, "toneMappingExposure", R.toneMappingExposure), u.setValue(lt, "toneMappingWhitePoint", R.toneMappingWhitePoint), n.lights && (U = c, (I = l).ambientLightColor.needsUpdate = U, I.directionalLights.needsUpdate = U, I.pointLights.needsUpdate = U, I.spotLights.needsUpdate = U, I.rectAreaLights.needsUpdate = U, I.hemisphereLights.needsUpdate = U), e && n.fog && (N = e, (C = l).fogColor.value = N.color, N.isFog ? (C.fogNear.value = N.near, C.fogFar.value = N.far) : N.isFogExp2 && (C.fogDensity.value = N.density)), n.isMeshBasicMaterial ? Kt(l, n) : n.isMeshLambertMaterial ? (Kt(l, n), L = l, (P = n).emissiveMap && (L.emissiveMap.value = P.emissiveMap)) : n.isMeshPhongMaterial ? (Kt(l, n), n.isMeshToonMaterial ? ($t(S = l, A = n), A.gradientMap && (S.gradientMap.value = A.gradientMap)) : $t(l, n)) : n.isMeshStandardMaterial ? (Kt(l, n), n.isMeshPhysicalMaterial ? (T = n, (E = l).clearCoat.value = T.clearCoat, E.clearCoatRoughness.value = T.clearCoatRoughness, te(E, T)) : te(l, n)) : n.isMeshDepthMaterial ? (Kt(l, n), _ = l, (M = n).displacementMap && (_.displacementMap.value = M.displacementMap, _.displacementScale.value = M.displacementScale, _.displacementBias.value = M.displacementBias)) : n.isMeshDistanceMaterial ? (Kt(l, n), function (t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
            }(l, n)) : n.isMeshNormalMaterial ? (Kt(l, n), function (t, e) {
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale);
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale));
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(l, n)) : n.isLineBasicMaterial ? (w = n, (x = l).diffuse.value = w.color, x.opacity.value = w.opacity, n.isLineDashedMaterial && (b = n, (y = l).dashSize.value = b.dashSize, y.totalSize.value = b.dashSize + b.gapSize, y.scale.value = b.scale)) : n.isPointsMaterial ? function (t, e) {
                if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * K, t.scale.value = .5 * Q, t.map.value = e.map, null !== e.map) {
                    if (!0 === e.map.matrixAutoUpdate) {
                        var n = e.map.offset, r = e.map.repeat, i = e.map.rotation, a = e.map.center;
                        e.map.matrix.setUvTransform(n.x, n.y, r.x, r.y, i, a.x, a.y)
                    }
                    t.uvTransform.value.copy(e.map.matrix)
                }
            }(l, n) : n.isShadowMaterial && (l.color.value = n.color, l.opacity.value = n.opacity), void 0 !== l.ltcMat && (l.ltcMat.value = rn.LTC_MAT_TEXTURE), void 0 !== l.ltcMag && (l.ltcMag.value = rn.LTC_MAG_TEXTURE), tn.upload(lt, i.uniformsList, l, R));
            var y, b, x, w, _, M, E, T, S, A, L, P, C, N, I, U;
            return u.setValue(lt, "modelViewMatrix", r.modelViewMatrix), u.setValue(lt, "normalMatrix", r.normalMatrix), u.setValue(lt, "modelMatrix", r.matrixWorld), h
        }

        function Kt(t, e) {
            t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
            var n;
            if (e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n) {
                if (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate) {
                    var r = n.offset, i = n.repeat, a = n.rotation, o = n.center;
                    n.matrix.setUvTransform(r.x, r.y, i.x, i.y, a, o.x, o.y)
                }
                t.uvTransform.value.copy(n.matrix)
            }
        }

        function $t(t, e) {
            t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function te(t, e) {
            t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }

        this.setFaceCulling = function (t, e) {
            gt.setCullFace(t), gt.setFlipSided(e === a)
        };
        this.allocTextureUnit = function () {
            var t = Z;
            return t >= mt.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + mt.maxTextures), Z += 1, t
        }, this.setTexture2D = function () {
            var t = !1;
            return function (e, n) {
                e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), yt.setTexture2D(e, n)
            }
        }(), this.setTexture = function () {
            var t = !1;
            return function (e, n) {
                t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), yt.setTexture2D(e, n)
            }
        }(), this.setTextureCube = function () {
            var t = !1;
            return function (e, n) {
                e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? yt.setTextureCube(e, n) : yt.setTextureCubeDynamic(e, n)
            }
        }(), this.getRenderTarget = function () {
            return C
        }, this.setRenderTarget = function (t) {
            C = t, t && void 0 === vt.get(t).__webglFramebuffer && yt.setupRenderTarget(t);
            var e = null, n = !1;
            if (t) {
                var r = vt.get(t).__webglFramebuffer;
                t.isWebGLRenderTargetCube ? (e = r[t.activeCubeFace], n = !0) : e = r, W.copy(t.viewport), q.copy(t.scissor), X = t.scissorTest
            } else W.copy($).multiplyScalar(K), q.copy(tt).multiplyScalar(K), X = et;
            if (N !== e && (lt.bindFramebuffer(lt.FRAMEBUFFER, e), N = e), gt.viewport(W), gt.scissor(q), gt.setScissorTest(X), n) {
                var i = vt.get(t.texture);
                lt.framebufferTexture2D(lt.FRAMEBUFFER, lt.COLOR_ATTACHMENT0, lt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, i.__webglTexture, t.activeMipMapLevel)
            }
        }, this.readRenderTargetPixels = function (t, e, n, r, i, a) {
            if (t && t.isWebGLRenderTarget) {
                var o = vt.get(t).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== N && (lt.bindFramebuffer(lt.FRAMEBUFFER, o), s = !0);
                    try {
                        var c = t.texture, h = c.format, u = c.type;
                        if (h !== Lt && It.convert(h) !== lt.getParameter(lt.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(u === pt || It.convert(u) === lt.getParameter(lt.IMPLEMENTATION_COLOR_READ_TYPE) || u === xt && (dt.get("OES_texture_float") || dt.get("WEBGL_color_buffer_float")) || u === wt && dt.get("EXT_color_buffer_half_float"))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        lt.checkFramebufferStatus(lt.FRAMEBUFFER) === lt.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - r && n >= 0 && n <= t.height - i && lt.readPixels(e, n, r, i, It.convert(h), It.convert(u), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        s && lt.bindFramebuffer(lt.FRAMEBUFFER, N)
                    }
                }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
    }

    function _r(t, e) {
        this.name = "", this.color = new nn(t), this.density = void 0 !== e ? e : 25e-5
    }

    _r.prototype.isFogExp2 = !0, _r.prototype.clone = function () {
        return new _r(this.color.getHex(), this.density)
    }, _r.prototype.toJSON = function () {
        return {type: "FogExp2", color: this.color.getHex(), density: this.density}
    };

    function Mr(t, e, n) {
        this.name = "", this.color = new nn(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3
    }

    Mr.prototype.isFog = !0, Mr.prototype.clone = function () {
        return new Mr(this.color.getHex(), this.near, this.far)
    }, Mr.prototype.toJSON = function () {
        return {type: "Fog", color: this.color.getHex(), near: this.near, far: this.far}
    };

    function Er() {
        Tn.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    Er.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Er, copy: function (t, e) {
            return Tn.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        }, toJSON: function (t) {
            var e = Tn.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
        }
    });

    function Tr(t, e, n, r, i) {
        Tn.call(this), this.lensFlares = [], this.positionScreen = new se, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, n, r, i)
    }

    Tr.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Tr, isLensFlare: !0, copy: function (t) {
            Tn.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, n = t.lensFlares.length; e < n; e++) this.lensFlares.push(t.lensFlares[e]);
            return this
        }, add: function (t, e, n, r, i, a) {
            void 0 === e && (e = -1), void 0 === n && (n = 0), void 0 === a && (a = 1), void 0 === i && (i = new nn(16777215)), void 0 === r && (r = m), n = Math.min(n, Math.max(0, n)), this.lensFlares.push({
                texture: t,
                size: e,
                distance: n,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: i,
                blending: r
            })
        }, updateLensFlares: function () {
            var t, e, n = this.lensFlares.length, r = 2 * -this.positionScreen.x, i = 2 * -this.positionScreen.y;
            for (t = 0; t < n; t++) (e = this.lensFlares[t]).x = this.positionScreen.x + r * e.distance, e.y = this.positionScreen.y + i * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
        }
    });

    function Sr(t) {
        dn.call(this), this.type = "SpriteMaterial", this.color = new nn(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    Sr.prototype = Object.create(dn.prototype), Sr.prototype.constructor = Sr, Sr.prototype.isSpriteMaterial = !0, Sr.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
    };

    function Ar(t) {
        Tn.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new Sr
    }

    Ar.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Ar, isSprite: !0, raycast: function () {
            var t = new se, e = new se, n = new se;
            return function (r, i) {
                e.setFromMatrixPosition(this.matrixWorld), r.ray.closestPointToPoint(e, t), n.setFromMatrixScale(this.matrixWorld);
                var a = n.x * n.y / 4;
                if (!(e.distanceToSquared(t) > a)) {
                    var o = r.ray.origin.distanceTo(t);
                    o < r.near || o > r.far || i.push({distance: o, point: t.clone(), face: null, object: this})
                }
            }
        }(), clone: function () {
            return new this.constructor(this.material).copy(this)
        }
    });

    function Lr() {
        Tn.call(this), this.type = "LOD", Object.defineProperties(this, {levels: {enumerable: !0, value: []}})
    }

    Lr.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Lr, copy: function (t) {
            Tn.prototype.copy.call(this, t, !1);
            for (var e = t.levels, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                this.addLevel(i.object.clone(), i.distance)
            }
            return this
        }, addLevel: function (t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var n = this.levels, r = 0; r < n.length && !(e < n[r].distance); r++) ;
            n.splice(r, 0, {distance: e, object: t}), this.add(t)
        }, getObjectForDistance: function (t) {
            for (var e = this.levels, n = 1, r = e.length; n < r && !(t < e[n].distance); n++) ;
            return e[n - 1].object
        }, raycast: function () {
            var t = new se;
            return function (e, n) {
                t.setFromMatrixPosition(this.matrixWorld);
                var r = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(r).raycast(e, n)
            }
        }(), update: function () {
            var t = new se, e = new se;
            return function (n) {
                var r = this.levels;
                if (r.length > 1) {
                    t.setFromMatrixPosition(n.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                    var i = t.distanceTo(e);
                    r[0].object.visible = !0;
                    for (var a = 1, o = r.length; a < o && i >= r[a].distance; a++) r[a - 1].object.visible = !1, r[a].object.visible = !0;
                    for (; a < o; a++) r[a].object.visible = !1
                }
            }
        }(), toJSON: function (t) {
            var e = Tn.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                e.object.levels.push({object: a.object.uuid, distance: a.distance})
            }
            return e
        }
    });

    function Rr(t, e) {
        if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses(); else if (this.bones.length === e.length) this.boneInverses = e.slice(0); else {
            console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
            for (var n = 0, r = this.bones.length; n < r; n++) this.boneInverses.push(new ae)
        }
    }

    Object.assign(Rr.prototype, {
        calculateInverses: function () {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var n = new ae;
                this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
            }
        }, pose: function () {
            var t, e, n;
            for (e = 0, n = this.bones.length; e < n; e++) (t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (e = 0, n = this.bones.length; e < n; e++) (t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        }, update: function () {
            var t = new ae, e = new ae;
            return function () {
                for (var n = this.bones, r = this.boneInverses, i = this.boneMatrices, a = this.boneTexture, o = 0, s = n.length; o < s; o++) {
                    var c = n[o] ? n[o].matrixWorld : e;
                    t.multiplyMatrices(c, r[o]), t.toArray(i, 16 * o)
                }
                void 0 !== a && (a.needsUpdate = !0)
            }
        }(), clone: function () {
            return new Rr(this.bones, this.boneInverses)
        }
    });

    function Pr() {
        Tn.call(this), this.type = "Bone"
    }

    Pr.prototype = Object.assign(Object.create(Tn.prototype), {constructor: Pr, isBone: !0});

    function Cr(t, e) {
        tr.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ae, this.bindMatrixInverse = new ae;
        var n = new Rr(this.initBones());
        this.bind(n, this.matrixWorld), this.normalizeSkinWeights()
    }

    Cr.prototype = Object.assign(Object.create(tr.prototype), {
        constructor: Cr,
        isSkinnedMesh: !0,
        initBones: function () {
            var t, e, n, r, i = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                for (n = 0, r = this.geometry.bones.length; n < r; n++) e = this.geometry.bones[n], t = new Pr, i.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
                for (n = 0, r = this.geometry.bones.length; n < r; n++) -1 !== (e = this.geometry.bones[n]).parent && null !== e.parent && void 0 !== i[e.parent] ? i[e.parent].add(i[n]) : this.add(i[n])
            }
            return this.updateMatrixWorld(!0), i
        },
        bind: function (t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        },
        pose: function () {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function () {
            var t, e;
            if (this.geometry && this.geometry.isGeometry) for (e = 0; e < this.geometry.skinWeights.length; e++) {
                var n = this.geometry.skinWeights[e];
                (t = 1 / n.manhattanLength()) !== 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0)
            } else if (this.geometry && this.geometry.isBufferGeometry) {
                var r = new le, i = this.geometry.attributes.skinWeight;
                for (e = 0; e < i.count; e++) r.x = i.getX(e), r.y = i.getY(e), r.z = i.getZ(e), r.w = i.getW(e), (t = 1 / r.manhattanLength()) !== 1 / 0 ? r.multiplyScalar(t) : r.set(1, 0, 0, 0), i.setXYZW(e, r.x, r.y, r.z, r.w)
            }
        },
        updateMatrixWorld: function (t) {
            tr.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });

    function Nr(t) {
        dn.call(this), this.type = "LineBasicMaterial", this.color = new nn(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
    }

    Nr.prototype = Object.create(dn.prototype), Nr.prototype.constructor = Nr, Nr.prototype.isLineBasicMaterial = !0, Nr.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    };

    function Or(t, e, n) {
        if (1 === n) return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new Ir(t, e);
        Tn.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new jn, this.material = void 0 !== e ? e : new Nr({color: 16777215 * Math.random()})
    }

    Or.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Or, isLine: !0, raycast: function () {
            var t = new ae, e = new Qn, n = new vn;
            return function (r, i) {
                var a = r.linePrecision, o = a * a, s = this.geometry, c = this.matrixWorld;
                if (null === s.boundingSphere && s.computeBoundingSphere(), n.copy(s.boundingSphere), n.applyMatrix4(c), !1 !== r.ray.intersectsSphere(n)) {
                    t.getInverse(c), e.copy(r.ray).applyMatrix4(t);
                    var h = new se, u = new se, l = new se, f = new se, d = this && this.isLineSegments ? 2 : 1;
                    if (s.isBufferGeometry) {
                        var p = s.index, m = s.attributes.position.array;
                        if (null !== p) for (var g = p.array, v = 0, y = g.length - 1; v < y; v += d) {
                            var b = g[v], x = g[v + 1];
                            h.fromArray(m, 3 * b), u.fromArray(m, 3 * x);
                            if (!(e.distanceSqToSegment(h, u, f, l) > o)) {
                                f.applyMatrix4(this.matrixWorld);
                                (M = r.ray.origin.distanceTo(f)) < r.near || M > r.far || i.push({
                                    distance: M,
                                    point: l.clone().applyMatrix4(this.matrixWorld),
                                    index: v,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        } else for (v = 0, y = m.length / 3 - 1; v < y; v += d) {
                            h.fromArray(m, 3 * v), u.fromArray(m, 3 * v + 3);
                            if (!(e.distanceSqToSegment(h, u, f, l) > o)) {
                                f.applyMatrix4(this.matrixWorld);
                                (M = r.ray.origin.distanceTo(f)) < r.near || M > r.far || i.push({
                                    distance: M,
                                    point: l.clone().applyMatrix4(this.matrixWorld),
                                    index: v,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    } else if (s.isGeometry) {
                        var w = s.vertices, _ = w.length;
                        for (v = 0; v < _ - 1; v += d) {
                            if (!(e.distanceSqToSegment(w[v], w[v + 1], f, l) > o)) {
                                f.applyMatrix4(this.matrixWorld);
                                var M;
                                (M = r.ray.origin.distanceTo(f)) < r.near || M > r.far || i.push({
                                    distance: M,
                                    point: l.clone().applyMatrix4(this.matrixWorld),
                                    index: v,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    }
                }
            }
        }(), clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });

    function Ir(t, e) {
        Or.call(this, t, e), this.type = "LineSegments"
    }

    Ir.prototype = Object.assign(Object.create(Or.prototype), {constructor: Ir, isLineSegments: !0});

    function Dr(t, e) {
        Or.call(this, t, e), this.type = "LineLoop"
    }

    Dr.prototype = Object.assign(Object.create(Or.prototype), {constructor: Dr, isLineLoop: !0});

    function Ur(t) {
        dn.call(this), this.type = "PointsMaterial", this.color = new nn(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(t)
    }

    Ur.prototype = Object.create(dn.prototype), Ur.prototype.constructor = Ur, Ur.prototype.isPointsMaterial = !0, Ur.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
    };

    function zr(t, e) {
        Tn.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new jn, this.material = void 0 !== e ? e : new Ur({color: 16777215 * Math.random()})
    }

    zr.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: zr, isPoints: !0, raycast: function () {
            var t = new ae, e = new Qn, n = new vn;
            return function (r, i) {
                var a = this, o = this.geometry, s = this.matrixWorld, c = r.params.Points.threshold;
                if (null === o.boundingSphere && o.computeBoundingSphere(), n.copy(o.boundingSphere), n.applyMatrix4(s), n.radius += c, !1 !== r.ray.intersectsSphere(n)) {
                    t.getInverse(s), e.copy(r.ray).applyMatrix4(t);
                    var h = c / ((this.scale.x + this.scale.y + this.scale.z) / 3), u = h * h, l = new se;
                    if (o.isBufferGeometry) {
                        var f = o.index, d = o.attributes.position.array;
                        if (null !== f) for (var p = f.array, m = 0, g = p.length; m < g; m++) {
                            var v = p[m];
                            l.fromArray(d, 3 * v), x(l, v)
                        } else {
                            m = 0;
                            for (var y = d.length / 3; m < y; m++) l.fromArray(d, 3 * m), x(l, m)
                        }
                    } else {
                        var b = o.vertices;
                        for (m = 0, y = b.length; m < y; m++) x(b[m], m)
                    }
                }

                function x(t, n) {
                    var o = e.distanceSqToPoint(t);
                    if (o < u) {
                        var c = e.closestPointToPoint(t);
                        c.applyMatrix4(s);
                        var h = r.ray.origin.distanceTo(c);
                        if (h < r.near || h > r.far) return;
                        i.push({
                            distance: h,
                            distanceToRay: Math.sqrt(o),
                            point: c.clone(),
                            index: n,
                            face: null,
                            object: a
                        })
                    }
                }
            }
        }(), clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });

    function Br() {
        Tn.call(this), this.type = "Group"
    }

    Br.prototype = Object.assign(Object.create(Tn.prototype), {constructor: Br, isGroup: !0});

    function Fr(t, e, n, r, i, a, o, s, c) {
        ue.call(this, t, e, n, r, i, a, o, s, c), this.generateMipmaps = !1;
        var h = this;
        t.addEventListener("loadeddata", function e() {
            t.removeEventListener("loadeddata", e, !1), h.needsUpdate = !0
        }, !1)
    }

    Fr.prototype = Object.assign(Object.create(ue.prototype), {
        constructor: Fr,
        isVideoTexture: !0,
        update: function () {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    });

    function kr(t, e, n, r, i, a, o, s, c, h, u, l) {
        ue.call(this, null, a, o, s, c, h, r, i, u, l), this.image = {
            width: e,
            height: n
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }

    kr.prototype = Object.create(ue.prototype), kr.prototype.constructor = kr, kr.prototype.isCompressedTexture = !0;

    function Gr(t, e, n, r, i, a, o, s, c, h) {
        if ((h = void 0 !== h ? h : Nt) !== Nt && h !== Ot) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && h === Nt && (n = vt), void 0 === n && h === Ot && (n = Tt), ue.call(this, null, r, i, a, o, s, h, n, c), this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== o ? o : ct, this.minFilter = void 0 !== s ? s : ct, this.flipY = !1, this.generateMipmaps = !1
    }

    Gr.prototype = Object.create(ue.prototype), Gr.prototype.constructor = Gr, Gr.prototype.isDepthTexture = !0;

    function Hr(t) {
        jn.call(this), this.type = "WireframeGeometry";
        var e, n, r, i, a, o, s, c, h, u, l = [], f = [0, 0], d = {}, p = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var m = t.faces;
            for (e = 0, r = m.length; e < r; e++) {
                var g = m[e];
                for (n = 0; n < 3; n++) s = g[p[n]], c = g[p[(n + 1) % 3]], f[0] = Math.min(s, c), f[1] = Math.max(s, c), void 0 === d[h = f[0] + "," + f[1]] && (d[h] = {
                    index1: f[0],
                    index2: f[1]
                })
            }
            for (h in d) o = d[h], u = t.vertices[o.index1], l.push(u.x, u.y, u.z), u = t.vertices[o.index2], l.push(u.x, u.y, u.z)
        } else if (t && t.isBufferGeometry) {
            var v, y, b, x, w, _, M;
            if (u = new se, null !== t.index) {
                for (v = t.attributes.position, y = t.index, 0 === (b = t.groups).length && (b = [{
                    start: 0,
                    count: y.count,
                    materialIndex: 0
                }]), i = 0, a = b.length; i < a; ++i) for (e = w = (x = b[i]).start, r = w + x.count; e < r; e += 3) for (n = 0; n < 3; n++) s = y.getX(e + n), c = y.getX(e + (n + 1) % 3), f[0] = Math.min(s, c), f[1] = Math.max(s, c), void 0 === d[h = f[0] + "," + f[1]] && (d[h] = {
                    index1: f[0],
                    index2: f[1]
                });
                for (h in d) o = d[h], u.fromBufferAttribute(v, o.index1), l.push(u.x, u.y, u.z), u.fromBufferAttribute(v, o.index2), l.push(u.x, u.y, u.z)
            } else for (e = 0, r = (v = t.attributes.position).count / 3; e < r; e++) for (n = 0; n < 3; n++) _ = 3 * e + n, u.fromBufferAttribute(v, _), l.push(u.x, u.y, u.z), M = 3 * e + (n + 1) % 3, u.fromBufferAttribute(v, M), l.push(u.x, u.y, u.z)
        }
        this.addAttribute("position", new Fn(l, 3))
    }

    Hr.prototype = Object.create(jn.prototype), Hr.prototype.constructor = Hr;

    function Vr(t, e, n) {
        Pn.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: n
        }, this.fromBufferGeometry(new jr(t, e, n)), this.mergeVertices()
    }

    Vr.prototype = Object.create(Pn.prototype), Vr.prototype.constructor = Vr;

    function jr(t, e, n) {
        jn.call(this), this.type = "ParametricBufferGeometry", this.parameters = {func: t, slices: e, stacks: n};
        var r, i, a = [], o = [], s = [], c = [], h = new se, u = new se, l = new se, f = new se, d = new se, p = e + 1;
        for (r = 0; r <= n; r++) {
            var m = r / n;
            for (i = 0; i <= e; i++) {
                var g = i / e;
                u = t(g, m, u), o.push(u.x, u.y, u.z), g - 1e-5 >= 0 ? (l = t(g - 1e-5, m, l), f.subVectors(u, l)) : (l = t(g + 1e-5, m, l), f.subVectors(l, u)), m - 1e-5 >= 0 ? (l = t(g, m - 1e-5, l), d.subVectors(u, l)) : (l = t(g, m + 1e-5, l), d.subVectors(l, u)), h.crossVectors(f, d).normalize(), s.push(h.x, h.y, h.z), c.push(g, m)
            }
        }
        for (r = 0; r < n; r++) for (i = 0; i < e; i++) {
            var v = r * p + i, y = r * p + i + 1, b = (r + 1) * p + i + 1, x = (r + 1) * p + i;
            a.push(v, y, x), a.push(y, b, x)
        }
        this.setIndex(a), this.addAttribute("position", new Fn(o, 3)), this.addAttribute("normal", new Fn(s, 3)), this.addAttribute("uv", new Fn(c, 2))
    }

    jr.prototype = Object.create(jn.prototype), jr.prototype.constructor = jr;

    function Wr(t, e, n, r) {
        Pn.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: r
        }, this.fromBufferGeometry(new qr(t, e, n, r)), this.mergeVertices()
    }

    Wr.prototype = Object.create(Pn.prototype), Wr.prototype.constructor = Wr;

    function qr(t, e, n, r) {
        jn.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: r
        }, n = n || 1;
        var i = [], a = [];
        !function (t) {
            for (var n = new se, r = new se, i = new se, a = 0; a < e.length; a += 3) c(e[a + 0], n), c(e[a + 1], r), c(e[a + 2], i), o(n, r, i, t)
        }(r = r || 0), function (t) {
            for (var e = new se, n = 0; n < i.length; n += 3) e.x = i[n + 0], e.y = i[n + 1], e.z = i[n + 2], e.normalize().multiplyScalar(t), i[n + 0] = e.x, i[n + 1] = e.y, i[n + 2] = e.z
        }(n), function () {
            for (var t = new se, e = 0; e < i.length; e += 3) {
                t.x = i[e + 0], t.y = i[e + 1], t.z = i[e + 2];
                var n = u(t) / 2 / Math.PI + .5,
                    r = (o = t, Math.atan2(-o.y, Math.sqrt(o.x * o.x + o.z * o.z)) / Math.PI + .5);
                a.push(n, 1 - r)
            }
            var o;
            (function () {
                for (var t = new se, e = new se, n = new se, r = new se, o = new ie, s = new ie, c = new ie, l = 0, f = 0; l < i.length; l += 9, f += 6) {
                    t.set(i[l + 0], i[l + 1], i[l + 2]), e.set(i[l + 3], i[l + 4], i[l + 5]), n.set(i[l + 6], i[l + 7], i[l + 8]), o.set(a[f + 0], a[f + 1]), s.set(a[f + 2], a[f + 3]), c.set(a[f + 4], a[f + 5]), r.copy(t).add(e).add(n).divideScalar(3);
                    var d = u(r);
                    h(o, f + 0, t, d), h(s, f + 2, e, d), h(c, f + 4, n, d)
                }
            })(), function () {
                for (var t = 0; t < a.length; t += 6) {
                    var e = a[t + 0], n = a[t + 2], r = a[t + 4], i = Math.max(e, n, r), o = Math.min(e, n, r);
                    i > .9 && o < .1 && (e < .2 && (a[t + 0] += 1), n < .2 && (a[t + 2] += 1), r < .2 && (a[t + 4] += 1))
                }
            }()
        }(), this.addAttribute("position", new Fn(i, 3)), this.addAttribute("normal", new Fn(i.slice(), 3)), this.addAttribute("uv", new Fn(a, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals();

        function o(t, e, n, r) {
            var i, a, o = Math.pow(2, r), c = [];
            for (i = 0; i <= o; i++) {
                c[i] = [];
                var h = t.clone().lerp(n, i / o), u = e.clone().lerp(n, i / o), l = o - i;
                for (a = 0; a <= l; a++) c[i][a] = 0 === a && i === o ? h : h.clone().lerp(u, a / l)
            }
            for (i = 0; i < o; i++) for (a = 0; a < 2 * (o - i) - 1; a++) {
                var f = Math.floor(a / 2);
                a % 2 == 0 ? (s(c[i][f + 1]), s(c[i + 1][f]), s(c[i][f])) : (s(c[i][f + 1]), s(c[i + 1][f + 1]), s(c[i + 1][f]))
            }
        }

        function s(t) {
            i.push(t.x, t.y, t.z)
        }

        function c(e, n) {
            var r = 3 * e;
            n.x = t[r + 0], n.y = t[r + 1], n.z = t[r + 2]
        }

        function h(t, e, n, r) {
            r < 0 && 1 === t.x && (a[e] = t.x - 1), 0 === n.x && 0 === n.z && (a[e] = r / 2 / Math.PI + .5)
        }

        function u(t) {
            return Math.atan2(t.z, -t.x)
        }
    }

    qr.prototype = Object.create(jn.prototype), qr.prototype.constructor = qr;

    function Xr(t, e) {
        Pn.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Yr(t, e)), this.mergeVertices()
    }

    Xr.prototype = Object.create(Pn.prototype), Xr.prototype.constructor = Xr;

    function Yr(t, e) {
        qr.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    Yr.prototype = Object.create(qr.prototype), Yr.prototype.constructor = Yr;

    function Zr(t, e) {
        Pn.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Jr(t, e)), this.mergeVertices()
    }

    Zr.prototype = Object.create(Pn.prototype), Zr.prototype.constructor = Zr;

    function Jr(t, e) {
        qr.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    Jr.prototype = Object.create(qr.prototype), Jr.prototype.constructor = Jr;

    function Qr(t, e) {
        Pn.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Kr(t, e)), this.mergeVertices()
    }

    Qr.prototype = Object.create(Pn.prototype), Qr.prototype.constructor = Qr;

    function Kr(t, e) {
        var n = (1 + Math.sqrt(5)) / 2,
            r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
        qr.call(this, r, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    Kr.prototype = Object.create(qr.prototype), Kr.prototype.constructor = Kr;

    function $r(t, e) {
        Pn.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new ti(t, e)), this.mergeVertices()
    }

    $r.prototype = Object.create(Pn.prototype), $r.prototype.constructor = $r;

    function ti(t, e) {
        var n = (1 + Math.sqrt(5)) / 2, r = 1 / n,
            i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r];
        qr.call(this, i, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    ti.prototype = Object.create(qr.prototype), ti.prototype.constructor = ti;

    function ei(t, e, n, r, i, a) {
        Pn.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: r,
            closed: i
        }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
        var o = new ni(t, e, n, r, i);
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
    }

    ei.prototype = Object.create(Pn.prototype), ei.prototype.constructor = ei;

    function ni(t, e, n, r, i) {
        jn.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: r,
            closed: i
        }, e = e || 64, n = n || 1, r = r || 8, i = i || !1;
        var a = t.computeFrenetFrames(e, i);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
        var o, s, c = new se, h = new se, u = new ie, l = new se, f = [], d = [], p = [], m = [];
        !function () {
            for (o = 0; o < e; o++) g(o);
            g(!1 === i ? e : 0), function () {
                for (o = 0; o <= e; o++) for (s = 0; s <= r; s++) u.x = o / e, u.y = s / r, p.push(u.x, u.y)
            }(), function () {
                for (s = 1; s <= e; s++) for (o = 1; o <= r; o++) {
                    var t = (r + 1) * (s - 1) + (o - 1), n = (r + 1) * s + (o - 1), i = (r + 1) * s + o,
                        a = (r + 1) * (s - 1) + o;
                    m.push(t, n, a), m.push(n, i, a)
                }
            }()
        }(), this.setIndex(m), this.addAttribute("position", new Fn(f, 3)), this.addAttribute("normal", new Fn(d, 3)), this.addAttribute("uv", new Fn(p, 2));

        function g(i) {
            l = t.getPointAt(i / e, l);
            var o = a.normals[i], u = a.binormals[i];
            for (s = 0; s <= r; s++) {
                var p = s / r * Math.PI * 2, m = Math.sin(p), g = -Math.cos(p);
                h.x = g * o.x + m * u.x, h.y = g * o.y + m * u.y, h.z = g * o.z + m * u.z, h.normalize(), d.push(h.x, h.y, h.z), c.x = l.x + n * h.x, c.y = l.y + n * h.y, c.z = l.z + n * h.z, f.push(c.x, c.y, c.z)
            }
        }
    }

    ni.prototype = Object.create(jn.prototype), ni.prototype.constructor = ni;

    function ri(t, e, n, r, i, a, o) {
        Pn.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: r,
            p: i,
            q: a
        }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new ii(t, e, n, r, i, a)), this.mergeVertices()
    }

    ri.prototype = Object.create(Pn.prototype), ri.prototype.constructor = ri;

    function ii(t, e, n, r, i, a) {
        jn.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: r,
            p: i,
            q: a
        }, t = t || 1, e = e || .4, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, a = a || 3;
        var o, s, c = [], h = [], u = [], l = [], f = new se, d = new se, p = new se, m = new se, g = new se,
            v = new se, y = new se;
        for (o = 0; o <= n; ++o) {
            var b = o / n * i * Math.PI * 2;
            for (A(b, i, a, t, p), A(b + .01, i, a, t, m), v.subVectors(m, p), y.addVectors(m, p), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= r; ++s) {
                var x = s / r * Math.PI * 2, w = -e * Math.cos(x), _ = e * Math.sin(x);
                f.x = p.x + (w * y.x + _ * g.x), f.y = p.y + (w * y.y + _ * g.y), f.z = p.z + (w * y.z + _ * g.z), h.push(f.x, f.y, f.z), d.subVectors(f, p).normalize(), u.push(d.x, d.y, d.z), l.push(o / n), l.push(s / r)
            }
        }
        for (s = 1; s <= n; s++) for (o = 1; o <= r; o++) {
            var M = (r + 1) * (s - 1) + (o - 1), E = (r + 1) * s + (o - 1), T = (r + 1) * s + o,
                S = (r + 1) * (s - 1) + o;
            c.push(M, E, S), c.push(E, T, S)
        }
        this.setIndex(c), this.addAttribute("position", new Fn(h, 3)), this.addAttribute("normal", new Fn(u, 3)), this.addAttribute("uv", new Fn(l, 2));

        function A(t, e, n, r, i) {
            var a = Math.cos(t), o = Math.sin(t), s = n / e * t, c = Math.cos(s);
            i.x = r * (2 + c) * .5 * a, i.y = r * (2 + c) * o * .5, i.z = r * Math.sin(s) * .5
        }
    }

    ii.prototype = Object.create(jn.prototype), ii.prototype.constructor = ii;

    function ai(t, e, n, r, i) {
        Pn.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        }, this.fromBufferGeometry(new oi(t, e, n, r, i)), this.mergeVertices()
    }

    ai.prototype = Object.create(Pn.prototype), ai.prototype.constructor = ai;

    function oi(t, e, n, r, i) {
        jn.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        }, t = t || 1, e = e || .4, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || 2 * Math.PI;
        var a, o, s = [], c = [], h = [], u = [], l = new se, f = new se, d = new se;
        for (a = 0; a <= n; a++) for (o = 0; o <= r; o++) {
            var p = o / r * i, m = a / n * Math.PI * 2;
            f.x = (t + e * Math.cos(m)) * Math.cos(p), f.y = (t + e * Math.cos(m)) * Math.sin(p), f.z = e * Math.sin(m), c.push(f.x, f.y, f.z), l.x = t * Math.cos(p), l.y = t * Math.sin(p), d.subVectors(f, l).normalize(), h.push(d.x, d.y, d.z), u.push(o / r), u.push(a / n)
        }
        for (a = 1; a <= n; a++) for (o = 1; o <= r; o++) {
            var g = (r + 1) * a + o - 1, v = (r + 1) * (a - 1) + o - 1, y = (r + 1) * (a - 1) + o, b = (r + 1) * a + o;
            s.push(g, v, b), s.push(v, y, b)
        }
        this.setIndex(s), this.addAttribute("position", new Fn(c, 3)), this.addAttribute("normal", new Fn(h, 3)), this.addAttribute("uv", new Fn(u, 2))
    }

    oi.prototype = Object.create(jn.prototype), oi.prototype.constructor = oi;
    var si = function (t, e, n) {
        n = n || 2;
        var r = e && e.length, i = r ? e[0] * n : t.length, a = ci(t, 0, i, n, !0), o = [];
        if (!a) return o;
        var s, c, h, u, l, f, d;
        if (r && (a = function (t, e, n, r) {
                var i, a, o, s, c, h = [];
                for (i = 0, a = e.length; i < a; i++) o = e[i] * r, s = i < a - 1 ? e[i + 1] * r : t.length, (c = ci(t, o, s, r, !1)) === c.next && (c.steiner = !0), h.push(yi(c));
                for (h.sort(mi), i = 0; i < h.length; i++) gi(h[i], n), n = hi(n, n.next);
                return n
            }(t, e, a, n)), t.length > 80 * n) {
            s = h = t[0], c = u = t[1];
            for (var p = n; p < i; p += n) l = t[p], f = t[p + 1], l < s && (s = l), f < c && (c = f), l > h && (h = l), f > u && (u = f);
            d = 0 !== (d = Math.max(h - s, u - c)) ? 1 / d : 0
        }
        return ui(a, o, n, s, c, d), o
    };

    function ci(t, e, n, r, i) {
        var a, o;
        if (i === function (t, e, n, r) {
                for (var i = 0, a = e, o = n - r; a < n; a += r) i += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
                return i
            }(t, e, n, r) > 0) for (a = e; a < n; a += r) o = Ti(a, t[a], t[a + 1], o); else for (a = n - r; a >= e; a -= r) o = Ti(a, t[a], t[a + 1], o);
        return o && wi(o, o.next) && (Si(o), o = o.next), o
    }

    function hi(t, e) {
        if (!t) return t;
        e || (e = t);
        var n, r = t;
        do {
            if (n = !1, r.steiner || !wi(r, r.next) && 0 !== xi(r.prev, r, r.next)) r = r.next; else {
                if (Si(r), (r = e = r.prev) === r.next) break;
                n = !0
            }
        } while (n || r !== e);
        return e
    }

    function ui(t, e, n, r, i, a, o) {
        if (t) {
            !o && a && function (t, e, n, r) {
                var i = t;
                do {
                    null === i.z && (i.z = vi(i.x, i.y, e, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
                } while (i !== t);
                i.prevZ.nextZ = null, i.prevZ = null, function (t) {
                    var e, n, r, i, a, o, s, c, h = 1;
                    do {
                        for (n = t, t = null, a = null, o = 0; n;) {
                            for (o++, r = n, s = 0, e = 0; e < h && (s++, r = r.nextZ); e++) ;
                            for (c = h; s > 0 || c > 0 && r;) 0 !== s && (0 === c || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, c--), a ? a.nextZ = i : t = i, i.prevZ = a, a = i;
                            n = r
                        }
                        a.nextZ = null, h *= 2
                    } while (o > 1)
                }(i)
            }(t, r, i, a);
            for (var s, c, h = t; t.prev !== t.next;) if (s = t.prev, c = t.next, a ? fi(t, r, i, a) : li(t)) e.push(s.i / n), e.push(t.i / n), e.push(c.i / n), Si(t), t = c.next, h = c.next; else if ((t = c) === h) {
                o ? 1 === o ? ui(t = di(t, e, n), e, n, r, i, a, 2) : 2 === o && pi(t, e, n, r, i, a) : ui(hi(t), e, n, r, i, a, 1);
                break
            }
        }
    }

    function li(t) {
        var e = t.prev, n = t, r = t.next;
        if (xi(e, n, r) >= 0) return !1;
        for (var i = t.next.next; i !== t.prev;) {
            if (bi(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && xi(i.prev, i, i.next) >= 0) return !1;
            i = i.next
        }
        return !0
    }

    function fi(t, e, n, r) {
        var i = t.prev, a = t, o = t.next;
        if (xi(i, a, o) >= 0) return !1;
        for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, c = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, h = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, l = vi(s, c, e, n, r), f = vi(h, u, e, n, r), d = t.nextZ; d && d.z <= f;) {
            if (d !== t.prev && d !== t.next && bi(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && xi(d.prev, d, d.next) >= 0) return !1;
            d = d.nextZ
        }
        for (d = t.prevZ; d && d.z >= l;) {
            if (d !== t.prev && d !== t.next && bi(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && xi(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ
        }
        return !0
    }

    function di(t, e, n) {
        var r = t;
        do {
            var i = r.prev, a = r.next.next;
            !wi(i, a) && _i(i, r, r.next, a) && Mi(i, a) && Mi(a, i) && (e.push(i.i / n), e.push(r.i / n), e.push(a.i / n), Si(r), Si(r.next), r = t = a), r = r.next
        } while (r !== t);
        return r
    }

    function pi(t, e, n, r, i, a) {
        var o = t;
        do {
            for (var s = o.next.next; s !== o.prev;) {
                if (o.i !== s.i && (h = o, u = s, h.next.i !== u.i && h.prev.i !== u.i && !function (t, e) {
                        var n = t;
                        do {
                            if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && _i(n, n.next, t, e)) return !0;
                            n = n.next
                        } while (n !== t);
                        return !1
                    }(h, u) && Mi(h, u) && Mi(u, h) && function (t, e) {
                        var n = t, r = !1, i = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
                        do {
                            n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next
                        } while (n !== t);
                        return r
                    }(h, u))) {
                    var c = Ei(o, s);
                    return o = hi(o, o.next), c = hi(c, c.next), ui(o, e, n, r, i, a), void ui(c, e, n, r, i, a)
                }
                s = s.next
            }
            o = o.next
        } while (o !== t);
        var h, u
    }

    function mi(t, e) {
        return t.x - e.x
    }

    function gi(t, e) {
        if (e = function (t, e) {
                var n, r = e, i = t.x, a = t.y, o = -1 / 0;
                do {
                    if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
                        var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (s <= i && s > o) {
                            if (o = s, s === i) {
                                if (a === r.y) return r;
                                if (a === r.next.y) return r.next
                            }
                            n = r.x < r.next.x ? r : r.next
                        }
                    }
                    r = r.next
                } while (r !== e);
                if (!n) return null;
                if (i === o) return n.prev;
                var c, h = n, u = n.x, l = n.y, f = 1 / 0;
                r = n.next;
                for (; r !== h;) i >= r.x && r.x >= u && i !== r.x && bi(a < l ? i : o, a, u, l, a < l ? o : i, a, r.x, r.y) && ((c = Math.abs(a - r.y) / (i - r.x)) < f || c === f && r.x > n.x) && Mi(r, t) && (n = r, f = c), r = r.next;
                return n
            }(t, e)) {
            var n = Ei(e, t);
            hi(n, n.next)
        }
    }

    function vi(t, e, n, r, i) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }

    function yi(t) {
        var e = t, n = t;
        do {
            e.x < n.x && (n = e), e = e.next
        } while (e !== t);
        return n
    }

    function bi(t, e, n, r, i, a, o, s) {
        return (i - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (r - s) - (n - o) * (e - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0
    }

    function xi(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }

    function wi(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function _i(t, e, n, r) {
        return !!(wi(t, e) && wi(n, r) || wi(t, r) && wi(n, e)) || xi(t, e, n) > 0 != xi(t, e, r) > 0 && xi(n, r, t) > 0 != xi(n, r, e) > 0
    }

    function Mi(t, e) {
        return xi(t.prev, t, t.next) < 0 ? xi(t, e, t.next) >= 0 && xi(t, t.prev, e) >= 0 : xi(t, e, t.prev) < 0 || xi(t, t.next, e) < 0
    }

    function Ei(t, e) {
        var n = new Ai(t.i, t.x, t.y), r = new Ai(e.i, e.x, e.y), i = t.next, a = e.prev;
        return t.next = e, e.prev = t, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r
    }

    function Ti(t, e, n, r) {
        var i = new Ai(t, e, n);
        return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
    }

    function Si(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function Ai(t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    var Li = {
        area: function (t) {
            for (var e = t.length, n = 0, r = e - 1, i = 0; i < e; r = i++) n += t[r].x * t[i].y - t[i].x * t[r].y;
            return .5 * n
        }, isClockWise: function (t) {
            return Li.area(t) < 0
        }, triangulateShape: function (t, e) {
            function n(t) {
                var e = t.length;
                e > 2 && t[e - 1].equals(t[0]) && t.pop()
            }

            function r(t, e) {
                for (var n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
            }

            var i = [], a = [], o = [];
            n(t), r(i, t);
            var s = t.length;
            for (e.forEach(n), h = 0; h < e.length; h++) a.push(s), s += e[h].length, r(i, e[h]);
            for (var c = si(i, a), h = 0; h < c.length; h += 3) o.push(c.slice(h, h + 3));
            return o
        }
    };

    function Ri(t, e) {
        Pn.call(this), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: t,
            options: e
        }, this.fromBufferGeometry(new Pi(t, e)), this.mergeVertices()
    }

    Ri.prototype = Object.create(Pn.prototype), Ri.prototype.constructor = Ri;

    function Pi(t, e) {
        void 0 !== t && (jn.call(this), this.type = "ExtrudeBufferGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), this.computeVertexNormals())
    }

    Pi.prototype = Object.create(jn.prototype), Pi.prototype.constructor = Pi, Pi.prototype.getArrays = function () {
        var t = this.getAttribute("position"), e = t ? Array.prototype.slice.call(t.array) : [],
            n = this.getAttribute("uv"), r = n ? Array.prototype.slice.call(n.array) : [], i = this.index;
        return {position: e, uv: r, index: i ? Array.prototype.slice.call(i.array) : []}
    }, Pi.prototype.addShapeList = function (t, e) {
        var n = t.length;
        e.arrays = this.getArrays();
        for (var r = 0; r < n; r++) {
            var i = t[r];
            this.addShape(i, e)
        }
        this.setIndex(e.arrays.index), this.addAttribute("position", new Fn(e.arrays.position, 3)), this.addAttribute("uv", new Fn(e.arrays.uv, 2))
    }, Pi.prototype.addShape = function (t, e) {
        var n, r, i, a, o, s = e.arrays ? e.arrays : this.getArrays(), c = s.position, h = s.index, u = s.uv, l = [],
            f = void 0 !== e.amount ? e.amount : 100, d = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            p = void 0 !== e.bevelSize ? e.bevelSize : d - 2, m = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            g = void 0 === e.bevelEnabled || e.bevelEnabled, v = void 0 !== e.curveSegments ? e.curveSegments : 12,
            y = void 0 !== e.steps ? e.steps : 1, b = e.extrudePath, x = !1,
            w = void 0 !== e.UVGenerator ? e.UVGenerator : Ri.WorldUVGenerator;
        b && (n = b.getSpacedPoints(y), x = !0, g = !1, r = void 0 !== e.frames ? e.frames : b.computeFrenetFrames(y, !1), i = new se, a = new se, o = new se), g || (m = 0, d = 0, p = 0);
        var _, M, E, T = this, S = t.extractPoints(v), A = S.shape, L = S.holes;
        if (!Li.isClockWise(A)) for (A = A.reverse(), M = 0, E = L.length; M < E; M++) _ = L[M], Li.isClockWise(_) && (L[M] = _.reverse());
        var R = Li.triangulateShape(A, L), P = A;
        for (M = 0, E = L.length; M < E; M++) _ = L[M], A = A.concat(_);

        function C(t, e, n) {
            return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
        }

        var N, O, I, D, U, z, B = A.length, F = R.length;

        function k(t, e, n) {
            var r, i, a, o = t.x - e.x, s = t.y - e.y, c = n.x - t.x, h = n.y - t.y, u = o * o + s * s,
                l = o * h - s * c;
            if (Math.abs(l) > Number.EPSILON) {
                var f = Math.sqrt(u), d = Math.sqrt(c * c + h * h), p = e.x - s / f, m = e.y + o / f,
                    g = ((n.x - h / d - p) * h - (n.y + c / d - m) * c) / (o * h - s * c),
                    v = (r = p + o * g - t.x) * r + (i = m + s * g - t.y) * i;
                if (v <= 2) return new ie(r, i);
                a = Math.sqrt(v / 2)
            } else {
                var y = !1;
                o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0), y ? (r = -s, i = o, a = Math.sqrt(u)) : (r = o, i = s, a = Math.sqrt(u / 2))
            }
            return new ie(r / a, i / a)
        }

        for (var G = [], H = 0, V = P.length, j = V - 1, W = H + 1; H < V; H++, j++, W++) j === V && (j = 0), W === V && (W = 0), G[H] = k(P[H], P[j], P[W]);
        var q, X = [], Y = G.concat();
        for (M = 0, E = L.length; M < E; M++) {
            for (_ = L[M], q = [], H = 0, j = (V = _.length) - 1, W = H + 1; H < V; H++, j++, W++) j === V && (j = 0), W === V && (W = 0), q[H] = k(_[H], _[j], _[W]);
            X.push(q), Y = Y.concat(q)
        }
        for (N = 0; N < m; N++) {
            for (I = N / m, D = d * Math.cos(I * Math.PI / 2), O = p * Math.sin(I * Math.PI / 2), H = 0, V = P.length; H < V; H++) Q((U = C(P[H], G[H], O)).x, U.y, -D);
            for (M = 0, E = L.length; M < E; M++) for (_ = L[M], q = X[M], H = 0, V = _.length; H < V; H++) Q((U = C(_[H], q[H], O)).x, U.y, -D)
        }
        for (O = p, H = 0; H < B; H++) U = g ? C(A[H], Y[H], O) : A[H], x ? (a.copy(r.normals[0]).multiplyScalar(U.x), i.copy(r.binormals[0]).multiplyScalar(U.y), o.copy(n[0]).add(a).add(i), Q(o.x, o.y, o.z)) : Q(U.x, U.y, 0);
        var Z;
        for (Z = 1; Z <= y; Z++) for (H = 0; H < B; H++) U = g ? C(A[H], Y[H], O) : A[H], x ? (a.copy(r.normals[Z]).multiplyScalar(U.x), i.copy(r.binormals[Z]).multiplyScalar(U.y), o.copy(n[Z]).add(a).add(i), Q(o.x, o.y, o.z)) : Q(U.x, U.y, f / y * Z);
        for (N = m - 1; N >= 0; N--) {
            for (I = N / m, D = d * Math.cos(I * Math.PI / 2), O = p * Math.sin(I * Math.PI / 2), H = 0, V = P.length; H < V; H++) Q((U = C(P[H], G[H], O)).x, U.y, f + D);
            for (M = 0, E = L.length; M < E; M++) for (_ = L[M], q = X[M], H = 0, V = _.length; H < V; H++) U = C(_[H], q[H], O), x ? Q(U.x, U.y + n[y - 1].y, n[y - 1].x + D) : Q(U.x, U.y, f + D)
        }
        !function () {
            var t = c.length / 3;
            if (g) {
                var n = 0, r = B * n;
                for (H = 0; H < F; H++) K((z = R[H])[2] + r, z[1] + r, z[0] + r);
                for (r = B * (n = y + 2 * m), H = 0; H < F; H++) K((z = R[H])[0] + r, z[1] + r, z[2] + r)
            } else {
                for (H = 0; H < F; H++) K((z = R[H])[2], z[1], z[0]);
                for (H = 0; H < F; H++) K((z = R[H])[0] + B * y, z[1] + B * y, z[2] + B * y)
            }
            T.addGroup(t, c.length / 3 - t, void 0 !== e.material ? e.material : 0)
        }(), function () {
            var t = c.length / 3, n = 0;
            for (J(P, n), n += P.length, M = 0, E = L.length; M < E; M++) J(_ = L[M], n), n += _.length;
            T.addGroup(t, c.length / 3 - t, void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1)
        }();

        function J(t, e) {
            var n, r;
            for (H = t.length; --H >= 0;) {
                n = H, (r = H - 1) < 0 && (r = t.length - 1);
                var i = 0, a = y + 2 * m;
                for (i = 0; i < a; i++) {
                    var o = B * i, s = B * (i + 1);
                    $(e + n + o, e + r + o, e + r + s, e + n + s)
                }
            }
        }

        function Q(t, e, n) {
            l.push(t), l.push(e), l.push(n)
        }

        function K(t, e, n) {
            tt(t), tt(e), tt(n);
            var r = c.length / 3, i = w.generateTopUV(T, c, r - 3, r - 2, r - 1);
            et(i[0]), et(i[1]), et(i[2])
        }

        function $(t, e, n, r) {
            tt(t), tt(e), tt(r), tt(e), tt(n), tt(r);
            var i = c.length / 3, a = w.generateSideWallUV(T, c, i - 6, i - 3, i - 2, i - 1);
            et(a[0]), et(a[1]), et(a[3]), et(a[1]), et(a[2]), et(a[3])
        }

        function tt(t) {
            h.push(c.length / 3), c.push(l[3 * t + 0]), c.push(l[3 * t + 1]), c.push(l[3 * t + 2])
        }

        function et(t) {
            u.push(t.x), u.push(t.y)
        }

        e.arrays || (this.setIndex(h), this.addAttribute("position", new Fn(c, 3)), this.addAttribute("uv", new Fn(u, 2)))
    }, Ri.WorldUVGenerator = {
        generateTopUV: function (t, e, n, r, i) {
            var a = e[3 * n], o = e[3 * n + 1], s = e[3 * r], c = e[3 * r + 1], h = e[3 * i], u = e[3 * i + 1];
            return [new ie(a, o), new ie(s, c), new ie(h, u)]
        }, generateSideWallUV: function (t, e, n, r, i, a) {
            var o = e[3 * n], s = e[3 * n + 1], c = e[3 * n + 2], h = e[3 * r], u = e[3 * r + 1], l = e[3 * r + 2],
                f = e[3 * i], d = e[3 * i + 1], p = e[3 * i + 2], m = e[3 * a], g = e[3 * a + 1], v = e[3 * a + 2];
            return Math.abs(s - u) < .01 ? [new ie(o, 1 - c), new ie(h, 1 - l), new ie(f, 1 - p), new ie(m, 1 - v)] : [new ie(s, 1 - c), new ie(u, 1 - l), new ie(d, 1 - p), new ie(g, 1 - v)]
        }
    };

    function Ci(t, e) {
        Pn.call(this), this.type = "TextGeometry", this.parameters = {
            text: t,
            parameters: e
        }, this.fromBufferGeometry(new Ni(t, e)), this.mergeVertices()
    }

    Ci.prototype = Object.create(Pn.prototype), Ci.prototype.constructor = Ci;

    function Ni(t, e) {
        var n = (e = e || {}).font;
        if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Pn;
        var r = n.generateShapes(t, e.size, e.curveSegments);
        e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Pi.call(this, r, e), this.type = "TextBufferGeometry"
    }

    Ni.prototype = Object.create(Pi.prototype), Ni.prototype.constructor = Ni;

    function Oi(t, e, n, r, i, a, o) {
        Pn.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        }, this.fromBufferGeometry(new Ii(t, e, n, r, i, a, o)), this.mergeVertices()
    }

    Oi.prototype = Object.create(Pn.prototype), Oi.prototype.constructor = Oi;

    function Ii(t, e, n, r, i, a, o) {
        jn.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 2 * Math.PI;
        var s, c, h = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI), u = 0, l = [], f = new se,
            d = new se, p = [], m = [], g = [], v = [];
        for (c = 0; c <= n; c++) {
            var y = [], b = c / n;
            for (s = 0; s <= e; s++) {
                var x = s / e;
                f.x = -t * Math.cos(r + x * i) * Math.sin(a + b * o), f.y = t * Math.cos(a + b * o), f.z = t * Math.sin(r + x * i) * Math.sin(a + b * o), m.push(f.x, f.y, f.z), d.set(f.x, f.y, f.z).normalize(), g.push(d.x, d.y, d.z), v.push(x, 1 - b), y.push(u++)
            }
            l.push(y)
        }
        for (c = 0; c < n; c++) for (s = 0; s < e; s++) {
            var w = l[c][s + 1], _ = l[c][s], M = l[c + 1][s], E = l[c + 1][s + 1];
            (0 !== c || a > 0) && p.push(w, _, E), (c !== n - 1 || h < Math.PI) && p.push(_, M, E)
        }
        this.setIndex(p), this.addAttribute("position", new Fn(m, 3)), this.addAttribute("normal", new Fn(g, 3)), this.addAttribute("uv", new Fn(v, 2))
    }

    Ii.prototype = Object.create(jn.prototype), Ii.prototype.constructor = Ii;

    function Di(t, e, n, r, i, a) {
        Pn.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: i,
            thetaLength: a
        }, this.fromBufferGeometry(new Ui(t, e, n, r, i, a)), this.mergeVertices()
    }

    Di.prototype = Object.create(Pn.prototype), Di.prototype.constructor = Di;

    function Ui(t, e, n, r, i, a) {
        jn.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: i,
            thetaLength: a
        }, t = t || .5, e = e || 1, i = void 0 !== i ? i : 0, a = void 0 !== a ? a : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
        var o, s, c, h = [], u = [], l = [], f = [], d = t, p = (e - t) / (r = void 0 !== r ? Math.max(1, r) : 1),
            m = new se, g = new ie;
        for (s = 0; s <= r; s++) {
            for (c = 0; c <= n; c++) o = i + c / n * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), u.push(m.x, m.y, m.z), l.push(0, 0, 1), g.x = (m.x / e + 1) / 2, g.y = (m.y / e + 1) / 2, f.push(g.x, g.y);
            d += p
        }
        for (s = 0; s < r; s++) {
            var v = s * (n + 1);
            for (c = 0; c < n; c++) {
                var y = o = c + v, b = o + n + 1, x = o + n + 2, w = o + 1;
                h.push(y, b, w), h.push(b, x, w)
            }
        }
        this.setIndex(h), this.addAttribute("position", new Fn(u, 3)), this.addAttribute("normal", new Fn(l, 3)), this.addAttribute("uv", new Fn(f, 2))
    }

    Ui.prototype = Object.create(jn.prototype), Ui.prototype.constructor = Ui;

    function zi(t, e, n, r) {
        Pn.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: r
        }, this.fromBufferGeometry(new Bi(t, e, n, r)), this.mergeVertices()
    }

    zi.prototype = Object.create(Pn.prototype), zi.prototype.constructor = zi;

    function Bi(t, e, n, r) {
        jn.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: r
        }, e = Math.floor(e) || 12, n = n || 0, r = r || 2 * Math.PI, r = re.clamp(r, 0, 2 * Math.PI);
        var i, a, o, s = [], c = [], h = [], u = 1 / e, l = new se, f = new ie;
        for (a = 0; a <= e; a++) {
            var d = n + a * u * r, p = Math.sin(d), m = Math.cos(d);
            for (o = 0; o <= t.length - 1; o++) l.x = t[o].x * p, l.y = t[o].y, l.z = t[o].x * m, c.push(l.x, l.y, l.z), f.x = a / e, f.y = o / (t.length - 1), h.push(f.x, f.y)
        }
        for (a = 0; a < e; a++) for (o = 0; o < t.length - 1; o++) {
            var g = i = o + a * t.length, v = i + t.length, y = i + t.length + 1, b = i + 1;
            s.push(g, v, b), s.push(v, y, b)
        }
        if (this.setIndex(s), this.addAttribute("position", new Fn(c, 3)), this.addAttribute("uv", new Fn(h, 2)), this.computeVertexNormals(), r === 2 * Math.PI) {
            var x = this.attributes.normal.array, w = new se, _ = new se, M = new se;
            for (i = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) w.x = x[o + 0], w.y = x[o + 1], w.z = x[o + 2], _.x = x[i + o + 0], _.y = x[i + o + 1], _.z = x[i + o + 2], M.addVectors(w, _).normalize(), x[o + 0] = x[i + o + 0] = M.x, x[o + 1] = x[i + o + 1] = M.y, x[o + 2] = x[i + o + 2] = M.z
        }
    }

    Bi.prototype = Object.create(jn.prototype), Bi.prototype.constructor = Bi;

    function Fi(t, e) {
        Pn.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
            shapes: t,
            curveSegments: e
        }, this.fromBufferGeometry(new ki(t, e)), this.mergeVertices()
    }

    Fi.prototype = Object.create(Pn.prototype), Fi.prototype.constructor = Fi, Fi.prototype.toJSON = function () {
        var t = Pn.prototype.toJSON.call(this);
        return Gi(this.parameters.shapes, t)
    };

    function ki(t, e) {
        jn.call(this), this.type = "ShapeBufferGeometry", this.parameters = {shapes: t, curveSegments: e}, e = e || 12;
        var n = [], r = [], i = [], a = [], o = 0, s = 0;
        if (!1 === Array.isArray(t)) h(t); else for (var c = 0; c < t.length; c++) h(t[c]), this.addGroup(o, s, c), o += s, s = 0;
        this.setIndex(n), this.addAttribute("position", new Fn(r, 3)), this.addAttribute("normal", new Fn(i, 3)), this.addAttribute("uv", new Fn(a, 2));

        function h(t) {
            var o, c, h, u = r.length / 3, l = t.extractPoints(e), f = l.shape, d = l.holes;
            if (!1 === Li.isClockWise(f)) for (f = f.reverse(), o = 0, c = d.length; o < c; o++) h = d[o], !0 === Li.isClockWise(h) && (d[o] = h.reverse());
            var p = Li.triangulateShape(f, d);
            for (o = 0, c = d.length; o < c; o++) h = d[o], f = f.concat(h);
            for (o = 0, c = f.length; o < c; o++) {
                var m = f[o];
                r.push(m.x, m.y, 0), i.push(0, 0, 1), a.push(m.x, m.y)
            }
            for (o = 0, c = p.length; o < c; o++) {
                var g = p[o], v = g[0] + u, y = g[1] + u, b = g[2] + u;
                n.push(v, y, b), s += 3
            }
        }
    }

    ki.prototype = Object.create(jn.prototype), ki.prototype.constructor = ki, ki.prototype.toJSON = function () {
        var t = jn.prototype.toJSON.call(this);
        return Gi(this.parameters.shapes, t)
    };

    function Gi(t, e) {
        if (e.shapes = [], Array.isArray(t)) for (var n = 0, r = t.length; n < r; n++) {
            var i = t[n];
            e.shapes.push(i.uuid)
        } else e.shapes.push(t.uuid);
        return e
    }

    function Hi(t, e) {
        jn.call(this), this.type = "EdgesGeometry", this.parameters = {thresholdAngle: e}, e = void 0 !== e ? e : 1;
        var n, r, i, a, o = [], s = Math.cos(re.DEG2RAD * e), c = [0, 0], h = {}, u = ["a", "b", "c"];
        t.isBufferGeometry ? (a = new Pn).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
        for (var l = a.vertices, f = a.faces, d = 0, p = f.length; d < p; d++) for (var m = f[d], g = 0; g < 3; g++) n = m[u[g]], r = m[u[(g + 1) % 3]], c[0] = Math.min(n, r), c[1] = Math.max(n, r), void 0 === h[i = c[0] + "," + c[1]] ? h[i] = {
            index1: c[0],
            index2: c[1],
            face1: d,
            face2: void 0
        } : h[i].face2 = d;
        for (i in h) {
            var v = h[i];
            if (void 0 === v.face2 || f[v.face1].normal.dot(f[v.face2].normal) <= s) {
                var y = l[v.index1];
                o.push(y.x, y.y, y.z), y = l[v.index2], o.push(y.x, y.y, y.z)
            }
        }
        this.addAttribute("position", new Fn(o, 3))
    }

    Hi.prototype = Object.create(jn.prototype), Hi.prototype.constructor = Hi;

    function Vi(t, e, n, r, i, a, o, s) {
        Pn.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        }, this.fromBufferGeometry(new ji(t, e, n, r, i, a, o, s)), this.mergeVertices()
    }

    Vi.prototype = Object.create(Pn.prototype), Vi.prototype.constructor = Vi;

    function ji(t, e, n, r, i, a, o, s) {
        jn.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        var c = this;
        t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, n = n || 1, r = Math.floor(r) || 8, i = Math.floor(i) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
        var h = [], u = [], l = [], f = [], d = 0, p = [], m = n / 2, g = 0;
        !function () {
            var a, v, y = new se, b = new se, x = 0, w = (e - t) / n;
            for (v = 0; v <= i; v++) {
                var _ = [], M = v / i, E = M * (e - t) + t;
                for (a = 0; a <= r; a++) {
                    var T = a / r, S = T * s + o, A = Math.sin(S), L = Math.cos(S);
                    b.x = E * A, b.y = -M * n + m, b.z = E * L, u.push(b.x, b.y, b.z), y.set(A, w, L).normalize(), l.push(y.x, y.y, y.z), f.push(T, 1 - M), _.push(d++)
                }
                p.push(_)
            }
            for (a = 0; a < r; a++) for (v = 0; v < i; v++) {
                var R = p[v][a], P = p[v + 1][a], C = p[v + 1][a + 1], N = p[v][a + 1];
                h.push(R, P, N), h.push(P, C, N), x += 6
            }
            c.addGroup(g, x, 0), g += x
        }(), !1 === a && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(h), this.addAttribute("position", new Fn(u, 3)), this.addAttribute("normal", new Fn(l, 3)), this.addAttribute("uv", new Fn(f, 2));

        function v(n) {
            var i, a, p, v = new ie, y = new se, b = 0, x = !0 === n ? t : e, w = !0 === n ? 1 : -1;
            for (a = d, i = 1; i <= r; i++) u.push(0, m * w, 0), l.push(0, w, 0), f.push(.5, .5), d++;
            for (p = d, i = 0; i <= r; i++) {
                var _ = i / r * s + o, M = Math.cos(_), E = Math.sin(_);
                y.x = x * E, y.y = m * w, y.z = x * M, u.push(y.x, y.y, y.z), l.push(0, w, 0), v.x = .5 * M + .5, v.y = .5 * E * w + .5, f.push(v.x, v.y), d++
            }
            for (i = 0; i < r; i++) {
                var T = a + i, S = p + i;
                !0 === n ? h.push(S, S + 1, T) : h.push(S + 1, S, T), b += 3
            }
            c.addGroup(g, b, !0 === n ? 1 : 2), g += b
        }
    }

    ji.prototype = Object.create(jn.prototype), ji.prototype.constructor = ji;

    function Wi(t, e, n, r, i, a, o) {
        Vi.call(this, 0, t, e, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: r,
            openEnded: i,
            thetaStart: a,
            thetaLength: o
        }
    }

    Wi.prototype = Object.create(Vi.prototype), Wi.prototype.constructor = Wi;

    function qi(t, e, n, r, i, a, o) {
        ji.call(this, 0, t, e, n, r, i, a, o), this.type = "ConeBufferGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: r,
            openEnded: i,
            thetaStart: a,
            thetaLength: o
        }
    }

    qi.prototype = Object.create(ji.prototype), qi.prototype.constructor = qi;

    function Xi(t, e, n, r) {
        Pn.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: r
        }, this.fromBufferGeometry(new Yi(t, e, n, r)), this.mergeVertices()
    }

    Xi.prototype = Object.create(Pn.prototype), Xi.prototype.constructor = Xi;

    function Yi(t, e, n, r) {
        jn.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: r
        }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var i, a, o = [], s = [], c = [], h = [], u = new se, l = new ie;
        for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, i = 3; a <= e; a++, i += 3) {
            var f = n + a / e * r;
            u.x = t * Math.cos(f), u.y = t * Math.sin(f), s.push(u.x, u.y, u.z), c.push(0, 0, 1), l.x = (s[i] / t + 1) / 2, l.y = (s[i + 1] / t + 1) / 2, h.push(l.x, l.y)
        }
        for (i = 1; i <= e; i++) o.push(i, i + 1, 0);
        this.setIndex(o), this.addAttribute("position", new Fn(s, 3)), this.addAttribute("normal", new Fn(c, 3)), this.addAttribute("uv", new Fn(h, 2))
    }

    Yi.prototype = Object.create(jn.prototype), Yi.prototype.constructor = Yi;
    var Zi = Object.freeze({
        WireframeGeometry: Hr,
        ParametricGeometry: Vr,
        ParametricBufferGeometry: jr,
        TetrahedronGeometry: Xr,
        TetrahedronBufferGeometry: Yr,
        OctahedronGeometry: Zr,
        OctahedronBufferGeometry: Jr,
        IcosahedronGeometry: Qr,
        IcosahedronBufferGeometry: Kr,
        DodecahedronGeometry: $r,
        DodecahedronBufferGeometry: ti,
        PolyhedronGeometry: Wr,
        PolyhedronBufferGeometry: qr,
        TubeGeometry: ei,
        TubeBufferGeometry: ni,
        TorusKnotGeometry: ri,
        TorusKnotBufferGeometry: ii,
        TorusGeometry: ai,
        TorusBufferGeometry: oi,
        TextGeometry: Ci,
        TextBufferGeometry: Ni,
        SphereGeometry: Oi,
        SphereBufferGeometry: Ii,
        RingGeometry: Di,
        RingBufferGeometry: Ui,
        PlaneGeometry: Xn,
        PlaneBufferGeometry: Yn,
        LatheGeometry: zi,
        LatheBufferGeometry: Bi,
        ShapeGeometry: Fi,
        ShapeBufferGeometry: ki,
        ExtrudeGeometry: Ri,
        ExtrudeBufferGeometry: Pi,
        EdgesGeometry: Hi,
        ConeGeometry: Wi,
        ConeBufferGeometry: qi,
        CylinderGeometry: Vi,
        CylinderBufferGeometry: ji,
        CircleGeometry: Xi,
        CircleBufferGeometry: Yi,
        BoxGeometry: Wn,
        BoxBufferGeometry: qn
    });

    function Ji(t) {
        dn.call(this), this.type = "ShadowMaterial", this.color = new nn(0), this.opacity = 1, this.lights = !0, this.transparent = !0, this.setValues(t)
    }

    Ji.prototype = Object.create(dn.prototype), Ji.prototype.constructor = Ji, Ji.prototype.isShadowMaterial = !0;

    function Qi(t) {
        Jn.call(this, t), this.type = "RawShaderMaterial"
    }

    Qi.prototype = Object.create(Jn.prototype), Qi.prototype.constructor = Qi, Qi.prototype.isRawShaderMaterial = !0;

    function Ki(t) {
        dn.call(this), this.defines = {STANDARD: ""}, this.type = "MeshStandardMaterial", this.color = new nn(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new nn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new ie(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    Ki.prototype = Object.create(dn.prototype), Ki.prototype.constructor = Ki, Ki.prototype.isMeshStandardMaterial = !0, Ki.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.defines = {STANDARD: ""}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    };

    function $i(t) {
        Ki.call(this), this.defines = {PHYSICAL: ""}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
    }

    $i.prototype = Object.create(Ki.prototype), $i.prototype.constructor = $i, $i.prototype.isMeshPhysicalMaterial = !0, $i.prototype.copy = function (t) {
        return Ki.prototype.copy.call(this, t), this.defines = {PHYSICAL: ""}, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
    };

    function ta(t) {
        dn.call(this), this.type = "MeshPhongMaterial", this.color = new nn(16777215), this.specular = new nn(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new nn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new ie(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = j, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    ta.prototype = Object.create(dn.prototype), ta.prototype.constructor = ta, ta.prototype.isMeshPhongMaterial = !0, ta.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    };

    function ea(t) {
        ta.call(this), this.defines = {TOON: ""}, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
    }

    ea.prototype = Object.create(ta.prototype), ea.prototype.constructor = ea, ea.prototype.isMeshToonMaterial = !0, ea.prototype.copy = function (t) {
        return ta.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
    };

    function na(t) {
        dn.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new ie(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    na.prototype = Object.create(dn.prototype), na.prototype.constructor = na, na.prototype.isMeshNormalMaterial = !0, na.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    };

    function ra(t) {
        dn.call(this), this.type = "MeshLambertMaterial", this.color = new nn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new nn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = j, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    ra.prototype = Object.create(dn.prototype), ra.prototype.constructor = ra, ra.prototype.isMeshLambertMaterial = !0, ra.prototype.copy = function (t) {
        return dn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    };

    function ia(t) {
        Nr.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
    }

    ia.prototype = Object.create(Nr.prototype), ia.prototype.constructor = ia, ia.prototype.isLineDashedMaterial = !0, ia.prototype.copy = function (t) {
        return Nr.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    };
    var aa = Object.freeze({
        ShadowMaterial: Ji,
        SpriteMaterial: Sr,
        RawShaderMaterial: Qi,
        ShaderMaterial: Jn,
        PointsMaterial: Ur,
        MeshPhysicalMaterial: $i,
        MeshStandardMaterial: Ki,
        MeshPhongMaterial: ta,
        MeshToonMaterial: ea,
        MeshNormalMaterial: na,
        MeshLambertMaterial: ra,
        MeshDepthMaterial: pn,
        MeshDistanceMaterial: mn,
        MeshBasicMaterial: Zn,
        LineDashedMaterial: ia,
        LineBasicMaterial: Nr,
        Material: dn
    }), oa = {
        enabled: !1, files: {}, add: function (t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        }, get: function (t) {
            if (!1 !== this.enabled) return this.files[t]
        }, remove: function (t) {
            delete this.files[t]
        }, clear: function () {
            this.files = {}
        }
    };

    function sa(t, e, n) {
        var r = this, i = !1, a = 0, o = 0, s = void 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
            o++, !1 === i && void 0 !== r.onStart && r.onStart(t, a, o), i = !0
        }, this.itemEnd = function (t) {
            a++, void 0 !== r.onProgress && r.onProgress(t, a, o), a === o && (i = !1, void 0 !== r.onLoad && r.onLoad())
        }, this.itemError = function (t) {
            void 0 !== r.onError && r.onError(t)
        }, this.resolveURL = function (t) {
            return s ? s(t) : t
        }, this.setURLModifier = function (t) {
            return s = t, this
        }
    }

    var ca = new sa, ha = {};

    function ua(t) {
        this.manager = void 0 !== t ? t : ca
    }

    Object.assign(ua.prototype, {
        load: function (t, e, n, r) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var i = this, a = oa.get(t);
            if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function () {
                e && e(a), i.manager.itemEnd(t)
            }, 0), a;
            if (void 0 === ha[t]) {
                var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (o) {
                    var s = o[1], c = !!o[2], h = o[3];
                    h = window.decodeURIComponent(h), c && (h = window.atob(h));
                    try {
                        var u, l = (this.responseType || "").toLowerCase();
                        switch (l) {
                            case"arraybuffer":
                            case"blob":
                                for (var f = new Uint8Array(h.length), d = 0; d < h.length; d++) f[d] = h.charCodeAt(d);
                                u = "blob" === l ? new Blob([f.buffer], {type: s}) : f.buffer;
                                break;
                            case"document":
                                var p = new DOMParser;
                                u = p.parseFromString(h, s);
                                break;
                            case"json":
                                u = JSON.parse(h);
                                break;
                            default:
                                u = h
                        }
                        window.setTimeout(function () {
                            e && e(u), i.manager.itemEnd(t)
                        }, 0)
                    } catch (e) {
                        window.setTimeout(function () {
                            r && r(e), i.manager.itemEnd(t), i.manager.itemError(t)
                        }, 0)
                    }
                } else {
                    ha[t] = [], ha[t].push({onLoad: e, onProgress: n, onError: r});
                    var m = new XMLHttpRequest;
                    m.open("GET", t, !0), m.addEventListener("load", function (e) {
                        var n = this.response;
                        oa.add(t, n);
                        var r = ha[t];
                        if (delete ha[t], 200 === this.status) {
                            for (var a = 0, o = r.length; a < o; a++) {
                                (s = r[a]).onLoad && s.onLoad(n)
                            }
                            i.manager.itemEnd(t)
                        } else if (0 === this.status) {
                            console.warn("THREE.FileLoader: HTTP Status 0 received.");
                            for (a = 0, o = r.length; a < o; a++) {
                                (s = r[a]).onLoad && s.onLoad(n)
                            }
                            i.manager.itemEnd(t)
                        } else {
                            for (a = 0, o = r.length; a < o; a++) {
                                var s;
                                (s = r[a]).onError && s.onError(e)
                            }
                            i.manager.itemEnd(t), i.manager.itemError(t)
                        }
                    }, !1), m.addEventListener("progress", function (e) {
                        for (var n = ha[t], r = 0, i = n.length; r < i; r++) {
                            var a = n[r];
                            a.onProgress && a.onProgress(e)
                        }
                    }, !1), m.addEventListener("error", function (e) {
                        var n = ha[t];
                        delete ha[t];
                        for (var r = 0, a = n.length; r < a; r++) {
                            var o = n[r];
                            o.onError && o.onError(e)
                        }
                        i.manager.itemEnd(t), i.manager.itemError(t)
                    }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                    for (var g in this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
                    m.send(null)
                }
                return i.manager.itemStart(t), m
            }
            ha[t].push({onLoad: e, onProgress: n, onError: r})
        }, setPath: function (t) {
            return this.path = t, this
        }, setResponseType: function (t) {
            return this.responseType = t, this
        }, setWithCredentials: function (t) {
            return this.withCredentials = t, this
        }, setMimeType: function (t) {
            return this.mimeType = t, this
        }, setRequestHeader: function (t) {
            return this.requestHeader = t, this
        }
    });

    function la(t) {
        this.manager = void 0 !== t ? t : ca, this._parser = null
    }

    Object.assign(la.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = [], o = new kr;
            o.image = a;
            var s = new ua(this.manager);
            s.setPath(this.path), s.setResponseType("arraybuffer");

            function c(c) {
                s.load(t[c], function (t) {
                    var n = i._parser(t, !0);
                    a[c] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, 6 === (h += 1) && (1 === n.mipmapCount && (o.minFilter = lt), o.format = n.format, o.needsUpdate = !0, e && e(o))
                }, n, r)
            }

            if (Array.isArray(t)) for (var h = 0, u = 0, l = t.length; u < l; ++u) c(u); else s.load(t, function (t) {
                var n = i._parser(t, !0);
                if (n.isCubemap) for (var r = n.mipmaps.length / n.mipmapCount, s = 0; s < r; s++) {
                    a[s] = {mipmaps: []};
                    for (var c = 0; c < n.mipmapCount; c++) a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), a[s].format = n.format, a[s].width = n.width, a[s].height = n.height
                } else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (o.minFilter = lt), o.format = n.format, o.needsUpdate = !0, e && e(o)
            }, n, r);
            return o
        }, setPath: function (t) {
            return this.path = t, this
        }
    });

    function fa(t) {
        this.manager = void 0 !== t ? t : ca, this._parser = null
    }

    Object.assign(fa.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = new pe, o = new ua(this.manager);
            return o.setResponseType("arraybuffer"), o.load(t, function (t) {
                var n = i._parser(t);
                n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : ot, a.wrapT = void 0 !== n.wrapT ? n.wrapT : ot, a.magFilter = void 0 !== n.magFilter ? n.magFilter : lt, a.minFilter = void 0 !== n.minFilter ? n.minFilter : dt, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps), 1 === n.mipmapCount && (a.minFilter = lt), a.needsUpdate = !0, e && e(a, n))
            }, n, r), a
        }
    });

    function da(t) {
        this.manager = void 0 !== t ? t : ca
    }

    Object.assign(da.prototype, {
        crossOrigin: "Anonymous", load: function (t, e, n, r) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var i = this, a = oa.get(t);
            if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function () {
                e && e(a), i.manager.itemEnd(t)
            }, 0), a;
            var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            return o.addEventListener("load", function () {
                oa.add(t, this), e && e(this), i.manager.itemEnd(t)
            }, !1), o.addEventListener("error", function (e) {
                r && r(e), i.manager.itemEnd(t), i.manager.itemError(t)
            }, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(t), o.src = t, o
        }, setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        }, setPath: function (t) {
            return this.path = t, this
        }
    });

    function pa(t) {
        this.manager = void 0 !== t ? t : ca
    }

    Object.assign(pa.prototype, {
        crossOrigin: "Anonymous", load: function (t, e, n, r) {
            var i = new me, a = new da(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            var o = 0;

            function s(n) {
                a.load(t[n], function (t) {
                    i.images[n] = t, 6 === ++o && (i.needsUpdate = !0, e && e(i))
                }, void 0, r)
            }

            for (var c = 0; c < t.length; ++c) s(c);
            return i
        }, setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        }, setPath: function (t) {
            return this.path = t, this
        }
    });

    function ma(t) {
        this.manager = void 0 !== t ? t : ca
    }

    Object.assign(ma.prototype, {
        crossOrigin: "Anonymous", load: function (t, e, n, r) {
            var i = new ue, a = new da(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function (n) {
                i.image = n;
                var r = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                i.format = r ? At : Lt, i.needsUpdate = !0, void 0 !== e && e(i)
            }, n, r), i
        }, setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        }, setPath: function (t) {
            return this.path = t, this
        }
    });

    function ga() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }

    Object.assign(ga.prototype, {
        getPoint: function () {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null
        }, getPointAt: function (t, e) {
            var n = this.getUtoTmapping(t);
            return this.getPoint(n, e)
        }, getPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return e
        }, getSpacedPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
            return e
        }, getLength: function () {
            var t = this.getLengths();
            return t[t.length - 1]
        }, getLengths: function (t) {
            if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, n, r = [], i = this.getPoint(0), a = 0;
            for (r.push(0), n = 1; n <= t; n++) a += (e = this.getPoint(n / t)).distanceTo(i), r.push(a), i = e;
            return this.cacheArcLengths = r, r
        }, updateArcLengths: function () {
            this.needsUpdate = !0, this.getLengths()
        }, getUtoTmapping: function (t, e) {
            var n, r = this.getLengths(), i = 0, a = r.length;
            n = e || t * r[a - 1];
            for (var o, s = 0, c = a - 1; s <= c;) if ((o = r[i = Math.floor(s + (c - s) / 2)] - n) < 0) s = i + 1; else {
                if (!(o > 0)) {
                    c = i;
                    break
                }
                c = i - 1
            }
            if (r[i = c] === n) return i / (a - 1);
            var h = r[i];
            return (i + (n - h) / (r[i + 1] - h)) / (a - 1)
        }, getTangent: function (t) {
            var e = t - 1e-4, n = t + 1e-4;
            e < 0 && (e = 0), n > 1 && (n = 1);
            var r = this.getPoint(e);
            return this.getPoint(n).clone().sub(r).normalize()
        }, getTangentAt: function (t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        }, computeFrenetFrames: function (t, e) {
            var n, r, i, a = new se, o = [], s = [], c = [], h = new se, u = new ae;
            for (n = 0; n <= t; n++) r = n / t, o[n] = this.getTangentAt(r), o[n].normalize();
            s[0] = new se, c[0] = new se;
            var l = Number.MAX_VALUE, f = Math.abs(o[0].x), d = Math.abs(o[0].y), p = Math.abs(o[0].z);
            for (f <= l && (l = f, a.set(1, 0, 0)), d <= l && (l = d, a.set(0, 1, 0)), p <= l && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), n = 1; n <= t; n++) s[n] = s[n - 1].clone(), c[n] = c[n - 1].clone(), h.crossVectors(o[n - 1], o[n]), h.length() > Number.EPSILON && (h.normalize(), i = Math.acos(re.clamp(o[n - 1].dot(o[n]), -1, 1)), s[n].applyMatrix4(u.makeRotationAxis(h, i))), c[n].crossVectors(o[n], s[n]);
            if (!0 === e) for (i = Math.acos(re.clamp(s[0].dot(s[t]), -1, 1)), i /= t, o[0].dot(h.crossVectors(s[0], s[t])) > 0 && (i = -i), n = 1; n <= t; n++) s[n].applyMatrix4(u.makeRotationAxis(o[n], i * n)), c[n].crossVectors(o[n], s[n]);
            return {tangents: o, normals: s, binormals: c}
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        }, toJSON: function () {
            var t = {metadata: {version: 4.5, type: "Curve", generator: "Curve.toJSON"}};
            return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
        }, fromJSON: function (t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        }
    });

    function va(t, e, n, r, i, a, o, s) {
        ga.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
    }

    va.prototype = Object.create(ga.prototype), va.prototype.constructor = va, va.prototype.isEllipseCurve = !0, va.prototype.getPoint = function (t, e) {
        for (var n = e || new ie, r = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0;) i += r;
        for (; i > r;) i -= r;
        i < Number.EPSILON && (i = a ? 0 : r), !0 !== this.aClockwise || a || (i === r ? i = -r : i -= r);
        var o = this.aStartAngle + t * i, s = this.aX + this.xRadius * Math.cos(o),
            c = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            var h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), l = s - this.aX, f = c - this.aY;
            s = l * h - f * u + this.aX, c = l * u + f * h + this.aY
        }
        return n.set(s, c)
    }, va.prototype.copy = function (t) {
        return ga.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, va.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
    }, va.prototype.fromJSON = function (t) {
        return ga.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    };

    function ya(t, e, n, r, i, a) {
        va.call(this, t, e, n, n, r, i, a), this.type = "ArcCurve"
    }

    ya.prototype = Object.create(va.prototype), ya.prototype.constructor = ya, ya.prototype.isArcCurve = !0;

    function ba() {
        var t = 0, e = 0, n = 0, r = 0;

        function i(i, a, o, s) {
            t = i, e = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s
        }

        return {
            initCatmullRom: function (t, e, n, r, a) {
                i(e, n, a * (n - t), a * (r - e))
            }, initNonuniformCatmullRom: function (t, e, n, r, a, o, s) {
                var c = (e - t) / a - (n - t) / (a + o) + (n - e) / o,
                    h = (n - e) / o - (r - e) / (o + s) + (r - n) / s;
                i(e, n, c *= o, h *= o)
            }, calc: function (i) {
                var a = i * i;
                return t + e * i + n * a + r * (a * i)
            }
        }
    }

    var xa = new se, wa = new ba, _a = new ba, Ma = new ba;

    function Ea(t, e, n, r) {
        ga.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = n || "centripetal", this.tension = r || .5
    }

    Ea.prototype = Object.create(ga.prototype), Ea.prototype.constructor = Ea, Ea.prototype.isCatmullRomCurve3 = !0, Ea.prototype.getPoint = function (t, e) {
        var n = e || new se, r = this.points, i = r.length, a = (i - (this.closed ? 0 : 1)) * t, o = Math.floor(a),
            s = a - o;
        this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r.length) + 1) * r.length : 0 === s && o === i - 1 && (o = i - 2, s = 1);
        var c, h, u, l;
        if (this.closed || o > 0 ? c = r[(o - 1) % i] : (xa.subVectors(r[0], r[1]).add(r[0]), c = xa), h = r[o % i], u = r[(o + 1) % i], this.closed || o + 2 < i ? l = r[(o + 2) % i] : (xa.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), l = xa), "centripetal" === this.curveType || "chordal" === this.curveType) {
            var f = "chordal" === this.curveType ? .5 : .25, d = Math.pow(c.distanceToSquared(h), f),
                p = Math.pow(h.distanceToSquared(u), f), m = Math.pow(u.distanceToSquared(l), f);
            p < 1e-4 && (p = 1), d < 1e-4 && (d = p), m < 1e-4 && (m = p), wa.initNonuniformCatmullRom(c.x, h.x, u.x, l.x, d, p, m), _a.initNonuniformCatmullRom(c.y, h.y, u.y, l.y, d, p, m), Ma.initNonuniformCatmullRom(c.z, h.z, u.z, l.z, d, p, m)
        } else "catmullrom" === this.curveType && (wa.initCatmullRom(c.x, h.x, u.x, l.x, this.tension), _a.initCatmullRom(c.y, h.y, u.y, l.y, this.tension), Ma.initCatmullRom(c.z, h.z, u.z, l.z, this.tension));
        return n.set(wa.calc(s), _a.calc(s), Ma.calc(s)), n
    }, Ea.prototype.copy = function (t) {
        ga.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push(r.clone())
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, Ea.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var r = this.points[e];
            t.points.push(r.toArray())
        }
        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
    }, Ea.prototype.fromJSON = function (t) {
        ga.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push((new se).fromArray(r))
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    };

    function Ta(t, e, n, r, i) {
        var a = .5 * (r - e), o = .5 * (i - n), s = t * t;
        return (2 * n - 2 * r + a + o) * (t * s) + (-3 * n + 3 * r - 2 * a - o) * s + a * t + n
    }

    function Sa(t, e, n, r) {
        return function (t, e) {
            var n = 1 - t;
            return n * n * e
        }(t, e) + (o = t, s = n, 2 * (1 - o) * o * s) + (i = t, a = r, i * i * a);
        var i, a, o, s
    }

    function Aa(t, e, n, r, i) {
        return function (t, e) {
            var n = 1 - t;
            return n * n * n * e
        }(t, e) + function (t, e) {
            var n = 1 - t;
            return 3 * n * n * t * e
        }(t, n) + (s = t, c = r, 3 * (1 - s) * s * s * c) + (a = t, o = i, a * a * a * o);
        var a, o, s, c
    }

    function La(t, e, n, r) {
        ga.call(this), this.type = "CubicBezierCurve", this.v0 = t || new ie, this.v1 = e || new ie, this.v2 = n || new ie, this.v3 = r || new ie
    }

    La.prototype = Object.create(ga.prototype), La.prototype.constructor = La, La.prototype.isCubicBezierCurve = !0, La.prototype.getPoint = function (t, e) {
        var n = e || new ie, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
        return n.set(Aa(t, r.x, i.x, a.x, o.x), Aa(t, r.y, i.y, a.y, o.y)), n
    }, La.prototype.copy = function (t) {
        return ga.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, La.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, La.prototype.fromJSON = function (t) {
        return ga.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    };

    function Ra(t, e, n, r) {
        ga.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new se, this.v1 = e || new se, this.v2 = n || new se, this.v3 = r || new se
    }

    Ra.prototype = Object.create(ga.prototype), Ra.prototype.constructor = Ra, Ra.prototype.isCubicBezierCurve3 = !0, Ra.prototype.getPoint = function (t, e) {
        var n = e || new se, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
        return n.set(Aa(t, r.x, i.x, a.x, o.x), Aa(t, r.y, i.y, a.y, o.y), Aa(t, r.z, i.z, a.z, o.z)), n
    }, Ra.prototype.copy = function (t) {
        return ga.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, Ra.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, Ra.prototype.fromJSON = function (t) {
        return ga.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    };

    function Pa(t, e) {
        ga.call(this), this.type = "LineCurve", this.v1 = t || new ie, this.v2 = e || new ie
    }

    Pa.prototype = Object.create(ga.prototype), Pa.prototype.constructor = Pa, Pa.prototype.isLineCurve = !0, Pa.prototype.getPoint = function (t, e) {
        var n = e || new ie;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
    }, Pa.prototype.getPointAt = function (t, e) {
        return this.getPoint(t, e)
    }, Pa.prototype.getTangent = function () {
        return this.v2.clone().sub(this.v1).normalize()
    }, Pa.prototype.copy = function (t) {
        return ga.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, Pa.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, Pa.prototype.fromJSON = function (t) {
        return ga.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    };

    function Ca(t, e) {
        ga.call(this), this.type = "LineCurve3", this.v1 = t || new se, this.v2 = e || new se
    }

    Ca.prototype = Object.create(ga.prototype), Ca.prototype.constructor = Ca, Ca.prototype.isLineCurve3 = !0, Ca.prototype.getPoint = function (t, e) {
        var n = e || new se;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
    }, Ca.prototype.getPointAt = function (t, e) {
        return this.getPoint(t, e)
    }, Ca.prototype.copy = function (t) {
        return ga.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, Ca.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, Ca.prototype.fromJSON = function (t) {
        return ga.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    };

    function Na(t, e, n) {
        ga.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new ie, this.v1 = e || new ie, this.v2 = n || new ie
    }

    Na.prototype = Object.create(ga.prototype), Na.prototype.constructor = Na, Na.prototype.isQuadraticBezierCurve = !0, Na.prototype.getPoint = function (t, e) {
        var n = e || new ie, r = this.v0, i = this.v1, a = this.v2;
        return n.set(Sa(t, r.x, i.x, a.x), Sa(t, r.y, i.y, a.y)), n
    }, Na.prototype.copy = function (t) {
        return ga.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, Na.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, Na.prototype.fromJSON = function (t) {
        return ga.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    };

    function Oa(t, e, n) {
        ga.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new se, this.v1 = e || new se, this.v2 = n || new se
    }

    Oa.prototype = Object.create(ga.prototype), Oa.prototype.constructor = Oa, Oa.prototype.isQuadraticBezierCurve3 = !0, Oa.prototype.getPoint = function (t, e) {
        var n = e || new se, r = this.v0, i = this.v1, a = this.v2;
        return n.set(Sa(t, r.x, i.x, a.x), Sa(t, r.y, i.y, a.y), Sa(t, r.z, i.z, a.z)), n
    }, Oa.prototype.copy = function (t) {
        return ga.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, Oa.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, Oa.prototype.fromJSON = function (t) {
        return ga.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    };

    function Ia(t) {
        ga.call(this), this.type = "SplineCurve", this.points = t || []
    }

    Ia.prototype = Object.create(ga.prototype), Ia.prototype.constructor = Ia, Ia.prototype.isSplineCurve = !0, Ia.prototype.getPoint = function (t, e) {
        var n = e || new ie, r = this.points, i = (r.length - 1) * t, a = Math.floor(i), o = i - a,
            s = r[0 === a ? a : a - 1], c = r[a], h = r[a > r.length - 2 ? r.length - 1 : a + 1],
            u = r[a > r.length - 3 ? r.length - 1 : a + 2];
        return n.set(Ta(o, s.x, c.x, h.x, u.x), Ta(o, s.y, c.y, h.y, u.y)), n
    }, Ia.prototype.copy = function (t) {
        ga.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push(r.clone())
        }
        return this
    }, Ia.prototype.toJSON = function () {
        var t = ga.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var r = this.points[e];
            t.points.push(r.toArray())
        }
        return t
    }, Ia.prototype.fromJSON = function (t) {
        ga.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push((new ie).fromArray(r))
        }
        return this
    };
    var Da = Object.freeze({
        ArcCurve: ya,
        CatmullRomCurve3: Ea,
        CubicBezierCurve: La,
        CubicBezierCurve3: Ra,
        EllipseCurve: va,
        LineCurve: Pa,
        LineCurve3: Ca,
        QuadraticBezierCurve: Na,
        QuadraticBezierCurve3: Oa,
        SplineCurve: Ia
    });

    function Ua() {
        ga.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    Ua.prototype = Object.assign(Object.create(ga.prototype), {
        constructor: Ua, add: function (t) {
            this.curves.push(t)
        }, closePath: function () {
            var t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new Pa(e, t))
        }, getPoint: function (t) {
            for (var e = t * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
                if (n[r] >= e) {
                    var i = n[r] - e, a = this.curves[r], o = a.getLength(), s = 0 === o ? 0 : 1 - i / o;
                    return a.getPointAt(s)
                }
                r++
            }
            return null
        }, getLength: function () {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        }, updateArcLengths: function () {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        }, getCurveLengths: function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, n = 0, r = this.curves.length; n < r; n++) e += this.curves[n].getLength(), t.push(e);
            return this.cacheLengths = t, t
        }, getSpacedPoints: function (t) {
            void 0 === t && (t = 40);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]), e
        }, getPoints: function (t) {
            t = t || 12;
            for (var e, n = [], r = 0, i = this.curves; r < i.length; r++) for (var a = i[r], o = a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                var h = s[c];
                e && e.equals(h) || (n.push(h), e = h)
            }
            return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
        }, copy: function (t) {
            ga.prototype.copy.call(this, t), this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var r = t.curves[e];
                this.curves.push(r.clone())
            }
            return this.autoClose = t.autoClose, this
        }, toJSON: function () {
            var t = ga.prototype.toJSON.call(this);
            t.autoClose = this.autoClose, t.curves = [];
            for (var e = 0, n = this.curves.length; e < n; e++) {
                var r = this.curves[e];
                t.curves.push(r.toJSON())
            }
            return t
        }, fromJSON: function (t) {
            ga.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var r = t.curves[e];
                this.curves.push((new Da[r.type]).fromJSON(r))
            }
            return this
        }
    });

    function za(t) {
        Ua.call(this), this.type = "Path", this.currentPoint = new ie, t && this.setFromPoints(t)
    }

    za.prototype = Object.assign(Object.create(Ua.prototype), {
        constructor: za, setFromPoints: function (t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y)
        }, moveTo: function (t, e) {
            this.currentPoint.set(t, e)
        }, lineTo: function (t, e) {
            var n = new Pa(this.currentPoint.clone(), new ie(t, e));
            this.curves.push(n), this.currentPoint.set(t, e)
        }, quadraticCurveTo: function (t, e, n, r) {
            var i = new Na(this.currentPoint.clone(), new ie(t, e), new ie(n, r));
            this.curves.push(i), this.currentPoint.set(n, r)
        }, bezierCurveTo: function (t, e, n, r, i, a) {
            var o = new La(this.currentPoint.clone(), new ie(t, e), new ie(n, r), new ie(i, a));
            this.curves.push(o), this.currentPoint.set(i, a)
        }, splineThru: function (t) {
            var e = new Ia([this.currentPoint.clone()].concat(t));
            this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
        }, arc: function (t, e, n, r, i, a) {
            var o = this.currentPoint.x, s = this.currentPoint.y;
            this.absarc(t + o, e + s, n, r, i, a)
        }, absarc: function (t, e, n, r, i, a) {
            this.absellipse(t, e, n, n, r, i, a)
        }, ellipse: function (t, e, n, r, i, a, o, s) {
            var c = this.currentPoint.x, h = this.currentPoint.y;
            this.absellipse(t + c, e + h, n, r, i, a, o, s)
        }, absellipse: function (t, e, n, r, i, a, o, s) {
            var c = new va(t, e, n, r, i, a, o, s);
            if (this.curves.length > 0) {
                var h = c.getPoint(0);
                h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
            }
            this.curves.push(c);
            var u = c.getPoint(1);
            this.currentPoint.copy(u)
        }, copy: function (t) {
            return Ua.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
        }, toJSON: function () {
            var t = Ua.prototype.toJSON.call(this);
            return t.currentPoint = this.currentPoint.toArray(), t
        }, fromJSON: function (t) {
            return Ua.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
        }
    });

    function Ba(t) {
        za.call(this, t), this.uuid = re.generateUUID(), this.type = "Shape", this.holes = []
    }

    Ba.prototype = Object.assign(Object.create(za.prototype), {
        constructor: Ba, getPointsHoles: function (t) {
            for (var e = [], n = 0, r = this.holes.length; n < r; n++) e[n] = this.holes[n].getPoints(t);
            return e
        }, extractPoints: function (t) {
            return {shape: this.getPoints(t), holes: this.getPointsHoles(t)}
        }, copy: function (t) {
            za.prototype.copy.call(this, t), this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var r = t.holes[e];
                this.holes.push(r.clone())
            }
            return this
        }, toJSON: function () {
            var t = za.prototype.toJSON.call(this);
            t.uuid = this.uuid, t.holes = [];
            for (var e = 0, n = this.holes.length; e < n; e++) {
                var r = this.holes[e];
                t.holes.push(r.toJSON())
            }
            return t
        }, fromJSON: function (t) {
            za.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var r = t.holes[e];
                this.holes.push((new za).fromJSON(r))
            }
            return this
        }
    });

    function Fa(t, e) {
        Tn.call(this), this.type = "Light", this.color = new nn(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    }

    Fa.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Fa, isLight: !0, copy: function (t) {
            return Tn.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
        }, toJSON: function (t) {
            var e = Tn.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
        }
    });

    function ka(t, e, n) {
        Fa.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Tn.DefaultUp), this.updateMatrix(), this.groundColor = new nn(e)
    }

    ka.prototype = Object.assign(Object.create(Fa.prototype), {
        constructor: ka,
        isHemisphereLight: !0,
        copy: function (t) {
            return Fa.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
        }
    });

    function Ga(t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new ie(512, 512), this.map = null, this.matrix = new ae
    }

    Object.assign(Ga.prototype, {
        copy: function (t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, toJSON: function () {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
        }
    });

    function Ha() {
        Ga.call(this, new vr(50, 1, .5, 500))
    }

    Ha.prototype = Object.assign(Object.create(Ga.prototype), {
        constructor: Ha,
        isSpotLightShadow: !0,
        update: function (t) {
            var e = this.camera, n = 2 * re.RAD2DEG * t.angle, r = this.mapSize.width / this.mapSize.height,
                i = t.distance || e.far;
            n === e.fov && r === e.aspect && i === e.far || (e.fov = n, e.aspect = r, e.far = i, e.updateProjectionMatrix())
        }
    });

    function Va(t, e, n, r, i, a) {
        Fa.call(this, t, e), this.type = "SpotLight", this.position.copy(Tn.DefaultUp), this.updateMatrix(), this.target = new Tn, Object.defineProperty(this, "power", {
            get: function () {
                return this.intensity * Math.PI
            }, set: function (t) {
                this.intensity = t / Math.PI
            }
        }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== i ? i : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Ha
    }

    Va.prototype = Object.assign(Object.create(Fa.prototype), {
        constructor: Va, isSpotLight: !0, copy: function (t) {
            return Fa.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    });

    function ja(t, e, n, r) {
        Fa.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function () {
                return 4 * this.intensity * Math.PI
            }, set: function (t) {
                this.intensity = t / (4 * Math.PI)
            }
        }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new Ga(new vr(90, 1, .5, 500))
    }

    ja.prototype = Object.assign(Object.create(Fa.prototype), {
        constructor: ja, isPointLight: !0, copy: function (t) {
            return Fa.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    });

    function Wa() {
        Ga.call(this, new An(-5, 5, 5, -5, .5, 500))
    }

    Wa.prototype = Object.assign(Object.create(Ga.prototype), {constructor: Wa});

    function qa(t, e) {
        Fa.call(this, t, e), this.type = "DirectionalLight", this.position.copy(Tn.DefaultUp), this.updateMatrix(), this.target = new Tn, this.shadow = new Wa
    }

    qa.prototype = Object.assign(Object.create(Fa.prototype), {
        constructor: qa,
        isDirectionalLight: !0,
        copy: function (t) {
            return Fa.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    });

    function Xa(t, e) {
        Fa.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    }

    Xa.prototype = Object.assign(Object.create(Fa.prototype), {constructor: Xa, isAmbientLight: !0});

    function Ya(t, e, n, r) {
        Fa.call(this, t, e), this.type = "RectAreaLight", this.position.set(0, 1, 0), this.updateMatrix(), this.width = void 0 !== n ? n : 10, this.height = void 0 !== r ? r : 10
    }

    Ya.prototype = Object.assign(Object.create(Fa.prototype), {
        constructor: Ya,
        isRectAreaLight: !0,
        copy: function (t) {
            return Fa.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
        },
        toJSON: function (t) {
            var e = Fa.prototype.toJSON.call(this, t);
            return e.object.width = this.width, e.object.height = this.height, e
        }
    });

    function Za(t, e, n, r) {
        oo.call(this, t, e, n, r)
    }

    Za.prototype = Object.assign(Object.create(oo.prototype), {
        constructor: Za,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });

    function Ja(t, e, n) {
        oo.call(this, t, e, n)
    }

    Ja.prototype = Object.assign(Object.create(oo.prototype), {
        constructor: Ja,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });

    function Qa(t, e, n, r) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new e.constructor(n), this.sampleValues = e, this.valueSize = n
    }

    Object.assign(Qa.prototype, {
        evaluate: function (t) {
            var e = this.parameterPositions, n = this._cachedIndex, r = e[n], i = e[n - 1];
            t:{
                e:{
                    var a;
                    n:{
                        r:if (!(t < r)) {
                            for (var o = n + 2; ;) {
                                if (void 0 === r) {
                                    if (t < i) break r;
                                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, i)
                                }
                                if (n === o) break;
                                if (i = r, t < (r = e[++n])) break e
                            }
                            a = e.length;
                            break n
                        }
                        {
                            if (t >= i) break t;
                            var s = e[1];
                            t < s && (n = 2, i = s);
                            for (o = n - 2; ;) {
                                if (void 0 === i) return this._cachedIndex = 0, this.beforeStart_(0, t, r);
                                if (n === o) break;
                                if (r = i, t >= (i = e[--n - 1])) break e
                            }
                            a = n, n = 0
                        }
                    }
                    for (; n < a;) {
                        var c = n + a >>> 1;
                        t < e[c] ? a = c : n = c + 1
                    }
                    if (r = e[n], void 0 === (i = e[n - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, r);
                    if (void 0 === r) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, i, t)
                }
                this._cachedIndex = n, this.intervalChanged_(n, i, r)
            }
            return this.interpolate_(n, i, t, r)
        }, settings: null, DefaultSettings_: {}, getSettings_: function () {
            return this.settings || this.DefaultSettings_
        }, copySampleValue_: function (t) {
            for (var e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = t * r, a = 0; a !== r; ++a) e[a] = n[i + a];
            return e
        }, interpolate_: function () {
            throw new Error("call to abstract method")
        }, intervalChanged_: function () {
        }
    }), Object.assign(Qa.prototype, {
        beforeStart_: Qa.prototype.copySampleValue_,
        afterEnd_: Qa.prototype.copySampleValue_
    });

    function Ka(t, e, n, r) {
        Qa.call(this, t, e, n, r)
    }

    Ka.prototype = Object.assign(Object.create(Qa.prototype), {
        constructor: Ka, interpolate_: function (t, e, n, r) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (n - e) / (r - e), h = s + o; s !== h; s += 4) oe.slerpFlat(i, 0, a, s - o, a, s, c);
            return i
        }
    });

    function $a(t, e, n, r) {
        oo.call(this, t, e, n, r)
    }

    $a.prototype = Object.assign(Object.create(oo.prototype), {
        constructor: $a,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function (t) {
            return new Ka(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: void 0
    });

    function to(t, e, n, r) {
        oo.call(this, t, e, n, r)
    }

    to.prototype = Object.assign(Object.create(oo.prototype), {constructor: to, ValueTypeName: "color"});

    function eo(t, e, n, r) {
        oo.call(this, t, e, n, r)
    }

    eo.prototype = Object.assign(Object.create(oo.prototype), {constructor: eo, ValueTypeName: "number"});

    function no(t, e, n, r) {
        Qa.call(this, t, e, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    no.prototype = Object.assign(Object.create(Qa.prototype), {
        constructor: no,
        DefaultSettings_: {endingStart: jt, endingEnd: jt},
        intervalChanged_: function (t, e, n) {
            var r = this.parameterPositions, i = t - 2, a = t + 1, o = r[i], s = r[a];
            if (void 0 === o) switch (this.getSettings_().endingStart) {
                case 2401:
                    i = t, o = 2 * e - n;
                    break;
                case 2402:
                    o = e + r[i = r.length - 2] - r[i + 1];
                    break;
                default:
                    i = t, o = n
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case 2401:
                    a = t, s = 2 * n - e;
                    break;
                case 2402:
                    a = 1, s = n + r[1] - r[0];
                    break;
                default:
                    a = t - 1, s = e
            }
            var c = .5 * (n - e), h = this.valueSize;
            this._weightPrev = c / (e - o), this._weightNext = c / (s - n), this._offsetPrev = i * h, this._offsetNext = a * h
        },
        interpolate_: function (t, e, n, r) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, u = this._offsetNext, l = this._weightPrev, f = this._weightNext, d = (n - e) / (r - e), p = d * d, m = p * d, g = -l * m + 2 * l * p - l * d, v = (1 + l) * m + (-1.5 - 2 * l) * p + (-.5 + l) * d + 1, y = (-1 - f) * m + (1.5 + f) * p + .5 * d, b = f * m - f * p, x = 0; x !== o; ++x) i[x] = g * a[h + x] + v * a[c + x] + y * a[s + x] + b * a[u + x];
            return i
        }
    });

    function ro(t, e, n, r) {
        Qa.call(this, t, e, n, r)
    }

    ro.prototype = Object.assign(Object.create(Qa.prototype), {
        constructor: ro, interpolate_: function (t, e, n, r) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (n - e) / (r - e), u = 1 - h, l = 0; l !== o; ++l) i[l] = a[c + l] * u + a[s + l] * h;
            return i
        }
    });

    function io(t, e, n, r) {
        Qa.call(this, t, e, n, r)
    }

    io.prototype = Object.assign(Object.create(Qa.prototype), {
        constructor: io, interpolate_: function (t) {
            return this.copySampleValue_(t - 1)
        }
    });
    var ao = {
        arraySlice: function (t, e, n) {
            return ao.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
        }, convertArray: function (t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        }, isTypedArray: function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }, getKeyframeOrder: function (t) {
            for (var e = t.length, n = new Array(e), r = 0; r !== e; ++r) n[r] = r;
            return n.sort(function (e, n) {
                return t[e] - t[n]
            }), n
        }, sortedArray: function (t, e, n) {
            for (var r = t.length, i = new t.constructor(r), a = 0, o = 0; o !== r; ++a) for (var s = n[a] * e, c = 0; c !== e; ++c) i[o++] = t[s + c];
            return i
        }, flattenJSON: function (t, e, n, r) {
            for (var i = 1, a = t[0]; void 0 !== a && void 0 === a[r];) a = t[i++];
            if (void 0 !== a) {
                var o = a[r];
                if (void 0 !== o) if (Array.isArray(o)) do {
                    void 0 !== (o = a[r]) && (e.push(a.time), n.push.apply(n, o)), a = t[i++]
                } while (void 0 !== a); else if (void 0 !== o.toArray) do {
                    void 0 !== (o = a[r]) && (e.push(a.time), o.toArray(n, n.length)), a = t[i++]
                } while (void 0 !== a); else do {
                    void 0 !== (o = a[r]) && (e.push(a.time), n.push(o)), a = t[i++]
                } while (void 0 !== a)
            }
        }
    };

    function oo(t, e, n, r) {
        if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = ao.convertArray(e, this.TimeBufferType), this.values = ao.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation), this.validate(), this.optimize()
    }

    Object.assign(oo, {
        parse: function (t) {
            if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
            var e = oo._getTrackTypeForValueTypeName(t.type);
            if (void 0 === t.times) {
                var n = [], r = [];
                ao.flattenJSON(t.keys, n, r, "value"), t.times = n, t.values = r
            }
            return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
        }, toJSON: function (t) {
            var e, n = t.constructor;
            if (void 0 !== n.toJSON) e = n.toJSON(t); else {
                e = {name: t.name, times: ao.convertArray(t.times, Array), values: ao.convertArray(t.values, Array)};
                var r = t.getInterpolation();
                r !== t.DefaultInterpolation && (e.interpolation = r)
            }
            return e.type = t.ValueTypeName, e
        }, _getTrackTypeForValueTypeName: function (t) {
            switch (t.toLowerCase()) {
                case"scalar":
                case"double":
                case"float":
                case"number":
                case"integer":
                    return eo;
                case"vector":
                case"vector2":
                case"vector3":
                case"vector4":
                    return so;
                case"color":
                    return to;
                case"quaternion":
                    return $a;
                case"bool":
                case"boolean":
                    return Ja;
                case"string":
                    return Za
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }
    }), Object.assign(oo.prototype, {
        constructor: oo,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function (t) {
            return new io(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodLinear: function (t) {
            return new ro(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: function (t) {
            return new no(this.times, this.values, this.getValueSize(), t)
        },
        setInterpolation: function (t) {
            var e;
            switch (t) {
                case 2300:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 !== e) this.createInterpolant = e; else {
                var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(n);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                console.warn("THREE.KeyframeTrack:", n)
            }
        },
        getInterpolation: function () {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function () {
            return this.values.length / this.times.length
        },
        shift: function (t) {
            if (0 !== t) for (var e = this.times, n = 0, r = e.length; n !== r; ++n) e[n] += t;
            return this
        },
        scale: function (t) {
            if (1 !== t) for (var e = this.times, n = 0, r = e.length; n !== r; ++n) e[n] *= t;
            return this
        },
        trim: function (t, e) {
            for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < t;) ++i;
            for (; -1 !== a && n[a] > e;) --a;
            if (++a, 0 !== i || a !== r) {
                i >= a && (a = Math.max(a, 1), i = a - 1);
                var o = this.getValueSize();
                this.times = ao.arraySlice(n, i, a), this.values = ao.arraySlice(this.values, i * o, a * o)
            }
            return this
        },
        validate: function () {
            var t = !0, e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            var n = this.times, r = this.values, i = n.length;
            0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            for (var a = null, o = 0; o !== i; o++) {
                var s = n[o];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
                    break
                }
                if (null !== a && a > s) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
                    break
                }
                a = s
            }
            if (void 0 !== r && ao.isTypedArray(r)) {
                o = 0;
                for (var c = r.length; o !== c; ++o) {
                    var h = r[o];
                    if (isNaN(h)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, h), t = !1;
                        break
                    }
                }
            }
            return t
        },
        optimize: function () {
            for (var t = this.times, e = this.values, n = this.getValueSize(), r = 2302 === this.getInterpolation(), i = 1, a = t.length - 1, o = 1; o < a; ++o) {
                var s = !1, c = t[o];
                if (c !== t[o + 1] && (1 !== o || c !== c[0])) if (r) s = !0; else for (var h = o * n, u = h - n, l = h + n, f = 0; f !== n; ++f) {
                    var d = e[h + f];
                    if (d !== e[u + f] || d !== e[l + f]) {
                        s = !0;
                        break
                    }
                }
                if (s) {
                    if (o !== i) {
                        t[i] = t[o];
                        var p = o * n, m = i * n;
                        for (f = 0; f !== n; ++f) e[m + f] = e[p + f]
                    }
                    ++i
                }
            }
            if (a > 0) {
                t[i] = t[a];
                for (p = a * n, m = i * n, f = 0; f !== n; ++f) e[m + f] = e[p + f];
                ++i
            }
            return i !== t.length && (this.times = ao.arraySlice(t, 0, i), this.values = ao.arraySlice(e, 0, i * n)), this
        }
    });

    function so(t, e, n, r) {
        oo.call(this, t, e, n, r)
    }

    so.prototype = Object.assign(Object.create(oo.prototype), {constructor: so, ValueTypeName: "vector"});

    function co(t, e, n) {
        this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = re.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
    }

    Object.assign(co, {
        parse: function (t) {
            for (var e = [], n = t.tracks, r = 1 / (t.fps || 1), i = 0, a = n.length; i !== a; ++i) e.push(oo.parse(n[i]).scale(r));
            return new co(t.name, t.duration, e)
        }, toJSON: function (t) {
            for (var e = [], n = t.tracks, r = {
                name: t.name,
                duration: t.duration,
                tracks: e
            }, i = 0, a = n.length; i !== a; ++i) e.push(oo.toJSON(n[i]));
            return r
        }, CreateFromMorphTargetSequence: function (t, e, n, r) {
            for (var i = e.length, a = [], o = 0; o < i; o++) {
                var s = [], c = [];
                s.push((o + i - 1) % i, o, (o + 1) % i), c.push(0, 1, 0);
                var h = ao.getKeyframeOrder(s);
                s = ao.sortedArray(s, 1, h), c = ao.sortedArray(c, 1, h), r || 0 !== s[0] || (s.push(i), c.push(c[0])), a.push(new eo(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / n))
            }
            return new co(t, -1, a)
        }, findByName: function (t, e) {
            var n = t;
            if (!Array.isArray(t)) {
                var r = t;
                n = r.geometry && r.geometry.animations || r.animations
            }
            for (var i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
            return null
        }, CreateClipsFromMorphTargetSequences: function (t, e, n) {
            for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a], c = s.name.match(i);
                if (c && c.length > 1) {
                    var h = r[l = c[1]];
                    h || (r[l] = h = []), h.push(s)
                }
            }
            var u = [];
            for (var l in r) u.push(co.CreateFromMorphTargetSequence(l, r[l], e, n));
            return u
        }, parseAnimation: function (t, e) {
            if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            for (var n = function (t, e, n, r, i) {
                if (0 !== n.length) {
                    var a = [], o = [];
                    ao.flattenJSON(n, a, o, r), 0 !== a.length && i.push(new t(e, a, o))
                }
            }, r = [], i = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                var h = s[c].keys;
                if (h && 0 !== h.length) if (h[0].morphTargets) {
                    for (var u = {}, l = 0; l < h.length; l++) if (h[l].morphTargets) for (var f = 0; f < h[l].morphTargets.length; f++) u[h[l].morphTargets[f]] = -1;
                    for (var d in u) {
                        var p = [], m = [];
                        for (f = 0; f !== h[l].morphTargets.length; ++f) {
                            var g = h[l];
                            p.push(g.time), m.push(g.morphTarget === d ? 1 : 0)
                        }
                        r.push(new eo(".morphTargetInfluence[" + d + "]", p, m))
                    }
                    a = u.length * (o || 1)
                } else {
                    var v = ".bones[" + e[c].name + "]";
                    n(so, v + ".position", h, "pos", r), n($a, v + ".quaternion", h, "rot", r), n(so, v + ".scale", h, "scl", r)
                }
            }
            if (0 === r.length) return null;
            return new co(i, a, r)
        }
    }), Object.assign(co.prototype, {
        resetDuration: function () {
            for (var t = 0, e = 0, n = this.tracks.length; e !== n; ++e) {
                var r = this.tracks[e];
                t = Math.max(t, r.times[r.times.length - 1])
            }
            this.duration = t
        }, trim: function () {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
            return this
        }, optimize: function () {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
            return this
        }
    });

    function ho(t) {
        this.manager = void 0 !== t ? t : ca, this.textures = {}
    }

    Object.assign(ho.prototype, {
        load: function (t, e, n, r) {
            var i = this;
            new ua(i.manager).load(t, function (t) {
                e(i.parse(JSON.parse(t)))
            }, n, r)
        }, setTextures: function (t) {
            this.textures = t
        }, parse: function (t) {
            var e = this.textures;

            function n(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
            }

            var r = new aa[t.type];
            if (void 0 !== t.uuid && (r.uuid = t.uuid), void 0 !== t.name && (r.name = t.name), void 0 !== t.color && r.color.setHex(t.color), void 0 !== t.roughness && (r.roughness = t.roughness), void 0 !== t.metalness && (r.metalness = t.metalness), void 0 !== t.emissive && r.emissive.setHex(t.emissive), void 0 !== t.specular && r.specular.setHex(t.specular), void 0 !== t.shininess && (r.shininess = t.shininess), void 0 !== t.clearCoat && (r.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (r.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (r.uniforms = t.uniforms), void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (r.vertexColors = t.vertexColors), void 0 !== t.fog && (r.fog = t.fog), void 0 !== t.flatShading && (r.flatShading = t.flatShading), void 0 !== t.blending && (r.blending = t.blending), void 0 !== t.side && (r.side = t.side), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.transparent && (r.transparent = t.transparent), void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest), void 0 !== t.depthTest && (r.depthTest = t.depthTest), void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite), void 0 !== t.wireframe && (r.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (r.rotation = t.rotation), 1 !== t.linewidth && (r.linewidth = t.linewidth), void 0 !== t.dashSize && (r.dashSize = t.dashSize), void 0 !== t.gapSize && (r.gapSize = t.gapSize), void 0 !== t.scale && (r.scale = t.scale), void 0 !== t.skinning && (r.skinning = t.skinning), void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets), void 0 !== t.dithering && (r.dithering = t.dithering), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.userData && (r.userData = t.userData), void 0 !== t.shading && (r.flatShading = 1 === t.shading), void 0 !== t.size && (r.size = t.size), void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (r.map = n(t.map)), void 0 !== t.alphaMap && (r.alphaMap = n(t.alphaMap), r.transparent = !0), void 0 !== t.bumpMap && (r.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale), void 0 !== t.normalMap && (r.normalMap = n(t.normalMap)), void 0 !== t.normalScale) {
                var i = t.normalScale;
                !1 === Array.isArray(i) && (i = [i, i]), r.normalScale = (new ie).fromArray(i)
            }
            return void 0 !== t.displacementMap && (r.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (r.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (r.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (r.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (r.specularMap = n(t.specularMap)), void 0 !== t.envMap && (r.envMap = n(t.envMap)), void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity), void 0 !== t.lightMap && (r.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (r.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (r.gradientMap = n(t.gradientMap)), r
        }
    });

    function uo(t) {
        this.manager = void 0 !== t ? t : ca
    }

    Object.assign(uo.prototype, {
        load: function (t, e, n, r) {
            var i = this;
            new ua(i.manager).load(t, function (t) {
                e(i.parse(JSON.parse(t)))
            }, n, r)
        }, parse: function (t) {
            var e = new jn, n = t.data.index;
            if (void 0 !== n) {
                var r = new lo[n.type](n.array);
                e.setIndex(new Cn(r, 1))
            }
            var i = t.data.attributes;
            for (var a in i) {
                var o = i[a];
                r = new lo[o.type](o.array);
                e.addAttribute(a, new Cn(r, o.itemSize, o.normalized))
            }
            var s = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== s) for (var c = 0, h = s.length; c !== h; ++c) {
                var u = s[c];
                e.addGroup(u.start, u.count, u.materialIndex)
            }
            var l = t.data.boundingSphere;
            if (void 0 !== l) {
                var f = new se;
                void 0 !== l.center && f.fromArray(l.center), e.boundingSphere = new vn(f, l.radius)
            }
            return e
        }
    });
    var lo = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };

    function fo() {
        this.onLoadStart = function () {
        }, this.onLoadProgress = function () {
        }, this.onLoadComplete = function () {
        }
    }

    fo.Handlers = {
        handlers: [], add: function (t, e) {
            this.handlers.push(t, e)
        }, get: function (t) {
            for (var e = this.handlers, n = 0, r = e.length; n < r; n += 2) {
                var i = e[n], a = e[n + 1];
                if (i.test(t)) return a
            }
            return null
        }
    }, Object.assign(fo.prototype, {
        crossOrigin: void 0, initMaterials: function (t, e, n) {
            for (var r = [], i = 0; i < t.length; ++i) r[i] = this.createMaterial(t[i], e, n);
            return r
        }, createMaterial: function () {
            var t = {
                NoBlending: p,
                NormalBlending: m,
                AdditiveBlending: g,
                SubtractiveBlending: v,
                MultiplyBlending: y,
                CustomBlending: b
            }, e = new nn, n = new ma, r = new ho;
            return function (i, a, o) {
                var s = {};

                function c(t, e, r, i, c) {
                    var h, u = a + t, l = fo.Handlers.get(u);
                    null !== l ? h = l.load(u) : (n.setCrossOrigin(o), h = n.load(u)), void 0 !== e && (h.repeat.fromArray(e), 1 !== e[0] && (h.wrapS = at), 1 !== e[1] && (h.wrapT = at)), void 0 !== r && h.offset.fromArray(r), void 0 !== i && ("repeat" === i[0] && (h.wrapS = at), "mirror" === i[0] && (h.wrapS = st), "repeat" === i[1] && (h.wrapT = at), "mirror" === i[1] && (h.wrapT = st)), void 0 !== c && (h.anisotropy = c);
                    var f = re.generateUUID();
                    return s[f] = h, f
                }

                var l = {uuid: re.generateUUID(), type: "MeshLambertMaterial"};
                for (var p in i) {
                    var m = i[p];
                    switch (p) {
                        case"DbgColor":
                        case"DbgIndex":
                        case"opticalDensity":
                        case"illumination":
                            break;
                        case"DbgName":
                            l.name = m;
                            break;
                        case"blending":
                            l.blending = t[m];
                            break;
                        case"colorAmbient":
                        case"mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", p, "is no longer supported.");
                            break;
                        case"colorDiffuse":
                            l.color = e.fromArray(m).getHex();
                            break;
                        case"colorSpecular":
                            l.specular = e.fromArray(m).getHex();
                            break;
                        case"colorEmissive":
                            l.emissive = e.fromArray(m).getHex();
                            break;
                        case"specularCoef":
                            l.shininess = m;
                            break;
                        case"shading":
                            "basic" === m.toLowerCase() && (l.type = "MeshBasicMaterial"), "phong" === m.toLowerCase() && (l.type = "MeshPhongMaterial"), "standard" === m.toLowerCase() && (l.type = "MeshStandardMaterial");
                            break;
                        case"mapDiffuse":
                            l.map = c(m, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
                            break;
                        case"mapDiffuseRepeat":
                        case"mapDiffuseOffset":
                        case"mapDiffuseWrap":
                        case"mapDiffuseAnisotropy":
                            break;
                        case"mapEmissive":
                            l.emissiveMap = c(m, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
                            break;
                        case"mapEmissiveRepeat":
                        case"mapEmissiveOffset":
                        case"mapEmissiveWrap":
                        case"mapEmissiveAnisotropy":
                            break;
                        case"mapLight":
                            l.lightMap = c(m, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
                            break;
                        case"mapLightRepeat":
                        case"mapLightOffset":
                        case"mapLightWrap":
                        case"mapLightAnisotropy":
                            break;
                        case"mapAO":
                            l.aoMap = c(m, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
                            break;
                        case"mapAORepeat":
                        case"mapAOOffset":
                        case"mapAOWrap":
                        case"mapAOAnisotropy":
                            break;
                        case"mapBump":
                            l.bumpMap = c(m, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
                            break;
                        case"mapBumpScale":
                            l.bumpScale = m;
                            break;
                        case"mapBumpRepeat":
                        case"mapBumpOffset":
                        case"mapBumpWrap":
                        case"mapBumpAnisotropy":
                            break;
                        case"mapNormal":
                            l.normalMap = c(m, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
                            break;
                        case"mapNormalFactor":
                            l.normalScale = [m, m];
                            break;
                        case"mapNormalRepeat":
                        case"mapNormalOffset":
                        case"mapNormalWrap":
                        case"mapNormalAnisotropy":
                            break;
                        case"mapSpecular":
                            l.specularMap = c(m, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
                            break;
                        case"mapSpecularRepeat":
                        case"mapSpecularOffset":
                        case"mapSpecularWrap":
                        case"mapSpecularAnisotropy":
                            break;
                        case"mapMetalness":
                            l.metalnessMap = c(m, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
                            break;
                        case"mapMetalnessRepeat":
                        case"mapMetalnessOffset":
                        case"mapMetalnessWrap":
                        case"mapMetalnessAnisotropy":
                            break;
                        case"mapRoughness":
                            l.roughnessMap = c(m, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
                            break;
                        case"mapRoughnessRepeat":
                        case"mapRoughnessOffset":
                        case"mapRoughnessWrap":
                        case"mapRoughnessAnisotropy":
                            break;
                        case"mapAlpha":
                            l.alphaMap = c(m, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
                            break;
                        case"mapAlphaRepeat":
                        case"mapAlphaOffset":
                        case"mapAlphaWrap":
                        case"mapAlphaAnisotropy":
                            break;
                        case"flipSided":
                            l.side = h;
                            break;
                        case"doubleSided":
                            l.side = u;
                            break;
                        case"transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), l.opacity = m;
                            break;
                        case"depthTest":
                        case"depthWrite":
                        case"colorWrite":
                        case"opacity":
                        case"reflectivity":
                        case"transparent":
                        case"visible":
                        case"wireframe":
                            l[p] = m;
                            break;
                        case"vertexColors":
                            !0 === m && (l.vertexColors = d), "face" === m && (l.vertexColors = f);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", p, m)
                    }
                }
                return "MeshBasicMaterial" === l.type && delete l.emissive, "MeshPhongMaterial" !== l.type && delete l.specular, l.opacity < 1 && (l.transparent = !0), r.setTextures(s), r.parse(l)
            }
        }()
    });
    var po = {
        decodeText: function (t) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
            for (var e = "", n = 0, r = t.length; n < r; n++) e += String.fromCharCode(t[n]);
            return e
        }, extractUrlBase: function (t) {
            var e = t.split("/");
            return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
        }
    };

    function mo(t) {
        "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : ca, this.withCredentials = !1
    }

    Object.assign(mo.prototype, {
        load: function (t, e, n, r) {
            var i = this,
                a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : po.extractUrlBase(t),
                o = new ua(this.manager);
            o.setWithCredentials(this.withCredentials), o.load(t, function (n) {
                var r = JSON.parse(n), o = r.metadata;
                if (void 0 !== o) {
                    var s = o.type;
                    if (void 0 !== s) {
                        if ("object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                    }
                }
                var c = i.parse(r, a);
                e(c.geometry, c.materials)
            }, n, r)
        }, setTexturePath: function (t) {
            this.texturePath = t
        }, parse: function () {
            return function (t, e) {
                void 0 !== t.data && (t = t.data), void 0 !== t.scale ? t.scale = 1 / t.scale : t.scale = 1;
                var n = new Pn;
                if (function (t, e) {
                        function n(t, e) {
                            return t & 1 << e
                        }

                        var r, i, a, o, s, c, h, u, l, f, d, p, m, g, v, y, b, x, w, _, M, E, T, S, A, L = t.faces,
                            R = t.vertices, P = t.normals, C = t.colors, N = t.scale, O = 0;
                        if (void 0 !== t.uvs) {
                            for (r = 0; r < t.uvs.length; r++) t.uvs[r].length && O++;
                            for (r = 0; r < O; r++) e.faceVertexUvs[r] = []
                        }
                        for (o = 0, s = R.length; o < s;) (x = new se).x = R[o++] * N, x.y = R[o++] * N, x.z = R[o++] * N, e.vertices.push(x);
                        for (o = 0, s = L.length; o < s;) if (d = n(f = L[o++], 0), p = n(f, 1), m = n(f, 3), g = n(f, 4), v = n(f, 5), y = n(f, 6), b = n(f, 7), d) {
                            if ((_ = new Ln).a = L[o], _.b = L[o + 1], _.c = L[o + 3], (M = new Ln).a = L[o + 1], M.b = L[o + 2], M.c = L[o + 3], o += 4, p && (l = L[o++], _.materialIndex = l, M.materialIndex = l), a = e.faces.length, m) for (r = 0; r < O; r++) for (S = t.uvs[r], e.faceVertexUvs[r][a] = [], e.faceVertexUvs[r][a + 1] = [], i = 0; i < 4; i++) A = new ie(S[2 * (u = L[o++])], S[2 * u + 1]), 2 !== i && e.faceVertexUvs[r][a].push(A), 0 !== i && e.faceVertexUvs[r][a + 1].push(A);
                            if (g && (h = 3 * L[o++], _.normal.set(P[h++], P[h++], P[h]), M.normal.copy(_.normal)), v) for (r = 0; r < 4; r++) h = 3 * L[o++], T = new se(P[h++], P[h++], P[h]), 2 !== r && _.vertexNormals.push(T), 0 !== r && M.vertexNormals.push(T);
                            if (y && (E = C[c = L[o++]], _.color.setHex(E), M.color.setHex(E)), b) for (r = 0; r < 4; r++) E = C[c = L[o++]], 2 !== r && _.vertexColors.push(new nn(E)), 0 !== r && M.vertexColors.push(new nn(E));
                            e.faces.push(_), e.faces.push(M)
                        } else {
                            if ((w = new Ln).a = L[o++], w.b = L[o++], w.c = L[o++], p && (l = L[o++], w.materialIndex = l), a = e.faces.length, m) for (r = 0; r < O; r++) for (S = t.uvs[r], e.faceVertexUvs[r][a] = [], i = 0; i < 3; i++) A = new ie(S[2 * (u = L[o++])], S[2 * u + 1]), e.faceVertexUvs[r][a].push(A);
                            if (g && (h = 3 * L[o++], w.normal.set(P[h++], P[h++], P[h])), v) for (r = 0; r < 3; r++) h = 3 * L[o++], T = new se(P[h++], P[h++], P[h]), w.vertexNormals.push(T);
                            if (y && (c = L[o++], w.color.setHex(C[c])), b) for (r = 0; r < 3; r++) c = L[o++], w.vertexColors.push(new nn(C[c]));
                            e.faces.push(w)
                        }
                    }(t, n), function (t, e) {
                        var n = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                        if (t.skinWeights) for (var r = 0, i = t.skinWeights.length; r < i; r += n) {
                            var a = t.skinWeights[r], o = n > 1 ? t.skinWeights[r + 1] : 0,
                                s = n > 2 ? t.skinWeights[r + 2] : 0, c = n > 3 ? t.skinWeights[r + 3] : 0;
                            e.skinWeights.push(new le(a, o, s, c))
                        }
                        if (t.skinIndices) for (r = 0, i = t.skinIndices.length; r < i; r += n) {
                            var h = t.skinIndices[r], u = n > 1 ? t.skinIndices[r + 1] : 0,
                                l = n > 2 ? t.skinIndices[r + 2] : 0, f = n > 3 ? t.skinIndices[r + 3] : 0;
                            e.skinIndices.push(new le(h, u, l, f))
                        }
                        e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.")
                    }(t, n), function (t, e) {
                        var n = t.scale;
                        if (void 0 !== t.morphTargets) for (var r = 0, i = t.morphTargets.length; r < i; r++) {
                            e.morphTargets[r] = {}, e.morphTargets[r].name = t.morphTargets[r].name, e.morphTargets[r].vertices = [];
                            for (var a = e.morphTargets[r].vertices, o = t.morphTargets[r].vertices, s = 0, c = o.length; s < c; s += 3) {
                                var h = new se;
                                h.x = o[s] * n, h.y = o[s + 1] * n, h.z = o[s + 2] * n, a.push(h)
                            }
                        }
                        if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                            console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                            var u = e.faces, l = t.morphColors[0].colors;
                            for (r = 0, i = u.length; r < i; r++) u[r].color.fromArray(l, 3 * r)
                        }
                    }(t, n), function (t, e) {
                        var n = [], r = [];
                        void 0 !== t.animation && r.push(t.animation), void 0 !== t.animations && (t.animations.length ? r = r.concat(t.animations) : r.push(t.animations));
                        for (var i = 0; i < r.length; i++) {
                            var a = co.parseAnimation(r[i], e.bones);
                            a && n.push(a)
                        }
                        if (e.morphTargets) {
                            var o = co.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
                            n = n.concat(o)
                        }
                        n.length > 0 && (e.animations = n)
                    }(t, n), n.computeFaceNormals(), n.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length) return {geometry: n};
                return {geometry: n, materials: fo.prototype.initMaterials(t.materials, e, this.crossOrigin)}
            }
        }()
    });

    function go(t) {
        this.manager = void 0 !== t ? t : ca, this.texturePath = ""
    }

    Object.assign(go.prototype, {
        load: function (t, e, n, r) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var i = this;
            new ua(i.manager).load(t, function (n) {
                var a = null;
                try {
                    a = JSON.parse(n)
                } catch (e) {
                    return void 0 !== r && r(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                }
                var o = a.metadata;
                void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? i.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.")
            }, n, r)
        }, setTexturePath: function (t) {
            this.texturePath = t
        }, setCrossOrigin: function (t) {
            this.crossOrigin = t
        }, parse: function (t, e) {
            var n = this.parseShape(t.shapes), r = this.parseGeometries(t.geometries, n),
                i = this.parseImages(t.images, function () {
                    void 0 !== e && e(s)
                }), a = this.parseTextures(t.textures, i), o = this.parseMaterials(t.materials, a),
                s = this.parseObject(t.object, r, o);
            return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
        }, parseShape: function (t) {
            var e = {};
            if (void 0 !== t) for (var n = 0, r = t.length; n < r; n++) {
                var i = (new Ba).fromJSON(t[n]);
                e[i.uuid] = i
            }
            return e
        }, parseGeometries: function (t, e) {
            var n = {};
            if (void 0 !== t) for (var r = new mo, i = new uo, a = 0, o = t.length; a < o; a++) {
                var s, c = t[a];
                switch (c.type) {
                    case"PlaneGeometry":
                    case"PlaneBufferGeometry":
                        s = new Zi[c.type](c.width, c.height, c.widthSegments, c.heightSegments);
                        break;
                    case"BoxGeometry":
                    case"BoxBufferGeometry":
                    case"CubeGeometry":
                        s = new Zi[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments);
                        break;
                    case"CircleGeometry":
                    case"CircleBufferGeometry":
                        s = new Zi[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength);
                        break;
                    case"CylinderGeometry":
                    case"CylinderBufferGeometry":
                        s = new Zi[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                        break;
                    case"ConeGeometry":
                    case"ConeBufferGeometry":
                        s = new Zi[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                        break;
                    case"SphereGeometry":
                    case"SphereBufferGeometry":
                        s = new Zi[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength);
                        break;
                    case"DodecahedronGeometry":
                    case"DodecahedronBufferGeometry":
                    case"IcosahedronGeometry":
                    case"IcosahedronBufferGeometry":
                    case"OctahedronGeometry":
                    case"OctahedronBufferGeometry":
                    case"TetrahedronGeometry":
                    case"TetrahedronBufferGeometry":
                        s = new Zi[c.type](c.radius, c.detail);
                        break;
                    case"RingGeometry":
                    case"RingBufferGeometry":
                        s = new Zi[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength);
                        break;
                    case"TorusGeometry":
                    case"TorusBufferGeometry":
                        s = new Zi[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc);
                        break;
                    case"TorusKnotGeometry":
                    case"TorusKnotBufferGeometry":
                        s = new Zi[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q);
                        break;
                    case"LatheGeometry":
                    case"LatheBufferGeometry":
                        s = new Zi[c.type](c.points, c.segments, c.phiStart, c.phiLength);
                        break;
                    case"PolyhedronGeometry":
                    case"PolyhedronBufferGeometry":
                        s = new Zi[c.type](c.vertices, c.indices, c.radius, c.details);
                        break;
                    case"ShapeGeometry":
                    case"ShapeBufferGeometry":
                        var h = [];
                        for (a = 0, o = c.shapes.length; a < o; a++) {
                            var u = e[c.shapes[a]];
                            h.push(u)
                        }
                        s = new Zi[c.type](h, c.curveSegments);
                        break;
                    case"BufferGeometry":
                        s = i.parse(c);
                        break;
                    case"Geometry":
                        s = r.parse(c, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
                        continue
                }
                s.uuid = c.uuid, void 0 !== c.name && (s.name = c.name), n[c.uuid] = s
            }
            return n
        }, parseMaterials: function (t, e) {
            var n = {};
            if (void 0 !== t) {
                var r = new ho;
                r.setTextures(e);
                for (var i = 0, a = t.length; i < a; i++) {
                    var o = t[i];
                    if ("MultiMaterial" === o.type) {
                        for (var s = [], c = 0; c < o.materials.length; c++) s.push(r.parse(o.materials[c]));
                        n[o.uuid] = s
                    } else n[o.uuid] = r.parse(o)
                }
            }
            return n
        }, parseAnimations: function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var r = co.parse(t[n]);
                e.push(r)
            }
            return e
        }, parseImages: function (t, e) {
            var n = this, r = {};

            function i(t) {
                return n.manager.itemStart(t), a.load(t, function () {
                    n.manager.itemEnd(t)
                }, void 0, function () {
                    n.manager.itemEnd(t), n.manager.itemError(t)
                })
            }

            if (void 0 !== t && t.length > 0) {
                var a = new da(new sa(e));
                a.setCrossOrigin(this.crossOrigin);
                for (var o = 0, s = t.length; o < s; o++) {
                    var c = t[o], h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
                    r[c.uuid] = i(h)
                }
            }
            return r
        }, parseTextures: function (t, e) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
            }

            var r = {};
            if (void 0 !== t) for (var i = 0, a = t.length; i < a; i++) {
                var o = t[i];
                void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), void 0 === e[o.image] && console.warn("THREE.ObjectLoader: Undefined image", o.image);
                var s = new ue(e[o.image]);
                s.needsUpdate = !0, s.uuid = o.uuid, void 0 !== o.name && (s.name = o.name), void 0 !== o.mapping && (s.mapping = n(o.mapping, vo)), void 0 !== o.offset && s.offset.fromArray(o.offset), void 0 !== o.repeat && s.repeat.fromArray(o.repeat), void 0 !== o.center && s.center.fromArray(o.center), void 0 !== o.rotation && (s.rotation = o.rotation), void 0 !== o.wrap && (s.wrapS = n(o.wrap[0], yo), s.wrapT = n(o.wrap[1], yo)), void 0 !== o.minFilter && (s.minFilter = n(o.minFilter, bo)), void 0 !== o.magFilter && (s.magFilter = n(o.magFilter, bo)), void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy), void 0 !== o.flipY && (s.flipY = o.flipY), r[o.uuid] = s
            }
            return r
        }, parseObject: function () {
            var t = new ae;
            return function (e, n, r) {
                var i;

                function a(t) {
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), n[t]
                }

                function o(t) {
                    if (void 0 !== t) {
                        if (Array.isArray(t)) {
                            for (var e = [], n = 0, i = t.length; n < i; n++) {
                                var a = t[n];
                                void 0 === r[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(r[a])
                            }
                            return e
                        }
                        return void 0 === r[t] && console.warn("THREE.ObjectLoader: Undefined material", t), r[t]
                    }
                }

                switch (e.type) {
                    case"Scene":
                        i = new Er, void 0 !== e.background && Number.isInteger(e.background) && (i.background = new nn(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? i.fog = new Mr(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (i.fog = new _r(e.fog.color, e.fog.density)));
                        break;
                    case"PerspectiveCamera":
                        i = new vr(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (i.focus = e.focus), void 0 !== e.zoom && (i.zoom = e.zoom), void 0 !== e.filmGauge && (i.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (i.filmOffset = e.filmOffset), void 0 !== e.view && (i.view = Object.assign({}, e.view));
                        break;
                    case"OrthographicCamera":
                        i = new An(e.left, e.right, e.top, e.bottom, e.near, e.far);
                        break;
                    case"AmbientLight":
                        i = new Xa(e.color, e.intensity);
                        break;
                    case"DirectionalLight":
                        i = new qa(e.color, e.intensity);
                        break;
                    case"PointLight":
                        i = new ja(e.color, e.intensity, e.distance, e.decay);
                        break;
                    case"RectAreaLight":
                        i = new Ya(e.color, e.intensity, e.width, e.height);
                        break;
                    case"SpotLight":
                        i = new Va(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                        break;
                    case"HemisphereLight":
                        i = new ka(e.color, e.groundColor, e.intensity);
                        break;
                    case"SkinnedMesh":
                        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                    case"Mesh":
                        var s = a(e.geometry), c = o(e.material);
                        i = s.bones && s.bones.length > 0 ? new Cr(s, c) : new tr(s, c);
                        break;
                    case"LOD":
                        i = new Lr;
                        break;
                    case"Line":
                        i = new Or(a(e.geometry), o(e.material), e.mode);
                        break;
                    case"LineLoop":
                        i = new Dr(a(e.geometry), o(e.material));
                        break;
                    case"LineSegments":
                        i = new Ir(a(e.geometry), o(e.material));
                        break;
                    case"PointCloud":
                    case"Points":
                        i = new zr(a(e.geometry), o(e.material));
                        break;
                    case"Sprite":
                        i = new Ar(o(e.material));
                        break;
                    case"Group":
                        i = new Br;
                        break;
                    default:
                        i = new Tn
                }
                if (i.uuid = e.uuid, void 0 !== e.name && (i.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== e.position && i.position.fromArray(e.position), void 0 !== e.rotation && i.rotation.fromArray(e.rotation), void 0 !== e.quaternion && i.quaternion.fromArray(e.quaternion), void 0 !== e.scale && i.scale.fromArray(e.scale)), void 0 !== e.castShadow && (i.castShadow = e.castShadow), void 0 !== e.receiveShadow && (i.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (i.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (i.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && i.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (i.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (i.visible = e.visible), void 0 !== e.userData && (i.userData = e.userData), void 0 !== e.children) for (var h = e.children, u = 0; u < h.length; u++) i.add(this.parseObject(h[u], n, r));
                if ("LOD" === e.type) for (var l = e.levels, f = 0; f < l.length; f++) {
                    var d = l[f], p = i.getObjectByProperty("uuid", d.object);
                    void 0 !== p && i.addLevel(p, d.distance)
                }
                return i
            }
        }()
    });
    var vo = {
        UVMapping: 300,
        CubeReflectionMapping: K,
        CubeRefractionMapping: $,
        EquirectangularReflectionMapping: tt,
        EquirectangularRefractionMapping: et,
        SphericalReflectionMapping: nt,
        CubeUVReflectionMapping: rt,
        CubeUVRefractionMapping: it
    }, yo = {RepeatWrapping: at, ClampToEdgeWrapping: ot, MirroredRepeatWrapping: st}, bo = {
        NearestFilter: ct,
        NearestMipMapNearestFilter: ht,
        NearestMipMapLinearFilter: ut,
        LinearFilter: lt,
        LinearMipMapNearestFilter: ft,
        LinearMipMapLinearFilter: dt
    };

    function xo(t) {
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : ca, this.options = void 0
    }

    xo.prototype = {
        constructor: xo, setOptions: function (t) {
            return this.options = t, this
        }, load: function (t, e, n, r) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
            var i = this, a = oa.get(t);
            if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function () {
                e && e(a), i.manager.itemEnd(t)
            }, 0), a;
            fetch(t).then(function (t) {
                return t.blob()
            }).then(function (t) {
                return createImageBitmap(t, i.options)
            }).then(function (n) {
                oa.add(t, n), e && e(n), i.manager.itemEnd(t)
            }).catch(function (e) {
                r && r(e), i.manager.itemEnd(t), i.manager.itemError(t)
            })
        }, setCrossOrigin: function () {
            return this
        }, setPath: function (t) {
            return this.path = t, this
        }
    };

    function wo() {
        this.type = "ShapePath", this.subPaths = [], this.currentPath = null
    }

    Object.assign(wo.prototype, {
        moveTo: function (t, e) {
            this.currentPath = new za, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
        }, lineTo: function (t, e) {
            this.currentPath.lineTo(t, e)
        }, quadraticCurveTo: function (t, e, n, r) {
            this.currentPath.quadraticCurveTo(t, e, n, r)
        }, bezierCurveTo: function (t, e, n, r, i, a) {
            this.currentPath.bezierCurveTo(t, e, n, r, i, a)
        }, splineThru: function (t) {
            this.currentPath.splineThru(t)
        }, toShapes: function (t, e) {
            function n(t) {
                for (var e = [], n = 0, r = t.length; n < r; n++) {
                    var i = t[n], a = new Ba;
                    a.curves = i.curves, e.push(a)
                }
                return e
            }

            function r(t, e) {
                for (var n = e.length, r = !1, i = n - 1, a = 0; a < n; i = a++) {
                    var o = e[i], s = e[a], c = s.x - o.x, h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (h < 0 && (o = e[a], c = -c, s = e[i], h = -h), t.y < o.y || t.y > s.y) continue;
                        if (t.y === o.y) {
                            if (t.x === o.x) return !0
                        } else {
                            var u = h * (t.x - o.x) - c * (t.y - o.y);
                            if (0 === u) return !0;
                            if (u < 0) continue;
                            r = !r
                        }
                    } else {
                        if (t.y !== o.y) continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
                    }
                }
                return r
            }

            var i = Li.isClockWise, a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === e) return n(a);
            var o, s, c, h = [];
            if (1 === a.length) return s = a[0], (c = new Ba).curves = s.curves, h.push(c), h;
            var u = !i(a[0].getPoints());
            u = t ? !u : u;
            var l, f = [], d = [], p = [], m = 0;
            d[m] = void 0, p[m] = [];
            for (var g = 0, v = a.length; g < v; g++) o = i(l = (s = a[g]).getPoints()), (o = t ? !o : o) ? (!u && d[m] && m++, d[m] = {
                s: new Ba,
                p: l
            }, d[m].s.curves = s.curves, u && m++, p[m] = []) : p[m].push({h: s, p: l[0]});
            if (!d[0]) return n(a);
            if (d.length > 1) {
                for (var y = !1, b = [], x = 0, w = d.length; x < w; x++) f[x] = [];
                for (x = 0, w = d.length; x < w; x++) for (var _ = p[x], M = 0; M < _.length; M++) {
                    for (var E = _[M], T = !0, S = 0; S < d.length; S++) r(E.p, d[S].p) && (x !== S && b.push({
                        froms: x,
                        tos: S,
                        hole: M
                    }), T ? (T = !1, f[S].push(E)) : y = !0);
                    T && f[x].push(E)
                }
                b.length > 0 && (y || (p = f))
            }
            g = 0;
            for (var A, L = d.length; g < L; g++) {
                c = d[g].s, h.push(c);
                for (var R = 0, P = (A = p[g]).length; R < P; R++) c.holes.push(A[R].h)
            }
            return h
        }
    });

    function _o(t) {
        this.type = "Font", this.data = t
    }

    Object.assign(_o.prototype, {
        isFont: !0, generateShapes: function (t, e, n) {
            function r(t, e, n, r) {
                var a = i.glyphs[t] || i.glyphs["?"];
                if (a) {
                    var o, s, c, h, u, l, f, d, p, m = new wo, g = [];
                    if (a.o) for (var v = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), y = 0, b = v.length; y < b;) {
                        switch (v[y++]) {
                            case"m":
                                o = v[y++] * e + n, s = v[y++] * e + r, m.moveTo(o, s);
                                break;
                            case"l":
                                o = v[y++] * e + n, s = v[y++] * e + r, m.lineTo(o, s);
                                break;
                            case"q":
                                c = v[y++] * e + n, h = v[y++] * e + r, u = v[y++] * e + n, l = v[y++] * e + r, m.quadraticCurveTo(u, l, c, h), (p = g[g.length - 1]) && (p.x, p.y);
                                break;
                            case"b":
                                c = v[y++] * e + n, h = v[y++] * e + r, u = v[y++] * e + n, l = v[y++] * e + r, f = v[y++] * e + n, d = v[y++] * e + r, m.bezierCurveTo(u, l, f, d, c, h), (p = g[g.length - 1]) && (p.x, p.y)
                        }
                    }
                    return {offsetX: a.ha * e, path: m}
                }
            }

            void 0 === e && (e = 100), void 0 === n && (n = 4);
            for (var i = this.data, a = function (t) {
                for (var n = String(t).split(""), a = e / i.resolution, o = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * a, s = 0, c = 0, h = [], u = 0; u < n.length; u++) {
                    var l = n[u];
                    if ("\n" === l) s = 0, c -= o; else {
                        var f = r(l, a, s, c);
                        s += f.offsetX, h.push(f.path)
                    }
                }
                return h
            }(t), o = [], s = 0, c = a.length; s < c; s++) Array.prototype.push.apply(o, a[s].toShapes());
            return o
        }
    });

    function Mo(t) {
        this.manager = void 0 !== t ? t : ca
    }

    Object.assign(Mo.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = new ua(this.manager);
            a.setPath(this.path), a.load(t, function (t) {
                var n;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
                }
                var r = i.parse(n);
                e && e(r)
            }, n, r)
        }, parse: function (t) {
            return new _o(t)
        }, setPath: function (t) {
            return this.path = t, this
        }
    });
    var Eo, To = {
        getContext: function () {
            return void 0 === Eo && (Eo = new (window.AudioContext || window.webkitAudioContext)), Eo
        }, setContext: function (t) {
            Eo = t
        }
    };

    function So(t) {
        this.manager = void 0 !== t ? t : ca
    }

    Object.assign(So.prototype, {
        load: function (t, e, n, r) {
            var i = new ua(this.manager);
            i.setResponseType("arraybuffer"), i.load(t, function (t) {
                To.getContext().decodeAudioData(t, function (t) {
                    e(t)
                })
            }, n, r)
        }
    });

    function Ao() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new vr, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new vr, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }

    Object.assign(Ao.prototype, {
        update: function () {
            var t, e, n, r, i, a, o, s, c = new ae, h = new ae;
            return function (u) {
                if (t !== this || e !== u.focus || n !== u.fov || r !== u.aspect * this.aspect || i !== u.near || a !== u.far || o !== u.zoom || s !== this.eyeSep) {
                    t = this, e = u.focus, n = u.fov, r = u.aspect * this.aspect, i = u.near, a = u.far, o = u.zoom;
                    var l, f, d = u.projectionMatrix.clone(), p = (s = this.eyeSep / 2) * i / e,
                        m = i * Math.tan(re.DEG2RAD * n * .5) / o;
                    h.elements[12] = -s, c.elements[12] = s, l = -m * r + p, f = m * r + p, d.elements[0] = 2 * i / (f - l), d.elements[8] = (f + l) / (f - l), this.cameraL.projectionMatrix.copy(d), l = -m * r - p, f = m * r - p, d.elements[0] = 2 * i / (f - l), d.elements[8] = (f + l) / (f - l), this.cameraR.projectionMatrix.copy(d)
                }
                this.cameraL.matrixWorld.copy(u.matrixWorld).multiply(h), this.cameraR.matrixWorld.copy(u.matrixWorld).multiply(c)
            }
        }()
    });

    function Lo(t, e, n) {
        Tn.call(this), this.type = "CubeCamera";
        var r = new vr(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new se(1, 0, 0)), this.add(r);
        var i = new vr(90, 1, t, e);
        i.up.set(0, -1, 0), i.lookAt(new se(-1, 0, 0)), this.add(i);
        var a = new vr(90, 1, t, e);
        a.up.set(0, 0, 1), a.lookAt(new se(0, 1, 0)), this.add(a);
        var o = new vr(90, 1, t, e);
        o.up.set(0, 0, -1), o.lookAt(new se(0, -1, 0)), this.add(o);
        var s = new vr(90, 1, t, e);
        s.up.set(0, -1, 0), s.lookAt(new se(0, 0, 1)), this.add(s);
        var c = new vr(90, 1, t, e);
        c.up.set(0, -1, 0), c.lookAt(new se(0, 0, -1)), this.add(c);
        var h = {format: At, magFilter: lt, minFilter: lt};
        this.renderTarget = new de(n, n, h), this.renderTarget.texture.name = "CubeCamera", this.update = function (t, e) {
            null === this.parent && this.updateMatrixWorld();
            var n = this.renderTarget, h = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, n.activeCubeFace = 0, t.render(e, r, n), n.activeCubeFace = 1, t.render(e, i, n), n.activeCubeFace = 2, t.render(e, a, n), n.activeCubeFace = 3, t.render(e, o, n), n.activeCubeFace = 4, t.render(e, s, n), n.texture.generateMipmaps = h, n.activeCubeFace = 5, t.render(e, c, n), t.setRenderTarget(null)
        }, this.clear = function (t, e, n, r) {
            for (var i = this.renderTarget, a = 0; a < 6; a++) i.activeCubeFace = a, t.setRenderTarget(i), t.clear(e, n, r);
            t.setRenderTarget(null)
        }
    }

    Lo.prototype = Object.create(Tn.prototype), Lo.prototype.constructor = Lo;

    function Ro() {
        Tn.call(this), this.type = "AudioListener", this.context = To.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }

    Ro.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Ro, getInput: function () {
            return this.gain
        }, removeFilter: function () {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        }, getFilter: function () {
            return this.filter
        }, setFilter: function (t) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        }, getMasterVolume: function () {
            return this.gain.gain.value
        }, setMasterVolume: function (t) {
            this.gain.gain.value = t
        }, updateMatrixWorld: function () {
            var t = new se, e = new oe, n = new se, r = new se;
            return function (i) {
                Tn.prototype.updateMatrixWorld.call(this, i);
                var a = this.context.listener, o = this.up;
                this.matrixWorld.decompose(t, e, n), r.set(0, 0, -1).applyQuaternion(e), a.positionX ? (a.positionX.setValueAtTime(t.x, this.context.currentTime), a.positionY.setValueAtTime(t.y, this.context.currentTime), a.positionZ.setValueAtTime(t.z, this.context.currentTime), a.forwardX.setValueAtTime(r.x, this.context.currentTime), a.forwardY.setValueAtTime(r.y, this.context.currentTime), a.forwardZ.setValueAtTime(r.z, this.context.currentTime), a.upX.setValueAtTime(o.x, this.context.currentTime), a.upY.setValueAtTime(o.y, this.context.currentTime), a.upZ.setValueAtTime(o.z, this.context.currentTime)) : (a.setPosition(t.x, t.y, t.z), a.setOrientation(r.x, r.y, r.z, o.x, o.y, o.z))
            }
        }()
    });

    function Po(t) {
        Tn.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    Po.prototype = Object.assign(Object.create(Tn.prototype), {
        constructor: Po, getOutput: function () {
            return this.gain
        }, setNodeSource: function (t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        }, setBuffer: function (t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        }, play: function () {
            if (!0 !== this.isPlaying) {
                if (!1 !== this.hasPlaybackControl) {
                    var t = this.context.createBufferSource();
                    return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            } else console.warn("THREE.Audio: Audio is already playing.")
        }, pause: function () {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }, stop: function () {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.offset = 0, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }, connect: function () {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        }, disconnect: function () {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        }, getFilters: function () {
            return this.filters
        }, setFilters: function (t) {
            return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
        }, getFilter: function () {
            return this.getFilters()[0]
        }, setFilter: function (t) {
            return this.setFilters(t ? [t] : [])
        }, setPlaybackRate: function (t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }, getPlaybackRate: function () {
            return this.playbackRate
        }, onEnded: function () {
            this.isPlaying = !1
        }, getLoop: function () {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        }, setLoop: function (t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }, getVolume: function () {
            return this.gain.gain.value
        }, setVolume: function (t) {
            return this.gain.gain.value = t, this
        }
    });

    function Co(t) {
        Po.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    Co.prototype = Object.assign(Object.create(Po.prototype), {
        constructor: Co, getOutput: function () {
            return this.panner
        }, getRefDistance: function () {
            return this.panner.refDistance
        }, setRefDistance: function (t) {
            this.panner.refDistance = t
        }, getRolloffFactor: function () {
            return this.panner.rolloffFactor
        }, setRolloffFactor: function (t) {
            this.panner.rolloffFactor = t
        }, getDistanceModel: function () {
            return this.panner.distanceModel
        }, setDistanceModel: function (t) {
            this.panner.distanceModel = t
        }, getMaxDistance: function () {
            return this.panner.maxDistance
        }, setMaxDistance: function (t) {
            this.panner.maxDistance = t
        }, updateMatrixWorld: function () {
            var t = new se;
            return function (e) {
                Tn.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
            }
        }()
    });

    function No(t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    }

    Object.assign(No.prototype, {
        getFrequencyData: function () {
            return this.analyser.getByteFrequencyData(this.data), this.data
        }, getAverageFrequency: function () {
            for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) t += e[n];
            return t / e.length
        }
    });

    function Oo(t, e, n) {
        this.binding = t, this.valueSize = n;
        var r, i = Float64Array;
        switch (e) {
            case"quaternion":
                r = this._slerp;
                break;
            case"string":
            case"bool":
                i = Array, r = this._select;
                break;
            default:
                r = this._lerp
        }
        this.buffer = new i(4 * n), this._mixBufferRegion = r, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }

    Object.assign(Oo.prototype, {
        accumulate: function (t, e) {
            var n = this.buffer, r = this.valueSize, i = t * r + r, a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== r; ++o) n[i + o] = n[o];
                a = e
            } else {
                var s = e / (a += e);
                this._mixBufferRegion(n, i, 0, s, r)
            }
            this.cumulativeWeight = a
        }, apply: function (t) {
            var e = this.valueSize, n = this.buffer, r = t * e + e, i = this.cumulativeWeight, a = this.binding;
            if (this.cumulativeWeight = 0, i < 1) {
                var o = 3 * e;
                this._mixBufferRegion(n, r, o, 1 - i, e)
            }
            for (var s = e, c = e + e; s !== c; ++s) if (n[s] !== n[s + e]) {
                a.setValue(n, r);
                break
            }
        }, saveOriginalState: function () {
            var t = this.binding, e = this.buffer, n = this.valueSize, r = 3 * n;
            t.getValue(e, r);
            for (var i = n, a = r; i !== a; ++i) e[i] = e[r + i % n];
            this.cumulativeWeight = 0
        }, restoreOriginalState: function () {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        }, _select: function (t, e, n, r, i) {
            if (r >= .5) for (var a = 0; a !== i; ++a) t[e + a] = t[n + a]
        }, _slerp: function (t, e, n, r) {
            oe.slerpFlat(t, e, t, e, t, n, r)
        }, _lerp: function (t, e, n, r, i) {
            for (var a = 1 - r, o = 0; o !== i; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[n + o] * r
            }
        }
    });

    function Io(t, e, n) {
        var r = n || Do.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, r)
    }

    Object.assign(Io.prototype, {
        getValue: function (t, e) {
            this.bind();
            var n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
            void 0 !== r && r.getValue(t, e)
        }, setValue: function (t, e) {
            for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(t, e)
        }, bind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
        }, unbind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
        }
    });

    function Do(t, e, n) {
        this.path = e, this.parsedPath = n || Do.parseTrackName(e), this.node = Do.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
    }

    Object.assign(Do, {
        Composite: Io, create: function (t, e, n) {
            return t && t.isAnimationObjectGroup ? new Do.Composite(t, e, n) : new Do(t, e, n)
        }, sanitizeNodeName: function (t) {
            return t.replace(/\s/g, "_").replace(/[^\w-]/g, "")
        }, parseTrackName: function () {
            var t = new RegExp("^" + /((?:[\w-]+[\/:])*)/.source + /([\w-\.]+)?/.source + /(?:\.([\w-]+)(?:\[(.+)\])?)?/.source + /\.([\w-]+)(?:\[(.+)\])?/.source + "$"),
                e = ["material", "materials", "bones"];
            return function (n) {
                var r = t.exec(n);
                if (!r) throw new Error("PropertyBinding: Cannot parse trackName: " + n);
                var i = {nodeName: r[2], objectName: r[3], objectIndex: r[4], propertyName: r[5], propertyIndex: r[6]},
                    a = i.nodeName && i.nodeName.lastIndexOf(".");
                if (void 0 !== a && -1 !== a) {
                    var o = i.nodeName.substring(a + 1);
                    -1 !== e.indexOf(o) && (i.nodeName = i.nodeName.substring(0, a), i.objectName = o)
                }
                if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + n);
                return i
            }
        }(), findNode: function (t, e) {
            if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                var n = function (t) {
                    for (var n = 0; n < t.bones.length; n++) {
                        var r = t.bones[n];
                        if (r.name === e) return r
                    }
                    return null
                }(t.skeleton);
                if (n) return n
            }
            if (t.children) {
                var r = function (t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        if (i.name === e || i.uuid === e) return i;
                        var a = r(i.children);
                        if (a) return a
                    }
                    return null
                }, i = r(t.children);
                if (i) return i
            }
            return null
        }
    }), Object.assign(Do.prototype, {
        _getValue_unavailable: function () {
        },
        _setValue_unavailable: function () {
        },
        BindingType: {Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3},
        Versioning: {None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2},
        GetterByBindingType: [function (t, e) {
            t[e] = this.node[this.propertyName]
        }, function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) t[e++] = n[r]
        }, function (t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }, function (t, e) {
            this.resolvedProperty.toArray(t, e)
        }],
        SetterByBindingTypeAndVersioning: [[function (t, e) {
            this.targetObject[this.propertyName] = t[e]
        }, function (t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
        }, function (t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = t[e++]
        }, function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = t[e++];
            this.targetObject.needsUpdate = !0
        }, function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }, function (t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
        }, function (t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (t, e) {
            this.resolvedProperty.fromArray(t, e)
        }, function (t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
        }, function (t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
        }]],
        getValue: function (t, e) {
            this.bind(), this.getValue(t, e)
        },
        setValue: function (t, e) {
            this.bind(), this.setValue(t, e)
        },
        bind: function () {
            var t = this.node, e = this.parsedPath, n = e.objectName, r = e.propertyName, i = e.propertyIndex;
            if (t || (t = Do.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                if (n) {
                    var a = e.objectIndex;
                    switch (n) {
                        case"materials":
                            if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            t = t.material.materials;
                            break;
                        case"bones":
                            if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            t = t.skeleton.bones;
                            for (var o = 0; o < t.length; o++) if (t[o].name === a) {
                                a = o;
                                break
                            }
                            break;
                        default:
                            if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            t = t[n]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        t = t[a]
                    }
                }
                var s = t[r];
                if (void 0 !== s) {
                    var c = this.Versioning.None;
                    void 0 !== t.needsUpdate ? (c = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
                    var h = this.BindingType.Direct;
                    if (void 0 !== i) {
                        if ("morphTargetInfluences" === r) {
                            if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++) if (t.geometry.morphAttributes.position[o].name === i) {
                                    i = o;
                                    break
                                }
                            } else {
                                if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (o = 0; o < this.node.geometry.morphTargets.length; o++) if (t.geometry.morphTargets[o].name === i) {
                                    i = o;
                                    break
                                }
                            }
                        }
                        h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i
                    } else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
                    this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
                } else {
                    var u = e.nodeName;
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + u + "." + r + " but it wasn't found.", t)
                }
            } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function () {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }), Object.assign(Do.prototype, {
        _getValue_unbound: Do.prototype.getValue,
        _setValue_unbound: Do.prototype.setValue
    });

    function Uo() {
        this.uuid = re.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var r = this;
        this.stats = {
            objects: {
                get total() {
                    return r._objects.length
                }, get inUse() {
                    return this.total - r.nCachedObjects_
                }
            }, get bindingsPerObject() {
                return r._bindings.length
            }
        }
    }

    Object.assign(Uo.prototype, {
        isAnimationObjectGroup: !0, add: function () {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = 0, h = arguments.length; c !== h; ++c) {
                var u = arguments[c], l = u.uuid, f = r[l], d = void 0;
                if (void 0 === f) {
                    f = e++, r[l] = f, t.push(u);
                    for (var p = 0, m = s; p !== m; ++p) o[p].push(new Do(u, i[p], a[p]))
                } else if (f < n) {
                    d = t[f];
                    var g = --n, v = t[g];
                    r[v.uuid] = f, t[f] = v, r[l] = g, t[g] = u;
                    for (p = 0, m = s; p !== m; ++p) {
                        var y = o[p], b = y[g], x = y[f];
                        y[f] = b, void 0 === x && (x = new Do(u, i[p], a[p])), y[g] = x
                    }
                } else t[f] !== d && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = n
        }, remove: function () {
            for (var t = this._objects, e = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a], c = s.uuid, h = n[c];
                if (void 0 !== h && h >= e) {
                    var u = e++, l = t[u];
                    n[l.uuid] = h, t[h] = l, n[c] = u, t[u] = s;
                    for (var f = 0, d = i; f !== d; ++f) {
                        var p = r[f], m = p[u], g = p[h];
                        p[h] = m, p[u] = g
                    }
                }
            }
            this.nCachedObjects_ = e
        }, uncache: function () {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o].uuid, h = r[c];
                if (void 0 !== h) if (delete r[c], h < n) {
                    var u = --n, l = t[u], f = t[v = --e];
                    r[l.uuid] = h, t[h] = l, r[f.uuid] = u, t[u] = f, t.pop();
                    for (var d = 0, p = a; d !== p; ++d) {
                        var m = (y = i[d])[u], g = y[v];
                        y[h] = m, y[u] = g, y.pop()
                    }
                } else {
                    var v;
                    r[(f = t[v = --e]).uuid] = h, t[h] = f, t.pop();
                    for (d = 0, p = a; d !== p; ++d) {
                        var y;
                        (y = i[d])[h] = y[v], y.pop()
                    }
                }
            }
            this.nCachedObjects_ = n
        }, subscribe_: function (t, e) {
            var n = this._bindingsIndicesByPath, r = n[t], i = this._bindings;
            if (void 0 !== r) return i[r];
            var a = this._paths, o = this._parsedPaths, s = this._objects, c = s.length, h = this.nCachedObjects_,
                u = new Array(c);
            r = i.length, n[t] = r, a.push(t), o.push(e), i.push(u);
            for (var l = h, f = s.length; l !== f; ++l) {
                var d = s[l];
                u[l] = new Do(d, t, e)
            }
            return u
        }, unsubscribe_: function (t) {
            var e = this._bindingsIndicesByPath, n = e[t];
            if (void 0 !== n) {
                var r = this._paths, i = this._parsedPaths, a = this._bindings, o = a.length - 1, s = a[o];
                e[t[o]] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop()
            }
        }
    });

    function zo(t, e, n) {
        this._mixer = t, this._clip = e, this._localRoot = n || null;
        for (var r = e.tracks, i = r.length, a = new Array(i), o = {
            endingStart: jt,
            endingEnd: jt
        }, s = 0; s !== i; ++s) {
            var c = r[s].createInterpolant(null);
            a[s] = c, c.settings = o
        }
        this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Vt, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    Object.assign(zo.prototype, {
        play: function () {
            return this._mixer._activateAction(this), this
        }, stop: function () {
            return this._mixer._deactivateAction(this), this.reset()
        }, reset: function () {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        }, isRunning: function () {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        }, isScheduled: function () {
            return this._mixer._isActiveAction(this)
        }, startAt: function (t) {
            return this._startTime = t, this
        }, setLoop: function (t, e) {
            return this.loop = t, this.repetitions = e, this
        }, setEffectiveWeight: function (t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        }, getEffectiveWeight: function () {
            return this._effectiveWeight
        }, fadeIn: function (t) {
            return this._scheduleFading(t, 0, 1)
        }, fadeOut: function (t) {
            return this._scheduleFading(t, 1, 0)
        }, crossFadeFrom: function (t, e, n) {
            if (t.fadeOut(e), this.fadeIn(e), n) {
                var r = this._clip.duration, i = t._clip.duration, a = i / r, o = r / i;
                t.warp(1, a, e), this.warp(o, 1, e)
            }
            return this
        }, crossFadeTo: function (t, e, n) {
            return t.crossFadeFrom(this, e, n)
        }, stopFading: function () {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        }, setEffectiveTimeScale: function (t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        }, getEffectiveTimeScale: function () {
            return this._effectiveTimeScale
        }, setDuration: function (t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping()
        }, syncWith: function (t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        }, halt: function (t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        }, warp: function (t, e, n) {
            var r = this._mixer, i = r.time, a = this._timeScaleInterpolant, o = this.timeScale;
            null === a && (a = r._lendControlInterpolant(), this._timeScaleInterpolant = a);
            var s = a.parameterPositions, c = a.sampleValues;
            return s[0] = i, s[1] = i + n, c[0] = t / o, c[1] = e / o, this
        }, stopWarping: function () {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        }, getMixer: function () {
            return this._mixer
        }, getClip: function () {
            return this._clip
        }, getRoot: function () {
            return this._localRoot || this._mixer._root
        }, _update: function (t, e, n, r) {
            if (this.enabled) {
                var i = this._startTime;
                if (null !== i) {
                    var a = (t - i) * n;
                    if (a < 0 || 0 === n) return;
                    this._startTime = null, e = n * a
                }
                e *= this._updateTimeScale(t);
                var o = this._updateTime(e), s = this._updateWeight(t);
                if (s > 0) for (var c = this._interpolants, h = this._propertyBindings, u = 0, l = c.length; u !== l; ++u) c[u].evaluate(o), h[u].accumulate(r, s)
            } else this._updateWeight(t)
        }, _updateWeight: function (t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var r = n.evaluate(t)[0];
                    e *= r, t > n.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e, e
        }, _updateTimeScale: function (t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var n = this._timeScaleInterpolant;
                if (null !== n) {
                    e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                }
            }
            return this._effectiveTimeScale = e, e
        }, _updateTime: function (t) {
            var e = this.time + t;
            if (0 === t) return e;
            var n = this._clip.duration, r = this.loop, i = this._loopCount;
            if (2200 === r) {
                -1 === i && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t:{
                    if (e >= n) e = n; else {
                        if (!(e < 0)) break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                var a = 2202 === r;
                if (-1 === i && (t >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= n || e < 0) {
                    var o = Math.floor(e / n);
                    e -= n * o, i += Math.abs(o);
                    var s = this.repetitions - i;
                    if (s < 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? n : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    }); else {
                        if (0 === s) {
                            var c = t < 0;
                            this._setEndings(c, !c, a)
                        } else this._setEndings(!1, !1, a);
                        this._loopCount = i, this._mixer.dispatchEvent({type: "loop", action: this, loopDelta: o})
                    }
                }
                if (a && 1 == (1 & i)) return this.time = e, n - e
            }
            return this.time = e, e
        }, _setEndings: function (t, e, n) {
            var r = this._interpolantSettings;
            n ? (r.endingStart = 2401, r.endingEnd = 2401) : (r.endingStart = t ? this.zeroSlopeAtStart ? 2401 : jt : 2402, r.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : jt : 2402)
        }, _scheduleFading: function (t, e, n) {
            var r = this._mixer, i = r.time, a = this._weightInterpolant;
            null === a && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
            var o = a.parameterPositions, s = a.sampleValues;
            return o[0] = i, s[0] = e, o[1] = i + t, s[1] = n, this
        }
    });

    function Bo(t) {
        this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    Bo.prototype = Object.assign(Object.create(t.prototype), {
        constructor: Bo, _bindAction: function (t, e) {
            var n = t._localRoot || this._root, r = t._clip.tracks, i = r.length, a = t._propertyBindings,
                o = t._interpolants, s = n.uuid, c = this._bindingsByRootAndName, h = c[s];
            void 0 === h && (h = {}, c[s] = h);
            for (var u = 0; u !== i; ++u) {
                var l = r[u], f = l.name, d = h[f];
                if (void 0 !== d) a[u] = d; else {
                    if (void 0 !== (d = a[u])) {
                        null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, f));
                        continue
                    }
                    var p = e && e._propertyBindings[u].binding.parsedPath;
                    ++(d = new Oo(Do.create(n, f, p), l.ValueTypeName, l.getValueSize())).referenceCount, this._addInactiveBinding(d, s, f), a[u] = d
                }
                o[u].resultBuffer = d.buffer
            }
        }, _activateAction: function (t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid, n = t._clip.uuid, r = this._actionsByClip[n];
                    this._bindAction(t, r && r.knownActions[0]), this._addInactiveAction(t, n, e)
                }
                for (var i = t._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
                    var s = i[a];
                    0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                }
                this._lendAction(t)
            }
        }, _deactivateAction: function (t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
                    var i = e[n];
                    0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
                }
                this._takeBackAction(t)
            }
        }, _initMemoryManager: function () {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    }, get inUse() {
                        return t._nActiveActions
                    }
                }, bindings: {
                    get total() {
                        return t._bindings.length
                    }, get inUse() {
                        return t._nActiveBindings
                    }
                }, controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    }, get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        }, _isActiveAction: function (t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        }, _addInactiveAction: function (t, e, n) {
            var r = this._actions, i = this._actionsByClip, a = i[e];
            if (void 0 === a) a = {knownActions: [t], actionByRoot: {}}, t._byClipCacheIndex = 0, i[e] = a; else {
                var o = a.knownActions;
                t._byClipCacheIndex = o.length, o.push(t)
            }
            t._cacheIndex = r.length, r.push(t), a.actionByRoot[n] = t
        }, _removeInactiveAction: function (t) {
            var e = this._actions, n = e[e.length - 1], r = t._cacheIndex;
            n._cacheIndex = r, e[r] = n, e.pop(), t._cacheIndex = null;
            var i = t._clip.uuid, a = this._actionsByClip, o = a[i], s = o.knownActions, c = s[s.length - 1],
                h = t._byClipCacheIndex;
            c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null;
            delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[i], this._removeInactiveBindingsForAction(t)
        }, _removeInactiveBindingsForAction: function (t) {
            for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
                var i = e[n];
                0 == --i.referenceCount && this._removeInactiveBinding(i)
            }
        }, _lendAction: function (t) {
            var e = this._actions, n = t._cacheIndex, r = this._nActiveActions++, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _takeBackAction: function (t) {
            var e = this._actions, n = t._cacheIndex, r = --this._nActiveActions, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _addInactiveBinding: function (t, e, n) {
            var r = this._bindingsByRootAndName, i = r[e], a = this._bindings;
            void 0 === i && (i = {}, r[e] = i), i[n] = t, t._cacheIndex = a.length, a.push(t)
        }, _removeInactiveBinding: function (t) {
            var e = this._bindings, n = t.binding, r = n.rootNode.uuid, i = n.path, a = this._bindingsByRootAndName,
                o = a[r], s = e[e.length - 1], c = t._cacheIndex;
            s._cacheIndex = c, e[c] = s, e.pop(), delete o[i];
            t:{
                for (var h in o) break t;
                delete a[r]
            }
        }, _lendBinding: function (t) {
            var e = this._bindings, n = t._cacheIndex, r = this._nActiveBindings++, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _takeBackBinding: function (t) {
            var e = this._bindings, n = t._cacheIndex, r = --this._nActiveBindings, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _lendControlInterpolant: function () {
            var t = this._controlInterpolants, e = this._nActiveControlInterpolants++, n = t[e];
            return void 0 === n && ((n = new ro(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = n), n
        }, _takeBackControlInterpolant: function (t) {
            var e = this._controlInterpolants, n = t.__cacheIndex, r = --this._nActiveControlInterpolants, i = e[r];
            t.__cacheIndex = r, e[r] = t, i.__cacheIndex = n, e[n] = i
        }, _controlInterpolantsResultBuffer: new Float32Array(1), clipAction: function (t, e) {
            var n = e || this._root, r = n.uuid, i = "string" == typeof t ? co.findByName(n, t) : t,
                a = null !== i ? i.uuid : t, o = this._actionsByClip[a], s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[r];
                if (void 0 !== c) return c;
                s = o.knownActions[0], null === i && (i = s._clip)
            }
            if (null === i) return null;
            var h = new zo(this, i, e);
            return this._bindAction(h, s), this._addInactiveAction(h, a, r), h
        }, existingAction: function (t, e) {
            var n = e || this._root, r = n.uuid, i = "string" == typeof t ? co.findByName(n, t) : t, a = i ? i.uuid : t,
                o = this._actionsByClip[a];
            return void 0 !== o ? o.actionByRoot[r] || null : null
        }, stopAllAction: function () {
            var t = this._actions, e = this._nActiveActions, n = this._bindings, r = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var i = 0; i !== e; ++i) t[i].reset();
            for (i = 0; i !== r; ++i) n[i].useCount = 0;
            return this
        }, update: function (t) {
            t *= this.timeScale;
            for (var e = this._actions, n = this._nActiveActions, r = this.time += t, i = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
                e[o]._update(r, t, i, a)
            }
            var s = this._bindings, c = this._nActiveBindings;
            for (o = 0; o !== c; ++o) s[o].apply(a);
            return this
        }, getRoot: function () {
            return this._root
        }, uncacheClip: function (t) {
            var e = this._actions, n = t.uuid, r = this._actionsByClip, i = r[n];
            if (void 0 !== i) {
                for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var h = c._cacheIndex, u = e[e.length - 1];
                    c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, e[h] = u, e.pop(), this._removeInactiveBindingsForAction(c)
                }
                delete r[n]
            }
        }, uncacheRoot: function (t) {
            var e = t.uuid, n = this._actionsByClip;
            for (var r in n) {
                var i = n[r].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
            }
            var a = this._bindingsByRootAndName[e];
            if (void 0 !== a) for (var o in a) {
                var s = a[o];
                s.restoreOriginalState(), this._removeInactiveBinding(s)
            }
        }, uncacheAction: function (t, e) {
            var n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
        }
    });

    function Fo(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
    }

    Fo.prototype.clone = function () {
        return new Fo(void 0 === this.value.clone ? this.value : this.value.clone())
    };

    function ko() {
        jn.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    ko.prototype = Object.assign(Object.create(jn.prototype), {
        constructor: ko,
        isInstancedBufferGeometry: !0,
        copy: function (t) {
            return jn.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        }
    });

    function Go(t, e, n, r) {
        this.uuid = re.generateUUID(), this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === r
    }

    Object.defineProperties(Go.prototype, {
        count: {
            get: function () {
                return this.data.count
            }
        }, array: {
            get: function () {
                return this.data.array
            }
        }
    }), Object.assign(Go.prototype, {
        isInterleavedBufferAttribute: !0, setX: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        }, setY: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        }, setZ: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        }, setW: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        }, getX: function (t) {
            return this.data.array[t * this.data.stride + this.offset]
        }, getY: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        }, getZ: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        }, getW: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        }, setXY: function (t, e, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
        }, setXYZ: function (t, e, n, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this
        }, setXYZW: function (t, e, n, r, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = i, this
        }
    });

    function Ho(t, e) {
        this.uuid = re.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function () {
        }, this.version = 0
    }

    Object.defineProperty(Ho.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(Ho.prototype, {
        isInterleavedBuffer: !0, setArray: function (t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t
        }, setDynamic: function (t) {
            return this.dynamic = t, this
        }, copy: function (t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
        }, copyAt: function (t, e, n) {
            t *= this.stride, n *= e.stride;
            for (var r = 0, i = this.stride; r < i; r++) this.array[t + r] = e.array[n + r];
            return this
        }, set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, onUpload: function (t) {
            return this.onUploadCallback = t, this
        }
    });

    function Vo(t, e, n) {
        Ho.call(this, t, e), this.meshPerAttribute = n || 1
    }

    Vo.prototype = Object.assign(Object.create(Ho.prototype), {
        constructor: Vo,
        isInstancedInterleavedBuffer: !0,
        copy: function (t) {
            return Ho.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }
    });

    function jo(t, e, n) {
        Cn.call(this, t, e), this.meshPerAttribute = n || 1
    }

    jo.prototype = Object.assign(Object.create(Cn.prototype), {
        constructor: jo,
        isInstancedBufferAttribute: !0,
        copy: function (t) {
            return Cn.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }
    });

    function Wo(t, e, n, r) {
        this.ray = new Qn(t, e), this.near = n || 0, this.far = r || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {threshold: 1},
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function () {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }

    function qo(t, e) {
        return t.distance - e.distance
    }

    function Xo(t, e, n, r) {
        if (!1 !== t.visible && (t.raycast(e, n), !0 === r)) for (var i = t.children, a = 0, o = i.length; a < o; a++) Xo(i[a], e, n, !0)
    }

    Object.assign(Wo.prototype, {
        linePrecision: 1, set: function (t, e) {
            this.ray.set(t, e)
        }, setFromCamera: function (t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        }, intersectObject: function (t, e) {
            var n = [];
            return Xo(t, this, n, e), n.sort(qo), n
        }, intersectObjects: function (t, e) {
            var n = [];
            if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
            for (var r = 0, i = t.length; r < i; r++) Xo(t[r], this, n, e);
            return n.sort(qo), n
        }
    });

    function Yo(t) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }

    Object.assign(Yo.prototype, {
        start: function () {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        }, stop: function () {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        }, getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime
        }, getDelta: function () {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    });

    function Zo(t, e, n) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this
    }

    Object.assign(Zo.prototype, {
        set: function (t, e, n) {
            return this.radius = t, this.phi = e, this.theta = n, this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
        }, makeSafe: function () {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        }, setFromVector3: function (t) {
            return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(re.clamp(t.y / this.radius, -1, 1))), this
        }
    });

    function Jo(t, e, n) {
        return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this
    }

    Object.assign(Jo.prototype, {
        set: function (t, e, n) {
            return this.radius = t, this.theta = e, this.y = n, this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        }, setFromVector3: function (t) {
            return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this
        }
    });

    function Qo(t) {
        Tn.call(this), this.material = t, this.render = function () {
        }
    }

    Qo.prototype = Object.create(Tn.prototype), Qo.prototype.constructor = Qo, Qo.prototype.isImmediateRenderObject = !0;

    function Ko(t, e, n, r) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var i = void 0 !== n ? n : 16711680, a = void 0 !== r ? r : 1, o = 0, s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new jn, h = new Fn(2 * o * 3, 3);
        c.addAttribute("position", h), Ir.call(this, c, new Nr({
            color: i,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    }

    Ko.prototype = Object.create(Ir.prototype), Ko.prototype.constructor = Ko, Ko.prototype.update = function () {
        var t = new se, e = new se, n = new ce;
        return function () {
            var r = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            var i = this.object.matrixWorld, a = this.geometry.attributes.position, o = this.object.geometry;
            if (o && o.isGeometry) for (var s = o.vertices, c = o.faces, h = 0, u = 0, l = c.length; u < l; u++) for (var f = c[u], d = 0, p = f.vertexNormals.length; d < p; d++) {
                var m = s[f[r[d]]], g = f.vertexNormals[d];
                t.copy(m).applyMatrix4(i), e.copy(g).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
            } else if (o && o.isBufferGeometry) {
                var v = o.attributes.position, y = o.attributes.normal;
                for (h = 0, d = 0, p = v.count; d < p; d++) t.set(v.getX(d), v.getY(d), v.getZ(d)).applyMatrix4(i), e.set(y.getX(d), y.getY(d), y.getZ(d)), e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
            }
            a.needsUpdate = !0
        }
    }();

    function $o(t, e) {
        Tn.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        for (var n = new jn, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, a = 1; i < 32; i++, a++) {
            var o = i / 32 * Math.PI * 2, s = a / 32 * Math.PI * 2;
            r.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        n.addAttribute("position", new Fn(r, 3));
        var c = new Nr({fog: !1});
        this.cone = new Ir(n, c), this.add(this.cone), this.update()
    }

    $o.prototype = Object.create(Tn.prototype), $o.prototype.constructor = $o, $o.prototype.dispose = function () {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, $o.prototype.update = function () {
        var t = new se, e = new se;
        return function () {
            this.light.updateMatrixWorld();
            var n = this.light.distance ? this.light.distance : 1e3, r = n * Math.tan(this.light.angle);
            this.cone.scale.set(r, r, n), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
    }();

    function ts(t) {
        for (var e = function t(e) {
            var n = [];
            e && e.isBone && n.push(e);
            for (var r = 0; r < e.children.length; r++) n.push.apply(n, t(e.children[r]));
            return n
        }(t), n = new jn, r = [], i = [], a = new nn(0, 0, 1), o = new nn(0, 1, 0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b))
        }
        n.addAttribute("position", new Fn(r, 3)), n.addAttribute("color", new Fn(i, 3));
        var h = new Nr({vertexColors: d, depthTest: !1, depthWrite: !1, transparent: !0});
        Ir.call(this, n, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }

    ts.prototype = Object.create(Ir.prototype), ts.prototype.constructor = ts, ts.prototype.updateMatrixWorld = function () {
        var t = new se, e = new ae, n = new ae;
        return function (r) {
            var i = this.bones, a = this.geometry, o = a.getAttribute("position");
            n.getInverse(this.root.matrixWorld);
            for (var s = 0, c = 0; s < i.length; s++) {
                var h = i[s];
                h.parent && h.parent.isBone && (e.multiplyMatrices(n, h.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c, t.x, t.y, t.z), e.multiplyMatrices(n, h.parent.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(c + 1, t.x, t.y, t.z), c += 2)
            }
            a.getAttribute("position").needsUpdate = !0, Tn.prototype.updateMatrixWorld.call(this, r)
        }
    }();

    function es(t, e, n) {
        this.light = t, this.light.updateMatrixWorld(), this.color = n;
        var r = new Ii(e, 4, 2), i = new Zn({wireframe: !0, fog: !1});
        tr.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    es.prototype = Object.create(tr.prototype), es.prototype.constructor = es, es.prototype.dispose = function () {
        this.geometry.dispose(), this.material.dispose()
    }, es.prototype.update = function () {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    };

    function ns(t, e) {
        Tn.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        var n = new Nr({fog: !1}), r = new jn;
        r.addAttribute("position", new Cn(new Float32Array(15), 3)), this.line = new Or(r, n), this.add(this.line), this.update()
    }

    ns.prototype = Object.create(Tn.prototype), ns.prototype.constructor = ns, ns.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, ns.prototype.update = function () {
        var t = .5 * this.light.width, e = .5 * this.light.height, n = this.line.geometry.attributes.position,
            r = n.array;
        r[0] = t, r[1] = -e, r[2] = 0, r[3] = t, r[4] = e, r[5] = 0, r[6] = -t, r[7] = e, r[8] = 0, r[9] = -t, r[10] = -e, r[11] = 0, r[12] = t, r[13] = -e, r[14] = 0, n.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
    };

    function rs(t, e, n) {
        Tn.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
        var r = new Jr(e);
        r.rotateY(.5 * Math.PI), this.material = new Zn({
            wireframe: !0,
            fog: !1
        }), void 0 === this.color && (this.material.vertexColors = d);
        var i = r.getAttribute("position"), a = new Float32Array(3 * i.count);
        r.addAttribute("color", new Cn(a, 3)), this.add(new tr(r, this.material)), this.update()
    }

    rs.prototype = Object.create(Tn.prototype), rs.prototype.constructor = rs, rs.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, rs.prototype.update = function () {
        var t = new se, e = new nn, n = new nn;
        return function () {
            var r = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color); else {
                var i = r.geometry.getAttribute("color");
                e.copy(this.light.color), n.copy(this.light.groundColor);
                for (var a = 0, o = i.count; a < o; a++) {
                    var s = a < o / 2 ? e : n;
                    i.setXYZ(a, s.r, s.g, s.b)
                }
                i.needsUpdate = !0
            }
            r.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
    }();

    function is(t, e, n, r) {
        t = t || 10, e = e || 10, n = new nn(void 0 !== n ? n : 4473924), r = new nn(void 0 !== r ? r : 8947848);
        for (var i = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, u = 0, l = -o; h <= e; h++, l += a) {
            s.push(-o, 0, l, o, 0, l), s.push(l, 0, -o, l, 0, o);
            var f = h === i ? n : r;
            f.toArray(c, u), u += 3, f.toArray(c, u), u += 3, f.toArray(c, u), u += 3, f.toArray(c, u), u += 3
        }
        var p = new jn;
        p.addAttribute("position", new Fn(s, 3)), p.addAttribute("color", new Fn(c, 3));
        var m = new Nr({vertexColors: d});
        Ir.call(this, p, m)
    }

    is.prototype = Object.create(Ir.prototype), is.prototype.constructor = is;

    function as(t, e, n, r, i, a) {
        t = t || 10, e = e || 16, n = n || 8, r = r || 64, i = new nn(void 0 !== i ? i : 4473924), a = new nn(void 0 !== a ? a : 8947848);
        var o, s, c, h, u, l, f, p = [], m = [];
        for (h = 0; h <= e; h++) c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, p.push(0, 0, 0), p.push(o, 0, s), f = 1 & h ? i : a, m.push(f.r, f.g, f.b), m.push(f.r, f.g, f.b);
        for (h = 0; h <= n; h++) for (f = 1 & h ? i : a, l = t - t / n * h, u = 0; u < r; u++) c = u / r * (2 * Math.PI), o = Math.sin(c) * l, s = Math.cos(c) * l, p.push(o, 0, s), m.push(f.r, f.g, f.b), c = (u + 1) / r * (2 * Math.PI), o = Math.sin(c) * l, s = Math.cos(c) * l, p.push(o, 0, s), m.push(f.r, f.g, f.b);
        var g = new jn;
        g.addAttribute("position", new Fn(p, 3)), g.addAttribute("color", new Fn(m, 3));
        var v = new Nr({vertexColors: d});
        Ir.call(this, g, v)
    }

    as.prototype = Object.create(Ir.prototype), as.prototype.constructor = as;

    function os(t, e, n, r) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var i = void 0 !== n ? n : 16776960, a = void 0 !== r ? r : 1, o = 0, s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new jn, h = new Fn(2 * o * 3, 3);
        c.addAttribute("position", h), Ir.call(this, c, new Nr({
            color: i,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    }

    os.prototype = Object.create(Ir.prototype), os.prototype.constructor = os, os.prototype.update = function () {
        var t = new se, e = new se, n = new ce;
        return function () {
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            for (var r = this.object.matrixWorld, i = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, u = s.length; h < u; h++) {
                var l = s[h], f = l.normal;
                t.copy(o[l.a]).add(o[l.b]).add(o[l.c]).divideScalar(3).applyMatrix4(r), e.copy(f).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), i.setXYZ(c, t.x, t.y, t.z), c += 1, i.setXYZ(c, e.x, e.y, e.z), c += 1
            }
            i.needsUpdate = !0
        }
    }();

    function ss(t, e, n) {
        Tn.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
        var r = new jn;
        r.addAttribute("position", new Fn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
        var i = new Nr({fog: !1});
        this.lightPlane = new Or(r, i), this.add(this.lightPlane), (r = new jn).addAttribute("position", new Fn([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Or(r, i), this.add(this.targetLine), this.update()
    }

    ss.prototype = Object.create(Tn.prototype), ss.prototype.constructor = ss, ss.prototype.dispose = function () {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, ss.prototype.update = function () {
        var t = new se, e = new se, n = new se;
        return function () {
            t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(e, t), this.lightPlane.lookAt(n), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(n), this.targetLine.scale.z = n.length()
        }
    }();

    function cs(t) {
        var e = new jn, n = new Nr({color: 16777215, vertexColors: f}), r = [], i = [], a = {}, o = new nn(16755200),
            s = new nn(16711680), c = new nn(43775), h = new nn(16777215), u = new nn(3355443);
        l("n1", "n2", o), l("n2", "n4", o), l("n4", "n3", o), l("n3", "n1", o), l("f1", "f2", o), l("f2", "f4", o), l("f4", "f3", o), l("f3", "f1", o), l("n1", "f1", o), l("n2", "f2", o), l("n3", "f3", o), l("n4", "f4", o), l("p", "n1", s), l("p", "n2", s), l("p", "n3", s), l("p", "n4", s), l("u1", "u2", c), l("u2", "u3", c), l("u3", "u1", c), l("c", "t", h), l("p", "c", u), l("cn1", "cn2", u), l("cn3", "cn4", u), l("cf1", "cf2", u), l("cf3", "cf4", u);

        function l(t, e, n) {
            d(t, n), d(e, n)
        }

        function d(t, e) {
            r.push(0, 0, 0), i.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(r.length / 3 - 1)
        }

        e.addAttribute("position", new Fn(r, 3)), e.addAttribute("color", new Fn(i, 3)), Ir.call(this, e, n), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }

    cs.prototype = Object.create(Ir.prototype), cs.prototype.constructor = cs, cs.prototype.update = function () {
        var t, e, n = new se, r = new Sn;

        function i(i, a, o, s) {
            n.set(a, o, s).unproject(r);
            var c = e[i];
            if (void 0 !== c) for (var h = t.getAttribute("position"), u = 0, l = c.length; u < l; u++) h.setXYZ(c[u], n.x, n.y, n.z)
        }

        return function () {
            t = this.geometry, e = this.pointMap;
            r.projectionMatrix.copy(this.camera.projectionMatrix), i("c", 0, 0, -1), i("t", 0, 0, 1), i("n1", -1, -1, -1), i("n2", 1, -1, -1), i("n3", -1, 1, -1), i("n4", 1, 1, -1), i("f1", -1, -1, 1), i("f2", 1, -1, 1), i("f3", -1, 1, 1), i("f4", 1, 1, 1), i("u1", .7, 1.1, -1), i("u2", -.7, 1.1, -1), i("u3", 0, 2, -1), i("cf1", -1, 0, 1), i("cf2", 1, 0, 1), i("cf3", 0, -1, 1), i("cf4", 0, 1, 1), i("cn1", -1, 0, -1), i("cn2", 1, 0, -1), i("cn3", 0, -1, -1), i("cn4", 0, 1, -1), t.getAttribute("position").needsUpdate = !0
        }
    }();

    function hs(t, e) {
        this.object = t, void 0 === e && (e = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            r = new Float32Array(24), i = new jn;
        i.setIndex(new Cn(n, 1)), i.addAttribute("position", new Cn(r, 3)), Ir.call(this, i, new Nr({color: e})), this.matrixAutoUpdate = !1, this.update()
    }

    hs.prototype = Object.create(Ir.prototype), hs.prototype.constructor = hs, hs.prototype.update = function () {
        var t = new gn;
        return function (e) {
            if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
                var n = t.min, r = t.max, i = this.geometry.attributes.position, a = i.array;
                a[0] = r.x, a[1] = r.y, a[2] = r.z, a[3] = n.x, a[4] = r.y, a[5] = r.z, a[6] = n.x, a[7] = n.y, a[8] = r.z, a[9] = r.x, a[10] = n.y, a[11] = r.z, a[12] = r.x, a[13] = r.y, a[14] = n.z, a[15] = n.x, a[16] = r.y, a[17] = n.z, a[18] = n.x, a[19] = n.y, a[20] = n.z, a[21] = r.x, a[22] = n.y, a[23] = n.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), hs.prototype.setFromObject = function (t) {
        return this.object = t, this.update(), this
    };

    function us(t, e) {
        this.type = "Box3Helper", this.box = t;
        var n = void 0 !== e ? e : 16776960,
            r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new jn;
        i.setIndex(new Cn(r, 1)), i.addAttribute("position", new Fn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Ir.call(this, i, new Nr({color: n})), this.geometry.computeBoundingSphere()
    }

    us.prototype = Object.create(Ir.prototype), us.prototype.constructor = us, us.prototype.updateMatrixWorld = function (t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), Tn.prototype.updateMatrixWorld.call(this, t))
    };

    function ls(t, e, n) {
        this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
        var r = void 0 !== n ? n : 16776960, i = new jn;
        i.addAttribute("position", new Fn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), i.computeBoundingSphere(), Or.call(this, i, new Nr({color: r}));
        var a = new jn;
        a.addAttribute("position", new Fn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new tr(a, new Zn({
            color: r,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }

    ls.prototype = Object.create(Or.prototype), ls.prototype.constructor = ls, ls.prototype.updateMatrixWorld = function (t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.lookAt(this.plane.normal), Tn.prototype.updateMatrixWorld.call(this, t)
    };
    var fs, ds;

    function ps(t, e, n, r, i, a) {
        Tn.call(this), void 0 === r && (r = 16776960), void 0 === n && (n = 1), void 0 === i && (i = .2 * n), void 0 === a && (a = .2 * i), void 0 === fs && ((fs = new jn).addAttribute("position", new Fn([0, 0, 0, 0, 1, 0], 3)), (ds = new ji(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Or(fs, new Nr({color: r})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new tr(ds, new Zn({color: r})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, i, a)
    }

    ps.prototype = Object.create(Tn.prototype), ps.prototype.constructor = ps, ps.prototype.setDirection = function () {
        var t, e = new se;
        return function (n) {
            n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(n.z, 0, -n.x).normalize(), t = Math.acos(n.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), ps.prototype.setLength = function (t, e, n) {
        void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
    }, ps.prototype.setColor = function (t) {
        this.line.material.color.copy(t), this.cone.material.color.copy(t)
    };

    function ms(t) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t], n = new jn;
        n.addAttribute("position", new Fn(e, 3)), n.addAttribute("color", new Fn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
        var r = new Nr({vertexColors: d});
        Ir.call(this, n, r)
    }

    ms.prototype = Object.create(Ir.prototype), ms.prototype.constructor = ms;
    var gs = {
        createMultiMaterialObject: function (t, e) {
            for (var n = new Br, r = 0, i = e.length; r < i; r++) n.add(new tr(t, e[r]));
            return n
        }, detach: function (t, e, n) {
            t.applyMatrix(e.matrixWorld), e.remove(t), n.add(t)
        }, attach: function (t, e, n) {
            t.applyMatrix((new ae).getInverse(n.matrixWorld)), e.remove(t), n.add(t)
        }
    };
    ga.create = function (t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(ga.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, Object.assign(Ua.prototype, {
        createPointsGeometry: function (t) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getPoints(t);
            return this.createGeometry(e)
        }, createSpacedPointsGeometry: function (t) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        }, createGeometry: function (t) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var e = new Pn, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.vertices.push(new se(i.x, i.y, i.z || 0))
            }
            return e
        }
    }), Object.assign(za.prototype, {
        fromPoints: function (t) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
        }
    });

    function vs(t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Ea.call(this, t), this.type = "catmullrom", this.closed = !0
    }

    vs.prototype = Object.create(Ea.prototype);

    function ys(t) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Ea.call(this, t), this.type = "catmullrom"
    }

    ys.prototype = Object.create(Ea.prototype);

    function bs(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Ea.call(this, t), this.type = "catmullrom"
    }

    bs.prototype = Object.create(Ea.prototype), Object.assign(bs.prototype, {
        initFromArray: function () {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        }, getControlPointsArray: function () {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        }, reparametrizeByArcLength: function () {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    });
    is.prototype.setColors = function () {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, ts.prototype.update = function () {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    };
    Object.assign(fo.prototype, {
        extractUrlBase: function (t) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), po.extractUrlBase(t)
        }
    });
    Object.assign(cn.prototype, {
        center: function (t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
        }, empty: function () {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, isIntersectionBox: function (t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        }, size: function (t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Object.assign(gn.prototype, {
        center: function (t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
        }, empty: function () {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, isIntersectionBox: function (t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        }, isIntersectionSphere: function (t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }, size: function (t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Kn.prototype.center = function (t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
    }, Object.assign(re, {
        random16: function () {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
        }, nearestPowerOfTwo: function (t) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), re.floorPowerOfTwo(t)
        }, nextPowerOfTwo: function (t) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), re.ceilPowerOfTwo(t)
        }
    }), Object.assign(ce.prototype, {
        flattenToArrayOffset: function (t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        }, multiplyVector3: function (t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        }, multiplyVector3Array: function () {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        }, applyToBuffer: function (t) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        }, applyToVector3Array: function () {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }), Object.assign(ae.prototype, {
        extractPosition: function (t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
        }, flattenToArrayOffset: function (t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        }, getPosition: function () {
            var t;
            return function () {
                return void 0 === t && (t = new se), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
            }
        }(), setRotationFromQuaternion: function (t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
        }, multiplyToArray: function () {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        }, multiplyVector3: function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        }, multiplyVector4: function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        }, multiplyVector3Array: function () {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        }, rotateAxis: function (t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
        }, crossVector: function (t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        }, translate: function () {
            console.error("THREE.Matrix4: .translate() has been removed.")
        }, rotateX: function () {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        }, rotateY: function () {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        }, rotateZ: function () {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        }, rotateByAxis: function () {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }, applyToBuffer: function (t) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        }, applyToVector3Array: function () {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        }, makeFrustum: function (t, e, n, r, i, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, r, n, i, a)
        }
    }), yn.prototype.isIntersectionLine = function (t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
    }, oe.prototype.multiplyVector3 = function (t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
    }, Object.assign(Qn.prototype, {
        isIntersectionBox: function (t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        }, isIntersectionPlane: function (t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
        }, isIntersectionSphere: function (t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }
    }), Object.assign(Ba.prototype, {
        extractAllPoints: function (t) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
        }, extrude: function (t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Ri(this, t)
        }, makeGeometry: function (t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Fi(this, t)
        }
    }), Object.assign(ie.prototype, {
        fromAttribute: function (t, e, n) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        }, distanceToManhattan: function (t) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
        }, lengthManhattan: function () {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(se.prototype, {
        setEulerFromRotationMatrix: function () {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        }, setEulerFromQuaternion: function () {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        }, getPositionFromMatrix: function (t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
        }, getScaleFromMatrix: function (t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
        }, getColumnFromMatrix: function (t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
        }, applyProjection: function (t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
        }, fromAttribute: function (t, e, n) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        }, distanceToManhattan: function (t) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
        }, lengthManhattan: function () {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(le.prototype, {
        fromAttribute: function (t, e, n) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        }, lengthManhattan: function () {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Pn.prototype.computeTangents = function () {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    }, Object.assign(Tn.prototype, {
        getChildByName: function (t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
        }, renderDepth: function () {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        }, translate: function (t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
        }
    }), Object.defineProperties(Tn.prototype, {
        eulerOrder: {
            get: function () {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            }, set: function (t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
            }
        }, useQuaternion: {
            get: function () {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }, set: function () {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(Lr.prototype, {
        objects: {
            get: function () {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), Object.defineProperty(Rr.prototype, "useVertexTexture", {
        get: function () {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }, set: function () {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }), Object.defineProperty(ga.prototype, "__arcLengthDivisions", {
        get: function () {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
        }, set: function (t) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
        }
    }), vr.prototype.setLens = function (t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
    }, Object.defineProperties(Fa.prototype, {
        onlyShadow: {
            set: function () {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        }, shadowCameraFov: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
            }
        }, shadowCameraLeft: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
            }
        }, shadowCameraRight: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
            }
        }, shadowCameraTop: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
            }
        }, shadowCameraBottom: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
            }
        }, shadowCameraNear: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
            }
        }, shadowCameraFar: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
            }
        }, shadowCameraVisible: {
            set: function () {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        }, shadowBias: {
            set: function (t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
            }
        }, shadowDarkness: {
            set: function () {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        }, shadowMapWidth: {
            set: function (t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
            }
        }, shadowMapHeight: {
            set: function (t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
            }
        }
    }), Object.defineProperties(Cn.prototype, {
        length: {
            get: function () {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
            }
        }
    }), Object.assign(jn.prototype, {
        addIndex: function (t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
        }, addDrawCall: function (t, e, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
        }, clearDrawCalls: function () {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        }, computeTangents: function () {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        }, computeOffsets: function () {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(jn.prototype, {
        drawcalls: {
            get: function () {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        }, offsets: {
            get: function () {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(Fo.prototype, {
        dynamic: {
            set: function () {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        }, onUpdate: {
            value: function () {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }
        }
    }), Object.defineProperties(dn.prototype, {
        wrapAround: {
            get: function () {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }, set: function () {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        }, wrapRGB: {
            get: function () {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new nn
            }
        }, shading: {
            get: function () {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            }, set: function (t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
            }
        }
    }), Object.defineProperties(ta.prototype, {
        metal: {
            get: function () {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            }, set: function () {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(Jn.prototype, {
        derivatives: {
            get: function () {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            }, set: function (t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
            }
        }
    }), Object.assign(wr.prototype, {
        getCurrentRenderTarget: function () {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
        }, getMaxAnisotropy: function () {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
        }, getPrecision: function () {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
        }, resetGLState: function () {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
        }, supportsFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        }, supportsHalfFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        }, supportsStandardDerivatives: function () {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        }, supportsCompressedTextureS3TC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        }, supportsCompressedTexturePVRTC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        }, supportsBlendMinMax: function () {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        }, supportsVertexTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        }, supportsInstancedArrays: function () {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        }, enableScissorTest: function (t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
        }, initMaterial: function () {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }, addPrePlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }, addPostPlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }, updateShadowMap: function () {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }), Object.defineProperties(wr.prototype, {
        shadowMapEnabled: {
            get: function () {
                return this.shadowMap.enabled
            }, set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
            }
        }, shadowMapType: {
            get: function () {
                return this.shadowMap.type
            }, set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
            }
        }, shadowMapCullFace: {
            get: function () {
                return this.shadowMap.cullFace
            }, set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = t
            }
        }
    }), Object.defineProperties(xn.prototype, {
        cullFace: {
            get: function () {
                return this.renderReverseSided ? i : r
            }, set: function (t) {
                var e = t !== r;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."), this.renderReverseSided = e
            }
        }
    }), Object.defineProperties(fe.prototype, {
        wrapS: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
            }
        }, wrapT: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
            }
        }, magFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
            }
        }, minFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
            }
        }, anisotropy: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
            }
        }, offset: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
            }
        }, repeat: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
            }
        }, format: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
            }
        }, type: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
            }
        }, generateMipmaps: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
            }
        }
    }), Object.assign(br.prototype, {
        getStandingMatrix: function () {
            console.warn("THREE.WebVRManager: .getStandingMatrix() has been removed.")
        }
    }), Object.defineProperties(br.prototype, {
        standing: {
            set: function () {
                console.warn("THREE.WebVRManager: .standing has been removed.")
            }
        }
    }), Po.prototype.load = function (t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return (new So).load(t, function (t) {
            e.setBuffer(t)
        }), this
    }, No.prototype.getData = function () {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    }, Lo.prototype.updateCubeMap = function (t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
    };
    var xs = {
        merge: function (t, e, n) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var r;
            e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), r = e.matrix, e = e.geometry), t.merge(e, r, n)
        }, center: function (t) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
        }
    }, ws = {
        crossOrigin: void 0, loadTexture: function (t, e, n, r) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var i = new ma;
            i.setCrossOrigin(this.crossOrigin);
            var a = i.load(t, n, void 0, r);
            return e && (a.mapping = e), a
        }, loadTextureCube: function (t, e, n, r) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var i = new pa;
            i.setCrossOrigin(this.crossOrigin);
            var a = i.load(t, n, void 0, r);
            return e && (a.mapping = e), a
        }, loadCompressedTexture: function () {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        }, loadCompressedTextureCube: function () {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    };
    var _s, Ms = Object.freeze({
        WebGLRenderTargetCube: de,
        WebGLRenderTarget: fe,
        WebGLRenderer: wr,
        ShaderLib: sn,
        UniformsLib: rn,
        UniformsUtils: an,
        ShaderChunk: on,
        FogExp2: _r,
        Fog: Mr,
        Scene: Er,
        LensFlare: Tr,
        Sprite: Ar,
        LOD: Lr,
        SkinnedMesh: Cr,
        Skeleton: Rr,
        Bone: Pr,
        Mesh: tr,
        LineSegments: Ir,
        LineLoop: Dr,
        Line: Or,
        Points: zr,
        Group: Br,
        VideoTexture: Fr,
        DataTexture: pe,
        CompressedTexture: kr,
        CubeTexture: me,
        CanvasTexture: un,
        DepthTexture: Gr,
        Texture: ue,
        CompressedTextureLoader: la,
        DataTextureLoader: fa,
        CubeTextureLoader: pa,
        TextureLoader: ma,
        ObjectLoader: go,
        MaterialLoader: ho,
        BufferGeometryLoader: uo,
        DefaultLoadingManager: ca,
        LoadingManager: sa,
        JSONLoader: mo,
        ImageLoader: da,
        ImageBitmapLoader: xo,
        FontLoader: Mo,
        FileLoader: ua,
        Loader: fo,
        LoaderUtils: po,
        Cache: oa,
        AudioLoader: So,
        SpotLightShadow: Ha,
        SpotLight: Va,
        PointLight: ja,
        RectAreaLight: Ya,
        HemisphereLight: ka,
        DirectionalLightShadow: Wa,
        DirectionalLight: qa,
        AmbientLight: Xa,
        LightShadow: Ga,
        Light: Fa,
        StereoCamera: Ao,
        PerspectiveCamera: vr,
        OrthographicCamera: An,
        CubeCamera: Lo,
        ArrayCamera: yr,
        Camera: Sn,
        AudioListener: Ro,
        PositionalAudio: Co,
        AudioContext: To,
        AudioAnalyser: No,
        Audio: Po,
        VectorKeyframeTrack: so,
        StringKeyframeTrack: Za,
        QuaternionKeyframeTrack: $a,
        NumberKeyframeTrack: eo,
        ColorKeyframeTrack: to,
        BooleanKeyframeTrack: Ja,
        PropertyMixer: Oo,
        PropertyBinding: Do,
        KeyframeTrack: oo,
        AnimationUtils: ao,
        AnimationObjectGroup: Uo,
        AnimationMixer: Bo,
        AnimationClip: co,
        Uniform: Fo,
        InstancedBufferGeometry: ko,
        BufferGeometry: jn,
        Geometry: Pn,
        InterleavedBufferAttribute: Go,
        InstancedInterleavedBuffer: Vo,
        InterleavedBuffer: Ho,
        InstancedBufferAttribute: jo,
        Face3: Ln,
        Object3D: Tn,
        Raycaster: Wo,
        Layers: Mn,
        EventDispatcher: t,
        Clock: Yo,
        QuaternionLinearInterpolant: Ka,
        LinearInterpolant: ro,
        DiscreteInterpolant: io,
        CubicInterpolant: no,
        Interpolant: Qa,
        Triangle: $n,
        Math: re,
        Spherical: Zo,
        Cylindrical: Jo,
        Plane: yn,
        Frustum: bn,
        Sphere: vn,
        Ray: Qn,
        Matrix4: ae,
        Matrix3: ce,
        Box3: gn,
        Box2: cn,
        Line3: Kn,
        Euler: _n,
        Vector4: le,
        Vector3: se,
        Vector2: ie,
        Quaternion: oe,
        Color: nn,
        ImmediateRenderObject: Qo,
        VertexNormalsHelper: Ko,
        SpotLightHelper: $o,
        SkeletonHelper: ts,
        PointLightHelper: es,
        RectAreaLightHelper: ns,
        HemisphereLightHelper: rs,
        GridHelper: is,
        PolarGridHelper: as,
        FaceNormalsHelper: os,
        DirectionalLightHelper: ss,
        CameraHelper: cs,
        BoxHelper: hs,
        Box3Helper: us,
        PlaneHelper: ls,
        ArrowHelper: ps,
        AxesHelper: ms,
        Shape: Ba,
        Path: za,
        ShapePath: wo,
        Font: _o,
        CurvePath: Ua,
        Curve: ga,
        ShapeUtils: Li,
        SceneUtils: gs,
        WebGLUtils: xr,
        WireframeGeometry: Hr,
        ParametricGeometry: Vr,
        ParametricBufferGeometry: jr,
        TetrahedronGeometry: Xr,
        TetrahedronBufferGeometry: Yr,
        OctahedronGeometry: Zr,
        OctahedronBufferGeometry: Jr,
        IcosahedronGeometry: Qr,
        IcosahedronBufferGeometry: Kr,
        DodecahedronGeometry: $r,
        DodecahedronBufferGeometry: ti,
        PolyhedronGeometry: Wr,
        PolyhedronBufferGeometry: qr,
        TubeGeometry: ei,
        TubeBufferGeometry: ni,
        TorusKnotGeometry: ri,
        TorusKnotBufferGeometry: ii,
        TorusGeometry: ai,
        TorusBufferGeometry: oi,
        TextGeometry: Ci,
        TextBufferGeometry: Ni,
        SphereGeometry: Oi,
        SphereBufferGeometry: Ii,
        RingGeometry: Di,
        RingBufferGeometry: Ui,
        PlaneGeometry: Xn,
        PlaneBufferGeometry: Yn,
        LatheGeometry: zi,
        LatheBufferGeometry: Bi,
        ShapeGeometry: Fi,
        ShapeBufferGeometry: ki,
        ExtrudeGeometry: Ri,
        ExtrudeBufferGeometry: Pi,
        EdgesGeometry: Hi,
        ConeGeometry: Wi,
        ConeBufferGeometry: qi,
        CylinderGeometry: Vi,
        CylinderBufferGeometry: ji,
        CircleGeometry: Xi,
        CircleBufferGeometry: Yi,
        BoxGeometry: Wn,
        BoxBufferGeometry: qn,
        ShadowMaterial: Ji,
        SpriteMaterial: Sr,
        RawShaderMaterial: Qi,
        ShaderMaterial: Jn,
        PointsMaterial: Ur,
        MeshPhysicalMaterial: $i,
        MeshStandardMaterial: Ki,
        MeshPhongMaterial: ta,
        MeshToonMaterial: ea,
        MeshNormalMaterial: na,
        MeshLambertMaterial: ra,
        MeshDepthMaterial: pn,
        MeshDistanceMaterial: mn,
        MeshBasicMaterial: Zn,
        LineDashedMaterial: ia,
        LineBasicMaterial: Nr,
        Material: dn,
        Float64BufferAttribute: kn,
        Float32BufferAttribute: Fn,
        Uint32BufferAttribute: Bn,
        Int32BufferAttribute: zn,
        Uint16BufferAttribute: Un,
        Int16BufferAttribute: Dn,
        Uint8ClampedBufferAttribute: In,
        Uint8BufferAttribute: On,
        Int8BufferAttribute: Nn,
        BufferAttribute: Cn,
        ArcCurve: ya,
        CatmullRomCurve3: Ea,
        CubicBezierCurve: La,
        CubicBezierCurve3: Ra,
        EllipseCurve: va,
        LineCurve: Pa,
        LineCurve3: Ca,
        QuadraticBezierCurve: Na,
        QuadraticBezierCurve3: Oa,
        SplineCurve: Ia,
        REVISION: e,
        MOUSE: {LEFT: 0, MIDDLE: 1, RIGHT: 2},
        CullFaceNone: n,
        CullFaceBack: r,
        CullFaceFront: i,
        CullFaceFrontBack: 3,
        FrontFaceDirectionCW: a,
        FrontFaceDirectionCCW: 1,
        BasicShadowMap: 0,
        PCFShadowMap: o,
        PCFSoftShadowMap: s,
        FrontSide: c,
        BackSide: h,
        DoubleSide: u,
        FlatShading: 1,
        SmoothShading: 2,
        NoColors: l,
        FaceColors: f,
        VertexColors: d,
        NoBlending: p,
        NormalBlending: m,
        AdditiveBlending: g,
        SubtractiveBlending: v,
        MultiplyBlending: y,
        CustomBlending: b,
        AddEquation: x,
        SubtractEquation: w,
        ReverseSubtractEquation: _,
        MinEquation: M,
        MaxEquation: E,
        ZeroFactor: T,
        OneFactor: S,
        SrcColorFactor: A,
        OneMinusSrcColorFactor: L,
        SrcAlphaFactor: R,
        OneMinusSrcAlphaFactor: P,
        DstAlphaFactor: C,
        OneMinusDstAlphaFactor: N,
        DstColorFactor: O,
        OneMinusDstColorFactor: I,
        SrcAlphaSaturateFactor: D,
        NeverDepth: U,
        AlwaysDepth: z,
        LessDepth: B,
        LessEqualDepth: F,
        EqualDepth: k,
        GreaterEqualDepth: G,
        GreaterDepth: H,
        NotEqualDepth: V,
        MultiplyOperation: j,
        MixOperation: W,
        AddOperation: q,
        NoToneMapping: X,
        LinearToneMapping: Y,
        ReinhardToneMapping: Z,
        Uncharted2ToneMapping: J,
        CineonToneMapping: Q,
        UVMapping: 300,
        CubeReflectionMapping: K,
        CubeRefractionMapping: $,
        EquirectangularReflectionMapping: tt,
        EquirectangularRefractionMapping: et,
        SphericalReflectionMapping: nt,
        CubeUVReflectionMapping: rt,
        CubeUVRefractionMapping: it,
        RepeatWrapping: at,
        ClampToEdgeWrapping: ot,
        MirroredRepeatWrapping: st,
        NearestFilter: ct,
        NearestMipMapNearestFilter: ht,
        NearestMipMapLinearFilter: ut,
        LinearFilter: lt,
        LinearMipMapNearestFilter: ft,
        LinearMipMapLinearFilter: dt,
        UnsignedByteType: pt,
        ByteType: mt,
        ShortType: gt,
        UnsignedShortType: vt,
        IntType: yt,
        UnsignedIntType: bt,
        FloatType: xt,
        HalfFloatType: wt,
        UnsignedShort4444Type: _t,
        UnsignedShort5551Type: Mt,
        UnsignedShort565Type: Et,
        UnsignedInt248Type: Tt,
        AlphaFormat: St,
        RGBFormat: At,
        RGBAFormat: Lt,
        LuminanceFormat: Rt,
        LuminanceAlphaFormat: Pt,
        RGBEFormat: Ct,
        DepthFormat: Nt,
        DepthStencilFormat: Ot,
        RGB_S3TC_DXT1_Format: It,
        RGBA_S3TC_DXT1_Format: Dt,
        RGBA_S3TC_DXT3_Format: Ut,
        RGBA_S3TC_DXT5_Format: zt,
        RGB_PVRTC_4BPPV1_Format: Bt,
        RGB_PVRTC_2BPPV1_Format: Ft,
        RGBA_PVRTC_4BPPV1_Format: kt,
        RGBA_PVRTC_2BPPV1_Format: Gt,
        RGB_ETC1_Format: Ht,
        LoopOnce: 2200,
        LoopRepeat: Vt,
        LoopPingPong: 2202,
        InterpolateDiscrete: 2300,
        InterpolateLinear: 2301,
        InterpolateSmooth: 2302,
        ZeroCurvatureEnding: jt,
        ZeroSlopeEnding: 2401,
        WrapAroundEnding: 2402,
        TrianglesDrawMode: Wt,
        TriangleStripDrawMode: qt,
        TriangleFanDrawMode: Xt,
        LinearEncoding: Yt,
        sRGBEncoding: Zt,
        GammaEncoding: Jt,
        RGBEEncoding: Qt,
        LogLuvEncoding: 3003,
        RGBM7Encoding: Kt,
        RGBM16Encoding: $t,
        RGBDEncoding: te,
        BasicDepthPacking: ee,
        RGBADepthPacking: ne,
        CubeGeometry: Wn,
        Face4: function (t, e, n, r, i, a, o) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new Ln(t, e, n, i, a, o)
        },
        LineStrip: 0,
        LinePieces: 1,
        MeshFaceMaterial: function (t) {
            return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
        },
        MultiMaterial: function (t) {
            return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function () {
                return t.slice()
            }, t
        },
        PointCloud: function (t, e) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new zr(t, e)
        },
        Particle: function (t) {
            return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Ar(t)
        },
        ParticleSystem: function (t, e) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new zr(t, e)
        },
        PointCloudMaterial: function (t) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new Ur(t)
        },
        ParticleBasicMaterial: function (t) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new Ur(t)
        },
        ParticleSystemMaterial: function (t) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new Ur(t)
        },
        Vertex: function (t, e, n) {
            return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new se(t, e, n)
        },
        DynamicBufferAttribute: function (t, e) {
            return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new Cn(t, e).setDynamic(!0)
        },
        Int8Attribute: function (t, e) {
            return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new Nn(t, e)
        },
        Uint8Attribute: function (t, e) {
            return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new On(t, e)
        },
        Uint8ClampedAttribute: function (t, e) {
            return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new In(t, e)
        },
        Int16Attribute: function (t, e) {
            return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new Dn(t, e)
        },
        Uint16Attribute: function (t, e) {
            return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new Un(t, e)
        },
        Int32Attribute: function (t, e) {
            return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new zn(t, e)
        },
        Uint32Attribute: function (t, e) {
            return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new Bn(t, e)
        },
        Float32Attribute: function (t, e) {
            return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new Fn(t, e)
        },
        Float64Attribute: function (t, e) {
            return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new kn(t, e)
        },
        ClosedSplineCurve3: vs,
        SplineCurve3: ys,
        Spline: bs,
        AxisHelper: function (t) {
            return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new ms(t)
        },
        BoundingBoxHelper: function (t, e) {
            return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new hs(t, e)
        },
        EdgesHelper: function (t, e) {
            return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new Ir(new Hi(t.geometry), new Nr({color: void 0 !== e ? e : 16777215}))
        },
        WireframeHelper: function (t, e) {
            return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new Ir(new Hr(t.geometry), new Nr({color: void 0 !== e ? e : 16777215}))
        },
        XHRLoader: function (t) {
            return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new ua(t)
        },
        BinaryTextureLoader: function (t) {
            return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new fa(t)
        },
        GeometryUtils: xs,
        ImageUtils: ws,
        Projector: function () {
            console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function (t, e) {
                console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
            }, this.unprojectVector = function (t, e) {
                console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
            }, this.pickingRay = function () {
                console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
            }
        },
        CanvasRenderer: function () {
            console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function () {
            }, this.render = function () {
            }, this.setClearColor = function () {
            }, this.setSize = function () {
            }
        }
    }), Es = window.THREE || Ms, Ts = _s = function (t, e) {
        var n = this, r = {NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4};
        this.object = t, this.domElement = void 0 !== e ? e : document, this.enabled = !0, this.screen = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = .3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = .2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = [65, 83, 68], this.target = new Es.Vector3;
        var i = new Es.Vector3, a = r.NONE, o = r.NONE, s = new Es.Vector3, c = new Es.Vector2, h = new Es.Vector2,
            u = new Es.Vector3, l = 0, f = new Es.Vector2, d = new Es.Vector2, p = 0, m = 0, g = new Es.Vector2,
            v = new Es.Vector2;
        this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone();
        var y = {type: "change"}, b = {type: "start"}, x = {type: "end"};
        this.handleResize = function () {
            if (this.domElement === document) this.screen.left = 0, this.screen.top = 0, this.screen.width = window.innerWidth, this.screen.height = window.innerHeight; else {
                var t = this.domElement.getBoundingClientRect(), e = this.domElement.ownerDocument.documentElement;
                this.screen.left = t.left + window.pageXOffset - e.clientLeft, this.screen.top = t.top + window.pageYOffset - e.clientTop, this.screen.width = t.width, this.screen.height = t.height
            }
        }, this.handleEvent = function (t) {
            "function" == typeof this[t.type] && this[t.type](t)
        };
        var w = function () {
            var t = new Es.Vector2;
            return function (e, r) {
                return t.set((e - n.screen.left) / n.screen.width, (r - n.screen.top) / n.screen.height), t
            }
        }(), _ = function () {
            var t = new Es.Vector2;
            return function (e, r) {
                return t.set((e - .5 * n.screen.width - n.screen.left) / (.5 * n.screen.width), (n.screen.height + 2 * (n.screen.top - r)) / n.screen.width), t
            }
        }();
        this.rotateCamera = function () {
            var t, e = new Es.Vector3, r = new Es.Quaternion, i = new Es.Vector3, a = new Es.Vector3,
                o = new Es.Vector3, f = new Es.Vector3;
            return function () {
                f.set(h.x - c.x, h.y - c.y, 0), (t = f.length()) ? (s.copy(n.object.position).sub(n.target), i.copy(s).normalize(), a.copy(n.object.up).normalize(), o.crossVectors(a, i).normalize(), a.setLength(h.y - c.y), o.setLength(h.x - c.x), f.copy(a.add(o)), e.crossVectors(f, s).normalize(), t *= n.rotateSpeed, r.setFromAxisAngle(e, t), s.applyQuaternion(r), n.object.up.applyQuaternion(r), u.copy(e), l = t) : !n.staticMoving && l && (l *= Math.sqrt(1 - n.dynamicDampingFactor), s.copy(n.object.position).sub(n.target), r.setFromAxisAngle(u, l), s.applyQuaternion(r), n.object.up.applyQuaternion(r)), c.copy(h)
            }
        }(), this.zoomCamera = function () {
            var t;
            a === r.TOUCH_ZOOM_PAN ? (t = p / m, p = m, s.multiplyScalar(t)) : (1 !== (t = 1 + (d.y - f.y) * n.zoomSpeed) && t > 0 && s.multiplyScalar(t), n.staticMoving ? f.copy(d) : f.y += (d.y - f.y) * this.dynamicDampingFactor)
        }, this.panCamera = function () {
            var t = new Es.Vector2, e = new Es.Vector3, r = new Es.Vector3;
            return function () {
                t.copy(v).sub(g), t.lengthSq() && (t.multiplyScalar(s.length() * n.panSpeed), r.copy(s).cross(n.object.up).setLength(t.x), r.add(e.copy(n.object.up).setLength(t.y)), n.object.position.add(r), n.target.add(r), n.staticMoving ? g.copy(v) : g.add(t.subVectors(v, g).multiplyScalar(n.dynamicDampingFactor)))
            }
        }(), this.checkDistances = function () {
            n.noZoom && n.noPan || (s.lengthSq() > n.maxDistance * n.maxDistance && (n.object.position.addVectors(n.target, s.setLength(n.maxDistance)), f.copy(d)), s.lengthSq() < n.minDistance * n.minDistance && (n.object.position.addVectors(n.target, s.setLength(n.minDistance)), f.copy(d)))
        }, this.update = function () {
            s.subVectors(n.object.position, n.target), n.noRotate || n.rotateCamera(), n.noZoom || n.zoomCamera(), n.noPan || n.panCamera(), n.object.position.addVectors(n.target, s), n.checkDistances(), n.object.lookAt(n.target), i.distanceToSquared(n.object.position) > 1e-6 && (n.dispatchEvent(y), i.copy(n.object.position))
        }, this.reset = function () {
            a = r.NONE, o = r.NONE, n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.up.copy(n.up0), s.subVectors(n.object.position, n.target), n.object.lookAt(n.target), n.dispatchEvent(y), i.copy(n.object.position)
        };

        function M(t, e) {
            return Array.isArray(t) ? -1 !== t.indexOf(e) : t === e
        }

        function E(t) {
            !1 !== n.enabled && (window.removeEventListener("keydown", E), o = a, a === r.NONE && (M(n.keys[r.ROTATE], t.keyCode) && !n.noRotate ? a = r.ROTATE : M(n.keys[r.ZOOM], t.keyCode) && !n.noZoom ? a = r.ZOOM : M(n.keys[r.PAN], t.keyCode) && !n.noPan && (a = r.PAN)))
        }

        function T(t) {
            !1 !== n.enabled && (a = o, window.addEventListener("keydown", E, !1))
        }

        function S(t) {
            !1 !== n.enabled && (t.preventDefault(), t.stopPropagation(), a === r.NONE && (a = t.button), a !== r.ROTATE || n.noRotate ? a !== r.ZOOM || n.noZoom ? a !== r.PAN || n.noPan || (g.copy(w(t.pageX, t.pageY)), v.copy(g)) : (f.copy(w(t.pageX, t.pageY)), d.copy(f)) : (h.copy(_(t.pageX, t.pageY)), c.copy(h)), document.addEventListener("mousemove", A, !1), document.addEventListener("mouseup", L, !1), n.dispatchEvent(b))
        }

        function A(t) {
            !1 !== n.enabled && (t.preventDefault(), t.stopPropagation(), a !== r.ROTATE || n.noRotate ? a !== r.ZOOM || n.noZoom ? a !== r.PAN || n.noPan || v.copy(w(t.pageX, t.pageY)) : d.copy(w(t.pageX, t.pageY)) : (c.copy(h), h.copy(_(t.pageX, t.pageY))))
        }

        function L(t) {
            !1 !== n.enabled && (t.preventDefault(), t.stopPropagation(), a = r.NONE, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", L), n.dispatchEvent(x))
        }

        function R(t) {
            if (!1 !== n.enabled) {
                switch (t.preventDefault(), t.stopPropagation(), t.deltaMode) {
                    case 2:
                        f.y -= .025 * t.deltaY;
                        break;
                    case 1:
                        f.y -= .01 * t.deltaY;
                        break;
                    default:
                        f.y -= 25e-5 * t.deltaY
                }
                n.dispatchEvent(b), n.dispatchEvent(x)
            }
        }

        function P(t) {
            if (!1 !== n.enabled) {
                switch (t.touches.length) {
                    case 1:
                        a = r.TOUCH_ROTATE, h.copy(_(t.touches[0].pageX, t.touches[0].pageY)), c.copy(h);
                        break;
                    default:
                        a = r.TOUCH_ZOOM_PAN;
                        var e = t.touches[0].pageX - t.touches[1].pageX, i = t.touches[0].pageY - t.touches[1].pageY;
                        m = p = Math.sqrt(e * e + i * i);
                        var o = (t.touches[0].pageX + t.touches[1].pageX) / 2,
                            s = (t.touches[0].pageY + t.touches[1].pageY) / 2;
                        g.copy(w(o, s)), v.copy(g)
                }
                n.dispatchEvent(b)
            }
        }

        function C(t) {
            if (!1 !== n.enabled) switch (t.preventDefault(), t.stopPropagation(), t.touches.length) {
                case 1:
                    c.copy(h), h.copy(_(t.touches[0].pageX, t.touches[0].pageY));
                    break;
                default:
                    var e = t.touches[0].pageX - t.touches[1].pageX, r = t.touches[0].pageY - t.touches[1].pageY;
                    m = Math.sqrt(e * e + r * r);
                    var i = (t.touches[0].pageX + t.touches[1].pageX) / 2,
                        a = (t.touches[0].pageY + t.touches[1].pageY) / 2;
                    v.copy(w(i, a))
            }
        }

        function N(t) {
            if (!1 !== n.enabled) {
                switch (t.touches.length) {
                    case 0:
                        a = r.NONE;
                        break;
                    case 1:
                        a = r.TOUCH_ROTATE, h.copy(_(t.touches[0].pageX, t.touches[0].pageY)), c.copy(h)
                }
                n.dispatchEvent(x)
            }
        }

        function O(t) {
            !1 !== n.enabled && t.preventDefault()
        }

        this.dispose = function () {
            this.domElement.removeEventListener("contextmenu", O, !1), this.domElement.removeEventListener("mousedown", S, !1), this.domElement.removeEventListener("wheel", R, !1), this.domElement.removeEventListener("touchstart", P, !1), this.domElement.removeEventListener("touchend", N, !1), this.domElement.removeEventListener("touchmove", C, !1), document.removeEventListener("mousemove", A, !1), document.removeEventListener("mouseup", L, !1), window.removeEventListener("keydown", E, !1), window.removeEventListener("keyup", T, !1)
        }, this.domElement.addEventListener("contextmenu", O, !1), this.domElement.addEventListener("mousedown", S, !1), this.domElement.addEventListener("wheel", R, !1), this.domElement.addEventListener("touchstart", P, !1), this.domElement.addEventListener("touchend", N, !1), this.domElement.addEventListener("touchmove", C, !1), window.addEventListener("keydown", E, !1), window.addEventListener("keyup", T, !1), this.handleResize(), this.update()
    };
    _s.prototype = Object.create(Es.EventDispatcher.prototype);

    function Ss(t) {
        return function () {
            return t
        }
    }

    function As() {
        return 1e-6 * (Math.random() - .5)
    }

    function Ls(t, e, n) {
        if (isNaN(e)) return t;
        var r, i, a, o, s, c, h = t._root, u = {data: n}, l = t._x0, f = t._x1;
        if (!h) return t._root = u, t;
        for (; h.length;) if ((o = e >= (i = (l + f) / 2)) ? l = i : f = i, r = h, !(h = h[s = +o])) return r[s] = u, t;
        if (e === (a = +t._x.call(null, h.data))) return u.next = h, r ? r[s] = u : t._root = u, t;
        do {
            r = r ? r[s] = new Array(2) : t._root = new Array(2), (o = e >= (i = (l + f) / 2)) ? l = i : f = i
        } while ((s = +o) == (c = +(a >= i)));
        return r[c] = h, r[s] = u, t
    }

    function Rs(t, e, n) {
        this.node = t, this.x0 = e, this.x1 = n
    }

    function Ps(t) {
        return t[0]
    }

    function Cs(t, e) {
        var n = new Ns(null == e ? Ps : e, NaN, NaN);
        return null == t ? n : n.addAll(t)
    }

    function Ns(t, e, n) {
        this._x = t, this._x0 = e, this._x1 = n, this._root = void 0
    }

    function Os(t) {
        for (var e = {data: t.data}, n = e; t = t.next;) n = n.next = {data: t.data};
        return e
    }

    var Is = Cs.prototype = Ns.prototype;
    Is.copy = function () {
        var t, e, n = new Ns(this._x, this._x0, this._x1), r = this._root;
        if (!r) return n;
        if (!r.length) return n._root = Os(r), n;
        for (t = [{
            source: r,
            target: n._root = new Array(2)
        }]; r = t.pop();) for (var i = 0; i < 2; ++i) (e = r.source[i]) && (e.length ? t.push({
            source: e,
            target: r.target[i] = new Array(2)
        }) : r.target[i] = Os(e));
        return n
    }, Is.add = function (t) {
        var e = +this._x.call(null, t);
        return Ls(this.cover(e), e, t)
    }, Is.addAll = function (t) {
        var e, n, r = t.length, i = new Array(r), a = 1 / 0, o = -1 / 0;
        for (e = 0; e < r; ++e) isNaN(n = +this._x.call(null, t[e])) || (i[e] = n, n < a && (a = n), n > o && (o = n));
        for (o < a && (a = this._x0, o = this._x1), this.cover(a).cover(o), e = 0; e < r; ++e) Ls(this, i[e], t[e]);
        return this
    }, Is.cover = function (t) {
        if (isNaN(t = +t)) return this;
        var e = this._x0, n = this._x1;
        if (isNaN(e)) n = (e = Math.floor(t)) + 1; else {
            if (!(e > t || t > n)) return this;
            var r, i, a = n - e, o = this._root;
            switch (i = +(t < (e + n) / 2)) {
                case 0:
                    do {
                        r = new Array(2), r[i] = o, o = r
                    } while (a *= 2, n = e + a, t > n);
                    break;
                case 1:
                    do {
                        r = new Array(2), r[i] = o, o = r
                    } while (a *= 2, e = n - a, e > t)
            }
            this._root && this._root.length && (this._root = o)
        }
        return this._x0 = e, this._x1 = n, this
    }, Is.data = function () {
        var t = [];
        return this.visit(function (e) {
            if (!e.length) do {
                t.push(e.data)
            } while (e = e.next)
        }), t
    }, Is.extent = function (t) {
        return arguments.length ? this.cover(+t[0][0]).cover(+t[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]]
    }, Is.find = function (t, e) {
        var n, r, i, a, o, s = this._x0, c = this._x1, h = [], u = this._root;
        for (u && h.push(new Rs(u, s, c)), null == e ? e = 1 / 0 : (s = t - e, c = t + e); a = h.pop();) if (!(!(u = a.node) || (r = a.x0) > c || (i = a.x1) < s)) if (u.length) {
            var l = (r + i) / 2;
            h.push(new Rs(u[1], l, i), new Rs(u[0], r, l)), (o = +(t >= l)) && (a = h[h.length - 1], h[h.length - 1] = h[h.length - 1 - o], h[h.length - 1 - o] = a)
        } else {
            var f = Math.abs(t - +this._x.call(null, u.data));
            f < e && (e = f, s = t - f, c = t + f, n = u.data)
        }
        return n
    }, Is.remove = function (t) {
        if (isNaN(a = +this._x.call(null, t))) return this;
        var e, n, r, i, a, o, s, c, h, u = this._root, l = this._x0, f = this._x1;
        if (!u) return this;
        if (u.length) for (; ;) {
            if ((s = a >= (o = (l + f) / 2)) ? l = o : f = o, e = u, !(u = u[c = +s])) return this;
            if (!u.length) break;
            e[c + 1 & 1] && (n = e, h = c)
        }
        for (; u.data !== t;) if (r = u, !(u = u.next)) return this;
        return (i = u.next) && delete u.next, r ? (i ? r.next = i : delete r.next, this) : e ? (i ? e[c] = i : delete e[c], (u = e[0] || e[1]) && u === (e[1] || e[0]) && !u.length && (n ? n[h] = u : this._root = u), this) : (this._root = i, this)
    }, Is.removeAll = function (t) {
        for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
        return this
    }, Is.root = function () {
        return this._root
    }, Is.size = function () {
        var t = 0;
        return this.visit(function (e) {
            if (!e.length) do {
                ++t
            } while (e = e.next)
        }), t
    }, Is.visit = function (t) {
        var e, n, r, i, a = [], o = this._root;
        for (o && a.push(new Rs(o, this._x0, this._x1)); e = a.pop();) if (!t(o = e.node, r = e.x0, i = e.x1) && o.length) {
            var s = (r + i) / 2;
            (n = o[1]) && a.push(new Rs(n, s, i)), (n = o[0]) && a.push(new Rs(n, r, s))
        }
        return this
    }, Is.visitAfter = function (t) {
        var e, n = [], r = [];
        for (this._root && n.push(new Rs(this._root, this._x0, this._x1)); e = n.pop();) {
            var i = e.node;
            if (i.length) {
                var a, o = e.x0, s = e.x1, c = (o + s) / 2;
                (a = i[0]) && n.push(new Rs(a, o, c)), (a = i[1]) && n.push(new Rs(a, c, s))
            }
            r.push(e)
        }
        for (; e = r.pop();) t(e.node, e.x0, e.x1);
        return this
    }, Is.x = function (t) {
        return arguments.length ? (this._x = t, this) : this._x
    };

    function Ds(t, e, n, r) {
        if (isNaN(e) || isNaN(n)) return t;
        var i, a, o, s, c, h, u, l, f, d = t._root, p = {data: r}, m = t._x0, g = t._y0, v = t._x1, y = t._y1;
        if (!d) return t._root = p, t;
        for (; d.length;) if ((h = e >= (a = (m + v) / 2)) ? m = a : v = a, (u = n >= (o = (g + y) / 2)) ? g = o : y = o, i = d, !(d = d[l = u << 1 | h])) return i[l] = p, t;
        if (s = +t._x.call(null, d.data), c = +t._y.call(null, d.data), e === s && n === c) return p.next = d, i ? i[l] = p : t._root = p, t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4), (h = e >= (a = (m + v) / 2)) ? m = a : v = a, (u = n >= (o = (g + y) / 2)) ? g = o : y = o
        } while ((l = u << 1 | h) == (f = (c >= o) << 1 | s >= a));
        return i[f] = d, i[l] = p, t
    }

    function Us(t, e, n, r, i) {
        this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i
    }

    function zs(t) {
        return t[0]
    }

    function Bs(t) {
        return t[1]
    }

    function Fs(t, e, n) {
        var r = new ks(null == e ? zs : e, null == n ? Bs : n, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t)
    }

    function ks(t, e, n, r, i, a) {
        this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0
    }

    function Gs(t) {
        for (var e = {data: t.data}, n = e; t = t.next;) n = n.next = {data: t.data};
        return e
    }

    var Hs = Fs.prototype = ks.prototype;
    Hs.copy = function () {
        var t, e, n = new ks(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r = this._root;
        if (!r) return n;
        if (!r.length) return n._root = Gs(r), n;
        for (t = [{
            source: r,
            target: n._root = new Array(4)
        }]; r = t.pop();) for (var i = 0; i < 4; ++i) (e = r.source[i]) && (e.length ? t.push({
            source: e,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = Gs(e));
        return n
    }, Hs.add = function (t) {
        var e = +this._x.call(null, t), n = +this._y.call(null, t);
        return Ds(this.cover(e, n), e, n, t)
    }, Hs.addAll = function (t) {
        var e, n, r, i, a = t.length, o = new Array(a), s = new Array(a), c = 1 / 0, h = 1 / 0, u = -1 / 0, l = -1 / 0;
        for (n = 0; n < a; ++n) isNaN(r = +this._x.call(null, e = t[n])) || isNaN(i = +this._y.call(null, e)) || (o[n] = r, s[n] = i, r < c && (c = r), r > u && (u = r), i < h && (h = i), i > l && (l = i));
        for (u < c && (c = this._x0, u = this._x1), l < h && (h = this._y0, l = this._y1), this.cover(c, h).cover(u, l), n = 0; n < a; ++n) Ds(this, o[n], s[n], t[n]);
        return this
    }, Hs.cover = function (t, e) {
        if (isNaN(t = +t) || isNaN(e = +e)) return this;
        var n = this._x0, r = this._y0, i = this._x1, a = this._y1;
        if (isNaN(n)) i = (n = Math.floor(t)) + 1, a = (r = Math.floor(e)) + 1; else {
            if (!(n > t || t > i || r > e || e > a)) return this;
            var o, s, c = i - n, h = this._root;
            switch (s = (e < (r + a) / 2) << 1 | t < (n + i) / 2) {
                case 0:
                    do {
                        o = new Array(4), o[s] = h, h = o
                    } while (c *= 2, i = n + c, a = r + c, t > i || e > a);
                    break;
                case 1:
                    do {
                        o = new Array(4), o[s] = h, h = o
                    } while (c *= 2, n = i - c, a = r + c, n > t || e > a);
                    break;
                case 2:
                    do {
                        o = new Array(4), o[s] = h, h = o
                    } while (c *= 2, i = n + c, r = a - c, t > i || r > e);
                    break;
                case 3:
                    do {
                        o = new Array(4), o[s] = h, h = o
                    } while (c *= 2, n = i - c, r = a - c, n > t || r > e)
            }
            this._root && this._root.length && (this._root = h)
        }
        return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this
    }, Hs.data = function () {
        var t = [];
        return this.visit(function (e) {
            if (!e.length) do {
                t.push(e.data)
            } while (e = e.next)
        }), t
    }, Hs.extent = function (t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    }, Hs.find = function (t, e, n) {
        var r, i, a, o, s, c, h, u = this._x0, l = this._y0, f = this._x1, d = this._y1, p = [], m = this._root;
        for (m && p.push(new Us(m, u, l, f, d)), null == n ? n = 1 / 0 : (u = t - n, l = e - n, f = t + n, d = e + n, n *= n); c = p.pop();) if (!(!(m = c.node) || (i = c.x0) > f || (a = c.y0) > d || (o = c.x1) < u || (s = c.y1) < l)) if (m.length) {
            var g = (i + o) / 2, v = (a + s) / 2;
            p.push(new Us(m[3], g, v, o, s), new Us(m[2], i, v, g, s), new Us(m[1], g, a, o, v), new Us(m[0], i, a, g, v)), (h = (e >= v) << 1 | t >= g) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - h], p[p.length - 1 - h] = c)
        } else {
            var y = t - +this._x.call(null, m.data), b = e - +this._y.call(null, m.data), x = y * y + b * b;
            if (x < n) {
                var w = Math.sqrt(n = x);
                u = t - w, l = e - w, f = t + w, d = e + w, r = m.data
            }
        }
        return r
    }, Hs.remove = function (t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
        var e, n, r, i, a, o, s, c, h, u, l, f, d = this._root, p = this._x0, m = this._y0, g = this._x1, v = this._y1;
        if (!d) return this;
        if (d.length) for (; ;) {
            if ((h = a >= (s = (p + g) / 2)) ? p = s : g = s, (u = o >= (c = (m + v) / 2)) ? m = c : v = c, e = d, !(d = d[l = u << 1 | h])) return this;
            if (!d.length) break;
            (e[l + 1 & 3] || e[l + 2 & 3] || e[l + 3 & 3]) && (n = e, f = l)
        }
        for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : e ? (i ? e[l] = i : delete e[l], (d = e[0] || e[1] || e[2] || e[3]) && d === (e[3] || e[2] || e[1] || e[0]) && !d.length && (n ? n[f] = d : this._root = d), this) : (this._root = i, this)
    }, Hs.removeAll = function (t) {
        for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
        return this
    }, Hs.root = function () {
        return this._root
    }, Hs.size = function () {
        var t = 0;
        return this.visit(function (e) {
            if (!e.length) do {
                ++t
            } while (e = e.next)
        }), t
    }, Hs.visit = function (t) {
        var e, n, r, i, a, o, s = [], c = this._root;
        for (c && s.push(new Us(c, this._x0, this._y0, this._x1, this._y1)); e = s.pop();) if (!t(c = e.node, r = e.x0, i = e.y0, a = e.x1, o = e.y1) && c.length) {
            var h = (r + a) / 2, u = (i + o) / 2;
            (n = c[3]) && s.push(new Us(n, h, u, a, o)), (n = c[2]) && s.push(new Us(n, r, u, h, o)), (n = c[1]) && s.push(new Us(n, h, i, a, u)), (n = c[0]) && s.push(new Us(n, r, i, h, u))
        }
        return this
    }, Hs.visitAfter = function (t) {
        var e, n = [], r = [];
        for (this._root && n.push(new Us(this._root, this._x0, this._y0, this._x1, this._y1)); e = n.pop();) {
            var i = e.node;
            if (i.length) {
                var a, o = e.x0, s = e.y0, c = e.x1, h = e.y1, u = (o + c) / 2, l = (s + h) / 2;
                (a = i[0]) && n.push(new Us(a, o, s, u, l)), (a = i[1]) && n.push(new Us(a, u, s, c, l)), (a = i[2]) && n.push(new Us(a, o, l, u, h)), (a = i[3]) && n.push(new Us(a, u, l, c, h))
            }
            r.push(e)
        }
        for (; e = r.pop();) t(e.node, e.x0, e.y0, e.x1, e.y1);
        return this
    }, Hs.x = function (t) {
        return arguments.length ? (this._x = t, this) : this._x
    }, Hs.y = function (t) {
        return arguments.length ? (this._y = t, this) : this._y
    };

    function Vs(t, e, n, r, i) {
        if (isNaN(e) || isNaN(n) || isNaN(r)) return t;
        var a, o, s, c, h, u, l, f, d, p, m, g, v = t._root, y = {data: i}, b = t._x0, x = t._y0, w = t._z0, _ = t._x1,
            M = t._y1, E = t._z1;
        if (!v) return t._root = y, t;
        for (; v.length;) if ((f = e >= (o = (b + _) / 2)) ? b = o : _ = o, (d = n >= (s = (x + M) / 2)) ? x = s : M = s, (p = r >= (c = (w + E) / 2)) ? w = c : E = c, a = v, !(v = v[m = p << 2 | d << 1 | f])) return a[m] = y, t;
        if (h = +t._x.call(null, v.data), u = +t._y.call(null, v.data), l = +t._z.call(null, v.data), e === h && n === u && r === l) return y.next = v, a ? a[m] = y : t._root = y, t;
        do {
            a = a ? a[m] = new Array(8) : t._root = new Array(8), (f = e >= (o = (b + _) / 2)) ? b = o : _ = o, (d = n >= (s = (x + M) / 2)) ? x = s : M = s, (p = r >= (c = (w + E) / 2)) ? w = c : E = c
        } while ((m = p << 2 | d << 1 | f) == (g = (l >= c) << 2 | (u >= s) << 1 | h >= o));
        return a[g] = v, a[m] = y, t
    }

    function js(t, e, n, r, i, a, o) {
        this.node = t, this.x0 = e, this.y0 = n, this.z0 = r, this.x1 = i, this.y1 = a, this.z1 = o
    }

    function Ws(t) {
        return t[0]
    }

    function qs(t) {
        return t[1]
    }

    function Xs(t) {
        return t[2]
    }

    function Ys(t, e, n, r) {
        var i = new Zs(null == e ? Ws : e, null == n ? qs : n, null == r ? Xs : r, NaN, NaN, NaN, NaN, NaN, NaN);
        return null == t ? i : i.addAll(t)
    }

    function Zs(t, e, n, r, i, a, o, s, c) {
        this._x = t, this._y = e, this._z = n, this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = o, this._y1 = s, this._z1 = c, this._root = void 0
    }

    function Js(t) {
        for (var e = {data: t.data}, n = e; t = t.next;) n = n.next = {data: t.data};
        return e
    }

    var Qs = Ys.prototype = Zs.prototype;
    Qs.copy = function () {
        var t, e, n = new Zs(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1),
            r = this._root;
        if (!r) return n;
        if (!r.length) return n._root = Js(r), n;
        for (t = [{
            source: r,
            target: n._root = new Array(8)
        }]; r = t.pop();) for (var i = 0; i < 8; ++i) (e = r.source[i]) && (e.length ? t.push({
            source: e,
            target: r.target[i] = new Array(8)
        }) : r.target[i] = Js(e));
        return n
    }, Qs.add = function (t) {
        var e = +this._x.call(null, t), n = +this._y.call(null, t), r = +this._z.call(null, t);
        return Vs(this.cover(e, n, r), e, n, r, t)
    }, Qs.addAll = function (t) {
        var e, n, r, i, a, o = t.length, s = new Array(o), c = new Array(o), h = new Array(o), u = 1 / 0, l = 1 / 0,
            f = 1 / 0, d = -1 / 0, p = -1 / 0, m = -1 / 0;
        for (n = 0; n < o; ++n) isNaN(r = +this._x.call(null, e = t[n])) || isNaN(i = +this._y.call(null, e)) || isNaN(a = +this._z.call(null, e)) || (s[n] = r, c[n] = i, h[n] = a, r < u && (u = r), r > d && (d = r), i < l && (l = i), i > p && (p = i), a < f && (f = a), a > m && (m = a));
        for (d < u && (u = this._x0, d = this._x1), p < l && (l = this._y0, p = this._y1), m < f && (f = this._z0, m = this._z1), this.cover(u, l, f).cover(d, p, m), n = 0; n < o; ++n) Vs(this, s[n], c[n], h[n], t[n]);
        return this
    }, Qs.cover = function (t, e, n) {
        if (isNaN(t = +t) || isNaN(e = +e) || isNaN(n = +n)) return this;
        var r = this._x0, i = this._y0, a = this._z0, o = this._x1, s = this._y1, c = this._z1;
        if (isNaN(r)) o = (r = Math.floor(t)) + 1, s = (i = Math.floor(e)) + 1, c = (a = Math.floor(n)) + 1; else {
            if (!(r > t || t > o || i > e || e > s || a > n || n > c)) return this;
            var h, u, l = o - r, f = this._root;
            switch (u = (n < (a + c) / 2) << 2 | (e < (i + s) / 2) << 1 | t < (r + o) / 2) {
                case 0:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, o = r + l, s = i + l, c = a + l, t > o || e > s || n > c);
                    break;
                case 1:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, r = o - l, s = i + l, c = a + l, r > t || e > s || n > c);
                    break;
                case 2:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, o = r + l, i = s - l, c = a + l, t > o || i > e || n > c);
                    break;
                case 3:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, r = o - l, i = s - l, c = a + l, r > t || i > e || n > c);
                    break;
                case 4:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, o = r + l, s = i + l, a = c - l, t > o || e > s || a > n);
                    break;
                case 5:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, r = o - l, s = i + l, a = c - l, r > t || e > s || a > n);
                    break;
                case 6:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, o = r + l, i = s - l, a = c - l, t > o || i > e || a > n);
                    break;
                case 7:
                    do {
                        h = new Array(8), h[u] = f, f = h
                    } while (l *= 2, r = o - l, i = s - l, a = c - l, r > t || i > e || a > n)
            }
            this._root && this._root.length && (this._root = f)
        }
        return this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = o, this._y1 = s, this._z1 = c, this
    }, Qs.data = function () {
        var t = [];
        return this.visit(function (e) {
            if (!e.length) do {
                t.push(e.data)
            } while (e = e.next)
        }), t
    }, Qs.extent = function (t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1], +t[0][2]).cover(+t[1][0], +t[1][1], +t[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]]
    }, Qs.find = function (t, e, n, r) {
        var i, a, o, s, c, h, u, l, f, d = this._x0, p = this._y0, m = this._z0, g = this._x1, v = this._y1,
            y = this._z1, b = [], x = this._root;
        for (x && b.push(new js(x, d, p, m, g, v, y)), null == r ? r = 1 / 0 : (d = t - r, p = e - r, m = n - r, g = t + r, v = e + r, y = n + r, r *= r); l = b.pop();) if (!(!(x = l.node) || (a = l.x0) > g || (o = l.y0) > v || (s = l.z0) > y || (c = l.x1) < d || (h = l.y1) < p || (u = l.z1) < m)) if (x.length) {
            var w = (a + c) / 2, _ = (o + h) / 2, M = (s + u) / 2;
            b.push(new js(x[7], w, _, M, c, h, u), new js(x[6], a, _, M, w, h, u), new js(x[5], w, o, M, c, _, u), new js(x[4], a, o, M, w, _, u), new js(x[3], w, _, s, c, h, M), new js(x[2], a, _, s, w, h, M), new js(x[1], w, o, s, c, _, M), new js(x[0], a, o, s, w, _, M)), (f = (n >= M) << 2 | (e >= _) << 1 | t >= w) && (l = b[b.length - 1], b[b.length - 1] = b[b.length - 1 - f], b[b.length - 1 - f] = l)
        } else {
            var E = t - +this._x.call(null, x.data), T = e - +this._y.call(null, x.data),
                S = n - +this._z.call(null, x.data), A = E * E + T * T + S * S;
            if (A < r) {
                var L = Math.sqrt(r = A);
                d = t - L, p = e - L, m = n - L, g = t + L, v = e + L, y = n + L, i = x.data
            }
        }
        return i
    }, Qs.remove = function (t) {
        if (isNaN(a = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t)) || isNaN(s = +this._z.call(null, t))) return this;
        var e, n, r, i, a, o, s, c, h, u, l, f, d, p, m, g = this._root, v = this._x0, y = this._y0, b = this._z0,
            x = this._x1, w = this._y1, _ = this._z1;
        if (!g) return this;
        if (g.length) for (; ;) {
            if ((l = a >= (c = (v + x) / 2)) ? v = c : x = c, (f = o >= (h = (y + w) / 2)) ? y = h : w = h, (d = s >= (u = (b + _) / 2)) ? b = u : _ = u, e = g, !(g = g[p = d << 2 | f << 1 | l])) return this;
            if (!g.length) break;
            (e[p + 1 & 7] || e[p + 2 & 7] || e[p + 3 & 7] || e[p + 4 & 7] || e[p + 5 & 7] || e[p + 6 & 7] || e[p + 7 & 7]) && (n = e, m = p)
        }
        for (; g.data !== t;) if (r = g, !(g = g.next)) return this;
        return (i = g.next) && delete g.next, r ? (i ? r.next = i : delete r.next, this) : e ? (i ? e[p] = i : delete e[p], (g = e[0] || e[1] || e[2] || e[3] || e[4] || e[5] || e[6] || e[7]) && g === (e[7] || e[6] || e[5] || e[4] || e[3] || e[2] || e[1] || e[0]) && !g.length && (n ? n[m] = g : this._root = g), this) : (this._root = i, this)
    }, Qs.removeAll = function (t) {
        for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
        return this
    }, Qs.root = function () {
        return this._root
    }, Qs.size = function () {
        var t = 0;
        return this.visit(function (e) {
            if (!e.length) do {
                ++t
            } while (e = e.next)
        }), t
    }, Qs.visit = function (t) {
        var e, n, r, i, a, o, s, c, h = [], u = this._root;
        for (u && h.push(new js(u, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); e = h.pop();) if (!t(u = e.node, r = e.x0, i = e.y0, a = e.z0, o = e.x1, s = e.y1, c = e.z1) && u.length) {
            var l = (r + o) / 2, f = (i + s) / 2, d = (a + c) / 2;
            (n = u[7]) && h.push(new js(n, l, f, d, o, s, c)), (n = u[6]) && h.push(new js(n, r, f, d, l, s, c)), (n = u[5]) && h.push(new js(n, l, i, d, o, f, c)), (n = u[4]) && h.push(new js(n, r, i, d, l, f, c)), (n = u[3]) && h.push(new js(n, l, f, a, o, s, d)), (n = u[2]) && h.push(new js(n, r, f, a, l, s, d)), (n = u[1]) && h.push(new js(n, l, i, a, o, f, d)), (n = u[0]) && h.push(new js(n, r, i, a, l, f, d))
        }
        return this
    }, Qs.visitAfter = function (t) {
        var e, n = [], r = [];
        for (this._root && n.push(new js(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); e = n.pop();) {
            var i = e.node;
            if (i.length) {
                var a, o = e.x0, s = e.y0, c = e.z0, h = e.x1, u = e.y1, l = e.z1, f = (o + h) / 2, d = (s + u) / 2,
                    p = (c + l) / 2;
                (a = i[0]) && n.push(new js(a, o, s, c, f, d, p)), (a = i[1]) && n.push(new js(a, f, s, c, h, d, p)), (a = i[2]) && n.push(new js(a, o, d, c, f, u, p)), (a = i[3]) && n.push(new js(a, f, d, c, h, u, p)), (a = i[4]) && n.push(new js(a, o, s, p, f, d, l)), (a = i[5]) && n.push(new js(a, f, s, p, h, d, l)), (a = i[6]) && n.push(new js(a, o, d, p, f, u, l)), (a = i[7]) && n.push(new js(a, f, d, p, h, u, l))
            }
            r.push(e)
        }
        for (; e = r.pop();) t(e.node, e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
        return this
    }, Qs.x = function (t) {
        return arguments.length ? (this._x = t, this) : this._x
    }, Qs.y = function (t) {
        return arguments.length ? (this._y = t, this) : this._y
    }, Qs.z = function (t) {
        return arguments.length ? (this._z = t, this) : this._z
    };

    function Ks() {
    }

    Ks.prototype = $s.prototype = {
        constructor: Ks, has: function (t) {
            return "$" + t in this
        }, get: function (t) {
            return this["$" + t]
        }, set: function (t, e) {
            return this["$" + t] = e, this
        }, remove: function (t) {
            var e = "$" + t;
            return e in this && delete this[e]
        }, clear: function () {
            for (var t in this) "$" === t[0] && delete this[t]
        }, keys: function () {
            var t = [];
            for (var e in this) "$" === e[0] && t.push(e.slice(1));
            return t
        }, values: function () {
            var t = [];
            for (var e in this) "$" === e[0] && t.push(this[e]);
            return t
        }, entries: function () {
            var t = [];
            for (var e in this) "$" === e[0] && t.push({key: e.slice(1), value: this[e]});
            return t
        }, size: function () {
            var t = 0;
            for (var e in this) "$" === e[0] && ++t;
            return t
        }, empty: function () {
            for (var t in this) if ("$" === t[0]) return !1;
            return !0
        }, each: function (t) {
            for (var e in this) "$" === e[0] && t(this[e], e.slice(1), this)
        }
    };

    function $s(t, e) {
        var n = new Ks;
        if (t instanceof Ks) t.each(function (t, e) {
            n.set(e, t)
        }); else if (Array.isArray(t)) {
            var r, i = -1, a = t.length;
            if (null == e) for (; ++i < a;) n.set(i, t[i]); else for (; ++i < a;) n.set(e(r = t[i], i, t), r)
        } else if (t) for (var o in t) n.set(o, t[o]);
        return n
    }

    function tc() {
    }

    var ec = $s.prototype;
    tc.prototype = function (t, e) {
        var n = new tc;
        if (t instanceof tc) t.each(function (t) {
            n.add(t)
        }); else if (t) {
            var r = -1, i = t.length;
            if (null == e) for (; ++r < i;) n.add(t[r]); else for (; ++r < i;) n.add(e(t[r], r, t))
        }
        return n
    }.prototype = {
        constructor: tc, has: ec.has, add: function (t) {
            return this["$" + (t += "")] = t, this
        }, remove: ec.remove, clear: ec.clear, values: ec.keys, size: ec.size, empty: ec.empty, each: ec.each
    };

    function nc(t) {
        return t.index
    }

    function rc(t, e) {
        var n = t.get(e);
        if (!n) throw new Error("missing: " + e);
        return n
    }

    var ic = {
        value: function () {
        }
    };

    function ac() {
        for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new oc(r)
    }

    function oc(t) {
        this._ = t
    }

    oc.prototype = ac.prototype = {
        constructor: oc, on: function (t, e) {
            var n, r, i, a = this._, o = (r = t + "", i = a, r.trim().split(/^|\s+/).map(function (t) {
                var e = "", n = t.indexOf(".");
                if (n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), t && !i.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {type: t, name: e}
            })), s = -1, c = o.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                for (; ++s < c;) if (n = (t = o[s]).type) a[n] = cc(a[n], t.name, e); else if (null == e) for (n in a) a[n] = cc(a[n], t.name, null);
                return this
            }
            for (; ++s < c;) if ((n = (t = o[s]).type) && (n = sc(a[n], t.name))) return n
        }, copy: function () {
            var t = {}, e = this._;
            for (var n in e) t[n] = e[n].slice();
            return new oc(t)
        }, call: function (t, e) {
            if ((n = arguments.length - 2) > 0) for (var n, r, i = new Array(n), a = 0; a < n; ++a) i[a] = arguments[a + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (a = 0, n = (r = this._[t]).length; a < n; ++a) r[a].value.apply(e, i)
        }, apply: function (t, e, n) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n)
        }
    };

    function sc(t, e) {
        for (var n, r = 0, i = t.length; r < i; ++r) if ((n = t[r]).name === e) return n.value
    }

    function cc(t, e, n) {
        for (var r = 0, i = t.length; r < i; ++r) if (t[r].name === e) {
            t[r] = ic, t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != n && t.push({name: e, value: n}), t
    }

    var hc, uc, lc = 0, fc = 0, dc = 0, pc = 1e3, mc = 0, gc = 0, vc = 0,
        yc = "object" == typeof performance && performance.now ? performance : Date,
        bc = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
            setTimeout(t, 17)
        };

    function xc() {
        return gc || (bc(wc), gc = yc.now() + vc)
    }

    function wc() {
        gc = 0
    }

    function _c() {
        this._call = this._time = this._next = null
    }

    _c.prototype = Mc.prototype = {
        constructor: _c, restart: function (t, e, n) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            n = (null == n ? xc() : +n) + (null == e ? 0 : +e), this._next || uc === this || (uc ? uc._next = this : hc = this, uc = this), this._call = t, this._time = n, Sc()
        }, stop: function () {
            this._call && (this._call = null, this._time = 1 / 0, Sc())
        }
    };

    function Mc(t, e, n) {
        var r = new _c;
        return r.restart(t, e, n), r
    }

    function Ec() {
        gc = (mc = yc.now()) + vc, lc = fc = 0;
        try {
            !function () {
                xc(), ++lc;
                for (var t, e = hc; e;) (t = gc - e._time) >= 0 && e._call.call(null, t), e = e._next;
                --lc
            }()
        } finally {
            lc = 0, function () {
                var t, e, n = hc, r = 1 / 0;
                for (; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : hc = e);
                uc = t, Sc(r)
            }(), gc = 0
        }
    }

    function Tc() {
        var t = yc.now(), e = t - mc;
        e > pc && (vc -= e, mc = t)
    }

    function Sc(t) {
        if (!lc) {
            fc && (fc = clearTimeout(fc));
            t - gc > 24 ? (t < 1 / 0 && (fc = setTimeout(Ec, t - yc.now() - vc)), dc && (dc = clearInterval(dc))) : (dc || (mc = yc.now(), dc = setInterval(Tc, pc)), lc = 1, bc(Ec))
        }
    }

    var Ac = 3;

    function Lc(t) {
        return t.x
    }

    function Rc(t) {
        return t.y
    }

    function Pc(t) {
        return t.z
    }

    var Cc = 10, Nc = Math.PI * (3 - Math.sqrt(5)), Oc = Math.PI / 24;
    var Ic = function (t) {
        !function (t) {
            if (!t) throw new Error("Eventify cannot use falsy object as events subject");
            for (var e = ["on", "fire", "off"], n = 0; n < e.length; ++n) if (t.hasOwnProperty(e[n])) throw new Error("Subject cannot be eventified, since it already has property '" + e[n] + "'")
        }(t);
        var e = function (t) {
            var e = Object.create(null);
            return {
                on: function (n, r, i) {
                    if ("function" != typeof r) throw new Error("callback is expected to be a function");
                    var a = e[n];
                    return a || (a = e[n] = []), a.push({callback: r, ctx: i}), t
                }, off: function (n, r) {
                    var i = void 0 === n;
                    if (i) return e = Object.create(null), t;
                    if (e[n]) {
                        var a = "function" != typeof r;
                        if (a) delete e[n]; else for (var o = e[n], s = 0; s < o.length; ++s) o[s].callback === r && o.splice(s, 1)
                    }
                    return t
                }, fire: function (n) {
                    var r = e[n];
                    if (!r) return t;
                    var i;
                    arguments.length > 1 && (i = Array.prototype.splice.call(arguments, 1));
                    for (var a = 0; a < r.length; ++a) {
                        var o = r[a];
                        o.callback.apply(o.ctx, i)
                    }
                    return t
                }
            }
        }(t);
        return t.on = e.on, t.off = e.off, t.fire = e.fire, t
    };
    var Dc = function (t) {
        "uniqueLinkId" in (t = t || {}) && (console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n", "\n", "Note: there is also change in default behavior: From now own each graph\nis considered to be not a multigraph by default (each edge is unique)."), t.multigraph = t.uniqueLinkId);
        void 0 === t.multigraph && (t.multigraph = !1);
        var e = "function" == typeof Object.create ? Object.create(null) : {}, n = [], r = {}, i = 0, a = 0,
            o = Object.keys ? E : T, s = t.multigraph ? function (t, e, n) {
                var i = Fc(t, e), a = r.hasOwnProperty(i);
                if (a || x(t, e)) {
                    a || (r[i] = 0);
                    var o = "@" + ++r[i];
                    i = Fc(t + o, e + o)
                }
                return new Bc(t, e, n, i)
            } : function (t, e, n) {
                var r = Fc(t, e);
                return new Bc(t, e, n, r)
            }, c = [], h = w, u = w, l = w, f = w, d = {
                addNode: g, addLink: function (t, e, r) {
                    l();
                    var i = v(t) || g(t), a = v(e) || g(e), o = s(t, e, r);
                    n.push(o), zc(i, o), t !== e && zc(a, o);
                    return h(o, "add"), f(), o
                }, removeLink: b, removeNode: y, getNode: v, getNodesCount: function () {
                    return i
                }, getLinksCount: function () {
                    return n.length
                }, getLinks: function (t) {
                    var e = v(t);
                    return e ? e.links : null
                }, forEachNode: o, forEachLinkedNode: function (t, n, r) {
                    var i = v(t);
                    if (i && i.links && "function" == typeof n) return r ? function (t, n, r) {
                        for (var i = 0; i < t.length; ++i) {
                            var a = t[i];
                            if (a.fromId === n && r(e[a.toId], a)) return !0
                        }
                    }(i.links, t, n) : function (t, n, r) {
                        for (var i = 0; i < t.length; ++i) {
                            var a = t[i], o = a.fromId === n ? a.toId : a.fromId;
                            if (r(e[o], a)) return !0
                        }
                    }(i.links, t, n)
                }, forEachLink: function (t) {
                    var e, r;
                    if ("function" == typeof t) for (e = 0, r = n.length; e < r; ++e) t(n[e])
                }, beginUpdate: l, endUpdate: f, clear: function () {
                    l(), o(function (t) {
                        y(t.id)
                    }), f()
                }, hasLink: x, hasNode: v, getLink: x
            };
        return Ic(d), function () {
            var t = d.on;
            d.on = function () {
                return d.beginUpdate = l = _, d.endUpdate = f = M, h = p, u = m, d.on = t, t.apply(d, arguments)
            }
        }(), d;

        function p(t, e) {
            c.push({link: t, changeType: e})
        }

        function m(t, e) {
            c.push({node: t, changeType: e})
        }

        function g(t, n) {
            if (void 0 === t) throw new Error("Invalid node identifier");
            l();
            var r = v(t);
            return r ? (r.data = n, u(r, "update")) : (r = new function (t, e) {
                this.id = t, this.links = null, this.data = e
            }(t, n), i++, u(r, "add")), e[t] = r, f(), r
        }

        function v(t) {
            return e[t]
        }

        function y(t) {
            var n = v(t);
            if (!n) return !1;
            l();
            var r = n.links;
            if (r) {
                n.links = null;
                for (var a = 0; a < r.length; ++a) b(r[a])
            }
            return delete e[t], i--, u(n, "remove"), f(), !0
        }

        function b(t) {
            if (!t) return !1;
            var e = Uc(t, n);
            if (e < 0) return !1;
            l(), n.splice(e, 1);
            var r = v(t.fromId), i = v(t.toId);
            return r && (e = Uc(t, r.links)) >= 0 && r.links.splice(e, 1), i && (e = Uc(t, i.links)) >= 0 && i.links.splice(e, 1), h(t, "remove"), f(), !0
        }

        function x(t, e) {
            var n, r = v(t);
            if (!r || !r.links) return null;
            for (n = 0; n < r.links.length; ++n) {
                var i = r.links[n];
                if (i.fromId === t && i.toId === e) return i
            }
            return null
        }

        function w() {
        }

        function _() {
            a += 1
        }

        function M() {
            0 === (a -= 1) && c.length > 0 && (d.fire("changed", c), c.length = 0)
        }

        function E(t) {
            if ("function" == typeof t) for (var n = Object.keys(e), r = 0; r < n.length; ++r) if (t(e[n[r]])) return !0
        }

        function T(t) {
            if ("function" == typeof t) {
                var n;
                for (n in e) if (t(e[n])) return !0
            }
        }
    };

    function Uc(t, e) {
        if (!e) return -1;
        if (e.indexOf) return e.indexOf(t);
        var n, r = e.length;
        for (n = 0; n < r; n += 1) if (e[n] === t) return n;
        return -1
    }

    function zc(t, e) {
        t.links ? t.links.push(e) : t.links = [e]
    }

    function Bc(t, e, n, r) {
        this.fromId = t, this.toId = e, this.data = n, this.id = r
    }

    function Fc(t, e) {
        return t.toString() + "👉 " + e.toString()
    }

    var kc = function (t, e, n, r, i) {
        this.from = t, this.to = e, this.length = n, this.coeff = r, this.weight = "number" == typeof i ? i : 1
    };
    var Gc = function (t, e, n) {
        if ("[object Array]" === Object.prototype.toString.call(n)) for (var r = 0; r < n.length; ++r) Hc(t, e, n[r]); else for (var i in t) Hc(t, e, i)
    };

    function Hc(t, e, n) {
        if (t.hasOwnProperty(n)) {
            if ("function" == typeof e[n]) return;
            e[n] = function (r) {
                return void 0 !== r ? (t[n] = r, e) : t[n]
            }
        }
    }

    var Vc = function t(e, n) {
        var r;
        e || (e = {});
        if (n) for (r in n) if (n.hasOwnProperty(r)) {
            var i = e.hasOwnProperty(r), a = typeof n[r], o = !i || typeof e[r] !== a;
            o ? e[r] = n[r] : "object" === a && (e[r] = t(e[r], n[r]))
        }
        return e
    };
    var jc = {
        random: Wc, randomIterator: function (t, e) {
            var n = e || Wc();
            if ("function" != typeof n.next) throw new Error("customRandom does not match expected API: next() function is missing");
            return {
                forEach: function (e) {
                    var r, i, a;
                    for (r = t.length - 1; r > 0; --r) i = n.next(r + 1), a = t[i], t[i] = t[r], t[r] = a, e(a);
                    t.length && e(t[0])
                }, shuffle: function () {
                    var e, r, i;
                    for (e = t.length - 1; e > 0; --e) r = n.next(e + 1), i = t[r], t[r] = t[e], t[e] = i;
                    return t
                }
            }
        }
    };

    function Wc(t) {
        var e = "number" == typeof t ? t : +new Date, n = function () {
            return (268435455 & (e = 4294967295 & (3042594569 ^ (e = (e = 4294967295 & ((e = (e = 4294967295 & (3345072700 ^ (e = e + 2127912214 + (e << 12) & 4294967295) ^ e >>> 19)) + 374761393 + (e << 5) & 4294967295) + 3550635116 ^ e << 9)) + 4251993797 + (e << 3) & 4294967295) ^ e >>> 16))) / 268435456
        };
        return {
            next: function (t) {
                return Math.floor(n() * t)
            }, nextDouble: function () {
                return n()
            }
        }
    }

    var qc = function () {
        this.body = null, this.quad0 = null, this.quad1 = null, this.quad2 = null, this.quad3 = null, this.mass = 0, this.massX = 0, this.massY = 0, this.left = 0, this.top = 0, this.bottom = 0, this.right = 0
    }, Xc = Yc;

    function Yc() {
        this.stack = [], this.popIdx = 0
    }

    Yc.prototype = {
        isEmpty: function () {
            return 0 === this.popIdx
        }, push: function (t, e) {
            var n = this.stack[this.popIdx];
            n ? (n.node = t, n.body = e) : this.stack[this.popIdx] = new function (t, e) {
                this.node = t, this.body = e
            }(t, e), ++this.popIdx
        }, pop: function () {
            if (this.popIdx > 0) return this.stack[--this.popIdx]
        }, reset: function () {
            this.popIdx = 0
        }
    };
    var Zc = function (t, e) {
        var n = Math.abs(t.x - e.x), r = Math.abs(t.y - e.y);
        return n < 1e-8 && r < 1e-8
    }, Jc = function (t) {
        (t = t || {}).gravity = "number" == typeof t.gravity ? t.gravity : -1, t.theta = "number" == typeof t.theta ? t.theta : .8;
        var e = jc.random(1984), n = qc, r = Xc, i = Zc, a = t.gravity, o = [], s = new r, c = t.theta, h = [], u = 0,
            l = f();
        return {
            insertBodies: function (t) {
                var e, n = Number.MAX_VALUE, r = Number.MAX_VALUE, i = Number.MIN_VALUE, a = Number.MIN_VALUE,
                    o = t.length;
                e = o;
                for (; e--;) {
                    var s = t[e].pos.x, c = t[e].pos.y;
                    s < n && (n = s), s > i && (i = s), c < r && (r = c), c > a && (a = c)
                }
                var h = i - n, p = a - r;
                h > p ? a = r + h : i = n + p;
                u = 0, (l = f()).left = n, l.right = i, l.top = r, l.bottom = a, (e = o - 1) >= 0 && (l.body = t[e]);
                for (; e--;) d(t[e])
            }, getRoot: function () {
                return l
            }, updateBodyForce: function (t) {
                var n, r, i, s, h = o, u = 0, f = 0, d = 1, p = 0, m = 1;
                h[0] = l;
                for (; d;) {
                    var g = h[p], v = g.body;
                    d -= 1, p += 1;
                    var y = v !== t;
                    v && y ? (r = v.pos.x - t.pos.x, i = v.pos.y - t.pos.y, 0 === (s = Math.sqrt(r * r + i * i)) && (r = (e.nextDouble() - .5) / 50, i = (e.nextDouble() - .5) / 50, s = Math.sqrt(r * r + i * i)), n = a * v.mass * t.mass / (s * s * s), u += n * r, f += n * i) : y && (r = g.massX / g.mass - t.pos.x, i = g.massY / g.mass - t.pos.y, 0 === (s = Math.sqrt(r * r + i * i)) && (r = (e.nextDouble() - .5) / 50, i = (e.nextDouble() - .5) / 50, s = Math.sqrt(r * r + i * i)), (g.right - g.left) / s < c ? (n = a * g.mass * t.mass / (s * s * s), u += n * r, f += n * i) : (g.quad0 && (h[m] = g.quad0, d += 1, m += 1), g.quad1 && (h[m] = g.quad1, d += 1, m += 1), g.quad2 && (h[m] = g.quad2, d += 1, m += 1), g.quad3 && (h[m] = g.quad3, d += 1, m += 1)))
                }
                t.force.x += u, t.force.y += f
            }, options: function (t) {
                return t ? ("number" == typeof t.gravity && (a = t.gravity), "number" == typeof t.theta && (c = t.theta), this) : {
                    gravity: a,
                    theta: c
                }
            }
        };

        function f() {
            var t = h[u];
            return t ? (t.quad0 = null, t.quad1 = null, t.quad2 = null, t.quad3 = null, t.body = null, t.mass = t.massX = t.massY = 0, t.left = t.right = t.top = t.bottom = 0) : (t = new n, h[u] = t), ++u, t
        }

        function d(t) {
            for (s.reset(), s.push(l, t); !s.isEmpty();) {
                var n = s.pop(), r = n.node, a = n.body;
                if (r.body) {
                    var o = r.body;
                    if (r.body = null, i(o.pos, a.pos)) {
                        var c = 3;
                        do {
                            var h = e.nextDouble(), u = (r.right - r.left) * h, d = (r.bottom - r.top) * h;
                            o.pos.x = r.left + u, o.pos.y = r.top + d, c -= 1
                        } while (c > 0 && i(o.pos, a.pos));
                        if (0 === c && i(o.pos, a.pos)) return
                    }
                    s.push(r, o), s.push(r, a)
                } else {
                    var p = a.pos.x, m = a.pos.y;
                    r.mass = r.mass + a.mass, r.massX = r.massX + a.mass * p, r.massY = r.massY + a.mass * m;
                    var g = 0, v = r.left, y = (r.right + v) / 2, b = r.top, x = (r.bottom + b) / 2;
                    p > y && (g += 1, v = y, y = r.right), m > x && (g += 2, b = x, x = r.bottom);
                    var w = Qc(r, g);
                    w ? s.push(w, a) : ((w = f()).left = v, w.top = b, w.right = y, w.bottom = x, w.body = a, Kc(r, g, w))
                }
            }
        }
    };

    function Qc(t, e) {
        return 0 === e ? t.quad0 : 1 === e ? t.quad1 : 2 === e ? t.quad2 : 3 === e ? t.quad3 : null
    }

    function Kc(t, e, n) {
        0 === e ? t.quad0 = n : 1 === e ? t.quad1 = n : 2 === e ? t.quad2 = n : 3 === e && (t.quad3 = n)
    }

    var $c = function (t, e) {
        var n = jc.random(42), r = {x1: 0, y1: 0, x2: 0, y2: 0};
        return {
            box: r, update: function () {
                var e = t.length;
                if (0 === e) return;
                var n = Number.MAX_VALUE, i = Number.MAX_VALUE, a = Number.MIN_VALUE, o = Number.MIN_VALUE;
                for (; e--;) {
                    var s = t[e];
                    s.isPinned ? (s.pos.x = s.prevPos.x, s.pos.y = s.prevPos.y) : (s.prevPos.x = s.pos.x, s.prevPos.y = s.pos.y), s.pos.x < n && (n = s.pos.x), s.pos.x > a && (a = s.pos.x), s.pos.y < i && (i = s.pos.y), s.pos.y > o && (o = s.pos.y)
                }
                r.x1 = n, r.x2 = a, r.y1 = i, r.y2 = o
            }, reset: function () {
                r.x1 = r.y1 = 0, r.x2 = r.y2 = 0
            }, getBestNewPosition: function (t) {
                var i = r, a = 0, o = 0;
                if (t.length) {
                    for (var s = 0; s < t.length; ++s) a += t[s].pos.x, o += t[s].pos.y;
                    a /= t.length, o /= t.length
                } else a = (i.x1 + i.x2) / 2, o = (i.y1 + i.y2) / 2;
                var c = e.springLength;
                return {x: a + n.next(c) - c / 2, y: o + n.next(c) - c / 2}
            }
        }
    }, th = function (t) {
        var e = {
            update: function (e) {
                e.force.x -= t.dragCoeff * e.velocity.x, e.force.y -= t.dragCoeff * e.velocity.y
            }
        };
        return Gc(t = Vc(t, {dragCoeff: .02}), e, ["dragCoeff"]), e
    }, eh = function (t) {
        var e = Vc, n = jc.random(42), r = {
            update: function (e) {
                var r = e.from, i = e.to, a = e.length < 0 ? t.springLength : e.length, o = i.pos.x - r.pos.x,
                    s = i.pos.y - r.pos.y, c = Math.sqrt(o * o + s * s);
                0 === c && (o = (n.nextDouble() - .5) / 50, s = (n.nextDouble() - .5) / 50, c = Math.sqrt(o * o + s * s));
                var h = c - a, u = (!e.coeff || e.coeff < 0 ? t.springCoeff : e.coeff) * h / c * e.weight;
                r.force.x += u * o, r.force.y += u * s, i.force.x -= u * o, i.force.y -= u * s
            }
        };
        return Gc(t = e(t, {springCoeff: 2e-4, springLength: 80}), r, ["springCoeff", "springLength"]), r
    }, nh = function (t, e) {
        var n, r = 0, i = 0, a = 0, o = 0, s = t.length;
        if (0 === s) return 0;
        for (n = 0; n < s; ++n) {
            var c = t[n], h = e / c.mass;
            c.velocity.x += h * c.force.x, c.velocity.y += h * c.force.y;
            var u = c.velocity.x, l = c.velocity.y, f = Math.sqrt(u * u + l * l);
            f > 1 && (c.velocity.x = u / f, c.velocity.y = l / f), r = e * c.velocity.x, a = e * c.velocity.y, c.pos.x += r, c.pos.y += a, i += Math.abs(r), o += Math.abs(a)
        }
        return (i * i + o * o) / s
    };
    var rh = {Body: ih, Vector2d: ah, Body3d: oh, Vector3d: sh};

    function ih(t, e) {
        this.pos = new ah(t, e), this.prevPos = new ah(t, e), this.force = new ah, this.velocity = new ah, this.mass = 1
    }

    ih.prototype.setPosition = function (t, e) {
        this.prevPos.x = this.pos.x = t, this.prevPos.y = this.pos.y = e
    };

    function ah(t, e) {
        t && "number" != typeof t ? (this.x = "number" == typeof t.x ? t.x : 0, this.y = "number" == typeof t.y ? t.y : 0) : (this.x = "number" == typeof t ? t : 0, this.y = "number" == typeof e ? e : 0)
    }

    ah.prototype.reset = function () {
        this.x = this.y = 0
    };

    function oh(t, e, n) {
        this.pos = new sh(t, e, n), this.prevPos = new sh(t, e, n), this.force = new sh, this.velocity = new sh, this.mass = 1
    }

    oh.prototype.setPosition = function (t, e, n) {
        this.prevPos.x = this.pos.x = t, this.prevPos.y = this.pos.y = e, this.prevPos.z = this.pos.z = n
    };

    function sh(t, e, n) {
        t && "number" != typeof t ? (this.x = "number" == typeof t.x ? t.x : 0, this.y = "number" == typeof t.y ? t.y : 0, this.z = "number" == typeof t.z ? t.z : 0) : (this.x = "number" == typeof t ? t : 0, this.y = "number" == typeof e ? e : 0, this.z = "number" == typeof n ? n : 0)
    }

    sh.prototype.reset = function () {
        this.x = this.y = this.z = 0
    };
    var ch = function (t) {
        return new rh.Body(t)
    }, hh = function (t) {
        var e = kc, n = Gc, r = Ic, i = (t = Vc(t, {
                springLength: 30,
                springCoeff: 8e-4,
                gravity: -1.2,
                theta: .8,
                dragCoeff: .02,
                timeStep: 20
            })).createQuadTree || Jc, a = t.createBounds || $c, o = t.createDragForce || th, s = t.createSpringForce || eh,
            c = t.integrator || nh, h = t.createBody || ch, u = [], l = [], f = i(t), d = a(u, t), p = s(t), m = o(t),
            g = {
                bodies: u, quadTree: f, springs: l, settings: t, step: function () {
                    !function () {
                        var t, e = u.length;
                        if (e) for (f.insertBodies(u); e--;) (t = u[e]).isPinned || (t.force.reset(), f.updateBodyForce(t), m.update(t));
                        e = l.length;
                        for (; e--;) p.update(l[e])
                    }();
                    var e = c(u, t.timeStep);
                    return d.update(), e
                }, addBody: function (t) {
                    if (!t) throw new Error("Body is required");
                    return u.push(t), t
                }, addBodyAt: function (t) {
                    if (!t) throw new Error("Body position is required");
                    var e = h(t);
                    return u.push(e), e
                }, removeBody: function (t) {
                    if (t) {
                        var e = u.indexOf(t);
                        if (!(e < 0)) return u.splice(e, 1), 0 === u.length && d.reset(), !0
                    }
                }, addSpring: function (t, n, r, i, a) {
                    if (!t || !n) throw new Error("Cannot add null spring to force simulator");
                    "number" != typeof r && (r = -1);
                    var o = new e(t, n, r, a >= 0 ? a : -1, i);
                    return l.push(o), o
                }, getTotalMovement: function () {
                    return 0
                }, removeSpring: function (t) {
                    if (t) {
                        var e = l.indexOf(t);
                        return e > -1 ? (l.splice(e, 1), !0) : void 0
                    }
                }, getBestNewBodyPosition: function (t) {
                    return d.getBestNewPosition(t)
                }, getBBox: function () {
                    return d.box
                }, gravity: function (e) {
                    return void 0 !== e ? (t.gravity = e, f.options({gravity: e}), this) : t.gravity
                }, theta: function (e) {
                    return void 0 !== e ? (t.theta = e, f.options({theta: e}), this) : t.theta
                }
            };
        return n(t, g), r(g), g
    };
    var uh = function (t, e) {
        if (!t) throw new Error("Graph structure cannot be undefined");
        var n = hh(e), r = function (e) {
            var n = t.getLinks(e);
            return n ? 1 + n.length / 3 : 1
        };
        e && "function" == typeof e.nodeMass && (r = e.nodeMass);
        var i = Object.create(null), a = {}, o = 0, s = n.settings.springTransform || fh;
        o = 0, t.forEachNode(function (t) {
            l(t.id), o += 1
        }), t.forEachLink(d), t.on("changed", u);
        var c = !1, h = {
            step: function () {
                if (0 === o) return !0;
                var t = n.step();
                h.lastMove = t, h.fire("step");
                var e = t / o, r = e <= .01;
                c !== r && (c = r, i = r, h.fire("stable", i));
                var i;
                return r
            }, getNodePosition: function (t) {
                return g(t).pos
            }, setNodePosition: function (t) {
                var e = g(t);
                e.setPosition.apply(e, Array.prototype.slice.call(arguments, 1))
            }, getLinkPosition: function (t) {
                var e = a[t];
                if (e) return {from: e.from.pos, to: e.to.pos}
            }, getGraphRect: function () {
                return n.getBBox()
            }, forEachBody: function (t) {
                Object.keys(i).forEach(function (e) {
                    t(i[e], e)
                })
            }, pinNode: function (t, e) {
                var n = g(t.id);
                n.isPinned = !!e
            }, isNodePinned: function (t) {
                return g(t.id).isPinned
            }, dispose: function () {
                t.off("changed", u), h.fire("disposed")
            }, getBody: function (t) {
                return i[t]
            }, getSpring: function (e, n) {
                var r;
                if (void 0 === n) r = "object" != typeof e ? e : e.id; else {
                    var i = t.hasLink(e, n);
                    if (!i) return;
                    r = i.id
                }
                return a[r]
            }, simulator: n, graph: t, lastMove: 0
        };
        return Ic(h), h;

        function u(e) {
            for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                "add" === r.changeType ? (r.node && l(r.node.id), r.link && d(r.link)) : "remove" === r.changeType && (r.node && f(r.node), r.link && p(r.link))
            }
            o = t.getNodesCount()
        }

        function l(e) {
            var r = i[e];
            if (!r) {
                var a = t.getNode(e);
                if (!a) throw new Error("initBody() was called with unknown node id");
                var o = a.position;
                if (!o) {
                    var s = function (t) {
                        var e = [];
                        if (!t.links) return e;
                        for (var n = Math.min(t.links.length, 2), r = 0; r < n; ++r) {
                            var a = t.links[r], o = a.fromId !== t.id ? i[a.fromId] : i[a.toId];
                            o && o.pos && e.push(o)
                        }
                        return e
                    }(a);
                    o = n.getBestNewBodyPosition(s)
                }
                (r = n.addBodyAt(o)).id = e, i[e] = r, m(e), (c = a) && (c.isPinned || c.data && c.data.isPinned) && (r.isPinned = !0)
            }
            var c
        }

        function f(t) {
            var e = t.id, r = i[e];
            r && (i[e] = null, delete i[e], n.removeBody(r))
        }

        function d(t) {
            m(t.fromId), m(t.toId);
            var e = i[t.fromId], r = i[t.toId], o = n.addSpring(e, r, t.length);
            s(t, o), a[t.id] = o
        }

        function p(e) {
            var r = a[e.id];
            if (r) {
                var i = t.getNode(e.fromId), o = t.getNode(e.toId);
                i && m(i.id), o && m(o.id), delete a[e.id], n.removeSpring(r)
            }
        }

        function m(t) {
            var e = i[t];
            if (e.mass = r(t), Number.isNaN(e.mass)) throw new Error("Node mass should be a number")
        }

        function g(t) {
            var e = i[t];
            return e || (l(t), e = i[t]), e
        }
    }, lh = hh;

    function fh() {
    }

    uh.simulator = lh;
    var dh = function (t, e, n, r, i) {
        this.from = t, this.to = e, this.length = n, this.coeff = r, this.weight = "number" == typeof i ? i : 1
    };
    var ph = function () {
        this.body = null, this.quad0 = null, this.quad1 = null, this.quad2 = null, this.quad3 = null, this.mass = 0, this.massX = 0, this.massY = 0, this.left = 0, this.top = 0, this.bottom = 0, this.right = 0
    }, mh = gh;

    function gh() {
        this.stack = [], this.popIdx = 0
    }

    gh.prototype = {
        isEmpty: function () {
            return 0 === this.popIdx
        }, push: function (t, e) {
            var n = this.stack[this.popIdx];
            n ? (n.node = t, n.body = e) : this.stack[this.popIdx] = new function (t, e) {
                this.node = t, this.body = e
            }(t, e), ++this.popIdx
        }, pop: function () {
            if (this.popIdx > 0) return this.stack[--this.popIdx]
        }, reset: function () {
            this.popIdx = 0
        }
    };
    var vh = function (t, e) {
        var n = Math.abs(t.x - e.x), r = Math.abs(t.y - e.y);
        return n < 1e-8 && r < 1e-8
    }, yh = function (t) {
        (t = t || {}).gravity = "number" == typeof t.gravity ? t.gravity : -1, t.theta = "number" == typeof t.theta ? t.theta : .8;
        var e = jc.random(1984), n = ph, r = mh, i = vh, a = t.gravity, o = [], s = new r, c = t.theta, h = [], u = 0,
            l = function () {
                var t = h[u];
                return t ? (t.quad0 = null, t.quad1 = null, t.quad2 = null, t.quad3 = null, t.body = null, t.mass = t.massX = t.massY = 0, t.left = t.right = t.top = t.bottom = 0) : (t = new n, h[u] = t), ++u, t
            }, f = l(), d = function (t) {
                for (s.reset(), s.push(f, t); !s.isEmpty();) {
                    var n = s.pop(), r = n.node, a = n.body;
                    if (r.body) {
                        var o = r.body;
                        if (r.body = null, i(o.pos, a.pos)) {
                            var c = 3;
                            do {
                                var h = e.nextDouble(), u = (r.right - r.left) * h, d = (r.bottom - r.top) * h;
                                o.pos.x = r.left + u, o.pos.y = r.top + d, c -= 1
                            } while (c > 0 && i(o.pos, a.pos));
                            if (0 === c && i(o.pos, a.pos)) return
                        }
                        s.push(r, o), s.push(r, a)
                    } else {
                        var p = a.pos.x, m = a.pos.y;
                        r.mass = r.mass + a.mass, r.massX = r.massX + a.mass * p, r.massY = r.massY + a.mass * m;
                        var g = 0, v = r.left, y = (r.right + v) / 2, b = r.top, x = (r.bottom + b) / 2;
                        if (p > y) {
                            g += 1;
                            var w = v;
                            v = y, y += y - w
                        }
                        if (m > x) {
                            g += 2;
                            var _ = b;
                            b = x, x += x - _
                        }
                        var M = bh(r, g);
                        M ? s.push(M, a) : ((M = l()).left = v, M.top = b, M.right = y, M.bottom = x, M.body = a, xh(r, g, M))
                    }
                }
            };
        return {
            insertBodies: function (t) {
                var e, n = Number.MAX_VALUE, r = Number.MAX_VALUE, i = Number.MIN_VALUE, a = Number.MIN_VALUE,
                    o = t.length;
                for (e = o; e--;) {
                    var s = t[e].pos.x, c = t[e].pos.y;
                    s < n && (n = s), s > i && (i = s), c < r && (r = c), c > a && (a = c)
                }
                var h = i - n, p = a - r;
                for (h > p ? a = r + h : i = n + p, u = 0, (f = l()).left = n, f.right = i, f.top = r, f.bottom = a, (e = o - 1) > 0 && (f.body = t[e]); e--;) d(t[e])
            }, updateBodyForce: function (t) {
                var n, r, i, s, h = o, u = 0, l = 0, d = 1, p = 0, m = 1;
                for (h[0] = f; d;) {
                    var g = h[p], v = g.body;
                    d -= 1, p += 1;
                    var y = v !== t;
                    v && y ? (r = v.pos.x - t.pos.x, i = v.pos.y - t.pos.y, 0 === (s = Math.sqrt(r * r + i * i)) && (r = (e.nextDouble() - .5) / 50, i = (e.nextDouble() - .5) / 50, s = Math.sqrt(r * r + i * i)), u += (n = a * v.mass * t.mass / (s * s * s)) * r, l += n * i) : y && (r = g.massX / g.mass - t.pos.x, i = g.massY / g.mass - t.pos.y, 0 === (s = Math.sqrt(r * r + i * i)) && (r = (e.nextDouble() - .5) / 50, i = (e.nextDouble() - .5) / 50, s = Math.sqrt(r * r + i * i)), (g.right - g.left) / s < c ? (u += (n = a * g.mass * t.mass / (s * s * s)) * r, l += n * i) : (g.quad0 && (h[m] = g.quad0, d += 1, m += 1), g.quad1 && (h[m] = g.quad1, d += 1, m += 1), g.quad2 && (h[m] = g.quad2, d += 1, m += 1), g.quad3 && (h[m] = g.quad3, d += 1, m += 1)))
                }
                t.force.x += u, t.force.y += l
            }, options: function (t) {
                return t ? ("number" == typeof t.gravity && (a = t.gravity), "number" == typeof t.theta && (c = t.theta), this) : {
                    gravity: a,
                    theta: c
                }
            }
        }
    };

    function bh(t, e) {
        return 0 === e ? t.quad0 : 1 === e ? t.quad1 : 2 === e ? t.quad2 : 3 === e ? t.quad3 : null
    }

    function xh(t, e, n) {
        0 === e ? t.quad0 = n : 1 === e ? t.quad1 = n : 2 === e ? t.quad2 = n : 3 === e && (t.quad3 = n)
    }

    var wh = function (t, e) {
        var n = jc.random(42), r = {x1: 0, y1: 0, x2: 0, y2: 0};
        return {
            box: r, update: function () {
                var e = t.length;
                if (0 === e) return;
                var n = Number.MAX_VALUE, i = Number.MAX_VALUE, a = Number.MIN_VALUE, o = Number.MIN_VALUE;
                for (; e--;) {
                    var s = t[e];
                    s.isPinned ? (s.pos.x = s.prevPos.x, s.pos.y = s.prevPos.y) : (s.prevPos.x = s.pos.x, s.prevPos.y = s.pos.y), s.pos.x < n && (n = s.pos.x), s.pos.x > a && (a = s.pos.x), s.pos.y < i && (i = s.pos.y), s.pos.y > o && (o = s.pos.y)
                }
                r.x1 = n, r.x2 = a, r.y1 = i, r.y2 = o
            }, reset: function () {
                r.x1 = r.y1 = 0, r.x2 = r.y2 = 0
            }, getBestNewPosition: function (t) {
                var i = r, a = 0, o = 0;
                if (t.length) {
                    for (var s = 0; s < t.length; ++s) a += t[s].pos.x, o += t[s].pos.y;
                    a /= t.length, o /= t.length
                } else a = (i.x1 + i.x2) / 2, o = (i.y1 + i.y2) / 2;
                var c = e.springLength;
                return {x: a + n.next(c) - c / 2, y: o + n.next(c) - c / 2}
            }
        }
    }, _h = function (t) {
        var e = {
            update: function (e) {
                e.force.x -= t.dragCoeff * e.velocity.x, e.force.y -= t.dragCoeff * e.velocity.y
            }
        };
        return Gc(t = Vc(t, {dragCoeff: .02}), e, ["dragCoeff"]), e
    }, Mh = function (t) {
        var e = Vc, n = jc.random(42), r = {
            update: function (e) {
                var r = e.from, i = e.to, a = e.length < 0 ? t.springLength : e.length, o = i.pos.x - r.pos.x,
                    s = i.pos.y - r.pos.y, c = Math.sqrt(o * o + s * s);
                0 === c && (o = (n.nextDouble() - .5) / 50, s = (n.nextDouble() - .5) / 50, c = Math.sqrt(o * o + s * s));
                var h = c - a, u = (!e.coeff || e.coeff < 0 ? t.springCoeff : e.coeff) * h / c * e.weight;
                r.force.x += u * o, r.force.y += u * s, i.force.x -= u * o, i.force.y -= u * s
            }
        };
        return Gc(t = e(t, {springCoeff: 2e-4, springLength: 80}), r, ["springCoeff", "springLength"]), r
    }, Eh = function (t, e) {
        var n, r = 0, i = 0, a = 0, o = 0, s = t.length;
        if (0 === s) return 0;
        for (n = 0; n < s; ++n) {
            var c = t[n], h = e / c.mass;
            c.velocity.x += h * c.force.x, c.velocity.y += h * c.force.y;
            var u = c.velocity.x, l = c.velocity.y, f = Math.sqrt(u * u + l * l);
            f > 1 && (c.velocity.x = u / f, c.velocity.y = l / f), r = e * c.velocity.x, a = e * c.velocity.y, c.pos.x += r, c.pos.y += a, i += Math.abs(r), o += Math.abs(a)
        }
        return (i * i + o * o) / s
    };
    var Th = function (t) {
        return new rh.Body(t)
    }, Sh = function (t) {
        var e = dh, n = Gc, r = Ic, i = (t = Vc(t, {
                springLength: 30,
                springCoeff: 8e-4,
                gravity: -1.2,
                theta: .8,
                dragCoeff: .02,
                timeStep: 20,
                stableThreshold: .009
            })).createQuadTree || yh, a = t.createBounds || wh, o = t.createDragForce || _h, s = t.createSpringForce || Mh,
            c = t.integrator || Eh, h = t.createBody || Th, u = [], l = [], f = i(t), d = a(u, t), p = s(t), m = o(t),
            g = 0, v = !1, y = {
                bodies: u, springs: l, settings: t, step: function () {
                    !function () {
                        var t, e = u.length;
                        if (e) for (f.insertBodies(u); e--;) (t = u[e]).isPinned || (t.force.reset(), f.updateBodyForce(t), m.update(t));
                        e = l.length;
                        for (; e--;) p.update(l[e])
                    }(), g = c(u, t.timeStep), d.update();
                    var e = g < t.stableThreshold;
                    return v !== e && y.fire("stable", e), v = e, e
                }, addBody: function (t) {
                    if (!t) throw new Error("Body is required");
                    return u.push(t), t
                }, addBodyAt: function (t) {
                    if (!t) throw new Error("Body position is required");
                    var e = h(t);
                    return u.push(e), e
                }, removeBody: function (t) {
                    if (t) {
                        var e = u.indexOf(t);
                        if (!(e < 0)) return u.splice(e, 1), 0 === u.length && d.reset(), !0
                    }
                }, addSpring: function (t, n, r, i, a) {
                    if (!t || !n) throw new Error("Cannot add null spring to force simulator");
                    "number" != typeof r && (r = -1);
                    var o = new e(t, n, r, a >= 0 ? a : -1, i);
                    return l.push(o), o
                }, getTotalMovement: function () {
                    return g
                }, removeSpring: function (t) {
                    if (t) {
                        var e = l.indexOf(t);
                        return e > -1 ? (l.splice(e, 1), !0) : void 0
                    }
                }, getBestNewBodyPosition: function (t) {
                    return d.getBestNewPosition(t)
                }, getBBox: function () {
                    return d.box
                }, gravity: function (e) {
                    return void 0 !== e ? (t.gravity = e, f.options({gravity: e}), this) : t.gravity
                }, theta: function (e) {
                    return void 0 !== e ? (t.theta = e, f.options({theta: e}), this) : t.theta
                }
            };
        return n(t, y), r(y), y
    };
    var Ah = function (t, e) {
        if (!t) throw new Error("Graph structure cannot be undefined");
        var n = Sh(e), r = "function" == typeof Object.create ? Object.create(null) : {}, i = {},
            a = n.settings.springTransform || Rh;
        t.forEachNode(function (t) {
            h(t.id)
        }), t.forEachLink(l), t.on("changed", c), n.on("stable", s);
        var o = {
            step: function () {
                return n.step()
            }, getNodePosition: function (t) {
                return p(t).pos
            }, setNodePosition: function (t) {
                var e = p(t);
                e.setPosition.apply(e, Array.prototype.slice.call(arguments, 1))
            }, getLinkPosition: function (t) {
                var e = i[t];
                if (e) return {from: e.from.pos, to: e.to.pos}
            }, getGraphRect: function () {
                return n.getBBox()
            }, pinNode: function (t, e) {
                var n = p(t.id);
                n.isPinned = !!e
            }, isNodePinned: function (t) {
                return p(t.id).isPinned
            }, dispose: function () {
                t.off("changed", c), n.off("stable", s)
            }, getBody: function (t) {
                return r[t]
            }, getSpring: function (e, n) {
                var r;
                if (void 0 === n) r = "object" != typeof e ? e : e.id; else {
                    var a = t.hasLink(e, n);
                    if (!a) return;
                    r = a.id
                }
                return i[r]
            }, simulator: n
        };
        return Ic(o), o;

        function s(t) {
            o.fire("stable", t)
        }

        function c(t) {
            for (var e = 0; e < t.length; ++e) {
                var n = t[e];
                "add" === n.changeType ? (n.node && h(n.node.id), n.link && l(n.link)) : "remove" === n.changeType && (n.node && u(n.node), n.link && f(n.link))
            }
        }

        function h(e) {
            var i = r[e];
            if (!i) {
                var a = t.getNode(e);
                if (!a) throw new Error("initBody() was called with unknown node id");
                var o = a.position;
                if (!o) {
                    var s = function (t) {
                        var e = [];
                        if (!t.links) return e;
                        for (var n = Math.min(t.links.length, 2), i = 0; i < n; ++i) {
                            var a = t.links[i], o = a.fromId !== t.id ? r[a.fromId] : r[a.toId];
                            o && o.pos && e.push(o)
                        }
                        return e
                    }(a);
                    o = n.getBestNewBodyPosition(s)
                }
                i = n.addBodyAt(o), r[e] = i, d(e), (c = a) && (c.isPinned || c.data && c.data.isPinned) && (i.isPinned = !0)
            }
            var c
        }

        function u(t) {
            var e = t.id, i = r[e];
            i && (r[e] = null, delete r[e], n.removeBody(i))
        }

        function l(t) {
            d(t.fromId), d(t.toId);
            var e = r[t.fromId], o = r[t.toId], s = n.addSpring(e, o, t.length);
            a(t, s), i[t.id] = s
        }

        function f(e) {
            var r = i[e.id];
            if (r) {
                var a = t.getNode(e.fromId), o = t.getNode(e.toId);
                a && d(a.id), o && d(o.id), delete i[e.id], n.removeSpring(r)
            }
        }

        function d(e) {
            var n = r[e];
            n.mass = function (e) {
                var n = t.getLinks(e);
                return n ? 1 + n.length / 3 : 1
            }(e)
        }

        function p(t) {
            var e = r[t];
            return e || (h(t), e = r[t]), e
        }
    }, Lh = Sh;

    function Rh() {
    }

    Ah.simulator = Lh;
    var Ph = function () {
        this.body = null, this.quad0 = null, this.quad1 = null, this.quad2 = null, this.quad3 = null, this.quad4 = null, this.quad5 = null, this.quad6 = null, this.quad7 = null, this.mass = 0, this.massX = 0, this.massY = 0, this.massZ = 0, this.left = 0, this.top = 0, this.bottom = 0, this.right = 0, this.front = 0, this.back = 0
    }, Ch = Nh;

    function Nh() {
        this.stack = [], this.popIdx = 0
    }

    Nh.prototype = {
        isEmpty: function () {
            return 0 === this.popIdx
        }, push: function (t, e) {
            var n = this.stack[this.popIdx];
            n ? (n.node = t, n.body = e) : this.stack[this.popIdx] = new function (t, e) {
                this.node = t, this.body = e
            }(t, e), ++this.popIdx
        }, pop: function () {
            if (this.popIdx > 0) return this.stack[--this.popIdx]
        }, reset: function () {
            this.popIdx = 0
        }
    };
    var Oh = function (t, e) {
        var n = Math.abs(t.x - e.x), r = Math.abs(t.y - e.y), i = Math.abs(t.z - e.z);
        return n < 1e-8 && r < 1e-8 && i < 1e-8
    }, Ih = function (t) {
        (t = t || {}).gravity = "number" == typeof t.gravity ? t.gravity : -1, t.theta = "number" == typeof t.theta ? t.theta : .8;
        var e = jc.random(1984), n = Ph, r = Ch, i = Oh, a = t.gravity, o = [], s = new r, c = t.theta, h = [], u = 0,
            l = function () {
                var t = h[u];
                return t ? (t.quad0 = null, t.quad4 = null, t.quad1 = null, t.quad5 = null, t.quad2 = null, t.quad6 = null, t.quad3 = null, t.quad7 = null, t.body = null, t.mass = t.massX = t.massY = t.massZ = 0, t.left = t.right = t.top = t.bottom = t.front = t.back = 0) : (t = new n, h[u] = t), ++u, t
            }, f = l(), d = function (t) {
                for (s.reset(), s.push(f, t); !s.isEmpty();) {
                    var n = s.pop(), r = n.node, a = n.body;
                    if (r.body) {
                        var o = r.body;
                        if (r.body = null, i(o.pos, a.pos)) {
                            var c = 3;
                            do {
                                var h = e.nextDouble(), u = (r.right - r.left) * h, d = (r.bottom - r.top) * h,
                                    p = (r.front - r.back) * h;
                                o.pos.x = r.left + u, o.pos.y = r.top + d, o.pos.z = r.back + p, c -= 1
                            } while (c > 0 && i(o.pos, a.pos));
                            if (0 === c && i(o.pos, a.pos)) return
                        }
                        s.push(r, o), s.push(r, a)
                    } else {
                        var m = a.pos.x, g = a.pos.y, v = a.pos.z;
                        r.mass += a.mass, r.massX += a.mass * m, r.massY += a.mass * g, r.massZ += a.mass * v;
                        var y = 0, b = r.left, x = (r.right + b) / 2, w = r.top, _ = (r.bottom + w) / 2, M = r.back,
                            E = (r.front + M) / 2;
                        if (m > x) {
                            y += 1;
                            var T = b;
                            b = x, x += x - T
                        }
                        if (g > _) {
                            y += 2;
                            var S = w;
                            w = _, _ += _ - S
                        }
                        if (v > E) {
                            y += 4;
                            var A = M;
                            E = (M = E) + (M - A)
                        }
                        var L = Dh(r, y);
                        L ? s.push(L, a) : ((L = l()).left = b, L.top = w, L.right = x, L.bottom = _, L.back = M, L.front = E, L.body = a, Uh(r, y, L))
                    }
                }
            };
        return {
            insertBodies: function (t) {
                var e, n = Number.MAX_VALUE, r = Number.MAX_VALUE, i = Number.MAX_VALUE, a = Number.MIN_VALUE,
                    o = Number.MIN_VALUE, s = Number.MIN_VALUE, c = t.length;
                for (e = c; e--;) {
                    var h = t[e].pos, p = h.x, m = h.y, g = h.z;
                    p < n && (n = p), p > a && (a = p), m < r && (r = m), m > o && (o = m), g < i && (i = g), g > s && (s = g)
                }
                var v = Math.max(a - n, Math.max(o - r, s - i));
                for (a = n + v, o = r + v, s = i + v, u = 0, (f = l()).left = n, f.right = a, f.top = r, f.bottom = o, f.back = i, f.front = s, (e = c - 1) > 0 && (f.body = t[e]); e--;) d(t[e])
            }, updateBodyForce: function (t) {
                var n, r, i, s, h, u = o, l = 0, d = 0, p = 0, m = 1, g = 0, v = 1;
                for (u[0] = f; m;) {
                    var y = u[g], b = y.body;
                    m -= 1, g += 1;
                    var x = b !== t;
                    b && x ? (r = b.pos.x - t.pos.x, i = b.pos.y - t.pos.y, s = b.pos.z - t.pos.z, 0 === (h = Math.sqrt(r * r + i * i + s * s)) && (r = (e.nextDouble() - .5) / 50, i = (e.nextDouble() - .5) / 50, s = (e.nextDouble() - .5) / 50, h = Math.sqrt(r * r + i * i + s * s)), l += (n = a * b.mass * t.mass / (h * h * h)) * r, d += n * i, p += n * s) : x && (r = y.massX / y.mass - t.pos.x, i = y.massY / y.mass - t.pos.y, s = y.massZ / y.mass - t.pos.z, 0 === (h = Math.sqrt(r * r + i * i + s * s)) && (r = (e.nextDouble() - .5) / 50, i = (e.nextDouble() - .5) / 50, s = (e.nextDouble() - .5) / 50, h = Math.sqrt(r * r + i * i + s * s)), (y.right - y.left) / h < c ? (l += (n = a * y.mass * t.mass / (h * h * h)) * r, d += n * i, p += n * s) : (y.quad0 && (u[v] = y.quad0, m += 1, v += 1), y.quad1 && (u[v] = y.quad1, m += 1, v += 1), y.quad2 && (u[v] = y.quad2, m += 1, v += 1), y.quad3 && (u[v] = y.quad3, m += 1, v += 1), y.quad4 && (u[v] = y.quad4, m += 1, v += 1), y.quad5 && (u[v] = y.quad5, m += 1, v += 1), y.quad6 && (u[v] = y.quad6, m += 1, v += 1), y.quad7 && (u[v] = y.quad7, m += 1, v += 1)))
                }
                t.force.x += l, t.force.y += d, t.force.z += p
            }, options: function (t) {
                return t ? ("number" == typeof t.gravity && (a = t.gravity), "number" == typeof t.theta && (c = t.theta), this) : {
                    gravity: a,
                    theta: c
                }
            }
        }
    };

    function Dh(t, e) {
        return 0 === e ? t.quad0 : 1 === e ? t.quad1 : 2 === e ? t.quad2 : 3 === e ? t.quad3 : 4 === e ? t.quad4 : 5 === e ? t.quad5 : 6 === e ? t.quad6 : 7 === e ? t.quad7 : null
    }

    function Uh(t, e, n) {
        0 === e ? t.quad0 = n : 1 === e ? t.quad1 = n : 2 === e ? t.quad2 = n : 3 === e ? t.quad3 = n : 4 === e ? t.quad4 = n : 5 === e ? t.quad5 = n : 6 === e ? t.quad6 = n : 7 === e && (t.quad7 = n)
    }

    var zh = function (t, e) {
        var n = jc.random(42), r = {x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0};
        return {
            box: r, update: function () {
                var e = t.length;
                if (0 === e) return;
                var n = Number.MAX_VALUE, i = Number.MAX_VALUE, a = Number.MAX_VALUE, o = Number.MIN_VALUE,
                    s = Number.MIN_VALUE, c = Number.MIN_VALUE;
                for (; e--;) {
                    var h = t[e];
                    h.isPinned ? (h.pos.x = h.prevPos.x, h.pos.y = h.prevPos.y, h.pos.z = h.prevPos.z) : (h.prevPos.x = h.pos.x, h.prevPos.y = h.pos.y, h.prevPos.z = h.pos.z), h.pos.x < n && (n = h.pos.x), h.pos.x > o && (o = h.pos.x), h.pos.y < i && (i = h.pos.y), h.pos.y > s && (s = h.pos.y), h.pos.z < a && (a = h.pos.z), h.pos.z > c && (c = h.pos.z)
                }
                r.x1 = n, r.x2 = o, r.y1 = i, r.y2 = s, r.z1 = a, r.z2 = c
            }, reset: function () {
                r.x1 = r.y1 = 0, r.x2 = r.y2 = 0, r.z1 = r.z2 = 0
            }, getBestNewPosition: function (t) {
                var i = r, a = 0, o = 0, s = 0;
                if (t.length) {
                    for (var c = 0; c < t.length; ++c) a += t[c].pos.x, o += t[c].pos.y, s += t[c].pos.z;
                    a /= t.length, o /= t.length, s /= t.length
                } else a = (i.x1 + i.x2) / 2, o = (i.y1 + i.y2) / 2, s = (i.z1 + i.z2) / 2;
                var h = e.springLength;
                return {x: a + n.next(h) - h / 2, y: o + n.next(h) - h / 2, z: s + n.next(h) - h / 2}
            }
        }
    }, Bh = function (t) {
        var e = {
            update: function (e) {
                e.force.x -= t.dragCoeff * e.velocity.x, e.force.y -= t.dragCoeff * e.velocity.y, e.force.z -= t.dragCoeff * e.velocity.z
            }
        };
        return Gc(t = Vc(t, {dragCoeff: .02}), e, ["dragCoeff"]), e
    }, Fh = function (t) {
        var e = Vc, n = jc.random(42), r = {
            update: function (e) {
                var r = e.from, i = e.to, a = e.length < 0 ? t.springLength : e.length, o = i.pos.x - r.pos.x,
                    s = i.pos.y - r.pos.y, c = i.pos.z - r.pos.z, h = Math.sqrt(o * o + s * s + c * c);
                0 === h && (o = (n.nextDouble() - .5) / 50, s = (n.nextDouble() - .5) / 50, c = (n.nextDouble() - .5) / 50, h = Math.sqrt(o * o + s * s + c * c));
                var u = h - a, l = (!e.coeff || e.coeff < 0 ? t.springCoeff : e.coeff) * u / h * e.weight;
                r.force.x += l * o, r.force.y += l * s, r.force.z += l * c, i.force.x -= l * o, i.force.y -= l * s, i.force.z -= l * c
            }
        };
        return Gc(t = e(t, {springCoeff: 2e-4, springLength: 80}), r, ["springCoeff", "springLength"]), r
    }, kh = function (t) {
        return new rh.Body3d(t)
    }, Gh = function (t, e) {
        var n, r = 0, i = 0, a = 0, o = t.length;
        for (n = 0; n < o; ++n) {
            var s = t[n], c = e * e / s.mass;
            s.pos.x = 2 * s.pos.x - s.prevPos.x + s.force.x * c, s.pos.y = 2 * s.pos.y - s.prevPos.y + s.force.y * c, s.pos.z = 2 * s.pos.z - s.prevPos.z + s.force.z * c, r += Math.abs(s.pos.x - s.prevPos.x), i += Math.abs(s.pos.y - s.prevPos.y), a += Math.abs(s.pos.z - s.prevPos.z)
        }
        return (r * r + i * i + a * a) / t.length
    };
    var Hh = function (t, e) {
        var n, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, h = t.length;
        for (n = 0; n < h; ++n) {
            var u = t[n], l = e / u.mass;
            u.velocity.x += l * u.force.x, u.velocity.y += l * u.force.y, u.velocity.z += l * u.force.z;
            var f = u.velocity.x, d = u.velocity.y, p = u.velocity.z, m = Math.sqrt(f * f + d * d + p * p);
            m > 1 && (u.velocity.x = f / m, u.velocity.y = d / m, u.velocity.z = p / m), r = e * u.velocity.x, a = e * u.velocity.y, s = e * u.velocity.z, u.pos.x += r, u.pos.y += a, u.pos.z += s, i += Math.abs(r), o += Math.abs(a), c += Math.abs(s)
        }
        return (i * i + o * o + c * c) / t.length
    };
    var Vh = jh;
    jh.get2dLayout = Ah;

    function jh(t, e) {
        return e = Vc(e, {
            createQuadTree: Ih,
            createBounds: zh,
            createDragForce: Bh,
            createSpringForce: Fh,
            integrator: function (t) {
                if (t && "verlet" === t.integrator) return Gh;
                return Hh
            }(e),
            createBody: kh
        }), jh.get2dLayout(t, e)
    }

    var Wh = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function qh(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function Xh(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    var Yh = Xh(function (t, e) {
        "undefined" != typeof self && self, t.exports = function (t) {
            var e = {};

            function n(r) {
                if (e[r]) return e[r].exports;
                var i = e[r] = {i: r, l: !1, exports: {}};
                return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            return n.m = t, n.c = e, n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: r})
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 0)
        }([function (t, e, n) {
            var r, i, a;
            o = function (t, e, n) {
                Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
                    var e = t.stateInit, n = void 0 === e ? function () {
                            return {}
                        } : e, r = t.props, o = void 0 === r ? {} : r, s = t.methods, c = void 0 === s ? {} : s, h = t.init,
                        u = void 0 === h ? function () {
                        } : h, l = t.update, f = void 0 === l ? function () {
                        } : l, d = Object.keys(o).map(function (t) {
                            return new a(t, o[t])
                        });
                    return function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = Object.assign({}, n instanceof Function ? n() : n, {initialised: !1});

                        function r(e) {
                            return a(e, t), o(), r
                        }

                        var a = function (t, n) {
                            u.call(r, t, e, n), e.initialised = !0
                        }, o = (0, i.default)(function () {
                            e.initialised && f.call(r, e)
                        }, 1);
                        return d.forEach(function (t) {
                            r[t.name] = function (t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (t, e) {
                                    };
                                return function (a) {
                                    return arguments.length ? (e[t] = a, i.call(r, a, e), n && o(), r) : e[t]
                                }
                            }(t.name, t.triggerUpdate, t.onChange)
                        }), Object.keys(c).forEach(function (t) {
                            r[t] = function () {
                                for (var n, i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                return (n = c[t]).call.apply(n, [r, e].concat(a))
                            }
                        }), r.resetProps = function () {
                            return d.forEach(function (t) {
                                r[t.name](t.defaultVal)
                            }), r
                        }, r.resetProps(), e._rerender = o, r
                    }
                };
                var r, i = (r = n, r && r.__esModule ? r : {default: r}), a = function t(e, n) {
                    var r = n.default, i = void 0 === r ? null : r, a = n.triggerUpdate, o = void 0 === a || a,
                        s = n.onChange, c = void 0 === s ? function (t, e) {
                        } : s;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.name = e, this.defaultVal = i, this.triggerUpdate = o, this.onChange = c
                };
                t.exports = e.default
            }, i = [t, e, n(1)], void 0 === (a = "function" == typeof(r = o) ? r.apply(e, i) : r) || (t.exports = a);
            var o
        }, function (t, e) {
            t.exports = function (t, e, n) {
                var r, i, a, o, s;
                null == e && (e = 100);

                function c() {
                    var h = Date.now() - o;
                    h < e && h >= 0 ? r = setTimeout(c, e - h) : (r = null, n || (s = t.apply(a, i), a = i = null))
                }

                var h = function () {
                    a = this, i = arguments, o = Date.now();
                    var h = n && !r;
                    return r || (r = setTimeout(c, e)), h && (s = t.apply(a, i), a = i = null), s
                };
                return h.clear = function () {
                    r && (clearTimeout(r), r = null)
                }, h.flush = function () {
                    r && (s = t.apply(a, i), a = i = null, clearTimeout(r), r = null)
                }, h
            }
        }])
    }), Zh = qh(Yh), Jh = (Yh.Kapsule, Xh(function (t) {
        e = Wh, n = function () {
            var t;

            function e(t) {
                return "function" == typeof t
            }

            function n(t) {
                "undefined" != typeof setImmediate ? setImmediate(t) : "undefined" != typeof process && process.nextTick ? process.nextTick(t) : setTimeout(t, 0)
            }

            return function r(i) {
                var a, o = [], s = [], c = function (t, e) {
                    return null == a && null != t && (a = t, o = e, s.length && n(function () {
                        for (var t = 0; t < s.length; t++) s[t]()
                    })), a
                };
                return c.then = function (c, h) {
                    var u = r(i), l = function () {
                        try {
                            var n = a ? c : h;
                            if (e(n)) {
                                !function n(r) {
                                    var i, a = 0;
                                    try {
                                        if (r && (o = r, "object" == typeof o || e(r)) && e(i = r.then)) {
                                            if (r === u) throw new TypeError;
                                            i.call(r, function () {
                                                a++ || n.apply(t, arguments)
                                            }, function (t) {
                                                a++ || u(!1, [t])
                                            })
                                        } else u(!0, arguments)
                                    } catch (t) {
                                        a++ || u(!1, [t])
                                    }
                                    var o
                                }(n.apply(t, o || []))
                            } else u(a, o)
                        } catch (t) {
                            u(!1, [t])
                        }
                    };
                    return null != a ? n(l) : s.push(l), u
                }, i && (c = i(c)), c
            }
        }, t.exports ? t.exports = n() : e.pinkySwear = n();
        var e, n
    })), Qh = Xh(function (t) {
        t.exports = function (t) {
            var e = function (t, e, n) {
                n = "function" == typeof n ? n() : null === n ? "" : void 0 === n ? "" : n, t[t.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n)
            }, n = function (t, r, i) {
                var a, o, s;
                if ("[object Array]" === Object.prototype.toString.call(r)) for (a = 0, o = r.length; a < o; a++) n(t + "[" + ("object" == typeof r[a] ? a : "") + "]", r[a], i); else if (r && "[object Object]" === r.toString()) for (s in r) r.hasOwnProperty(s) && n(t ? t + "[" + s + "]" : s, r[s], i, e); else if (t) e(i, t, r); else for (s in r) e(i, s, r[s]);
                return i
            };
            return n("", t, []).join("&").replace(/%20/g, "+")
        }
    }), Kh = function () {
        var t = "undefined" != typeof window ? window : self, e = Jh, n = Qh, r = {}, i = "json", a = "post", o = null,
            s = 0, c = [], h = t.XMLHttpRequest ? function () {
                return new t.XMLHttpRequest
            } : function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }, u = "" === h().responseType, l = function (l) {
                var f = [], d = 0, p = [];
                return e(function (m) {
                    var g = -1, v = function (l) {
                        return function (v, y, b, x) {
                            var w = ++g;
                            return ++d, f.push(function (l, f, d, p, m) {
                                l = l.toUpperCase(), d = void 0 === d ? null : d, p = p || {};
                                for (var g in r) if (!(g in p)) if ("object" == typeof r[g] && "object" == typeof p[g]) for (var v in r[g]) p[g][v] = r[g][v]; else p[g] = r[g];
                                var y, b, x, w, _, M = !1, E = !1, T = !1, S = 0, A = {}, L = {
                                    text: "*/*",
                                    xml: "text/xml",
                                    json: "application/json",
                                    post: "application/x-www-form-urlencoded",
                                    document: "text/html"
                                }, R = {
                                    text: "*/*",
                                    xml: "application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1",
                                    json: "application/json; q=1.0, text/*; q=0.8, */*; q=0.1"
                                }, P = !1, C = e(function (e) {
                                    return e.abort = function () {
                                        T || (b && 4 != b.readyState && b.abort(), P && (--s, P = !1), T = !0)
                                    }, e.send = function () {
                                        if (!P) if (s != o) if (T) c.length && c.shift().send(); else {
                                            if (++s, P = !0, b = h(), y && ("withCredentials" in b || !t.XDomainRequest || (b = new XDomainRequest, E = !0, "GET" != l && "POST" != l && (l = "POST"))), E ? b.open(l, f) : (b.open(l, f, p.async, p.user, p.password), u && p.async && (b.withCredentials = p.withCredentials)), !E) for (var n in A) A[n] && b.setRequestHeader(n, A[n]);
                                            if (u && "auto" != p.responseType) try {
                                                b.responseType = p.responseType, M = b.responseType == p.responseType
                                            } catch (t) {
                                            }
                                            u || E ? (b.onload = N, b.onerror = O, E && (b.onprogress = function () {
                                            })) : b.onreadystatechange = function () {
                                                4 == b.readyState && N()
                                            }, p.async ? "timeout" in b ? (b.timeout = p.timeout, b.ontimeout = I) : x = setTimeout(I, p.timeout) : E && (b.ontimeout = function () {
                                            }), "auto" != p.responseType && "overrideMimeType" in b && b.overrideMimeType(L[p.responseType]), m && m(b), E ? setTimeout(function () {
                                                b.send("GET" != l ? d : null)
                                            }, 0) : b.send("GET" != l ? d : null)
                                        } else c.push(e)
                                    }, e
                                }), N = function () {
                                    var e;
                                    if (P = !1, clearTimeout(x), c.length && c.shift().send(), !T) {
                                        --s;
                                        try {
                                            if (M) {
                                                if ("response" in b && null === b.response) throw"The request response is empty";
                                                _ = b.response
                                            } else {
                                                if ("auto" == (e = p.responseType)) if (E) e = i; else {
                                                    var n = b.getResponseHeader("Content-Type") || "";
                                                    e = n.indexOf(L.json) > -1 ? "json" : n.indexOf(L.xml) > -1 ? "xml" : "text"
                                                }
                                                switch (e) {
                                                    case"json":
                                                        if (b.responseText.length) try {
                                                            _ = "JSON" in t ? JSON.parse(b.responseText) : new Function("return (" + b.responseText + ")")()
                                                        } catch (t) {
                                                            throw"Error while parsing JSON body : " + t
                                                        }
                                                        break;
                                                    case"xml":
                                                        try {
                                                            t.DOMParser ? _ = (new DOMParser).parseFromString(b.responseText, "text/xml") : ((_ = new ActiveXObject("Microsoft.XMLDOM")).async = "false", _.loadXML(b.responseText))
                                                        } catch (t) {
                                                            _ = void 0
                                                        }
                                                        if (!_ || !_.documentElement || _.getElementsByTagName("parsererror").length) throw"Invalid XML";
                                                        break;
                                                    default:
                                                        _ = b.responseText
                                                }
                                            }
                                            if ("status" in b && !/^2|1223/.test(b.status)) throw b.status + " (" + b.statusText + ")";
                                            C(!0, [b, _])
                                        } catch (t) {
                                            C(!1, [t, b, _])
                                        }
                                    }
                                }, O = function (t) {
                                    T || (t = "string" == typeof t ? t : "Connection aborted", C.abort(), C(!1, [new Error(t), b, null]))
                                }, I = function () {
                                    T || (p.attempts && ++S == p.attempts ? O("Timeout (" + f + ")") : (b.abort(), P = !1, C.send()))
                                };
                                if (p.async = !("async" in p && !p.async), p.cache = "cache" in p && !!p.cache, p.dataType = "dataType" in p ? p.dataType.toLowerCase() : a, p.responseType = "responseType" in p ? p.responseType.toLowerCase() : "auto", p.user = p.user || "", p.password = p.password || "", p.withCredentials = !!p.withCredentials, p.timeout = "timeout" in p ? parseInt(p.timeout, 10) : 3e4, p.attempts = "attempts" in p ? parseInt(p.attempts, 10) : 1, w = f.match(/\/\/(.+?)\//), y = w && !!w[1] && w[1] != location.host, "ArrayBuffer" in t && d instanceof ArrayBuffer ? p.dataType = "arraybuffer" : "Blob" in t && d instanceof Blob ? p.dataType = "blob" : "Document" in t && d instanceof Document ? p.dataType = "document" : "FormData" in t && d instanceof FormData && (p.dataType = "formdata"), null !== d) switch (p.dataType) {
                                    case"json":
                                        d = JSON.stringify(d);
                                        break;
                                    case"post":
                                    case"queryString":
                                        d = n(d)
                                }
                                if (p.headers) {
                                    var D = function (t, e, n) {
                                        return e + n.toUpperCase()
                                    };
                                    for (w in p.headers) A[w.replace(/(^|-)([^-])/g, D)] = p.headers[w]
                                }
                                return "Content-Type" in A || "GET" == l || p.dataType in L && L[p.dataType] && (A["Content-Type"] = L[p.dataType]), A.Accept || (A.Accept = p.responseType in R ? R[p.responseType] : "*/*"), y || "X-Requested-With" in A || (A["X-Requested-With"] = "XMLHttpRequest"), p.cache || "Cache-Control" in A || (A["Cache-Control"] = "no-cache"), "GET" != l && "queryString" != p.dataType || !d || "string" != typeof d || (f += (/\?/.test(f) ? "&" : "?") + d), p.async && C.send(), C
                            }(l, m.base + v, y, b, x).then(function (t, e) {
                                p[w] = arguments, --d || m(!0, 1 == p.length ? p[0] : [p])
                            }, function () {
                                m(!1, arguments)
                            })), m
                        }
                    };
                    m.get = v("GET"), m.post = v("POST"), m.put = v("PUT"), m.delete = v("DELETE"), m.catch = function (t) {
                        return m.then(null, t)
                    }, m.complete = function (t) {
                        var e = function () {
                            t()
                        };
                        return m.then(e, e)
                    }, m.map = function (t, e, n, r, i) {
                        return v(t.toUpperCase()).call(this, e, n, r, i)
                    };
                    for (var y in l) y in m || (m[y] = l[y]);
                    return m.send = function () {
                        for (var t = 0, e = f.length; t < e; ++t) f[t].send();
                        return m
                    }, m.abort = function () {
                        for (var t = 0, e = f.length; t < e; ++t) f[t].abort();
                        return m
                    }, m
                })
            }, f = {
                base: "", get: function () {
                    return l(f).get.apply(this, arguments)
                }, post: function () {
                    return l(f).post.apply(this, arguments)
                }, put: function () {
                    return l(f).put.apply(this, arguments)
                }, delete: function () {
                    return l(f).delete.apply(this, arguments)
                }, map: function () {
                    return l(f).map.apply(this, arguments)
                }, xhr2: u, limit: function (t) {
                    return o = t, f
                }, setDefaultOptions: function (t) {
                    return r = t, f
                }, setDefaultXdrResponseType: function (t) {
                    return i = t.toLowerCase(), f
                }, setDefaultDataType: function (t) {
                    return a = t.toLowerCase(), f
                }, getOpenRequests: function () {
                    return s
                }
            };
        return f
    }(), $h = Xh(function (t, e) {
        t.exports = function (t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {i: r, l: !1, exports: {}};
                return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
            }

            var n = {};
            return e.m = t, e.c = n, e.d = function (t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
            }, e.n = function (t) {
                var n = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return e.d(n, "a", n), n
            }, e.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, e.p = "", e(e.s = 0)
        }([function (t, e, n) {
            var r, i, a;
            i = [t, e], void 0 !== (a = "function" == typeof(r = function (t, e) {
                Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
                    return t instanceof Function ? t : "string" == typeof t ? function (e) {
                        return e[t]
                    } : function (e) {
                        return t
                    }
                }, t.exports = e.default
            }) ? r.apply(e, i) : r) && (t.exports = a)
        }])
    }), tu = qh($h);
    $h.accessorFn;

    function eu(t) {
        for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e;) n[r] = "#" + t.slice(6 * r, 6 * ++r);
        return n
    }

    eu("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), eu("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
    var nu = eu("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
    eu("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), eu("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), eu("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), eu("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), eu("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

    function ru(t, e, n) {
        t.prototype = e.prototype = n, n.constructor = t
    }

    function iu(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n
    }

    function au() {
    }

    var ou = "\\s*([+-]?\\d+)\\s*", su = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        cu = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hu = /^#([0-9a-f]{3})$/, uu = /^#([0-9a-f]{6})$/,
        lu = new RegExp("^rgb\\(" + [ou, ou, ou] + "\\)$"), fu = new RegExp("^rgb\\(" + [cu, cu, cu] + "\\)$"),
        du = new RegExp("^rgba\\(" + [ou, ou, ou, su] + "\\)$"),
        pu = new RegExp("^rgba\\(" + [cu, cu, cu, su] + "\\)$"), mu = new RegExp("^hsl\\(" + [su, cu, cu] + "\\)$"),
        gu = new RegExp("^hsla\\(" + [su, cu, cu, su] + "\\)$"), vu = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
    ru(au, yu, {
        displayable: function () {
            return this.rgb().displayable()
        }, toString: function () {
            return this.rgb() + ""
        }
    });

    function yu(t) {
        var e;
        return t = (t + "").trim().toLowerCase(), (e = hu.exec(t)) ? new Mu((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = uu.exec(t)) ? bu(parseInt(e[1], 16)) : (e = lu.exec(t)) ? new Mu(e[1], e[2], e[3], 1) : (e = fu.exec(t)) ? new Mu(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = du.exec(t)) ? xu(e[1], e[2], e[3], e[4]) : (e = pu.exec(t)) ? xu(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = mu.exec(t)) ? Eu(e[1], e[2] / 100, e[3] / 100, 1) : (e = gu.exec(t)) ? Eu(e[1], e[2] / 100, e[3] / 100, e[4]) : vu.hasOwnProperty(t) ? bu(vu[t]) : "transparent" === t ? new Mu(NaN, NaN, NaN, 0) : null
    }

    function bu(t) {
        return new Mu(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function xu(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new Mu(t, e, n, r)
    }

    function wu(t) {
        return t instanceof au || (t = yu(t)), t ? new Mu((t = t.rgb()).r, t.g, t.b, t.opacity) : new Mu
    }

    function _u(t, e, n, r) {
        return 1 === arguments.length ? wu(t) : new Mu(t, e, n, null == r ? 1 : r)
    }

    function Mu(t, e, n, r) {
        this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
    }

    ru(Mu, _u, iu(au, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Mu(this.r * t, this.g * t, this.b * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Mu(this.r * t, this.g * t, this.b * t, this.opacity)
        }, rgb: function () {
            return this
        }, displayable: function () {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        }, toString: function () {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    }));

    function Eu(t, e, n, r) {
        return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Tu(t, e, n, r)
    }

    function Tu(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
    }

    ru(Tu, function (t, e, n, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Tu) return new Tu(t.h, t.s, t.l, t.opacity);
            if (t instanceof au || (t = yu(t)), !t) return new Tu;
            if (t instanceof Tu) return t;
            var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r),
                o = NaN, s = a - i, c = (a + i) / 2;
            return s ? (o = e === a ? (n - r) / s + 6 * (n < r) : n === a ? (r - e) / s + 2 : (e - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Tu(o, s, c, t.opacity)
        }(t) : new Tu(t, e, n, null == r ? 1 : r)
    }, iu(au, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Tu(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Tu(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l,
                r = n + (n < .5 ? n : 1 - n) * e, i = 2 * n - r;
            return new Mu(Su(t >= 240 ? t - 240 : t + 120, i, r), Su(t, i, r), Su(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        }, displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));

    function Su(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
    }

    var Au = Math.PI / 180, Lu = 180 / Math.PI, Ru = .95047, Pu = 1, Cu = 1.08883, Nu = 4 / 29, Ou = 6 / 29,
        Iu = 3 * Ou * Ou, Du = Ou * Ou * Ou;

    function Uu(t) {
        if (t instanceof zu) return new zu(t.l, t.a, t.b, t.opacity);
        if (t instanceof Hu) {
            var e = t.h * Au;
            return new zu(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
        }
        t instanceof Mu || (t = wu(t));
        var n = Gu(t.r), r = Gu(t.g), i = Gu(t.b), a = Bu((.4124564 * n + .3575761 * r + .1804375 * i) / Ru),
            o = Bu((.2126729 * n + .7151522 * r + .072175 * i) / Pu);
        return new zu(116 * o - 16, 500 * (a - o), 200 * (o - Bu((.0193339 * n + .119192 * r + .9503041 * i) / Cu)), t.opacity)
    }

    function zu(t, e, n, r) {
        this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
    }

    ru(zu, function (t, e, n, r) {
        return 1 === arguments.length ? Uu(t) : new zu(t, e, n, null == r ? 1 : r)
    }, iu(au, {
        brighter: function (t) {
            return new zu(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, darker: function (t) {
            return new zu(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, rgb: function () {
            var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500,
                n = isNaN(this.b) ? t : t - this.b / 200;
            return t = Pu * Fu(t), new Mu(ku(3.2404542 * (e = Ru * Fu(e)) - 1.5371385 * t - .4985314 * (n = Cu * Fu(n))), ku(-.969266 * e + 1.8760108 * t + .041556 * n), ku(.0556434 * e - .2040259 * t + 1.0572252 * n), this.opacity)
        }
    }));

    function Bu(t) {
        return t > Du ? Math.pow(t, 1 / 3) : t / Iu + Nu
    }

    function Fu(t) {
        return t > Ou ? t * t * t : Iu * (t - Nu)
    }

    function ku(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function Gu(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function Hu(t, e, n, r) {
        this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
    }

    ru(Hu, function (t, e, n, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Hu) return new Hu(t.h, t.c, t.l, t.opacity);
            t instanceof zu || (t = Uu(t));
            var e = Math.atan2(t.b, t.a) * Lu;
            return new Hu(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }(t) : new Hu(t, e, n, null == r ? 1 : r)
    }, iu(au, {
        brighter: function (t) {
            return new Hu(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        }, darker: function (t) {
            return new Hu(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        }, rgb: function () {
            return Uu(this).rgb()
        }
    }));
    var Vu = -.29227, ju = -.90649, Wu = 1.97294, qu = Wu * ju, Xu = 1.78277 * Wu, Yu = 1.78277 * Vu - -.14861 * ju;

    function Zu(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
    }

    ru(Zu, function (t, e, n, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Zu) return new Zu(t.h, t.s, t.l, t.opacity);
            t instanceof Mu || (t = wu(t));
            var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = (Yu * r + qu * e - Xu * n) / (Yu + qu - Xu), a = r - i,
                o = (Wu * (n - i) - Vu * a) / ju, s = Math.sqrt(o * o + a * a) / (Wu * i * (1 - i)),
                c = s ? Math.atan2(o, a) * Lu - 120 : NaN;
            return new Zu(c < 0 ? c + 360 : c, s, i, t.opacity)
        }(t) : new Zu(t, e, n, null == r ? 1 : r)
    }, iu(au, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Zu(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Zu(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Au, e = +this.l, n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                r = Math.cos(t), i = Math.sin(t);
            return new Mu(255 * (e + n * (-.14861 * r + 1.78277 * i)), 255 * (e + n * (Vu * r + ju * i)), 255 * (e + n * (Wu * r)), this.opacity)
        }
    }));
    var Ju, Qu = (Ju = function (t) {
        var e = t.length - 1;
        return function (n) {
            var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), i = t[r], a = t[r + 1],
                o = r > 0 ? t[r - 1] : 2 * i - a, s = r < e - 1 ? t[r + 2] : 2 * a - i;
            return function (t, e, n, r, i) {
                var a = t * t, o = a * t;
                return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6
            }((n - r / e) * e, o, i, a, s)
        }
    }, function (t) {
        var e, n, r = t.length, i = new Array(r), a = new Array(r), o = new Array(r);
        for (e = 0; e < r; ++e) n = _u(t[e]), i[e] = n.r || 0, a[e] = n.g || 0, o[e] = n.b || 0;
        return i = Ju(i), a = Ju(a), o = Ju(o), n.opacity = 1, function (t) {
            return n.r = i(t), n.g = a(t), n.b = o(t), n + ""
        }
    });
    Math.PI, Math.SQRT2;

    function Ku(t) {
        return Qu(t[t.length - 1])
    }

    Ku(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(eu));
    Ku(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(eu));
    Ku(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(eu));
    Ku(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(eu));
    Ku(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(eu));
    Ku(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(eu));
    Ku(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(eu));
    Ku(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(eu));
    Ku(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(eu));
    Ku(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(eu));
    Ku(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(eu));
    Ku(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(eu));
    Ku(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(eu));
    Ku(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(eu));
    Ku(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(eu));
    Ku(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(eu));
    Ku(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(eu));
    Ku(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(eu));
    Ku(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(eu));
    Ku(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(eu));
    Ku(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(eu));
    Ku(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(eu));
    Ku(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(eu));
    Ku(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(eu));
    Ku(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(eu));
    Ku(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(eu));
    Ku(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(eu));
    var $u = Xh(function (t) {
        !function (e) {
            var n = /^\s+/, r = /\s+$/, i = 0, a = e.round, o = e.min, s = e.max, c = e.random;

            function h(t, c) {
                if (t = t || "", c = c || {}, t instanceof h) return t;
                if (!(this instanceof h)) return new h(t, c);
                var u = function (t) {
                    var i = {r: 0, g: 0, b: 0}, a = 1, c = null, h = null, u = null, l = !1, f = !1;
                    "string" == typeof t && (t = function (t) {
                        t = t.replace(n, "").replace(r, "").toLowerCase();
                        var e = !1;
                        if (A[t]) t = A[t], e = !0; else if ("transparent" == t) return {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0,
                            format: "name"
                        };
                        var i;
                        if (i = z.rgb.exec(t)) return {r: i[1], g: i[2], b: i[3]};
                        if (i = z.rgba.exec(t)) return {r: i[1], g: i[2], b: i[3], a: i[4]};
                        if (i = z.hsl.exec(t)) return {h: i[1], s: i[2], l: i[3]};
                        if (i = z.hsla.exec(t)) return {h: i[1], s: i[2], l: i[3], a: i[4]};
                        if (i = z.hsv.exec(t)) return {h: i[1], s: i[2], v: i[3]};
                        if (i = z.hsva.exec(t)) return {h: i[1], s: i[2], v: i[3], a: i[4]};
                        if (i = z.hex8.exec(t)) return {
                            r: N(i[1]),
                            g: N(i[2]),
                            b: N(i[3]),
                            a: U(i[4]),
                            format: e ? "name" : "hex8"
                        };
                        if (i = z.hex6.exec(t)) return {r: N(i[1]), g: N(i[2]), b: N(i[3]), format: e ? "name" : "hex"};
                        if (i = z.hex4.exec(t)) return {
                            r: N(i[1] + "" + i[1]),
                            g: N(i[2] + "" + i[2]),
                            b: N(i[3] + "" + i[3]),
                            a: U(i[4] + "" + i[4]),
                            format: e ? "name" : "hex8"
                        };
                        if (i = z.hex3.exec(t)) return {
                            r: N(i[1] + "" + i[1]),
                            g: N(i[2] + "" + i[2]),
                            b: N(i[3] + "" + i[3]),
                            format: e ? "name" : "hex"
                        };
                        return !1
                    }(t));
                    "object" == typeof t && (B(t.r) && B(t.g) && B(t.b) ? (d = t.r, p = t.g, m = t.b, i = {
                        r: 255 * P(d, 255),
                        g: 255 * P(p, 255),
                        b: 255 * P(m, 255)
                    }, l = !0, f = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : B(t.h) && B(t.s) && B(t.v) ? (c = I(t.s), h = I(t.v), i = function (t, n, r) {
                        t = 6 * P(t, 360), n = P(n, 100), r = P(r, 100);
                        var i = e.floor(t), a = t - i, o = r * (1 - n), s = r * (1 - a * n), c = r * (1 - (1 - a) * n),
                            h = i % 6;
                        return {
                            r: 255 * [r, s, o, o, c, r][h],
                            g: 255 * [c, r, r, s, o, o][h],
                            b: 255 * [o, o, c, r, r, s][h]
                        }
                    }(t.h, c, h), l = !0, f = "hsv") : B(t.h) && B(t.s) && B(t.l) && (c = I(t.s), u = I(t.l), i = function (t, e, n) {
                        var r, i, a;
                        t = P(t, 360), e = P(e, 100), n = P(n, 100);

                        function o(t, e, n) {
                            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                        }

                        if (0 === e) r = i = a = n; else {
                            var s = n < .5 ? n * (1 + e) : n + e - n * e, c = 2 * n - s;
                            r = o(c, s, t + 1 / 3), i = o(c, s, t), a = o(c, s, t - 1 / 3)
                        }
                        return {r: 255 * r, g: 255 * i, b: 255 * a}
                    }(t.h, c, u), l = !0, f = "hsl"), t.hasOwnProperty("a") && (a = t.a));
                    var d, p, m;
                    return a = R(a), {
                        ok: l,
                        format: t.format || f,
                        r: o(255, s(i.r, 0)),
                        g: o(255, s(i.g, 0)),
                        b: o(255, s(i.b, 0)),
                        a: a
                    }
                }(t);
                this._originalInput = t, this._r = u.r, this._g = u.g, this._b = u.b, this._a = u.a, this._roundA = a(100 * this._a) / 100, this._format = c.format || u.format, this._gradientType = c.gradientType, this._r < 1 && (this._r = a(this._r)), this._g < 1 && (this._g = a(this._g)), this._b < 1 && (this._b = a(this._b)), this._ok = u.ok, this._tc_id = i++
            }

            h.prototype = {
                isDark: function () {
                    return this.getBrightness() < 128
                }, isLight: function () {
                    return !this.isDark()
                }, isValid: function () {
                    return this._ok
                }, getOriginalInput: function () {
                    return this._originalInput
                }, getFormat: function () {
                    return this._format
                }, getAlpha: function () {
                    return this._a
                }, getBrightness: function () {
                    var t = this.toRgb();
                    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
                }, getLuminance: function () {
                    var t, n, r, i = this.toRgb();
                    return t = i.r / 255, n = i.g / 255, r = i.b / 255, .2126 * (t <= .03928 ? t / 12.92 : e.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : e.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : e.pow((r + .055) / 1.055, 2.4))
                }, setAlpha: function (t) {
                    return this._a = R(t), this._roundA = a(100 * this._a) / 100, this
                }, toHsv: function () {
                    var t = l(this._r, this._g, this._b);
                    return {h: 360 * t.h, s: t.s, v: t.v, a: this._a}
                }, toHsvString: function () {
                    var t = l(this._r, this._g, this._b), e = a(360 * t.h), n = a(100 * t.s), r = a(100 * t.v);
                    return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + r + "%)" : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                }, toHsl: function () {
                    var t = u(this._r, this._g, this._b);
                    return {h: 360 * t.h, s: t.s, l: t.l, a: this._a}
                }, toHslString: function () {
                    var t = u(this._r, this._g, this._b), e = a(360 * t.h), n = a(100 * t.s), r = a(100 * t.l);
                    return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + r + "%)" : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                }, toHex: function (t) {
                    return f(this._r, this._g, this._b, t)
                }, toHexString: function (t) {
                    return "#" + this.toHex(t)
                }, toHex8: function (t) {
                    return function (t, e, n, r, i) {
                        var o = [O(a(t).toString(16)), O(a(e).toString(16)), O(a(n).toString(16)), O(D(r))];
                        if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
                        return o.join("")
                    }(this._r, this._g, this._b, this._a, t)
                }, toHex8String: function (t) {
                    return "#" + this.toHex8(t)
                }, toRgb: function () {
                    return {r: a(this._r), g: a(this._g), b: a(this._b), a: this._a}
                }, toRgbString: function () {
                    return 1 == this._a ? "rgb(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ")" : "rgba(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ", " + this._roundA + ")"
                }, toPercentageRgb: function () {
                    return {
                        r: a(100 * P(this._r, 255)) + "%",
                        g: a(100 * P(this._g, 255)) + "%",
                        b: a(100 * P(this._b, 255)) + "%",
                        a: this._a
                    }
                }, toPercentageRgbString: function () {
                    return 1 == this._a ? "rgb(" + a(100 * P(this._r, 255)) + "%, " + a(100 * P(this._g, 255)) + "%, " + a(100 * P(this._b, 255)) + "%)" : "rgba(" + a(100 * P(this._r, 255)) + "%, " + a(100 * P(this._g, 255)) + "%, " + a(100 * P(this._b, 255)) + "%, " + this._roundA + ")"
                }, toName: function () {
                    return 0 === this._a ? "transparent" : !(this._a < 1) && (L[f(this._r, this._g, this._b, !0)] || !1)
                }, toFilter: function (t) {
                    var e = "#" + d(this._r, this._g, this._b, this._a), n = e,
                        r = this._gradientType ? "GradientType = 1, " : "";
                    if (t) {
                        var i = h(t);
                        n = "#" + d(i._r, i._g, i._b, i._a)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + n + ")"
                }, toString: function (t) {
                    var e = !!t;
                    t = t || this._format;
                    var n = !1, r = this._a < 1 && this._a >= 0;
                    return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()), "prgb" === t && (n = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (n = this.toHexString()), "hex3" === t && (n = this.toHexString(!0)), "hex4" === t && (n = this.toHex8String(!0)), "hex8" === t && (n = this.toHex8String()), "name" === t && (n = this.toName()), "hsl" === t && (n = this.toHslString()), "hsv" === t && (n = this.toHsvString()), n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
                }, clone: function () {
                    return h(this.toString())
                }, _applyModification: function (t, e) {
                    var n = t.apply(null, [this].concat([].slice.call(e)));
                    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
                }, lighten: function () {
                    return this._applyModification(v, arguments)
                }, brighten: function () {
                    return this._applyModification(y, arguments)
                }, darken: function () {
                    return this._applyModification(b, arguments)
                }, desaturate: function () {
                    return this._applyModification(p, arguments)
                }, saturate: function () {
                    return this._applyModification(m, arguments)
                }, greyscale: function () {
                    return this._applyModification(g, arguments)
                }, spin: function () {
                    return this._applyModification(x, arguments)
                }, _applyCombination: function (t, e) {
                    return t.apply(null, [this].concat([].slice.call(e)))
                }, analogous: function () {
                    return this._applyCombination(T, arguments)
                }, complement: function () {
                    return this._applyCombination(w, arguments)
                }, monochromatic: function () {
                    return this._applyCombination(S, arguments)
                }, splitcomplement: function () {
                    return this._applyCombination(E, arguments)
                }, triad: function () {
                    return this._applyCombination(_, arguments)
                }, tetrad: function () {
                    return this._applyCombination(M, arguments)
                }
            }, h.fromRatio = function (t, e) {
                if ("object" == typeof t) {
                    var n = {};
                    for (var r in t) t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : I(t[r]));
                    t = n
                }
                return h(t, e)
            };

            function u(t, e, n) {
                t = P(t, 255), e = P(e, 255), n = P(n, 255);
                var r, i, a = s(t, e, n), c = o(t, e, n), h = (a + c) / 2;
                if (a == c) r = i = 0; else {
                    var u = a - c;
                    switch (i = h > .5 ? u / (2 - a - c) : u / (a + c), a) {
                        case t:
                            r = (e - n) / u + (e < n ? 6 : 0);
                            break;
                        case e:
                            r = (n - t) / u + 2;
                            break;
                        case n:
                            r = (t - e) / u + 4
                    }
                    r /= 6
                }
                return {h: r, s: i, l: h}
            }

            function l(t, e, n) {
                t = P(t, 255), e = P(e, 255), n = P(n, 255);
                var r, i, a = s(t, e, n), c = o(t, e, n), h = a, u = a - c;
                if (i = 0 === a ? 0 : u / a, a == c) r = 0; else {
                    switch (a) {
                        case t:
                            r = (e - n) / u + (e < n ? 6 : 0);
                            break;
                        case e:
                            r = (n - t) / u + 2;
                            break;
                        case n:
                            r = (t - e) / u + 4
                    }
                    r /= 6
                }
                return {h: r, s: i, v: h}
            }

            function f(t, e, n, r) {
                var i = [O(a(t).toString(16)), O(a(e).toString(16)), O(a(n).toString(16))];
                return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
            }

            function d(t, e, n, r) {
                return [O(D(r)), O(a(t).toString(16)), O(a(e).toString(16)), O(a(n).toString(16))].join("")
            }

            h.equals = function (t, e) {
                return !(!t || !e) && h(t).toRgbString() == h(e).toRgbString()
            }, h.random = function () {
                return h.fromRatio({r: c(), g: c(), b: c()})
            };

            function p(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = h(t).toHsl();
                return n.s -= e / 100, n.s = C(n.s), h(n)
            }

            function m(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = h(t).toHsl();
                return n.s += e / 100, n.s = C(n.s), h(n)
            }

            function g(t) {
                return h(t).desaturate(100)
            }

            function v(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = h(t).toHsl();
                return n.l += e / 100, n.l = C(n.l), h(n)
            }

            function y(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = h(t).toRgb();
                return n.r = s(0, o(255, n.r - a(-e / 100 * 255))), n.g = s(0, o(255, n.g - a(-e / 100 * 255))), n.b = s(0, o(255, n.b - a(-e / 100 * 255))), h(n)
            }

            function b(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = h(t).toHsl();
                return n.l -= e / 100, n.l = C(n.l), h(n)
            }

            function x(t, e) {
                var n = h(t).toHsl(), r = (n.h + e) % 360;
                return n.h = r < 0 ? 360 + r : r, h(n)
            }

            function w(t) {
                var e = h(t).toHsl();
                return e.h = (e.h + 180) % 360, h(e)
            }

            function _(t) {
                var e = h(t).toHsl(), n = e.h;
                return [h(t), h({h: (n + 120) % 360, s: e.s, l: e.l}), h({h: (n + 240) % 360, s: e.s, l: e.l})]
            }

            function M(t) {
                var e = h(t).toHsl(), n = e.h;
                return [h(t), h({h: (n + 90) % 360, s: e.s, l: e.l}), h({
                    h: (n + 180) % 360,
                    s: e.s,
                    l: e.l
                }), h({h: (n + 270) % 360, s: e.s, l: e.l})]
            }

            function E(t) {
                var e = h(t).toHsl(), n = e.h;
                return [h(t), h({h: (n + 72) % 360, s: e.s, l: e.l}), h({h: (n + 216) % 360, s: e.s, l: e.l})]
            }

            function T(t, e, n) {
                e = e || 6, n = n || 30;
                var r = h(t).toHsl(), i = 360 / n, a = [h(t)];
                for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e;) r.h = (r.h + i) % 360, a.push(h(r));
                return a
            }

            function S(t, e) {
                e = e || 6;
                for (var n = h(t).toHsv(), r = n.h, i = n.s, a = n.v, o = [], s = 1 / e; e--;) o.push(h({
                    h: r,
                    s: i,
                    v: a
                })), a = (a + s) % 1;
                return o
            }

            h.mix = function (t, e, n) {
                n = 0 === n ? 0 : n || 50;
                var r = h(t).toRgb(), i = h(e).toRgb(), a = n / 100;
                return h({
                    r: (i.r - r.r) * a + r.r,
                    g: (i.g - r.g) * a + r.g,
                    b: (i.b - r.b) * a + r.b,
                    a: (i.a - r.a) * a + r.a
                })
            },
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
                h.readability = function (t, n) {
                    var r = h(t), i = h(n);
                    return (e.max(r.getLuminance(), i.getLuminance()) + .05) / (e.min(r.getLuminance(), i.getLuminance()) + .05)
                }, h.isReadable = function (t, e, n) {
                var r, i, a = h.readability(t, e);
                switch (i = !1, (r = function (t) {
                    var e, n;
                    e = ((t = t || {
                        level: "AA",
                        size: "small"
                    }).level || "AA").toUpperCase(), n = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA");
                    "small" !== n && "large" !== n && (n = "small");
                    return {level: e, size: n}
                }(n)).level + r.size) {
                    case"AAsmall":
                    case"AAAlarge":
                        i = a >= 4.5;
                        break;
                    case"AAlarge":
                        i = a >= 3;
                        break;
                    case"AAAsmall":
                        i = a >= 7
                }
                return i
            }, h.mostReadable = function (t, e, n) {
                var r, i, a, o, s = null, c = 0;
                i = (n = n || {}).includeFallbackColors, a = n.level, o = n.size;
                for (var u = 0; u < e.length; u++) (r = h.readability(t, e[u])) > c && (c = r, s = h(e[u]));
                return h.isReadable(t, s, {
                    level: a,
                    size: o
                }) || !i ? s : (n.includeFallbackColors = !1, h.mostReadable(t, ["#fff", "#000"], n))
            };
            var A = h.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            }, L = h.hexNames = function (t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
                return e
            }(A);

            function R(t) {
                return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
            }

            function P(t, n) {
                "string" == typeof(r = t) && -1 != r.indexOf(".") && 1 === parseFloat(r) && (t = "100%");
                var r, i, a = (i = t, "string" == typeof i && -1 != i.indexOf("%"));
                return t = o(n, s(0, parseFloat(t))), a && (t = parseInt(t * n, 10) / 100), e.abs(t - n) < 1e-6 ? 1 : t % n / parseFloat(n)
            }

            function C(t) {
                return o(1, s(0, t))
            }

            function N(t) {
                return parseInt(t, 16)
            }

            function O(t) {
                return 1 == t.length ? "0" + t : "" + t
            }

            function I(t) {
                return t <= 1 && (t = 100 * t + "%"), t
            }

            function D(t) {
                return e.round(255 * parseFloat(t)).toString(16)
            }

            function U(t) {
                return N(t) / 255
            }

            var z = function () {
                var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                    e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
                    n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
                return {
                    CSS_UNIT: new RegExp(t),
                    rgb: new RegExp("rgb" + e),
                    rgba: new RegExp("rgba" + n),
                    hsl: new RegExp("hsl" + e),
                    hsla: new RegExp("hsla" + n),
                    hsv: new RegExp("hsv" + e),
                    hsva: new RegExp("hsva" + n),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                }
            }();

            function B(t) {
                return !!z.CSS_UNIT.exec(t)
            }

            t.exports ? t.exports = h : window.tinycolor = h
        }(Math)
    }), tl = function (t) {
        return isNaN(t) ? parseInt($u(t).toHex(), 16) : t
    };
    var el = window.THREE ? window.THREE : {
        SphereGeometry: Oi,
        BufferGeometry: jn,
        BufferAttribute: Cn,
        Mesh: tr,
        MeshLambertMaterial: ra,
        Line: Or,
        LineBasicMaterial: Nr
    }, nl = {graph: Dc, forcelayout: uh, forcelayout3d: Vh}, rl = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }, il = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }, al = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }, ol = function (t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    };
    var sl = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = function (r) {
                il(i, e);

                function i() {
                    var e;
                    rl(this, i);
                    for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    var s = al(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [this].concat(a)));
                    return s.__kapsuleInstance = t().apply(void 0, [].concat(ol(n ? [s] : []), a)), s
                }

                return i
            }();
        return Object.keys(t()).forEach(function (t) {
            return r.prototype[t] = function () {
                var e, n = (e = this.__kapsuleInstance)[t].apply(e, arguments);
                return n === this.__kapsuleInstance ? this : n
            }
        }), r
    }(Zh({
        props: {
            jsonUrl: {},
            graphData: {
                default: {nodes: [], links: []}, onChange: function (t, e) {
                    e.onFrame = null
                }
            },
            numDimensions: {
                default: 3, onChange: function (t, e) {
                    t < 3 && n(e.graphData.nodes, "z"), t < 2 && n(e.graphData.nodes, "y");

                    function n(t, e) {
                        t.forEach(function (t) {
                            delete t[e], delete t["v" + e]
                        })
                    }
                }
            },
            nodeRelSize: {default: 4},
            autoColorBy: {},
            nodeId: {default: "id"},
            nodeVal: {default: "val"},
            nodeResolution: {default: 8},
            nodeColor: {default: "color"},
            nodeThreeObject: {},
            linkSource: {default: "source"},
            linkTarget: {default: "target"},
            linkColor: {default: "color"},
            linkOpacity: {default: .2},
            forceEngine: {default: "d3"},
            d3AlphaDecay: {default: .0228},
            d3VelocityDecay: {default: .4},
            warmupTicks: {default: 0},
            cooldownTicks: {default: 1 / 0},
            cooldownTime: {default: 15e3},
            onLoading: {
                default: function () {
                }, triggerUpdate: !1
            },
            onFinishLoading: {
                default: function () {
                }, triggerUpdate: !1
            }
        }, methods: {
            d3Force: function (t, e, n) {
                return void 0 === n ? t.d3ForceLayout.force(e) : (t.d3ForceLayout.force(e, n), this)
            }, tickFrame: function (t) {
                return t.onFrame && t.onFrame(), this
            }
        }, stateInit: function () {
            return {
                d3ForceLayout: function (t, e) {
                    e = e || 2;
                    var n, r = Math.min(Ac, Math.max(1, Math.round(e))), i = 1, a = .001, o = 1 - Math.pow(a, 1 / 300),
                        s = 0, c = .6, h = $s(), u = Mc(f), l = ac("tick", "end");
                    null == t && (t = []);

                    function f() {
                        d(), l.call("tick", n), i < a && (u.stop(), l.call("end", n))
                    }

                    function d() {
                        var e, n, a = t.length;
                        for (i += (s - i) * o, h.each(function (t) {
                            t(i)
                        }), e = 0; e < a; ++e) null == (n = t[e]).fx ? n.x += n.vx *= c : (n.x = n.fx, n.vx = 0), r > 1 && (null == n.fy ? n.y += n.vy *= c : (n.y = n.fy, n.vy = 0)), r > 2 && (null == n.fz ? n.z += n.vz *= c : (n.z = n.fz, n.vz = 0))
                    }

                    function p() {
                        for (var e, n = 0, i = t.length; n < i; ++n) {
                            if ((e = t[n]).index = n, isNaN(e.x) || r > 1 && isNaN(e.y) || r > 2 && isNaN(e.z)) {
                                var a = Cc * (r > 2 ? Math.cbrt(n) : r > 1 ? Math.sqrt(n) : n), o = n * Nc, s = n * Oc;
                                e.x = a * (r > 1 ? Math.cos(o) : 1), r > 1 && (e.y = a * Math.sin(o)), r > 2 && (e.z = a * Math.sin(s))
                            }
                            (isNaN(e.vx) || r > 1 && isNaN(e.vy) || r > 2 && isNaN(e.vz)) && (e.vx = 0, r > 1 && (e.vy = 0), r > 2 && (e.vz = 0))
                        }
                    }

                    function m(e) {
                        return e.initialize && e.initialize(t, r), e
                    }

                    return p(), n = {
                        tick: d, restart: function () {
                            return u.restart(f), n
                        }, stop: function () {
                            return u.stop(), n
                        }, numDimensions: function (t) {
                            return arguments.length ? (r = Math.min(Ac, Math.max(1, Math.round(t))), h.each(m), n) : r
                        }, nodes: function (e) {
                            return arguments.length ? (t = e, p(), h.each(m), n) : t
                        }, alpha: function (t) {
                            return arguments.length ? (i = +t, n) : i
                        }, alphaMin: function (t) {
                            return arguments.length ? (a = +t, n) : a
                        }, alphaDecay: function (t) {
                            return arguments.length ? (o = +t, n) : +o
                        }, alphaTarget: function (t) {
                            return arguments.length ? (s = +t, n) : s
                        }, velocityDecay: function (t) {
                            return arguments.length ? (c = 1 - t, n) : 1 - c
                        }, force: function (t, e) {
                            return arguments.length > 1 ? (null == e ? h.remove(t) : h.set(t, m(e)), n) : h.get(t)
                        }, find: function () {
                            var e, n, i, a, o, s, c = Array.prototype.slice.call(arguments), h = c.shift() || 0,
                                u = (r > 1 ? c.shift() : null) || 0, l = (r > 2 ? c.shift() : null) || 0,
                                f = c.shift() || 1 / 0, d = 0, p = t.length;
                            for (f *= f, d = 0; d < p; ++d) (a = (e = h - (o = t[d]).x) * e + (n = u - (o.y || 0)) * n + (i = l - (o.z || 0)) * i) < f && (s = o, f = a);
                            return s
                        }, on: function (t, e) {
                            return arguments.length > 1 ? (l.on(t, e), n) : l.on(t)
                        }
                    }
                }().force("link", function (t) {
                    var e, n, r, i, a, o, s = nc, c = function (t) {
                        return 1 / Math.min(a[t.source.index], a[t.target.index])
                    }, h = Ss(30), u = 1;
                    null == t && (t = []);

                    function l(r) {
                        for (var a = 0, s = t.length; a < u; ++a) for (var c, h, l, f, d, p = 0, m = 0, g = 0, v = 0; p < s; ++p) h = (c = t[p]).source, m = (l = c.target).x + l.vx - h.x - h.vx || As(), i > 1 && (g = l.y + l.vy - h.y - h.vy || As()), i > 2 && (v = l.z + l.vz - h.z - h.vz || As()), m *= f = ((f = Math.sqrt(m * m + g * g + v * v)) - n[p]) / f * r * e[p], g *= f, v *= f, l.vx -= m * (d = o[p]), i > 1 && (l.vy -= g * d), i > 2 && (l.vz -= v * d), h.vx += m * (d = 1 - d), i > 1 && (h.vy += g * d), i > 2 && (h.vz += v * d)
                    }

                    function f() {
                        if (r) {
                            var i, c, h = r.length, u = t.length, l = $s(r, s);
                            for (i = 0, a = new Array(h); i < u; ++i) (c = t[i]).index = i, "object" != typeof c.source && (c.source = rc(l, c.source)), "object" != typeof c.target && (c.target = rc(l, c.target)), a[c.source.index] = (a[c.source.index] || 0) + 1, a[c.target.index] = (a[c.target.index] || 0) + 1;
                            for (i = 0, o = new Array(u); i < u; ++i) c = t[i], o[i] = a[c.source.index] / (a[c.source.index] + a[c.target.index]);
                            e = new Array(u), d(), n = new Array(u), p()
                        }
                    }

                    function d() {
                        if (r) for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t)
                    }

                    function p() {
                        if (r) for (var e = 0, i = t.length; e < i; ++e) n[e] = +h(t[e], e, t)
                    }

                    return l.initialize = function (t, e) {
                        r = t, i = e, f()
                    }, l.links = function (e) {
                        return arguments.length ? (t = e, f(), l) : t
                    }, l.id = function (t) {
                        return arguments.length ? (s = t, l) : s
                    }, l.iterations = function (t) {
                        return arguments.length ? (u = +t, l) : u
                    }, l.strength = function (t) {
                        return arguments.length ? (c = "function" == typeof t ? t : Ss(+t), d(), l) : c
                    }, l.distance = function (t) {
                        return arguments.length ? (h = "function" == typeof t ? t : Ss(+t), p(), l) : h
                    }, l
                }()).force("charge", function () {
                    var t, e, n, r, i, a = Ss(-30), o = 1, s = 1 / 0, c = .81;

                    function h(i) {
                        var a, o = t.length,
                            s = (1 === e ? Cs(t, Lc) : 2 === e ? Fs(t, Lc, Rc) : 3 === e ? Ys(t, Lc, Rc, Pc) : null).visitAfter(l);
                        for (r = i, a = 0; a < o; ++a) n = t[a], s.visit(f)
                    }

                    function u() {
                        if (t) {
                            var e, n, r = t.length;
                            for (i = new Array(r), e = 0; e < r; ++e) n = t[e], i[n.index] = +a(n, e, t)
                        }
                    }

                    function l(t) {
                        var n, r, a, o, s, c, h = 0;
                        if (t.length) {
                            for (a = o = s = c = 0; c < 4; ++c) (n = t[c]) && (r = n.value) && (h += r, a += r * (n.x || 0), o += r * (n.y || 0), s += r * (n.z || 0));
                            t.x = a / h, e > 1 && (t.y = o / h), e > 2 && (t.z = s / h)
                        } else {
                            (n = t).x = n.data.x, e > 1 && (n.y = n.data.y), e > 2 && (n.z = n.data.z);
                            do {
                                h += i[n.data.index]
                            } while (n = n.next)
                        }
                        t.value = h
                    }

                    function f(t, a, h, u, l) {
                        if (!t.value) return !0;
                        var f = [h, u, l][e - 1], d = t.x - n.x, p = e > 1 ? t.y - n.y : 0, m = e > 2 ? t.z - n.z : 0,
                            g = f - a, v = d * d + p * p + m * m;
                        if (g * g / c < v) return v < s && (0 === d && (d = As(), v += d * d), e > 1 && 0 === p && (p = As(), v += p * p), e > 2 && 0 === m && (m = As(), v += m * m), v < o && (v = Math.sqrt(o * v)), n.vx += d * t.value * r / v, e > 1 && (n.vy += p * t.value * r / v), e > 2 && (n.vz += m * t.value * r / v)), !0;
                        if (!(t.length || v >= s)) {
                            (t.data !== n || t.next) && (0 === d && (d = As(), v += d * d), e > 1 && 0 === p && (p = As(), v += p * p), e > 2 && 0 === m && (m = As(), v += m * m), v < o && (v = Math.sqrt(o * v)));
                            do {
                                t.data !== n && (g = i[t.data.index] * r / v, n.vx += d * g, e > 1 && (n.vy += p * g), e > 2 && (n.vz += m * g))
                            } while (t = t.next)
                        }
                    }

                    return h.initialize = function (n, r) {
                        t = n, e = r, u()
                    }, h.strength = function (t) {
                        return arguments.length ? (a = "function" == typeof t ? t : Ss(+t), u(), h) : a
                    }, h.distanceMin = function (t) {
                        return arguments.length ? (o = t * t, h) : Math.sqrt(o)
                    }, h.distanceMax = function (t) {
                        return arguments.length ? (s = t * t, h) : Math.sqrt(s)
                    }, h.theta = function (t) {
                        return arguments.length ? (c = t * t, h) : Math.sqrt(c)
                    }, h
                }()).force("center", function (t, e, n) {
                    var r;
                    null == t && (t = 0), null == e && (e = 0), null == n && (n = 0);

                    function i() {
                        var i, a, o = r.length, s = 0, c = 0, h = 0;
                        for (i = 0; i < o; ++i) s += (a = r[i]).x || 0, c += a.y || 0, h += a.z || 0;
                        for (s = s / o - t, c = c / o - e, h = h / o - n, i = 0; i < o; ++i) a = r[i], s && (a.x -= s), c && (a.y -= c), h && (a.z -= h)
                    }

                    return i.initialize = function (t) {
                        r = t
                    }, i.x = function (e) {
                        return arguments.length ? (t = +e, i) : t
                    }, i.y = function (t) {
                        return arguments.length ? (e = +t, i) : e
                    }, i.z = function (t) {
                        return arguments.length ? (n = +t, i) : n
                    }, i
                }()).stop()
            }
        }, init: function (t, e) {
            e.graphScene = t
        }, update: function (t) {
            for (t.onFrame = null, t.onLoading(), (t.graphData.nodes.length || t.graphData.links.length) && console.info("force-graph loading", t.graphData.nodes.length + " nodes", t.graphData.links.length + " links"), t.fetchingJson || !t.jsonUrl || t.graphData.nodes.length || t.graphData.links.length || (t.fetchingJson = !0, Kh.get(t.jsonUrl).then(function (e, n) {
                t.fetchingJson = !1, t.graphData = n, t._rerender()
            })), null !== t.autoColorBy && function (t, e, n) {
                if (e && "string" == typeof n) {
                    var r = nu, i = t.filter(function (t) {
                        return !t[n]
                    }), a = {};
                    i.forEach(function (t) {
                        a[e(t)] = null
                    }), Object.keys(a).forEach(function (t, e) {
                        a[t] = e
                    }), i.forEach(function (t) {
                        t[n] = r[a[e(t)] % r.length]
                    })
                }
            }(t.graphData.nodes, tu(t.autoColorBy), t.nodeColor), t.graphData.links.forEach(function (e) {
                e.source = e[t.linkSource], e.target = e[t.linkTarget]
            }); t.graphScene.children.length;) t.graphScene.remove(t.graphScene.children[0]);
            var e = tu(t.nodeThreeObject), n = tu(t.nodeVal), r = tu(t.nodeColor), i = {}, a = {};
            t.graphData.nodes.forEach(function (o) {
                var s = e(o), c = void 0;
                if (s) c = s.clone(); else {
                    var h = n(o) || 1;
                    i.hasOwnProperty(h) || (i[h] = new el.SphereGeometry(Math.cbrt(h) * t.nodeRelSize, t.nodeResolution, t.nodeResolution));
                    var u = r(o);
                    a.hasOwnProperty(u) || (a[u] = new el.MeshLambertMaterial({
                        color: tl(u || "#ffffaa"),
                        transparent: !0,
                        opacity: .75
                    })), c = new el.Mesh(i[h], a[u])
                }
                c.__graphObjType = "node", c.__data = o, t.graphScene.add(o.__threeObj = c)
            });
            var o = tu(t.linkColor), s = {};
            t.graphData.links.forEach(function (e) {
                var n = o(e);
                s.hasOwnProperty(n) || (s[n] = new el.LineBasicMaterial({
                    color: tl(n || "#f0f0f0"),
                    transparent: !0,
                    opacity: t.linkOpacity
                }));
                var r = new el.BufferGeometry;
                r.addAttribute("position", new el.BufferAttribute(new Float32Array(6), 3));
                var i = s[n], a = new el.Line(r, i);
                a.renderOrder = 10, a.__graphObjType = "link", a.__data = e, t.graphScene.add(e.__lineObj = a)
            });
            var c = "ngraph" !== t.forceEngine, h = void 0;
            if (c) (h = t.d3ForceLayout).stop().alpha(1).alphaDecay(t.d3AlphaDecay).velocityDecay(t.d3VelocityDecay).numDimensions(t.numDimensions).nodes(t.graphData.nodes).force("link").id(function (e) {
                return e[t.nodeId]
            }).links(t.graphData.links); else {
                var u = nl.graph();
                t.graphData.nodes.forEach(function (e) {
                    u.addNode(e[t.nodeId])
                }), t.graphData.links.forEach(function (t) {
                    u.addLink(t.source, t.target)
                }), (h = nl["forcelayout" + (2 === t.numDimensions ? "" : "3d")](u)).graph = u
            }
            for (var l = 0; l < t.warmupTicks; l++) h[c ? "tick" : "step"]();
            var f = 0, d = new Date;
            t.onFrame = function () {
                ++f > t.cooldownTicks || new Date - d > t.cooldownTime ? t.onFrame = null : h[c ? "tick" : "step"]();
                t.graphData.nodes.forEach(function (e) {
                    var n = e.__threeObj;
                    if (n) {
                        var r = c ? e : h.getNodePosition(e[t.nodeId]);
                        n.position.x = r.x, n.position.y = r.y || 0, n.position.z = r.z || 0
                    }
                }), t.graphData.links.forEach(function (t) {
                    var e = t.__lineObj;
                    if (e) {
                        var n = c ? t : h.getLinkPosition(h.graph.getLink(t.source, t.target).id),
                            r = n[c ? "source" : "from"], i = n[c ? "target" : "to"],
                            a = e.geometry.attributes.position;
                        a.array[0] = r.x, a.array[1] = r.y || 0, a.array[2] = r.z || 0, a.array[3] = i.x, a.array[4] = i.y || 0, a.array[5] = i.z || 0, a.needsUpdate = !0, e.geometry.computeBoundingSphere()
                    }
                })
            }, t.onFinishLoading()
        }
    }), Br, !0), cl = Xh(function (t, e) {
        "undefined" != typeof self && self, t.exports = function (t) {
            var e = {};

            function n(r) {
                if (e[r]) return e[r].exports;
                var i = e[r] = {i: r, l: !1, exports: {}};
                return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            return n.m = t, n.c = e, n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: r})
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 0)
        }([function (t, e, n) {
            var r, i, a;
            o = function (t, e, n) {
                Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
                    var e = t.stateInit, n = void 0 === e ? function () {
                            return {}
                        } : e, r = t.props, s = void 0 === r ? {} : r, c = t.methods, h = void 0 === c ? {} : c,
                        u = t.aliases, l = void 0 === u ? {} : u, f = t.init, d = void 0 === f ? function () {
                        } : f, p = t.update, m = void 0 === p ? function () {
                        } : p, g = Object.keys(s).map(function (t) {
                            return new o(t, s[t])
                        });
                    return function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = Object.assign({}, n instanceof Function ? n() : n, {initialised: !1});

                        function r(e) {
                            return o(e, t), s(), r
                        }

                        var o = function (t, n) {
                            d.call(r, t, e, n), e.initialised = !0
                        }, s = (0, i.default)(function () {
                            e.initialised && m.call(r, e)
                        }, 1);
                        return g.forEach(function (t) {
                            r[t.name] = function (t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (t, e) {
                                    };
                                return function (a) {
                                    return arguments.length ? (e[t] = a, i.call(r, a, e), n && s(), r) : e[t]
                                }
                            }(t.name, t.triggerUpdate, t.onChange)
                        }), Object.keys(h).forEach(function (t) {
                            r[t] = function () {
                                for (var n, i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                return (n = h[t]).call.apply(n, [r, e].concat(a))
                            }
                        }), Object.entries(l).forEach(function (t) {
                            var e = a(t, 2), n = e[0], i = e[1];
                            return r[n] = r[i]
                        }), r.resetProps = function () {
                            return g.forEach(function (t) {
                                r[t.name](t.defaultVal)
                            }), r
                        }, r.resetProps(), e._rerender = s, r
                    }
                };
                var r, i = (r = n, r && r.__esModule ? r : {default: r}), a = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function (t, e) {
                        var n = [], r = !0, i = !1, a = void 0;
                        try {
                            for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            i = !0, a = t
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return n
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }, o = function t(e, n) {
                    var r = n.default, i = void 0 === r ? null : r, a = n.triggerUpdate, o = void 0 === a || a,
                        s = n.onChange, c = void 0 === s ? function (t, e) {
                        } : s;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.name = e, this.defaultVal = i, this.triggerUpdate = o, this.onChange = c
                };
                t.exports = e.default
            }, i = [t, e, n(1)], void 0 === (a = "function" == typeof(r = o) ? r.apply(e, i) : r) || (t.exports = a);
            var o
        }, function (t, e) {
            t.exports = function (t, e, n) {
                var r, i, a, o, s;
                null == e && (e = 100);

                function c() {
                    var h = Date.now() - o;
                    h < e && h >= 0 ? r = setTimeout(c, e - h) : (r = null, n || (s = t.apply(a, i), a = i = null))
                }

                var h = function () {
                    a = this, i = arguments, o = Date.now();
                    var h = n && !r;
                    return r || (r = setTimeout(c, e)), h && (s = t.apply(a, i), a = i = null), s
                };
                return h.clear = function () {
                    r && (clearTimeout(r), r = null)
                }, h.flush = function () {
                    r && (s = t.apply(a, i), a = i = null, clearTimeout(r), r = null)
                }, h
            }
        }])
    }), hl = qh(cl);
    cl.Kapsule;
    var ul = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }, ll = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, fl = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }, dl = window.THREE ? window.THREE : {
            WebGLRenderer: wr,
            Scene: Er,
            PerspectiveCamera: vr,
            AmbientLight: Xa,
            DirectionalLight: qa,
            Raycaster: Wo,
            Vector2: ie,
            Color: nn
        }, pl = function (t, e) {
            var n = new e;
            return {
                linkProp: function (e) {
                    return {
                        default: n[e](), onChange: function (n, r) {
                            r[t][e](n)
                        }, triggerUpdate: !1
                    }
                }, linkMethod: function (e) {
                    return function (n) {
                        for (var r = n[t], i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        var s = r[e].apply(r, a);
                        return s === r ? this : s
                    }
                }
            }
        }("forceGraph", sl),
        ml = Object.assign.apply(Object, fl(["jsonUrl", "graphData", "numDimensions", "nodeRelSize", "autoColorBy", "nodeId", "nodeVal", "nodeResolution", "nodeColor", "nodeThreeObject", "linkSource", "linkTarget", "linkColor", "linkOpacity", "forceEngine", "d3AlphaDecay", "d3VelocityDecay", "warmupTicks", "cooldownTicks", "cooldownTime"].map(function (t) {
            return ul({}, t, pl.linkProp(t))
        }))), gl = Object.assign.apply(Object, fl(["d3Force"].map(function (t) {
            return ul({}, t, pl.linkMethod(t))
        })));
    return hl({
        props: ll({
            width: {default: window.innerWidth},
            height: {default: window.innerHeight},
            backgroundColor: {
                default: "#000011", onChange: function (t, e) {
                    e.scene.background = new dl.Color((n = t, isNaN(n) ? parseInt($u(n).toHex(), 16) : n));
                    var n
                }, triggerUpdate: !1
            },
            nodeLabel: {default: "name", triggerUpdate: !1},
            onNodeClick: {triggerUpdate: !1},
            onNodeHover: {
                default: function () {
                }, triggerUpdate: !1
            }
        }, ml),
        aliases: {
            nameField: "nodeLabel",
            idField: "nodeId",
            valField: "nodeVal",
            colorField: "nodeColor",
            linkSourceField: "linkSource",
            linkTargetField: "linkTarget",
            linkColorField: "linkColor",
            lineOpacity: "linkOpacity"
        },
        methods: ll({}, gl),
        stateInit: function () {
            return {
                renderer: new dl.WebGLRenderer,
                scene: new dl.Scene,
                camera: new dl.PerspectiveCamera,
                forceGraph: new sl
            }
        },
        init: function (t, e) {
            t.innerHTML = "";
            var n = void 0;
            t.appendChild(n = document.createElement("div")), n.className = "graph-nav-info", n.textContent = "MOVE mouse & press LEFT/A: rotate, MIDDLE/S: zoom, RIGHT/D: pan";
            var r = void 0;
            t.appendChild(r = document.createElement("div")), r.className = "graph-info-msg", r.textContent = "", e.forceGraph.onLoading(function () {
                r.textContent = "Loading..."
            }), e.forceGraph.onFinishLoading(function () {
                r.textContent = "", 0 === e.camera.position.x && 0 === e.camera.position.y && (e.camera.lookAt(e.forceGraph.position), e.camera.position.z = 150 * Math.cbrt(e.forceGraph.graphData().nodes.length))
            });
            var i = document.createElement("div");
            i.classList.add("graph-tooltip"), t.appendChild(i);
            var a = new dl.Raycaster, o = new dl.Vector2;
            o.x = -2, o.y = -2, t.addEventListener("mousemove", function (n) {
                var r = function (t) {
                    var e = t.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft,
                        r = window.pageYOffset || document.documentElement.scrollTop;
                    return {top: e.top + r, left: e.left + n}
                }(t), a = n.pageX - r.left, s = n.pageY - r.top;
                o.x = a / e.width * 2 - 1, o.y = -s / e.height * 2 + 1, i.style.top = s - 40 + "px", i.style.left = a - 20 + "px"
            }, !1), t.addEventListener("click", function (t) {
                e.onNodeClick && e.hoverNode && e.onNodeClick(e.hoverNode)
            }, !1), t.appendChild(e.renderer.domElement);
            var s = new Ts(e.camera, e.renderer.domElement);
            e.renderer.setSize(e.width, e.height), e.camera.far = 2e4, e.scene.add(e.forceGraph), e.scene.add(new dl.AmbientLight(12303291)), e.scene.add(new dl.DirectionalLight(16777215, .6)), function t() {
                a.setFromCamera(o, e.camera);
                var n = a.intersectObjects(e.forceGraph.children).filter(function (t) {
                    return "node" === t.object.__graphObjType
                }), r = n.length ? n[0].object : null, c = r ? r.__data : null;
                e.hoverNode !== c && (e.hoverNode = c, e.onNodeHover(c), i.textContent = c ? tu(e.nodeLabel)(c) : ""), e.forceGraph.tickFrame(), s.update(), e.renderer.render(e.scene, e.camera), requestAnimationFrame(t)
            }()
        },
        update: function (t) {
            t.width && t.height && (t.renderer.setSize(t.width, t.height), t.camera.aspect = t.width / t.height, t.camera.updateProjectionMatrix())
        }
    })
});