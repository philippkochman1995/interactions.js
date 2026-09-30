//#region src/cms-work-detail.ts
var e = "[data-cms-work-related-source], [data-cms-works-source]", t = "[data-cms-works-item], [data-cms-work-related-item], [data-cms-canvas-item]", n = "[data-works-year], [data-canvas-year]", r = "http://www.w3.org/2000/svg", i = [
	"[data-works-link]",
	"[data-sheet-calendar-link]",
	"[data-sheet-calender-link]",
	"[data-sheet-claender-link]",
	"[data-calendar-link]",
	"[data-calender-link]",
	"[data-claender-link]",
	"[data-sheet-link]",
	"a[href]"
].join(", ");
function a(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function o(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function s(e, t) {
	let n = e.querySelector(t);
	if (!n) return "";
	let r = n.cloneNode(!0);
	return r.querySelectorAll("p[data-reveal-pending], p[data-reveal-ready]").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.style.removeProperty("opacity"), e.style.removeProperty("transform");
	}), r.innerHTML.trim();
}
function c(e) {
	var t;
	return (t = Array.from(e.children).find((e) => e instanceof HTMLImageElement)) == null ? null : t;
}
function l(e, t, n = !1) {
	let r = e.querySelector(t);
	return r ? r instanceof HTMLImageElement ? r : null : n ? c(e) : null;
}
function u(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function d(e) {
	return e.split(",").map((e) => e.trim()).filter(Boolean);
}
function f(e, t = !1) {
	var n, r, i, a;
	return d(t ? (n = (r = e.getAttribute("data-work-detail-categories")) == null ? e.getAttribute("data-work-detail-category") : r) == null ? o(e, "[data-work-detail-categories], [data-work-detail-category]") : n : (i = (a = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : a) == null ? o(e, "[data-works-category], [data-works-categories]") : i);
}
function p(e) {
	var t, n, r, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y;
	return (t = (n = (r = (a = (o = (s = (c = (l = (u = (d = (f = (p = (m = (h = (g = (_ = (v = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : v) == null ? e.getAttribute("data-sheet-calendar-href") : _) == null ? e.getAttribute("data-sheet-calendar-url") : g) == null ? e.getAttribute("data-sheet-calender-href") : h) == null ? e.getAttribute("data-sheet-calender-url") : m) == null ? e.getAttribute("data-sheet-claender-href") : p) == null ? e.getAttribute("data-sheet-claender-url") : f) == null ? e.getAttribute("data-calendar-href") : d) == null ? e.getAttribute("data-calendar-url") : u) == null ? e.getAttribute("data-calender-href") : l) == null ? e.getAttribute("data-calender-url") : c) == null ? e.getAttribute("data-claender-href") : s) == null ? e.getAttribute("data-claender-url") : o) == null ? e.getAttribute("data-sheet-href") : a) == null ? e.getAttribute("data-sheet-url") : r) == null ? (y = e.querySelector(i)) == null ? void 0 : y.href : n) == null ? "" : t;
}
function m(e, t) {
	var r, i, a, s, c, d;
	let m = l(e, "[data-works-thumbnail], [data-canvas-thumbnail]", !0), h = (m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "";
	if (!h) return null;
	let g = o(e, "[data-works-title], [data-canvas-title]") || ((r = e.getAttribute("data-works-title")) == null ? void 0 : r.trim()) || ((i = e.getAttribute("data-canvas-title")) == null ? void 0 : i.trim()) || (m == null ? void 0 : m.alt.trim()) || "";
	return {
		id: ((a = e.getAttribute("data-works-id")) == null ? void 0 : a.trim()) || ((s = e.getAttribute("data-canvas-id")) == null ? void 0 : s.trim()) || ((c = e.getAttribute("data-cms-item-id")) == null ? void 0 : c.trim()) || `work-${t + 1}-${u(`${g}-${h}`)}`,
		title: g,
		thumbnail: h,
		thumbnailAlt: (m == null ? void 0 : m.alt) || g,
		href: p(e),
		year: o(e, n) || ((d = e.getAttribute("data-works-year")) == null ? void 0 : d.trim()) || "",
		categories: f(e),
		index: t
	};
}
function h(e) {
	return Array.from(e.querySelectorAll(t)).map(m).filter((e) => e !== null);
}
function g(e) {
	let t = e.trim();
	return t.startsWith("[") && t.endsWith("]") ? t : `[${t}]`;
}
function _(e, r, i) {
	var a, s, c;
	let l = ((a = e.getAttribute("data-work-detail-year")) == null ? void 0 : a.trim()) || o(e, "[data-work-detail-year]");
	if (l) return l;
	let u = Array.from((s = r == null ? void 0 : r.querySelectorAll(t)) == null ? [] : s).find((e) => {
		var t;
		return ((t = e.getAttribute("data-works-id")) == null ? void 0 : t.trim()) === i;
	});
	return u && (o(u, n) || ((c = u.getAttribute("data-works-year")) == null ? void 0 : c.trim())) || "";
}
function v(e, t) {
	var n, r;
	let i = l(e, "[data-work-detail-image]"), a = o(e, "[data-work-detail-title]") || ((n = e.getAttribute("data-work-detail-title")) == null ? void 0 : n.trim()) || "", c = (i == null ? void 0 : i.currentSrc) || (i == null ? void 0 : i.src) || "", d = (i == null ? void 0 : i.alt.trim()) || "", p = d || a, m = ((r = e.getAttribute("data-work-detail-id")) == null ? void 0 : r.trim()) || o(e, "[data-work-detail-id]") || `current-work-${u(`${a}-${c}`)}`;
	return {
		id: m,
		title: a,
		year: _(e, t, m),
		properties: s(e, "[data-work-detail-properties]"),
		html: s(e, "[data-work-detail-text]"),
		view: s(e, "[data-work-detail-view], [data-work-detail-ansicht]"),
		image: c,
		imageAlt: p,
		caption: d || o(e, "[data-work-detail-caption]"),
		categories: f(e, !0)
	};
}
function y() {
	let e = document.createElementNS(r, "svg"), t = document.createElementNS(r, "path"), n = document.createElementNS(r, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), t.classList.add("cms-works__eye-pupil"), t.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), t.setAttribute("fill", "currentColor"), n.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), n.setAttribute("fill", "currentColor"), e.append(t, n), e;
}
function b(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && (t.classList.add("cms-works__item--clickable"), t.setAttribute("href", e.href)), n.className = "cms-works__image-wrap", r.className = "cms-works__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.append(r), i.className = "cms-works__meta", a.className = "cms-works__label", o.className = "cms-works__title", o.textContent = e.title, a.append(o), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = g(e.year), a.append(t);
	}
	return i.append(a, y()), t.append(n, i), t;
}
function x(e, t) {
	let n = new Set(t.categories);
	return n.size === 0 ? e.filter((e) => e.id !== t.id).slice(0, 4) : e.filter((e) => e.id !== t.id && e.categories.some((e) => n.has(e))).slice(0, 4);
}
function S(e) {
	let t = document.createElement("section"), n = document.createElement("div"), r = document.createElement("div"), i = document.createElement("h1"), a = document.createElement("div"), o = document.createElement("div"), s = document.createElement("div"), c = document.createElement("figure"), l = document.createElement("img"), u = document.createElement("figcaption");
	if (t.className = "cms-work-detail__hero", n.className = "cms-work-detail__intro", r.className = "cms-work-detail__content", i.className = "cms-work-detail__title", a.className = "cms-work-detail__properties", o.className = "cms-work-detail__text", s.className = "cms-work-detail__view", c.className = "cms-work-detail__figure", l.className = "cms-work-detail__image", u.className = "cms-work-detail__caption", i.textContent = e.title, e.year) {
		let t = document.createElement("span");
		t.className = "cms-work-detail__year", t.textContent = g(e.year), i.append(document.createTextNode(" "), t);
	}
	return a.innerHTML = e.properties, o.innerHTML = e.html, s.innerHTML = e.view, l.src = e.image, l.alt = e.imageAlt, l.decoding = "async", l.setAttribute("data-work-flip-target", ""), l.setAttribute("data-work-flip-id", e.id), u.textContent = e.caption, r.append(i), e.properties && r.append(a), e.html && r.append(o), e.view && r.append(s), e.image && (c.append(l), e.caption && c.append(u)), n.append(r, c), t.append(n), t;
}
function C(e, t, n) {
	var r, i;
	let a = ((r = e.getAttribute("data-work-detail-overview-href")) == null ? void 0 : r.trim()) || "";
	if (n.length === 0 && !a) return null;
	let o = document.createElement("section"), s = document.createElement("div"), c = document.createElement("h2"), l = document.createElement("div");
	if (o.className = "cms-work-detail cms-work-detail__related", s.className = "cms-work-detail__related-inner", c.className = "cms-work-detail__related-heading", c.textContent = ((i = e.getAttribute("data-work-detail-related-label")) == null ? void 0 : i.trim()) || "Ähnliche Werke", l.className = "cms-work-detail__related-grid", n.forEach((e) => {
		l.append(b(e));
	}), s.append(c, l), a) {
		var u;
		let n = document.createElement("a");
		n.className = "cms-work-detail__overview-link", n.href = a, n.setAttribute("data-work-flip-back", ""), n.setAttribute("data-work-flip-id", t.id), n.textContent = ((u = e.getAttribute("data-work-detail-overview-label")) == null ? void 0 : u.trim()) || "Zur Übersicht", s.append(n);
	}
	return o.append(s), o;
}
function w(e, t) {
	let n = v(e, t), r = t ? x(h(t), n) : [], i = S(n), a = C(e, n, r);
	t && (t.hidden = !0, t.setAttribute("aria-hidden", "true")), e.classList.add("cms-work-detail"), e.replaceChildren(i), a && e.after(a), e.setAttribute("data-site-assets-ready", ""), document.dispatchEvent(new CustomEvent("site:work-detail-ready", {
		bubbles: !0,
		detail: { id: n.id }
	}));
}
function T(t) {
	var n;
	w(t, (n = t.querySelector(e)) == null ? document.querySelector(t.getAttribute("data-work-detail-source") || e) : n), E(t);
}
function E(e) {
	var t, n;
	let r = e.querySelector(".cms-work-detail__hero"), i = e.querySelector(".cms-work-detail__figure"), a = e.querySelector(".cms-work-detail__image"), o = e.querySelector(".cms-work-detail__caption");
	if (!r || !i || !a) return;
	let s = 0, c = () => {
		if (s = 0, !a.complete || a.naturalWidth === 0) return;
		let e = window.visualViewport ? window.visualViewport.offsetTop + window.visualViewport.height : window.innerHeight, t = o ? o.getBoundingClientRect().height + (parseFloat(window.getComputedStyle(o).marginTop) || 0) : 0, n = parseFloat(window.getComputedStyle(r).paddingBottom) || 0, c = `${Math.max(0, Math.floor(e - i.getBoundingClientRect().top - t - n))}px`;
		a.style.maxHeight !== c && (a.style.maxHeight = c);
	}, l = () => {
		s || (s = window.requestAnimationFrame(c));
	};
	c(), a.addEventListener("load", l), window.addEventListener("resize", l, { passive: !0 }), (t = window.visualViewport) == null || t.addEventListener("resize", l, { passive: !0 }), (n = document.fonts) == null || n.ready.then(l), "ResizeObserver" in window && new ResizeObserver(l).observe(i);
}
a(() => {
	Array.from(document.querySelectorAll("[data-cms-work-detail]")).forEach(T);
});
//#endregion

//# sourceMappingURL=cms-work-detail.js.map