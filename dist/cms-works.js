import { a as e, i as t, r as n, s as r } from "./site-interactions-BfdytpEq.js";
//#region src/cms-works-filter.ts
var i = "\n  <svg width=\"14.45\" height=\"10.2\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z\" fill=\"currentColor\"/>\n    <path d=\"M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z\" fill=\"currentColor\"/>\n    <path d=\"M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z\" fill=\"currentColor\"/>\n  </svg>\n", a = "\n  <svg width=\"8.5\" height=\"9.35\" viewBox=\"0 0 10 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M6 9L6 0L4 -8.74228e-08L4 9L6 9Z\" fill=\"currentColor\"/>\n    <path d=\"M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z\" fill=\"currentColor\"/>\n  </svg>\n", o = {
	random: "zufällig",
	year: "Entstehungsjahr"
}, s = ["year", "random"];
function c(e) {
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
function l(e, t) {
	let n = document.createElement("span");
	return n.className = t, n.innerHTML = e, n;
}
function u(e, t, n, r = {}) {
	let u = document.createElement("section"), d = document.createElement("div"), f = document.createElement("div"), p = document.createElement("span"), m = document.createElement("span"), h = document.createElement("span"), g = document.createElement("span"), _ = document.createElement("span"), v = document.createElement("div"), y = document.createElement("div"), b = document.createElement("div"), x = document.createElement("div"), S = document.createElement("a"), C = c(e), w = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
	u.className = "cms-works-filter u-section", d.className = "cms-works-filter__container u-container", f.className = "cms-works-filter__bar", f.setAttribute("role", "button"), f.setAttribute("tabindex", "0"), f.setAttribute("aria-expanded", "false"), p.className = "cms-works-filter__bar-left", m.className = "cms-works-filter__label", m.textContent = "FILTER", h.className = "cms-works-filter__count", p.append(l(i, "cms-works-filter__filter-icon"), m, h), g.className = "cms-works-filter__bar-right", _.className = "cms-works-filter__sort-label", _.textContent = "SORTIERUNG", x.className = "cms-works-filter__sort-controls", g.append(_, x, l(a, "cms-works-filter__arrow-icon")), f.append(p, g), v.className = "cms-works-filter__panel u-section", y.className = "cms-works-filter__panel-inner u-container", b.className = "cms-works-filter__categories", C.forEach((e) => {
		let n = document.createElement("button"), r = document.createElement("span"), i = document.createElement("span");
		n.className = "cms-works-filter__pill", n.type = "button", n.setAttribute("aria-pressed", "false"), r.textContent = e.name, i.className = "cms-works-filter__pill-count", i.textContent = `[${e.count}]`, n.append(r, i), n.addEventListener("click", () => {
			t.pendingCategories.has(e.name) ? t.pendingCategories.delete(e.name) : t.pendingCategories.add(e.name), E();
		}), w.set(e.name, n), b.append(n);
	}), s.forEach((e) => {
		let n = document.createElement("button");
		n.className = "cms-works-filter__sort-option", n.type = "button", n.textContent = o[e], n.setAttribute("aria-pressed", "false"), n.addEventListener("click", (n) => {
			n.stopPropagation(), t.open || D(), t.pendingSortMode = e, E();
		}), T.set(e, n), x.append(n);
	}), S.className = "cms-works-filter__apply", S.href = "#", S.textContent = "ANWENDEN", S.addEventListener("click", (e) => {
		e.preventDefault(), t.appliedCategories = new Set(t.pendingCategories), t.appliedSortMode = t.pendingSortMode, O(!1), n();
	}), y.append(b), v.append(y, S), d.append(f), u.append(d, v);
	function E() {
		h.textContent = `[${t.appliedCategories.size}]`, u.classList.toggle("is-open", t.open), f.setAttribute("aria-expanded", t.open ? "true" : "false"), w.forEach((e, n) => {
			var r, i;
			let a = t.pendingCategories.has(n), o = e.querySelector(".cms-works-filter__pill-count");
			if (e.classList.toggle("is-active", a), e.setAttribute("aria-pressed", a ? "true" : "false"), o) {
				if (a) {
					o.textContent = "x";
					return;
				}
				o.textContent = `[${(r = (i = C.find((e) => e.name === n)) == null ? void 0 : i.count) == null ? 0 : r}]`;
			}
		}), T.forEach((e, n) => {
			let r = (t.open ? t.pendingSortMode : t.appliedSortMode) === n, i = t.open || r;
			e.classList.toggle("is-active", r), e.classList.toggle("is-collapsed", !i), e.setAttribute("aria-pressed", r ? "true" : "false"), e.setAttribute("tabindex", i ? "0" : "-1");
		});
	}
	function D() {
		var e;
		t.open || (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode, t.open = !0, E(), (e = r.onOpenChange) == null || e.call(r, !0));
	}
	function O(e) {
		var n;
		t.open && (e && (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode), t.open = !1, E(), (n = r.onOpenChange) == null || n.call(r, !1));
	}
	return f.addEventListener("click", (e) => {
		x.contains(e.target) || (t.open ? O(!0) : D());
	}), f.addEventListener("keydown", (e) => {
		e.target !== f || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), t.open ? O(!0) : D());
	}), document.addEventListener("keydown", (e) => {
		e.key === "Escape" && t.open && O(!0);
	}), document.addEventListener("pointerdown", (e) => {
		!t.open || u.contains(e.target) || O(!0);
	}), E(), {
		element: u,
		sync: E,
		close: O
	};
}
//#endregion
//#region src/cms-works.ts
var d = "[data-cms-works]", f = "[data-cms-works-source]", p = "[data-cms-works-item], [data-cms-canvas-item]", m = "[data-works-thumbnail], [data-canvas-thumbnail]", h = "[data-works-title], [data-canvas-title]", g = "[data-works-year], [data-canvas-year]", _ = "[data-works-category], [data-works-categories]", v = "http://www.w3.org/2000/svg", y = [
	"[data-works-link]",
	"[data-sheet-calendar-link]",
	"[data-sheet-calender-link]",
	"[data-sheet-claender-link]",
	"[data-calendar-link]",
	"[data-calender-link]",
	"[data-claender-link]",
	"[data-sheet-link]",
	"a[href]"
].join(", "), b = 16, x = 16, S = "[data-cms-works-load-more-template]", C = "site:works-ready";
function w(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function T(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function E(e) {
	var t;
	return (t = Array.from(e.children).find((e) => e instanceof HTMLImageElement)) == null ? null : t;
}
function D(e) {
	let t = e.querySelector(m);
	return t ? t instanceof HTMLImageElement ? t : null : E(e);
}
function O(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function k(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function A(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? T(e, _) : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function j(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v;
	return (t = (n = (r = (i = (a = (o = (s = (c = (l = (u = (d = (f = (p = (m = (h = (g = (_ = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : _) == null ? e.getAttribute("data-sheet-calendar-href") : g) == null ? e.getAttribute("data-sheet-calendar-url") : h) == null ? e.getAttribute("data-sheet-calender-href") : m) == null ? e.getAttribute("data-sheet-calender-url") : p) == null ? e.getAttribute("data-sheet-claender-href") : f) == null ? e.getAttribute("data-sheet-claender-url") : d) == null ? e.getAttribute("data-calendar-href") : u) == null ? e.getAttribute("data-calendar-url") : l) == null ? e.getAttribute("data-calender-href") : c) == null ? e.getAttribute("data-calender-url") : s) == null ? e.getAttribute("data-claender-href") : o) == null ? e.getAttribute("data-claender-url") : a) == null ? e.getAttribute("data-sheet-href") : i) == null ? e.getAttribute("data-sheet-url") : r) == null ? (v = e.querySelector(y)) == null ? void 0 : v.href : n) == null ? "" : t;
}
function M(e, t) {
	var n, r, i, a, o, s;
	let c = D(e), l = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!l) return null;
	let u = T(e, h) || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "";
	return {
		id: ((i = e.getAttribute("data-works-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-canvas-id")) == null ? void 0 : a.trim()) || ((o = e.getAttribute("data-cms-item-id")) == null ? void 0 : o.trim()) || `work-${t + 1}-${O(`${u}-${l}`)}`,
		title: u,
		thumbnail: l,
		thumbnailAlt: (c == null ? void 0 : c.alt) || u,
		href: j(e),
		year: T(e, g) || ((s = e.getAttribute("data-works-year")) == null ? void 0 : s.trim()) || "",
		categories: A(e),
		index: t
	};
}
function N(e) {
	return Array.from(e.querySelectorAll(p)).map(M).filter((e) => e !== null);
}
function P(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "year" ? n : "year";
}
function F(e) {
	let t = e.match(/\b(?:18|19|20)\d{2}\b/);
	return t ? Number.parseInt(t[0], 10) : null;
}
function I(e) {
	let t = e.trim();
	return t.startsWith("[") && t.endsWith("]") ? t : `[${t}]`;
}
function L(e, t, n) {
	let r = [...e];
	if (t === "random") {
		let t = k(O(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return r.sort((e, t) => {
		var n, r;
		return ((n = F(e.year)) == null ? Infinity : n) - ((r = F(t.year)) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function R(e, t) {
	return t.size === 0 ? e : e.filter((e) => e.categories.some((e) => t.has(e)));
}
function z() {
	let e = document.createElementNS(v, "svg"), t = document.createElementNS(v, "path"), n = document.createElementNS(v, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), t.classList.add("cms-works__eye-pupil"), t.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), t.setAttribute("fill", "currentColor"), n.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), n.setAttribute("fill", "currentColor"), e.append(t, n), e;
}
function B(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && (t.classList.add("cms-works__item--clickable"), t.setAttribute("href", e.href), t.setAttribute("data-work-flip", ""), t.setAttribute("data-work-flip-id", e.id)), n.className = "cms-works__image-wrap", r.className = "cms-works__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.append(r), i.className = "cms-works__meta", a.className = "cms-works__label", o.className = "cms-works__title", o.textContent = e.title, a.append(o), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = I(e.year), a.append(t);
	}
	return i.append(a, z()), t.append(n, i), t;
}
function V(e) {
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
function H(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function U(e, t, n) {
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
function W(e, t, n) {
	let r = document.createElement("div"), i = U(t, n, H(e));
	r.className = "cms-works__grid", i.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			t.append(B(e));
		}), r.append(t);
	}), e.replaceChildren(r), e.classList.add("is-ready");
}
function G(e, t) {
	var n, r, i;
	let a = (n = (r = (i = e.querySelector("[data-cms-works-load-more-text]")) == null ? e.querySelector("[data-button-text]") : i) == null ? e.querySelector(".button-text") : r) == null ? e : n;
	a.textContent = t;
}
function K(e, t) {
	var n, r;
	let i = (n = (r = e.querySelector(S)) == null ? t.querySelector(S) : r) == null ? document.querySelector(S) : n;
	return i ? (i instanceof HTMLButtonElement && (i.type = "button"), i instanceof HTMLAnchorElement && (i.href = "#"), i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.removeAttribute("hidden"), i.removeAttribute("aria-hidden"), i.removeAttribute("data-cms-works-load-more-template"), i.setAttribute("data-cms-works-load-more", ""), G(i, "MEHR ANZEIGEN"), i) : null;
}
function q() {
	var e;
	return n() || ((e = t()) == null ? void 0 : e.direction) === "back";
}
function J(t, n) {
	var i, a, o, s, c;
	let l = N(n), d = q() ? e() : null, f = (i = d == null ? void 0 : d.categories) == null ? [] : i, p = {
		appliedCategories: new Set(f),
		pendingCategories: new Set(f),
		appliedSortMode: (a = d == null ? void 0 : d.sort) == null ? P(t) : a,
		pendingSortMode: (o = d == null ? void 0 : d.sort) == null ? P(t) : o,
		open: !1
	}, m = document.createElement("div"), h = document.createElement("button"), g = document.createElement("div"), _ = K(t, n), v = 0, y = 0, S = 0, w = (s = d == null ? void 0 : d.visibleCount) == null ? b : s, T = (c = d == null ? void 0 : d.scrollY) == null ? null : c, E = [], D = /* @__PURE__ */ new Map();
	n.hidden = !0, n.setAttribute("aria-hidden", "true"), t.classList.add("cms-works"), m.className = "cms-works__grid-host u-section", h.className = "cms-works__collection-overlay", h.type = "button", h.setAttribute("aria-label", "Filter schliessen"), g.className = "cms-works__grid-mount", m.append(g), _ && m.append(_), Promise.all(l.map(async (e) => [e.id, await V(e.thumbnail)])).then((e) => {
		D = new Map(e);
		let n = () => L(R(l, p.appliedCategories), p.appliedSortMode, t), i = (e = !1) => {
			window.cancelAnimationFrame(v), v = window.requestAnimationFrame(() => {
				let n = H(t), r = Math.round(t.getBoundingClientRect().width), i = E.slice(0, w);
				!e && n === y && r === S || (y = n, S = r, W(g, i, D), _ && (_.hidden = E.length <= w), T !== null && (window.scrollTo(0, T), T = null), document.dispatchEvent(new CustomEvent(C, {
					bubbles: !0,
					detail: {
						count: i.length,
						total: E.length
					}
				})));
			});
		}, a = () => {
			r({
				categories: Array.from(p.appliedCategories),
				sort: p.appliedSortMode,
				visibleCount: w,
				scrollY: window.scrollY,
				ts: Date.now()
			});
		}, o = () => {
			var e;
			let t = s.element.querySelector(".cms-works-filter__panel"), n = (e = t == null ? void 0 : t.getBoundingClientRect().bottom) == null ? s.element.getBoundingClientRect().bottom : e;
			h.style.setProperty("--cms-works-overlay-top", `${Math.max(0, n)}px`);
		}, s = u(l, p, () => {
			E = n(), w = b, i(!0), s.sync(), a();
		}, { onOpenChange: (e) => {
			t.classList.toggle("is-filter-open", e), e && o();
		} });
		if (h.addEventListener("click", () => s.close(!0)), _) {
			let e = () => {
				w += x, i(!0), a();
			};
			_.addEventListener("click", (t) => {
				t.preventDefault(), e();
			}), _.addEventListener("keydown", (t) => {
				t.key !== "Enter" && t.key !== " " || (t.preventDefault(), e());
			});
		}
		E = n(), t.replaceChildren(s.element, h, m);
		let c = new ResizeObserver(() => i());
		i(!0), s.sync(), c.observe(t), window.addEventListener("orientationchange", () => i(!0)), window.addEventListener("resize", o), window.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("pagehide", a);
	});
}
function Y(e) {
	var t;
	let n = (t = e.querySelector(f)) == null ? document.querySelector(f) : t;
	if (!n) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	J(e, n);
}
w(() => {
	Array.from(document.querySelectorAll(d)).forEach(Y);
});
//#endregion

//# sourceMappingURL=cms-works.js.map