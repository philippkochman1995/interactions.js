//#region src/home-west-map.ts
var e = "2.15.0", t = `https://api.mapbox.com/mapbox-gl-js/v${e}/mapbox-gl.js`, n = `https://api.mapbox.com/mapbox-gl-js/v${e}/mapbox-gl.css`, r = "/west-map", i = "(max-width: 767px)", a = [[-7, 37], [32, 59]], o = 18, s = Math.log2(1.15), c;
function l() {
	if (c) return c;
	let e = document.createElement("link");
	return e.rel = "stylesheet", e.href = n, document.head.appendChild(e), c = new Promise((e, n) => {
		let r = window.mapboxgl;
		if (r) {
			e(r);
			return;
		}
		let i = document.createElement("script");
		i.src = t, i.async = !0, i.onload = () => {
			let t = window.mapboxgl;
			t ? e(t) : n(/* @__PURE__ */ Error("Mapbox GL did not initialize"));
		}, i.onerror = () => n(/* @__PURE__ */ Error("Mapbox GL could not be loaded")), document.head.appendChild(i);
	}), c;
}
function u(e) {
	return Array.from(e.querySelectorAll(".w-dyn-item, .hm_item, [data-wm-home-item]")).map((e) => {
		var t, n, r, i;
		let a = Number.parseFloat(((t = e.querySelector(".hm_lat, .wm-f-lat")) == null ? void 0 : t.textContent) || ""), o = Number.parseFloat(((n = e.querySelector(".hm_lng, .wm-f-lng")) == null ? void 0 : n.textContent) || ""), s = e.querySelector(".hm_bild, .wm-f-bild");
		return {
			lat: a,
			lng: o,
			category: (((r = e.querySelector(".hm_kat, .wm-f-kategorie")) == null ? void 0 : r.textContent) || "").trim(),
			address: (((i = e.querySelector(".hm_adresse, .wm-f-adresse")) == null ? void 0 : i.textContent) || "").trim(),
			image: s ? d(s) : ""
		};
	}).filter((e) => Number.isFinite(e.lat) && Number.isFinite(e.lng));
}
function d(e) {
	var t;
	let n = (e.getAttribute("srcset") || "").split(",").map((e) => e.trim().match(/^(\S+)\s+(\d+)w$/)).filter((e) => !!e).map((e) => ({
		url: e[1],
		width: Number(e[2])
	})).sort((e, t) => e.width - t.width);
	return ((t = n.find((e) => e.width >= 200) || n[n.length - 1]) == null ? void 0 : t.url) || e.currentSrc || e.src || "";
}
function f(e) {
	return e === "Ausstellungen" ? "wm-home-marker--ausstellungen" : e === "Werke" ? "wm-home-marker--werke" : "wm-home-marker--orte";
}
function p(e) {
	let t = e.querySelector(".map_bg"), n = document.querySelector(".hm_cms, [data-wm-home-source]"), c = e.getAttribute("data-mapbox-token");
	if (!t || !n || !c) return;
	let d = u(n);
	if (!d.length) return;
	let p = window.matchMedia(i), m = window.matchMedia("(prefers-reduced-motion: reduce)"), h = document.createElement("div");
	h.className = "wm-home-map", t.appendChild(h);
	let g = document.createElement("a");
	g.className = "wm-home-map-link", g.href = r, g.setAttribute("aria-label", "West Map öffnen"), t.appendChild(g);
	let _ = !1, v = !1, y = !1, b = [], x = /* @__PURE__ */ new Map();
	function S() {
		if (!_ || !y || v) return;
		v = !0;
		let e = m.matches ? 0 : 90;
		b.forEach((t, n) => {
			window.setTimeout(() => t.classList.add("is-visible"), n * e);
		});
	}
	let C = new IntersectionObserver((e) => {
		var t;
		(t = e[0]) != null && t.isIntersecting && (_ = !0, S(), C.disconnect());
	}, { threshold: .2 });
	C.observe(e);
	async function w() {
		try {
			let t = await l();
			t.accessToken = c;
			let n = new t.Map({
				container: h,
				style: "mapbox://styles/mapbox/light-v11",
				projection: "globe",
				bounds: a,
				fitBoundsOptions: { padding: o },
				bearing: 0,
				pitch: 0,
				interactive: !1,
				attributionControl: !0
			});
			n.on("style.load", () => {
				n.setFog({
					color: "#ffffff",
					"high-color": "#ffffff",
					"space-color": "#ffffff",
					"horizon-blend": .02,
					"star-intensity": 0
				});
			});
			function i(e) {
				let i = e.properties, a = !!i.cluster, o = d[Number(a ? i.firstIdx : i.idx)], s = a ? i.hasW ? "Werke" : i.hasA ? "Ausstellungen" : "Wichtige Orte" : (o == null ? void 0 : o.category) || "Wichtige Orte", c = document.createElement("a");
				c.className = `wm-home-marker ${f(s)}`, c.href = r, c.setAttribute("aria-label", a ? `${i.point_count} Orte auf der West Map öffnen` : `${(o == null ? void 0 : o.address) || "Ort"} auf der West Map öffnen`);
				let l = document.createElement("span");
				l.className = "wm-home-marker__inner";
				let u = document.createElement("span");
				if (u.className = "wm-home-marker__circle", o != null && o.image) {
					let e = document.createElement("img");
					e.src = o.image, e.alt = "", e.loading = "lazy", e.decoding = "async", u.appendChild(e);
				}
				if (l.appendChild(u), a) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__badge", e.textContent = String(i.point_count_abbreviated || i.point_count || ""), l.appendChild(e);
				} else if (o != null && o.address) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__tooltip", e.textContent = o.address, l.appendChild(e);
				}
				return c.appendChild(l), new t.Marker({
					element: c,
					anchor: "center"
				}).setLngLat(e.geometry.coordinates).addTo(n);
			}
			function u() {
				if (!n.getSource("wmHomePlaces") || !n.isSourceLoaded("wmHomePlaces")) return;
				let t = /* @__PURE__ */ new Set(), r = h.clientWidth, a = h.clientHeight;
				for (let e of n.querySourceFeatures("wmHomePlaces")) {
					let o = e.properties, s = n.project(e.geometry.coordinates);
					if (s.x < -40 || s.x > r + 40 || s.y < -40 || s.y > a + 40) continue;
					let c = o.cluster ? `c${o.cluster_id}` : `p${o.idx}`;
					t.has(c) || (t.add(c), x.has(c) || x.set(c, i(e)));
				}
				for (let [e, n] of x) t.has(e) || (n.remove(), x.delete(e));
				b = Array.from(x.values()).map((e) => e.getElement()).sort((e, t) => e.getBoundingClientRect().left - t.getBoundingClientRect().left), v && b.forEach((e) => e.classList.add("is-visible")), y || (y = !0, e.classList.add("wm-home-ready"), S());
			}
			n.on("load", () => {
				n.setZoom(n.getZoom() + s), n.addSource("wmHomePlaces", {
					type: "geojson",
					data: {
						type: "FeatureCollection",
						features: d.map((e, t) => ({
							type: "Feature",
							properties: {
								idx: t,
								cat: e.category === "Werke" ? "w" : e.category === "Ausstellungen" ? "a" : "o"
							},
							geometry: {
								type: "Point",
								coordinates: [e.lng, e.lat]
							}
						}))
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
								["get", "cat"],
								"w"
							],
							1,
							0
						]],
						hasA: ["max", [
							"case",
							[
								"==",
								["get", "cat"],
								"a"
							],
							1,
							0
						]]
					}
				}), n.addLayer({
					id: "wmHomePlacesHidden",
					type: "circle",
					source: "wmHomePlaces",
					paint: {
						"circle-radius": 0,
						"circle-opacity": 0
					}
				}), n.on("idle", u);
			}), p.addEventListener("change", () => {
				window.requestAnimationFrame(() => {
					n.resize(), n.fitBounds(a, {
						padding: o,
						duration: 0
					}), n.setZoom(n.getZoom() + s);
				});
			});
		} catch (e) {
			h.remove();
		}
	}
	let T = new IntersectionObserver((e) => {
		var t;
		(t = e[0]) != null && t.isIntersecting && (T.disconnect(), w());
	}, { rootMargin: "400px 0px" });
	T.observe(e);
}
function m() {
	document.querySelectorAll("[data-wm-home]").forEach(p);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", m, { once: !0 }) : m();
//#endregion

//# sourceMappingURL=home-west-map.js.map