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
function p(e) {
	!e || !document.contains(e) || d(e);
}
function m(e, t) {
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
var h = {
	count: 0,
	scrollY: 0,
	bodyOverflow: "",
	bodyPosition: "",
	bodyTop: "",
	bodyWidth: "",
	bodyPaddingRight: ""
};
function ee() {
	if (h.count += 1, h.count > 1) return;
	let { body: e, documentElement: t } = document, n = window.innerWidth - t.clientWidth;
	h.scrollY = window.scrollY || t.scrollTop || 0, h.bodyOverflow = e.style.overflow, h.bodyPosition = e.style.position, h.bodyTop = e.style.top, h.bodyWidth = e.style.width, h.bodyPaddingRight = e.style.paddingRight, e.style.overflow = "hidden", e.style.position = "fixed", e.style.top = `-${h.scrollY}px`, e.style.width = "100%", n > 0 && (e.style.paddingRight = `${n}px`);
}
function g() {
	if (h.count === 0 || (--h.count, h.count > 0)) return;
	let { body: e } = document, t = h.scrollY;
	e.style.overflow = h.bodyOverflow, e.style.position = h.bodyPosition, e.style.top = h.bodyTop, e.style.width = h.bodyWidth, e.style.paddingRight = h.bodyPaddingRight, window.scrollTo(0, t);
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
function v(e, t, n) {
	e.dispatchEvent(new CustomEvent(t, {
		bubbles: !0,
		detail: n
	}));
}
//#endregion
//#region src/modules/i18n.ts
var y = {};
function te(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function ne(e = document) {
	var n, i;
	y = {};
	let a = t("[data-site-i18n]", e), o = (n = a == null || (i = a.textContent) == null ? void 0 : i.trim()) == null ? "" : n;
	return o && (y = te(r(o))), {
		get values() {
			return { ...y };
		},
		t: re
	};
}
function re(e, t) {
	let n = e.trim(), r = y[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/lightbox.ts
var b = "[data-lightbox-src]", ie = "[data-site-lightbox]", x = "[data-lightbox-close]", S = "[data-lightbox-prev]", C = "[data-lightbox-next]", w = !1, T = null, E = null, D = [], O = 0, k = !1, A = null;
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
function j(e) {
	let t = ae(e).trim();
	return t ? {
		src: t,
		caption: o(e, "data-lightbox-caption"),
		alt: oe(e),
		group: o(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function se(e) {
	let t = j(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let r = n(b).filter((e) => o(e, "data-lightbox-group") === t.group).map(j).filter((e) => !!e), i = Math.max(0, r.findIndex((t) => t.trigger === e));
	return {
		items: r.length > 0 ? r : [t],
		index: i
	};
}
function M(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function N() {
	var e, n, r, i, a, o;
	if (E) return P(E), E;
	let s = t(ie), c = s == null ? document.createElement("div") : s;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = T == null ? void 0 : T.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !s) {
		var l, u, d;
		c.innerHTML = "";
		let e = M((l = T == null ? void 0 : T.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "×", "site-lightbox__close"), t = M((u = T == null ? void 0 : T.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = M((d = T == null ? void 0 : T.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (i = t(x, c)) == null ? document.createElement("button") : i,
		previousButton: (a = t(S, c)) == null ? document.createElement("button") : a,
		nextButton: (o = t(C, c)) == null ? document.createElement("button") : o
	};
	return E = f, P(f), !s && !document.body.contains(c) && document.body.append(c), f;
}
function P(e) {
	var t, n, r, i;
	let a = (t = T == null ? void 0 : T.t("close", "Close")) == null ? "Close" : t, o = (n = T == null ? void 0 : T.t("previous", "Previous")) == null ? "Previous" : n, s = (r = T == null ? void 0 : T.t("next", "Next")) == null ? "Next" : r, c = (i = T == null ? void 0 : T.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function F() {
	let e = N(), t = D[O];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = D.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(O), e.root.dataset.lightboxCount = String(D.length);
}
function I(e) {
	let t = N();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function L(e) {
	D.length < 2 || (O = (e + D.length) % D.length, F());
}
function R() {
	L(O + 1);
}
function z() {
	L(O - 1);
}
function B(e) {
	var t;
	let n = se(e);
	if (!n) return;
	let r = k;
	D = n.items, O = n.index, A = e, k = !0, F(), I(!0), r || ee();
	let i = N();
	d(i.closeButton || i.root);
	let a = D[O];
	v(i.root, "site:lightbox-open", {
		item: a,
		index: O,
		count: D.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function V() {
	var e;
	if (!k || !E) return;
	let t = E, n = A, r = (e = D[O]) == null ? null : e;
	I(!1), g(), k = !1, D = [], O = 0, A = null, t.image.removeAttribute("src"), t.caption.textContent = "", v(t.root, "site:lightbox-close", { item: r }), p(n);
}
function ce(e) {
	if (!(!k || !E)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), V();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), R();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), z();
			return;
		}
		m(E.root, e);
	}
}
function le(e) {
	!k || !E || e.target === E.root && V();
}
function ue(e) {
	return T = e.i18n, w || (_(document, "click", b, (e, t) => {
		e.preventDefault(), B(t);
	}), _(document, "click", x, (e) => {
		e.preventDefault(), V();
	}), _(document, "click", S, (e) => {
		e.preventDefault(), z();
	}), _(document, "click", C, (e) => {
		e.preventDefault(), R();
	}), document.addEventListener("click", le), document.addEventListener("keydown", ce, !0), w = !0), {
		openLightbox: B,
		closeLightbox: V
	};
}
//#endregion
//#region src/modules/modal.ts
var H = "[data-modal]", de = "[data-modal-panel]", fe = "[data-modal-open]", pe = "[data-modal-close]", me = "a[href^=\"#modal:\"]", he = "#modal:", U = !1, W = !0, G = null, K = null, q = "", J = null;
function ge(e) {
	return c(H, "data-modal", e);
}
function Y(e) {
	var t;
	return (t = e.querySelector(de)) == null ? e : t;
}
function _e(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(he) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function ve(e) {
	let t = Y(e);
	e.hidden = !0, e.setAttribute("aria-hidden", "true"), t.setAttribute("role", "dialog"), t.setAttribute("aria-modal", "true");
}
function ye(e) {
	var t;
	let n = Y(e), r = (t = u(n)[0]) == null ? u(e)[0] : t;
	if (r) {
		d(r);
		return;
	}
	n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), d(n);
}
function X(e, t) {
	e.hidden = !t, e.setAttribute("aria-hidden", String(!t)), e.classList.toggle("is-active", t), e.classList.toggle("is-visible", t), document.documentElement.classList.toggle("is-modal-open", t), document.body.classList.toggle("is-modal-open", t);
}
function Z(e, t) {
	let n = e.trim();
	if (!n) return;
	let r = ge(n);
	r && (G && G !== r && Q(), G !== r && (J = t == null ? f() : t, G = r, K = Y(r), q = n, X(r, !0), ee(), ye(r), v(r, "site:modal-open", {
		id: q,
		modal: r,
		trigger: t == null ? null : t
	})));
}
function Q() {
	if (!G) return;
	let e = G, t = q, n = J;
	X(e, !1), g(), G = null, K = null, q = "", J = null, v(e, "site:modal-close", {
		id: t,
		modal: e
	}), p(n);
}
function be(e) {
	if (!(!G || !K) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), Q();
			return;
		}
		m(K, e);
	}
}
function xe(e) {
	if (!W || !G) return;
	let t = e.target;
	!i(t) || !G.contains(t) || Y(G).contains(t) || Q();
}
function Se(e) {
	var t;
	return W = (t = e.closeOnBackdrop) == null || t, n(H).forEach(ve), U || (_(document, "click", fe, (e, t) => {
		e.preventDefault(), Z(s(t, "data-modal-open"), t);
	}), _(document, "click", me, (e, t) => {
		e.preventDefault(), Z(_e(t), t);
	}), _(document, "click", pe, (e, t) => {
		!G || !G.contains(t) || (e.preventDefault(), Q());
	}), document.addEventListener("click", xe), document.addEventListener("keydown", be), U = !0), {
		openModal: Z,
		closeModal: Q
	};
}
//#endregion
//#region src/main.ts
var Ce = !1;
function $() {
	if (Ce) return;
	Ce = !0;
	let e = ne();
	Se({ i18n: e }), ue({ i18n: e }), window.SiteInteractions = {
		openModal: Z,
		closeModal: Q,
		openLightbox: B,
		closeLightbox: V
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", $, { once: !0 }) : $();
//#endregion

//# sourceMappingURL=site-interactions.js.map