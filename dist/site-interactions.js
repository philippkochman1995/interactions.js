import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { n as x, t as S } from "./site-interactions-B0Sdc9vB.js";
import { t as C } from "./site-interactions-CKkKncuX.js";
import { a as w, i as T, n as E, r as D, t as O } from "./site-interactions-CEVwkEpI.js";
//#region src/modules/i18n.ts
var ee = {};
function k(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function A(e = document) {
	var t, n;
	ee = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (ee = k(v(i))), {
		get values() {
			return { ...ee };
		},
		t: j
	};
}
function j(e, t) {
	let n = e.trim(), r = ee[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var te = ".site-menu__languages", M = ".site-menu__language", ne = "site-menu__language-indicator";
function re(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function ie(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function ae(e) {
	let t = Array.from(e.querySelectorAll(M)), n = re(t);
	if (!n || e.querySelector(`.${ne}`)) return;
	let r = document.createElement("span");
	r.className = ne, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => ie(e, r, t), a = () => {
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
function oe() {
	document.querySelectorAll(te).forEach(ae);
}
//#endregion
//#region node_modules/gsap/utils/paths.js
var se = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, ce = Math.PI / 180;
180 / Math.PI;
var P = Math.sin, le = Math.cos, ue = Math.abs, de = Math.sqrt, F = function(e) {
	return typeof e == "number";
}, I = 1e5, L = function(e) {
	return Math.round(e * I) / I || 0;
}, R = function(e) {
	return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001;
};
function z(e, t, n, r, i, a, o) {
	for (var s = e.length, c, l, u, d, f; --s > -1;) for (c = e[s], l = c.length, u = 0; u < l; u += 2) d = c[u], f = c[u + 1], c[u] = d * t + f * r + a, c[u + 1] = d * n + f * i + o;
	return e._dirty = 1, e;
}
function fe(e, t, n, r, i, a, o, s, c) {
	if (!(e === s && t === c)) {
		n = ue(n), r = ue(r);
		var l = i % 360 * ce, u = le(l), d = P(l), f = Math.PI, p = f * 2, m = (e - s) / 2, h = (t - c) / 2, g = u * m + d * h, _ = -d * m + u * h, v = g * g, y = _ * _, b = v / (n * n) + y / (r * r);
		b > 1 && (n = de(b) * n, r = de(b) * r);
		var x = n * n, S = r * r, C = (x * S - x * y - S * v) / (x * y + S * v);
		C < 0 && (C = 0);
		var w = (a === o ? -1 : 1) * de(C), T = w * (n * _ / r), E = w * -(r * g / n), D = (e + s) / 2, O = (t + c) / 2, ee = D + (u * T - d * E), k = O + (d * T + u * E), A = (g - T) / n, j = (_ - E) / r, te = (-g - T) / n, M = (-_ - E) / r, ne = A * A + j * j, re = (j < 0 ? -1 : 1) * Math.acos(A / de(ne)), ie = (A * M - j * te < 0 ? -1 : 1) * Math.acos((A * te + j * M) / de(ne * (te * te + M * M)));
		isNaN(ie) && (ie = f), !o && ie > 0 ? ie -= p : o && ie < 0 && (ie += p), re %= p, ie %= p;
		var ae = Math.ceil(ue(ie) / (p / 4)), oe = [], se = ie / ae, N = 4 / 3 * P(se / 2) / (1 + le(se / 2)), F = u * n, I = d * n, L = d * -r, R = u * r, z;
		for (z = 0; z < ae; z++) i = re + z * se, g = le(i), _ = P(i), A = le(i += se), j = P(i), oe.push(g - N * _, _ + N * g, A + N * j, j - N * A, A, j);
		for (z = 0; z < oe.length; z += 2) g = oe[z], _ = oe[z + 1], oe[z] = g * F + _ * L + ee, oe[z + 1] = g * I + _ * R + k;
		return oe[z - 2] = s, oe[z - 1] = c, oe;
	}
}
function pe(e) {
	var t = (e + "").replace(N, function(e) {
		var t = +e;
		return t < 1e-4 && t > -1e-4 ? 0 : t;
	}).match(se) || [], n = [], r = 0, i = 0, a = 2 / 3, o = t.length, s = 0, c = "ERROR: malformed path: " + e, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w = function(e, t, n, r) {
		v = (n - e) / 3, y = (r - t) / 3, h.push(e + v, t + y, n - v, r - y, n, r);
	};
	if (!e || !isNaN(t[0]) || isNaN(t[1])) return console.log(c), n;
	for (l = 0; l < o; l++) if (x = p, isNaN(t[l]) ? (p = t[l].toUpperCase(), m = p !== t[l]) : l--, d = +t[l + 1], f = +t[l + 2], m && (d += r, f += i), l || (g = d, _ = f), p === "M") h && (h.length < 8 ? --n.length : s += h.length, R(h)), r = g = d, i = _ = f, h = [d, f], n.push(h), l += 2, p = "L";
	else if (p === "C") h || (h = [0, 0]), m || (r = i = 0), h.push(d, f, r + t[l + 3] * 1, i + t[l + 4] * 1, r += t[l + 5] * 1, i += t[l + 6] * 1), l += 6;
	else if (p === "S") v = r, y = i, (x === "C" || x === "S") && (v += r - h[h.length - 4], y += i - h[h.length - 3]), m || (r = i = 0), h.push(v, y, d, f, r += t[l + 3] * 1, i += t[l + 4] * 1), l += 4;
	else if (p === "Q") v = r + (d - r) * a, y = i + (f - i) * a, m || (r = i = 0), r += t[l + 3] * 1, i += t[l + 4] * 1, h.push(v, y, r + (d - r) * a, i + (f - i) * a, r, i), l += 4;
	else if (p === "T") v = r - h[h.length - 4], y = i - h[h.length - 3], h.push(r + v, i + y, d + (r + v * 1.5 - d) * a, f + (i + y * 1.5 - f) * a, r = d, i = f), l += 2;
	else if (p === "H") w(r, i, r = d, i), l += 1;
	else if (p === "V") w(r, i, r, i = d + (m ? i - r : 0)), l += 1;
	else if (p === "L" || p === "Z") p === "Z" && (d = g, f = _, h.closed = !0), (p === "L" || ue(r - d) > .5 || ue(i - f) > .5) && (w(r, i, d, f), p === "L" && (l += 2)), r = d, i = f;
	else if (p === "A") {
		if (S = t[l + 4], C = t[l + 5], v = t[l + 6], y = t[l + 7], u = 7, S.length > 1 && (S.length < 3 ? (y = v, v = C, u--) : (y = C, v = S.substr(2), u -= 2), C = S.charAt(1), S = S.charAt(0)), b = fe(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +S, +C, (m ? r : 0) + v * 1, (m ? i : 0) + y * 1), l += u, b) for (u = 0; u < b.length; u++) h.push(b[u]);
		r = h[h.length - 2], i = h[h.length - 1];
	} else console.log(c);
	return l = h.length, l < 6 ? (n.pop(), l = 0) : R(h), n.totalPoints = s + l, n;
}
function me(e) {
	F(e[0]) && (e = [e]);
	var t = "", n = e.length, r, i, a, o;
	for (i = 0; i < n; i++) {
		for (o = e[i], t += "M" + L(o[0]) + "," + L(o[1]) + " C", r = o.length, a = 2; a < r; a++) t += L(o[a++]) + "," + L(o[a++]) + " " + L(o[a++]) + "," + L(o[a++]) + " " + L(o[a++]) + "," + L(o[a]) + " ";
		o.closed && (t += "z");
	}
	return t;
}
//#endregion
//#region node_modules/gsap/CustomEase.js
var B, he, ge = function() {
	return B || typeof window < "u" && (B = window.gsap) && B.registerPlugin && B;
}, _e = function() {
	B = ge(), B ? (B.registerEase("_CE", Ce.create), he = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
}, V = 0x56bc75e2d63100000, H = function(e) {
	return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3;
}, ve = 1, U = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, ye = /[cLlsSaAhHvVtTqQ]/g, be = function(e) {
	var t = e.length, n = V, r;
	for (r = 1; r < t; r += 6) +e[r] < n && (n = +e[r]);
	return n;
}, xe = function(e, t, n) {
	!n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
	var r = e[0] * -1, i = -n, a = e.length, o = 1 / (+e[a - 2] + r), s = -t || (Math.abs(e[a - 1] - +e[1]) < .01 * (e[a - 2] - +e[0]) ? be(e) + i : +e[a - 1] + i), c;
	for (s = s ? 1 / s : -o, c = 0; c < a; c += 2) e[c] = (+e[c] + r) * o, e[c + 1] = (+e[c + 1] + i) * s;
}, Se = function e(t, n, r, i, a, o, s, c, l, u, d) {
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
}, Ce = /*#__PURE__*/ function() {
	function e(e, t, n) {
		he || _e(), this.id = e, ve && this.setData(t, n);
	}
	var t = e.prototype;
	return t.setData = function(e, t) {
		t = t || {}, e = e || "0,0,1,1";
		var n = e.match(U), r = 1, i = [], a = [], o = t.precision || 1, s = o <= 1, c, l, u, d, f, p, m, h, g;
		if (this.data = e, (ye.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (n = pe(e)[0]), c = n.length, c === 4) n.unshift(0, 0), n.push(1, 1), c = 8;
		else if ((c - 2) % 6) throw "Invalid CustomEase";
		for ((+n[0] != 0 || +n[c - 2] != 1) && xe(n, t.height, t.originY), this.segment = n, d = 2; d < c; d += 6) l = {
			x: +n[d - 2],
			y: +n[d - 1]
		}, u = {
			x: +n[d + 4],
			y: +n[d + 5]
		}, i.push(l, u), Se(l.x, l.y, +n[d], +n[d + 1], +n[d + 2], +n[d + 3], u.x, u.y, 1 / (o * 2e5), i, i.length - 1);
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
		}, this.ease.custom = this, this.id && B && B.registerEase(this.id, this.ease), this;
	}, t.getSVGData = function(t) {
		return e.getSVGData(this, t);
	}, e.create = function(t, n, r) {
		return new e(t, n, r).ease;
	}, e.register = function(e) {
		B = e, _e();
	}, e.get = function(e) {
		return B.parseEase(e);
	}, e.getSVGData = function(t, n) {
		n = n || {};
		var r = n.width || 100, i = n.height || 100, a = n.x || 0, o = (n.y || 0) + i, s = B.utils.toArray(n.path)[0], c, l, u, d, f, p, m, h, g, _;
		if (n.invert && (i = -i, o = 0), typeof t == "string" && (t = B.parseEase(t)), t.custom && (t = t.custom), t instanceof e) c = me(z([t.segment.slice(0)], r, 0, 0, -i, a, o));
		else {
			for (c = [a, o], m = Math.max(5, (n.precision || 1) * 200), d = 1 / m, m += 2, h = 5 / m, g = H(a + d * r), _ = H(o + t(d) * -i), l = (_ - o) / (g - a), u = 2; u < m; u++) f = H(a + u * d * r), p = H(o + t(u * d) * -i), (Math.abs((p - _) / (f - g) - l) > h || u === m - 1) && (c.push(g, _), l = (p - _) / (f - g)), g = f, _ = p;
			c = "M" + c.join(",");
		}
		return s && s.setAttribute("d", c), c;
	}, e;
}();
Ce.version = "3.15.0", Ce.headless = !0, ge() && B.registerPlugin(Ce);
//#endregion
//#region node_modules/gsap/Observer.js
function we(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function Te(e, t, n) {
	return t && we(e.prototype, t), n && we(e, n), e;
}
var W, Ee, G, K, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie = function() {
	return W || typeof window < "u" && (W = window.gsap) && W.registerPlugin && W;
}, Le = 1, Re = [], q = [], ze = [], Be = Date.now, Ve = function(e, t) {
	return t;
}, He = function() {
	var e = je.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, q), r.push.apply(r, ze), q = n, ze = r, Ve = function(e, n) {
		return t[e](n);
	};
}, Ue = function(e, t) {
	return ~ze.indexOf(e) && ze[ze.indexOf(e) + 1][t];
}, We = function(e) {
	return !!~Me.indexOf(e);
}, Ge = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, Ke = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, qe = "scrollLeft", Je = "scrollTop", Ye = function() {
	return Ne && Ne.isPressed || q.cache++;
}, Xe = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			Le && (G.history.scrollRestoration = "manual");
			var i = Ne && Ne.isPressed;
			r = n.v = Math.round(r) || (Ne && Ne.iOS ? 1 : 0), e(r), n.cacheID = q.cache, i && Ve("ss", r);
		} else (t || q.cache !== n.cacheID || Ve("ref")) && (n.cacheID = q.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Ze = {
	s: qe,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: Xe(function(e) {
		return arguments.length ? G.scrollTo(e, Qe.sc()) : G.pageXOffset || K[qe] || De[qe] || Oe[qe] || 0;
	})
}, Qe = {
	s: Je,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Ze,
	sc: Xe(function(e) {
		return arguments.length ? G.scrollTo(Ze.sc(), e) : G.pageYOffset || K[Je] || De[Je] || Oe[Je] || 0;
	})
}, $e = function(e, t) {
	return (t && t._ctx && t._ctx.selector || W.utils.toArray)(e)[0] || (typeof e == "string" && W.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, et = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, tt = function(e, t) {
	var n = t.s, r = t.sc;
	We(e) && (e = K.scrollingElement || De);
	var i = q.indexOf(e), a = r === Qe.sc ? 1 : 2;
	!~i && (i = q.push(e) - 1), q[i + a] || Ge(e, "scroll", Ye);
	var o = q[i + a], s = o || (q[i + a] = Xe(Ue(e, n), !0) || (We(e) ? r : Xe(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = W.getProperty(e, "scrollBehavior") === "smooth"), s;
}, nt = function(e, t, n) {
	var r = e, i = e, a = Be(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = Be();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = Be();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, rt = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, it = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, at = function() {
	je = W.core.globals().ScrollTrigger, je && je.core && He();
}, ot = function(e) {
	return W = e || Ie(), !Ee && W && typeof document < "u" && document.body && (G = window, K = document, De = K.documentElement, Oe = K.body, Me = [
		G,
		K,
		De,
		Oe
	], W.utils.clamp, Fe = W.core.context || function() {}, Ae = "onpointerenter" in Oe ? "pointer" : "mouse", ke = st.isTouch = G.matchMedia && G.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in G || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Pe = st.eventTypes = ("ontouchstart" in De ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in De ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return Le = 0;
	}, 500), Ee = 1), je || at(), Ee;
};
Ze.op = Qe, q.cache = 0;
var st = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		Ee || ot(W) || console.warn("Please gsap.registerPlugin(Observer)"), je || at();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, ee = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, j = e.onGestureStart, te = e.onGestureEnd, M = e.onWheel, ne = e.onEnable, re = e.onDisable, ie = e.onClick, ae = e.scrollSpeed, oe = e.capture, se = e.allowClicks, N = e.lockAxis, ce = e.onLockAxis;
		this.target = i = $e(i) || De, this.vars = e, u && (u = W.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ae = ae || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(G.getComputedStyle(Oe).lineHeight) || 22);
		var P, le, ue, de, F, I, L, R = this, z = 0, fe = 0, pe = e.passive || !s && e.passive !== !1, me = tt(i, Ze), B = tt(i, Qe), he = me(), ge = B(), _e = ~r.indexOf("touch") && !~r.indexOf("pointer") && Pe[0] === "pointerdown", V = We(i), H = i.ownerDocument || K, ve = [
			0,
			0,
			0
		], U = [
			0,
			0,
			0
		], ye = 0, be = function() {
			return ye = Be();
		}, xe = function(e, t) {
			return (R.event = e) && u && et(e.target, u) || t && _e && e.pointerType !== "touch" || k && k(e, t);
		}, Se = function() {
			R._vx.reset(), R._vy.reset(), le.pause(), c && c(R);
		}, Ce = function() {
			var e = R.deltaX = it(ve), n = R.deltaY = it(U), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(R, e, n, ve, U), r && (v && R.deltaX > 0 && v(R), y && R.deltaX < 0 && y(R), S && S(R), T && R.deltaX < 0 != z < 0 && T(R), z = R.deltaX, ve[0] = ve[1] = ve[2] = 0), i && (x && R.deltaY > 0 && x(R), b && R.deltaY < 0 && b(R), C && C(R), E && R.deltaY < 0 != fe < 0 && E(R), fe = R.deltaY, U[0] = U[1] = U[2] = 0), (de || ue) && (ee && ee(R), ue && (p && ue === 1 && p(R), h && h(R), ue = 0), de = !1), I && !(I = !1) && ce && ce(R), F && (M(R), F = !1), P = 0;
		}, we = function(e, t, n) {
			ve[n] += e, U[n] += t, R._vx.update(e), R._vy.update(t), o ? P || (P = requestAnimationFrame(Ce)) : Ce();
		}, Te = function(e, t) {
			N && !L && (R.axis = L = Math.abs(e) > Math.abs(t) ? "x" : "y", I = !0), L !== "y" && (ve[2] += e, R._vx.update(e, !0)), L !== "x" && (U[2] += t, R._vy.update(t, !0)), o ? P || (P = requestAnimationFrame(Ce)) : Ce();
		}, Me = function(e) {
			if (!xe(e, 1)) {
				e = rt(e, s);
				var t = e.clientX, r = e.clientY, i = t - R.x, a = r - R.y, o = R.isDragging;
				R.x = t, R.y = r, (o || (i || a) && (Math.abs(R.startX - t) >= n || Math.abs(R.startY - r) >= n)) && (ue || (ue = o ? 2 : 1), o || (R.isDragging = !0), Te(i, a));
			}
		}, Ie = R.onPress = function(e) {
			xe(e, 1) || e && e.button || (R.axis = L = null, le.pause(), R.isPressed = !0, e = rt(e), z = fe = 0, R.startX = R.x = e.clientX, R.startY = R.y = e.clientY, R._vx.reset(), R._vy.reset(), Ge(A ? i : H, Pe[1], Me, pe, !0), R.deltaX = R.deltaY = 0, g && g(R));
		}, Le = R.onRelease = function(e) {
			if (!xe(e, 1)) {
				Ke(A ? i : H, Pe[1], Me, !0);
				var t = !isNaN(R.y - R.startY), n = R.isDragging, r = n && (Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3), a = rt(e);
				!r && t && (R._vx.reset(), R._vy.reset(), s && se && W.delayedCall(.08, function() {
					if (Be() - ye > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (H.createEvent) {
							var t = H.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, G, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), R.isDragging = R.isGesturing = R.isPressed = !1, c && n && !A && le.restart(!0), ue && Ce(), m && n && m(R), _ && _(R, r);
			}
		}, q = function(e) {
			return e.touches && e.touches.length > 1 && (R.isGesturing = !0) && j(e, R.isDragging);
		}, ze = function() {
			return (R.isGesturing = !1) || te(R);
		}, Ve = function(e) {
			if (!xe(e)) {
				var t = me(), n = B();
				we((t - he) * ae, (n - ge) * ae, 1), he = t, ge = n, c && le.restart(!0);
			}
		}, He = function(e) {
			if (!xe(e)) {
				e = rt(e, s), M && (F = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? G.innerHeight : 1) * d;
				we(e.deltaX * t, e.deltaY * t, 0), c && !A && le.restart(!0);
			}
		}, Ue = function(e) {
			if (!xe(e)) {
				var t = e.clientX, n = e.clientY, r = t - R.x, i = n - R.y;
				R.x = t, R.y = n, de = !0, c && le.restart(!0), (r || i) && Te(r, i);
			}
		}, qe = function(e) {
			R.event = e, D(R);
		}, Je = function(e) {
			R.event = e, O(R);
		}, Xe = function(e) {
			return xe(e) || rt(e, s) && ie(R);
		};
		le = R._dc = W.delayedCall(l || .25, Se).pause(), R.deltaX = R.deltaY = 0, R._vx = nt(0, 50, !0), R._vy = nt(0, 50, !0), R.scrollX = me, R.scrollY = B, R.isDragging = R.isGesturing = R.isPressed = !1, Fe(this), R.enable = function(e) {
			return R.isEnabled || (Ge(V ? H : i, "scroll", Ye), r.indexOf("scroll") >= 0 && Ge(V ? H : i, "scroll", Ve, pe, oe), r.indexOf("wheel") >= 0 && Ge(i, "wheel", He, pe, oe), (r.indexOf("touch") >= 0 && ke || r.indexOf("pointer") >= 0) && (Ge(i, Pe[0], Ie, pe, oe), Ge(H, Pe[2], Le), Ge(H, Pe[3], Le), se && Ge(i, "click", be, !0, !0), ie && Ge(i, "click", Xe), j && Ge(H, "gesturestart", q), te && Ge(H, "gestureend", ze), D && Ge(i, Ae + "enter", qe), O && Ge(i, Ae + "leave", Je), ee && Ge(i, Ae + "move", Ue)), R.isEnabled = !0, R.isDragging = R.isGesturing = R.isPressed = de = ue = !1, R._vx.reset(), R._vy.reset(), he = me(), ge = B(), e && e.type && Ie(e), ne && ne(R)), R;
		}, R.disable = function() {
			R.isEnabled && (Re.filter(function(e) {
				return e !== R && We(e.target);
			}).length || Ke(V ? H : i, "scroll", Ye), R.isPressed && (R._vx.reset(), R._vy.reset(), Ke(A ? i : H, Pe[1], Me, !0)), Ke(V ? H : i, "scroll", Ve, oe), Ke(i, "wheel", He, oe), Ke(i, Pe[0], Ie, oe), Ke(H, Pe[2], Le), Ke(H, Pe[3], Le), Ke(i, "click", be, !0), Ke(i, "click", Xe), Ke(H, "gesturestart", q), Ke(H, "gestureend", ze), Ke(i, Ae + "enter", qe), Ke(i, Ae + "leave", Je), Ke(i, Ae + "move", Ue), R.isEnabled = R.isPressed = R.isDragging = !1, re && re(R));
		}, R.kill = R.revert = function() {
			R.disable();
			var e = Re.indexOf(R);
			e >= 0 && Re.splice(e, 1), Ne === R && (Ne = 0);
		}, Re.push(R), A && We(i) && (Ne = R), R.enable(f);
	}, Te(e, [{
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
st.version = "3.15.0", st.create = function(e) {
	return new st(e);
}, st.register = ot, st.getAll = function() {
	return Re.slice();
}, st.getById = function(e) {
	return Re.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, Ie() && W.registerPlugin(st);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var J, ct, Y, X, lt, Z, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt = 1, zt = Date.now, Bt = zt(), Vt = 0, Ht = 0, Ut = function(e, t, n) {
	var r = on(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, Wt = function(e, t) {
	return t && (!on(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, Gt = function e() {
	return Ht && requestAnimationFrame(e);
}, Kt = function() {
	return _t = 1;
}, qt = function() {
	return _t = 0;
}, Jt = function(e) {
	return e;
}, Yt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, Xt = function() {
	return typeof window < "u";
}, Zt = function() {
	return J || Xt() && (J = window.gsap) && J.registerPlugin && J;
}, Qt = function(e) {
	return !!~ut.indexOf(e);
}, $t = function(e) {
	return (e === "Height" ? Pt : Y["inner" + e]) || lt["client" + e] || Z["client" + e];
}, en = function(e) {
	return Ue(e, "getBoundingClientRect") || (Qt(e) ? function() {
		return Dr.width = Y.innerWidth, Dr.height = Pt, Dr;
	} : function() {
		return jn(e);
	});
}, tn = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = Ue(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? $t(i) : e["client" + i]) || 0;
	};
}, nn = function(e, t) {
	return !t || ~ze.indexOf(e) ? en(e) : function() {
		return Dr;
	};
}, rn = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = Ue(e, n)) ? a() - en(e)()[i] : Qt(e) ? (lt[n] || Z[n]) - $t(r) : e[n] - e["offset" + r]);
}, an = function(e, t) {
	for (var n = 0; n < St.length; n += 3) (!t || ~t.indexOf(St[n + 1])) && e(St[n], St[n + 1], St[n + 2]);
}, on = function(e) {
	return typeof e == "string";
}, sn = function(e) {
	return typeof e == "function";
}, cn = function(e) {
	return typeof e == "number";
}, ln = function(e) {
	return typeof e == "object";
}, un = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, dn = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, fn = Math.abs, pn = "left", mn = "top", hn = "right", gn = "bottom", _n = "width", vn = "height", yn = "Right", bn = "Left", xn = "Top", Sn = "Bottom", Cn = "padding", wn = "margin", Tn = "Width", En = "Height", Dn = "px", On = function(e) {
	return Y.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, kn = function(e) {
	var t = On(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, An = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, jn = function(e, t) {
	var n = t && On(e)[vt] !== "matrix(1, 0, 0, 1, 0, 0)" && J.to(e, {
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
}, Mn = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Nn = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, Pn = function(e) {
	return function(t) {
		return J.utils.snap(Nn(e), t);
	};
}, Fn = function(e) {
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
}, In = function(e) {
	return function(t, n) {
		return Fn(Nn(e))(t, n.direction);
	};
}, Ln = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, Rn = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, zn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Bn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, Vn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, Hn = {
	toggleActions: "play",
	anticipatePin: 0
}, Un = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, Wn = function(e, t) {
	if (on(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Un ? Un[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, Gn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = X.createElement("div"), m = Qt(n) || Ue(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Z : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === Qe ? hn : gn) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Kn(p, 0, r, _), p;
}, Kn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Tn] = 1, i["border" + o + Tn] = 0, i[n.p] = t + "px", J.set(e, i);
}, Q = [], qn = {}, Jn, Yn = function() {
	return zt() - Vt > 34 && (Jn || (Jn = requestAnimationFrame(vr)));
}, Xn = function() {
	(!Et || !Et.isPressed || Et.startX > Z.clientWidth) && (q.cache++, Et ? Jn || (Jn = requestAnimationFrame(vr)) : vr(), Vt || nr("scrollStart"), Vt = zt());
}, Zn = function() {
	kt = Y.innerWidth, Ot = Y.innerHeight;
}, Qn = function(e) {
	q.cache++, (e === !0 || !gt && !Tt && !X.fullscreenElement && !X.webkitFullscreenElement && (!Dt || kt !== Y.innerWidth || Math.abs(Y.innerHeight - Ot) > Y.innerHeight * .25)) && dt.restart(!0);
}, $n = {}, er = [], tr = function e() {
	return zn($, "scrollEnd", e) || mr(!0);
}, nr = function(e) {
	return $n[e] && $n[e].map(function(e) {
		return e();
	}) || er;
}, rr = [], ir = function(e) {
	for (var t = 0; t < rr.length; t += 5) (!e || rr[t + 4] && rr[t + 4].query === e) && (rr[t].style.cssText = rr[t + 1], rr[t].getBBox && rr[t].setAttribute("transform", rr[t + 2] || ""), rr[t + 3].uncache = 1);
}, ar = function() {
	return q.forEach(function(e) {
		return sn(e) && ++e.cacheID && (e.rec = e());
	});
}, or = function(e, t) {
	var n;
	for (yt = 0; yt < Q.length; yt++) n = Q[yt], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Ft = !0, t && ir(t), t || nr("revert");
}, sr = function(e, t) {
	q.cache++, (t || !cr) && q.forEach(function(e) {
		return sn(e) && e.cacheID++ && (e.rec = 0);
	}), on(e) && (Y.history.scrollRestoration = Mt = e);
}, cr, lr = 0, ur, dr = function() {
	if (ur !== lr) {
		var e = ur = lr;
		requestAnimationFrame(function() {
			return e === lr && mr(!0);
		});
	}
}, fr = function() {
	Z.appendChild(Nt), Pt = !Et && Nt.offsetHeight || Y.innerHeight, Z.removeChild(Nt);
}, pr = function(e) {
	return ft(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, mr = function(e, t) {
	if (lt = X.documentElement, Z = X.body, ut = [
		Y,
		X,
		lt,
		Z
	], Vt && !e && !Ft) {
		Rn($, "scrollEnd", tr);
		return;
	}
	fr(), cr = $.isRefreshing = !0, Ft || ar();
	var n = nr("refreshInit");
	Ct && $.sort(), t || or(), q.forEach(function(e) {
		sn(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), Ft = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), It = 1, pr(!0), Q.forEach(function(e) {
		var t = rn(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), pr(!1), It = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), q.forEach(function(e) {
		sn(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), sr(Mt, 1), dt.pause(), lr++, cr = 2, vr(2), Q.forEach(function(e) {
		return sn(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), cr = $.isRefreshing = !1, nr("refresh");
}, hr = 0, gr = 1, _r, vr = function(e) {
	if (e === 2 || !cr && !Ft) {
		$.isUpdating = !0, _r && _r.update(0);
		var t = Q.length, n = zt(), r = n - Bt >= 50, i = t && Q[0].scroll();
		if (gr = hr > i ? -1 : 1, cr || (hr = i), r && (Vt && !_t && n - Vt > 200 && (Vt = 0, nr("scrollEnd")), mt = Bt, Bt = n), gr < 0) {
			for (yt = t; yt-- > 0;) Q[yt] && Q[yt].update(0, r);
			gr = 1;
		} else for (yt = 0; yt < t; yt++) Q[yt] && Q[yt].update(0, r);
		$.isUpdating = !1;
	}
	Jn = 0;
}, yr = [
	pn,
	mn,
	gn,
	hn,
	wn + Sn,
	wn + yn,
	wn + xn,
	wn + bn,
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
], br = yr.concat([
	_n,
	vn,
	"boxSizing",
	"max" + Tn,
	"max" + En,
	"position",
	wn,
	Cn,
	Cn + xn,
	Cn + yn,
	Cn + Sn,
	Cn + bn
]), xr = function(e, t, n) {
	wr(n);
	var r = e._gsap;
	if (r.spacerIsNative) wr(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Sr = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = yr.length, a = t.style, o = e.style, s; i--;) s = yr[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[gn] = o[hn] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[_n] = Mn(e, Ze) + Dn, a[vn] = Mn(e, Qe) + Dn, a[Cn] = o[wn] = o[mn] = o[pn] = "0", wr(r), o[_n] = o["max" + Tn] = n[_n], o[vn] = o["max" + En] = n[vn], o[Cn] = n[Cn], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Cr = /([A-Z])/g, wr = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Cr, "-$1").toLowerCase());
	}
}, Tr = function(e) {
	for (var t = br.length, n = e.style, r = [], i = 0; i < t; i++) r.push(br[i], n[br[i]]);
	return r.t = e, r;
}, Er = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Dr = {
	left: 0,
	top: 0
}, Or = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	sn(e) && (e = e(s)), on(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Wn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), cn(e)) f && (e = J.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && Kn(o, n, r, !0);
	else {
		sn(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = $e(t, s) || Z, y = jn(_) || {}, (!y || !y.left && !y.top) && On(_).display === "none" && (S = _.style.display, _.style.display = "block", y = jn(_), S ? _.style.display = S : _.style.removeProperty("display")), b = Wn(v[0], y[r.d]), x = Wn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && Kn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, Kn(a, C, r, w && C > 20 || !w && (u ? Math.max(Z[h], lt[h]) : a.parentNode[h]) <= C + 1), u && (c = jn(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Dn));
	}
	return f && _ && (h = jn(_), f.seek(d), g = jn(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, kr = /(webkit|moz|length|cssText|inset)/i, Ar = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Z) {
			for (a in e._stOrig = i.cssText, o = On(e), o) !+a && !kr.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		J.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, jr = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, Mr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, J.set(e, r);
}, Nr = function(e, t) {
	var n = tt(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = jr(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			q.cache++, t.tween && vr();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = J.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, Rn(e, "wheel", n.wheelHandler), $.isTouch && Rn(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		ct || e.register(J) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), jt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ht) {
			this.update = this.refresh = this.kill = Jt;
			return;
		}
		t = An(on(t) || cn(t) || t.nodeType ? { trigger: t } : t, Hn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ze : Qe, T = !l && l !== 0, E = $e(t.scroller || Y), D = J.core.getCache(E), O = Qt(E), ee = ("pinType" in t ? t.pinType : Ue(E, "pinType") || O && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = T && t.toggleActions.split(" "), j = "markers" in t ? t.markers : Hn.markers, te = O ? 0 : parseFloat(On(E)["border" + w.p2 + Tn]) || 0, M = this, ne = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, re = tn(E, O, w), ie = nn(E, O), ae = 0, oe = 0, se = 0, N = tt(E, w), ce, P, le, ue, de, F, I, L, R, z, fe, pe, me, B, he, ge, _e, V, H, ve, U, ye, be, xe, Se, Ce, we, Te, W, Ee, G, K, De, Oe, ke, Ae, je, Me, Ne;
		if (M._startClamp = M._endClamp = !1, M._dir = w, m *= 45, M.scroller = E, M.scroll = x ? x.time.bind(x) : N, ue = N(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (Ct = 1, t.refreshPriority === -9999 && (_r = M)), D.tweenScroll = D.tweenScroll || {
			top: Nr(E, Qe),
			left: Nr(E, Ze)
		}, M.tweenTo = ce = D.tweenScroll[w.p], M.scrubDuration = function(e) {
			De = cn(e) && e, De ? K ? K.duration(e) : K = J.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: De,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (K && K.progress(1).kill(), K = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), Ee = 0, o || (o = n.vars.id)), v && ((!ln(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Z.style && J.set(O ? [Z, lt] : E, { scrollBehavior: "auto" }), q.forEach(function(e) {
			return sn(e) && e.target === (O ? X.scrollingElement || lt : E) && (e.smooth = !1);
		}), le = sn(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Pn(n) : v.snapTo === "labelsDirectional" ? In(n) : v.directional === !1 ? J.utils.snap(v.snapTo) : function(e, t) {
			return Fn(v.snapTo)(e, zt() - oe < 500 ? 0 : t.direction);
		}, Oe = v.duration || {
			min: .1,
			max: 2
		}, Oe = ln(Oe) ? pt(Oe.min, Oe.max) : pt(Oe, Oe), ke = J.delayedCall(v.delay || De / 2 || .1, function() {
			var e = N(), t = zt() - oe < 500, r = ce.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !_t && ae !== e) {
				var i = (e - F) / B, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - G) / (zt() - mt) * 1e3 || 0, s = J.utils.clamp(-i, 1 - i, fn(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = le(c, M), cn(l) || (l = c), u = Math.max(0, Math.round(F + l * B)), e <= I && e >= F && u !== e) {
					if (r && !r._initted && r.data <= fn(u - e)) return;
					v.inertia === !1 && (s = l - i), ce(u, {
						duration: Oe(fn(Math.max(fn(c - a), fn(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: fn(u - e),
						onInterrupt: function() {
							return ke.restart(!0) && p && dn(M, p);
						},
						onComplete: function() {
							M.update(), ae = N(), n && !T && (K ? K.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Ee = G = n && !T ? n.totalProgress() : M.progress, g && g(M), m && dn(M, m);
						}
					}, e, s * B, u - e - s * B), f && dn(M, f, ce.tween);
				}
			} else M.isActive && ae !== e && ke.restart(!0);
		}).pause()), o && (qn[o] = M), u = M.trigger = $e(u || d !== !0 && d), Ne = u && u._gsap && u._gsap.stRevert, Ne && (Ne = Ne(M)), d = d === !0 ? u : $e(d), on(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === wn || (f = !f && d.parentNode && d.parentNode.style && On(d.parentNode).display === "flex" ? !1 : Cn), M.pin = d, P = J.core.getCache(d), P.spacer ? he = P.pinState : (b && (b = $e(b), b && !b.nodeType && (b = b.current || b.nativeElement), P.spacerIsNative = !!b, b && (P.spacerState = Tr(b))), P.spacer = V = b || X.createElement("div"), V.classList.add("pin-spacer"), o && V.classList.add("pin-spacer-" + o), P.pinState = he = Tr(d)), t.force3D !== !1 && J.set(d, { force3D: !0 }), M.spacer = V = P.spacer, W = On(d), xe = W[f + w.os2], ve = J.getProperty(d), U = J.quickSetter(d, w.a, Dn), Sr(d, V, W), _e = Tr(d)), j) {
			pe = ln(j) ? An(j, Vn) : Vn, z = Gn("scroller-start", o, E, w, pe, 0), fe = Gn("scroller-end", o, E, w, pe, 0, z), H = z["offset" + w.op.d2];
			var Pe = $e(Ue(E, "content") || E);
			L = this.markerStart = Gn("start", o, Pe, w, pe, H, 0, x), R = this.markerEnd = Gn("end", o, Pe, w, pe, H, 0, x), x && (Me = J.quickSetter([L, R], w.a, Dn)), !ee && !(ze.length && Ue(E, "fixedMarkers") === !0) && (kn(O ? Z : E), J.set([z, fe], { force3D: !0 }), Ce = J.quickSetter(z, w.a, Dn), Te = J.quickSetter(fe, w.a, Dn));
		}
		if (x) {
			var Fe = x.vars.onUpdate, Ie = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				M.update(0, 0, 1), Fe && Fe.apply(x, Ie || []);
			});
		}
		if (M.previous = function() {
			return Q[Q.indexOf(M) - 1];
		}, M.next = function() {
			return Q[Q.indexOf(M) + 1];
		}, M.revert = function(e, t) {
			if (!t) return M.kill(!0);
			var r = e !== !1 || !M.enabled, i = gt;
			r !== M.isReverted && (r && (Ae = Math.max(N(), M.scroll.rec || 0), se = M.progress, je = n && n.progress()), L && [
				L,
				R,
				z,
				fe
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (gt = M, M.update(r)), d && (!y || !M.isActive) && (r ? xr(d, V, he) : Sr(d, V, On(d), Se)), r || M.update(r), gt = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((gt || !M.enabled) && !i)) {
				if (d && r && Vt) {
					Rn(e, "scrollEnd", tr);
					return;
				}
				!cr && ne && ne(M), gt = M, ce.tween && !a && (ce.tween.kill(), ce.tween = 0), K && K.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = re(), l = ie(), m = x ? x.duration() : rn(E, w), h = B <= .01 || !B, g = 0, _ = o || 0, v = ln(a) ? a.end : t.end, b = t.endTrigger || u, S = ln(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = M.pinnedContainer = t.pinnedContainer && $e(t.pinnedContainer, M), D = u && Math.max(0, Q.indexOf(M)) || 0, k = D, A, P, le, pe, H, U, xe, Ce, Te, W, Ee, G, De;
				for (j && ln(a) && (G = J.getProperty(z, w.p), De = J.getProperty(fe, w.p)); k-- > 0;) U = Q[k], U.end || U.refresh(0, 1) || (gt = M), xe = U.pin, xe && (xe === u || xe === d || xe === C) && !U.isReverted && (W || (W = []), W.unshift(U), U.revert(!0, !0)), U !== Q[k] && (D--, k--);
				for (sn(S) && (S = S(M)), S = Ut(S, "start", M), F = Or(S, u, s, w, N(), L, z, M, l, te, ee, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), sn(v) && (v = v(M)), on(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (on(S) ? S.split(" ")[0] : "") + v : (g = Wn(v.substr(2), s), v = on(S) ? S : (x ? J.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, F) : F) + g, b = u)), v = Ut(v, "end", M), I = Math.max(F, Or(v || (b ? "100% 0" : m), b, s, w, N() + g, R, fe, M, l, te, ee, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = D; k--;) U = Q[k] || {}, xe = U.pin, xe && U.start - U._pinPush <= F && !x && U.end > 0 && (A = U.end - (M._startClamp ? Math.max(0, U.start) : U.start), (xe === u && U.start - U._pinPush < F || xe === C) && isNaN(S) && (g += A * (1 - U.progress)), xe === d && (_ += A));
				if (F += g, I += g, M._startClamp && (M._startClamp += g), M._endClamp && !cr && (M._endClamp = I || -.001, I = Math.min(I, rn(E, w))), B = I - F || (F -= .01) && .001, h && (se = J.utils.clamp(0, 1, J.utils.normalize(F, I, Ae))), M._pinPush = _, L && g && (A = {}, A[w.a] = "+=" + g, C && (A[w.p] = "-=" + N()), J.set([L, R], A)), d && !(It && M.end >= rn(E, w))) A = On(d), pe = w === Qe, le = N(), ye = parseFloat(ve(w.a)) + _, !m && I > 1 && (Ee = (O ? X.scrollingElement || lt : E).style, Ee = {
					style: Ee,
					value: Ee["overflow" + w.a.toUpperCase()]
				}, O && On(Z)["overflow" + w.a.toUpperCase()] !== "scroll" && (Ee.style["overflow" + w.a.toUpperCase()] = "scroll")), Sr(d, V, A), _e = Tr(d), P = jn(d, !0), Ce = ee && tt(E, pe ? Ze : Qe)(), f ? (Se = [f + w.os2, B + _ + Dn], Se.t = V, k = f === Cn ? Mn(d, w) + B + _ : 0, k && (Se.push(w.d, k + Dn), V.style.flexBasis !== "auto" && (V.style.flexBasis = k + Dn)), wr(Se), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ee && N(Ae)) : (k = Mn(d, w), k && V.style.flexBasis !== "auto" && (V.style.flexBasis = k + Dn)), ee && (H = {
					top: P.top + (pe ? le - F : Ce) + Dn,
					left: P.left + (pe ? Ce : le - F) + Dn,
					boxSizing: "border-box",
					position: "fixed"
				}, H[_n] = H["max" + Tn] = Math.ceil(P.width) + Dn, H[vn] = H["max" + En] = Math.ceil(P.height) + Dn, H[wn] = H[wn + xn] = H[wn + yn] = H[wn + Sn] = H[wn + bn] = "0", H[Cn] = A[Cn], H[Cn + xn] = A[Cn + xn], H[Cn + yn] = A[Cn + yn], H[Cn + Sn] = A[Cn + Sn], H[Cn + bn] = A[Cn + bn], ge = Er(he, H, y), cr && N(0)), n ? (Te = n._initted, wt(1), n.render(n.duration(), !0, !0), be = ve(w.a) - ye + B + _, we = Math.abs(B - be) > 1, ee && we && ge.splice(ge.length - 2, 2), n.render(0, !0, !0), Te || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), wt(0)) : be = B, Ee && (Ee.value ? Ee.style["overflow" + w.a.toUpperCase()] = Ee.value : Ee.style.removeProperty("overflow-" + w.a));
				else if (u && N() && !x) for (P = u.parentNode; P && P !== Z;) P._pinOffset && (F -= P._pinOffset, I -= P._pinOffset), P = P.parentNode;
				W && W.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = F, M.end = I, ue = de = cr ? Ae : N(), !x && !cr && (ue < Ae && N(Ae), M.scroll.rec = 0), M.revert(!1, !0), oe = zt(), ke && (ae = -1, ke.restart(!0)), gt = 0, n && T && (n._initted || je) && n.progress() !== je && n.progress(je || 0, !0).render(n.time(), !0, !0), (h || se !== M.progress || x || p || n && !n._initted) && (n && !T && (n._initted || se || n.vars.immediateRender !== !1) && n.totalProgress(x && F < -.001 && !se ? J.utils.normalize(F, I, 0) : se, !0), M.progress = h || (ue - F) / B === se ? 0 : se), d && f && (V._pinOffset = Math.round(M.progress * be)), K && K.invalidate(), isNaN(G) || (G -= J.getProperty(z, w.p), De -= J.getProperty(fe, w.p), Mr(z, w, G), Mr(L, w, G - (o || 0)), Mr(fe, w, De), Mr(R, w, De - (o || 0))), h && !cr && M.update(), c && !cr && !me && (me = !0, c(M), me = !1);
			}
		}, M.getVelocity = function() {
			return (N() - de) / (zt() - mt) * 1e3 || 0;
		}, M.endAnimation = function() {
			un(M.callbackAnimation), n && (K ? K.progress(1) : n.paused() ? T || un(n, M.direction < 0, 1) : un(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (F || M.refresh() || F) + n.labels[e] / n.duration() * B || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (on(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= F : e.start >= I;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = cr === !0 ? Ae : M.scroll(), c = e ? 0 : (o - F) / B, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, D, O, j, te, ne;
				if (t && (de = ue, ue = x ? N() : o, v && (G = Ee, Ee = n && !T ? n.totalProgress() : u)), m && d && !gt && !Rt && Vt && (!u && F < o + (o - de) / (zt() - mt) * m ? u = 1e-4 : u === 1 && I > o + (o - de) / (zt() - mt) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, j = h !== g, O = j || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, O && !gt && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !j && A[b + 1] !== "none" && A[b + 1] || A[b], ne = n && (D === "complete" || D === "reset" || D in n))), C && (j || ne) && (ne || l || !n) && (sn(C) ? C(M) : M.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (K && !gt && !Rt ? (K._dp._time - K._start !== K._time && K.render(K._dp._time - K._start), K.resetTo ? K.resetTo("totalProgress", u, n._tTime / n._tDur) : (K.vars.totalProgress = u, K.invalidate().restart())) : n && n.totalProgress(u, !!(gt && (oe || e)))), d) {
						if (e && f && (V.style[f + w.os2] = xe), !ee) U(Yt(ye + be * u));
						else if (O) {
							if (te = !e && u > p && I + 1 > o && o + 1 >= rn(E, w), y) if (!e && (h || te)) {
								var re = jn(d, !0), ie = o - F;
								Ar(d, Z, re.top + (w === Qe ? ie : 0) + Dn, re.left + (w === Qe ? 0 : ie) + Dn);
							} else Ar(d, V);
							wr(h || te ? ge : _e), we && u < 1 && h || U(ye + (u === 1 && !te ? be : 0));
						}
					}
					v && !ce.tween && !gt && !Rt && ke.restart(!0), a && (j || _ && u && (u < 1 || !Lt)) && ft(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(M), O && !gt ? (T && (ne && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(M)), (j || !Lt) && (s && j && dn(M, s), k[b] && dn(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), j || (b = u === 1 ? 1 : 3, k[b] && dn(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (cn(S) ? S : 2500) && (un(M.callbackAnimation), K ? K.progress(1) : un(n, D === "reverse" ? 1 : !u, 1))) : T && i && !gt && i(M);
				}
				if (Te) {
					var ae = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					Ce(ae + +!!z._isFlipped), Te(ae);
				}
				Me && Me(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, Rn(E, "resize", Qn), O || Rn(E, "scroll", Xn), ne && Rn(e, "refreshInit", ne), t !== !1 && (M.progress = se = 0, ue = de = ae = N()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && ce ? ce.tween : K;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: Wt(e, n && !!M._startClamp),
				end: Wt(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (Se && e) {
				var t = Se.indexOf(w.d) + 1;
				Se[t] = parseFloat(Se[t]) + e + Dn, Se[1] = parseFloat(Se[1]) + e + Dn, wr(Se);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || K && K.pause(), Ae = 0, P && (P.uncache = 1), ne && zn(e, "refreshInit", ne), ke && (ke.pause(), ce.tween && ce.tween.kill() && (ce.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== M) return;
				zn(E, "resize", Qn), O || zn(E, "scroll", Xn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), K && !r && K.kill(), o && delete qn[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === yt && gr > 0 && yt--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || cr || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), L && [
				L,
				R,
				z,
				fe
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), _r === M && (_r = 0), d && (P && (P.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (P.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Ne && Ne(M), n && n.add && !B) {
			var Le = M.update;
			M.update = function() {
				M.update = Le, q.cache++, F || I || M.refresh();
			}, J.delayedCall(.01, M.update), B = .01, F = I = 0;
		} else M.refresh();
		d && dr();
	}, e.register = function(t) {
		return ct || (J = t || Zt(), Xt() && window.document && e.enable(), ct = Ht), ct;
	}, e.defaults = function(e) {
		if (e) for (var t in e) Hn[t] = e[t];
		return Hn;
	}, e.disable = function(e, t) {
		Ht = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), zn(Y, "wheel", Xn), zn(X, "scroll", Xn), clearInterval(ht), zn(X, "touchcancel", Jt), zn(Z, "touchstart", Jt), Ln(zn, X, "pointerdown,touchstart,mousedown", Kt), Ln(zn, X, "pointerup,touchend,mouseup", qt), dt.kill(), an(zn);
		for (var n = 0; n < q.length; n += 3) Bn(zn, q[n], q[n + 1]), Bn(zn, q[n], q[n + 2]);
	}, e.enable = function() {
		if (Y = window, X = document, lt = X.documentElement, Z = X.body, J) if (ft = J.utils.toArray, pt = J.utils.clamp, jt = J.core.context || Jt, wt = J.core.suppressOverwrites || Jt, Mt = Y.history.scrollRestoration || "auto", hr = Y.pageYOffset || 0, J.core.globals("ScrollTrigger", e), Z) {
			Ht = 1, Nt = document.createElement("div"), Nt.style.height = "100vh", Nt.style.position = "absolute", fr(), Gt(), st.register(J), e.isTouch = st.isTouch, At = st.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Dt = st.isTouch === 1, Rn(Y, "wheel", Xn), ut = [
				Y,
				X,
				lt,
				Z
			], J.matchMedia ? (e.matchMedia = function(e) {
				var t = J.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, J.addEventListener("matchMediaInit", function() {
				ar(), or();
			}), J.addEventListener("matchMediaRevert", function() {
				return ir();
			}), J.addEventListener("matchMedia", function() {
				mr(0, 1), nr("matchMedia");
			}), J.matchMedia().add("(orientation: portrait)", function() {
				return Zn(), Zn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), Zn(), Rn(X, "scroll", Xn);
			var t = Z.hasAttribute("style"), n = Z.style, r = n.borderTopStyle, i = J.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = jn(Z), Qe.m = Math.round(a.top + Qe.sc()) || 0, Ze.m = Math.round(a.left + Ze.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Z.setAttribute("style", ""), Z.removeAttribute("style")), ht = setInterval(Yn, 250), J.delayedCall(.5, function() {
				return Rt = 0;
			}), Rn(X, "touchcancel", Jt), Rn(Z, "touchstart", Jt), Ln(Rn, X, "pointerdown,touchstart,mousedown", Kt), Ln(Rn, X, "pointerup,touchend,mouseup", qt), vt = J.utils.checkPrefix("transform"), br.push(vt), ct = zt(), dt = J.delayedCall(.2, mr).pause(), St = [
				X,
				"visibilitychange",
				function() {
					var e = Y.innerWidth, t = Y.innerHeight;
					X.hidden ? (bt = e, xt = t) : (bt !== e || xt !== t) && Qn();
				},
				X,
				"DOMContentLoaded",
				mr,
				Y,
				"load",
				mr,
				Y,
				"resize",
				Qn
			], an(Rn), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < q.length; o += 3) Bn(zn, q[o], q[o + 1]), Bn(zn, q[o], q[o + 2]);
		} else X && X.addEventListener("DOMContentLoaded", function t() {
			e.enable(), X.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (Lt = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(ht) || (ht = n) && setInterval(Yn, n), "ignoreMobileResize" in t && (Dt = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (an(zn) || an(Rn, t.autoRefreshEvents || "none"), Tt = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = $e(e), r = q.indexOf(n), i = Qt(n);
		~r && q.splice(r, i ? 6 : 2), t && (i ? ze.unshift(Y, t, Z, t, lt, t) : ze.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (on(e) ? $e(e) : e).getBoundingClientRect(), i = r[n ? _n : vn] * t || 0;
		return n ? r.right - i > 0 && r.left + i < Y.innerWidth : r.bottom - i > 0 && r.top + i < Y.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		on(e) && (e = $e(e));
		var r = e.getBoundingClientRect(), i = r[n ? _n : vn], a = t == null ? i / 2 : t in Un ? Un[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / Y.innerWidth : (r.top + a) / Y.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = $n.killAll || [];
			$n = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? ft(e).forEach(function(e) {
		if (e && e.style) {
			var t = rr.indexOf(e);
			t >= 0 && rr.splice(t, 5), rr.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), J.core.getCache(e), jt());
		}
	}) : rr;
}, $.revert = function(e, t) {
	return or(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? Qn(!0) : (ct || $.register()) && mr(!0);
}, $.update = function(e) {
	return ++q.cache && vr(e === !0 ? 2 : 0);
}, $.clearScrollMemory = sr, $.maxScroll = function(e, t) {
	return rn(e, t ? Ze : Qe);
}, $.getScrollFunc = function(e, t) {
	return tt($e(e), t ? Ze : Qe);
}, $.getById = function(e) {
	return qn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!Vt;
}, $.snapDirectional = Fn, $.addEventListener = function(e, t) {
	var n = $n[e] || ($n[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = $n[e], r = n && n.indexOf(t);
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
	for (s in t) r[s] = s.substr(0, 2) === "on" && sn(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return sn(a) && (a = a(), Rn($, "refresh", function() {
		return a = t.batchMax();
	})), ft(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var Pr = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Fr = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (st.isTouch ? " pinch-zoom" : "") : "none", t === lt && e(Z, n);
}, Ir = {
	auto: 1,
	scroll: 1
}, Lr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || J.core.getCache(i), o = zt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Z && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Ir[(s = On(i)).overflowY] || Ir[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !Qt(i) && (Ir[(s = On(i)).overflowY] || Ir[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, Rr = function(e, t, n, r) {
	return st.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && Lr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && Rn(X, st.eventTypes[0], Vr, !1, !0);
		},
		onDisable: function() {
			return zn(X, st.eventTypes[0], Vr, !0);
		}
	});
}, zr = /(input|label|select|textarea)/i, Br, Vr = function(e) {
	var t = zr.test(e.target.tagName);
	(t || Br) && (e._gsapAllow = !0, Br = t);
}, Hr = function(e) {
	ln(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = $e(e.target) || lt, l = J.core.globals().ScrollSmoother, u = l && l.get(), d = At && (e.content && $e(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = tt(c, Qe), p = tt(c, Ze), m = 1, h = (st.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth, g = 0, _ = sn(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = Rr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = Jt, C = Jt, w = function() {
		s = rn(c, Qe), C = pt(+!!At, s), n && (S = pt(0, rn(c, Ze))), v = lr;
	}, T = function() {
		d._gsap.y = Yt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = Yt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = Yt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = q.cache, vr();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, ee, k, A = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && J.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return At && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = Yt((Y.visualViewport && Y.visualViewport.scale || 1) / h), D.pause(), e !== m && Fr(c, m > 1.01 || !n && "x"), O = p(), ee = f(), w(), v = lr;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) k.restart(!0);
		else {
			q.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Pr(p, i, o, rn(c, Ze)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Pr(f, i, o, rn(c, Qe)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (At && D.vars.scrollY >= s || i >= s - 1) && J.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), zt() - g > 1e3 && (v = 0, g = zt());
	}, e.onChange = function(e, t, r, i, a) {
		if (lr !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? ee + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (ee += c - s), f(c);
		}
		(r || t) && vr();
	}, e.onEnable = function() {
		Fr(c, !n && "x"), $.addEventListener("refresh", A), Rn(Y, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		Fr(c, !0), zn(Y, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new st(e), o.iOS = At, At && !f() && f(1), At && J.ticker.add(Jt), k = o._dc, D = J.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: jr(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: vr,
		onComplete: k.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (sn(e)) return Q.sort(e);
	var t = Y.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Y.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new st(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Et;
	if (e === !0 && Et) return Et.enable();
	if (e === !1) {
		Et && Et.kill(), Et = e;
		return;
	}
	var t = e instanceof st ? e : Hr(e);
	return Et && Et.target === t.target && Et.kill(), Qt(t.target) && (Et = t), t;
}, $.core = {
	_getVelocityProp: nt,
	_inputObserver: Rr,
	_scrollers: q,
	_proxies: ze,
	bridge: {
		ss: function() {
			Vt || nr("scrollStart"), Vt = zt();
		},
		ref: function() {
			return gt;
		}
	}
}, Zt() && J.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var Ur = "h1, h2, h3, h4, h5, h6, p, .u-text-eyebrow, a.button-outlined, a.text-link, button.button-outlined, .editionen_button_wrap a, .quote-block, .news_event .intro_date_infos > .u-p-small, .news_highlight_section .intro_date_infos > .u-p-small", Wr = ".w-richtext, .rich-text", Gr = [
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
].join(", "), Kr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", qr = "data-reveal-pending", Jr = "data-reveal-ready", Yr = {
	y: 20,
	opacity: 0
}, Xr = {
	y: 0,
	opacity: 1,
	duration: 1,
	ease: "atelier-fade-up"
}, Zr = !1;
function Qr(e) {
	var t;
	return e.closest(Gr) || e.closest("[hidden]") || /^\/news\/?$/i.test(x()) && e.closest(".news_event, .news_highlight_section") || /^\/kontakt\/?$/i.test(x()) && e.closest(".contact_section") && !e.matches(".contact_txt > p:last-child") || e.matches("p") && e.closest(".intro_date_infos > .u-p-small") || e.closest(".quote-block") && !e.matches(".quote-block") || e.matches(".atelier_hero_section .atelier_slide_heading, .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_heading") || e.matches(".bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_sub") || e.matches("[data-masked-line-reveal], [data-masked-reveal-label]") || e.matches(".work_about_heading, .editionen_title, .accordion_heading") || e.matches(".atelier_about_section.u-theme-dark5 .atelier_about_h2, .atelier_about_section.u-theme-dark5 .atelier_story_p") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function $r(e) {
	if (e.closest(Kr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function ei(e) {
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
function ti(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.targets.forEach((t, n) => {
		t.style.opacity = e.played ? "1" : e.originals[n].opacity, t.style.transform = e.originals[n].transform;
	}), e.trigger = void 0, e.timeline = void 0;
}
function ni(e) {
	return e.signature = ei(e.element), e.targets.forEach((e) => {
		e.removeAttribute(qr), e.setAttribute(Jr, "");
	}), e.targets;
}
function ri(e) {
	let t = ni(e);
	if (!t.length || e.played) return;
	let n = b.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0, e.targets.forEach((t, n) => {
				t.style.transform = e.originals[n].transform;
			});
		}
	});
	n.fromTo(t, Yr, Xr), e.timeline = n, e.trigger = $.create({
		trigger: e.element,
		start: e.targets.some((e) => e.matches("p")) ? "top 75%" : "top 90%",
		end: "bottom 0%",
		invalidateOnRefresh: !1,
		animation: n
	});
}
function ii(e, t) {
	e.forEach((e, n) => {
		let r = ni(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, Yr, Xr, .6 + n * .12 + i);
	}), t.call(() => {
		e.forEach((e) => e.targets.forEach((t, n) => {
			t.style.transform = e.originals[n].transform;
		}));
	});
}
function ai() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function oi(e = document) {
	var t;
	if (Zr || u()) return;
	Zr = !0, b.registerPlugin($, Ce), Ce.create("atelier-fade-up", ".33,1,.68,1");
	let n = [], r = /* @__PURE__ */ new WeakSet(), i, a, s = 0, c = 0, l = !1, d = !1, f = () => {
		let t = /* @__PURE__ */ new Map();
		o(Ur, e).filter(Qr).forEach((e) => {
			var n;
			let i = e.matches("p") ? e.closest(Wr) : null, a = i == null ? e : i;
			r.has(a) || t.set(a, [...(n = t.get(a)) == null ? [] : n, e]);
		}), /^\/news\/?$/i.test(x()) && o(".news_event", e).forEach((e) => {
			var n;
			if (r.has(e)) return;
			let i = e.querySelector(".intro_content_about"), a = e.querySelector(".intro_date"), o = [...Array.from((n = i == null ? void 0 : i.children) == null ? [] : n).filter((e) => e instanceof HTMLElement), ...a ? [a] : []];
			i && a && o.length && t.set(e, o);
		}), t.forEach((e, t) => {
			r.add(t);
			let i = {
				element: t,
				targets: e,
				hero: !l && $r(t),
				played: !1,
				signature: "",
				originals: e.map((e) => ({
					opacity: e.style.opacity,
					transform: e.style.transform
				}))
			};
			n.push(i), i.targets.forEach((e) => e.setAttribute(qr, "")), l && (ri(i), a == null || a.observe(i.element));
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
		})), i == null || i.kill(), n.forEach(ti), i = b.timeline({ paused: !0 }), ii(n.filter((e) => e.hero && e.element.isConnected), i), n.filter((e) => !e.hero && e.element.isConnected).forEach(ri), !d && i.duration() > 0 && (i.call(() => {
			d = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, h = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, n.some((e) => e.element.isConnected && ei(e.element) !== e.signature) && m();
		}));
	};
	Promise.all([ai(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		f(), l = !0, m(), a = new ResizeObserver(h), n.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", h, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", m);
	}), window.addEventListener("pagehide", () => {
		var e;
		p.disconnect(), window.cancelAnimationFrame(c), window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), n.forEach(ti), window.removeEventListener("resize", h), (e = document.fonts) == null || e.removeEventListener("loadingdone", m), n.forEach((e) => e.targets.forEach((e) => e.removeAttribute(qr)));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var si = "[data-lightbox-src]", ci = "js-lightbox", li = `.${ci}`, ui = `${si}, ${li}`, di = "[data-site-lightbox]", fi = "[data-lightbox-close]", pi = "[data-lightbox-prev]", mi = "[data-lightbox-next]", hi = "[data-lightbox-auto-icon]", gi = "site-lightbox-trigger", _i = "site-lightbox-trigger__image", vi = "site-lightbox-trigger__icon", yi = "w-dyn-bind-empty", bi = "/plugins/Basic/assets/placeholder.", xi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Si = !1, Ci = null, wi = null, Ti = [], Ei = 0, Di = !1, Oi = null;
function ki(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return Ai(e);
	let n = s("img", e);
	return n ? Ai(n) : "";
}
function Ai(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(yi) || t.includes(bi) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ji(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Mi(e) {
	let t = ki(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		credit: r(e, "data-lightbox-credit"),
		alt: ji(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function Ni(e) {
	let t = Mi(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(ui).filter((e) => r(e, "data-lightbox-group") === t.group).map(Mi).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function Pi() {
	let e = document.createElement("span");
	return e.className = vi, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = xi, e;
}
function Fi(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function Ii(e) {
	if (!Fi(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Ci == null ? void 0 : Ci.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Li(e) {
	if (e.closest(`.${gi}`) || !ki(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${gi} ${ci}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(ci), e.classList.add(_i), e.before(t), t.append(e, Pi()), Ii(t);
}
function Ri(e) {
	if (e instanceof HTMLImageElement) {
		Li(e);
		return;
	}
	ki(e).trim() && (e.classList.add(gi), Ii(e), s(hi, e) || e.append(Pi()));
}
function zi() {
	o(li).forEach(Ri);
}
function Bi(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function Vi() {
	var e, t, n, r, i, a;
	if (wi) return Hi(wi), wi;
	let o = s(di), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = Ci == null ? void 0 : Ci.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = Bi((l = Ci == null ? void 0 : Ci.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = Bi((u = Ci == null ? void 0 : Ci.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = Bi((d = Ci == null ? void 0 : Ci.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = s(fi, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(pi, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(mi, c)) == null ? document.createElement("button") : a
	};
	return wi = m, Hi(m), !o && !document.body.contains(c) && document.body.append(c), m;
}
function Hi(e) {
	var t, n, r, i;
	let a = (t = Ci == null ? void 0 : Ci.t("close", "Close")) == null ? "Close" : t, o = (n = Ci == null ? void 0 : Ci.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Ci == null ? void 0 : Ci.t("next", "Next")) == null ? "Next" : r, c = (i = Ci == null ? void 0 : Ci.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function Ui() {
	let e = Vi(), t = Ti[Ei];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = Ti.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(Ei), e.root.dataset.lightboxCount = String(Ti.length);
}
function Wi(e) {
	let t = Vi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function Gi(e) {
	Ti.length < 2 || (Ei = (e + Ti.length) % Ti.length, Ui());
}
function Ki() {
	Gi(Ei + 1);
}
function qi() {
	Gi(Ei - 1);
}
function Ji(e) {
	var t;
	let n = Ni(e);
	if (!n) return;
	let r = Di;
	Ti = n.items, Ei = n.index, Oi = e, Di = !0, Ui(), Wi(!0), r || p();
	let i = Vi();
	m(i.closeButton || i.root);
	let a = Ti[Ei];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: Ei,
		count: Ti.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function Yi() {
	var t;
	if (!Di || !wi) return;
	let r = wi, i = Oi, a = (t = Ti[Ei]) == null ? null : t;
	Wi(!1), n(), Di = !1, Ti = [], Ei = 0, Oi = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function Xi(e) {
	if (!(!Di || !wi)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), Yi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), Ki();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), qi();
			return;
		}
		y(wi.root, e);
	}
}
function Zi(e) {
	!Di || !wi || e.target === wi.root && Yi();
}
function Qi(e) {
	return Ci = e.i18n, zi(), Si || (g(document, "click", ui, (e, t) => {
		e.preventDefault(), Ji(t);
	}), g(document, "keydown", li, (e, t) => {
		Fi(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Ji(t));
	}), g(document, "click", fi, (e) => {
		e.preventDefault(), Yi();
	}), g(document, "click", pi, (e) => {
		e.preventDefault(), qi();
	}), g(document, "click", mi, (e) => {
		e.preventDefault(), Ki();
	}), document.addEventListener("click", Zi), document.addEventListener("keydown", Xi, !0), Si = !0), {
		openLightbox: Ji,
		closeLightbox: Yi
	};
}
//#endregion
//#region src/modules/modal-image.ts
function $i(e, t, n) {
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
var ea = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Set();
function ra(e) {
	try {
		return new URL(e, document.baseURI).href;
	} catch (t) {
		return e;
	}
}
function ia(e, t) {
	return `${e}\n${t}`;
}
function aa(e) {
	return new Promise((t) => {
		let n = new Image();
		n.loading = "eager", n.onload = () => {
			typeof n.decode == "function" ? n.decode().then(() => {
				na.add(ra(e)), t(!0);
			}, () => t(!1)) : (na.add(ra(e)), t(!0));
		}, n.onerror = () => t(!1), n.src = e;
	});
}
function oa(e, t) {
	let n = ia(e, t), r = ea.get(n);
	if (r) return r;
	let i = (async () => {
		let r = await aa(e) ? e : t;
		return r !== e && await aa(t), ta.set(n, r), r;
	})();
	return ea.set(n, i), i;
}
function sa(e, t) {
	var n;
	return (n = ta.get(ia(e, t))) == null ? e : n;
}
var ca = /* @__PURE__ */ new WeakMap();
function la(e, t, n) {
	var r, i;
	let a = ((r = ca.get(e)) == null ? 0 : r) + 1;
	ca.set(e, a), e.loading = "eager", e.decoding = "async";
	let o = ra((i = t == null ? e.currentSrc : t) == null ? e.src : i), s = e.currentSrc === o && e.complete && e.naturalWidth > 0 && !e.classList.contains("is-image-pending") || na.has(o);
	s ? e.classList.contains("is-image-pending") && e.classList.remove("is-image-pending") : e.classList.add("is-image-pending");
	let c = () => {
		(typeof e.decode == "function" ? e.decode().catch(() => void 0) : Promise.resolve()).then(() => {
			ca.get(e) === a && e.naturalWidth > 0 && (na.add(e.currentSrc || e.src), e.classList.remove("is-image-pending"));
		});
	};
	e.onload = c, e.onerror = () => {
		if (ca.get(e) !== a || !n) return;
		e.classList.add("is-image-pending");
		let t = n;
		n = void 0, e.src = t;
	}, t !== void 0 && e.src !== o && (e.src = t), !s && e.complete && e.naturalWidth > 0 && e.currentSrc === o && c();
}
function ua(e) {
	var t;
	ca.set(e, ((t = ca.get(e)) == null ? 0 : t) + 1), e.onload = null, e.onerror = null, e.classList.remove("is-image-pending"), e.removeAttribute("src");
}
function da(e, t, n, r) {
	let i = sa($i(t, n, r), t);
	la(e, i, i === t ? void 0 : t);
}
var fa = /* @__PURE__ */ new Set([
	"6a7db30517820876cd23f469",
	"6a7db3187795b95db7804762",
	"6a7db33f5031a1007e109876",
	"6a7db3495031a1007e10a89e",
	"6a7db34bd247654adf43324d"
]);
function pa(e, t) {
	var n;
	let r = (n = e.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	return r && fa.has(r) ? new URL("../assets/modal-work-thumbnails/" + r + ".webp", import.meta.url).href : $i(e, t, 500);
}
//#endregion
//#region src/modules/modal.ts
var ma = "[data-modal]", ha = "[data-modal-content]", ga = "[data-modal-open]", _a = "[data-modal-close]", va = "a[href^=\"#modal:\"]", ya = "#modal:", ba = 460, xa = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Sa = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ca = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", wa = !1, Ta = !0, Ea = null, Da = null, Oa = "", ka = null, Aa = null, ja = /* @__PURE__ */ new Map();
function Ma(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(ya) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Na() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(_a),
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
	return t.closeButton.innerHTML = xa, t.lightboxIcon.innerHTML = Sa, Fa(t), t;
}
function Pa() {
	return (!Da || !document.body.contains(Da.root)) && (Da = Na()), Fa(Da), Da;
}
function Fa(e) {
	var t, n;
	let r = (t = Ea == null ? void 0 : Ea.t("close", "Close")) == null ? "Close" : t, i = (n = Ea == null ? void 0 : Ea.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Ia(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function La(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p;
	let m = e.querySelector("[data-modal-work]");
	if (!m) return null;
	let h = Ia(m, "[data-works-thumbnail]"), g = (t = (n = (r = m.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = m.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, _ = (a = (o = (s = m.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = m.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, v = (l = (u = (d = m.getAttribute("data-works-href")) == null ? m.getAttribute("data-works-url") : d) == null ? (f = m.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, y = C(h);
	return !g && !y && !v ? null : {
		title: g,
		year: _,
		thumbnail: y,
		thumbnailSrcset: (p = h == null ? void 0 : h.getAttribute("srcset")) == null ? void 0 : p,
		thumbnailAlt: (h == null ? void 0 : h.alt) || g,
		href: v
	};
}
function Ra(e) {
	var t, n, r, i;
	let a = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = Ia(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: C(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let s = Ia(e, "[data-modal-image]"), c = C(s);
	return c ? [{
		src: c,
		srcset: (t = s == null ? void 0 : s.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = s == null ? void 0 : s.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function za(e) {
	var t, n, i, a, o, s, c, l, u, d;
	let f = r(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, h = Ra(e), g = h[0], _ = e.querySelector("[data-modal-body]");
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
		work: La(e),
		gallery: h
	};
}
function Ba(e) {
	var t, n, i, a, o, s, c, l, u, d, f, p, m;
	let h = r(e, "data-modal");
	if (!h) return null;
	let g = e.querySelector(".fwm-modal__image"), _ = C(g), v = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, y = (i = e.closest(".w-dyn-item")) == null ? (a = e.closest(".w-embed")) == null ? void 0 : a.parentElement : i, b = y ? Array.from(y.querySelectorAll("[data-modal-rich-text]")).find((t) => t.closest(".w-dyn-item") === e.closest(".w-dyn-item")) : void 0, x = (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o;
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
function Va() {
	o(ha).forEach((e) => {
		let t = za(e);
		t && ja.set(t.id, t);
	}), o(ma).forEach((e) => {
		let t = Ba(e);
		t && ja.set(t.id, t), e.remove();
	});
}
function Ha(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(ha).find((e) => r(e, "data-modal-content") === n), a = i ? za(i) : null;
	return a && ja.set(n, a), (t = a == null ? ja.get(n) : a) == null ? null : t;
}
function Ua(e) {
	try {
		let t = new URL(e, document.baseURI), n = t.pathname.match(/^\/(?:en\/)?werke\/([^/]+)\/?$/);
		if (!n) return e;
		let r = new URL(S("/werk-ueberblick", t.pathname), document.baseURI);
		return r.searchParams.set("work", decodeURIComponent(n[1])), r.hash = "werke", `${r.pathname}${r.search}${r.hash}`;
	} catch (t) {
		return e;
	}
}
function Wa(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", Ua(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.alt = e.thumbnailAlt;
		let n = sa(pa(e.thumbnail, e.thumbnailSrcset), e.thumbnail);
		la(t, n, n === e.thumbnail ? void 0 : e.thumbnail), a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = Ca, o.append(e);
	}
	return i.append(o), i;
}
function Ga(e) {
	let t = document.createElement("a"), n = document.createElement("img"), r = document.createElement("span"), i = document.createElement("span");
	return t.className = "fwm-modal__image-link", t.href = e.src, t.setAttribute("data-lightbox-src", e.src), t.setAttribute("data-lightbox-caption", e.caption), t.setAttribute("data-lightbox-alt", e.alt), t.classList.toggle("has-caption", e.caption.length > 0), n.className = "fwm-modal__image", n.alt = e.alt, da(n, e.src, e.srcset, 500), r.className = "fwm-modal__lightbox-icon", r.setAttribute("aria-hidden", "true"), r.innerHTML = Sa, i.className = "fwm-modal__caption", i.textContent = e.caption, i.hidden = e.caption.length === 0, t.append(n, r, i), t;
}
function Ka(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function qa(e, t) {
	e.innerHTML = t, e.querySelectorAll("img[src]").forEach((e) => la(e)), e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function Ja(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? da(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : ua(e.image), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, qa(e.text, t.html), Ka(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t) => e.gallery.append(Ga(t)));
}
function Ya(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), ua(e.image), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, qa(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(Wa(t.work)), o.forEach((t) => {
		e.gallery.append(Ga(t));
	});
}
function Xa(e) {
	let t = Pa();
	return e.layout === "context" ? Ya(t, e) : Ja(t, e), t;
}
function Za(e) {
	let t = [], n = (e, n) => {
		t.push(oa($i(e.src, e.srcset, n), e.src));
	};
	if (e.layout === "context") {
		var r, i;
		(r = e.work) != null && r.thumbnail && t.push(oa(pa(e.work.thumbnail, e.work.thumbnailSrcset), e.work.thumbnail)), ((i = e.gallery) != null && i.length ? e.gallery : e.image ? [{
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
			t.push(oa($i(e.image, (o = e.imageSrcset) == null ? (s = e.gallery) == null || (s = s[0]) == null ? void 0 : s.srcset : o, 1080), e.image));
		}
		(a = e.gallery) == null || a.slice(1).filter((e) => e.src).forEach((e) => n(e, 500));
	}
	return t;
}
function Qa(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function $a(e) {
	Aa !== null && (window.clearTimeout(Aa), Aa = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function eo(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Aa = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Aa = null;
	}, u() ? 0 : ba), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function to(e, t) {
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
	if (!_.id || t && Oa === _.id && t === ka) return;
	Oa && ro(), ja.set(_.id, _);
	let v = t == null ? c() : t, y = Pa();
	Aa !== null && (window.clearTimeout(Aa), Aa = null, y.root.hidden = !0, y.root.classList.remove("is-active", "is-visible")), Xa(_), ka = v, Oa = _.id, $a(y), p(), Qa(y), d(y.root, "site:modal-open", {
		id: Oa,
		modal: y.root,
		content: _,
		trigger: t == null ? null : t
	});
}
function no(e, t) {
	let n = Ha(e);
	n && to(n, t);
}
function ro() {
	if (!Oa || !Da) return;
	let t = Oa, r = ka;
	eo(Da), n(), Oa = "", ka = null, d(Da.root, "site:modal-close", {
		id: t,
		modal: Da.root
	}), e(r);
}
function io(e) {
	if (!(!Oa || !Da) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), ro();
			return;
		}
		y(Da.panel, e);
	}
}
function ao(e) {
	if (!Ta || !Oa || !Da) return;
	let t = e.target;
	!i(t) || t !== Da.root || ro();
}
function oo(e) {
	var n;
	if (Ta = (n = e.closeOnBackdrop) == null || n, Ea = e.i18n, Va(), Pa(), !wa) {
		let e = (e) => {
			let n = Ha(e.matches(ga) ? t(e, "data-modal-open") : Ma(e));
			n && Za(n);
		};
		for (let t of [
			"pointerover",
			"pointerdown",
			"focusin"
		]) g(document, t, `${ga}, ${va}`, (t, n) => {
			e(n);
		});
		g(document, "click", `${ga}, ${va}`, (e, n) => {
			e.preventDefault(), no(n.matches(ga) ? t(n, "data-modal-open") : Ma(n), n);
		}), g(document, "click", _a, (e, t) => {
			Da != null && Da.root.contains(t) && (e.preventDefault(), ro());
		}), document.addEventListener("click", ao), document.addEventListener("keydown", io), wa = !0;
	}
	return {
		openModal: no,
		openContentModal: to,
		closeModal: ro
	};
}
//#endregion
//#region src/modules/site-menu.ts
var so = "[data-site-menu]", co = "[data-site-menu-panel]", lo = "[data-site-menu-toggle]", uo = "[data-site-menu-toggle-label]", fo = "[data-site-menu-toggle-label-text]", po = "[data-site-menu-toggle-label-ghost]", mo = "data-site-menu-toggle-label-text", ho = "data-site-menu-toggle-label-ghost", go = "[data-site-menu-link]", _o = "[data-site-menu-indicator]", vo = "is-active", yo = "is-open", bo = "is-ready", xo = "data-site-menu-open-label", So = "data-site-menu-closed-label", Co = "data-site-menu-current-key", wo = "data-site-menu-label", To = "data-site-menu-key", Eo = "data-site-menu-original-tabindex", Do = "CLOSE", Oo = "MENU", ko = .42, Ao = ".site-menu__brand, [data-site-menu-item], .site-menu__divider", jo = "site-menu__divider", Mo = ".site-menu__link--small, .site-menu__footer-link", No = "[data-site-menu-toggle], .site-menu__language, .site-menu__languages", Po = "site-menu__line", Fo = "site-menu__line-in", Io = {
	open: .513,
	close: .378,
	transition: .54
};
b.registerPlugin(Ce);
var Lo = Ce.create("site-menu-panel", "0.7,0,0.08,1"), Ro = [], zo = !1;
function Bo(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Vo(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Bo(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Ho(e, t) {
	return t ? r(e, To) === t : !1;
}
function Uo(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Ho(e, r(t, Co) || ((n = document.documentElement.getAttribute(Co)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(Co)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = Vo(e);
	return a ? a === Bo(window.location.pathname) : !1;
}
function Wo(e) {
	var t, n;
	return r(e, wo) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function Go(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(vo) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Uo(t, e.root)) : t;
	return n ? Wo(n) : "";
}
function Ko(e) {
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
			Go(e),
			r(e.root, So) || Oo,
			r(e.root, xo) || Do
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
function qo(e) {
	var t, n;
	let r = s(fo, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(mo, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Jo(e) {
	o(po, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Yo(e, t = !0) {
	var n, i;
	let a = r(e.root, xo) || Do, o = r(e.root, So) || Oo, s = Go(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = qo(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), Jo(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(ho, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: ko,
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
function Xo(e) {
	let t = [], n = 0, r = 0, i = 0;
	return o(Ao, e.panel).forEach((e) => {
		if (e.closest(No)) return;
		if (e.classList.contains(jo)) {
			e.style.setProperty("--i", String(i)), e.style.setProperty("--g", "0");
			return;
		}
		if (e.querySelector(`:scope > .${Po}`)) return;
		let a = Array.from(e.childNodes).filter((e) => !(e instanceof HTMLElement && e.hasAttribute("data-site-menu-indicator")));
		if (!a.some((e) => {
			var t;
			return (t = e.textContent) == null ? void 0 : t.trim();
		})) return;
		let o = document.createElement("span"), s = document.createElement("span");
		o.className = Po, s.className = Fo, e.insertBefore(o, a[0]), a.forEach((e) => s.appendChild(e)), o.appendChild(s), t.push(o), e.matches(Mo) ? (e.style.setProperty("--g", "1"), e.style.setProperty("--i", String(r++))) : (i = n, e.style.setProperty("--g", "0"), e.style.setProperty("--i", String(n++)));
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
function Zo(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Eo);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Eo) && e.hasAttribute("tabindex") && e.setAttribute(Eo, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Qo(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(yo, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Zo(e, t), Yo(e, n);
}
function $o(e, t, n, r) {
	b.killTweensOf(e.panel), b.set(e.panel, { clearProps: "height" });
	let i = e.panel.getBoundingClientRect().height;
	if (!u()) return b.fromTo(e.panel, { height: n }, {
		height: i,
		duration: t ? Io.open : Io.close,
		ease: Lo,
		onComplete: () => {
			b.set(e.panel, { clearProps: "height" }), r == null || r();
		}
	});
}
function es(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Qo(e, !0), $o(e, !0, t);
}
function ts(e, t) {
	if (!e.isOpen) return;
	let n = e.panel.getBoundingClientRect().height;
	Qo(e, !1);
	let r = $o(e, !1, n, t);
	return r || t == null || t(), r;
}
function ns(e, t) {
	let n = Ro.find((t) => t.root === e && t.isOpen);
	if (!n) return !1;
	let r = !1, i = () => {
		r || (r = !0, t());
	}, a = ts(n, i);
	return a == null || a.eventCallback("onUpdate", () => {
		a.progress() >= .42 && i();
	}), !0;
}
function rs(e) {
	e.isOpen ? ts(e) : es(e);
}
function is(e) {
	e.links.forEach((t) => {
		let n = Uo(t, e.root), r = s(_o, t);
		t.classList.toggle(vo, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function as(e) {
	var t;
	let n = s(co, e), r = s(lo, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(uo, r)) == null ? s(uo, e) : t,
		links: o(go, e),
		isOpen: e.classList.contains(yo),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Ro.length + 1}`), r.setAttribute("aria-controls", n.id), i.cleanup.push(Xo(i)), is(i), Qo(i, i.isOpen, !1), i.cleanup.push(Ko(i)), e.classList.add(bo);
	let a = (e) => {
		e.preventDefault(), rs(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || ts(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (ts(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(go) || ts(i);
	}, d = () => {
		i.isHovered = !0, Yo(i);
	}, f = () => {
		i.isHovered = !1, Yo(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function os(e = document) {
	if (zo && e === document) return () => void 0;
	e === document && (zo = !0);
	let t = o(so, e).map(as).filter((e) => !!e);
	return Ro.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(bo, yo);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(fo, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), Jo(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Zo(e, !0);
		});
	};
}
//#endregion
//#region src/modules/page-transition.ts
var ss = {
	navigate: 160,
	revealStart: 0,
	reset: 180,
	watchdog: 6e3
}, cs = [
	".top_bar_section",
	".werk_hero_dots",
	".werk_hero_slide .u-slide-info"
], ls = {
	delay: 225,
	stagger: 125,
	fade: 700,
	menuGap: 80,
	menu: 550
}, us = "pt", ds = "[data-page-transition-overlay], .page-transition-overlay", fs = "is-page-transition-pending", ps = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), ms = !1, hs = !1, gs = [], _s = /* @__PURE__ */ new Set();
function vs(e) {
	if (e.closest(ps) || e.target && e.target !== "_self") return;
	let t = h(e);
	if (!t || t.hash || _s.has(t.href)) return;
	_s.add(t.href);
	let n = document.createElement("link");
	n.rel = "prefetch", n.href = t.href, document.head.append(n);
}
function ys(e, t) {
	gs.push(window.setTimeout(e, t));
}
function bs() {
	gs.forEach((e) => window.clearTimeout(e)), gs = [];
}
function xs() {
	try {
		return !!window.sessionStorage.getItem(us);
	} catch (e) {
		return !1;
	}
}
function Ss() {
	try {
		window.sessionStorage.removeItem(us);
	} catch (e) {}
	document.documentElement.classList.remove(fs, "is-page-transition-boot");
}
function Cs() {
	var e;
	let t = document.querySelector(ds);
	return t || (t = document.createElement("div"), document.body.append(t)), t.classList.add("curtain", "page-transition-overlay"), t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), (e = t.querySelector(".page-transition-overlay__title")) == null || e.remove(), t;
}
function ws() {
	return document.querySelector("main, [role=\"main\"]");
}
function Ts(e) {
	e && (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), e.addEventListener("blur", () => e.removeAttribute("tabindex"), { once: !0 })), e.focus({ preventScroll: !0 }));
}
function Es(e) {
	bs(), e.classList.add("is-resetting"), e.classList.remove("is-covering", "is-covered", "is-uncovering"), e.setAttribute("aria-hidden", "true"), document.documentElement.classList.remove("is-page-transition-entering", "is-page-transition-covering"), Ss(), hs = !1, window.requestAnimationFrame(() => e.classList.remove("is-resetting"));
}
function Ds(e, t) {
	if (hs = !0, u()) {
		Ts(t), Es(e);
		return;
	}
	e.setAttribute("aria-hidden", "false"), e.classList.add("is-covered"), document.documentElement.classList.add("is-page-transition-entering"), ys(() => e.classList.add("is-uncovering"), ss.revealStart), ys(() => {
		Ts(t), Es(e);
	}, ss.reset);
}
function Os(e, t) {
	hs = !0, t.setAttribute("aria-hidden", "false");
	try {
		window.sessionStorage.setItem(us, "1");
	} catch (e) {}
	document.documentElement.classList.add("is-page-transition-covering"), t.classList.add("is-covering"), ys(() => {
		window.location.href = e.href;
	}, ss.navigate), ys(() => {
		window.location.href = e.href;
	}, ss.watchdog);
}
function ks() {
	var e;
	let t = x();
	if (!((e = window.__sitePreloader) != null && e.active) || u() || t === "/") return;
	let n = /^\/(?:biografie|editionen|news|werk-ueberblick|kontakt)\/?$/i.test(t), r = /^\/werk-ueberblick\/?$/i.test(t), i = cs.map((e) => n && e === ".top_bar_section" || r ? [] : Array.from(document.querySelectorAll(e))), a = Array.from(document.querySelectorAll("[data-site-menu]"));
	[...i.flat(), ...a].forEach((e) => {
		e.style.opacity = "0";
	}), w(() => {
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
			t.forEach((t) => e(t, [{ opacity: 0 }, { opacity: 1 }], ls.delay + n * ls.stagger, ls.fade));
		});
		let t = i.reduce((e, t, n) => t.length ? n : e, -1), n = t < 0 ? 0 : ls.delay + t * ls.stagger + ls.fade + ls.menuGap;
		a.forEach((t) => {
			let r = Math.max(0, window.innerHeight - t.getBoundingClientRect().top) + 8;
			e(t, [{
				opacity: 1,
				transform: `translate3d(0, ${r}px, 0)`
			}, {
				opacity: 1,
				transform: "translate3d(0, 0, 0)"
			}], n, ls.menu);
		});
	});
}
function As() {
	if (ms) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", As, { once: !0 });
		return;
	}
	ms = !0;
	let e = Cs(), t = ws();
	xs() && document.documentElement.classList.contains(fs) && !e.hasAttribute("data-page-transition-managed") ? Ds(e, t) : ks();
	let n = (e) => {
		let t = e.target instanceof Element ? e.target.closest("a[href]") : null;
		t && vs(t);
	};
	document.addEventListener("pointerover", n, { passive: !0 }), document.addEventListener("focusin", n), document.addEventListener("click", (e) => {
		!(e.target instanceof Element) || !e.target.closest("[data-site-menu-toggle]") || document.querySelectorAll("[data-site-menu] a[href]").forEach(vs);
	}, !0), document.addEventListener("click", (t) => {
		var n;
		let r = t.target instanceof Element ? t.target.closest("a[href]") : null;
		if (!r || t.defaultPrevented || l(t)) return;
		if (hs) {
			t.preventDefault();
			return;
		}
		if (r.closest(ps) || r.target && r.target !== "_self") return;
		let i = h(r);
		if (!i || i.hash || u() || (n = window.__sitePreloader) != null && n.active) return;
		t.preventDefault();
		let a = r.closest("[data-site-menu]");
		a && (hs = !0, ns(a, () => Os(i, e))) || Os(i, e);
	}, !0), window.addEventListener("pageshow", (t) => {
		t.persisted && Es(e);
	});
}
//#endregion
//#region src/modules/parallax.ts
var js = "[data-parallax]", Ms = "data-parallax", Ns = "data-parallax-ready", Ps = "fw-parallax-window", Fs = "fw-parallax-window--self-sized", Is = "fw-parallax-inner", Ls = 60, Rs = 160, zs = ".site-lightbox-trigger", Bs = 1, Vs = !1;
function Hs() {
	Vs || (Vs = !0, b.registerPlugin($));
}
function Us(e) {
	let t = e.getAttribute(Ms);
	if (t === null || t.trim() === "") return Ls;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.sign(n) * Math.min(Math.abs(n), Rs) : Ls;
}
function Ws(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Gs(e, t) {
	var n;
	let r = (n = e.closest(zs)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(Ps)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(Ps);
	let a = document.createElement("span");
	if (a.className = Is, a.style.top = `${-t}px`, a.style.bottom = `${-t}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(Ps), null;
		r.classList.add(Fs), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function Ks(e, t) {
	return t < 0 && e.getBoundingClientRect().top + window.scrollY < window.innerHeight;
}
function qs(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e), r = Ks(e, t);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Js(e)
		});
		return;
	}
	n.forEach((n) => {
		Ws(n).then(() => {
			if (!n.isConnected) return;
			let i = Gs(n, r ? 0 : Math.abs(t) / 2 + Bs);
			if (i) {
				if (r) {
					b.fromTo(i, { y: 0 }, {
						y: () => Math.min(Math.abs(t), i.offsetHeight * .5),
						ease: "none",
						scrollTrigger: {
							...Js(e),
							start: "top top"
						}
					}), $.refresh();
					return;
				}
				b.fromTo(i, { y: t / 2 }, {
					y: -t / 2,
					ease: "none",
					scrollTrigger: Js(e)
				}), $.refresh();
			}
		});
	});
}
function Js(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function Ys(e = document) {
	let t = o(js, e).filter((e) => !e.hasAttribute(Ns));
	t.length === 0 || u() || (Hs(), t.forEach((e) => {
		let t = Us(e);
		t !== 0 && (e.setAttribute(Ns, ""), qs(e, t));
	}));
}
//#endregion
//#region src/modules/more-arrows.ts
var Xs = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function Zs(e) {
	var t, n;
	if (!/^mehr\s+erfahren$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = Xs);
}
function Qs(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && Zs(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(Zs);
}
function $s() {
	Qs(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && Qs(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/outlined-buttons.ts
var ec = ".btn, .button-outlined";
function tc() {
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
		e instanceof HTMLElement && e.matches(ec) && t(e), e.querySelectorAll(ec).forEach(t);
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
var nc = ".werk_hero_slider", rc = ".werk_hero_track";
function ic(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function ac(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function oc(e) {
	let t = e.closest(nc), n = t == null ? void 0 : t.querySelector(rc);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = ic(e, n), i = ac(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function sc(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function cc(e, t) {
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
function lc(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function uc(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function dc(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function fc(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function pc(e, t) {
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
function mc() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return lc(e, t);
				let r = new Image();
				return r.src = e, cc(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = dc(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = uc(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || fc(n) ? "critical" : "warm" : i,
			load: (e) => cc(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && oc(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = uc(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = dc(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => pc(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", pc(r, e))
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
			let t = uc(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => sc(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function hc(e) {
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
async function gc(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await sc(a.shift().load(n.signal), n.signal);
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
var _c = /* @__PURE__ */ new WeakSet(), vc = 5100, yc = 450, bc = 375, xc = 975;
function Sc(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function Cc(e) {
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
function wc(e, t) {
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
function Tc(e) {
	let t = u(), n = !1, r = !1, i = 0, a = 0, o, s = new Promise((e) => {
		o = e;
	}), c = (t) => {
		if (n) return;
		let r = Math.min(1, (t - a) / vc);
		wc(e, (.6 * r + .4 * Sc(r)) * 100), r === 1 ? o() : i = window.requestAnimationFrame(c);
	};
	return {
		start: () => {
			r || n || (r = !0, a = performance.now(), t ? (wc(e, 100), o()) : i = window.requestAnimationFrame(c));
		},
		complete: s,
		stop: () => {
			n = !0, window.cancelAnimationFrame(i);
		}
	};
}
function Ec(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function Dc(e) {
	return document.readyState === "complete" || e.aborted ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			window.removeEventListener("load", n), e.removeEventListener("abort", n), t();
		};
		window.addEventListener("load", n, { once: !0 }), e.addEventListener("abort", n, { once: !0 });
	});
}
async function Oc(e, t) {
	t.aborted || (document.documentElement.classList.add(E), e.classList.add("is-fading"), await Ec(u() ? 0 : bc, t), !t.aborted && (e.classList.add("is-curtain"), await Ec(u() ? 0 : xc, t)));
}
function kc() {
	var e, t;
	let n = window.__sitePreloader;
	if (!(n != null && n.active) || _c.has(n)) return;
	_c.add(n);
	let r = document.querySelector(T);
	if (!r) {
		n.release();
		return;
	}
	let i = new AbortController(), a = Tc(r);
	(e = n.allowExit) == null || e.call(n), ((t = n.introReady) == null ? Promise.resolve() : t).then(() => {
		n.active && a.start();
	}), n.cleanup.push(() => {
		i.abort(), a.stop();
		let e = r.querySelectorAll(".site-preloader__track");
		e.length && b.killTweensOf(e);
	});
	let o = async () => {
		if (await hc(i.signal), !n.active) return;
		let e = mc(), t = e.filter((e) => e.priority === "critical");
		await Promise.all(t.map(async (e) => {
			await sc(Promise.resolve().then(() => e.load(i.signal)), i.signal);
		})), n.active && (await Cc(i.signal), n.active && (await n.introReady, n.active && (await Promise.all([a.complete, Dc(i.signal)]), n.active && (await Ec(u() ? 0 : Math.max(0, D - (Date.now() - n.startedAt)), i.signal), n.active && (await Ec(u() ? 0 : yc, i.signal), n.active && (await Oc(r, i.signal), n.active && (n.release(), gc(e))))))));
	}, s = () => {
		o().catch(n.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Ac = !1, jc = !1;
function Mc() {
	if (jc || u()) return;
	jc = !0;
	let e, t = () => {
		let t = window.lenis;
		if (Ac || !window.__siteLenisManaged || !t) return;
		Ac = !0, b.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		b.ticker.add(n), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			b.ticker.remove(n), t.off("scroll", $.update), Ac = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), Ac || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/modules/site-image-reveal.ts
var Nc = "data-site-image-reveal", Pc = "is-site-image-in", Fc = ".news_event img.intro_img", Ic = ".bio_photo img.bio_media_img, .bio_photo.bio_video .bio_video_trigger img", Lc = [
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
].join(", "), Rc = !1;
function zc() {
	if (Rc || u() || !("IntersectionObserver" in window)) return;
	Rc = !0;
	let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), n = 0, r = (n) => {
		let r = e.get(n);
		if (!r || n.classList.contains(Pc) || t.has(n)) return;
		t.add(n);
		let a = () => {
			t.delete(n), n.isConnected && (n.classList.add(Pc), i.unobserve(n));
		};
		r.complete ? r.naturalWidth && r.decode ? r.decode().then(a, a) : a() : (r.addEventListener("load", () => {
			r.decode ? r.decode().then(a, a) : a();
		}, { once: !0 }), r.addEventListener("error", a, { once: !0 }));
	}, i = new IntersectionObserver((e) => {
		e.forEach((e) => {
			e.isIntersecting && r(e.target);
		});
	}, { threshold: 0 }), a = (t, n, r, a = 0) => {
		t.hasAttribute(Nc) || (t.setAttribute(Nc, r), a && t.style.setProperty("--site-image-delay", `${a}ms`), e.set(t, n), i.observe(t));
	}, o = (e) => {
		if (e.closest("[data-site-image-reveal=\"event\"]")) return;
		let t = e.parentElement;
		t != null && t.classList.contains("img-zoom") || (t = document.createElement("div"), t.className = "img-zoom", e.before(t));
		let n = document.createElement("span");
		n.className = "zoom", n.setAttribute("data-site-event-zoom", ""), t.append(n), n.append(e), a(t, e, "event");
	}, s = () => {
		n = 0;
		let e = x();
		if (/^\/biografie\/?$/i.test(e) && document.querySelectorAll(Ic).forEach((e) => {
			var t;
			let n = (t = e.closest(".site-lightbox-trigger, .bio_video_trigger")) == null ? e : t;
			a(n, e, "bio");
		}), !/^\/atelier\/?$/i.test(e)) {
			if (document.querySelectorAll(Fc).forEach((e) => {
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
				if (t || e.closest(Lc) || e.closest(`[${Nc}]`) || !e.getAttribute("src") && !e.getAttribute("srcset")) return;
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
var Bc = ".work_about_heading, .editionen_title, .accordion_heading", Vc = ".bio_hero_section .bio_hero_sub", Hc = `[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading, ${Vc}, ${Bc}`, Uc = "[data-masked-reveal-label], .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_heading", Wc = "data-masked-reveal-ready", Gc = "data-masked-reveal-complete", Kc = /* @__PURE__ */ new Map(), qc = /* @__PURE__ */ new Set(), Jc, Yc = !1, Xc = window.location.pathname, Zc, Qc = /* @__PURE__ */ new WeakSet();
function $c(e) {
	let t = getComputedStyle(e).getPropertyValue("--masked-reveal-stagger").trim() || "50ms", n = Number.parseFloat(t);
	return Number.isFinite(n) ? t.endsWith("s") && !t.endsWith("ms") ? n * 1e3 : n : 50;
}
async function el(e) {
	let t = document.documentElement, n = /^\/atelier\/?$/i.test(x()) && !!e.closest(".atelier_hero_section") || /^\/biografie\/?$/i.test(x()) && !!e.closest(".bio_hero_section"), r = /^\/editionen\/?$/i.test(x()) && e.matches(".editionen_title") && e.closest(".editionen_item") === document.querySelector(".editionen_item"), i = n || r;
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
function tl(e) {
	e.played || !e.element.isConnected || (e.played = !0, e.element.classList.add("is-masked-reveal-playing"), /^\/atelier\/?$/i.test(x()) && e.element.matches(".atelier_hero_section .atelier_slide_heading") && document.dispatchEvent(new Event("atelier:hero-line-reveal")));
}
function nl(e) {
	var t;
	e.matches(".editionen_title") && ((t = e.closest(".editionen_item")) == null || t.querySelectorAll("[data-edition-content-reveal]").forEach((e) => e.classList.add("is-edition-content-in")));
}
function rl(e, t = !1) {
	let { element: n, text: r, markup: i } = e;
	if (!n.isConnected || !Jc) return;
	let a = e.played && n.hasAttribute(Gc) && !t;
	n.classList.remove("is-masked-reveal-playing"), n.removeAttribute(Gc), n.innerHTML = i;
	try {
		let t = Jc.create(n, { type: "lines" }), i = t.lines.filter((e) => {
			var t;
			return (t = e.textContent) == null ? void 0 : t.trim();
		}).map((e) => Array.from(e.childNodes, (e) => e.cloneNode(!0)));
		if (t.revert(), !i.length) throw Error("No text lines found");
		let s = document.createDocumentFragment(), c = $c(n);
		if (i.forEach((e, t) => {
			t && s.append(document.createTextNode(" "));
			let n = document.createElement("span");
			n.className = "masked-reveal-line", n.setAttribute("aria-hidden", "true");
			let r = document.createElement("span");
			r.className = "masked-reveal-line__text", r.style.setProperty("--masked-reveal-line-delay", `${t * c}ms`), r.append(...e), n.append(r), s.append(n);
		}), n.replaceChildren(s), n.setAttribute("aria-label", r), n.setAttribute(Wc, ""), e.width = n.getBoundingClientRect().width, a) {
			e.played = !0, n.setAttribute(Gc, ""), nl(n);
			return;
		}
		if (e.played = !1, n.getAttribute("data-masked-line-reveal") === "viewport" && "IntersectionObserver" in window) {
			var o;
			(o = e.intersectionObserver) == null || o.disconnect(), e.intersectionObserver = new IntersectionObserver((t, n) => {
				t.some((e) => e.isIntersecting) && (n.disconnect(), tl(e));
			}, { threshold: .1 }), e.intersectionObserver.observe(n);
		} else tl(e);
	} catch (e) {
		n.innerHTML = i, n.removeAttribute(Wc), n.setAttribute(Gc, ""), nl(n);
	}
}
function il(e) {
	var t, n, r, i;
	if (Kc.has(e) || /^\/atelier\/?$/i.test(x()) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim())) return;
	if (e.matches(Bc) && !e.hasAttribute("data-masked-line-reveal") && e.setAttribute("data-masked-line-reveal", "viewport"), e.querySelector("a, button, input, select, textarea, svg, img, canvas, video, iframe")) {
		e.setAttribute(Gc, "");
		return;
	}
	let a = {
		element: e,
		text: ((n = e.innerText) == null ? void 0 : n.replace(/\s+/g, " ").trim()) || e.textContent,
		markup: e.innerHTML,
		width: 0,
		played: !1,
		resizeObserver: new ResizeObserver(() => {
			!a.width || Math.abs(e.getBoundingClientRect().width - a.width) < 1 || e.matches(Vc) && a.played && !e.hasAttribute(Gc) || rl(a);
		})
	};
	Kc.set(e, a), a.resizeObserver.observe(e), Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		(r = document.fonts) == null ? void 0 : r.ready,
		(i = window.__sitePreloader) == null ? void 0 : i.ready,
		el(e)
	]).then(([{ SplitText: t }]) => {
		b.registerPlugin(t), Jc = t, e.isConnected && rl(a);
	}).catch(() => {
		e.setAttribute(Gc, "");
	});
}
function al(e) {
	var t, n, r;
	qc.has(e) || /^\/atelier\/?$/i.test(x()) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim()) || (qc.add(e), Promise.all([
		(n = document.fonts) == null ? void 0 : n.ready,
		(r = window.__sitePreloader) == null ? void 0 : r.ready,
		el(e)
	]).then(() => {
		e.isConnected && e.classList.add("is-masked-reveal-playing");
	}).catch(() => {
		e.setAttribute(Gc, "");
	}));
}
function ol() {
	Kc.forEach((e) => {
		rl(e, !0);
	}), qc.forEach((e) => {
		e.classList.remove("is-masked-reveal-playing"), requestAnimationFrame(() => e.classList.add("is-masked-reveal-playing"));
	});
}
function sl() {
	let e = Xc !== window.location.pathname;
	if (Xc = window.location.pathname, /^\/editionen\/?$/i.test(x(Xc))) {
		var t;
		(t = document.querySelector(".editionen_item")) == null || t.setAttribute("data-edition-first", "");
	}
	document.querySelectorAll(Hc).forEach(il), document.querySelectorAll(Uc).forEach(al), document.querySelectorAll(".editionen_item").forEach((e) => {
		e.querySelectorAll(".editionen_meta, .editionen_note").forEach((t, n) => {
			var r;
			t.hasAttribute("data-edition-content-reveal") || (t.setAttribute("data-edition-content-reveal", ""), t.style.setProperty("--edition-content-delay", `${n * 90}ms`), (r = e.querySelector(".editionen_title")) != null && r.hasAttribute(Gc) && t.classList.add("is-edition-content-in"));
		});
	}), Zc && document.querySelectorAll(".accordion_section .accordion_item").forEach((e, t) => {
		Qc.has(e) || (Qc.add(e), e.style.setProperty("--accordion-line-index", String(t)), e.setAttribute("data-accordion-line-ready", ""), Zc == null || Zc.observe(e));
	}), Kc.forEach((e, t) => {
		var n;
		t.isConnected || (e.resizeObserver.disconnect(), (n = e.intersectionObserver) == null || n.disconnect(), Kc.delete(t));
	}), qc.forEach((e) => {
		e.isConnected || qc.delete(e);
	}), e && ol();
}
function cl() {
	var e;
	Yc || u() || (Yc = !0, "IntersectionObserver" in window && (Zc = new IntersectionObserver((e, t) => {
		e.forEach((e) => {
			if (!e.isIntersecting) return;
			let n = e.target;
			n.classList.add("is-accordion-line-in"), t.unobserve(n);
		});
	}, {
		threshold: 0,
		rootMargin: "0px 0px -5% 0px"
	})), sl(), new MutationObserver(sl).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), (e = document.fonts) == null || e.addEventListener("loadingdone", () => {
		Kc.forEach((e) => {
			e.element.matches(Vc) && e.played && !e.element.hasAttribute(Gc) || rl(e);
		});
	}), window.addEventListener("popstate", sl), window.addEventListener("pageshow", (e) => {
		e.persisted && (ol(), sl());
	}), document.addEventListener("animationend", (e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement) || !t.classList.contains("masked-reveal-line__text")) return;
		let n = t.closest(Hc);
		!n || t !== n.querySelector(".masked-reveal-line:last-of-type > .masked-reveal-line__text") || (n.classList.remove("is-masked-reveal-playing"), n.setAttribute(Gc, ""), nl(n));
	}));
}
//#endregion
//#region src/main.ts
var ll = !1;
kc(), As(), oi(), cl(), Mc();
function ul() {
	if (ll) return;
	ll = !0;
	let e = A();
	if (oo({ i18n: e }), /^\/kontakt\/?$/i.test(x())) {
		var t;
		(t = document.querySelector(".contact_img img.is-contact-image")) == null || t.classList.add("js-lightbox");
	}
	Qi({ i18n: e }), Ys(), os(), oe(), _(), O(), $s(), tc(), zc(), window.SiteInteractions = {
		openModal: no,
		openContentModal: to,
		closeModal: ro,
		openLightbox: Ji,
		closeLightbox: Yi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ul, { once: !0 }) : ul();
//#endregion

//# sourceMappingURL=site-interactions.js.map