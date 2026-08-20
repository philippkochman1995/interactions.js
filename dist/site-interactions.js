import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-CeaJphsN.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { i as x, n as S, o as C, r as w, t as T } from "./site-interactions-CVfIYK-Q.js";
//#region src/modules/i18n.ts
var E = {};
function D(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function O(e = document) {
	var t, n;
	E = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (E = D(v(i))), {
		get values() {
			return { ...E };
		},
		t: k
	};
}
function k(e, t) {
	let n = e.trim(), r = E[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region node_modules/gsap/Observer.js
function A(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function j(e, t, n) {
	return t && A(e.prototype, t), n && A(e, n), e;
}
var M, ee, N, P, F, te, ne, re, I, L, R, z, ie, ae = function() {
	return M || typeof window < "u" && (M = window.gsap) && M.registerPlugin && M;
}, oe = 1, B = [], V = [], H = [], se = Date.now, ce = function(e, t) {
	return t;
}, le = function() {
	var e = I.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, V), r.push.apply(r, H), V = n, H = r, ce = function(e, n) {
		return t[e](n);
	};
}, U = function(e, t) {
	return ~H.indexOf(e) && H[H.indexOf(e) + 1][t];
}, ue = function(e) {
	return !!~L.indexOf(e);
}, de = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, W = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, fe = "scrollLeft", pe = "scrollTop", me = function() {
	return R && R.isPressed || V.cache++;
}, he = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			oe && (N.history.scrollRestoration = "manual");
			var i = R && R.isPressed;
			r = n.v = Math.round(r) || (R && R.iOS ? 1 : 0), e(r), n.cacheID = V.cache, i && ce("ss", r);
		} else (t || V.cache !== n.cacheID || ce("ref")) && (n.cacheID = V.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, ge = {
	s: fe,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: he(function(e) {
		return arguments.length ? N.scrollTo(e, _e.sc()) : N.pageXOffset || P[fe] || F[fe] || te[fe] || 0;
	})
}, _e = {
	s: pe,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: ge,
	sc: he(function(e) {
		return arguments.length ? N.scrollTo(ge.sc(), e) : N.pageYOffset || P[pe] || F[pe] || te[pe] || 0;
	})
}, ve = function(e, t) {
	return (t && t._ctx && t._ctx.selector || M.utils.toArray)(e)[0] || (typeof e == "string" && M.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, ye = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, be = function(e, t) {
	var n = t.s, r = t.sc;
	ue(e) && (e = P.scrollingElement || F);
	var i = V.indexOf(e), a = r === _e.sc ? 1 : 2;
	!~i && (i = V.push(e) - 1), V[i + a] || de(e, "scroll", me);
	var o = V[i + a], s = o || (V[i + a] = he(U(e, n), !0) || (ue(e) ? r : he(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = M.getProperty(e, "scrollBehavior") === "smooth"), s;
}, xe = function(e, t, n) {
	var r = e, i = e, a = se(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = se();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = se();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Se = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Ce = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, we = function() {
	I = M.core.globals().ScrollTrigger, I && I.core && le();
}, Te = function(e) {
	return M = e || ae(), !ee && M && typeof document < "u" && document.body && (N = window, P = document, F = P.documentElement, te = P.body, L = [
		N,
		P,
		F,
		te
	], M.utils.clamp, ie = M.core.context || function() {}, re = "onpointerenter" in te ? "pointer" : "mouse", ne = G.isTouch = N.matchMedia && N.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in N || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, z = G.eventTypes = ("ontouchstart" in F ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in F ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return oe = 0;
	}, 500), ee = 1), I || we(), ee;
};
ge.op = _e, V.cache = 0;
var G = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		ee || Te(M) || console.warn("Please gsap.registerPlugin(Observer)"), I || we();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, k = e.onMove, A = e.ignoreCheck, j = e.isNormalizer, L = e.onGestureStart, ae = e.onGestureEnd, oe = e.onWheel, V = e.onEnable, H = e.onDisable, ce = e.onClick, le = e.scrollSpeed, U = e.capture, fe = e.allowClicks, pe = e.lockAxis, he = e.onLockAxis;
		this.target = i = ve(i) || F, this.vars = e, u && (u = M.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, le = le || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(N.getComputedStyle(te).lineHeight) || 22);
		var G, K, Ee, q, J, De, Y, X = this, Oe = 0, ke = 0, Ae = e.passive || !s && e.passive !== !1, je = be(i, ge), Me = be(i, _e), Ne = je(), Pe = Me(), Fe = ~r.indexOf("touch") && !~r.indexOf("pointer") && z[0] === "pointerdown", Ie = ue(i), Le = i.ownerDocument || P, Re = [
			0,
			0,
			0
		], ze = [
			0,
			0,
			0
		], Be = 0, Ve = function() {
			return Be = se();
		}, Z = function(e, t) {
			return (X.event = e) && u && ye(e.target, u) || t && Fe && e.pointerType !== "touch" || A && A(e, t);
		}, He = function() {
			X._vx.reset(), X._vy.reset(), K.pause(), c && c(X);
		}, Ue = function() {
			var e = X.deltaX = Ce(Re), n = X.deltaY = Ce(ze), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(X, e, n, Re, ze), r && (v && X.deltaX > 0 && v(X), y && X.deltaX < 0 && y(X), S && S(X), T && X.deltaX < 0 != Oe < 0 && T(X), Oe = X.deltaX, Re[0] = Re[1] = Re[2] = 0), i && (x && X.deltaY > 0 && x(X), b && X.deltaY < 0 && b(X), C && C(X), E && X.deltaY < 0 != ke < 0 && E(X), ke = X.deltaY, ze[0] = ze[1] = ze[2] = 0), (q || Ee) && (k && k(X), Ee && (p && Ee === 1 && p(X), h && h(X), Ee = 0), q = !1), De && !(De = !1) && he && he(X), J && (oe(X), J = !1), G = 0;
		}, We = function(e, t, n) {
			Re[n] += e, ze[n] += t, X._vx.update(e), X._vy.update(t), o ? G || (G = requestAnimationFrame(Ue)) : Ue();
		}, Ge = function(e, t) {
			pe && !Y && (X.axis = Y = Math.abs(e) > Math.abs(t) ? "x" : "y", De = !0), Y !== "y" && (Re[2] += e, X._vx.update(e, !0)), Y !== "x" && (ze[2] += t, X._vy.update(t, !0)), o ? G || (G = requestAnimationFrame(Ue)) : Ue();
		}, Ke = function(e) {
			if (!Z(e, 1)) {
				e = Se(e, s);
				var t = e.clientX, r = e.clientY, i = t - X.x, a = r - X.y, o = X.isDragging;
				X.x = t, X.y = r, (o || (i || a) && (Math.abs(X.startX - t) >= n || Math.abs(X.startY - r) >= n)) && (Ee || (Ee = o ? 2 : 1), o || (X.isDragging = !0), Ge(i, a));
			}
		}, qe = X.onPress = function(e) {
			Z(e, 1) || e && e.button || (X.axis = Y = null, K.pause(), X.isPressed = !0, e = Se(e), Oe = ke = 0, X.startX = X.x = e.clientX, X.startY = X.y = e.clientY, X._vx.reset(), X._vy.reset(), de(j ? i : Le, z[1], Ke, Ae, !0), X.deltaX = X.deltaY = 0, g && g(X));
		}, Je = X.onRelease = function(e) {
			if (!Z(e, 1)) {
				W(j ? i : Le, z[1], Ke, !0);
				var t = !isNaN(X.y - X.startY), n = X.isDragging, r = n && (Math.abs(X.x - X.startX) > 3 || Math.abs(X.y - X.startY) > 3), a = Se(e);
				!r && t && (X._vx.reset(), X._vy.reset(), s && fe && M.delayedCall(.08, function() {
					if (se() - Be > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (Le.createEvent) {
							var t = Le.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, N, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), X.isDragging = X.isGesturing = X.isPressed = !1, c && n && !j && K.restart(!0), Ee && Ue(), m && n && m(X), _ && _(X, r);
			}
		}, Ye = function(e) {
			return e.touches && e.touches.length > 1 && (X.isGesturing = !0) && L(e, X.isDragging);
		}, Xe = function() {
			return (X.isGesturing = !1) || ae(X);
		}, Ze = function(e) {
			if (!Z(e)) {
				var t = je(), n = Me();
				We((t - Ne) * le, (n - Pe) * le, 1), Ne = t, Pe = n, c && K.restart(!0);
			}
		}, Qe = function(e) {
			if (!Z(e)) {
				e = Se(e, s), oe && (J = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? N.innerHeight : 1) * d;
				We(e.deltaX * t, e.deltaY * t, 0), c && !j && K.restart(!0);
			}
		}, $e = function(e) {
			if (!Z(e)) {
				var t = e.clientX, n = e.clientY, r = t - X.x, i = n - X.y;
				X.x = t, X.y = n, q = !0, c && K.restart(!0), (r || i) && Ge(r, i);
			}
		}, et = function(e) {
			X.event = e, D(X);
		}, tt = function(e) {
			X.event = e, O(X);
		}, nt = function(e) {
			return Z(e) || Se(e, s) && ce(X);
		};
		K = X._dc = M.delayedCall(l || .25, He).pause(), X.deltaX = X.deltaY = 0, X._vx = xe(0, 50, !0), X._vy = xe(0, 50, !0), X.scrollX = je, X.scrollY = Me, X.isDragging = X.isGesturing = X.isPressed = !1, ie(this), X.enable = function(e) {
			return X.isEnabled || (de(Ie ? Le : i, "scroll", me), r.indexOf("scroll") >= 0 && de(Ie ? Le : i, "scroll", Ze, Ae, U), r.indexOf("wheel") >= 0 && de(i, "wheel", Qe, Ae, U), (r.indexOf("touch") >= 0 && ne || r.indexOf("pointer") >= 0) && (de(i, z[0], qe, Ae, U), de(Le, z[2], Je), de(Le, z[3], Je), fe && de(i, "click", Ve, !0, !0), ce && de(i, "click", nt), L && de(Le, "gesturestart", Ye), ae && de(Le, "gestureend", Xe), D && de(i, re + "enter", et), O && de(i, re + "leave", tt), k && de(i, re + "move", $e)), X.isEnabled = !0, X.isDragging = X.isGesturing = X.isPressed = q = Ee = !1, X._vx.reset(), X._vy.reset(), Ne = je(), Pe = Me(), e && e.type && qe(e), V && V(X)), X;
		}, X.disable = function() {
			X.isEnabled && (B.filter(function(e) {
				return e !== X && ue(e.target);
			}).length || W(Ie ? Le : i, "scroll", me), X.isPressed && (X._vx.reset(), X._vy.reset(), W(j ? i : Le, z[1], Ke, !0)), W(Ie ? Le : i, "scroll", Ze, U), W(i, "wheel", Qe, U), W(i, z[0], qe, U), W(Le, z[2], Je), W(Le, z[3], Je), W(i, "click", Ve, !0), W(i, "click", nt), W(Le, "gesturestart", Ye), W(Le, "gestureend", Xe), W(i, re + "enter", et), W(i, re + "leave", tt), W(i, re + "move", $e), X.isEnabled = X.isPressed = X.isDragging = !1, H && H(X));
		}, X.kill = X.revert = function() {
			X.disable();
			var e = B.indexOf(X);
			e >= 0 && B.splice(e, 1), R === X && (R = 0);
		}, B.push(X), j && ue(i) && (R = X), X.enable(f);
	}, j(e, [{
		key: "velocityX",
		get: function() {
			return this._vx.getVelocity();
		}
	}, {
		key: "velocityY",
		get: function() {
			return this._vy.getVelocity();
		}
	}]), e;
}();
G.version = "3.15.0", G.create = function(e) {
	return new G(e);
}, G.register = Te, G.getAll = function() {
	return B.slice();
}, G.getById = function(e) {
	return B.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, ae() && M.registerPlugin(G);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var K, Ee, q, J, De, Y, X, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, Z, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et = 1, tt = Date.now, nt = tt(), rt = 0, it = 0, at = function(e, t, n) {
	var r = xt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, ot = function(e, t) {
	return t && (!xt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, st = function e() {
	return it && requestAnimationFrame(e);
}, ct = function() {
	return Pe = 1;
}, lt = function() {
	return Pe = 0;
}, ut = function(e) {
	return e;
}, dt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, ft = function() {
	return typeof window < "u";
}, pt = function() {
	return K || ft() && (K = window.gsap) && K.registerPlugin && K;
}, mt = function(e) {
	return !!~X.indexOf(e);
}, ht = function(e) {
	return (e === "Height" ? Xe : q["inner" + e]) || De["client" + e] || Y["client" + e];
}, gt = function(e) {
	return U(e, "getBoundingClientRect") || (mt(e) ? function() {
		return Un.width = q.innerWidth, Un.height = Xe, Un;
	} : function() {
		return Kt(e);
	});
}, _t = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = U(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? ht(i) : e["client" + i]) || 0;
	};
}, vt = function(e, t) {
	return !t || ~H.indexOf(e) ? gt(e) : function() {
		return Un;
	};
}, yt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = U(e, n)) ? a() - gt(e)()[i] : mt(e) ? (De[n] || Y[n]) - ht(r) : e[n] - e["offset" + r]);
}, bt = function(e, t) {
	for (var n = 0; n < ze.length; n += 3) (!t || ~t.indexOf(ze[n + 1])) && e(ze[n], ze[n + 1], ze[n + 2]);
}, xt = function(e) {
	return typeof e == "string";
}, St = function(e) {
	return typeof e == "function";
}, Ct = function(e) {
	return typeof e == "number";
}, wt = function(e) {
	return typeof e == "object";
}, Tt = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, Et = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, Dt = Math.abs, Ot = "left", kt = "top", At = "right", jt = "bottom", Mt = "width", Nt = "height", Pt = "Right", Ft = "Left", It = "Top", Lt = "Bottom", Rt = "padding", zt = "margin", Bt = "Width", Vt = "Height", Ht = "px", Ut = function(e) {
	return q.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Wt = function(e) {
	var t = Ut(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, Gt = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Kt = function(e, t) {
	var n = t && Ut(e)[Fe] !== "matrix(1, 0, 0, 1, 0, 0)" && K.to(e, {
		x: 0,
		y: 0,
		xPercent: 0,
		yPercent: 0,
		rotation: 0,
		rotationX: 0,
		rotationY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0
	}).progress(1), r = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
	return n && n.progress(0).kill(), r;
}, qt = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Jt = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, Yt = function(e) {
	return function(t) {
		return K.utils.snap(Jt(e), t);
	};
}, Xt = function(e) {
	var t = K.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
		return e - t;
	});
	return n ? function(e, r, i) {
		i === void 0 && (i = .001);
		var a;
		if (!r) return t(e);
		if (r > 0) {
			for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
			return n[a - 1];
		} else for (a = n.length, e += i; a--;) if (n[a] <= e) return n[a];
		return n[0];
	} : function(n, r, i) {
		i === void 0 && (i = .001);
		var a = t(n);
		return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e);
	};
}, Zt = function(e) {
	return function(t, n) {
		return Xt(Jt(e))(t, n.direction);
	};
}, Qt = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, $t = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, en = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, tn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, nn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, rn = {
	toggleActions: "play",
	anticipatePin: 0
}, an = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, on = function(e, t) {
	if (xt(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in an ? an[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, sn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = J.createElement("div"), m = mt(n) || U(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Y : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === _e ? At : jt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], cn(p, 0, r, _), p;
}, cn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Bt] = 1, i["border" + o + Bt] = 0, i[n.p] = t + "px", K.set(e, i);
}, Q = [], ln = {}, un, dn = function() {
	return tt() - rt > 34 && (un || (un = requestAnimationFrame(Pn)));
}, fn = function() {
	(!He || !He.isPressed || He.startX > Y.clientWidth) && (V.cache++, He ? un || (un = requestAnimationFrame(Pn)) : Pn(), rt || vn("scrollStart"), rt = tt());
}, pn = function() {
	Ge = q.innerWidth, We = q.innerHeight;
}, mn = function(e) {
	V.cache++, (e === !0 || !Ne && !Z && !J.fullscreenElement && !J.webkitFullscreenElement && (!Ue || Ge !== q.innerWidth || Math.abs(q.innerHeight - We) > q.innerHeight * .25)) && Oe.restart(!0);
}, hn = {}, gn = [], _n = function e() {
	return en($, "scrollEnd", e) || An(!0);
}, vn = function(e) {
	return hn[e] && hn[e].map(function(e) {
		return e();
	}) || gn;
}, yn = [], bn = function(e) {
	for (var t = 0; t < yn.length; t += 5) (!e || yn[t + 4] && yn[t + 4].query === e) && (yn[t].style.cssText = yn[t + 1], yn[t].getBBox && yn[t].setAttribute("transform", yn[t + 2] || ""), yn[t + 3].uncache = 1);
}, xn = function() {
	return V.forEach(function(e) {
		return St(e) && ++e.cacheID && (e.rec = e());
	});
}, Sn = function(e, t) {
	var n;
	for (Ie = 0; Ie < Q.length; Ie++) n = Q[Ie], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Ze = !0, t && bn(t), t || vn("revert");
}, Cn = function(e, t) {
	V.cache++, (t || !wn) && V.forEach(function(e) {
		return St(e) && e.cacheID++ && (e.rec = 0);
	}), xt(e) && (q.history.scrollRestoration = Je = e);
}, wn, Tn = 0, En, Dn = function() {
	if (En !== Tn) {
		var e = En = Tn;
		requestAnimationFrame(function() {
			return e === Tn && An(!0);
		});
	}
}, On = function() {
	Y.appendChild(Ye), Xe = !He && Ye.offsetHeight || q.innerHeight, Y.removeChild(Ye);
}, kn = function(e) {
	return ke(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, An = function(e, t) {
	if (De = J.documentElement, Y = J.body, X = [
		q,
		J,
		De,
		Y
	], rt && !e && !Ze) {
		$t($, "scrollEnd", _n);
		return;
	}
	On(), wn = $.isRefreshing = !0, Ze || xn();
	var n = vn("refreshInit");
	Be && $.sort(), t || Sn(), V.forEach(function(e) {
		St(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), Ze = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), Qe = 1, kn(!0), Q.forEach(function(e) {
		var t = yt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), kn(!1), Qe = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), V.forEach(function(e) {
		St(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), Cn(Je, 1), Oe.pause(), Tn++, wn = 2, Pn(2), Q.forEach(function(e) {
		return St(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), wn = $.isRefreshing = !1, vn("refresh");
}, jn = 0, Mn = 1, Nn, Pn = function(e) {
	if (e === 2 || !wn && !Ze) {
		$.isUpdating = !0, Nn && Nn.update(0);
		var t = Q.length, n = tt(), r = n - nt >= 50, i = t && Q[0].scroll();
		if (Mn = jn > i ? -1 : 1, wn || (jn = i), r && (rt && !Pe && n - rt > 200 && (rt = 0, vn("scrollEnd")), je = nt, nt = n), Mn < 0) {
			for (Ie = t; Ie-- > 0;) Q[Ie] && Q[Ie].update(0, r);
			Mn = 1;
		} else for (Ie = 0; Ie < t; Ie++) Q[Ie] && Q[Ie].update(0, r);
		$.isUpdating = !1;
	}
	un = 0;
}, Fn = [
	Ot,
	kt,
	jt,
	At,
	zt + Lt,
	zt + Pt,
	zt + It,
	zt + Ft,
	"display",
	"flexShrink",
	"float",
	"zIndex",
	"gridColumnStart",
	"gridColumnEnd",
	"gridRowStart",
	"gridRowEnd",
	"gridArea",
	"justifySelf",
	"alignSelf",
	"placeSelf",
	"order"
], In = Fn.concat([
	Mt,
	Nt,
	"boxSizing",
	"max" + Bt,
	"max" + Vt,
	"position",
	zt,
	Rt,
	Rt + It,
	Rt + Pt,
	Rt + Lt,
	Rt + Ft
]), Ln = function(e, t, n) {
	Bn(n);
	var r = e._gsap;
	if (r.spacerIsNative) Bn(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Rn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Fn.length, a = t.style, o = e.style, s; i--;) s = Fn[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[jt] = o[At] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Mt] = qt(e, ge) + Ht, a[Nt] = qt(e, _e) + Ht, a[Rt] = o[zt] = o[kt] = o[Ot] = "0", Bn(r), o[Mt] = o["max" + Bt] = n[Mt], o[Nt] = o["max" + Vt] = n[Nt], o[Rt] = n[Rt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, zn = /([A-Z])/g, Bn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(zn, "-$1").toLowerCase());
	}
}, Vn = function(e) {
	for (var t = In.length, n = e.style, r = [], i = 0; i < t; i++) r.push(In[i], n[In[i]]);
	return r.t = e, r;
}, Hn = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Un = {
	left: 0,
	top: 0
}, Wn = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	St(e) && (e = e(s)), xt(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? on("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), Ct(e)) f && (e = K.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && cn(o, n, r, !0);
	else {
		St(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = ve(t, s) || Y, y = Kt(_) || {}, (!y || !y.left && !y.top) && Ut(_).display === "none" && (S = _.style.display, _.style.display = "block", y = Kt(_), S ? _.style.display = S : _.style.removeProperty("display")), b = on(v[0], y[r.d]), x = on(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && cn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, cn(a, C, r, w && C > 20 || !w && (u ? Math.max(Y[h], De[h]) : a.parentNode[h]) <= C + 1), u && (c = Kt(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Ht));
	}
	return f && _ && (h = Kt(_), f.seek(d), g = Kt(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, Gn = /(webkit|moz|length|cssText|inset)/i, Kn = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Y) {
			for (a in e._stOrig = i.cssText, o = Ut(e), o) !+a && !Gn.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		K.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, qn = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, Jn = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, K.set(e, r);
}, Yn = function(e, t) {
	var n = be(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = qn(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			V.cache++, t.tween && Pn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = K.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, $t(e, "wheel", n.wheelHandler), $.isTouch && $t(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		Ee || e.register(K) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), qe(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !it) {
			this.update = this.refresh = this.kill = ut;
			return;
		}
		t = Gt(xt(t) || Ct(t) || t.nodeType ? { trigger: t } : t, rn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? ge : _e, T = !l && l !== 0, E = ve(t.scroller || q), D = K.core.getCache(E), O = mt(E), k = ("pinType" in t ? t.pinType : U(E, "pinType") || O && "fixed") === "fixed", A = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], j = T && t.toggleActions.split(" "), M = "markers" in t ? t.markers : rn.markers, ee = O ? 0 : parseFloat(Ut(E)["border" + w.p2 + Bt]) || 0, N = this, P = t.onRefreshInit && function() {
			return t.onRefreshInit(N);
		}, F = _t(E, O, w), te = vt(E, O), ne = 0, re = 0, I = 0, L = be(E, w), R, z, ie, ae, oe, B, se, ce, le, ue, de, W, fe, pe, me, he, ye, xe, Se, Ce, we, Te, G, Ee, X, Oe, Me, Fe, Le, Re, ze, Z, He, Ue, We, Ge, Ke, qe, Je;
		if (N._startClamp = N._endClamp = !1, N._dir = w, m *= 45, N.scroller = E, N.scroll = x ? x.time.bind(x) : L, ae = L(), N.vars = t, n = n || t.animation, "refreshPriority" in t && (Be = 1, t.refreshPriority === -9999 && (Nn = N)), D.tweenScroll = D.tweenScroll || {
			top: Yn(E, _e),
			left: Yn(E, ge)
		}, N.tweenTo = R = D.tweenScroll[w.p], N.scrubDuration = function(e) {
			He = Ct(e) && e, He ? Z ? Z.duration(e) : Z = K.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: He,
				paused: !0,
				onComplete: function() {
					return h && h(N);
				}
			}) : (Z && Z.progress(1).kill(), Z = 0);
		}, n && (n.vars.lazy = !1, n._initted && !N.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), N.animation = n.pause(), n.scrollTrigger = N, N.scrubDuration(l), Re = 0, o || (o = n.vars.id)), v && ((!wt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Y.style && K.set(O ? [Y, De] : E, { scrollBehavior: "auto" }), V.forEach(function(e) {
			return St(e) && e.target === (O ? J.scrollingElement || De : E) && (e.smooth = !1);
		}), ie = St(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Yt(n) : v.snapTo === "labelsDirectional" ? Zt(n) : v.directional === !1 ? K.utils.snap(v.snapTo) : function(e, t) {
			return Xt(v.snapTo)(e, tt() - re < 500 ? 0 : t.direction);
		}, Ue = v.duration || {
			min: .1,
			max: 2
		}, Ue = wt(Ue) ? Ae(Ue.min, Ue.max) : Ae(Ue, Ue), We = K.delayedCall(v.delay || He / 2 || .1, function() {
			var e = L(), t = tt() - re < 500, r = R.tween;
			if ((t || Math.abs(N.getVelocity()) < 10) && !r && !Pe && ne !== e) {
				var i = (e - B) / pe, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - ze) / (tt() - je) * 1e3 || 0, s = K.utils.clamp(-i, 1 - i, Dt(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = ie(c, N), Ct(l) || (l = c), u = Math.max(0, Math.round(B + l * pe)), e <= se && e >= B && u !== e) {
					if (r && !r._initted && r.data <= Dt(u - e)) return;
					v.inertia === !1 && (s = l - i), R(u, {
						duration: Ue(Dt(Math.max(Dt(c - a), Dt(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Dt(u - e),
						onInterrupt: function() {
							return We.restart(!0) && p && Et(N, p);
						},
						onComplete: function() {
							N.update(), ne = L(), n && !T && (Z ? Z.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Re = ze = n && !T ? n.totalProgress() : N.progress, g && g(N), m && Et(N, m);
						}
					}, e, s * pe, u - e - s * pe), f && Et(N, f, R.tween);
				}
			} else N.isActive && ne !== e && We.restart(!0);
		}).pause()), o && (ln[o] = N), u = N.trigger = ve(u || d !== !0 && d), Je = u && u._gsap && u._gsap.stRevert, Je && (Je = Je(N)), d = d === !0 ? u : ve(d), xt(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === zt || (f = !f && d.parentNode && d.parentNode.style && Ut(d.parentNode).display === "flex" ? !1 : Rt), N.pin = d, z = K.core.getCache(d), z.spacer ? me = z.pinState : (b && (b = ve(b), b && !b.nodeType && (b = b.current || b.nativeElement), z.spacerIsNative = !!b, b && (z.spacerState = Vn(b))), z.spacer = xe = b || J.createElement("div"), xe.classList.add("pin-spacer"), o && xe.classList.add("pin-spacer-" + o), z.pinState = me = Vn(d)), t.force3D !== !1 && K.set(d, { force3D: !0 }), N.spacer = xe = z.spacer, Le = Ut(d), Ee = Le[f + w.os2], Ce = K.getProperty(d), we = K.quickSetter(d, w.a, Ht), Rn(d, xe, Le), ye = Vn(d)), M) {
			W = wt(M) ? Gt(M, nn) : nn, ue = sn("scroller-start", o, E, w, W, 0), de = sn("scroller-end", o, E, w, W, 0, ue), Se = ue["offset" + w.op.d2];
			var Ye = ve(U(E, "content") || E);
			ce = this.markerStart = sn("start", o, Ye, w, W, Se, 0, x), le = this.markerEnd = sn("end", o, Ye, w, W, Se, 0, x), x && (qe = K.quickSetter([ce, le], w.a, Ht)), !k && !(H.length && U(E, "fixedMarkers") === !0) && (Wt(O ? Y : E), K.set([ue, de], { force3D: !0 }), Oe = K.quickSetter(ue, w.a, Ht), Fe = K.quickSetter(de, w.a, Ht));
		}
		if (x) {
			var Xe = x.vars.onUpdate, Ze = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				N.update(0, 0, 1), Xe && Xe.apply(x, Ze || []);
			});
		}
		if (N.previous = function() {
			return Q[Q.indexOf(N) - 1];
		}, N.next = function() {
			return Q[Q.indexOf(N) + 1];
		}, N.revert = function(e, t) {
			if (!t) return N.kill(!0);
			var r = e !== !1 || !N.enabled, i = Ne;
			r !== N.isReverted && (r && (Ge = Math.max(L(), N.scroll.rec || 0), I = N.progress, Ke = n && n.progress()), ce && [
				ce,
				le,
				ue,
				de
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (Ne = N, N.update(r)), d && (!y || !N.isActive) && (r ? Ln(d, xe, me) : Rn(d, xe, Ut(d), X)), r || N.update(r), Ne = i, N.isReverted = r);
		}, N.refresh = function(r, i, a, o) {
			if (!((Ne || !N.enabled) && !i)) {
				if (d && r && rt) {
					$t(e, "scrollEnd", _n);
					return;
				}
				!wn && P && P(N), Ne = N, R.tween && !a && (R.tween.kill(), R.tween = 0), Z && Z.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), N.isReverted || N.revert(!0, !0), N._subPinOffset = !1;
				var s = F(), l = te(), m = x ? x.duration() : yt(E, w), h = pe <= .01 || !pe, g = 0, _ = o || 0, v = wt(a) ? a.end : t.end, b = t.endTrigger || u, S = wt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = N.pinnedContainer = t.pinnedContainer && ve(t.pinnedContainer, N), D = u && Math.max(0, Q.indexOf(N)) || 0, A = D, j, z, ie, V, H, U, W, Se, we, Ee, q, Oe, ke;
				for (M && wt(a) && (Oe = K.getProperty(ue, w.p), ke = K.getProperty(de, w.p)); A-- > 0;) U = Q[A], U.end || U.refresh(0, 1) || (Ne = N), W = U.pin, W && (W === u || W === d || W === C) && !U.isReverted && (Ee || (Ee = []), Ee.unshift(U), U.revert(!0, !0)), U !== Q[A] && (D--, A--);
				for (St(S) && (S = S(N)), S = at(S, "start", N), B = Wn(S, u, s, w, L(), ce, ue, N, l, ee, k, m, x, N._startClamp && "_startClamp") || (d ? -.001 : 0), St(v) && (v = v(N)), xt(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (xt(S) ? S.split(" ")[0] : "") + v : (g = on(v.substr(2), s), v = xt(S) ? S : (x ? K.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, B) : B) + g, b = u)), v = at(v, "end", N), se = Math.max(B, Wn(v || (b ? "100% 0" : m), b, s, w, L() + g, le, de, N, l, ee, k, m, x, N._endClamp && "_endClamp")) || -.001, g = 0, A = D; A--;) U = Q[A] || {}, W = U.pin, W && U.start - U._pinPush <= B && !x && U.end > 0 && (j = U.end - (N._startClamp ? Math.max(0, U.start) : U.start), (W === u && U.start - U._pinPush < B || W === C) && isNaN(S) && (g += j * (1 - U.progress)), W === d && (_ += j));
				if (B += g, se += g, N._startClamp && (N._startClamp += g), N._endClamp && !wn && (N._endClamp = se || -.001, se = Math.min(se, yt(E, w))), pe = se - B || (B -= .01) && .001, h && (I = K.utils.clamp(0, 1, K.utils.normalize(B, se, Ge))), N._pinPush = _, ce && g && (j = {}, j[w.a] = "+=" + g, C && (j[w.p] = "-=" + L()), K.set([ce, le], j)), d && !(Qe && N.end >= yt(E, w))) j = Ut(d), V = w === _e, ie = L(), Te = parseFloat(Ce(w.a)) + _, !m && se > 1 && (q = (O ? J.scrollingElement || De : E).style, q = {
					style: q,
					value: q["overflow" + w.a.toUpperCase()]
				}, O && Ut(Y)["overflow" + w.a.toUpperCase()] !== "scroll" && (q.style["overflow" + w.a.toUpperCase()] = "scroll")), Rn(d, xe, j), ye = Vn(d), z = Kt(d, !0), Se = k && be(E, V ? ge : _e)(), f ? (X = [f + w.os2, pe + _ + Ht], X.t = xe, A = f === Rt ? qt(d, w) + pe + _ : 0, A && (X.push(w.d, A + Ht), xe.style.flexBasis !== "auto" && (xe.style.flexBasis = A + Ht)), Bn(X), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), k && L(Ge)) : (A = qt(d, w), A && xe.style.flexBasis !== "auto" && (xe.style.flexBasis = A + Ht)), k && (H = {
					top: z.top + (V ? ie - B : Se) + Ht,
					left: z.left + (V ? Se : ie - B) + Ht,
					boxSizing: "border-box",
					position: "fixed"
				}, H[Mt] = H["max" + Bt] = Math.ceil(z.width) + Ht, H[Nt] = H["max" + Vt] = Math.ceil(z.height) + Ht, H[zt] = H[zt + It] = H[zt + Pt] = H[zt + Lt] = H[zt + Ft] = "0", H[Rt] = j[Rt], H[Rt + It] = j[Rt + It], H[Rt + Pt] = j[Rt + Pt], H[Rt + Lt] = j[Rt + Lt], H[Rt + Ft] = j[Rt + Ft], he = Hn(me, H, y), wn && L(0)), n ? (we = n._initted, Ve(1), n.render(n.duration(), !0, !0), G = Ce(w.a) - Te + pe + _, Me = Math.abs(pe - G) > 1, k && Me && he.splice(he.length - 2, 2), n.render(0, !0, !0), we || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Ve(0)) : G = pe, q && (q.value ? q.style["overflow" + w.a.toUpperCase()] = q.value : q.style.removeProperty("overflow-" + w.a));
				else if (u && L() && !x) for (z = u.parentNode; z && z !== Y;) z._pinOffset && (B -= z._pinOffset, se -= z._pinOffset), z = z.parentNode;
				Ee && Ee.forEach(function(e) {
					return e.revert(!1, !0);
				}), N.start = B, N.end = se, ae = oe = wn ? Ge : L(), !x && !wn && (ae < Ge && L(Ge), N.scroll.rec = 0), N.revert(!1, !0), re = tt(), We && (ne = -1, We.restart(!0)), Ne = 0, n && T && (n._initted || Ke) && n.progress() !== Ke && n.progress(Ke || 0, !0).render(n.time(), !0, !0), (h || I !== N.progress || x || p || n && !n._initted) && (n && !T && (n._initted || I || n.vars.immediateRender !== !1) && n.totalProgress(x && B < -.001 && !I ? K.utils.normalize(B, se, 0) : I, !0), N.progress = h || (ae - B) / pe === I ? 0 : I), d && f && (xe._pinOffset = Math.round(N.progress * G)), Z && Z.invalidate(), isNaN(Oe) || (Oe -= K.getProperty(ue, w.p), ke -= K.getProperty(de, w.p), Jn(ue, w, Oe), Jn(ce, w, Oe - (o || 0)), Jn(de, w, ke), Jn(le, w, ke - (o || 0))), h && !wn && N.update(), c && !wn && !fe && (fe = !0, c(N), fe = !1);
			}
		}, N.getVelocity = function() {
			return (L() - oe) / (tt() - je) * 1e3 || 0;
		}, N.endAnimation = function() {
			Tt(N.callbackAnimation), n && (Z ? Z.progress(1) : n.paused() ? T || Tt(n, N.direction < 0, 1) : Tt(n, n.reversed()));
		}, N.labelToScroll = function(e) {
			return n && n.labels && (B || N.refresh() || B) + n.labels[e] / n.duration() * pe || 0;
		}, N.getTrailing = function(e) {
			var t = Q.indexOf(N), n = N.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (xt(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return N.direction > 0 ? e.end <= B : e.start >= se;
			});
		}, N.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = wn === !0 ? Ge : N.scroll(), c = e ? 0 : (o - B) / pe, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = N.progress, h, g, b, D, O, M, ee, P;
				if (t && (oe = ae, ae = x ? L() : o, v && (ze = Re, Re = n && !T ? n.totalProgress() : u)), m && d && !Ne && !et && rt && (!u && B < o + (o - oe) / (tt() - je) * m ? u = 1e-4 : u === 1 && se > o + (o - oe) / (tt() - je) * m && (u = .9999)), u !== p && N.enabled) {
					if (h = N.isActive = !!u && u < 1, g = !!p && p < 1, M = h !== g, O = M || !!u != !!p, N.direction = u > p ? 1 : -1, N.progress = u, O && !Ne && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !M && j[b + 1] !== "none" && j[b + 1] || j[b], P = n && (D === "complete" || D === "reset" || D in n))), C && (M || P) && (P || l || !n) && (St(C) ? C(N) : N.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (Z && !Ne && !et ? (Z._dp._time - Z._start !== Z._time && Z.render(Z._dp._time - Z._start), Z.resetTo ? Z.resetTo("totalProgress", u, n._tTime / n._tDur) : (Z.vars.totalProgress = u, Z.invalidate().restart())) : n && n.totalProgress(u, !!(Ne && (re || e)))), d) {
						if (e && f && (xe.style[f + w.os2] = Ee), !k) we(dt(Te + G * u));
						else if (O) {
							if (ee = !e && u > p && se + 1 > o && o + 1 >= yt(E, w), y) if (!e && (h || ee)) {
								var F = Kt(d, !0), te = o - B;
								Kn(d, Y, F.top + (w === _e ? te : 0) + Ht, F.left + (w === _e ? 0 : te) + Ht);
							} else Kn(d, xe);
							Bn(h || ee ? he : ye), Me && u < 1 && h || we(Te + (u === 1 && !ee ? G : 0));
						}
					}
					v && !R.tween && !Ne && !et && We.restart(!0), a && (M || _ && u && (u < 1 || !$e)) && ke(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(N), O && !Ne ? (T && (P && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(N)), (M || !$e) && (s && M && Et(N, s), A[b] && Et(N, A[b]), _ && (u === 1 ? N.kill(!1, 1) : A[b] = 0), M || (b = u === 1 ? 1 : 3, A[b] && Et(N, A[b]))), S && !h && Math.abs(N.getVelocity()) > (Ct(S) ? S : 2500) && (Tt(N.callbackAnimation), Z ? Z.progress(1) : Tt(n, D === "reverse" ? 1 : !u, 1))) : T && i && !Ne && i(N);
				}
				if (Fe) {
					var ne = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					Oe(ne + +!!ue._isFlipped), Fe(ne);
				}
				qe && qe(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, N.enable = function(t, n) {
			N.enabled || (N.enabled = !0, $t(E, "resize", mn), O || $t(E, "scroll", fn), P && $t(e, "refreshInit", P), t !== !1 && (N.progress = I = 0, ae = oe = ne = L()), n !== !1 && N.refresh());
		}, N.getTween = function(e) {
			return e && R ? R.tween : Z;
		}, N.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			N.refresh(!1, !1, {
				start: ot(e, n && !!N._startClamp),
				end: ot(t, n && !!N._endClamp)
			}, r), N.update();
		}, N.adjustPinSpacing = function(e) {
			if (X && e) {
				var t = X.indexOf(w.d) + 1;
				X[t] = parseFloat(X[t]) + e + Ht, X[1] = parseFloat(X[1]) + e + Ht, Bn(X);
			}
		}, N.disable = function(t, n) {
			if (t !== !1 && N.revert(!0, !0), N.enabled && (N.enabled = N.isActive = !1, n || Z && Z.pause(), Ge = 0, z && (z.uncache = 1), P && en(e, "refreshInit", P), We && (We.pause(), R.tween && R.tween.kill() && (R.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== N) return;
				en(E, "resize", mn), O || en(E, "scroll", fn);
			}
		}, N.kill = function(e, r) {
			N.disable(e, r), Z && !r && Z.kill(), o && delete ln[o];
			var i = Q.indexOf(N);
			i >= 0 && Q.splice(i, 1), i === Ie && Mn > 0 && Ie--, i = 0, Q.forEach(function(e) {
				return e.scroller === N.scroller && (i = 1);
			}), i || wn || (N.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), ce && [
				ce,
				le,
				ue,
				de
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Nn === N && (Nn = 0), d && (z && (z.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (z.spacer = 0)), t.onKill && t.onKill(N);
		}, Q.push(N), N.enable(!1, !1), Je && Je(N), n && n.add && !pe) {
			var nt = N.update;
			N.update = function() {
				N.update = nt, V.cache++, B || se || N.refresh();
			}, K.delayedCall(.01, N.update), pe = .01, B = se = 0;
		} else N.refresh();
		d && Dn();
	}, e.register = function(t) {
		return Ee || (K = t || pt(), ft() && window.document && e.enable(), Ee = it), Ee;
	}, e.defaults = function(e) {
		if (e) for (var t in e) rn[t] = e[t];
		return rn;
	}, e.disable = function(e, t) {
		it = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), en(q, "wheel", fn), en(J, "scroll", fn), clearInterval(Me), en(J, "touchcancel", ut), en(Y, "touchstart", ut), Qt(en, J, "pointerdown,touchstart,mousedown", ct), Qt(en, J, "pointerup,touchend,mouseup", lt), Oe.kill(), bt(en);
		for (var n = 0; n < V.length; n += 3) tn(en, V[n], V[n + 1]), tn(en, V[n], V[n + 2]);
	}, e.enable = function() {
		if (q = window, J = document, De = J.documentElement, Y = J.body, K) if (ke = K.utils.toArray, Ae = K.utils.clamp, qe = K.core.context || ut, Ve = K.core.suppressOverwrites || ut, Je = q.history.scrollRestoration || "auto", jn = q.pageYOffset || 0, K.core.globals("ScrollTrigger", e), Y) {
			it = 1, Ye = document.createElement("div"), Ye.style.height = "100vh", Ye.style.position = "absolute", On(), st(), G.register(K), e.isTouch = G.isTouch, Ke = G.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ue = G.isTouch === 1, $t(q, "wheel", fn), X = [
				q,
				J,
				De,
				Y
			], K.matchMedia ? (e.matchMedia = function(e) {
				var t = K.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, K.addEventListener("matchMediaInit", function() {
				xn(), Sn();
			}), K.addEventListener("matchMediaRevert", function() {
				return bn();
			}), K.addEventListener("matchMedia", function() {
				An(0, 1), vn("matchMedia");
			}), K.matchMedia().add("(orientation: portrait)", function() {
				return pn(), pn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), pn(), $t(J, "scroll", fn);
			var t = Y.hasAttribute("style"), n = Y.style, r = n.borderTopStyle, i = K.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = Kt(Y), _e.m = Math.round(a.top + _e.sc()) || 0, ge.m = Math.round(a.left + ge.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Y.setAttribute("style", ""), Y.removeAttribute("style")), Me = setInterval(dn, 250), K.delayedCall(.5, function() {
				return et = 0;
			}), $t(J, "touchcancel", ut), $t(Y, "touchstart", ut), Qt($t, J, "pointerdown,touchstart,mousedown", ct), Qt($t, J, "pointerup,touchend,mouseup", lt), Fe = K.utils.checkPrefix("transform"), In.push(Fe), Ee = tt(), Oe = K.delayedCall(.2, An).pause(), ze = [
				J,
				"visibilitychange",
				function() {
					var e = q.innerWidth, t = q.innerHeight;
					J.hidden ? (Le = e, Re = t) : (Le !== e || Re !== t) && mn();
				},
				J,
				"DOMContentLoaded",
				An,
				q,
				"load",
				An,
				q,
				"resize",
				mn
			], bt($t), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < V.length; o += 3) tn(en, V[o], V[o + 1]), tn(en, V[o], V[o + 2]);
		} else J && J.addEventListener("DOMContentLoaded", function t() {
			e.enable(), J.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && ($e = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Me) || (Me = n) && setInterval(dn, n), "ignoreMobileResize" in t && (Ue = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (bt(en) || bt($t, t.autoRefreshEvents || "none"), Z = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = ve(e), r = V.indexOf(n), i = mt(n);
		~r && V.splice(r, i ? 6 : 2), t && (i ? H.unshift(q, t, Y, t, De, t) : H.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (xt(e) ? ve(e) : e).getBoundingClientRect(), i = r[n ? Mt : Nt] * t || 0;
		return n ? r.right - i > 0 && r.left + i < q.innerWidth : r.bottom - i > 0 && r.top + i < q.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		xt(e) && (e = ve(e));
		var r = e.getBoundingClientRect(), i = r[n ? Mt : Nt], a = t == null ? i / 2 : t in an ? an[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / q.innerWidth : (r.top + a) / q.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = hn.killAll || [];
			hn = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? ke(e).forEach(function(e) {
		if (e && e.style) {
			var t = yn.indexOf(e);
			t >= 0 && yn.splice(t, 5), yn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), K.core.getCache(e), qe());
		}
	}) : yn;
}, $.revert = function(e, t) {
	return Sn(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? mn(!0) : (Ee || $.register()) && An(!0);
}, $.update = function(e) {
	return ++V.cache && Pn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = Cn, $.maxScroll = function(e, t) {
	return yt(e, t ? ge : _e);
}, $.getScrollFunc = function(e, t) {
	return be(ve(e), t ? ge : _e);
}, $.getById = function(e) {
	return ln[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!rt;
}, $.snapDirectional = Xt, $.addEventListener = function(e, t) {
	var n = hn[e] || (hn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = hn[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, $.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = K.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && St(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return St(a) && (a = a(), $t($, "refresh", function() {
		return a = t.batchMax();
	})), ke(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var Xn = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Zn = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (G.isTouch ? " pinch-zoom" : "") : "none", t === De && e(Y, n);
}, Qn = {
	auto: 1,
	scroll: 1
}, $n = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || K.core.getCache(i), o = tt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Y && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Qn[(s = Ut(i)).overflowY] || Qn[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !mt(i) && (Qn[(s = Ut(i)).overflowY] || Qn[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, er = function(e, t, n, r) {
	return G.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && $n,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && $t(J, G.eventTypes[0], rr, !1, !0);
		},
		onDisable: function() {
			return en(J, G.eventTypes[0], rr, !0);
		}
	});
}, tr = /(input|label|select|textarea)/i, nr, rr = function(e) {
	var t = tr.test(e.target.tagName);
	(t || nr) && (e._gsapAllow = !0, nr = t);
}, ir = function(e) {
	wt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = ve(e.target) || De, l = K.core.globals().ScrollSmoother, u = l && l.get(), d = Ke && (e.content && ve(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = be(c, _e), p = be(c, ge), m = 1, h = (G.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, g = 0, _ = St(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = er(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = ut, C = ut, w = function() {
		s = yt(c, _e), C = Ae(+!!Ke, s), n && (S = Ae(0, yt(c, ge))), v = Tn;
	}, T = function() {
		d._gsap.y = dt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = dt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = dt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = V.cache, Pn();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, k, A, j = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && K.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return Ke && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = dt((q.visualViewport && q.visualViewport.scale || 1) / h), D.pause(), e !== m && Zn(c, m > 1.01 || !n && "x"), O = p(), k = f(), w(), v = Tn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) A.restart(!0);
		else {
			V.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Xn(p, i, o, yt(c, ge)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Xn(f, i, o, yt(c, _e)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (Ke && D.vars.scrollY >= s || i >= s - 1) && K.to({}, {
				onUpdate: j,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), tt() - g > 1e3 && (v = 0, g = tt());
	}, e.onChange = function(e, t, r, i, a) {
		if (Tn !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? k + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (k += c - s), f(c);
		}
		(r || t) && Pn();
	}, e.onEnable = function() {
		Zn(c, !n && "x"), $.addEventListener("refresh", j), $t(q, "resize", j), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		Zn(c, !0), en(q, "resize", j), $.removeEventListener("refresh", j), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new G(e), o.iOS = Ke, Ke && !f() && f(1), Ke && K.ticker.add(ut), A = o._dc, D = K.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: qn(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: Pn,
		onComplete: A.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (St(e)) return Q.sort(e);
	var t = q.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + q.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new G(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return He;
	if (e === !0 && He) return He.enable();
	if (e === !1) {
		He && He.kill(), He = e;
		return;
	}
	var t = e instanceof G ? e : ir(e);
	return He && He.target === t.target && He.kill(), mt(t.target) && (He = t), t;
}, $.core = {
	_getVelocityProp: xe,
	_inputObserver: er,
	_scrollers: V,
	_proxies: H,
	bridge: {
		ss: function() {
			rt || vn("scrollStart"), rt = tt();
		},
		ref: function() {
			return Ne;
		}
	}
}, pt() && K.registerPlugin($);
//#endregion
//#region node_modules/gsap/SplitText.js
var ar, or, sr = typeof Symbol == "function" ? Symbol() : "_split", cr, lr = () => cr || Or.register(window.gsap), ur = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, dr = (e) => e ? typeof e == "string" ? dr(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((e, t) => (typeof t == "string" ? e.push(...dr(t)) : e.push(t), e), []) : [e] : [], fr = (e) => dr(e).filter((e) => e && e.nodeType === 1), pr = [], mr = function() {}, hr = { add: (e) => e() }, gr = /\s+/g, _r = /* @__PURE__ */ RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), vr = {
	left: 0,
	top: 0,
	width: 0,
	height: 0
}, yr = (e, t) => {
	for (; ++t < e.length && e[t] === vr;);
	return e[t] || vr;
}, br = ({ element: e, html: t, ariaL: n, ariaH: r }) => {
	e.innerHTML = t, n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label"), r ? e.setAttribute("aria-hidden", r) : e.removeAttribute("aria-hidden");
}, xr = (e, t) => {
	if (t) {
		let n = new Set(e.join("").match(t) || pr), r = e.length, i, a, o, s;
		if (n.size) for (; --r > -1;) {
			a = e[r];
			for (o of n) if (o.startsWith(a) && o.length > a.length) {
				for (i = 0, s = a; o.startsWith(s += e[r + ++i]) && s.length < o.length;);
				if (i && s.length === o.length) {
					e[r] = o, e.splice(r + 1, i);
					break;
				}
			}
		}
	}
	return e;
}, Sr = (e) => window.getComputedStyle(e).display === "inline" && (e.style.display = "inline-block"), Cr = (e, t, n) => t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n), wr = (e, t, n) => {
	let r = t[e + "sClass"] || "", { tag: i = "div", aria: a = "auto", propIndex: o = !1 } = t, s = e === "line" ? "block" : "inline-block", c = r.indexOf("++") > -1, l = (t) => {
		let l = document.createElement(i), u = n.length + 1;
		return r && (l.className = r + (c ? " " + r + u : "")), o && l.style.setProperty("--" + e, u + ""), a !== "none" && l.setAttribute("aria-hidden", "true"), i !== "span" && (l.style.position = "relative", l.style.display = s), l.textContent = t, n.push(l), l;
	};
	return c && (r = r.replace("++", "")), l.collection = n, l;
}, Tr = (e, t, n, r) => {
	let i = wr("line", n, r), a = window.getComputedStyle(e).textAlign || "left";
	return (n, r) => {
		let o = i("");
		for (o.style.textAlign = a, e.insertBefore(o, t[n]); n < r; n++) o.appendChild(t[n]);
		o.normalize();
	};
}, Er = (e, t, n, r, i, a, o, s, c, l) => {
	var u;
	let d = Array.from(e.childNodes), f = 0, { wordDelimiter: p, reduceWhiteSpace: m = !0, prepareText: h } = t, g = e.getBoundingClientRect(), _ = g, v = !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre", y = 0, b = n.collection, x, S, C, w, T, E, D, O, k, A, j, M, ee, N, P, F, te, ne;
	for (typeof p == "object" ? (C = p.delimiter || p, S = p.replaceWith || "") : S = p === "" ? "" : p || " ", x = S !== " "; f < d.length; f++) if (w = d[f], w.nodeType === 3) {
		for (P = w.textContent || "", m ? P = P.replace(gr, " ") : v && (P = P.replace(/\n/g, S + "\n")), h && (P = h(P, e)), w.textContent = P, T = S || C ? P.split(C || S) : P.match(s) || pr, te = T[T.length - 1], O = x ? te.slice(-1) === " " : !te, te || T.pop(), _ = g, D = x ? T[0].charAt(0) === " " : !T[0], D && Cr(" ", e, w), T[0] || T.shift(), xr(T, c), a && l || (w.textContent = ""), k = 1; k <= T.length; k++) if (F = T[k - 1], !m && v && F.charAt(0) === "\n" && ((u = w.previousSibling) == null || u.remove(), Cr(document.createElement("br"), e, w), F = F.slice(1)), !m && F === "") Cr(S, e, w);
		else if (F === " ") e.insertBefore(document.createTextNode(" "), w);
		else {
			if (x && F.charAt(0) === " " && Cr(" ", e, w), y && k === 1 && !D && b.indexOf(y.parentNode) > -1 ? (E = b[b.length - 1], E.appendChild(document.createTextNode(r ? "" : F))) : (E = n(r ? "" : F), Cr(E, e, w), y && k === 1 && !D && E.insertBefore(y, E.firstChild)), r) for (j = ur ? xr([...ur.segment(F)].map((e) => e.segment), c) : F.match(s) || pr, ne = 0; ne < j.length; ne++) E.appendChild(j[ne] === " " ? document.createTextNode(" ") : r(j[ne]));
			if (a && l) {
				if (P = w.textContent = P.substring(F.length + 1, P.length), A = E.getBoundingClientRect(), A.top > _.top && A.left <= _.left) {
					for (M = e.cloneNode(), ee = e.childNodes[0]; ee && ee !== E;) N = ee, ee = ee.nextSibling, M.appendChild(N);
					e.parentNode.insertBefore(M, e), i && Sr(M);
				}
				_ = A;
			}
			(k < T.length || O) && Cr(k >= T.length ? " " : x && F.slice(-1) === " " ? " " + S : S, e, w);
		}
		e.removeChild(w), y = 0;
	} else w.nodeType === 1 && (o && o.indexOf(w) > -1 ? (b.indexOf(w.previousSibling) > -1 && b[b.length - 1].appendChild(w), y = w) : (Er(w, t, n, r, i, a, o, s, c, !0), y = 0), i && Sr(w));
}, Dr = class e {
	constructor(e, t) {
		this.isSplit = !1, lr(), this.elements = fr(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach((e) => {
			var n;
			t.overwrite !== !1 && ((n = e[sr]) == null || n._data.orig.filter(({ element: t }) => t === e).forEach(br)), e[sr] = this;
		}), this._split = () => this.isSplit && this.split(this.vars);
		let n = [], r, i = () => {
			let e = n.length, t;
			for (; e--;) {
				t = n[e];
				let r = t.element.offsetWidth;
				if (r !== t.width) {
					t.width = r, this._split();
					return;
				}
			}
		};
		this._data = {
			orig: n,
			obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
				clearTimeout(r), r = setTimeout(i, 200);
			})
		}, mr(this), this.split(t);
	}
	split(e) {
		return (this._ctx || hr).add(() => {
			this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
			let { type: t = "chars,words,lines", aria: n = "auto", deepSlice: r = !0, smartWrap: i, onSplit: a, autoSplit: o = !1, specialChars: s, mask: c } = this.vars, l = t.indexOf("lines") > -1, u = t.indexOf("chars") > -1, d = t.indexOf("words") > -1, f = u && !d && !l, p = s && ("push" in s ? RegExp("(?:" + s.join("|") + ")", "gu") : s), m = p ? RegExp(p.source + "|" + _r.source, "gu") : _r, h = !!e.ignore && fr(e.ignore), { orig: g, animTime: _, obs: v } = this._data, y;
			(u || d || l) && (this.elements.forEach((t, a) => {
				g[a] = {
					element: t,
					html: t.innerHTML,
					ariaL: t.getAttribute("aria-label"),
					ariaH: t.getAttribute("aria-hidden")
				}, n === "auto" ? t.setAttribute("aria-label", (t.textContent || "").trim()) : n === "hidden" && t.setAttribute("aria-hidden", "true");
				let o = [], s = [], c = [], _ = u ? wr("char", e, o) : null, v = wr("word", e, s), y, b, x, S;
				if (Er(t, e, v, _, f, r && (l || f), h, m, p, !1), l) {
					let n = dr(t.childNodes), r = Tr(t, n, e, c), i, a = [], o = 0, s = n.map((e) => e.nodeType === 1 ? e.getBoundingClientRect() : vr), l = vr, u;
					for (y = 0; y < n.length; y++) i = n[y], i.nodeType === 1 && (i.nodeName === "BR" ? ((!y || n[y - 1].nodeName !== "BR") && (a.push(i), r(o, y + 1)), o = y + 1, l = yr(s, y)) : (u = s[y], y && u.top > l.top && u.left < l.left + l.width - 1 && (r(o, y), o = y), l = u));
					o < y && r(o, y), a.forEach((e) => {
						var t;
						return (t = e.parentNode) == null ? void 0 : t.removeChild(e);
					});
				}
				if (!d) {
					for (y = 0; y < s.length; y++) if (b = s[y], u || !b.nextSibling || b.nextSibling.nodeType !== 3) if (i && !l) {
						for (x = document.createElement("span"), x.style.whiteSpace = "nowrap"; b.firstChild;) x.appendChild(b.firstChild);
						b.replaceWith(x);
					} else b.replaceWith(...b.childNodes);
					else S = b.nextSibling, S && S.nodeType === 3 && (S.textContent = (b.textContent || "") + (S.textContent || ""), b.remove());
					s.length = 0, t.normalize();
				}
				this.lines.push(...c), this.words.push(...s), this.chars.push(...o);
			}), c && this[c] && this.masks.push(...this[c].map((e) => {
				let t = e.cloneNode();
				return e.replaceWith(t), t.appendChild(e), e.className && (t.className = e.className.trim().split(" ").map((e) => e + "-mask").join(" ")), t.style.overflow = "clip", t;
			}))), this.isSplit = !0, or && l && o && or.addEventListener("loadingdone", this._split), (y = a && a(this)) && y.totalTime && (this._data.anim = _ ? y.totalTime(_) : y), l && o && this.elements.forEach((e, t) => {
				g[t].width = e.offsetWidth, v && v.observe(e);
			});
		}), this;
	}
	kill() {
		let { obs: e } = this._data;
		e && e.disconnect(), or == null || or.removeEventListener("loadingdone", this._split);
	}
	revert() {
		var e, t;
		if (this.isSplit) {
			let { orig: n, anim: r } = this._data;
			this.kill(), n.forEach(br), this.chars.length = this.words.length = this.lines.length = n.length = this.masks.length = 0, this.isSplit = !1, r && (this._data.animTime = r.totalTime(), r.revert()), (t = (e = this.vars).onRevert) == null || t.call(e, this);
		}
		return this;
	}
	static create(t, n) {
		return new e(t, n);
	}
	static register(e) {
		ar = ar || e || window.gsap, ar && (dr = ar.utils.toArray, mr = ar.core.context || mr), !cr && window.innerWidth > 0 && (or = document.fonts, cr = !0);
	}
};
Dr.version = "3.15.0";
var Or = Dr, kr = "[data-reveal], h2", Ar = ".fwm-modal, [data-modal], .site-lightbox, [data-site-lightbox]", jr = "data-reveal", Mr = "data-reveal-delay", Nr = "data-reveal-stagger", Pr = "data-reveal-trigger", Fr = "data-reveal-pending", Ir = "data-reveal-ready", Lr = "fw-reveal-tight", Rr = "fw-ln", zr = "fw-wd", Br = "fw-ch", Vr = 1.1, Hr = .25, Ur = "top bottom-=15%", Wr = "expo.out", Gr = 1.618033988749895;
function Kr(e) {
	return Math.round(.1 * Gr ** (e - 1) * 1e3) / 1e3;
}
var qr = Kr(6), Jr = {
	lines: Kr(1),
	words: Kr(1),
	chars: Kr(2) - Kr(1)
}, Yr = !1;
function Xr() {
	Yr || (Yr = !0, b.registerPlugin(Or, $));
}
function Zr() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function Qr(e) {
	var t;
	let n = (t = e.getAttribute(jr)) == null ? void 0 : t.trim();
	return n === "words" || n === "chars" || n === "lines" ? n : "lines";
}
function $r(e) {
	return e.hasAttribute(Ir) || e.hasAttribute(Fr) || e.getAttribute(jr) === "off" ? !1 : e.closest(Ar) === null;
}
function ei(e, t) {
	let n = e.getAttribute(t);
	if (n === null || n.trim() === "") return null;
	let r = Number.parseFloat(n);
	return Number.isFinite(r) ? r : null;
}
function ti(e) {
	return e.getAttribute(Pr) !== "false";
}
function ni(e) {
	let t = window.getComputedStyle(e), n = t.lineHeight.trim(), r = Number.parseFloat(t.fontSize);
	if (n === "normal" || !Number.isFinite(r) || r <= 0) return !1;
	let i = Number.parseFloat(n);
	return !Number.isFinite(i) || i <= 0 ? !1 : (n.endsWith("px") ? i / r : i) <= Vr;
}
function ri(e) {
	var t, n;
	let r = Qr(e), i = (t = ei(e, Mr)) == null ? 0 : t, a = (n = ei(e, Nr)) == null ? Jr[r] : n, o = ti(e), s = ni(e);
	e.classList.toggle(Lr, s);
	let c = s ? Hr * Number.parseFloat(window.getComputedStyle(e).fontSize) : 0, l = !1;
	Or.create(e, {
		type: r === "lines" ? "lines" : `lines,${r}`,
		mask: "lines",
		tag: "span",
		linesClass: Rr,
		wordsClass: zr,
		charsClass: Br,
		smartWrap: !0,
		autoSplit: !0,
		onSplit: (t) => {
			e.removeAttribute(Fr), e.setAttribute(Ir, "");
			let n = t[r];
			if (c > 0 && t.lines.forEach((e) => {
				let t = e.parentElement;
				t && (t.style.overflowClipMargin = `${Math.round(c)}px`);
			}), !l) return b.set(n, {
				yPercent: 101,
				y: Math.round(c)
			}), b.to(n, {
				yPercent: 0,
				y: 0,
				duration: qr,
				ease: Wr,
				stagger: a,
				delay: i,
				onComplete: () => {
					l = !0;
				},
				...o && { scrollTrigger: {
					trigger: e,
					start: Ur,
					once: !0
				} }
			});
		}
	});
}
function ii(e = document) {
	let t = o(kr, e).filter($r);
	t.length === 0 || u() || (Xr(), t.forEach((e) => e.setAttribute(Fr, "")), Zr().then(() => {
		t.forEach((e) => {
			e.isConnected && ri(e);
		}), $.refresh();
	}));
}
//#endregion
//#region src/modules/lightbox.ts
var ai = "[data-lightbox-src]", oi = "js-lightbox", si = `.${oi}`, ci = `${ai}, ${si}`, li = "[data-site-lightbox]", ui = "[data-lightbox-close]", di = "[data-lightbox-prev]", fi = "[data-lightbox-next]", pi = "[data-lightbox-auto-icon]", mi = "site-lightbox-trigger", hi = "site-lightbox-trigger__image", gi = "site-lightbox-trigger__icon", _i = "w-dyn-bind-empty", vi = "/plugins/Basic/assets/placeholder.", yi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", bi = !1, xi = null, Si = null, Ci = [], wi = 0, Ti = !1, Ei = null;
function Di(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return Oi(e);
	let n = s("img", e);
	return n ? Oi(n) : "";
}
function Oi(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(_i) || t.includes(vi) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ki(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Ai(e) {
	let t = Di(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		alt: ki(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ji(e) {
	let t = Ai(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(ci).filter((e) => r(e, "data-lightbox-group") === t.group).map(Ai).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function Mi() {
	let e = document.createElement("span");
	return e.className = gi, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = yi, e;
}
function Ni(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function Pi(e) {
	if (!Ni(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = xi == null ? void 0 : xi.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Fi(e) {
	if (e.closest(`.${mi}`) || !Di(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${mi} ${oi}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group"
	]) {
		let i = r(e, n);
		i && (t.setAttribute(n, i), e.removeAttribute(n));
	}
	e.classList.remove(oi), e.classList.add(hi), e.before(t), t.append(e, Mi()), Pi(t);
}
function Ii(e) {
	if (e instanceof HTMLImageElement) {
		Fi(e);
		return;
	}
	Di(e).trim() && (e.classList.add(mi), Pi(e), s(pi, e) || e.append(Mi()));
}
function Li() {
	o(si).forEach(Ii);
}
function Ri(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function zi() {
	var e, t, n, r, i, a;
	if (Si) return Bi(Si), Si;
	let o = s(li), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = xi == null ? void 0 : xi.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = Ri((l = xi == null ? void 0 : xi.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = Ri((u = xi == null ? void 0 : xi.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = Ri((d = xi == null ? void 0 : xi.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0, r.append(i, a), c.append(e, t, r, n), document.body.append(c);
	}
	let f = {
		root: c,
		image: (t = s("[data-lightbox-image]", c)) == null ? document.createElement("img") : t,
		caption: (n = s("[data-lightbox-caption-output]", c)) == null ? document.createElement("figcaption") : n,
		closeButton: (r = s(ui, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(di, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(fi, c)) == null ? document.createElement("button") : a
	};
	return Si = f, Bi(f), !o && !document.body.contains(c) && document.body.append(c), f;
}
function Bi(e) {
	var t, n, r, i;
	let a = (t = xi == null ? void 0 : xi.t("close", "Close")) == null ? "Close" : t, o = (n = xi == null ? void 0 : xi.t("previous", "Previous")) == null ? "Previous" : n, s = (r = xi == null ? void 0 : xi.t("next", "Next")) == null ? "Next" : r, c = (i = xi == null ? void 0 : xi.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function Vi() {
	let e = zi(), t = Ci[wi];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = Ci.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(wi), e.root.dataset.lightboxCount = String(Ci.length);
}
function Hi(e) {
	let t = zi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function Ui(e) {
	Ci.length < 2 || (wi = (e + Ci.length) % Ci.length, Vi());
}
function Wi() {
	Ui(wi + 1);
}
function Gi() {
	Ui(wi - 1);
}
function Ki(e) {
	var t;
	let n = ji(e);
	if (!n) return;
	let r = Ti;
	Ci = n.items, wi = n.index, Ei = e, Ti = !0, Vi(), Hi(!0), r || p();
	let i = zi();
	m(i.closeButton || i.root);
	let a = Ci[wi];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: wi,
		count: Ci.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function qi() {
	var t;
	if (!Ti || !Si) return;
	let r = Si, i = Ei, a = (t = Ci[wi]) == null ? null : t;
	Hi(!1), n(), Ti = !1, Ci = [], wi = 0, Ei = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function Ji(e) {
	if (!(!Ti || !Si)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), qi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), Wi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), Gi();
			return;
		}
		y(Si.root, e);
	}
}
function Yi(e) {
	!Ti || !Si || e.target === Si.root && qi();
}
function Xi(e) {
	return xi = e.i18n, Li(), bi || (g(document, "click", ci, (e, t) => {
		e.preventDefault(), Ki(t);
	}), g(document, "keydown", si, (e, t) => {
		Ni(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Ki(t));
	}), g(document, "click", ui, (e) => {
		e.preventDefault(), qi();
	}), g(document, "click", di, (e) => {
		e.preventDefault(), Gi();
	}), g(document, "click", fi, (e) => {
		e.preventDefault(), Wi();
	}), document.addEventListener("click", Yi), document.addEventListener("keydown", Ji, !0), bi = !0), {
		openLightbox: Ki,
		closeLightbox: qi
	};
}
//#endregion
//#region src/modules/modal.ts
var Zi = "[data-modal]", Qi = "[data-modal-content]", $i = "[data-modal-open]", ea = "[data-modal-close]", ta = "a[href^=\"#modal:\"]", na = "#modal:", ra = 220, ia = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", aa = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", oa = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", sa = !1, ca = !0, la = null, ua = null, da = "", fa = null, pa = null, ma = /* @__PURE__ */ new Map();
function ha(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(na) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function ga() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(ea),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = ia, t.lightboxIcon.innerHTML = aa, va(t), t;
}
function _a() {
	return (!ua || !document.body.contains(ua.root)) && (ua = ga()), va(ua), ua;
}
function va(e) {
	var t, n;
	let r = (t = la == null ? void 0 : la.t("close", "Close")) == null ? "Close" : t, i = (n = la == null ? void 0 : la.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function ya(e) {
	return (e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || "";
}
function ba(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function xa(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = ba(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = ya(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Sa(e) {
	var t, n, r;
	let i = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = ba(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: ya(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = ba(e, "[data-modal-image]"), s = ya(a);
	return s ? [{
		src: s,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function Ca(e) {
	var t, n, i, a, o, s, c, l;
	let u = r(e, "data-modal-content");
	if (!u) return null;
	let d = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", f = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, p = Sa(e), m = p[0], h = e.querySelector("[data-modal-body]");
	return {
		id: u,
		address: d,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: f,
		image: (o = m == null ? void 0 : m.src) == null ? "" : o,
		imageAlt: (s = m == null ? void 0 : m.alt) == null ? "" : s,
		caption: (c = m == null ? void 0 : m.caption) == null ? "" : c,
		html: (l = h == null ? void 0 : h.innerHTML) == null ? "" : l,
		work: xa(e),
		gallery: p
	};
}
function wa(e) {
	var t, n, i, a, o, s, c, l;
	let u = r(e, "data-modal");
	if (!u) return null;
	let d = e.querySelector(".fwm-modal__image"), f = ya(d), p = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return {
		id: u,
		address: (i = (a = e.querySelector(".fwm-modal__address")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i,
		layout: "default",
		headline: "",
		image: f,
		imageAlt: (o = d == null ? void 0 : d.alt) == null ? "" : o,
		caption: p,
		html: (s = (c = e.querySelector(".fwm-modal__text")) == null ? void 0 : c.innerHTML) == null ? "" : s,
		work: null,
		gallery: f ? [{
			src: f,
			alt: (l = d == null ? void 0 : d.alt) == null ? "" : l,
			caption: p
		}] : []
	};
}
function Ta() {
	o(Qi).forEach((e) => {
		let t = Ca(e);
		t && ma.set(t.id, t);
	}), o(Zi).forEach((e) => {
		let t = wa(e);
		t && ma.set(t.id, t), e.remove();
	});
}
function Ea(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(Qi).find((e) => r(e, "data-modal-content") === n), a = i ? Ca(i) : null;
	return a && ma.set(n, a), (t = a == null ? ma.get(n) : a) == null ? null : t;
}
function Da(e) {
	let t = document.createElement(e.href ? "a" : "article"), n = document.createElement("span"), r = document.createElement("span"), i = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span");
	if (t.className = "fwm-modal__work-card", e.href && t.setAttribute("href", e.href), e.thumbnail) {
		let r = document.createElement("img");
		r.className = "fwm-modal__work-image", r.src = e.thumbnail, r.alt = e.thumbnailAlt, r.loading = "lazy", r.decoding = "async", n.className = "fwm-modal__work-image-wrap", n.append(r), t.append(n);
	}
	if (i.className = "fwm-modal__work-meta", a.className = "fwm-modal__work-title", a.textContent = e.title, e.title && i.append(a), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, i.append(t);
	}
	return r.className = "fwm-modal__work-footer", o.className = "fwm-modal__work-icon", o.innerHTML = oa, r.append(i, o), t.append(r), t;
}
function Oa(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = aa, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function ka(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function Aa(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, ka(e);
}
function ja(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(Da(t.work)), i.forEach((t, n) => {
		e.gallery.append(Oa(t, n));
	});
}
function Ma(e) {
	let t = _a();
	return e.layout === "context" ? ja(t, e) : Aa(t, e), t;
}
function Na(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function Pa(e) {
	pa !== null && (window.clearTimeout(pa), pa = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function Fa(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), pa = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), pa = null;
	}, ra), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function Ia(e, t) {
	var n, r, i, a, o, s, l, u, f, m, h;
	let g = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (r = e.layout) == null ? "default" : r,
		headline: (i = e.headline) == null ? "" : i,
		image: (a = e.image) == null ? "" : a,
		imageAlt: (o = e.imageAlt) == null ? "" : o,
		caption: (s = e.caption) == null ? "" : s,
		html: (l = e.html) == null ? "" : l,
		work: (u = e.work) == null ? null : u,
		gallery: (f = e.gallery) != null && f.length ? e.gallery : e.image ? [{
			src: e.image,
			alt: (m = e.imageAlt) == null ? "" : m,
			caption: (h = e.caption) == null ? "" : h
		}] : []
	};
	if (!g.id) return;
	da && Ra(), ma.set(g.id, g), fa = t == null ? c() : t, da = g.id;
	let _ = Ma(g);
	Pa(_), p(), Na(_), d(_.root, "site:modal-open", {
		id: da,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function La(e, t) {
	let n = Ea(e);
	n && Ia(n, t);
}
function Ra() {
	if (!da || !ua) return;
	let t = da, r = fa;
	Fa(ua), n(), da = "", fa = null, d(ua.root, "site:modal-close", {
		id: t,
		modal: ua.root
	}), e(r);
}
function za(e) {
	if (!(!da || !ua) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), Ra();
			return;
		}
		y(ua.panel, e);
	}
}
function Ba(e) {
	if (!ca || !da || !ua) return;
	let t = e.target;
	!i(t) || t !== ua.root || Ra();
}
function Va(e) {
	var n;
	return ca = (n = e.closeOnBackdrop) == null || n, la = e.i18n, Ta(), _a(), sa || (g(document, "click", $i, (e, n) => {
		e.preventDefault(), La(t(n, "data-modal-open"), n);
	}), g(document, "click", ta, (e, t) => {
		e.preventDefault(), La(ha(t), t);
	}), g(document, "click", ea, (e, t) => {
		ua != null && ua.root.contains(t) && (e.preventDefault(), Ra());
	}), document.addEventListener("click", Ba), document.addEventListener("keydown", za), sa = !0), {
		openModal: La,
		openContentModal: Ia,
		closeModal: Ra
	};
}
//#endregion
//#region src/modules/page-transition.ts
var Ha = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, Ua = "page-transition-overlay", Wa = "[data-page-transition-overlay], .page-transition-overlay", Ga = "site-page-transition", Ka = "pending", qa = "is-page-transition-pending", Ja = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-flip]",
	"[data-work-flip-back]",
	"[download]"
].join(","), Ya = !1, Xa = !1;
function Za(e) {
	document.documentElement.classList.toggle(qa, e);
}
function Qa() {
	try {
		Za(window.sessionStorage.getItem(Ga) === Ka);
	} catch (e) {
		Za(!1);
	}
}
function $a() {
	let e = document.querySelector(Wa);
	if (e) return e.classList.add(Ua), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = Ua, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function eo(e) {
	var t;
	return !!(e.closest(Ja) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function to(e, t) {
	return !Xa && !e.defaultPrevented && !l(e) && !eo(t);
}
function no() {
	try {
		window.sessionStorage.setItem(Ga, Ka), Za(!0);
	} catch (e) {}
}
function ro() {
	try {
		let e = window.sessionStorage.getItem(Ga) === Ka;
		return window.sessionStorage.removeItem(Ga), Za(!1), e;
	} catch (e) {
		return Za(!1), !1;
	}
}
function io(e) {
	if (u() || !ro()) {
		b.set(e, {
			yPercent: -100,
			y: 0
		});
		return;
	}
	b.fromTo(e, {
		yPercent: 0,
		y: 0
	}, {
		yPercent: 100,
		delay: Ha.holdDuration,
		duration: Ha.revealDuration,
		ease: Ha.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			});
		}
	});
}
function ao(e, t) {
	Xa = !0, no(), b.killTweensOf(t), b.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: Ha.coverDuration,
		ease: Ha.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	});
}
function oo(e, t) {
	e.persisted && (Xa = !1, ro(), b.set(t, {
		yPercent: -100,
		y: 0
	}));
}
function so() {
	if (Ya) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", so, { once: !0 });
		return;
	}
	Ya = !0;
	let e = $a();
	io(e), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (Xa) {
			t.preventDefault();
			return;
		}
		if (!to(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), ao(i, e));
	}, !0), window.addEventListener("pageshow", (t) => oo(t, e));
}
Qa();
//#endregion
//#region src/modules/site-menu.ts
var co = "[data-site-menu]", lo = "[data-site-menu-panel]", uo = "[data-site-menu-toggle]", fo = "[data-site-menu-toggle-label]", po = "[data-site-menu-link]", mo = "[data-site-menu-indicator]", ho = "is-active", go = "is-open", _o = "is-ready", vo = "data-site-menu-open-label", yo = "data-site-menu-closed-label", bo = "data-site-menu-current-key", xo = "data-site-menu-label", So = "data-site-menu-key", Co = "data-site-menu-original-tabindex", wo = "CLOSE", To = "MENU", Eo = [], Do = !1;
function Oo(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function ko(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Oo(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Ao(e, t) {
	return t ? r(e, So) === t : !1;
}
function jo(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Ao(e, r(t, bo) || ((n = document.documentElement.getAttribute(bo)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(bo)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = ko(e);
	return a ? a === Oo(window.location.pathname) : !1;
}
function Mo(e) {
	var t, n;
	return r(e, xo) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function No(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(ho) || e.classList.contains("w--current"))) == null ? e.links.find((t) => jo(t, e.root)) : t;
	return n ? Mo(n) : "";
}
function Po(e, t = !0) {
	var n;
	let i = r(e.root, vo) || wo, a = r(e.root, yo) || To, o = No(e), s = e.isOpen ? i : e.isHovered ? a : o || a, c = (n = e.toggleLabel) == null ? e.toggle : n;
	if (c.textContent !== s) {
		if (b.killTweensOf(c), u() || !t) {
			c.textContent = s, b.set(c, { clearProps: "opacity" });
			return;
		}
		b.to(c, {
			opacity: 0,
			duration: .08,
			ease: "power1.out",
			onComplete: () => {
				c.textContent = s, b.to(c, {
					opacity: 1,
					duration: .12,
					ease: "power1.in",
					onComplete: () => {
						b.set(c, { clearProps: "opacity" });
					}
				});
			}
		});
	}
}
function Fo(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Co);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Co) && e.hasAttribute("tabindex") && e.setAttribute(Co, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Io(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(go, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Fo(e, t), Po(e, n);
}
function Lo(e, t, n) {
	b.killTweensOf(e.panel), b.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	u() || b.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? .38 : .28,
		ease: t ? "power3.out" : "power2.inOut",
		onComplete: () => {
			b.set(e.panel, { clearProps: "height" });
		}
	});
}
function Ro(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Io(e, !0), Lo(e, !0, t);
}
function zo(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Io(e, !1), Lo(e, !1, t);
}
function Bo(e) {
	e.isOpen ? zo(e) : Ro(e);
}
function Vo(e) {
	e.links.forEach((t) => {
		let n = jo(t, e.root), r = s(mo, t);
		t.classList.toggle(ho, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function Ho(e) {
	var t;
	let n = s(lo, e), r = s(uo, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(fo, r)) == null ? s(fo, e) : t,
		links: o(po, e),
		isOpen: e.classList.contains(go),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Eo.length + 1}`), r.setAttribute("aria-controls", n.id), Vo(i), Io(i, i.isOpen, !1), e.classList.add(_o);
	let a = (e) => {
		e.preventDefault(), Bo(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || zo(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (zo(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(po) || zo(i);
	}, d = () => {
		i.isHovered = !0, Po(i);
	}, f = () => {
		i.isHovered = !1, Po(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function Uo(e = document) {
	if (Do && e === document) return () => void 0;
	e === document && (Do = !0);
	let t = o(co, e).map(Ho).filter((e) => !!e);
	return Eo.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(_o, go), b.killTweensOf(e.panel), b.killTweensOf((t = e.toggleLabel) == null ? e.toggle : t), b.set(e.panel, { clearProps: "height" }), b.set((n = e.toggleLabel) == null ? e.toggle : n, { clearProps: "opacity" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Fo(e, !0);
		});
	};
}
//#endregion
//#region node_modules/gsap/utils/matrix.js
var Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo = "transform", $o = Qo + "Origin", es, ts = function(e) {
	var t = e.ownerDocument || e;
	for (!(Qo in e.style) && ("msTransform" in e.style) && (Qo = "msTransform", $o = Qo + "Origin"); t.parentNode && (t = t.parentNode););
	if (Go = window, Xo = new ms(), t) {
		Wo = t, Ko = t.documentElement, qo = t.body, Zo = Wo.createElementNS("http://www.w3.org/2000/svg", "g"), Zo.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", es = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, ns = function(e) {
	for (var t, n; e && e !== qo;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, rs = [], is = [], as = function() {
	return Go.pageYOffset || Wo.scrollTop || Ko.scrollTop || qo.scrollTop || 0;
}, os = function() {
	return Go.pageXOffset || Wo.scrollLeft || Ko.scrollLeft || qo.scrollLeft || 0;
}, ss = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, cs = function e(t) {
	if (Go.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, ls = function e(t, n) {
	if (t.parentNode && (Wo || ts(t))) {
		var r = ss(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = Wo.createElementNS ? Wo.createElementNS(i.replace(/^https/, "http"), a) : Wo.createElement(a);
		return n && (r ? (Yo || (Yo = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), Yo.appendChild(l)) : (Jo || (Jo = e(t), Object.assign(Jo.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), Jo.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, us = function(e) {
	for (var t = new ms(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, ds = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[Qo], e.style[Qo] = "none", e.appendChild(Zo), t = Zo.getCTM(), e.removeChild(Zo), n ? e.style[Qo] = n : e.style.removeProperty(Qo.replace(/([A-Z])/g, "-$1").toLowerCase())), t || Xo.clone();
}, fs = function(e, t) {
	var n = ss(e), r = e === n, i = n ? rs : is, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === Go) return e;
	if (i.length || i.push(ls(e, 1), ls(e, 2), ls(e, 3)), s = n ? Yo : Jo, n) r ? (l = ds(e), u = -l.e / l.a, d = -l.f / l.d, c = Xo) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? us(c) : c.getItem(0).matrix : Xo, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new ms(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, es) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (Go.getComputedStyle(l)[Qo] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = Go.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[Qo] = f[Qo], l[$o] = f[$o], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, ps = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, ms = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), ps(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return ps(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return ps(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
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
function hs(e, t, n, r) {
	if (!e || !e.parentNode || (Wo || ts(e)).documentElement === e) return new ms();
	var i = ns(e), a = ss(e) ? rs : is, o = fs(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && cs(e), f = new ms((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : os()), s.top + (d ? 0 : as()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region node_modules/gsap/Flip.js
var gs = 1, _s, vs, ys, bs, xs, Ss, Cs, ws = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, Ts = {}, Es = 180 / Math.PI, Ds = Math.PI / 180, Os = {}, ks = {}, As = {}, js = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, Ms = js("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Ns = js("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), Ps = function(e) {
	return _s(e)[0] || console.warn("Element not found:", e);
}, Fs = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, Is = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, Ls = {
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
}, Rs = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, zs = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, Bs = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, Vs = {}, Hs = function(e) {
	var t = Vs[e] = js(e);
	return As[e] = t.concat(Ns), t;
}, Us = function(e) {
	var t = e._gsap || vs.core.getCache(e);
	return t.gmCache === vs.ticker.frame ? t.gMatrix : (t.gmCache = vs.ticker.frame, t.gMatrix = hs(e, !0, !1, !0));
}, Ws = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, Gs = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = Ws(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, Ks = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : ks[a] || (ks[a] = zs(a)), o);
	return n;
}, qs = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, Js = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(qs);
}, Ys = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Xs = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), ys && n !== 1) return ys._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), ys._final.push(function() {
		return (e.cache.uncache = 1) && qs(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (Ks(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), Ks(e, Ys), f = window.getComputedStyle(r); l--;) c[Ys[l]] = f[Ys[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new yc(r);
	else if (u = Bs(e, Os), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new ms(1, 0, 0, 1, p.left + os(), p.top + as());
	} else u.matrix = hs(r, !1, !1, !0);
	return u = oc(u, e, !0), e.x = Ss(u.x, .01), e.y = Ss(u.y, .01), r;
}, Zs = function(e, t) {
	return t !== !0 && (t = _s(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, Qs = function(e) {
	return Gs(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && Xs(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, $s = function(e, t) {
	return t && e.idLookup[ec(t).id] || e.elementStates[0];
}, ec = function(e, t, n, r) {
	return e instanceof yc ? e : e instanceof vc ? $s(e, r) : new yc(typeof e == "string" ? Ps(e) || console.warn(e + " not found") : e, t, n);
}, tc = function(e, t) {
	for (var n = vs.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, nc = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, rc = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + gs++), t;
}, ic = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, ac = function(e, t, n) {
	return e && t.length && n.add(e(ic(t), n, new vc(t, 0, !0)), 0);
}, oc = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && Cs && Cs(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, C = !S && e.simple && t.simple && !i, w, T, E, D, O, k, A;
	return C || !c ? (p = m = 1, h = w = 0) : (O = Us(c), k = O.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = Fs(Math.atan2(k.b, k.a) * Es), w = Fs(Math.atan2(k.c, k.d) * Es + h) % 360, p = Math.sqrt(k.a ** 2 + k.b ** 2), m = Math.sqrt(k.c ** 2 + k.d ** 2) * Math.cos(w * Ds), i && (i = _s(i)[0], D = vs.getProperty(i), A = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: D("scaleX"),
		scaleY: D("scaleY"),
		width: A ? A.width : Math.ceil(parseFloat(D("width", "px"))),
		height: A ? A.height : parseFloat(D("height", "px"))
	}), s.rotation = h + "deg", s.skewX = w + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = Ss(d * p / v.scaleX, 0), f = Ss(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && nc(o, t.props), C || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), k = hs(i || o, !1, !1, !0), T = O.apply({
		x: k.e,
		y: k.f
	}), E = O.apply({
		x: b,
		y: x
	}), l += E.x - T.x, u += E.y - T.y) : (O.e = O.f = 0, E = O.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += E.x, u += E.y), l = Ss(l, .02), u = Ss(u, .02), a && !(a instanceof yc) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = w, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, sc = function(e, t) {
	return e instanceof vc ? e : new vc(e, t);
}, cc = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, lc = [], uc = "width,height,overflowX,overflowY".split(","), dc, fc = function(e) {
	if (e !== dc) {
		var t = xs.style, n = xs.clientWidth === window.outerWidth, r = xs.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) lc[i] = t[uc[i]];
			n && (t.width = xs.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = xs.clientHeight + "px", t.overflowX = "hidden"), dc = e;
		} else if (dc) {
			for (; i--;) lc[i] ? t[uc[i]] = lc[i] : t.removeProperty(zs(uc[i]));
			dc = e;
		}
	}
}, pc = function(e, t) {
	for (var n = 0; n < e.length; n += 3) vs.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, mc = function(e, t, n, r) {
	e instanceof vc && t instanceof vc || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, C = i.prune, w = ("props" in n ? n : e).props, T = Bs(n, Ls), E = vs.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), D = T, O = [], k = [], A = [], j = [], M = S === !0 ? 1 : S || 0, ee = typeof S == "function" ? S : function() {
		return M;
	}, N = e.interrupted || t.interrupted, P = E[r === 1 ? "from" : "to"], F, te, ne, re, I, L, R, z, ie, ae, oe, B, V, H;
	for (te in t.idLookup) oe = t.alt[te] ? cc(t, e, te) : t.idLookup[te], I = oe.element, ae = e.idLookup[te], e.alt[te] && I === ae.element && (e.alt[te].isVisible || !oe.isVisible) && (ae = e.alt[te]), ae ? (L = {
		t: I,
		b: ae,
		a: oe,
		sd: ae.element === I ? 0 : oe.isVisible ? 1 : -1
	}, A.push(L), L.sd && (L.sd < 0 && (L.b = oe, L.a = ae), N && Ks(L.b, w ? As[w] : Ns), b && A.push(L.swap = {
		t: ae.element,
		b: L.b,
		a: L.a,
		sd: -L.sd,
		swap: L
	})), I._flip = ae.element._flip = ys ? ys.timeline : E) : oe.isVisible && (A.push({
		t: I,
		b: Bs(oe, { isVisible: 1 }),
		a: oe,
		sd: 0,
		entering: 1
	}), I._flip = ys ? ys.timeline : E);
	if (w && (Vs[w] || Hs(w)).forEach(function(e) {
		return T[e] = function(t) {
			return A[t].a.props[e];
		};
	}), A.finalStates = ie = [], B = function() {
		Gs(A), fc(!0);
		var t = [];
		for (re = 0; re < A.length; re++) L = A[re], V = L.a, H = L.b, C && !V.isDifferent(H) && !L.entering ? A.splice(re--, 1) : (I = L.t, _ && !(L.sd < 0) && re && (V = L.a = V.clone({ matrix: hs(I, !1, !1, !0) })), H.isVisible && V.isVisible ? (L.sd < 0 ? (_ && pc(t, 1), R = new yc(I, w, e.simple), oc(R, V, y, 0, 0, R), R.matrix = hs(I, !1, !1, !0), R.bounds = I.getBoundingClientRect(), R.css = L.b.css, L.a = V = R, b && (I.style.opacity = N ? H.opacity : V.opacity), x && j.push(I), _ && (pc(t, 2), t.push(I, I.getAttribute("style")))) : L.sd > 0 && b && (I.style.opacity = N ? V.opacity - H.opacity : "0"), oc(V, H, y, w), _ && L.sd < 0 && t.push(I.getAttribute("style"))) : H.isVisible !== V.isVisible && (H.isVisible ? V.isVisible || (H.css = V.css, k.push(H), A.splice(re--, 1), c && _ && oc(V, H, y, w)) : (V.isVisible && O.push(V), A.splice(re--, 1))), y || (I.style.maxWidth = Math.max(V.width, H.width) + "px", I.style.maxHeight = Math.max(V.height, H.height) + "px", I.style.minWidth = Math.min(V.width, H.width) + "px", I.style.minHeight = Math.min(V.height, H.height) + "px"), _ && g && I.classList.add(g)), ie.push(V);
		var r;
		if (g && (r = ie.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), fc(!1), y ? (T.scaleX = function(e) {
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
			return A[e].a.rotation + (S ? ee(e, z[e], z) * 360 : 0);
		}, T.skewX = function(e) {
			return A[e].a.skewX;
		}, z = A.map(function(e) {
			return e.t;
		}), (v || v === 0) && (T.modifiers = { zIndex: function() {
			return v;
		} }, T.zIndex = v, T.immediateRender = n.immediateRender !== !1), b && (T.opacity = function(e) {
			return A[e].sd < 0 ? 0 : A[e].sd > 0 ? A[e].a.opacity : "+=0";
		}), j.length) {
			x = vs.utils.distribute(x);
			var i = z.slice(j.length);
			T.stagger = function(e, t) {
				return x(~j.indexOf(t) ? z.indexOf(A[e].swap.t) : e, t, i);
			};
		}
		if (Ms.forEach(function(e) {
			return n[e] && E.eventCallback(e, n[e], n[e + "Params"]);
		}), u && z.length) for (te in D = Bs(T, Ls), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) F = Bs(u[te], Rs), F[te] = T[te], !("duration" in F) && "duration" in T && (F.duration = T.duration), F.stagger = T.stagger, P.call(E, z, F, 0), delete D[te];
		(z.length || k.length || O.length) && (g && E.add(function() {
			return Is(r, g, E._zTime < 0 ? "remove" : "add");
		}, 0) && !f && Is(r, g, "add"), z.length && P.call(E, z, D, 0)), ac(o, O, E), ac(s, k, E);
		var l = ys && ys.timeline;
		l && (l.add(E, 0), ys._final.push(function() {
			return Js(A, !a);
		})), ne = E.duration(), E.call(function() {
			var e = E.time() >= ne;
			e && !l && Js(A, !a), g && Is(r, g, e ? "remove" : "add");
		});
	}, l && (c = A.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), ys) {
		var se;
		c && (se = ys._abs).push.apply(se, Zs(A, c)), ys._run.push(B);
	} else c && Qs(Zs(A, c)), B();
	var ce = ys ? ys.timeline : E;
	return ce.revert = function() {
		return gc(ce, 1, 1);
	}, ce;
}, hc = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, gc = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (hc(e), t < 2 && e.progress(1), e.kill()), !0;
}, _c = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, vc = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = ic(e), this.elementStates = e, _c(this);
		else {
			this.targets = _s(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			ys && !r && ys._kill.push(this), this.update(r || !!ys);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new yc(e, t.props, t.simple);
		}), _c(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, _c(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = Gs(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = hs(o.element, !1, !1, !0)), s = i[o.id], s && oc(o, s, t, !0, 0, o), o.matrix = hs(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || Os;
		return (t in n ? n : n.props || Os)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), _c(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? cc(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = As[this.props] || Ns, t = this.elementStates.length; t--;) Ks(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = gc(i, +!e);
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
		return this.elementStates[this.targets.indexOf(Ps(e))];
	}, t.makeAbsolute = function() {
		return Gs(this.elementStates.slice(0), !0, !0).map(Xs);
	}, e;
}(), yc = /*#__PURE__*/ function() {
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
		var n = this, r = n.element, i = vs.getProperty(r), a = vs.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new ms(1, 0, 0, 1, o.left + os(), o.top + as()) : hs(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = rc(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : Ss(i("width", "px"), .04), n.height = s ? s.height : Ss(i("height", "px"), .04), e && tc(n, Vs[e] || Hs(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && ds(r).inverse(), n.simple = t || Fs(c.a) === 1 && !Fs(c.b) && !Fs(c.c) && Fs(c.d) === 1, n.uncache = 0;
	}, e;
}(), bc = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), xc = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new vc(), this.timeline = vs.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new bc(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = ys, r = bs;
		return ys = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, bs = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), bs = r, ys = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = ys, n = this.timeline, r = this.actions.length, i, a;
		for (ys = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new vc(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare(Sc.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), Qs(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), ws(e, "onComplete"));
		}), ys = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return ws(this, "onStart"), n.restart(), this;
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
		return this !== ys && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete Ts[this.id];
	}, e;
}(), Sc = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = sc(t, n);
		return bs && bs.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), mc(e, sc(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return mc(e, sc(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return mc(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? Bs(n, Rs) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && Ps(n.fitChild), p = ec(t, c, d, e), m = ec(e, 0, d, p), h = c ? As[c] : Ns, g = vs.context();
		return c && nc(r, p.props), Ks(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			qs(m), u && u.apply(this, arguments);
		}), a && Xs(m, p), r = oc(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return qs(m);
			};
		}), s ? r : r.duration ? vs.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof vc ? e : new vc(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), Ts[e] || (Ts[e] = new xc(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof vc ? e.targets : _s(e)).forEach(function(e) {
			return e && gc(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (Ps(e) || Os)._flip;
	}, e.getElementState = function(e, t) {
		return new yc(Ps(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = hs(t, !0, !0).multiply(hs(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (xs = typeof document < "u" && document.body, xs) {
			vs = e, ts(xs), _s = vs.utils.toArray, Cs = vs.core.getStyleSaver;
			var t = vs.utils.snap(.1);
			Ss = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
//#endregion
//#region src/modules/work-flip.ts
Sc.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin(Sc), b.registerPlugin(Sc);
var Cc = {
	leave: .26,
	flip: .86,
	imageFade: .24,
	contentFade: .5,
	contentSpread: .3,
	ease: "power3.inOut"
}, wc = 2600, Tc = "work-flip-ghost", Ec = "[data-work-flip-ghost]", Dc = "a[data-work-flip]", Oc = ".cms-works__image-wrap", kc = "img", Ac = "[data-work-flip-back], [data-back-button]", jc = "[data-work-flip-target]", Mc = "data-work-flip-id", Nc = "site:works-ready", Pc = "site:work-detail-ready", Fc = [
	"SCRIPT",
	"STYLE",
	"LINK",
	"NOSCRIPT",
	"TEMPLATE",
	"META"
], Ic = "data-work-flip-faded", Lc = "data-work-flip-hidden", Rc = !1, zc = !1, Bc = 0;
function Vc(e) {
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		left: t.left,
		width: t.width,
		height: t.height
	};
}
function Hc(e) {
	return e instanceof HTMLElement && !Fc.includes(e.tagName);
}
function Uc(e, t) {
	let n = document.createElement("div"), r = document.createElement("img");
	return n.className = Tc, n.setAttribute("data-work-flip-ghost", ""), n.setAttribute("aria-hidden", "true"), n.style.top = `${e.top}px`, n.style.left = `${e.left}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`, r.src = t, r.alt = "", r.decoding = "sync", n.append(r), document.body.append(n), n;
}
function Wc() {
	return document.querySelector(Ec);
}
function Gc() {
	Array.from(document.querySelectorAll(Ec)).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Kc() {
	document.documentElement.classList.remove(T), Gc(), S();
}
function qc(e) {
	var t;
	return e ? (t = Array.from(document.querySelectorAll(`[${Mc}]`)).find((t) => t.getAttribute(Mc) === e)) == null ? null : t : null;
}
function Jc(e, t) {
	let n = new Set(t), r = [], i = e;
	for (; i && i !== document.body && i.parentElement;) {
		var a, o;
		let e = i;
		Array.from((a = (o = e.parentElement) == null ? void 0 : o.children) == null ? [] : a).forEach((t) => {
			t === e || n.has(t) || !Hc(t) || r.push(t);
		}), i = e.parentElement;
	}
	return r;
}
function Yc(e) {
	return Array.from(document.body.children).filter((t) => t !== e && Hc(t));
}
function Xc(e) {
	return e.forEach((e) => e.setAttribute(Ic, "")), e;
}
function Zc(e) {
	b.set(e, { clearProps: "opacity,visibility" }), e.forEach((e) => e.removeAttribute(Ic));
}
function Qc(e) {
	return e.width > 0 && e.height > 0;
}
function $c(e) {
	return e.height > 0 ? e.width / e.height : 0;
}
function el(e, t) {
	e.complete && e.naturalWidth > 0 || !t.ratio || (e.style.aspectRatio = String(t.ratio), e.setAttribute("data-work-flip-ratio", ""));
}
function tl(e) {
	e.hasAttribute("data-work-flip-ratio") && (e.style.aspectRatio = "", e.removeAttribute("data-work-flip-ratio"));
}
function nl(e, t) {
	let n = () => window.requestAnimationFrame(() => window.requestAnimationFrame(t));
	if (e.complete && e.naturalWidth > 0) {
		n();
		return;
	}
	if (typeof e.decode == "function") {
		e.decode().then(n, n);
		return;
	}
	e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
}
function rl() {
	zc = !1, Gc();
	let e = Array.from(document.querySelectorAll(`[${Ic}]`));
	b.killTweensOf(e), Zc(e), Array.from(document.querySelectorAll(`[${Lc}]`)).forEach((e) => {
		e.style.visibility = "", e.removeAttribute(Lc);
	}), document.documentElement.classList.remove(T);
}
function il(e, t, n) {
	let r = Vc(e), i = Uc(r, t.currentSrc || t.src), a = i.firstElementChild, o = t.getBoundingClientRect().width / Math.max(r.width, 1), s = !1, c = () => {
		s || (s = !0, n());
	}, l = b.timeline({ onComplete: c });
	window.setTimeout(c, Cc.leave * 1e3 + 400), zc = !0, e.style.visibility = "hidden", e.setAttribute(Lc, ""), b.set(a, {
		scale: o > 1.002 ? o : 1,
		transformOrigin: "50% 50%"
	}), l.to(Xc(Yc(i)), {
		autoAlpha: 0,
		duration: Cc.leave,
		ease: "power2.out"
	}, 0), o > 1.002 && l.to(a, {
		scale: 1,
		duration: Cc.leave,
		ease: "power2.out"
	}, 0);
}
function al(e, t, n) {
	var r;
	let i = document.documentElement, a = i.classList.contains("is-work-flip-pending") ? Xc(Jc(t, [e])) : [], o = n.direction === "back" ? (r = t.closest(Oc)) == null ? t : r : t, s = !1, c = 0, l = (n) => {
		if (tl(t), b.killTweensOf(e), b.set(t, {
			autoAlpha: 1,
			clearProps: "opacity,visibility"
		}), n) {
			e.remove();
			return;
		}
		b.to(e, {
			autoAlpha: 0,
			duration: Cc.imageFade,
			ease: "power1.out",
			onComplete: () => e.remove()
		});
	}, u = (e) => {
		s || (s = !0, window.clearTimeout(c), e ? (l(!0), a.length > 0 && (b.set(a, { autoAlpha: 1 }), Zc(a))) : (nl(t, () => l(!1)), a.length > 0 && b.to(a, {
			autoAlpha: 1,
			duration: Cc.contentFade,
			ease: "power2.out",
			stagger: { amount: Cc.contentSpread },
			onComplete: () => Zc(a)
		})), S());
	};
	a.length > 0 && b.set(a, { autoAlpha: 0 }), b.set(t, { autoAlpha: 0 }), i.classList.remove(T), Sc.fit(e, o, {
		duration: Cc.flip,
		ease: Cc.ease,
		onComplete: () => u(!1)
	}), c = window.setTimeout(() => u(!0), (Cc.flip + 2) * 1e3);
}
function ol(e) {
	var t;
	let n = (t = Wc()) == null ? Uc(e.rect, e.src) : t, r = e.direction === "forward" ? Pc : Nc, i = !1, a = 0, o = null, s = () => {
		o == null || o.disconnect(), o = null, document.removeEventListener(r, u);
	}, c = () => {
		i || (i = !0, s(), Kc());
	}, l = () => {
		var t;
		if (e.direction === "forward") {
			let e = document.querySelector(jc);
			return e instanceof HTMLImageElement ? e : null;
		}
		let n = qc(e.workId), r = (t = n == null ? void 0 : n.querySelector(kc)) == null ? null : t;
		return r instanceof HTMLImageElement ? r : null;
	};
	function u() {
		if (i) return;
		let t = l();
		if (!t) return;
		i = !0, s(), el(t, e);
		let r = !1, o = () => {
			r || (r = !0, window.clearTimeout(a), al(n, t, e));
		};
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(o);
		}), window.setTimeout(o, 300);
	}
	a = window.setTimeout(c, wc), document.addEventListener(r, u), o = new MutationObserver(u), o.observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), u();
}
function sl(e) {
	return e.href === window.location.href ? !1 : e.direction === "forward" ? !0 : e.auto ? w() : w() || document.referrer === e.href;
}
function cl(e, t) {
	var n, r;
	let i = h(t), a = t.querySelector(Oc), o = (n = a == null ? void 0 : a.querySelector(kc)) == null ? null : n;
	if (!i || !a || !(o instanceof HTMLImageElement)) return;
	e.preventDefault();
	let s = Vc(a);
	if (!Qc(s)) {
		window.location.href = i.href;
		return;
	}
	C({
		direction: "forward",
		workId: (r = t.getAttribute(Mc)) == null ? "" : r,
		src: o.currentSrc || o.src,
		href: window.location.href,
		rect: s,
		ratio: $c(s),
		auto: !1,
		ts: Date.now()
	}), il(a, o, () => {
		window.location.href = i.href;
	});
}
function ll(e, t) {
	var n;
	let r = document.querySelector(jc), i = t.getAttribute("href") || "", a = () => {
		if (t.hasAttribute("data-back-button") && window.history.length > 1) {
			window.history.back();
			return;
		}
		window.location.href = i || "/";
	};
	if (!(r instanceof HTMLImageElement)) return;
	e.preventDefault(), e.stopPropagation();
	let o = Vc(r);
	if (!Qc(o)) {
		a();
		return;
	}
	C({
		direction: "back",
		workId: (n = r.getAttribute(Mc)) == null ? "" : n,
		src: r.currentSrc || r.src,
		href: window.location.href,
		rect: o,
		ratio: $c(o),
		auto: !1,
		ts: Date.now()
	}), il(r, r, a);
}
function ul(e) {
	return Qc(e) && e.top < window.innerHeight && e.top + e.height > 0;
}
function dl() {
	var e;
	let t = document.querySelector(jc);
	if (zc || Date.now() - Bc < 1500 || !(t instanceof HTMLImageElement)) return;
	let n = Vc(t);
	ul(n) && C({
		direction: "back",
		workId: (e = t.getAttribute(Mc)) == null ? "" : e,
		src: t.currentSrc || t.src,
		href: window.location.href,
		rect: n,
		ratio: $c(n),
		auto: !0,
		ts: Date.now()
	});
}
function fl() {
	if (Rc) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", fl, { once: !0 });
		return;
	}
	if (Rc = !0, u()) {
		Kc();
		return;
	}
	let e = x();
	e && sl(e) ? ol(e) : Kc(), document.addEventListener("click", (e) => {
		let t = e.target;
		if (zc) {
			e.preventDefault();
			return;
		}
		if (!(t instanceof Element) || e.defaultPrevented || l(e)) return;
		let n = t.closest(Ac);
		if (n) {
			ll(e, n);
			return;
		}
		t.closest("a[href]") && (Bc = Date.now());
		let r = t.closest(Dc);
		r && cl(e, r);
	}, !0), window.addEventListener("pagehide", () => {
		dl(), rl();
	}), window.addEventListener("pageshow", (e) => {
		if (!e.persisted) return;
		rl();
		let t = x();
		if (t && t.direction === "back" && t.href !== window.location.href && qc(t.workId)) {
			document.documentElement.classList.add(T), ol(t);
			return;
		}
		S();
	});
}
//#endregion
//#region src/main.ts
var pl = !1;
fl(), so(), ii();
function ml() {
	if (pl) return;
	pl = !0;
	let e = O();
	Va({ i18n: e }), Xi({ i18n: e }), Uo(), _(), window.SiteInteractions = {
		openModal: La,
		openContentModal: Ia,
		closeModal: Ra,
		openLightbox: Ki,
		closeLightbox: qi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ml, { once: !0 }) : ml();
//#endregion

//# sourceMappingURL=site-interactions.js.map