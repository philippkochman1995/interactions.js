import { f as e, m as t } from "./site-interactions-sLVQDvui.js";
import { t as n } from "./site-interactions-BxJ-FVg3.js";
//#region src/accordion.ts
var r = ".accordion_section", i = ".accordion_container", a = ".accordion_header", o = ".accordion_heading", s = ".accordion_icon", c = ".accordion_content", l = "var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a))", u = "var(--FW_Dark_Purple_50, var(--fw_dark_purple_50, #82808c))", d = "2rem", f = "-4rem", p = "-2rem", m = "0rem", h = -90, g = 0, _ = 45, v = .42, y = "power3.out", b = !1, x = 0, S = [];
function C(e, t) {
	return e.classList.contains("is-open") || e.classList.contains("is-active") || e.hasAttribute("data-accordion-open") || t.getAttribute("aria-expanded") === "true";
}
function w(e) {
	return e ? t("path, circle, rect, polygon, line, polyline", e) : [];
}
function T(e, t) {
	e.icon && (n.set([e.icon, ...e.iconShapes], {
		color: t,
		fill: t
	}), e.iconShapes.filter((e) => {
		let t = e.getAttribute("stroke");
		return !!(t && t !== "none");
	}).forEach((e) => {
		n.set(e, { stroke: t });
	}));
}
function E(e, t) {
	e.icon && (n.to([e.icon, ...e.iconShapes], {
		color: t,
		fill: t,
		duration: v * .75,
		ease: y,
		overwrite: "auto"
	}), e.iconShapes.filter((e) => {
		let t = e.getAttribute("stroke");
		return !!(t && t !== "none");
	}).forEach((e) => {
		n.to(e, {
			stroke: t,
			duration: v * .75,
			ease: y,
			overwrite: "auto"
		});
	}));
}
function D(e, t) {
	if (!e.icon) return;
	let r = {
		normal: {
			x: f,
			rotation: h,
			color: u
		},
		hover: {
			x: p,
			rotation: g,
			color: l
		},
		open: {
			x: m,
			rotation: _,
			color: l
		}
	}[t];
	n.to(e.icon, {
		x: r.x,
		rotation: r.rotation,
		duration: v,
		ease: y,
		overwrite: "auto"
	}), E(e, r.color);
}
function O(e, t) {
	e.heading && n.to(e.heading, {
		x: t ? d : 0,
		color: t ? l : "",
		duration: v,
		ease: y,
		overwrite: "auto",
		clearProps: t ? void 0 : "color"
	});
}
function k(e) {
	let t = e.section.querySelector(i);
	e.section.classList.toggle("is-open", e.isOpen), e.section.classList.toggle("is-active", e.isOpen), t == null || t.classList.toggle("is-open", e.isOpen), e.header.classList.toggle("is-open", e.isOpen), e.header.setAttribute("aria-expanded", String(e.isOpen));
}
function A(t, r = !1) {
	let { content: i } = t;
	if (n.killTweensOf(i), e() || r) {
		n.set(i, {
			height: t.isOpen ? "auto" : 0,
			autoAlpha: +!!t.isOpen,
			overflow: t.isOpen ? "visible" : "hidden"
		});
		return;
	}
	if (t.isOpen) {
		n.set(i, {
			height: "auto",
			autoAlpha: 1,
			overflow: "hidden"
		});
		let e = i.offsetHeight;
		n.fromTo(i, {
			height: 0,
			autoAlpha: 0
		}, {
			height: e,
			autoAlpha: 1,
			duration: v,
			ease: y,
			onComplete: () => {
				n.set(i, {
					height: "auto",
					overflow: "visible"
				});
			}
		});
		return;
	}
	n.to(i, {
		height: 0,
		autoAlpha: 0,
		overflow: "hidden",
		duration: v * .85,
		ease: y
	});
}
function j(e, t) {
	e.isOpen !== t && (e.isOpen = t, k(e), A(e), D(e, e.isOpen ? "open" : e.header.matches(":hover") ? "hover" : "normal"));
}
function M(e) {
	var t;
	x += 1;
	let n = e.content.id || `accordion-content-${x}`;
	e.content.id = n, e.header.setAttribute("role", "button"), e.header.setAttribute("tabindex", (t = e.header.getAttribute("tabindex")) == null ? "0" : t), e.header.setAttribute("aria-controls", n), e.header.setAttribute("aria-expanded", String(e.isOpen));
}
function N(e) {
	let t = e.querySelector(a), r = e.querySelector(c);
	if (!t || !r) return null;
	let i = t.querySelector(s), d = {
		section: e,
		header: t,
		heading: t.querySelector(o),
		icon: i,
		iconShapes: w(i),
		content: r,
		isOpen: C(e, t)
	};
	return M(d), k(d), n.set(d.heading, {
		x: 0,
		transformOrigin: "left center",
		willChange: "transform, color"
	}), d.icon && (n.set(d.icon, {
		x: d.isOpen ? m : f,
		rotation: d.isOpen ? _ : h,
		transformOrigin: "50% 50%",
		transformBox: "fill-box",
		willChange: "transform",
		flexShrink: 0
	}), T(d, d.isOpen ? l : u)), A(d, !0), d.header.addEventListener("click", () => {
		j(d, !d.isOpen);
	}), d.header.addEventListener("keydown", (e) => {
		e.key !== "Enter" && e.key !== " " || (e.preventDefault(), j(d, !d.isOpen));
	}), d.header.addEventListener("mouseenter", () => {
		O(d, !0), d.isOpen || D(d, "hover");
	}), d.header.addEventListener("mouseleave", () => {
		O(d, !1), D(d, d.isOpen ? "open" : "normal");
	}), d;
}
function P(e = document) {
	return b ? S : (b = !0, t(r, e).map(N).forEach((e) => {
		e && S.push(e);
	}), S);
}
function F() {
	P();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", F, { once: !0 }) : F();
//#endregion
export { P as initAccordions };

//# sourceMappingURL=accordion.js.map