//#region src/home-west-map.ts
var e = "2.15.0", t = `https://api.mapbox.com/mapbox-gl-js/v${e}/mapbox-gl.js`, n = `https://api.mapbox.com/mapbox-gl-js/v${e}/mapbox-gl.css`, r = "/west-map", i = "(max-width: 767px)", a;
function o() {
	if (a) return a;
	let e = document.createElement("link");
	return e.rel = "stylesheet", e.href = n, document.head.appendChild(e), a = new Promise((e, n) => {
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
	}), a;
}
function s(e) {
	return Array.from(e.querySelectorAll(".w-dyn-item, .hm_item, [data-wm-home-item]")).map((e) => {
		var t, n, r, i;
		let a = Number.parseFloat(((t = e.querySelector(".hm_lat, .wm-f-lat")) == null ? void 0 : t.textContent) || ""), o = Number.parseFloat(((n = e.querySelector(".hm_lng, .wm-f-lng")) == null ? void 0 : n.textContent) || ""), s = e.querySelector(".hm_bild, .wm-f-bild");
		return {
			lat: a,
			lng: o,
			category: (((r = e.querySelector(".hm_kat, .wm-f-kategorie")) == null ? void 0 : r.textContent) || "").trim(),
			address: (((i = e.querySelector(".hm_adresse, .wm-f-adresse")) == null ? void 0 : i.textContent) || "").trim(),
			image: (s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || ""
		};
	}).filter((e) => Number.isFinite(e.lat) && Number.isFinite(e.lng));
}
function c(e) {
	return e ? {
		center: [10, 50],
		zoom: 2.7
	} : {
		center: [10, 50],
		zoom: 3
	};
}
function l(e) {
	return e === "Ausstellungen" ? "wm-home-marker--ausstellungen" : e === "Werke" ? "wm-home-marker--werke" : "wm-home-marker--orte";
}
function u(e) {
	let t = e.querySelector(".map_bg"), n = document.querySelector(".hm_cms, [data-wm-home-source]"), a = e.getAttribute("data-mapbox-token");
	if (!t || !n || !a) return;
	let u = s(n);
	if (!u.length) return;
	let d = window.matchMedia(i), f = window.matchMedia("(prefers-reduced-motion: reduce)"), p = document.createElement("div");
	p.className = "wm-home-map", t.appendChild(p);
	let m = document.createElement("a");
	m.className = "wm-home-map-link", m.href = r, m.setAttribute("aria-label", "West Map öffnen"), t.appendChild(m);
	let h = !1, g = !1, _ = !1, v = [], y = /* @__PURE__ */ new Map();
	function b() {
		if (!h || !_ || g) return;
		g = !0;
		let e = f.matches ? 0 : 90;
		v.forEach((t, n) => {
			window.setTimeout(() => t.classList.add("is-visible"), n * e);
		});
	}
	let x = new IntersectionObserver((e) => {
		var t;
		(t = e[0]) != null && t.isIntersecting && (h = !0, b(), x.disconnect());
	}, { threshold: .2 });
	x.observe(e);
	async function S() {
		try {
			let t = await o();
			t.accessToken = a;
			let n = new t.Map({
				container: p,
				style: "mapbox://styles/mapbox/light-v11",
				projection: "globe",
				...c(d.matches),
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
				let i = e.properties, a = !!i.cluster, o = u[Number(a ? i.firstIdx : i.idx)], s = a ? i.hasW ? "Werke" : i.hasA ? "Ausstellungen" : "Wichtige Orte" : (o == null ? void 0 : o.category) || "Wichtige Orte", c = document.createElement("a");
				c.className = `wm-home-marker ${l(s)}`, c.href = r, c.setAttribute("aria-label", a ? `${i.point_count} Orte auf der West Map öffnen` : `${(o == null ? void 0 : o.address) || "Ort"} auf der West Map öffnen`);
				let d = document.createElement("span");
				d.className = "wm-home-marker__inner";
				let f = document.createElement("span");
				if (f.className = "wm-home-marker__circle", o != null && o.image) {
					let e = document.createElement("img");
					e.src = o.image, e.alt = "", e.loading = "lazy", e.decoding = "async", f.appendChild(e);
				}
				if (d.appendChild(f), a) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__badge", e.textContent = String(i.point_count_abbreviated || i.point_count || ""), d.appendChild(e);
				} else if (o != null && o.address) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__tooltip", e.textContent = o.address, d.appendChild(e);
				}
				return c.appendChild(d), new t.Marker({
					element: c,
					anchor: "center"
				}).setLngLat(e.geometry.coordinates).addTo(n);
			}
			function s() {
				if (!n.getSource("wmHomePlaces") || !n.isSourceLoaded("wmHomePlaces")) return;
				let t = /* @__PURE__ */ new Set(), r = p.clientWidth, a = p.clientHeight;
				for (let e of n.querySourceFeatures("wmHomePlaces")) {
					let o = e.properties, s = n.project(e.geometry.coordinates);
					if (s.x < -40 || s.x > r + 40 || s.y < -40 || s.y > a + 40) continue;
					let c = o.cluster ? `c${o.cluster_id}` : `p${o.idx}`;
					t.has(c) || (t.add(c), y.has(c) || y.set(c, i(e)));
				}
				for (let [e, n] of y) t.has(e) || (n.remove(), y.delete(e));
				v = Array.from(y.values()).map((e) => e.getElement()).sort((e, t) => e.getBoundingClientRect().left - t.getBoundingClientRect().left), g && v.forEach((e) => e.classList.add("is-visible")), _ || (_ = !0, e.classList.add("wm-home-ready"), b());
			}
			n.on("load", () => {
				n.addSource("wmHomePlaces", {
					type: "geojson",
					data: {
						type: "FeatureCollection",
						features: u.map((e, t) => ({
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
				}), n.on("idle", s);
			}), d.addEventListener("change", () => {
				n.jumpTo(c(d.matches));
			});
		} catch (e) {
			p.remove();
		}
	}
	let C = new IntersectionObserver((e) => {
		var t;
		(t = e[0]) != null && t.isIntersecting && (C.disconnect(), S());
	}, { rootMargin: "400px 0px" });
	C.observe(e);
}
function d() {
	document.querySelectorAll("[data-wm-home]").forEach(u);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", d, { once: !0 }) : d();
//#endregion

//# sourceMappingURL=home-west-map.js.map