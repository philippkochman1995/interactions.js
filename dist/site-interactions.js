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
var re = "[data-lightbox-src]", b = "js-lightbox", x = `.${b}`, ie = `${re}, ${x}`, ae = "[data-site-lightbox]", oe = "[data-lightbox-close]", se = "[data-lightbox-prev]", ce = "[data-lightbox-next]", le = "[data-lightbox-auto-icon]", S = "site-lightbox-trigger", ue = "site-lightbox-trigger__image", de = "site-lightbox-trigger__icon", fe = "w-dyn-bind-empty", pe = "/plugins/Basic/assets/placeholder.", me = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", he = !1, C = null, w = null, T = [], E = 0, D = !1, O = null;
function k(e) {
	let t = m(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = m(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return ge(e);
	let n = f("img", e);
	return n ? ge(n) : "";
}
function ge(e) {
	let t = m(e, "src"), n = m(e, "srcset");
	return e.classList.contains(fe) || t.includes(pe) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function _e(e) {
	var t, n;
	let r = m(e, "data-lightbox-alt");
	if (r) return r;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let i = f("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function ve(e) {
	let t = k(e).trim();
	return t ? {
		src: t,
		caption: m(e, "data-lightbox-caption"),
		alt: _e(e),
		group: m(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ye(e) {
	let t = ve(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = l(ie).filter((e) => m(e, "data-lightbox-group") === t.group).map(ve).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function be() {
	let e = document.createElement("span");
	return e.className = de, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = me, e;
}
function xe(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function Se(e) {
	if (!xe(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = C == null ? void 0 : C.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Ce(e) {
	if (e.closest(`.${S}`) || !k(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${S} ${b}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group"
	]) {
		let r = m(e, n);
		r && (t.setAttribute(n, r), e.removeAttribute(n));
	}
	e.classList.remove(b), e.classList.add(ue), e.before(t), t.append(e, be()), Se(t);
}
function we(e) {
	if (e instanceof HTMLImageElement) {
		Ce(e);
		return;
	}
	k(e).trim() && (e.classList.add(S), Se(e), f(le, e) || e.append(be()));
}
function Te() {
	l(x).forEach(we);
}
function A(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function j() {
	var e, t, n, r, i, a;
	if (w) return Ee(w), w;
	let o = f(ae), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = C == null ? void 0 : C.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, l, u;
		s.innerHTML = "";
		let e = A((c = C == null ? void 0 : C.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = A((l = C == null ? void 0 : C.t("previous", "Previous")) == null ? "Previous" : l, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = A((u = C == null ? void 0 : C.t("next", "Next")) == null ? "Next" : u, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		nextButton: (a = f(ce, s)) == null ? document.createElement("button") : a
	};
	return w = d, Ee(d), !o && !document.body.contains(s) && document.body.append(s), d;
}
function Ee(e) {
	var t, n, r, i;
	let a = (t = C == null ? void 0 : C.t("close", "Close")) == null ? "Close" : t, o = (n = C == null ? void 0 : C.t("previous", "Previous")) == null ? "Previous" : n, s = (r = C == null ? void 0 : C.t("next", "Next")) == null ? "Next" : r, c = (i = C == null ? void 0 : C.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function De() {
	let e = j(), t = T[E];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = T.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(E), e.root.dataset.lightboxCount = String(T.length);
}
function Oe(e) {
	let t = j();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function ke(e) {
	T.length < 2 || (E = (e + T.length) % T.length, De());
}
function Ae() {
	ke(E + 1);
}
function je() {
	ke(E - 1);
}
function M(e) {
	var t;
	let n = ye(e);
	if (!n) return;
	let i = D;
	T = n.items, E = n.index, O = e, D = !0, De(), Oe(!0), i || r();
	let a = j();
	p(a.closeButton || a.root);
	let o = T[E];
	u(a.root, "site:lightbox-open", {
		item: o,
		index: E,
		count: T.length,
		group: (t = o == null ? void 0 : o.group) == null ? "" : t,
		trigger: e
	});
}
function N() {
	var e;
	if (!D || !w) return;
	let t = w, n = O, r = (e = T[E]) == null ? null : e;
	Oe(!1), _(), D = !1, T = [], E = 0, O = null, t.image.removeAttribute("src"), t.caption.textContent = "", u(t.root, "site:lightbox-close", { item: r }), o(n);
}
function Me(t) {
	if (!(!D || !w)) {
		if (t.key === "Escape") {
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), N();
			return;
		}
		if (t.key === "ArrowRight") {
			t.preventDefault(), Ae();
			return;
		}
		if (t.key === "ArrowLeft") {
			t.preventDefault(), je();
			return;
		}
		e(w.root, t);
	}
}
function Ne(e) {
	!D || !w || e.target === w.root && N();
}
function Pe(e) {
	return C = e.i18n, Te(), he || (h(document, "click", ie, (e, t) => {
		e.preventDefault(), M(t);
	}), h(document, "keydown", x, (e, t) => {
		xe(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), M(t));
	}), h(document, "click", oe, (e) => {
		e.preventDefault(), N();
	}), h(document, "click", se, (e) => {
		e.preventDefault(), je();
	}), h(document, "click", ce, (e) => {
		e.preventDefault(), Ae();
	}), document.addEventListener("click", Ne), document.addEventListener("keydown", Me, !0), he = !0), {
		openLightbox: M,
		closeLightbox: N
	};
}
//#endregion
//#region src/modules/modal.ts
var Fe = "[data-modal]", Ie = "[data-modal-content]", Le = "[data-modal-open]", Re = "[data-modal-close]", ze = "a[href^=\"#modal:\"]", Be = "#modal:", Ve = 220, He = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Ue = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", We = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Ge = !1, Ke = !0, P = null, F = null, I = "", L = null, R = null, z = /* @__PURE__ */ new Map();
function qe(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Be) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Je() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Re),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = He, t.lightboxIcon.innerHTML = Ue, Xe(t), t;
}
function Ye() {
	return (!F || !document.body.contains(F.root)) && (F = Je()), Xe(F), F;
}
function Xe(e) {
	var t, n;
	let r = (t = P == null ? void 0 : P.t("close", "Close")) == null ? "Close" : t, i = (n = P == null ? void 0 : P.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function B(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function V(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Ze(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = V(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = B(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Qe(e) {
	var t, n, r;
	let i = l("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = V(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: B(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = V(e, "[data-modal-image]"), o = B(a);
	return o ? [{
		src: o,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function $e(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal-content");
	if (!l) return null;
	let u = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", d = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, f = Qe(e), p = f[0], h = e.querySelector("[data-modal-body]");
	return {
		id: l,
		address: u,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: d,
		image: (a = p == null ? void 0 : p.src) == null ? "" : a,
		imageAlt: (o = p == null ? void 0 : p.alt) == null ? "" : o,
		caption: (s = p == null ? void 0 : p.caption) == null ? "" : s,
		html: (c = h == null ? void 0 : h.innerHTML) == null ? "" : c,
		work: Ze(e),
		gallery: f
	};
}
function et(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal");
	if (!l) return null;
	let u = e.querySelector(".fwm-modal__image"), d = B(u), f = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
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
function tt() {
	l(Ie).forEach((e) => {
		let t = $e(e);
		t && z.set(t.id, t);
	}), l(Fe).forEach((e) => {
		let t = et(e);
		t && z.set(t.id, t), e.remove();
	});
}
function nt(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = l(Ie).find((e) => m(e, "data-modal-content") === n), i = r ? $e(r) : null;
	return i && z.set(n, i), (t = i == null ? z.get(n) : i) == null ? null : t;
}
function rt(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = We, r.append(i, o), t.append(r), t;
}
function it(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Ue, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function at(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function ot(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, at(e);
}
function st(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(rt(t.work)), i.forEach((t, n) => {
		e.gallery.append(it(t, n));
	});
}
function ct(e) {
	let t = Ye();
	return e.layout === "context" ? st(t, e) : ot(t, e), t;
}
function lt(e) {
	let t = d(e.panel)[0];
	p(t == null ? e.panel : t);
}
function ut(e) {
	R !== null && (window.clearTimeout(R), R = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function dt(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), R = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), R = null;
	}, Ve), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function H(e, t) {
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
	I && W(), z.set(g.id, g), L = t == null ? s() : t, I = g.id;
	let _ = ct(g);
	ut(_), r(), lt(_), u(_.root, "site:modal-open", {
		id: I,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function U(e, t) {
	let n = nt(e);
	n && H(n, t);
}
function W() {
	if (!I || !F) return;
	let e = I, t = L;
	dt(F), _(), I = "", L = null, u(F.root, "site:modal-close", {
		id: e,
		modal: F.root
	}), o(t);
}
function ft(t) {
	if (!(!I || !F) && !document.body.classList.contains("is-lightbox-open")) {
		if (t.key === "Escape") {
			t.preventDefault(), W();
			return;
		}
		e(F.panel, t);
	}
}
function pt(e) {
	if (!Ke || !I || !F) return;
	let t = e.target;
	!c(t) || t !== F.root || W();
}
function mt(e) {
	var n;
	return Ke = (n = e.closeOnBackdrop) == null || n, P = e.i18n, tt(), Ye(), Ge || (h(document, "click", Le, (e, n) => {
		e.preventDefault(), U(t(n, "data-modal-open"), n);
	}), h(document, "click", ze, (e, t) => {
		e.preventDefault(), U(qe(t), t);
	}), h(document, "click", Re, (e, t) => {
		F != null && F.root.contains(t) && (e.preventDefault(), W());
	}), document.addEventListener("click", pt), document.addEventListener("keydown", ft), Ge = !0), {
		openModal: U,
		openContentModal: H,
		closeModal: W
	};
}
//#endregion
//#region src/modules/page-transition.ts
var G = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, ht = "page-transition-overlay", gt = "[data-page-transition-overlay], .page-transition-overlay", K = "site-page-transition", _t = "pending", vt = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[download]"
].join(","), yt = !1, q = !1;
function bt() {
	let e = document.querySelector(gt);
	if (e) return e.classList.add(ht), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = ht, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function xt(e) {
	return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}
function St(e) {
	var t;
	return !!(e.closest(vt) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function Ct(e) {
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
function wt(e, t) {
	return !q && !e.defaultPrevented && !xt(e) && !St(t);
}
function Tt() {
	try {
		window.sessionStorage.setItem(K, _t);
	} catch (e) {}
}
function Et() {
	try {
		let e = window.sessionStorage.getItem(K) === _t;
		return window.sessionStorage.removeItem(K), e;
	} catch (e) {
		return !1;
	}
}
function Dt(e) {
	if (i() || !Et()) {
		v.set(e, { yPercent: -100 });
		return;
	}
	v.fromTo(e, { yPercent: 0 }, {
		yPercent: 100,
		delay: G.holdDuration,
		duration: G.revealDuration,
		ease: G.ease,
		onComplete: () => {
			v.set(e, { yPercent: -100 });
		}
	});
}
function Ot(e, t) {
	q = !0, Tt(), v.killTweensOf(t), v.fromTo(t, { yPercent: -100 }, {
		yPercent: 0,
		duration: G.coverDuration,
		ease: G.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	});
}
function kt(e, t) {
	e.persisted && (q = !1, Et(), v.set(t, { yPercent: -100 }));
}
function At() {
	if (yt) return;
	yt = !0;
	let e = bt();
	Dt(e), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (q) {
			t.preventDefault();
			return;
		}
		if (!wt(t, r)) return;
		let a = Ct(r);
		!a || i() || (t.preventDefault(), Ot(a, e));
	}, !0), window.addEventListener("pageshow", (t) => kt(t, e));
}
//#endregion
//#region src/modules/site-menu.ts
var jt = "[data-site-menu]", Mt = "[data-site-menu-panel]", Nt = "[data-site-menu-toggle]", Pt = "[data-site-menu-toggle-label]", Ft = "[data-site-menu-link]", It = "[data-site-menu-indicator]", Lt = "is-active", J = "is-open", Rt = "is-ready", zt = "data-site-menu-open-label", Bt = "data-site-menu-closed-label", Y = "data-site-menu-current-key", Vt = "data-site-menu-label", Ht = "data-site-menu-key", X = "data-site-menu-original-tabindex", Ut = "CLOSE", Wt = "MENU", Gt = [], Kt = !1;
function qt(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Jt(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = m(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return qt(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Yt(e, t) {
	return t ? m(e, Ht) === t : !1;
}
function Xt(e, t) {
	var n, r;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Yt(e, m(t, Y) || ((n = document.documentElement.getAttribute(Y)) == null ? void 0 : n.trim()) || ((r = document.body.getAttribute(Y)) == null ? void 0 : r.trim()) || "")) return !0;
	let i = Jt(e);
	return i ? i === qt(window.location.pathname) : !1;
}
function Zt(e) {
	var t, n;
	return m(e, Vt) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function Qt(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Lt) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Xt(t, e.root)) : t;
	return n ? Zt(n) : "";
}
function Z(e, t = !0) {
	var n;
	let r = m(e.root, zt) || Ut, a = m(e.root, Bt) || Wt, o = Qt(e), s = e.isOpen ? r : e.isHovered ? a : o || a, c = (n = e.toggleLabel) == null ? e.toggle : n;
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
function $t(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = m(e, X);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(X) && e.hasAttribute("tabindex") && e.setAttribute(X, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Q(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(J, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), $t(e, t), Z(e, n);
}
function en(e, t, n) {
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
function tn(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Q(e, !0), en(e, !0, t);
}
function $(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Q(e, !1), en(e, !1, t);
}
function nn(e) {
	e.isOpen ? $(e) : tn(e);
}
function rn(e) {
	e.links.forEach((t) => {
		let n = Xt(t, e.root), r = f(It, t);
		t.classList.toggle(Lt, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function an(e) {
	var t;
	let n = f(Mt, e), r = f(Nt, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = f(Pt, r)) == null ? f(Pt, e) : t,
		links: l(Ft, e),
		isOpen: e.classList.contains(J),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Gt.length + 1}`), r.setAttribute("aria-controls", n.id), rn(i), Q(i, i.isOpen, !1), e.classList.add(Rt);
	let a = (e) => {
		e.preventDefault(), nn(i);
	}, o = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || $(i);
	}, s = (e) => {
		e.key !== "Escape" || !i.isOpen || ($(i), i.toggle.focus({ preventScroll: !0 }));
	}, c = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(Ft) || $(i);
	}, u = () => {
		i.isHovered = !0, Z(i);
	}, d = () => {
		i.isHovered = !1, Z(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", u), e.addEventListener("pointerleave", d), document.addEventListener("click", o), document.addEventListener("keydown", s), e.addEventListener("click", c), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", u), () => e.removeEventListener("pointerleave", d), () => document.removeEventListener("click", o), () => document.removeEventListener("keydown", s), () => e.removeEventListener("click", c)), i;
}
function on(e = document) {
	if (Kt && e === document) return () => void 0;
	e === document && (Kt = !0);
	let t = l(jt, e).map(an).filter((e) => !!e);
	return Gt.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Rt, J), v.killTweensOf(e.panel), v.killTweensOf((t = e.toggleLabel) == null ? e.toggle : t), v.set(e.panel, { clearProps: "height" }), v.set((n = e.toggleLabel) == null ? e.toggle : n, { clearProps: "opacity" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), $t(e, !0);
		});
	};
}
//#endregion
//#region src/main.ts
var sn = !1;
function cn() {
	if (sn) return;
	sn = !0;
	let e = te();
	mt({ i18n: e }), Pe({ i18n: e }), on(), At(), n(), window.SiteInteractions = {
		openModal: U,
		openContentModal: H,
		closeModal: W,
		openLightbox: M,
		closeLightbox: N
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", cn, { once: !0 }) : cn();
//#endregion

//# sourceMappingURL=site-interactions.js.map