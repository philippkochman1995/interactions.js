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
var re = "[data-lightbox-src]", ie = "js-lightbox", b = `.${ie}`, ae = `${re}, ${b}`, oe = "[data-site-lightbox]", se = "[data-lightbox-close]", ce = "[data-lightbox-prev]", le = "[data-lightbox-next]", ue = "[data-lightbox-auto-icon]", x = "site-lightbox-trigger", de = "site-lightbox-trigger__image", fe = "site-lightbox-trigger__icon", pe = "w-dyn-bind-empty", me = "/plugins/Basic/assets/placeholder.", he = .48, ge = .34, _e = ".site-lightbox__close, .site-lightbox__previous, .site-lightbox__next, .site-lightbox__caption", ve = "site-lightbox__transition-clone", ye = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", be = !1, S = null, C = null, w = [], T = 0, E = !1, D = !1, O = null, k = null, A = null, j = null, M = null;
function N(e) {
	let t = m(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = m(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return xe(e);
	let n = f("img", e);
	return n ? xe(n) : "";
}
function xe(e) {
	let t = m(e, "src"), n = m(e, "srcset");
	return e.classList.contains(pe) || t.includes(me) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function Se(e) {
	var t, n;
	let r = m(e, "data-lightbox-alt");
	if (r) return r;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let i = f("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Ce(e) {
	return e instanceof HTMLImageElement ? e : f("img", e);
}
function we(e) {
	let t = Ce(e);
	return Te(t) ? t : null;
}
function Te(e) {
	if (!e || !document.documentElement.contains(e)) return !1;
	let t = e.getBoundingClientRect(), n = window.getComputedStyle(e);
	return t.width > 0 && t.height > 0 && n.display !== "none" && n.visibility !== "hidden";
}
function Ee(e) {
	return { visibility: e.style.visibility };
}
function De(e, t) {
	!e || !t || (e.style.visibility = t.visibility);
}
function P(e) {
	return l(_e, e.root).filter((e) => !e.hidden);
}
function F(e) {
	return e.getBoundingClientRect();
}
function Oe(e, t) {
	let n = e.cloneNode(!1);
	return n.className = ve, n.removeAttribute("id"), n.setAttribute("aria-hidden", "true"), n.decoding = "sync", v.set(n, {
		position: "fixed",
		left: t.left,
		top: t.top,
		width: t.width,
		height: t.height,
		margin: 0,
		objectFit: window.getComputedStyle(e).objectFit || "cover",
		pointerEvents: "none",
		zIndex: 1101
	}), document.body.append(n), n;
}
function ke(e) {
	e.remove();
}
function Ae(e, t, n, r) {
	return v.to(e, {
		left: t.left,
		top: t.top,
		width: t.width,
		height: t.height,
		duration: n,
		ease: "power3.inOut",
		onComplete: r
	});
}
function je() {
	k && (k.kill(), k = null, D = !1);
}
function Me(e, t) {
	A = t, j = t ? Ee(t) : null, M = t ? e : null;
}
function Ne() {
	A = null, j = null, M = null;
}
function Pe(e) {
	v.set([
		e.root,
		e.image,
		...P(e)
	], { clearProps: "opacity,transform,visibility" });
}
function Fe(e) {
	e.root.classList.remove("is-animating", "is-closing"), Pe(e), k = null, D = !1;
}
function Ie(e) {
	let t = N(e).trim();
	return t ? {
		src: t,
		caption: m(e, "data-lightbox-caption"),
		alt: Se(e),
		group: m(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function Le(e) {
	let t = Ie(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = l(ae).filter((e) => m(e, "data-lightbox-group") === t.group).map(Ie).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function Re() {
	let e = document.createElement("span");
	return e.className = fe, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = ye, e;
}
function ze(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function Be(e) {
	if (!ze(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = S == null ? void 0 : S.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Ve(e) {
	if (e.closest(`.${x}`) || !N(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${x} ${ie}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group"
	]) {
		let r = m(e, n);
		r && (t.setAttribute(n, r), e.removeAttribute(n));
	}
	e.classList.remove(ie), e.classList.add(de), e.before(t), t.append(e, Re()), Be(t);
}
function He(e) {
	if (e instanceof HTMLImageElement) {
		Ve(e);
		return;
	}
	N(e).trim() && (e.classList.add(x), Be(e), f(ue, e) || e.append(Re()));
}
function Ue() {
	l(b).forEach(He);
}
function I(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function L() {
	var e, t, n, r, i, a;
	if (C) return We(C), C;
	let o = f(oe), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = S == null ? void 0 : S.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, l, u;
		s.innerHTML = "";
		let e = I((c = S == null ? void 0 : S.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = I((l = S == null ? void 0 : S.t("previous", "Previous")) == null ? "Previous" : l, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = I((u = S == null ? void 0 : S.t("next", "Next")) == null ? "Next" : u, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = f(se, s)) == null ? document.createElement("button") : r,
		previousButton: (i = f(ce, s)) == null ? document.createElement("button") : i,
		nextButton: (a = f(le, s)) == null ? document.createElement("button") : a
	};
	return C = d, We(d), !o && !document.body.contains(s) && document.body.append(s), d;
}
function We(e) {
	var t, n, r, i;
	let a = (t = S == null ? void 0 : S.t("close", "Close")) == null ? "Close" : t, o = (n = S == null ? void 0 : S.t("previous", "Previous")) == null ? "Previous" : n, s = (r = S == null ? void 0 : S.t("next", "Next")) == null ? "Next" : r, c = (i = S == null ? void 0 : S.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function R() {
	let e = L(), t = w[T];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = w.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(T), e.root.dataset.lightboxCount = String(w.length);
}
function Ge() {
	if (i()) {
		R();
		return;
	}
	let e = L();
	v.killTweensOf(e.image), v.to(e.image, {
		opacity: 0,
		scale: .985,
		duration: .11,
		ease: "power1.out",
		onComplete: () => {
			R(), v.fromTo(e.image, {
				opacity: 0,
				scale: .985
			}, {
				opacity: 1,
				scale: 1,
				duration: .18,
				ease: "power2.out",
				clearProps: "opacity,scale"
			});
		}
	});
}
function Ke(e) {
	let t = L();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), t.root.classList.toggle("is-animating", !1), t.root.classList.toggle("is-closing", !1), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function qe(e, t, n) {
	Ke(!1), _(), E = !1, D = !1, w = [], T = 0, O = null, Ne(), k = null, e.image.removeAttribute("src"), e.caption.textContent = "", u(e.root, "site:lightbox-close", { item: n }), o(t);
}
function Je(e) {
	k = v.fromTo(e.root, { opacity: +!!i() }, {
		opacity: 1,
		duration: i() ? .01 : .18,
		ease: "power1.out",
		clearProps: "opacity",
		onComplete: () => {
			k = null;
		}
	});
}
function Ye(e) {
	let t = Oe(e, F(e));
	return e.style.visibility = "hidden", {
		triggerImage: e,
		clone: t
	};
}
function Xe(e, t) {
	D = !0, e.root.classList.add("is-animating"), v.set(e.root, { opacity: 0 }), v.set(P(e), {
		opacity: 0,
		y: 8
	}), v.set(e.image, {
		visibility: "hidden",
		opacity: 1
	}), k = v.timeline({
		defaults: { ease: "power2.out" },
		onComplete: () => {
			De(t.triggerImage, j), ke(t.clone), Fe(e);
		}
	}).to(e.root, {
		opacity: 1,
		duration: .2
	}, 0).add(Ae(t.clone, F(e.image), he, () => void 0), 0).to(P(e), {
		opacity: 1,
		y: 0,
		duration: .2,
		stagger: .025
	}, .18);
}
function Ze(e) {
	return (e == null ? void 0 : e.trigger) === M && Te(A) ? A : null;
}
function Qe(e, t, n) {
	k = v.to(e.root, {
		opacity: 0,
		duration: i() ? .01 : .16,
		ease: "power1.out",
		onComplete: () => {
			v.set(e.root, { clearProps: "opacity" }), qe(e, t, n);
		}
	});
}
function $e(e, t, n, r) {
	let i = Oe(e.image, F(e.image));
	e.image.style.visibility = "hidden", t.style.visibility = "hidden", e.root.classList.add("is-closing"), D = !0, k = v.timeline({
		defaults: { ease: "power2.out" },
		onComplete: () => {
			De(t, j), ke(i), Pe(e), qe(e, n, r);
		}
	}).to(e.root, {
		opacity: 0,
		duration: ge
	}, 0).to(P(e), {
		opacity: 0,
		y: 6,
		duration: .14
	}, 0).add(Ae(i, F(t), ge, () => void 0), 0);
}
function et(e) {
	w.length < 2 || D || (T = (e + w.length) % w.length, Ge());
}
function tt() {
	et(T + 1);
}
function nt() {
	et(T - 1);
}
function z(e) {
	var t;
	if (D) return;
	let n = Le(e);
	if (!n) return;
	let a = E, o = we(e);
	w = n.items, T = n.index, O = e, E = !0, Me(e, o), R();
	let s = L(), c = !a && o && !i() ? Ye(o) : null;
	Ke(!0), a || r(), c ? Xe(s, c) : Je(s), p(s.closeButton || s.root);
	let l = w[T];
	u(s.root, "site:lightbox-open", {
		item: l,
		index: T,
		count: w.length,
		group: (t = l == null ? void 0 : l.group) == null ? "" : t,
		trigger: e
	});
}
function B() {
	var e;
	if (!E || !C || D) return;
	let t = C, n = O, r = (e = w[T]) == null ? null : e, a = Ze(r), o = !!a && !i();
	if (je(), o && a) {
		$e(t, a, n, r);
		return;
	}
	Qe(t, n, r);
}
function rt(t) {
	if (!(!E || !C)) {
		if (t.key === "Escape") {
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), B();
			return;
		}
		if (t.key === "ArrowRight") {
			t.preventDefault(), tt();
			return;
		}
		if (t.key === "ArrowLeft") {
			t.preventDefault(), nt();
			return;
		}
		e(C.root, t);
	}
}
function it(e) {
	!E || !C || e.target === C.root && B();
}
function at(e) {
	return S = e.i18n, Ue(), be || (h(document, "click", ae, (e, t) => {
		e.preventDefault(), z(t);
	}), h(document, "keydown", b, (e, t) => {
		ze(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), z(t));
	}), h(document, "click", se, (e) => {
		e.preventDefault(), B();
	}), h(document, "click", ce, (e) => {
		e.preventDefault(), nt();
	}), h(document, "click", le, (e) => {
		e.preventDefault(), tt();
	}), document.addEventListener("click", it), document.addEventListener("keydown", rt, !0), be = !0), {
		openLightbox: z,
		closeLightbox: B
	};
}
//#endregion
//#region src/modules/modal.ts
var ot = "[data-modal]", st = "[data-modal-content]", ct = "[data-modal-open]", lt = "[data-modal-close]", ut = "a[href^=\"#modal:\"]", dt = "#modal:", ft = 220, pt = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", mt = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", ht = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", gt = !1, _t = !0, V = null, H = null, U = "", W = null, G = null, K = /* @__PURE__ */ new Map();
function vt(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(dt) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function yt() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(lt),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = pt, t.lightboxIcon.innerHTML = mt, xt(t), t;
}
function bt() {
	return (!H || !document.body.contains(H.root)) && (H = yt()), xt(H), H;
}
function xt(e) {
	var t, n;
	let r = (t = V == null ? void 0 : V.t("close", "Close")) == null ? "Close" : t, i = (n = V == null ? void 0 : V.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function q(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function J(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function St(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = J(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = q(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Ct(e) {
	var t, n, r;
	let i = l("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = J(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: q(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = J(e, "[data-modal-image]"), o = q(a);
	return o ? [{
		src: o,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function wt(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal-content");
	if (!l) return null;
	let u = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", d = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, f = Ct(e), p = f[0], h = e.querySelector("[data-modal-body]");
	return {
		id: l,
		address: u,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: d,
		image: (a = p == null ? void 0 : p.src) == null ? "" : a,
		imageAlt: (o = p == null ? void 0 : p.alt) == null ? "" : o,
		caption: (s = p == null ? void 0 : p.caption) == null ? "" : s,
		html: (c = h == null ? void 0 : h.innerHTML) == null ? "" : c,
		work: St(e),
		gallery: f
	};
}
function Tt(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal");
	if (!l) return null;
	let u = e.querySelector(".fwm-modal__image"), d = q(u), f = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
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
function Et() {
	l(st).forEach((e) => {
		let t = wt(e);
		t && K.set(t.id, t);
	}), l(ot).forEach((e) => {
		let t = Tt(e);
		t && K.set(t.id, t), e.remove();
	});
}
function Dt(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = l(st).find((e) => m(e, "data-modal-content") === n), i = r ? wt(r) : null;
	return i && K.set(n, i), (t = i == null ? K.get(n) : i) == null ? null : t;
}
function Ot(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = ht, r.append(i, o), t.append(r), t;
}
function kt(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = mt, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function At(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function jt(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, At(e);
}
function Mt(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(Ot(t.work)), i.forEach((t, n) => {
		e.gallery.append(kt(t, n));
	});
}
function Nt(e) {
	let t = bt();
	return e.layout === "context" ? Mt(t, e) : jt(t, e), t;
}
function Pt(e) {
	let t = d(e.panel)[0];
	p(t == null ? e.panel : t);
}
function Ft(e) {
	G !== null && (window.clearTimeout(G), G = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function It(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), G = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), G = null;
	}, ft), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function Y(e, t) {
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
	U && Z(), K.set(g.id, g), W = t == null ? s() : t, U = g.id;
	let _ = Nt(g);
	Ft(_), r(), Pt(_), u(_.root, "site:modal-open", {
		id: U,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function X(e, t) {
	let n = Dt(e);
	n && Y(n, t);
}
function Z() {
	if (!U || !H) return;
	let e = U, t = W;
	It(H), _(), U = "", W = null, u(H.root, "site:modal-close", {
		id: e,
		modal: H.root
	}), o(t);
}
function Lt(t) {
	if (!(!U || !H) && !document.body.classList.contains("is-lightbox-open")) {
		if (t.key === "Escape") {
			t.preventDefault(), Z();
			return;
		}
		e(H.panel, t);
	}
}
function Rt(e) {
	if (!_t || !U || !H) return;
	let t = e.target;
	!c(t) || t !== H.root || Z();
}
function zt(e) {
	var n;
	return _t = (n = e.closeOnBackdrop) == null || n, V = e.i18n, Et(), bt(), gt || (h(document, "click", ct, (e, n) => {
		e.preventDefault(), X(t(n, "data-modal-open"), n);
	}), h(document, "click", ut, (e, t) => {
		e.preventDefault(), X(vt(t), t);
	}), h(document, "click", lt, (e, t) => {
		H != null && H.root.contains(t) && (e.preventDefault(), Z());
	}), document.addEventListener("click", Rt), document.addEventListener("keydown", Lt), gt = !0), {
		openModal: X,
		openContentModal: Y,
		closeModal: Z
	};
}
//#endregion
//#region src/modules/site-menu.ts
var Bt = "[data-site-menu]", Vt = "[data-site-menu-panel]", Ht = "[data-site-menu-toggle]", Ut = "[data-site-menu-toggle-label]", Wt = "[data-site-menu-link]", Gt = "[data-site-menu-indicator]", Kt = "is-active", Q = "is-open", qt = "is-ready", Jt = "data-site-menu-open-label", Yt = "data-site-menu-closed-label", Xt = "data-site-menu-current-key", Zt = "data-site-menu-label", Qt = "data-site-menu-key", $t = "data-site-menu-original-tabindex", en = "CLOSE", tn = "MENU", nn = [], rn = !1;
function an(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function on(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = m(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return an(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function sn(e, t) {
	return t ? m(e, Qt) === t : !1;
}
function cn(e, t) {
	var n, r;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || sn(e, m(t, Xt) || ((n = document.documentElement.getAttribute(Xt)) == null ? void 0 : n.trim()) || ((r = document.body.getAttribute(Xt)) == null ? void 0 : r.trim()) || "")) return !0;
	let i = on(e);
	return i ? i === an(window.location.pathname) : !1;
}
function ln(e) {
	var t, n;
	return m(e, Zt) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function un(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Kt) || e.classList.contains("w--current"))) == null ? e.links.find((t) => cn(t, e.root)) : t;
	return n ? ln(n) : "";
}
function dn(e, t = !0) {
	var n;
	let r = m(e.root, Jt) || en, a = m(e.root, Yt) || tn, o = un(e), s = e.isOpen ? r : e.isHovered ? a : o || a, c = (n = e.toggleLabel) == null ? e.toggle : n;
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
function fn(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = m(e, $t);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute($t) && e.hasAttribute("tabindex") && e.setAttribute($t, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function pn(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Q, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), fn(e, t), dn(e, n);
}
function mn(e, t, n) {
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
function hn(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	pn(e, !0), mn(e, !0, t);
}
function $(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	pn(e, !1), mn(e, !1, t);
}
function gn(e) {
	e.isOpen ? $(e) : hn(e);
}
function _n(e) {
	e.links.forEach((t) => {
		let n = cn(t, e.root), r = f(Gt, t);
		t.classList.toggle(Kt, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function vn(e) {
	var t;
	let n = f(Vt, e), r = f(Ht, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = f(Ut, r)) == null ? f(Ut, e) : t,
		links: l(Wt, e),
		isOpen: e.classList.contains(Q),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${nn.length + 1}`), r.setAttribute("aria-controls", n.id), _n(i), pn(i, i.isOpen, !1), e.classList.add(qt);
	let a = (e) => {
		e.preventDefault(), gn(i);
	}, o = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || $(i);
	}, s = (e) => {
		e.key !== "Escape" || !i.isOpen || ($(i), i.toggle.focus({ preventScroll: !0 }));
	}, c = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(Wt) || $(i);
	}, u = () => {
		i.isHovered = !0, dn(i);
	}, d = () => {
		i.isHovered = !1, dn(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", u), e.addEventListener("pointerleave", d), document.addEventListener("click", o), document.addEventListener("keydown", s), e.addEventListener("click", c), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", u), () => e.removeEventListener("pointerleave", d), () => document.removeEventListener("click", o), () => document.removeEventListener("keydown", s), () => e.removeEventListener("click", c)), i;
}
function yn(e = document) {
	if (rn && e === document) return () => void 0;
	e === document && (rn = !0);
	let t = l(Bt, e).map(vn).filter((e) => !!e);
	return nn.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(qt, Q), v.killTweensOf(e.panel), v.killTweensOf((t = e.toggleLabel) == null ? e.toggle : t), v.set(e.panel, { clearProps: "height" }), v.set((n = e.toggleLabel) == null ? e.toggle : n, { clearProps: "opacity" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), fn(e, !0);
		});
	};
}
//#endregion
//#region src/main.ts
var bn = !1;
function xn() {
	if (bn) return;
	bn = !0;
	let e = te();
	zt({ i18n: e }), at({ i18n: e }), yn(), n(), window.SiteInteractions = {
		openModal: X,
		openContentModal: Y,
		closeModal: Z,
		openLightbox: z,
		closeLightbox: B
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", xn, { once: !0 }) : xn();
//#endregion

//# sourceMappingURL=site-interactions.js.map