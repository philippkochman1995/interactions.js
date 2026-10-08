//#region src/west-map.ts
(function() {
	var e = {
		Ausstellungen: "wm-cat-ausstellungen",
		Werke: "wm-cat-werke",
		"Wichtige Orte": "wm-cat-orte"
	}, t = {
		Ausstellungen: "a",
		Werke: "w",
		"Wichtige Orte": "o"
	}, n = {
		"wm-dot-ausstellungen": "Ausstellungen",
		"wm-dot-werke": "Werke",
		"wm-dot-orte": "Wichtige Orte"
	}, r = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M13.4152 8V13.068L13.068 13.4152H8V15.5849H13.068L13.4152 15.932V21H15.5848V15.932L15.932 15.5849H21V13.4152H15.932L15.5848 13.068V8H13.4152Z\" fill=\"#FAFDFF\"/></svg>", i = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M9 16V13H20V16H9Z\" fill=\"#FAFDFF\"/></svg>", a = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><g clip-path=\"url(#wmFilterClip)\"><path d=\"M14.5075 10.2998H6.60848L6.30859 10.7506L7.3437 12.2998H14.5026H14.5075H21.6582L22.6932 10.7506L22.3933 10.2998H14.5075Z\" fill=\"#FAFDFF\"/><path d=\"M15.1369 14.5H9.29988C9.17037 14.6947 9 14.9508 9 14.9508L10.0351 16.5H15.1321H15.1369H19.2339L20.2689 14.9508C20.1393 14.7561 20.0985 14.6947 19.969 14.5H15.1369Z\" fill=\"#FAFDFF\"/><path d=\"M14.0832 18.7002H12.2999L12 19.151L13.0351 20.7002H14.0783H14.0832H16.1264L17.1613 19.151L16.8614 18.7002H14.0832Z\" fill=\"#FAFDFF\"/></g><defs><clipPath id=\"wmFilterClip\"><rect width=\"17\" height=\"12\" fill=\"white\" transform=\"translate(6 9.5)\"/></clipPath></defs></svg>";
	function o(e) {
		document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
	}
	o(function() {
		var o = document.getElementById("wmMap");
		if (!o || typeof mapboxgl > "u") return;
		var s = o.getAttribute("data-mapbox-token");
		if (!s) {
			console.error("West Map: #wmMap benötigt das Attribut data-mapbox-token.");
			return;
		}
		mapboxgl.accessToken = s;
		var c = o.parentElement;
		c.classList.add("wm-page"), Array.prototype.forEach.call(c.children, function(e) {
			e.tagName === "DIV" && !e.id && (e.querySelector("a") ? e.classList.add("wm-overview-slot") : e.querySelector("svg") && e.classList.add("wm-scrolldown-slot"));
		});
		var l = document.getElementById("wmLegend");
		l && (l.classList.add("wm-legend"), document.body.appendChild(l));
		var u = document.getElementById("wmLabelsSwitch"), d, f;
		if (u) {
			u.classList.add("wm-switch");
			var p = u.parentElement;
			p.classList.add("wm-legend-toggle-row"), f = p.cloneNode(!0), f.classList.add("wm-current-row"), f.querySelector("span").textContent = "Aktuell zu sehen", d = f.querySelector("#wmLabelsSwitch"), d.id = "wmCurrentSwitch", d.setAttribute("aria-label", "Nur aktuell zu sehende Orte"), p.parentElement.insertBefore(f, p);
			var m = p.previousElementSibling;
			m && !m.classList.length && m.classList.add("wm-legend-divider");
		}
		var h = document.getElementById("wmCmsSource");
		h && h.classList.add("wm-cms-source");
		function g() {
			var e = Math.min(o.clientHeight * .68, o.clientWidth * .88) * .97;
			return Math.max(0, Math.min(3, Math.log2(Math.max(1, e) * Math.PI / 512)));
		}
		var _ = document.querySelector(".top_bar_center .nav_logo");
		function v() {
			var e = _ ? _.getBoundingClientRect().bottom - o.getBoundingClientRect().top : 0;
			return {
				top: Math.max(0, Math.min(o.clientHeight - 1, e)),
				bottom: 0,
				left: 0,
				right: 0
			};
		}
		var y = new mapboxgl.Map({
			container: "wmMap",
			style: "mapbox://styles/mapbox/light-v11",
			projection: "globe",
			center: [16.3738, 10],
			bearing: 0,
			pitch: 0,
			zoom: g(),
			minZoom: 0,
			maxZoom: 18
		});
		y.setPadding(v());
		var b = null, x = window.matchMedia("(prefers-reduced-motion: reduce)").matches, S = 0;
		function C() {
			x || (x = !0, cancelAnimationFrame(S), S = 0, y.stop());
		}
		function w() {
			if (S = 0, !x) {
				var e = y.getCenter();
				y.easeTo({
					center: [e.lng - 3.6, e.lat],
					duration: 1e3,
					easing: function(e) {
						return e;
					}
				});
			}
		}
		function T() {
			x || S || (S = requestAnimationFrame(w));
		}
		[
			"pointerdown",
			"mousedown",
			"touchstart",
			"wheel",
			"keydown",
			"click"
		].forEach(function(e) {
			o.addEventListener(e, function() {
				b = null, C();
			}, {
				capture: !0,
				passive: !0
			});
		}), y.on("remove", C);
		function E() {
			b = null, y.setPadding(v()), x || y.jumpTo({ zoom: g() });
		}
		if (y.on("resize", E), _) {
			var D = new ResizeObserver(E);
			D.observe(_), y.on("remove", function() {
				D.disconnect();
			});
		}
		y.on("style.load", function() {
			y.setFog({
				color: "#ffffff",
				"high-color": "#ffffff",
				"space-color": "#ffffff",
				"horizon-blend": .02,
				"star-intensity": 0
			});
		});
		var O = document.querySelector(".top_bar_right");
		if (O) {
			var k = document.createElement("div");
			k.className = "wm-zoom-controls";
			var A = document.createElement("button");
			A.type = "button", A.className = "wm-zoom-btn", A.setAttribute("aria-label", "Reinzoomen"), A.innerHTML = r;
			var j = document.createElement("button");
			j.type = "button", j.className = "wm-zoom-btn", j.setAttribute("aria-label", "Rauszoomen"), j.innerHTML = i;
			var M = document.createElement("button");
			M.type = "button", M.className = "wm-zoom-btn wm-filter-btn", M.setAttribute("aria-label", "Legende"), M.setAttribute("aria-expanded", "false"), M.innerHTML = a, k.appendChild(A), k.appendChild(j), k.appendChild(M), l && l.parentElement === O ? O.insertBefore(k, l) : O.appendChild(k);
			function e() {
				var e = y.cameraForBounds([[-12, 34], [36, 72]]);
				return e && Number.isFinite(e.zoom) ? Math.max(0, Math.min(18, e.zoom - .25)) : 3;
			}
			function t(t) {
				C();
				var n = b === null ? y.getZoom() : b, r = e(), i = t > 0 ? n + (n >= r ? 2 : 1) : n > r ? Math.max(r, n - 2) : n - 1;
				i = Math.max(0, Math.min(18, i)), !(Math.abs(i - n) < .001) && (y.zoomTo(i), b = i);
			}
			y.on("zoomend", function() {
				b !== null && Math.abs(y.getZoom() - b) < .001 && (b = null);
			}), A.addEventListener("click", function() {
				t(1);
			}), j.addEventListener("click", function() {
				t(-1);
			});
			var N = document.createElement("span");
			N.className = "wm-filter-slot";
			function n() {
				var e = N.getBoundingClientRect();
				M.style.left = e.left + "px", M.style.top = e.top + "px";
			}
			function o() {
				var e = M.getBoundingClientRect();
				N.style.width = e.width + "px", N.style.height = e.height + "px", k.replaceChild(N, M), document.body.appendChild(M), M.classList.add("is-floating"), n();
			}
			function s() {
				k.replaceChild(M, N), M.classList.remove("is-floating"), M.style.removeProperty("left"), M.style.removeProperty("top");
			}
			function c() {
				if (l) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = M.classList.contains("is-floating") ? N.getBoundingClientRect() : M.getBoundingClientRect();
					l.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px";
				}
			}
			M.addEventListener("click", function() {
				if (l) {
					var e = l.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", e), M.setAttribute("aria-expanded", e ? "true" : "false"), e ? (c(), o()) : s();
				}
			}), window.addEventListener("resize", function() {
				l && l.classList.contains("is-open") && (c(), n());
			}), document.addEventListener("click", function(e) {
				!l || !l.classList.contains("is-open") || l.contains(e.target) || M.contains(e.target) || (l.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), M.setAttribute("aria-expanded", "false"), s());
			});
		} else y.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		var P = document.createElement("div");
		P.className = "wm-map-fade", o.appendChild(P);
		function F(e, t) {
			if (Math.abs(t - y.getZoom()) <= 4) {
				y.easeTo({
					center: e,
					zoom: t
				});
				return;
			}
			P.classList.add("is-active"), setTimeout(function() {
				y.jumpTo({
					center: e,
					zoom: t
				});
				var n = !1;
				function r() {
					n || (n = !0, P.classList.remove("is-active"));
				}
				y.once("idle", r), setTimeout(r, 2500);
			}, 280);
		}
		function I(e) {
			window.SiteInteractions && window.SiteInteractions.openContentModal({
				id: "west-map-detail",
				address: e.name && e.adresse ? e.name + " | " + e.adresse : e.name || e.adresse || "",
				image: e.bild || "",
				imageAlt: e.name || "",
				caption: e.bildrechte || "",
				html: e.text || "",
				gallery: e.gallery
			});
		}
		u && (u.setAttribute("aria-checked", "false"), u.addEventListener("click", function() {
			var e = u.classList.toggle("is-on");
			u.setAttribute("aria-checked", e ? "true" : "false"), document.body.classList.toggle("wm-labels-on", e);
		}), u.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), u.click());
		}));
		var L = [];
		document.querySelectorAll(".wm-cms-item").forEach(function(e) {
			var t = parseFloat((e.querySelector(".wm-f-lat") || {}).textContent || ""), n = parseFloat((e.querySelector(".wm-f-lng") || {}).textContent || "");
			if (!(isNaN(t) || isNaN(n))) {
				var r = e.querySelector(".wm-f-bild"), i = e.querySelector(".wm-f-text"), a = [{
					src: r && r.getAttribute("src") || "",
					alt: "",
					caption: (e.querySelector(".wm-f-bildrechte") || {}).textContent || ""
				}];
				[2, 3].forEach(function(t) {
					var n = e.querySelector(".wm-f-bild-" + t);
					n && n.getAttribute("src") && a.push({
						src: n.getAttribute("src"),
						alt: n.getAttribute("alt") || "",
						caption: (e.querySelector(".wm-f-bild-" + t + "-unterschrift") || {}).textContent || ""
					});
				}), L.push({
					lat: t,
					lng: n,
					name: (e.querySelector(".wm-f-name") || {}).textContent || "",
					adresse: (e.querySelector(".wm-f-adresse") || {}).textContent || "",
					kategorie: ((e.querySelector(".wm-f-kategorie") || {}).textContent || "").trim(),
					bildrechte: (e.querySelector(".wm-f-bildrechte") || {}).textContent || "",
					bild: r ? r.getAttribute("src") : "",
					gallery: a,
					text: i ? i.innerHTML : "",
					aktuell: !!e.querySelector(".wm-f-bildrechte + div")
				});
			}
		});
		var R = !1, z = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function B() {
			var e = [];
			return L.forEach(function(n, r) {
				z[n.kategorie] === !1 || R && !n.aktuell || e.push({
					type: "Feature",
					id: r,
					properties: {
						idx: r,
						kat: t[n.kategorie] || "o"
					},
					geometry: {
						type: "Point",
						coordinates: [n.lng, n.lat]
					}
				});
			}), e;
		}
		function V() {
			for (var e in Y) clearTimeout(Y[e]), delete Y[e];
			for (var t in q) q[t].remove(), q[t]._wmAdded = !1;
			q = {}, J = {};
			var n = y.getSource("wmOrte");
			n && n.setData({
				type: "FeatureCollection",
				features: B()
			});
		}
		d && (d.setAttribute("aria-checked", "false"), d.addEventListener("click", function() {
			R = d.classList.toggle("is-on"), d.setAttribute("aria-checked", R ? "true" : "false"), f.classList.toggle("is-on", R), V();
		}), d.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), d.click());
		}));
		function H(e, t) {
			e.classList.toggle("is-off", z[t] === !1);
		}
		function U() {
			l && l.querySelectorAll(".wm-legend-item").forEach(function(e) {
				var t = e.querySelector(".wm-dot"), r = null;
				if (t) for (var i in n) t.classList.contains(i) && (r = n[i]);
				r && H(e, r);
			});
		}
		l && (l.querySelectorAll(".wm-legend-item").forEach(function(e) {
			e.addEventListener("click", function() {
				var t = e.querySelector(".wm-dot"), r = null;
				if (t) for (var i in n) t.classList.contains(i) && (r = n[i]);
				if (r) {
					if (z[r] === !1) z[r] = !0;
					else for (var a in z) z[a] = a === r;
					U(), V();
				}
			});
		}), U());
		function W(e) {
			var t = document.createElement("div");
			t.className = "wm-marker " + e;
			var n = document.createElement("div");
			return n.className = "wm-marker-inner", t.appendChild(n), {
				el: t,
				inner: n
			};
		}
		function G(t) {
			var n = W(e[t.kategorie] || "wm-cat-orte"), r = document.createElement("div");
			if (r.className = "wm-marker-circle", t.bild && (r.style.backgroundImage = "url(" + t.bild + ")"), n.inner.appendChild(r), t.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = t.adresse, n.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = t.name, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				I(t);
			}), n.el;
		}
		function K(e, t) {
			var n = W("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
			r.className = "wm-marker-circle";
			var i = L[e.firstIdx];
			i && i.bild && (r.style.backgroundImage = "url(" + i.bild + ")"), n.inner.appendChild(r);
			var a = document.createElement("div");
			return a.className = "wm-cluster-badge", a.textContent = e.point_count_abbreviated, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				y.getSource("wmOrte").getClusterExpansionZoom(e.cluster_id, function(e, n) {
					e || F(t, n + .2);
				});
			}), n.el;
		}
		var q = {}, J = {}, Y = {};
		function X(e, t) {
			Y[e] && (clearTimeout(Y[e]), delete Y[e]), t._wmAdded || (t.addTo(y), t._wmAdded = !0);
			var n = t.getElement();
			n.classList.contains("wm-visible") || (n.offsetWidth, n.classList.add("wm-visible"));
		}
		function Z(e, t) {
			Y[e] || (t.getElement().classList.remove("wm-visible"), Y[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete Y[e];
			}, 200));
		}
		function Q() {
			for (var e = {}, t = y.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = q[o];
					if (!s) {
						var c = i.cluster ? K(i, a) : G(L[i.idx]);
						s = new mapboxgl.Marker({
							element: c,
							anchor: "center"
						}).setLngLat(a), q[o] = s;
					}
					e[o] = s, X(o, s);
				}
			}
			for (var l in J) e[l] || Z(l, J[l]);
			J = e;
		}
		y.on("load", function() {
			y.addSource("wmOrte", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: B()
				},
				cluster: !0,
				clusterMaxZoom: 17,
				clusterRadius: 60,
				clusterProperties: {
					firstIdx: ["min", ["get", "idx"]],
					hasW: ["max", [
						"case",
						[
							"==",
							["get", "kat"],
							"w"
						],
						1,
						0
					]],
					hasA: ["max", [
						"case",
						[
							"==",
							["get", "kat"],
							"a"
						],
						1,
						0
					]]
				}
			}), y.addLayer({
				id: "wmOrteHidden",
				type: "circle",
				source: "wmOrte",
				paint: {
					"circle-radius": 0,
					"circle-opacity": 0
				}
			}), y.on("render", function() {
				y.isSourceLoaded("wmOrte") && Q();
			}), y.on("moveend", Q), y.on("moveend", T), T();
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map