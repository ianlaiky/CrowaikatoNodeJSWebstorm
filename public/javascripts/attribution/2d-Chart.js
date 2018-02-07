!function (t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.Sunburst = n()
}(this, function () {
    "use strict";

    function t(t, e, r) {
        return t = n(t, e, r), function (n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }

    function n(t, n, e) {
        return function (r) {
            var i = ve;
            ve = r;
            try {
                t.call(this, this.__data__, n, e)
            } finally {
                ve = i
            }
        }
    }

    function e(t) {
        return function () {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, i = -1, a = n.length; r < a; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                ++i ? n.length = i : delete this.__on
            }
        }
    }

    function r(e, r, i) {
        var a = be.hasOwnProperty(e.type) ? t : n;
        return function (t, n, o) {
            var u, c = this.__on, f = a(r, n, o);
            if (c) for (var s = 0, l = c.length; s < l; ++s) if ((u = c[s]).type === e.type && u.name === e.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = f, u.capture = i), void(u.value = r);
            this.addEventListener(e.type, f, i), u = {
                type: e.type,
                name: e.name,
                value: r,
                listener: f,
                capture: i
            }, c ? c.push(u) : this.__on = [u]
        }
    }

    function i() {
    }

    function a() {
        return []
    }

    function o(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }

    function u(t, n, e, r, i, a) {
        for (var u, c = 0, f = n.length, s = a.length; c < s; ++c) (u = n[c]) ? (u.__data__ = a[c], r[c] = u) : e[c] = new o(t, a[c]);
        for (; c < f; ++c) (u = n[c]) && (i[c] = u)
    }

    function c(t, n, e, r, i, a, u) {
        var c, f, s, l = {}, h = n.length, d = a.length, p = new Array(h);
        for (c = 0; c < h; ++c) (f = n[c]) && (p[c] = s = xe + u.call(f, f.__data__, c, n), s in l ? i[c] = f : l[s] = f);
        for (c = 0; c < d; ++c) (f = l[s = xe + u.call(t, a[c], c, a)]) ? (r[c] = f, f.__data__ = a[c], l[s] = null) : e[c] = new o(t, a[c]);
        for (c = 0; c < h; ++c) (f = n[c]) && l[p[c]] === f && (i[c] = f)
    }

    function f(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function s(t, n) {
        return t.style.getPropertyValue(n) || Me(t).getComputedStyle(t, null).getPropertyValue(n)
    }

    function l(t) {
        return t.trim().split(/^|\s+/)
    }

    function h(t) {
        return t.classList || new d(t)
    }

    function d(t) {
        this._node = t, this._names = l(t.getAttribute("class") || "")
    }

    function p(t, n) {
        for (var e = h(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }

    function g(t, n) {
        for (var e = h(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }

    function y() {
        this.textContent = ""
    }

    function b() {
        this.innerHTML = ""
    }

    function v() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function m() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function _() {
        return null
    }

    function w() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function x(t, n, e) {
        var r = Me(t), i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function M(t, n) {
        this._groups = t, this._parents = n
    }

    function T() {
        return new M([[document.documentElement]], Te)
    }

    function C(t, n, e) {
        var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, i);
        return i >= 0 ? (a >= Ne ? 10 : a >= ke ? 5 : a >= De ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= Ne ? 10 : a >= ke ? 5 : a >= De ? 2 : 1)
    }

    function A(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }

    function S() {
    }

    function N(t) {
        var n;
        return t = (t + "").trim().toLowerCase(), (n = He.exec(t)) ? (n = parseInt(n[1], 16), new P(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = ze.exec(t)) ? k(parseInt(n[1], 16)) : (n = Ie.exec(t)) ? new P(n[1], n[2], n[3], 1) : (n = qe.exec(t)) ? new P(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Xe.exec(t)) ? D(n[1], n[2], n[3], n[4]) : (n = Re.exec(t)) ? D(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Ve.exec(t)) ? F(n[1], n[2] / 100, n[3] / 100, 1) : (n = Be.exec(t)) ? F(n[1], n[2] / 100, n[3] / 100, n[4]) : $e.hasOwnProperty(t) ? k($e[t]) : "transparent" === t ? new P(NaN, NaN, NaN, 0) : null
    }

    function k(t) {
        return new P(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function D(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new P(t, n, e, r)
    }

    function U(t) {
        return t instanceof S || (t = N(t)), t ? (t = t.rgb(), new P(t.r, t.g, t.b, t.opacity)) : new P
    }

    function E(t, n, e, r) {
        return 1 === arguments.length ? U(t) : new P(t, n, e, null == r ? 1 : r)
    }

    function P(t, n, e, r) {
        this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
    }

    function F(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new O(t, n, e, r)
    }

    function O(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Y(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }

    function L(t) {
        if (t instanceof j) return new j(t.l, t.a, t.b, t.opacity);
        if (t instanceof X) {
            var n = t.h * Ze;
            return new j(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof P || (t = U(t));
        var e = q(t.r), r = q(t.g), i = q(t.b), a = H((.4124564 * e + .3575761 * r + .1804375 * i) / Qe),
            o = H((.2126729 * e + .7151522 * r + .072175 * i) / Je);
        return new j(116 * o - 16, 500 * (a - o), 200 * (o - H((.0193339 * e + .119192 * r + .9503041 * i) / Ge)), t.opacity)
    }

    function j(t, n, e, r) {
        this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
    }

    function H(t) {
        return t > er ? Math.pow(t, 1 / 3) : t / nr + Ke
    }

    function z(t) {
        return t > tr ? t * t * t : nr * (t - Ke)
    }

    function I(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function q(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function X(t, n, e, r) {
        this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
    }

    function R(t, n, e, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
            t instanceof P || (t = U(t));
            var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (cr * r + or * n - ur * e) / (cr + or - ur), a = r - i,
                o = (ar * (e - i) - rr * a) / ir, u = Math.sqrt(o * o + a * a) / (ar * i * (1 - i)),
                c = u ? Math.atan2(o, a) * We - 120 : NaN;
            return new V(c < 0 ? c + 360 : c, u, i, t.opacity)
        }(t) : new V(t, n, e, null == r ? 1 : r)
    }

    function V(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function B(t, n) {
        return function (e) {
            return t + e * n
        }
    }

    function $(t) {
        return 1 == (t = +t) ? Z : function (n, e) {
            return e - n ? function (t, n, e) {
                return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
                    return Math.pow(t + r * n, e)
                }
            }(n, e, t) : dr(isNaN(n) ? e : n)
        }
    }

    function Z(t, n) {
        var e = n - t;
        return e ? B(t, e) : dr(isNaN(t) ? n : t)
    }

    function W(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " " : ""
        }

        return function (a, o) {
            var u = [], c = [];
            return a = t(a), o = t(o), function (t, r, i, a, o, u) {
                if (t !== i || r !== a) {
                    var c = o.push("translate(", null, n, null, e);
                    u.push({i: c - 4, x: gr(t, i)}, {i: c - 2, x: gr(r, a)})
                } else (i || a) && o.push("translate(" + i + n + a + e)
            }(a.translateX, a.translateY, o.translateX, o.translateY, u, c), function (t, n, e, a) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: gr(t, n)
                })) : n && e.push(i(e) + "rotate(" + n + r)
            }(a.rotate, o.rotate, u, c), function (t, n, e, a) {
                t !== n ? a.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: gr(t, n)
                }) : n && e.push(i(e) + "skewX(" + n + r)
            }(a.skewX, o.skewX, u, c), function (t, n, e, r, a, o) {
                if (t !== e || n !== r) {
                    var u = a.push(i(a) + "scale(", null, ",", null, ")");
                    o.push({i: u - 4, x: gr(t, e)}, {i: u - 2, x: gr(n, r)})
                } else 1 === e && 1 === r || a.push(i(a) + "scale(" + e + "," + r + ")")
            }(a.scaleX, a.scaleY, o.scaleX, o.scaleY, u, c), a = o = null, function (t) {
                for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t);
                return u.join("")
            }
        }
    }

    function Q(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = R(n)).h, (r = R(r)).h), a = Z(n.s, r.s), o = Z(n.l, r.l), u = Z(n.opacity, r.opacity);
                return function (t) {
                    return n.h = i(t), n.s = a(t), n.l = o(Math.pow(t, e)), n.opacity = u(t), n + ""
                }
            }

            return e = +e, r.gamma = n, r
        }(1)
    }

    function J(t, n) {
        return (n -= t = +t) ? function (e) {
            return (e - t) / n
        } : Nr(n)
    }

    function G(t, n, e, r) {
        var i = t[0], a = t[1], o = n[0], u = n[1];
        return a < i ? (i = e(a, i), o = r(u, o)) : (i = e(i, a), o = r(o, u)), function (t) {
            return o(i(t))
        }
    }

    function K(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1, a = new Array(i), o = new Array(i), u = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < i;) a[u] = e(t[u], t[u + 1]), o[u] = r(n[u], n[u + 1]);
        return function (n) {
            var e = Se(t, n, 1, i) - 1;
            return o[e](a[e](n))
        }
    }

    function tt(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }

    function nt(t, n) {
        function e() {
            return i = Math.min(u.length, c.length) > 2 ? K : G, a = o = null, r
        }

        function r(n) {
            return (a || (a = i(u, c, s ? function (t) {
                return function (n, e) {
                    var r = t(n = +n, e = +e);
                    return function (t) {
                        return t <= n ? 0 : t >= e ? 1 : r(t)
                    }
                }
            }(t) : t, f)))(+n)
        }

        var i, a, o, u = Dr, c = Dr, f = mr, s = !1;
        return r.invert = function (t) {
            return (o || (o = i(c, u, J, s ? function (t) {
                return function (n, e) {
                    var r = t(n = +n, e = +e);
                    return function (t) {
                        return t <= 0 ? n : t >= 1 ? e : r(t)
                    }
                }
            }(n) : n)))(+t)
        }, r.domain = function (t) {
            return arguments.length ? (u = Pe.call(t, kr), e()) : u.slice()
        }, r.range = function (t) {
            return arguments.length ? (c = Fe.call(t), e()) : c.slice()
        }, r.rangeRound = function (t) {
            return c = Fe.call(t), f = _r, e()
        }, r.clamp = function (t) {
            return arguments.length ? (s = !!t, e()) : s
        }, r.interpolate = function (t) {
            return arguments.length ? (f = t, e()) : f
        }, e()
    }

    function et(t) {
        return new rt(t)
    }

    function rt(t) {
        if (!(n = Or.exec(t))) throw new Error("invalid format: " + t);
        var n, e = n[1] || " ", r = n[2] || ">", i = n[3] || "-", a = n[4] || "", o = !!n[5], u = n[6] && +n[6],
            c = !!n[7], f = n[8] && +n[8].slice(1), s = n[9] || "";
        "n" === s ? (c = !0, s = "g") : Fr[s] || (s = ""), (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = a, this.zero = o, this.width = u, this.comma = c, this.precision = f, this.type = s
    }

    function it(t) {
        var n = t.domain;
        return t.ticks = function (t) {
            var e = n();
            return Ue(e[0], e[e.length - 1], null == t ? 10 : t)
        }, t.tickFormat = function (t, e) {
            return qr(n(), t, e)
        }, t.nice = function (e) {
            null == e && (e = 10);
            var r, i = n(), a = 0, o = i.length - 1, u = i[a], c = i[o];
            return c < u && (r = u, u = c, c = r, r = a, a = o, o = r), (r = C(u, c, e)) > 0 ? r = C(u = Math.floor(u / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = C(u = Math.ceil(u * r) / r, c = Math.floor(c * r) / r, e)), r > 0 ? (i[a] = Math.floor(u / r) * r, i[o] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[a] = Math.ceil(u * r) / r, i[o] = Math.floor(c * r) / r, n(i)), t
        }, t
    }

    function at() {
        var t = nt(J, gr);
        return t.copy = function () {
            return tt(t, at())
        }, it(t)
    }

    function ot(t, n) {
        return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
    }

    function ut() {
        var t = 1, n = nt(function (n, e) {
            return (e = ot(e, t) - (n = ot(n, t))) ? function (r) {
                return (ot(r, t) - n) / e
            } : Nr(e)
        }, function (n, e) {
            return e = ot(e, t) - (n = ot(n, t)), function (r) {
                return ot(n + e * r, 1 / t)
            }
        }), e = n.domain;
        return n.exponent = function (n) {
            return arguments.length ? (t = +n, e(e())) : t
        }, n.copy = function () {
            return tt(n, ut().exponent(t))
        }, it(n)
    }

    function ct(t, n, e, r) {
        function i(n) {
            return t(n = new Date(+n)), n
        }

        return i.floor = i, i.ceil = function (e) {
            return t(e = new Date(e - 1)), n(e, 1), t(e), e
        }, i.round = function (t) {
            var n = i(t), e = i.ceil(t);
            return t - n < e - t ? n : e
        }, i.offset = function (t, e) {
            return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
        }, i.range = function (e, r, a) {
            var o, u = [];
            if (e = i.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < r && a > 0)) return u;
            do {
                u.push(o = new Date(+e)), n(e, a), t(e)
            } while (o < e && e < r);
            return u
        }, i.filter = function (e) {
            return ct(function (n) {
                if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
            }, function (t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t);) ; else for (; --r >= 0;) for (; n(t, 1), !e(t);) ;
            })
        }, e && (i.count = function (n, r) {
            return Xr.setTime(+n), Rr.setTime(+r), t(Xr), t(Rr), Math.floor(e(Xr, Rr))
        }, i.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                return r(n) % t == 0
            } : function (n) {
                return i.count(0, n) % t == 0
            }) : i : null
        }), i
    }

    function ft(t) {
        return ct(function (n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setDate(t.getDate() + 7 * n)
        }, function (t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Br) / $r
        })
    }

    function st(t) {
        return ct(function (n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        }, function (t, n) {
            return (n - t) / $r
        })
    }

    function lt(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y), n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function ht(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y), n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function dt(t) {
        return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
    }

    function pt(t, n, e) {
        var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
        return r + (a < e ? new Array(e - a + 1).join(n) + i : i)
    }

    function gt(t) {
        return t.replace(si, "\\$&")
    }

    function yt(t) {
        return new RegExp("^(?:" + t.map(gt).join("|") + ")", "i")
    }

    function bt(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }

    function vt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }

    function mt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 1));
        return r ? (t.u = +r[0], e + r[0].length) : -1
    }

    function _t(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }

    function wt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.V = +r[0], e + r[0].length) : -1
    }

    function xt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }

    function Mt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }

    function Tt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }

    function Ct(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }

    function At(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }

    function St(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }

    function Nt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }

    function kt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }

    function Dt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }

    function Ut(t, n, e) {
        var r = ci.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }

    function Et(t, n, e) {
        var r = ci.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }

    function Pt(t, n, e) {
        var r = ci.exec(n.slice(e, e + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
    }

    function Ft(t, n, e) {
        var r = fi.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function Ot(t, n, e) {
        var r = ci.exec(n.slice(e));
        return r ? (t.Q = +r[0], e + r[0].length) : -1
    }

    function Yt(t, n, e) {
        var r = ci.exec(n.slice(e));
        return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
    }

    function Lt(t, n) {
        return pt(t.getDate(), n, 2)
    }

    function jt(t, n) {
        return pt(t.getHours(), n, 2)
    }

    function Ht(t, n) {
        return pt(t.getHours() % 12 || 12, n, 2)
    }

    function zt(t, n) {
        return pt(1 + Zr.count(Gr(t), t), n, 3)
    }

    function It(t, n) {
        return pt(t.getMilliseconds(), n, 3)
    }

    function qt(t, n) {
        return It(t, n) + "000"
    }

    function Xt(t, n) {
        return pt(t.getMonth() + 1, n, 2)
    }

    function Rt(t, n) {
        return pt(t.getMinutes(), n, 2)
    }

    function Vt(t, n) {
        return pt(t.getSeconds(), n, 2)
    }

    function Bt(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n
    }

    function $t(t, n) {
        return pt(Wr.count(Gr(t), t), n, 2)
    }

    function Zt(t, n) {
        var e = t.getDay();
        return t = e >= 4 || 0 === e ? Jr(t) : Jr.ceil(t), pt(Jr.count(Gr(t), t) + (4 === Gr(t).getDay()), n, 2)
    }

    function Wt(t) {
        return t.getDay()
    }

    function Qt(t, n) {
        return pt(Qr.count(Gr(t), t), n, 2)
    }

    function Jt(t, n) {
        return pt(t.getFullYear() % 100, n, 2)
    }

    function Gt(t, n) {
        return pt(t.getFullYear() % 1e4, n, 4)
    }

    function Kt(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : (n *= -1, "+")) + pt(n / 60 | 0, "0", 2) + pt(n % 60, "0", 2)
    }

    function tn(t, n) {
        return pt(t.getUTCDate(), n, 2)
    }

    function nn(t, n) {
        return pt(t.getUTCHours(), n, 2)
    }

    function en(t, n) {
        return pt(t.getUTCHours() % 12 || 12, n, 2)
    }

    function rn(t, n) {
        return pt(1 + Kr.count(ri(t), t), n, 3)
    }

    function an(t, n) {
        return pt(t.getUTCMilliseconds(), n, 3)
    }

    function on(t, n) {
        return an(t, n) + "000"
    }

    function un(t, n) {
        return pt(t.getUTCMonth() + 1, n, 2)
    }

    function cn(t, n) {
        return pt(t.getUTCMinutes(), n, 2)
    }

    function fn(t, n) {
        return pt(t.getUTCSeconds(), n, 2)
    }

    function sn(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n
    }

    function ln(t, n) {
        return pt(ti.count(ri(t), t), n, 2)
    }

    function hn(t, n) {
        var e = t.getUTCDay();
        return t = e >= 4 || 0 === e ? ei(t) : ei.ceil(t), pt(ei.count(ri(t), t) + (4 === ri(t).getUTCDay()), n, 2)
    }

    function dn(t) {
        return t.getUTCDay()
    }

    function pn(t, n) {
        return pt(ni.count(ri(t), t), n, 2)
    }

    function gn(t, n) {
        return pt(t.getUTCFullYear() % 100, n, 2)
    }

    function yn(t, n) {
        return pt(t.getUTCFullYear() % 1e4, n, 4)
    }

    function bn() {
        return "+0000"
    }

    function vn() {
        return "%"
    }

    function mn(t) {
        return +t
    }

    function _n(t) {
        return Math.floor(+t / 1e3)
    }

    function wn(t) {
        var n = t.length;
        return function (e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }

    function xn(t) {
        var n = 0, e = t.children, r = e && e.length;
        if (r) for (; --r >= 0;) n += e[r].value; else n = 1;
        t.value = n
    }

    function Mn(t, n) {
        var e, r, i, a, o, u = new Sn(t), c = +t.value && (u.value = t.value), f = [u];
        for (null == n && (n = Tn); e = f.pop();) if (c && (e.value = +e.data.value), (i = n(e.data)) && (o = i.length)) for (e.children = new Array(o), a = o - 1; a >= 0; --a) f.push(r = e.children[a] = new Sn(i[a])), r.parent = e, r.depth = e.depth + 1;
        return u.eachBefore(An)
    }

    function Tn(t) {
        return t.children
    }

    function Cn(t) {
        t.data = t.data.data
    }

    function An(t) {
        var n = 0;
        do {
            t.height = n
        } while ((t = t.parent) && t.height < ++n)
    }

    function Sn(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null
    }

    function Nn() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function kn() {
        return new Nn
    }

    function Dn(t) {
        return t >= 1 ? ki : t <= -1 ? -ki : Math.asin(t)
    }

    function Un(t) {
        return t.innerRadius
    }

    function En(t) {
        return t.outerRadius
    }

    function Pn(t) {
        return t.startAngle
    }

    function Fn(t) {
        return t.endAngle
    }

    function On(t) {
        return t && t.padAngle
    }

    function Yn(t, n, e, r, i, a, o) {
        var u = t - e, c = n - r, f = (o ? a : -a) / Ai(u * u + c * c), s = f * c, l = -f * u, h = t + s, d = n + l,
            p = e + s, g = r + l, y = (h + p) / 2, b = (d + g) / 2, v = p - h, m = g - d, _ = v * v + m * m, w = i - a,
            x = h * g - p * d, M = (m < 0 ? -1 : 1) * Ai(Mi(0, w * w * _ - x * x)), T = (x * m - v * M) / _,
            C = (-x * v - m * M) / _, A = (x * m + v * M) / _, S = (-x * v + m * M) / _, N = T - y, k = C - b,
            D = A - y, U = S - b;
        return N * N + k * k > D * D + U * U && (T = A, C = S), {
            cx: T,
            cy: C,
            x01: -s,
            y01: -l,
            x11: T * (i / w - 1),
            y11: C * (i / w - 1)
        }
    }

    function Ln(t) {
        return t < 0 ? -1 : 1
    }

    function jn(t, n, e) {
        var r = t._x1 - t._x0, i = n - t._x1, a = (t._y1 - t._y0) / (r || i < 0 && -0),
            o = (e - t._y1) / (i || r < 0 && -0), u = (a * i + o * r) / (r + i);
        return (Ln(a) + Ln(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0
    }

    function Hn(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }

    function zn(t, n, e) {
        var r = t._x0, i = t._y0, a = t._x1, o = t._y1, u = (a - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, a - u, o - u * e, a, o)
    }

    function In(t) {
        this._context = t
    }

    function qn(t) {
        this._context = t
    }

    function Xn() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new Rn(r)
    }

    function Rn(t) {
        this._ = t
    }

    function Vn(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r) if (t[r].name === n) {
            t[r] = Ei, t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({name: n, value: e}), t
    }

    function Bn() {
        return zi || (Xi($n), zi = qi.now() + Ii)
    }

    function $n() {
        zi = 0
    }

    function Zn() {
        this._call = this._time = this._next = null
    }

    function Wn(t, n, e) {
        var r = new Zn;
        return r.restart(t, n, e), r
    }

    function Qn() {
        zi = (Hi = qi.now()) + Ii, Oi = Yi = 0;
        try {
            !function () {
                Bn(), ++Oi;
                for (var t, n = Pi; n;) (t = zi - n._time) >= 0 && n._call.call(null, t), n = n._next;
                --Oi
            }()
        } finally {
            Oi = 0, function () {
                var t, n, e = Pi, r = 1 / 0;
                for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Pi = n);
                Fi = t, Gn(r)
            }(), zi = 0
        }
    }

    function Jn() {
        var t = qi.now(), n = t - Hi;
        n > ji && (Ii -= n, Hi = t)
    }

    function Gn(t) {
        if (!Oi) {
            Yi && (Yi = clearTimeout(Yi));
            t - zi > 24 ? (t < 1 / 0 && (Yi = setTimeout(Qn, t - qi.now() - Ii)), Li && (Li = clearInterval(Li))) : (Li || (Hi = qi.now(), Li = setInterval(Jn, ji)), Oi = 1, Xi(Qn))
        }
    }

    function Kn(t, n) {
        var e = ne(t, n);
        if (e.state > $i) throw new Error("too late; already scheduled");
        return e
    }

    function te(t, n) {
        var e = ne(t, n);
        if (e.state > Wi) throw new Error("too late; already started");
        return e
    }

    function ne(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e
    }

    function ee(t, n, e) {
        var r = t._id;
        return t.each(function () {
            var t = te(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }), function (t) {
            return ne(t, r).value[n]
        }
    }

    function re(t, n, e, r) {
        this._groups = t, this._parents = n, this._name = e, this._id = r
    }

    function ie(t) {
        return T().transition(t)
    }

    function ae() {
        return ++ra
    }

    function oe(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);) if (!(t = t.parentNode)) return aa.time = Bn(), aa;
        return e
    }

    function ue(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function ce(t, n) {
        return n = {exports: {}}, t(n, n.exports), n.exports
    }

    var fe = "http://www.w3.org/1999/xhtml", se = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: fe,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }, le = function (t) {
        var n = t += "", e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), se.hasOwnProperty(n) ? {
            space: se[n],
            local: t
        } : t
    }, he = function (t) {
        var n = le(t);
        return (n.local ? function (t) {
            return function () {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        } : function (t) {
            return function () {
                var n = this.ownerDocument, e = this.namespaceURI;
                return e === fe && n.documentElement.namespaceURI === fe ? n.createElement(t) : n.createElementNS(e, t)
            }
        })(n)
    }, de = function (t) {
        return function () {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var pe = document.documentElement;
        if (!pe.matches) {
            var ge = pe.webkitMatchesSelector || pe.msMatchesSelector || pe.mozMatchesSelector || pe.oMatchesSelector;
            de = function (t) {
                return function () {
                    return ge.call(this, t)
                }
            }
        }
    }
    var ye = de, be = {}, ve = null;
    if ("undefined" != typeof document) {
        "onmouseenter" in document.documentElement || (be = {mouseenter: "mouseover", mouseleave: "mouseout"})
    }
    var me = function (t) {
        return null == t ? i : function () {
            return this.querySelector(t)
        }
    }, _e = function (t) {
        return null == t ? a : function () {
            return this.querySelectorAll(t)
        }
    }, we = function (t) {
        return new Array(t.length)
    };
    o.prototype = {
        constructor: o, appendChild: function (t) {
            return this._parent.insertBefore(t, this._next)
        }, insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n)
        }, querySelector: function (t) {
            return this._parent.querySelector(t)
        }, querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var xe = "$", Me = function (t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    d.prototype = {
        add: function (t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        }, remove: function (t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        }, contains: function (t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var Te = [null];
    M.prototype = T.prototype = {
        constructor: M, select: function (t) {
            "function" != typeof t && (t = me(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var a, o, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s) (a = u[s]) && (o = t.call(a, a.__data__, s, u)) && ("__data__" in a && (o.__data__ = a.__data__), f[s] = o);
            return new M(r, this._parents)
        }, selectAll: function (t) {
            "function" != typeof t && (t = _e(t));
            for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a) for (var o, u = n[a], c = u.length, f = 0; f < c; ++f) (o = u[f]) && (r.push(t.call(o, o.__data__, f, u)), i.push(o));
            return new M(r, i)
        }, filter: function (t) {
            "function" != typeof t && (t = ye(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f) (a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new M(r, this._parents)
        }, data: function (t, n) {
            if (!t) return g = new Array(this.size()), l = -1, this.each(function (t) {
                g[++l] = t
            }), g;
            var e = n ? c : u, r = this._parents, i = this._groups;
            "function" != typeof t && (t = function (t) {
                return function () {
                    return t
                }
            }(t));
            for (var a = i.length, o = new Array(a), f = new Array(a), s = new Array(a), l = 0; l < a; ++l) {
                var h = r[l], d = i[l], p = d.length, g = t.call(h, h && h.__data__, l, r), y = g.length,
                    b = f[l] = new Array(y), v = o[l] = new Array(y);
                e(h, d, b, v, s[l] = new Array(p), g, n);
                for (var m, _, w = 0, x = 0; w < y; ++w) if (m = b[w]) {
                    for (w >= x && (x = w + 1); !(_ = v[x]) && ++x < y;) ;
                    m._next = _ || null
                }
            }
            return o = new M(o, r), o._enter = f, o._exit = s, o
        }, enter: function () {
            return new M(this._enter || this._groups.map(we), this._parents)
        }, exit: function () {
            return new M(this._exit || this._groups.map(we), this._parents)
        }, merge: function (t) {
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d) (c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new M(o, this._parents)
        }, order: function () {
            for (var t = this._groups, n = -1, e = t.length; ++n < e;) for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;) (r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
            return this
        }, sort: function (t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }

            t || (t = f);
            for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
                for (var o, u = e[a], c = u.length, s = i[a] = new Array(c), l = 0; l < c; ++l) (o = u[l]) && (s[l] = o);
                s.sort(n)
            }
            return new M(i, this._parents).order()
        }, call: function () {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        }, nodes: function () {
            var t = new Array(this.size()), n = -1;
            return this.each(function () {
                t[++n] = this
            }), t
        }, node: function () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n) for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o) return o
            }
            return null
        }, size: function () {
            var t = 0;
            return this.each(function () {
                ++t
            }), t
        }, empty: function () {
            return !this.node()
        }, each: function (t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e) for (var i, a = n[e], o = 0, u = a.length; o < u; ++o) (i = a[o]) && t.call(i, i.__data__, o, a);
            return this
        }, attr: function (t, n) {
            var e = le(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? function (t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    this.removeAttribute(t)
                }
            } : "function" == typeof n ? e.local ? function (t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            } : function (t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            } : e.local ? function (t, n) {
                return function () {
                    this.setAttributeNS(t.space, t.local, n)
                }
            } : function (t, n) {
                return function () {
                    this.setAttribute(t, n)
                }
            })(e, n))
        }, style: function (t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? function (t) {
                return function () {
                    this.style.removeProperty(t)
                }
            } : "function" == typeof n ? function (t, n, e) {
                return function () {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            } : function (t, n, e) {
                return function () {
                    this.style.setProperty(t, n, e)
                }
            })(t, n, null == e ? "" : e)) : s(this.node(), t)
        }, property: function (t, n) {
            return arguments.length > 1 ? this.each((null == n ? function (t) {
                return function () {
                    delete this[t]
                }
            } : "function" == typeof n ? function (t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            } : function (t, n) {
                return function () {
                    this[t] = n
                }
            })(t, n)) : this.node()[t]
        }, classed: function (t, n) {
            var e = l(t + "");
            if (arguments.length < 2) {
                for (var r = h(this.node()), i = -1, a = e.length; ++i < a;) if (!r.contains(e[i])) return !1;
                return !0
            }
            return this.each(("function" == typeof n ? function (t, n) {
                return function () {
                    (n.apply(this, arguments) ? p : g)(this, t)
                }
            } : n ? function (t) {
                return function () {
                    p(this, t)
                }
            } : function (t) {
                return function () {
                    g(this, t)
                }
            })(e, n))
        }, text: function (t) {
            return arguments.length ? this.each(null == t ? y : ("function" == typeof t ? function (t) {
                return function () {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n
                }
            } : function (t) {
                return function () {
                    this.textContent = t
                }
            })(t)) : this.node().textContent
        }, html: function (t) {
            return arguments.length ? this.each(null == t ? b : ("function" == typeof t ? function (t) {
                return function () {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n
                }
            } : function (t) {
                return function () {
                    this.innerHTML = t
                }
            })(t)) : this.node().innerHTML
        }, raise: function () {
            return this.each(v)
        }, lower: function () {
            return this.each(m)
        }, append: function (t) {
            var n = "function" == typeof t ? t : he(t);
            return this.select(function () {
                return this.appendChild(n.apply(this, arguments))
            })
        }, insert: function (t, n) {
            var e = "function" == typeof t ? t : he(t), r = null == n ? _ : "function" == typeof n ? n : me(n);
            return this.select(function () {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        }, remove: function () {
            return this.each(w)
        }, datum: function (t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        }, on: function (t, n, i) {
            var a, o, u = function (t) {
                return t.trim().split(/^|\s+/).map(function (t) {
                    var n = "", e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
                })
            }(t + ""), c = u.length;
            {
                if (!(arguments.length < 2)) {
                    for (f = n ? r : e, null == i && (i = !1), a = 0; a < c; ++a) this.each(f(u[a], n, i));
                    return this
                }
                var f = this.node().__on;
                if (f) for (var s, l = 0, h = f.length; l < h; ++l) for (a = 0, s = f[l]; a < c; ++a) if ((o = u[a]).type === s.type && o.name === s.name) return s.value
            }
        }, dispatch: function (t, n) {
            return this.each(("function" == typeof n ? function (t, n) {
                return function () {
                    return x(this, t, n.apply(this, arguments))
                }
            } : function (t, n) {
                return function () {
                    return x(this, t, n)
                }
            })(t, n))
        }
    };
    var Ce = function (t) {
            return "string" == typeof t ? new M([[document.querySelector(t)]], [document.documentElement]) : new M([[t]], Te)
        }, Ae = function (t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }, Se = function (t) {
            return 1 === t.length && (t = function (t) {
                return function (n, e) {
                    return Ae(t(n), e)
                }
            }(t)), {
                left: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var a = r + i >>> 1;
                        t(n[a], e) < 0 ? r = a + 1 : i = a
                    }
                    return r
                }, right: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var a = r + i >>> 1;
                        t(n[a], e) > 0 ? i = a : r = a + 1
                    }
                    return r
                }
            }
        }(Ae).right, Ne = Math.sqrt(50), ke = Math.sqrt(10), De = Math.sqrt(2), Ue = function (t, n, e) {
            var r, i, a, o, u = -1;
            if (n = +n, t = +t, e = +e, t === n && e > 0) return [t];
            if ((r = n < t) && (i = t, t = n, n = i), 0 === (o = C(t, n, e)) || !isFinite(o)) return [];
            if (o > 0) for (t = Math.ceil(t / o), n = Math.floor(n / o), a = new Array(i = Math.ceil(n - t + 1)); ++u < i;) a[u] = (t + u) * o; else for (t = Math.floor(t * o), n = Math.ceil(n * o), a = new Array(i = Math.ceil(t - n + 1)); ++u < i;) a[u] = (t - u) / o;
            return r && a.reverse(), a
        }, Ee = Array.prototype, Pe = Ee.map, Fe = Ee.slice, Oe = function (t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        }, Ye = "\\s*([+-]?\\d+)\\s*", Le = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        je = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", He = /^#([0-9a-f]{3})$/, ze = /^#([0-9a-f]{6})$/,
        Ie = new RegExp("^rgb\\(" + [Ye, Ye, Ye] + "\\)$"), qe = new RegExp("^rgb\\(" + [je, je, je] + "\\)$"),
        Xe = new RegExp("^rgba\\(" + [Ye, Ye, Ye, Le] + "\\)$"),
        Re = new RegExp("^rgba\\(" + [je, je, je, Le] + "\\)$"), Ve = new RegExp("^hsl\\(" + [Le, je, je] + "\\)$"),
        Be = new RegExp("^hsla\\(" + [Le, je, je, Le] + "\\)$"), $e = {
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
    Oe(S, N, {
        displayable: function () {
            return this.rgb().displayable()
        }, toString: function () {
            return this.rgb() + ""
        }
    }), Oe(P, E, A(S, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new P(this.r * t, this.g * t, this.b * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new P(this.r * t, this.g * t, this.b * t, this.opacity)
        }, rgb: function () {
            return this
        }, displayable: function () {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        }, toString: function () {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    })), Oe(O, function (t, n, e, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof O) return new O(t.h, t.s, t.l, t.opacity);
            if (t instanceof S || (t = N(t)), !t) return new O;
            if (t instanceof O) return t;
            var n = (t = t.rgb()).r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r),
                o = NaN, u = a - i, c = (a + i) / 2;
            return u ? (o = n === a ? (e - r) / u + 6 * (e < r) : e === a ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? a + i : 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o, new O(o, u, c, t.opacity)
        }(t) : new O(t, n, e, null == r ? 1 : r)
    }, A(S, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new O(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new O(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n, i = 2 * e - r;
            return new P(Y(t >= 240 ? t - 240 : t + 120, i, r), Y(t, i, r), Y(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        }, displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var Ze = Math.PI / 180, We = 180 / Math.PI, Qe = .95047, Je = 1, Ge = 1.08883, Ke = 4 / 29, tr = 6 / 29,
        nr = 3 * tr * tr, er = tr * tr * tr;
    Oe(j, function (t, n, e, r) {
        return 1 === arguments.length ? L(t) : new j(t, n, e, null == r ? 1 : r)
    }, A(S, {
        brighter: function (t) {
            return new j(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, darker: function (t) {
            return new j(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, rgb: function () {
            var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
            return t = Je * z(t), n = Qe * z(n), e = Ge * z(e), new P(I(3.2404542 * n - 1.5371385 * t - .4985314 * e), I(-.969266 * n + 1.8760108 * t + .041556 * e), I(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
        }
    })), Oe(X, function (t, n, e, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof X) return new X(t.h, t.c, t.l, t.opacity);
            t instanceof j || (t = L(t));
            var n = Math.atan2(t.b, t.a) * We;
            return new X(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }(t) : new X(t, n, e, null == r ? 1 : r)
    }, A(S, {
        brighter: function (t) {
            return new X(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        }, darker: function (t) {
            return new X(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        }, rgb: function () {
            return L(this).rgb()
        }
    }));
    var rr = -.29227, ir = -.90649, ar = 1.97294, or = ar * ir, ur = 1.78277 * ar, cr = 1.78277 * rr - -.14861 * ir;
    Oe(V, R, A(S, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new V(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new V(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Ze, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t), i = Math.sin(t);
            return new P(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (rr * r + ir * i)), 255 * (n + e * (ar * r)), this.opacity)
        }
    }));
    var fr, sr, lr, hr, dr = function (t) {
            return function () {
                return t
            }
        }, pr = function t(n) {
            function e(t, n) {
                var e = r((t = E(t)).r, (n = E(n)).r), i = r(t.g, n.g), a = r(t.b, n.b), o = Z(t.opacity, n.opacity);
                return function (n) {
                    return t.r = e(n), t.g = i(n), t.b = a(n), t.opacity = o(n), t + ""
                }
            }

            var r = $(n);
            return e.gamma = t, e
        }(1), gr = function (t, n) {
            return t = +t, n -= t, function (e) {
                return t + n * e
            }
        }, yr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, br = new RegExp(yr.source, "g"), vr = function (t, n) {
            var e, r, i, a = yr.lastIndex = br.lastIndex = 0, o = -1, u = [], c = [];
            for (t += "", n += ""; (e = yr.exec(t)) && (r = br.exec(n));) (i = r.index) > a && (i = n.slice(a, i), u[o] ? u[o] += i : u[++o] = i), (e = e[0]) === (r = r[0]) ? u[o] ? u[o] += r : u[++o] = r : (u[++o] = null, c.push({
                i: o,
                x: gr(e, r)
            })), a = br.lastIndex;
            return a < n.length && (i = n.slice(a), u[o] ? u[o] += i : u[++o] = i), u.length < 2 ? c[0] ? function (t) {
                return function (n) {
                    return t(n) + ""
                }
            }(c[0].x) : function (t) {
                return function () {
                    return t
                }
            }(n) : (n = c.length, function (t) {
                for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);
                return u.join("")
            })
        }, mr = function (t, n) {
            var e, r = typeof n;
            return null == n || "boolean" === r ? dr(n) : ("number" === r ? gr : "string" === r ? (e = N(n)) ? (n = e, pr) : vr : n instanceof N ? pr : n instanceof Date ? function (t, n) {
                var e = new Date;
                return t = +t, n -= t, function (r) {
                    return e.setTime(t + n * r), e
                }
            } : Array.isArray(n) ? function (t, n) {
                var e, r = n ? n.length : 0, i = t ? Math.min(r, t.length) : 0, a = new Array(i), o = new Array(r);
                for (e = 0; e < i; ++e) a[e] = mr(t[e], n[e]);
                for (; e < r; ++e) o[e] = n[e];
                return function (t) {
                    for (e = 0; e < i; ++e) o[e] = a[e](t);
                    return o
                }
            } : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? function (t, n) {
                var e, r = {}, i = {};
                null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
                for (e in n) e in t ? r[e] = mr(t[e], n[e]) : i[e] = n[e];
                return function (t) {
                    for (e in r) i[e] = r[e](t);
                    return i
                }
            } : gr)(t, n)
        }, _r = function (t, n) {
            return t = +t, n -= t, function (e) {
                return Math.round(t + n * e)
            }
        }, wr = 180 / Math.PI, xr = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1},
        Mr = function (t, n, e, r, i, a) {
            var o, u, c;
            return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, o = -o), {
                translateX: i,
                translateY: a,
                rotate: Math.atan2(n, t) * wr,
                skewX: Math.atan(c) * wr,
                scaleX: o,
                scaleY: u
            }
        }, Tr = W(function (t) {
            return "none" === t ? xr : (fr || (fr = document.createElement("DIV"), sr = document.documentElement, lr = document.defaultView), fr.style.transform = t, t = lr.getComputedStyle(sr.appendChild(fr), null).getPropertyValue("transform"), sr.removeChild(fr), t = t.slice(7, -1).split(","), Mr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }, "px, ", "px)", "deg)"), Cr = W(function (t) {
            return null == t ? xr : (hr || (hr = document.createElementNS("http://www.w3.org/2000/svg", "g")), hr.setAttribute("transform", t), (t = hr.transform.baseVal.consolidate()) ? (t = t.matrix, Mr(t.a, t.b, t.c, t.d, t.e, t.f)) : xr)
        }, ", ", ")", ")");
    Q(function (t, n) {
        var e = n - t;
        return e ? B(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : dr(isNaN(t) ? n : t)
    });
    var Ar, Sr = Q(Z), Nr = function (t) {
        return function () {
            return t
        }
    }, kr = function (t) {
        return +t
    }, Dr = [0, 1], Ur = function (t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    }, Er = function (t) {
        return (t = Ur(Math.abs(t))) ? t[1] : NaN
    }, Pr = function (t, n) {
        var e = Ur(t, n);
        if (!e) return t + "";
        var r = e[0], i = e[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    }, Fr = {
        "": function (t, n) {
            t:for (var e, r = (t = t.toPrecision(n)).length, i = 1, a = -1; i < r; ++i) switch (t[i]) {
                case".":
                    a = e = i;
                    break;
                case"0":
                    0 === a && (a = i), e = i;
                    break;
                case"e":
                    break t;
                default:
                    a > 0 && (a = 0)
            }
            return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
        }, "%": function (t, n) {
            return (100 * t).toFixed(n)
        }, b: function (t) {
            return Math.round(t).toString(2)
        }, c: function (t) {
            return t + ""
        }, d: function (t) {
            return Math.round(t).toString(10)
        }, e: function (t, n) {
            return t.toExponential(n)
        }, f: function (t, n) {
            return t.toFixed(n)
        }, g: function (t, n) {
            return t.toPrecision(n)
        }, o: function (t) {
            return Math.round(t).toString(8)
        }, p: function (t, n) {
            return Pr(100 * t, n)
        }, r: Pr, s: function (t, n) {
            var e = Ur(t, n);
            if (!e) return t + "";
            var r = e[0], i = e[1], a = i - (Ar = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, o = r.length;
            return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ur(t, Math.max(0, n + a - 1))[0]
        }, X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
            return Math.round(t).toString(16)
        }
    }, Or = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    et.prototype = rt.prototype, rt.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var Yr, Lr, jr, Hr = function (t) {
        return t
    }, zr = ["y", "z", "a", "f", "p", "n", "�", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Ir = function (t) {
        function n(t) {
            function n(t) {
                var n, r, o, s = y, _ = b;
                if ("c" === g) _ = v(t) + _, t = ""; else {
                    var w = (t = +t) < 0;
                    if (t = v(Math.abs(t), p), w && 0 == +t && (w = !1), s = (w ? "(" === f ? f : "-" : "-" === f || "(" === f ? "" : f) + s, _ = _ + ("s" === g ? zr[8 + Ar / 3] : "") + (w && "(" === f ? ")" : ""), m) for (n = -1, r = t.length; ++n < r;) if (48 > (o = t.charCodeAt(n)) || o > 57) {
                        _ = (46 === o ? i + t.slice(n + 1) : t.slice(n)) + _, t = t.slice(0, n);
                        break
                    }
                }
                d && !l && (t = e(t, 1 / 0));
                var x = s.length + t.length + _.length, M = x < h ? new Array(h - x + 1).join(u) : "";
                switch (d && l && (t = e(M + t, M.length ? h - _.length : 1 / 0), M = ""), c) {
                    case"<":
                        t = s + t + _ + M;
                        break;
                    case"=":
                        t = s + M + t + _;
                        break;
                    case"^":
                        t = M.slice(0, x = M.length >> 1) + s + t + _ + M.slice(x);
                        break;
                    default:
                        t = M + s + t + _
                }
                return a(t)
            }

            var u = (t = et(t)).fill, c = t.align, f = t.sign, s = t.symbol, l = t.zero, h = t.width, d = t.comma,
                p = t.precision, g = t.type,
                y = "$" === s ? r[0] : "#" === s && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
                b = "$" === s ? r[1] : /[%p]/.test(g) ? o : "", v = Fr[g], m = !g || /[defgprs%]/.test(g);
            return p = null == p ? g ? 6 : 12 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)), n.toString = function () {
                return t + ""
            }, n
        }

        var e = t.grouping && t.thousands ? function (t, n) {
            return function (e, r) {
                for (var i = e.length, a = [], o = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), a.push(e.substring(i -= u, i + u)), !((c += u + 1) > r));) u = t[o = (o + 1) % t.length];
                return a.reverse().join(n)
            }
        }(t.grouping, t.thousands) : Hr, r = t.currency, i = t.decimal, a = t.numerals ? function (t) {
            return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                    return t[+n]
                })
            }
        }(t.numerals) : Hr, o = t.percent || "%";
        return {
            format: n, formatPrefix: function (t, e) {
                var r = n((t = et(t), t.type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(Er(e) / 3))),
                    a = Math.pow(10, -i), o = zr[8 + i / 3];
                return function (t) {
                    return r(a * t) + o
                }
            }
        }
    };
    !function (t) {
        Yr = Ir(t), Lr = Yr.format, jr = Yr.formatPrefix
    }({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]});
    var qr = function (t, n, e) {
        var r, i = t[0], a = t[t.length - 1], o = function (t, n, e) {
            var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
            return a >= Ne ? i *= 10 : a >= ke ? i *= 5 : a >= De && (i *= 2), n < t ? -i : i
        }(i, a, null == n ? 10 : n);
        switch ((e = et(null == e ? ",f" : e)).type) {
            case"s":
                var u = Math.max(Math.abs(i), Math.abs(a));
                return null != e.precision || isNaN(r = function (t, n) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Er(n) / 3))) - Er(Math.abs(t)))
                }(o, u)) || (e.precision = r), jr(e, u);
            case"":
            case"e":
            case"g":
            case"p":
            case"r":
                null != e.precision || isNaN(r = function (t, n) {
                    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Er(n) - Er(t)) + 1
                }(o, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));
                break;
            case"f":
            case"%":
                null != e.precision || isNaN(r = function (t) {
                    return Math.max(0, -Er(Math.abs(t)))
                }(o)) || (e.precision = r - 2 * ("%" === e.type))
        }
        return Lr(e)
    }, Xr = new Date, Rr = new Date, Vr = ct(function () {
    }, function (t, n) {
        t.setTime(+t + n)
    }, function (t, n) {
        return n - t
    });
    Vr.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? ct(function (n) {
            n.setTime(Math.floor(n / t) * t)
        }, function (n, e) {
            n.setTime(+n + e * t)
        }, function (n, e) {
            return (e - n) / t
        }) : Vr : null
    };
    var Br = 6e4, $r = 6048e5, Zr = (ct(function (t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
    }, function (t, n) {
        t.setTime(+t + 1e3 * n)
    }, function (t, n) {
        return (n - t) / 1e3
    }, function (t) {
        return t.getUTCSeconds()
    }), ct(function (t) {
        t.setTime(Math.floor(t / Br) * Br)
    }, function (t, n) {
        t.setTime(+t + n * Br)
    }, function (t, n) {
        return (n - t) / Br
    }, function (t) {
        return t.getMinutes()
    }), ct(function (t) {
        var n = t.getTimezoneOffset() * Br % 36e5;
        n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
    }, function (t, n) {
        t.setTime(+t + 36e5 * n)
    }, function (t, n) {
        return (n - t) / 36e5
    }, function (t) {
        return t.getHours()
    }), ct(function (t) {
        t.setHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setDate(t.getDate() + n)
    }, function (t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Br) / 864e5
    }, function (t) {
        return t.getDate() - 1
    })), Wr = ft(0), Qr = ft(1), Jr = (ft(2), ft(3), ft(4)), Gr = (ft(5), ft(6), ct(function (t) {
        t.setDate(1), t.setHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setMonth(t.getMonth() + n)
    }, function (t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    }, function (t) {
        return t.getMonth()
    }), ct(function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setFullYear(t.getFullYear() + n)
    }, function (t, n) {
        return n.getFullYear() - t.getFullYear()
    }, function (t) {
        return t.getFullYear()
    }));
    Gr.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? ct(function (n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
        }, function (n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    ct(function (t) {
        t.setUTCSeconds(0, 0)
    }, function (t, n) {
        t.setTime(+t + n * Br)
    }, function (t, n) {
        return (n - t) / Br
    }, function (t) {
        return t.getUTCMinutes()
    }), ct(function (t) {
        t.setUTCMinutes(0, 0, 0)
    }, function (t, n) {
        t.setTime(+t + 36e5 * n)
    }, function (t, n) {
        return (n - t) / 36e5
    }, function (t) {
        return t.getUTCHours()
    });
    var Kr = ct(function (t) {
        t.setUTCHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setUTCDate(t.getUTCDate() + n)
    }, function (t, n) {
        return (n - t) / 864e5
    }, function (t) {
        return t.getUTCDate() - 1
    }), ti = st(0), ni = st(1), ei = (st(2), st(3), st(4)), ri = (st(5), st(6), ct(function (t) {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
    }, function (t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    }, function (t) {
        return t.getUTCMonth()
    }), ct(function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
    }, function (t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
    }, function (t) {
        return t.getUTCFullYear()
    }));
    ri.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? ct(function (n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
        }, function (n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var ii, ai, oi, ui = {"-": "", _: " ", 0: "0"}, ci = /^\s*\d+/, fi = /^%/, si = /[\\^$*+?|[\]().{}]/g;
    !function (t) {
        ii = function (t) {
            function n(t, n) {
                return function (e) {
                    var r, i, a, o = [], u = -1, c = 0, f = t.length;
                    for (e instanceof Date || (e = new Date(+e)); ++u < f;) 37 === t.charCodeAt(u) && (o.push(t.slice(c, u)), null != (i = ui[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (a = n[r]) && (r = a(e, i)), o.push(r), c = u + 1);
                    return o.push(t.slice(c, u)), o.join("")
                }
            }

            function e(t, n) {
                return function (e) {
                    var i, a, o = dt(1900);
                    if (r(o, t, e += "", 0) != e.length) return null;
                    if ("Q" in o) return new Date(o.Q);
                    if ("p" in o && (o.H = o.H % 12 + 12 * o.p), "V" in o) {
                        if (o.V < 1 || o.V > 53) return null;
                        "w" in o || (o.w = 1), "Z" in o ? (i = (a = (i = ht(dt(o.y))).getUTCDay()) > 4 || 0 === a ? ni.ceil(i) : ni(i), i = Kr.offset(i, 7 * (o.V - 1)), o.y = i.getUTCFullYear(), o.m = i.getUTCMonth(), o.d = i.getUTCDate() + (o.w + 6) % 7) : (i = (a = (i = n(dt(o.y))).getDay()) > 4 || 0 === a ? Qr.ceil(i) : Qr(i), i = Zr.offset(i, 7 * (o.V - 1)), o.y = i.getFullYear(), o.m = i.getMonth(), o.d = i.getDate() + (o.w + 6) % 7)
                    } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), a = "Z" in o ? ht(dt(o.y)).getUTCDay() : n(dt(o.y)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (a + 5) % 7 : o.w + 7 * o.U - (a + 6) % 7);
                    return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, ht(o)) : n(o)
                }
            }

            function r(t, n, e, r) {
                for (var i, a, o = 0, u = n.length, c = e.length; o < u;) {
                    if (r >= c) return -1;
                    if (37 === (i = n.charCodeAt(o++))) {
                        if (i = n.charAt(o++), !(a = T[i in ui ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0) return -1
                    } else if (i != e.charCodeAt(r++)) return -1
                }
                return r
            }

            var i = t.dateTime, a = t.date, o = t.time, u = t.periods, c = t.days, f = t.shortDays, s = t.months,
                l = t.shortMonths, h = yt(u), d = bt(u), p = yt(c), g = bt(c), y = yt(f), b = bt(f), v = yt(s),
                m = bt(s), _ = yt(l), w = bt(l), x = {
                    a: function (t) {
                        return f[t.getDay()]
                    },
                    A: function (t) {
                        return c[t.getDay()]
                    },
                    b: function (t) {
                        return l[t.getMonth()]
                    },
                    B: function (t) {
                        return s[t.getMonth()]
                    },
                    c: null,
                    d: Lt,
                    e: Lt,
                    f: qt,
                    H: jt,
                    I: Ht,
                    j: zt,
                    L: It,
                    m: Xt,
                    M: Rt,
                    p: function (t) {
                        return u[+(t.getHours() >= 12)]
                    },
                    Q: mn,
                    s: _n,
                    S: Vt,
                    u: Bt,
                    U: $t,
                    V: Zt,
                    w: Wt,
                    W: Qt,
                    x: null,
                    X: null,
                    y: Jt,
                    Y: Gt,
                    Z: Kt,
                    "%": vn
                }, M = {
                    a: function (t) {
                        return f[t.getUTCDay()]
                    },
                    A: function (t) {
                        return c[t.getUTCDay()]
                    },
                    b: function (t) {
                        return l[t.getUTCMonth()]
                    },
                    B: function (t) {
                        return s[t.getUTCMonth()]
                    },
                    c: null,
                    d: tn,
                    e: tn,
                    f: on,
                    H: nn,
                    I: en,
                    j: rn,
                    L: an,
                    m: un,
                    M: cn,
                    p: function (t) {
                        return u[+(t.getUTCHours() >= 12)]
                    },
                    Q: mn,
                    s: _n,
                    S: fn,
                    u: sn,
                    U: ln,
                    V: hn,
                    w: dn,
                    W: pn,
                    x: null,
                    X: null,
                    y: gn,
                    Y: yn,
                    Z: bn,
                    "%": vn
                }, T = {
                    a: function (t, n, e) {
                        var r = y.exec(n.slice(e));
                        return r ? (t.w = b[r[0].toLowerCase()], e + r[0].length) : -1
                    }, A: function (t, n, e) {
                        var r = p.exec(n.slice(e));
                        return r ? (t.w = g[r[0].toLowerCase()], e + r[0].length) : -1
                    }, b: function (t, n, e) {
                        var r = _.exec(n.slice(e));
                        return r ? (t.m = w[r[0].toLowerCase()], e + r[0].length) : -1
                    }, B: function (t, n, e) {
                        var r = v.exec(n.slice(e));
                        return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1
                    }, c: function (t, n, e) {
                        return r(t, i, n, e)
                    }, d: St, e: St, f: Pt, H: kt, I: kt, j: Nt, L: Et, m: At, M: Dt, p: function (t, n, e) {
                        var r = h.exec(n.slice(e));
                        return r ? (t.p = d[r[0].toLowerCase()], e + r[0].length) : -1
                    }, Q: Ot, s: Yt, S: Ut, u: mt, U: _t, V: wt, w: vt, W: xt, x: function (t, n, e) {
                        return r(t, a, n, e)
                    }, X: function (t, n, e) {
                        return r(t, o, n, e)
                    }, y: Tt, Y: Mt, Z: Ct, "%": Ft
                };
            return x.x = n(a, x), x.X = n(o, x), x.c = n(i, x), M.x = n(a, M), M.X = n(o, M), M.c = n(i, M), {
                format: function (t) {
                    var e = n(t += "", x);
                    return e.toString = function () {
                        return t
                    }, e
                }, parse: function (t) {
                    var n = e(t += "", lt);
                    return n.toString = function () {
                        return t
                    }, n
                }, utcFormat: function (t) {
                    var e = n(t += "", M);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcParse: function (t) {
                    var n = e(t, ht);
                    return n.toString = function () {
                        return t
                    }, n
                }
            }
        }(t), ai = ii.utcFormat, oi = ii.utcParse
    }({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var li = "%Y-%m-%dT%H:%M:%S.%LZ",
        hi = (Date.prototype.toISOString || ai(li), +new Date("2000-01-01T00:00:00.000Z") || oi(li), function (t) {
            return t.match(/.{6}/g).map(function (t) {
                return "#" + t
            })
        });
    hi("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), hi("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), hi("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), hi("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Sr(R(300, .5, 0), R(-240, .5, 1));
    Sr(R(-100, .75, .35), R(80, 1.5, .8)), Sr(R(260, .75, .35), R(80, 1.5, .8)), R();
    wn(hi("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    wn(hi("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), wn(hi("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), wn(hi("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    Sn.prototype = Mn.prototype = {
        constructor: Sn, count: function () {
            return this.eachAfter(xn)
        }, each: function (t) {
            var n, e, r, i, a = this, o = [a];
            do {
                for (n = o.reverse(), o = []; a = n.pop();) if (t(a), e = a.children) for (r = 0, i = e.length; r < i; ++r) o.push(e[r])
            } while (o.length);
            return this
        }, eachAfter: function (t) {
            for (var n, e, r, i = this, a = [i], o = []; i = a.pop();) if (o.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) a.push(n[e]);
            for (; i = o.pop();) t(i);
            return this
        }, eachBefore: function (t) {
            for (var n, e, r = this, i = [r]; r = i.pop();) if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        }, sum: function (t) {
            return this.eachAfter(function (n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        }, sort: function (t) {
            return this.eachBefore(function (n) {
                n.children && n.children.sort(t)
            })
        }, path: function (t) {
            for (var n = this, e = function (t, n) {
                if (t === n) return t;
                var e = t.ancestors(), r = n.ancestors(), i = null;
                for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
                return i
            }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
            return r
        }, ancestors: function () {
            for (var t = this, n = [t]; t = t.parent;) n.push(t);
            return n
        }, descendants: function () {
            var t = [];
            return this.each(function (n) {
                t.push(n)
            }), t
        }, leaves: function () {
            var t = [];
            return this.eachBefore(function (n) {
                n.children || t.push(n)
            }), t
        }, links: function () {
            var t = this, n = [];
            return t.each(function (e) {
                e !== t && n.push({source: e.parent, target: e})
            }), n
        }, copy: function () {
            return Mn(this).eachBefore(Cn)
        }
    };
    var di = function (t) {
        t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
    }, pi = function (t, n, e, r, i) {
        for (var a, o = t.children, u = -1, c = o.length, f = t.value && (r - n) / t.value; ++u < c;) (a = o[u]).y0 = e, a.y1 = i, a.x0 = n, a.x1 = n += a.value * f
    }, gi = function () {
        function t(t) {
            var a = t.height + 1;
            return t.x0 = t.y0 = r, t.x1 = n, t.y1 = e / a, t.eachBefore(function (t, n) {
                return function (e) {
                    e.children && pi(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                    var i = e.x0, a = e.y0, o = e.x1 - r, u = e.y1 - r;
                    o < i && (i = o = (i + o) / 2), u < a && (a = u = (a + u) / 2), e.x0 = i, e.y0 = a, e.x1 = o, e.y1 = u
                }
            }(e, a)), i && t.eachBefore(di), t
        }

        var n = 1, e = 1, r = 0, i = !1;
        return t.round = function (n) {
            return arguments.length ? (i = !!n, t) : i
        }, t.size = function (r) {
            return arguments.length ? (n = +r[0], e = +r[1], t) : [n, e]
        }, t.padding = function (n) {
            return arguments.length ? (r = +n, t) : r
        }, t
    }, yi = Math.PI, bi = 2 * yi, vi = bi - 1e-6;
    Nn.prototype = kn.prototype = {
        constructor: Nn, moveTo: function (t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        }, closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        }, lineTo: function (t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        }, quadraticCurveTo: function (t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        }, bezierCurveTo: function (t, n, e, r, i, a) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
        }, arcTo: function (t, n, e, r, i) {
            t = +t, n = +n, e = +e, r = +r, i = +i;
            var a = this._x1, o = this._y1, u = e - t, c = r - n, f = a - t, s = o - n, l = f * f + s * s;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n); else if (l > 1e-6) if (Math.abs(s * u - c * f) > 1e-6 && i) {
                var h = e - a, d = r - o, p = u * u + c * c, g = h * h + d * d, y = Math.sqrt(p), b = Math.sqrt(l),
                    v = i * Math.tan((yi - Math.acos((p + l - g) / (2 * y * b))) / 2), m = v / b, _ = v / y;
                Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * f) + "," + (n + m * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + _ * u) + "," + (this._y1 = n + _ * c)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n); else ;
        }, arc: function (t, n, e, r, i, a) {
            t = +t, n = +n;
            var o = (e = +e) * Math.cos(r), u = e * Math.sin(r), c = t + o, f = n + u, s = 1 ^ a, l = a ? r - i : i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % bi + bi), l > vi ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - o) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= yi) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        }, rect: function (t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
        }, toString: function () {
            return this._
        }
    };
    var mi = function (t) {
            return function () {
                return t
            }
        }, _i = Math.abs, wi = Math.atan2, xi = Math.cos, Mi = Math.max, Ti = Math.min, Ci = Math.sin, Ai = Math.sqrt,
        Si = 1e-12, Ni = Math.PI, ki = Ni / 2, Di = 2 * Ni, Ui = function () {
            function t() {
                var t, f, s = +n.apply(this, arguments), l = +e.apply(this, arguments), h = a.apply(this, arguments) - ki,
                    d = o.apply(this, arguments) - ki, p = _i(d - h), g = d > h;
                if (c || (c = t = kn()), l < s && (f = l, l = s, s = f), l > Si) if (p > Di - Si) c.moveTo(l * xi(h), l * Ci(h)), c.arc(0, 0, l, h, d, !g), s > Si && (c.moveTo(s * xi(d), s * Ci(d)), c.arc(0, 0, s, d, h, g)); else {
                    var y, b, v = h, m = d, _ = h, w = d, x = p, M = p, T = u.apply(this, arguments) / 2,
                        C = T > Si && (i ? +i.apply(this, arguments) : Ai(s * s + l * l)),
                        A = Ti(_i(l - s) / 2, +r.apply(this, arguments)), S = A, N = A;
                    if (C > Si) {
                        var k = Dn(C / s * Ci(T)), D = Dn(C / l * Ci(T));
                        (x -= 2 * k) > Si ? (k *= g ? 1 : -1, _ += k, w -= k) : (x = 0, _ = w = (h + d) / 2), (M -= 2 * D) > Si ? (D *= g ? 1 : -1, v += D, m -= D) : (M = 0, v = m = (h + d) / 2)
                    }
                    var U = l * xi(v), E = l * Ci(v), P = s * xi(w), F = s * Ci(w);
                    if (A > Si) {
                        var O = l * xi(m), Y = l * Ci(m), L = s * xi(_), j = s * Ci(_);
                        if (p < Ni) {
                            var H = x > Si ? function (t, n, e, r, i, a, o, u) {
                                    var c = e - t, f = r - n, s = o - i, l = u - a,
                                        h = (s * (n - a) - l * (t - i)) / (l * c - s * f);
                                    return [t + h * c, n + h * f]
                                }(U, E, L, j, O, Y, P, F) : [P, F], z = U - H[0], I = E - H[1], q = O - H[0], X = Y - H[1],
                                R = 1 / Ci(function (t) {
                                    return t > 1 ? 0 : t < -1 ? Ni : Math.acos(t)
                                }((z * q + I * X) / (Ai(z * z + I * I) * Ai(q * q + X * X))) / 2),
                                V = Ai(H[0] * H[0] + H[1] * H[1]);
                            S = Ti(A, (s - V) / (R - 1)), N = Ti(A, (l - V) / (R + 1))
                        }
                    }
                    M > Si ? N > Si ? (y = Yn(L, j, U, E, l, N, g), b = Yn(O, Y, P, F, l, N, g), c.moveTo(y.cx + y.x01, y.cy + y.y01), N < A ? c.arc(y.cx, y.cy, N, wi(y.y01, y.x01), wi(b.y01, b.x01), !g) : (c.arc(y.cx, y.cy, N, wi(y.y01, y.x01), wi(y.y11, y.x11), !g), c.arc(0, 0, l, wi(y.cy + y.y11, y.cx + y.x11), wi(b.cy + b.y11, b.cx + b.x11), !g), c.arc(b.cx, b.cy, N, wi(b.y11, b.x11), wi(b.y01, b.x01), !g))) : (c.moveTo(U, E), c.arc(0, 0, l, v, m, !g)) : c.moveTo(U, E), s > Si && x > Si ? S > Si ? (y = Yn(P, F, O, Y, s, -S, g), b = Yn(U, E, L, j, s, -S, g), c.lineTo(y.cx + y.x01, y.cy + y.y01), S < A ? c.arc(y.cx, y.cy, S, wi(y.y01, y.x01), wi(b.y01, b.x01), !g) : (c.arc(y.cx, y.cy, S, wi(y.y01, y.x01), wi(y.y11, y.x11), !g), c.arc(0, 0, s, wi(y.cy + y.y11, y.cx + y.x11), wi(b.cy + b.y11, b.cx + b.x11), g), c.arc(b.cx, b.cy, S, wi(b.y11, b.x11), wi(b.y01, b.x01), !g))) : c.arc(0, 0, s, w, _, g) : c.lineTo(P, F)
                } else c.moveTo(0, 0);
                if (c.closePath(), t) return c = null, t + "" || null
            }

            var n = Un, e = En, r = mi(0), i = null, a = Pn, o = Fn, u = On, c = null;
            return t.centroid = function () {
                var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                    r = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ni / 2;
                return [xi(r) * t, Ci(r) * t]
            }, t.innerRadius = function (e) {
                return arguments.length ? (n = "function" == typeof e ? e : mi(+e), t) : n
            }, t.outerRadius = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : mi(+n), t) : e
            }, t.cornerRadius = function (n) {
                return arguments.length ? (r = "function" == typeof n ? n : mi(+n), t) : r
            }, t.padRadius = function (n) {
                return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : mi(+n), t) : i
            }, t.startAngle = function (n) {
                return arguments.length ? (a = "function" == typeof n ? n : mi(+n), t) : a
            }, t.endAngle = function (n) {
                return arguments.length ? (o = "function" == typeof n ? n : mi(+n), t) : o
            }, t.padAngle = function (n) {
                return arguments.length ? (u = "function" == typeof n ? n : mi(+n), t) : u
            }, t.context = function (n) {
                return arguments.length ? (c = null == n ? null : n, t) : c
            }, t
        };
    In.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    zn(this, this._t0, Hn(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, zn(this, Hn(this, e = jn(this, t, n)), e);
                        break;
                    default:
                        zn(this, this._t0, e = jn(this, t, n))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
            }
        }
    }, (function (t) {
        this._context = new qn(t)
    }.prototype = Object.create(In.prototype)).point = function (t, n) {
        In.prototype.point.call(this, n, t)
    }, qn.prototype = {
        moveTo: function (t, n) {
            this._context.moveTo(n, t)
        }, closePath: function () {
            this._context.closePath()
        }, lineTo: function (t, n) {
            this._context.lineTo(n, t)
        }, bezierCurveTo: function (t, n, e, r, i, a) {
            this._context.bezierCurveTo(n, t, r, e, a, i)
        }
    };
    var Ei = {
        value: function () {
        }
    };
    Rn.prototype = Xn.prototype = {
        constructor: Rn, on: function (t, n) {
            var e, r = this._, i = function (t, n) {
                return t.trim().split(/^|\s+/).map(function (t) {
                    var e = "", r = t.indexOf(".");
                    if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    return {type: t, name: e}
                })
            }(t + "", r), a = -1, o = i.length;
            {
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++a < o;) if (e = (t = i[a]).type) r[e] = Vn(r[e], t.name, n); else if (null == n) for (e in r) r[e] = Vn(r[e], t.name, null);
                    return this
                }
                for (; ++a < o;) if ((e = (t = i[a]).type) && (e = function (t, n) {
                        for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
                    }(r[e], t.name))) return e
            }
        }, copy: function () {
            var t = {}, n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new Rn(t)
        }, call: function (t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), a = 0; a < e; ++a) i[a] = arguments[a + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (a = 0, e = (r = this._[t]).length; a < e; ++a) r[a].value.apply(n, i)
        }, apply: function (t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e)
        }
    };
    var Pi, Fi, Oi = 0, Yi = 0, Li = 0, ji = 1e3, Hi = 0, zi = 0, Ii = 0,
        qi = "object" == typeof performance && performance.now ? performance : Date,
        Xi = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
            setTimeout(t, 17)
        };
    Zn.prototype = Wn.prototype = {
        constructor: Zn, restart: function (t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? Bn() : +e) + (null == n ? 0 : +n), this._next || Fi === this || (Fi ? Fi._next = this : Pi = this, Fi = this), this._call = t, this._time = e, Gn()
        }, stop: function () {
            this._call && (this._call = null, this._time = 1 / 0, Gn())
        }
    };
    var Ri = function (t, n, e) {
            var r = new Zn;
            return n = null == n ? 0 : +n, r.restart(function (e) {
                r.stop(), t(e + n)
            }, n, e), r
        }, Vi = Xn("start", "end", "interrupt"), Bi = [], $i = 0, Zi = 1, Wi = 2, Qi = 3, Ji = 4, Gi = 5, Ki = 6,
        ta = function (t, n, e, r, i, a) {
            var o = t.__transition;
            if (o) {
                if (e in o) return
            } else t.__transition = {};
            !function (t, n, e) {
                function r(c) {
                    var f, s, l, h;
                    if (e.state !== Zi) return a();
                    for (f in u) if ((h = u[f]).name === e.name) {
                        if (h.state === Qi) return Ri(r);
                        h.state === Ji ? (h.state = Ki, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete u[f]) : +f < n && (h.state = Ki, h.timer.stop(), delete u[f])
                    }
                    if (Ri(function () {
                            e.state === Qi && (e.state = Ji, e.timer.restart(i, e.delay, e.time), i(c))
                        }), e.state = Wi, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Wi) {
                        for (e.state = Qi, o = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f) (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (o[++s] = h);
                        o.length = s + 1
                    }
                }

                function i(n) {
                    for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = Gi, 1), i = -1, u = o.length; ++i < u;) o[i].call(null, r);
                    e.state === Gi && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                }

                function a() {
                    e.state = Ki, e.timer.stop(), delete u[n];
                    for (var r in u) return;
                    delete t.__transition
                }

                var o, u = t.__transition;
                u[n] = e, e.timer = Wn(function (t) {
                    e.state = Zi, e.timer.restart(r, e.delay, e.time), e.delay <= t && r(t - e.delay)
                }, 0, e.time)
            }(t, e, {
                name: n,
                index: r,
                group: i,
                on: Vi,
                tween: Bi,
                time: a.time,
                delay: a.delay,
                duration: a.duration,
                ease: a.ease,
                timer: null,
                state: $i
            })
        }, na = function (t, n) {
            var e;
            return ("number" == typeof n ? gr : n instanceof N ? pr : (e = N(n)) ? (n = e, pr) : vr)(t, n)
        }, ea = T.prototype.constructor, ra = 0, ia = T.prototype;
    re.prototype = ie.prototype = {
        constructor: re,
        select: function (t) {
            var n = this._name, e = this._id;
            "function" != typeof t && (t = me(t));
            for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o) for (var u, c, f = r[o], s = f.length, l = a[o] = new Array(s), h = 0; h < s; ++h) (u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, ta(l[h], n, e, h, l, ne(u, e)));
            return new re(a, this._parents, n, e)
        },
        selectAll: function (t) {
            var n = this._name, e = this._id;
            "function" != typeof t && (t = _e(t));
            for (var r = this._groups, i = r.length, a = [], o = [], u = 0; u < i; ++u) for (var c, f = r[u], s = f.length, l = 0; l < s; ++l) if (c = f[l]) {
                for (var h, d = t.call(c, c.__data__, l, f), p = ne(c, e), g = 0, y = d.length; g < y; ++g) (h = d[g]) && ta(h, n, e, g, d, p);
                a.push(d), o.push(c)
            }
            return new re(a, o, n, e)
        },
        filter: function (t) {
            "function" != typeof t && (t = ye(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var a, o = n[i], u = o.length, c = r[i] = [], f = 0; f < u; ++f) (a = o[f]) && t.call(a, a.__data__, f, o) && c.push(a);
            return new re(r, this._parents, this._name, this._id)
        },
        merge: function (t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = o[u] = new Array(l), d = 0; d < l; ++d) (c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u) o[u] = n[u];
            return new re(o, this._parents, this._name, this._id)
        },
        selection: function () {
            return new ea(this._groups, this._parents)
        },
        transition: function () {
            for (var t = this._name, n = this._id, e = ae(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f) if (o = u[f]) {
                var s = ne(o, n);
                ta(o, t, e, f, u, {time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease})
            }
            return new re(r, this._parents, t, e)
        },
        call: ia.call,
        nodes: ia.nodes,
        node: ia.node,
        size: ia.size,
        empty: ia.empty,
        each: ia.each,
        on: function (t, n) {
            var e = this._id;
            return arguments.length < 2 ? ne(this.node(), e).on.on(t) : this.each(function (t, n, e) {
                var r, i, a = function (t) {
                    return (t + "").trim().split(/^|\s+/).every(function (t) {
                        var n = t.indexOf(".");
                        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                    })
                }(n) ? Kn : te;
                return function () {
                    var o = a(this, t), u = o.on;
                    u !== r && (i = (r = u).copy()).on(n, e), o.on = i
                }
            }(e, t, n))
        },
        attr: function (t, n) {
            var e = le(t), r = "transform" === e ? Cr : na;
            return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
                var r, i, a;
                return function () {
                    var o, u = e(this);
                    if (null != u) return (o = this.getAttributeNS(t.space, t.local)) === u ? null : o === r && u === i ? a : a = n(r = o, i = u);
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t, n, e) {
                var r, i, a;
                return function () {
                    var o, u = e(this);
                    if (null != u) return (o = this.getAttribute(t)) === u ? null : o === r && u === i ? a : a = n(r = o, i = u);
                    this.removeAttribute(t)
                }
            })(e, r, ee(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    this.removeAttribute(t)
                }
            })(e) : (e.local ? function (t, n, e) {
                var r, i;
                return function () {
                    var a = this.getAttributeNS(t.space, t.local);
                    return a === e ? null : a === r ? i : i = n(r = a, e)
                }
            } : function (t, n, e) {
                var r, i;
                return function () {
                    var a = this.getAttribute(t);
                    return a === e ? null : a === r ? i : i = n(r = a, e)
                }
            })(e, r, n + ""))
        },
        attrTween: function (t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = le(t);
            return this.tween(e, (r.local ? function (t, n) {
                function e() {
                    var e = this, r = n.apply(e, arguments);
                    return r && function (n) {
                        e.setAttributeNS(t.space, t.local, r(n))
                    }
                }

                return e._value = n, e
            } : function (t, n) {
                function e() {
                    var e = this, r = n.apply(e, arguments);
                    return r && function (n) {
                        e.setAttribute(t, r(n))
                    }
                }

                return e._value = n, e
            })(r, n))
        },
        style: function (t, n, e) {
            var r = "transform" == (t += "") ? Tr : na;
            return null == n ? this.styleTween(t, function (t, n) {
                var e, r, i;
                return function () {
                    var a = s(this, t), o = (this.style.removeProperty(t), s(this, t));
                    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o)
                }
            }(t, r)).on("end.style." + t, function (t) {
                return function () {
                    this.style.removeProperty(t)
                }
            }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
                var r, i, a;
                return function () {
                    var o = s(this, t), u = e(this);
                    return null == u && (this.style.removeProperty(t), u = s(this, t)), o === u ? null : o === r && u === i ? a : a = n(r = o, i = u)
                }
            }(t, r, ee(this, "style." + t, n)) : function (t, n, e) {
                var r, i;
                return function () {
                    var a = s(this, t);
                    return a === e ? null : a === r ? i : i = n(r = a, e)
                }
            }(t, r, n + ""), e)
        },
        styleTween: function (t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, function (t, n, e) {
                function r() {
                    var r = this, i = n.apply(r, arguments);
                    return i && function (n) {
                        r.style.setProperty(t, i(n), e)
                    }
                }

                return r._value = n, r
            }(t, n, null == e ? "" : e))
        },
        text: function (t) {
            return this.tween("text", "function" == typeof t ? function (t) {
                return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n
                }
            }(ee(this, "text", t)) : function (t) {
                return function () {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        remove: function () {
            return this.on("end.remove", function (t) {
                return function () {
                    var n = this.parentNode;
                    for (var e in this.__transition) if (+e !== t) return;
                    n && n.removeChild(this)
                }
            }(this._id))
        },
        tween: function (t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = ne(this.node(), e).tween, a = 0, o = i.length; a < o; ++a) if ((r = i[a]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? function (t, n) {
                var e, r;
                return function () {
                    var i = te(this, t), a = i.tween;
                    if (a !== e) for (var o = 0, u = (r = e = a).length; o < u; ++o) if (r[o].name === n) {
                        (r = r.slice()).splice(o, 1);
                        break
                    }
                    i.tween = r
                }
            } : function (t, n, e) {
                var r, i;
                if ("function" != typeof e) throw new Error;
                return function () {
                    var a = te(this, t), o = a.tween;
                    if (o !== r) {
                        i = (r = o).slice();
                        for (var u = {name: n, value: e}, c = 0, f = i.length; c < f; ++c) if (i[c].name === n) {
                            i[c] = u;
                            break
                        }
                        c === f && i.push(u)
                    }
                    a.tween = i
                }
            })(e, t, n))
        },
        delay: function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                return function () {
                    Kn(this, t).delay = +n.apply(this, arguments)
                }
            } : function (t, n) {
                return n = +n, function () {
                    Kn(this, t).delay = n
                }
            })(n, t)) : ne(this.node(), n).delay
        },
        duration: function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                return function () {
                    te(this, t).duration = +n.apply(this, arguments)
                }
            } : function (t, n) {
                return n = +n, function () {
                    te(this, t).duration = n
                }
            })(n, t)) : ne(this.node(), n).duration
        },
        ease: function (t) {
            var n = this._id;
            return arguments.length ? this.each(function (t, n) {
                if ("function" != typeof n) throw new Error;
                return function () {
                    te(this, t).ease = n
                }
            }(n, t)) : ne(this.node(), n).ease
        }
    };
    var aa = {
        time: null, delay: 0, duration: 250, ease: function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
    };
    T.prototype.interrupt = function (t) {
        return this.each(function () {
            !function (t, n) {
                var e, r, i, a = t.__transition, o = !0;
                if (a) {
                    n = null == n ? null : n + "";
                    for (i in a) (e = a[i]).name === n ? (r = e.state > Wi && e.state < Gi, e.state = Ki, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[i]) : o = !1;
                    o && delete t.__transition
                }
            }(this, t)
        })
    }, T.prototype.transition = function (t) {
        var n, e;
        t instanceof re ? (n = t._id, t = t._name) : (n = ae(), (e = aa).time = Bn(), t = null == t ? null : t + "");
        for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, u = r[a], c = u.length, f = 0; f < c; ++f) (o = u[f]) && ta(o, t, n, f, u, e || oe(o, n));
        return new re(r, this._parents, t, n)
    };
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var oa = ue(ce(function (t, n) {
        t.exports = function (t) {
            function n(r) {
                if (e[r]) return e[r].exports;
                var i = e[r] = {i: r, l: !1, exports: {}};
                return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            var e = {};
            return n.m = t, n.c = e, n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: r})
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n)
            }, n.p = "", n(n.s = 0)
        }([function (t, n, e) {
            var r, i, a;
            i = [t, n, e(1)], void 0 !== (a = "function" == typeof(r = function (t, n, e) {
                Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (t) {
                    var n = t.stateInit, e = void 0 === n ? {} : n, a = t.props, o = void 0 === a ? {} : a,
                        u = t.methods, c = void 0 === u ? {} : u, f = t.init, s = void 0 === f ? function () {
                        } : f, l = t.update, h = void 0 === l ? function () {
                        } : l, d = Object.keys(o).map(function (t) {
                            return new i(t, o[t])
                        });
                    return function () {
                        function t(e) {
                            return a(e, n), o(), t
                        }

                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = Object.assign({}, e, {initialised: !1}), a = function (n, e) {
                                s.call(t, n, i, e), i.initialised = !0
                            }, o = (0, r.default)(function () {
                                i.initialised && h.call(t, i)
                            }, 1);
                        return d.forEach(function (n) {
                            t[n.name] = function (n) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (t, n) {
                                    };
                                return function (a) {
                                    return arguments.length ? (i[n] = a, r.call(t, a, i), e && o(), t) : i[n]
                                }
                            }(n.name, n.triggerUpdate, n.onChange)
                        }), Object.keys(c).forEach(function (n) {
                            t[n] = function () {
                                for (var e, r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                                return (e = c[n]).call.apply(e, [t, i].concat(a))
                            }
                        }), t.resetProps = function () {
                            return d.forEach(function (n) {
                                t[n.name](n.defaultVal)
                            }), t
                        }, t.resetProps(), i._rerender = o, t
                    }
                };
                var r = function (t) {
                    return t && t.__esModule ? t : {default: t}
                }(e), i = function t(n, e) {
                    var r = e.default, i = void 0 === r ? null : r, a = e.triggerUpdate, o = void 0 === a || a,
                        u = e.onChange, c = void 0 === u ? function (t, n) {
                        } : u;
                    (function (t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.name = n, this.defaultVal = i, this.triggerUpdate = o, this.onChange = c
                };
                t.exports = n.default
            }) ? r.apply(n, i) : r) && (t.exports = a)
        }, function (t, n) {
            t.exports = function (t, n, e) {
                function r() {
                    var f = Date.now() - u;
                    f < n && f >= 0 ? i = setTimeout(r, n - f) : (i = null, e || (c = t.apply(o, a), o = a = null))
                }

                var i, a, o, u, c;
                null == n && (n = 100);
                var f = function () {
                    o = this, a = arguments, u = Date.now();
                    var f = e && !i;
                    return i || (i = setTimeout(r, n)), f && (c = t.apply(o, a), o = a = null), c
                };
                return f.clear = function () {
                    i && (clearTimeout(i), i = null)
                }, f
            }
        }])
    })), ua = ue(ce(function (t, n) {
        t.exports = function (t) {
            function n(r) {
                if (e[r]) return e[r].exports;
                var i = e[r] = {i: r, l: !1, exports: {}};
                return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            var e = {};
            return n.m = t, n.c = e, n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: r})
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n)
            }, n.p = "", n(n.s = 0)
        }([function (t, n, e) {
            var r, i, a;
            i = [t, n], void 0 !== (a = "function" == typeof(r = function (t, n) {
                Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (t) {
                    return t instanceof Function ? t : "string" == typeof t ? function (n) {
                        return n[t]
                    } : function (n) {
                        return t
                    }
                }, t.exports = n.default
            }) ? r.apply(n, i) : r) && (t.exports = a)
        }])
    }));
    !function (t, n) {
        if ("undefined" == typeof document) return n;
        t = t || "";
        var e = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
        r.type = "text/css", e.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
    }(".sunburst-viz .slice path {\n    cursor: pointer;\n}\n\n.sunburst-viz text {\n    font-family: Sans-serif;\n    font-size: 12px;\n    dominant-baseline: middle;\n    text-anchor: middle;\n    pointer-events: none;\n  font-weight: bold;  fill: #ffffff;\n}\n\n.sunburst-viz text .text-contour {\n    fill: none;\n    stroke: #000000;\n    stroke-width: 6;\n    stroke-linejoin: 'round';\n}\n\n.sunburst-viz .main-arc {\n    stroke: white;\n    stroke-width: 1px;\n    transition: opacity .4s;\n}\n\n.sunburst-viz .main-arc:hover {\n    opacity: 0.85;\n    transition: opacity .05s;\n}\n\n.sunburst-viz .hidden-arc {\n    fill: none;\n}\n\n.sunburst-tooltip {\n    display: none;\n    position: absolute;\n    max-width: 320px;\n    margin-top: 20px;\n    margin-left: 8px;\n    padding: 5px;\n    border-radius: 3px;\n    font: 12px sans-serif;\n    color: #FFFF00;\n    background: rgba(0,0,140,0.7);\n    pointer-events: none;\n}\n\n.sunburst-tooltip .tooltip-title {\n    font-weight: bold;\n    text-align: center;\n}\n", void 0);
    var ca = 6;
    return oa({
        props: {
            width: {default: window.innerWidth},
            height: {default: window.innerHeight},
            data: {
                onChange: function () {
                    this._parseData()
                }
            },
            children: {
                default: "children", onChange: function () {
                    this._parseData()
                }
            },
            label: {
                default: function (t) {
                    return t.name
                }, onChange: function () {
                    this._parseData()
                }
            },
            size: {
                default: "value", onChange: function () {
                    this._parseData()
                }
            },
            color: {
                default: function (t) {
                    return "lightgrey"
                }
            },
            minSliceAngle: {default: .2},
            showLabels: {default: !0},
            tooltipContent: {
                default: function (t) {
                    return ""
                }, triggerUpdate: !1
            },
            focusOnNode: {
                onChange: function (t, n) {
                    function e(t) {
                        n.svg.selectAll(".slice").filter(function (n) {
                            return n === t
                        }).each(function (t) {
                            this.parentNode.appendChild(this), t.parent && e(t.parent)
                        })
                    }

                    t && n.initialised && e(t)
                }
            }
        }, methods: {
            _parseData: function (t) {
                if (t.data) {
                    var n = ua(t.label), e = Mn(t.data, ua(t.children)).sum(ua(t.size)).sort(function (t, e) {
                        return n(t.data).toString().localeCompare(n(e.data).toString())
                    });
                    gi().padding(0)(e), e.descendants().forEach(function (t, n) {
                        return t.id = n
                    }), t.layoutData = e.descendants()
                }
            }
        }, init: function (t, n) {
            var e = this;
            n.chartId = Math.round(1e12 * Math.random()), n.radiusScale = ut().exponent(.5), n.angleScale = at().domain([0, 10]).range([0, 2 * Math.PI]).clamp(!0), n.arc = Ui().startAngle(function (t) {
                return n.angleScale(t.x0)
            }).endAngle(function (t) {
                return n.angleScale(t.x1)
            }).innerRadius(function (t) {
                return Math.max(0, n.radiusScale(t.y0))
            }).outerRadius(function (t) {
                return Math.max(0, n.radiusScale(t.y1))
            });
            var r = Ce(t).append("div").attr("class", "sunburst-viz");
            n.svg = r.append("svg"), n.canvas = n.svg.append("g"), n.tooltip = Ce("body").append("div").attr("class", "sunburst-tooltip"), t.addEventListener("DOMNodeRemoved", function (t) {
                t.target === this && n.tooltip.remove()
            }), n.canvas.on("mousemove", function () {
                n.tooltip.style("left", ve.pageX + "px").style("top", ve.pageY + "px")
            }), n.svg.on("click", function () {
                return e.focusOnNode(null)
            })
        }, update: function (t) {
            function n(n) {
                var e = Math.PI / 2, r = [t.angleScale(n.x0) - e, t.angleScale(n.x1) - e],
                    i = Math.max(0, (t.radiusScale(n.y0) + t.radiusScale(n.y1)) / 2);
                if (!(i && r[1] - r[0])) return "";
                var a = (r[1] + r[0]) / 2, o = a > 0 && a < Math.PI;
                o && r.reverse();
                var u = kn();
                return u.arc(0, 0, i, r[0], r[1], o), u.toString()
            }

            var e = this, r = Math.min(t.width, t.height) / 2;
            if (t.radiusScale.range([.1 * r, r]), t.svg.style("width", t.width + "px").style("height", t.height + "px").attr("viewBox", -t.width / 2 + " " + -t.height / 2 + " " + t.width + " " + t.height), t.layoutData) {
                var i = t.focusOnNode || {x0: 0, x1: 1, y0: 0, y1: 1},
                    a = t.canvas.selectAll(".slice").data(t.layoutData.filter(function (n) {
                        return n.x1 >= i.x0 && n.x0 <= i.x1 && (n.x1 - n.x0) / (i.x1 - i.x0) > t.minSliceAngle / 360
                    }), function (t) {
                        return t.id
                    }), o = ua(t.label), u = ua(t.color), c = ie().duration(750);
                t.svg.transition(c).tween("scale", function () {
                    var n = mr(t.angleScale.domain(), [i.x0, i.x1]), e = mr(t.radiusScale.domain(), [i.y0, 1]);
                    return function (r) {
                        t.angleScale.domain(n(r)), t.radiusScale.domain(e(r))
                    }
                });
                var f = a.exit().transition(c).style("opacity", 0).remove();
                f.select("path.main-arc").attrTween("d", function (n) {
                    return function () {
                        return t.arc(n)
                    }
                }), f.select("path.hidden-arc").attrTween("d", function (t) {
                    return function () {
                        return n(t)
                    }
                });
                var s = a.enter().append("g").attr("class", "slice").style("opacity", 0).on("click", function (t) {
                    ve.stopPropagation(), e.focusOnNode(t)
                }).on("mouseover", function (n) {
                    t.tooltip.style("display", "inline"), t.tooltip.html('<div class="tooltip-title">' + function (t) {
                        for (var n = [], e = t; e;) n.unshift(e), e = e.parent;
                        return n
                    }(n).map(function (t) {
                        return o(t.data)
                    }).join(" > ") + "</div>" + t.tooltipContent(n.data, n))
                }).on("mouseout", function () {
                    t.tooltip.style("display", "none")
                });
                s.append("path").attr("class", "main-arc").style("fill", function (t) {
                    return u(t.data, t.parent)
                }), s.append("path").attr("class", "hidden-arc").attr("id", function (n) {
                    return "hidden-arc-" + t.chartId + "-" + n.id
                });
                var l = s.append("text").attr("class", "path-label");
                l.append("textPath").attr("class", "text-contour").attr("startOffset", "50%").attr("xlink:href", function (n) {
                    return "#hidden-arc-" + t.chartId + "-" + n.id
                }), l.append("textPath").attr("startOffset", "50%").attr("xlink:href", function (n) {
                    return "#hidden-arc-" + t.chartId + "-" + n.id
                });
                var h = a.merge(s);
                h.style("opacity", 1), h.select("path.main-arc").transition(c).attrTween("d", function (n) {
                    return function () {
                        return t.arc(n)
                    }
                }).style("fill", function (t) {
                    return u(t.data, t.parent)
                }), h.select("path.hidden-arc").transition(c).attrTween("d", function (t) {
                    return function () {
                        return n(t)
                    }
                }), h.select(".path-label").transition(c).styleTween("display", function (n) {
                    return function () {
                        return t.showLabels && function (n) {
                            var e = t.angleScale(n.x1) - t.angleScale(n.x0),
                                r = Math.max(0, (t.radiusScale(n.y0) + t.radiusScale(n.y1)) / 2) * e;
                            return o(n.data).toString().length * ca < r
                        }(n) ? null : "none"
                    }
                }), h.selectAll("text.path-label textPath").text(function (t) {
                    return o(t.data)
                })
            }
        }
    })
});