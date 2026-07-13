//#region src/cms-works.ts
var e = "[data-cms-works-source]", t = "http://www.w3.org/2000/svg", n = {
	curated: "Kuratiert",
	alphabetical: "Alphabetisch",
	year: "Entstehungsjahr"
};
function r(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function i(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function a(e) {
	var t;
	return (t = e.querySelector("[data-works-thumbnail], [data-canvas-thumbnail]")) == null ? e.querySelector("img") : t;
}
function o(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function s(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function c(e) {
	let t = Number.parseFloat(e.trim().replace(",", "."));
	return Number.isFinite(t) ? t : null;
}
function l(e) {
	var t, n;
	return c((t = (n = e.getAttribute("data-works-curated-position")) == null ? e.getAttribute("data-works-position") : n) == null ? i(e, "[data-works-curated-position], [data-works-position]") : t);
}
function u(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? i(e, "[data-works-category], [data-works-categories]") : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function d(e) {
	var t, n, r, i, a, o;
	return (t = (n = (r = (i = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : i) == null ? (a = e.querySelector("[data-works-link]")) == null ? void 0 : a.href : r) == null ? (o = e.querySelector("a[href]")) == null ? void 0 : o.href : n) == null ? "" : t;
}
function f(e, t) {
	var n, r, s, c, f, p;
	let m = a(e), h = (m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "";
	if (!h) return null;
	let g = i(e, "[data-works-title], [data-canvas-title]") || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (m == null ? void 0 : m.alt.trim()) || "";
	return {
		id: ((s = e.getAttribute("data-works-id")) == null ? void 0 : s.trim()) || ((c = e.getAttribute("data-canvas-id")) == null ? void 0 : c.trim()) || ((f = e.getAttribute("data-cms-item-id")) == null ? void 0 : f.trim()) || `work-${t + 1}-${o(`${g}-${h}`)}`,
		title: g,
		thumbnail: h,
		thumbnailAlt: (m == null ? void 0 : m.alt) || g,
		href: d(e),
		year: i(e, "[data-works-year], [data-canvas-year]") || ((p = e.getAttribute("data-works-year")) == null ? void 0 : p.trim()) || "",
		curatedPosition: l(e),
		categories: u(e),
		index: t
	};
}
function p(e) {
	return Array.from(e.querySelectorAll("[data-cms-works-item], [data-cms-canvas-item]")).map(f).filter((e) => e !== null);
}
function m(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "alphabetical" || n === "year" ? n : "curated";
}
function h(e) {
	let t = e.match(/\b(?:18|19|20)\d{2}\b/);
	return t ? Number.parseInt(t[0], 10) : null;
}
function g(e, t, n) {
	let r = [...e];
	if (t === "alphabetical") return r.sort((e, t) => e.title.localeCompare(t.title, "de", { sensitivity: "base" }) || e.index - t.index);
	if (t === "random") {
		let t = s(o(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return t === "year" ? r.sort((e, t) => {
		var n, r;
		return ((n = h(e.year)) == null ? Infinity : n) - ((r = h(t.year)) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	}) : r.sort((e, t) => {
		var n, r;
		return ((n = e.curatedPosition) == null ? Infinity : n) - ((r = t.curatedPosition) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function _(e, t) {
	return t.size === 0 ? e : e.filter((e) => e.categories.some((e) => t.has(e)));
}
function v(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		e.categories.forEach((e) => {
			var n;
			t.set(e, ((n = t.get(e)) == null ? 0 : n) + 1);
		});
	}), Array.from(t, ([e, t]) => ({
		name: e,
		count: t
	})).sort((e, t) => e.name.localeCompare(t.name, "de", { sensitivity: "base" }));
}
function y(e, t) {
	let n = document.createElement("span");
	return n.className = t, n.innerHTML = e, n;
}
function b(e) {
	return e === "random" ? n.curated : n[e];
}
function x() {
	let e = document.createElementNS(t, "svg"), n = document.createElementNS(t, "path"), r = document.createElementNS(t, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), n.classList.add("cms-works__eye-pupil"), n.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), n.setAttribute("fill", "currentColor"), r.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), r.setAttribute("fill", "currentColor"), e.append(n, r), e;
}
function S(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && (t.classList.add("cms-works__item--clickable"), t.setAttribute("href", e.href)), n.className = "cms-works__image-wrap", r.className = "cms-works__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.append(r), i.className = "cms-works__meta", a.className = "cms-works__label", o.className = "cms-works__title", o.textContent = e.title, a.append(o), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = e.year, a.append(t);
	}
	return i.append(a, x()), t.append(n, i), t;
}
function C(e) {
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
function w(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function T(e, t, n) {
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
function E(e, t, n) {
	let r = document.createElement("div"), i = T(t, n, w(e));
	r.className = "cms-works__grid", i.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			t.append(S(e));
		}), r.append(t);
	}), e.replaceChildren(r), e.classList.add("is-ready");
}
function D(e, t, r, i) {
	let a = document.createElement("section"), o = document.createElement("button"), s = document.createElement("button"), c = document.createElement("span"), l = document.createElement("span"), u = document.createElement("span"), d = document.createElement("span"), f = document.createElement("span"), p = document.createElement("span"), m = document.createElement("div"), h = document.createElement("div"), g = document.createElement("div"), _ = document.createElement("div"), x = document.createElement("button"), S = v(t), C = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
	a.className = "cms-works-filter u-section u-container", o.className = "cms-works-filter__overlay", o.type = "button", o.setAttribute("aria-label", "Filter schliessen"), s.className = "cms-works-filter__bar", s.type = "button", s.setAttribute("aria-expanded", "false"), c.className = "cms-works-filter__bar-left", l.className = "cms-works-filter__label", l.textContent = "FILTER", u.className = "cms-works-filter__count", c.append(y("\n  <svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z\" fill=\"currentColor\"/>\n    <path d=\"M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z\" fill=\"currentColor\"/>\n    <path d=\"M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z\" fill=\"currentColor\"/>\n  </svg>\n", "cms-works-filter__filter-icon"), l, u), d.className = "cms-works-filter__bar-right", f.className = "cms-works-filter__sort-label", f.textContent = "SORTIERUNG", p.className = "cms-works-filter__active-sort", d.append(f, p, y("\n  <svg width=\"10\" height=\"11\" viewBox=\"0 0 10 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M6 9L6 0L4 -8.74228e-08L4 9L6 9Z\" fill=\"currentColor\"/>\n    <path d=\"M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z\" fill=\"currentColor\"/>\n  </svg>\n", "cms-works-filter__arrow-icon")), s.append(c, d), m.className = "cms-works-filter__panel", h.className = "cms-works-filter__panel-inner", g.className = "cms-works-filter__categories", _.className = "cms-works-filter__sort-controls", S.forEach((e) => {
		let t = document.createElement("button"), n = document.createElement("span"), i = document.createElement("span");
		t.className = "cms-works-filter__pill", t.type = "button", t.setAttribute("aria-pressed", "false"), n.textContent = e.name, i.className = "cms-works-filter__pill-count", i.textContent = `[${e.count}]`, t.append(n, i), t.addEventListener("click", () => {
			r.pendingCategories.has(e.name) ? r.pendingCategories.delete(e.name) : r.pendingCategories.add(e.name), T();
		}), C.set(e.name, t), g.append(t);
	}), [
		"year",
		"alphabetical",
		"curated"
	].forEach((e) => {
		let t = document.createElement("button");
		t.className = "cms-works-filter__sort-option", t.type = "button", t.textContent = n[e], t.setAttribute("aria-pressed", "false"), t.addEventListener("click", () => {
			r.pendingSortMode = e, T();
		}), w.set(e, t), _.append(t);
	}), x.className = "cms-works-filter__apply", x.type = "button", x.textContent = "ANWENDEN", x.addEventListener("click", () => {
		r.appliedCategories = new Set(r.pendingCategories), r.appliedSortMode = r.pendingSortMode, D(!1), i();
	}), h.append(g, _), m.append(h, x), a.append(o, s, m);
	function T() {
		u.textContent = `[${r.appliedCategories.size}]`, p.textContent = b(r.appliedSortMode), a.classList.toggle("is-open", r.open), s.setAttribute("aria-expanded", r.open ? "true" : "false"), C.forEach((e, t) => {
			let n = r.pendingCategories.has(t), i = e.querySelector(".cms-works-filter__pill-count");
			if (e.classList.toggle("is-active", n), e.setAttribute("aria-pressed", n ? "true" : "false"), i) {
				var a;
				if (i.textContent = n ? "x" : ((a = i.textContent) == null ? void 0 : a.replace("x", "")) || "", !n) {
					var o, s;
					i.textContent = `[${(o = (s = S.find((e) => e.name === t)) == null ? void 0 : s.count) == null ? 0 : o}]`;
				}
			}
		}), w.forEach((e, t) => {
			let n = r.pendingSortMode === t;
			e.classList.toggle("is-active", n), e.setAttribute("aria-pressed", n ? "true" : "false");
		});
	}
	function E() {
		r.pendingCategories = new Set(r.appliedCategories), r.pendingSortMode = r.appliedSortMode, r.open = !0, T();
	}
	function D(e) {
		e && (r.pendingCategories = new Set(r.appliedCategories), r.pendingSortMode = r.appliedSortMode), r.open = !1, T();
	}
	return s.addEventListener("click", () => {
		r.open ? D(!0) : E();
	}), o.addEventListener("click", () => D(!0)), document.addEventListener("keydown", (e) => {
		e.key === "Escape" && r.open && D(!0);
	}), document.addEventListener("pointerdown", (e) => {
		!r.open || a.contains(e.target) || D(!0);
	}), T(), {
		element: a,
		sync: T
	};
}
function O(e, t) {
	let n = p(t), r = {
		appliedCategories: /* @__PURE__ */ new Set(),
		pendingCategories: /* @__PURE__ */ new Set(),
		appliedSortMode: m(e),
		pendingSortMode: m(e),
		open: !1
	}, i = document.createElement("div"), a = 0, o = 0, s = 0, c = [], l = /* @__PURE__ */ new Map();
	t.hidden = !0, t.setAttribute("aria-hidden", "true"), e.classList.add("cms-works"), i.className = "cms-works__grid-host", Promise.all(n.map(async (e) => [e.id, await C(e.thumbnail)])).then((t) => {
		l = new Map(t);
		let u = () => g(_(n, r.appliedCategories), r.appliedSortMode, e), d = (t = !1) => {
			window.cancelAnimationFrame(a), a = window.requestAnimationFrame(() => {
				let n = w(e), r = Math.round(e.getBoundingClientRect().width);
				!t && n === o && r === s || (o = n, s = r, E(i, c, l));
			});
		}, f = D(e, n, r, () => {
			c = u(), d(!0), f.sync();
		});
		c = u(), e.replaceChildren(f.element, i);
		let p = new ResizeObserver(() => d());
		d(!0), p.observe(e), window.addEventListener("orientationchange", () => d(!0));
	});
}
function k(t) {
	var n;
	let r = (n = t.querySelector(e)) == null ? document.querySelector(e) : n;
	if (!r) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	O(t, r);
}
r(() => {
	Array.from(document.querySelectorAll("[data-cms-works]")).forEach(k);
});
//#endregion

//# sourceMappingURL=cms-works.js.map