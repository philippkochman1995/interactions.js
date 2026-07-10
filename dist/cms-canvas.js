//#region src/cms-canvas.ts
var e = "[data-cms-canvas-source]", t = .28, n = Math.PI * (3 - Math.sqrt(5));
function r(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function i(e, t, n) {
	var r;
	let i = Number.parseFloat((r = e.getAttribute(t)) == null ? "" : r);
	return Number.isFinite(i) && i > 0 ? i : n;
}
function a(e) {
	var t;
	let n = ((t = e.getAttribute("data-canvas-item-widths")) == null ? "180,240,300" : t).split(",").map((e) => Number.parseFloat(e.trim())).filter((e) => Number.isFinite(e) && e >= 80);
	return n.length > 0 ? n : [
		180,
		240,
		300
	];
}
function o(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function s(e) {
	let t = e || 1;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function c(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function l(e, t) {
	return e.querySelector(t);
}
function u(e, t) {
	var n, r, i, a, s, u;
	let d = (n = l(e, "[data-canvas-thumbnail]")) == null ? e.querySelector("img") : n, f = (d == null ? void 0 : d.currentSrc) || (d == null ? void 0 : d.src) || "";
	if (!f) return null;
	let p = c(e, "[data-canvas-title]") || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (d == null ? void 0 : d.alt.trim()) || "", m = ((i = e.getAttribute("data-canvas-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-cms-item-id")) == null ? void 0 : a.trim()) || `canvas-item-${t + 1}-${o(`${p}-${f}`)}`, h = l(e, "[data-canvas-modal-image]"), g = e.querySelector("[data-canvas-modal-body]");
	return {
		id: m,
		title: p,
		thumbnail: f,
		thumbnailAlt: (s = d == null ? void 0 : d.alt) == null ? p : s,
		modal: {
			id: `canvas-${m}`,
			address: c(e, "[data-canvas-modal-address]") || p,
			image: (h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || f,
			imageAlt: (h == null ? void 0 : h.alt) || (d == null ? void 0 : d.alt) || p,
			caption: c(e, "[data-canvas-modal-caption]"),
			html: (u = g == null ? void 0 : g.innerHTML) == null ? "" : u
		}
	};
}
function d(e) {
	return Array.from(e.querySelectorAll("[data-cms-canvas-item]")).map(u).filter((e) => e !== null);
}
function f(e, t, n) {
	return t.some((t) => e.x < t.x + t.width + n && e.x + e.width + n > t.x && e.y < t.y + t.height + n && e.y + e.height + n > t.y);
}
function p(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function m(e, t, r, i) {
	let a = s(o(e.id)), c = i.padding, l = Math.max(c, i.width - i.padding - t.width), u = i.padding, d = Math.max(u, i.height - i.padding - t.height), m = i.width / 2 - t.width / 2, h = i.height / 2 - t.height / 2, g = a() * Math.PI * 2, _ = Math.max(t.width, t.height, 160) + i.gap * .72;
	for (let e = 0; e < 260; e += 1) {
		let a = Math.sqrt(e) * _, o = g + e * n, s = {
			x: p(m + Math.cos(o) * a, c, l),
			y: p(h + Math.sin(o) * a, u, d),
			...t
		};
		if (!f(s, r, i.gap)) return s;
	}
	let v = t.width + i.gap, y = t.height + i.gap, b = Math.max(1, Math.floor((l - c + t.width) / v)), x = Math.max(1, Math.floor((d - u + t.height) / y)), S = [];
	for (let e = 0; e < x; e += 1) for (let t = 0; t < b; t += 1) S.push({
		x: c + t * v,
		y: u + e * y
	});
	S.sort((e, t) => Math.hypot(e.x - m, e.y - h) - Math.hypot(t.x - m, t.y - h));
	for (let e of S) {
		let n = {
			x: p(e.x, c, l),
			y: p(e.y, u, d),
			...t
		};
		if (!f(n, r, i.gap)) return n;
	}
	return {
		x: p(m, c, l),
		y: p(h, u, d)
	};
}
function h(e, t) {
	let n = document.createElement("button"), r = document.createElement("img"), i = document.createElement("span");
	return n.type = "button", n.className = "cms-canvas__item", n.dataset.canvasItemId = e.id, n.style.width = `${t}px`, n.setAttribute("aria-label", e.title || "Details öffnen"), r.className = "cms-canvas__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.draggable = !1, i.className = "cms-canvas__title", i.textContent = e.title, i.hidden = !e.title, n.append(r, i), n;
}
function g(e) {
	return e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
}
function _(e, t) {
	if (!window.SiteInteractions) {
		console.error("CMS Canvas: site-interactions.js muss vor cms-canvas.js geladen werden.");
		return;
	}
	window.SiteInteractions.openContentModal(e.modal, t);
}
async function v(n) {
	var r;
	if (n.dataset.canvasInitialized === "true") return;
	let s = (r = n.querySelector(e)) == null ? document.querySelector(e) : r;
	if (!s) {
		console.error("CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.");
		return;
	}
	let c = d(s), l = Math.max(n.clientWidth, window.innerWidth), u = Math.max(n.clientHeight, window.innerHeight), f = {
		width: i(n, "data-canvas-width", Math.max(3600, l * 3.2)),
		height: i(n, "data-canvas-height", Math.max(2400, u * 3)),
		gap: i(n, "data-canvas-gap", 150),
		padding: i(n, "data-canvas-padding", 220),
		itemWidths: a(n)
	};
	n.dataset.canvasInitialized = "true", n.classList.add("cms-canvas");
	let p = document.createElement("div");
	p.className = "cms-canvas__stage", p.style.width = `${f.width}px`, p.style.height = `${f.height}px`, n.insertBefore(p, s);
	let v = /* @__PURE__ */ new Map(), y = c.map((e) => {
		let t = f.itemWidths[o(e.id) % f.itemWidths.length], n = h(e, t);
		return v.set(e.id, e), p.append(n), n;
	});
	await Promise.all(y.map((e) => g(e.querySelector(".cms-canvas__image"))));
	let b = [];
	y.forEach((e) => {
		var t;
		let n = v.get((t = e.dataset.canvasItemId) == null ? "" : t);
		if (!n) return;
		let r = {
			width: e.offsetWidth,
			height: e.offsetHeight
		}, i = m(n, r, b, f);
		e.style.left = `${i.x}px`, e.style.top = `${i.y}px`, b.push({
			...i,
			...r
		});
	});
	let x = {
		x: (n.clientWidth - f.width) / 2,
		y: (n.clientHeight - f.height) / 2
	}, S = null, C = {
		x: 0,
		y: 0
	}, w = {
		x: 0,
		y: 0
	}, T = null, E = !1, D = !1;
	function O() {
		return {
			minX: Math.min(0, n.clientWidth - f.width),
			maxX: Math.max(0, n.clientWidth - f.width),
			minY: Math.min(0, n.clientHeight - f.height),
			maxY: Math.max(0, n.clientHeight - f.height)
		};
	}
	function k(e, t, n) {
		return Math.min(n, Math.max(t, e));
	}
	function A(e, n, r) {
		return e < n ? n + (e - n) * t : e > r ? r + (e - r) * t : e;
	}
	function j() {
		p.style.transform = `translate3d(${x.x}px, ${x.y}px, 0)`;
	}
	function M() {
		let e = O();
		x = {
			x: k(x.x, e.minX, e.maxX),
			y: k(x.y, e.minY, e.maxY)
		}, n.classList.add("is-settling"), j(), window.setTimeout(() => n.classList.remove("is-settling"), 260);
	}
	j(), requestAnimationFrame(() => n.classList.add("is-ready")), n.addEventListener("pointerdown", (e) => {
		e.button !== 0 || S !== null || (S = e.pointerId, C = {
			x: e.clientX,
			y: e.clientY
		}, w = { ...x }, T = e.target.closest(".cms-canvas__item"), E = !1, n.setPointerCapture(e.pointerId), n.classList.add("is-dragging"));
	}), n.addEventListener("pointermove", (e) => {
		if (e.pointerId !== S) return;
		let t = e.clientX - C.x, n = e.clientY - C.y;
		if (Math.hypot(t, n) >= 6 && (E = !0), !E) return;
		let r = O();
		x = {
			x: A(w.x + t, r.minX, r.maxX),
			y: A(w.y + n, r.minY, r.maxY)
		}, j();
	});
	function N(e) {
		if (e.pointerId !== S) return;
		let t = E, r = T;
		if (S = null, T = null, n.classList.remove("is-dragging"), M(), !t && r) {
			var i;
			let e = v.get((i = r.dataset.canvasItemId) == null ? "" : i);
			e && (D = !0, _(e, r));
		}
	}
	n.addEventListener("pointerup", N), n.addEventListener("pointercancel", N), n.addEventListener("click", (e) => {
		var t;
		if (D) {
			e.preventDefault(), e.stopPropagation(), D = !1;
			return;
		}
		let n = e.target.closest(".cms-canvas__item");
		if (!n) return;
		if (E) {
			e.preventDefault(), e.stopPropagation(), E = !1;
			return;
		}
		let r = v.get((t = n.dataset.canvasItemId) == null ? "" : t);
		r && _(r, n);
	}), window.addEventListener("resize", M);
}
r(() => {
	document.querySelectorAll("[data-cms-canvas]").forEach((e) => {
		v(e);
	});
});
//#endregion

//# sourceMappingURL=cms-canvas.js.map