import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-CeaJphsN.js";
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
var j, M, N, P, ne, re, ie, F, I, ae, L, oe, se, ce = function() {
	return j || typeof window < "u" && (j = window.gsap) && j.registerPlugin && j;
}, R = 1, z = [], B = [], V = [], le = Date.now, ue = function(e, t) {
	return t;
}, de = function() {
	var e = I.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, B), r.push.apply(r, V), B = n, V = r, ue = function(e, n) {
		return t[e](n);
	};
}, H = function(e, t) {
	return ~V.indexOf(e) && V[V.indexOf(e) + 1][t];
}, fe = function(e) {
	return !!~ae.indexOf(e);
}, U = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, pe = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, me = "scrollLeft", he = "scrollTop", ge = function() {
	return L && L.isPressed || B.cache++;
}, _e = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			R && (N.history.scrollRestoration = "manual");
			var i = L && L.isPressed;
			r = n.v = Math.round(r) || (L && L.iOS ? 1 : 0), e(r), n.cacheID = B.cache, i && ue("ss", r);
		} else (t || B.cache !== n.cacheID || ue("ref")) && (n.cacheID = B.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, ve = {
	s: me,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: _e(function(e) {
		return arguments.length ? N.scrollTo(e, ye.sc()) : N.pageXOffset || P[me] || ne[me] || re[me] || 0;
	})
}, ye = {
	s: he,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: ve,
	sc: _e(function(e) {
		return arguments.length ? N.scrollTo(ve.sc(), e) : N.pageYOffset || P[he] || ne[he] || re[he] || 0;
	})
}, be = function(e, t) {
	return (t && t._ctx && t._ctx.selector || j.utils.toArray)(e)[0] || (typeof e == "string" && j.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, xe = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Se = function(e, t) {
	var n = t.s, r = t.sc;
	fe(e) && (e = P.scrollingElement || ne);
	var i = B.indexOf(e), a = r === ye.sc ? 1 : 2;
	!~i && (i = B.push(e) - 1), B[i + a] || U(e, "scroll", ge);
	var o = B[i + a], s = o || (B[i + a] = _e(H(e, n), !0) || (fe(e) ? r : _e(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = j.getProperty(e, "scrollBehavior") === "smooth"), s;
}, Ce = function(e, t, n) {
	var r = e, i = e, a = le(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = le();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = le();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, we = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Te = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Ee = function() {
	I = j.core.globals().ScrollTrigger, I && I.core && de();
}, De = function(e) {
	return j = e || ce(), !M && j && typeof document < "u" && document.body && (N = window, P = document, ne = P.documentElement, re = P.body, ae = [
		N,
		P,
		ne,
		re
	], j.utils.clamp, se = j.core.context || function() {}, F = "onpointerenter" in re ? "pointer" : "mouse", ie = W.isTouch = N.matchMedia && N.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in N || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, oe = W.eventTypes = ("ontouchstart" in ne ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ne ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return R = 0;
	}, 500), M = 1), I || Ee(), M;
};
ve.op = ye, B.cache = 0;
var W = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		M || De(j) || console.warn("Please gsap.registerPlugin(Observer)"), I || Ee();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, ee = e.onChangeY, C = e.onChange, w = e.onToggleX, T = e.onToggleY, E = e.onHover, D = e.onHoverEnd, O = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, te = e.onGestureStart, ae = e.onGestureEnd, ce = e.onWheel, R = e.onEnable, B = e.onDisable, V = e.onClick, ue = e.scrollSpeed, de = e.capture, H = e.allowClicks, me = e.lockAxis, he = e.onLockAxis;
		this.target = i = be(i) || ne, this.vars = e, u && (u = j.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ue = ue || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(N.getComputedStyle(re).lineHeight) || 22);
		var _e, W, G, Oe, K, q, ke, J = this, Ae = 0, je = 0, Me = e.passive || !s && e.passive !== !1, Ne = Se(i, ve), Pe = Se(i, ye), Fe = Ne(), Ie = Pe(), Le = ~r.indexOf("touch") && !~r.indexOf("pointer") && oe[0] === "pointerdown", Re = fe(i), Y = i.ownerDocument || P, ze = [
			0,
			0,
			0
		], Be = [
			0,
			0,
			0
		], X = 0, Ve = function() {
			return X = le();
		}, He = function(e, t) {
			return (J.event = e) && u && xe(e.target, u) || t && Le && e.pointerType !== "touch" || k && k(e, t);
		}, Ue = function() {
			J._vx.reset(), J._vy.reset(), W.pause(), c && c(J);
		}, Z = function() {
			var e = J.deltaX = Te(ze), n = J.deltaY = Te(Be), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			C && (r || i) && C(J, e, n, ze, Be), r && (v && J.deltaX > 0 && v(J), y && J.deltaX < 0 && y(J), S && S(J), w && J.deltaX < 0 != Ae < 0 && w(J), Ae = J.deltaX, ze[0] = ze[1] = ze[2] = 0), i && (x && J.deltaY > 0 && x(J), b && J.deltaY < 0 && b(J), ee && ee(J), T && J.deltaY < 0 != je < 0 && T(J), je = J.deltaY, Be[0] = Be[1] = Be[2] = 0), (Oe || G) && (O && O(J), G && (p && G === 1 && p(J), h && h(J), G = 0), Oe = !1), q && !(q = !1) && he && he(J), K && (ce(J), K = !1), _e = 0;
		}, We = function(e, t, n) {
			ze[n] += e, Be[n] += t, J._vx.update(e), J._vy.update(t), o ? _e || (_e = requestAnimationFrame(Z)) : Z();
		}, Ge = function(e, t) {
			me && !ke && (J.axis = ke = Math.abs(e) > Math.abs(t) ? "x" : "y", q = !0), ke !== "y" && (ze[2] += e, J._vx.update(e, !0)), ke !== "x" && (Be[2] += t, J._vy.update(t, !0)), o ? _e || (_e = requestAnimationFrame(Z)) : Z();
		}, Ke = function(e) {
			if (!He(e, 1)) {
				e = we(e, s);
				var t = e.clientX, r = e.clientY, i = t - J.x, a = r - J.y, o = J.isDragging;
				J.x = t, J.y = r, (o || (i || a) && (Math.abs(J.startX - t) >= n || Math.abs(J.startY - r) >= n)) && (G || (G = o ? 2 : 1), o || (J.isDragging = !0), Ge(i, a));
			}
		}, qe = J.onPress = function(e) {
			He(e, 1) || e && e.button || (J.axis = ke = null, W.pause(), J.isPressed = !0, e = we(e), Ae = je = 0, J.startX = J.x = e.clientX, J.startY = J.y = e.clientY, J._vx.reset(), J._vy.reset(), U(A ? i : Y, oe[1], Ke, Me, !0), J.deltaX = J.deltaY = 0, g && g(J));
		}, Je = J.onRelease = function(e) {
			if (!He(e, 1)) {
				pe(A ? i : Y, oe[1], Ke, !0);
				var t = !isNaN(J.y - J.startY), n = J.isDragging, r = n && (Math.abs(J.x - J.startX) > 3 || Math.abs(J.y - J.startY) > 3), a = we(e);
				!r && t && (J._vx.reset(), J._vy.reset(), s && H && j.delayedCall(.08, function() {
					if (le() - X > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (Y.createEvent) {
							var t = Y.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, N, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), J.isDragging = J.isGesturing = J.isPressed = !1, c && n && !A && W.restart(!0), G && Z(), m && n && m(J), _ && _(J, r);
			}
		}, Ye = function(e) {
			return e.touches && e.touches.length > 1 && (J.isGesturing = !0) && te(e, J.isDragging);
		}, Xe = function() {
			return (J.isGesturing = !1) || ae(J);
		}, Ze = function(e) {
			if (!He(e)) {
				var t = Ne(), n = Pe();
				We((t - Fe) * ue, (n - Ie) * ue, 1), Fe = t, Ie = n, c && W.restart(!0);
			}
		}, Qe = function(e) {
			if (!He(e)) {
				e = we(e, s), ce && (K = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? N.innerHeight : 1) * d;
				We(e.deltaX * t, e.deltaY * t, 0), c && !A && W.restart(!0);
			}
		}, $e = function(e) {
			if (!He(e)) {
				var t = e.clientX, n = e.clientY, r = t - J.x, i = n - J.y;
				J.x = t, J.y = n, Oe = !0, c && W.restart(!0), (r || i) && Ge(r, i);
			}
		}, et = function(e) {
			J.event = e, E(J);
		}, tt = function(e) {
			J.event = e, D(J);
		}, nt = function(e) {
			return He(e) || we(e, s) && V(J);
		};
		W = J._dc = j.delayedCall(l || .25, Ue).pause(), J.deltaX = J.deltaY = 0, J._vx = Ce(0, 50, !0), J._vy = Ce(0, 50, !0), J.scrollX = Ne, J.scrollY = Pe, J.isDragging = J.isGesturing = J.isPressed = !1, se(this), J.enable = function(e) {
			return J.isEnabled || (U(Re ? Y : i, "scroll", ge), r.indexOf("scroll") >= 0 && U(Re ? Y : i, "scroll", Ze, Me, de), r.indexOf("wheel") >= 0 && U(i, "wheel", Qe, Me, de), (r.indexOf("touch") >= 0 && ie || r.indexOf("pointer") >= 0) && (U(i, oe[0], qe, Me, de), U(Y, oe[2], Je), U(Y, oe[3], Je), H && U(i, "click", Ve, !0, !0), V && U(i, "click", nt), te && U(Y, "gesturestart", Ye), ae && U(Y, "gestureend", Xe), E && U(i, F + "enter", et), D && U(i, F + "leave", tt), O && U(i, F + "move", $e)), J.isEnabled = !0, J.isDragging = J.isGesturing = J.isPressed = Oe = G = !1, J._vx.reset(), J._vy.reset(), Fe = Ne(), Ie = Pe(), e && e.type && qe(e), R && R(J)), J;
		}, J.disable = function() {
			J.isEnabled && (z.filter(function(e) {
				return e !== J && fe(e.target);
			}).length || pe(Re ? Y : i, "scroll", ge), J.isPressed && (J._vx.reset(), J._vy.reset(), pe(A ? i : Y, oe[1], Ke, !0)), pe(Re ? Y : i, "scroll", Ze, de), pe(i, "wheel", Qe, de), pe(i, oe[0], qe, de), pe(Y, oe[2], Je), pe(Y, oe[3], Je), pe(i, "click", Ve, !0), pe(i, "click", nt), pe(Y, "gesturestart", Ye), pe(Y, "gestureend", Xe), pe(i, F + "enter", et), pe(i, F + "leave", tt), pe(i, F + "move", $e), J.isEnabled = J.isPressed = J.isDragging = !1, B && B(J));
		}, J.kill = J.revert = function() {
			J.disable();
			var e = z.indexOf(J);
			e >= 0 && z.splice(e, 1), L === J && (L = 0);
		}, z.push(J), A && fe(i) && (L = J), J.enable(f);
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
W.version = "3.15.0", W.create = function(e) {
	return new W(e);
}, W.register = De, W.getAll = function() {
	return z.slice();
}, W.getById = function(e) {
	return z.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, ce() && j.registerPlugin(W);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var G, Oe, K, q, ke, J, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, Y, ze, Be, X, Ve, He, Ue, Z, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt = 1, nt = Date.now, rt = nt(), it = 0, at = 0, ot = function(e, t, n) {
	var r = St(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, st = function(e, t) {
	return t && (!St(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, ct = function e() {
	return at && requestAnimationFrame(e);
}, lt = function() {
	return Le = 1;
}, ut = function() {
	return Le = 0;
}, dt = function(e) {
	return e;
}, ft = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, pt = function() {
	return typeof window < "u";
}, mt = function() {
	return G || pt() && (G = window.gsap) && G.registerPlugin && G;
}, ht = function(e) {
	return !!~Ae.indexOf(e);
}, gt = function(e) {
	return (e === "Height" ? Ze : K["inner" + e]) || ke["client" + e] || J["client" + e];
}, _t = function(e) {
	return H(e, "getBoundingClientRect") || (ht(e) ? function() {
		return Wn.width = K.innerWidth, Wn.height = Ze, Wn;
	} : function() {
		return qt(e);
	});
}, vt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = H(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? gt(i) : e["client" + i]) || 0;
	};
}, yt = function(e, t) {
	return !t || ~V.indexOf(e) ? _t(e) : function() {
		return Wn;
	};
}, bt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = H(e, n)) ? a() - _t(e)()[i] : ht(e) ? (ke[n] || J[n]) - gt(r) : e[n] - e["offset" + r]);
}, xt = function(e, t) {
	for (var n = 0; n < X.length; n += 3) (!t || ~t.indexOf(X[n + 1])) && e(X[n], X[n + 1], X[n + 2]);
}, St = function(e) {
	return typeof e == "string";
}, Ct = function(e) {
	return typeof e == "function";
}, wt = function(e) {
	return typeof e == "number";
}, Tt = function(e) {
	return typeof e == "object";
}, Et = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, Dt = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, Ot = Math.abs, kt = "left", At = "top", jt = "right", Mt = "bottom", Nt = "width", Pt = "height", Ft = "Right", It = "Left", Lt = "Top", Rt = "Bottom", zt = "padding", Bt = "margin", Vt = "Width", Ht = "Height", Ut = "px", Wt = function(e) {
	return K.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Gt = function(e) {
	var t = Wt(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, Kt = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, qt = function(e, t) {
	var n = t && Wt(e)[Re] !== "matrix(1, 0, 0, 1, 0, 0)" && G.to(e, {
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
}, Jt = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Yt = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, Xt = function(e) {
	return function(t) {
		return G.utils.snap(Yt(e), t);
	};
}, Zt = function(e) {
	var t = G.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
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
}, Qt = function(e) {
	return function(t, n) {
		return Zt(Yt(e))(t, n.direction);
	};
}, $t = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, en = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, tn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, nn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, rn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, an = {
	toggleActions: "play",
	anticipatePin: 0
}, on = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, sn = function(e, t) {
	if (St(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in on ? on[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, cn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = q.createElement("div"), m = ht(n) || H(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? J : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === ye ? jt : Mt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], ln(p, 0, r, _), p;
}, ln = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Vt] = 1, i["border" + o + Vt] = 0, i[n.p] = t + "px", G.set(e, i);
}, Q = [], un = {}, dn, fn = function() {
	return nt() - it > 34 && (dn || (dn = requestAnimationFrame(Fn)));
}, pn = function() {
	(!Z || !Z.isPressed || Z.startX > J.clientWidth) && (B.cache++, Z ? dn || (dn = requestAnimationFrame(Fn)) : Fn(), it || yn("scrollStart"), it = nt());
}, mn = function() {
	Ke = K.innerWidth, Ge = K.innerHeight;
}, hn = function(e) {
	B.cache++, (e === !0 || !Ie && !Ue && !q.fullscreenElement && !q.webkitFullscreenElement && (!We || Ke !== K.innerWidth || Math.abs(K.innerHeight - Ge) > K.innerHeight * .25)) && je.restart(!0);
}, gn = {}, _n = [], vn = function e() {
	return tn($, "scrollEnd", e) || jn(!0);
}, yn = function(e) {
	return gn[e] && gn[e].map(function(e) {
		return e();
	}) || _n;
}, bn = [], xn = function(e) {
	for (var t = 0; t < bn.length; t += 5) (!e || bn[t + 4] && bn[t + 4].query === e) && (bn[t].style.cssText = bn[t + 1], bn[t].getBBox && bn[t].setAttribute("transform", bn[t + 2] || ""), bn[t + 3].uncache = 1);
}, Sn = function() {
	return B.forEach(function(e) {
		return Ct(e) && ++e.cacheID && (e.rec = e());
	});
}, Cn = function(e, t) {
	var n;
	for (Y = 0; Y < Q.length; Y++) n = Q[Y], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Qe = !0, t && xn(t), t || yn("revert");
}, wn = function(e, t) {
	B.cache++, (t || !Tn) && B.forEach(function(e) {
		return Ct(e) && e.cacheID++ && (e.rec = 0);
	}), St(e) && (K.history.scrollRestoration = Ye = e);
}, Tn, En = 0, Dn, On = function() {
	if (Dn !== En) {
		var e = Dn = En;
		requestAnimationFrame(function() {
			return e === En && jn(!0);
		});
	}
}, kn = function() {
	J.appendChild(Xe), Ze = !Z && Xe.offsetHeight || K.innerHeight, J.removeChild(Xe);
}, An = function(e) {
	return Me(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, jn = function(e, t) {
	if (ke = q.documentElement, J = q.body, Ae = [
		K,
		q,
		ke,
		J
	], it && !e && !Qe) {
		en($, "scrollEnd", vn);
		return;
	}
	kn(), Tn = $.isRefreshing = !0, Qe || Sn();
	var n = yn("refreshInit");
	Ve && $.sort(), t || Cn(), B.forEach(function(e) {
		Ct(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), Qe = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), $e = 1, An(!0), Q.forEach(function(e) {
		var t = bt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), An(!1), $e = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), B.forEach(function(e) {
		Ct(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), wn(Ye, 1), je.pause(), En++, Tn = 2, Fn(2), Q.forEach(function(e) {
		return Ct(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), Tn = $.isRefreshing = !1, yn("refresh");
}, Mn = 0, Nn = 1, Pn, Fn = function(e) {
	if (e === 2 || !Tn && !Qe) {
		$.isUpdating = !0, Pn && Pn.update(0);
		var t = Q.length, n = nt(), r = n - rt >= 50, i = t && Q[0].scroll();
		if (Nn = Mn > i ? -1 : 1, Tn || (Mn = i), r && (it && !Le && n - it > 200 && (it = 0, yn("scrollEnd")), Pe = rt, rt = n), Nn < 0) {
			for (Y = t; Y-- > 0;) Q[Y] && Q[Y].update(0, r);
			Nn = 1;
		} else for (Y = 0; Y < t; Y++) Q[Y] && Q[Y].update(0, r);
		$.isUpdating = !1;
	}
	dn = 0;
}, In = [
	kt,
	At,
	Mt,
	jt,
	Bt + Rt,
	Bt + Ft,
	Bt + Lt,
	Bt + It,
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
], Ln = In.concat([
	Nt,
	Pt,
	"boxSizing",
	"max" + Vt,
	"max" + Ht,
	"position",
	Bt,
	zt,
	zt + Lt,
	zt + Ft,
	zt + Rt,
	zt + It
]), Rn = function(e, t, n) {
	Vn(n);
	var r = e._gsap;
	if (r.spacerIsNative) Vn(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, zn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = In.length, a = t.style, o = e.style, s; i--;) s = In[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[Mt] = o[jt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Nt] = Jt(e, ve) + Ut, a[Pt] = Jt(e, ye) + Ut, a[zt] = o[Bt] = o[At] = o[kt] = "0", Vn(r), o[Nt] = o["max" + Vt] = n[Nt], o[Pt] = o["max" + Ht] = n[Pt], o[zt] = n[zt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Bn = /([A-Z])/g, Vn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Bn, "-$1").toLowerCase());
	}
}, Hn = function(e) {
	for (var t = Ln.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Ln[i], n[Ln[i]]);
	return r.t = e, r;
}, Un = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Wn = {
	left: 0,
	top: 0
}, Gn = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	Ct(e) && (e = e(s)), St(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? sn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), wt(e)) f && (e = G.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && ln(o, n, r, !0);
	else {
		Ct(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = be(t, s) || J, y = qt(_) || {}, (!y || !y.left && !y.top) && Wt(_).display === "none" && (S = _.style.display, _.style.display = "block", y = qt(_), S ? _.style.display = S : _.style.removeProperty("display")), b = sn(v[0], y[r.d]), x = sn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && ln(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var ee = e + n, C = a._isStart;
		h = "scroll" + r.d2, ln(a, ee, r, C && ee > 20 || !C && (u ? Math.max(J[h], ke[h]) : a.parentNode[h]) <= ee + 1), u && (c = qt(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Ut));
	}
	return f && _ && (h = qt(_), f.seek(d), g = qt(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, Kn = /(webkit|moz|length|cssText|inset)/i, qn = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === J) {
			for (a in e._stOrig = i.cssText, o = Wt(e), o) !+a && !Kn.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		G.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, Jn = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, Yn = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, G.set(e, r);
}, Xn = function(e, t) {
	var n = Se(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = Jn(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			B.cache++, t.tween && Fn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = G.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, en(e, "wheel", n.wheelHandler), $.isTouch && en(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		Oe || e.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Je(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !at) {
			this.update = this.refresh = this.kill = dt;
			return;
		}
		t = Kt(St(t) || wt(t) || t.nodeType ? { trigger: t } : t, an);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, ee = r.preventOverlaps, C = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? ve : ye, w = !l && l !== 0, T = be(t.scroller || K), E = G.core.getCache(T), D = ht(T), O = ("pinType" in t ? t.pinType : H(T, "pinType") || D && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = w && t.toggleActions.split(" "), te = "markers" in t ? t.markers : an.markers, j = D ? 0 : parseFloat(Wt(T)["border" + C.p2 + Vt]) || 0, M = this, N = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, P = vt(T, D, C), ne = yt(T, D), re = 0, ie = 0, F = 0, I = Se(T, C), ae, L, oe, se, ce, R, z, le, ue, de, fe, U, pe, me, he, ge, _e, xe, Ce, we, Te, Ee, De, W, Oe, Ae, je, Fe, Re, ze, Be, X, Ue, Z, We, Ge, Ke, qe, Je;
		if (M._startClamp = M._endClamp = !1, M._dir = C, m *= 45, M.scroller = T, M.scroll = x ? x.time.bind(x) : I, se = I(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (Ve = 1, t.refreshPriority === -9999 && (Pn = M)), E.tweenScroll = E.tweenScroll || {
			top: Xn(T, ye),
			left: Xn(T, ve)
		}, M.tweenTo = ae = E.tweenScroll[C.p], M.scrubDuration = function(e) {
			Ue = wt(e) && e, Ue ? X ? X.duration(e) : X = G.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Ue,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (X && X.progress(1).kill(), X = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), ze = 0, o || (o = n.vars.id)), v && ((!Tt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in J.style && G.set(D ? [J, ke] : T, { scrollBehavior: "auto" }), B.forEach(function(e) {
			return Ct(e) && e.target === (D ? q.scrollingElement || ke : T) && (e.smooth = !1);
		}), oe = Ct(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Xt(n) : v.snapTo === "labelsDirectional" ? Qt(n) : v.directional === !1 ? G.utils.snap(v.snapTo) : function(e, t) {
			return Zt(v.snapTo)(e, nt() - ie < 500 ? 0 : t.direction);
		}, Z = v.duration || {
			min: .1,
			max: 2
		}, Z = Tt(Z) ? Ne(Z.min, Z.max) : Ne(Z, Z), We = G.delayedCall(v.delay || Ue / 2 || .1, function() {
			var e = I(), t = nt() - ie < 500, r = ae.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !Le && re !== e) {
				var i = (e - R) / me, a = n && !w ? n.totalProgress() : i, o = t ? 0 : (a - Be) / (nt() - Pe) * 1e3 || 0, s = G.utils.clamp(-i, 1 - i, Ot(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = oe(c, M), wt(l) || (l = c), u = Math.max(0, Math.round(R + l * me)), e <= z && e >= R && u !== e) {
					if (r && !r._initted && r.data <= Ot(u - e)) return;
					v.inertia === !1 && (s = l - i), ae(u, {
						duration: Z(Ot(Math.max(Ot(c - a), Ot(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Ot(u - e),
						onInterrupt: function() {
							return We.restart(!0) && p && Dt(M, p);
						},
						onComplete: function() {
							M.update(), re = I(), n && !w && (X ? X.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), ze = Be = n && !w ? n.totalProgress() : M.progress, g && g(M), m && Dt(M, m);
						}
					}, e, s * me, u - e - s * me), f && Dt(M, f, ae.tween);
				}
			} else M.isActive && re !== e && We.restart(!0);
		}).pause()), o && (un[o] = M), u = M.trigger = be(u || d !== !0 && d), Je = u && u._gsap && u._gsap.stRevert, Je && (Je = Je(M)), d = d === !0 ? u : be(d), St(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Bt || (f = !f && d.parentNode && d.parentNode.style && Wt(d.parentNode).display === "flex" ? !1 : zt), M.pin = d, L = G.core.getCache(d), L.spacer ? he = L.pinState : (b && (b = be(b), b && !b.nodeType && (b = b.current || b.nativeElement), L.spacerIsNative = !!b, b && (L.spacerState = Hn(b))), L.spacer = xe = b || q.createElement("div"), xe.classList.add("pin-spacer"), o && xe.classList.add("pin-spacer-" + o), L.pinState = he = Hn(d)), t.force3D !== !1 && G.set(d, { force3D: !0 }), M.spacer = xe = L.spacer, Re = Wt(d), W = Re[f + C.os2], we = G.getProperty(d), Te = G.quickSetter(d, C.a, Ut), zn(d, xe, Re), _e = Hn(d)), te) {
			U = Tt(te) ? Kt(te, rn) : rn, de = cn("scroller-start", o, T, C, U, 0), fe = cn("scroller-end", o, T, C, U, 0, de), Ce = de["offset" + C.op.d2];
			var Ye = be(H(T, "content") || T);
			le = this.markerStart = cn("start", o, Ye, C, U, Ce, 0, x), ue = this.markerEnd = cn("end", o, Ye, C, U, Ce, 0, x), x && (qe = G.quickSetter([le, ue], C.a, Ut)), !O && !(V.length && H(T, "fixedMarkers") === !0) && (Gt(D ? J : T), G.set([de, fe], { force3D: !0 }), Ae = G.quickSetter(de, C.a, Ut), Fe = G.quickSetter(fe, C.a, Ut));
		}
		if (x) {
			var Xe = x.vars.onUpdate, Ze = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				M.update(0, 0, 1), Xe && Xe.apply(x, Ze || []);
			});
		}
		if (M.previous = function() {
			return Q[Q.indexOf(M) - 1];
		}, M.next = function() {
			return Q[Q.indexOf(M) + 1];
		}, M.revert = function(e, t) {
			if (!t) return M.kill(!0);
			var r = e !== !1 || !M.enabled, i = Ie;
			r !== M.isReverted && (r && (Ge = Math.max(I(), M.scroll.rec || 0), F = M.progress, Ke = n && n.progress()), le && [
				le,
				ue,
				de,
				fe
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (Ie = M, M.update(r)), d && (!y || !M.isActive) && (r ? Rn(d, xe, he) : zn(d, xe, Wt(d), Oe)), r || M.update(r), Ie = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((Ie || !M.enabled) && !i)) {
				if (d && r && it) {
					en(e, "scrollEnd", vn);
					return;
				}
				!Tn && N && N(M), Ie = M, ae.tween && !a && (ae.tween.kill(), ae.tween = 0), X && X.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = P(), l = ne(), m = x ? x.duration() : bt(T, C), h = me <= .01 || !me, g = 0, _ = o || 0, v = Tt(a) ? a.end : t.end, b = t.endTrigger || u, S = Tt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), ee = M.pinnedContainer = t.pinnedContainer && be(t.pinnedContainer, M), E = u && Math.max(0, Q.indexOf(M)) || 0, k = E, A, L, oe, B, V, H, U, Ce, Te, W, K, Ae, Me;
				for (te && Tt(a) && (Ae = G.getProperty(de, C.p), Me = G.getProperty(fe, C.p)); k-- > 0;) H = Q[k], H.end || H.refresh(0, 1) || (Ie = M), U = H.pin, U && (U === u || U === d || U === ee) && !H.isReverted && (W || (W = []), W.unshift(H), H.revert(!0, !0)), H !== Q[k] && (E--, k--);
				for (Ct(S) && (S = S(M)), S = ot(S, "start", M), R = Gn(S, u, s, C, I(), le, de, M, l, j, O, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), Ct(v) && (v = v(M)), St(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (St(S) ? S.split(" ")[0] : "") + v : (g = sn(v.substr(2), s), v = St(S) ? S : (x ? G.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, R) : R) + g, b = u)), v = ot(v, "end", M), z = Math.max(R, Gn(v || (b ? "100% 0" : m), b, s, C, I() + g, ue, fe, M, l, j, O, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = E; k--;) H = Q[k] || {}, U = H.pin, U && H.start - H._pinPush <= R && !x && H.end > 0 && (A = H.end - (M._startClamp ? Math.max(0, H.start) : H.start), (U === u && H.start - H._pinPush < R || U === ee) && isNaN(S) && (g += A * (1 - H.progress)), U === d && (_ += A));
				if (R += g, z += g, M._startClamp && (M._startClamp += g), M._endClamp && !Tn && (M._endClamp = z || -.001, z = Math.min(z, bt(T, C))), me = z - R || (R -= .01) && .001, h && (F = G.utils.clamp(0, 1, G.utils.normalize(R, z, Ge))), M._pinPush = _, le && g && (A = {}, A[C.a] = "+=" + g, ee && (A[C.p] = "-=" + I()), G.set([le, ue], A)), d && !($e && M.end >= bt(T, C))) A = Wt(d), B = C === ye, oe = I(), Ee = parseFloat(we(C.a)) + _, !m && z > 1 && (K = (D ? q.scrollingElement || ke : T).style, K = {
					style: K,
					value: K["overflow" + C.a.toUpperCase()]
				}, D && Wt(J)["overflow" + C.a.toUpperCase()] !== "scroll" && (K.style["overflow" + C.a.toUpperCase()] = "scroll")), zn(d, xe, A), _e = Hn(d), L = qt(d, !0), Ce = O && Se(T, B ? ve : ye)(), f ? (Oe = [f + C.os2, me + _ + Ut], Oe.t = xe, k = f === zt ? Jt(d, C) + me + _ : 0, k && (Oe.push(C.d, k + Ut), xe.style.flexBasis !== "auto" && (xe.style.flexBasis = k + Ut)), Vn(Oe), ee && Q.forEach(function(e) {
					e.pin === ee && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), O && I(Ge)) : (k = Jt(d, C), k && xe.style.flexBasis !== "auto" && (xe.style.flexBasis = k + Ut)), O && (V = {
					top: L.top + (B ? oe - R : Ce) + Ut,
					left: L.left + (B ? Ce : oe - R) + Ut,
					boxSizing: "border-box",
					position: "fixed"
				}, V[Nt] = V["max" + Vt] = Math.ceil(L.width) + Ut, V[Pt] = V["max" + Ht] = Math.ceil(L.height) + Ut, V[Bt] = V[Bt + Lt] = V[Bt + Ft] = V[Bt + Rt] = V[Bt + It] = "0", V[zt] = A[zt], V[zt + Lt] = A[zt + Lt], V[zt + Ft] = A[zt + Ft], V[zt + Rt] = A[zt + Rt], V[zt + It] = A[zt + It], ge = Un(he, V, y), Tn && I(0)), n ? (Te = n._initted, He(1), n.render(n.duration(), !0, !0), De = we(C.a) - Ee + me + _, je = Math.abs(me - De) > 1, O && je && ge.splice(ge.length - 2, 2), n.render(0, !0, !0), Te || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), He(0)) : De = me, K && (K.value ? K.style["overflow" + C.a.toUpperCase()] = K.value : K.style.removeProperty("overflow-" + C.a));
				else if (u && I() && !x) for (L = u.parentNode; L && L !== J;) L._pinOffset && (R -= L._pinOffset, z -= L._pinOffset), L = L.parentNode;
				W && W.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = R, M.end = z, se = ce = Tn ? Ge : I(), !x && !Tn && (se < Ge && I(Ge), M.scroll.rec = 0), M.revert(!1, !0), ie = nt(), We && (re = -1, We.restart(!0)), Ie = 0, n && w && (n._initted || Ke) && n.progress() !== Ke && n.progress(Ke || 0, !0).render(n.time(), !0, !0), (h || F !== M.progress || x || p || n && !n._initted) && (n && !w && (n._initted || F || n.vars.immediateRender !== !1) && n.totalProgress(x && R < -.001 && !F ? G.utils.normalize(R, z, 0) : F, !0), M.progress = h || (se - R) / me === F ? 0 : F), d && f && (xe._pinOffset = Math.round(M.progress * De)), X && X.invalidate(), isNaN(Ae) || (Ae -= G.getProperty(de, C.p), Me -= G.getProperty(fe, C.p), Yn(de, C, Ae), Yn(le, C, Ae - (o || 0)), Yn(fe, C, Me), Yn(ue, C, Me - (o || 0))), h && !Tn && M.update(), c && !Tn && !pe && (pe = !0, c(M), pe = !1);
			}
		}, M.getVelocity = function() {
			return (I() - ce) / (nt() - Pe) * 1e3 || 0;
		}, M.endAnimation = function() {
			Et(M.callbackAnimation), n && (X ? X.progress(1) : n.paused() ? w || Et(n, M.direction < 0, 1) : Et(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (R || M.refresh() || R) + n.labels[e] / n.duration() * me || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (St(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= R : e.start >= z;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = Tn === !0 ? Ge : M.scroll(), c = e ? 0 : (o - R) / me, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, E, D, te, j, N;
				if (t && (ce = se, se = x ? I() : o, v && (Be = ze, ze = n && !w ? n.totalProgress() : u)), m && d && !Ie && !tt && it && (!u && R < o + (o - ce) / (nt() - Pe) * m ? u = 1e-4 : u === 1 && z > o + (o - ce) / (nt() - Pe) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, te = h !== g, D = te || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, D && !Ie && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, w && (E = !te && A[b + 1] !== "none" && A[b + 1] || A[b], N = n && (E === "complete" || E === "reset" || E in n))), ee && (te || N) && (N || l || !n) && (Ct(ee) ? ee(M) : M.getTrailing(ee).forEach(function(e) {
						return e.endAnimation();
					})), w || (X && !Ie && !tt ? (X._dp._time - X._start !== X._time && X.render(X._dp._time - X._start), X.resetTo ? X.resetTo("totalProgress", u, n._tTime / n._tDur) : (X.vars.totalProgress = u, X.invalidate().restart())) : n && n.totalProgress(u, !!(Ie && (ie || e)))), d) {
						if (e && f && (xe.style[f + C.os2] = W), !O) Te(ft(Ee + De * u));
						else if (D) {
							if (j = !e && u > p && z + 1 > o && o + 1 >= bt(T, C), y) if (!e && (h || j)) {
								var P = qt(d, !0), ne = o - R;
								qn(d, J, P.top + (C === ye ? ne : 0) + Ut, P.left + (C === ye ? 0 : ne) + Ut);
							} else qn(d, xe);
							Vn(h || j ? ge : _e), je && u < 1 && h || Te(Ee + (u === 1 && !j ? De : 0));
						}
					}
					v && !ae.tween && !Ie && !tt && We.restart(!0), a && (te || _ && u && (u < 1 || !et)) && Me(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !w && !e && i(M), D && !Ie ? (w && (N && (E === "complete" ? n.pause().totalProgress(1) : E === "reset" ? n.restart(!0).pause() : E === "restart" ? n.restart(!0) : n[E]()), i && i(M)), (te || !et) && (s && te && Dt(M, s), k[b] && Dt(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), te || (b = u === 1 ? 1 : 3, k[b] && Dt(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (wt(S) ? S : 2500) && (Et(M.callbackAnimation), X ? X.progress(1) : Et(n, E === "reverse" ? 1 : !u, 1))) : w && i && !Ie && i(M);
				}
				if (Fe) {
					var re = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					Ae(re + +!!de._isFlipped), Fe(re);
				}
				qe && qe(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, en(T, "resize", hn), D || en(T, "scroll", pn), N && en(e, "refreshInit", N), t !== !1 && (M.progress = F = 0, se = ce = re = I()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && ae ? ae.tween : X;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: st(e, n && !!M._startClamp),
				end: st(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (Oe && e) {
				var t = Oe.indexOf(C.d) + 1;
				Oe[t] = parseFloat(Oe[t]) + e + Ut, Oe[1] = parseFloat(Oe[1]) + e + Ut, Vn(Oe);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || X && X.pause(), Ge = 0, L && (L.uncache = 1), N && tn(e, "refreshInit", N), We && (We.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)), !D)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === T && Q[r] !== M) return;
				tn(T, "resize", hn), D || tn(T, "scroll", pn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), X && !r && X.kill(), o && delete un[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === Y && Nn > 0 && Y--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || Tn || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), le && [
				le,
				ue,
				de,
				fe
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Pn === M && (Pn = 0), d && (L && (L.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (L.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Je && Je(M), n && n.add && !me) {
			var Qe = M.update;
			M.update = function() {
				M.update = Qe, B.cache++, R || z || M.refresh();
			}, G.delayedCall(.01, M.update), me = .01, R = z = 0;
		} else M.refresh();
		d && On();
	}, e.register = function(t) {
		return Oe || (G = t || mt(), pt() && window.document && e.enable(), Oe = at), Oe;
	}, e.defaults = function(e) {
		if (e) for (var t in e) an[t] = e[t];
		return an;
	}, e.disable = function(e, t) {
		at = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), tn(K, "wheel", pn), tn(q, "scroll", pn), clearInterval(Fe), tn(q, "touchcancel", dt), tn(J, "touchstart", dt), $t(tn, q, "pointerdown,touchstart,mousedown", lt), $t(tn, q, "pointerup,touchend,mouseup", ut), je.kill(), xt(tn);
		for (var n = 0; n < B.length; n += 3) nn(tn, B[n], B[n + 1]), nn(tn, B[n], B[n + 2]);
	}, e.enable = function() {
		if (K = window, q = document, ke = q.documentElement, J = q.body, G) if (Me = G.utils.toArray, Ne = G.utils.clamp, Je = G.core.context || dt, He = G.core.suppressOverwrites || dt, Ye = K.history.scrollRestoration || "auto", Mn = K.pageYOffset || 0, G.core.globals("ScrollTrigger", e), J) {
			at = 1, Xe = document.createElement("div"), Xe.style.height = "100vh", Xe.style.position = "absolute", kn(), ct(), W.register(G), e.isTouch = W.isTouch, qe = W.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), We = W.isTouch === 1, en(K, "wheel", pn), Ae = [
				K,
				q,
				ke,
				J
			], G.matchMedia ? (e.matchMedia = function(e) {
				var t = G.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, G.addEventListener("matchMediaInit", function() {
				Sn(), Cn();
			}), G.addEventListener("matchMediaRevert", function() {
				return xn();
			}), G.addEventListener("matchMedia", function() {
				jn(0, 1), yn("matchMedia");
			}), G.matchMedia().add("(orientation: portrait)", function() {
				return mn(), mn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), mn(), en(q, "scroll", pn);
			var t = J.hasAttribute("style"), n = J.style, r = n.borderTopStyle, i = G.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = qt(J), ye.m = Math.round(a.top + ye.sc()) || 0, ve.m = Math.round(a.left + ve.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (J.setAttribute("style", ""), J.removeAttribute("style")), Fe = setInterval(fn, 250), G.delayedCall(.5, function() {
				return tt = 0;
			}), en(q, "touchcancel", dt), en(J, "touchstart", dt), $t(en, q, "pointerdown,touchstart,mousedown", lt), $t(en, q, "pointerup,touchend,mouseup", ut), Re = G.utils.checkPrefix("transform"), Ln.push(Re), Oe = nt(), je = G.delayedCall(.2, jn).pause(), X = [
				q,
				"visibilitychange",
				function() {
					var e = K.innerWidth, t = K.innerHeight;
					q.hidden ? (ze = e, Be = t) : (ze !== e || Be !== t) && hn();
				},
				q,
				"DOMContentLoaded",
				jn,
				K,
				"load",
				jn,
				K,
				"resize",
				hn
			], xt(en), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < B.length; o += 3) nn(tn, B[o], B[o + 1]), nn(tn, B[o], B[o + 2]);
		} else q && q.addEventListener("DOMContentLoaded", function t() {
			e.enable(), q.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (et = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Fe) || (Fe = n) && setInterval(fn, n), "ignoreMobileResize" in t && (We = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (xt(tn) || xt(en, t.autoRefreshEvents || "none"), Ue = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = be(e), r = B.indexOf(n), i = ht(n);
		~r && B.splice(r, i ? 6 : 2), t && (i ? V.unshift(K, t, J, t, ke, t) : V.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (St(e) ? be(e) : e).getBoundingClientRect(), i = r[n ? Nt : Pt] * t || 0;
		return n ? r.right - i > 0 && r.left + i < K.innerWidth : r.bottom - i > 0 && r.top + i < K.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		St(e) && (e = be(e));
		var r = e.getBoundingClientRect(), i = r[n ? Nt : Pt], a = t == null ? i / 2 : t in on ? on[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / K.innerWidth : (r.top + a) / K.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = gn.killAll || [];
			gn = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? Me(e).forEach(function(e) {
		if (e && e.style) {
			var t = bn.indexOf(e);
			t >= 0 && bn.splice(t, 5), bn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), G.core.getCache(e), Je());
		}
	}) : bn;
}, $.revert = function(e, t) {
	return Cn(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? hn(!0) : (Oe || $.register()) && jn(!0);
}, $.update = function(e) {
	return ++B.cache && Fn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = wn, $.maxScroll = function(e, t) {
	return bt(e, t ? ve : ye);
}, $.getScrollFunc = function(e, t) {
	return Se(be(e), t ? ve : ye);
}, $.getById = function(e) {
	return un[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!it;
}, $.snapDirectional = Zt, $.addEventListener = function(e, t) {
	var n = gn[e] || (gn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = gn[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, $.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = G.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && Ct(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return Ct(a) && (a = a(), en($, "refresh", function() {
		return a = t.batchMax();
	})), Me(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var Zn = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Qn = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (W.isTouch ? " pinch-zoom" : "") : "none", t === ke && e(J, n);
}, $n = {
	auto: 1,
	scroll: 1
}, er = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || G.core.getCache(i), o = nt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== J && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !($n[(s = Wt(i)).overflowY] || $n[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !ht(i) && ($n[(s = Wt(i)).overflowY] || $n[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, tr = function(e, t, n, r) {
	return W.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && er,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && en(q, W.eventTypes[0], ir, !1, !0);
		},
		onDisable: function() {
			return tn(q, W.eventTypes[0], ir, !0);
		}
	});
}, nr = /(input|label|select|textarea)/i, rr, ir = function(e) {
	var t = nr.test(e.target.tagName);
	(t || rr) && (e._gsapAllow = !0, rr = t);
}, ar = function(e) {
	Tt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = be(e.target) || ke, l = G.core.globals().ScrollSmoother, u = l && l.get(), d = qe && (e.content && be(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Se(c, ye), p = Se(c, ve), m = 1, h = (W.isTouch && K.visualViewport ? K.visualViewport.scale * K.visualViewport.width : K.outerWidth) / K.innerWidth, g = 0, _ = Ct(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = tr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = dt, ee = dt, C = function() {
		s = bt(c, ye), ee = Ne(+!!qe, s), n && (S = Ne(0, bt(c, ve))), v = En;
	}, w = function() {
		d._gsap.y = ft(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, T = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = ft(o.deltaY / 2), t = ee(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = ft((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = B.cache, Fn();
			}
			return !0;
		}
		f.offset && w(), y = !0;
	}, E, D, O, k, A = function() {
		C(), E.isActive() && E.vars.scrollY > s && (f() > s ? E.progress(1) && f(s) : E.resetTo("scrollY", s));
	};
	return d && G.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return qe && e.type === "touchmove" && T(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = ft((K.visualViewport && K.visualViewport.scale || 1) / h), E.pause(), e !== m && Qn(c, m > 1.01 || !n && "x"), D = p(), O = f(), C(), v = En;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && w(), !t) k.restart(!0);
		else {
			B.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Zn(p, i, o, bt(c, ve)), E.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Zn(f, i, o, bt(c, ye)), E.vars.scrollY = ee(o), E.invalidate().duration(r).play(.01), (qe && E.vars.scrollY >= s || i >= s - 1) && G.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		E._ts && E.pause(), nt() - g > 1e3 && (v = 0, g = nt());
	}, e.onChange = function(e, t, r, i, a) {
		if (En !== v && C(), t && n && p(S(i[2] === t ? D + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && w();
			var o = a[2] === r, s = o ? O + e.startY - e.y : f() + r - a[1], c = ee(s);
			o && s !== c && (O += c - s), f(c);
		}
		(r || t) && Fn();
	}, e.onEnable = function() {
		Qn(c, !n && "x"), $.addEventListener("refresh", A), en(K, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		Qn(c, !0), tn(K, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new W(e), o.iOS = qe, qe && !f() && f(1), qe && G.ticker.add(dt), k = o._dc, E = G.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: Jn(f, f(), function() {
			return E.pause();
		}) },
		onUpdate: Fn,
		onComplete: k.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (Ct(e)) return Q.sort(e);
	var t = K.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + K.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new W(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Z;
	if (e === !0 && Z) return Z.enable();
	if (e === !1) {
		Z && Z.kill(), Z = e;
		return;
	}
	var t = e instanceof W ? e : ar(e);
	return Z && Z.target === t.target && Z.kill(), ht(t.target) && (Z = t), t;
}, $.core = {
	_getVelocityProp: Ce,
	_inputObserver: tr,
	_scrollers: B,
	_proxies: V,
	bridge: {
		ss: function() {
			it || yn("scrollStart"), it = nt();
		},
		ref: function() {
			return Ie;
		}
	}
}, mt() && G.registerPlugin($);
//#endregion
//#region node_modules/gsap/SplitText.js
var or, sr, cr = typeof Symbol == "function" ? Symbol() : "_split", lr, ur = () => lr || kr.register(window.gsap), dr = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, fr = (e) => e ? typeof e == "string" ? fr(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((e, t) => (typeof t == "string" ? e.push(...fr(t)) : e.push(t), e), []) : [e] : [], pr = (e) => fr(e).filter((e) => e && e.nodeType === 1), mr = [], hr = function() {}, gr = { add: (e) => e() }, _r = /\s+/g, vr = /* @__PURE__ */ RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), yr = {
	left: 0,
	top: 0,
	width: 0,
	height: 0
}, br = (e, t) => {
	for (; ++t < e.length && e[t] === yr;);
	return e[t] || yr;
}, xr = ({ element: e, html: t, ariaL: n, ariaH: r }) => {
	e.innerHTML = t, n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label"), r ? e.setAttribute("aria-hidden", r) : e.removeAttribute("aria-hidden");
}, Sr = (e, t) => {
	if (t) {
		let n = new Set(e.join("").match(t) || mr), r = e.length, i, a, o, s;
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
}, Cr = (e) => window.getComputedStyle(e).display === "inline" && (e.style.display = "inline-block"), wr = (e, t, n) => t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n), Tr = (e, t, n) => {
	let r = t[e + "sClass"] || "", { tag: i = "div", aria: a = "auto", propIndex: o = !1 } = t, s = e === "line" ? "block" : "inline-block", c = r.indexOf("++") > -1, l = (t) => {
		let l = document.createElement(i), u = n.length + 1;
		return r && (l.className = r + (c ? " " + r + u : "")), o && l.style.setProperty("--" + e, u + ""), a !== "none" && l.setAttribute("aria-hidden", "true"), i !== "span" && (l.style.position = "relative", l.style.display = s), l.textContent = t, n.push(l), l;
	};
	return c && (r = r.replace("++", "")), l.collection = n, l;
}, Er = (e, t, n, r) => {
	let i = Tr("line", n, r), a = window.getComputedStyle(e).textAlign || "left";
	return (n, r) => {
		let o = i("");
		for (o.style.textAlign = a, e.insertBefore(o, t[n]); n < r; n++) o.appendChild(t[n]);
		o.normalize();
	};
}, Dr = (e, t, n, r, i, a, o, s, c, l) => {
	var u;
	let d = Array.from(e.childNodes), f = 0, { wordDelimiter: p, reduceWhiteSpace: m = !0, prepareText: h } = t, g = e.getBoundingClientRect(), _ = g, v = !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre", y = 0, b = n.collection, x, S, ee, C, w, T, E, D, O, k, A, te, j, M, N, P, ne, re;
	for (typeof p == "object" ? (ee = p.delimiter || p, S = p.replaceWith || "") : S = p === "" ? "" : p || " ", x = S !== " "; f < d.length; f++) if (C = d[f], C.nodeType === 3) {
		for (N = C.textContent || "", m ? N = N.replace(_r, " ") : v && (N = N.replace(/\n/g, S + "\n")), h && (N = h(N, e)), C.textContent = N, w = S || ee ? N.split(ee || S) : N.match(s) || mr, ne = w[w.length - 1], D = x ? ne.slice(-1) === " " : !ne, ne || w.pop(), _ = g, E = x ? w[0].charAt(0) === " " : !w[0], E && wr(" ", e, C), w[0] || w.shift(), Sr(w, c), a && l || (C.textContent = ""), O = 1; O <= w.length; O++) if (P = w[O - 1], !m && v && P.charAt(0) === "\n" && ((u = C.previousSibling) == null || u.remove(), wr(document.createElement("br"), e, C), P = P.slice(1)), !m && P === "") wr(S, e, C);
		else if (P === " ") e.insertBefore(document.createTextNode(" "), C);
		else {
			if (x && P.charAt(0) === " " && wr(" ", e, C), y && O === 1 && !E && b.indexOf(y.parentNode) > -1 ? (T = b[b.length - 1], T.appendChild(document.createTextNode(r ? "" : P))) : (T = n(r ? "" : P), wr(T, e, C), y && O === 1 && !E && T.insertBefore(y, T.firstChild)), r) for (A = dr ? Sr([...dr.segment(P)].map((e) => e.segment), c) : P.match(s) || mr, re = 0; re < A.length; re++) T.appendChild(A[re] === " " ? document.createTextNode(" ") : r(A[re]));
			if (a && l) {
				if (N = C.textContent = N.substring(P.length + 1, N.length), k = T.getBoundingClientRect(), k.top > _.top && k.left <= _.left) {
					for (te = e.cloneNode(), j = e.childNodes[0]; j && j !== T;) M = j, j = j.nextSibling, te.appendChild(M);
					e.parentNode.insertBefore(te, e), i && Cr(te);
				}
				_ = k;
			}
			(O < w.length || D) && wr(O >= w.length ? " " : x && P.slice(-1) === " " ? " " + S : S, e, C);
		}
		e.removeChild(C), y = 0;
	} else C.nodeType === 1 && (o && o.indexOf(C) > -1 ? (b.indexOf(C.previousSibling) > -1 && b[b.length - 1].appendChild(C), y = C) : (Dr(C, t, n, r, i, a, o, s, c, !0), y = 0), i && Cr(C));
}, Or = class e {
	constructor(e, t) {
		this.isSplit = !1, ur(), this.elements = pr(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach((e) => {
			var n;
			t.overwrite !== !1 && ((n = e[cr]) == null || n._data.orig.filter(({ element: t }) => t === e).forEach(xr)), e[cr] = this;
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
		}, hr(this), this.split(t);
	}
	split(e) {
		return (this._ctx || gr).add(() => {
			this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
			let { type: t = "chars,words,lines", aria: n = "auto", deepSlice: r = !0, smartWrap: i, onSplit: a, autoSplit: o = !1, specialChars: s, mask: c } = this.vars, l = t.indexOf("lines") > -1, u = t.indexOf("chars") > -1, d = t.indexOf("words") > -1, f = u && !d && !l, p = s && ("push" in s ? RegExp("(?:" + s.join("|") + ")", "gu") : s), m = p ? RegExp(p.source + "|" + vr.source, "gu") : vr, h = !!e.ignore && pr(e.ignore), { orig: g, animTime: _, obs: v } = this._data, y;
			(u || d || l) && (this.elements.forEach((t, a) => {
				g[a] = {
					element: t,
					html: t.innerHTML,
					ariaL: t.getAttribute("aria-label"),
					ariaH: t.getAttribute("aria-hidden")
				}, n === "auto" ? t.setAttribute("aria-label", (t.textContent || "").trim()) : n === "hidden" && t.setAttribute("aria-hidden", "true");
				let o = [], s = [], c = [], _ = u ? Tr("char", e, o) : null, v = Tr("word", e, s), y, b, x, S;
				if (Dr(t, e, v, _, f, r && (l || f), h, m, p, !1), l) {
					let n = fr(t.childNodes), r = Er(t, n, e, c), i, a = [], o = 0, s = n.map((e) => e.nodeType === 1 ? e.getBoundingClientRect() : yr), l = yr, u;
					for (y = 0; y < n.length; y++) i = n[y], i.nodeType === 1 && (i.nodeName === "BR" ? ((!y || n[y - 1].nodeName !== "BR") && (a.push(i), r(o, y + 1)), o = y + 1, l = br(s, y)) : (u = s[y], y && u.top > l.top && u.left < l.left + l.width - 1 && (r(o, y), o = y), l = u));
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
			}))), this.isSplit = !0, sr && l && o && sr.addEventListener("loadingdone", this._split), (y = a && a(this)) && y.totalTime && (this._data.anim = _ ? y.totalTime(_) : y), l && o && this.elements.forEach((e, t) => {
				g[t].width = e.offsetWidth, v && v.observe(e);
			});
		}), this;
	}
	kill() {
		let { obs: e } = this._data;
		e && e.disconnect(), sr == null || sr.removeEventListener("loadingdone", this._split);
	}
	revert() {
		var e, t;
		if (this.isSplit) {
			let { orig: n, anim: r } = this._data;
			this.kill(), n.forEach(xr), this.chars.length = this.words.length = this.lines.length = n.length = this.masks.length = 0, this.isSplit = !1, r && (this._data.animTime = r.totalTime(), r.revert()), (t = (e = this.vars).onRevert) == null || t.call(e, this);
		}
		return this;
	}
	static create(t, n) {
		return new e(t, n);
	}
	static register(e) {
		or = or || e || window.gsap, or && (fr = or.utils.toArray, hr = or.core.context || hr), !lr && window.innerWidth > 0 && (sr = document.fonts, lr = !0);
	}
};
Or.version = "3.15.0";
var kr = Or, Ar = "[data-reveal], [data-splitline], h2", jr = ".fwm-modal, [data-modal], .site-lightbox, [data-site-lightbox]", Mr = "data-reveal", Nr = "data-reveal-delay", Pr = "data-reveal-stagger", Fr = "data-reveal-trigger", Ir = "data-reveal-pending", Lr = "data-reveal-ready", Rr = "data-reveal-group", zr = "[data-reveal-group]", Br = "fw-reveal-tight", Vr = "fw-ln", Hr = "fw-wd", Ur = "fw-ch", Wr = 1.1, Gr = .25, Kr = "top bottom-=25%", qr = "expo.out", Jr = 1.618033988749895;
function Yr(e) {
	return Math.round(.1 * Jr ** (e - 1) * 1e3) / 1e3;
}
var Xr = Yr(6), Zr = Yr(2), Qr = 4, $r = {
	lines: Yr(1),
	words: Yr(1),
	chars: Yr(2) - Yr(1)
}, ei = !1;
function ti() {
	ei || (ei = !0, b.registerPlugin(kr, $));
}
function ni() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function ri(e) {
	var t;
	let n = (t = e.getAttribute(Mr)) == null ? void 0 : t.trim();
	return n === "words" || n === "chars" || n === "lines" ? n : "lines";
}
function ii(e) {
	return e.hasAttribute(Lr) || e.hasAttribute(Ir) || e.getAttribute(Mr) === "off" ? !1 : e.closest(jr) === null;
}
function ai(e, t) {
	let n = e.getAttribute(t);
	if (n === null || n.trim() === "") return null;
	let r = Number.parseFloat(n);
	return Number.isFinite(r) ? r : null;
}
function oi(e) {
	return e.getAttribute(Fr) !== "false";
}
function si(e) {
	let t = window.getComputedStyle(e), n = t.lineHeight.trim(), r = Number.parseFloat(t.fontSize);
	if (n === "normal" || !Number.isFinite(r) || r <= 0) return !1;
	let i = Number.parseFloat(n);
	return !Number.isFinite(i) || i <= 0 ? !1 : (n.endsWith("px") ? i / r : i) <= Wr;
}
function ci(e, t) {
	var n, r, i;
	let a = ri(e), o = ((n = ai(e, Nr)) == null ? 0 : n) + ((r = t == null ? void 0 : t.offset) == null ? 0 : r), s = (i = ai(e, Pr)) == null ? $r[a] : i, c = oi(e), l = si(e);
	e.classList.toggle(Br, l);
	let u = l ? Gr * Number.parseFloat(window.getComputedStyle(e).fontSize) : 0, d = !1;
	kr.create(e, {
		type: a === "lines" ? "lines" : `lines,${a}`,
		mask: "lines",
		tag: "span",
		linesClass: Vr,
		wordsClass: Hr,
		charsClass: Ur,
		smartWrap: !0,
		autoSplit: !0,
		onSplit: (n) => {
			var r;
			e.removeAttribute(Ir), e.setAttribute(Lr, "");
			let i = n[a];
			if (u > 0 && n.lines.forEach((e) => {
				let t = e.parentElement;
				t && (t.style.overflowClipMargin = `${Math.round(u)}px`);
			}), !d) return b.set(i, {
				yPercent: 101,
				y: Math.round(u)
			}), b.to(i, {
				yPercent: 0,
				y: 0,
				duration: Xr,
				ease: qr,
				stagger: s,
				delay: o,
				onComplete: () => {
					d = !0;
				},
				...c && { scrollTrigger: {
					trigger: (r = t == null ? void 0 : t.trigger) == null ? e : r,
					start: Kr,
					once: !0
				} }
			});
		}
	});
}
function li(e = document) {
	let t = o(Ar, e).filter(ii);
	if (t.length === 0 || u()) return;
	ti(), t.forEach((e) => e.setAttribute(Ir, ""));
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	t.forEach((e) => {
		var t, i;
		let a = e.closest(zr);
		if (!a) {
			r.set(e, null);
			return;
		}
		let o = (t = n.get(a)) == null ? 0 : t, s = (i = ai(a, Rr)) == null ? Zr : i;
		n.set(a, o + 1), r.set(e, {
			trigger: a,
			offset: Math.min(o, Qr) * s
		});
	}), ni().then(() => {
		t.forEach((e) => {
			var t;
			e.isConnected && ci(e, (t = r.get(e)) == null ? null : t);
		}), $.refresh();
	});
}
//#endregion
//#region src/modules/lightbox.ts
var ui = "[data-lightbox-src]", di = "js-lightbox", fi = `.${di}`, pi = `${ui}, ${fi}`, mi = "[data-site-lightbox]", hi = "[data-lightbox-close]", gi = "[data-lightbox-prev]", _i = "[data-lightbox-next]", vi = "[data-lightbox-auto-icon]", yi = "site-lightbox-trigger", bi = "site-lightbox-trigger__image", xi = "site-lightbox-trigger__icon", Si = "w-dyn-bind-empty", Ci = "/plugins/Basic/assets/placeholder.", wi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ti = !1, Ei = null, Di = null, Oi = [], ki = 0, Ai = !1, ji = null;
function Mi(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return Ni(e);
	let n = s("img", e);
	return n ? Ni(n) : "";
}
function Ni(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(Si) || t.includes(Ci) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function Pi(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function Fi(e) {
	let t = Mi(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		alt: Pi(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function Ii(e) {
	let t = Fi(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(pi).filter((e) => r(e, "data-lightbox-group") === t.group).map(Fi).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function Li() {
	let e = document.createElement("span");
	return e.className = xi, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = wi, e;
}
function Ri(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function zi(e) {
	if (!Ri(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Ei == null ? void 0 : Ei.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function Bi(e) {
	if (e.closest(`.${yi}`) || !Mi(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${yi} ${di}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(di), e.classList.add(bi), e.before(t), t.append(e, Li()), zi(t);
}
function Vi(e) {
	if (e instanceof HTMLImageElement) {
		Bi(e);
		return;
	}
	Mi(e).trim() && (e.classList.add(yi), zi(e), s(vi, e) || e.append(Li()));
}
function Hi() {
	o(fi).forEach(Vi);
}
function Ui(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function Wi() {
	var e, t, n, r, i, a;
	if (Di) return Gi(Di), Di;
	let o = s(mi), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = Ei == null ? void 0 : Ei.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = Ui((l = Ei == null ? void 0 : Ei.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = Ui((u = Ei == null ? void 0 : Ei.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = Ui((d = Ei == null ? void 0 : Ei.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = s(hi, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(gi, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(_i, c)) == null ? document.createElement("button") : a
	};
	return Di = f, Gi(f), !o && !document.body.contains(c) && document.body.append(c), f;
}
function Gi(e) {
	var t, n, r, i;
	let a = (t = Ei == null ? void 0 : Ei.t("close", "Close")) == null ? "Close" : t, o = (n = Ei == null ? void 0 : Ei.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Ei == null ? void 0 : Ei.t("next", "Next")) == null ? "Next" : r, c = (i = Ei == null ? void 0 : Ei.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function Ki() {
	let e = Wi(), t = Oi[ki];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = Oi.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(ki), e.root.dataset.lightboxCount = String(Oi.length);
}
function qi(e) {
	let t = Wi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function Ji(e) {
	Oi.length < 2 || (ki = (e + Oi.length) % Oi.length, Ki());
}
function Yi() {
	Ji(ki + 1);
}
function Xi() {
	Ji(ki - 1);
}
function Zi(e) {
	var t;
	let n = Ii(e);
	if (!n) return;
	let r = Ai;
	Oi = n.items, ki = n.index, ji = e, Ai = !0, Ki(), qi(!0), r || p();
	let i = Wi();
	m(i.closeButton || i.root);
	let a = Oi[ki];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: ki,
		count: Oi.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function Qi() {
	var t;
	if (!Ai || !Di) return;
	let r = Di, i = ji, a = (t = Oi[ki]) == null ? null : t;
	qi(!1), n(), Ai = !1, Oi = [], ki = 0, ji = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function $i(e) {
	if (!(!Ai || !Di)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), Qi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), Yi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), Xi();
			return;
		}
		y(Di.root, e);
	}
}
function ea(e) {
	!Ai || !Di || e.target === Di.root && Qi();
}
function ta(e) {
	return Ei = e.i18n, Hi(), Ti || (g(document, "click", pi, (e, t) => {
		e.preventDefault(), Zi(t);
	}), g(document, "keydown", fi, (e, t) => {
		Ri(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Zi(t));
	}), g(document, "click", hi, (e) => {
		e.preventDefault(), Qi();
	}), g(document, "click", gi, (e) => {
		e.preventDefault(), Xi();
	}), g(document, "click", _i, (e) => {
		e.preventDefault(), Yi();
	}), document.addEventListener("click", ea), document.addEventListener("keydown", $i, !0), Ti = !0), {
		openLightbox: Zi,
		closeLightbox: Qi
	};
}
//#endregion
//#region src/modules/modal.ts
var na = "[data-modal]", ra = "[data-modal-content]", ia = "[data-modal-open]", aa = "[data-modal-close]", oa = "a[href^=\"#modal:\"]", sa = "#modal:", ca = 220, la = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", ua = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", da = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", fa = !1, pa = !0, ma = null, ha = null, ga = "", _a = null, va = null, ya = /* @__PURE__ */ new Map();
function ba(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(sa) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function xa() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(aa),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = la, t.lightboxIcon.innerHTML = ua, Ca(t), t;
}
function Sa() {
	return (!ha || !document.body.contains(ha.root)) && (ha = xa()), Ca(ha), ha;
}
function Ca(e) {
	var t, n;
	let r = (t = ma == null ? void 0 : ma.t("close", "Close")) == null ? "Close" : t, i = (n = ma == null ? void 0 : ma.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function wa(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Ta(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = wa(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = x(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Ea(e) {
	var t, n, r;
	let i = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = wa(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: x(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = wa(e, "[data-modal-image]"), s = x(a);
	return s ? [{
		src: s,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function Da(e) {
	var t, n, i, a, o, s, c, l;
	let u = r(e, "data-modal-content");
	if (!u) return null;
	let d = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", f = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, p = Ea(e), m = p[0], h = e.querySelector("[data-modal-body]");
	return {
		id: u,
		address: d,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: f,
		image: (o = m == null ? void 0 : m.src) == null ? "" : o,
		imageAlt: (s = m == null ? void 0 : m.alt) == null ? "" : s,
		caption: (c = m == null ? void 0 : m.caption) == null ? "" : c,
		html: (l = h == null ? void 0 : h.innerHTML) == null ? "" : l,
		work: Ta(e),
		gallery: p
	};
}
function Oa(e) {
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
function ka() {
	o(ra).forEach((e) => {
		let t = Da(e);
		t && ya.set(t.id, t);
	}), o(na).forEach((e) => {
		let t = Oa(e);
		t && ya.set(t.id, t), e.remove();
	});
}
function Aa(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(ra).find((e) => r(e, "data-modal-content") === n), a = i ? Da(i) : null;
	return a && ya.set(n, a), (t = a == null ? ya.get(n) : a) == null ? null : t;
}
function ja(e) {
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
		e.className = "fwm-modal__work-icon", e.innerHTML = da, o.append(e);
	}
	return i.append(o), i;
}
function Ma(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = ua, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function Na(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function Pa(e, t) {
	let n = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !n, e.imageLink.href = n ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", n ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = n ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, e.text.innerHTML = t.html, Na(e);
}
function Fa(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, e.text.innerHTML = t.html, e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(ja(t.work)), i.forEach((t, n) => {
		e.gallery.append(Ma(t, n));
	});
}
function Ia(e) {
	let t = Sa();
	return e.layout === "context" ? Fa(t, e) : Pa(t, e), t;
}
function La(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function Ra(e) {
	va !== null && (window.clearTimeout(va), va = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function za(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), va = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), va = null;
	}, ca), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function Ba(e, t) {
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
	ga && Ha(), ya.set(g.id, g), _a = t == null ? c() : t, ga = g.id;
	let _ = Ia(g);
	Ra(_), p(), La(_), d(_.root, "site:modal-open", {
		id: ga,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function Va(e, t) {
	let n = Aa(e);
	n && Ba(n, t);
}
function Ha() {
	if (!ga || !ha) return;
	let t = ga, r = _a;
	za(ha), n(), ga = "", _a = null, d(ha.root, "site:modal-close", {
		id: t,
		modal: ha.root
	}), e(r);
}
function Ua(e) {
	if (!(!ga || !ha) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), Ha();
			return;
		}
		y(ha.panel, e);
	}
}
function Wa(e) {
	if (!pa || !ga || !ha) return;
	let t = e.target;
	!i(t) || t !== ha.root || Ha();
}
function Ga(e) {
	var n;
	return pa = (n = e.closeOnBackdrop) == null || n, ma = e.i18n, ka(), Sa(), fa || (g(document, "click", ia, (e, n) => {
		e.preventDefault(), Va(t(n, "data-modal-open"), n);
	}), g(document, "click", oa, (e, t) => {
		e.preventDefault(), Va(ba(t), t);
	}), g(document, "click", aa, (e, t) => {
		ha != null && ha.root.contains(t) && (e.preventDefault(), Ha());
	}), document.addEventListener("click", Wa), document.addEventListener("keydown", Ua), fa = !0), {
		openModal: Va,
		openContentModal: Ba,
		closeModal: Ha
	};
}
//#endregion
//#region src/modules/page-transition.ts
var Ka = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, qa = "page-transition-overlay", Ja = "[data-page-transition-overlay], .page-transition-overlay", Ya = "site-page-transition", Xa = "pending", Za = "is-page-transition-pending", Qa = "[data-site-menu]", $a = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-flip]",
	"[data-work-flip-back]",
	"[download]"
].join(","), eo = !1, to = !1;
function no(e) {
	document.documentElement.classList.toggle(Za, e);
}
function ro() {
	try {
		no(window.sessionStorage.getItem(Ya) === Xa);
	} catch (e) {
		no(!1);
	}
}
function io() {
	let e = document.querySelector(Ja);
	if (e) return e.classList.add(qa), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = qa, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function ao(e) {
	var t;
	return !!(e.closest($a) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function oo(e, t) {
	return !to && !e.defaultPrevented && !l(e) && !ao(t);
}
function so() {
	try {
		window.sessionStorage.setItem(Ya, Xa), no(!0);
	} catch (e) {}
}
function co() {
	try {
		let e = window.sessionStorage.getItem(Ya) === Xa;
		return window.sessionStorage.removeItem(Ya), no(!1), e;
	} catch (e) {
		return no(!1), !1;
	}
}
function lo(e) {
	let t = co(), n = Array.from(document.querySelectorAll(Qa)), r = () => {
		n.forEach((e) => {
			b.fromTo(e, {
				y: Math.max(0, window.innerHeight - e.getBoundingClientRect().top) + 8,
				autoAlpha: 1
			}, {
				y: 0,
				duration: .65,
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
		delay: Ka.holdDuration,
		duration: Ka.revealDuration,
		ease: Ka.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			}), r();
		}
	});
}
function uo(e, t) {
	to = !0, so(), b.killTweensOf(t), b.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: Ka.coverDuration,
		ease: Ka.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	});
}
function fo(e, t) {
	if (!e.persisted) return;
	to = !1, co(), b.killTweensOf(t), b.set(t, {
		yPercent: -100,
		y: 0
	});
	let n = document.querySelectorAll(Qa);
	b.killTweensOf(n), b.set(n, { clearProps: "transform,opacity,visibility" });
}
function po() {
	if (eo) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", po, { once: !0 });
		return;
	}
	eo = !0;
	let e = io();
	lo(e), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (to) {
			t.preventDefault();
			return;
		}
		if (!oo(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), uo(i, e));
	}, !0), window.addEventListener("pageshow", (t) => fo(t, e));
}
ro();
//#endregion
//#region src/modules/parallax.ts
var mo = "[data-parallax]", ho = "data-parallax", go = "data-parallax-ready", _o = "fw-parallax-window", vo = "fw-parallax-window--self-sized", yo = "fw-parallax-inner", bo = 60, xo = 160, So = ".site-lightbox-trigger", Co = 1, wo = !1;
function To() {
	wo || (wo = !0, b.registerPlugin($));
}
function Eo(e) {
	let t = e.getAttribute(ho);
	if (t === null || t.trim() === "") return bo;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.min(Math.abs(n), xo) : bo;
}
function Do(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Oo(e, t) {
	var n;
	let r = (n = e.closest(So)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(_o)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(_o);
	let a = document.createElement("span"), o = t / 2 + Co;
	if (a.className = yo, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(_o), null;
		r.classList.add(vo), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function ko(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Ao(e)
		});
		return;
	}
	n.forEach((n) => {
		Do(n).then(() => {
			if (!n.isConnected) return;
			let r = Oo(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: Ao(e)
			}), $.refresh());
		});
	});
}
function Ao(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function jo(e = document) {
	let t = o(mo, e).filter((e) => !e.hasAttribute(go));
	t.length === 0 || u() || (To(), t.forEach((e) => {
		let t = Eo(e);
		t !== 0 && (e.setAttribute(go, ""), ko(e, t));
	}));
}
//#endregion
//#region src/modules/site-menu.ts
var Mo = "[data-site-menu]", No = "[data-site-menu-panel]", Po = "[data-site-menu-toggle]", Fo = "[data-site-menu-toggle-label]", Io = "[data-site-menu-toggle-label-text]", Lo = "[data-site-menu-toggle-label-ghost]", Ro = "data-site-menu-toggle-label-text", zo = "data-site-menu-toggle-label-ghost", Bo = "[data-site-menu-link]", Vo = "[data-site-menu-indicator]", Ho = "is-active", Uo = "is-open", Wo = "is-ready", Go = "data-site-menu-open-label", Ko = "data-site-menu-closed-label", qo = "data-site-menu-current-key", Jo = "data-site-menu-label", Yo = "data-site-menu-key", Xo = "data-site-menu-original-tabindex", Zo = "CLOSE", Qo = "MENU", $o = .42, es = [], ts = !1;
function ns(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function rs(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return ns(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function is(e, t) {
	return t ? r(e, Yo) === t : !1;
}
function as(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || is(e, r(t, qo) || ((n = document.documentElement.getAttribute(qo)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(qo)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = rs(e);
	return a ? a === ns(window.location.pathname) : !1;
}
function os(e) {
	var t, n;
	return r(e, Jo) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function ss(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Ho) || e.classList.contains("w--current"))) == null ? e.links.find((t) => as(t, e.root)) : t;
	return n ? os(n) : "";
}
function cs(e) {
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
			ss(e),
			r(e.root, Ko) || Qo,
			r(e.root, Go) || Zo
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
function ls(e) {
	var t, n;
	let r = s(Io, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(Ro, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function us(e) {
	o(Lo, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function ds(e, t = !0) {
	var n, i;
	let a = r(e.root, Go) || Zo, o = r(e.root, Ko) || Qo, s = ss(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = ls(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), us(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(zo, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: $o,
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
function fs(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Xo);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Xo) && e.hasAttribute("tabindex") && e.setAttribute(Xo, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function ps(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Uo, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), fs(e, t), ds(e, n);
}
function ms(e, t, n) {
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
function hs(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	ps(e, !0), ms(e, !0, t);
}
function gs(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	ps(e, !1), ms(e, !1, t);
}
function _s(e) {
	e.isOpen ? gs(e) : hs(e);
}
function vs(e) {
	e.links.forEach((t) => {
		let n = as(t, e.root), r = s(Vo, t);
		t.classList.toggle(Ho, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function ys(e) {
	var t;
	let n = s(No, e), r = s(Po, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(Fo, r)) == null ? s(Fo, e) : t,
		links: o(Bo, e),
		isOpen: e.classList.contains(Uo),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${es.length + 1}`), r.setAttribute("aria-controls", n.id), vs(i), ps(i, i.isOpen, !1), i.cleanup.push(cs(i)), e.classList.add(Wo);
	let a = (e) => {
		e.preventDefault(), _s(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || gs(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (gs(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		!(t instanceof Element) || !t.closest(Bo) || gs(i);
	}, d = () => {
		i.isHovered = !0, ds(i);
	}, f = () => {
		i.isHovered = !1, ds(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function bs(e = document) {
	if (ts && e === document) return () => void 0;
	e === document && (ts = !0);
	let t = o(Mo, e).map(ys).filter((e) => !!e);
	return es.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Wo, Uo);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(Io, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), us(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), fs(e, !0);
		});
	};
}
//#endregion
//#region node_modules/gsap/utils/matrix.js
var xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks = "transform", As = ks + "Origin", js, Ms = function(e) {
	var t = e.ownerDocument || e;
	for (!(ks in e.style) && ("msTransform" in e.style) && (ks = "msTransform", As = ks + "Origin"); t.parentNode && (t = t.parentNode););
	if (Ss = window, Ds = new Gs(), t) {
		xs = t, Cs = t.documentElement, ws = t.body, Os = xs.createElementNS("http://www.w3.org/2000/svg", "g"), Os.style.transform = "none";
		var n = t.createElement("div"), r = t.createElement("div"), i = t && (t.body || t.firstElementChild);
		i && i.appendChild && (i.appendChild(n), n.appendChild(r), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", js = r.offsetParent !== n, i.removeChild(n));
	}
	return t;
}, Ns = function(e) {
	for (var t, n; e && e !== ws;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
	return t;
}, Ps = [], Fs = [], Is = function() {
	return Ss.pageYOffset || xs.scrollTop || Cs.scrollTop || ws.scrollTop || 0;
}, Ls = function() {
	return Ss.pageXOffset || xs.scrollLeft || Cs.scrollLeft || ws.scrollLeft || 0;
}, Rs = function(e) {
	return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, zs = function e(t) {
	if (Ss.getComputedStyle(t).position === "fixed") return !0;
	if (t = t.parentNode, t && t.nodeType === 1) return e(t);
}, Bs = function e(t, n) {
	if (t.parentNode && (xs || Ms(t))) {
		var r = Rs(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a = r ? n ? "rect" : "g" : "div", o = n === 2 ? 100 : 0, s = n === 3 ? 100 : 0, c = {
			position: "absolute",
			display: "block",
			pointerEvents: "none",
			margin: "0",
			padding: "0"
		}, l = xs.createElementNS ? xs.createElementNS(i.replace(/^https/, "http"), a) : xs.createElement(a);
		return n && (r ? (Es || (Es = e(t)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + s + ")"), l.setAttribute("fill", "transparent"), Es.appendChild(l)) : (Ts || (Ts = e(t), Object.assign(Ts.style, c)), Object.assign(l.style, c, {
			width: "0.1px",
			height: "0.1px",
			top: s + "px",
			left: o + "px"
		}), Ts.appendChild(l))), l;
	}
	throw "Need document and parent.";
}, Vs = function(e) {
	for (var t = new Gs(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
	return t;
}, Hs = function(e) {
	var t = e.getCTM(), n;
	return t || (n = e.style[ks], e.style[ks] = "none", e.appendChild(Os), t = Os.getCTM(), e.removeChild(Os), n ? e.style[ks] = n : e.style.removeProperty(ks.replace(/([A-Z])/g, "-$1").toLowerCase())), t || Ds.clone();
}, Us = function(e, t) {
	var n = Rs(e), r = e === n, i = n ? Ps : Fs, a = e.parentNode, o = a && !n && a.shadowRoot && a.shadowRoot.appendChild ? a.shadowRoot : a, s, c, l, u, d, f;
	if (e === Ss) return e;
	if (i.length || i.push(Bs(e, 1), Bs(e, 2), Bs(e, 3)), s = n ? Es : Ts, n) r ? (l = Hs(e), u = -l.e / l.a, d = -l.f / l.d, c = Ds) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? Vs(c) : c.getItem(0).matrix : Ds, u = c.a * l.x + c.c * l.y, d = c.b * l.x + c.d * l.y) : (c = new Gs(), u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (r || !e.getBoundingClientRect().width ? n : a).appendChild(s), s.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + u) + "," + (c.f + d) + ")");
	else {
		if (u = d = 0, js) for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode;) (Ss.getComputedStyle(l)[ks] + "").length > 4 && (u = l.offsetLeft, d = l.offsetTop, l = 0);
		if (f = Ss.getComputedStyle(e), f.position !== "absolute" && f.position !== "fixed") for (c = e.offsetParent; a && a !== c;) u += a.scrollLeft || 0, d += a.scrollTop || 0, a = a.parentNode;
		l = s.style, l.top = e.offsetTop - d + "px", l.left = e.offsetLeft - u + "px", l[ks] = f[ks], l[As] = f[As], l.position = f.position === "fixed" ? "fixed" : "absolute", o.appendChild(s);
	}
	return s;
}, Ws = function(e, t, n, r, i, a, o) {
	return e.a = t, e.b = n, e.c = r, e.d = i, e.e = a, e.f = o, e;
}, Gs = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a) {
		e === void 0 && (e = 1), t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 1), i === void 0 && (i = 0), a === void 0 && (a = 0), Ws(this, e, t, n, r, i, a);
	}
	var t = e.prototype;
	return t.inverse = function() {
		var e = this.a, t = this.b, n = this.c, r = this.d, i = this.e, a = this.f, o = e * r - t * n || 1e-10;
		return Ws(this, r / o, -t / o, -n / o, e / o, (n * a - r * i) / o, -(e * a - t * i) / o);
	}, t.multiply = function(e) {
		var t = this.a, n = this.b, r = this.c, i = this.d, a = this.e, o = this.f, s = e.a, c = e.c, l = e.b, u = e.d, d = e.e, f = e.f;
		return Ws(this, s * t + l * r, s * n + l * i, c * t + u * r, c * n + u * i, a + d * t + f * r, o + d * n + f * i);
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
function Ks(e, t, n, r) {
	if (!e || !e.parentNode || (xs || Ms(e)).documentElement === e) return new Gs();
	var i = Ns(e), a = Rs(e) ? Ps : Fs, o = Us(e, n), s = a[0].getBoundingClientRect(), c = a[1].getBoundingClientRect(), l = a[2].getBoundingClientRect(), u = o.parentNode, d = !r && zs(e), f = new Gs((c.left - s.left) / 100, (c.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (d ? 0 : Ls()), s.top + (d ? 0 : Is()));
	if (u.removeChild(o), i) for (s = i.length; s--;) c = i[s], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
	return t ? f.inverse() : f;
}
//#endregion
//#region node_modules/gsap/Flip.js
var qs = 1, Js, Ys, Xs, Zs, Qs, $s, ec, tc = function(e, t) {
	return e.actions.forEach(function(e) {
		return e.vars[t] && e.vars[t](e);
	});
}, nc = {}, rc = 180 / Math.PI, ic = Math.PI / 180, ac = {}, oc = {}, sc = {}, cc = function(e) {
	return typeof e == "string" ? e.split(" ").join("").split(",") : e;
}, lc = cc("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), uc = cc("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), dc = function(e) {
	return Js(e)[0] || console.warn("Element not found:", e);
}, fc = function(e) {
	return Math.round(e * 1e4) / 1e4 || 0;
}, pc = function(e, t, n) {
	return e.forEach(function(e) {
		return e.classList[n](t);
	});
}, mc = {
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
}, hc = {
	zIndex: 1,
	simple: 1,
	clearProps: 1,
	scale: 1,
	absolute: 1,
	fitChild: 1,
	getVars: 1,
	props: 1
}, gc = function(e) {
	return e.replace(/([A-Z])/g, "-$1").toLowerCase();
}, _c = function(e, t) {
	var n = {}, r;
	for (r in e) t[r] || (n[r] = e[r]);
	return n;
}, vc = {}, yc = function(e) {
	var t = vc[e] = cc(e);
	return sc[e] = t.concat(uc), t;
}, bc = function(e) {
	var t = e._gsap || Ys.core.getCache(e);
	return t.gmCache === Ys.ticker.frame ? t.gMatrix : (t.gmCache = Ys.ticker.frame, t.gMatrix = Ks(e, !0, !1, !0));
}, xc = function e(t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t.parentNode, a = 1e3 * 10 ** r * (n ? -1 : 1), o = n ? -a * 900 : 0; t;) o += a, t = t.previousSibling;
	return i ? o + e(i, n, r + 1) : o;
}, Sc = function(e, t, n) {
	return e.forEach(function(e) {
		return e.d = xc(n ? e.element : e.t, t);
	}), e.sort(function(e, t) {
		return e.d - t.d;
	}), e;
}, Cc = function(e, t) {
	for (var n = e.element.style, r = e.css = e.css || [], i = t.length, a, o; i--;) a = t[i], o = n[a] || n.getPropertyValue(a), r.push(o ? a : oc[a] || (oc[a] = gc(a)), o);
	return n;
}, wc = function(e) {
	var t = e.css, n = e.element.style, r = 0;
	for (e.cache.uncache = 1; r < t.length; r += 2) t[r + 1] ? n[t[r]] = t[r + 1] : n.removeProperty(t[r]);
	!t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"));
}, Tc = function(e, t) {
	e.forEach(function(e) {
		return e.a.cache.uncache = 1;
	}), t || e.finalStates.forEach(wc);
}, Ec = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), Dc = function(e, t, n) {
	var r = e.element, i = e.width, a = e.height, o = e.uncache, s = e.getProp, c = r.style, l = 4, u, d, f;
	if (typeof t != "object" && (t = e), Xs && n !== 1) return Xs._abs.push({
		t: r,
		b: e,
		a: e,
		sd: 0
	}), Xs._final.push(function() {
		return (e.cache.uncache = 1) && wc(e);
	}), r;
	for (d = s("display") === "none", (!e.isVisible || d) && (d && (Cc(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = i = e.width || t.width, e.height = a = e.height || t.height), Cc(e, Ec), f = window.getComputedStyle(r); l--;) c[Ec[l]] = f[Ec[l]];
	if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = i + "px", c.height = a + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), o) u = new Xc(r);
	else if (u = _c(e, ac), u.position = "absolute", e.simple) {
		var p = r.getBoundingClientRect();
		u.matrix = new Gs(1, 0, 0, 1, p.left + Ls(), p.top + Is());
	} else u.matrix = Ks(r, !1, !1, !0);
	return u = Lc(u, e, !0), e.x = $s(u.x, .01), e.y = $s(u.y, .01), r;
}, Oc = function(e, t) {
	return t !== !0 && (t = Js(t), e = e.filter(function(e) {
		if (t.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1) return !0;
		e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
	})), e;
}, kc = function(e) {
	return Sc(e, !0).forEach(function(e) {
		return (e.a.isVisible || e.b.isVisible) && Dc(e.sd < 0 ? e.b : e.a, e.b, 1);
	});
}, Ac = function(e, t) {
	return t && e.idLookup[jc(t).id] || e.elementStates[0];
}, jc = function(e, t, n, r) {
	return e instanceof Xc ? e : e instanceof Yc ? Ac(e, r) : new Xc(typeof e == "string" ? dc(e) || console.warn(e + " not found") : e, t, n);
}, Mc = function(e, t) {
	for (var n = Ys.getProperty(e.element, null, "native"), r = e.props = {}, i = t.length; i--;) r[t[i]] = (n(t[i]) + "").trim();
	return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
}, Nc = function(e, t) {
	var n = e.style || e, r;
	for (r in t) n[r] = t[r];
}, Pc = function(e) {
	var t = e.getAttribute("data-flip-id");
	return t || e.setAttribute("data-flip-id", t = "auto-" + qs++), t;
}, Fc = function(e) {
	return e.map(function(e) {
		return e.element;
	});
}, Ic = function(e, t, n) {
	return e && t.length && n.add(e(Fc(t), n, new Yc(t, 0, !0)), 0);
}, Lc = function(e, t, n, r, i, a) {
	var o = e.element, s = e.cache, c = e.parent, l = e.x, u = e.y, d = t.width, f = t.height, p = t.scaleX, m = t.scaleY, h = t.rotation, g = t.bounds, _ = a && ec && ec(o, "transform,width,height"), v = e, y = t.matrix, b = y.e, x = y.f, S = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== p || e.scaleY !== m || e.rotation !== h, ee = !S && e.simple && t.simple && !i, C, w, T, E, D, O, k;
	return ee || !c ? (p = m = 1, h = C = 0) : (D = bc(c), O = D.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), h = fc(Math.atan2(O.b, O.a) * rc), C = fc(Math.atan2(O.c, O.d) * rc + h) % 360, p = Math.sqrt(O.a ** 2 + O.b ** 2), m = Math.sqrt(O.c ** 2 + O.d ** 2) * Math.cos(C * ic), i && (i = Js(i)[0], E = Ys.getProperty(i), k = i.getBBox && typeof i.getBBox == "function" && i.getBBox(), v = {
		scaleX: E("scaleX"),
		scaleY: E("scaleY"),
		width: k ? k.width : Math.ceil(parseFloat(E("width", "px"))),
		height: k ? k.height : parseFloat(E("height", "px"))
	}), s.rotation = h + "deg", s.skewX = C + "deg"), n ? (p *= d === v.width || !v.width ? 1 : d / v.width, m *= f === v.height || !v.height ? 1 : f / v.height, s.scaleX = p, s.scaleY = m) : (d = $s(d * p / v.scaleX, 0), f = $s(f * m / v.scaleY, 0), o.style.width = d + "px", o.style.height = f + "px"), r && Nc(o, t.props), ee || !c ? (l += b - e.matrix.e, u += x - e.matrix.f) : S || c !== t.parent ? (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s), O = Ks(i || o, !1, !1, !0), w = D.apply({
		x: O.e,
		y: O.f
	}), T = D.apply({
		x: b,
		y: x
	}), l += T.x - w.x, u += T.y - w.y) : (D.e = D.f = 0, T = D.apply({
		x: b - e.matrix.e,
		y: x - e.matrix.f
	}), l += T.x, u += T.y), l = $s(l, .02), u = $s(u, .02), a && !(a instanceof Xc) ? _ && _.revert() : (s.x = l + "px", s.y = u + "px", s.renderTransform(1, s)), a && (a.x = l, a.y = u, a.rotation = h, a.skewX = C, n ? (a.scaleX = p, a.scaleY = m) : (a.width = d, a.height = f)), a || s;
}, Rc = function(e, t) {
	return e instanceof Yc ? e : new Yc(e, t);
}, zc = function(e, t, n) {
	var r = e.idLookup[n], i = e.alt[n];
	return i.isVisible && (!(t.getElementState(i.element) || i).isVisible || !r.isVisible) ? i : r;
}, Bc = [], Vc = "width,height,overflowX,overflowY".split(","), Hc, Uc = function(e) {
	if (e !== Hc) {
		var t = Qs.style, n = Qs.clientWidth === window.outerWidth, r = Qs.clientHeight === window.outerHeight, i = 4;
		if (e && (n || r)) {
			for (; i--;) Bc[i] = t[Vc[i]];
			n && (t.width = Qs.clientWidth + "px", t.overflowY = "hidden"), r && (t.height = Qs.clientHeight + "px", t.overflowX = "hidden"), Hc = e;
		} else if (Hc) {
			for (; i--;) Bc[i] ? t[Vc[i]] = Bc[i] : t.removeProperty(gc(Vc[i]));
			Hc = e;
		}
	}
}, Wc = function(e, t) {
	for (var n = 0; n < e.length; n += 3) Ys.set(e[n], { clearProps: !0 }), e[n].setAttribute("style", e[n + t]), e[n]._gsap.gmCache = -1;
}, Gc = function(e, t, n, r) {
	e instanceof Yc && t instanceof Yc || console.warn("Not a valid state object."), n = n || {};
	var i = n, a = i.clearProps, o = i.onEnter, s = i.onLeave, c = i.absolute, l = i.absoluteOnLeave, u = i.custom, d = i.delay, f = i.paused, p = i.repeat, m = i.repeatDelay, h = i.yoyo, g = i.toggleClass, _ = i.nested, v = i.zIndex, y = i.scale, b = i.fade, x = i.stagger, S = i.spin, ee = i.prune, C = ("props" in n ? n : e).props, w = _c(n, mc), T = Ys.timeline({
		delay: d,
		paused: f,
		repeat: p,
		repeatDelay: m,
		yoyo: h,
		data: "isFlip"
	}), E = w, D = [], O = [], k = [], A = [], te = S === !0 ? 1 : S || 0, j = typeof S == "function" ? S : function() {
		return te;
	}, M = e.interrupted || t.interrupted, N = T[r === 1 ? "from" : "to"], P, ne, re, ie, F, I, ae, L, oe, se, ce, R, z, B;
	for (ne in t.idLookup) ce = t.alt[ne] ? zc(t, e, ne) : t.idLookup[ne], F = ce.element, se = e.idLookup[ne], e.alt[ne] && F === se.element && (e.alt[ne].isVisible || !ce.isVisible) && (se = e.alt[ne]), se ? (I = {
		t: F,
		b: se,
		a: ce,
		sd: se.element === F ? 0 : ce.isVisible ? 1 : -1
	}, k.push(I), I.sd && (I.sd < 0 && (I.b = ce, I.a = se), M && Cc(I.b, C ? sc[C] : uc), b && k.push(I.swap = {
		t: se.element,
		b: I.b,
		a: I.a,
		sd: -I.sd,
		swap: I
	})), F._flip = se.element._flip = Xs ? Xs.timeline : T) : ce.isVisible && (k.push({
		t: F,
		b: _c(ce, { isVisible: 1 }),
		a: ce,
		sd: 0,
		entering: 1
	}), F._flip = Xs ? Xs.timeline : T);
	if (C && (vc[C] || yc(C)).forEach(function(e) {
		return w[e] = function(t) {
			return k[t].a.props[e];
		};
	}), k.finalStates = oe = [], R = function() {
		Sc(k), Uc(!0);
		var t = [];
		for (ie = 0; ie < k.length; ie++) I = k[ie], z = I.a, B = I.b, ee && !z.isDifferent(B) && !I.entering ? k.splice(ie--, 1) : (F = I.t, _ && !(I.sd < 0) && ie && (z = I.a = z.clone({ matrix: Ks(F, !1, !1, !0) })), B.isVisible && z.isVisible ? (I.sd < 0 ? (_ && Wc(t, 1), ae = new Xc(F, C, e.simple), Lc(ae, z, y, 0, 0, ae), ae.matrix = Ks(F, !1, !1, !0), ae.bounds = F.getBoundingClientRect(), ae.css = I.b.css, I.a = z = ae, b && (F.style.opacity = M ? B.opacity : z.opacity), x && A.push(F), _ && (Wc(t, 2), t.push(F, F.getAttribute("style")))) : I.sd > 0 && b && (F.style.opacity = M ? z.opacity - B.opacity : "0"), Lc(z, B, y, C), _ && I.sd < 0 && t.push(F.getAttribute("style"))) : B.isVisible !== z.isVisible && (B.isVisible ? z.isVisible || (B.css = z.css, O.push(B), k.splice(ie--, 1), c && _ && Lc(z, B, y, C)) : (z.isVisible && D.push(z), k.splice(ie--, 1))), y || (F.style.maxWidth = Math.max(z.width, B.width) + "px", F.style.maxHeight = Math.max(z.height, B.height) + "px", F.style.minWidth = Math.min(z.width, B.width) + "px", F.style.minHeight = Math.min(z.height, B.height) + "px"), _ && g && F.classList.add(g)), oe.push(z);
		var r;
		if (g && (r = oe.map(function(e) {
			return e.element;
		}), _ && r.forEach(function(e) {
			return e.classList.remove(g);
		})), Uc(!1), y ? (w.scaleX = function(e) {
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
			return k[e].a.rotation + (S ? j(e, L[e], L) * 360 : 0);
		}, w.skewX = function(e) {
			return k[e].a.skewX;
		}, L = k.map(function(e) {
			return e.t;
		}), (v || v === 0) && (w.modifiers = { zIndex: function() {
			return v;
		} }, w.zIndex = v, w.immediateRender = n.immediateRender !== !1), b && (w.opacity = function(e) {
			return k[e].sd < 0 ? 0 : k[e].sd > 0 ? k[e].a.opacity : "+=0";
		}), A.length) {
			x = Ys.utils.distribute(x);
			var i = L.slice(A.length);
			w.stagger = function(e, t) {
				return x(~A.indexOf(t) ? L.indexOf(k[e].swap.t) : e, t, i);
			};
		}
		if (lc.forEach(function(e) {
			return n[e] && T.eventCallback(e, n[e], n[e + "Params"]);
		}), u && L.length) for (ne in E = _c(w, mc), "scale" in u && (u.scaleX = u.scaleY = u.scale, delete u.scale), u) P = _c(u[ne], hc), P[ne] = w[ne], !("duration" in P) && "duration" in w && (P.duration = w.duration), P.stagger = w.stagger, N.call(T, L, P, 0), delete E[ne];
		(L.length || O.length || D.length) && (g && T.add(function() {
			return pc(r, g, T._zTime < 0 ? "remove" : "add");
		}, 0) && !f && pc(r, g, "add"), L.length && N.call(T, L, E, 0)), Ic(o, D, T), Ic(s, O, T);
		var l = Xs && Xs.timeline;
		l && (l.add(T, 0), Xs._final.push(function() {
			return Tc(k, !a);
		})), re = T.duration(), T.call(function() {
			var e = T.time() >= re;
			e && !l && Tc(k, !a), g && pc(r, g, e ? "remove" : "add");
		});
	}, l && (c = k.filter(function(e) {
		return !e.sd && !e.a.isVisible && e.b.isVisible;
	}).map(function(e) {
		return e.a.element;
	})), Xs) {
		var V;
		c && (V = Xs._abs).push.apply(V, Oc(k, c)), Xs._run.push(R);
	} else c && kc(Oc(k, c)), R();
	var le = Xs ? Xs.timeline : T;
	return le.revert = function() {
		return qc(le, 1, 1);
	}, le;
}, Kc = function e(t) {
	t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(e);
}, qc = function(e, t, n) {
	if (e && e.progress() < 1 && (!e.paused() || n)) return t && (Kc(e), t < 2 && e.progress(1), e.kill()), !0;
}, Jc = function(e) {
	for (var t = e.idLookup = {}, n = e.alt = {}, r = e.elementStates, i = r.length, a; i--;) a = r[i], t[a.id] ? n[a.id] = a : t[a.id] = a;
}, Yc = /*#__PURE__*/ function() {
	function e(e, t, n) {
		if (this.props = t && t.props, this.simple = !!(t && t.simple), n) this.targets = Fc(e), this.elementStates = e, Jc(this);
		else {
			this.targets = Js(e);
			var r = t && (t.kill === !1 || t.batch && !t.kill);
			Xs && !r && Xs._kill.push(this), this.update(r || !!Xs);
		}
	}
	var t = e.prototype;
	return t.update = function(e) {
		var t = this;
		return this.elementStates = this.targets.map(function(e) {
			return new Xc(e, t.props, t.simple);
		}), Jc(this), this.interrupt(e), this.recordInlineStyles(), this;
	}, t.clear = function() {
		return this.targets.length = this.elementStates.length = 0, Jc(this), this;
	}, t.fit = function(e, t, n) {
		for (var r = Sc(this.elementStates.slice(0), !1, !0), i = (e || this).idLookup, a = 0, o, s; a < r.length; a++) o = r[a], n && (o.matrix = Ks(o.element, !1, !1, !0)), s = i[o.id], s && Lc(o, s, t, !0, 0, o), o.matrix = Ks(o.element, !1, !1, !0);
		return this;
	}, t.getProperty = function(e, t) {
		var n = this.getElementState(e) || ac;
		return (t in n ? n : n.props || ac)[t];
	}, t.add = function(e) {
		for (var t = e.targets.length, n = this.idLookup, r = this.alt, i, a, o; t--;) a = e.elementStates[t], o = n[a.id], o && (a.element === o.element || r[a.id] && r[a.id].element === a.element) ? (i = this.elementStates.indexOf(a.element === o.element ? o : r[a.id]), this.targets.splice(i, 1, e.targets[t]), this.elementStates.splice(i, 1, a)) : (this.targets.push(e.targets[t]), this.elementStates.push(a));
		return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), Jc(this), this;
	}, t.compare = function(e) {
		var t = e.idLookup, n = this.idLookup, r = [], i = [], a = [], o = [], s = [], c = e.alt, l = this.alt, u = function(e, t, n) {
			return (e.isVisible === t.isVisible ? e.isVisible ? i : r : e.isVisible ? a : o).push(n) && s.push(n);
		}, d = function(e, t, n) {
			return s.indexOf(n) < 0 && u(e, t, n);
		}, f, p, m, h, g, _, v, y;
		for (m in t) g = c[m], _ = l[m], f = g ? zc(e, this, m) : t[m], h = f.element, p = n[m], _ ? (y = p.isVisible || !_.isVisible && h === p.element ? p : _, v = g && !f.isVisible && !g.isVisible && y.element === g.element ? g : f, v.isVisible && y.isVisible && v.element !== y.element ? ((v.isDifferent(y) ? i : r).push(v.element, y.element), s.push(v.element, y.element)) : u(v, y, v.element), g && v.element === g.element && (g = t[m]), d(v.element !== p.element && g ? g : v, p, p.element), d(g && g.element === _.element ? g : v, _, _.element), g && d(g, _.element === g.element ? _ : p, g.element)) : (p ? p.isDifferent(f) ? u(f, p, h) : r.push(h) : a.push(h), g && d(g, p, g.element));
		for (m in n) t[m] || (o.push(n[m].element), l[m] && o.push(l[m].element));
		return {
			changed: i,
			unchanged: r,
			enter: a,
			leave: o
		};
	}, t.recordInlineStyles = function() {
		for (var e = sc[this.props] || uc, t = this.elementStates.length; t--;) Cc(this.elementStates[t], e);
	}, t.interrupt = function(e) {
		var t = this, n = [];
		this.targets.forEach(function(r) {
			var i = r._flip, a = qc(i, +!e);
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
		return this.elementStates[this.targets.indexOf(dc(e))];
	}, t.makeAbsolute = function() {
		return Sc(this.elementStates.slice(0), !0, !0).map(Dc);
	}, e;
}(), Xc = /*#__PURE__*/ function() {
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
		var n = this, r = n.element, i = Ys.getProperty(r), a = Ys.core.getCache(r), o = r.getBoundingClientRect(), s = r.getBBox && typeof r.getBBox == "function" && r.nodeName.toLowerCase() !== "svg" && r.getBBox(), c = t ? new Gs(1, 0, 0, 1, o.left + Ls(), o.top + Is()) : Ks(r, !1, !1, !0);
		a.uncache = 1, n.getProp = i, n.element = r, n.id = Pc(r), n.matrix = c, n.cache = a, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = i("display"), n.position = i("position"), n.parent = r.parentNode, n.x = i("x", "px"), n.y = i("y", "px"), n.scaleX = a.scaleX, n.scaleY = a.scaleY, n.rotation = i("rotation"), n.skewX = i("skewX"), n.opacity = i("opacity"), n.width = s ? s.width : $s(i("width", "px"), .04), n.height = s ? s.height : $s(i("height", "px"), .04), e && Mc(n, vc[e] || yc(e)), n.ctm = r.getCTM && r.nodeName.toLowerCase() === "svg" && Hs(r).inverse(), n.simple = t || fc(c.a) === 1 && !fc(c.b) && !fc(c.c) && fc(c.d) === 1, n.uncache = 0;
	}, e;
}(), Zc = /*#__PURE__*/ function() {
	function e(e, t) {
		this.vars = e, this.batch = t, this.states = [], this.timeline = t.timeline;
	}
	var t = e.prototype;
	return t.getStateById = function(e) {
		for (var t = this.states.length; t--;) if (this.states[t].idLookup[e]) return this.states[t];
	}, t.kill = function() {
		this.batch.remove(this);
	}, e;
}(), Qc = /*#__PURE__*/ function() {
	function e(e) {
		this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Yc(), this.timeline = Ys.timeline();
	}
	var t = e.prototype;
	return t.add = function(e) {
		var t = this.actions.filter(function(t) {
			return t.vars === e;
		});
		return t.length ? t[0] : (t = new Zc(typeof e == "function" ? { animate: e } : e, this), this.actions.push(t), t);
	}, t.remove = function(e) {
		var t = this.actions.indexOf(e);
		return t >= 0 && this.actions.splice(t, 1), this;
	}, t.getState = function(e) {
		var t = this, n = Xs, r = Zs;
		return Xs = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
			n.vars.getState && (n.states.length = 0, Zs = n, n.state = n.vars.getState(n)), e && n.states.forEach(function(e) {
				return t.state.add(e);
			});
		}), Zs = r, Xs = n, this.killConflicts(), this;
	}, t.animate = function() {
		var e = this, t = Xs, n = this.timeline, r = this.actions.length, i, a;
		for (Xs = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(e) {
			e.vars.animate && e.vars.animate(e);
			var t = e.vars.onEnter, n = e.vars.onLeave, r = e.targets, i, a;
			r && r.length && (t || n) && (i = new Yc(), e.states.forEach(function(e) {
				return i.add(e);
			}), a = i.compare($c.getState(r)), a.enter.length && t && t(a.enter), a.leave.length && n && n(a.leave));
		}), kc(this._abs), this._run.forEach(function(e) {
			return e();
		}), a = n.duration(), i = this._final.slice(0), n.add(function() {
			a <= n.time() && (i.forEach(function(e) {
				return e();
			}), tc(e, "onComplete"));
		}), Xs = t; r--;) this.actions[r].vars.once && this.actions[r].kill();
		return tc(this, "onStart"), n.restart(), this;
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
		return this !== Xs && (e || this.getState(t), this.loadState(function() {
			n._killed || (n.setState(), n.animate());
		})), this;
	}, t.clear = function(e) {
		this.state.clear(), e || (this.actions.length = 0);
	}, t.getStateById = function(e) {
		for (var t = this.actions.length, n; t--;) if (n = this.actions[t].getStateById(e), n) return n;
		return this.state.idLookup[e] && this.state;
	}, t.kill = function() {
		this._killed = 1, this.clear(), delete nc[this.id];
	}, e;
}(), $c = /*#__PURE__*/ function() {
	function e() {}
	return e.getState = function(t, n) {
		var r = Rc(t, n);
		return Zs && Zs.states.push(r), n && n.batch && e.batch(n.batch).state.add(r), r;
	}, e.from = function(e, t) {
		return t = t || {}, "clearProps" in t || (t.clearProps = !0), Gc(e, Rc(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, -1);
	}, e.to = function(e, t) {
		return Gc(e, Rc(t.targets || e.targets, {
			props: t.props || e.props,
			simple: t.simple,
			kill: !!t.kill
		}), t, 1);
	}, e.fromTo = function(e, t, n) {
		return Gc(e, t, n);
	}, e.fit = function(e, t, n) {
		var r = n ? _c(n, hc) : {}, i = n || r, a = i.absolute, o = i.scale, s = i.getVars, c = i.props, l = i.runBackwards, u = i.onComplete, d = i.simple, f = n && n.fitChild && dc(n.fitChild), p = jc(t, c, d, e), m = jc(e, 0, d, p), h = c ? sc[c] : uc, g = Ys.context();
		return c && Nc(r, p.props), Cc(m, h), l && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
			wc(m), u && u.apply(this, arguments);
		}), a && Dc(m, p), r = Lc(m, p, o || f, !r.duration && c, f, r.duration || s ? r : 0), typeof n == "object" && "zIndex" in n && (r.zIndex = n.zIndex), g && !s && g.add(function() {
			return function() {
				return wc(m);
			};
		}), s ? r : r.duration ? Ys.to(m.element, r) : null;
	}, e.makeAbsolute = function(e, t) {
		return (e instanceof Yc ? e : new Yc(e, t)).makeAbsolute();
	}, e.batch = function(e) {
		return e || (e = "default"), nc[e] || (nc[e] = new Qc(e));
	}, e.killFlipsOf = function(e, t) {
		(e instanceof Yc ? e.targets : Js(e)).forEach(function(e) {
			return e && qc(e._flip, t === !1 ? 2 : 1);
		});
	}, e.isFlipping = function(t) {
		var n = e.getByTarget(t);
		return !!n && n.isActive();
	}, e.getByTarget = function(e) {
		return (dc(e) || ac)._flip;
	}, e.getElementState = function(e, t) {
		return new Xc(dc(e), t);
	}, e.convertCoordinates = function(e, t, n) {
		var r = Ks(t, !0, !0).multiply(Ks(e));
		return n ? r.apply(n) : r;
	}, e.register = function(e) {
		if (Qs = typeof document < "u" && document.body, Qs) {
			Ys = e, Ms(Qs), Js = Ys.utils.toArray, ec = Ys.core.getStyleSaver;
			var t = Ys.utils.snap(.1);
			$s = function(e, n) {
				return t(parseFloat(e) + n);
			};
		}
	}, e;
}();
//#endregion
//#region src/modules/work-flip.ts
$c.version = "3.15.0", typeof window < "u" && window.gsap && window.gsap.registerPlugin($c), b.registerPlugin($c);
var el = {
	leave: .26,
	flip: .86,
	imageFade: .24,
	contentFade: .5,
	contentSpread: .3,
	ease: "power3.inOut"
}, tl = 2600, nl = "work-flip-ghost", rl = "[data-work-flip-ghost]", il = "a[data-work-flip]", al = ".cms-works__image-wrap", ol = "img", sl = "[data-work-flip-back], [data-back-button]", cl = "[data-work-flip-target]", ll = "data-work-flip-id", ul = "site:works-ready", dl = "site:work-detail-ready", fl = [
	"SCRIPT",
	"STYLE",
	"LINK",
	"NOSCRIPT",
	"TEMPLATE",
	"META"
], pl = "data-work-flip-faded", ml = "data-work-flip-hidden", hl = !1, gl = !1, _l = 0;
function vl(e) {
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		left: t.left,
		width: t.width,
		height: t.height
	};
}
function yl(e) {
	return e instanceof HTMLElement && !fl.includes(e.tagName);
}
function bl(e, t) {
	let n = document.createElement("div"), r = document.createElement("img");
	return n.className = nl, n.setAttribute("data-work-flip-ghost", ""), n.setAttribute("aria-hidden", "true"), n.style.top = `${e.top}px`, n.style.left = `${e.left}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`, r.src = t, r.alt = "", r.decoding = "sync", n.append(r), document.body.append(n), n;
}
function xl() {
	return document.querySelector(rl);
}
function Sl() {
	Array.from(document.querySelectorAll(rl)).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Cl() {
	document.documentElement.classList.remove(T), Sl(), ee();
}
function wl(e) {
	var t;
	return e ? (t = Array.from(document.querySelectorAll(`[${ll}]`)).find((t) => t.getAttribute(ll) === e)) == null ? null : t : null;
}
function Tl(e, t) {
	let n = new Set(t), r = [], i = e;
	for (; i && i !== document.body && i.parentElement;) {
		var a, o;
		let e = i;
		Array.from((a = (o = e.parentElement) == null ? void 0 : o.children) == null ? [] : a).forEach((t) => {
			t === e || n.has(t) || !yl(t) || r.push(t);
		}), i = e.parentElement;
	}
	return r;
}
function El(e) {
	return Array.from(document.body.children).filter((t) => t !== e && yl(t));
}
function Dl(e) {
	return e.forEach((e) => e.setAttribute(pl, "")), e;
}
function Ol(e) {
	b.set(e, { clearProps: "opacity,visibility" }), e.forEach((e) => e.removeAttribute(pl));
}
function kl(e) {
	return e.width > 0 && e.height > 0;
}
function Al(e) {
	return e.height > 0 ? e.width / e.height : 0;
}
function jl(e, t) {
	e.complete && e.naturalWidth > 0 || !t.ratio || (e.style.aspectRatio = String(t.ratio), e.setAttribute("data-work-flip-ratio", ""));
}
function Ml(e) {
	e.hasAttribute("data-work-flip-ratio") && (e.style.aspectRatio = "", e.removeAttribute("data-work-flip-ratio"));
}
function Nl(e, t) {
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
function Pl() {
	gl = !1, Sl();
	let e = Array.from(document.querySelectorAll(`[${pl}]`));
	b.killTweensOf(e), Ol(e), Array.from(document.querySelectorAll(`[${ml}]`)).forEach((e) => {
		e.style.visibility = "", e.removeAttribute(ml);
	}), document.documentElement.classList.remove(T);
}
function Fl(e, t, n) {
	let r = vl(e), i = bl(r, t.currentSrc || t.src), a = i.firstElementChild, o = t.getBoundingClientRect().width / Math.max(r.width, 1), s = !1, c = () => {
		s || (s = !0, n());
	}, l = b.timeline({ onComplete: c });
	window.setTimeout(c, el.leave * 1e3 + 400), gl = !0, e.style.visibility = "hidden", e.setAttribute(ml, ""), b.set(a, {
		scale: o > 1.002 ? o : 1,
		transformOrigin: "50% 50%"
	}), l.to(Dl(El(i)), {
		autoAlpha: 0,
		duration: el.leave,
		ease: "power2.out"
	}, 0), o > 1.002 && l.to(a, {
		scale: 1,
		duration: el.leave,
		ease: "power2.out"
	}, 0);
}
function Il(e, t, n) {
	var r;
	let i = document.documentElement, a = i.classList.contains("is-work-flip-pending") ? Dl(Tl(t, [e])) : [], o = n.direction === "back" ? (r = t.closest(al)) == null ? t : r : t, s = !1, c = 0, l = (n) => {
		if (Ml(t), b.killTweensOf(e), b.set(t, {
			autoAlpha: 1,
			clearProps: "opacity,visibility"
		}), n) {
			e.remove();
			return;
		}
		b.to(e, {
			autoAlpha: 0,
			duration: el.imageFade,
			ease: "power1.out",
			onComplete: () => e.remove()
		});
	}, u = (e) => {
		s || (s = !0, window.clearTimeout(c), e ? (l(!0), a.length > 0 && (b.set(a, { autoAlpha: 1 }), Ol(a))) : (Nl(t, () => l(!1)), a.length > 0 && b.to(a, {
			autoAlpha: 1,
			duration: el.contentFade,
			ease: "power2.out",
			stagger: { amount: el.contentSpread },
			onComplete: () => Ol(a)
		})), ee());
	};
	a.length > 0 && b.set(a, { autoAlpha: 0 }), b.set(t, { autoAlpha: 0 }), i.classList.remove(T), $c.fit(e, o, {
		duration: el.flip,
		ease: el.ease,
		onComplete: () => u(!1)
	}), c = window.setTimeout(() => u(!0), (el.flip + 2) * 1e3);
}
function Ll(e) {
	var t;
	let n = (t = xl()) == null ? bl(e.rect, e.src) : t, r = e.direction === "forward" ? dl : ul, i = !1, a = 0, o = null, s = () => {
		o == null || o.disconnect(), o = null, document.removeEventListener(r, u);
	}, c = () => {
		i || (i = !0, s(), Cl());
	}, l = () => {
		var t;
		if (e.direction === "forward") {
			let e = document.querySelector(cl);
			return e instanceof HTMLImageElement ? e : null;
		}
		let n = wl(e.workId), r = (t = n == null ? void 0 : n.querySelector(ol)) == null ? null : t;
		return r instanceof HTMLImageElement ? r : null;
	};
	function u() {
		if (i) return;
		let t = l();
		if (!t) return;
		i = !0, s(), jl(t, e);
		let r = !1, o = () => {
			r || (r = !0, window.clearTimeout(a), Il(n, t, e));
		};
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(o);
		}), window.setTimeout(o, 300);
	}
	a = window.setTimeout(c, tl), document.addEventListener(r, u), o = new MutationObserver(u), o.observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), u();
}
function Rl(e) {
	return e.href === window.location.href ? !1 : e.direction === "forward" ? !0 : e.auto ? w() : w() || document.referrer === e.href;
}
function zl(e, t) {
	var n, r;
	let i = h(t), a = t.querySelector(al), o = (n = a == null ? void 0 : a.querySelector(ol)) == null ? null : n;
	if (!i || !a || !(o instanceof HTMLImageElement)) return;
	e.preventDefault();
	let s = vl(a);
	if (!kl(s)) {
		window.location.href = i.href;
		return;
	}
	C({
		direction: "forward",
		workId: (r = t.getAttribute(ll)) == null ? "" : r,
		src: o.currentSrc || o.src,
		href: window.location.href,
		rect: s,
		ratio: Al(s),
		auto: !1,
		ts: Date.now()
	}), Fl(a, o, () => {
		window.location.href = i.href;
	});
}
function Bl(e, t) {
	var n;
	let r = document.querySelector(cl), i = t.getAttribute("href") || "", a = () => {
		if (t.hasAttribute("data-back-button") && window.history.length > 1) {
			window.history.back();
			return;
		}
		window.location.href = i || "/";
	};
	if (!(r instanceof HTMLImageElement)) return;
	e.preventDefault(), e.stopPropagation();
	let o = vl(r);
	if (!kl(o)) {
		a();
		return;
	}
	C({
		direction: "back",
		workId: (n = r.getAttribute(ll)) == null ? "" : n,
		src: r.currentSrc || r.src,
		href: window.location.href,
		rect: o,
		ratio: Al(o),
		auto: !1,
		ts: Date.now()
	}), Fl(r, r, a);
}
function Vl(e) {
	return kl(e) && e.top < window.innerHeight && e.top + e.height > 0;
}
function Hl() {
	var e;
	let t = document.querySelector(cl);
	if (gl || Date.now() - _l < 1500 || !(t instanceof HTMLImageElement)) return;
	let n = vl(t);
	Vl(n) && C({
		direction: "back",
		workId: (e = t.getAttribute(ll)) == null ? "" : e,
		src: t.currentSrc || t.src,
		href: window.location.href,
		rect: n,
		ratio: Al(n),
		auto: !0,
		ts: Date.now()
	});
}
function Ul() {
	if (hl) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Ul, { once: !0 });
		return;
	}
	if (hl = !0, u()) {
		Cl();
		return;
	}
	let e = S();
	e && Rl(e) ? Ll(e) : Cl(), document.addEventListener("click", (e) => {
		let t = e.target;
		if (gl) {
			e.preventDefault();
			return;
		}
		if (!(t instanceof Element) || e.defaultPrevented || l(e)) return;
		let n = t.closest(sl);
		if (n) {
			Bl(e, n);
			return;
		}
		t.closest("a[href]") && (_l = Date.now());
		let r = t.closest(il);
		r && zl(e, r);
	}, !0), window.addEventListener("pagehide", () => {
		Hl(), Pl();
	}), window.addEventListener("pageshow", (e) => {
		if (!e.persisted) return;
		Pl();
		let t = S();
		if (t && t.direction === "back" && t.href !== window.location.href && wl(t.workId)) {
			document.documentElement.classList.add(T), Ll(t);
			return;
		}
		ee();
	});
}
//#endregion
//#region src/main.ts
var Wl = !1;
Ul(), po(), li();
function Gl() {
	if (Wl) return;
	Wl = !0;
	let e = O();
	Ga({ i18n: e }), ta({ i18n: e }), jo(), bs(), _(), window.SiteInteractions = {
		openModal: Va,
		openContentModal: Ba,
		closeModal: Ha,
		openLightbox: Zi,
		closeLightbox: Qi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Gl, { once: !0 }) : Gl();
//#endregion

//# sourceMappingURL=site-interactions.js.map