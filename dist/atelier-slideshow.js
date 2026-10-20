//#region src/atelier-slideshow.ts
var e = [
	{
		alt: "Franz West arbeitet an einer Skulptur im Atelier am Esteplatz",
		src: "https://s3.amazonaws.com/webflow-prod-assets/69b3f9edfc3e8e944fc06836/6ad716772edac11d79be657c_024668_Esteplatz.jpg",
		position: "35% center"
	},
	{
		alt: "Einblick in die Arbeit im Atelier am Esteplatz",
		src: "https://s3.amazonaws.com/webflow-prod-assets/69b3f9edfc3e8e944fc06836/6ad71676bfdf66d836104e80_024681_Esteplatz.jpg",
		position: "50% center"
	},
	{
		alt: "Skulpturen im Atelier am Esteplatz",
		src: "https://s3.amazonaws.com/webflow-prod-assets/69b3f9edfc3e8e944fc06836/6ad71677491f17f6faf5e6e9_036733_Esteplatz.jpg",
		position: "45% center"
	}
], t = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"26 31 50 50\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\"><circle data-arrow-circle cx=\"51\" cy=\"56\" r=\"20.625\" stroke-width=\"0.75\"></circle><path data-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\"></path><path data-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\"></path></svg>";
function n(e) {
	let n = document.createElement("button");
	return n.type = "button", n.className = `editionen_nav is-${e}`, n.setAttribute(`data-edition-${e}`, ""), n.setAttribute("aria-label", e === "prev" ? "Vorheriges Bild" : "Nächstes Bild"), n.innerHTML = t, n;
}
function r() {
	function e() {
		let e = document.querySelector("[data-site-lightbox]");
		return e ? (e.querySelectorAll("[data-lightbox-prev], [data-lightbox-next]").forEach((e) => {
			e.querySelector("[data-arrow-head]") || (e.innerHTML = t);
		}), !0) : !1;
	}
	if (e()) return;
	let n = new MutationObserver(() => {
		e() && n.disconnect();
	});
	n.observe(document.body, { childList: !0 });
}
function i() {
	let t = document.querySelector("img[data-atelier-slideshow]");
	if (!t || !t.parentElement) return;
	let i = document.createElement("div");
	i.className = "atelier_about_img editionen_media atelier-slideshow", i.setAttribute("data-edition-slider", ""), i.setAttribute("role", "region"), i.setAttribute("aria-roledescription", "Karussell"), i.setAttribute("aria-label", "Einblicke in das Atelier am Esteplatz"), t.parentElement.replaceChild(i, t);
	let a = document.createElement("div");
	a.className = "editionen_track", a.setAttribute("data-edition-track", "");
	let o = e.map((e, n) => {
		let r = document.createElement("div");
		r.className = `editionen_slide${n === 0 ? " is-active" : ""}`, r.setAttribute("data-edition-slide", "");
		let i = document.createElement("button");
		i.type = "button", i.className = "atelier-slideshow__lightbox js-lightbox", i.setAttribute("data-lightbox-group", "atelier-esteplatz"), i.setAttribute("data-lightbox-src", e.src), i.setAttribute("data-lightbox-caption", e.alt), i.setAttribute("aria-label", `${e.alt} vergrößern`);
		let o = n === 0 ? t : document.createElement("img");
		return n === 0 ? (o.classList.remove("atelier_about_img", "js-lightbox"), o.removeAttribute("data-lightbox-fill"), o.removeAttribute("data-atelier-slideshow")) : (o.src = e.src, o.loading = "lazy", o.decoding = "async"), o.classList.add("editionen_img"), o.alt = e.alt, o.style.objectPosition = e.position, i.appendChild(o), r.appendChild(i), a.appendChild(r), {
			slide: r,
			trigger: i
		};
	}), s = n("prev"), c = n("next"), l = document.createElement("div");
	l.className = "editionen_dots", l.setAttribute("data-edition-dots", "");
	let u = e.map((e, t) => {
		let n = document.createElement("button");
		return n.type = "button", n.className = "editionen_dot", n.setAttribute("data-edition-dot", ""), n.setAttribute("aria-label", `Bild ${t + 1}`), l.appendChild(n), n;
	});
	i.append(a, s, c, l);
	let d = 0;
	function f(e) {
		d = (e + o.length) % o.length, o.forEach(({ slide: e, trigger: t }, n) => {
			let r = n === d;
			e.classList.toggle("is-active", r), e.setAttribute("aria-hidden", String(!r)), t.tabIndex = r ? 0 : -1;
		}), u.forEach((e, t) => {
			let n = t === d;
			e.classList.toggle("is-active", n), e.setAttribute("aria-current", String(n));
		});
	}
	s.addEventListener("click", () => f(d - 1)), c.addEventListener("click", () => f(d + 1)), u.forEach((e, t) => e.addEventListener("click", () => f(t))), f(0), r();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", i, { once: !0 }) : i();
//#endregion

//# sourceMappingURL=atelier-slideshow.js.map