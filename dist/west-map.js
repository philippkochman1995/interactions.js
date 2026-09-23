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
		l && l.classList.add("wm-legend");
		var u = document.getElementById("wmLabelsSwitch");
		if (u) {
			u.classList.add("wm-switch");
			var d = u.parentElement;
			d.classList.add("wm-legend-toggle-row");
			var f = d.previousElementSibling;
			f && !f.classList.length && f.classList.add("wm-legend-divider");
		}
		var p = document.getElementById("wmCmsSource");
		p && p.classList.add("wm-cms-source");
		function m() {
			var e = Math.min(o.clientHeight * .68, o.clientWidth * .88);
			return Math.max(0, Math.min(3, Math.log2(Math.max(1, e) * Math.PI / 512)));
		}
		var h = new mapboxgl.Map({
			container: "wmMap",
			style: "mapbox://styles/mapbox/light-v11",
			projection: "globe",
			center: [16.3738, 10],
			zoom: m(),
			minZoom: 0,
			maxZoom: 18
		}), g = !1, _ = 0, v = null;
		function y() {
			g = !0, cancelAnimationFrame(_), _ = 0;
		}
		function b(e) {
			if (!g) {
				if (v !== null) {
					var t = Math.min(e - v, 64) / 1e3, n = h.getCenter();
					h.jumpTo({ center: [(n.lng - t * 3 + 540) % 360 - 180, n.lat] });
				}
				v = e, _ = requestAnimationFrame(b);
			}
		}
		[
			"pointerdown",
			"mousedown",
			"touchstart",
			"wheel",
			"keydown",
			"click"
		].forEach(function(e) {
			o.addEventListener(e, y, {
				capture: !0,
				passive: !0
			});
		}), h.on("remove", y), h.on("resize", function() {
			g || h.jumpTo({ zoom: m() });
		}), h.on("style.load", function() {
			h.setFog({
				color: "#ffffff",
				"high-color": "#ffffff",
				"space-color": "#ffffff",
				"horizon-blend": .02,
				"star-intensity": 0
			});
		});
		var x = document.querySelector(".top_bar_right");
		if (x) {
			var S = document.createElement("div");
			S.className = "wm-zoom-controls";
			var C = document.createElement("button");
			C.type = "button", C.className = "wm-zoom-btn", C.setAttribute("aria-label", "Reinzoomen"), C.innerHTML = r;
			var w = document.createElement("button");
			w.type = "button", w.className = "wm-zoom-btn", w.setAttribute("aria-label", "Rauszoomen"), w.innerHTML = i;
			var T = document.createElement("button");
			T.type = "button", T.className = "wm-zoom-btn wm-filter-btn", T.setAttribute("aria-label", "Legende"), T.setAttribute("aria-expanded", "false"), T.innerHTML = a, S.appendChild(C), S.appendChild(w), S.appendChild(T), l && l.parentElement === x ? x.insertBefore(S, l) : x.appendChild(S), C.addEventListener("click", function() {
				y(), h.zoomIn();
			}), w.addEventListener("click", function() {
				y(), h.zoomOut();
			});
			function e() {
				if (l) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = T.getBoundingClientRect();
					l.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px";
				}
			}
			T.addEventListener("click", function() {
				if (l) {
					e();
					var t = l.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", t), T.setAttribute("aria-expanded", t ? "true" : "false");
				}
			}), window.addEventListener("resize", function() {
				l && l.classList.contains("is-open") && e();
			}), document.addEventListener("click", function(e) {
				!l || !l.classList.contains("is-open") || l.contains(e.target) || T.contains(e.target) || (l.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), T.setAttribute("aria-expanded", "false"));
			});
		} else h.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		var E = document.createElement("div");
		E.className = "wm-map-fade", o.appendChild(E);
		function D(e, t) {
			if (Math.abs(t - h.getZoom()) <= 4) {
				h.easeTo({
					center: e,
					zoom: t
				});
				return;
			}
			E.classList.add("is-active"), setTimeout(function() {
				h.jumpTo({
					center: e,
					zoom: t
				});
				var n = !1;
				function r() {
					n || (n = !0, E.classList.remove("is-active"));
				}
				h.once("idle", r), setTimeout(r, 2500);
			}, 280);
		}
		function O(e) {
			window.SiteInteractions && window.SiteInteractions.openContentModal({
				id: "west-map-detail",
				address: e.name && e.adresse ? e.name + " | " + e.adresse : e.name || e.adresse || "",
				image: e.bild || "",
				imageAlt: e.name || "",
				caption: e.bildrechte || "",
				html: e.text || ""
			});
		}
		u && (u.setAttribute("aria-checked", "false"), u.addEventListener("click", function() {
			var e = u.classList.toggle("is-on");
			u.setAttribute("aria-checked", e ? "true" : "false"), document.body.classList.toggle("wm-labels-on", e);
		}), u.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), u.click());
		}));
		var k = [];
		document.querySelectorAll(".wm-cms-item").forEach(function(e) {
			var t = parseFloat((e.querySelector(".wm-f-lat") || {}).textContent || ""), n = parseFloat((e.querySelector(".wm-f-lng") || {}).textContent || "");
			if (!(isNaN(t) || isNaN(n))) {
				var r = e.querySelector(".wm-f-bild"), i = e.querySelector(".wm-f-text");
				k.push({
					lat: t,
					lng: n,
					name: (e.querySelector(".wm-f-name") || {}).textContent || "",
					adresse: (e.querySelector(".wm-f-adresse") || {}).textContent || "",
					kategorie: ((e.querySelector(".wm-f-kategorie") || {}).textContent || "").trim(),
					bildrechte: (e.querySelector(".wm-f-bildrechte") || {}).textContent || "",
					bild: r ? r.getAttribute("src") : "",
					text: i ? i.innerHTML : ""
				});
			}
		});
		var A = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function j() {
			var e = [];
			return k.forEach(function(n, r) {
				A[n.kategorie] !== !1 && e.push({
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
		function M() {
			for (var e in R) clearTimeout(R[e]), delete R[e];
			for (var t in I) I[t].remove(), I[t]._wmAdded = !1;
			I = {}, L = {};
			var n = h.getSource("wmOrte");
			n && n.setData({
				type: "FeatureCollection",
				features: j()
			});
		}
		l && l.querySelectorAll(".wm-legend-item").forEach(function(e) {
			e.addEventListener("click", function() {
				var t = e.querySelector(".wm-dot"), r = null;
				if (t) for (var i in n) t.classList.contains(i) && (r = n[i]);
				r && (A[r] = !e.classList.toggle("is-off"), M());
			});
		});
		function N(e) {
			var t = document.createElement("div");
			t.className = "wm-marker " + e;
			var n = document.createElement("div");
			return n.className = "wm-marker-inner", t.appendChild(n), {
				el: t,
				inner: n
			};
		}
		function P(t) {
			var n = N(e[t.kategorie] || "wm-cat-orte"), r = document.createElement("div");
			if (r.className = "wm-marker-circle", t.bild && (r.style.backgroundImage = "url(" + t.bild + ")"), n.inner.appendChild(r), t.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = t.adresse, n.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = t.name, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				O(t);
			}), n.el;
		}
		function F(e, t) {
			var n = N("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
			r.className = "wm-marker-circle";
			var i = k[e.firstIdx];
			i && i.bild && (r.style.backgroundImage = "url(" + i.bild + ")"), n.inner.appendChild(r);
			var a = document.createElement("div");
			return a.className = "wm-cluster-badge", a.textContent = e.point_count_abbreviated, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				h.getSource("wmOrte").getClusterExpansionZoom(e.cluster_id, function(e, n) {
					e || D(t, n + .2);
				});
			}), n.el;
		}
		var I = {}, L = {}, R = {};
		function z(e, t) {
			R[e] && (clearTimeout(R[e]), delete R[e]), t._wmAdded || (t.addTo(h), t._wmAdded = !0);
			var n = t.getElement();
			n.classList.contains("wm-visible") || (n.offsetWidth, n.classList.add("wm-visible"));
		}
		function B(e, t) {
			R[e] || (t.getElement().classList.remove("wm-visible"), R[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete R[e];
			}, 200));
		}
		function V() {
			for (var e = {}, t = h.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = I[o];
					if (!s) {
						var c = i.cluster ? F(i, a) : P(k[i.idx]);
						s = new mapboxgl.Marker({
							element: c,
							anchor: "center"
						}).setLngLat(a), I[o] = s;
					}
					e[o] = s, z(o, s);
				}
			}
			for (var l in L) e[l] || B(l, L[l]);
			L = e;
		}
		h.on("load", function() {
			h.addSource("wmOrte", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: j()
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
			}), h.addLayer({
				id: "wmOrteHidden",
				type: "circle",
				source: "wmOrte",
				paint: {
					"circle-radius": 0,
					"circle-opacity": 0
				}
			}), h.on("render", function() {
				h.isSourceLoaded("wmOrte") && V();
			}), h.on("moveend", V), g || (_ = requestAnimationFrame(b));
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map