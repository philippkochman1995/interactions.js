//#region src/cms-works.ts
var e = "[data-cms-works-source]", t = "http://www.w3.org/2000/svg";
function n(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function r(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function i(e) {
	var t;
	return (t = e.querySelector("[data-works-thumbnail], [data-canvas-thumbnail]")) == null ? e.querySelector("img") : t;
}
function a(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function o(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function s(e) {
	let t = Number.parseFloat(e.trim().replace(",", "."));
	return Number.isFinite(t) ? t : null;
}
function c(e) {
	var t, n;
	return s((t = (n = e.getAttribute("data-works-curated-position")) == null ? e.getAttribute("data-works-position") : n) == null ? r(e, "[data-works-curated-position], [data-works-position]") : t);
}
function l(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? r(e, "[data-works-category], [data-works-categories]") : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function u(e) {
	var t, n, r, i, a, o;
	return (t = (n = (r = (i = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : i) == null ? (a = e.querySelector("[data-works-link]")) == null ? void 0 : a.href : r) == null ? (o = e.querySelector("a[href]")) == null ? void 0 : o.href : n) == null ? "" : t;
}
function d(e, t) {
	var n, o, s, d, f, p;
	let m = i(e), h = (m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "";
	if (!h) return null;
	let g = r(e, "[data-works-title], [data-canvas-title]") || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((o = e.getAttribute("data-canvas-title")) == null ? void 0 : o.trim()) || (m == null ? void 0 : m.alt.trim()) || "";
	return {
		id: ((s = e.getAttribute("data-works-id")) == null ? void 0 : s.trim()) || ((d = e.getAttribute("data-canvas-id")) == null ? void 0 : d.trim()) || ((f = e.getAttribute("data-cms-item-id")) == null ? void 0 : f.trim()) || `work-${t + 1}-${a(`${g}-${h}`)}`,
		title: g,
		thumbnail: h,
		thumbnailAlt: (m == null ? void 0 : m.alt) || g,
		href: u(e),
		year: r(e, "[data-works-year], [data-canvas-year]") || ((p = e.getAttribute("data-works-year")) == null ? void 0 : p.trim()) || "",
		curatedPosition: c(e),
		categories: l(e),
		index: t
	};
}
function f(e) {
	return Array.from(e.querySelectorAll("[data-cms-works-item], [data-cms-canvas-item]")).map(d).filter((e) => e !== null);
}
function p(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "alphabetical" ? n : "curated";
}
function m(e, t, n) {
	let r = [...e];
	if (t === "alphabetical") return r.sort((e, t) => e.title.localeCompare(t.title, "de", { sensitivity: "base" }) || e.index - t.index);
	if (t === "random") {
		let t = o(a(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
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
function h() {
	let e = document.createElementNS(t, "svg"), n = document.createElementNS(t, "path"), r = document.createElementNS(t, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), n.classList.add("cms-works__eye-pupil"), n.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), n.setAttribute("fill", "currentColor"), r.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), r.setAttribute("fill", "currentColor"), e.append(n, r), e;
}
function g(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && t.setAttribute("href", e.href), n.className = "cms-works__image-wrap", r.className = "cms-works__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.append(r), i.className = "cms-works__meta", a.className = "cms-works__label", o.className = "cms-works__title", o.textContent = e.title, a.append(o), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = e.year, a.append(t);
	}
	return i.append(a, h()), t.append(n, i), t;
}
function _(e) {
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
function v(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function y(e, t, n) {
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
function b(e, t, n) {
	let r = document.createElement("div"), i = y(t, n, v(e));
	r.className = "cms-works__grid", i.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			t.append(g(e));
		}), r.append(t);
	}), e.replaceChildren(r), e.classList.add("is-ready");
}
function x(e, t) {
	let n = m(f(t), p(e), e), r = 0, i = 0, a = 0;
	t.hidden = !0, t.setAttribute("aria-hidden", "true"), e.classList.add("cms-works"), Promise.all(n.map(async (e) => [e.id, await _(e.thumbnail)])).then((t) => {
		let o = new Map(t), s = () => {
			window.cancelAnimationFrame(r), r = window.requestAnimationFrame(() => {
				let t = v(e), r = Math.round(e.getBoundingClientRect().width);
				t === i && r === a || (i = t, a = r, b(e, n, o));
			});
		}, c = new ResizeObserver(s);
		s(), c.observe(e), window.addEventListener("orientationchange", s);
	});
}
function S(t) {
	var n;
	let r = (n = t.querySelector(e)) == null ? document.querySelector(e) : n;
	if (!r) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	x(t, r);
}
n(() => {
	Array.from(document.querySelectorAll("[data-cms-works]")).forEach(S);
});
//#endregion

//# sourceMappingURL=cms-works.js.map