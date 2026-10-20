//#region src/modules/site-preloader-state.ts
var e = "is-site-preloader-exiting", t = "[data-site-preloader]", n = 2e3;
function r(e) {
	let t = window.__sitePreloader;
	t != null && t.active ? t.ready.then(e) : e();
}
//#endregion
//#region src/modules/logo-variants.ts
var i = ".top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link", a = [
	"6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg",
	"6ab93c11630b54996257245a_West-Signatur-Variant3.svg",
	"6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg",
	"6ab93c1232f656f444927b94_West-Signatur-Variant8.svg",
	"6ad72a88caefffd11ac57818_Variant9.svg"
].map((e) => "https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/" + e), o = "fw-signature-last-variant", s = !1;
function c() {
	let e = -1;
	try {
		let t = window.sessionStorage.getItem(o);
		t !== null && (e = Number(t));
	} catch (e) {}
	(!Number.isInteger(e) || e < 0 || e > a.length) && (e = -1);
	let t = Math.floor(Math.random() * (e < 0 ? a.length + 1 : a.length));
	e >= 0 && t >= e && t++;
	try {
		window.sessionStorage.setItem(o, String(t));
	} catch (e) {}
	return t;
}
function l() {
	if (s) return;
	s = !0;
	let e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = /* @__PURE__ */ new WeakSet(), n = [], r = c();
	function o(i) {
		if (t.has(i)) return;
		let o = i.querySelector("svg, img.nav_logo");
		if (!o) return;
		t.add(i);
		let s = i.querySelector("[data-logo-variant]");
		s || (s = document.createElement("span"), s.setAttribute("data-logo-variant", ""), s.setAttribute("aria-hidden", "true"), i.appendChild(s));
		let c = s;
		getComputedStyle(i).position === "static" && (i.style.position = "relative");
		let l = o.style.visibility, u = null, d = !1;
		function f(e) {
			if (e === 0) {
				c.style.display = "none", o.style.visibility = l;
				return;
			}
			let t = `url("${a[e - 1]}")`;
			c.style.height = "100%", c.style.maskImage = t, c.style.setProperty("-webkit-mask-image", t), c.style.color = getComputedStyle(o).color, c.style.display = "block", o.style.visibility = "hidden";
		}
		function p() {
			u !== null && window.clearInterval(u), u = null, f(r);
		}
		i.addEventListener("pointerenter", (t) => {
			if (t.stopImmediatePropagation(), d || e.matches) return;
			d = !0, p();
			let n = Array.from({ length: a.length + 1 }, (e, t) => t).filter((e) => e !== r);
			n.push(r);
			let i = 0;
			u = window.setInterval(() => {
				f(n[i++]), i === n.length && (window.clearInterval(u), u = null);
			}, 210);
		}, !0), i.addEventListener("pointerleave", (e) => {
			e.stopImmediatePropagation(), !(e.relatedTarget instanceof Node && i.contains(e.relatedTarget)) && (d = !1, p());
		}, !0), i.addEventListener("blur", (e) => {
			e.stopImmediatePropagation(), d = !1, p();
		}, !0), n.push({
			link: i,
			reset: p
		}), f(r);
	}
	function l(e) {
		e instanceof HTMLElement && e.matches(i) && o(e), e.querySelectorAll(i).forEach(o);
	}
	l(document), new MutationObserver((e) => {
		e.forEach((e) => e.addedNodes.forEach((e) => {
			e instanceof HTMLElement && l(e);
		}));
	}).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), window.addEventListener("pageshow", (e) => {
		e.persisted && (r = c(), n.forEach((e) => {
			e.link.isConnected && e.reset();
		}));
	}), a.forEach((e) => {
		let t = new Image();
		t.src = e;
	});
}
//#endregion
export { r as a, t as i, e as n, n as r, l as t };

//# sourceMappingURL=site-interactions-DiIQUbt_.js.map