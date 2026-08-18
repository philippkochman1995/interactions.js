import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as l, n as u, o as d, p as f, r as p, s as m, t as h, u as g, v as _ } from "./site-interactions-sLVQDvui.js";
import { t as v } from "./site-interactions-BxJ-FVg3.js";
//#region src/modules/i18n.ts
var y = {};
function b(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (g(t) && g(n) && (e[t.trim()] = n.trim()), e), {});
}
function x(e = document) {
	var t, n;
	y = {};
	let r = f("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (y = b(a(i))), {
		get values() {
			return { ...y };
		},
		t: S
	};
}
function S(e, t) {
	let n = e.trim(), r = y[n];
	return g(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var C = "[data-lightbox-src]", w = "js-lightbox", T = `.${w}`, E = `${C}, ${T}`, D = "[data-site-lightbox]", O = "[data-lightbox-close]", k = "[data-lightbox-prev]", A = "[data-lightbox-next]", j = "[data-lightbox-auto-icon]", ee = "site-lightbox-trigger", te = "site-lightbox-trigger__image", M = "site-lightbox-trigger__icon", N = "w-dyn-bind-empty", ne = "/plugins/Basic/assets/placeholder.", re = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", ie = !1, P = null, ae = null, F = [], I = 0, L = !1, oe = null;
function se(e) {
	let t = m(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = m(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return ce(e);
	let n = f("img", e);
	return n ? ce(n) : "";
}
function ce(e) {
	let t = m(e, "src"), n = m(e, "srcset");
	return e.classList.contains(N) || t.includes(ne) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function R(e) {
	var t, n;
	let r = m(e, "data-lightbox-alt");
	if (r) return r;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let i = f("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function z(e) {
	let t = se(e).trim();
	return t ? {
		src: t,
		caption: m(e, "data-lightbox-caption"),
		alt: R(e),
		group: m(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function le(e) {
	let t = z(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = l(E).filter((e) => m(e, "data-lightbox-group") === t.group).map(z).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function B() {
	let e = document.createElement("span");
	return e.className = M, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = re, e;
}
function ue(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function de(e) {
	if (!ue(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = P == null ? void 0 : P.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function fe(e) {
	if (e.closest(`.${ee}`) || !se(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${ee} ${w}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group"
	]) {
		let r = m(e, n);
		r && (t.setAttribute(n, r), e.removeAttribute(n));
	}
	e.classList.remove(w), e.classList.add(te), e.before(t), t.append(e, B()), de(t);
}
function pe(e) {
	if (e instanceof HTMLImageElement) {
		fe(e);
		return;
	}
	se(e).trim() && (e.classList.add(ee), de(e), f(j, e) || e.append(B()));
}
function V() {
	l(T).forEach(pe);
}
function me(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function he() {
	var e, t, n, r, i, a;
	if (ae) return ge(ae), ae;
	let o = f(D), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = P == null ? void 0 : P.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, l, u;
		s.innerHTML = "";
		let e = me((c = P == null ? void 0 : P.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = me((l = P == null ? void 0 : P.t("previous", "Previous")) == null ? "Previous" : l, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = me((u = P == null ? void 0 : P.t("next", "Next")) == null ? "Next" : u, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = f(O, s)) == null ? document.createElement("button") : r,
		previousButton: (i = f(k, s)) == null ? document.createElement("button") : i,
		nextButton: (a = f(A, s)) == null ? document.createElement("button") : a
	};
	return ae = d, ge(d), !o && !document.body.contains(s) && document.body.append(s), d;
}
function ge(e) {
	var t, n, r, i;
	let a = (t = P == null ? void 0 : P.t("close", "Close")) == null ? "Close" : t, o = (n = P == null ? void 0 : P.t("previous", "Previous")) == null ? "Previous" : n, s = (r = P == null ? void 0 : P.t("next", "Next")) == null ? "Next" : r, c = (i = P == null ? void 0 : P.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function H() {
	let e = he(), t = F[I];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = F.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(I), e.root.dataset.lightboxCount = String(F.length);
}
function U(e) {
	let t = he();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function _e(e) {
	F.length < 2 || (I = (e + F.length) % F.length, H());
}
function W() {
	_e(I + 1);
}
function ve() {
	_e(I - 1);
}
function ye(e) {
	var t;
	let n = le(e);
	if (!n) return;
	let i = L;
	F = n.items, I = n.index, oe = e, L = !0, H(), U(!0), i || r();
	let a = he();
	p(a.closeButton || a.root);
	let o = F[I];
	u(a.root, "site:lightbox-open", {
		item: o,
		index: I,
		count: F.length,
		group: (t = o == null ? void 0 : o.group) == null ? "" : t,
		trigger: e
	});
}
function G() {
	var e;
	if (!L || !ae) return;
	let t = ae, n = oe, r = (e = F[I]) == null ? null : e;
	U(!1), _(), L = !1, F = [], I = 0, oe = null, t.image.removeAttribute("src"), t.caption.textContent = "", u(t.root, "site:lightbox-close", { item: r }), o(n);
}
function be(t) {
	if (!(!L || !ae)) {
		if (t.key === "Escape") {
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), G();
			return;
		}
		if (t.key === "ArrowRight") {
			t.preventDefault(), W();
			return;
		}
		if (t.key === "ArrowLeft") {
			t.preventDefault(), ve();
			return;
		}
		e(ae.root, t);
	}
}
function xe(e) {
	!L || !ae || e.target === ae.root && G();
}
function Se(e) {
	return P = e.i18n, V(), ie || (h(document, "click", E, (e, t) => {
		e.preventDefault(), ye(t);
	}), h(document, "keydown", T, (e, t) => {
		ue(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), ye(t));
	}), h(document, "click", O, (e) => {
		e.preventDefault(), G();
	}), h(document, "click", k, (e) => {
		e.preventDefault(), ve();
	}), h(document, "click", A, (e) => {
		e.preventDefault(), W();
	}), document.addEventListener("click", xe), document.addEventListener("keydown", be, !0), ie = !0), {
		openLightbox: ye,
		closeLightbox: G
	};
}
//#endregion
//#region src/modules/modal.ts
var Ce = "[data-modal]", we = "[data-modal-content]", Te = "[data-modal-open]", Ee = "[data-modal-close]", K = "a[href^=\"#modal:\"]", De = "#modal:", Oe = 220, ke = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Ae = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", je = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Me = !1, Ne = !0, Pe = null, Fe = null, Ie = "", Le = null, Re = null, ze = /* @__PURE__ */ new Map();
function Be(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(De) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Ve() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Ee),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = ke, t.lightboxIcon.innerHTML = Ae, Ue(t), t;
}
function He() {
	return (!Fe || !document.body.contains(Fe.root)) && (Fe = Ve()), Ue(Fe), Fe;
}
function Ue(e) {
	var t, n;
	let r = (t = Pe == null ? void 0 : Pe.t("close", "Close")) == null ? "Close" : t, i = (n = Pe == null ? void 0 : Pe.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function We(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function Ge(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Ke(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = Ge(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = We(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function qe(e) {
	var t, n, r;
	let i = l("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = Ge(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: We(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = Ge(e, "[data-modal-image]"), o = We(a);
	return o ? [{
		src: o,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function Je(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal-content");
	if (!l) return null;
	let u = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", d = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, f = qe(e), p = f[0], h = e.querySelector("[data-modal-body]");
	return {
		id: l,
		address: u,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: d,
		image: (a = p == null ? void 0 : p.src) == null ? "" : a,
		imageAlt: (o = p == null ? void 0 : p.alt) == null ? "" : o,
		caption: (s = p == null ? void 0 : p.caption) == null ? "" : s,
		html: (c = h == null ? void 0 : h.innerHTML) == null ? "" : c,
		work: Ke(e),
		gallery: f
	};
}
function Ye(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal");
	if (!l) return null;
	let u = e.querySelector(".fwm-modal__image"), d = We(u), f = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
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
function Xe() {
	l(we).forEach((e) => {
		let t = Je(e);
		t && ze.set(t.id, t);
	}), l(Ce).forEach((e) => {
		let t = Ye(e);
		t && ze.set(t.id, t), e.remove();
	});
}
function Ze(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = l(we).find((e) => m(e, "data-modal-content") === n), i = r ? Je(r) : null;
	return i && ze.set(n, i), (t = i == null ? ze.get(n) : i) == null ? null : t;
}
function Qe(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = je, r.append(i, o), t.append(r), t;
}
function $e(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Ae, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function et(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function tt(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, et(e);
}
function nt(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(Qe(t.work)), i.forEach((t, n) => {
		e.gallery.append($e(t, n));
	});
}
function rt(e) {
	let t = He();
	return e.layout === "context" ? nt(t, e) : tt(t, e), t;
}
function it(e) {
	let t = d(e.panel)[0];
	p(t == null ? e.panel : t);
}
function at(e) {
	Re !== null && (window.clearTimeout(Re), Re = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function ot(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Re = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Re = null;
	}, Oe), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function st(e, t) {
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
	Ie && lt(), ze.set(g.id, g), Le = t == null ? s() : t, Ie = g.id;
	let _ = rt(g);
	at(_), r(), it(_), u(_.root, "site:modal-open", {
		id: Ie,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function ct(e, t) {
	let n = Ze(e);
	n && st(n, t);
}
function lt() {
	if (!Ie || !Fe) return;
	let e = Ie, t = Le;
	ot(Fe), _(), Ie = "", Le = null, u(Fe.root, "site:modal-close", {
		id: e,
		modal: Fe.root
	}), o(t);
}
function ut(t) {
	if (!(!Ie || !Fe) && !document.body.classList.contains("is-lightbox-open")) {
		if (t.key === "Escape") {
			t.preventDefault(), lt();
			return;
		}
		e(Fe.panel, t);
	}
}
function dt(e) {
	if (!Ne || !Ie || !Fe) return;
	let t = e.target;
	!c(t) || t !== Fe.root || lt();
}
function ft(e) {
	var n;
	return Ne = (n = e.closeOnBackdrop) == null || n, Pe = e.i18n, Xe(), He(), Me || (h(document, "click", Te, (e, n) => {
		e.preventDefault(), ct(t(n, "data-modal-open"), n);
	}), h(document, "click", K, (e, t) => {
		e.preventDefault(), ct(Be(t), t);
	}), h(document, "click", Ee, (e, t) => {
		Fe != null && Fe.root.contains(t) && (e.preventDefault(), lt());
	}), document.addEventListener("click", dt), document.addEventListener("keydown", ut), Me = !0), {
		openModal: ct,
		openContentModal: st,
		closeModal: lt
	};
}
//#endregion
//#region src/modules/page-transition.ts
var pt = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, mt = "page-transition-overlay", ht = "[data-page-transition-overlay], .page-transition-overlay", gt = "site-page-transition", _t = "pending", vt = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[download]"
].join(","), yt = !1, bt = !1;
function xt() {
	let e = document.querySelector(ht);
	if (e) return e.classList.add(mt), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = mt, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function St(e) {
	return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}
function Ct(e) {
	var t;
	return !!(e.closest(vt) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function wt(e) {
	var t, n;
	let r = (t = (n = e.getAttribute("href")) == null ? void 0 : n.trim()) == null ? "" : t;
	if (!r || r.startsWith("#") || r.startsWith("mailto:") || r.startsWith("tel:")) return null;
	let i;
	try {
		i = new URL(e.href, window.location.href);
	} catch (e) {
		return null;
	}
	return i.origin !== window.location.origin || i.href === window.location.href || i.pathname === window.location.pathname && i.search === window.location.search ? null : i;
}
function Tt(e, t) {
	return !bt && !e.defaultPrevented && !St(e) && !Ct(t);
}
function Et() {
	try {
		window.sessionStorage.setItem(gt, _t);
	} catch (e) {}
}
function Dt() {
	try {
		let e = window.sessionStorage.getItem(gt) === _t;
		return window.sessionStorage.removeItem(gt), e;
	} catch (e) {
		return !1;
	}
}
function Ot(e) {
	if (i() || !Dt()) {
		v.set(e, { yPercent: -100 });
		return;
	}
	v.fromTo(e, { yPercent: 0 }, {
		yPercent: 100,
		delay: pt.holdDuration,
		duration: pt.revealDuration,
		ease: pt.ease,
		onComplete: () => {
			v.set(e, { yPercent: -100 });
		}
	});
}
function kt(e, t) {
	bt = !0, Et(), v.killTweensOf(t), v.fromTo(t, { yPercent: -100 }, {
		yPercent: 0,
		duration: pt.coverDuration,
		ease: pt.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	});
}
function At(e, t) {
	e.persisted && (bt = !1, Dt(), v.set(t, { yPercent: -100 }));
}
function jt() {
	if (yt) return;
	yt = !0;
	let e = xt();
	Ot(e), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (bt) {
			t.preventDefault();
			return;
		}
		if (!Tt(t, r)) return;
		let a = wt(r);
		!a || i() || (t.preventDefault(), kt(a, e));
	}, !0), window.addEventListener("pageshow", (t) => At(t, e));
}
//#endregion
//#region src/modules/site-menu.ts
var Mt = "[data-site-menu]", Nt = "[data-site-menu-panel]", Pt = "[data-site-menu-toggle]", Ft = "[data-site-menu-toggle-label]", It = "[data-site-menu-link]", Lt = "[data-site-menu-indicator]", Rt = "is-active", zt = "is-open", Bt = "is-ready", Vt = "data-site-menu-open-label", Ht = "data-site-menu-closed-label", Ut = "data-site-menu-current-key", Wt = "data-site-menu-label", Gt = "data-site-menu-key", Kt = "data-site-menu-original-tabindex", qt = "CLOSE", Jt = "MENU", Yt = [], Xt = !1;
function Zt(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Qt(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = m(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Zt(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function $t(e, t) {
	return t ? m(e, Gt) === t : !1;
}
function en(e, t) {
	var n, r;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || $t(e, m(t, Ut) || ((n = document.documentElement.getAttribute(Ut)) == null ? void 0 : n.trim()) || ((r = document.body.getAttribute(Ut)) == null ? void 0 : r.trim()) || "")) return !0;
	let i = Qt(e);
	return i ? i === Zt(window.location.pathname) : !1;
}
function tn(e) {
	var t, n;
	return m(e, Wt) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function nn(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Rt) || e.classList.contains("w--current"))) == null ? e.links.find((t) => en(t, e.root)) : t;
	return n ? tn(n) : "";
}
function rn(e, t = !0) {
	var n;
	let r = m(e.root, Vt) || qt, a = m(e.root, Ht) || Jt, o = nn(e), s = e.isOpen ? r : e.isHovered ? a : o || a, c = (n = e.toggleLabel) == null ? e.toggle : n;
	if (c.textContent !== s) {
		if (v.killTweensOf(c), i() || !t) {
			c.textContent = s, v.set(c, { clearProps: "opacity" });
			return;
		}
		v.to(c, {
			opacity: 0,
			duration: .08,
			ease: "power1.out",
			onComplete: () => {
				c.textContent = s, v.to(c, {
					opacity: 1,
					duration: .12,
					ease: "power1.in",
					onComplete: () => {
						v.set(c, { clearProps: "opacity" });
					}
				});
			}
		});
	}
}
function an(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = m(e, Kt);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Kt) && e.hasAttribute("tabindex") && e.setAttribute(Kt, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function on(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(zt, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), an(e, t), rn(e, n);
}
function sn(e, t, n) {
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
function cn(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	on(e, !0), sn(e, !0, t);
}
function ln(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	on(e, !1), sn(e, !1, t);
}
function un(e) {
	e.isOpen ? ln(e) : cn(e);
}
function dn(e) {
	e.links.forEach((t) => {
		let n = en(t, e.root), r = f(Lt, t);
		t.classList.toggle(Rt, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function fn(e) {
	var t;
	let n = f(Nt, e), r = f(Pt, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = f(Ft, r)) == null ? f(Ft, e) : t,
		links: l(It, e),
		isOpen: e.classList.contains(zt),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Yt.length + 1}`), r.setAttribute("aria-controls", n.id), dn(i), on(i, i.isOpen, !1), e.classList.add(Bt);
	let a = (e) => {
		e.preventDefault(), un(i);
	}, o = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || ln(i);
	}, s = (e) => {
		e.key !== "Escape" || !i.isOpen || (ln(i), i.toggle.focus({ preventScroll: !0 }));
	}, c = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(It) || ln(i);
	}, u = () => {
		i.isHovered = !0, rn(i);
	}, d = () => {
		i.isHovered = !1, rn(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", u), e.addEventListener("pointerleave", d), document.addEventListener("click", o), document.addEventListener("keydown", s), e.addEventListener("click", c), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", u), () => e.removeEventListener("pointerleave", d), () => document.removeEventListener("click", o), () => document.removeEventListener("keydown", s), () => e.removeEventListener("click", c)), i;
}
function pn(e = document) {
	if (Xt && e === document) return () => void 0;
	e === document && (Xt = !0);
	let t = l(Mt, e).map(fn).filter((e) => !!e);
	return Yt.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Bt, zt), v.killTweensOf(e.panel), v.killTweensOf((t = e.toggleLabel) == null ? e.toggle : t), v.set(e.panel, { clearProps: "height" }), v.set((n = e.toggleLabel) == null ? e.toggle : n, { clearProps: "opacity" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), an(e, !0);
		});
	};
}
//#endregion
//#region node_modules/gsap/Observer.js
function mn(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function hn(e, t, n) {
	return t && mn(e.prototype, t), n && mn(e, n), e;
}
var gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn = function() {
	return gn || typeof window < "u" && (gn = window.gsap) && gn.registerPlugin && gn;
}, An = 1, jn = [], q = [], Mn = [], Nn = Date.now, Pn = function(e, t) {
	return t;
}, Fn = function() {
	var e = wn.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, q), r.push.apply(r, Mn), q = n, Mn = r, Pn = function(e, n) {
		return t[e](n);
	};
}, In = function(e, t) {
	return ~Mn.indexOf(e) && Mn[Mn.indexOf(e) + 1][t];
}, Ln = function(e) {
	return !!~Tn.indexOf(e);
}, Rn = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, zn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Bn = "scrollLeft", Vn = "scrollTop", Hn = function() {
	return En && En.isPressed || q.cache++;
}, Un = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			An && (vn.history.scrollRestoration = "manual");
			var i = En && En.isPressed;
			r = n.v = Math.round(r) || (En && En.iOS ? 1 : 0), e(r), n.cacheID = q.cache, i && Pn("ss", r);
		} else (t || q.cache !== n.cacheID || Pn("ref")) && (n.cacheID = q.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Wn = {
	s: Bn,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: Un(function(e) {
		return arguments.length ? vn.scrollTo(e, Gn.sc()) : vn.pageXOffset || yn[Bn] || bn[Bn] || xn[Bn] || 0;
	})
}, Gn = {
	s: Vn,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Wn,
	sc: Un(function(e) {
		return arguments.length ? vn.scrollTo(Wn.sc(), e) : vn.pageYOffset || yn[Vn] || bn[Vn] || xn[Vn] || 0;
	})
}, Kn = function(e, t) {
	return (t && t._ctx && t._ctx.selector || gn.utils.toArray)(e)[0] || (typeof e == "string" && gn.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, qn = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Jn = function(e, t) {
	var n = t.s, r = t.sc;
	Ln(e) && (e = yn.scrollingElement || bn);
	var i = q.indexOf(e), a = r === Gn.sc ? 1 : 2;
	!~i && (i = q.push(e) - 1), q[i + a] || Rn(e, "scroll", Hn);
	var o = q[i + a], s = o || (q[i + a] = Un(In(e, n), !0) || (Ln(e) ? r : Un(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = gn.getProperty(e, "scrollBehavior") === "smooth"), s;
}, Yn = function(e, t, n) {
	var r = e, i = e, a = Nn(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = Nn();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = Nn();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Xn = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Zn = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Qn = function() {
	wn = gn.core.globals().ScrollTrigger, wn && wn.core && Fn();
}, $n = function(e) {
	return gn = e || kn(), !_n && gn && typeof document < "u" && document.body && (vn = window, yn = document, bn = yn.documentElement, xn = yn.body, Tn = [
		vn,
		yn,
		bn,
		xn
	], gn.utils.clamp, On = gn.core.context || function() {}, Cn = "onpointerenter" in xn ? "pointer" : "mouse", Sn = er.isTouch = vn.matchMedia && vn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in vn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Dn = er.eventTypes = ("ontouchstart" in bn ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in bn ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return An = 0;
	}, 500), _n = 1), wn || Qn(), _n;
};
Wn.op = Gn, q.cache = 0;
var er = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		_n || $n(gn) || console.warn("Please gsap.registerPlugin(Observer)"), wn || Qn();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, k = e.onMove, A = e.ignoreCheck, j = e.isNormalizer, ee = e.onGestureStart, te = e.onGestureEnd, M = e.onWheel, N = e.onEnable, ne = e.onDisable, re = e.onClick, ie = e.scrollSpeed, P = e.capture, ae = e.allowClicks, F = e.lockAxis, I = e.onLockAxis;
		this.target = i = Kn(i) || bn, this.vars = e, u && (u = gn.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ie = ie || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(vn.getComputedStyle(xn).lineHeight) || 22);
		var L, oe, se, ce, R, z, le, B = this, ue = 0, de = 0, fe = e.passive || !s && e.passive !== !1, pe = Jn(i, Wn), V = Jn(i, Gn), me = pe(), he = V(), ge = ~r.indexOf("touch") && !~r.indexOf("pointer") && Dn[0] === "pointerdown", H = Ln(i), U = i.ownerDocument || yn, _e = [
			0,
			0,
			0
		], W = [
			0,
			0,
			0
		], ve = 0, ye = function() {
			return ve = Nn();
		}, G = function(e, t) {
			return (B.event = e) && u && qn(e.target, u) || t && ge && e.pointerType !== "touch" || A && A(e, t);
		}, be = function() {
			B._vx.reset(), B._vy.reset(), oe.pause(), c && c(B);
		}, xe = function() {
			var e = B.deltaX = Zn(_e), n = B.deltaY = Zn(W), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(B, e, n, _e, W), r && (v && B.deltaX > 0 && v(B), y && B.deltaX < 0 && y(B), S && S(B), T && B.deltaX < 0 != ue < 0 && T(B), ue = B.deltaX, _e[0] = _e[1] = _e[2] = 0), i && (x && B.deltaY > 0 && x(B), b && B.deltaY < 0 && b(B), C && C(B), E && B.deltaY < 0 != de < 0 && E(B), de = B.deltaY, W[0] = W[1] = W[2] = 0), (ce || se) && (k && k(B), se && (p && se === 1 && p(B), h && h(B), se = 0), ce = !1), z && !(z = !1) && I && I(B), R && (M(B), R = !1), L = 0;
		}, Se = function(e, t, n) {
			_e[n] += e, W[n] += t, B._vx.update(e), B._vy.update(t), o ? L || (L = requestAnimationFrame(xe)) : xe();
		}, Ce = function(e, t) {
			F && !le && (B.axis = le = Math.abs(e) > Math.abs(t) ? "x" : "y", z = !0), le !== "y" && (_e[2] += e, B._vx.update(e, !0)), le !== "x" && (W[2] += t, B._vy.update(t, !0)), o ? L || (L = requestAnimationFrame(xe)) : xe();
		}, we = function(e) {
			if (!G(e, 1)) {
				e = Xn(e, s);
				var t = e.clientX, r = e.clientY, i = t - B.x, a = r - B.y, o = B.isDragging;
				B.x = t, B.y = r, (o || (i || a) && (Math.abs(B.startX - t) >= n || Math.abs(B.startY - r) >= n)) && (se || (se = o ? 2 : 1), o || (B.isDragging = !0), Ce(i, a));
			}
		}, Te = B.onPress = function(e) {
			G(e, 1) || e && e.button || (B.axis = le = null, oe.pause(), B.isPressed = !0, e = Xn(e), ue = de = 0, B.startX = B.x = e.clientX, B.startY = B.y = e.clientY, B._vx.reset(), B._vy.reset(), Rn(j ? i : U, Dn[1], we, fe, !0), B.deltaX = B.deltaY = 0, g && g(B));
		}, Ee = B.onRelease = function(e) {
			if (!G(e, 1)) {
				zn(j ? i : U, Dn[1], we, !0);
				var t = !isNaN(B.y - B.startY), n = B.isDragging, r = n && (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3), a = Xn(e);
				!r && t && (B._vx.reset(), B._vy.reset(), s && ae && gn.delayedCall(.08, function() {
					if (Nn() - ve > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (U.createEvent) {
							var t = U.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, vn, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), B.isDragging = B.isGesturing = B.isPressed = !1, c && n && !j && oe.restart(!0), se && xe(), m && n && m(B), _ && _(B, r);
			}
		}, K = function(e) {
			return e.touches && e.touches.length > 1 && (B.isGesturing = !0) && ee(e, B.isDragging);
		}, De = function() {
			return (B.isGesturing = !1) || te(B);
		}, Oe = function(e) {
			if (!G(e)) {
				var t = pe(), n = V();
				Se((t - me) * ie, (n - he) * ie, 1), me = t, he = n, c && oe.restart(!0);
			}
		}, ke = function(e) {
			if (!G(e)) {
				e = Xn(e, s), M && (R = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? vn.innerHeight : 1) * d;
				Se(e.deltaX * t, e.deltaY * t, 0), c && !j && oe.restart(!0);
			}
		}, Ae = function(e) {
			if (!G(e)) {
				var t = e.clientX, n = e.clientY, r = t - B.x, i = n - B.y;
				B.x = t, B.y = n, ce = !0, c && oe.restart(!0), (r || i) && Ce(r, i);
			}
		}, je = function(e) {
			B.event = e, D(B);
		}, Me = function(e) {
			B.event = e, O(B);
		}, Ne = function(e) {
			return G(e) || Xn(e, s) && re(B);
		};
		oe = B._dc = gn.delayedCall(l || .25, be).pause(), B.deltaX = B.deltaY = 0, B._vx = Yn(0, 50, !0), B._vy = Yn(0, 50, !0), B.scrollX = pe, B.scrollY = V, B.isDragging = B.isGesturing = B.isPressed = !1, On(this), B.enable = function(e) {
			return B.isEnabled || (Rn(H ? U : i, "scroll", Hn), r.indexOf("scroll") >= 0 && Rn(H ? U : i, "scroll", Oe, fe, P), r.indexOf("wheel") >= 0 && Rn(i, "wheel", ke, fe, P), (r.indexOf("touch") >= 0 && Sn || r.indexOf("pointer") >= 0) && (Rn(i, Dn[0], Te, fe, P), Rn(U, Dn[2], Ee), Rn(U, Dn[3], Ee), ae && Rn(i, "click", ye, !0, !0), re && Rn(i, "click", Ne), ee && Rn(U, "gesturestart", K), te && Rn(U, "gestureend", De), D && Rn(i, Cn + "enter", je), O && Rn(i, Cn + "leave", Me), k && Rn(i, Cn + "move", Ae)), B.isEnabled = !0, B.isDragging = B.isGesturing = B.isPressed = ce = se = !1, B._vx.reset(), B._vy.reset(), me = pe(), he = V(), e && e.type && Te(e), N && N(B)), B;
		}, B.disable = function() {
			B.isEnabled && (jn.filter(function(e) {
				return e !== B && Ln(e.target);
			}).length || zn(H ? U : i, "scroll", Hn), B.isPressed && (B._vx.reset(), B._vy.reset(), zn(j ? i : U, Dn[1], we, !0)), zn(H ? U : i, "scroll", Oe, P), zn(i, "wheel", ke, P), zn(i, Dn[0], Te, P), zn(U, Dn[2], Ee), zn(U, Dn[3], Ee), zn(i, "click", ye, !0), zn(i, "click", Ne), zn(U, "gesturestart", K), zn(U, "gestureend", De), zn(i, Cn + "enter", je), zn(i, Cn + "leave", Me), zn(i, Cn + "move", Ae), B.isEnabled = B.isPressed = B.isDragging = !1, ne && ne(B));
		}, B.kill = B.revert = function() {
			B.disable();
			var e = jn.indexOf(B);
			e >= 0 && jn.splice(e, 1), En === B && (En = 0);
		}, jn.push(B), j && Ln(i) && (En = B), B.enable(f);
	}, hn(e, [{
		key: "velocityX",
		get: function() {
			return this._vx.getVelocity();
		}
	}, {
		key: "velocityY",
		get: function() {
			return this._vy.getVelocity();
		}
	}]), e;
}();
er.version = "3.15.0", er.create = function(e) {
	return new er(e);
}, er.register = $n, er.getAll = function() {
	return jn.slice();
}, er.getById = function(e) {
	return jn.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, kn() && gn.registerPlugin(er);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var J, tr, Y, X, nr, Z, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr = 1, Mr = Date.now, Nr = Mr(), Pr = 0, Fr = 0, Ir = function(e, t, n) {
	var r = Qr(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, Lr = function(e, t) {
	return t && (!Qr(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, Rr = function e() {
	return Fr && requestAnimationFrame(e);
}, zr = function() {
	return ur = 1;
}, Br = function() {
	return ur = 0;
}, Vr = function(e) {
	return e;
}, Hr = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, Ur = function() {
	return typeof window < "u";
}, Wr = function() {
	return J || Ur() && (J = window.gsap) && J.registerPlugin && J;
}, Gr = function(e) {
	return !!~rr.indexOf(e);
}, Kr = function(e) {
	return (e === "Height" ? Dr : Y["inner" + e]) || nr["client" + e] || Z["client" + e];
}, qr = function(e) {
	return In(e, "getBoundingClientRect") || (Gr(e) ? function() {
		return ya.width = Y.innerWidth, ya.height = Dr, ya;
	} : function() {
		return Ci(e);
	});
}, Jr = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = In(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Kr(i) : e["client" + i]) || 0;
	};
}, Yr = function(e, t) {
	return !t || ~Mn.indexOf(e) ? qr(e) : function() {
		return ya;
	};
}, Xr = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = In(e, n)) ? a() - qr(e)()[i] : Gr(e) ? (nr[n] || Z[n]) - Kr(r) : e[n] - e["offset" + r]);
}, Zr = function(e, t) {
	for (var n = 0; n < hr.length; n += 3) (!t || ~t.indexOf(hr[n + 1])) && e(hr[n], hr[n + 1], hr[n + 2]);
}, Qr = function(e) {
	return typeof e == "string";
}, $r = function(e) {
	return typeof e == "function";
}, ei = function(e) {
	return typeof e == "number";
}, ti = function(e) {
	return typeof e == "object";
}, ni = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, ri = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, ii = Math.abs, ai = "left", oi = "top", si = "right", ci = "bottom", li = "width", ui = "height", di = "Right", fi = "Left", pi = "Top", mi = "Bottom", hi = "padding", gi = "margin", _i = "Width", vi = "Height", yi = "px", bi = function(e) {
	return Y.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, xi = function(e) {
	var t = bi(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, Si = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Ci = function(e, t) {
	var n = t && bi(e)[dr] !== "matrix(1, 0, 0, 1, 0, 0)" && J.to(e, {
		x: 0,
		y: 0,
		xPercent: 0,
		yPercent: 0,
		rotation: 0,
		rotationX: 0,
		rotationY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0
	}).progress(1), r = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
	return n && n.progress(0).kill(), r;
}, wi = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Ti = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, Ei = function(e) {
	return function(t) {
		return J.utils.snap(Ti(e), t);
	};
}, Di = function(e) {
	var t = J.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
		return e - t;
	});
	return n ? function(e, r, i) {
		i === void 0 && (i = .001);
		var a;
		if (!r) return t(e);
		if (r > 0) {
			for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
			return n[a - 1];
		} else for (a = n.length, e += i; a--;) if (n[a] <= e) return n[a];
		return n[0];
	} : function(n, r, i) {
		i === void 0 && (i = .001);
		var a = t(n);
		return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e);
	};
}, Oi = function(e) {
	return function(t, n) {
		return Di(Ti(e))(t, n.direction);
	};
}, ki = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, Ai = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, ji = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Mi = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, Ni = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, Pi = {
	toggleActions: "play",
	anticipatePin: 0
}, Fi = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, Ii = function(e, t) {
	if (Qr(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Fi ? Fi[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, Li = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = X.createElement("div"), m = Gr(n) || In(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Z : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === Gn ? si : ci) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Ri(p, 0, r, _), p;
}, Ri = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + _i] = 1, i["border" + o + _i] = 0, i[n.p] = t + "px", J.set(e, i);
}, Q = [], zi = {}, Bi, Vi = function() {
	return Mr() - Pr > 34 && (Bi || (Bi = requestAnimationFrame(ua)));
}, Hi = function() {
	(!yr || !yr.isPressed || yr.startX > Z.clientWidth) && (q.cache++, yr ? Bi || (Bi = requestAnimationFrame(ua)) : ua(), Pr || Ji("scrollStart"), Pr = Mr());
}, Ui = function() {
	Sr = Y.innerWidth, xr = Y.innerHeight;
}, Wi = function(e) {
	q.cache++, (e === !0 || !lr && !vr && !X.fullscreenElement && !X.webkitFullscreenElement && (!br || Sr !== Y.innerWidth || Math.abs(Y.innerHeight - xr) > Y.innerHeight * .25)) && ir.restart(!0);
}, Gi = {}, Ki = [], qi = function e() {
	return ji($, "scrollEnd", e) || oa(!0);
}, Ji = function(e) {
	return Gi[e] && Gi[e].map(function(e) {
		return e();
	}) || Ki;
}, Yi = [], Xi = function(e) {
	for (var t = 0; t < Yi.length; t += 5) (!e || Yi[t + 4] && Yi[t + 4].query === e) && (Yi[t].style.cssText = Yi[t + 1], Yi[t].getBBox && Yi[t].setAttribute("transform", Yi[t + 2] || ""), Yi[t + 3].uncache = 1);
}, Zi = function() {
	return q.forEach(function(e) {
		return $r(e) && ++e.cacheID && (e.rec = e());
	});
}, Qi = function(e, t) {
	var n;
	for (fr = 0; fr < Q.length; fr++) n = Q[fr], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Or = !0, t && Xi(t), t || Ji("revert");
}, $i = function(e, t) {
	q.cache++, (t || !ea) && q.forEach(function(e) {
		return $r(e) && e.cacheID++ && (e.rec = 0);
	}), Qr(e) && (Y.history.scrollRestoration = Tr = e);
}, ea, ta = 0, na, ra = function() {
	if (na !== ta) {
		var e = na = ta;
		requestAnimationFrame(function() {
			return e === ta && oa(!0);
		});
	}
}, ia = function() {
	Z.appendChild(Er), Dr = !yr && Er.offsetHeight || Y.innerHeight, Z.removeChild(Er);
}, aa = function(e) {
	return ar(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, oa = function(e, t) {
	if (nr = X.documentElement, Z = X.body, rr = [
		Y,
		X,
		nr,
		Z
	], Pr && !e && !Or) {
		Ai($, "scrollEnd", qi);
		return;
	}
	ia(), ea = $.isRefreshing = !0, Or || Zi();
	var n = Ji("refreshInit");
	gr && $.sort(), t || Qi(), q.forEach(function(e) {
		$r(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), Or = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), kr = 1, aa(!0), Q.forEach(function(e) {
		var t = Xr(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), aa(!1), kr = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), q.forEach(function(e) {
		$r(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), $i(Tr, 1), ir.pause(), ta++, ea = 2, ua(2), Q.forEach(function(e) {
		return $r(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), ea = $.isRefreshing = !1, Ji("refresh");
}, sa = 0, ca = 1, la, ua = function(e) {
	if (e === 2 || !ea && !Or) {
		$.isUpdating = !0, la && la.update(0);
		var t = Q.length, n = Mr(), r = n - Nr >= 50, i = t && Q[0].scroll();
		if (ca = sa > i ? -1 : 1, ea || (sa = i), r && (Pr && !ur && n - Pr > 200 && (Pr = 0, Ji("scrollEnd")), sr = Nr, Nr = n), ca < 0) {
			for (fr = t; fr-- > 0;) Q[fr] && Q[fr].update(0, r);
			ca = 1;
		} else for (fr = 0; fr < t; fr++) Q[fr] && Q[fr].update(0, r);
		$.isUpdating = !1;
	}
	Bi = 0;
}, da = [
	ai,
	oi,
	ci,
	si,
	gi + mi,
	gi + di,
	gi + pi,
	gi + fi,
	"display",
	"flexShrink",
	"float",
	"zIndex",
	"gridColumnStart",
	"gridColumnEnd",
	"gridRowStart",
	"gridRowEnd",
	"gridArea",
	"justifySelf",
	"alignSelf",
	"placeSelf",
	"order"
], fa = da.concat([
	li,
	ui,
	"boxSizing",
	"max" + _i,
	"max" + vi,
	"position",
	gi,
	hi,
	hi + pi,
	hi + di,
	hi + mi,
	hi + fi
]), pa = function(e, t, n) {
	ga(n);
	var r = e._gsap;
	if (r.spacerIsNative) ga(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, ma = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = da.length, a = t.style, o = e.style, s; i--;) s = da[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[ci] = o[si] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[li] = wi(e, Wn) + yi, a[ui] = wi(e, Gn) + yi, a[hi] = o[gi] = o[oi] = o[ai] = "0", ga(r), o[li] = o["max" + _i] = n[li], o[ui] = o["max" + vi] = n[ui], o[hi] = n[hi], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, ha = /([A-Z])/g, ga = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(ha, "-$1").toLowerCase());
	}
}, _a = function(e) {
	for (var t = fa.length, n = e.style, r = [], i = 0; i < t; i++) r.push(fa[i], n[fa[i]]);
	return r.t = e, r;
}, va = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, ya = {
	left: 0,
	top: 0
}, ba = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	$r(e) && (e = e(s)), Qr(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Ii("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), ei(e)) f && (e = J.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && Ri(o, n, r, !0);
	else {
		$r(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Kn(t, s) || Z, y = Ci(_) || {}, (!y || !y.left && !y.top) && bi(_).display === "none" && (S = _.style.display, _.style.display = "block", y = Ci(_), S ? _.style.display = S : _.style.removeProperty("display")), b = Ii(v[0], y[r.d]), x = Ii(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && Ri(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, Ri(a, C, r, w && C > 20 || !w && (u ? Math.max(Z[h], nr[h]) : a.parentNode[h]) <= C + 1), u && (c = Ci(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + yi));
	}
	return f && _ && (h = Ci(_), f.seek(d), g = Ci(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, xa = /(webkit|moz|length|cssText|inset)/i, Sa = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Z) {
			for (a in e._stOrig = i.cssText, o = bi(e), o) !+a && !xa.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		J.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, Ca = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, wa = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, J.set(e, r);
}, Ta = function(e, t) {
	var n = Jn(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = Ca(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			q.cache++, t.tween && ua();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = J.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, Ai(e, "wheel", n.wheelHandler), $.isTouch && Ai(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		tr || e.register(J) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), wr(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Fr) {
			this.update = this.refresh = this.kill = Vr;
			return;
		}
		t = Si(Qr(t) || ei(t) || t.nodeType ? { trigger: t } : t, Pi);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Wn : Gn, T = !l && l !== 0, E = Kn(t.scroller || Y), D = J.core.getCache(E), O = Gr(E), k = ("pinType" in t ? t.pinType : In(E, "pinType") || O && "fixed") === "fixed", A = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], j = T && t.toggleActions.split(" "), ee = "markers" in t ? t.markers : Pi.markers, te = O ? 0 : parseFloat(bi(E)["border" + w.p2 + _i]) || 0, M = this, N = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, ne = Jr(E, O, w), re = Yr(E, O), ie = 0, P = 0, ae = 0, F = Jn(E, w), I, L, oe, se, ce, R, z, le, B, ue, de, fe, pe, V, me, he, ge, H, U, _e, W, ve, ye, G, be, xe, Se, Ce, we, Te, Ee, K, De, Oe, ke, Ae, je, Me, Ne;
		if (M._startClamp = M._endClamp = !1, M._dir = w, m *= 45, M.scroller = E, M.scroll = x ? x.time.bind(x) : F, se = F(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (gr = 1, t.refreshPriority === -9999 && (la = M)), D.tweenScroll = D.tweenScroll || {
			top: Ta(E, Gn),
			left: Ta(E, Wn)
		}, M.tweenTo = I = D.tweenScroll[w.p], M.scrubDuration = function(e) {
			De = ei(e) && e, De ? K ? K.duration(e) : K = J.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: De,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (K && K.progress(1).kill(), K = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), Te = 0, o || (o = n.vars.id)), v && ((!ti(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Z.style && J.set(O ? [Z, nr] : E, { scrollBehavior: "auto" }), q.forEach(function(e) {
			return $r(e) && e.target === (O ? X.scrollingElement || nr : E) && (e.smooth = !1);
		}), oe = $r(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Ei(n) : v.snapTo === "labelsDirectional" ? Oi(n) : v.directional === !1 ? J.utils.snap(v.snapTo) : function(e, t) {
			return Di(v.snapTo)(e, Mr() - P < 500 ? 0 : t.direction);
		}, Oe = v.duration || {
			min: .1,
			max: 2
		}, Oe = ti(Oe) ? or(Oe.min, Oe.max) : or(Oe, Oe), ke = J.delayedCall(v.delay || De / 2 || .1, function() {
			var e = F(), t = Mr() - P < 500, r = I.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !ur && ie !== e) {
				var i = (e - R) / V, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - Ee) / (Mr() - sr) * 1e3 || 0, s = J.utils.clamp(-i, 1 - i, ii(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = oe(c, M), ei(l) || (l = c), u = Math.max(0, Math.round(R + l * V)), e <= z && e >= R && u !== e) {
					if (r && !r._initted && r.data <= ii(u - e)) return;
					v.inertia === !1 && (s = l - i), I(u, {
						duration: Oe(ii(Math.max(ii(c - a), ii(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: ii(u - e),
						onInterrupt: function() {
							return ke.restart(!0) && p && ri(M, p);
						},
						onComplete: function() {
							M.update(), ie = F(), n && !T && (K ? K.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Te = Ee = n && !T ? n.totalProgress() : M.progress, g && g(M), m && ri(M, m);
						}
					}, e, s * V, u - e - s * V), f && ri(M, f, I.tween);
				}
			} else M.isActive && ie !== e && ke.restart(!0);
		}).pause()), o && (zi[o] = M), u = M.trigger = Kn(u || d !== !0 && d), Ne = u && u._gsap && u._gsap.stRevert, Ne && (Ne = Ne(M)), d = d === !0 ? u : Kn(d), Qr(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === gi || (f = !f && d.parentNode && d.parentNode.style && bi(d.parentNode).display === "flex" ? !1 : hi), M.pin = d, L = J.core.getCache(d), L.spacer ? me = L.pinState : (b && (b = Kn(b), b && !b.nodeType && (b = b.current || b.nativeElement), L.spacerIsNative = !!b, b && (L.spacerState = _a(b))), L.spacer = H = b || X.createElement("div"), H.classList.add("pin-spacer"), o && H.classList.add("pin-spacer-" + o), L.pinState = me = _a(d)), t.force3D !== !1 && J.set(d, { force3D: !0 }), M.spacer = H = L.spacer, we = bi(d), G = we[f + w.os2], _e = J.getProperty(d), W = J.quickSetter(d, w.a, yi), ma(d, H, we), ge = _a(d)), ee) {
			fe = ti(ee) ? Si(ee, Ni) : Ni, ue = Li("scroller-start", o, E, w, fe, 0), de = Li("scroller-end", o, E, w, fe, 0, ue), U = ue["offset" + w.op.d2];
			var Pe = Kn(In(E, "content") || E);
			le = this.markerStart = Li("start", o, Pe, w, fe, U, 0, x), B = this.markerEnd = Li("end", o, Pe, w, fe, U, 0, x), x && (Me = J.quickSetter([le, B], w.a, yi)), !k && !(Mn.length && In(E, "fixedMarkers") === !0) && (xi(O ? Z : E), J.set([ue, de], { force3D: !0 }), xe = J.quickSetter(ue, w.a, yi), Ce = J.quickSetter(de, w.a, yi));
		}
		if (x) {
			var Fe = x.vars.onUpdate, Ie = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				M.update(0, 0, 1), Fe && Fe.apply(x, Ie || []);
			});
		}
		if (M.previous = function() {
			return Q[Q.indexOf(M) - 1];
		}, M.next = function() {
			return Q[Q.indexOf(M) + 1];
		}, M.revert = function(e, t) {
			if (!t) return M.kill(!0);
			var r = e !== !1 || !M.enabled, i = lr;
			r !== M.isReverted && (r && (Ae = Math.max(F(), M.scroll.rec || 0), ae = M.progress, je = n && n.progress()), le && [
				le,
				B,
				ue,
				de
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (lr = M, M.update(r)), d && (!y || !M.isActive) && (r ? pa(d, H, me) : ma(d, H, bi(d), be)), r || M.update(r), lr = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((lr || !M.enabled) && !i)) {
				if (d && r && Pr) {
					Ai(e, "scrollEnd", qi);
					return;
				}
				!ea && N && N(M), lr = M, I.tween && !a && (I.tween.kill(), I.tween = 0), K && K.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = ne(), l = re(), m = x ? x.duration() : Xr(E, w), h = V <= .01 || !V, g = 0, _ = o || 0, v = ti(a) ? a.end : t.end, b = t.endTrigger || u, S = ti(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = M.pinnedContainer = t.pinnedContainer && Kn(t.pinnedContainer, M), D = u && Math.max(0, Q.indexOf(M)) || 0, A = D, j, L, oe, fe, U, W, G, xe, Ce, we, Te, Ee, De;
				for (ee && ti(a) && (Ee = J.getProperty(ue, w.p), De = J.getProperty(de, w.p)); A-- > 0;) W = Q[A], W.end || W.refresh(0, 1) || (lr = M), G = W.pin, G && (G === u || G === d || G === C) && !W.isReverted && (we || (we = []), we.unshift(W), W.revert(!0, !0)), W !== Q[A] && (D--, A--);
				for ($r(S) && (S = S(M)), S = Ir(S, "start", M), R = ba(S, u, s, w, F(), le, ue, M, l, te, k, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), $r(v) && (v = v(M)), Qr(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Qr(S) ? S.split(" ")[0] : "") + v : (g = Ii(v.substr(2), s), v = Qr(S) ? S : (x ? J.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, R) : R) + g, b = u)), v = Ir(v, "end", M), z = Math.max(R, ba(v || (b ? "100% 0" : m), b, s, w, F() + g, B, de, M, l, te, k, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, A = D; A--;) W = Q[A] || {}, G = W.pin, G && W.start - W._pinPush <= R && !x && W.end > 0 && (j = W.end - (M._startClamp ? Math.max(0, W.start) : W.start), (G === u && W.start - W._pinPush < R || G === C) && isNaN(S) && (g += j * (1 - W.progress)), G === d && (_ += j));
				if (R += g, z += g, M._startClamp && (M._startClamp += g), M._endClamp && !ea && (M._endClamp = z || -.001, z = Math.min(z, Xr(E, w))), V = z - R || (R -= .01) && .001, h && (ae = J.utils.clamp(0, 1, J.utils.normalize(R, z, Ae))), M._pinPush = _, le && g && (j = {}, j[w.a] = "+=" + g, C && (j[w.p] = "-=" + F()), J.set([le, B], j)), d && !(kr && M.end >= Xr(E, w))) j = bi(d), fe = w === Gn, oe = F(), ve = parseFloat(_e(w.a)) + _, !m && z > 1 && (Te = (O ? X.scrollingElement || nr : E).style, Te = {
					style: Te,
					value: Te["overflow" + w.a.toUpperCase()]
				}, O && bi(Z)["overflow" + w.a.toUpperCase()] !== "scroll" && (Te.style["overflow" + w.a.toUpperCase()] = "scroll")), ma(d, H, j), ge = _a(d), L = Ci(d, !0), xe = k && Jn(E, fe ? Wn : Gn)(), f ? (be = [f + w.os2, V + _ + yi], be.t = H, A = f === hi ? wi(d, w) + V + _ : 0, A && (be.push(w.d, A + yi), H.style.flexBasis !== "auto" && (H.style.flexBasis = A + yi)), ga(be), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), k && F(Ae)) : (A = wi(d, w), A && H.style.flexBasis !== "auto" && (H.style.flexBasis = A + yi)), k && (U = {
					top: L.top + (fe ? oe - R : xe) + yi,
					left: L.left + (fe ? xe : oe - R) + yi,
					boxSizing: "border-box",
					position: "fixed"
				}, U[li] = U["max" + _i] = Math.ceil(L.width) + yi, U[ui] = U["max" + vi] = Math.ceil(L.height) + yi, U[gi] = U[gi + pi] = U[gi + di] = U[gi + mi] = U[gi + fi] = "0", U[hi] = j[hi], U[hi + pi] = j[hi + pi], U[hi + di] = j[hi + di], U[hi + mi] = j[hi + mi], U[hi + fi] = j[hi + fi], he = va(me, U, y), ea && F(0)), n ? (Ce = n._initted, _r(1), n.render(n.duration(), !0, !0), ye = _e(w.a) - ve + V + _, Se = Math.abs(V - ye) > 1, k && Se && he.splice(he.length - 2, 2), n.render(0, !0, !0), Ce || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), _r(0)) : ye = V, Te && (Te.value ? Te.style["overflow" + w.a.toUpperCase()] = Te.value : Te.style.removeProperty("overflow-" + w.a));
				else if (u && F() && !x) for (L = u.parentNode; L && L !== Z;) L._pinOffset && (R -= L._pinOffset, z -= L._pinOffset), L = L.parentNode;
				we && we.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = R, M.end = z, se = ce = ea ? Ae : F(), !x && !ea && (se < Ae && F(Ae), M.scroll.rec = 0), M.revert(!1, !0), P = Mr(), ke && (ie = -1, ke.restart(!0)), lr = 0, n && T && (n._initted || je) && n.progress() !== je && n.progress(je || 0, !0).render(n.time(), !0, !0), (h || ae !== M.progress || x || p || n && !n._initted) && (n && !T && (n._initted || ae || n.vars.immediateRender !== !1) && n.totalProgress(x && R < -.001 && !ae ? J.utils.normalize(R, z, 0) : ae, !0), M.progress = h || (se - R) / V === ae ? 0 : ae), d && f && (H._pinOffset = Math.round(M.progress * ye)), K && K.invalidate(), isNaN(Ee) || (Ee -= J.getProperty(ue, w.p), De -= J.getProperty(de, w.p), wa(ue, w, Ee), wa(le, w, Ee - (o || 0)), wa(de, w, De), wa(B, w, De - (o || 0))), h && !ea && M.update(), c && !ea && !pe && (pe = !0, c(M), pe = !1);
			}
		}, M.getVelocity = function() {
			return (F() - ce) / (Mr() - sr) * 1e3 || 0;
		}, M.endAnimation = function() {
			ni(M.callbackAnimation), n && (K ? K.progress(1) : n.paused() ? T || ni(n, M.direction < 0, 1) : ni(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (R || M.refresh() || R) + n.labels[e] / n.duration() * V || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (Qr(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= R : e.start >= z;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = ea === !0 ? Ae : M.scroll(), c = e ? 0 : (o - R) / V, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, D, O, ee, te, N;
				if (t && (ce = se, se = x ? F() : o, v && (Ee = Te, Te = n && !T ? n.totalProgress() : u)), m && d && !lr && !jr && Pr && (!u && R < o + (o - ce) / (Mr() - sr) * m ? u = 1e-4 : u === 1 && z > o + (o - ce) / (Mr() - sr) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, ee = h !== g, O = ee || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, O && !lr && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !ee && j[b + 1] !== "none" && j[b + 1] || j[b], N = n && (D === "complete" || D === "reset" || D in n))), C && (ee || N) && (N || l || !n) && ($r(C) ? C(M) : M.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (K && !lr && !jr ? (K._dp._time - K._start !== K._time && K.render(K._dp._time - K._start), K.resetTo ? K.resetTo("totalProgress", u, n._tTime / n._tDur) : (K.vars.totalProgress = u, K.invalidate().restart())) : n && n.totalProgress(u, !!(lr && (P || e)))), d) {
						if (e && f && (H.style[f + w.os2] = G), !k) W(Hr(ve + ye * u));
						else if (O) {
							if (te = !e && u > p && z + 1 > o && o + 1 >= Xr(E, w), y) if (!e && (h || te)) {
								var ne = Ci(d, !0), re = o - R;
								Sa(d, Z, ne.top + (w === Gn ? re : 0) + yi, ne.left + (w === Gn ? 0 : re) + yi);
							} else Sa(d, H);
							ga(h || te ? he : ge), Se && u < 1 && h || W(ve + (u === 1 && !te ? ye : 0));
						}
					}
					v && !I.tween && !lr && !jr && ke.restart(!0), a && (ee || _ && u && (u < 1 || !Ar)) && ar(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(M), O && !lr ? (T && (N && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(M)), (ee || !Ar) && (s && ee && ri(M, s), A[b] && ri(M, A[b]), _ && (u === 1 ? M.kill(!1, 1) : A[b] = 0), ee || (b = u === 1 ? 1 : 3, A[b] && ri(M, A[b]))), S && !h && Math.abs(M.getVelocity()) > (ei(S) ? S : 2500) && (ni(M.callbackAnimation), K ? K.progress(1) : ni(n, D === "reverse" ? 1 : !u, 1))) : T && i && !lr && i(M);
				}
				if (Ce) {
					var ie = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					xe(ie + +!!ue._isFlipped), Ce(ie);
				}
				Me && Me(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, Ai(E, "resize", Wi), O || Ai(E, "scroll", Hi), N && Ai(e, "refreshInit", N), t !== !1 && (M.progress = ae = 0, se = ce = ie = F()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && I ? I.tween : K;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: Lr(e, n && !!M._startClamp),
				end: Lr(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (be && e) {
				var t = be.indexOf(w.d) + 1;
				be[t] = parseFloat(be[t]) + e + yi, be[1] = parseFloat(be[1]) + e + yi, ga(be);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || K && K.pause(), Ae = 0, L && (L.uncache = 1), N && ji(e, "refreshInit", N), ke && (ke.pause(), I.tween && I.tween.kill() && (I.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== M) return;
				ji(E, "resize", Wi), O || ji(E, "scroll", Hi);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), K && !r && K.kill(), o && delete zi[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === fr && ca > 0 && fr--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || ea || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), le && [
				le,
				B,
				ue,
				de
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), la === M && (la = 0), d && (L && (L.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (L.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Ne && Ne(M), n && n.add && !V) {
			var Le = M.update;
			M.update = function() {
				M.update = Le, q.cache++, R || z || M.refresh();
			}, J.delayedCall(.01, M.update), V = .01, R = z = 0;
		} else M.refresh();
		d && ra();
	}, e.register = function(t) {
		return tr || (J = t || Wr(), Ur() && window.document && e.enable(), tr = Fr), tr;
	}, e.defaults = function(e) {
		if (e) for (var t in e) Pi[t] = e[t];
		return Pi;
	}, e.disable = function(e, t) {
		Fr = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), ji(Y, "wheel", Hi), ji(X, "scroll", Hi), clearInterval(cr), ji(X, "touchcancel", Vr), ji(Z, "touchstart", Vr), ki(ji, X, "pointerdown,touchstart,mousedown", zr), ki(ji, X, "pointerup,touchend,mouseup", Br), ir.kill(), Zr(ji);
		for (var n = 0; n < q.length; n += 3) Mi(ji, q[n], q[n + 1]), Mi(ji, q[n], q[n + 2]);
	}, e.enable = function() {
		if (Y = window, X = document, nr = X.documentElement, Z = X.body, J) if (ar = J.utils.toArray, or = J.utils.clamp, wr = J.core.context || Vr, _r = J.core.suppressOverwrites || Vr, Tr = Y.history.scrollRestoration || "auto", sa = Y.pageYOffset || 0, J.core.globals("ScrollTrigger", e), Z) {
			Fr = 1, Er = document.createElement("div"), Er.style.height = "100vh", Er.style.position = "absolute", ia(), Rr(), er.register(J), e.isTouch = er.isTouch, Cr = er.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), br = er.isTouch === 1, Ai(Y, "wheel", Hi), rr = [
				Y,
				X,
				nr,
				Z
			], J.matchMedia ? (e.matchMedia = function(e) {
				var t = J.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, J.addEventListener("matchMediaInit", function() {
				Zi(), Qi();
			}), J.addEventListener("matchMediaRevert", function() {
				return Xi();
			}), J.addEventListener("matchMedia", function() {
				oa(0, 1), Ji("matchMedia");
			}), J.matchMedia().add("(orientation: portrait)", function() {
				return Ui(), Ui;
			})) : console.warn("Requires GSAP 3.11.0 or later"), Ui(), Ai(X, "scroll", Hi);
			var t = Z.hasAttribute("style"), n = Z.style, r = n.borderTopStyle, i = J.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = Ci(Z), Gn.m = Math.round(a.top + Gn.sc()) || 0, Wn.m = Math.round(a.left + Wn.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Z.setAttribute("style", ""), Z.removeAttribute("style")), cr = setInterval(Vi, 250), J.delayedCall(.5, function() {
				return jr = 0;
			}), Ai(X, "touchcancel", Vr), Ai(Z, "touchstart", Vr), ki(Ai, X, "pointerdown,touchstart,mousedown", zr), ki(Ai, X, "pointerup,touchend,mouseup", Br), dr = J.utils.checkPrefix("transform"), fa.push(dr), tr = Mr(), ir = J.delayedCall(.2, oa).pause(), hr = [
				X,
				"visibilitychange",
				function() {
					var e = Y.innerWidth, t = Y.innerHeight;
					X.hidden ? (pr = e, mr = t) : (pr !== e || mr !== t) && Wi();
				},
				X,
				"DOMContentLoaded",
				oa,
				Y,
				"load",
				oa,
				Y,
				"resize",
				Wi
			], Zr(Ai), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < q.length; o += 3) Mi(ji, q[o], q[o + 1]), Mi(ji, q[o], q[o + 2]);
		} else X && X.addEventListener("DOMContentLoaded", function t() {
			e.enable(), X.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (Ar = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(cr) || (cr = n) && setInterval(Vi, n), "ignoreMobileResize" in t && (br = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Zr(ji) || Zr(Ai, t.autoRefreshEvents || "none"), vr = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Kn(e), r = q.indexOf(n), i = Gr(n);
		~r && q.splice(r, i ? 6 : 2), t && (i ? Mn.unshift(Y, t, Z, t, nr, t) : Mn.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (Qr(e) ? Kn(e) : e).getBoundingClientRect(), i = r[n ? li : ui] * t || 0;
		return n ? r.right - i > 0 && r.left + i < Y.innerWidth : r.bottom - i > 0 && r.top + i < Y.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		Qr(e) && (e = Kn(e));
		var r = e.getBoundingClientRect(), i = r[n ? li : ui], a = t == null ? i / 2 : t in Fi ? Fi[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / Y.innerWidth : (r.top + a) / Y.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = Gi.killAll || [];
			Gi = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? ar(e).forEach(function(e) {
		if (e && e.style) {
			var t = Yi.indexOf(e);
			t >= 0 && Yi.splice(t, 5), Yi.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), J.core.getCache(e), wr());
		}
	}) : Yi;
}, $.revert = function(e, t) {
	return Qi(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? Wi(!0) : (tr || $.register()) && oa(!0);
}, $.update = function(e) {
	return ++q.cache && ua(e === !0 ? 2 : 0);
}, $.clearScrollMemory = $i, $.maxScroll = function(e, t) {
	return Xr(e, t ? Wn : Gn);
}, $.getScrollFunc = function(e, t) {
	return Jn(Kn(e), t ? Wn : Gn);
}, $.getById = function(e) {
	return zi[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!Pr;
}, $.snapDirectional = Di, $.addEventListener = function(e, t) {
	var n = Gi[e] || (Gi[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = Gi[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, $.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = J.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && $r(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return $r(a) && (a = a(), Ai($, "refresh", function() {
		return a = t.batchMax();
	})), ar(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var Ea = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Da = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (er.isTouch ? " pinch-zoom" : "") : "none", t === nr && e(Z, n);
}, Oa = {
	auto: 1,
	scroll: 1
}, ka = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || J.core.getCache(i), o = Mr(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Z && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Oa[(s = bi(i)).overflowY] || Oa[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !Gr(i) && (Oa[(s = bi(i)).overflowY] || Oa[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, Aa = function(e, t, n, r) {
	return er.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && ka,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && Ai(X, er.eventTypes[0], Na, !1, !0);
		},
		onDisable: function() {
			return ji(X, er.eventTypes[0], Na, !0);
		}
	});
}, ja = /(input|label|select|textarea)/i, Ma, Na = function(e) {
	var t = ja.test(e.target.tagName);
	(t || Ma) && (e._gsapAllow = !0, Ma = t);
}, Pa = function(e) {
	ti(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Kn(e.target) || nr, l = J.core.globals().ScrollSmoother, u = l && l.get(), d = Cr && (e.content && Kn(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Jn(c, Gn), p = Jn(c, Wn), m = 1, h = (er.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth, g = 0, _ = $r(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = Aa(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = Vr, C = Vr, w = function() {
		s = Xr(c, Gn), C = or(+!!Cr, s), n && (S = or(0, Xr(c, Wn))), v = ta;
	}, T = function() {
		d._gsap.y = Hr(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = Hr(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = Hr((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = q.cache, ua();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, k, A, j = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && J.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return Cr && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = Hr((Y.visualViewport && Y.visualViewport.scale || 1) / h), D.pause(), e !== m && Da(c, m > 1.01 || !n && "x"), O = p(), k = f(), w(), v = ta;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) A.restart(!0);
		else {
			q.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Ea(p, i, o, Xr(c, Wn)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Ea(f, i, o, Xr(c, Gn)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (Cr && D.vars.scrollY >= s || i >= s - 1) && J.to({}, {
				onUpdate: j,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), Mr() - g > 1e3 && (v = 0, g = Mr());
	}, e.onChange = function(e, t, r, i, a) {
		if (ta !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? k + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (k += c - s), f(c);
		}
		(r || t) && ua();
	}, e.onEnable = function() {
		Da(c, !n && "x"), $.addEventListener("refresh", j), Ai(Y, "resize", j), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		Da(c, !0), ji(Y, "resize", j), $.removeEventListener("refresh", j), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new er(e), o.iOS = Cr, Cr && !f() && f(1), Cr && J.ticker.add(Vr), A = o._dc, D = J.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: Ca(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: ua,
		onComplete: A.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if ($r(e)) return Q.sort(e);
	var t = Y.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Y.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new er(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return yr;
	if (e === !0 && yr) return yr.enable();
	if (e === !1) {
		yr && yr.kill(), yr = e;
		return;
	}
	var t = e instanceof er ? e : Pa(e);
	return yr && yr.target === t.target && yr.kill(), Gr(t.target) && (yr = t), t;
}, $.core = {
	_getVelocityProp: Yn,
	_inputObserver: Aa,
	_scrollers: q,
	_proxies: Mn,
	bridge: {
		ss: function() {
			Pr || Ji("scrollStart"), Pr = Mr();
		},
		ref: function() {
			return lr;
		}
	}
}, Wr() && J.registerPlugin($);
//#endregion
//#region node_modules/gsap/SplitText.js
var Fa, Ia, La = typeof Symbol == "function" ? Symbol() : "_split", Ra, za = () => Ra || io.register(window.gsap), Ba = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, Va = (e) => e ? typeof e == "string" ? Va(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((e, t) => (typeof t == "string" ? e.push(...Va(t)) : e.push(t), e), []) : [e] : [], Ha = (e) => Va(e).filter((e) => e && e.nodeType === 1), Ua = [], Wa = function() {}, Ga = { add: (e) => e() }, Ka = /\s+/g, qa = /* @__PURE__ */ RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), Ja = {
	left: 0,
	top: 0,
	width: 0,
	height: 0
}, Ya = (e, t) => {
	for (; ++t < e.length && e[t] === Ja;);
	return e[t] || Ja;
}, Xa = ({ element: e, html: t, ariaL: n, ariaH: r }) => {
	e.innerHTML = t, n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label"), r ? e.setAttribute("aria-hidden", r) : e.removeAttribute("aria-hidden");
}, Za = (e, t) => {
	if (t) {
		let n = new Set(e.join("").match(t) || Ua), r = e.length, i, a, o, s;
		if (n.size) for (; --r > -1;) {
			a = e[r];
			for (o of n) if (o.startsWith(a) && o.length > a.length) {
				for (i = 0, s = a; o.startsWith(s += e[r + ++i]) && s.length < o.length;);
				if (i && s.length === o.length) {
					e[r] = o, e.splice(r + 1, i);
					break;
				}
			}
		}
	}
	return e;
}, Qa = (e) => window.getComputedStyle(e).display === "inline" && (e.style.display = "inline-block"), $a = (e, t, n) => t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n), eo = (e, t, n) => {
	let r = t[e + "sClass"] || "", { tag: i = "div", aria: a = "auto", propIndex: o = !1 } = t, s = e === "line" ? "block" : "inline-block", c = r.indexOf("++") > -1, l = (t) => {
		let l = document.createElement(i), u = n.length + 1;
		return r && (l.className = r + (c ? " " + r + u : "")), o && l.style.setProperty("--" + e, u + ""), a !== "none" && l.setAttribute("aria-hidden", "true"), i !== "span" && (l.style.position = "relative", l.style.display = s), l.textContent = t, n.push(l), l;
	};
	return c && (r = r.replace("++", "")), l.collection = n, l;
}, to = (e, t, n, r) => {
	let i = eo("line", n, r), a = window.getComputedStyle(e).textAlign || "left";
	return (n, r) => {
		let o = i("");
		for (o.style.textAlign = a, e.insertBefore(o, t[n]); n < r; n++) o.appendChild(t[n]);
		o.normalize();
	};
}, no = (e, t, n, r, i, a, o, s, c, l) => {
	var u;
	let d = Array.from(e.childNodes), f = 0, { wordDelimiter: p, reduceWhiteSpace: m = !0, prepareText: h } = t, g = e.getBoundingClientRect(), _ = g, v = !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre", y = 0, b = n.collection, x, S, C, w, T, E, D, O, k, A, j, ee, te, M, N, ne, re, ie;
	for (typeof p == "object" ? (C = p.delimiter || p, S = p.replaceWith || "") : S = p === "" ? "" : p || " ", x = S !== " "; f < d.length; f++) if (w = d[f], w.nodeType === 3) {
		for (N = w.textContent || "", m ? N = N.replace(Ka, " ") : v && (N = N.replace(/\n/g, S + "\n")), h && (N = h(N, e)), w.textContent = N, T = S || C ? N.split(C || S) : N.match(s) || Ua, re = T[T.length - 1], O = x ? re.slice(-1) === " " : !re, re || T.pop(), _ = g, D = x ? T[0].charAt(0) === " " : !T[0], D && $a(" ", e, w), T[0] || T.shift(), Za(T, c), a && l || (w.textContent = ""), k = 1; k <= T.length; k++) if (ne = T[k - 1], !m && v && ne.charAt(0) === "\n" && ((u = w.previousSibling) == null || u.remove(), $a(document.createElement("br"), e, w), ne = ne.slice(1)), !m && ne === "") $a(S, e, w);
		else if (ne === " ") e.insertBefore(document.createTextNode(" "), w);
		else {
			if (x && ne.charAt(0) === " " && $a(" ", e, w), y && k === 1 && !D && b.indexOf(y.parentNode) > -1 ? (E = b[b.length - 1], E.appendChild(document.createTextNode(r ? "" : ne))) : (E = n(r ? "" : ne), $a(E, e, w), y && k === 1 && !D && E.insertBefore(y, E.firstChild)), r) for (j = Ba ? Za([...Ba.segment(ne)].map((e) => e.segment), c) : ne.match(s) || Ua, ie = 0; ie < j.length; ie++) E.appendChild(j[ie] === " " ? document.createTextNode(" ") : r(j[ie]));
			if (a && l) {
				if (N = w.textContent = N.substring(ne.length + 1, N.length), A = E.getBoundingClientRect(), A.top > _.top && A.left <= _.left) {
					for (ee = e.cloneNode(), te = e.childNodes[0]; te && te !== E;) M = te, te = te.nextSibling, ee.appendChild(M);
					e.parentNode.insertBefore(ee, e), i && Qa(ee);
				}
				_ = A;
			}
			(k < T.length || O) && $a(k >= T.length ? " " : x && ne.slice(-1) === " " ? " " + S : S, e, w);
		}
		e.removeChild(w), y = 0;
	} else w.nodeType === 1 && (o && o.indexOf(w) > -1 ? (b.indexOf(w.previousSibling) > -1 && b[b.length - 1].appendChild(w), y = w) : (no(w, t, n, r, i, a, o, s, c, !0), y = 0), i && Qa(w));
}, ro = class e {
	constructor(e, t) {
		this.isSplit = !1, za(), this.elements = Ha(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach((e) => {
			var n;
			t.overwrite !== !1 && ((n = e[La]) == null || n._data.orig.filter(({ element: t }) => t === e).forEach(Xa)), e[La] = this;
		}), this._split = () => this.isSplit && this.split(this.vars);
		let n = [], r, i = () => {
			let e = n.length, t;
			for (; e--;) {
				t = n[e];
				let r = t.element.offsetWidth;
				if (r !== t.width) {
					t.width = r, this._split();
					return;
				}
			}
		};
		this._data = {
			orig: n,
			obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
				clearTimeout(r), r = setTimeout(i, 200);
			})
		}, Wa(this), this.split(t);
	}
	split(e) {
		return (this._ctx || Ga).add(() => {
			this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
			let { type: t = "chars,words,lines", aria: n = "auto", deepSlice: r = !0, smartWrap: i, onSplit: a, autoSplit: o = !1, specialChars: s, mask: c } = this.vars, l = t.indexOf("lines") > -1, u = t.indexOf("chars") > -1, d = t.indexOf("words") > -1, f = u && !d && !l, p = s && ("push" in s ? RegExp("(?:" + s.join("|") + ")", "gu") : s), m = p ? RegExp(p.source + "|" + qa.source, "gu") : qa, h = !!e.ignore && Ha(e.ignore), { orig: g, animTime: _, obs: v } = this._data, y;
			(u || d || l) && (this.elements.forEach((t, a) => {
				g[a] = {
					element: t,
					html: t.innerHTML,
					ariaL: t.getAttribute("aria-label"),
					ariaH: t.getAttribute("aria-hidden")
				}, n === "auto" ? t.setAttribute("aria-label", (t.textContent || "").trim()) : n === "hidden" && t.setAttribute("aria-hidden", "true");
				let o = [], s = [], c = [], _ = u ? eo("char", e, o) : null, v = eo("word", e, s), y, b, x, S;
				if (no(t, e, v, _, f, r && (l || f), h, m, p, !1), l) {
					let n = Va(t.childNodes), r = to(t, n, e, c), i, a = [], o = 0, s = n.map((e) => e.nodeType === 1 ? e.getBoundingClientRect() : Ja), l = Ja, u;
					for (y = 0; y < n.length; y++) i = n[y], i.nodeType === 1 && (i.nodeName === "BR" ? ((!y || n[y - 1].nodeName !== "BR") && (a.push(i), r(o, y + 1)), o = y + 1, l = Ya(s, y)) : (u = s[y], y && u.top > l.top && u.left < l.left + l.width - 1 && (r(o, y), o = y), l = u));
					o < y && r(o, y), a.forEach((e) => {
						var t;
						return (t = e.parentNode) == null ? void 0 : t.removeChild(e);
					});
				}
				if (!d) {
					for (y = 0; y < s.length; y++) if (b = s[y], u || !b.nextSibling || b.nextSibling.nodeType !== 3) if (i && !l) {
						for (x = document.createElement("span"), x.style.whiteSpace = "nowrap"; b.firstChild;) x.appendChild(b.firstChild);
						b.replaceWith(x);
					} else b.replaceWith(...b.childNodes);
					else S = b.nextSibling, S && S.nodeType === 3 && (S.textContent = (b.textContent || "") + (S.textContent || ""), b.remove());
					s.length = 0, t.normalize();
				}
				this.lines.push(...c), this.words.push(...s), this.chars.push(...o);
			}), c && this[c] && this.masks.push(...this[c].map((e) => {
				let t = e.cloneNode();
				return e.replaceWith(t), t.appendChild(e), e.className && (t.className = e.className.trim().split(" ").map((e) => e + "-mask").join(" ")), t.style.overflow = "clip", t;
			}))), this.isSplit = !0, Ia && l && o && Ia.addEventListener("loadingdone", this._split), (y = a && a(this)) && y.totalTime && (this._data.anim = _ ? y.totalTime(_) : y), l && o && this.elements.forEach((e, t) => {
				g[t].width = e.offsetWidth, v && v.observe(e);
			});
		}), this;
	}
	kill() {
		let { obs: e } = this._data;
		e && e.disconnect(), Ia == null || Ia.removeEventListener("loadingdone", this._split);
	}
	revert() {
		var e, t;
		if (this.isSplit) {
			let { orig: n, anim: r } = this._data;
			this.kill(), n.forEach(Xa), this.chars.length = this.words.length = this.lines.length = n.length = this.masks.length = 0, this.isSplit = !1, r && (this._data.animTime = r.totalTime(), r.revert()), (t = (e = this.vars).onRevert) == null || t.call(e, this);
		}
		return this;
	}
	static create(t, n) {
		return new e(t, n);
	}
	static register(e) {
		Fa = Fa || e || window.gsap, Fa && (Va = Fa.utils.toArray, Wa = Fa.core.context || Wa), !Ra && window.innerWidth > 0 && (Ia = document.fonts, Ra = !0);
	}
};
ro.version = "3.15.0";
var io = ro, ao = "[data-splitline], .js-splitline", oo = "data-splitline-ready", so = !1;
function co() {
	so || (so = !0, v.registerPlugin(io, $));
}
function lo() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function uo(e) {
	e.setAttribute(oo, "");
}
function fo(e) {
	return e.hasAttribute(oo);
}
function po(e) {
	io.create(e, {
		type: "words,lines",
		mask: "lines",
		linesClass: "splitline-line",
		autoSplit: !0,
		onSplit: (t) => v.from(t.lines, {
			yPercent: 120,
			stagger: .1,
			scrollTrigger: {
				trigger: e,
				scrub: !0,
				start: "clamp(top center)",
				end: "clamp(bottom center)"
			}
		})
	});
}
function mo(e = document) {
	let t = l(ao, e).filter((e) => !fo(e));
	if (t.length !== 0) {
		if (t.forEach(uo), i()) {
			v.set(t, { opacity: 1 });
			return;
		}
		co(), v.set(t, { opacity: 1 }), lo().then(() => {
			t.forEach((e) => {
				e.isConnected && po(e);
			}), $.refresh();
		});
	}
}
//#endregion
//#region src/main.ts
var ho = !1;
function go() {
	if (ho) return;
	ho = !0;
	let e = x();
	ft({ i18n: e }), Se({ i18n: e }), pn(), jt(), mo(), n(), window.SiteInteractions = {
		openModal: ct,
		openContentModal: st,
		closeModal: lt,
		openLightbox: ye,
		closeLightbox: G
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", go, { once: !0 }) : go();
//#endregion

//# sourceMappingURL=site-interactions.js.map