import { n as e, t } from "./site-interactions-DTXrvFAf.js";
import { _ as n, a as r, b as i, c as a, d as o, f as s, g as c, h as l, i as u, l as d, m as f, n as p, o as m, p as h, r as g, s as _, t as v, u as y, v as b, y as x } from "./site-interactions-Cou7uu3t.js";
import { t as S } from "./site-interactions-BxJ-FVg3.js";
import { n as C, t as w } from "./site-interactions-B0Sdc9vB.js";
import { t as T } from "./site-interactions-CKkKncuX.js";
import { a as E, i as D, n as O, r as ee, t as k } from "./site-interactions-CEVwkEpI.js";
//#region src/modules/i18n.ts
var A = {};
function j(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (s(t) && s(n) && (e[t.trim()] = n.trim()), e), {});
}
function te(e = document) {
	var t, n;
	A = {};
	let r = l("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (A = j(b(i))), {
		get values() {
			return { ...A };
		},
		t: M
	};
}
function M(e, t) {
	let n = e.trim(), r = A[n];
	return s(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var ne = ".site-menu__languages", re = ".site-menu__language", ie = "site-menu__language-indicator";
function ae(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function oe(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function se(e) {
	let t = Array.from(e.querySelectorAll(re)), n = ae(t);
	if (!n || e.querySelector(`.${ie}`)) return;
	let r = document.createElement("span");
	r.className = ie, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => oe(e, r, t), a = () => {
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
function N() {
	document.querySelectorAll(ne).forEach(se);
}
//#endregion
//#region node_modules/gsap/utils/paths.js
var ce = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, P = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, le = Math.PI / 180;
180 / Math.PI;
var ue = Math.sin, de = Math.cos, F = Math.abs, I = Math.sqrt, fe = function(e) {
	return typeof e == "number";
}, L = 1e5, R = function(e) {
	return Math.round(e * L) / L || 0;
}, pe = function(e) {
	return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001;
};
function me(e, t, n, r, i, a, o) {
	for (var s = e.length, c, l, u, d, f; --s > -1;) for (c = e[s], l = c.length, u = 0; u < l; u += 2) d = c[u], f = c[u + 1], c[u] = d * t + f * r + a, c[u + 1] = d * n + f * i + o;
	return e._dirty = 1, e;
}
function he(e, t, n, r, i, a, o, s, c) {
	if (!(e === s && t === c)) {
		n = F(n), r = F(r);
		var l = i % 360 * le, u = de(l), d = ue(l), f = Math.PI, p = f * 2, m = (e - s) / 2, h = (t - c) / 2, g = u * m + d * h, _ = -d * m + u * h, v = g * g, y = _ * _, b = v / (n * n) + y / (r * r);
		b > 1 && (n = I(b) * n, r = I(b) * r);
		var x = n * n, S = r * r, C = (x * S - x * y - S * v) / (x * y + S * v);
		C < 0 && (C = 0);
		var w = (a === o ? -1 : 1) * I(C), T = w * (n * _ / r), E = w * -(r * g / n), D = (e + s) / 2, O = (t + c) / 2, ee = D + (u * T - d * E), k = O + (d * T + u * E), A = (g - T) / n, j = (_ - E) / r, te = (-g - T) / n, M = (-_ - E) / r, ne = A * A + j * j, re = (j < 0 ? -1 : 1) * Math.acos(A / I(ne)), ie = (A * M - j * te < 0 ? -1 : 1) * Math.acos((A * te + j * M) / I(ne * (te * te + M * M)));
		isNaN(ie) && (ie = f), !o && ie > 0 ? ie -= p : o && ie < 0 && (ie += p), re %= p, ie %= p;
		var ae = Math.ceil(F(ie) / (p / 4)), oe = [], se = ie / ae, N = 4 / 3 * ue(se / 2) / (1 + de(se / 2)), ce = u * n, P = d * n, fe = d * -r, L = u * r, R;
		for (R = 0; R < ae; R++) i = re + R * se, g = de(i), _ = ue(i), A = de(i += se), j = ue(i), oe.push(g - N * _, _ + N * g, A + N * j, j - N * A, A, j);
		for (R = 0; R < oe.length; R += 2) g = oe[R], _ = oe[R + 1], oe[R] = g * ce + _ * fe + ee, oe[R + 1] = g * P + _ * L + k;
		return oe[R - 2] = s, oe[R - 1] = c, oe;
	}
}
function z(e) {
	var t = (e + "").replace(P, function(e) {
		var t = +e;
		return t < 1e-4 && t > -1e-4 ? 0 : t;
	}).match(ce) || [], n = [], r = 0, i = 0, a = 2 / 3, o = t.length, s = 0, c = "ERROR: malformed path: " + e, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w = function(e, t, n, r) {
		v = (n - e) / 3, y = (r - t) / 3, h.push(e + v, t + y, n - v, r - y, n, r);
	};
	if (!e || !isNaN(t[0]) || isNaN(t[1])) return console.log(c), n;
	for (l = 0; l < o; l++) if (x = p, isNaN(t[l]) ? (p = t[l].toUpperCase(), m = p !== t[l]) : l--, d = +t[l + 1], f = +t[l + 2], m && (d += r, f += i), l || (g = d, _ = f), p === "M") h && (h.length < 8 ? --n.length : s += h.length, pe(h)), r = g = d, i = _ = f, h = [d, f], n.push(h), l += 2, p = "L";
	else if (p === "C") h || (h = [0, 0]), m || (r = i = 0), h.push(d, f, r + t[l + 3] * 1, i + t[l + 4] * 1, r += t[l + 5] * 1, i += t[l + 6] * 1), l += 6;
	else if (p === "S") v = r, y = i, (x === "C" || x === "S") && (v += r - h[h.length - 4], y += i - h[h.length - 3]), m || (r = i = 0), h.push(v, y, d, f, r += t[l + 3] * 1, i += t[l + 4] * 1), l += 4;
	else if (p === "Q") v = r + (d - r) * a, y = i + (f - i) * a, m || (r = i = 0), r += t[l + 3] * 1, i += t[l + 4] * 1, h.push(v, y, r + (d - r) * a, i + (f - i) * a, r, i), l += 4;
	else if (p === "T") v = r - h[h.length - 4], y = i - h[h.length - 3], h.push(r + v, i + y, d + (r + v * 1.5 - d) * a, f + (i + y * 1.5 - f) * a, r = d, i = f), l += 2;
	else if (p === "H") w(r, i, r = d, i), l += 1;
	else if (p === "V") w(r, i, r, i = d + (m ? i - r : 0)), l += 1;
	else if (p === "L" || p === "Z") p === "Z" && (d = g, f = _, h.closed = !0), (p === "L" || F(r - d) > .5 || F(i - f) > .5) && (w(r, i, d, f), p === "L" && (l += 2)), r = d, i = f;
	else if (p === "A") {
		if (S = t[l + 4], C = t[l + 5], v = t[l + 6], y = t[l + 7], u = 7, S.length > 1 && (S.length < 3 ? (y = v, v = C, u--) : (y = C, v = S.substr(2), u -= 2), C = S.charAt(1), S = S.charAt(0)), b = he(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +S, +C, (m ? r : 0) + v * 1, (m ? i : 0) + y * 1), l += u, b) for (u = 0; u < b.length; u++) h.push(b[u]);
		r = h[h.length - 2], i = h[h.length - 1];
	} else console.log(c);
	return l = h.length, l < 6 ? (n.pop(), l = 0) : pe(h), n.totalPoints = s + l, n;
}
function ge(e) {
	fe(e[0]) && (e = [e]);
	var t = "", n = e.length, r, i, a, o;
	for (i = 0; i < n; i++) {
		for (o = e[i], t += "M" + R(o[0]) + "," + R(o[1]) + " C", r = o.length, a = 2; a < r; a++) t += R(o[a++]) + "," + R(o[a++]) + " " + R(o[a++]) + "," + R(o[a++]) + " " + R(o[a++]) + "," + R(o[a]) + " ";
		o.closed && (t += "z");
	}
	return t;
}
//#endregion
//#region node_modules/gsap/CustomEase.js
var _e, ve, B = function() {
	return _e || typeof window < "u" && (_e = window.gsap) && _e.registerPlugin && _e;
}, V = function() {
	_e = B(), _e ? (_e.registerEase("_CE", Ee.create), ve = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
}, ye = 0x56bc75e2d63100000, H = function(e) {
	return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3;
}, be = 1, xe = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, Se = /[cLlsSaAhHvVtTqQ]/g, Ce = function(e) {
	var t = e.length, n = ye, r;
	for (r = 1; r < t; r += 6) +e[r] < n && (n = +e[r]);
	return n;
}, we = function(e, t, n) {
	!n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
	var r = e[0] * -1, i = -n, a = e.length, o = 1 / (+e[a - 2] + r), s = -t || (Math.abs(e[a - 1] - +e[1]) < .01 * (e[a - 2] - +e[0]) ? Ce(e) + i : +e[a - 1] + i), c;
	for (s = s ? 1 / s : -o, c = 0; c < a; c += 2) e[c] = (+e[c] + r) * o, e[c + 1] = (+e[c + 1] + i) * s;
}, Te = function e(t, n, r, i, a, o, s, c, l, u, d) {
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
}, Ee = /*#__PURE__*/ function() {
	function e(e, t, n) {
		ve || V(), this.id = e, be && this.setData(t, n);
	}
	var t = e.prototype;
	return t.setData = function(e, t) {
		t = t || {}, e = e || "0,0,1,1";
		var n = e.match(xe), r = 1, i = [], a = [], o = t.precision || 1, s = o <= 1, c, l, u, d, f, p, m, h, g;
		if (this.data = e, (Se.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (n = z(e)[0]), c = n.length, c === 4) n.unshift(0, 0), n.push(1, 1), c = 8;
		else if ((c - 2) % 6) throw "Invalid CustomEase";
		for ((+n[0] != 0 || +n[c - 2] != 1) && we(n, t.height, t.originY), this.segment = n, d = 2; d < c; d += 6) l = {
			x: +n[d - 2],
			y: +n[d - 1]
		}, u = {
			x: +n[d + 4],
			y: +n[d + 5]
		}, i.push(l, u), Te(l.x, l.y, +n[d], +n[d + 1], +n[d + 2], +n[d + 3], u.x, u.y, 1 / (o * 2e5), i, i.length - 1);
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
		}, this.ease.custom = this, this.id && _e && _e.registerEase(this.id, this.ease), this;
	}, t.getSVGData = function(t) {
		return e.getSVGData(this, t);
	}, e.create = function(t, n, r) {
		return new e(t, n, r).ease;
	}, e.register = function(e) {
		_e = e, V();
	}, e.get = function(e) {
		return _e.parseEase(e);
	}, e.getSVGData = function(t, n) {
		n = n || {};
		var r = n.width || 100, i = n.height || 100, a = n.x || 0, o = (n.y || 0) + i, s = _e.utils.toArray(n.path)[0], c, l, u, d, f, p, m, h, g, _;
		if (n.invert && (i = -i, o = 0), typeof t == "string" && (t = _e.parseEase(t)), t.custom && (t = t.custom), t instanceof e) c = ge(me([t.segment.slice(0)], r, 0, 0, -i, a, o));
		else {
			for (c = [a, o], m = Math.max(5, (n.precision || 1) * 200), d = 1 / m, m += 2, h = 5 / m, g = H(a + d * r), _ = H(o + t(d) * -i), l = (_ - o) / (g - a), u = 2; u < m; u++) f = H(a + u * d * r), p = H(o + t(u * d) * -i), (Math.abs((p - _) / (f - g) - l) > h || u === m - 1) && (c.push(g, _), l = (p - _) / (f - g)), g = f, _ = p;
			c = "M" + c.join(",");
		}
		return s && s.setAttribute("d", c), c;
	}, e;
}();
Ee.version = "3.15.0", Ee.headless = !0, B() && _e.registerPlugin(Ee);
//#endregion
//#region node_modules/gsap/Observer.js
function De(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function Oe(e, t, n) {
	return t && De(e.prototype, t), n && De(e, n), e;
}
var U, W, G, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze = function() {
	return U || typeof window < "u" && (U = window.gsap) && U.registerPlugin && U;
}, Be = 1, Ve = [], K = [], He = [], Ue = Date.now, We = function(e, t) {
	return t;
}, Ge = function() {
	var e = Pe.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, K), r.push.apply(r, He), K = n, He = r, We = function(e, n) {
		return t[e](n);
	};
}, Ke = function(e, t) {
	return ~He.indexOf(e) && He[He.indexOf(e) + 1][t];
}, qe = function(e) {
	return !!~Fe.indexOf(e);
}, Je = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, Ye = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Xe = "scrollLeft", Ze = "scrollTop", Qe = function() {
	return Ie && Ie.isPressed || K.cache++;
}, $e = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			Be && (G.history.scrollRestoration = "manual");
			var i = Ie && Ie.isPressed;
			r = n.v = Math.round(r) || (Ie && Ie.iOS ? 1 : 0), e(r), n.cacheID = K.cache, i && We("ss", r);
		} else (t || K.cache !== n.cacheID || We("ref")) && (n.cacheID = K.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, et = {
	s: Xe,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: $e(function(e) {
		return arguments.length ? G.scrollTo(e, tt.sc()) : G.pageXOffset || ke[Xe] || Ae[Xe] || je[Xe] || 0;
	})
}, tt = {
	s: Ze,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: et,
	sc: $e(function(e) {
		return arguments.length ? G.scrollTo(et.sc(), e) : G.pageYOffset || ke[Ze] || Ae[Ze] || je[Ze] || 0;
	})
}, nt = function(e, t) {
	return (t && t._ctx && t._ctx.selector || U.utils.toArray)(e)[0] || (typeof e == "string" && U.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, rt = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, it = function(e, t) {
	var n = t.s, r = t.sc;
	qe(e) && (e = ke.scrollingElement || Ae);
	var i = K.indexOf(e), a = r === tt.sc ? 1 : 2;
	!~i && (i = K.push(e) - 1), K[i + a] || Je(e, "scroll", Qe);
	var o = K[i + a], s = o || (K[i + a] = $e(Ke(e, n), !0) || (qe(e) ? r : $e(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = U.getProperty(e, "scrollBehavior") === "smooth"), s;
}, at = function(e, t, n) {
	var r = e, i = e, a = Ue(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = Ue();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = Ue();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, ot = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, st = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, ct = function() {
	Pe = U.core.globals().ScrollTrigger, Pe && Pe.core && Ge();
}, lt = function(e) {
	return U = e || ze(), !W && U && typeof document < "u" && document.body && (G = window, ke = document, Ae = ke.documentElement, je = ke.body, Fe = [
		G,
		ke,
		Ae,
		je
	], U.utils.clamp, Re = U.core.context || function() {}, Ne = "onpointerenter" in je ? "pointer" : "mouse", Me = q.isTouch = G.matchMedia && G.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in G || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Le = q.eventTypes = ("ontouchstart" in Ae ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ae ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return Be = 0;
	}, 500), W = 1), Pe || ct(), W;
};
et.op = tt, K.cache = 0;
var q = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		W || lt(U) || console.warn("Please gsap.registerPlugin(Observer)"), Pe || ct();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, ee = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, j = e.onGestureStart, te = e.onGestureEnd, M = e.onWheel, ne = e.onEnable, re = e.onDisable, ie = e.onClick, ae = e.scrollSpeed, oe = e.capture, se = e.allowClicks, N = e.lockAxis, ce = e.onLockAxis;
		this.target = i = nt(i) || Ae, this.vars = e, u && (u = U.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ae = ae || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(G.getComputedStyle(je).lineHeight) || 22);
		var P, le, ue, de, F, I, fe, L = this, R = 0, pe = 0, me = e.passive || !s && e.passive !== !1, he = it(i, et), z = it(i, tt), ge = he(), _e = z(), ve = ~r.indexOf("touch") && !~r.indexOf("pointer") && Le[0] === "pointerdown", B = qe(i), V = i.ownerDocument || ke, ye = [
			0,
			0,
			0
		], H = [
			0,
			0,
			0
		], be = 0, xe = function() {
			return be = Ue();
		}, Se = function(e, t) {
			return (L.event = e) && u && rt(e.target, u) || t && ve && e.pointerType !== "touch" || k && k(e, t);
		}, Ce = function() {
			L._vx.reset(), L._vy.reset(), le.pause(), c && c(L);
		}, we = function() {
			var e = L.deltaX = st(ye), n = L.deltaY = st(H), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(L, e, n, ye, H), r && (v && L.deltaX > 0 && v(L), y && L.deltaX < 0 && y(L), S && S(L), T && L.deltaX < 0 != R < 0 && T(L), R = L.deltaX, ye[0] = ye[1] = ye[2] = 0), i && (x && L.deltaY > 0 && x(L), b && L.deltaY < 0 && b(L), C && C(L), E && L.deltaY < 0 != pe < 0 && E(L), pe = L.deltaY, H[0] = H[1] = H[2] = 0), (de || ue) && (ee && ee(L), ue && (p && ue === 1 && p(L), h && h(L), ue = 0), de = !1), I && !(I = !1) && ce && ce(L), F && (M(L), F = !1), P = 0;
		}, Te = function(e, t, n) {
			ye[n] += e, H[n] += t, L._vx.update(e), L._vy.update(t), o ? P || (P = requestAnimationFrame(we)) : we();
		}, Ee = function(e, t) {
			N && !fe && (L.axis = fe = Math.abs(e) > Math.abs(t) ? "x" : "y", I = !0), fe !== "y" && (ye[2] += e, L._vx.update(e, !0)), fe !== "x" && (H[2] += t, L._vy.update(t, !0)), o ? P || (P = requestAnimationFrame(we)) : we();
		}, De = function(e) {
			if (!Se(e, 1)) {
				e = ot(e, s);
				var t = e.clientX, r = e.clientY, i = t - L.x, a = r - L.y, o = L.isDragging;
				L.x = t, L.y = r, (o || (i || a) && (Math.abs(L.startX - t) >= n || Math.abs(L.startY - r) >= n)) && (ue || (ue = o ? 2 : 1), o || (L.isDragging = !0), Ee(i, a));
			}
		}, Oe = L.onPress = function(e) {
			Se(e, 1) || e && e.button || (L.axis = fe = null, le.pause(), L.isPressed = !0, e = ot(e), R = pe = 0, L.startX = L.x = e.clientX, L.startY = L.y = e.clientY, L._vx.reset(), L._vy.reset(), Je(A ? i : V, Le[1], De, me, !0), L.deltaX = L.deltaY = 0, g && g(L));
		}, Fe = L.onRelease = function(e) {
			if (!Se(e, 1)) {
				Ye(A ? i : V, Le[1], De, !0);
				var t = !isNaN(L.y - L.startY), n = L.isDragging, r = n && (Math.abs(L.x - L.startX) > 3 || Math.abs(L.y - L.startY) > 3), a = ot(e);
				!r && t && (L._vx.reset(), L._vy.reset(), s && se && U.delayedCall(.08, function() {
					if (Ue() - be > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (V.createEvent) {
							var t = V.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, G, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), L.isDragging = L.isGesturing = L.isPressed = !1, c && n && !A && le.restart(!0), ue && we(), m && n && m(L), _ && _(L, r);
			}
		}, ze = function(e) {
			return e.touches && e.touches.length > 1 && (L.isGesturing = !0) && j(e, L.isDragging);
		}, Be = function() {
			return (L.isGesturing = !1) || te(L);
		}, K = function(e) {
			if (!Se(e)) {
				var t = he(), n = z();
				Te((t - ge) * ae, (n - _e) * ae, 1), ge = t, _e = n, c && le.restart(!0);
			}
		}, He = function(e) {
			if (!Se(e)) {
				e = ot(e, s), M && (F = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? G.innerHeight : 1) * d;
				Te(e.deltaX * t, e.deltaY * t, 0), c && !A && le.restart(!0);
			}
		}, We = function(e) {
			if (!Se(e)) {
				var t = e.clientX, n = e.clientY, r = t - L.x, i = n - L.y;
				L.x = t, L.y = n, de = !0, c && le.restart(!0), (r || i) && Ee(r, i);
			}
		}, Ge = function(e) {
			L.event = e, D(L);
		}, Ke = function(e) {
			L.event = e, O(L);
		}, Xe = function(e) {
			return Se(e) || ot(e, s) && ie(L);
		};
		le = L._dc = U.delayedCall(l || .25, Ce).pause(), L.deltaX = L.deltaY = 0, L._vx = at(0, 50, !0), L._vy = at(0, 50, !0), L.scrollX = he, L.scrollY = z, L.isDragging = L.isGesturing = L.isPressed = !1, Re(this), L.enable = function(e) {
			return L.isEnabled || (Je(B ? V : i, "scroll", Qe), r.indexOf("scroll") >= 0 && Je(B ? V : i, "scroll", K, me, oe), r.indexOf("wheel") >= 0 && Je(i, "wheel", He, me, oe), (r.indexOf("touch") >= 0 && Me || r.indexOf("pointer") >= 0) && (Je(i, Le[0], Oe, me, oe), Je(V, Le[2], Fe), Je(V, Le[3], Fe), se && Je(i, "click", xe, !0, !0), ie && Je(i, "click", Xe), j && Je(V, "gesturestart", ze), te && Je(V, "gestureend", Be), D && Je(i, Ne + "enter", Ge), O && Je(i, Ne + "leave", Ke), ee && Je(i, Ne + "move", We)), L.isEnabled = !0, L.isDragging = L.isGesturing = L.isPressed = de = ue = !1, L._vx.reset(), L._vy.reset(), ge = he(), _e = z(), e && e.type && Oe(e), ne && ne(L)), L;
		}, L.disable = function() {
			L.isEnabled && (Ve.filter(function(e) {
				return e !== L && qe(e.target);
			}).length || Ye(B ? V : i, "scroll", Qe), L.isPressed && (L._vx.reset(), L._vy.reset(), Ye(A ? i : V, Le[1], De, !0)), Ye(B ? V : i, "scroll", K, oe), Ye(i, "wheel", He, oe), Ye(i, Le[0], Oe, oe), Ye(V, Le[2], Fe), Ye(V, Le[3], Fe), Ye(i, "click", xe, !0), Ye(i, "click", Xe), Ye(V, "gesturestart", ze), Ye(V, "gestureend", Be), Ye(i, Ne + "enter", Ge), Ye(i, Ne + "leave", Ke), Ye(i, Ne + "move", We), L.isEnabled = L.isPressed = L.isDragging = !1, re && re(L));
		}, L.kill = L.revert = function() {
			L.disable();
			var e = Ve.indexOf(L);
			e >= 0 && Ve.splice(e, 1), Ie === L && (Ie = 0);
		}, Ve.push(L), A && qe(i) && (Ie = L), L.enable(f);
	}, Oe(e, [{
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
}, q.register = lt, q.getAll = function() {
	return Ve.slice();
}, q.getById = function(e) {
	return Ve.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, ze() && U.registerPlugin(q);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var J, ut, Y, X, dt, Z, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt = 1, Vt = Date.now, Ht = Vt(), Ut = 0, Wt = 0, Gt = function(e, t, n) {
	var r = cn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, Kt = function(e, t) {
	return t && (!cn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, qt = function e() {
	return Wt && requestAnimationFrame(e);
}, Jt = function() {
	return yt = 1;
}, Yt = function() {
	return yt = 0;
}, Xt = function(e) {
	return e;
}, Zt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, Qt = function() {
	return typeof window < "u";
}, $t = function() {
	return J || Qt() && (J = window.gsap) && J.registerPlugin && J;
}, en = function(e) {
	return !!~ft.indexOf(e);
}, tn = function(e) {
	return (e === "Height" ? It : Y["inner" + e]) || dt["client" + e] || Z["client" + e];
}, nn = function(e) {
	return Ke(e, "getBoundingClientRect") || (en(e) ? function() {
		return kr.width = Y.innerWidth, kr.height = It, kr;
	} : function() {
		return Nn(e);
	});
}, rn = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = Ke(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? tn(i) : e["client" + i]) || 0;
	};
}, an = function(e, t) {
	return !t || ~He.indexOf(e) ? nn(e) : function() {
		return kr;
	};
}, on = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = Ke(e, n)) ? a() - nn(e)()[i] : en(e) ? (dt[n] || Z[n]) - tn(r) : e[n] - e["offset" + r]);
}, sn = function(e, t) {
	for (var n = 0; n < wt.length; n += 3) (!t || ~t.indexOf(wt[n + 1])) && e(wt[n], wt[n + 1], wt[n + 2]);
}, cn = function(e) {
	return typeof e == "string";
}, ln = function(e) {
	return typeof e == "function";
}, un = function(e) {
	return typeof e == "number";
}, dn = function(e) {
	return typeof e == "object";
}, fn = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, pn = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, mn = Math.abs, hn = "left", gn = "top", _n = "right", vn = "bottom", yn = "width", bn = "height", xn = "Right", Sn = "Left", Cn = "Top", wn = "Bottom", Tn = "padding", En = "margin", Dn = "Width", On = "Height", kn = "px", An = function(e) {
	return Y.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, jn = function(e) {
	var t = An(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, Mn = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Nn = function(e, t) {
	var n = t && An(e)[bt] !== "matrix(1, 0, 0, 1, 0, 0)" && J.to(e, {
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
}, Pn = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Fn = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, In = function(e) {
	return function(t) {
		return J.utils.snap(Fn(e), t);
	};
}, Ln = function(e) {
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
}, Rn = function(e) {
	return function(t, n) {
		return Ln(Fn(e))(t, n.direction);
	};
}, zn = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, Bn = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, Vn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Hn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, Un = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, Wn = {
	toggleActions: "play",
	anticipatePin: 0
}, Gn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, Kn = function(e, t) {
	if (cn(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Gn ? Gn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, qn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = X.createElement("div"), m = en(n) || Ke(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Z : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === tt ? _n : vn) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Jn(p, 0, r, _), p;
}, Jn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Dn] = 1, i["border" + o + Dn] = 0, i[n.p] = t + "px", J.set(e, i);
}, Q = [], Yn = {}, Xn, Zn = function() {
	return Vt() - Ut > 34 && (Xn || (Xn = requestAnimationFrame(br)));
}, Qn = function() {
	(!Ot || !Ot.isPressed || Ot.startX > Z.clientWidth) && (K.cache++, Ot ? Xn || (Xn = requestAnimationFrame(br)) : br(), Ut || ir("scrollStart"), Ut = Vt());
}, $n = function() {
	jt = Y.innerWidth, At = Y.innerHeight;
}, er = function(e) {
	K.cache++, (e === !0 || !vt && !Dt && !X.fullscreenElement && !X.webkitFullscreenElement && (!kt || jt !== Y.innerWidth || Math.abs(Y.innerHeight - At) > Y.innerHeight * .25)) && pt.restart(!0);
}, tr = {}, nr = [], rr = function e() {
	return Vn($, "scrollEnd", e) || gr(!0);
}, ir = function(e) {
	return tr[e] && tr[e].map(function(e) {
		return e();
	}) || nr;
}, ar = [], or = function(e) {
	for (var t = 0; t < ar.length; t += 5) (!e || ar[t + 4] && ar[t + 4].query === e) && (ar[t].style.cssText = ar[t + 1], ar[t].getBBox && ar[t].setAttribute("transform", ar[t + 2] || ""), ar[t + 3].uncache = 1);
}, sr = function() {
	return K.forEach(function(e) {
		return ln(e) && ++e.cacheID && (e.rec = e());
	});
}, cr = function(e, t) {
	var n;
	for (xt = 0; xt < Q.length; xt++) n = Q[xt], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Lt = !0, t && or(t), t || ir("revert");
}, lr = function(e, t) {
	K.cache++, (t || !ur) && K.forEach(function(e) {
		return ln(e) && e.cacheID++ && (e.rec = 0);
	}), cn(e) && (Y.history.scrollRestoration = Pt = e);
}, ur, dr = 0, fr, pr = function() {
	if (fr !== dr) {
		var e = fr = dr;
		requestAnimationFrame(function() {
			return e === dr && gr(!0);
		});
	}
}, mr = function() {
	Z.appendChild(Ft), It = !Ot && Ft.offsetHeight || Y.innerHeight, Z.removeChild(Ft);
}, hr = function(e) {
	return mt(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, gr = function(e, t) {
	if (dt = X.documentElement, Z = X.body, ft = [
		Y,
		X,
		dt,
		Z
	], Ut && !e && !Lt) {
		Bn($, "scrollEnd", rr);
		return;
	}
	mr(), ur = $.isRefreshing = !0, Lt || sr();
	var n = ir("refreshInit");
	Tt && $.sort(), t || cr(), K.forEach(function(e) {
		ln(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), Lt = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), Rt = 1, hr(!0), Q.forEach(function(e) {
		var t = on(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), hr(!1), Rt = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), K.forEach(function(e) {
		ln(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), lr(Pt, 1), pt.pause(), dr++, ur = 2, br(2), Q.forEach(function(e) {
		return ln(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), ur = $.isRefreshing = !1, ir("refresh");
}, _r = 0, vr = 1, yr, br = function(e) {
	if (e === 2 || !ur && !Lt) {
		$.isUpdating = !0, yr && yr.update(0);
		var t = Q.length, n = Vt(), r = n - Ht >= 50, i = t && Q[0].scroll();
		if (vr = _r > i ? -1 : 1, ur || (_r = i), r && (Ut && !yt && n - Ut > 200 && (Ut = 0, ir("scrollEnd")), gt = Ht, Ht = n), vr < 0) {
			for (xt = t; xt-- > 0;) Q[xt] && Q[xt].update(0, r);
			vr = 1;
		} else for (xt = 0; xt < t; xt++) Q[xt] && Q[xt].update(0, r);
		$.isUpdating = !1;
	}
	Xn = 0;
}, xr = [
	hn,
	gn,
	vn,
	_n,
	En + wn,
	En + xn,
	En + Cn,
	En + Sn,
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
], Sr = xr.concat([
	yn,
	bn,
	"boxSizing",
	"max" + Dn,
	"max" + On,
	"position",
	En,
	Tn,
	Tn + Cn,
	Tn + xn,
	Tn + wn,
	Tn + Sn
]), Cr = function(e, t, n) {
	Er(n);
	var r = e._gsap;
	if (r.spacerIsNative) Er(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, wr = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = xr.length, a = t.style, o = e.style, s; i--;) s = xr[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[vn] = o[_n] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[yn] = Pn(e, et) + kn, a[bn] = Pn(e, tt) + kn, a[Tn] = o[En] = o[gn] = o[hn] = "0", Er(r), o[yn] = o["max" + Dn] = n[yn], o[bn] = o["max" + On] = n[bn], o[Tn] = n[Tn], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Tr = /([A-Z])/g, Er = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Tr, "-$1").toLowerCase());
	}
}, Dr = function(e) {
	for (var t = Sr.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Sr[i], n[Sr[i]]);
	return r.t = e, r;
}, Or = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, kr = {
	left: 0,
	top: 0
}, Ar = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	ln(e) && (e = e(s)), cn(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Kn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), un(e)) f && (e = J.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && Jn(o, n, r, !0);
	else {
		ln(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = nt(t, s) || Z, y = Nn(_) || {}, (!y || !y.left && !y.top) && An(_).display === "none" && (S = _.style.display, _.style.display = "block", y = Nn(_), S ? _.style.display = S : _.style.removeProperty("display")), b = Kn(v[0], y[r.d]), x = Kn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && Jn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, Jn(a, C, r, w && C > 20 || !w && (u ? Math.max(Z[h], dt[h]) : a.parentNode[h]) <= C + 1), u && (c = Nn(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + kn));
	}
	return f && _ && (h = Nn(_), f.seek(d), g = Nn(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, jr = /(webkit|moz|length|cssText|inset)/i, Mr = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Z) {
			for (a in e._stOrig = i.cssText, o = An(e), o) !+a && !jr.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		J.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, Nr = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, Pr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, J.set(e, r);
}, Fr = function(e, t) {
	var n = it(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = Nr(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			K.cache++, t.tween && br();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = J.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, Bn(e, "wheel", n.wheelHandler), $.isTouch && Bn(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		ut || e.register(J) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Nt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Wt) {
			this.update = this.refresh = this.kill = Xt;
			return;
		}
		t = Mn(cn(t) || un(t) || t.nodeType ? { trigger: t } : t, Wn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? et : tt, T = !l && l !== 0, E = nt(t.scroller || Y), D = J.core.getCache(E), O = en(E), ee = ("pinType" in t ? t.pinType : Ke(E, "pinType") || O && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = T && t.toggleActions.split(" "), j = "markers" in t ? t.markers : Wn.markers, te = O ? 0 : parseFloat(An(E)["border" + w.p2 + Dn]) || 0, M = this, ne = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, re = rn(E, O, w), ie = an(E, O), ae = 0, oe = 0, se = 0, N = it(E, w), ce, P, le, ue, de, F, I, fe, L, R, pe, me, he, z, ge, _e, ve, B, V, ye, H, be, xe, Se, Ce, we, Te, Ee, De, Oe, U, W, G, ke, Ae, je, Me, Ne, Pe;
		if (M._startClamp = M._endClamp = !1, M._dir = w, m *= 45, M.scroller = E, M.scroll = x ? x.time.bind(x) : N, ue = N(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (Tt = 1, t.refreshPriority === -9999 && (yr = M)), D.tweenScroll = D.tweenScroll || {
			top: Fr(E, tt),
			left: Fr(E, et)
		}, M.tweenTo = ce = D.tweenScroll[w.p], M.scrubDuration = function(e) {
			G = un(e) && e, G ? W ? W.duration(e) : W = J.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: G,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (W && W.progress(1).kill(), W = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), Oe = 0, o || (o = n.vars.id)), v && ((!dn(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Z.style && J.set(O ? [Z, dt] : E, { scrollBehavior: "auto" }), K.forEach(function(e) {
			return ln(e) && e.target === (O ? X.scrollingElement || dt : E) && (e.smooth = !1);
		}), le = ln(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? In(n) : v.snapTo === "labelsDirectional" ? Rn(n) : v.directional === !1 ? J.utils.snap(v.snapTo) : function(e, t) {
			return Ln(v.snapTo)(e, Vt() - oe < 500 ? 0 : t.direction);
		}, ke = v.duration || {
			min: .1,
			max: 2
		}, ke = dn(ke) ? ht(ke.min, ke.max) : ht(ke, ke), Ae = J.delayedCall(v.delay || G / 2 || .1, function() {
			var e = N(), t = Vt() - oe < 500, r = ce.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !yt && ae !== e) {
				var i = (e - F) / z, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - U) / (Vt() - gt) * 1e3 || 0, s = J.utils.clamp(-i, 1 - i, mn(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = le(c, M), un(l) || (l = c), u = Math.max(0, Math.round(F + l * z)), e <= I && e >= F && u !== e) {
					if (r && !r._initted && r.data <= mn(u - e)) return;
					v.inertia === !1 && (s = l - i), ce(u, {
						duration: ke(mn(Math.max(mn(c - a), mn(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: mn(u - e),
						onInterrupt: function() {
							return Ae.restart(!0) && p && pn(M, p);
						},
						onComplete: function() {
							M.update(), ae = N(), n && !T && (W ? W.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Oe = U = n && !T ? n.totalProgress() : M.progress, g && g(M), m && pn(M, m);
						}
					}, e, s * z, u - e - s * z), f && pn(M, f, ce.tween);
				}
			} else M.isActive && ae !== e && Ae.restart(!0);
		}).pause()), o && (Yn[o] = M), u = M.trigger = nt(u || d !== !0 && d), Pe = u && u._gsap && u._gsap.stRevert, Pe && (Pe = Pe(M)), d = d === !0 ? u : nt(d), cn(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === En || (f = !f && d.parentNode && d.parentNode.style && An(d.parentNode).display === "flex" ? !1 : Tn), M.pin = d, P = J.core.getCache(d), P.spacer ? ge = P.pinState : (b && (b = nt(b), b && !b.nodeType && (b = b.current || b.nativeElement), P.spacerIsNative = !!b, b && (P.spacerState = Dr(b))), P.spacer = B = b || X.createElement("div"), B.classList.add("pin-spacer"), o && B.classList.add("pin-spacer-" + o), P.pinState = ge = Dr(d)), t.force3D !== !1 && J.set(d, { force3D: !0 }), M.spacer = B = P.spacer, De = An(d), Se = De[f + w.os2], ye = J.getProperty(d), H = J.quickSetter(d, w.a, kn), wr(d, B, De), ve = Dr(d)), j) {
			me = dn(j) ? Mn(j, Un) : Un, R = qn("scroller-start", o, E, w, me, 0), pe = qn("scroller-end", o, E, w, me, 0, R), V = R["offset" + w.op.d2];
			var Fe = nt(Ke(E, "content") || E);
			fe = this.markerStart = qn("start", o, Fe, w, me, V, 0, x), L = this.markerEnd = qn("end", o, Fe, w, me, V, 0, x), x && (Ne = J.quickSetter([fe, L], w.a, kn)), !ee && !(He.length && Ke(E, "fixedMarkers") === !0) && (jn(O ? Z : E), J.set([R, pe], { force3D: !0 }), we = J.quickSetter(R, w.a, kn), Ee = J.quickSetter(pe, w.a, kn));
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
			var r = e !== !1 || !M.enabled, i = vt;
			r !== M.isReverted && (r && (je = Math.max(N(), M.scroll.rec || 0), se = M.progress, Me = n && n.progress()), fe && [
				fe,
				L,
				R,
				pe
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (vt = M, M.update(r)), d && (!y || !M.isActive) && (r ? Cr(d, B, ge) : wr(d, B, An(d), Ce)), r || M.update(r), vt = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((vt || !M.enabled) && !i)) {
				if (d && r && Ut) {
					Bn(e, "scrollEnd", rr);
					return;
				}
				!ur && ne && ne(M), vt = M, ce.tween && !a && (ce.tween.kill(), ce.tween = 0), W && W.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = re(), l = ie(), m = x ? x.duration() : on(E, w), h = z <= .01 || !z, g = 0, _ = o || 0, v = dn(a) ? a.end : t.end, b = t.endTrigger || u, S = dn(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = M.pinnedContainer = t.pinnedContainer && nt(t.pinnedContainer, M), D = u && Math.max(0, Q.indexOf(M)) || 0, k = D, A, P, le, me, V, H, Se, we, Ee, De, Oe, U, G;
				for (j && dn(a) && (U = J.getProperty(R, w.p), G = J.getProperty(pe, w.p)); k-- > 0;) H = Q[k], H.end || H.refresh(0, 1) || (vt = M), Se = H.pin, Se && (Se === u || Se === d || Se === C) && !H.isReverted && (De || (De = []), De.unshift(H), H.revert(!0, !0)), H !== Q[k] && (D--, k--);
				for (ln(S) && (S = S(M)), S = Gt(S, "start", M), F = Ar(S, u, s, w, N(), fe, R, M, l, te, ee, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), ln(v) && (v = v(M)), cn(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (cn(S) ? S.split(" ")[0] : "") + v : (g = Kn(v.substr(2), s), v = cn(S) ? S : (x ? J.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, F) : F) + g, b = u)), v = Gt(v, "end", M), I = Math.max(F, Ar(v || (b ? "100% 0" : m), b, s, w, N() + g, L, pe, M, l, te, ee, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = D; k--;) H = Q[k] || {}, Se = H.pin, Se && H.start - H._pinPush <= F && !x && H.end > 0 && (A = H.end - (M._startClamp ? Math.max(0, H.start) : H.start), (Se === u && H.start - H._pinPush < F || Se === C) && isNaN(S) && (g += A * (1 - H.progress)), Se === d && (_ += A));
				if (F += g, I += g, M._startClamp && (M._startClamp += g), M._endClamp && !ur && (M._endClamp = I || -.001, I = Math.min(I, on(E, w))), z = I - F || (F -= .01) && .001, h && (se = J.utils.clamp(0, 1, J.utils.normalize(F, I, je))), M._pinPush = _, fe && g && (A = {}, A[w.a] = "+=" + g, C && (A[w.p] = "-=" + N()), J.set([fe, L], A)), d && !(Rt && M.end >= on(E, w))) A = An(d), me = w === tt, le = N(), be = parseFloat(ye(w.a)) + _, !m && I > 1 && (Oe = (O ? X.scrollingElement || dt : E).style, Oe = {
					style: Oe,
					value: Oe["overflow" + w.a.toUpperCase()]
				}, O && An(Z)["overflow" + w.a.toUpperCase()] !== "scroll" && (Oe.style["overflow" + w.a.toUpperCase()] = "scroll")), wr(d, B, A), ve = Dr(d), P = Nn(d, !0), we = ee && it(E, me ? et : tt)(), f ? (Ce = [f + w.os2, z + _ + kn], Ce.t = B, k = f === Tn ? Pn(d, w) + z + _ : 0, k && (Ce.push(w.d, k + kn), B.style.flexBasis !== "auto" && (B.style.flexBasis = k + kn)), Er(Ce), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ee && N(je)) : (k = Pn(d, w), k && B.style.flexBasis !== "auto" && (B.style.flexBasis = k + kn)), ee && (V = {
					top: P.top + (me ? le - F : we) + kn,
					left: P.left + (me ? we : le - F) + kn,
					boxSizing: "border-box",
					position: "fixed"
				}, V[yn] = V["max" + Dn] = Math.ceil(P.width) + kn, V[bn] = V["max" + On] = Math.ceil(P.height) + kn, V[En] = V[En + Cn] = V[En + xn] = V[En + wn] = V[En + Sn] = "0", V[Tn] = A[Tn], V[Tn + Cn] = A[Tn + Cn], V[Tn + xn] = A[Tn + xn], V[Tn + wn] = A[Tn + wn], V[Tn + Sn] = A[Tn + Sn], _e = Or(ge, V, y), ur && N(0)), n ? (Ee = n._initted, Et(1), n.render(n.duration(), !0, !0), xe = ye(w.a) - be + z + _, Te = Math.abs(z - xe) > 1, ee && Te && _e.splice(_e.length - 2, 2), n.render(0, !0, !0), Ee || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Et(0)) : xe = z, Oe && (Oe.value ? Oe.style["overflow" + w.a.toUpperCase()] = Oe.value : Oe.style.removeProperty("overflow-" + w.a));
				else if (u && N() && !x) for (P = u.parentNode; P && P !== Z;) P._pinOffset && (F -= P._pinOffset, I -= P._pinOffset), P = P.parentNode;
				De && De.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = F, M.end = I, ue = de = ur ? je : N(), !x && !ur && (ue < je && N(je), M.scroll.rec = 0), M.revert(!1, !0), oe = Vt(), Ae && (ae = -1, Ae.restart(!0)), vt = 0, n && T && (n._initted || Me) && n.progress() !== Me && n.progress(Me || 0, !0).render(n.time(), !0, !0), (h || se !== M.progress || x || p || n && !n._initted) && (n && !T && (n._initted || se || n.vars.immediateRender !== !1) && n.totalProgress(x && F < -.001 && !se ? J.utils.normalize(F, I, 0) : se, !0), M.progress = h || (ue - F) / z === se ? 0 : se), d && f && (B._pinOffset = Math.round(M.progress * xe)), W && W.invalidate(), isNaN(U) || (U -= J.getProperty(R, w.p), G -= J.getProperty(pe, w.p), Pr(R, w, U), Pr(fe, w, U - (o || 0)), Pr(pe, w, G), Pr(L, w, G - (o || 0))), h && !ur && M.update(), c && !ur && !he && (he = !0, c(M), he = !1);
			}
		}, M.getVelocity = function() {
			return (N() - de) / (Vt() - gt) * 1e3 || 0;
		}, M.endAnimation = function() {
			fn(M.callbackAnimation), n && (W ? W.progress(1) : n.paused() ? T || fn(n, M.direction < 0, 1) : fn(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (F || M.refresh() || F) + n.labels[e] / n.duration() * z || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (cn(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= F : e.start >= I;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = ur === !0 ? je : M.scroll(), c = e ? 0 : (o - F) / z, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, D, O, j, te, ne;
				if (t && (de = ue, ue = x ? N() : o, v && (U = Oe, Oe = n && !T ? n.totalProgress() : u)), m && d && !vt && !Bt && Ut && (!u && F < o + (o - de) / (Vt() - gt) * m ? u = 1e-4 : u === 1 && I > o + (o - de) / (Vt() - gt) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, j = h !== g, O = j || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, O && !vt && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !j && A[b + 1] !== "none" && A[b + 1] || A[b], ne = n && (D === "complete" || D === "reset" || D in n))), C && (j || ne) && (ne || l || !n) && (ln(C) ? C(M) : M.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (W && !vt && !Bt ? (W._dp._time - W._start !== W._time && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", u, n._tTime / n._tDur) : (W.vars.totalProgress = u, W.invalidate().restart())) : n && n.totalProgress(u, !!(vt && (oe || e)))), d) {
						if (e && f && (B.style[f + w.os2] = Se), !ee) H(Zt(be + xe * u));
						else if (O) {
							if (te = !e && u > p && I + 1 > o && o + 1 >= on(E, w), y) if (!e && (h || te)) {
								var re = Nn(d, !0), ie = o - F;
								Mr(d, Z, re.top + (w === tt ? ie : 0) + kn, re.left + (w === tt ? 0 : ie) + kn);
							} else Mr(d, B);
							Er(h || te ? _e : ve), Te && u < 1 && h || H(be + (u === 1 && !te ? xe : 0));
						}
					}
					v && !ce.tween && !vt && !Bt && Ae.restart(!0), a && (j || _ && u && (u < 1 || !zt)) && mt(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(M), O && !vt ? (T && (ne && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(M)), (j || !zt) && (s && j && pn(M, s), k[b] && pn(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), j || (b = u === 1 ? 1 : 3, k[b] && pn(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (un(S) ? S : 2500) && (fn(M.callbackAnimation), W ? W.progress(1) : fn(n, D === "reverse" ? 1 : !u, 1))) : T && i && !vt && i(M);
				}
				if (Ee) {
					var ae = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					we(ae + +!!R._isFlipped), Ee(ae);
				}
				Ne && Ne(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, Bn(E, "resize", er), O || Bn(E, "scroll", Qn), ne && Bn(e, "refreshInit", ne), t !== !1 && (M.progress = se = 0, ue = de = ae = N()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && ce ? ce.tween : W;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: Kt(e, n && !!M._startClamp),
				end: Kt(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (Ce && e) {
				var t = Ce.indexOf(w.d) + 1;
				Ce[t] = parseFloat(Ce[t]) + e + kn, Ce[1] = parseFloat(Ce[1]) + e + kn, Er(Ce);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || W && W.pause(), je = 0, P && (P.uncache = 1), ne && Vn(e, "refreshInit", ne), Ae && (Ae.pause(), ce.tween && ce.tween.kill() && (ce.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== M) return;
				Vn(E, "resize", er), O || Vn(E, "scroll", Qn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), W && !r && W.kill(), o && delete Yn[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === xt && vr > 0 && xt--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || ur || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), fe && [
				fe,
				L,
				R,
				pe
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), yr === M && (yr = 0), d && (P && (P.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (P.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Pe && Pe(M), n && n.add && !z) {
			var Re = M.update;
			M.update = function() {
				M.update = Re, K.cache++, F || I || M.refresh();
			}, J.delayedCall(.01, M.update), z = .01, F = I = 0;
		} else M.refresh();
		d && pr();
	}, e.register = function(t) {
		return ut || (J = t || $t(), Qt() && window.document && e.enable(), ut = Wt), ut;
	}, e.defaults = function(e) {
		if (e) for (var t in e) Wn[t] = e[t];
		return Wn;
	}, e.disable = function(e, t) {
		Wt = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), Vn(Y, "wheel", Qn), Vn(X, "scroll", Qn), clearInterval(_t), Vn(X, "touchcancel", Xt), Vn(Z, "touchstart", Xt), zn(Vn, X, "pointerdown,touchstart,mousedown", Jt), zn(Vn, X, "pointerup,touchend,mouseup", Yt), pt.kill(), sn(Vn);
		for (var n = 0; n < K.length; n += 3) Hn(Vn, K[n], K[n + 1]), Hn(Vn, K[n], K[n + 2]);
	}, e.enable = function() {
		if (Y = window, X = document, dt = X.documentElement, Z = X.body, J) if (mt = J.utils.toArray, ht = J.utils.clamp, Nt = J.core.context || Xt, Et = J.core.suppressOverwrites || Xt, Pt = Y.history.scrollRestoration || "auto", _r = Y.pageYOffset || 0, J.core.globals("ScrollTrigger", e), Z) {
			Wt = 1, Ft = document.createElement("div"), Ft.style.height = "100vh", Ft.style.position = "absolute", mr(), qt(), q.register(J), e.isTouch = q.isTouch, Mt = q.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), kt = q.isTouch === 1, Bn(Y, "wheel", Qn), ft = [
				Y,
				X,
				dt,
				Z
			], J.matchMedia ? (e.matchMedia = function(e) {
				var t = J.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, J.addEventListener("matchMediaInit", function() {
				sr(), cr();
			}), J.addEventListener("matchMediaRevert", function() {
				return or();
			}), J.addEventListener("matchMedia", function() {
				gr(0, 1), ir("matchMedia");
			}), J.matchMedia().add("(orientation: portrait)", function() {
				return $n(), $n;
			})) : console.warn("Requires GSAP 3.11.0 or later"), $n(), Bn(X, "scroll", Qn);
			var t = Z.hasAttribute("style"), n = Z.style, r = n.borderTopStyle, i = J.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = Nn(Z), tt.m = Math.round(a.top + tt.sc()) || 0, et.m = Math.round(a.left + et.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Z.setAttribute("style", ""), Z.removeAttribute("style")), _t = setInterval(Zn, 250), J.delayedCall(.5, function() {
				return Bt = 0;
			}), Bn(X, "touchcancel", Xt), Bn(Z, "touchstart", Xt), zn(Bn, X, "pointerdown,touchstart,mousedown", Jt), zn(Bn, X, "pointerup,touchend,mouseup", Yt), bt = J.utils.checkPrefix("transform"), Sr.push(bt), ut = Vt(), pt = J.delayedCall(.2, gr).pause(), wt = [
				X,
				"visibilitychange",
				function() {
					var e = Y.innerWidth, t = Y.innerHeight;
					X.hidden ? (St = e, Ct = t) : (St !== e || Ct !== t) && er();
				},
				X,
				"DOMContentLoaded",
				gr,
				Y,
				"load",
				gr,
				Y,
				"resize",
				er
			], sn(Bn), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < K.length; o += 3) Hn(Vn, K[o], K[o + 1]), Hn(Vn, K[o], K[o + 2]);
		} else X && X.addEventListener("DOMContentLoaded", function t() {
			e.enable(), X.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (zt = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(_t) || (_t = n) && setInterval(Zn, n), "ignoreMobileResize" in t && (kt = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (sn(Vn) || sn(Bn, t.autoRefreshEvents || "none"), Dt = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = nt(e), r = K.indexOf(n), i = en(n);
		~r && K.splice(r, i ? 6 : 2), t && (i ? He.unshift(Y, t, Z, t, dt, t) : He.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (cn(e) ? nt(e) : e).getBoundingClientRect(), i = r[n ? yn : bn] * t || 0;
		return n ? r.right - i > 0 && r.left + i < Y.innerWidth : r.bottom - i > 0 && r.top + i < Y.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		cn(e) && (e = nt(e));
		var r = e.getBoundingClientRect(), i = r[n ? yn : bn], a = t == null ? i / 2 : t in Gn ? Gn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / Y.innerWidth : (r.top + a) / Y.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = tr.killAll || [];
			tr = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? mt(e).forEach(function(e) {
		if (e && e.style) {
			var t = ar.indexOf(e);
			t >= 0 && ar.splice(t, 5), ar.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), J.core.getCache(e), Nt());
		}
	}) : ar;
}, $.revert = function(e, t) {
	return cr(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? er(!0) : (ut || $.register()) && gr(!0);
}, $.update = function(e) {
	return ++K.cache && br(e === !0 ? 2 : 0);
}, $.clearScrollMemory = lr, $.maxScroll = function(e, t) {
	return on(e, t ? et : tt);
}, $.getScrollFunc = function(e, t) {
	return it(nt(e), t ? et : tt);
}, $.getById = function(e) {
	return Yn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!Ut;
}, $.snapDirectional = Ln, $.addEventListener = function(e, t) {
	var n = tr[e] || (tr[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = tr[e], r = n && n.indexOf(t);
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
	for (s in t) r[s] = s.substr(0, 2) === "on" && ln(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return ln(a) && (a = a(), Bn($, "refresh", function() {
		return a = t.batchMax();
	})), mt(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var Ir = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Lr = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (q.isTouch ? " pinch-zoom" : "") : "none", t === dt && e(Z, n);
}, Rr = {
	auto: 1,
	scroll: 1
}, zr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || J.core.getCache(i), o = Vt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Z && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Rr[(s = An(i)).overflowY] || Rr[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !en(i) && (Rr[(s = An(i)).overflowY] || Rr[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, Br = function(e, t, n, r) {
	return q.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && zr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && Bn(X, q.eventTypes[0], Ur, !1, !0);
		},
		onDisable: function() {
			return Vn(X, q.eventTypes[0], Ur, !0);
		}
	});
}, Vr = /(input|label|select|textarea)/i, Hr, Ur = function(e) {
	var t = Vr.test(e.target.tagName);
	(t || Hr) && (e._gsapAllow = !0, Hr = t);
}, Wr = function(e) {
	dn(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = nt(e.target) || dt, l = J.core.globals().ScrollSmoother, u = l && l.get(), d = Mt && (e.content && nt(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = it(c, tt), p = it(c, et), m = 1, h = (q.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth, g = 0, _ = ln(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = Br(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = Xt, C = Xt, w = function() {
		s = on(c, tt), C = ht(+!!Mt, s), n && (S = ht(0, on(c, et))), v = dr;
	}, T = function() {
		d._gsap.y = Zt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = Zt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = Zt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = K.cache, br();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, ee, k, A = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && J.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return Mt && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = Zt((Y.visualViewport && Y.visualViewport.scale || 1) / h), D.pause(), e !== m && Lr(c, m > 1.01 || !n && "x"), O = p(), ee = f(), w(), v = dr;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) k.restart(!0);
		else {
			K.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Ir(p, i, o, on(c, et)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Ir(f, i, o, on(c, tt)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (Mt && D.vars.scrollY >= s || i >= s - 1) && J.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), Vt() - g > 1e3 && (v = 0, g = Vt());
	}, e.onChange = function(e, t, r, i, a) {
		if (dr !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? ee + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (ee += c - s), f(c);
		}
		(r || t) && br();
	}, e.onEnable = function() {
		Lr(c, !n && "x"), $.addEventListener("refresh", A), Bn(Y, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		Lr(c, !0), Vn(Y, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new q(e), o.iOS = Mt, Mt && !f() && f(1), Mt && J.ticker.add(Xt), k = o._dc, D = J.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: Nr(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: br,
		onComplete: k.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (ln(e)) return Q.sort(e);
	var t = Y.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Y.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new q(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Ot;
	if (e === !0 && Ot) return Ot.enable();
	if (e === !1) {
		Ot && Ot.kill(), Ot = e;
		return;
	}
	var t = e instanceof q ? e : Wr(e);
	return Ot && Ot.target === t.target && Ot.kill(), en(t.target) && (Ot = t), t;
}, $.core = {
	_getVelocityProp: at,
	_inputObserver: Br,
	_scrollers: K,
	_proxies: He,
	bridge: {
		ss: function() {
			Ut || ir("scrollStart"), Ut = Vt();
		},
		ref: function() {
			return vt;
		}
	}
}, $t() && J.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var Gr = "h1, h2, h3, h4, h5, h6, p, .u-text-eyebrow, a.button-outlined, a.text-link, button.button-outlined, .editionen_button_wrap a, .quote-block, .news_event .intro_date_infos > .u-p-small, .news_highlight_section .intro_date_infos > .u-p-small", Kr = ".w-richtext, .rich-text", qr = [
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
].join(", "), Jr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", Yr = "data-reveal-pending", Xr = "data-reveal-ready", Zr = {
	y: 20,
	opacity: 0
}, Qr = {
	y: 0,
	opacity: 1,
	duration: 1,
	ease: "atelier-fade-up"
}, $r = !1;
function ei(e) {
	var t;
	return e.closest(qr) || e.closest("[hidden]") || /^\/news\/?$/i.test(C()) && e.closest(".news_event, .news_highlight_section") || /^\/kontakt\/?$/i.test(C()) && e.closest(".contact_section") && !e.matches(".contact_txt > p:last-child") || e.matches("p") && e.closest(".intro_date_infos > .u-p-small") || e.closest(".quote-block") && !e.matches(".quote-block") || e.matches(".atelier_hero_section .atelier_slide_heading, .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_heading") || e.matches(".bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_sub") || e.matches("[data-masked-line-reveal], [data-masked-reveal-label]") || e.matches(".work_about_heading, .editionen_title, .accordion_heading") || e.matches(".atelier_about_section.u-theme-dark5 .atelier_about_h2, .atelier_about_section.u-theme-dark5 .atelier_story_p") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function ti(e) {
	if (e.closest(Jr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function ni(e) {
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
function ri(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.targets.forEach((t, n) => {
		t.style.opacity = e.played ? "1" : e.originals[n].opacity, t.style.transform = e.originals[n].transform;
	}), e.trigger = void 0, e.timeline = void 0;
}
function ii(e) {
	return e.signature = ni(e.element), e.targets.forEach((e) => {
		e.removeAttribute(Yr), e.setAttribute(Xr, "");
	}), e.targets;
}
function ai(e) {
	let t = ii(e);
	if (!t.length || e.played) return;
	let n = S.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0, e.targets.forEach((t, n) => {
				t.style.transform = e.originals[n].transform;
			});
		}
	});
	n.fromTo(t, Zr, Qr), e.timeline = n, e.trigger = $.create({
		trigger: e.element,
		start: e.targets.some((e) => e.matches("p")) ? "top 75%" : "top 90%",
		end: "bottom 0%",
		invalidateOnRefresh: !1,
		animation: n
	});
}
function oi(e, t) {
	e.forEach((e, n) => {
		let r = ii(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, Zr, Qr, .6 + n * .12 + i);
	}), t.call(() => {
		e.forEach((e) => e.targets.forEach((t, n) => {
			t.style.transform = e.originals[n].transform;
		}));
	});
}
function si() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function ci(e = document) {
	var t;
	if ($r || f()) return;
	$r = !0, S.registerPlugin($, Ee), Ee.create("atelier-fade-up", ".33,1,.68,1");
	let n = [], r = /* @__PURE__ */ new WeakSet(), i, a, o = 0, s = 0, l = !1, u = !1, d = () => {
		let t = /* @__PURE__ */ new Map();
		c(Gr, e).filter(ei).forEach((e) => {
			var n;
			let i = e.matches("p") ? e.closest(Kr) : null, a = i == null ? e : i;
			r.has(a) || t.set(a, [...(n = t.get(a)) == null ? [] : n, e]);
		}), /^\/news\/?$/i.test(C()) && c(".news_event", e).forEach((e) => {
			var n;
			if (r.has(e)) return;
			let i = e.querySelector(".intro_content_about"), a = e.querySelector(".intro_date"), o = [...Array.from((n = i == null ? void 0 : i.children) == null ? [] : n).filter((e) => e instanceof HTMLElement), ...a ? [a] : []];
			i && a && o.length && t.set(e, o);
		}), t.forEach((e, t) => {
			r.add(t);
			let i = {
				element: t,
				targets: e,
				hero: !l && ti(t),
				played: !1,
				signature: "",
				originals: e.map((e) => ({
					opacity: e.style.opacity,
					transform: e.style.transform
				}))
			};
			n.push(i), i.targets.forEach((e) => e.setAttribute(Yr, "")), l && (ai(i), a == null || a.observe(i.element));
		}), l && t.size && $.refresh();
	};
	d();
	let p = new MutationObserver(() => {
		s || (s = requestAnimationFrame(() => {
			s = 0, d();
		}));
	});
	p.observe(document.documentElement, {
		childList: !0,
		subtree: !0
	});
	let m = () => {
		l && (i && i.progress() > 0 && (u = !0, n.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), n.forEach(ri), i = S.timeline({ paused: !0 }), oi(n.filter((e) => e.hero && e.element.isConnected), i), n.filter((e) => !e.hero && e.element.isConnected).forEach(ai), !u && i.duration() > 0 && (i.call(() => {
			u = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, h = () => {
		o || (o = window.requestAnimationFrame(() => {
			o = 0, n.some((e) => e.element.isConnected && ni(e.element) !== e.signature) && m();
		}));
	};
	Promise.all([si(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		d(), l = !0, m(), a = new ResizeObserver(h), n.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", h, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", m);
	}), window.addEventListener("pagehide", () => {
		var e;
		p.disconnect(), window.cancelAnimationFrame(s), window.cancelAnimationFrame(o), a == null || a.disconnect(), i == null || i.kill(), n.forEach(ri), window.removeEventListener("resize", h), (e = document.fonts) == null || e.removeEventListener("loadingdone", m), n.forEach((e) => e.targets.forEach((e) => e.removeAttribute(Yr)));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var li = "[data-lightbox-src]", ui = "js-lightbox", di = `.${ui}`, fi = `${li}, ${di}`, pi = "[data-site-lightbox]", mi = "[data-lightbox-close]", hi = "[data-lightbox-prev]", gi = "[data-lightbox-next]", _i = "[data-lightbox-auto-icon]", vi = "site-lightbox-trigger", yi = "site-lightbox-trigger__image", bi = "site-lightbox-trigger__icon", xi = "w-dyn-bind-empty", Si = "/plugins/Basic/assets/placeholder.", Ci = {
	"Stuhl, ab 2015": "Chair, from 2015",
	"Stuhl, Detail – Holz und Baustahl": "Chair, detail – wood and structural steel",
	Beistelltische: "Side tables",
	"Beistelltisch, Rosa": "Side table, pink",
	"Beistelltisch, Gelb": "Side table, yellow",
	"Beistelltisch, Rot": "Side table, red",
	"Beistelltisch, Grün": "Side table, green",
	"Große Lampe": "Large lamp",
	"Große Lampe, Lampenfuß 2": "Large lamp, lamp base 2",
	"Große Lampe, Lampenfuß 3": "Large lamp, lamp base 3",
	"Garderobe, ab 2023": "Coat rack, from 2023"
}, wi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ti = !1, Ei = null, Di = null, Oi = [], ki = 0, Ai = !1, ji = null;
function Mi(e) {
	let t = a(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = a(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return Ni(e);
	let n = l("img", e);
	return n ? Ni(n) : "";
}
function Ni(e) {
	let t = a(e, "src"), n = a(e, "srcset");
	return e.classList.contains(xi) || t.includes(Si) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function Pi(e) {
	var t, n;
	let r = a(e, "data-lightbox-alt");
	if (r) return r;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let i = l("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Fi(e) {
	let t = Mi(e).trim();
	if (!t) return null;
	let n = a(e, "data-lightbox-caption"), r = Pi(e);
	if (/^\/en\/editionen\/?$/i.test(window.location.pathname)) {
		let e = Ci[n.trim()];
		e && (n = e, r = e);
	}
	if (/^\/biografie\/?$/i.test(C())) {
		var i;
		let t = (i = e.closest(".bio_photo")) == null ? void 0 : i.querySelector("[data-bio-caption]");
		if (t) {
			var o;
			n = ((o = t.textContent) == null ? "" : o).replace(/^[\s\u200B-\u200D]+|[\s\u200B-\u200D]+$/g, "");
		}
	}
	return {
		src: t,
		caption: n,
		credit: a(e, "data-lightbox-credit"),
		alt: r,
		group: a(e, "data-lightbox-group"),
		trigger: e
	};
}
function Ii(e) {
	let t = Fi(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = c(fi).filter((e) => a(e, "data-lightbox-group") === t.group).map(Fi).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function Li() {
	let e = document.createElement("span");
	return e.className = bi, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = wi, e;
}
function Ri(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function zi(e) {
	if (!Ri(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Ei == null ? void 0 : Ei.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Bi(e) {
	if (e.closest(`.${vi}`) || !Mi(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${vi} ${ui}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, a(e, n)), e.removeAttribute(n));
	e.classList.remove(ui), e.classList.add(yi), e.before(t), t.append(e, Li()), zi(t);
}
function Vi(e) {
	if (e instanceof HTMLImageElement) {
		Bi(e);
		return;
	}
	Mi(e).trim() && (e.classList.add(vi), zi(e), l(_i, e) || e.append(Li()));
}
function Hi() {
	c(di).forEach(Vi);
}
function Ui(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function Wi() {
	var e, t, n, r, i, a;
	if (Di) return Gi(Di), Di;
	let o = l(pi), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = Ei == null ? void 0 : Ei.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, u, d;
		s.innerHTML = "";
		let e = Ui((c = Ei == null ? void 0 : Ei.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = Ui((u = Ei == null ? void 0 : Ei.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = Ui((d = Ei == null ? void 0 : Ei.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0;
		let o = document.createElement("span");
		o.className = "site-lightbox__credit", o.setAttribute("data-lightbox-credit-output", ""), o.hidden = !0, r.append(i, a, o), s.append(e, t, r, n), document.body.append(s);
	}
	let f = l("[data-lightbox-credit-output]", s);
	if (!f) {
		var p;
		f = document.createElement("span"), f.className = "site-lightbox__credit", f.setAttribute("data-lightbox-credit-output", ""), f.hidden = !0, ((p = l(".site-lightbox__figure", s)) == null ? s : p).append(f);
	}
	let m = {
		root: s,
		image: (t = l("[data-lightbox-image]", s)) == null ? document.createElement("img") : t,
		caption: (n = l("[data-lightbox-caption-output]", s)) == null ? document.createElement("figcaption") : n,
		credit: f,
		closeButton: (r = l(mi, s)) == null ? document.createElement("button") : r,
		previousButton: (i = l(hi, s)) == null ? document.createElement("button") : i,
		nextButton: (a = l(gi, s)) == null ? document.createElement("button") : a
	};
	return Di = m, Gi(m), !o && !document.body.contains(s) && document.body.append(s), m;
}
function Gi(e) {
	var t, n, r, i;
	let a = (t = Ei == null ? void 0 : Ei.t("close", "Close")) == null ? "Close" : t, o = (n = Ei == null ? void 0 : Ei.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Ei == null ? void 0 : Ei.t("next", "Next")) == null ? "Next" : r, c = (i = Ei == null ? void 0 : Ei.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function Ki() {
	let e = Wi(), t = Oi[ki];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = Oi.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(ki), e.root.dataset.lightboxCount = String(Oi.length);
}
function qi(e) {
	let t = Wi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function Ji(e) {
	Oi.length < 2 || (ki = (e + Oi.length) % Oi.length, Ki());
}
function Yi() {
	Ji(ki + 1);
}
function Xi() {
	Ji(ki - 1);
}
function Zi(e) {
	var n;
	let r = Ii(e);
	if (!r) return;
	let i = Ai;
	Oi = r.items, ki = r.index, ji = e, Ai = !0, Ki(), qi(!0), i || h();
	let a = Wi();
	g(a.closeButton || a.root);
	let o = Oi[ki];
	t("lightbox_opened", {
		item_count: Oi.length,
		initial_index: ki,
		is_grouped: !!(o != null && o.group)
	}), p(a.root, "site:lightbox-open", {
		item: o,
		index: ki,
		count: Oi.length,
		group: (n = o == null ? void 0 : o.group) == null ? "" : n,
		trigger: e
	});
}
function Qi() {
	var e;
	if (!Ai || !Di) return;
	let t = Di, r = ji, a = (e = Oi[ki]) == null ? null : e;
	qi(!1), i(), Ai = !1, Oi = [], ki = 0, ji = null, t.image.removeAttribute("src"), t.caption.textContent = "", p(t.root, "site:lightbox-close", { item: a }), n(r);
}
function $i(e) {
	if (!(!Ai || !Di)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), Qi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), Yi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), Xi();
			return;
		}
		x(Di.root, e);
	}
}
function ea(e) {
	!Ai || !Di || e.target === Di.root && Qi();
}
function ta(e) {
	return Ei = e.i18n, Hi(), Ti || (v(document, "click", fi, (e, t) => {
		e.preventDefault(), Zi(t);
	}), v(document, "keydown", di, (e, t) => {
		Ri(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Zi(t));
	}), v(document, "click", mi, (e) => {
		e.preventDefault(), Qi();
	}), v(document, "click", hi, (e) => {
		e.preventDefault(), Xi();
	}), v(document, "click", gi, (e) => {
		e.preventDefault(), Yi();
	}), document.addEventListener("click", ea), document.addEventListener("keydown", $i, !0), Ti = !0), {
		openLightbox: Zi,
		closeLightbox: Qi
	};
}
//#endregion
//#region src/modules/modal-image.ts
function na(e, t, n) {
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
var ra = /* @__PURE__ */ new Map(), ia = /* @__PURE__ */ new Map(), aa = /* @__PURE__ */ new Set();
function oa(e) {
	try {
		return new URL(e, document.baseURI).href;
	} catch (t) {
		return e;
	}
}
function sa(e, t) {
	return `${e}\n${t}`;
}
function ca(e) {
	return new Promise((t) => {
		let n = new Image();
		n.loading = "eager", n.onload = () => {
			typeof n.decode == "function" ? n.decode().then(() => {
				aa.add(oa(e)), t(!0);
			}, () => t(!1)) : (aa.add(oa(e)), t(!0));
		}, n.onerror = () => t(!1), n.src = e;
	});
}
function la(e, t) {
	let n = sa(e, t), r = ra.get(n);
	if (r) return r;
	let i = (async () => {
		let r = await ca(e) ? e : t;
		return r !== e && await ca(t), ia.set(n, r), r;
	})();
	return ra.set(n, i), i;
}
function ua(e, t) {
	var n;
	return (n = ia.get(sa(e, t))) == null ? e : n;
}
var da = /* @__PURE__ */ new WeakMap();
function fa(e, t, n) {
	var r, i;
	let a = ((r = da.get(e)) == null ? 0 : r) + 1;
	da.set(e, a), e.loading = "eager", e.decoding = "async";
	let o = oa((i = t == null ? e.currentSrc : t) == null ? e.src : i), s = e.currentSrc === o && e.complete && e.naturalWidth > 0 && !e.classList.contains("is-image-pending") || aa.has(o);
	s ? e.classList.contains("is-image-pending") && e.classList.remove("is-image-pending") : e.classList.add("is-image-pending");
	let c = () => {
		(typeof e.decode == "function" ? e.decode().catch(() => void 0) : Promise.resolve()).then(() => {
			da.get(e) === a && e.naturalWidth > 0 && (aa.add(e.currentSrc || e.src), e.classList.remove("is-image-pending"));
		});
	};
	e.onload = c, e.onerror = () => {
		if (da.get(e) !== a || !n) return;
		e.classList.add("is-image-pending");
		let t = n;
		n = void 0, e.src = t;
	}, t !== void 0 && e.src !== o && (e.src = t), !s && e.complete && e.naturalWidth > 0 && e.currentSrc === o && c();
}
function pa(e) {
	var t;
	da.set(e, ((t = da.get(e)) == null ? 0 : t) + 1), e.onload = null, e.onerror = null, e.classList.remove("is-image-pending"), e.removeAttribute("src");
}
function ma(e, t, n, r) {
	let i = ua(na(t, n, r), t);
	fa(e, i, i === t ? void 0 : t);
}
var ha = /* @__PURE__ */ new Set([
	"6a7db30517820876cd23f469",
	"6a7db3187795b95db7804762",
	"6a7db33f5031a1007e109876",
	"6a7db3495031a1007e10a89e",
	"6a7db34bd247654adf43324d"
]);
function ga(e, t) {
	var n;
	let r = (n = e.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	return r && ha.has(r) ? new URL("../assets/modal-work-thumbnails/" + r + ".webp", import.meta.url).href : na(e, t, 500);
}
//#endregion
//#region src/modules/modal.ts
var _a = "[data-modal]", va = "[data-modal-content]", ya = "[data-modal-open]", ba = "[data-modal-close]", xa = "a[href^=\"#modal:\"]", Sa = "#modal:", Ca = 460, wa = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Ta = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ea = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Da = !1, Oa = !0, ka = null, Aa = null, ja = "", Ma = null, Na = null, Pa = /* @__PURE__ */ new Map();
function Fa(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Sa) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Ia() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(ba),
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
	return t.closeButton.innerHTML = wa, t.lightboxIcon.innerHTML = Ta, Ra(t), t;
}
function La() {
	return (!Aa || !document.body.contains(Aa.root)) && (Aa = Ia()), Ra(Aa), Aa;
}
function Ra(e) {
	var t, n;
	let r = (t = ka == null ? void 0 : ka.t("close", "Close")) == null ? "Close" : t, i = (n = ka == null ? void 0 : ka.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function za(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Ba(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p;
	let m = e.querySelector("[data-modal-work]");
	if (!m) return null;
	let h = za(m, "[data-works-thumbnail]"), g = (t = (n = (r = m.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = m.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, _ = (a = (o = (s = m.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = m.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, v = (l = (u = (d = m.getAttribute("data-works-href")) == null ? m.getAttribute("data-works-url") : d) == null ? (f = m.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, y = T(h);
	return !g && !y && !v ? null : {
		title: g,
		year: _,
		thumbnail: y,
		thumbnailSrcset: (p = h == null ? void 0 : h.getAttribute("srcset")) == null ? void 0 : p,
		thumbnailAlt: (h == null ? void 0 : h.alt) || g,
		href: v
	};
}
function Va(e) {
	var t, n, r, i;
	let a = c("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = za(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: T(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let o = za(e, "[data-modal-image]"), s = T(o);
	return s ? [{
		src: s,
		srcset: (t = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = o == null ? void 0 : o.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function Ha(e) {
	var t, n, r, i, o, s, c, l, u, d;
	let f = a(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, h = Va(e), g = h[0], _ = e.querySelector("[data-modal-body]");
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
		work: Ba(e),
		gallery: h
	};
}
function Ua(e) {
	var t, n, r, i, o, s, c, l, u, d, f, p, m;
	let h = a(e, "data-modal");
	if (!h) return null;
	let g = e.querySelector(".fwm-modal__image"), _ = T(g), v = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, y = (r = e.closest(".w-dyn-item")) == null ? (i = e.closest(".w-embed")) == null ? void 0 : i.parentElement : r, b = y ? Array.from(y.querySelectorAll("[data-modal-rich-text]")).find((t) => t.closest(".w-dyn-item") === e.closest(".w-dyn-item")) : void 0, x = (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o;
	return b && (b.hidden = !0), {
		id: h,
		address: (c = (l = e.querySelector(".fwm-modal__address")) == null || (l = l.textContent) == null ? void 0 : l.trim()) == null ? "" : c,
		layout: "default",
		headline: "",
		image: _,
		imageSrcset: (u = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : u,
		imageAlt: (d = g == null ? void 0 : g.alt) == null ? "" : d,
		caption: v,
		html: x + ((f = b == null ? void 0 : b.innerHTML) == null ? "" : f),
		work: null,
		gallery: _ ? [{
			src: _,
			srcset: (p = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : p,
			alt: (m = g == null ? void 0 : g.alt) == null ? "" : m,
			caption: v
		}] : []
	};
}
function Wa() {
	c(va).forEach((e) => {
		let t = Ha(e);
		t && Pa.set(t.id, t);
	}), c(_a).forEach((e) => {
		let t = Ua(e);
		t && Pa.set(t.id, t), e.remove();
	});
}
function Ga(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = c(va).find((e) => a(e, "data-modal-content") === n), i = r ? Ha(r) : null;
	return i && Pa.set(n, i), (t = i == null ? Pa.get(n) : i) == null ? null : t;
}
function Ka(e) {
	try {
		let t = new URL(e, document.baseURI), n = t.pathname.match(/^\/(?:en\/)?werke\/([^/]+)\/?$/);
		if (!n) return e;
		let r = new URL(w("/werk-ueberblick", t.pathname), document.baseURI);
		return r.searchParams.set("work", decodeURIComponent(n[1])), r.hash = "werke", `${r.pathname}${r.search}${r.hash}`;
	} catch (t) {
		return e;
	}
}
function qa(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", Ka(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.alt = e.thumbnailAlt;
		let n = ua(ga(e.thumbnail, e.thumbnailSrcset), e.thumbnail);
		fa(t, n, n === e.thumbnail ? void 0 : e.thumbnail), a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = Ea, o.append(e);
	}
	return i.append(o), i;
}
function Ja(e) {
	let t = document.createElement("a"), n = document.createElement("img"), r = document.createElement("span"), i = document.createElement("span");
	return t.className = "fwm-modal__image-link", t.href = e.src, t.setAttribute("data-lightbox-src", e.src), t.setAttribute("data-lightbox-caption", e.caption), t.setAttribute("data-lightbox-alt", e.alt), t.classList.toggle("has-caption", e.caption.length > 0), n.className = "fwm-modal__image", n.alt = e.alt, ma(n, e.src, e.srcset, 500), r.className = "fwm-modal__lightbox-icon", r.setAttribute("aria-hidden", "true"), r.innerHTML = Ta, i.className = "fwm-modal__caption", i.textContent = e.caption, i.hidden = e.caption.length === 0, t.append(n, r, i), t;
}
function Ya(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function Xa(e, t) {
	e.innerHTML = t, e.querySelectorAll("img[src]").forEach((e) => fa(e)), e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function Za(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? ma(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : pa(e.image), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, Xa(e.text, t.html), Ya(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t) => e.gallery.append(Ja(t)));
}
function Qa(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), pa(e.image), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, Xa(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(qa(t.work)), o.forEach((t) => {
		e.gallery.append(Ja(t));
	});
}
function $a(e) {
	let t = La();
	return e.layout === "context" ? Qa(t, e) : Za(t, e), t;
}
function eo(e) {
	let t = [], n = (e, n) => {
		t.push(la(na(e.src, e.srcset, n), e.src));
	};
	if (e.layout === "context") {
		var r, i;
		(r = e.work) != null && r.thumbnail && t.push(la(ga(e.work.thumbnail, e.work.thumbnailSrcset), e.work.thumbnail)), ((i = e.gallery) != null && i.length ? e.gallery : e.image ? [{
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
			t.push(la(na(e.image, (o = e.imageSrcset) == null ? (s = e.gallery) == null || (s = s[0]) == null ? void 0 : s.srcset : o, 1080), e.image));
		}
		(a = e.gallery) == null || a.slice(1).filter((e) => e.src).forEach((e) => n(e, 500));
	}
	return t;
}
function to(e) {
	let t = m(e.panel)[0];
	g(t == null ? e.panel : t);
}
function no(e) {
	Na !== null && (window.clearTimeout(Na), Na = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function ro(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Na = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Na = null;
	}, f() ? 0 : Ca), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function io(e, n) {
	var r, i, a, o, s, c, l, d, f, m, g, _, v, y;
	let b = {
		id: e.id.trim(),
		address: (r = e.address) == null ? "" : r,
		layout: (i = e.layout) == null ? "default" : i,
		headline: (a = e.headline) == null ? "" : a,
		image: (o = e.image) == null ? "" : o,
		imageSrcset: e.imageSrcset,
		imageAlt: (s = e.imageAlt) == null ? "" : s,
		caption: (c = e.caption) == null ? "" : c,
		html: (l = e.html) == null ? "" : l,
		rights: (d = e.rights) == null ? "" : d,
		work: (f = e.work) == null ? null : f,
		gallery: (m = e.gallery) != null && m.length ? e.gallery : e.image ? [{
			src: e.image,
			srcset: e.imageSrcset,
			alt: (g = e.imageAlt) == null ? "" : g,
			caption: (_ = e.caption) == null ? "" : _
		}] : []
	};
	if (!b.id || n && ja === b.id && n === Ma) return;
	ja && oo(), Pa.set(b.id, b);
	let x = n == null ? u() : n, S = La();
	Na !== null && (window.clearTimeout(Na), Na = null, S.root.hidden = !0, S.root.classList.remove("is-active", "is-visible")), $a(b), Ma = x, ja = b.id, t("content_modal_opened", {
		content_id: b.id,
		layout: b.layout,
		gallery_count: (v = (y = b.gallery) == null ? void 0 : y.length) == null ? 0 : v,
		has_related_work: !!b.work
	}), no(S), h(), to(S), p(S.root, "site:modal-open", {
		id: ja,
		modal: S.root,
		content: b,
		trigger: n == null ? null : n
	});
}
function ao(e, t) {
	let n = Ga(e);
	n && io(n, t);
}
function oo() {
	if (!ja || !Aa) return;
	let e = ja, t = Ma;
	ro(Aa), i(), ja = "", Ma = null, p(Aa.root, "site:modal-close", {
		id: e,
		modal: Aa.root
	}), n(t);
}
function so(e) {
	if (!(!ja || !Aa) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), oo();
			return;
		}
		x(Aa.panel, e);
	}
}
function co(e) {
	if (!Oa || !ja || !Aa) return;
	let t = e.target;
	!o(t) || t !== Aa.root || oo();
}
function lo(e) {
	var t;
	if (Oa = (t = e.closeOnBackdrop) == null || t, ka = e.i18n, Wa(), La(), !Da) {
		let e = (e) => {
			let t = Ga(e.matches(ya) ? r(e, "data-modal-open") : Fa(e));
			t && eo(t);
		};
		for (let t of [
			"pointerover",
			"pointerdown",
			"focusin"
		]) v(document, t, `${ya}, ${xa}`, (t, n) => {
			e(n);
		});
		v(document, "click", `${ya}, ${xa}`, (e, t) => {
			e.preventDefault(), ao(t.matches(ya) ? r(t, "data-modal-open") : Fa(t), t);
		}), v(document, "click", ba, (e, t) => {
			Aa != null && Aa.root.contains(t) && (e.preventDefault(), oo());
		}), document.addEventListener("click", co), document.addEventListener("keydown", so), Da = !0;
	}
	return {
		openModal: ao,
		openContentModal: io,
		closeModal: oo
	};
}
//#endregion
//#region src/modules/site-menu.ts
var uo = "[data-site-menu]", fo = "[data-site-menu-panel]", po = "[data-site-menu-toggle]", mo = "[data-site-menu-toggle-label]", ho = "[data-site-menu-toggle-label-text]", go = "[data-site-menu-toggle-label-ghost]", _o = "data-site-menu-toggle-label-text", vo = "data-site-menu-toggle-label-ghost", yo = "[data-site-menu-link]", bo = "[data-site-menu-indicator]", xo = "is-active", So = "is-open", Co = "is-ready", wo = "data-site-menu-open-label", To = "data-site-menu-closed-label", Eo = "data-site-menu-current-key", Do = "data-site-menu-label", Oo = "data-site-menu-key", ko = "data-site-menu-original-tabindex", Ao = "CLOSE", jo = "MENU", Mo = .42, No = ".site-menu__brand, [data-site-menu-item], .site-menu__divider", Po = "site-menu__divider", Fo = ".site-menu__link--small, .site-menu__footer-link", Io = "[data-site-menu-toggle], .site-menu__language, .site-menu__languages", Lo = "site-menu__line", Ro = "site-menu__line-in", zo = {
	open: .513,
	close: .378,
	transition: .54
};
S.registerPlugin(Ee);
var Bo = Ee.create("site-menu-panel", "0.7,0,0.08,1"), Vo = [], Ho = !1;
function Uo(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Wo(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = a(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Uo(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Go(e, t) {
	return t ? a(e, Oo) === t : !1;
}
function Ko(e, t) {
	var n, r;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Go(e, a(t, Eo) || ((n = document.documentElement.getAttribute(Eo)) == null ? void 0 : n.trim()) || ((r = document.body.getAttribute(Eo)) == null ? void 0 : r.trim()) || "")) return !0;
	let i = Wo(e);
	return i ? i === Uo(window.location.pathname) : !1;
}
function qo(e) {
	var t, n;
	return a(e, Do) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function Jo(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(xo) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Ko(t, e.root)) : t;
	return n ? qo(n) : "";
}
function Yo(e) {
	var t, n;
	let r = (t = e.toggleLabel) == null ? e.toggle : t, i = r.style.width, o = !0, s = 0, c = document.createElement("span");
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
	].join(";"), r.append(c);
	let l = () => {
		if (!o) return;
		let t = [
			Jo(e),
			a(e.root, To) || jo,
			a(e.root, wo) || Ao
		];
		c.textContent = "";
		let n = t.reduce((e, t) => (c.textContent = t, Math.max(e, c.getBoundingClientRect().width)), 0);
		n > 0 && (r.style.width = `${Math.ceil(n)}px`);
	}, u = () => {
		s && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
			s = 0, l();
		});
	};
	return l(), window.addEventListener("resize", u), (n = document.fonts) == null || n.ready.then(l), () => {
		o = !1, window.removeEventListener("resize", u), s && cancelAnimationFrame(s), c.remove(), r.style.width = i;
	};
}
function Xo(e) {
	var t, n;
	let r = l(ho, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(_o, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Zo(e) {
	c(go, e).forEach((e) => {
		S.killTweensOf(e), e.remove();
	});
}
function Qo(e, t = !0) {
	var n, r;
	let i = a(e.root, wo) || Ao, o = a(e.root, To) || jo, s = Jo(e), c = e.isOpen ? i : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, u = Xo(l), d = (r = u.textContent) == null ? "" : r, p = e.labelTransition;
	if (p && t && !f()) {
		if (c === p.from) {
			p.timeline.reverse();
			return;
		}
		if (c === p.to) {
			p.timeline.play();
			return;
		}
	}
	if (d === c && !p) return;
	let m = p && p.timeline.progress() < .5 ? p.from : d;
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, S.killTweensOf(u), Zo(l), S.set(u, { clearProps: "transform,opacity" }), u.removeAttribute("aria-hidden"), f() || !t || !m || m === c) {
		u.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(vo, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), u.textContent = c;
	let g = S.timeline({
		defaults: {
			duration: Mo,
			ease: "power2.inOut"
		},
		onUpdate: () => {
			let e = g.reversed();
			u.setAttribute("aria-hidden", String(e)), h.setAttribute("aria-hidden", String(!e));
		}
	});
	g.fromTo(h, { yPercent: 0 }, { yPercent: -100 }, 0), g.fromTo(u, { yPercent: 100 }, { yPercent: 0 }, 0), e.labelTransition = {
		timeline: g,
		from: m,
		to: c
	};
}
function $o(e) {
	let t = [], n = 0, r = 0, i = 0;
	return c(No, e.panel).forEach((e) => {
		if (e.closest(Io)) return;
		if (e.classList.contains(Po)) {
			e.style.setProperty("--i", String(i)), e.style.setProperty("--g", "0");
			return;
		}
		if (e.querySelector(`:scope > .${Lo}`)) return;
		let a = Array.from(e.childNodes).filter((e) => !(e instanceof HTMLElement && e.hasAttribute("data-site-menu-indicator")));
		if (!a.some((e) => {
			var t;
			return (t = e.textContent) == null ? void 0 : t.trim();
		})) return;
		let o = document.createElement("span"), s = document.createElement("span");
		o.className = Lo, s.className = Ro, e.insertBefore(o, a[0]), a.forEach((e) => s.appendChild(e)), o.appendChild(s), t.push(o), e.matches(Fo) ? (e.style.setProperty("--g", "1"), e.style.setProperty("--i", String(r++))) : (i = n, e.style.setProperty("--g", "0"), e.style.setProperty("--i", String(n++)));
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
function es(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = a(e, ko);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(ko) && e.hasAttribute("tabindex") && e.setAttribute(ko, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function ts(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(So, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), es(e, t), Qo(e, n);
}
function ns(e, t, n, r) {
	S.killTweensOf(e.panel), S.set(e.panel, { clearProps: "height" });
	let i = e.panel.getBoundingClientRect().height;
	if (!f()) return S.fromTo(e.panel, { height: n }, {
		height: i,
		duration: t ? zo.open : zo.close,
		ease: Bo,
		onComplete: () => {
			S.set(e.panel, { clearProps: "height" }), r == null || r();
		}
	});
}
function rs(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	ts(e, !0), ns(e, !0, t);
}
function is(e, t) {
	if (!e.isOpen) return;
	let n = e.panel.getBoundingClientRect().height;
	ts(e, !1);
	let r = ns(e, !1, n, t);
	return r || t == null || t(), r;
}
function as(e, t) {
	let n = Vo.find((t) => t.root === e && t.isOpen);
	if (!n) return !1;
	let r = !1, i = () => {
		r || (r = !0, t());
	}, a = is(n, i);
	return a == null || a.eventCallback("onUpdate", () => {
		a.progress() >= .42 && i();
	}), !0;
}
function os(e) {
	e.isOpen ? is(e) : rs(e);
}
function ss(e) {
	e.links.forEach((t) => {
		let n = Ko(t, e.root), r = l(bo, t);
		t.classList.toggle(xo, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function cs(e) {
	var t;
	let n = l(fo, e), r = l(po, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = l(mo, r)) == null ? l(mo, e) : t,
		links: c(yo, e),
		isOpen: e.classList.contains(So),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Vo.length + 1}`), r.setAttribute("aria-controls", n.id), i.cleanup.push($o(i)), ss(i), ts(i, i.isOpen, !1), i.cleanup.push(Yo(i)), e.classList.add(Co);
	let a = (e) => {
		e.preventDefault(), os(i);
	}, o = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || is(i);
	}, s = (e) => {
		e.key !== "Escape" || !i.isOpen || (is(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(yo) || is(i);
	}, d = () => {
		i.isHovered = !0, Qo(i);
	}, f = () => {
		i.isHovered = !1, Qo(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", o), document.addEventListener("keydown", s), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", o), () => document.removeEventListener("keydown", s), () => e.removeEventListener("click", u)), i;
}
function ls(e = document) {
	if (Ho && e === document) return () => void 0;
	e === document && (Ho = !0);
	let t = c(uo, e).map(cs).filter((e) => !!e);
	return Vo.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Co, So);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = l(ho, r);
			(n = e.labelTransition) == null || n.timeline.kill(), S.killTweensOf(e.panel), S.killTweensOf(r), Zo(r), i && (S.killTweensOf(i), r.textContent = i.textContent), S.set(e.panel, { clearProps: "height" }), S.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), es(e, !0);
		});
	};
}
//#endregion
//#region src/modules/page-transition.ts
var us = {
	navigate: 160,
	revealStart: 0,
	reset: 180,
	watchdog: 6e3
}, ds = [
	".top_bar_section",
	".werk_hero_dots",
	".werk_hero_slide .u-slide-info"
], fs = {
	delay: 225,
	stagger: 125,
	fade: 700,
	menuGap: 80,
	menu: 550
}, ps = "pt", ms = "[data-page-transition-overlay], .page-transition-overlay", hs = "is-page-transition-pending", gs = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), _s = !1, vs = !1, ys = [], bs = /* @__PURE__ */ new Set();
function xs(e) {
	if (e.closest(gs) || e.target && e.target !== "_self") return;
	let t = _(e);
	if (!t || t.hash || bs.has(t.href)) return;
	bs.add(t.href);
	let n = document.createElement("link");
	n.rel = "prefetch", n.href = t.href, document.head.append(n);
}
function Ss(e, t) {
	ys.push(window.setTimeout(e, t));
}
function Cs() {
	ys.forEach((e) => window.clearTimeout(e)), ys = [];
}
function ws() {
	try {
		return !!window.sessionStorage.getItem(ps);
	} catch (e) {
		return !1;
	}
}
function Ts() {
	try {
		window.sessionStorage.removeItem(ps);
	} catch (e) {}
	document.documentElement.classList.remove(hs, "is-page-transition-boot");
}
function Es() {
	var e;
	let t = document.querySelector(ms);
	return t || (t = document.createElement("div"), document.body.append(t)), t.classList.add("curtain", "page-transition-overlay"), t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), (e = t.querySelector(".page-transition-overlay__title")) == null || e.remove(), t;
}
function Ds() {
	return document.querySelector("main, [role=\"main\"]");
}
function Os(e) {
	e && (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), e.addEventListener("blur", () => e.removeAttribute("tabindex"), { once: !0 })), e.focus({ preventScroll: !0 }));
}
function ks(e) {
	Cs(), e.classList.add("is-resetting"), e.classList.remove("is-covering", "is-covered", "is-uncovering"), e.setAttribute("aria-hidden", "true"), document.documentElement.classList.remove("is-page-transition-entering", "is-page-transition-covering"), Ts(), vs = !1, window.requestAnimationFrame(() => e.classList.remove("is-resetting"));
}
function As(e, t) {
	if (vs = !0, f()) {
		Os(t), ks(e);
		return;
	}
	e.setAttribute("aria-hidden", "false"), e.classList.add("is-covered"), document.documentElement.classList.add("is-page-transition-entering"), Ss(() => e.classList.add("is-uncovering"), us.revealStart), Ss(() => {
		Os(t), ks(e);
	}, us.reset);
}
function js(e, t) {
	vs = !0, t.setAttribute("aria-hidden", "false");
	try {
		window.sessionStorage.setItem(ps, "1");
	} catch (e) {}
	document.documentElement.classList.add("is-page-transition-covering"), t.classList.add("is-covering"), Ss(() => {
		window.location.href = e.href;
	}, us.navigate), Ss(() => {
		window.location.href = e.href;
	}, us.watchdog);
}
function Ms() {
	var e;
	let t = C();
	if (!((e = window.__sitePreloader) != null && e.active) || f() || t === "/") return;
	let n = /^\/(?:biografie|editionen|news|werk-ueberblick|kontakt)\/?$/i.test(t), r = /^\/werk-ueberblick\/?$/i.test(t), i = ds.map((e) => n && e === ".top_bar_section" || r ? [] : Array.from(document.querySelectorAll(e))), a = Array.from(document.querySelectorAll("[data-site-menu]"));
	[...i.flat(), ...a].forEach((e) => {
		e.style.opacity = "0";
	}), E(() => {
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
		i.forEach((t, n) => {
			t.forEach((t) => e(t, [{ opacity: 0 }, { opacity: 1 }], fs.delay + n * fs.stagger, fs.fade));
		});
		let t = i.reduce((e, t, n) => t.length ? n : e, -1), n = t < 0 ? 0 : fs.delay + t * fs.stagger + fs.fade + fs.menuGap;
		a.forEach((t) => {
			let r = Math.max(0, window.innerHeight - t.getBoundingClientRect().top) + 8;
			e(t, [{
				opacity: 1,
				transform: `translate3d(0, ${r}px, 0)`
			}, {
				opacity: 1,
				transform: "translate3d(0, 0, 0)"
			}], n, fs.menu);
		});
	});
}
function Ns() {
	if (_s) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Ns, { once: !0 });
		return;
	}
	_s = !0;
	let e = Es(), t = Ds();
	ws() && document.documentElement.classList.contains(hs) && !e.hasAttribute("data-page-transition-managed") ? As(e, t) : Ms();
	let n = (e) => {
		let t = e.target instanceof Element ? e.target.closest("a[href]") : null;
		t && xs(t);
	};
	document.addEventListener("pointerover", n, { passive: !0 }), document.addEventListener("focusin", n), document.addEventListener("click", (e) => {
		!(e.target instanceof Element) || !e.target.closest("[data-site-menu-toggle]") || document.querySelectorAll("[data-site-menu] a[href]").forEach(xs);
	}, !0), document.addEventListener("click", (t) => {
		var n;
		let r = t.target instanceof Element ? t.target.closest("a[href]") : null;
		if (!r || t.defaultPrevented || d(t)) return;
		if (vs) {
			t.preventDefault();
			return;
		}
		if (r.closest(gs) || r.target && r.target !== "_self") return;
		let i = _(r);
		if (!i || i.hash || f() || (n = window.__sitePreloader) != null && n.active) return;
		t.preventDefault();
		let a = r.closest("[data-site-menu]");
		a && (vs = !0, as(a, () => js(i, e))) || js(i, e);
	}, !0), window.addEventListener("pageshow", (t) => {
		t.persisted && ks(e);
	});
}
//#endregion
//#region src/modules/parallax.ts
var Ps = "[data-parallax]", Fs = "data-parallax", Is = "data-parallax-ready", Ls = "fw-parallax-window", Rs = "fw-parallax-window--self-sized", zs = "fw-parallax-inner", Bs = 60, Vs = 160, Hs = ".site-lightbox-trigger", Us = 1, Ws = !1;
function Gs() {
	Ws || (Ws = !0, S.registerPlugin($));
}
function Ks(e) {
	let t = e.getAttribute(Fs);
	if (t === null || t.trim() === "") return Bs;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.sign(n) * Math.min(Math.abs(n), Vs) : Bs;
}
function qs(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Js(e, t) {
	var n;
	let r = (n = e.closest(Hs)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(Ls)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(Ls);
	let a = document.createElement("span");
	if (a.className = zs, a.style.top = `${-t}px`, a.style.bottom = `${-t}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(Ls), null;
		r.classList.add(Rs), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function Ys(e, t) {
	return t < 0 && e.getBoundingClientRect().top + window.scrollY < window.innerHeight;
}
function Xs(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : c("img", e), r = Ys(e, t);
	if (n.length === 0) {
		S.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Zs(e)
		});
		return;
	}
	n.forEach((n) => {
		qs(n).then(() => {
			if (!n.isConnected) return;
			let i = Js(n, r ? 0 : Math.abs(t) / 2 + Us);
			if (i) {
				if (r) {
					S.fromTo(i, { y: 0 }, {
						y: () => Math.min(Math.abs(t), i.offsetHeight * .5),
						ease: "none",
						scrollTrigger: {
							...Zs(e),
							start: "top top"
						}
					}), $.refresh();
					return;
				}
				S.fromTo(i, { y: t / 2 }, {
					y: -t / 2,
					ease: "none",
					scrollTrigger: Zs(e)
				}), $.refresh();
			}
		});
	});
}
function Zs(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function Qs(e = document) {
	let t = c(Ps, e).filter((e) => !e.hasAttribute(Is));
	t.length === 0 || f() || (Gs(), t.forEach((e) => {
		let t = Ks(e);
		t !== 0 && (e.setAttribute(Is, ""), Xs(e, t));
	}));
}
//#endregion
//#region src/modules/more-arrows.ts
var $s = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function ec(e) {
	var t, n;
	if (!/^(?:mehr\s+erfahren|learn\s+more)$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = $s);
}
function tc(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && ec(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(ec);
}
function nc() {
	tc(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && tc(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/outlined-buttons.ts
var rc = ".btn, .button-outlined";
function ic() {
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
		e instanceof HTMLElement && e.matches(rc) && t(e), e.querySelectorAll(rc).forEach(t);
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
var ac = ".werk_hero_slider", oc = ".werk_hero_track";
function sc(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function cc(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function lc(e) {
	let t = e.closest(ac), n = t == null ? void 0 : t.querySelector(oc);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = sc(e, n), i = cc(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function uc(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function dc(e, t) {
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
function fc(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function pc(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function mc(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function hc(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function gc(e, t) {
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
function _c() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return fc(e, t);
				let r = new Image();
				return r.src = e, dc(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = mc(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = pc(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || hc(n) ? "critical" : "warm" : i,
			load: (e) => dc(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && lc(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = pc(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = mc(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => gc(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", gc(r, e))
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
			let t = pc(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => uc(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function vc(e) {
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
async function yc(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await uc(a.shift().load(n.signal), n.signal);
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
var bc = /* @__PURE__ */ new WeakSet(), xc = 5100, Sc = 450, Cc = 375, wc = 975;
function Tc(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function Ec(e) {
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
function Dc(e, t) {
	var n, r;
	if (!Number.isFinite(t)) return;
	let i = Math.max(Number(e.getAttribute("aria-valuenow")) || 0, Math.min(100, Math.max(0, Math.round(t))));
	e.setAttribute("aria-valuenow", String(i)), (n = window.__sitePreloader) == null || (r = n.setSignatureIndex) == null || r.call(n, Math.min(6, Math.floor(i / 100 * 7)));
	let a = String(i).padStart(3, "0");
	e.querySelectorAll(".site-preloader__digit").forEach((e, t) => {
		var n;
		let r = e.firstElementChild, o = r.children[0], s = r.children[1], c = a[t], l = e.hidden;
		if (e.hidden = t < 3 - String(i).length, r.dataset.value !== c) {
			if (S.killTweensOf(r), o.textContent = (n = r.dataset.value) == null ? o.textContent : n, r.dataset.value = c, s.textContent = c, S.set(r, {
				yPercent: 0,
				y: 0
			}), f() || l || e.hidden) {
				o.textContent = c;
				return;
			}
			S.to(r, {
				yPercent: -50,
				y: 0,
				duration: .049,
				ease: "power2.out",
				onComplete: () => {
					o.textContent = c, S.set(r, {
						yPercent: 0,
						y: 0
					});
				}
			});
		}
	});
}
function Oc(e) {
	let t = f(), n = !1, r = !1, i = 0, a = 0, o, s = new Promise((e) => {
		o = e;
	}), c = (t) => {
		if (n) return;
		let r = Math.min(1, (t - a) / xc);
		Dc(e, (.6 * r + .4 * Tc(r)) * 100), r === 1 ? o() : i = window.requestAnimationFrame(c);
	};
	return {
		start: () => {
			r || n || (r = !0, a = performance.now(), t ? (Dc(e, 100), o()) : i = window.requestAnimationFrame(c));
		},
		complete: s,
		stop: () => {
			n = !0, window.cancelAnimationFrame(i);
		}
	};
}
function kc(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function Ac(e) {
	return document.readyState === "complete" || e.aborted ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			window.removeEventListener("load", n), e.removeEventListener("abort", n), t();
		};
		window.addEventListener("load", n, { once: !0 }), e.addEventListener("abort", n, { once: !0 });
	});
}
async function jc(e, t) {
	t.aborted || (document.documentElement.classList.add(O), e.classList.add("is-fading"), await kc(f() ? 0 : Cc, t), !t.aborted && (e.classList.add("is-curtain"), await kc(f() ? 0 : wc, t)));
}
function Mc() {
	var e, t;
	let n = window.__sitePreloader;
	if (!(n != null && n.active) || bc.has(n)) return;
	bc.add(n);
	let r = document.querySelector(D);
	if (!r) {
		n.release();
		return;
	}
	let i = new AbortController(), a = Oc(r);
	(e = n.allowExit) == null || e.call(n), ((t = n.introReady) == null ? Promise.resolve() : t).then(() => {
		n.active && a.start();
	}), n.cleanup.push(() => {
		i.abort(), a.stop();
		let e = r.querySelectorAll(".site-preloader__track");
		e.length && S.killTweensOf(e);
	});
	let o = async () => {
		if (await vc(i.signal), !n.active) return;
		let e = _c(), t = e.filter((e) => e.priority === "critical");
		await Promise.all(t.map(async (e) => {
			await uc(Promise.resolve().then(() => e.load(i.signal)), i.signal);
		})), n.active && (await Ec(i.signal), n.active && (await n.introReady, n.active && (await Promise.all([a.complete, Ac(i.signal)]), n.active && (await kc(f() ? 0 : Math.max(0, ee - (Date.now() - n.startedAt)), i.signal), n.active && (await kc(f() ? 0 : Sc, i.signal), n.active && (await jc(r, i.signal), n.active && (n.release(), yc(e))))))));
	}, s = () => {
		o().catch(n.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Nc = !1, Pc = !1;
function Fc() {
	if (Pc || f()) return;
	Pc = !0;
	let e, t = () => {
		let t = window.lenis;
		if (Nc || !window.__siteLenisManaged || !t) return;
		Nc = !0, S.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		S.ticker.add(n), S.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			S.ticker.remove(n), t.off("scroll", $.update), Nc = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), Nc || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/modules/site-image-reveal.ts
var Ic = "data-site-image-reveal", Lc = "is-site-image-in", Rc = ".news_event img.intro_img", zc = ".bio_photo img.bio_media_img, .bio_photo.bio_video .bio_video_trigger img", Bc = [
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
].join(", "), Vc = !1;
function Hc() {
	if (Vc || f() || !("IntersectionObserver" in window)) return;
	Vc = !0;
	let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), n = 0, r = (n) => {
		let r = e.get(n);
		if (!r || n.classList.contains(Lc) || t.has(n)) return;
		t.add(n);
		let a = () => {
			t.delete(n), n.isConnected && (n.classList.add(Lc), i.unobserve(n));
		};
		r.complete ? r.naturalWidth && r.decode ? r.decode().then(a, a) : a() : (r.addEventListener("load", () => {
			r.decode ? r.decode().then(a, a) : a();
		}, { once: !0 }), r.addEventListener("error", a, { once: !0 }));
	}, i = new IntersectionObserver((e) => {
		e.forEach((e) => {
			e.isIntersecting && r(e.target);
		});
	}, { threshold: 0 }), a = (t, n, r, a = 0) => {
		t.hasAttribute(Ic) || (t.setAttribute(Ic, r), a && t.style.setProperty("--site-image-delay", `${a}ms`), e.set(t, n), i.observe(t));
	}, o = (e) => {
		if (e.closest("[data-site-image-reveal=\"event\"]")) return;
		let t = e.parentElement;
		t != null && t.classList.contains("img-zoom") || (t = document.createElement("div"), t.className = "img-zoom", e.before(t));
		let n = document.createElement("span");
		n.className = "zoom", n.setAttribute("data-site-event-zoom", ""), t.append(n), n.append(e), a(t, e, "event");
	}, s = () => {
		n = 0;
		let e = C();
		if (/^\/biografie\/?$/i.test(e) && document.querySelectorAll(zc).forEach((e) => {
			var t;
			let n = (t = e.closest(".site-lightbox-trigger, .bio_video_trigger")) == null ? e : t;
			a(n, e, "bio");
		}), !/^\/atelier\/?$/i.test(e)) {
			if (document.querySelectorAll(Rc).forEach((e) => {
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
				if (t || e.closest(Bc) || e.closest(`[${Ic}]`) || !e.getAttribute("src") && !e.getAttribute("srcset")) return;
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
var Uc = ".work_about_heading, .editionen_title, .accordion_heading", Wc = ".bio_hero_section .bio_hero_sub", Gc = `[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading, ${Wc}, ${Uc}`, Kc = "[data-masked-reveal-label], .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_heading", qc = "data-masked-reveal-ready", Jc = "data-masked-reveal-complete", Yc = /* @__PURE__ */ new Map(), Xc = /* @__PURE__ */ new Set(), Zc, Qc = !1, $c = window.location.pathname, el, tl = /* @__PURE__ */ new WeakSet();
function nl(e) {
	let t = getComputedStyle(e).getPropertyValue("--masked-reveal-stagger").trim() || "50ms", n = Number.parseFloat(t);
	return Number.isFinite(n) ? t.endsWith("s") && !t.endsWith("ms") ? n * 1e3 : n : 50;
}
async function rl(e) {
	let t = document.documentElement, n = /^\/atelier\/?$/i.test(C()) && !!e.closest(".atelier_hero_section") || /^\/biografie\/?$/i.test(C()) && !!e.closest(".bio_hero_section"), r = /^\/editionen\/?$/i.test(C()) && e.matches(".editionen_title") && e.closest(".editionen_item") === document.querySelector(".editionen_item"), i = n || r;
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
function il(e) {
	e.played || !e.element.isConnected || (e.played = !0, e.element.classList.add("is-masked-reveal-playing"), /^\/atelier\/?$/i.test(C()) && e.element.matches(".atelier_hero_section .atelier_slide_heading") && document.dispatchEvent(new Event("atelier:hero-line-reveal")));
}
function al(e) {
	var t;
	e.matches(".editionen_title") && ((t = e.closest(".editionen_item")) == null || t.querySelectorAll("[data-edition-content-reveal]").forEach((e) => e.classList.add("is-edition-content-in")));
}
function ol(e, t = !1) {
	let { element: n, text: r, markup: i } = e;
	if (!n.isConnected || !Zc) return;
	let a = e.played && n.hasAttribute(Jc) && !t;
	n.classList.remove("is-masked-reveal-playing"), n.removeAttribute(Jc), n.innerHTML = i;
	try {
		let t = Zc.create(n, { type: "lines" }), i = t.lines.filter((e) => {
			var t;
			return (t = e.textContent) == null ? void 0 : t.trim();
		}).map((e) => Array.from(e.childNodes, (e) => e.cloneNode(!0)));
		if (t.revert(), !i.length) throw Error("No text lines found");
		let s = document.createDocumentFragment(), c = nl(n);
		if (i.forEach((e, t) => {
			t && s.append(document.createTextNode(" "));
			let n = document.createElement("span");
			n.className = "masked-reveal-line", n.setAttribute("aria-hidden", "true");
			let r = document.createElement("span");
			r.className = "masked-reveal-line__text", r.style.setProperty("--masked-reveal-line-delay", `${t * c}ms`), r.append(...e), n.append(r), s.append(n);
		}), n.replaceChildren(s), n.setAttribute("aria-label", r), n.setAttribute(qc, ""), e.width = n.getBoundingClientRect().width, a) {
			e.played = !0, n.setAttribute(Jc, ""), al(n);
			return;
		}
		if (e.played = !1, n.getAttribute("data-masked-line-reveal") === "viewport" && "IntersectionObserver" in window) {
			var o;
			(o = e.intersectionObserver) == null || o.disconnect(), e.intersectionObserver = new IntersectionObserver((t, n) => {
				t.some((e) => e.isIntersecting) && (n.disconnect(), il(e));
			}, { threshold: .1 }), e.intersectionObserver.observe(n);
		} else il(e);
	} catch (e) {
		n.innerHTML = i, n.removeAttribute(qc), n.setAttribute(Jc, ""), al(n);
	}
}
function sl(e) {
	var t, n, r, i;
	if (Yc.has(e) || /^\/atelier\/?$/i.test(C()) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim())) return;
	if (e.matches(Uc) && !e.hasAttribute("data-masked-line-reveal") && e.setAttribute("data-masked-line-reveal", "viewport"), e.querySelector("a, button, input, select, textarea, svg, img, canvas, video, iframe")) {
		e.setAttribute(Jc, "");
		return;
	}
	let a = {
		element: e,
		text: ((n = e.innerText) == null ? void 0 : n.replace(/\s+/g, " ").trim()) || e.textContent,
		markup: e.innerHTML,
		width: 0,
		played: !1,
		resizeObserver: new ResizeObserver(() => {
			!a.width || Math.abs(e.getBoundingClientRect().width - a.width) < 1 || e.matches(Wc) && a.played && !e.hasAttribute(Jc) || ol(a);
		})
	};
	Yc.set(e, a), a.resizeObserver.observe(e), Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		(r = document.fonts) == null ? void 0 : r.ready,
		(i = window.__sitePreloader) == null ? void 0 : i.ready,
		rl(e)
	]).then(([{ SplitText: t }]) => {
		S.registerPlugin(t), Zc = t, e.isConnected && ol(a);
	}).catch(() => {
		e.setAttribute(Jc, "");
	});
}
function cl(e) {
	var t, n, r;
	Xc.has(e) || /^\/atelier\/?$/i.test(C()) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim()) || (Xc.add(e), Promise.all([
		(n = document.fonts) == null ? void 0 : n.ready,
		(r = window.__sitePreloader) == null ? void 0 : r.ready,
		rl(e)
	]).then(() => {
		e.isConnected && e.classList.add("is-masked-reveal-playing");
	}).catch(() => {
		e.setAttribute(Jc, "");
	}));
}
function ll() {
	Yc.forEach((e) => {
		ol(e, !0);
	}), Xc.forEach((e) => {
		e.classList.remove("is-masked-reveal-playing"), requestAnimationFrame(() => e.classList.add("is-masked-reveal-playing"));
	});
}
function ul() {
	let e = $c !== window.location.pathname;
	if ($c = window.location.pathname, /^\/editionen\/?$/i.test(C($c))) {
		var t;
		(t = document.querySelector(".editionen_item")) == null || t.setAttribute("data-edition-first", "");
	}
	document.querySelectorAll(Gc).forEach(sl), document.querySelectorAll(Kc).forEach(cl), document.querySelectorAll(".editionen_item").forEach((e) => {
		e.querySelectorAll(".editionen_meta, .editionen_note").forEach((t, n) => {
			var r;
			t.hasAttribute("data-edition-content-reveal") || (t.setAttribute("data-edition-content-reveal", ""), t.style.setProperty("--edition-content-delay", `${n * 90}ms`), (r = e.querySelector(".editionen_title")) != null && r.hasAttribute(Jc) && t.classList.add("is-edition-content-in"));
		});
	}), el && document.querySelectorAll(".accordion_section .accordion_item").forEach((e, t) => {
		tl.has(e) || (tl.add(e), e.style.setProperty("--accordion-line-index", String(t)), e.setAttribute("data-accordion-line-ready", ""), el == null || el.observe(e));
	}), Yc.forEach((e, t) => {
		var n;
		t.isConnected || (e.resizeObserver.disconnect(), (n = e.intersectionObserver) == null || n.disconnect(), Yc.delete(t));
	}), Xc.forEach((e) => {
		e.isConnected || Xc.delete(e);
	}), e && ll();
}
function dl() {
	var e;
	Qc || f() || (Qc = !0, "IntersectionObserver" in window && (el = new IntersectionObserver((e, t) => {
		e.forEach((e) => {
			if (!e.isIntersecting) return;
			let n = e.target;
			n.classList.add("is-accordion-line-in"), t.unobserve(n);
		});
	}, {
		threshold: 0,
		rootMargin: "0px 0px -5% 0px"
	})), ul(), new MutationObserver(ul).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), (e = document.fonts) == null || e.addEventListener("loadingdone", () => {
		Yc.forEach((e) => {
			e.element.matches(Wc) && e.played && !e.element.hasAttribute(Jc) || ol(e);
		});
	}), window.addEventListener("popstate", ul), window.addEventListener("pageshow", (e) => {
		e.persisted && (ll(), ul());
	}), document.addEventListener("animationend", (e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement) || !t.classList.contains("masked-reveal-line__text")) return;
		let n = t.closest(Gc);
		!n || t !== n.querySelector(".masked-reveal-line:last-of-type > .masked-reveal-line__text") || (n.classList.remove("is-masked-reveal-playing"), n.setAttribute(Jc, ""), al(n));
	}));
}
//#endregion
//#region src/main.ts
var fl = !1;
Mc(), Ns(), ci(), dl(), Fc();
function pl() {
	if (fl) return;
	fl = !0, e.info("site_interactions_boot_started", { document_ready_state: document.readyState });
	let t = te();
	if (lo({ i18n: t }), /^\/kontakt\/?$/i.test(C())) {
		var n;
		(n = document.querySelector(".contact_img img.is-contact-image")) == null || n.classList.add("js-lightbox");
	}
	ta({ i18n: t }), Qs(), ls(), N(), y(), k(), nc(), ic(), Hc(), window.SiteInteractions = {
		openModal: ao,
		openContentModal: io,
		closeModal: oo,
		openLightbox: Zi,
		closeLightbox: Qi
	}, e.info("site_interactions_boot_completed", { document_ready_state: document.readyState });
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", pl, { once: !0 }) : pl();
//#endregion

//# sourceMappingURL=site-interactions.js.map