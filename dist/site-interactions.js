import { _ as e, a as t, c as n, d as r, g as i, h as a, i as o, l as s, m as c, n as l, o as u, p as d, r as f, s as p, t as m, u as h, v as g } from "./site-interactions-sLVQDvui.js";
//#region src/modules/i18n.ts
var _ = {};
function v(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (h(t) && h(n) && (e[t.trim()] = n.trim()), e), {});
}
function ee(e = document) {
	var t, n;
	_ = {};
	let r = d("[data-site-i18n]", e), a = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return a && (_ = v(i(a))), {
		get values() {
			return { ..._ };
		},
		t: te
	};
}
function te(e, t) {
	let n = e.trim(), r = _[n];
	return h(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var y = "[data-lightbox-src]", ne = "[data-site-lightbox]", re = "[data-lightbox-close]", ie = "[data-lightbox-prev]", b = "[data-lightbox-next]", x = !1, S = null, C = null, w = [], T = 0, E = !1, D = null;
function ae(e) {
	return p(e, "data-lightbox-src") || (e instanceof HTMLAnchorElement ? e.href : "");
}
function oe(e) {
	var t, n;
	let r = p(e, "data-lightbox-alt");
	if (r) return r;
	let i = d("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function se(e) {
	let t = ae(e).trim();
	return t ? {
		src: t,
		caption: p(e, "data-lightbox-caption"),
		alt: oe(e),
		group: p(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ce(e) {
	let t = se(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = c(y).filter((e) => p(e, "data-lightbox-group") === t.group).map(se).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function O(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function k() {
	var e, t, n, r, i, a;
	if (C) return le(C), C;
	let o = d(ne), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = S == null ? void 0 : S.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, l, u;
		s.innerHTML = "";
		let e = O((c = S == null ? void 0 : S.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = O((l = S == null ? void 0 : S.t("previous", "Previous")) == null ? "Previous" : l, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = O((u = S == null ? void 0 : S.t("next", "Next")) == null ? "Next" : u, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0, r.append(i, a), s.append(e, t, r, n), document.body.append(s);
	}
	let f = {
		root: s,
		image: (t = d("[data-lightbox-image]", s)) == null ? document.createElement("img") : t,
		caption: (n = d("[data-lightbox-caption-output]", s)) == null ? document.createElement("figcaption") : n,
		closeButton: (r = d(re, s)) == null ? document.createElement("button") : r,
		previousButton: (i = d(ie, s)) == null ? document.createElement("button") : i,
		nextButton: (a = d(b, s)) == null ? document.createElement("button") : a
	};
	return C = f, le(f), !o && !document.body.contains(s) && document.body.append(s), f;
}
function le(e) {
	var t, n, r, i;
	let a = (t = S == null ? void 0 : S.t("close", "Close")) == null ? "Close" : t, o = (n = S == null ? void 0 : S.t("previous", "Previous")) == null ? "Previous" : n, s = (r = S == null ? void 0 : S.t("next", "Next")) == null ? "Next" : r, c = (i = S == null ? void 0 : S.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function A() {
	let e = k(), t = w[T];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = w.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(T), e.root.dataset.lightboxCount = String(w.length);
}
function j(e) {
	let t = k();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function M(e) {
	w.length < 2 || (T = (e + w.length) % w.length, A());
}
function N() {
	M(T + 1);
}
function P() {
	M(T - 1);
}
function F(e) {
	var t;
	let n = ce(e);
	if (!n) return;
	let i = E;
	w = n.items, T = n.index, D = e, E = !0, A(), j(!0), i || r();
	let a = k();
	f(a.closeButton || a.root);
	let o = w[T];
	l(a.root, "site:lightbox-open", {
		item: o,
		index: T,
		count: w.length,
		group: (t = o == null ? void 0 : o.group) == null ? "" : t,
		trigger: e
	});
}
function I() {
	var e;
	if (!E || !C) return;
	let t = C, n = D, r = (e = w[T]) == null ? null : e;
	j(!1), g(), E = !1, w = [], T = 0, D = null, t.image.removeAttribute("src"), t.caption.textContent = "", l(t.root, "site:lightbox-close", { item: r }), a(n);
}
function ue(t) {
	if (!(!E || !C)) {
		if (t.key === "Escape") {
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), I();
			return;
		}
		if (t.key === "ArrowRight") {
			t.preventDefault(), N();
			return;
		}
		if (t.key === "ArrowLeft") {
			t.preventDefault(), P();
			return;
		}
		e(C.root, t);
	}
}
function de(e) {
	!E || !C || e.target === C.root && I();
}
function fe(e) {
	return S = e.i18n, x || (m(document, "click", y, (e, t) => {
		e.preventDefault(), F(t);
	}), m(document, "click", re, (e) => {
		e.preventDefault(), I();
	}), m(document, "click", ie, (e) => {
		e.preventDefault(), P();
	}), m(document, "click", b, (e) => {
		e.preventDefault(), N();
	}), document.addEventListener("click", de), document.addEventListener("keydown", ue, !0), x = !0), {
		openLightbox: F,
		closeLightbox: I
	};
}
//#endregion
//#region src/modules/modal.ts
var pe = "[data-modal]", me = "[data-modal-content]", he = "[data-modal-open]", L = "[data-modal-close]", ge = "a[href^=\"#modal:\"]", _e = "#modal:", ve = 220, ye = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", R = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", be = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", z = !1, B = !0, V = null, H = null, U = "", W = null, G = null, K = /* @__PURE__ */ new Map();
function xe(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(_e) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Se() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(L),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = ye, t.lightboxIcon.innerHTML = R, J(t), t;
}
function q() {
	return (!H || !document.body.contains(H.root)) && (H = Se()), J(H), H;
}
function J(e) {
	var t, n;
	let r = (t = V == null ? void 0 : V.t("close", "Close")) == null ? "Close" : t, i = (n = V == null ? void 0 : V.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Y(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function X(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Ce(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = X(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = Y(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function we(e) {
	var t, n, r;
	let i = c("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = X(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: Y(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = X(e, "[data-modal-image]"), o = Y(a);
	return o ? [{
		src: o,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function Te(e) {
	var t, n, r, i, a, o, s, c;
	let l = p(e, "data-modal-content");
	if (!l) return null;
	let u = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", d = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, f = we(e), m = f[0], h = e.querySelector("[data-modal-body]");
	return {
		id: l,
		address: u,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: d,
		image: (a = m == null ? void 0 : m.src) == null ? "" : a,
		imageAlt: (o = m == null ? void 0 : m.alt) == null ? "" : o,
		caption: (s = m == null ? void 0 : m.caption) == null ? "" : s,
		html: (c = h == null ? void 0 : h.innerHTML) == null ? "" : c,
		work: Ce(e),
		gallery: f
	};
}
function Ee(e) {
	var t, n, r, i, a, o, s, c;
	let l = p(e, "data-modal");
	if (!l) return null;
	let u = e.querySelector(".fwm-modal__image"), d = Y(u), f = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
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
function De() {
	c(me).forEach((e) => {
		let t = Te(e);
		t && K.set(t.id, t);
	}), c(pe).forEach((e) => {
		let t = Ee(e);
		t && K.set(t.id, t), e.remove();
	});
}
function Oe(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = c(me).find((e) => p(e, "data-modal-content") === n), i = r ? Te(r) : null;
	return i && K.set(n, i), (t = i == null ? K.get(n) : i) == null ? null : t;
}
function ke(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = be, r.append(i, o), t.append(r), t;
}
function Ae(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = R, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function je(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function Me(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, je(e);
}
function Ne(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(ke(t.work)), i.forEach((t, n) => {
		e.gallery.append(Ae(t, n));
	});
}
function Pe(e) {
	let t = q();
	return e.layout === "context" ? Ne(t, e) : Me(t, e), t;
}
function Fe(e) {
	let t = u(e.panel)[0];
	f(t == null ? e.panel : t);
}
function Ie(e) {
	G !== null && (window.clearTimeout(G), G = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function Le(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), G = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), G = null;
	}, ve), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function Z(e, t) {
	var n, i, a, s, c, u, d, f, p, m, h;
	let g = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (i = e.layout) == null ? "default" : i,
		headline: (a = e.headline) == null ? "" : a,
		image: (s = e.image) == null ? "" : s,
		imageAlt: (c = e.imageAlt) == null ? "" : c,
		caption: (u = e.caption) == null ? "" : u,
		html: (d = e.html) == null ? "" : d,
		work: (f = e.work) == null ? null : f,
		gallery: (p = e.gallery) != null && p.length ? e.gallery : e.image ? [{
			src: e.image,
			alt: (m = e.imageAlt) == null ? "" : m,
			caption: (h = e.caption) == null ? "" : h
		}] : []
	};
	if (!g.id) return;
	U && $(), K.set(g.id, g), W = t == null ? o() : t, U = g.id;
	let _ = Pe(g);
	Ie(_), r(), Fe(_), l(_.root, "site:modal-open", {
		id: U,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function Q(e, t) {
	let n = Oe(e);
	n && Z(n, t);
}
function $() {
	if (!U || !H) return;
	let e = U, t = W;
	Le(H), g(), U = "", W = null, l(H.root, "site:modal-close", {
		id: e,
		modal: H.root
	}), a(t);
}
function Re(t) {
	if (!(!U || !H) && !document.body.classList.contains("is-lightbox-open")) {
		if (t.key === "Escape") {
			t.preventDefault(), $();
			return;
		}
		e(H.panel, t);
	}
}
function ze(e) {
	if (!B || !U || !H) return;
	let t = e.target;
	!s(t) || t !== H.root || $();
}
function Be(e) {
	var n;
	return B = (n = e.closeOnBackdrop) == null || n, V = e.i18n, De(), q(), z || (m(document, "click", he, (e, n) => {
		e.preventDefault(), Q(t(n, "data-modal-open"), n);
	}), m(document, "click", ge, (e, t) => {
		e.preventDefault(), Q(xe(t), t);
	}), m(document, "click", L, (e, t) => {
		H != null && H.root.contains(t) && (e.preventDefault(), $());
	}), document.addEventListener("click", ze), document.addEventListener("keydown", Re), z = !0), {
		openModal: Q,
		openContentModal: Z,
		closeModal: $
	};
}
//#endregion
//#region src/main.ts
var Ve = !1;
function He() {
	if (Ve) return;
	Ve = !0;
	let e = ee();
	Be({ i18n: e }), fe({ i18n: e }), n(), window.SiteInteractions = {
		openModal: Q,
		openContentModal: Z,
		closeModal: $,
		openLightbox: F,
		closeLightbox: I
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", He, { once: !0 }) : He();
//#endregion

//# sourceMappingURL=site-interactions.js.map