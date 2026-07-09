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
		var m = new mapboxgl.Map({
			container: "wmMap",
			style: "mapbox://styles/mapbox/light-v11",
			center: [16.3738, 48.2082],
			zoom: 12,
			minZoom: 1,
			maxZoom: 18
		}), h = document.querySelector(".top_bar_right");
		if (h) {
			var g = document.createElement("div");
			g.className = "wm-zoom-controls";
			var _ = document.createElement("button");
			_.type = "button", _.className = "wm-zoom-btn", _.setAttribute("aria-label", "Reinzoomen"), _.innerHTML = r;
			var v = document.createElement("button");
			v.type = "button", v.className = "wm-zoom-btn", v.setAttribute("aria-label", "Rauszoomen"), v.innerHTML = i;
			var y = document.createElement("button");
			y.type = "button", y.className = "wm-zoom-btn wm-filter-btn", y.setAttribute("aria-label", "Legende"), y.setAttribute("aria-expanded", "false"), y.innerHTML = a, g.appendChild(_), g.appendChild(v), g.appendChild(y), l && l.parentElement === h ? h.insertBefore(g, l) : h.appendChild(g), _.addEventListener("click", function() {
				m.zoomIn();
			}), v.addEventListener("click", function() {
				m.zoomOut();
			});
			function e() {
				if (l) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = y.getBoundingClientRect();
					l.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px";
				}
			}
			y.addEventListener("click", function() {
				if (l) {
					e();
					var t = l.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", t), y.setAttribute("aria-expanded", t ? "true" : "false");
				}
			}), window.addEventListener("resize", function() {
				l && l.classList.contains("is-open") && e();
			}), document.addEventListener("click", function(e) {
				!l || !l.classList.contains("is-open") || l.contains(e.target) || y.contains(e.target) || (l.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), y.setAttribute("aria-expanded", "false"));
			});
		} else m.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		var b = document.createElement("div");
		b.className = "wm-map-fade", o.appendChild(b);
		function x(e, t) {
			if (Math.abs(t - m.getZoom()) <= 4) {
				m.easeTo({
					center: e,
					zoom: t
				});
				return;
			}
			b.classList.add("is-active"), setTimeout(function() {
				m.jumpTo({
					center: e,
					zoom: t
				});
				var n = !1;
				function r() {
					n || (n = !0, b.classList.remove("is-active"));
				}
				m.once("idle", r), setTimeout(r, 2500);
			}, 280);
		}
		function S(e) {
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
		var C = [];
		document.querySelectorAll(".wm-cms-item").forEach(function(e) {
			var t = parseFloat((e.querySelector(".wm-f-lat") || {}).textContent || ""), n = parseFloat((e.querySelector(".wm-f-lng") || {}).textContent || "");
			if (!(isNaN(t) || isNaN(n))) {
				var r = e.querySelector(".wm-f-bild"), i = e.querySelector(".wm-f-text");
				C.push({
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
		var w = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function T() {
			var e = [];
			return C.forEach(function(n, r) {
				w[n.kategorie] !== !1 && e.push({
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
		function E() {
			for (var e in M) clearTimeout(M[e]), delete M[e];
			for (var t in A) A[t].remove(), A[t]._wmAdded = !1;
			A = {}, j = {};
			var n = m.getSource("wmOrte");
			n && n.setData({
				type: "FeatureCollection",
				features: T()
			});
		}
		l && l.querySelectorAll(".wm-legend-item").forEach(function(e) {
			e.addEventListener("click", function() {
				var t = e.querySelector(".wm-dot"), r = null;
				if (t) for (var i in n) t.classList.contains(i) && (r = n[i]);
				r && (w[r] = !e.classList.toggle("is-off"), E());
			});
		});
		function D(e) {
			var t = document.createElement("div");
			t.className = "wm-marker " + e;
			var n = document.createElement("div");
			return n.className = "wm-marker-inner", t.appendChild(n), {
				el: t,
				inner: n
			};
		}
		function O(t) {
			var n = D(e[t.kategorie] || "wm-cat-orte"), r = document.createElement("div");
			if (r.className = "wm-marker-circle", t.bild && (r.style.backgroundImage = "url(" + t.bild + ")"), n.inner.appendChild(r), t.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = t.adresse, n.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = t.name, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				S(t);
			}), n.el;
		}
		function k(e, t) {
			var n = D("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
			r.className = "wm-marker-circle";
			var i = C[e.firstIdx];
			i && i.bild && (r.style.backgroundImage = "url(" + i.bild + ")"), n.inner.appendChild(r);
			var a = document.createElement("div");
			return a.className = "wm-cluster-badge", a.textContent = e.point_count_abbreviated, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				m.getSource("wmOrte").getClusterExpansionZoom(e.cluster_id, function(e, n) {
					e || x(t, n + .2);
				});
			}), n.el;
		}
		var A = {}, j = {}, M = {};
		function N(e, t) {
			M[e] && (clearTimeout(M[e]), delete M[e]), t._wmAdded || (t.addTo(m), t._wmAdded = !0);
			var n = t.getElement();
			n.classList.contains("wm-visible") || (n.offsetWidth, n.classList.add("wm-visible"));
		}
		function P(e, t) {
			M[e] || (t.getElement().classList.remove("wm-visible"), M[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete M[e];
			}, 200));
		}
		function F() {
			for (var e = {}, t = m.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = A[o];
					if (!s) {
						var c = i.cluster ? k(i, a) : O(C[i.idx]);
						s = new mapboxgl.Marker({
							element: c,
							anchor: "center"
						}).setLngLat(a), A[o] = s;
					}
					e[o] = s, N(o, s);
				}
			}
			for (var l in j) e[l] || P(l, j[l]);
			j = e;
		}
		m.on("load", function() {
			m.addSource("wmOrte", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: T()
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
			}), m.addLayer({
				id: "wmOrteHidden",
				type: "circle",
				source: "wmOrte",
				paint: {
					"circle-radius": 0,
					"circle-opacity": 0
				}
			}), m.on("render", function() {
				m.isSourceLoaded("wmOrte") && F();
			}), m.on("moveend", F);
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map