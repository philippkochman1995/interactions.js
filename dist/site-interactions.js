import { _ as e, a as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, y } from "./site-interactions-Cou7uu3t.js";
import { t as b } from "./site-interactions-BxJ-FVg3.js";
import { t as x } from "./site-interactions-CKkKncuX.js";
import { a as S, c as C, i as w, l as ee, n as T, o as E, r as D, s as te, t as O, u as k } from "./site-interactions-CX0xCrMJ.js";
//#region src/modules/i18n.ts
var ne = {};
function re(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : Object.entries(e).reduce((e, [t, n]) => (a(t) && a(n) && (e[t.trim()] = n.trim()), e), {});
}
function A(e = document) {
	var t, n;
	ne = {};
	let r = s("[data-site-i18n]", e), i = (t = r == null || (n = r.textContent) == null ? void 0 : n.trim()) == null ? "" : t;
	return i && (ne = re(v(i))), {
		get values() {
			return { ...ne };
		},
		t: ie
	};
}
function ie(e, t) {
	let n = e.trim(), r = ne[n];
	return a(r) ? r.trim() : t.trim();
}
//#endregion
//#region src/modules/language-picker.ts
var ae = ".site-menu__languages", oe = ".site-menu__language", se = "site-menu__language-indicator";
function ce(e) {
	var t;
	return (t = e.find((e) => e.classList.contains("site-menu__language--active") || e.getAttribute("aria-current") === "page" || e.classList.contains("w--current"))) == null ? e[0] : t;
}
function le(e, t, n) {
	let r = e.getBoundingClientRect(), i = n.getBoundingClientRect();
	t.style.width = `${i.width}px`, t.style.transform = `translate3d(${i.left - r.left}px, 0, 0)`, t.style.top = `${i.bottom - r.top + 1}px`;
}
function ue(e) {
	let t = Array.from(e.querySelectorAll(oe)), n = ce(t);
	if (!n || e.querySelector(`.${se}`)) return;
	let r = document.createElement("span");
	r.className = se, r.setAttribute("aria-hidden", "true"), e.appendChild(r);
	let i = (t) => le(e, r, t), a = () => {
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
function de() {
	document.querySelectorAll(ae).forEach(ue);
}
//#endregion
//#region node_modules/gsap/Observer.js
function j(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function fe(e, t, n) {
	return t && j(e.prototype, t), n && j(e, n), e;
}
var M, pe, N, P, me, he, ge, _e, ve, ye, F, be, xe, Se = function() {
	return M || typeof window < "u" && (M = window.gsap) && M.registerPlugin && M;
}, I = 1, L = [], R = [], z = [], Ce = Date.now, B = function(e, t) {
	return t;
}, we = function() {
	var e = ve.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, R), r.push.apply(r, z), R = n, z = r, B = function(e, n) {
		return t[e](n);
	};
}, Te = function(e, t) {
	return ~z.indexOf(e) && z[z.indexOf(e) + 1][t];
}, Ee = function(e) {
	return !!~ye.indexOf(e);
}, V = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, H = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, U = "scrollLeft", De = "scrollTop", Oe = function() {
	return F && F.isPressed || R.cache++;
}, ke = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			I && (N.history.scrollRestoration = "manual");
			var i = F && F.isPressed;
			r = n.v = Math.round(r) || (F && F.iOS ? 1 : 0), e(r), n.cacheID = R.cache, i && B("ss", r);
		} else (t || R.cache !== n.cacheID || B("ref")) && (n.cacheID = R.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Ae = {
	s: U,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: ke(function(e) {
		return arguments.length ? N.scrollTo(e, je.sc()) : N.pageXOffset || P[U] || me[U] || he[U] || 0;
	})
}, je = {
	s: De,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Ae,
	sc: ke(function(e) {
		return arguments.length ? N.scrollTo(Ae.sc(), e) : N.pageYOffset || P[De] || me[De] || he[De] || 0;
	})
}, Me = function(e, t) {
	return (t && t._ctx && t._ctx.selector || M.utils.toArray)(e)[0] || (typeof e == "string" && M.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Ne = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Pe = function(e, t) {
	var n = t.s, r = t.sc;
	Ee(e) && (e = P.scrollingElement || me);
	var i = R.indexOf(e), a = r === je.sc ? 1 : 2;
	!~i && (i = R.push(e) - 1), R[i + a] || V(e, "scroll", Oe);
	var o = R[i + a], s = o || (R[i + a] = ke(Te(e, n), !0) || (Ee(e) ? r : ke(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = M.getProperty(e, "scrollBehavior") === "smooth"), s;
}, Fe = function(e, t, n) {
	var r = e, i = e, a = Ce(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = Ce();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = Ce();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, W = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Ie = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Le = function() {
	ve = M.core.globals().ScrollTrigger, ve && ve.core && we();
}, Re = function(e) {
	return M = e || Se(), !pe && M && typeof document < "u" && document.body && (N = window, P = document, me = P.documentElement, he = P.body, ye = [
		N,
		P,
		me,
		he
	], M.utils.clamp, xe = M.core.context || function() {}, _e = "onpointerenter" in he ? "pointer" : "mouse", ge = G.isTouch = N.matchMedia && N.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in N || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, be = G.eventTypes = ("ontouchstart" in me ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in me ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return I = 0;
	}, 500), pe = 1), ve || Le(), pe;
};
Ae.op = je, R.cache = 0;
var G = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		pe || Re(M) || console.warn("Please gsap.registerPlugin(Observer)"), ve || Le();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, ee = e.onToggleX, T = e.onToggleY, E = e.onHover, D = e.onHoverEnd, te = e.onMove, O = e.ignoreCheck, k = e.isNormalizer, ne = e.onGestureStart, re = e.onGestureEnd, A = e.onWheel, ie = e.onEnable, ae = e.onDisable, oe = e.onClick, se = e.scrollSpeed, ce = e.capture, le = e.allowClicks, ue = e.lockAxis, de = e.onLockAxis;
		this.target = i = Me(i) || me, this.vars = e, u && (u = M.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, se = se || 1, r = r || "wheel,touch,pointer", o = o !== !1, a || (a = parseFloat(N.getComputedStyle(he).lineHeight) || 22);
		var j, fe, ye, Se, I, R, z, B = this, we = 0, Te = 0, U = e.passive || !s && e.passive !== !1, De = Pe(i, Ae), ke = Pe(i, je), G = De(), K = ke(), ze = ~r.indexOf("touch") && !~r.indexOf("pointer") && be[0] === "pointerdown", q = Ee(i), J = i.ownerDocument || P, Y = [
			0,
			0,
			0
		], X = [
			0,
			0,
			0
		], Be = 0, Ve = function() {
			return Be = Ce();
		}, He = function(e, t) {
			return (B.event = e) && u && Ne(e.target, u) || t && ze && e.pointerType !== "touch" || O && O(e, t);
		}, Ue = function() {
			B._vx.reset(), B._vy.reset(), fe.pause(), c && c(B);
		}, We = function() {
			var e = B.deltaX = Ie(Y), n = B.deltaY = Ie(X), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(B, e, n, Y, X), r && (v && B.deltaX > 0 && v(B), y && B.deltaX < 0 && y(B), S && S(B), ee && B.deltaX < 0 != we < 0 && ee(B), we = B.deltaX, Y[0] = Y[1] = Y[2] = 0), i && (x && B.deltaY > 0 && x(B), b && B.deltaY < 0 && b(B), C && C(B), T && B.deltaY < 0 != Te < 0 && T(B), Te = B.deltaY, X[0] = X[1] = X[2] = 0), (Se || ye) && (te && te(B), ye && (p && ye === 1 && p(B), h && h(B), ye = 0), Se = !1), R && !(R = !1) && de && de(B), I && (A(B), I = !1), j = 0;
		}, Ge = function(e, t, n) {
			Y[n] += e, X[n] += t, B._vx.update(e), B._vy.update(t), o ? j || (j = requestAnimationFrame(We)) : We();
		}, Ke = function(e, t) {
			ue && !z && (B.axis = z = Math.abs(e) > Math.abs(t) ? "x" : "y", R = !0), z !== "y" && (Y[2] += e, B._vx.update(e, !0)), z !== "x" && (X[2] += t, B._vy.update(t, !0)), o ? j || (j = requestAnimationFrame(We)) : We();
		}, qe = function(e) {
			if (!He(e, 1)) {
				e = W(e, s);
				var t = e.clientX, r = e.clientY, i = t - B.x, a = r - B.y, o = B.isDragging;
				B.x = t, B.y = r, (o || (i || a) && (Math.abs(B.startX - t) >= n || Math.abs(B.startY - r) >= n)) && (ye || (ye = o ? 2 : 1), o || (B.isDragging = !0), Ke(i, a));
			}
		}, Je = B.onPress = function(e) {
			He(e, 1) || e && e.button || (B.axis = z = null, fe.pause(), B.isPressed = !0, e = W(e), we = Te = 0, B.startX = B.x = e.clientX, B.startY = B.y = e.clientY, B._vx.reset(), B._vy.reset(), V(k ? i : J, be[1], qe, U, !0), B.deltaX = B.deltaY = 0, g && g(B));
		}, Ye = B.onRelease = function(e) {
			if (!He(e, 1)) {
				H(k ? i : J, be[1], qe, !0);
				var t = !isNaN(B.y - B.startY), n = B.isDragging, r = n && (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3), a = W(e);
				!r && t && (B._vx.reset(), B._vy.reset(), s && le && M.delayedCall(.08, function() {
					if (Ce() - Be > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (J.createEvent) {
							var t = J.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, N, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), B.isDragging = B.isGesturing = B.isPressed = !1, c && n && !k && fe.restart(!0), ye && We(), m && n && m(B), _ && _(B, r);
			}
		}, Xe = function(e) {
			return e.touches && e.touches.length > 1 && (B.isGesturing = !0) && ne(e, B.isDragging);
		}, Ze = function() {
			return (B.isGesturing = !1) || re(B);
		}, Qe = function(e) {
			if (!He(e)) {
				var t = De(), n = ke();
				Ge((t - G) * se, (n - K) * se, 1), G = t, K = n, c && fe.restart(!0);
			}
		}, $e = function(e) {
			if (!He(e)) {
				e = W(e, s), A && (I = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? N.innerHeight : 1) * d;
				Ge(e.deltaX * t, e.deltaY * t, 0), c && !k && fe.restart(!0);
			}
		}, et = function(e) {
			if (!He(e)) {
				var t = e.clientX, n = e.clientY, r = t - B.x, i = n - B.y;
				B.x = t, B.y = n, Se = !0, c && fe.restart(!0), (r || i) && Ke(r, i);
			}
		}, tt = function(e) {
			B.event = e, E(B);
		}, nt = function(e) {
			B.event = e, D(B);
		}, rt = function(e) {
			return He(e) || W(e, s) && oe(B);
		};
		fe = B._dc = M.delayedCall(l || .25, Ue).pause(), B.deltaX = B.deltaY = 0, B._vx = Fe(0, 50, !0), B._vy = Fe(0, 50, !0), B.scrollX = De, B.scrollY = ke, B.isDragging = B.isGesturing = B.isPressed = !1, xe(this), B.enable = function(e) {
			return B.isEnabled || (V(q ? J : i, "scroll", Oe), r.indexOf("scroll") >= 0 && V(q ? J : i, "scroll", Qe, U, ce), r.indexOf("wheel") >= 0 && V(i, "wheel", $e, U, ce), (r.indexOf("touch") >= 0 && ge || r.indexOf("pointer") >= 0) && (V(i, be[0], Je, U, ce), V(J, be[2], Ye), V(J, be[3], Ye), le && V(i, "click", Ve, !0, !0), oe && V(i, "click", rt), ne && V(J, "gesturestart", Xe), re && V(J, "gestureend", Ze), E && V(i, _e + "enter", tt), D && V(i, _e + "leave", nt), te && V(i, _e + "move", et)), B.isEnabled = !0, B.isDragging = B.isGesturing = B.isPressed = Se = ye = !1, B._vx.reset(), B._vy.reset(), G = De(), K = ke(), e && e.type && Je(e), ie && ie(B)), B;
		}, B.disable = function() {
			B.isEnabled && (L.filter(function(e) {
				return e !== B && Ee(e.target);
			}).length || H(q ? J : i, "scroll", Oe), B.isPressed && (B._vx.reset(), B._vy.reset(), H(k ? i : J, be[1], qe, !0)), H(q ? J : i, "scroll", Qe, ce), H(i, "wheel", $e, ce), H(i, be[0], Je, ce), H(J, be[2], Ye), H(J, be[3], Ye), H(i, "click", Ve, !0), H(i, "click", rt), H(J, "gesturestart", Xe), H(J, "gestureend", Ze), H(i, _e + "enter", tt), H(i, _e + "leave", nt), H(i, _e + "move", et), B.isEnabled = B.isPressed = B.isDragging = !1, ae && ae(B));
		}, B.kill = B.revert = function() {
			B.disable();
			var e = L.indexOf(B);
			e >= 0 && L.splice(e, 1), F === B && (F = 0);
		}, L.push(B), k && Ee(i) && (F = B), B.enable(f);
	}, fe(e, [{
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
}, G.register = Re, G.getAll = function() {
	return L.slice();
}, G.getById = function(e) {
	return L.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, Se() && M.registerPlugin(G);
//#endregion
//#region node_modules/gsap/ScrollTrigger.js
var K, ze, q, J, Y, X, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt = 1, ht = Date.now, gt = ht(), _t = 0, vt = 0, yt = function(e, t, n) {
	var r = Ft(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, bt = function(e, t) {
	return t && (!Ft(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, xt = function e() {
	return vt && requestAnimationFrame(e);
}, St = function() {
	return qe = 1;
}, Ct = function() {
	return qe = 0;
}, wt = function(e) {
	return e;
}, Tt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, Et = function() {
	return typeof window < "u";
}, Dt = function() {
	return K || Et() && (K = window.gsap) && K.registerPlugin && K;
}, Ot = function(e) {
	return !!~Be.indexOf(e);
}, kt = function(e) {
	return (e === "Height" ? ut : q["inner" + e]) || Y["client" + e] || X["client" + e];
}, At = function(e) {
	return Te(e, "getBoundingClientRect") || (Ot(e) ? function() {
		return nr.width = q.innerWidth, nr.height = ut, nr;
	} : function() {
		return on(e);
	});
}, jt = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = Te(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? kt(i) : e["client" + i]) || 0;
	};
}, Mt = function(e, t) {
	return !t || ~z.indexOf(e) ? At(e) : function() {
		return nr;
	};
}, Nt = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = Te(e, n)) ? a() - At(e)()[i] : Ot(e) ? (Y[n] || X[n]) - kt(r) : e[n] - e["offset" + r]);
}, Pt = function(e, t) {
	for (var n = 0; n < Qe.length; n += 3) (!t || ~t.indexOf(Qe[n + 1])) && e(Qe[n], Qe[n + 1], Qe[n + 2]);
}, Ft = function(e) {
	return typeof e == "string";
}, It = function(e) {
	return typeof e == "function";
}, Lt = function(e) {
	return typeof e == "number";
}, Rt = function(e) {
	return typeof e == "object";
}, zt = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, Bt = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, Vt = Math.abs, Ht = "left", Ut = "top", Wt = "right", Gt = "bottom", Kt = "width", qt = "height", Jt = "Right", Yt = "Left", Xt = "Top", Zt = "Bottom", Z = "padding", Qt = "margin", $t = "Width", en = "Height", tn = "px", nn = function(e) {
	return q.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, rn = function(e) {
	var t = nn(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, an = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, on = function(e, t) {
	var n = t && nn(e)[Je] !== "matrix(1, 0, 0, 1, 0, 0)" && K.to(e, {
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
}, sn = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, cn = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, ln = function(e) {
	return function(t) {
		return K.utils.snap(cn(e), t);
	};
}, un = function(e) {
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
}, dn = function(e) {
	return function(t, n) {
		return un(cn(e))(t, n.direction);
	};
}, fn = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, pn = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, mn = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, hn = function(e, t, n) {
	n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, gn = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, _n = {
	toggleActions: "play",
	anticipatePin: 0
}, vn = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, yn = function(e, t) {
	if (Ft(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in vn ? vn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, bn = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = J.createElement("div"), m = Ot(n) || Te(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? X : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === je ? Wt : Gt) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], xn(p, 0, r, _), p;
}, xn = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + $t] = 1, i["border" + o + $t] = 0, i[n.p] = t + "px", K.set(e, i);
}, Q = [], Sn = {}, Cn, wn = function() {
	return ht() - _t > 34 && (Cn || (Cn = requestAnimationFrame(qn)));
}, Tn = function() {
	(!nt || !nt.isPressed || nt.startX > X.clientWidth) && (R.cache++, nt ? Cn || (Cn = requestAnimationFrame(qn)) : qn(), _t || jn("scrollStart"), _t = ht());
}, En = function() {
	at = q.innerWidth, it = q.innerHeight;
}, Dn = function(e) {
	R.cache++, (e === !0 || !Ke && !tt && !J.fullscreenElement && !J.webkitFullscreenElement && (!rt || at !== q.innerWidth || Math.abs(q.innerHeight - it) > q.innerHeight * .25)) && Ve.restart(!0);
}, On = {}, kn = [], An = function e() {
	return mn($, "scrollEnd", e) || Un(!0);
}, jn = function(e) {
	return On[e] && On[e].map(function(e) {
		return e();
	}) || kn;
}, Mn = [], Nn = function(e) {
	for (var t = 0; t < Mn.length; t += 5) (!e || Mn[t + 4] && Mn[t + 4].query === e) && (Mn[t].style.cssText = Mn[t + 1], Mn[t].getBBox && Mn[t].setAttribute("transform", Mn[t + 2] || ""), Mn[t + 3].uncache = 1);
}, Pn = function() {
	return R.forEach(function(e) {
		return It(e) && ++e.cacheID && (e.rec = e());
	});
}, Fn = function(e, t) {
	var n;
	for (Ye = 0; Ye < Q.length; Ye++) n = Q[Ye], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	dt = !0, t && Nn(t), t || jn("revert");
}, In = function(e, t) {
	R.cache++, (t || !Ln) && R.forEach(function(e) {
		return It(e) && e.cacheID++ && (e.rec = 0);
	}), Ft(e) && (q.history.scrollRestoration = ct = e);
}, Ln, Rn = 0, zn, Bn = function() {
	if (zn !== Rn) {
		var e = zn = Rn;
		requestAnimationFrame(function() {
			return e === Rn && Un(!0);
		});
	}
}, Vn = function() {
	X.appendChild(lt), ut = !nt && lt.offsetHeight || q.innerHeight, X.removeChild(lt);
}, Hn = function(e) {
	return He(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Un = function(e, t) {
	if (Y = J.documentElement, X = J.body, Be = [
		q,
		J,
		Y,
		X
	], _t && !e && !dt) {
		pn($, "scrollEnd", An);
		return;
	}
	Vn(), Ln = $.isRefreshing = !0, dt || Pn();
	var n = jn("refreshInit");
	$e && $.sort(), t || Fn(), R.forEach(function(e) {
		It(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
	}), Q.slice(0).forEach(function(e) {
		return e.refresh();
	}), dt = !1, Q.forEach(function(e) {
		if (e._subPinOffset && e.pin) {
			var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
			e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
		}
	}), ft = 1, Hn(!0), Q.forEach(function(e) {
		var t = Nt(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
		(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
	}), Hn(!1), ft = 0, n.forEach(function(e) {
		return e && e.render && e.render(-1);
	}), R.forEach(function(e) {
		It(e) && (e.smooth && requestAnimationFrame(function() {
			return e.target.style.scrollBehavior = "smooth";
		}), e.rec && e(e.rec));
	}), In(ct, 1), Ve.pause(), Rn++, Ln = 2, qn(2), Q.forEach(function(e) {
		return It(e.vars.onRefresh) && e.vars.onRefresh(e);
	}), Ln = $.isRefreshing = !1, jn("refresh");
}, Wn = 0, Gn = 1, Kn, qn = function(e) {
	if (e === 2 || !Ln && !dt) {
		$.isUpdating = !0, Kn && Kn.update(0);
		var t = Q.length, n = ht(), r = n - gt >= 50, i = t && Q[0].scroll();
		if (Gn = Wn > i ? -1 : 1, Ln || (Wn = i), r && (_t && !qe && n - _t > 200 && (_t = 0, jn("scrollEnd")), We = gt, gt = n), Gn < 0) {
			for (Ye = t; Ye-- > 0;) Q[Ye] && Q[Ye].update(0, r);
			Gn = 1;
		} else for (Ye = 0; Ye < t; Ye++) Q[Ye] && Q[Ye].update(0, r);
		$.isUpdating = !1;
	}
	Cn = 0;
}, Jn = [
	Ht,
	Ut,
	Gt,
	Wt,
	Qt + Zt,
	Qt + Jt,
	Qt + Xt,
	Qt + Yt,
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
], Yn = Jn.concat([
	Kt,
	qt,
	"boxSizing",
	"max" + $t,
	"max" + en,
	"position",
	Qt,
	Z,
	Z + Xt,
	Z + Jt,
	Z + Zt,
	Z + Yt
]), Xn = function(e, t, n) {
	$n(n);
	var r = e._gsap;
	if (r.spacerIsNative) $n(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Zn = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Jn.length, a = t.style, o = e.style, s; i--;) s = Jn[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[Gt] = o[Wt] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Kt] = sn(e, Ae) + tn, a[qt] = sn(e, je) + tn, a[Z] = o[Qt] = o[Ut] = o[Ht] = "0", $n(r), o[Kt] = o["max" + $t] = n[Kt], o[qt] = o["max" + en] = n[qt], o[Z] = n[Z], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Qn = /([A-Z])/g, $n = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Qn, "-$1").toLowerCase());
	}
}, er = function(e) {
	for (var t = Yn.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Yn[i], n[Yn[i]]);
	return r.t = e, r;
}, tr = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, nr = {
	left: 0,
	top: 0
}, rr = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	It(e) && (e = e(s)), Ft(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? yn("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), Lt(e)) f && (e = K.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && xn(o, n, r, !0);
	else {
		It(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Me(t, s) || X, y = on(_) || {}, (!y || !y.left && !y.top) && nn(_).display === "none" && (S = _.style.display, _.style.display = "block", y = on(_), S ? _.style.display = S : _.style.removeProperty("display")), b = yn(v[0], y[r.d]), x = yn(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && xn(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, xn(a, C, r, w && C > 20 || !w && (u ? Math.max(X[h], Y[h]) : a.parentNode[h]) <= C + 1), u && (c = on(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + tn));
	}
	return f && _ && (h = on(_), f.seek(d), g = on(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, ir = /(webkit|moz|length|cssText|inset)/i, ar = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === X) {
			for (a in e._stOrig = i.cssText, o = nn(e), o) !+a && !ir.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		K.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, or = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, sr = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, K.set(e, r);
}, cr = function(e, t) {
	var n = Pe(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o = o || n();
		var f = or(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s = s || i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			R.cache++, t.tween && qn();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = K.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, pn(e, "wheel", n.wheelHandler), $.isTouch && pn(e, "touchmove", n.wheelHandler), i;
}, $ = /*#__PURE__*/ function() {
	function e(t, n) {
		ze || e.register(K) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), st(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !vt) {
			this.update = this.refresh = this.kill = wt;
			return;
		}
		t = an(Ft(t) || Lt(t) || t.nodeType ? { trigger: t } : t, _n);
		var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ae : je, ee = !l && l !== 0, T = Me(t.scroller || q), E = K.core.getCache(T), D = Ot(T), te = ("pinType" in t ? t.pinType : Te(T, "pinType") || D && "fixed") === "fixed", O = [
			t.onEnter,
			t.onLeave,
			t.onEnterBack,
			t.onLeaveBack
		], k = ee && t.toggleActions.split(" "), ne = "markers" in t ? t.markers : _n.markers, re = D ? 0 : parseFloat(nn(T)["border" + w.p2 + $t]) || 0, A = this, ie = t.onRefreshInit && function() {
			return t.onRefreshInit(A);
		}, ae = jt(T, D, w), oe = Mt(T, D), se = 0, ce = 0, le = 0, ue = Pe(T, w), de, j, fe, M, pe, N, P, me, he, ge, _e, ve, ye, F, be, xe, Se, I, L, Ce, B, we, Ee, V, H, U, De, Oe, ke, Ne, Fe, W, Ie, Le, Re, G, ze, Be, Ve;
		if (A._startClamp = A._endClamp = !1, A._dir = w, m *= 45, A.scroller = T, A.scroll = x ? x.time.bind(x) : ue, M = ue(), A.vars = t, n = n || t.animation, "refreshPriority" in t && ($e = 1, t.refreshPriority === -9999 && (Kn = A)), E.tweenScroll = E.tweenScroll || {
			top: cr(T, je),
			left: cr(T, Ae)
		}, A.tweenTo = de = E.tweenScroll[w.p], A.scrubDuration = function(e) {
			Ie = Lt(e) && e, Ie ? W ? W.duration(e) : W = K.to(n, {
				ease: "expo",
				totalProgress: "+=0",
				inherit: !1,
				duration: Ie,
				paused: !0,
				onComplete: function() {
					return h && h(A);
				}
			}) : (W && W.progress(1).kill(), W = 0);
		}, n && (n.vars.lazy = !1, n._initted && !A.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), A.animation = n.pause(), n.scrollTrigger = A, A.scrubDuration(l), Ne = 0, o || (o = n.vars.id)), v && ((!Rt(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in X.style && K.set(D ? [X, Y] : T, { scrollBehavior: "auto" }), R.forEach(function(e) {
			return It(e) && e.target === (D ? J.scrollingElement || Y : T) && (e.smooth = !1);
		}), fe = It(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? ln(n) : v.snapTo === "labelsDirectional" ? dn(n) : v.directional === !1 ? K.utils.snap(v.snapTo) : function(e, t) {
			return un(v.snapTo)(e, ht() - ce < 500 ? 0 : t.direction);
		}, Le = v.duration || {
			min: .1,
			max: 2
		}, Le = Rt(Le) ? Ue(Le.min, Le.max) : Ue(Le, Le), Re = K.delayedCall(v.delay || Ie / 2 || .1, function() {
			var e = ue(), t = ht() - ce < 500, r = de.tween;
			if ((t || Math.abs(A.getVelocity()) < 10) && !r && !qe && se !== e) {
				var i = (e - N) / F, a = n && !ee ? n.totalProgress() : i, o = t ? 0 : (a - Fe) / (ht() - We) * 1e3 || 0, s = K.utils.clamp(-i, 1 - i, Vt(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
				if (l = fe(c, A), Lt(l) || (l = c), u = Math.max(0, Math.round(N + l * F)), e <= P && e >= N && u !== e) {
					if (r && !r._initted && r.data <= Vt(u - e)) return;
					v.inertia === !1 && (s = l - i), de(u, {
						duration: Le(Vt(Math.max(Vt(c - a), Vt(l - a)) * .185 / o / .05 || 0)),
						ease: v.ease || "power3",
						data: Vt(u - e),
						onInterrupt: function() {
							return Re.restart(!0) && p && Bt(A, p);
						},
						onComplete: function() {
							A.update(), se = ue(), n && !ee && (W ? W.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Ne = Fe = n && !ee ? n.totalProgress() : A.progress, g && g(A), m && Bt(A, m);
						}
					}, e, s * F, u - e - s * F), f && Bt(A, f, de.tween);
				}
			} else A.isActive && se !== e && Re.restart(!0);
		}).pause()), o && (Sn[o] = A), u = A.trigger = Me(u || d !== !0 && d), Ve = u && u._gsap && u._gsap.stRevert, Ve && (Ve = Ve(A)), d = d === !0 ? u : Me(d), Ft(a) && (a = {
			targets: u,
			className: a
		}), d && (f === !1 || f === Qt || (f = !f && d.parentNode && d.parentNode.style && nn(d.parentNode).display === "flex" ? !1 : Z), A.pin = d, j = K.core.getCache(d), j.spacer ? be = j.pinState : (b && (b = Me(b), b && !b.nodeType && (b = b.current || b.nativeElement), j.spacerIsNative = !!b, b && (j.spacerState = er(b))), j.spacer = I = b || J.createElement("div"), I.classList.add("pin-spacer"), o && I.classList.add("pin-spacer-" + o), j.pinState = be = er(d)), t.force3D !== !1 && K.set(d, { force3D: !0 }), A.spacer = I = j.spacer, ke = nn(d), V = ke[f + w.os2], Ce = K.getProperty(d), B = K.quickSetter(d, w.a, tn), Zn(d, I, ke), Se = er(d)), ne) {
			ve = Rt(ne) ? an(ne, gn) : gn, ge = bn("scroller-start", o, T, w, ve, 0), _e = bn("scroller-end", o, T, w, ve, 0, ge), L = ge["offset" + w.op.d2];
			var Ge = Me(Te(T, "content") || T);
			me = this.markerStart = bn("start", o, Ge, w, ve, L, 0, x), he = this.markerEnd = bn("end", o, Ge, w, ve, L, 0, x), x && (Be = K.quickSetter([me, he], w.a, tn)), !te && !(z.length && Te(T, "fixedMarkers") === !0) && (rn(D ? X : T), K.set([ge, _e], { force3D: !0 }), U = K.quickSetter(ge, w.a, tn), Oe = K.quickSetter(_e, w.a, tn));
		}
		if (x) {
			var Je = x.vars.onUpdate, Xe = x.vars.onUpdateParams;
			x.eventCallback("onUpdate", function() {
				A.update(0, 0, 1), Je && Je.apply(x, Xe || []);
			});
		}
		if (A.previous = function() {
			return Q[Q.indexOf(A) - 1];
		}, A.next = function() {
			return Q[Q.indexOf(A) + 1];
		}, A.revert = function(e, t) {
			if (!t) return A.kill(!0);
			var r = e !== !1 || !A.enabled, i = Ke;
			r !== A.isReverted && (r && (G = Math.max(ue(), A.scroll.rec || 0), le = A.progress, ze = n && n.progress()), me && [
				me,
				he,
				ge,
				_e
			].forEach(function(e) {
				return e.style.display = r ? "none" : "block";
			}), r && (Ke = A, A.update(r)), d && (!y || !A.isActive) && (r ? Xn(d, I, be) : Zn(d, I, nn(d), H)), r || A.update(r), Ke = i, A.isReverted = r);
		}, A.refresh = function(r, i, a, o) {
			if (!((Ke || !A.enabled) && !i)) {
				if (d && r && _t) {
					pn(e, "scrollEnd", An);
					return;
				}
				!Ln && ie && ie(A), Ke = A, de.tween && !a && (de.tween.kill(), de.tween = 0), W && W.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
					return e.vars.immediateRender && e.render(0, !0, !0);
				}) : n.vars.immediateRender && n.render(0, !0, !0)), A.isReverted || A.revert(!0, !0), A._subPinOffset = !1;
				var s = ae(), l = oe(), m = x ? x.duration() : Nt(T, w), h = F <= .01 || !F, g = 0, _ = o || 0, v = Rt(a) ? a.end : t.end, b = t.endTrigger || u, S = Rt(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = A.pinnedContainer = t.pinnedContainer && Me(t.pinnedContainer, A), E = u && Math.max(0, Q.indexOf(A)) || 0, O = E, k, j, fe, ve, L, R, z, B, Te, V, U, Oe, ke;
				for (ne && Rt(a) && (Oe = K.getProperty(ge, w.p), ke = K.getProperty(_e, w.p)); O-- > 0;) R = Q[O], R.end || R.refresh(0, 1) || (Ke = A), z = R.pin, z && (z === u || z === d || z === C) && !R.isReverted && (V || (V = []), V.unshift(R), R.revert(!0, !0)), R !== Q[O] && (E--, O--);
				for (It(S) && (S = S(A)), S = yt(S, "start", A), N = rr(S, u, s, w, ue(), me, ge, A, l, re, te, m, x, A._startClamp && "_startClamp") || (d ? -.001 : 0), It(v) && (v = v(A)), Ft(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ft(S) ? S.split(" ")[0] : "") + v : (g = yn(v.substr(2), s), v = Ft(S) ? S : (x ? K.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, N) : N) + g, b = u)), v = yt(v, "end", A), P = Math.max(N, rr(v || (b ? "100% 0" : m), b, s, w, ue() + g, he, _e, A, l, re, te, m, x, A._endClamp && "_endClamp")) || -.001, g = 0, O = E; O--;) R = Q[O] || {}, z = R.pin, z && R.start - R._pinPush <= N && !x && R.end > 0 && (k = R.end - (A._startClamp ? Math.max(0, R.start) : R.start), (z === u && R.start - R._pinPush < N || z === C) && isNaN(S) && (g += k * (1 - R.progress)), z === d && (_ += k));
				if (N += g, P += g, A._startClamp && (A._startClamp += g), A._endClamp && !Ln && (A._endClamp = P || -.001, P = Math.min(P, Nt(T, w))), F = P - N || (N -= .01) && .001, h && (le = K.utils.clamp(0, 1, K.utils.normalize(N, P, G))), A._pinPush = _, me && g && (k = {}, k[w.a] = "+=" + g, C && (k[w.p] = "-=" + ue()), K.set([me, he], k)), d && !(ft && A.end >= Nt(T, w))) k = nn(d), ve = w === je, fe = ue(), we = parseFloat(Ce(w.a)) + _, !m && P > 1 && (U = (D ? J.scrollingElement || Y : T).style, U = {
					style: U,
					value: U["overflow" + w.a.toUpperCase()]
				}, D && nn(X)["overflow" + w.a.toUpperCase()] !== "scroll" && (U.style["overflow" + w.a.toUpperCase()] = "scroll")), Zn(d, I, k), Se = er(d), j = on(d, !0), B = te && Pe(T, ve ? Ae : je)(), f ? (H = [f + w.os2, F + _ + tn], H.t = I, O = f === Z ? sn(d, w) + F + _ : 0, O && (H.push(w.d, O + tn), I.style.flexBasis !== "auto" && (I.style.flexBasis = O + tn)), $n(H), C && Q.forEach(function(e) {
					e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
				}), te && ue(G)) : (O = sn(d, w), O && I.style.flexBasis !== "auto" && (I.style.flexBasis = O + tn)), te && (L = {
					top: j.top + (ve ? fe - N : B) + tn,
					left: j.left + (ve ? B : fe - N) + tn,
					boxSizing: "border-box",
					position: "fixed"
				}, L[Kt] = L["max" + $t] = Math.ceil(j.width) + tn, L[qt] = L["max" + en] = Math.ceil(j.height) + tn, L[Qt] = L[Qt + Xt] = L[Qt + Jt] = L[Qt + Zt] = L[Qt + Yt] = "0", L[Z] = k[Z], L[Z + Xt] = k[Z + Xt], L[Z + Jt] = k[Z + Jt], L[Z + Zt] = k[Z + Zt], L[Z + Yt] = k[Z + Yt], xe = tr(be, L, y), Ln && ue(0)), n ? (Te = n._initted, et(1), n.render(n.duration(), !0, !0), Ee = Ce(w.a) - we + F + _, De = Math.abs(F - Ee) > 1, te && De && xe.splice(xe.length - 2, 2), n.render(0, !0, !0), Te || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), et(0)) : Ee = F, U && (U.value ? U.style["overflow" + w.a.toUpperCase()] = U.value : U.style.removeProperty("overflow-" + w.a));
				else if (u && ue() && !x) for (j = u.parentNode; j && j !== X;) j._pinOffset && (N -= j._pinOffset, P -= j._pinOffset), j = j.parentNode;
				V && V.forEach(function(e) {
					return e.revert(!1, !0);
				}), A.start = N, A.end = P, M = pe = Ln ? G : ue(), !x && !Ln && (M < G && ue(G), A.scroll.rec = 0), A.revert(!1, !0), ce = ht(), Re && (se = -1, Re.restart(!0)), Ke = 0, n && ee && (n._initted || ze) && n.progress() !== ze && n.progress(ze || 0, !0).render(n.time(), !0, !0), (h || le !== A.progress || x || p || n && !n._initted) && (n && !ee && (n._initted || le || n.vars.immediateRender !== !1) && n.totalProgress(x && N < -.001 && !le ? K.utils.normalize(N, P, 0) : le, !0), A.progress = h || (M - N) / F === le ? 0 : le), d && f && (I._pinOffset = Math.round(A.progress * Ee)), W && W.invalidate(), isNaN(Oe) || (Oe -= K.getProperty(ge, w.p), ke -= K.getProperty(_e, w.p), sr(ge, w, Oe), sr(me, w, Oe - (o || 0)), sr(_e, w, ke), sr(he, w, ke - (o || 0))), h && !Ln && A.update(), c && !Ln && !ye && (ye = !0, c(A), ye = !1);
			}
		}, A.getVelocity = function() {
			return (ue() - pe) / (ht() - We) * 1e3 || 0;
		}, A.endAnimation = function() {
			zt(A.callbackAnimation), n && (W ? W.progress(1) : n.paused() ? ee || zt(n, A.direction < 0, 1) : zt(n, n.reversed()));
		}, A.labelToScroll = function(e) {
			return n && n.labels && (N || A.refresh() || N) + n.labels[e] / n.duration() * F || 0;
		}, A.getTrailing = function(e) {
			var t = Q.indexOf(A), n = A.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
			return (Ft(e) ? n.filter(function(t) {
				return t.vars.preventOverlaps === e;
			}) : n).filter(function(e) {
				return A.direction > 0 ? e.end <= N : e.start >= P;
			});
		}, A.update = function(e, t, r) {
			if (!(x && !r && !e)) {
				var o = Ln === !0 ? G : A.scroll(), c = e ? 0 : (o - N) / F, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = A.progress, h, g, b, E, D, ne, re, ie;
				if (t && (pe = M, M = x ? ue() : o, v && (Fe = Ne, Ne = n && !ee ? n.totalProgress() : u)), m && d && !Ke && !mt && _t && (!u && N < o + (o - pe) / (ht() - We) * m ? u = 1e-4 : u === 1 && P > o + (o - pe) / (ht() - We) * m && (u = .9999)), u !== p && A.enabled) {
					if (h = A.isActive = !!u && u < 1, g = !!p && p < 1, ne = h !== g, D = ne || !!u != !!p, A.direction = u > p ? 1 : -1, A.progress = u, D && !Ke && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, ee && (E = !ne && k[b + 1] !== "none" && k[b + 1] || k[b], ie = n && (E === "complete" || E === "reset" || E in n))), C && (ne || ie) && (ie || l || !n) && (It(C) ? C(A) : A.getTrailing(C).forEach(function(e) {
						return e.endAnimation();
					})), ee || (W && !Ke && !mt ? (W._dp._time - W._start !== W._time && W.render(W._dp._time - W._start), W.resetTo ? W.resetTo("totalProgress", u, n._tTime / n._tDur) : (W.vars.totalProgress = u, W.invalidate().restart())) : n && n.totalProgress(u, !!(Ke && (ce || e)))), d) {
						if (e && f && (I.style[f + w.os2] = V), !te) B(Tt(we + Ee * u));
						else if (D) {
							if (re = !e && u > p && P + 1 > o && o + 1 >= Nt(T, w), y) if (!e && (h || re)) {
								var ae = on(d, !0), oe = o - N;
								ar(d, X, ae.top + (w === je ? oe : 0) + tn, ae.left + (w === je ? 0 : oe) + tn);
							} else ar(d, I);
							$n(h || re ? xe : Se), De && u < 1 && h || B(we + (u === 1 && !re ? Ee : 0));
						}
					}
					v && !de.tween && !Ke && !mt && Re.restart(!0), a && (ne || _ && u && (u < 1 || !pt)) && He(a.targets).forEach(function(e) {
						return e.classList[h || _ ? "add" : "remove"](a.className);
					}), i && !ee && !e && i(A), D && !Ke ? (ee && (ie && (E === "complete" ? n.pause().totalProgress(1) : E === "reset" ? n.restart(!0).pause() : E === "restart" ? n.restart(!0) : n[E]()), i && i(A)), (ne || !pt) && (s && ne && Bt(A, s), O[b] && Bt(A, O[b]), _ && (u === 1 ? A.kill(!1, 1) : O[b] = 0), ne || (b = u === 1 ? 1 : 3, O[b] && Bt(A, O[b]))), S && !h && Math.abs(A.getVelocity()) > (Lt(S) ? S : 2500) && (zt(A.callbackAnimation), W ? W.progress(1) : zt(n, E === "reverse" ? 1 : !u, 1))) : ee && i && !Ke && i(A);
				}
				if (Oe) {
					var se = x ? o / x.duration() * (x._caScrollDist || 0) : o;
					U(se + +!!ge._isFlipped), Oe(se);
				}
				Be && Be(-o / x.duration() * (x._caScrollDist || 0));
			}
		}, A.enable = function(t, n) {
			A.enabled || (A.enabled = !0, pn(T, "resize", Dn), D || pn(T, "scroll", Tn), ie && pn(e, "refreshInit", ie), t !== !1 && (A.progress = le = 0, M = pe = se = ue()), n !== !1 && A.refresh());
		}, A.getTween = function(e) {
			return e && de ? de.tween : W;
		}, A.setPositions = function(e, t, n, r) {
			if (x) {
				var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
				e = i.start + o * e / a, t = i.start + o * t / a;
			}
			A.refresh(!1, !1, {
				start: bt(e, n && !!A._startClamp),
				end: bt(t, n && !!A._endClamp)
			}, r), A.update();
		}, A.adjustPinSpacing = function(e) {
			if (H && e) {
				var t = H.indexOf(w.d) + 1;
				H[t] = parseFloat(H[t]) + e + tn, H[1] = parseFloat(H[1]) + e + tn, $n(H);
			}
		}, A.disable = function(t, n) {
			if (t !== !1 && A.revert(!0, !0), A.enabled && (A.enabled = A.isActive = !1, n || W && W.pause(), G = 0, j && (j.uncache = 1), ie && mn(e, "refreshInit", ie), Re && (Re.pause(), de.tween && de.tween.kill() && (de.tween = 0)), !D)) {
				for (var r = Q.length; r--;) if (Q[r].scroller === T && Q[r] !== A) return;
				mn(T, "resize", Dn), D || mn(T, "scroll", Tn);
			}
		}, A.kill = function(e, r) {
			A.disable(e, r), W && !r && W.kill(), o && delete Sn[o];
			var i = Q.indexOf(A);
			i >= 0 && Q.splice(i, 1), i === Ye && Gn > 0 && Ye--, i = 0, Q.forEach(function(e) {
				return e.scroller === A.scroller && (i = 1);
			}), i || Ln || (A.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), me && [
				me,
				he,
				ge,
				_e
			].forEach(function(e) {
				return e.parentNode && e.parentNode.removeChild(e);
			}), Kn === A && (Kn = 0), d && (j && (j.uncache = 1), i = 0, Q.forEach(function(e) {
				return e.pin === d && i++;
			}), i || (j.spacer = 0)), t.onKill && t.onKill(A);
		}, Q.push(A), A.enable(!1, !1), Ve && Ve(A), n && n.add && !F) {
			var Ze = A.update;
			A.update = function() {
				A.update = Ze, R.cache++, N || P || A.refresh();
			}, K.delayedCall(.01, A.update), F = .01, N = P = 0;
		} else A.refresh();
		d && Bn();
	}, e.register = function(t) {
		return ze || (K = t || Dt(), Et() && window.document && e.enable(), ze = vt), ze;
	}, e.defaults = function(e) {
		if (e) for (var t in e) _n[t] = e[t];
		return _n;
	}, e.disable = function(e, t) {
		vt = 0, Q.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), mn(q, "wheel", Tn), mn(J, "scroll", Tn), clearInterval(Ge), mn(J, "touchcancel", wt), mn(X, "touchstart", wt), fn(mn, J, "pointerdown,touchstart,mousedown", St), fn(mn, J, "pointerup,touchend,mouseup", Ct), Ve.kill(), Pt(mn);
		for (var n = 0; n < R.length; n += 3) hn(mn, R[n], R[n + 1]), hn(mn, R[n], R[n + 2]);
	}, e.enable = function() {
		if (q = window, J = document, Y = J.documentElement, X = J.body, K) if (He = K.utils.toArray, Ue = K.utils.clamp, st = K.core.context || wt, et = K.core.suppressOverwrites || wt, ct = q.history.scrollRestoration || "auto", Wn = q.pageYOffset || 0, K.core.globals("ScrollTrigger", e), X) {
			vt = 1, lt = document.createElement("div"), lt.style.height = "100vh", lt.style.position = "absolute", Vn(), xt(), G.register(K), e.isTouch = G.isTouch, ot = G.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), rt = G.isTouch === 1, pn(q, "wheel", Tn), Be = [
				q,
				J,
				Y,
				X
			], K.matchMedia ? (e.matchMedia = function(e) {
				var t = K.matchMedia(), n;
				for (n in e) t.add(n, e[n]);
				return t;
			}, K.addEventListener("matchMediaInit", function() {
				Pn(), Fn();
			}), K.addEventListener("matchMediaRevert", function() {
				return Nn();
			}), K.addEventListener("matchMedia", function() {
				Un(0, 1), jn("matchMedia");
			}), K.matchMedia().add("(orientation: portrait)", function() {
				return En(), En;
			})) : console.warn("Requires GSAP 3.11.0 or later"), En(), pn(J, "scroll", Tn);
			var t = X.hasAttribute("style"), n = X.style, r = n.borderTopStyle, i = K.core.Animation.prototype, a, o;
			for (i.revert || Object.defineProperty(i, "revert", { value: function() {
				return this.time(-.01, !0);
			} }), n.borderTopStyle = "solid", a = on(X), je.m = Math.round(a.top + je.sc()) || 0, Ae.m = Math.round(a.left + Ae.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (X.setAttribute("style", ""), X.removeAttribute("style")), Ge = setInterval(wn, 250), K.delayedCall(.5, function() {
				return mt = 0;
			}), pn(J, "touchcancel", wt), pn(X, "touchstart", wt), fn(pn, J, "pointerdown,touchstart,mousedown", St), fn(pn, J, "pointerup,touchend,mouseup", Ct), Je = K.utils.checkPrefix("transform"), Yn.push(Je), ze = ht(), Ve = K.delayedCall(.2, Un).pause(), Qe = [
				J,
				"visibilitychange",
				function() {
					var e = q.innerWidth, t = q.innerHeight;
					J.hidden ? (Xe = e, Ze = t) : (Xe !== e || Ze !== t) && Dn();
				},
				J,
				"DOMContentLoaded",
				Un,
				q,
				"load",
				Un,
				q,
				"resize",
				Dn
			], Pt(pn), Q.forEach(function(e) {
				return e.enable(0, 1);
			}), o = 0; o < R.length; o += 3) hn(mn, R[o], R[o + 1]), hn(mn, R[o], R[o + 2]);
		} else J && J.addEventListener("DOMContentLoaded", function t() {
			e.enable(), J.removeEventListener("DOMContentLoaded", t);
		});
	}, e.config = function(t) {
		"limitCallbacks" in t && (pt = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Ge) || (Ge = n) && setInterval(wn, n), "ignoreMobileResize" in t && (rt = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Pt(mn) || Pt(pn, t.autoRefreshEvents || "none"), tt = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Me(e), r = R.indexOf(n), i = Ot(n);
		~r && R.splice(r, i ? 6 : 2), t && (i ? z.unshift(q, t, X, t, Y, t) : z.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Q.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (Ft(e) ? Me(e) : e).getBoundingClientRect(), i = r[n ? Kt : qt] * t || 0;
		return n ? r.right - i > 0 && r.left + i < q.innerWidth : r.bottom - i > 0 && r.top + i < q.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		Ft(e) && (e = Me(e));
		var r = e.getBoundingClientRect(), i = r[n ? Kt : qt], a = t == null ? i / 2 : t in vn ? vn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / q.innerWidth : (r.top + a) / q.innerHeight;
	}, e.killAll = function(e) {
		if (Q.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = On.killAll || [];
			On = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
$.version = "3.15.0", $.saveStyles = function(e) {
	return e ? He(e).forEach(function(e) {
		if (e && e.style) {
			var t = Mn.indexOf(e);
			t >= 0 && Mn.splice(t, 5), Mn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), K.core.getCache(e), st());
		}
	}) : Mn;
}, $.revert = function(e, t) {
	return Fn(!e, t);
}, $.create = function(e, t) {
	return new $(e, t);
}, $.refresh = function(e) {
	return e ? Dn(!0) : (ze || $.register()) && Un(!0);
}, $.update = function(e) {
	return ++R.cache && qn(e === !0 ? 2 : 0);
}, $.clearScrollMemory = In, $.maxScroll = function(e, t) {
	return Nt(e, t ? Ae : je);
}, $.getScrollFunc = function(e, t) {
	return Pe(Me(e), t ? Ae : je);
}, $.getById = function(e) {
	return Sn[e];
}, $.getAll = function() {
	return Q.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, $.isScrolling = function() {
	return !!_t;
}, $.snapDirectional = un, $.addEventListener = function(e, t) {
	var n = On[e] || (On[e] = []);
	~n.indexOf(t) || n.push(t);
}, $.removeEventListener = function(e, t) {
	var n = On[e], r = n && n.indexOf(t);
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
	for (s in t) r[s] = s.substr(0, 2) === "on" && It(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return It(a) && (a = a(), pn($, "refresh", function() {
		return a = t.batchMax();
	})), He(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push($.create(t));
	}), n;
};
var lr = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, ur = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (G.isTouch ? " pinch-zoom" : "") : "none", t === Y && e(X, n);
}, dr = {
	auto: 1,
	scroll: 1
}, fr = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || K.core.getCache(i), o = ht(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== X && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(dr[(s = nn(i)).overflowY] || dr[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !Ot(i) && (dr[(s = nn(i)).overflowY] || dr[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, pr = function(e, t, n, r) {
	return G.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r = r && fr,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && pn(J, G.eventTypes[0], gr, !1, !0);
		},
		onDisable: function() {
			return mn(J, G.eventTypes[0], gr, !0);
		}
	});
}, mr = /(input|label|select|textarea)/i, hr, gr = function(e) {
	var t = mr.test(e.target.tagName);
	(t || hr) && (e._gsapAllow = !0, hr = t);
}, _r = function(e) {
	Rt(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Me(e.target) || Y, l = K.core.globals().ScrollSmoother, u = l && l.get(), d = ot && (e.content && Me(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Pe(c, je), p = Pe(c, Ae), m = 1, h = (G.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, g = 0, _ = It(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = pr(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = wt, C = wt, w = function() {
		s = Nt(c, je), C = Ue(+!!ot, s), n && (S = Ue(0, Nt(c, Ae))), v = Rn;
	}, ee = function() {
		d._gsap.y = Tt(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, T = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = Tt(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = Tt((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = R.cache, qn();
			}
			return !0;
		}
		f.offset && ee(), y = !0;
	}, E, D, te, O, k = function() {
		w(), E.isActive() && E.vars.scrollY > s && (f() > s ? E.progress(1) && f(s) : E.resetTo("scrollY", s));
	};
	return d && K.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return ot && e.type === "touchmove" && T(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = Tt((q.visualViewport && q.visualViewport.scale || 1) / h), E.pause(), e !== m && ur(c, m > 1.01 || !n && "x"), D = p(), te = f(), w(), v = Rn;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && ee(), !t) O.restart(!0);
		else {
			R.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= lr(p, i, o, Nt(c, Ae)), E.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= lr(f, i, o, Nt(c, je)), E.vars.scrollY = C(o), E.invalidate().duration(r).play(.01), (ot && E.vars.scrollY >= s || i >= s - 1) && K.to({}, {
				onUpdate: k,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		E._ts && E.pause(), ht() - g > 1e3 && (v = 0, g = ht());
	}, e.onChange = function(e, t, r, i, a) {
		if (Rn !== v && w(), t && n && p(S(i[2] === t ? D + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && ee();
			var o = a[2] === r, s = o ? te + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (te += c - s), f(c);
		}
		(r || t) && qn();
	}, e.onEnable = function() {
		ur(c, !n && "x"), $.addEventListener("refresh", k), pn(q, "resize", k), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		ur(c, !0), mn(q, "resize", k), $.removeEventListener("refresh", k), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new G(e), o.iOS = ot, ot && !f() && f(1), ot && K.ticker.add(wt), O = o._dc, E = K.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: or(f, f(), function() {
			return E.pause();
		}) },
		onUpdate: qn,
		onComplete: O.vars.onComplete
	}), o;
};
$.sort = function(e) {
	if (It(e)) return Q.sort(e);
	var t = q.pageYOffset || 0;
	return $.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + q.innerHeight;
	}), Q.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, $.observe = function(e) {
	return new G(e);
}, $.normalizeScroll = function(e) {
	if (e === void 0) return nt;
	if (e === !0 && nt) return nt.enable();
	if (e === !1) {
		nt && nt.kill(), nt = e;
		return;
	}
	var t = e instanceof G ? e : _r(e);
	return nt && nt.target === t.target && nt.kill(), Ot(t.target) && (nt = t), t;
}, $.core = {
	_getVelocityProp: Fe,
	_inputObserver: pr,
	_scrollers: R,
	_proxies: z,
	bridge: {
		ss: function() {
			_t || jn("scrollStart"), _t = ht();
		},
		ref: function() {
			return Ke;
		}
	}
}, Dt() && K.registerPlugin($);
//#endregion
//#region src/modules/line-reveal.ts
var vr = "h1, h2, h3, h4, h5, h6, p", yr = ".news_event .u-text-eyebrow[data-animation-ready]", br = [
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
].join(", "), xr = "[data-reveal-hero], [class*=\"_hero\"], [class*=\"-hero\"]", Sr = "data-reveal-pending", Cr = "data-reveal-ready", wr = {
	y: 12,
	opacity: 0
}, Tr = {
	y: 0,
	opacity: 1,
	duration: .8,
	ease: "power2.out"
}, Er = !1;
function Dr() {
	return /(?:^|\/)news(?:\/|$)/i.test(window.location.pathname);
}
function Or(e) {
	var t;
	return e.closest(br) || e.closest("[hidden]") ? !1 : ((t = e.textContent) == null ? void 0 : t.trim().length) !== 0;
}
function kr(e) {
	if (e.closest(xr)) return !0;
	if (window.scrollY > 5) return !1;
	let t = e.getBoundingClientRect();
	return t.height > 0 && t.top >= 0 && t.top < window.innerHeight * .85;
}
function Ar(e) {
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
function jr(e) {
	var t, n;
	(t = e.trigger) == null || t.kill(), (n = e.timeline) == null || n.kill(), e.element.style.opacity = e.played ? "1" : e.originalOpacity, e.element.style.transform = e.originalTransform, e.trigger = void 0, e.timeline = void 0;
}
function Mr(e) {
	return e.signature = Ar(e.element), e.element.removeAttribute(Sr), e.element.setAttribute(Cr, ""), [e.element];
}
function Nr(e) {
	let t = Mr(e);
	if (!t.length || e.played) return;
	let n = b.timeline({
		paused: !0,
		onComplete: () => {
			e.played = !0;
		}
	});
	n.fromTo(t, wr, Tr), e.timeline = n, e.trigger = $.create({
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
function Pr(e, t) {
	e.forEach((e, n) => {
		let r = Mr(e);
		if (!r.length || e.played) return;
		let i = e.element.matches(".hero-price") ? .42 : 0;
		t.fromTo(r, wr, Tr, .6 + n * .12 + i);
	});
}
function Fr() {
	return "fonts" in document ? document.fonts.ready.then(() => void 0, () => void 0) : Promise.resolve();
}
function Ir(e = document) {
	var t;
	if (Er || Dr() || u()) return;
	let n = o(`${vr}, ${yr}`, e).filter(Or);
	if (!n.length) return;
	Er = !0, b.registerPlugin($);
	let r = n.map((e) => ({
		element: e,
		hero: kr(e),
		played: !1,
		signature: "",
		originalOpacity: e.style.opacity,
		originalTransform: e.style.transform
	}));
	r.forEach(({ element: e }) => e.setAttribute(Sr, ""));
	let i, a, s = 0, c = !1, l = !1, d = () => {
		c && (i && i.progress() > 0 && (l = !0, r.filter((e) => e.hero).forEach((e) => {
			e.played = !0;
		})), i == null || i.kill(), r.forEach(jr), i = b.timeline({ paused: !0 }), Pr(r.filter((e) => e.hero && e.element.isConnected), i), r.filter((e) => !e.hero && e.element.isConnected).forEach(Nr), !l && i.duration() > 0 && (i.call(() => {
			l = !0;
		}, void 0, .6), i.play(0)), $.refresh());
	}, f = () => {
		s || (s = window.requestAnimationFrame(() => {
			s = 0, r.some((e) => e.element.isConnected && Ar(e.element) !== e.signature) && d();
		}));
	};
	Promise.all([Fr(), (t = window.__sitePreloader) == null ? void 0 : t.ready]).then(() => {
		var e;
		c = !0, d(), a = new ResizeObserver(f), r.forEach((e) => a == null ? void 0 : a.observe(e.element)), window.addEventListener("resize", f, { passive: !0 }), (e = document.fonts) == null || e.addEventListener("loadingdone", d);
	}), window.addEventListener("pagehide", () => {
		var e;
		window.cancelAnimationFrame(s), a == null || a.disconnect(), i == null || i.kill(), r.forEach(jr), window.removeEventListener("resize", f), (e = document.fonts) == null || e.removeEventListener("loadingdone", d), r.forEach(({ element: e }) => e.removeAttribute(Sr));
	}, { once: !0 });
}
//#endregion
//#region src/modules/lightbox.ts
var Lr = "[data-lightbox-src]", Rr = "js-lightbox", zr = `.${Rr}`, Br = `${Lr}, ${zr}`, Vr = "[data-site-lightbox]", Hr = "[data-lightbox-close]", Ur = "[data-lightbox-prev]", Wr = "[data-lightbox-next]", Gr = "[data-lightbox-auto-icon]", Kr = "site-lightbox-trigger", qr = "site-lightbox-trigger__image", Jr = "site-lightbox-trigger__icon", Yr = "w-dyn-bind-empty", Xr = "/plugins/Basic/assets/placeholder.", Zr = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"site-lightbox-trigger__icon-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Qr = !1, $r = null, ei = null, ti = [], ni = 0, ri = !1, ii = null;
function ai(e) {
	let t = r(e, "data-lightbox-src");
	if (t) return t;
	if (e instanceof HTMLAnchorElement) {
		let t = r(e, "href");
		return t && t !== "#" ? e.href : "";
	}
	if (e instanceof HTMLImageElement) return oi(e);
	let n = s("img", e);
	return n ? oi(n) : "";
}
function oi(e) {
	let t = r(e, "src"), n = r(e, "srcset");
	return e.classList.contains(Yr) || t.includes(Xr) || !t && !n ? "" : e.currentSrc || e.src || t;
}
function si(e) {
	var t, n;
	let i = r(e, "data-lightbox-alt");
	if (i) return i;
	if (e instanceof HTMLImageElement) return e.alt.trim();
	let a = s("img", e);
	return (t = a == null || (n = a.alt) == null ? void 0 : n.trim()) == null ? "" : t;
}
function ci(e) {
	let t = ai(e).trim();
	return t ? {
		src: t,
		caption: r(e, "data-lightbox-caption"),
		credit: r(e, "data-lightbox-credit"),
		alt: si(e),
		group: r(e, "data-lightbox-group"),
		trigger: e
	} : null;
}
function li(e) {
	let t = ci(e);
	if (!t) return null;
	if (!t.group) return {
		items: [t],
		index: 0
	};
	let n = o(Br).filter((e) => r(e, "data-lightbox-group") === t.group).map(ci).filter((e) => !!e), i = Math.max(0, n.findIndex((t) => t.trigger === e));
	return {
		items: n.length > 0 ? n : [t],
		index: i
	};
}
function ui() {
	let e = document.createElement("span");
	return e.className = Jr, e.setAttribute("aria-hidden", "true"), e.setAttribute("data-lightbox-auto-icon", ""), e.innerHTML = Zr, e;
}
function di(e) {
	return e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function fi(e) {
	if (!di(e) && (e.setAttribute("role", "button"), e.hasAttribute("tabindex") || (e.tabIndex = 0), !e.hasAttribute("aria-label"))) {
		var t;
		e.setAttribute("aria-label", (t = $r == null ? void 0 : $r.t("openImage", "Open image")) == null ? "Open image" : t);
	}
}
function pi(e) {
	if (e.closest(`.${Kr}`) || !ai(e).trim()) return;
	let t = document.createElement("span");
	t.className = `${Kr} ${Rr}`, t.dataset.lightboxAutoWrapper = "";
	for (let n of [
		"data-lightbox-src",
		"data-lightbox-caption",
		"data-lightbox-credit",
		"data-lightbox-alt",
		"data-lightbox-group",
		"data-lightbox-fill"
	]) e.hasAttribute(n) && (t.setAttribute(n, r(e, n)), e.removeAttribute(n));
	e.classList.remove(Rr), e.classList.add(qr), e.before(t), t.append(e, ui()), fi(t);
}
function mi(e) {
	if (e instanceof HTMLImageElement) {
		pi(e);
		return;
	}
	ai(e).trim() && (e.classList.add(Kr), fi(e), s(Gr, e) || e.append(ui()));
}
function hi() {
	o(zr).forEach(mi);
}
function gi(e, t, n, r) {
	let i = document.createElement("button");
	return i.type = "button", i.className = r, i.setAttribute(t, ""), i.setAttribute("aria-label", e), i.title = e, i.textContent = n, i;
}
function _i() {
	var e, t, n, r, i, a;
	if (ei) return vi(ei), ei;
	let o = s(Vr), c = o == null ? document.createElement("div") : o;
	if (c.classList.add("site-lightbox"), c.setAttribute("data-site-lightbox", ""), c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.setAttribute("aria-hidden", "true"), c.setAttribute("aria-label", (e = $r == null ? void 0 : $r.t("openImage", "Image preview")) == null ? "Image preview" : e), c.hidden = !0, c.tabIndex = -1, !o) {
		var l, u, d;
		c.innerHTML = "";
		let e = gi((l = $r == null ? void 0 : $r.t("close", "Close")) == null ? "Close" : l, "data-lightbox-close", "", "site-lightbox__close");
		e.innerHTML = "\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"20\" cy=\"20\" r=\"20\"/>\n        <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\"/>\n      </svg>\n    ";
		let t = gi((u = $r == null ? void 0 : $r.t("previous", "Previous")) == null ? "Previous" : u, "data-lightbox-prev", "‹", "site-lightbox__previous"), n = gi((d = $r == null ? void 0 : $r.t("next", "Next")) == null ? "Next" : d, "data-lightbox-next", "›", "site-lightbox__next"), r = document.createElement("figure");
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
		closeButton: (r = s(Hr, c)) == null ? document.createElement("button") : r,
		previousButton: (i = s(Ur, c)) == null ? document.createElement("button") : i,
		nextButton: (a = s(Wr, c)) == null ? document.createElement("button") : a
	};
	return ei = m, vi(m), !o && !document.body.contains(c) && document.body.append(c), m;
}
function vi(e) {
	var t, n, r, i;
	let a = (t = $r == null ? void 0 : $r.t("close", "Close")) == null ? "Close" : t, o = (n = $r == null ? void 0 : $r.t("previous", "Previous")) == null ? "Previous" : n, s = (r = $r == null ? void 0 : $r.t("next", "Next")) == null ? "Next" : r, c = (i = $r == null ? void 0 : $r.t("openImage", "Image preview")) == null ? "Image preview" : i;
	e.root.setAttribute("aria-label", c), e.closeButton.setAttribute("aria-label", a), e.closeButton.title = a, e.previousButton.setAttribute("aria-label", o), e.previousButton.title = o, e.nextButton.setAttribute("aria-label", s), e.nextButton.title = s;
}
function yi() {
	let e = _i(), t = ti[ni];
	if (!t) return;
	e.image.src = t.src, e.image.alt = t.alt, e.caption.textContent = t.caption, e.caption.hidden = t.caption.length === 0, e.credit.textContent = t.credit, e.credit.hidden = t.credit.length === 0;
	let n = ti.length > 1;
	e.previousButton.hidden = !n, e.nextButton.hidden = !n, e.root.dataset.lightboxIndex = String(ni), e.root.dataset.lightboxCount = String(ti.length);
}
function bi(e) {
	let t = _i();
	t.root.hidden = !e, t.root.setAttribute("aria-hidden", String(!e)), t.root.classList.toggle("is-active", e), t.root.classList.toggle("is-visible", e), document.documentElement.classList.toggle("is-lightbox-open", e), document.body.classList.toggle("is-lightbox-open", e);
}
function xi(e) {
	ti.length < 2 || (ni = (e + ti.length) % ti.length, yi());
}
function Si() {
	xi(ni + 1);
}
function Ci() {
	xi(ni - 1);
}
function wi(e) {
	var t;
	let n = li(e);
	if (!n) return;
	let r = ri;
	ti = n.items, ni = n.index, ii = e, ri = !0, yi(), bi(!0), r || p();
	let i = _i();
	m(i.closeButton || i.root);
	let a = ti[ni];
	d(i.root, "site:lightbox-open", {
		item: a,
		index: ni,
		count: ti.length,
		group: (t = a == null ? void 0 : a.group) == null ? "" : t,
		trigger: e
	});
}
function Ti() {
	var t;
	if (!ri || !ei) return;
	let r = ei, i = ii, a = (t = ti[ni]) == null ? null : t;
	bi(!1), n(), ri = !1, ti = [], ni = 0, ii = null, r.image.removeAttribute("src"), r.caption.textContent = "", d(r.root, "site:lightbox-close", { item: a }), e(i);
}
function Ei(e) {
	if (!(!ri || !ei)) {
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), Ti();
			return;
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(), Si();
			return;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(), Ci();
			return;
		}
		y(ei.root, e);
	}
}
function Di(e) {
	!ri || !ei || e.target === ei.root && Ti();
}
function Oi(e) {
	return $r = e.i18n, hi(), Qr || (g(document, "click", Br, (e, t) => {
		e.preventDefault(), wi(t);
	}), g(document, "keydown", zr, (e, t) => {
		di(t) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), wi(t));
	}), g(document, "click", Hr, (e) => {
		e.preventDefault(), Ti();
	}), g(document, "click", Ur, (e) => {
		e.preventDefault(), Ci();
	}), g(document, "click", Wr, (e) => {
		e.preventDefault(), Si();
	}), document.addEventListener("click", Di), document.addEventListener("keydown", Ei, !0), Qr = !0), {
		openLightbox: wi,
		closeLightbox: Ti
	};
}
//#endregion
//#region src/modules/modal-image.ts
function ki(e, t, n) {
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
function Ai(e, t, n, r) {
	let i = ki(t, n, r);
	e.onerror = i === t ? null : () => {
		e.onerror = null, e.src = t;
	}, e.src = i;
}
var ji = /* @__PURE__ */ new Set([
	"6a7db30517820876cd23f469",
	"6a7db3187795b95db7804762",
	"6a7db33f5031a1007e109876",
	"6a7db3495031a1007e10a89e",
	"6a7db34bd247654adf43324d"
]);
function Mi(e, t) {
	var n;
	let r = (n = e.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	return r && ji.has(r) ? new URL("../assets/modal-work-thumbnails/" + r + ".webp", import.meta.url).href : ki(e, t, 500);
}
//#endregion
//#region src/modules/modal.ts
var Ni = "[data-modal]", Pi = "[data-modal-content]", Fi = "[data-modal-open]", Ii = "[data-modal-close]", Li = "a[href^=\"#modal:\"]", Ri = "#modal:", zi = 460, Bi = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"#F3F2F4\"/>\n    <path d=\"M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z\" fill=\"#444153\"/>\n  </svg>\n", Vi = "\n  <svg width=\"34\" height=\"34\" viewBox=\"0 0 30 30\" fill=\"none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"fwm-modal__lightbox-icon-circle--centered\" cx=\"15\" cy=\"15\" r=\"15\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-bottom\" d=\"M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z\"/>\n    <path class=\"fwm-modal__lightbox-icon-arrow--centered-top\" d=\"M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z\"/>\n  </svg>\n", Hi = "\n  <svg class=\"fwm-modal__work-eye\" viewBox=\"0 0 26 17\" fill=\"none\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"fwm-modal__work-eye-pupil\" d=\"M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z\" fill=\"currentColor\"/>\n    <path d=\"M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z\" fill=\"currentColor\"/>\n  </svg>\n", Ui = !1, Wi = !0, Gi = null, Ki = null, qi = "", Ji = null, Yi = null, Xi = /* @__PURE__ */ new Map();
function Zi(e) {
	var t;
	let n = (t = e.getAttribute("href")) == null ? "" : t;
	return n.startsWith(Ri) ? decodeURIComponent(n.slice(7)).trim() : "";
}
function Qi() {
	let e = document.createElement("div");
	e.className = "fwm-modal", e.setAttribute("data-site-modal", ""), e.setAttribute("aria-hidden", "true"), e.hidden = !0, e.innerHTML = "\n    <div class=\"fwm-modal__panel\" data-modal-panel data-lenis-prevent role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n      <div class=\"fwm-modal__top\">\n        <div class=\"fwm-modal__address\" data-site-modal-address></div>\n        <button class=\"fwm-modal__close\" type=\"button\" data-modal-close></button>\n      </div>\n      <a class=\"fwm-modal__image-link\" href=\"#\" data-lightbox-src=\"\" data-lightbox-caption=\"\">\n        <img class=\"fwm-modal__image\" src=\"\" alt=\"\">\n        <span class=\"fwm-modal__lightbox-icon\" aria-hidden=\"true\"></span>\n        <span class=\"fwm-modal__caption\" data-site-modal-caption></span>\n      </a>\n      <h2 class=\"fwm-modal__headline\" data-site-modal-headline></h2>\n      <div class=\"fwm-modal__text\" data-site-modal-text></div>\n      <div class=\"fwm-modal__work\" data-site-modal-work></div>\n      <div class=\"fwm-modal__gallery\" data-site-modal-gallery></div>\n      <div class=\"fwm-modal__rights\" data-site-modal-rights hidden></div>\n    </div>\n  ", document.body.append(e);
	let t = {
		root: e,
		panel: e.querySelector("[data-modal-panel]"),
		address: e.querySelector("[data-site-modal-address]"),
		closeButton: e.querySelector(Ii),
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
	return t.closeButton.innerHTML = Bi, t.lightboxIcon.innerHTML = Vi, ea(t), t;
}
function $i() {
	return (!Ki || !document.body.contains(Ki.root)) && (Ki = Qi()), ea(Ki), Ki;
}
function ea(e) {
	var t, n;
	let r = (t = Gi == null ? void 0 : Gi.t("close", "Close")) == null ? "Close" : t, i = (n = Gi == null ? void 0 : Gi.t("openModal", "Open details")) == null ? "Open details" : n;
	e.closeButton.setAttribute("aria-label", r), e.closeButton.title = r, e.panel.setAttribute("aria-label", i);
}
function ta(e, t) {
	var n;
	let r = e.querySelector(t);
	return r instanceof HTMLImageElement ? r : (n = r == null ? void 0 : r.querySelector("img")) == null ? null : n;
}
function na(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p;
	let m = e.querySelector("[data-modal-work]");
	if (!m) return null;
	let h = ta(m, "[data-works-thumbnail]"), g = (t = (n = (r = m.querySelector("[data-works-title]")) == null || (r = r.textContent) == null ? void 0 : r.trim()) == null ? (i = m.getAttribute("data-works-title")) == null ? void 0 : i.trim() : n) == null ? "" : t, _ = (a = (o = (s = m.querySelector("[data-works-year]")) == null || (s = s.textContent) == null ? void 0 : s.trim()) == null ? (c = m.getAttribute("data-works-year")) == null ? void 0 : c.trim() : o) == null ? "" : a, v = (l = (u = (d = m.getAttribute("data-works-href")) == null ? m.getAttribute("data-works-url") : d) == null ? (f = m.querySelector("[data-works-link], a[href]")) == null ? void 0 : f.href : u) == null ? "" : l, y = x(h);
	return !g && !y && !v ? null : {
		title: g,
		year: _,
		thumbnail: y,
		thumbnailSrcset: (p = h == null ? void 0 : h.getAttribute("srcset")) == null ? void 0 : p,
		thumbnailAlt: (h == null ? void 0 : h.alt) || g,
		href: v
	};
}
function ra(e) {
	var t, n, r, i;
	let a = o("[data-modal-gallery-item]", e).map((e) => {
		var t, n, r, i, a;
		let o = (t = ta(e, "[data-modal-gallery-image]")) == null ? e.querySelector("img") : t;
		return {
			src: x(o),
			srcset: (n = o == null ? void 0 : o.getAttribute("srcset")) == null ? void 0 : n,
			alt: (r = o == null ? void 0 : o.alt) == null ? "" : r,
			caption: (i = (a = e.querySelector("[data-modal-gallery-caption]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i
		};
	}).filter((e) => e.src);
	if (a.length > 0) return a;
	let s = ta(e, "[data-modal-image]"), c = x(s);
	return c ? [{
		src: c,
		srcset: (t = s == null ? void 0 : s.getAttribute("srcset")) == null ? void 0 : t,
		alt: (n = s == null ? void 0 : s.alt) == null ? "" : n,
		caption: (r = (i = e.querySelector("[data-modal-caption]")) == null || (i = i.textContent) == null ? void 0 : i.trim()) == null ? "" : r
	}] : [];
}
function ia(e) {
	var t, n, i, a, o, s, c, l, u, d;
	let f = r(e, "data-modal-content");
	if (!f) return null;
	let p = ((t = e.querySelector("[data-modal-hover-text]")) == null || (t = t.textContent) == null ? void 0 : t.trim()) || ((n = e.querySelector("[data-modal-address]")) == null || (n = n.textContent) == null ? void 0 : n.trim()) || "", m = (i = (a = e.querySelector("[data-modal-headline]")) == null || (a = a.textContent) == null ? void 0 : a.trim()) == null ? "" : i, h = ra(e), g = h[0], _ = e.querySelector("[data-modal-body]");
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
		work: na(e),
		gallery: h
	};
}
function aa(e) {
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
function oa() {
	o(Pi).forEach((e) => {
		let t = ia(e);
		t && Xi.set(t.id, t);
	}), o(Ni).forEach((e) => {
		let t = aa(e);
		t && Xi.set(t.id, t), e.remove();
	});
}
function sa(e) {
	var t;
	let n = e.trim();
	if (!n) return null;
	let i = o(Pi).find((e) => r(e, "data-modal-content") === n), a = i ? ia(i) : null;
	return a && Xi.set(n, a), (t = a == null ? Xi.get(n) : a) == null ? null : t;
}
function ca(e) {
	try {
		let t = new URL(e, document.baseURI).pathname.match(/^\/werke\/([^/]+)\/?$/);
		if (!t) return e;
		let n = new URL("/werk-ueberblick", document.baseURI);
		return n.searchParams.set("work", decodeURIComponent(t[1])), n.hash = "werke", `${n.pathname}${n.search}${n.hash}`;
	} catch (t) {
		return e;
	}
}
function la(e) {
	var t;
	let n = (t = e.href) == null ? void 0 : t.trim(), r = !!(n && !n.startsWith("#")), i = document.createElement(r ? "a" : "article"), a = document.createElement("span"), o = document.createElement("span"), s = document.createElement("span"), c = document.createElement("span");
	if (i.className = "fwm-modal__work-card", r && i.setAttribute("href", ca(n)), e.thumbnail) {
		let t = document.createElement("img");
		t.className = "fwm-modal__work-image", t.alt = e.thumbnailAlt, t.loading = "lazy", t.decoding = "async";
		let n = Mi(e.thumbnail, e.thumbnailSrcset);
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
		e.className = "fwm-modal__work-icon", e.innerHTML = Hi, o.append(e);
	}
	return i.append(o), i;
}
function ua(e, t) {
	let n = document.createElement("a"), r = document.createElement("img"), i = document.createElement("span"), a = document.createElement("span");
	return n.className = "fwm-modal__image-link", n.href = e.src, n.setAttribute("data-lightbox-src", e.src), n.setAttribute("data-lightbox-caption", e.caption), n.setAttribute("data-lightbox-alt", e.alt), n.classList.toggle("has-caption", e.caption.length > 0), r.className = "fwm-modal__image", r.alt = e.alt, r.loading = t === 0 ? "eager" : "lazy", r.decoding = "async", Ai(r, e.src, e.srcset, 500), i.className = "fwm-modal__lightbox-icon", i.setAttribute("aria-hidden", "true"), i.innerHTML = Vi, a.className = "fwm-modal__caption", a.textContent = e.caption, a.hidden = e.caption.length === 0, n.append(r, i, a), n;
}
function da(e) {
	e.headline.textContent = "", e.headline.hidden = !0, e.work.replaceChildren(), e.work.hidden = !0, e.gallery.replaceChildren(), e.gallery.hidden = !0, e.rights.textContent = "", e.rights.hidden = !0;
}
function fa(e, t) {
	e.innerHTML = t, e.querySelectorAll("[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade").forEach((e) => {
		e.removeAttribute("data-reveal-pending"), e.removeAttribute("data-reveal-ready"), e.removeAttribute("data-splitline"), e.classList.remove("split-line", "bio_fade"), e.style.removeProperty("opacity"), e.style.removeProperty("transform"), e.style.removeProperty("clip-path"), e.style.removeProperty("visibility");
	});
}
function pa(e, t) {
	var n, r, i, a;
	let o = t.image.trim().length > 0;
	e.root.dataset.modalVariant = "default", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !o, e.imageLink.href = o ? t.image : "#", e.imageLink.setAttribute("data-lightbox-src", o ? t.image : ""), e.imageLink.setAttribute("data-lightbox-caption", t.caption), e.imageLink.setAttribute("data-lightbox-group", `modal-${t.id}`), o ? Ai(e.image, t.image, (n = t.imageSrcset) == null ? (r = t.gallery) == null || (r = r[0]) == null ? void 0 : r.srcset : n, 1080) : (e.image.onerror = null, e.image.removeAttribute("src")), e.image.alt = t.imageAlt, e.caption.textContent = t.caption, fa(e.text, t.html), da(e);
	let s = (i = (a = t.gallery) == null ? void 0 : a.slice(1).filter((e) => e.src)) == null ? [] : i;
	e.gallery.hidden = s.length === 0, s.forEach((t, n) => e.gallery.append(ua(t, n)));
}
function ma(e, t) {
	var n, r, i, a;
	let o = ((n = t.gallery) != null && n.length ? t.gallery : t.image.trim() ? [{
		src: t.image,
		alt: t.imageAlt,
		caption: t.caption
	}] : []).filter((e) => {
		var n;
		return e.src && e.src !== ((n = t.work) == null ? void 0 : n.thumbnail);
	});
	e.root.dataset.modalVariant = "context", e.root.dataset.modalId = t.id, e.address.textContent = t.address, e.imageLink.hidden = !0, e.imageLink.href = "#", e.imageLink.setAttribute("data-lightbox-src", ""), e.imageLink.setAttribute("data-lightbox-caption", ""), e.imageLink.setAttribute("data-lightbox-alt", ""), e.imageLink.setAttribute("data-lightbox-group", ""), e.image.removeAttribute("src"), e.image.onerror = null, e.image.alt = "", e.caption.textContent = "", e.headline.textContent = (r = t.headline) == null ? "" : r, e.headline.hidden = !t.headline, fa(e.text, t.html), e.work.replaceChildren(), e.work.hidden = !t.work, e.gallery.replaceChildren(), e.gallery.hidden = o.length === 0, e.rights.textContent = (i = (a = t.rights) == null ? void 0 : a.trim()) == null ? "" : i, e.rights.hidden = !e.rights.textContent, t.work && e.work.append(la(t.work)), o.forEach((t, n) => {
		e.gallery.append(ua(t, n));
	});
}
function ha(e) {
	let t = $i();
	return e.layout === "context" ? ma(t, e) : pa(t, e), t;
}
function ga(e) {
	let t = f(e.panel)[0];
	m(t == null ? e.panel : t);
}
function _a(e) {
	Yi !== null && (window.clearTimeout(Yi), Yi = null), e.root.hidden = !1, e.root.setAttribute("aria-hidden", "false"), e.root.classList.add("is-active"), e.root.offsetWidth, e.root.classList.add("is-visible"), document.documentElement.classList.add("is-modal-open"), document.body.classList.add("is-modal-open");
}
function va(e) {
	e.root.setAttribute("aria-hidden", "true"), e.root.classList.remove("is-visible"), Yi = window.setTimeout(() => {
		e.root.hidden = !0, e.root.classList.remove("is-active"), Yi = null;
	}, u() ? 0 : zi), document.documentElement.classList.remove("is-modal-open"), document.body.classList.remove("is-modal-open");
}
function ya(e, t) {
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
	qi && xa(), Xi.set(_.id, _), Ji = t == null ? c() : t, qi = _.id;
	let v = ha(_);
	_a(v), p(), ga(v), d(v.root, "site:modal-open", {
		id: qi,
		modal: v.root,
		content: _,
		trigger: t == null ? null : t
	});
}
function ba(e, t) {
	let n = sa(e);
	n && ya(n, t);
}
function xa() {
	if (!qi || !Ki) return;
	let t = qi, r = Ji;
	va(Ki), n(), qi = "", Ji = null, d(Ki.root, "site:modal-close", {
		id: t,
		modal: Ki.root
	}), e(r);
}
function Sa(e) {
	if (!(!qi || !Ki) && !document.body.classList.contains("is-lightbox-open")) {
		if (e.key === "Escape") {
			e.preventDefault(), xa();
			return;
		}
		y(Ki.panel, e);
	}
}
function Ca(e) {
	if (!Wi || !qi || !Ki) return;
	let t = e.target;
	!i(t) || t !== Ki.root || xa();
}
function wa(e) {
	var n;
	return Wi = (n = e.closeOnBackdrop) == null || n, Gi = e.i18n, oa(), $i(), Ui || (g(document, "click", Fi, (e, n) => {
		e.preventDefault(), ba(t(n, "data-modal-open"), n);
	}), g(document, "click", Li, (e, t) => {
		e.preventDefault(), ba(Zi(t), t);
	}), g(document, "click", Ii, (e, t) => {
		Ki != null && Ki.root.contains(t) && (e.preventDefault(), xa());
	}), document.addEventListener("click", Ca), document.addEventListener("keydown", Sa), Ui = !0), {
		openModal: ba,
		openContentModal: ya,
		closeModal: xa
	};
}
//#endregion
//#region src/modules/site-menu.ts
var Ta = "[data-site-menu]", Ea = "[data-site-menu-panel]", Da = "[data-site-menu-toggle]", Oa = "[data-site-menu-toggle-label]", ka = "[data-site-menu-toggle-label-text]", Aa = "[data-site-menu-toggle-label-ghost]", ja = "data-site-menu-toggle-label-text", Ma = "data-site-menu-toggle-label-ghost", Na = "[data-site-menu-link]", Pa = "[data-site-menu-indicator]", Fa = "is-active", Ia = "is-open", La = "is-ready", Ra = "data-site-menu-open-label", za = "data-site-menu-closed-label", Ba = "data-site-menu-current-key", Va = "data-site-menu-label", Ha = "data-site-menu-key", Ua = "data-site-menu-original-tabindex", Wa = "CLOSE", Ga = "MENU", Ka = .42, qa = [], Ja = !1;
function Ya(e) {
	return e.split("#")[0].split("?")[0].replace(/\/index\.html?$/i, "/").replace(/\/+$/g, "") || "/";
}
function Xa(e) {
	if (!(e instanceof HTMLAnchorElement)) return "";
	let t = r(e, "href");
	if (!t || t.startsWith("#") || t.startsWith("mailto:") || t.startsWith("tel:")) return "";
	try {
		return Ya(new URL(e.href, window.location.href).pathname);
	} catch (e) {
		return "";
	}
}
function Za(e, t) {
	return t ? r(e, Ha) === t : !1;
}
function Qa(e, t) {
	var n, i;
	if (e.classList.contains("w--current") || e.getAttribute("aria-current") === "page" || Za(e, r(t, Ba) || ((n = document.documentElement.getAttribute(Ba)) == null ? void 0 : n.trim()) || ((i = document.body.getAttribute(Ba)) == null ? void 0 : i.trim()) || "")) return !0;
	let a = Xa(e);
	return a ? a === Ya(window.location.pathname) : !1;
}
function $a(e) {
	var t, n;
	return r(e, Va) || ((t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t);
}
function eo(e) {
	var t;
	let n = (t = e.links.find((e) => e.classList.contains(Fa) || e.classList.contains("w--current"))) == null ? e.links.find((t) => Qa(t, e.root)) : t;
	return n ? $a(n) : "";
}
function to(e) {
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
			eo(e),
			r(e.root, za) || Ga,
			r(e.root, Ra) || Wa
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
function no(e) {
	var t, n;
	let r = s(ka, e);
	if (r) return r;
	let i = document.createElement("span");
	return i.setAttribute(ja, ""), i.textContent = (t = (n = e.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) == null ? "" : t, e.textContent = "", e.appendChild(i), i;
}
function ro(e) {
	o(Aa, e).forEach((e) => {
		b.killTweensOf(e), e.remove();
	});
}
function io(e, t = !0) {
	var n, i;
	let a = r(e.root, Ra) || Wa, o = r(e.root, za) || Ga, s = eo(e), c = e.isOpen ? a : e.isHovered ? o : s || o, l = (n = e.toggleLabel) == null ? e.toggle : n, d = no(l), f = (i = d.textContent) == null ? "" : i, p = e.labelTransition;
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
	if (p == null || p.timeline.kill(), e.labelTransition = void 0, b.killTweensOf(d), ro(l), b.set(d, { clearProps: "transform,opacity" }), d.removeAttribute("aria-hidden"), u() || !t || !m || m === c) {
		d.textContent = c;
		return;
	}
	let h = document.createElement("span");
	h.setAttribute(Ma, ""), h.setAttribute("aria-hidden", "true"), h.textContent = m, l.appendChild(h), d.textContent = c;
	let g = b.timeline({
		defaults: {
			duration: Ka,
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
function ao(e, t) {
	e.links.forEach((e) => {
		if (t) {
			let t = r(e, Ua);
			t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
			return;
		}
		!e.hasAttribute(Ua) && e.hasAttribute("tabindex") && e.setAttribute(Ua, String(e.tabIndex)), e.setAttribute("tabindex", "-1");
	});
}
function oo(e, t, n = !0) {
	e.isOpen = t, e.root.classList.toggle(Ia, t), e.toggle.setAttribute("aria-expanded", String(t)), e.panel.setAttribute("aria-hidden", String(!t)), ao(e, t), io(e, n);
}
function so(e, t, n) {
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
function co(e) {
	if (e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	oo(e, !0), so(e, !0, t);
}
function lo(e) {
	if (!e.isOpen) return;
	let t = e.panel.getBoundingClientRect().height;
	return oo(e, !1), so(e, !1, t);
}
function uo(e) {
	let t = s(Ea, e);
	if (t) return b.killTweensOf(t), b.to(t, {
		height: 0,
		duration: .4,
		ease: "power2.inOut"
	});
}
function fo(e) {
	e.isOpen ? lo(e) : co(e);
}
function po(e) {
	e.links.forEach((t) => {
		let n = Qa(t, e.root), r = s(Pa, t);
		t.classList.toggle(Fa, n), n ? t.setAttribute("aria-current", "page") : t.getAttribute("aria-current") === "page" && t.removeAttribute("aria-current"), r && r.setAttribute("aria-hidden", "true");
	});
}
function mo(e) {
	var t;
	let n = s(Ea, e), r = s(Da, e);
	if (!n || !r) return null;
	let i = {
		root: e,
		panel: n,
		toggle: r,
		toggleLabel: (t = s(Oa, r)) == null ? s(Oa, e) : t,
		links: o(Na, e),
		isOpen: e.classList.contains(Ia),
		isHovered: !1,
		cleanup: []
	};
	r.type || (r.type = "button"), n.id || (n.id = `site-menu-panel-${qa.length + 1}`), r.setAttribute("aria-controls", n.id), po(i), oo(i, i.isOpen, !1), i.cleanup.push(to(i)), e.classList.add(La);
	let a = (e) => {
		e.preventDefault(), fo(i);
	}, c = (t) => {
		!i.isOpen || !(t.target instanceof Node) || e.contains(t.target) || lo(i);
	}, l = (e) => {
		e.key !== "Escape" || !i.isOpen || (lo(i), i.toggle.focus({ preventScroll: !0 }));
	}, u = (e) => {
		let t = e.target;
		e.defaultPrevented || !(t instanceof Element) || !t.closest(Na) || lo(i);
	}, d = () => {
		i.isHovered = !0, io(i);
	}, f = () => {
		i.isHovered = !1, io(i);
	};
	return r.addEventListener("click", a), e.addEventListener("pointerenter", d), e.addEventListener("pointerleave", f), document.addEventListener("click", c), document.addEventListener("keydown", l), e.addEventListener("click", u), i.cleanup.push(() => r.removeEventListener("click", a), () => e.removeEventListener("pointerenter", d), () => e.removeEventListener("pointerleave", f), () => document.removeEventListener("click", c), () => document.removeEventListener("keydown", l), () => e.removeEventListener("click", u)), i;
}
function ho(e = document) {
	if (Ja && e === document) return () => void 0;
	e === document && (Ja = !0);
	let t = o(Ta, e).map(mo).filter((e) => !!e);
	return qa.push(...t), () => {
		t.forEach((e) => {
			var t, n;
			e.cleanup.forEach((e) => e()), e.root.classList.remove(La, Ia);
			let r = (t = e.toggleLabel) == null ? e.toggle : t, i = s(ka, r);
			(n = e.labelTransition) == null || n.timeline.kill(), b.killTweensOf(e.panel), b.killTweensOf(r), ro(r), i && (b.killTweensOf(i), r.textContent = i.textContent), b.set(e.panel, { clearProps: "height" }), b.set(r, { clearProps: "transform,overflow" }), e.panel.removeAttribute("aria-hidden"), e.toggle.removeAttribute("aria-expanded"), ao(e, !0);
		});
	};
}
//#endregion
//#region src/modules/page-transition.ts
var go = {
	coverDuration: .82,
	holdDuration: .1,
	revealDuration: .92,
	ease: "power4.inOut"
}, _o = "page-transition-overlay", vo = "[data-page-transition-overlay], .page-transition-overlay", yo = "page-transition-overlay__title", bo = "site-page-transition", xo = "site-page-transition-title", So = "pending", Co = "is-page-transition-pending", wo = "[data-site-menu]", To = [
	"[data-transition=\"false\"]",
	"[data-lightbox-src]",
	".js-lightbox",
	"[data-modal-open]",
	"[data-modal-close]",
	"[data-back-button]",
	"[data-work-overlay-trigger]",
	"[download]"
].join(","), Eo = !1, Do = !1;
function Oo(e) {
	document.documentElement.classList.toggle(Co, e);
}
function ko() {
	try {
		Oo(window.sessionStorage.getItem(bo) === So);
	} catch (e) {
		Oo(!1);
	}
}
function Ao() {
	let e = document.querySelector(vo);
	if (e) return e.classList.add(_o), e.setAttribute("data-page-transition-overlay", ""), e.setAttribute("aria-hidden", "true"), jo(e), e;
	let t = document.createElement("div");
	return t.className = _o, t.setAttribute("data-page-transition-overlay", ""), t.setAttribute("aria-hidden", "true"), jo(t), document.body.append(t), t;
}
function jo(e) {
	let t = e.querySelector(`.${yo}`);
	t || (t = document.createElement("span"), t.className = yo, e.append(t));
	try {
		if (window.sessionStorage.getItem(bo) === So) {
			var n;
			t.textContent = (n = window.sessionStorage.getItem(xo)) == null ? "" : n;
		}
	} catch (e) {}
	return t;
}
function Mo(e, t) {
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
function No(e) {
	var t;
	return !!(e.closest(To) || e.getAttribute("data-transition") === "false" || e.target && e.target !== "_self" || e.hasAttribute("download") || (t = e.getAttribute("href")) != null && t.trim().startsWith("#"));
}
function Po(e, t) {
	return !Do && !e.defaultPrevented && !l(e) && !No(t);
}
function Fo() {
	try {
		window.sessionStorage.setItem(bo, So), Oo(!0);
	} catch (e) {}
}
function Io() {
	try {
		let e = window.sessionStorage.getItem(bo) === So;
		return window.sessionStorage.removeItem(bo), window.sessionStorage.removeItem(xo), Oo(!1), e;
	} catch (e) {
		return Oo(!1), !1;
	}
}
function Lo(e) {
	let t = Io(), n = Array.from(document.querySelectorAll(wo)), r = () => {
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
		delay: go.holdDuration,
		duration: go.revealDuration,
		ease: go.ease,
		onComplete: () => {
			b.set(e, {
				yPercent: -100,
				y: 0
			}), r();
		}
	});
}
function Ro(e, t, n, r) {
	Do = !0, b.killTweensOf(t);
	let i = jo(t);
	i.textContent = r, b.set(i, {
		autoAlpha: 0,
		y: 18
	});
	try {
		window.sessionStorage.setItem(xo, r);
	} catch (e) {}
	let a = b.timeline();
	if (n) {
		b.killTweensOf(n);
		let e = uo(n);
		e && a.add(e);
	}
	a.call(Fo, [], 0), a.fromTo(t, {
		yPercent: -100,
		y: 0
	}, {
		yPercent: 0,
		duration: go.coverDuration,
		ease: go.ease,
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
function zo(e, t) {
	if (!e.persisted) return;
	Do = !1, Io(), b.killTweensOf(t), b.set(t, {
		yPercent: -100,
		y: 0
	}), jo(t).textContent = "";
	let n = document.querySelectorAll(wo);
	b.killTweensOf(n), b.set(n, { clearProps: "transform,opacity,visibility" });
	let r = document.querySelectorAll("[data-site-menu-panel]");
	b.killTweensOf(r), b.set(r, { clearProps: "height" });
}
function Bo() {
	if (Eo) return;
	if (!document.body) {
		document.addEventListener("DOMContentLoaded", Bo, { once: !0 });
		return;
	}
	Eo = !0;
	let e = Ao();
	ee(() => Lo(e)), document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("a[href]");
		if (!r) return;
		if (Do) {
			t.preventDefault();
			return;
		}
		if (!Po(t, r)) return;
		let i = h(r);
		!i || u() || (t.preventDefault(), Ro(i, e, r.closest(wo), Mo(i, r)));
	}, !0), window.addEventListener("pageshow", (t) => zo(t, e));
}
ko();
//#endregion
//#region src/modules/parallax.ts
var Vo = "[data-parallax]", Ho = "data-parallax", Uo = "data-parallax-ready", Wo = "fw-parallax-window", Go = "fw-parallax-window--self-sized", Ko = "fw-parallax-inner", qo = 60, Jo = 160, Yo = ".site-lightbox-trigger", Xo = 1, Zo = !1;
function Qo() {
	Zo || (Zo = !0, b.registerPlugin($));
}
function $o(e) {
	let t = e.getAttribute(Ho);
	if (t === null || t.trim() === "") return qo;
	let n = Number.parseFloat(t);
	return Number.isFinite(n) ? Math.min(Math.abs(n), Jo) : qo;
}
function es(e) {
	return e.complete && e.naturalWidth > 0 ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			e.removeEventListener("load", n), e.removeEventListener("error", n), t();
		};
		e.addEventListener("load", n, { once: !0 }), e.addEventListener("error", n, { once: !0 });
	});
}
function ts(e, t) {
	var n;
	let r = (n = e.closest(Yo)) == null ? e.parentElement : n;
	if (!r || r.classList.contains(Wo)) return null;
	let i = r.getBoundingClientRect().height;
	if (i <= 0) return null;
	r.classList.add(Wo);
	let a = document.createElement("span"), o = t / 2 + Xo;
	if (a.className = Ko, a.style.top = `${-o}px`, a.style.bottom = `${-o}px`, e.before(a), a.append(e), r.getBoundingClientRect().height < i - 1) {
		let t = e.naturalWidth / e.naturalHeight;
		if (!Number.isFinite(t) || t <= 0) return a.before(e), a.remove(), r.classList.remove(Wo), null;
		r.classList.add(Go), r.style.aspectRatio = `${e.naturalWidth} / ${e.naturalHeight}`;
	}
	return a;
}
function ns(e, t) {
	let n = e instanceof HTMLImageElement ? [e] : o("img", e);
	if (n.length === 0) {
		b.fromTo(e, { y: t / 2 }, {
			y: -t / 2,
			ease: "none",
			scrollTrigger: rs(e)
		});
		return;
	}
	n.forEach((n) => {
		es(n).then(() => {
			if (!n.isConnected) return;
			let r = ts(n, t);
			r && (b.fromTo(r, { y: t / 2 }, {
				y: -t / 2,
				ease: "none",
				scrollTrigger: rs(e)
			}), $.refresh());
		});
	});
}
function rs(e) {
	return {
		trigger: e,
		start: "top bottom",
		end: "bottom top",
		scrub: .5,
		invalidateOnRefresh: !0
	};
}
function is(e = document) {
	let t = o(Vo, e).filter((e) => !e.hasAttribute(Uo));
	t.length === 0 || u() || (Qo(), t.forEach((e) => {
		let t = $o(e);
		t !== 0 && (e.setAttribute(Uo, ""), ns(e, t));
	}));
}
//#endregion
//#region src/modules/more-arrows.ts
var as = "\n  <path data-more-arrow-dot d=\"M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z\" fill=\"currentColor\"/>\n  <path data-more-arrow-head d=\"M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z\" fill=\"currentColor\"/>\n";
function os(e) {
	var t, n;
	if (!/^mehr\s+erfahren$/i.test((t = (n = e.textContent) == null ? void 0 : n.trim()) == null ? "" : t)) return;
	let r = e.querySelector("svg.arrow");
	r != null && r.hasAttribute("data-more-arrow") || (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("arrow"), e.appendChild(r)), r.classList.add("more-arrow"), r.setAttribute("data-more-arrow", ""), r.setAttribute("viewBox", "40 49 19 15"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false"), r.innerHTML = as);
}
function ss(e) {
	e instanceof Element && e.matches("a, button, [role=\"button\"]") && os(e), e.querySelectorAll("a, button, [role=\"button\"]").forEach(os);
}
function cs() {
	ss(document), new MutationObserver((e) => {
		for (let t of e) for (let e of t.addedNodes) e instanceof Element && ss(e);
	}).observe(document.body, {
		childList: !0,
		subtree: !0
	});
}
//#endregion
//#region src/modules/spline-slider.ts
var ls = ".werk_hero_slider", us = ".werk_hero_track";
function ds(e, t) {
	let n = e.parentElement;
	for (; n && n.parentElement !== t;) n = n.parentElement;
	return (n == null ? void 0 : n.parentElement) === t ? n : null;
}
function fs(e) {
	var t, n;
	let r = Array.from(e.children).filter((e) => e instanceof HTMLElement);
	return (t = (n = r.find((e) => !e.inert && e.getAttribute("aria-hidden") !== "true")) == null ? r[0] : n) == null ? null : t;
}
function ps(e) {
	let t = e.closest(ls), n = t == null ? void 0 : t.querySelector(us);
	if (!n) return !1;
	if (typeof getComputedStyle == "function") {
		let t = getComputedStyle(e);
		if (t.display === "none" || t.visibility === "hidden") return !0;
	}
	let r = ds(e, n), i = fs(n);
	return !!(r && i && r !== i);
}
//#endregion
//#region src/modules/site-preloader-assets.ts
function ms(e, t) {
	return new Promise((n) => {
		let r = () => {
			t.removeEventListener("abort", r), n();
		};
		if (t.aborted) return r();
		t.addEventListener("abort", r, { once: !0 }), e.then(r, r);
	});
}
function hs(e, t) {
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
function gs(e, t) {
	return fetch(e, {
		signal: t,
		cache: "force-cache",
		credentials: "omit"
	}).then(async (e) => {
		e.ok && await e.arrayBuffer();
	}).catch(() => void 0);
}
function _s(e) {
	if (!(e != null && e.trim())) return null;
	try {
		let t = new URL(e, document.baseURI);
		return /^(https?:|data:|blob:)$/.test(t.protocol) ? t.href : null;
	} catch (e) {
		return null;
	}
}
function vs(e) {
	var t;
	let n = (t = e.closest("[data-preload-priority]")) == null ? void 0 : t.getAttribute("data-preload-priority");
	return n === "critical" || n === "warm" ? n : void 0;
}
function ys(e) {
	let t = e.getBoundingClientRect();
	return t.width > 0 && t.height > 0 && t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
}
function bs(e, t) {
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
function xs() {
	let e = /* @__PURE__ */ new Map(), t = (t) => {
		let n = e.get(t.key);
		(!n || n.priority === "warm" && t.priority === "critical") && e.set(t.key, t);
	}, n = (e, n, r) => {
		t({
			key: `${n}:${e}`,
			priority: r,
			load: (t) => {
				if (n === "spline") return gs(e, t);
				let r = new Image();
				return r.src = e, hs(r, t);
			}
		});
	};
	for (let [e, n] of Array.from(document.images).entries()) {
		var r;
		if (n.closest("[data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], [data-modal-content], [data-modal], #wmCmsSource, template")) continue;
		let i = vs(n);
		if (!i && (n.closest("[hidden]") || getComputedStyle(n).display === "none")) continue;
		let a = n.getBoundingClientRect(), o = a.top > window.innerHeight * 2 || a.bottom < -window.innerHeight;
		if (!i && !n.closest("[data-site-preloader]") && o) {
			n.loading = "lazy";
			continue;
		}
		let s = _s(n.currentSrc || n.getAttribute("src")), c = n.srcset || ((r = n.closest("picture")) == null ? void 0 : r.querySelector("source[srcset]"));
		!s && !c || t({
			key: s ? `image:${s}` : `image:responsive-${e}`,
			priority: i == null ? n.closest("[data-site-preloader]") || ys(n) ? "critical" : "warm" : i,
			load: (e) => hs(n, e)
		});
	}
	let i = document.querySelector(".site-preloader__signature");
	i && n(new URL("preloader-background.svg", i.src).href, "image", "critical");
	for (let [e, r] of Array.from(document.querySelectorAll("spline-viewer, [data-animation-type=\"spline\"], [data-preload-spline], iframe[src]")).entries()) {
		var a;
		if (r.matches("[data-animation-type=\"spline\"]") && ps(r)) continue;
		let i = r instanceof HTMLIFrameElement, o = _s(r.getAttribute("data-preload-spline-url") || r.getAttribute("data-spline-url") || r.getAttribute("url") || r.getAttribute("src"));
		if (!o || i && !r.hasAttribute("data-preload-spline") && !/(^|\.)spline\.design$/.test(new URL(o).hostname)) continue;
		let s = r.matches("[data-animation-type=\"spline\"][data-spline-url]"), c = (a = vs(r)) == null ? s ? "critical" : "warm" : a, l = r.matches("spline-viewer, [data-animation-type=\"spline\"]");
		c === "critical" && l ? t({
			key: `spline-runtime:${e}:${o}`,
			priority: c,
			load: (e) => bs(r, e)
		}) : i ? t(c === "critical" ? {
			key: `spline:${o}`,
			priority: c,
			load: (e) => (r.loading = "eager", bs(r, e))
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
			let t = _s(e.url);
			t && n(t, e.type, e.priority === "critical" ? "critical" : "warm");
		}
	} catch (e) {}
	return document.fonts && t({
		key: "fonts",
		priority: "critical",
		load: (e) => ms(document.fonts.load("500 16px \"StyreneA\"").then(() => document.fonts.ready), e)
	}), Array.from(e.values());
}
function Ss(e) {
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
async function Cs(e) {
	var t;
	if ((t = navigator.connection) != null && t.saveData) return;
	let n = new AbortController(), r = () => n.abort();
	window.addEventListener("pagehide", r, { once: !0 });
	let i = window.setTimeout(r, 3e4), a = e.filter((e) => e.priority === "warm"), o = async () => {
		for (; a.length && !n.signal.aborted;) await ms(a.shift().load(n.signal), n.signal);
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
//#region src/modules/site-preloader-markup.ts
var ws = {
	title: 400,
	date: 1500,
	settle: 3400,
	loading: 4200
};
function Ts() {
	var e;
	let t = window.__sitePreloader;
	if (!(t != null && t.active) || document.querySelector("[data-site-preloader]")) return;
	let n = document.createElement("div");
	n.className = "site-preloader", n.setAttribute("data-site-preloader", ""), n.setAttribute("data-lenis-prevent", ""), n.setAttribute("role", "progressbar"), n.setAttribute("aria-label", document.documentElement.lang.startsWith("de") ? "Website wird geladen" : "Loading website"), n.setAttribute("aria-valuemin", "0"), n.setAttribute("aria-valuemax", "100"), n.setAttribute("aria-valuenow", "0");
	let r = document.createElement("div");
	r.className = "site-preloader__progress-mask";
	let i = document.createElement("div");
	i.className = "site-preloader__progress", i.setAttribute("aria-hidden", "true");
	for (let e = 0; e < 3; e++) {
		let t = document.createElement("span");
		t.className = "site-preloader__digit", t.hidden = e < 2;
		let n = document.createElement("span");
		n.className = "site-preloader__track";
		for (let e = 0; e < 2; e++) {
			let e = document.createElement("span");
			e.textContent = "0", n.appendChild(e);
		}
		t.appendChild(n), i.appendChild(t);
	}
	let a = document.createElement("span");
	a.className = "site-preloader__suffix", a.textContent = "%", i.appendChild(a), r.appendChild(i);
	let o = document.createElement("div");
	o.className = "site-preloader__name", o.setAttribute("aria-hidden", "true");
	for (let [e, t] of ["Franz West", "1947—2012"].entries()) {
		let n = document.createElement("div");
		n.className = e === 0 ? "site-preloader__title" : "site-preloader__date", n.textContent = t, o.appendChild(n);
	}
	let s = document.createElement("img");
	s.className = "site-preloader__signature", s.alt = "", s.width = 1507, s.height = 642, s.loading = "eager";
	let c = document.currentScript, l = (c == null ? void 0 : c.getAttribute("data-site-script-base")) || (c == null ? void 0 : c.src) || new URL("dist/site-body.js", document.baseURI).href;
	s.src = new URL("../assets/preloader-signature.svg", l).href;
	let u = document.createElement("span");
	u.className = "site-preloader__signature-variant", u.setAttribute("aria-hidden", "true");
	let d = document.createElement("div");
	d.className = "site-preloader__signature-stage", d.setAttribute("aria-hidden", "true"), d.appendChild(s), d.appendChild(u), n.appendChild(r), n.appendChild(o), n.appendChild(d), document.body.appendChild(n), w(T);
	let f = !1, p = -1, m = [
		175,
		199,
		222,
		226,
		227,
		227,
		227
	], h = (e) => {
		if (e !== p) {
			if (p = e, n.setAttribute("data-signature-index", String(e)), d.style.setProperty("--signature-width", `${m[e] / 227 * 100}%`), e === 0) s.style.visibility = "visible", u.style.display = "none";
			else {
				let t = `url("${D[e - 1]}")`;
				u.style.maskImage = t, u.style.setProperty("-webkit-mask-image", t), u.style.display = "block", s.style.visibility = "hidden";
			}
			f && !g && (d.classList.remove("is-impact"), d.offsetWidth, d.classList.add("is-impact"));
		}
	}, g = window.matchMedia("(prefers-reduced-motion: reduce)").matches, _ = [], v;
	t.introReady = new Promise((e) => {
		v = e;
	}), t.setSignatureIndex = h;
	let y = (e, n) => {
		_.push(window.setTimeout(() => {
			t.active && e();
		}, n));
	}, b = () => {
		if (!t.active) return;
		let e = Math.max(36, Math.min(window.innerHeight * .08, 72)), r = window.innerHeight / 2 - e - o.offsetHeight / 2;
		if (o.style.setProperty("--intro-shift", `${-r}px`), o.classList.add("is-ready"), g) {
			o.classList.add("is-settled"), o.children[0].classList.add("is-visible"), o.children[1].classList.add("is-visible"), n.classList.add("is-loading"), f = !0, h(0), t.sceneTwoStartedAt = Date.now(), v();
			return;
		}
		y(() => o.children[0].classList.add("is-visible"), ws.title), y(() => o.children[1].classList.add("is-visible"), ws.date), y(() => o.classList.add("is-settled"), ws.settle), y(() => {
			n.classList.add("is-loading"), f = !0, h(0), t.sceneTwoStartedAt = Date.now(), v();
		}, ws.loading);
	};
	(e = document.fonts) != null && e.ready && document.fonts.ready.then(b, b), t.cleanup.push(() => {
		_.forEach(window.clearTimeout), v(), t.setSignatureIndex = void 0;
	});
	let x = /* @__PURE__ */ new Map(), S = () => {
		for (let e of Array.from(document.body.children)) !(e instanceof HTMLElement) || e === n || /^(SCRIPT|STYLE|LINK)$/.test(e.tagName) || x.has(e) || (x.set(e, e.inert), e.inert = !0);
	};
	S();
	let C = new MutationObserver(S);
	C.observe(document.body, { childList: !0 }), t.cleanup.push(() => {
		C.disconnect(), x.forEach((e, t) => {
			t.inert = e;
		}), x.clear();
	});
}
//#endregion
//#region src/modules/site-preloader.ts
var Es = /* @__PURE__ */ new WeakSet(), Ds = null, Os = 6800, ks = 600, As = 500, js = 1300;
function Ms(e) {
	return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function Ns(e) {
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
function Ps(e, t) {
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
function Fs(e) {
	let t = u(), n = !1, r = !1, i = 0, a = 0, o, s = new Promise((e) => {
		o = e;
	}), c = (t) => {
		if (n) return;
		let r = Math.min(1, (t - a) / Os);
		Ps(e, (.6 * r + .4 * Ms(r)) * 100), r === 1 ? o() : i = window.requestAnimationFrame(c);
	};
	return {
		start: () => {
			r || n || (r = !0, a = performance.now(), t ? (Ps(e, 100), o()) : i = window.requestAnimationFrame(c));
		},
		complete: s,
		stop: () => {
			n = !0, window.cancelAnimationFrame(i);
		}
	};
}
function Is(e, t) {
	return new Promise((n) => {
		let r = () => {
			window.clearTimeout(i), t.removeEventListener("abort", r), n();
		}, i = window.setTimeout(r, Math.max(0, e));
		t.addEventListener("abort", r, { once: !0 }), t.aborted && r();
	});
}
function Ls(e) {
	return document.readyState === "complete" || e.aborted ? Promise.resolve() : new Promise((t) => {
		let n = () => {
			window.removeEventListener("load", n), e.removeEventListener("abort", n), t();
		};
		window.addEventListener("load", n, { once: !0 }), e.addEventListener("abort", n, { once: !0 });
	});
}
async function Rs(e, t) {
	t.aborted || (document.documentElement.classList.add(S), e.classList.add("is-fading"), await Is(u() ? 0 : As, t), !t.aborted && (e.classList.add("is-curtain"), await Is(u() ? 0 : js, t)));
}
function zs() {
	var e, t;
	let n = window.__sitePreloader;
	if (!(n != null && n.active) || Es.has(n)) return;
	Es.add(n);
	let r = document.querySelector(te);
	if (!r) {
		n.release();
		return;
	}
	Ds || (Ds = document.createElement("button"), Ds.type = "button", Ds.className = "site-preloader-replay", Ds.textContent = "Replay", Ds.hidden = !0, Ds.addEventListener("click", () => {
		Ds.hidden = !0;
		try {
			window.sessionStorage.removeItem(C);
		} catch (e) {}
		window.__sitePreloader = void 0, k(), Ts(), zs();
	}), document.body.appendChild(Ds)), Ds.hidden = !0, n.ready.then(() => {
		Ds && (Ds.hidden = !1);
	});
	let i = new AbortController(), a = Fs(r);
	(e = n.allowExit) == null || e.call(n), ((t = n.introReady) == null ? Promise.resolve() : t).then(() => {
		n.active && a.start();
	}), n.cleanup.push(() => {
		i.abort(), a.stop();
		let e = r.querySelectorAll(".site-preloader__track");
		e.length && b.killTweensOf(e);
	});
	let o = async () => {
		if (await Ss(i.signal), !n.active) return;
		let e = xs(), t = e.filter((e) => e.priority === "critical");
		await Promise.all(t.map(async (e) => {
			await ms(Promise.resolve().then(() => e.load(i.signal)), i.signal);
		})), n.active && (await Ns(i.signal), n.active && (await n.introReady, n.active && (await Promise.all([a.complete, Ls(i.signal)]), n.active && (await Is(u() ? 0 : Math.max(0, E - (Date.now() - n.startedAt)), i.signal), n.active && (await Is(u() ? 0 : ks, i.signal), n.active && (await Rs(r, i.signal), n.active && (n.release(), Cs(e))))))));
	}, s = () => {
		o().catch(n.release);
	};
	document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
//#endregion
//#region src/modules/smooth-scroll.ts
var Bs = !1, Vs = !1;
function Hs() {
	if (Vs || u()) return;
	Vs = !0;
	let e, t = () => {
		let t = window.lenis;
		if (Bs || !window.__siteLenisManaged || !t) return;
		Bs = !0, b.registerPlugin($), t.on("scroll", $.update);
		let n = (e) => t.raf(e * 1e3);
		b.ticker.add(n), b.ticker.lagSmoothing(0), window.__siteLenisTickerConnected = !0, window.dispatchEvent(new Event("site:lenis-ticker-connected")), $.refresh(), e = () => {
			b.ticker.remove(n), t.off("scroll", $.update), Bs = !1, window.__siteLenisTickerConnected = !1, e = void 0;
		};
	};
	window.addEventListener("pagehide", () => e == null ? void 0 : e()), window.addEventListener("pageshow", (e) => {
		var n;
		e.persisted && (t(), (n = window.lenis) == null || n.resize());
	}), t(), Bs || window.addEventListener("site:lenis-ready", t, { once: !0 });
}
//#endregion
//#region src/main.ts
var Us = !1;
zs(), Bo(), Ir(), Hs();
function Ws() {
	if (Us) return;
	Us = !0;
	let e = A();
	wa({ i18n: e }), Oi({ i18n: e }), is(), ho(), de(), _(), O(), cs(), window.SiteInteractions = {
		openModal: ba,
		openContentModal: ya,
		closeModal: xa,
		openLightbox: wi,
		closeLightbox: Ti
	};
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ws, { once: !0 }) : Ws();
//#endregion

//# sourceMappingURL=site-interactions.js.map