import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as l, n as u, o as d, p as f, r as p, s as m, t as h, u as g, v as _ } from "./site-interactions-sLVQDvui.js";
import { t as v } from "./site-interactions-BxJ-FVg3.js";
//#region src/modules/i18n.ts
var y = {};
function b(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (g(t) && g(n) && (e[t.trim()] = n.trim()), e), {});
}
function ee(e = document) {
	var t, n;
	y = {};
	let r = f("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (y = b(a(i))), {
		get values() {
			return { ...y };
		},
		t: te
	};
}
function te(e, t) {
	let n = e.trim(), r = y[n];
	return g(r) ? r.trim() : t.trim();
}
//#endregion
//#region node_modules/gsap/utils/matrix.js
var x, S, C, w, T, E, D, O, k = "transform", ne = k + "Origin", re, ie = function(e) {
	var t = e.ownerDocument || e;
	for (!(k in e.style) && ("msTransform" in e.style) && (k = "msTransform", ne = k + "Origin"); t.parentNode && (t = t.parentNode););
	if (S = window, D = new z(), t) {
		x = t, C = t.documentElement, w = t.body, O = x.createElementNS("http://www.w3.org/2000/svg", "g"), O.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", re = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, ae = function(e) {
	for (var t, n; e && e !== w;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, A = [], j = [], oe = function() {
	return S.pageYOffset || x.scrollTop || C.scrollTop || w.scrollTop || 0;
}, M = function() {
	return S.pageXOffset || x.scrollLeft || C.scrollLeft || w.scrollLeft || 0;
}, N = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, P = function e(t) {
	if (S.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, F = function e(t, n) {
	if (t.parentNode && (x || ie(t))) {
		var r = N(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
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
}, I = function(e) {
	for (var t = new z(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, se = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[k], e.style[k] = "none", e.appendChild(O), t = O.getCTM(), e.removeChild(O), n ? e.style[k] = n : e.style.removeProperty(k.replace(/([A-Z])/g, "-$1").toLowerCase())), t || D.clone();
}, L = function(e, t) {
	var n = N(e), r = e === n, i = n ? A : j, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === S) return e;
	if (i.length || i.push(F(e, 1), F(e, 2), F(e, 3)), s = n ? E : T, n) r ? (l = se(e), u = -l.e / l.a, d = -l.f / l.d, c = D) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? I(c) : c.getItem(0).matrix : D, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new z(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, re) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (S.getComputedStyle(l)[k] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = S.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[k] = f[k], l[ne] = f[ne], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, R = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, z = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), R(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return R(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return R(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
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
function B(e, t, n, r) {
	if (!e || !e.parentNode || (x || ie(e)).documentElement === e) return new z();
	var i = ae(e), a = N(e) ? A : j, o = L(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && P(e), f = new z((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : M()), s.top + (d ? 0 : oe()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region node_modules/gsap/Flip.js
var V = 1, H, U, W, ce, G, K, le, ue = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, de = {}, fe = 180 / Math.PI, pe = Math.PI / 180, me = {}, he = {}, ge = {}, _e = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, ve = _e("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), ye = _e("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), be = function(e) {
	return H(e)[0] || console.warn("Element not found:", e);
}, xe = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, Se = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, Ce = {
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
}, we = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, Te = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, Ee = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, De = {}, Oe = function(e) {
	var t = De[e] = _e(e);
	return ge[e] = t.concat(ye), t;
}, ke = function(e) {
	var t = e._gsap || U.core.getCache(e);
	return t.gmCache === U.ticker.frame ? t.gMatrix : (t.gmCache = U.ticker.frame, t.gMatrix = B(e, !0, !1, !0));
}, Ae = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, je = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = Ae(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, Me = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : he[a] || (he[a] = Te(a)), o);
	return n;
}, Ne = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, Pe = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(Ne);
}, Fe = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Ie = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), W && n !== 1) return W._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), W._final.push(function() {
		return (e.cache.uncache = 1) && Ne(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (Me(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), Me(e, Fe), f = window.getComputedStyle(r); l--;) c[Fe[l]] = f[Fe[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new it(r);
	else if (u = Ee(e, me), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new z(1, 0, 0, 1, p.left + M(), p.top + oe());
	} else u.matrix = B(r, !1, !1, !0);
	return u = Ke(u, e, !0), e.x = K(u.x, .01), e.y = K(u.y, .01), r;
}, Le = function(e, t) {
	return t !== !0 && (t = H(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, Re = function(e) {
	return je(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && Ie(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, ze = function(e, t) {
	return t && e.idLookup[Be(t).id] || e.elementStates[0];
}, Be = function(e, t, n, r) {
	return e instanceof it ? e : e instanceof q ? ze(e, r) : new it(typeof e == "string" ? be(e) || console.warn(e + " not found") : e, t, n);
}, Ve = function(e, t) {
	for (var n = U.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, He = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, Ue = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + V++), t;
}, We = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, Ge = function(e, t, n) {
	return e && t.length && n.add(e(We(t), n, new q(t, 0, !0)), 0);
}, Ke = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && le && le(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, ee = y.f, te = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, x = !te && e.simple && t.simple && !i, S, C, w, T, E, D, O;
	return x || !c ? (p = m = 1, h = S = 0) : (E = ke(c), D = E.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = xe(Math.atan2(D.b, D.a) * fe), S = xe(Math.atan2(D.c, D.d) * fe + h) % 360, p = Math.sqrt(D.a ** 2 + D.b ** 2), m = Math.sqrt(D.c ** 2 + D.d ** 2) * Math.cos(S * pe), i && (i = H(i)[0], T = U.getProperty(i), O = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: T("scaleX"),
		scaleY: T("scaleY"),
		width: O ? O.width : Math.ceil(parseFloat(T("width", "px"))),
		height: O ? O.height : parseFloat(T("height", "px"))
	}), s.rotation = h + "deg", s.skewX = S + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = K(d * p / v.scaleX, 0), f = K(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && He(o, t.props), x || !c ? (l += b - e.matrix.e, u += ee - e.matrix.f) : te || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), D = B(i || o, !1, !1, !0), C = E.apply({
		x: D.e,
		y: D.f
	}), w = E.apply({
		x: b,
		y: ee
	}), l += w.x - C.x, u += w.y - C.y) : (E.e = E.f = 0, w = E.apply({
		x: b - e.matrix.e,
		y: ee - e.matrix.f
	}), l += w.x, u += w.y), l = K(l, .02), u = K(u, .02), a && !(a instanceof it) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = S, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, qe = function(e, t) {
	return e instanceof q ? e : new q(e, t);
}, Je = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, Ye = [], Xe = "width,height,overflowX,overflowY".split(","), Ze, Qe = function(e) {
	if (e !== Ze) {
		var t = G.style, n = G.clientWidth === window.outerWidth, r = G.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) Ye[i] = t[Xe[i]];
			n && (t.width = G.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = G.clientHeight + "px", t.overflowX = "hidden"), Ze = e;
		} else if (Ze) {
			for (; i--;) Ye[i] ? t[Xe[i]] = Ye[i] : t.removeProperty(Te(Xe[i]));
			Ze = e;
		}
	}
}, $e = function(e, t) {
	for (var n = 0; n < e.length; n += 3) U.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, et = function(e, t, n, r) {
	e instanceof q && t instanceof q || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, ee = i.stagger, te = i.spin, x = i.prune, S = ("props" in n ? n : e).props, C = Ee(n, Ce), w = U.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), T = C, E = [], D = [], O = [], k = [], ne = te === !0 ? 1 : te || 0, re = typeof te == "function" ? te : function() {
		return ne;
	}, ie = e.interrupted || t.interrupted, ae = w[r === 1 ? "from" : "to"], A, j, oe, M, N, P, F, I, se, L, R, z, V, H;
	for (j in t.idLookup) R = t.alt[j] ? Je(t, e, j) : t.idLookup[j], N = R.element, L = e.idLookup[j], e.alt[j] && N === L.element && (e.alt[j].isVisible || !R.isVisible) && (L = e.alt[j]), L ? (P = {
		t: N,
		b: L,
		a: R,
		sd: L.element === N ? 0 : R.isVisible ? 1 : -1
	}, O.push(P), P.sd && (P.sd < 0 && (P.b = R, P.a = L), ie && Me(P.b, S ? ge[S] : ye), b && O.push(P.swap = {
		t: L.element,
		b: P.b,
		a: P.a,
		sd: -P.sd,
		swap: P
	})), N._flip = L.element._flip = W ? W.timeline : w) : R.isVisible && (O.push({
		t: N,
		b: Ee(R, { isVisible: 1 }),
		a: R,
		sd: 0,
		entering: 1
	}), N._flip = W ? W.timeline : w);
	if (S && (De[S] || Oe(S)).forEach(function(e) {
		return C[e] = function(t) {
			return O[t].a.props[e];
		};
	}), O.finalStates = se = [], z = function() {
		je(O), Qe(!0);
		var t = [];
		for (M = 0; M < O.length; M++) P = O[M], V = P.a, H = P.b, x && !V.isDifferent(H) && !P.entering ? O.splice(M--, 1) : (N = P.t, _ && !(P.sd < 0) && M && (V = P.a = V.clone({ matrix: B(N, !1, !1, !0) })), H.isVisible && V.isVisible ? (P.sd < 0 ? (_ && $e(t, 1), F = new it(N, S, e.simple), Ke(F, V, y, 0, 0, F), F.matrix = B(N, !1, !1, !0), F.bounds = N.getBoundingClientRect(), F.css = P.b.css, P.a = V = F, b && (N.style.opacity = ie ? H.opacity : V.opacity), ee && k.push(N), _ && ($e(t, 2), t.push(N, N.getAttribute("style")))) : P.sd > 0 && b && (N.style.opacity = ie ? V.opacity - H.opacity : "0"), Ke(V, H, y, S), _ && P.sd < 0 && t.push(N.getAttribute("style"))) : H.isVisible !== V.isVisible && (H.isVisible ? V.isVisible || (H.css = V.css, D.push(H), O.splice(M--, 1), c && _ && Ke(V, H, y, S)) : (V.isVisible && E.push(V), O.splice(M--, 1))), y || (N.style.maxWidth = Math.max(V.width, H.width) + "px", N.style.maxHeight = Math.max(V.height, H.height) + "px", N.style.minWidth = Math.min(V.width, H.width) + "px", N.style.minHeight = Math.min(V.height, H.height) + "px"), _ && g && N.classList.add(g)), se.push(V);
		var r;
		if (g && (r = se.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), Qe(!1), y ? (C.scaleX = function(e) {
			return O[e].a.scaleX;
		}, C.scaleY = function(e) {
			return O[e].a.scaleY;
		}) : (C.width = function(e) {
			return O[e].a.width + "px";
		}, C.height = function(e) {
			return O[e].a.height + "px";
		}, C.autoRound = n.autoRound || !1), C.x = function(e) {
			return O[e].a.x + "px";
		}, C.y = function(e) {
			return O[e].a.y + "px";
		}, C.rotation = function(e) {
			return O[e].a.rotation + (te ? re(e, I[e], I) * 360 : 0);
		}, C.skewX = function(e) {
			return O[e].a.skewX;
		}, I = O.map(function(e) {
			return e.t;
		}), (v || v === 0) && (C.modifiers = { zIndex: function() {
			return v;
		} }, C.zIndex = v, C.immediateRender = n.immediateRender !== !1), b && (C.opacity = function(e) {
			return O[e].sd < 0 ? 0 : O[e].sd > 0 ? O[e].a.opacity : "+=0";
		}), k.length) {
			ee = U.utils.distribute(ee);
			var i = I.slice(k.length);
			C.stagger = function(e, t) {
				return ee(~k.indexOf(t) ? I.indexOf(O[e].swap.t) : e, t, i);
			};
		}
		if (ve.forEach(function(e) {
			return n[e] && w.eventCallback(e, n[e], n[e + "Params"]);
		}), u && I.length) for (j in T = Ee(C, Ce), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) A = Ee(u[j], we), A[j] = C[j], !("duration" in A) && "duration" in C && (A.duration = C.duration), A.stagger = C.stagger, ae.call(w, I, A, 0), delete T[j];
		(I.length || D.length || E.length) && (g && w.add(function() {
			return Se(r, g, w._zTime < 0 ? "remove" : "add");
		}, 0) && !f && Se(r, g, "add"), I.length && ae.call(w, I, T, 0)), Ge(o, E, w), Ge(s, D, w);
		var l = W && W.timeline;
		l && (l.add(w, 0), W._final.push(function() {
			return Pe(O, !a);
		})), oe = w.duration(), w.call(function() {
			var e = w.time() >= oe;
			e && !l && Pe(O, !a), g && Se(r, g, e ? "remove" : "add");
		});
	}, l && (c = O.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), W) {
		var ce;
		c && (ce = W._abs).push.apply(ce, Le(O, c)), W._run.push(z);
	} else c && Re(Le(O, c)), z();
	var G = W ? W.timeline : w;
	return G.revert = function() {
		return nt(G, 1, 1);
	}, G;
}, tt = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, nt = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (tt(e), t < 2 && e.progress(1), e.kill()), !0;
}, rt = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, q = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = We(e), this.elementStates = e, rt(this);
		else {
			this.targets = H(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			W && !r && W._kill.push(this), this.update(r || !!W);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new it(e, t.props, t.simple);
		}), rt(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, rt(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = je(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = B(o.element, !1, !1, !0)), s = i[o.id], s && Ke(o, s, t, !0, 0, o), o.matrix = B(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || me;
		return (t in n ? n : n.props || me)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), rt(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? Je(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = ge[this.props] || ye, t = this.elementStates.length; t--;) Me(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = nt(i, +!e);
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
		return this.elementStates[this.targets.indexOf(be(e))];
	}, t.makeAbsolute = function() {
		return je(this.elementStates.slice(0), !0, !0).map(Ie);
	}, e;
}(), it = /*#__PURE__*/ function() {
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
		var n = this, r = n.element, i = U.getProperty(r), a = U.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new z(1, 0, 0, 1, o.left + M(), o.top + oe()) : B(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = Ue(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : K(i("width", "px"), .04), n.height = s ? s.height : K(i("height", "px"), .04), e && Ve(n, De[e] || Oe(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && se(r).inverse(), n.simple = t || xe(c.a) === 1 && !xe(c.b) && !xe(c.c) && xe(c.d) === 1, n.uncache = 0;
	}, e;
}(), at = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), ot = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new q(), this.timeline = U.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new at(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = W, r = ce;
		return W = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, ce = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), ce = r, W = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = W, n = this.timeline, r = this.actions.length, i, a;
		for (W = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new q(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare(st.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), Re(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), ue(e, "onComplete"));
		}), W = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return ue(this, "onStart"), n.restart(), this;
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
		return this !== W && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete de[this.id];
	}, e;
}(), st = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = qe(t, n);
		return ce && ce.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), et(e, qe(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return et(e, qe(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return et(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? Ee(n, we) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && be(n.fitChild), p = Be(t, c, d, e), m = Be(e, 0, d, p), h = c ? ge[c] : ye, g = U.context();
		return c && He(r, p.props), Me(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			Ne(m), u && u.apply(this, arguments);
		}), a && Ie(m, p), r = Ke(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return Ne(m);
			};
		}), s ? r : r.duration ? U.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof q ? e : new q(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), de[e] || (de[e] = new ot(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof q ? e.targets : H(e)).forEach(function(e) {
			return e && nt(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (be(e) || me)._flip;
	}, e.getElementState = function(e, t) {
		return new it(be(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = B(t, !0, !0).multiply(B(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (G = typeof document < "u" && document.body, G) {
			U = e, ie(G), H = U.utils.toArray, le = U.core.getStyleSaver;
			var t = U.utils.snap(.1);
			K = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
st.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin(st);
//#endregion
//#region src/modules/lightbox.ts
var ct = "[data-lightbox-src]", lt = "js-lightbox", ut = `.${lt}`, dt = `${ct}, ${ut}`, ft = "[data-site-lightbox]", pt = "[data-lightbox-close]", mt = "[data-lightbox-prev]", ht = "[data-lightbox-next]", gt = "[data-lightbox-auto-icon]", _t = "site-lightbox-trigger", vt = "site-lightbox-trigger__image", yt = "site-lightbox-trigger__icon", bt = "w-dyn-bind-empty", xt = "/plugins/Basic/assets/placeholder.", St = "site-lightbox-active-image", Ct = .48, wt = .34, Tt = ".site-lightbox__close, .site-lightbox__previous, .site-lightbox__next, .site-lightbox__caption", Et = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n";
v.registerPlugin(st);
var Dt = !1, J = null, Y = null, X = [], Z = 0, Ot = !1, kt = !1, At = null, Q = null, jt = null, Mt = null, Nt = null;
function Pt(e) {
	let t = m(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = m(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return Ft(e);
	let n = f("img", e);
	return n ? Ft(n) : "";
}
function Ft(e) {
	let t = m(e, "src"), n = m(e, "srcset");
	return e.classList.contains(bt) || t.includes(xt) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function It(e) {
	var t, n;
	let r = m(e, "data-lightbox-alt");
	if (r) return r;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let i = f("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Lt(e) {
	return e instanceof HTMLImageElement ? e : f("img", e);
}
function Rt(e) {
	let t = Lt(e);
	return zt(t) ? t : null;
}
function zt(e) {
	if (!e || !document.documentElement.contains(e)) return !1;
	let t = e.getBoundingClientRect(), n = window.getComputedStyle(e);
	return t.width > 0 && t.height > 0 && n.display !== "none" && n.visibility !== "hidden";
}
function Bt(e) {
	return {
		position: e.style.position,
		visibility: e.style.visibility,
		zIndex: e.style.zIndex
	};
}
function Vt(e, t) {
	!e || !t || (e.style.position = t.position, e.style.visibility = t.visibility, e.style.zIndex = t.zIndex);
}
function Ht(e, t) {
	let n = e.getAttribute("data-flip-id");
	return e.setAttribute("data-flip-id", t), n;
}
function Ut(e, t) {
	if (e) {
		if (t === null) {
			e.removeAttribute("data-flip-id");
			return;
		}
		e.setAttribute("data-flip-id", t);
	}
}
function Wt(e, t) {
	return {
		triggerImage: Ht(e, St),
		lightboxImage: Ht(t, St)
	};
}
function Gt(e, t, n) {
	n && (Ut(e, n.triggerImage), Ut(t, n.lightboxImage));
}
function Kt(e) {
	return l(Tt, e.root).filter((e) => !e.hidden);
}
function qt() {
	Q && (Q.kill(), Q = null, kt = !1);
}
function Jt(e, t) {
	jt = t, Mt = t ? Bt(t) : null, Nt = t ? e : null;
}
function Yt() {
	jt = null, Mt = null, Nt = null;
}
function Xt(e) {
	v.set([
		e.root,
		e.image,
		...Kt(e)
	], { clearProps: "opacity,transform" });
}
function Zt(e) {
	e.root.classList.remove("is-animating", "is-closing"), Xt(e), Q = null, kt = !1;
}
function Qt(e) {
	let t = Pt(e).trim();
	return t ? {
		src: t,
		caption: m(e, "data-lightbox-caption"),
		alt: It(e),
		group: m(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function $t(e) {
	let t = Qt(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = l(dt).filter((e) => m(e, "data-lightbox-group") === t.group).map(Qt).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function en() {
	let e = document.createElement("span");
	return e.className = yt, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = Et, e;
}
function tn(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function nn(e) {
	if (!tn(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = J == null ? void 0 : J.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function rn(e) {
	if (e.closest(`.${_t}`) || !Pt(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${_t} ${lt}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group"
	]) {
		let r = m(e, n);
		r && (t.setAttribute(n, r), e.removeAttribute(n));
	}
	e.classList.remove(lt), e.classList.add(vt), e.before(t), t.append(e, en()), nn(t);
}
function an(e) {
	if (e instanceof HTMLImageElement) {
		rn(e);
		return;
	}
	Pt(e).trim() && (e.classList.add(_t), nn(e), f(gt, e) || e.append(en()));
}
function on() {
	l(ut).forEach(an);
}
function sn(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function cn() {
	var e, t, n, r, i, a;
	if (Y) return ln(Y), Y;
	let o = f(ft), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = J == null ? void 0 : J.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, l, u;
		s.innerHTML = "";
		let e = sn((c = J == null ? void 0 : J.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = sn((l = J == null ? void 0 : J.t("previous", "Previous")) == null ? "Previous" : l, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = sn((u = J == null ? void 0 : J.t("next", "Next")) == null ? "Next" : u, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0, r.append(i, a), s.append(e, t, r, n), document.body.append(s);
	}
	let d = {
		root: s,
		image: (t = f("[data-lightbox-image]", s)) == null ? document.createElement("img") : t,
		caption: (n = f("[data-lightbox-caption-output]", s)) == null ? document.createElement("figcaption") : n,
		closeButton: (r = f(pt, s)) == null ? document.createElement("button") : r,
		previousButton: (i = f(mt, s)) == null ? document.createElement("button") : i,
		nextButton: (a = f(ht, s)) == null ? document.createElement("button") : a
	};
	return Y = d, ln(d), !o && !document.body.contains(s) && document.body.append(s), d;
}
function ln(e) {
	var t, n, r, i;
	let a = (t = J == null ? void 0 : J.t("close", "Close")) == null ? "Close" : t, o = (n = J == null ? void 0 : J.t("previous", "Previous")) == null ? "Previous" : n, s = (r = J == null ? void 0 : J.t("next", "Next")) == null ? "Next" : r, c = (i = J == null ? void 0 : J.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function un() {
	let e = cn(), t = X[Z];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = X.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(Z), e.root.dataset.lightboxCount = String(X.length);
}
function dn() {
	if (i()) {
		un();
		return;
	}
	let e = cn();
	v.killTweensOf(e.image), v.to(e.image, {
		opacity: 0,
		scale: .985,
		duration: .11,
		ease: "power1.out",
		onComplete: () => {
			un(), v.fromTo(e.image, {
				opacity: 0,
				scale: .985
			}, {
				opacity: 1,
				scale: 1,
				duration: .18,
				ease: "power2.out",
				clearProps: "opacity,scale"
			});
		}
	});
}
function fn(e) {
	let t = cn();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), t.root.classList.toggle("is-animating", !1), t.root.classList.toggle("is-closing", !1), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function pn(e, t, n) {
	fn(!1), _(), Ot = !1, kt = !1, X = [], Z = 0, At = null, Yt(), Q = null, e.image.removeAttribute("src"), e.caption.textContent = "", u(e.root, "site:lightbox-close", { item: n }), o(t);
}
function mn(e) {
	Q = v.fromTo(e.root, { opacity: +!!i() }, {
		opacity: 1,
		duration: i() ? .01 : .18,
		ease: "power1.out",
		clearProps: "opacity",
		onComplete: () => {
			Q = null;
		}
	});
}
function hn(e, t) {
	let n = Wt(t, e.image), r = st.getState(t);
	return t.style.visibility = "hidden", {
		triggerImage: t,
		previousFlipIds: n,
		state: r
	};
}
function gn(e, t) {
	kt = !0, e.root.classList.add("is-animating"), v.set(e.root, { opacity: 0 }), v.set(Kt(e), {
		opacity: 0,
		y: 8
	}), v.set(e.image, { opacity: 1 }), Q = v.timeline({
		defaults: { ease: "power2.out" },
		onComplete: () => {
			Gt(t.triggerImage, e.image, t.previousFlipIds), Vt(t.triggerImage, Mt), Zt(e);
		}
	}).to(e.root, {
		opacity: 1,
		duration: .2
	}, 0).add(st.from(t.state, {
		targets: e.image,
		absolute: !0,
		duration: Ct,
		ease: "power3.inOut",
		scale: !0
	}), 0).to(Kt(e), {
		opacity: 1,
		y: 0,
		duration: .2,
		stagger: .025
	}, .18);
}
function _n(e) {
	return (e == null ? void 0 : e.trigger) === Nt && zt(jt) ? jt : null;
}
function vn(e, t, n) {
	Q = v.to(e.root, {
		opacity: 0,
		duration: i() ? .01 : .16,
		ease: "power1.out",
		onComplete: () => {
			v.set(e.root, { clearProps: "opacity" }), pn(e, t, n);
		}
	});
}
function yn(e, t, n, r) {
	let i = Wt(t, e.image), a = st.getState(e.image);
	Vt(t, Mt), t.style.position = t.style.position || "relative", t.style.zIndex = "1102", e.image.style.visibility = "hidden", e.root.classList.add("is-closing"), kt = !0, Q = v.timeline({
		defaults: { ease: "power2.out" },
		onComplete: () => {
			Gt(t, e.image, i), Vt(t, Mt), e.image.style.visibility = "", Xt(e), pn(e, n, r);
		}
	}).to(e.root, {
		opacity: 0,
		duration: wt
	}, 0).to(Kt(e), {
		opacity: 0,
		y: 6,
		duration: .14
	}, 0).add(st.from(a, {
		targets: t,
		absolute: !0,
		duration: wt,
		ease: "power3.inOut",
		scale: !0
	}), 0);
}
function bn(e) {
	X.length < 2 || kt || (Z = (e + X.length) % X.length, dn());
}
function xn() {
	bn(Z + 1);
}
function Sn() {
	bn(Z - 1);
}
function Cn(e) {
	var t;
	if (kt) return;
	let n = $t(e);
	if (!n) return;
	let a = Ot, o = Rt(e);
	X = n.items, Z = n.index, At = e, Ot = !0, Jt(e, o), un();
	let s = cn(), c = !a && o && !i() ? hn(s, o) : null;
	fn(!0), a || r(), c ? gn(s, c) : mn(s), p(s.closeButton || s.root);
	let l = X[Z];
	u(s.root, "site:lightbox-open", {
		item: l,
		index: Z,
		count: X.length,
		group: (t = l == null ? void 0 : l.group) == null ? "" : t,
		trigger: e
	});
}
function wn() {
	var e;
	if (!Ot || !Y || kt) return;
	let t = Y, n = At, r = (e = X[Z]) == null ? null : e, a = _n(r), o = !!a && !i();
	if (qt(), o && a) {
		yn(t, a, n, r);
		return;
	}
	vn(t, n, r);
}
function Tn(t) {
	if (!(!Ot || !Y)) {
		if (t.key === "Escape") {
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), wn();
			return;
		}
		if (t.key === "ArrowRight") {
			t.preventDefault(), xn();
			return;
		}
		if (t.key === "ArrowLeft") {
			t.preventDefault(), Sn();
			return;
		}
		e(Y.root, t);
	}
}
function En(e) {
	!Ot || !Y || e.target === Y.root && wn();
}
function Dn(e) {
	return J = e.i18n, on(), Dt || (h(document, "click", dt, (e, t) => {
		e.preventDefault(), Cn(t);
	}), h(document, "keydown", ut, (e, t) => {
		tn(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Cn(t));
	}), h(document, "click", pt, (e) => {
		e.preventDefault(), wn();
	}), h(document, "click", mt, (e) => {
		e.preventDefault(), Sn();
	}), h(document, "click", ht, (e) => {
		e.preventDefault(), xn();
	}), document.addEventListener("click", En), document.addEventListener("keydown", Tn, !0), Dt = !0), {
		openLightbox: Cn,
		closeLightbox: wn
	};
}
//#endregion
//#region src/modules/modal.ts
var On = "[data-modal]", kn = "[data-modal-content]", An = "[data-modal-open]", jn = "[data-modal-close]", Mn = "a[href^=\"#modal:\"]", Nn = "#modal:", Pn = 220, Fn = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", In = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ln = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Rn = !1, zn = !0, Bn = null, $ = null, Vn = "", Hn = null, Un = null, Wn = /* @__PURE__ */ new Map();
function Gn(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Nn) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Kn() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(jn),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = Fn, t.lightboxIcon.innerHTML = In, Jn(t), t;
}
function qn() {
	return (!$ || !document.body.contains($.root)) && ($ = Kn()), Jn($), $;
}
function Jn(e) {
	var t, n;
	let r = (t = Bn == null ? void 0 : Bn.t("close", "Close")) == null ? "Close" : t, i = (n = Bn == null ? void 0 : Bn.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Yn(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function Xn(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Zn(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = Xn(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = Yn(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Qn(e) {
	var t, n, r;
	let i = l("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = Xn(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: Yn(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = Xn(e, "[data-modal-image]"), o = Yn(a);
	return o ? [{
		src: o,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function $n(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal-content");
	if (!l) return null;
	let u = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", d = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, f = Qn(e), p = f[0], h = e.querySelector("[data-modal-body]");
	return {
		id: l,
		address: u,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: d,
		image: (a = p == null ? void 0 : p.src) == null ? "" : a,
		imageAlt: (o = p == null ? void 0 : p.alt) == null ? "" : o,
		caption: (s = p == null ? void 0 : p.caption) == null ? "" : s,
		html: (c = h == null ? void 0 : h.innerHTML) == null ? "" : c,
		work: Zn(e),
		gallery: f
	};
}
function er(e) {
	var t, n, r, i, a, o, s, c;
	let l = m(e, "data-modal");
	if (!l) return null;
	let u = e.querySelector(".fwm-modal__image"), d = Yn(u), f = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return {
		id: l,
		address: (r = (i = e.querySelector(".fwm-modal__address")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r,
		layout: "default",
		headline: "",
		image: d,
		imageAlt: (a = u == null ? void 0 : u.alt) == null ? "" : a,
		caption: f,
		html: (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o,
		work: null,
		gallery: d ? [{
			src: d,
			alt: (c = u == null ? void 0 : u.alt) == null ? "" : c,
			caption: f
		}] : []
	};
}
function tr() {
	l(kn).forEach((e) => {
		let t = $n(e);
		t && Wn.set(t.id, t);
	}), l(On).forEach((e) => {
		let t = er(e);
		t && Wn.set(t.id, t), e.remove();
	});
}
function nr(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = l(kn).find((e) => m(e, "data-modal-content") === n), i = r ? $n(r) : null;
	return i && Wn.set(n, i), (t = i == null ? Wn.get(n) : i) == null ? null : t;
}
function rr(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = Ln, r.append(i, o), t.append(r), t;
}
function ir(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = In, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function ar(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function or(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, ar(e);
}
function sr(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(rr(t.work)), i.forEach((t, n) => {
		e.gallery.append(ir(t, n));
	});
}
function cr(e) {
	let t = qn();
	return e.layout === "context" ? sr(t, e) : or(t, e), t;
}
function lr(e) {
	let t = d(e.panel)[0];
	p(t == null ? e.panel : t);
}
function ur(e) {
	Un !== null && (window.clearTimeout(Un), Un = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function dr(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Un = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Un = null;
	}, Pn), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function fr(e, t) {
	var n, i, a, o, c, l, d, f, p, m, h;
	let g = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (i = e.layout) == null ? "default" : i,
		headline: (a = e.headline) == null ? "" : a,
		image: (o = e.image) == null ? "" : o,
		imageAlt: (c = e.imageAlt) == null ? "" : c,
		caption: (l = e.caption) == null ? "" : l,
		html: (d = e.html) == null ? "" : d,
		work: (f = e.work) == null ? null : f,
		gallery: (p = e.gallery) != null && p.length ? e.gallery : e.image ? [{
			src: e.image,
			alt: (m = e.imageAlt) == null ? "" : m,
			caption: (h = e.caption) == null ? "" : h
		}] : []
	};
	if (!g.id) return;
	Vn && mr(), Wn.set(g.id, g), Hn = t == null ? s() : t, Vn = g.id;
	let _ = cr(g);
	ur(_), r(), lr(_), u(_.root, "site:modal-open", {
		id: Vn,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function pr(e, t) {
	let n = nr(e);
	n && fr(n, t);
}
function mr() {
	if (!Vn || !$) return;
	let e = Vn, t = Hn;
	dr($), _(), Vn = "", Hn = null, u($.root, "site:modal-close", {
		id: e,
		modal: $.root
	}), o(t);
}
function hr(t) {
	if (!(!Vn || !$) && !document.body.classList.contains("is-lightbox-open")) {
		if (t.key === "Escape") {
			t.preventDefault(), mr();
			return;
		}
		e($.panel, t);
	}
}
function gr(e) {
	if (!zn || !Vn || !$) return;
	let t = e.target;
	!c(t) || t !== $.root || mr();
}
function _r(e) {
	var n;
	return zn = (n = e.closeOnBackdrop) == null || n, Bn = e.i18n, tr(), qn(), Rn || (h(document, "click", An, (e, n) => {
		e.preventDefault(), pr(t(n, "data-modal-open"), n);
	}), h(document, "click", Mn, (e, t) => {
		e.preventDefault(), pr(Gn(t), t);
	}), h(document, "click", jn, (e, t) => {
		$ != null && $.root.contains(t) && (e.preventDefault(), mr());
	}), document.addEventListener("click", gr), document.addEventListener("keydown", hr), Rn = !0), {
		openModal: pr,
		openContentModal: fr,
		closeModal: mr
	};
}
//#endregion
//#region src/modules/site-menu.ts
var vr = "[data-site-menu]", yr = "[data-site-menu-panel]", br = "[data-site-menu-toggle]", xr = "[data-site-menu-toggle-label]", Sr = "[data-site-menu-link]", Cr = "[data-site-menu-indicator]", wr = "is-active", Tr = "is-open", Er = "is-ready", Dr = "data-site-menu-open-label", Or = "data-site-menu-closed-label", kr = "data-site-menu-current-key", Ar = "data-site-menu-label", jr = "data-site-menu-key", Mr = "data-site-menu-original-tabindex", Nr = "CLOSE", Pr = "MENU", Fr = [], Ir = !1;
function Lr(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Rr(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = m(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Lr(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function zr(e, t) {
	return t ? m(e, jr) === t : !1;
}
function Br(e, t) {
	var n, r;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || zr(e, m(t, kr) || ((n = document.documentElement.getAttribute(kr)) == null ? void 0 : n.trim()) || ((r = document.body.getAttribute(kr)) == null ? void 0 : r.trim()) || "")) return !0;
	let i = Rr(e);
	return i ? i === Lr(window.location.pathname) : !1;
}
function Vr(e) {
	var t, n;
	return m(e, Ar) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function Hr(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(wr) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Br(t, e.root)) : t;
	return n ? Vr(n) : "";
}
function Ur(e, t = !0) {
	var n;
	let r = m(e.root, Dr) || Nr, a = m(e.root, Or) || Pr, o = Hr(e), s = e.isOpen ? r : e.isHovered ? a : o || a, c = (n = e.toggleLabel) == null ? e.toggle : n;
	if (c.textContent !== s) {
		if (v.killTweensOf(c), i() || !t) {
			c.textContent = s, v.set(c, { clearProps: "opacity" });
			return;
		}
		v.to(c, {
			opacity: 0,
			duration: .08,
			ease: "power1.out",
			onComplete: () => {
				c.textContent = s, v.to(c, {
					opacity: 1,
					duration: .12,
					ease: "power1.in",
					onComplete: () => {
						v.set(c, { clearProps: "opacity" });
					}
				});
			}
		});
	}
}
function Wr(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = m(e, Mr);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Mr) && e.hasAttribute("tabindex") && e.setAttribute(Mr, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Gr(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Tr, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Wr(e, t), Ur(e, n);
}
function Kr(e, t, n) {
	v.killTweensOf(e.panel), v.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	i() || v.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? .38 : .28,
		ease: t ? "power3.out" : "power2.inOut",
		onComplete: () => {
			v.set(e.panel, { clearProps: "height" });
		}
	});
}
function qr(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Gr(e, !0), Kr(e, !0, t);
}
function Jr(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Gr(e, !1), Kr(e, !1, t);
}
function Yr(e) {
	e.isOpen ? Jr(e) : qr(e);
}
function Xr(e) {
	e.links.forEach((t) => {
		let n = Br(t, e.root), r = f(Cr, t);
		t.classList.toggle(wr, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function Zr(e) {
	var t;
	let n = f(yr, e), r = f(br, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = f(xr, r)) == null ? f(xr, e) : t,
		links: l(Sr, e),
		isOpen: e.classList.contains(Tr),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Fr.length + 1}`), r.setAttribute("aria-controls", n.id), Xr(i), Gr(i, i.isOpen, !1), e.classList.add(Er);
	let a = (e) => {
		e.preventDefault(), Yr(i);
	}, o = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || Jr(i);
	}, s = (e) => {
		e.key !== "Escape" || !i.isOpen || (Jr(i), i.toggle.focus({ preventScroll: !0 }));
	}, c = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(Sr) || Jr(i);
	}, u = () => {
		i.isHovered = !0, Ur(i);
	}, d = () => {
		i.isHovered = !1, Ur(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", u), e.addEventListener("pointerleave", d), document.addEventListener("click", o), document.addEventListener("keydown", s), e.addEventListener("click", c), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", u), () => e.removeEventListener("pointerleave", d), () => document.removeEventListener("click", o), () => document.removeEventListener("keydown", s), () => e.removeEventListener("click", c)), i;
}
function Qr(e = document) {
	if (Ir && e === document) return () => void 0;
	e === document && (Ir = !0);
	let t = l(vr, e).map(Zr).filter((e) => !!e);
	return Fr.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Er, Tr), v.killTweensOf(e.panel), v.killTweensOf((t = e.toggleLabel) == null ? e.toggle : t), v.set(e.panel, { clearProps: "height" }), v.set((n = e.toggleLabel) == null ? e.toggle : n, { clearProps: "opacity" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Wr(e, !0);
		});
	};
}
//#endregion
//#region src/main.ts
var $r = !1;
function ei() {
	if ($r) return;
	$r = !0;
	let e = ee();
	_r({ i18n: e }), Dn({ i18n: e }), Qr(), n(), window.SiteInteractions = {
		openModal: pr,
		openContentModal: fr,
		closeModal: mr,
		openLightbox: Cn,
		closeLightbox: wn
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ei, { once: !0 }) : ei();
//#endregion

//# sourceMappingURL=site-interactions.js.map