import { t as e } from "./site-interactions-DTXrvFAf.js";
import { t } from "./site-interactions-CahnrWDV.js";
//#region src/west-map.ts
(function() {
	var n = {
		Ausstellungen: "wm-cat-ausstellungen",
		Werke: "wm-cat-werke",
		"Wichtige Orte": "wm-cat-orte"
	}, r = {
		Ausstellungen: "a",
		Werke: "w",
		"Wichtige Orte": "o"
	}, i = {
		"wm-dot-ausstellungen": "Ausstellungen",
		"wm-dot-werke": "Werke",
		"wm-dot-orte": "Wichtige Orte"
	}, a = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M13.4152 8V13.068L13.068 13.4152H8V15.5849H13.068L13.4152 15.932V21H15.5848V15.932L15.932 15.5849H21V13.4152H15.932L15.5848 13.068V8H13.4152Z\" fill=\"#FAFDFF\"/></svg>", o = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M9 16V13H20V16H9Z\" fill=\"#FAFDFF\"/></svg>", s = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><g clip-path=\"url(#wmFilterClip)\"><path d=\"M14.5075 10.2998H6.60848L6.30859 10.7506L7.3437 12.2998H14.5026H14.5075H21.6582L22.6932 10.7506L22.3933 10.2998H14.5075Z\" fill=\"#FAFDFF\"/><path d=\"M15.1369 14.5H9.29988C9.17037 14.6947 9 14.9508 9 14.9508L10.0351 16.5H15.1321H15.1369H19.2339L20.2689 14.9508C20.1393 14.7561 20.0985 14.6947 19.969 14.5H15.1369Z\" fill=\"#FAFDFF\"/><path d=\"M14.0832 18.7002H12.2999L12 19.151L13.0351 20.7002H14.0783H14.0832H16.1264L17.1613 19.151L16.8614 18.7002H14.0832Z\" fill=\"#FAFDFF\"/></g><defs><clipPath id=\"wmFilterClip\"><rect width=\"17\" height=\"12\" fill=\"white\" transform=\"translate(6 9.5)\"/></clipPath></defs></svg>";
	function c(e) {
		document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
	}
	c(async function() {
		var c = document.getElementById("wmMap");
		if (!c || typeof mapboxgl > "u") return;
		var l = c.getAttribute("data-mapbox-token");
		if (!l) {
			console.error("West Map: #wmMap benötigt das Attribut data-mapbox-token.");
			return;
		}
		mapboxgl.accessToken = l, await document.fonts.load("500 16px \"StyreneA\"").catch(function() {
			return [];
		});
		var u = c.parentElement;
		u.classList.add("wm-page"), Array.prototype.forEach.call(u.children, function(e) {
			e.tagName === "DIV" && !e.id && (e.querySelector("a") ? e.classList.add("wm-overview-slot") : e.querySelector("svg") && e.classList.add("wm-scrolldown-slot"));
		});
		var d = document.getElementById("wmLegend");
		d && (d.classList.add("wm-legend"), document.body.appendChild(d));
		var f = document.getElementById("wmLabelsSwitch"), p, m;
		if (f) {
			f.classList.add("wm-switch");
			var h = f.parentElement;
			h.classList.add("wm-legend-toggle-row"), m = h.cloneNode(!0), m.classList.add("wm-current-row"), m.querySelector("span").textContent = "Aktuell zu sehen", p = m.querySelector("#wmLabelsSwitch"), p.id = "wmCurrentSwitch", p.setAttribute("aria-label", "Nur aktuell zu sehende Orte"), h.parentElement.insertBefore(m, h);
			var g = h.previousElementSibling;
			g && !g.classList.length && g.classList.add("wm-legend-divider");
		}
		var _ = document.getElementById("wmCmsSource");
		_ && _.classList.add("wm-cms-source");
		var v = new mapboxgl.Map({
			container: "wmMap",
			style: "mapbox://styles/mapbox/light-v11",
			localFontFamily: "StyreneA",
			projection: "globe",
			bounds: [[-12, 34], [37, 61]],
			fitBoundsOptions: { padding: 24 },
			maxBounds: [[-180, -75], [180, 75]],
			bearing: 0,
			pitch: 0,
			dragRotate: !1,
			minZoom: 0,
			maxZoom: 18
		});
		v.touchZoomRotate.disableRotation(), v.on("style.load", function() {
			v.setFog({
				color: "#ffffff",
				"high-color": "#ffffff",
				"space-color": "#ffffff",
				"horizon-blend": .02,
				"star-intensity": 0
			});
		});
		var y = null;
		[
			"pointerdown",
			"mousedown",
			"touchstart",
			"wheel",
			"keydown",
			"click"
		].forEach(function(e) {
			c.addEventListener(e, function() {
				y = null;
			}, {
				capture: !0,
				passive: !0
			});
		});
		var b = document.querySelector(".top_bar_right");
		if (b) {
			var x = document.createElement("div");
			x.className = "wm-zoom-controls";
			var S = document.createElement("button");
			S.type = "button", S.className = "wm-zoom-btn", S.setAttribute("aria-label", "Reinzoomen"), S.innerHTML = a;
			var C = document.createElement("button");
			C.type = "button", C.className = "wm-zoom-btn", C.setAttribute("aria-label", "Rauszoomen"), C.innerHTML = o;
			var w = document.createElement("button");
			w.type = "button", w.className = "wm-zoom-btn wm-filter-btn", w.setAttribute("aria-label", "Legende"), w.setAttribute("aria-expanded", "false"), w.innerHTML = s, x.appendChild(S), x.appendChild(C), x.appendChild(w), d && d.parentElement === b ? b.insertBefore(x, d) : b.appendChild(x);
			function e() {
				var e = v.cameraForBounds([[-12, 34], [36, 72]]);
				return e && Number.isFinite(e.zoom) ? Math.max(0, Math.min(18, e.zoom - .25)) : 3;
			}
			function t(t) {
				var n = y === null ? v.getZoom() : y, r = e(), i = t > 0 ? n + (n >= r ? 2 : 1) : n > r ? Math.max(r, n - 2) : n - 1;
				i = Math.max(0, Math.min(18, i)), !(Math.abs(i - n) < .001) && (v.zoomTo(i), y = i);
			}
			v.on("zoomend", function() {
				y !== null && Math.abs(v.getZoom() - y) < .001 && (y = null);
			}), S.addEventListener("click", function() {
				t(1);
			}), C.addEventListener("click", function() {
				t(-1);
			});
			var T = document.createElement("span");
			T.className = "wm-filter-slot";
			function n() {
				if (d) {
					var e = d.querySelector(".wm-legend-header"), t = e && e.querySelector("span");
					if (e && t) {
						var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = w.getBoundingClientRect();
						w.style.left = n.right - i.width + "px", w.style.top = r.top + (r.height - i.height) / 2 + "px";
						return;
					}
				}
				var a = T.getBoundingClientRect();
				w.style.left = a.left + "px", w.style.top = a.top + "px";
			}
			function r() {
				var e = w.getBoundingClientRect();
				T.style.width = e.width + "px", T.style.height = e.height + "px", x.replaceChild(T, w), document.body.appendChild(w), w.classList.add("is-floating"), n();
			}
			function i() {
				x.replaceChild(w, T), w.classList.remove("is-floating"), w.style.removeProperty("left"), w.style.removeProperty("top");
			}
			function c() {
				if (d) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = w.classList.contains("is-floating") ? T.getBoundingClientRect() : w.getBoundingClientRect();
					d.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px", d.style.removeProperty("top");
					var n = d.querySelector(".wm-legend-header > span");
					if (n) {
						var r = d.getBoundingClientRect().top, i = n.getBoundingClientRect(), a = t.top + t.height / 2, o = i.top + i.height / 2;
						d.style.top = r + a - o + "px";
					}
				}
			}
			w.addEventListener("click", function() {
				if (d) {
					var e = d.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", e), w.setAttribute("aria-expanded", e ? "true" : "false"), e ? (c(), r()) : i();
				}
			}), window.addEventListener("resize", function() {
				d && d.classList.contains("is-open") && (c(), n());
			}), document.addEventListener("click", function(e) {
				!d || !d.classList.contains("is-open") || d.contains(e.target) || w.contains(e.target) || (d.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), w.setAttribute("aria-expanded", "false"), i());
			});
		} else v.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		var E = document.createElement("div");
		E.className = "wm-map-fade", c.appendChild(E);
		function D(e, t) {
			if (Math.abs(t - v.getZoom()) <= 4) {
				v.easeTo({
					center: e,
					zoom: t
				});
				return;
			}
			E.classList.add("is-active"), setTimeout(function() {
				v.jumpTo({
					center: e,
					zoom: t
				});
				var n = !1;
				function r() {
					n || (n = !0, E.classList.remove("is-active"));
				}
				v.once("idle", r), setTimeout(r, 2500);
			}, 280);
		}
		function O(t) {
			window.SiteInteractions && (e("map_location_opened", {
				category: t.kategorie || "other",
				is_current: !!t.aktuell
			}), window.SiteInteractions.openContentModal({
				id: "west-map-detail",
				address: t.name && t.adresse ? t.name + " | " + t.adresse : t.name || t.adresse || "",
				image: t.bild || "",
				imageSrcset: t.gallery && t.gallery[0] && t.gallery[0].srcset || "",
				imageAlt: t.name || "",
				caption: t.bildrechte || "",
				html: t.text || "",
				gallery: t.gallery
			}));
		}
		f && (f.setAttribute("aria-checked", "false"), f.addEventListener("click", function() {
			var e = f.classList.toggle("is-on");
			f.setAttribute("aria-checked", e ? "true" : "false"), document.body.classList.toggle("wm-labels-on", e);
		}), f.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), f.click());
		}));
		var k = [];
		document.querySelectorAll(".wm-cms-item").forEach(function(e) {
			var n = parseFloat((e.querySelector(".wm-f-lat") || {}).textContent || ""), r = parseFloat((e.querySelector(".wm-f-lng") || {}).textContent || "");
			if (!(isNaN(n) || isNaN(r))) {
				var i = e.querySelector(".wm-f-bild"), a = e.querySelector(".wm-f-text"), o = [{
					src: i && i.getAttribute("src") || "",
					srcset: i && i.getAttribute("srcset") || "",
					alt: "",
					caption: (e.querySelector(".wm-f-bildrechte") || {}).textContent || ""
				}];
				[2, 3].forEach(function(t) {
					var n = e.querySelector(".wm-f-bild-" + t);
					n && n.getAttribute("src") && o.push({
						src: n.getAttribute("src"),
						srcset: n.getAttribute("srcset") || "",
						alt: n.getAttribute("alt") || "",
						caption: (e.querySelector(".wm-f-bild-" + t + "-unterschrift") || {}).textContent || ""
					});
				}), k.push({
					lat: n,
					lng: r,
					name: (e.querySelector(".wm-f-name") || {}).textContent || "",
					adresse: (e.querySelector(".wm-f-adresse") || {}).textContent || "",
					kategorie: ((e.querySelector(".wm-f-kategorie") || {}).textContent || "").trim(),
					bildrechte: (e.querySelector(".wm-f-bildrechte") || {}).textContent || "",
					bild: i ? i.getAttribute("src") : "",
					markerBild: t(i),
					gallery: o,
					text: a ? a.innerHTML : "",
					aktuell: !!e.querySelector(".wm-f-bildrechte + div")
				});
			}
		});
		var A = !1, j = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function M() {
			var e = [];
			return k.forEach(function(t, n) {
				j[t.kategorie] === !1 || A && !t.aktuell || e.push({
					type: "Feature",
					id: n,
					properties: {
						idx: n,
						kat: r[t.kategorie] || "o"
					},
					geometry: {
						type: "Point",
						coordinates: [t.lng, t.lat]
					}
				});
			}), e;
		}
		function N() {
			for (var e in z) clearTimeout(z[e]), delete z[e];
			for (var t in L) L[t].remove(), L[t]._wmAdded = !1;
			L = {}, R = {};
			var n = v.getSource("wmOrte");
			n && n.setData({
				type: "FeatureCollection",
				features: M()
			});
		}
		p && (p.setAttribute("aria-checked", "false"), p.addEventListener("click", function() {
			A = p.classList.toggle("is-on"), p.setAttribute("aria-checked", A ? "true" : "false"), m.classList.toggle("is-on", A), e("map_filter_changed", {
				filter: "current_only",
				enabled: A
			}), N();
		}), p.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), p.click());
		})), d && d.querySelectorAll(".wm-legend-item").forEach(function(t) {
			var n = t.querySelector(".wm-dot"), a = null;
			if (n) for (var o in i) n.classList.contains(o) && (a = i[o]);
			if (a) {
				var s = a, c = document.createElement("button");
				c.type = "button", c.className = "wm-switch is-on wm-category-switch", c.setAttribute("role", "switch"), c.setAttribute("aria-label", s), c.setAttribute("aria-checked", "true"), c.innerHTML = "<span class=\"wm-switch-track\"></span><span class=\"wm-switch-thumb\"></span>", t.appendChild(c), c.addEventListener("click", function() {
					j[s] = !j[s], c.classList.toggle("is-on", j[s]), c.setAttribute("aria-checked", j[s] ? "true" : "false"), t.classList.toggle("is-off", !j[s]), e("map_filter_changed", {
						filter: "category",
						category: r[s] || "other",
						enabled: j[s]
					}), N();
				});
			}
		});
		function P(e) {
			var t = document.createElement("div");
			t.className = "wm-marker " + e;
			var n = document.createElement("div");
			return n.className = "wm-marker-inner", t.appendChild(n), {
				el: t,
				inner: n
			};
		}
		function F(e) {
			var t = P(n[e.kategorie] || "wm-cat-orte"), r = document.createElement("div");
			if (r.className = "wm-marker-circle", e.markerBild && (r.style.backgroundImage = "url(" + e.markerBild + ")"), t.inner.appendChild(r), e.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = e.adresse, t.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = e.name, t.inner.appendChild(a), t.el.addEventListener("click", function() {
				O(e);
			}), t.el;
		}
		function I(e, t) {
			var n = P("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
			r.className = "wm-marker-circle";
			var i = k[e.firstIdx];
			i && i.markerBild && (r.style.backgroundImage = "url(" + i.markerBild + ")"), n.inner.appendChild(r);
			var a = document.createElement("div");
			return a.className = "wm-cluster-badge", a.textContent = e.point_count_abbreviated, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				v.getSource("wmOrte").getClusterExpansionZoom(e.cluster_id, function(e, n) {
					e || D(t, n + .2);
				});
			}), n.el;
		}
		var L = {}, R = {}, z = {};
		function B(e, t) {
			z[e] && (clearTimeout(z[e]), delete z[e]), t._wmAdded || (t.addTo(v), t._wmAdded = !0);
			var n = t.getElement();
			n.classList.contains("wm-visible") || (n.offsetWidth, n.classList.add("wm-visible"));
		}
		function V(e, t) {
			z[e] || (t.getElement().classList.remove("wm-visible"), z[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete z[e];
			}, 200));
		}
		function H() {
			for (var e = {}, t = v.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = L[o];
					if (!s) {
						var c = i.cluster ? I(i, a) : F(k[i.idx]);
						s = new mapboxgl.Marker({
							element: c,
							anchor: "center"
						}).setLngLat(a), L[o] = s;
					}
					e[o] = s, B(o, s);
				}
			}
			for (var l in R) e[l] || V(l, R[l]);
			R = e;
		}
		v.on("load", function() {
			v.addSource("wmOrte", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: M()
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
			}), v.addLayer({
				id: "wmOrteHidden",
				type: "circle",
				source: "wmOrte",
				paint: {
					"circle-radius": 0,
					"circle-opacity": 0
				}
			}), v.on("render", function() {
				v.isSourceLoaded("wmOrte") && H();
			}), v.on("moveend", H);
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map