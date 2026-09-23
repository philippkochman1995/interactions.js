//#region src/modules/cms-image.ts
function e(e) {
	var t, n, r, i;
	if (!e || e.closest(".w-dyn-bind-empty, .w-condition-invisible")) return "";
	let a = (t = (n = e.getAttribute("src")) == null ? void 0 : n.trim()) == null ? "" : t, o = (r = (i = e.getAttribute("srcset")) == null ? void 0 : i.trim()) == null ? "" : r;
	if (!a && !o || a.includes("/plugins/Basic/assets/placeholder.")) return "";
	let s = e.currentSrc || (a ? e.src : "");
	return s.includes("/plugins/Basic/assets/placeholder.") ? "" : s;
}
//#endregion
export { e as t };

//# sourceMappingURL=site-interactions-QtEWUsWn.js.map