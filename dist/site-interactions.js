import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { t as x } from "./site-interactions-QtEWUsWn.js";
import { i as S, n as ee, o as C, r as w, t as T } from "./site-interactions-BfdytpEq.js";
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
function te(e, t, n) {
	return t && A(e.prototype, t), n && A(e, n), e;
}
var j, M, N, ne, re, ie, ae, P, F, oe, I, se, ce, le = function() {
	return j || typeof window < "u" && (j = window.gsap) && j.registerPlugin && j;
}, L = 1, R = [], z = [], B = [], ue = Date.now, de = function(e, t) {
	return t;
}, fe = function() {
	var e = F.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, z), r.push.apply(r, B), z = n, B = r, de = function(e, n) {
		return t[e](n);
	};
}, V = function(e, t) {
	return ~B.indexOf(e) && B[B.indexOf(e) + 1][t];
}, pe = function(e) {
	return !!~oe.indexOf(e);
}, H = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, me = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, he = "scrollLeft", ge = "scrollTop", _e = function() {
	return I && I.isPressed || z.cache++;
}, ve = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			L && (N.history.scrollRestoration = "manual");
			var i = I && I.isPressed;
			r = n.v = Math.round(r) || (I && I.iOS ? 1 : 0), e(r), n.cacheID = z.cache, i && de("ss", r);
		} else (t || z.cache !== n.cacheID || de("ref")) && (n.cacheID = z.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, ye = {
	s: he,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: ve(function(e) {
		return arguments.length ? N.scrollTo(e, be.sc()) : N.pageXOffset || ne[he] || re[he] || ie[he] || 0;
	})
}, be = {
	s: ge,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: ye,
	sc: ve(function(e) {
		return arguments.length ? N.scrollTo(ye.sc(), e) : N.pageYOffset || ne[ge] || re[ge] || ie[ge] || 0;
	})
}, xe = function(e, t) {
	return (t && t._ctx && t._ctx.selector || j.utils.toArray)(e)[0] || (typeof e == "string" && j.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Se = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Ce = function(e, t) {
	var n = t.s, r = t.sc;
	pe(e) && (e = ne.scrollingElement || re);
	var i = z.indexOf(e), a = r === be.sc ? 1 : 2;
	!~i && (i = z.push(e) - 1), z[i + a] || H(e, "scroll", _e);
	var o = z[i + a], s = o || (z[i + a] = ve(V(e, n), !0) || (pe(e) ? r : ve(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = j.getProperty(e, "scrollBehavior") === "smooth"), s;
}, we = function(e, t, n) {
	var r = e, i = e, a = ue(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = ue();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = ue();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Te = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Ee = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, De = function() {
	F = j.core.globals().ScrollTrigger, F && F.core && fe();
}, Oe = function(e) {
	return j = e || le(), !M && j && typeof document < "u" && document.body && (N = window, ne = document, re = ne.documentElement, ie = ne.body, oe = [
		N,
		ne,
		re,
		ie
	], j.utils.clamp, ce = j.core.context || function() {}, P = "onpointerenter" in ie ? "pointer" : "mouse", ae = U.isTouch = N.matchMedia && N.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in N || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, se = U.eventTypes = ("ontouchstart" in re ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in re ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return L = 0;
	}, 500), M = 1), F || De(), M;
};
ye.op = be, z.cache = 0;
var U = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		M || Oe(j) || console.warn("Please gsap.registerPlugin(Observer)"), F || De();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, ee = e.onChangeY, C = e.onChange, w = e.onToggleX, T = e.onToggleY, E = e.onHover, D = e.onHoverEnd, O = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, te = e.onGestureStart, oe = e.onGestureEnd, le = e.onWheel, L = e.onEnable, z = e.onDisable, B = e.onClick, de = e.scrollSpeed, fe = e.capture, V = e.allowClicks, he = e.lockAxis, ge = e.onLockAxis;
		this.target = i = xe(i) || re, this.vars = e, u && (u = j.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, de = de || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(N.getComputedStyle(ie).lineHeight) || 22);
		var ve, U, W, ke, G, K, Ae, q = this, je = 0, Me = 0, Ne = e.passive || !s && e.passive !== !1, Pe = Ce(i, ye), Fe = Ce(i, be), Ie = Pe(), Le = Fe(), Re = ~r.indexOf("touch") && !~r.indexOf("pointer") && se[0] === "pointerdown", ze = pe(i), J = i.ownerDocument || ne, Be = [
			0,
			0,
			0
		], Ve = [
			0,
			0,
			0
		], Y = 0, He = function() {
			return Y = ue();
		}, Ue = function(e, t) {
			return (q.event = e) && u && Se(e.target, u) || t && Re && e.pointerType !== "touch" || k && k(e, t);
		}, We = function() {
			q._vx.reset(), q._vy.reset(), U.pause(), c && c(q);
		}, X = function() {
			var e = q.deltaX = Ee(Be), n = q.deltaY = Ee(Ve), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			C && (r || i) && C(q, e, n, Be, Ve), r && (v && q.deltaX > 0 && v(q), y && q.deltaX < 0 && y(q), S && S(q), w && q.deltaX < 0 != je < 0 && w(q), je = q.deltaX, Be[0] = Be[1] = Be[2] = 0), i && (x && q.deltaY > 0 && x(q), b && q.deltaY < 0 && b(q), ee && ee(q), T && q.deltaY < 0 != Me < 0 && T(q), Me = q.deltaY, Ve[0] = Ve[1] = Ve[2] = 0), (ke || W) && (O && O(q), W && (p && W === 1 && p(q), h && h(q), W = 0), ke = !1), K && !(K = !1) && ge && ge(q), G && (le(q), G = !1), ve = 0;
		}, Ge = function(e, t, n) {
			Be[n] += e, Ve[n] += t, q._vx.update(e), q._vy.update(t), o ? ve || (ve = requestAnimationFrame(X)) : X();
		}, Ke = function(e, t) {
			he && !Ae && (q.axis = Ae = Math.abs(e) > Math.abs(t) ? "x" : "y", K = !0), Ae !== "y" && (Be[2] += e, q._vx.update(e, !0)), Ae !== "x" && (Ve[2] += t, q._vy.update(t, !0)), o ? ve || (ve = requestAnimationFrame(X)) : X();
		}, qe = function(e) {
			if (!Ue(e, 1)) {
				e = Te(e, s);
				var t = e.clientX, r = e.clientY, i = t - q.x, a = r - q.y, o = q.isDragging;
				q.x = t, q.y = r, (o || (i || a) && (Math.abs(q.startX - t) >= n || Math.abs(q.startY - r) >= n)) && (W || (W = o ? 2 : 1), o || (q.isDragging = !0), Ke(i, a));
			}
		}, Je = q.onPress = function(e) {
			Ue(e, 1) || e && e.button || (q.axis = Ae = null, U.pause(), q.isPressed = !0, e = Te(e), je = Me = 0, q.startX = q.x = e.clientX, q.startY = q.y = e.clientY, q._vx.reset(), q._vy.reset(), H(A ? i : J, se[1], qe, Ne, !0), q.deltaX = q.deltaY = 0, g && g(q));
		}, Ye = q.onRelease = function(e) {
			if (!Ue(e, 1)) {
				me(A ? i : J, se[1], qe, !0);
				var t = !isNaN(q.y - q.startY), n = q.isDragging, r = n && (Math.abs(q.x - q.startX) > 3 || Math.abs(q.y - q.startY) > 3), a = Te(e);
				!r && t && (q._vx.reset(), q._vy.reset(), s && V && j.delayedCall(.08, function() {
					if (ue() - Y > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (J.createEvent) {
							var t = J.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, N, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), q.isDragging = q.isGesturing = q.isPressed = !1, c && n && !A && U.restart(!0), W && X(), m && n && m(q), _ && _(q, r);
			}
		}, Xe = function(e) {
			return e.touches && e.touches.length > 1 && (q.isGesturing = !0) && te(e, q.isDragging);
		}, Ze = function() {
			return (q.isGesturing = !1) || oe(q);
		}, Qe = function(e) {
			if (!Ue(e)) {
				var t = Pe(), n = Fe();
				Ge((t - Ie) * de, (n - Le) * de, 1), Ie = t, Le = n, c && U.restart(!0);
			}
		}, $e = function(e) {
			if (!Ue(e)) {
				e = Te(e, s), le && (G = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? N.innerHeight : 1) * d;
				Ge(e.deltaX * t, e.deltaY * t, 0), c && !A && U.restart(!0);
			}
		}, et = function(e) {
			if (!Ue(e)) {
				var t = e.clientX, n = e.clientY, r = t - q.x, i = n - q.y;
				q.x = t, q.y = n, ke = !0, c && U.restart(!0), (r || i) && Ke(r, i);
			}
		}, tt = function(e) {
			q.event = e, E(q);
		}, nt = function(e) {
			q.event = e, D(q);
		}, rt = function(e) {
			return Ue(e) || Te(e, s) && B(q);
		};
		U = q._dc = j.delayedCall(l || .25, We).pause(), q.deltaX = q.deltaY = 0, q._vx = we(0, 50, !0), q._vy = we(0, 50, !0), q.scrollX = Pe, q.scrollY = Fe, q.isDragging = q.isGesturing = q.isPressed = !1, ce(this), q.enable = function(e) {
			return q.isEnabled || (H(ze ? J : i, "scroll", _e), r.indexOf("scroll") >= 0 && H(ze ? J : i, "scroll", Qe, Ne, fe), r.indexOf("wheel") >= 0 && H(i, "wheel", $e, Ne, fe), (r.indexOf("touch") >= 0 && ae || r.indexOf("pointer") >= 0) && (H(i, se[0], Je, Ne, fe), H(J, se[2], Ye), H(J, se[3], Ye), V && H(i, "click", He, !0, !0), B && H(i, "click", rt), te && H(J, "gesturestart", Xe), oe && H(J, "gestureend", Ze), E && H(i, P + "enter", tt), D && H(i, P + "leave", nt), O && H(i, P + "move", et)), q.isEnabled = !0, q.isDragging = q.isGesturing = q.isPressed = ke = W = !1, q._vx.reset(), q._vy.reset(), Ie = Pe(), Le = Fe(), e && e.type && Je(e), L && L(q)), q;
		}, q.disable = function() {
			q.isEnabled && (R.filter(function(e) {
				return e !== q && pe(e.target);
			}).length || me(ze ? J : i, "scroll", _e), q.isPressed && (q._vx.reset(), q._vy.reset(), me(A ? i : J, se[1], qe, !0)), me(ze ? J : i, "scroll", Qe, fe), me(i, "wheel", $e, fe), me(i, se[0], Je, fe), me(J, se[2], Ye), me(J, se[3], Ye), me(i, "click", He, !0), me(i, "click", rt), me(J, "gesturestart", Xe), me(J, "gestureend", Ze), me(i, P + "enter", tt), me(i, P + "leave", nt), me(i, P + "move", et), q.isEnabled = q.isPressed = q.isDragging = !1, z && z(q));
		}, q.kill = q.revert = function() {
			q.disable();
			var e = R.indexOf(q);
			e >= 0 && R.splice(e, 1), I === q && (I = 0);
		}, R.push(q), A && pe(i) && (I = q), q.enable(f);
	}, te(e, [{
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
U.version = "3.15.0", U.create = function(e) {
	return new U(e);
}, U.register = Oe, U.getAll = function() {
	return R.slice();
}, U.getById = function(e) {
	return R.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, le() && j.registerPlugin(U);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var W, ke, G, K, Ae, q, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, J, Be, Ve, Y, He, Ue, We, X, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt = 1, rt = Date.now, it = rt(), at = 0, ot = 0, st = function(e, t, n) {
	var r = Ct(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, ct = function(e, t) {
	return t && (!Ct(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, lt = function e() {
	return ot && requestAnimationFrame(e);
}, ut = function() {
	return Re = 1;
}, dt = function() {
	return Re = 0;
}, ft = function(e) {
	return e;
}, pt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, mt = function() {
	return typeof window < "u";
}, ht = function() {
	return W || mt() && (W = window.gsap) && W.registerPlugin && W;
}, gt = function(e) {
	return !!~je.indexOf(e);
}, _t = function(e) {
	return (e === "Height" ? Qe : G["inner" + e]) || Ae["client" + e] || q["client" + e];
}, vt = function(e) {
	return V(e, "getBoundingClientRect") || (gt(e) ? function() {
		return Gn.width = G.innerWidth, Gn.height = Qe, Gn;
	} : function() {
		return Jt(e);
	});
}, yt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = V(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? _t(i) : e["client" + i]) || 0;
	};
}, bt = function(e, t) {
	return !t || ~B.indexOf(e) ? vt(e) : function() {
		return Gn;
	};
}, xt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = V(e, n)) ? a() - vt(e)()[i] : gt(e) ? (Ae[n] || q[n]) - _t(r) : e[n] - e["offset" + r]);
}, St = function(e, t) {
	for (var n = 0; n < Y.length; n += 3) (!t || ~t.indexOf(Y[n + 1])) && e(Y[n], Y[n + 1], Y[n + 2]);
}, Ct = function(e) {
	return typeof e == "string";
}, wt = function(e) {
	return typeof e == "function";
}, Tt = function(e) {
	return typeof e == "number";
}, Et = function(e) {
	return typeof e == "object";
}, Dt = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, Ot = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, kt = Math.abs, At = "left", jt = "top", Mt = "right", Nt = "bottom", Pt = "width", Ft = "height", It = "Right", Lt = "Left", Rt = "Top", zt = "Bottom", Bt = "padding", Vt = "margin", Ht = "Width", Ut = "Height", Wt = "px", Gt = function(e) {
	return G.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Kt = function(e) {
	var t = Gt(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, qt = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Jt = function(e, t) {
	var n = t && Gt(e)[ze] !== "matrix(1, 0, 0, 1, 0, 0)" && W.to(e, {
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
}, Yt = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Xt = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, Zt = function(e) {
	return function(t) {
		return W.utils.snap(Xt(e), t);
	};
}, Qt = function(e) {
	var t = W.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
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
}, $t = function(e) {
	return function(t, n) {
		return Qt(Xt(e))(t, n.direction);
	};
}, en = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, tn = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, nn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, rn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, an = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, on = {
	toggleActions: "play",
	anticipatePin: 0
}, sn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, cn = function(e, t) {
	if (Ct(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in sn ? sn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, ln = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = K.createElement("div"), m = gt(n) || V(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? q : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === be ? Mt : Nt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], un(p, 0, r, _), p;
}, un = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Ht] = 1, i["border" + o + Ht] = 0, i[n.p] = t + "px", W.set(e, i);
}, Z = [], dn = {}, fn, pn = function() {
	return rt() - at > 34 && (fn || (fn = requestAnimationFrame(In)));
}, mn = function() {
	(!X || !X.isPressed || X.startX > q.clientWidth) && (z.cache++, X ? fn || (fn = requestAnimationFrame(In)) : In(), at || bn("scrollStart"), at = rt());
}, hn = function() {
	qe = G.innerWidth, Ke = G.innerHeight;
}, gn = function(e) {
	z.cache++, (e === !0 || !Le && !We && !K.fullscreenElement && !K.webkitFullscreenElement && (!Ge || qe !== G.innerWidth || Math.abs(G.innerHeight - Ke) > G.innerHeight * .25)) && Me.restart(!0);
}, _n = {}, vn = [], yn = function e() {
	return nn(Q, "scrollEnd", e) || Mn(!0);
}, bn = function(e) {
	return _n[e] && _n[e].map(function(e) {
		return e();
	}) || vn;
}, xn = [], Sn = function(e) {
	for (var t = 0; t < xn.length; t += 5) (!e || xn[t + 4] && xn[t + 4].query === e) && (xn[t].style.cssText = xn[t + 1], xn[t].getBBox && xn[t].setAttribute("transform", xn[t + 2] || ""), xn[t + 3].uncache = 1);
}, Cn = function() {
	return z.forEach(function(e) {
		return wt(e) && ++e.cacheID && (e.rec = e());
	});
}, wn = function(e, t) {
	var n;
	for (J = 0; J < Z.length; J++) n = Z[J], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	$e = !0, t && Sn(t), t || bn("revert");
}, Tn = function(e, t) {
	z.cache++, (t || !En) && z.forEach(function(e) {
		return wt(e) && e.cacheID++ && (e.rec = 0);
	}), Ct(e) && (G.history.scrollRestoration = Xe = e);
}, En, Dn = 0, On, kn = function() {
	if (On !== Dn) {
		var e = On = Dn;
		requestAnimationFrame(function() {
			return e === Dn && Mn(!0);
		});
	}
}, An = function() {
	q.appendChild(Ze), Qe = !X && Ze.offsetHeight || G.innerHeight, q.removeChild(Ze);
}, jn = function(e) {
	return Ne(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Mn = function(e, t) {
	if (Ae = K.documentElement, q = K.body, je = [
		G,
		K,
		Ae,
		q
	], at && !e && !$e) {
		tn(Q, "scrollEnd", yn);
		return;
	}
	An(), En = Q.isRefreshing = !0, $e || Cn();
	var n = bn("refreshInit");
	He && Q.sort(), t || wn(), z.forEach(function(e) {
		wt(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Z.slice(0).forEach(function(e) {
		return e.refresh();
	}), $e = !1, Z.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), et = 1, jn(!0), Z.forEach(function(e) {
		var t = xt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), jn(!1), et = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), z.forEach(function(e) {
		wt(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), Tn(Xe, 1), Me.pause(), Dn++, En = 2, In(2), Z.forEach(function(e) {
		return wt(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), En = Q.isRefreshing = !1, bn("refresh");
}, Nn = 0, Pn = 1, Fn, In = function(e) {
	if (e === 2 || !En && !$e) {
		Q.isUpdating = !0, Fn && Fn.update(0);
		var t = Z.length, n = rt(), r = n - it >= 50, i = t && Z[0].scroll();
		if (Pn = Nn > i ? -1 : 1, En || (Nn = i), r && (at && !Re && n - at > 200 && (at = 0, bn("scrollEnd")), Fe = it, it = n), Pn < 0) {
			for (J = t; J-- > 0;) Z[J] && Z[J].update(0, r);
			Pn = 1;
		} else for (J = 0; J < t; J++) Z[J] && Z[J].update(0, r);
		Q.isUpdating = !1;
	}
	fn = 0;
}, Ln = [
	At,
	jt,
	Nt,
	Mt,
	Vt + zt,
	Vt + It,
	Vt + Rt,
	Vt + Lt,
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
], Rn = Ln.concat([
	Pt,
	Ft,
	"boxSizing",
	"max" + Ht,
	"max" + Ut,
	"position",
	Vt,
	Bt,
	Bt + Rt,
	Bt + It,
	Bt + zt,
	Bt + Lt
]), zn = function(e, t, n) {
	Hn(n);
	var r = e._gsap;
	if (r.spacerIsNative) Hn(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Bn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Ln.length, a = t.style, o = e.style, s; i--;) s = Ln[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[Nt] = o[Mt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Pt] = Yt(e, ye) + Wt, a[Ft] = Yt(e, be) + Wt, a[Bt] = o[Vt] = o[jt] = o[At] = "0", Hn(r), o[Pt] = o["max" + Ht] = n[Pt], o[Ft] = o["max" + Ut] = n[Ft], o[Bt] = n[Bt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Vn = /([A-Z])/g, Hn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || W.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Vn, "-$1").toLowerCase());
	}
}, Un = function(e) {
	for (var t = Rn.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Rn[i], n[Rn[i]]);
	return r.t = e, r;
}, Wn = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Gn = {
	left: 0,
	top: 0
}, Kn = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	wt(e) && (e = e(s)), Ct(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? cn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), Tt(e)) f && (e = W.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && un(o, n, r, !0);
	else {
		wt(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = xe(t, s) || q, y = Jt(_) || {}, (!y || !y.left && !y.top) && Gt(_).display === "none" && (S = _.style.display, _.style.display = "block", y = Jt(_), S ? _.style.display = S : _.style.removeProperty("display")), b = cn(v[0], y[r.d]), x = cn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && un(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var ee = e + n, C = a._isStart;
		h = "scroll" + r.d2, un(a, ee, r, C && ee > 20 || !C && (u ? Math.max(q[h], Ae[h]) : a.parentNode[h]) <= ee + 1), u && (c = Jt(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Wt));
	}
	return f && _ && (h = Jt(_), f.seek(d), g = Jt(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, qn = /(webkit|moz|length|cssText|inset)/i, Jn = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === q) {
			for (a in e._stOrig = i.cssText, o = Gt(e), o) !+a && !qn.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		W.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, Yn = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, Xn = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, W.set(e, r);
}, Zn = function(e, t) {
	var n = Ce(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = Yn(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			z.cache++, t.tween && In();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = W.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, tn(e, "wheel", n.wheelHandler), Q.isTouch && tn(e, "touchmove", n.wheelHandler), i;
}, Q = /*#__PURE__*/ function() {
	function e(t, n) {
		ke || e.register(W) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ye(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ot) {
			this.update = this.refresh = this.kill = ft;
			return;
		}
		t = qt(Ct(t) || Tt(t) || t.nodeType ? { trigger: t } : t, on);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, ee = r.preventOverlaps, C = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? ye : be, w = !l && l !== 0, T = xe(t.scroller || G), E = W.core.getCache(T), D = gt(T), O = ("pinType" in t ? t.pinType : V(T, "pinType") || D && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = w && t.toggleActions.split(" "), te = "markers" in t ? t.markers : on.markers, j = D ? 0 : parseFloat(Gt(T)["border" + C.p2 + Ht]) || 0, M = this, N = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, ne = yt(T, D, C), re = bt(T, D), ie = 0, ae = 0, P = 0, F = Ce(T, C), oe, I, se, ce, le, L, R, ue, de, fe, pe, H, me, he, ge, _e, ve, Se, we, Te, Ee, De, Oe, U, ke, je, Me, Ie, ze, Be, Ve, Y, We, X, Ge, Ke, qe, Je, Ye;
		if (M._startClamp = M._endClamp = !1, M._dir = C, m *= 45, M.scroller = T, M.scroll = x ? x.time.bind(x) : F, ce = F(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (He = 1, t.refreshPriority === -9999 && (Fn = M)), E.tweenScroll = E.tweenScroll || {
			top: Zn(T, be),
			left: Zn(T, ye)
		}, M.tweenTo = oe = E.tweenScroll[C.p], M.scrubDuration = function(e) {
			We = Tt(e) && e, We ? Y ? Y.duration(e) : Y = W.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: We,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (Y && Y.progress(1).kill(), Y = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), Be = 0, o || (o = n.vars.id)), v && ((!Et(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in q.style && W.set(D ? [q, Ae] : T, { scrollBehavior: "auto" }), z.forEach(function(e) {
			return wt(e) && e.target === (D ? K.scrollingElement || Ae : T) && (e.smooth = !1);
		}), se = wt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Zt(n) : v.snapTo === "labelsDirectional" ? $t(n) : v.directional === !1 ? W.utils.snap(v.snapTo) : function(e, t) {
			return Qt(v.snapTo)(e, rt() - ae < 500 ? 0 : t.direction);
		}, X = v.duration || {
			min: .1,
			max: 2
		}, X = Et(X) ? Pe(X.min, X.max) : Pe(X, X), Ge = W.delayedCall(v.delay || We / 2 || .1, function() {
			var e = F(), t = rt() - ae < 500, r = oe.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !Re && ie !== e) {
				var i = (e - L) / he, a = n && !w ? n.totalProgress() : i, o = t ? 0 : (a - Ve) / (rt() - Fe) * 1e3 || 0, s = W.utils.clamp(-i, 1 - i, kt(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = se(c, M), Tt(l) || (l = c), u = Math.max(0, Math.round(L + l * he)), e <= R && e >= L && u !== e) {
					if (r && !r._initted && r.data <= kt(u - e)) return;
					v.inertia === !1 && (s = l - i), oe(u, {
						duration: X(kt(Math.max(kt(c - a), kt(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: kt(u - e),
						onInterrupt: function() {
							return Ge.restart(!0) && p && Ot(M, p);
						},
						onComplete: function() {
							M.update(), ie = F(), n && !w && (Y ? Y.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Be = Ve = n && !w ? n.totalProgress() : M.progress, g && g(M), m && Ot(M, m);
						}
					}, e, s * he, u - e - s * he), f && Ot(M, f, oe.tween);
				}
			} else M.isActive && ie !== e && Ge.restart(!0);
		}).pause()), o && (dn[o] = M), u = M.trigger = xe(u || d !== !0 && d), Ye = u && u._gsap && u._gsap.stRevert, Ye && (Ye = Ye(M)), d = d === !0 ? u : xe(d), Ct(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Vt || (f = !f && d.parentNode && d.parentNode.style && Gt(d.parentNode).display === "flex" ? !1 : Bt), M.pin = d, I = W.core.getCache(d), I.spacer ? ge = I.pinState : (b && (b = xe(b), b && !b.nodeType && (b = b.current || b.nativeElement), I.spacerIsNative = !!b, b && (I.spacerState = Un(b))), I.spacer = Se = b || K.createElement("div"), Se.classList.add("pin-spacer"), o && Se.classList.add("pin-spacer-" + o), I.pinState = ge = Un(d)), t.force3D !== !1 && W.set(d, { force3D: !0 }), M.spacer = Se = I.spacer, ze = Gt(d), U = ze[f + C.os2], Te = W.getProperty(d), Ee = W.quickSetter(d, C.a, Wt), Bn(d, Se, ze), ve = Un(d)), te) {
			H = Et(te) ? qt(te, an) : an, fe = ln("scroller-start", o, T, C, H, 0), pe = ln("scroller-end", o, T, C, H, 0, fe), we = fe["offset" + C.op.d2];
			var Xe = xe(V(T, "content") || T);
			ue = this.markerStart = ln("start", o, Xe, C, H, we, 0, x), de = this.markerEnd = ln("end", o, Xe, C, H, we, 0, x), x && (Je = W.quickSetter([ue, de], C.a, Wt)), !O && !(B.length && V(T, "fixedMarkers") === !0) && (Kt(D ? q : T), W.set([fe, pe], { force3D: !0 }), je = W.quickSetter(fe, C.a, Wt), Ie = W.quickSetter(pe, C.a, Wt));
		}
		if (x) {
			var Ze = x.vars.onUpdate, Qe = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				M.update(0, 0, 1), Ze && Ze.apply(x, Qe || []);
			});
		}
		if (M.previous = function() {
			return Z[Z.indexOf(M) - 1];
		}, M.next = function() {
			return Z[Z.indexOf(M) + 1];
		}, M.revert = function(e, t) {
			if (!t) return M.kill(!0);
			var r = e !== !1 || !M.enabled, i = Le;
			r !== M.isReverted && (r && (Ke = Math.max(F(), M.scroll.rec || 0), P = M.progress, qe = n && n.progress()), ue && [
				ue,
				de,
				fe,
				pe
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (Le = M, M.update(r)), d && (!y || !M.isActive) && (r ? zn(d, Se, ge) : Bn(d, Se, Gt(d), ke)), r || M.update(r), Le = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((Le || !M.enabled) && !i)) {
				if (d && r && at) {
					tn(e, "scrollEnd", yn);
					return;
				}
				!En && N && N(M), Le = M, oe.tween && !a && (oe.tween.kill(), oe.tween = 0), Y && Y.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = ne(), l = re(), m = x ? x.duration() : xt(T, C), h = he <= .01 || !he, g = 0, _ = o || 0, v = Et(a) ? a.end : t.end, b = t.endTrigger || u, S = Et(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), ee = M.pinnedContainer = t.pinnedContainer && xe(t.pinnedContainer, M), E = u && Math.max(0, Z.indexOf(M)) || 0, k = E, A, I, se, z, B, V, H, we, Ee, U, G, je, Ne;
				for (te && Et(a) && (je = W.getProperty(fe, C.p), Ne = W.getProperty(pe, C.p)); k-- > 0;) V = Z[k], V.end || V.refresh(0, 1) || (Le = M), H = V.pin, H && (H === u || H === d || H === ee) && !V.isReverted && (U || (U = []), U.unshift(V), V.revert(!0, !0)), V !== Z[k] && (E--, k--);
				for (wt(S) && (S = S(M)), S = st(S, "start", M), L = Kn(S, u, s, C, F(), ue, fe, M, l, j, O, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), wt(v) && (v = v(M)), Ct(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ct(S) ? S.split(" ")[0] : "") + v : (g = cn(v.substr(2), s), v = Ct(S) ? S : (x ? W.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, L) : L) + g, b = u)), v = st(v, "end", M), R = Math.max(L, Kn(v || (b ? "100% 0" : m), b, s, C, F() + g, de, pe, M, l, j, O, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = E; k--;) V = Z[k] || {}, H = V.pin, H && V.start - V._pinPush <= L && !x && V.end > 0 && (A = V.end - (M._startClamp ? Math.max(0, V.start) : V.start), (H === u && V.start - V._pinPush < L || H === ee) && isNaN(S) && (g += A * (1 - V.progress)), H === d && (_ += A));
				if (L += g, R += g, M._startClamp && (M._startClamp += g), M._endClamp && !En && (M._endClamp = R || -.001, R = Math.min(R, xt(T, C))), he = R - L || (L -= .01) && .001, h && (P = W.utils.clamp(0, 1, W.utils.normalize(L, R, Ke))), M._pinPush = _, ue && g && (A = {}, A[C.a] = "+=" + g, ee && (A[C.p] = "-=" + F()), W.set([ue, de], A)), d && !(et && M.end >= xt(T, C))) A = Gt(d), z = C === be, se = F(), De = parseFloat(Te(C.a)) + _, !m && R > 1 && (G = (D ? K.scrollingElement || Ae : T).style, G = {
					style: G,
					value: G["overflow" + C.a.toUpperCase()]
				}, D && Gt(q)["overflow" + C.a.toUpperCase()] !== "scroll" && (G.style["overflow" + C.a.toUpperCase()] = "scroll")), Bn(d, Se, A), ve = Un(d), I = Jt(d, !0), we = O && Ce(T, z ? ye : be)(), f ? (ke = [f + C.os2, he + _ + Wt], ke.t = Se, k = f === Bt ? Yt(d, C) + he + _ : 0, k && (ke.push(C.d, k + Wt), Se.style.flexBasis !== "auto" && (Se.style.flexBasis = k + Wt)), Hn(ke), ee && Z.forEach(function(e) {
					e.pin === ee && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), O && F(Ke)) : (k = Yt(d, C), k && Se.style.flexBasis !== "auto" && (Se.style.flexBasis = k + Wt)), O && (B = {
					top: I.top + (z ? se - L : we) + Wt,
					left: I.left + (z ? we : se - L) + Wt,
					boxSizing: "border-box",
					position: "fixed"
				}, B[Pt] = B["max" + Ht] = Math.ceil(I.width) + Wt, B[Ft] = B["max" + Ut] = Math.ceil(I.height) + Wt, B[Vt] = B[Vt + Rt] = B[Vt + It] = B[Vt + zt] = B[Vt + Lt] = "0", B[Bt] = A[Bt], B[Bt + Rt] = A[Bt + Rt], B[Bt + It] = A[Bt + It], B[Bt + zt] = A[Bt + zt], B[Bt + Lt] = A[Bt + Lt], _e = Wn(ge, B, y), En && F(0)), n ? (Ee = n._initted, Ue(1), n.render(n.duration(), !0, !0), Oe = Te(C.a) - De + he + _, Me = Math.abs(he - Oe) > 1, O && Me && _e.splice(_e.length - 2, 2), n.render(0, !0, !0), Ee || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Ue(0)) : Oe = he, G && (G.value ? G.style["overflow" + C.a.toUpperCase()] = G.value : G.style.removeProperty("overflow-" + C.a));
				else if (u && F() && !x) for (I = u.parentNode; I && I !== q;) I._pinOffset && (L -= I._pinOffset, R -= I._pinOffset), I = I.parentNode;
				U && U.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = L, M.end = R, ce = le = En ? Ke : F(), !x && !En && (ce < Ke && F(Ke), M.scroll.rec = 0), M.revert(!1, !0), ae = rt(), Ge && (ie = -1, Ge.restart(!0)), Le = 0, n && w && (n._initted || qe) && n.progress() !== qe && n.progress(qe || 0, !0).render(n.time(), !0, !0), (h || P !== M.progress || x || p || n && !n._initted) && (n && !w && (n._initted || P || n.vars.immediateRender !== !1) && n.totalProgress(x && L < -.001 && !P ? W.utils.normalize(L, R, 0) : P, !0), M.progress = h || (ce - L) / he === P ? 0 : P), d && f && (Se._pinOffset = Math.round(M.progress * Oe)), Y && Y.invalidate(), isNaN(je) || (je -= W.getProperty(fe, C.p), Ne -= W.getProperty(pe, C.p), Xn(fe, C, je), Xn(ue, C, je - (o || 0)), Xn(pe, C, Ne), Xn(de, C, Ne - (o || 0))), h && !En && M.update(), c && !En && !me && (me = !0, c(M), me = !1);
			}
		}, M.getVelocity = function() {
			return (F() - le) / (rt() - Fe) * 1e3 || 0;
		}, M.endAnimation = function() {
			Dt(M.callbackAnimation), n && (Y ? Y.progress(1) : n.paused() ? w || Dt(n, M.direction < 0, 1) : Dt(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (L || M.refresh() || L) + n.labels[e] / n.duration() * he || 0;
		}, M.getTrailing = function(e) {
			var t = Z.indexOf(M), n = M.direction > 0 ? Z.slice(0, t).reverse() : Z.slice(t + 1);
			return (Ct(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= L : e.start >= R;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = En === !0 ? Ke : M.scroll(), c = e ? 0 : (o - L) / he, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, E, D, te, j, N;
				if (t && (le = ce, ce = x ? F() : o, v && (Ve = Be, Be = n && !w ? n.totalProgress() : u)), m && d && !Le && !nt && at && (!u && L < o + (o - le) / (rt() - Fe) * m ? u = 1e-4 : u === 1 && R > o + (o - le) / (rt() - Fe) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, te = h !== g, D = te || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, D && !Le && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, w && (E = !te && A[b + 1] !== "none" && A[b + 1] || A[b], N = n && (E === "complete" || E === "reset" || E in n))), ee && (te || N) && (N || l || !n) && (wt(ee) ? ee(M) : M.getTrailing(ee).forEach(function(e) {
						return e.endAnimation();
					})), w || (Y && !Le && !nt ? (Y._dp._time - Y._start !== Y._time && Y.render(Y._dp._time - Y._start), Y.resetTo ? Y.resetTo("totalProgress", u, n._tTime / n._tDur) : (Y.vars.totalProgress = u, Y.invalidate().restart())) : n && n.totalProgress(u, !!(Le && (ae || e)))), d) {
						if (e && f && (Se.style[f + C.os2] = U), !O) Ee(pt(De + Oe * u));
						else if (D) {
							if (j = !e && u > p && R + 1 > o && o + 1 >= xt(T, C), y) if (!e && (h || j)) {
								var ne = Jt(d, !0), re = o - L;
								Jn(d, q, ne.top + (C === be ? re : 0) + Wt, ne.left + (C === be ? 0 : re) + Wt);
							} else Jn(d, Se);
							Hn(h || j ? _e : ve), Me && u < 1 && h || Ee(De + (u === 1 && !j ? Oe : 0));
						}
					}
					v && !oe.tween && !Le && !nt && Ge.restart(!0), a && (te || _ && u && (u < 1 || !tt)) && Ne(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !w && !e && i(M), D && !Le ? (w && (N && (E === "complete" ? n.pause().totalProgress(1) : E === "reset" ? n.restart(!0).pause() : E === "restart" ? n.restart(!0) : n[E]()), i && i(M)), (te || !tt) && (s && te && Ot(M, s), k[b] && Ot(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), te || (b = u === 1 ? 1 : 3, k[b] && Ot(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (Tt(S) ? S : 2500) && (Dt(M.callbackAnimation), Y ? Y.progress(1) : Dt(n, E === "reverse" ? 1 : !u, 1))) : w && i && !Le && i(M);
				}
				if (Ie) {
					var ie = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					je(ie + +!!fe._isFlipped), Ie(ie);
				}
				Je && Je(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, tn(T, "resize", gn), D || tn(T, "scroll", mn), N && tn(e, "refreshInit", N), t !== !1 && (M.progress = P = 0, ce = le = ie = F()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && oe ? oe.tween : Y;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: ct(e, n && !!M._startClamp),
				end: ct(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (ke && e) {
				var t = ke.indexOf(C.d) + 1;
				ke[t] = parseFloat(ke[t]) + e + Wt, ke[1] = parseFloat(ke[1]) + e + Wt, Hn(ke);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || Y && Y.pause(), Ke = 0, I && (I.uncache = 1), N && nn(e, "refreshInit", N), Ge && (Ge.pause(), oe.tween && oe.tween.kill() && (oe.tween = 0)), !D)) {
				for (var r = Z.length; r--;) if (Z[r].scroller === T && Z[r] !== M) return;
				nn(T, "resize", gn), D || nn(T, "scroll", mn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), Y && !r && Y.kill(), o && delete dn[o];
			var i = Z.indexOf(M);
			i >= 0 && Z.splice(i, 1), i === J && Pn > 0 && J--, i = 0, Z.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || En || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), ue && [
				ue,
				de,
				fe,
				pe
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Fn === M && (Fn = 0), d && (I && (I.uncache = 1), i = 0, Z.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (I.spacer = 0)), t.onKill && t.onKill(M);
		}, Z.push(M), M.enable(!1, !1), Ye && Ye(M), n && n.add && !he) {
			var $e = M.update;
			M.update = function() {
				M.update = $e, z.cache++, L || R || M.refresh();
			}, W.delayedCall(.01, M.update), he = .01, L = R = 0;
		} else M.refresh();
		d && kn();
	}, e.register = function(t) {
		return ke || (W = t || ht(), mt() && window.document && e.enable(), ke = ot), ke;
	}, e.defaults = function(e) {
		if (e) for (var t in e) on[t] = e[t];
		return on;
	}, e.disable = function(e, t) {
		ot = 0, Z.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), nn(G, "wheel", mn), nn(K, "scroll", mn), clearInterval(Ie), nn(K, "touchcancel", ft), nn(q, "touchstart", ft), en(nn, K, "pointerdown,touchstart,mousedown", ut), en(nn, K, "pointerup,touchend,mouseup", dt), Me.kill(), St(nn);
		for (var n = 0; n < z.length; n += 3) rn(nn, z[n], z[n + 1]), rn(nn, z[n], z[n + 2]);
	}, e.enable = function() {
		if (G = window, K = document, Ae = K.documentElement, q = K.body, W) if (Ne = W.utils.toArray, Pe = W.utils.clamp, Ye = W.core.context || ft, Ue = W.core.suppressOverwrites || ft, Xe = G.history.scrollRestoration || "auto", Nn = G.pageYOffset || 0, W.core.globals("ScrollTrigger", e), q) {
			ot = 1, Ze = document.createElement("div"), Ze.style.height = "100vh", Ze.style.position = "absolute", An(), lt(), U.register(W), e.isTouch = U.isTouch, Je = U.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ge = U.isTouch === 1, tn(G, "wheel", mn), je = [
				G,
				K,
				Ae,
				q
			], W.matchMedia ? (e.matchMedia = function(e) {
				var t = W.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, W.addEventListener("matchMediaInit", function() {
				Cn(), wn();
			}), W.addEventListener("matchMediaRevert", function() {
				return Sn();
			}), W.addEventListener("matchMedia", function() {
				Mn(0, 1), bn("matchMedia");
			}), W.matchMedia().add("(orientation: portrait)", function() {
				return hn(), hn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), hn(), tn(K, "scroll", mn);
			var t = q.hasAttribute("style"), n = q.style, r = n.borderTopStyle, i = W.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = Jt(q), be.m = Math.round(a.top + be.sc()) || 0, ye.m = Math.round(a.left + ye.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (q.setAttribute("style", ""), q.removeAttribute("style")), Ie = setInterval(pn, 250), W.delayedCall(.5, function() {
				return nt = 0;
			}), tn(K, "touchcancel", ft), tn(q, "touchstart", ft), en(tn, K, "pointerdown,touchstart,mousedown", ut), en(tn, K, "pointerup,touchend,mouseup", dt), ze = W.utils.checkPrefix("transform"), Rn.push(ze), ke = rt(), Me = W.delayedCall(.2, Mn).pause(), Y = [
				K,
				"visibilitychange",
				function() {
					var e = G.innerWidth, t = G.innerHeight;
					K.hidden ? (Be = e, Ve = t) : (Be !== e || Ve !== t) && gn();
				},
				K,
				"DOMContentLoaded",
				Mn,
				G,
				"load",
				Mn,
				G,
				"resize",
				gn
			], St(tn), Z.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < z.length; o += 3) rn(nn, z[o], z[o + 1]), rn(nn, z[o], z[o + 2]);
		} else K && K.addEventListener("DOMContentLoaded", function t() {
			e.enable(), K.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (tt = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Ie) || (Ie = n) && setInterval(pn, n), "ignoreMobileResize" in t && (Ge = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (St(nn) || St(tn, t.autoRefreshEvents || "none"), We = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = xe(e), r = z.indexOf(n), i = gt(n);
		~r && z.splice(r, i ? 6 : 2), t && (i ? B.unshift(G, t, q, t, Ae, t) : B.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Z.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (Ct(e) ? xe(e) : e).getBoundingClientRect(), i = r[n ? Pt : Ft] * t || 0;
		return n ? r.right - i > 0 && r.left + i < G.innerWidth : r.bottom - i > 0 && r.top + i < G.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		Ct(e) && (e = xe(e));
		var r = e.getBoundingClientRect(), i = r[n ? Pt : Ft], a = t == null ? i / 2 : t in sn ? sn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / G.innerWidth : (r.top + a) / G.innerHeight;
	}, e.killAll = function(e) {
		if (Z.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = _n.killAll || [];
			_n = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
Q.version = "3.15.0", Q.saveStyles = function(e) {
	return e ? Ne(e).forEach(function(e) {
		if (e && e.style) {
			var t = xn.indexOf(e);
			t >= 0 && xn.splice(t, 5), xn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), W.core.getCache(e), Ye());
		}
	}) : xn;
}, Q.revert = function(e, t) {
	return wn(!e, t);
}, Q.create = function(e, t) {
	return new Q(e, t);
}, Q.refresh = function(e) {
	return e ? gn(!0) : (ke || Q.register()) && Mn(!0);
}, Q.update = function(e) {
	return ++z.cache && In(e === !0 ? 2 : 0);
}, Q.clearScrollMemory = Tn, Q.maxScroll = function(e, t) {
	return xt(e, t ? ye : be);
}, Q.getScrollFunc = function(e, t) {
	return Ce(xe(e), t ? ye : be);
}, Q.getById = function(e) {
	return dn[e];
}, Q.getAll = function() {
	return Z.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, Q.isScrolling = function() {
	return !!at;
}, Q.snapDirectional = Qt, Q.addEventListener = function(e, t) {
	var n = _n[e] || (_n[e] = []);
	~n.indexOf(t) || n.push(t);
}, Q.removeEventListener = function(e, t) {
	var n = _n[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, Q.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = W.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && wt(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return wt(a) && (a = a(), tn(Q, "refresh", function() {
		return a = t.batchMax();
	})), Ne(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push(Q.create(t));
	}), n;
};
var Qn = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, $n = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (U.isTouch ? " pinch-zoom" : "") : "none", t === Ae && e(q, n);
}, er = {
	auto: 1,
	scroll: 1
}, tr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || W.core.getCache(i), o = rt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== q && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(er[(s = Gt(i)).overflowY] || er[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !gt(i) && (er[(s = Gt(i)).overflowY] || er[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, nr = function(e, t, n, r) {
	return U.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && tr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && tn(K, U.eventTypes[0], ar, !1, !0);
		},
		onDisable: function() {
			return nn(K, U.eventTypes[0], ar, !0);
		}
	});
}, rr = /(input|label|select|textarea)/i, ir, ar = function(e) {
	var t = rr.test(e.target.tagName);
	(t || ir) && (e._gsapAllow = !0, ir = t);
}, or = function(e) {
	Et(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = xe(e.target) || Ae, l = W.core.globals().ScrollSmoother, u = l && l.get(), d = Je && (e.content && xe(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Ce(c, be), p = Ce(c, ye), m = 1, h = (U.isTouch && G.visualViewport ? G.visualViewport.scale * G.visualViewport.width : G.outerWidth) / G.innerWidth, g = 0, _ = wt(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = nr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = ft, ee = ft, C = function() {
		s = xt(c, be), ee = Pe(+!!Je, s), n && (S = Pe(0, xt(c, ye))), v = Dn;
	}, w = function() {
		d._gsap.y = pt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, T = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = pt(o.deltaY / 2), t = ee(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = pt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = z.cache, In();
			}
			return !0;
		}
		f.offset && w(), y = !0;
	}, E, D, O, k, A = function() {
		C(), E.isActive() && E.vars.scrollY > s && (f() > s ? E.progress(1) && f(s) : E.resetTo("scrollY", s));
	};
	return d && W.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return Je && e.type === "touchmove" && T(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = pt((G.visualViewport && G.visualViewport.scale || 1) / h), E.pause(), e !== m && $n(c, m > 1.01 || !n && "x"), D = p(), O = f(), C(), v = Dn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && w(), !t) k.restart(!0);
		else {
			z.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Qn(p, i, o, xt(c, ye)), E.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Qn(f, i, o, xt(c, be)), E.vars.scrollY = ee(o), E.invalidate().duration(r).play(.01), (Je && E.vars.scrollY >= s || i >= s - 1) && W.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		E._ts && E.pause(), rt() - g > 1e3 && (v = 0, g = rt());
	}, e.onChange = function(e, t, r, i, a) {
		if (Dn !== v && C(), t && n && p(S(i[2] === t ? D + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && w();
			var o = a[2] === r, s = o ? O + e.startY - e.y : f() + r - a[1], c = ee(s);
			o && s !== c && (O += c - s), f(c);
		}
		(r || t) && In();
	}, e.onEnable = function() {
		$n(c, !n && "x"), Q.addEventListener("refresh", A), tn(G, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		$n(c, !0), nn(G, "resize", A), Q.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new U(e), o.iOS = Je, Je && !f() && f(1), Je && W.ticker.add(ft), k = o._dc, E = W.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: Yn(f, f(), function() {
			return E.pause();
		}) },
		onUpdate: In,
		onComplete: k.vars.onComplete
	}), o;
};
Q.sort = function(e) {
	if (wt(e)) return Z.sort(e);
	var t = G.pageYOffset || 0;
	return Q.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + G.innerHeight;
	}), Z.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, Q.observe = function(e) {
	return new U(e);
}, Q.normalizeScroll = function(e) {
	if (e === void 0) return X;
	if (e === !0 && X) return X.enable();
	if (e === !1) {
		X && X.kill(), X = e;
		return;
	}
	var t = e instanceof U ? e : or(e);
	return X && X.target === t.target && X.kill(), gt(t.target) && (X = t), t;
}, Q.core = {
	_getVelocityProp: we,
	_inputObserver: nr,
	_scrollers: z,
	_proxies: B,
	bridge: {
		ss: function() {
			at || bn("scrollStart"), at = rt();
		},
		ref: function() {
			return Le;
		}
	}
}, ht() && W.registerPlugin(Q);
//#endregion
//#region src/modules/line-reveal.ts
var sr = "h1, h2, h3, h4, h5, h6, p", cr = [
	".fwm-modal",
	"[data-modal]",
	"[data-site-modal]",
	"[data-modal-content]",
	"[data-modal-rich-text]",
	"[data-modal-body]",
	".site-lightbox",
	"[data-site-lightbox]",
	"[role=\"dialog\"]",
	"[data-reveal=\"off\"]"
].join(", "), lr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", ur = "data-reveal-pending", dr = "data-reveal-ready", fr = {
	y: 12,
	opacity: 0
}, pr = {
	y: 0,
	opacity: 1,
	duration: .8,
	ease: "power2.out"
}, mr = !1;
function hr() {
	return /(?:^|\/)news(?:\/|$)/i.test(window.location.pathname);
}
function gr(e) {
	var t;
	return e.closest(cr) || e.closest("[hidden]") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function _r(e) {
	if (e.closest(lr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function vr(e) {
	let t = window.getComputedStyle(e);
	return [
		Math.round(e.getBoundingClientRect().width * 10) / 10,
		t.fontFamily,
		t.fontSize,
		t.fontWeight,
		t.fontStyle,
		t.lineHeight,
		t.letterSpacing,
		t.fontStretch
	].join("|");
}
function yr(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.element.style.opacity = e.played ? "1" : e.originalOpacity, e.element.style.transform = e.originalTransform, e.trigger = void 0, e.timeline = void 0;
}
function br(e) {
	return e.signature = vr(e.element), e.element.removeAttribute(ur), e.element.setAttribute(dr, ""), [e.element];
}
function xr(e) {
	let t = br(e);
	if (!t.length || e.played) return;
	let n = b.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0;
		}
	});
	n.fromTo(t, fr, pr), e.timeline = n, e.trigger = Q.create({
		trigger: e.element,
		start: "top 90%",
		end: "bottom 0%",
		invalidateOnRefresh: !1,
		animation: n,
		onEnter: () => {
			e.played = !0;
		}
	});
}
function Sr(e, t) {
	e.forEach((e, n) => {
		let r = br(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, fr, pr, .6 + n * .12 + i);
	});
}
function Cr() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function wr(e = document) {
	var t;
	if (mr || hr() || u()) return;
	let n = o(sr, e).filter(gr);
	if (!n.length) return;
	mr = !0, b.registerPlugin(Q);
	let r = n.map((e) => ({
		element: e,
		hero: _r(e),
		played: !1,
		signature: "",
		originalOpacity: e.style.opacity,
		originalTransform: e.style.transform
	}));
	r.forEach(({ element: e }) => e.setAttribute(ur, ""));
	let i, a, s = 0, c = !1, l = !1, d = () => {
		c && (i && i.progress() > 0 && (l = !0, r.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), r.forEach(yr), i = b.timeline({ paused: !0 }), Sr(r.filter((e) => e.hero && e.element.isConnected), i), r.filter((e) => !e.hero && e.element.isConnected).forEach(xr), !l && i.duration() > 0 && (i.call(() => {
			l = !0;
		}, void 0, .6), i.play(0)), Q.refresh());
	}, f = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, r.some((e) => e.element.isConnected && vr(e.element) !== e.signature) && d();
		}));
	};
	Promise.all([Cr(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		c = !0, d(), a = new ResizeObserver(f), r.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", f, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", d);
	}), window.addEventListener("pagehide", () => {
		var e;
		window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), r.forEach(yr), window.removeEventListener("resize", f), (e = document.fonts) == null || e.removeEventListener("loadingdone", d), r.forEach(({ element: e }) => e.removeAttribute(ur));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var Tr = "[data-lightbox-src]", Er = "js-lightbox", Dr = `.${Er}`, Or = `${Tr}, ${Dr}`, kr = "[data-site-lightbox]", Ar = "[data-lightbox-close]", jr = "[data-lightbox-prev]", Mr = "[data-lightbox-next]", Nr = "[data-lightbox-auto-icon]", Pr = "site-lightbox-trigger", Fr = "site-lightbox-trigger__image", Ir = "site-lightbox-trigger__icon", Lr = "w-dyn-bind-empty", Rr = "/plugins/Basic/assets/placeholder.", zr = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Br = !1, Vr = null, Hr = null, Ur = [], Wr = 0, Gr = !1, Kr = null;
function qr(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return Jr(e);
	let n = s("img", e);
	return n ? Jr(n) : "";
}
function Jr(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(Lr) || t.includes(Rr) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function Yr(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Xr(e) {
	let t = qr(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		alt: Yr(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function Zr(e) {
	let t = Xr(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(Or).filter((e) => r(e, "data-lightbox-group") === t.group).map(Xr).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function Qr() {
	let e = document.createElement("span");
	return e.className = Ir, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = zr, e;
}
function $r(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function ei(e) {
	if (!$r(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Vr == null ? void 0 : Vr.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function ti(e) {
	if (e.closest(`.${Pr}`) || !qr(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${Pr} ${Er}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(Er), e.classList.add(Fr), e.before(t), t.append(e, Qr()), ei(t);
}
function ni(e) {
	if (e instanceof HTMLImageElement) {
		ti(e);
		return;
	}
	qr(e).trim() && (e.classList.add(Pr), ei(e), s(Nr, e) || e.append(Qr()));
}
function ri() {
	o(Dr).forEach(ni);
}
function ii(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function ai() {
	var e, t, n, r, i, a;
	if (Hr) return oi(Hr), Hr;
	let o = s(kr), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = Vr == null ? void 0 : Vr.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = ii((l = Vr == null ? void 0 : Vr.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = ii((u = Vr == null ? void 0 : Vr.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = ii((d = Vr == null ? void 0 : Vr.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = s(Ar, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(jr, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(Mr, c)) == null ? document.createElement("button") : a
	};
	return Hr = f, oi(f), !o && !document.body.contains(c) && document.body.append(c), f;
}
function oi(e) {
	var t, n, r, i;
	let a = (t = Vr == null ? void 0 : Vr.t("close", "Close")) == null ? "Close" : t, o = (n = Vr == null ? void 0 : Vr.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Vr == null ? void 0 : Vr.t("next", "Next")) == null ? "Next" : r, c = (i = Vr == null ? void 0 : Vr.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function si() {
	let e = ai(), t = Ur[Wr];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = Ur.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(Wr), e.root.dataset.lightboxCount = String(Ur.length);
}
function ci(e) {
	let t = ai();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function li(e) {
	Ur.length < 2 || (Wr = (e + Ur.length) % Ur.length, si());
}
function ui() {
	li(Wr + 1);
}
function di() {
	li(Wr - 1);
}
function fi(e) {
	var t;
	let n = Zr(e);
	if (!n) return;
	let r = Gr;
	Ur = n.items, Wr = n.index, Kr = e, Gr = !0, si(), ci(!0), r || p();
	let i = ai();
	m(i.closeButton || i.root);
	let a = Ur[Wr];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: Wr,
		count: Ur.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function pi() {
	var t;
	if (!Gr || !Hr) return;
	let r = Hr, i = Kr, a = (t = Ur[Wr]) == null ? null : t;
	ci(!1), n(), Gr = !1, Ur = [], Wr = 0, Kr = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function mi(e) {
	if (!(!Gr || !Hr)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), pi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), ui();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), di();
			return;
		}
		y(Hr.root, e);
	}
}
function hi(e) {
	!Gr || !Hr || e.target === Hr.root && pi();
}
function gi(e) {
	return Vr = e.i18n, ri(), Br || (g(document, "click", Or, (e, t) => {
		e.preventDefault(), fi(t);
	}), g(document, "keydown", Dr, (e, t) => {
		$r(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), fi(t));
	}), g(document, "click", Ar, (e) => {
		e.preventDefault(), pi();
	}), g(document, "click", jr, (e) => {
		e.preventDefault(), di();
	}), g(document, "click", Mr, (e) => {
		e.preventDefault(), ui();
	}), document.addEventListener("click", hi), document.addEventListener("keydown", mi, !0), Br = !0), {
		openLightbox: fi,
		closeLightbox: pi
	};
}
//#endregion
//#region src/modules/modal.ts
var _i = "[data-modal]", vi = "[data-modal-content]", yi = "[data-modal-open]", bi = "[data-modal-close]", xi = "a[href^=\"#modal:\"]", Si = "#modal:", Ci = 460, wi = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Ti = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ei = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Di = !1, Oi = !0, ki = null, Ai = null, ji = "", Mi = null, Ni = null, Pi = /* @__PURE__ */ new Map();
function Fi(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Si) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Ii() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(bi),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = wi, t.lightboxIcon.innerHTML = Ti, Ri(t), t;
}
function Li() {
	return (!Ai || !document.body.contains(Ai.root)) && (Ai = Ii()), Ri(Ai), Ai;
}
function Ri(e) {
	var t, n;
	let r = (t = ki == null ? void 0 : ki.t("close", "Close")) == null ? "Close" : t, i = (n = ki == null ? void 0 : ki.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function zi(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Bi(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = zi(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = x(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Vi(e) {
	var t, n, r;
	let i = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = zi(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: x(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = zi(e, "[data-modal-image]"), s = x(a);
	return s ? [{
		src: s,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function Hi(e) {
	var t, n, i, a, o, s, c, l;
	let u = r(e, "data-modal-content");
	if (!u) return null;
	let d = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", f = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, p = Vi(e), m = p[0], h = e.querySelector("[data-modal-body]");
	return {
		id: u,
		address: d,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: f,
		image: (o = m == null ? void 0 : m.src) == null ? "" : o,
		imageAlt: (s = m == null ? void 0 : m.alt) == null ? "" : s,
		caption: (c = m == null ? void 0 : m.caption) == null ? "" : c,
		html: (l = h == null ? void 0 : h.innerHTML) == null ? "" : l,
		work: Bi(e),
		gallery: p
	};
}
function Ui(e) {
	var t, n, i, a, o, s, c, l, u, d, f;
	let p = r(e, "data-modal");
	if (!p) return null;
	let m = e.querySelector(".fwm-modal__image"), h = x(m), g = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, _ = (i = e.closest(".w-dyn-item")) == null ? (a = e.closest(".w-embed")) == null ? void 0 : a.parentElement : i, v = _ ? Array.from(_.querySelectorAll("[data-modal-rich-text]")).find((t) => t.closest(".w-dyn-item") === e.closest(".w-dyn-item")) : void 0, y = (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o;
	return v && (v.hidden = !0), {
		id: p,
		address: (c = (l = e.querySelector(".fwm-modal__address")) == null || (l = l.textContent) == null ? void 0 : l.trim()) == null ? "" : c,
		layout: "default",
		headline: "",
		image: h,
		imageAlt: (u = m == null ? void 0 : m.alt) == null ? "" : u,
		caption: g,
		html: y + ((d = v == null ? void 0 : v.innerHTML) == null ? "" : d),
		work: null,
		gallery: h ? [{
			src: h,
			alt: (f = m == null ? void 0 : m.alt) == null ? "" : f,
			caption: g
		}] : []
	};
}
function Wi() {
	o(vi).forEach((e) => {
		let t = Hi(e);
		t && Pi.set(t.id, t);
	}), o(_i).forEach((e) => {
		let t = Ui(e);
		t && Pi.set(t.id, t), e.remove();
	});
}
function Gi(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(vi).find((e) => r(e, "data-modal-content") === n), a = i ? Hi(i) : null;
	return a && Pi.set(n, a), (t = a == null ? Pi.get(n) : a) == null ? null : t;
}
function Ki(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", n), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.src = e.thumbnail, t.alt = e.thumbnailAlt, t.loading = "lazy", t.decoding = "async", a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = Ei, o.append(e);
	}
	return i.append(o), i;
}
function qi(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Ti, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function Ji(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function Yi(e, t) {
	e.innerHTML = t, e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function Xi(e, t) {
	var n, r;
	let i = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !i, e.imageLink.href = i ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", i ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = i ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, Yi(e.text, t.html), Ji(e);
	let a = (n = (r = t.gallery) == null ? void 0 : r.slice(1).filter((e) => e.src)) == null ? [] : n;
	e.gallery.hidden = a.length === 0, a.forEach((t, n) => e.gallery.append(qi(t, n)));
}
function Zi(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, Yi(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(Ki(t.work)), i.forEach((t, n) => {
		e.gallery.append(qi(t, n));
	});
}
function Qi(e) {
	let t = Li();
	return e.layout === "context" ? Zi(t, e) : Xi(t, e), t;
}
function $i(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function ea(e) {
	Ni !== null && (window.clearTimeout(Ni), Ni = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function ta(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Ni = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Ni = null;
	}, u() ? 0 : Ci), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function na(e, t) {
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
	ji && ia(), Pi.set(g.id, g), Mi = t == null ? c() : t, ji = g.id;
	let _ = Qi(g);
	ea(_), p(), $i(_), d(_.root, "site:modal-open", {
		id: ji,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function ra(e, t) {
	let n = Gi(e);
	n && na(n, t);
}
function ia() {
	if (!ji || !Ai) return;
	let t = ji, r = Mi;
	ta(Ai), n(), ji = "", Mi = null, d(Ai.root, "site:modal-close", {
		id: t,
		modal: Ai.root
	}), e(r);
}
function aa(e) {
	if (!(!ji || !Ai) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), ia();
			return;
		}
		y(Ai.panel, e);
	}
}
function oa(e) {
	if (!Oi || !ji || !Ai) return;
	let t = e.target;
	!i(t) || t !== Ai.root || ia();
}
function sa(e) {
	var n;
	return Oi = (n = e.closeOnBackdrop) == null || n, ki = e.i18n, Wi(), Li(), Di || (g(document, "click", yi, (e, n) => {
		e.preventDefault(), ra(t(n, "data-modal-open"), n);
	}), g(document, "click", xi, (e, t) => {
		e.preventDefault(), ra(Fi(t), t);
	}), g(document, "click", bi, (e, t) => {
		Ai != null && Ai.root.contains(t) && (e.preventDefault(), ia());
	}), document.addEventListener("click", oa), document.addEventListener("keydown", aa), Di = !0), {
		openModal: ra,
		openContentModal: na,
		closeModal: ia
	};
}
//#endregion
//#region src/modules/site-menu.ts
var ca = "[data-site-menu]", la = "[data-site-menu-panel]", ua = "[data-site-menu-toggle]", da = "[data-site-menu-toggle-label]", fa = "[data-site-menu-toggle-label-text]", pa = "[data-site-menu-toggle-label-ghost]", ma = "data-site-menu-toggle-label-text", ha = "data-site-menu-toggle-label-ghost", ga = "[data-site-menu-link]", _a = "[data-site-menu-indicator]", va = "is-active", ya = "is-open", ba = "is-ready", xa = "data-site-menu-open-label", Sa = "data-site-menu-closed-label", Ca = "data-site-menu-current-key", wa = "data-site-menu-label", Ta = "data-site-menu-key", Ea = "data-site-menu-original-tabindex", Da = "CLOSE", Oa = "MENU", ka = .42, Aa = [], ja = !1;
function Ma(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Na(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Ma(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Pa(e, t) {
	return t ? r(e, Ta) === t : !1;
}
function Fa(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Pa(e, r(t, Ca) || ((n = document.documentElement.getAttribute(Ca)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(Ca)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = Na(e);
	return a ? a === Ma(window.location.pathname) : !1;
}
function Ia(e) {
	var t, n;
	return r(e, wa) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function La(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(va) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Fa(t, e.root)) : t;
	return n ? Ia(n) : "";
}
function Ra(e) {
	var t, n;
	let i = (t = e.toggleLabel) == null ? e.toggle : t, a = i.style.width, o = !0, s = 0, c = document.createElement("span");
	c.setAttribute("aria-hidden", "true"), c.style.cssText = [
		"position:absolute",
		"left:-100000px",
		"top:0",
		"display:inline-block",
		"width:max-content",
		"min-width:0",
		"max-width:none",
		"white-space:nowrap",
		"visibility:hidden",
		"pointer-events:none",
		"overflow:visible",
		"transform:none",
		"transition:none"
	].join(";"), i.append(c);
	let l = () => {
		if (!o) return;
		let t = [
			La(e),
			r(e.root, Sa) || Oa,
			r(e.root, xa) || Da
		];
		c.textContent = "";
		let n = t.reduce((e, t) => (c.textContent = t, Math.max(e, c.getBoundingClientRect().width)), 0);
		n > 0 && (i.style.width = `${Math.ceil(n)}px`);
	}, u = () => {
		s && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
			s = 0, l();
		});
	};
	return l(), window.addEventListener("resize", u), (n = document.fonts) == null || n.ready.then(l), () => {
		o = !1, window.removeEventListener("resize", u), s && cancelAnimationFrame(s), c.remove(), i.style.width = a;
	};
}
function za(e) {
	var t, n;
	let r = s(fa, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(ma, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Ba(e) {
	o(pa, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Va(e, t = !0) {
	var n, i;
	let a = r(e.root, xa) || Da, o = r(e.root, Sa) || Oa, s = La(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = za(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
	if (p && t && !u()) {
		if (c === p.from) {
			p.timeline.reverse();
			return;
		}
		if (c === p.to) {
			p.timeline.play();
			return;
		}
	}
	if (f === c && !p) return;
	let m = p && p.timeline.progress() < .5 ? p.from : f;
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), Ba(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(ha, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: ka,
			ease: "power2.inOut"
		},
		onUpdate: () => {
			let e = g.reversed();
			d.setAttribute("aria-hidden", String(e)), h.setAttribute("aria-hidden", String(!e));
		}
	});
	g.fromTo(h, { yPercent: 0 }, { yPercent: -100 }, 0), g.fromTo(d, { yPercent: 100 }, { yPercent: 0 }, 0), e.labelTransition = {
		timeline: g,
		from: m,
		to: c
	};
}
function Ha(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Ea);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Ea) && e.hasAttribute("tabindex") && e.setAttribute(Ea, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Ua(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(ya, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Ha(e, t), Va(e, n);
}
function Wa(e, t, n) {
	b.killTweensOf(e.panel), b.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	if (!u()) return b.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? .38 : .28,
		ease: t ? "power3.out" : "power2.inOut",
		onComplete: () => {
			b.set(e.panel, { clearProps: "height" });
		}
	});
}
function Ga(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Ua(e, !0), Wa(e, !0, t);
}
function Ka(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return Ua(e, !1), Wa(e, !1, t);
}
function qa(e) {
	let t = s(la, e);
	if (t) return b.killTweensOf(t), b.to(t, {
		height: 0,
		duration: .4,
		ease: "power2.inOut"
	});
}
function Ja(e) {
	e.isOpen ? Ka(e) : Ga(e);
}
function Ya(e) {
	e.links.forEach((t) => {
		let n = Fa(t, e.root), r = s(_a, t);
		t.classList.toggle(va, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function Xa(e) {
	var t;
	let n = s(la, e), r = s(ua, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(da, r)) == null ? s(da, e) : t,
		links: o(ga, e),
		isOpen: e.classList.contains(ya),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Aa.length + 1}`), r.setAttribute("aria-controls", n.id), Ya(i), Ua(i, i.isOpen, !1), i.cleanup.push(Ra(i)), e.classList.add(ba);
	let a = (e) => {
		e.preventDefault(), Ja(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || Ka(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (Ka(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(ga) || Ka(i);
	}, d = () => {
		i.isHovered = !0, Va(i);
	}, f = () => {
		i.isHovered = !1, Va(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function Za(e = document) {
	if (ja && e === document) return () => void 0;
	e === document && (ja = !0);
	let t = o(ca, e).map(Xa).filter((e) => !!e);
	return Aa.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(ba, ya);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(fa, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), Ba(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Ha(e, !0);
		});
	};
}
//#endregion
//#region src/modules/site-preloader-state.ts
var Qa = "is-site-preloader-exiting", $a = "[data-site-preloader]", eo = 2e3;
function to(e) {
	let t = window.__sitePreloader;
	t != null && t.active ? t.ready.then(e) : e();
}
//#endregion
//#region src/modules/page-transition.ts
var no = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, ro = "page-transition-overlay", io = "[data-page-transition-overlay], .page-transition-overlay", ao = "site-page-transition", oo = "pending", so = "is-page-transition-pending", co = "[data-site-menu]", lo = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-flip]",
	"[data-work-flip-back]",
	"[download]"
].join(","), uo = !1, fo = !1;
function po(e) {
	document.documentElement.classList.toggle(so, e);
}
function mo() {
	try {
		po(window.sessionStorage.getItem(ao) === oo);
	} catch (e) {
		po(!1);
	}
}
function ho() {
	let e = document.querySelector(io);
	if (e) return e.classList.add(ro), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = ro, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function go(e) {
	var t;
	return !!(e.closest(lo) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function _o(e, t) {
	return !fo && !e.defaultPrevented && !l(e) && !go(t);
}
function vo() {
	try {
		window.sessionStorage.setItem(ao, oo), po(!0);
	} catch (e) {}
}
function yo() {
	try {
		let e = window.sessionStorage.getItem(ao) === oo;
		return window.sessionStorage.removeItem(ao), po(!1), e;
	} catch (e) {
		return po(!1), !1;
	}
}
function bo(e) {
	let t = yo(), n = Array.from(document.querySelectorAll(co)), r = () => {
		n.forEach((e) => {
			b.fromTo(e, {
				y: Math.max(0, window.innerHeight - e.getBoundingClientRect().top) + 8,
				autoAlpha: 1
			}, {
				y: 0,
				duration: .55,
				ease: "power3.out",
				clearProps: "transform,opacity,visibility"
			});
		});
	};
	if (u()) {
		b.set(e, {
			yPercent: -100,
			y: 0
		});
		return;
	}
	if (b.set(n, { autoAlpha: 0 }), !t) {
		b.set(e, {
			yPercent: -100,
			y: 0
		}), r();
		return;
	}
	b.fromTo(e, {
		yPercent: 0,
		y: 0
	}, {
		yPercent: 100,
		delay: no.holdDuration,
		duration: no.revealDuration,
		ease: no.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			}), r();
		}
	});
}
function xo(e, t, n) {
	fo = !0, b.killTweensOf(t);
	let r = b.timeline();
	if (n) {
		b.killTweensOf(n);
		let e = qa(n);
		e && r.add(e);
	}
	r.call(vo, [], 0), r.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: no.coverDuration,
		ease: no.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	}, 0);
}
function So(e, t) {
	if (!e.persisted) return;
	fo = !1, yo(), b.killTweensOf(t), b.set(t, {
		yPercent: -100,
		y: 0
	});
	let n = document.querySelectorAll(co);
	b.killTweensOf(n), b.set(n, { clearProps: "transform,opacity,visibility" });
	let r = document.querySelectorAll("[data-site-menu-panel]");
	b.killTweensOf(r), b.set(r, { clearProps: "height" });
}
function Co() {
	if (uo) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Co, { once: !0 });
		return;
	}
	uo = !0;
	let e = ho();
	to(() => bo(e)), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (fo) {
			t.preventDefault();
			return;
		}
		if (!_o(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), xo(i, e, r.closest(co)));
	}, !0), window.addEventListener("pageshow", (t) => So(t, e));
}
mo();
//#endregion
//#region src/modules/parallax.ts
var wo = "[data-parallax]", To = "data-parallax", Eo = "data-parallax-ready", Do = "fw-parallax-window", Oo = "fw-parallax-window--self-sized", ko = "fw-parallax-inner", Ao = 60, jo = 160, Mo = ".site-lightbox-trigger", No = 1, Po = !1;
function Fo() {
	Po || (Po = !0, b.registerPlugin(Q));
}
function Io(e) {
	let t = e.getAttribute(To);
	if (t === null || t.trim() === "") return Ao;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.min(Math.abs(n), jo) : Ao;
}
function Lo(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Ro(e, t) {
	var n;
	let r = (n = e.closest(Mo)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(Do)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(Do);
	let a = document.createElement("span"), o = t / 2 + No;
	if (a.className = ko, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(Do), null;
		r.classList.add(Oo), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function zo(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Bo(e)
		});
		return;
	}
	n.forEach((n) => {
		Lo(n).then(() => {
			if (!n.isConnected) return;
			let r = Ro(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: Bo(e)
			}), Q.refresh());
		});
	});
}
function Bo(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function Vo(e = document) {
	let t = o(wo, e).filter((e) => !e.hasAttribute(Eo));
	t.length === 0 || u() || (Fo(), t.forEach((e) => {
		let t = Io(e);
		t !== 0 && (e.setAttribute(Eo, ""), zo(e, t));
	}));
}
//#endregion
//#region node_modules/gsap/utils/matrix.js
var Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo = "transform", Zo = Xo + "Origin", Qo, $o = function(e) {
	var t = e.ownerDocument || e;
	for (!(Xo in e.style) && ("msTransform" in e.style) && (Xo = "msTransform", Zo = Xo + "Origin"); t.parentNode && (t = t.parentNode););
	if (Uo = window, Jo = new fs(), t) {
		Ho = t, Wo = t.documentElement, Go = t.body, Yo = Ho.createElementNS("http://www.w3.org/2000/svg", "g"), Yo.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", Qo = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, es = function(e) {
	for (var t, n; e && e !== Go;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, ts = [], ns = [], rs = function() {
	return Uo.pageYOffset || Ho.scrollTop || Wo.scrollTop || Go.scrollTop || 0;
}, is = function() {
	return Uo.pageXOffset || Ho.scrollLeft || Wo.scrollLeft || Go.scrollLeft || 0;
}, as = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, os = function e(t) {
	if (Uo.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, ss = function e(t, n) {
	if (t.parentNode && (Ho || $o(t))) {
		var r = as(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = Ho.createElementNS ? Ho.createElementNS(i.replace(/^https/, "http"), a) : Ho.createElement(a);
		return n && (r ? (qo || (qo = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), qo.appendChild(l)) : (Ko || (Ko = e(t), Object.assign(Ko.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), Ko.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, cs = function(e) {
	for (var t = new fs(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, ls = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[Xo], e.style[Xo] = "none", e.appendChild(Yo), t = Yo.getCTM(), e.removeChild(Yo), n ? e.style[Xo] = n : e.style.removeProperty(Xo.replace(/([A-Z])/g, "-$1").toLowerCase())), t || Jo.clone();
}, us = function(e, t) {
	var n = as(e), r = e === n, i = n ? ts : ns, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === Uo) return e;
	if (i.length || i.push(ss(e, 1), ss(e, 2), ss(e, 3)), s = n ? qo : Ko, n) r ? (l = ls(e), u = -l.e / l.a, d = -l.f / l.d, c = Jo) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? cs(c) : c.getItem(0).matrix : Jo, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new fs(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, Qo) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (Uo.getComputedStyle(l)[Xo] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = Uo.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[Xo] = f[Xo], l[Zo] = f[Zo], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, ds = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, fs = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), ds(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return ds(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return ds(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
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
function ps(e, t, n, r) {
	if (!e || !e.parentNode || (Ho || $o(e)).documentElement === e) return new fs();
	var i = es(e), a = as(e) ? ts : ns, o = us(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && os(e), f = new fs((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : is()), s.top + (d ? 0 : rs()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region node_modules/gsap/Flip.js
var ms = 1, hs, gs, $, _s, vs, ys, bs, xs = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, Ss = {}, Cs = 180 / Math.PI, ws = Math.PI / 180, Ts = {}, Es = {}, Ds = {}, Os = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, ks = Os("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), As = Os("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), js = function(e) {
	return hs(e)[0] || console.warn("Element not found:", e);
}, Ms = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, Ns = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, Ps = {
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
}, Fs = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, Is = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, Ls = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, Rs = {}, zs = function(e) {
	var t = Rs[e] = Os(e);
	return Ds[e] = t.concat(As), t;
}, Bs = function(e) {
	var t = e._gsap || gs.core.getCache(e);
	return t.gmCache === gs.ticker.frame ? t.gMatrix : (t.gmCache = gs.ticker.frame, t.gMatrix = ps(e, !0, !1, !0));
}, Vs = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, Hs = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = Vs(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, Us = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : Es[a] || (Es[a] = Is(a)), o);
	return n;
}, Ws = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, Gs = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(Ws);
}, Ks = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), qs = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), $ && n !== 1) return $._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), $._final.push(function() {
		return (e.cache.uncache = 1) && Ws(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (Us(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), Us(e, Ks), f = window.getComputedStyle(r); l--;) c[Ks[l]] = f[Ks[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new gc(r);
	else if (u = Ls(e, Ts), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new fs(1, 0, 0, 1, p.left + is(), p.top + rs());
	} else u.matrix = ps(r, !1, !1, !0);
	return u = rc(u, e, !0), e.x = ys(u.x, .01), e.y = ys(u.y, .01), r;
}, Js = function(e, t) {
	return t !== !0 && (t = hs(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, Ys = function(e) {
	return Hs(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && qs(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, Xs = function(e, t) {
	return t && e.idLookup[Zs(t).id] || e.elementStates[0];
}, Zs = function(e, t, n, r) {
	return e instanceof gc ? e : e instanceof hc ? Xs(e, r) : new gc(typeof e == "string" ? js(e) || console.warn(e + " not found") : e, t, n);
}, Qs = function(e, t) {
	for (var n = gs.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, $s = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, ec = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + ms++), t;
}, tc = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, nc = function(e, t, n) {
	return e && t.length && n.add(e(tc(t), n, new hc(t, 0, !0)), 0);
}, rc = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && bs && bs(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, ee = !S && e.simple && t.simple && !i, C, w, T, E, D, O, k;
	return ee || !c ? (p = m = 1, h = C = 0) : (D = Bs(c), O = D.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = Ms(Math.atan2(O.b, O.a) * Cs), C = Ms(Math.atan2(O.c, O.d) * Cs + h) % 360, p = Math.sqrt(O.a ** 2 + O.b ** 2), m = Math.sqrt(O.c ** 2 + O.d ** 2) * Math.cos(C * ws), i && (i = hs(i)[0], E = gs.getProperty(i), k = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: E("scaleX"),
		scaleY: E("scaleY"),
		width: k ? k.width : Math.ceil(parseFloat(E("width", "px"))),
		height: k ? k.height : parseFloat(E("height", "px"))
	}), s.rotation = h + "deg", s.skewX = C + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = ys(d * p / v.scaleX, 0), f = ys(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && $s(o, t.props), ee || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), O = ps(i || o, !1, !1, !0), w = D.apply({
		x: O.e,
		y: O.f
	}), T = D.apply({
		x: b,
		y: x
	}), l += T.x - w.x, u += T.y - w.y) : (D.e = D.f = 0, T = D.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += T.x, u += T.y), l = ys(l, .02), u = ys(u, .02), a && !(a instanceof gc) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = C, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, ic = function(e, t) {
	return e instanceof hc ? e : new hc(e, t);
}, ac = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, oc = [], sc = "width,height,overflowX,overflowY".split(","), cc, lc = function(e) {
	if (e !== cc) {
		var t = vs.style, n = vs.clientWidth === window.outerWidth, r = vs.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) oc[i] = t[sc[i]];
			n && (t.width = vs.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = vs.clientHeight + "px", t.overflowX = "hidden"), cc = e;
		} else if (cc) {
			for (; i--;) oc[i] ? t[sc[i]] = oc[i] : t.removeProperty(Is(sc[i]));
			cc = e;
		}
	}
}, uc = function(e, t) {
	for (var n = 0; n < e.length; n += 3) gs.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, dc = function(e, t, n, r) {
	e instanceof hc && t instanceof hc || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, ee = i.prune, C = ("props" in n ? n : e).props, w = Ls(n, Ps), T = gs.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), E = w, D = [], O = [], k = [], A = [], te = S === !0 ? 1 : S || 0, j = typeof S == "function" ? S : function() {
		return te;
	}, M = e.interrupted || t.interrupted, N = T[r === 1 ? "from" : "to"], ne, re, ie, ae, P, F, oe, I, se, ce, le, L, R, z;
	for (re in t.idLookup) le = t.alt[re] ? ac(t, e, re) : t.idLookup[re], P = le.element, ce = e.idLookup[re], e.alt[re] && P === ce.element && (e.alt[re].isVisible || !le.isVisible) && (ce = e.alt[re]), ce ? (F = {
		t: P,
		b: ce,
		a: le,
		sd: ce.element === P ? 0 : le.isVisible ? 1 : -1
	}, k.push(F), F.sd && (F.sd < 0 && (F.b = le, F.a = ce), M && Us(F.b, C ? Ds[C] : As), b && k.push(F.swap = {
		t: ce.element,
		b: F.b,
		a: F.a,
		sd: -F.sd,
		swap: F
	})), P._flip = ce.element._flip = $ ? $.timeline : T) : le.isVisible && (k.push({
		t: P,
		b: Ls(le, { isVisible: 1 }),
		a: le,
		sd: 0,
		entering: 1
	}), P._flip = $ ? $.timeline : T);
	if (C && (Rs[C] || zs(C)).forEach(function(e) {
		return w[e] = function(t) {
			return k[t].a.props[e];
		};
	}), k.finalStates = se = [], L = function() {
		Hs(k), lc(!0);
		var t = [];
		for (ae = 0; ae < k.length; ae++) F = k[ae], R = F.a, z = F.b, ee && !R.isDifferent(z) && !F.entering ? k.splice(ae--, 1) : (P = F.t, _ && !(F.sd < 0) && ae && (R = F.a = R.clone({ matrix: ps(P, !1, !1, !0) })), z.isVisible && R.isVisible ? (F.sd < 0 ? (_ && uc(t, 1), oe = new gc(P, C, e.simple), rc(oe, R, y, 0, 0, oe), oe.matrix = ps(P, !1, !1, !0), oe.bounds = P.getBoundingClientRect(), oe.css = F.b.css, F.a = R = oe, b && (P.style.opacity = M ? z.opacity : R.opacity), x && A.push(P), _ && (uc(t, 2), t.push(P, P.getAttribute("style")))) : F.sd > 0 && b && (P.style.opacity = M ? R.opacity - z.opacity : "0"), rc(R, z, y, C), _ && F.sd < 0 && t.push(P.getAttribute("style"))) : z.isVisible !== R.isVisible && (z.isVisible ? R.isVisible || (z.css = R.css, O.push(z), k.splice(ae--, 1), c && _ && rc(R, z, y, C)) : (R.isVisible && D.push(R), k.splice(ae--, 1))), y || (P.style.maxWidth = Math.max(R.width, z.width) + "px", P.style.maxHeight = Math.max(R.height, z.height) + "px", P.style.minWidth = Math.min(R.width, z.width) + "px", P.style.minHeight = Math.min(R.height, z.height) + "px"), _ && g && P.classList.add(g)), se.push(R);
		var r;
		if (g && (r = se.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), lc(!1), y ? (w.scaleX = function(e) {
			return k[e].a.scaleX;
		}, w.scaleY = function(e) {
			return k[e].a.scaleY;
		}) : (w.width = function(e) {
			return k[e].a.width + "px";
		}, w.height = function(e) {
			return k[e].a.height + "px";
		}, w.autoRound = n.autoRound || !1), w.x = function(e) {
			return k[e].a.x + "px";
		}, w.y = function(e) {
			return k[e].a.y + "px";
		}, w.rotation = function(e) {
			return k[e].a.rotation + (S ? j(e, I[e], I) * 360 : 0);
		}, w.skewX = function(e) {
			return k[e].a.skewX;
		}, I = k.map(function(e) {
			return e.t;
		}), (v || v === 0) && (w.modifiers = { zIndex: function() {
			return v;
		} }, w.zIndex = v, w.immediateRender = n.immediateRender !== !1), b && (w.opacity = function(e) {
			return k[e].sd < 0 ? 0 : k[e].sd > 0 ? k[e].a.opacity : "+=0";
		}), A.length) {
			x = gs.utils.distribute(x);
			var i = I.slice(A.length);
			w.stagger = function(e, t) {
				return x(~A.indexOf(t) ? I.indexOf(k[e].swap.t) : e, t, i);
			};
		}
		if (ks.forEach(function(e) {
			return n[e] && T.eventCallback(e, n[e], n[e + "Params"]);
		}), u && I.length) for (re in E = Ls(w, Ps), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) ne = Ls(u[re], Fs), ne[re] = w[re], !("duration" in ne) && "duration" in w && (ne.duration = w.duration), ne.stagger = w.stagger, N.call(T, I, ne, 0), delete E[re];
		(I.length || O.length || D.length) && (g && T.add(function() {
			return Ns(r, g, T._zTime < 0 ? "remove" : "add");
		}, 0) && !f && Ns(r, g, "add"), I.length && N.call(T, I, E, 0)), nc(o, D, T), nc(s, O, T);
		var l = $ && $.timeline;
		l && (l.add(T, 0), $._final.push(function() {
			return Gs(k, !a);
		})), ie = T.duration(), T.call(function() {
			var e = T.time() >= ie;
			e && !l && Gs(k, !a), g && Ns(r, g, e ? "remove" : "add");
		});
	}, l && (c = k.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), $) {
		var B;
		c && (B = $._abs).push.apply(B, Js(k, c)), $._run.push(L);
	} else c && Ys(Js(k, c)), L();
	var ue = $ ? $.timeline : T;
	return ue.revert = function() {
		return pc(ue, 1, 1);
	}, ue;
}, fc = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, pc = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (fc(e), t < 2 && e.progress(1), e.kill()), !0;
}, mc = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, hc = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = tc(e), this.elementStates = e, mc(this);
		else {
			this.targets = hs(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			$ && !r && $._kill.push(this), this.update(r || !!$);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new gc(e, t.props, t.simple);
		}), mc(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, mc(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = Hs(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = ps(o.element, !1, !1, !0)), s = i[o.id], s && rc(o, s, t, !0, 0, o), o.matrix = ps(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || Ts;
		return (t in n ? n : n.props || Ts)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), mc(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? ac(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = Ds[this.props] || As, t = this.elementStates.length; t--;) Us(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = pc(i, +!e);
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
		return this.elementStates[this.targets.indexOf(js(e))];
	}, t.makeAbsolute = function() {
		return Hs(this.elementStates.slice(0), !0, !0).map(qs);
	}, e;
}(), gc = /*#__PURE__*/ function() {
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
		var n = this, r = n.element, i = gs.getProperty(r), a = gs.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new fs(1, 0, 0, 1, o.left + is(), o.top + rs()) : ps(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = ec(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : ys(i("width", "px"), .04), n.height = s ? s.height : ys(i("height", "px"), .04), e && Qs(n, Rs[e] || zs(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && ls(r).inverse(), n.simple = t || Ms(c.a) === 1 && !Ms(c.b) && !Ms(c.c) && Ms(c.d) === 1, n.uncache = 0;
	}, e;
}(), _c = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), vc = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new hc(), this.timeline = gs.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new _c(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = $, r = _s;
		return $ = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, _s = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), _s = r, $ = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = $, n = this.timeline, r = this.actions.length, i, a;
		for ($ = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new hc(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare(yc.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), Ys(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), xs(e, "onComplete"));
		}), $ = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return xs(this, "onStart"), n.restart(), this;
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
		return this !== $ && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete Ss[this.id];
	}, e;
}(), yc = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = ic(t, n);
		return _s && _s.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), dc(e, ic(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return dc(e, ic(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return dc(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? Ls(n, Fs) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && js(n.fitChild), p = Zs(t, c, d, e), m = Zs(e, 0, d, p), h = c ? Ds[c] : As, g = gs.context();
		return c && $s(r, p.props), Us(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			Ws(m), u && u.apply(this, arguments);
		}), a && qs(m, p), r = rc(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return Ws(m);
			};
		}), s ? r : r.duration ? gs.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof hc ? e : new hc(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), Ss[e] || (Ss[e] = new vc(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof hc ? e.targets : hs(e)).forEach(function(e) {
			return e && pc(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (js(e) || Ts)._flip;
	}, e.getElementState = function(e, t) {
		return new gc(js(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = ps(t, !0, !0).multiply(ps(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (vs = typeof document < "u" && document.body, vs) {
			gs = e, $o(vs), hs = gs.utils.toArray, bs = gs.core.getStyleSaver;
			var t = gs.utils.snap(.1);
			ys = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
//#endregion
//#region src/modules/work-flip.ts
yc.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin(yc), b.registerPlugin(yc);
var bc = {
	leave: .26,
	flip: .86,
	imageFade: .24,
	contentFade: .5,
	contentSpread: .3,
	ease: "power3.inOut"
}, xc = 2600, Sc = "work-flip-ghost", Cc = "[data-work-flip-ghost]", wc = "a[data-work-flip]", Tc = ".cms-works__image-wrap", Ec = "img", Dc = "[data-work-flip-back], [data-back-button]", Oc = "[data-work-flip-target]", kc = "data-work-flip-id", Ac = "site:works-ready", jc = "site:work-detail-ready", Mc = [
	"SCRIPT",
	"STYLE",
	"LINK",
	"NOSCRIPT",
	"TEMPLATE",
	"META"
], Nc = "data-work-flip-faded", Pc = "data-work-flip-hidden", Fc = !1, Ic = !1, Lc = 0;
function Rc(e) {
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		left: t.left,
		width: t.width,
		height: t.height
	};
}
function zc(e) {
	return e instanceof HTMLElement && !Mc.includes(e.tagName) && !e.hasAttribute("data-site-preloader");
}
function Bc(e, t) {
	let n = document.createElement("div"), r = document.createElement("img");
	return n.className = Sc, n.setAttribute("data-work-flip-ghost", ""), n.setAttribute("aria-hidden", "true"), n.style.top = `${e.top}px`, n.style.left = `${e.left}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`, r.src = t, r.alt = "", r.decoding = "sync", n.append(r), document.body.append(n), n;
}
function Vc() {
	return document.querySelector(Cc);
}
function Hc() {
	Array.from(document.querySelectorAll(Cc)).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Uc() {
	document.documentElement.classList.remove(T), Hc(), ee();
}
function Wc(e) {
	var t;
	return e ? (t = Array.from(document.querySelectorAll(`[${kc}]`)).find((t) => t.getAttribute(kc) === e)) == null ? null : t : null;
}
function Gc(e, t) {
	let n = new Set(t), r = [], i = e;
	for (; i && i !== document.body && i.parentElement;) {
		var a, o;
		let e = i;
		Array.from((a = (o = e.parentElement) == null ? void 0 : o.children) == null ? [] : a).forEach((t) => {
			t === e || n.has(t) || !zc(t) || r.push(t);
		}), i = e.parentElement;
	}
	return r;
}
function Kc(e) {
	return Array.from(document.body.children).filter((t) => t !== e && zc(t));
}
function qc(e) {
	return e.forEach((e) => e.setAttribute(Nc, "")), e;
}
function Jc(e) {
	b.set(e, { clearProps: "opacity,visibility" }), e.forEach((e) => e.removeAttribute(Nc));
}
function Yc(e) {
	return e.width > 0 && e.height > 0;
}
function Xc(e) {
	return e.height > 0 ? e.width / e.height : 0;
}
function Zc(e, t) {
	e.complete && e.naturalWidth > 0 || !t.ratio || (e.style.aspectRatio = String(t.ratio), e.setAttribute("data-work-flip-ratio", ""));
}
function Qc(e) {
	e.hasAttribute("data-work-flip-ratio") && (e.style.aspectRatio = "", e.removeAttribute("data-work-flip-ratio"));
}
function $c(e, t) {
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
function el() {
	Ic = !1, Hc();
	let e = Array.from(document.querySelectorAll(`[${Nc}]`));
	b.killTweensOf(e), Jc(e), Array.from(document.querySelectorAll(`[${Pc}]`)).forEach((e) => {
		e.style.visibility = "", e.removeAttribute(Pc);
	}), document.documentElement.classList.remove(T);
}
function tl(e, t, n) {
	let r = Rc(e), i = Bc(r, t.currentSrc || t.src), a = i.firstElementChild, o = t.getBoundingClientRect().width / Math.max(r.width, 1), s = !1, c = () => {
		s || (s = !0, n());
	}, l = b.timeline({ onComplete: c });
	window.setTimeout(c, bc.leave * 1e3 + 400), Ic = !0, e.style.visibility = "hidden", e.setAttribute(Pc, ""), b.set(a, {
		scale: o > 1.002 ? o : 1,
		transformOrigin: "50% 50%"
	}), l.to(qc(Kc(i)), {
		autoAlpha: 0,
		duration: bc.leave,
		ease: "power2.out"
	}, 0), o > 1.002 && l.to(a, {
		scale: 1,
		duration: bc.leave,
		ease: "power2.out"
	}, 0);
}
function nl(e, t, n) {
	var r;
	let i = document.documentElement, a = i.classList.contains("is-work-flip-pending") ? qc(Gc(t, [e])) : [], o = n.direction === "back" ? (r = t.closest(Tc)) == null ? t : r : t, s = !1, c = 0, l = (n) => {
		if (Qc(t), b.killTweensOf(e), b.set(t, {
			autoAlpha: 1,
			clearProps: "opacity,visibility"
		}), n) {
			e.remove();
			return;
		}
		b.to(e, {
			autoAlpha: 0,
			duration: bc.imageFade,
			ease: "power1.out",
			onComplete: () => e.remove()
		});
	}, u = (e) => {
		s || (s = !0, window.clearTimeout(c), e ? (l(!0), a.length > 0 && (b.set(a, { autoAlpha: 1 }), Jc(a))) : ($c(t, () => l(!1)), a.length > 0 && b.to(a, {
			autoAlpha: 1,
			duration: bc.contentFade,
			ease: "power2.out",
			stagger: { amount: bc.contentSpread },
			onComplete: () => Jc(a)
		})), ee());
	};
	a.length > 0 && b.set(a, { autoAlpha: 0 }), b.set(t, { autoAlpha: 0 }), i.classList.remove(T), yc.fit(e, o, {
		duration: bc.flip,
		ease: bc.ease,
		onComplete: () => u(!1)
	}), c = window.setTimeout(() => u(!0), (bc.flip + 2) * 1e3);
}
function rl(e) {
	var t;
	let n = (t = Vc()) == null ? Bc(e.rect, e.src) : t, r = e.direction === "forward" ? jc : Ac, i = !1, a = 0, o = null, s = () => {
		o == null || o.disconnect(), o = null, document.removeEventListener(r, u);
	}, c = () => {
		i || (i = !0, s(), Uc());
	}, l = () => {
		var t;
		if (e.direction === "forward") {
			let e = document.querySelector(Oc);
			return e instanceof HTMLImageElement ? e : null;
		}
		let n = Wc(e.workId), r = (t = n == null ? void 0 : n.querySelector(Ec)) == null ? null : t;
		return r instanceof HTMLImageElement ? r : null;
	};
	function u() {
		if (i) return;
		let t = l();
		if (!t) return;
		i = !0, s(), Zc(t, e);
		let r = !1, o = () => {
			r || (r = !0, window.clearTimeout(a), nl(n, t, e));
		};
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(o);
		}), window.setTimeout(o, 300);
	}
	a = window.setTimeout(c, xc), document.addEventListener(r, u), o = new MutationObserver(u), o.observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), u();
}
function il(e) {
	return e.href === window.location.href ? !1 : e.direction === "forward" ? !0 : e.auto ? w() : w() || document.referrer === e.href;
}
function al(e, t) {
	var n, r;
	let i = h(t), a = t.querySelector(Tc), o = (n = a == null ? void 0 : a.querySelector(Ec)) == null ? null : n;
	if (!i || !a || !(o instanceof HTMLImageElement)) return;
	e.preventDefault();
	let s = Rc(a);
	if (!Yc(s)) {
		window.location.href = i.href;
		return;
	}
	C({
		direction: "forward",
		workId: (r = t.getAttribute(kc)) == null ? "" : r,
		src: o.currentSrc || o.src,
		href: window.location.href,
		rect: s,
		ratio: Xc(s),
		auto: !1,
		ts: Date.now()
	}), tl(a, o, () => {
		window.location.href = i.href;
	});
}
function ol(e, t) {
	var n;
	let r = document.querySelector(Oc), i = t.getAttribute("href") || "", a = () => {
		if (t.hasAttribute("data-back-button") && window.history.length > 1) {
			window.history.back();
			return;
		}
		window.location.href = i || "/";
	};
	if (!(r instanceof HTMLImageElement)) return;
	e.preventDefault(), e.stopPropagation();
	let o = Rc(r);
	if (!Yc(o)) {
		a();
		return;
	}
	C({
		direction: "back",
		workId: (n = r.getAttribute(kc)) == null ? "" : n,
		src: r.currentSrc || r.src,
		href: window.location.href,
		rect: o,
		ratio: Xc(o),
		auto: !1,
		ts: Date.now()
	}), tl(r, r, a);
}
function sl(e) {
	return Yc(e) && e.top < window.innerHeight && e.top + e.height > 0;
}
function cl() {
	var e;
	let t = document.querySelector(Oc);
	if (Ic || Date.now() - Lc < 1500 || !(t instanceof HTMLImageElement)) return;
	let n = Rc(t);
	sl(n) && C({
		direction: "back",
		workId: (e = t.getAttribute(kc)) == null ? "" : e,
		src: t.currentSrc || t.src,
		href: window.location.href,
		rect: n,
		ratio: Xc(n),
		auto: !0,
		ts: Date.now()
	});
}
function ll() {
	if (Fc) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", ll, { once: !0 });
		return;
	}
	if (Fc = !0, u()) {
		Uc();
		return;
	}
	let e = S();
	e && il(e) ? rl(e) : Uc(), document.addEventListener("click", (e) => {
		let t = e.target;
		if (Ic) {
			e.preventDefault();
			return;
		}
		if (!(t instanceof Element) || e.defaultPrevented || l(e)) return;
		let n = t.closest(Dc);
		if (n) {
			ol(e, n);
			return;
		}
		t.closest("a[href]") && (Lc = Date.now());
		let r = t.closest(wc);
		r && al(e, r);
	}, !0), window.addEventListener("pagehide", () => {
		cl(), el();
	}), window.addEventListener("pageshow", (e) => {
		if (!e.persisted) return;
		el();
		let t = S();
		if (t && t.direction === "back" && t.href !== window.location.href && Wc(t.workId)) {
			document.documentElement.classList.add(T), rl(t);
			return;
		}
		ee();
	});
}
//#endregion
//#region src/modules/logo-variants.ts
var ul = "https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/", dl = [
	"6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg",
	"6ab93c11630b54996257245a_West-Signatur-Variant3.svg",
	"6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg",
	"6ab93c127b1c73994a56f043_West-Signatur-Variant5.svg",
	"6ab93c12f66f79789e902fc4_West-Signatur-Variant7.svg",
	"6ab93c1232f656f444927b94_West-Signatur-Variant8.svg"
].map((e) => ul + e);
function fl() {
	let e = window.matchMedia("(prefers-reduced-motion: reduce)");
	document.querySelectorAll(".top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link").forEach((t) => {
		let n = t.querySelector("svg, img.nav_logo");
		if (!n || t.querySelector("[data-logo-variant]")) return;
		let r = document.createElement("span");
		r.setAttribute("data-logo-variant", ""), r.setAttribute("aria-hidden", "true"), getComputedStyle(t).position === "static" && (t.style.position = "relative"), t.appendChild(r);
		let i = n.style.visibility, a = null, o = 0;
		function s() {
			a !== null && window.clearInterval(a), a = null, r.style.display = "none", n.style.visibility = i;
		}
		function c() {
			if (o >= dl.length) {
				s();
				return;
			}
			let e = o++, t = `url("${dl[e]}")`;
			r.style.height = e === 4 ? "240%" : "100%", r.style.maskImage = t, r.style.setProperty("-webkit-mask-image", t), r.style.color = getComputedStyle(n).color, r.style.display = "block", n.style.visibility = "hidden";
		}
		t.addEventListener("pointerenter", () => {
			e.matches || (s(), o = 0, c(), a = window.setInterval(c, 250));
		}), t.addEventListener("pointerleave", s), t.addEventListener("blur", s);
	}), dl.forEach((e) => {
		let t = new Image();
		t.src = e;
	});
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function pl(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function ml(e, t) {
	return new Promise((n) => {
		let r = !1, i = () => {
			r || (r = !0, e.removeEventListener("load", a), e.removeEventListener("error", i), t.removeEventListener("abort", i), n());
		}, a = () => {
			typeof e.decode == "function" && e.naturalWidth > 0 ? e.decode().then(i, i) : i();
		};
		if (t.aborted) return i();
		t.addEventListener("abort", i, { once: !0 }), e.addEventListener("load", a, { once: !0 }), e.addEventListener("error", i, { once: !0 }), e.loading = "eager", e.complete && a();
	});
}
function hl(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function gl(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function _l(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function vl(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function yl(e, t) {
	return new Promise((n) => {
		let r = [
			"load-complete",
			"w-spline-load",
			"site:spline-ready"
		], i = () => {
			r.forEach((t) => e.removeEventListener(t, i)), t.removeEventListener("abort", i), n();
		};
		if (t.aborted || (r.forEach((t) => e.addEventListener(t, i, { once: !0 })), t.addEventListener("abort", i, { once: !0 }), e.hasAttribute("data-site-spline-ready"))) return i();
		if (e.matches("spline-viewer") && e.setAttribute("loading", "eager"), e.matches("[data-animation-type=\"spline\"]")) {
			let t = window.Webflow;
			try {
				var a, o;
				!(t == null || (a = t.require) == null || (a = a.call(t, "spline")) == null || (o = a.getInstance) == null || (o = o.call(a, e)) == null) && o.spline && i();
			} catch (e) {}
		}
	});
}
function bl() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return hl(e, t);
				let r = new Image();
				return r.src = e, ml(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-work-flip-ghost], [data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], template")) continue;
		let i = _l(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = gl(n.currentSrc || n.getAttribute("src")), o = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!a && !o || t({
			key: a ? `image:${a}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || vl(n) ? "critical" : "warm" : i,
			load: (e) => ml(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		let i = r instanceof HTMLIFrameElement, o = gl(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = _l(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => yl(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", yl(r, e))
		} : {
			key: `spline:${o}`,
			priority: c,
			load: async () => {
				r.loading = "eager";
			}
		}) : n(o, "spline", c);
	}
	for (let e of Array.from(document.querySelectorAll("script[type=\"application/json\"][data-site-preload-manifest]"))) try {
		let t = JSON.parse(e.textContent || "[]");
		if (!Array.isArray(t)) continue;
		for (let e of t) {
			if (!e || typeof e.url != "string" || !["image", "spline"].includes(e.type)) continue;
			let t = gl(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => pl(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function xl(e) {
	let t = Array.from(document.querySelectorAll("[data-cms-works], [data-cms-work-detail]"));
	return !t.length || t.every((e) => e.hasAttribute("data-site-assets-ready")) ? Promise.resolve() : new Promise((n) => {
		let r = () => {
			i.disconnect(), window.clearTimeout(a), e.removeEventListener("abort", r), n();
		}, i = new MutationObserver(() => {
			t.every((e) => e.hasAttribute("data-site-assets-ready")) && r();
		});
		i.observe(document.documentElement, {
			attributes: !0,
			subtree: !0,
			attributeFilter: ["data-site-assets-ready"]
		});
		let a = window.setTimeout(r, 2e3);
		e.addEventListener("abort", r, { once: !0 }), e.aborted && r();
	});
}
async function Sl(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await pl(a.shift().load(n.signal), n.signal);
	};
	try {
		await Promise.all([
			o(),
			o(),
			o()
		]);
	} finally {
		window.clearTimeout(i), window.removeEventListener("pagehide", r);
	}
}
//#endregion
//#region src/modules/site-preloader.ts
var Cl = !1;
function wl(e) {
	return new Promise((t) => {
		let n = 0, r = 0, i = !1, a = window.setTimeout(o, 160);
		function o() {
			i || (i = !0, window.clearTimeout(a), window.cancelAnimationFrame(n), window.cancelAnimationFrame(r), e.removeEventListener("abort", o), t());
		}
		if (e.aborted) return o();
		e.addEventListener("abort", o, { once: !0 }), n = window.requestAnimationFrame(() => {
			r = window.requestAnimationFrame(o);
		});
	});
}
function Tl(e, t) {
	if (!Number.isFinite(t)) return;
	let n = Math.max(Number(e.getAttribute("aria-valuenow")) || 0, Math.min(100, Math.max(0, Math.floor(t))));
	e.setAttribute("aria-valuenow", String(n));
	let r = String(n).padStart(3, "0");
	e.querySelectorAll(".site-preloader__digit").forEach((e, t) => {
		var i;
		let a = e.firstElementChild, o = a.children[0], s = a.children[1], c = r[t], l = e.hidden;
		if (e.hidden = t < 3 - String(n).length, a.dataset.value !== c) {
			if (b.killTweensOf(a), o.textContent = (i = a.dataset.value) == null ? o.textContent : i, a.dataset.value = c, s.textContent = c, b.set(a, {
				yPercent: 0,
				y: 0
			}), u() || l || e.hidden) {
				o.textContent = c;
				return;
			}
			b.to(a, {
				yPercent: -50,
				y: 0,
				duration: .065,
				ease: "power2.out",
				onComplete: () => {
					o.textContent = c, b.set(a, {
						yPercent: 0,
						y: 0
					});
				}
			});
		}
	});
}
function El(e, t) {
	let n = u(), r = 0, i = 0, a = 0, o = 0, s = !1, c = !1, l = 0, d = performance.now(), f = 0, p, m = new Promise((e) => {
		p = e;
	}), h = (t) => {
		let n = Math.max(o, Math.min(100, Math.floor(t)));
		n === o && n !== 100 || (o = n, Tl(e, o));
	}, g = (e) => {
		if (c) return;
		let n = Math.min(64, Math.max(0, e - d));
		d = e;
		let o = Math.max(0, Date.now() - t), u = Math.min(88, 90 * (1 - Math.exp(-o / 1900))), m = i ? Math.min(90, 8 + 82 * r / i) : 0, _ = s ? 100 : Math.max(u, m), v = 1 - Math.exp(-n * (s ? .014 : .0042)), y = (_ - a) * v, b = (s ? 180 : 30) * n / 1e3;
		a += Math.min(y, b), s && a >= 99.4 && (a = 100), (e - f >= 70 || a === 100) && (h(a), f = e), a === 100 ? p() : l = window.requestAnimationFrame(g);
	};
	return n || (l = window.requestAnimationFrame(g)), {
		setTasks: (e, t) => {
			r = e, i = t, n && h(t ? 8 + 82 * e / t : 0);
		},
		complete: () => (s = !0, n && (a = 100, h(100), p()), m),
		stop: () => {
			c = !0, window.cancelAnimationFrame(l);
		}
	};
}
function Dl(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function Ol(e, t) {
	if (u() || t.aborted) return Promise.resolve();
	document.documentElement.classList.add(Qa);
	let n = e.querySelectorAll(".site-preloader__progress, .site-preloader__name, .site-preloader__signature");
	return new Promise((r) => {
		let i = !1, a = () => {
			i || (i = !0, t.removeEventListener("abort", a), r());
		}, o = b.timeline({ onComplete: a });
		o.to({}, { duration: .12 }).to(n, {
			autoAlpha: 0,
			duration: .22,
			ease: "power2.out"
		}).to(e, {
			yPercent: -100,
			duration: .72,
			ease: "power3.inOut"
		}), t.addEventListener("abort", () => {
			o.kill(), a();
		}, { once: !0 });
	});
}
function kl() {
	if (Cl) return;
	Cl = !0;
	let e = window.__sitePreloader;
	if (!(e != null && e.active)) return;
	let t = document.querySelector($a);
	if (!t) {
		e.release();
		return;
	}
	let n = new AbortController(), r = El(t, e.startedAt);
	e.cleanup.push(() => {
		n.abort(), r.stop(), b.killTweensOf(t), b.killTweensOf(t.querySelectorAll(".site-preloader__track, .site-preloader__progress, .site-preloader__name, .site-preloader__signature"));
	});
	let i = async () => {
		if (await xl(n.signal), !e.active) return;
		let i = bl(), a = i.filter((e) => e.priority === "critical"), o = 0;
		r.setTasks(0, a.length), await Promise.all(a.map(async (t) => {
			await pl(Promise.resolve().then(() => t.load(n.signal)), n.signal), o++, e.active && r.setTasks(o, a.length);
		})), e.active && (await wl(n.signal), e.active && (await Dl(Math.max(0, eo - (Date.now() - e.startedAt)), n.signal), e.active && (await r.complete(), e.active && (await Ol(t, n.signal), e.active && (e.release(), Sl(i))))));
	}, a = () => {
		i().catch(e.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a, { once: !0 }) : a();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Al = !1;
function jl() {
	if (Al || u() || /(?:^|\/)news(?:\/|$)/i.test(location.pathname)) return;
	let e = () => {
		let e = window.lenis;
		if (Al || !window.__siteLenisManaged || !e) return;
		Al = !0, b.registerPlugin(Q), e.on("scroll", Q.update);
		let t = (t) => e.raf(t * 1e3);
		b.ticker.add(t), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), Q.refresh(), window.addEventListener("pagehide", () => {
			b.ticker.remove(t), e.off("scroll", Q.update);
		}, { once: !0 });
	};
	e(), Al || window.addEventListener("site:lenis-ready", e, { once: !0 });
}
//#endregion
//#region src/modules/spline-cursor.ts
var Ml = new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Ebene_1'%20data-name='Ebene%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250.000000000001819'%3e%3cpath%20fill='white'%20d='M210.413642814750347,106.381100071455876c-.969970703125-11.550048828125-10.6500244140625-20.6201171875-22.4599609375-20.6201171875-3.2900390625,0-6.420166015625.7000732421875-9.2301025390625,1.97998046875-.0098876953125,0-.0299072265625.010009765625-.0399169921875.010009765625-.080078125.030029296875-.1600341796875.070068359375-.22998046875.110107421875-.300048828125-1.4500732421875-.739990234375-2.85009765625-1.300048828125-4.1900634765625-.090087890625-.219970703125-.18994140625-.4400634765625-.300048828125-.6600341796875-3.570068359375-7.739990234375-11.389892578125-13.0999755859375-20.47998046875-13.0999755859375-4.27001953125,0-8.25,1.1800537109375-11.6500244140625,3.239990234375,0-.0098876953125-.0098876953125-.0299072265625-.0198974609375-.0399169921875-.1800537109375-.300048828125-.3701171875-.590087890625-.56005859375-.880126953125-4.010009765625-6.159912109375-10.9599609375-10.219970703125-18.860107421875-10.219970703125-4.39990234375,0-8.5,1.260009765625-11.969970703125,3.4500732421875-1.8399658203125-3.030029296875-4.429931640625-5.77001953125-7.909912109375-7.6700439453125-.02001953125-.010009765625-.0400390625-.030029296875-.070068359375-.0400390625-3.429931640625-2.1298828125-7.47998046875-3.35986328125-11.8199462890625-3.35986328125-10.1700439453125,0-18.77001953125,6.72998046875-21.58001708984375,15.989990234375-.9000244140625,2.679931640625-1.30999755859375,5.369873046875-1.30999755859375,7.760009765625v14.35986328125c-26.3900146484375,7.81005859375-31.25,26.455078125-31.25,36.22998046875v26.56005859375c0,47.4100341796875,38.1199951171875,86.260009765625,84.97998046875,86.60009765625.219970703125.0098876953125.43994140625.0098876953125.6500244140625.0098876953125,22.760009765625,0,44.1500244140625-8.8099365234375,60.3099365234375-24.8599853515625,16.320068359375-16.18994140625,25.31005859375-37.77001953125,25.31005859375-60.760009765625v-46.889892578125c0-.9600830078125-.070068359375-1.9700927734375-.2099609375-3.010009765625ZM195.623603752250347,156.281002415205876c0,18.9599609375-7.409912109375,36.760009765625-20.8699951171875,50.1199951171875-13.3299560546875,13.2301025390625-30.97998046875,20.5-49.75,20.5-.1800537109375,0-.3599853515625,0-.5399169921875-.0098876953125-38.65008544921875-.280029296875-70.090087890625-32.400146484375-70.090087890625-71.60009765625l-.030029296875-27.659912109375c0-2.2381591796875-.0999755859375-12.860107421875,16.280029296875-19.300048828125v39.81005859375h15v-69.91015625c.00286865234375-.12548828125.0108642578125-.259033203125.0177001953125-.390869140625-.00146484375-.0635986328125-.00958251953125-.12548828125-.00958251953125-.189453125,0-4.474609375,3.62738037109375-8.1019287109375,8.10198974609375-8.1019287109375,2.31854248046875,0,4.404052734375.9791259765625,5.88092041015625,2.5401611328125.51031494140625.5068359375.9139404296875,1.072021484375,1.22418212890625,1.668701171875.57586669921875,1.048583984375.91741943359375,2.240234375.97735595703125,3.506103515625.0291748046875.3056640625.050048828125.602783203125.05743408203125.87744140625v31.25h15v-24.2401123046875c.009033203125-.2733154296875.0316162109375-.5516357421875.061279296875-.8310546875.0096435546875-.1107177734375.024658203125-.2196044921875.038818359375-.3289794921875.0107421875-.078125.02294921875-.156005859375.03564453125-.234130859375.0274658203125-.1719970703125.056640625-.34326171875.0947265625-.511474609375.010498046875-.0477294921875.0252685546875-.0947265625.03662109375-.1424560546875.041259765625-.16796875.0799560546875-.3367919921875.1314697265625-.50048828125.0736083984375-.2410888671875.162353515625-.4783935546875.2608642578125-.712646484375.0054931640625-.0130615234375.01220703125-.0255126953125.017822265625-.0386962890625.0821533203125-.1922607421875.1724853515625-.381591796875.273193359375-.567138671875,1.35400390625-2.5836181640625,4.057373046875-4.348876953125,7.176513671875-4.348876953125,3.1353759765625,0,5.84912109375,1.7841796875,7.1961669921875,4.3895263671875.0518798828125.0970458984375.0958251953125.1968994140625.1424560546875.2957763671875.048828125.104736328125.10107421875.2073974609375.1455078125.314453125.04736328125.11474609375.0863037109375.2318115234375.1275634765625.348388671875.240234375.66357421875.3983154296875,1.364990234375.4571533203125,2.09619140625.026123046875.2593994140625.0458984375.517578125.05419921875.7716064453125v24.2401123046875h15v-15.56005859375c.00341796875-.12939453125.011962890625-.26708984375.01953125-.4033203125-.001708984375-.068115234375-.01025390625-.1343994140625-.01025390625-.202880859375,0-4.474609375,3.62744140625-8.10205078125,8.10205078125-8.10205078125,4.3916015625,0,7.95849609375,3.4964599609375,8.089599609375,7.856201171875.0244140625.2750244140625.0423583984375.54296875.049072265625.7919921875v23.6201171875h15v-7.9400634765625c.004638671875-.1766357421875.013916015625-.3614501953125.026611328125-.5501708984375v-.000244140625c0-.00390625.0006103515625-.0076904296875.0006103515625-.0115966796875.0008544921875-.0128173828125.0009765625-.0245361328125.0018310546875-.037353515625.0087890625-1.4493408203125.4014892578125-2.8050537109375,1.076416015625-3.9791259765625.0435791015625-.080078125.095947265625-.156494140625.1429443359375-.2353515625.0609130859375-.09814453125.1177978515625-.19921875.1827392578125-.29443359375.1224365234375-.18408203125.2578125-.3616943359375.40087890625-.535888671875.0216064453125-.0267333984375.0418701171875-.054443359375.063720703125-.080810546875.0751953125-.0885009765625.155029296875-.1741943359375.2359619140625-.259521484375,1.4822998046875-1.6348876953125,3.6163330078125-2.6678466796875,5.9969482421875-2.6678466796875,2.406494140625,0,4.5615234375,1.0552978515625,6.04541015625,2.7213134765625.052490234375.056396484375.1048583984375.1123046875.1546630859375.170166015625.0587158203125.0697021484375.1131591796875.1427001953125.1695556640625.2144775390625.107666015625.1358642578125.2139892578125.2718505859375.3092041015625.4134521484375.11572265625.168212890625.220947265625.343994140625.323974609375.5211181640625.0023193359375.00439453125.0054931640625.008544921875.0079345703125.012939453125.68994140625,1.192138671875,1.0911865234375,2.5721435546875,1.0911865234375,4.0484619140625,0,.01611328125-.0023193359375.03173828125-.0023193359375.0477294921875.009033203125.150634765625.0179443359375.3011474609375.021728515625.4427490234375v46.889892578125Z'/%3e%3c/svg%3e", "" + import.meta.url).href, Nl = new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Ebene_1'%20data-name='Ebene%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250.000000000001819'%3e%3cpath%20fill='white'%20d='M226.924957275390625,68.674626921158051c-.010009765625-.1700439453125-.02001953125-.340087890625-.0400390625-.510009765625-.3699951171875-3.77001953125-1.68994140625-7.989990234375-4.22998046875-11.6500244140625-.169921875-.239990234375-.3499755859375-.47998046875-.530029296875-.719970703125-.010009765625-.02001953125-.02001953125-.0400390625-.0400390625-.0599365234375-.119873046875-.16015625-.239990234375-.320068359375-.369873046875-.4700927734375-1.330078125-1.6600341796875-2.9400634765625-3.1700439453125-4.85009765625-4.4200439453125-.0499267578125-.030029296875-.0999755859375-.0699462890625-.159912109375-.0999755859375-3.630126953125-2.4200439453125-7.989990234375-3.8299560546875-12.6900634765625-3.8299560546875-2.9300537109375,0-5.719970703125.550048828125-8.2899169921875,1.550048828125-.050048828125.010009765625-.10009765625.0299072265625-.150146484375.0599365234375.070068359375-.6700439453125.10009765625-1.3399658203125.10009765625-2.030029296875,0-.4000244140625-.010009765625-.7899169921875-.030029296875-1.1800537109375,0-.0399169921875,0-.079833984375-.010009765625-.119873046875-.669921875-12.070068359375-10.669921875-21.6400146484375-22.89990234375-21.6400146484375-3.239990234375,0-6.31005859375.6700439453125-9.10009765625,1.8800048828125h-.010009765625c0-.030029296875-.010009765625-.06005859375-.010009765625-.080078125-.010009765625-.030029296875-.02001953125-.0499267578125-.02001953125-.0799560546875-.0499267578125-.1700439453125-.08984375-.3399658203125-.139892578125-.510009765625-.06005859375-.219970703125-.130126953125-.4400634765625-.2099609375-.6600341796875-.06005859375-.2099609375-.130126953125-.409912109375-.2000732421875-.6099853515625-.0899658203125-.2698974609375-.1900634765625-.5499267578125-.2999267578125-.8199462890625-.27001953125-.68994140625-.56005859375-1.3699951171875-.89013671875-2.0400390625-.010009765625-.010009765625-.010009765625-.02001953125-.010009765625-.030029296875-.33984375-.659912109375-.699951171875-1.3199462890625-1.08984375-1.9599609375-.150146484375-.239990234375-.300048828125-.47998046875-.4600830078125-.7099609375-.1199951171875-.1700439453125-.22998046875-.330078125-.3399658203125-.5-.1900634765625-.260009765625-.380126953125-.52001953125-.580078125-.780029296875-.25-.330078125-.52001953125-.6500244140625-.800048828125-.969970703125-.159912109375-.1900634765625-.329833984375-.3800048828125-.5098876953125-.56005859375-.2000732421875-.219970703125-.4100341796875-.43994140625-.6300048828125-.64990234375-4.1400146484375-4.090087890625-9.830078125-6.6201171875-16.110107421875-6.6201171875-5.2799072265625,0-10.139892578125,1.7900390625-14.0198974609375,4.7900390625-.1900634765625.1500244140625-.3800048828125.300048828125-.5699462890625.449951171875-1.590087890625,1.260009765625-2.9300537109375,2.719970703125-4.030029296875,4.2900390625-.1700439453125.22998046875-.330078125.4599609375-.47998046875.699951171875-.1900634765625.27001953125-.360107421875.5400390625-.52001953125.820068359375-.199951171875.31005859375-.380126953125.6400146484375-.550048828125.9599609375-.179931640625.320068359375-.3499755859375.6500244140625-.510009765625.989990234375-.010009765625.010009765625-.010009765625.02001953125-.010009765625.02001953125-.14990234375.320068359375-.300048828125.6600341796875-.449951171875.989990234375-.1300048828125.320068359375-.260009765625.6500244140625-.3800048828125.969970703125-.02001953125.0400390625-.030029296875.070068359375-.0400390625.110107421875-.0899658203125.239990234375-.17999267578125.47998046875-.25.72998046875-.199951171875.6099853515625-.3699951171875,1.219970703125-.50994873046875,1.8499755859375-.02001953125-.010009765625-.030029296875-.02001953125-.050048828125-.030029296875-2.77996826171875-1.199951171875-5.8499755859375-1.8599853515625-9.07000732421875-1.8599853515625-4.92999267578125,0-9.5,1.56005859375-13.239990234375,4.219970703125-.16998291015625.110107421875-.3299560546875.219970703125-.47998046875.340087890625-.22998046875.169921875-.45001220703125.3399658203125-.66998291015625.510009765625-.4200439453125.3499755859375-.84002685546875.699951171875-1.239990234375,1.0799560546875-.20001220703125.1800537109375-.4000244140625.3800048828125-.59002685546875.5699462890625-.47998046875.47998046875-.95001220703125.989990234375-1.3900146484375,1.52001953125-.05999755859375.080078125-.1199951171875.1600341796875-.19000244140625.239990234375-3.02996826171875,3.840087890625-4.6099853515625,8.4599609375-5.05999755859375,12.590087890625-.0899658203125.8499755859375-.1400146484375,1.679931640625-.1400146484375,2.47998046875l.02001953125,90.0699462890625-11.9599609375-13.0499267578125c-9.24005126953125-9.969970703125-18.83001708984375-14.780029296875-28.57000732421875-14.260009765625-12.46002197265625.64990234375-19.67999267578125,9.7999267578125-20.46002197265625,10.8399658203125l-2.91998291015625,3.8900146484375,34.6199951171875,62.550048828125.90997314453125,1.39990234375c16.85003662109375,25,35.94000244140625,53.320068359375,82.280029296875,53.52001953125,47.4100341796875.2099609375,86.2000732421875-38.7900390625,86.2000732421875-86.199951171875v-85.530029296875c0-.570068359375-.02001953125-1.1500244140625-.080078125-1.739990234375ZM212.005035400390625,155.794622038345551c0,39.0699462890625-31.420166015625,71.2799072265625-70.5,71.3499755859375-38.8701171875.080078125-53.54010009765625-21.68994140625-70.54010009765625-46.9000244140625l-.3800048828125-.5699462890625-29.22998046875-52.820068359375c1.55999755859375-.97998046875,3.58001708984375-1.8399658203125,5.94000244140625-1.93994140625,6.27996826171875-.25,12.510009765625,5.02001953125,16.6199951171875,9.4599609375l23.44000244140625,25.570068359375c5.16998291015625,5.6298828125,14.55999755859375,1.969970703125,14.55999755859375-5.6700439453125l-.02001953125-86.1800537109375s-.01995849609375-21.280029296875-.01995849609375-21.369873046875c0-1.7301025390625.53997802734375-3.320068359375,1.4599609375-4.64013671875.09002685546875-.1298828125.19000244140625-.260009765625.29998779296875-.389892578125.050048828125-.070068359375.09002685546875-.130126953125.1400146484375-.1900634765625.08001708984375-.0899658203125.1500244140625-.1700439453125.23004150390625-.25,1.489990234375-1.6400146484375,3.62994384765625-2.6700439453125,6.01995849609375-2.6700439453125,2.33001708984375,0,4.4200439453125.97998046875,5.9100341796875,2.550048828125.469970703125.47998046875.8499755859375,1,1.14996337890625,1.550048828125.67999267578125,1.18994140625,1.08001708984375,2.5699462890625,1.08001708984375,4.0400390625v55.219970703125h15V31.014592741470551c0-4.5,3.6400146484375-8.1400146484375,8.1400146484375-8.1400146484375s8.1400146484375,3.6400146484375,8.1400146484375,8.1400146484375v70.9300537109375h15v-55.330078125c0-4.5,3.639892578125-8.139892578125,8.139892578125-8.139892578125s8.14013671875,3.639892578125,8.14013671875,8.139892578125v22.1500244140625c-.0400390625.5599365234375-.06005859375,1.1199951171875-.06005859375,1.6600341796875l.06005859375,39.25,15-.010009765625v-39.780029296875s.02001953125-.5799560546875.030029296875-.659912109375c.08984375-.9700927734375.33984375-1.89013671875.72998046875-2.7301025390625.0299072265625-.0799560546875.0699462890625-.1600341796875.10986328125-.239990234375.050048828125-.0899658203125.090087890625-.1800537109375.14013671875-.2698974609375.239990234375-.4600830078125.5399169921875-.900146484375.89990234375-1.31005859375,1.489990234375-1.780029296875,3.72998046875-2.9100341796875,6.22998046875-2.9100341796875,4.5,0,8.14013671875,3.6500244140625,8.14013671875,8.1400146484375v85.8900146484375Z'/%3e%3c/svg%3e", "" + import.meta.url).href, Pl = [
	"[data-animation-type=\"spline\"]",
	"[data-spline-url]",
	"spline-viewer",
	"iframe[src*=\"spline.design\"]"
].join(",");
function Fl() {
	if (window.matchMedia("(hover: hover) and (pointer: fine)").matches === !1) return;
	let e = document.createElement("span");
	e.className = "site-spline-cursor", e.setAttribute("aria-hidden", "true"), e.style.setProperty("--site-spline-cursor-open", `url("${Nl}")`), e.style.setProperty("--site-spline-cursor-closed", `url("${Ml}")`), document.body.append(e);
	let t = null, n = !1, r = null, i = [], a = (e) => {
		if (!t || !(e instanceof Node)) return !1;
		let n = e;
		for (; n;) {
			var r;
			if (n === t) return !0;
			let e = n.getRootNode();
			n = (r = n.parentNode) == null ? e instanceof ShadowRoot ? e.host : null : r;
		}
		return !1;
	}, o = (e) => {
		let t = e.shadowRoot;
		if (t && !t.querySelector("[data-site-spline-cursor-style]")) {
			let e = document.createElement("style");
			e.dataset.siteSplineCursorStyle = "", e.textContent = ":host, * { cursor: none !important; }", t.append(e), i.push(e);
		}
		e.querySelectorAll("*").forEach(o);
	}, s = () => {
		e.classList.toggle("is-closed", n);
	}, c = (n) => {
		!t || n.pointerType === "touch" || (o(t), e.style.transform = `translate3d(${n.clientX - 11}px, ${n.clientY - 11}px, 0)`);
	}, l = () => {
		t == null || t.classList.remove("has-site-spline-cursor"), t = null, i.forEach((e) => e.remove()), i.length = 0, n = !1, r = null, e.classList.remove("is-visible", "is-closed");
	};
	document.addEventListener("pointerover", (r) => {
		if (r.pointerType === "touch" || n) return;
		let i = r.target, o = i instanceof Element ? i.closest(Pl) : null;
		if (o) {
			if (o === t) return;
			l(), t = o, t.classList.add("has-site-spline-cursor"), e.classList.add("is-visible"), n = !1, s(), c(r);
			return;
		}
		t && !a(r.relatedTarget) && l();
	}), document.addEventListener("pointerout", (e) => {
		!n && t && !a(e.relatedTarget) && l();
	}), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", (e) => {
		!t || e.pointerType === "touch" || (n = !0, r = e.pointerId, s());
	});
	let u = (e) => {
		!t || !n || r !== null && e.pointerId !== r || (n = !1, r = null, s(), a(document.elementFromPoint(e.clientX, e.clientY)) || l());
	};
	document.addEventListener("pointerup", u), document.addEventListener("pointercancel", u), window.addEventListener("blur", l);
}
//#endregion
//#region src/main.ts
var Il = !1;
kl(), ll(), Co(), wr(), jl();
function Ll() {
	if (Il) return;
	Il = !0;
	let e = O();
	sa({ i18n: e }), gi({ i18n: e }), Vo(), Za(), _(), fl(), Fl(), window.SiteInteractions = {
		openModal: ra,
		openContentModal: na,
		closeModal: ia,
		openLightbox: fi,
		closeLightbox: pi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ll, { once: !0 }) : Ll();
//#endregion

//# sourceMappingURL=site-interactions.js.map