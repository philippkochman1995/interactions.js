import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { n as x, t as S } from "./site-interactions-CKkKncuX.js";
import { a as ee, i as C, n as w, r as T, t as E } from "./site-interactions-DiIQUbt_.js";
//#region src/modules/i18n.ts
var D = {};
function te(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function O(e = document) {
	var t, n;
	D = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (D = te(v(i))), {
		get values() {
			return { ...D };
		},
		t: k
	};
}
function k(e, t) {
	let n = e.trim(), r = D[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var ne = ".site-menu__languages", re = ".site-menu__language", A = "site-menu__language-indicator";
function ie(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function ae(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function oe(e) {
	let t = Array.from(e.querySelectorAll(re)), n = ie(t);
	if (!n || e.querySelector(`.${A}`)) return;
	let r = document.createElement("span");
	r.className = A, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => ae(e, r, t), a = () => {
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
function se() {
	document.querySelectorAll(ne).forEach(oe);
}
//#endregion
//#region node_modules/gsap/Observer.js
function ce(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function le(e, t, n) {
	return t && ce(e.prototype, t), n && ce(e, n), e;
}
var j, ue, M, de, fe, pe, N, P, me, he, F, I, ge, _e = function() {
	return j || typeof window < "u" && (j = window.gsap) && j.registerPlugin && j;
}, L = 1, ve = [], R = [], z = [], ye = Date.now, be = function(e, t) {
	return t;
}, B = function() {
	var e = me.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, R), r.push.apply(r, z), R = n, z = r, be = function(e, n) {
		return t[e](n);
	};
}, V = function(e, t) {
	return ~z.indexOf(e) && z[z.indexOf(e) + 1][t];
}, xe = function(e) {
	return !!~he.indexOf(e);
}, Se = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, H = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Ce = "scrollLeft", U = "scrollTop", we = function() {
	return F && F.isPressed || R.cache++;
}, Te = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			L && (M.history.scrollRestoration = "manual");
			var i = F && F.isPressed;
			r = n.v = Math.round(r) || (F && F.iOS ? 1 : 0), e(r), n.cacheID = R.cache, i && be("ss", r);
		} else (t || R.cache !== n.cacheID || be("ref")) && (n.cacheID = R.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Ee = {
	s: Ce,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: Te(function(e) {
		return arguments.length ? M.scrollTo(e, De.sc()) : M.pageXOffset || de[Ce] || fe[Ce] || pe[Ce] || 0;
	})
}, De = {
	s: U,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Ee,
	sc: Te(function(e) {
		return arguments.length ? M.scrollTo(Ee.sc(), e) : M.pageYOffset || de[U] || fe[U] || pe[U] || 0;
	})
}, Oe = function(e, t) {
	return (t && t._ctx && t._ctx.selector || j.utils.toArray)(e)[0] || (typeof e == "string" && j.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, ke = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Ae = function(e, t) {
	var n = t.s, r = t.sc;
	xe(e) && (e = de.scrollingElement || fe);
	var i = R.indexOf(e), a = r === De.sc ? 1 : 2;
	!~i && (i = R.push(e) - 1), R[i + a] || Se(e, "scroll", we);
	var o = R[i + a], s = o || (R[i + a] = Te(V(e, n), !0) || (xe(e) ? r : Te(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = j.getProperty(e, "scrollBehavior") === "smooth"), s;
}, je = function(e, t, n) {
	var r = e, i = e, a = ye(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = ye();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = ye();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Me = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Ne = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Pe = function() {
	me = j.core.globals().ScrollTrigger, me && me.core && B();
}, Fe = function(e) {
	return j = e || _e(), !ue && j && typeof document < "u" && document.body && (M = window, de = document, fe = de.documentElement, pe = de.body, he = [
		M,
		de,
		fe,
		pe
	], j.utils.clamp, ge = j.core.context || function() {}, P = "onpointerenter" in pe ? "pointer" : "mouse", N = W.isTouch = M.matchMedia && M.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in M || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, I = W.eventTypes = ("ontouchstart" in fe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in fe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return L = 0;
	}, 500), ue = 1), me || Pe(), ue;
};
Ee.op = De, R.cache = 0;
var W = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		ue || Fe(j) || console.warn("Please gsap.registerPlugin(Observer)"), me || Pe();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, ee = e.onChangeY, C = e.onChange, w = e.onToggleX, T = e.onToggleY, E = e.onHover, D = e.onHoverEnd, te = e.onMove, O = e.ignoreCheck, k = e.isNormalizer, ne = e.onGestureStart, re = e.onGestureEnd, A = e.onWheel, ie = e.onEnable, ae = e.onDisable, oe = e.onClick, se = e.scrollSpeed, ce = e.capture, le = e.allowClicks, he = e.lockAxis, _e = e.onLockAxis;
		this.target = i = Oe(i) || fe, this.vars = e, u && (u = j.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, se = se || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(M.getComputedStyle(pe).lineHeight) || 22);
		var L, R, z, be, B, V, Ce, U = this, Te = 0, W = 0, G = e.passive || !s && e.passive !== !1, Ie = Ae(i, Ee), K = Ae(i, De), q = Ie(), Le = K(), J = ~r.indexOf("touch") && !~r.indexOf("pointer") && I[0] === "pointerdown", Re = xe(i), Y = i.ownerDocument || de, ze = [
			0,
			0,
			0
		], Be = [
			0,
			0,
			0
		], Ve = 0, He = function() {
			return Ve = ye();
		}, X = function(e, t) {
			return (U.event = e) && u && ke(e.target, u) || t && J && e.pointerType !== "touch" || O && O(e, t);
		}, Ue = function() {
			U._vx.reset(), U._vy.reset(), R.pause(), c && c(U);
		}, We = function() {
			var e = U.deltaX = Ne(ze), n = U.deltaY = Ne(Be), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			C && (r || i) && C(U, e, n, ze, Be), r && (v && U.deltaX > 0 && v(U), y && U.deltaX < 0 && y(U), S && S(U), w && U.deltaX < 0 != Te < 0 && w(U), Te = U.deltaX, ze[0] = ze[1] = ze[2] = 0), i && (x && U.deltaY > 0 && x(U), b && U.deltaY < 0 && b(U), ee && ee(U), T && U.deltaY < 0 != W < 0 && T(U), W = U.deltaY, Be[0] = Be[1] = Be[2] = 0), (be || z) && (te && te(U), z && (p && z === 1 && p(U), h && h(U), z = 0), be = !1), V && !(V = !1) && _e && _e(U), B && (A(U), B = !1), L = 0;
		}, Ge = function(e, t, n) {
			ze[n] += e, Be[n] += t, U._vx.update(e), U._vy.update(t), o ? L || (L = requestAnimationFrame(We)) : We();
		}, Ke = function(e, t) {
			he && !Ce && (U.axis = Ce = Math.abs(e) > Math.abs(t) ? "x" : "y", V = !0), Ce !== "y" && (ze[2] += e, U._vx.update(e, !0)), Ce !== "x" && (Be[2] += t, U._vy.update(t, !0)), o ? L || (L = requestAnimationFrame(We)) : We();
		}, qe = function(e) {
			if (!X(e, 1)) {
				e = Me(e, s);
				var t = e.clientX, r = e.clientY, i = t - U.x, a = r - U.y, o = U.isDragging;
				U.x = t, U.y = r, (o || (i || a) && (Math.abs(U.startX - t) >= n || Math.abs(U.startY - r) >= n)) && (z || (z = o ? 2 : 1), o || (U.isDragging = !0), Ke(i, a));
			}
		}, Je = U.onPress = function(e) {
			X(e, 1) || e && e.button || (U.axis = Ce = null, R.pause(), U.isPressed = !0, e = Me(e), Te = W = 0, U.startX = U.x = e.clientX, U.startY = U.y = e.clientY, U._vx.reset(), U._vy.reset(), Se(k ? i : Y, I[1], qe, G, !0), U.deltaX = U.deltaY = 0, g && g(U));
		}, Ye = U.onRelease = function(e) {
			if (!X(e, 1)) {
				H(k ? i : Y, I[1], qe, !0);
				var t = !isNaN(U.y - U.startY), n = U.isDragging, r = n && (Math.abs(U.x - U.startX) > 3 || Math.abs(U.y - U.startY) > 3), a = Me(e);
				!r && t && (U._vx.reset(), U._vy.reset(), s && le && j.delayedCall(.08, function() {
					if (ye() - Ve > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (Y.createEvent) {
							var t = Y.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, M, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), U.isDragging = U.isGesturing = U.isPressed = !1, c && n && !k && R.restart(!0), z && We(), m && n && m(U), _ && _(U, r);
			}
		}, Xe = function(e) {
			return e.touches && e.touches.length > 1 && (U.isGesturing = !0) && ne(e, U.isDragging);
		}, Ze = function() {
			return (U.isGesturing = !1) || re(U);
		}, Qe = function(e) {
			if (!X(e)) {
				var t = Ie(), n = K();
				Ge((t - q) * se, (n - Le) * se, 1), q = t, Le = n, c && R.restart(!0);
			}
		}, $e = function(e) {
			if (!X(e)) {
				e = Me(e, s), A && (B = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? M.innerHeight : 1) * d;
				Ge(e.deltaX * t, e.deltaY * t, 0), c && !k && R.restart(!0);
			}
		}, et = function(e) {
			if (!X(e)) {
				var t = e.clientX, n = e.clientY, r = t - U.x, i = n - U.y;
				U.x = t, U.y = n, be = !0, c && R.restart(!0), (r || i) && Ke(r, i);
			}
		}, tt = function(e) {
			U.event = e, E(U);
		}, nt = function(e) {
			U.event = e, D(U);
		}, rt = function(e) {
			return X(e) || Me(e, s) && oe(U);
		};
		R = U._dc = j.delayedCall(l || .25, Ue).pause(), U.deltaX = U.deltaY = 0, U._vx = je(0, 50, !0), U._vy = je(0, 50, !0), U.scrollX = Ie, U.scrollY = K, U.isDragging = U.isGesturing = U.isPressed = !1, ge(this), U.enable = function(e) {
			return U.isEnabled || (Se(Re ? Y : i, "scroll", we), r.indexOf("scroll") >= 0 && Se(Re ? Y : i, "scroll", Qe, G, ce), r.indexOf("wheel") >= 0 && Se(i, "wheel", $e, G, ce), (r.indexOf("touch") >= 0 && N || r.indexOf("pointer") >= 0) && (Se(i, I[0], Je, G, ce), Se(Y, I[2], Ye), Se(Y, I[3], Ye), le && Se(i, "click", He, !0, !0), oe && Se(i, "click", rt), ne && Se(Y, "gesturestart", Xe), re && Se(Y, "gestureend", Ze), E && Se(i, P + "enter", tt), D && Se(i, P + "leave", nt), te && Se(i, P + "move", et)), U.isEnabled = !0, U.isDragging = U.isGesturing = U.isPressed = be = z = !1, U._vx.reset(), U._vy.reset(), q = Ie(), Le = K(), e && e.type && Je(e), ie && ie(U)), U;
		}, U.disable = function() {
			U.isEnabled && (ve.filter(function(e) {
				return e !== U && xe(e.target);
			}).length || H(Re ? Y : i, "scroll", we), U.isPressed && (U._vx.reset(), U._vy.reset(), H(k ? i : Y, I[1], qe, !0)), H(Re ? Y : i, "scroll", Qe, ce), H(i, "wheel", $e, ce), H(i, I[0], Je, ce), H(Y, I[2], Ye), H(Y, I[3], Ye), H(i, "click", He, !0), H(i, "click", rt), H(Y, "gesturestart", Xe), H(Y, "gestureend", Ze), H(i, P + "enter", tt), H(i, P + "leave", nt), H(i, P + "move", et), U.isEnabled = U.isPressed = U.isDragging = !1, ae && ae(U));
		}, U.kill = U.revert = function() {
			U.disable();
			var e = ve.indexOf(U);
			e >= 0 && ve.splice(e, 1), F === U && (F = 0);
		}, ve.push(U), k && xe(i) && (F = U), U.enable(f);
	}, le(e, [{
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
}, W.register = Fe, W.getAll = function() {
	return ve.slice();
}, W.getById = function(e) {
	return ve.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, _e() && j.registerPlugin(W);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var G, Ie, K, q, Le, J, Re, Y, ze, Be, Ve, He, X, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut = 1, dt = Date.now, ft = dt(), pt = 0, mt = 0, ht = function(e, t, n) {
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
	return G || St() && (G = window.gsap) && G.registerPlugin && G;
}, wt = function(e) {
	return !!~Re.indexOf(e);
}, Tt = function(e) {
	return (e === "Height" ? ot : K["inner" + e]) || Le["client" + e] || J["client" + e];
}, Et = function(e) {
	return V(e, "getBoundingClientRect") || (wt(e) ? function() {
		return Qn.width = K.innerWidth, Qn.height = ot, Qn;
	} : function() {
		return tn(e);
	});
}, Dt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = V(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Tt(i) : e["client" + i]) || 0;
	};
}, Ot = function(e, t) {
	return !t || ~z.indexOf(e) ? Et(e) : function() {
		return Qn;
	};
}, kt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = V(e, n)) ? a() - Et(e)()[i] : wt(e) ? (Le[n] || J[n]) - Tt(r) : e[n] - e["offset" + r]);
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
}, Lt = Math.abs, Rt = "left", zt = "top", Bt = "right", Vt = "bottom", Ht = "width", Ut = "height", Wt = "Right", Gt = "Left", Kt = "Top", qt = "Bottom", Z = "padding", Jt = "margin", Yt = "Width", Xt = "Height", Zt = "px", Qt = function(e) {
	return K.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, $t = function(e) {
	var t = Qt(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, en = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, tn = function(e, t) {
	var n = t && Qt(e)[We] !== "matrix(1, 0, 0, 1, 0, 0)" && G.to(e, {
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
}, nn = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, rn = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, an = function(e) {
	return function(t) {
		return G.utils.snap(rn(e), t);
	};
}, on = function(e) {
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
}, sn = function(e) {
	return function(t, n) {
		return on(rn(e))(t, n.direction);
	};
}, cn = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, ln = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, un = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, dn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, fn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, pn = {
	toggleActions: "play",
	anticipatePin: 0
}, mn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, hn = function(e, t) {
	if (jt(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in mn ? mn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, gn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = q.createElement("div"), m = wt(n) || V(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? J : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === De ? Bt : Vt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], _n(p, 0, r, _), p;
}, _n = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Yt] = 1, i["border" + o + Yt] = 0, i[n.p] = t + "px", G.set(e, i);
}, Q = [], vn = {}, yn, bn = function() {
	return dt() - pt > 34 && (yn || (yn = requestAnimationFrame(Un)));
}, xn = function() {
	(!Qe || !Qe.isPressed || Qe.startX > J.clientWidth) && (R.cache++, Qe ? yn || (yn = requestAnimationFrame(Un)) : Un(), pt || Dn("scrollStart"), pt = dt());
}, Sn = function() {
	tt = K.innerWidth, et = K.innerHeight;
}, Cn = function(e) {
	R.cache++, (e === !0 || !X && !Ze && !q.fullscreenElement && !q.webkitFullscreenElement && (!$e || tt !== K.innerWidth || Math.abs(K.innerHeight - et) > K.innerHeight * .25)) && Y.restart(!0);
}, wn = {}, Tn = [], En = function e() {
	return un($, "scrollEnd", e) || zn(!0);
}, Dn = function(e) {
	return wn[e] && wn[e].map(function(e) {
		return e();
	}) || Tn;
}, On = [], kn = function(e) {
	for (var t = 0; t < On.length; t += 5) (!e || On[t + 4] && On[t + 4].query === e) && (On[t].style.cssText = On[t + 1], On[t].getBBox && On[t].setAttribute("transform", On[t + 2] || ""), On[t + 3].uncache = 1);
}, An = function() {
	return R.forEach(function(e) {
		return Mt(e) && ++e.cacheID && (e.rec = e());
	});
}, jn = function(e, t) {
	var n;
	for (Ge = 0; Ge < Q.length; Ge++) n = Q[Ge], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	st = !0, t && kn(t), t || Dn("revert");
}, Mn = function(e, t) {
	R.cache++, (t || !Nn) && R.forEach(function(e) {
		return Mt(e) && e.cacheID++ && (e.rec = 0);
	}), jt(e) && (K.history.scrollRestoration = it = e);
}, Nn, Pn = 0, Fn, In = function() {
	if (Fn !== Pn) {
		var e = Fn = Pn;
		requestAnimationFrame(function() {
			return e === Pn && zn(!0);
		});
	}
}, Ln = function() {
	J.appendChild(at), ot = !Qe && at.offsetHeight || K.innerHeight, J.removeChild(at);
}, Rn = function(e) {
	return ze(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, zn = function(e, t) {
	if (Le = q.documentElement, J = q.body, Re = [
		K,
		q,
		Le,
		J
	], pt && !e && !st) {
		ln($, "scrollEnd", En);
		return;
	}
	Ln(), Nn = $.isRefreshing = !0, st || An();
	var n = Dn("refreshInit");
	Ye && $.sort(), t || jn(), R.forEach(function(e) {
		Mt(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), st = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), ct = 1, Rn(!0), Q.forEach(function(e) {
		var t = kt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), Rn(!1), ct = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), R.forEach(function(e) {
		Mt(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), Mn(it, 1), Y.pause(), Pn++, Nn = 2, Un(2), Q.forEach(function(e) {
		return Mt(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), Nn = $.isRefreshing = !1, Dn("refresh");
}, Bn = 0, Vn = 1, Hn, Un = function(e) {
	if (e === 2 || !Nn && !st) {
		$.isUpdating = !0, Hn && Hn.update(0);
		var t = Q.length, n = dt(), r = n - ft >= 50, i = t && Q[0].scroll();
		if (Vn = Bn > i ? -1 : 1, Nn || (Bn = i), r && (pt && !Ue && n - pt > 200 && (pt = 0, Dn("scrollEnd")), Ve = ft, ft = n), Vn < 0) {
			for (Ge = t; Ge-- > 0;) Q[Ge] && Q[Ge].update(0, r);
			Vn = 1;
		} else for (Ge = 0; Ge < t; Ge++) Q[Ge] && Q[Ge].update(0, r);
		$.isUpdating = !1;
	}
	yn = 0;
}, Wn = [
	Rt,
	zt,
	Vt,
	Bt,
	Jt + qt,
	Jt + Wt,
	Jt + Kt,
	Jt + Gt,
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
], Gn = Wn.concat([
	Ht,
	Ut,
	"boxSizing",
	"max" + Yt,
	"max" + Xt,
	"position",
	Jt,
	Z,
	Z + Kt,
	Z + Wt,
	Z + qt,
	Z + Gt
]), Kn = function(e, t, n) {
	Yn(n);
	var r = e._gsap;
	if (r.spacerIsNative) Yn(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, qn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Wn.length, a = t.style, o = e.style, s; i--;) s = Wn[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[Vt] = o[Bt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Ht] = nn(e, Ee) + Zt, a[Ut] = nn(e, De) + Zt, a[Z] = o[Jt] = o[zt] = o[Rt] = "0", Yn(r), o[Ht] = o["max" + Yt] = n[Ht], o[Ut] = o["max" + Xt] = n[Ut], o[Z] = n[Z], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Jn = /([A-Z])/g, Yn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Jn, "-$1").toLowerCase());
	}
}, Xn = function(e) {
	for (var t = Gn.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Gn[i], n[Gn[i]]);
	return r.t = e, r;
}, Zn = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Qn = {
	left: 0,
	top: 0
}, $n = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	Mt(e) && (e = e(s)), jt(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? hn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), Nt(e)) f && (e = G.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && _n(o, n, r, !0);
	else {
		Mt(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Oe(t, s) || J, y = tn(_) || {}, (!y || !y.left && !y.top) && Qt(_).display === "none" && (S = _.style.display, _.style.display = "block", y = tn(_), S ? _.style.display = S : _.style.removeProperty("display")), b = hn(v[0], y[r.d]), x = hn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && _n(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var ee = e + n, C = a._isStart;
		h = "scroll" + r.d2, _n(a, ee, r, C && ee > 20 || !C && (u ? Math.max(J[h], Le[h]) : a.parentNode[h]) <= ee + 1), u && (c = tn(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Zt));
	}
	return f && _ && (h = tn(_), f.seek(d), g = tn(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, er = /(webkit|moz|length|cssText|inset)/i, tr = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === J) {
			for (a in e._stOrig = i.cssText, o = Qt(e), o) !+a && !er.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		G.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, nr = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, rr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, G.set(e, r);
}, ir = function(e, t) {
	var n = Ae(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = nr(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			R.cache++, t.tween && Un();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = G.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, ln(e, "wheel", n.wheelHandler), $.isTouch && ln(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		Ie || e.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), rt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !mt) {
			this.update = this.refresh = this.kill = bt;
			return;
		}
		t = en(jt(t) || Nt(t) || t.nodeType ? { trigger: t } : t, pn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, ee = r.preventOverlaps, C = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ee : De, w = !l && l !== 0, T = Oe(t.scroller || K), E = G.core.getCache(T), D = wt(T), te = ("pinType" in t ? t.pinType : V(T, "pinType") || D && "fixed") === "fixed", O = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], k = w && t.toggleActions.split(" "), ne = "markers" in t ? t.markers : pn.markers, re = D ? 0 : parseFloat(Qt(T)["border" + C.p2 + Yt]) || 0, A = this, ie = t.onRefreshInit && function() {
			return t.onRefreshInit(A);
		}, ae = Dt(T, D, C), oe = Ot(T, D), se = 0, ce = 0, le = 0, j = Ae(T, C), ue, M, de, fe, pe, N, P, me, he, F, I, ge, _e, L, ve, ye, be, B, xe, Se, H, Ce, U, we, Te, ke, je, Me, Ne, Pe, Fe, W, Ie, Re, Y, He, We, Ke, qe;
		if (A._startClamp = A._endClamp = !1, A._dir = C, m *= 45, A.scroller = T, A.scroll = x ? x.time.bind(x) : j, fe = j(), A.vars = t, n = n || t.animation, "refreshPriority" in t && (Ye = 1, t.refreshPriority === -9999 && (Hn = A)), E.tweenScroll = E.tweenScroll || {
			top: ir(T, De),
			left: ir(T, Ee)
		}, A.tweenTo = ue = E.tweenScroll[C.p], A.scrubDuration = function(e) {
			Ie = Nt(e) && e, Ie ? W ? W.duration(e) : W = G.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Ie,
				paused: !0,
				onComplete: function() {
					return h && h(A);
				}
			}) : (W && W.progress(1).kill(), W = 0);
		}, n && (n.vars.lazy = !1, n._initted && !A.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), A.animation = n.pause(), n.scrollTrigger = A, A.scrubDuration(l), Pe = 0, o || (o = n.vars.id)), v && ((!Pt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in J.style && G.set(D ? [J, Le] : T, { scrollBehavior: "auto" }), R.forEach(function(e) {
			return Mt(e) && e.target === (D ? q.scrollingElement || Le : T) && (e.smooth = !1);
		}), de = Mt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? an(n) : v.snapTo === "labelsDirectional" ? sn(n) : v.directional === !1 ? G.utils.snap(v.snapTo) : function(e, t) {
			return on(v.snapTo)(e, dt() - ce < 500 ? 0 : t.direction);
		}, Re = v.duration || {
			min: .1,
			max: 2
		}, Re = Pt(Re) ? Be(Re.min, Re.max) : Be(Re, Re), Y = G.delayedCall(v.delay || Ie / 2 || .1, function() {
			var e = j(), t = dt() - ce < 500, r = ue.tween;
			if ((t || Math.abs(A.getVelocity()) < 10) && !r && !Ue && se !== e) {
				var i = (e - N) / L, a = n && !w ? n.totalProgress() : i, o = t ? 0 : (a - Fe) / (dt() - Ve) * 1e3 || 0, s = G.utils.clamp(-i, 1 - i, Lt(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = de(c, A), Nt(l) || (l = c), u = Math.max(0, Math.round(N + l * L)), e <= P && e >= N && u !== e) {
					if (r && !r._initted && r.data <= Lt(u - e)) return;
					v.inertia === !1 && (s = l - i), ue(u, {
						duration: Re(Lt(Math.max(Lt(c - a), Lt(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Lt(u - e),
						onInterrupt: function() {
							return Y.restart(!0) && p && It(A, p);
						},
						onComplete: function() {
							A.update(), se = j(), n && !w && (W ? W.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Pe = Fe = n && !w ? n.totalProgress() : A.progress, g && g(A), m && It(A, m);
						}
					}, e, s * L, u - e - s * L), f && It(A, f, ue.tween);
				}
			} else A.isActive && se !== e && Y.restart(!0);
		}).pause()), o && (vn[o] = A), u = A.trigger = Oe(u || d !== !0 && d), qe = u && u._gsap && u._gsap.stRevert, qe && (qe = qe(A)), d = d === !0 ? u : Oe(d), jt(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Jt || (f = !f && d.parentNode && d.parentNode.style && Qt(d.parentNode).display === "flex" ? !1 : Z), A.pin = d, M = G.core.getCache(d), M.spacer ? ve = M.pinState : (b && (b = Oe(b), b && !b.nodeType && (b = b.current || b.nativeElement), M.spacerIsNative = !!b, b && (M.spacerState = Xn(b))), M.spacer = B = b || q.createElement("div"), B.classList.add("pin-spacer"), o && B.classList.add("pin-spacer-" + o), M.pinState = ve = Xn(d)), t.force3D !== !1 && G.set(d, { force3D: !0 }), A.spacer = B = M.spacer, Ne = Qt(d), we = Ne[f + C.os2], Se = G.getProperty(d), H = G.quickSetter(d, C.a, Zt), qn(d, B, Ne), be = Xn(d)), ne) {
			ge = Pt(ne) ? en(ne, fn) : fn, F = gn("scroller-start", o, T, C, ge, 0), I = gn("scroller-end", o, T, C, ge, 0, F), xe = F["offset" + C.op.d2];
			var Je = Oe(V(T, "content") || T);
			me = this.markerStart = gn("start", o, Je, C, ge, xe, 0, x), he = this.markerEnd = gn("end", o, Je, C, ge, xe, 0, x), x && (Ke = G.quickSetter([me, he], C.a, Zt)), !te && !(z.length && V(T, "fixedMarkers") === !0) && ($t(D ? J : T), G.set([F, I], { force3D: !0 }), ke = G.quickSetter(F, C.a, Zt), Me = G.quickSetter(I, C.a, Zt));
		}
		if (x) {
			var Ze = x.vars.onUpdate, Qe = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				A.update(0, 0, 1), Ze && Ze.apply(x, Qe || []);
			});
		}
		if (A.previous = function() {
			return Q[Q.indexOf(A) - 1];
		}, A.next = function() {
			return Q[Q.indexOf(A) + 1];
		}, A.revert = function(e, t) {
			if (!t) return A.kill(!0);
			var r = e !== !1 || !A.enabled, i = X;
			r !== A.isReverted && (r && (He = Math.max(j(), A.scroll.rec || 0), le = A.progress, We = n && n.progress()), me && [
				me,
				he,
				F,
				I
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (X = A, A.update(r)), d && (!y || !A.isActive) && (r ? Kn(d, B, ve) : qn(d, B, Qt(d), Te)), r || A.update(r), X = i, A.isReverted = r);
		}, A.refresh = function(r, i, a, o) {
			if (!((X || !A.enabled) && !i)) {
				if (d && r && pt) {
					ln(e, "scrollEnd", En);
					return;
				}
				!Nn && ie && ie(A), X = A, ue.tween && !a && (ue.tween.kill(), ue.tween = 0), W && W.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), A.isReverted || A.revert(!0, !0), A._subPinOffset = !1;
				var s = ae(), l = oe(), m = x ? x.duration() : kt(T, C), h = L <= .01 || !L, g = 0, _ = o || 0, v = Pt(a) ? a.end : t.end, b = t.endTrigger || u, S = Pt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), ee = A.pinnedContainer = t.pinnedContainer && Oe(t.pinnedContainer, A), E = u && Math.max(0, Q.indexOf(A)) || 0, O = E, k, M, de, ge, R, z, V, xe, H, we, ke, Me, Ne;
				for (ne && Pt(a) && (Me = G.getProperty(F, C.p), Ne = G.getProperty(I, C.p)); O-- > 0;) z = Q[O], z.end || z.refresh(0, 1) || (X = A), V = z.pin, V && (V === u || V === d || V === ee) && !z.isReverted && (we || (we = []), we.unshift(z), z.revert(!0, !0)), z !== Q[O] && (E--, O--);
				for (Mt(S) && (S = S(A)), S = ht(S, "start", A), N = $n(S, u, s, C, j(), me, F, A, l, re, te, m, x, A._startClamp && "_startClamp") || (d ? -.001 : 0), Mt(v) && (v = v(A)), jt(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (jt(S) ? S.split(" ")[0] : "") + v : (g = hn(v.substr(2), s), v = jt(S) ? S : (x ? G.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, N) : N) + g, b = u)), v = ht(v, "end", A), P = Math.max(N, $n(v || (b ? "100% 0" : m), b, s, C, j() + g, he, I, A, l, re, te, m, x, A._endClamp && "_endClamp")) || -.001, g = 0, O = E; O--;) z = Q[O] || {}, V = z.pin, V && z.start - z._pinPush <= N && !x && z.end > 0 && (k = z.end - (A._startClamp ? Math.max(0, z.start) : z.start), (V === u && z.start - z._pinPush < N || V === ee) && isNaN(S) && (g += k * (1 - z.progress)), V === d && (_ += k));
				if (N += g, P += g, A._startClamp && (A._startClamp += g), A._endClamp && !Nn && (A._endClamp = P || -.001, P = Math.min(P, kt(T, C))), L = P - N || (N -= .01) && .001, h && (le = G.utils.clamp(0, 1, G.utils.normalize(N, P, He))), A._pinPush = _, me && g && (k = {}, k[C.a] = "+=" + g, ee && (k[C.p] = "-=" + j()), G.set([me, he], k)), d && !(ct && A.end >= kt(T, C))) k = Qt(d), ge = C === De, de = j(), Ce = parseFloat(Se(C.a)) + _, !m && P > 1 && (ke = (D ? q.scrollingElement || Le : T).style, ke = {
					style: ke,
					value: ke["overflow" + C.a.toUpperCase()]
				}, D && Qt(J)["overflow" + C.a.toUpperCase()] !== "scroll" && (ke.style["overflow" + C.a.toUpperCase()] = "scroll")), qn(d, B, k), be = Xn(d), M = tn(d, !0), xe = te && Ae(T, ge ? Ee : De)(), f ? (Te = [f + C.os2, L + _ + Zt], Te.t = B, O = f === Z ? nn(d, C) + L + _ : 0, O && (Te.push(C.d, O + Zt), B.style.flexBasis !== "auto" && (B.style.flexBasis = O + Zt)), Yn(Te), ee && Q.forEach(function(e) {
					e.pin === ee && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), te && j(He)) : (O = nn(d, C), O && B.style.flexBasis !== "auto" && (B.style.flexBasis = O + Zt)), te && (R = {
					top: M.top + (ge ? de - N : xe) + Zt,
					left: M.left + (ge ? xe : de - N) + Zt,
					boxSizing: "border-box",
					position: "fixed"
				}, R[Ht] = R["max" + Yt] = Math.ceil(M.width) + Zt, R[Ut] = R["max" + Xt] = Math.ceil(M.height) + Zt, R[Jt] = R[Jt + Kt] = R[Jt + Wt] = R[Jt + qt] = R[Jt + Gt] = "0", R[Z] = k[Z], R[Z + Kt] = k[Z + Kt], R[Z + Wt] = k[Z + Wt], R[Z + qt] = k[Z + qt], R[Z + Gt] = k[Z + Gt], ye = Zn(ve, R, y), Nn && j(0)), n ? (H = n._initted, Xe(1), n.render(n.duration(), !0, !0), U = Se(C.a) - Ce + L + _, je = Math.abs(L - U) > 1, te && je && ye.splice(ye.length - 2, 2), n.render(0, !0, !0), H || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Xe(0)) : U = L, ke && (ke.value ? ke.style["overflow" + C.a.toUpperCase()] = ke.value : ke.style.removeProperty("overflow-" + C.a));
				else if (u && j() && !x) for (M = u.parentNode; M && M !== J;) M._pinOffset && (N -= M._pinOffset, P -= M._pinOffset), M = M.parentNode;
				we && we.forEach(function(e) {
					return e.revert(!1, !0);
				}), A.start = N, A.end = P, fe = pe = Nn ? He : j(), !x && !Nn && (fe < He && j(He), A.scroll.rec = 0), A.revert(!1, !0), ce = dt(), Y && (se = -1, Y.restart(!0)), X = 0, n && w && (n._initted || We) && n.progress() !== We && n.progress(We || 0, !0).render(n.time(), !0, !0), (h || le !== A.progress || x || p || n && !n._initted) && (n && !w && (n._initted || le || n.vars.immediateRender !== !1) && n.totalProgress(x && N < -.001 && !le ? G.utils.normalize(N, P, 0) : le, !0), A.progress = h || (fe - N) / L === le ? 0 : le), d && f && (B._pinOffset = Math.round(A.progress * U)), W && W.invalidate(), isNaN(Me) || (Me -= G.getProperty(F, C.p), Ne -= G.getProperty(I, C.p), rr(F, C, Me), rr(me, C, Me - (o || 0)), rr(I, C, Ne), rr(he, C, Ne - (o || 0))), h && !Nn && A.update(), c && !Nn && !_e && (_e = !0, c(A), _e = !1);
			}
		}, A.getVelocity = function() {
			return (j() - pe) / (dt() - Ve) * 1e3 || 0;
		}, A.endAnimation = function() {
			Ft(A.callbackAnimation), n && (W ? W.progress(1) : n.paused() ? w || Ft(n, A.direction < 0, 1) : Ft(n, n.reversed()));
		}, A.labelToScroll = function(e) {
			return n && n.labels && (N || A.refresh() || N) + n.labels[e] / n.duration() * L || 0;
		}, A.getTrailing = function(e) {
			var t = Q.indexOf(A), n = A.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (jt(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return A.direction > 0 ? e.end <= N : e.start >= P;
			});
		}, A.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = Nn === !0 ? He : A.scroll(), c = e ? 0 : (o - N) / L, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = A.progress, h, g, b, E, D, ne, re, ie;
				if (t && (pe = fe, fe = x ? j() : o, v && (Fe = Pe, Pe = n && !w ? n.totalProgress() : u)), m && d && !X && !ut && pt && (!u && N < o + (o - pe) / (dt() - Ve) * m ? u = 1e-4 : u === 1 && P > o + (o - pe) / (dt() - Ve) * m && (u = .9999)), u !== p && A.enabled) {
					if (h = A.isActive = !!u && u < 1, g = !!p && p < 1, ne = h !== g, D = ne || !!u != !!p, A.direction = u > p ? 1 : -1, A.progress = u, D && !X && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, w && (E = !ne && k[b + 1] !== "none" && k[b + 1] || k[b], ie = n && (E === "complete" || E === "reset" || E in n))), ee && (ne || ie) && (ie || l || !n) && (Mt(ee) ? ee(A) : A.getTrailing(ee).forEach(function(e) {
						return e.endAnimation();
					})), w || (W && !X && !ut ? (W._dp._time - W._start !== W._time && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", u, n._tTime / n._tDur) : (W.vars.totalProgress = u, W.invalidate().restart())) : n && n.totalProgress(u, !!(X && (ce || e)))), d) {
						if (e && f && (B.style[f + C.os2] = we), !te) H(xt(Ce + U * u));
						else if (D) {
							if (re = !e && u > p && P + 1 > o && o + 1 >= kt(T, C), y) if (!e && (h || re)) {
								var ae = tn(d, !0), oe = o - N;
								tr(d, J, ae.top + (C === De ? oe : 0) + Zt, ae.left + (C === De ? 0 : oe) + Zt);
							} else tr(d, B);
							Yn(h || re ? ye : be), je && u < 1 && h || H(Ce + (u === 1 && !re ? U : 0));
						}
					}
					v && !ue.tween && !X && !ut && Y.restart(!0), a && (ne || _ && u && (u < 1 || !lt)) && ze(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !w && !e && i(A), D && !X ? (w && (ie && (E === "complete" ? n.pause().totalProgress(1) : E === "reset" ? n.restart(!0).pause() : E === "restart" ? n.restart(!0) : n[E]()), i && i(A)), (ne || !lt) && (s && ne && It(A, s), O[b] && It(A, O[b]), _ && (u === 1 ? A.kill(!1, 1) : O[b] = 0), ne || (b = u === 1 ? 1 : 3, O[b] && It(A, O[b]))), S && !h && Math.abs(A.getVelocity()) > (Nt(S) ? S : 2500) && (Ft(A.callbackAnimation), W ? W.progress(1) : Ft(n, E === "reverse" ? 1 : !u, 1))) : w && i && !X && i(A);
				}
				if (Me) {
					var se = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					ke(se + +!!F._isFlipped), Me(se);
				}
				Ke && Ke(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, A.enable = function(t, n) {
			A.enabled || (A.enabled = !0, ln(T, "resize", Cn), D || ln(T, "scroll", xn), ie && ln(e, "refreshInit", ie), t !== !1 && (A.progress = le = 0, fe = pe = se = j()), n !== !1 && A.refresh());
		}, A.getTween = function(e) {
			return e && ue ? ue.tween : W;
		}, A.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			A.refresh(!1, !1, {
				start: gt(e, n && !!A._startClamp),
				end: gt(t, n && !!A._endClamp)
			}, r), A.update();
		}, A.adjustPinSpacing = function(e) {
			if (Te && e) {
				var t = Te.indexOf(C.d) + 1;
				Te[t] = parseFloat(Te[t]) + e + Zt, Te[1] = parseFloat(Te[1]) + e + Zt, Yn(Te);
			}
		}, A.disable = function(t, n) {
			if (t !== !1 && A.revert(!0, !0), A.enabled && (A.enabled = A.isActive = !1, n || W && W.pause(), He = 0, M && (M.uncache = 1), ie && un(e, "refreshInit", ie), Y && (Y.pause(), ue.tween && ue.tween.kill() && (ue.tween = 0)), !D)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === T && Q[r] !== A) return;
				un(T, "resize", Cn), D || un(T, "scroll", xn);
			}
		}, A.kill = function(e, r) {
			A.disable(e, r), W && !r && W.kill(), o && delete vn[o];
			var i = Q.indexOf(A);
			i >= 0 && Q.splice(i, 1), i === Ge && Vn > 0 && Ge--, i = 0, Q.forEach(function(e) {
				return e.scroller === A.scroller && (i = 1);
			}), i || Nn || (A.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), me && [
				me,
				he,
				F,
				I
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Hn === A && (Hn = 0), d && (M && (M.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (M.spacer = 0)), t.onKill && t.onKill(A);
		}, Q.push(A), A.enable(!1, !1), qe && qe(A), n && n.add && !L) {
			var $e = A.update;
			A.update = function() {
				A.update = $e, R.cache++, N || P || A.refresh();
			}, G.delayedCall(.01, A.update), L = .01, N = P = 0;
		} else A.refresh();
		d && In();
	}, e.register = function(t) {
		return Ie || (G = t || Ct(), St() && window.document && e.enable(), Ie = mt), Ie;
	}, e.defaults = function(e) {
		if (e) for (var t in e) pn[t] = e[t];
		return pn;
	}, e.disable = function(e, t) {
		mt = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), un(K, "wheel", xn), un(q, "scroll", xn), clearInterval(He), un(q, "touchcancel", bt), un(J, "touchstart", bt), cn(un, q, "pointerdown,touchstart,mousedown", vt), cn(un, q, "pointerup,touchend,mouseup", yt), Y.kill(), At(un);
		for (var n = 0; n < R.length; n += 3) dn(un, R[n], R[n + 1]), dn(un, R[n], R[n + 2]);
	}, e.enable = function() {
		if (K = window, q = document, Le = q.documentElement, J = q.body, G) if (ze = G.utils.toArray, Be = G.utils.clamp, rt = G.core.context || bt, Xe = G.core.suppressOverwrites || bt, it = K.history.scrollRestoration || "auto", Bn = K.pageYOffset || 0, G.core.globals("ScrollTrigger", e), J) {
			mt = 1, at = document.createElement("div"), at.style.height = "100vh", at.style.position = "absolute", Ln(), _t(), W.register(G), e.isTouch = W.isTouch, nt = W.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), $e = W.isTouch === 1, ln(K, "wheel", xn), Re = [
				K,
				q,
				Le,
				J
			], G.matchMedia ? (e.matchMedia = function(e) {
				var t = G.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, G.addEventListener("matchMediaInit", function() {
				An(), jn();
			}), G.addEventListener("matchMediaRevert", function() {
				return kn();
			}), G.addEventListener("matchMedia", function() {
				zn(0, 1), Dn("matchMedia");
			}), G.matchMedia().add("(orientation: portrait)", function() {
				return Sn(), Sn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), Sn(), ln(q, "scroll", xn);
			var t = J.hasAttribute("style"), n = J.style, r = n.borderTopStyle, i = G.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = tn(J), De.m = Math.round(a.top + De.sc()) || 0, Ee.m = Math.round(a.left + Ee.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (J.setAttribute("style", ""), J.removeAttribute("style")), He = setInterval(bn, 250), G.delayedCall(.5, function() {
				return ut = 0;
			}), ln(q, "touchcancel", bt), ln(J, "touchstart", bt), cn(ln, q, "pointerdown,touchstart,mousedown", vt), cn(ln, q, "pointerup,touchend,mouseup", yt), We = G.utils.checkPrefix("transform"), Gn.push(We), Ie = dt(), Y = G.delayedCall(.2, zn).pause(), Je = [
				q,
				"visibilitychange",
				function() {
					var e = K.innerWidth, t = K.innerHeight;
					q.hidden ? (Ke = e, qe = t) : (Ke !== e || qe !== t) && Cn();
				},
				q,
				"DOMContentLoaded",
				zn,
				K,
				"load",
				zn,
				K,
				"resize",
				Cn
			], At(ln), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < R.length; o += 3) dn(un, R[o], R[o + 1]), dn(un, R[o], R[o + 2]);
		} else q && q.addEventListener("DOMContentLoaded", function t() {
			e.enable(), q.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (lt = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(He) || (He = n) && setInterval(bn, n), "ignoreMobileResize" in t && ($e = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (At(un) || At(ln, t.autoRefreshEvents || "none"), Ze = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Oe(e), r = R.indexOf(n), i = wt(n);
		~r && R.splice(r, i ? 6 : 2), t && (i ? z.unshift(K, t, J, t, Le, t) : z.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (jt(e) ? Oe(e) : e).getBoundingClientRect(), i = r[n ? Ht : Ut] * t || 0;
		return n ? r.right - i > 0 && r.left + i < K.innerWidth : r.bottom - i > 0 && r.top + i < K.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		jt(e) && (e = Oe(e));
		var r = e.getBoundingClientRect(), i = r[n ? Ht : Ut], a = t == null ? i / 2 : t in mn ? mn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / K.innerWidth : (r.top + a) / K.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = wn.killAll || [];
			wn = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? ze(e).forEach(function(e) {
		if (e && e.style) {
			var t = On.indexOf(e);
			t >= 0 && On.splice(t, 5), On.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), G.core.getCache(e), rt());
		}
	}) : On;
}, $.revert = function(e, t) {
	return jn(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? Cn(!0) : (Ie || $.register()) && zn(!0);
}, $.update = function(e) {
	return ++R.cache && Un(e === !0 ? 2 : 0);
}, $.clearScrollMemory = Mn, $.maxScroll = function(e, t) {
	return kt(e, t ? Ee : De);
}, $.getScrollFunc = function(e, t) {
	return Ae(Oe(e), t ? Ee : De);
}, $.getById = function(e) {
	return vn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!pt;
}, $.snapDirectional = on, $.addEventListener = function(e, t) {
	var n = wn[e] || (wn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = wn[e], r = n && n.indexOf(t);
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
	for (s in t) r[s] = s.substr(0, 2) === "on" && Mt(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return Mt(a) && (a = a(), ln($, "refresh", function() {
		return a = t.batchMax();
	})), ze(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var ar = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, or = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (W.isTouch ? " pinch-zoom" : "") : "none", t === Le && e(J, n);
}, sr = {
	auto: 1,
	scroll: 1
}, cr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || G.core.getCache(i), o = dt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== J && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(sr[(s = Qt(i)).overflowY] || sr[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !wt(i) && (sr[(s = Qt(i)).overflowY] || sr[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, lr = function(e, t, n, r) {
	return W.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && cr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && ln(q, W.eventTypes[0], fr, !1, !0);
		},
		onDisable: function() {
			return un(q, W.eventTypes[0], fr, !0);
		}
	});
}, ur = /(input|label|select|textarea)/i, dr, fr = function(e) {
	var t = ur.test(e.target.tagName);
	(t || dr) && (e._gsapAllow = !0, dr = t);
}, pr = function(e) {
	Pt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Oe(e.target) || Le, l = G.core.globals().ScrollSmoother, u = l && l.get(), d = nt && (e.content && Oe(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Ae(c, De), p = Ae(c, Ee), m = 1, h = (W.isTouch && K.visualViewport ? K.visualViewport.scale * K.visualViewport.width : K.outerWidth) / K.innerWidth, g = 0, _ = Mt(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = lr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = bt, ee = bt, C = function() {
		s = kt(c, De), ee = Be(+!!nt, s), n && (S = Be(0, kt(c, Ee))), v = Pn;
	}, w = function() {
		d._gsap.y = xt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, T = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = xt(o.deltaY / 2), t = ee(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = xt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = R.cache, Un();
			}
			return !0;
		}
		f.offset && w(), y = !0;
	}, E, D, te, O, k = function() {
		C(), E.isActive() && E.vars.scrollY > s && (f() > s ? E.progress(1) && f(s) : E.resetTo("scrollY", s));
	};
	return d && G.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return nt && e.type === "touchmove" && T(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = xt((K.visualViewport && K.visualViewport.scale || 1) / h), E.pause(), e !== m && or(c, m > 1.01 || !n && "x"), D = p(), te = f(), C(), v = Pn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && w(), !t) O.restart(!0);
		else {
			R.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= ar(p, i, o, kt(c, Ee)), E.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= ar(f, i, o, kt(c, De)), E.vars.scrollY = ee(o), E.invalidate().duration(r).play(.01), (nt && E.vars.scrollY >= s || i >= s - 1) && G.to({}, {
				onUpdate: k,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		E._ts && E.pause(), dt() - g > 1e3 && (v = 0, g = dt());
	}, e.onChange = function(e, t, r, i, a) {
		if (Pn !== v && C(), t && n && p(S(i[2] === t ? D + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && w();
			var o = a[2] === r, s = o ? te + e.startY - e.y : f() + r - a[1], c = ee(s);
			o && s !== c && (te += c - s), f(c);
		}
		(r || t) && Un();
	}, e.onEnable = function() {
		or(c, !n && "x"), $.addEventListener("refresh", k), ln(K, "resize", k), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		or(c, !0), un(K, "resize", k), $.removeEventListener("refresh", k), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new W(e), o.iOS = nt, nt && !f() && f(1), nt && G.ticker.add(bt), O = o._dc, E = G.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: nr(f, f(), function() {
			return E.pause();
		}) },
		onUpdate: Un,
		onComplete: O.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (Mt(e)) return Q.sort(e);
	var t = K.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + K.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new W(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Qe;
	if (e === !0 && Qe) return Qe.enable();
	if (e === !1) {
		Qe && Qe.kill(), Qe = e;
		return;
	}
	var t = e instanceof W ? e : pr(e);
	return Qe && Qe.target === t.target && Qe.kill(), wt(t.target) && (Qe = t), t;
}, $.core = {
	_getVelocityProp: je,
	_inputObserver: lr,
	_scrollers: R,
	_proxies: z,
	bridge: {
		ss: function() {
			pt || Dn("scrollStart"), pt = dt();
		},
		ref: function() {
			return X;
		}
	}
}, Ct() && G.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var mr = "h1, h2, h3, h4, h5, h6, p", hr = [
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
].join(", "), gr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", _r = "data-reveal-pending", vr = "data-reveal-ready", yr = {
	y: 12,
	opacity: 0
}, br = {
	y: 0,
	opacity: 1,
	duration: .8,
	ease: "power2.out"
}, xr = !1;
function Sr() {
	return /(?:^|\/)news(?:\/|$)/i.test(window.location.pathname);
}
function Cr(e) {
	var t;
	return e.closest(hr) || e.closest("[hidden]") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function wr(e) {
	if (e.closest(gr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function Tr(e) {
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
function Er(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.element.style.opacity = e.played ? "1" : e.originalOpacity, e.element.style.transform = e.originalTransform, e.trigger = void 0, e.timeline = void 0;
}
function Dr(e) {
	return e.signature = Tr(e.element), e.element.removeAttribute(_r), e.element.setAttribute(vr, ""), [e.element];
}
function Or(e) {
	let t = Dr(e);
	if (!t.length || e.played) return;
	let n = b.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0;
		}
	});
	n.fromTo(t, yr, br), e.timeline = n, e.trigger = $.create({
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
function kr(e, t) {
	e.forEach((e, n) => {
		let r = Dr(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, yr, br, .6 + n * .12 + i);
	});
}
function Ar() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function jr(e = document) {
	var t;
	if (xr || Sr() || u()) return;
	let n = o(mr, e).filter(Cr);
	if (!n.length) return;
	xr = !0, b.registerPlugin($);
	let r = n.map((e) => ({
		element: e,
		hero: wr(e),
		played: !1,
		signature: "",
		originalOpacity: e.style.opacity,
		originalTransform: e.style.transform
	}));
	r.forEach(({ element: e }) => e.setAttribute(_r, ""));
	let i, a, s = 0, c = !1, l = !1, d = () => {
		c && (i && i.progress() > 0 && (l = !0, r.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), r.forEach(Er), i = b.timeline({ paused: !0 }), kr(r.filter((e) => e.hero && e.element.isConnected), i), r.filter((e) => !e.hero && e.element.isConnected).forEach(Or), !l && i.duration() > 0 && (i.call(() => {
			l = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, f = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, r.some((e) => e.element.isConnected && Tr(e.element) !== e.signature) && d();
		}));
	};
	Promise.all([Ar(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		c = !0, d(), a = new ResizeObserver(f), r.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", f, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", d);
	}), window.addEventListener("pagehide", () => {
		var e;
		window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), r.forEach(Er), window.removeEventListener("resize", f), (e = document.fonts) == null || e.removeEventListener("loadingdone", d), r.forEach(({ element: e }) => e.removeAttribute(_r));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var Mr = "[data-lightbox-src]", Nr = "js-lightbox", Pr = `.${Nr}`, Fr = `${Mr}, ${Pr}`, Ir = "[data-site-lightbox]", Lr = "[data-lightbox-close]", Rr = "[data-lightbox-prev]", zr = "[data-lightbox-next]", Br = "[data-lightbox-auto-icon]", Vr = "site-lightbox-trigger", Hr = "site-lightbox-trigger__image", Ur = "site-lightbox-trigger__icon", Wr = "w-dyn-bind-empty", Gr = "/plugins/Basic/assets/placeholder.", Kr = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", qr = !1, Jr = null, Yr = null, Xr = [], Zr = 0, Qr = !1, $r = null;
function ei(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return ti(e);
	let n = s("img", e);
	return n ? ti(n) : "";
}
function ti(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(Wr) || t.includes(Gr) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ni(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function ri(e) {
	let t = ei(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		credit: r(e, "data-lightbox-credit"),
		alt: ni(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ii(e) {
	let t = ri(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(Fr).filter((e) => r(e, "data-lightbox-group") === t.group).map(ri).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function ai() {
	let e = document.createElement("span");
	return e.className = Ur, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = Kr, e;
}
function oi(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function si(e) {
	if (!oi(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Jr == null ? void 0 : Jr.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function ci(e) {
	if (e.closest(`.${Vr}`) || !ei(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${Vr} ${Nr}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(Nr), e.classList.add(Hr), e.before(t), t.append(e, ai()), si(t);
}
function li(e) {
	if (e instanceof HTMLImageElement) {
		ci(e);
		return;
	}
	ei(e).trim() && (e.classList.add(Vr), si(e), s(Br, e) || e.append(ai()));
}
function ui() {
	o(Pr).forEach(li);
}
function di(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function fi() {
	var e, t, n, r, i, a;
	if (Yr) return pi(Yr), Yr;
	let o = s(Ir), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = Jr == null ? void 0 : Jr.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = di((l = Jr == null ? void 0 : Jr.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = di((u = Jr == null ? void 0 : Jr.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = di((d = Jr == null ? void 0 : Jr.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
		r.className = "site-lightbox__figure";
		let i = document.createElement("img");
		i.className = "site-lightbox__image", i.setAttribute("data-lightbox-image", ""), i.alt = "";
		let a = document.createElement("figcaption");
		a.className = "site-lightbox__caption", a.setAttribute("data-lightbox-caption-output", ""), a.hidden = !0;
		let o = document.createElement("span");
		o.className = "site-lightbox__credit", o.setAttribute("data-lightbox-credit-output", ""), o.hidden = !0, r.append(i, a, o), c.append(e, t, r, n), document.body.append(c);
	}
	let f = s("[data-lightbox-credit-output]", c);
	if (!f) {
		var p;
		f = document.createElement("span"), f.className = "site-lightbox__credit", f.setAttribute("data-lightbox-credit-output", ""), f.hidden = !0, ((p = s(".site-lightbox__figure", c)) == null ? c : p).append(f);
	}
	let m = {
		root: c,
		image: (t = s("[data-lightbox-image]", c)) == null ? document.createElement("img") : t,
		caption: (n = s("[data-lightbox-caption-output]", c)) == null ? document.createElement("figcaption") : n,
		credit: f,
		closeButton: (r = s(Lr, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(Rr, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(zr, c)) == null ? document.createElement("button") : a
	};
	return Yr = m, pi(m), !o && !document.body.contains(c) && document.body.append(c), m;
}
function pi(e) {
	var t, n, r, i;
	let a = (t = Jr == null ? void 0 : Jr.t("close", "Close")) == null ? "Close" : t, o = (n = Jr == null ? void 0 : Jr.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Jr == null ? void 0 : Jr.t("next", "Next")) == null ? "Next" : r, c = (i = Jr == null ? void 0 : Jr.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function mi() {
	let e = fi(), t = Xr[Zr];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = Xr.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(Zr), e.root.dataset.lightboxCount = String(Xr.length);
}
function hi(e) {
	let t = fi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function gi(e) {
	Xr.length < 2 || (Zr = (e + Xr.length) % Xr.length, mi());
}
function _i() {
	gi(Zr + 1);
}
function vi() {
	gi(Zr - 1);
}
function yi(e) {
	var t;
	let n = ii(e);
	if (!n) return;
	let r = Qr;
	Xr = n.items, Zr = n.index, $r = e, Qr = !0, mi(), hi(!0), r || p();
	let i = fi();
	m(i.closeButton || i.root);
	let a = Xr[Zr];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: Zr,
		count: Xr.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function bi() {
	var t;
	if (!Qr || !Yr) return;
	let r = Yr, i = $r, a = (t = Xr[Zr]) == null ? null : t;
	hi(!1), n(), Qr = !1, Xr = [], Zr = 0, $r = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function xi(e) {
	if (!(!Qr || !Yr)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), bi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), _i();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), vi();
			return;
		}
		y(Yr.root, e);
	}
}
function Si(e) {
	!Qr || !Yr || e.target === Yr.root && bi();
}
function Ci(e) {
	return Jr = e.i18n, ui(), qr || (g(document, "click", Fr, (e, t) => {
		e.preventDefault(), yi(t);
	}), g(document, "keydown", Pr, (e, t) => {
		oi(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), yi(t));
	}), g(document, "click", Lr, (e) => {
		e.preventDefault(), bi();
	}), g(document, "click", Rr, (e) => {
		e.preventDefault(), vi();
	}), g(document, "click", zr, (e) => {
		e.preventDefault(), _i();
	}), document.addEventListener("click", Si), document.addEventListener("keydown", xi, !0), qr = !0), {
		openLightbox: yi,
		closeLightbox: bi
	};
}
//#endregion
//#region src/modules/modal-image.ts
function wi(e, t, n) {
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
function Ti(e, t, n, r) {
	let i = wi(t, n, r);
	e.onerror = i === t ? null : () => {
		e.onerror = null, e.src = t;
	}, e.src = i;
}
//#endregion
//#region src/modules/modal.ts
var Ei = "[data-modal]", Di = "[data-modal-content]", Oi = "[data-modal-open]", ki = "[data-modal-close]", Ai = "a[href^=\"#modal:\"]", ji = "#modal:", Mi = 460, Ni = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Pi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Fi = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Ii = !1, Li = !0, Ri = null, zi = null, Bi = "", Vi = null, Hi = null, Ui = /* @__PURE__ */ new Map();
function Wi(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(ji) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Gi() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(ki),
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
	return t.closeButton.innerHTML = Ni, t.lightboxIcon.innerHTML = Pi, qi(t), t;
}
function Ki() {
	return (!zi || !document.body.contains(zi.root)) && (zi = Gi()), qi(zi), zi;
}
function qi(e) {
	var t, n;
	let r = (t = Ri == null ? void 0 : Ri.t("close", "Close")) == null ? "Close" : t, i = (n = Ri == null ? void 0 : Ri.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Ji(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Yi(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = Ji(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = x(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Xi(e) {
	var t, n, r, i;
	let a = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = Ji(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: S(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let s = Ji(e, "[data-modal-image]"), c = S(s);
	return c ? [{
		src: c,
		srcset: (t = s == null ? void 0 : s.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = s == null ? void 0 : s.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function Zi(e) {
	var t, n, i, a, o, s, c, l, u, d;
	let f = r(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, h = Xi(e), g = h[0], _ = e.querySelector("[data-modal-body]");
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
		work: Yi(e),
		gallery: h
	};
}
function Qi(e) {
	var t, n, i, a, o, s, c, l, u, d, f, p, m;
	let h = r(e, "data-modal");
	if (!h) return null;
	let g = e.querySelector(".fwm-modal__image"), _ = S(g), v = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, y = (i = e.closest(".w-dyn-item")) == null ? (a = e.closest(".w-embed")) == null ? void 0 : a.parentElement : i, b = y ? Array.from(y.querySelectorAll("[data-modal-rich-text]")).find((t) => t.closest(".w-dyn-item") === e.closest(".w-dyn-item")) : void 0, x = (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o;
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
function $i() {
	o(Di).forEach((e) => {
		let t = Zi(e);
		t && Ui.set(t.id, t);
	}), o(Ei).forEach((e) => {
		let t = Qi(e);
		t && Ui.set(t.id, t), e.remove();
	});
}
function ea(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(Di).find((e) => r(e, "data-modal-content") === n), a = i ? Zi(i) : null;
	return a && Ui.set(n, a), (t = a == null ? Ui.get(n) : a) == null ? null : t;
}
function ta(e) {
	try {
		let t = new URL(e, document.baseURI).pathname.match(/^\/werke\/([^/]+)\/?$/);
		if (!t) return e;
		let n = new URL("/werk-ueberblick", document.baseURI);
		return n.searchParams.set("work", decodeURIComponent(t[1])), n.hash = "werke", `${n.pathname}${n.search}${n.hash}`;
	} catch (t) {
		return e;
	}
}
function na(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", ta(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.src = e.thumbnail, t.alt = e.thumbnailAlt, t.loading = "lazy", t.decoding = "async", a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = Fi, o.append(e);
	}
	return i.append(o), i;
}
function ra(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", Ti(r, e.src, e.srcset, 500), i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Pi, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function ia(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function aa(e, t) {
	e.innerHTML = t, e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function oa(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? Ti(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : (e.image.onerror = null, e.image.removeAttribute("src")), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, aa(e.text, t.html), ia(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t, n) => e.gallery.append(ra(t, n)));
}
function sa(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.onerror = null, e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, aa(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(na(t.work)), o.forEach((t, n) => {
		e.gallery.append(ra(t, n));
	});
}
function ca(e) {
	let t = Ki();
	return e.layout === "context" ? sa(t, e) : oa(t, e), t;
}
function la(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function ua(e) {
	Hi !== null && (window.clearTimeout(Hi), Hi = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function da(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Hi = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Hi = null;
	}, u() ? 0 : Mi), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function fa(e, t) {
	var n, r, i, a, o, s, l, u, f, m, h, g;
	let _ = {
		id: e.id.trim(),
		address: (n = e.address) == null ? "" : n,
		layout: (r = e.layout) == null ? "default" : r,
		headline: (i = e.headline) == null ? "" : i,
		image: (a = e.image) == null ? "" : a,
		imageSrcset: e.imageSrcset,
		imageAlt: (o = e.imageAlt) == null ? "" : o,
		caption: (s = e.caption) == null ? "" : s,
		html: (l = e.html) == null ? "" : l,
		rights: (u = e.rights) == null ? "" : u,
		work: (f = e.work) == null ? null : f,
		gallery: (m = e.gallery) != null && m.length ? e.gallery : e.image ? [{
			src: e.image,
			alt: (h = e.imageAlt) == null ? "" : h,
			caption: (g = e.caption) == null ? "" : g
		}] : []
	};
	if (!_.id) return;
	Bi && ma(), Ui.set(_.id, _), Vi = t == null ? c() : t, Bi = _.id;
	let v = ca(_);
	ua(v), p(), la(v), d(v.root, "site:modal-open", {
		id: Bi,
		modal: v.root,
		content: _,
		trigger: t == null ? null : t
	});
}
function pa(e, t) {
	let n = ea(e);
	n && fa(n, t);
}
function ma() {
	if (!Bi || !zi) return;
	let t = Bi, r = Vi;
	da(zi), n(), Bi = "", Vi = null, d(zi.root, "site:modal-close", {
		id: t,
		modal: zi.root
	}), e(r);
}
function ha(e) {
	if (!(!Bi || !zi) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), ma();
			return;
		}
		y(zi.panel, e);
	}
}
function ga(e) {
	if (!Li || !Bi || !zi) return;
	let t = e.target;
	!i(t) || t !== zi.root || ma();
}
function _a(e) {
	var n;
	return Li = (n = e.closeOnBackdrop) == null || n, Ri = e.i18n, $i(), Ki(), Ii || (g(document, "click", Oi, (e, n) => {
		e.preventDefault(), pa(t(n, "data-modal-open"), n);
	}), g(document, "click", Ai, (e, t) => {
		e.preventDefault(), pa(Wi(t), t);
	}), g(document, "click", ki, (e, t) => {
		zi != null && zi.root.contains(t) && (e.preventDefault(), ma());
	}), document.addEventListener("click", ga), document.addEventListener("keydown", ha), Ii = !0), {
		openModal: pa,
		openContentModal: fa,
		closeModal: ma
	};
}
//#endregion
//#region src/modules/site-menu.ts
var va = "[data-site-menu]", ya = "[data-site-menu-panel]", ba = "[data-site-menu-toggle]", xa = "[data-site-menu-toggle-label]", Sa = "[data-site-menu-toggle-label-text]", Ca = "[data-site-menu-toggle-label-ghost]", wa = "data-site-menu-toggle-label-text", Ta = "data-site-menu-toggle-label-ghost", Ea = "[data-site-menu-link]", Da = "[data-site-menu-indicator]", Oa = "is-active", ka = "is-open", Aa = "is-ready", ja = "data-site-menu-open-label", Ma = "data-site-menu-closed-label", Na = "data-site-menu-current-key", Pa = "data-site-menu-label", Fa = "data-site-menu-key", Ia = "data-site-menu-original-tabindex", La = "CLOSE", Ra = "MENU", za = .42, Ba = [], Va = !1;
function Ha(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Ua(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Ha(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Wa(e, t) {
	return t ? r(e, Fa) === t : !1;
}
function Ga(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Wa(e, r(t, Na) || ((n = document.documentElement.getAttribute(Na)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(Na)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = Ua(e);
	return a ? a === Ha(window.location.pathname) : !1;
}
function Ka(e) {
	var t, n;
	return r(e, Pa) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function qa(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Oa) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Ga(t, e.root)) : t;
	return n ? Ka(n) : "";
}
function Ja(e) {
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
			qa(e),
			r(e.root, Ma) || Ra,
			r(e.root, ja) || La
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
function Ya(e) {
	var t, n;
	let r = s(Sa, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(wa, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Xa(e) {
	o(Ca, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Za(e, t = !0) {
	var n, i;
	let a = r(e.root, ja) || La, o = r(e.root, Ma) || Ra, s = qa(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = Ya(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), Xa(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(Ta, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: za,
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
function Qa(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Ia);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Ia) && e.hasAttribute("tabindex") && e.setAttribute(Ia, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function $a(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(ka, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Qa(e, t), Za(e, n);
}
function eo(e, t, n) {
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
function to(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	$a(e, !0), eo(e, !0, t);
}
function no(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return $a(e, !1), eo(e, !1, t);
}
function ro(e) {
	let t = s(ya, e);
	if (t) return b.killTweensOf(t), b.to(t, {
		height: 0,
		duration: .4,
		ease: "power2.inOut"
	});
}
function io(e) {
	e.isOpen ? no(e) : to(e);
}
function ao(e) {
	e.links.forEach((t) => {
		let n = Ga(t, e.root), r = s(Da, t);
		t.classList.toggle(Oa, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function oo(e) {
	var t;
	let n = s(ya, e), r = s(ba, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(xa, r)) == null ? s(xa, e) : t,
		links: o(Ea, e),
		isOpen: e.classList.contains(ka),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Ba.length + 1}`), r.setAttribute("aria-controls", n.id), ao(i), $a(i, i.isOpen, !1), i.cleanup.push(Ja(i)), e.classList.add(Aa);
	let a = (e) => {
		e.preventDefault(), io(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || no(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (no(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(Ea) || no(i);
	}, d = () => {
		i.isHovered = !0, Za(i);
	}, f = () => {
		i.isHovered = !1, Za(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function so(e = document) {
	if (Va && e === document) return () => void 0;
	e === document && (Va = !0);
	let t = o(va, e).map(oo).filter((e) => !!e);
	return Ba.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Aa, ka);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(Sa, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), Xa(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Qa(e, !0);
		});
	};
}
//#endregion
//#region src/modules/page-transition.ts
var co = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, lo = "page-transition-overlay", uo = "[data-page-transition-overlay], .page-transition-overlay", fo = "site-page-transition", po = "pending", mo = "is-page-transition-pending", ho = "[data-site-menu]", go = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), _o = !1, vo = !1;
function yo(e) {
	document.documentElement.classList.toggle(mo, e);
}
function bo() {
	try {
		yo(window.sessionStorage.getItem(fo) === po);
	} catch (e) {
		yo(!1);
	}
}
function xo() {
	let e = document.querySelector(uo);
	if (e) return e.classList.add(lo), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = lo, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function So(e) {
	var t;
	return !!(e.closest(go) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function Co(e, t) {
	return !vo && !e.defaultPrevented && !l(e) && !So(t);
}
function wo() {
	try {
		window.sessionStorage.setItem(fo, po), yo(!0);
	} catch (e) {}
}
function To() {
	try {
		let e = window.sessionStorage.getItem(fo) === po;
		return window.sessionStorage.removeItem(fo), yo(!1), e;
	} catch (e) {
		return yo(!1), !1;
	}
}
function Eo(e) {
	let t = To(), n = Array.from(document.querySelectorAll(ho)), r = () => {
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
		delay: co.holdDuration,
		duration: co.revealDuration,
		ease: co.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			}), r();
		}
	});
}
function Do(e, t, n) {
	vo = !0, b.killTweensOf(t);
	let r = b.timeline();
	if (n) {
		b.killTweensOf(n);
		let e = ro(n);
		e && r.add(e);
	}
	r.call(wo, [], 0), r.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: co.coverDuration,
		ease: co.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	}, 0);
}
function Oo(e, t) {
	if (!e.persisted) return;
	vo = !1, To(), b.killTweensOf(t), b.set(t, {
		yPercent: -100,
		y: 0
	});
	let n = document.querySelectorAll(ho);
	b.killTweensOf(n), b.set(n, { clearProps: "transform,opacity,visibility" });
	let r = document.querySelectorAll("[data-site-menu-panel]");
	b.killTweensOf(r), b.set(r, { clearProps: "height" });
}
function ko() {
	if (_o) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", ko, { once: !0 });
		return;
	}
	_o = !0;
	let e = xo();
	ee(() => Eo(e)), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (vo) {
			t.preventDefault();
			return;
		}
		if (!Co(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), Do(i, e, r.closest(ho)));
	}, !0), window.addEventListener("pageshow", (t) => Oo(t, e));
}
bo();
//#endregion
//#region src/modules/parallax.ts
var Ao = "[data-parallax]", jo = "data-parallax", Mo = "data-parallax-ready", No = "fw-parallax-window", Po = "fw-parallax-window--self-sized", Fo = "fw-parallax-inner", Io = 60, Lo = 160, Ro = ".site-lightbox-trigger", zo = 1, Bo = !1;
function Vo() {
	Bo || (Bo = !0, b.registerPlugin($));
}
function Ho(e) {
	let t = e.getAttribute(jo);
	if (t === null || t.trim() === "") return Io;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.min(Math.abs(n), Lo) : Io;
}
function Uo(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Wo(e, t) {
	var n;
	let r = (n = e.closest(Ro)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(No)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(No);
	let a = document.createElement("span"), o = t / 2 + zo;
	if (a.className = Fo, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(No), null;
		r.classList.add(Po), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function Go(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Ko(e)
		});
		return;
	}
	n.forEach((n) => {
		Uo(n).then(() => {
			if (!n.isConnected) return;
			let r = Wo(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: Ko(e)
			}), $.refresh());
		});
	});
}
function Ko(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function qo(e = document) {
	let t = o(Ao, e).filter((e) => !e.hasAttribute(Mo));
	t.length === 0 || u() || (Vo(), t.forEach((e) => {
		let t = Ho(e);
		t !== 0 && (e.setAttribute(Mo, ""), Go(e, t));
	}));
}
//#endregion
//#region src/modules/spline-slider.ts
var Jo = ".werk_hero_slider", Yo = ".werk_hero_track";
function Xo(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function Zo(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function Qo(e) {
	let t = e.closest(Jo), n = t == null ? void 0 : t.querySelector(Yo);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = Xo(e, n), i = Zo(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function $o(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function es(e, t) {
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
function ts(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function ns(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function rs(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function is(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function as(e, t) {
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
function os() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return ts(e, t);
				let r = new Image();
				return r.src = e, es(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = rs(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = ns(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || is(n) ? "critical" : "warm" : i,
			load: (e) => es(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && Qo(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = ns(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = rs(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => as(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", as(r, e))
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
			let t = ns(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => $o(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function ss(e) {
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
async function cs(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await $o(a.shift().load(n.signal), n.signal);
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
var ls = !1;
function us(e) {
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
function ds(e, t) {
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
function fs(e, t) {
	let n = u(), r = 0, i = 0, a = 0, o = 0, s = !1, c = !1, l = 0, d = performance.now(), f = 0, p, m = new Promise((e) => {
		p = e;
	}), h = (t) => {
		let n = Math.max(o, Math.min(100, Math.floor(t)));
		n === o && n !== 100 || (o = n, ds(e, o));
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
function ps(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function ms(e, t) {
	if (u() || t.aborted) return Promise.resolve();
	document.documentElement.classList.add(w);
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
function hs() {
	if (ls) return;
	ls = !0;
	let e = window.__sitePreloader;
	if (!(e != null && e.active)) return;
	let t = document.querySelector(C);
	if (!t) {
		e.release();
		return;
	}
	let n = new AbortController(), r = fs(t, e.startedAt);
	e.cleanup.push(() => {
		n.abort(), r.stop(), b.killTweensOf(t), b.killTweensOf(t.querySelectorAll(".site-preloader__track, .site-preloader__progress, .site-preloader__name, .site-preloader__signature"));
	});
	let i = async () => {
		if (await ss(n.signal), !e.active) return;
		let i = os(), a = i.filter((e) => e.priority === "critical"), o = 0;
		r.setTasks(0, a.length), await Promise.all(a.map(async (t) => {
			await $o(Promise.resolve().then(() => t.load(n.signal)), n.signal), o++, e.active && r.setTasks(o, a.length);
		})), e.active && (await us(n.signal), e.active && (await ps(Math.max(0, T - (Date.now() - e.startedAt)), n.signal), e.active && (await r.complete(), e.active && (await ms(t, n.signal), e.active && (e.release(), cs(i))))));
	}, a = () => {
		i().catch(e.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a, { once: !0 }) : a();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var gs = !1, _s = !1;
function vs() {
	if (_s || u()) return;
	_s = !0;
	let e, t = () => {
		let t = window.lenis;
		if (gs || !window.__siteLenisManaged || !t) return;
		gs = !0, b.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		b.ticker.add(n), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			b.ticker.remove(n), t.off("scroll", $.update), gs = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), gs || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/main.ts
var ys = !1;
hs(), ko(), jr(), vs();
function bs() {
	if (ys) return;
	ys = !0;
	let e = O();
	_a({ i18n: e }), Ci({ i18n: e }), qo(), so(), se(), _(), E(), window.SiteInteractions = {
		openModal: pa,
		openContentModal: fa,
		closeModal: ma,
		openLightbox: yi,
		closeLightbox: bi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", bs, { once: !0 }) : bs();
//#endregion

//# sourceMappingURL=site-interactions.js.map