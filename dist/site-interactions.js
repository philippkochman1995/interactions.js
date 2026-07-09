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
function ee() {
	if (m.count === 0 || (--m.count, m.count > 0)) return;
	let { body: e } = document, t = m.scrollY;
	e.style.overflow = m.bodyOverflow, e.style.position = m.bodyPosition, e.style.top = m.bodyTop, e.style.width = m.bodyWidth, e.style.paddingRight = m.bodyPaddingRight, window.scrollTo(0, t);
}
function g(e, t, n, r, i) {
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
function _(e, t, n) {
	e.dispatchEvent(new CustomEvent(t, {
		bubbles: !0,
		detail: n
	}));
}
//#endregion
//#region src/modules/i18n.ts
var v = {};
function te(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function ne(e = document) {
	var n, i;
	v = {};
	let a = t("[data-site-i18n]", e), o = (n = a == null || (i = a.textContent) == null ? void 0 : i.trim()) == null ? "" : n;
	return o && (v = te(r(o))), {
		get values() {
			return { ...v };
		},
		t: re
	};
}
function re(e, t) {
	let n = e.trim(), r = v[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var y = "[data-lightbox-src]", ie = "[data-site-lightbox]", b = "[data-lightbox-close]", x = "[data-lightbox-prev]", S = "[data-lightbox-next]", C = !1, w = null, T = null, E = [], D = 0, O = !1, k = null;
function ae(e) {
	return o(e, "data-lightbox-src") || (e instanceof HTMLAnchorElement ? e.href : "");
}
function oe(e) {
	var n, r;
	let i = o(e, "data-lightbox-alt");
	if (i) return i;
	let a = t("img", e);
	return (n = a == null || (r = a.alt) == null ? void 0 : r.trim()) == null ? "" : n;
}
function se(e) {
	let t = ae(e).trim();
	return t ? {
		src: t,
		caption: o(e, "data-lightbox-caption"),
		alt: oe(e),
		group: o(e, "data-lightbox-group"),
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
	let r = n(y).filter((e) => o(e, "data-lightbox-group") === t.group).map(se).filter((e) => !!e), i = Math.max(0, r.findIndex((t) => t.trigger === e));
	return {
		items: r.length > 0 ? r : [t],
		index: i
	};
}
function A(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function j() {
	var e, n, r, i, a, o;
	if (T) return M(T), T;
	let s = t(ie), c = s == null ? document.createElement("div") : s;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = w == null ? void 0 : w.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !s) {
		var l, u, d;
		c.innerHTML = "";
		let e = A((l = w == null ? void 0 : w.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = A((u = w == null ? void 0 : w.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = A((d = w == null ? void 0 : w.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (i = t(b, c)) == null ? document.createElement("button") : i,
		previousButton: (a = t(x, c)) == null ? document.createElement("button") : a,
		nextButton: (o = t(S, c)) == null ? document.createElement("button") : o
	};
	return T = f, M(f), !s && !document.body.contains(c) && document.body.append(c), f;
}
function M(e) {
	var t, n, r, i;
	let a = (t = w == null ? void 0 : w.t("close", "Close")) == null ? "Close" : t, o = (n = w == null ? void 0 : w.t("previous", "Previous")) == null ? "Previous" : n, s = (r = w == null ? void 0 : w.t("next", "Next")) == null ? "Next" : r, c = (i = w == null ? void 0 : w.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function N() {
	let e = j(), t = E[D];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = E.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(D), e.root.dataset.lightboxCount = String(E.length);
}
function P(e) {
	let t = j();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function F(e) {
	E.length < 2 || (D = (e + E.length) % E.length, N());
}
function I() {
	F(D + 1);
}
function L() {
	F(D - 1);
}
function R(e) {
	var t;
	let n = ce(e);
	if (!n) return;
	let r = O;
	E = n.items, D = n.index, k = e, O = !0, N(), P(!0), r || h();
	let i = j();
	u(i.closeButton || i.root);
	let a = E[D];
	_(i.root, "site:lightbox-open", {
		item: a,
		index: D,
		count: E.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function z() {
	var e;
	if (!O || !T) return;
	let t = T, n = k, r = (e = E[D]) == null ? null : e;
	P(!1), ee(), O = !1, E = [], D = 0, k = null, t.image.removeAttribute("src"), t.caption.textContent = "", _(t.root, "site:lightbox-close", { item: r }), f(n);
}
function le(e) {
	if (!(!O || !T)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), z();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), I();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), L();
			return;
		}
		p(T.root, e);
	}
}
function ue(e) {
	!O || !T || e.target === T.root && z();
}
function de(e) {
	return w = e.i18n, C || (g(document, "click", y, (e, t) => {
		e.preventDefault(), R(t);
	}), g(document, "click", b, (e) => {
		e.preventDefault(), z();
	}), g(document, "click", x, (e) => {
		e.preventDefault(), L();
	}), g(document, "click", S, (e) => {
		e.preventDefault(), I();
	}), document.addEventListener("click", ue), document.addEventListener("keydown", le, !0), C = !0), {
		openLightbox: R,
		closeLightbox: z
	};
}
//#endregion
//#region src/modules/modal.ts
var fe = "[data-modal]", B = "[data-modal-content]", pe = "[data-modal-open]", V = "[data-modal-close]", me = "a[href^=\"#modal:\"]", he = "#modal:", ge = 220, _e = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", ve = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", H = !1, U = !0, W = null, G = null, K = "", q = null, J = null, Y = /* @__PURE__ */ new Map();
function ye(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(he) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function be() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(V),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		text: e.querySelector("[data-site-modal-text]")
	};
	return t.closeButton.innerHTML = _e, t.lightboxIcon.innerHTML = ve, Se(t), t;
}
function xe() {
	return (!G || !document.body.contains(G.root)) && (G = be()), Se(G), G;
}
function Se(e) {
	var t, n;
	let r = (t = W == null ? void 0 : W.t("close", "Close")) == null ? "Close" : t, i = (n = W == null ? void 0 : W.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Ce(e) {
	var t, n, r, i, a, s;
	let c = o(e, "data-modal-content");
	if (!c) return null;
	let l = (t = (n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, u = e.querySelector("[data-modal-image]"), d = e.querySelector("[data-modal-caption]"), f = e.querySelector("[data-modal-body]");
	return {
		id: c,
		address: l,
		image: (u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "",
		imageAlt: (r = u == null ? void 0 : u.alt) == null ? "" : r,
		caption: (i = d == null || (a = d.textContent) == null ? void 0 : a.trim()) == null ? "" : i,
		html: (s = f == null ? void 0 : f.innerHTML) == null ? "" : s
	};
}
function we(e) {
	var t, n, r, i, a, s, c;
	let l = o(e, "data-modal");
	if (!l) return null;
	let u = e.querySelector(".fwm-modal__image");
	return {
		id: l,
		address: (t = (n = e.querySelector(".fwm-modal__address")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t,
		image: (u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "",
		imageAlt: (r = u == null ? void 0 : u.alt) == null ? "" : r,
		caption: (i = (a = e.querySelector(".fwm-modal__caption")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i,
		html: (s = (c = e.querySelector(".fwm-modal__text")) == null ? void 0 : c.innerHTML) == null ? "" : s
	};
}
function Te() {
	n(B).forEach((e) => {
		let t = Ce(e);
		t && Y.set(t.id, t);
	}), n(fe).forEach((e) => {
		let t = we(e);
		t && Y.set(t.id, t), e.remove();
	});
}
function Ee(e) {
	var t;
	let r = e.trim();
	if (!r) return null;
	let i = n(B).find((e) => o(e, "data-modal-content") === r), a = i ? Ce(i) : null;
	return a && Y.set(r, a), (t = a == null ? Y.get(r) : a) == null ? null : t;
}
function De(e) {
	let t = xe(), n = e.image.trim().length > 0;
	return t.root.dataset.modalId = e.id, t.address.textContent = e.address, t.imageLink.hidden = !n, t.imageLink.href = n ? e.image : "#", t.imageLink.setAttribute("data-lightbox-src", n ? e.image : ""), t.imageLink.setAttribute("data-lightbox-caption", e.caption), t.imageLink.setAttribute("data-lightbox-group", `modal-${e.id}`), t.image.src = n ? e.image : "", t.image.alt = e.imageAlt, t.caption.textContent = e.caption, t.text.innerHTML = e.html, t;
}
function Oe(e) {
	let t = l(e.panel)[0];
	u(t == null ? e.panel : t);
}
function ke(e) {
	J !== null && (window.clearTimeout(J), J = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function Ae(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), J = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), J = null;
	}, ge), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function X(e, t) {
	var n, r, i, a, o;
	let s = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		image: (r = e.image) == null ? "" : r,
		imageAlt: (i = e.imageAlt) == null ? "" : i,
		caption: (a = e.caption) == null ? "" : a,
		html: (o = e.html) == null ? "" : o
	};
	if (!s.id) return;
	K && Q(), Y.set(s.id, s), q = t == null ? d() : t, K = s.id;
	let c = De(s);
	ke(c), h(), Oe(c), _(c.root, "site:modal-open", {
		id: K,
		modal: c.root,
		content: s,
		trigger: t == null ? null : t
	});
}
function Z(e, t) {
	let n = Ee(e);
	n && X(n, t);
}
function Q() {
	if (!K || !G) return;
	let e = K, t = q;
	Ae(G), ee(), K = "", q = null, _(G.root, "site:modal-close", {
		id: e,
		modal: G.root
	}), f(t);
}
function je(e) {
	if (!(!K || !G) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), Q();
			return;
		}
		p(G.panel, e);
	}
}
function Me(e) {
	if (!U || !K || !G) return;
	let t = e.target;
	!i(t) || t !== G.root || Q();
}
function Ne(e) {
	var t;
	return U = (t = e.closeOnBackdrop) == null || t, W = e.i18n, Te(), xe(), H || (g(document, "click", pe, (e, t) => {
		e.preventDefault(), Z(s(t, "data-modal-open"), t);
	}), g(document, "click", me, (e, t) => {
		e.preventDefault(), Z(ye(t), t);
	}), g(document, "click", V, (e, t) => {
		G != null && G.root.contains(t) && (e.preventDefault(), Q());
	}), document.addEventListener("click", Me), document.addEventListener("keydown", je), H = !0), {
		openModal: Z,
		openContentModal: X,
		closeModal: Q
	};
}
//#endregion
//#region src/main.ts
var Pe = !1;
function $() {
	if (Pe) return;
	Pe = !0;
	let e = ne();
	Ne({ i18n: e }), de({ i18n: e }), window.SiteInteractions = {
		openModal: Z,
		openContentModal: X,
		closeModal: Q,
		openLightbox: R,
		closeLightbox: z
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", $, { once: !0 }) : $();
//#endregion

//# sourceMappingURL=site-interactions.js.map