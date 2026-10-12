//#region src/modules/site-preloader-state.ts
var e = "is-site-preloader-exiting", t = "[data-site-preloader]", n = 2e3;
function r(e) {
	let t = window.__sitePreloader;
	t != null && t.active ? t.ready.then(e) : e();
}
//#endregion
export { r as i, n, t as r, e as t };

//# sourceMappingURL=site-interactions-MF_aFTvs.js.map