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
function _() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function v(e, t, n, r, i) {
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
function y(e = document) {
	return v(e, "click", "[data-back-button]", (e, t) => {
		if (e.preventDefault(), "scrollRestoration" in history && (history.scrollRestoration = "auto"), window.history.length > 1) {
			window.history.back();
			return;
		}
		window.location.href = t.getAttribute("href") || "/";
	});
}
function b(e, t, n) {
	e.dispatchEvent(new CustomEvent(t, {
		bubbles: !0,
		detail: n
	}));
}
//#endregion
export { p as _, s as a, y as c, h as d, _ as f, r as g, f as h, d as i, i as l, n as m, b as n, l as o, t as p, u as r, o as s, v as t, a as u, g as v };

//# sourceMappingURL=site-interactions-sLVQDvui.js.map