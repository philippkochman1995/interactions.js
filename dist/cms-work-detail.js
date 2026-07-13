//#region src/cms-work-detail.ts
var e = "[data-cms-work-related-source], [data-cms-works-source]", t = "http://www.w3.org/2000/svg";
function n(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function r(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function i(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null ? void 0 : r.innerHTML.trim()) == null ? "" : n;
}
function a(e, t) {
	var n;
	return (n = e.querySelector(t)) == null ? e.querySelector("img") : n;
}
function o(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function s(e) {
	return e.split(",").map((e) => e.trim()).filter(Boolean);
}
function c(e, t = !1) {
	var n, i, a, o;
	return s(t ? (n = (i = e.getAttribute("data-work-detail-categories")) == null ? e.getAttribute("data-work-detail-category") : i) == null ? r(e, "[data-work-detail-categories], [data-work-detail-category]") : n : (a = (o = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : o) == null ? r(e, "[data-works-category], [data-works-categories]") : a);
}
function l(e) {
	var t, n, r, i, a, o;
	return (t = (n = (r = (i = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : i) == null ? (a = e.querySelector("[data-works-link]")) == null ? void 0 : a.href : r) == null ? (o = e.querySelector("a[href]")) == null ? void 0 : o.href : n) == null ? "" : t;
}
function u(e, t) {
	var n, i, s, u, d, f;
	let p = a(e, "[data-works-thumbnail], [data-canvas-thumbnail]"), m = (p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "";
	if (!m) return null;
	let h = r(e, "[data-works-title], [data-canvas-title]") || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((i = e.getAttribute("data-canvas-title")) == null ? void 0 : i.trim()) || (p == null ? void 0 : p.alt.trim()) || "";
	return {
		id: ((s = e.getAttribute("data-works-id")) == null ? void 0 : s.trim()) || ((u = e.getAttribute("data-canvas-id")) == null ? void 0 : u.trim()) || ((d = e.getAttribute("data-cms-item-id")) == null ? void 0 : d.trim()) || `work-${t + 1}-${o(`${h}-${m}`)}`,
		title: h,
		thumbnail: m,
		thumbnailAlt: (p == null ? void 0 : p.alt) || h,
		href: l(e),
		year: r(e, "[data-works-year], [data-canvas-year]") || ((f = e.getAttribute("data-works-year")) == null ? void 0 : f.trim()) || "",
		categories: c(e),
		index: t
	};
}
function d(e) {
	return Array.from(e.querySelectorAll("[data-cms-works-item], [data-cms-work-related-item], [data-cms-canvas-item]")).map(u).filter((e) => e !== null);
}
function f(e) {
	var t, n;
	let s = a(e, "[data-work-detail-image]"), l = r(e, "[data-work-detail-title]") || ((t = e.getAttribute("data-work-detail-title")) == null ? void 0 : t.trim()) || "", u = (s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || "";
	return {
		id: ((n = e.getAttribute("data-work-detail-id")) == null ? void 0 : n.trim()) || r(e, "[data-work-detail-id]") || `current-work-${o(`${l}-${u}`)}`,
		title: l,
		properties: i(e, "[data-work-detail-properties]"),
		html: i(e, "[data-work-detail-text]"),
		image: u,
		imageAlt: (s == null ? void 0 : s.alt) || l,
		caption: r(e, "[data-work-detail-caption]"),
		categories: c(e, !0)
	};
}
function p() {
	let e = document.createElementNS(t, "svg"), n = document.createElementNS(t, "path"), r = document.createElementNS(t, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), n.classList.add("cms-works__eye-pupil"), n.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), n.setAttribute("fill", "currentColor"), r.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), r.setAttribute("fill", "currentColor"), e.append(n, r), e;
}
function m(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && (t.classList.add("cms-works__item--clickable"), t.setAttribute("href", e.href)), n.className = "cms-works__image-wrap", r.className = "cms-works__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.append(r), i.className = "cms-works__meta", a.className = "cms-works__label", o.className = "cms-works__title", o.textContent = e.title, a.append(o), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = e.year, a.append(t);
	}
	return i.append(a, p()), t.append(n, i), t;
}
function h(e, t) {
	let n = new Set(t.categories);
	return n.size === 0 ? e.filter((e) => e.id !== t.id).slice(0, 4) : e.filter((e) => e.id !== t.id && e.categories.some((e) => n.has(e))).slice(0, 4);
}
function g(e) {
	let t = document.createElement("section"), n = document.createElement("div"), r = document.createElement("div"), i = document.createElement("h1"), a = document.createElement("div"), o = document.createElement("div"), s = document.createElement("figure"), c = document.createElement("img"), l = document.createElement("figcaption");
	return t.className = "cms-work-detail__hero", n.className = "cms-work-detail__intro", r.className = "cms-work-detail__content", i.className = "cms-work-detail__title", a.className = "cms-work-detail__properties", o.className = "cms-work-detail__text", s.className = "cms-work-detail__figure", c.className = "cms-work-detail__image", l.className = "cms-work-detail__caption", i.textContent = e.title, a.innerHTML = e.properties, o.innerHTML = e.html, c.src = e.image, c.alt = e.imageAlt, c.decoding = "async", l.textContent = e.caption, r.append(i), e.properties && r.append(a), e.html && r.append(o), e.image && (s.append(c), e.caption && s.append(l)), n.append(r, s), t.append(n), t;
}
function _(e, t) {
	var n, r;
	let i = ((n = e.getAttribute("data-work-detail-overview-href")) == null ? void 0 : n.trim()) || "";
	if (t.length === 0 && !i) return null;
	let a = document.createElement("section"), o = document.createElement("div"), s = document.createElement("h2"), c = document.createElement("div");
	if (a.className = "cms-work-detail__related", o.className = "cms-work-detail__related-inner", s.className = "cms-work-detail__related-heading", s.textContent = ((r = e.getAttribute("data-work-detail-related-label")) == null ? void 0 : r.trim()) || "Ähnliche Werke", c.className = "cms-work-detail__related-grid", t.forEach((e) => {
		c.append(m(e));
	}), o.append(s, c), i) {
		var l;
		let t = document.createElement("a");
		t.className = "cms-work-detail__overview-link", t.href = i, t.textContent = ((l = e.getAttribute("data-work-detail-overview-label")) == null ? void 0 : l.trim()) || "Zur Übersicht", o.append(t);
	}
	return a.append(o), a;
}
function v(e, t) {
	let n = f(e), r = t ? h(d(t), n) : [], i = g(n), a = _(e, r);
	t && (t.hidden = !0, t.setAttribute("aria-hidden", "true")), e.classList.add("cms-work-detail"), e.replaceChildren(i), a && e.append(a);
}
function y(t) {
	var n;
	v(t, (n = t.querySelector(e)) == null ? document.querySelector(t.getAttribute("data-work-detail-source") || e) : n);
}
n(() => {
	Array.from(document.querySelectorAll("[data-cms-work-detail]")).forEach(y);
});
//#endregion

//# sourceMappingURL=cms-work-detail.js.map