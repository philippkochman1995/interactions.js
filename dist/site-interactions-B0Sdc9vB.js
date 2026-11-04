//#region src/modules/locale-path.ts
function e(e = window.location.pathname) {
	return e.replace(/^\/en(?=\/|$)/i, "") || "/";
}
function t(e, t = window.location.pathname) {
	return `${/^\/en(?=\/|$)/i.test(t) ? "/en" : ""}${e}`;
}
//#endregion
export { e as n, t };

//# sourceMappingURL=site-interactions-B0Sdc9vB.js.map