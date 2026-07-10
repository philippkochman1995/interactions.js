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
	return h(a(e, t, n), r, i);
}
function s(e, t, n) {
	let r = e.getAttribute(t);
	return r === null || r === "" ? n : ![
		"false",
		"0",
		"no",
		"off"
	].includes(r.trim().toLowerCase());
}
function c(e) {
	var t;
	let n = ((t = e.getAttribute("data-canvas-item-widths")) == null ? "180,240,300" : t).split(",").map((e) => Number.parseFloat(e.trim())).filter((e) => Number.isFinite(e) && e >= 80);
	return n.length > 0 ? n : [
		180,
		240,
		300
	];
}
function l(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function u(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function d(e, t) {
	return e.querySelector(t);
}
function f(e, t) {
	var n, r, i, a, o, s;
	let c = (n = d(e, "[data-canvas-thumbnail]")) == null ? e.querySelector("img") : n, f = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!f) return null;
	let p = u(e, "[data-canvas-title]") || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "", m = ((i = e.getAttribute("data-canvas-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-cms-item-id")) == null ? void 0 : a.trim()) || `canvas-item-${t + 1}-${l(`${p}-${f}`)}`, h = d(e, "[data-canvas-modal-image]"), g = e.querySelector("[data-canvas-modal-body]");
	return {
		id: m,
		title: p,
		thumbnail: f,
		thumbnailAlt: (o = c == null ? void 0 : c.alt) == null ? p : o,
		modal: {
			id: `canvas-${m}`,
			address: u(e, "[data-canvas-modal-address]") || p,
			image: (h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || f,
			imageAlt: (h == null ? void 0 : h.alt) || (c == null ? void 0 : c.alt) || p,
			caption: u(e, "[data-canvas-modal-caption]"),
			html: (s = g == null ? void 0 : g.innerHTML) == null ? "" : s
		}
	};
}
function p(e) {
	return Array.from(e.querySelectorAll("[data-cms-canvas-item]")).map(f).filter((e) => e !== null);
}
function m(e, t, n) {
	return t.some((t) => e.x < t.x + t.width + n && e.x + e.width + n > t.x && e.y < t.y + t.height + n && e.y + e.height + n > t.y);
}
function h(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function g(e, t, n) {
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
function _(e, t, n) {
	var r;
	let i = Math.max(...e.map((e) => e.offsetWidth), (r = n.itemWidths[0]) == null ? 180 : r), a = Math.max(...e.map((e) => e.offsetHeight), i), o = i + n.gap, s = a + n.gap, c = g(n, o, s), l = /* @__PURE__ */ new Set(), u = [];
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
			if (!m(r, u, Math.max(24, n.gap * .42))) {
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
function v(e, t) {
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
async function S(i) {
	var u;
	if (i.dataset.canvasInitialized === "true") return;
	let d = (u = i.querySelector(e)) == null ? document.querySelector(e) : u;
	if (!d) {
		console.error("CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.");
		return;
	}
	let f = p(d), m = Math.max(i.clientWidth, window.innerWidth), g = Math.max(i.clientHeight, window.innerHeight), S = window.matchMedia("(prefers-reduced-motion: reduce)").matches, C = i.getAttribute("data-canvas-motion") === "instant" ? "instant" : "eased", w = {
		width: a(i, "data-canvas-width", Math.max(3600, m * 3.2)),
		height: a(i, "data-canvas-height", Math.max(2400, g * 3)),
		gap: a(i, "data-canvas-gap", 150),
		padding: a(i, "data-canvas-padding", 220),
		itemWidths: c(i),
		motion: S ? "instant" : C,
		inertia: !S && s(i, "data-canvas-inertia", !0),
		ease: S ? 1 : o(i, "data-canvas-ease", .16, .04, 1),
		friction: S ? 0 : o(i, "data-canvas-friction", .92, .5, .98),
		velocity: S ? 0 : o(i, "data-canvas-velocity", .85, .1, 2),
		boundsPadding: a(i, "data-canvas-bounds-padding", 140)
	};
	i.dataset.canvasInitialized = "true", i.classList.add("cms-canvas");
	let T = document.createElement("div");
	T.className = "cms-canvas__stage", T.style.width = `${w.width}px`, T.style.height = `${w.height}px`, i.insertBefore(T, d);
	let E = /* @__PURE__ */ new Map(), D = f.map((e) => {
		let t = w.itemWidths[l(e.id) % w.itemWidths.length], n = y(e, t);
		return E.set(e.id, e), T.append(n), n;
	});
	await Promise.all(D.map((e) => b(e.querySelector(".cms-canvas__image"))));
	let O = v(_(D, E, w), w), k = {
		x: i.clientWidth / 2 - (O.left + O.right) / 2,
		y: i.clientHeight / 2 - (O.top + O.bottom) / 2
	}, A = { ...k }, j = {
		x: 0,
		y: 0
	}, M = null, N = {
		x: 0,
		y: 0
	}, P = {
		x: 0,
		y: 0
	}, F = 0, I = {
		x: 0,
		y: 0
	}, L = null, R = !1, z = !1, B = null, V = !1;
	function H() {
		let e = O.left - w.boundsPadding, t = O.right + w.boundsPadding, n = O.top - w.boundsPadding, r = O.bottom + w.boundsPadding;
		return {
			minX: Math.min(i.clientWidth / 2 - (e + t) / 2, i.clientWidth - t),
			maxX: Math.max(i.clientWidth / 2 - (e + t) / 2, -e),
			minY: Math.min(i.clientHeight / 2 - (n + r) / 2, i.clientHeight - r),
			maxY: Math.max(i.clientHeight / 2 - (n + r) / 2, -n)
		};
	}
	function U(e, n, r) {
		return e < n ? n + (e - n) * t : e > r ? r + (e - r) * t : e;
	}
	function W(e) {
		let t = H();
		return {
			x: h(e.x, t.minX, t.maxX),
			y: h(e.y, t.minY, t.maxY)
		};
	}
	function G(e, t) {
		return {
			x: e.x === t.x ? 0 : h((t.x - e.x) * r, -18, 18),
			y: e.y === t.y ? 0 : h((t.y - e.y) * r, -18, 18)
		};
	}
	function K(e) {
		let t = H();
		return {
			x: U(e.x, t.minX, t.maxX),
			y: U(e.y, t.minY, t.maxY)
		};
	}
	function q(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	function J() {
		T.style.transform = `translate3d(${k.x}px, ${k.y}px, 0)`;
	}
	function ee(e, t) {
		A = t ? K(e) : W(e);
	}
	function Y(e) {
		V !== e && (V = e, i.classList.toggle("is-settling", e));
	}
	function X() {
		if (B = null, M === null) {
			let e = Math.hypot(j.x, j.y);
			if (w.inertia && e > n && !V) {
				let e = K({
					x: A.x + j.x,
					y: A.y + j.y
				}), t = G(e, W(e));
				A = e, j = {
					x: t.x || j.x * w.friction,
					y: t.y || j.y * w.friction
				};
			} else A = W(A), j = {
				x: 0,
				y: 0
			}, Y(!0);
		}
		k = w.motion === "instant" ? { ...A } : {
			x: k.x + (A.x - k.x) * w.ease,
			y: k.y + (A.y - k.y) * w.ease
		}, J();
		let e = Math.hypot(j.x, j.y) > n, t = q(k, A) > .12;
		if (M !== null || e || t) {
			B = window.requestAnimationFrame(X);
			return;
		}
		k = { ...A }, J(), Y(!1);
	}
	function Z() {
		B === null && (B = window.requestAnimationFrame(X));
	}
	function Q() {
		A = W(A), j = {
			x: 0,
			y: 0
		}, Y(!0), Z();
	}
	J(), requestAnimationFrame(() => i.classList.add("is-ready")), i.addEventListener("pointerdown", (e) => {
		e.button !== 0 || M !== null || (M = e.pointerId, N = {
			x: e.clientX,
			y: e.clientY
		}, P = { ...N }, F = performance.now(), I = { ...A }, L = e.target.closest(".cms-canvas__item"), j = {
			x: 0,
			y: 0
		}, R = !1, Y(!1), i.setPointerCapture(e.pointerId), i.classList.add("is-dragging"), Z());
	}), i.addEventListener("pointermove", (e) => {
		if (e.pointerId !== M) return;
		let t = e.clientX - N.x, n = e.clientY - N.y;
		if (Math.hypot(t, n) >= 6 && (R = !0), !R) return;
		let r = performance.now(), i = Math.max(16, r - F);
		j = {
			x: (e.clientX - P.x) / i * 16.67 * w.velocity,
			y: (e.clientY - P.y) / i * 16.67 * w.velocity
		}, P = {
			x: e.clientX,
			y: e.clientY
		}, F = r, ee({
			x: I.x + t,
			y: I.y + n
		}, !0), Z();
	});
	function $(e) {
		if (e.pointerId !== M) return;
		let t = R, n = L;
		if (M = null, L = null, i.classList.remove("is-dragging"), !t || !w.inertia ? (j = {
			x: 0,
			y: 0
		}, Q()) : Z(), !t && n) {
			var r;
			let e = E.get((r = n.dataset.canvasItemId) == null ? "" : r);
			e && (z = !0, x(e, n));
		}
	}
	i.addEventListener("pointerup", $), i.addEventListener("pointercancel", $), i.addEventListener("click", (e) => {
		var t;
		if (z) {
			e.preventDefault(), e.stopPropagation(), z = !1;
			return;
		}
		let n = e.target.closest(".cms-canvas__item");
		if (!n) return;
		if (R) {
			e.preventDefault(), e.stopPropagation(), R = !1;
			return;
		}
		let r = E.get((t = n.dataset.canvasItemId) == null ? "" : t);
		r && x(r, n);
	}), window.addEventListener("resize", Q);
}
i(() => {
	document.querySelectorAll("[data-cms-canvas]").forEach((e) => {
		S(e);
	});
});
//#endregion

//# sourceMappingURL=cms-canvas.js.map