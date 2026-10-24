import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { t as x } from "./site-interactions-CKkKncuX.js";
import { a as S, i as ee, n as C, r as te, t as w } from "./site-interactions-DiIQUbt_.js";
//#region src/modules/i18n.ts
var T = {};
function E(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function ne(e = document) {
	var t, n;
	T = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (T = E(v(i))), {
		get values() {
			return { ...T };
		},
		t: D
	};
}
function D(e, t) {
	let n = e.trim(), r = T[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var O = ".site-menu__languages", re = ".site-menu__language", ie = "site-menu__language-indicator";
function k(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function ae(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function oe(e) {
	let t = Array.from(e.querySelectorAll(re)), n = k(t);
	if (!n || e.querySelector(`.${ie}`)) return;
	let r = document.createElement("span");
	r.className = ie, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
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
	document.querySelectorAll(O).forEach(oe);
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
var A, j, M, N, ue, de, fe, P, F, pe, me, I, he, ge = function() {
	return A || typeof window < "u" && (A = window.gsap) && A.registerPlugin && A;
}, _e = 1, L = [], R = [], z = [], ve = Date.now, ye = function(e, t) {
	return t;
}, be = function() {
	var e = F.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, R), r.push.apply(r, z), R = n, z = r, ye = function(e, n) {
		return t[e](n);
	};
}, B = function(e, t) {
	return ~z.indexOf(e) && z[z.indexOf(e) + 1][t];
}, V = function(e) {
	return !!~pe.indexOf(e);
}, H = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, xe = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Se = "scrollLeft", Ce = "scrollTop", we = function() {
	return me && me.isPressed || R.cache++;
}, U = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			_e && (M.history.scrollRestoration = "manual");
			var i = me && me.isPressed;
			r = n.v = Math.round(r) || (me && me.iOS ? 1 : 0), e(r), n.cacheID = R.cache, i && ye("ss", r);
		} else (t || R.cache !== n.cacheID || ye("ref")) && (n.cacheID = R.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Te = {
	s: Se,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: U(function(e) {
		return arguments.length ? M.scrollTo(e, Ee.sc()) : M.pageXOffset || N[Se] || ue[Se] || de[Se] || 0;
	})
}, Ee = {
	s: Ce,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Te,
	sc: U(function(e) {
		return arguments.length ? M.scrollTo(Te.sc(), e) : M.pageYOffset || N[Ce] || ue[Ce] || de[Ce] || 0;
	})
}, De = function(e, t) {
	return (t && t._ctx && t._ctx.selector || A.utils.toArray)(e)[0] || (typeof e == "string" && A.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Oe = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, ke = function(e, t) {
	var n = t.s, r = t.sc;
	V(e) && (e = N.scrollingElement || ue);
	var i = R.indexOf(e), a = r === Ee.sc ? 1 : 2;
	!~i && (i = R.push(e) - 1), R[i + a] || H(e, "scroll", we);
	var o = R[i + a], s = o || (R[i + a] = U(B(e, n), !0) || (V(e) ? r : U(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = A.getProperty(e, "scrollBehavior") === "smooth"), s;
}, Ae = function(e, t, n) {
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
}, je = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Me = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Ne = function() {
	F = A.core.globals().ScrollTrigger, F && F.core && be();
}, Pe = function(e) {
	return A = e || ge(), !j && A && typeof document < "u" && document.body && (M = window, N = document, ue = N.documentElement, de = N.body, pe = [
		M,
		N,
		ue,
		de
	], A.utils.clamp, he = A.core.context || function() {}, P = "onpointerenter" in de ? "pointer" : "mouse", fe = W.isTouch = M.matchMedia && M.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in M || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, I = W.eventTypes = ("ontouchstart" in ue ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ue ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return _e = 0;
	}, 500), j = 1), F || Ne(), j;
};
Te.op = Ee, R.cache = 0;
var W = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		j || Pe(A) || console.warn("Please gsap.registerPlugin(Observer)"), F || Ne();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, ee = e.onChangeY, C = e.onChange, te = e.onToggleX, w = e.onToggleY, T = e.onHover, E = e.onHoverEnd, ne = e.onMove, D = e.ignoreCheck, O = e.isNormalizer, re = e.onGestureStart, ie = e.onGestureEnd, k = e.onWheel, ae = e.onEnable, oe = e.onDisable, se = e.onClick, ce = e.scrollSpeed, le = e.capture, pe = e.allowClicks, ge = e.lockAxis, _e = e.onLockAxis;
		this.target = i = De(i) || ue, this.vars = e, u && (u = A.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ce = ce || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(M.getComputedStyle(de).lineHeight) || 22);
		var R, z, ye, be, B, Se, Ce, U = this, W = 0, G = 0, K = e.passive || !s && e.passive !== !1, q = ke(i, Te), J = ke(i, Ee), Fe = q(), Y = J(), Ie = ~r.indexOf("touch") && !~r.indexOf("pointer") && I[0] === "pointerdown", Le = V(i), X = i.ownerDocument || N, Re = [
			0,
			0,
			0
		], ze = [
			0,
			0,
			0
		], Be = 0, Ve = function() {
			return Be = ve();
		}, He = function(e, t) {
			return (U.event = e) && u && Oe(e.target, u) || t && Ie && e.pointerType !== "touch" || D && D(e, t);
		}, Ue = function() {
			U._vx.reset(), U._vy.reset(), z.pause(), c && c(U);
		}, Z = function() {
			var e = U.deltaX = Me(Re), n = U.deltaY = Me(ze), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			C && (r || i) && C(U, e, n, Re, ze), r && (v && U.deltaX > 0 && v(U), y && U.deltaX < 0 && y(U), S && S(U), te && U.deltaX < 0 != W < 0 && te(U), W = U.deltaX, Re[0] = Re[1] = Re[2] = 0), i && (x && U.deltaY > 0 && x(U), b && U.deltaY < 0 && b(U), ee && ee(U), w && U.deltaY < 0 != G < 0 && w(U), G = U.deltaY, ze[0] = ze[1] = ze[2] = 0), (be || ye) && (ne && ne(U), ye && (p && ye === 1 && p(U), h && h(U), ye = 0), be = !1), Se && !(Se = !1) && _e && _e(U), B && (k(U), B = !1), R = 0;
		}, We = function(e, t, n) {
			Re[n] += e, ze[n] += t, U._vx.update(e), U._vy.update(t), o ? R || (R = requestAnimationFrame(Z)) : Z();
		}, Ge = function(e, t) {
			ge && !Ce && (U.axis = Ce = Math.abs(e) > Math.abs(t) ? "x" : "y", Se = !0), Ce !== "y" && (Re[2] += e, U._vx.update(e, !0)), Ce !== "x" && (ze[2] += t, U._vy.update(t, !0)), o ? R || (R = requestAnimationFrame(Z)) : Z();
		}, Ke = function(e) {
			if (!He(e, 1)) {
				e = je(e, s);
				var t = e.clientX, r = e.clientY, i = t - U.x, a = r - U.y, o = U.isDragging;
				U.x = t, U.y = r, (o || (i || a) && (Math.abs(U.startX - t) >= n || Math.abs(U.startY - r) >= n)) && (ye || (ye = o ? 2 : 1), o || (U.isDragging = !0), Ge(i, a));
			}
		}, qe = U.onPress = function(e) {
			He(e, 1) || e && e.button || (U.axis = Ce = null, z.pause(), U.isPressed = !0, e = je(e), W = G = 0, U.startX = U.x = e.clientX, U.startY = U.y = e.clientY, U._vx.reset(), U._vy.reset(), H(O ? i : X, I[1], Ke, K, !0), U.deltaX = U.deltaY = 0, g && g(U));
		}, Je = U.onRelease = function(e) {
			if (!He(e, 1)) {
				xe(O ? i : X, I[1], Ke, !0);
				var t = !isNaN(U.y - U.startY), n = U.isDragging, r = n && (Math.abs(U.x - U.startX) > 3 || Math.abs(U.y - U.startY) > 3), a = je(e);
				!r && t && (U._vx.reset(), U._vy.reset(), s && pe && A.delayedCall(.08, function() {
					if (ve() - Be > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (X.createEvent) {
							var t = X.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, M, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), U.isDragging = U.isGesturing = U.isPressed = !1, c && n && !O && z.restart(!0), ye && Z(), m && n && m(U), _ && _(U, r);
			}
		}, Ye = function(e) {
			return e.touches && e.touches.length > 1 && (U.isGesturing = !0) && re(e, U.isDragging);
		}, Xe = function() {
			return (U.isGesturing = !1) || ie(U);
		}, Ze = function(e) {
			if (!He(e)) {
				var t = q(), n = J();
				We((t - Fe) * ce, (n - Y) * ce, 1), Fe = t, Y = n, c && z.restart(!0);
			}
		}, Qe = function(e) {
			if (!He(e)) {
				e = je(e, s), k && (B = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? M.innerHeight : 1) * d;
				We(e.deltaX * t, e.deltaY * t, 0), c && !O && z.restart(!0);
			}
		}, $e = function(e) {
			if (!He(e)) {
				var t = e.clientX, n = e.clientY, r = t - U.x, i = n - U.y;
				U.x = t, U.y = n, be = !0, c && z.restart(!0), (r || i) && Ge(r, i);
			}
		}, et = function(e) {
			U.event = e, T(U);
		}, tt = function(e) {
			U.event = e, E(U);
		}, nt = function(e) {
			return He(e) || je(e, s) && se(U);
		};
		z = U._dc = A.delayedCall(l || .25, Ue).pause(), U.deltaX = U.deltaY = 0, U._vx = Ae(0, 50, !0), U._vy = Ae(0, 50, !0), U.scrollX = q, U.scrollY = J, U.isDragging = U.isGesturing = U.isPressed = !1, he(this), U.enable = function(e) {
			return U.isEnabled || (H(Le ? X : i, "scroll", we), r.indexOf("scroll") >= 0 && H(Le ? X : i, "scroll", Ze, K, le), r.indexOf("wheel") >= 0 && H(i, "wheel", Qe, K, le), (r.indexOf("touch") >= 0 && fe || r.indexOf("pointer") >= 0) && (H(i, I[0], qe, K, le), H(X, I[2], Je), H(X, I[3], Je), pe && H(i, "click", Ve, !0, !0), se && H(i, "click", nt), re && H(X, "gesturestart", Ye), ie && H(X, "gestureend", Xe), T && H(i, P + "enter", et), E && H(i, P + "leave", tt), ne && H(i, P + "move", $e)), U.isEnabled = !0, U.isDragging = U.isGesturing = U.isPressed = be = ye = !1, U._vx.reset(), U._vy.reset(), Fe = q(), Y = J(), e && e.type && qe(e), ae && ae(U)), U;
		}, U.disable = function() {
			U.isEnabled && (L.filter(function(e) {
				return e !== U && V(e.target);
			}).length || xe(Le ? X : i, "scroll", we), U.isPressed && (U._vx.reset(), U._vy.reset(), xe(O ? i : X, I[1], Ke, !0)), xe(Le ? X : i, "scroll", Ze, le), xe(i, "wheel", Qe, le), xe(i, I[0], qe, le), xe(X, I[2], Je), xe(X, I[3], Je), xe(i, "click", Ve, !0), xe(i, "click", nt), xe(X, "gesturestart", Ye), xe(X, "gestureend", Xe), xe(i, P + "enter", et), xe(i, P + "leave", tt), xe(i, P + "move", $e), U.isEnabled = U.isPressed = U.isDragging = !1, oe && oe(U));
		}, U.kill = U.revert = function() {
			U.disable();
			var e = L.indexOf(U);
			e >= 0 && L.splice(e, 1), me === U && (me = 0);
		}, L.push(U), O && V(i) && (me = U), U.enable(f);
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
}, W.register = Pe, W.getAll = function() {
	return L.slice();
}, W.getById = function(e) {
	return L.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, ge() && A.registerPlugin(W);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var G, K, q, J, Fe, Y, Ie, Le, X, Re, ze, Be, Ve, He, Ue, Z, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct = 1, lt = Date.now, ut = lt(), dt = 0, ft = 0, pt = function(e, t, n) {
	var r = kt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, mt = function(e, t) {
	return t && (!kt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, ht = function e() {
	return ft && requestAnimationFrame(e);
}, gt = function() {
	return He = 1;
}, _t = function() {
	return He = 0;
}, vt = function(e) {
	return e;
}, yt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, bt = function() {
	return typeof window < "u";
}, xt = function() {
	return G || bt() && (G = window.gsap) && G.registerPlugin && G;
}, St = function(e) {
	return !!~Ie.indexOf(e);
}, Ct = function(e) {
	return (e === "Height" ? it : q["inner" + e]) || Fe["client" + e] || Y["client" + e];
}, wt = function(e) {
	return B(e, "getBoundingClientRect") || (St(e) ? function() {
		return Zn.width = q.innerWidth, Zn.height = it, Zn;
	} : function() {
		return en(e);
	});
}, Tt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = B(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Ct(i) : e["client" + i]) || 0;
	};
}, Et = function(e, t) {
	return !t || ~z.indexOf(e) ? wt(e) : function() {
		return Zn;
	};
}, Dt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = B(e, n)) ? a() - wt(e)()[i] : St(e) ? (Fe[n] || Y[n]) - Ct(r) : e[n] - e["offset" + r]);
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
	return q.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Qt = function(e) {
	var t = Zt(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, $t = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, en = function(e, t) {
	var n = t && Zt(e)[Ue] !== "matrix(1, 0, 0, 1, 0, 0)" && G.to(e, {
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
		return G.utils.snap(nn(e), t);
	};
}, an = function(e) {
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
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = J.createElement("div"), m = St(n) || B(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Y : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === Ee ? Rt : zt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], gn(p, 0, r, _), p;
}, gn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Jt] = 1, i["border" + o + Jt] = 0, i[n.p] = t + "px", G.set(e, i);
}, Q = [], _n = {}, vn, yn = function() {
	return lt() - dt > 34 && (vn || (vn = requestAnimationFrame(Hn)));
}, bn = function() {
	(!Xe || !Xe.isPressed || Xe.startX > Y.clientWidth) && (R.cache++, Xe ? vn || (vn = requestAnimationFrame(Hn)) : Hn(), dt || En("scrollStart"), dt = lt());
}, xn = function() {
	$e = q.innerWidth, Qe = q.innerHeight;
}, Sn = function(e) {
	R.cache++, (e === !0 || !Ve && !Ye && !J.fullscreenElement && !J.webkitFullscreenElement && (!Ze || $e !== q.innerWidth || Math.abs(q.innerHeight - Qe) > q.innerHeight * .25)) && Le.restart(!0);
}, Cn = {}, wn = [], Tn = function e() {
	return ln($, "scrollEnd", e) || Rn(!0);
}, En = function(e) {
	return Cn[e] && Cn[e].map(function(e) {
		return e();
	}) || wn;
}, Dn = [], On = function(e) {
	for (var t = 0; t < Dn.length; t += 5) (!e || Dn[t + 4] && Dn[t + 4].query === e) && (Dn[t].style.cssText = Dn[t + 1], Dn[t].getBBox && Dn[t].setAttribute("transform", Dn[t + 2] || ""), Dn[t + 3].uncache = 1);
}, kn = function() {
	return R.forEach(function(e) {
		return At(e) && ++e.cacheID && (e.rec = e());
	});
}, An = function(e, t) {
	var n;
	for (Z = 0; Z < Q.length; Z++) n = Q[Z], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	at = !0, t && On(t), t || En("revert");
}, jn = function(e, t) {
	R.cache++, (t || !Mn) && R.forEach(function(e) {
		return At(e) && e.cacheID++ && (e.rec = 0);
	}), kt(e) && (q.history.scrollRestoration = nt = e);
}, Mn, Nn = 0, Pn, Fn = function() {
	if (Pn !== Nn) {
		var e = Pn = Nn;
		requestAnimationFrame(function() {
			return e === Nn && Rn(!0);
		});
	}
}, In = function() {
	Y.appendChild(rt), it = !Xe && rt.offsetHeight || q.innerHeight, Y.removeChild(rt);
}, Ln = function(e) {
	return X(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Rn = function(e, t) {
	if (Fe = J.documentElement, Y = J.body, Ie = [
		q,
		J,
		Fe,
		Y
	], dt && !e && !at) {
		cn($, "scrollEnd", Tn);
		return;
	}
	In(), Mn = $.isRefreshing = !0, at || kn();
	var n = En("refreshInit");
	qe && $.sort(), t || An(), R.forEach(function(e) {
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
	}), R.forEach(function(e) {
		At(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), jn(nt, 1), Le.pause(), Nn++, Mn = 2, Hn(2), Q.forEach(function(e) {
		return At(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), Mn = $.isRefreshing = !1, En("refresh");
}, zn = 0, Bn = 1, Vn, Hn = function(e) {
	if (e === 2 || !Mn && !at) {
		$.isUpdating = !0, Vn && Vn.update(0);
		var t = Q.length, n = lt(), r = n - ut >= 50, i = t && Q[0].scroll();
		if (Bn = zn > i ? -1 : 1, Mn || (zn = i), r && (dt && !He && n - dt > 200 && (dt = 0, En("scrollEnd")), ze = ut, ut = n), Bn < 0) {
			for (Z = t; Z-- > 0;) Q[Z] && Q[Z].update(0, r);
			Bn = 1;
		} else for (Z = 0; Z < t; Z++) Q[Z] && Q[Z].update(0, r);
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
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[zt] = o[Rt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Bt] = tn(e, Te) + Xt, a[Vt] = tn(e, Ee) + Xt, a[Kt] = o[qt] = o[Lt] = o[It] = "0", Jn(r), o[Bt] = o["max" + Jt] = n[Bt], o[Vt] = o["max" + Yt] = n[Vt], o[Kt] = n[Kt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, qn = /([A-Z])/g, Jn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(qn, "-$1").toLowerCase());
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
	if (f && f.seek(0), isNaN(e) || (e = +e), jt(e)) f && (e = G.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && gn(o, n, r, !0);
	else {
		At(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = De(t, s) || Y, y = en(_) || {}, (!y || !y.left && !y.top) && Zt(_).display === "none" && (S = _.style.display, _.style.display = "block", y = en(_), S ? _.style.display = S : _.style.removeProperty("display")), b = mn(v[0], y[r.d]), x = mn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && gn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var ee = e + n, C = a._isStart;
		h = "scroll" + r.d2, gn(a, ee, r, C && ee > 20 || !C && (u ? Math.max(Y[h], Fe[h]) : a.parentNode[h]) <= ee + 1), u && (c = en(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Xt));
	}
	return f && _ && (h = en(_), f.seek(d), g = en(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, $n = /(webkit|moz|length|cssText|inset)/i, er = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Y) {
			for (a in e._stOrig = i.cssText, o = Zt(e), o) !+a && !$n.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		G.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, tr = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, nr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, G.set(e, r);
}, rr = function(e, t) {
	var n = ke(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = tr(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			R.cache++, t.tween && Hn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = G.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, cn(e, "wheel", n.wheelHandler), $.isTouch && cn(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		K || e.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), tt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ft) {
			this.update = this.refresh = this.kill = vt;
			return;
		}
		t = $t(kt(t) || jt(t) || t.nodeType ? { trigger: t } : t, fn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, ee = r.preventOverlaps, C = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Te : Ee, te = !l && l !== 0, w = De(t.scroller || q), T = G.core.getCache(w), E = St(w), ne = ("pinType" in t ? t.pinType : B(w, "pinType") || E && "fixed") === "fixed", D = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], O = te && t.toggleActions.split(" "), re = "markers" in t ? t.markers : fn.markers, ie = E ? 0 : parseFloat(Zt(w)["border" + C.p2 + Jt]) || 0, k = this, ae = t.onRefreshInit && function() {
			return t.onRefreshInit(k);
		}, oe = Tt(w, E, C), se = Et(w, E), ce = 0, le = 0, A = 0, j = ke(w, C), M, N, ue, de, fe, P, F, pe, me, I, he, ge, _e, L, ve, ye, be, V, H, xe, Se, Ce, we, U, Oe, Ae, je, Me, Ne, Pe, W, K, Ie, Le, Be, Ue, We, Ge, Ke;
		if (k._startClamp = k._endClamp = !1, k._dir = C, m *= 45, k.scroller = w, k.scroll = x ? x.time.bind(x) : j, de = j(), k.vars = t, n = n || t.animation, "refreshPriority" in t && (qe = 1, t.refreshPriority === -9999 && (Vn = k)), T.tweenScroll = T.tweenScroll || {
			top: rr(w, Ee),
			left: rr(w, Te)
		}, k.tweenTo = M = T.tweenScroll[C.p], k.scrubDuration = function(e) {
			Ie = jt(e) && e, Ie ? K ? K.duration(e) : K = G.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Ie,
				paused: !0,
				onComplete: function() {
					return h && h(k);
				}
			}) : (K && K.progress(1).kill(), K = 0);
		}, n && (n.vars.lazy = !1, n._initted && !k.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), k.animation = n.pause(), n.scrollTrigger = k, k.scrubDuration(l), Pe = 0, o || (o = n.vars.id)), v && ((!Mt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Y.style && G.set(E ? [Y, Fe] : w, { scrollBehavior: "auto" }), R.forEach(function(e) {
			return At(e) && e.target === (E ? J.scrollingElement || Fe : w) && (e.smooth = !1);
		}), ue = At(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? rn(n) : v.snapTo === "labelsDirectional" ? on(n) : v.directional === !1 ? G.utils.snap(v.snapTo) : function(e, t) {
			return an(v.snapTo)(e, lt() - le < 500 ? 0 : t.direction);
		}, Le = v.duration || {
			min: .1,
			max: 2
		}, Le = Mt(Le) ? Re(Le.min, Le.max) : Re(Le, Le), Be = G.delayedCall(v.delay || Ie / 2 || .1, function() {
			var e = j(), t = lt() - le < 500, r = M.tween;
			if ((t || Math.abs(k.getVelocity()) < 10) && !r && !He && ce !== e) {
				var i = (e - P) / L, a = n && !te ? n.totalProgress() : i, o = t ? 0 : (a - W) / (lt() - ze) * 1e3 || 0, s = G.utils.clamp(-i, 1 - i, Ft(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = ue(c, k), jt(l) || (l = c), u = Math.max(0, Math.round(P + l * L)), e <= F && e >= P && u !== e) {
					if (r && !r._initted && r.data <= Ft(u - e)) return;
					v.inertia === !1 && (s = l - i), M(u, {
						duration: Le(Ft(Math.max(Ft(c - a), Ft(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Ft(u - e),
						onInterrupt: function() {
							return Be.restart(!0) && p && Pt(k, p);
						},
						onComplete: function() {
							k.update(), ce = j(), n && !te && (K ? K.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Pe = W = n && !te ? n.totalProgress() : k.progress, g && g(k), m && Pt(k, m);
						}
					}, e, s * L, u - e - s * L), f && Pt(k, f, M.tween);
				}
			} else k.isActive && ce !== e && Be.restart(!0);
		}).pause()), o && (_n[o] = k), u = k.trigger = De(u || d !== !0 && d), Ke = u && u._gsap && u._gsap.stRevert, Ke && (Ke = Ke(k)), d = d === !0 ? u : De(d), kt(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === qt || (f = !f && d.parentNode && d.parentNode.style && Zt(d.parentNode).display === "flex" ? !1 : Kt), k.pin = d, N = G.core.getCache(d), N.spacer ? ve = N.pinState : (b && (b = De(b), b && !b.nodeType && (b = b.current || b.nativeElement), N.spacerIsNative = !!b, b && (N.spacerState = Yn(b))), N.spacer = V = b || J.createElement("div"), V.classList.add("pin-spacer"), o && V.classList.add("pin-spacer-" + o), N.pinState = ve = Yn(d)), t.force3D !== !1 && G.set(d, { force3D: !0 }), k.spacer = V = N.spacer, Ne = Zt(d), U = Ne[f + C.os2], xe = G.getProperty(d), Se = G.quickSetter(d, C.a, Xt), Kn(d, V, Ne), be = Yn(d)), re) {
			ge = Mt(re) ? $t(re, dn) : dn, I = hn("scroller-start", o, w, C, ge, 0), he = hn("scroller-end", o, w, C, ge, 0, I), H = I["offset" + C.op.d2];
			var Ye = De(B(w, "content") || w);
			pe = this.markerStart = hn("start", o, Ye, C, ge, H, 0, x), me = this.markerEnd = hn("end", o, Ye, C, ge, H, 0, x), x && (Ge = G.quickSetter([pe, me], C.a, Xt)), !ne && !(z.length && B(w, "fixedMarkers") === !0) && (Qt(E ? Y : w), G.set([I, he], { force3D: !0 }), Ae = G.quickSetter(I, C.a, Xt), Me = G.quickSetter(he, C.a, Xt));
		}
		if (x) {
			var Xe = x.vars.onUpdate, Ze = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				k.update(0, 0, 1), Xe && Xe.apply(x, Ze || []);
			});
		}
		if (k.previous = function() {
			return Q[Q.indexOf(k) - 1];
		}, k.next = function() {
			return Q[Q.indexOf(k) + 1];
		}, k.revert = function(e, t) {
			if (!t) return k.kill(!0);
			var r = e !== !1 || !k.enabled, i = Ve;
			r !== k.isReverted && (r && (Ue = Math.max(j(), k.scroll.rec || 0), A = k.progress, We = n && n.progress()), pe && [
				pe,
				me,
				I,
				he
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (Ve = k, k.update(r)), d && (!y || !k.isActive) && (r ? Gn(d, V, ve) : Kn(d, V, Zt(d), Oe)), r || k.update(r), Ve = i, k.isReverted = r);
		}, k.refresh = function(r, i, a, o) {
			if (!((Ve || !k.enabled) && !i)) {
				if (d && r && dt) {
					cn(e, "scrollEnd", Tn);
					return;
				}
				!Mn && ae && ae(k), Ve = k, M.tween && !a && (M.tween.kill(), M.tween = 0), K && K.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), k.isReverted || k.revert(!0, !0), k._subPinOffset = !1;
				var s = oe(), l = se(), m = x ? x.duration() : Dt(w, C), h = L <= .01 || !L, g = 0, _ = o || 0, v = Mt(a) ? a.end : t.end, b = t.endTrigger || u, S = Mt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), ee = k.pinnedContainer = t.pinnedContainer && De(t.pinnedContainer, k), T = u && Math.max(0, Q.indexOf(k)) || 0, D = T, O, N, ue, ge, R, z, B, H, Se, U, Ae, Me, Ne;
				for (re && Mt(a) && (Me = G.getProperty(I, C.p), Ne = G.getProperty(he, C.p)); D-- > 0;) z = Q[D], z.end || z.refresh(0, 1) || (Ve = k), B = z.pin, B && (B === u || B === d || B === ee) && !z.isReverted && (U || (U = []), U.unshift(z), z.revert(!0, !0)), z !== Q[D] && (T--, D--);
				for (At(S) && (S = S(k)), S = pt(S, "start", k), P = Qn(S, u, s, C, j(), pe, I, k, l, ie, ne, m, x, k._startClamp && "_startClamp") || (d ? -.001 : 0), At(v) && (v = v(k)), kt(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (kt(S) ? S.split(" ")[0] : "") + v : (g = mn(v.substr(2), s), v = kt(S) ? S : (x ? G.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, P) : P) + g, b = u)), v = pt(v, "end", k), F = Math.max(P, Qn(v || (b ? "100% 0" : m), b, s, C, j() + g, me, he, k, l, ie, ne, m, x, k._endClamp && "_endClamp")) || -.001, g = 0, D = T; D--;) z = Q[D] || {}, B = z.pin, B && z.start - z._pinPush <= P && !x && z.end > 0 && (O = z.end - (k._startClamp ? Math.max(0, z.start) : z.start), (B === u && z.start - z._pinPush < P || B === ee) && isNaN(S) && (g += O * (1 - z.progress)), B === d && (_ += O));
				if (P += g, F += g, k._startClamp && (k._startClamp += g), k._endClamp && !Mn && (k._endClamp = F || -.001, F = Math.min(F, Dt(w, C))), L = F - P || (P -= .01) && .001, h && (A = G.utils.clamp(0, 1, G.utils.normalize(P, F, Ue))), k._pinPush = _, pe && g && (O = {}, O[C.a] = "+=" + g, ee && (O[C.p] = "-=" + j()), G.set([pe, me], O)), d && !(ot && k.end >= Dt(w, C))) O = Zt(d), ge = C === Ee, ue = j(), Ce = parseFloat(xe(C.a)) + _, !m && F > 1 && (Ae = (E ? J.scrollingElement || Fe : w).style, Ae = {
					style: Ae,
					value: Ae["overflow" + C.a.toUpperCase()]
				}, E && Zt(Y)["overflow" + C.a.toUpperCase()] !== "scroll" && (Ae.style["overflow" + C.a.toUpperCase()] = "scroll")), Kn(d, V, O), be = Yn(d), N = en(d, !0), H = ne && ke(w, ge ? Te : Ee)(), f ? (Oe = [f + C.os2, L + _ + Xt], Oe.t = V, D = f === Kt ? tn(d, C) + L + _ : 0, D && (Oe.push(C.d, D + Xt), V.style.flexBasis !== "auto" && (V.style.flexBasis = D + Xt)), Jn(Oe), ee && Q.forEach(function(e) {
					e.pin === ee && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ne && j(Ue)) : (D = tn(d, C), D && V.style.flexBasis !== "auto" && (V.style.flexBasis = D + Xt)), ne && (R = {
					top: N.top + (ge ? ue - P : H) + Xt,
					left: N.left + (ge ? H : ue - P) + Xt,
					boxSizing: "border-box",
					position: "fixed"
				}, R[Bt] = R["max" + Jt] = Math.ceil(N.width) + Xt, R[Vt] = R["max" + Yt] = Math.ceil(N.height) + Xt, R[qt] = R[qt + Wt] = R[qt + Ht] = R[qt + Gt] = R[qt + Ut] = "0", R[Kt] = O[Kt], R[Kt + Wt] = O[Kt + Wt], R[Kt + Ht] = O[Kt + Ht], R[Kt + Gt] = O[Kt + Gt], R[Kt + Ut] = O[Kt + Ut], ye = Xn(ve, R, y), Mn && j(0)), n ? (Se = n._initted, Je(1), n.render(n.duration(), !0, !0), we = xe(C.a) - Ce + L + _, je = Math.abs(L - we) > 1, ne && je && ye.splice(ye.length - 2, 2), n.render(0, !0, !0), Se || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Je(0)) : we = L, Ae && (Ae.value ? Ae.style["overflow" + C.a.toUpperCase()] = Ae.value : Ae.style.removeProperty("overflow-" + C.a));
				else if (u && j() && !x) for (N = u.parentNode; N && N !== Y;) N._pinOffset && (P -= N._pinOffset, F -= N._pinOffset), N = N.parentNode;
				U && U.forEach(function(e) {
					return e.revert(!1, !0);
				}), k.start = P, k.end = F, de = fe = Mn ? Ue : j(), !x && !Mn && (de < Ue && j(Ue), k.scroll.rec = 0), k.revert(!1, !0), le = lt(), Be && (ce = -1, Be.restart(!0)), Ve = 0, n && te && (n._initted || We) && n.progress() !== We && n.progress(We || 0, !0).render(n.time(), !0, !0), (h || A !== k.progress || x || p || n && !n._initted) && (n && !te && (n._initted || A || n.vars.immediateRender !== !1) && n.totalProgress(x && P < -.001 && !A ? G.utils.normalize(P, F, 0) : A, !0), k.progress = h || (de - P) / L === A ? 0 : A), d && f && (V._pinOffset = Math.round(k.progress * we)), K && K.invalidate(), isNaN(Me) || (Me -= G.getProperty(I, C.p), Ne -= G.getProperty(he, C.p), nr(I, C, Me), nr(pe, C, Me - (o || 0)), nr(he, C, Ne), nr(me, C, Ne - (o || 0))), h && !Mn && k.update(), c && !Mn && !_e && (_e = !0, c(k), _e = !1);
			}
		}, k.getVelocity = function() {
			return (j() - fe) / (lt() - ze) * 1e3 || 0;
		}, k.endAnimation = function() {
			Nt(k.callbackAnimation), n && (K ? K.progress(1) : n.paused() ? te || Nt(n, k.direction < 0, 1) : Nt(n, n.reversed()));
		}, k.labelToScroll = function(e) {
			return n && n.labels && (P || k.refresh() || P) + n.labels[e] / n.duration() * L || 0;
		}, k.getTrailing = function(e) {
			var t = Q.indexOf(k), n = k.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (kt(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return k.direction > 0 ? e.end <= P : e.start >= F;
			});
		}, k.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = Mn === !0 ? Ue : k.scroll(), c = e ? 0 : (o - P) / L, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = k.progress, h, g, b, T, E, re, ie, ae;
				if (t && (fe = de, de = x ? j() : o, v && (W = Pe, Pe = n && !te ? n.totalProgress() : u)), m && d && !Ve && !ct && dt && (!u && P < o + (o - fe) / (lt() - ze) * m ? u = 1e-4 : u === 1 && F > o + (o - fe) / (lt() - ze) * m && (u = .9999)), u !== p && k.enabled) {
					if (h = k.isActive = !!u && u < 1, g = !!p && p < 1, re = h !== g, E = re || !!u != !!p, k.direction = u > p ? 1 : -1, k.progress = u, E && !Ve && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, te && (T = !re && O[b + 1] !== "none" && O[b + 1] || O[b], ae = n && (T === "complete" || T === "reset" || T in n))), ee && (re || ae) && (ae || l || !n) && (At(ee) ? ee(k) : k.getTrailing(ee).forEach(function(e) {
						return e.endAnimation();
					})), te || (K && !Ve && !ct ? (K._dp._time - K._start !== K._time && K.render(K._dp._time - K._start), K.resetTo ? K.resetTo("totalProgress", u, n._tTime / n._tDur) : (K.vars.totalProgress = u, K.invalidate().restart())) : n && n.totalProgress(u, !!(Ve && (le || e)))), d) {
						if (e && f && (V.style[f + C.os2] = U), !ne) Se(yt(Ce + we * u));
						else if (E) {
							if (ie = !e && u > p && F + 1 > o && o + 1 >= Dt(w, C), y) if (!e && (h || ie)) {
								var oe = en(d, !0), se = o - P;
								er(d, Y, oe.top + (C === Ee ? se : 0) + Xt, oe.left + (C === Ee ? 0 : se) + Xt);
							} else er(d, V);
							Jn(h || ie ? ye : be), je && u < 1 && h || Se(Ce + (u === 1 && !ie ? we : 0));
						}
					}
					v && !M.tween && !Ve && !ct && Be.restart(!0), a && (re || _ && u && (u < 1 || !st)) && X(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !te && !e && i(k), E && !Ve ? (te && (ae && (T === "complete" ? n.pause().totalProgress(1) : T === "reset" ? n.restart(!0).pause() : T === "restart" ? n.restart(!0) : n[T]()), i && i(k)), (re || !st) && (s && re && Pt(k, s), D[b] && Pt(k, D[b]), _ && (u === 1 ? k.kill(!1, 1) : D[b] = 0), re || (b = u === 1 ? 1 : 3, D[b] && Pt(k, D[b]))), S && !h && Math.abs(k.getVelocity()) > (jt(S) ? S : 2500) && (Nt(k.callbackAnimation), K ? K.progress(1) : Nt(n, T === "reverse" ? 1 : !u, 1))) : te && i && !Ve && i(k);
				}
				if (Me) {
					var ce = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					Ae(ce + +!!I._isFlipped), Me(ce);
				}
				Ge && Ge(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, k.enable = function(t, n) {
			k.enabled || (k.enabled = !0, cn(w, "resize", Sn), E || cn(w, "scroll", bn), ae && cn(e, "refreshInit", ae), t !== !1 && (k.progress = A = 0, de = fe = ce = j()), n !== !1 && k.refresh());
		}, k.getTween = function(e) {
			return e && M ? M.tween : K;
		}, k.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			k.refresh(!1, !1, {
				start: mt(e, n && !!k._startClamp),
				end: mt(t, n && !!k._endClamp)
			}, r), k.update();
		}, k.adjustPinSpacing = function(e) {
			if (Oe && e) {
				var t = Oe.indexOf(C.d) + 1;
				Oe[t] = parseFloat(Oe[t]) + e + Xt, Oe[1] = parseFloat(Oe[1]) + e + Xt, Jn(Oe);
			}
		}, k.disable = function(t, n) {
			if (t !== !1 && k.revert(!0, !0), k.enabled && (k.enabled = k.isActive = !1, n || K && K.pause(), Ue = 0, N && (N.uncache = 1), ae && ln(e, "refreshInit", ae), Be && (Be.pause(), M.tween && M.tween.kill() && (M.tween = 0)), !E)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === w && Q[r] !== k) return;
				ln(w, "resize", Sn), E || ln(w, "scroll", bn);
			}
		}, k.kill = function(e, r) {
			k.disable(e, r), K && !r && K.kill(), o && delete _n[o];
			var i = Q.indexOf(k);
			i >= 0 && Q.splice(i, 1), i === Z && Bn > 0 && Z--, i = 0, Q.forEach(function(e) {
				return e.scroller === k.scroller && (i = 1);
			}), i || Mn || (k.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), pe && [
				pe,
				me,
				I,
				he
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Vn === k && (Vn = 0), d && (N && (N.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (N.spacer = 0)), t.onKill && t.onKill(k);
		}, Q.push(k), k.enable(!1, !1), Ke && Ke(k), n && n.add && !L) {
			var Qe = k.update;
			k.update = function() {
				k.update = Qe, R.cache++, P || F || k.refresh();
			}, G.delayedCall(.01, k.update), L = .01, P = F = 0;
		} else k.refresh();
		d && Fn();
	}, e.register = function(t) {
		return K || (G = t || xt(), bt() && window.document && e.enable(), K = ft), K;
	}, e.defaults = function(e) {
		if (e) for (var t in e) fn[t] = e[t];
		return fn;
	}, e.disable = function(e, t) {
		ft = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), ln(q, "wheel", bn), ln(J, "scroll", bn), clearInterval(Be), ln(J, "touchcancel", vt), ln(Y, "touchstart", vt), sn(ln, J, "pointerdown,touchstart,mousedown", gt), sn(ln, J, "pointerup,touchend,mouseup", _t), Le.kill(), Ot(ln);
		for (var n = 0; n < R.length; n += 3) un(ln, R[n], R[n + 1]), un(ln, R[n], R[n + 2]);
	}, e.enable = function() {
		if (q = window, J = document, Fe = J.documentElement, Y = J.body, G) if (X = G.utils.toArray, Re = G.utils.clamp, tt = G.core.context || vt, Je = G.core.suppressOverwrites || vt, nt = q.history.scrollRestoration || "auto", zn = q.pageYOffset || 0, G.core.globals("ScrollTrigger", e), Y) {
			ft = 1, rt = document.createElement("div"), rt.style.height = "100vh", rt.style.position = "absolute", In(), ht(), W.register(G), e.isTouch = W.isTouch, et = W.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ze = W.isTouch === 1, cn(q, "wheel", bn), Ie = [
				q,
				J,
				Fe,
				Y
			], G.matchMedia ? (e.matchMedia = function(e) {
				var t = G.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, G.addEventListener("matchMediaInit", function() {
				kn(), An();
			}), G.addEventListener("matchMediaRevert", function() {
				return On();
			}), G.addEventListener("matchMedia", function() {
				Rn(0, 1), En("matchMedia");
			}), G.matchMedia().add("(orientation: portrait)", function() {
				return xn(), xn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), xn(), cn(J, "scroll", bn);
			var t = Y.hasAttribute("style"), n = Y.style, r = n.borderTopStyle, i = G.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = en(Y), Ee.m = Math.round(a.top + Ee.sc()) || 0, Te.m = Math.round(a.left + Te.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Y.setAttribute("style", ""), Y.removeAttribute("style")), Be = setInterval(yn, 250), G.delayedCall(.5, function() {
				return ct = 0;
			}), cn(J, "touchcancel", vt), cn(Y, "touchstart", vt), sn(cn, J, "pointerdown,touchstart,mousedown", gt), sn(cn, J, "pointerup,touchend,mouseup", _t), Ue = G.utils.checkPrefix("transform"), Wn.push(Ue), K = lt(), Le = G.delayedCall(.2, Rn).pause(), Ke = [
				J,
				"visibilitychange",
				function() {
					var e = q.innerWidth, t = q.innerHeight;
					J.hidden ? (We = e, Ge = t) : (We !== e || Ge !== t) && Sn();
				},
				J,
				"DOMContentLoaded",
				Rn,
				q,
				"load",
				Rn,
				q,
				"resize",
				Sn
			], Ot(cn), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < R.length; o += 3) un(ln, R[o], R[o + 1]), un(ln, R[o], R[o + 2]);
		} else J && J.addEventListener("DOMContentLoaded", function t() {
			e.enable(), J.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (st = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Be) || (Be = n) && setInterval(yn, n), "ignoreMobileResize" in t && (Ze = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ot(ln) || Ot(cn, t.autoRefreshEvents || "none"), Ye = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = De(e), r = R.indexOf(n), i = St(n);
		~r && R.splice(r, i ? 6 : 2), t && (i ? z.unshift(q, t, Y, t, Fe, t) : z.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (kt(e) ? De(e) : e).getBoundingClientRect(), i = r[n ? Bt : Vt] * t || 0;
		return n ? r.right - i > 0 && r.left + i < q.innerWidth : r.bottom - i > 0 && r.top + i < q.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		kt(e) && (e = De(e));
		var r = e.getBoundingClientRect(), i = r[n ? Bt : Vt], a = t == null ? i / 2 : t in pn ? pn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / q.innerWidth : (r.top + a) / q.innerHeight;
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
	return e ? X(e).forEach(function(e) {
		if (e && e.style) {
			var t = Dn.indexOf(e);
			t >= 0 && Dn.splice(t, 5), Dn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), G.core.getCache(e), tt());
		}
	}) : Dn;
}, $.revert = function(e, t) {
	return An(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? Sn(!0) : (K || $.register()) && Rn(!0);
}, $.update = function(e) {
	return ++R.cache && Hn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = jn, $.maxScroll = function(e, t) {
	return Dt(e, t ? Te : Ee);
}, $.getScrollFunc = function(e, t) {
	return ke(De(e), t ? Te : Ee);
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
		var n = [], r = [], o = G.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && At(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return At(a) && (a = a(), cn($, "refresh", function() {
		return a = t.batchMax();
	})), X(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var ir = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, ar = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (W.isTouch ? " pinch-zoom" : "") : "none", t === Fe && e(Y, n);
}, or = {
	auto: 1,
	scroll: 1
}, sr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || G.core.getCache(i), o = lt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Y && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(or[(s = Zt(i)).overflowY] || or[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !St(i) && (or[(s = Zt(i)).overflowY] || or[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, cr = function(e, t, n, r) {
	return W.create({
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
			return n && cn(J, W.eventTypes[0], dr, !1, !0);
		},
		onDisable: function() {
			return ln(J, W.eventTypes[0], dr, !0);
		}
	});
}, lr = /(input|label|select|textarea)/i, ur, dr = function(e) {
	var t = lr.test(e.target.tagName);
	(t || ur) && (e._gsapAllow = !0, ur = t);
}, fr = function(e) {
	Mt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = De(e.target) || Fe, l = G.core.globals().ScrollSmoother, u = l && l.get(), d = et && (e.content && De(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = ke(c, Ee), p = ke(c, Te), m = 1, h = (W.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, g = 0, _ = At(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = cr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = vt, ee = vt, C = function() {
		s = Dt(c, Ee), ee = Re(+!!et, s), n && (S = Re(0, Dt(c, Te))), v = Nn;
	}, te = function() {
		d._gsap.y = yt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, w = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = yt(o.deltaY / 2), t = ee(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = yt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = R.cache, Hn();
			}
			return !0;
		}
		f.offset && te(), y = !0;
	}, T, E, ne, D, O = function() {
		C(), T.isActive() && T.vars.scrollY > s && (f() > s ? T.progress(1) && f(s) : T.resetTo("scrollY", s));
	};
	return d && G.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return et && e.type === "touchmove" && w(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = yt((q.visualViewport && q.visualViewport.scale || 1) / h), T.pause(), e !== m && ar(c, m > 1.01 || !n && "x"), E = p(), ne = f(), C(), v = Nn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && te(), !t) D.restart(!0);
		else {
			R.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= ir(p, i, o, Dt(c, Te)), T.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= ir(f, i, o, Dt(c, Ee)), T.vars.scrollY = ee(o), T.invalidate().duration(r).play(.01), (et && T.vars.scrollY >= s || i >= s - 1) && G.to({}, {
				onUpdate: O,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		T._ts && T.pause(), lt() - g > 1e3 && (v = 0, g = lt());
	}, e.onChange = function(e, t, r, i, a) {
		if (Nn !== v && C(), t && n && p(S(i[2] === t ? E + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && te();
			var o = a[2] === r, s = o ? ne + e.startY - e.y : f() + r - a[1], c = ee(s);
			o && s !== c && (ne += c - s), f(c);
		}
		(r || t) && Hn();
	}, e.onEnable = function() {
		ar(c, !n && "x"), $.addEventListener("refresh", O), cn(q, "resize", O), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		ar(c, !0), ln(q, "resize", O), $.removeEventListener("refresh", O), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new W(e), o.iOS = et, et && !f() && f(1), et && G.ticker.add(vt), D = o._dc, T = G.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: tr(f, f(), function() {
			return T.pause();
		}) },
		onUpdate: Hn,
		onComplete: D.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (At(e)) return Q.sort(e);
	var t = q.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + q.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new W(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Xe;
	if (e === !0 && Xe) return Xe.enable();
	if (e === !1) {
		Xe && Xe.kill(), Xe = e;
		return;
	}
	var t = e instanceof W ? e : fr(e);
	return Xe && Xe.target === t.target && Xe.kill(), St(t.target) && (Xe = t), t;
}, $.core = {
	_getVelocityProp: Ae,
	_inputObserver: cr,
	_scrollers: R,
	_proxies: z,
	bridge: {
		ss: function() {
			dt || En("scrollStart"), dt = lt();
		},
		ref: function() {
			return Ve;
		}
	}
}, xt() && G.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var pr = "h1, h2, h3, h4, h5, h6, p", mr = [
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
].join(", "), hr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", gr = "data-reveal-pending", _r = "data-reveal-ready", vr = {
	y: 12,
	opacity: 0
}, yr = {
	y: 0,
	opacity: 1,
	duration: .8,
	ease: "power2.out"
}, br = !1;
function xr() {
	return /(?:^|\/)news(?:\/|$)/i.test(window.location.pathname);
}
function Sr(e) {
	var t;
	return e.closest(mr) || e.closest("[hidden]") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function Cr(e) {
	if (e.closest(hr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function wr(e) {
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
function Tr(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.element.style.opacity = e.played ? "1" : e.originalOpacity, e.element.style.transform = e.originalTransform, e.trigger = void 0, e.timeline = void 0;
}
function Er(e) {
	return e.signature = wr(e.element), e.element.removeAttribute(gr), e.element.setAttribute(_r, ""), [e.element];
}
function Dr(e) {
	let t = Er(e);
	if (!t.length || e.played) return;
	let n = b.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0;
		}
	});
	n.fromTo(t, vr, yr), e.timeline = n, e.trigger = $.create({
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
function Or(e, t) {
	e.forEach((e, n) => {
		let r = Er(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, vr, yr, .6 + n * .12 + i);
	});
}
function kr() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function Ar(e = document) {
	var t;
	if (br || xr() || u()) return;
	let n = o(pr, e).filter(Sr);
	if (!n.length) return;
	br = !0, b.registerPlugin($);
	let r = n.map((e) => ({
		element: e,
		hero: Cr(e),
		played: !1,
		signature: "",
		originalOpacity: e.style.opacity,
		originalTransform: e.style.transform
	}));
	r.forEach(({ element: e }) => e.setAttribute(gr, ""));
	let i, a, s = 0, c = !1, l = !1, d = () => {
		c && (i && i.progress() > 0 && (l = !0, r.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), r.forEach(Tr), i = b.timeline({ paused: !0 }), Or(r.filter((e) => e.hero && e.element.isConnected), i), r.filter((e) => !e.hero && e.element.isConnected).forEach(Dr), !l && i.duration() > 0 && (i.call(() => {
			l = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, f = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, r.some((e) => e.element.isConnected && wr(e.element) !== e.signature) && d();
		}));
	};
	Promise.all([kr(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		c = !0, d(), a = new ResizeObserver(f), r.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", f, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", d);
	}), window.addEventListener("pagehide", () => {
		var e;
		window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), r.forEach(Tr), window.removeEventListener("resize", f), (e = document.fonts) == null || e.removeEventListener("loadingdone", d), r.forEach(({ element: e }) => e.removeAttribute(gr));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var jr = "[data-lightbox-src]", Mr = "js-lightbox", Nr = `.${Mr}`, Pr = `${jr}, ${Nr}`, Fr = "[data-site-lightbox]", Ir = "[data-lightbox-close]", Lr = "[data-lightbox-prev]", Rr = "[data-lightbox-next]", zr = "[data-lightbox-auto-icon]", Br = "site-lightbox-trigger", Vr = "site-lightbox-trigger__image", Hr = "site-lightbox-trigger__icon", Ur = "w-dyn-bind-empty", Wr = "/plugins/Basic/assets/placeholder.", Gr = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Kr = !1, qr = null, Jr = null, Yr = [], Xr = 0, Zr = !1, Qr = null;
function $r(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return ei(e);
	let n = s("img", e);
	return n ? ei(n) : "";
}
function ei(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(Ur) || t.includes(Wr) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ti(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function ni(e) {
	let t = $r(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		credit: r(e, "data-lightbox-credit"),
		alt: ti(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ri(e) {
	let t = ni(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(Pr).filter((e) => r(e, "data-lightbox-group") === t.group).map(ni).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function ii() {
	let e = document.createElement("span");
	return e.className = Hr, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = Gr, e;
}
function ai(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function oi(e) {
	if (!ai(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = qr == null ? void 0 : qr.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function si(e) {
	if (e.closest(`.${Br}`) || !$r(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${Br} ${Mr}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(Mr), e.classList.add(Vr), e.before(t), t.append(e, ii()), oi(t);
}
function ci(e) {
	if (e instanceof HTMLImageElement) {
		si(e);
		return;
	}
	$r(e).trim() && (e.classList.add(Br), oi(e), s(zr, e) || e.append(ii()));
}
function li() {
	o(Nr).forEach(ci);
}
function ui(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function di() {
	var e, t, n, r, i, a;
	if (Jr) return fi(Jr), Jr;
	let o = s(Fr), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = qr == null ? void 0 : qr.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = ui((l = qr == null ? void 0 : qr.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = ui((u = qr == null ? void 0 : qr.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = ui((d = qr == null ? void 0 : qr.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = s(Ir, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(Lr, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(Rr, c)) == null ? document.createElement("button") : a
	};
	return Jr = m, fi(m), !o && !document.body.contains(c) && document.body.append(c), m;
}
function fi(e) {
	var t, n, r, i;
	let a = (t = qr == null ? void 0 : qr.t("close", "Close")) == null ? "Close" : t, o = (n = qr == null ? void 0 : qr.t("previous", "Previous")) == null ? "Previous" : n, s = (r = qr == null ? void 0 : qr.t("next", "Next")) == null ? "Next" : r, c = (i = qr == null ? void 0 : qr.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function pi() {
	let e = di(), t = Yr[Xr];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = Yr.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(Xr), e.root.dataset.lightboxCount = String(Yr.length);
}
function mi(e) {
	let t = di();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function hi(e) {
	Yr.length < 2 || (Xr = (e + Yr.length) % Yr.length, pi());
}
function gi() {
	hi(Xr + 1);
}
function _i() {
	hi(Xr - 1);
}
function vi(e) {
	var t;
	let n = ri(e);
	if (!n) return;
	let r = Zr;
	Yr = n.items, Xr = n.index, Qr = e, Zr = !0, pi(), mi(!0), r || p();
	let i = di();
	m(i.closeButton || i.root);
	let a = Yr[Xr];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: Xr,
		count: Yr.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function yi() {
	var t;
	if (!Zr || !Jr) return;
	let r = Jr, i = Qr, a = (t = Yr[Xr]) == null ? null : t;
	mi(!1), n(), Zr = !1, Yr = [], Xr = 0, Qr = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function bi(e) {
	if (!(!Zr || !Jr)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), yi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), gi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), _i();
			return;
		}
		y(Jr.root, e);
	}
}
function xi(e) {
	!Zr || !Jr || e.target === Jr.root && yi();
}
function Si(e) {
	return qr = e.i18n, li(), Kr || (g(document, "click", Pr, (e, t) => {
		e.preventDefault(), vi(t);
	}), g(document, "keydown", Nr, (e, t) => {
		ai(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), vi(t));
	}), g(document, "click", Ir, (e) => {
		e.preventDefault(), yi();
	}), g(document, "click", Lr, (e) => {
		e.preventDefault(), _i();
	}), g(document, "click", Rr, (e) => {
		e.preventDefault(), gi();
	}), document.addEventListener("click", xi), document.addEventListener("keydown", bi, !0), Kr = !0), {
		openLightbox: vi,
		closeLightbox: yi
	};
}
//#endregion
//#region src/modules/modal-image.ts
function Ci(e, t, n) {
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
function wi(e, t, n, r) {
	let i = Ci(t, n, r);
	e.onerror = i === t ? null : () => {
		e.onerror = null, e.src = t;
	}, e.src = i;
}
var Ti = /* @__PURE__ */ new Set([
	"6a7db30517820876cd23f469",
	"6a7db3187795b95db7804762",
	"6a7db33f5031a1007e109876",
	"6a7db3495031a1007e10a89e",
	"6a7db34bd247654adf43324d"
]);
function Ei(e, t) {
	var n;
	let r = (n = e.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	return r && Ti.has(r) ? new URL("../assets/modal-work-thumbnails/" + r + ".webp", import.meta.url).href : Ci(e, t, 500);
}
//#endregion
//#region src/modules/modal.ts
var Di = "[data-modal]", Oi = "[data-modal-content]", ki = "[data-modal-open]", Ai = "[data-modal-close]", ji = "a[href^=\"#modal:\"]", Mi = "#modal:", Ni = 460, Pi = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Fi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Ii = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Li = !1, Ri = !0, zi = null, Bi = null, Vi = "", Hi = null, Ui = null, Wi = /* @__PURE__ */ new Map();
function Gi(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Mi) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Ki() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Ai),
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
	return t.closeButton.innerHTML = Pi, t.lightboxIcon.innerHTML = Fi, Ji(t), t;
}
function qi() {
	return (!Bi || !document.body.contains(Bi.root)) && (Bi = Ki()), Ji(Bi), Bi;
}
function Ji(e) {
	var t, n;
	let r = (t = zi == null ? void 0 : zi.t("close", "Close")) == null ? "Close" : t, i = (n = zi == null ? void 0 : zi.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Yi(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Xi(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p;
	let m = e.querySelector("[data-modal-work]");
	if (!m) return null;
	let h = Yi(m, "[data-works-thumbnail]"), g = (t = (n = (r = m.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = m.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, _ = (a = (o = (s = m.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = m.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, v = (l = (u = (d = m.getAttribute("data-works-href")) == null ? m.getAttribute("data-works-url") : d) == null ? (f = m.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, y = x(h);
	return !g && !y && !v ? null : {
		title: g,
		year: _,
		thumbnail: y,
		thumbnailSrcset: (p = h == null ? void 0 : h.getAttribute("srcset")) == null ? void 0 : p,
		thumbnailAlt: (h == null ? void 0 : h.alt) || g,
		href: v
	};
}
function Zi(e) {
	var t, n, r, i;
	let a = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = Yi(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: x(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let s = Yi(e, "[data-modal-image]"), c = x(s);
	return c ? [{
		src: c,
		srcset: (t = s == null ? void 0 : s.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = s == null ? void 0 : s.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function Qi(e) {
	var t, n, i, a, o, s, c, l, u, d;
	let f = r(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, h = Zi(e), g = h[0], _ = e.querySelector("[data-modal-body]");
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
		work: Xi(e),
		gallery: h
	};
}
function $i(e) {
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
function ea() {
	o(Oi).forEach((e) => {
		let t = Qi(e);
		t && Wi.set(t.id, t);
	}), o(Di).forEach((e) => {
		let t = $i(e);
		t && Wi.set(t.id, t), e.remove();
	});
}
function ta(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(Oi).find((e) => r(e, "data-modal-content") === n), a = i ? Qi(i) : null;
	return a && Wi.set(n, a), (t = a == null ? Wi.get(n) : a) == null ? null : t;
}
function na(e) {
	try {
		let t = new URL(e, document.baseURI).pathname.match(/^\/werke\/([^/]+)\/?$/);
		if (!t) return e;
		let n = new URL("/werk-ueberblick", document.baseURI);
		return n.searchParams.set("work", decodeURIComponent(t[1])), n.hash = "werke", `${n.pathname}${n.search}${n.hash}`;
	} catch (t) {
		return e;
	}
}
function ra(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", na(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.alt = e.thumbnailAlt, t.loading = "lazy", t.decoding = "async";
		let n = Ei(e.thumbnail, e.thumbnailSrcset);
		t.onerror = n === e.thumbnail ? null : () => {
			t.onerror = null, t.src = e.thumbnail;
		}, t.src = n, a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = Ii, o.append(e);
	}
	return i.append(o), i;
}
function ia(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", wi(r, e.src, e.srcset, 500), i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Fi, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function aa(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function oa(e, t) {
	e.innerHTML = t, e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function sa(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? wi(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : (e.image.onerror = null, e.image.removeAttribute("src")), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, oa(e.text, t.html), aa(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t, n) => e.gallery.append(ia(t, n)));
}
function ca(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.onerror = null, e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, oa(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(ra(t.work)), o.forEach((t, n) => {
		e.gallery.append(ia(t, n));
	});
}
function la(e) {
	let t = qi();
	return e.layout === "context" ? ca(t, e) : sa(t, e), t;
}
function ua(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function da(e) {
	Ui !== null && (window.clearTimeout(Ui), Ui = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function fa(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Ui = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Ui = null;
	}, u() ? 0 : Ni), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function pa(e, t) {
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
	Vi && ha(), Wi.set(_.id, _), Hi = t == null ? c() : t, Vi = _.id;
	let v = la(_);
	da(v), p(), ua(v), d(v.root, "site:modal-open", {
		id: Vi,
		modal: v.root,
		content: _,
		trigger: t == null ? null : t
	});
}
function ma(e, t) {
	let n = ta(e);
	n && pa(n, t);
}
function ha() {
	if (!Vi || !Bi) return;
	let t = Vi, r = Hi;
	fa(Bi), n(), Vi = "", Hi = null, d(Bi.root, "site:modal-close", {
		id: t,
		modal: Bi.root
	}), e(r);
}
function ga(e) {
	if (!(!Vi || !Bi) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), ha();
			return;
		}
		y(Bi.panel, e);
	}
}
function _a(e) {
	if (!Ri || !Vi || !Bi) return;
	let t = e.target;
	!i(t) || t !== Bi.root || ha();
}
function va(e) {
	var n;
	return Ri = (n = e.closeOnBackdrop) == null || n, zi = e.i18n, ea(), qi(), Li || (g(document, "click", ki, (e, n) => {
		e.preventDefault(), ma(t(n, "data-modal-open"), n);
	}), g(document, "click", ji, (e, t) => {
		e.preventDefault(), ma(Gi(t), t);
	}), g(document, "click", Ai, (e, t) => {
		Bi != null && Bi.root.contains(t) && (e.preventDefault(), ha());
	}), document.addEventListener("click", _a), document.addEventListener("keydown", ga), Li = !0), {
		openModal: ma,
		openContentModal: pa,
		closeModal: ha
	};
}
//#endregion
//#region src/modules/site-menu.ts
var ya = "[data-site-menu]", ba = "[data-site-menu-panel]", xa = "[data-site-menu-toggle]", Sa = "[data-site-menu-toggle-label]", Ca = "[data-site-menu-toggle-label-text]", wa = "[data-site-menu-toggle-label-ghost]", Ta = "data-site-menu-toggle-label-text", Ea = "data-site-menu-toggle-label-ghost", Da = "[data-site-menu-link]", Oa = "[data-site-menu-indicator]", ka = "is-active", Aa = "is-open", ja = "is-ready", Ma = "data-site-menu-open-label", Na = "data-site-menu-closed-label", Pa = "data-site-menu-current-key", Fa = "data-site-menu-label", Ia = "data-site-menu-key", La = "data-site-menu-original-tabindex", Ra = "CLOSE", za = "MENU", Ba = .42, Va = [], Ha = !1;
function Ua(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Wa(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Ua(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Ga(e, t) {
	return t ? r(e, Ia) === t : !1;
}
function Ka(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Ga(e, r(t, Pa) || ((n = document.documentElement.getAttribute(Pa)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(Pa)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = Wa(e);
	return a ? a === Ua(window.location.pathname) : !1;
}
function qa(e) {
	var t, n;
	return r(e, Fa) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function Ja(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(ka) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Ka(t, e.root)) : t;
	return n ? qa(n) : "";
}
function Ya(e) {
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
			Ja(e),
			r(e.root, Na) || za,
			r(e.root, Ma) || Ra
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
function Xa(e) {
	var t, n;
	let r = s(Ca, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(Ta, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Za(e) {
	o(wa, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function Qa(e, t = !0) {
	var n, i;
	let a = r(e.root, Ma) || Ra, o = r(e.root, Na) || za, s = Ja(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = Xa(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), Za(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(Ea, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: Ba,
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
function $a(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, La);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(La) && e.hasAttribute("tabindex") && e.setAttribute(La, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function eo(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Aa, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), $a(e, t), Qa(e, n);
}
function to(e, t, n) {
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
function no(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	eo(e, !0), to(e, !0, t);
}
function ro(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return eo(e, !1), to(e, !1, t);
}
function io(e) {
	let t = s(ba, e);
	if (t) return b.killTweensOf(t), b.to(t, {
		height: 0,
		duration: .4,
		ease: "power2.inOut"
	});
}
function ao(e) {
	e.isOpen ? ro(e) : no(e);
}
function oo(e) {
	e.links.forEach((t) => {
		let n = Ka(t, e.root), r = s(Oa, t);
		t.classList.toggle(ka, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function so(e) {
	var t;
	let n = s(ba, e), r = s(xa, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(Sa, r)) == null ? s(Sa, e) : t,
		links: o(Da, e),
		isOpen: e.classList.contains(Aa),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Va.length + 1}`), r.setAttribute("aria-controls", n.id), oo(i), eo(i, i.isOpen, !1), i.cleanup.push(Ya(i)), e.classList.add(ja);
	let a = (e) => {
		e.preventDefault(), ao(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || ro(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (ro(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(Da) || ro(i);
	}, d = () => {
		i.isHovered = !0, Qa(i);
	}, f = () => {
		i.isHovered = !1, Qa(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function co(e = document) {
	if (Ha && e === document) return () => void 0;
	e === document && (Ha = !0);
	let t = o(ya, e).map(so).filter((e) => !!e);
	return Va.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(ja, Aa);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(Ca, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), Za(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), $a(e, !0);
		});
	};
}
//#endregion
//#region src/modules/page-transition.ts
var lo = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, uo = "page-transition-overlay", fo = "[data-page-transition-overlay], .page-transition-overlay", po = "page-transition-overlay__title", mo = "site-page-transition", ho = "site-page-transition-title", go = "pending", _o = "is-page-transition-pending", vo = "[data-site-menu]", yo = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), bo = !1, xo = !1;
function So(e) {
	document.documentElement.classList.toggle(_o, e);
}
function Co() {
	try {
		So(window.sessionStorage.getItem(mo) === go);
	} catch (e) {
		So(!1);
	}
}
function wo() {
	let e = document.querySelector(fo);
	if (e) return e.classList.add(uo), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), To(e), e;
	let t = document.createElement("div");
	return t.className = uo, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), To(t), document.body.append(t), t;
}
function To(e) {
	let t = e.querySelector(`.${po}`);
	t || (t = document.createElement("span"), t.className = po, e.append(t));
	try {
		if (window.sessionStorage.getItem(mo) === go) {
			var n;
			t.textContent = (n = window.sessionStorage.getItem(ho)) == null ? "" : n;
		}
	} catch (e) {}
	return t;
}
function Eo(e, t) {
	var n, r, i;
	let a = (e) => {
		var t;
		return (t = e == null ? void 0 : e.replace(/\s+/g, " ").trim()) == null ? "" : t;
	}, o = a((n = t.closest("[data-transition-title]")) == null ? void 0 : n.getAttribute("data-transition-title"));
	if (o) return o;
	let s = e.pathname.replace(/\/$/, "") || "/", c = Array.from(document.querySelectorAll("[data-site-menu-link][href]")).find((e) => {
		try {
			return (new URL(e.href).pathname.replace(/\/$/, "") || "/") === s;
		} catch (e) {
			return !1;
		}
	}), l = a(c == null ? void 0 : c.getAttribute("data-site-menu-label")) || a(c == null ? void 0 : c.textContent);
	if (l) return l;
	let u = t.closest("article, [class*=\"card\"]"), d = a((r = t.querySelector("h1, h2, h3, h4")) == null ? void 0 : r.textContent) || a(u == null || (i = u.querySelector("h1, h2, h3, h4")) == null ? void 0 : i.textContent);
	if (d) return d;
	let f = a(t.textContent);
	if (f && f.length <= 60 && !/^(mehr|weiter|lesen|details|öffnen)/i.test(f)) return f;
	let p = e.pathname.split("/").filter(Boolean).pop();
	if (!p) return "Startseite";
	try {
		return decodeURIComponent(p).replace(/[-_]+/g, " ").replace(/\b\p{L}/gu, (e) => e.toUpperCase());
	} catch (e) {
		return p.replace(/[-_]+/g, " ");
	}
}
function Do(e) {
	var t;
	return !!(e.closest(yo) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function Oo(e, t) {
	return !xo && !e.defaultPrevented && !l(e) && !Do(t);
}
function ko() {
	try {
		window.sessionStorage.setItem(mo, go), So(!0);
	} catch (e) {}
}
function Ao() {
	try {
		let e = window.sessionStorage.getItem(mo) === go;
		return window.sessionStorage.removeItem(mo), window.sessionStorage.removeItem(ho), So(!1), e;
	} catch (e) {
		return So(!1), !1;
	}
}
function jo(e) {
	let t = Ao(), n = Array.from(document.querySelectorAll(vo)), r = () => {
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
		delay: lo.holdDuration,
		duration: lo.revealDuration,
		ease: lo.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			}), r();
		}
	});
}
function Mo(e, t, n, r) {
	xo = !0, b.killTweensOf(t);
	let i = To(t);
	i.textContent = r, b.set(i, {
		autoAlpha: 0,
		y: 18
	});
	try {
		window.sessionStorage.setItem(ho, r);
	} catch (e) {}
	let a = b.timeline();
	if (n) {
		b.killTweensOf(n);
		let e = io(n);
		e && a.add(e);
	}
	a.call(ko, [], 0), a.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: lo.coverDuration,
		ease: lo.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	}, 0), a.to(i, {
		autoAlpha: 1,
		y: 0,
		duration: .35,
		ease: "power2.out"
	}, .4);
}
function No(e, t) {
	if (!e.persisted) return;
	xo = !1, Ao(), b.killTweensOf(t), b.set(t, {
		yPercent: -100,
		y: 0
	}), To(t).textContent = "";
	let n = document.querySelectorAll(vo);
	b.killTweensOf(n), b.set(n, { clearProps: "transform,opacity,visibility" });
	let r = document.querySelectorAll("[data-site-menu-panel]");
	b.killTweensOf(r), b.set(r, { clearProps: "height" });
}
function Po() {
	if (bo) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Po, { once: !0 });
		return;
	}
	bo = !0;
	let e = wo();
	S(() => jo(e)), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (xo) {
			t.preventDefault();
			return;
		}
		if (!Oo(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), Mo(i, e, r.closest(vo), Eo(i, r)));
	}, !0), window.addEventListener("pageshow", (t) => No(t, e));
}
Co();
//#endregion
//#region src/modules/parallax.ts
var Fo = "[data-parallax]", Io = "data-parallax", Lo = "data-parallax-ready", Ro = "fw-parallax-window", zo = "fw-parallax-window--self-sized", Bo = "fw-parallax-inner", Vo = 60, Ho = 160, Uo = ".site-lightbox-trigger", Wo = 1, Go = !1;
function Ko() {
	Go || (Go = !0, b.registerPlugin($));
}
function qo(e) {
	let t = e.getAttribute(Io);
	if (t === null || t.trim() === "") return Vo;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.min(Math.abs(n), Ho) : Vo;
}
function Jo(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Yo(e, t) {
	var n;
	let r = (n = e.closest(Uo)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(Ro)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(Ro);
	let a = document.createElement("span"), o = t / 2 + Wo;
	if (a.className = Bo, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(Ro), null;
		r.classList.add(zo), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function Xo(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Zo(e)
		});
		return;
	}
	n.forEach((n) => {
		Jo(n).then(() => {
			if (!n.isConnected) return;
			let r = Yo(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: Zo(e)
			}), $.refresh());
		});
	});
}
function Zo(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function Qo(e = document) {
	let t = o(Fo, e).filter((e) => !e.hasAttribute(Lo));
	t.length === 0 || u() || (Ko(), t.forEach((e) => {
		let t = qo(e);
		t !== 0 && (e.setAttribute(Lo, ""), Xo(e, t));
	}));
}
//#endregion
//#region src/modules/more-arrows.ts
var $o = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function es(e) {
	var t, n;
	if (!/^mehr\s+erfahren$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = $o);
}
function ts(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && es(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(es);
}
function ns() {
	ts(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && ts(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/spline-slider.ts
var rs = ".werk_hero_slider", is = ".werk_hero_track";
function as(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function os(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function ss(e) {
	let t = e.closest(rs), n = t == null ? void 0 : t.querySelector(is);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = as(e, n), i = os(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function cs(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function ls(e, t) {
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
function us(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function ds(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function fs(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function ps(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function ms(e, t) {
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
function hs() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return us(e, t);
				let r = new Image();
				return r.src = e, ls(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = fs(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = ds(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || ps(n) ? "critical" : "warm" : i,
			load: (e) => ls(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && ss(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = ds(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = fs(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => ms(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", ms(r, e))
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
			let t = ds(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => cs(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function gs(e) {
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
async function _s(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await cs(a.shift().load(n.signal), n.signal);
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
var vs = !1;
function ys(e) {
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
function bs(e, t) {
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
function xs(e, t) {
	let n = u(), r = 0, i = 0, a = 0, o = 0, s = !1, c = !1, l = 0, d = performance.now(), f = 0, p, m = new Promise((e) => {
		p = e;
	}), h = (t) => {
		let n = Math.max(o, Math.min(100, Math.floor(t)));
		n === o && n !== 100 || (o = n, bs(e, o));
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
function Ss(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function Cs(e, t) {
	if (u() || t.aborted) return Promise.resolve();
	document.documentElement.classList.add(C);
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
function ws() {
	if (vs) return;
	vs = !0;
	let e = window.__sitePreloader;
	if (!(e != null && e.active)) return;
	let t = document.querySelector(ee);
	if (!t) {
		e.release();
		return;
	}
	let n = new AbortController(), r = xs(t, e.startedAt);
	e.cleanup.push(() => {
		n.abort(), r.stop(), b.killTweensOf(t), b.killTweensOf(t.querySelectorAll(".site-preloader__track, .site-preloader__progress, .site-preloader__name, .site-preloader__signature"));
	});
	let i = async () => {
		if (await gs(n.signal), !e.active) return;
		let i = hs(), a = i.filter((e) => e.priority === "critical"), o = 0;
		r.setTasks(0, a.length), await Promise.all(a.map(async (t) => {
			await cs(Promise.resolve().then(() => t.load(n.signal)), n.signal), o++, e.active && r.setTasks(o, a.length);
		})), e.active && (await ys(n.signal), e.active && (await Ss(Math.max(0, te - (Date.now() - e.startedAt)), n.signal), e.active && (await r.complete(), e.active && (await Cs(t, n.signal), e.active && (e.release(), _s(i))))));
	}, a = () => {
		i().catch(e.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a, { once: !0 }) : a();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Ts = !1, Es = !1;
function Ds() {
	if (Es || u()) return;
	Es = !0;
	let e, t = () => {
		let t = window.lenis;
		if (Ts || !window.__siteLenisManaged || !t) return;
		Ts = !0, b.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		b.ticker.add(n), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			b.ticker.remove(n), t.off("scroll", $.update), Ts = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), Ts || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/main.ts
var Os = !1;
ws(), Po(), Ar(), Ds();
function ks() {
	if (Os) return;
	Os = !0;
	let e = ne();
	va({ i18n: e }), Si({ i18n: e }), Qo(), co(), se(), _(), w(), ns(), window.SiteInteractions = {
		openModal: ma,
		openContentModal: pa,
		closeModal: ha,
		openLightbox: vi,
		closeLightbox: yi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ks, { once: !0 }) : ks();
//#endregion

//# sourceMappingURL=site-interactions.js.map