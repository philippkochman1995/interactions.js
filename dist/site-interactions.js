//#region src/modules/utils.ts
var e = [
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"input:not([disabled]):not([type=\"hidden\"])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"iframe",
	"object",
	"embed",
	"[contenteditable]:not([contenteditable=\"false\"])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(",");
function t(e, t = document) {
	return t.querySelector(e);
}
function n(e, t = document) {
	return Array.from(t.querySelectorAll(e));
}
function r(e) {
	try {
		return JSON.parse(e);
	} catch (e) {
		return null;
	}
}
function i(e) {
	return e instanceof HTMLElement;
}
function a(e) {
	return typeof e == "string" && e.trim().length > 0;
}
function o(e, t) {
	let n = e.getAttribute(t);
	return a(n) ? n.trim() : "";
}
function s(e, t) {
	return o(e, t);
}
function c(e) {
	if (e.hidden || e.closest("[hidden], [aria-hidden=\"true\"]") || e.inert) return !0;
	let t = window.getComputedStyle(e);
	return t.display === "none" || t.visibility === "hidden";
}
function l(t) {
	return n(e, t).filter((e) => !c(e) && e.tabIndex !== -1);
}
function u(e) {
	if (e) try {
		e.focus({ preventScroll: !0 });
	} catch (t) {
		e.focus();
	}
}
function d() {
	return i(document.activeElement) ? document.activeElement : null;
}
function f(e) {
	!e || !document.contains(e) || u(e);
}
function p(e, t) {
	if (t.key !== "Tab") return;
	let n = l(e);
	if (n.length === 0) {
		t.preventDefault(), u(e);
		return;
	}
	let r = n[0], i = n[n.length - 1], a = d();
	if (!a || !e.contains(a)) {
		t.preventDefault(), u(r);
		return;
	}
	if (t.shiftKey && a === r) {
		t.preventDefault(), u(i);
		return;
	}
	!t.shiftKey && a === i && (t.preventDefault(), u(r));
}
var m = {
	count: 0,
	scrollY: 0,
	bodyOverflow: "",
	bodyPosition: "",
	bodyTop: "",
	bodyWidth: "",
	bodyPaddingRight: ""
};
function h() {
	if (m.count += 1, m.count > 1) return;
	let { body: e, documentElement: t } = document, n = window.innerWidth - t.clientWidth;
	m.scrollY = window.scrollY || t.scrollTop || 0, m.bodyOverflow = e.style.overflow, m.bodyPosition = e.style.position, m.bodyTop = e.style.top, m.bodyWidth = e.style.width, m.bodyPaddingRight = e.style.paddingRight, e.style.overflow = "hidden", e.style.position = "fixed", e.style.top = `-${m.scrollY}px`, e.style.width = "100%", n > 0 && (e.style.paddingRight = `${n}px`);
}
function g() {
	if (m.count === 0 || (--m.count, m.count > 0)) return;
	let { body: e } = document, t = m.scrollY;
	e.style.overflow = m.bodyOverflow, e.style.position = m.bodyPosition, e.style.top = m.bodyTop, e.style.width = m.bodyWidth, e.style.paddingRight = m.bodyPaddingRight, window.scrollTo(0, t);
}
function _(e, t, n, r, i) {
	let a = (t) => {
		let i = t.target;
		if (!(i instanceof Element)) return;
		let a = i.closest(n);
		a && (e instanceof HTMLElement && !e.contains(a) || r(t, a));
	};
	return e.addEventListener(t, a, i), () => {
		e.removeEventListener(t, a, i);
	};
}
function v(e = document) {
	return _(e, "click", "[data-back-button]", (e, t) => {
		if (e.preventDefault(), "scrollRestoration" in history && (history.scrollRestoration = "auto"), window.history.length > 1) {
			window.history.back();
			return;
		}
		window.location.href = t.getAttribute("href") || "/";
	});
}
function y(e, t, n) {
	e.dispatchEvent(new CustomEvent(t, {
		bubbles: !0,
		detail: n
	}));
}
//#endregion
//#region src/modules/i18n.ts
var b = {};
function ee(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function te(e = document) {
	var n, i;
	b = {};
	let a = t("[data-site-i18n]", e), o = (n = a == null || (i = a.textContent) == null ? void 0 : i.trim()) == null ? "" : n;
	return o && (b = ee(r(o))), {
		get values() {
			return { ...b };
		},
		t: ne
	};
}
function ne(e, t) {
	let n = e.trim(), r = b[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var x = "[data-lightbox-src]", re = "[data-site-lightbox]", ie = "[data-lightbox-close]", ae = "[data-lightbox-prev]", oe = "[data-lightbox-next]", S = !1, C = null, w = null, T = [], E = 0, D = !1, O = null;
function se(e) {
	return o(e, "data-lightbox-src") || (e instanceof HTMLAnchorElement ? e.href : "");
}
function ce(e) {
	var n, r;
	let i = o(e, "data-lightbox-alt");
	if (i) return i;
	let a = t("img", e);
	return (n = a == null || (r = a.alt) == null ? void 0 : r.trim()) == null ? "" : n;
}
function le(e) {
	let t = se(e).trim();
	return t ? {
		src: t,
		caption: o(e, "data-lightbox-caption"),
		alt: ce(e),
		group: o(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ue(e) {
	let t = le(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let r = n(x).filter((e) => o(e, "data-lightbox-group") === t.group).map(le).filter((e) => !!e), i = Math.max(0, r.findIndex((t) => t.trigger === e));
	return {
		items: r.length > 0 ? r : [t],
		index: i
	};
}
function k(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function A() {
	var e, n, r, i, a, o;
	if (w) return de(w), w;
	let s = t(re), c = s == null ? document.createElement("div") : s;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = C == null ? void 0 : C.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !s) {
		var l, u, d;
		c.innerHTML = "";
		let e = k((l = C == null ? void 0 : C.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = k((u = C == null ? void 0 : C.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = k((d = C == null ? void 0 : C.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0, r.append(i, a), c.append(e, t, r, n), document.body.append(c);
	}
	let f = {
		root: c,
		image: (n = t("[data-lightbox-image]", c)) == null ? document.createElement("img") : n,
		caption: (r = t("[data-lightbox-caption-output]", c)) == null ? document.createElement("figcaption") : r,
		closeButton: (i = t(ie, c)) == null ? document.createElement("button") : i,
		previousButton: (a = t(ae, c)) == null ? document.createElement("button") : a,
		nextButton: (o = t(oe, c)) == null ? document.createElement("button") : o
	};
	return w = f, de(f), !s && !document.body.contains(c) && document.body.append(c), f;
}
function de(e) {
	var t, n, r, i;
	let a = (t = C == null ? void 0 : C.t("close", "Close")) == null ? "Close" : t, o = (n = C == null ? void 0 : C.t("previous", "Previous")) == null ? "Previous" : n, s = (r = C == null ? void 0 : C.t("next", "Next")) == null ? "Next" : r, c = (i = C == null ? void 0 : C.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function j() {
	let e = A(), t = T[E];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = T.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(E), e.root.dataset.lightboxCount = String(T.length);
}
function M(e) {
	let t = A();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function N(e) {
	T.length < 2 || (E = (e + T.length) % T.length, j());
}
function P() {
	N(E + 1);
}
function F() {
	N(E - 1);
}
function I(e) {
	var t;
	let n = ue(e);
	if (!n) return;
	let r = D;
	T = n.items, E = n.index, O = e, D = !0, j(), M(!0), r || h();
	let i = A();
	u(i.closeButton || i.root);
	let a = T[E];
	y(i.root, "site:lightbox-open", {
		item: a,
		index: E,
		count: T.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function L() {
	var e;
	if (!D || !w) return;
	let t = w, n = O, r = (e = T[E]) == null ? null : e;
	M(!1), g(), D = !1, T = [], E = 0, O = null, t.image.removeAttribute("src"), t.caption.textContent = "", y(t.root, "site:lightbox-close", { item: r }), f(n);
}
function fe(e) {
	if (!(!D || !w)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), L();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), P();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), F();
			return;
		}
		p(w.root, e);
	}
}
function pe(e) {
	!D || !w || e.target === w.root && L();
}
function me(e) {
	return C = e.i18n, S || (_(document, "click", x, (e, t) => {
		e.preventDefault(), I(t);
	}), _(document, "click", ie, (e) => {
		e.preventDefault(), L();
	}), _(document, "click", ae, (e) => {
		e.preventDefault(), F();
	}), _(document, "click", oe, (e) => {
		e.preventDefault(), P();
	}), document.addEventListener("click", pe), document.addEventListener("keydown", fe, !0), S = !0), {
		openLightbox: I,
		closeLightbox: L
	};
}
//#endregion
//#region src/modules/modal.ts
var he = "[data-modal]", R = "[data-modal-content]", ge = "[data-modal-open]", z = "[data-modal-close]", _e = "a[href^=\"#modal:\"]", ve = "#modal:", ye = 220, be = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", B = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", xe = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", V = !1, H = !0, U = null, W = null, G = "", K = null, q = null, J = /* @__PURE__ */ new Map();
function Se(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(ve) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Ce() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(z),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = be, t.lightboxIcon.innerHTML = B, Te(t), t;
}
function we() {
	return (!W || !document.body.contains(W.root)) && (W = Ce()), Te(W), W;
}
function Te(e) {
	var t, n;
	let r = (t = U == null ? void 0 : U.t("close", "Close")) == null ? "Close" : t, i = (n = U == null ? void 0 : U.t("openModal", "Open details")) == null ? "Open details" : n;
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
function Ee(e) {
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
function De(e) {
	var t, r, i;
	let a = n("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = X(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: Y(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let o = X(e, "[data-modal-image]"), s = Y(o);
	return s ? [{
		src: s,
		alt: (t = o == null ? void 0 : o.alt) == null ? "" : t,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function Oe(e) {
	var t, n, r, i, a, s, c, l;
	let u = o(e, "data-modal-content");
	if (!u) return null;
	let d = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", f = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, p = De(e), m = p[0], h = e.querySelector("[data-modal-body]");
	return {
		id: u,
		address: d,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: f,
		image: (a = m == null ? void 0 : m.src) == null ? "" : a,
		imageAlt: (s = m == null ? void 0 : m.alt) == null ? "" : s,
		caption: (c = m == null ? void 0 : m.caption) == null ? "" : c,
		html: (l = h == null ? void 0 : h.innerHTML) == null ? "" : l,
		work: Ee(e),
		gallery: p
	};
}
function ke(e) {
	var t, n, r, i, a, s, c, l;
	let u = o(e, "data-modal");
	if (!u) return null;
	let d = e.querySelector(".fwm-modal__image"), f = Y(d), p = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return {
		id: u,
		address: (r = (i = e.querySelector(".fwm-modal__address")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r,
		layout: "default",
		headline: "",
		image: f,
		imageAlt: (a = d == null ? void 0 : d.alt) == null ? "" : a,
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
function Ae() {
	n(R).forEach((e) => {
		let t = Oe(e);
		t && J.set(t.id, t);
	}), n(he).forEach((e) => {
		let t = ke(e);
		t && J.set(t.id, t), e.remove();
	});
}
function je(e) {
	var t;
	let r = e.trim();
	if (!r) return null;
	let i = n(R).find((e) => o(e, "data-modal-content") === r), a = i ? Oe(i) : null;
	return a && J.set(r, a), (t = a == null ? J.get(r) : a) == null ? null : t;
}
function Me(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = xe, r.append(i, o), t.append(r), t;
}
function Ne(e, t, n) {
	let r = document.createElement("a"), i = document.createElement("img"), a = document.createElement("span"), o = document.createElement("span");
	return r.className = "fwm-modal__image-link", r.href = e.src, r.setAttribute("data-lightbox-src", e.src), r.setAttribute("data-lightbox-caption", e.caption), r.setAttribute("data-lightbox-alt", e.alt), r.setAttribute("data-lightbox-group", `modal-${t}`), i.className = "fwm-modal__image", i.src = e.src, i.alt = e.alt, i.loading = n === 0 ? "eager" : "lazy", i.decoding = "async", a.className = "fwm-modal__lightbox-icon", a.setAttribute("aria-hidden", "true"), a.innerHTML = B, o.className = "fwm-modal__caption", o.textContent = e.caption, o.hidden = e.caption.length === 0, r.append(i, a, o), r;
}
function Pe(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function Fe(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, Pe(e);
}
function Ie(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(Me(t.work)), i.forEach((n, r) => {
		e.gallery.append(Ne(n, t.id, r));
	});
}
function Le(e) {
	let t = we();
	return e.layout === "context" ? Ie(t, e) : Fe(t, e), t;
}
function Re(e) {
	let t = l(e.panel)[0];
	u(t == null ? e.panel : t);
}
function ze(e) {
	q !== null && (window.clearTimeout(q), q = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function Be(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), q = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), q = null;
	}, ye), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function Z(e, t) {
	var n, r, i, a, o, s, c, l, u, f, p;
	let m = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (r = e.layout) == null ? "default" : r,
		headline: (i = e.headline) == null ? "" : i,
		image: (a = e.image) == null ? "" : a,
		imageAlt: (o = e.imageAlt) == null ? "" : o,
		caption: (s = e.caption) == null ? "" : s,
		html: (c = e.html) == null ? "" : c,
		work: (l = e.work) == null ? null : l,
		gallery: (u = e.gallery) != null && u.length ? e.gallery : e.image ? [{
			src: e.image,
			alt: (f = e.imageAlt) == null ? "" : f,
			caption: (p = e.caption) == null ? "" : p
		}] : []
	};
	if (!m.id) return;
	G && $(), J.set(m.id, m), K = t == null ? d() : t, G = m.id;
	let g = Le(m);
	ze(g), h(), Re(g), y(g.root, "site:modal-open", {
		id: G,
		modal: g.root,
		content: m,
		trigger: t == null ? null : t
	});
}
function Q(e, t) {
	let n = je(e);
	n && Z(n, t);
}
function $() {
	if (!G || !W) return;
	let e = G, t = K;
	Be(W), g(), G = "", K = null, y(W.root, "site:modal-close", {
		id: e,
		modal: W.root
	}), f(t);
}
function Ve(e) {
	if (!(!G || !W) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), $();
			return;
		}
		p(W.panel, e);
	}
}
function He(e) {
	if (!H || !G || !W) return;
	let t = e.target;
	!i(t) || t !== W.root || $();
}
function Ue(e) {
	var t;
	return H = (t = e.closeOnBackdrop) == null || t, U = e.i18n, Ae(), we(), V || (_(document, "click", ge, (e, t) => {
		e.preventDefault(), Q(s(t, "data-modal-open"), t);
	}), _(document, "click", _e, (e, t) => {
		e.preventDefault(), Q(Se(t), t);
	}), _(document, "click", z, (e, t) => {
		W != null && W.root.contains(t) && (e.preventDefault(), $());
	}), document.addEventListener("click", He), document.addEventListener("keydown", Ve), V = !0), {
		openModal: Q,
		openContentModal: Z,
		closeModal: $
	};
}
//#endregion
//#region src/main.ts
var We = !1;
function Ge() {
	if (We) return;
	We = !0;
	let e = te();
	Ue({ i18n: e }), me({ i18n: e }), v(), window.SiteInteractions = {
		openModal: Q,
		openContentModal: Z,
		closeModal: $,
		openLightbox: I,
		closeLightbox: L
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ge, { once: !0 }) : Ge();
//#endregion

//# sourceMappingURL=site-interactions.js.map