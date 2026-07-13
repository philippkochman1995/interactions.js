//#region src/cms-works-filter.ts
var e = {
	curated: "Kuratiert",
	alphabetical: "Alphabetisch",
	year: "Entstehungsjahr"
};
function t(e) {
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
function n(e, t) {
	let n = document.createElement("span");
	return n.className = t, n.innerHTML = e, n;
}
function r(t) {
	return t === "random" ? e.curated : e[t];
}
function i(i, a, o) {
	let s = document.createElement("section"), c = document.createElement("button"), l = document.createElement("div"), u = document.createElement("button"), d = document.createElement("span"), f = document.createElement("span"), p = document.createElement("span"), m = document.createElement("span"), h = document.createElement("span"), g = document.createElement("span"), _ = document.createElement("div"), v = document.createElement("div"), y = document.createElement("div"), b = document.createElement("div"), x = document.createElement("button"), S = t(i), C = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
	s.className = "cms-works-filter u-section", c.className = "cms-works-filter__overlay", c.type = "button", c.setAttribute("aria-label", "Filter schliessen"), l.className = "cms-works-filter__container u-container", u.className = "cms-works-filter__bar", u.type = "button", u.setAttribute("aria-expanded", "false"), d.className = "cms-works-filter__bar-left", f.className = "cms-works-filter__label", f.textContent = "FILTER", p.className = "cms-works-filter__count", d.append(n("\n  <svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z\" fill=\"currentColor\"/>\n    <path d=\"M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z\" fill=\"currentColor\"/>\n    <path d=\"M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z\" fill=\"currentColor\"/>\n  </svg>\n", "cms-works-filter__filter-icon"), f, p), m.className = "cms-works-filter__bar-right", h.className = "cms-works-filter__sort-label", h.textContent = "SORTIERUNG", g.className = "cms-works-filter__active-sort", m.append(h, g, n("\n  <svg width=\"10\" height=\"11\" viewBox=\"0 0 10 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M6 9L6 0L4 -8.74228e-08L4 9L6 9Z\" fill=\"currentColor\"/>\n    <path d=\"M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z\" fill=\"currentColor\"/>\n  </svg>\n", "cms-works-filter__arrow-icon")), u.append(d, m), _.className = "cms-works-filter__panel", v.className = "cms-works-filter__panel-inner", y.className = "cms-works-filter__categories", b.className = "cms-works-filter__sort-controls", S.forEach((e) => {
		let t = document.createElement("button"), n = document.createElement("span"), r = document.createElement("span");
		t.className = "cms-works-filter__pill", t.type = "button", t.setAttribute("aria-pressed", "false"), n.textContent = e.name, r.className = "cms-works-filter__pill-count", r.textContent = `[${e.count}]`, t.append(n, r), t.addEventListener("click", () => {
			a.pendingCategories.has(e.name) ? a.pendingCategories.delete(e.name) : a.pendingCategories.add(e.name), T();
		}), C.set(e.name, t), y.append(t);
	}), [
		"year",
		"alphabetical",
		"curated"
	].forEach((t) => {
		let n = document.createElement("button");
		n.className = "cms-works-filter__sort-option", n.type = "button", n.textContent = e[t], n.setAttribute("aria-pressed", "false"), n.addEventListener("click", () => {
			a.pendingSortMode = t, T();
		}), w.set(t, n), b.append(n);
	}), x.className = "cms-works-filter__apply", x.type = "button", x.textContent = "ANWENDEN", x.addEventListener("click", () => {
		a.appliedCategories = new Set(a.pendingCategories), a.appliedSortMode = a.pendingSortMode, D(!1), o();
	}), v.append(y, b), _.append(v, x), l.append(u, _), s.append(c, l);
	function T() {
		p.textContent = `[${a.appliedCategories.size}]`, g.textContent = r(a.appliedSortMode), s.classList.toggle("is-open", a.open), u.setAttribute("aria-expanded", a.open ? "true" : "false"), C.forEach((e, t) => {
			var n, r;
			let i = a.pendingCategories.has(t), o = e.querySelector(".cms-works-filter__pill-count");
			if (e.classList.toggle("is-active", i), e.setAttribute("aria-pressed", i ? "true" : "false"), o) {
				if (i) {
					o.textContent = "x";
					return;
				}
				o.textContent = `[${(n = (r = S.find((e) => e.name === t)) == null ? void 0 : r.count) == null ? 0 : n}]`;
			}
		}), w.forEach((e, t) => {
			let n = a.pendingSortMode === t;
			e.classList.toggle("is-active", n), e.setAttribute("aria-pressed", n ? "true" : "false");
		});
	}
	function E() {
		a.pendingCategories = new Set(a.appliedCategories), a.pendingSortMode = a.appliedSortMode, a.open = !0, T();
	}
	function D(e) {
		e && (a.pendingCategories = new Set(a.appliedCategories), a.pendingSortMode = a.appliedSortMode), a.open = !1, T();
	}
	return u.addEventListener("click", () => {
		a.open ? D(!0) : E();
	}), c.addEventListener("click", () => D(!0)), document.addEventListener("keydown", (e) => {
		e.key === "Escape" && a.open && D(!0);
	}), document.addEventListener("pointerdown", (e) => {
		!a.open || s.contains(e.target) || D(!0);
	}), T(), {
		element: s,
		sync: T
	};
}
//#endregion
//#region src/cms-works.ts
var a = "[data-cms-works]", o = "[data-cms-works-source]", s = "[data-cms-works-item], [data-cms-canvas-item]", c = "[data-works-thumbnail], [data-canvas-thumbnail]", l = "[data-works-title], [data-canvas-title]", u = "[data-works-year], [data-canvas-year]", d = "[data-works-curated-position], [data-works-position]", f = "[data-works-category], [data-works-categories]", p = "http://www.w3.org/2000/svg";
function m(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function h(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function g(e) {
	var t;
	return (t = e.querySelector(c)) == null ? e.querySelector("img") : t;
}
function _(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function v(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function y(e) {
	let t = Number.parseFloat(e.trim().replace(",", "."));
	return Number.isFinite(t) ? t : null;
}
function b(e) {
	var t, n;
	return y((t = (n = e.getAttribute("data-works-curated-position")) == null ? e.getAttribute("data-works-position") : n) == null ? h(e, d) : t);
}
function x(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? h(e, f) : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function S(e) {
	var t, n, r, i, a, o;
	return (t = (n = (r = (i = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : i) == null ? (a = e.querySelector("[data-works-link]")) == null ? void 0 : a.href : r) == null ? (o = e.querySelector("a[href]")) == null ? void 0 : o.href : n) == null ? "" : t;
}
function C(e, t) {
	var n, r, i, a, o, s;
	let c = g(e), d = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!d) return null;
	let f = h(e, l) || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "";
	return {
		id: ((i = e.getAttribute("data-works-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-canvas-id")) == null ? void 0 : a.trim()) || ((o = e.getAttribute("data-cms-item-id")) == null ? void 0 : o.trim()) || `work-${t + 1}-${_(`${f}-${d}`)}`,
		title: f,
		thumbnail: d,
		thumbnailAlt: (c == null ? void 0 : c.alt) || f,
		href: S(e),
		year: h(e, u) || ((s = e.getAttribute("data-works-year")) == null ? void 0 : s.trim()) || "",
		curatedPosition: b(e),
		categories: x(e),
		index: t
	};
}
function w(e) {
	return Array.from(e.querySelectorAll(s)).map(C).filter((e) => e !== null);
}
function T(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "alphabetical" || n === "year" ? n : "curated";
}
function E(e) {
	let t = e.match(/\b(?:18|19|20)\d{2}\b/);
	return t ? Number.parseInt(t[0], 10) : null;
}
function D(e, t, n) {
	let r = [...e];
	if (t === "alphabetical") return r.sort((e, t) => e.title.localeCompare(t.title, "de", { sensitivity: "base" }) || e.index - t.index);
	if (t === "random") {
		let t = v(_(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return t === "year" ? r.sort((e, t) => {
		var n, r;
		return ((n = E(e.year)) == null ? Infinity : n) - ((r = E(t.year)) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	}) : r.sort((e, t) => {
		var n, r;
		return ((n = e.curatedPosition) == null ? Infinity : n) - ((r = t.curatedPosition) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function O(e, t) {
	return t.size === 0 ? e : e.filter((e) => e.categories.some((e) => t.has(e)));
}
function k() {
	let e = document.createElementNS(p, "svg"), t = document.createElementNS(p, "path"), n = document.createElementNS(p, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), t.classList.add("cms-works__eye-pupil"), t.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), t.setAttribute("fill", "currentColor"), n.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), n.setAttribute("fill", "currentColor"), e.append(t, n), e;
}
function A(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && (t.classList.add("cms-works__item--clickable"), t.setAttribute("href", e.href)), n.className = "cms-works__image-wrap", r.className = "cms-works__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.append(r), i.className = "cms-works__meta", a.className = "cms-works__label", o.className = "cms-works__title", o.textContent = e.title, a.append(o), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = e.year, a.append(t);
	}
	return i.append(a, k()), t.append(n, i), t;
}
function j(e) {
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
function M(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function N(e, t, n) {
	let r = Array.from({ length: n }, () => ({
		items: [],
		height: 0
	}));
	return e.forEach((e, i) => {
		var a;
		let o = (a = t.get(e.id)) == null ? {
			width: 1,
			height: 1
		} : a, s = r[i % n];
		s.items.push(e), s.height += o.height / Math.max(o.width, 1);
	}), r;
}
function P(e, t, n) {
	let r = document.createElement("div"), i = N(t, n, M(e));
	r.className = "cms-works__grid", i.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			t.append(A(e));
		}), r.append(t);
	}), e.replaceChildren(r), e.classList.add("is-ready");
}
function F(e, t) {
	let n = w(t), r = {
		appliedCategories: /* @__PURE__ */ new Set(),
		pendingCategories: /* @__PURE__ */ new Set(),
		appliedSortMode: T(e),
		pendingSortMode: T(e),
		open: !1
	}, a = document.createElement("div"), o = 0, s = 0, c = 0, l = [], u = /* @__PURE__ */ new Map();
	t.hidden = !0, t.setAttribute("aria-hidden", "true"), e.classList.add("cms-works"), a.className = "cms-works__grid-host", Promise.all(n.map(async (e) => [e.id, await j(e.thumbnail)])).then((t) => {
		u = new Map(t);
		let d = () => D(O(n, r.appliedCategories), r.appliedSortMode, e), f = (t = !1) => {
			window.cancelAnimationFrame(o), o = window.requestAnimationFrame(() => {
				let n = M(e), r = Math.round(e.getBoundingClientRect().width);
				!t && n === s && r === c || (s = n, c = r, P(a, l, u));
			});
		}, p = i(n, r, () => {
			l = d(), f(!0), p.sync();
		});
		l = d(), e.replaceChildren(p.element, a);
		let m = new ResizeObserver(() => f());
		f(!0), m.observe(e), window.addEventListener("orientationchange", () => f(!0));
	});
}
function I(e) {
	var t;
	let n = (t = e.querySelector(o)) == null ? document.querySelector(o) : t;
	if (!n) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	F(e, n);
}
m(() => {
	Array.from(document.querySelectorAll(a)).forEach(I);
});
//#endregion

//# sourceMappingURL=cms-works.js.map