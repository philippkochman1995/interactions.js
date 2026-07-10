//#region src/cms-canvas.ts
var e = "[data-cms-canvas-source]", t = .28, n = .08, r = .12;
function i(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function a(e, t, n) {
	var r;
	let i = Number.parseFloat((r = e.getAttribute(t)) == null ? "" : r);
	return Number.isFinite(i) && i > 0 ? i : n;
}
function o(e, t, n, r, i) {
	return _(a(e, t, n), r, i);
}
function s(e, t) {
	return e <= t ? [e, t] : [t, e];
}
function c(e, t, n) {
	let r = e.getAttribute(t);
	return r === null || r === "" ? n : ![
		"false",
		"0",
		"no",
		"off"
	].includes(r.trim().toLowerCase());
}
function l(e) {
	var t;
	let n = ((t = e.getAttribute("data-canvas-item-widths")) == null ? "180,240,300" : t).split(",").map((e) => Number.parseFloat(e.trim())).filter((e) => Number.isFinite(e) && e >= 80);
	return n.length > 0 ? n : [
		180,
		240,
		300
	];
}
function u(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function d(e, t = "") {
	return u(`${e}:${t}`) / 4294967295;
}
function f(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function p(e, t) {
	return e.querySelector(t);
}
function m(e, t) {
	var n, r, i, a, o, s;
	let c = (n = p(e, "[data-canvas-thumbnail]")) == null ? e.querySelector("img") : n, l = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!l) return null;
	let d = f(e, "[data-canvas-title]") || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "", m = ((i = e.getAttribute("data-canvas-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-cms-item-id")) == null ? void 0 : a.trim()) || `canvas-item-${t + 1}-${u(`${d}-${l}`)}`, h = p(e, "[data-canvas-modal-image]"), g = e.querySelector("[data-canvas-modal-body]");
	return {
		id: m,
		title: d,
		thumbnail: l,
		thumbnailAlt: (o = c == null ? void 0 : c.alt) == null ? d : o,
		modal: {
			id: `canvas-${m}`,
			address: f(e, "[data-canvas-modal-address]") || d,
			image: (h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || l,
			imageAlt: (h == null ? void 0 : h.alt) || (c == null ? void 0 : c.alt) || d,
			caption: f(e, "[data-canvas-modal-caption]"),
			html: (s = g == null ? void 0 : g.innerHTML) == null ? "" : s
		}
	};
}
function h(e) {
	return Array.from(e.querySelectorAll("[data-cms-canvas-item]")).map(m).filter((e) => e !== null);
}
function g(e, t, n) {
	return t.some((t) => e.x < t.x + t.width + n && e.x + e.width + n > t.x && e.y < t.y + t.height + n && e.y + e.height + n > t.y);
}
function _(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function v(e, t, n) {
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
function y(e, t, n) {
	var r;
	let i = Math.max(...e.map((e) => e.offsetWidth), (r = n.itemWidths[0]) == null ? 180 : r), a = Math.max(...e.map((e) => e.offsetHeight), i), o = i + n.gap, s = a + n.gap, c = v(n, o, s), l = /* @__PURE__ */ new Set(), u = [];
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
			if (!g(r, u, Math.max(24, n.gap * .42))) {
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
function b(e, t, n) {
	let r = e.width / 14, i = e.height / 2 - n / 2, a = [];
	for (let o = 0; o <= 24; o += 1) for (let s = -o; s <= o; s += 1) for (let c = 0; c < 14; c += 1) {
		let l = Math.abs(c - 6.5), u = Math.abs(s);
		if (Math.ceil(Math.max(l / 1.65, u)) !== o) continue;
		let f = (d(`${c}:${s}`, "slot-x") - .5) * t * .42, p = (d(`${c}:${s}`, "slot-y") - .5) * n * .34, m = c * r + (r - t) / 2 + f, h = i + s * n + p;
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
function x(e, t, n) {
	let [r, i] = s(n.itemWidthMin, n.itemWidthMax), [a, o] = s(n.itemGapMin, n.itemGapMax), c = n.viewportWidth * i / 100, l = n.viewportWidth * o / 100, u = c + l, f = c * .34 + l * .38, p = b(n, u, f), m = /* @__PURE__ */ new Set(), h = [];
	return e.forEach((s) => {
		var c;
		let l = t.get((c = s.dataset.canvasItemId) == null ? "" : c);
		if (!l) return;
		let _ = r + d(l.id, "width") * (i - r), v = a + d(l.id, "gap") * (o - a), y = n.viewportWidth * _ / 100, b = n.viewportWidth * v / 100;
		s.style.width = `${y}px`;
		let x = {
			width: s.offsetWidth,
			height: s.offsetHeight
		}, S = null;
		for (let e = 0; e < p.length; e += 1) {
			if (m.has(e)) continue;
			let t = p[e], r = (d(l.id, "offset-x") - .5) * b * n.itemJitter, i = (d(l.id, "offset-y") - .5) * b * n.itemJitter * .42, a = {
				x: t.x + (u - x.width) / 2 + r,
				y: t.y + (f - x.height) / 2 + i,
				...x
			};
			if (!g(a, h, Math.max(18, b * (.22 + d(l.id, "overlap-gap") * .34)))) {
				S = a, m.add(e);
				break;
			}
		}
		if (!S) {
			let t = h.length, r = Math.max(1, Math.floor(Math.sqrt(e.length)));
			S = {
				x: n.width / 2 + (t % r - r / 2) * u,
				y: n.height / 2 + (Math.floor(t / r) - 1) * f
			};
		}
		s.style.left = `${S.x}px`, s.style.top = `${S.y}px`, h.push({
			...S,
			...x
		});
	}), h;
}
function S(e, t, n) {
	return n.layout === "percent-grid" ? x(e, t, n) : y(e, t, n);
}
function C(e, t) {
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
function w(e, t) {
	let n = document.createElement("button"), r = document.createElement("img"), i = document.createElement("span");
	return n.type = "button", n.className = "cms-canvas__item", n.dataset.canvasItemId = e.id, n.style.width = `${t}px`, n.setAttribute("aria-label", e.title || "Details öffnen"), r.className = "cms-canvas__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.draggable = !1, i.className = "cms-canvas__title", i.textContent = e.title, i.hidden = !e.title, n.append(r, i), n;
}
function T(e) {
	return e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
}
function E(e, t) {
	if (!window.SiteInteractions) {
		console.error("CMS Canvas: site-interactions.js muss vor cms-canvas.js geladen werden.");
		return;
	}
	window.SiteInteractions.openContentModal(e.modal, t);
}
async function D(i) {
	var s;
	if (i.dataset.canvasInitialized === "true") return;
	let d = (s = i.querySelector(e)) == null ? document.querySelector(e) : s;
	if (!d) {
		console.error("CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.");
		return;
	}
	let f = h(d), p = Math.max(i.clientWidth, window.innerWidth), m = Math.max(i.clientHeight, window.innerHeight), g = window.matchMedia("(prefers-reduced-motion: reduce)").matches, v = i.getAttribute("data-canvas-motion") === "instant" ? "instant" : "eased", y = i.getAttribute("data-canvas-layout") === "pixel-grid" ? "pixel-grid" : "percent-grid", b = p < 768, x = {
		width: a(i, "data-canvas-width", Math.max(3600, p * 3.2)),
		height: a(i, "data-canvas-height", Math.max(2400, m * 3)),
		viewportWidth: p,
		gap: a(i, "data-canvas-gap", 150),
		padding: a(i, "data-canvas-padding", 220),
		itemWidths: l(i),
		layout: y,
		itemWidthMin: o(i, "data-canvas-item-width-min", b ? 36 : 12, 6, 95),
		itemWidthMax: o(i, "data-canvas-item-width-max", b ? 68 : 24, 6, 95),
		itemGapMin: o(i, "data-canvas-item-gap-min", b ? 2 : 1.5, 0, 30),
		itemGapMax: o(i, "data-canvas-item-gap-max", b ? 8 : 6, 0, 30),
		itemJitter: o(i, "data-canvas-item-jitter", 1.55, 0, 3),
		motion: g ? "instant" : v,
		inertia: !g && c(i, "data-canvas-inertia", !0),
		ease: g ? 1 : o(i, "data-canvas-ease", .16, .04, 1),
		friction: g ? 0 : o(i, "data-canvas-friction", .92, .5, .98),
		velocity: g ? 0 : o(i, "data-canvas-velocity", .85, .1, 2),
		boundsPadding: a(i, "data-canvas-bounds-padding", 140)
	};
	i.dataset.canvasInitialized = "true", i.classList.add("cms-canvas");
	let D = document.createElement("div");
	D.className = "cms-canvas__stage", D.style.width = `${x.width}px`, D.style.height = `${x.height}px`, i.insertBefore(D, d);
	let O = /* @__PURE__ */ new Map(), k = f.map((e) => {
		let t = x.itemWidths[u(e.id) % x.itemWidths.length], n = w(e, t);
		return O.set(e.id, e), D.append(n), n;
	});
	await Promise.all(k.map((e) => T(e.querySelector(".cms-canvas__image"))));
	let A = C(S(k, O, x), x), j = {
		x: i.clientWidth / 2 - (A.left + A.right) / 2,
		y: i.clientHeight / 2 - (A.top + A.bottom) / 2
	}, M = { ...j }, N = {
		x: 0,
		y: 0
	}, P = null, F = {
		x: 0,
		y: 0
	}, I = {
		x: 0,
		y: 0
	}, L = 0, R = {
		x: 0,
		y: 0
	}, z = null, B = !1, V = !1, H = null, U = !1;
	function W() {
		let e = A.left - x.boundsPadding, t = A.right + x.boundsPadding, n = A.top - x.boundsPadding, r = A.bottom + x.boundsPadding;
		return {
			minX: Math.min(i.clientWidth / 2 - (e + t) / 2, i.clientWidth - t),
			maxX: Math.max(i.clientWidth / 2 - (e + t) / 2, -e),
			minY: Math.min(i.clientHeight / 2 - (n + r) / 2, i.clientHeight - r),
			maxY: Math.max(i.clientHeight / 2 - (n + r) / 2, -n)
		};
	}
	function G(e, n, r) {
		return e < n ? n + (e - n) * t : e > r ? r + (e - r) * t : e;
	}
	function K(e) {
		let t = W();
		return {
			x: _(e.x, t.minX, t.maxX),
			y: _(e.y, t.minY, t.maxY)
		};
	}
	function ee(e, t) {
		return {
			x: e.x === t.x ? 0 : _((t.x - e.x) * r, -18, 18),
			y: e.y === t.y ? 0 : _((t.y - e.y) * r, -18, 18)
		};
	}
	function q(e) {
		let t = W();
		return {
			x: G(e.x, t.minX, t.maxX),
			y: G(e.y, t.minY, t.maxY)
		};
	}
	function te(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	function J() {
		D.style.transform = `translate3d(${j.x}px, ${j.y}px, 0)`;
	}
	function ne(e, t) {
		M = t ? q(e) : K(e);
	}
	function Y(e) {
		U !== e && (U = e, i.classList.toggle("is-settling", e));
	}
	function X() {
		if (H = null, P === null) {
			let e = Math.hypot(N.x, N.y);
			if (x.inertia && e > n && !U) {
				let e = q({
					x: M.x + N.x,
					y: M.y + N.y
				}), t = ee(e, K(e));
				M = e, N = {
					x: t.x || N.x * x.friction,
					y: t.y || N.y * x.friction
				};
			} else M = K(M), N = {
				x: 0,
				y: 0
			}, Y(!0);
		}
		j = x.motion === "instant" ? { ...M } : {
			x: j.x + (M.x - j.x) * x.ease,
			y: j.y + (M.y - j.y) * x.ease
		}, J();
		let e = Math.hypot(N.x, N.y) > n, t = te(j, M) > .12;
		if (P !== null || e || t) {
			H = window.requestAnimationFrame(X);
			return;
		}
		j = { ...M }, J(), Y(!1);
	}
	function Z() {
		H === null && (H = window.requestAnimationFrame(X));
	}
	function Q() {
		M = K(M), N = {
			x: 0,
			y: 0
		}, Y(!0), Z();
	}
	J(), requestAnimationFrame(() => i.classList.add("is-ready")), i.addEventListener("pointerdown", (e) => {
		e.button !== 0 || P !== null || (P = e.pointerId, F = {
			x: e.clientX,
			y: e.clientY
		}, I = { ...F }, L = performance.now(), R = { ...M }, z = e.target.closest(".cms-canvas__item"), N = {
			x: 0,
			y: 0
		}, B = !1, Y(!1), i.setPointerCapture(e.pointerId), i.classList.add("is-dragging"), Z());
	}), i.addEventListener("pointermove", (e) => {
		if (e.pointerId !== P) return;
		let t = e.clientX - F.x, n = e.clientY - F.y;
		if (Math.hypot(t, n) >= 6 && (B = !0), !B) return;
		let r = performance.now(), i = Math.max(16, r - L);
		N = {
			x: (e.clientX - I.x) / i * 16.67 * x.velocity,
			y: (e.clientY - I.y) / i * 16.67 * x.velocity
		}, I = {
			x: e.clientX,
			y: e.clientY
		}, L = r, ne({
			x: R.x + t,
			y: R.y + n
		}, !0), Z();
	});
	function $(e) {
		if (e.pointerId !== P) return;
		let t = B, n = z;
		if (P = null, z = null, i.classList.remove("is-dragging"), !t || !x.inertia ? (N = {
			x: 0,
			y: 0
		}, Q()) : Z(), !t && n) {
			var r;
			let e = O.get((r = n.dataset.canvasItemId) == null ? "" : r);
			e && (V = !0, E(e, n));
		}
	}
	i.addEventListener("pointerup", $), i.addEventListener("pointercancel", $), i.addEventListener("click", (e) => {
		var t;
		if (V) {
			e.preventDefault(), e.stopPropagation(), V = !1;
			return;
		}
		let n = e.target.closest(".cms-canvas__item");
		if (!n) return;
		if (B) {
			e.preventDefault(), e.stopPropagation(), B = !1;
			return;
		}
		let r = O.get((t = n.dataset.canvasItemId) == null ? "" : t);
		r && E(r, n);
	}), window.addEventListener("resize", Q);
}
i(() => {
	document.querySelectorAll("[data-cms-canvas]").forEach((e) => {
		D(e);
	});
});
//#endregion

//# sourceMappingURL=cms-canvas.js.map