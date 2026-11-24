import { t as e } from "./site-interactions-CiFvoQAi.js";
import { t } from "./site-interactions-CahnrWDV.js";
//#region src/west-map.ts
(function() {
	var n = /^\/en(?:\/|$)/.test(window.location.pathname), r = {
		Ausstellungen: "wm-cat-ausstellungen",
		Werke: "wm-cat-werke",
		"Wichtige Orte": "wm-cat-orte"
	}, i = {
		Ausstellungen: "a",
		Werke: "w",
		"Wichtige Orte": "o"
	}, a = {
		"wm-dot-ausstellungen": "Ausstellungen",
		"wm-dot-werke": "Werke",
		"wm-dot-orte": "Wichtige Orte"
	}, o = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M13.4152 8V13.068L13.068 13.4152H8V15.5849H13.068L13.4152 15.932V21H15.5848V15.932L15.932 15.5849H21V13.4152H15.932L15.5848 13.068V8H13.4152Z\" fill=\"#FAFDFF\"/></svg>", s = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><path d=\"M9 16V13H20V16H9Z\" fill=\"#FAFDFF\"/></svg>", c = "<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"29\" height=\"29\" rx=\"14.5\" fill=\"#444153\"/><g clip-path=\"url(#wmFilterClip)\"><path d=\"M14.5075 10.2998H6.60848L6.30859 10.7506L7.3437 12.2998H14.5026H14.5075H21.6582L22.6932 10.7506L22.3933 10.2998H14.5075Z\" fill=\"#FAFDFF\"/><path d=\"M15.1369 14.5H9.29988C9.17037 14.6947 9 14.9508 9 14.9508L10.0351 16.5H15.1321H15.1369H19.2339L20.2689 14.9508C20.1393 14.7561 20.0985 14.6947 19.969 14.5H15.1369Z\" fill=\"#FAFDFF\"/><path d=\"M14.0832 18.7002H12.2999L12 19.151L13.0351 20.7002H14.0783H14.0832H16.1264L17.1613 19.151L16.8614 18.7002H14.0832Z\" fill=\"#FAFDFF\"/></g><defs><clipPath id=\"wmFilterClip\"><rect width=\"17\" height=\"12\" fill=\"white\" transform=\"translate(6 9.5)\"/></clipPath></defs></svg>";
	function l(e) {
		document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
	}
	l(async function() {
		var l = document.getElementById("wmMap");
		if (!l || typeof mapboxgl > "u") return;
		var u = l.getAttribute("data-mapbox-token");
		if (!u) {
			console.error("West Map: #wmMap benötigt das Attribut data-mapbox-token.");
			return;
		}
		mapboxgl.accessToken = u, await document.fonts.load("500 16px \"StyreneA\"").catch(function() {
			return [];
		});
		var d = l.parentElement;
		d.classList.add("wm-page"), Array.prototype.forEach.call(d.children, function(e) {
			e.tagName === "DIV" && !e.id && (e.querySelector("a") ? e.classList.add("wm-overview-slot") : e.querySelector("svg") && e.classList.add("wm-scrolldown-slot"));
		});
		var f = document.getElementById("wmLegend");
		f && (f.classList.add("wm-legend"), document.body.appendChild(f));
		var p = document.getElementById("wmLabelsSwitch"), m, h;
		if (p) {
			p.classList.add("wm-switch");
			var g = p.parentElement;
			g.classList.add("wm-legend-toggle-row"), h = g.cloneNode(!0), h.classList.add("wm-current-row"), h.querySelector("span").textContent = n ? "Currently on view" : "Aktuell zu sehen", m = h.querySelector("#wmLabelsSwitch"), m.id = "wmCurrentSwitch", m.setAttribute("aria-label", n ? "Show only locations currently on view" : "Nur aktuell zu sehende Orte"), g.parentElement.insertBefore(h, g);
			var _ = g.previousElementSibling;
			_ && !_.classList.length && _.classList.add("wm-legend-divider");
		}
		var v = document.getElementById("wmCmsSource");
		v && v.classList.add("wm-cms-source");
		var y = new mapboxgl.Map({
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
		if (y.transform && typeof y.transform._constrain == "function") y.transform.minLat = -80, y.transform.maxLat = 80, y.transform._constrain();
		else if (typeof y.getCenter == "function") {
			var b = !1;
			y.on("move", function() {
				if (!b) {
					var e = y.getCenter(), t = Math.max(-80, Math.min(80, e.lat));
					if (t !== e.lat) {
						b = !0;
						try {
							y.setCenter([e.lng, t]);
						} finally {
							b = !1;
						}
					}
				}
			});
		}
		y.scrollZoom.setZoomRate(1 / 140), y.scrollZoom.setWheelZoomRate(1 / 650), y.touchZoomRotate.disableRotation(), y.on("style.load", function() {
			var e = getComputedStyle(document.documentElement).getPropertyValue("--fw_off_white").trim() || "#fafdff";
			y.setFog({
				color: e,
				"high-color": e,
				"space-color": e,
				"horizon-blend": .12,
				"star-intensity": 0
			});
		});
		var x = null;
		[
			"pointerdown",
			"mousedown",
			"touchstart",
			"wheel",
			"keydown",
			"click"
		].forEach(function(e) {
			l.addEventListener(e, function() {
				x = null;
			}, {
				capture: !0,
				passive: !0
			});
		});
		var S = document.querySelector(".top_bar_right");
		if (S) {
			var C = document.createElement("div");
			C.className = "wm-zoom-controls";
			var w = document.createElement("button");
			w.type = "button", w.className = "wm-zoom-btn", w.setAttribute("aria-label", n ? "Zoom in" : "Reinzoomen"), w.innerHTML = o;
			var T = document.createElement("button");
			T.type = "button", T.className = "wm-zoom-btn", T.setAttribute("aria-label", n ? "Zoom out" : "Rauszoomen"), T.innerHTML = s;
			var E = document.createElement("button");
			E.type = "button", E.className = "wm-zoom-btn wm-filter-btn", E.setAttribute("aria-label", n ? "Legend" : "Legende"), E.setAttribute("aria-expanded", "false"), E.innerHTML = c, C.appendChild(w), C.appendChild(T), C.appendChild(E), f && f.parentElement === S ? S.insertBefore(C, f) : S.appendChild(C);
			function e() {
				var e = y.cameraForBounds([[-12, 34], [36, 72]]);
				return e && Number.isFinite(e.zoom) ? Math.max(0, Math.min(18, e.zoom - .25)) : 3;
			}
			function t(t) {
				var n = x === null ? y.getZoom() : x, r = e(), i = t > 0 ? n + (n >= r ? 2 : 1) : n > r ? Math.max(r, n - 2) : n - 1;
				i = Math.max(0, Math.min(18, i)), !(Math.abs(i - n) < .001) && (y.zoomTo(i, {
					duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 650,
					easing: function(e) {
						return 1 - (1 - e) ** 3;
					}
				}), x = i);
			}
			y.on("zoomend", function() {
				x !== null && Math.abs(y.getZoom() - x) < .001 && (x = null);
			}), w.addEventListener("click", function() {
				t(1);
			}), T.addEventListener("click", function() {
				t(-1);
			});
			var D = document.createElement("span");
			D.className = "wm-filter-slot";
			function r() {
				if (f) {
					var e = f.querySelector(".wm-legend-header"), t = e && e.querySelector("span");
					if (e && t) {
						var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = E.getBoundingClientRect();
						E.style.left = n.right - i.width + "px", E.style.top = r.top + (r.height - i.height) / 2 + "px";
						return;
					}
				}
				var a = D.getBoundingClientRect();
				E.style.left = a.left + "px", E.style.top = a.top + "px";
			}
			function i() {
				var e = E.getBoundingClientRect();
				D.style.width = e.width + "px", D.style.height = e.height + "px", C.replaceChild(D, E), document.body.appendChild(E), E.classList.add("is-floating"), r();
			}
			function a() {
				C.replaceChild(E, D), E.classList.remove("is-floating"), E.style.removeProperty("left"), E.style.removeProperty("top");
			}
			function l() {
				if (f) {
					var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, t = E.classList.contains("is-floating") ? D.getBoundingClientRect() : E.getBoundingClientRect();
					f.style.right = Math.max(0, window.innerWidth - t.right - 1.5 * e) + "px", f.style.removeProperty("top");
					var n = f.querySelector(".wm-legend-header > span");
					if (n) {
						var r = f.getBoundingClientRect().top, i = n.getBoundingClientRect(), a = t.top + t.height / 2, o = i.top + i.height / 2;
						f.style.top = r + a - o + "px";
					}
				}
			}
			E.addEventListener("click", function() {
				if (f) {
					var e = f.classList.toggle("is-open");
					document.body.classList.toggle("wm-legend-open", e), E.setAttribute("aria-expanded", e ? "true" : "false"), e ? (l(), i()) : a();
				}
			}), window.addEventListener("resize", function() {
				f && f.classList.contains("is-open") && (l(), r());
			}), document.addEventListener("click", function(e) {
				!f || !f.classList.contains("is-open") || f.contains(e.target) || E.contains(e.target) || (f.classList.remove("is-open"), document.body.classList.remove("wm-legend-open"), E.setAttribute("aria-expanded", "false"), a());
			});
		} else y.addControl(new mapboxgl.NavigationControl({ showCompass: !1 }), "top-right");
		function O(e, t) {
			var n = Math.abs(t - y.getZoom()), r = window.matchMedia("(prefers-reduced-motion: reduce)").matches, i = function(e) {
				return 1 - (1 - e) ** 3;
			};
			n <= 4 ? y.easeTo({
				center: e,
				zoom: t,
				duration: r ? 0 : 700,
				easing: i
			}) : y.flyTo({
				center: e,
				zoom: t,
				duration: r ? 0 : Math.min(1300, 850 + n * 75),
				curve: 1.2,
				easing: i
			});
		}
		function k(t) {
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
		p && (p.setAttribute("aria-checked", "false"), p.addEventListener("click", function() {
			var e = p.classList.toggle("is-on");
			p.setAttribute("aria-checked", e ? "true" : "false"), document.body.classList.toggle("wm-labels-on", e);
		}), p.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), p.click());
		}));
		var A = [];
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
				}), A.push({
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
					slug: ((e.querySelector(".wm-f-slug") || {}).textContent || "").trim() || j((e.querySelector(".wm-f-name") || {}).textContent || ""),
					aktuell: !!e.querySelector(".wm-f-bildrechte + div")
				});
			}
		});
		function j(e) {
			return String(e || "").toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
		}
		function M(e) {
			var t;
			try {
				t = new URL(e, window.location.href);
			} catch (e) {
				return null;
			}
			var n = "";
			if ((t.origin === window.location.origin || /^(?:www\.)?franzwest\.art$/i.test(t.hostname) || /\.webflow\.io$/i.test(t.hostname)) && /\/karten-orte\/[^/]+\/?$/.test(t.pathname) ? n = t.pathname.replace(/\/$/, "").split("/").pop() : t.hash && t.pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") === window.location.pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") && (n = decodeURIComponent(t.hash.replace(/^#(?:ort=)?/, ""))), !n) return null;
			n = n.toLowerCase();
			for (var r = 0; r < A.length; r++) if (A[r].slug.toLowerCase() === n) return A[r];
			return null;
		}
		function N(e) {
			window.SiteInteractions && window.SiteInteractions.closeModal && window.SiteInteractions.closeModal();
			var t = window.matchMedia("(prefers-reduced-motion: reduce)").matches, n = y.getCenter(), r = new mapboxgl.LngLat(e.lng, e.lat), i = n.distanceTo(r) / 1e3, a = 13, o = Math.max(2, Math.min(a, 12 - Math.log2(Math.max(i, 1) / 10))), s = t ? 0 : Math.round(Math.max(2400, Math.min(5500, 2200 + Math.log2(i + 1) * 330))), c = !1;
			function l() {
				c || (c = !0, k(e));
			}
			y.once("moveend", l), setTimeout(l, s + 1500);
			var u = {
				center: r,
				zoom: a,
				duration: s,
				curve: 1.6,
				essential: !0,
				easing: function(e) {
					return e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
				}
			};
			o < Math.min(y.getZoom(), a) - .5 && (u.minZoom = o), y.flyTo(u);
		}
		window.addEventListener("click", function(e) {
			if (!(e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) {
				var t = e.target instanceof Element ? e.target.closest("a[href]") : null;
				if (!(!t || !t.closest("[data-site-modal]"))) {
					var n = M(t.getAttribute("href"));
					n && (e.preventDefault(), e.stopImmediatePropagation(), N(n));
				}
			}
		}, !0);
		var P = !1, F = {
			Ausstellungen: !0,
			Werke: !0,
			"Wichtige Orte": !0
		};
		function I() {
			var e = [];
			return A.forEach(function(t, n) {
				F[t.kategorie] === !1 || P && !t.aktuell || e.push({
					type: "Feature",
					id: n,
					properties: {
						idx: n,
						kat: i[t.kategorie] || "o"
					},
					geometry: {
						type: "Point",
						coordinates: [t.lng, t.lat]
					}
				});
			}), e;
		}
		function L() {
			for (var e in K) clearTimeout(K[e]), delete K[e];
			for (var t in G) clearTimeout(G[t]), delete G[t];
			for (var n in U) U[n].remove(), U[n]._wmAdded = !1;
			U = {}, W = {};
			var r = y.getSource("wmOrte");
			r && r.setData({
				type: "FeatureCollection",
				features: I()
			});
		}
		if (m && (m.setAttribute("aria-checked", "false"), m.addEventListener("click", function() {
			P = m.classList.toggle("is-on"), m.setAttribute("aria-checked", P ? "true" : "false"), h.classList.toggle("is-on", P), e("map_filter_changed", {
				filter: "current_only",
				enabled: P
			}), L();
		}), m.addEventListener("keydown", function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), m.click());
		})), f) {
			var R = [
				"Ausstellungen",
				"Werke",
				"Wichtige Orte"
			], z = {
				ausstellungen: "Ausstellungen",
				exhibitions: "Ausstellungen",
				werke: "Werke",
				works: "Werke",
				"wichtige orte": "Wichtige Orte",
				"key locations": "Wichtige Orte"
			};
			f.querySelectorAll(".wm-legend-item").forEach(function(t, r) {
				var o = t.querySelector(".wm-dot"), s = null;
				if (o) for (var c in a) o.classList.contains(c) && (s = a[c]);
				if (s || (s = z[(t.textContent || "").trim().toLowerCase()] || R[r]), s) {
					o || (o = document.createElement("span"), o.className = "wm-dot", t.prepend(o));
					var l = {
						Ausstellungen: "wm-dot-ausstellungen",
						Werke: "wm-dot-werke",
						"Wichtige Orte": "wm-dot-orte"
					}[s];
					l && o.classList.add(l), getComputedStyle(o).display === "none" && (o.style.display = "inline-block");
					var u = s, d = document.createElement("button");
					d.type = "button", d.className = "wm-switch is-on wm-category-switch", d.setAttribute("role", "switch"), d.setAttribute("aria-label", n && {
						Ausstellungen: "Exhibitions",
						Werke: "Works",
						"Wichtige Orte": "Key locations"
					}[u] || u), d.setAttribute("aria-checked", "true"), d.innerHTML = "<span class=\"wm-switch-track\"></span><span class=\"wm-switch-thumb\"></span>", t.appendChild(d), d.addEventListener("click", function() {
						F[u] = !F[u], d.classList.toggle("is-on", F[u]), d.setAttribute("aria-checked", F[u] ? "true" : "false"), t.classList.toggle("is-off", !F[u]), e("map_filter_changed", {
							filter: "category",
							category: i[u] || "other",
							enabled: F[u]
						}), L();
					});
				}
			});
		}
		function B(e) {
			var t = document.createElement("div");
			t.className = "wm-marker " + e;
			var n = document.createElement("div");
			return n.className = "wm-marker-inner", t.appendChild(n), {
				el: t,
				inner: n
			};
		}
		function V(e) {
			var t = B(r[e.kategorie] || "wm-cat-orte"), n = document.createElement("div");
			if (n.className = "wm-marker-circle", e.markerBild && (n.style.backgroundImage = "url(" + e.markerBild + ")"), t.inner.appendChild(n), e.adresse) {
				var i = document.createElement("div");
				i.className = "wm-marker-tooltip", i.textContent = e.adresse, t.inner.appendChild(i);
			}
			var a = document.createElement("div");
			return a.className = "wm-marker-label", a.textContent = e.name, t.inner.appendChild(a), t.el.addEventListener("click", function() {
				k(e);
			}), t.el;
		}
		function H(e, t) {
			var n = B("wm-cluster " + (e.hasW ? "wm-cat-werke" : e.hasA ? "wm-cat-ausstellungen" : "wm-cat-orte")), r = document.createElement("div");
			r.className = "wm-marker-circle";
			var i = A[e.firstIdx];
			i && i.markerBild && (r.style.backgroundImage = "url(" + i.markerBild + ")"), n.inner.appendChild(r);
			var a = document.createElement("div");
			return a.className = "wm-cluster-badge", a.textContent = e.point_count_abbreviated, n.inner.appendChild(a), n.el.addEventListener("click", function() {
				y.getSource("wmOrte").getClusterExpansionZoom(e.cluster_id, function(e, n) {
					e || O(t, n + .2);
				});
			}), n.el;
		}
		var U = {}, W = {}, G = {}, K = {}, q = !0, J = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		function Y(e, t, n) {
			G[e] && (clearTimeout(G[e]), delete G[e]), t._wmAdded || (t.addTo(y), t._wmAdded = !0);
			var r = t.getElement();
			if (!K[e]) {
				if (n > 0) {
					K[e] = setTimeout(function() {
						delete K[e], r.offsetWidth, r.classList.add("wm-visible");
					}, n);
					return;
				}
				r.classList.contains("wm-visible") || (r.offsetWidth, r.classList.add("wm-visible"));
			}
		}
		function X(e, t) {
			K[e] && (clearTimeout(K[e]), delete K[e]), !G[e] && (t.getElement().classList.remove("wm-visible"), G[e] = setTimeout(function() {
				t.remove(), t._wmAdded = !1, delete G[e];
			}, 400));
		}
		function Z() {
			for (var e = {}, t = y.querySourceFeatures("wmOrte"), n = 0; n < t.length; n++) {
				var r = t[n], i = r.properties, a = r.geometry.coordinates, o = i.cluster ? "c" + i.cluster_id : "p" + i.idx;
				if (!e[o]) {
					var s = U[o];
					if (!s) {
						var c = i.cluster ? H(i, a) : V(A[i.idx]);
						s = new mapboxgl.Marker({
							element: c,
							anchor: "center"
						}).setLngLat(a), U[o] = s;
					}
					e[o] = s;
				}
			}
			var l = Object.keys(e), u = q && l.length > 0;
			u && (q = !1);
			var d = u && !J ? Math.min(90, 1200 / Math.max(1, l.length - 1)) : 0;
			for (var f in l.forEach(function(t, n) {
				Y(t, e[t], Math.round(n * d));
			}), W) e[f] || X(f, W[f]);
			W = e;
		}
		y.on("load", function() {
			y.addSource("wmOrte", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: I()
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
				y.isSourceLoaded("wmOrte") && Z();
			}), y.on("moveend", Z);
		});
	});
})();
//#endregion

//# sourceMappingURL=west-map.js.map