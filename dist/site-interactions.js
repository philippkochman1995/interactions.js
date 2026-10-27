import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { t as x } from "./site-interactions-CKkKncuX.js";
import { a as S, i as C, n as w, r as T, t as E } from "./site-interactions-CEVwkEpI.js";
//#region src/modules/i18n.ts
var D = {};
function O(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function ee(e = document) {
	var t, n;
	D = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (D = O(v(i))), {
		get values() {
			return { ...D };
		},
		t: k
	};
}
function k(e, t) {
	let n = e.trim(), r = D[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var A = ".site-menu__languages", j = ".site-menu__language", te = "site-menu__language-indicator";
function M(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function ne(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function re(e) {
	let t = Array.from(e.querySelectorAll(j)), n = M(t);
	if (!n || e.querySelector(`.${te}`)) return;
	let r = document.createElement("span");
	r.className = te, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => ne(e, r, t), a = () => {
		let e = t.find((e) => e.matches(":hover, :focus-visible"));
		i(e == null ? n : e);
	};
	a(), requestAnimationFrame(() => e.classList.add("has-language-indicator")), t.forEach((t) => {
		t.addEventListener("mouseenter", () => i(t)), t.addEventListener("focus", () => i(t)), t.addEventListener("blur", (t) => {
			let n = t.relatedTarget;
			(!(n instanceof Node) || !e.contains(n)) && a();
		});
	}), e.addEventListener("mouseleave", a), window.addEventListener("resize", a, { passive: !0 });
}
function ie() {
	document.querySelectorAll(A).forEach(re);
}
//#endregion
//#region node_modules/gsap/utils/paths.js
var ae = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, oe = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, se = Math.PI / 180;
180 / Math.PI;
var N = Math.sin, ce = Math.cos, P = Math.abs, le = Math.sqrt, ue = function(e) {
	return typeof e == "number";
}, de = 1e5, F = function(e) {
	return Math.round(e * de) / de || 0;
}, I = function(e) {
	return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001;
};
function fe(e, t, n, r, i, a, o) {
	for (var s = e.length, c, l, u, d, f; --s > -1;) for (c = e[s], l = c.length, u = 0; u < l; u += 2) d = c[u], f = c[u + 1], c[u] = d * t + f * r + a, c[u + 1] = d * n + f * i + o;
	return e._dirty = 1, e;
}
function L(e, t, n, r, i, a, o, s, c) {
	if (!(e === s && t === c)) {
		n = P(n), r = P(r);
		var l = i % 360 * se, u = ce(l), d = N(l), f = Math.PI, p = f * 2, m = (e - s) / 2, h = (t - c) / 2, g = u * m + d * h, _ = -d * m + u * h, v = g * g, y = _ * _, b = v / (n * n) + y / (r * r);
		b > 1 && (n = le(b) * n, r = le(b) * r);
		var x = n * n, S = r * r, C = (x * S - x * y - S * v) / (x * y + S * v);
		C < 0 && (C = 0);
		var w = (a === o ? -1 : 1) * le(C), T = w * (n * _ / r), E = w * -(r * g / n), D = (e + s) / 2, O = (t + c) / 2, ee = D + (u * T - d * E), k = O + (d * T + u * E), A = (g - T) / n, j = (_ - E) / r, te = (-g - T) / n, M = (-_ - E) / r, ne = A * A + j * j, re = (j < 0 ? -1 : 1) * Math.acos(A / le(ne)), ie = (A * M - j * te < 0 ? -1 : 1) * Math.acos((A * te + j * M) / le(ne * (te * te + M * M)));
		isNaN(ie) && (ie = f), !o && ie > 0 ? ie -= p : o && ie < 0 && (ie += p), re %= p, ie %= p;
		var ae = Math.ceil(P(ie) / (p / 4)), oe = [], ue = ie / ae, de = 4 / 3 * N(ue / 2) / (1 + ce(ue / 2)), F = u * n, I = d * n, fe = d * -r, L = u * r, R;
		for (R = 0; R < ae; R++) i = re + R * ue, g = ce(i), _ = N(i), A = ce(i += ue), j = N(i), oe.push(g - de * _, _ + de * g, A + de * j, j - de * A, A, j);
		for (R = 0; R < oe.length; R += 2) g = oe[R], _ = oe[R + 1], oe[R] = g * F + _ * fe + ee, oe[R + 1] = g * I + _ * L + k;
		return oe[R - 2] = s, oe[R - 1] = c, oe;
	}
}
function R(e) {
	var t = (e + "").replace(oe, function(e) {
		var t = +e;
		return t < 1e-4 && t > -1e-4 ? 0 : t;
	}).match(ae) || [], n = [], r = 0, i = 0, a = 2 / 3, o = t.length, s = 0, c = "ERROR: malformed path: " + e, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w = function(e, t, n, r) {
		v = (n - e) / 3, y = (r - t) / 3, h.push(e + v, t + y, n - v, r - y, n, r);
	};
	if (!e || !isNaN(t[0]) || isNaN(t[1])) return console.log(c), n;
	for (l = 0; l < o; l++) if (x = p, isNaN(t[l]) ? (p = t[l].toUpperCase(), m = p !== t[l]) : l--, d = +t[l + 1], f = +t[l + 2], m && (d += r, f += i), l || (g = d, _ = f), p === "M") h && (h.length < 8 ? --n.length : s += h.length, I(h)), r = g = d, i = _ = f, h = [d, f], n.push(h), l += 2, p = "L";
	else if (p === "C") h || (h = [0, 0]), m || (r = i = 0), h.push(d, f, r + t[l + 3] * 1, i + t[l + 4] * 1, r += t[l + 5] * 1, i += t[l + 6] * 1), l += 6;
	else if (p === "S") v = r, y = i, (x === "C" || x === "S") && (v += r - h[h.length - 4], y += i - h[h.length - 3]), m || (r = i = 0), h.push(v, y, d, f, r += t[l + 3] * 1, i += t[l + 4] * 1), l += 4;
	else if (p === "Q") v = r + (d - r) * a, y = i + (f - i) * a, m || (r = i = 0), r += t[l + 3] * 1, i += t[l + 4] * 1, h.push(v, y, r + (d - r) * a, i + (f - i) * a, r, i), l += 4;
	else if (p === "T") v = r - h[h.length - 4], y = i - h[h.length - 3], h.push(r + v, i + y, d + (r + v * 1.5 - d) * a, f + (i + y * 1.5 - f) * a, r = d, i = f), l += 2;
	else if (p === "H") w(r, i, r = d, i), l += 1;
	else if (p === "V") w(r, i, r, i = d + (m ? i - r : 0)), l += 1;
	else if (p === "L" || p === "Z") p === "Z" && (d = g, f = _, h.closed = !0), (p === "L" || P(r - d) > .5 || P(i - f) > .5) && (w(r, i, d, f), p === "L" && (l += 2)), r = d, i = f;
	else if (p === "A") {
		if (S = t[l + 4], C = t[l + 5], v = t[l + 6], y = t[l + 7], u = 7, S.length > 1 && (S.length < 3 ? (y = v, v = C, u--) : (y = C, v = S.substr(2), u -= 2), C = S.charAt(1), S = S.charAt(0)), b = L(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +S, +C, (m ? r : 0) + v * 1, (m ? i : 0) + y * 1), l += u, b) for (u = 0; u < b.length; u++) h.push(b[u]);
		r = h[h.length - 2], i = h[h.length - 1];
	} else console.log(c);
	return l = h.length, l < 6 ? (n.pop(), l = 0) : I(h), n.totalPoints = s + l, n;
}
function pe(e) {
	ue(e[0]) && (e = [e]);
	var t = "", n = e.length, r, i, a, o;
	for (i = 0; i < n; i++) {
		for (o = e[i], t += "M" + F(o[0]) + "," + F(o[1]) + " C", r = o.length, a = 2; a < r; a++) t += F(o[a++]) + "," + F(o[a++]) + " " + F(o[a++]) + "," + F(o[a++]) + " " + F(o[a++]) + "," + F(o[a]) + " ";
		o.closed && (t += "z");
	}
	return t;
}
//#endregion
//#region node_modules/gsap/CustomEase.js
var z, me, B = function() {
	return z || typeof window < "u" && (z = window.gsap) && z.registerPlugin && z;
}, he = function() {
	z = B(), z ? (z.registerEase("_CE", U.create), me = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
}, ge = 0x56bc75e2d63100000, _e = function(e) {
	return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3;
}, ve = 1, V = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, ye = /[cLlsSaAhHvVtTqQ]/g, H = function(e) {
	var t = e.length, n = ge, r;
	for (r = 1; r < t; r += 6) +e[r] < n && (n = +e[r]);
	return n;
}, be = function(e, t, n) {
	!n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
	var r = e[0] * -1, i = -n, a = e.length, o = 1 / (+e[a - 2] + r), s = -t || (Math.abs(e[a - 1] - +e[1]) < .01 * (e[a - 2] - +e[0]) ? H(e) + i : +e[a - 1] + i), c;
	for (s = s ? 1 / s : -o, c = 0; c < a; c += 2) e[c] = (+e[c] + r) * o, e[c + 1] = (+e[c + 1] + i) * s;
}, xe = function e(t, n, r, i, a, o, s, c, l, u, d) {
	var f = (t + r) / 2, p = (n + i) / 2, m = (r + a) / 2, h = (i + o) / 2, g = (a + s) / 2, _ = (o + c) / 2, v = (f + m) / 2, y = (p + h) / 2, b = (m + g) / 2, x = (h + _) / 2, S = (v + b) / 2, C = (y + x) / 2, w = s - t, T = c - n, E = Math.abs((r - s) * T - (i - c) * w), D = Math.abs((a - s) * T - (o - c) * w), O;
	return u || (u = [{
		x: t,
		y: n
	}, {
		x: s,
		y: c
	}], d = 1), u.splice(d || u.length - 1, 0, {
		x: S,
		y: C
	}), (E + D) * (E + D) > l * (w * w + T * T) && (O = u.length, e(t, n, f, p, v, y, S, C, l, u, d), e(S, C, b, x, g, _, s, c, l, u, d + 1 + (u.length - O))), u;
}, U = /*#__PURE__*/ function() {
	function e(e, t, n) {
		me || he(), this.id = e, ve && this.setData(t, n);
	}
	var t = e.prototype;
	return t.setData = function(e, t) {
		t = t || {}, e = e || "0,0,1,1";
		var n = e.match(V), r = 1, i = [], a = [], o = t.precision || 1, s = o <= 1, c, l, u, d, f, p, m, h, g;
		if (this.data = e, (ye.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (n = R(e)[0]), c = n.length, c === 4) n.unshift(0, 0), n.push(1, 1), c = 8;
		else if ((c - 2) % 6) throw "Invalid CustomEase";
		for ((+n[0] != 0 || +n[c - 2] != 1) && be(n, t.height, t.originY), this.segment = n, d = 2; d < c; d += 6) l = {
			x: +n[d - 2],
			y: +n[d - 1]
		}, u = {
			x: +n[d + 4],
			y: +n[d + 5]
		}, i.push(l, u), xe(l.x, l.y, +n[d], +n[d + 1], +n[d + 2], +n[d + 3], u.x, u.y, 1 / (o * 2e5), i, i.length - 1);
		for (c = i.length, d = 0; d < c; d++) m = i[d], h = i[d - 1] || m, (m.x > h.x || h.y !== m.y && h.x === m.x || m === h) && m.x <= 1 ? (h.cx = m.x - h.x, h.cy = m.y - h.y, h.n = m, h.nx = m.x, s && d > 1 && Math.abs(h.cy / h.cx - i[d - 2].cy / i[d - 2].cx) > 2 && (s = 0), h.cx < r && (h.cx ? r = h.cx : (h.cx = .001, d === c - 1 && (h.x -= .001, r = Math.min(r, .001), s = 0)))) : (i.splice(d--, 1), c--);
		if (c = 1 / r + 1 | 0, f = 1 / c, p = 0, m = i[0], s) {
			for (d = 0; d < c; d++) g = d * f, m.nx < g && (m = i[++p]), l = m.y + (g - m.x) / m.cx * m.cy, a[d] = {
				x: g,
				cx: f,
				y: l,
				cy: 0,
				nx: 9
			}, d && (a[d - 1].cy = l - a[d - 1].y);
			p = i[i.length - 1], a[c - 1].cy = p.y - l, a[c - 1].cx = p.x - a[a.length - 1].x;
		} else {
			for (d = 0; d < c; d++) m.nx < d * f && (m = i[++p]), a[d] = m;
			p < i.length - 1 && (a[d - 1] = i[i.length - 2]);
		}
		return this.ease = function(e) {
			var t = a[e * c | 0] || a[c - 1];
			return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy;
		}, this.ease.custom = this, this.id && z && z.registerEase(this.id, this.ease), this;
	}, t.getSVGData = function(t) {
		return e.getSVGData(this, t);
	}, e.create = function(t, n, r) {
		return new e(t, n, r).ease;
	}, e.register = function(e) {
		z = e, he();
	}, e.get = function(e) {
		return z.parseEase(e);
	}, e.getSVGData = function(t, n) {
		n = n || {};
		var r = n.width || 100, i = n.height || 100, a = n.x || 0, o = (n.y || 0) + i, s = z.utils.toArray(n.path)[0], c, l, u, d, f, p, m, h, g, _;
		if (n.invert && (i = -i, o = 0), typeof t == "string" && (t = z.parseEase(t)), t.custom && (t = t.custom), t instanceof e) c = pe(fe([t.segment.slice(0)], r, 0, 0, -i, a, o));
		else {
			for (c = [a, o], m = Math.max(5, (n.precision || 1) * 200), d = 1 / m, m += 2, h = 5 / m, g = _e(a + d * r), _ = _e(o + t(d) * -i), l = (_ - o) / (g - a), u = 2; u < m; u++) f = _e(a + u * d * r), p = _e(o + t(u * d) * -i), (Math.abs((p - _) / (f - g) - l) > h || u === m - 1) && (c.push(g, _), l = (p - _) / (f - g)), g = f, _ = p;
			c = "M" + c.join(",");
		}
		return s && s.setAttribute("d", c), c;
	}, e;
}();
U.version = "3.15.0", U.headless = !0, B() && z.registerPlugin(U);
//#endregion
//#region node_modules/gsap/Observer.js
function Se(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function Ce(e, t, n) {
	return t && Se(e.prototype, t), n && Se(e, n), e;
}
var we, Te, Ee, W, De, G, Oe, ke, Ae, je, Me, Ne, Pe, Fe = function() {
	return we || typeof window < "u" && (we = window.gsap) && we.registerPlugin && we;
}, Ie = 1, Le = [], K = [], Re = [], ze = Date.now, Be = function(e, t) {
	return t;
}, Ve = function() {
	var e = Ae.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, K), r.push.apply(r, Re), K = n, Re = r, Be = function(e, n) {
		return t[e](n);
	};
}, He = function(e, t) {
	return ~Re.indexOf(e) && Re[Re.indexOf(e) + 1][t];
}, Ue = function(e) {
	return !!~je.indexOf(e);
}, We = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, Ge = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Ke = "scrollLeft", qe = "scrollTop", Je = function() {
	return Me && Me.isPressed || K.cache++;
}, Ye = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			Ie && (Ee.history.scrollRestoration = "manual");
			var i = Me && Me.isPressed;
			r = n.v = Math.round(r) || (Me && Me.iOS ? 1 : 0), e(r), n.cacheID = K.cache, i && Be("ss", r);
		} else (t || K.cache !== n.cacheID || Be("ref")) && (n.cacheID = K.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Xe = {
	s: Ke,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: Ye(function(e) {
		return arguments.length ? Ee.scrollTo(e, Ze.sc()) : Ee.pageXOffset || W[Ke] || De[Ke] || G[Ke] || 0;
	})
}, Ze = {
	s: qe,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Xe,
	sc: Ye(function(e) {
		return arguments.length ? Ee.scrollTo(Xe.sc(), e) : Ee.pageYOffset || W[qe] || De[qe] || G[qe] || 0;
	})
}, Qe = function(e, t) {
	return (t && t._ctx && t._ctx.selector || we.utils.toArray)(e)[0] || (typeof e == "string" && we.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, $e = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, et = function(e, t) {
	var n = t.s, r = t.sc;
	Ue(e) && (e = W.scrollingElement || De);
	var i = K.indexOf(e), a = r === Ze.sc ? 1 : 2;
	!~i && (i = K.push(e) - 1), K[i + a] || We(e, "scroll", Je);
	var o = K[i + a], s = o || (K[i + a] = Ye(He(e, n), !0) || (Ue(e) ? r : Ye(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = we.getProperty(e, "scrollBehavior") === "smooth"), s;
}, tt = function(e, t, n) {
	var r = e, i = e, a = ze(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = ze();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = ze();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, nt = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, rt = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, it = function() {
	Ae = we.core.globals().ScrollTrigger, Ae && Ae.core && Ve();
}, at = function(e) {
	return we = e || Fe(), !Te && we && typeof document < "u" && document.body && (Ee = window, W = document, De = W.documentElement, G = W.body, je = [
		Ee,
		W,
		De,
		G
	], we.utils.clamp, Pe = we.core.context || function() {}, ke = "onpointerenter" in G ? "pointer" : "mouse", Oe = q.isTouch = Ee.matchMedia && Ee.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ee || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ne = q.eventTypes = ("ontouchstart" in De ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in De ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return Ie = 0;
	}, 500), Te = 1), Ae || it(), Te;
};
Xe.op = Ze, K.cache = 0;
var q = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		Te || at(we) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || it();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, ee = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, j = e.onGestureStart, te = e.onGestureEnd, M = e.onWheel, ne = e.onEnable, re = e.onDisable, ie = e.onClick, ae = e.scrollSpeed, oe = e.capture, se = e.allowClicks, N = e.lockAxis, ce = e.onLockAxis;
		this.target = i = Qe(i) || De, this.vars = e, u && (u = we.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ae = ae || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(Ee.getComputedStyle(G).lineHeight) || 22);
		var P, le, ue, de, F, I, fe, L = this, R = 0, pe = 0, z = e.passive || !s && e.passive !== !1, me = et(i, Xe), B = et(i, Ze), he = me(), ge = B(), _e = ~r.indexOf("touch") && !~r.indexOf("pointer") && Ne[0] === "pointerdown", ve = Ue(i), V = i.ownerDocument || W, ye = [
			0,
			0,
			0
		], H = [
			0,
			0,
			0
		], be = 0, xe = function() {
			return be = ze();
		}, U = function(e, t) {
			return (L.event = e) && u && $e(e.target, u) || t && _e && e.pointerType !== "touch" || k && k(e, t);
		}, Se = function() {
			L._vx.reset(), L._vy.reset(), le.pause(), c && c(L);
		}, Ce = function() {
			var e = L.deltaX = rt(ye), n = L.deltaY = rt(H), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(L, e, n, ye, H), r && (v && L.deltaX > 0 && v(L), y && L.deltaX < 0 && y(L), S && S(L), T && L.deltaX < 0 != R < 0 && T(L), R = L.deltaX, ye[0] = ye[1] = ye[2] = 0), i && (x && L.deltaY > 0 && x(L), b && L.deltaY < 0 && b(L), C && C(L), E && L.deltaY < 0 != pe < 0 && E(L), pe = L.deltaY, H[0] = H[1] = H[2] = 0), (de || ue) && (ee && ee(L), ue && (p && ue === 1 && p(L), h && h(L), ue = 0), de = !1), I && !(I = !1) && ce && ce(L), F && (M(L), F = !1), P = 0;
		}, je = function(e, t, n) {
			ye[n] += e, H[n] += t, L._vx.update(e), L._vy.update(t), o ? P || (P = requestAnimationFrame(Ce)) : Ce();
		}, Fe = function(e, t) {
			N && !fe && (L.axis = fe = Math.abs(e) > Math.abs(t) ? "x" : "y", I = !0), fe !== "y" && (ye[2] += e, L._vx.update(e, !0)), fe !== "x" && (H[2] += t, L._vy.update(t, !0)), o ? P || (P = requestAnimationFrame(Ce)) : Ce();
		}, Ie = function(e) {
			if (!U(e, 1)) {
				e = nt(e, s);
				var t = e.clientX, r = e.clientY, i = t - L.x, a = r - L.y, o = L.isDragging;
				L.x = t, L.y = r, (o || (i || a) && (Math.abs(L.startX - t) >= n || Math.abs(L.startY - r) >= n)) && (ue || (ue = o ? 2 : 1), o || (L.isDragging = !0), Fe(i, a));
			}
		}, K = L.onPress = function(e) {
			U(e, 1) || e && e.button || (L.axis = fe = null, le.pause(), L.isPressed = !0, e = nt(e), R = pe = 0, L.startX = L.x = e.clientX, L.startY = L.y = e.clientY, L._vx.reset(), L._vy.reset(), We(A ? i : V, Ne[1], Ie, z, !0), L.deltaX = L.deltaY = 0, g && g(L));
		}, Re = L.onRelease = function(e) {
			if (!U(e, 1)) {
				Ge(A ? i : V, Ne[1], Ie, !0);
				var t = !isNaN(L.y - L.startY), n = L.isDragging, r = n && (Math.abs(L.x - L.startX) > 3 || Math.abs(L.y - L.startY) > 3), a = nt(e);
				!r && t && (L._vx.reset(), L._vy.reset(), s && se && we.delayedCall(.08, function() {
					if (ze() - be > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (V.createEvent) {
							var t = V.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, Ee, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), L.isDragging = L.isGesturing = L.isPressed = !1, c && n && !A && le.restart(!0), ue && Ce(), m && n && m(L), _ && _(L, r);
			}
		}, Be = function(e) {
			return e.touches && e.touches.length > 1 && (L.isGesturing = !0) && j(e, L.isDragging);
		}, Ve = function() {
			return (L.isGesturing = !1) || te(L);
		}, He = function(e) {
			if (!U(e)) {
				var t = me(), n = B();
				je((t - he) * ae, (n - ge) * ae, 1), he = t, ge = n, c && le.restart(!0);
			}
		}, Ke = function(e) {
			if (!U(e)) {
				e = nt(e, s), M && (F = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? Ee.innerHeight : 1) * d;
				je(e.deltaX * t, e.deltaY * t, 0), c && !A && le.restart(!0);
			}
		}, qe = function(e) {
			if (!U(e)) {
				var t = e.clientX, n = e.clientY, r = t - L.x, i = n - L.y;
				L.x = t, L.y = n, de = !0, c && le.restart(!0), (r || i) && Fe(r, i);
			}
		}, Ye = function(e) {
			L.event = e, D(L);
		}, q = function(e) {
			L.event = e, O(L);
		}, J = function(e) {
			return U(e) || nt(e, s) && ie(L);
		};
		le = L._dc = we.delayedCall(l || .25, Se).pause(), L.deltaX = L.deltaY = 0, L._vx = tt(0, 50, !0), L._vy = tt(0, 50, !0), L.scrollX = me, L.scrollY = B, L.isDragging = L.isGesturing = L.isPressed = !1, Pe(this), L.enable = function(e) {
			return L.isEnabled || (We(ve ? V : i, "scroll", Je), r.indexOf("scroll") >= 0 && We(ve ? V : i, "scroll", He, z, oe), r.indexOf("wheel") >= 0 && We(i, "wheel", Ke, z, oe), (r.indexOf("touch") >= 0 && Oe || r.indexOf("pointer") >= 0) && (We(i, Ne[0], K, z, oe), We(V, Ne[2], Re), We(V, Ne[3], Re), se && We(i, "click", xe, !0, !0), ie && We(i, "click", J), j && We(V, "gesturestart", Be), te && We(V, "gestureend", Ve), D && We(i, ke + "enter", Ye), O && We(i, ke + "leave", q), ee && We(i, ke + "move", qe)), L.isEnabled = !0, L.isDragging = L.isGesturing = L.isPressed = de = ue = !1, L._vx.reset(), L._vy.reset(), he = me(), ge = B(), e && e.type && K(e), ne && ne(L)), L;
		}, L.disable = function() {
			L.isEnabled && (Le.filter(function(e) {
				return e !== L && Ue(e.target);
			}).length || Ge(ve ? V : i, "scroll", Je), L.isPressed && (L._vx.reset(), L._vy.reset(), Ge(A ? i : V, Ne[1], Ie, !0)), Ge(ve ? V : i, "scroll", He, oe), Ge(i, "wheel", Ke, oe), Ge(i, Ne[0], K, oe), Ge(V, Ne[2], Re), Ge(V, Ne[3], Re), Ge(i, "click", xe, !0), Ge(i, "click", J), Ge(V, "gesturestart", Be), Ge(V, "gestureend", Ve), Ge(i, ke + "enter", Ye), Ge(i, ke + "leave", q), Ge(i, ke + "move", qe), L.isEnabled = L.isPressed = L.isDragging = !1, re && re(L));
		}, L.kill = L.revert = function() {
			L.disable();
			var e = Le.indexOf(L);
			e >= 0 && Le.splice(e, 1), Me === L && (Me = 0);
		}, Le.push(L), A && Ue(i) && (Me = L), L.enable(f);
	}, Ce(e, [{
		key: "velocityX",
		get: function() {
			return this._vx.getVelocity();
		}
	}, {
		key: "velocityY",
		get: function() {
			return this._vy.getVelocity();
		}
	}]), e;
}();
q.version = "3.15.0", q.create = function(e) {
	return new q(e);
}, q.register = at, q.getAll = function() {
	return Le.slice();
}, q.getById = function(e) {
	return Le.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, Fe() && we.registerPlugin(q);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var J, ot, Y, X, st, Z, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It = 1, Lt = Date.now, Rt = Lt(), zt = 0, Bt = 0, Vt = function(e, t, n) {
	var r = rn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, Ht = function(e, t) {
	return t && (!rn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, Ut = function e() {
	return Bt && requestAnimationFrame(e);
}, Wt = function() {
	return ht = 1;
}, Gt = function() {
	return ht = 0;
}, Kt = function(e) {
	return e;
}, qt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, Jt = function() {
	return typeof window < "u";
}, Yt = function() {
	return J || Jt() && (J = window.gsap) && J.registerPlugin && J;
}, Xt = function(e) {
	return !!~ct.indexOf(e);
}, Zt = function(e) {
	return (e === "Height" ? Mt : Y["inner" + e]) || st["client" + e] || Z["client" + e];
}, Qt = function(e) {
	return He(e, "getBoundingClientRect") || (Xt(e) ? function() {
		return Tr.width = Y.innerWidth, Tr.height = Mt, Tr;
	} : function() {
		return kn(e);
	});
}, $t = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = He(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Zt(i) : e["client" + i]) || 0;
	};
}, en = function(e, t) {
	return !t || ~Re.indexOf(e) ? Qt(e) : function() {
		return Tr;
	};
}, tn = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = He(e, n)) ? a() - Qt(e)()[i] : Xt(e) ? (st[n] || Z[n]) - Zt(r) : e[n] - e["offset" + r]);
}, nn = function(e, t) {
	for (var n = 0; n < bt.length; n += 3) (!t || ~t.indexOf(bt[n + 1])) && e(bt[n], bt[n + 1], bt[n + 2]);
}, rn = function(e) {
	return typeof e == "string";
}, an = function(e) {
	return typeof e == "function";
}, on = function(e) {
	return typeof e == "number";
}, sn = function(e) {
	return typeof e == "object";
}, cn = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, ln = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, un = Math.abs, dn = "left", fn = "top", pn = "right", mn = "bottom", hn = "width", gn = "height", _n = "Right", vn = "Left", yn = "Top", bn = "Bottom", xn = "padding", Sn = "margin", Cn = "Width", wn = "Height", Tn = "px", En = function(e) {
	return Y.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Dn = function(e) {
	var t = En(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, On = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, kn = function(e, t) {
	var n = t && En(e)[gt] !== "matrix(1, 0, 0, 1, 0, 0)" && J.to(e, {
		x: 0,
		y: 0,
		xPercent: 0,
		yPercent: 0,
		rotation: 0,
		rotationX: 0,
		rotationY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0
	}).progress(1), r = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
	return n && n.progress(0).kill(), r;
}, An = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, jn = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, Mn = function(e) {
	return function(t) {
		return J.utils.snap(jn(e), t);
	};
}, Nn = function(e) {
	var t = J.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
		return e - t;
	});
	return n ? function(e, r, i) {
		i === void 0 && (i = .001);
		var a;
		if (!r) return t(e);
		if (r > 0) {
			for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
			return n[a - 1];
		} else for (a = n.length, e += i; a--;) if (n[a] <= e) return n[a];
		return n[0];
	} : function(n, r, i) {
		i === void 0 && (i = .001);
		var a = t(n);
		return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e);
	};
}, Pn = function(e) {
	return function(t, n) {
		return Nn(jn(e))(t, n.direction);
	};
}, Fn = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, In = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, Ln = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Rn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, zn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, Bn = {
	toggleActions: "play",
	anticipatePin: 0
}, Vn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, Hn = function(e, t) {
	if (rn(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Vn ? Vn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, Un = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = X.createElement("div"), m = Xt(n) || He(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Z : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === Ze ? pn : mn) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Wn(p, 0, r, _), p;
}, Wn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Cn] = 1, i["border" + o + Cn] = 0, i[n.p] = t + "px", J.set(e, i);
}, Q = [], Gn = {}, Kn, qn = function() {
	return Lt() - zt > 34 && (Kn || (Kn = requestAnimationFrame(gr)));
}, Jn = function() {
	(!wt || !wt.isPressed || wt.startX > Z.clientWidth) && (K.cache++, wt ? Kn || (Kn = requestAnimationFrame(gr)) : gr(), zt || er("scrollStart"), zt = Lt());
}, Yn = function() {
	Dt = Y.innerWidth, Et = Y.innerHeight;
}, Xn = function(e) {
	K.cache++, (e === !0 || !mt && !Ct && !X.fullscreenElement && !X.webkitFullscreenElement && (!Tt || Dt !== Y.innerWidth || Math.abs(Y.innerHeight - Et) > Y.innerHeight * .25)) && lt.restart(!0);
}, Zn = {}, Qn = [], $n = function e() {
	return Ln($, "scrollEnd", e) || fr(!0);
}, er = function(e) {
	return Zn[e] && Zn[e].map(function(e) {
		return e();
	}) || Qn;
}, tr = [], nr = function(e) {
	for (var t = 0; t < tr.length; t += 5) (!e || tr[t + 4] && tr[t + 4].query === e) && (tr[t].style.cssText = tr[t + 1], tr[t].getBBox && tr[t].setAttribute("transform", tr[t + 2] || ""), tr[t + 3].uncache = 1);
}, rr = function() {
	return K.forEach(function(e) {
		return an(e) && ++e.cacheID && (e.rec = e());
	});
}, ir = function(e, t) {
	var n;
	for (_t = 0; _t < Q.length; _t++) n = Q[_t], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Nt = !0, t && nr(t), t || er("revert");
}, ar = function(e, t) {
	K.cache++, (t || !or) && K.forEach(function(e) {
		return an(e) && e.cacheID++ && (e.rec = 0);
	}), rn(e) && (Y.history.scrollRestoration = At = e);
}, or, sr = 0, cr, lr = function() {
	if (cr !== sr) {
		var e = cr = sr;
		requestAnimationFrame(function() {
			return e === sr && fr(!0);
		});
	}
}, ur = function() {
	Z.appendChild(jt), Mt = !wt && jt.offsetHeight || Y.innerHeight, Z.removeChild(jt);
}, dr = function(e) {
	return ut(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, fr = function(e, t) {
	if (st = X.documentElement, Z = X.body, ct = [
		Y,
		X,
		st,
		Z
	], zt && !e && !Nt) {
		In($, "scrollEnd", $n);
		return;
	}
	ur(), or = $.isRefreshing = !0, Nt || rr();
	var n = er("refreshInit");
	xt && $.sort(), t || ir(), K.forEach(function(e) {
		an(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), Nt = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), Pt = 1, dr(!0), Q.forEach(function(e) {
		var t = tn(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), dr(!1), Pt = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), K.forEach(function(e) {
		an(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), ar(At, 1), lt.pause(), sr++, or = 2, gr(2), Q.forEach(function(e) {
		return an(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), or = $.isRefreshing = !1, er("refresh");
}, pr = 0, mr = 1, hr, gr = function(e) {
	if (e === 2 || !or && !Nt) {
		$.isUpdating = !0, hr && hr.update(0);
		var t = Q.length, n = Lt(), r = n - Rt >= 50, i = t && Q[0].scroll();
		if (mr = pr > i ? -1 : 1, or || (pr = i), r && (zt && !ht && n - zt > 200 && (zt = 0, er("scrollEnd")), ft = Rt, Rt = n), mr < 0) {
			for (_t = t; _t-- > 0;) Q[_t] && Q[_t].update(0, r);
			mr = 1;
		} else for (_t = 0; _t < t; _t++) Q[_t] && Q[_t].update(0, r);
		$.isUpdating = !1;
	}
	Kn = 0;
}, _r = [
	dn,
	fn,
	mn,
	pn,
	Sn + bn,
	Sn + _n,
	Sn + yn,
	Sn + vn,
	"display",
	"flexShrink",
	"float",
	"zIndex",
	"gridColumnStart",
	"gridColumnEnd",
	"gridRowStart",
	"gridRowEnd",
	"gridArea",
	"justifySelf",
	"alignSelf",
	"placeSelf",
	"order"
], vr = _r.concat([
	hn,
	gn,
	"boxSizing",
	"max" + Cn,
	"max" + wn,
	"position",
	Sn,
	xn,
	xn + yn,
	xn + _n,
	xn + bn,
	xn + vn
]), yr = function(e, t, n) {
	Sr(n);
	var r = e._gsap;
	if (r.spacerIsNative) Sr(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, br = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = _r.length, a = t.style, o = e.style, s; i--;) s = _r[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[mn] = o[pn] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[hn] = An(e, Xe) + Tn, a[gn] = An(e, Ze) + Tn, a[xn] = o[Sn] = o[fn] = o[dn] = "0", Sr(r), o[hn] = o["max" + Cn] = n[hn], o[gn] = o["max" + wn] = n[gn], o[xn] = n[xn], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, xr = /([A-Z])/g, Sr = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(xr, "-$1").toLowerCase());
	}
}, Cr = function(e) {
	for (var t = vr.length, n = e.style, r = [], i = 0; i < t; i++) r.push(vr[i], n[vr[i]]);
	return r.t = e, r;
}, wr = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Tr = {
	left: 0,
	top: 0
}, Er = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	an(e) && (e = e(s)), rn(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Hn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), on(e)) f && (e = J.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && Wn(o, n, r, !0);
	else {
		an(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Qe(t, s) || Z, y = kn(_) || {}, (!y || !y.left && !y.top) && En(_).display === "none" && (S = _.style.display, _.style.display = "block", y = kn(_), S ? _.style.display = S : _.style.removeProperty("display")), b = Hn(v[0], y[r.d]), x = Hn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && Wn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, Wn(a, C, r, w && C > 20 || !w && (u ? Math.max(Z[h], st[h]) : a.parentNode[h]) <= C + 1), u && (c = kn(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Tn));
	}
	return f && _ && (h = kn(_), f.seek(d), g = kn(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, Dr = /(webkit|moz|length|cssText|inset)/i, Or = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Z) {
			for (a in e._stOrig = i.cssText, o = En(e), o) !+a && !Dr.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		J.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, kr = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, Ar = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, J.set(e, r);
}, jr = function(e, t) {
	var n = et(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = kr(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			K.cache++, t.tween && gr();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = J.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, In(e, "wheel", n.wheelHandler), $.isTouch && In(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		ot || e.register(J) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), kt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Bt) {
			this.update = this.refresh = this.kill = Kt;
			return;
		}
		t = On(rn(t) || on(t) || t.nodeType ? { trigger: t } : t, Bn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Xe : Ze, T = !l && l !== 0, E = Qe(t.scroller || Y), D = J.core.getCache(E), O = Xt(E), ee = ("pinType" in t ? t.pinType : He(E, "pinType") || O && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = T && t.toggleActions.split(" "), j = "markers" in t ? t.markers : Bn.markers, te = O ? 0 : parseFloat(En(E)["border" + w.p2 + Cn]) || 0, M = this, ne = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, re = $t(E, O, w), ie = en(E, O), ae = 0, oe = 0, se = 0, N = et(E, w), ce, P, le, ue, de, F, I, fe, L, R, pe, z, me, B, he, ge, _e, ve, V, ye, H, be, xe, U, Se, Ce, we, Te, Ee, W, De, G, Oe, ke, Ae, je, Me, Ne, Pe;
		if (M._startClamp = M._endClamp = !1, M._dir = w, m *= 45, M.scroller = E, M.scroll = x ? x.time.bind(x) : N, ue = N(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (xt = 1, t.refreshPriority === -9999 && (hr = M)), D.tweenScroll = D.tweenScroll || {
			top: jr(E, Ze),
			left: jr(E, Xe)
		}, M.tweenTo = ce = D.tweenScroll[w.p], M.scrubDuration = function(e) {
			Oe = on(e) && e, Oe ? G ? G.duration(e) : G = J.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Oe,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (G && G.progress(1).kill(), G = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), W = 0, o || (o = n.vars.id)), v && ((!sn(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Z.style && J.set(O ? [Z, st] : E, { scrollBehavior: "auto" }), K.forEach(function(e) {
			return an(e) && e.target === (O ? X.scrollingElement || st : E) && (e.smooth = !1);
		}), le = an(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Mn(n) : v.snapTo === "labelsDirectional" ? Pn(n) : v.directional === !1 ? J.utils.snap(v.snapTo) : function(e, t) {
			return Nn(v.snapTo)(e, Lt() - oe < 500 ? 0 : t.direction);
		}, ke = v.duration || {
			min: .1,
			max: 2
		}, ke = sn(ke) ? dt(ke.min, ke.max) : dt(ke, ke), Ae = J.delayedCall(v.delay || Oe / 2 || .1, function() {
			var e = N(), t = Lt() - oe < 500, r = ce.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !ht && ae !== e) {
				var i = (e - F) / B, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - De) / (Lt() - ft) * 1e3 || 0, s = J.utils.clamp(-i, 1 - i, un(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = le(c, M), on(l) || (l = c), u = Math.max(0, Math.round(F + l * B)), e <= I && e >= F && u !== e) {
					if (r && !r._initted && r.data <= un(u - e)) return;
					v.inertia === !1 && (s = l - i), ce(u, {
						duration: ke(un(Math.max(un(c - a), un(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: un(u - e),
						onInterrupt: function() {
							return Ae.restart(!0) && p && ln(M, p);
						},
						onComplete: function() {
							M.update(), ae = N(), n && !T && (G ? G.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), W = De = n && !T ? n.totalProgress() : M.progress, g && g(M), m && ln(M, m);
						}
					}, e, s * B, u - e - s * B), f && ln(M, f, ce.tween);
				}
			} else M.isActive && ae !== e && Ae.restart(!0);
		}).pause()), o && (Gn[o] = M), u = M.trigger = Qe(u || d !== !0 && d), Pe = u && u._gsap && u._gsap.stRevert, Pe && (Pe = Pe(M)), d = d === !0 ? u : Qe(d), rn(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Sn || (f = !f && d.parentNode && d.parentNode.style && En(d.parentNode).display === "flex" ? !1 : xn), M.pin = d, P = J.core.getCache(d), P.spacer ? he = P.pinState : (b && (b = Qe(b), b && !b.nodeType && (b = b.current || b.nativeElement), P.spacerIsNative = !!b, b && (P.spacerState = Cr(b))), P.spacer = ve = b || X.createElement("div"), ve.classList.add("pin-spacer"), o && ve.classList.add("pin-spacer-" + o), P.pinState = he = Cr(d)), t.force3D !== !1 && J.set(d, { force3D: !0 }), M.spacer = ve = P.spacer, Ee = En(d), U = Ee[f + w.os2], ye = J.getProperty(d), H = J.quickSetter(d, w.a, Tn), br(d, ve, Ee), _e = Cr(d)), j) {
			z = sn(j) ? On(j, zn) : zn, R = Un("scroller-start", o, E, w, z, 0), pe = Un("scroller-end", o, E, w, z, 0, R), V = R["offset" + w.op.d2];
			var Fe = Qe(He(E, "content") || E);
			fe = this.markerStart = Un("start", o, Fe, w, z, V, 0, x), L = this.markerEnd = Un("end", o, Fe, w, z, V, 0, x), x && (Ne = J.quickSetter([fe, L], w.a, Tn)), !ee && !(Re.length && He(E, "fixedMarkers") === !0) && (Dn(O ? Z : E), J.set([R, pe], { force3D: !0 }), Ce = J.quickSetter(R, w.a, Tn), Te = J.quickSetter(pe, w.a, Tn));
		}
		if (x) {
			var Ie = x.vars.onUpdate, Le = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				M.update(0, 0, 1), Ie && Ie.apply(x, Le || []);
			});
		}
		if (M.previous = function() {
			return Q[Q.indexOf(M) - 1];
		}, M.next = function() {
			return Q[Q.indexOf(M) + 1];
		}, M.revert = function(e, t) {
			if (!t) return M.kill(!0);
			var r = e !== !1 || !M.enabled, i = mt;
			r !== M.isReverted && (r && (je = Math.max(N(), M.scroll.rec || 0), se = M.progress, Me = n && n.progress()), fe && [
				fe,
				L,
				R,
				pe
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (mt = M, M.update(r)), d && (!y || !M.isActive) && (r ? yr(d, ve, he) : br(d, ve, En(d), Se)), r || M.update(r), mt = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((mt || !M.enabled) && !i)) {
				if (d && r && zt) {
					In(e, "scrollEnd", $n);
					return;
				}
				!or && ne && ne(M), mt = M, ce.tween && !a && (ce.tween.kill(), ce.tween = 0), G && G.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = re(), l = ie(), m = x ? x.duration() : tn(E, w), h = B <= .01 || !B, g = 0, _ = o || 0, v = sn(a) ? a.end : t.end, b = t.endTrigger || u, S = sn(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = M.pinnedContainer = t.pinnedContainer && Qe(t.pinnedContainer, M), D = u && Math.max(0, Q.indexOf(M)) || 0, k = D, A, P, le, z, V, H, U, Ce, Te, Ee, W, De, Oe;
				for (j && sn(a) && (De = J.getProperty(R, w.p), Oe = J.getProperty(pe, w.p)); k-- > 0;) H = Q[k], H.end || H.refresh(0, 1) || (mt = M), U = H.pin, U && (U === u || U === d || U === C) && !H.isReverted && (Ee || (Ee = []), Ee.unshift(H), H.revert(!0, !0)), H !== Q[k] && (D--, k--);
				for (an(S) && (S = S(M)), S = Vt(S, "start", M), F = Er(S, u, s, w, N(), fe, R, M, l, te, ee, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), an(v) && (v = v(M)), rn(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (rn(S) ? S.split(" ")[0] : "") + v : (g = Hn(v.substr(2), s), v = rn(S) ? S : (x ? J.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, F) : F) + g, b = u)), v = Vt(v, "end", M), I = Math.max(F, Er(v || (b ? "100% 0" : m), b, s, w, N() + g, L, pe, M, l, te, ee, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = D; k--;) H = Q[k] || {}, U = H.pin, U && H.start - H._pinPush <= F && !x && H.end > 0 && (A = H.end - (M._startClamp ? Math.max(0, H.start) : H.start), (U === u && H.start - H._pinPush < F || U === C) && isNaN(S) && (g += A * (1 - H.progress)), U === d && (_ += A));
				if (F += g, I += g, M._startClamp && (M._startClamp += g), M._endClamp && !or && (M._endClamp = I || -.001, I = Math.min(I, tn(E, w))), B = I - F || (F -= .01) && .001, h && (se = J.utils.clamp(0, 1, J.utils.normalize(F, I, je))), M._pinPush = _, fe && g && (A = {}, A[w.a] = "+=" + g, C && (A[w.p] = "-=" + N()), J.set([fe, L], A)), d && !(Pt && M.end >= tn(E, w))) A = En(d), z = w === Ze, le = N(), be = parseFloat(ye(w.a)) + _, !m && I > 1 && (W = (O ? X.scrollingElement || st : E).style, W = {
					style: W,
					value: W["overflow" + w.a.toUpperCase()]
				}, O && En(Z)["overflow" + w.a.toUpperCase()] !== "scroll" && (W.style["overflow" + w.a.toUpperCase()] = "scroll")), br(d, ve, A), _e = Cr(d), P = kn(d, !0), Ce = ee && et(E, z ? Xe : Ze)(), f ? (Se = [f + w.os2, B + _ + Tn], Se.t = ve, k = f === xn ? An(d, w) + B + _ : 0, k && (Se.push(w.d, k + Tn), ve.style.flexBasis !== "auto" && (ve.style.flexBasis = k + Tn)), Sr(Se), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ee && N(je)) : (k = An(d, w), k && ve.style.flexBasis !== "auto" && (ve.style.flexBasis = k + Tn)), ee && (V = {
					top: P.top + (z ? le - F : Ce) + Tn,
					left: P.left + (z ? Ce : le - F) + Tn,
					boxSizing: "border-box",
					position: "fixed"
				}, V[hn] = V["max" + Cn] = Math.ceil(P.width) + Tn, V[gn] = V["max" + wn] = Math.ceil(P.height) + Tn, V[Sn] = V[Sn + yn] = V[Sn + _n] = V[Sn + bn] = V[Sn + vn] = "0", V[xn] = A[xn], V[xn + yn] = A[xn + yn], V[xn + _n] = A[xn + _n], V[xn + bn] = A[xn + bn], V[xn + vn] = A[xn + vn], ge = wr(he, V, y), or && N(0)), n ? (Te = n._initted, St(1), n.render(n.duration(), !0, !0), xe = ye(w.a) - be + B + _, we = Math.abs(B - xe) > 1, ee && we && ge.splice(ge.length - 2, 2), n.render(0, !0, !0), Te || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), St(0)) : xe = B, W && (W.value ? W.style["overflow" + w.a.toUpperCase()] = W.value : W.style.removeProperty("overflow-" + w.a));
				else if (u && N() && !x) for (P = u.parentNode; P && P !== Z;) P._pinOffset && (F -= P._pinOffset, I -= P._pinOffset), P = P.parentNode;
				Ee && Ee.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = F, M.end = I, ue = de = or ? je : N(), !x && !or && (ue < je && N(je), M.scroll.rec = 0), M.revert(!1, !0), oe = Lt(), Ae && (ae = -1, Ae.restart(!0)), mt = 0, n && T && (n._initted || Me) && n.progress() !== Me && n.progress(Me || 0, !0).render(n.time(), !0, !0), (h || se !== M.progress || x || p || n && !n._initted) && (n && !T && (n._initted || se || n.vars.immediateRender !== !1) && n.totalProgress(x && F < -.001 && !se ? J.utils.normalize(F, I, 0) : se, !0), M.progress = h || (ue - F) / B === se ? 0 : se), d && f && (ve._pinOffset = Math.round(M.progress * xe)), G && G.invalidate(), isNaN(De) || (De -= J.getProperty(R, w.p), Oe -= J.getProperty(pe, w.p), Ar(R, w, De), Ar(fe, w, De - (o || 0)), Ar(pe, w, Oe), Ar(L, w, Oe - (o || 0))), h && !or && M.update(), c && !or && !me && (me = !0, c(M), me = !1);
			}
		}, M.getVelocity = function() {
			return (N() - de) / (Lt() - ft) * 1e3 || 0;
		}, M.endAnimation = function() {
			cn(M.callbackAnimation), n && (G ? G.progress(1) : n.paused() ? T || cn(n, M.direction < 0, 1) : cn(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (F || M.refresh() || F) + n.labels[e] / n.duration() * B || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (rn(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= F : e.start >= I;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = or === !0 ? je : M.scroll(), c = e ? 0 : (o - F) / B, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, D, O, j, te, ne;
				if (t && (de = ue, ue = x ? N() : o, v && (De = W, W = n && !T ? n.totalProgress() : u)), m && d && !mt && !It && zt && (!u && F < o + (o - de) / (Lt() - ft) * m ? u = 1e-4 : u === 1 && I > o + (o - de) / (Lt() - ft) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, j = h !== g, O = j || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, O && !mt && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !j && A[b + 1] !== "none" && A[b + 1] || A[b], ne = n && (D === "complete" || D === "reset" || D in n))), C && (j || ne) && (ne || l || !n) && (an(C) ? C(M) : M.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (G && !mt && !It ? (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start), G.resetTo ? G.resetTo("totalProgress", u, n._tTime / n._tDur) : (G.vars.totalProgress = u, G.invalidate().restart())) : n && n.totalProgress(u, !!(mt && (oe || e)))), d) {
						if (e && f && (ve.style[f + w.os2] = U), !ee) H(qt(be + xe * u));
						else if (O) {
							if (te = !e && u > p && I + 1 > o && o + 1 >= tn(E, w), y) if (!e && (h || te)) {
								var re = kn(d, !0), ie = o - F;
								Or(d, Z, re.top + (w === Ze ? ie : 0) + Tn, re.left + (w === Ze ? 0 : ie) + Tn);
							} else Or(d, ve);
							Sr(h || te ? ge : _e), we && u < 1 && h || H(be + (u === 1 && !te ? xe : 0));
						}
					}
					v && !ce.tween && !mt && !It && Ae.restart(!0), a && (j || _ && u && (u < 1 || !Ft)) && ut(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(M), O && !mt ? (T && (ne && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(M)), (j || !Ft) && (s && j && ln(M, s), k[b] && ln(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), j || (b = u === 1 ? 1 : 3, k[b] && ln(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (on(S) ? S : 2500) && (cn(M.callbackAnimation), G ? G.progress(1) : cn(n, D === "reverse" ? 1 : !u, 1))) : T && i && !mt && i(M);
				}
				if (Te) {
					var ae = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					Ce(ae + +!!R._isFlipped), Te(ae);
				}
				Ne && Ne(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, In(E, "resize", Xn), O || In(E, "scroll", Jn), ne && In(e, "refreshInit", ne), t !== !1 && (M.progress = se = 0, ue = de = ae = N()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && ce ? ce.tween : G;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: Ht(e, n && !!M._startClamp),
				end: Ht(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (Se && e) {
				var t = Se.indexOf(w.d) + 1;
				Se[t] = parseFloat(Se[t]) + e + Tn, Se[1] = parseFloat(Se[1]) + e + Tn, Sr(Se);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || G && G.pause(), je = 0, P && (P.uncache = 1), ne && Ln(e, "refreshInit", ne), Ae && (Ae.pause(), ce.tween && ce.tween.kill() && (ce.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== M) return;
				Ln(E, "resize", Xn), O || Ln(E, "scroll", Jn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), G && !r && G.kill(), o && delete Gn[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === _t && mr > 0 && _t--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || or || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), fe && [
				fe,
				L,
				R,
				pe
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), hr === M && (hr = 0), d && (P && (P.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (P.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Pe && Pe(M), n && n.add && !B) {
			var ze = M.update;
			M.update = function() {
				M.update = ze, K.cache++, F || I || M.refresh();
			}, J.delayedCall(.01, M.update), B = .01, F = I = 0;
		} else M.refresh();
		d && lr();
	}, e.register = function(t) {
		return ot || (J = t || Yt(), Jt() && window.document && e.enable(), ot = Bt), ot;
	}, e.defaults = function(e) {
		if (e) for (var t in e) Bn[t] = e[t];
		return Bn;
	}, e.disable = function(e, t) {
		Bt = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), Ln(Y, "wheel", Jn), Ln(X, "scroll", Jn), clearInterval(pt), Ln(X, "touchcancel", Kt), Ln(Z, "touchstart", Kt), Fn(Ln, X, "pointerdown,touchstart,mousedown", Wt), Fn(Ln, X, "pointerup,touchend,mouseup", Gt), lt.kill(), nn(Ln);
		for (var n = 0; n < K.length; n += 3) Rn(Ln, K[n], K[n + 1]), Rn(Ln, K[n], K[n + 2]);
	}, e.enable = function() {
		if (Y = window, X = document, st = X.documentElement, Z = X.body, J) if (ut = J.utils.toArray, dt = J.utils.clamp, kt = J.core.context || Kt, St = J.core.suppressOverwrites || Kt, At = Y.history.scrollRestoration || "auto", pr = Y.pageYOffset || 0, J.core.globals("ScrollTrigger", e), Z) {
			Bt = 1, jt = document.createElement("div"), jt.style.height = "100vh", jt.style.position = "absolute", ur(), Ut(), q.register(J), e.isTouch = q.isTouch, Ot = q.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Tt = q.isTouch === 1, In(Y, "wheel", Jn), ct = [
				Y,
				X,
				st,
				Z
			], J.matchMedia ? (e.matchMedia = function(e) {
				var t = J.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, J.addEventListener("matchMediaInit", function() {
				rr(), ir();
			}), J.addEventListener("matchMediaRevert", function() {
				return nr();
			}), J.addEventListener("matchMedia", function() {
				fr(0, 1), er("matchMedia");
			}), J.matchMedia().add("(orientation: portrait)", function() {
				return Yn(), Yn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), Yn(), In(X, "scroll", Jn);
			var t = Z.hasAttribute("style"), n = Z.style, r = n.borderTopStyle, i = J.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = kn(Z), Ze.m = Math.round(a.top + Ze.sc()) || 0, Xe.m = Math.round(a.left + Xe.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Z.setAttribute("style", ""), Z.removeAttribute("style")), pt = setInterval(qn, 250), J.delayedCall(.5, function() {
				return It = 0;
			}), In(X, "touchcancel", Kt), In(Z, "touchstart", Kt), Fn(In, X, "pointerdown,touchstart,mousedown", Wt), Fn(In, X, "pointerup,touchend,mouseup", Gt), gt = J.utils.checkPrefix("transform"), vr.push(gt), ot = Lt(), lt = J.delayedCall(.2, fr).pause(), bt = [
				X,
				"visibilitychange",
				function() {
					var e = Y.innerWidth, t = Y.innerHeight;
					X.hidden ? (vt = e, yt = t) : (vt !== e || yt !== t) && Xn();
				},
				X,
				"DOMContentLoaded",
				fr,
				Y,
				"load",
				fr,
				Y,
				"resize",
				Xn
			], nn(In), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < K.length; o += 3) Rn(Ln, K[o], K[o + 1]), Rn(Ln, K[o], K[o + 2]);
		} else X && X.addEventListener("DOMContentLoaded", function t() {
			e.enable(), X.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (Ft = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(pt) || (pt = n) && setInterval(qn, n), "ignoreMobileResize" in t && (Tt = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (nn(Ln) || nn(In, t.autoRefreshEvents || "none"), Ct = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Qe(e), r = K.indexOf(n), i = Xt(n);
		~r && K.splice(r, i ? 6 : 2), t && (i ? Re.unshift(Y, t, Z, t, st, t) : Re.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (rn(e) ? Qe(e) : e).getBoundingClientRect(), i = r[n ? hn : gn] * t || 0;
		return n ? r.right - i > 0 && r.left + i < Y.innerWidth : r.bottom - i > 0 && r.top + i < Y.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		rn(e) && (e = Qe(e));
		var r = e.getBoundingClientRect(), i = r[n ? hn : gn], a = t == null ? i / 2 : t in Vn ? Vn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / Y.innerWidth : (r.top + a) / Y.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = Zn.killAll || [];
			Zn = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? ut(e).forEach(function(e) {
		if (e && e.style) {
			var t = tr.indexOf(e);
			t >= 0 && tr.splice(t, 5), tr.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), J.core.getCache(e), kt());
		}
	}) : tr;
}, $.revert = function(e, t) {
	return ir(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? Xn(!0) : (ot || $.register()) && fr(!0);
}, $.update = function(e) {
	return ++K.cache && gr(e === !0 ? 2 : 0);
}, $.clearScrollMemory = ar, $.maxScroll = function(e, t) {
	return tn(e, t ? Xe : Ze);
}, $.getScrollFunc = function(e, t) {
	return et(Qe(e), t ? Xe : Ze);
}, $.getById = function(e) {
	return Gn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!zt;
}, $.snapDirectional = Nn, $.addEventListener = function(e, t) {
	var n = Zn[e] || (Zn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = Zn[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, $.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = J.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && an(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return an(a) && (a = a(), In($, "refresh", function() {
		return a = t.batchMax();
	})), ut(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var Mr = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Nr = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (q.isTouch ? " pinch-zoom" : "") : "none", t === st && e(Z, n);
}, Pr = {
	auto: 1,
	scroll: 1
}, Fr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || J.core.getCache(i), o = Lt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Z && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Pr[(s = En(i)).overflowY] || Pr[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !Xt(i) && (Pr[(s = En(i)).overflowY] || Pr[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, Ir = function(e, t, n, r) {
	return q.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && Fr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && In(X, q.eventTypes[0], zr, !1, !0);
		},
		onDisable: function() {
			return Ln(X, q.eventTypes[0], zr, !0);
		}
	});
}, Lr = /(input|label|select|textarea)/i, Rr, zr = function(e) {
	var t = Lr.test(e.target.tagName);
	(t || Rr) && (e._gsapAllow = !0, Rr = t);
}, Br = function(e) {
	sn(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Qe(e.target) || st, l = J.core.globals().ScrollSmoother, u = l && l.get(), d = Ot && (e.content && Qe(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = et(c, Ze), p = et(c, Xe), m = 1, h = (q.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth, g = 0, _ = an(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = Ir(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = Kt, C = Kt, w = function() {
		s = tn(c, Ze), C = dt(+!!Ot, s), n && (S = dt(0, tn(c, Xe))), v = sr;
	}, T = function() {
		d._gsap.y = qt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = qt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = qt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = K.cache, gr();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, ee, k, A = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && J.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return Ot && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = qt((Y.visualViewport && Y.visualViewport.scale || 1) / h), D.pause(), e !== m && Nr(c, m > 1.01 || !n && "x"), O = p(), ee = f(), w(), v = sr;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) k.restart(!0);
		else {
			K.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Mr(p, i, o, tn(c, Xe)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Mr(f, i, o, tn(c, Ze)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (Ot && D.vars.scrollY >= s || i >= s - 1) && J.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), Lt() - g > 1e3 && (v = 0, g = Lt());
	}, e.onChange = function(e, t, r, i, a) {
		if (sr !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? ee + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (ee += c - s), f(c);
		}
		(r || t) && gr();
	}, e.onEnable = function() {
		Nr(c, !n && "x"), $.addEventListener("refresh", A), In(Y, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		Nr(c, !0), Ln(Y, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new q(e), o.iOS = Ot, Ot && !f() && f(1), Ot && J.ticker.add(Kt), k = o._dc, D = J.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: kr(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: gr,
		onComplete: k.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (an(e)) return Q.sort(e);
	var t = Y.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Y.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new q(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return wt;
	if (e === !0 && wt) return wt.enable();
	if (e === !1) {
		wt && wt.kill(), wt = e;
		return;
	}
	var t = e instanceof q ? e : Br(e);
	return wt && wt.target === t.target && wt.kill(), Xt(t.target) && (wt = t), t;
}, $.core = {
	_getVelocityProp: tt,
	_inputObserver: Ir,
	_scrollers: K,
	_proxies: Re,
	bridge: {
		ss: function() {
			zt || er("scrollStart"), zt = Lt();
		},
		ref: function() {
			return mt;
		}
	}
}, Yt() && J.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var Vr = "h1, h2, h3, h4, h5, h6, p, .u-text-eyebrow, a.button-outlined, a.text-link, button.button-outlined, .editionen_button_wrap a, .quote-block, .news_event .intro_date_infos > .u-p-small, .news_highlight_section .intro_date_infos > .u-p-small", Hr = ".w-richtext, .rich-text", Ur = [
	".fwm-modal",
	"[data-modal]",
	"[data-site-modal]",
	"[data-modal-content]",
	"[data-modal-rich-text]",
	"[data-modal-body]",
	".site-lightbox",
	"[data-site-lightbox]",
	"[role=\"dialog\"]",
	"[data-reveal=\"off\"]",
	"[data-fade]",
	".top_bar_section",
	"[data-site-menu]",
	".site-preloader",
	".werk_hero_section",
	".editionen_media",
	"[data-insta-feed]",
	".accordion_body",
	".bio_era_years",
	".bio_era_title",
	".modal_registry",
	".hm_cms",
	".works_source"
].join(", "), Wr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", Gr = "data-reveal-pending", Kr = "data-reveal-ready", qr = {
	y: 20,
	opacity: 0
}, Jr = {
	y: 0,
	opacity: 1,
	duration: 1,
	ease: "atelier-fade-up"
}, Yr = !1;
function Xr(e) {
	var t;
	return e.closest(Ur) || e.closest("[hidden]") || /^\/news\/?$/i.test(window.location.pathname) && e.closest(".news_event") || e.matches("p") && e.closest(".intro_date_infos > .u-p-small") || e.closest(".quote-block") && !e.matches(".quote-block") || e.matches(".atelier_hero_section .atelier_slide_heading, .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_heading") || e.matches(".bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_sub") || e.matches("[data-masked-line-reveal], [data-masked-reveal-label]") || e.matches(".work_about_heading, .editionen_title, .accordion_heading") || e.matches(".atelier_about_section.u-theme-dark5 .atelier_about_h2, .atelier_about_section.u-theme-dark5 .atelier_story_p") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function Zr(e) {
	if (e.closest(Wr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function Qr(e) {
	let t = window.getComputedStyle(e);
	return [
		Math.round(e.getBoundingClientRect().width * 10) / 10,
		t.fontFamily,
		t.fontSize,
		t.fontWeight,
		t.fontStyle,
		t.lineHeight,
		t.letterSpacing,
		t.fontStretch
	].join("|");
}
function $r(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.targets.forEach((t, n) => {
		t.style.opacity = e.played ? "1" : e.originals[n].opacity, t.style.transform = e.originals[n].transform;
	}), e.trigger = void 0, e.timeline = void 0;
}
function ei(e) {
	return e.signature = Qr(e.element), e.targets.forEach((e) => {
		e.removeAttribute(Gr), e.setAttribute(Kr, "");
	}), e.targets;
}
function ti(e) {
	let t = ei(e);
	if (!t.length || e.played) return;
	let n = b.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0, e.targets.forEach((t, n) => {
				t.style.transform = e.originals[n].transform;
			});
		}
	});
	n.fromTo(t, qr, Jr), e.timeline = n, e.trigger = $.create({
		trigger: e.element,
		start: e.targets.some((e) => e.matches("p")) ? "top 75%" : "top 90%",
		end: "bottom 0%",
		invalidateOnRefresh: !1,
		animation: n
	});
}
function ni(e, t) {
	e.forEach((e, n) => {
		let r = ei(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, qr, Jr, .6 + n * .12 + i);
	}), t.call(() => {
		e.forEach((e) => e.targets.forEach((t, n) => {
			t.style.transform = e.originals[n].transform;
		}));
	});
}
function ri() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function ii(e = document) {
	var t;
	if (Yr || u()) return;
	Yr = !0, b.registerPlugin($, U), U.create("atelier-fade-up", ".33,1,.68,1");
	let n = [], r = /* @__PURE__ */ new WeakSet(), i, a, s = 0, c = 0, l = !1, d = !1, f = () => {
		let t = /* @__PURE__ */ new Map();
		o(Vr, e).filter(Xr).forEach((e) => {
			var n;
			let i = e.matches("p") ? e.closest(Hr) : null, a = i == null ? e : i;
			r.has(a) || t.set(a, [...(n = t.get(a)) == null ? [] : n, e]);
		}), /^\/news\/?$/i.test(window.location.pathname) && o(".news_event", e).forEach((e) => {
			var n;
			if (r.has(e)) return;
			let i = e.querySelector(".intro_content_about"), a = e.querySelector(".intro_date"), o = [...Array.from((n = i == null ? void 0 : i.children) == null ? [] : n).filter((e) => e instanceof HTMLElement), ...a ? [a] : []];
			i && a && o.length && t.set(e, o);
		}), t.forEach((e, t) => {
			r.add(t);
			let i = {
				element: t,
				targets: e,
				hero: !l && Zr(t),
				played: !1,
				signature: "",
				originals: e.map((e) => ({
					opacity: e.style.opacity,
					transform: e.style.transform
				}))
			};
			n.push(i), i.targets.forEach((e) => e.setAttribute(Gr, "")), l && (ti(i), a == null || a.observe(i.element));
		}), l && t.size && $.refresh();
	};
	f();
	let p = new MutationObserver(() => {
		c || (c = requestAnimationFrame(() => {
			c = 0, f();
		}));
	});
	p.observe(document.documentElement, {
		childList: !0,
		subtree: !0
	});
	let m = () => {
		l && (i && i.progress() > 0 && (d = !0, n.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), n.forEach($r), i = b.timeline({ paused: !0 }), ni(n.filter((e) => e.hero && e.element.isConnected), i), n.filter((e) => !e.hero && e.element.isConnected).forEach(ti), !d && i.duration() > 0 && (i.call(() => {
			d = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, h = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, n.some((e) => e.element.isConnected && Qr(e.element) !== e.signature) && m();
		}));
	};
	Promise.all([ri(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		f(), l = !0, m(), a = new ResizeObserver(h), n.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", h, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", m);
	}), window.addEventListener("pagehide", () => {
		var e;
		p.disconnect(), window.cancelAnimationFrame(c), window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), n.forEach($r), window.removeEventListener("resize", h), (e = document.fonts) == null || e.removeEventListener("loadingdone", m), n.forEach((e) => e.targets.forEach((e) => e.removeAttribute(Gr)));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var ai = "[data-lightbox-src]", oi = "js-lightbox", si = `.${oi}`, ci = `${ai}, ${si}`, li = "[data-site-lightbox]", ui = "[data-lightbox-close]", di = "[data-lightbox-prev]", fi = "[data-lightbox-next]", pi = "[data-lightbox-auto-icon]", mi = "site-lightbox-trigger", hi = "site-lightbox-trigger__image", gi = "site-lightbox-trigger__icon", _i = "w-dyn-bind-empty", vi = "/plugins/Basic/assets/placeholder.", yi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", bi = !1, xi = null, Si = null, Ci = [], wi = 0, Ti = !1, Ei = null;
function Di(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return Oi(e);
	let n = s("img", e);
	return n ? Oi(n) : "";
}
function Oi(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(_i) || t.includes(vi) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ki(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Ai(e) {
	let t = Di(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		credit: r(e, "data-lightbox-credit"),
		alt: ki(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ji(e) {
	let t = Ai(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(ci).filter((e) => r(e, "data-lightbox-group") === t.group).map(Ai).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function Mi() {
	let e = document.createElement("span");
	return e.className = gi, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = yi, e;
}
function Ni(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function Pi(e) {
	if (!Ni(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = xi == null ? void 0 : xi.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Fi(e) {
	if (e.closest(`.${mi}`) || !Di(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${mi} ${oi}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(oi), e.classList.add(hi), e.before(t), t.append(e, Mi()), Pi(t);
}
function Ii(e) {
	if (e instanceof HTMLImageElement) {
		Fi(e);
		return;
	}
	Di(e).trim() && (e.classList.add(mi), Pi(e), s(pi, e) || e.append(Mi()));
}
function Li() {
	o(si).forEach(Ii);
}
function Ri(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function zi() {
	var e, t, n, r, i, a;
	if (Si) return Bi(Si), Si;
	let o = s(li), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = xi == null ? void 0 : xi.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = Ri((l = xi == null ? void 0 : xi.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = Ri((u = xi == null ? void 0 : xi.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = Ri((d = xi == null ? void 0 : xi.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0;
		let o = document.createElement("span");
		o.className = "site-lightbox__credit", o.setAttribute("data-lightbox-credit-output", ""), o.hidden = !0, r.append(i, a, o), c.append(e, t, r, n), document.body.append(c);
	}
	let f = s("[data-lightbox-credit-output]", c);
	if (!f) {
		var p;
		f = document.createElement("span"), f.className = "site-lightbox__credit", f.setAttribute("data-lightbox-credit-output", ""), f.hidden = !0, ((p = s(".site-lightbox__figure", c)) == null ? c : p).append(f);
	}
	let m = {
		root: c,
		image: (t = s("[data-lightbox-image]", c)) == null ? document.createElement("img") : t,
		caption: (n = s("[data-lightbox-caption-output]", c)) == null ? document.createElement("figcaption") : n,
		credit: f,
		closeButton: (r = s(ui, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(di, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(fi, c)) == null ? document.createElement("button") : a
	};
	return Si = m, Bi(m), !o && !document.body.contains(c) && document.body.append(c), m;
}
function Bi(e) {
	var t, n, r, i;
	let a = (t = xi == null ? void 0 : xi.t("close", "Close")) == null ? "Close" : t, o = (n = xi == null ? void 0 : xi.t("previous", "Previous")) == null ? "Previous" : n, s = (r = xi == null ? void 0 : xi.t("next", "Next")) == null ? "Next" : r, c = (i = xi == null ? void 0 : xi.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function Vi() {
	let e = zi(), t = Ci[wi];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = Ci.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(wi), e.root.dataset.lightboxCount = String(Ci.length);
}
function Hi(e) {
	let t = zi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function Ui(e) {
	Ci.length < 2 || (wi = (e + Ci.length) % Ci.length, Vi());
}
function Wi() {
	Ui(wi + 1);
}
function Gi() {
	Ui(wi - 1);
}
function Ki(e) {
	var t;
	let n = ji(e);
	if (!n) return;
	let r = Ti;
	Ci = n.items, wi = n.index, Ei = e, Ti = !0, Vi(), Hi(!0), r || p();
	let i = zi();
	m(i.closeButton || i.root);
	let a = Ci[wi];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: wi,
		count: Ci.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function qi() {
	var t;
	if (!Ti || !Si) return;
	let r = Si, i = Ei, a = (t = Ci[wi]) == null ? null : t;
	Hi(!1), n(), Ti = !1, Ci = [], wi = 0, Ei = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function Ji(e) {
	if (!(!Ti || !Si)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), qi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), Wi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), Gi();
			return;
		}
		y(Si.root, e);
	}
}
function Yi(e) {
	!Ti || !Si || e.target === Si.root && qi();
}
function Xi(e) {
	return xi = e.i18n, Li(), bi || (g(document, "click", ci, (e, t) => {
		e.preventDefault(), Ki(t);
	}), g(document, "keydown", si, (e, t) => {
		Ni(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Ki(t));
	}), g(document, "click", ui, (e) => {
		e.preventDefault(), qi();
	}), g(document, "click", di, (e) => {
		e.preventDefault(), Gi();
	}), g(document, "click", fi, (e) => {
		e.preventDefault(), Wi();
	}), document.addEventListener("click", Yi), document.addEventListener("keydown", Ji, !0), bi = !0), {
		openLightbox: Ki,
		closeLightbox: qi
	};
}
//#endregion
//#region src/modules/modal-image.ts
function Zi(e, t, n) {
	var r;
	let i = (t == null ? "" : t).split(",").map((e) => e.trim().match(/^(\S+)\s+(\d+)w$/)).filter((e) => !!e).map((e) => ({
		url: e[1],
		width: Number(e[2])
	})).sort((e, t) => e.width - t.width), a = (r = i.find((e) => e.width >= n)) == null ? i[i.length - 1] : r;
	if (a) return a.url;
	try {
		let t = new URL(e, document.baseURI);
		return !/^(cdn\.prod\.website-files\.com|uploads-ssl\.webflow\.com)$/.test(t.hostname) || !/\.(jpe?g|png|webp)$/i.test(t.pathname) || /-p-\d+\.[^.]+$/i.test(t.pathname) ? e : (t.pathname = t.pathname.replace(/\.(jpe?g|png|webp)$/i, `-p-${n}.$1`), t.href);
	} catch (t) {
		return e;
	}
}
var Qi = /* @__PURE__ */ new Map(), $i = /* @__PURE__ */ new Map(), ea = /* @__PURE__ */ new Set();
function ta(e) {
	try {
		return new URL(e, document.baseURI).href;
	} catch (t) {
		return e;
	}
}
function na(e, t) {
	return `${e}\n${t}`;
}
function ra(e) {
	return new Promise((t) => {
		let n = new Image();
		n.loading = "eager", n.onload = () => {
			typeof n.decode == "function" ? n.decode().then(() => {
				ea.add(ta(e)), t(!0);
			}, () => t(!1)) : (ea.add(ta(e)), t(!0));
		}, n.onerror = () => t(!1), n.src = e;
	});
}
function ia(e, t) {
	let n = na(e, t), r = Qi.get(n);
	if (r) return r;
	let i = (async () => {
		let r = await ra(e) ? e : t;
		return r !== e && await ra(t), $i.set(n, r), r;
	})();
	return Qi.set(n, i), i;
}
function aa(e, t) {
	var n;
	return (n = $i.get(na(e, t))) == null ? e : n;
}
var oa = /* @__PURE__ */ new WeakMap();
function sa(e, t, n) {
	var r, i;
	let a = ((r = oa.get(e)) == null ? 0 : r) + 1;
	oa.set(e, a), e.loading = "eager", e.decoding = "async";
	let o = ta((i = t == null ? e.currentSrc : t) == null ? e.src : i), s = e.currentSrc === o && e.complete && e.naturalWidth > 0 && !e.classList.contains("is-image-pending") || ea.has(o);
	s ? e.classList.contains("is-image-pending") && e.classList.remove("is-image-pending") : e.classList.add("is-image-pending");
	let c = () => {
		(typeof e.decode == "function" ? e.decode().catch(() => void 0) : Promise.resolve()).then(() => {
			oa.get(e) === a && e.naturalWidth > 0 && (ea.add(e.currentSrc || e.src), e.classList.remove("is-image-pending"));
		});
	};
	e.onload = c, e.onerror = () => {
		if (oa.get(e) !== a || !n) return;
		e.classList.add("is-image-pending");
		let t = n;
		n = void 0, e.src = t;
	}, t !== void 0 && e.src !== o && (e.src = t), !s && e.complete && e.naturalWidth > 0 && e.currentSrc === o && c();
}
function ca(e) {
	var t;
	oa.set(e, ((t = oa.get(e)) == null ? 0 : t) + 1), e.onload = null, e.onerror = null, e.classList.remove("is-image-pending"), e.removeAttribute("src");
}
function la(e, t, n, r) {
	let i = aa(Zi(t, n, r), t);
	sa(e, i, i === t ? void 0 : t);
}
var ua = /* @__PURE__ */ new Set([
	"6a7db30517820876cd23f469",
	"6a7db3187795b95db7804762",
	"6a7db33f5031a1007e109876",
	"6a7db3495031a1007e10a89e",
	"6a7db34bd247654adf43324d"
]);
function da(e, t) {
	var n;
	let r = (n = e.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	return r && ua.has(r) ? new URL("../assets/modal-work-thumbnails/" + r + ".webp", import.meta.url).href : Zi(e, t, 500);
}
//#endregion
//#region src/modules/modal.ts
var fa = "[data-modal]", pa = "[data-modal-content]", ma = "[data-modal-open]", ha = "[data-modal-close]", ga = "a[href^=\"#modal:\"]", _a = "#modal:", va = 460, ya = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", ba = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", xa = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Sa = !1, Ca = !0, wa = null, Ta = null, Ea = "", Da = null, Oa = null, ka = /* @__PURE__ */ new Map();
function Aa(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(_a) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function ja() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(ha),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]"),
		rights: e.querySelector("[data-site-modal-rights]")
	};
	return t.closeButton.innerHTML = ya, t.lightboxIcon.innerHTML = ba, Na(t), t;
}
function Ma() {
	return (!Ta || !document.body.contains(Ta.root)) && (Ta = ja()), Na(Ta), Ta;
}
function Na(e) {
	var t, n;
	let r = (t = wa == null ? void 0 : wa.t("close", "Close")) == null ? "Close" : t, i = (n = wa == null ? void 0 : wa.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Pa(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Fa(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p;
	let m = e.querySelector("[data-modal-work]");
	if (!m) return null;
	let h = Pa(m, "[data-works-thumbnail]"), g = (t = (n = (r = m.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = m.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, _ = (a = (o = (s = m.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = m.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, v = (l = (u = (d = m.getAttribute("data-works-href")) == null ? m.getAttribute("data-works-url") : d) == null ? (f = m.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, y = x(h);
	return !g && !y && !v ? null : {
		title: g,
		year: _,
		thumbnail: y,
		thumbnailSrcset: (p = h == null ? void 0 : h.getAttribute("srcset")) == null ? void 0 : p,
		thumbnailAlt: (h == null ? void 0 : h.alt) || g,
		href: v
	};
}
function Ia(e) {
	var t, n, r, i;
	let a = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = Pa(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: x(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let s = Pa(e, "[data-modal-image]"), c = x(s);
	return c ? [{
		src: c,
		srcset: (t = s == null ? void 0 : s.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = s == null ? void 0 : s.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function La(e) {
	var t, n, i, a, o, s, c, l, u, d;
	let f = r(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, h = Ia(e), g = h[0], _ = e.querySelector("[data-modal-body]");
	return {
		id: f,
		address: p,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: m,
		image: (o = g == null ? void 0 : g.src) == null ? "" : o,
		imageSrcset: g == null ? void 0 : g.srcset,
		imageAlt: (s = g == null ? void 0 : g.alt) == null ? "" : s,
		caption: (c = g == null ? void 0 : g.caption) == null ? "" : c,
		html: (l = _ == null ? void 0 : _.innerHTML) == null ? "" : l,
		rights: (u = (d = e.getAttribute("data-canvas-modal-rights")) == null ? void 0 : d.trim()) == null ? "" : u,
		work: Fa(e),
		gallery: h
	};
}
function Ra(e) {
	var t, n, i, a, o, s, c, l, u, d, f, p, m;
	let h = r(e, "data-modal");
	if (!h) return null;
	let g = e.querySelector(".fwm-modal__image"), _ = x(g), v = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, y = (i = e.closest(".w-dyn-item")) == null ? (a = e.closest(".w-embed")) == null ? void 0 : a.parentElement : i, b = y ? Array.from(y.querySelectorAll("[data-modal-rich-text]")).find((t) => t.closest(".w-dyn-item") === e.closest(".w-dyn-item")) : void 0, S = (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o;
	return b && (b.hidden = !0), {
		id: h,
		address: (c = (l = e.querySelector(".fwm-modal__address")) == null || (l = l.textContent) == null ? void 0 : l.trim()) == null ? "" : c,
		layout: "default",
		headline: "",
		image: _,
		imageSrcset: (u = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : u,
		imageAlt: (d = g == null ? void 0 : g.alt) == null ? "" : d,
		caption: v,
		html: S + ((f = b == null ? void 0 : b.innerHTML) == null ? "" : f),
		work: null,
		gallery: _ ? [{
			src: _,
			srcset: (p = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : p,
			alt: (m = g == null ? void 0 : g.alt) == null ? "" : m,
			caption: v
		}] : []
	};
}
function za() {
	o(pa).forEach((e) => {
		let t = La(e);
		t && ka.set(t.id, t);
	}), o(fa).forEach((e) => {
		let t = Ra(e);
		t && ka.set(t.id, t), e.remove();
	});
}
function Ba(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(pa).find((e) => r(e, "data-modal-content") === n), a = i ? La(i) : null;
	return a && ka.set(n, a), (t = a == null ? ka.get(n) : a) == null ? null : t;
}
function Va(e) {
	try {
		let t = new URL(e, document.baseURI).pathname.match(/^\/werke\/([^/]+)\/?$/);
		if (!t) return e;
		let n = new URL("/werk-ueberblick", document.baseURI);
		return n.searchParams.set("work", decodeURIComponent(t[1])), n.hash = "werke", `${n.pathname}${n.search}${n.hash}`;
	} catch (t) {
		return e;
	}
}
function Ha(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", Va(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.alt = e.thumbnailAlt;
		let n = aa(da(e.thumbnail, e.thumbnailSrcset), e.thumbnail);
		sa(t, n, n === e.thumbnail ? void 0 : e.thumbnail), a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = xa, o.append(e);
	}
	return i.append(o), i;
}
function Ua(e) {
	let t = document.createElement("a"), n = document.createElement("img"), r = document.createElement("span"), i = document.createElement("span");
	return t.className = "fwm-modal__image-link", t.href = e.src, t.setAttribute("data-lightbox-src", e.src), t.setAttribute("data-lightbox-caption", e.caption), t.setAttribute("data-lightbox-alt", e.alt), t.classList.toggle("has-caption", e.caption.length > 0), n.className = "fwm-modal__image", n.alt = e.alt, la(n, e.src, e.srcset, 500), r.className = "fwm-modal__lightbox-icon", r.setAttribute("aria-hidden", "true"), r.innerHTML = ba, i.className = "fwm-modal__caption", i.textContent = e.caption, i.hidden = e.caption.length === 0, t.append(n, r, i), t;
}
function Wa(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function Ga(e, t) {
	e.innerHTML = t, e.querySelectorAll("img[src]").forEach((e) => sa(e)), e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function Ka(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? la(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : ca(e.image), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, Ga(e.text, t.html), Wa(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t) => e.gallery.append(Ua(t)));
}
function qa(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), ca(e.image), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, Ga(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(Ha(t.work)), o.forEach((t) => {
		e.gallery.append(Ua(t));
	});
}
function Ja(e) {
	let t = Ma();
	return e.layout === "context" ? qa(t, e) : Ka(t, e), t;
}
function Ya(e) {
	let t = [], n = (e, n) => {
		t.push(ia(Zi(e.src, e.srcset, n), e.src));
	};
	if (e.layout === "context") {
		var r, i;
		(r = e.work) != null && r.thumbnail && t.push(ia(da(e.work.thumbnail, e.work.thumbnailSrcset), e.work.thumbnail)), ((i = e.gallery) != null && i.length ? e.gallery : e.image ? [{
			src: e.image,
			srcset: e.imageSrcset,
			alt: e.imageAlt,
			caption: e.caption
		}] : []).filter((t) => {
			var n;
			return t.src && t.src !== ((n = e.work) == null ? void 0 : n.thumbnail);
		}).forEach((e) => n(e, 500));
	} else {
		var a;
		if (e.image) {
			var o, s;
			t.push(ia(Zi(e.image, (o = e.imageSrcset) == null ? (s = e.gallery) == null || (s = s[0]) == null ? void 0 : s.srcset : o, 1080), e.image));
		}
		(a = e.gallery) == null || a.slice(1).filter((e) => e.src).forEach((e) => n(e, 500));
	}
	return t;
}
function Xa(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function Za(e) {
	Oa !== null && (window.clearTimeout(Oa), Oa = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function Qa(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Oa = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Oa = null;
	}, u() ? 0 : va), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function $a(e, t) {
	var n, r, i, a, o, s, l, u, f, m, h, g;
	let _ = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (r = e.layout) == null ? "default" : r,
		headline: (i = e.headline) == null ? "" : i,
		image: (a = e.image) == null ? "" : a,
		imageSrcset: e.imageSrcset,
		imageAlt: (o = e.imageAlt) == null ? "" : o,
		caption: (s = e.caption) == null ? "" : s,
		html: (l = e.html) == null ? "" : l,
		rights: (u = e.rights) == null ? "" : u,
		work: (f = e.work) == null ? null : f,
		gallery: (m = e.gallery) != null && m.length ? e.gallery : e.image ? [{
			src: e.image,
			srcset: e.imageSrcset,
			alt: (h = e.imageAlt) == null ? "" : h,
			caption: (g = e.caption) == null ? "" : g
		}] : []
	};
	if (!_.id || t && Ea === _.id && t === Da) return;
	Ea && to(), ka.set(_.id, _);
	let v = t == null ? c() : t, y = Ma();
	Oa !== null && (window.clearTimeout(Oa), Oa = null, y.root.hidden = !0, y.root.classList.remove("is-active", "is-visible")), Ja(_), Da = v, Ea = _.id, Za(y), p(), Xa(y), d(y.root, "site:modal-open", {
		id: Ea,
		modal: y.root,
		content: _,
		trigger: t == null ? null : t
	});
}
function eo(e, t) {
	let n = Ba(e);
	n && $a(n, t);
}
function to() {
	if (!Ea || !Ta) return;
	let t = Ea, r = Da;
	Qa(Ta), n(), Ea = "", Da = null, d(Ta.root, "site:modal-close", {
		id: t,
		modal: Ta.root
	}), e(r);
}
function no(e) {
	if (!(!Ea || !Ta) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), to();
			return;
		}
		y(Ta.panel, e);
	}
}
function ro(e) {
	if (!Ca || !Ea || !Ta) return;
	let t = e.target;
	!i(t) || t !== Ta.root || to();
}
function io(e) {
	var n;
	if (Ca = (n = e.closeOnBackdrop) == null || n, wa = e.i18n, za(), Ma(), !Sa) {
		let e = (e) => {
			let n = Ba(e.matches(ma) ? t(e, "data-modal-open") : Aa(e));
			n && Ya(n);
		};
		for (let t of [
			"pointerover",
			"pointerdown",
			"focusin"
		]) g(document, t, `${ma}, ${ga}`, (t, n) => {
			e(n);
		});
		g(document, "click", `${ma}, ${ga}`, (e, n) => {
			e.preventDefault(), eo(n.matches(ma) ? t(n, "data-modal-open") : Aa(n), n);
		}), g(document, "click", ha, (e, t) => {
			Ta != null && Ta.root.contains(t) && (e.preventDefault(), to());
		}), document.addEventListener("click", ro), document.addEventListener("keydown", no), Sa = !0;
	}
	return {
		openModal: eo,
		openContentModal: $a,
		closeModal: to
	};
}
//#endregion
//#region src/modules/site-menu.ts
var ao = "[data-site-menu]", oo = "[data-site-menu-panel]", so = "[data-site-menu-toggle]", co = "[data-site-menu-toggle-label]", lo = "[data-site-menu-toggle-label-text]", uo = "[data-site-menu-toggle-label-ghost]", fo = "data-site-menu-toggle-label-text", po = "data-site-menu-toggle-label-ghost", mo = "[data-site-menu-link]", ho = "[data-site-menu-indicator]", go = "is-active", _o = "is-open", vo = "is-ready", yo = "data-site-menu-open-label", bo = "data-site-menu-closed-label", xo = "data-site-menu-current-key", So = "data-site-menu-label", Co = "data-site-menu-key", wo = "data-site-menu-original-tabindex", To = "CLOSE", Eo = "MENU", Do = .42, Oo = ".site-menu__brand, [data-site-menu-item], .site-menu__divider", ko = "site-menu__divider", Ao = ".site-menu__link--small, .site-menu__footer-link", jo = "[data-site-menu-toggle], .site-menu__language, .site-menu__languages", Mo = "site-menu__line", No = "site-menu__line-in", Po = {
	open: .513,
	close: .378,
	transition: .54
};
b.registerPlugin(U);
var Fo = U.create("site-menu-panel", "0.7,0,0.08,1"), Io = [], Lo = !1;
function Ro(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function zo(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Ro(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Bo(e, t) {
	return t ? r(e, Co) === t : !1;
}
function Vo(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Bo(e, r(t, xo) || ((n = document.documentElement.getAttribute(xo)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(xo)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = zo(e);
	return a ? a === Ro(window.location.pathname) : !1;
}
function Ho(e) {
	var t, n;
	return r(e, So) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function Uo(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(go) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Vo(t, e.root)) : t;
	return n ? Ho(n) : "";
}
function Wo(e) {
	var t, n;
	let i = (t = e.toggleLabel) == null ? e.toggle : t, a = i.style.width, o = !0, s = 0, c = document.createElement("span");
	c.setAttribute("aria-hidden", "true"), c.style.cssText = [
		"position:absolute",
		"left:-100000px",
		"top:0",
		"display:inline-block",
		"width:max-content",
		"min-width:0",
		"max-width:none",
		"white-space:nowrap",
		"visibility:hidden",
		"pointer-events:none",
		"overflow:visible",
		"transform:none",
		"transition:none"
	].join(";"), i.append(c);
	let l = () => {
		if (!o) return;
		let t = [
			Uo(e),
			r(e.root, bo) || Eo,
			r(e.root, yo) || To
		];
		c.textContent = "";
		let n = t.reduce((e, t) => (c.textContent = t, Math.max(e, c.getBoundingClientRect().width)), 0);
		n > 0 && (i.style.width = `${Math.ceil(n)}px`);
	}, u = () => {
		s && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
			s = 0, l();
		});
	};
	return l(), window.addEventListener("resize", u), (n = document.fonts) == null || n.ready.then(l), () => {
		o = !1, window.removeEventListener("resize", u), s && cancelAnimationFrame(s), c.remove(), i.style.width = a;
	};
}
function Go(e) {
	var t, n;
	let r = s(lo, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(fo, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Ko(e) {
	o(uo, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function qo(e, t = !0) {
	var n, i;
	let a = r(e.root, yo) || To, o = r(e.root, bo) || Eo, s = Uo(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = Go(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
	if (p && t && !u()) {
		if (c === p.from) {
			p.timeline.reverse();
			return;
		}
		if (c === p.to) {
			p.timeline.play();
			return;
		}
	}
	if (f === c && !p) return;
	let m = p && p.timeline.progress() < .5 ? p.from : f;
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), Ko(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(po, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: Do,
			ease: "power2.inOut"
		},
		onUpdate: () => {
			let e = g.reversed();
			d.setAttribute("aria-hidden", String(e)), h.setAttribute("aria-hidden", String(!e));
		}
	});
	g.fromTo(h, { yPercent: 0 }, { yPercent: -100 }, 0), g.fromTo(d, { yPercent: 100 }, { yPercent: 0 }, 0), e.labelTransition = {
		timeline: g,
		from: m,
		to: c
	};
}
function Jo(e) {
	let t = [], n = 0, r = 0, i = 0;
	return o(Oo, e.panel).forEach((e) => {
		if (e.closest(jo)) return;
		if (e.classList.contains(ko)) {
			e.style.setProperty("--i", String(i)), e.style.setProperty("--g", "0");
			return;
		}
		if (e.querySelector(`:scope > .${Mo}`)) return;
		let a = Array.from(e.childNodes).filter((e) => !(e instanceof HTMLElement && e.hasAttribute("data-site-menu-indicator")));
		if (!a.some((e) => {
			var t;
			return (t = e.textContent) == null ? void 0 : t.trim();
		})) return;
		let o = document.createElement("span"), s = document.createElement("span");
		o.className = Mo, s.className = No, e.insertBefore(o, a[0]), a.forEach((e) => s.appendChild(e)), o.appendChild(s), t.push(o), e.matches(Ao) ? (e.style.setProperty("--g", "1"), e.style.setProperty("--i", String(r++))) : (i = n, e.style.setProperty("--g", "0"), e.style.setProperty("--i", String(n++)));
	}), () => {
		t.forEach((e) => {
			let t = e.firstElementChild;
			for (; t != null && t.firstChild;) {
				var n;
				(n = e.parentNode) == null || n.insertBefore(t.firstChild, e);
			}
			e.remove();
		});
	};
}
function Yo(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, wo);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(wo) && e.hasAttribute("tabindex") && e.setAttribute(wo, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Xo(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(_o, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Yo(e, t), qo(e, n);
}
function Zo(e, t, n, r) {
	b.killTweensOf(e.panel), b.set(e.panel, { clearProps: "height" });
	let i = e.panel.getBoundingClientRect().height;
	if (!u()) return b.fromTo(e.panel, { height: n }, {
		height: i,
		duration: t ? Po.open : Po.close,
		ease: Fo,
		onComplete: () => {
			b.set(e.panel, { clearProps: "height" }), r == null || r();
		}
	});
}
function Qo(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Xo(e, !0), Zo(e, !0, t);
}
function $o(e, t) {
	if (!e.isOpen) return;
	let n = e.panel.getBoundingClientRect().height;
	Xo(e, !1);
	let r = Zo(e, !1, n, t);
	return r || t == null || t(), r;
}
function es(e, t) {
	let n = Io.find((t) => t.root === e && t.isOpen);
	if (!n) return !1;
	let r = !1, i = () => {
		r || (r = !0, t());
	}, a = $o(n, i);
	return a == null || a.eventCallback("onUpdate", () => {
		a.progress() >= .42 && i();
	}), !0;
}
function ts(e) {
	e.isOpen ? $o(e) : Qo(e);
}
function ns(e) {
	e.links.forEach((t) => {
		let n = Vo(t, e.root), r = s(ho, t);
		t.classList.toggle(go, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function rs(e) {
	var t;
	let n = s(oo, e), r = s(so, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(co, r)) == null ? s(co, e) : t,
		links: o(mo, e),
		isOpen: e.classList.contains(_o),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Io.length + 1}`), r.setAttribute("aria-controls", n.id), i.cleanup.push(Jo(i)), ns(i), Xo(i, i.isOpen, !1), i.cleanup.push(Wo(i)), e.classList.add(vo);
	let a = (e) => {
		e.preventDefault(), ts(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || $o(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || ($o(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(mo) || $o(i);
	}, d = () => {
		i.isHovered = !0, qo(i);
	}, f = () => {
		i.isHovered = !1, qo(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function is(e = document) {
	if (Lo && e === document) return () => void 0;
	e === document && (Lo = !0);
	let t = o(ao, e).map(rs).filter((e) => !!e);
	return Io.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(vo, _o);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(lo, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), Ko(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Yo(e, !0);
		});
	};
}
//#endregion
//#region src/modules/page-transition.ts
var as = {
	navigate: 160,
	revealStart: 0,
	reset: 180,
	watchdog: 6e3
}, os = [
	".top_bar_section",
	".werk_hero_dots",
	".werk_hero_slide .u-slide-info"
], ss = {
	delay: 225,
	stagger: 125,
	fade: 700,
	menuGap: 80,
	menu: 550
}, cs = "pt", ls = "[data-page-transition-overlay], .page-transition-overlay", us = "is-page-transition-pending", ds = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), fs = !1, ps = !1, ms = [], hs = /* @__PURE__ */ new Set();
function gs(e) {
	if (e.closest(ds) || e.target && e.target !== "_self") return;
	let t = h(e);
	if (!t || t.hash || hs.has(t.href)) return;
	hs.add(t.href);
	let n = document.createElement("link");
	n.rel = "prefetch", n.href = t.href, document.head.append(n);
}
function _s(e, t) {
	ms.push(window.setTimeout(e, t));
}
function vs() {
	ms.forEach((e) => window.clearTimeout(e)), ms = [];
}
function ys() {
	try {
		return !!window.sessionStorage.getItem(cs);
	} catch (e) {
		return !1;
	}
}
function bs() {
	try {
		window.sessionStorage.removeItem(cs);
	} catch (e) {}
	document.documentElement.classList.remove(us, "is-page-transition-boot");
}
function xs() {
	var e;
	let t = document.querySelector(ls);
	return t || (t = document.createElement("div"), document.body.append(t)), t.classList.add("curtain", "page-transition-overlay"), t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), (e = t.querySelector(".page-transition-overlay__title")) == null || e.remove(), t;
}
function Ss() {
	return document.querySelector("main, [role=\"main\"]");
}
function Cs(e) {
	e && (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), e.addEventListener("blur", () => e.removeAttribute("tabindex"), { once: !0 })), e.focus({ preventScroll: !0 }));
}
function ws(e) {
	vs(), e.classList.add("is-resetting"), e.classList.remove("is-covering", "is-covered", "is-uncovering"), e.setAttribute("aria-hidden", "true"), document.documentElement.classList.remove("is-page-transition-entering", "is-page-transition-covering"), bs(), ps = !1, window.requestAnimationFrame(() => e.classList.remove("is-resetting"));
}
function Ts(e, t) {
	if (ps = !0, u()) {
		Cs(t), ws(e);
		return;
	}
	e.setAttribute("aria-hidden", "false"), e.classList.add("is-covered"), document.documentElement.classList.add("is-page-transition-entering"), _s(() => e.classList.add("is-uncovering"), as.revealStart), _s(() => {
		Cs(t), ws(e);
	}, as.reset);
}
function Es(e, t) {
	ps = !0, t.setAttribute("aria-hidden", "false");
	try {
		window.sessionStorage.setItem(cs, "1");
	} catch (e) {}
	document.documentElement.classList.add("is-page-transition-covering"), t.classList.add("is-covering"), _s(() => {
		window.location.href = e.href;
	}, as.navigate), _s(() => {
		window.location.href = e.href;
	}, as.watchdog);
}
function Ds() {
	var e;
	if (!((e = window.__sitePreloader) != null && e.active) || u() || window.location.pathname === "/") return;
	let t = /^\/biografie\/?$/i.test(window.location.pathname), n = os.map((e) => t && e === ".top_bar_section" ? [] : Array.from(document.querySelectorAll(e))), r = Array.from(document.querySelectorAll("[data-site-menu]"));
	[...n.flat(), ...r].forEach((e) => {
		e.style.opacity = "0";
	}), S(() => {
		let e = (e, t, n, r, i = "cubic-bezier(.05, .85, .05, 1)") => {
			if (!e.animate) {
				e.style.removeProperty("opacity");
				return;
			}
			let a = e.animate(t, {
				duration: r,
				delay: n,
				easing: i,
				fill: "forwards"
			});
			a.onfinish = () => {
				e.style.removeProperty("opacity"), a.cancel();
			};
		};
		n.forEach((t, n) => {
			t.forEach((t) => e(t, [{ opacity: 0 }, { opacity: 1 }], ss.delay + n * ss.stagger, ss.fade));
		});
		let t = n.reduce((e, t, n) => t.length ? n : e, -1), i = t < 0 ? 0 : ss.delay + t * ss.stagger + ss.fade + ss.menuGap;
		r.forEach((t) => {
			let n = Math.max(0, window.innerHeight - t.getBoundingClientRect().top) + 8;
			e(t, [{
				opacity: 1,
				transform: `translate3d(0, ${n}px, 0)`
			}, {
				opacity: 1,
				transform: "translate3d(0, 0, 0)"
			}], i, ss.menu);
		});
	});
}
function Os() {
	if (fs) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Os, { once: !0 });
		return;
	}
	fs = !0;
	let e = xs(), t = Ss();
	ys() && document.documentElement.classList.contains(us) && !e.hasAttribute("data-page-transition-managed") ? Ts(e, t) : Ds();
	let n = (e) => {
		let t = e.target instanceof Element ? e.target.closest("a[href]") : null;
		t && gs(t);
	};
	document.addEventListener("pointerover", n, { passive: !0 }), document.addEventListener("focusin", n), document.addEventListener("click", (e) => {
		!(e.target instanceof Element) || !e.target.closest("[data-site-menu-toggle]") || document.querySelectorAll("[data-site-menu] a[href]").forEach(gs);
	}, !0), document.addEventListener("click", (t) => {
		var n;
		let r = t.target instanceof Element ? t.target.closest("a[href]") : null;
		if (!r || t.defaultPrevented || l(t)) return;
		if (ps) {
			t.preventDefault();
			return;
		}
		if (r.closest(ds) || r.target && r.target !== "_self") return;
		let i = h(r);
		if (!i || i.hash || u() || (n = window.__sitePreloader) != null && n.active) return;
		t.preventDefault();
		let a = r.closest("[data-site-menu]");
		a && (ps = !0, es(a, () => Es(i, e))) || Es(i, e);
	}, !0), window.addEventListener("pageshow", (t) => {
		t.persisted && ws(e);
	});
}
//#endregion
//#region src/modules/parallax.ts
var ks = "[data-parallax]", As = "data-parallax", js = "data-parallax-ready", Ms = "fw-parallax-window", Ns = "fw-parallax-window--self-sized", Ps = "fw-parallax-inner", Fs = 60, Is = 160, Ls = ".site-lightbox-trigger", Rs = 1, zs = !1;
function Bs() {
	zs || (zs = !0, b.registerPlugin($));
}
function Vs(e) {
	let t = e.getAttribute(As);
	if (t === null || t.trim() === "") return Fs;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.sign(n) * Math.min(Math.abs(n), Is) : Fs;
}
function Hs(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Us(e, t) {
	var n;
	let r = (n = e.closest(Ls)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(Ms)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(Ms);
	let a = document.createElement("span");
	if (a.className = Ps, a.style.top = `${-t}px`, a.style.bottom = `${-t}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(Ms), null;
		r.classList.add(Ns), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function Ws(e, t) {
	return t < 0 && e.getBoundingClientRect().top + window.scrollY < window.innerHeight;
}
function Gs(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e), r = Ws(e, t);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Ks(e)
		});
		return;
	}
	n.forEach((n) => {
		Hs(n).then(() => {
			if (!n.isConnected) return;
			let i = Us(n, r ? 0 : Math.abs(t) / 2 + Rs);
			if (i) {
				if (r) {
					b.fromTo(i, { y: 0 }, {
						y: () => Math.min(Math.abs(t), i.offsetHeight * .5),
						ease: "none",
						scrollTrigger: {
							...Ks(e),
							start: "top top"
						}
					}), $.refresh();
					return;
				}
				b.fromTo(i, { y: t / 2 }, {
					y: -t / 2,
					ease: "none",
					scrollTrigger: Ks(e)
				}), $.refresh();
			}
		});
	});
}
function Ks(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function qs(e = document) {
	let t = o(ks, e).filter((e) => !e.hasAttribute(js));
	t.length === 0 || u() || (Bs(), t.forEach((e) => {
		let t = Vs(e);
		t !== 0 && (e.setAttribute(js, ""), Gs(e, t));
	}));
}
//#endregion
//#region src/modules/more-arrows.ts
var Js = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function Ys(e) {
	var t, n;
	if (!/^mehr\s+erfahren$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = Js);
}
function Xs(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && Ys(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(Ys);
}
function Zs() {
	Xs(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && Xs(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/outlined-buttons.ts
var Qs = ".btn, .button-outlined";
function $s() {
	let e = /* @__PURE__ */ new WeakSet();
	function t(t) {
		if (!e.has(t)) {
			if (e.add(t), !t.querySelector(":scope > .f, :scope > .button-mask")) {
				let e = document.createElement("i");
				e.className = "f", e.setAttribute("aria-hidden", "true"), t.prepend(e);
			}
			for (let e of Array.from(t.childNodes)) {
				var n;
				if (e.nodeType !== Node.TEXT_NODE || !((n = e.textContent) != null && n.trim())) continue;
				let t = document.createElement("span");
				e.replaceWith(t), t.append(e);
			}
		}
	}
	function n(e) {
		e instanceof HTMLElement && e.matches(Qs) && t(e), e.querySelectorAll(Qs).forEach(t);
	}
	n(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof HTMLElement && n(e);
	}).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/spline-slider.ts
var ec = ".werk_hero_slider", tc = ".werk_hero_track";
function nc(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function rc(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function ic(e) {
	let t = e.closest(ec), n = t == null ? void 0 : t.querySelector(tc);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = nc(e, n), i = rc(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function ac(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function oc(e, t) {
	return new Promise((n) => {
		let r = !1, i = () => {
			r || (r = !0, e.removeEventListener("load", a), e.removeEventListener("error", i), t.removeEventListener("abort", i), n());
		}, a = () => {
			typeof e.decode == "function" && e.naturalWidth > 0 ? e.decode().then(i, i) : i();
		};
		if (t.aborted) return i();
		t.addEventListener("abort", i, { once: !0 }), e.addEventListener("load", a, { once: !0 }), e.addEventListener("error", i, { once: !0 }), e.loading = "eager", e.complete && a();
	});
}
function sc(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function cc(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function lc(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function uc(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function dc(e, t) {
	return new Promise((n) => {
		let r = [
			"load-complete",
			"w-spline-load",
			"site:spline-ready"
		], i = () => {
			r.forEach((t) => e.removeEventListener(t, i)), t.removeEventListener("abort", i), n();
		};
		if (t.aborted || (r.forEach((t) => e.addEventListener(t, i, { once: !0 })), t.addEventListener("abort", i, { once: !0 }), e.hasAttribute("data-site-spline-ready"))) return i();
		if (e.matches("spline-viewer") && e.setAttribute("loading", "eager"), e.matches("[data-animation-type=\"spline\"]")) {
			let t = window.Webflow;
			try {
				var a, o;
				!(t == null || (a = t.require) == null || (a = a.call(t, "spline")) == null || (o = a.getInstance) == null || (o = o.call(a, e)) == null) && o.spline && i();
			} catch (e) {}
		}
	});
}
function fc() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return sc(e, t);
				let r = new Image();
				return r.src = e, oc(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = lc(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = cc(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || uc(n) ? "critical" : "warm" : i,
			load: (e) => oc(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && ic(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = cc(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = lc(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => dc(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", dc(r, e))
		} : {
			key: `spline:${o}`,
			priority: c,
			load: async () => {
				r.loading = "eager";
			}
		}) : n(o, "spline", c);
	}
	for (let e of Array.from(document.querySelectorAll("script[type=\"application/json\"][data-site-preload-manifest]"))) try {
		let t = JSON.parse(e.textContent || "[]");
		if (!Array.isArray(t)) continue;
		for (let e of t) {
			if (!e || typeof e.url != "string" || !["image", "spline"].includes(e.type)) continue;
			let t = cc(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => ac(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function pc(e) {
	let t = Array.from(document.querySelectorAll("[data-cms-works], [data-cms-work-detail]"));
	return !t.length || t.every((e) => e.hasAttribute("data-site-assets-ready")) ? Promise.resolve() : new Promise((n) => {
		let r = () => {
			i.disconnect(), window.clearTimeout(a), e.removeEventListener("abort", r), n();
		}, i = new MutationObserver(() => {
			t.every((e) => e.hasAttribute("data-site-assets-ready")) && r();
		});
		i.observe(document.documentElement, {
			attributes: !0,
			subtree: !0,
			attributeFilter: ["data-site-assets-ready"]
		});
		let a = window.setTimeout(r, 2e3);
		e.addEventListener("abort", r, { once: !0 }), e.aborted && r();
	});
}
async function mc(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await ac(a.shift().load(n.signal), n.signal);
	};
	try {
		await Promise.all([
			o(),
			o(),
			o()
		]);
	} finally {
		window.clearTimeout(i), window.removeEventListener("pagehide", r);
	}
}
//#endregion
//#region src/modules/site-preloader.ts
var hc = /* @__PURE__ */ new WeakSet(), gc = 5100, _c = 450, vc = 375, yc = 975;
function bc(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function xc(e) {
	return new Promise((t) => {
		let n = 0, r = 0, i = !1, a = window.setTimeout(o, 160);
		function o() {
			i || (i = !0, window.clearTimeout(a), window.cancelAnimationFrame(n), window.cancelAnimationFrame(r), e.removeEventListener("abort", o), t());
		}
		if (e.aborted) return o();
		e.addEventListener("abort", o, { once: !0 }), n = window.requestAnimationFrame(() => {
			r = window.requestAnimationFrame(o);
		});
	});
}
function Sc(e, t) {
	var n, r;
	if (!Number.isFinite(t)) return;
	let i = Math.max(Number(e.getAttribute("aria-valuenow")) || 0, Math.min(100, Math.max(0, Math.round(t))));
	e.setAttribute("aria-valuenow", String(i)), (n = window.__sitePreloader) == null || (r = n.setSignatureIndex) == null || r.call(n, Math.min(6, Math.floor(i / 100 * 7)));
	let a = String(i).padStart(3, "0");
	e.querySelectorAll(".site-preloader__digit").forEach((e, t) => {
		var n;
		let r = e.firstElementChild, o = r.children[0], s = r.children[1], c = a[t], l = e.hidden;
		if (e.hidden = t < 3 - String(i).length, r.dataset.value !== c) {
			if (b.killTweensOf(r), o.textContent = (n = r.dataset.value) == null ? o.textContent : n, r.dataset.value = c, s.textContent = c, b.set(r, {
				yPercent: 0,
				y: 0
			}), u() || l || e.hidden) {
				o.textContent = c;
				return;
			}
			b.to(r, {
				yPercent: -50,
				y: 0,
				duration: .049,
				ease: "power2.out",
				onComplete: () => {
					o.textContent = c, b.set(r, {
						yPercent: 0,
						y: 0
					});
				}
			});
		}
	});
}
function Cc(e) {
	let t = u(), n = !1, r = !1, i = 0, a = 0, o, s = new Promise((e) => {
		o = e;
	}), c = (t) => {
		if (n) return;
		let r = Math.min(1, (t - a) / gc);
		Sc(e, (.6 * r + .4 * bc(r)) * 100), r === 1 ? o() : i = window.requestAnimationFrame(c);
	};
	return {
		start: () => {
			r || n || (r = !0, a = performance.now(), t ? (Sc(e, 100), o()) : i = window.requestAnimationFrame(c));
		},
		complete: s,
		stop: () => {
			n = !0, window.cancelAnimationFrame(i);
		}
	};
}
function wc(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function Tc(e) {
	return document.readyState === "complete" || e.aborted ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			window.removeEventListener("load", n), e.removeEventListener("abort", n), t();
		};
		window.addEventListener("load", n, { once: !0 }), e.addEventListener("abort", n, { once: !0 });
	});
}
async function Ec(e, t) {
	t.aborted || (document.documentElement.classList.add(w), e.classList.add("is-fading"), await wc(u() ? 0 : vc, t), !t.aborted && (e.classList.add("is-curtain"), await wc(u() ? 0 : yc, t)));
}
function Dc() {
	var e, t;
	let n = window.__sitePreloader;
	if (!(n != null && n.active) || hc.has(n)) return;
	hc.add(n);
	let r = document.querySelector(C);
	if (!r) {
		n.release();
		return;
	}
	let i = new AbortController(), a = Cc(r);
	(e = n.allowExit) == null || e.call(n), ((t = n.introReady) == null ? Promise.resolve() : t).then(() => {
		n.active && a.start();
	}), n.cleanup.push(() => {
		i.abort(), a.stop();
		let e = r.querySelectorAll(".site-preloader__track");
		e.length && b.killTweensOf(e);
	});
	let o = async () => {
		if (await pc(i.signal), !n.active) return;
		let e = fc(), t = e.filter((e) => e.priority === "critical");
		await Promise.all(t.map(async (e) => {
			await ac(Promise.resolve().then(() => e.load(i.signal)), i.signal);
		})), n.active && (await xc(i.signal), n.active && (await n.introReady, n.active && (await Promise.all([a.complete, Tc(i.signal)]), n.active && (await wc(u() ? 0 : Math.max(0, T - (Date.now() - n.startedAt)), i.signal), n.active && (await wc(u() ? 0 : _c, i.signal), n.active && (await Ec(r, i.signal), n.active && (n.release(), mc(e))))))));
	}, s = () => {
		o().catch(n.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Oc = !1, kc = !1;
function Ac() {
	if (kc || u()) return;
	kc = !0;
	let e, t = () => {
		let t = window.lenis;
		if (Oc || !window.__siteLenisManaged || !t) return;
		Oc = !0, b.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		b.ticker.add(n), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			b.ticker.remove(n), t.off("scroll", $.update), Oc = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), Oc || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/modules/site-image-reveal.ts
var jc = "data-site-image-reveal", Mc = "is-site-image-in", Nc = ".news_event img.intro_img", Pc = ".bio_photo img.bio_media_img, .bio_photo.bio_video .bio_video_trigger img", Fc = [
	".top_bar_section",
	"[data-site-menu]",
	".site-preloader",
	"[data-site-lightbox]",
	".fwm-modal",
	".modal_registry",
	"[data-modal-content]",
	"[hidden]",
	".hm_cms",
	".works_source",
	".cms-canvas",
	".werk_hero_section",
	".bio_hero_section",
	".bio_photo",
	".news_event",
	".news_highlight_section",
	".contact_img",
	"[data-insta-feed]",
	"[data-edition-slider]",
	"[data-atelier-slideshow-root]",
	"[aria-hidden=\"true\"]"
].join(", "), Ic = !1;
function Lc() {
	if (Ic || u() || !("IntersectionObserver" in window)) return;
	Ic = !0;
	let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), n = 0, r = (n) => {
		let r = e.get(n);
		if (!r || n.classList.contains(Mc) || t.has(n)) return;
		t.add(n);
		let a = () => {
			t.delete(n), n.isConnected && (n.classList.add(Mc), i.unobserve(n));
		};
		r.complete ? r.naturalWidth && r.decode ? r.decode().then(a, a) : a() : (r.addEventListener("load", () => {
			r.decode ? r.decode().then(a, a) : a();
		}, { once: !0 }), r.addEventListener("error", a, { once: !0 }));
	}, i = new IntersectionObserver((e) => {
		e.forEach((e) => {
			e.isIntersecting && r(e.target);
		});
	}, { threshold: 0 }), a = (t, n, r, a = 0) => {
		t.hasAttribute(jc) || (t.setAttribute(jc, r), a && t.style.setProperty("--site-image-delay", `${a}ms`), e.set(t, n), i.observe(t));
	}, o = (e) => {
		if (e.closest("[data-site-image-reveal=\"event\"]")) return;
		let t = e.parentElement;
		t != null && t.classList.contains("img-zoom") || (t = document.createElement("div"), t.className = "img-zoom", e.before(t));
		let n = document.createElement("span");
		n.className = "zoom", n.setAttribute("data-site-event-zoom", ""), t.append(n), n.append(e), a(t, e, "event");
	}, s = () => {
		n = 0;
		let e = window.location.pathname;
		if (/^\/biografie\/?$/i.test(e) && document.querySelectorAll(Pc).forEach((e) => {
			var t;
			let n = (t = e.closest(".site-lightbox-trigger, .bio_video_trigger")) == null ? e : t;
			a(n, e, "bio");
		}), !/^\/atelier\/?$/i.test(e)) {
			if (document.querySelectorAll(Nc).forEach((e) => {
				o(e);
			}), /^\/kontakt\/?$/i.test(e)) {
				let e = document.querySelector(".contact_img img.is-contact-image"), t = e == null ? void 0 : e.closest(".site-lightbox-trigger");
				e && t && a(t, e, "contact");
			}
			let t = /^\/(?:werk-ueberblick|werke(?:\/.*)?)\/?$/i.test(e);
			/^\/editionen\/?$/i.test(e) && document.querySelectorAll(".editionen_media[data-edition-slider]").forEach((e, t) => {
				var n;
				let r = e.querySelector("[data-edition-track]"), i = (n = r == null ? void 0 : r.querySelector(".editionen_slide.is-active img.editionen_img")) == null ? r == null ? void 0 : r.querySelector("img.editionen_img") : n;
				r && i && a(r, i, "edition", t % 4 * 90);
			}), document.querySelectorAll("[data-insta-track] > :is(div, a):not([aria-hidden=\"true\"])").forEach((e, t) => {
				let n = e.querySelector("img");
				n && a(e, n, "instagram", Math.min(t, 4) * 85);
			}), document.querySelectorAll("body img").forEach((e, n) => {
				if (t || e.closest(Fc) || e.closest(`[${jc}]`) || !e.getAttribute("src") && !e.getAttribute("srcset")) return;
				let r = e.closest(".site-lightbox-trigger, .news_img, .contact_img, .about_img, .image-absolute-full-wrapper");
				a(r == null ? e : r, e, r ? "media" : "plain", n % 4 * 70);
			});
		}
	};
	s();
	let c = new MutationObserver(() => {
		n || (n = requestAnimationFrame(s));
	});
	c.observe(document.body, {
		childList: !0,
		subtree: !0
	}), window.addEventListener("pagehide", () => {
		i.disconnect(), c.disconnect(), n && cancelAnimationFrame(n);
	}, { once: !0 });
}
//#endregion
//#region src/modules/masked-line-reveal.ts
var Rc = ".work_about_heading, .editionen_title, .accordion_heading", zc = ".bio_hero_section .bio_hero_sub", Bc = `[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading, ${zc}, ${Rc}`, Vc = "[data-masked-reveal-label], .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_heading", Hc = "data-masked-reveal-ready", Uc = "data-masked-reveal-complete", Wc = /* @__PURE__ */ new Map(), Gc = /* @__PURE__ */ new Set(), Kc, qc = !1, Jc = window.location.pathname, Yc, Xc = /* @__PURE__ */ new WeakSet();
function Zc(e) {
	let t = getComputedStyle(e).getPropertyValue("--masked-reveal-stagger").trim() || "50ms", n = Number.parseFloat(t);
	return Number.isFinite(n) ? t.endsWith("s") && !t.endsWith("ms") ? n * 1e3 : n : 50;
}
async function Qc(e) {
	let t = document.documentElement, n = /^\/atelier\/?$/i.test(window.location.pathname) && !!e.closest(".atelier_hero_section") || /^\/biografie\/?$/i.test(window.location.pathname) && !!e.closest(".bio_hero_section"), r = /^\/editionen\/?$/i.test(window.location.pathname) && e.matches(".editionen_title") && e.closest(".editionen_item") === document.querySelector(".editionen_item"), i = n || r;
	if (t.classList.contains("is-page-transition-entering") && !(i && document.querySelector(".page-transition-overlay.is-uncovering")) && await new Promise((e) => {
		let n = new MutationObserver(() => {
			t.classList.contains("is-page-transition-entering") && (!i || !document.querySelector(".page-transition-overlay.is-uncovering")) || (n.disconnect(), e());
		});
		n.observe(t, {
			attributes: !0,
			attributeFilter: ["class"],
			subtree: i
		});
	}), n) {
		var a;
		if (await ((a = window.__sitePreloader) == null ? void 0 : a.ready), e.closest(".bio_hero_section")) {
			let e = () => t.classList.contains("is-site-preloading") || t.classList.contains("is-site-preloader-exiting") ? !0 : (t.classList.contains("is-page-transition-pending") || t.classList.contains("is-page-transition-entering")) && !document.querySelector(".page-transition-overlay.is-uncovering");
			e() && await new Promise((n) => {
				let r = new MutationObserver(() => {
					e() || (r.disconnect(), n());
				});
				r.observe(t, {
					attributes: !0,
					attributeFilter: ["class"],
					subtree: !0
				});
			});
		}
		await new Promise((e) => {
			window.setTimeout(e, 200);
		});
	}
}
function $c(e) {
	e.played || !e.element.isConnected || (e.played = !0, e.element.classList.add("is-masked-reveal-playing"), /^\/atelier\/?$/i.test(window.location.pathname) && e.element.matches(".atelier_hero_section .atelier_slide_heading") && document.dispatchEvent(new Event("atelier:hero-line-reveal")));
}
function el(e) {
	var t;
	e.matches(".editionen_title") && ((t = e.closest(".editionen_item")) == null || t.querySelectorAll("[data-edition-content-reveal]").forEach((e) => e.classList.add("is-edition-content-in")));
}
function tl(e, t = !1) {
	let { element: n, text: r, markup: i } = e;
	if (!n.isConnected || !Kc) return;
	let a = e.played && n.hasAttribute(Uc) && !t;
	n.classList.remove("is-masked-reveal-playing"), n.removeAttribute(Uc), n.innerHTML = i;
	try {
		let t = Kc.create(n, { type: "lines" }), i = t.lines.filter((e) => {
			var t;
			return (t = e.textContent) == null ? void 0 : t.trim();
		}).map((e) => Array.from(e.childNodes, (e) => e.cloneNode(!0)));
		if (t.revert(), !i.length) throw Error("No text lines found");
		let s = document.createDocumentFragment(), c = Zc(n);
		if (i.forEach((e, t) => {
			t && s.append(document.createTextNode(" "));
			let n = document.createElement("span");
			n.className = "masked-reveal-line", n.setAttribute("aria-hidden", "true");
			let r = document.createElement("span");
			r.className = "masked-reveal-line__text", r.style.setProperty("--masked-reveal-line-delay", `${t * c}ms`), r.append(...e), n.append(r), s.append(n);
		}), n.replaceChildren(s), n.setAttribute("aria-label", r), n.setAttribute(Hc, ""), e.width = n.getBoundingClientRect().width, a) {
			e.played = !0, n.setAttribute(Uc, ""), el(n);
			return;
		}
		if (e.played = !1, n.getAttribute("data-masked-line-reveal") === "viewport" && "IntersectionObserver" in window) {
			var o;
			(o = e.intersectionObserver) == null || o.disconnect(), e.intersectionObserver = new IntersectionObserver((t, n) => {
				t.some((e) => e.isIntersecting) && (n.disconnect(), $c(e));
			}, { threshold: .1 }), e.intersectionObserver.observe(n);
		} else $c(e);
	} catch (e) {
		n.innerHTML = i, n.removeAttribute(Hc), n.setAttribute(Uc, ""), el(n);
	}
}
function nl(e) {
	var t, n, r, i;
	if (Wc.has(e) || /^\/atelier\/?$/i.test(window.location.pathname) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim())) return;
	if (e.matches(Rc) && !e.hasAttribute("data-masked-line-reveal") && e.setAttribute("data-masked-line-reveal", "viewport"), e.querySelector("a, button, input, select, textarea, svg, img, canvas, video, iframe")) {
		e.setAttribute(Uc, "");
		return;
	}
	let a = {
		element: e,
		text: ((n = e.innerText) == null ? void 0 : n.replace(/\s+/g, " ").trim()) || e.textContent,
		markup: e.innerHTML,
		width: 0,
		played: !1,
		resizeObserver: new ResizeObserver(() => {
			!a.width || Math.abs(e.getBoundingClientRect().width - a.width) < 1 || e.matches(zc) && a.played && !e.hasAttribute(Uc) || tl(a);
		})
	};
	Wc.set(e, a), a.resizeObserver.observe(e), Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		(r = document.fonts) == null ? void 0 : r.ready,
		(i = window.__sitePreloader) == null ? void 0 : i.ready,
		Qc(e)
	]).then(([{ SplitText: t }]) => {
		b.registerPlugin(t), Kc = t, e.isConnected && tl(a);
	}).catch(() => {
		e.setAttribute(Uc, "");
	});
}
function rl(e) {
	var t, n, r;
	Gc.has(e) || /^\/atelier\/?$/i.test(window.location.pathname) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim()) || (Gc.add(e), Promise.all([
		(n = document.fonts) == null ? void 0 : n.ready,
		(r = window.__sitePreloader) == null ? void 0 : r.ready,
		Qc(e)
	]).then(() => {
		e.isConnected && e.classList.add("is-masked-reveal-playing");
	}).catch(() => {
		e.setAttribute(Uc, "");
	}));
}
function il() {
	Wc.forEach((e) => {
		tl(e, !0);
	}), Gc.forEach((e) => {
		e.classList.remove("is-masked-reveal-playing"), requestAnimationFrame(() => e.classList.add("is-masked-reveal-playing"));
	});
}
function al() {
	let e = Jc !== window.location.pathname;
	if (Jc = window.location.pathname, /^\/editionen\/?$/i.test(Jc)) {
		var t;
		(t = document.querySelector(".editionen_item")) == null || t.setAttribute("data-edition-first", "");
	}
	document.querySelectorAll(Bc).forEach(nl), document.querySelectorAll(Vc).forEach(rl), document.querySelectorAll(".editionen_item").forEach((e) => {
		e.querySelectorAll(".editionen_meta, .editionen_note").forEach((t, n) => {
			var r;
			t.hasAttribute("data-edition-content-reveal") || (t.setAttribute("data-edition-content-reveal", ""), t.style.setProperty("--edition-content-delay", `${n * 90}ms`), (r = e.querySelector(".editionen_title")) != null && r.hasAttribute(Uc) && t.classList.add("is-edition-content-in"));
		});
	}), Yc && document.querySelectorAll(".accordion_section .accordion_item").forEach((e, t) => {
		Xc.has(e) || (Xc.add(e), e.style.setProperty("--accordion-line-index", String(t)), e.setAttribute("data-accordion-line-ready", ""), Yc == null || Yc.observe(e));
	}), Wc.forEach((e, t) => {
		var n;
		t.isConnected || (e.resizeObserver.disconnect(), (n = e.intersectionObserver) == null || n.disconnect(), Wc.delete(t));
	}), Gc.forEach((e) => {
		e.isConnected || Gc.delete(e);
	}), e && il();
}
function ol() {
	var e;
	qc || u() || (qc = !0, "IntersectionObserver" in window && (Yc = new IntersectionObserver((e, t) => {
		e.forEach((e) => {
			if (!e.isIntersecting) return;
			let n = e.target;
			n.classList.add("is-accordion-line-in"), t.unobserve(n);
		});
	}, {
		threshold: 0,
		rootMargin: "0px 0px -5% 0px"
	})), al(), new MutationObserver(al).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), (e = document.fonts) == null || e.addEventListener("loadingdone", () => {
		Wc.forEach((e) => {
			e.element.matches(zc) && e.played && !e.element.hasAttribute(Uc) || tl(e);
		});
	}), window.addEventListener("popstate", al), window.addEventListener("pageshow", (e) => {
		e.persisted && (il(), al());
	}), document.addEventListener("animationend", (e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement) || !t.classList.contains("masked-reveal-line__text")) return;
		let n = t.closest(Bc);
		!n || t !== n.querySelector(".masked-reveal-line:last-of-type > .masked-reveal-line__text") || (n.classList.remove("is-masked-reveal-playing"), n.setAttribute(Uc, ""), el(n));
	}));
}
//#endregion
//#region src/main.ts
var sl = !1;
Dc(), Os(), ii(), ol(), Ac();
function cl() {
	if (sl) return;
	sl = !0;
	let e = ee();
	if (io({ i18n: e }), /^\/kontakt\/?$/i.test(window.location.pathname)) {
		var t;
		(t = document.querySelector(".contact_img img.is-contact-image")) == null || t.classList.add("js-lightbox");
	}
	Xi({ i18n: e }), qs(), is(), ie(), _(), E(), Zs(), $s(), Lc(), window.SiteInteractions = {
		openModal: eo,
		openContentModal: $a,
		closeModal: to,
		openLightbox: Ki,
		closeLightbox: qi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", cl, { once: !0 }) : cl();
//#endregion

//# sourceMappingURL=site-interactions.js.map