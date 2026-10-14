import { l as e, m as t, o as n } from "./site-interactions-Cou7uu3t.js";
import { t as r } from "./site-interactions-FNuBQfHA.js";
import { i } from "./site-interactions-MF_aFTvs.js";
import { createDetailSection as a, createRelatedSection as o, fitDetailImage as s, pickRelatedItems as c } from "./cms-work-detail.js";
//#region src/cms-works-filter.ts
var l = "\n  <svg width=\"14.45\" height=\"10.2\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z\" fill=\"currentColor\"/>\n    <path d=\"M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z\" fill=\"currentColor\"/>\n    <path d=\"M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z\" fill=\"currentColor\"/>\n  </svg>\n", u = "\n  <svg width=\"8.5\" height=\"9.35\" viewBox=\"0 0 10 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\">\n    <path d=\"M6 9L6 0L4 -8.74228e-08L4 9L6 9Z\" fill=\"currentColor\"/>\n    <path d=\"M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z\" fill=\"currentColor\"/>\n  </svg>\n", d = {
	random: "zufällig",
	year: "Entstehungsjahr"
}, f = ["year", "random"];
function p(e) {
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
function m(e, t) {
	let n = document.createElement("span");
	return n.className = t, n.innerHTML = e, n;
}
function h(e, t, n, r = {}) {
	let i = document.createElement("section"), a = document.createElement("div"), o = document.createElement("div"), s = document.createElement("span"), c = document.createElement("span"), h = document.createElement("span"), g = document.createElement("span"), _ = document.createElement("span"), v = document.createElement("div"), y = document.createElement("div"), b = document.createElement("div"), x = document.createElement("div"), S = document.createElement("div"), C = document.createElement("div"), w = document.createElement("span"), T = document.createElement("div"), E = document.createElement("a"), D = p(e), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
	i.className = "cms-works-filter u-section", a.className = "cms-works-filter__container u-container", o.className = "cms-works-filter__bar", o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), o.setAttribute("aria-expanded", "false"), s.className = "cms-works-filter__bar-left", c.className = "cms-works-filter__label", c.textContent = "FILTER", h.className = "cms-works-filter__count", s.append(m(l, "cms-works-filter__filter-icon"), c, h), g.className = "cms-works-filter__bar-right", _.className = "cms-works-filter__sort-label", _.textContent = "SORTIERUNG", x.className = "cms-works-filter__sort-controls", g.append(_, x, m(u, "cms-works-filter__arrow-icon")), o.append(s, g), v.className = "cms-works-filter__panel u-section", y.className = "cms-works-filter__panel-inner u-container", b.className = "cms-works-filter__categories", S.className = "cms-works-filter__mobile-sort-section", C.className = "cms-works-filter__mobile-sort-heading", w.className = "cms-works-filter__sort-label", w.textContent = "SORTIERUNG", T.className = "cms-works-filter__mobile-sort-controls", C.append(m(u, "cms-works-filter__arrow-icon"), w), S.append(C, T), D.forEach((e) => {
		let n = document.createElement("button"), r = document.createElement("span"), i = document.createElement("span");
		n.className = "cms-works-filter__pill", n.type = "button", n.setAttribute("aria-pressed", "false"), r.textContent = e.name, i.className = "cms-works-filter__pill-count", i.textContent = `[${e.count}]`, n.append(r, i), n.addEventListener("click", () => {
			t.pendingCategories.has(e.name) ? t.pendingCategories.delete(e.name) : t.pendingCategories.add(e.name), A();
		}), O.set(e.name, n), b.append(n);
	}), f.forEach((e) => {
		let n = document.createElement("button");
		n.className = "cms-works-filter__sort-option", n.type = "button", n.textContent = d[e], n.setAttribute("aria-pressed", "false"), n.addEventListener("click", (n) => {
			n.stopPropagation(), t.open || j(), t.pendingSortMode = e, A();
		}), k.set(e, n), x.append(n);
		let r = document.createElement("button");
		r.className = "cms-works-filter__mobile-sort-option", r.type = "button", r.textContent = d[e], r.setAttribute("aria-pressed", "false"), r.addEventListener("click", () => {
			t.pendingSortMode = e, A();
		}), T.append(r);
	}), E.className = "cms-works-filter__apply", E.href = "#", E.textContent = "ANWENDEN", E.addEventListener("click", (e) => {
		e.preventDefault(), t.appliedCategories = new Set(t.pendingCategories), t.appliedSortMode = t.pendingSortMode, M(!1), n();
	}), y.append(b, S), v.append(y, E), a.append(o), i.append(a, v);
	function A() {
		h.textContent = `[${t.appliedCategories.size}]`, i.classList.toggle("is-open", t.open), o.setAttribute("aria-expanded", t.open ? "true" : "false"), O.forEach((e, n) => {
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
			let r = f[n] === t.pendingSortMode;
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
var g = "site-works-view";
function _() {
	try {
		let e = window.sessionStorage.getItem(g);
		if (!e) return null;
		let t = JSON.parse(e);
		return !t || !Array.isArray(t.categories) || typeof t.visibleCount != "number" ? null : (t.sort !== "year" && t.sort !== "random" && (t.sort = "year"), t);
	} catch (e) {
		return null;
	}
}
function v(e) {
	try {
		window.sessionStorage.setItem(g, JSON.stringify(e));
	} catch (e) {}
}
function y() {
	try {
		let e = window.performance.getEntriesByType("navigation")[0];
		return (e == null ? void 0 : e.type) === "back_forward";
	} catch (e) {
		return !1;
	}
}
//#endregion
//#region ../../../Users/philipp/Sites/FW/interactions.js/node_modules/gsap/utils/matrix.js
var b, x, S, C, w, T, E, D, O = "transform", k = O + "Origin", A, j = function(e) {
	var t = e.ownerDocument || e;
	for (!(O in e.style) && ("msTransform" in e.style) && (O = "msTransform", k = O + "Origin"); t.parentNode && (t = t.parentNode););
	if (x = window, E = new V(), t) {
		b = t, S = t.documentElement, C = t.body, D = b.createElementNS("http://www.w3.org/2000/svg", "g"), D.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", A = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, M = function(e) {
	for (var t, n; e && e !== C;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, ee = [], te = [], N = function() {
	return x.pageYOffset || b.scrollTop || S.scrollTop || C.scrollTop || 0;
}, P = function() {
	return x.pageXOffset || b.scrollLeft || S.scrollLeft || C.scrollLeft || 0;
}, F = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, ne = function e(t) {
	if (x.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, I = function e(t, n) {
	if (t.parentNode && (b || j(t))) {
		var r = F(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = b.createElementNS ? b.createElementNS(i.replace(/^https/, "http"), a) : b.createElement(a);
		return n && (r ? (T || (T = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), T.appendChild(l)) : (w || (w = e(t), Object.assign(w.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), w.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, L = function(e) {
	for (var t = new V(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, R = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[O], e.style[O] = "none", e.appendChild(D), t = D.getCTM(), e.removeChild(D), n ? e.style[O] = n : e.style.removeProperty(O.replace(/([A-Z])/g, "-$1").toLowerCase())), t || E.clone();
}, z = function(e, t) {
	var n = F(e), r = e === n, i = n ? ee : te, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === x) return e;
	if (i.length || i.push(I(e, 1), I(e, 2), I(e, 3)), s = n ? T : w, n) r ? (l = R(e), u = -l.e / l.a, d = -l.f / l.d, c = E) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? L(c) : c.getItem(0).matrix : E, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new V(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, A) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (x.getComputedStyle(l)[O] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = x.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[O] = f[O], l[k] = f[k], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, B = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, V = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), B(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return B(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return B(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
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
function H(e, t, n, r) {
	if (!e || !e.parentNode || (b || j(e)).documentElement === e) return new V();
	var i = M(e), a = F(e) ? ee : te, o = z(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && ne(e), f = new V((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : P()), s.top + (d ? 0 : N()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region ../../../Users/philipp/Sites/FW/interactions.js/node_modules/gsap/Flip.js
var U = 1, W, G, K, q, J, Y, X, Z = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, Q = {}, re = 180 / Math.PI, ie = Math.PI / 180, ae = {}, oe = {}, se = {}, ce = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, le = ce("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), ue = ce("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), de = function(e) {
	return W(e)[0] || console.warn("Element not found:", e);
}, fe = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, pe = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, me = {
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
}, he = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, ge = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, _e = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, ve = {}, ye = function(e) {
	var t = ve[e] = ce(e);
	return se[e] = t.concat(ue), t;
}, be = function(e) {
	var t = e._gsap || G.core.getCache(e);
	return t.gmCache === G.ticker.frame ? t.gMatrix : (t.gmCache = G.ticker.frame, t.gMatrix = H(e, !0, !1, !0));
}, xe = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, Se = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = xe(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, Ce = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : oe[a] || (oe[a] = ge(a)), o);
	return n;
}, we = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, Te = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(we);
}, Ee = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), De = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), K && n !== 1) return K._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), K._final.push(function() {
		return (e.cache.uncache = 1) && we(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (Ce(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), Ce(e, Ee), f = window.getComputedStyle(r); l--;) c[Ee[l]] = f[Ee[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new Ye(r);
	else if (u = _e(e, ae), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new V(1, 0, 0, 1, p.left + P(), p.top + N());
	} else u.matrix = H(r, !1, !1, !0);
	return u = Le(u, e, !0), e.x = Y(u.x, .01), e.y = Y(u.y, .01), r;
}, Oe = function(e, t) {
	return t !== !0 && (t = W(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, ke = function(e) {
	return Se(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && De(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, Ae = function(e, t) {
	return t && e.idLookup[je(t).id] || e.elementStates[0];
}, je = function(e, t, n, r) {
	return e instanceof Ye ? e : e instanceof $ ? Ae(e, r) : new Ye(typeof e == "string" ? de(e) || console.warn(e + " not found") : e, t, n);
}, Me = function(e, t) {
	for (var n = G.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, Ne = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, Pe = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + U++), t;
}, Fe = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, Ie = function(e, t, n) {
	return e && t.length && n.add(e(Fe(t), n, new $(t, 0, !0)), 0);
}, Le = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && X && X(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, C = !S && e.simple && t.simple && !i, w, T, E, D, O, k, A;
	return C || !c ? (p = m = 1, h = w = 0) : (O = be(c), k = O.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = fe(Math.atan2(k.b, k.a) * re), w = fe(Math.atan2(k.c, k.d) * re + h) % 360, p = Math.sqrt(k.a ** 2 + k.b ** 2), m = Math.sqrt(k.c ** 2 + k.d ** 2) * Math.cos(w * ie), i && (i = W(i)[0], D = G.getProperty(i), A = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: D("scaleX"),
		scaleY: D("scaleY"),
		width: A ? A.width : Math.ceil(parseFloat(D("width", "px"))),
		height: A ? A.height : parseFloat(D("height", "px"))
	}), s.rotation = h + "deg", s.skewX = w + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = Y(d * p / v.scaleX, 0), f = Y(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && Ne(o, t.props), C || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), k = H(i || o, !1, !1, !0), T = O.apply({
		x: k.e,
		y: k.f
	}), E = O.apply({
		x: b,
		y: x
	}), l += E.x - T.x, u += E.y - T.y) : (O.e = O.f = 0, E = O.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += E.x, u += E.y), l = Y(l, .02), u = Y(u, .02), a && !(a instanceof Ye) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = w, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, Re = function(e, t) {
	return e instanceof $ ? e : new $(e, t);
}, ze = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, Be = [], Ve = "width,height,overflowX,overflowY".split(","), He, Ue = function(e) {
	if (e !== He) {
		var t = J.style, n = J.clientWidth === window.outerWidth, r = J.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) Be[i] = t[Ve[i]];
			n && (t.width = J.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = J.clientHeight + "px", t.overflowX = "hidden"), He = e;
		} else if (He) {
			for (; i--;) Be[i] ? t[Ve[i]] = Be[i] : t.removeProperty(ge(Ve[i]));
			He = e;
		}
	}
}, We = function(e, t) {
	for (var n = 0; n < e.length; n += 3) G.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, Ge = function(e, t, n, r) {
	e instanceof $ && t instanceof $ || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, C = i.prune, w = ("props" in n ? n : e).props, T = _e(n, me), E = G.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), D = T, O = [], k = [], A = [], j = [], M = S === !0 ? 1 : S || 0, ee = typeof S == "function" ? S : function() {
		return M;
	}, te = e.interrupted || t.interrupted, N = E[r === 1 ? "from" : "to"], P, F, ne, I, L, R, z, B, V, U, W, q, J, Y;
	for (F in t.idLookup) W = t.alt[F] ? ze(t, e, F) : t.idLookup[F], L = W.element, U = e.idLookup[F], e.alt[F] && L === U.element && (e.alt[F].isVisible || !W.isVisible) && (U = e.alt[F]), U ? (R = {
		t: L,
		b: U,
		a: W,
		sd: U.element === L ? 0 : W.isVisible ? 1 : -1
	}, A.push(R), R.sd && (R.sd < 0 && (R.b = W, R.a = U), te && Ce(R.b, w ? se[w] : ue), b && A.push(R.swap = {
		t: U.element,
		b: R.b,
		a: R.a,
		sd: -R.sd,
		swap: R
	})), L._flip = U.element._flip = K ? K.timeline : E) : W.isVisible && (A.push({
		t: L,
		b: _e(W, { isVisible: 1 }),
		a: W,
		sd: 0,
		entering: 1
	}), L._flip = K ? K.timeline : E);
	if (w && (ve[w] || ye(w)).forEach(function(e) {
		return T[e] = function(t) {
			return A[t].a.props[e];
		};
	}), A.finalStates = V = [], q = function() {
		Se(A), Ue(!0);
		var t = [];
		for (I = 0; I < A.length; I++) R = A[I], J = R.a, Y = R.b, C && !J.isDifferent(Y) && !R.entering ? A.splice(I--, 1) : (L = R.t, _ && !(R.sd < 0) && I && (J = R.a = J.clone({ matrix: H(L, !1, !1, !0) })), Y.isVisible && J.isVisible ? (R.sd < 0 ? (_ && We(t, 1), z = new Ye(L, w, e.simple), Le(z, J, y, 0, 0, z), z.matrix = H(L, !1, !1, !0), z.bounds = L.getBoundingClientRect(), z.css = R.b.css, R.a = J = z, b && (L.style.opacity = te ? Y.opacity : J.opacity), x && j.push(L), _ && (We(t, 2), t.push(L, L.getAttribute("style")))) : R.sd > 0 && b && (L.style.opacity = te ? J.opacity - Y.opacity : "0"), Le(J, Y, y, w), _ && R.sd < 0 && t.push(L.getAttribute("style"))) : Y.isVisible !== J.isVisible && (Y.isVisible ? J.isVisible || (Y.css = J.css, k.push(Y), A.splice(I--, 1), c && _ && Le(J, Y, y, w)) : (J.isVisible && O.push(J), A.splice(I--, 1))), y || (L.style.maxWidth = Math.max(J.width, Y.width) + "px", L.style.maxHeight = Math.max(J.height, Y.height) + "px", L.style.minWidth = Math.min(J.width, Y.width) + "px", L.style.minHeight = Math.min(J.height, Y.height) + "px"), _ && g && L.classList.add(g)), V.push(J);
		var r;
		if (g && (r = V.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), Ue(!1), y ? (T.scaleX = function(e) {
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
			return A[e].a.rotation + (S ? ee(e, B[e], B) * 360 : 0);
		}, T.skewX = function(e) {
			return A[e].a.skewX;
		}, B = A.map(function(e) {
			return e.t;
		}), (v || v === 0) && (T.modifiers = { zIndex: function() {
			return v;
		} }, T.zIndex = v, T.immediateRender = n.immediateRender !== !1), b && (T.opacity = function(e) {
			return A[e].sd < 0 ? 0 : A[e].sd > 0 ? A[e].a.opacity : "+=0";
		}), j.length) {
			x = G.utils.distribute(x);
			var i = B.slice(j.length);
			T.stagger = function(e, t) {
				return x(~j.indexOf(t) ? B.indexOf(A[e].swap.t) : e, t, i);
			};
		}
		if (le.forEach(function(e) {
			return n[e] && E.eventCallback(e, n[e], n[e + "Params"]);
		}), u && B.length) for (F in D = _e(T, me), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) P = _e(u[F], he), P[F] = T[F], !("duration" in P) && "duration" in T && (P.duration = T.duration), P.stagger = T.stagger, N.call(E, B, P, 0), delete D[F];
		(B.length || k.length || O.length) && (g && E.add(function() {
			return pe(r, g, E._zTime < 0 ? "remove" : "add");
		}, 0) && !f && pe(r, g, "add"), B.length && N.call(E, B, D, 0)), Ie(o, O, E), Ie(s, k, E);
		var l = K && K.timeline;
		l && (l.add(E, 0), K._final.push(function() {
			return Te(A, !a);
		})), ne = E.duration(), E.call(function() {
			var e = E.time() >= ne;
			e && !l && Te(A, !a), g && pe(r, g, e ? "remove" : "add");
		});
	}, l && (c = A.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), K) {
		var X;
		c && (X = K._abs).push.apply(X, Oe(A, c)), K._run.push(q);
	} else c && ke(Oe(A, c)), q();
	var Z = K ? K.timeline : E;
	return Z.revert = function() {
		return qe(Z, 1, 1);
	}, Z;
}, Ke = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, qe = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (Ke(e), t < 2 && e.progress(1), e.kill()), !0;
}, Je = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, $ = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = Fe(e), this.elementStates = e, Je(this);
		else {
			this.targets = W(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			K && !r && K._kill.push(this), this.update(r || !!K);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new Ye(e, t.props, t.simple);
		}), Je(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, Je(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = Se(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = H(o.element, !1, !1, !0)), s = i[o.id], s && Le(o, s, t, !0, 0, o), o.matrix = H(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || ae;
		return (t in n ? n : n.props || ae)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Je(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? ze(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = se[this.props] || ue, t = this.elementStates.length; t--;) Ce(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = qe(i, +!e);
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
		return this.elementStates[this.targets.indexOf(de(e))];
	}, t.makeAbsolute = function() {
		return Se(this.elementStates.slice(0), !0, !0).map(De);
	}, e;
}(), Ye = /*#__PURE__*/ function() {
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
		var n = this, r = n.element, i = G.getProperty(r), a = G.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new V(1, 0, 0, 1, o.left + P(), o.top + N()) : H(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = Pe(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : Y(i("width", "px"), .04), n.height = s ? s.height : Y(i("height", "px"), .04), e && Me(n, ve[e] || ye(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && R(r).inverse(), n.simple = t || fe(c.a) === 1 && !fe(c.b) && !fe(c.c) && fe(c.d) === 1, n.uncache = 0;
	}, e;
}(), Xe = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), Ze = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new $(), this.timeline = G.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new Xe(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = K, r = q;
		return K = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, q = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), q = r, K = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = K, n = this.timeline, r = this.actions.length, i, a;
		for (K = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new $(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare(Qe.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), ke(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), Z(e, "onComplete"));
		}), K = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return Z(this, "onStart"), n.restart(), this;
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
		return this !== K && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete Q[this.id];
	}, e;
}(), Qe = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = Re(t, n);
		return q && q.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), Ge(e, Re(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return Ge(e, Re(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return Ge(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? _e(n, he) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && de(n.fitChild), p = je(t, c, d, e), m = je(e, 0, d, p), h = c ? se[c] : ue, g = G.context();
		return c && Ne(r, p.props), Ce(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			we(m), u && u.apply(this, arguments);
		}), a && De(m, p), r = Le(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return we(m);
			};
		}), s ? r : r.duration ? G.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof $ ? e : new $(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), Q[e] || (Q[e] = new Ze(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof $ ? e.targets : W(e)).forEach(function(e) {
			return e && qe(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (de(e) || ae)._flip;
	}, e.getElementState = function(e, t) {
		return new Ye(de(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = H(t, !0, !0).multiply(H(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (J = typeof document < "u" && document.body, J) {
			G = e, j(J), W = G.utils.toArray, X = G.core.getStyleSaver;
			var t = G.utils.snap(.1);
			Y = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
Qe.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin(Qe);
//#endregion
//#region src/work-manifest.json
var $e = /*#__PURE__*/ JSON.parse("[{\"id\":\"gerngrosssaule\",\"href\":\"/werke/gerngrosssaule\",\"title\":\"„Gerngrosssäule“\",\"year\":\"2007\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Franz West, Heidulf Gerngross<br>„Gerngrosssäule”, 2007<br>Betonguss<br>Säule: 546 cm, Ei: 50 cm</p><p>‍</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6abb9fc0598769eaa5359735_018283.jpg\",\"imageAlt\":\"„Gerngrosssäule“\",\"caption\":\"\"},{\"id\":\"rueckkehr-zu-freud\",\"href\":\"/werke/rueckkehr-zu-freud\",\"title\":\"„Rückkehr zu Freud“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>20 x 22,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34bd247654adf43324d_77336Scan.avif\",\"imageAlt\":\"„Rückkehr zu Freud“\",\"caption\":\"Heinz Neumann\"},{\"id\":\"passstueck\",\"href\":\"/werke/passstueck\",\"title\":\"Passstück\",\"year\":\"um 1975\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Eisendraht, Gaze, Gips, Farbe<br>35 x 53 x 22 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3495031a1007e10a89e_046965.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Stefan Altenburger, Courtesy Galerie Presenhuber Zürich\"},{\"id\":\"imported-item-56\",\"href\":\"/werke/imported-item-56\",\"title\":\"„Krauses Gekröse“\",\"year\":\"2014, nach einem Entwurf von 2011, Herstellung posthum\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Kunstharzlack<br>1100 x 550 x 650 cm</p>\",\"html\":\"\",\"view\":\"Arles, 2022\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3483cf0ae192b4f8dcb_041662.avif\",\"imageAlt\":\"„Krauses Gekröse“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-55\",\"href\":\"/werke/imported-item-55\",\"title\":\"Chaiselongue\",\"year\":\"1994\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stoff, Stahl, Schaumgummi<br>90,5 x 152,5 x 100 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3461ac7a20b74b20180_040442.avif\",\"imageAlt\":\"Chaiselongue\",\"caption\":\"Courtesy  Phillips, London\"},{\"id\":\"imported-item-54\",\"href\":\"/werke/imported-item-54\",\"title\":\"„Kasseler Rippchen”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>18teilige Installation bestehend aus Arbeiten verschiedener Künstler:innen<br>zehnteilige Bilderwand, drei Objekte, zwei Tische, drei Stühle<br>Metall, Holz, Gips, Plastik, Farbe, Leinen<br>Maße variabel<br>Bilder:<br>Werner Büttner: 80 x 60 cm<br>Martin Kippenberger: 60 x 50,3 x 4,3 (tief) cm<br>Albert Oehlen: 67,3 x 56 x 2,8 (tief) cm<br>Heimo Zobernig: 100 x 150 cm<br>Herbert Brandl: 79 x 110 cm<br>Janc Szenizcei: 31,5 x 25,5 cm<br>Kiki Smith: 58,5 x 81 cm<br>Mary Heilman: 38 x 33 cm<br>Vittore Pisano: 43,3 x 53,3 cm<br>Rudolf Polanszky: 74,5 x 61,5 x 8,5 cm<br>Objekte:<br>Wolfgang Winter: 46 x 96 x 21 cm<br>Andreas Rohrbach: 214 x 17 x 10 cm<br>Jason Rhoades: 110 x 116 x 65,5 cm<br>Michael Kienzer: 22 x 22 x 22 cm<br>unbekannt: 31,5 x 16 x 10 cm (kl. Flasche, ummantelt, auf Tisch)<br>Franz West:<br>Tisch 1: 74 x 65 x 50 cm<br>Tisch 2: 122 x 44 x 44 cm<br>3 Stühle: 84 x 43 x 44 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 2019\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db34417820876cd24234e_038663.avif\",\"imageAlt\":\"„Kasseler Rippchen”\",\"caption\":\"Stefan Altenburger\"},{\"id\":\"imported-item-53\",\"href\":\"/werke/imported-item-53\",\"title\":\"o.T. (für Ettore Spalletti)\",\"year\":\"1991\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Gaze, Gips<br>200 x 40 x 40 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab395b1238ede643b1022c7_037705.avif\",\"imageAlt\":\"o.T. (für Ettore Spalletti)\",\"caption\":\"\"},{\"id\":\"imported-item-52\",\"href\":\"/werke/imported-item-52\",\"title\":\"Labstück\",\"year\":\"1986\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metaxaflasche, Polyester, Holz<br>113 x 37 x 12 cm, Sockel: 124,5 x 139,5 x 35 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db341854443b59ca2f4e0_036053.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"Courtesy Galerie Capitain\"},{\"id\":\"liege-vermeer\",\"href\":\"/werke/liege-vermeer\",\"title\":\"Liege (Vermeer)\",\"year\":\"1989\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl<br>88 x 136 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif\",\"imageAlt\":\"Liege (Vermeer)\",\"caption\":\"Courtesy Nachlass Günther Förg\"},{\"id\":\"imported-item-50\",\"href\":\"/werke/imported-item-50\",\"title\":\"„Extroversion“\",\"year\":\"2000-2011\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 43 Kunstwerken von Franz West und weiteren Künstler:innen<br>diverse Materialien, Pavillon<br>(inkl. hängende und stehende Objekten): ca. 345 (H) x 800 x 900 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht 21er Haus, 2016\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33c700207163b0c3e06_034217.avif\",\"imageAlt\":\"„Extroversion“\",\"caption\":\"Hannes Stoll\"},{\"id\":\"imported-item-49\",\"href\":\"/werke/imported-item-49\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33af8acb06730de7a04_033713.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-48\",\"href\":\"/werke/imported-item-48\",\"title\":\"\\\"Den Anrainern zuliebe”\",\"year\":\"2001\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>5 Sitzwuste<br>Aluminium lackiert<br>zw. 684 + 716 cm (L), je 60 cm (Ø)</p>\",\"html\":\"\",\"view\":\"Westersingel, Rotterdam, 2012\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db338646a3297b82c4cdb_033170.avif\",\"imageAlt\":\"\\\"Den Anrainern zuliebe”\",\"caption\":\"© Jannes Linders & Sculpture International Rotterdam / CBK Rotterdam\"},{\"id\":\"imported-item-47\",\"href\":\"/werke/imported-item-47\",\"title\":\"o.T.\",\"year\":\"um 1982/83\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage auf Geschenkpapier<br>34,5 x 50 cm, Rahmen: 52 x 67 x 2,6 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3362ec203e57f857a6d_030145.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Galerie Meyer Kainer\"},{\"id\":\"imported-item-46\",\"href\":\"/werke/imported-item-46\",\"title\":\"o.T.\",\"year\":\"1972\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Papier<br>13,7 x 21 cm<br>Rahmen: 25,1 x 31,1 x 3,2 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33472a27f1a8f331dc6_029000.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-45\",\"href\":\"/werke/imported-item-45\",\"title\":\"o.T.\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gips, Wellpappe<br>185 x 57 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3327795b95db7805841_028675.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-44\",\"href\":\"/werke/imported-item-44\",\"title\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"year\":\"2007\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>beidseitig: Collage, Acryl auf Digital Print (recto); Acryl, Lack, Digital Prints, Fotos collagiert (verso)<br>65,5 (H) x 51 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3309cccd58e2b915b9b_027921.avif\",\"imageAlt\":\"Plakatentwurf (Sequence 1 - Painting and Sculpture in the Francois Pinault Collection)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-43\",\"href\":\"/werke/imported-item-43\",\"title\":\"Plakatentwurf (Basel)\",\"year\":\"1998\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Digitalprint, Kugelschreiber, Acryl auf Schaumkarton<br>128 x 90,5 cm, Rahmen: 144 x 106,7 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32ed247654adf43219b_027612.avif\",\"imageAlt\":\"Plakatentwurf (Basel)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-42\",\"href\":\"/werke/imported-item-42\",\"title\":\"Plakatentwurf (Franz West at David Zwirner)\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Farbkopie, collagiert auf Karton<br>100 x 70 cm, Rahmen: 103,8 x 74,1 x 4 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32c02ec0803829c249b_027565.avif\",\"imageAlt\":\"Plakatentwurf (Franz West at David Zwirner)\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-41\",\"href\":\"/werke/imported-item-41\",\"title\":\"„Alibert\\\"\",\"year\":\"1996\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Auflage: 200<br>Siebdruck 76 x 56 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32a098c60d2753eb721_027557.avif\",\"imageAlt\":\"„Alibert\\\"\",\"caption\":\"Birgit und Peter Kainz\"},{\"id\":\"imported-item-40\",\"href\":\"/werke/imported-item-40\",\"title\":\"Passstück\",\"year\":\"o.J. (Ende 1970er Jahre)\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Papiermache, Dispersionsfarbe <br>34,5 x 54 x 47 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3281ac7a20b74b1f3a7_027145.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Courtesy Kunst Auktionen im Kinsky\"},{\"id\":\"imported-item-39\",\"href\":\"/werke/imported-item-39\",\"title\":\"o.T.\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>230 x 305 x 280 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32590726bbfe5b9dadb_027137.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-38\",\"href\":\"/werke/imported-item-38\",\"title\":\"„Lotus”\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz<br>166 x 210 x 290 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3233a4f6d545406cd3e_027079.avif\",\"imageAlt\":\"„Lotus”\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-37\",\"href\":\"/werke/imported-item-37\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db32172a27f1a8f33137f_026905.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-36\",\"href\":\"/werke/imported-item-36\",\"title\":\"„Eggs“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>vierteilig<br>Epoxydharz, Kunstharzlack<br>je ca. 105 (H) x 140 x 110 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31f2ec203e57f8567b0_026895.avif\",\"imageAlt\":\"„Eggs“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"imported-item-35\",\"href\":\"/werke/imported-item-35\",\"title\":\"„Maya’s Dream“\",\"year\":\"2006\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Epoxydharz, Kunstharzlack, Beton<br>250 x 260 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db31b854443b59ca2d885_026891.avif\",\"imageAlt\":\"„Maya’s Dream“\",\"caption\":\"Courtesy Gagosian Gallery\"},{\"id\":\"ot\",\"href\":\"/werke/ot\",\"title\":\"o.T.\",\"year\":\"2012 (Fertigstellung posthum)\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>560 x 430 x 340 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3187795b95db7804762_022898.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-33\",\"href\":\"/werke/imported-item-33\",\"title\":\"„Parrhesia“\",\"year\":\"2012\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>7 Skulpturen auf Sockel<br>Papiermaché, Styropor, Karton, Acryllack, Acrylfarbe, Stahl, Sockel: Holz<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db316a64b78d7e3d07edc_022888.avif\",\"imageAlt\":\"„Parrhesia“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-32\",\"href\":\"/werke/imported-item-32\",\"title\":\"„Variable”\",\"year\":\"1997\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Zehnteilige Bilderwand: zwei Wandobjekte, drei Schwarz-Weiß-Fotografien, zwei Siebdrucke, zwei Collagen, ein Plakatentwurf<br>150 x 320 x 10 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst Stiftung Ludwig, Wien, 2013\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db311d247654adf430bea_022846.avif\",\"imageAlt\":\"„Variable”\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-31\",\"href\":\"/werke/imported-item-31\",\"title\":\"Aus der Installation „12 Diwane”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Schaumstoff, Jute, Teppich/Wolle (bzw. Baumwolle für die MAK Exemplare)<br>je 200 x 63 x 70 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30f78d236fd9800ed1b_020685.avif\",\"imageAlt\":\"Aus der Installation „12 Diwane”\",\"caption\":\"Courtesy Dorotheum\"},{\"id\":\"imported-item-30\",\"href\":\"/werke/imported-item-30\",\"title\":\"o.T.\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Styropor, Acryllack, Stahl<br>115 x 63 x 50 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30d3a4f6d545406c40a_020513.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Michaela Obermair\"},{\"id\":\"imported-item-29\",\"href\":\"/werke/imported-item-29\",\"title\":\"„Epiphanie an Stühlen“\",\"year\":\"2011\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Hängende Skulptur, zwei StühleSkulptur: Stahl, PU-Schaum, Gaze, Dispersion<br>Ø 165 cm, 6 Arme je ca. 115 x 25 x 25 cm<br>Stühle: Stahl, Holz, Bambus, Leinen<br>je ca. 85 x 45 x 55 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30668b224ea3aa4e9a5_020234.avif\",\"imageAlt\":\"„Epiphanie an Stühlen“\",\"caption\":\"Michaela Obermair\"},{\"id\":\"echolalie\",\"href\":\"/werke/echolalie\",\"title\":\"„Echolalie“\",\"year\":\"2010\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Installation bestehend aus 7 Skulpturen, 1 Clubfauteil, 2 Tröge<br>diverse Materialien und Dimensionen</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30517820876cd23f469_018084.avif\",\"imageAlt\":\"„Echolalie“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-27\",\"href\":\"/werke/imported-item-27\",\"title\":\"„Meeting Point 2“ (Modell)\",\"year\":\"2000/2009\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium, Gips, Acrylglas, Holz, Karton<br>32 x 41 x 41 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db30317820876cd23f31e_016841.avif\",\"imageAlt\":\"„Meeting Point 2“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-26\",\"href\":\"/werke/imported-item-26\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe, Farbkübel<br>126 x 113,5 x 74 cm<br>Sockel: 46 (H) x 102 x 77 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db3002ec203e57f853e2b_016719.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-25\",\"href\":\"/werke/imported-item-25\",\"title\":\"o.T.\",\"year\":\"1977\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitschriftenseite<br>ca. 20 x 30 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fe336be88b6682edde_014914.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Generali Foundation\"},{\"id\":\"imported-item-24\",\"href\":\"/werke/imported-item-24\",\"title\":\"„Warum ist etwas und nicht nichts”\",\"year\":\"1997\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahlblech lackiert, Laminat<br>220 x 390 x 180 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fcd365e1695ed37942_014798.avif\",\"imageAlt\":\"„Warum ist etwas und nicht nichts”\",\"caption\":\"© Margherita Spiluttini\"},{\"id\":\"imported-item-23\",\"href\":\"/werke/imported-item-23\",\"title\":\"Passstück (bemalt von Eugenia Rochas)\",\"year\":\"1982\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Metall, Holz, Farbe, Papier<br>56 x 53 x 26 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2fa53900ab90522461e_014256.avif\",\"imageAlt\":\"Passstück (bemalt von Eugenia Rochas)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-22\",\"href\":\"/werke/imported-item-22\",\"title\":\"„NYCNAC“\",\"year\":\"2008\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Paravent mit Tapete, 2 bis 8 Passstücke und Video<br>Digitalprint, Acrylfarbe, Holz, Video<br>Kabine: 4 Flügel je 240 x 160 cm<br>Passstücke: je 100 x 20 x 25 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f87a581584f411f55b_014139.avif\",\"imageAlt\":\"„NYCNAC“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-21\",\"href\":\"/werke/imported-item-21\",\"title\":\"„Pommes d’Adam“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Modell mit vier Skulpturen in Vitrine<br>Papiermaché, Holz, Plexiglas<br>87 x 126 x 64 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f6c7367279a1d133ff_014131.avif\",\"imageAlt\":\"„Pommes d’Adam“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-20\",\"href\":\"/werke/imported-item-20\",\"title\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"year\":\"2008\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Collage, Digitalprint, Acryl auf Schaumkarton<br>113,5 x 132,6 cm<br>Rahmen: 124 x 143,5 x 5,5 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f468b224ea3aa4dd36_014130.avif\",\"imageAlt\":\"Plakatentwurf (Passstücke, Gagosian Gallery N.Y.)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-19\",\"href\":\"/werke/imported-item-19\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyesterkern, Dispersion, Besenstiel, Gips, Gaze<br>92,5 x 44,5 x 42,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2f0336be88b6682e114_013916.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-18\",\"href\":\"/werke/imported-item-18\",\"title\":\"Passstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Polyester, Glasfiber, Dispersion<br>33,5 x 45,5 cm (Ø)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ed098c60d2753e7a93_013912.avif\",\"imageAlt\":\"Passstück\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-17\",\"href\":\"/werke/imported-item-17\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2eb47c63bd9d7e71fc3_013875.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-16\",\"href\":\"/werke/imported-item-16\",\"title\":\"„Eine Studie“ (Modell)\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Acrylfarbe, Holz, Plexiglas<br>33 x 53 x 53 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e838c1bfbb8d14c3ed_013871.avif\",\"imageAlt\":\"„Eine Studie“ (Modell)\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-15\",\"href\":\"/werke/imported-item-15\",\"title\":\"“We’ll not carry coals”\",\"year\":\"2000/2007\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>sechsteilige Installation mit Arbeiten verschiedener Künstler<br>diverse Materialien<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Kunstraum Innsbruck, 2007\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e63cf0ae192b4f4869_013821.avif\",\"imageAlt\":\"“We’ll not carry coals”\",\"caption\":\"Clemens Schillinger\"},{\"id\":\"imported-item-14\",\"href\":\"/werke/imported-item-14\",\"title\":\"o.T.\",\"year\":\"2007\",\"categories\":[\"Skulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Papiermaché, Metall, Holz, Farbe<br>154 x 103 x 63 cm<br>Sockel: 100 x 50 x 60 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e4378a715131d35178_013701.avif\",\"imageAlt\":\"o.T.\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-13\",\"href\":\"/werke/imported-item-13\",\"title\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"year\":\"1982\",\"categories\":[\"Papierarbeiten\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Gouache auf Zeitungsseite<br>26,6 x 21,3 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2e19cccd58e2b911b35_013594.avif\",\"imageAlt\":\"„H. Moser’s Messer (Symbolik (Dir, Reinhard))“\",\"caption\":\"Lukas Schaller\"},{\"id\":\"imported-item-12\",\"href\":\"/werke/imported-item-12\",\"title\":\"“Schöner Wohnen”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>zehnteilige Bilderwand mit Arbeiten verschiedener KünstlerInnen, zwei Clubfauteuils, Trog<br>Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Hauser &amp; Wirth, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2df9cccd58e2b911716_012930.avif\",\"imageAlt\":\"“Schöner Wohnen”\",\"caption\":\"A. Burger, Zürich\"},{\"id\":\"imported-item-11\",\"href\":\"/werke/imported-item-11\",\"title\":\"„Onkel-Stuhl“\",\"year\":\"2001-2009\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Textilbänder<br>ca. 87 (H) x 51 x 45 cm (Standardmaße)</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2ddc7367279a1d11630_006575.avif\",\"imageAlt\":\"„Onkel-Stuhl“\",\"caption\":\"\"},{\"id\":\"imported-item-10\",\"href\":\"/werke/imported-item-10\",\"title\":\"„Sphairos (Die Kopie ihres Titels)”\",\"year\":\"1998\",\"categories\":[\"Außenskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminium lackiert<br>150 x 150 x 150 cm, Sockel: 49 x 240 x 290 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Skulptur im Schlosspark Ambras, Innsbruck, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6ab39624b872f016fb1b3736_006149.avif\",\"imageAlt\":\"„Sphairos (Die Kopie ihres Titels)”\",\"caption\":\"Heinz Stanger\"},{\"id\":\"imported-item-9\",\"href\":\"/werke/imported-item-9\",\"title\":\"“Viennoiserie“\",\"year\":\"1998\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>10teilige Bilderwand mit Arbeiten verschiedener Künstler, Diwan, 2 Editionen, Sockel, Tisch<br>Einzelne Arbeiten:<br>Richard Jackson: 66 x 101 cm<br>Paul McCarthy: 61 x 48 cm<br>Raymond Pettibon: 44 x 28 cm<br>Roland Kollnitz: 138 x 38 x 5 cm<br>Otto Muehl: 55 x 65 cm<br>Seamus Farel a.o.: 85 x 103 cm<br>Joseph Kosuth: 125,5 x 107 cm<br>Franz West (braun): 85 x 103 cm<br>Franz West (Kleiderbügel): 44 x 24 x 5 cm<br>Franz West (Deckel): 37 x 28 x 3,5 cm<br>Franz West (linke Skulptur): 68 x 68 x 104 (H) cm<br>Sockel: 59,5 x 37 x 98 (H) cm<br>Franz West (rechte Skulptur): 66 x 78 x 93,5 (H) cm<br>Tisch von Prinzgau/Podgorschek, von Franz West überarbeitet: 74 x 97 ø cm<br>Franz West (Diwan): 230 x 80 x 90 (H) cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Atelier Stubenring, 1998\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d9797323dc5fc8c906_003265.avif\",\"imageAlt\":\"“Viennoiserie“\",\"caption\":\"Jens Preusse, Wien\"},{\"id\":\"imported-item-8\",\"href\":\"/werke/imported-item-8\",\"title\":\"“Spiegel in Kabine mit Passstücken”\",\"year\":\"1996\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>4 Passstücke, Bodenplatte, Kabine, Spiegel von Michelangelo Pistoletto, Video mit Handlungsanregungen, Monitor<br>Kabine: Spiegel, Holz, Zeitung, Dispersion; Passstücke: Epoxydharz, Metall; Monitor, Video<br>Kabine: 220 x 260 x 360 cm; Spiegel: 220 x 140 cm; Passstücke: 112 x 16 x 15 cm, 112 x 30 x 22 cm, 108 x 31 x 22,5 cm, 114 x 29 x 28 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Les Abbatoirs, Toulouse, 2000\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d71ac7a20b74b1b26e_002339.avif\",\"imageAlt\":\"“Spiegel in Kabine mit Passstücken”\",\"caption\":\"© Marc Boyer\"},{\"id\":\"imported-item-7\",\"href\":\"/werke/imported-item-7\",\"title\":\"„Doku-Stuhl”\",\"year\":\"1997-2003\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Offene Edition, alle individuell in Farbe und Gestaltung<br>Stahl, Holz, Schaumstoff, Leinen, Baumwolle<br>je ca. 84 x 45 x 54 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht documenta X, Kassel, 1997\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d4847454fd4ce18170_002270.avif\",\"imageAlt\":\"„Doku-Stuhl”\",\"caption\":\"Werner Maschmann\"},{\"id\":\"imported-item-6\",\"href\":\"/werke/imported-item-6\",\"title\":\"Labstück\",\"year\":\"o.J.\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Holz, Glas, Metall, Pappe<br>22 x 39 x 28 cm</p>\",\"html\":\"\",\"view\":\"\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d2132760b1d96c29f7_001704.avif\",\"imageAlt\":\"Labstück\",\"caption\":\"\"},{\"id\":\"imported-item-5\",\"href\":\"/werke/imported-item-5\",\"title\":\"„Auto Sex”\",\"year\":\"1999\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Heimo Zobernig, Franz West<br>halbtransparente Spiegelfolie, Gummi, Papierklemmen<br>zwei Stühle: Metall, Holz, Schaumstoff, Baumwolle<br>je 84 x 45 x 54 cm<br>Folie: 250 x 150 cm<br>Gummi: 141 x 320 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Hauser &amp; Wirth, Zürich, 1999\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2d005f5bf5bb2cf34b0_001325.avif\",\"imageAlt\":\"„Auto Sex”\",\"caption\":\"\"},{\"id\":\"imported-item-4\",\"href\":\"/werke/imported-item-4\",\"title\":\"„PA 1”\",\"year\":\"1990\",\"categories\":[\"Installationen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Bodenplatte, Monitor, Metall, Stühle<br>Tisch: 43 x 60 x 110 cm<br>sechs Stühle: Maße variabel</p>\",\"html\":\"\",\"view\":\"Installationsansicht Museum Moderner Kunst, 1996\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cd53900ab905222404_000715.avif\",\"imageAlt\":\"„PA 1”\",\"caption\":\"Bettina Letz, Wien\"},{\"id\":\"imported-item-3\",\"href\":\"/werke/imported-item-3\",\"title\":\"„Schöne Aussicht”\",\"year\":\"1988\",\"categories\":[\"Möbelskulpturen\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Stahl, Zeitung<br>113 x 84 x 46 cm</p>\",\"html\":\"\",\"view\":\"Installationsansicht Galerie Zwirner\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2cb50b229ca2901241a_000693.avif\",\"imageAlt\":\"„Schöne Aussicht”\",\"caption\":\"\"},{\"id\":\"imported-item-2\",\"href\":\"/werke/imported-item-2\",\"title\":\"„BI 5” (Passstück)\",\"year\":\"1990\",\"categories\":[\"Passstücke\"],\"thumbnail\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"thumbnailAlt\":\"\",\"properties\":\"<p>Aluminiumguß bemalt<br>50 x 27 x 77 cm<br>Sockel: 77 x 74 x 45 cm</p>\",\"html\":\"\",\"view\":\"Atelier Weißgerberlände, 1990\",\"image\":\"https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db2c89c12ed78b19bb1dc_000303.avif\",\"imageAlt\":\"„BI 5” (Passstück)\",\"caption\":\"\"}]");
//#endregion
//#region src/work-overlay.ts
r.registerPlugin(Qe);
var et = $e, tt = new Map(et.map((e) => [e.id, e])), nt = et.map((e, t) => ({
	...e,
	index: t
})), rt = .82;
function it() {
	let e = new URL(window.location.href);
	return e.searchParams.delete("work"), `${e.pathname}${e.search}${e.hash}`;
}
function at(e) {
	try {
		return new URL(e, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {
		return "";
	}
}
function ot(e, t) {
	let n = document.createElement("div");
	return n.className = "work-overlay__flyer", n.setAttribute("aria-hidden", "true"), Object.assign(n.style, {
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`
	}), n.append(e), document.body.append(n), n;
}
function st(e) {
	let t = e.cloneNode(!1);
	return t.removeAttribute("id"), t.setAttribute("aria-hidden", "true"), t.style.visibility = "hidden", e.naturalWidth && e.naturalHeight && (t.width = e.naturalWidth, t.height = e.naturalHeight), t;
}
function ct() {
	let e = document.querySelector(".top_bar_section"), t = (e == null ? void 0 : e.cloneNode(!0)) || document.createElement("nav");
	t.classList.add("top_bar_section", "u-section", "is-relative", "work-overlay__header"), t.removeAttribute("data-wf--top-bar--variant"), t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), t.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")), t.querySelectorAll("[data-logo-variant]").forEach((e) => e.remove()), t.querySelectorAll(".top_bar_center .nav_logo_link svg, .top_bar_center .nav_logo_image_link img.nav_logo").forEach((e) => e.style.removeProperty("visibility"));
	let n = t.querySelector(".top_bar_left") || t, r = document.createElement("a");
	return r.className = "text-link is-back w-inline-block work-overlay__back", r.href = it(), r.setAttribute("data-transition", "false"), r.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 15\" class=\"arrow is-rotate\" aria-hidden=\"true\"><path d=\"M3.60046 5.7002H0V9.3002H3.60046V5.7002Z\" fill=\"currentColor\" class=\"arrow-dot\"/><path d=\"M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z\" fill=\"currentColor\" class=\"arrow-arrow\"/></svg><div class=\"text-block\">Zurück</div>", n.replaceChildren(r), {
		header: t,
		backLink: r
	};
}
function lt(l, u) {
	let d = document.title, f = document.createElement("div"), p = document.createElement("div"), m = document.createElement("div"), h = document.createElement("div"), g = document.createElement("div"), { header: _, backLink: v } = ct(), y = null, b = document.createComment("site menu position"), x = /* @__PURE__ */ new Map(), S = "closed", C = null, w = null, T = null, E = null, D = "", O = null, k = window.scrollY, A = 0, j = null, M = null, ee = "", te = "", N = history.scrollRestoration, P = null, F = null;
	f.className = "work-overlay", f.hidden = !0, f.setAttribute("role", "dialog"), f.setAttribute("aria-modal", "true"), f.setAttribute("aria-label", "Werkdetails"), f.setAttribute("data-work-overlay", ""), f.setAttribute("data-lenis-prevent", ""), f.tabIndex = -1, p.className = "work-overlay__backdrop", m.className = "work-overlay__surface", h.className = "work-overlay__scroll-content", g.className = "work-overlay__content", h.append(_, g), m.append(h), f.append(p, m), f.setAttribute("data-work-detail-overview-href", it()), document.body.append(f);
	let ne = (e) => {
		let t = Array.from(u.querySelectorAll("[data-works-rendered-item]")).find((t) => t.getAttribute("data-works-rendered-item") === e);
		return (t == null ? void 0 : t.querySelector(".cms-works__image-wrap")) || null;
	}, I = () => {
		var e;
		y || (y = document.querySelector("[data-site-menu]")), !(!y || f.contains(y)) && (b.parentNode || (e = y.parentNode) == null || e.insertBefore(b, y), f.append(y));
	}, L = () => [
		v,
		...Array.from(_.querySelectorAll(".top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link")),
		...Array.from(g.querySelectorAll(".cms-work-detail__content > *, .cms-work-detail__caption, .cms-work-detail__related"))
	], R = () => {
		j == null || j.kill(), j = null, M == null || M.kill(), M = null, r.killTweensOf([
			p,
			u,
			m,
			...L()
		]);
	}, z = () => {
		for (let e of Array.from(document.body.children)) !(e instanceof HTMLElement) || e === f || e === T || (x.has(e) || x.set(e, e.inert), e.inert = !0);
	}, B = () => {
		if (F) {
			F.resize();
			return;
		}
		if (!window.lenis || t() || window.matchMedia("(max-width: 767px)").matches) return;
		let e = window.Lenis;
		e && (F = new e({
			wrapper: m,
			content: h,
			lerp: .0822,
			smoothWheel: !0,
			wheelMultiplier: .8,
			touchMultiplier: 2.5,
			syncTouch: !0,
			autoRaf: !0
		}));
	}, V = () => {
		F == null || F.destroy(), F = null;
	}, H = () => {
		var e;
		document.documentElement.classList.contains("work-overlay-active") || (k = window.scrollY, ee = document.documentElement.style.overflow, te = document.body.style.width, N = history.scrollRestoration, document.body.style.width = `${document.documentElement.clientWidth}px`, document.documentElement.style.overflow = "hidden", document.documentElement.classList.add("work-overlay-active"), history.scrollRestoration = "manual", (e = window.lenis) == null || e.stop(), z());
	}, U = () => {
		var e;
		document.documentElement.classList.remove("work-overlay-active"), document.documentElement.style.overflow = ee, document.body.style.width = te, history.scrollRestoration = N, x.forEach((e, t) => {
			t.inert = e;
		}), x.clear(), (e = window.lenis) == null || e.start(), window.scrollTo(0, k);
	}, W = (e) => {
		E = e, D = e.getAttribute("style") || "";
		let t = e.getBoundingClientRect();
		e.style.aspectRatio = `${t.width} / ${Math.max(t.height, 1)}`;
	}, G = () => {
		E != null && E.isConnected && (D ? E.setAttribute("style", D) : E.removeAttribute("style")), E = null, D = "";
	}, K = () => {
		if (!w || !C) return;
		let e = ne(C.id) || E;
		e != null && e.isConnected && (e.querySelector("img") || (w.className = "cms-works__image", e.append(w))), T == null || T.remove(), T = null, w = null, G();
	}, q = (e) => {
		P == null || P(), P = null;
		let t = a(e), n = o(f, e, c(nt, e)), r = t.querySelector(".cms-work-detail__title"), i = t.querySelector(".cms-work-detail__image");
		if (!i) throw Error(`Missing detail image for ${e.id}`);
		r && (r.id = "work-overlay-title", f.setAttribute("aria-labelledby", r.id)), n && n.querySelectorAll("a[href]").forEach((e) => {
			e.setAttribute("data-transition", "false");
		});
		let s = document.createElement("div");
		return s.className = "work-detail_wrapper u-section cms-work-detail work-overlay__detail", s.append(t), g.replaceChildren(s), n && g.append(n), m.scrollTop = 0, F == null || F.resize(), F == null || F.scrollTo(0, {
			immediate: !0,
			force: !0
		}), document.title = `${e.title} – Franz West`, i;
	}, J = (e) => {
		if (!(e !== A || !C)) {
			if (T && w) {
				let e = g.querySelector(".cms-work-detail__image");
				e && e.style.removeProperty("visibility"), K();
			}
			S = "open", r.to(L(), {
				autoAlpha: 1,
				duration: t() ? 0 : .42,
				stagger: t() ? 0 : .055,
				ease: "power2.out",
				onComplete: () => f.focus({ preventScroll: !0 })
			});
		}
	}, Y = (e, n, i = !1) => {
		var a;
		let o = ++A, c = C;
		R(), c && V(), c && K(), S = "opening", C = e;
		let l = (a = history.state) == null ? void 0 : a.previousWorkId, d = new URL(it(), window.location.href);
		l && tt.has(l) && d.searchParams.set("work", l), v.href = `${d.pathname}${d.search}${d.hash}`, !f.hidden && c && r.set(p, { opacity: 1 });
		let m = null, h = null;
		if (!i && n) {
			let e = n.querySelector(".cms-works__image-wrap"), t = e == null ? void 0 : e.querySelector("img");
			e && t && t.complete && t.naturalWidth > 0 && (m = t, h = e.getBoundingClientRect(), W(e));
		}
		let _ = q(e);
		m && h && (w = m, m.naturalWidth && m.naturalHeight && (_.width = m.naturalWidth, _.height = m.naturalHeight), _.style.visibility = "hidden", T = ot(m, h)), f.hidden = !1, I(), H(), z();
		let y = g.querySelector(".work-overlay__detail");
		if (P = y ? s(y) : null, B(), f.focus({ preventScroll: !0 }), document.documentElement.classList.remove("work-overlay-initial"), r.set(L(), { autoAlpha: 0 }), i || t() || !T) {
			r.set(p, { opacity: 1 }), r.set(u, { opacity: 0 }), J(o);
			return;
		}
		r.set(p, { opacity: +!!c });
		let b = () => {
			if (o !== A || !T) return;
			let e = _.getBoundingClientRect();
			if (e.width <= 0 || e.height <= 0) {
				r.set(p, { opacity: 1 }), r.set(u, { opacity: 0 }), J(o);
				return;
			}
			M = r.timeline(), M.to(p, {
				opacity: 1,
				duration: .32,
				ease: "power2.out"
			}, 0), M.to(u, {
				opacity: 0,
				duration: .26,
				ease: "power2.out"
			}, 0), j = Qe.fit(T, _, {
				duration: rt,
				ease: "power3.inOut",
				onComplete: () => J(o)
			});
		};
		_.complete && _.naturalWidth > 0 ? b() : (_.addEventListener("load", () => requestAnimationFrame(b), { once: !0 }), _.addEventListener("error", () => {
			o === A && (r.set(p, { opacity: 1 }), r.set(u, { opacity: 0 }), J(o));
		}, { once: !0 }));
	}, X = (e) => {
		if (e !== A) return;
		K(), P == null || P(), P = null, y && b.parentNode && b.parentNode.insertBefore(y, b.nextSibling), f.hidden = !0, g.replaceChildren(), C = null, S = "closed", document.title = d, r.set(u, { clearProps: "opacity" }), r.set(p, { clearProps: "opacity" }), U();
		let t = O != null && O.isConnected ? O : null;
		t == null || t.focus({ preventScroll: !0 }), O = null;
	}, Z = () => {
		if (S === "closed") return;
		let e = ++A;
		R(), S = "closing", V();
		let n = () => {
			if (e !== A) return;
			let n = C ? ne(C.id) || E : null, i = w || g.querySelector(".cms-work-detail__image");
			if (!(n != null && n.isConnected) || !i || t()) {
				r.to(p, {
					opacity: 0,
					duration: t() ? 0 : .25
				}), r.to(u, {
					opacity: 1,
					duration: t() ? 0 : .25,
					onComplete: () => X(e)
				});
				return;
			}
			if (!T) {
				let e = i.getBoundingClientRect(), t = st(i);
				i.replaceWith(t), w = i, T = ot(i, e);
			}
			r.to(p, {
				opacity: 0,
				duration: rt * .75,
				ease: "power2.inOut"
			}), r.to(u, {
				opacity: 1,
				duration: rt * .75,
				ease: "power2.inOut"
			}), j = Qe.fit(T, n, {
				duration: rt,
				ease: "power3.inOut",
				onComplete: () => X(e)
			});
		};
		r.to(L(), {
			autoAlpha: 0,
			duration: t() ? 0 : .16,
			stagger: t() ? 0 : .015,
			onComplete: () => {
				m.scrollTop > 0 && !t() ? r.to(m, {
					scrollTop: 0,
					duration: Math.min(.55, .25 + m.scrollTop / 2e3),
					ease: "power2.inOut",
					onComplete: n
				}) : (m.scrollTop = 0, n());
			}
		});
	}, Q = (e = !1) => {
		var t;
		let n = ((t = new URL(window.location.href).searchParams.get("work")) == null ? void 0 : t.trim()) || "", r = tt.get(n);
		if (n && !r) {
			history.replaceState({}, "", it()), Z();
			return;
		}
		if (!r) {
			Z();
			return;
		}
		if ((C == null ? void 0 : C.id) === r.id && (S === "open" || S === "opening")) return;
		let i = S === "closed" && Array.from(u.querySelectorAll("[data-works-rendered-item]")).find((e) => e.getAttribute("data-works-rendered-item") === r.id) || null;
		Y(r, i, e);
	}, re = () => {
		let e = history.state;
		if (e != null && e.fwWorkOverlay && e.fromOverview && e.depth && history.length > e.depth) {
			history.go(-e.depth);
			return;
		}
		history.replaceState({ fwWorkOverlay: !1 }, "", it()), Q();
	}, ie = () => {
		let e = history.state;
		if (e != null && e.fwWorkOverlay && (e.depth || 0) > 1) {
			history.back();
			return;
		}
		re();
	};
	l.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element) || t.defaultPrevented || e(t)) return;
		let r = n.closest("a[data-work-overlay-trigger]");
		if (!r || !l.contains(r)) return;
		let i = r.getAttribute("data-work-overlay-trigger") || at(r.href), a = tt.get(i);
		if (!a) return;
		t.preventDefault(), O = r;
		let o = new URL(window.location.href);
		o.searchParams.set("work", a.id), history.replaceState({
			...history.state || {},
			fwWorkOverlayBase: !0
		}, "", it()), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !0,
			depth: 1
		}, "", o), Y(a, r);
	}), f.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element) || e(t)) return;
		let r = n.closest("a[href]");
		if (!r || !f.contains(r)) return;
		if (r === v) {
			t.preventDefault(), ie();
			return;
		}
		if (r.classList.contains("cms-work-detail__overview-link")) {
			t.preventDefault(), re();
			return;
		}
		let i = tt.get(at(r.href));
		if (!i) return;
		t.preventDefault();
		let a = history.state, o = new URL(window.location.href);
		o.searchParams.set("work", i.id), history.pushState({
			fwWorkOverlay: !0,
			fromOverview: !!(a != null && a.fromOverview),
			depth: ((a == null ? void 0 : a.depth) || 0) + 1,
			previousWorkId: C == null ? void 0 : C.id
		}, "", o), Y(i, null);
	}), window.addEventListener("popstate", () => Q()), window.addEventListener("pageshow", (e) => {
		e.persisted && Q(!0);
	}), window.addEventListener("site:lenis-ready", () => {
		if (S !== "closed") {
			var e;
			(e = window.lenis) == null || e.stop(), S !== "closing" && B();
		}
	}), document.addEventListener("keydown", (e) => {
		if (S === "closed") return;
		if (e.key === "Escape") {
			if (y != null && y.classList.contains("is-open")) return;
			e.preventDefault(), re();
			return;
		}
		if (e.key !== "Tab") return;
		let t = n(f);
		if (t.length === 0) return;
		let r = t[0], i = t[t.length - 1];
		e.shiftKey && document.activeElement === r ? (e.preventDefault(), i.focus()) : !e.shiftKey && document.activeElement === i && (e.preventDefault(), r.focus());
	}), new URL(window.location.href).searchParams.has("work") ? (Q(!0), i(() => {
		if (S !== "closed") {
			var e;
			z(), (e = window.lenis) == null || e.stop();
		}
	})) : document.documentElement.classList.remove("work-overlay-initial");
}
//#endregion
//#region src/cms-works.ts
var ut = "[data-cms-works]", dt = "[data-cms-works-source]", ft = "[data-cms-works-item], [data-cms-canvas-item]", pt = "[data-works-thumbnail], [data-canvas-thumbnail]", mt = "[data-works-title], [data-canvas-title]", ht = "[data-works-year], [data-canvas-year]", gt = "[data-works-category], [data-works-categories]", _t = "http://www.w3.org/2000/svg", vt = [
	"[data-works-link]",
	"[data-sheet-calendar-link]",
	"[data-sheet-calender-link]",
	"[data-sheet-claender-link]",
	"[data-calendar-link]",
	"[data-calender-link]",
	"[data-claender-link]",
	"[data-sheet-link]",
	"a[href]"
].join(", "), yt = 16, bt = 16, xt = "[data-cms-works-load-more-template]", St = "site:works-ready";
function Ct(e) {
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e, { once: !0 }) : e();
}
function wt(e, t) {
	var n, r;
	return (n = (r = e.querySelector(t)) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n;
}
function Tt(e) {
	var t;
	return (t = Array.from(e.children).find((e) => e instanceof HTMLImageElement)) == null ? null : t;
}
function Et(e) {
	let t = e.querySelector(pt);
	return t ? t instanceof HTMLImageElement ? t : null : Tt(e);
}
function Dt(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function Ot(e) {
	let t = e >>> 0;
	return () => {
		t += 1831565813;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function kt(e) {
	var t, n;
	return ((t = (n = e.getAttribute("data-works-categories")) == null ? e.getAttribute("data-works-category") : n) == null ? wt(e, gt) : t).split(",").map((e) => e.trim()).filter(Boolean);
}
function At(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v;
	return (t = (n = (r = (i = (a = (o = (s = (c = (l = (u = (d = (f = (p = (m = (h = (g = (_ = e.getAttribute("data-works-href")) == null ? e.getAttribute("data-works-url") : _) == null ? e.getAttribute("data-sheet-calendar-href") : g) == null ? e.getAttribute("data-sheet-calendar-url") : h) == null ? e.getAttribute("data-sheet-calender-href") : m) == null ? e.getAttribute("data-sheet-calender-url") : p) == null ? e.getAttribute("data-sheet-claender-href") : f) == null ? e.getAttribute("data-sheet-claender-url") : d) == null ? e.getAttribute("data-calendar-href") : u) == null ? e.getAttribute("data-calendar-url") : l) == null ? e.getAttribute("data-calender-href") : c) == null ? e.getAttribute("data-calender-url") : s) == null ? e.getAttribute("data-claender-href") : o) == null ? e.getAttribute("data-claender-url") : a) == null ? e.getAttribute("data-sheet-href") : i) == null ? e.getAttribute("data-sheet-url") : r) == null ? (v = e.querySelector(vt)) == null ? void 0 : v.href : n) == null ? "" : t;
}
function jt(e, t) {
	var n, r, i, a, o, s;
	let c = Et(e), l = (c == null ? void 0 : c.currentSrc) || (c == null ? void 0 : c.src) || "";
	if (!l) return null;
	let u = wt(e, mt) || ((n = e.getAttribute("data-works-title")) == null ? void 0 : n.trim()) || ((r = e.getAttribute("data-canvas-title")) == null ? void 0 : r.trim()) || (c == null ? void 0 : c.alt.trim()) || "", d = At(e), f = "";
	try {
		f = new URL(d, document.baseURI).pathname.split("/").filter(Boolean).pop() || "";
	} catch (e) {}
	return {
		id: ((i = e.getAttribute("data-works-id")) == null ? void 0 : i.trim()) || ((a = e.getAttribute("data-canvas-id")) == null ? void 0 : a.trim()) || ((o = e.getAttribute("data-cms-item-id")) == null ? void 0 : o.trim()) || f || `work-${t + 1}-${Dt(`${u}-${l}`)}`,
		title: u,
		thumbnail: l,
		thumbnailAlt: (c == null ? void 0 : c.alt) || u,
		href: d,
		year: wt(e, ht) || ((s = e.getAttribute("data-works-year")) == null ? void 0 : s.trim()) || "",
		categories: kt(e),
		index: t
	};
}
function Mt(e) {
	return Array.from(e.querySelectorAll(ft)).map(jt).filter((e) => e !== null);
}
function Nt(e) {
	for (let t of Array.from(e.querySelectorAll(ft))) {
		let e = Et(t);
		e && (e.removeAttribute("srcset"), e.removeAttribute("sizes"), e.removeAttribute("src"));
	}
}
function Pt(e) {
	var t;
	let n = (t = e.getAttribute("data-works-sort")) == null ? void 0 : t.trim().toLowerCase();
	return n === "random" || n === "year" ? n : "year";
}
function Ft(e) {
	let t = e.match(/\b(?:18|19|20)\d{2}\b/);
	return t ? Number.parseInt(t[0], 10) : null;
}
function It(e) {
	let t = e.trim();
	return t.startsWith("[") && t.endsWith("]") ? t : `[${t}]`;
}
function Lt(e, t, n) {
	let r = [...e];
	if (t === "random") {
		let t = Ot(Dt(n.getAttribute("data-works-random-seed") || e.map((e) => e.id).join("|")));
		return r.map((e) => ({
			item: e,
			sortValue: t()
		})).sort((e, t) => e.sortValue - t.sortValue).map(({ item: e }) => e);
	}
	return r.sort((e, t) => {
		var n, r;
		return ((n = Ft(e.year)) == null ? Infinity : n) - ((r = Ft(t.year)) == null ? Infinity : r) || e.title.localeCompare(t.title, "de", { sensitivity: "base" });
	});
}
function Rt(e, t) {
	return t.size === 0 ? e : e.filter((e) => e.categories.some((e) => t.has(e)));
}
function zt() {
	let e = document.createElementNS(_t, "svg"), t = document.createElementNS(_t, "path"), n = document.createElementNS(_t, "path");
	return e.classList.add("cms-works__eye"), e.setAttribute("viewBox", "0 0 26 17"), e.setAttribute("fill", "none"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), t.classList.add("cms-works__eye-pupil"), t.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z"), t.setAttribute("fill", "currentColor"), n.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z"), n.setAttribute("fill", "currentColor"), e.append(t, n), e;
}
function Bt(e, t, n = -1) {
	let r = document.createElement(e.href ? "a" : "article"), i = document.createElement("span"), a = document.createElement("img"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (r.className = "cms-works__item", r.setAttribute("data-works-rendered-item", e.id), r.setAttribute("data-works-categories", e.categories.join(",")), e.href && (r.classList.add("cms-works__item--clickable"), r.setAttribute("href", e.href), r.setAttribute("data-work-overlay-trigger", e.id), r.setAttribute("data-transition", "false")), i.className = "cms-works__image-wrap", n >= 0 && (i.classList.add("cms-works__image-wrap--revealing"), i.style.setProperty("--cms-works-reveal-delay", `${n * 100}ms`)), a.className = "cms-works__image", a.src = e.thumbnail, a.alt = e.thumbnailAlt, a.width = t.width, a.height = t.height, a.loading = "lazy", a.decoding = "async", i.append(a), o.className = "cms-works__meta", s.className = "cms-works__label", c.className = "cms-works__title", c.textContent = e.title, s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "cms-works__year", t.textContent = It(e.year), s.append(t);
	}
	return o.append(s, zt()), r.append(i, o), r;
}
function Vt(e) {
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
function Ht(e) {
	let t = window.getComputedStyle(e).getPropertyValue("--cms-works-active-columns").trim(), n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n > 0 ? n : 4;
}
function Ut(e, t, n) {
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
function Wt(e, t, n, r) {
	let i = document.createElement("div"), a = Ut(t, n, Ht(e)), o = /* @__PURE__ */ new Map();
	r && t.forEach((e) => {
		r.has(e.id) && o.set(e.id, o.size);
	}), i.className = "cms-works__grid", a.forEach((e) => {
		let t = document.createElement("div");
		t.className = "cms-works__column", e.items.forEach((e) => {
			var r, i;
			t.append(Bt(e, (r = n.get(e.id)) == null ? {
				width: 1,
				height: 1
			} : r, (i = o.get(e.id)) == null ? -1 : i));
		}), i.append(t);
	}), e.replaceChildren(i), e.classList.add("is-ready");
}
function Gt(e, t) {
	var n, r, i;
	let a = (n = (r = (i = e.querySelector("[data-cms-works-load-more-text]")) == null ? e.querySelector("[data-button-text]") : i) == null ? e.querySelector(".button-text") : r) == null ? e : n;
	a.textContent = t;
}
function Kt(e, t) {
	var n, r;
	let i = (n = (r = e.querySelector(xt)) == null ? t.querySelector(xt) : r) == null ? document.querySelector(xt) : n;
	return i ? (i instanceof HTMLButtonElement && (i.type = "button"), i instanceof HTMLAnchorElement && (i.href = "#"), i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.removeAttribute("hidden"), i.removeAttribute("aria-hidden"), i.removeAttribute("data-cms-works-load-more-template"), i.setAttribute("data-cms-works-load-more", ""), Gt(i, "MEHR ANZEIGEN"), i) : null;
}
function qt() {
	return y();
}
function Jt(e, t) {
	var n, r, i, a, o;
	let s = Mt(t), c = qt() ? _() : null, l = (n = c == null ? void 0 : c.categories) == null ? [] : n, u = {
		appliedCategories: new Set(l),
		pendingCategories: new Set(l),
		appliedSortMode: (r = c == null ? void 0 : c.sort) == null ? Pt(e) : r,
		pendingSortMode: (i = c == null ? void 0 : c.sort) == null ? Pt(e) : i,
		open: !1
	}, d = document.createElement("div"), f = document.createElement("button"), p = document.createElement("div"), m = Kt(e, t), g = 0, y = 0, b = 0, x = (a = c == null ? void 0 : c.visibleCount) == null ? yt : a, S = (o = c == null ? void 0 : c.scrollY) == null ? null : o, C = [], w = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), E = 0;
	t.hidden = !0, t.setAttribute("aria-hidden", "true"), Nt(t), e.classList.add("cms-works"), d.className = "cms-works__grid-host u-section", f.className = "cms-works__collection-overlay", f.type = "button", f.setAttribute("aria-label", "Filter schliessen"), p.className = "cms-works__grid-mount", d.append(p), m && d.append(m);
	let D = () => Lt(Rt(s, u.appliedCategories), u.appliedSortMode, e), O = (t = !1, n) => {
		let r = ++E, i = C.slice(0, x);
		Promise.all(i.map(async (e) => {
			if (w.has(e.id)) return;
			let t = T.get(e.thumbnail);
			t || (t = Vt(e.thumbnail), T.set(e.thumbnail, t)), w.set(e.id, await t);
		})).then(() => {
			r === E && (window.cancelAnimationFrame(g), g = window.requestAnimationFrame(() => {
				if (r !== E) return;
				let a = Ht(e), o = Math.round(e.getBoundingClientRect().width);
				!t && a === y && o === b || (y = a, b = o, Wt(p, i, w, n), m && (m.hidden = C.length <= x), S !== null && (window.scrollTo(0, S), S = null), e.setAttribute("data-site-assets-ready", ""), document.dispatchEvent(new CustomEvent(St, {
					bubbles: !0,
					detail: {
						count: i.length,
						total: C.length
					}
				})));
			}));
		});
	}, k = () => {
		v({
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
	}, j = h(s, u, () => {
		C = D(), x = yt, O(!0), j.sync(), k();
	}, { onOpenChange: (t) => {
		e.classList.toggle("is-filter-open", t), t && A();
	} });
	if (f.addEventListener("click", () => j.close(!0)), m) {
		let e = () => {
			let e = x;
			x = Math.min(x + bt, C.length);
			let t = new Set(C.slice(e, x).map((e) => e.id));
			O(!0, t), k();
		};
		m.addEventListener("click", (t) => {
			t.preventDefault(), e();
		}), m.addEventListener("keydown", (t) => {
			t.key !== "Enter" && t.key !== " " || (t.preventDefault(), e());
		});
	}
	C = D(), e.replaceChildren(j.element, f, d), lt(e, p);
	let M = new ResizeObserver(() => O());
	O(!0), j.sync(), M.observe(e), window.addEventListener("orientationchange", () => O(!0)), window.addEventListener("resize", A), window.addEventListener("scroll", A, { passive: !0 }), window.addEventListener("pagehide", k);
}
function Yt(e) {
	var t;
	let n = (t = e.querySelector(dt)) == null ? document.querySelector(dt) : t;
	if (!n) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	Jt(e, n);
}
Ct(() => {
	Array.from(document.querySelectorAll(ut)).forEach(Yt);
});
//#endregion

//# sourceMappingURL=cms-works.js.map