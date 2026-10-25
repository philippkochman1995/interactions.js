import { t as e } from "./site-interactions-CahnrWDV.js";
//#region src/home-west-map.ts
var t = "2.15.0", n = `https://api.mapbox.com/mapbox-gl-js/v${t}/mapbox-gl.js`, r = `https://api.mapbox.com/mapbox-gl-js/v${t}/mapbox-gl.css`, i = "/west-map", a = "(max-width: 767px)", o = [[-7, 37], [32, 59]], s = 18, c = Math.log2(1.15), l;
function u() {
	if (l) return l;
	let e = document.createElement("link");
	return e.rel = "stylesheet", e.href = r, document.head.appendChild(e), l = new Promise((e, t) => {
		let r = window.mapboxgl;
		if (r) {
			e(r);
			return;
		}
		let i = document.createElement("script");
		i.src = n, i.async = !0, i.onload = () => {
			let n = window.mapboxgl;
			n ? e(n) : t(/* @__PURE__ */ Error("Mapbox GL did not initialize"));
		}, i.onerror = () => t(/* @__PURE__ */ Error("Mapbox GL could not be loaded")), document.head.appendChild(i);
	}), l;
}
function d(t) {
	return Array.from(t.querySelectorAll(".w-dyn-item, .hm_item, [data-wm-home-item]")).map((t) => {
		var n, r, i, a;
		let o = Number.parseFloat(((n = t.querySelector(".hm_lat, .wm-f-lat")) == null ? void 0 : n.textContent) || ""), s = Number.parseFloat(((r = t.querySelector(".hm_lng, .wm-f-lng")) == null ? void 0 : r.textContent) || ""), c = t.querySelector(".hm_bild, .wm-f-bild");
		return {
			lat: o,
			lng: s,
			category: (((i = t.querySelector(".hm_kat, .wm-f-kategorie")) == null ? void 0 : i.textContent) || "").trim(),
			address: (((a = t.querySelector(".hm_adresse, .wm-f-adresse")) == null ? void 0 : a.textContent) || "").trim(),
			image: e(c)
		};
	}).filter((e) => Number.isFinite(e.lat) && Number.isFinite(e.lng));
}
function f(e) {
	return e === "Ausstellungen" ? "wm-home-marker--ausstellungen" : e === "Werke" ? "wm-home-marker--werke" : "wm-home-marker--orte";
}
function p(e) {
	let t = e.querySelector(".map_bg"), n = document.querySelector(".hm_cms, [data-wm-home-source]"), r = e.getAttribute("data-mapbox-token");
	if (!t || !n || !r) return;
	let l = d(n);
	if (!l.length) return;
	let p = window.matchMedia(a), m = window.matchMedia("(prefers-reduced-motion: reduce)"), h = document.createElement("div");
	h.className = "wm-home-map", t.appendChild(h);
	let g = document.createElement("a");
	g.className = "wm-home-map-link", g.href = i, g.setAttribute("aria-label", "West Map öffnen"), t.appendChild(g);
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
			let t = await u();
			await document.fonts.load("500 16px \"StyreneA\"").catch(() => []), t.accessToken = r;
			let n = new t.Map({
				container: h,
				style: "mapbox://styles/mapbox/light-v11",
				localFontFamily: "StyreneA",
				projection: "globe",
				bounds: o,
				fitBoundsOptions: { padding: s },
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
			function a(e) {
				let r = e.properties, a = !!r.cluster, o = l[Number(a ? r.firstIdx : r.idx)], s = a ? r.hasW ? "Werke" : r.hasA ? "Ausstellungen" : "Wichtige Orte" : (o == null ? void 0 : o.category) || "Wichtige Orte", c = document.createElement("a");
				c.className = `wm-home-marker ${f(s)}`, c.href = i, c.setAttribute("aria-label", a ? `${r.point_count} Orte auf der West Map öffnen` : `${(o == null ? void 0 : o.address) || "Ort"} auf der West Map öffnen`);
				let u = document.createElement("span");
				u.className = "wm-home-marker__inner";
				let d = document.createElement("span");
				if (d.className = "wm-home-marker__circle", o != null && o.image) {
					let e = document.createElement("img");
					e.src = o.image, e.alt = "", e.loading = "lazy", e.decoding = "async", d.appendChild(e);
				}
				if (u.appendChild(d), a) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__badge", e.textContent = String(r.point_count_abbreviated || r.point_count || ""), u.appendChild(e);
				} else if (o != null && o.address) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__tooltip", e.textContent = o.address, u.appendChild(e);
				}
				return c.appendChild(u), new t.Marker({
					element: c,
					anchor: "center"
				}).setLngLat(e.geometry.coordinates).addTo(n);
			}
			function d() {
				if (!n.getSource("wmHomePlaces") || !n.isSourceLoaded("wmHomePlaces")) return;
				let t = /* @__PURE__ */ new Set(), r = h.clientWidth, i = h.clientHeight;
				for (let e of n.querySourceFeatures("wmHomePlaces")) {
					let o = e.properties, s = n.project(e.geometry.coordinates);
					if (s.x < -40 || s.x > r + 40 || s.y < -40 || s.y > i + 40) continue;
					let c = o.cluster ? `c${o.cluster_id}` : `p${o.idx}`;
					t.has(c) || (t.add(c), x.has(c) || x.set(c, a(e)));
				}
				for (let [e, n] of x) t.has(e) || (n.remove(), x.delete(e));
				b = Array.from(x.values()).map((e) => e.getElement()).sort((e, t) => e.getBoundingClientRect().left - t.getBoundingClientRect().left), v && b.forEach((e) => e.classList.add("is-visible")), y || (y = !0, e.classList.add("wm-home-ready"), S());
			}
			n.on("load", () => {
				n.setZoom(n.getZoom() + c), n.addSource("wmHomePlaces", {
					type: "geojson",
					data: {
						type: "FeatureCollection",
						features: l.map((e, t) => ({
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
				}), n.on("idle", d);
			}), p.addEventListener("change", () => {
				window.requestAnimationFrame(() => {
					n.resize(), n.fitBounds(o, {
						padding: s,
						duration: 0
					}), n.setZoom(n.getZoom() + c);
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