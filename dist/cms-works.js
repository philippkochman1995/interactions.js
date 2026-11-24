import { t as e } from "./site-interactions-DTXrvFAf.js";
import { l as t, m as n, o as r } from "./site-interactions-Cou7uu3t.js";
import { t as i } from "./site-interactions-BxJ-FVg3.js";
import { a, t as o } from "./site-interactions-HQKELVCL.js";
import { createDetailSection as s, createRelatedSection as c, fitDetailImage as l, pickRelatedItems as u } from "./cms-work-detail.js";
//#region src/cms-works-filter.ts
var d = "\n  <svg width=\"14.45\" height=\"10.2\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z\" fill=\"currentColor\"/>\n    <path d=\"M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z\" fill=\"currentColor\"/>\n    <path d=\"M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z\" fill=\"currentColor\"/>\n  </svg>\n", f = "\n  <svg width=\"8.5\" height=\"9.35\" viewBox=\"0 0 10 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M6 9L6 0L4 -8.74228e-08L4 9L6 9Z\" fill=\"currentColor\"/>\n    <path d=\"M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z\" fill=\"currentColor\"/>\n  </svg>\n", p = {
	random: "zufällig",
	year: "Entstehungsjahr"
}, m = ["year", "random"];
function h(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		e.categories.forEach((e) => {
			var n;
			t.set(e, ((n = t.get(e)) == null ? 0 : n) + 1);
		});
	}), Array.from(t, ([e, t]) => ({
		name: e,
		count: t
	})).sort((e, t) => e.name.localeCompare(t.name, "de", { sensitivity: "base" }));
}
function g(e, t) {
	let n = document.createElement("span");
	return n.className = t, n.innerHTML = e, n;
}
function _(e, t, n, r = {}) {
	let i = document.createElement("section"), a = document.createElement("div"), o = document.createElement("div"), s = document.createElement("span"), c = document.createElement("span"), l = document.createElement("span"), u = document.createElement("span"), _ = document.createElement("span"), v = document.createElement("div"), y = document.createElement("div"), b = document.createElement("div"), x = document.createElement("div"), S = document.createElement("div"), C = document.createElement("div"), w = document.createElement("span"), T = document.createElement("div"), E = document.createElement("button"), D = document.createElement("a"), O = h(e), k = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
	i.className = "cms-works-filter u-section", a.className = "cms-works-filter__container u-container", o.className = "cms-works-filter__bar", o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), o.setAttribute("aria-expanded", "false"), s.className = "cms-works-filter__bar-left", c.className = "cms-works-filter__label", c.textContent = "FILTER", l.className = "cms-works-filter__count", s.append(g(d, "cms-works-filter__filter-icon"), c, l), u.className = "cms-works-filter__bar-right", _.className = "cms-works-filter__sort-label", _.textContent = "SORTIERUNG", x.className = "cms-works-filter__sort-controls", u.append(_, x, g(f, "cms-works-filter__arrow-icon")), o.append(s, u), v.className = "cms-works-filter__panel u-section", y.className = "cms-works-filter__panel-inner u-container", b.className = "cms-works-filter__categories", S.className = "cms-works-filter__mobile-sort-section", C.className = "cms-works-filter__mobile-sort-heading", w.className = "cms-works-filter__sort-label", w.textContent = "SORTIERUNG", T.className = "cms-works-filter__mobile-sort-controls", C.append(g(f, "cms-works-filter__arrow-icon"), w), S.append(C, T), O.forEach((e) => {
		let n = document.createElement("button"), r = document.createElement("span"), i = document.createElement("span");
		n.className = "cms-works-filter__pill", n.type = "button", n.setAttribute("aria-pressed", "false"), r.textContent = e.name, i.className = "cms-works-filter__pill-count", i.textContent = `[${e.count}]`, n.append(r, i), n.addEventListener("click", () => {
			t.pendingCategories.has(e.name) ? t.pendingCategories.delete(e.name) : t.pendingCategories.add(e.name), M();
		}), k.set(e.name, n), b.append(n);
	}), m.forEach((e) => {
		let n = document.createElement("button");
		n.className = "cms-works-filter__sort-option", n.type = "button", n.textContent = p[e], n.setAttribute("aria-pressed", "false"), n.addEventListener("click", (n) => {
			n.stopPropagation(), t.open || N(), t.pendingSortMode = e, M();
		}), A.set(e, n), x.append(n);
		let r = document.createElement("button");
		r.className = "cms-works-filter__mobile-sort-option", r.type = "button", r.textContent = p[e], r.setAttribute("aria-pressed", "false"), r.addEventListener("click", () => {
			t.pendingSortMode = e, M();
		}), T.append(r);
	}), E.className = "cms-works-filter__reset", E.type = "button", E.textContent = "Filter zurücksetzen", E.addEventListener("click", () => {
		t.pendingCategories.clear(), j();
	}), D.className = "cms-works-filter__apply", D.href = "#", D.textContent = "ANWENDEN", D.addEventListener("click", (e) => {
		e.preventDefault(), j();
	});
	function j() {
		t.open && (t.appliedCategories = new Set(t.pendingCategories), t.appliedSortMode = t.pendingSortMode, P(!1), n());
	}
	y.append(b, E, S), v.append(y, D), a.append(o), i.append(a, v);
	function M() {
		l.textContent = `[${t.appliedCategories.size}]`, i.classList.toggle("is-open", t.open), o.setAttribute("aria-expanded", t.open ? "true" : "false"), k.forEach((e, n) => {
			var r, i;
			let a = t.pendingCategories.has(n), o = e.querySelector(".cms-works-filter__pill-count");
			if (e.classList.toggle("is-active", a), e.setAttribute("aria-pressed", a ? "true" : "false"), e.tabIndex = t.open ? 0 : -1, o) {
				if (a) {
					o.textContent = "✕";
					return;
				}
				o.textContent = `[${(r = (i = O.find((e) => e.name === n)) == null ? void 0 : i.count) == null ? 0 : r}]`;
			}
		}), A.forEach((e, n) => {
			let r = (t.open ? t.pendingSortMode : t.appliedSortMode) === n, i = t.open || r;
			e.classList.toggle("is-active", r), e.classList.toggle("is-collapsed", !i), e.setAttribute("aria-pressed", r ? "true" : "false"), e.setAttribute("tabindex", i ? "0" : "-1");
		}), T.querySelectorAll("button").forEach((e, n) => {
			let r = m[n] === t.pendingSortMode;
			e.classList.toggle("is-active", r), e.setAttribute("aria-pressed", r ? "true" : "false"), e.tabIndex = t.open || r ? 0 : -1;
		}), E.tabIndex = t.open ? 0 : -1, D.tabIndex = t.open ? 0 : -1, v.style.setProperty("--cms-works-filter-categories-height", `${b.scrollHeight}px`), v.style.setProperty("--cms-works-filter-sort-height", `${T.scrollHeight}px`), v.style.setProperty("--cms-works-filter-panel-height", `${v.scrollHeight}px`);
	}
	function N() {
		var e;
		t.open || (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode, t.open = !0, M(), (e = r.onOpenChange) == null || e.call(r, !0));
	}
	function P(e) {
		var n;
		t.open && (e && (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode), t.open = !1, M(), (n = r.onOpenChange) == null || n.call(r, !1));
	}
	return o.addEventListener("click", (e) => {
		x.contains(e.target) || (t.open ? P(!0) : N());
	}), o.addEventListener("keydown", (e) => {
		e.target !== o || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), t.open ? P(!0) : N());
	}), S.addEventListener("click", () => {
		t.open || N();
	}), document.addEventListener("keydown", (e) => {
		e.key === "Escape" && t.open && P(!0);
	}), document.addEventListener("pointerdown", (e) => {
		!t.open || i.contains(e.target) || j();
	}), window.addEventListener("resize", () => {
		v.style.setProperty("--cms-works-filter-panel-height", `${v.scrollHeight}px`);
	}), M(), {
		element: i,
		sync: M,
		apply: j
	};
}
//#endregion
//#region src/modules/works-view-state.ts
var v = "site-works-view";
function y() {
	try {
		let e = window.sessionStorage.getItem(v);
		if (!e) return null;
		let t = JSON.parse(e);
		return !t || !Array.isArray(t.categories) || typeof t.visibleCount != "number" ? null : (t.sort !== "year" && t.sort !== "random" && (t.sort = "year"), t);
	} catch (e) {
		return null;
	}
}
function b(e) {
	try {
		window.sessionStorage.setItem(v, JSON.stringify(e));
	} catch (e) {}
}
function x() {
	try {
		let e = window.performance.getEntriesByType("navigation")[0];
		return (e == null ? void 0 : e.type) === "back_forward";
	} catch (e) {
		return !1;
	}
}
//#endregion
//#region node_modules/gsap/utils/matrix.js
var S, C, w, T, E, D, O, k, A = "transform", j = A + "Origin", M, N = function(e) {
	var t = e.ownerDocument || e;
	for (!(A in e.style) && ("msTransform" in e.style) && (A = "msTransform", j = A + "Origin"); t.parentNode && (t = t.parentNode););
	if (C = window, O = new G(), t) {
		S = t, w = t.documentElement, T = t.body, k = S.createElementNS("http://www.w3.org/2000/svg", "g"), k.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", M = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, P = function(e) {
	for (var t, n; e && e !== T;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, ee = [], F = [], I = function() {
	return C.pageYOffset || S.scrollTop || w.scrollTop || T.scrollTop || 0;
}, L = function() {
	return C.pageXOffset || S.scrollLeft || w.scrollLeft || T.scrollLeft || 0;
}, R = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, z = function e(t) {
	if (C.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, B = function e(t, n) {
	if (t.parentNode && (S || N(t))) {
		var r = R(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = S.createElementNS ? S.createElementNS(i.replace(/^https/, "http"), a) : S.createElement(a);
		return n && (r ? (D || (D = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), D.appendChild(l)) : (E || (E = e(t), Object.assign(E.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), E.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, V = function(e) {
	for (var t = new G(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, H = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[A], e.style[A] = "none", e.appendChild(k), t = k.getCTM(), e.removeChild(k), n ? e.style[A] = n : e.style.removeProperty(A.replace(/([A-Z])/g, "-$1").toLowerCase())), t || O.clone();
}, U = function(e, t) {
	var n = R(e), r = e === n, i = n ? ee : F, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === C) return e;
	if (i.length || i.push(B(e, 1), B(e, 2), B(e, 3)), s = n ? D : E, n) r ? (l = H(e), u = -l.e / l.a, d = -l.f / l.d, c = O) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? V(c) : c.getItem(0).matrix : O, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new G(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, M) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (C.getComputedStyle(l)[A] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = C.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[A] = f[A], l[j] = f[j], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, W = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, G = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), W(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return W(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return W(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
	}, t.clone = function() {
		return new e(this.a, this.b, this.c, this.d, this.e, this.f);
	}, t.equals = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f;
		return t === e.a && n === e.b && r === e.c && i === e.d && a === e.e && o === e.f;
	}, t.apply = function(e, t) {
		t === void 0 && (t = {});
		var n = e.x, r = e.y, i = this.a, a = this.b, o = this.c, s = this.d, c = this.e, l = this.f;
		return t.x = n * i + r * o + c || 0, t.y = n * a + r * s + l || 0, t;
	}, e;
}();
function K(e, t, n, r) {
	if (!e || !e.parentNode || (S || N(e)).documentElement === e) return new G();
	var i = P(e), a = R(e) ? ee : F, o = U(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && z(e), f = new G((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : L()), s.top + (d ? 0 : I()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region node_modules/gsap/Flip.js
var te = 1, q, J, Y, X, Z, Q, ne, re = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, ie = {}, ae = 180 / Math.PI, oe = Math.PI / 180, se = {}, ce = {}, le = {}, ue = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, de = ue("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), fe = ue("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), pe = function(e) {
	return q(e)[0] || console.warn("Element not found:", e);
}, me = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, he = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, ge = {
	zIndex: 1,
	kill: 1,
	simple: 1,
	spin: 1,
	clearProps: 1,
	targets: 1,
	toggleClass: 1,
	onComplete: 1,
	onUpdate: 1,
	onInterrupt: 1,
	onStart: 1,
	delay: 1,
	repeat: 1,
	repeatDelay: 1,
	yoyo: 1,
	scale: 1,
	fade: 1,
	absolute: 1,
	props: 1,
	onEnter: 1,
	onLeave: 1,
	custom: 1,
	paused: 1,
	nested: 1,
	prune: 1,
	absoluteOnLeave: 1
}, _e = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, ve = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, ye = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, be = {}, xe = function(e) {
	var t = be[e] = ue(e);
	return le[e] = t.concat(fe), t;
}, Se = function(e) {
	var t = e._gsap || J.core.getCache(e);
	return t.gmCache === J.ticker.frame ? t.gMatrix : (t.gmCache = J.ticker.frame, t.gMatrix = K(e, !0, !1, !0));
}, Ce = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, we = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = Ce(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, Te = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : ce[a] || (ce[a] = ve(a)), o);
	return n;
}, Ee = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, De = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(Ee);
}, Oe = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), ke = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), Y && n !== 1) return Y._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), Y._final.push(function() {
		return (e.cache.uncache = 1) && Ee(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (Te(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), Te(e, Oe), f = window.getComputedStyle(r); l--;) c[Oe[l]] = f[Oe[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new Ze(r);
	else if (u = ye(e, se), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new G(1, 0, 0, 1, p.left + L(), p.top + I());
	} else u.matrix = K(r, !1, !1, !0);
	return u = ze(u, e, !0), e.x = Q(u.x, .01), e.y = Q(u.y, .01), r;
}, Ae = function(e, t) {
	return t !== !0 && (t = q(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, je = function(e) {
	return we(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && ke(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, Me = function(e, t) {
	return t && e.idLookup[Ne(t).id] || e.elementStates[0];
}, Ne = function(e, t, n, r) {
	return e instanceof Ze ? e : e instanceof $ ? Me(e, r) : new Ze(typeof e == "string" ? pe(e) || console.warn(e + " not found") : e, t, n);
}, Pe = function(e, t) {
	for (var n = J.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, Fe = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, Ie = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + te++), t;
}, Le = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, Re = function(e, t, n) {
	return e && t.length && n.add(e(Le(t), n, new $(t, 0, !0)), 0);
}, ze = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && ne && ne(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, C = !S && e.simple && t.simple && !i, w, T, E, D, O, k, A;
	return C || !c ? (p = m = 1, h = w = 0) : (O = Se(c), k = O.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = me(Math.atan2(k.b, k.a) * ae), w = me(Math.atan2(k.c, k.d) * ae + h) % 360, p = Math.sqrt(k.a ** 2 + k.b ** 2), m = Math.sqrt(k.c ** 2 + k.d ** 2) * Math.cos(w * oe), i && (i = q(i)[0], D = J.getProperty(i), A = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: D("scaleX"),
		scaleY: D("scaleY"),
		width: A ? A.width : Math.ceil(parseFloat(D("width", "px"))),
		height: A ? A.height : parseFloat(D("height", "px"))
	}), s.rotation = h + "deg", s.skewX = w + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = Q(d * p / v.scaleX, 0), f = Q(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && Fe(o, t.props), C || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), k = K(i || o, !1, !1, !0), T = O.apply({
		x: k.e,
		y: k.f
	}), E = O.apply({
		x: b,
		y: x
	}), l += E.x - T.x, u += E.y - T.y) : (O.e = O.f = 0, E = O.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += E.x, u += E.y), l = Q(l, .02), u = Q(u, .02), a && !(a instanceof Ze) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = w, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, Be = function(e, t) {
	return e instanceof $ ? e : new $(e, t);
}, Ve = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, He = [], Ue = "width,height,overflowX,overflowY".split(","), We, Ge = function(e) {
	if (e !== We) {
		var t = Z.style, n = Z.clientWidth === window.outerWidth, r = Z.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) He[i] = t[Ue[i]];
			n && (t.width = Z.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = Z.clientHeight + "px", t.overflowX = "hidden"), We = e;
		} else if (We) {
			for (; i--;) He[i] ? t[Ue[i]] = He[i] : t.removeProperty(ve(Ue[i]));
			We = e;
		}
	}
}, Ke = function(e, t) {
	for (var n = 0; n < e.length; n += 3) J.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, qe = function(e, t, n, r) {
	e instanceof $ && t instanceof $ || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, C = i.prune, w = ("props" in n ? n : e).props, T = ye(n, ge), E = J.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), D = T, O = [], k = [], A = [], j = [], M = S === !0 ? 1 : S || 0, N = typeof S == "function" ? S : function() {
		return M;
	}, P = e.interrupted || t.interrupted, ee = E[r === 1 ? "from" : "to"], F, I, L, R, z, B, V, H, U, W, G, te, q, X;
	for (I in t.idLookup) G = t.alt[I] ? Ve(t, e, I) : t.idLookup[I], z = G.element, W = e.idLookup[I], e.alt[I] && z === W.element && (e.alt[I].isVisible || !G.isVisible) && (W = e.alt[I]), W ? (B = {
		t: z,
		b: W,
		a: G,
		sd: W.element === z ? 0 : G.isVisible ? 1 : -1
	}, A.push(B), B.sd && (B.sd < 0 && (B.b = G, B.a = W), P && Te(B.b, w ? le[w] : fe), b && A.push(B.swap = {
		t: W.element,
		b: B.b,
		a: B.a,
		sd: -B.sd,
		swap: B
	})), z._flip = W.element._flip = Y ? Y.timeline : E) : G.isVisible && (A.push({
		t: z,
		b: ye(G, { isVisible: 1 }),
		a: G,
		sd: 0,
		entering: 1
	}), z._flip = Y ? Y.timeline : E);
	if (w && (be[w] || xe(w)).forEach(function(e) {
		return T[e] = function(t) {
			return A[t].a.props[e];
		};
	}), A.finalStates = U = [], te = function() {
		we(A), Ge(!0);
		var t = [];
		for (R = 0; R < A.length; R++) B = A[R], q = B.a, X = B.b, C && !q.isDifferent(X) && !B.entering ? A.splice(R--, 1) : (z = B.t, _ && !(B.sd < 0) && R && (q = B.a = q.clone({ matrix: K(z, !1, !1, !0) })), X.isVisible && q.isVisible ? (B.sd < 0 ? (_ && Ke(t, 1), V = new Ze(z, w, e.simple), ze(V, q, y, 0, 0, V), V.matrix = K(z, !1, !1, !0), V.bounds = z.getBoundingClientRect(), V.css = B.b.css, B.a = q = V, b && (z.style.opacity = P ? X.opacity : q.opacity), x && j.push(z), _ && (Ke(t, 2), t.push(z, z.getAttribute("style")))) : B.sd > 0 && b && (z.style.opacity = P ? q.opacity - X.opacity : "0"), ze(q, X, y, w), _ && B.sd < 0 && t.push(z.getAttribute("style"))) : X.isVisible !== q.isVisible && (X.isVisible ? q.isVisible || (X.css = q.css, k.push(X), A.splice(R--, 1), c && _ && ze(q, X, y, w)) : (q.isVisible && O.push(q), A.splice(R--, 1))), y || (z.style.maxWidth = Math.max(q.width, X.width) + "px", z.style.maxHeight = Math.max(q.height, X.height) + "px", z.style.minWidth = Math.min(q.width, X.width) + "px", z.style.minHeight = Math.min(q.height, X.height) + "px"), _ && g && z.classList.add(g)), U.push(q);
		var r;
		if (g && (r = U.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), Ge(!1), y ? (T.scaleX = function(e) {
			return A[e].a.scaleX;
		}, T.scaleY = function(e) {
			return A[e].a.scaleY;
		}) : (T.width = function(e) {
			return A[e].a.width + "px";
		}, T.height = function(e) {
			return A[e].a.height + "px";
		}, T.autoRound = n.autoRound || !1), T.x = function(e) {
			return A[e].a.x + "px";
		}, T.y = function(e) {
			return A[e].a.y + "px";
		}, T.rotation = function(e) {
			return A[e].a.rotation + (S ? N(e, H[e], H) * 360 : 0);
		}, T.skewX = function(e) {
			return A[e].a.skewX;
		}, H = A.map(function(e) {
			return e.t;
		}), (v || v === 0) && (T.modifiers = { zIndex: function() {
			return v;
		} }, T.zIndex = v, T.immediateRender = n.immediateRender !== !1), b && (T.opacity = function(e) {
			return A[e].sd < 0 ? 0 : A[e].sd > 0 ? A[e].a.opacity : "+=0";
		}), j.length) {
			x = J.utils.distribute(x);
			var i = H.slice(j.length);
			T.stagger = function(e, t) {
				return x(~j.indexOf(t) ? H.indexOf(A[e].swap.t) : e, t, i);
			};
		}
		if (de.forEach(function(e) {
			return n[e] && E.eventCallback(e, n[e], n[e + "Params"]);
		}), u && H.length) for (I in D = ye(T, ge), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) F = ye(u[I], _e), F[I] = T[I], !("duration" in F) && "duration" in T && (F.duration = T.duration), F.stagger = T.stagger, ee.call(E, H, F, 0), delete D[I];
		(H.length || k.length || O.length) && (g && E.add(function() {
			return he(r, g, E._zTime < 0 ? "remove" : "add");
		}, 0) && !f && he(r, g, "add"), H.length && ee.call(E, H, D, 0)), Re(o, O, E), Re(s, k, E);
		var l = Y && Y.timeline;
		l && (l.add(E, 0), Y._final.push(function() {
			return De(A, !a);
		})), L = E.duration(), E.call(function() {
			var e = E.time() >= L;
			e && !l && De(A, !a), g && he(r, g, e ? "remove" : "add");
		});
	}, l && (c = A.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), Y) {
		var Z;
		c && (Z = Y._abs).push.apply(Z, Ae(A, c)), Y._run.push(te);
	} else c && je(Ae(A, c)), te();
	var Q = Y ? Y.timeline : E;
	return Q.revert = function() {
		return Ye(Q, 1, 1);
	}, Q;
}, Je = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, Ye = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (Je(e), t < 2 && e.progress(1), e.kill()), !0;
}, Xe = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, $ = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = Le(e), this.elementStates = e, Xe(this);
		else {
			this.targets = q(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			Y && !r && Y._kill.push(this), this.update(r || !!Y);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new Ze(e, t.props, t.simple);
		}), Xe(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, Xe(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = we(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = K(o.element, !1, !1, !0)), s = i[o.id], s && ze(o, s, t, !0, 0, o), o.matrix = K(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || se;
		return (t in n ? n : n.props || se)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Xe(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? Ve(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = le[this.props] || fe, t = this.elementStates.length; t--;) Te(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = Ye(i, +!e);
			e && a && n.indexOf(i) < 0 && i.add(function() {
				return t.updateVisibility();
			}), a && n.push(i);
		}), !e && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length);
	}, t.updateVisibility = function() {
		this.elementStates.forEach(function(e) {
			var t = e.element.getBoundingClientRect();
			e.isVisible = !!(t.width || t.height || t.top || t.left), e.uncache = 1;
		});
	}, t.getElementState = function(e) {
		return this.elementStates[this.targets.indexOf(pe(e))];
	}, t.makeAbsolute = function() {
		return we(this.elementStates.slice(0), !0, !0).map(ke);
	}, e;
}(), Ze = /*#__PURE__*/ function() {
	function e(t, n, r) {
		t instanceof e ? Object.assign(this, t, n || {}) : (this.element = t, this.update(n, r));
	}
	var t = e.prototype;
	return t.isDifferent = function(e) {
		var t = this.bounds, n = e.bounds;
		return t.top !== n.top || t.left !== n.left || t.width !== n.width || t.height !== n.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props);
	}, t.clone = function(t) {
		return new e(this, t);
	}, t.update = function(e, t) {
		var n = this, r = n.element, i = J.getProperty(r), a = J.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new G(1, 0, 0, 1, o.left + L(), o.top + I()) : K(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = Ie(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : Q(i("width", "px"), .04), n.height = s ? s.height : Q(i("height", "px"), .04), e && Pe(n, be[e] || xe(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && H(r).inverse(), n.simple = t || me(c.a) === 1 && !me(c.b) && !me(c.c) && me(c.d) === 1, n.uncache = 0;
	}, e;
}(), Qe = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), $e = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new $(), this.timeline = J.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new Qe(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = Y, r = X;
		return Y = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, X = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), X = r, Y = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = Y, n = this.timeline, r = this.actions.length, i, a;
		for (Y = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new $(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare(et.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), je(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), re(e, "onComplete"));
		}), Y = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return re(this, "onStart"), n.restart(), this;
	}, t.loadState = function(e) {
		e || (e = function() {
			return 0;
		});
		var t = [];
		return this.actions.forEach(function(n) {
			if (n.vars.loadState) {
				var r, i = function i(a) {
					a && (n.targets = a), r = t.indexOf(i), ~r && (t.splice(r, 1), t.length || e());
				};
				t.push(i), n.vars.loadState(i);
			}
		}), t.length || e(), this;
	}, t.setState = function() {
		return this.actions.forEach(function(e) {
			return e.targets = e.vars.setState && e.vars.setState(e);
		}), this;
	}, t.killConflicts = function(e) {
		return this.state.interrupt(e), this._kill.forEach(function(t) {
			return t.interrupt(e);
		}), this;
	}, t.run = function(e, t) {
		var n = this;
		return this !== Y && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete ie[this.id];
	}, e;
}(), et = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = Be(t, n);
		return X && X.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), qe(e, Be(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return qe(e, Be(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return qe(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? ye(n, _e) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && pe(n.fitChild), p = Ne(t, c, d, e), m = Ne(e, 0, d, p), h = c ? le[c] : fe, g = J.context();
		return c && Fe(r, p.props), Te(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			Ee(m), u && u.apply(this, arguments);
		}), a && ke(m, p), r = ze(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return Ee(m);
			};
		}), s ? r : r.duration ? J.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof $ ? e : new $(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), ie[e] || (ie[e] = new $e(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof $ ? e.targets : q(e)).forEach(function(e) {
			return e && Ye(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (pe(e) || se)._flip;
	}, e.getElementState = function(e, t) {
		return new Ze(pe(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = K(t, !0, !0).multiply(K(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (Z = typeof document < "u" && document.body, Z) {
			J = e, N(Z), q = J.utils.toArray, ne = J.core.getStyleSaver;
			var t = J.utils.snap(.1);
			Q = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
et.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin(et);
//#endregion
//#region src/work-manifest.json
var tt = /*#__PURE__*/ JSON.parse("[{\"id\":\"gerngrosssaule\",\"href\":\"/werke/gerngrosssaule\",\"title\":\"„Gerngrosssäule“\",\"year\":\"2007\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Franz West, Heidulf Gerngross<br>„Gerngrosssäule”, 2007<br>Betonguss<br>Säule: 546 cm, Ei: 50 cm</p><p>‍</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"imageAlt\":\"„Gerngrosssäule“\",\"caption\":\"\"},{\"id\":\"rueckkehr-zu-freud\",\"href\":\"/werke/rueckkehr-zu-freud\",\"title\":\"„Rückkehr zu Freud“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>20 x 22,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"imageAlt\":\"„Rückkehr zu Freud“\",\"caption\":\"Heinz Neumann\"},{\"id\":\"passstueck-um-1975\",\"href\":\"/werke/passstueck-um-1975\",\"title\":\"Passstück\",\"year\":\"um 1975\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Eisendraht, Gaze, Gips, Farbe<br>35 x 53 x 22 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Stefan Altenburger, Courtesy Galerie Presenhuber Zürich\"},{\"id\":\"krauses-gekroese-2014\",\"href\":\"/werke/krauses-gekroese-2014\",\"title\":\"„Krauses Gekröse“\",\"year\":\"2014, nach einem Entwurf von 2011, Herstellung posthum\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Kunstharzlack<br>1100 x 550 x 650 cm</p>\",\"html\":\"\",\"view\":\"Arles, 2022\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"imageAlt\":\"„Krauses Gekröse“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"chaiselongue-1994\",\"href\":\"/werke/chaiselongue-1994\",\"title\":\"Chaiselongue\",\"year\":\"1994\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stoff, Stahl, Schaumgummi<br>90,5 x 152,5 x 100 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"imageAlt\":\"Chaiselongue\",\"caption\":\"Courtesy  Phillips, London\"},{\"id\":\"kasseler-rippchen-1996\",\"href\":\"/werke/kasseler-rippchen-1996\",\"title\":\"„Kasseler Rippchen”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>18teilige Installation bestehend aus Arbeiten verschiedener Künstler:innen<br>zehnteilige Bilderwand, drei Objekte, zwei Tische, drei Stühle<br>Metall, Holz, Gips, Plastik, Farbe, Leinen<br>Maße variabel<br>Bilder:<br>Werner Büttner: 80 x 60 cm<br>Martin Kippenberger: 60 x 50,3 x 4,3 (tief) cm<br>Albert Oehlen: 67,3 x 56 x 2,8 (tief) cm<br>Heimo Zobernig: 100 x 150 cm<br>Herbert Brandl: 79 x 110 cm<br>Janc Szenizcei: 31,5 x 25,5 cm<br>Kiki Smith: 58,5 x 81 cm<br>Mary Heilman: 38 x 33 cm<br>Vittore Pisano: 43,3 x 53,3 cm<br>Rudolf Polanszky: 74,5 x 61,5 x 8,5 cm<br>Objekte:<br>Wolfgang Winter: 46 x 96 x 21 cm<br>Andreas Rohrbach: 214 x 17 x 10 cm<br>Jason Rhoades: 110 x 116 x 65,5 cm<br>Michael Kienzer: 22 x 22 x 22 cm<br>unbekannt: 31,5 x 16 x 10 cm (kl. Flasche, ummantelt, auf Tisch)<br>Franz West:<br>Tisch 1: 74 x 65 x 50 cm<br>Tisch 2: 122 x 44 x 44 cm<br>3 Stühle: 84 x 43 x 44 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 2019\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"imageAlt\":\"„Kasseler Rippchen”\",\"caption\":\"Stefan Altenburger\"},{\"id\":\"ot-fuer-ettore-spalletti-1991\",\"href\":\"/werke/ot-fuer-ettore-spalletti-1991\",\"title\":\"o.T. (für Ettore Spalletti)\",\"year\":\"1991\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Gaze, Gips<br>200 x 40 x 40 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"imageAlt\":\"o.T. (für Ettore Spalletti)\",\"caption\":\"\"},{\"id\":\"labstueck-1986\",\"href\":\"/werke/labstueck-1986\",\"title\":\"Labstück\",\"year\":\"1986\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metaxaflasche, Polyester, Holz<br>113 x 37 x 12 cm, Sockel: 124,5 x 139,5 x 35 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"Courtesy Galerie Capitain\"},{\"id\":\"liege-vermeer\",\"href\":\"/werke/liege-vermeer\",\"title\":\"Liege (Vermeer)\",\"year\":\"1989\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl<br>88 x 136 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"imageAlt\":\"Liege (Vermeer)\",\"caption\":\"Courtesy Nachlass Günther Förg\"},{\"id\":\"extroversion-2000-2011\",\"href\":\"/werke/extroversion-2000-2011\",\"title\":\"„Extroversion“\",\"year\":\"2000-2011\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 43 Kunstwerken von Franz West und weiteren Künstler:innen<br>diverse Materialien, Pavillon<br>(inkl. hängende und stehende Objekten): ca. 345 (H) x 800 x 900 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht 21er Haus, 2016\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"imageAlt\":\"„Extroversion“\",\"caption\":\"Hannes Stoll\"},{\"id\":\"onkel-stuhl-2001-2009\",\"href\":\"/werke/onkel-stuhl-2001-2009\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"den-anrainern-zuliebe-2001\",\"href\":\"/werke/den-anrainern-zuliebe-2001\",\"title\":\"\\\"Den Anrainern zuliebe”\",\"year\":\"2001\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>5 Sitzwuste<br>Aluminium lackiert<br>zw. 684 + 716 cm (L), je 60 cm (Ø)</p>\",\"html\":\"\",\"view\":\"Westersingel, Rotterdam, 2012\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"imageAlt\":\"\\\"Den Anrainern zuliebe”\",\"caption\":\"© Jannes Linders & Sculpture International Rotterdam / CBK Rotterdam\"},{\"id\":\"ot-um-1982-83\",\"href\":\"/werke/ot-um-1982-83\",\"title\":\"o.T.\",\"year\":\"um 1982/83\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage auf Geschenkpapier<br>34,5 x 50 cm, Rahmen: 52 x 67 x 2,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Galerie Meyer Kainer\"},{\"id\":\"ot-1972\",\"href\":\"/werke/ot-1972\",\"title\":\"o.T.\",\"year\":\"1972\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Papier<br>13,7 x 21 cm<br>Rahmen: 25,1 x 31,1 x 3,2 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"ot-1982\",\"href\":\"/werke/ot-1982\",\"title\":\"o.T.\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gips, Wellpappe<br>185 x 57 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"plakatentwurf-sequence-1-2007\",\"href\":\"/werke/plakatentwurf-sequence-1-2007\",\"title\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"year\":\"2007\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>beidseitig: Collage, Acryl auf Digital Print (recto); Acryl, Lack, Digital Prints, Fotos collagiert (verso)<br>65,5 (H) x 51 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"imageAlt\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"plakatentwurf-basel-1998\",\"href\":\"/werke/plakatentwurf-basel-1998\",\"title\":\"Plakatentwurf (Basel)\",\"year\":\"1998\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Digitalprint, Kugelschreiber, Acryl auf Schaumkarton<br>128 x 90,5 cm, Rahmen: 144 x 106,7 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"imageAlt\":\"Plakatentwurf (Basel)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"plakatentwurf-franz-west-at-david-zwirner-1996\",\"href\":\"/werke/plakatentwurf-franz-west-at-david-zwirner-1996\",\"title\":\"Plakatentwurf (Franz West at David Zwirner)\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Farbkopie, collagiert auf Karton<br>100 x 70 cm, Rahmen: 103,8 x 74,1 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"imageAlt\":\"Plakatentwurf (Franz West at David Zwirner)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"alibert-1996\",\"href\":\"/werke/alibert-1996\",\"title\":\"„Alibert\\\"\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Auflage: 200<br>Siebdruck 76 x 56 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"imageAlt\":\"„Alibert\\\"\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"passstueck-ende-1970er\",\"href\":\"/werke/passstueck-ende-1970er\",\"title\":\"Passstück\",\"year\":\"o.J. (Ende 1970er Jahre)\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Papiermache, Dispersionsfarbe <br>34,5 x 54 x 47 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"ot-2006\",\"href\":\"/werke/ot-2006\",\"title\":\"o.T.\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>230 x 305 x 280 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"lotus-2006\",\"href\":\"/werke/lotus-2006\",\"title\":\"„Lotus”\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>166 x 210 x 290 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"imageAlt\":\"„Lotus”\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"onkel-stuhl-2001-2009-2\",\"href\":\"/werke/onkel-stuhl-2001-2009-2\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"eggs-2006\",\"href\":\"/werke/eggs-2006\",\"title\":\"„Eggs“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>vierteilig<br>Epoxydharz, Kunstharzlack<br>je ca. 105 (H) x 140 x 110 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"imageAlt\":\"„Eggs“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"mayas-dream-2006\",\"href\":\"/werke/mayas-dream-2006\",\"title\":\"„Maya’s Dream“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz, Kunstharzlack, Beton<br>250 x 260 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"imageAlt\":\"„Maya’s Dream“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"ot-2012\",\"href\":\"/werke/ot-2012\",\"title\":\"o.T.\",\"year\":\"2012 (Fertigstellung posthum)\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>560 x 430 x 340 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"parrhesia-2012\",\"href\":\"/werke/parrhesia-2012\",\"title\":\"„Parrhesia“\",\"year\":\"2012\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>7 Skulpturen auf Sockel<br>Papiermaché, Styropor, Karton, Acryllack, Acrylfarbe, Stahl, Sockel: Holz<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"imageAlt\":\"„Parrhesia“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"variable-1997\",\"href\":\"/werke/variable-1997\",\"title\":\"„Variable”\",\"year\":\"1997\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Zehnteilige Bilderwand: zwei Wandobjekte, drei Schwarz-Weiß-Fotografien, zwei Siebdrucke, zwei Collagen, ein Plakatentwurf<br>150 x 320 x 10 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"imageAlt\":\"„Variable”\",\"caption\":\"Michaela Obermair\"},{\"id\":\"12-diwane-1996\",\"href\":\"/werke/12-diwane-1996\",\"title\":\"Aus der Installation „12 Diwane”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Schaumstoff, Jute, Teppich/Wolle (bzw. Baumwolle für die MAK Exemplare)<br>je 200 x 63 x 70 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"imageAlt\":\"Aus der Installation „12 Diwane”\",\"caption\":\"Courtesy Dorotheum\"},{\"id\":\"ot-2011\",\"href\":\"/werke/ot-2011\",\"title\":\"o.T.\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Styropor, Acryllack, Stahl<br>115 x 63 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"epiphanie-an-stuehlen-2011\",\"href\":\"/werke/epiphanie-an-stuehlen-2011\",\"title\":\"„Epiphanie an Stühlen“\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Hängende Skulptur, zwei StühleSkulptur: Stahl, PU-Schaum, Gaze, Dispersion<br>Ø 165 cm, 6 Arme je ca. 115 x 25 x 25 cm<br>Stühle: Stahl, Holz, Bambus, Leinen<br>je ca. 85 x 45 x 55 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"imageAlt\":\"„Epiphanie an Stühlen“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"echolalie\",\"href\":\"/werke/echolalie\",\"title\":\"„Echolalie“\",\"year\":\"2010\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 7 Skulpturen, 1 Clubfauteil, 2 Tröge<br>diverse Materialien und Dimensionen</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"imageAlt\":\"„Echolalie“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"meeting-point-2-modell-2000-2009\",\"href\":\"/werke/meeting-point-2-modell-2000-2009\",\"title\":\"„Meeting Point 2“ (Modell)\",\"year\":\"2000/2009\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Gips, Acrylglas, Holz, Karton<br>32 x 41 x 41 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"imageAlt\":\"„Meeting Point 2“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"ot-2007\",\"href\":\"/werke/ot-2007\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe, Farbkübel<br>126 x 113,5 x 74 cm<br>Sockel: 46 (H) x 102 x 77 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"ot-1977\",\"href\":\"/werke/ot-1977\",\"title\":\"o.T.\",\"year\":\"1977\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>ca. 20 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Generali Foundation\"},{\"id\":\"warum-ist-etwas-und-nicht-nichts-1997\",\"href\":\"/werke/warum-ist-etwas-und-nicht-nichts-1997\",\"title\":\"„Warum ist etwas und nicht nichts”\",\"year\":\"1997\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahlblech lackiert, Laminat<br>220 x 390 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"imageAlt\":\"„Warum ist etwas und nicht nichts”\",\"caption\":\"© Margherita Spiluttini\"},{\"id\":\"passstueck-bemalt-von-eugenia-rochas-1982\",\"href\":\"/werke/passstueck-bemalt-von-eugenia-rochas-1982\",\"title\":\"Passstück (bemalt von Eugenia Rochas)\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Holz, Farbe, Papier<br>56 x 53 x 26 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"imageAlt\":\"Passstück (bemalt von Eugenia Rochas)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"nycnac-2008\",\"href\":\"/werke/nycnac-2008\",\"title\":\"„NYCNAC“\",\"year\":\"2008\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Paravent mit Tapete, 2 bis 8 Passstücke und Video<br>Digitalprint, Acrylfarbe, Holz, Video<br>Kabine: 4 Flügel je 240 x 160 cm<br>Passstücke: je 100 x 20 x 25 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"imageAlt\":\"„NYCNAC“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"pommes-dadam-modell-2007\",\"href\":\"/werke/pommes-dadam-modell-2007\",\"title\":\"„Pommes d’Adam“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Modell mit vier Skulpturen in Vitrine<br>Papiermaché, Holz, Plexiglas<br>87 x 126 x 64 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"imageAlt\":\"„Pommes d’Adam“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"plakatentwurf-passstuecke-gagosian-gallery-n-y-2008\",\"href\":\"/werke/plakatentwurf-passstuecke-gagosian-gallery-n-y-2008\",\"title\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"year\":\"2008\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage, Digitalprint, Acryl auf Schaumkarton<br>113,5 x 132,6 cm<br>Rahmen: 124 x 143,5 x 5,5 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"imageAlt\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"passstueck-ohne-jahr\",\"href\":\"/werke/passstueck-ohne-jahr\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyesterkern, Dispersion, Besenstiel, Gips, Gaze<br>92,5 x 44,5 x 42,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"passstueck-ohne-jahr-2\",\"href\":\"/werke/passstueck-ohne-jahr-2\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyester, Glasfiber, Dispersion<br>33,5 x 45,5 cm (Ø)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"eine-studie-modell-2007\",\"href\":\"/werke/eine-studie-modell-2007\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"eine-studie-modell-2007-2\",\"href\":\"/werke/eine-studie-modell-2007-2\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"we-ll-not-carry-coals-2000-2007\",\"href\":\"/werke/we-ll-not-carry-coals-2000-2007\",\"title\":\"“We’ll not carry coals”\",\"year\":\"2000/2007\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>sechsteilige Installation mit Arbeiten verschiedener Künstler<br>diverse Materialien<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Kunstraum Innsbruck, 2007\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"imageAlt\":\"“We’ll not carry coals”\",\"caption\":\"Clemens Schillinger\"},{\"id\":\"ot-2007-2\",\"href\":\"/werke/ot-2007-2\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe<br>154 x 103 x 63 cm<br>Sockel: 100 x 50 x 60 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"h-mosers-messer-1982\",\"href\":\"/werke/h-mosers-messer-1982\",\"title\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitungsseite<br>26,6 x 21,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"imageAlt\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"schoener-wohnen-1999\",\"href\":\"/werke/schoener-wohnen-1999\",\"title\":\"“Schöner Wohnen”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>zehnteilige Bilderwand mit Arbeiten verschiedener KünstlerInnen, zwei Clubfauteuils, Trog<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"imageAlt\":\"“Schöner Wohnen”\",\"caption\":\"A. Burger, Zürich\"},{\"id\":\"onkel-stuhl-2001-2009-3\",\"href\":\"/werke/onkel-stuhl-2001-2009-3\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"\"},{\"id\":\"sphairos-1998\",\"href\":\"/werke/sphairos-1998\",\"title\":\"„Sphairos (Die Kopie ihres Titels)”\",\"year\":\"1998\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>150 x 150 x 150 cm, Sockel: 49 x 240 x 290 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Skulptur im Schlosspark Ambras, Innsbruck, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"imageAlt\":\"„Sphairos (Die Kopie ihres Titels)”\",\"caption\":\"Heinz Stanger\"},{\"id\":\"viennoiserie-1998\",\"href\":\"/werke/viennoiserie-1998\",\"title\":\"“Viennoiserie“\",\"year\":\"1998\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>10teilige Bilderwand mit Arbeiten verschiedener Künstler, Diwan, 2 Editionen, Sockel, Tisch<br>Einzelne Arbeiten:<br>Richard Jackson: 66 x 101 cm<br>Paul McCarthy: 61 x 48 cm<br>Raymond Pettibon: 44 x 28 cm<br>Roland Kollnitz: 138 x 38 x 5 cm<br>Otto Muehl: 55 x 65 cm<br>Seamus Farel a.o.: 85 x 103 cm<br>Joseph Kosuth: 125,5 x 107 cm<br>Franz West (braun): 85 x 103 cm<br>Franz West (Kleiderbügel): 44 x 24 x 5 cm<br>Franz West (Deckel): 37 x 28 x 3,5 cm<br>Franz West (linke Skulptur): 68 x 68 x 104 (H) cm<br>Sockel: 59,5 x 37 x 98 (H) cm<br>Franz West (rechte Skulptur): 66 x 78 x 93,5 (H) cm<br>Tisch von Prinzgau/Podgorschek, von Franz West überarbeitet: 74 x 97 ø cm<br>Franz West (Diwan): 230 x 80 x 90 (H) cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Atelier Stubenring, 1998\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"imageAlt\":\"“Viennoiserie“\",\"caption\":\"Jens Preusse, Wien\"},{\"id\":\"spiegel-in-kabine-mit-passstuecken-1996\",\"href\":\"/werke/spiegel-in-kabine-mit-passstuecken-1996\",\"title\":\"“Spiegel in Kabine mit Passstücken”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>4 Passstücke, Bodenplatte, Kabine, Spiegel von Michelangelo Pistoletto, Video mit Handlungsanregungen, Monitor<br>Kabine: Spiegel, Holz, Zeitung, Dispersion; Passstücke: Epoxydharz, Metall; Monitor, Video<br>Kabine: 220 x 260 x 360 cm; Spiegel: 220 x 140 cm; Passstücke: 112 x 16 x 15 cm, 112 x 30 x 22 cm, 108 x 31 x 22,5 cm, 114 x 29 x 28 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Les Abbatoirs, Toulouse, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"imageAlt\":\"“Spiegel in Kabine mit Passstücken”\",\"caption\":\"© Marc Boyer\"},{\"id\":\"doku-stuhl-1997-2003\",\"href\":\"/werke/doku-stuhl-1997-2003\",\"title\":\"„Doku-Stuhl”\",\"year\":\"1997-2003\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Offene Edition, alle individuell in Farbe und Gestaltung<br>Stahl, Holz, Schaumstoff, Leinen, Baumwolle<br>je ca. 84 x 45 x 54 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht documenta X, Kassel, 1997\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"imageAlt\":\"„Doku-Stuhl”\",\"caption\":\"Werner Maschmann\"},{\"id\":\"labstueck-ohne-jahr\",\"href\":\"/werke/labstueck-ohne-jahr\",\"title\":\"Labstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Glas, Metall, Pappe<br>22 x 39 x 28 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"\"},{\"id\":\"auto-sex-1999\",\"href\":\"/werke/auto-sex-1999\",\"title\":\"„Auto Sex”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Heimo Zobernig, Franz West<br>halbtransparente Spiegelfolie, Gummi, Papierklemmen<br>zwei Stühle: Metall, Holz, Schaumstoff, Baumwolle<br>je 84 x 45 x 54 cm<br>Folie: 250 x 150 cm<br>Gummi: 141 x 320 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Hauser &amp; Wirth, Zürich, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"imageAlt\":\"„Auto Sex”\",\"caption\":\"\"},{\"id\":\"pa-1-1990\",\"href\":\"/werke/pa-1-1990\",\"title\":\"„PA 1”\",\"year\":\"1990\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Bodenplatte, Monitor, Metall, Stühle<br>Tisch: 43 x 60 x 110 cm<br>sechs Stühle: Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst, 1996\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"imageAlt\":\"„PA 1”\",\"caption\":\"Bettina Letz, Wien\"},{\"id\":\"schoene-aussicht-1988\",\"href\":\"/werke/schoene-aussicht-1988\",\"title\":\"„Schöne Aussicht”\",\"year\":\"1988\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Zeitung<br>113 x 84 x 46 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Zwirner\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"imageAlt\":\"„Schöne Aussicht”\",\"caption\":\"\"},{\"id\":\"bi-5-passstueck-1990\",\"href\":\"/werke/bi-5-passstueck-1990\",\"title\":\"„BI 5” (Passstück)\",\"year\":\"1990\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminiumguß bemalt<br>50 x 27 x 77 cm<br>Sockel: 77 x 74 x 45 cm</p>\",\"html\":\"\",\"view\":\"Atelier Weißgerberlände, 1990\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"imageAlt\":\"„BI 5” (Passstück)\",\"caption\":\"\"}]");
//#endregion
//#region src/work-overlay.ts
i.registerPlugin(et);
var nt = tt, rt = new Map(nt.map((e) => [e.id, e])), it = nt.map((e, t) => ({
	...e,
	index: t
})), at = .82, ot = at;
function st() {
	let e = new URL(window.location.href);
	return e.searchParams.delete("work"), `${e.pathname}${e.search}${e.hash}`;
}
function ct() {
	let e = new URL(st(), window.location.href);
	return e.hash = "werke", `${e.pathname}${e.search}${e.hash}`;
}
function lt(e) {
	try {
		return new URL(e, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {
		return "";
	}
}
function ut(e, t) {
	let n = document.createElement("div");
	return n.className = "work-overlay__flyer", n.setAttribute("aria-hidden", "true"), Object.assign(n.style, {
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`
	}), n.append(e), document.body.append(n), n;
}
function dt(e) {
	let t = e.cloneNode(!1);
	return t.removeAttribute("id"), t.setAttribute("aria-hidden", "true"), t.style.visibility = "hidden", e.naturalWidth && e.naturalHeight && (t.width = e.naturalWidth, t.height = e.naturalHeight), t;
}
function ft() {
	let e = document.querySelector(".top_bar_section"), t = (e == null ? void 0 : e.cloneNode(!0)) || document.createElement("nav");
	t.classList.add("top_bar_section", "u-section", "is-relative", "work-overlay__header"), t.removeAttribute("data-wf--top-bar--variant"), t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), t.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")), t.querySelectorAll("[data-logo-variant]").forEach((e) => e.remove()), t.querySelectorAll(".top_bar_center .nav_logo_link svg, .top_bar_center .nav_logo_image_link img.nav_logo").forEach((e) => e.style.removeProperty("visibility"));
	let n = t.querySelector(".top_bar_left") || t, r = document.createElement("a");
	return r.className = "text-link is-back w-inline-block work-overlay__back", r.href = st(), r.setAttribute("data-transition", "false"), r.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 15\" class=\"arrow is-rotate\" aria-hidden=\"true\"><path d=\"M3.60046 5.7002H0V9.3002H3.60046V5.7002Z\" fill=\"currentColor\" class=\"arrow-dot\"/><path d=\"M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z\" fill=\"currentColor\" class=\"arrow-arrow\"/></svg><div class=\"text-block\">Zurück</div>", n.replaceChildren(r), {
		header: t,
		backLink: r
	};
}
function pt(e) {
	var t;
	let n = ((t = e.textContent) == null ? void 0 : t.trim()) || "Zur Übersicht", r = document.createElement("span"), i = document.createElement("span"), a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	e.classList.add("button-outlined"), r.className = "button-mask", r.setAttribute("aria-hidden", "true"), i.className = "button-text", i.textContent = n, a.classList.add("arrow"), a.setAttribute("viewBox", "0 0 17 15"), a.setAttribute("aria-hidden", "true"), a.innerHTML = "<path class=\"arrow-dot\" d=\"M3.60046 5.7002H0V9.3002H3.60046V5.7002Z\" fill=\"currentColor\"/><path class=\"arrow-arrow\" d=\"M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z\" fill=\"currentColor\"/>", e.replaceChildren(r, i, a);
}
function mt(d, f) {
	let p = document.title, m = document.createElement("div"), h = document.createElement("div"), g = document.createElement("div"), _ = document.createElement("div"), v = document.createElement("div"), { header: y, backLink: b } = ft(), x = null, S = document.createComment("site menu position"), C = /* @__PURE__ */ new Map(), w = "closed", T = null, E = null, D = null, O = null, k = "", A = null, j = window.scrollY, M = 0, N = null, P = null, ee = "", F = "", I = history.scrollRestoration, L = null, R = null;
	m.className = "work-overlay", m.hidden = !0, m.setAttribute("role", "dialog"), m.setAttribute("aria-modal", "true"), m.setAttribute("aria-label", "Werkdetails"), m.setAttribute("data-work-overlay", ""), m.tabIndex = -1, h.className = "work-overlay__backdrop", g.className = "work-overlay__surface", g.setAttribute("data-lenis-prevent", ""), _.className = "work-overlay__scroll-content", v.className = "work-overlay__content", _.append(y, v), g.append(_), m.append(h, g), m.setAttribute("data-work-detail-overview-href", ct()), document.body.append(m), o();
	let z = (e) => {
		let t = Array.from(f.querySelectorAll("[data-works-rendered-item]")).find((t) => t.getAttribute("data-works-rendered-item") === e);
		return (t == null ? void 0 : t.querySelector(".cms-works__image-wrap")) || null;
	}, B = () => {
		var e;
		x || (x = document.querySelector("[data-site-menu]")), !(!x || m.contains(x)) && (S.parentNode || (e = x.parentNode) == null || e.insertBefore(S, x), m.append(x));
	}, V = () => [
		b,
		...Array.from(y.querySelectorAll(".nav_logo_link")),
		...Array.from(v.querySelectorAll(".cms-work-detail__content > *, .cms-work-detail__caption, .cms-work-detail__related"))
	], H = () => {
		N == null || N.kill(), N = null, P == null || P.kill(), P = null, i.killTweensOf([
			h,
			g,
			...V()
		]);
	}, U = () => {
		for (let e of Array.from(document.body.children)) !(e instanceof HTMLElement) || e === m || e === D || (C.has(e) || C.set(e, e.inert), e.inert = !0);
	}, W = () => {
		if (R) {
			R.resize();
			return;
		}
		if (!window.lenis || n() || window.matchMedia("(max-width: 767px)").matches) return;
		let e = window.Lenis;
		e && (R = new e({
			wrapper: g,
			content: _,
			lerp: .0822,
			smoothWheel: !0,
			wheelMultiplier: .8,
			touchMultiplier: 2.5,
			syncTouch: !0,
			autoRaf: !0
		}));
	}, G = () => {
		R == null || R.destroy(), R = null;
	}, K = () => {
		R == null || R.resize(), R == null || R.scrollTo(0, {
			immediate: !0,
			force: !0
		}), g.scrollTop = 0;
	}, te = () => {
		var e;
		document.documentElement.classList.contains("work-overlay-active") || (j = window.scrollY, ee = document.documentElement.style.overflow, F = document.body.style.width, I = history.scrollRestoration, document.body.style.width = `${document.documentElement.clientWidth}px`, document.documentElement.style.overflow = "hidden", document.documentElement.classList.add("work-overlay-active"), history.scrollRestoration = "manual", (e = window.lenis) == null || e.stop(), U());
	}, q = () => {
		var e;
		document.documentElement.classList.remove("work-overlay-active"), document.documentElement.style.overflow = ee, document.body.style.width = F, history.scrollRestoration = I, C.forEach((e, t) => {
			t.inert = e;
		}), C.clear(), (e = window.lenis) == null || e.start(), window.scrollTo(0, j);
	}, J = (e) => {
		O = e, k = e.getAttribute("style") || "";
		let t = e.getBoundingClientRect();
		e.style.aspectRatio = `${t.width} / ${Math.max(t.height, 1)}`;
	}, Y = () => {
		O != null && O.isConnected && (k ? O.setAttribute("style", k) : O.removeAttribute("style")), O = null, k = "";
	}, X = () => {
		if (!E || !T) return;
		let e = z(T.id) || O;
		e != null && e.isConnected && (e.querySelector("img") || (E.className = "cms-works__image", e.append(E))), D == null || D.remove(), D = null, E = null, Y();
	}, Z = (e) => {
		L == null || L(), L = null;
		let t = s(e), n = c(m, e, u(it, e)), r = t.querySelector(".cms-work-detail__title"), i = t.querySelector(".cms-work-detail__image");
		if (!i) throw Error(`Missing detail image for ${e.id}`);
		if (r && (r.id = "work-overlay-title", m.setAttribute("aria-labelledby", r.id)), n) {
			n.querySelectorAll("a[href]").forEach((e) => {
				e.classList.contains("cms-work-detail__overview-link") || e.setAttribute("data-transition", "false");
			});
			let e = n.querySelector(".cms-work-detail__overview-link");
			e && pt(e);
		}
		let a = document.createElement("div");
		return a.className = "work-detail_wrapper u-section cms-work-detail work-overlay__detail", a.append(t), v.replaceChildren(a), n && v.append(n), g.scrollTop = 0, R == null || R.resize(), R == null || R.scrollTo(0, {
			immediate: !0,
			force: !0
		}), document.title = `${e.title} – Franz West`, i;
	}, Q = (e) => {
		if (!(e !== M || !T)) {
			if (D && E) {
				let e = v.querySelector(".cms-work-detail__image");
				e && e.style.removeProperty("visibility"), X();
			}
			w = "open", i.to(V(), {
				autoAlpha: 1,
				duration: n() ? 0 : .42,
				stagger: n() ? 0 : .055,
				ease: "power2.out",
				onComplete: () => m.focus({ preventScroll: !0 })
			});
		}
	}, ne = (e, t, r = !1) => {
		var a;
		let o = ++M, s = T;
		H(), s && G(), s && X(), w = "opening", T = e;
		let c = (a = history.state) == null ? void 0 : a.previousWorkId, u = new URL(st(), window.location.href);
		c && rt.has(c) && u.searchParams.set("work", c), b.href = `${u.pathname}${u.search}${u.hash}`, !m.hidden && s && i.set(h, { opacity: 1 });
		let d = null, f = null;
		if (!r && t) {
			let e = t.querySelector(".cms-works__image-wrap"), n = e == null ? void 0 : e.querySelector("img");
			e && n && n.complete && n.naturalWidth > 0 && (d = n, f = e.getBoundingClientRect(), J(e));
		}
		let p = Z(e);
		d && f && (E = d, d.naturalWidth && d.naturalHeight && (p.width = d.naturalWidth, p.height = d.naturalHeight), p.style.visibility = "hidden", D = ut(d, f)), m.hidden = !1, B(), te(), U();
		let g = v.querySelector(".work-overlay__detail");
		if (L = g ? l(g) : null, W(), K(), requestAnimationFrame(() => {
			o === M && K();
		}), r && document.readyState !== "complete" && window.addEventListener("load", () => {
			o === M && K();
		}, { once: !0 }), m.focus({ preventScroll: !0 }), document.documentElement.classList.remove("work-overlay-initial"), i.set(V(), { autoAlpha: 0 }), r || n() || !D) {
			i.set(h, { opacity: 1 }), Q(o);
			return;
		}
		i.set(h, { opacity: +!!s }), P = i.timeline(), P.to(h, {
			opacity: 1,
			duration: ot,
			ease: "power1.inOut"
		}, 0), N = et.fit(D, p, {
			duration: at,
			ease: "power3.inOut",
			onComplete: () => Q(o)
		});
	}, re = (e) => {
		if (e !== M) return;
		X(), L == null || L(), L = null, x && S.parentNode && S.parentNode.insertBefore(x, S.nextSibling), m.hidden = !0, v.replaceChildren(), T = null, w = "closed", document.title = p, i.set(h, { clearProps: "opacity" }), q();
		let t = A != null && A.isConnected ? A : null;
		t == null || t.focus({ preventScroll: !0 }), A = null;
	}, ie = () => {
		if (w === "closed") return;
		let e = ++M;
		H(), w = "closing", G();
		let t = () => {
			if (e !== M) return;
			let t = T ? z(T.id) || O : null, r = E || v.querySelector(".cms-work-detail__image");
			if (!(t != null && t.isConnected) || !r || n()) {
				i.to(h, {
					opacity: 0,
					duration: n() ? 0 : ot,
					onComplete: () => re(e)
				});
				return;
			}
			if (!D) {
				let e = r.getBoundingClientRect(), t = dt(r);
				r.replaceWith(t), E = r, D = ut(r, e);
			}
			i.to(h, {
				opacity: 0,
				duration: ot,
				ease: "power1.inOut"
			}), N = et.fit(D, t, {
				duration: at,
				ease: "power3.inOut",
				onComplete: () => re(e)
			});
		};
		i.to(V(), {
			autoAlpha: 0,
			duration: n() ? 0 : .16,
			stagger: n() ? 0 : .015,
			onComplete: () => {
				g.scrollTop > 0 && !n() ? i.to(g, {
					scrollTop: 0,
					duration: Math.min(.55, .25 + g.scrollTop / 2e3),
					ease: "power2.inOut",
					onComplete: t
				}) : (g.scrollTop = 0, t());
			}
		});
	}, ae = (e = !1) => {
		var t;
		let n = ((t = new URL(window.location.href).searchParams.get("work")) == null ? void 0 : t.trim()) || "", r = rt.get(n);
		if (n && !r) {
			history.replaceState({}, "", st()), ie();
			return;
		}
		if (!r) {
			ie();
			return;
		}
		if ((T == null ? void 0 : T.id) === r.id && (w === "open" || w === "opening")) return;
		let i = w === "closed" && Array.from(f.querySelectorAll("[data-works-rendered-item]")).find((e) => e.getAttribute("data-works-rendered-item") === r.id) || null;
		ne(r, i, e);
	}, oe = () => {
		let e = history.state;
		if (e != null && e.fwWorkOverlay && e.fromOverview && e.depth && history.length > e.depth) {
			history.go(-e.depth);
			return;
		}
		history.replaceState({ fwWorkOverlay: !1 }, "", st()), ae();
	}, se = () => {
		let e = history.state;
		if (e != null && e.fwWorkOverlay && e.depth && (e.depth > 1 || !e.fromOverview)) {
			history.back();
			return;
		}
		oe();
	};
	d.addEventListener("click", (n) => {
		let r = n.target;
		if (!(r instanceof Element) || n.defaultPrevented || t(n)) return;
		let i = r.closest("a[data-work-overlay-trigger]");
		if (!i || !d.contains(i)) return;
		let a = i.getAttribute("data-work-overlay-trigger") || lt(i.href), o = rt.get(a);
		if (!o) return;
		n.preventDefault(), e("work_detail_opened", {
			work_id: o.id,
			source: "collection"
		}), A = i;
		let s = new URL(window.location.href);
		s.searchParams.set("work", o.id), history.replaceState({
			...history.state || {},
			fwWorkOverlayBase: !0
		}, "", st()), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !0,
			depth: 1
		}, "", s), ne(o, i);
	}), m.addEventListener("click", (n) => {
		let r = n.target;
		if (!(r instanceof Element) || t(n)) return;
		let i = r.closest("a[href]");
		if (!i || !m.contains(i)) return;
		if (i === b) {
			n.preventDefault(), se();
			return;
		}
		if (i.classList.contains("cms-work-detail__overview-link")) return;
		let a = rt.get(lt(i.href));
		if (!a) return;
		n.preventDefault();
		let o = history.state;
		e("work_detail_opened", {
			work_id: a.id,
			source: "related_work"
		});
		let s = new URL(window.location.href);
		s.searchParams.set("work", a.id), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !!(o != null && o.fromOverview),
			depth: ((o == null ? void 0 : o.depth) || 0) + 1,
			previousWorkId: T == null ? void 0 : T.id
		}, "", s), ne(a, null);
	}), window.addEventListener("popstate", () => ae()), window.addEventListener("pageshow", (e) => {
		e.persisted && ae(!0);
	}), window.addEventListener("site:lenis-ready", () => {
		if (w !== "closed") {
			var e;
			(e = window.lenis) == null || e.stop(), w !== "closing" && W();
		}
	}), document.addEventListener("keydown", (e) => {
		if (w === "closed") return;
		if (e.key === "Escape") {
			if (x != null && x.classList.contains("is-open")) return;
			e.preventDefault(), oe();
			return;
		}
		if (e.key !== "Tab") return;
		let t = r(m);
		if (t.length === 0) return;
		let n = t[0], i = t[t.length - 1];
		e.shiftKey && document.activeElement === n ? (e.preventDefault(), i.focus()) : !e.shiftKey && document.activeElement === i && (e.preventDefault(), n.focus());
	}), new URL(window.location.href).searchParams.has("work") ? (ae(!0), a(() => {
		if (w !== "closed") {
			var e;
			U(), (e = window.lenis) == null || e.stop();
		}
	})) : document.documentElement.classList.remove("work-overlay-initial");
}
//#endregion
//#region src/cms-works.ts
var ht = "[data-cms-works]", gt = "[data-cms-works-source]", _t = "[data-cms-works-item], [data-cms-canvas-item]", vt = "[data-works-thumbnail], [data-canvas-thumbnail]", yt = "[data-works-title], [data-canvas-title]", bt = "[data-works-year], [data-canvas-year]", xt = "[data-works-category], [data-works-categories]", St = "http://www.w3.org/2000/svg", Ct = [
	"[data-works-link]",
	"[data-sheet-calendar-link]",
	"[data-sheet-calender-link]",
	"[data-sheet-claender-link]",
	"[data-calendar-link]",
	"[data-calender-link]",
	"[data-claender-link]",
	"[data-sheet-link]",
	"a[href]"
].join(", "), wt = 16, Tt = 16, Et = "[data-cms-works-load-more-template]", Dt = "site:works-ready";
function Ot(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function kt(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function At(e) {
	var t;
	return (t = Array.from(e.children).find((e) => e instanceof HTMLImageElement)) == null ? null : t;
}
function jt(e) {
	let t = e.querySelector(vt);
	return t ? t instanceof HTMLImageElement ? t : null : At(e);
}
function Mt(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function Nt(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Pt(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? kt(e, xt) : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function Ft(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v;
	return (t = (n = (r = (i = (a = (o = (s = (c = (l = (u = (d = (f = (p = (m = (h = (g = (_ = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : _) == null ? e.getAttribute("data-sheet-calendar-href") : g) == null ? e.getAttribute("data-sheet-calendar-url") : h) == null ? e.getAttribute("data-sheet-calender-href") : m) == null ? e.getAttribute("data-sheet-calender-url") : p) == null ? e.getAttribute("data-sheet-claender-href") : f) == null ? e.getAttribute("data-sheet-claender-url") : d) == null ? e.getAttribute("data-calendar-href") : u) == null ? e.getAttribute("data-calendar-url") : l) == null ? e.getAttribute("data-calender-href") : c) == null ? e.getAttribute("data-calender-url") : s) == null ? e.getAttribute("data-claender-href") : o) == null ? e.getAttribute("data-claender-url") : a) == null ? e.getAttribute("data-sheet-href") : i) == null ? e.getAttribute("data-sheet-url") : r) == null ? (v = e.querySelector(Ct)) == null ? void 0 : v.href : n) == null ? "" : t;
}
function It(e, t) {
	var n, r, i, a, o, s;
	let c = jt(e), l = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!l) return null;
	let u = kt(e, yt) || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "", d = Ft(e), f = "";
	try {
		f = new URL(d, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {}
	return {
		id: ((i = e.getAttribute("data-works-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-canvas-id")) == null ? void 0 : a.trim()) || ((o = e.getAttribute("data-cms-item-id")) == null ? void 0 : o.trim()) || f || `work-${t + 1}-${Mt(`${u}-${l}`)}`,
		title: u,
		thumbnail: l,
		thumbnailAlt: (c == null ? void 0 : c.alt) || u,
		href: d,
		year: kt(e, bt) || ((s = e.getAttribute("data-works-year")) == null ? void 0 : s.trim()) || "",
		categories: Pt(e),
		index: t
	};
}
function Lt(e) {
	return Array.from(e.querySelectorAll(_t)).map(It).filter((e) => e !== null);
}
function Rt(e) {
	for (let t of Array.from(e.querySelectorAll(_t))) {
		let e = jt(t);
		e && (e.removeAttribute("srcset"), e.removeAttribute("sizes"), e.removeAttribute("src"));
	}
}
function zt(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "year" ? n : "year";
}
function Bt(e) {
	let t = e.match(/\b(?:18|19|20)\d{2}\b/);
	return t ? Number.parseInt(t[0], 10) : null;
}
function Vt(e) {
	let t = e.trim();
	return t.startsWith("[") && t.endsWith("]") ? t : `[${t}]`;
}
function Ht(e, t, n) {
	let r = [...e];
	if (t === "random") {
		let t = Nt(Mt(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return r.sort((e, t) => {
		var n, r;
		return ((n = Bt(e.year)) == null ? Infinity : n) - ((r = Bt(t.year)) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function Ut(e, t) {
	return t.size === 0 ? e : e.filter((e) => e.categories.some((e) => t.has(e)));
}
function Wt() {
	let e = document.createElementNS(St, "svg"), t = document.createElementNS(St, "path"), n = document.createElementNS(St, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), t.classList.add("cms-works__eye-pupil"), t.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), t.setAttribute("fill", "currentColor"), n.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), n.setAttribute("fill", "currentColor"), e.append(t, n), e;
}
function Gt(e, t = -1) {
	let n = document.createElement(e.href ? "a" : "article"), r = document.createElement("span"), i = document.createElement("img"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span");
	if (n.className = "cms-works__item", n.setAttribute("data-works-rendered-item", e.id), n.setAttribute("data-works-categories", e.categories.join(",")), e.href && (n.classList.add("cms-works__item--clickable"), n.setAttribute("href", e.href), n.setAttribute("data-work-overlay-trigger", e.id), n.setAttribute("data-transition", "false")), r.className = "cms-works__image-wrap", t >= 0 && (r.classList.add("cms-works__image-wrap--revealing"), r.style.setProperty("--cms-works-reveal-delay", `${t * 100}ms`)), i.className = "cms-works__image", i.src = e.thumbnail, i.alt = e.thumbnailAlt, i.loading = "lazy", i.decoding = "async", r.append(i), a.className = "cms-works__meta", o.className = "cms-works__label", s.className = "cms-works__title", s.textContent = e.title, o.append(s), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = Vt(e.year), o.append(t);
	}
	return a.append(o, Wt()), n.append(r, a), n;
}
function Kt(e) {
	return new Promise((t) => {
		let n = new Image();
		n.onload = () => {
			t({
				width: n.naturalWidth || 1,
				height: n.naturalHeight || 1
			});
		}, n.onerror = () => t({
			width: 1,
			height: 1
		}), n.src = e;
	});
}
function qt(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function Jt(e, t, n) {
	let r = Array.from({ length: n }, () => ({
		items: [],
		height: 0
	}));
	return e.forEach((e) => {
		var n;
		let i = (n = t.get(e.id)) == null ? {
			width: 1,
			height: 1
		} : n, a = r.reduce((e, t) => t.height < e.height ? t : e);
		a.items.push(e), a.height += i.height / Math.max(i.width, 1) + .18;
	}), r;
}
function Yt(e, t, n, r) {
	let i = document.createElement("div"), a = Jt(t, n, qt(e)), o = /* @__PURE__ */ new Map();
	r && t.forEach((e) => {
		r.has(e.id) && o.set(e.id, o.size);
	}), i.className = "cms-works__grid", a.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			var n;
			t.append(Gt(e, (n = o.get(e.id)) == null ? -1 : n));
		}), i.append(t);
	}), e.replaceChildren(i), e.classList.add("is-ready");
}
function Xt(e, t) {
	var n, r, i;
	let a = (n = (r = (i = e.querySelector("[data-cms-works-load-more-text]")) == null ? e.querySelector("[data-button-text]") : i) == null ? e.querySelector(".button-text") : r) == null ? e : n;
	a.textContent = t;
}
function Zt(e, t) {
	var n, r;
	let i = (n = (r = e.querySelector(Et)) == null ? t.querySelector(Et) : r) == null ? document.querySelector(Et) : n;
	return i ? (i instanceof HTMLButtonElement && (i.type = "button"), i instanceof HTMLAnchorElement && (i.href = "#"), i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.removeAttribute("hidden"), i.removeAttribute("aria-hidden"), i.removeAttribute("data-cms-works-load-more-template"), i.setAttribute("data-cms-works-load-more", ""), Xt(i, "MEHR ANZEIGEN"), i) : null;
}
function Qt() {
	return x();
}
function $t(t, n) {
	var r, i, a, o, s;
	let c = Lt(n), l = Qt() ? y() : null, u = (r = l == null ? void 0 : l.categories) == null ? [] : r, d = {
		appliedCategories: new Set(u),
		pendingCategories: new Set(u),
		appliedSortMode: (i = l == null ? void 0 : l.sort) == null ? zt(t) : i,
		pendingSortMode: (a = l == null ? void 0 : l.sort) == null ? zt(t) : a,
		open: !1
	}, f = document.createElement("div"), p = document.createElement("button"), m = document.createElement("div"), h = Zt(t, n), g = 0, v = 0, x = 0, S = (o = l == null ? void 0 : l.visibleCount) == null ? wt : o, C = window.location.hash === "#werke" || (s = l == null ? void 0 : l.scrollY) == null ? null : s, w = [], T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), D = 0;
	n.hidden = !0, n.setAttribute("aria-hidden", "true"), Rt(n), t.classList.add("cms-works"), f.className = "cms-works__grid-host u-section", p.className = "cms-works__collection-overlay", p.type = "button", p.setAttribute("aria-label", "Filter anwenden"), m.className = "cms-works__grid-mount", f.append(m), h && f.append(h);
	let O = () => Ht(Ut(c, d.appliedCategories), d.appliedSortMode, t), k = (e = !1, n) => {
		let r = ++D, i = w.slice(0, S);
		Promise.all(i.map(async (e) => {
			if (T.has(e.id)) return;
			let t = E.get(e.thumbnail);
			t || (t = Kt(e.thumbnail), E.set(e.thumbnail, t)), T.set(e.id, await t);
		})).then(() => {
			r === D && (window.cancelAnimationFrame(g), g = window.requestAnimationFrame(() => {
				if (r !== D) return;
				let a = qt(t), o = Math.round(t.getBoundingClientRect().width);
				!e && a === v && o === x || (v = a, x = o, Yt(m, i, T, n), h && (h.hidden = w.length <= S), C !== null && (window.scrollTo(0, C), C = null), t.setAttribute("data-site-assets-ready", ""), document.dispatchEvent(new CustomEvent(Dt, {
					bubbles: !0,
					detail: {
						count: i.length,
						total: w.length
					}
				})));
			}));
		});
	}, A = () => {
		b({
			categories: Array.from(d.appliedCategories),
			sort: d.appliedSortMode,
			visibleCount: S,
			scrollY: window.scrollY,
			ts: Date.now()
		});
	}, j = () => {
		var e;
		let t = M.element.querySelector(".cms-works-filter__panel"), n = (e = t == null ? void 0 : t.getBoundingClientRect().bottom) == null ? M.element.getBoundingClientRect().bottom : e;
		p.style.setProperty("--cms-works-overlay-top", `${Math.max(0, n)}px`);
	}, M = _(c, d, () => {
		w = O(), S = wt, e("works_filter_applied", {
			category_count: d.appliedCategories.size,
			sort_mode: d.appliedSortMode,
			result_count: w.length
		}), k(!0), M.sync(), A();
	}, { onOpenChange: (e) => {
		t.classList.toggle("is-filter-open", e), e && j();
	} });
	if (p.addEventListener("click", () => M.apply()), h) {
		let t = () => {
			let t = S;
			S = Math.min(S + Tt, w.length);
			let n = new Set(w.slice(t, S).map((e) => e.id));
			e("works_more_loaded", {
				loaded_count: S - t,
				visible_count: S,
				result_count: w.length
			}), k(!0, n), A();
		};
		h.addEventListener("click", (e) => {
			e.preventDefault(), t();
		}), h.addEventListener("keydown", (e) => {
			e.key !== "Enter" && e.key !== " " || (e.preventDefault(), t());
		});
	}
	w = O(), t.replaceChildren(M.element, p, f), mt(t, m);
	let N = new ResizeObserver(() => k());
	k(!0), M.sync(), N.observe(t), window.addEventListener("orientationchange", () => k(!0)), window.addEventListener("resize", j), window.addEventListener("scroll", j, { passive: !0 }), window.addEventListener("pagehide", A);
}
function en(e) {
	var t;
	let n = (t = e.querySelector(gt)) == null ? document.querySelector(gt) : t;
	if (!n) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	$t(e, n);
}
Ot(() => {
	Array.from(document.querySelectorAll(ht)).forEach(en);
});
//#endregion

//# sourceMappingURL=cms-works.js.map