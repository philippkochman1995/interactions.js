import { l as e, m as t, o as n } from "./site-interactions-Cou7uu3t.js";
import { t as r } from "./site-interactions-FNuBQfHA.js";
import { a as i, t as a } from "./site-interactions-xukKKGlM.js";
import { createDetailSection as o, createRelatedSection as s, fitDetailImage as c, pickRelatedItems as l } from "./cms-work-detail.js";
//#region src/cms-works-filter.ts
var u = "\n  <svg width=\"14.45\" height=\"10.2\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z\" fill=\"currentColor\"/>\n    <path d=\"M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z\" fill=\"currentColor\"/>\n    <path d=\"M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z\" fill=\"currentColor\"/>\n  </svg>\n", d = "\n  <svg width=\"8.5\" height=\"9.35\" viewBox=\"0 0 10 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M6 9L6 0L4 -8.74228e-08L4 9L6 9Z\" fill=\"currentColor\"/>\n    <path d=\"M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z\" fill=\"currentColor\"/>\n  </svg>\n", f = {
	random: "zufällig",
	year: "Entstehungsjahr"
}, p = ["year", "random"];
function m(e) {
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
function h(e, t) {
	let n = document.createElement("span");
	return n.className = t, n.innerHTML = e, n;
}
function g(e, t, n, r = {}) {
	let i = document.createElement("section"), a = document.createElement("div"), o = document.createElement("div"), s = document.createElement("span"), c = document.createElement("span"), l = document.createElement("span"), g = document.createElement("span"), _ = document.createElement("span"), v = document.createElement("div"), y = document.createElement("div"), b = document.createElement("div"), x = document.createElement("div"), S = document.createElement("div"), C = document.createElement("div"), w = document.createElement("span"), T = document.createElement("div"), E = document.createElement("a"), D = m(e), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
	i.className = "cms-works-filter u-section", a.className = "cms-works-filter__container u-container", o.className = "cms-works-filter__bar", o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), o.setAttribute("aria-expanded", "false"), s.className = "cms-works-filter__bar-left", c.className = "cms-works-filter__label", c.textContent = "FILTER", l.className = "cms-works-filter__count", s.append(h(u, "cms-works-filter__filter-icon"), c, l), g.className = "cms-works-filter__bar-right", _.className = "cms-works-filter__sort-label", _.textContent = "SORTIERUNG", x.className = "cms-works-filter__sort-controls", g.append(_, x, h(d, "cms-works-filter__arrow-icon")), o.append(s, g), v.className = "cms-works-filter__panel u-section", y.className = "cms-works-filter__panel-inner u-container", b.className = "cms-works-filter__categories", S.className = "cms-works-filter__mobile-sort-section", C.className = "cms-works-filter__mobile-sort-heading", w.className = "cms-works-filter__sort-label", w.textContent = "SORTIERUNG", T.className = "cms-works-filter__mobile-sort-controls", C.append(h(d, "cms-works-filter__arrow-icon"), w), S.append(C, T), D.forEach((e) => {
		let n = document.createElement("button"), r = document.createElement("span"), i = document.createElement("span");
		n.className = "cms-works-filter__pill", n.type = "button", n.setAttribute("aria-pressed", "false"), r.textContent = e.name, i.className = "cms-works-filter__pill-count", i.textContent = `[${e.count}]`, n.append(r, i), n.addEventListener("click", () => {
			t.pendingCategories.has(e.name) ? t.pendingCategories.delete(e.name) : t.pendingCategories.add(e.name), A();
		}), O.set(e.name, n), b.append(n);
	}), p.forEach((e) => {
		let n = document.createElement("button");
		n.className = "cms-works-filter__sort-option", n.type = "button", n.textContent = f[e], n.setAttribute("aria-pressed", "false"), n.addEventListener("click", (n) => {
			n.stopPropagation(), t.open || j(), t.pendingSortMode = e, A();
		}), k.set(e, n), x.append(n);
		let r = document.createElement("button");
		r.className = "cms-works-filter__mobile-sort-option", r.type = "button", r.textContent = f[e], r.setAttribute("aria-pressed", "false"), r.addEventListener("click", () => {
			t.pendingSortMode = e, A();
		}), T.append(r);
	}), E.className = "cms-works-filter__apply", E.href = "#", E.textContent = "ANWENDEN", E.addEventListener("click", (e) => {
		e.preventDefault(), t.appliedCategories = new Set(t.pendingCategories), t.appliedSortMode = t.pendingSortMode, M(!1), n();
	}), y.append(b, S), v.append(y, E), a.append(o), i.append(a, v);
	function A() {
		l.textContent = `[${t.appliedCategories.size}]`, i.classList.toggle("is-open", t.open), o.setAttribute("aria-expanded", t.open ? "true" : "false"), O.forEach((e, n) => {
			var r, i;
			let a = t.pendingCategories.has(n), o = e.querySelector(".cms-works-filter__pill-count");
			if (e.classList.toggle("is-active", a), e.setAttribute("aria-pressed", a ? "true" : "false"), e.tabIndex = t.open ? 0 : -1, o) {
				if (a) {
					o.textContent = "x";
					return;
				}
				o.textContent = `[${(r = (i = D.find((e) => e.name === n)) == null ? void 0 : i.count) == null ? 0 : r}]`;
			}
		}), k.forEach((e, n) => {
			let r = (t.open ? t.pendingSortMode : t.appliedSortMode) === n, i = t.open || r;
			e.classList.toggle("is-active", r), e.classList.toggle("is-collapsed", !i), e.setAttribute("aria-pressed", r ? "true" : "false"), e.setAttribute("tabindex", i ? "0" : "-1");
		}), T.querySelectorAll("button").forEach((e, n) => {
			let r = p[n] === t.pendingSortMode;
			e.classList.toggle("is-active", r), e.setAttribute("aria-pressed", r ? "true" : "false"), e.tabIndex = t.open || r ? 0 : -1;
		}), E.tabIndex = t.open ? 0 : -1, v.style.setProperty("--cms-works-filter-categories-height", `${b.scrollHeight}px`), v.style.setProperty("--cms-works-filter-sort-height", `${T.scrollHeight}px`), v.style.setProperty("--cms-works-filter-panel-height", `${v.scrollHeight}px`);
	}
	function j() {
		var e;
		t.open || (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode, t.open = !0, A(), (e = r.onOpenChange) == null || e.call(r, !0));
	}
	function M(e) {
		var n;
		t.open && (e && (t.pendingCategories = new Set(t.appliedCategories), t.pendingSortMode = t.appliedSortMode), t.open = !1, A(), (n = r.onOpenChange) == null || n.call(r, !1));
	}
	return o.addEventListener("click", (e) => {
		x.contains(e.target) || (t.open ? M(!0) : j());
	}), o.addEventListener("keydown", (e) => {
		e.target !== o || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), t.open ? M(!0) : j());
	}), S.addEventListener("click", () => {
		t.open || j();
	}), document.addEventListener("keydown", (e) => {
		e.key === "Escape" && t.open && M(!0);
	}), document.addEventListener("pointerdown", (e) => {
		!t.open || i.contains(e.target) || M(!0);
	}), window.addEventListener("resize", () => {
		v.style.setProperty("--cms-works-filter-panel-height", `${v.scrollHeight}px`);
	}), A(), {
		element: i,
		sync: A,
		close: M
	};
}
//#endregion
//#region src/modules/works-view-state.ts
var _ = "site-works-view";
function v() {
	try {
		let e = window.sessionStorage.getItem(_);
		if (!e) return null;
		let t = JSON.parse(e);
		return !t || !Array.isArray(t.categories) || typeof t.visibleCount != "number" ? null : (t.sort !== "year" && t.sort !== "random" && (t.sort = "year"), t);
	} catch (e) {
		return null;
	}
}
function y(e) {
	try {
		window.sessionStorage.setItem(_, JSON.stringify(e));
	} catch (e) {}
}
function b() {
	try {
		let e = window.performance.getEntriesByType("navigation")[0];
		return (e == null ? void 0 : e.type) === "back_forward";
	} catch (e) {
		return !1;
	}
}
//#endregion
//#region ../../../Users/philipp/Sites/FW/interactions.js/node_modules/gsap/utils/matrix.js
var x, S, C, w, T, E, D, O, k = "transform", A = k + "Origin", j, M = function(e) {
	var t = e.ownerDocument || e;
	for (!(k in e.style) && ("msTransform" in e.style) && (k = "msTransform", A = k + "Origin"); t.parentNode && (t = t.parentNode););
	if (S = window, D = new U(), t) {
		x = t, C = t.documentElement, w = t.body, O = x.createElementNS("http://www.w3.org/2000/svg", "g"), O.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", j = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, N = function(e) {
	for (var t, n; e && e !== w;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, ee = [], te = [], P = function() {
	return S.pageYOffset || x.scrollTop || C.scrollTop || w.scrollTop || 0;
}, F = function() {
	return S.pageXOffset || x.scrollLeft || C.scrollLeft || w.scrollLeft || 0;
}, I = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, L = function e(t) {
	if (S.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, R = function e(t, n) {
	if (t.parentNode && (x || M(t))) {
		var r = I(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = x.createElementNS ? x.createElementNS(i.replace(/^https/, "http"), a) : x.createElement(a);
		return n && (r ? (E || (E = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), E.appendChild(l)) : (T || (T = e(t), Object.assign(T.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), T.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, z = function(e) {
	for (var t = new U(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, B = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[k], e.style[k] = "none", e.appendChild(O), t = O.getCTM(), e.removeChild(O), n ? e.style[k] = n : e.style.removeProperty(k.replace(/([A-Z])/g, "-$1").toLowerCase())), t || D.clone();
}, V = function(e, t) {
	var n = I(e), r = e === n, i = n ? ee : te, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === S) return e;
	if (i.length || i.push(R(e, 1), R(e, 2), R(e, 3)), s = n ? E : T, n) r ? (l = B(e), u = -l.e / l.a, d = -l.f / l.d, c = D) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? z(c) : c.getItem(0).matrix : D, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new U(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, j) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (S.getComputedStyle(l)[k] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = S.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[k] = f[k], l[A] = f[A], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, H = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, U = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), H(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return H(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return H(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
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
function W(e, t, n, r) {
	if (!e || !e.parentNode || (x || M(e)).documentElement === e) return new U();
	var i = N(e), a = I(e) ? ee : te, o = V(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && L(e), f = new U((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : F()), s.top + (d ? 0 : P()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region ../../../Users/philipp/Sites/FW/interactions.js/node_modules/gsap/Flip.js
var G = 1, K, q, J, Y, X, Z, Q, ne = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, re = {}, ie = 180 / Math.PI, ae = Math.PI / 180, oe = {}, se = {}, ce = {}, le = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, ue = le("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), de = le("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), fe = function(e) {
	return K(e)[0] || console.warn("Element not found:", e);
}, pe = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, me = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, he = {
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
}, ge = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, _e = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, ve = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, ye = {}, be = function(e) {
	var t = ye[e] = le(e);
	return ce[e] = t.concat(de), t;
}, xe = function(e) {
	var t = e._gsap || q.core.getCache(e);
	return t.gmCache === q.ticker.frame ? t.gMatrix : (t.gmCache = q.ticker.frame, t.gMatrix = W(e, !0, !1, !0));
}, Se = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, Ce = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = Se(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, we = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : se[a] || (se[a] = _e(a)), o);
	return n;
}, Te = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, Ee = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(Te);
}, De = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Oe = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), J && n !== 1) return J._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), J._final.push(function() {
		return (e.cache.uncache = 1) && Te(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (we(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), we(e, De), f = window.getComputedStyle(r); l--;) c[De[l]] = f[De[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new Xe(r);
	else if (u = ve(e, oe), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new U(1, 0, 0, 1, p.left + F(), p.top + P());
	} else u.matrix = W(r, !1, !1, !0);
	return u = Re(u, e, !0), e.x = Z(u.x, .01), e.y = Z(u.y, .01), r;
}, ke = function(e, t) {
	return t !== !0 && (t = K(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, Ae = function(e) {
	return Ce(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && Oe(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, je = function(e, t) {
	return t && e.idLookup[Me(t).id] || e.elementStates[0];
}, Me = function(e, t, n, r) {
	return e instanceof Xe ? e : e instanceof $ ? je(e, r) : new Xe(typeof e == "string" ? fe(e) || console.warn(e + " not found") : e, t, n);
}, Ne = function(e, t) {
	for (var n = q.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, Pe = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, Fe = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + G++), t;
}, Ie = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, Le = function(e, t, n) {
	return e && t.length && n.add(e(Ie(t), n, new $(t, 0, !0)), 0);
}, Re = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && Q && Q(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, C = !S && e.simple && t.simple && !i, w, T, E, D, O, k, A;
	return C || !c ? (p = m = 1, h = w = 0) : (O = xe(c), k = O.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = pe(Math.atan2(k.b, k.a) * ie), w = pe(Math.atan2(k.c, k.d) * ie + h) % 360, p = Math.sqrt(k.a ** 2 + k.b ** 2), m = Math.sqrt(k.c ** 2 + k.d ** 2) * Math.cos(w * ae), i && (i = K(i)[0], D = q.getProperty(i), A = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: D("scaleX"),
		scaleY: D("scaleY"),
		width: A ? A.width : Math.ceil(parseFloat(D("width", "px"))),
		height: A ? A.height : parseFloat(D("height", "px"))
	}), s.rotation = h + "deg", s.skewX = w + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = Z(d * p / v.scaleX, 0), f = Z(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && Pe(o, t.props), C || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), k = W(i || o, !1, !1, !0), T = O.apply({
		x: k.e,
		y: k.f
	}), E = O.apply({
		x: b,
		y: x
	}), l += E.x - T.x, u += E.y - T.y) : (O.e = O.f = 0, E = O.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += E.x, u += E.y), l = Z(l, .02), u = Z(u, .02), a && !(a instanceof Xe) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = w, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, ze = function(e, t) {
	return e instanceof $ ? e : new $(e, t);
}, Be = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, Ve = [], He = "width,height,overflowX,overflowY".split(","), Ue, We = function(e) {
	if (e !== Ue) {
		var t = X.style, n = X.clientWidth === window.outerWidth, r = X.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) Ve[i] = t[He[i]];
			n && (t.width = X.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = X.clientHeight + "px", t.overflowX = "hidden"), Ue = e;
		} else if (Ue) {
			for (; i--;) Ve[i] ? t[He[i]] = Ve[i] : t.removeProperty(_e(He[i]));
			Ue = e;
		}
	}
}, Ge = function(e, t) {
	for (var n = 0; n < e.length; n += 3) q.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, Ke = function(e, t, n, r) {
	e instanceof $ && t instanceof $ || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, C = i.prune, w = ("props" in n ? n : e).props, T = ve(n, he), E = q.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), D = T, O = [], k = [], A = [], j = [], M = S === !0 ? 1 : S || 0, N = typeof S == "function" ? S : function() {
		return M;
	}, ee = e.interrupted || t.interrupted, te = E[r === 1 ? "from" : "to"], P, F, I, L, R, z, B, V, H, U, G, K, Y, X;
	for (F in t.idLookup) G = t.alt[F] ? Be(t, e, F) : t.idLookup[F], R = G.element, U = e.idLookup[F], e.alt[F] && R === U.element && (e.alt[F].isVisible || !G.isVisible) && (U = e.alt[F]), U ? (z = {
		t: R,
		b: U,
		a: G,
		sd: U.element === R ? 0 : G.isVisible ? 1 : -1
	}, A.push(z), z.sd && (z.sd < 0 && (z.b = G, z.a = U), ee && we(z.b, w ? ce[w] : de), b && A.push(z.swap = {
		t: U.element,
		b: z.b,
		a: z.a,
		sd: -z.sd,
		swap: z
	})), R._flip = U.element._flip = J ? J.timeline : E) : G.isVisible && (A.push({
		t: R,
		b: ve(G, { isVisible: 1 }),
		a: G,
		sd: 0,
		entering: 1
	}), R._flip = J ? J.timeline : E);
	if (w && (ye[w] || be(w)).forEach(function(e) {
		return T[e] = function(t) {
			return A[t].a.props[e];
		};
	}), A.finalStates = H = [], K = function() {
		Ce(A), We(!0);
		var t = [];
		for (L = 0; L < A.length; L++) z = A[L], Y = z.a, X = z.b, C && !Y.isDifferent(X) && !z.entering ? A.splice(L--, 1) : (R = z.t, _ && !(z.sd < 0) && L && (Y = z.a = Y.clone({ matrix: W(R, !1, !1, !0) })), X.isVisible && Y.isVisible ? (z.sd < 0 ? (_ && Ge(t, 1), B = new Xe(R, w, e.simple), Re(B, Y, y, 0, 0, B), B.matrix = W(R, !1, !1, !0), B.bounds = R.getBoundingClientRect(), B.css = z.b.css, z.a = Y = B, b && (R.style.opacity = ee ? X.opacity : Y.opacity), x && j.push(R), _ && (Ge(t, 2), t.push(R, R.getAttribute("style")))) : z.sd > 0 && b && (R.style.opacity = ee ? Y.opacity - X.opacity : "0"), Re(Y, X, y, w), _ && z.sd < 0 && t.push(R.getAttribute("style"))) : X.isVisible !== Y.isVisible && (X.isVisible ? Y.isVisible || (X.css = Y.css, k.push(X), A.splice(L--, 1), c && _ && Re(Y, X, y, w)) : (Y.isVisible && O.push(Y), A.splice(L--, 1))), y || (R.style.maxWidth = Math.max(Y.width, X.width) + "px", R.style.maxHeight = Math.max(Y.height, X.height) + "px", R.style.minWidth = Math.min(Y.width, X.width) + "px", R.style.minHeight = Math.min(Y.height, X.height) + "px"), _ && g && R.classList.add(g)), H.push(Y);
		var r;
		if (g && (r = H.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), We(!1), y ? (T.scaleX = function(e) {
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
			return A[e].a.rotation + (S ? N(e, V[e], V) * 360 : 0);
		}, T.skewX = function(e) {
			return A[e].a.skewX;
		}, V = A.map(function(e) {
			return e.t;
		}), (v || v === 0) && (T.modifiers = { zIndex: function() {
			return v;
		} }, T.zIndex = v, T.immediateRender = n.immediateRender !== !1), b && (T.opacity = function(e) {
			return A[e].sd < 0 ? 0 : A[e].sd > 0 ? A[e].a.opacity : "+=0";
		}), j.length) {
			x = q.utils.distribute(x);
			var i = V.slice(j.length);
			T.stagger = function(e, t) {
				return x(~j.indexOf(t) ? V.indexOf(A[e].swap.t) : e, t, i);
			};
		}
		if (ue.forEach(function(e) {
			return n[e] && E.eventCallback(e, n[e], n[e + "Params"]);
		}), u && V.length) for (F in D = ve(T, he), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) P = ve(u[F], ge), P[F] = T[F], !("duration" in P) && "duration" in T && (P.duration = T.duration), P.stagger = T.stagger, te.call(E, V, P, 0), delete D[F];
		(V.length || k.length || O.length) && (g && E.add(function() {
			return me(r, g, E._zTime < 0 ? "remove" : "add");
		}, 0) && !f && me(r, g, "add"), V.length && te.call(E, V, D, 0)), Le(o, O, E), Le(s, k, E);
		var l = J && J.timeline;
		l && (l.add(E, 0), J._final.push(function() {
			return Ee(A, !a);
		})), I = E.duration(), E.call(function() {
			var e = E.time() >= I;
			e && !l && Ee(A, !a), g && me(r, g, e ? "remove" : "add");
		});
	}, l && (c = A.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), J) {
		var Z;
		c && (Z = J._abs).push.apply(Z, ke(A, c)), J._run.push(K);
	} else c && Ae(ke(A, c)), K();
	var Q = J ? J.timeline : E;
	return Q.revert = function() {
		return Je(Q, 1, 1);
	}, Q;
}, qe = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, Je = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (qe(e), t < 2 && e.progress(1), e.kill()), !0;
}, Ye = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, $ = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = Ie(e), this.elementStates = e, Ye(this);
		else {
			this.targets = K(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			J && !r && J._kill.push(this), this.update(r || !!J);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new Xe(e, t.props, t.simple);
		}), Ye(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, Ye(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = Ce(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = W(o.element, !1, !1, !0)), s = i[o.id], s && Re(o, s, t, !0, 0, o), o.matrix = W(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || oe;
		return (t in n ? n : n.props || oe)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Ye(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? Be(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = ce[this.props] || de, t = this.elementStates.length; t--;) we(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = Je(i, +!e);
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
		return this.elementStates[this.targets.indexOf(fe(e))];
	}, t.makeAbsolute = function() {
		return Ce(this.elementStates.slice(0), !0, !0).map(Oe);
	}, e;
}(), Xe = /*#__PURE__*/ function() {
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
		var n = this, r = n.element, i = q.getProperty(r), a = q.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new U(1, 0, 0, 1, o.left + F(), o.top + P()) : W(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = Fe(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : Z(i("width", "px"), .04), n.height = s ? s.height : Z(i("height", "px"), .04), e && Ne(n, ye[e] || be(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && B(r).inverse(), n.simple = t || pe(c.a) === 1 && !pe(c.b) && !pe(c.c) && pe(c.d) === 1, n.uncache = 0;
	}, e;
}(), Ze = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), Qe = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new $(), this.timeline = q.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new Ze(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = J, r = Y;
		return J = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, Y = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), Y = r, J = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = J, n = this.timeline, r = this.actions.length, i, a;
		for (J = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new $(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare($e.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), Ae(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), ne(e, "onComplete"));
		}), J = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return ne(this, "onStart"), n.restart(), this;
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
		return this !== J && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete re[this.id];
	}, e;
}(), $e = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = ze(t, n);
		return Y && Y.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), Ke(e, ze(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return Ke(e, ze(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return Ke(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? ve(n, ge) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && fe(n.fitChild), p = Me(t, c, d, e), m = Me(e, 0, d, p), h = c ? ce[c] : de, g = q.context();
		return c && Pe(r, p.props), we(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			Te(m), u && u.apply(this, arguments);
		}), a && Oe(m, p), r = Re(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return Te(m);
			};
		}), s ? r : r.duration ? q.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof $ ? e : new $(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), re[e] || (re[e] = new Qe(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof $ ? e.targets : K(e)).forEach(function(e) {
			return e && Je(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (fe(e) || oe)._flip;
	}, e.getElementState = function(e, t) {
		return new Xe(fe(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = W(t, !0, !0).multiply(W(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (X = typeof document < "u" && document.body, X) {
			q = e, M(X), K = q.utils.toArray, Q = q.core.getStyleSaver;
			var t = q.utils.snap(.1);
			Z = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
$e.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin($e);
//#endregion
//#region src/work-manifest.json
var et = /*#__PURE__*/ JSON.parse("[{\"id\":\"gerngrosssaule\",\"href\":\"/werke/gerngrosssaule\",\"title\":\"„Gerngrosssäule“\",\"year\":\"2007\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Franz West, Heidulf Gerngross<br>„Gerngrosssäule”, 2007<br>Betonguss<br>Säule: 546 cm, Ei: 50 cm</p><p>‍</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"imageAlt\":\"„Gerngrosssäule“\",\"caption\":\"\"},{\"id\":\"rueckkehr-zu-freud\",\"href\":\"/werke/rueckkehr-zu-freud\",\"title\":\"„Rückkehr zu Freud“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>20 x 22,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"imageAlt\":\"„Rückkehr zu Freud“\",\"caption\":\"Heinz Neumann\"},{\"id\":\"passstueck\",\"href\":\"/werke/passstueck\",\"title\":\"Passstück\",\"year\":\"um 1975\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Eisendraht, Gaze, Gips, Farbe<br>35 x 53 x 22 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Stefan Altenburger, Courtesy Galerie Presenhuber Zürich\"},{\"id\":\"imported-item-56\",\"href\":\"/werke/imported-item-56\",\"title\":\"„Krauses Gekröse“\",\"year\":\"2014, nach einem Entwurf von 2011, Herstellung posthum\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Kunstharzlack<br>1100 x 550 x 650 cm</p>\",\"html\":\"\",\"view\":\"Arles, 2022\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"imageAlt\":\"„Krauses Gekröse“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-55\",\"href\":\"/werke/imported-item-55\",\"title\":\"Chaiselongue\",\"year\":\"1994\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stoff, Stahl, Schaumgummi<br>90,5 x 152,5 x 100 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"imageAlt\":\"Chaiselongue\",\"caption\":\"Courtesy  Phillips, London\"},{\"id\":\"imported-item-54\",\"href\":\"/werke/imported-item-54\",\"title\":\"„Kasseler Rippchen”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>18teilige Installation bestehend aus Arbeiten verschiedener Künstler:innen<br>zehnteilige Bilderwand, drei Objekte, zwei Tische, drei Stühle<br>Metall, Holz, Gips, Plastik, Farbe, Leinen<br>Maße variabel<br>Bilder:<br>Werner Büttner: 80 x 60 cm<br>Martin Kippenberger: 60 x 50,3 x 4,3 (tief) cm<br>Albert Oehlen: 67,3 x 56 x 2,8 (tief) cm<br>Heimo Zobernig: 100 x 150 cm<br>Herbert Brandl: 79 x 110 cm<br>Janc Szenizcei: 31,5 x 25,5 cm<br>Kiki Smith: 58,5 x 81 cm<br>Mary Heilman: 38 x 33 cm<br>Vittore Pisano: 43,3 x 53,3 cm<br>Rudolf Polanszky: 74,5 x 61,5 x 8,5 cm<br>Objekte:<br>Wolfgang Winter: 46 x 96 x 21 cm<br>Andreas Rohrbach: 214 x 17 x 10 cm<br>Jason Rhoades: 110 x 116 x 65,5 cm<br>Michael Kienzer: 22 x 22 x 22 cm<br>unbekannt: 31,5 x 16 x 10 cm (kl. Flasche, ummantelt, auf Tisch)<br>Franz West:<br>Tisch 1: 74 x 65 x 50 cm<br>Tisch 2: 122 x 44 x 44 cm<br>3 Stühle: 84 x 43 x 44 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 2019\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"imageAlt\":\"„Kasseler Rippchen”\",\"caption\":\"Stefan Altenburger\"},{\"id\":\"imported-item-53\",\"href\":\"/werke/imported-item-53\",\"title\":\"o.T. (für Ettore Spalletti)\",\"year\":\"1991\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Gaze, Gips<br>200 x 40 x 40 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"imageAlt\":\"o.T. (für Ettore Spalletti)\",\"caption\":\"\"},{\"id\":\"imported-item-52\",\"href\":\"/werke/imported-item-52\",\"title\":\"Labstück\",\"year\":\"1986\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metaxaflasche, Polyester, Holz<br>113 x 37 x 12 cm, Sockel: 124,5 x 139,5 x 35 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"Courtesy Galerie Capitain\"},{\"id\":\"liege-vermeer\",\"href\":\"/werke/liege-vermeer\",\"title\":\"Liege (Vermeer)\",\"year\":\"1989\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl<br>88 x 136 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"imageAlt\":\"Liege (Vermeer)\",\"caption\":\"Courtesy Nachlass Günther Förg\"},{\"id\":\"imported-item-50\",\"href\":\"/werke/imported-item-50\",\"title\":\"„Extroversion“\",\"year\":\"2000-2011\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 43 Kunstwerken von Franz West und weiteren Künstler:innen<br>diverse Materialien, Pavillon<br>(inkl. hängende und stehende Objekten): ca. 345 (H) x 800 x 900 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht 21er Haus, 2016\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"imageAlt\":\"„Extroversion“\",\"caption\":\"Hannes Stoll\"},{\"id\":\"imported-item-49\",\"href\":\"/werke/imported-item-49\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-48\",\"href\":\"/werke/imported-item-48\",\"title\":\"\\\"Den Anrainern zuliebe”\",\"year\":\"2001\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>5 Sitzwuste<br>Aluminium lackiert<br>zw. 684 + 716 cm (L), je 60 cm (Ø)</p>\",\"html\":\"\",\"view\":\"Westersingel, Rotterdam, 2012\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"imageAlt\":\"\\\"Den Anrainern zuliebe”\",\"caption\":\"© Jannes Linders & Sculpture International Rotterdam / CBK Rotterdam\"},{\"id\":\"imported-item-47\",\"href\":\"/werke/imported-item-47\",\"title\":\"o.T.\",\"year\":\"um 1982/83\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage auf Geschenkpapier<br>34,5 x 50 cm, Rahmen: 52 x 67 x 2,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Galerie Meyer Kainer\"},{\"id\":\"imported-item-46\",\"href\":\"/werke/imported-item-46\",\"title\":\"o.T.\",\"year\":\"1972\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Papier<br>13,7 x 21 cm<br>Rahmen: 25,1 x 31,1 x 3,2 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-45\",\"href\":\"/werke/imported-item-45\",\"title\":\"o.T.\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gips, Wellpappe<br>185 x 57 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-44\",\"href\":\"/werke/imported-item-44\",\"title\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"year\":\"2007\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>beidseitig: Collage, Acryl auf Digital Print (recto); Acryl, Lack, Digital Prints, Fotos collagiert (verso)<br>65,5 (H) x 51 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"imageAlt\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-43\",\"href\":\"/werke/imported-item-43\",\"title\":\"Plakatentwurf (Basel)\",\"year\":\"1998\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Digitalprint, Kugelschreiber, Acryl auf Schaumkarton<br>128 x 90,5 cm, Rahmen: 144 x 106,7 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"imageAlt\":\"Plakatentwurf (Basel)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-42\",\"href\":\"/werke/imported-item-42\",\"title\":\"Plakatentwurf (Franz West at David Zwirner)\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Farbkopie, collagiert auf Karton<br>100 x 70 cm, Rahmen: 103,8 x 74,1 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"imageAlt\":\"Plakatentwurf (Franz West at David Zwirner)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-41\",\"href\":\"/werke/imported-item-41\",\"title\":\"„Alibert\\\"\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Auflage: 200<br>Siebdruck 76 x 56 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"imageAlt\":\"„Alibert\\\"\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-40\",\"href\":\"/werke/imported-item-40\",\"title\":\"Passstück\",\"year\":\"o.J. (Ende 1970er Jahre)\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Papiermache, Dispersionsfarbe <br>34,5 x 54 x 47 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-39\",\"href\":\"/werke/imported-item-39\",\"title\":\"o.T.\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>230 x 305 x 280 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-38\",\"href\":\"/werke/imported-item-38\",\"title\":\"„Lotus”\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>166 x 210 x 290 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"imageAlt\":\"„Lotus”\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-37\",\"href\":\"/werke/imported-item-37\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-36\",\"href\":\"/werke/imported-item-36\",\"title\":\"„Eggs“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>vierteilig<br>Epoxydharz, Kunstharzlack<br>je ca. 105 (H) x 140 x 110 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"imageAlt\":\"„Eggs“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-35\",\"href\":\"/werke/imported-item-35\",\"title\":\"„Maya’s Dream“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz, Kunstharzlack, Beton<br>250 x 260 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"imageAlt\":\"„Maya’s Dream“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"ot\",\"href\":\"/werke/ot\",\"title\":\"o.T.\",\"year\":\"2012 (Fertigstellung posthum)\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>560 x 430 x 340 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-33\",\"href\":\"/werke/imported-item-33\",\"title\":\"„Parrhesia“\",\"year\":\"2012\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>7 Skulpturen auf Sockel<br>Papiermaché, Styropor, Karton, Acryllack, Acrylfarbe, Stahl, Sockel: Holz<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"imageAlt\":\"„Parrhesia“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-32\",\"href\":\"/werke/imported-item-32\",\"title\":\"„Variable”\",\"year\":\"1997\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Zehnteilige Bilderwand: zwei Wandobjekte, drei Schwarz-Weiß-Fotografien, zwei Siebdrucke, zwei Collagen, ein Plakatentwurf<br>150 x 320 x 10 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"imageAlt\":\"„Variable”\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-31\",\"href\":\"/werke/imported-item-31\",\"title\":\"Aus der Installation „12 Diwane”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Schaumstoff, Jute, Teppich/Wolle (bzw. Baumwolle für die MAK Exemplare)<br>je 200 x 63 x 70 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"imageAlt\":\"Aus der Installation „12 Diwane”\",\"caption\":\"Courtesy Dorotheum\"},{\"id\":\"imported-item-30\",\"href\":\"/werke/imported-item-30\",\"title\":\"o.T.\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Styropor, Acryllack, Stahl<br>115 x 63 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-29\",\"href\":\"/werke/imported-item-29\",\"title\":\"„Epiphanie an Stühlen“\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Hängende Skulptur, zwei StühleSkulptur: Stahl, PU-Schaum, Gaze, Dispersion<br>Ø 165 cm, 6 Arme je ca. 115 x 25 x 25 cm<br>Stühle: Stahl, Holz, Bambus, Leinen<br>je ca. 85 x 45 x 55 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"imageAlt\":\"„Epiphanie an Stühlen“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"echolalie\",\"href\":\"/werke/echolalie\",\"title\":\"„Echolalie“\",\"year\":\"2010\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 7 Skulpturen, 1 Clubfauteil, 2 Tröge<br>diverse Materialien und Dimensionen</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"imageAlt\":\"„Echolalie“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-27\",\"href\":\"/werke/imported-item-27\",\"title\":\"„Meeting Point 2“ (Modell)\",\"year\":\"2000/2009\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Gips, Acrylglas, Holz, Karton<br>32 x 41 x 41 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"imageAlt\":\"„Meeting Point 2“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-26\",\"href\":\"/werke/imported-item-26\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe, Farbkübel<br>126 x 113,5 x 74 cm<br>Sockel: 46 (H) x 102 x 77 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-25\",\"href\":\"/werke/imported-item-25\",\"title\":\"o.T.\",\"year\":\"1977\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>ca. 20 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Generali Foundation\"},{\"id\":\"imported-item-24\",\"href\":\"/werke/imported-item-24\",\"title\":\"„Warum ist etwas und nicht nichts”\",\"year\":\"1997\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahlblech lackiert, Laminat<br>220 x 390 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"imageAlt\":\"„Warum ist etwas und nicht nichts”\",\"caption\":\"© Margherita Spiluttini\"},{\"id\":\"imported-item-23\",\"href\":\"/werke/imported-item-23\",\"title\":\"Passstück (bemalt von Eugenia Rochas)\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Holz, Farbe, Papier<br>56 x 53 x 26 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"imageAlt\":\"Passstück (bemalt von Eugenia Rochas)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-22\",\"href\":\"/werke/imported-item-22\",\"title\":\"„NYCNAC“\",\"year\":\"2008\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Paravent mit Tapete, 2 bis 8 Passstücke und Video<br>Digitalprint, Acrylfarbe, Holz, Video<br>Kabine: 4 Flügel je 240 x 160 cm<br>Passstücke: je 100 x 20 x 25 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"imageAlt\":\"„NYCNAC“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-21\",\"href\":\"/werke/imported-item-21\",\"title\":\"„Pommes d’Adam“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Modell mit vier Skulpturen in Vitrine<br>Papiermaché, Holz, Plexiglas<br>87 x 126 x 64 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"imageAlt\":\"„Pommes d’Adam“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-20\",\"href\":\"/werke/imported-item-20\",\"title\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"year\":\"2008\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage, Digitalprint, Acryl auf Schaumkarton<br>113,5 x 132,6 cm<br>Rahmen: 124 x 143,5 x 5,5 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"imageAlt\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-19\",\"href\":\"/werke/imported-item-19\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyesterkern, Dispersion, Besenstiel, Gips, Gaze<br>92,5 x 44,5 x 42,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-18\",\"href\":\"/werke/imported-item-18\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyester, Glasfiber, Dispersion<br>33,5 x 45,5 cm (Ø)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-17\",\"href\":\"/werke/imported-item-17\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-16\",\"href\":\"/werke/imported-item-16\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-15\",\"href\":\"/werke/imported-item-15\",\"title\":\"“We’ll not carry coals”\",\"year\":\"2000/2007\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>sechsteilige Installation mit Arbeiten verschiedener Künstler<br>diverse Materialien<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Kunstraum Innsbruck, 2007\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"imageAlt\":\"“We’ll not carry coals”\",\"caption\":\"Clemens Schillinger\"},{\"id\":\"imported-item-14\",\"href\":\"/werke/imported-item-14\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe<br>154 x 103 x 63 cm<br>Sockel: 100 x 50 x 60 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-13\",\"href\":\"/werke/imported-item-13\",\"title\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitungsseite<br>26,6 x 21,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"imageAlt\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-12\",\"href\":\"/werke/imported-item-12\",\"title\":\"“Schöner Wohnen”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>zehnteilige Bilderwand mit Arbeiten verschiedener KünstlerInnen, zwei Clubfauteuils, Trog<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"imageAlt\":\"“Schöner Wohnen”\",\"caption\":\"A. Burger, Zürich\"},{\"id\":\"imported-item-11\",\"href\":\"/werke/imported-item-11\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"\"},{\"id\":\"imported-item-10\",\"href\":\"/werke/imported-item-10\",\"title\":\"„Sphairos (Die Kopie ihres Titels)”\",\"year\":\"1998\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>150 x 150 x 150 cm, Sockel: 49 x 240 x 290 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Skulptur im Schlosspark Ambras, Innsbruck, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"imageAlt\":\"„Sphairos (Die Kopie ihres Titels)”\",\"caption\":\"Heinz Stanger\"},{\"id\":\"imported-item-9\",\"href\":\"/werke/imported-item-9\",\"title\":\"“Viennoiserie“\",\"year\":\"1998\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>10teilige Bilderwand mit Arbeiten verschiedener Künstler, Diwan, 2 Editionen, Sockel, Tisch<br>Einzelne Arbeiten:<br>Richard Jackson: 66 x 101 cm<br>Paul McCarthy: 61 x 48 cm<br>Raymond Pettibon: 44 x 28 cm<br>Roland Kollnitz: 138 x 38 x 5 cm<br>Otto Muehl: 55 x 65 cm<br>Seamus Farel a.o.: 85 x 103 cm<br>Joseph Kosuth: 125,5 x 107 cm<br>Franz West (braun): 85 x 103 cm<br>Franz West (Kleiderbügel): 44 x 24 x 5 cm<br>Franz West (Deckel): 37 x 28 x 3,5 cm<br>Franz West (linke Skulptur): 68 x 68 x 104 (H) cm<br>Sockel: 59,5 x 37 x 98 (H) cm<br>Franz West (rechte Skulptur): 66 x 78 x 93,5 (H) cm<br>Tisch von Prinzgau/Podgorschek, von Franz West überarbeitet: 74 x 97 ø cm<br>Franz West (Diwan): 230 x 80 x 90 (H) cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Atelier Stubenring, 1998\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"imageAlt\":\"“Viennoiserie“\",\"caption\":\"Jens Preusse, Wien\"},{\"id\":\"imported-item-8\",\"href\":\"/werke/imported-item-8\",\"title\":\"“Spiegel in Kabine mit Passstücken”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>4 Passstücke, Bodenplatte, Kabine, Spiegel von Michelangelo Pistoletto, Video mit Handlungsanregungen, Monitor<br>Kabine: Spiegel, Holz, Zeitung, Dispersion; Passstücke: Epoxydharz, Metall; Monitor, Video<br>Kabine: 220 x 260 x 360 cm; Spiegel: 220 x 140 cm; Passstücke: 112 x 16 x 15 cm, 112 x 30 x 22 cm, 108 x 31 x 22,5 cm, 114 x 29 x 28 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Les Abbatoirs, Toulouse, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"imageAlt\":\"“Spiegel in Kabine mit Passstücken”\",\"caption\":\"© Marc Boyer\"},{\"id\":\"imported-item-7\",\"href\":\"/werke/imported-item-7\",\"title\":\"„Doku-Stuhl”\",\"year\":\"1997-2003\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Offene Edition, alle individuell in Farbe und Gestaltung<br>Stahl, Holz, Schaumstoff, Leinen, Baumwolle<br>je ca. 84 x 45 x 54 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht documenta X, Kassel, 1997\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"imageAlt\":\"„Doku-Stuhl”\",\"caption\":\"Werner Maschmann\"},{\"id\":\"imported-item-6\",\"href\":\"/werke/imported-item-6\",\"title\":\"Labstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Glas, Metall, Pappe<br>22 x 39 x 28 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"\"},{\"id\":\"imported-item-5\",\"href\":\"/werke/imported-item-5\",\"title\":\"„Auto Sex”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Heimo Zobernig, Franz West<br>halbtransparente Spiegelfolie, Gummi, Papierklemmen<br>zwei Stühle: Metall, Holz, Schaumstoff, Baumwolle<br>je 84 x 45 x 54 cm<br>Folie: 250 x 150 cm<br>Gummi: 141 x 320 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Hauser &amp; Wirth, Zürich, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"imageAlt\":\"„Auto Sex”\",\"caption\":\"\"},{\"id\":\"imported-item-4\",\"href\":\"/werke/imported-item-4\",\"title\":\"„PA 1”\",\"year\":\"1990\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Bodenplatte, Monitor, Metall, Stühle<br>Tisch: 43 x 60 x 110 cm<br>sechs Stühle: Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst, 1996\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"imageAlt\":\"„PA 1”\",\"caption\":\"Bettina Letz, Wien\"},{\"id\":\"imported-item-3\",\"href\":\"/werke/imported-item-3\",\"title\":\"„Schöne Aussicht”\",\"year\":\"1988\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Zeitung<br>113 x 84 x 46 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Zwirner\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"imageAlt\":\"„Schöne Aussicht”\",\"caption\":\"\"},{\"id\":\"imported-item-2\",\"href\":\"/werke/imported-item-2\",\"title\":\"„BI 5” (Passstück)\",\"year\":\"1990\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminiumguß bemalt<br>50 x 27 x 77 cm<br>Sockel: 77 x 74 x 45 cm</p>\",\"html\":\"\",\"view\":\"Atelier Weißgerberlände, 1990\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"imageAlt\":\"„BI 5” (Passstück)\",\"caption\":\"\"}]");
//#endregion
//#region src/work-overlay.ts
r.registerPlugin($e);
var tt = et, nt = new Map(tt.map((e) => [e.id, e])), rt = tt.map((e, t) => ({
	...e,
	index: t
})), it = .82, at = it;
function ot() {
	let e = new URL(window.location.href);
	return e.searchParams.delete("work"), `${e.pathname}${e.search}${e.hash}`;
}
function st(e) {
	try {
		return new URL(e, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {
		return "";
	}
}
function ct(e, t) {
	let n = document.createElement("div");
	return n.className = "work-overlay__flyer", n.setAttribute("aria-hidden", "true"), Object.assign(n.style, {
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`
	}), n.append(e), document.body.append(n), n;
}
function lt(e) {
	let t = e.cloneNode(!1);
	return t.removeAttribute("id"), t.setAttribute("aria-hidden", "true"), t.style.visibility = "hidden", e.naturalWidth && e.naturalHeight && (t.width = e.naturalWidth, t.height = e.naturalHeight), t;
}
function ut() {
	let e = document.querySelector(".top_bar_section"), t = (e == null ? void 0 : e.cloneNode(!0)) || document.createElement("nav");
	t.classList.add("top_bar_section", "u-section", "is-relative", "work-overlay__header"), t.removeAttribute("data-wf--top-bar--variant"), t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), t.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")), t.querySelectorAll("[data-logo-variant]").forEach((e) => e.remove()), t.querySelectorAll(".top_bar_center .nav_logo_link svg, .top_bar_center .nav_logo_image_link img.nav_logo").forEach((e) => e.style.removeProperty("visibility"));
	let n = t.querySelector(".top_bar_left") || t, r = document.createElement("a");
	return r.className = "text-link is-back w-inline-block work-overlay__back", r.href = ot(), r.setAttribute("data-transition", "false"), r.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 15\" class=\"arrow is-rotate\" aria-hidden=\"true\"><path d=\"M3.60046 5.7002H0V9.3002H3.60046V5.7002Z\" fill=\"currentColor\" class=\"arrow-dot\"/><path d=\"M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z\" fill=\"currentColor\" class=\"arrow-arrow\"/></svg><div class=\"text-block\">Zurück</div>", n.replaceChildren(r), {
		header: t,
		backLink: r
	};
}
function dt(e) {
	var t;
	let n = ((t = e.textContent) == null ? void 0 : t.trim()) || "Zur Übersicht", r = document.createElement("span"), i = document.createElement("span"), a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	e.classList.add("button-outlined"), r.className = "button-mask", r.setAttribute("aria-hidden", "true"), i.className = "button-text", i.textContent = n, a.classList.add("arrow"), a.setAttribute("viewBox", "0 0 17 15"), a.setAttribute("aria-hidden", "true"), a.innerHTML = "<path class=\"arrow-dot\" d=\"M3.60046 5.7002H0V9.3002H3.60046V5.7002Z\" fill=\"currentColor\"/><path class=\"arrow-arrow\" d=\"M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z\" fill=\"currentColor\"/>", e.replaceChildren(r, i, a);
}
function ft(u, d) {
	let f = document.title, p = document.createElement("div"), m = document.createElement("div"), h = document.createElement("div"), g = document.createElement("div"), _ = document.createElement("div"), { header: v, backLink: y } = ut(), b = null, x = document.createComment("site menu position"), S = /* @__PURE__ */ new Map(), C = "closed", w = null, T = null, E = null, D = null, O = "", k = null, A = window.scrollY, j = 0, M = null, N = null, ee = "", te = "", P = history.scrollRestoration, F = null, I = null;
	p.className = "work-overlay", p.hidden = !0, p.setAttribute("role", "dialog"), p.setAttribute("aria-modal", "true"), p.setAttribute("aria-label", "Werkdetails"), p.setAttribute("data-work-overlay", ""), p.tabIndex = -1, m.className = "work-overlay__backdrop", h.className = "work-overlay__surface", h.setAttribute("data-lenis-prevent", ""), g.className = "work-overlay__scroll-content", _.className = "work-overlay__content", g.append(v, _), h.append(g), p.append(m, h), p.setAttribute("data-work-detail-overview-href", ot()), document.body.append(p), a();
	let L = (e) => {
		let t = Array.from(d.querySelectorAll("[data-works-rendered-item]")).find((t) => t.getAttribute("data-works-rendered-item") === e);
		return (t == null ? void 0 : t.querySelector(".cms-works__image-wrap")) || null;
	}, R = () => {
		var e;
		b || (b = document.querySelector("[data-site-menu]")), !(!b || p.contains(b)) && (x.parentNode || (e = b.parentNode) == null || e.insertBefore(x, b), p.append(b));
	}, z = () => [
		y,
		...Array.from(v.querySelectorAll(".nav_logo_link")),
		...Array.from(_.querySelectorAll(".cms-work-detail__content > *, .cms-work-detail__caption, .cms-work-detail__related"))
	], B = () => {
		M == null || M.kill(), M = null, N == null || N.kill(), N = null, r.killTweensOf([
			m,
			h,
			...z()
		]);
	}, V = () => {
		for (let e of Array.from(document.body.children)) !(e instanceof HTMLElement) || e === p || e === E || (S.has(e) || S.set(e, e.inert), e.inert = !0);
	}, H = () => {
		if (I) {
			I.resize();
			return;
		}
		if (!window.lenis || t() || window.matchMedia("(max-width: 767px)").matches) return;
		let e = window.Lenis;
		e && (I = new e({
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
		I == null || I.destroy(), I = null;
	}, W = () => {
		var e;
		document.documentElement.classList.contains("work-overlay-active") || (A = window.scrollY, ee = document.documentElement.style.overflow, te = document.body.style.width, P = history.scrollRestoration, document.body.style.width = `${document.documentElement.clientWidth}px`, document.documentElement.style.overflow = "hidden", document.documentElement.classList.add("work-overlay-active"), history.scrollRestoration = "manual", (e = window.lenis) == null || e.stop(), V());
	}, G = () => {
		var e;
		document.documentElement.classList.remove("work-overlay-active"), document.documentElement.style.overflow = ee, document.body.style.width = te, history.scrollRestoration = P, S.forEach((e, t) => {
			t.inert = e;
		}), S.clear(), (e = window.lenis) == null || e.start(), window.scrollTo(0, A);
	}, K = (e) => {
		D = e, O = e.getAttribute("style") || "";
		let t = e.getBoundingClientRect();
		e.style.aspectRatio = `${t.width} / ${Math.max(t.height, 1)}`;
	}, q = () => {
		D != null && D.isConnected && (O ? D.setAttribute("style", O) : D.removeAttribute("style")), D = null, O = "";
	}, J = () => {
		if (!T || !w) return;
		let e = L(w.id) || D;
		e != null && e.isConnected && (e.querySelector("img") || (T.className = "cms-works__image", e.append(T))), E == null || E.remove(), E = null, T = null, q();
	}, Y = (e) => {
		F == null || F(), F = null;
		let t = o(e), n = s(p, e, l(rt, e)), r = t.querySelector(".cms-work-detail__title"), i = t.querySelector(".cms-work-detail__image");
		if (!i) throw Error(`Missing detail image for ${e.id}`);
		if (r && (r.id = "work-overlay-title", p.setAttribute("aria-labelledby", r.id)), n) {
			n.querySelectorAll("a[href]").forEach((e) => {
				e.setAttribute("data-transition", "false");
			});
			let e = n.querySelector(".cms-work-detail__overview-link");
			e && dt(e);
		}
		let a = document.createElement("div");
		return a.className = "work-detail_wrapper u-section cms-work-detail work-overlay__detail", a.append(t), _.replaceChildren(a), n && _.append(n), h.scrollTop = 0, I == null || I.resize(), document.title = `${e.title} – Franz West`, i;
	}, X = (e) => {
		if (!(e !== j || !w)) {
			if (E && T) {
				let e = _.querySelector(".cms-work-detail__image");
				e && e.style.removeProperty("visibility"), J();
			}
			C = "open", r.to(z(), {
				autoAlpha: 1,
				duration: t() ? 0 : .42,
				stagger: t() ? 0 : .055,
				ease: "power2.out",
				onComplete: () => p.focus({ preventScroll: !0 })
			});
		}
	}, Z = (e, n, i = !1) => {
		let a = ++j, o = w;
		B(), o && J(), C = "opening", w = e, !p.hidden && o && r.set(m, { opacity: 1 });
		let s = null, l = null;
		if (!i && n) {
			let e = n.querySelector(".cms-works__image-wrap"), t = e == null ? void 0 : e.querySelector("img");
			e && t && t.complete && t.naturalWidth > 0 && (s = t, l = e.getBoundingClientRect(), K(e));
		}
		let u = Y(e);
		s && l && (T = s, s.naturalWidth && s.naturalHeight && (u.width = s.naturalWidth, u.height = s.naturalHeight), u.style.visibility = "hidden", E = ct(s, l)), p.hidden = !1, R(), W(), V();
		let d = _.querySelector(".work-overlay__detail");
		if (F = d ? c(d) : null, H(), p.focus({ preventScroll: !0 }), document.documentElement.classList.remove("work-overlay-initial"), r.set(z(), { autoAlpha: 0 }), i || t() || !E) {
			r.set(m, { opacity: 1 }), X(a);
			return;
		}
		r.set(m, { opacity: +!!o }), N = r.timeline(), N.to(m, {
			opacity: 1,
			duration: at,
			ease: "power1.inOut"
		}, 0), M = $e.fit(E, u, {
			duration: it,
			ease: "power3.inOut",
			onComplete: () => X(a)
		});
	}, Q = (e) => {
		if (e !== j) return;
		J(), F == null || F(), F = null, b && x.parentNode && x.parentNode.insertBefore(b, x.nextSibling), p.hidden = !0, _.replaceChildren(), w = null, C = "closed", document.title = f, r.set(m, { clearProps: "opacity" }), G();
		let t = k != null && k.isConnected ? k : null;
		t == null || t.focus({ preventScroll: !0 }), k = null;
	}, ne = () => {
		if (C === "closed") return;
		let e = ++j;
		B(), C = "closing", U();
		let n = () => {
			if (e !== j) return;
			let n = w ? L(w.id) || D : null, i = T || _.querySelector(".cms-work-detail__image");
			if (!(n != null && n.isConnected) || !i || t()) {
				r.to(m, {
					opacity: 0,
					duration: t() ? 0 : at,
					onComplete: () => Q(e)
				});
				return;
			}
			if (!E) {
				let e = i.getBoundingClientRect(), t = lt(i);
				i.replaceWith(t), T = i, E = ct(i, e);
			}
			r.to(m, {
				opacity: 0,
				duration: at,
				ease: "power1.inOut"
			}), M = $e.fit(E, n, {
				duration: it,
				ease: "power3.inOut",
				onComplete: () => Q(e)
			});
		};
		r.to(z(), {
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
	}, re = (e = !1) => {
		var t;
		let n = ((t = new URL(window.location.href).searchParams.get("work")) == null ? void 0 : t.trim()) || "", r = nt.get(n);
		if (n && !r) {
			history.replaceState({}, "", ot()), ne();
			return;
		}
		if (!r) {
			ne();
			return;
		}
		if ((w == null ? void 0 : w.id) === r.id && (C === "open" || C === "opening")) return;
		let i = Array.from(d.querySelectorAll("[data-works-rendered-item]")).find((e) => e.getAttribute("data-works-rendered-item") === r.id) || null;
		Z(r, i, e);
	}, ie = () => {
		let e = history.state;
		if (e != null && e.fwWorkOverlay && e.fromOverview && e.depth && history.length > e.depth) {
			history.go(-e.depth);
			return;
		}
		history.replaceState({ fwWorkOverlay: !1 }, "", ot()), re();
	};
	u.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element) || t.defaultPrevented || e(t)) return;
		let r = n.closest("a[data-work-overlay-trigger]");
		if (!r || !u.contains(r)) return;
		let i = r.getAttribute("data-work-overlay-trigger") || st(r.href), a = nt.get(i);
		if (!a) return;
		t.preventDefault(), k = r;
		let o = new URL(window.location.href);
		o.searchParams.set("work", a.id), history.replaceState({
			...history.state || {},
			fwWorkOverlayBase: !0
		}, "", ot()), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !0,
			depth: 1
		}, "", o), Z(a, r);
	}), p.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element) || e(t)) return;
		let r = n.closest("a[href]");
		if (!r || !p.contains(r)) return;
		if (r === y || r.classList.contains("cms-work-detail__overview-link")) {
			t.preventDefault(), ie();
			return;
		}
		let i = nt.get(st(r.href));
		if (!i) return;
		t.preventDefault();
		let a = history.state, o = new URL(window.location.href);
		o.searchParams.set("work", i.id), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !!(a != null && a.fromOverview),
			depth: ((a == null ? void 0 : a.depth) || 0) + 1
		}, "", o), Z(i, null);
	}), window.addEventListener("popstate", () => re()), window.addEventListener("pageshow", (e) => {
		e.persisted && re(!0);
	}), window.addEventListener("site:lenis-ready", () => {
		if (C !== "closed") {
			var e;
			(e = window.lenis) == null || e.stop(), C !== "closing" && H();
		}
	}), document.addEventListener("keydown", (e) => {
		if (C === "closed") return;
		if (e.key === "Escape") {
			if (b != null && b.classList.contains("is-open")) return;
			e.preventDefault(), ie();
			return;
		}
		if (e.key !== "Tab") return;
		let t = n(p);
		if (t.length === 0) return;
		let r = t[0], i = t[t.length - 1];
		e.shiftKey && document.activeElement === r ? (e.preventDefault(), i.focus()) : !e.shiftKey && document.activeElement === i && (e.preventDefault(), r.focus());
	}), new URL(window.location.href).searchParams.has("work") ? (re(!0), i(() => {
		if (C !== "closed") {
			var e;
			V(), (e = window.lenis) == null || e.stop();
		}
	})) : document.documentElement.classList.remove("work-overlay-initial");
}
//#endregion
//#region src/cms-works.ts
var pt = "[data-cms-works]", mt = "[data-cms-works-source]", ht = "[data-cms-works-item], [data-cms-canvas-item]", gt = "[data-works-thumbnail], [data-canvas-thumbnail]", _t = "[data-works-title], [data-canvas-title]", vt = "[data-works-year], [data-canvas-year]", yt = "[data-works-category], [data-works-categories]", bt = "http://www.w3.org/2000/svg", xt = [
	"[data-works-link]",
	"[data-sheet-calendar-link]",
	"[data-sheet-calender-link]",
	"[data-sheet-claender-link]",
	"[data-calendar-link]",
	"[data-calender-link]",
	"[data-claender-link]",
	"[data-sheet-link]",
	"a[href]"
].join(", "), St = 16, Ct = 16, wt = "[data-cms-works-load-more-template]", Tt = "site:works-ready";
function Et(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function Dt(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function Ot(e) {
	var t;
	return (t = Array.from(e.children).find((e) => e instanceof HTMLImageElement)) == null ? null : t;
}
function kt(e) {
	let t = e.querySelector(gt);
	return t ? t instanceof HTMLImageElement ? t : null : Ot(e);
}
function At(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function jt(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Mt(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? Dt(e, yt) : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function Nt(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v;
	return (t = (n = (r = (i = (a = (o = (s = (c = (l = (u = (d = (f = (p = (m = (h = (g = (_ = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : _) == null ? e.getAttribute("data-sheet-calendar-href") : g) == null ? e.getAttribute("data-sheet-calendar-url") : h) == null ? e.getAttribute("data-sheet-calender-href") : m) == null ? e.getAttribute("data-sheet-calender-url") : p) == null ? e.getAttribute("data-sheet-claender-href") : f) == null ? e.getAttribute("data-sheet-claender-url") : d) == null ? e.getAttribute("data-calendar-href") : u) == null ? e.getAttribute("data-calendar-url") : l) == null ? e.getAttribute("data-calender-href") : c) == null ? e.getAttribute("data-calender-url") : s) == null ? e.getAttribute("data-claender-href") : o) == null ? e.getAttribute("data-claender-url") : a) == null ? e.getAttribute("data-sheet-href") : i) == null ? e.getAttribute("data-sheet-url") : r) == null ? (v = e.querySelector(xt)) == null ? void 0 : v.href : n) == null ? "" : t;
}
function Pt(e, t) {
	var n, r, i, a, o, s;
	let c = kt(e), l = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!l) return null;
	let u = Dt(e, _t) || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "", d = Nt(e), f = "";
	try {
		f = new URL(d, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {}
	return {
		id: ((i = e.getAttribute("data-works-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-canvas-id")) == null ? void 0 : a.trim()) || ((o = e.getAttribute("data-cms-item-id")) == null ? void 0 : o.trim()) || f || `work-${t + 1}-${At(`${u}-${l}`)}`,
		title: u,
		thumbnail: l,
		thumbnailAlt: (c == null ? void 0 : c.alt) || u,
		href: d,
		year: Dt(e, vt) || ((s = e.getAttribute("data-works-year")) == null ? void 0 : s.trim()) || "",
		categories: Mt(e),
		index: t
	};
}
function Ft(e) {
	return Array.from(e.querySelectorAll(ht)).map(Pt).filter((e) => e !== null);
}
function It(e) {
	for (let t of Array.from(e.querySelectorAll(ht))) {
		let e = kt(t);
		e && (e.removeAttribute("srcset"), e.removeAttribute("sizes"), e.removeAttribute("src"));
	}
}
function Lt(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "year" ? n : "year";
}
function Rt(e) {
	let t = e.match(/\b(?:18|19|20)\d{2}\b/);
	return t ? Number.parseInt(t[0], 10) : null;
}
function zt(e) {
	let t = e.trim();
	return t.startsWith("[") && t.endsWith("]") ? t : `[${t}]`;
}
function Bt(e, t, n) {
	let r = [...e];
	if (t === "random") {
		let t = jt(At(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return r.sort((e, t) => {
		var n, r;
		return ((n = Rt(e.year)) == null ? Infinity : n) - ((r = Rt(t.year)) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function Vt(e, t) {
	return t.size === 0 ? e : e.filter((e) => e.categories.some((e) => t.has(e)));
}
function Ht() {
	let e = document.createElementNS(bt, "svg"), t = document.createElementNS(bt, "path"), n = document.createElementNS(bt, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), t.classList.add("cms-works__eye-pupil"), t.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), t.setAttribute("fill", "currentColor"), n.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), n.setAttribute("fill", "currentColor"), e.append(t, n), e;
}
function Ut(e, t = -1) {
	let n = document.createElement(e.href ? "a" : "article"), r = document.createElement("span"), i = document.createElement("img"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span");
	if (n.className = "cms-works__item", n.setAttribute("data-works-rendered-item", e.id), n.setAttribute("data-works-categories", e.categories.join(",")), e.href && (n.classList.add("cms-works__item--clickable"), n.setAttribute("href", e.href), n.setAttribute("data-work-overlay-trigger", e.id), n.setAttribute("data-transition", "false")), r.className = "cms-works__image-wrap", t >= 0 && (r.classList.add("cms-works__image-wrap--revealing"), r.style.setProperty("--cms-works-reveal-delay", `${t * 100}ms`)), i.className = "cms-works__image", i.src = e.thumbnail, i.alt = e.thumbnailAlt, i.loading = "lazy", i.decoding = "async", r.append(i), a.className = "cms-works__meta", o.className = "cms-works__label", s.className = "cms-works__title", s.textContent = e.title, o.append(s), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = zt(e.year), o.append(t);
	}
	return a.append(o, Ht()), n.append(r, a), n;
}
function Wt(e) {
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
function Gt(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function Kt(e, t, n) {
	let r = Array.from({ length: n }, () => ({
		items: [],
		height: 0
	}));
	return e.forEach((e, i) => {
		var a;
		let o = (a = t.get(e.id)) == null ? {
			width: 1,
			height: 1
		} : a, s = r[i % n];
		s.items.push(e), s.height += o.height / Math.max(o.width, 1);
	}), r;
}
function qt(e, t, n, r) {
	let i = document.createElement("div"), a = Kt(t, n, Gt(e)), o = /* @__PURE__ */ new Map();
	r && t.forEach((e) => {
		r.has(e.id) && o.set(e.id, o.size);
	}), i.className = "cms-works__grid", a.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			var n;
			t.append(Ut(e, (n = o.get(e.id)) == null ? -1 : n));
		}), i.append(t);
	}), e.replaceChildren(i), e.classList.add("is-ready");
}
function Jt(e, t) {
	var n, r, i;
	let a = (n = (r = (i = e.querySelector("[data-cms-works-load-more-text]")) == null ? e.querySelector("[data-button-text]") : i) == null ? e.querySelector(".button-text") : r) == null ? e : n;
	a.textContent = t;
}
function Yt(e, t) {
	var n, r;
	let i = (n = (r = e.querySelector(wt)) == null ? t.querySelector(wt) : r) == null ? document.querySelector(wt) : n;
	return i ? (i instanceof HTMLButtonElement && (i.type = "button"), i instanceof HTMLAnchorElement && (i.href = "#"), i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.removeAttribute("hidden"), i.removeAttribute("aria-hidden"), i.removeAttribute("data-cms-works-load-more-template"), i.setAttribute("data-cms-works-load-more", ""), Jt(i, "MEHR ANZEIGEN"), i) : null;
}
function Xt() {
	return b();
}
function Zt(e, t) {
	var n, r, i, a, o;
	let s = Ft(t), c = Xt() ? v() : null, l = (n = c == null ? void 0 : c.categories) == null ? [] : n, u = {
		appliedCategories: new Set(l),
		pendingCategories: new Set(l),
		appliedSortMode: (r = c == null ? void 0 : c.sort) == null ? Lt(e) : r,
		pendingSortMode: (i = c == null ? void 0 : c.sort) == null ? Lt(e) : i,
		open: !1
	}, d = document.createElement("div"), f = document.createElement("button"), p = document.createElement("div"), m = Yt(e, t), h = 0, _ = 0, b = 0, x = (a = c == null ? void 0 : c.visibleCount) == null ? St : a, S = (o = c == null ? void 0 : c.scrollY) == null ? null : o, C = [], w = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), E = 0;
	t.hidden = !0, t.setAttribute("aria-hidden", "true"), It(t), e.classList.add("cms-works"), d.className = "cms-works__grid-host u-section", f.className = "cms-works__collection-overlay", f.type = "button", f.setAttribute("aria-label", "Filter schliessen"), p.className = "cms-works__grid-mount", d.append(p), m && d.append(m);
	let D = () => Bt(Vt(s, u.appliedCategories), u.appliedSortMode, e), O = (t = !1, n) => {
		let r = ++E, i = C.slice(0, x);
		Promise.all(i.map(async (e) => {
			if (w.has(e.id)) return;
			let t = T.get(e.thumbnail);
			t || (t = Wt(e.thumbnail), T.set(e.thumbnail, t)), w.set(e.id, await t);
		})).then(() => {
			r === E && (window.cancelAnimationFrame(h), h = window.requestAnimationFrame(() => {
				if (r !== E) return;
				let a = Gt(e), o = Math.round(e.getBoundingClientRect().width);
				!t && a === _ && o === b || (_ = a, b = o, qt(p, i, w, n), m && (m.hidden = C.length <= x), S !== null && (window.scrollTo(0, S), S = null), e.setAttribute("data-site-assets-ready", ""), document.dispatchEvent(new CustomEvent(Tt, {
					bubbles: !0,
					detail: {
						count: i.length,
						total: C.length
					}
				})));
			}));
		});
	}, k = () => {
		y({
			categories: Array.from(u.appliedCategories),
			sort: u.appliedSortMode,
			visibleCount: x,
			scrollY: window.scrollY,
			ts: Date.now()
		});
	}, A = () => {
		var e;
		let t = j.element.querySelector(".cms-works-filter__panel"), n = (e = t == null ? void 0 : t.getBoundingClientRect().bottom) == null ? j.element.getBoundingClientRect().bottom : e;
		f.style.setProperty("--cms-works-overlay-top", `${Math.max(0, n)}px`);
	}, j = g(s, u, () => {
		C = D(), x = St, O(!0), j.sync(), k();
	}, { onOpenChange: (t) => {
		e.classList.toggle("is-filter-open", t), t && A();
	} });
	if (f.addEventListener("click", () => j.close(!0)), m) {
		let e = () => {
			let e = x;
			x = Math.min(x + Ct, C.length);
			let t = new Set(C.slice(e, x).map((e) => e.id));
			O(!0, t), k();
		};
		m.addEventListener("click", (t) => {
			t.preventDefault(), e();
		}), m.addEventListener("keydown", (t) => {
			t.key !== "Enter" && t.key !== " " || (t.preventDefault(), e());
		});
	}
	C = D(), e.replaceChildren(j.element, f, d), ft(e, p);
	let M = new ResizeObserver(() => O());
	O(!0), j.sync(), M.observe(e), window.addEventListener("orientationchange", () => O(!0)), window.addEventListener("resize", A), window.addEventListener("scroll", A, { passive: !0 }), window.addEventListener("pagehide", k);
}
function Qt(e) {
	var t;
	let n = (t = e.querySelector(mt)) == null ? document.querySelector(mt) : t;
	if (!n) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	Zt(e, n);
}
Et(() => {
	Array.from(document.querySelectorAll(pt)).forEach(Qt);
});
//#endregion

//# sourceMappingURL=cms-works.js.map