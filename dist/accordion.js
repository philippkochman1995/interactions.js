import { f as e, m as t } from "./site-interactions-sLVQDvui.js";
import { t as n } from "./site-interactions-BxJ-FVg3.js";
//#region src/accordion.ts
var r = ".accordion_section", i = ".accordion_item", a = ".accordion_container", o = ".accordion_header", s = ".accordion_heading", c = ".accordion_icon", l = ".accordion_body", u = ".accordion_content", d = "var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a))", f = "var(--FW_Dark_Purple_50, var(--fw_dark_purple_50, #82808c))", p = "2rem", m = "-2.25rem", h = "-1.1rem", g = "0rem", _ = -180, v = 0, y = 45, b = .42, x = "power3.out", S = "none", C = "site-accordion-styles", w = !1, T = 0, E = [];
function D() {
	if (document.getElementById(C)) return;
	let e = document.createElement("style");
	e.id = C, e.textContent = "\n    .accordion_item {\n      border-bottom: 0.5px solid var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a));\n      padding-top: var(--accordion-item-padding-y, 1rem);\n      padding-bottom: var(--accordion-item-padding-y, 1rem);\n    }\n\n    .accordion_section > .accordion_item:first-child,\n    .accordion_item:first-child {\n      border-top: 0.5px solid var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a));\n    }\n\n    .accordion_section + .accordion_section > .accordion_item:first-child {\n      border-top: 0;\n    }\n  ", document.head.append(e);
}
function O(e, t) {
	return e.classList.contains("is-open") || e.classList.contains("is-active") || e.hasAttribute("data-accordion-open") || t.getAttribute("aria-expanded") === "true";
}
function k(e) {
	return e ? t("path, circle, rect, polygon, line, polyline", e) : [];
}
function A(e, t) {
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
function j(e, t) {
	e.icon && (n.to([e.icon, ...e.iconShapes], {
		color: t,
		fill: t,
		duration: b * .75,
		ease: x,
		overwrite: "auto"
	}), e.iconShapes.filter((e) => {
		let t = e.getAttribute("stroke");
		return !!(t && t !== "none");
	}).forEach((e) => {
		n.to(e, {
			stroke: t,
			duration: b * .75,
			ease: x,
			overwrite: "auto"
		});
	}));
}
function M(e, t) {
	if (!e.icon) return;
	let r = {
		normal: {
			x: m,
			rotation: _,
			color: f
		},
		hover: {
			x: h,
			rotation: v,
			color: d
		},
		open: {
			x: g,
			rotation: y,
			color: d
		}
	}[t];
	n.to(e.icon, {
		x: r.x,
		rotation: r.rotation,
		duration: b,
		ease: S,
		force3D: !0,
		overwrite: "auto"
	}), j(e, r.color);
}
function N(e, t) {
	e.heading && n.to(e.heading, {
		x: t ? p : 0,
		color: t ? d : "",
		duration: b,
		ease: x,
		overwrite: "auto",
		clearProps: t ? void 0 : "color"
	});
}
function P(t, r, i = !1) {
	n.to(t.body, {
		x: r ? p : 0,
		duration: i || e() ? 0 : b,
		ease: x,
		overwrite: "auto"
	});
}
function F(e) {
	e.section.classList.toggle("is-open", e.isOpen), e.section.classList.toggle("is-active", e.isOpen), e.itemElement.classList.toggle("is-open", e.isOpen), e.header.classList.toggle("is-open", e.isOpen), e.header.setAttribute("aria-expanded", String(e.isOpen));
}
function I(t, r = !1) {
	let { body: i } = t;
	if (n.killTweensOf(i), P(t, t.isOpen, r), e() || r) {
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
			duration: b,
			ease: x,
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
		duration: b * .85,
		ease: x
	});
}
function L(e, t) {
	e.isOpen !== t && (e.isOpen = t, F(e), I(e), N(e, e.isOpen || !e.isOpen && e.header.matches(":hover")), M(e, e.isOpen ? "open" : e.header.matches(":hover") ? "hover" : "normal"));
}
function R(e) {
	var t, n;
	T += 1;
	let r = e.body.id || ((t = e.content) == null ? void 0 : t.id) || `accordion-content-${T}`;
	e.body.id = r, e.header.setAttribute("role", "button"), e.header.setAttribute("tabindex", (n = e.header.getAttribute("tabindex")) == null ? "0" : n), e.header.setAttribute("aria-controls", r), e.header.setAttribute("aria-expanded", String(e.isOpen));
}
function z(e, t) {
	var r;
	let i = t.querySelector(o), a = t.querySelector(l), h = (r = a == null ? void 0 : a.querySelector(u)) == null ? t.querySelector(u) : r;
	if (!i || !a) return null;
	let v = i.querySelector(c), b = {
		section: e,
		itemElement: t,
		header: i,
		heading: i.querySelector(s),
		icon: v,
		iconShapes: k(v),
		content: h,
		body: a,
		isOpen: O(e, i)
	};
	return R(b), F(b), n.set(b.heading, {
		x: b.isOpen ? p : 0,
		color: b.isOpen ? d : "",
		transformOrigin: "left center",
		willChange: "transform, color"
	}), n.set(b.body, {
		x: b.isOpen ? p : 0,
		willChange: "transform, height, opacity"
	}), b.icon && (n.set(b.icon, {
		x: b.isOpen ? g : m,
		rotation: b.isOpen ? y : _,
		transformOrigin: "50% 50%",
		transformBox: "fill-box",
		willChange: "transform",
		flexShrink: 0
	}), A(b, b.isOpen ? d : f)), I(b, !0), b.header.addEventListener("click", () => {
		L(b, !b.isOpen);
	}), b.header.addEventListener("keydown", (e) => {
		e.key !== "Enter" && e.key !== " " || (e.preventDefault(), L(b, !b.isOpen));
	}), b.header.addEventListener("mouseenter", () => {
		b.isOpen || (N(b, !0), M(b, "hover"));
	}), b.header.addEventListener("mouseleave", () => {
		b.isOpen || N(b, !1), M(b, b.isOpen ? "open" : "normal");
	}), b;
}
function B(e = document) {
	return w ? E : (w = !0, D(), t(r, e).forEach((e) => {
		let n = t(i, e), r = t(a, e);
		(n.length > 0 ? n : r.length > 0 ? r : [e]).forEach((t) => {
			let n = z(e, t);
			n && E.push(n);
		});
	}), E);
}
function V() {
	B();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", V, { once: !0 }) : V();
//#endregion
export { B as initAccordions };

//# sourceMappingURL=accordion.js.map