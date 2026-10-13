//#region src/modules/site-preloader-state.ts
var e = "is-site-preloader-exiting", t = "[data-site-preloader]", n = 2e3;
function r(e) {
	let t = window.__sitePreloader;
	t != null && t.active ? t.ready.then(e) : e();
}
//#endregion
//#region src/modules/logo-variants.ts
var i = [
	"6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg",
	"6ab93c11630b54996257245a_West-Signatur-Variant3.svg",
	"6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg",
	"6ab93c127b1c73994a56f043_West-Signatur-Variant5.svg",
	"6ab93c12f66f79789e902fc4_West-Signatur-Variant7.svg",
	"6ab93c1232f656f444927b94_West-Signatur-Variant8.svg"
].map((e) => "https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/" + e);
function a() {
	let e = window.matchMedia("(prefers-reduced-motion: reduce)");
	document.querySelectorAll(".top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link").forEach((t) => {
		let n = t.querySelector("svg, img.nav_logo");
		if (!n || t.querySelector("[data-logo-variant]")) return;
		let r = document.createElement("span");
		r.setAttribute("data-logo-variant", ""), r.setAttribute("aria-hidden", "true"), getComputedStyle(t).position === "static" && (t.style.position = "relative"), t.appendChild(r);
		let a = n.style.visibility, o = null, s = 0;
		function c() {
			o !== null && window.clearInterval(o), o = null, r.style.display = "none", n.style.visibility = a;
		}
		function l() {
			if (s >= i.length) {
				c();
				return;
			}
			let e = s++, t = `url("${i[e]}")`;
			r.style.height = e === 4 ? "240%" : "100%", r.style.maskImage = t, r.style.setProperty("-webkit-mask-image", t), r.style.color = getComputedStyle(n).color, r.style.display = "block", n.style.visibility = "hidden";
		}
		t.addEventListener("pointerenter", () => {
			e.matches || (c(), s = 0, l(), o = window.setInterval(l, 250));
		}), t.addEventListener("pointerleave", c), t.addEventListener("blur", c);
	}), i.forEach((e) => {
		let t = new Image();
		t.src = e;
	});
}
//#endregion
export { r as a, t as i, e as n, n as r, a as t };

//# sourceMappingURL=site-interactions-xukKKGlM.js.map