//#region src/cms-canvas.ts
var e = "[data-cms-canvas-source]", t = .28;
function n(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function r(e, t, n) {
	var r;
	let i = Number.parseFloat((r = e.getAttribute(t)) == null ? "" : r);
	return Number.isFinite(i) && i > 0 ? i : n;
}
function i(e) {
	var t;
	let n = ((t = e.getAttribute("data-canvas-item-widths")) == null ? "180,240,300" : t).split(",").map((e) => Number.parseFloat(e.trim())).filter((e) => Number.isFinite(e) && e >= 80);
	return n.length > 0 ? n : [
		180,
		240,
		300
	];
}
function a(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function o(e) {
	let t = e || 1;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function s(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function c(e, t) {
	return e.querySelector(t);
}
function l(e, t) {
	var n, r, i, o, l, u;
	let d = (n = c(e, "[data-canvas-thumbnail]")) == null ? e.querySelector("img") : n, f = (d == null ? void 0 : d.currentSrc) || (d == null ? void 0 : d.src) || "";
	if (!f) return null;
	let p = s(e, "[data-canvas-title]") || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (d == null ? void 0 : d.alt.trim()) || "", m = ((i = e.getAttribute("data-canvas-id")) == null ? void 0 : i.trim()) || ((o = e.getAttribute("data-cms-item-id")) == null ? void 0 : o.trim()) || `canvas-item-${t + 1}-${a(`${p}-${f}`)}`, h = c(e, "[data-canvas-modal-image]"), g = e.querySelector("[data-canvas-modal-body]");
	return {
		id: m,
		title: p,
		thumbnail: f,
		thumbnailAlt: (l = d == null ? void 0 : d.alt) == null ? p : l,
		modal: {
			id: `canvas-${m}`,
			address: s(e, "[data-canvas-modal-address]") || p,
			image: (h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || f,
			imageAlt: (h == null ? void 0 : h.alt) || (d == null ? void 0 : d.alt) || p,
			caption: s(e, "[data-canvas-modal-caption]"),
			html: (u = g == null ? void 0 : g.innerHTML) == null ? "" : u
		}
	};
}
function u(e) {
	return Array.from(e.querySelectorAll("[data-cms-canvas-item]")).map(l).filter((e) => e !== null);
}
function d(e, t, n) {
	return t.some((t) => e.x < t.x + t.width + n && e.x + e.width + n > t.x && e.y < t.y + t.height + n && e.y + e.height + n > t.y);
}
function f(e, t, n, r) {
	let i = o(a(e.id)), s = Math.max(1, r.width - r.padding * 2 - t.width), c = Math.max(1, r.height - r.padding * 2 - t.height);
	for (let e = 0; e < 180; e += 1) {
		let a = e < 80 ? .12 + (i() + i() + i()) / 3 * .76 : i(), o = e < 80 ? .12 + (i() + i() + i()) / 3 * .76 : i(), l = {
			x: r.padding + a * s,
			y: r.padding + o * c,
			...t
		};
		if (!d(l, n, r.gap)) return l;
	}
	let l = Math.max(1, Math.floor(s / (t.width + r.gap))), u = a(e.id) % Math.max(1, l);
	for (let e = 0; e < 100; e += 1) for (let i = 0; i < l; i += 1) {
		let a = (u + i) % l, o = {
			x: r.padding + a * (t.width + r.gap),
			y: r.padding + e * (t.height + r.gap),
			...t
		};
		if (o.y + t.height <= r.height - r.padding && !d(o, n, r.gap)) return o;
	}
	return {
		x: r.padding + i() * s,
		y: r.padding + i() * c
	};
}
function p(e, t) {
	let n = document.createElement("button"), r = document.createElement("img"), i = document.createElement("span");
	return n.type = "button", n.className = "cms-canvas__item", n.dataset.canvasItemId = e.id, n.style.width = `${t}px`, n.setAttribute("aria-label", e.title || "Details öffnen"), r.className = "cms-canvas__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.draggable = !1, i.className = "cms-canvas__title", i.textContent = e.title, i.hidden = !e.title, n.append(r, i), n;
}
function m(e) {
	return e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
}
function h(e, t) {
	if (!window.SiteInteractions) {
		console.error("CMS Canvas: site-interactions.js muss vor cms-canvas.js geladen werden.");
		return;
	}
	window.SiteInteractions.openContentModal(e.modal, t);
}
async function g(n) {
	var o;
	if (n.dataset.canvasInitialized === "true") return;
	let s = (o = n.querySelector(e)) == null ? document.querySelector(e) : o;
	if (!s) {
		console.error("CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.");
		return;
	}
	let c = u(s), l = Math.max(n.clientWidth, window.innerWidth), d = Math.max(n.clientHeight, window.innerHeight), g = {
		width: r(n, "data-canvas-width", Math.max(3600, l * 3.2)),
		height: r(n, "data-canvas-height", Math.max(2400, d * 3)),
		gap: r(n, "data-canvas-gap", 150),
		padding: r(n, "data-canvas-padding", 220),
		itemWidths: i(n)
	};
	n.dataset.canvasInitialized = "true", n.classList.add("cms-canvas");
	let _ = document.createElement("div");
	_.className = "cms-canvas__stage", _.style.width = `${g.width}px`, _.style.height = `${g.height}px`, n.insertBefore(_, s);
	let v = /* @__PURE__ */ new Map(), y = c.map((e) => {
		let t = g.itemWidths[a(e.id) % g.itemWidths.length], n = p(e, t);
		return v.set(e.id, e), _.append(n), n;
	});
	await Promise.all(y.map((e) => m(e.querySelector(".cms-canvas__image"))));
	let b = [];
	y.forEach((e) => {
		var t;
		let n = v.get((t = e.dataset.canvasItemId) == null ? "" : t);
		if (!n) return;
		let r = {
			width: e.offsetWidth,
			height: e.offsetHeight
		}, i = f(n, r, b, g);
		e.style.left = `${i.x}px`, e.style.top = `${i.y}px`, b.push({
			...i,
			...r
		});
	});
	let x = {
		x: (n.clientWidth - g.width) / 2,
		y: (n.clientHeight - g.height) / 2
	}, S = null, C = {
		x: 0,
		y: 0
	}, w = {
		x: 0,
		y: 0
	}, T = !1;
	function E() {
		return {
			minX: Math.min(0, n.clientWidth - g.width),
			maxX: Math.max(0, n.clientWidth - g.width),
			minY: Math.min(0, n.clientHeight - g.height),
			maxY: Math.max(0, n.clientHeight - g.height)
		};
	}
	function D(e, t, n) {
		return Math.min(n, Math.max(t, e));
	}
	function O(e, n, r) {
		return e < n ? n + (e - n) * t : e > r ? r + (e - r) * t : e;
	}
	function k() {
		_.style.transform = `translate3d(${x.x}px, ${x.y}px, 0)`;
	}
	function A() {
		let e = E();
		x = {
			x: D(x.x, e.minX, e.maxX),
			y: D(x.y, e.minY, e.maxY)
		}, n.classList.add("is-settling"), k(), window.setTimeout(() => n.classList.remove("is-settling"), 260);
	}
	k(), requestAnimationFrame(() => n.classList.add("is-ready")), n.addEventListener("pointerdown", (e) => {
		e.button !== 0 || S !== null || (S = e.pointerId, C = {
			x: e.clientX,
			y: e.clientY
		}, w = { ...x }, T = !1, n.setPointerCapture(e.pointerId), n.classList.add("is-dragging"));
	}), n.addEventListener("pointermove", (e) => {
		if (e.pointerId !== S) return;
		let t = e.clientX - C.x, n = e.clientY - C.y;
		if (Math.hypot(t, n) >= 6 && (T = !0), !T) return;
		let r = E();
		x = {
			x: O(w.x + t, r.minX, r.maxX),
			y: O(w.y + n, r.minY, r.maxY)
		}, k();
	});
	function j(e) {
		e.pointerId === S && (S = null, n.classList.remove("is-dragging"), A());
	}
	n.addEventListener("pointerup", j), n.addEventListener("pointercancel", j), n.addEventListener("click", (e) => {
		var t;
		let n = e.target.closest(".cms-canvas__item");
		if (!n) return;
		if (T) {
			e.preventDefault(), e.stopPropagation(), T = !1;
			return;
		}
		let r = v.get((t = n.dataset.canvasItemId) == null ? "" : t);
		r && h(r, n);
	}), window.addEventListener("resize", A);
}
n(() => {
	document.querySelectorAll("[data-cms-canvas]").forEach((e) => {
		g(e);
	});
});
//#endregion

//# sourceMappingURL=cms-canvas.js.map