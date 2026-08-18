import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-CeaJphsN.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { i as x, n as S, o as ee, r as C, t as w } from "./site-interactions-CVfIYK-Q.js";
//#region src/modules/i18n.ts
var T = {};
function E(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function D(e = document) {
	var t, n;
	T = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (T = E(v(i))), {
		get values() {
			return { ...T };
		},
		t: O
	};
}
function O(e, t) {
	let n = e.trim(), r = T[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var k = "[data-lightbox-src]", te = "js-lightbox", ne = `.${te}`, re = `${k}, ${ne}`, ie = "[data-site-lightbox]", ae = "[data-lightbox-close]", A = "[data-lightbox-prev]", j = "[data-lightbox-next]", oe = "[data-lightbox-auto-icon]", M = "site-lightbox-trigger", N = "site-lightbox-trigger__image", P = "site-lightbox-trigger__icon", F = "w-dyn-bind-empty", I = "/plugins/Basic/assets/placeholder.", se = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", L = !1, R = null, z = null, B = [], V = 0, H = !1, ce = null;
function le(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return ue(e);
	let n = s("img", e);
	return n ? ue(n) : "";
}
function ue(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(F) || t.includes(I) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function de(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function fe(e) {
	let t = le(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		alt: de(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function pe(e) {
	let t = fe(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(re).filter((e) => r(e, "data-lightbox-group") === t.group).map(fe).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function me() {
	let e = document.createElement("span");
	return e.className = P, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = se, e;
}
function he(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function ge(e) {
	if (!he(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = R == null ? void 0 : R.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function _e(e) {
	if (e.closest(`.${M}`) || !le(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${M} ${te}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group"
	]) {
		let i = r(e, n);
		i && (t.setAttribute(n, i), e.removeAttribute(n));
	}
	e.classList.remove(te), e.classList.add(N), e.before(t), t.append(e, me()), ge(t);
}
function ve(e) {
	if (e instanceof HTMLImageElement) {
		_e(e);
		return;
	}
	le(e).trim() && (e.classList.add(M), ge(e), s(oe, e) || e.append(me()));
}
function ye() {
	o(ne).forEach(ve);
}
function be(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function xe() {
	var e, t, n, r, i, a;
	if (z) return Se(z), z;
	let o = s(ie), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = R == null ? void 0 : R.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = be((l = R == null ? void 0 : R.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = be((u = R == null ? void 0 : R.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = be((d = R == null ? void 0 : R.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0, r.append(i, a), c.append(e, t, r, n), document.body.append(c);
	}
	let f = {
		root: c,
		image: (t = s("[data-lightbox-image]", c)) == null ? document.createElement("img") : t,
		caption: (n = s("[data-lightbox-caption-output]", c)) == null ? document.createElement("figcaption") : n,
		closeButton: (r = s(ae, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(A, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(j, c)) == null ? document.createElement("button") : a
	};
	return z = f, Se(f), !o && !document.body.contains(c) && document.body.append(c), f;
}
function Se(e) {
	var t, n, r, i;
	let a = (t = R == null ? void 0 : R.t("close", "Close")) == null ? "Close" : t, o = (n = R == null ? void 0 : R.t("previous", "Previous")) == null ? "Previous" : n, s = (r = R == null ? void 0 : R.t("next", "Next")) == null ? "Next" : r, c = (i = R == null ? void 0 : R.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function Ce() {
	let e = xe(), t = B[V];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = B.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(V), e.root.dataset.lightboxCount = String(B.length);
}
function we(e) {
	let t = xe();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function Te(e) {
	B.length < 2 || (V = (e + B.length) % B.length, Ce());
}
function Ee() {
	Te(V + 1);
}
function De() {
	Te(V - 1);
}
function Oe(e) {
	var t;
	let n = pe(e);
	if (!n) return;
	let r = H;
	B = n.items, V = n.index, ce = e, H = !0, Ce(), we(!0), r || p();
	let i = xe();
	m(i.closeButton || i.root);
	let a = B[V];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: V,
		count: B.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function ke() {
	var t;
	if (!H || !z) return;
	let r = z, i = ce, a = (t = B[V]) == null ? null : t;
	we(!1), n(), H = !1, B = [], V = 0, ce = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function Ae(e) {
	if (!(!H || !z)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), ke();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), Ee();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), De();
			return;
		}
		y(z.root, e);
	}
}
function je(e) {
	!H || !z || e.target === z.root && ke();
}
function Me(e) {
	return R = e.i18n, ye(), L || (g(document, "click", re, (e, t) => {
		e.preventDefault(), Oe(t);
	}), g(document, "keydown", ne, (e, t) => {
		he(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Oe(t));
	}), g(document, "click", ae, (e) => {
		e.preventDefault(), ke();
	}), g(document, "click", A, (e) => {
		e.preventDefault(), De();
	}), g(document, "click", j, (e) => {
		e.preventDefault(), Ee();
	}), document.addEventListener("click", je), document.addEventListener("keydown", Ae, !0), L = !0), {
		openLightbox: Oe,
		closeLightbox: ke
	};
}
//#endregion
//#region src/modules/modal.ts
var Ne = "[data-modal]", Pe = "[data-modal-content]", Fe = "[data-modal-open]", Ie = "[data-modal-close]", Le = "a[href^=\"#modal:\"]", Re = "#modal:", ze = 220, Be = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Ve = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", He = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Ue = !1, We = !0, Ge = null, U = null, W = "", Ke = null, qe = null, Je = /* @__PURE__ */ new Map();
function Ye(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Re) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Xe() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Ie),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = Be, t.lightboxIcon.innerHTML = Ve, Qe(t), t;
}
function Ze() {
	return (!U || !document.body.contains(U.root)) && (U = Xe()), Qe(U), U;
}
function Qe(e) {
	var t, n;
	let r = (t = Ge == null ? void 0 : Ge.t("close", "Close")) == null ? "Close" : t, i = (n = Ge == null ? void 0 : Ge.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function $e(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function et(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function tt(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = et(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = $e(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function nt(e) {
	var t, n, r;
	let i = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = et(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: $e(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = et(e, "[data-modal-image]"), s = $e(a);
	return s ? [{
		src: s,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function rt(e) {
	var t, n, i, a, o, s, c, l;
	let u = r(e, "data-modal-content");
	if (!u) return null;
	let d = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", f = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, p = nt(e), m = p[0], h = e.querySelector("[data-modal-body]");
	return {
		id: u,
		address: d,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: f,
		image: (o = m == null ? void 0 : m.src) == null ? "" : o,
		imageAlt: (s = m == null ? void 0 : m.alt) == null ? "" : s,
		caption: (c = m == null ? void 0 : m.caption) == null ? "" : c,
		html: (l = h == null ? void 0 : h.innerHTML) == null ? "" : l,
		work: tt(e),
		gallery: p
	};
}
function it(e) {
	var t, n, i, a, o, s, c, l;
	let u = r(e, "data-modal");
	if (!u) return null;
	let d = e.querySelector(".fwm-modal__image"), f = $e(d), p = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return {
		id: u,
		address: (i = (a = e.querySelector(".fwm-modal__address")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i,
		layout: "default",
		headline: "",
		image: f,
		imageAlt: (o = d == null ? void 0 : d.alt) == null ? "" : o,
		caption: p,
		html: (s = (c = e.querySelector(".fwm-modal__text")) == null ? void 0 : c.innerHTML) == null ? "" : s,
		work: null,
		gallery: f ? [{
			src: f,
			alt: (l = d == null ? void 0 : d.alt) == null ? "" : l,
			caption: p
		}] : []
	};
}
function at() {
	o(Pe).forEach((e) => {
		let t = rt(e);
		t && Je.set(t.id, t);
	}), o(Ne).forEach((e) => {
		let t = it(e);
		t && Je.set(t.id, t), e.remove();
	});
}
function ot(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(Pe).find((e) => r(e, "data-modal-content") === n), a = i ? rt(i) : null;
	return a && Je.set(n, a), (t = a == null ? Je.get(n) : a) == null ? null : t;
}
function st(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = He, r.append(i, o), t.append(r), t;
}
function ct(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Ve, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function lt(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function ut(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, lt(e);
}
function dt(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(st(t.work)), i.forEach((t, n) => {
		e.gallery.append(ct(t, n));
	});
}
function ft(e) {
	let t = Ze();
	return e.layout === "context" ? dt(t, e) : ut(t, e), t;
}
function pt(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function mt(e) {
	qe !== null && (window.clearTimeout(qe), qe = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function ht(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), qe = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), qe = null;
	}, ze), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function gt(e, t) {
	var n, r, i, a, o, s, l, u, f, m, h;
	let g = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (r = e.layout) == null ? "default" : r,
		headline: (i = e.headline) == null ? "" : i,
		image: (a = e.image) == null ? "" : a,
		imageAlt: (o = e.imageAlt) == null ? "" : o,
		caption: (s = e.caption) == null ? "" : s,
		html: (l = e.html) == null ? "" : l,
		work: (u = e.work) == null ? null : u,
		gallery: (f = e.gallery) != null && f.length ? e.gallery : e.image ? [{
			src: e.image,
			alt: (m = e.imageAlt) == null ? "" : m,
			caption: (h = e.caption) == null ? "" : h
		}] : []
	};
	if (!g.id) return;
	W && vt(), Je.set(g.id, g), Ke = t == null ? c() : t, W = g.id;
	let _ = ft(g);
	mt(_), p(), pt(_), d(_.root, "site:modal-open", {
		id: W,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function _t(e, t) {
	let n = ot(e);
	n && gt(n, t);
}
function vt() {
	if (!W || !U) return;
	let t = W, r = Ke;
	ht(U), n(), W = "", Ke = null, d(U.root, "site:modal-close", {
		id: t,
		modal: U.root
	}), e(r);
}
function yt(e) {
	if (!(!W || !U) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), vt();
			return;
		}
		y(U.panel, e);
	}
}
function bt(e) {
	if (!We || !W || !U) return;
	let t = e.target;
	!i(t) || t !== U.root || vt();
}
function xt(e) {
	var n;
	return We = (n = e.closeOnBackdrop) == null || n, Ge = e.i18n, at(), Ze(), Ue || (g(document, "click", Fe, (e, n) => {
		e.preventDefault(), _t(t(n, "data-modal-open"), n);
	}), g(document, "click", Le, (e, t) => {
		e.preventDefault(), _t(Ye(t), t);
	}), g(document, "click", Ie, (e, t) => {
		U != null && U.root.contains(t) && (e.preventDefault(), vt());
	}), document.addEventListener("click", bt), document.addEventListener("keydown", yt), Ue = !0), {
		openModal: _t,
		openContentModal: gt,
		closeModal: vt
	};
}
//#endregion
//#region src/modules/page-transition.ts
var St = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, Ct = "page-transition-overlay", wt = "[data-page-transition-overlay], .page-transition-overlay", Tt = "site-page-transition", Et = "pending", Dt = "is-page-transition-pending", Ot = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-flip]",
	"[data-work-flip-back]",
	"[download]"
].join(","), kt = !1, At = !1;
function jt(e) {
	document.documentElement.classList.toggle(Dt, e);
}
function Mt() {
	try {
		jt(window.sessionStorage.getItem(Tt) === Et);
	} catch (e) {
		jt(!1);
	}
}
function Nt() {
	let e = document.querySelector(wt);
	if (e) return e.classList.add(Ct), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = Ct, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function Pt(e) {
	var t;
	return !!(e.closest(Ot) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function Ft(e, t) {
	return !At && !e.defaultPrevented && !l(e) && !Pt(t);
}
function It() {
	try {
		window.sessionStorage.setItem(Tt, Et), jt(!0);
	} catch (e) {}
}
function Lt() {
	try {
		let e = window.sessionStorage.getItem(Tt) === Et;
		return window.sessionStorage.removeItem(Tt), jt(!1), e;
	} catch (e) {
		return jt(!1), !1;
	}
}
function Rt(e) {
	if (u() || !Lt()) {
		b.set(e, {
			yPercent: -100,
			y: 0
		});
		return;
	}
	b.fromTo(e, {
		yPercent: 0,
		y: 0
	}, {
		yPercent: 100,
		delay: St.holdDuration,
		duration: St.revealDuration,
		ease: St.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			});
		}
	});
}
function zt(e, t) {
	At = !0, It(), b.killTweensOf(t), b.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: St.coverDuration,
		ease: St.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	});
}
function Bt(e, t) {
	e.persisted && (At = !1, Lt(), b.set(t, {
		yPercent: -100,
		y: 0
	}));
}
function Vt() {
	if (kt) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Vt, { once: !0 });
		return;
	}
	kt = !0;
	let e = Nt();
	Rt(e), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (At) {
			t.preventDefault();
			return;
		}
		if (!Ft(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), zt(i, e));
	}, !0), window.addEventListener("pageshow", (t) => Bt(t, e));
}
Mt();
//#endregion
//#region src/modules/site-menu.ts
var Ht = "[data-site-menu]", Ut = "[data-site-menu-panel]", Wt = "[data-site-menu-toggle]", Gt = "[data-site-menu-toggle-label]", Kt = "[data-site-menu-link]", qt = "[data-site-menu-indicator]", Jt = "is-active", Yt = "is-open", Xt = "is-ready", Zt = "data-site-menu-open-label", Qt = "data-site-menu-closed-label", $t = "data-site-menu-current-key", en = "data-site-menu-label", tn = "data-site-menu-key", nn = "data-site-menu-original-tabindex", rn = "CLOSE", an = "MENU", on = [], sn = !1;
function cn(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function ln(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return cn(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function un(e, t) {
	return t ? r(e, tn) === t : !1;
}
function dn(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || un(e, r(t, $t) || ((n = document.documentElement.getAttribute($t)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute($t)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = ln(e);
	return a ? a === cn(window.location.pathname) : !1;
}
function fn(e) {
	var t, n;
	return r(e, en) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function pn(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Jt) || e.classList.contains("w--current"))) == null ? e.links.find((t) => dn(t, e.root)) : t;
	return n ? fn(n) : "";
}
function mn(e, t = !0) {
	var n;
	let i = r(e.root, Zt) || rn, a = r(e.root, Qt) || an, o = pn(e), s = e.isOpen ? i : e.isHovered ? a : o || a, c = (n = e.toggleLabel) == null ? e.toggle : n;
	if (c.textContent !== s) {
		if (b.killTweensOf(c), u() || !t) {
			c.textContent = s, b.set(c, { clearProps: "opacity" });
			return;
		}
		b.to(c, {
			opacity: 0,
			duration: .08,
			ease: "power1.out",
			onComplete: () => {
				c.textContent = s, b.to(c, {
					opacity: 1,
					duration: .12,
					ease: "power1.in",
					onComplete: () => {
						b.set(c, { clearProps: "opacity" });
					}
				});
			}
		});
	}
}
function hn(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, nn);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(nn) && e.hasAttribute("tabindex") && e.setAttribute(nn, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function gn(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Yt, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), hn(e, t), mn(e, n);
}
function _n(e, t, n) {
	b.killTweensOf(e.panel), b.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	u() || b.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? .38 : .28,
		ease: t ? "power3.out" : "power2.inOut",
		onComplete: () => {
			b.set(e.panel, { clearProps: "height" });
		}
	});
}
function vn(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	gn(e, !0), _n(e, !0, t);
}
function yn(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	gn(e, !1), _n(e, !1, t);
}
function bn(e) {
	e.isOpen ? yn(e) : vn(e);
}
function xn(e) {
	e.links.forEach((t) => {
		let n = dn(t, e.root), r = s(qt, t);
		t.classList.toggle(Jt, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function Sn(e) {
	var t;
	let n = s(Ut, e), r = s(Wt, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(Gt, r)) == null ? s(Gt, e) : t,
		links: o(Kt, e),
		isOpen: e.classList.contains(Yt),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${on.length + 1}`), r.setAttribute("aria-controls", n.id), xn(i), gn(i, i.isOpen, !1), e.classList.add(Xt);
	let a = (e) => {
		e.preventDefault(), bn(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || yn(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (yn(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(Kt) || yn(i);
	}, d = () => {
		i.isHovered = !0, mn(i);
	}, f = () => {
		i.isHovered = !1, mn(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function Cn(e = document) {
	if (sn && e === document) return () => void 0;
	e === document && (sn = !0);
	let t = o(Ht, e).map(Sn).filter((e) => !!e);
	return on.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Xt, Yt), b.killTweensOf(e.panel), b.killTweensOf((t = e.toggleLabel) == null ? e.toggle : t), b.set(e.panel, { clearProps: "height" }), b.set((n = e.toggleLabel) == null ? e.toggle : n, { clearProps: "opacity" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), hn(e, !0);
		});
	};
}
//#endregion
//#region node_modules/gsap/utils/matrix.js
var G, wn, Tn, En, Dn, On, kn, An, K = "transform", jn = K + "Origin", Mn, Nn = function(e) {
	var t = e.ownerDocument || e;
	for (!(K in e.style) && ("msTransform" in e.style) && (K = "msTransform", jn = K + "Origin"); t.parentNode && (t = t.parentNode););
	if (wn = window, kn = new Kn(), t) {
		G = t, Tn = t.documentElement, En = t.body, An = G.createElementNS("http://www.w3.org/2000/svg", "g"), An.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", Mn = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, Pn = function(e) {
	for (var t, n; e && e !== En;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, Fn = [], In = [], Ln = function() {
	return wn.pageYOffset || G.scrollTop || Tn.scrollTop || En.scrollTop || 0;
}, Rn = function() {
	return wn.pageXOffset || G.scrollLeft || Tn.scrollLeft || En.scrollLeft || 0;
}, zn = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, Bn = function e(t) {
	if (wn.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, Vn = function e(t, n) {
	if (t.parentNode && (G || Nn(t))) {
		var r = zn(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = G.createElementNS ? G.createElementNS(i.replace(/^https/, "http"), a) : G.createElement(a);
		return n && (r ? (On || (On = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), On.appendChild(l)) : (Dn || (Dn = e(t), Object.assign(Dn.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), Dn.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, Hn = function(e) {
	for (var t = new Kn(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, Un = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[K], e.style[K] = "none", e.appendChild(An), t = An.getCTM(), e.removeChild(An), n ? e.style[K] = n : e.style.removeProperty(K.replace(/([A-Z])/g, "-$1").toLowerCase())), t || kn.clone();
}, Wn = function(e, t) {
	var n = zn(e), r = e === n, i = n ? Fn : In, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === wn) return e;
	if (i.length || i.push(Vn(e, 1), Vn(e, 2), Vn(e, 3)), s = n ? On : Dn, n) r ? (l = Un(e), u = -l.e / l.a, d = -l.f / l.d, c = kn) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? Hn(c) : c.getItem(0).matrix : kn, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new Kn(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, Mn) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (wn.getComputedStyle(l)[K] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = wn.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[K] = f[K], l[jn] = f[jn], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, Gn = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, Kn = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), Gn(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return Gn(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return Gn(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
	}, t.clone = function() {
		return new e(this.a, this.b, this.c, this.d, this.e, this.f);
	}, t.equals = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f;
		return t === e.a && n === e.b && r === e.c && i === e.d && a === e.e && o === e.f;
	}, t.apply = function(e, t) {
		t === void 0 && (t = {});
		var n = e.x, r = e.y, i = this.a, a = this.b, o = this.c, s = this.d, c = this.e, l = this.f;
		return t.x = n * i + r * o + c || 0, t.y = n * a + r * s + l || 0, t;
	}, e;
}();
function q(e, t, n, r) {
	if (!e || !e.parentNode || (G || Nn(e)).documentElement === e) return new Kn();
	var i = Pn(e), a = zn(e) ? Fn : In, o = Wn(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && Bn(e), f = new Kn((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : Rn()), s.top + (d ? 0 : Ln()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region node_modules/gsap/Flip.js
var qn = 1, Jn, J, Y, Yn, X, Z, Xn, Zn = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, Qn = {}, $n = 180 / Math.PI, er = Math.PI / 180, tr = {}, nr = {}, rr = {}, ir = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, ar = ir("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), or = ir("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), sr = function(e) {
	return Jn(e)[0] || console.warn("Element not found:", e);
}, cr = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, lr = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, ur = {
	zIndex: 1,
	kill: 1,
	simple: 1,
	spin: 1,
	clearProps: 1,
	targets: 1,
	toggleClass: 1,
	onComplete: 1,
	onUpdate: 1,
	onInterrupt: 1,
	onStart: 1,
	delay: 1,
	repeat: 1,
	repeatDelay: 1,
	yoyo: 1,
	scale: 1,
	fade: 1,
	absolute: 1,
	props: 1,
	onEnter: 1,
	onLeave: 1,
	custom: 1,
	paused: 1,
	nested: 1,
	prune: 1,
	absoluteOnLeave: 1
}, dr = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, fr = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, pr = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, mr = {}, hr = function(e) {
	var t = mr[e] = ir(e);
	return rr[e] = t.concat(or), t;
}, gr = function(e) {
	var t = e._gsap || J.core.getCache(e);
	return t.gmCache === J.ticker.frame ? t.gMatrix : (t.gmCache = J.ticker.frame, t.gMatrix = q(e, !0, !1, !0));
}, _r = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, vr = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = _r(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, yr = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : nr[a] || (nr[a] = fr(a)), o);
	return n;
}, br = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, xr = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(br);
}, Sr = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Cr = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), Y && n !== 1) return Y._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), Y._final.push(function() {
		return (e.cache.uncache = 1) && br(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (yr(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), yr(e, Sr), f = window.getComputedStyle(r); l--;) c[Sr[l]] = f[Sr[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new Gr(r);
	else if (u = pr(e, tr), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new Kn(1, 0, 0, 1, p.left + Rn(), p.top + Ln());
	} else u.matrix = q(r, !1, !1, !0);
	return u = Nr(u, e, !0), e.x = Z(u.x, .01), e.y = Z(u.y, .01), r;
}, wr = function(e, t) {
	return t !== !0 && (t = Jn(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, Tr = function(e) {
	return vr(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && Cr(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, Er = function(e, t) {
	return t && e.idLookup[Dr(t).id] || e.elementStates[0];
}, Dr = function(e, t, n, r) {
	return e instanceof Gr ? e : e instanceof Q ? Er(e, r) : new Gr(typeof e == "string" ? sr(e) || console.warn(e + " not found") : e, t, n);
}, Or = function(e, t) {
	for (var n = J.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, kr = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, Ar = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + qn++), t;
}, jr = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, Mr = function(e, t, n) {
	return e && t.length && n.add(e(jr(t), n, new Q(t, 0, !0)), 0);
}, Nr = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && Xn && Xn(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, ee = !S && e.simple && t.simple && !i, C, w, T, E, D, O, k;
	return ee || !c ? (p = m = 1, h = C = 0) : (D = gr(c), O = D.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = cr(Math.atan2(O.b, O.a) * $n), C = cr(Math.atan2(O.c, O.d) * $n + h) % 360, p = Math.sqrt(O.a ** 2 + O.b ** 2), m = Math.sqrt(O.c ** 2 + O.d ** 2) * Math.cos(C * er), i && (i = Jn(i)[0], E = J.getProperty(i), k = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: E("scaleX"),
		scaleY: E("scaleY"),
		width: k ? k.width : Math.ceil(parseFloat(E("width", "px"))),
		height: k ? k.height : parseFloat(E("height", "px"))
	}), s.rotation = h + "deg", s.skewX = C + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = Z(d * p / v.scaleX, 0), f = Z(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && kr(o, t.props), ee || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), O = q(i || o, !1, !1, !0), w = D.apply({
		x: O.e,
		y: O.f
	}), T = D.apply({
		x: b,
		y: x
	}), l += T.x - w.x, u += T.y - w.y) : (D.e = D.f = 0, T = D.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += T.x, u += T.y), l = Z(l, .02), u = Z(u, .02), a && !(a instanceof Gr) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = C, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, Pr = function(e, t) {
	return e instanceof Q ? e : new Q(e, t);
}, Fr = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, Ir = [], Lr = "width,height,overflowX,overflowY".split(","), Rr, zr = function(e) {
	if (e !== Rr) {
		var t = X.style, n = X.clientWidth === window.outerWidth, r = X.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) Ir[i] = t[Lr[i]];
			n && (t.width = X.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = X.clientHeight + "px", t.overflowX = "hidden"), Rr = e;
		} else if (Rr) {
			for (; i--;) Ir[i] ? t[Lr[i]] = Ir[i] : t.removeProperty(fr(Lr[i]));
			Rr = e;
		}
	}
}, Br = function(e, t) {
	for (var n = 0; n < e.length; n += 3) J.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, Vr = function(e, t, n, r) {
	e instanceof Q && t instanceof Q || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, ee = i.prune, C = ("props" in n ? n : e).props, w = pr(n, ur), T = J.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), E = w, D = [], O = [], k = [], te = [], ne = S === !0 ? 1 : S || 0, re = typeof S == "function" ? S : function() {
		return ne;
	}, ie = e.interrupted || t.interrupted, ae = T[r === 1 ? "from" : "to"], A, j, oe, M, N, P, F, I, se, L, R, z, B, V;
	for (j in t.idLookup) R = t.alt[j] ? Fr(t, e, j) : t.idLookup[j], N = R.element, L = e.idLookup[j], e.alt[j] && N === L.element && (e.alt[j].isVisible || !R.isVisible) && (L = e.alt[j]), L ? (P = {
		t: N,
		b: L,
		a: R,
		sd: L.element === N ? 0 : R.isVisible ? 1 : -1
	}, k.push(P), P.sd && (P.sd < 0 && (P.b = R, P.a = L), ie && yr(P.b, C ? rr[C] : or), b && k.push(P.swap = {
		t: L.element,
		b: P.b,
		a: P.a,
		sd: -P.sd,
		swap: P
	})), N._flip = L.element._flip = Y ? Y.timeline : T) : R.isVisible && (k.push({
		t: N,
		b: pr(R, { isVisible: 1 }),
		a: R,
		sd: 0,
		entering: 1
	}), N._flip = Y ? Y.timeline : T);
	if (C && (mr[C] || hr(C)).forEach(function(e) {
		return w[e] = function(t) {
			return k[t].a.props[e];
		};
	}), k.finalStates = se = [], z = function() {
		vr(k), zr(!0);
		var t = [];
		for (M = 0; M < k.length; M++) P = k[M], B = P.a, V = P.b, ee && !B.isDifferent(V) && !P.entering ? k.splice(M--, 1) : (N = P.t, _ && !(P.sd < 0) && M && (B = P.a = B.clone({ matrix: q(N, !1, !1, !0) })), V.isVisible && B.isVisible ? (P.sd < 0 ? (_ && Br(t, 1), F = new Gr(N, C, e.simple), Nr(F, B, y, 0, 0, F), F.matrix = q(N, !1, !1, !0), F.bounds = N.getBoundingClientRect(), F.css = P.b.css, P.a = B = F, b && (N.style.opacity = ie ? V.opacity : B.opacity), x && te.push(N), _ && (Br(t, 2), t.push(N, N.getAttribute("style")))) : P.sd > 0 && b && (N.style.opacity = ie ? B.opacity - V.opacity : "0"), Nr(B, V, y, C), _ && P.sd < 0 && t.push(N.getAttribute("style"))) : V.isVisible !== B.isVisible && (V.isVisible ? B.isVisible || (V.css = B.css, O.push(V), k.splice(M--, 1), c && _ && Nr(B, V, y, C)) : (B.isVisible && D.push(B), k.splice(M--, 1))), y || (N.style.maxWidth = Math.max(B.width, V.width) + "px", N.style.maxHeight = Math.max(B.height, V.height) + "px", N.style.minWidth = Math.min(B.width, V.width) + "px", N.style.minHeight = Math.min(B.height, V.height) + "px"), _ && g && N.classList.add(g)), se.push(B);
		var r;
		if (g && (r = se.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), zr(!1), y ? (w.scaleX = function(e) {
			return k[e].a.scaleX;
		}, w.scaleY = function(e) {
			return k[e].a.scaleY;
		}) : (w.width = function(e) {
			return k[e].a.width + "px";
		}, w.height = function(e) {
			return k[e].a.height + "px";
		}, w.autoRound = n.autoRound || !1), w.x = function(e) {
			return k[e].a.x + "px";
		}, w.y = function(e) {
			return k[e].a.y + "px";
		}, w.rotation = function(e) {
			return k[e].a.rotation + (S ? re(e, I[e], I) * 360 : 0);
		}, w.skewX = function(e) {
			return k[e].a.skewX;
		}, I = k.map(function(e) {
			return e.t;
		}), (v || v === 0) && (w.modifiers = { zIndex: function() {
			return v;
		} }, w.zIndex = v, w.immediateRender = n.immediateRender !== !1), b && (w.opacity = function(e) {
			return k[e].sd < 0 ? 0 : k[e].sd > 0 ? k[e].a.opacity : "+=0";
		}), te.length) {
			x = J.utils.distribute(x);
			var i = I.slice(te.length);
			w.stagger = function(e, t) {
				return x(~te.indexOf(t) ? I.indexOf(k[e].swap.t) : e, t, i);
			};
		}
		if (ar.forEach(function(e) {
			return n[e] && T.eventCallback(e, n[e], n[e + "Params"]);
		}), u && I.length) for (j in E = pr(w, ur), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) A = pr(u[j], dr), A[j] = w[j], !("duration" in A) && "duration" in w && (A.duration = w.duration), A.stagger = w.stagger, ae.call(T, I, A, 0), delete E[j];
		(I.length || O.length || D.length) && (g && T.add(function() {
			return lr(r, g, T._zTime < 0 ? "remove" : "add");
		}, 0) && !f && lr(r, g, "add"), I.length && ae.call(T, I, E, 0)), Mr(o, D, T), Mr(s, O, T);
		var l = Y && Y.timeline;
		l && (l.add(T, 0), Y._final.push(function() {
			return xr(k, !a);
		})), oe = T.duration(), T.call(function() {
			var e = T.time() >= oe;
			e && !l && xr(k, !a), g && lr(r, g, e ? "remove" : "add");
		});
	}, l && (c = k.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), Y) {
		var H;
		c && (H = Y._abs).push.apply(H, wr(k, c)), Y._run.push(z);
	} else c && Tr(wr(k, c)), z();
	var ce = Y ? Y.timeline : T;
	return ce.revert = function() {
		return Ur(ce, 1, 1);
	}, ce;
}, Hr = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, Ur = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (Hr(e), t < 2 && e.progress(1), e.kill()), !0;
}, Wr = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, Q = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = jr(e), this.elementStates = e, Wr(this);
		else {
			this.targets = Jn(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			Y && !r && Y._kill.push(this), this.update(r || !!Y);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new Gr(e, t.props, t.simple);
		}), Wr(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, Wr(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = vr(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = q(o.element, !1, !1, !0)), s = i[o.id], s && Nr(o, s, t, !0, 0, o), o.matrix = q(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || tr;
		return (t in n ? n : n.props || tr)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Wr(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? Fr(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = rr[this.props] || or, t = this.elementStates.length; t--;) yr(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = Ur(i, +!e);
			e && a && n.indexOf(i) < 0 && i.add(function() {
				return t.updateVisibility();
			}), a && n.push(i);
		}), !e && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length);
	}, t.updateVisibility = function() {
		this.elementStates.forEach(function(e) {
			var t = e.element.getBoundingClientRect();
			e.isVisible = !!(t.width || t.height || t.top || t.left), e.uncache = 1;
		});
	}, t.getElementState = function(e) {
		return this.elementStates[this.targets.indexOf(sr(e))];
	}, t.makeAbsolute = function() {
		return vr(this.elementStates.slice(0), !0, !0).map(Cr);
	}, e;
}(), Gr = /*#__PURE__*/ function() {
	function e(t, n, r) {
		t instanceof e ? Object.assign(this, t, n || {}) : (this.element = t, this.update(n, r));
	}
	var t = e.prototype;
	return t.isDifferent = function(e) {
		var t = this.bounds, n = e.bounds;
		return t.top !== n.top || t.left !== n.left || t.width !== n.width || t.height !== n.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props);
	}, t.clone = function(t) {
		return new e(this, t);
	}, t.update = function(e, t) {
		var n = this, r = n.element, i = J.getProperty(r), a = J.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new Kn(1, 0, 0, 1, o.left + Rn(), o.top + Ln()) : q(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = Ar(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : Z(i("width", "px"), .04), n.height = s ? s.height : Z(i("height", "px"), .04), e && Or(n, mr[e] || hr(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && Un(r).inverse(), n.simple = t || cr(c.a) === 1 && !cr(c.b) && !cr(c.c) && cr(c.d) === 1, n.uncache = 0;
	}, e;
}(), Kr = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), qr = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Q(), this.timeline = J.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new Kr(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = Y, r = Yn;
		return Y = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, Yn = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), Yn = r, Y = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = Y, n = this.timeline, r = this.actions.length, i, a;
		for (Y = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new Q(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare(Jr.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), Tr(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), Zn(e, "onComplete"));
		}), Y = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return Zn(this, "onStart"), n.restart(), this;
	}, t.loadState = function(e) {
		e || (e = function() {
			return 0;
		});
		var t = [];
		return this.actions.forEach(function(n) {
			if (n.vars.loadState) {
				var r, i = function i(a) {
					a && (n.targets = a), r = t.indexOf(i), ~r && (t.splice(r, 1), t.length || e());
				};
				t.push(i), n.vars.loadState(i);
			}
		}), t.length || e(), this;
	}, t.setState = function() {
		return this.actions.forEach(function(e) {
			return e.targets = e.vars.setState && e.vars.setState(e);
		}), this;
	}, t.killConflicts = function(e) {
		return this.state.interrupt(e), this._kill.forEach(function(t) {
			return t.interrupt(e);
		}), this;
	}, t.run = function(e, t) {
		var n = this;
		return this !== Y && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete Qn[this.id];
	}, e;
}(), Jr = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = Pr(t, n);
		return Yn && Yn.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), Vr(e, Pr(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return Vr(e, Pr(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return Vr(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? pr(n, dr) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && sr(n.fitChild), p = Dr(t, c, d, e), m = Dr(e, 0, d, p), h = c ? rr[c] : or, g = J.context();
		return c && kr(r, p.props), yr(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			br(m), u && u.apply(this, arguments);
		}), a && Cr(m, p), r = Nr(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return br(m);
			};
		}), s ? r : r.duration ? J.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof Q ? e : new Q(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), Qn[e] || (Qn[e] = new qr(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof Q ? e.targets : Jn(e)).forEach(function(e) {
			return e && Ur(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (sr(e) || tr)._flip;
	}, e.getElementState = function(e, t) {
		return new Gr(sr(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = q(t, !0, !0).multiply(q(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (X = typeof document < "u" && document.body, X) {
			J = e, Nn(X), Jn = J.utils.toArray, Xn = J.core.getStyleSaver;
			var t = J.utils.snap(.1);
			Z = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
//#endregion
//#region src/modules/work-flip.ts
Jr.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin(Jr), b.registerPlugin(Jr);
var $ = {
	leave: .26,
	flip: .86,
	imageFade: .24,
	contentFade: .5,
	contentSpread: .3,
	ease: "power3.inOut"
}, Yr = 2600, Xr = "work-flip-ghost", Zr = "[data-work-flip-ghost]", Qr = "a[data-work-flip]", $r = ".cms-works__image-wrap", ei = "img", ti = "[data-work-flip-back], [data-back-button]", ni = "[data-work-flip-target]", ri = "data-work-flip-id", ii = "site:works-ready", ai = "site:work-detail-ready", oi = [
	"SCRIPT",
	"STYLE",
	"LINK",
	"NOSCRIPT",
	"TEMPLATE",
	"META"
], si = "data-work-flip-faded", ci = "data-work-flip-hidden", li = !1, ui = !1, di = 0;
function fi(e) {
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		left: t.left,
		width: t.width,
		height: t.height
	};
}
function pi(e) {
	return e instanceof HTMLElement && !oi.includes(e.tagName);
}
function mi(e, t) {
	let n = document.createElement("div"), r = document.createElement("img");
	return n.className = Xr, n.setAttribute("data-work-flip-ghost", ""), n.setAttribute("aria-hidden", "true"), n.style.top = `${e.top}px`, n.style.left = `${e.left}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`, r.src = t, r.alt = "", r.decoding = "sync", n.append(r), document.body.append(n), n;
}
function hi() {
	return document.querySelector(Zr);
}
function gi() {
	Array.from(document.querySelectorAll(Zr)).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function _i() {
	document.documentElement.classList.remove(w), gi(), S();
}
function vi(e) {
	var t;
	return e ? (t = Array.from(document.querySelectorAll(`[${ri}]`)).find((t) => t.getAttribute(ri) === e)) == null ? null : t : null;
}
function yi(e, t) {
	let n = new Set(t), r = [], i = e;
	for (; i && i !== document.body && i.parentElement;) {
		var a, o;
		let e = i;
		Array.from((a = (o = e.parentElement) == null ? void 0 : o.children) == null ? [] : a).forEach((t) => {
			t === e || n.has(t) || !pi(t) || r.push(t);
		}), i = e.parentElement;
	}
	return r;
}
function bi(e) {
	return Array.from(document.body.children).filter((t) => t !== e && pi(t));
}
function xi(e) {
	return e.forEach((e) => e.setAttribute(si, "")), e;
}
function Si(e) {
	b.set(e, { clearProps: "opacity,visibility" }), e.forEach((e) => e.removeAttribute(si));
}
function Ci(e) {
	return e.width > 0 && e.height > 0;
}
function wi(e) {
	return e.height > 0 ? e.width / e.height : 0;
}
function Ti(e, t) {
	e.complete && e.naturalWidth > 0 || !t.ratio || (e.style.aspectRatio = String(t.ratio), e.setAttribute("data-work-flip-ratio", ""));
}
function Ei(e) {
	e.hasAttribute("data-work-flip-ratio") && (e.style.aspectRatio = "", e.removeAttribute("data-work-flip-ratio"));
}
function Di(e, t) {
	let n = () => window.requestAnimationFrame(() => window.requestAnimationFrame(t));
	if (e.complete && e.naturalWidth > 0) {
		n();
		return;
	}
	if (typeof e.decode == "function") {
		e.decode().then(n, n);
		return;
	}
	e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
}
function Oi() {
	ui = !1, gi();
	let e = Array.from(document.querySelectorAll(`[${si}]`));
	b.killTweensOf(e), Si(e), Array.from(document.querySelectorAll(`[${ci}]`)).forEach((e) => {
		e.style.visibility = "", e.removeAttribute(ci);
	}), document.documentElement.classList.remove(w);
}
function ki(e, t, n) {
	let r = fi(e), i = mi(r, t.currentSrc || t.src), a = i.firstElementChild, o = t.getBoundingClientRect().width / Math.max(r.width, 1), s = !1, c = () => {
		s || (s = !0, n());
	}, l = b.timeline({ onComplete: c });
	window.setTimeout(c, $.leave * 1e3 + 400), ui = !0, e.style.visibility = "hidden", e.setAttribute(ci, ""), b.set(a, {
		scale: o > 1.002 ? o : 1,
		transformOrigin: "50% 50%"
	}), l.to(xi(bi(i)), {
		autoAlpha: 0,
		duration: $.leave,
		ease: "power2.out"
	}, 0), o > 1.002 && l.to(a, {
		scale: 1,
		duration: $.leave,
		ease: "power2.out"
	}, 0);
}
function Ai(e, t, n) {
	var r;
	let i = document.documentElement, a = i.classList.contains("is-work-flip-pending") ? xi(yi(t, [e])) : [], o = n.direction === "back" ? (r = t.closest($r)) == null ? t : r : t, s = !1, c = 0, l = (n) => {
		if (Ei(t), b.killTweensOf(e), b.set(t, {
			autoAlpha: 1,
			clearProps: "opacity,visibility"
		}), n) {
			e.remove();
			return;
		}
		b.to(e, {
			autoAlpha: 0,
			duration: $.imageFade,
			ease: "power1.out",
			onComplete: () => e.remove()
		});
	}, u = (e) => {
		s || (s = !0, window.clearTimeout(c), e ? (l(!0), a.length > 0 && (b.set(a, { autoAlpha: 1 }), Si(a))) : (Di(t, () => l(!1)), a.length > 0 && b.to(a, {
			autoAlpha: 1,
			duration: $.contentFade,
			ease: "power2.out",
			stagger: { amount: $.contentSpread },
			onComplete: () => Si(a)
		})), S());
	};
	a.length > 0 && b.set(a, { autoAlpha: 0 }), b.set(t, { autoAlpha: 0 }), i.classList.remove(w), Jr.fit(e, o, {
		duration: $.flip,
		ease: $.ease,
		onComplete: () => u(!1)
	}), c = window.setTimeout(() => u(!0), ($.flip + 2) * 1e3);
}
function ji(e) {
	var t;
	let n = (t = hi()) == null ? mi(e.rect, e.src) : t, r = e.direction === "forward" ? ai : ii, i = !1, a = 0, o = null, s = () => {
		o == null || o.disconnect(), o = null, document.removeEventListener(r, u);
	}, c = () => {
		i || (i = !0, s(), _i());
	}, l = () => {
		var t;
		if (e.direction === "forward") {
			let e = document.querySelector(ni);
			return e instanceof HTMLImageElement ? e : null;
		}
		let n = vi(e.workId), r = (t = n == null ? void 0 : n.querySelector(ei)) == null ? null : t;
		return r instanceof HTMLImageElement ? r : null;
	};
	function u() {
		if (i) return;
		let t = l();
		if (!t) return;
		i = !0, s(), Ti(t, e);
		let r = !1, o = () => {
			r || (r = !0, window.clearTimeout(a), Ai(n, t, e));
		};
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(o);
		}), window.setTimeout(o, 300);
	}
	a = window.setTimeout(c, Yr), document.addEventListener(r, u), o = new MutationObserver(u), o.observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), u();
}
function Mi(e) {
	return e.href === window.location.href ? !1 : e.direction === "forward" ? !0 : e.auto ? C() : C() || document.referrer === e.href;
}
function Ni(e, t) {
	var n, r;
	let i = h(t), a = t.querySelector($r), o = (n = a == null ? void 0 : a.querySelector(ei)) == null ? null : n;
	if (!i || !a || !(o instanceof HTMLImageElement)) return;
	e.preventDefault();
	let s = fi(a);
	if (!Ci(s)) {
		window.location.href = i.href;
		return;
	}
	ee({
		direction: "forward",
		workId: (r = t.getAttribute(ri)) == null ? "" : r,
		src: o.currentSrc || o.src,
		href: window.location.href,
		rect: s,
		ratio: wi(s),
		auto: !1,
		ts: Date.now()
	}), ki(a, o, () => {
		window.location.href = i.href;
	});
}
function Pi(e, t) {
	var n;
	let r = document.querySelector(ni), i = t.getAttribute("href") || "", a = () => {
		if (t.hasAttribute("data-back-button") && window.history.length > 1) {
			window.history.back();
			return;
		}
		window.location.href = i || "/";
	};
	if (!(r instanceof HTMLImageElement)) return;
	e.preventDefault(), e.stopPropagation();
	let o = fi(r);
	if (!Ci(o)) {
		a();
		return;
	}
	ee({
		direction: "back",
		workId: (n = r.getAttribute(ri)) == null ? "" : n,
		src: r.currentSrc || r.src,
		href: window.location.href,
		rect: o,
		ratio: wi(o),
		auto: !1,
		ts: Date.now()
	}), ki(r, r, a);
}
function Fi(e) {
	return Ci(e) && e.top < window.innerHeight && e.top + e.height > 0;
}
function Ii() {
	var e;
	let t = document.querySelector(ni);
	if (ui || Date.now() - di < 1500 || !(t instanceof HTMLImageElement)) return;
	let n = fi(t);
	Fi(n) && ee({
		direction: "back",
		workId: (e = t.getAttribute(ri)) == null ? "" : e,
		src: t.currentSrc || t.src,
		href: window.location.href,
		rect: n,
		ratio: wi(n),
		auto: !0,
		ts: Date.now()
	});
}
function Li() {
	if (li) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Li, { once: !0 });
		return;
	}
	if (li = !0, u()) {
		_i();
		return;
	}
	let e = x();
	e && Mi(e) ? ji(e) : _i(), document.addEventListener("click", (e) => {
		let t = e.target;
		if (ui) {
			e.preventDefault();
			return;
		}
		if (!(t instanceof Element) || e.defaultPrevented || l(e)) return;
		let n = t.closest(ti);
		if (n) {
			Pi(e, n);
			return;
		}
		t.closest("a[href]") && (di = Date.now());
		let r = t.closest(Qr);
		r && Ni(e, r);
	}, !0), window.addEventListener("pagehide", () => {
		Ii(), Oi();
	}), window.addEventListener("pageshow", (e) => {
		if (!e.persisted) return;
		Oi();
		let t = x();
		if (t && t.direction === "back" && t.href !== window.location.href && vi(t.workId)) {
			document.documentElement.classList.add(w), ji(t);
			return;
		}
		S();
	});
}
//#endregion
//#region src/main.ts
var Ri = !1;
Li(), Vt();
function zi() {
	if (Ri) return;
	Ri = !0;
	let e = D();
	xt({ i18n: e }), Me({ i18n: e }), Cn(), _(), window.SiteInteractions = {
		openModal: _t,
		openContentModal: gt,
		closeModal: vt,
		openLightbox: Oe,
		closeLightbox: ke
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", zi, { once: !0 }) : zi();
//#endregion

//# sourceMappingURL=site-interactions.js.map