import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { t as x } from "./site-interactions-CKkKncuX.js";
import { a as S, n as C, r as w, t as T } from "./site-interactions-DmwD_875.js";
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
var k = ".site-menu__languages", A = ".site-menu__language", j = "site-menu__language-indicator";
function te(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function M(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function ne(e) {
	let t = Array.from(e.querySelectorAll(A)), n = te(t);
	if (!n || e.querySelector(`.${j}`)) return;
	let r = document.createElement("span");
	r.className = j, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => M(e, r, t), a = () => {
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
function re() {
	document.querySelectorAll(k).forEach(ne);
}
//#endregion
//#region node_modules/gsap/Observer.js
function ie(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function ae(e, t, n) {
	return t && ie(e.prototype, t), n && ie(e, n), e;
}
var N, oe, P, F, I, se, ce, L, R, z, le, ue, de, fe = function() {
	return N || typeof window < "u" && (N = window.gsap) && N.registerPlugin && N;
}, pe = 1, me = [], B = [], V = [], H = Date.now, he = function(e, t) {
	return t;
}, ge = function() {
	var e = R.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, B), r.push.apply(r, V), B = n, V = r, he = function(e, n) {
		return t[e](n);
	};
}, U = function(e, t) {
	return ~V.indexOf(e) && V[V.indexOf(e) + 1][t];
}, _e = function(e) {
	return !!~z.indexOf(e);
}, W = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, ve = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, ye = "scrollLeft", be = "scrollTop", xe = function() {
	return le && le.isPressed || B.cache++;
}, Se = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			pe && (P.history.scrollRestoration = "manual");
			var i = le && le.isPressed;
			r = n.v = Math.round(r) || (le && le.iOS ? 1 : 0), e(r), n.cacheID = B.cache, i && he("ss", r);
		} else (t || B.cache !== n.cacheID || he("ref")) && (n.cacheID = B.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Ce = {
	s: ye,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: Se(function(e) {
		return arguments.length ? P.scrollTo(e, we.sc()) : P.pageXOffset || F[ye] || I[ye] || se[ye] || 0;
	})
}, we = {
	s: be,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Ce,
	sc: Se(function(e) {
		return arguments.length ? P.scrollTo(Ce.sc(), e) : P.pageYOffset || F[be] || I[be] || se[be] || 0;
	})
}, Te = function(e, t) {
	return (t && t._ctx && t._ctx.selector || N.utils.toArray)(e)[0] || (typeof e == "string" && N.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Ee = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, De = function(e, t) {
	var n = t.s, r = t.sc;
	_e(e) && (e = F.scrollingElement || I);
	var i = B.indexOf(e), a = r === we.sc ? 1 : 2;
	!~i && (i = B.push(e) - 1), B[i + a] || W(e, "scroll", xe);
	var o = B[i + a], s = o || (B[i + a] = Se(U(e, n), !0) || (_e(e) ? r : Se(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = N.getProperty(e, "scrollBehavior") === "smooth"), s;
}, Oe = function(e, t, n) {
	var r = e, i = e, a = H(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = H();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = H();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, ke = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Ae = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, je = function() {
	R = N.core.globals().ScrollTrigger, R && R.core && ge();
}, Me = function(e) {
	return N = e || fe(), !oe && N && typeof document < "u" && document.body && (P = window, F = document, I = F.documentElement, se = F.body, z = [
		P,
		F,
		I,
		se
	], N.utils.clamp, de = N.core.context || function() {}, L = "onpointerenter" in se ? "pointer" : "mouse", ce = G.isTouch = P.matchMedia && P.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in P || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, ue = G.eventTypes = ("ontouchstart" in I ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in I ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return pe = 0;
	}, 500), oe = 1), R || je(), oe;
};
Ce.op = we, B.cache = 0;
var G = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		oe || Me(N) || console.warn("Please gsap.registerPlugin(Observer)"), R || je();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, ee = e.onMove, k = e.ignoreCheck, A = e.isNormalizer, j = e.onGestureStart, te = e.onGestureEnd, M = e.onWheel, ne = e.onEnable, re = e.onDisable, ie = e.onClick, ae = e.scrollSpeed, z = e.capture, fe = e.allowClicks, pe = e.lockAxis, B = e.onLockAxis;
		this.target = i = Te(i) || I, this.vars = e, u && (u = N.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, ae = ae || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(P.getComputedStyle(se).lineHeight) || 22);
		var V, he, ge, U, ye, be, Se, G = this, K = 0, Ne = 0, q = e.passive || !s && e.passive !== !1, J = De(i, Ce), Pe = De(i, we), Y = J(), X = Pe(), Fe = ~r.indexOf("touch") && !~r.indexOf("pointer") && ue[0] === "pointerdown", Ie = _e(i), Z = i.ownerDocument || F, Le = [
			0,
			0,
			0
		], Re = [
			0,
			0,
			0
		], ze = 0, Be = function() {
			return ze = H();
		}, Ve = function(e, t) {
			return (G.event = e) && u && Ee(e.target, u) || t && Fe && e.pointerType !== "touch" || k && k(e, t);
		}, He = function() {
			G._vx.reset(), G._vy.reset(), he.pause(), c && c(G);
		}, Ue = function() {
			var e = G.deltaX = Ae(Le), n = G.deltaY = Ae(Re), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(G, e, n, Le, Re), r && (v && G.deltaX > 0 && v(G), y && G.deltaX < 0 && y(G), S && S(G), T && G.deltaX < 0 != K < 0 && T(G), K = G.deltaX, Le[0] = Le[1] = Le[2] = 0), i && (x && G.deltaY > 0 && x(G), b && G.deltaY < 0 && b(G), C && C(G), E && G.deltaY < 0 != Ne < 0 && E(G), Ne = G.deltaY, Re[0] = Re[1] = Re[2] = 0), (U || ge) && (ee && ee(G), ge && (p && ge === 1 && p(G), h && h(G), ge = 0), U = !1), be && !(be = !1) && B && B(G), ye && (M(G), ye = !1), V = 0;
		}, We = function(e, t, n) {
			Le[n] += e, Re[n] += t, G._vx.update(e), G._vy.update(t), o ? V || (V = requestAnimationFrame(Ue)) : Ue();
		}, Ge = function(e, t) {
			pe && !Se && (G.axis = Se = Math.abs(e) > Math.abs(t) ? "x" : "y", be = !0), Se !== "y" && (Le[2] += e, G._vx.update(e, !0)), Se !== "x" && (Re[2] += t, G._vy.update(t, !0)), o ? V || (V = requestAnimationFrame(Ue)) : Ue();
		}, Ke = function(e) {
			if (!Ve(e, 1)) {
				e = ke(e, s);
				var t = e.clientX, r = e.clientY, i = t - G.x, a = r - G.y, o = G.isDragging;
				G.x = t, G.y = r, (o || (i || a) && (Math.abs(G.startX - t) >= n || Math.abs(G.startY - r) >= n)) && (ge || (ge = o ? 2 : 1), o || (G.isDragging = !0), Ge(i, a));
			}
		}, qe = G.onPress = function(e) {
			Ve(e, 1) || e && e.button || (G.axis = Se = null, he.pause(), G.isPressed = !0, e = ke(e), K = Ne = 0, G.startX = G.x = e.clientX, G.startY = G.y = e.clientY, G._vx.reset(), G._vy.reset(), W(A ? i : Z, ue[1], Ke, q, !0), G.deltaX = G.deltaY = 0, g && g(G));
		}, Je = G.onRelease = function(e) {
			if (!Ve(e, 1)) {
				ve(A ? i : Z, ue[1], Ke, !0);
				var t = !isNaN(G.y - G.startY), n = G.isDragging, r = n && (Math.abs(G.x - G.startX) > 3 || Math.abs(G.y - G.startY) > 3), a = ke(e);
				!r && t && (G._vx.reset(), G._vy.reset(), s && fe && N.delayedCall(.08, function() {
					if (H() - ze > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (Z.createEvent) {
							var t = Z.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, P, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), G.isDragging = G.isGesturing = G.isPressed = !1, c && n && !A && he.restart(!0), ge && Ue(), m && n && m(G), _ && _(G, r);
			}
		}, Ye = function(e) {
			return e.touches && e.touches.length > 1 && (G.isGesturing = !0) && j(e, G.isDragging);
		}, Xe = function() {
			return (G.isGesturing = !1) || te(G);
		}, Ze = function(e) {
			if (!Ve(e)) {
				var t = J(), n = Pe();
				We((t - Y) * ae, (n - X) * ae, 1), Y = t, X = n, c && he.restart(!0);
			}
		}, Qe = function(e) {
			if (!Ve(e)) {
				e = ke(e, s), M && (ye = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? P.innerHeight : 1) * d;
				We(e.deltaX * t, e.deltaY * t, 0), c && !A && he.restart(!0);
			}
		}, $e = function(e) {
			if (!Ve(e)) {
				var t = e.clientX, n = e.clientY, r = t - G.x, i = n - G.y;
				G.x = t, G.y = n, U = !0, c && he.restart(!0), (r || i) && Ge(r, i);
			}
		}, et = function(e) {
			G.event = e, D(G);
		}, tt = function(e) {
			G.event = e, O(G);
		}, nt = function(e) {
			return Ve(e) || ke(e, s) && ie(G);
		};
		he = G._dc = N.delayedCall(l || .25, He).pause(), G.deltaX = G.deltaY = 0, G._vx = Oe(0, 50, !0), G._vy = Oe(0, 50, !0), G.scrollX = J, G.scrollY = Pe, G.isDragging = G.isGesturing = G.isPressed = !1, de(this), G.enable = function(e) {
			return G.isEnabled || (W(Ie ? Z : i, "scroll", xe), r.indexOf("scroll") >= 0 && W(Ie ? Z : i, "scroll", Ze, q, z), r.indexOf("wheel") >= 0 && W(i, "wheel", Qe, q, z), (r.indexOf("touch") >= 0 && ce || r.indexOf("pointer") >= 0) && (W(i, ue[0], qe, q, z), W(Z, ue[2], Je), W(Z, ue[3], Je), fe && W(i, "click", Be, !0, !0), ie && W(i, "click", nt), j && W(Z, "gesturestart", Ye), te && W(Z, "gestureend", Xe), D && W(i, L + "enter", et), O && W(i, L + "leave", tt), ee && W(i, L + "move", $e)), G.isEnabled = !0, G.isDragging = G.isGesturing = G.isPressed = U = ge = !1, G._vx.reset(), G._vy.reset(), Y = J(), X = Pe(), e && e.type && qe(e), ne && ne(G)), G;
		}, G.disable = function() {
			G.isEnabled && (me.filter(function(e) {
				return e !== G && _e(e.target);
			}).length || ve(Ie ? Z : i, "scroll", xe), G.isPressed && (G._vx.reset(), G._vy.reset(), ve(A ? i : Z, ue[1], Ke, !0)), ve(Ie ? Z : i, "scroll", Ze, z), ve(i, "wheel", Qe, z), ve(i, ue[0], qe, z), ve(Z, ue[2], Je), ve(Z, ue[3], Je), ve(i, "click", Be, !0), ve(i, "click", nt), ve(Z, "gesturestart", Ye), ve(Z, "gestureend", Xe), ve(i, L + "enter", et), ve(i, L + "leave", tt), ve(i, L + "move", $e), G.isEnabled = G.isPressed = G.isDragging = !1, re && re(G));
		}, G.kill = G.revert = function() {
			G.disable();
			var e = me.indexOf(G);
			e >= 0 && me.splice(e, 1), le === G && (le = 0);
		}, me.push(G), A && _e(i) && (le = G), G.enable(f);
	}, ae(e, [{
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
}, G.register = Me, G.getAll = function() {
	return me.slice();
}, G.getById = function(e) {
	return me.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, fe() && N.registerPlugin(G);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var K, Ne, q, J, Pe, Y, X, Fe, Ie, Z, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st = 1, ct = Date.now, lt = ct(), ut = 0, dt = 0, ft = function(e, t, n) {
	var r = Ot(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, pt = function(e, t) {
	return t && (!Ot(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, mt = function e() {
	return dt && requestAnimationFrame(e);
}, ht = function() {
	return Be = 1;
}, gt = function() {
	return Be = 0;
}, _t = function(e) {
	return e;
}, vt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, yt = function() {
	return typeof window < "u";
}, bt = function() {
	return K || yt() && (K = window.gsap) && K.registerPlugin && K;
}, xt = function(e) {
	return !!~X.indexOf(e);
}, St = function(e) {
	return (e === "Height" ? rt : q["inner" + e]) || Pe["client" + e] || Y["client" + e];
}, Ct = function(e) {
	return U(e, "getBoundingClientRect") || (xt(e) ? function() {
		return Xn.width = q.innerWidth, Xn.height = rt, Xn;
	} : function() {
		return $t(e);
	});
}, wt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = U(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? St(i) : e["client" + i]) || 0;
	};
}, Tt = function(e, t) {
	return !t || ~V.indexOf(e) ? Ct(e) : function() {
		return Xn;
	};
}, Et = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = U(e, n)) ? a() - Ct(e)()[i] : xt(e) ? (Pe[n] || Y[n]) - St(r) : e[n] - e["offset" + r]);
}, Dt = function(e, t) {
	for (var n = 0; n < Ge.length; n += 3) (!t || ~t.indexOf(Ge[n + 1])) && e(Ge[n], Ge[n + 1], Ge[n + 2]);
}, Ot = function(e) {
	return typeof e == "string";
}, kt = function(e) {
	return typeof e == "function";
}, At = function(e) {
	return typeof e == "number";
}, jt = function(e) {
	return typeof e == "object";
}, Mt = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, Nt = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, Pt = Math.abs, Ft = "left", It = "top", Lt = "right", Rt = "bottom", zt = "width", Bt = "height", Vt = "Right", Ht = "Left", Ut = "Top", Wt = "Bottom", Gt = "padding", Kt = "margin", qt = "Width", Jt = "Height", Yt = "px", Xt = function(e) {
	return q.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Zt = function(e) {
	var t = Xt(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, Qt = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, $t = function(e, t) {
	var n = t && Xt(e)[Ve] !== "matrix(1, 0, 0, 1, 0, 0)" && K.to(e, {
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
		return K.utils.snap(tn(e), t);
	};
}, rn = function(e) {
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
	if (Ot(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in fn ? fn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, mn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = J.createElement("div"), m = xt(n) || U(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Y : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === we ? Lt : Rt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], hn(p, 0, r, _), p;
}, hn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + qt] = 1, i["border" + o + qt] = 0, i[n.p] = t + "px", K.set(e, i);
}, Q = [], gn = {}, _n, vn = function() {
	return ct() - ut > 34 && (_n || (_n = requestAnimationFrame(Vn)));
}, yn = function() {
	(!Ye || !Ye.isPressed || Ye.startX > Y.clientWidth) && (B.cache++, Ye ? _n || (_n = requestAnimationFrame(Vn)) : Vn(), ut || Tn("scrollStart"), ut = ct());
}, bn = function() {
	Qe = q.innerWidth, Ze = q.innerHeight;
}, xn = function(e) {
	B.cache++, (e === !0 || !ze && !Je && !J.fullscreenElement && !J.webkitFullscreenElement && (!Xe || Qe !== q.innerWidth || Math.abs(q.innerHeight - Ze) > q.innerHeight * .25)) && Fe.restart(!0);
}, Sn = {}, Cn = [], wn = function e() {
	return cn($, "scrollEnd", e) || Ln(!0);
}, Tn = function(e) {
	return Sn[e] && Sn[e].map(function(e) {
		return e();
	}) || Cn;
}, En = [], Dn = function(e) {
	for (var t = 0; t < En.length; t += 5) (!e || En[t + 4] && En[t + 4].query === e) && (En[t].style.cssText = En[t + 1], En[t].getBBox && En[t].setAttribute("transform", En[t + 2] || ""), En[t + 3].uncache = 1);
}, On = function() {
	return B.forEach(function(e) {
		return kt(e) && ++e.cacheID && (e.rec = e());
	});
}, kn = function(e, t) {
	var n;
	for (He = 0; He < Q.length; He++) n = Q[He], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	it = !0, t && Dn(t), t || Tn("revert");
}, An = function(e, t) {
	B.cache++, (t || !jn) && B.forEach(function(e) {
		return kt(e) && e.cacheID++ && (e.rec = 0);
	}), Ot(e) && (q.history.scrollRestoration = tt = e);
}, jn, Mn = 0, Nn, Pn = function() {
	if (Nn !== Mn) {
		var e = Nn = Mn;
		requestAnimationFrame(function() {
			return e === Mn && Ln(!0);
		});
	}
}, Fn = function() {
	Y.appendChild(nt), rt = !Ye && nt.offsetHeight || q.innerHeight, Y.removeChild(nt);
}, In = function(e) {
	return Ie(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Ln = function(e, t) {
	if (Pe = J.documentElement, Y = J.body, X = [
		q,
		J,
		Pe,
		Y
	], ut && !e && !it) {
		sn($, "scrollEnd", wn);
		return;
	}
	Fn(), jn = $.isRefreshing = !0, it || On();
	var n = Tn("refreshInit");
	Ke && $.sort(), t || kn(), B.forEach(function(e) {
		kt(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), it = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), at = 1, In(!0), Q.forEach(function(e) {
		var t = Et(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), In(!1), at = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), B.forEach(function(e) {
		kt(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), An(tt, 1), Fe.pause(), Mn++, jn = 2, Vn(2), Q.forEach(function(e) {
		return kt(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), jn = $.isRefreshing = !1, Tn("refresh");
}, Rn = 0, zn = 1, Bn, Vn = function(e) {
	if (e === 2 || !jn && !it) {
		$.isUpdating = !0, Bn && Bn.update(0);
		var t = Q.length, n = ct(), r = n - lt >= 50, i = t && Q[0].scroll();
		if (zn = Rn > i ? -1 : 1, jn || (Rn = i), r && (ut && !Be && n - ut > 200 && (ut = 0, Tn("scrollEnd")), Le = lt, lt = n), zn < 0) {
			for (He = t; He-- > 0;) Q[He] && Q[He].update(0, r);
			zn = 1;
		} else for (He = 0; He < t; He++) Q[He] && Q[He].update(0, r);
		$.isUpdating = !1;
	}
	_n = 0;
}, Hn = [
	Ft,
	It,
	Rt,
	Lt,
	Kt + Wt,
	Kt + Vt,
	Kt + Ut,
	Kt + Ht,
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
	zt,
	Bt,
	"boxSizing",
	"max" + qt,
	"max" + Jt,
	"position",
	Kt,
	Gt,
	Gt + Ut,
	Gt + Vt,
	Gt + Wt,
	Gt + Ht
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
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[Rt] = o[Lt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[zt] = en(e, Ce) + Yt, a[Bt] = en(e, we) + Yt, a[Gt] = o[Kt] = o[It] = o[Ft] = "0", qn(r), o[zt] = o["max" + qt] = n[zt], o[Bt] = o["max" + Jt] = n[Bt], o[Gt] = n[Gt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Kn = /([A-Z])/g, qn = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Kn, "-$1").toLowerCase());
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
	kt(e) && (e = e(s)), Ot(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? pn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), At(e)) f && (e = K.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && hn(o, n, r, !0);
	else {
		kt(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Te(t, s) || Y, y = $t(_) || {}, (!y || !y.left && !y.top) && Xt(_).display === "none" && (S = _.style.display, _.style.display = "block", y = $t(_), S ? _.style.display = S : _.style.removeProperty("display")), b = pn(v[0], y[r.d]), x = pn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && hn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, hn(a, C, r, w && C > 20 || !w && (u ? Math.max(Y[h], Pe[h]) : a.parentNode[h]) <= C + 1), u && (c = $t(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Yt));
	}
	return f && _ && (h = $t(_), f.seek(d), g = $t(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, Qn = /(webkit|moz|length|cssText|inset)/i, $n = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Y) {
			for (a in e._stOrig = i.cssText, o = Xt(e), o) !+a && !Qn.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		K.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, er = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, tr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, K.set(e, r);
}, nr = function(e, t) {
	var n = De(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = er(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			B.cache++, t.tween && Vn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = K.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, sn(e, "wheel", n.wheelHandler), $.isTouch && sn(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		Ne || e.register(K) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), et(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !dt) {
			this.update = this.refresh = this.kill = _t;
			return;
		}
		t = Qt(Ot(t) || At(t) || t.nodeType ? { trigger: t } : t, dn);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ce : we, T = !l && l !== 0, E = Te(t.scroller || q), D = K.core.getCache(E), O = xt(E), ee = ("pinType" in t ? t.pinType : U(E, "pinType") || O && "fixed") === "fixed", k = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], A = T && t.toggleActions.split(" "), j = "markers" in t ? t.markers : dn.markers, te = O ? 0 : parseFloat(Xt(E)["border" + w.p2 + qt]) || 0, M = this, ne = t.onRefreshInit && function() {
			return t.onRefreshInit(M);
		}, re = wt(E, O, w), ie = Tt(E, O), ae = 0, N = 0, oe = 0, P = De(E, w), F, I, se, ce, L, R, z, le, ue, de, fe, pe, me, H, he, ge, _e, W, ve, ye, be, xe, Se, Ee, Oe, ke, Ae, je, Me, G, Ne, X, Fe, Re, Ve, Ue, We, Ge, Je;
		if (M._startClamp = M._endClamp = !1, M._dir = w, m *= 45, M.scroller = E, M.scroll = x ? x.time.bind(x) : P, ce = P(), M.vars = t, n = n || t.animation, "refreshPriority" in t && (Ke = 1, t.refreshPriority === -9999 && (Bn = M)), D.tweenScroll = D.tweenScroll || {
			top: nr(E, we),
			left: nr(E, Ce)
		}, M.tweenTo = F = D.tweenScroll[w.p], M.scrubDuration = function(e) {
			Fe = At(e) && e, Fe ? X ? X.duration(e) : X = K.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Fe,
				paused: !0,
				onComplete: function() {
					return h && h(M);
				}
			}) : (X && X.progress(1).kill(), X = 0);
		}, n && (n.vars.lazy = !1, n._initted && !M.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), M.animation = n.pause(), n.scrollTrigger = M, M.scrubDuration(l), G = 0, o || (o = n.vars.id)), v && ((!jt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Y.style && K.set(O ? [Y, Pe] : E, { scrollBehavior: "auto" }), B.forEach(function(e) {
			return kt(e) && e.target === (O ? J.scrollingElement || Pe : E) && (e.smooth = !1);
		}), se = kt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? nn(n) : v.snapTo === "labelsDirectional" ? an(n) : v.directional === !1 ? K.utils.snap(v.snapTo) : function(e, t) {
			return rn(v.snapTo)(e, ct() - N < 500 ? 0 : t.direction);
		}, Re = v.duration || {
			min: .1,
			max: 2
		}, Re = jt(Re) ? Z(Re.min, Re.max) : Z(Re, Re), Ve = K.delayedCall(v.delay || Fe / 2 || .1, function() {
			var e = P(), t = ct() - N < 500, r = F.tween;
			if ((t || Math.abs(M.getVelocity()) < 10) && !r && !Be && ae !== e) {
				var i = (e - R) / H, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - Ne) / (ct() - Le) * 1e3 || 0, s = K.utils.clamp(-i, 1 - i, Pt(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = se(c, M), At(l) || (l = c), u = Math.max(0, Math.round(R + l * H)), e <= z && e >= R && u !== e) {
					if (r && !r._initted && r.data <= Pt(u - e)) return;
					v.inertia === !1 && (s = l - i), F(u, {
						duration: Re(Pt(Math.max(Pt(c - a), Pt(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Pt(u - e),
						onInterrupt: function() {
							return Ve.restart(!0) && p && Nt(M, p);
						},
						onComplete: function() {
							M.update(), ae = P(), n && !T && (X ? X.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), G = Ne = n && !T ? n.totalProgress() : M.progress, g && g(M), m && Nt(M, m);
						}
					}, e, s * H, u - e - s * H), f && Nt(M, f, F.tween);
				}
			} else M.isActive && ae !== e && Ve.restart(!0);
		}).pause()), o && (gn[o] = M), u = M.trigger = Te(u || d !== !0 && d), Je = u && u._gsap && u._gsap.stRevert, Je && (Je = Je(M)), d = d === !0 ? u : Te(d), Ot(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Kt || (f = !f && d.parentNode && d.parentNode.style && Xt(d.parentNode).display === "flex" ? !1 : Gt), M.pin = d, I = K.core.getCache(d), I.spacer ? he = I.pinState : (b && (b = Te(b), b && !b.nodeType && (b = b.current || b.nativeElement), I.spacerIsNative = !!b, b && (I.spacerState = Jn(b))), I.spacer = W = b || J.createElement("div"), W.classList.add("pin-spacer"), o && W.classList.add("pin-spacer-" + o), I.pinState = he = Jn(d)), t.force3D !== !1 && K.set(d, { force3D: !0 }), M.spacer = W = I.spacer, Me = Xt(d), Ee = Me[f + w.os2], ye = K.getProperty(d), be = K.quickSetter(d, w.a, Yt), Gn(d, W, Me), _e = Jn(d)), j) {
			pe = jt(j) ? Qt(j, un) : un, de = mn("scroller-start", o, E, w, pe, 0), fe = mn("scroller-end", o, E, w, pe, 0, de), ve = de["offset" + w.op.d2];
			var Ye = Te(U(E, "content") || E);
			le = this.markerStart = mn("start", o, Ye, w, pe, ve, 0, x), ue = this.markerEnd = mn("end", o, Ye, w, pe, ve, 0, x), x && (Ge = K.quickSetter([le, ue], w.a, Yt)), !ee && !(V.length && U(E, "fixedMarkers") === !0) && (Zt(O ? Y : E), K.set([de, fe], { force3D: !0 }), ke = K.quickSetter(de, w.a, Yt), je = K.quickSetter(fe, w.a, Yt));
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
			var r = e !== !1 || !M.enabled, i = ze;
			r !== M.isReverted && (r && (Ue = Math.max(P(), M.scroll.rec || 0), oe = M.progress, We = n && n.progress()), le && [
				le,
				ue,
				de,
				fe
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (ze = M, M.update(r)), d && (!y || !M.isActive) && (r ? Wn(d, W, he) : Gn(d, W, Xt(d), Oe)), r || M.update(r), ze = i, M.isReverted = r);
		}, M.refresh = function(r, i, a, o) {
			if (!((ze || !M.enabled) && !i)) {
				if (d && r && ut) {
					sn(e, "scrollEnd", wn);
					return;
				}
				!jn && ne && ne(M), ze = M, F.tween && !a && (F.tween.kill(), F.tween = 0), X && X.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), M.isReverted || M.revert(!0, !0), M._subPinOffset = !1;
				var s = re(), l = ie(), m = x ? x.duration() : Et(E, w), h = H <= .01 || !H, g = 0, _ = o || 0, v = jt(a) ? a.end : t.end, b = t.endTrigger || u, S = jt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = M.pinnedContainer = t.pinnedContainer && Te(t.pinnedContainer, M), D = u && Math.max(0, Q.indexOf(M)) || 0, k = D, A, I, se, pe, B, V, U, ve, be, Ee, ke, je, Me;
				for (j && jt(a) && (je = K.getProperty(de, w.p), Me = K.getProperty(fe, w.p)); k-- > 0;) V = Q[k], V.end || V.refresh(0, 1) || (ze = M), U = V.pin, U && (U === u || U === d || U === C) && !V.isReverted && (Ee || (Ee = []), Ee.unshift(V), V.revert(!0, !0)), V !== Q[k] && (D--, k--);
				for (kt(S) && (S = S(M)), S = ft(S, "start", M), R = Zn(S, u, s, w, P(), le, de, M, l, te, ee, m, x, M._startClamp && "_startClamp") || (d ? -.001 : 0), kt(v) && (v = v(M)), Ot(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ot(S) ? S.split(" ")[0] : "") + v : (g = pn(v.substr(2), s), v = Ot(S) ? S : (x ? K.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, R) : R) + g, b = u)), v = ft(v, "end", M), z = Math.max(R, Zn(v || (b ? "100% 0" : m), b, s, w, P() + g, ue, fe, M, l, te, ee, m, x, M._endClamp && "_endClamp")) || -.001, g = 0, k = D; k--;) V = Q[k] || {}, U = V.pin, U && V.start - V._pinPush <= R && !x && V.end > 0 && (A = V.end - (M._startClamp ? Math.max(0, V.start) : V.start), (U === u && V.start - V._pinPush < R || U === C) && isNaN(S) && (g += A * (1 - V.progress)), U === d && (_ += A));
				if (R += g, z += g, M._startClamp && (M._startClamp += g), M._endClamp && !jn && (M._endClamp = z || -.001, z = Math.min(z, Et(E, w))), H = z - R || (R -= .01) && .001, h && (oe = K.utils.clamp(0, 1, K.utils.normalize(R, z, Ue))), M._pinPush = _, le && g && (A = {}, A[w.a] = "+=" + g, C && (A[w.p] = "-=" + P()), K.set([le, ue], A)), d && !(at && M.end >= Et(E, w))) A = Xt(d), pe = w === we, se = P(), xe = parseFloat(ye(w.a)) + _, !m && z > 1 && (ke = (O ? J.scrollingElement || Pe : E).style, ke = {
					style: ke,
					value: ke["overflow" + w.a.toUpperCase()]
				}, O && Xt(Y)["overflow" + w.a.toUpperCase()] !== "scroll" && (ke.style["overflow" + w.a.toUpperCase()] = "scroll")), Gn(d, W, A), _e = Jn(d), I = $t(d, !0), ve = ee && De(E, pe ? Ce : we)(), f ? (Oe = [f + w.os2, H + _ + Yt], Oe.t = W, k = f === Gt ? en(d, w) + H + _ : 0, k && (Oe.push(w.d, k + Yt), W.style.flexBasis !== "auto" && (W.style.flexBasis = k + Yt)), qn(Oe), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), ee && P(Ue)) : (k = en(d, w), k && W.style.flexBasis !== "auto" && (W.style.flexBasis = k + Yt)), ee && (B = {
					top: I.top + (pe ? se - R : ve) + Yt,
					left: I.left + (pe ? ve : se - R) + Yt,
					boxSizing: "border-box",
					position: "fixed"
				}, B[zt] = B["max" + qt] = Math.ceil(I.width) + Yt, B[Bt] = B["max" + Jt] = Math.ceil(I.height) + Yt, B[Kt] = B[Kt + Ut] = B[Kt + Vt] = B[Kt + Wt] = B[Kt + Ht] = "0", B[Gt] = A[Gt], B[Gt + Ut] = A[Gt + Ut], B[Gt + Vt] = A[Gt + Vt], B[Gt + Wt] = A[Gt + Wt], B[Gt + Ht] = A[Gt + Ht], ge = Yn(he, B, y), jn && P(0)), n ? (be = n._initted, qe(1), n.render(n.duration(), !0, !0), Se = ye(w.a) - xe + H + _, Ae = Math.abs(H - Se) > 1, ee && Ae && ge.splice(ge.length - 2, 2), n.render(0, !0, !0), be || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), qe(0)) : Se = H, ke && (ke.value ? ke.style["overflow" + w.a.toUpperCase()] = ke.value : ke.style.removeProperty("overflow-" + w.a));
				else if (u && P() && !x) for (I = u.parentNode; I && I !== Y;) I._pinOffset && (R -= I._pinOffset, z -= I._pinOffset), I = I.parentNode;
				Ee && Ee.forEach(function(e) {
					return e.revert(!1, !0);
				}), M.start = R, M.end = z, ce = L = jn ? Ue : P(), !x && !jn && (ce < Ue && P(Ue), M.scroll.rec = 0), M.revert(!1, !0), N = ct(), Ve && (ae = -1, Ve.restart(!0)), ze = 0, n && T && (n._initted || We) && n.progress() !== We && n.progress(We || 0, !0).render(n.time(), !0, !0), (h || oe !== M.progress || x || p || n && !n._initted) && (n && !T && (n._initted || oe || n.vars.immediateRender !== !1) && n.totalProgress(x && R < -.001 && !oe ? K.utils.normalize(R, z, 0) : oe, !0), M.progress = h || (ce - R) / H === oe ? 0 : oe), d && f && (W._pinOffset = Math.round(M.progress * Se)), X && X.invalidate(), isNaN(je) || (je -= K.getProperty(de, w.p), Me -= K.getProperty(fe, w.p), tr(de, w, je), tr(le, w, je - (o || 0)), tr(fe, w, Me), tr(ue, w, Me - (o || 0))), h && !jn && M.update(), c && !jn && !me && (me = !0, c(M), me = !1);
			}
		}, M.getVelocity = function() {
			return (P() - L) / (ct() - Le) * 1e3 || 0;
		}, M.endAnimation = function() {
			Mt(M.callbackAnimation), n && (X ? X.progress(1) : n.paused() ? T || Mt(n, M.direction < 0, 1) : Mt(n, n.reversed()));
		}, M.labelToScroll = function(e) {
			return n && n.labels && (R || M.refresh() || R) + n.labels[e] / n.duration() * H || 0;
		}, M.getTrailing = function(e) {
			var t = Q.indexOf(M), n = M.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (Ot(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return M.direction > 0 ? e.end <= R : e.start >= z;
			});
		}, M.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = jn === !0 ? Ue : M.scroll(), c = e ? 0 : (o - R) / H, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = M.progress, h, g, b, D, O, j, te, ne;
				if (t && (L = ce, ce = x ? P() : o, v && (Ne = G, G = n && !T ? n.totalProgress() : u)), m && d && !ze && !st && ut && (!u && R < o + (o - L) / (ct() - Le) * m ? u = 1e-4 : u === 1 && z > o + (o - L) / (ct() - Le) * m && (u = .9999)), u !== p && M.enabled) {
					if (h = M.isActive = !!u && u < 1, g = !!p && p < 1, j = h !== g, O = j || !!u != !!p, M.direction = u > p ? 1 : -1, M.progress = u, O && !ze && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !j && A[b + 1] !== "none" && A[b + 1] || A[b], ne = n && (D === "complete" || D === "reset" || D in n))), C && (j || ne) && (ne || l || !n) && (kt(C) ? C(M) : M.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), T || (X && !ze && !st ? (X._dp._time - X._start !== X._time && X.render(X._dp._time - X._start), X.resetTo ? X.resetTo("totalProgress", u, n._tTime / n._tDur) : (X.vars.totalProgress = u, X.invalidate().restart())) : n && n.totalProgress(u, !!(ze && (N || e)))), d) {
						if (e && f && (W.style[f + w.os2] = Ee), !ee) be(vt(xe + Se * u));
						else if (O) {
							if (te = !e && u > p && z + 1 > o && o + 1 >= Et(E, w), y) if (!e && (h || te)) {
								var re = $t(d, !0), ie = o - R;
								$n(d, Y, re.top + (w === we ? ie : 0) + Yt, re.left + (w === we ? 0 : ie) + Yt);
							} else $n(d, W);
							qn(h || te ? ge : _e), Ae && u < 1 && h || be(xe + (u === 1 && !te ? Se : 0));
						}
					}
					v && !F.tween && !ze && !st && Ve.restart(!0), a && (j || _ && u && (u < 1 || !ot)) && Ie(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !T && !e && i(M), O && !ze ? (T && (ne && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(M)), (j || !ot) && (s && j && Nt(M, s), k[b] && Nt(M, k[b]), _ && (u === 1 ? M.kill(!1, 1) : k[b] = 0), j || (b = u === 1 ? 1 : 3, k[b] && Nt(M, k[b]))), S && !h && Math.abs(M.getVelocity()) > (At(S) ? S : 2500) && (Mt(M.callbackAnimation), X ? X.progress(1) : Mt(n, D === "reverse" ? 1 : !u, 1))) : T && i && !ze && i(M);
				}
				if (je) {
					var ae = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					ke(ae + +!!de._isFlipped), je(ae);
				}
				Ge && Ge(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, M.enable = function(t, n) {
			M.enabled || (M.enabled = !0, sn(E, "resize", xn), O || sn(E, "scroll", yn), ne && sn(e, "refreshInit", ne), t !== !1 && (M.progress = oe = 0, ce = L = ae = P()), n !== !1 && M.refresh());
		}, M.getTween = function(e) {
			return e && F ? F.tween : X;
		}, M.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			M.refresh(!1, !1, {
				start: pt(e, n && !!M._startClamp),
				end: pt(t, n && !!M._endClamp)
			}, r), M.update();
		}, M.adjustPinSpacing = function(e) {
			if (Oe && e) {
				var t = Oe.indexOf(w.d) + 1;
				Oe[t] = parseFloat(Oe[t]) + e + Yt, Oe[1] = parseFloat(Oe[1]) + e + Yt, qn(Oe);
			}
		}, M.disable = function(t, n) {
			if (t !== !1 && M.revert(!0, !0), M.enabled && (M.enabled = M.isActive = !1, n || X && X.pause(), Ue = 0, I && (I.uncache = 1), ne && cn(e, "refreshInit", ne), Ve && (Ve.pause(), F.tween && F.tween.kill() && (F.tween = 0)), !O)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === E && Q[r] !== M) return;
				cn(E, "resize", xn), O || cn(E, "scroll", yn);
			}
		}, M.kill = function(e, r) {
			M.disable(e, r), X && !r && X.kill(), o && delete gn[o];
			var i = Q.indexOf(M);
			i >= 0 && Q.splice(i, 1), i === He && zn > 0 && He--, i = 0, Q.forEach(function(e) {
				return e.scroller === M.scroller && (i = 1);
			}), i || jn || (M.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), le && [
				le,
				ue,
				de,
				fe
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Bn === M && (Bn = 0), d && (I && (I.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (I.spacer = 0)), t.onKill && t.onKill(M);
		}, Q.push(M), M.enable(!1, !1), Je && Je(M), n && n.add && !H) {
			var Qe = M.update;
			M.update = function() {
				M.update = Qe, B.cache++, R || z || M.refresh();
			}, K.delayedCall(.01, M.update), H = .01, R = z = 0;
		} else M.refresh();
		d && Pn();
	}, e.register = function(t) {
		return Ne || (K = t || bt(), yt() && window.document && e.enable(), Ne = dt), Ne;
	}, e.defaults = function(e) {
		if (e) for (var t in e) dn[t] = e[t];
		return dn;
	}, e.disable = function(e, t) {
		dt = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), cn(q, "wheel", yn), cn(J, "scroll", yn), clearInterval(Re), cn(J, "touchcancel", _t), cn(Y, "touchstart", _t), on(cn, J, "pointerdown,touchstart,mousedown", ht), on(cn, J, "pointerup,touchend,mouseup", gt), Fe.kill(), Dt(cn);
		for (var n = 0; n < B.length; n += 3) ln(cn, B[n], B[n + 1]), ln(cn, B[n], B[n + 2]);
	}, e.enable = function() {
		if (q = window, J = document, Pe = J.documentElement, Y = J.body, K) if (Ie = K.utils.toArray, Z = K.utils.clamp, et = K.core.context || _t, qe = K.core.suppressOverwrites || _t, tt = q.history.scrollRestoration || "auto", Rn = q.pageYOffset || 0, K.core.globals("ScrollTrigger", e), Y) {
			dt = 1, nt = document.createElement("div"), nt.style.height = "100vh", nt.style.position = "absolute", Fn(), mt(), G.register(K), e.isTouch = G.isTouch, $e = G.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Xe = G.isTouch === 1, sn(q, "wheel", yn), X = [
				q,
				J,
				Pe,
				Y
			], K.matchMedia ? (e.matchMedia = function(e) {
				var t = K.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, K.addEventListener("matchMediaInit", function() {
				On(), kn();
			}), K.addEventListener("matchMediaRevert", function() {
				return Dn();
			}), K.addEventListener("matchMedia", function() {
				Ln(0, 1), Tn("matchMedia");
			}), K.matchMedia().add("(orientation: portrait)", function() {
				return bn(), bn;
			})) : console.warn("Requires GSAP 3.11.0 or later"), bn(), sn(J, "scroll", yn);
			var t = Y.hasAttribute("style"), n = Y.style, r = n.borderTopStyle, i = K.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = $t(Y), we.m = Math.round(a.top + we.sc()) || 0, Ce.m = Math.round(a.left + Ce.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Y.setAttribute("style", ""), Y.removeAttribute("style")), Re = setInterval(vn, 250), K.delayedCall(.5, function() {
				return st = 0;
			}), sn(J, "touchcancel", _t), sn(Y, "touchstart", _t), on(sn, J, "pointerdown,touchstart,mousedown", ht), on(sn, J, "pointerup,touchend,mouseup", gt), Ve = K.utils.checkPrefix("transform"), Un.push(Ve), Ne = ct(), Fe = K.delayedCall(.2, Ln).pause(), Ge = [
				J,
				"visibilitychange",
				function() {
					var e = q.innerWidth, t = q.innerHeight;
					J.hidden ? (Ue = e, We = t) : (Ue !== e || We !== t) && xn();
				},
				J,
				"DOMContentLoaded",
				Ln,
				q,
				"load",
				Ln,
				q,
				"resize",
				xn
			], Dt(sn), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < B.length; o += 3) ln(cn, B[o], B[o + 1]), ln(cn, B[o], B[o + 2]);
		} else J && J.addEventListener("DOMContentLoaded", function t() {
			e.enable(), J.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (ot = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Re) || (Re = n) && setInterval(vn, n), "ignoreMobileResize" in t && (Xe = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Dt(cn) || Dt(sn, t.autoRefreshEvents || "none"), Je = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Te(e), r = B.indexOf(n), i = xt(n);
		~r && B.splice(r, i ? 6 : 2), t && (i ? V.unshift(q, t, Y, t, Pe, t) : V.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (Ot(e) ? Te(e) : e).getBoundingClientRect(), i = r[n ? zt : Bt] * t || 0;
		return n ? r.right - i > 0 && r.left + i < q.innerWidth : r.bottom - i > 0 && r.top + i < q.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		Ot(e) && (e = Te(e));
		var r = e.getBoundingClientRect(), i = r[n ? zt : Bt], a = t == null ? i / 2 : t in fn ? fn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / q.innerWidth : (r.top + a) / q.innerHeight;
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
	return e ? Ie(e).forEach(function(e) {
		if (e && e.style) {
			var t = En.indexOf(e);
			t >= 0 && En.splice(t, 5), En.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), K.core.getCache(e), et());
		}
	}) : En;
}, $.revert = function(e, t) {
	return kn(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? xn(!0) : (Ne || $.register()) && Ln(!0);
}, $.update = function(e) {
	return ++B.cache && Vn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = An, $.maxScroll = function(e, t) {
	return Et(e, t ? Ce : we);
}, $.getScrollFunc = function(e, t) {
	return De(Te(e), t ? Ce : we);
}, $.getById = function(e) {
	return gn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!ut;
}, $.snapDirectional = rn, $.addEventListener = function(e, t) {
	var n = Sn[e] || (Sn[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = Sn[e], r = n && n.indexOf(t);
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
	for (s in t) r[s] = s.substr(0, 2) === "on" && kt(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return kt(a) && (a = a(), sn($, "refresh", function() {
		return a = t.batchMax();
	})), Ie(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var rr = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, ir = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (G.isTouch ? " pinch-zoom" : "") : "none", t === Pe && e(Y, n);
}, ar = {
	auto: 1,
	scroll: 1
}, or = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || K.core.getCache(i), o = ct(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Y && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(ar[(s = Xt(i)).overflowY] || ar[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !xt(i) && (ar[(s = Xt(i)).overflowY] || ar[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, sr = function(e, t, n, r) {
	return G.create({
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
			return n && sn(J, G.eventTypes[0], ur, !1, !0);
		},
		onDisable: function() {
			return cn(J, G.eventTypes[0], ur, !0);
		}
	});
}, cr = /(input|label|select|textarea)/i, lr, ur = function(e) {
	var t = cr.test(e.target.tagName);
	(t || lr) && (e._gsapAllow = !0, lr = t);
}, dr = function(e) {
	jt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Te(e.target) || Pe, l = K.core.globals().ScrollSmoother, u = l && l.get(), d = $e && (e.content && Te(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = De(c, we), p = De(c, Ce), m = 1, h = (G.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, g = 0, _ = kt(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = sr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = _t, C = _t, w = function() {
		s = Et(c, we), C = Z(+!!$e, s), n && (S = Z(0, Et(c, Ce))), v = Mn;
	}, T = function() {
		d._gsap.y = vt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = vt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = vt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = B.cache, Vn();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, ee, k, A = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && K.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return $e && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = vt((q.visualViewport && q.visualViewport.scale || 1) / h), D.pause(), e !== m && ir(c, m > 1.01 || !n && "x"), O = p(), ee = f(), w(), v = Mn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) k.restart(!0);
		else {
			B.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= rr(p, i, o, Et(c, Ce)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= rr(f, i, o, Et(c, we)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), ($e && D.vars.scrollY >= s || i >= s - 1) && K.to({}, {
				onUpdate: A,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), ct() - g > 1e3 && (v = 0, g = ct());
	}, e.onChange = function(e, t, r, i, a) {
		if (Mn !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? ee + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (ee += c - s), f(c);
		}
		(r || t) && Vn();
	}, e.onEnable = function() {
		ir(c, !n && "x"), $.addEventListener("refresh", A), sn(q, "resize", A), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		ir(c, !0), cn(q, "resize", A), $.removeEventListener("refresh", A), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new G(e), o.iOS = $e, $e && !f() && f(1), $e && K.ticker.add(_t), k = o._dc, D = K.to(o, {
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
	if (kt(e)) return Q.sort(e);
	var t = q.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + q.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new G(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return Ye;
	if (e === !0 && Ye) return Ye.enable();
	if (e === !1) {
		Ye && Ye.kill(), Ye = e;
		return;
	}
	var t = e instanceof G ? e : dr(e);
	return Ye && Ye.target === t.target && Ye.kill(), xt(t.target) && (Ye = t), t;
}, $.core = {
	_getVelocityProp: Oe,
	_inputObserver: sr,
	_scrollers: B,
	_proxies: V,
	bridge: {
		ss: function() {
			ut || Tn("scrollStart"), ut = ct();
		},
		ref: function() {
			return ze;
		}
	}
}, bt() && K.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var fr = "h1, h2, h3, h4, h5, h6, p", pr = ".news_event .u-text-eyebrow[data-animation-ready]", mr = [
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
	let n = o(`${fr}, ${pr}`, e).filter(Sr);
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
//#region src/modules/page-transition.ts
var ya = {
	titleStart: 300,
	navigate: 1400,
	hold: 800,
	uncoverStart: 1250,
	reset: 2750,
	watchdog: 6e3
}, ba = "pt", xa = "[data-page-transition-overlay], .page-transition-overlay", Sa = "is-page-transition-pending", Ca = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), wa = !1, Ta = !1, Ea = [];
function Da(e, t) {
	Ea.push(window.setTimeout(e, t));
}
function Oa() {
	Ea.forEach((e) => window.clearTimeout(e)), Ea = [];
}
function ka() {
	try {
		var e;
		return (e = window.sessionStorage.getItem(ba)) == null ? "" : e;
	} catch (e) {
		return "";
	}
}
function Aa() {
	try {
		window.sessionStorage.removeItem(ba);
	} catch (e) {}
	document.documentElement.classList.remove(Sa, "is-page-transition-boot");
}
function ja() {
	var e;
	let t = document.querySelector(xa);
	if (t || (t = document.createElement("div"), document.body.append(t)), t.classList.add("curtain", "page-transition-overlay"), t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), !t.querySelector(".page-transition-overlay__title")) {
		let e = document.createElement("span");
		e.className = "page-transition-overlay__title", t.append(e);
	}
	return (e = t.querySelector(".page-transition-overlay__title")) == null || e.setAttribute("aria-live", "polite"), t;
}
function Ma(e, t) {
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
function Na() {
	return document.querySelector("main, [role=\"main\"]");
}
function Pa(e) {
	return !!(e && !e.querySelector("canvas, iframe, video, [data-animation-type=\"spline\"]"));
}
function Fa(e) {
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
function Ia(e) {
	e && (e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), e.addEventListener("blur", () => e.removeAttribute("tabindex"), { once: !0 })), e.focus({ preventScroll: !0 }));
}
function La(e, t) {
	Oa(), e.classList.add("is-resetting"), e.classList.remove("is-covering", "is-covered", "is-title-visible", "is-title-leaving", "is-uncovering"), e.setAttribute("aria-hidden", "true"), t == null || t.classList.remove("is-page-transition-out", "is-page-transition-in", "is-page-transition-entered"), document.documentElement.classList.remove("is-page-transition-entering", "is-page-transition-covering"), Aa(), Ta = !1, window.requestAnimationFrame(() => e.classList.remove("is-resetting"));
}
function Ra(e, t) {
	var n, r;
	if (Ta = !0, u()) {
		Ia(t), La(e, t);
		return;
	}
	let i = e.querySelector(".page-transition-overlay__title");
	i && (i.textContent = ka()), e.setAttribute("aria-hidden", "false"), e.classList.add("is-covered", "is-title-visible"), Pa(t) && t.classList.add("is-page-transition-in"), document.documentElement.classList.add("is-page-transition-entering"), Fa(t), ((n = (r = document.fonts) == null ? void 0 : r.ready) == null ? Promise.resolve() : n).catch(() => void 0).then(() => {
		Da(() => e.classList.add("is-title-leaving"), ya.hold), Da(() => {
			var n;
			e.classList.add("is-uncovering"), t == null || t.classList.add("is-page-transition-entered"), t == null || (n = t.querySelector(".is-page-transition-heading")) == null || n.classList.add("is-revealing");
		}, ya.uncoverStart), Da(() => {
			Ia(t), La(e, t);
		}, ya.reset);
	});
}
function za(e, t, n, r) {
	Ta = !0;
	let i = t.querySelector(".page-transition-overlay__title");
	i && (i.textContent = r), t.setAttribute("aria-hidden", "false");
	try {
		window.sessionStorage.setItem(ba, r);
	} catch (e) {}
	document.documentElement.classList.add("is-page-transition-covering"), t.classList.add("is-covering"), Pa(n) && n.classList.add("is-page-transition-out"), Da(() => t.classList.add("is-title-visible"), ya.titleStart), Da(() => {
		window.location.href = e.href;
	}, ya.navigate), Da(() => {
		window.location.href = e.href;
	}, ya.watchdog);
}
function Ba() {
	if (wa) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Ba, { once: !0 });
		return;
	}
	wa = !0;
	let e = ja(), t = Na();
	ka() && document.documentElement.classList.contains(Sa) && Ra(e, t), document.addEventListener("click", (n) => {
		var r;
		let i = n.target instanceof Element ? n.target.closest("a[href]") : null;
		if (!i || n.defaultPrevented || l(n)) return;
		if (Ta) {
			n.preventDefault();
			return;
		}
		if (i.closest(Ca) || i.target && i.target !== "_self") return;
		let a = h(i);
		!a || a.hash || u() || (r = window.__sitePreloader) != null && r.active || (n.preventDefault(), za(a, e, t, Ma(a, i)));
	}, !0), window.addEventListener("pageshow", (n) => {
		n.persisted && La(e, t);
	});
}
//#endregion
//#region src/modules/parallax.ts
var Va = "[data-parallax]", Ha = "data-parallax", Ua = "data-parallax-ready", Wa = "fw-parallax-window", Ga = "fw-parallax-window--self-sized", Ka = "fw-parallax-inner", qa = 60, Ja = 160, Ya = ".site-lightbox-trigger", Xa = 1, Za = !1;
function Qa() {
	Za || (Za = !0, b.registerPlugin($));
}
function $a(e) {
	let t = e.getAttribute(Ha);
	if (t === null || t.trim() === "") return qa;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.min(Math.abs(n), Ja) : qa;
}
function eo(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function to(e, t) {
	var n;
	let r = (n = e.closest(Ya)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(Wa)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(Wa);
	let a = document.createElement("span"), o = t / 2 + Xa;
	if (a.className = Ka, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(Wa), null;
		r.classList.add(Ga), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function no(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: ro(e)
		});
		return;
	}
	n.forEach((n) => {
		eo(n).then(() => {
			if (!n.isConnected) return;
			let r = to(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: ro(e)
			}), $.refresh());
		});
	});
}
function ro(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function io(e = document) {
	let t = o(Va, e).filter((e) => !e.hasAttribute(Ua));
	t.length === 0 || u() || (Qa(), t.forEach((e) => {
		let t = $a(e);
		t !== 0 && (e.setAttribute(Ua, ""), no(e, t));
	}));
}
//#endregion
//#region node_modules/gsap/utils/paths.js
var ao = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, oo = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, so = Math.PI / 180;
180 / Math.PI;
var co = Math.sin, lo = Math.cos, uo = Math.abs, fo = Math.sqrt, po = function(e) {
	return typeof e == "number";
}, mo = 1e5, ho = function(e) {
	return Math.round(e * mo) / mo || 0;
}, go = function(e) {
	return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001;
};
function _o(e, t, n, r, i, a, o) {
	for (var s = e.length, c, l, u, d, f; --s > -1;) for (c = e[s], l = c.length, u = 0; u < l; u += 2) d = c[u], f = c[u + 1], c[u] = d * t + f * r + a, c[u + 1] = d * n + f * i + o;
	return e._dirty = 1, e;
}
function vo(e, t, n, r, i, a, o, s, c) {
	if (!(e === s && t === c)) {
		n = uo(n), r = uo(r);
		var l = i % 360 * so, u = lo(l), d = co(l), f = Math.PI, p = f * 2, m = (e - s) / 2, h = (t - c) / 2, g = u * m + d * h, _ = -d * m + u * h, v = g * g, y = _ * _, b = v / (n * n) + y / (r * r);
		b > 1 && (n = fo(b) * n, r = fo(b) * r);
		var x = n * n, S = r * r, C = (x * S - x * y - S * v) / (x * y + S * v);
		C < 0 && (C = 0);
		var w = (a === o ? -1 : 1) * fo(C), T = w * (n * _ / r), E = w * -(r * g / n), D = (e + s) / 2, O = (t + c) / 2, ee = D + (u * T - d * E), k = O + (d * T + u * E), A = (g - T) / n, j = (_ - E) / r, te = (-g - T) / n, M = (-_ - E) / r, ne = A * A + j * j, re = (j < 0 ? -1 : 1) * Math.acos(A / fo(ne)), ie = (A * M - j * te < 0 ? -1 : 1) * Math.acos((A * te + j * M) / fo(ne * (te * te + M * M)));
		isNaN(ie) && (ie = f), !o && ie > 0 ? ie -= p : o && ie < 0 && (ie += p), re %= p, ie %= p;
		var ae = Math.ceil(uo(ie) / (p / 4)), N = [], oe = ie / ae, P = 4 / 3 * co(oe / 2) / (1 + lo(oe / 2)), F = u * n, I = d * n, se = d * -r, ce = u * r, L;
		for (L = 0; L < ae; L++) i = re + L * oe, g = lo(i), _ = co(i), A = lo(i += oe), j = co(i), N.push(g - P * _, _ + P * g, A + P * j, j - P * A, A, j);
		for (L = 0; L < N.length; L += 2) g = N[L], _ = N[L + 1], N[L] = g * F + _ * se + ee, N[L + 1] = g * I + _ * ce + k;
		return N[L - 2] = s, N[L - 1] = c, N;
	}
}
function yo(e) {
	var t = (e + "").replace(oo, function(e) {
		var t = +e;
		return t < 1e-4 && t > -1e-4 ? 0 : t;
	}).match(ao) || [], n = [], r = 0, i = 0, a = 2 / 3, o = t.length, s = 0, c = "ERROR: malformed path: " + e, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w = function(e, t, n, r) {
		v = (n - e) / 3, y = (r - t) / 3, h.push(e + v, t + y, n - v, r - y, n, r);
	};
	if (!e || !isNaN(t[0]) || isNaN(t[1])) return console.log(c), n;
	for (l = 0; l < o; l++) if (x = p, isNaN(t[l]) ? (p = t[l].toUpperCase(), m = p !== t[l]) : l--, d = +t[l + 1], f = +t[l + 2], m && (d += r, f += i), l || (g = d, _ = f), p === "M") h && (h.length < 8 ? --n.length : s += h.length, go(h)), r = g = d, i = _ = f, h = [d, f], n.push(h), l += 2, p = "L";
	else if (p === "C") h || (h = [0, 0]), m || (r = i = 0), h.push(d, f, r + t[l + 3] * 1, i + t[l + 4] * 1, r += t[l + 5] * 1, i += t[l + 6] * 1), l += 6;
	else if (p === "S") v = r, y = i, (x === "C" || x === "S") && (v += r - h[h.length - 4], y += i - h[h.length - 3]), m || (r = i = 0), h.push(v, y, d, f, r += t[l + 3] * 1, i += t[l + 4] * 1), l += 4;
	else if (p === "Q") v = r + (d - r) * a, y = i + (f - i) * a, m || (r = i = 0), r += t[l + 3] * 1, i += t[l + 4] * 1, h.push(v, y, r + (d - r) * a, i + (f - i) * a, r, i), l += 4;
	else if (p === "T") v = r - h[h.length - 4], y = i - h[h.length - 3], h.push(r + v, i + y, d + (r + v * 1.5 - d) * a, f + (i + y * 1.5 - f) * a, r = d, i = f), l += 2;
	else if (p === "H") w(r, i, r = d, i), l += 1;
	else if (p === "V") w(r, i, r, i = d + (m ? i - r : 0)), l += 1;
	else if (p === "L" || p === "Z") p === "Z" && (d = g, f = _, h.closed = !0), (p === "L" || uo(r - d) > .5 || uo(i - f) > .5) && (w(r, i, d, f), p === "L" && (l += 2)), r = d, i = f;
	else if (p === "A") {
		if (S = t[l + 4], C = t[l + 5], v = t[l + 6], y = t[l + 7], u = 7, S.length > 1 && (S.length < 3 ? (y = v, v = C, u--) : (y = C, v = S.substr(2), u -= 2), C = S.charAt(1), S = S.charAt(0)), b = vo(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +S, +C, (m ? r : 0) + v * 1, (m ? i : 0) + y * 1), l += u, b) for (u = 0; u < b.length; u++) h.push(b[u]);
		r = h[h.length - 2], i = h[h.length - 1];
	} else console.log(c);
	return l = h.length, l < 6 ? (n.pop(), l = 0) : go(h), n.totalPoints = s + l, n;
}
function bo(e) {
	po(e[0]) && (e = [e]);
	var t = "", n = e.length, r, i, a, o;
	for (i = 0; i < n; i++) {
		for (o = e[i], t += "M" + ho(o[0]) + "," + ho(o[1]) + " C", r = o.length, a = 2; a < r; a++) t += ho(o[a++]) + "," + ho(o[a++]) + " " + ho(o[a++]) + "," + ho(o[a++]) + " " + ho(o[a++]) + "," + ho(o[a]) + " ";
		o.closed && (t += "z");
	}
	return t;
}
//#endregion
//#region node_modules/gsap/CustomEase.js
var xo, So, Co = function() {
	return xo || typeof window < "u" && (xo = window.gsap) && xo.registerPlugin && xo;
}, wo = function() {
	xo = Co(), xo ? (xo.registerEase("_CE", No.create), So = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
}, To = 0x56bc75e2d63100000, Eo = function(e) {
	return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3;
}, Do = 1, Oo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, ko = /[cLlsSaAhHvVtTqQ]/g, Ao = function(e) {
	var t = e.length, n = To, r;
	for (r = 1; r < t; r += 6) +e[r] < n && (n = +e[r]);
	return n;
}, jo = function(e, t, n) {
	!n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
	var r = e[0] * -1, i = -n, a = e.length, o = 1 / (+e[a - 2] + r), s = -t || (Math.abs(e[a - 1] - +e[1]) < .01 * (e[a - 2] - +e[0]) ? Ao(e) + i : +e[a - 1] + i), c;
	for (s = s ? 1 / s : -o, c = 0; c < a; c += 2) e[c] = (+e[c] + r) * o, e[c + 1] = (+e[c + 1] + i) * s;
}, Mo = function e(t, n, r, i, a, o, s, c, l, u, d) {
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
}, No = /*#__PURE__*/ function() {
	function e(e, t, n) {
		So || wo(), this.id = e, Do && this.setData(t, n);
	}
	var t = e.prototype;
	return t.setData = function(e, t) {
		t = t || {}, e = e || "0,0,1,1";
		var n = e.match(Oo), r = 1, i = [], a = [], o = t.precision || 1, s = o <= 1, c, l, u, d, f, p, m, h, g;
		if (this.data = e, (ko.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (n = yo(e)[0]), c = n.length, c === 4) n.unshift(0, 0), n.push(1, 1), c = 8;
		else if ((c - 2) % 6) throw "Invalid CustomEase";
		for ((+n[0] != 0 || +n[c - 2] != 1) && jo(n, t.height, t.originY), this.segment = n, d = 2; d < c; d += 6) l = {
			x: +n[d - 2],
			y: +n[d - 1]
		}, u = {
			x: +n[d + 4],
			y: +n[d + 5]
		}, i.push(l, u), Mo(l.x, l.y, +n[d], +n[d + 1], +n[d + 2], +n[d + 3], u.x, u.y, 1 / (o * 2e5), i, i.length - 1);
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
		}, this.ease.custom = this, this.id && xo && xo.registerEase(this.id, this.ease), this;
	}, t.getSVGData = function(t) {
		return e.getSVGData(this, t);
	}, e.create = function(t, n, r) {
		return new e(t, n, r).ease;
	}, e.register = function(e) {
		xo = e, wo();
	}, e.get = function(e) {
		return xo.parseEase(e);
	}, e.getSVGData = function(t, n) {
		n = n || {};
		var r = n.width || 100, i = n.height || 100, a = n.x || 0, o = (n.y || 0) + i, s = xo.utils.toArray(n.path)[0], c, l, u, d, f, p, m, h, g, _;
		if (n.invert && (i = -i, o = 0), typeof t == "string" && (t = xo.parseEase(t)), t.custom && (t = t.custom), t instanceof e) c = bo(_o([t.segment.slice(0)], r, 0, 0, -i, a, o));
		else {
			for (c = [a, o], m = Math.max(5, (n.precision || 1) * 200), d = 1 / m, m += 2, h = 5 / m, g = Eo(a + d * r), _ = Eo(o + t(d) * -i), l = (_ - o) / (g - a), u = 2; u < m; u++) f = Eo(a + u * d * r), p = Eo(o + t(u * d) * -i), (Math.abs((p - _) / (f - g) - l) > h || u === m - 1) && (c.push(g, _), l = (p - _) / (f - g)), g = f, _ = p;
			c = "M" + c.join(",");
		}
		return s && s.setAttribute("d", c), c;
	}, e;
}();
No.version = "3.15.0", No.headless = !0, Co() && xo.registerPlugin(No);
//#endregion
//#region src/modules/site-menu.ts
var Po = "[data-site-menu]", Fo = "[data-site-menu-panel]", Io = "[data-site-menu-toggle]", Lo = "[data-site-menu-toggle-label]", Ro = "[data-site-menu-toggle-label-text]", zo = "[data-site-menu-toggle-label-ghost]", Bo = "data-site-menu-toggle-label-text", Vo = "data-site-menu-toggle-label-ghost", Ho = "[data-site-menu-link]", Uo = "[data-site-menu-indicator]", Wo = "is-active", Go = "is-open", Ko = "is-ready", qo = "data-site-menu-open-label", Jo = "data-site-menu-closed-label", Yo = "data-site-menu-current-key", Xo = "data-site-menu-label", Zo = "data-site-menu-key", Qo = "data-site-menu-original-tabindex", $o = "CLOSE", es = "MENU", ts = .42, ns = {
	open: .513,
	close: .378,
	transition: .54
};
b.registerPlugin(No);
var rs = No.create("site-menu-panel", "0.7,0,0.08,1"), is = [], as = !1;
function os(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function ss(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return os(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function cs(e, t) {
	return t ? r(e, Zo) === t : !1;
}
function ls(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || cs(e, r(t, Yo) || ((n = document.documentElement.getAttribute(Yo)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(Yo)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = ss(e);
	return a ? a === os(window.location.pathname) : !1;
}
function us(e) {
	var t, n;
	return r(e, Xo) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function ds(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Wo) || e.classList.contains("w--current"))) == null ? e.links.find((t) => ls(t, e.root)) : t;
	return n ? us(n) : "";
}
function fs(e) {
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
			ds(e),
			r(e.root, Jo) || es,
			r(e.root, qo) || $o
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
function ps(e) {
	var t, n;
	let r = s(Ro, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(Bo, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function ms(e) {
	o(zo, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function hs(e, t = !0) {
	var n, i;
	let a = r(e.root, qo) || $o, o = r(e.root, Jo) || es, s = ds(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = ps(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), ms(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(Vo, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: ts,
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
function gs(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Qo);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Qo) && e.hasAttribute("tabindex") && e.setAttribute(Qo, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function _s(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Go, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), gs(e, t), hs(e, n);
}
function vs(e, t, n) {
	b.killTweensOf(e.panel), b.set(e.panel, { clearProps: "height" });
	let r = e.panel.getBoundingClientRect().height;
	if (!u()) return b.fromTo(e.panel, { height: n }, {
		height: r,
		duration: t ? ns.open : ns.close,
		ease: rs,
		onComplete: () => {
			b.set(e.panel, { clearProps: "height" });
		}
	});
}
function ys(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	_s(e, !0), vs(e, !0, t);
}
function bs(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return _s(e, !1), vs(e, !1, t);
}
function xs(e) {
	e.isOpen ? bs(e) : ys(e);
}
function Ss(e) {
	e.links.forEach((t) => {
		let n = ls(t, e.root), r = s(Uo, t);
		t.classList.toggle(Wo, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function Cs(e) {
	var t;
	let n = s(Fo, e), r = s(Io, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(Lo, r)) == null ? s(Lo, e) : t,
		links: o(Ho, e),
		isOpen: e.classList.contains(Go),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${is.length + 1}`), r.setAttribute("aria-controls", n.id), Ss(i), _s(i, i.isOpen, !1), i.cleanup.push(fs(i)), e.classList.add(Ko);
	let a = (e) => {
		e.preventDefault(), xs(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || bs(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (bs(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(Ho) || bs(i);
	}, d = () => {
		i.isHovered = !0, hs(i);
	}, f = () => {
		i.isHovered = !1, hs(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function ws(e = document) {
	if (as && e === document) return () => void 0;
	e === document && (as = !0);
	let t = o(Po, e).map(Cs).filter((e) => !!e);
	return is.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(Ko, Go);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(Ro, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), ms(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), gs(e, !0);
		});
	};
}
//#endregion
//#region src/modules/more-arrows.ts
var Ts = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function Es(e) {
	var t, n;
	if (!/^mehr\s+erfahren$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = Ts);
}
function Ds(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && Es(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(Es);
}
function Os() {
	Ds(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && Ds(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/outlined-buttons.ts
var ks = ".btn, .button-outlined";
function As() {
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
		e instanceof HTMLElement && e.matches(ks) && t(e), e.querySelectorAll(ks).forEach(t);
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
var js = ".werk_hero_slider", Ms = ".werk_hero_track";
function Ns(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function Ps(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function Fs(e) {
	let t = e.closest(js), n = t == null ? void 0 : t.querySelector(Ms);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = Ns(e, n), i = Ps(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function Is(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function Ls(e, t) {
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
function Rs(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function zs(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function Bs(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function Vs(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function Hs(e, t) {
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
function Us() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return Rs(e, t);
				let r = new Image();
				return r.src = e, Ls(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = Bs(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = zs(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || Vs(n) ? "critical" : "warm" : i,
			load: (e) => Ls(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && Fs(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = zs(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = Bs(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => Hs(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", Hs(r, e))
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
			let t = zs(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => Is(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function Ws(e) {
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
async function Gs(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await Is(a.shift().load(n.signal), n.signal);
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
var Ks = /* @__PURE__ */ new WeakSet(), qs = 6800, Js = 600, Ys = 500, Xs = 1300;
function Zs(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function Qs(e) {
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
function $s(e, t) {
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
function ec(e) {
	let t = u(), n = !1, r = !1, i = 0, a = 0, o, s = new Promise((e) => {
		o = e;
	}), c = (t) => {
		if (n) return;
		let r = Math.min(1, (t - a) / qs);
		$s(e, (.6 * r + .4 * Zs(r)) * 100), r === 1 ? o() : i = window.requestAnimationFrame(c);
	};
	return {
		start: () => {
			r || n || (r = !0, a = performance.now(), t ? ($s(e, 100), o()) : i = window.requestAnimationFrame(c));
		},
		complete: s,
		stop: () => {
			n = !0, window.cancelAnimationFrame(i);
		}
	};
}
function tc(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function nc(e) {
	return document.readyState === "complete" || e.aborted ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			window.removeEventListener("load", n), e.removeEventListener("abort", n), t();
		};
		window.addEventListener("load", n, { once: !0 }), e.addEventListener("abort", n, { once: !0 });
	});
}
async function rc(e, t) {
	t.aborted || (document.documentElement.classList.add(T), e.classList.add("is-fading"), await tc(u() ? 0 : Ys, t), !t.aborted && (e.classList.add("is-curtain"), await tc(u() ? 0 : Xs, t)));
}
function ic() {
	var e, t;
	let n = window.__sitePreloader;
	if (!(n != null && n.active) || Ks.has(n)) return;
	Ks.add(n);
	let r = document.querySelector(w);
	if (!r) {
		n.release();
		return;
	}
	let i = new AbortController(), a = ec(r);
	(e = n.allowExit) == null || e.call(n), ((t = n.introReady) == null ? Promise.resolve() : t).then(() => {
		n.active && a.start();
	}), n.cleanup.push(() => {
		i.abort(), a.stop();
		let e = r.querySelectorAll(".site-preloader__track");
		e.length && b.killTweensOf(e);
	});
	let o = async () => {
		if (await Ws(i.signal), !n.active) return;
		let e = Us(), t = e.filter((e) => e.priority === "critical");
		await Promise.all(t.map(async (e) => {
			await Is(Promise.resolve().then(() => e.load(i.signal)), i.signal);
		})), n.active && (await Qs(i.signal), n.active && (await n.introReady, n.active && (await Promise.all([a.complete, nc(i.signal)]), n.active && (await tc(u() ? 0 : Math.max(0, C - (Date.now() - n.startedAt)), i.signal), n.active && (await tc(u() ? 0 : Js, i.signal), n.active && (await rc(r, i.signal), n.active && (n.release(), Gs(e))))))));
	}, s = () => {
		o().catch(n.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var ac = !1, oc = !1;
function sc() {
	if (oc || u()) return;
	oc = !0;
	let e, t = () => {
		let t = window.lenis;
		if (ac || !window.__siteLenisManaged || !t) return;
		ac = !0, b.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		b.ticker.add(n), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			b.ticker.remove(n), t.off("scroll", $.update), ac = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), ac || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/main.ts
var cc = !1;
ic(), Ba(), Ar(), sc();
function lc() {
	if (cc) return;
	cc = !0;
	let e = O();
	va({ i18n: e }), Si({ i18n: e }), io(), ws(), re(), _(), S(), Os(), As(), window.SiteInteractions = {
		openModal: ma,
		openContentModal: pa,
		closeModal: ha,
		openLightbox: vi,
		closeLightbox: yi
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", lc, { once: !0 }) : lc();
//#endregion

//# sourceMappingURL=site-interactions.js.map