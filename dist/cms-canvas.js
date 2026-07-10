//#region src/cms-canvas.ts
var e = "[data-cms-canvas-source]", t = .28, n = .08, r = .12, i = {
	1: [{
		x: 0,
		y: 0
	}],
	2: [{
		x: -1,
		y: 0
	}, {
		x: 1,
		y: 0
	}],
	3: [
		{
			x: 0,
			y: -.9
		},
		{
			x: -1,
			y: .65
		},
		{
			x: 1,
			y: .65
		}
	],
	4: [
		{
			x: -1,
			y: -.7
		},
		{
			x: 1,
			y: -.7
		},
		{
			x: -1,
			y: .7
		},
		{
			x: 1,
			y: .7
		}
	]
};
function a(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function o(e, t, n) {
	var r;
	let i = Number.parseFloat((r = e.getAttribute(t)) == null ? "" : r);
	return Number.isFinite(i) && i > 0 ? i : n;
}
function s(e, t, n, r, i) {
	return y(o(e, t, n), r, i);
}
function c(e, t, n, r, i, a) {
	var o, s;
	let c = Number.parseFloat((o = (s = e.getAttribute(t)) == null ? e.getAttribute(n) : s) == null ? "" : o);
	return Number.isFinite(c) && c > 0 ? y(c, i, a) : r;
}
function l(e, t) {
	return e <= t ? [e, t] : [t, e];
}
function u(e, t, n) {
	let r = e.getAttribute(t);
	return r === null || r === "" ? n : ![
		"false",
		"0",
		"no",
		"off"
	].includes(r.trim().toLowerCase());
}
function d(e) {
	var t;
	let n = ((t = e.getAttribute("data-canvas-item-widths")) == null ? "180,240,300" : t).split(",").map((e) => Number.parseFloat(e.trim())).filter((e) => Number.isFinite(e) && e >= 80);
	return n.length > 0 ? n : [
		180,
		240,
		300
	];
}
function f(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function p(e, t = "") {
	return f(`${e}:${t}`) / 4294967295;
}
function m(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function h(e, t) {
	return e.querySelector(t);
}
function g(e, t) {
	var n, r, i, a, o, s;
	let c = (n = h(e, "[data-canvas-thumbnail]")) == null ? e.querySelector("img") : n, l = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!l) return null;
	let u = m(e, "[data-canvas-title]") || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "", d = ((i = e.getAttribute("data-canvas-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-cms-item-id")) == null ? void 0 : a.trim()) || `canvas-item-${t + 1}-${f(`${u}-${l}`)}`, p = h(e, "[data-canvas-modal-image]"), g = e.querySelector("[data-canvas-modal-body]");
	return {
		id: d,
		title: u,
		thumbnail: l,
		thumbnailAlt: (o = c == null ? void 0 : c.alt) == null ? u : o,
		modal: {
			id: `canvas-${d}`,
			address: m(e, "[data-canvas-modal-address]") || u,
			image: (p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || l,
			imageAlt: (p == null ? void 0 : p.alt) || (c == null ? void 0 : c.alt) || u,
			caption: m(e, "[data-canvas-modal-caption]"),
			html: (s = g == null ? void 0 : g.innerHTML) == null ? "" : s
		}
	};
}
function _(e) {
	return Array.from(e.querySelectorAll("[data-cms-canvas-item]")).map(g).filter((e) => e !== null);
}
function v(e, t, n) {
	return t.some((t) => e.x < t.x + t.width + n && e.x + e.width + n > t.x && e.y < t.y + t.height + n && e.y + e.height + n > t.y);
}
function y(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function b(e, t, n) {
	let r = e.width / 2 - t / 2, i = e.height / 2 - n / 2, a = Math.ceil(Math.max(e.width / Math.max(1, t), e.height / Math.max(1, n)) / 2) + 2, o = [];
	for (let s = 0; s <= a; s += 1) for (let a = -s; a <= s; a += 1) for (let c = -s; c <= s; c += 1) {
		if (Math.max(Math.abs(a), Math.abs(c)) !== s) continue;
		let l = r + c * t, u = i + a * n;
		l < e.padding || u < e.padding || l + t > e.width - e.padding || u + n > e.height - e.padding || o.push({
			x: l,
			y: u
		});
	}
	return o.sort((e, t) => {
		let n = Math.hypot(e.x - r, e.y - i), a = Math.hypot(t.x - r, t.y - i);
		return n === a ? Math.atan2(e.y - i, e.x - r) - Math.atan2(t.y - i, t.x - r) : n - a;
	});
}
function x(e, t, n) {
	var r;
	let i = Math.max(...e.map((e) => e.offsetWidth), (r = n.itemWidths[0]) == null ? 180 : r), a = Math.max(...e.map((e) => e.offsetHeight), i), o = i + n.gap, s = a + n.gap, c = b(n, o, s), l = /* @__PURE__ */ new Set(), u = [];
	return e.forEach((r) => {
		var i;
		if (!t.get((i = r.dataset.canvasItemId) == null ? "" : i)) return;
		let a = {
			width: r.offsetWidth,
			height: r.offsetHeight
		}, d = null;
		for (let e = 0; e < c.length; e += 1) {
			if (l.has(e)) continue;
			let t = c[e], r = {
				x: t.x + (o - a.width) / 2,
				y: t.y + (s - a.height) / 2,
				...a
			};
			if (!v(r, u, Math.max(24, n.gap * .42))) {
				d = r, l.add(e);
				break;
			}
		}
		if (!d) {
			let t = u.length, r = t % Math.max(1, Math.floor(Math.sqrt(e.length))), i = Math.floor(t / Math.max(1, Math.floor(Math.sqrt(e.length))));
			d = {
				x: n.width / 2 + (r - 1) * o,
				y: n.height / 2 + (i - 1) * s
			};
		}
		r.style.left = `${d.x}px`, r.style.top = `${d.y}px`, u.push({
			...d,
			...a
		});
	}), u;
}
function S(e, t, n) {
	let r = e.width / 14, i = e.height / 2 - n / 2, a = [];
	for (let o = 0; o <= 24; o += 1) for (let s = -o; s <= o; s += 1) for (let c = 0; c < 14; c += 1) {
		let l = Math.abs(c - 6.5), u = Math.abs(s);
		if (Math.ceil(Math.max(l / 1.65, u)) !== o) continue;
		let d = (p(`${c}:${s}`, "slot-x") - .5) * t * .42, f = (p(`${c}:${s}`, "slot-y") - .5) * n * .34, m = c * r + (r - t) / 2 + d, h = i + s * n + f;
		m < e.padding || h < e.padding || m + t > e.width - e.padding || h + n > e.height - e.padding || a.push({
			x: m,
			y: h
		});
	}
	return a.sort((r, a) => {
		let o = e.width / 2 - t / 2, s = Math.hypot((r.x - o) / t, (r.y - i) / n), c = Math.hypot((a.x - o) / t, (a.y - i) / n);
		return s === c ? r.y - a.y || r.x - a.x : s - c;
	});
}
function C(e, t, n) {
	let [r, i] = l(n.itemWidthMin, n.itemWidthMax), [a, o] = l(n.itemGapMin, n.itemGapMax), s = n.viewportWidth * i / 100, c = n.viewportWidth * o / 100, u = s + c, d = s * .34 + c * .38, f = S(n, u, d), m = /* @__PURE__ */ new Set(), h = [];
	return e.forEach((s) => {
		var c;
		let l = t.get((c = s.dataset.canvasItemId) == null ? "" : c);
		if (!l) return;
		let g = r + p(l.id, "width") * (i - r), _ = a + p(l.id, "gap") * (o - a), y = n.viewportWidth * g / 100, b = n.viewportWidth * _ / 100;
		s.style.width = `${y}px`;
		let x = {
			width: s.offsetWidth,
			height: s.offsetHeight
		}, S = null;
		for (let e = 0; e < f.length; e += 1) {
			if (m.has(e)) continue;
			let t = f[e], r = (p(l.id, "offset-x") - .5) * b * n.itemJitter, i = (p(l.id, "offset-y") - .5) * b * n.itemJitter * .42, a = {
				x: t.x + (u - x.width) / 2 + r,
				y: t.y + (d - x.height) / 2 + i,
				...x
			};
			if (!v(a, h, Math.max(18, b * (.22 + p(l.id, "overlap-gap") * .34)))) {
				S = a, m.add(e);
				break;
			}
		}
		if (!S) {
			let t = h.length, r = Math.max(1, Math.floor(Math.sqrt(e.length)));
			S = {
				x: n.width / 2 + (t % r - r / 2) * u,
				y: n.height / 2 + (Math.floor(t / r) - 1) * d
			};
		}
		s.style.left = `${S.x}px`, s.style.top = `${S.y}px`, h.push({
			...S,
			...x
		});
	}), h;
}
function w(e, t) {
	let [n, r] = l(t.itemGapMin, t.itemGapMax), i = t.viewportWidth * n / 100, a = t.viewportWidth * r / 100;
	return y(Math.min(e.width, e.height) * .16, i, a);
}
function T(e, t, n) {
	let [r, i] = l(n.itemWidthMin, n.itemWidthMax);
	return e.map((e) => {
		var a, o;
		let s = t.get((a = e.dataset.canvasItemId) == null ? "" : a);
		if (!s) return null;
		let c = r + p(s.id, "width") * (i - r);
		e.style.width = `${n.viewportWidth * c / 100}px`;
		let l = e.offsetWidth, u = e.offsetHeight, d = l / Math.max(1, u);
		return {
			tile: e,
			item: s,
			width: l,
			height: u,
			area: l * u,
			visualWeight: Math.sqrt(l * u),
			aspect: d < .82 ? "portrait" : d > 1.22 ? "landscape" : "square",
			priority: Number.parseFloat((o = e.dataset.canvasPriority) == null ? "" : o) || 0
		};
	}).filter((e) => e !== null);
}
function E(e) {
	return [...e].sort((e, t) => e.priority === t.priority ? e.visualWeight === t.visualWeight ? f(e.item.id) - f(t.item.id) : t.visualWeight - e.visualWeight : t.priority - e.priority);
}
function D(e) {
	return {
		x: e.x + e.width / 2,
		y: e.y + e.height / 2
	};
}
function O(e, t) {
	let n = 0, r = 0, i = 0;
	return e.forEach((e) => {
		let t = D(e);
		n += t.x * e.visualWeight, r += t.y * e.visualWeight, i += e.visualWeight;
	}), i <= 0 ? t : {
		x: n / i,
		y: r / i
	};
}
function k(e) {
	return e.reduce((e, t) => ({
		left: Math.min(e.left, t.x),
		top: Math.min(e.top, t.y),
		right: Math.max(e.right, t.x + t.width),
		bottom: Math.max(e.bottom, t.y + t.height)
	}), {
		left: Infinity,
		top: Infinity,
		right: -Infinity,
		bottom: -Infinity
	});
}
function A(e, t) {
	return {
		...e,
		id: t.item.id,
		visualWeight: t.visualWeight
	};
}
function j(e) {
	let t = [];
	return e.forEach((e) => {
		t.some((t) => Math.abs(t.x - e.x) <= 12 && Math.abs(t.y - e.y) <= 12) || t.push(e);
	}), t;
}
function M(e, t, n) {
	let r = t.width, i = t.height, a = [
		-.25,
		0,
		.25
	].map((t) => e.x + (e.width - r) * (.5 + t)), o = [
		-.25,
		0,
		.25
	].map((t) => e.y + (e.height - i) * (.5 + t)), s = [
		{
			x: e.x + e.width + n,
			y: e.y + (e.height - i) / 2,
			width: r,
			height: i
		},
		{
			x: e.x - r - n,
			y: e.y + (e.height - i) / 2,
			width: r,
			height: i
		},
		{
			x: e.x + (e.width - r) / 2,
			y: e.y + e.height + n,
			width: r,
			height: i
		},
		{
			x: e.x + (e.width - r) / 2,
			y: e.y - i - n,
			width: r,
			height: i
		},
		{
			x: e.x + e.width + n,
			y: e.y - i - n,
			width: r,
			height: i
		},
		{
			x: e.x - r - n,
			y: e.y - i - n,
			width: r,
			height: i
		},
		{
			x: e.x + e.width + n,
			y: e.y + e.height + n,
			width: r,
			height: i
		},
		{
			x: e.x - r - n,
			y: e.y + e.height + n,
			width: r,
			height: i
		}
	];
	return a.forEach((t) => {
		s.push({
			x: t,
			y: e.y + e.height + n,
			width: r,
			height: i
		}), s.push({
			x: t,
			y: e.y - i - n,
			width: r,
			height: i
		});
	}), o.forEach((t) => {
		s.push({
			x: e.x + e.width + n,
			y: t,
			width: r,
			height: i
		}), s.push({
			x: e.x - r - n,
			y: t,
			width: r,
			height: i
		});
	}), s;
}
function N(e, t, n) {
	let r = {
		x: n.width / 2,
		y: n.height / 2
	};
	if (t.length === 0) return [{
		x: r.x - e.width / 2,
		y: r.y - e.height / 2,
		width: e.width,
		height: e.height
	}];
	let i = w(e, n), a = t.flatMap((t) => M(t, e, i)), o = i + e.visualWeight * .55;
	for (let n = 0; n < Math.min(16, t.length * 2 + 8); n += 1) {
		let t = p(`${e.item.id}:${n}`, "ring-angle") * Math.PI * 2, i = o * (1 + Math.floor(n / 8));
		a.push({
			x: r.x + Math.cos(t) * i - e.width / 2,
			y: r.y + Math.sin(t) * i * .78 - e.height / 2,
			width: e.width,
			height: e.height
		});
	}
	return j(a.filter((r) => r.x >= n.padding && r.y >= n.padding && r.x + r.width <= n.width - n.padding && r.y + r.height <= n.height - n.padding && !v(r, t, w(e, n))));
}
function P(e, t) {
	let n = [
		0,
		0,
		0,
		0
	];
	e.forEach((e) => {
		let r = D(e), i = r.x < t.x ? 0 : 1, a = r.y < t.y ? 0 : 2;
		n[i + a] += e.visualWeight;
	});
	let r = n.reduce((e, t) => e + t, 0) / n.length;
	return n.reduce((e, t) => e + Math.abs(t - r), 0) / Math.max(1, r);
}
function F(e, t) {
	let n = D(e);
	return t.reduce((e, t) => Math.min(e, Math.hypot(n.x - D(t).x, n.y - D(t).y)), Infinity);
}
function I(e, t, n, r) {
	let i = D(e), a = [...n, A(e, t)], o = O(a, r.center), s = k(a), c = r.center.x - s.left, l = s.right - r.center.x, u = r.center.y - s.top, d = s.bottom - r.center.y, f = Math.hypot(i.x - r.center.x, i.y - r.center.y) / r.maxDistance, m = Math.hypot(o.x - r.center.x, o.y - r.center.y) / r.maxDistance * 5, h = P(a, r.center) * 4, g = Math.abs(c - l) / r.maxDistance * 2.5 + Math.abs(u - d) / r.maxDistance * 2, _ = F(e, n) / r.maxDistance * 1.5, v = r.previousRect ? D(r.previousRect) : null, y = v ? {
		x: r.center.x - (v.x - r.center.x),
		y: r.center.y - (v.y - r.center.y)
	} : r.center, b = r.previousRect && Math.abs(r.previousRect.visualWeight - t.visualWeight) / Math.max(t.visualWeight, r.previousRect.visualWeight) < .38 ? Math.hypot(i.x - y.x, i.y - y.y) / r.maxDistance * 2.5 : 0, x = p(`${t.item.id}:${Math.round(e.x)}:${Math.round(e.y)}`, "placement") * .01;
	return f + m + h + g + _ + b + x;
}
function L(e, t) {
	var n;
	let r = (n = i[e.length]) == null ? i[1] : n, a = {
		x: t.width / 2,
		y: t.height / 2
	}, o = Math.max(...e.map((e) => e.width)), s = Math.max(...e.map((e) => e.height)), c = t.viewportWidth * t.itemGapMax / 100 || 120, l = Math.max(o + c, s + c);
	for (let n = 0; n < 12; n += 1) {
		let n = e.map((e, t) => A({
			x: a.x + r[t].x * l - e.width / 2,
			y: a.y + r[t].y * l * .72 - e.height / 2,
			width: e.width,
			height: e.height
		}, e));
		if (n.every((r, i) => !v(r, n.slice(0, i), w(e[i], t)))) return n;
		l *= 1.12;
	}
	return e.map((t, n) => A({
		x: a.x + (n - (e.length - 1) / 2) * l - t.width / 2,
		y: a.y - t.height / 2,
		width: t.width,
		height: t.height
	}, t));
}
function R(e, t) {
	let n = {
		x: t.width / 2,
		y: t.height / 2
	}, r = Math.hypot(t.width, t.height), i = [];
	return e.forEach((e) => {
		var a, o;
		let s = N(e, i, t), c = {
			center: n,
			previousRect: (a = i[i.length - 1]) == null ? null : a,
			maxDistance: r
		}, l = (o = s.sort((t, n) => I(t, e, i, c) - I(n, e, i, c))[0]) == null ? {
			x: n.x - e.width / 2 + (p(e.item.id, "fallback-x") - .5) * e.visualWeight,
			y: n.y - e.height / 2 + (p(e.item.id, "fallback-y") - .5) * e.visualWeight,
			width: e.width,
			height: e.height
		} : o;
		i.push(A(l, e));
	}), i;
}
function z(e, t) {
	let n = {
		x: t.width / 2,
		y: t.height / 2
	}, r = O(e, n), i = n.x - r.x, a = n.y - r.y;
	return e.map((e) => ({
		...e,
		x: e.x + i,
		y: e.y + a
	}));
}
function B(e, t, n) {
	let r = Math.max(0, n.itemJitter), i = new Map(t.map((e) => [e.item.id, e])), a = [];
	return e.forEach((e, t) => {
		let o = i.get(e.id), s = o ? w(o, n) : 80, c = t % 2 == 0 ? 1 : -1, l = {
			...e,
			x: e.x + (p(e.id, "final-jitter-x") - .5) * s * r * c,
			y: e.y + (p(e.id, "final-jitter-y") - .5) * s * r * .75 * c
		};
		v(l, a, o ? w(o, n) : 24) ? a.push(e) : a.push(l);
	}), a;
}
function V(e, t, n) {
	let r = E(T(e, t, n)), i = B(z(r.length <= 4 ? L(r, n) : R(r, n), n), r, n);
	return i.forEach((e) => {
		let t = r.find((t) => t.item.id === e.id);
		t && (t.tile.style.left = `${e.x}px`, t.tile.style.top = `${e.y}px`);
	}), i;
}
function H(e) {
	let t = e.querySelector(".cms-canvas__image"), n = (t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || e.offsetWidth, r = (t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || e.offsetHeight;
	return n / Math.max(1, r);
}
function U(e, t, n) {
	let [r, i] = H(t) < .92 ? l(n.portraitItemWidthMin, n.portraitItemWidthMax) : l(n.itemWidthMin, n.itemWidthMax);
	return r + p(e.id, "klaffensteiner-width") * (i - r);
}
function W(e, t) {
	let [n, r] = l(t.itemGapMin, t.itemGapMax), i = n + p(e.id, "klaffensteiner-gap") * (r - n);
	return t.viewportWidth * i / 100;
}
function G(e, t, n, r) {
	let i = Math.min(12, Math.max(1, Math.ceil(Math.sqrt(e + 1) * 2))), a = e % i, o = Math.floor(e / i), s = (r.width - r.padding * 2) / 12, c = Math.max(r.viewportHeight * .28, n.height + r.viewportWidth * .04), l = (i - 1) / 2, u = (p(t.id, "klaffensteiner-fallback-x") - .5) * s * .36, d = (p(t.id, "klaffensteiner-fallback-y") - .5) * c * .28;
	return {
		x: r.width / 2 + (a - l) * s - n.width / 2 + u,
		y: r.height / 2 + (o - Math.floor(e / i) / 2) * c - n.height / 2 + d
	};
}
function K(e, t, n) {
	let r = e.map((e, r) => {
		var i;
		let a = t.get((i = e.dataset.canvasItemId) == null ? "" : i);
		if (!a) return null;
		let o = U(a, e, n);
		return e.style.width = `${n.viewportWidth * o / 100}px`, {
			tile: e,
			item: a,
			index: r
		};
	}).filter((e) => e !== null), i = (n.width - n.padding * 2) / 12, a = {
		x: n.width / 2,
		y: n.height / 2
	}, o = [...r].sort((e, t) => Math.abs(e.index - (r.length - 1) / 2) - Math.abs(t.index - (r.length - 1) / 2) || f(e.item.id) - f(t.item.id)), s = [];
	return o.forEach(({ tile: e, item: t }, r) => {
		let o = {
			width: e.offsetWidth,
			height: e.offsetHeight
		}, c = W(t, n), l = null, u = Infinity;
		for (let e = 0; e < 900; e += 1) {
			let d = Math.floor(Math.sqrt(e)), f = (Math.floor(p(`${t.id}:${e}`, "klaffensteiner-column") * 12) + d) % 12 - 11 / 2, m = p(`${t.id}:${e}`, "klaffensteiner-direction") > .5 ? 1 : -1, h = Math.ceil(d / 2) * m, g = a.x + f * i - o.width / 2 + (p(`${t.id}:${e}`, "klaffensteiner-x") - .5) * i * n.itemJitter, _ = a.y + h * Math.max(n.viewportHeight * .26, o.height + c * .42) - o.height / 2 + (p(`${t.id}:${e}`, "klaffensteiner-y") - .5) * c * n.itemJitter, y = {
				x: g,
				y: _,
				width: o.width,
				height: o.height
			};
			if (y.x < n.padding || y.y < n.padding || y.x + y.width > n.width - n.padding || y.y + y.height > n.height - n.padding || v(y, s, c * .55)) continue;
			let b = D(y), x = Math.hypot(b.x - a.x, b.y - a.y), S = Math.abs(b.x - a.x) * .45, C = Math.abs(b.y - a.y) * .22, w = p(`${t.id}:${Math.round(g)}:${Math.round(_)}`, "klaffensteiner-score") * 120, T = x + S + C + r * 18 + w;
			T < u && (l = y, u = T);
		}
		l || (l = {
			...G(r, t, o, n),
			width: o.width,
			height: o.height
		}), e.style.left = `${l.x}px`, e.style.top = `${l.y}px`, s.push(l);
	}), s;
}
function ee(e, t, n) {
	return n.layout === "klaffensteiner" ? K(e, t, n) : n.layout === "pixel-grid" ? x(e, t, n) : n.layout === "percent-grid" ? C(e, t, n) : V(e, t, n);
}
function te(e, t) {
	return e.length === 0 ? {
		left: t.width / 2,
		top: t.height / 2,
		right: t.width / 2,
		bottom: t.height / 2
	} : e.reduce((e, t) => ({
		left: Math.min(e.left, t.x),
		top: Math.min(e.top, t.y),
		right: Math.max(e.right, t.x + t.width),
		bottom: Math.max(e.bottom, t.y + t.height)
	}), {
		left: Infinity,
		top: Infinity,
		right: -Infinity,
		bottom: -Infinity
	});
}
function ne(e, t, n = e.id) {
	let r = document.createElement("button"), i = document.createElement("img"), a = document.createElement("span");
	return r.type = "button", r.className = "cms-canvas__item", r.dataset.canvasItemId = n, r.dataset.canvasSourceItemId = e.id, r.style.width = `${t}px`, r.setAttribute("aria-label", e.title || "Details öffnen"), i.className = "cms-canvas__image", i.src = e.thumbnail, i.alt = e.thumbnailAlt, i.draggable = !1, a.className = "cms-canvas__title", a.textContent = e.title, a.hidden = !e.title, r.append(i, a), r;
}
function re(e) {
	return e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
}
function q(e, t) {
	if (!window.SiteInteractions) {
		console.error("CMS Canvas: site-interactions.js muss vor cms-canvas.js geladen werden.");
		return;
	}
	window.SiteInteractions.openContentModal(e.modal, t);
}
async function J(i) {
	var a;
	if (i.dataset.canvasInitialized === "true") return;
	let l = (a = i.querySelector(e)) == null ? document.querySelector(e) : a;
	if (!l) {
		console.error("CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.");
		return;
	}
	let p = _(l), m = Math.max(i.clientWidth, window.innerWidth), h = Math.max(i.clientHeight, window.innerHeight), g = window.matchMedia("(prefers-reduced-motion: reduce)").matches, v = i.getAttribute("data-canvas-motion") === "instant" ? "instant" : "eased", b = i.getAttribute("data-canvas-layout"), x = b === "pixel-grid" || b === "percent-grid" || b === "center-out" ? b : "klaffensteiner", S = m < 768, C = {
		width: o(i, "data-canvas-width", Math.max(4200, m * 3.6)),
		height: o(i, "data-canvas-height", Math.max(2800, h * 3.4)),
		viewportWidth: m,
		viewportHeight: h,
		gap: o(i, "data-canvas-gap", 150),
		padding: o(i, "data-canvas-padding", 220),
		itemWidths: d(i),
		layout: x,
		itemWidthMin: s(i, "data-canvas-item-width-min", S ? 80 : 15, 6, 95),
		itemWidthMax: s(i, "data-canvas-item-width-max", S ? 90 : 20, 6, 95),
		itemGapMin: s(i, "data-canvas-item-gap-min", S ? 3 : 4, 0, 30),
		itemGapMax: c(i, "data-canvas-item-gap-max", "data-canvas-item-gap-map", 8, 0, 30),
		itemJitter: s(i, "data-canvas-item-jitter", x === "klaffensteiner" ? 1 : .04, 0, 3),
		repeat: Math.round(s(i, "data-canvas-repeat", x === "klaffensteiner" ? 4 : 1, 1, 12)),
		portraitItemWidthMin: s(i, "data-canvas-portrait-width-min", S ? 80 : 8, 6, 95),
		portraitItemWidthMax: s(i, "data-canvas-portrait-width-max", S ? 90 : 12, 6, 95),
		motion: g ? "instant" : v,
		inertia: !g && u(i, "data-canvas-inertia", !0),
		ease: g ? 1 : s(i, "data-canvas-ease", .16, .04, 1),
		friction: g ? 0 : s(i, "data-canvas-friction", .92, .5, .98),
		velocity: g ? 0 : s(i, "data-canvas-velocity", .85, .1, 2),
		boundsPadding: o(i, "data-canvas-bounds-padding", 120)
	};
	i.dataset.canvasInitialized = "true", i.classList.add("cms-canvas"), i.classList.toggle("cms-canvas--no-hover", x === "klaffensteiner");
	let w = document.createElement("div");
	w.className = "cms-canvas__stage", w.style.width = `${C.width}px`, w.style.height = `${C.height}px`, i.insertBefore(w, l);
	let T = /* @__PURE__ */ new Map(), E = [];
	p.forEach((e) => {
		T.set(e.id, e);
		for (let t = 0; t < C.repeat; t += 1) {
			let n = t === 0 ? e.id : `${e.id}--copy-${t + 1}`, r = C.itemWidths[f(n) % C.itemWidths.length], i = ne(e, r, n);
			T.set(n, {
				...e,
				id: n
			}), w.append(i), E.push(i);
		}
	}), await Promise.all(E.map((e) => re(e.querySelector(".cms-canvas__image"))));
	let D = te(ee(E, T, C), C), O = {
		x: i.clientWidth / 2 - (D.left + D.right) / 2,
		y: i.clientHeight / 2 - (D.top + D.bottom) / 2
	}, k = { ...O }, A = {
		x: 0,
		y: 0
	}, j = null, M = {
		x: 0,
		y: 0
	}, N = {
		x: 0,
		y: 0
	}, P = 0, F = {
		x: 0,
		y: 0
	}, I = null, L = !1, R = !1, z = null, B = !1;
	function V() {
		let e = D.left - C.boundsPadding, t = D.right + C.boundsPadding, n = D.top - C.boundsPadding, r = D.bottom + C.boundsPadding;
		return {
			minX: Math.min(i.clientWidth / 2 - (e + t) / 2, i.clientWidth - t),
			maxX: Math.max(i.clientWidth / 2 - (e + t) / 2, -e),
			minY: Math.min(i.clientHeight / 2 - (n + r) / 2, i.clientHeight - r),
			maxY: Math.max(i.clientHeight / 2 - (n + r) / 2, -n)
		};
	}
	function H(e, n, r) {
		return e < n ? n + (e - n) * t : e > r ? r + (e - r) * t : e;
	}
	function U(e) {
		let t = V();
		return {
			x: y(e.x, t.minX, t.maxX),
			y: y(e.y, t.minY, t.maxY)
		};
	}
	function W(e, t) {
		return {
			x: e.x === t.x ? 0 : y((t.x - e.x) * r, -18, 18),
			y: e.y === t.y ? 0 : y((t.y - e.y) * r, -18, 18)
		};
	}
	function G(e) {
		let t = V();
		return {
			x: H(e.x, t.minX, t.maxX),
			y: H(e.y, t.minY, t.maxY)
		};
	}
	function K(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	function J() {
		w.style.transform = `translate3d(${O.x}px, ${O.y}px, 0)`;
	}
	function ie(e, t) {
		k = t ? G(e) : U(e);
	}
	function Y(e) {
		B !== e && (B = e, i.classList.toggle("is-settling", e));
	}
	function X() {
		if (z = null, j === null) {
			let e = Math.hypot(A.x, A.y);
			if (C.inertia && e > n && !B) {
				let e = G({
					x: k.x + A.x,
					y: k.y + A.y
				}), t = W(e, U(e));
				k = e, A = {
					x: t.x || A.x * C.friction,
					y: t.y || A.y * C.friction
				};
			} else k = U(k), A = {
				x: 0,
				y: 0
			}, Y(!0);
		}
		O = C.motion === "instant" ? { ...k } : {
			x: O.x + (k.x - O.x) * C.ease,
			y: O.y + (k.y - O.y) * C.ease
		}, J();
		let e = Math.hypot(A.x, A.y) > n, t = K(O, k) > .12;
		if (j !== null || e || t) {
			z = window.requestAnimationFrame(X);
			return;
		}
		O = { ...k }, J(), Y(!1);
	}
	function Z() {
		z === null && (z = window.requestAnimationFrame(X));
	}
	function Q() {
		k = U(k), A = {
			x: 0,
			y: 0
		}, Y(!0), Z();
	}
	J(), requestAnimationFrame(() => i.classList.add("is-ready")), i.addEventListener("pointerdown", (e) => {
		e.button !== 0 || j !== null || (j = e.pointerId, M = {
			x: e.clientX,
			y: e.clientY
		}, N = { ...M }, P = performance.now(), F = { ...k }, I = e.target.closest(".cms-canvas__item"), A = {
			x: 0,
			y: 0
		}, L = !1, Y(!1), i.setPointerCapture(e.pointerId), i.classList.add("is-dragging"), Z());
	}), i.addEventListener("pointermove", (e) => {
		if (e.pointerId !== j) return;
		let t = e.clientX - M.x, n = e.clientY - M.y;
		if (Math.hypot(t, n) >= 6 && (L = !0), !L) return;
		let r = performance.now(), i = Math.max(16, r - P);
		A = {
			x: (e.clientX - N.x) / i * 16.67 * C.velocity,
			y: (e.clientY - N.y) / i * 16.67 * C.velocity
		}, N = {
			x: e.clientX,
			y: e.clientY
		}, P = r, ie({
			x: F.x + t,
			y: F.y + n
		}, !0), Z();
	});
	function $(e) {
		if (e.pointerId !== j) return;
		let t = L, n = I;
		if (j = null, I = null, i.classList.remove("is-dragging"), !t || !C.inertia ? (A = {
			x: 0,
			y: 0
		}, Q()) : Z(), !t && n) {
			var r;
			let e = T.get((r = n.dataset.canvasItemId) == null ? "" : r);
			e && (R = !0, q(e, n));
		}
	}
	i.addEventListener("pointerup", $), i.addEventListener("pointercancel", $), i.addEventListener("click", (e) => {
		var t;
		if (R) {
			e.preventDefault(), e.stopPropagation(), R = !1;
			return;
		}
		let n = e.target.closest(".cms-canvas__item");
		if (!n) return;
		if (L) {
			e.preventDefault(), e.stopPropagation(), L = !1;
			return;
		}
		let r = T.get((t = n.dataset.canvasItemId) == null ? "" : t);
		r && q(r, n);
	}), window.addEventListener("resize", Q);
}
a(() => {
	let t = Array.from(document.querySelectorAll("[data-cms-canvas]"));
	if (t.length === 0) {
		document.querySelectorAll(e).forEach((e) => {
			let t = e.parentElement;
			t instanceof HTMLElement && J(t);
		});
		return;
	}
	t.forEach((e) => {
		J(e);
	});
});
//#endregion

//# sourceMappingURL=cms-canvas.js.map