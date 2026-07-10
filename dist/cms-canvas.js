//#region src/cms-canvas.ts
var e = "[data-cms-canvas-source]", t = .28, n = Math.PI * (3 - Math.sqrt(5)), r = .08, i = .12;
function a(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function o(e, t, n) {
	var r;
	let i = Number.parseFloat((r = e.getAttribute(t)) == null ? "" : r);
	return Number.isFinite(i) && i > 0 ? i : n;
}
function s(e, t, n, r, i) {
	return _(o(e, t, n), r, i);
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
function d(e) {
	let t = e || 1;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
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
function v(e, t, r, i) {
	let a = d(u(e.id)), o = i.padding, s = Math.max(o, i.width - i.padding - t.width), c = i.padding, l = Math.max(c, i.height - i.padding - t.height), f = i.width / 2 - t.width / 2, p = i.height / 2 - t.height / 2, m = a() * Math.PI * 2, h = Math.max(t.width, t.height, 160) + i.gap * .72;
	for (let e = 0; e < 260; e += 1) {
		let a = Math.sqrt(e) * h, u = m + e * n, d = {
			x: _(f + Math.cos(u) * a, o, s),
			y: _(p + Math.sin(u) * a, c, l),
			...t
		};
		if (!g(d, r, i.gap)) return d;
	}
	let v = t.width + i.gap, y = t.height + i.gap, b = Math.max(1, Math.floor((s - o + t.width) / v)), x = Math.max(1, Math.floor((l - c + t.height) / y)), S = [];
	for (let e = 0; e < x; e += 1) for (let t = 0; t < b; t += 1) S.push({
		x: o + t * v,
		y: c + e * y
	});
	S.sort((e, t) => Math.hypot(e.x - f, e.y - p) - Math.hypot(t.x - f, t.y - p));
	for (let e of S) {
		let n = {
			x: _(e.x, o, s),
			y: _(e.y, c, l),
			...t
		};
		if (!g(n, r, i.gap)) return n;
	}
	return {
		x: _(f, o, s),
		y: _(p, c, l)
	};
}
function y(e, t) {
	let n = document.createElement("button"), r = document.createElement("img"), i = document.createElement("span");
	return n.type = "button", n.className = "cms-canvas__item", n.dataset.canvasItemId = e.id, n.style.width = `${t}px`, n.setAttribute("aria-label", e.title || "Details öffnen"), r.className = "cms-canvas__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.draggable = !1, i.className = "cms-canvas__title", i.textContent = e.title, i.hidden = !e.title, n.append(r, i), n;
}
function b(e) {
	return e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
}
function x(e, t) {
	if (!window.SiteInteractions) {
		console.error("CMS Canvas: site-interactions.js muss vor cms-canvas.js geladen werden.");
		return;
	}
	window.SiteInteractions.openContentModal(e.modal, t);
}
async function S(n) {
	var a;
	if (n.dataset.canvasInitialized === "true") return;
	let d = (a = n.querySelector(e)) == null ? document.querySelector(e) : a;
	if (!d) {
		console.error("CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.");
		return;
	}
	let f = h(d), p = Math.max(n.clientWidth, window.innerWidth), m = Math.max(n.clientHeight, window.innerHeight), g = window.matchMedia("(prefers-reduced-motion: reduce)").matches, S = n.getAttribute("data-canvas-motion") === "instant" ? "instant" : "eased", C = {
		width: o(n, "data-canvas-width", Math.max(3600, p * 3.2)),
		height: o(n, "data-canvas-height", Math.max(2400, m * 3)),
		gap: o(n, "data-canvas-gap", 150),
		padding: o(n, "data-canvas-padding", 220),
		itemWidths: l(n),
		motion: g ? "instant" : S,
		inertia: !g && c(n, "data-canvas-inertia", !0),
		ease: g ? 1 : s(n, "data-canvas-ease", .16, .04, 1),
		friction: g ? 0 : s(n, "data-canvas-friction", .92, .5, .98),
		velocity: g ? 0 : s(n, "data-canvas-velocity", .85, .1, 2)
	};
	n.dataset.canvasInitialized = "true", n.classList.add("cms-canvas");
	let w = document.createElement("div");
	w.className = "cms-canvas__stage", w.style.width = `${C.width}px`, w.style.height = `${C.height}px`, n.insertBefore(w, d);
	let T = /* @__PURE__ */ new Map(), E = f.map((e) => {
		let t = C.itemWidths[u(e.id) % C.itemWidths.length], n = y(e, t);
		return T.set(e.id, e), w.append(n), n;
	});
	await Promise.all(E.map((e) => b(e.querySelector(".cms-canvas__image"))));
	let D = [];
	E.forEach((e) => {
		var t;
		let n = T.get((t = e.dataset.canvasItemId) == null ? "" : t);
		if (!n) return;
		let r = {
			width: e.offsetWidth,
			height: e.offsetHeight
		}, i = v(n, r, D, C);
		e.style.left = `${i.x}px`, e.style.top = `${i.y}px`, D.push({
			...i,
			...r
		});
	});
	let O = {
		x: (n.clientWidth - C.width) / 2,
		y: (n.clientHeight - C.height) / 2
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
		return {
			minX: Math.min(0, n.clientWidth - C.width),
			maxX: Math.max(0, n.clientWidth - C.width),
			minY: Math.min(0, n.clientHeight - C.height),
			maxY: Math.max(0, n.clientHeight - C.height)
		};
	}
	function H(e, n, r) {
		return e < n ? n + (e - n) * t : e > r ? r + (e - r) * t : e;
	}
	function U(e) {
		let t = V();
		return {
			x: _(e.x, t.minX, t.maxX),
			y: _(e.y, t.minY, t.maxY)
		};
	}
	function W(e) {
		let t = V();
		return {
			x: H(e.x, t.minX, t.maxX),
			y: H(e.y, t.minY, t.maxY)
		};
	}
	function G(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	function K() {
		w.style.transform = `translate3d(${O.x}px, ${O.y}px, 0)`;
	}
	function q(e, t) {
		k = t ? W(e) : U(e);
	}
	function J(e) {
		B !== e && (B = e, n.classList.toggle("is-settling", e));
	}
	function Y() {
		if (z = null, j === null) {
			let e = Math.hypot(A.x, A.y);
			if (C.inertia && e > r && !B) {
				let e = W({
					x: k.x + A.x,
					y: k.y + A.y
				}), t = U(e);
				k = e, A = {
					x: A.x * C.friction * (e.x === t.x ? 1 : .58),
					y: A.y * C.friction * (e.y === t.y ? 1 : .58)
				};
			} else k = U(k), A = {
				x: 0,
				y: 0
			}, J(!0);
		}
		O = C.motion === "instant" ? { ...k } : {
			x: O.x + (k.x - O.x) * C.ease,
			y: O.y + (k.y - O.y) * C.ease
		}, K();
		let e = Math.hypot(A.x, A.y) > r, t = G(O, k) > i;
		if (j !== null || e || t) {
			z = window.requestAnimationFrame(Y);
			return;
		}
		O = { ...k }, K(), J(!1);
	}
	function X() {
		z === null && (z = window.requestAnimationFrame(Y));
	}
	function Z() {
		k = U(k), A = {
			x: 0,
			y: 0
		}, J(!0), X();
	}
	K(), requestAnimationFrame(() => n.classList.add("is-ready")), n.addEventListener("pointerdown", (e) => {
		e.button !== 0 || j !== null || (j = e.pointerId, M = {
			x: e.clientX,
			y: e.clientY
		}, N = { ...M }, P = performance.now(), F = { ...k }, I = e.target.closest(".cms-canvas__item"), A = {
			x: 0,
			y: 0
		}, L = !1, J(!1), n.setPointerCapture(e.pointerId), n.classList.add("is-dragging"), X());
	}), n.addEventListener("pointermove", (e) => {
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
		}, P = r, q({
			x: F.x + t,
			y: F.y + n
		}, !0), X();
	});
	function Q(e) {
		if (e.pointerId !== j) return;
		let t = L, r = I;
		if (j = null, I = null, n.classList.remove("is-dragging"), !t || !C.inertia ? (A = {
			x: 0,
			y: 0
		}, Z()) : X(), !t && r) {
			var i;
			let e = T.get((i = r.dataset.canvasItemId) == null ? "" : i);
			e && (R = !0, x(e, r));
		}
	}
	n.addEventListener("pointerup", Q), n.addEventListener("pointercancel", Q), n.addEventListener("click", (e) => {
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
		r && x(r, n);
	}), window.addEventListener("resize", Z);
}
a(() => {
	document.querySelectorAll("[data-cms-canvas]").forEach((e) => {
		S(e);
	});
});
//#endregion

//# sourceMappingURL=cms-canvas.js.map