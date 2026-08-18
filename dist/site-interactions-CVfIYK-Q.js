//#region src/modules/work-flip-state.ts
var e = "site-work-flip", t = "site-works-view", n = "is-work-flip-pending";
function r(e) {
	try {
		let t = window.sessionStorage.getItem(e);
		return t ? JSON.parse(t) : null;
	} catch (e) {
		return null;
	}
}
function i(e, t) {
	try {
		window.sessionStorage.setItem(e, JSON.stringify(t));
	} catch (e) {}
}
function a(e) {
	try {
		window.sessionStorage.removeItem(e);
	} catch (e) {}
}
function o(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return typeof t.top == "number" && typeof t.left == "number" && typeof t.width == "number" && typeof t.height == "number" && t.width > 0 && t.height > 0;
}
function s() {
	let t = r(e);
	return !t || !o(t.rect) || typeof t.src != "string" || !t.src || t.direction !== "forward" && t.direction !== "back" ? null : typeof t.ts != "number" || Date.now() - t.ts > 8e3 ? (a(e), null) : t;
}
function c(t) {
	i(e, t);
}
function l() {
	a(e);
}
function u() {
	let e = r(t);
	return !e || !Array.isArray(e.categories) || typeof e.visibleCount != "number" ? null : e;
}
function d(e) {
	i(t, e);
}
function f() {
	try {
		let e = window.performance.getEntriesByType("navigation")[0];
		return (e == null ? void 0 : e.type) === "back_forward";
	} catch (e) {
		return !1;
	}
}
//#endregion
export { u as a, s as i, l as n, c as o, f as r, d as s, n as t };

//# sourceMappingURL=site-interactions-CVfIYK-Q.js.map