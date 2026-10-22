//#region src/modules/cms-image.ts
function e(e) {
	var t, n, r, i;
	if (!e || e.closest(".w-dyn-bind-empty, .w-condition-invisible")) return "";
	let a = (t = (n = e.getAttribute("src")) == null ? void 0 : n.trim()) == null ? "" : t, o = (r = (i = e.getAttribute("srcset")) == null ? void 0 : i.trim()) == null ? "" : r;
	if (!a && !o || a.includes("/plugins/Basic/assets/placeholder.")) return "";
	let s = e.currentSrc || (a ? e.src : "");
	return s.includes("/plugins/Basic/assets/placeholder.") ? "" : s;
}
function t(t) {
	var n, r;
	if (!t || t.closest(".w-dyn-bind-empty, .w-condition-invisible")) return "";
	let i = (n = (r = t.getAttribute("src")) == null ? void 0 : r.trim()) == null ? "" : n;
	return i.includes("/plugins/Basic/assets/placeholder.") ? "" : i ? t.src : e(t);
}
//#endregion
export { e as n, t };

//# sourceMappingURL=site-interactions-CKkKncuX.js.map