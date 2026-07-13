//#region src/cms-works.ts
var e = "[data-cms-works-source]";
function t(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function n(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function r(e) {
	var t;
	return (t = e.querySelector("[data-works-thumbnail], [data-canvas-thumbnail]")) == null ? e.querySelector("img") : t;
}
function i(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function a(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function o(e) {
	let t = Number.parseFloat(e.trim().replace(",", "."));
	return Number.isFinite(t) ? t : null;
}
function s(e) {
	var t, r;
	return o((t = (r = e.getAttribute("data-works-curated-position")) == null ? e.getAttribute("data-works-position") : r) == null ? n(e, "[data-works-curated-position], [data-works-position]") : t);
}
function c(e) {
	var t, r;
	return ((t = (r = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : r) == null ? n(e, "[data-works-category], [data-works-categories]") : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function l(e) {
	var t, n, r, i, a, o;
	return (t = (n = (r = (i = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : i) == null ? (a = e.querySelector("[data-works-link]")) == null ? void 0 : a.href : r) == null ? (o = e.querySelector("a[href]")) == null ? void 0 : o.href : n) == null ? "" : t;
}
function u(e, t) {
	var a, o, u, d, f, p;
	let m = r(e), h = (m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "";
	if (!h) return null;
	let g = n(e, "[data-works-title], [data-canvas-title]") || ((a = e.getAttribute("data-works-title")) == null ? void 0 : a.trim()) || ((o = e.getAttribute("data-canvas-title")) == null ? void 0 : o.trim()) || (m == null ? void 0 : m.alt.trim()) || "";
	return {
		id: ((u = e.getAttribute("data-works-id")) == null ? void 0 : u.trim()) || ((d = e.getAttribute("data-canvas-id")) == null ? void 0 : d.trim()) || ((f = e.getAttribute("data-cms-item-id")) == null ? void 0 : f.trim()) || `work-${t + 1}-${i(`${g}-${h}`)}`,
		title: g,
		thumbnail: h,
		thumbnailAlt: (m == null ? void 0 : m.alt) || g,
		href: l(e),
		year: n(e, "[data-works-year], [data-canvas-year]") || ((p = e.getAttribute("data-works-year")) == null ? void 0 : p.trim()) || "",
		curatedPosition: s(e),
		categories: c(e),
		index: t
	};
}
function d(e) {
	return Array.from(e.querySelectorAll("[data-cms-works-item], [data-cms-canvas-item]")).map(u).filter((e) => e !== null);
}
function f(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "alphabetical" ? n : "curated";
}
function p(e, t, n) {
	let r = [...e];
	if (t === "alphabetical") return r.sort((e, t) => e.title.localeCompare(t.title, "de", { sensitivity: "base" }) || e.index - t.index);
	if (t === "random") {
		let t = a(i(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return r.sort((e, t) => {
		var n, r;
		return ((n = e.curatedPosition) == null ? Infinity : n) - ((r = t.curatedPosition) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function m(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("img"), r = document.createElement("span"), i = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && t.setAttribute("href", e.href), n.className = "cms-works__image", n.src = e.thumbnail, n.alt = e.thumbnailAlt, n.loading = "lazy", n.decoding = "async", r.className = "cms-works__meta", i.className = "cms-works__title", i.textContent = e.title, r.append(i), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = e.year, r.append(t);
	}
	return t.append(n, r), t;
}
function h(e) {
	return new Promise((t) => {
		let n = new Image();
		n.onload = () => {
			t({
				width: n.naturalWidth || 1,
				height: n.naturalHeight || 1
			});
		}, n.onerror = () => t({
			width: 1,
			height: 1
		}), n.src = e;
	});
}
function g(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function _(e, t, n) {
	let r = Array.from({ length: n }, () => ({
		items: [],
		height: 0
	}));
	return e.forEach((e) => {
		var n;
		let i = (n = t.get(e.id)) == null ? {
			width: 1,
			height: 1
		} : n, a = r.reduce((e, t) => t.height < e.height ? t : e, r[0]);
		a.items.push(e), a.height += i.height / Math.max(i.width, 1);
	}), r;
}
function v(e, t, n) {
	let r = document.createElement("div"), i = _(t, n, g(e));
	r.className = "cms-works__grid", i.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			t.append(m(e));
		}), r.append(t);
	}), e.replaceChildren(r), e.classList.add("is-ready");
}
function y(e, t) {
	let n = p(d(t), f(e), e), r = 0, i = 0, a = 0;
	t.hidden = !0, t.setAttribute("aria-hidden", "true"), e.classList.add("cms-works"), Promise.all(n.map(async (e) => [e.id, await h(e.thumbnail)])).then((t) => {
		let o = new Map(t), s = () => {
			window.cancelAnimationFrame(r), r = window.requestAnimationFrame(() => {
				let t = g(e), r = Math.round(e.getBoundingClientRect().width);
				t === i && r === a || (i = t, a = r, v(e, n, o));
			});
		}, c = new ResizeObserver(s);
		s(), c.observe(e), window.addEventListener("orientationchange", s);
	});
}
function b(t) {
	var n;
	let r = (n = t.querySelector(e)) == null ? document.querySelector(e) : n;
	if (!r) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	y(t, r);
}
t(() => {
	Array.from(document.querySelectorAll("[data-cms-works]")).forEach(b);
});
//#endregion

//# sourceMappingURL=cms-works.js.map