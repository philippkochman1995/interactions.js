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
], t = 5500;
function n() {
	let n = document.querySelector("img[data-atelier-slideshow]");
	if (!n || !n.parentElement) return;
	let r = document.createElement("div");
	r.className = "atelier_about_img atelier-slideshow", r.setAttribute("role", "region"), r.setAttribute("aria-roledescription", "Karussell"), r.setAttribute("aria-label", "Einblicke in das Atelier am Esteplatz"), n.parentElement.replaceChild(r, n);
	let i = document.createElement("div");
	i.className = "atelier-slideshow__viewport";
	let a = e.map((e, t) => {
		let r = t === 0 ? n : document.createElement("img");
		return t === 0 ? (r.classList.remove("atelier_about_img", "js-lightbox"), r.removeAttribute("data-lightbox-fill"), r.removeAttribute("data-atelier-slideshow")) : (r.src = e.src, r.loading = "lazy", r.decoding = "async"), r.classList.add("atelier-slideshow__image"), r.alt = e.alt, r.style.objectPosition = e.position, r.setAttribute("aria-hidden", t === 0 ? "false" : "true"), i.appendChild(r), r;
	}), o = document.createElement("div");
	o.className = "atelier-slideshow__controls";
	let s = document.createElement("button");
	s.type = "button", s.className = "atelier-slideshow__arrow", s.setAttribute("aria-label", "Vorheriges Atelierfoto"), s.textContent = "←";
	let c = document.createElement("div");
	c.className = "atelier-slideshow__dots", c.setAttribute("role", "group"), c.setAttribute("aria-label", "Atelierfotos auswählen");
	let l = e.map((t, n) => {
		let r = document.createElement("button");
		return r.type = "button", r.className = "atelier-slideshow__dot", r.setAttribute("aria-label", `Atelierfoto ${n + 1} von ${e.length} anzeigen`), c.appendChild(r), r;
	}), u = document.createElement("button");
	u.type = "button", u.className = "atelier-slideshow__arrow", u.setAttribute("aria-label", "Nächstes Atelierfoto"), u.textContent = "→", o.append(s, c, u);
	let d = document.createElement("span");
	d.className = "atelier-slideshow__announcement", d.setAttribute("aria-live", "polite"), r.append(i, o, d);
	let f = 0, p, m = window.matchMedia("(prefers-reduced-motion: reduce)");
	function h(e) {
		f = (e + a.length) % a.length, a.forEach((e, t) => {
			let n = t === f;
			e.classList.toggle("is-active", n), e.setAttribute("aria-hidden", String(!n));
		}), l.forEach((e, t) => {
			let n = t === f;
			e.classList.toggle("is-active", n), e.setAttribute("aria-current", String(n));
		}), d.textContent = `Atelierfoto ${f + 1} von ${a.length}`;
	}
	function g() {
		p !== void 0 && window.clearInterval(p), p = void 0;
	}
	function _() {
		g(), !(m.matches || document.hidden) && (p = window.setInterval(() => h(f + 1), t));
	}
	s.addEventListener("click", () => {
		h(f - 1), _();
	}), u.addEventListener("click", () => {
		h(f + 1), _();
	}), l.forEach((e, t) => e.addEventListener("click", () => {
		h(t), _();
	})), r.addEventListener("mouseenter", g), r.addEventListener("mouseleave", _), r.addEventListener("focusin", g), r.addEventListener("focusout", (e) => {
		(!(e.relatedTarget instanceof Node) || !r.contains(e.relatedTarget)) && _();
	}), document.addEventListener("visibilitychange", () => {
		document.hidden ? g() : _();
	}), m.addEventListener("change", _), h(0), _();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", n, { once: !0 }) : n();
//#endregion

//# sourceMappingURL=atelier-slideshow.js.map