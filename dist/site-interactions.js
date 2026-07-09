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
function c(e, t, r, i = document) {
	var a;
	let s = r.trim();
	return s ? (a = n(e, i).find((e) => o(e, t) === s)) == null ? null : a : null;
}
function l(e) {
	if (e.hidden || e.closest("[hidden], [aria-hidden=\"true\"]") || e.inert) return !0;
	let t = window.getComputedStyle(e);
	return t.display === "none" || t.visibility === "hidden";
}
function u(t) {
	return n(e, t).filter((e) => !l(e) && e.tabIndex !== -1);
}
function d(e) {
	if (e) try {
		e.focus({ preventScroll: !0 });
	} catch (t) {
		e.focus();
	}
}
function f() {
	return i(document.activeElement) ? document.activeElement : null;
}
function ee(e) {
	!e || !document.contains(e) || d(e);
}
function p(e, t) {
	if (t.key !== "Tab") return;
	let n = u(e);
	if (n.length === 0) {
		t.preventDefault(), d(e);
		return;
	}
	let r = n[0], i = n[n.length - 1], a = f();
	if (!a || !e.contains(a)) {
		t.preventDefault(), d(r);
		return;
	}
	if (t.shiftKey && a === r) {
		t.preventDefault(), d(i);
		return;
	}
	!t.shiftKey && a === i && (t.preventDefault(), d(r));
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
function te() {
	if (m.count += 1, m.count > 1) return;
	let { body: e, documentElement: t } = document, n = window.innerWidth - t.clientWidth;
	m.scrollY = window.scrollY || t.scrollTop || 0, m.bodyOverflow = e.style.overflow, m.bodyPosition = e.style.position, m.bodyTop = e.style.top, m.bodyWidth = e.style.width, m.bodyPaddingRight = e.style.paddingRight, e.style.overflow = "hidden", e.style.position = "fixed", e.style.top = `-${m.scrollY}px`, e.style.width = "100%", n > 0 && (e.style.paddingRight = `${n}px`);
}
function h() {
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
function ne(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function re(e = document) {
	var n, i;
	v = {};
	let a = t("[data-site-i18n]", e), o = (n = a == null || (i = a.textContent) == null ? void 0 : i.trim()) == null ? "" : n;
	return o && (v = ne(r(o))), {
		get values() {
			return { ...v };
		},
		t: ie
	};
}
function ie(e, t) {
	let n = e.trim(), r = v[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var y = "[data-lightbox-src]", ae = "[data-site-lightbox]", b = "[data-lightbox-close]", x = "[data-lightbox-prev]", S = "[data-lightbox-next]", C = !1, w = null, T = null, E = [], D = 0, O = !1, k = null;
function oe(e) {
	return o(e, "data-lightbox-src") || (e instanceof HTMLAnchorElement ? e.href : "");
}
function se(e) {
	var n, r;
	let i = o(e, "data-lightbox-alt");
	if (i) return i;
	let a = t("img", e);
	return (n = a == null || (r = a.alt) == null ? void 0 : r.trim()) == null ? "" : n;
}
function A(e) {
	let t = oe(e).trim();
	return t ? {
		src: t,
		caption: o(e, "data-lightbox-caption"),
		alt: se(e),
		group: o(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ce(e) {
	let t = A(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let r = n(y).filter((e) => o(e, "data-lightbox-group") === t.group).map(A).filter((e) => !!e), i = Math.max(0, r.findIndex((t) => t.trigger === e));
	return {
		items: r.length > 0 ? r : [t],
		index: i
	};
}
function j(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function M() {
	var e, n, r, i, a, o;
	if (T) return N(T), T;
	let s = t(ae), c = s == null ? document.createElement("div") : s;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = w == null ? void 0 : w.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !s) {
		var l, u, d;
		c.innerHTML = "";
		let e = j((l = w == null ? void 0 : w.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = j((u = w == null ? void 0 : w.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = j((d = w == null ? void 0 : w.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
	return T = f, N(f), !s && !document.body.contains(c) && document.body.append(c), f;
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
function F(e) {
	let t = M();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function I(e) {
	E.length < 2 || (D = (e + E.length) % E.length, P());
}
function L() {
	I(D + 1);
}
function R() {
	I(D - 1);
}
function z(e) {
	var t;
	let n = ce(e);
	if (!n) return;
	let r = O;
	E = n.items, D = n.index, k = e, O = !0, P(), F(!0), r || te();
	let i = M();
	d(i.closeButton || i.root);
	let a = E[D];
	_(i.root, "site:lightbox-open", {
		item: a,
		index: D,
		count: E.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function B() {
	var e;
	if (!O || !T) return;
	let t = T, n = k, r = (e = E[D]) == null ? null : e;
	F(!1), h(), O = !1, E = [], D = 0, k = null, t.image.removeAttribute("src"), t.caption.textContent = "", _(t.root, "site:lightbox-close", { item: r }), ee(n);
}
function le(e) {
	if (!(!O || !T)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), B();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), L();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), R();
			return;
		}
		p(T.root, e);
	}
}
function ue(e) {
	!O || !T || e.target === T.root && B();
}
function de(e) {
	return w = e.i18n, C || (g(document, "click", y, (e, t) => {
		e.preventDefault(), z(t);
	}), g(document, "click", b, (e) => {
		e.preventDefault(), B();
	}), g(document, "click", x, (e) => {
		e.preventDefault(), R();
	}), g(document, "click", S, (e) => {
		e.preventDefault(), L();
	}), document.addEventListener("click", ue), document.addEventListener("keydown", le, !0), C = !0), {
		openLightbox: z,
		closeLightbox: B
	};
}
//#endregion
//#region src/modules/modal.ts
var V = "[data-modal]", fe = "[data-modal-panel]", pe = "[data-modal-open]", me = "[data-modal-close]", he = "a[href^=\"#modal:\"]", ge = "#modal:", _e = 220, ve = ".fwm-modal__close", ye = ".fwm-modal__lightbox-icon", be = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", xe = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", H = !1, U = !0, W = null, G = null, K = "", q = null, J = /* @__PURE__ */ new WeakMap();
function Se(e) {
	return c(V, "data-modal", e);
}
function Y(e) {
	var t;
	return (t = e.querySelector(fe)) == null ? e : t;
}
function Ce(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(ge) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function X(e) {
	n(ve, e).forEach((e) => {
		e.innerHTML = be;
	}), n(ye, e).forEach((e) => {
		e.innerHTML = xe;
	});
}
function we(e) {
	let t = Y(e);
	X(e), e.hidden = !0, e.setAttribute("aria-hidden", "true"), t.setAttribute("role", "dialog"), t.setAttribute("aria-modal", "true");
}
function Te(e) {
	var t;
	let n = Y(e), r = (t = u(n)[0]) == null ? u(e)[0] : t;
	if (r) {
		d(r);
		return;
	}
	n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), d(n);
}
function Ee(e) {
	let t = J.get(e);
	t !== void 0 && (window.clearTimeout(t), J.delete(e)), e.hidden = !1, e.setAttribute("aria-hidden", "false"), e.classList.add("is-active"), e.offsetWidth, e.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function De(e) {
	e.setAttribute("aria-hidden", "true"), e.classList.remove("is-visible");
	let t = window.setTimeout(() => {
		e.hidden = !0, e.classList.remove("is-active"), J.delete(e);
	}, _e);
	J.set(e, t), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function Z(e, t) {
	let n = e.trim();
	if (!n) return;
	let r = Se(n);
	r && (W && W !== r && Q(), W !== r && (q = t == null ? f() : t, W = r, G = Y(r), K = n, X(r), Ee(r), te(), Te(r), _(r, "site:modal-open", {
		id: K,
		modal: r,
		trigger: t == null ? null : t
	})));
}
function Q() {
	if (!W) return;
	let e = W, t = K, n = q;
	De(e), h(), W = null, G = null, K = "", q = null, _(e, "site:modal-close", {
		id: t,
		modal: e
	}), ee(n);
}
function Oe(e) {
	if (!(!W || !G) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), Q();
			return;
		}
		p(G, e);
	}
}
function ke(e) {
	if (!U || !W) return;
	let t = e.target;
	!i(t) || !W.contains(t) || Y(W).contains(t) || Q();
}
function Ae(e) {
	var t;
	return U = (t = e.closeOnBackdrop) == null || t, n(V).forEach(we), H || (g(document, "click", pe, (e, t) => {
		e.preventDefault(), Z(s(t, "data-modal-open"), t);
	}), g(document, "click", he, (e, t) => {
		e.preventDefault(), Z(Ce(t), t);
	}), g(document, "click", me, (e, t) => {
		!W || !W.contains(t) || (e.preventDefault(), Q());
	}), document.addEventListener("click", ke), document.addEventListener("keydown", Oe), H = !0), {
		openModal: Z,
		closeModal: Q
	};
}
//#endregion
//#region src/main.ts
var je = !1;
function $() {
	if (je) return;
	je = !0;
	let e = re();
	Ae({ i18n: e }), de({ i18n: e }), window.SiteInteractions = {
		openModal: Z,
		closeModal: Q,
		openLightbox: z,
		closeLightbox: B
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", $, { once: !0 }) : $();
//#endregion

//# sourceMappingURL=site-interactions.js.map