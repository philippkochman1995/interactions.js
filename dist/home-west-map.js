import { t as e } from "./site-interactions-B0Sdc9vB.js";
import { t } from "./site-interactions-CahnrWDV.js";
//#region src/home-west-map.ts
var n = "2.15.0", r = `https://api.mapbox.com/mapbox-gl-js/v${n}/mapbox-gl.js`, i = `https://api.mapbox.com/mapbox-gl-js/v${n}/mapbox-gl.css`, a = "(max-width: 767px)", o = [[-7, 37], [32, 59]], s = 18, c = Math.log2(1.15), l;
function u() {
	if (l) return l;
	let e = document.createElement("link");
	return e.rel = "stylesheet", e.href = i, document.head.appendChild(e), l = new Promise((e, t) => {
		let n = window.mapboxgl;
		if (n) {
			e(n);
			return;
		}
		let i = document.createElement("script");
		i.src = r, i.async = !0, i.onload = () => {
			let n = window.mapboxgl;
			n ? e(n) : t(/* @__PURE__ */ Error("Mapbox GL did not initialize"));
		}, i.onerror = () => t(/* @__PURE__ */ Error("Mapbox GL could not be loaded")), document.head.appendChild(i);
	}), l;
}
function d(e) {
	return Array.from(e.querySelectorAll(".w-dyn-item, .hm_item, [data-wm-home-item]")).map((e) => {
		var n, r, i, a;
		let o = Number.parseFloat(((n = e.querySelector(".hm_lat, .wm-f-lat")) == null ? void 0 : n.textContent) || ""), s = Number.parseFloat(((r = e.querySelector(".hm_lng, .wm-f-lng")) == null ? void 0 : r.textContent) || ""), c = e.querySelector(".hm_bild, .wm-f-bild");
		return {
			lat: o,
			lng: s,
			category: (((i = e.querySelector(".hm_kat, .wm-f-kategorie")) == null ? void 0 : i.textContent) || "").trim(),
			address: (((a = e.querySelector(".hm_adresse, .wm-f-adresse")) == null ? void 0 : a.textContent) || "").trim(),
			image: t(c)
		};
	}).filter((e) => Number.isFinite(e.lat) && Number.isFinite(e.lng));
}
function f(e) {
	return e === "Ausstellungen" ? "wm-home-marker--ausstellungen" : e === "Werke" ? "wm-home-marker--werke" : "wm-home-marker--orte";
}
function p(t) {
	let n = t.querySelector(".map_bg"), r = document.querySelector(".hm_cms, [data-wm-home-source]"), i = t.getAttribute("data-mapbox-token");
	if (!n || !r || !i) return;
	let l = d(r);
	if (!l.length) return;
	let p = window.matchMedia(a), m = window.matchMedia("(prefers-reduced-motion: reduce)"), h = document.createElement("div");
	h.className = "wm-home-map", n.appendChild(h);
	let g = document.createElement("a");
	g.className = "wm-home-map-link", g.href = e("/west-map"), g.setAttribute("aria-label", "West Map öffnen"), n.appendChild(g);
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
	C.observe(t);
	async function w() {
		try {
			let n = await u();
			await document.fonts.load("500 16px \"StyreneA\"").catch(() => []), n.accessToken = i;
			let r = new n.Map({
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
			r.on("style.load", () => {
				r.setFog({
					color: "#ffffff",
					"high-color": "#ffffff",
					"space-color": "#ffffff",
					"horizon-blend": .02,
					"star-intensity": 0
				});
			});
			function a(t) {
				let i = t.properties, a = !!i.cluster, o = l[Number(a ? i.firstIdx : i.idx)], s = a ? i.hasW ? "Werke" : i.hasA ? "Ausstellungen" : "Wichtige Orte" : (o == null ? void 0 : o.category) || "Wichtige Orte", c = document.createElement("a");
				c.className = `wm-home-marker ${f(s)}`, c.href = e("/west-map"), c.setAttribute("aria-label", a ? `${i.point_count} Orte auf der West Map öffnen` : `${(o == null ? void 0 : o.address) || "Ort"} auf der West Map öffnen`);
				let u = document.createElement("span");
				u.className = "wm-home-marker__inner";
				let d = document.createElement("span");
				if (d.className = "wm-home-marker__circle", o != null && o.image) {
					let e = document.createElement("img");
					e.src = o.image, e.alt = "", e.loading = "lazy", e.decoding = "async", d.appendChild(e);
				}
				if (u.appendChild(d), a) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__badge", e.textContent = String(i.point_count_abbreviated || i.point_count || ""), u.appendChild(e);
				} else if (o != null && o.address) {
					let e = document.createElement("span");
					e.className = "wm-home-marker__tooltip", e.textContent = o.address, u.appendChild(e);
				}
				return c.appendChild(u), new n.Marker({
					element: c,
					anchor: "center"
				}).setLngLat(t.geometry.coordinates).addTo(r);
			}
			function d() {
				if (!r.getSource("wmHomePlaces") || !r.isSourceLoaded("wmHomePlaces")) return;
				let e = /* @__PURE__ */ new Set(), n = h.clientWidth, i = h.clientHeight;
				for (let t of r.querySourceFeatures("wmHomePlaces")) {
					let o = t.properties, s = r.project(t.geometry.coordinates);
					if (s.x < -40 || s.x > n + 40 || s.y < -40 || s.y > i + 40) continue;
					let c = o.cluster ? `c${o.cluster_id}` : `p${o.idx}`;
					e.has(c) || (e.add(c), x.has(c) || x.set(c, a(t)));
				}
				for (let [t, n] of x) e.has(t) || (n.remove(), x.delete(t));
				b = Array.from(x.values()).map((e) => e.getElement()).sort((e, t) => e.getBoundingClientRect().left - t.getBoundingClientRect().left), v && b.forEach((e) => e.classList.add("is-visible")), y || (y = !0, t.classList.add("wm-home-ready"), S());
			}
			r.on("load", () => {
				r.setZoom(r.getZoom() + c), r.addSource("wmHomePlaces", {
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
				}), r.addLayer({
					id: "wmHomePlacesHidden",
					type: "circle",
					source: "wmHomePlaces",
					paint: {
						"circle-radius": 0,
						"circle-opacity": 0
					}
				}), r.on("idle", d);
			}), p.addEventListener("change", () => {
				window.requestAnimationFrame(() => {
					r.resize(), r.fitBounds(o, {
						padding: s,
						duration: 0
					}), r.setZoom(r.getZoom() + c);
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
	T.observe(t);
}
function m() {
	document.querySelectorAll("[data-wm-home]").forEach(p);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", m, { once: !0 }) : m();
//#endregion

//# sourceMappingURL=home-west-map.js.map