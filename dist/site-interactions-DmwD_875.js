//#region src/modules/signature-variants.ts
var e = [
	"6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg",
	"6ab93c11630b54996257245a_West-Signatur-Variant3.svg",
	"6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg",
	"6ab93c1232f656f444927b94_West-Signatur-Variant8.svg",
	"6ad72a88caefffd11ac57818_Variant9.svg",
	"6a3a705c3445399a04fbd850_SIGNATUR2.svg"
].map((e) => `https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/${e}`);
e.length;
var t = "fw-signature-last-variant";
function n() {
	let n = -1;
	try {
		let e = window.sessionStorage.getItem(t);
		e !== null && (n = Number(e));
	} catch (e) {}
	(!Number.isInteger(n) || n < 0 || n > e.length) && (n = -1);
	let r = Math.floor(Math.random() * (n < 0 ? e.length + 1 : e.length));
	n >= 0 && r >= n && r++;
	try {
		window.sessionStorage.setItem(t, String(r));
	} catch (e) {}
	return r;
}
function r() {
	var e, t;
	return (t = (e = window).__fwPageSignatureVariant) == null ? e.__fwPageSignatureVariant = n() : t;
}
function i() {
	return window.__fwPageSignatureVariant = n();
}
function a(t) {
	return Array.from({ length: e.length + 1 }, (e, t) => t).filter((e) => e !== t).concat(t);
}
//#endregion
//#region src/modules/logo-variants.ts
var o = ".top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link", s = !1;
function c() {
	if (s) return;
	s = !0;
	let t = window.matchMedia("(prefers-reduced-motion: reduce)"), n = /* @__PURE__ */ new WeakSet(), c = [], l = r();
	function u(r) {
		if (n.has(r)) return;
		let i = r.querySelector("svg, img.nav_logo");
		if (!i) return;
		n.add(r);
		let o = r.querySelector("[data-logo-variant]");
		o || (o = document.createElement("span"), o.setAttribute("data-logo-variant", ""), o.setAttribute("aria-hidden", "true"), r.appendChild(o));
		let s = o;
		getComputedStyle(r).position === "static" && (r.style.position = "relative");
		let u = i.style.visibility, d = null, f = !1;
		function p(t) {
			if (t === 0) {
				s.style.display = "none", i.style.visibility = u;
				return;
			}
			let n = `url("${e[t - 1]}")`;
			s.style.height = "100%", s.style.maskImage = n, s.style.setProperty("-webkit-mask-image", n), s.style.color = getComputedStyle(i).color, s.style.display = "block", i.style.visibility = "hidden";
		}
		function m() {
			d !== null && window.clearInterval(d), d = null, p(l);
		}
		r.addEventListener("pointerenter", (e) => {
			if (e.stopImmediatePropagation(), f || t.matches) return;
			f = !0, m();
			let n = a(l), r = 0;
			d = window.setInterval(() => {
				p(n[r++]), r === n.length && (window.clearInterval(d), d = null);
			}, 210);
		}, !0), r.addEventListener("pointerleave", (e) => {
			e.stopImmediatePropagation(), !(e.relatedTarget instanceof Node && r.contains(e.relatedTarget)) && (f = !1, m());
		}, !0), r.addEventListener("blur", (e) => {
			e.stopImmediatePropagation(), f = !1, m();
		}, !0), c.push({
			link: r,
			reset: m
		}), p(l);
	}
	function d(e) {
		e instanceof HTMLElement && e.matches(o) && u(e), e.querySelectorAll(o).forEach(u);
	}
	d(document), new MutationObserver((e) => {
		e.forEach((e) => e.addedNodes.forEach((e) => {
			e instanceof HTMLElement && d(e);
		}));
	}).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), window.addEventListener("pageshow", (e) => {
		e.persisted && (l = i(), c.forEach((e) => {
			e.link.isConnected && e.reset();
		}));
	}), e.forEach((e) => {
		let t = new Image();
		t.src = e;
	});
}
//#endregion
//#region src/modules/site-preloader-state.ts
var l = "is-site-preloader-exiting", u = "[data-site-preloader]", d = 11e3;
function f(e) {
	let t = window.__sitePreloader;
	t != null && t.active ? t.ready.then(e) : e();
}
//#endregion
export { c as a, f as i, d as n, u as r, l as t };

//# sourceMappingURL=site-interactions-DmwD_875.js.map