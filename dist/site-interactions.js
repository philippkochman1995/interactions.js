import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-FNuBQfHA.js";
import { t as x } from "./site-interactions-QtEWUsWn.js";
import { i as S, n as C, r as w, t as T } from "./site-interactions-MF_aFTvs.js";
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
		t: ee
	};
}
function ee(e, t) {
	let n = e.trim(), r = E[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var k = ".site-menu__languages", A = ".site-menu__language", te = "site-menu__language-indicator";
function ne(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function j(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function re(e) {
	let t = Array.from(e.querySelectorAll(A)), n = ne(t);
	if (!n || e.querySelector(`.${te}`)) return;
	let r = document.createElement("span");
	r.className = te, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => j(e, r, t), a = () => {
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
	document.querySelectorAll(k).forEach(re);
}
//#endregion
//#region ../../../Users/philipp/Sites/FW/interactions.js/node_modules/gsap/Observer.js
function ae(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function oe(e, t, n) {
	return t && ae(e.prototype, t), n && ae(e, n), e;
}
var M, se, N, P, F, ce, le, ue, I, L, de, fe, pe, me = function() {
	return M || typeof window < "u" && (M = window.gsap) && M.registerPlugin && M;
}, he = 1, ge = [], R = [], z = [], B = Date.now, _e = function(e, t) {
	return t;
}, ve = function() {
	var e = I.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, R), r.push.apply(r, z), R = n, z = r, _e = function(e, n) {
		return t[e](n);
	};
}, V = function(e, t) {
	return ~z.indexOf(e) && z[z.indexOf(e) + 1][t];
}, ye = function(e) {
	return !!~L.indexOf(e);
}, H = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, U = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, be = "scrollLeft", xe = "scrollTop", Se = function() {
	return de && de.isPressed || R.cache++;
}, Ce = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			he && (N.history.scrollRestoration = "manual");
			var i = de && de.isPressed;
			r = n.v = Math.round(r) || (de && de.iOS ? 1 : 0), e(r), n.cacheID = R.cache, i && _e("ss", r);
		} else (t || R.cache !== n.cacheID || _e("ref")) && (n.cacheID = R.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, we = {
	s: be,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: Ce(function(e) {
		return arguments.length ? N.scrollTo(e, Te.sc()) : N.pageXOffset || P[be] || F[be] || ce[be] || 0;
	})
}, Te = {
	s: xe,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: we,
	sc: Ce(function(e) {
		return arguments.length ? N.scrollTo(we.sc(), e) : N.pageYOffset || P[xe] || F[xe] || ce[xe] || 0;
	})
}, Ee = function(e, t) {
	return (t && t._ctx && t._ctx.selector || M.utils.toArray)(e)[0] || (typeof e == "string" && M.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, De = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Oe = function(e, t) {
	var n = t.s, r = t.sc;
	ye(e) && (e = P.scrollingElement || F);
	var i = R.indexOf(e), a = r === Te.sc ? 1 : 2;
	!~i && (i = R.push(e) - 1), R[i + a] || H(e, "scroll", Se);
	var o = R[i + a], s = o || (R[i + a] = Ce(V(e, n), !0) || (ye(e) ? r : Ce(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = M.getProperty(e, "scrollBehavior") === "smooth"), s;
}, ke = function(e, t, n) {
	var r = e, i = e, a = B(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = B();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = B();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Ae = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, je = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Me = function() {
	I = M.core.globals().ScrollTrigger, I && I.core && ve();
}, Ne = function(e) {
	return M = e || me(), !se && M && typeof document < "u" && document.body && (N = window, P = document, F = P.documentElement, ce = P.body, L = [
		N,
		P,
		F,
		ce
	], M.utils.clamp, pe = M.core.context || function() {}, ue = "onpointerenter" in ce ? "pointer" : "mouse", le = W.isTouch = N.matchMedia && N.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in N || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, fe = W.eventTypes = ("ontouchstart" in F ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in F ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return he = 0;
	}, 500), se = 1), I || Me(), se;
};
we.op = Te, R.cache = 0;
var W = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		se || Ne(M) || console.warn("Please gsap.registerPlugin(Observer)"), I || Me();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, ee = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, te = e.onGestureStart, ne = e.onGestureEnd, j = e.onWheel, re = e.onEnable, ie = e.onDisable, ae = e.onClick, oe = e.scrollSpeed, L = e.capture, me = e.allowClicks, he = e.lockAxis, R = e.onLockAxis;
		this.target = i = Ee(i) || F, this.vars = e, u && (u = M.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, oe = oe || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(N.getComputedStyle(ce).lineHeight) || 22);
		var z, _e, ve, V, be, xe, Ce, W = this, G = 0, Pe = 0, K = e.passive || !s && e.passive !== !1, q = Oe(i, we), Fe = Oe(i, Te), J = q(), Y = Fe(), Ie = ~r.indexOf("touch") && !~r.indexOf("pointer") && fe[0] === "pointerdown", Le = ye(i), X = i.ownerDocument || P, Re = [
			0,
			0,
			0
		], ze = [
			0,
			0,
			0
		], Be = 0, Ve = function() {
			return Be = B();
		}, He = function(e, t) {
			return (W.event = e) && u && De(e.target, u) || t && Ie && e.pointerType !== "touch" || k && k(e, t);
		}, Ue = function() {
			W._vx.reset(), W._vy.reset(), _e.pause(), c && c(W);
		}, We = function() {
			var e = W.deltaX = je(Re), n = W.deltaY = je(ze), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(W, e, n, Re, ze), r && (v && W.deltaX > 0 && v(W), y && W.deltaX < 0 && y(W), S && S(W), T && W.deltaX < 0 != G < 0 && T(W), G = W.deltaX, Re[0] = Re[1] = Re[2] = 0), i && (x && W.deltaY > 0 && x(W), b && W.deltaY < 0 && b(W), C && C(W), E && W.deltaY < 0 != Pe < 0 && E(W), Pe = W.deltaY, ze[0] = ze[1] = ze[2] = 0), (V || ve) && (ee && ee(W), ve && (p && ve === 1 && p(W), h && h(W), ve = 0), V = !1), xe && !(xe = !1) && R && R(W), be && (j(W), be = !1), z = 0;
		}, Ge = function(e, t, n) {
			Re[n] += e, ze[n] += t, W._vx.update(e), W._vy.update(t), o ? z || (z = requestAnimationFrame(We)) : We();
		}, Ke = function(e, t) {
			he && !Ce && (W.axis = Ce = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), Ce !== "y" && (Re[2] += e, W._vx.update(e, !0)), Ce !== "x" && (ze[2] += t, W._vy.update(t, !0)), o ? z || (z = requestAnimationFrame(We)) : We();
		}, qe = function(e) {
			if (!He(e, 1)) {
				e = Ae(e, s);
				var t = e.clientX, r = e.clientY, i = t - W.x, a = r - W.y, o = W.isDragging;
				W.x = t, W.y = r, (o || (i || a) && (Math.abs(W.startX - t) >= n || Math.abs(W.startY - r) >= n)) && (ve || (ve = o ? 2 : 1), o || (W.isDragging = !0), Ke(i, a));
			}
		}, Je = W.onPress = function(e) {
			He(e, 1) || e && e.button || (W.axis = Ce = null, _e.pause(), W.isPressed = !0, e = Ae(e), G = Pe = 0, W.startX = W.x = e.clientX, W.startY = W.y = e.clientY, W._vx.reset(), W._vy.reset(), H(A ? i : X, fe[1], qe, K, !0), W.deltaX = W.deltaY = 0, g && g(W));
		}, Ye = W.onRelease = function(e) {
			if (!He(e, 1)) {
				U(A ? i : X, fe[1], qe, !0);
				var t = !isNaN(W.y - W.startY), n = W.isDragging, r = n && (Math.abs(W.x - W.startX) > 3 || Math.abs(W.y - W.startY) > 3), a = Ae(e);
				!r && t && (W._vx.reset(), W._vy.reset(), s && me && M.delayedCall(.08, function() {
					if (B() - Be > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (X.createEvent) {
							var t = X.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, N, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), W.isDragging = W.isGesturing = W.isPressed = !1, c && n && !A && _e.restart(!0), ve && We(), m && n && m(W), _ && _(W, r);
			}
		}, Xe = function(e) {
			return e.touches && e.touches.length > 1 && (W.isGesturing = !0) && te(e, W.isDragging);
		}, Ze = function() {
			return (W.isGesturing = !1) || ne(W);
		}, Qe = function(e) {
			if (!He(e)) {
				var t = q(), n = Fe();
				Ge((t - J) * oe, (n - Y) * oe, 1), J = t, Y = n, c && _e.restart(!0);
			}
		}, $e = function(e) {
			if (!He(e)) {
				e = Ae(e, s), j && (be = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? N.innerHeight : 1) * d;
				Ge(e.deltaX * t, e.deltaY * t, 0), c && !A && _e.restart(!0);
			}
		}, et = function(e) {
			if (!He(e)) {
				var t = e.clientX, n = e.clientY, r = t - W.x, i = n - W.y;
				W.x = t, W.y = n, V = !0, c && _e.restart(!0), (r || i) && Ke(r, i);
			}
		}, tt = function(e) {
			W.event = e, D(W);
		}, nt = function(e) {
			W.event = e, O(W);
		}, rt = function(e) {
			return He(e) || Ae(e, s) && ae(W);
		};
		_e = W._dc = M.delayedCall(l || .25, Ue).pause(), W.deltaX = W.deltaY = 0, W._vx = ke(0, 50, !0), W._vy = ke(0, 50, !0), W.scrollX = q, W.scrollY = Fe, W.isDragging = W.isGesturing = W.isPressed = !1, pe(this), W.enable = function(e) {
			return W.isEnabled || (H(Le ? X : i, "scroll", Se), r.indexOf("scroll") >= 0 && H(Le ? X : i, "scroll", Qe, K, L), r.indexOf("wheel") >= 0 && H(i, "wheel", $e, K, L), (r.indexOf("touch") >= 0 && le || r.indexOf("pointer") >= 0) && (H(i, fe[0], Je, K, L), H(X, fe[2], Ye), H(X, fe[3], Ye), me && H(i, "click", Ve, !0, !0), ae && H(i, "click", rt), te && H(X, "gesturestart", Xe), ne && H(X, "gestureend", Ze), D && H(i, ue + "enter", tt), O && H(i, ue + "leave", nt), ee && H(i, ue + "move", et)), W.isEnabled = !0, W.isDragging = W.isGesturing = W.isPressed = V = ve = !1, W._vx.reset(), W._vy.reset(), J = q(), Y = Fe(), e && e.type && Je(e), re && re(W)), W;
		}, W.disable = function() {
			W.isEnabled && (ge.filter(function(e) {
				return e !== W && ye(e.target);
			}).length || U(Le ? X : i, "scroll", Se), W.isPressed && (W._vx.reset(), W._vy.reset(), U(A ? i : X, fe[1], qe, !0)), U(Le ? X : i, "scroll", Qe, L), U(i, "wheel", $e, L), U(i, fe[0], Je, L), U(X, fe[2], Ye), U(X, fe[3], Ye), U(i, "click", Ve, !0), U(i, "click", rt), U(X, "gesturestart", Xe), U(X, "gestureend", Ze), U(i, ue + "enter", tt), U(i, ue + "leave", nt), U(i, ue + "move", et), W.isEnabled = W.isPressed = W.isDragging = !1, ie && ie(W));
		}, W.kill = W.revert = function() {
			W.disable();
			var e = ge.indexOf(W);
			e >= 0 && ge.splice(e, 1), de === W && (de = 0);
		}, ge.push(W), A && ye(i) && (de = W), W.enable(f);
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
W.version = "3.15.0", W.create = function(e) {
	return new W(e);
}, W.register = Ne, W.getAll = function() {
	return ge.slice();
}, W.getById = function(e) {
	return ge.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, me() && M.registerPlugin(W);
//#endregion
//#region ../../../Users/philipp/Sites/FW/interactions.js/node_modules/gsap/ScrollTrigger.js
var G, Pe, K, q, Fe, J, Y, Ie, Le, X, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct = 1, lt = Date.now, ut = lt(), dt = 0, ft = 0, pt = function(e, t, n) {
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
	return G || bt() && (G = window.gsap) && G.registerPlugin && G;
}, St = function(e) {
	return !!~Y.indexOf(e);
}, Ct = function(e) {
	return (e === "Height" ? it : K["inner" + e]) || Fe["client" + e] || J["client" + e];
}, wt = function(e) {
	return V(e, "getBoundingClientRect") || (St(e) ? function() {
		return Xn.width = K.innerWidth, Xn.height = it, Xn;
	} : function() {
		return $t(e);
	});
}, Tt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = V(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Ct(i) : e["client" + i]) || 0;
	};
}, Et = function(e, t) {
	return !t || ~z.indexOf(e) ? wt(e) : function() {
		return Xn;
	};
}, Dt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = V(e, n)) ? a() - wt(e)()[i] : St(e) ? (Fe[n] || J[n]) - Ct(r) : e[n] - e["offset" + r]);
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
}, Ft = Math.abs, It = "left", Lt = "top", Rt = "right", zt = "bottom", Bt = "width", Vt = "height", Ht = "Right", Ut = "Left", Wt = "Top", Gt = "Bottom", Z = "padding", Kt = "margin", qt = "Width", Jt = "Height", Yt = "px", Xt = function(e) {
	return K.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Zt = function(e) {
	var t = Xt(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, Qt = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, $t = function(e, t) {
	var n = t && Xt(e)[He] !== "matrix(1, 0, 0, 1, 0, 0)" && G.to(e, {
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
}, en = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, tn = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, nn = function(e) {
	return function(t) {
		return G.utils.snap(tn(e), t);
	};
}, rn = function(e) {
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
}, an = function(e) {
	return function(t, n) {
		return rn(tn(e))(t, n.direction);
	};
}, on = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, sn = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, cn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, ln = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, un = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, dn = {
	toggleActions: "play",
	anticipatePin: 0
}, fn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, pn = function(e, t) {
	if (kt(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in fn ? fn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, mn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = q.createElement("div"), m = St(n) || V(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? J : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === Te ? Rt : zt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], hn(p, 0, r, _), p;
}, hn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + qt] = 1, i["border" + o + qt] = 0, i[n.p] = t + "px", G.set(e, i);
}, Q = [], gn = {}, _n, vn = function() {
	return lt() - dt > 34 && (_n || (_n = requestAnimationFrame(Vn)));
}, yn = function() {
	(!Xe || !Xe.isPressed || Xe.startX > J.clientWidth) && (R.cache++, Xe ? _n || (_n = requestAnimationFrame(Vn)) : Vn(), dt || Tn("scrollStart"), dt = lt());
}, bn = function() {
	$e = K.innerWidth, Qe = K.innerHeight;
}, xn = function(e) {
	R.cache++, (e === !0 || !Be && !Ye && !q.fullscreenElement && !q.webkitFullscreenElement && (!Ze || $e !== K.innerWidth || Math.abs(K.innerHeight - Qe) > K.innerHeight * .25)) && Ie.restart(!0);
}, Sn = {}, Cn = [], wn = function e() {
	return cn($, "scrollEnd", e) || Ln(!0);
}, Tn = function(e) {
	return Sn[e] && Sn[e].map(function(e) {
		return e();
	}) || Cn;
}, En = [], Dn = function(e) {
	for (var t = 0; t < En.length; t += 5) (!e || En[t + 4] && En[t + 4].query === e) && (En[t].style.cssText = En[t + 1], En[t].getBBox && En[t].setAttribute("transform", En[t + 2] || ""), En[t + 3].uncache = 1);
}, On = function() {
	return R.forEach(function(e) {
		return At(e) && ++e.cacheID && (e.rec = e());
	});
}, kn = function(e, t) {
	var n;
	for (Ue = 0; Ue < Q.length; Ue++) n = Q[Ue], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	at = !0, t && Dn(t), t || Tn("revert");
}, An = function(e, t) {
	R.cache++, (t || !jn) && R.forEach(function(e) {
		return At(e) && e.cacheID++ && (e.rec = 0);
	}), kt(e) && (K.history.scrollRestoration = nt = e);
}, jn, Mn = 0, Nn, Pn = function() {
	if (Nn !== Mn) {
		var e = Nn = Mn;
		requestAnimationFrame(function() {
			return e === Mn && Ln(!0);
		});
	}
}, Fn = function() {
	J.appendChild(rt), it = !Xe && rt.offsetHeight || K.innerHeight, J.removeChild(rt);
}, In = function(e) {
	return Le(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Ln = function(e, t) {
	if (Fe = q.documentElement, J = q.body, Y = [
		K,
		q,
		Fe,
		J
	], dt && !e && !at) {
		sn($, "scrollEnd", wn);
		return;
	}
	Fn(), jn = $.isRefreshing = !0, at || On();
	var n = Tn("refreshInit");
	qe && $.sort(), t || kn(), R.forEach(function(e) {
		At(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), at = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), ot = 1, In(!0), Q.forEach(function(e) {
		var t = Dt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), In(!1), ot = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), R.forEach(function(e) {
		At(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), An(nt, 1), Ie.pause(), Mn++, jn = 2, Vn(2), Q.forEach(function(e) {
		return At(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), jn = $.isRefreshing = !1, Tn("refresh");
}, Rn = 0, zn = 1, Bn, Vn = function(e) {
	if (e === 2 || !jn && !at) {
		$.isUpdating = !0, Bn && Bn.update(0);
		var t = Q.length, n = lt(), r = n - ut >= 50, i = t && Q[0].scroll();
		if (zn = Rn > i ? -1 : 1, jn || (Rn = i), r && (dt && !Ve && n - dt > 200 && (dt = 0, Tn("scrollEnd")), Re = ut, ut = n), zn < 0) {
			for (Ue = t; Ue-- > 0;) Q[Ue] && Q[Ue].update(0, r);
			zn = 1;
		} else for (Ue = 0; Ue < t; Ue++) Q[Ue] && Q[Ue].update(0, r);
		$.isUpdating = !1;
	}
	_n = 0;
}, Hn = [
	It,
	Lt,
	zt,
	Rt,
	Kt + Gt,
	Kt + Ht,
	Kt + Wt,
	Kt + Ut,
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
], Un = Hn.concat([
	Bt,
	Vt,
	"boxSizing",
	"max" + qt,
	"max" + Jt,
	"position",
	Kt,
	Z,
	Z + Wt,
	Z + Ht,
	Z + Gt,
	Z + Ut
]), Wn = function(e, t, n) {
	qn(n);
	var r = e._gsap;
	if (r.spacerIsNative) qn(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Gn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Hn.length, a = t.style, o = e.style, s; i--;) s = Hn[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[zt] = o[Rt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Bt] = en(e, we) + Yt, a[Vt] = en(e, Te) + Yt, a[Z] = o[Kt] = o[Lt] = o[It] = "0", qn(r), o[Bt] = o["max" + qt] = n[Bt], o[Vt] = o["max" + Jt] = n[Vt], o[Z] = n[Z], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Kn = /([A-Z])/g, qn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Kn, "-$1").toLowerCase());
	}
}, Jn = function(e) {
	for (var t = Un.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Un[i], n[Un[i]]);
	return r.t = e, r;
}, Yn = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Xn = {
	left: 0,
	top: 0
}, Zn = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	At(e) && (e = e(s)), kt(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? pn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), jt(e)) f && (e = G.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && hn(o, n, r, !0);
	else {
		At(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Ee(t, s) || J, y = $t(_) || {}, (!y || !y.left && !y.top) && Xt(_).display === "none" && (S = _.style.display, _.style.display = "block", y = $t(_), S ? _.style.display = S : _.style.removeProperty("display")), b = pn(v[0], y[r.d]), x = pn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && hn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, hn(a, C, r, w && C > 20 || !w && (u ? Math.max(J[h], Fe[h]) : a.parentNode[h]) <= C + 1), u && (c = $t(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Yt));
	}
	return f && _ && (h = $t(_), f.seek(d), g = $t(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, Qn = /(webkit|moz|length|cssText|inset)/i, $n = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === J) {
			for (a in e._stOrig = i.cssText, o = Xt(e), o) !+a && !Qn.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		G.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, er = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, tr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, G.set(e, r);
}, nr = function(e, t) {
	var n = Oe(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = er(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			R.cache++, t.tween && Vn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = G.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, sn(e, "wheel", n.wheelHandler), $.isTouch && sn(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		Pe || e.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), tt(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ft) {
			this.update = this.refresh = this.kill = vt;
			return;
		}
		t = Qt(kt(t) || jt(t) || t.nodeType ? { trigger: t } : t, dn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? we : Te, T = !l && l !== 0, E = Ee(t.scroller || K), D = G.core.getCache(E), O = St(E), ee = ("pinType" in t ? t.pinType : V(E, "pinType") || O && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = T && t.toggleActions.split(" "), te = "markers" in t ? t.markers : dn.markers, ne = O ? 0 : parseFloat(Xt(E)["border" + w.p2 + qt]) || 0, j = this, re = t.onRefreshInit && function() {
			return t.onRefreshInit(j);
		}, ie = Tt(E, O, w), ae = Et(E, O), oe = 0, M = 0, se = 0, N = Oe(E, w), P, F, ce, le, ue, I, L, de, fe, pe, me, he, ge, B, _e, ve, ye, H, U, be, xe, Se, Ce, De, ke, Ae, je, Me, Ne, W, Pe, Y, Ie, ze, He, We, Ge, Ke, Ye;
		if (j._startClamp = j._endClamp = !1, j._dir = w, m *= 45, j.scroller = E, j.scroll = x ? x.time.bind(x) : N, le = N(), j.vars = t, n = n || t.animation, "refreshPriority" in t && (qe = 1, t.refreshPriority === -9999 && (Bn = j)), D.tweenScroll = D.tweenScroll || {
			top: nr(E, Te),
			left: nr(E, we)
		}, j.tweenTo = P = D.tweenScroll[w.p], j.scrubDuration = function(e) {
			Ie = jt(e) && e, Ie ? Y ? Y.duration(e) : Y = G.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Ie,
				paused: !0,
				onComplete: function() {
					return h && h(j);
				}
			}) : (Y && Y.progress(1).kill(), Y = 0);
		}, n && (n.vars.lazy = !1, n._initted && !j.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), j.animation = n.pause(), n.scrollTrigger = j, j.scrubDuration(l), W = 0, o || (o = n.vars.id)), v && ((!Mt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in J.style && G.set(O ? [J, Fe] : E, { scrollBehavior: "auto" }), R.forEach(function(e) {
			return At(e) && e.target === (O ? q.scrollingElement || Fe : E) && (e.smooth = !1);
		}), ce = At(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? nn(n) : v.snapTo === "labelsDirectional" ? an(n) : v.directional === !1 ? G.utils.snap(v.snapTo) : function(e, t) {
			return rn(v.snapTo)(e, lt() - M < 500 ? 0 : t.direction);
		}, ze = v.duration || {
			min: .1,
			max: 2
		}, ze = Mt(ze) ? X(ze.min, ze.max) : X(ze, ze), He = G.delayedCall(v.delay || Ie / 2 || .1, function() {
			var e = N(), t = lt() - M < 500, r = P.tween;
			if ((t || Math.abs(j.getVelocity()) < 10) && !r && !Ve && oe !== e) {
				var i = (e - I) / B, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - Pe) / (lt() - Re) * 1e3 || 0, s = G.utils.clamp(-i, 1 - i, Ft(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = ce(c, j), jt(l) || (l = c), u = Math.max(0, Math.round(I + l * B)), e <= L && e >= I && u !== e) {
					if (r && !r._initted && r.data <= Ft(u - e)) return;
					v.inertia === !1 && (s = l - i), P(u, {
						duration: ze(Ft(Math.max(Ft(c - a), Ft(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Ft(u - e),
						onInterrupt: function() {
							return He.restart(!0) && p && Pt(j, p);
						},
						onComplete: function() {
							j.update(), oe = N(), n && !T && (Y ? Y.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), W = Pe = n && !T ? n.totalProgress() : j.progress, g && g(j), m && Pt(j, m);
						}
					}, e, s * B, u - e - s * B), f && Pt(j, f, P.tween);
				}
			} else j.isActive && oe !== e && He.restart(!0);
		}).pause()), o && (gn[o] = j), u = j.trigger = Ee(u || d !== !0 && d), Ye = u && u._gsap && u._gsap.stRevert, Ye && (Ye = Ye(j)), d = d === !0 ? u : Ee(d), kt(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Kt || (f = !f && d.parentNode && d.parentNode.style && Xt(d.parentNode).display === "flex" ? !1 : Z), j.pin = d, F = G.core.getCache(d), F.spacer ? _e = F.pinState : (b && (b = Ee(b), b && !b.nodeType && (b = b.current || b.nativeElement), F.spacerIsNative = !!b, b && (F.spacerState = Jn(b))), F.spacer = H = b || q.createElement("div"), H.classList.add("pin-spacer"), o && H.classList.add("pin-spacer-" + o), F.pinState = _e = Jn(d)), t.force3D !== !1 && G.set(d, { force3D: !0 }), j.spacer = H = F.spacer, Ne = Xt(d), De = Ne[f + w.os2], be = G.getProperty(d), xe = G.quickSetter(d, w.a, Yt), Gn(d, H, Ne), ye = Jn(d)), te) {
			he = Mt(te) ? Qt(te, un) : un, pe = mn("scroller-start", o, E, w, he, 0), me = mn("scroller-end", o, E, w, he, 0, pe), U = pe["offset" + w.op.d2];
			var Xe = Ee(V(E, "content") || E);
			de = this.markerStart = mn("start", o, Xe, w, he, U, 0, x), fe = this.markerEnd = mn("end", o, Xe, w, he, U, 0, x), x && (Ke = G.quickSetter([de, fe], w.a, Yt)), !ee && !(z.length && V(E, "fixedMarkers") === !0) && (Zt(O ? J : E), G.set([pe, me], { force3D: !0 }), Ae = G.quickSetter(pe, w.a, Yt), Me = G.quickSetter(me, w.a, Yt));
		}
		if (x) {
			var Ze = x.vars.onUpdate, Qe = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				j.update(0, 0, 1), Ze && Ze.apply(x, Qe || []);
			});
		}
		if (j.previous = function() {
			return Q[Q.indexOf(j) - 1];
		}, j.next = function() {
			return Q[Q.indexOf(j) + 1];
		}, j.revert = function(e, t) {
			if (!t) return j.kill(!0);
			var r = e !== !1 || !j.enabled, i = Be;
			r !== j.isReverted && (r && (We = Math.max(N(), j.scroll.rec || 0), se = j.progress, Ge = n && n.progress()), de && [
				de,
				fe,
				pe,
				me
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (Be = j, j.update(r)), d && (!y || !j.isActive) && (r ? Wn(d, H, _e) : Gn(d, H, Xt(d), ke)), r || j.update(r), Be = i, j.isReverted = r);
		}, j.refresh = function(r, i, a, o) {
			if (!((Be || !j.enabled) && !i)) {
				if (d && r && dt) {
					sn(e, "scrollEnd", wn);
					return;
				}
				!jn && re && re(j), Be = j, P.tween && !a && (P.tween.kill(), P.tween = 0), Y && Y.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), j.isReverted || j.revert(!0, !0), j._subPinOffset = !1;
				var s = ie(), l = ae(), m = x ? x.duration() : Dt(E, w), h = B <= .01 || !B, g = 0, _ = o || 0, v = Mt(a) ? a.end : t.end, b = t.endTrigger || u, S = Mt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = j.pinnedContainer = t.pinnedContainer && Ee(t.pinnedContainer, j), D = u && Math.max(0, Q.indexOf(j)) || 0, k = D, A, F, ce, he, R, z, V, U, xe, De, Ae, Me, Ne;
				for (te && Mt(a) && (Me = G.getProperty(pe, w.p), Ne = G.getProperty(me, w.p)); k-- > 0;) z = Q[k], z.end || z.refresh(0, 1) || (Be = j), V = z.pin, V && (V === u || V === d || V === C) && !z.isReverted && (De || (De = []), De.unshift(z), z.revert(!0, !0)), z !== Q[k] && (D--, k--);
				for (At(S) && (S = S(j)), S = pt(S, "start", j), I = Zn(S, u, s, w, N(), de, pe, j, l, ne, ee, m, x, j._startClamp && "_startClamp") || (d ? -.001 : 0), At(v) && (v = v(j)), kt(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (kt(S) ? S.split(" ")[0] : "") + v : (g = pn(v.substr(2), s), v = kt(S) ? S : (x ? G.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, I) : I) + g, b = u)), v = pt(v, "end", j), L = Math.max(I, Zn(v || (b ? "100% 0" : m), b, s, w, N() + g, fe, me, j, l, ne, ee, m, x, j._endClamp && "_endClamp")) || -.001, g = 0, k = D; k--;) z = Q[k] || {}, V = z.pin, V && z.start - z._pinPush <= I && !x && z.end > 0 && (A = z.end - (j._startClamp ? Math.max(0, z.start) : z.start), (V === u && z.start - z._pinPush < I || V === C) && isNaN(S) && (g += A * (1 - z.progress)), V === d && (_ += A));
				if (I += g, L += g, j._startClamp && (j._startClamp += g), j._endClamp && !jn && (j._endClamp = L || -.001, L = Math.min(L, Dt(E, w))), B = L - I || (I -= .01) && .001, h && (se = G.utils.clamp(0, 1, G.utils.normalize(I, L, We))), j._pinPush = _, de && g && (A = {}, A[w.a] = "+=" + g, C && (A[w.p] = "-=" + N()), G.set([de, fe], A)), d && !(ot && j.end >= Dt(E, w))) A = Xt(d), he = w === Te, ce = N(), Se = parseFloat(be(w.a)) + _, !m && L > 1 && (Ae = (O ? q.scrollingElement || Fe : E).style, Ae = {
					style: Ae,
					value: Ae["overflow" + w.a.toUpperCase()]
				}, O && Xt(J)["overflow" + w.a.toUpperCase()] !== "scroll" && (Ae.style["overflow" + w.a.toUpperCase()] = "scroll")), Gn(d, H, A), ye = Jn(d), F = $t(d, !0), U = ee && Oe(E, he ? we : Te)(), f ? (ke = [f + w.os2, B + _ + Yt], ke.t = H, k = f === Z ? en(d, w) + B + _ : 0, k && (ke.push(w.d, k + Yt), H.style.flexBasis !== "auto" && (H.style.flexBasis = k + Yt)), qn(ke), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ee && N(We)) : (k = en(d, w), k && H.style.flexBasis !== "auto" && (H.style.flexBasis = k + Yt)), ee && (R = {
					top: F.top + (he ? ce - I : U) + Yt,
					left: F.left + (he ? U : ce - I) + Yt,
					boxSizing: "border-box",
					position: "fixed"
				}, R[Bt] = R["max" + qt] = Math.ceil(F.width) + Yt, R[Vt] = R["max" + Jt] = Math.ceil(F.height) + Yt, R[Kt] = R[Kt + Wt] = R[Kt + Ht] = R[Kt + Gt] = R[Kt + Ut] = "0", R[Z] = A[Z], R[Z + Wt] = A[Z + Wt], R[Z + Ht] = A[Z + Ht], R[Z + Gt] = A[Z + Gt], R[Z + Ut] = A[Z + Ut], ve = Yn(_e, R, y), jn && N(0)), n ? (xe = n._initted, Je(1), n.render(n.duration(), !0, !0), Ce = be(w.a) - Se + B + _, je = Math.abs(B - Ce) > 1, ee && je && ve.splice(ve.length - 2, 2), n.render(0, !0, !0), xe || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Je(0)) : Ce = B, Ae && (Ae.value ? Ae.style["overflow" + w.a.toUpperCase()] = Ae.value : Ae.style.removeProperty("overflow-" + w.a));
				else if (u && N() && !x) for (F = u.parentNode; F && F !== J;) F._pinOffset && (I -= F._pinOffset, L -= F._pinOffset), F = F.parentNode;
				De && De.forEach(function(e) {
					return e.revert(!1, !0);
				}), j.start = I, j.end = L, le = ue = jn ? We : N(), !x && !jn && (le < We && N(We), j.scroll.rec = 0), j.revert(!1, !0), M = lt(), He && (oe = -1, He.restart(!0)), Be = 0, n && T && (n._initted || Ge) && n.progress() !== Ge && n.progress(Ge || 0, !0).render(n.time(), !0, !0), (h || se !== j.progress || x || p || n && !n._initted) && (n && !T && (n._initted || se || n.vars.immediateRender !== !1) && n.totalProgress(x && I < -.001 && !se ? G.utils.normalize(I, L, 0) : se, !0), j.progress = h || (le - I) / B === se ? 0 : se), d && f && (H._pinOffset = Math.round(j.progress * Ce)), Y && Y.invalidate(), isNaN(Me) || (Me -= G.getProperty(pe, w.p), Ne -= G.getProperty(me, w.p), tr(pe, w, Me), tr(de, w, Me - (o || 0)), tr(me, w, Ne), tr(fe, w, Ne - (o || 0))), h && !jn && j.update(), c && !jn && !ge && (ge = !0, c(j), ge = !1);
			}
		}, j.getVelocity = function() {
			return (N() - ue) / (lt() - Re) * 1e3 || 0;
		}, j.endAnimation = function() {
			Nt(j.callbackAnimation), n && (Y ? Y.progress(1) : n.paused() ? T || Nt(n, j.direction < 0, 1) : Nt(n, n.reversed()));
		}, j.labelToScroll = function(e) {
			return n && n.labels && (I || j.refresh() || I) + n.labels[e] / n.duration() * B || 0;
		}, j.getTrailing = function(e) {
			var t = Q.indexOf(j), n = j.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (kt(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return j.direction > 0 ? e.end <= I : e.start >= L;
			});
		}, j.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = jn === !0 ? We : j.scroll(), c = e ? 0 : (o - I) / B, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = j.progress, h, g, b, D, O, te, ne, re;
				if (t && (ue = le, le = x ? N() : o, v && (Pe = W, W = n && !T ? n.totalProgress() : u)), m && d && !Be && !ct && dt && (!u && I < o + (o - ue) / (lt() - Re) * m ? u = 1e-4 : u === 1 && L > o + (o - ue) / (lt() - Re) * m && (u = .9999)), u !== p && j.enabled) {
					if (h = j.isActive = !!u && u < 1, g = !!p && p < 1, te = h !== g, O = te || !!u != !!p, j.direction = u > p ? 1 : -1, j.progress = u, O && !Be && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !te && A[b + 1] !== "none" && A[b + 1] || A[b], re = n && (D === "complete" || D === "reset" || D in n))), C && (te || re) && (re || l || !n) && (At(C) ? C(j) : j.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (Y && !Be && !ct ? (Y._dp._time - Y._start !== Y._time && Y.render(Y._dp._time - Y._start), Y.resetTo ? Y.resetTo("totalProgress", u, n._tTime / n._tDur) : (Y.vars.totalProgress = u, Y.invalidate().restart())) : n && n.totalProgress(u, !!(Be && (M || e)))), d) {
						if (e && f && (H.style[f + w.os2] = De), !ee) xe(yt(Se + Ce * u));
						else if (O) {
							if (ne = !e && u > p && L + 1 > o && o + 1 >= Dt(E, w), y) if (!e && (h || ne)) {
								var ie = $t(d, !0), ae = o - I;
								$n(d, J, ie.top + (w === Te ? ae : 0) + Yt, ie.left + (w === Te ? 0 : ae) + Yt);
							} else $n(d, H);
							qn(h || ne ? ve : ye), je && u < 1 && h || xe(Se + (u === 1 && !ne ? Ce : 0));
						}
					}
					v && !P.tween && !Be && !ct && He.restart(!0), a && (te || _ && u && (u < 1 || !st)) && Le(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(j), O && !Be ? (T && (re && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(j)), (te || !st) && (s && te && Pt(j, s), k[b] && Pt(j, k[b]), _ && (u === 1 ? j.kill(!1, 1) : k[b] = 0), te || (b = u === 1 ? 1 : 3, k[b] && Pt(j, k[b]))), S && !h && Math.abs(j.getVelocity()) > (jt(S) ? S : 2500) && (Nt(j.callbackAnimation), Y ? Y.progress(1) : Nt(n, D === "reverse" ? 1 : !u, 1))) : T && i && !Be && i(j);
				}
				if (Me) {
					var oe = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					Ae(oe + +!!pe._isFlipped), Me(oe);
				}
				Ke && Ke(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, j.enable = function(t, n) {
			j.enabled || (j.enabled = !0, sn(E, "resize", xn), O || sn(E, "scroll", yn), re && sn(e, "refreshInit", re), t !== !1 && (j.progress = se = 0, le = ue = oe = N()), n !== !1 && j.refresh());
		}, j.getTween = function(e) {
			return e && P ? P.tween : Y;
		}, j.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			j.refresh(!1, !1, {
				start: mt(e, n && !!j._startClamp),
				end: mt(t, n && !!j._endClamp)
			}, r), j.update();
		}, j.adjustPinSpacing = function(e) {
			if (ke && e) {
				var t = ke.indexOf(w.d) + 1;
				ke[t] = parseFloat(ke[t]) + e + Yt, ke[1] = parseFloat(ke[1]) + e + Yt, qn(ke);
			}
		}, j.disable = function(t, n) {
			if (t !== !1 && j.revert(!0, !0), j.enabled && (j.enabled = j.isActive = !1, n || Y && Y.pause(), We = 0, F && (F.uncache = 1), re && cn(e, "refreshInit", re), He && (He.pause(), P.tween && P.tween.kill() && (P.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== j) return;
				cn(E, "resize", xn), O || cn(E, "scroll", yn);
			}
		}, j.kill = function(e, r) {
			j.disable(e, r), Y && !r && Y.kill(), o && delete gn[o];
			var i = Q.indexOf(j);
			i >= 0 && Q.splice(i, 1), i === Ue && zn > 0 && Ue--, i = 0, Q.forEach(function(e) {
				return e.scroller === j.scroller && (i = 1);
			}), i || jn || (j.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), de && [
				de,
				fe,
				pe,
				me
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Bn === j && (Bn = 0), d && (F && (F.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (F.spacer = 0)), t.onKill && t.onKill(j);
		}, Q.push(j), j.enable(!1, !1), Ye && Ye(j), n && n.add && !B) {
			var $e = j.update;
			j.update = function() {
				j.update = $e, R.cache++, I || L || j.refresh();
			}, G.delayedCall(.01, j.update), B = .01, I = L = 0;
		} else j.refresh();
		d && Pn();
	}, e.register = function(t) {
		return Pe || (G = t || xt(), bt() && window.document && e.enable(), Pe = ft), Pe;
	}, e.defaults = function(e) {
		if (e) for (var t in e) dn[t] = e[t];
		return dn;
	}, e.disable = function(e, t) {
		ft = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), cn(K, "wheel", yn), cn(q, "scroll", yn), clearInterval(ze), cn(q, "touchcancel", vt), cn(J, "touchstart", vt), on(cn, q, "pointerdown,touchstart,mousedown", gt), on(cn, q, "pointerup,touchend,mouseup", _t), Ie.kill(), Ot(cn);
		for (var n = 0; n < R.length; n += 3) ln(cn, R[n], R[n + 1]), ln(cn, R[n], R[n + 2]);
	}, e.enable = function() {
		if (K = window, q = document, Fe = q.documentElement, J = q.body, G) if (Le = G.utils.toArray, X = G.utils.clamp, tt = G.core.context || vt, Je = G.core.suppressOverwrites || vt, nt = K.history.scrollRestoration || "auto", Rn = K.pageYOffset || 0, G.core.globals("ScrollTrigger", e), J) {
			ft = 1, rt = document.createElement("div"), rt.style.height = "100vh", rt.style.position = "absolute", Fn(), ht(), W.register(G), e.isTouch = W.isTouch, et = W.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ze = W.isTouch === 1, sn(K, "wheel", yn), Y = [
				K,
				q,
				Fe,
				J
			], G.matchMedia ? (e.matchMedia = function(e) {
				var t = G.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, G.addEventListener("matchMediaInit", function() {
				On(), kn();
			}), G.addEventListener("matchMediaRevert", function() {
				return Dn();
			}), G.addEventListener("matchMedia", function() {
				Ln(0, 1), Tn("matchMedia");
			}), G.matchMedia().add("(orientation: portrait)", function() {
				return bn(), bn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), bn(), sn(q, "scroll", yn);
			var t = J.hasAttribute("style"), n = J.style, r = n.borderTopStyle, i = G.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = $t(J), Te.m = Math.round(a.top + Te.sc()) || 0, we.m = Math.round(a.left + we.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (J.setAttribute("style", ""), J.removeAttribute("style")), ze = setInterval(vn, 250), G.delayedCall(.5, function() {
				return ct = 0;
			}), sn(q, "touchcancel", vt), sn(J, "touchstart", vt), on(sn, q, "pointerdown,touchstart,mousedown", gt), on(sn, q, "pointerup,touchend,mouseup", _t), He = G.utils.checkPrefix("transform"), Un.push(He), Pe = lt(), Ie = G.delayedCall(.2, Ln).pause(), Ke = [
				q,
				"visibilitychange",
				function() {
					var e = K.innerWidth, t = K.innerHeight;
					q.hidden ? (We = e, Ge = t) : (We !== e || Ge !== t) && xn();
				},
				q,
				"DOMContentLoaded",
				Ln,
				K,
				"load",
				Ln,
				K,
				"resize",
				xn
			], Ot(sn), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < R.length; o += 3) ln(cn, R[o], R[o + 1]), ln(cn, R[o], R[o + 2]);
		} else q && q.addEventListener("DOMContentLoaded", function t() {
			e.enable(), q.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (st = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(ze) || (ze = n) && setInterval(vn, n), "ignoreMobileResize" in t && (Ze = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ot(cn) || Ot(sn, t.autoRefreshEvents || "none"), Ye = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Ee(e), r = R.indexOf(n), i = St(n);
		~r && R.splice(r, i ? 6 : 2), t && (i ? z.unshift(K, t, J, t, Fe, t) : z.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (kt(e) ? Ee(e) : e).getBoundingClientRect(), i = r[n ? Bt : Vt] * t || 0;
		return n ? r.right - i > 0 && r.left + i < K.innerWidth : r.bottom - i > 0 && r.top + i < K.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		kt(e) && (e = Ee(e));
		var r = e.getBoundingClientRect(), i = r[n ? Bt : Vt], a = t == null ? i / 2 : t in fn ? fn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / K.innerWidth : (r.top + a) / K.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = Sn.killAll || [];
			Sn = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? Le(e).forEach(function(e) {
		if (e && e.style) {
			var t = En.indexOf(e);
			t >= 0 && En.splice(t, 5), En.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), G.core.getCache(e), tt());
		}
	}) : En;
}, $.revert = function(e, t) {
	return kn(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? xn(!0) : (Pe || $.register()) && Ln(!0);
}, $.update = function(e) {
	return ++R.cache && Vn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = An, $.maxScroll = function(e, t) {
	return Dt(e, t ? we : Te);
}, $.getScrollFunc = function(e, t) {
	return Oe(Ee(e), t ? we : Te);
}, $.getById = function(e) {
	return gn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!dt;
}, $.snapDirectional = rn, $.addEventListener = function(e, t) {
	var n = Sn[e] || (Sn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = Sn[e], r = n && n.indexOf(t);
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
	return At(a) && (a = a(), sn($, "refresh", function() {
		return a = t.batchMax();
	})), Le(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var rr = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, ir = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (W.isTouch ? " pinch-zoom" : "") : "none", t === Fe && e(J, n);
}, ar = {
	auto: 1,
	scroll: 1
}, or = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || G.core.getCache(i), o = lt(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== J && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(ar[(s = Xt(i)).overflowY] || ar[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !St(i) && (ar[(s = Xt(i)).overflowY] || ar[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, sr = function(e, t, n, r) {
	return W.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && or,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && sn(q, W.eventTypes[0], ur, !1, !0);
		},
		onDisable: function() {
			return cn(q, W.eventTypes[0], ur, !0);
		}
	});
}, cr = /(input|label|select|textarea)/i, lr, ur = function(e) {
	var t = cr.test(e.target.tagName);
	(t || lr) && (e._gsapAllow = !0, lr = t);
}, dr = function(e) {
	Mt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Ee(e.target) || Fe, l = G.core.globals().ScrollSmoother, u = l && l.get(), d = et && (e.content && Ee(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Oe(c, Te), p = Oe(c, we), m = 1, h = (W.isTouch && K.visualViewport ? K.visualViewport.scale * K.visualViewport.width : K.outerWidth) / K.innerWidth, g = 0, _ = At(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = sr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = vt, C = vt, w = function() {
		s = Dt(c, Te), C = X(+!!et, s), n && (S = X(0, Dt(c, we))), v = Mn;
	}, T = function() {
		d._gsap.y = yt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = yt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = yt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = R.cache, Vn();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, ee, k, A = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && G.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return et && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = yt((K.visualViewport && K.visualViewport.scale || 1) / h), D.pause(), e !== m && ir(c, m > 1.01 || !n && "x"), O = p(), ee = f(), w(), v = Mn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) k.restart(!0);
		else {
			R.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= rr(p, i, o, Dt(c, we)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= rr(f, i, o, Dt(c, Te)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (et && D.vars.scrollY >= s || i >= s - 1) && G.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), lt() - g > 1e3 && (v = 0, g = lt());
	}, e.onChange = function(e, t, r, i, a) {
		if (Mn !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? ee + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (ee += c - s), f(c);
		}
		(r || t) && Vn();
	}, e.onEnable = function() {
		ir(c, !n && "x"), $.addEventListener("refresh", A), sn(K, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		ir(c, !0), cn(K, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new W(e), o.iOS = et, et && !f() && f(1), et && G.ticker.add(vt), k = o._dc, D = G.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: er(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: Vn,
		onComplete: k.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (At(e)) return Q.sort(e);
	var t = K.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + K.innerHeight;
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
	var t = e instanceof W ? e : dr(e);
	return Xe && Xe.target === t.target && Xe.kill(), St(t.target) && (Xe = t), t;
}, $.core = {
	_getVelocityProp: ke,
	_inputObserver: sr,
	_scrollers: R,
	_proxies: z,
	bridge: {
		ss: function() {
			dt || Tn("scrollStart"), dt = lt();
		},
		ref: function() {
			return Be;
		}
	}
}, xt() && G.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var fr = "h1, h2, h3, h4, h5, h6, p", pr = [
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
].join(", "), mr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", hr = "data-reveal-pending", gr = "data-reveal-ready", _r = {
	y: 12,
	opacity: 0
}, vr = {
	y: 0,
	opacity: 1,
	duration: .8,
	ease: "power2.out"
}, yr = !1;
function br() {
	return /(?:^|\/)news(?:\/|$)/i.test(window.location.pathname);
}
function xr(e) {
	var t;
	return e.closest(pr) || e.closest("[hidden]") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function Sr(e) {
	if (e.closest(mr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function Cr(e) {
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
function wr(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.element.style.opacity = e.played ? "1" : e.originalOpacity, e.element.style.transform = e.originalTransform, e.trigger = void 0, e.timeline = void 0;
}
function Tr(e) {
	return e.signature = Cr(e.element), e.element.removeAttribute(hr), e.element.setAttribute(gr, ""), [e.element];
}
function Er(e) {
	let t = Tr(e);
	if (!t.length || e.played) return;
	let n = b.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0;
		}
	});
	n.fromTo(t, _r, vr), e.timeline = n, e.trigger = $.create({
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
function Dr(e, t) {
	e.forEach((e, n) => {
		let r = Tr(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, _r, vr, .6 + n * .12 + i);
	});
}
function Or() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function kr(e = document) {
	var t;
	if (yr || br() || u()) return;
	let n = o(fr, e).filter(xr);
	if (!n.length) return;
	yr = !0, b.registerPlugin($);
	let r = n.map((e) => ({
		element: e,
		hero: Sr(e),
		played: !1,
		signature: "",
		originalOpacity: e.style.opacity,
		originalTransform: e.style.transform
	}));
	r.forEach(({ element: e }) => e.setAttribute(hr, ""));
	let i, a, s = 0, c = !1, l = !1, d = () => {
		c && (i && i.progress() > 0 && (l = !0, r.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), r.forEach(wr), i = b.timeline({ paused: !0 }), Dr(r.filter((e) => e.hero && e.element.isConnected), i), r.filter((e) => !e.hero && e.element.isConnected).forEach(Er), !l && i.duration() > 0 && (i.call(() => {
			l = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, f = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, r.some((e) => e.element.isConnected && Cr(e.element) !== e.signature) && d();
		}));
	};
	Promise.all([Or(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		c = !0, d(), a = new ResizeObserver(f), r.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", f, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", d);
	}), window.addEventListener("pagehide", () => {
		var e;
		window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), r.forEach(wr), window.removeEventListener("resize", f), (e = document.fonts) == null || e.removeEventListener("loadingdone", d), r.forEach(({ element: e }) => e.removeAttribute(hr));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var Ar = "[data-lightbox-src]", jr = "js-lightbox", Mr = `.${jr}`, Nr = `${Ar}, ${Mr}`, Pr = "[data-site-lightbox]", Fr = "[data-lightbox-close]", Ir = "[data-lightbox-prev]", Lr = "[data-lightbox-next]", Rr = "[data-lightbox-auto-icon]", zr = "site-lightbox-trigger", Br = "site-lightbox-trigger__image", Vr = "site-lightbox-trigger__icon", Hr = "w-dyn-bind-empty", Ur = "/plugins/Basic/assets/placeholder.", Wr = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Gr = !1, Kr = null, qr = null, Jr = [], Yr = 0, Xr = !1, Zr = null;
function Qr(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return $r(e);
	let n = s("img", e);
	return n ? $r(n) : "";
}
function $r(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(Hr) || t.includes(Ur) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function ei(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function ti(e) {
	let t = Qr(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		alt: ei(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function ni(e) {
	let t = ti(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(Nr).filter((e) => r(e, "data-lightbox-group") === t.group).map(ti).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function ri() {
	let e = document.createElement("span");
	return e.className = Vr, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = Wr, e;
}
function ii(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function ai(e) {
	if (!ii(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = Kr == null ? void 0 : Kr.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function oi(e) {
	if (e.closest(`.${zr}`) || !Qr(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${zr} ${jr}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(jr), e.classList.add(Br), e.before(t), t.append(e, ri()), ai(t);
}
function si(e) {
	if (e instanceof HTMLImageElement) {
		oi(e);
		return;
	}
	Qr(e).trim() && (e.classList.add(zr), ai(e), s(Rr, e) || e.append(ri()));
}
function ci() {
	o(Mr).forEach(si);
}
function li(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function ui() {
	var e, t, n, r, i, a;
	if (qr) return di(qr), qr;
	let o = s(Pr), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = Kr == null ? void 0 : Kr.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = li((l = Kr == null ? void 0 : Kr.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = li((u = Kr == null ? void 0 : Kr.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = li((d = Kr == null ? void 0 : Kr.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = s(Fr, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(Ir, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(Lr, c)) == null ? document.createElement("button") : a
	};
	return qr = f, di(f), !o && !document.body.contains(c) && document.body.append(c), f;
}
function di(e) {
	var t, n, r, i;
	let a = (t = Kr == null ? void 0 : Kr.t("close", "Close")) == null ? "Close" : t, o = (n = Kr == null ? void 0 : Kr.t("previous", "Previous")) == null ? "Previous" : n, s = (r = Kr == null ? void 0 : Kr.t("next", "Next")) == null ? "Next" : r, c = (i = Kr == null ? void 0 : Kr.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function fi() {
	let e = ui(), t = Jr[Yr];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0;
	let n = Jr.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(Yr), e.root.dataset.lightboxCount = String(Jr.length);
}
function pi(e) {
	let t = ui();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function mi(e) {
	Jr.length < 2 || (Yr = (e + Jr.length) % Jr.length, fi());
}
function hi() {
	mi(Yr + 1);
}
function gi() {
	mi(Yr - 1);
}
function _i(e) {
	var t;
	let n = ni(e);
	if (!n) return;
	let r = Xr;
	Jr = n.items, Yr = n.index, Zr = e, Xr = !0, fi(), pi(!0), r || p();
	let i = ui();
	m(i.closeButton || i.root);
	let a = Jr[Yr];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: Yr,
		count: Jr.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function vi() {
	var t;
	if (!Xr || !qr) return;
	let r = qr, i = Zr, a = (t = Jr[Yr]) == null ? null : t;
	pi(!1), n(), Xr = !1, Jr = [], Yr = 0, Zr = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function yi(e) {
	if (!(!Xr || !qr)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), vi();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), hi();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), gi();
			return;
		}
		y(qr.root, e);
	}
}
function bi(e) {
	!Xr || !qr || e.target === qr.root && vi();
}
function xi(e) {
	return Kr = e.i18n, ci(), Gr || (g(document, "click", Nr, (e, t) => {
		e.preventDefault(), _i(t);
	}), g(document, "keydown", Mr, (e, t) => {
		ii(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), _i(t));
	}), g(document, "click", Fr, (e) => {
		e.preventDefault(), vi();
	}), g(document, "click", Ir, (e) => {
		e.preventDefault(), gi();
	}), g(document, "click", Lr, (e) => {
		e.preventDefault(), hi();
	}), document.addEventListener("click", bi), document.addEventListener("keydown", yi, !0), Gr = !0), {
		openLightbox: _i,
		closeLightbox: vi
	};
}
//#endregion
//#region src/modules/modal.ts
var Si = "[data-modal]", Ci = "[data-modal-content]", wi = "[data-modal-open]", Ti = "[data-modal-close]", Ei = "a[href^=\"#modal:\"]", Di = "#modal:", Oi = 460, ki = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Ai = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", ji = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Mi = !1, Ni = !0, Pi = null, Fi = null, Ii = "", Li = null, Ri = null, zi = /* @__PURE__ */ new Map();
function Bi(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Di) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Vi() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Ti),
		imageLink: e.querySelector(".fwm-modal__image-link"),
		image: e.querySelector(".fwm-modal__image"),
		lightboxIcon: e.querySelector(".fwm-modal__lightbox-icon"),
		caption: e.querySelector("[data-site-modal-caption]"),
		headline: e.querySelector("[data-site-modal-headline]"),
		text: e.querySelector("[data-site-modal-text]"),
		work: e.querySelector("[data-site-modal-work]"),
		gallery: e.querySelector("[data-site-modal-gallery]")
	};
	return t.closeButton.innerHTML = ki, t.lightboxIcon.innerHTML = Ai, Ui(t), t;
}
function Hi() {
	return (!Fi || !document.body.contains(Fi.root)) && (Fi = Vi()), Ui(Fi), Fi;
}
function Ui(e) {
	var t, n;
	let r = (t = Pi == null ? void 0 : Pi.t("close", "Close")) == null ? "Close" : t, i = (n = Pi == null ? void 0 : Pi.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function Wi(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function Gi(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f;
	let p = e.querySelector("[data-modal-work]");
	if (!p) return null;
	let m = Wi(p, "[data-works-thumbnail]"), h = (t = (n = (r = p.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = p.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, g = (a = (o = (s = p.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = p.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, _ = (l = (u = (d = p.getAttribute("data-works-href")) == null ? p.getAttribute("data-works-url") : d) == null ? (f = p.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, v = x(m);
	return !h && !v && !_ ? null : {
		title: h,
		year: g,
		thumbnail: v,
		thumbnailAlt: (m == null ? void 0 : m.alt) || h,
		href: _
	};
}
function Ki(e) {
	var t, n, r;
	let i = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i;
		let a = (t = Wi(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: x(a),
			alt: (n = a == null ? void 0 : a.alt) == null ? "" : n,
			caption: (r = (i = e.querySelector("[data-modal-gallery-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
		};
	}).filter((e) => e.src);
	if (i.length > 0) return i;
	let a = Wi(e, "[data-modal-image]"), s = x(a);
	return s ? [{
		src: s,
		alt: (t = a == null ? void 0 : a.alt) == null ? "" : t,
		caption: (n = (r = e.querySelector("[data-modal-caption]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? "" : n
	}] : [];
}
function qi(e) {
	var t, n, i, a, o, s, c, l;
	let u = r(e, "data-modal-content");
	if (!u) return null;
	let d = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", f = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, p = Ki(e), m = p[0], h = e.querySelector("[data-modal-body]");
	return {
		id: u,
		address: d,
		layout: e.getAttribute("data-modal-layout") === "context" ? "context" : "default",
		headline: f,
		image: (o = m == null ? void 0 : m.src) == null ? "" : o,
		imageAlt: (s = m == null ? void 0 : m.alt) == null ? "" : s,
		caption: (c = m == null ? void 0 : m.caption) == null ? "" : c,
		html: (l = h == null ? void 0 : h.innerHTML) == null ? "" : l,
		work: Gi(e),
		gallery: p
	};
}
function Ji(e) {
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
function Yi() {
	o(Ci).forEach((e) => {
		let t = qi(e);
		t && zi.set(t.id, t);
	}), o(Si).forEach((e) => {
		let t = Ji(e);
		t && zi.set(t.id, t), e.remove();
	});
}
function Xi(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(Ci).find((e) => r(e, "data-modal-content") === n), a = i ? qi(i) : null;
	return a && zi.set(n, a), (t = a == null ? zi.get(n) : a) == null ? null : t;
}
function Zi(e) {
	try {
		let t = new URL(e, document.baseURI).pathname.match(/^\/werke\/([^/]+)\/?$/);
		if (!t) return e;
		let n = new URL("/werk-ueberblick", document.baseURI);
		return n.searchParams.set("work", decodeURIComponent(t[1])), n.hash = "werke", `${n.pathname}${n.search}${n.hash}`;
	} catch (t) {
		return e;
	}
}
function Qi(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", Zi(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.src = e.thumbnail, t.alt = e.thumbnailAlt, t.loading = "lazy", t.decoding = "async", a.className = "fwm-modal__work-image-wrap", a.append(t), i.append(a);
	}
	if (s.className = "fwm-modal__work-meta", c.className = "fwm-modal__work-title", c.textContent = e.title, e.title && s.append(c), e.year) {
		let t = document.createElement("span");
		t.className = "fwm-modal__work-year", t.textContent = e.year, s.append(t);
	}
	if (o.className = "fwm-modal__work-footer", o.append(s), r) {
		let e = document.createElement("span");
		e.className = "fwm-modal__work-icon", e.innerHTML = ji, o.append(e);
	}
	return i.append(o), i;
}
function $i(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.src = e.src, r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Ai, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function ea(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0;
}
function ta(e, t) {
	e.innerHTML = t, e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function na(e, t) {
	var n, r;
	let i = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !i, e.imageLink.href = i ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", i ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), e.image.src = i ? t.image : "", e.image.alt = t.imageAlt, e.caption.textContent = t.caption, ta(e.text, t.html), ea(e);
	let a = (n = (r = t.gallery) == null ? void 0 : r.slice(1).filter((e) => e.src)) == null ? [] : n;
	e.gallery.hidden = a.length === 0, a.forEach((t, n) => e.gallery.append($i(t, n)));
}
function ra(e, t) {
	var n, r;
	let i = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, ta(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = i.length === 0, t.work && e.work.append(Qi(t.work)), i.forEach((t, n) => {
		e.gallery.append($i(t, n));
	});
}
function ia(e) {
	let t = Hi();
	return e.layout === "context" ? ra(t, e) : na(t, e), t;
}
function aa(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function oa(e) {
	Ri !== null && (window.clearTimeout(Ri), Ri = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function sa(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Ri = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Ri = null;
	}, u() ? 0 : Oi), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function ca(e, t) {
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
	Ii && ua(), zi.set(g.id, g), Li = t == null ? c() : t, Ii = g.id;
	let _ = ia(g);
	oa(_), p(), aa(_), d(_.root, "site:modal-open", {
		id: Ii,
		modal: _.root,
		content: g,
		trigger: t == null ? null : t
	});
}
function la(e, t) {
	let n = Xi(e);
	n && ca(n, t);
}
function ua() {
	if (!Ii || !Fi) return;
	let t = Ii, r = Li;
	sa(Fi), n(), Ii = "", Li = null, d(Fi.root, "site:modal-close", {
		id: t,
		modal: Fi.root
	}), e(r);
}
function da(e) {
	if (!(!Ii || !Fi) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), ua();
			return;
		}
		y(Fi.panel, e);
	}
}
function fa(e) {
	if (!Ni || !Ii || !Fi) return;
	let t = e.target;
	!i(t) || t !== Fi.root || ua();
}
function pa(e) {
	var n;
	return Ni = (n = e.closeOnBackdrop) == null || n, Pi = e.i18n, Yi(), Hi(), Mi || (g(document, "click", wi, (e, n) => {
		e.preventDefault(), la(t(n, "data-modal-open"), n);
	}), g(document, "click", Ei, (e, t) => {
		e.preventDefault(), la(Bi(t), t);
	}), g(document, "click", Ti, (e, t) => {
		Fi != null && Fi.root.contains(t) && (e.preventDefault(), ua());
	}), document.addEventListener("click", fa), document.addEventListener("keydown", da), Mi = !0), {
		openModal: la,
		openContentModal: ca,
		closeModal: ua
	};
}
//#endregion
//#region src/modules/site-menu.ts
var ma = "[data-site-menu]", ha = "[data-site-menu-panel]", ga = "[data-site-menu-toggle]", _a = "[data-site-menu-toggle-label]", va = "[data-site-menu-toggle-label-text]", ya = "[data-site-menu-toggle-label-ghost]", ba = "data-site-menu-toggle-label-text", xa = "data-site-menu-toggle-label-ghost", Sa = "[data-site-menu-link]", Ca = "[data-site-menu-indicator]", wa = "is-active", Ta = "is-open", Ea = "is-ready", Da = "data-site-menu-open-label", Oa = "data-site-menu-closed-label", ka = "data-site-menu-current-key", Aa = "data-site-menu-label", ja = "data-site-menu-key", Ma = "data-site-menu-original-tabindex", Na = "CLOSE", Pa = "MENU", Fa = .42, Ia = [], La = !1;
function Ra(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function za(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Ra(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Ba(e, t) {
	return t ? r(e, ja) === t : !1;
}
function Va(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Ba(e, r(t, ka) || ((n = document.documentElement.getAttribute(ka)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(ka)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = za(e);
	return a ? a === Ra(window.location.pathname) : !1;
}
function Ha(e) {
	var t, n;
	return r(e, Aa) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function Ua(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(wa) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Va(t, e.root)) : t;
	return n ? Ha(n) : "";
}
function Wa(e) {
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
			Ua(e),
			r(e.root, Oa) || Pa,
			r(e.root, Da) || Na
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
function Ga(e) {
	var t, n;
	let r = s(va, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(ba, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function Ka(e) {
	o(ya, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function qa(e, t = !0) {
	var n, i;
	let a = r(e.root, Da) || Na, o = r(e.root, Oa) || Pa, s = Ua(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = Ga(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), Ka(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(xa, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: Fa,
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
function Ja(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Ma);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Ma) && e.hasAttribute("tabindex") && e.setAttribute(Ma, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function Ya(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Ta, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), Ja(e, t), qa(e, n);
}
function Xa(e, t, n) {
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
function Za(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	Ya(e, !0), Xa(e, !0, t);
}
function Qa(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return Ya(e, !1), Xa(e, !1, t);
}
function $a(e) {
	let t = s(ha, e);
	if (t) return b.killTweensOf(t), b.to(t, {
		height: 0,
		duration: .4,
		ease: "power2.inOut"
	});
}
function eo(e) {
	e.isOpen ? Qa(e) : Za(e);
}
function to(e) {
	e.links.forEach((t) => {
		let n = Va(t, e.root), r = s(Ca, t);
		t.classList.toggle(wa, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function no(e) {
	var t;
	let n = s(ha, e), r = s(ga, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(_a, r)) == null ? s(_a, e) : t,
		links: o(Sa, e),
		isOpen: e.classList.contains(Ta),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${Ia.length + 1}`), r.setAttribute("aria-controls", n.id), to(i), Ya(i, i.isOpen, !1), i.cleanup.push(Wa(i)), e.classList.add(Ea);
	let a = (e) => {
		e.preventDefault(), eo(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || Qa(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (Qa(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(Sa) || Qa(i);
	}, d = () => {
		i.isHovered = !0, qa(i);
	}, f = () => {
		i.isHovered = !1, qa(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function ro(e = document) {
	if (La && e === document) return () => void 0;
	e === document && (La = !0);
	let t = o(ma, e).map(no).filter((e) => !!e);
	return Ia.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Ea, Ta);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(va, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), Ka(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), Ja(e, !0);
		});
	};
}
//#endregion
//#region src/modules/page-transition.ts
var io = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, ao = "page-transition-overlay", oo = "[data-page-transition-overlay], .page-transition-overlay", so = "site-page-transition", co = "pending", lo = "is-page-transition-pending", uo = "[data-site-menu]", fo = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), po = !1, mo = !1;
function ho(e) {
	document.documentElement.classList.toggle(lo, e);
}
function go() {
	try {
		ho(window.sessionStorage.getItem(so) === co);
	} catch (e) {
		ho(!1);
	}
}
function _o() {
	let e = document.querySelector(oo);
	if (e) return e.classList.add(ao), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), e;
	let t = document.createElement("div");
	return t.className = ao, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), document.body.append(t), t;
}
function vo(e) {
	var t;
	return !!(e.closest(fo) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function yo(e, t) {
	return !mo && !e.defaultPrevented && !l(e) && !vo(t);
}
function bo() {
	try {
		window.sessionStorage.setItem(so, co), ho(!0);
	} catch (e) {}
}
function xo() {
	try {
		let e = window.sessionStorage.getItem(so) === co;
		return window.sessionStorage.removeItem(so), ho(!1), e;
	} catch (e) {
		return ho(!1), !1;
	}
}
function So(e) {
	let t = xo(), n = Array.from(document.querySelectorAll(uo)), r = () => {
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
		delay: io.holdDuration,
		duration: io.revealDuration,
		ease: io.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			}), r();
		}
	});
}
function Co(e, t, n) {
	mo = !0, b.killTweensOf(t);
	let r = b.timeline();
	if (n) {
		b.killTweensOf(n);
		let e = $a(n);
		e && r.add(e);
	}
	r.call(bo, [], 0), r.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: io.coverDuration,
		ease: io.ease,
		onComplete: () => {
			window.location.href = e.href;
		}
	}, 0);
}
function wo(e, t) {
	if (!e.persisted) return;
	mo = !1, xo(), b.killTweensOf(t), b.set(t, {
		yPercent: -100,
		y: 0
	});
	let n = document.querySelectorAll(uo);
	b.killTweensOf(n), b.set(n, { clearProps: "transform,opacity,visibility" });
	let r = document.querySelectorAll("[data-site-menu-panel]");
	b.killTweensOf(r), b.set(r, { clearProps: "height" });
}
function To() {
	if (po) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", To, { once: !0 });
		return;
	}
	po = !0;
	let e = _o();
	S(() => So(e)), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (mo) {
			t.preventDefault();
			return;
		}
		if (!yo(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), Co(i, e, r.closest(uo)));
	}, !0), window.addEventListener("pageshow", (t) => wo(t, e));
}
go();
//#endregion
//#region src/modules/parallax.ts
var Eo = "[data-parallax]", Do = "data-parallax", Oo = "data-parallax-ready", ko = "fw-parallax-window", Ao = "fw-parallax-window--self-sized", jo = "fw-parallax-inner", Mo = 60, No = 160, Po = ".site-lightbox-trigger", Fo = 1, Io = !1;
function Lo() {
	Io || (Io = !0, b.registerPlugin($));
}
function Ro(e) {
	let t = e.getAttribute(Do);
	if (t === null || t.trim() === "") return Mo;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.min(Math.abs(n), No) : Mo;
}
function zo(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function Bo(e, t) {
	var n;
	let r = (n = e.closest(Po)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(ko)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(ko);
	let a = document.createElement("span"), o = t / 2 + Fo;
	if (a.className = jo, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(ko), null;
		r.classList.add(Ao), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function Vo(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: Ho(e)
		});
		return;
	}
	n.forEach((n) => {
		zo(n).then(() => {
			if (!n.isConnected) return;
			let r = Bo(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: Ho(e)
			}), $.refresh());
		});
	});
}
function Ho(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function Uo(e = document) {
	let t = o(Eo, e).filter((e) => !e.hasAttribute(Oo));
	t.length === 0 || u() || (Lo(), t.forEach((e) => {
		let t = Ro(e);
		t !== 0 && (e.setAttribute(Oo, ""), Vo(e, t));
	}));
}
//#endregion
//#region src/modules/logo-variants.ts
var Wo = "https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/", Go = [
	"6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg",
	"6ab93c11630b54996257245a_West-Signatur-Variant3.svg",
	"6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg",
	"6ab93c127b1c73994a56f043_West-Signatur-Variant5.svg",
	"6ab93c12f66f79789e902fc4_West-Signatur-Variant7.svg",
	"6ab93c1232f656f444927b94_West-Signatur-Variant8.svg"
].map((e) => Wo + e);
function Ko() {
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
			if (o >= Go.length) {
				s();
				return;
			}
			let e = o++, t = `url("${Go[e]}")`;
			r.style.height = e === 4 ? "240%" : "100%", r.style.maskImage = t, r.style.setProperty("-webkit-mask-image", t), r.style.color = getComputedStyle(n).color, r.style.display = "block", n.style.visibility = "hidden";
		}
		t.addEventListener("pointerenter", () => {
			e.matches || (s(), o = 0, c(), a = window.setInterval(c, 250));
		}), t.addEventListener("pointerleave", s), t.addEventListener("blur", s);
	}), Go.forEach((e) => {
		let t = new Image();
		t.src = e;
	});
}
//#endregion
//#region src/modules/spline-slider.ts
var qo = ".werk_hero_slider", Jo = ".werk_hero_track";
function Yo(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function Xo(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function Zo(e) {
	let t = e.closest(qo), n = t == null ? void 0 : t.querySelector(Jo);
	if (!n) return !1;
	let r = Yo(e, n), i = Xo(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function Qo(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function $o(e, t) {
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
function es(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function ts(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function ns(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function rs(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function is(e, t) {
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
function as() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return es(e, t);
				let r = new Image();
				return r.src = e, $o(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], template")) continue;
		let i = ns(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = ts(n.currentSrc || n.getAttribute("src")), o = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!a && !o || t({
			key: a ? `image:${a}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || rs(n) ? "critical" : "warm" : i,
			load: (e) => $o(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && Zo(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = ts(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = ns(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => is(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", is(r, e))
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
			let t = ts(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => Qo(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function os(e) {
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
async function ss(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await Qo(a.shift().load(n.signal), n.signal);
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
var cs = !1;
function ls(e) {
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
function us(e, t) {
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
function ds(e, t) {
	let n = u(), r = 0, i = 0, a = 0, o = 0, s = !1, c = !1, l = 0, d = performance.now(), f = 0, p, m = new Promise((e) => {
		p = e;
	}), h = (t) => {
		let n = Math.max(o, Math.min(100, Math.floor(t)));
		n === o && n !== 100 || (o = n, us(e, o));
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
function fs(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function ps(e, t) {
	if (u() || t.aborted) return Promise.resolve();
	document.documentElement.classList.add(T);
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
function ms() {
	if (cs) return;
	cs = !0;
	let e = window.__sitePreloader;
	if (!(e != null && e.active)) return;
	let t = document.querySelector(w);
	if (!t) {
		e.release();
		return;
	}
	let n = new AbortController(), r = ds(t, e.startedAt);
	e.cleanup.push(() => {
		n.abort(), r.stop(), b.killTweensOf(t), b.killTweensOf(t.querySelectorAll(".site-preloader__track, .site-preloader__progress, .site-preloader__name, .site-preloader__signature"));
	});
	let i = async () => {
		if (await os(n.signal), !e.active) return;
		let i = as(), a = i.filter((e) => e.priority === "critical"), o = 0;
		r.setTasks(0, a.length), await Promise.all(a.map(async (t) => {
			await Qo(Promise.resolve().then(() => t.load(n.signal)), n.signal), o++, e.active && r.setTasks(o, a.length);
		})), e.active && (await ls(n.signal), e.active && (await fs(Math.max(0, C - (Date.now() - e.startedAt)), n.signal), e.active && (await r.complete(), e.active && (await ps(t, n.signal), e.active && (e.release(), ss(i))))));
	}, a = () => {
		i().catch(e.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a, { once: !0 }) : a();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var hs = !1;
function gs() {
	if (hs || u() || /(?:^|\/)news(?:\/|$)/i.test(location.pathname)) return;
	let e = () => {
		let e = window.lenis;
		if (hs || !window.__siteLenisManaged || !e) return;
		hs = !0, b.registerPlugin($), e.on("scroll", $.update);
		let t = (t) => e.raf(t * 1e3);
		b.ticker.add(t), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), window.addEventListener("pagehide", () => {
			b.ticker.remove(t), e.off("scroll", $.update);
		}, { once: !0 });
	};
	e(), hs || window.addEventListener("site:lenis-ready", e, { once: !0 });
}
//#endregion
//#region src/main.ts
var _s = !1;
ms(), To(), kr(), gs();
function vs() {
	if (_s) return;
	_s = !0;
	let e = O();
	pa({ i18n: e }), xi({ i18n: e }), Uo(), ro(), ie(), _(), Ko(), window.SiteInteractions = {
		openModal: la,
		openContentModal: ca,
		closeModal: ua,
		openLightbox: _i,
		closeLightbox: vi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", vs, { once: !0 }) : vs();
//#endregion

//# sourceMappingURL=site-interactions.js.map