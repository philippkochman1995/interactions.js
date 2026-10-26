import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { t as x } from "./site-interactions-CKkKncuX.js";
import { a as S, i as C, n as w, r as T, t as E } from "./site-interactions-HQKELVCL.js";
//#region src/modules/i18n.ts
var D = {};
function O(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function ee(e = document) {
	var t, n;
	D = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (D = O(v(i))), {
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
var A = ".site-menu__languages", j = ".site-menu__language", te = "site-menu__language-indicator";
function M(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function ne(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function re(e) {
	let t = Array.from(e.querySelectorAll(j)), n = M(t);
	if (!n || e.querySelector(`.${te}`)) return;
	let r = document.createElement("span");
	r.className = te, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => ne(e, r, t), a = () => {
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
function ie() {
	document.querySelectorAll(A).forEach(re);
}
//#endregion
//#region node_modules/gsap/Observer.js
function ae(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function oe(e, t, n) {
	return t && ae(e.prototype, t), n && ae(e, n), e;
}
var N, P, F, I, se, ce, L, R, z, le, ue, B, de, fe = function() {
	return N || typeof window < "u" && (N = window.gsap) && N.registerPlugin && N;
}, pe = 1, V = [], H = [], U = [], me = Date.now, he = function(e, t) {
	return t;
}, ge = function() {
	var e = z.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, H), r.push.apply(r, U), H = n, U = r, he = function(e, n) {
		return t[e](n);
	};
}, _e = function(e, t) {
	return ~U.indexOf(e) && U[U.indexOf(e) + 1][t];
}, ve = function(e) {
	return !!~le.indexOf(e);
}, ye = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, be = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, xe = "scrollLeft", Se = "scrollTop", Ce = function() {
	return ue && ue.isPressed || H.cache++;
}, W = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			pe && (F.history.scrollRestoration = "manual");
			var i = ue && ue.isPressed;
			r = n.v = Math.round(r) || (ue && ue.iOS ? 1 : 0), e(r), n.cacheID = H.cache, i && he("ss", r);
		} else (t || H.cache !== n.cacheID || he("ref")) && (n.cacheID = H.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, we = {
	s: xe,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: W(function(e) {
		return arguments.length ? F.scrollTo(e, Te.sc()) : F.pageXOffset || I[xe] || se[xe] || ce[xe] || 0;
	})
}, Te = {
	s: Se,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: we,
	sc: W(function(e) {
		return arguments.length ? F.scrollTo(we.sc(), e) : F.pageYOffset || I[Se] || se[Se] || ce[Se] || 0;
	})
}, Ee = function(e, t) {
	return (t && t._ctx && t._ctx.selector || N.utils.toArray)(e)[0] || (typeof e == "string" && N.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, De = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Oe = function(e, t) {
	var n = t.s, r = t.sc;
	ve(e) && (e = I.scrollingElement || se);
	var i = H.indexOf(e), a = r === Te.sc ? 1 : 2;
	!~i && (i = H.push(e) - 1), H[i + a] || ye(e, "scroll", Ce);
	var o = H[i + a], s = o || (H[i + a] = W(_e(e, n), !0) || (ve(e) ? r : W(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = N.getProperty(e, "scrollBehavior") === "smooth"), s;
}, ke = function(e, t, n) {
	var r = e, i = e, a = me(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = me();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = me();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Ae = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, je = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Me = function() {
	z = N.core.globals().ScrollTrigger, z && z.core && ge();
}, Ne = function(e) {
	return N = e || fe(), !P && N && typeof document < "u" && document.body && (F = window, I = document, se = I.documentElement, ce = I.body, le = [
		F,
		I,
		se,
		ce
	], N.utils.clamp, de = N.core.context || function() {}, R = "onpointerenter" in ce ? "pointer" : "mouse", L = G.isTouch = F.matchMedia && F.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in F || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, B = G.eventTypes = ("ontouchstart" in se ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in se ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return pe = 0;
	}, 500), P = 1), z || Me(), P;
};
we.op = Te, H.cache = 0;
var G = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		P || Ne(N) || console.warn("Please gsap.registerPlugin(Observer)"), z || Me();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, ee = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, j = e.onGestureStart, te = e.onGestureEnd, M = e.onWheel, ne = e.onEnable, re = e.onDisable, ie = e.onClick, ae = e.scrollSpeed, oe = e.capture, le = e.allowClicks, fe = e.lockAxis, pe = e.onLockAxis;
		this.target = i = Ee(i) || se, this.vars = e, u && (u = N.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ae = ae || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(F.getComputedStyle(ce).lineHeight) || 22);
		var H, U, he, ge, _e, xe, Se, W = this, G = 0, K = 0, q = e.passive || !s && e.passive !== !1, J = Oe(i, we), Y = Oe(i, Te), Pe = J(), X = Y(), Fe = ~r.indexOf("touch") && !~r.indexOf("pointer") && B[0] === "pointerdown", Ie = ve(i), Z = i.ownerDocument || I, Le = [
			0,
			0,
			0
		], Re = [
			0,
			0,
			0
		], ze = 0, Be = function() {
			return ze = me();
		}, Ve = function(e, t) {
			return (W.event = e) && u && De(e.target, u) || t && Fe && e.pointerType !== "touch" || k && k(e, t);
		}, He = function() {
			W._vx.reset(), W._vy.reset(), U.pause(), c && c(W);
		}, Ue = function() {
			var e = W.deltaX = je(Le), n = W.deltaY = je(Re), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(W, e, n, Le, Re), r && (v && W.deltaX > 0 && v(W), y && W.deltaX < 0 && y(W), S && S(W), T && W.deltaX < 0 != G < 0 && T(W), G = W.deltaX, Le[0] = Le[1] = Le[2] = 0), i && (x && W.deltaY > 0 && x(W), b && W.deltaY < 0 && b(W), C && C(W), E && W.deltaY < 0 != K < 0 && E(W), K = W.deltaY, Re[0] = Re[1] = Re[2] = 0), (ge || he) && (ee && ee(W), he && (p && he === 1 && p(W), h && h(W), he = 0), ge = !1), xe && !(xe = !1) && pe && pe(W), _e && (M(W), _e = !1), H = 0;
		}, We = function(e, t, n) {
			Le[n] += e, Re[n] += t, W._vx.update(e), W._vy.update(t), o ? H || (H = requestAnimationFrame(Ue)) : Ue();
		}, Ge = function(e, t) {
			fe && !Se && (W.axis = Se = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), Se !== "y" && (Le[2] += e, W._vx.update(e, !0)), Se !== "x" && (Re[2] += t, W._vy.update(t, !0)), o ? H || (H = requestAnimationFrame(Ue)) : Ue();
		}, Ke = function(e) {
			if (!Ve(e, 1)) {
				e = Ae(e, s);
				var t = e.clientX, r = e.clientY, i = t - W.x, a = r - W.y, o = W.isDragging;
				W.x = t, W.y = r, (o || (i || a) && (Math.abs(W.startX - t) >= n || Math.abs(W.startY - r) >= n)) && (he || (he = o ? 2 : 1), o || (W.isDragging = !0), Ge(i, a));
			}
		}, qe = W.onPress = function(e) {
			Ve(e, 1) || e && e.button || (W.axis = Se = null, U.pause(), W.isPressed = !0, e = Ae(e), G = K = 0, W.startX = W.x = e.clientX, W.startY = W.y = e.clientY, W._vx.reset(), W._vy.reset(), ye(A ? i : Z, B[1], Ke, q, !0), W.deltaX = W.deltaY = 0, g && g(W));
		}, Je = W.onRelease = function(e) {
			if (!Ve(e, 1)) {
				be(A ? i : Z, B[1], Ke, !0);
				var t = !isNaN(W.y - W.startY), n = W.isDragging, r = n && (Math.abs(W.x - W.startX) > 3 || Math.abs(W.y - W.startY) > 3), a = Ae(e);
				!r && t && (W._vx.reset(), W._vy.reset(), s && le && N.delayedCall(.08, function() {
					if (me() - ze > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (Z.createEvent) {
							var t = Z.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, F, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), W.isDragging = W.isGesturing = W.isPressed = !1, c && n && !A && U.restart(!0), he && Ue(), m && n && m(W), _ && _(W, r);
			}
		}, Ye = function(e) {
			return e.touches && e.touches.length > 1 && (W.isGesturing = !0) && j(e, W.isDragging);
		}, Xe = function() {
			return (W.isGesturing = !1) || te(W);
		}, Ze = function(e) {
			if (!Ve(e)) {
				var t = J(), n = Y();
				We((t - Pe) * ae, (n - X) * ae, 1), Pe = t, X = n, c && U.restart(!0);
			}
		}, Qe = function(e) {
			if (!Ve(e)) {
				e = Ae(e, s), M && (_e = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? F.innerHeight : 1) * d;
				We(e.deltaX * t, e.deltaY * t, 0), c && !A && U.restart(!0);
			}
		}, $e = function(e) {
			if (!Ve(e)) {
				var t = e.clientX, n = e.clientY, r = t - W.x, i = n - W.y;
				W.x = t, W.y = n, ge = !0, c && U.restart(!0), (r || i) && Ge(r, i);
			}
		}, et = function(e) {
			W.event = e, D(W);
		}, tt = function(e) {
			W.event = e, O(W);
		}, nt = function(e) {
			return Ve(e) || Ae(e, s) && ie(W);
		};
		U = W._dc = N.delayedCall(l || .25, He).pause(), W.deltaX = W.deltaY = 0, W._vx = ke(0, 50, !0), W._vy = ke(0, 50, !0), W.scrollX = J, W.scrollY = Y, W.isDragging = W.isGesturing = W.isPressed = !1, de(this), W.enable = function(e) {
			return W.isEnabled || (ye(Ie ? Z : i, "scroll", Ce), r.indexOf("scroll") >= 0 && ye(Ie ? Z : i, "scroll", Ze, q, oe), r.indexOf("wheel") >= 0 && ye(i, "wheel", Qe, q, oe), (r.indexOf("touch") >= 0 && L || r.indexOf("pointer") >= 0) && (ye(i, B[0], qe, q, oe), ye(Z, B[2], Je), ye(Z, B[3], Je), le && ye(i, "click", Be, !0, !0), ie && ye(i, "click", nt), j && ye(Z, "gesturestart", Ye), te && ye(Z, "gestureend", Xe), D && ye(i, R + "enter", et), O && ye(i, R + "leave", tt), ee && ye(i, R + "move", $e)), W.isEnabled = !0, W.isDragging = W.isGesturing = W.isPressed = ge = he = !1, W._vx.reset(), W._vy.reset(), Pe = J(), X = Y(), e && e.type && qe(e), ne && ne(W)), W;
		}, W.disable = function() {
			W.isEnabled && (V.filter(function(e) {
				return e !== W && ve(e.target);
			}).length || be(Ie ? Z : i, "scroll", Ce), W.isPressed && (W._vx.reset(), W._vy.reset(), be(A ? i : Z, B[1], Ke, !0)), be(Ie ? Z : i, "scroll", Ze, oe), be(i, "wheel", Qe, oe), be(i, B[0], qe, oe), be(Z, B[2], Je), be(Z, B[3], Je), be(i, "click", Be, !0), be(i, "click", nt), be(Z, "gesturestart", Ye), be(Z, "gestureend", Xe), be(i, R + "enter", et), be(i, R + "leave", tt), be(i, R + "move", $e), W.isEnabled = W.isPressed = W.isDragging = !1, re && re(W));
		}, W.kill = W.revert = function() {
			W.disable();
			var e = V.indexOf(W);
			e >= 0 && V.splice(e, 1), ue === W && (ue = 0);
		}, V.push(W), A && ve(i) && (ue = W), W.enable(f);
	}, oe(e, [{
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
}, G.register = Ne, G.getAll = function() {
	return V.slice();
}, G.getById = function(e) {
	return V.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, fe() && N.registerPlugin(G);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var K, q, J, Y, Pe, X, Fe, Ie, Z, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct = 1, lt = Date.now, ut = lt(), dt = 0, ft = 0, pt = function(e, t, n) {
	var r = kt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, mt = function(e, t) {
	return t && (!kt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, ht = function e() {
	return ft && requestAnimationFrame(e);
}, gt = function() {
	return Ve = 1;
}, _t = function() {
	return Ve = 0;
}, vt = function(e) {
	return e;
}, yt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, bt = function() {
	return typeof window < "u";
}, xt = function() {
	return K || bt() && (K = window.gsap) && K.registerPlugin && K;
}, St = function(e) {
	return !!~Fe.indexOf(e);
}, Ct = function(e) {
	return (e === "Height" ? it : J["inner" + e]) || Pe["client" + e] || X["client" + e];
}, wt = function(e) {
	return _e(e, "getBoundingClientRect") || (St(e) ? function() {
		return Zn.width = J.innerWidth, Zn.height = it, Zn;
	} : function() {
		return en(e);
	});
}, Tt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = _e(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Ct(i) : e["client" + i]) || 0;
	};
}, Et = function(e, t) {
	return !t || ~U.indexOf(e) ? wt(e) : function() {
		return Zn;
	};
}, Dt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = _e(e, n)) ? a() - wt(e)()[i] : St(e) ? (Pe[n] || X[n]) - Ct(r) : e[n] - e["offset" + r]);
}, Ot = function(e, t) {
	for (var n = 0; n < Ke.length; n += 3) (!t || ~t.indexOf(Ke[n + 1])) && e(Ke[n], Ke[n + 1], Ke[n + 2]);
}, kt = function(e) {
	return typeof e == "string";
}, At = function(e) {
	return typeof e == "function";
}, jt = function(e) {
	return typeof e == "number";
}, Mt = function(e) {
	return typeof e == "object";
}, Nt = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, Pt = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, Ft = Math.abs, It = "left", Lt = "top", Rt = "right", zt = "bottom", Bt = "width", Vt = "height", Ht = "Right", Ut = "Left", Wt = "Top", Gt = "Bottom", Kt = "padding", qt = "margin", Jt = "Width", Yt = "Height", Xt = "px", Zt = function(e) {
	return J.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Qt = function(e) {
	var t = Zt(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, $t = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, en = function(e, t) {
	var n = t && Zt(e)[He] !== "matrix(1, 0, 0, 1, 0, 0)" && K.to(e, {
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
}, tn = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, nn = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, rn = function(e) {
	return function(t) {
		return K.utils.snap(nn(e), t);
	};
}, an = function(e) {
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
}, on = function(e) {
	return function(t, n) {
		return an(nn(e))(t, n.direction);
	};
}, sn = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, cn = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, ln = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, un = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, dn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, fn = {
	toggleActions: "play",
	anticipatePin: 0
}, pn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, mn = function(e, t) {
	if (kt(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in pn ? pn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, hn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = Y.createElement("div"), m = St(n) || _e(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? X : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === Te ? Rt : zt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], gn(p, 0, r, _), p;
}, gn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Jt] = 1, i["border" + o + Jt] = 0, i[n.p] = t + "px", K.set(e, i);
}, Q = [], _n = {}, vn, yn = function() {
	return lt() - dt > 34 && (vn || (vn = requestAnimationFrame(Hn)));
}, bn = function() {
	(!Xe || !Xe.isPressed || Xe.startX > X.clientWidth) && (H.cache++, Xe ? vn || (vn = requestAnimationFrame(Hn)) : Hn(), dt || En("scrollStart"), dt = lt());
}, xn = function() {
	$e = J.innerWidth, Qe = J.innerHeight;
}, Sn = function(e) {
	H.cache++, (e === !0 || !Be && !Ye && !Y.fullscreenElement && !Y.webkitFullscreenElement && (!Ze || $e !== J.innerWidth || Math.abs(J.innerHeight - Qe) > J.innerHeight * .25)) && Ie.restart(!0);
}, Cn = {}, wn = [], Tn = function e() {
	return ln($, "scrollEnd", e) || Rn(!0);
}, En = function(e) {
	return Cn[e] && Cn[e].map(function(e) {
		return e();
	}) || wn;
}, Dn = [], On = function(e) {
	for (var t = 0; t < Dn.length; t += 5) (!e || Dn[t + 4] && Dn[t + 4].query === e) && (Dn[t].style.cssText = Dn[t + 1], Dn[t].getBBox && Dn[t].setAttribute("transform", Dn[t + 2] || ""), Dn[t + 3].uncache = 1);
}, kn = function() {
	return H.forEach(function(e) {
		return At(e) && ++e.cacheID && (e.rec = e());
	});
}, An = function(e, t) {
	var n;
	for (Ue = 0; Ue < Q.length; Ue++) n = Q[Ue], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	at = !0, t && On(t), t || En("revert");
}, jn = function(e, t) {
	H.cache++, (t || !Mn) && H.forEach(function(e) {
		return At(e) && e.cacheID++ && (e.rec = 0);
	}), kt(e) && (J.history.scrollRestoration = nt = e);
}, Mn, Nn = 0, Pn, Fn = function() {
	if (Pn !== Nn) {
		var e = Pn = Nn;
		requestAnimationFrame(function() {
			return e === Nn && Rn(!0);
		});
	}
}, In = function() {
	X.appendChild(rt), it = !Xe && rt.offsetHeight || J.innerHeight, X.removeChild(rt);
}, Ln = function(e) {
	return Z(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Rn = function(e, t) {
	if (Pe = Y.documentElement, X = Y.body, Fe = [
		J,
		Y,
		Pe,
		X
	], dt && !e && !at) {
		cn($, "scrollEnd", Tn);
		return;
	}
	In(), Mn = $.isRefreshing = !0, at || kn();
	var n = En("refreshInit");
	qe && $.sort(), t || An(), H.forEach(function(e) {
		At(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), at = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), ot = 1, Ln(!0), Q.forEach(function(e) {
		var t = Dt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), Ln(!1), ot = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), H.forEach(function(e) {
		At(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), jn(nt, 1), Ie.pause(), Nn++, Mn = 2, Hn(2), Q.forEach(function(e) {
		return At(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), Mn = $.isRefreshing = !1, En("refresh");
}, zn = 0, Bn = 1, Vn, Hn = function(e) {
	if (e === 2 || !Mn && !at) {
		$.isUpdating = !0, Vn && Vn.update(0);
		var t = Q.length, n = lt(), r = n - ut >= 50, i = t && Q[0].scroll();
		if (Bn = zn > i ? -1 : 1, Mn || (zn = i), r && (dt && !Ve && n - dt > 200 && (dt = 0, En("scrollEnd")), Re = ut, ut = n), Bn < 0) {
			for (Ue = t; Ue-- > 0;) Q[Ue] && Q[Ue].update(0, r);
			Bn = 1;
		} else for (Ue = 0; Ue < t; Ue++) Q[Ue] && Q[Ue].update(0, r);
		$.isUpdating = !1;
	}
	vn = 0;
}, Un = [
	It,
	Lt,
	zt,
	Rt,
	qt + Gt,
	qt + Ht,
	qt + Wt,
	qt + Ut,
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
], Wn = Un.concat([
	Bt,
	Vt,
	"boxSizing",
	"max" + Jt,
	"max" + Yt,
	"position",
	qt,
	Kt,
	Kt + Wt,
	Kt + Ht,
	Kt + Gt,
	Kt + Ut
]), Gn = function(e, t, n) {
	Jn(n);
	var r = e._gsap;
	if (r.spacerIsNative) Jn(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Kn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Un.length, a = t.style, o = e.style, s; i--;) s = Un[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[zt] = o[Rt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Bt] = tn(e, we) + Xt, a[Vt] = tn(e, Te) + Xt, a[Kt] = o[qt] = o[Lt] = o[It] = "0", Jn(r), o[Bt] = o["max" + Jt] = n[Bt], o[Vt] = o["max" + Yt] = n[Vt], o[Kt] = n[Kt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, qn = /([A-Z])/g, Jn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(qn, "-$1").toLowerCase());
	}
}, Yn = function(e) {
	for (var t = Wn.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Wn[i], n[Wn[i]]);
	return r.t = e, r;
}, Xn = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Zn = {
	left: 0,
	top: 0
}, Qn = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	At(e) && (e = e(s)), kt(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? mn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), jt(e)) f && (e = K.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && gn(o, n, r, !0);
	else {
		At(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Ee(t, s) || X, y = en(_) || {}, (!y || !y.left && !y.top) && Zt(_).display === "none" && (S = _.style.display, _.style.display = "block", y = en(_), S ? _.style.display = S : _.style.removeProperty("display")), b = mn(v[0], y[r.d]), x = mn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && gn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, gn(a, C, r, w && C > 20 || !w && (u ? Math.max(X[h], Pe[h]) : a.parentNode[h]) <= C + 1), u && (c = en(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Xt));
	}
	return f && _ && (h = en(_), f.seek(d), g = en(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, $n = /(webkit|moz|length|cssText|inset)/i, er = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === X) {
			for (a in e._stOrig = i.cssText, o = Zt(e), o) !+a && !$n.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		K.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, tr = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, nr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, K.set(e, r);
}, rr = function(e, t) {
	var n = Oe(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = tr(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			H.cache++, t.tween && Hn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = K.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, cn(e, "wheel", n.wheelHandler), $.isTouch && cn(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		q || e.register(K) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), tt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ft) {
			this.update = this.refresh = this.kill = vt;
			return;
		}
		t = $t(kt(t) || jt(t) || t.nodeType ? { trigger: t } : t, fn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? we : Te, T = !l && l !== 0, E = Ee(t.scroller || J), D = K.core.getCache(E), O = St(E), ee = ("pinType" in t ? t.pinType : _e(E, "pinType") || O && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = T && t.toggleActions.split(" "), j = "markers" in t ? t.markers : fn.markers, te = O ? 0 : parseFloat(Zt(E)["border" + w.p2 + Jt]) || 0, M = this, ne = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, re = Tt(E, O, w), ie = Et(E, O), ae = 0, oe = 0, N = 0, P = Oe(E, w), F, I, se, ce, L, R, z, le, ue, B, de, fe, pe, V, me, he, ge, ve, ye, be, xe, Se, Ce, W, De, ke, Ae, je, Me, Ne, G, q, Fe, Ie, ze, He, We, Ge, Ke;
		if (M._startClamp = M._endClamp = !1, M._dir = w, m *= 45, M.scroller = E, M.scroll = x ? x.time.bind(x) : P, ce = P(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (qe = 1, t.refreshPriority === -9999 && (Vn = M)), D.tweenScroll = D.tweenScroll || {
			top: rr(E, Te),
			left: rr(E, we)
		}, M.tweenTo = F = D.tweenScroll[w.p], M.scrubDuration = function(e) {
			Fe = jt(e) && e, Fe ? q ? q.duration(e) : q = K.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Fe,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (q && q.progress(1).kill(), q = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), Ne = 0, o || (o = n.vars.id)), v && ((!Mt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in X.style && K.set(O ? [X, Pe] : E, { scrollBehavior: "auto" }), H.forEach(function(e) {
			return At(e) && e.target === (O ? Y.scrollingElement || Pe : E) && (e.smooth = !1);
		}), se = At(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? rn(n) : v.snapTo === "labelsDirectional" ? on(n) : v.directional === !1 ? K.utils.snap(v.snapTo) : function(e, t) {
			return an(v.snapTo)(e, lt() - oe < 500 ? 0 : t.direction);
		}, Ie = v.duration || {
			min: .1,
			max: 2
		}, Ie = Mt(Ie) ? Le(Ie.min, Ie.max) : Le(Ie, Ie), ze = K.delayedCall(v.delay || Fe / 2 || .1, function() {
			var e = P(), t = lt() - oe < 500, r = F.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !Ve && ae !== e) {
				var i = (e - R) / V, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - G) / (lt() - Re) * 1e3 || 0, s = K.utils.clamp(-i, 1 - i, Ft(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = se(c, M), jt(l) || (l = c), u = Math.max(0, Math.round(R + l * V)), e <= z && e >= R && u !== e) {
					if (r && !r._initted && r.data <= Ft(u - e)) return;
					v.inertia === !1 && (s = l - i), F(u, {
						duration: Ie(Ft(Math.max(Ft(c - a), Ft(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Ft(u - e),
						onInterrupt: function() {
							return ze.restart(!0) && p && Pt(M, p);
						},
						onComplete: function() {
							M.update(), ae = P(), n && !T && (q ? q.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Ne = G = n && !T ? n.totalProgress() : M.progress, g && g(M), m && Pt(M, m);
						}
					}, e, s * V, u - e - s * V), f && Pt(M, f, F.tween);
				}
			} else M.isActive && ae !== e && ze.restart(!0);
		}).pause()), o && (_n[o] = M), u = M.trigger = Ee(u || d !== !0 && d), Ke = u && u._gsap && u._gsap.stRevert, Ke && (Ke = Ke(M)), d = d === !0 ? u : Ee(d), kt(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === qt || (f = !f && d.parentNode && d.parentNode.style && Zt(d.parentNode).display === "flex" ? !1 : Kt), M.pin = d, I = K.core.getCache(d), I.spacer ? me = I.pinState : (b && (b = Ee(b), b && !b.nodeType && (b = b.current || b.nativeElement), I.spacerIsNative = !!b, b && (I.spacerState = Yn(b))), I.spacer = ve = b || Y.createElement("div"), ve.classList.add("pin-spacer"), o && ve.classList.add("pin-spacer-" + o), I.pinState = me = Yn(d)), t.force3D !== !1 && K.set(d, { force3D: !0 }), M.spacer = ve = I.spacer, Me = Zt(d), W = Me[f + w.os2], be = K.getProperty(d), xe = K.quickSetter(d, w.a, Xt), Kn(d, ve, Me), ge = Yn(d)), j) {
			fe = Mt(j) ? $t(j, dn) : dn, B = hn("scroller-start", o, E, w, fe, 0), de = hn("scroller-end", o, E, w, fe, 0, B), ye = B["offset" + w.op.d2];
			var Ye = Ee(_e(E, "content") || E);
			le = this.markerStart = hn("start", o, Ye, w, fe, ye, 0, x), ue = this.markerEnd = hn("end", o, Ye, w, fe, ye, 0, x), x && (Ge = K.quickSetter([le, ue], w.a, Xt)), !ee && !(U.length && _e(E, "fixedMarkers") === !0) && (Qt(O ? X : E), K.set([B, de], { force3D: !0 }), ke = K.quickSetter(B, w.a, Xt), je = K.quickSetter(de, w.a, Xt));
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
			var r = e !== !1 || !M.enabled, i = Be;
			r !== M.isReverted && (r && (He = Math.max(P(), M.scroll.rec || 0), N = M.progress, We = n && n.progress()), le && [
				le,
				ue,
				B,
				de
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (Be = M, M.update(r)), d && (!y || !M.isActive) && (r ? Gn(d, ve, me) : Kn(d, ve, Zt(d), De)), r || M.update(r), Be = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((Be || !M.enabled) && !i)) {
				if (d && r && dt) {
					cn(e, "scrollEnd", Tn);
					return;
				}
				!Mn && ne && ne(M), Be = M, F.tween && !a && (F.tween.kill(), F.tween = 0), q && q.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = re(), l = ie(), m = x ? x.duration() : Dt(E, w), h = V <= .01 || !V, g = 0, _ = o || 0, v = Mt(a) ? a.end : t.end, b = t.endTrigger || u, S = Mt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = M.pinnedContainer = t.pinnedContainer && Ee(t.pinnedContainer, M), D = u && Math.max(0, Q.indexOf(M)) || 0, k = D, A, I, se, fe, H, U, _e, ye, xe, W, ke, je, Me;
				for (j && Mt(a) && (je = K.getProperty(B, w.p), Me = K.getProperty(de, w.p)); k-- > 0;) U = Q[k], U.end || U.refresh(0, 1) || (Be = M), _e = U.pin, _e && (_e === u || _e === d || _e === C) && !U.isReverted && (W || (W = []), W.unshift(U), U.revert(!0, !0)), U !== Q[k] && (D--, k--);
				for (At(S) && (S = S(M)), S = pt(S, "start", M), R = Qn(S, u, s, w, P(), le, B, M, l, te, ee, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), At(v) && (v = v(M)), kt(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (kt(S) ? S.split(" ")[0] : "") + v : (g = mn(v.substr(2), s), v = kt(S) ? S : (x ? K.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, R) : R) + g, b = u)), v = pt(v, "end", M), z = Math.max(R, Qn(v || (b ? "100% 0" : m), b, s, w, P() + g, ue, de, M, l, te, ee, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = D; k--;) U = Q[k] || {}, _e = U.pin, _e && U.start - U._pinPush <= R && !x && U.end > 0 && (A = U.end - (M._startClamp ? Math.max(0, U.start) : U.start), (_e === u && U.start - U._pinPush < R || _e === C) && isNaN(S) && (g += A * (1 - U.progress)), _e === d && (_ += A));
				if (R += g, z += g, M._startClamp && (M._startClamp += g), M._endClamp && !Mn && (M._endClamp = z || -.001, z = Math.min(z, Dt(E, w))), V = z - R || (R -= .01) && .001, h && (N = K.utils.clamp(0, 1, K.utils.normalize(R, z, He))), M._pinPush = _, le && g && (A = {}, A[w.a] = "+=" + g, C && (A[w.p] = "-=" + P()), K.set([le, ue], A)), d && !(ot && M.end >= Dt(E, w))) A = Zt(d), fe = w === Te, se = P(), Se = parseFloat(be(w.a)) + _, !m && z > 1 && (ke = (O ? Y.scrollingElement || Pe : E).style, ke = {
					style: ke,
					value: ke["overflow" + w.a.toUpperCase()]
				}, O && Zt(X)["overflow" + w.a.toUpperCase()] !== "scroll" && (ke.style["overflow" + w.a.toUpperCase()] = "scroll")), Kn(d, ve, A), ge = Yn(d), I = en(d, !0), ye = ee && Oe(E, fe ? we : Te)(), f ? (De = [f + w.os2, V + _ + Xt], De.t = ve, k = f === Kt ? tn(d, w) + V + _ : 0, k && (De.push(w.d, k + Xt), ve.style.flexBasis !== "auto" && (ve.style.flexBasis = k + Xt)), Jn(De), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ee && P(He)) : (k = tn(d, w), k && ve.style.flexBasis !== "auto" && (ve.style.flexBasis = k + Xt)), ee && (H = {
					top: I.top + (fe ? se - R : ye) + Xt,
					left: I.left + (fe ? ye : se - R) + Xt,
					boxSizing: "border-box",
					position: "fixed"
				}, H[Bt] = H["max" + Jt] = Math.ceil(I.width) + Xt, H[Vt] = H["max" + Yt] = Math.ceil(I.height) + Xt, H[qt] = H[qt + Wt] = H[qt + Ht] = H[qt + Gt] = H[qt + Ut] = "0", H[Kt] = A[Kt], H[Kt + Wt] = A[Kt + Wt], H[Kt + Ht] = A[Kt + Ht], H[Kt + Gt] = A[Kt + Gt], H[Kt + Ut] = A[Kt + Ut], he = Xn(me, H, y), Mn && P(0)), n ? (xe = n._initted, Je(1), n.render(n.duration(), !0, !0), Ce = be(w.a) - Se + V + _, Ae = Math.abs(V - Ce) > 1, ee && Ae && he.splice(he.length - 2, 2), n.render(0, !0, !0), xe || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Je(0)) : Ce = V, ke && (ke.value ? ke.style["overflow" + w.a.toUpperCase()] = ke.value : ke.style.removeProperty("overflow-" + w.a));
				else if (u && P() && !x) for (I = u.parentNode; I && I !== X;) I._pinOffset && (R -= I._pinOffset, z -= I._pinOffset), I = I.parentNode;
				W && W.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = R, M.end = z, ce = L = Mn ? He : P(), !x && !Mn && (ce < He && P(He), M.scroll.rec = 0), M.revert(!1, !0), oe = lt(), ze && (ae = -1, ze.restart(!0)), Be = 0, n && T && (n._initted || We) && n.progress() !== We && n.progress(We || 0, !0).render(n.time(), !0, !0), (h || N !== M.progress || x || p || n && !n._initted) && (n && !T && (n._initted || N || n.vars.immediateRender !== !1) && n.totalProgress(x && R < -.001 && !N ? K.utils.normalize(R, z, 0) : N, !0), M.progress = h || (ce - R) / V === N ? 0 : N), d && f && (ve._pinOffset = Math.round(M.progress * Ce)), q && q.invalidate(), isNaN(je) || (je -= K.getProperty(B, w.p), Me -= K.getProperty(de, w.p), nr(B, w, je), nr(le, w, je - (o || 0)), nr(de, w, Me), nr(ue, w, Me - (o || 0))), h && !Mn && M.update(), c && !Mn && !pe && (pe = !0, c(M), pe = !1);
			}
		}, M.getVelocity = function() {
			return (P() - L) / (lt() - Re) * 1e3 || 0;
		}, M.endAnimation = function() {
			Nt(M.callbackAnimation), n && (q ? q.progress(1) : n.paused() ? T || Nt(n, M.direction < 0, 1) : Nt(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (R || M.refresh() || R) + n.labels[e] / n.duration() * V || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (kt(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= R : e.start >= z;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = Mn === !0 ? He : M.scroll(), c = e ? 0 : (o - R) / V, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, D, O, j, te, ne;
				if (t && (L = ce, ce = x ? P() : o, v && (G = Ne, Ne = n && !T ? n.totalProgress() : u)), m && d && !Be && !ct && dt && (!u && R < o + (o - L) / (lt() - Re) * m ? u = 1e-4 : u === 1 && z > o + (o - L) / (lt() - Re) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, j = h !== g, O = j || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, O && !Be && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !j && A[b + 1] !== "none" && A[b + 1] || A[b], ne = n && (D === "complete" || D === "reset" || D in n))), C && (j || ne) && (ne || l || !n) && (At(C) ? C(M) : M.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (q && !Be && !ct ? (q._dp._time - q._start !== q._time && q.render(q._dp._time - q._start), q.resetTo ? q.resetTo("totalProgress", u, n._tTime / n._tDur) : (q.vars.totalProgress = u, q.invalidate().restart())) : n && n.totalProgress(u, !!(Be && (oe || e)))), d) {
						if (e && f && (ve.style[f + w.os2] = W), !ee) xe(yt(Se + Ce * u));
						else if (O) {
							if (te = !e && u > p && z + 1 > o && o + 1 >= Dt(E, w), y) if (!e && (h || te)) {
								var re = en(d, !0), ie = o - R;
								er(d, X, re.top + (w === Te ? ie : 0) + Xt, re.left + (w === Te ? 0 : ie) + Xt);
							} else er(d, ve);
							Jn(h || te ? he : ge), Ae && u < 1 && h || xe(Se + (u === 1 && !te ? Ce : 0));
						}
					}
					v && !F.tween && !Be && !ct && ze.restart(!0), a && (j || _ && u && (u < 1 || !st)) && Z(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(M), O && !Be ? (T && (ne && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(M)), (j || !st) && (s && j && Pt(M, s), k[b] && Pt(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), j || (b = u === 1 ? 1 : 3, k[b] && Pt(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (jt(S) ? S : 2500) && (Nt(M.callbackAnimation), q ? q.progress(1) : Nt(n, D === "reverse" ? 1 : !u, 1))) : T && i && !Be && i(M);
				}
				if (je) {
					var ae = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					ke(ae + +!!B._isFlipped), je(ae);
				}
				Ge && Ge(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, cn(E, "resize", Sn), O || cn(E, "scroll", bn), ne && cn(e, "refreshInit", ne), t !== !1 && (M.progress = N = 0, ce = L = ae = P()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && F ? F.tween : q;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: mt(e, n && !!M._startClamp),
				end: mt(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (De && e) {
				var t = De.indexOf(w.d) + 1;
				De[t] = parseFloat(De[t]) + e + Xt, De[1] = parseFloat(De[1]) + e + Xt, Jn(De);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || q && q.pause(), He = 0, I && (I.uncache = 1), ne && ln(e, "refreshInit", ne), ze && (ze.pause(), F.tween && F.tween.kill() && (F.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== M) return;
				ln(E, "resize", Sn), O || ln(E, "scroll", bn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), q && !r && q.kill(), o && delete _n[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === Ue && Bn > 0 && Ue--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || Mn || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), le && [
				le,
				ue,
				B,
				de
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Vn === M && (Vn = 0), d && (I && (I.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (I.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Ke && Ke(M), n && n.add && !V) {
			var Qe = M.update;
			M.update = function() {
				M.update = Qe, H.cache++, R || z || M.refresh();
			}, K.delayedCall(.01, M.update), V = .01, R = z = 0;
		} else M.refresh();
		d && Fn();
	}, e.register = function(t) {
		return q || (K = t || xt(), bt() && window.document && e.enable(), q = ft), q;
	}, e.defaults = function(e) {
		if (e) for (var t in e) fn[t] = e[t];
		return fn;
	}, e.disable = function(e, t) {
		ft = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), ln(J, "wheel", bn), ln(Y, "scroll", bn), clearInterval(ze), ln(Y, "touchcancel", vt), ln(X, "touchstart", vt), sn(ln, Y, "pointerdown,touchstart,mousedown", gt), sn(ln, Y, "pointerup,touchend,mouseup", _t), Ie.kill(), Ot(ln);
		for (var n = 0; n < H.length; n += 3) un(ln, H[n], H[n + 1]), un(ln, H[n], H[n + 2]);
	}, e.enable = function() {
		if (J = window, Y = document, Pe = Y.documentElement, X = Y.body, K) if (Z = K.utils.toArray, Le = K.utils.clamp, tt = K.core.context || vt, Je = K.core.suppressOverwrites || vt, nt = J.history.scrollRestoration || "auto", zn = J.pageYOffset || 0, K.core.globals("ScrollTrigger", e), X) {
			ft = 1, rt = document.createElement("div"), rt.style.height = "100vh", rt.style.position = "absolute", In(), ht(), G.register(K), e.isTouch = G.isTouch, et = G.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ze = G.isTouch === 1, cn(J, "wheel", bn), Fe = [
				J,
				Y,
				Pe,
				X
			], K.matchMedia ? (e.matchMedia = function(e) {
				var t = K.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, K.addEventListener("matchMediaInit", function() {
				kn(), An();
			}), K.addEventListener("matchMediaRevert", function() {
				return On();
			}), K.addEventListener("matchMedia", function() {
				Rn(0, 1), En("matchMedia");
			}), K.matchMedia().add("(orientation: portrait)", function() {
				return xn(), xn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), xn(), cn(Y, "scroll", bn);
			var t = X.hasAttribute("style"), n = X.style, r = n.borderTopStyle, i = K.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = en(X), Te.m = Math.round(a.top + Te.sc()) || 0, we.m = Math.round(a.left + we.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (X.setAttribute("style", ""), X.removeAttribute("style")), ze = setInterval(yn, 250), K.delayedCall(.5, function() {
				return ct = 0;
			}), cn(Y, "touchcancel", vt), cn(X, "touchstart", vt), sn(cn, Y, "pointerdown,touchstart,mousedown", gt), sn(cn, Y, "pointerup,touchend,mouseup", _t), He = K.utils.checkPrefix("transform"), Wn.push(He), q = lt(), Ie = K.delayedCall(.2, Rn).pause(), Ke = [
				Y,
				"visibilitychange",
				function() {
					var e = J.innerWidth, t = J.innerHeight;
					Y.hidden ? (We = e, Ge = t) : (We !== e || Ge !== t) && Sn();
				},
				Y,
				"DOMContentLoaded",
				Rn,
				J,
				"load",
				Rn,
				J,
				"resize",
				Sn
			], Ot(cn), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < H.length; o += 3) un(ln, H[o], H[o + 1]), un(ln, H[o], H[o + 2]);
		} else Y && Y.addEventListener("DOMContentLoaded", function t() {
			e.enable(), Y.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (st = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(ze) || (ze = n) && setInterval(yn, n), "ignoreMobileResize" in t && (Ze = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ot(ln) || Ot(cn, t.autoRefreshEvents || "none"), Ye = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Ee(e), r = H.indexOf(n), i = St(n);
		~r && H.splice(r, i ? 6 : 2), t && (i ? U.unshift(J, t, X, t, Pe, t) : U.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (kt(e) ? Ee(e) : e).getBoundingClientRect(), i = r[n ? Bt : Vt] * t || 0;
		return n ? r.right - i > 0 && r.left + i < J.innerWidth : r.bottom - i > 0 && r.top + i < J.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		kt(e) && (e = Ee(e));
		var r = e.getBoundingClientRect(), i = r[n ? Bt : Vt], a = t == null ? i / 2 : t in pn ? pn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / J.innerWidth : (r.top + a) / J.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = Cn.killAll || [];
			Cn = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? Z(e).forEach(function(e) {
		if (e && e.style) {
			var t = Dn.indexOf(e);
			t >= 0 && Dn.splice(t, 5), Dn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), K.core.getCache(e), tt());
		}
	}) : Dn;
}, $.revert = function(e, t) {
	return An(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? Sn(!0) : (q || $.register()) && Rn(!0);
}, $.update = function(e) {
	return ++H.cache && Hn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = jn, $.maxScroll = function(e, t) {
	return Dt(e, t ? we : Te);
}, $.getScrollFunc = function(e, t) {
	return Oe(Ee(e), t ? we : Te);
}, $.getById = function(e) {
	return _n[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!dt;
}, $.snapDirectional = an, $.addEventListener = function(e, t) {
	var n = Cn[e] || (Cn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = Cn[e], r = n && n.indexOf(t);
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
	for (s in t) r[s] = s.substr(0, 2) === "on" && At(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return At(a) && (a = a(), cn($, "refresh", function() {
		return a = t.batchMax();
	})), Z(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var ir = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, ar = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (G.isTouch ? " pinch-zoom" : "") : "none", t === Pe && e(X, n);
}, or = {
	auto: 1,
	scroll: 1
}, sr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || K.core.getCache(i), o = lt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== X && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(or[(s = Zt(i)).overflowY] || or[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !St(i) && (or[(s = Zt(i)).overflowY] || or[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, cr = function(e, t, n, r) {
	return G.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && sr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && cn(Y, G.eventTypes[0], dr, !1, !0);
		},
		onDisable: function() {
			return ln(Y, G.eventTypes[0], dr, !0);
		}
	});
}, lr = /(input|label|select|textarea)/i, ur, dr = function(e) {
	var t = lr.test(e.target.tagName);
	(t || ur) && (e._gsapAllow = !0, ur = t);
}, fr = function(e) {
	Mt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Ee(e.target) || Pe, l = K.core.globals().ScrollSmoother, u = l && l.get(), d = et && (e.content && Ee(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Oe(c, Te), p = Oe(c, we), m = 1, h = (G.isTouch && J.visualViewport ? J.visualViewport.scale * J.visualViewport.width : J.outerWidth) / J.innerWidth, g = 0, _ = At(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = cr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = vt, C = vt, w = function() {
		s = Dt(c, Te), C = Le(+!!et, s), n && (S = Le(0, Dt(c, we))), v = Nn;
	}, T = function() {
		d._gsap.y = yt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = yt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = yt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = H.cache, Hn();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, ee, k, A = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && K.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return et && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = yt((J.visualViewport && J.visualViewport.scale || 1) / h), D.pause(), e !== m && ar(c, m > 1.01 || !n && "x"), O = p(), ee = f(), w(), v = Nn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) k.restart(!0);
		else {
			H.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= ir(p, i, o, Dt(c, we)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= ir(f, i, o, Dt(c, Te)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (et && D.vars.scrollY >= s || i >= s - 1) && K.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), lt() - g > 1e3 && (v = 0, g = lt());
	}, e.onChange = function(e, t, r, i, a) {
		if (Nn !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? ee + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (ee += c - s), f(c);
		}
		(r || t) && Hn();
	}, e.onEnable = function() {
		ar(c, !n && "x"), $.addEventListener("refresh", A), cn(J, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		ar(c, !0), ln(J, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new G(e), o.iOS = et, et && !f() && f(1), et && K.ticker.add(vt), k = o._dc, D = K.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: tr(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: Hn,
		onComplete: k.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (At(e)) return Q.sort(e);
	var t = J.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + J.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new G(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Xe;
	if (e === !0 && Xe) return Xe.enable();
	if (e === !1) {
		Xe && Xe.kill(), Xe = e;
		return;
	}
	var t = e instanceof G ? e : fr(e);
	return Xe && Xe.target === t.target && Xe.kill(), St(t.target) && (Xe = t), t;
}, $.core = {
	_getVelocityProp: ke,
	_inputObserver: cr,
	_scrollers: H,
	_proxies: U,
	bridge: {
		ss: function() {
			dt || En("scrollStart"), dt = lt();
		},
		ref: function() {
			return Be;
		}
	}
}, xt() && K.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var pr = "h1, h2, h3, h4, h5, h6, p", mr = ".news_event .u-text-eyebrow[data-animation-ready]", hr = [
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
function Cr() {
	return window.location.pathname === "/";
}
function wr(e) {
	var t;
	return e.closest(hr) || e.closest("[hidden]") || e.matches(".atelier_hero_section .atelier_slide_heading") || e.matches(".atelier_about_section.u-theme-dark5 .atelier_about_h2, .atelier_about_section.u-theme-dark5 .atelier_story_p") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function Tr(e) {
	if (e.closest(gr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function Er(e) {
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
function Dr(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.element.style.opacity = e.played ? "1" : e.originalOpacity, e.element.style.transform = e.originalTransform, e.trigger = void 0, e.timeline = void 0;
}
function Or(e) {
	return e.signature = Er(e.element), e.element.removeAttribute(_r), e.element.setAttribute(vr, ""), [e.element];
}
function kr(e) {
	let t = Or(e);
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
function Ar(e, t) {
	e.forEach((e, n) => {
		let r = Or(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, yr, br, .6 + n * .12 + i);
	});
}
function jr() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function Mr(e = document) {
	var t;
	if (xr || Cr() || Sr() || u()) return;
	let n = o(`${pr}, ${mr}`, e).filter(wr);
	if (!n.length) return;
	xr = !0, b.registerPlugin($);
	let r = n.map((e) => ({
		element: e,
		hero: Tr(e),
		played: !1,
		signature: "",
		originalOpacity: e.style.opacity,
		originalTransform: e.style.transform
	}));
	r.forEach(({ element: e }) => e.setAttribute(_r, ""));
	let i, a, s = 0, c = !1, l = !1, d = () => {
		c && (i && i.progress() > 0 && (l = !0, r.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), r.forEach(Dr), i = b.timeline({ paused: !0 }), Ar(r.filter((e) => e.hero && e.element.isConnected), i), r.filter((e) => !e.hero && e.element.isConnected).forEach(kr), !l && i.duration() > 0 && (i.call(() => {
			l = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, f = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, r.some((e) => e.element.isConnected && Er(e.element) !== e.signature) && d();
		}));
	};
	Promise.all([jr(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		c = !0, d(), a = new ResizeObserver(f), r.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", f, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", d);
	}), window.addEventListener("pagehide", () => {
		var e;
		window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), r.forEach(Dr), window.removeEventListener("resize", f), (e = document.fonts) == null || e.removeEventListener("loadingdone", d), r.forEach(({ element: e }) => e.removeAttribute(_r));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var Nr = "[data-lightbox-src]", Pr = "js-lightbox", Fr = `.${Pr}`, Ir = `${Nr}, ${Fr}`, Lr = "[data-site-lightbox]", Rr = "[data-lightbox-close]", zr = "[data-lightbox-prev]", Br = "[data-lightbox-next]", Vr = "[data-lightbox-auto-icon]", Hr = "site-lightbox-trigger", Ur = "site-lightbox-trigger__image", Wr = "site-lightbox-trigger__icon", Gr = "w-dyn-bind-empty", Kr = "/plugins/Basic/assets/placeholder.", qr = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Jr = !1, Yr = null, Xr = null, Zr = [], Qr = 0, $r = !1, ei = null;
function ti(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return ni(e);
	let n = s("img", e);
	return n ? ni(n) : "";
}
function ni(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(Gr) || t.includes(Kr) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ri(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function ii(e) {
	let t = ti(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		credit: r(e, "data-lightbox-credit"),
		alt: ri(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ai(e) {
	let t = ii(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(Ir).filter((e) => r(e, "data-lightbox-group") === t.group).map(ii).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function oi() {
	let e = document.createElement("span");
	return e.className = Wr, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = qr, e;
}
function si(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function ci(e) {
	if (!si(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Yr == null ? void 0 : Yr.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function li(e) {
	if (e.closest(`.${Hr}`) || !ti(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${Hr} ${Pr}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(Pr), e.classList.add(Ur), e.before(t), t.append(e, oi()), ci(t);
}
function ui(e) {
	if (e instanceof HTMLImageElement) {
		li(e);
		return;
	}
	ti(e).trim() && (e.classList.add(Hr), ci(e), s(Vr, e) || e.append(oi()));
}
function di() {
	o(Fr).forEach(ui);
}
function fi(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function pi() {
	var e, t, n, r, i, a;
	if (Xr) return mi(Xr), Xr;
	let o = s(Lr), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = Yr == null ? void 0 : Yr.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = fi((l = Yr == null ? void 0 : Yr.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = fi((u = Yr == null ? void 0 : Yr.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = fi((d = Yr == null ? void 0 : Yr.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = s(Rr, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(zr, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(Br, c)) == null ? document.createElement("button") : a
	};
	return Xr = m, mi(m), !o && !document.body.contains(c) && document.body.append(c), m;
}
function mi(e) {
	var t, n, r, i;
	let a = (t = Yr == null ? void 0 : Yr.t("close", "Close")) == null ? "Close" : t, o = (n = Yr == null ? void 0 : Yr.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Yr == null ? void 0 : Yr.t("next", "Next")) == null ? "Next" : r, c = (i = Yr == null ? void 0 : Yr.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function hi() {
	let e = pi(), t = Zr[Qr];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = Zr.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(Qr), e.root.dataset.lightboxCount = String(Zr.length);
}
function gi(e) {
	let t = pi();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function _i(e) {
	Zr.length < 2 || (Qr = (e + Zr.length) % Zr.length, hi());
}
function vi() {
	_i(Qr + 1);
}
function yi() {
	_i(Qr - 1);
}
function bi(e) {
	var t;
	let n = ai(e);
	if (!n) return;
	let r = $r;
	Zr = n.items, Qr = n.index, ei = e, $r = !0, hi(), gi(!0), r || p();
	let i = pi();
	m(i.closeButton || i.root);
	let a = Zr[Qr];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: Qr,
		count: Zr.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function xi() {
	var t;
	if (!$r || !Xr) return;
	let r = Xr, i = ei, a = (t = Zr[Qr]) == null ? null : t;
	gi(!1), n(), $r = !1, Zr = [], Qr = 0, ei = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function Si(e) {
	if (!(!$r || !Xr)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), xi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), vi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), yi();
			return;
		}
		y(Xr.root, e);
	}
}
function Ci(e) {
	!$r || !Xr || e.target === Xr.root && xi();
}
function wi(e) {
	return Yr = e.i18n, di(), Jr || (g(document, "click", Ir, (e, t) => {
		e.preventDefault(), bi(t);
	}), g(document, "keydown", Fr, (e, t) => {
		si(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), bi(t));
	}), g(document, "click", Rr, (e) => {
		e.preventDefault(), xi();
	}), g(document, "click", zr, (e) => {
		e.preventDefault(), yi();
	}), g(document, "click", Br, (e) => {
		e.preventDefault(), vi();
	}), document.addEventListener("click", Ci), document.addEventListener("keydown", Si, !0), Jr = !0), {
		openLightbox: bi,
		closeLightbox: xi
	};
}
//#endregion
//#region src/modules/modal-image.ts
function Ti(e, t, n) {
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
var Ei = /* @__PURE__ */ new Map(), Di = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Set();
function ki(e) {
	try {
		return new URL(e, document.baseURI).href;
	} catch (t) {
		return e;
	}
}
function Ai(e, t) {
	return `${e}\n${t}`;
}
function ji(e) {
	return new Promise((t) => {
		let n = new Image();
		n.loading = "eager", n.onload = () => {
			typeof n.decode == "function" ? n.decode().then(() => {
				Oi.add(ki(e)), t(!0);
			}, () => t(!1)) : (Oi.add(ki(e)), t(!0));
		}, n.onerror = () => t(!1), n.src = e;
	});
}
function Mi(e, t) {
	let n = Ai(e, t), r = Ei.get(n);
	if (r) return r;
	let i = (async () => {
		let r = await ji(e) ? e : t;
		return r !== e && await ji(t), Di.set(n, r), r;
	})();
	return Ei.set(n, i), i;
}
function Ni(e, t) {
	var n;
	return (n = Di.get(Ai(e, t))) == null ? e : n;
}
var Pi = /* @__PURE__ */ new WeakMap();
function Fi(e, t, n) {
	var r, i;
	let a = ((r = Pi.get(e)) == null ? 0 : r) + 1;
	Pi.set(e, a), e.loading = "eager", e.decoding = "async";
	let o = ki((i = t == null ? e.currentSrc : t) == null ? e.src : i), s = e.currentSrc === o && e.complete && e.naturalWidth > 0 && !e.classList.contains("is-image-pending") || Oi.has(o);
	s ? e.classList.contains("is-image-pending") && e.classList.remove("is-image-pending") : e.classList.add("is-image-pending");
	let c = () => {
		(typeof e.decode == "function" ? e.decode().catch(() => void 0) : Promise.resolve()).then(() => {
			Pi.get(e) === a && e.naturalWidth > 0 && (Oi.add(e.currentSrc || e.src), e.classList.remove("is-image-pending"));
		});
	};
	e.onload = c, e.onerror = () => {
		if (Pi.get(e) !== a || !n) return;
		e.classList.add("is-image-pending");
		let t = n;
		n = void 0, e.src = t;
	}, t !== void 0 && e.src !== o && (e.src = t), !s && e.complete && e.naturalWidth > 0 && e.currentSrc === o && c();
}
function Ii(e) {
	var t;
	Pi.set(e, ((t = Pi.get(e)) == null ? 0 : t) + 1), e.onload = null, e.onerror = null, e.classList.remove("is-image-pending"), e.removeAttribute("src");
}
function Li(e, t, n, r) {
	let i = Ni(Ti(t, n, r), t);
	Fi(e, i, i === t ? void 0 : t);
}
var Ri = /* @__PURE__ */ new Set([
	"6a7db30517820876cd23f469",
	"6a7db3187795b95db7804762",
	"6a7db33f5031a1007e109876",
	"6a7db3495031a1007e10a89e",
	"6a7db34bd247654adf43324d"
]);
function zi(e, t) {
	var n;
	let r = (n = e.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	return r && Ri.has(r) ? new URL("../assets/modal-work-thumbnails/" + r + ".webp", import.meta.url).href : Ti(e, t, 500);
}
//#endregion
//#region src/modules/modal.ts
var Bi = "[data-modal]", Vi = "[data-modal-content]", Hi = "[data-modal-open]", Ui = "[data-modal-close]", Wi = "a[href^=\"#modal:\"]", Gi = "#modal:", Ki = 460, qi = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Ji = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Yi = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Xi = !1, Zi = !0, Qi = null, $i = null, ea = "", ta = null, na = null, ra = /* @__PURE__ */ new Map();
function ia(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Gi) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function aa() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Ui),
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
	return t.closeButton.innerHTML = qi, t.lightboxIcon.innerHTML = Ji, sa(t), t;
}
function oa() {
	return (!$i || !document.body.contains($i.root)) && ($i = aa()), sa($i), $i;
}
function sa(e) {
	var t, n;
	let r = (t = Qi == null ? void 0 : Qi.t("close", "Close")) == null ? "Close" : t, i = (n = Qi == null ? void 0 : Qi.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function ca(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function la(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p;
	let m = e.querySelector("[data-modal-work]");
	if (!m) return null;
	let h = ca(m, "[data-works-thumbnail]"), g = (t = (n = (r = m.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = m.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, _ = (a = (o = (s = m.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = m.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, v = (l = (u = (d = m.getAttribute("data-works-href")) == null ? m.getAttribute("data-works-url") : d) == null ? (f = m.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, y = x(h);
	return !g && !y && !v ? null : {
		title: g,
		year: _,
		thumbnail: y,
		thumbnailSrcset: (p = h == null ? void 0 : h.getAttribute("srcset")) == null ? void 0 : p,
		thumbnailAlt: (h == null ? void 0 : h.alt) || g,
		href: v
	};
}
function ua(e) {
	var t, n, r, i;
	let a = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = ca(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: x(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let s = ca(e, "[data-modal-image]"), c = x(s);
	return c ? [{
		src: c,
		srcset: (t = s == null ? void 0 : s.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = s == null ? void 0 : s.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function da(e) {
	var t, n, i, a, o, s, c, l, u, d;
	let f = r(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, h = ua(e), g = h[0], _ = e.querySelector("[data-modal-body]");
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
		work: la(e),
		gallery: h
	};
}
function fa(e) {
	var t, n, i, a, o, s, c, l, u, d, f, p, m;
	let h = r(e, "data-modal");
	if (!h) return null;
	let g = e.querySelector(".fwm-modal__image"), _ = x(g), v = (t = (n = e.querySelector(".fwm-modal__caption")) == null || (n = n.textContent) == null ? void 0 : n.trim()) == null ? "" : t, y = (i = e.closest(".w-dyn-item")) == null ? (a = e.closest(".w-embed")) == null ? void 0 : a.parentElement : i, b = y ? Array.from(y.querySelectorAll("[data-modal-rich-text]")).find((t) => t.closest(".w-dyn-item") === e.closest(".w-dyn-item")) : void 0, S = (o = (s = e.querySelector(".fwm-modal__text")) == null ? void 0 : s.innerHTML) == null ? "" : o;
	return b && (b.hidden = !0), {
		id: h,
		address: (c = (l = e.querySelector(".fwm-modal__address")) == null || (l = l.textContent) == null ? void 0 : l.trim()) == null ? "" : c,
		layout: "default",
		headline: "",
		image: _,
		imageSrcset: (u = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : u,
		imageAlt: (d = g == null ? void 0 : g.alt) == null ? "" : d,
		caption: v,
		html: S + ((f = b == null ? void 0 : b.innerHTML) == null ? "" : f),
		work: null,
		gallery: _ ? [{
			src: _,
			srcset: (p = g == null ? void 0 : g.getAttribute("srcset")) == null ? void 0 : p,
			alt: (m = g == null ? void 0 : g.alt) == null ? "" : m,
			caption: v
		}] : []
	};
}
function pa() {
	o(Vi).forEach((e) => {
		let t = da(e);
		t && ra.set(t.id, t);
	}), o(Bi).forEach((e) => {
		let t = fa(e);
		t && ra.set(t.id, t), e.remove();
	});
}
function ma(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(Vi).find((e) => r(e, "data-modal-content") === n), a = i ? da(i) : null;
	return a && ra.set(n, a), (t = a == null ? ra.get(n) : a) == null ? null : t;
}
function ha(e) {
	try {
		let t = new URL(e, document.baseURI).pathname.match(/^\/werke\/([^/]+)\/?$/);
		if (!t) return e;
		let n = new URL("/werk-ueberblick", document.baseURI);
		return n.searchParams.set("work", decodeURIComponent(t[1])), n.hash = "werke", `${n.pathname}${n.search}${n.hash}`;
	} catch (t) {
		return e;
	}
}
function ga(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", ha(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.alt = e.thumbnailAlt;
		let n = Ni(zi(e.thumbnail, e.thumbnailSrcset), e.thumbnail);
		Fi(t, n, n === e.thumbnail ? void 0 : e.thumbnail), a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = Yi, o.append(e);
	}
	return i.append(o), i;
}
function _a(e) {
	let t = document.createElement("a"), n = document.createElement("img"), r = document.createElement("span"), i = document.createElement("span");
	return t.className = "fwm-modal__image-link", t.href = e.src, t.setAttribute("data-lightbox-src", e.src), t.setAttribute("data-lightbox-caption", e.caption), t.setAttribute("data-lightbox-alt", e.alt), t.classList.toggle("has-caption", e.caption.length > 0), n.className = "fwm-modal__image", n.alt = e.alt, Li(n, e.src, e.srcset, 500), r.className = "fwm-modal__lightbox-icon", r.setAttribute("aria-hidden", "true"), r.innerHTML = Ji, i.className = "fwm-modal__caption", i.textContent = e.caption, i.hidden = e.caption.length === 0, t.append(n, r, i), t;
}
function va(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function ya(e, t) {
	e.innerHTML = t, e.querySelectorAll("img[src]").forEach((e) => Fi(e)), e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function ba(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? Li(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : Ii(e.image), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, ya(e.text, t.html), va(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t) => e.gallery.append(_a(t)));
}
function xa(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), Ii(e.image), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, ya(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(ga(t.work)), o.forEach((t) => {
		e.gallery.append(_a(t));
	});
}
function Sa(e) {
	let t = oa();
	return e.layout === "context" ? xa(t, e) : ba(t, e), t;
}
function Ca(e) {
	let t = [], n = (e, n) => {
		t.push(Mi(Ti(e.src, e.srcset, n), e.src));
	};
	if (e.layout === "context") {
		var r, i;
		(r = e.work) != null && r.thumbnail && t.push(Mi(zi(e.work.thumbnail, e.work.thumbnailSrcset), e.work.thumbnail)), ((i = e.gallery) != null && i.length ? e.gallery : e.image ? [{
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
			t.push(Mi(Ti(e.image, (o = e.imageSrcset) == null ? (s = e.gallery) == null || (s = s[0]) == null ? void 0 : s.srcset : o, 1080), e.image));
		}
		(a = e.gallery) == null || a.slice(1).filter((e) => e.src).forEach((e) => n(e, 500));
	}
	return t;
}
function wa(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function Ta(e) {
	na !== null && (window.clearTimeout(na), na = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function Ea(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), na = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), na = null;
	}, u() ? 0 : Ki), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function Da(e, t) {
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
			srcset: e.imageSrcset,
			alt: (h = e.imageAlt) == null ? "" : h,
			caption: (g = e.caption) == null ? "" : g
		}] : []
	};
	if (!_.id || t && ea === _.id && t === ta) return;
	ea && ka(), ra.set(_.id, _);
	let v = t == null ? c() : t, y = oa();
	na !== null && (window.clearTimeout(na), na = null, y.root.hidden = !0, y.root.classList.remove("is-active", "is-visible")), Sa(_), ta = v, ea = _.id, Ta(y), p(), wa(y), d(y.root, "site:modal-open", {
		id: ea,
		modal: y.root,
		content: _,
		trigger: t == null ? null : t
	});
}
function Oa(e, t) {
	let n = ma(e);
	n && Da(n, t);
}
function ka() {
	if (!ea || !$i) return;
	let t = ea, r = ta;
	Ea($i), n(), ea = "", ta = null, d($i.root, "site:modal-close", {
		id: t,
		modal: $i.root
	}), e(r);
}
function Aa(e) {
	if (!(!ea || !$i) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), ka();
			return;
		}
		y($i.panel, e);
	}
}
function ja(e) {
	if (!Zi || !ea || !$i) return;
	let t = e.target;
	!i(t) || t !== $i.root || ka();
}
function Ma(e) {
	var n;
	if (Zi = (n = e.closeOnBackdrop) == null || n, Qi = e.i18n, pa(), oa(), !Xi) {
		let e = (e) => {
			let n = ma(e.matches(Hi) ? t(e, "data-modal-open") : ia(e));
			n && Ca(n);
		};
		for (let t of [
			"pointerover",
			"pointerdown",
			"focusin"
		]) g(document, t, `${Hi}, ${Wi}`, (t, n) => {
			e(n);
		});
		g(document, "click", `${Hi}, ${Wi}`, (e, n) => {
			e.preventDefault(), Oa(n.matches(Hi) ? t(n, "data-modal-open") : ia(n), n);
		}), g(document, "click", Ui, (e, t) => {
			$i != null && $i.root.contains(t) && (e.preventDefault(), ka());
		}), document.addEventListener("click", ja), document.addEventListener("keydown", Aa), Xi = !0;
	}
	return {
		openModal: Oa,
		openContentModal: Da,
		closeModal: ka
	};
}
//#endregion
//#region src/modules/page-transition.ts
var Na = {
	titleStart: 240,
	navigate: 720,
	hold: 416,
	uncoverStart: 776,
	reset: 1976,
	watchdog: 6e3
}, Pa = [
	".top_bar_section",
	".werk_hero_dots",
	".werk_hero_slide .u-slide-info"
], Fa = {
	delay: 225,
	stagger: 125,
	fade: 700,
	menuGap: 80,
	menu: 550
}, Ia = {
	fade: 1200,
	easing: "ease-in-out"
}, La = "pt", Ra = "[data-page-transition-overlay], .page-transition-overlay", za = "is-page-transition-pending", Ba = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), Va = !1, Ha = !1, Ua = [];
function Wa(e, t) {
	Ua.push(window.setTimeout(e, t));
}
function Ga() {
	Ua.forEach((e) => window.clearTimeout(e)), Ua = [];
}
function Ka() {
	try {
		var e;
		return (e = window.sessionStorage.getItem(La)) == null ? "" : e;
	} catch (e) {
		return "";
	}
}
function qa() {
	try {
		window.sessionStorage.removeItem(La);
	} catch (e) {}
	document.documentElement.classList.remove(za, "is-page-transition-boot");
}
function Ja() {
	var e;
	let t = document.querySelector(Ra);
	if (t || (t = document.createElement("div"), document.body.append(t)), t.classList.add("curtain", "page-transition-overlay"), t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), !t.querySelector(".page-transition-overlay__title")) {
		let e = document.createElement("span");
		e.className = "page-transition-overlay__title", t.append(e);
	}
	return (e = t.querySelector(".page-transition-overlay__title")) == null || e.setAttribute("aria-live", "polite"), t;
}
function Ya(e, t) {
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
function Xa() {
	return document.querySelector("main, [role=\"main\"]");
}
function Za(e) {
	return !!(e && !e.querySelector("canvas, iframe, video, [data-animation-type=\"spline\"]"));
}
function Qa(e) {
	var t;
	let n = e == null ? void 0 : e.querySelector("h1");
	if (!n || n.children.length || !((t = n.textContent) != null && t.trim())) return;
	let r = n.textContent.trim().split(/\s+/);
	n.setAttribute("data-reveal", "off"), n.setAttribute("aria-label", r.join(" ")), n.textContent = "", r.forEach((e, t) => {
		t && n.append(document.createTextNode(" "));
		let r = document.createElement("span");
		r.className = "page-transition-word-mask", r.setAttribute("aria-hidden", "true");
		let i = document.createElement("span");
		i.className = "page-transition-word", i.style.setProperty("--word-index", String(t)), i.textContent = e, r.append(i), n.append(r);
	}), n.classList.add("is-page-transition-heading");
}
function $a(e) {
	e && (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), e.addEventListener("blur", () => e.removeAttribute("tabindex"), { once: !0 })), e.focus({ preventScroll: !0 }));
}
function eo(e, t) {
	Ga(), e.classList.add("is-resetting"), e.classList.remove("is-covering", "is-covered", "is-title-visible", "is-title-leaving", "is-uncovering"), e.setAttribute("aria-hidden", "true"), t == null || t.classList.remove("is-page-transition-out", "is-page-transition-in", "is-page-transition-entered"), document.documentElement.classList.remove("is-page-transition-entering", "is-page-transition-covering"), qa(), Ha = !1, window.requestAnimationFrame(() => e.classList.remove("is-resetting"));
}
function to(e, t) {
	var n, r;
	if (Ha = !0, u()) {
		$a(t), eo(e, t);
		return;
	}
	let i = e.querySelector(".page-transition-overlay__title");
	i && (i.textContent = Ka()), e.setAttribute("aria-hidden", "false"), e.classList.add("is-covered", "is-title-visible"), Za(t) && t.classList.add("is-page-transition-in"), document.documentElement.classList.add("is-page-transition-entering"), window.location.pathname !== "/" && Qa(t), ((n = (r = document.fonts) == null ? void 0 : r.ready) == null ? Promise.resolve() : n).catch(() => void 0).then(() => {
		Wa(() => e.classList.add("is-title-leaving"), Na.hold), Wa(() => {
			var n;
			e.classList.add("is-uncovering"), t == null || t.classList.add("is-page-transition-entered"), t == null || (n = t.querySelector(".is-page-transition-heading")) == null || n.classList.add("is-revealing");
		}, Na.uncoverStart), Wa(() => {
			$a(t), eo(e, t);
		}, Na.reset);
	});
}
function no(e, t, n, r) {
	Ha = !0;
	let i = t.querySelector(".page-transition-overlay__title");
	i && (i.textContent = r), t.setAttribute("aria-hidden", "false");
	try {
		window.sessionStorage.setItem(La, r);
	} catch (e) {}
	document.documentElement.classList.add("is-page-transition-covering"), t.classList.add("is-covering"), Za(n) && n.classList.add("is-page-transition-out"), Wa(() => t.classList.add("is-title-visible"), Na.titleStart), Wa(() => {
		window.location.href = e.href;
	}, Na.navigate), Wa(() => {
		window.location.href = e.href;
	}, Na.watchdog);
}
function ro() {
	var e;
	if (!((e = window.__sitePreloader) != null && e.active) || u()) return;
	let t = Pa.map((e) => Array.from(document.querySelectorAll(e))), n = Array.from(document.querySelectorAll("[data-site-menu]"));
	[...t.flat(), ...n].forEach((e) => {
		e.style.opacity = "0";
	}), S(() => {
		let e = window.location.pathname === "/", r = e ? Ia.fade : Fa.fade, i = (e, t, n, r, i = "cubic-bezier(.05, .85, .05, 1)") => {
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
			t.forEach((t) => i(t, [{ opacity: 0 }, { opacity: 1 }], Fa.delay + n * Fa.stagger, r, e ? Ia.easing : void 0));
		});
		let a = t.reduce((e, t, n) => t.length ? n : e, -1), o = a < 0 ? 0 : Fa.delay + a * Fa.stagger + r + Fa.menuGap;
		n.forEach((e) => {
			let t = Math.max(0, window.innerHeight - e.getBoundingClientRect().top) + 8;
			i(e, [{
				opacity: 1,
				transform: `translate3d(0, ${t}px, 0)`
			}, {
				opacity: 1,
				transform: "translate3d(0, 0, 0)"
			}], o, Fa.menu);
		});
	});
}
function io() {
	if (Va) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", io, { once: !0 });
		return;
	}
	Va = !0;
	let e = Ja(), t = Xa();
	Ka() && document.documentElement.classList.contains(za) ? to(e, t) : ro(), document.addEventListener("click", (n) => {
		var r;
		let i = n.target instanceof Element ? n.target.closest("a[href]") : null;
		if (!i || n.defaultPrevented || l(n)) return;
		if (Ha) {
			n.preventDefault();
			return;
		}
		if (i.closest(Ba) || i.target && i.target !== "_self") return;
		let a = h(i);
		!a || a.hash || u() || (r = window.__sitePreloader) != null && r.active || (n.preventDefault(), no(a, e, t, Ya(a, i)));
	}, !0), window.addEventListener("pageshow", (n) => {
		n.persisted && eo(e, t);
	});
}
//#endregion
//#region src/modules/parallax.ts
var ao = "[data-parallax]", oo = "data-parallax", so = "data-parallax-ready", co = "fw-parallax-window", lo = "fw-parallax-window--self-sized", uo = "fw-parallax-inner", fo = 60, po = 160, mo = ".site-lightbox-trigger", ho = 1, go = !1;
function _o() {
	go || (go = !0, b.registerPlugin($));
}
function vo(e) {
	let t = e.getAttribute(oo);
	if (t === null || t.trim() === "") return fo;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.sign(n) * Math.min(Math.abs(n), po) : fo;
}
function yo(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function bo(e, t) {
	var n;
	let r = (n = e.closest(mo)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(co)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(co);
	let a = document.createElement("span"), o = Math.abs(t) / 2 + ho;
	if (a.className = uo, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(co), null;
		r.classList.add(lo), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function xo(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: So(e)
		});
		return;
	}
	n.forEach((n) => {
		yo(n).then(() => {
			if (!n.isConnected) return;
			let r = bo(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: So(e)
			}), $.refresh());
		});
	});
}
function So(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function Co(e = document) {
	let t = o(ao, e).filter((e) => !e.hasAttribute(so));
	t.length === 0 || u() || (_o(), t.forEach((e) => {
		let t = vo(e);
		t !== 0 && (e.setAttribute(so, ""), xo(e, t));
	}));
}
//#endregion
//#region node_modules/gsap/utils/paths.js
var wo = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, To = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, Eo = Math.PI / 180;
180 / Math.PI;
var Do = Math.sin, Oo = Math.cos, ko = Math.abs, Ao = Math.sqrt, jo = function(e) {
	return typeof e == "number";
}, Mo = 1e5, No = function(e) {
	return Math.round(e * Mo) / Mo || 0;
}, Po = function(e) {
	return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001;
};
function Fo(e, t, n, r, i, a, o) {
	for (var s = e.length, c, l, u, d, f; --s > -1;) for (c = e[s], l = c.length, u = 0; u < l; u += 2) d = c[u], f = c[u + 1], c[u] = d * t + f * r + a, c[u + 1] = d * n + f * i + o;
	return e._dirty = 1, e;
}
function Io(e, t, n, r, i, a, o, s, c) {
	if (!(e === s && t === c)) {
		n = ko(n), r = ko(r);
		var l = i % 360 * Eo, u = Oo(l), d = Do(l), f = Math.PI, p = f * 2, m = (e - s) / 2, h = (t - c) / 2, g = u * m + d * h, _ = -d * m + u * h, v = g * g, y = _ * _, b = v / (n * n) + y / (r * r);
		b > 1 && (n = Ao(b) * n, r = Ao(b) * r);
		var x = n * n, S = r * r, C = (x * S - x * y - S * v) / (x * y + S * v);
		C < 0 && (C = 0);
		var w = (a === o ? -1 : 1) * Ao(C), T = w * (n * _ / r), E = w * -(r * g / n), D = (e + s) / 2, O = (t + c) / 2, ee = D + (u * T - d * E), k = O + (d * T + u * E), A = (g - T) / n, j = (_ - E) / r, te = (-g - T) / n, M = (-_ - E) / r, ne = A * A + j * j, re = (j < 0 ? -1 : 1) * Math.acos(A / Ao(ne)), ie = (A * M - j * te < 0 ? -1 : 1) * Math.acos((A * te + j * M) / Ao(ne * (te * te + M * M)));
		isNaN(ie) && (ie = f), !o && ie > 0 ? ie -= p : o && ie < 0 && (ie += p), re %= p, ie %= p;
		var ae = Math.ceil(ko(ie) / (p / 4)), oe = [], N = ie / ae, P = 4 / 3 * Do(N / 2) / (1 + Oo(N / 2)), F = u * n, I = d * n, se = d * -r, ce = u * r, L;
		for (L = 0; L < ae; L++) i = re + L * N, g = Oo(i), _ = Do(i), A = Oo(i += N), j = Do(i), oe.push(g - P * _, _ + P * g, A + P * j, j - P * A, A, j);
		for (L = 0; L < oe.length; L += 2) g = oe[L], _ = oe[L + 1], oe[L] = g * F + _ * se + ee, oe[L + 1] = g * I + _ * ce + k;
		return oe[L - 2] = s, oe[L - 1] = c, oe;
	}
}
function Lo(e) {
	var t = (e + "").replace(To, function(e) {
		var t = +e;
		return t < 1e-4 && t > -1e-4 ? 0 : t;
	}).match(wo) || [], n = [], r = 0, i = 0, a = 2 / 3, o = t.length, s = 0, c = "ERROR: malformed path: " + e, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w = function(e, t, n, r) {
		v = (n - e) / 3, y = (r - t) / 3, h.push(e + v, t + y, n - v, r - y, n, r);
	};
	if (!e || !isNaN(t[0]) || isNaN(t[1])) return console.log(c), n;
	for (l = 0; l < o; l++) if (x = p, isNaN(t[l]) ? (p = t[l].toUpperCase(), m = p !== t[l]) : l--, d = +t[l + 1], f = +t[l + 2], m && (d += r, f += i), l || (g = d, _ = f), p === "M") h && (h.length < 8 ? --n.length : s += h.length, Po(h)), r = g = d, i = _ = f, h = [d, f], n.push(h), l += 2, p = "L";
	else if (p === "C") h || (h = [0, 0]), m || (r = i = 0), h.push(d, f, r + t[l + 3] * 1, i + t[l + 4] * 1, r += t[l + 5] * 1, i += t[l + 6] * 1), l += 6;
	else if (p === "S") v = r, y = i, (x === "C" || x === "S") && (v += r - h[h.length - 4], y += i - h[h.length - 3]), m || (r = i = 0), h.push(v, y, d, f, r += t[l + 3] * 1, i += t[l + 4] * 1), l += 4;
	else if (p === "Q") v = r + (d - r) * a, y = i + (f - i) * a, m || (r = i = 0), r += t[l + 3] * 1, i += t[l + 4] * 1, h.push(v, y, r + (d - r) * a, i + (f - i) * a, r, i), l += 4;
	else if (p === "T") v = r - h[h.length - 4], y = i - h[h.length - 3], h.push(r + v, i + y, d + (r + v * 1.5 - d) * a, f + (i + y * 1.5 - f) * a, r = d, i = f), l += 2;
	else if (p === "H") w(r, i, r = d, i), l += 1;
	else if (p === "V") w(r, i, r, i = d + (m ? i - r : 0)), l += 1;
	else if (p === "L" || p === "Z") p === "Z" && (d = g, f = _, h.closed = !0), (p === "L" || ko(r - d) > .5 || ko(i - f) > .5) && (w(r, i, d, f), p === "L" && (l += 2)), r = d, i = f;
	else if (p === "A") {
		if (S = t[l + 4], C = t[l + 5], v = t[l + 6], y = t[l + 7], u = 7, S.length > 1 && (S.length < 3 ? (y = v, v = C, u--) : (y = C, v = S.substr(2), u -= 2), C = S.charAt(1), S = S.charAt(0)), b = Io(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +S, +C, (m ? r : 0) + v * 1, (m ? i : 0) + y * 1), l += u, b) for (u = 0; u < b.length; u++) h.push(b[u]);
		r = h[h.length - 2], i = h[h.length - 1];
	} else console.log(c);
	return l = h.length, l < 6 ? (n.pop(), l = 0) : Po(h), n.totalPoints = s + l, n;
}
function Ro(e) {
	jo(e[0]) && (e = [e]);
	var t = "", n = e.length, r, i, a, o;
	for (i = 0; i < n; i++) {
		for (o = e[i], t += "M" + No(o[0]) + "," + No(o[1]) + " C", r = o.length, a = 2; a < r; a++) t += No(o[a++]) + "," + No(o[a++]) + " " + No(o[a++]) + "," + No(o[a++]) + " " + No(o[a++]) + "," + No(o[a]) + " ";
		o.closed && (t += "z");
	}
	return t;
}
//#endregion
//#region node_modules/gsap/CustomEase.js
var zo, Bo, Vo = function() {
	return zo || typeof window < "u" && (zo = window.gsap) && zo.registerPlugin && zo;
}, Ho = function() {
	zo = Vo(), zo ? (zo.registerEase("_CE", Zo.create), Bo = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
}, Uo = 0x56bc75e2d63100000, Wo = function(e) {
	return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3;
}, Go = 1, Ko = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, qo = /[cLlsSaAhHvVtTqQ]/g, Jo = function(e) {
	var t = e.length, n = Uo, r;
	for (r = 1; r < t; r += 6) +e[r] < n && (n = +e[r]);
	return n;
}, Yo = function(e, t, n) {
	!n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
	var r = e[0] * -1, i = -n, a = e.length, o = 1 / (+e[a - 2] + r), s = -t || (Math.abs(e[a - 1] - +e[1]) < .01 * (e[a - 2] - +e[0]) ? Jo(e) + i : +e[a - 1] + i), c;
	for (s = s ? 1 / s : -o, c = 0; c < a; c += 2) e[c] = (+e[c] + r) * o, e[c + 1] = (+e[c + 1] + i) * s;
}, Xo = function e(t, n, r, i, a, o, s, c, l, u, d) {
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
}, Zo = /*#__PURE__*/ function() {
	function e(e, t, n) {
		Bo || Ho(), this.id = e, Go && this.setData(t, n);
	}
	var t = e.prototype;
	return t.setData = function(e, t) {
		t = t || {}, e = e || "0,0,1,1";
		var n = e.match(Ko), r = 1, i = [], a = [], o = t.precision || 1, s = o <= 1, c, l, u, d, f, p, m, h, g;
		if (this.data = e, (qo.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (n = Lo(e)[0]), c = n.length, c === 4) n.unshift(0, 0), n.push(1, 1), c = 8;
		else if ((c - 2) % 6) throw "Invalid CustomEase";
		for ((+n[0] != 0 || +n[c - 2] != 1) && Yo(n, t.height, t.originY), this.segment = n, d = 2; d < c; d += 6) l = {
			x: +n[d - 2],
			y: +n[d - 1]
		}, u = {
			x: +n[d + 4],
			y: +n[d + 5]
		}, i.push(l, u), Xo(l.x, l.y, +n[d], +n[d + 1], +n[d + 2], +n[d + 3], u.x, u.y, 1 / (o * 2e5), i, i.length - 1);
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
		}, this.ease.custom = this, this.id && zo && zo.registerEase(this.id, this.ease), this;
	}, t.getSVGData = function(t) {
		return e.getSVGData(this, t);
	}, e.create = function(t, n, r) {
		return new e(t, n, r).ease;
	}, e.register = function(e) {
		zo = e, Ho();
	}, e.get = function(e) {
		return zo.parseEase(e);
	}, e.getSVGData = function(t, n) {
		n = n || {};
		var r = n.width || 100, i = n.height || 100, a = n.x || 0, o = (n.y || 0) + i, s = zo.utils.toArray(n.path)[0], c, l, u, d, f, p, m, h, g, _;
		if (n.invert && (i = -i, o = 0), typeof t == "string" && (t = zo.parseEase(t)), t.custom && (t = t.custom), t instanceof e) c = Ro(Fo([t.segment.slice(0)], r, 0, 0, -i, a, o));
		else {
			for (c = [a, o], m = Math.max(5, (n.precision || 1) * 200), d = 1 / m, m += 2, h = 5 / m, g = Wo(a + d * r), _ = Wo(o + t(d) * -i), l = (_ - o) / (g - a), u = 2; u < m; u++) f = Wo(a + u * d * r), p = Wo(o + t(u * d) * -i), (Math.abs((p - _) / (f - g) - l) > h || u === m - 1) && (c.push(g, _), l = (p - _) / (f - g)), g = f, _ = p;
			c = "M" + c.join(",");
		}
		return s && s.setAttribute("d", c), c;
	}, e;
}();
Zo.version = "3.15.0", Zo.headless = !0, Vo() && zo.registerPlugin(Zo);
//#endregion
//#region src/modules/site-menu.ts
var Qo = "[data-site-menu]", $o = "[data-site-menu-panel]", es = "[data-site-menu-toggle]", ts = "[data-site-menu-toggle-label]", ns = "[data-site-menu-toggle-label-text]", rs = "[data-site-menu-toggle-label-ghost]", is = "data-site-menu-toggle-label-text", as = "data-site-menu-toggle-label-ghost", os = "[data-site-menu-link]", ss = "[data-site-menu-indicator]", cs = "is-active", ls = "is-open", us = "is-ready", ds = "data-site-menu-open-label", fs = "data-site-menu-closed-label", ps = "data-site-menu-current-key", ms = "data-site-menu-label", hs = "data-site-menu-key", gs = "data-site-menu-original-tabindex", _s = "CLOSE", vs = "MENU", ys = .42, bs = {
	open: .513,
	close: .378,
	transition: .54
};
b.registerPlugin(Zo);
var xs = Zo.create("site-menu-panel", "0.7,0,0.08,1"), Ss = [], Cs = !1;
function ws(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Ts(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return ws(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Es(e, t) {
	return t ? r(e, hs) === t : !1;
}
function Ds(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Es(e, r(t, ps) || ((n = document.documentElement.getAttribute(ps)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(ps)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = Ts(e);
	return a ? a === ws(window.location.pathname) : !1;
}
function Os(e) {
	var t, n;
	return r(e, ms) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function ks(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(cs) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Ds(t, e.root)) : t;
	return n ? Os(n) : "";
}
function As(e) {
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
			ks(e),
			r(e.root, fs) || vs,
			r(e.root, ds) || _s
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
function js(e) {
	var t, n;
	let r = s(ns, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(is, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Ms(e) {
	o(rs, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Ns(e, t = !0) {
	var n, i;
	let a = r(e.root, ds) || _s, o = r(e.root, fs) || vs, s = ks(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = js(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
	if (p && t && window.location.pathname !== "/" && !u()) {
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), Ms(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), window.location.pathname === "/" || u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(as, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: ys,
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
function Ps(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, gs);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(gs) && e.hasAttribute("tabindex") && e.setAttribute(gs, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Fs(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(ls, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Ps(e, t), Ns(e, n);
}
function Is(e, t, n) {
	b.killTweensOf(e.panel), b.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	if (!u()) return b.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? bs.open : bs.close,
		ease: xs,
		onComplete: () => {
			b.set(e.panel, { clearProps: "height" });
		}
	});
}
function Ls(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Fs(e, !0), Is(e, !0, t);
}
function Rs(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return Fs(e, !1), Is(e, !1, t);
}
function zs(e) {
	e.isOpen ? Rs(e) : Ls(e);
}
function Bs(e) {
	e.links.forEach((t) => {
		let n = Ds(t, e.root), r = s(ss, t);
		t.classList.toggle(cs, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function Vs(e) {
	var t;
	let n = s($o, e), r = s(es, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(ts, r)) == null ? s(ts, e) : t,
		links: o(os, e),
		isOpen: e.classList.contains(ls),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Ss.length + 1}`), r.setAttribute("aria-controls", n.id), Bs(i), Fs(i, i.isOpen, !1), i.cleanup.push(As(i)), e.classList.add(us);
	let a = (e) => {
		e.preventDefault(), zs(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || Rs(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (Rs(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(os) || Rs(i);
	}, d = () => {
		i.isHovered = !0, Ns(i);
	}, f = () => {
		i.isHovered = !1, Ns(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function Hs(e = document) {
	if (Cs && e === document) return () => void 0;
	e === document && (Cs = !0);
	let t = o(Qo, e).map(Vs).filter((e) => !!e);
	return Ss.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(us, ls);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(ns, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), Ms(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Ps(e, !0);
		});
	};
}
//#endregion
//#region src/modules/more-arrows.ts
var Us = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function Ws(e) {
	var t, n;
	if (!/^mehr\s+erfahren$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = Us);
}
function Gs(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && Ws(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(Ws);
}
function Ks() {
	Gs(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && Gs(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/outlined-buttons.ts
var qs = ".btn, .button-outlined";
function Js() {
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
		e instanceof HTMLElement && e.matches(qs) && t(e), e.querySelectorAll(qs).forEach(t);
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
var Ys = ".werk_hero_slider", Xs = ".werk_hero_track";
function Zs(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function Qs(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function $s(e) {
	let t = e.closest(Ys), n = t == null ? void 0 : t.querySelector(Xs);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = Zs(e, n), i = Qs(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function ec(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function tc(e, t) {
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
function nc(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function rc(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function ic(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function ac(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function oc(e, t) {
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
function sc() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return nc(e, t);
				let r = new Image();
				return r.src = e, tc(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = ic(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = rc(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || ac(n) ? "critical" : "warm" : i,
			load: (e) => tc(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && $s(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = rc(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = ic(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => oc(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", oc(r, e))
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
			let t = rc(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => ec(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function cc(e) {
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
async function lc(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await ec(a.shift().load(n.signal), n.signal);
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
var uc = /* @__PURE__ */ new WeakSet(), dc = 6800, fc = 600, pc = 500, mc = 1300;
function hc(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function gc(e) {
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
function _c(e, t) {
	var n, r;
	if (!Number.isFinite(t)) return;
	let i = Math.max(Number(e.getAttribute("aria-valuenow")) || 0, Math.min(100, Math.max(0, Math.round(t))));
	e.setAttribute("aria-valuenow", String(i)), (n = window.__sitePreloader) == null || (r = n.setSignatureIndex) == null || r.call(n, Math.min(6, Math.floor(i / 100 * 7)));
	let a = String(i).padStart(3, "0");
	e.querySelectorAll(".site-preloader__digit").forEach((e, t) => {
		var n;
		let r = e.firstElementChild, o = r.children[0], s = r.children[1], c = a[t], l = e.hidden;
		if (e.hidden = t < 3 - String(i).length, r.dataset.value !== c) {
			if (b.killTweensOf(r), o.textContent = (n = r.dataset.value) == null ? o.textContent : n, r.dataset.value = c, s.textContent = c, b.set(r, {
				yPercent: 0,
				y: 0
			}), u() || l || e.hidden) {
				o.textContent = c;
				return;
			}
			b.to(r, {
				yPercent: -50,
				y: 0,
				duration: .065,
				ease: "power2.out",
				onComplete: () => {
					o.textContent = c, b.set(r, {
						yPercent: 0,
						y: 0
					});
				}
			});
		}
	});
}
function vc(e) {
	let t = u(), n = !1, r = !1, i = 0, a = 0, o, s = new Promise((e) => {
		o = e;
	}), c = (t) => {
		if (n) return;
		let r = Math.min(1, (t - a) / dc);
		_c(e, (.6 * r + .4 * hc(r)) * 100), r === 1 ? o() : i = window.requestAnimationFrame(c);
	};
	return {
		start: () => {
			r || n || (r = !0, a = performance.now(), t ? (_c(e, 100), o()) : i = window.requestAnimationFrame(c));
		},
		complete: s,
		stop: () => {
			n = !0, window.cancelAnimationFrame(i);
		}
	};
}
function yc(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function bc(e) {
	return document.readyState === "complete" || e.aborted ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			window.removeEventListener("load", n), e.removeEventListener("abort", n), t();
		};
		window.addEventListener("load", n, { once: !0 }), e.addEventListener("abort", n, { once: !0 });
	});
}
async function xc(e, t) {
	t.aborted || (document.documentElement.classList.add(w), e.classList.add("is-fading"), await yc(u() ? 0 : pc, t), !t.aborted && (e.classList.add("is-curtain"), await yc(u() ? 0 : mc, t)));
}
function Sc() {
	var e, t;
	let n = window.__sitePreloader;
	if (!(n != null && n.active) || uc.has(n)) return;
	uc.add(n);
	let r = document.querySelector(C);
	if (!r) {
		n.release();
		return;
	}
	let i = new AbortController(), a = vc(r);
	(e = n.allowExit) == null || e.call(n), ((t = n.introReady) == null ? Promise.resolve() : t).then(() => {
		n.active && a.start();
	}), n.cleanup.push(() => {
		i.abort(), a.stop();
		let e = r.querySelectorAll(".site-preloader__track");
		e.length && b.killTweensOf(e);
	});
	let o = async () => {
		if (await cc(i.signal), !n.active) return;
		let e = sc(), t = e.filter((e) => e.priority === "critical");
		await Promise.all(t.map(async (e) => {
			await ec(Promise.resolve().then(() => e.load(i.signal)), i.signal);
		})), n.active && (await gc(i.signal), n.active && (await n.introReady, n.active && (await Promise.all([a.complete, bc(i.signal)]), n.active && (await yc(u() ? 0 : Math.max(0, T - (Date.now() - n.startedAt)), i.signal), n.active && (await yc(u() ? 0 : fc, i.signal), n.active && (await xc(r, i.signal), n.active && (n.release(), lc(e))))))));
	}, s = () => {
		o().catch(n.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Cc = !1, wc = !1;
function Tc() {
	if (wc || u()) return;
	wc = !0;
	let e, t = () => {
		let t = window.lenis;
		if (Cc || !window.__siteLenisManaged || !t) return;
		Cc = !0, b.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		b.ticker.add(n), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			b.ticker.remove(n), t.off("scroll", $.update), Cc = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), Cc || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/modules/home-image-wipe.ts
var Ec = ".news_event .intro_img, .about_section .about_img, [data-wm-home] .map_info", Dc = "data-home-image-wipe", Oc = 1300;
function kc() {
	var e;
	if (!document.querySelector(".werk_hero_section") || !document.querySelector(".about_section") || u()) return;
	let t = getComputedStyle(document.documentElement).getPropertyValue("--eo").trim() || "cubic-bezier(.05, .85, .05, 1)", n = /* @__PURE__ */ new Set(), r = !((e = window.__sitePreloader) != null && e.active), i = new IntersectionObserver((e) => {
		e.forEach((e) => {
			if (!r || !e.isIntersecting) return;
			let a = e.target;
			i.unobserve(a);
			let o = () => {
				if (!a.isConnected || !a.hasAttribute(Dc)) return;
				if (!a.animate) {
					a.removeAttribute(Dc);
					return;
				}
				let e = a.animate([{ clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0 0 0 0)" }], {
					duration: Oc,
					easing: t,
					fill: "forwards"
				});
				n.add(e), e.onfinish = () => {
					a.removeAttribute(Dc), e.cancel(), n.delete(e);
				};
			}, s = a instanceof HTMLImageElement ? a : a.querySelector("img");
			s && !s.complete ? (s.addEventListener("load", o, { once: !0 }), s.addEventListener("error", o, { once: !0 })) : o();
		});
	}, {
		rootMargin: "0px 0px -10% 0px",
		threshold: 0
	});
	document.querySelectorAll(Ec).forEach((e) => {
		e.setAttribute(Dc, ""), i.observe(e);
	}), S(() => {
		r = !0, document.querySelectorAll(`[${Dc}]`).forEach((e) => {
			i.unobserve(e), i.observe(e);
		});
	}), window.addEventListener("pagehide", () => {
		i.disconnect(), n.forEach((e) => e.cancel()), document.querySelectorAll(`[${Dc}]`).forEach((e) => e.removeAttribute(Dc));
	}, { once: !0 });
}
//#endregion
//#region src/modules/home-heading-reveal.ts
var Ac = "h1, h2, h3, h4, h5, h6", jc = [
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
].join(", "), Mc = "data-home-heading-pending", Nc = !1;
function Pc() {
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
function Fc() {
	var e, t, n;
	if (Nc || window.location.pathname !== "/" || u()) return;
	let r = o(Ac).filter((e) => {
		var t;
		return ((t = e.textContent) == null ? void 0 : t.trim()) && !e.closest(jc) && !e.querySelector("a, button, input, select, textarea") && e.getClientRects().length > 0;
	});
	if (!r.length) return;
	Nc = !0, r.forEach((e) => e.setAttribute(Mc, ""));
	let i = [], a = (e = (t = document.fonts) == null ? void 0 : t.ready) == null ? Promise.resolve() : e;
	Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		a,
		(n = window.__sitePreloader) == null ? void 0 : n.ready,
		Pc()
	]).then(([{ SplitText: e }]) => {
		b.registerPlugin($, e), r.forEach((t) => {
			if (!t.isConnected || t.getClientRects().length === 0) {
				t.removeAttribute(Mc);
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
						a == null || a.kill(), r == null || r.kill(), !(n || !e.lines.length) && (b.set(e.lines, {
							yPercent: 105,
							opacity: 0
						}), r = b.to(e.lines, {
							yPercent: 0,
							opacity: 1,
							duration: 1.15,
							stagger: .12,
							ease: "power4.out",
							paused: !0,
							onComplete: () => b.set(e.lines, { clearProps: "transform,opacity" })
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
			t.removeAttribute(Mc);
		}), $.refresh();
	}).catch(() => r.forEach((e) => e.removeAttribute(Mc))), window.addEventListener("pagehide", () => {
		i.forEach((e) => e()), r.forEach((e) => e.removeAttribute(Mc));
	}, { once: !0 });
}
//#endregion
//#region src/modules/atelier-hero-reveal.ts
var Ic = ".atelier_hero_section .atlier_slide_eyebrow", Lc = ".atelier_hero_section .atelier_slide_heading", Rc = "data-atelier-hero-reveal-pending", zc = "0.02,0.9,0.03,1", Bc = !1;
function Vc() {
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
function Hc() {
	var e, t, n, r, i;
	if (Bc || !/^\/atelier\/?$/i.test(window.location.pathname) || u()) return;
	let a = document.querySelector(Ic), o = document.querySelector(Lc);
	if (!a || !o || !((e = a.textContent) != null && e.trim()) || !((t = o.textContent) != null && t.trim())) return;
	Bc = !0, a.setAttribute(Rc, ""), o.setAttribute(Rc, "");
	let s = !1, c = () => void 0, l = (n = (r = document.fonts) == null ? void 0 : r.ready) == null ? Promise.resolve() : n;
	Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		l,
		(i = window.__sitePreloader) == null ? void 0 : i.ready,
		Vc()
	]).then(([{ SplitText: e }]) => {
		if (s || !a.isConnected || !o.isConnected) return;
		b.registerPlugin(e, Zo);
		let t = Zo.create("atelier-preloader-text", zc), n, r, i, l = 0, u = !1, d = () => {
			if (!n || !r) return;
			i == null || i.kill();
			let e = n.lines, a = r.lines;
			if (u) {
				b.set([...e, ...a], { clearProps: "transform,opacity" });
				return;
			}
			b.set([...e, ...a], {
				yPercent: 105,
				opacity: 0
			}), i = b.timeline({
				paused: !0,
				onStart: () => {
					u = !0;
				}
			}), i.to(e, {
				yPercent: 0,
				opacity: 1,
				duration: 1.3,
				stagger: .12,
				ease: t
			}, 0), i.to(a, {
				yPercent: 0,
				opacity: 1,
				duration: 1.65,
				stagger: .16,
				ease: t,
				onComplete: () => b.set([...e, ...a], { clearProps: "transform,opacity" })
			}, .22);
		}, f = () => {
			l || (l = window.requestAnimationFrame(() => {
				l = 0, d();
			}));
		};
		try {
			n = e.create(a, {
				type: "lines",
				mask: "lines",
				linesClass: "atelier-hero-line",
				autoSplit: !0,
				onSplit: f
			}), r = e.create(o, {
				type: "lines",
				mask: "lines",
				linesClass: "atelier-hero-line",
				autoSplit: !0,
				onSplit: f
			}), window.cancelAnimationFrame(l), l = 0, d(), a.removeAttribute(Rc), o.removeAttribute(Rc), i == null || i.play(0), c = () => {
				window.cancelAnimationFrame(l), i == null || i.kill(), n == null || n.revert(), r == null || r.revert();
			};
		} catch (e) {
			window.cancelAnimationFrame(l), n == null || n.revert(), r == null || r.revert();
		}
	}).catch(() => void 0).finally(() => {
		a.removeAttribute(Rc), o.removeAttribute(Rc);
	}), window.addEventListener("pagehide", () => {
		s = !0, c();
	}, { once: !0 });
}
//#endregion
//#region src/modules/atelier-story-reveal.ts
var Uc = ".atelier_about_section.u-theme-dark5", Wc = "data-atelier-story-pending", Gc = "0.05,0.85,0.05,1", Kc = !1;
function qc() {
	var e, t, n;
	if (Kc || !/^\/atelier\/?$/i.test(window.location.pathname) || u()) return;
	let r = document.querySelector(Uc), i = r == null ? void 0 : r.querySelector(".atelier_about_h2"), a = r == null ? void 0 : r.querySelector(".atelier_story_p");
	if (!i || !a) return;
	Kc = !0, i.setAttribute(Wc, ""), a.setAttribute(Wc, "");
	let o = !1, s = [], c = (e = (t = document.fonts) == null ? void 0 : t.ready) == null ? Promise.resolve() : e;
	Promise.all([
		import("./site-interactions-CacQO3xR.js"),
		c,
		(n = window.__sitePreloader) == null ? void 0 : n.ready
	]).then(([{ SplitText: e }]) => {
		if (o || !i.isConnected || !a.isConnected) return;
		b.registerPlugin(Zo, $, e);
		let t = Zo.create("atelier-story-text", Gc), n = (n, r, i, a, o) => {
			let c = !1, l, u, d = e.create(n, {
				type: r,
				mask: r,
				autoSplit: r === "lines",
				wordsClass: "atelier-story-word",
				linesClass: "atelier-story-line",
				onSplit(e) {
					u == null || u.kill(), l == null || l.kill();
					let s = r === "words" ? e.words : e.lines;
					c || !s.length || (b.set(s, { yPercent: r === "words" ? 108 : 106 }), l = b.to(s, {
						yPercent: 0,
						duration: i,
						stagger: a,
						delay: o,
						ease: t,
						paused: !0,
						onComplete: () => b.set(s, { clearProps: "transform" })
					}), u = $.create({
						trigger: n,
						start: "top 80%",
						once: !0,
						animation: l,
						onEnter: () => {
							c = !0;
						}
					}));
				}
			});
			s.push(() => {
				u == null || u.kill(), l == null || l.kill(), d.revert();
			}), n.removeAttribute(Wc);
		};
		try {
			n(i, "words", 2.4, .14, 0), n(a, "lines", 2.6, .07, .2), $.refresh();
		} catch (e) {
			s.forEach((e) => e());
		}
	}).catch(() => void 0).finally(() => {
		i.removeAttribute(Wc), a.removeAttribute(Wc);
	}), window.addEventListener("pagehide", () => {
		o = !0, s.forEach((e) => e());
	}, { once: !0 });
}
//#endregion
//#region src/main.ts
var Jc = !1;
Sc(), io(), Mr(), Fc(), Hc(), qc(), Tc();
function Yc() {
	if (Jc) return;
	Jc = !0;
	let e = ee();
	Ma({ i18n: e }), wi({ i18n: e }), Co(), Hs(), ie(), _(), E(), Ks(), Js(), kc(), window.SiteInteractions = {
		openModal: Oa,
		openContentModal: Da,
		closeModal: ka,
		openLightbox: bi,
		closeLightbox: xi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Yc, { once: !0 }) : Yc();
//#endregion

//# sourceMappingURL=site-interactions.js.map