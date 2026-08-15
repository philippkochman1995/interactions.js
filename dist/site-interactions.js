import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as l, n as u, o as d, p as f, r as p, s as m, t as h, u as g, v as _ } from "./site-interactions-sLVQDvui.js";
import { t as v } from "./site-interactions-BxJ-FVg3.js";
//#region src/modules/i18n.ts
var y = {};
function ee(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (g(t) && g(n) && (e[t.trim()] = n.trim()), e), {});
}
function te(e = document) {
	var t, n;
	y = {};
	let r = f("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (y = ee(a(i))), {
		get values() {
			return { ...y };
		},
		t: ne
	};
}
function ne(e, t) {
	let n = e.trim(), r = y[n];
	return g(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var re = "[data-lightbox-src]", b = "js-lightbox", x = `.${b}`, ie = `${re}, ${x}`, ae = "[data-site-lightbox]", oe = "[data-lightbox-close]", se = "[data-lightbox-prev]", S = "[data-lightbox-next]", ce = "[data-lightbox-auto-icon]", C = "site-lightbox-trigger", le = "site-lightbox-trigger__image", ue = "site-lightbox-trigger__icon", de = "w-dyn-bind-empty", fe = "/plugins/Basic/assets/placeholder.", pe = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", me = !1, w = null, T = null, E = [], D = 0, O = !1, k = null;
function A(e) {
	let t = m(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = m(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return he(e);
	let n = f("img", e);
	return n ? he(n) : "";
}
function he(e) {
	let t = m(e, "src"), n = m(e, "srcset");
	return e.classList.contains(de) || t.includes(fe) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ge(e) {
	var t, n;
	let r = m(e, "data-lightbox-alt");
	if (r) return r;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let i = f("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function _e(e) {
	let t = A(e).trim();
	return t ? {
		src: t,
		caption: m(e, "data-lightbox-caption"),
		alt: ge(e),
		group: m(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ve(e) {
	let t = _e(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = l(ie).filter((e) => m(e, "data-lightbox-group") === t.group).map(_e).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function ye() {
	let e = document.createElement("span");
	return e.className = ue, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = pe, e;
}
function be(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function xe(e) {
	if (!be(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = w == null ? void 0 : w.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Se(e) {
	if (e.closest(`.${C}`) || !A(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${C} ${b}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group"
	]) {
		let r = m(e, n);
		r && (t.setAttribute(n, r), e.removeAttribute(n));
	}
	e.classList.remove(b), e.classList.add(le), e.before(t), t.append(e, ye()), xe(t);
}
function Ce(e) {
	if (e instanceof HTMLImageElement) {
		Se(e);
		return;
	}
	A(e).trim() && (e.classList.add(C), xe(e), f(ce, e) || e.append(ye()));
}
function we() {
	l(x).forEach(Ce);
}
function j(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function M() {
	var e, t, n, r, i, a;
	if (T) return N(T), T;
	let o = f(ae), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = w == null ? void 0 : w.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, l, u;
		s.innerHTML = "";
		let e = j((c = w == null ? void 0 : w.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = j((l = w == null ? void 0 : w.t("previous", "Previous")) == null ? "Previous" : l, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = j((u = w == null ? void 0 : w.t("next", "Next")) == null ? "Next" : u, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0, r.append(i, a), s.append(e, t, r, n), document.body.append(s);
	}
	let d = {
		root: s,
		image: (t = f("[data-lightbox-image]", s)) == null ? document.createElement("img") : t,
		caption: (n = f("[data-lightbox-caption-output]", s)) == null ? document.createElement("figcaption") : n,
		closeButton: (r = f(oe, s)) == null ? document.createElement("button") : r,
		previousButton: (i = f(se, s)) == null ? document.createElement("button") : i,
		nextButton: (a = f(S, s)) == null ? document.createElement("button") : a
	};
	return T = d, N(d), !o && !document.body.contains(s) && document.body.append(s), d;
}
function N(e) {
	var t, n, r, i;
	let a = (t = w == null ? void 0 : w.t("close", "Close")) == null ? "Close" : t, o = (n = w == null ? void 0 : w.t("previous", "Previous")) == null ? "Previous" : n, s = (r = w == null ? void 0 : w.t("next", "Next")) == null ? "Next" : r, c = (i = w == null ? void 0 : w.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function P() {
	let e = M(), t = E[D];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = E.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(D), e.root.dataset.lightboxCount = String(E.length);
}
function Te(e) {
	let t = M();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function Ee(e) {
	E.length < 2 || (D = (e + E.length) % E.length, P());
}
function De() {
	Ee(D + 1);
}
function Oe() {
	Ee(D - 1);
}
function F(e) {
	var t;
	let n = ve(e);
	if (!n) return;
	let i = O;
	E = n.items, D = n.index, k = e, O = !0, P(), Te(!0), i || r();
	let a = M();
	p(a.closeButton || a.root);
	let o = E[D];
	u(a.root, "site:lightbox-open", {
		item: o,
		index: D,
		count: E.length,
		group: (t = o == null ? void 0 : o.group) == null ? "" : t,
		trigger: e
	});
}
function I() {
	var e;
	if (!O || !T) return;
	let t = T, n = k, r = (e = E[D]) == null ? null : e;
	Te(!1), _(), O = !1, E = [], D = 0, k = null, t.image.removeAttribute("src"), t.caption.textContent = "", u(t.root, "site:lightbox-close", { item: r }), o(n);
}
function ke(t) {
	if (!(!O || !T)) {
		if (t.key === "Escape") {
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), I();
			return;
		}
		if (t.key === "ArrowRight") {
			t.preventDefault(), De();
			return;
		}
		if (t.key === "ArrowLeft") {
			t.preventDefault(), Oe();
			return;
		}
		e(T.root, t);
	}
}
function Ae(e) {
	!O || !T || e.target === T.root && I();
}
function je(e) {
	return w = e.i18n, we(), me || (h(document, "click", ie, (e, t) => {
		e.preventDefault(), F(t);
	}), h(document, "keydown", x, (e, t) => {
		be(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), F(t));
	}), h(document, "click", oe, (e) => {
		e.preventDefault(), I();
	}), h(document, "click", se, (e) => {
		e.preventDefault(), Oe();
	}), h(document, "click", S, (e) => {
		e.preventDefault(), De();
	}), document.addEventListener("click", Ae), document.addEventListener("keydown", ke, !0), me = !0), {
		openLightbox: F,
		closeLightbox: I
	};
}
//#endregion
//#region src/modules/modal.ts
var Me = "[data-modal]", Ne = "[data-modal-content]", Pe = "[data-modal-open]", Fe = "[data-modal-close]", Ie = "a[href^=\"#modal:\"]", Le = "#modal:", Re = 220, ze = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Be = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ve = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", He = !1, L = !0, R = null, z = null, B = "", V = null, H = null, U = /* @__PURE__ */ new Map();
function Ue(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Le) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function We() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Fe),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = ze, t.lightboxIcon.innerHTML = Be, Ke(t), t;
}
function Ge() {
	return (!z || !document.body.contains(z.root)) && (z = We()), Ke(z), z;
}
function Ke(e) {
	var t, n;
	let r = (t = R == null ? void 0 : R.t("close", "Close")) == null ? "Close" : t, i = (n = R == null ? void 0 : R.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function W(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function G(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function qe(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = G(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = W(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Je(e) {
	var t, n, r;
	let i = l("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = G(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: W(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = G(e, "[data-modal-image]"), o = W(a);
	return o ? [{
		src: o,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function Ye(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal-content");
	if (!l) return null;
	let u = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", d = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, f = Je(e), p = f[0], h = e.querySelector("[data-modal-body]");
	return {
		id: l,
		address: u,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: d,
		image: (a = p == null ? void 0 : p.src) == null ? "" : a,
		imageAlt: (o = p == null ? void 0 : p.alt) == null ? "" : o,
		caption: (s = p == null ? void 0 : p.caption) == null ? "" : s,
		html: (c = h == null ? void 0 : h.innerHTML) == null ? "" : c,
		work: qe(e),
		gallery: f
	};
}
function Xe(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal");
	if (!l) return null;
	let u = e.querySelector(".fwm-modal__image"), d = W(u), f = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return {
		id: l,
		address: (r = (i = e.querySelector(".fwm-modal__address")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r,
		layout: "default",
		headline: "",
		image: d,
		imageAlt: (a = u == null ? void 0 : u.alt) == null ? "" : a,
		caption: f,
		html: (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o,
		work: null,
		gallery: d ? [{
			src: d,
			alt: (c = u == null ? void 0 : u.alt) == null ? "" : c,
			caption: f
		}] : []
	};
}
function Ze() {
	l(Ne).forEach((e) => {
		let t = Ye(e);
		t && U.set(t.id, t);
	}), l(Me).forEach((e) => {
		let t = Xe(e);
		t && U.set(t.id, t), e.remove();
	});
}
function Qe(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = l(Ne).find((e) => m(e, "data-modal-content") === n), i = r ? Ye(r) : null;
	return i && U.set(n, i), (t = i == null ? U.get(n) : i) == null ? null : t;
}
function $e(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = Ve, r.append(i, o), t.append(r), t;
}
function et(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Be, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function tt(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function nt(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, tt(e);
}
function rt(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append($e(t.work)), i.forEach((t, n) => {
		e.gallery.append(et(t, n));
	});
}
function it(e) {
	let t = Ge();
	return e.layout === "context" ? rt(t, e) : nt(t, e), t;
}
function at(e) {
	let t = d(e.panel)[0];
	p(t == null ? e.panel : t);
}
function ot(e) {
	H !== null && (window.clearTimeout(H), H = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function st(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), H = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), H = null;
	}, Re), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function K(e, t) {
	var n, i, a, o, c, l, d, f, p, m, h;
	let g = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (i = e.layout) == null ? "default" : i,
		headline: (a = e.headline) == null ? "" : a,
		image: (o = e.image) == null ? "" : o,
		imageAlt: (c = e.imageAlt) == null ? "" : c,
		caption: (l = e.caption) == null ? "" : l,
		html: (d = e.html) == null ? "" : d,
		work: (f = e.work) == null ? null : f,
		gallery: (p = e.gallery) != null && p.length ? e.gallery : e.image ? [{
			src: e.image,
			alt: (m = e.imageAlt) == null ? "" : m,
			caption: (h = e.caption) == null ? "" : h
		}] : []
	};
	if (!g.id) return;
	B && J(), U.set(g.id, g), V = t == null ? s() : t, B = g.id;
	let _ = it(g);
	ot(_), r(), at(_), u(_.root, "site:modal-open", {
		id: B,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function q(e, t) {
	let n = Qe(e);
	n && K(n, t);
}
function J() {
	if (!B || !z) return;
	let e = B, t = V;
	st(z), _(), B = "", V = null, u(z.root, "site:modal-close", {
		id: e,
		modal: z.root
	}), o(t);
}
function ct(t) {
	if (!(!B || !z) && !document.body.classList.contains("is-lightbox-open")) {
		if (t.key === "Escape") {
			t.preventDefault(), J();
			return;
		}
		e(z.panel, t);
	}
}
function lt(e) {
	if (!L || !B || !z) return;
	let t = e.target;
	!c(t) || t !== z.root || J();
}
function ut(e) {
	var n;
	return L = (n = e.closeOnBackdrop) == null || n, R = e.i18n, Ze(), Ge(), He || (h(document, "click", Pe, (e, n) => {
		e.preventDefault(), q(t(n, "data-modal-open"), n);
	}), h(document, "click", Ie, (e, t) => {
		e.preventDefault(), q(Ue(t), t);
	}), h(document, "click", Fe, (e, t) => {
		z != null && z.root.contains(t) && (e.preventDefault(), J());
	}), document.addEventListener("click", lt), document.addEventListener("keydown", ct), He = !0), {
		openModal: q,
		openContentModal: K,
		closeModal: J
	};
}
//#endregion
//#region src/modules/site-menu.ts
var dt = "[data-site-menu]", ft = "[data-site-menu-panel]", pt = "[data-site-menu-toggle]", mt = "[data-site-menu-toggle-label]", ht = "[data-site-menu-link]", gt = "[data-site-menu-indicator]", _t = "is-active", Y = "is-open", vt = "is-ready", yt = "data-site-menu-open-label", bt = "data-site-menu-closed-label", X = "data-site-menu-current-key", xt = "data-site-menu-key", Z = "data-site-menu-original-tabindex", St = "Close", Ct = "Menu", wt = [], Tt = !1;
function Et(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Dt(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = m(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Et(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Ot(e, t) {
	return t ? m(e, xt) === t : !1;
}
function kt(e, t) {
	var n, r;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Ot(e, m(t, X) || ((n = document.documentElement.getAttribute(X)) == null ? void 0 : n.trim()) || ((r = document.body.getAttribute(X)) == null ? void 0 : r.trim()) || "")) return !0;
	let i = Dt(e);
	return i ? i === Et(window.location.pathname) : !1;
}
function At(e) {
	let t = e.isOpen ? m(e.root, yt) || St : m(e.root, bt) || Ct;
	e.toggleLabel ? e.toggleLabel.textContent = t : e.toggle.textContent = t;
}
function jt(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = m(e, Z);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Z) && e.hasAttribute("tabindex") && e.setAttribute(Z, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Q(e, t) {
	e.isOpen = t, e.root.classList.toggle(Y, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), jt(e, t), At(e);
}
function Mt(e, t, n) {
	v.killTweensOf(e.panel), v.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	i() || v.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? .38 : .28,
		ease: t ? "power3.out" : "power2.inOut",
		onComplete: () => {
			v.set(e.panel, { clearProps: "height" });
		}
	});
}
function Nt(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Q(e, !0), Mt(e, !0, t);
}
function $(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Q(e, !1), Mt(e, !1, t);
}
function Pt(e) {
	e.isOpen ? $(e) : Nt(e);
}
function Ft(e) {
	e.links.forEach((t) => {
		let n = kt(t, e.root), r = f(gt, t);
		t.classList.toggle(_t, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function It(e) {
	var t;
	let n = f(ft, e), r = f(pt, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = f(mt, r)) == null ? f(mt, e) : t,
		links: l(ht, e),
		isOpen: e.classList.contains(Y),
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${wt.length + 1}`), r.setAttribute("aria-controls", n.id), Ft(i), Q(i, i.isOpen), e.classList.add(vt);
	let a = (e) => {
		e.preventDefault(), Pt(i);
	}, o = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || $(i);
	}, s = (e) => {
		e.key !== "Escape" || !i.isOpen || ($(i), i.toggle.focus({ preventScroll: !0 }));
	}, c = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(ht) || $(i);
	};
	return r.addEventListener("click", a), document.addEventListener("click", o), document.addEventListener("keydown", s), e.addEventListener("click", c), i.cleanup.push(() => r.removeEventListener("click", a), () => document.removeEventListener("click", o), () => document.removeEventListener("keydown", s), () => e.removeEventListener("click", c)), i;
}
function Lt(e = document) {
	if (Tt && e === document) return () => void 0;
	e === document && (Tt = !0);
	let t = l(dt, e).map(It).filter((e) => !!e);
	return wt.push(...t), () => {
		t.forEach((e) => {
			e.cleanup.forEach((e) => e()), e.root.classList.remove(vt, Y), v.killTweensOf(e.panel), v.set(e.panel, { clearProps: "height" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), jt(e, !0);
		});
	};
}
//#endregion
//#region src/main.ts
var Rt = !1;
function zt() {
	if (Rt) return;
	Rt = !0;
	let e = te();
	ut({ i18n: e }), je({ i18n: e }), Lt(), n(), window.SiteInteractions = {
		openModal: q,
		openContentModal: K,
		closeModal: J,
		openLightbox: F,
		closeLightbox: I
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", zt, { once: !0 }) : zt();
//#endregion

//# sourceMappingURL=site-interactions.js.map