//#region src/modules/site-preloader-state.ts
var e = "is-site-preloading", t = "is-site-preloader-exiting", n = "[data-site-preloader]", r = "site-preloader-seen", i = 11e3;
function a() {
	if (window.__sitePreloader) return;
	let n = document.documentElement;
	try {
		if (window.sessionStorage.getItem("site-preloader-seen") === "4") return;
		window.sessionStorage.setItem(r, "4");
	} catch (e) {}
	if (n.classList.contains("is-page-transition-pending")) return;
	let i, a = new Promise((e) => {
		i = e;
	}), o = {
		active: !0,
		startedAt: Date.now(),
		ready: a,
		cleanup: [],
		release: () => {
			var r;
			o.active && (o.active = !1, n.classList.remove(e, t), (r = document.querySelector("[data-site-preloader]")) == null || r.remove(), o.cleanup.splice(0).forEach((e) => {
				try {
					e();
				} catch (e) {}
			}), i());
		}
	};
	window.__sitePreloader = o, n.classList.add(e);
	let s = window.setTimeout(o.release, 6e3);
	o.allowExit = () => {
		window.clearTimeout(s), s = window.setTimeout(o.release, 2e4);
	};
	let c = (e) => {
		e.persisted && o.release();
	}, l = (e) => {
		e.cancelable && e.preventDefault();
	};
	window.addEventListener("pagehide", o.release), window.addEventListener("pageshow", c), window.addEventListener("wheel", l, {
		passive: !1,
		capture: !0
	}), window.addEventListener("touchmove", l, {
		passive: !1,
		capture: !0
	}), o.cleanup.push(() => {
		window.clearTimeout(s), window.removeEventListener("pagehide", o.release), window.removeEventListener("pageshow", c), window.removeEventListener("wheel", l, !0), window.removeEventListener("touchmove", l, !0);
	});
	let u = (e) => {
		e.target instanceof Element && e.target.setAttribute("data-site-spline-ready", "");
	};
	for (let e of [
		"load-complete",
		"w-spline-load",
		"site:spline-ready"
	]) document.addEventListener(e, u, !0), o.cleanup.push(() => document.removeEventListener(e, u, !0));
}
function o(e) {
	let t = window.__sitePreloader;
	t != null && t.active ? t.ready.then(e) : e();
}
//#endregion
//#region src/modules/signature-variants.ts
var s = [
	"6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg",
	"6ab93c11630b54996257245a_West-Signatur-Variant3.svg",
	"6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg",
	"6ab93c1232f656f444927b94_West-Signatur-Variant8.svg",
	"6ad72a88caefffd11ac57818_Variant9.svg",
	"6a3a705c3445399a04fbd850_SIGNATUR2.svg"
].map((e) => `https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/${e}`), c = s.length, l = "fw-signature-last-variant";
function u() {
	let e = -1;
	try {
		let t = window.sessionStorage.getItem(l);
		t !== null && (e = Number(t));
	} catch (e) {}
	(!Number.isInteger(e) || e < 0 || e > s.length) && (e = -1);
	let t = Math.floor(Math.random() * (e < 0 ? s.length + 1 : s.length));
	e >= 0 && t >= e && t++;
	try {
		window.sessionStorage.setItem(l, String(t));
	} catch (e) {}
	return t;
}
function d() {
	var e, t;
	return (t = (e = window).__fwPageSignatureVariant) == null ? e.__fwPageSignatureVariant = u() : t;
}
function f() {
	return window.__fwPageSignatureVariant = u();
}
function p(e) {
	window.__fwPageSignatureVariant = e;
	try {
		window.sessionStorage.setItem(l, String(e));
	} catch (e) {}
}
function m(e) {
	return Array.from({ length: s.length + 1 }, (e, t) => t).filter((t) => t !== e).concat(e);
}
//#endregion
//#region src/modules/logo-variants.ts
var h = ".top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link", g = !1;
function _() {
	if (g) return;
	g = !0;
	let e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = /* @__PURE__ */ new WeakSet(), n = [], r = d();
	function i(i) {
		if (t.has(i)) return;
		let a = i.querySelector("svg, img.nav_logo");
		if (!a) return;
		t.add(i);
		let o = i.querySelector("[data-logo-variant]");
		o || (o = document.createElement("span"), o.setAttribute("data-logo-variant", ""), o.setAttribute("aria-hidden", "true"), i.appendChild(o));
		let c = o;
		getComputedStyle(i).position === "static" && (i.style.position = "relative");
		let l = a.style.visibility, u = null, d = !1;
		function f(e) {
			if (e === 0) {
				c.style.display = "none", a.style.visibility = l;
				return;
			}
			let t = `url("${s[e - 1]}")`;
			c.style.height = "100%", c.style.maskImage = t, c.style.setProperty("-webkit-mask-image", t), c.style.color = getComputedStyle(a).color, c.style.display = "block", a.style.visibility = "hidden";
		}
		function p() {
			u !== null && window.clearInterval(u), u = null, f(r);
		}
		i.addEventListener("pointerenter", (t) => {
			if (t.stopImmediatePropagation(), d || e.matches) return;
			d = !0, p();
			let n = m(r), i = 0;
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
	function a(e) {
		e instanceof HTMLElement && e.matches(h) && i(e), e.querySelectorAll(h).forEach(i);
	}
	a(document), new MutationObserver((e) => {
		e.forEach((e) => e.addedNodes.forEach((e) => {
			e instanceof HTMLElement && a(e);
		}));
	}).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), window.addEventListener("pageshow", (e) => {
		e.persisted && (r = f(), n.forEach((e) => {
			e.link.isConnected && e.reset();
		}));
	}), s.forEach((e) => {
		let t = new Image();
		t.src = e;
	});
}
//#endregion
export { t as a, r as c, p as i, o as l, c as n, i as o, s as r, n as s, _ as t, a as u };

//# sourceMappingURL=site-interactions-CX0xCrMJ.js.map