import { l as e, m as t, o as n } from "./site-interactions-Cou7uu3t.js";
import { t as r } from "./site-interactions-BxJ-FVg3.js";
import { a as i, t as a } from "./site-interactions-CEVwkEpI.js";
import { createDetailSection as o, createRelatedSection as s, fitDetailImage as c, pickRelatedItems as l } from "./cms-work-detail.js";
//#region src/cms-works-filter.ts
var u = "\n  <svg width=\"14.45\" height=\"10.2\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z\" fill=\"currentColor\"/>\n    <path d=\"M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z\" fill=\"currentColor\"/>\n    <path d=\"M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z\" fill=\"currentColor\"/>\n  </svg>\n", d = "\n  <svg width=\"8.5\" height=\"9.35\" viewBox=\"0 0 10 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M6 9L6 0L4 -8.74228e-08L4 9L6 9Z\" fill=\"currentColor\"/>\n    <path d=\"M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z\" fill=\"currentColor\"/>\n  </svg>\n", f = {
	random: "zufällig",
	year: "Entstehungsjahr"
}, p = {
	random: "Random",
	year: "Year"
}, m = {
	Papierarbeiten: "Works on Paper",
	Passstücke: "Adaptives",
	Skulpturen: "Sculptures",
	Möbelskulpturen: "Furniture Sculptures",
	Installationen: "Installations",
	Außenskulpturen: "Outdoor Sculptures"
}, h = ["year", "random"];
function g(e) {
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
function _(e, t) {
	let n = document.createElement("span");
	return n.className = t, n.innerHTML = e, n;
}
function v(e, t, n, r = {}) {
	let i = document.createElement("section"), a = document.createElement("div"), o = document.createElement("div"), s = document.createElement("span"), c = document.createElement("span"), l = document.createElement("span"), v = document.createElement("span"), y = document.createElement("span"), b = document.createElement("div"), x = document.createElement("div"), S = document.createElement("div"), C = document.createElement("div"), w = document.createElement("div"), T = document.createElement("div"), E = document.createElement("span"), D = document.createElement("div"), O = document.createElement("button"), k = document.createElement("a"), A = g(e), j = /^\/en(?:\/|$)/.test(window.location.pathname), M = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
	i.className = "cms-works-filter u-section", a.className = "cms-works-filter__container u-container", o.className = "cms-works-filter__bar", o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), o.setAttribute("aria-expanded", "false"), s.className = "cms-works-filter__bar-left", c.className = "cms-works-filter__label", c.textContent = "FILTER", l.className = "cms-works-filter__count", s.append(_(u, "cms-works-filter__filter-icon"), c, l), v.className = "cms-works-filter__bar-right", y.className = "cms-works-filter__sort-label", y.textContent = j ? "SORT" : "SORTIERUNG", C.className = "cms-works-filter__sort-controls", v.append(y, C, _(d, "cms-works-filter__arrow-icon")), o.append(s, v), b.className = "cms-works-filter__panel u-section", x.className = "cms-works-filter__panel-inner u-container", S.className = "cms-works-filter__categories", w.className = "cms-works-filter__mobile-sort-section", T.className = "cms-works-filter__mobile-sort-heading", E.className = "cms-works-filter__sort-label", E.textContent = j ? "SORT" : "SORTIERUNG", D.className = "cms-works-filter__mobile-sort-controls", T.append(_(d, "cms-works-filter__arrow-icon"), E), w.append(T, D), A.forEach((e) => {
		var n;
		let r = document.createElement("button"), i = document.createElement("span"), a = document.createElement("span");
		r.className = "cms-works-filter__pill", r.type = "button", r.setAttribute("aria-pressed", "false"), i.textContent = j ? (n = m[e.name]) == null ? e.name : n : e.name, a.className = "cms-works-filter__pill-count", a.textContent = `[${e.count}]`, r.append(i, a), r.addEventListener("click", () => {
			t.pendingCategories.has(e.name) ? t.pendingCategories.delete(e.name) : t.pendingCategories.add(e.name), P();
		}), M.set(e.name, r), S.append(r);
	}), h.forEach((e) => {
		let n = document.createElement("button");
		n.className = "cms-works-filter__sort-option", n.type = "button", n.textContent = (j ? p : f)[e], n.setAttribute("aria-pressed", "false"), n.addEventListener("click", (n) => {
			n.stopPropagation(), t.open || F(), t.pendingSortMode = e, P();
		}), ee.set(e, n), C.append(n);
		let r = document.createElement("button");
		r.className = "cms-works-filter__mobile-sort-option", r.type = "button", r.textContent = (j ? p : f)[e], r.setAttribute("aria-pressed", "false"), r.addEventListener("click", () => {
			t.pendingSortMode = e, P();
		}), D.append(r);
	}), O.className = "cms-works-filter__reset", O.type = "button", O.textContent = j ? "Reset filters" : "Filter zurücksetzen", O.addEventListener("click", () => {
		t.pendingCategories.clear(), N();
	}), k.className = "cms-works-filter__apply", k.href = "#", k.textContent = j ? "APPLY" : "ANWENDEN", k.addEventListener("click", (e) => {
		e.preventDefault(), N();
	});
	function N() {
		t.open && (t.appliedCategories = new Set(t.pendingCategories), t.appliedSortMode = t.pendingSortMode, I(!1), n());
	}
	x.append(S, O, w), b.append(x, k), a.append(o), i.append(a, b);
	function P() {
		l.textContent = `[${t.appliedCategories.size}]`, i.classList.toggle("is-open", t.open), o.setAttribute("aria-expanded", t.open ? "true" : "false"), M.forEach((e, n) => {
			var r, i;
			let a = t.pendingCategories.has(n), o = e.querySelector(".cms-works-filter__pill-count");
			if (e.classList.toggle("is-active", a), e.setAttribute("aria-pressed", a ? "true" : "false"), e.tabIndex = t.open ? 0 : -1, o) {
				if (a) {
					o.textContent = "✕";
					return;
				}
				o.textContent = `[${(r = (i = A.find((e) => e.name === n)) == null ? void 0 : i.count) == null ? 0 : r}]`;
			}
		}), ee.forEach((e, n) => {
			let r = (t.open ? t.pendingSortMode : t.appliedSortMode) === n, i = t.open || r;
			e.classList.toggle("is-active", r), e.classList.toggle("is-collapsed", !i), e.setAttribute("aria-pressed", r ? "true" : "false"), e.setAttribute("tabindex", i ? "0" : "-1");
		}), D.querySelectorAll("button").forEach((e, n) => {
			let r = h[n] === t.pendingSortMode;
			e.classList.toggle("is-active", r), e.setAttribute("aria-pressed", r ? "true" : "false"), e.tabIndex = t.open || r ? 0 : -1;
		}), O.tabIndex = t.open ? 0 : -1, k.tabIndex = t.open ? 0 : -1, b.style.setProperty("--cms-works-filter-categories-height", `${S.scrollHeight}px`), b.style.setProperty("--cms-works-filter-sort-height", `${D.scrollHeight}px`), b.style.setProperty("--cms-works-filter-panel-height", `${b.scrollHeight}px`);
	}
	function F() {
		var e;
		t.open || (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode, t.open = !0, P(), (e = r.onOpenChange) == null || e.call(r, !0));
	}
	function I(e) {
		var n;
		t.open && (e && (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode), t.open = !1, P(), (n = r.onOpenChange) == null || n.call(r, !1));
	}
	return o.addEventListener("click", (e) => {
		C.contains(e.target) || (t.open ? I(!0) : F());
	}), o.addEventListener("keydown", (e) => {
		e.target !== o || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), t.open ? I(!0) : F());
	}), w.addEventListener("click", () => {
		t.open || F();
	}), document.addEventListener("keydown", (e) => {
		e.key === "Escape" && t.open && I(!0);
	}), document.addEventListener("pointerdown", (e) => {
		!t.open || i.contains(e.target) || N();
	}), window.addEventListener("resize", () => {
		b.style.setProperty("--cms-works-filter-panel-height", `${b.scrollHeight}px`);
	}), P(), {
		element: i,
		sync: P,
		apply: N
	};
}
//#endregion
//#region src/modules/works-view-state.ts
var y = "site-works-view";
function b() {
	try {
		let e = window.sessionStorage.getItem(y);
		if (!e) return null;
		let t = JSON.parse(e);
		return !t || !Array.isArray(t.categories) || typeof t.visibleCount != "number" ? null : (t.sort !== "year" && t.sort !== "random" && (t.sort = "year"), t);
	} catch (e) {
		return null;
	}
}
function x(e) {
	try {
		window.sessionStorage.setItem(y, JSON.stringify(e));
	} catch (e) {}
}
function S() {
	try {
		let e = window.performance.getEntriesByType("navigation")[0];
		return (e == null ? void 0 : e.type) === "back_forward";
	} catch (e) {
		return !1;
	}
}
//#endregion
//#region node_modules/gsap/utils/matrix.js
var C, w, T, E, D, O, k, A, j = "transform", M = j + "Origin", ee, N = function(e) {
	var t = e.ownerDocument || e;
	for (!(j in e.style) && ("msTransform" in e.style) && (j = "msTransform", M = j + "Origin"); t.parentNode && (t = t.parentNode););
	if (w = window, k = new G(), t) {
		C = t, T = t.documentElement, E = t.body, A = C.createElementNS("http://www.w3.org/2000/svg", "g"), A.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", ee = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, P = function(e) {
	for (var t, n; e && e !== E;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, F = [], I = [], L = function() {
	return w.pageYOffset || C.scrollTop || T.scrollTop || E.scrollTop || 0;
}, R = function() {
	return w.pageXOffset || C.scrollLeft || T.scrollLeft || E.scrollLeft || 0;
}, z = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, B = function e(t) {
	if (w.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, V = function e(t, n) {
	if (t.parentNode && (C || N(t))) {
		var r = z(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = C.createElementNS ? C.createElementNS(i.replace(/^https/, "http"), a) : C.createElement(a);
		return n && (r ? (O || (O = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), O.appendChild(l)) : (D || (D = e(t), Object.assign(D.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), D.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, H = function(e) {
	for (var t = new G(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, te = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[j], e.style[j] = "none", e.appendChild(A), t = A.getCTM(), e.removeChild(A), n ? e.style[j] = n : e.style.removeProperty(j.replace(/([A-Z])/g, "-$1").toLowerCase())), t || k.clone();
}, U = function(e, t) {
	var n = z(e), r = e === n, i = n ? F : I, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === w) return e;
	if (i.length || i.push(V(e, 1), V(e, 2), V(e, 3)), s = n ? O : D, n) r ? (l = te(e), u = -l.e / l.a, d = -l.f / l.d, c = k) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? H(c) : c.getItem(0).matrix : k, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new G(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, ee) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (w.getComputedStyle(l)[j] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = w.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[j] = f[j], l[M] = f[M], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
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
	if (!e || !e.parentNode || (C || N(e)).documentElement === e) return new G();
	var i = P(e), a = z(e) ? F : I, o = U(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && B(e), f = new G((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : R()), s.top + (d ? 0 : L()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region node_modules/gsap/Flip.js
var q = 1, J, Y, X, ne, Z, Q, re, ie = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, ae = {}, oe = 180 / Math.PI, se = Math.PI / 180, ce = {}, le = {}, ue = {}, de = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, fe = de("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), pe = de("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), me = function(e) {
	return J(e)[0] || console.warn("Element not found:", e);
}, he = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, ge = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, _e = {
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
}, ve = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, ye = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, be = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, xe = {}, Se = function(e) {
	var t = xe[e] = de(e);
	return ue[e] = t.concat(pe), t;
}, Ce = function(e) {
	var t = e._gsap || Y.core.getCache(e);
	return t.gmCache === Y.ticker.frame ? t.gMatrix : (t.gmCache = Y.ticker.frame, t.gMatrix = K(e, !0, !1, !0));
}, we = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, Te = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = we(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, Ee = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : le[a] || (le[a] = ye(a)), o);
	return n;
}, De = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, Oe = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(De);
}, ke = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Ae = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), X && n !== 1) return X._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), X._final.push(function() {
		return (e.cache.uncache = 1) && De(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (Ee(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), Ee(e, ke), f = window.getComputedStyle(r); l--;) c[ke[l]] = f[ke[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new Qe(r);
	else if (u = be(e, ce), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new G(1, 0, 0, 1, p.left + R(), p.top + L());
	} else u.matrix = K(r, !1, !1, !0);
	return u = Be(u, e, !0), e.x = Q(u.x, .01), e.y = Q(u.y, .01), r;
}, je = function(e, t) {
	return t !== !0 && (t = J(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, Me = function(e) {
	return Te(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && Ae(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, Ne = function(e, t) {
	return t && e.idLookup[Pe(t).id] || e.elementStates[0];
}, Pe = function(e, t, n, r) {
	return e instanceof Qe ? e : e instanceof $ ? Ne(e, r) : new Qe(typeof e == "string" ? me(e) || console.warn(e + " not found") : e, t, n);
}, Fe = function(e, t) {
	for (var n = Y.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, Ie = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, Le = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + q++), t;
}, Re = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, ze = function(e, t, n) {
	return e && t.length && n.add(e(Re(t), n, new $(t, 0, !0)), 0);
}, Be = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && re && re(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, C = !S && e.simple && t.simple && !i, w, T, E, D, O, k, A;
	return C || !c ? (p = m = 1, h = w = 0) : (O = Ce(c), k = O.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = he(Math.atan2(k.b, k.a) * oe), w = he(Math.atan2(k.c, k.d) * oe + h) % 360, p = Math.sqrt(k.a ** 2 + k.b ** 2), m = Math.sqrt(k.c ** 2 + k.d ** 2) * Math.cos(w * se), i && (i = J(i)[0], D = Y.getProperty(i), A = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: D("scaleX"),
		scaleY: D("scaleY"),
		width: A ? A.width : Math.ceil(parseFloat(D("width", "px"))),
		height: A ? A.height : parseFloat(D("height", "px"))
	}), s.rotation = h + "deg", s.skewX = w + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = Q(d * p / v.scaleX, 0), f = Q(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && Ie(o, t.props), C || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), k = K(i || o, !1, !1, !0), T = O.apply({
		x: k.e,
		y: k.f
	}), E = O.apply({
		x: b,
		y: x
	}), l += E.x - T.x, u += E.y - T.y) : (O.e = O.f = 0, E = O.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += E.x, u += E.y), l = Q(l, .02), u = Q(u, .02), a && !(a instanceof Qe) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = w, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, Ve = function(e, t) {
	return e instanceof $ ? e : new $(e, t);
}, He = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, Ue = [], We = "width,height,overflowX,overflowY".split(","), Ge, Ke = function(e) {
	if (e !== Ge) {
		var t = Z.style, n = Z.clientWidth === window.outerWidth, r = Z.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) Ue[i] = t[We[i]];
			n && (t.width = Z.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = Z.clientHeight + "px", t.overflowX = "hidden"), Ge = e;
		} else if (Ge) {
			for (; i--;) Ue[i] ? t[We[i]] = Ue[i] : t.removeProperty(ye(We[i]));
			Ge = e;
		}
	}
}, qe = function(e, t) {
	for (var n = 0; n < e.length; n += 3) Y.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, Je = function(e, t, n, r) {
	e instanceof $ && t instanceof $ || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, C = i.prune, w = ("props" in n ? n : e).props, T = be(n, _e), E = Y.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), D = T, O = [], k = [], A = [], j = [], M = S === !0 ? 1 : S || 0, ee = typeof S == "function" ? S : function() {
		return M;
	}, N = e.interrupted || t.interrupted, P = E[r === 1 ? "from" : "to"], F, I, L, R, z, B, V, H, te, U, W, G, q, J;
	for (I in t.idLookup) W = t.alt[I] ? He(t, e, I) : t.idLookup[I], z = W.element, U = e.idLookup[I], e.alt[I] && z === U.element && (e.alt[I].isVisible || !W.isVisible) && (U = e.alt[I]), U ? (B = {
		t: z,
		b: U,
		a: W,
		sd: U.element === z ? 0 : W.isVisible ? 1 : -1
	}, A.push(B), B.sd && (B.sd < 0 && (B.b = W, B.a = U), N && Ee(B.b, w ? ue[w] : pe), b && A.push(B.swap = {
		t: U.element,
		b: B.b,
		a: B.a,
		sd: -B.sd,
		swap: B
	})), z._flip = U.element._flip = X ? X.timeline : E) : W.isVisible && (A.push({
		t: z,
		b: be(W, { isVisible: 1 }),
		a: W,
		sd: 0,
		entering: 1
	}), z._flip = X ? X.timeline : E);
	if (w && (xe[w] || Se(w)).forEach(function(e) {
		return T[e] = function(t) {
			return A[t].a.props[e];
		};
	}), A.finalStates = te = [], G = function() {
		Te(A), Ke(!0);
		var t = [];
		for (R = 0; R < A.length; R++) B = A[R], q = B.a, J = B.b, C && !q.isDifferent(J) && !B.entering ? A.splice(R--, 1) : (z = B.t, _ && !(B.sd < 0) && R && (q = B.a = q.clone({ matrix: K(z, !1, !1, !0) })), J.isVisible && q.isVisible ? (B.sd < 0 ? (_ && qe(t, 1), V = new Qe(z, w, e.simple), Be(V, q, y, 0, 0, V), V.matrix = K(z, !1, !1, !0), V.bounds = z.getBoundingClientRect(), V.css = B.b.css, B.a = q = V, b && (z.style.opacity = N ? J.opacity : q.opacity), x && j.push(z), _ && (qe(t, 2), t.push(z, z.getAttribute("style")))) : B.sd > 0 && b && (z.style.opacity = N ? q.opacity - J.opacity : "0"), Be(q, J, y, w), _ && B.sd < 0 && t.push(z.getAttribute("style"))) : J.isVisible !== q.isVisible && (J.isVisible ? q.isVisible || (J.css = q.css, k.push(J), A.splice(R--, 1), c && _ && Be(q, J, y, w)) : (q.isVisible && O.push(q), A.splice(R--, 1))), y || (z.style.maxWidth = Math.max(q.width, J.width) + "px", z.style.maxHeight = Math.max(q.height, J.height) + "px", z.style.minWidth = Math.min(q.width, J.width) + "px", z.style.minHeight = Math.min(q.height, J.height) + "px"), _ && g && z.classList.add(g)), te.push(q);
		var r;
		if (g && (r = te.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), Ke(!1), y ? (T.scaleX = function(e) {
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
			return A[e].a.rotation + (S ? ee(e, H[e], H) * 360 : 0);
		}, T.skewX = function(e) {
			return A[e].a.skewX;
		}, H = A.map(function(e) {
			return e.t;
		}), (v || v === 0) && (T.modifiers = { zIndex: function() {
			return v;
		} }, T.zIndex = v, T.immediateRender = n.immediateRender !== !1), b && (T.opacity = function(e) {
			return A[e].sd < 0 ? 0 : A[e].sd > 0 ? A[e].a.opacity : "+=0";
		}), j.length) {
			x = Y.utils.distribute(x);
			var i = H.slice(j.length);
			T.stagger = function(e, t) {
				return x(~j.indexOf(t) ? H.indexOf(A[e].swap.t) : e, t, i);
			};
		}
		if (fe.forEach(function(e) {
			return n[e] && E.eventCallback(e, n[e], n[e + "Params"]);
		}), u && H.length) for (I in D = be(T, _e), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) F = be(u[I], ve), F[I] = T[I], !("duration" in F) && "duration" in T && (F.duration = T.duration), F.stagger = T.stagger, P.call(E, H, F, 0), delete D[I];
		(H.length || k.length || O.length) && (g && E.add(function() {
			return ge(r, g, E._zTime < 0 ? "remove" : "add");
		}, 0) && !f && ge(r, g, "add"), H.length && P.call(E, H, D, 0)), ze(o, O, E), ze(s, k, E);
		var l = X && X.timeline;
		l && (l.add(E, 0), X._final.push(function() {
			return Oe(A, !a);
		})), L = E.duration(), E.call(function() {
			var e = E.time() >= L;
			e && !l && Oe(A, !a), g && ge(r, g, e ? "remove" : "add");
		});
	}, l && (c = A.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), X) {
		var ne;
		c && (ne = X._abs).push.apply(ne, je(A, c)), X._run.push(G);
	} else c && Me(je(A, c)), G();
	var Z = X ? X.timeline : E;
	return Z.revert = function() {
		return Xe(Z, 1, 1);
	}, Z;
}, Ye = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, Xe = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (Ye(e), t < 2 && e.progress(1), e.kill()), !0;
}, Ze = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, $ = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = Re(e), this.elementStates = e, Ze(this);
		else {
			this.targets = J(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			X && !r && X._kill.push(this), this.update(r || !!X);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new Qe(e, t.props, t.simple);
		}), Ze(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, Ze(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = Te(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = K(o.element, !1, !1, !0)), s = i[o.id], s && Be(o, s, t, !0, 0, o), o.matrix = K(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || ce;
		return (t in n ? n : n.props || ce)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Ze(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? He(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = ue[this.props] || pe, t = this.elementStates.length; t--;) Ee(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = Xe(i, +!e);
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
		return this.elementStates[this.targets.indexOf(me(e))];
	}, t.makeAbsolute = function() {
		return Te(this.elementStates.slice(0), !0, !0).map(Ae);
	}, e;
}(), Qe = /*#__PURE__*/ function() {
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
		var n = this, r = n.element, i = Y.getProperty(r), a = Y.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new G(1, 0, 0, 1, o.left + R(), o.top + L()) : K(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = Le(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : Q(i("width", "px"), .04), n.height = s ? s.height : Q(i("height", "px"), .04), e && Fe(n, xe[e] || Se(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && te(r).inverse(), n.simple = t || he(c.a) === 1 && !he(c.b) && !he(c.c) && he(c.d) === 1, n.uncache = 0;
	}, e;
}(), $e = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), et = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new $(), this.timeline = Y.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new $e(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = X, r = ne;
		return X = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, ne = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), ne = r, X = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = X, n = this.timeline, r = this.actions.length, i, a;
		for (X = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new $(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare(tt.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), Me(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), ie(e, "onComplete"));
		}), X = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return ie(this, "onStart"), n.restart(), this;
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
		return this !== X && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete ae[this.id];
	}, e;
}(), tt = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = Ve(t, n);
		return ne && ne.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), Je(e, Ve(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return Je(e, Ve(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return Je(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? be(n, ve) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && me(n.fitChild), p = Pe(t, c, d, e), m = Pe(e, 0, d, p), h = c ? ue[c] : pe, g = Y.context();
		return c && Ie(r, p.props), Ee(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			De(m), u && u.apply(this, arguments);
		}), a && Ae(m, p), r = Be(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return De(m);
			};
		}), s ? r : r.duration ? Y.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof $ ? e : new $(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), ae[e] || (ae[e] = new et(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof $ ? e.targets : J(e)).forEach(function(e) {
			return e && Xe(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (me(e) || ce)._flip;
	}, e.getElementState = function(e, t) {
		return new Qe(me(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = K(t, !0, !0).multiply(K(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (Z = typeof document < "u" && document.body, Z) {
			Y = e, N(Z), J = Y.utils.toArray, re = Y.core.getStyleSaver;
			var t = Y.utils.snap(.1);
			Q = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
tt.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin(tt);
//#endregion
//#region src/work-manifest.json
var nt = /*#__PURE__*/ JSON.parse("[{\"id\":\"gerngrosssaule\",\"href\":\"/werke/gerngrosssaule\",\"title\":\"„Gerngrosssäule“\",\"year\":\"2007\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Franz West, Heidulf Gerngross<br>„Gerngrosssäule”, 2007<br>Betonguss<br>Säule: 546 cm, Ei: 50 cm</p><p>‍</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"imageAlt\":\"„Gerngrosssäule“\",\"caption\":\"\"},{\"id\":\"rueckkehr-zu-freud\",\"href\":\"/werke/rueckkehr-zu-freud\",\"title\":\"„Rückkehr zu Freud“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>20 x 22,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"imageAlt\":\"„Rückkehr zu Freud“\",\"caption\":\"Heinz Neumann\"},{\"id\":\"passstueck\",\"href\":\"/werke/passstueck\",\"title\":\"Passstück\",\"year\":\"um 1975\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Eisendraht, Gaze, Gips, Farbe<br>35 x 53 x 22 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Stefan Altenburger, Courtesy Galerie Presenhuber Zürich\"},{\"id\":\"imported-item-56\",\"href\":\"/werke/imported-item-56\",\"title\":\"„Krauses Gekröse“\",\"year\":\"2014, nach einem Entwurf von 2011, Herstellung posthum\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Kunstharzlack<br>1100 x 550 x 650 cm</p>\",\"html\":\"\",\"view\":\"Arles, 2022\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"imageAlt\":\"„Krauses Gekröse“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-55\",\"href\":\"/werke/imported-item-55\",\"title\":\"Chaiselongue\",\"year\":\"1994\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stoff, Stahl, Schaumgummi<br>90,5 x 152,5 x 100 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"imageAlt\":\"Chaiselongue\",\"caption\":\"Courtesy  Phillips, London\"},{\"id\":\"imported-item-54\",\"href\":\"/werke/imported-item-54\",\"title\":\"„Kasseler Rippchen”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>18teilige Installation bestehend aus Arbeiten verschiedener Künstler:innen<br>zehnteilige Bilderwand, drei Objekte, zwei Tische, drei Stühle<br>Metall, Holz, Gips, Plastik, Farbe, Leinen<br>Maße variabel<br>Bilder:<br>Werner Büttner: 80 x 60 cm<br>Martin Kippenberger: 60 x 50,3 x 4,3 (tief) cm<br>Albert Oehlen: 67,3 x 56 x 2,8 (tief) cm<br>Heimo Zobernig: 100 x 150 cm<br>Herbert Brandl: 79 x 110 cm<br>Janc Szenizcei: 31,5 x 25,5 cm<br>Kiki Smith: 58,5 x 81 cm<br>Mary Heilman: 38 x 33 cm<br>Vittore Pisano: 43,3 x 53,3 cm<br>Rudolf Polanszky: 74,5 x 61,5 x 8,5 cm<br>Objekte:<br>Wolfgang Winter: 46 x 96 x 21 cm<br>Andreas Rohrbach: 214 x 17 x 10 cm<br>Jason Rhoades: 110 x 116 x 65,5 cm<br>Michael Kienzer: 22 x 22 x 22 cm<br>unbekannt: 31,5 x 16 x 10 cm (kl. Flasche, ummantelt, auf Tisch)<br>Franz West:<br>Tisch 1: 74 x 65 x 50 cm<br>Tisch 2: 122 x 44 x 44 cm<br>3 Stühle: 84 x 43 x 44 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 2019\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"imageAlt\":\"„Kasseler Rippchen”\",\"caption\":\"Stefan Altenburger\"},{\"id\":\"imported-item-53\",\"href\":\"/werke/imported-item-53\",\"title\":\"o.T. (für Ettore Spalletti)\",\"year\":\"1991\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Gaze, Gips<br>200 x 40 x 40 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"imageAlt\":\"o.T. (für Ettore Spalletti)\",\"caption\":\"\"},{\"id\":\"imported-item-52\",\"href\":\"/werke/imported-item-52\",\"title\":\"Labstück\",\"year\":\"1986\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metaxaflasche, Polyester, Holz<br>113 x 37 x 12 cm, Sockel: 124,5 x 139,5 x 35 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"Courtesy Galerie Capitain\"},{\"id\":\"liege-vermeer\",\"href\":\"/werke/liege-vermeer\",\"title\":\"Liege (Vermeer)\",\"year\":\"1989\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl<br>88 x 136 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"imageAlt\":\"Liege (Vermeer)\",\"caption\":\"Courtesy Nachlass Günther Förg\"},{\"id\":\"imported-item-50\",\"href\":\"/werke/imported-item-50\",\"title\":\"„Extroversion“\",\"year\":\"2000-2011\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 43 Kunstwerken von Franz West und weiteren Künstler:innen<br>diverse Materialien, Pavillon<br>(inkl. hängende und stehende Objekten): ca. 345 (H) x 800 x 900 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht 21er Haus, 2016\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"imageAlt\":\"„Extroversion“\",\"caption\":\"Hannes Stoll\"},{\"id\":\"imported-item-49\",\"href\":\"/werke/imported-item-49\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-48\",\"href\":\"/werke/imported-item-48\",\"title\":\"\\\"Den Anrainern zuliebe”\",\"year\":\"2001\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>5 Sitzwuste<br>Aluminium lackiert<br>zw. 684 + 716 cm (L), je 60 cm (Ø)</p>\",\"html\":\"\",\"view\":\"Westersingel, Rotterdam, 2012\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"imageAlt\":\"\\\"Den Anrainern zuliebe”\",\"caption\":\"© Jannes Linders & Sculpture International Rotterdam / CBK Rotterdam\"},{\"id\":\"imported-item-47\",\"href\":\"/werke/imported-item-47\",\"title\":\"o.T.\",\"year\":\"um 1982/83\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage auf Geschenkpapier<br>34,5 x 50 cm, Rahmen: 52 x 67 x 2,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Galerie Meyer Kainer\"},{\"id\":\"imported-item-46\",\"href\":\"/werke/imported-item-46\",\"title\":\"o.T.\",\"year\":\"1972\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Papier<br>13,7 x 21 cm<br>Rahmen: 25,1 x 31,1 x 3,2 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-45\",\"href\":\"/werke/imported-item-45\",\"title\":\"o.T.\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gips, Wellpappe<br>185 x 57 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-44\",\"href\":\"/werke/imported-item-44\",\"title\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"year\":\"2007\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>beidseitig: Collage, Acryl auf Digital Print (recto); Acryl, Lack, Digital Prints, Fotos collagiert (verso)<br>65,5 (H) x 51 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"imageAlt\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-43\",\"href\":\"/werke/imported-item-43\",\"title\":\"Plakatentwurf (Basel)\",\"year\":\"1998\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Digitalprint, Kugelschreiber, Acryl auf Schaumkarton<br>128 x 90,5 cm, Rahmen: 144 x 106,7 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"imageAlt\":\"Plakatentwurf (Basel)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-42\",\"href\":\"/werke/imported-item-42\",\"title\":\"Plakatentwurf (Franz West at David Zwirner)\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Farbkopie, collagiert auf Karton<br>100 x 70 cm, Rahmen: 103,8 x 74,1 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"imageAlt\":\"Plakatentwurf (Franz West at David Zwirner)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-41\",\"href\":\"/werke/imported-item-41\",\"title\":\"„Alibert\\\"\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Auflage: 200<br>Siebdruck 76 x 56 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"imageAlt\":\"„Alibert\\\"\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-40\",\"href\":\"/werke/imported-item-40\",\"title\":\"Passstück\",\"year\":\"o.J. (Ende 1970er Jahre)\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Papiermache, Dispersionsfarbe <br>34,5 x 54 x 47 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-39\",\"href\":\"/werke/imported-item-39\",\"title\":\"o.T.\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>230 x 305 x 280 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-38\",\"href\":\"/werke/imported-item-38\",\"title\":\"„Lotus”\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>166 x 210 x 290 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"imageAlt\":\"„Lotus”\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-37\",\"href\":\"/werke/imported-item-37\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-36\",\"href\":\"/werke/imported-item-36\",\"title\":\"„Eggs“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>vierteilig<br>Epoxydharz, Kunstharzlack<br>je ca. 105 (H) x 140 x 110 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"imageAlt\":\"„Eggs“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-35\",\"href\":\"/werke/imported-item-35\",\"title\":\"„Maya’s Dream“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz, Kunstharzlack, Beton<br>250 x 260 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"imageAlt\":\"„Maya’s Dream“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"ot\",\"href\":\"/werke/ot\",\"title\":\"o.T.\",\"year\":\"2012 (Fertigstellung posthum)\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>560 x 430 x 340 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-33\",\"href\":\"/werke/imported-item-33\",\"title\":\"„Parrhesia“\",\"year\":\"2012\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>7 Skulpturen auf Sockel<br>Papiermaché, Styropor, Karton, Acryllack, Acrylfarbe, Stahl, Sockel: Holz<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"imageAlt\":\"„Parrhesia“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-32\",\"href\":\"/werke/imported-item-32\",\"title\":\"„Variable”\",\"year\":\"1997\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Zehnteilige Bilderwand: zwei Wandobjekte, drei Schwarz-Weiß-Fotografien, zwei Siebdrucke, zwei Collagen, ein Plakatentwurf<br>150 x 320 x 10 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"imageAlt\":\"„Variable”\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-31\",\"href\":\"/werke/imported-item-31\",\"title\":\"Aus der Installation „12 Diwane”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Schaumstoff, Jute, Teppich/Wolle (bzw. Baumwolle für die MAK Exemplare)<br>je 200 x 63 x 70 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"imageAlt\":\"Aus der Installation „12 Diwane”\",\"caption\":\"Courtesy Dorotheum\"},{\"id\":\"imported-item-30\",\"href\":\"/werke/imported-item-30\",\"title\":\"o.T.\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Styropor, Acryllack, Stahl<br>115 x 63 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-29\",\"href\":\"/werke/imported-item-29\",\"title\":\"„Epiphanie an Stühlen“\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Hängende Skulptur, zwei StühleSkulptur: Stahl, PU-Schaum, Gaze, Dispersion<br>Ø 165 cm, 6 Arme je ca. 115 x 25 x 25 cm<br>Stühle: Stahl, Holz, Bambus, Leinen<br>je ca. 85 x 45 x 55 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"imageAlt\":\"„Epiphanie an Stühlen“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"echolalie\",\"href\":\"/werke/echolalie\",\"title\":\"„Echolalie“\",\"year\":\"2010\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 7 Skulpturen, 1 Clubfauteil, 2 Tröge<br>diverse Materialien und Dimensionen</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"imageAlt\":\"„Echolalie“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-27\",\"href\":\"/werke/imported-item-27\",\"title\":\"„Meeting Point 2“ (Modell)\",\"year\":\"2000/2009\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Gips, Acrylglas, Holz, Karton<br>32 x 41 x 41 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"imageAlt\":\"„Meeting Point 2“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-26\",\"href\":\"/werke/imported-item-26\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe, Farbkübel<br>126 x 113,5 x 74 cm<br>Sockel: 46 (H) x 102 x 77 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-25\",\"href\":\"/werke/imported-item-25\",\"title\":\"o.T.\",\"year\":\"1977\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>ca. 20 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Generali Foundation\"},{\"id\":\"imported-item-24\",\"href\":\"/werke/imported-item-24\",\"title\":\"„Warum ist etwas und nicht nichts”\",\"year\":\"1997\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahlblech lackiert, Laminat<br>220 x 390 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"imageAlt\":\"„Warum ist etwas und nicht nichts”\",\"caption\":\"© Margherita Spiluttini\"},{\"id\":\"imported-item-23\",\"href\":\"/werke/imported-item-23\",\"title\":\"Passstück (bemalt von Eugenia Rochas)\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Holz, Farbe, Papier<br>56 x 53 x 26 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"imageAlt\":\"Passstück (bemalt von Eugenia Rochas)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-22\",\"href\":\"/werke/imported-item-22\",\"title\":\"„NYCNAC“\",\"year\":\"2008\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Paravent mit Tapete, 2 bis 8 Passstücke und Video<br>Digitalprint, Acrylfarbe, Holz, Video<br>Kabine: 4 Flügel je 240 x 160 cm<br>Passstücke: je 100 x 20 x 25 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"imageAlt\":\"„NYCNAC“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-21\",\"href\":\"/werke/imported-item-21\",\"title\":\"„Pommes d’Adam“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Modell mit vier Skulpturen in Vitrine<br>Papiermaché, Holz, Plexiglas<br>87 x 126 x 64 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"imageAlt\":\"„Pommes d’Adam“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-20\",\"href\":\"/werke/imported-item-20\",\"title\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"year\":\"2008\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage, Digitalprint, Acryl auf Schaumkarton<br>113,5 x 132,6 cm<br>Rahmen: 124 x 143,5 x 5,5 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"imageAlt\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-19\",\"href\":\"/werke/imported-item-19\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyesterkern, Dispersion, Besenstiel, Gips, Gaze<br>92,5 x 44,5 x 42,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-18\",\"href\":\"/werke/imported-item-18\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyester, Glasfiber, Dispersion<br>33,5 x 45,5 cm (Ø)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-17\",\"href\":\"/werke/imported-item-17\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-16\",\"href\":\"/werke/imported-item-16\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-15\",\"href\":\"/werke/imported-item-15\",\"title\":\"“We’ll not carry coals”\",\"year\":\"2000/2007\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>sechsteilige Installation mit Arbeiten verschiedener Künstler<br>diverse Materialien<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Kunstraum Innsbruck, 2007\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"imageAlt\":\"“We’ll not carry coals”\",\"caption\":\"Clemens Schillinger\"},{\"id\":\"imported-item-14\",\"href\":\"/werke/imported-item-14\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe<br>154 x 103 x 63 cm<br>Sockel: 100 x 50 x 60 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-13\",\"href\":\"/werke/imported-item-13\",\"title\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitungsseite<br>26,6 x 21,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"imageAlt\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-12\",\"href\":\"/werke/imported-item-12\",\"title\":\"“Schöner Wohnen”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>zehnteilige Bilderwand mit Arbeiten verschiedener KünstlerInnen, zwei Clubfauteuils, Trog<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"imageAlt\":\"“Schöner Wohnen”\",\"caption\":\"A. Burger, Zürich\"},{\"id\":\"imported-item-11\",\"href\":\"/werke/imported-item-11\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"\"},{\"id\":\"imported-item-10\",\"href\":\"/werke/imported-item-10\",\"title\":\"„Sphairos (Die Kopie ihres Titels)”\",\"year\":\"1998\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>150 x 150 x 150 cm, Sockel: 49 x 240 x 290 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Skulptur im Schlosspark Ambras, Innsbruck, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"imageAlt\":\"„Sphairos (Die Kopie ihres Titels)”\",\"caption\":\"Heinz Stanger\"},{\"id\":\"imported-item-9\",\"href\":\"/werke/imported-item-9\",\"title\":\"“Viennoiserie“\",\"year\":\"1998\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>10teilige Bilderwand mit Arbeiten verschiedener Künstler, Diwan, 2 Editionen, Sockel, Tisch<br>Einzelne Arbeiten:<br>Richard Jackson: 66 x 101 cm<br>Paul McCarthy: 61 x 48 cm<br>Raymond Pettibon: 44 x 28 cm<br>Roland Kollnitz: 138 x 38 x 5 cm<br>Otto Muehl: 55 x 65 cm<br>Seamus Farel a.o.: 85 x 103 cm<br>Joseph Kosuth: 125,5 x 107 cm<br>Franz West (braun): 85 x 103 cm<br>Franz West (Kleiderbügel): 44 x 24 x 5 cm<br>Franz West (Deckel): 37 x 28 x 3,5 cm<br>Franz West (linke Skulptur): 68 x 68 x 104 (H) cm<br>Sockel: 59,5 x 37 x 98 (H) cm<br>Franz West (rechte Skulptur): 66 x 78 x 93,5 (H) cm<br>Tisch von Prinzgau/Podgorschek, von Franz West überarbeitet: 74 x 97 ø cm<br>Franz West (Diwan): 230 x 80 x 90 (H) cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Atelier Stubenring, 1998\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"imageAlt\":\"“Viennoiserie“\",\"caption\":\"Jens Preusse, Wien\"},{\"id\":\"imported-item-8\",\"href\":\"/werke/imported-item-8\",\"title\":\"“Spiegel in Kabine mit Passstücken”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>4 Passstücke, Bodenplatte, Kabine, Spiegel von Michelangelo Pistoletto, Video mit Handlungsanregungen, Monitor<br>Kabine: Spiegel, Holz, Zeitung, Dispersion; Passstücke: Epoxydharz, Metall; Monitor, Video<br>Kabine: 220 x 260 x 360 cm; Spiegel: 220 x 140 cm; Passstücke: 112 x 16 x 15 cm, 112 x 30 x 22 cm, 108 x 31 x 22,5 cm, 114 x 29 x 28 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Les Abbatoirs, Toulouse, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"imageAlt\":\"“Spiegel in Kabine mit Passstücken”\",\"caption\":\"© Marc Boyer\"},{\"id\":\"imported-item-7\",\"href\":\"/werke/imported-item-7\",\"title\":\"„Doku-Stuhl”\",\"year\":\"1997-2003\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Offene Edition, alle individuell in Farbe und Gestaltung<br>Stahl, Holz, Schaumstoff, Leinen, Baumwolle<br>je ca. 84 x 45 x 54 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht documenta X, Kassel, 1997\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"imageAlt\":\"„Doku-Stuhl”\",\"caption\":\"Werner Maschmann\"},{\"id\":\"imported-item-6\",\"href\":\"/werke/imported-item-6\",\"title\":\"Labstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Glas, Metall, Pappe<br>22 x 39 x 28 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"\"},{\"id\":\"imported-item-5\",\"href\":\"/werke/imported-item-5\",\"title\":\"„Auto Sex”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Heimo Zobernig, Franz West<br>halbtransparente Spiegelfolie, Gummi, Papierklemmen<br>zwei Stühle: Metall, Holz, Schaumstoff, Baumwolle<br>je 84 x 45 x 54 cm<br>Folie: 250 x 150 cm<br>Gummi: 141 x 320 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Hauser &amp; Wirth, Zürich, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"imageAlt\":\"„Auto Sex”\",\"caption\":\"\"},{\"id\":\"imported-item-4\",\"href\":\"/werke/imported-item-4\",\"title\":\"„PA 1”\",\"year\":\"1990\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Bodenplatte, Monitor, Metall, Stühle<br>Tisch: 43 x 60 x 110 cm<br>sechs Stühle: Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst, 1996\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"imageAlt\":\"„PA 1”\",\"caption\":\"Bettina Letz, Wien\"},{\"id\":\"imported-item-3\",\"href\":\"/werke/imported-item-3\",\"title\":\"„Schöne Aussicht”\",\"year\":\"1988\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Zeitung<br>113 x 84 x 46 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Zwirner\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"imageAlt\":\"„Schöne Aussicht”\",\"caption\":\"\"},{\"id\":\"imported-item-2\",\"href\":\"/werke/imported-item-2\",\"title\":\"„BI 5” (Passstück)\",\"year\":\"1990\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminiumguß bemalt<br>50 x 27 x 77 cm<br>Sockel: 77 x 74 x 45 cm</p>\",\"html\":\"\",\"view\":\"Atelier Weißgerberlände, 1990\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"imageAlt\":\"„BI 5” (Passstück)\",\"caption\":\"\"}]"), rt = /*#__PURE__*/ JSON.parse("[{\"id\":\"gerngrosssaule\",\"href\":\"/en/werke/gerngrosssaule\",\"title\":\"„Gerngrosssäule“\",\"year\":\"2007\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Franz West, Heidulf Gerngross<br>„Gerngrosssäule”, 2007<br>cast concrete<br>column: 546 cm, egg: 50 cm</p><p>‍</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"imageAlt\":\"„Gerngrosssäule“\",\"caption\":\"\"},{\"id\":\"rueckkehr-zu-freud\",\"href\":\"/en/werke/rueckkehr-zu-freud\",\"title\":\"„Rückkehr zu Freud“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>gouache on a magazine page<br>20 x 22.6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"imageAlt\":\"„Rückkehr zu Freud“\",\"caption\":\"Heinz Neumann\"},{\"id\":\"passstueck\",\"href\":\"/en/werke/passstueck\",\"title\":\"Passstück\",\"year\":\"c. 1975\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>iron wire, gauze, plaster and paint<br>35 x 53 x 22 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Stefan Altenburger, Courtesy of Galerie Presenhuber Zurich\"},{\"id\":\"imported-item-56\",\"href\":\"/en/werke/imported-item-56\",\"title\":\"„Krauses Gekröse“\",\"year\":\"2014, after a design from 2011, produced posthumously\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>aluminium and synthetic resin paint<br>1100 x 550 x 650 cm</p>\",\"html\":\"\",\"view\":\"Arles, 2022\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"imageAlt\":\"„Krauses Gekröse“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-55\",\"href\":\"/en/werke/imported-item-55\",\"title\":\"Chaiselongue\",\"year\":\"1994\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>fabric, steel and foam rubber<br>90.5 x 152.5 x 100 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"imageAlt\":\"Chaiselongue\",\"caption\":\"Courtesy  Phillips, London\"},{\"id\":\"imported-item-54\",\"href\":\"/en/werke/imported-item-54\",\"title\":\"„Kasseler Rippchen”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>18-part installation featuring works by various artists<br>ten-part picture wall, three objects, two tables and three chairs<br>Metal, wood, plaster, plastic, paint and linen<br>Dimensions variable<br>Pictures:<br>Werner Büttner: 80 x 60 cm<br>Martin Kippenberger: 60 x 50.3 x 4.3 cm (depth)<br>Albert Oehlen: 67.3 x 56 x 2.8 cm (depth)<br>Heimo Zobernig: 100 x 150 cm<br>Herbert Brandl: 79 x 110 cm<br>Janc Szenizcei: 31.5 x 25.5 cm<br>Kiki Smith: 58.5 x 81 cm<br>Mary Heilman: 38 x 33 cm<br>Vittore Pisano: 43.3 x 53.3 cm<br>Rudolf Polanszky: 74.5 x 61.5 x 8.5 cm<br>Objects:<br>Wolfgang Winter: 46 x 96 x 21 cm<br>Andreas Rohrbach: 214 x 17 x 10 cm<br>Jason Rhoades: 110 x 116 x 65.5 cm<br>Michael Kienzer: 22 x 22 x 22 cm<br>Unknown: 31.5 x 16 x 10 cm (small wrapped bottle on a table)<br>Franz West:<br>Table 1: 74 x 65 x 50 cm<br>Table 2: 122 x 44 x 44 cm<br>Three chairs: 84 x 43 x 44 cm</p>\",\"html\":\"\",\"view\":\"Installation view, Hauser & Wirth, 2019\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"imageAlt\":\"„Kasseler Rippchen”\",\"caption\":\"Stefan Altenburger\"},{\"id\":\"imported-item-53\",\"href\":\"/en/werke/imported-item-53\",\"title\":\"Untitled (for Ettore Spalletti)\",\"year\":\"1991\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>wood, gauze and plaster<br>200 x 40 x 40 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"imageAlt\":\"Untitled (for Ettore Spalletti)\",\"caption\":\"\"},{\"id\":\"imported-item-52\",\"href\":\"/en/werke/imported-item-52\",\"title\":\"Labstück\",\"year\":\"1986\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metaxa bottle, polyester and wood<br>113 x 37 x 12 cm, plinth: 124.5 x 139.5 x 35 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"Courtesy of Galerie Capitain\"},{\"id\":\"liege-vermeer\",\"href\":\"/en/werke/liege-vermeer\",\"title\":\"Liege (Vermeer)\",\"year\":\"1989\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>steel<br>88 x 136 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"imageAlt\":\"Liege (Vermeer)\",\"caption\":\"Courtesy of the Estate of Günther Förg\"},{\"id\":\"imported-item-50\",\"href\":\"/en/werke/imported-item-50\",\"title\":\"„Extroversion“\",\"year\":\"2000-2011\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation comprising 43 works by Franz West and other artists<br>Various materials; pavilion (including hanging and standing objects): approx. 345 (H) x 800 x 900 cm</p>\",\"html\":\"\",\"view\":\"Installation view, 21er Haus, 2016\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"imageAlt\":\"„Extroversion“\",\"caption\":\"Hannes Stoll\"},{\"id\":\"imported-item-49\",\"href\":\"/en/werke/imported-item-49\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>steel and textile straps<br>approx. 87 (H) x 51 x 45 cm (standard dimensions)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-48\",\"href\":\"/en/werke/imported-item-48\",\"title\":\"\\\"Den Anrainern zuliebe”\",\"year\":\"2001\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>five seating sausages<br>painted aluminium<br>684–716 cm (L), 60 cm (Ø) each</p>\",\"html\":\"\",\"view\":\"Westersingel, Rotterdam, 2012\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"imageAlt\":\"\\\"Den Anrainern zuliebe”\",\"caption\":\"© Jannes Linders & Sculpture International Rotterdam / CBK Rotterdam\"},{\"id\":\"imported-item-47\",\"href\":\"/en/werke/imported-item-47\",\"title\":\"Untitled\",\"year\":\"c. 1982/83\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>collage on wrapping paper<br>34.5 x 50 cm, frame: 52 x 67 x 2.6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Courtesy of Galerie Meyer Kainer\"},{\"id\":\"imported-item-46\",\"href\":\"/en/werke/imported-item-46\",\"title\":\"Untitled\",\"year\":\"1972\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>gouache on paper<br>13.7 x 21 cm<br>frame: 25.1 x 31.1 x 3.2 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Courtesy of Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-45\",\"href\":\"/en/werke/imported-item-45\",\"title\":\"Untitled\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>plaster, corrugated cardboard<br>185 x 57 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Courtesy of Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-44\",\"href\":\"/en/werke/imported-item-44\",\"title\":\"Poster Design (Sequence 1 – Painting and Sculpture in the François Pinault Collection)\",\"year\":\"2007\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>on both sides: collage and acrylic on digital print (recto); acrylic, lacquer, digital prints and collaged photographs (verso)<br>65.5 (H) x 51 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"imageAlt\":\"Poster Design (Sequence 1 – Painting and Sculpture in the François Pinault Collection)\",\"caption\":\"Birgit and Peter Kainz\"},{\"id\":\"imported-item-43\",\"href\":\"/en/werke/imported-item-43\",\"title\":\"Poster Design (Basel)\",\"year\":\"1998\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>digital print, ballpoint pen and acrylic on foam board<br>128 x 90.5 cm, frame: 144 x 106.7 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"imageAlt\":\"Poster Design (Basel)\",\"caption\":\"Birgit and Peter Kainz\"},{\"id\":\"imported-item-42\",\"href\":\"/en/werke/imported-item-42\",\"title\":\"Poster Design (Franz West at David Zwirner)\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>colour photocopy, collaged on cardboard<br>100 x 70 cm, frame: 103.8 x 74.1 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"imageAlt\":\"Poster Design (Franz West at David Zwirner)\",\"caption\":\"Birgit and Peter Kainz\"},{\"id\":\"imported-item-41\",\"href\":\"/en/werke/imported-item-41\",\"title\":\"„Alibert\\\"\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>edition of 200<br>screen print 76 x 56 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"imageAlt\":\"„Alibert\\\"\",\"caption\":\"Birgit and Peter Kainz\"},{\"id\":\"imported-item-40\",\"href\":\"/en/werke/imported-item-40\",\"title\":\"Passstück\",\"year\":\"undated (late 1970s)\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>metal, papier-mâché, emulsion paint <br>34.5 x 54 x 47 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Courtesy of Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-39\",\"href\":\"/en/werke/imported-item-39\",\"title\":\"Untitled\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>epoxy resin<br>230 x 305 x 280 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-38\",\"href\":\"/en/werke/imported-item-38\",\"title\":\"„Lotus”\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>epoxy resin<br>166 x 210 x 290 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"imageAlt\":\"„Lotus”\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-37\",\"href\":\"/en/werke/imported-item-37\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>steel and textile straps<br>approx. 87 (H) x 51 x 45 cm (standard dimensions)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-36\",\"href\":\"/en/werke/imported-item-36\",\"title\":\"„Eggs“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>four-part<br>epoxy resin and synthetic resin paint<br>approx. 105 (H) x 140 x 110 cm each</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"imageAlt\":\"„Eggs“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-35\",\"href\":\"/en/werke/imported-item-35\",\"title\":\"„Maya’s Dream“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>epoxy resin, synthetic resin paint and concrete<br>250 x 260 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"imageAlt\":\"„Maya’s Dream“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"ot\",\"href\":\"/en/werke/ot\",\"title\":\"Untitled\",\"year\":\"2012 (completed posthumously)\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>painted aluminium<br>560 x 430 x 340 cm</p>\",\"html\":\"\",\"view\":\"Installation view, Museum Moderner Kunst Stiftung Ludwig, Vienna, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-33\",\"href\":\"/en/werke/imported-item-33\",\"title\":\"„Parrhesia“\",\"year\":\"2012\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Seven sculptures on plinths<br>papier-mâché, polystyrene, cardboard, acrylic lacquer, acrylic paint, steel; plinth: wood<br>dimensions variable</p>\",\"html\":\"\",\"view\":\"Installation view, Museum Moderner Kunst Stiftung Ludwig, Vienna, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"imageAlt\":\"„Parrhesia“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-32\",\"href\":\"/en/werke/imported-item-32\",\"title\":\"„Variable”\",\"year\":\"1997\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Ten-part picture wall: two wall objects, three black-and-white photographs, two screen prints, two collages and one poster design<br>150 x 320 x 10 cm</p>\",\"html\":\"\",\"view\":\"Installation view, Museum Moderner Kunst Stiftung Ludwig, Vienna, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"imageAlt\":\"„Variable”\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-31\",\"href\":\"/en/werke/imported-item-31\",\"title\":\"From the installation “12 Divans”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>steel, foam, jute, carpet/wool (or cotton for the MAK examples)<br>each 200 x 63 x 70 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"imageAlt\":\"From the installation “12 Divans”\",\"caption\":\"Courtesy of Dorotheum\"},{\"id\":\"imported-item-30\",\"href\":\"/en/werke/imported-item-30\",\"title\":\"Untitled\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>papier-mâché, polystyrene, acrylic lacquer and steel<br>115 x 63 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-29\",\"href\":\"/en/werke/imported-item-29\",\"title\":\"„Epiphanie an Stühlen“\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Hanging sculpture and two chairs<br>Sculpture: steel, polyurethane foam, gauze, emulsion paint<br>Ø 165 cm; six arms, approx. 115 x 25 x 25 cm each<br>Chairs: steel, wood, bamboo, linen<br>approx. 85 x 45 x 55 cm each</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"imageAlt\":\"„Epiphanie an Stühlen“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"echolalie\",\"href\":\"/en/werke/echolalie\",\"title\":\"„Echolalie“\",\"year\":\"2010\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>installation comprising seven sculptures, one club armchair and two troughs<br>various materials and dimensions</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"imageAlt\":\"„Echolalie“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-27\",\"href\":\"/en/werke/imported-item-27\",\"title\":\"„Meeting Point 2“ (model)\",\"year\":\"2000/2009\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>aluminium, plaster, acrylic glass, wood and cardboard<br>32 x 41 x 41 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"imageAlt\":\"„Meeting Point 2“ (model)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-26\",\"href\":\"/en/werke/imported-item-26\",\"title\":\"Untitled\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>papier-mâché, metal, wood, paint and paint bucket<br>126 x 113.5 x 74 cm<br>plinth: 46 (H) x 102 x 77 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-25\",\"href\":\"/en/werke/imported-item-25\",\"title\":\"Untitled\",\"year\":\"1977\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>gouache on a magazine page<br>approx. 20 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Generali Foundation\"},{\"id\":\"imported-item-24\",\"href\":\"/en/werke/imported-item-24\",\"title\":\"„Warum ist etwas und nicht nichts”\",\"year\":\"1997\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>painted sheet steel and laminate<br>220 x 390 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"imageAlt\":\"„Warum ist etwas und nicht nichts”\",\"caption\":\"© Margherita Spiluttini\"},{\"id\":\"imported-item-23\",\"href\":\"/en/werke/imported-item-23\",\"title\":\"Passstück (painted by Eugenia Rochas)\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>metal, wood, paint and paper<br>56 x 53 x 26 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"imageAlt\":\"Passstück (painted by Eugenia Rochas)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-22\",\"href\":\"/en/werke/imported-item-22\",\"title\":\"„NYCNAC“\",\"year\":\"2008\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Wallpapered folding screen, two to eight Adaptives and video<br>Digital print, acrylic paint, wood, video<br>Booth: four panels, each 240 x 160 cm<br>Adaptives: 100 x 20 x 25 cm each</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"imageAlt\":\"„NYCNAC“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-21\",\"href\":\"/en/werke/imported-item-21\",\"title\":\"„Pommes d’Adam“ (model)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>model with four sculptures in a display case<br>papier-mâché, wood, Plexiglas<br>87 x 126 x 64 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"imageAlt\":\"„Pommes d’Adam“ (model)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-20\",\"href\":\"/en/werke/imported-item-20\",\"title\":\"Poster Design (Passstücke, Gagosian Gallery N.Y.)\",\"year\":\"2008\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>collage, digital print and acrylic on foam board<br>113.5 x 132.6 cm<br>frame: 124 x 143.5 x 5.5 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"imageAlt\":\"Poster Design (Passstücke, Gagosian Gallery N.Y.)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-19\",\"href\":\"/en/werke/imported-item-19\",\"title\":\"Passstück\",\"year\":\"undated\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>polyester core, emulsion paint, broomstick, plaster and gauze<br>92.5 x 44.5 x 42.3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-18\",\"href\":\"/en/werke/imported-item-18\",\"title\":\"Passstück\",\"year\":\"undated\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyester, fibreglass, emulsion paint<br>33.5 x 45.5 cm (Ø)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-17\",\"href\":\"/en/werke/imported-item-17\",\"title\":\"„Eine Studie“ (model)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>papier-mâché, metal, acrylic paint, wood and Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"imageAlt\":\"„Eine Studie“ (model)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-16\",\"href\":\"/en/werke/imported-item-16\",\"title\":\"„Eine Studie“ (model)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>papier-mâché, metal, acrylic paint, wood and Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"imageAlt\":\"„Eine Studie“ (model)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-15\",\"href\":\"/en/werke/imported-item-15\",\"title\":\"“We’ll not carry coals”\",\"year\":\"2000/2007\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>six-part installation featuring works by various artists<br>various materials<br>dimensions variable</p>\",\"html\":\"\",\"view\":\"Installation view, Kunstraum Innsbruck, 2007\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"imageAlt\":\"“We’ll not carry coals”\",\"caption\":\"Clemens Schillinger\"},{\"id\":\"imported-item-14\",\"href\":\"/en/werke/imported-item-14\",\"title\":\"Untitled\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>papier-mâché, metal, wood and paint<br>154 x 103 x 63 cm<br>plinth: 100 x 50 x 60 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"imageAlt\":\"Untitled\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-13\",\"href\":\"/en/werke/imported-item-13\",\"title\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>gouache on a newspaper page<br>26.6 x 21.3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"imageAlt\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-12\",\"href\":\"/en/werke/imported-item-12\",\"title\":\"“Schöner Wohnen”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>ten-part picture wall featuring works by various artists, two club armchairs and a trough<br>dimensions variable</p>\",\"html\":\"\",\"view\":\"Installation view, Hauser & Wirth, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"imageAlt\":\"“Schöner Wohnen”\",\"caption\":\"A. Burger, Zurich\"},{\"id\":\"imported-item-11\",\"href\":\"/en/werke/imported-item-11\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>steel and textile straps<br>approx. 87 (H) x 51 x 45 cm (standard dimensions)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"\"},{\"id\":\"imported-item-10\",\"href\":\"/en/werke/imported-item-10\",\"title\":\"„Sphairos (Die Kopie ihres Titels)”\",\"year\":\"1998\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>painted aluminium<br>150 x 150 x 150 cm, plinth: 49 x 240 x 290 cm</p>\",\"html\":\"\",\"view\":\"Installation view, Sculpture in the Ambras Castle Park, Innsbruck, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"imageAlt\":\"„Sphairos (Die Kopie ihres Titels)”\",\"caption\":\"Heinz Stanger\"},{\"id\":\"imported-item-9\",\"href\":\"/en/werke/imported-item-9\",\"title\":\"“Viennoiserie“\",\"year\":\"1998\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Ten-part picture wall with works by various artists, divan, two editions, plinth and table<br>Individual works:<br>Richard Jackson: 66 x 101 cm<br>Paul McCarthy: 61 x 48 cm<br>Raymond Pettibon: 44 x 28 cm<br>Roland Kollnitz: 138 x 38 x 5 cm<br>Otto Muehl: 55 x 65 cm<br>Seamus Farel et al.: 85 x 103 cm<br>Joseph Kosuth: 125.5 x 107 cm<br>Franz West (brown): 85 x 103 cm<br>Franz West (coat hanger): 44 x 24 x 5 cm<br>Franz West (lid): 37 x 28 x 3.5 cm<br>Franz West (left sculpture): 68 x 68 x 104 (H) cm<br>Plinth: 59.5 x 37 x 98 (H) cm<br>Franz West (right sculpture): 66 x 78 x 93.5 (H) cm<br>Table by Prinzgau/Podgorschek, reworked by Franz West: 74 x 97 (Ø) cm<br>Franz West (divan): 230 x 80 x 90 (H) cm</p>\",\"html\":\"\",\"view\":\"Installation view, Atelier Stubenring, 1998\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"imageAlt\":\"“Viennoiserie“\",\"caption\":\"Jens Preusse, Vienna\"},{\"id\":\"imported-item-8\",\"href\":\"/en/werke/imported-item-8\",\"title\":\"“Spiegel in Kabine mit Passstücken”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Four Adaptives, base plate, booth, mirror by Michelangelo Pistoletto, video with suggested actions and monitor<br>Booth: mirror, wood, newspaper, emulsion paint; Adaptives: epoxy resin, metal; monitor, video<br>Booth: 220 x 260 x 360 cm; mirror: 220 x 140 cm; Adaptives: 112 x 16 x 15 cm, 112 x 30 x 22 cm, 108 x 31 x 22.5 cm, 114 x 29 x 28 cm</p>\",\"html\":\"\",\"view\":\"Installation view, Les Abbatoirs, Toulouse, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"imageAlt\":\"“Spiegel in Kabine mit Passstücken”\",\"caption\":\"© Marc Boyer\"},{\"id\":\"imported-item-7\",\"href\":\"/en/werke/imported-item-7\",\"title\":\"„Doku-Stuhl”\",\"year\":\"1997-2003\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>open edition; each piece individually coloured and designed<br>steel, wood, foam, linen and cotton<br>approx. 84 x 45 x 54 cm each</p>\",\"html\":\"\",\"view\":\"Installation view, documenta X, Kassel, 1997\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"imageAlt\":\"„Doku-Stuhl”\",\"caption\":\"Werner Maschmann\"},{\"id\":\"imported-item-6\",\"href\":\"/en/werke/imported-item-6\",\"title\":\"Labstück\",\"year\":\"undated\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>wood, glass, metal and cardboard<br>22 x 39 x 28 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"\"},{\"id\":\"imported-item-5\",\"href\":\"/en/werke/imported-item-5\",\"title\":\"„Auto Sex”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Heimo Zobernig, Franz West<br>semi-transparent mirror film, rubber, paper clips<br>two chairs: metal, wood, foam, cotton<br>each 84 x 45 x 54 cm<br>film: 250 x 150 cm<br>rubber: 141 x 320 cm</p>\",\"html\":\"\",\"view\":\"Installation view, Galerie Hauser & Wirth, Zurich, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"imageAlt\":\"„Auto Sex”\",\"caption\":\"\"},{\"id\":\"imported-item-4\",\"href\":\"/en/werke/imported-item-4\",\"title\":\"„PA 1”\",\"year\":\"1990\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>base plate, monitor, metal, chairs<br>table: 43 x 60 x 110 cm<br>six chairs: dimensions variable</p>\",\"html\":\"\",\"view\":\"Installation view, Museum Moderner Kunst, 1996\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"imageAlt\":\"„PA 1”\",\"caption\":\"Bettina Letz, Vienna\"},{\"id\":\"imported-item-3\",\"href\":\"/en/werke/imported-item-3\",\"title\":\"„Schöne Aussicht”\",\"year\":\"1988\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>steel and newspaper<br>113 x 84 x 46 cm</p>\",\"html\":\"\",\"view\":\"Installation view, Galerie Zwirner\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"imageAlt\":\"„Schöne Aussicht”\",\"caption\":\"\"},{\"id\":\"imported-item-2\",\"href\":\"/en/werke/imported-item-2\",\"title\":\"„BI 5” (Passstück)\",\"year\":\"1990\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Painted cast aluminium<br>50 x 27 x 77 cm<br>plinth: 77 x 74 x 45 cm</p>\",\"html\":\"\",\"view\":\"Atelier Weißgerberlände, 1990\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"imageAlt\":\"„BI 5” (Passstück)\",\"caption\":\"\"}]");
//#endregion
//#region src/work-overlay.ts
r.registerPlugin(tt);
var it = /^\/en(?:\/|$)/.test(window.location.pathname), at = it ? rt : nt, ot = new Map(at.map((e) => [e.id, e])), st = at.map((e, t) => ({
	...e,
	index: t
})), ct = .82, lt = ct;
function ut() {
	let e = new URL(window.location.href);
	return e.searchParams.delete("work"), `${e.pathname}${e.search}${e.hash}`;
}
function dt() {
	let e = new URL(window.location.href);
	return e.pathname = it ? "/en/werk-ueberblick" : "/werk-ueberblick", e.searchParams.delete("work"), e.hash = "werke", `${e.pathname}${e.search}${e.hash}`;
}
function ft(e) {
	try {
		return new URL(e, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {
		return "";
	}
}
function pt(e, t) {
	let n = document.createElement("div");
	return n.className = "work-overlay__flyer", n.setAttribute("aria-hidden", "true"), Object.assign(n.style, {
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`
	}), n.append(e), document.body.append(n), n;
}
function mt(e) {
	let t = e.cloneNode(!1);
	return t.removeAttribute("id"), t.setAttribute("aria-hidden", "true"), t.style.visibility = "hidden", e.naturalWidth && e.naturalHeight && (t.width = e.naturalWidth, t.height = e.naturalHeight), t;
}
function ht() {
	let e = document.querySelector(".top_bar_section"), t = (e == null ? void 0 : e.cloneNode(!0)) || document.createElement("nav");
	t.classList.add("top_bar_section", "u-section", "is-relative", "work-overlay__header"), t.removeAttribute("data-wf--top-bar--variant"), t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), t.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")), t.querySelectorAll("[data-logo-variant]").forEach((e) => e.remove()), t.querySelectorAll(".top_bar_center .nav_logo_link svg, .top_bar_center .nav_logo_image_link img.nav_logo").forEach((e) => e.style.removeProperty("visibility"));
	let n = t.querySelector(".top_bar_left") || t, r = document.createElement("a");
	return r.className = "text-link is-back w-inline-block work-overlay__back", r.href = ut(), r.setAttribute("data-transition", "false"), r.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 15\" class=\"arrow is-rotate\" aria-hidden=\"true\"><path d=\"M3.60046 5.7002H0V9.3002H3.60046V5.7002Z\" fill=\"currentColor\" class=\"arrow-dot\"/><path d=\"M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z\" fill=\"currentColor\" class=\"arrow-arrow\"/></svg><div class=\"text-block\">" + (it ? "Back" : "Zurück") + "</div>", n.replaceChildren(r), {
		header: t,
		backLink: r
	};
}
function gt(e) {
	var t;
	let n = ((t = e.textContent) == null ? void 0 : t.trim()) || (it ? "Back to overview" : "Zur Übersicht"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	e.classList.add("button-outlined"), r.className = "button-mask", r.setAttribute("aria-hidden", "true"), i.className = "button-text", i.textContent = n, a.classList.add("arrow"), a.setAttribute("viewBox", "0 0 17 15"), a.setAttribute("aria-hidden", "true"), a.innerHTML = "<path class=\"arrow-dot\" d=\"M3.60046 5.7002H0V9.3002H3.60046V5.7002Z\" fill=\"currentColor\"/><path class=\"arrow-arrow\" d=\"M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z\" fill=\"currentColor\"/>", e.replaceChildren(r, i, a);
}
function _t(u, d) {
	let f = document.title, p = document.createElement("div"), m = document.createElement("div"), h = document.createElement("div"), g = document.createElement("div"), _ = document.createElement("div"), { header: v, backLink: y } = ht(), b = null, x = document.createComment("site menu position"), S = /* @__PURE__ */ new Map(), C = "closed", w = null, T = null, E = null, D = null, O = "", k = null, A = window.scrollY, j = 0, M = null, ee = null, N = "", P = "", F = history.scrollRestoration, I = null, L = null;
	p.className = "work-overlay", p.hidden = !0, p.setAttribute("role", "dialog"), p.setAttribute("aria-modal", "true"), p.setAttribute("aria-label", it ? "Work details" : "Werkdetails"), p.setAttribute("data-work-overlay", ""), p.tabIndex = -1, m.className = "work-overlay__backdrop", h.className = "work-overlay__surface", h.setAttribute("data-lenis-prevent", ""), g.className = "work-overlay__scroll-content", _.className = "work-overlay__content", g.append(v, _), h.append(g), p.append(m, h), p.setAttribute("data-work-detail-overview-href", dt()), it && (p.setAttribute("data-work-detail-related-label", "Related works"), p.setAttribute("data-work-detail-overview-label", "Back to overview")), document.body.append(p), a();
	let R = (e) => {
		let t = Array.from(d.querySelectorAll("[data-works-rendered-item]")).find((t) => t.getAttribute("data-works-rendered-item") === e);
		return (t == null ? void 0 : t.querySelector(".cms-works__image-wrap")) || null;
	}, z = () => {
		var e;
		b || (b = document.querySelector("[data-site-menu]")), !(!b || p.contains(b)) && (x.parentNode || (e = b.parentNode) == null || e.insertBefore(x, b), p.append(b));
	}, B = () => [
		y,
		...Array.from(v.querySelectorAll(".nav_logo_link")),
		...Array.from(_.querySelectorAll(".cms-work-detail__content > *, .cms-work-detail__caption, .cms-work-detail__related"))
	], V = () => {
		M == null || M.kill(), M = null, ee == null || ee.kill(), ee = null, r.killTweensOf([
			m,
			h,
			...B()
		]);
	}, H = () => {
		for (let e of Array.from(document.body.children)) !(e instanceof HTMLElement) || e === p || e === E || (S.has(e) || S.set(e, e.inert), e.inert = !0);
	}, te = () => {
		if (L) {
			L.resize();
			return;
		}
		if (!window.lenis || t() || window.matchMedia("(max-width: 767px)").matches) return;
		let e = window.Lenis;
		e && (L = new e({
			wrapper: h,
			content: g,
			lerp: .0822,
			smoothWheel: !0,
			wheelMultiplier: .8,
			touchMultiplier: 2.5,
			syncTouch: !0,
			autoRaf: !0
		}));
	}, U = () => {
		L == null || L.destroy(), L = null;
	}, W = () => {
		L == null || L.resize(), L == null || L.scrollTo(0, {
			immediate: !0,
			force: !0
		}), h.scrollTop = 0;
	}, G = () => {
		var e;
		document.documentElement.classList.contains("work-overlay-active") || (A = window.scrollY, N = document.documentElement.style.overflow, P = document.body.style.width, F = history.scrollRestoration, document.body.style.width = `${document.documentElement.clientWidth}px`, document.documentElement.style.overflow = "hidden", document.documentElement.classList.add("work-overlay-active"), history.scrollRestoration = "manual", (e = window.lenis) == null || e.stop(), H());
	}, K = () => {
		var e;
		document.documentElement.classList.remove("work-overlay-active"), document.documentElement.style.overflow = N, document.body.style.width = P, history.scrollRestoration = F, S.forEach((e, t) => {
			t.inert = e;
		}), S.clear(), (e = window.lenis) == null || e.start(), window.scrollTo(0, A);
	}, q = (e) => {
		D = e, O = e.getAttribute("style") || "";
		let t = e.getBoundingClientRect();
		e.style.aspectRatio = `${t.width} / ${Math.max(t.height, 1)}`;
	}, J = () => {
		D != null && D.isConnected && (O ? D.setAttribute("style", O) : D.removeAttribute("style")), D = null, O = "";
	}, Y = () => {
		if (!T || !w) return;
		let e = R(w.id) || D;
		e != null && e.isConnected && (e.querySelector("img") || (T.className = "cms-works__image", e.append(T))), E == null || E.remove(), E = null, T = null, J();
	}, X = (e) => {
		I == null || I(), I = null;
		let t = o(e), n = s(p, e, l(st, e)), r = t.querySelector(".cms-work-detail__title"), i = t.querySelector(".cms-work-detail__image");
		if (!i) throw Error(`Missing detail image for ${e.id}`);
		if (r && (r.id = "work-overlay-title", p.setAttribute("aria-labelledby", r.id)), n) {
			n.querySelectorAll("a[href]").forEach((e) => {
				e.classList.contains("cms-work-detail__overview-link") || e.setAttribute("data-transition", "false");
			});
			let e = n.querySelector(".cms-work-detail__overview-link");
			e && gt(e);
		}
		let a = document.createElement("div");
		return a.className = "work-detail_wrapper u-section cms-work-detail work-overlay__detail", a.append(t), _.replaceChildren(a), n && _.append(n), h.scrollTop = 0, L == null || L.resize(), L == null || L.scrollTo(0, {
			immediate: !0,
			force: !0
		}), document.title = `${e.title} – Franz West`, i;
	}, ne = (e) => {
		if (!(e !== j || !w)) {
			if (E && T) {
				let e = _.querySelector(".cms-work-detail__image");
				e && e.style.removeProperty("visibility"), Y();
			}
			C = "open", r.to(B(), {
				autoAlpha: 1,
				duration: t() ? 0 : .42,
				stagger: t() ? 0 : .055,
				ease: "power2.out",
				onComplete: () => p.focus({ preventScroll: !0 })
			});
		}
	}, Z = (e, n, i = !1) => {
		var a;
		let o = ++j, s = w;
		V(), s && U(), s && Y(), C = "opening", w = e;
		let l = (a = history.state) == null ? void 0 : a.previousWorkId, u = new URL(ut(), window.location.href);
		l && ot.has(l) && u.searchParams.set("work", l), y.href = `${u.pathname}${u.search}${u.hash}`, !p.hidden && s && r.set(m, { opacity: 1 });
		let d = null, f = null;
		if (!i && n) {
			let e = n.querySelector(".cms-works__image-wrap"), t = e == null ? void 0 : e.querySelector("img");
			e && t && t.complete && t.naturalWidth > 0 && (d = t, f = e.getBoundingClientRect(), q(e));
		}
		let h = X(e);
		d && f && (T = d, d.naturalWidth && d.naturalHeight && (h.width = d.naturalWidth, h.height = d.naturalHeight), h.style.visibility = "hidden", E = pt(d, f)), p.hidden = !1, z(), G(), H();
		let g = _.querySelector(".work-overlay__detail");
		if (I = g ? c(g) : null, te(), W(), requestAnimationFrame(() => {
			o === j && W();
		}), i && document.readyState !== "complete" && window.addEventListener("load", () => {
			o === j && W();
		}, { once: !0 }), p.focus({ preventScroll: !0 }), document.documentElement.classList.remove("work-overlay-initial"), r.set(B(), { autoAlpha: 0 }), i || t() || !E) {
			r.set(m, { opacity: 1 }), ne(o);
			return;
		}
		r.set(m, { opacity: +!!s }), ee = r.timeline(), ee.to(m, {
			opacity: 1,
			duration: lt,
			ease: "power1.inOut"
		}, 0), M = tt.fit(E, h, {
			duration: ct,
			ease: "power3.inOut",
			onComplete: () => ne(o)
		});
	}, Q = (e) => {
		if (e !== j) return;
		Y(), I == null || I(), I = null, b && x.parentNode && x.parentNode.insertBefore(b, x.nextSibling), p.hidden = !0, _.replaceChildren(), w = null, C = "closed", document.title = f, r.set(m, { clearProps: "opacity" }), K();
		let t = k != null && k.isConnected ? k : null;
		t == null || t.focus({ preventScroll: !0 }), k = null;
	}, re = () => {
		if (C === "closed") return;
		let e = ++j;
		V(), C = "closing", U();
		let n = () => {
			if (e !== j) return;
			let n = w ? R(w.id) || D : null, i = T || _.querySelector(".cms-work-detail__image");
			if (!(n != null && n.isConnected) || !i || t()) {
				r.to(m, {
					opacity: 0,
					duration: t() ? 0 : lt,
					onComplete: () => Q(e)
				});
				return;
			}
			if (!E) {
				let e = i.getBoundingClientRect(), t = mt(i);
				i.replaceWith(t), T = i, E = pt(i, e);
			}
			r.to(m, {
				opacity: 0,
				duration: lt,
				ease: "power1.inOut"
			}), M = tt.fit(E, n, {
				duration: ct,
				ease: "power3.inOut",
				onComplete: () => Q(e)
			});
		};
		r.to(B(), {
			autoAlpha: 0,
			duration: t() ? 0 : .16,
			stagger: t() ? 0 : .015,
			onComplete: () => {
				h.scrollTop > 0 && !t() ? r.to(h, {
					scrollTop: 0,
					duration: Math.min(.55, .25 + h.scrollTop / 2e3),
					ease: "power2.inOut",
					onComplete: n
				}) : (h.scrollTop = 0, n());
			}
		});
	}, ie = (e = !1) => {
		var t;
		let n = ((t = new URL(window.location.href).searchParams.get("work")) == null ? void 0 : t.trim()) || "", r = ot.get(n);
		if (n && !r) {
			history.replaceState({}, "", ut()), re();
			return;
		}
		if (!r) {
			re();
			return;
		}
		if ((w == null ? void 0 : w.id) === r.id && (C === "open" || C === "opening")) return;
		let i = C === "closed" && Array.from(d.querySelectorAll("[data-works-rendered-item]")).find((e) => e.getAttribute("data-works-rendered-item") === r.id) || null;
		Z(r, i, e);
	}, ae = () => {
		let e = history.state;
		if (e != null && e.fwWorkOverlay && e.fromOverview && e.depth && history.length > e.depth) {
			history.go(-e.depth);
			return;
		}
		history.replaceState({ fwWorkOverlay: !1 }, "", ut()), ie();
	}, oe = () => {
		let e = history.state;
		if (e != null && e.fwWorkOverlay && e.depth && (e.depth > 1 || !e.fromOverview)) {
			history.back();
			return;
		}
		ae();
	};
	u.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element) || t.defaultPrevented || e(t)) return;
		let r = n.closest("a[data-work-overlay-trigger]");
		if (!r || !u.contains(r)) return;
		let i = r.getAttribute("data-work-overlay-trigger") || ft(r.href), a = ot.get(i);
		if (!a) return;
		t.preventDefault(), k = r;
		let o = new URL(window.location.href);
		o.searchParams.set("work", a.id), history.replaceState({
			...history.state || {},
			fwWorkOverlayBase: !0
		}, "", ut()), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !0,
			depth: 1
		}, "", o), Z(a, r);
	}), p.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element) || e(t)) return;
		let r = n.closest("a[href]");
		if (!r || !p.contains(r)) return;
		if (r === y) {
			t.preventDefault(), oe();
			return;
		}
		if (r.classList.contains("cms-work-detail__overview-link")) return;
		let i = ot.get(ft(r.href));
		if (!i) return;
		t.preventDefault();
		let a = history.state, o = new URL(window.location.href);
		o.searchParams.set("work", i.id), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !!(a != null && a.fromOverview),
			depth: ((a == null ? void 0 : a.depth) || 0) + 1,
			previousWorkId: w == null ? void 0 : w.id
		}, "", o), Z(i, null);
	}), window.addEventListener("popstate", () => ie()), window.addEventListener("pageshow", (e) => {
		e.persisted && ie(!0);
	}), window.addEventListener("site:lenis-ready", () => {
		if (C !== "closed") {
			var e;
			(e = window.lenis) == null || e.stop(), C !== "closing" && te();
		}
	}), document.addEventListener("keydown", (e) => {
		if (C === "closed") return;
		if (e.key === "Escape") {
			if (b != null && b.classList.contains("is-open")) return;
			e.preventDefault(), ae();
			return;
		}
		if (e.key !== "Tab") return;
		let t = n(p);
		if (t.length === 0) return;
		let r = t[0], i = t[t.length - 1];
		e.shiftKey && document.activeElement === r ? (e.preventDefault(), i.focus()) : !e.shiftKey && document.activeElement === i && (e.preventDefault(), r.focus());
	}), new URL(window.location.href).searchParams.has("work") ? (ie(!0), i(() => {
		if (C !== "closed") {
			var e;
			H(), (e = window.lenis) == null || e.stop();
		}
	})) : document.documentElement.classList.remove("work-overlay-initial");
}
//#endregion
//#region src/cms-works.ts
var vt = "[data-cms-works]", yt = "[data-cms-works-source]", bt = "[data-cms-works-item], [data-cms-canvas-item]", xt = "[data-works-thumbnail], [data-canvas-thumbnail]", St = "[data-works-title], [data-canvas-title]", Ct = "[data-works-year], [data-canvas-year]", wt = "[data-works-category], [data-works-categories]", Tt = "http://www.w3.org/2000/svg", Et = [
	"[data-works-link]",
	"[data-sheet-calendar-link]",
	"[data-sheet-calender-link]",
	"[data-sheet-claender-link]",
	"[data-calendar-link]",
	"[data-calender-link]",
	"[data-claender-link]",
	"[data-sheet-link]",
	"a[href]"
].join(", "), Dt = 16, Ot = 16, kt = "[data-cms-works-load-more-template]", At = "site:works-ready";
function jt(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function Mt(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function Nt(e) {
	var t;
	return (t = Array.from(e.children).find((e) => e instanceof HTMLImageElement)) == null ? null : t;
}
function Pt(e) {
	let t = e.querySelector(xt);
	return t ? t instanceof HTMLImageElement ? t : null : Nt(e);
}
function Ft(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function It(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Lt(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? Mt(e, wt) : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function Rt(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v;
	return (t = (n = (r = (i = (a = (o = (s = (c = (l = (u = (d = (f = (p = (m = (h = (g = (_ = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : _) == null ? e.getAttribute("data-sheet-calendar-href") : g) == null ? e.getAttribute("data-sheet-calendar-url") : h) == null ? e.getAttribute("data-sheet-calender-href") : m) == null ? e.getAttribute("data-sheet-calender-url") : p) == null ? e.getAttribute("data-sheet-claender-href") : f) == null ? e.getAttribute("data-sheet-claender-url") : d) == null ? e.getAttribute("data-calendar-href") : u) == null ? e.getAttribute("data-calendar-url") : l) == null ? e.getAttribute("data-calender-href") : c) == null ? e.getAttribute("data-calender-url") : s) == null ? e.getAttribute("data-claender-href") : o) == null ? e.getAttribute("data-claender-url") : a) == null ? e.getAttribute("data-sheet-href") : i) == null ? e.getAttribute("data-sheet-url") : r) == null ? (v = e.querySelector(Et)) == null ? void 0 : v.href : n) == null ? "" : t;
}
function zt(e, t) {
	var n, r, i, a, o, s;
	let c = Pt(e), l = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!l) return null;
	let u = Mt(e, St) || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "", d = Rt(e), f = "";
	try {
		f = new URL(d, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {}
	return {
		id: ((i = e.getAttribute("data-works-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-canvas-id")) == null ? void 0 : a.trim()) || ((o = e.getAttribute("data-cms-item-id")) == null ? void 0 : o.trim()) || f || `work-${t + 1}-${Ft(`${u}-${l}`)}`,
		title: u,
		thumbnail: l,
		thumbnailAlt: (c == null ? void 0 : c.alt) || u,
		href: d,
		year: Mt(e, Ct) || ((s = e.getAttribute("data-works-year")) == null ? void 0 : s.trim()) || "",
		categories: Lt(e),
		index: t
	};
}
function Bt(e) {
	return Array.from(e.querySelectorAll(bt)).map(zt).filter((e) => e !== null);
}
function Vt(e) {
	for (let t of Array.from(e.querySelectorAll(bt))) {
		let e = Pt(t);
		e && (e.removeAttribute("srcset"), e.removeAttribute("sizes"), e.removeAttribute("src"));
	}
}
function Ht(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "year" ? n : "year";
}
function Ut(e) {
	let t = e.match(/\b(?:18|19|20)\d{2}\b/);
	return t ? Number.parseInt(t[0], 10) : null;
}
function Wt(e) {
	let t = e.trim();
	return t.startsWith("[") && t.endsWith("]") ? t : `[${t}]`;
}
function Gt(e, t, n) {
	let r = [...e];
	if (t === "random") {
		let t = It(Ft(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return r.sort((e, t) => {
		var n, r;
		return ((n = Ut(e.year)) == null ? Infinity : n) - ((r = Ut(t.year)) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function Kt(e, t) {
	return t.size === 0 ? e : e.filter((e) => e.categories.some((e) => t.has(e)));
}
function qt() {
	let e = document.createElementNS(Tt, "svg"), t = document.createElementNS(Tt, "path"), n = document.createElementNS(Tt, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), t.classList.add("cms-works__eye-pupil"), t.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), t.setAttribute("fill", "currentColor"), n.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), n.setAttribute("fill", "currentColor"), e.append(t, n), e;
}
function Jt(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "cms-works__item", t.setAttribute("data-works-rendered-item", e.id), t.setAttribute("data-works-categories", e.categories.join(",")), e.href && (t.classList.add("cms-works__item--clickable"), t.setAttribute("href", e.href), t.setAttribute("data-work-overlay-trigger", e.id), t.setAttribute("data-transition", "false")), n.className = "cms-works__image-wrap", r.className = "cms-works__image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.append(r), i.className = "cms-works__meta", a.className = "cms-works__label", o.className = "cms-works__title", o.textContent = e.title, a.append(o), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = Wt(e.year), a.append(t);
	}
	return i.append(a, qt()), t.append(n, i), t;
}
function Yt(e) {
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
function Xt(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function Zt(e, t, n) {
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
function Qt(e, t, n) {
	let r = document.createElement("div"), i = Zt(t, n, Xt(e));
	r.className = "cms-works__grid", i.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			t.append(Jt(e));
		}), r.append(t);
	}), e.replaceChildren(r), e.classList.add("is-ready");
}
function $t(e, t) {
	var n, r, i;
	let a = (n = (r = (i = e.querySelector("[data-cms-works-load-more-text]")) == null ? e.querySelector("[data-button-text]") : i) == null ? e.querySelector(".button-text") : r) == null ? e : n;
	a.textContent = t;
}
function en(e, t) {
	var n, r;
	let i = (n = (r = e.querySelector(kt)) == null ? t.querySelector(kt) : r) == null ? document.querySelector(kt) : n;
	return i ? (i instanceof HTMLButtonElement && (i.type = "button"), i instanceof HTMLAnchorElement && (i.href = "#"), i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.removeAttribute("hidden"), i.removeAttribute("aria-hidden"), i.removeAttribute("data-cms-works-load-more-template"), i.setAttribute("data-cms-works-load-more", ""), $t(i, /^\/en(?:\/|$)/.test(window.location.pathname) ? "SHOW MORE" : "MEHR ANZEIGEN"), i) : null;
}
function tn() {
	return S();
}
function nn(e, t) {
	var n, r, i, a, o;
	let s = Bt(t), c = tn() ? b() : null, l = (n = c == null ? void 0 : c.categories) == null ? [] : n, u = {
		appliedCategories: new Set(l),
		pendingCategories: new Set(l),
		appliedSortMode: (r = c == null ? void 0 : c.sort) == null ? Ht(e) : r,
		pendingSortMode: (i = c == null ? void 0 : c.sort) == null ? Ht(e) : i,
		open: !1
	}, d = document.createElement("div"), f = document.createElement("button"), p = document.createElement("div"), m = en(e, t), h = 0, g = 0, _ = 0, y = (a = c == null ? void 0 : c.visibleCount) == null ? Dt : a, S = window.location.hash === "#werke" || (o = c == null ? void 0 : c.scrollY) == null ? null : o, C = [], w = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), E = 0;
	t.hidden = !0, t.setAttribute("aria-hidden", "true"), Vt(t), e.classList.add("cms-works"), d.className = "cms-works__grid-host u-section", f.className = "cms-works__collection-overlay", f.type = "button", f.setAttribute("aria-label", /^\/en(?:\/|$)/.test(window.location.pathname) ? "Apply filters" : "Filter anwenden"), p.className = "cms-works__grid-mount", d.append(p), m && d.append(m);
	let D = () => Gt(Kt(s, u.appliedCategories), u.appliedSortMode, e), O = (t = !1) => {
		let n = ++E, r = C.slice(0, y);
		Promise.all(r.map(async (e) => {
			if (w.has(e.id)) return;
			let t = T.get(e.thumbnail);
			t || (t = Yt(e.thumbnail), T.set(e.thumbnail, t)), w.set(e.id, await t);
		})).then(() => {
			n === E && (window.cancelAnimationFrame(h), h = window.requestAnimationFrame(() => {
				if (n !== E) return;
				let i = Xt(e), a = Math.round(e.getBoundingClientRect().width);
				!t && i === g && a === _ || (g = i, _ = a, Qt(p, r, w), m && (m.hidden = C.length <= y), S !== null && (window.scrollTo(0, S), S = null), e.setAttribute("data-site-assets-ready", ""), document.dispatchEvent(new CustomEvent(At, {
					bubbles: !0,
					detail: {
						count: r.length,
						total: C.length
					}
				})));
			}));
		});
	}, k = () => {
		x({
			categories: Array.from(u.appliedCategories),
			sort: u.appliedSortMode,
			visibleCount: y,
			scrollY: window.scrollY,
			ts: Date.now()
		});
	}, A = () => {
		var e;
		let t = j.element.querySelector(".cms-works-filter__panel"), n = (e = t == null ? void 0 : t.getBoundingClientRect().bottom) == null ? j.element.getBoundingClientRect().bottom : e;
		f.style.setProperty("--cms-works-overlay-top", `${Math.max(0, n)}px`);
	}, j = v(s, u, () => {
		C = D(), y = Dt, O(!0), j.sync(), k();
	}, { onOpenChange: (t) => {
		e.classList.toggle("is-filter-open", t), t && A();
	} });
	if (f.addEventListener("click", () => j.apply()), m) {
		let e = () => {
			y = Math.min(y + Ot, C.length), O(!0), k();
		};
		m.addEventListener("click", (t) => {
			t.preventDefault(), e();
		}), m.addEventListener("keydown", (t) => {
			t.key !== "Enter" && t.key !== " " || (t.preventDefault(), e());
		});
	}
	C = D(), e.replaceChildren(j.element, f, d), _t(e, p);
	let M = new ResizeObserver(() => O());
	O(!0), j.sync(), M.observe(e), window.addEventListener("orientationchange", () => O(!0)), window.addEventListener("resize", A), window.addEventListener("scroll", A, { passive: !0 }), window.addEventListener("pagehide", k);
}
function rn(e) {
	var t;
	let n = (t = e.querySelector(yt)) == null ? document.querySelector(yt) : t;
	if (!n) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	nn(e, n);
}
jt(() => {
	Array.from(document.querySelectorAll(vt)).forEach(rn);
});
//#endregion

//# sourceMappingURL=cms-works.js.map