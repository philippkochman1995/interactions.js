//#region src/biography-intro.ts
function e(e, t, n) {
	let r = e.animate([{
		opacity: 0,
		transform: `translateY(${t}px)`
	}, {
		opacity: 1,
		transform: "translateY(0)"
	}], {
		duration: n,
		easing: "cubic-bezier(.22, 1, .36, 1)",
		fill: "forwards"
	});
	return r.finished.then(() => {
		e.style.opacity = "1", e.style.transform = "none", r.cancel();
	});
}
async function t() {
	let t = document.querySelector(".bio_hero_eyebrow"), n = document.querySelector(".bio_hero_heading");
	if (!(!t || !n || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
		t.style.opacity = "0", t.style.transform = "translateY(12px)", n.style.opacity = "0", n.style.transform = "translateY(24px)";
		try {
			var r;
			await Promise.all([document.fonts.ready, (r = window.__sitePreloader) == null ? void 0 : r.ready]), await e(t, 12, 600), await e(n, 24, 850);
		} catch (e) {
			t.style.opacity = "1", n.style.opacity = "1", t.style.transform = "none", n.style.transform = "none";
		}
	}
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
	t();
}, { once: !0 }) : t();
//#endregion

//# sourceMappingURL=biography-intro.js.map