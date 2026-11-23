import { t as e } from "./site-interactions-CahnrWDV.js";
//#region src/west-map.ts
(function() {
	var t = /^\/en(?:\/|$)/.test(window.location.pathname), n = {
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
			h.classList.add("wm-legend-toggle-row"), m = h.cloneNode(!0), m.classList.add("wm-current-row"), m.querySelector("span").textContent = t ? "Currently on view" : "Aktuell zu sehen", p = m.querySelector("#wmLabelsSwitch"), p.id = "wmCurrentSwitch", p.setAttribute("aria-label", t ? "Show only locations currently on view" : "Nur aktuell zu sehende Orte"), h.parentElement.insertBefore(m, h);
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
			bearing: 0,
			pitch: 0,
			dragRotate: !1,
			dragPan: {
				linearity: .25,
				maxSpeed: 1100,
				deceleration: 1400
			},
			minZoom: 0,
			maxZoom: 18
		});
		if (v.transform && typeof v.transform._constrain == "function") v.transform.minLat = -80, v.transform.maxLat = 80, v.transform._constrain();
		else if (typeof v.getCenter == "function") {
			var y = !1;
			v.on("move", function() {
				if (!y) {
					var e = v.getCenter(), t = Math.max(-80, Math.min(80, e.lat));
					if (t !== e.lat) {
						y = !0;
						try {
							v.setCenter([e.lng, t]);
						} finally {
							y = !1;
						}
					}
				}
			});
		}
		v.scrollZoom.setZoomRate(1 / 140), v.scrollZoom.setWheelZoomRate(1 / 650), v.touchZoomRotate.disableRotation(), v.on("style.load", function() {
			var e = getComputedStyle(document.documentElement).getPropertyValue("--fw_off_white").trim() || "#fafdff";
			v.setFog({
				color: e,
				"high-color": e,
				"space-color": e,
				"horizon-blend": .12,
				"star-intensity": 0
			});
		});
		var b = null;
		[
			"pointerdown",
			"mousedown",
			"touchstart",
			"wheel",
			"keydown",
			"click"
		].forEach(function(e) {
			c.addEventListener(e, function() {
				b = null;
			}, {
				capture: !0,
				passive: !0
			});
		});
		var x = document.querySelector(".top_bar_right");
		if (x) {
			var S = document.createElement("div");
			S.className = "wm-zoom-controls";
			var C = document.createElement("button");
			C.type = "button", C.className = "wm-zoom-btn", C.setAttribute("aria-label", t ? "Zoom in" : "Reinzoomen"), C.innerHTML = a;
			var w = document.createElement("button");
			w.type = "button", w.className = "wm-zoom-btn", w.setAttribute("aria-label", t ? "Zoom out" : "Rauszoomen"), w.innerHTML = o;
			var T = document.createElement("button");
			T.type = "button", T.className = "wm-zoom-btn wm-filter-btn", T.setAttribute("aria-label", t ? "Legend" : "Legende"), T.setAttribute("aria-expanded", "false"), T.innerHTML = s, S.appendChild(C), S.appendChild(w), S.appendChild(T), d && d.parentElement === x ? x.insertBefore(S, d) : x.appendChild(S);
			function e() {
				var e = v.cameraForBounds([[-12, 34], [36, 72]]);
				return e && Number.isFinite(e.zoom) ? Math.max(0, Math.min(18, e.zoom - .25)) : 3;
			}
			function n(t) {
				var n = b === null ? v.getZoom() : b, r = e(), i = t > 0 ? n + (n >= r ? 2 : 1) : n > r ? Math.max(r, n - 2) : n - 1;
				i = Math.max(0, Math.min(18, i)), !(Math.abs(i - n) < .001) && (v.zoomTo(i, {
					duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 650,
					easing: function(e) {
						return 1 - (1 - e) ** 3;
					}
				}), b = i);
			}
			v.on("zoomend", function() {
				b !== null && Math.abs(v.getZoom() - b) < .001 && (b = null);
			}), C.addEventListener("click", function() {
				n(1);
			}), w.addEventListener("click", function() {
				n(-1);
			});
			var E = document.createElement("span");
			E.className = "wm-filter-slot";
			function r() {
				if (d) {
					var e = d.querySelector(".wm-legend-header"), t = e && e.querySelector("span");
					if (e && t) {
						var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = T.getBoundingClientRect();
						T.style.left = n.right - i.width + "px", T.style.top = r.top + (r.height - i.height) / 2 + "px";
						return;
					}
				}
				var a = E.getBoundingClientRect();
				T.style.left = a.left + "px", T.style.top = a.top + "px";
			}
			function i() {
				var e = T.getBoundingClientRect();
				E.style.width = e.width + "px", E.style.height = e.height + "px", S.replaceChild(E, T), document.body.appendChild(T), T.classList.add("is-floating"), r();
			}
			function c() {
				S.replaceChild(T, E), T.classList.remove("is-floating"), T.style.removeProperty("left"), T.style.removeProperty("top");
			}
			function l() {
				if (d) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = T.classList.contains("is-floating") ? E.getBoundingClientRect() : T.getBoundingClientRect();
					d.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px", d.style.removeProperty("top");
					var n = d.querySelector(".wm-legend-header > span");
					if (n) {
						var r = d.getBoundingClientRect().top, i = n.getBoundingClientRect(), a = t.top + t.height / 2, o = i.top + i.height / 2;
						d.style.top = r + a - o + "px";
					}
				}
			}
			T.addEventListener("click", function() {
				if (d) {
					var e = d.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", e), T.setAttribute("aria-expanded", e ? "true" : "false"), e ? (l(), i()) : c();
				}
			}), window.addEventListener("resize", function() {
				d && d.classList.contains("is-open") && (l(), r());
			}), document.addEventListener("click", function(e) {
				!d || !d.classList.contains("is-open") || d.contains(e.target) || T.contains(e.target) || (d.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), T.setAttribute("aria-expanded", "false"), c());
			});
		} else v.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		function D(e, t) {
			var n = Math.abs(t - v.getZoom()), r = window.matchMedia("(prefers-reduced-motion: reduce)").matches, i = function(e) {
				return 1 - (1 - e) ** 3;
			};
			n <= 4 ? v.easeTo({
				center: e,
				zoom: t,
				duration: r ? 0 : 700,
				easing: i
			}) : v.flyTo({
				center: e,
				zoom: t,
				duration: r ? 0 : Math.min(1300, 850 + n * 75),
				curve: 1.2,
				easing: i
			});
		}
		function O(e) {
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
		f && (f.setAttribute("aria-checked", "false"), f.addEventListener("click", function() {
			var e = f.classList.toggle("is-on");
			f.setAttribute("aria-checked", e ? "true" : "false"), document.body.classList.toggle("wm-labels-on", e);
		}), f.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), f.click());
		}));
		var k = [];
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
				}), k.push({
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
					slug: ((t.querySelector(".wm-f-slug") || {}).textContent || "").trim() || A((t.querySelector(".wm-f-name") || {}).textContent || ""),
					aktuell: !!t.querySelector(".wm-f-bildrechte + div")
				});
			}
		});
		function A(e) {
			return String(e || "").toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
		}
		function j(e) {
			var t;
			try {
				t = new URL(e, window.location.href);
			} catch (e) {
				return null;
			}
			var n = "";
			if ((t.origin === window.location.origin || /^(?:www\.)?franzwest\.art$/i.test(t.hostname) || /\.webflow\.io$/i.test(t.hostname)) && /\/karten-orte\/[^/]+\/?$/.test(t.pathname) ? n = t.pathname.replace(/\/$/, "").split("/").pop() : t.hash && t.pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") === window.location.pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") && (n = decodeURIComponent(t.hash.replace(/^#(?:ort=)?/, ""))), !n) return null;
			n = n.toLowerCase();
			for (var r = 0; r < k.length; r++) if (k[r].slug.toLowerCase() === n) return k[r];
			return null;
		}
		function M(e) {
			window.SiteInteractions && window.SiteInteractions.closeModal && window.SiteInteractions.closeModal();
			var t = !1;
			function n() {
				t || (t = !0, O(e));
			}
			v.once("moveend", n), setTimeout(n, 2200), D([e.lng, e.lat], Math.max(v.getZoom(), 13));
		}
		window.addEventListener("click", function(e) {
			if (!(e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) {
				var t = e.target instanceof Element ? e.target.closest("a[href]") : null;
				if (!(!t || !t.closest("[data-site-modal]"))) {
					var n = j(t.getAttribute("href"));
					n && (e.preventDefault(), e.stopImmediatePropagation(), M(n));
				}
			}
		}, !0);
		var N = !1, P = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function F() {
			var e = [];
			return k.forEach(function(t, n) {
				P[t.kategorie] === !1 || N && !t.aktuell || e.push({
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
		function I() {
			for (var e in G) clearTimeout(G[e]), delete G[e];
			for (var t in W) clearTimeout(W[t]), delete W[t];
			for (var n in H) H[n].remove(), H[n]._wmAdded = !1;
			H = {}, U = {};
			var r = v.getSource("wmOrte");
			r && r.setData({
				type: "FeatureCollection",
				features: F()
			});
		}
		if (p && (p.setAttribute("aria-checked", "false"), p.addEventListener("click", function() {
			N = p.classList.toggle("is-on"), p.setAttribute("aria-checked", N ? "true" : "false"), m.classList.toggle("is-on", N), I();
		}), p.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), p.click());
		})), d) {
			var L = [
				"Ausstellungen",
				"Werke",
				"Wichtige Orte"
			], R = {
				ausstellungen: "Ausstellungen",
				exhibitions: "Ausstellungen",
				werke: "Werke",
				works: "Werke",
				"wichtige orte": "Wichtige Orte",
				"key locations": "Wichtige Orte"
			};
			d.querySelectorAll(".wm-legend-item").forEach(function(e, n) {
				var r = e.querySelector(".wm-dot"), a = null;
				if (r) for (var o in i) r.classList.contains(o) && (a = i[o]);
				if (a || (a = R[(e.textContent || "").trim().toLowerCase()] || L[n]), a) {
					r || (r = document.createElement("span"), r.className = "wm-dot", e.prepend(r));
					var s = {
						Ausstellungen: "wm-dot-ausstellungen",
						Werke: "wm-dot-werke",
						"Wichtige Orte": "wm-dot-orte"
					}[a];
					s && r.classList.add(s), getComputedStyle(r).display === "none" && (r.style.display = "inline-block");
					var c = a, l = document.createElement("button");
					l.type = "button", l.className = "wm-switch is-on wm-category-switch", l.setAttribute("role", "switch"), l.setAttribute("aria-label", t && {
						Ausstellungen: "Exhibitions",
						Werke: "Works",
						"Wichtige Orte": "Key locations"
					}[c] || c), l.setAttribute("aria-checked", "true"), l.innerHTML = "<span class=\"wm-switch-track\"></span><span class=\"wm-switch-thumb\"></span>", e.appendChild(l), l.addEventListener("click", function() {
						P[c] = !P[c], l.classList.toggle("is-on", P[c]), l.setAttribute("aria-checked", P[c] ? "true" : "false"), e.classList.toggle("is-off", !P[c]), I();
					});
				}
			});
		}
		function z(e) {
			var t = document.createElement("div");
			t.className = "wm-marker " + e;
			var n = document.createElement("div");
			return n.className = "wm-marker-inner", t.appendChild(n), {
				el: t,
				inner: n
			};
		}
		function B(e) {
			var t = z(n[e.kategorie] || "wm-cat-orte"), r = document.createElement("div");
			if (r.className = "wm-marker-circle", e.markerBild && (r.style.backgroundImage = "url(" + e.markerBild + ")"), t.inner.appendChild(r), e.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = e.adresse, t.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = e.name, t.inner.appendChild(a), t.el.addEventListener("click", function() {
				O(e);
			}), t.el;
		}
		function V(e, t) {
			var n = z("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
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
		var H = {}, U = {}, W = {}, G = {}, K = !0, q = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		function J(e, t, n) {
			W[e] && (clearTimeout(W[e]), delete W[e]), t._wmAdded || (t.addTo(v), t._wmAdded = !0);
			var r = t.getElement();
			if (!G[e]) {
				if (n > 0) {
					G[e] = setTimeout(function() {
						delete G[e], r.offsetWidth, r.classList.add("wm-visible");
					}, n);
					return;
				}
				r.classList.contains("wm-visible") || (r.offsetWidth, r.classList.add("wm-visible"));
			}
		}
		function Y(e, t) {
			G[e] && (clearTimeout(G[e]), delete G[e]), !W[e] && (t.getElement().classList.remove("wm-visible"), W[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete W[e];
			}, 400));
		}
		function X() {
			for (var e = {}, t = v.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = H[o];
					if (!s) {
						var c = i.cluster ? V(i, a) : B(k[i.idx]);
						s = new mapboxgl.Marker({
							element: c,
							anchor: "center"
						}).setLngLat(a), H[o] = s;
					}
					e[o] = s;
				}
			}
			var l = Object.keys(e), u = K && l.length > 0;
			u && (K = !1);
			var d = u && !q ? Math.min(90, 1200 / Math.max(1, l.length - 1)) : 0;
			for (var f in l.forEach(function(t, n) {
				J(t, e[t], Math.round(n * d));
			}), U) e[f] || Y(f, U[f]);
			U = e;
		}
		v.on("load", function() {
			v.addSource("wmOrte", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: F()
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
				v.isSourceLoaded("wmOrte") && X();
			}), v.on("moveend", X);
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map