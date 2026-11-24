import { n as e, t } from "./site-interactions-DTXrvFAf.js";
import { _ as n, a as r, b as i, c as a, d as o, f as s, g as c, h as l, i as u, l as d, m as f, n as p, o as m, p as h, r as g, s as _, t as v, u as y, v as b, y as x } from "./site-interactions-Cou7uu3t.js";
import { t as S } from "./site-interactions-BxJ-FVg3.js";
import { t as C } from "./site-interactions-CKkKncuX.js";
import { a as w, i as T, n as E, r as D, t as O } from "./site-interactions-HQKELVCL.js";
//#region src/modules/i18n.ts
var ee = {};
function k(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (s(t) && s(n) && (e[t.trim()] = n.trim()), e), {});
}
function A(e = document) {
	var t, n;
	ee = {};
	let r = l("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (ee = k(b(i))), {
		get values() {
			return { ...ee };
		},
		t: j
	};
}
function j(e, t) {
	let n = e.trim(), r = ee[n];
	return s(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var te = ".site-menu__languages", M = ".site-menu__language", ne = "site-menu__language-indicator";
function re(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function ie(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function ae(e) {
	let t = Array.from(e.querySelectorAll(M)), n = re(t);
	if (!n || e.querySelector(`.${ne}`)) return;
	let r = document.createElement("span");
	r.className = ne, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => ie(e, r, t), a = () => {
		let e = t.find((e) => e.matches(":hover, :focus-visible"));
		i(e == null ? n : e);
	};
	a(), requestAnimationFrame(() => e.classList.add("has-language-indicator")), t.forEach((t) => {
		t.addEventListener("mouseenter", () => i(t)), t.addEventListener("focus", () => i(t)), t.addEventListener("blur", (t) => {
			let n = t.relatedTarget;
			(!(n instanceof Node) || !e.contains(n)) && a();
		});
	}), e.addEventListener("mouseleave", a), window.addEventListener("resize", a, { passive: !0 });
}
function oe() {
	document.querySelectorAll(te).forEach(ae);
}
//#endregion
//#region node_modules/gsap/Observer.js
function se(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function N(e, t, n) {
	return t && se(e.prototype, t), n && se(e, n), e;
}
var P, F, ce, le, I, L, ue, de, fe, pe, me, R, he, z = function() {
	return P || typeof window < "u" && (P = window.gsap) && P.registerPlugin && P;
}, ge = 1, _e = [], B = [], V = [], ve = Date.now, H = function(e, t) {
	return t;
}, ye = function() {
	var e = fe.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, B), r.push.apply(r, V), B = n, V = r, H = function(e, n) {
		return t[e](n);
	};
}, be = function(e, t) {
	return ~V.indexOf(e) && V[V.indexOf(e) + 1][t];
}, xe = function(e) {
	return !!~pe.indexOf(e);
}, U = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, Se = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, W = "scrollLeft", Ce = "scrollTop", we = function() {
	return me && me.isPressed || B.cache++;
}, Te = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			ge && (ce.history.scrollRestoration = "manual");
			var i = me && me.isPressed;
			r = n.v = Math.round(r) || (me && me.iOS ? 1 : 0), e(r), n.cacheID = B.cache, i && H("ss", r);
		} else (t || B.cache !== n.cacheID || H("ref")) && (n.cacheID = B.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Ee = {
	s: W,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: Te(function(e) {
		return arguments.length ? ce.scrollTo(e, De.sc()) : ce.pageXOffset || le[W] || I[W] || L[W] || 0;
	})
}, De = {
	s: Ce,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Ee,
	sc: Te(function(e) {
		return arguments.length ? ce.scrollTo(Ee.sc(), e) : ce.pageYOffset || le[Ce] || I[Ce] || L[Ce] || 0;
	})
}, Oe = function(e, t) {
	return (t && t._ctx && t._ctx.selector || P.utils.toArray)(e)[0] || (typeof e == "string" && P.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, ke = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Ae = function(e, t) {
	var n = t.s, r = t.sc;
	xe(e) && (e = le.scrollingElement || I);
	var i = B.indexOf(e), a = r === De.sc ? 1 : 2;
	!~i && (i = B.push(e) - 1), B[i + a] || U(e, "scroll", we);
	var o = B[i + a], s = o || (B[i + a] = Te(be(e, n), !0) || (xe(e) ? r : Te(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = P.getProperty(e, "scrollBehavior") === "smooth"), s;
}, je = function(e, t, n) {
	var r = e, i = e, a = ve(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = ve();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = ve();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Me = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Ne = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Pe = function() {
	fe = P.core.globals().ScrollTrigger, fe && fe.core && ye();
}, G = function(e) {
	return P = e || z(), !F && P && typeof document < "u" && document.body && (ce = window, le = document, I = le.documentElement, L = le.body, pe = [
		ce,
		le,
		I,
		L
	], P.utils.clamp, he = P.core.context || function() {}, de = "onpointerenter" in L ? "pointer" : "mouse", ue = K.isTouch = ce.matchMedia && ce.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ce || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, R = K.eventTypes = ("ontouchstart" in I ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in I ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return ge = 0;
	}, 500), F = 1), fe || Pe(), F;
};
Ee.op = De, B.cache = 0;
var K = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		F || G(P) || console.warn("Please gsap.registerPlugin(Observer)"), fe || Pe();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, ee = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, j = e.onGestureStart, te = e.onGestureEnd, M = e.onWheel, ne = e.onEnable, re = e.onDisable, ie = e.onClick, ae = e.scrollSpeed, oe = e.capture, se = e.allowClicks, N = e.lockAxis, pe = e.onLockAxis;
		this.target = i = Oe(i) || I, this.vars = e, u && (u = P.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ae = ae || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(ce.getComputedStyle(L).lineHeight) || 22);
		var z, ge, B, V, H, ye, be, W = this, Ce = 0, Te = 0, K = e.passive || !s && e.passive !== !1, q = Ae(i, Ee), Fe = Ae(i, De), J = q(), Y = Fe(), Ie = ~r.indexOf("touch") && !~r.indexOf("pointer") && R[0] === "pointerdown", X = xe(i), Z = i.ownerDocument || le, Le = [
			0,
			0,
			0
		], Re = [
			0,
			0,
			0
		], ze = 0, Be = function() {
			return ze = ve();
		}, Ve = function(e, t) {
			return (W.event = e) && u && ke(e.target, u) || t && Ie && e.pointerType !== "touch" || k && k(e, t);
		}, He = function() {
			W._vx.reset(), W._vy.reset(), ge.pause(), c && c(W);
		}, Ue = function() {
			var e = W.deltaX = Ne(Le), n = W.deltaY = Ne(Re), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(W, e, n, Le, Re), r && (v && W.deltaX > 0 && v(W), y && W.deltaX < 0 && y(W), S && S(W), T && W.deltaX < 0 != Ce < 0 && T(W), Ce = W.deltaX, Le[0] = Le[1] = Le[2] = 0), i && (x && W.deltaY > 0 && x(W), b && W.deltaY < 0 && b(W), C && C(W), E && W.deltaY < 0 != Te < 0 && E(W), Te = W.deltaY, Re[0] = Re[1] = Re[2] = 0), (V || B) && (ee && ee(W), B && (p && B === 1 && p(W), h && h(W), B = 0), V = !1), ye && !(ye = !1) && pe && pe(W), H && (M(W), H = !1), z = 0;
		}, We = function(e, t, n) {
			Le[n] += e, Re[n] += t, W._vx.update(e), W._vy.update(t), o ? z || (z = requestAnimationFrame(Ue)) : Ue();
		}, Ge = function(e, t) {
			N && !be && (W.axis = be = Math.abs(e) > Math.abs(t) ? "x" : "y", ye = !0), be !== "y" && (Le[2] += e, W._vx.update(e, !0)), be !== "x" && (Re[2] += t, W._vy.update(t, !0)), o ? z || (z = requestAnimationFrame(Ue)) : Ue();
		}, Ke = function(e) {
			if (!Ve(e, 1)) {
				e = Me(e, s);
				var t = e.clientX, r = e.clientY, i = t - W.x, a = r - W.y, o = W.isDragging;
				W.x = t, W.y = r, (o || (i || a) && (Math.abs(W.startX - t) >= n || Math.abs(W.startY - r) >= n)) && (B || (B = o ? 2 : 1), o || (W.isDragging = !0), Ge(i, a));
			}
		}, qe = W.onPress = function(e) {
			Ve(e, 1) || e && e.button || (W.axis = be = null, ge.pause(), W.isPressed = !0, e = Me(e), Ce = Te = 0, W.startX = W.x = e.clientX, W.startY = W.y = e.clientY, W._vx.reset(), W._vy.reset(), U(A ? i : Z, R[1], Ke, K, !0), W.deltaX = W.deltaY = 0, g && g(W));
		}, Je = W.onRelease = function(e) {
			if (!Ve(e, 1)) {
				Se(A ? i : Z, R[1], Ke, !0);
				var t = !isNaN(W.y - W.startY), n = W.isDragging, r = n && (Math.abs(W.x - W.startX) > 3 || Math.abs(W.y - W.startY) > 3), a = Me(e);
				!r && t && (W._vx.reset(), W._vy.reset(), s && se && P.delayedCall(.08, function() {
					if (ve() - ze > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (Z.createEvent) {
							var t = Z.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, ce, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), W.isDragging = W.isGesturing = W.isPressed = !1, c && n && !A && ge.restart(!0), B && Ue(), m && n && m(W), _ && _(W, r);
			}
		}, Ye = function(e) {
			return e.touches && e.touches.length > 1 && (W.isGesturing = !0) && j(e, W.isDragging);
		}, Xe = function() {
			return (W.isGesturing = !1) || te(W);
		}, Ze = function(e) {
			if (!Ve(e)) {
				var t = q(), n = Fe();
				We((t - J) * ae, (n - Y) * ae, 1), J = t, Y = n, c && ge.restart(!0);
			}
		}, Qe = function(e) {
			if (!Ve(e)) {
				e = Me(e, s), M && (H = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? ce.innerHeight : 1) * d;
				We(e.deltaX * t, e.deltaY * t, 0), c && !A && ge.restart(!0);
			}
		}, $e = function(e) {
			if (!Ve(e)) {
				var t = e.clientX, n = e.clientY, r = t - W.x, i = n - W.y;
				W.x = t, W.y = n, V = !0, c && ge.restart(!0), (r || i) && Ge(r, i);
			}
		}, et = function(e) {
			W.event = e, D(W);
		}, tt = function(e) {
			W.event = e, O(W);
		}, nt = function(e) {
			return Ve(e) || Me(e, s) && ie(W);
		};
		ge = W._dc = P.delayedCall(l || .25, He).pause(), W.deltaX = W.deltaY = 0, W._vx = je(0, 50, !0), W._vy = je(0, 50, !0), W.scrollX = q, W.scrollY = Fe, W.isDragging = W.isGesturing = W.isPressed = !1, he(this), W.enable = function(e) {
			return W.isEnabled || (U(X ? Z : i, "scroll", we), r.indexOf("scroll") >= 0 && U(X ? Z : i, "scroll", Ze, K, oe), r.indexOf("wheel") >= 0 && U(i, "wheel", Qe, K, oe), (r.indexOf("touch") >= 0 && ue || r.indexOf("pointer") >= 0) && (U(i, R[0], qe, K, oe), U(Z, R[2], Je), U(Z, R[3], Je), se && U(i, "click", Be, !0, !0), ie && U(i, "click", nt), j && U(Z, "gesturestart", Ye), te && U(Z, "gestureend", Xe), D && U(i, de + "enter", et), O && U(i, de + "leave", tt), ee && U(i, de + "move", $e)), W.isEnabled = !0, W.isDragging = W.isGesturing = W.isPressed = V = B = !1, W._vx.reset(), W._vy.reset(), J = q(), Y = Fe(), e && e.type && qe(e), ne && ne(W)), W;
		}, W.disable = function() {
			W.isEnabled && (_e.filter(function(e) {
				return e !== W && xe(e.target);
			}).length || Se(X ? Z : i, "scroll", we), W.isPressed && (W._vx.reset(), W._vy.reset(), Se(A ? i : Z, R[1], Ke, !0)), Se(X ? Z : i, "scroll", Ze, oe), Se(i, "wheel", Qe, oe), Se(i, R[0], qe, oe), Se(Z, R[2], Je), Se(Z, R[3], Je), Se(i, "click", Be, !0), Se(i, "click", nt), Se(Z, "gesturestart", Ye), Se(Z, "gestureend", Xe), Se(i, de + "enter", et), Se(i, de + "leave", tt), Se(i, de + "move", $e), W.isEnabled = W.isPressed = W.isDragging = !1, re && re(W));
		}, W.kill = W.revert = function() {
			W.disable();
			var e = _e.indexOf(W);
			e >= 0 && _e.splice(e, 1), me === W && (me = 0);
		}, _e.push(W), A && xe(i) && (me = W), W.enable(f);
	}, N(e, [{
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
K.version = "3.15.0", K.create = function(e) {
	return new K(e);
}, K.register = G, K.getAll = function() {
	return _e.slice();
}, K.getById = function(e) {
	return _e.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, z() && P.registerPlugin(K);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var q, Fe, J, Y, Ie, X, Z, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut = 1, dt = Date.now, ft = dt(), pt = 0, mt = 0, ht = function(e, t, n) {
	var r = jt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, gt = function(e, t) {
	return t && (!jt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, _t = function e() {
	return mt && requestAnimationFrame(e);
}, vt = function() {
	return Ue = 1;
}, yt = function() {
	return Ue = 0;
}, bt = function(e) {
	return e;
}, xt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, St = function() {
	return typeof window < "u";
}, Ct = function() {
	return q || St() && (q = window.gsap) && q.registerPlugin && q;
}, wt = function(e) {
	return !!~Z.indexOf(e);
}, Tt = function(e) {
	return (e === "Height" ? ot : J["inner" + e]) || Ie["client" + e] || X["client" + e];
}, Et = function(e) {
	return be(e, "getBoundingClientRect") || (wt(e) ? function() {
		return $n.width = J.innerWidth, $n.height = ot, $n;
	} : function() {
		return nn(e);
	});
}, Dt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = be(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Tt(i) : e["client" + i]) || 0;
	};
}, Ot = function(e, t) {
	return !t || ~V.indexOf(e) ? Et(e) : function() {
		return $n;
	};
}, kt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = be(e, n)) ? a() - Et(e)()[i] : wt(e) ? (Ie[n] || X[n]) - Tt(r) : e[n] - e["offset" + r]);
}, At = function(e, t) {
	for (var n = 0; n < Je.length; n += 3) (!t || ~t.indexOf(Je[n + 1])) && e(Je[n], Je[n + 1], Je[n + 2]);
}, jt = function(e) {
	return typeof e == "string";
}, Mt = function(e) {
	return typeof e == "function";
}, Nt = function(e) {
	return typeof e == "number";
}, Pt = function(e) {
	return typeof e == "object";
}, Ft = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, It = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, Lt = Math.abs, Rt = "left", zt = "top", Bt = "right", Vt = "bottom", Ht = "width", Ut = "height", Wt = "Right", Gt = "Left", Kt = "Top", qt = "Bottom", Jt = "padding", Yt = "margin", Xt = "Width", Zt = "Height", Qt = "px", $t = function(e) {
	return J.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, en = function(e) {
	var t = $t(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, tn = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, nn = function(e, t) {
	var n = t && $t(e)[We] !== "matrix(1, 0, 0, 1, 0, 0)" && q.to(e, {
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
}, rn = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, an = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, on = function(e) {
	return function(t) {
		return q.utils.snap(an(e), t);
	};
}, sn = function(e) {
	var t = q.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
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
}, cn = function(e) {
	return function(t, n) {
		return sn(an(e))(t, n.direction);
	};
}, ln = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, un = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, dn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, fn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, pn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, mn = {
	toggleActions: "play",
	anticipatePin: 0
}, hn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, gn = function(e, t) {
	if (jt(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in hn ? hn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, _n = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = Y.createElement("div"), m = wt(n) || be(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? X : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === De ? Bt : Vt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], vn(p, 0, r, _), p;
}, vn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Xt] = 1, i["border" + o + Xt] = 0, i[n.p] = t + "px", q.set(e, i);
}, Q = [], yn = {}, bn, xn = function() {
	return dt() - pt > 34 && (bn || (bn = requestAnimationFrame(Wn)));
}, Sn = function() {
	(!Qe || !Qe.isPressed || Qe.startX > X.clientWidth) && (B.cache++, Qe ? bn || (bn = requestAnimationFrame(Wn)) : Wn(), pt || On("scrollStart"), pt = dt());
}, Cn = function() {
	tt = J.innerWidth, et = J.innerHeight;
}, wn = function(e) {
	B.cache++, (e === !0 || !He && !Ze && !Y.fullscreenElement && !Y.webkitFullscreenElement && (!$e || tt !== J.innerWidth || Math.abs(J.innerHeight - et) > J.innerHeight * .25)) && Le.restart(!0);
}, Tn = {}, En = [], Dn = function e() {
	return dn($, "scrollEnd", e) || Bn(!0);
}, On = function(e) {
	return Tn[e] && Tn[e].map(function(e) {
		return e();
	}) || En;
}, kn = [], An = function(e) {
	for (var t = 0; t < kn.length; t += 5) (!e || kn[t + 4] && kn[t + 4].query === e) && (kn[t].style.cssText = kn[t + 1], kn[t].getBBox && kn[t].setAttribute("transform", kn[t + 2] || ""), kn[t + 3].uncache = 1);
}, jn = function() {
	return B.forEach(function(e) {
		return Mt(e) && ++e.cacheID && (e.rec = e());
	});
}, Mn = function(e, t) {
	var n;
	for (Ge = 0; Ge < Q.length; Ge++) n = Q[Ge], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	st = !0, t && An(t), t || On("revert");
}, Nn = function(e, t) {
	B.cache++, (t || !Pn) && B.forEach(function(e) {
		return Mt(e) && e.cacheID++ && (e.rec = 0);
	}), jt(e) && (J.history.scrollRestoration = it = e);
}, Pn, Fn = 0, In, Ln = function() {
	if (In !== Fn) {
		var e = In = Fn;
		requestAnimationFrame(function() {
			return e === Fn && Bn(!0);
		});
	}
}, Rn = function() {
	X.appendChild(at), ot = !Qe && at.offsetHeight || J.innerHeight, X.removeChild(at);
}, zn = function(e) {
	return Re(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Bn = function(e, t) {
	if (Ie = Y.documentElement, X = Y.body, Z = [
		J,
		Y,
		Ie,
		X
	], pt && !e && !st) {
		un($, "scrollEnd", Dn);
		return;
	}
	Rn(), Pn = $.isRefreshing = !0, st || jn();
	var n = On("refreshInit");
	Ye && $.sort(), t || Mn(), B.forEach(function(e) {
		Mt(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), st = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), ct = 1, zn(!0), Q.forEach(function(e) {
		var t = kt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), zn(!1), ct = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), B.forEach(function(e) {
		Mt(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), Nn(it, 1), Le.pause(), Fn++, Pn = 2, Wn(2), Q.forEach(function(e) {
		return Mt(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), Pn = $.isRefreshing = !1, On("refresh");
}, Vn = 0, Hn = 1, Un, Wn = function(e) {
	if (e === 2 || !Pn && !st) {
		$.isUpdating = !0, Un && Un.update(0);
		var t = Q.length, n = dt(), r = n - ft >= 50, i = t && Q[0].scroll();
		if (Hn = Vn > i ? -1 : 1, Pn || (Vn = i), r && (pt && !Ue && n - pt > 200 && (pt = 0, On("scrollEnd")), Be = ft, ft = n), Hn < 0) {
			for (Ge = t; Ge-- > 0;) Q[Ge] && Q[Ge].update(0, r);
			Hn = 1;
		} else for (Ge = 0; Ge < t; Ge++) Q[Ge] && Q[Ge].update(0, r);
		$.isUpdating = !1;
	}
	bn = 0;
}, Gn = [
	Rt,
	zt,
	Vt,
	Bt,
	Yt + qt,
	Yt + Wt,
	Yt + Kt,
	Yt + Gt,
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
], Kn = Gn.concat([
	Ht,
	Ut,
	"boxSizing",
	"max" + Xt,
	"max" + Zt,
	"position",
	Yt,
	Jt,
	Jt + Kt,
	Jt + Wt,
	Jt + qt,
	Jt + Gt
]), qn = function(e, t, n) {
	Xn(n);
	var r = e._gsap;
	if (r.spacerIsNative) Xn(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Jn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Gn.length, a = t.style, o = e.style, s; i--;) s = Gn[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[Vt] = o[Bt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Ht] = rn(e, Ee) + Qt, a[Ut] = rn(e, De) + Qt, a[Jt] = o[Yt] = o[zt] = o[Rt] = "0", Xn(r), o[Ht] = o["max" + Xt] = n[Ht], o[Ut] = o["max" + Zt] = n[Ut], o[Jt] = n[Jt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Yn = /([A-Z])/g, Xn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Yn, "-$1").toLowerCase());
	}
}, Zn = function(e) {
	for (var t = Kn.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Kn[i], n[Kn[i]]);
	return r.t = e, r;
}, Qn = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, $n = {
	left: 0,
	top: 0
}, er = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	Mt(e) && (e = e(s)), jt(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? gn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), Nt(e)) f && (e = q.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && vn(o, n, r, !0);
	else {
		Mt(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Oe(t, s) || X, y = nn(_) || {}, (!y || !y.left && !y.top) && $t(_).display === "none" && (S = _.style.display, _.style.display = "block", y = nn(_), S ? _.style.display = S : _.style.removeProperty("display")), b = gn(v[0], y[r.d]), x = gn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && vn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, vn(a, C, r, w && C > 20 || !w && (u ? Math.max(X[h], Ie[h]) : a.parentNode[h]) <= C + 1), u && (c = nn(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Qt));
	}
	return f && _ && (h = nn(_), f.seek(d), g = nn(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, tr = /(webkit|moz|length|cssText|inset)/i, nr = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === X) {
			for (a in e._stOrig = i.cssText, o = $t(e), o) !+a && !tr.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		q.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, rr = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, ir = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, q.set(e, r);
}, ar = function(e, t) {
	var n = Ae(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = rr(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			B.cache++, t.tween && Wn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = q.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, un(e, "wheel", n.wheelHandler), $.isTouch && un(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		Fe || e.register(q) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), rt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !mt) {
			this.update = this.refresh = this.kill = bt;
			return;
		}
		t = tn(jt(t) || Nt(t) || t.nodeType ? { trigger: t } : t, mn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ee : De, T = !l && l !== 0, E = Oe(t.scroller || J), D = q.core.getCache(E), O = wt(E), ee = ("pinType" in t ? t.pinType : be(E, "pinType") || O && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = T && t.toggleActions.split(" "), j = "markers" in t ? t.markers : mn.markers, te = O ? 0 : parseFloat($t(E)["border" + w.p2 + Xt]) || 0, M = this, ne = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, re = Dt(E, O, w), ie = Ot(E, O), ae = 0, oe = 0, se = 0, N = Ae(E, w), P, F, ce, le, I, L, ue, de, fe, pe, me, R, he, z, ge, _e, ve, H, ye, xe, U, Se, W, Ce, we, Te, ke, je, Me, Ne, Pe, G, K, Fe, Z, Le, Ve, We, Ke;
		if (M._startClamp = M._endClamp = !1, M._dir = w, m *= 45, M.scroller = E, M.scroll = x ? x.time.bind(x) : N, le = N(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (Ye = 1, t.refreshPriority === -9999 && (Un = M)), D.tweenScroll = D.tweenScroll || {
			top: ar(E, De),
			left: ar(E, Ee)
		}, M.tweenTo = P = D.tweenScroll[w.p], M.scrubDuration = function(e) {
			K = Nt(e) && e, K ? G ? G.duration(e) : G = q.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: K,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (G && G.progress(1).kill(), G = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), Ne = 0, o || (o = n.vars.id)), v && ((!Pt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in X.style && q.set(O ? [X, Ie] : E, { scrollBehavior: "auto" }), B.forEach(function(e) {
			return Mt(e) && e.target === (O ? Y.scrollingElement || Ie : E) && (e.smooth = !1);
		}), ce = Mt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? on(n) : v.snapTo === "labelsDirectional" ? cn(n) : v.directional === !1 ? q.utils.snap(v.snapTo) : function(e, t) {
			return sn(v.snapTo)(e, dt() - oe < 500 ? 0 : t.direction);
		}, Fe = v.duration || {
			min: .1,
			max: 2
		}, Fe = Pt(Fe) ? ze(Fe.min, Fe.max) : ze(Fe, Fe), Z = q.delayedCall(v.delay || K / 2 || .1, function() {
			var e = N(), t = dt() - oe < 500, r = P.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !Ue && ae !== e) {
				var i = (e - L) / z, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - Pe) / (dt() - Be) * 1e3 || 0, s = q.utils.clamp(-i, 1 - i, Lt(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = ce(c, M), Nt(l) || (l = c), u = Math.max(0, Math.round(L + l * z)), e <= ue && e >= L && u !== e) {
					if (r && !r._initted && r.data <= Lt(u - e)) return;
					v.inertia === !1 && (s = l - i), P(u, {
						duration: Fe(Lt(Math.max(Lt(c - a), Lt(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Lt(u - e),
						onInterrupt: function() {
							return Z.restart(!0) && p && It(M, p);
						},
						onComplete: function() {
							M.update(), ae = N(), n && !T && (G ? G.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Ne = Pe = n && !T ? n.totalProgress() : M.progress, g && g(M), m && It(M, m);
						}
					}, e, s * z, u - e - s * z), f && It(M, f, P.tween);
				}
			} else M.isActive && ae !== e && Z.restart(!0);
		}).pause()), o && (yn[o] = M), u = M.trigger = Oe(u || d !== !0 && d), Ke = u && u._gsap && u._gsap.stRevert, Ke && (Ke = Ke(M)), d = d === !0 ? u : Oe(d), jt(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Yt || (f = !f && d.parentNode && d.parentNode.style && $t(d.parentNode).display === "flex" ? !1 : Jt), M.pin = d, F = q.core.getCache(d), F.spacer ? ge = F.pinState : (b && (b = Oe(b), b && !b.nodeType && (b = b.current || b.nativeElement), F.spacerIsNative = !!b, b && (F.spacerState = Zn(b))), F.spacer = H = b || Y.createElement("div"), H.classList.add("pin-spacer"), o && H.classList.add("pin-spacer-" + o), F.pinState = ge = Zn(d)), t.force3D !== !1 && q.set(d, { force3D: !0 }), M.spacer = H = F.spacer, Me = $t(d), Ce = Me[f + w.os2], xe = q.getProperty(d), U = q.quickSetter(d, w.a, Qt), Jn(d, H, Me), ve = Zn(d)), j) {
			R = Pt(j) ? tn(j, pn) : pn, pe = _n("scroller-start", o, E, w, R, 0), me = _n("scroller-end", o, E, w, R, 0, pe), ye = pe["offset" + w.op.d2];
			var qe = Oe(be(E, "content") || E);
			de = this.markerStart = _n("start", o, qe, w, R, ye, 0, x), fe = this.markerEnd = _n("end", o, qe, w, R, ye, 0, x), x && (We = q.quickSetter([de, fe], w.a, Qt)), !ee && !(V.length && be(E, "fixedMarkers") === !0) && (en(O ? X : E), q.set([pe, me], { force3D: !0 }), Te = q.quickSetter(pe, w.a, Qt), je = q.quickSetter(me, w.a, Qt));
		}
		if (x) {
			var Je = x.vars.onUpdate, Ze = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				M.update(0, 0, 1), Je && Je.apply(x, Ze || []);
			});
		}
		if (M.previous = function() {
			return Q[Q.indexOf(M) - 1];
		}, M.next = function() {
			return Q[Q.indexOf(M) + 1];
		}, M.revert = function(e, t) {
			if (!t) return M.kill(!0);
			var r = e !== !1 || !M.enabled, i = He;
			r !== M.isReverted && (r && (Le = Math.max(N(), M.scroll.rec || 0), se = M.progress, Ve = n && n.progress()), de && [
				de,
				fe,
				pe,
				me
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (He = M, M.update(r)), d && (!y || !M.isActive) && (r ? qn(d, H, ge) : Jn(d, H, $t(d), we)), r || M.update(r), He = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((He || !M.enabled) && !i)) {
				if (d && r && pt) {
					un(e, "scrollEnd", Dn);
					return;
				}
				!Pn && ne && ne(M), He = M, P.tween && !a && (P.tween.kill(), P.tween = 0), G && G.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = re(), l = ie(), m = x ? x.duration() : kt(E, w), h = z <= .01 || !z, g = 0, _ = o || 0, v = Pt(a) ? a.end : t.end, b = t.endTrigger || u, S = Pt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = M.pinnedContainer = t.pinnedContainer && Oe(t.pinnedContainer, M), D = u && Math.max(0, Q.indexOf(M)) || 0, k = D, A, F, ce, R, B, V, ye, be, U, Ce, Te, je, Me;
				for (j && Pt(a) && (je = q.getProperty(pe, w.p), Me = q.getProperty(me, w.p)); k-- > 0;) V = Q[k], V.end || V.refresh(0, 1) || (He = M), ye = V.pin, ye && (ye === u || ye === d || ye === C) && !V.isReverted && (Ce || (Ce = []), Ce.unshift(V), V.revert(!0, !0)), V !== Q[k] && (D--, k--);
				for (Mt(S) && (S = S(M)), S = ht(S, "start", M), L = er(S, u, s, w, N(), de, pe, M, l, te, ee, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), Mt(v) && (v = v(M)), jt(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (jt(S) ? S.split(" ")[0] : "") + v : (g = gn(v.substr(2), s), v = jt(S) ? S : (x ? q.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, L) : L) + g, b = u)), v = ht(v, "end", M), ue = Math.max(L, er(v || (b ? "100% 0" : m), b, s, w, N() + g, fe, me, M, l, te, ee, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = D; k--;) V = Q[k] || {}, ye = V.pin, ye && V.start - V._pinPush <= L && !x && V.end > 0 && (A = V.end - (M._startClamp ? Math.max(0, V.start) : V.start), (ye === u && V.start - V._pinPush < L || ye === C) && isNaN(S) && (g += A * (1 - V.progress)), ye === d && (_ += A));
				if (L += g, ue += g, M._startClamp && (M._startClamp += g), M._endClamp && !Pn && (M._endClamp = ue || -.001, ue = Math.min(ue, kt(E, w))), z = ue - L || (L -= .01) && .001, h && (se = q.utils.clamp(0, 1, q.utils.normalize(L, ue, Le))), M._pinPush = _, de && g && (A = {}, A[w.a] = "+=" + g, C && (A[w.p] = "-=" + N()), q.set([de, fe], A)), d && !(ct && M.end >= kt(E, w))) A = $t(d), R = w === De, ce = N(), Se = parseFloat(xe(w.a)) + _, !m && ue > 1 && (Te = (O ? Y.scrollingElement || Ie : E).style, Te = {
					style: Te,
					value: Te["overflow" + w.a.toUpperCase()]
				}, O && $t(X)["overflow" + w.a.toUpperCase()] !== "scroll" && (Te.style["overflow" + w.a.toUpperCase()] = "scroll")), Jn(d, H, A), ve = Zn(d), F = nn(d, !0), be = ee && Ae(E, R ? Ee : De)(), f ? (we = [f + w.os2, z + _ + Qt], we.t = H, k = f === Jt ? rn(d, w) + z + _ : 0, k && (we.push(w.d, k + Qt), H.style.flexBasis !== "auto" && (H.style.flexBasis = k + Qt)), Xn(we), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ee && N(Le)) : (k = rn(d, w), k && H.style.flexBasis !== "auto" && (H.style.flexBasis = k + Qt)), ee && (B = {
					top: F.top + (R ? ce - L : be) + Qt,
					left: F.left + (R ? be : ce - L) + Qt,
					boxSizing: "border-box",
					position: "fixed"
				}, B[Ht] = B["max" + Xt] = Math.ceil(F.width) + Qt, B[Ut] = B["max" + Zt] = Math.ceil(F.height) + Qt, B[Yt] = B[Yt + Kt] = B[Yt + Wt] = B[Yt + qt] = B[Yt + Gt] = "0", B[Jt] = A[Jt], B[Jt + Kt] = A[Jt + Kt], B[Jt + Wt] = A[Jt + Wt], B[Jt + qt] = A[Jt + qt], B[Jt + Gt] = A[Jt + Gt], _e = Qn(ge, B, y), Pn && N(0)), n ? (U = n._initted, Xe(1), n.render(n.duration(), !0, !0), W = xe(w.a) - Se + z + _, ke = Math.abs(z - W) > 1, ee && ke && _e.splice(_e.length - 2, 2), n.render(0, !0, !0), U || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Xe(0)) : W = z, Te && (Te.value ? Te.style["overflow" + w.a.toUpperCase()] = Te.value : Te.style.removeProperty("overflow-" + w.a));
				else if (u && N() && !x) for (F = u.parentNode; F && F !== X;) F._pinOffset && (L -= F._pinOffset, ue -= F._pinOffset), F = F.parentNode;
				Ce && Ce.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = L, M.end = ue, le = I = Pn ? Le : N(), !x && !Pn && (le < Le && N(Le), M.scroll.rec = 0), M.revert(!1, !0), oe = dt(), Z && (ae = -1, Z.restart(!0)), He = 0, n && T && (n._initted || Ve) && n.progress() !== Ve && n.progress(Ve || 0, !0).render(n.time(), !0, !0), (h || se !== M.progress || x || p || n && !n._initted) && (n && !T && (n._initted || se || n.vars.immediateRender !== !1) && n.totalProgress(x && L < -.001 && !se ? q.utils.normalize(L, ue, 0) : se, !0), M.progress = h || (le - L) / z === se ? 0 : se), d && f && (H._pinOffset = Math.round(M.progress * W)), G && G.invalidate(), isNaN(je) || (je -= q.getProperty(pe, w.p), Me -= q.getProperty(me, w.p), ir(pe, w, je), ir(de, w, je - (o || 0)), ir(me, w, Me), ir(fe, w, Me - (o || 0))), h && !Pn && M.update(), c && !Pn && !he && (he = !0, c(M), he = !1);
			}
		}, M.getVelocity = function() {
			return (N() - I) / (dt() - Be) * 1e3 || 0;
		}, M.endAnimation = function() {
			Ft(M.callbackAnimation), n && (G ? G.progress(1) : n.paused() ? T || Ft(n, M.direction < 0, 1) : Ft(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (L || M.refresh() || L) + n.labels[e] / n.duration() * z || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (jt(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= L : e.start >= ue;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = Pn === !0 ? Le : M.scroll(), c = e ? 0 : (o - L) / z, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, D, O, j, te, ne;
				if (t && (I = le, le = x ? N() : o, v && (Pe = Ne, Ne = n && !T ? n.totalProgress() : u)), m && d && !He && !ut && pt && (!u && L < o + (o - I) / (dt() - Be) * m ? u = 1e-4 : u === 1 && ue > o + (o - I) / (dt() - Be) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, j = h !== g, O = j || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, O && !He && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !j && A[b + 1] !== "none" && A[b + 1] || A[b], ne = n && (D === "complete" || D === "reset" || D in n))), C && (j || ne) && (ne || l || !n) && (Mt(C) ? C(M) : M.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (G && !He && !ut ? (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start), G.resetTo ? G.resetTo("totalProgress", u, n._tTime / n._tDur) : (G.vars.totalProgress = u, G.invalidate().restart())) : n && n.totalProgress(u, !!(He && (oe || e)))), d) {
						if (e && f && (H.style[f + w.os2] = Ce), !ee) U(xt(Se + W * u));
						else if (O) {
							if (te = !e && u > p && ue + 1 > o && o + 1 >= kt(E, w), y) if (!e && (h || te)) {
								var re = nn(d, !0), ie = o - L;
								nr(d, X, re.top + (w === De ? ie : 0) + Qt, re.left + (w === De ? 0 : ie) + Qt);
							} else nr(d, H);
							Xn(h || te ? _e : ve), ke && u < 1 && h || U(Se + (u === 1 && !te ? W : 0));
						}
					}
					v && !P.tween && !He && !ut && Z.restart(!0), a && (j || _ && u && (u < 1 || !lt)) && Re(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(M), O && !He ? (T && (ne && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(M)), (j || !lt) && (s && j && It(M, s), k[b] && It(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), j || (b = u === 1 ? 1 : 3, k[b] && It(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (Nt(S) ? S : 2500) && (Ft(M.callbackAnimation), G ? G.progress(1) : Ft(n, D === "reverse" ? 1 : !u, 1))) : T && i && !He && i(M);
				}
				if (je) {
					var ae = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					Te(ae + +!!pe._isFlipped), je(ae);
				}
				We && We(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, un(E, "resize", wn), O || un(E, "scroll", Sn), ne && un(e, "refreshInit", ne), t !== !1 && (M.progress = se = 0, le = I = ae = N()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && P ? P.tween : G;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: gt(e, n && !!M._startClamp),
				end: gt(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (we && e) {
				var t = we.indexOf(w.d) + 1;
				we[t] = parseFloat(we[t]) + e + Qt, we[1] = parseFloat(we[1]) + e + Qt, Xn(we);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || G && G.pause(), Le = 0, F && (F.uncache = 1), ne && dn(e, "refreshInit", ne), Z && (Z.pause(), P.tween && P.tween.kill() && (P.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== M) return;
				dn(E, "resize", wn), O || dn(E, "scroll", Sn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), G && !r && G.kill(), o && delete yn[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === Ge && Hn > 0 && Ge--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || Pn || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), de && [
				de,
				fe,
				pe,
				me
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Un === M && (Un = 0), d && (F && (F.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (F.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Ke && Ke(M), n && n.add && !z) {
			var Qe = M.update;
			M.update = function() {
				M.update = Qe, B.cache++, L || ue || M.refresh();
			}, q.delayedCall(.01, M.update), z = .01, L = ue = 0;
		} else M.refresh();
		d && Ln();
	}, e.register = function(t) {
		return Fe || (q = t || Ct(), St() && window.document && e.enable(), Fe = mt), Fe;
	}, e.defaults = function(e) {
		if (e) for (var t in e) mn[t] = e[t];
		return mn;
	}, e.disable = function(e, t) {
		mt = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), dn(J, "wheel", Sn), dn(Y, "scroll", Sn), clearInterval(Ve), dn(Y, "touchcancel", bt), dn(X, "touchstart", bt), ln(dn, Y, "pointerdown,touchstart,mousedown", vt), ln(dn, Y, "pointerup,touchend,mouseup", yt), Le.kill(), At(dn);
		for (var n = 0; n < B.length; n += 3) fn(dn, B[n], B[n + 1]), fn(dn, B[n], B[n + 2]);
	}, e.enable = function() {
		if (J = window, Y = document, Ie = Y.documentElement, X = Y.body, q) if (Re = q.utils.toArray, ze = q.utils.clamp, rt = q.core.context || bt, Xe = q.core.suppressOverwrites || bt, it = J.history.scrollRestoration || "auto", Vn = J.pageYOffset || 0, q.core.globals("ScrollTrigger", e), X) {
			mt = 1, at = document.createElement("div"), at.style.height = "100vh", at.style.position = "absolute", Rn(), _t(), K.register(q), e.isTouch = K.isTouch, nt = K.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), $e = K.isTouch === 1, un(J, "wheel", Sn), Z = [
				J,
				Y,
				Ie,
				X
			], q.matchMedia ? (e.matchMedia = function(e) {
				var t = q.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, q.addEventListener("matchMediaInit", function() {
				jn(), Mn();
			}), q.addEventListener("matchMediaRevert", function() {
				return An();
			}), q.addEventListener("matchMedia", function() {
				Bn(0, 1), On("matchMedia");
			}), q.matchMedia().add("(orientation: portrait)", function() {
				return Cn(), Cn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), Cn(), un(Y, "scroll", Sn);
			var t = X.hasAttribute("style"), n = X.style, r = n.borderTopStyle, i = q.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = nn(X), De.m = Math.round(a.top + De.sc()) || 0, Ee.m = Math.round(a.left + Ee.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (X.setAttribute("style", ""), X.removeAttribute("style")), Ve = setInterval(xn, 250), q.delayedCall(.5, function() {
				return ut = 0;
			}), un(Y, "touchcancel", bt), un(X, "touchstart", bt), ln(un, Y, "pointerdown,touchstart,mousedown", vt), ln(un, Y, "pointerup,touchend,mouseup", yt), We = q.utils.checkPrefix("transform"), Kn.push(We), Fe = dt(), Le = q.delayedCall(.2, Bn).pause(), Je = [
				Y,
				"visibilitychange",
				function() {
					var e = J.innerWidth, t = J.innerHeight;
					Y.hidden ? (Ke = e, qe = t) : (Ke !== e || qe !== t) && wn();
				},
				Y,
				"DOMContentLoaded",
				Bn,
				J,
				"load",
				Bn,
				J,
				"resize",
				wn
			], At(un), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < B.length; o += 3) fn(dn, B[o], B[o + 1]), fn(dn, B[o], B[o + 2]);
		} else Y && Y.addEventListener("DOMContentLoaded", function t() {
			e.enable(), Y.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (lt = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Ve) || (Ve = n) && setInterval(xn, n), "ignoreMobileResize" in t && ($e = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (At(dn) || At(un, t.autoRefreshEvents || "none"), Ze = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Oe(e), r = B.indexOf(n), i = wt(n);
		~r && B.splice(r, i ? 6 : 2), t && (i ? V.unshift(J, t, X, t, Ie, t) : V.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (jt(e) ? Oe(e) : e).getBoundingClientRect(), i = r[n ? Ht : Ut] * t || 0;
		return n ? r.right - i > 0 && r.left + i < J.innerWidth : r.bottom - i > 0 && r.top + i < J.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		jt(e) && (e = Oe(e));
		var r = e.getBoundingClientRect(), i = r[n ? Ht : Ut], a = t == null ? i / 2 : t in hn ? hn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / J.innerWidth : (r.top + a) / J.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = Tn.killAll || [];
			Tn = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? Re(e).forEach(function(e) {
		if (e && e.style) {
			var t = kn.indexOf(e);
			t >= 0 && kn.splice(t, 5), kn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), q.core.getCache(e), rt());
		}
	}) : kn;
}, $.revert = function(e, t) {
	return Mn(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? wn(!0) : (Fe || $.register()) && Bn(!0);
}, $.update = function(e) {
	return ++B.cache && Wn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = Nn, $.maxScroll = function(e, t) {
	return kt(e, t ? Ee : De);
}, $.getScrollFunc = function(e, t) {
	return Ae(Oe(e), t ? Ee : De);
}, $.getById = function(e) {
	return yn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!pt;
}, $.snapDirectional = sn, $.addEventListener = function(e, t) {
	var n = Tn[e] || (Tn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = Tn[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, $.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = q.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && Mt(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return Mt(a) && (a = a(), un($, "refresh", function() {
		return a = t.batchMax();
	})), Re(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var or = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, sr = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (K.isTouch ? " pinch-zoom" : "") : "none", t === Ie && e(X, n);
}, cr = {
	auto: 1,
	scroll: 1
}, lr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || q.core.getCache(i), o = dt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== X && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(cr[(s = $t(i)).overflowY] || cr[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !wt(i) && (cr[(s = $t(i)).overflowY] || cr[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, ur = function(e, t, n, r) {
	return K.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && lr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && un(Y, K.eventTypes[0], pr, !1, !0);
		},
		onDisable: function() {
			return dn(Y, K.eventTypes[0], pr, !0);
		}
	});
}, dr = /(input|label|select|textarea)/i, fr, pr = function(e) {
	var t = dr.test(e.target.tagName);
	(t || fr) && (e._gsapAllow = !0, fr = t);
}, mr = function(e) {
	Pt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Oe(e.target) || Ie, l = q.core.globals().ScrollSmoother, u = l && l.get(), d = nt && (e.content && Oe(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Ae(c, De), p = Ae(c, Ee), m = 1, h = (K.isTouch && J.visualViewport ? J.visualViewport.scale * J.visualViewport.width : J.outerWidth) / J.innerWidth, g = 0, _ = Mt(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = ur(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = bt, C = bt, w = function() {
		s = kt(c, De), C = ze(+!!nt, s), n && (S = ze(0, kt(c, Ee))), v = Fn;
	}, T = function() {
		d._gsap.y = xt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = xt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = xt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = B.cache, Wn();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, ee, k, A = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && q.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return nt && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = xt((J.visualViewport && J.visualViewport.scale || 1) / h), D.pause(), e !== m && sr(c, m > 1.01 || !n && "x"), O = p(), ee = f(), w(), v = Fn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) k.restart(!0);
		else {
			B.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= or(p, i, o, kt(c, Ee)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= or(f, i, o, kt(c, De)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (nt && D.vars.scrollY >= s || i >= s - 1) && q.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), dt() - g > 1e3 && (v = 0, g = dt());
	}, e.onChange = function(e, t, r, i, a) {
		if (Fn !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? ee + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (ee += c - s), f(c);
		}
		(r || t) && Wn();
	}, e.onEnable = function() {
		sr(c, !n && "x"), $.addEventListener("refresh", A), un(J, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		sr(c, !0), dn(J, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new K(e), o.iOS = nt, nt && !f() && f(1), nt && q.ticker.add(bt), k = o._dc, D = q.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: rr(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: Wn,
		onComplete: k.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (Mt(e)) return Q.sort(e);
	var t = J.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + J.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new K(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Qe;
	if (e === !0 && Qe) return Qe.enable();
	if (e === !1) {
		Qe && Qe.kill(), Qe = e;
		return;
	}
	var t = e instanceof K ? e : mr(e);
	return Qe && Qe.target === t.target && Qe.kill(), wt(t.target) && (Qe = t), t;
}, $.core = {
	_getVelocityProp: je,
	_inputObserver: ur,
	_scrollers: B,
	_proxies: V,
	bridge: {
		ss: function() {
			pt || On("scrollStart"), pt = dt();
		},
		ref: function() {
			return He;
		}
	}
}, Ct() && q.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var hr = "h1, h2, h3, h4, h5, h6, p", gr = ".news_event .u-text-eyebrow[data-animation-ready]", _r = [
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
].join(", "), vr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", yr = "data-reveal-pending", br = "data-reveal-ready", xr = {
	y: 12,
	opacity: 0
}, Sr = {
	y: 0,
	opacity: 1,
	duration: .8,
	ease: "power2.out"
}, Cr = !1;
function wr() {
	return /(?:^|\/)news(?:\/|$)/i.test(window.location.pathname);
}
function Tr() {
	return window.location.pathname === "/";
}
function Er(e) {
	var t;
	return e.closest(_r) || e.closest("[hidden]") || /^\/atelier\/?$/i.test(window.location.pathname) && e.closest("[data-fade]") || e.matches(".atelier_hero_section .atelier_slide_heading") || e.matches("[data-masked-line-reveal], [data-masked-reveal-label]") || e.matches(".atelier_about_section.u-theme-dark5 .atelier_about_h2, .atelier_about_section.u-theme-dark5 .atelier_story_p") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function Dr(e) {
	if (e.closest(vr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function Or(e) {
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
function kr(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.element.style.opacity = e.played ? "1" : e.originalOpacity, e.element.style.transform = e.originalTransform, e.trigger = void 0, e.timeline = void 0;
}
function Ar(e) {
	return e.signature = Or(e.element), e.element.removeAttribute(yr), e.element.setAttribute(br, ""), [e.element];
}
function jr(e) {
	let t = Ar(e);
	if (!t.length || e.played) return;
	let n = S.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0;
		}
	});
	n.fromTo(t, xr, Sr), e.timeline = n, e.trigger = $.create({
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
function Mr(e, t) {
	e.forEach((e, n) => {
		let r = Ar(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, xr, Sr, .6 + n * .12 + i);
	});
}
function Nr() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function Pr(e = document) {
	var t;
	if (Cr || Tr() || wr() || f()) return;
	let n = c(`${hr}, ${gr}`, e).filter(Er);
	if (!n.length) return;
	Cr = !0, S.registerPlugin($);
	let r = n.map((e) => ({
		element: e,
		hero: Dr(e),
		played: !1,
		signature: "",
		originalOpacity: e.style.opacity,
		originalTransform: e.style.transform
	}));
	r.forEach(({ element: e }) => e.setAttribute(yr, ""));
	let i, a, o = 0, s = !1, l = !1, u = () => {
		s && (i && i.progress() > 0 && (l = !0, r.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), r.forEach(kr), i = S.timeline({ paused: !0 }), Mr(r.filter((e) => e.hero && e.element.isConnected), i), r.filter((e) => !e.hero && e.element.isConnected).forEach(jr), !l && i.duration() > 0 && (i.call(() => {
			l = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, d = () => {
		o || (o = window.requestAnimationFrame(() => {
			o = 0, r.some((e) => e.element.isConnected && Or(e.element) !== e.signature) && u();
		}));
	};
	Promise.all([Nr(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		s = !0, u(), a = new ResizeObserver(d), r.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", d, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", u);
	}), window.addEventListener("pagehide", () => {
		var e;
		window.cancelAnimationFrame(o), a == null || a.disconnect(), i == null || i.kill(), r.forEach(kr), window.removeEventListener("resize", d), (e = document.fonts) == null || e.removeEventListener("loadingdone", u), r.forEach(({ element: e }) => e.removeAttribute(yr));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var Fr = "[data-lightbox-src]", Ir = "js-lightbox", Lr = `.${Ir}`, Rr = `${Fr}, ${Lr}`, zr = "[data-site-lightbox]", Br = "[data-lightbox-close]", Vr = "[data-lightbox-prev]", Hr = "[data-lightbox-next]", Ur = "[data-lightbox-auto-icon]", Wr = "site-lightbox-trigger", Gr = "site-lightbox-trigger__image", Kr = "site-lightbox-trigger__icon", qr = "w-dyn-bind-empty", Jr = "/plugins/Basic/assets/placeholder.", Yr = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Xr = !1, Zr = null, Qr = null, $r = [], ei = 0, ti = !1, ni = null;
function ri(e) {
	let t = a(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = a(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return ii(e);
	let n = l("img", e);
	return n ? ii(n) : "";
}
function ii(e) {
	let t = a(e, "src"), n = a(e, "srcset");
	return e.classList.contains(qr) || t.includes(Jr) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ai(e) {
	var t, n;
	let r = a(e, "data-lightbox-alt");
	if (r) return r;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let i = l("img", e);
	return (t = i == null || (n = i.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function oi(e) {
	let t = ri(e).trim();
	return t ? {
		src: t,
		caption: a(e, "data-lightbox-caption"),
		credit: a(e, "data-lightbox-credit"),
		alt: ai(e),
		group: a(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function si(e) {
	let t = oi(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = c(Rr).filter((e) => a(e, "data-lightbox-group") === t.group).map(oi).filter((e) => !!e), r = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: r
	};
}
function ci() {
	let e = document.createElement("span");
	return e.className = Kr, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = Yr, e;
}
function li(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function ui(e) {
	if (!li(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Zr == null ? void 0 : Zr.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function di(e) {
	if (e.closest(`.${Wr}`) || !ri(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${Wr} ${Ir}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, a(e, n)), e.removeAttribute(n));
	e.classList.remove(Ir), e.classList.add(Gr), e.before(t), t.append(e, ci()), ui(t);
}
function fi(e) {
	if (e instanceof HTMLImageElement) {
		di(e);
		return;
	}
	ri(e).trim() && (e.classList.add(Wr), ui(e), l(Ur, e) || e.append(ci()));
}
function pi() {
	c(Lr).forEach(fi);
}
function mi(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function hi() {
	var e, t, n, r, i, a;
	if (Qr) return gi(Qr), Qr;
	let o = l(zr), s = o == null ? document.createElement("div") : o;
	if (s.classList.add("site-lightbox"), s.setAttribute("data-site-lightbox", ""), s.setAttribute("role", "dialog"), s.setAttribute("aria-modal", "true"), s.setAttribute("aria-hidden", "true"), s.setAttribute("aria-label", (e = Zr == null ? void 0 : Zr.t("openImage", "Image preview")) == null ? "Image preview" : e), s.hidden = !0, s.tabIndex = -1, !o) {
		var c, u, d;
		s.innerHTML = "";
		let e = mi((c = Zr == null ? void 0 : Zr.t("close", "Close")) == null ? "Close" : c, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = mi((u = Zr == null ? void 0 : Zr.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = mi((d = Zr == null ? void 0 : Zr.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0;
		let o = document.createElement("span");
		o.className = "site-lightbox__credit", o.setAttribute("data-lightbox-credit-output", ""), o.hidden = !0, r.append(i, a, o), s.append(e, t, r, n), document.body.append(s);
	}
	let f = l("[data-lightbox-credit-output]", s);
	if (!f) {
		var p;
		f = document.createElement("span"), f.className = "site-lightbox__credit", f.setAttribute("data-lightbox-credit-output", ""), f.hidden = !0, ((p = l(".site-lightbox__figure", s)) == null ? s : p).append(f);
	}
	let m = {
		root: s,
		image: (t = l("[data-lightbox-image]", s)) == null ? document.createElement("img") : t,
		caption: (n = l("[data-lightbox-caption-output]", s)) == null ? document.createElement("figcaption") : n,
		credit: f,
		closeButton: (r = l(Br, s)) == null ? document.createElement("button") : r,
		previousButton: (i = l(Vr, s)) == null ? document.createElement("button") : i,
		nextButton: (a = l(Hr, s)) == null ? document.createElement("button") : a
	};
	return Qr = m, gi(m), !o && !document.body.contains(s) && document.body.append(s), m;
}
function gi(e) {
	var t, n, r, i;
	let a = (t = Zr == null ? void 0 : Zr.t("close", "Close")) == null ? "Close" : t, o = (n = Zr == null ? void 0 : Zr.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Zr == null ? void 0 : Zr.t("next", "Next")) == null ? "Next" : r, c = (i = Zr == null ? void 0 : Zr.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function _i() {
	let e = hi(), t = $r[ei];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = $r.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(ei), e.root.dataset.lightboxCount = String($r.length);
}
function vi(e) {
	let t = hi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function yi(e) {
	$r.length < 2 || (ei = (e + $r.length) % $r.length, _i());
}
function bi() {
	yi(ei + 1);
}
function xi() {
	yi(ei - 1);
}
function Si(e) {
	var n;
	let r = si(e);
	if (!r) return;
	let i = ti;
	$r = r.items, ei = r.index, ni = e, ti = !0, _i(), vi(!0), i || h();
	let a = hi();
	g(a.closeButton || a.root);
	let o = $r[ei];
	t("lightbox_opened", {
		item_count: $r.length,
		initial_index: ei,
		is_grouped: !!(o != null && o.group)
	}), p(a.root, "site:lightbox-open", {
		item: o,
		index: ei,
		count: $r.length,
		group: (n = o == null ? void 0 : o.group) == null ? "" : n,
		trigger: e
	});
}
function Ci() {
	var e;
	if (!ti || !Qr) return;
	let t = Qr, r = ni, a = (e = $r[ei]) == null ? null : e;
	vi(!1), i(), ti = !1, $r = [], ei = 0, ni = null, t.image.removeAttribute("src"), t.caption.textContent = "", p(t.root, "site:lightbox-close", { item: a }), n(r);
}
function wi(e) {
	if (!(!ti || !Qr)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), Ci();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), bi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), xi();
			return;
		}
		x(Qr.root, e);
	}
}
function Ti(e) {
	!ti || !Qr || e.target === Qr.root && Ci();
}
function Ei(e) {
	return Zr = e.i18n, pi(), Xr || (v(document, "click", Rr, (e, t) => {
		e.preventDefault(), Si(t);
	}), v(document, "keydown", Lr, (e, t) => {
		li(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), Si(t));
	}), v(document, "click", Br, (e) => {
		e.preventDefault(), Ci();
	}), v(document, "click", Vr, (e) => {
		e.preventDefault(), xi();
	}), v(document, "click", Hr, (e) => {
		e.preventDefault(), bi();
	}), document.addEventListener("click", Ti), document.addEventListener("keydown", wi, !0), Xr = !0), {
		openLightbox: Si,
		closeLightbox: Ci
	};
}
//#endregion
//#region src/modules/modal-image.ts
function Di(e, t, n) {
	var r;
	let i = (t == null ? "" : t).split(",").map((e) => e.trim().match(/^(\S+)\s+(\d+)w$/)).filter((e) => !!e).map((e) => ({
		url: e[1],
		width: Number(e[2])
	})).sort((e, t) => e.width - t.width), a = (r = i.find((e) => e.width >= n)) == null ? i[i.length - 1] : r;
	if (a) return a.url;
	try {
		let t = new URL(e, document.baseURI);
		return !/^(cdn\.prod\.website-files\.com|uploads-ssl\.webflow\.com)$/.test(t.hostname) || !/\.(jpe?g|png|webp)$/i.test(t.pathname) || /-p-\d+\.[^.]+$/i.test(t.pathname) ? e : (t.pathname = t.pathname.replace(/\.(jpe?g|png|webp)$/i, `-p-${n}.$1`), t.href);
	} catch (t) {
		return e;
	}
}
var Oi = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Set();
function ji(e) {
	try {
		return new URL(e, document.baseURI).href;
	} catch (t) {
		return e;
	}
}
function Mi(e, t) {
	return `${e}\n${t}`;
}
function Ni(e) {
	return new Promise((t) => {
		let n = new Image();
		n.loading = "eager", n.onload = () => {
			typeof n.decode == "function" ? n.decode().then(() => {
				Ai.add(ji(e)), t(!0);
			}, () => t(!1)) : (Ai.add(ji(e)), t(!0));
		}, n.onerror = () => t(!1), n.src = e;
	});
}
function Pi(e, t) {
	let n = Mi(e, t), r = Oi.get(n);
	if (r) return r;
	let i = (async () => {
		let r = await Ni(e) ? e : t;
		return r !== e && await Ni(t), ki.set(n, r), r;
	})();
	return Oi.set(n, i), i;
}
function Fi(e, t) {
	var n;
	return (n = ki.get(Mi(e, t))) == null ? e : n;
}
var Ii = /* @__PURE__ */ new WeakMap();
function Li(e, t, n) {
	var r, i;
	let a = ((r = Ii.get(e)) == null ? 0 : r) + 1;
	Ii.set(e, a), e.loading = "eager", e.decoding = "async";
	let o = ji((i = t == null ? e.currentSrc : t) == null ? e.src : i), s = e.currentSrc === o && e.complete && e.naturalWidth > 0 && !e.classList.contains("is-image-pending") || Ai.has(o);
	s ? e.classList.contains("is-image-pending") && e.classList.remove("is-image-pending") : e.classList.add("is-image-pending");
	let c = () => {
		(typeof e.decode == "function" ? e.decode().catch(() => void 0) : Promise.resolve()).then(() => {
			Ii.get(e) === a && e.naturalWidth > 0 && (Ai.add(e.currentSrc || e.src), e.classList.remove("is-image-pending"));
		});
	};
	e.onload = c, e.onerror = () => {
		if (Ii.get(e) !== a || !n) return;
		e.classList.add("is-image-pending");
		let t = n;
		n = void 0, e.src = t;
	}, t !== void 0 && e.src !== o && (e.src = t), !s && e.complete && e.naturalWidth > 0 && e.currentSrc === o && c();
}
function Ri(e) {
	var t;
	Ii.set(e, ((t = Ii.get(e)) == null ? 0 : t) + 1), e.onload = null, e.onerror = null, e.classList.remove("is-image-pending"), e.removeAttribute("src");
}
function zi(e, t, n, r) {
	let i = Fi(Di(t, n, r), t);
	Li(e, i, i === t ? void 0 : t);
}
var Bi = /* @__PURE__ */ new Set([
	"6a7db30517820876cd23f469",
	"6a7db3187795b95db7804762",
	"6a7db33f5031a1007e109876",
	"6a7db3495031a1007e10a89e",
	"6a7db34bd247654adf43324d"
]);
function Vi(e, t) {
	var n;
	let r = (n = e.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	return r && Bi.has(r) ? new URL("../assets/modal-work-thumbnails/" + r + ".webp", import.meta.url).href : Di(e, t, 500);
}
//#endregion
//#region src/modules/modal.ts
var Hi = "[data-modal]", Ui = "[data-modal-content]", Wi = "[data-modal-open]", Gi = "[data-modal-close]", Ki = "a[href^=\"#modal:\"]", qi = "#modal:", Ji = 460, Yi = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Xi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Zi = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Qi = !1, $i = !0, ea = null, ta = null, na = "", ra = null, ia = null, aa = /* @__PURE__ */ new Map();
function oa(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(qi) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function sa() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Gi),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]"),
		rights: e.querySelector("[data-site-modal-rights]")
	};
	return t.closeButton.innerHTML = Yi, t.lightboxIcon.innerHTML = Xi, la(t), t;
}
function ca() {
	return (!ta || !document.body.contains(ta.root)) && (ta = sa()), la(ta), ta;
}
function la(e) {
	var t, n;
	let r = (t = ea == null ? void 0 : ea.t("close", "Close")) == null ? "Close" : t, i = (n = ea == null ? void 0 : ea.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function ua(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function da(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p;
	let m = e.querySelector("[data-modal-work]");
	if (!m) return null;
	let h = ua(m, "[data-works-thumbnail]"), g = (t = (n = (r = m.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = m.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, _ = (a = (o = (s = m.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = m.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, v = (l = (u = (d = m.getAttribute("data-works-href")) == null ? m.getAttribute("data-works-url") : d) == null ? (f = m.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, y = C(h);
	return !g && !y && !v ? null : {
		title: g,
		year: _,
		thumbnail: y,
		thumbnailSrcset: (p = h == null ? void 0 : h.getAttribute("srcset")) == null ? void 0 : p,
		thumbnailAlt: (h == null ? void 0 : h.alt) || g,
		href: v
	};
}
function fa(e) {
	var t, n, r, i;
	let a = c("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = ua(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: C(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let o = ua(e, "[data-modal-image]"), s = C(o);
	return s ? [{
		src: s,
		srcset: (t = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = o == null ? void 0 : o.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function pa(e) {
	var t, n, r, i, o, s, c, l, u, d;
	let f = a(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (r = (i = e.querySelector("[data-modal-headline]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r, h = fa(e), g = h[0], _ = e.querySelector("[data-modal-body]");
	return {
		id: f,
		address: p,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: m,
		image: (o = g == null ? void 0 : g.src) == null ? "" : o,
		imageSrcset: g == null ? void 0 : g.srcset,
		imageAlt: (s = g == null ? void 0 : g.alt) == null ? "" : s,
		caption: (c = g == null ? void 0 : g.caption) == null ? "" : c,
		html: (l = _ == null ? void 0 : _.innerHTML) == null ? "" : l,
		rights: (u = (d = e.getAttribute("data-canvas-modal-rights")) == null ? void 0 : d.trim()) == null ? "" : u,
		work: da(e),
		gallery: h
	};
}
function ma(e) {
	var t, n, r, i, o, s, c, l, u, d, f, p, m;
	let h = a(e, "data-modal");
	if (!h) return null;
	let g = e.querySelector(".fwm-modal__image"), _ = C(g), v = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, y = (r = e.closest(".w-dyn-item")) == null ? (i = e.closest(".w-embed")) == null ? void 0 : i.parentElement : r, b = y ? Array.from(y.querySelectorAll("[data-modal-rich-text]")).find((t) => t.closest(".w-dyn-item") === e.closest(".w-dyn-item")) : void 0, x = (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o;
	return b && (b.hidden = !0), {
		id: h,
		address: (c = (l = e.querySelector(".fwm-modal__address")) == null || (l = l.textContent) == null ? void 0 : l.trim()) == null ? "" : c,
		layout: "default",
		headline: "",
		image: _,
		imageSrcset: (u = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : u,
		imageAlt: (d = g == null ? void 0 : g.alt) == null ? "" : d,
		caption: v,
		html: x + ((f = b == null ? void 0 : b.innerHTML) == null ? "" : f),
		work: null,
		gallery: _ ? [{
			src: _,
			srcset: (p = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : p,
			alt: (m = g == null ? void 0 : g.alt) == null ? "" : m,
			caption: v
		}] : []
	};
}
function ha() {
	c(Ui).forEach((e) => {
		let t = pa(e);
		t && aa.set(t.id, t);
	}), c(Hi).forEach((e) => {
		let t = ma(e);
		t && aa.set(t.id, t), e.remove();
	});
}
function ga(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let r = c(Ui).find((e) => a(e, "data-modal-content") === n), i = r ? pa(r) : null;
	return i && aa.set(n, i), (t = i == null ? aa.get(n) : i) == null ? null : t;
}
function _a(e) {
	try {
		let t = new URL(e, document.baseURI).pathname.match(/^\/werke\/([^/]+)\/?$/);
		if (!t) return e;
		let n = new URL("/werk-ueberblick", document.baseURI);
		return n.searchParams.set("work", decodeURIComponent(t[1])), n.hash = "werke", `${n.pathname}${n.search}${n.hash}`;
	} catch (t) {
		return e;
	}
}
function va(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", _a(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.alt = e.thumbnailAlt;
		let n = Fi(Vi(e.thumbnail, e.thumbnailSrcset), e.thumbnail);
		Li(t, n, n === e.thumbnail ? void 0 : e.thumbnail), a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = Zi, o.append(e);
	}
	return i.append(o), i;
}
function ya(e) {
	let t = document.createElement("a"), n = document.createElement("img"), r = document.createElement("span"), i = document.createElement("span");
	return t.className = "fwm-modal__image-link", t.href = e.src, t.setAttribute("data-lightbox-src", e.src), t.setAttribute("data-lightbox-caption", e.caption), t.setAttribute("data-lightbox-alt", e.alt), t.classList.toggle("has-caption", e.caption.length > 0), n.className = "fwm-modal__image", n.alt = e.alt, zi(n, e.src, e.srcset, 500), r.className = "fwm-modal__lightbox-icon", r.setAttribute("aria-hidden", "true"), r.innerHTML = Xi, i.className = "fwm-modal__caption", i.textContent = e.caption, i.hidden = e.caption.length === 0, t.append(n, r, i), t;
}
function ba(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function xa(e, t) {
	e.innerHTML = t, e.querySelectorAll("img[src]").forEach((e) => Li(e)), e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function Sa(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? zi(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : Ri(e.image), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, xa(e.text, t.html), ba(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t) => e.gallery.append(ya(t)));
}
function Ca(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), Ri(e.image), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, xa(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(va(t.work)), o.forEach((t) => {
		e.gallery.append(ya(t));
	});
}
function wa(e) {
	let t = ca();
	return e.layout === "context" ? Ca(t, e) : Sa(t, e), t;
}
function Ta(e) {
	let t = [], n = (e, n) => {
		t.push(Pi(Di(e.src, e.srcset, n), e.src));
	};
	if (e.layout === "context") {
		var r, i;
		(r = e.work) != null && r.thumbnail && t.push(Pi(Vi(e.work.thumbnail, e.work.thumbnailSrcset), e.work.thumbnail)), ((i = e.gallery) != null && i.length ? e.gallery : e.image ? [{
			src: e.image,
			srcset: e.imageSrcset,
			alt: e.imageAlt,
			caption: e.caption
		}] : []).filter((t) => {
			var n;
			return t.src && t.src !== ((n = e.work) == null ? void 0 : n.thumbnail);
		}).forEach((e) => n(e, 500));
	} else {
		var a;
		if (e.image) {
			var o, s;
			t.push(Pi(Di(e.image, (o = e.imageSrcset) == null ? (s = e.gallery) == null || (s = s[0]) == null ? void 0 : s.srcset : o, 1080), e.image));
		}
		(a = e.gallery) == null || a.slice(1).filter((e) => e.src).forEach((e) => n(e, 500));
	}
	return t;
}
function Ea(e) {
	let t = m(e.panel)[0];
	g(t == null ? e.panel : t);
}
function Da(e) {
	ia !== null && (window.clearTimeout(ia), ia = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function Oa(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), ia = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), ia = null;
	}, f() ? 0 : Ji), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function ka(e, n) {
	var r, i, a, o, s, c, l, d, f, m, g, _, v, y;
	let b = {
		id: e.id.trim(),
		address: (r = e.address) == null ? "" : r,
		layout: (i = e.layout) == null ? "default" : i,
		headline: (a = e.headline) == null ? "" : a,
		image: (o = e.image) == null ? "" : o,
		imageSrcset: e.imageSrcset,
		imageAlt: (s = e.imageAlt) == null ? "" : s,
		caption: (c = e.caption) == null ? "" : c,
		html: (l = e.html) == null ? "" : l,
		rights: (d = e.rights) == null ? "" : d,
		work: (f = e.work) == null ? null : f,
		gallery: (m = e.gallery) != null && m.length ? e.gallery : e.image ? [{
			src: e.image,
			srcset: e.imageSrcset,
			alt: (g = e.imageAlt) == null ? "" : g,
			caption: (_ = e.caption) == null ? "" : _
		}] : []
	};
	if (!b.id || n && na === b.id && n === ra) return;
	na && ja(), aa.set(b.id, b);
	let x = n == null ? u() : n, S = ca();
	ia !== null && (window.clearTimeout(ia), ia = null, S.root.hidden = !0, S.root.classList.remove("is-active", "is-visible")), wa(b), ra = x, na = b.id, t("content_modal_opened", {
		content_id: b.id,
		layout: b.layout,
		gallery_count: (v = (y = b.gallery) == null ? void 0 : y.length) == null ? 0 : v,
		has_related_work: !!b.work
	}), Da(S), h(), Ea(S), p(S.root, "site:modal-open", {
		id: na,
		modal: S.root,
		content: b,
		trigger: n == null ? null : n
	});
}
function Aa(e, t) {
	let n = ga(e);
	n && ka(n, t);
}
function ja() {
	if (!na || !ta) return;
	let e = na, t = ra;
	Oa(ta), i(), na = "", ra = null, p(ta.root, "site:modal-close", {
		id: e,
		modal: ta.root
	}), n(t);
}
function Ma(e) {
	if (!(!na || !ta) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), ja();
			return;
		}
		x(ta.panel, e);
	}
}
function Na(e) {
	if (!$i || !na || !ta) return;
	let t = e.target;
	!o(t) || t !== ta.root || ja();
}
function Pa(e) {
	var t;
	if ($i = (t = e.closeOnBackdrop) == null || t, ea = e.i18n, ha(), ca(), !Qi) {
		let e = (e) => {
			let t = ga(e.matches(Wi) ? r(e, "data-modal-open") : oa(e));
			t && Ta(t);
		};
		for (let t of [
			"pointerover",
			"pointerdown",
			"focusin"
		]) v(document, t, `${Wi}, ${Ki}`, (t, n) => {
			e(n);
		});
		v(document, "click", `${Wi}, ${Ki}`, (e, t) => {
			e.preventDefault(), Aa(t.matches(Wi) ? r(t, "data-modal-open") : oa(t), t);
		}), v(document, "click", Gi, (e, t) => {
			ta != null && ta.root.contains(t) && (e.preventDefault(), ja());
		}), document.addEventListener("click", Na), document.addEventListener("keydown", Ma), Qi = !0;
	}
	return {
		openModal: Aa,
		openContentModal: ka,
		closeModal: ja
	};
}
//#endregion
//#region src/modules/page-transition.ts
var Fa = {
	titleStart: 240,
	navigate: 720,
	hold: 416,
	uncoverStart: 776,
	reset: 1976,
	watchdog: 6e3
}, Ia = [
	".top_bar_section",
	".werk_hero_dots",
	".werk_hero_slide .u-slide-info"
], La = {
	delay: 225,
	stagger: 125,
	fade: 700,
	menuGap: 80,
	menu: 550
}, Ra = {
	fade: 1200,
	easing: "ease-in-out"
}, za = "pt", Ba = "[data-page-transition-overlay], .page-transition-overlay", Va = "is-page-transition-pending", Ha = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), Ua = !1, Wa = !1, Ga = [];
function Ka(e, t) {
	Ga.push(window.setTimeout(e, t));
}
function qa() {
	Ga.forEach((e) => window.clearTimeout(e)), Ga = [];
}
function Ja() {
	try {
		var e;
		return (e = window.sessionStorage.getItem(za)) == null ? "" : e;
	} catch (e) {
		return "";
	}
}
function Ya() {
	try {
		window.sessionStorage.removeItem(za);
	} catch (e) {}
	document.documentElement.classList.remove(Va, "is-page-transition-boot");
}
function Xa() {
	var e;
	let t = document.querySelector(Ba);
	if (t || (t = document.createElement("div"), document.body.append(t)), t.classList.add("curtain", "page-transition-overlay"), t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), !t.querySelector(".page-transition-overlay__title")) {
		let e = document.createElement("span");
		e.className = "page-transition-overlay__title", t.append(e);
	}
	return (e = t.querySelector(".page-transition-overlay__title")) == null || e.setAttribute("aria-live", "polite"), t;
}
function Za(e, t) {
	var n, r, i, a;
	let o = (e) => {
		var t;
		return (t = e == null ? void 0 : e.replace(/\s+/g, " ").trim()) == null ? "" : t;
	}, s = o(t.getAttribute("data-page-name") || t.getAttribute("data-transition-title") || ((n = t.closest("[data-page-name], [data-transition-title]")) == null ? void 0 : n.getAttribute("data-page-name")) || ((r = t.closest("[data-transition-title]")) == null ? void 0 : r.getAttribute("data-transition-title")));
	if (s) return s;
	let c = e.pathname.replace(/\/$/, "") || "/", l = Array.from(document.querySelectorAll("[data-site-menu-link][href]")).find((e) => {
		try {
			return (new URL(e.href).pathname.replace(/\/$/, "") || "/") === c;
		} catch (e) {
			return !1;
		}
	}), u = o((l == null ? void 0 : l.getAttribute("data-site-menu-label")) || (l == null ? void 0 : l.textContent));
	if (u) return u;
	let d = t.closest("article, [class*=\"card\"]"), f = o(((i = t.querySelector("h1, h2, h3, h4")) == null ? void 0 : i.textContent) || (d == null || (a = d.querySelector("h1, h2, h3, h4")) == null ? void 0 : a.textContent));
	if (f) return f;
	let p = o(t.textContent);
	if (p && p.length <= 60 && !/^(mehr|weiter|lesen|details|öffnen)/i.test(p)) return p;
	let m = e.pathname.split("/").filter(Boolean).pop();
	if (!m) return "Startseite";
	try {
		return decodeURIComponent(m).replace(/[-_]+/g, " ");
	} catch (e) {
		return m.replace(/[-_]+/g, " ");
	}
}
function Qa() {
	return document.querySelector("main, [role=\"main\"]");
}
function $a(e) {
	return !!(e && !e.querySelector("canvas, iframe, video, [data-animation-type=\"spline\"]"));
}
function eo(e) {
	var t;
	let n = e == null ? void 0 : e.querySelector("h1");
	if (!n || n.matches("[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading") || n.children.length || !((t = n.textContent) != null && t.trim())) return;
	let r = n.textContent.trim().split(/\s+/);
	n.setAttribute("data-reveal", "off"), n.setAttribute("aria-label", r.join(" ")), n.textContent = "", r.forEach((e, t) => {
		t && n.append(document.createTextNode(" "));
		let r = document.createElement("span");
		r.className = "page-transition-word-mask", r.setAttribute("aria-hidden", "true");
		let i = document.createElement("span");
		i.className = "page-transition-word", i.style.setProperty("--word-index", String(t)), i.textContent = e, r.append(i), n.append(r);
	}), n.classList.add("is-page-transition-heading");
}
function to(e) {
	e && (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), e.addEventListener("blur", () => e.removeAttribute("tabindex"), { once: !0 })), e.focus({ preventScroll: !0 }));
}
function no(e, t) {
	qa(), e.classList.add("is-resetting"), e.classList.remove("is-covering", "is-covered", "is-title-visible", "is-title-leaving", "is-uncovering"), e.setAttribute("aria-hidden", "true"), t == null || t.classList.remove("is-page-transition-out", "is-page-transition-in", "is-page-transition-entered"), document.documentElement.classList.remove("is-page-transition-entering", "is-page-transition-covering"), Ya(), Wa = !1, window.requestAnimationFrame(() => e.classList.remove("is-resetting"));
}
function ro(e, t) {
	var n, r;
	if (Wa = !0, f()) {
		to(t), no(e, t);
		return;
	}
	let i = e.querySelector(".page-transition-overlay__title");
	i && (i.textContent = Ja()), e.setAttribute("aria-hidden", "false"), e.classList.add("is-covered", "is-title-visible"), $a(t) && t.classList.add("is-page-transition-in"), document.documentElement.classList.add("is-page-transition-entering"), window.location.pathname !== "/" && eo(t), ((n = (r = document.fonts) == null ? void 0 : r.ready) == null ? Promise.resolve() : n).catch(() => void 0).then(() => {
		Ka(() => e.classList.add("is-title-leaving"), Fa.hold), Ka(() => {
			var n;
			e.classList.add("is-uncovering"), t == null || t.classList.add("is-page-transition-entered"), t == null || (n = t.querySelector(".is-page-transition-heading")) == null || n.classList.add("is-revealing");
		}, Fa.uncoverStart), Ka(() => {
			to(t), no(e, t);
		}, Fa.reset);
	});
}
function io(e, t, n, r) {
	Wa = !0;
	let i = t.querySelector(".page-transition-overlay__title");
	i && (i.textContent = r), t.setAttribute("aria-hidden", "false");
	try {
		window.sessionStorage.setItem(za, r);
	} catch (e) {}
	document.documentElement.classList.add("is-page-transition-covering"), t.classList.add("is-covering"), $a(n) && n.classList.add("is-page-transition-out"), Ka(() => t.classList.add("is-title-visible"), Fa.titleStart), Ka(() => {
		window.location.href = e.href;
	}, Fa.navigate), Ka(() => {
		window.location.href = e.href;
	}, Fa.watchdog);
}
function ao() {
	var e;
	if (!((e = window.__sitePreloader) != null && e.active) || f()) return;
	let t = Ia.map((e) => Array.from(document.querySelectorAll(e))), n = Array.from(document.querySelectorAll("[data-site-menu]"));
	[...t.flat(), ...n].forEach((e) => {
		e.style.opacity = "0";
	}), w(() => {
		let e = window.location.pathname === "/", r = e ? Ra.fade : La.fade, i = (e, t, n, r, i = "cubic-bezier(.05, .85, .05, 1)") => {
			if (!e.animate) {
				e.style.removeProperty("opacity");
				return;
			}
			let a = e.animate(t, {
				duration: r,
				delay: n,
				easing: i,
				fill: "forwards"
			});
			a.onfinish = () => {
				e.style.removeProperty("opacity"), a.cancel();
			};
		};
		t.forEach((t, n) => {
			t.forEach((t) => i(t, [{ opacity: 0 }, { opacity: 1 }], La.delay + n * La.stagger, r, e ? Ra.easing : void 0));
		});
		let a = t.reduce((e, t, n) => t.length ? n : e, -1), o = a < 0 ? 0 : La.delay + a * La.stagger + r + La.menuGap;
		n.forEach((e) => {
			let t = Math.max(0, window.innerHeight - e.getBoundingClientRect().top) + 8;
			i(e, [{
				opacity: 1,
				transform: `translate3d(0, ${t}px, 0)`
			}, {
				opacity: 1,
				transform: "translate3d(0, 0, 0)"
			}], o, La.menu);
		});
	});
}
function oo() {
	if (Ua) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", oo, { once: !0 });
		return;
	}
	Ua = !0;
	let e = Xa(), t = Qa();
	Ja() && document.documentElement.classList.contains(Va) ? ro(e, t) : ao(), document.addEventListener("click", (n) => {
		var r;
		let i = n.target instanceof Element ? n.target.closest("a[href]") : null;
		if (!i || n.defaultPrevented || d(n)) return;
		if (Wa) {
			n.preventDefault();
			return;
		}
		if (i.closest(Ha) || i.target && i.target !== "_self") return;
		let a = _(i);
		!a || a.hash || f() || (r = window.__sitePreloader) != null && r.active || (n.preventDefault(), io(a, e, t, Za(a, i)));
	}, !0), window.addEventListener("pageshow", (n) => {
		n.persisted && no(e, t);
	});
}
//#endregion
//#region src/modules/parallax.ts
var so = "[data-parallax]", co = "data-parallax", lo = "data-parallax-ready", uo = "fw-parallax-window", fo = "fw-parallax-window--self-sized", po = "fw-parallax-inner", mo = 60, ho = 160, go = ".site-lightbox-trigger", _o = 1, vo = !1;
function yo() {
	vo || (vo = !0, S.registerPlugin($));
}
function bo(e) {
	let t = e.getAttribute(co);
	if (t === null || t.trim() === "") return mo;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.sign(n) * Math.min(Math.abs(n), ho) : mo;
}
function xo(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function So(e, t) {
	var n;
	let r = (n = e.closest(go)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(uo)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(uo);
	let a = document.createElement("span"), o = Math.abs(t) / 2 + _o;
	if (a.className = po, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(uo), null;
		r.classList.add(fo), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function Co(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : c("img", e);
	if (n.length === 0) {
		S.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: wo(e)
		});
		return;
	}
	n.forEach((n) => {
		xo(n).then(() => {
			if (!n.isConnected) return;
			let r = So(n, t);
			r && (S.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: wo(e)
			}), $.refresh());
		});
	});
}
function wo(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function To(e = document) {
	let t = c(so, e).filter((e) => !e.hasAttribute(lo));
	t.length === 0 || f() || (yo(), t.forEach((e) => {
		let t = bo(e);
		t !== 0 && (e.setAttribute(lo, ""), Co(e, t));
	}));
}
//#endregion
//#region node_modules/gsap/utils/paths.js
var Eo = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, Do = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, Oo = Math.PI / 180;
180 / Math.PI;
var ko = Math.sin, Ao = Math.cos, jo = Math.abs, Mo = Math.sqrt, No = function(e) {
	return typeof e == "number";
}, Po = 1e5, Fo = function(e) {
	return Math.round(e * Po) / Po || 0;
}, Io = function(e) {
	return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001;
};
function Lo(e, t, n, r, i, a, o) {
	for (var s = e.length, c, l, u, d, f; --s > -1;) for (c = e[s], l = c.length, u = 0; u < l; u += 2) d = c[u], f = c[u + 1], c[u] = d * t + f * r + a, c[u + 1] = d * n + f * i + o;
	return e._dirty = 1, e;
}
function Ro(e, t, n, r, i, a, o, s, c) {
	if (!(e === s && t === c)) {
		n = jo(n), r = jo(r);
		var l = i % 360 * Oo, u = Ao(l), d = ko(l), f = Math.PI, p = f * 2, m = (e - s) / 2, h = (t - c) / 2, g = u * m + d * h, _ = -d * m + u * h, v = g * g, y = _ * _, b = v / (n * n) + y / (r * r);
		b > 1 && (n = Mo(b) * n, r = Mo(b) * r);
		var x = n * n, S = r * r, C = (x * S - x * y - S * v) / (x * y + S * v);
		C < 0 && (C = 0);
		var w = (a === o ? -1 : 1) * Mo(C), T = w * (n * _ / r), E = w * -(r * g / n), D = (e + s) / 2, O = (t + c) / 2, ee = D + (u * T - d * E), k = O + (d * T + u * E), A = (g - T) / n, j = (_ - E) / r, te = (-g - T) / n, M = (-_ - E) / r, ne = A * A + j * j, re = (j < 0 ? -1 : 1) * Math.acos(A / Mo(ne)), ie = (A * M - j * te < 0 ? -1 : 1) * Math.acos((A * te + j * M) / Mo(ne * (te * te + M * M)));
		isNaN(ie) && (ie = f), !o && ie > 0 ? ie -= p : o && ie < 0 && (ie += p), re %= p, ie %= p;
		var ae = Math.ceil(jo(ie) / (p / 4)), oe = [], se = ie / ae, N = 4 / 3 * ko(se / 2) / (1 + Ao(se / 2)), P = u * n, F = d * n, ce = d * -r, le = u * r, I;
		for (I = 0; I < ae; I++) i = re + I * se, g = Ao(i), _ = ko(i), A = Ao(i += se), j = ko(i), oe.push(g - N * _, _ + N * g, A + N * j, j - N * A, A, j);
		for (I = 0; I < oe.length; I += 2) g = oe[I], _ = oe[I + 1], oe[I] = g * P + _ * ce + ee, oe[I + 1] = g * F + _ * le + k;
		return oe[I - 2] = s, oe[I - 1] = c, oe;
	}
}
function zo(e) {
	var t = (e + "").replace(Do, function(e) {
		var t = +e;
		return t < 1e-4 && t > -1e-4 ? 0 : t;
	}).match(Eo) || [], n = [], r = 0, i = 0, a = 2 / 3, o = t.length, s = 0, c = "ERROR: malformed path: " + e, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w = function(e, t, n, r) {
		v = (n - e) / 3, y = (r - t) / 3, h.push(e + v, t + y, n - v, r - y, n, r);
	};
	if (!e || !isNaN(t[0]) || isNaN(t[1])) return console.log(c), n;
	for (l = 0; l < o; l++) if (x = p, isNaN(t[l]) ? (p = t[l].toUpperCase(), m = p !== t[l]) : l--, d = +t[l + 1], f = +t[l + 2], m && (d += r, f += i), l || (g = d, _ = f), p === "M") h && (h.length < 8 ? --n.length : s += h.length, Io(h)), r = g = d, i = _ = f, h = [d, f], n.push(h), l += 2, p = "L";
	else if (p === "C") h || (h = [0, 0]), m || (r = i = 0), h.push(d, f, r + t[l + 3] * 1, i + t[l + 4] * 1, r += t[l + 5] * 1, i += t[l + 6] * 1), l += 6;
	else if (p === "S") v = r, y = i, (x === "C" || x === "S") && (v += r - h[h.length - 4], y += i - h[h.length - 3]), m || (r = i = 0), h.push(v, y, d, f, r += t[l + 3] * 1, i += t[l + 4] * 1), l += 4;
	else if (p === "Q") v = r + (d - r) * a, y = i + (f - i) * a, m || (r = i = 0), r += t[l + 3] * 1, i += t[l + 4] * 1, h.push(v, y, r + (d - r) * a, i + (f - i) * a, r, i), l += 4;
	else if (p === "T") v = r - h[h.length - 4], y = i - h[h.length - 3], h.push(r + v, i + y, d + (r + v * 1.5 - d) * a, f + (i + y * 1.5 - f) * a, r = d, i = f), l += 2;
	else if (p === "H") w(r, i, r = d, i), l += 1;
	else if (p === "V") w(r, i, r, i = d + (m ? i - r : 0)), l += 1;
	else if (p === "L" || p === "Z") p === "Z" && (d = g, f = _, h.closed = !0), (p === "L" || jo(r - d) > .5 || jo(i - f) > .5) && (w(r, i, d, f), p === "L" && (l += 2)), r = d, i = f;
	else if (p === "A") {
		if (S = t[l + 4], C = t[l + 5], v = t[l + 6], y = t[l + 7], u = 7, S.length > 1 && (S.length < 3 ? (y = v, v = C, u--) : (y = C, v = S.substr(2), u -= 2), C = S.charAt(1), S = S.charAt(0)), b = Ro(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +S, +C, (m ? r : 0) + v * 1, (m ? i : 0) + y * 1), l += u, b) for (u = 0; u < b.length; u++) h.push(b[u]);
		r = h[h.length - 2], i = h[h.length - 1];
	} else console.log(c);
	return l = h.length, l < 6 ? (n.pop(), l = 0) : Io(h), n.totalPoints = s + l, n;
}
function Bo(e) {
	No(e[0]) && (e = [e]);
	var t = "", n = e.length, r, i, a, o;
	for (i = 0; i < n; i++) {
		for (o = e[i], t += "M" + Fo(o[0]) + "," + Fo(o[1]) + " C", r = o.length, a = 2; a < r; a++) t += Fo(o[a++]) + "," + Fo(o[a++]) + " " + Fo(o[a++]) + "," + Fo(o[a++]) + " " + Fo(o[a++]) + "," + Fo(o[a]) + " ";
		o.closed && (t += "z");
	}
	return t;
}
//#endregion
//#region node_modules/gsap/CustomEase.js
var Vo, Ho, Uo = function() {
	return Vo || typeof window < "u" && (Vo = window.gsap) && Vo.registerPlugin && Vo;
}, Wo = function() {
	Vo = Uo(), Vo ? (Vo.registerEase("_CE", $o.create), Ho = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
}, Go = 0x56bc75e2d63100000, Ko = function(e) {
	return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3;
}, qo = 1, Jo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, Yo = /[cLlsSaAhHvVtTqQ]/g, Xo = function(e) {
	var t = e.length, n = Go, r;
	for (r = 1; r < t; r += 6) +e[r] < n && (n = +e[r]);
	return n;
}, Zo = function(e, t, n) {
	!n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
	var r = e[0] * -1, i = -n, a = e.length, o = 1 / (+e[a - 2] + r), s = -t || (Math.abs(e[a - 1] - +e[1]) < .01 * (e[a - 2] - +e[0]) ? Xo(e) + i : +e[a - 1] + i), c;
	for (s = s ? 1 / s : -o, c = 0; c < a; c += 2) e[c] = (+e[c] + r) * o, e[c + 1] = (+e[c + 1] + i) * s;
}, Qo = function e(t, n, r, i, a, o, s, c, l, u, d) {
	var f = (t + r) / 2, p = (n + i) / 2, m = (r + a) / 2, h = (i + o) / 2, g = (a + s) / 2, _ = (o + c) / 2, v = (f + m) / 2, y = (p + h) / 2, b = (m + g) / 2, x = (h + _) / 2, S = (v + b) / 2, C = (y + x) / 2, w = s - t, T = c - n, E = Math.abs((r - s) * T - (i - c) * w), D = Math.abs((a - s) * T - (o - c) * w), O;
	return u || (u = [{
		x: t,
		y: n
	}, {
		x: s,
		y: c
	}], d = 1), u.splice(d || u.length - 1, 0, {
		x: S,
		y: C
	}), (E + D) * (E + D) > l * (w * w + T * T) && (O = u.length, e(t, n, f, p, v, y, S, C, l, u, d), e(S, C, b, x, g, _, s, c, l, u, d + 1 + (u.length - O))), u;
}, $o = /*#__PURE__*/ function() {
	function e(e, t, n) {
		Ho || Wo(), this.id = e, qo && this.setData(t, n);
	}
	var t = e.prototype;
	return t.setData = function(e, t) {
		t = t || {}, e = e || "0,0,1,1";
		var n = e.match(Jo), r = 1, i = [], a = [], o = t.precision || 1, s = o <= 1, c, l, u, d, f, p, m, h, g;
		if (this.data = e, (Yo.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (n = zo(e)[0]), c = n.length, c === 4) n.unshift(0, 0), n.push(1, 1), c = 8;
		else if ((c - 2) % 6) throw "Invalid CustomEase";
		for ((+n[0] != 0 || +n[c - 2] != 1) && Zo(n, t.height, t.originY), this.segment = n, d = 2; d < c; d += 6) l = {
			x: +n[d - 2],
			y: +n[d - 1]
		}, u = {
			x: +n[d + 4],
			y: +n[d + 5]
		}, i.push(l, u), Qo(l.x, l.y, +n[d], +n[d + 1], +n[d + 2], +n[d + 3], u.x, u.y, 1 / (o * 2e5), i, i.length - 1);
		for (c = i.length, d = 0; d < c; d++) m = i[d], h = i[d - 1] || m, (m.x > h.x || h.y !== m.y && h.x === m.x || m === h) && m.x <= 1 ? (h.cx = m.x - h.x, h.cy = m.y - h.y, h.n = m, h.nx = m.x, s && d > 1 && Math.abs(h.cy / h.cx - i[d - 2].cy / i[d - 2].cx) > 2 && (s = 0), h.cx < r && (h.cx ? r = h.cx : (h.cx = .001, d === c - 1 && (h.x -= .001, r = Math.min(r, .001), s = 0)))) : (i.splice(d--, 1), c--);
		if (c = 1 / r + 1 | 0, f = 1 / c, p = 0, m = i[0], s) {
			for (d = 0; d < c; d++) g = d * f, m.nx < g && (m = i[++p]), l = m.y + (g - m.x) / m.cx * m.cy, a[d] = {
				x: g,
				cx: f,
				y: l,
				cy: 0,
				nx: 9
			}, d && (a[d - 1].cy = l - a[d - 1].y);
			p = i[i.length - 1], a[c - 1].cy = p.y - l, a[c - 1].cx = p.x - a[a.length - 1].x;
		} else {
			for (d = 0; d < c; d++) m.nx < d * f && (m = i[++p]), a[d] = m;
			p < i.length - 1 && (a[d - 1] = i[i.length - 2]);
		}
		return this.ease = function(e) {
			var t = a[e * c | 0] || a[c - 1];
			return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy;
		}, this.ease.custom = this, this.id && Vo && Vo.registerEase(this.id, this.ease), this;
	}, t.getSVGData = function(t) {
		return e.getSVGData(this, t);
	}, e.create = function(t, n, r) {
		return new e(t, n, r).ease;
	}, e.register = function(e) {
		Vo = e, Wo();
	}, e.get = function(e) {
		return Vo.parseEase(e);
	}, e.getSVGData = function(t, n) {
		n = n || {};
		var r = n.width || 100, i = n.height || 100, a = n.x || 0, o = (n.y || 0) + i, s = Vo.utils.toArray(n.path)[0], c, l, u, d, f, p, m, h, g, _;
		if (n.invert && (i = -i, o = 0), typeof t == "string" && (t = Vo.parseEase(t)), t.custom && (t = t.custom), t instanceof e) c = Bo(Lo([t.segment.slice(0)], r, 0, 0, -i, a, o));
		else {
			for (c = [a, o], m = Math.max(5, (n.precision || 1) * 200), d = 1 / m, m += 2, h = 5 / m, g = Ko(a + d * r), _ = Ko(o + t(d) * -i), l = (_ - o) / (g - a), u = 2; u < m; u++) f = Ko(a + u * d * r), p = Ko(o + t(u * d) * -i), (Math.abs((p - _) / (f - g) - l) > h || u === m - 1) && (c.push(g, _), l = (p - _) / (f - g)), g = f, _ = p;
			c = "M" + c.join(",");
		}
		return s && s.setAttribute("d", c), c;
	}, e;
}();
$o.version = "3.15.0", $o.headless = !0, Uo() && Vo.registerPlugin($o);
//#endregion
//#region src/modules/site-menu.ts
var es = "[data-site-menu]", ts = "[data-site-menu-panel]", ns = "[data-site-menu-toggle]", rs = "[data-site-menu-toggle-label]", is = "[data-site-menu-toggle-label-text]", as = "[data-site-menu-toggle-label-ghost]", os = "data-site-menu-toggle-label-text", ss = "data-site-menu-toggle-label-ghost", cs = "[data-site-menu-link]", ls = "[data-site-menu-indicator]", us = "is-active", ds = "is-open", fs = "is-ready", ps = "data-site-menu-open-label", ms = "data-site-menu-closed-label", hs = "data-site-menu-current-key", gs = "data-site-menu-label", _s = "data-site-menu-key", vs = "data-site-menu-original-tabindex", ys = "CLOSE", bs = "MENU", xs = .42, Ss = {
	open: .513,
	close: .378,
	transition: .54
};
S.registerPlugin($o);
var Cs = $o.create("site-menu-panel", "0.7,0,0.08,1"), ws = [], Ts = !1;
function Es(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Ds(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = a(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Es(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Os(e, t) {
	return t ? a(e, _s) === t : !1;
}
function ks(e, t) {
	var n, r;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Os(e, a(t, hs) || ((n = document.documentElement.getAttribute(hs)) == null ? void 0 : n.trim()) || ((r = document.body.getAttribute(hs)) == null ? void 0 : r.trim()) || "")) return !0;
	let i = Ds(e);
	return i ? i === Es(window.location.pathname) : !1;
}
function As(e) {
	var t, n;
	return a(e, gs) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function js(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(us) || e.classList.contains("w--current"))) == null ? e.links.find((t) => ks(t, e.root)) : t;
	return n ? As(n) : "";
}
function Ms(e) {
	var t, n;
	let r = (t = e.toggleLabel) == null ? e.toggle : t, i = r.style.width, o = !0, s = 0, c = document.createElement("span");
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
	].join(";"), r.append(c);
	let l = () => {
		if (!o) return;
		let t = [
			js(e),
			a(e.root, ms) || bs,
			a(e.root, ps) || ys
		];
		c.textContent = "";
		let n = t.reduce((e, t) => (c.textContent = t, Math.max(e, c.getBoundingClientRect().width)), 0);
		n > 0 && (r.style.width = `${Math.ceil(n)}px`);
	}, u = () => {
		s && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
			s = 0, l();
		});
	};
	return l(), window.addEventListener("resize", u), (n = document.fonts) == null || n.ready.then(l), () => {
		o = !1, window.removeEventListener("resize", u), s && cancelAnimationFrame(s), c.remove(), r.style.width = i;
	};
}
function Ns(e) {
	var t, n;
	let r = l(is, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(os, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Ps(e) {
	c(as, e).forEach((e) => {
		S.killTweensOf(e), e.remove();
	});
}
function Fs(e, t = !0) {
	var n, r;
	let i = a(e.root, ps) || ys, o = a(e.root, ms) || bs, s = js(e), c = e.isOpen ? i : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, u = Ns(l), d = (r = u.textContent) == null ? "" : r, p = e.labelTransition;
	if (p && t && window.location.pathname !== "/" && !f()) {
		if (c === p.from) {
			p.timeline.reverse();
			return;
		}
		if (c === p.to) {
			p.timeline.play();
			return;
		}
	}
	if (d === c && !p) return;
	let m = p && p.timeline.progress() < .5 ? p.from : d;
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, S.killTweensOf(u), Ps(l), S.set(u, { clearProps: "transform,opacity" }), u.removeAttribute("aria-hidden"), window.location.pathname === "/" || f() || !t || !m || m === c) {
		u.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(ss, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), u.textContent = c;
	let g = S.timeline({
		defaults: {
			duration: xs,
			ease: "power2.inOut"
		},
		onUpdate: () => {
			let e = g.reversed();
			u.setAttribute("aria-hidden", String(e)), h.setAttribute("aria-hidden", String(!e));
		}
	});
	g.fromTo(h, { yPercent: 0 }, { yPercent: -100 }, 0), g.fromTo(u, { yPercent: 100 }, { yPercent: 0 }, 0), e.labelTransition = {
		timeline: g,
		from: m,
		to: c
	};
}
function Is(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = a(e, vs);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(vs) && e.hasAttribute("tabindex") && e.setAttribute(vs, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Ls(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(ds, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Is(e, t), Fs(e, n);
}
function Rs(e, t, n) {
	S.killTweensOf(e.panel), S.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	if (!f()) return S.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? Ss.open : Ss.close,
		ease: Cs,
		onComplete: () => {
			S.set(e.panel, { clearProps: "height" });
		}
	});
}
function zs(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Ls(e, !0), Rs(e, !0, t);
}
function Bs(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return Ls(e, !1), Rs(e, !1, t);
}
function Vs(e) {
	e.isOpen ? Bs(e) : zs(e);
}
function Hs(e) {
	e.links.forEach((t) => {
		let n = ks(t, e.root), r = l(ls, t);
		t.classList.toggle(us, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function Us(e) {
	var t;
	let n = l(ts, e), r = l(ns, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = l(rs, r)) == null ? l(rs, e) : t,
		links: c(cs, e),
		isOpen: e.classList.contains(ds),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${ws.length + 1}`), r.setAttribute("aria-controls", n.id), Hs(i), Ls(i, i.isOpen, !1), i.cleanup.push(Ms(i)), e.classList.add(fs);
	let a = (e) => {
		e.preventDefault(), Vs(i);
	}, o = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || Bs(i);
	}, s = (e) => {
		e.key !== "Escape" || !i.isOpen || (Bs(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(cs) || Bs(i);
	}, d = () => {
		i.isHovered = !0, Fs(i);
	}, f = () => {
		i.isHovered = !1, Fs(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", o), document.addEventListener("keydown", s), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", o), () => document.removeEventListener("keydown", s), () => e.removeEventListener("click", u)), i;
}
function Ws(e = document) {
	if (Ts && e === document) return () => void 0;
	e === document && (Ts = !0);
	let t = c(es, e).map(Us).filter((e) => !!e);
	return ws.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(fs, ds);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = l(is, r);
			(n = e.labelTransition) == null || n.timeline.kill(), S.killTweensOf(e.panel), S.killTweensOf(r), Ps(r), i && (S.killTweensOf(i), r.textContent = i.textContent), S.set(e.panel, { clearProps: "height" }), S.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Is(e, !0);
		});
	};
}
//#endregion
//#region src/modules/more-arrows.ts
var Gs = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function Ks(e) {
	var t, n;
	if (!/^mehr\s+erfahren$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = Gs);
}
function qs(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && Ks(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(Ks);
}
function Js() {
	qs(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && qs(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/outlined-buttons.ts
var Ys = ".btn, .button-outlined";
function Xs() {
	let e = /* @__PURE__ */ new WeakSet();
	function t(t) {
		if (!e.has(t)) {
			if (e.add(t), !t.querySelector(":scope > .f, :scope > .button-mask")) {
				let e = document.createElement("i");
				e.className = "f", e.setAttribute("aria-hidden", "true"), t.prepend(e);
			}
			for (let e of Array.from(t.childNodes)) {
				var n;
				if (e.nodeType !== Node.TEXT_NODE || !((n = e.textContent) != null && n.trim())) continue;
				let t = document.createElement("span");
				e.replaceWith(t), t.append(e);
			}
		}
	}
	function n(e) {
		e instanceof HTMLElement && e.matches(Ys) && t(e), e.querySelectorAll(Ys).forEach(t);
	}
	n(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof HTMLElement && n(e);
	}).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/spline-slider.ts
var Zs = ".werk_hero_slider", Qs = ".werk_hero_track";
function $s(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function ec(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function tc(e) {
	let t = e.closest(Zs), n = t == null ? void 0 : t.querySelector(Qs);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = $s(e, n), i = ec(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function nc(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function rc(e, t) {
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
function ic(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function ac(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function oc(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function sc(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function cc(e, t) {
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
function lc() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return ic(e, t);
				let r = new Image();
				return r.src = e, rc(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = oc(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = ac(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || sc(n) ? "critical" : "warm" : i,
			load: (e) => rc(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && tc(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = ac(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = oc(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => cc(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", cc(r, e))
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
			let t = ac(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => nc(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function uc(e) {
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
async function dc(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await nc(a.shift().load(n.signal), n.signal);
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
var fc = /* @__PURE__ */ new WeakSet(), pc = 6800, mc = 600, hc = 500, gc = 1300;
function _c(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function vc(e) {
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
function yc(e, t) {
	var n, r;
	if (!Number.isFinite(t)) return;
	let i = Math.max(Number(e.getAttribute("aria-valuenow")) || 0, Math.min(100, Math.max(0, Math.round(t))));
	e.setAttribute("aria-valuenow", String(i)), (n = window.__sitePreloader) == null || (r = n.setSignatureIndex) == null || r.call(n, Math.min(6, Math.floor(i / 100 * 7)));
	let a = String(i).padStart(3, "0");
	e.querySelectorAll(".site-preloader__digit").forEach((e, t) => {
		var n;
		let r = e.firstElementChild, o = r.children[0], s = r.children[1], c = a[t], l = e.hidden;
		if (e.hidden = t < 3 - String(i).length, r.dataset.value !== c) {
			if (S.killTweensOf(r), o.textContent = (n = r.dataset.value) == null ? o.textContent : n, r.dataset.value = c, s.textContent = c, S.set(r, {
				yPercent: 0,
				y: 0
			}), f() || l || e.hidden) {
				o.textContent = c;
				return;
			}
			S.to(r, {
				yPercent: -50,
				y: 0,
				duration: .065,
				ease: "power2.out",
				onComplete: () => {
					o.textContent = c, S.set(r, {
						yPercent: 0,
						y: 0
					});
				}
			});
		}
	});
}
function bc(e) {
	let t = f(), n = !1, r = !1, i = 0, a = 0, o, s = new Promise((e) => {
		o = e;
	}), c = (t) => {
		if (n) return;
		let r = Math.min(1, (t - a) / pc);
		yc(e, (.6 * r + .4 * _c(r)) * 100), r === 1 ? o() : i = window.requestAnimationFrame(c);
	};
	return {
		start: () => {
			r || n || (r = !0, a = performance.now(), t ? (yc(e, 100), o()) : i = window.requestAnimationFrame(c));
		},
		complete: s,
		stop: () => {
			n = !0, window.cancelAnimationFrame(i);
		}
	};
}
function xc(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function Sc(e) {
	return document.readyState === "complete" || e.aborted ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			window.removeEventListener("load", n), e.removeEventListener("abort", n), t();
		};
		window.addEventListener("load", n, { once: !0 }), e.addEventListener("abort", n, { once: !0 });
	});
}
async function Cc(e, t) {
	t.aborted || (document.documentElement.classList.add(E), e.classList.add("is-fading"), await xc(f() ? 0 : hc, t), !t.aborted && (e.classList.add("is-curtain"), await xc(f() ? 0 : gc, t)));
}
function wc() {
	var e, t;
	let n = window.__sitePreloader;
	if (!(n != null && n.active) || fc.has(n)) return;
	fc.add(n);
	let r = document.querySelector(T);
	if (!r) {
		n.release();
		return;
	}
	let i = new AbortController(), a = bc(r);
	(e = n.allowExit) == null || e.call(n), ((t = n.introReady) == null ? Promise.resolve() : t).then(() => {
		n.active && a.start();
	}), n.cleanup.push(() => {
		i.abort(), a.stop();
		let e = r.querySelectorAll(".site-preloader__track");
		e.length && S.killTweensOf(e);
	});
	let o = async () => {
		if (await uc(i.signal), !n.active) return;
		let e = lc(), t = e.filter((e) => e.priority === "critical");
		await Promise.all(t.map(async (e) => {
			await nc(Promise.resolve().then(() => e.load(i.signal)), i.signal);
		})), n.active && (await vc(i.signal), n.active && (await n.introReady, n.active && (await Promise.all([a.complete, Sc(i.signal)]), n.active && (await xc(f() ? 0 : Math.max(0, D - (Date.now() - n.startedAt)), i.signal), n.active && (await xc(f() ? 0 : mc, i.signal), n.active && (await Cc(r, i.signal), n.active && (n.release(), dc(e))))))));
	}, s = () => {
		o().catch(n.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Tc = !1, Ec = !1;
function Dc() {
	if (Ec || f()) return;
	Ec = !0;
	let e, t = () => {
		let t = window.lenis;
		if (Tc || !window.__siteLenisManaged || !t) return;
		Tc = !0, S.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		S.ticker.add(n), S.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			S.ticker.remove(n), t.off("scroll", $.update), Tc = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), Tc || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/modules/home-image-wipe.ts
var Oc = ".news_event .intro_img, .about_section .about_img, [data-wm-home] .map_info", kc = "data-home-image-wipe", Ac = 1300;
function jc() {
	var e;
	if (!document.querySelector(".werk_hero_section") || !document.querySelector(".about_section") || f()) return;
	let t = getComputedStyle(document.documentElement).getPropertyValue("--eo").trim() || "cubic-bezier(.05, .85, .05, 1)", n = /* @__PURE__ */ new Set(), r = !((e = window.__sitePreloader) != null && e.active), i = new IntersectionObserver((e) => {
		e.forEach((e) => {
			if (!r || !e.isIntersecting) return;
			let a = e.target;
			i.unobserve(a);
			let o = () => {
				if (!a.isConnected || !a.hasAttribute(kc)) return;
				if (!a.animate) {
					a.removeAttribute(kc);
					return;
				}
				let e = a.animate([{ clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0 0 0 0)" }], {
					duration: Ac,
					easing: t,
					fill: "forwards"
				});
				n.add(e), e.onfinish = () => {
					a.removeAttribute(kc), e.cancel(), n.delete(e);
				};
			}, s = a instanceof HTMLImageElement ? a : a.querySelector("img");
			s && !s.complete ? (s.addEventListener("load", o, { once: !0 }), s.addEventListener("error", o, { once: !0 })) : o();
		});
	}, {
		rootMargin: "0px 0px -10% 0px",
		threshold: 0
	});
	document.querySelectorAll(Oc).forEach((e) => {
		e.setAttribute(kc, ""), i.observe(e);
	}), w(() => {
		r = !0, document.querySelectorAll(`[${kc}]`).forEach((e) => {
			i.unobserve(e), i.observe(e);
		});
	}), window.addEventListener("pagehide", () => {
		i.disconnect(), n.forEach((e) => e.cancel()), document.querySelectorAll(`[${kc}]`).forEach((e) => e.removeAttribute(kc));
	}, { once: !0 });
}
//#endregion
//#region src/modules/home-heading-reveal.ts
var Mc = "h1, h2, h3, h4, h5, h6", Nc = [
	"[data-reveal=\"off\"]",
	"[hidden]",
	"[role=\"dialog\"]",
	".fwm-modal",
	"[data-modal]",
	"[data-site-modal]",
	"[data-modal-content]",
	".site-lightbox",
	"[data-site-lightbox]",
	".site-preloader",
	".page-transition-overlay",
	"[data-site-menu]",
	".top_bar_section"
].join(", "), Pc = "data-home-heading-pending", Fc = !1;
function Ic() {
	let e = document.documentElement;
	return e.classList.contains("is-page-transition-entering") ? new Promise((t) => {
		let n = new MutationObserver(() => {
			e.classList.contains("is-page-transition-entering") || (n.disconnect(), t());
		});
		n.observe(e, {
			attributes: !0,
			attributeFilter: ["class"]
		});
	}) : Promise.resolve();
}
function Lc() {
	var e, t, n;
	if (Fc || window.location.pathname !== "/" || f()) return;
	let r = c(Mc).filter((e) => {
		var t;
		return ((t = e.textContent) == null ? void 0 : t.trim()) && !e.closest(Nc) && !e.querySelector("a, button, input, select, textarea") && e.getClientRects().length > 0;
	});
	if (!r.length) return;
	Fc = !0, r.forEach((e) => e.setAttribute(Pc, ""));
	let i = [], a = (e = (t = document.fonts) == null ? void 0 : t.ready) == null ? Promise.resolve() : e;
	Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		a,
		(n = window.__sitePreloader) == null ? void 0 : n.ready,
		Ic()
	]).then(([{ SplitText: e }]) => {
		S.registerPlugin($, e), r.forEach((t) => {
			if (!t.isConnected || t.getClientRects().length === 0) {
				t.removeAttribute(Pc);
				return;
			}
			let n = !1, r, a;
			try {
				let o = e.create(t, {
					type: "lines",
					mask: "lines",
					linesClass: "home-heading-line",
					autoSplit: !0,
					onSplit(e) {
						a == null || a.kill(), r == null || r.kill(), !(n || !e.lines.length) && (S.set(e.lines, {
							yPercent: 105,
							opacity: 0
						}), r = S.to(e.lines, {
							yPercent: 0,
							opacity: 1,
							duration: 1.15,
							stagger: .12,
							ease: "power4.out",
							paused: !0,
							onComplete: () => S.set(e.lines, { clearProps: "transform,opacity" })
						}), a = $.create({
							trigger: t,
							start: "top 88%",
							once: !0,
							animation: r,
							onEnter: () => {
								n = !0;
							}
						}));
					}
				});
				i.push(() => {
					a == null || a.kill(), r == null || r.kill(), o.revert();
				});
			} catch (e) {}
			t.removeAttribute(Pc);
		}), $.refresh();
	}).catch(() => r.forEach((e) => e.removeAttribute(Pc))), window.addEventListener("pagehide", () => {
		i.forEach((e) => e()), r.forEach((e) => e.removeAttribute(Pc));
	}, { once: !0 });
}
//#endregion
//#region src/modules/masked-line-reveal.ts
var Rc = "[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading", zc = "[data-masked-reveal-label], .atelier_hero_section .atlier_slide_eyebrow", Bc = "data-masked-reveal-ready", Vc = "data-masked-reveal-complete", Hc = /* @__PURE__ */ new Map(), Uc = /* @__PURE__ */ new Set(), Wc, Gc = !1, Kc = window.location.pathname;
function qc(e) {
	let t = getComputedStyle(e).getPropertyValue("--masked-reveal-stagger").trim() || "50ms", n = Number.parseFloat(t);
	return Number.isFinite(n) ? t.endsWith("s") && !t.endsWith("ms") ? n * 1e3 : n : 50;
}
async function Jc(e) {
	let t = document.documentElement, n = /^\/atelier\/?$/i.test(window.location.pathname) && !!e.closest(".atelier_hero_section");
	if (t.classList.contains("is-page-transition-entering") && !(n && document.querySelector(".page-transition-overlay.is-uncovering")) && await new Promise((e) => {
		let r = new MutationObserver(() => {
			t.classList.contains("is-page-transition-entering") && (!n || !document.querySelector(".page-transition-overlay.is-uncovering")) || (r.disconnect(), e());
		});
		r.observe(t, {
			attributes: !0,
			attributeFilter: ["class"],
			subtree: n
		});
	}), n) {
		var r;
		await ((r = window.__sitePreloader) == null ? void 0 : r.ready), await new Promise((e) => {
			window.setTimeout(e, 200);
		});
	}
}
function Yc(e) {
	e.played || !e.element.isConnected || (e.played = !0, e.element.classList.add("is-masked-reveal-playing"), /^\/atelier\/?$/i.test(window.location.pathname) && e.element.matches(".atelier_hero_section .atelier_slide_heading") && document.dispatchEvent(new Event("atelier:hero-line-reveal")));
}
function Xc(e, t = !1) {
	let { element: n, text: r, markup: i } = e;
	if (!n.isConnected || !Wc) return;
	let a = e.played && !t;
	n.classList.remove("is-masked-reveal-playing"), n.removeAttribute(Vc), n.innerHTML = i;
	try {
		let t = Wc.create(n, { type: "lines" }), i = t.lines.filter((e) => {
			var t;
			return (t = e.textContent) == null ? void 0 : t.trim();
		}).map((e) => Array.from(e.childNodes, (e) => e.cloneNode(!0)));
		if (t.revert(), !i.length) throw Error("No text lines found");
		let s = document.createDocumentFragment(), c = qc(n);
		if (i.forEach((e, t) => {
			t && s.append(document.createTextNode(" "));
			let n = document.createElement("span");
			n.className = "masked-reveal-line", n.setAttribute("aria-hidden", "true");
			let r = document.createElement("span");
			r.className = "masked-reveal-line__text", r.style.setProperty("--masked-reveal-line-delay", `${t * c}ms`), r.append(...e), n.append(r), s.append(n);
		}), n.replaceChildren(s), n.setAttribute("aria-label", r), n.setAttribute(Bc, ""), e.width = n.getBoundingClientRect().width, a) {
			e.played = !0, n.setAttribute(Vc, "");
			return;
		}
		if (e.played = !1, n.getAttribute("data-masked-line-reveal") === "viewport" && "IntersectionObserver" in window) {
			var o;
			(o = e.intersectionObserver) == null || o.disconnect(), e.intersectionObserver = new IntersectionObserver((t, n) => {
				t.some((e) => e.isIntersecting) && (n.disconnect(), Yc(e));
			}, { threshold: .1 }), e.intersectionObserver.observe(n);
		} else Yc(e);
	} catch (e) {
		n.innerHTML = i, n.removeAttribute(Bc), n.setAttribute(Vc, "");
	}
}
function Zc(e) {
	var t, n, r, i;
	if (Hc.has(e) || /^\/atelier\/?$/i.test(window.location.pathname) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim())) return;
	if (e.querySelector("a, button, input, select, textarea, svg, img, canvas, video, iframe")) {
		e.setAttribute(Vc, "");
		return;
	}
	let a = {
		element: e,
		text: ((n = e.innerText) == null ? void 0 : n.replace(/\s+/g, " ").trim()) || e.textContent,
		markup: e.innerHTML,
		width: 0,
		played: !1,
		resizeObserver: new ResizeObserver(() => {
			!a.width || Math.abs(e.getBoundingClientRect().width - a.width) < 1 || Xc(a);
		})
	};
	Hc.set(e, a), a.resizeObserver.observe(e), Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		(r = document.fonts) == null ? void 0 : r.ready,
		(i = window.__sitePreloader) == null ? void 0 : i.ready,
		Jc(e)
	]).then(([{ SplitText: t }]) => {
		S.registerPlugin(t), Wc = t, e.isConnected && Xc(a);
	}).catch(() => {
		e.setAttribute(Vc, "");
	});
}
function Qc(e) {
	var t, n, r;
	Uc.has(e) || /^\/atelier\/?$/i.test(window.location.pathname) && e.hasAttribute("data-fade") || !((t = e.textContent) != null && t.trim()) || (Uc.add(e), Promise.all([
		(n = document.fonts) == null ? void 0 : n.ready,
		(r = window.__sitePreloader) == null ? void 0 : r.ready,
		Jc(e)
	]).then(() => {
		e.isConnected && e.classList.add("is-masked-reveal-playing");
	}).catch(() => {
		e.setAttribute(Vc, "");
	}));
}
function $c() {
	Hc.forEach((e) => {
		Xc(e, !0);
	}), Uc.forEach((e) => {
		e.classList.remove("is-masked-reveal-playing"), requestAnimationFrame(() => e.classList.add("is-masked-reveal-playing"));
	});
}
function el() {
	let e = Kc !== window.location.pathname;
	Kc = window.location.pathname, document.querySelectorAll(Rc).forEach(Zc), document.querySelectorAll(zc).forEach(Qc), Hc.forEach((e, t) => {
		var n;
		t.isConnected || (e.resizeObserver.disconnect(), (n = e.intersectionObserver) == null || n.disconnect(), Hc.delete(t));
	}), Uc.forEach((e) => {
		e.isConnected || Uc.delete(e);
	}), e && $c();
}
function tl() {
	var e;
	Gc || f() || (Gc = !0, el(), new MutationObserver(el).observe(document.documentElement, {
		childList: !0,
		subtree: !0
	}), (e = document.fonts) == null || e.addEventListener("loadingdone", () => {
		Hc.forEach((e) => {
			Xc(e);
		});
	}), window.addEventListener("popstate", el), window.addEventListener("pageshow", (e) => {
		e.persisted && ($c(), el());
	}), document.addEventListener("animationend", (e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement) || !t.classList.contains("masked-reveal-line__text")) return;
		let n = t.closest(Rc);
		!n || t !== n.querySelector(".masked-reveal-line:last-of-type > .masked-reveal-line__text") || (n.classList.remove("is-masked-reveal-playing"), n.setAttribute(Vc, ""));
	}));
}
//#endregion
//#region src/main.ts
var nl = !1;
wc(), oo(), Pr(), Lc(), tl(), Dc();
function rl() {
	if (nl) return;
	nl = !0, e.info("site_interactions_boot_started", { document_ready_state: document.readyState });
	let t = A();
	Pa({ i18n: t }), Ei({ i18n: t }), To(), Ws(), oe(), y(), O(), Js(), Xs(), jc(), window.SiteInteractions = {
		openModal: Aa,
		openContentModal: ka,
		closeModal: ja,
		openLightbox: Si,
		closeLightbox: Ci
	}, e.info("site_interactions_boot_completed", { document_ready_state: document.readyState });
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", rl, { once: !0 }) : rl();
//#endregion

//# sourceMappingURL=site-interactions.js.map