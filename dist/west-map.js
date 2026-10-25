import { t as e } from "./site-interactions-CahnrWDV.js";
//#region src/west-map.ts
(function() {
	var t = {
		Ausstellungen: "wm-cat-ausstellungen",
		Werke: "wm-cat-werke",
		"Wichtige Orte": "wm-cat-orte"
	}, n = {
		Ausstellungen: "a",
		Werke: "w",
		"Wichtige Orte": "o"
	}, r = {
		"wm-dot-ausstellungen": "Ausstellungen",
		"wm-dot-werke": "Werke",
		"wm-dot-orte": "Wichtige Orte"
	}, i = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M13.4152 8V13.068L13.068 13.4152H8V15.5849H13.068L13.4152 15.932V21H15.5848V15.932L15.932 15.5849H21V13.4152H15.932L15.5848 13.068V8H13.4152Z\" fill=\"#FAFDFF\"/></svg>", a = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M9 16V13H20V16H9Z\" fill=\"#FAFDFF\"/></svg>", o = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><g clip-path=\"url(#wmFilterClip)\"><path d=\"M14.5075 10.2998H6.60848L6.30859 10.7506L7.3437 12.2998H14.5026H14.5075H21.6582L22.6932 10.7506L22.3933 10.2998H14.5075Z\" fill=\"#FAFDFF\"/><path d=\"M15.1369 14.5H9.29988C9.17037 14.6947 9 14.9508 9 14.9508L10.0351 16.5H15.1321H15.1369H19.2339L20.2689 14.9508C20.1393 14.7561 20.0985 14.6947 19.969 14.5H15.1369Z\" fill=\"#FAFDFF\"/><path d=\"M14.0832 18.7002H12.2999L12 19.151L13.0351 20.7002H14.0783H14.0832H16.1264L17.1613 19.151L16.8614 18.7002H14.0832Z\" fill=\"#FAFDFF\"/></g><defs><clipPath id=\"wmFilterClip\"><rect width=\"17\" height=\"12\" fill=\"white\" transform=\"translate(6 9.5)\"/></clipPath></defs></svg>";
	function s(e) {
		document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
	}
	s(async function() {
		var s = document.getElementById("wmMap");
		if (!s || typeof mapboxgl > "u") return;
		var c = s.getAttribute("data-mapbox-token");
		if (!c) {
			console.error("West Map: #wmMap benötigt das Attribut data-mapbox-token.");
			return;
		}
		mapboxgl.accessToken = c, await document.fonts.load("500 16px \"StyreneA\"").catch(function() {
			return [];
		});
		var l = s.parentElement;
		l.classList.add("wm-page"), Array.prototype.forEach.call(l.children, function(e) {
			e.tagName === "DIV" && !e.id && (e.querySelector("a") ? e.classList.add("wm-overview-slot") : e.querySelector("svg") && e.classList.add("wm-scrolldown-slot"));
		});
		var u = document.getElementById("wmLegend");
		u && (u.classList.add("wm-legend"), document.body.appendChild(u));
		var d = document.getElementById("wmLabelsSwitch"), f, p;
		if (d) {
			d.classList.add("wm-switch");
			var m = d.parentElement;
			m.classList.add("wm-legend-toggle-row"), p = m.cloneNode(!0), p.classList.add("wm-current-row"), p.querySelector("span").textContent = "Aktuell zu sehen", f = p.querySelector("#wmLabelsSwitch"), f.id = "wmCurrentSwitch", f.setAttribute("aria-label", "Nur aktuell zu sehende Orte"), m.parentElement.insertBefore(p, m);
			var h = m.previousElementSibling;
			h && !h.classList.length && h.classList.add("wm-legend-divider");
		}
		var g = document.getElementById("wmCmsSource");
		g && g.classList.add("wm-cms-source");
		var _ = new mapboxgl.Map({
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
		_.touchZoomRotate.disableRotation(), _.on("style.load", function() {
			_.setFog({
				color: "#ffffff",
				"high-color": "#ffffff",
				"space-color": "#ffffff",
				"horizon-blend": .02,
				"star-intensity": 0
			});
		});
		var v = null;
		[
			"pointerdown",
			"mousedown",
			"touchstart",
			"wheel",
			"keydown",
			"click"
		].forEach(function(e) {
			s.addEventListener(e, function() {
				v = null;
			}, {
				capture: !0,
				passive: !0
			});
		});
		var y = document.querySelector(".top_bar_right");
		if (y) {
			var b = document.createElement("div");
			b.className = "wm-zoom-controls";
			var x = document.createElement("button");
			x.type = "button", x.className = "wm-zoom-btn", x.setAttribute("aria-label", "Reinzoomen"), x.innerHTML = i;
			var S = document.createElement("button");
			S.type = "button", S.className = "wm-zoom-btn", S.setAttribute("aria-label", "Rauszoomen"), S.innerHTML = a;
			var C = document.createElement("button");
			C.type = "button", C.className = "wm-zoom-btn wm-filter-btn", C.setAttribute("aria-label", "Legende"), C.setAttribute("aria-expanded", "false"), C.innerHTML = o, b.appendChild(x), b.appendChild(S), b.appendChild(C), u && u.parentElement === y ? y.insertBefore(b, u) : y.appendChild(b);
			function e() {
				var e = _.cameraForBounds([[-12, 34], [36, 72]]);
				return e && Number.isFinite(e.zoom) ? Math.max(0, Math.min(18, e.zoom - .25)) : 3;
			}
			function t(t) {
				var n = v === null ? _.getZoom() : v, r = e(), i = t > 0 ? n + (n >= r ? 2 : 1) : n > r ? Math.max(r, n - 2) : n - 1;
				i = Math.max(0, Math.min(18, i)), !(Math.abs(i - n) < .001) && (_.zoomTo(i), v = i);
			}
			_.on("zoomend", function() {
				v !== null && Math.abs(_.getZoom() - v) < .001 && (v = null);
			}), x.addEventListener("click", function() {
				t(1);
			}), S.addEventListener("click", function() {
				t(-1);
			});
			var w = document.createElement("span");
			w.className = "wm-filter-slot";
			function n() {
				if (u) {
					var e = u.querySelector(".wm-legend-header"), t = e && e.querySelector("span");
					if (e && t) {
						var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = C.getBoundingClientRect();
						C.style.left = n.right - i.width + "px", C.style.top = r.top + (r.height - i.height) / 2 + "px";
						return;
					}
				}
				var a = w.getBoundingClientRect();
				C.style.left = a.left + "px", C.style.top = a.top + "px";
			}
			function r() {
				var e = C.getBoundingClientRect();
				w.style.width = e.width + "px", w.style.height = e.height + "px", b.replaceChild(w, C), document.body.appendChild(C), C.classList.add("is-floating"), n();
			}
			function s() {
				b.replaceChild(C, w), C.classList.remove("is-floating"), C.style.removeProperty("left"), C.style.removeProperty("top");
			}
			function c() {
				if (u) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = C.classList.contains("is-floating") ? w.getBoundingClientRect() : C.getBoundingClientRect();
					u.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px", u.style.removeProperty("top");
					var n = u.querySelector(".wm-legend-header > span");
					if (n) {
						var r = u.getBoundingClientRect().top, i = n.getBoundingClientRect(), a = t.top + t.height / 2, o = i.top + i.height / 2;
						u.style.top = r + a - o + "px";
					}
				}
			}
			C.addEventListener("click", function() {
				if (u) {
					var e = u.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", e), C.setAttribute("aria-expanded", e ? "true" : "false"), e ? (c(), r()) : s();
				}
			}), window.addEventListener("resize", function() {
				u && u.classList.contains("is-open") && (c(), n());
			}), document.addEventListener("click", function(e) {
				!u || !u.classList.contains("is-open") || u.contains(e.target) || C.contains(e.target) || (u.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), C.setAttribute("aria-expanded", "false"), s());
			});
		} else _.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		var T = document.createElement("div");
		T.className = "wm-map-fade", s.appendChild(T);
		function E(e, t) {
			if (Math.abs(t - _.getZoom()) <= 4) {
				_.easeTo({
					center: e,
					zoom: t
				});
				return;
			}
			T.classList.add("is-active"), setTimeout(function() {
				_.jumpTo({
					center: e,
					zoom: t
				});
				var n = !1;
				function r() {
					n || (n = !0, T.classList.remove("is-active"));
				}
				_.once("idle", r), setTimeout(r, 2500);
			}, 280);
		}
		function D(e) {
			window.SiteInteractions && window.SiteInteractions.openContentModal({
				id: "west-map-detail",
				address: e.name && e.adresse ? e.name + " | " + e.adresse : e.name || e.adresse || "",
				image: e.bild || "",
				imageSrcset: e.gallery && e.gallery[0] && e.gallery[0].srcset || "",
				imageAlt: e.name || "",
				caption: e.bildrechte || "",
				html: e.text || "",
				gallery: e.gallery
			});
		}
		d && (d.setAttribute("aria-checked", "false"), d.addEventListener("click", function() {
			var e = d.classList.toggle("is-on");
			d.setAttribute("aria-checked", e ? "true" : "false"), document.body.classList.toggle("wm-labels-on", e);
		}), d.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), d.click());
		}));
		var O = [];
		document.querySelectorAll(".wm-cms-item").forEach(function(t) {
			var n = parseFloat((t.querySelector(".wm-f-lat") || {}).textContent || ""), r = parseFloat((t.querySelector(".wm-f-lng") || {}).textContent || "");
			if (!(isNaN(n) || isNaN(r))) {
				var i = t.querySelector(".wm-f-bild"), a = t.querySelector(".wm-f-text"), o = [{
					src: i && i.getAttribute("src") || "",
					srcset: i && i.getAttribute("srcset") || "",
					alt: "",
					caption: (t.querySelector(".wm-f-bildrechte") || {}).textContent || ""
				}];
				[2, 3].forEach(function(e) {
					var n = t.querySelector(".wm-f-bild-" + e);
					n && n.getAttribute("src") && o.push({
						src: n.getAttribute("src"),
						srcset: n.getAttribute("srcset") || "",
						alt: n.getAttribute("alt") || "",
						caption: (t.querySelector(".wm-f-bild-" + e + "-unterschrift") || {}).textContent || ""
					});
				}), O.push({
					lat: n,
					lng: r,
					name: (t.querySelector(".wm-f-name") || {}).textContent || "",
					adresse: (t.querySelector(".wm-f-adresse") || {}).textContent || "",
					kategorie: ((t.querySelector(".wm-f-kategorie") || {}).textContent || "").trim(),
					bildrechte: (t.querySelector(".wm-f-bildrechte") || {}).textContent || "",
					bild: i ? i.getAttribute("src") : "",
					markerBild: e(i),
					gallery: o,
					text: a ? a.innerHTML : "",
					aktuell: !!t.querySelector(".wm-f-bildrechte + div")
				});
			}
		});
		var k = !1, A = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function j() {
			var e = [];
			return O.forEach(function(t, r) {
				A[t.kategorie] === !1 || k && !t.aktuell || e.push({
					type: "Feature",
					id: r,
					properties: {
						idx: r,
						kat: n[t.kategorie] || "o"
					},
					geometry: {
						type: "Point",
						coordinates: [t.lng, t.lat]
					}
				});
			}), e;
		}
		function M() {
			for (var e in R) clearTimeout(R[e]), delete R[e];
			for (var t in I) I[t].remove(), I[t]._wmAdded = !1;
			I = {}, L = {};
			var n = _.getSource("wmOrte");
			n && n.setData({
				type: "FeatureCollection",
				features: j()
			});
		}
		f && (f.setAttribute("aria-checked", "false"), f.addEventListener("click", function() {
			k = f.classList.toggle("is-on"), f.setAttribute("aria-checked", k ? "true" : "false"), p.classList.toggle("is-on", k), M();
		}), f.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), f.click());
		})), u && u.querySelectorAll(".wm-legend-item").forEach(function(e) {
			var t = e.querySelector(".wm-dot"), n = null;
			if (t) for (var i in r) t.classList.contains(i) && (n = r[i]);
			if (n) {
				var a = n, o = document.createElement("button");
				o.type = "button", o.className = "wm-switch is-on wm-category-switch", o.setAttribute("role", "switch"), o.setAttribute("aria-label", a), o.setAttribute("aria-checked", "true"), o.innerHTML = "<span class=\"wm-switch-track\"></span><span class=\"wm-switch-thumb\"></span>", e.appendChild(o), o.addEventListener("click", function() {
					A[a] = !A[a], o.classList.toggle("is-on", A[a]), o.setAttribute("aria-checked", A[a] ? "true" : "false"), e.classList.toggle("is-off", !A[a]), M();
				});
			}
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
		function P(e) {
			var n = N(t[e.kategorie] || "wm-cat-orte"), r = document.createElement("div");
			if (r.className = "wm-marker-circle", e.markerBild && (r.style.backgroundImage = "url(" + e.markerBild + ")"), n.inner.appendChild(r), e.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = e.adresse, n.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = e.name, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				D(e);
			}), n.el;
		}
		function F(e, t) {
			var n = N("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
			r.className = "wm-marker-circle";
			var i = O[e.firstIdx];
			i && i.markerBild && (r.style.backgroundImage = "url(" + i.markerBild + ")"), n.inner.appendChild(r);
			var a = document.createElement("div");
			return a.className = "wm-cluster-badge", a.textContent = e.point_count_abbreviated, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				_.getSource("wmOrte").getClusterExpansionZoom(e.cluster_id, function(e, n) {
					e || E(t, n + .2);
				});
			}), n.el;
		}
		var I = {}, L = {}, R = {};
		function z(e, t) {
			R[e] && (clearTimeout(R[e]), delete R[e]), t._wmAdded || (t.addTo(_), t._wmAdded = !0);
			var n = t.getElement();
			n.classList.contains("wm-visible") || (n.offsetWidth, n.classList.add("wm-visible"));
		}
		function B(e, t) {
			R[e] || (t.getElement().classList.remove("wm-visible"), R[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete R[e];
			}, 200));
		}
		function V() {
			for (var e = {}, t = _.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = I[o];
					if (!s) {
						var c = i.cluster ? F(i, a) : P(O[i.idx]);
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
		_.on("load", function() {
			_.addSource("wmOrte", {
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
			}), _.addLayer({
				id: "wmOrteHidden",
				type: "circle",
				source: "wmOrte",
				paint: {
					"circle-radius": 0,
					"circle-opacity": 0
				}
			}), _.on("render", function() {
				_.isSourceLoaded("wmOrte") && V();
			}), _.on("moveend", V);
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map