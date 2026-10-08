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
		var g = new mapboxgl.Map({
			container: "wmMap",
			style: "mapbox://styles/mapbox/light-v11",
			projection: "globe",
			bounds: [[-12, 34], [37, 61]],
			fitBoundsOptions: { padding: 24 },
			bearing: 0,
			pitch: 0,
			dragRotate: !1,
			minZoom: 0,
			maxZoom: 18
		});
		g.touchZoomRotate.disableRotation(), g.on("style.load", function() {
			g.setFog({
				color: "#ffffff",
				"high-color": "#ffffff",
				"space-color": "#ffffff",
				"horizon-blend": .02,
				"star-intensity": 0
			});
		});
		var _ = null;
		[
			"pointerdown",
			"mousedown",
			"touchstart",
			"wheel",
			"keydown",
			"click"
		].forEach(function(e) {
			o.addEventListener(e, function() {
				_ = null;
			}, {
				capture: !0,
				passive: !0
			});
		});
		var v = document.querySelector(".top_bar_right");
		if (v) {
			var y = document.createElement("div");
			y.className = "wm-zoom-controls";
			var b = document.createElement("button");
			b.type = "button", b.className = "wm-zoom-btn", b.setAttribute("aria-label", "Reinzoomen"), b.innerHTML = r;
			var x = document.createElement("button");
			x.type = "button", x.className = "wm-zoom-btn", x.setAttribute("aria-label", "Rauszoomen"), x.innerHTML = i;
			var S = document.createElement("button");
			S.type = "button", S.className = "wm-zoom-btn wm-filter-btn", S.setAttribute("aria-label", "Legende"), S.setAttribute("aria-expanded", "false"), S.innerHTML = a, y.appendChild(b), y.appendChild(x), y.appendChild(S), l && l.parentElement === v ? v.insertBefore(y, l) : v.appendChild(y);
			function e() {
				var e = g.cameraForBounds([[-12, 34], [36, 72]]);
				return e && Number.isFinite(e.zoom) ? Math.max(0, Math.min(18, e.zoom - .25)) : 3;
			}
			function t(t) {
				var n = _ === null ? g.getZoom() : _, r = e(), i = t > 0 ? n + (n >= r ? 2 : 1) : n > r ? Math.max(r, n - 2) : n - 1;
				i = Math.max(0, Math.min(18, i)), !(Math.abs(i - n) < .001) && (g.zoomTo(i), _ = i);
			}
			g.on("zoomend", function() {
				_ !== null && Math.abs(g.getZoom() - _) < .001 && (_ = null);
			}), b.addEventListener("click", function() {
				t(1);
			}), x.addEventListener("click", function() {
				t(-1);
			});
			var C = document.createElement("span");
			C.className = "wm-filter-slot";
			function n() {
				var e = C.getBoundingClientRect();
				S.style.left = e.left + "px", S.style.top = e.top + "px";
			}
			function o() {
				var e = S.getBoundingClientRect();
				C.style.width = e.width + "px", C.style.height = e.height + "px", y.replaceChild(C, S), document.body.appendChild(S), S.classList.add("is-floating"), n();
			}
			function s() {
				y.replaceChild(S, C), S.classList.remove("is-floating"), S.style.removeProperty("left"), S.style.removeProperty("top");
			}
			function c() {
				if (l) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = S.classList.contains("is-floating") ? C.getBoundingClientRect() : S.getBoundingClientRect();
					l.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px";
				}
			}
			S.addEventListener("click", function() {
				if (l) {
					var e = l.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", e), S.setAttribute("aria-expanded", e ? "true" : "false"), e ? (c(), o()) : s();
				}
			}), window.addEventListener("resize", function() {
				l && l.classList.contains("is-open") && (c(), n());
			}), document.addEventListener("click", function(e) {
				!l || !l.classList.contains("is-open") || l.contains(e.target) || S.contains(e.target) || (l.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), S.setAttribute("aria-expanded", "false"), s());
			});
		} else g.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		var w = document.createElement("div");
		w.className = "wm-map-fade", o.appendChild(w);
		function T(e, t) {
			if (Math.abs(t - g.getZoom()) <= 4) {
				g.easeTo({
					center: e,
					zoom: t
				});
				return;
			}
			w.classList.add("is-active"), setTimeout(function() {
				g.jumpTo({
					center: e,
					zoom: t
				});
				var n = !1;
				function r() {
					n || (n = !0, w.classList.remove("is-active"));
				}
				g.once("idle", r), setTimeout(r, 2500);
			}, 280);
		}
		function E(e) {
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
		var D = [];
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
				}), D.push({
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
		var O = !1, k = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function A() {
			var e = [];
			return D.forEach(function(n, r) {
				k[n.kategorie] === !1 || O && !n.aktuell || e.push({
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
		function j() {
			for (var e in L) clearTimeout(L[e]), delete L[e];
			for (var t in F) F[t].remove(), F[t]._wmAdded = !1;
			F = {}, I = {};
			var n = g.getSource("wmOrte");
			n && n.setData({
				type: "FeatureCollection",
				features: A()
			});
		}
		d && (d.setAttribute("aria-checked", "false"), d.addEventListener("click", function() {
			O = d.classList.toggle("is-on"), d.setAttribute("aria-checked", O ? "true" : "false"), f.classList.toggle("is-on", O), j();
		}), d.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), d.click());
		})), l && l.querySelectorAll(".wm-legend-item").forEach(function(e) {
			var t = e.querySelector(".wm-dot"), r = null;
			if (t) for (var i in n) t.classList.contains(i) && (r = n[i]);
			if (r) {
				var a = r, o = document.createElement("button");
				o.type = "button", o.className = "wm-switch is-on wm-category-switch", o.setAttribute("role", "switch"), o.setAttribute("aria-label", a), o.setAttribute("aria-checked", "true"), o.innerHTML = "<span class=\"wm-switch-track\"></span><span class=\"wm-switch-thumb\"></span>", e.appendChild(o), o.addEventListener("click", function() {
					k[a] = !k[a], o.classList.toggle("is-on", k[a]), o.setAttribute("aria-checked", k[a] ? "true" : "false"), e.classList.toggle("is-off", !k[a]), j();
				});
			}
		});
		function M(e) {
			var t = document.createElement("div");
			t.className = "wm-marker " + e;
			var n = document.createElement("div");
			return n.className = "wm-marker-inner", t.appendChild(n), {
				el: t,
				inner: n
			};
		}
		function N(t) {
			var n = M(e[t.kategorie] || "wm-cat-orte"), r = document.createElement("div");
			if (r.className = "wm-marker-circle", t.bild && (r.style.backgroundImage = "url(" + t.bild + ")"), n.inner.appendChild(r), t.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = t.adresse, n.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = t.name, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				E(t);
			}), n.el;
		}
		function P(e, t) {
			var n = M("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
			r.className = "wm-marker-circle";
			var i = D[e.firstIdx];
			i && i.bild && (r.style.backgroundImage = "url(" + i.bild + ")"), n.inner.appendChild(r);
			var a = document.createElement("div");
			return a.className = "wm-cluster-badge", a.textContent = e.point_count_abbreviated, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				g.getSource("wmOrte").getClusterExpansionZoom(e.cluster_id, function(e, n) {
					e || T(t, n + .2);
				});
			}), n.el;
		}
		var F = {}, I = {}, L = {};
		function R(e, t) {
			L[e] && (clearTimeout(L[e]), delete L[e]), t._wmAdded || (t.addTo(g), t._wmAdded = !0);
			var n = t.getElement();
			n.classList.contains("wm-visible") || (n.offsetWidth, n.classList.add("wm-visible"));
		}
		function z(e, t) {
			L[e] || (t.getElement().classList.remove("wm-visible"), L[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete L[e];
			}, 200));
		}
		function B() {
			for (var e = {}, t = g.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = F[o];
					if (!s) {
						var c = i.cluster ? P(i, a) : N(D[i.idx]);
						s = new mapboxgl.Marker({
							element: c,
							anchor: "center"
						}).setLngLat(a), F[o] = s;
					}
					e[o] = s, R(o, s);
				}
			}
			for (var l in I) e[l] || z(l, I[l]);
			I = e;
		}
		g.on("load", function() {
			g.addSource("wmOrte", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: A()
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
			}), g.addLayer({
				id: "wmOrteHidden",
				type: "circle",
				source: "wmOrte",
				paint: {
					"circle-radius": 0,
					"circle-opacity": 0
				}
			}), g.on("render", function() {
				g.isSourceLoaded("wmOrte") && B();
			}), g.on("moveend", B);
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map