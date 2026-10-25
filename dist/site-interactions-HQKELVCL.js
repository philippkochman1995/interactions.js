//#region src/modules/site-preloader-state.ts
var e = "is-site-preloader-exiting", t = "[data-site-preloader]", n = 11e3;
function r(e) {
	let t = window.__sitePreloader;
	t != null && t.active ? t.ready.then(e) : e();
}
//#endregion
//#region src/modules/signature-variants.ts
var i = [
	"6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg",
	"6ab93c11630b54996257245a_West-Signatur-Variant3.svg",
	"6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg",
	"6ab93c1232f656f444927b94_West-Signatur-Variant8.svg",
	"6ad72a88caefffd11ac57818_Variant9.svg",
	"6a3a705c3445399a04fbd850_SIGNATUR2.svg"
].map((e) => `https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/${e}`);
i.length;
var a = "fw-signature-last-variant";
function o() {
	let e = -1;
	try {
		let t = window.sessionStorage.getItem(a);
		t !== null && (e = Number(t));
	} catch (e) {}
	(!Number.isInteger(e) || e < 0 || e > i.length) && (e = -1);
	let t = Math.floor(Math.random() * (e < 0 ? i.length + 1 : i.length));
	e >= 0 && t >= e && t++;
	try {
		window.sessionStorage.setItem(a, String(t));
	} catch (e) {}
	return t;
}
function s() {
	var e, t;
	return (t = (e = window).__fwPageSignatureVariant) == null ? e.__fwPageSignatureVariant = o() : t;
}
function c() {
	return window.__fwPageSignatureVariant = o();
}
function l(e) {
	return Array.from({ length: i.length + 1 }, (e, t) => t).filter((t) => t !== e).concat(e);
}
//#endregion
//#region src/modules/logo-variants.ts
var u = ".top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link", d = !1;
function f() {
	if (d) return;
	d = !0;
	let e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = /* @__PURE__ */ new WeakSet(), n = [], r = s();
	function a(a) {
		if (t.has(a)) return;
		let o = a.querySelector("svg, img.nav_logo");
		if (!o) return;
		t.add(a);
		let s = a.querySelector("[data-logo-variant]");
		s || (s = document.createElement("span"), s.setAttribute("data-logo-variant", ""), s.setAttribute("aria-hidden", "true"), a.appendChild(s));
		let c = s;
		getComputedStyle(a).position === "static" && (a.style.position = "relative");
		let u = o.style.visibility, d = null, f = !1;
		function p(e) {
			if (e === 0) {
				c.style.display = "none", o.style.visibility = u;
				return;
			}
			let t = `url("${i[e - 1]}")`;
			c.style.height = "100%", c.style.maskImage = t, c.style.setProperty("-webkit-mask-image", t), c.style.color = getComputedStyle(o).color, c.style.display = "block", o.style.visibility = "hidden";
		}
		function m() {
			d !== null && window.clearInterval(d), d = null, p(r);
		}
		a.addEventListener("pointerenter", (t) => {
			if (t.stopImmediatePropagation(), f || e.matches || window.location.pathname === "/") return;
			f = !0, m();
			let n = l(r), i = 0;
			d = window.setInterval(() => {
				p(n[i++]), i === n.length && (window.clearInterval(d), d = null);
			}, 210);
		}, !0), a.addEventListener("pointerleave", (e) => {
			e.stopImmediatePropagation(), !(e.relatedTarget instanceof Node && a.contains(e.relatedTarget)) && (f = !1, m());
		}, !0), a.addEventListener("blur", (e) => {
			e.stopImmediatePropagation(), f = !1, m();
		}, !0), n.push({
			link: a,
			reset: m
		}), p(r);
	}
	function o(e) {
		e instanceof HTMLElement && e.matches(u) && a(e), e.querySelectorAll(u).forEach(a);
	}
	o(document), new MutationObserver((e) => {
		e.forEach((e) => e.addedNodes.forEach((e) => {
			e instanceof HTMLElement && o(e);
		}));
	}).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), window.addEventListener("pageshow", (e) => {
		e.persisted && (r = c(), n.forEach((e) => {
			e.link.isConnected && e.reset();
		}));
	}), i.forEach((e) => {
		let t = new Image();
		t.src = e;
	});
}
//#endregion
export { r as a, t as i, e as n, n as r, f as t };

//# sourceMappingURL=site-interactions-HQKELVCL.js.map