type HomePlace = {
  lat: number;
  lng: number;
  category: string;
  address: string;
  image: string;
};

type MapFeature = {
  geometry: { coordinates: [number, number] };
  properties: Record<string, string | number | boolean>;
};

const MAPBOX_VERSION = '2.15.0';
const MAP_URL = `https://api.mapbox.com/mapbox-gl-js/v${MAPBOX_VERSION}/mapbox-gl.js`;
const MAP_CSS_URL = `https://api.mapbox.com/mapbox-gl-js/v${MAPBOX_VERSION}/mapbox-gl.css`;
const MAP_DESTINATION = '/west-map';
const MOBILE_QUERY = '(max-width: 767px)';
const EUROPE_BOUNDS: [[number, number], [number, number]] = [[-7, 37], [32, 59]];
const EUROPE_PADDING = 18;
const EUROPE_ZOOM_OFFSET = Math.log2(1.15);

let mapboxPromise: Promise<any> | undefined;

function loadMapbox(): Promise<any> {
  if (mapboxPromise) return mapboxPromise;

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = MAP_CSS_URL;
  document.head.appendChild(css);

  mapboxPromise = new Promise((resolve, reject) => {
    const existing = (window as any).mapboxgl;
    if (existing) {
      resolve(existing);
      return;
    }

    const script = document.createElement('script');
    script.src = MAP_URL;
    script.async = true;
    script.onload = () => {
      const mapbox = (window as any).mapboxgl;
      if (mapbox) resolve(mapbox);
      else reject(new Error('Mapbox GL did not initialize'));
    };
    script.onerror = () => reject(new Error('Mapbox GL could not be loaded'));
    document.head.appendChild(script);
  });

  return mapboxPromise;
}

function readPlaces(source: Element): HomePlace[] {
  return Array.from(source.querySelectorAll('.w-dyn-item, .hm_item, [data-wm-home-item]'))
    .map((item) => {
      const lat = Number.parseFloat(item.querySelector('.hm_lat, .wm-f-lat')?.textContent || '');
      const lng = Number.parseFloat(item.querySelector('.hm_lng, .wm-f-lng')?.textContent || '');
      const image = item.querySelector<HTMLImageElement>('.hm_bild, .wm-f-bild');

      return {
        lat,
        lng,
        category: (item.querySelector('.hm_kat, .wm-f-kategorie')?.textContent || '').trim(),
        address: (item.querySelector('.hm_adresse, .wm-f-adresse')?.textContent || '').trim(),
        image: image ? markerImage(image) : '',
      };
    })
    .filter((place) => Number.isFinite(place.lat) && Number.isFinite(place.lng));
}

function markerImage(image: HTMLImageElement): string {
  const candidates = (image.getAttribute('srcset') || '').split(',')
    .map((entry) => entry.trim().match(/^(\S+)\s+(\d+)w$/))
    .filter((entry): entry is RegExpMatchArray => !!entry)
    .map((entry) => ({ url: entry[1], width: Number(entry[2]) }))
    .sort((a, b) => a.width - b.width);
  return (candidates.find((entry) => entry.width >= 200) || candidates[candidates.length - 1])?.url
    || image.currentSrc || image.src || '';
}

function categoryClass(category: string): string {
  if (category === 'Ausstellungen') return 'wm-home-marker--ausstellungen';
  if (category === 'Werke') return 'wm-home-marker--werke';
  return 'wm-home-marker--orte';
}

function initHomeMap(root: HTMLElement): void {
  const background = root.querySelector<HTMLElement>('.map_bg');
  const source = document.querySelector('.hm_cms, [data-wm-home-source]');
  const token = root.getAttribute('data-mapbox-token');
  if (!background || !source || !token) return;

  const places = readPlaces(source);
  if (!places.length) return;

  const mobileQuery = window.matchMedia(MOBILE_QUERY);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mount = document.createElement('div');
  mount.className = 'wm-home-map';
  background.appendChild(mount);

  const fullMapLink = document.createElement('a');
  fullMapLink.className = 'wm-home-map-link';
  fullMapLink.href = MAP_DESTINATION;
  fullMapLink.setAttribute('aria-label', 'West Map öffnen');
  background.appendChild(fullMapLink);

  let visible = false;
  let revealed = false;
  let mapReady = false;
  let markerElements: HTMLElement[] = [];
  const markers = new Map<string, any>();

  function reveal(): void {
    if (!visible || !mapReady || revealed) return;
    revealed = true;
    const delay = reducedMotion.matches ? 0 : 90;
    markerElements.forEach((element, index) => {
      window.setTimeout(() => element.classList.add('is-visible'), index * delay);
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    if (!entries[0]?.isIntersecting) return;
    visible = true;
    reveal();
    revealObserver.disconnect();
  }, { threshold: 0.2 });
  revealObserver.observe(root);

  async function start(): Promise<void> {
    try {
      const mapbox = await loadMapbox();
      mapbox.accessToken = token;
      const map = new mapbox.Map({
        container: mount,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'globe',
        bounds: EUROPE_BOUNDS,
        fitBoundsOptions: { padding: EUROPE_PADDING },
        bearing: 0,
        pitch: 0,
        interactive: false,
        attributionControl: true,
      });

      map.on('style.load', () => {
        map.setFog({
          color: '#ffffff',
          'high-color': '#ffffff',
          'space-color': '#ffffff',
          'horizon-blend': 0.02,
          'star-intensity': 0,
        });
      });

      function createMarker(feature: MapFeature): any {
        const props = feature.properties;
        const clustered = Boolean(props.cluster);
        const place = places[Number(clustered ? props.firstIdx : props.idx)];
        const category = clustered
          ? (props.hasW ? 'Werke' : props.hasA ? 'Ausstellungen' : 'Wichtige Orte')
          : place?.category || 'Wichtige Orte';
        const link = document.createElement('a');
        link.className = `wm-home-marker ${categoryClass(category)}`;
        link.href = MAP_DESTINATION;
        link.setAttribute('aria-label', clustered
          ? `${props.point_count} Orte auf der West Map öffnen`
          : `${place?.address || 'Ort'} auf der West Map öffnen`);

        const inner = document.createElement('span');
        inner.className = 'wm-home-marker__inner';
        const circle = document.createElement('span');
        circle.className = 'wm-home-marker__circle';
        if (place?.image) {
          const image = document.createElement('img');
          image.src = place.image;
          image.alt = '';
          image.loading = 'lazy';
          image.decoding = 'async';
          circle.appendChild(image);
        }
        inner.appendChild(circle);

        if (clustered) {
          const badge = document.createElement('span');
          badge.className = 'wm-home-marker__badge';
          badge.textContent = String(props.point_count_abbreviated || props.point_count || '');
          inner.appendChild(badge);
        } else if (place?.address) {
          const tooltip = document.createElement('span');
          tooltip.className = 'wm-home-marker__tooltip';
          tooltip.textContent = place.address;
          inner.appendChild(tooltip);
        }

        link.appendChild(inner);
        return new mapbox.Marker({ element: link, anchor: 'center' })
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      }

      function syncMarkers(): void {
        if (!map.getSource('wmHomePlaces') || !map.isSourceLoaded('wmHomePlaces')) return;

        const next = new Set<string>();
        const width = mount.clientWidth;
        const height = mount.clientHeight;
        for (const feature of map.querySourceFeatures('wmHomePlaces') as MapFeature[]) {
          const props = feature.properties;
          const point = map.project(feature.geometry.coordinates);
          if (point.x < -40 || point.x > width + 40 || point.y < -40 || point.y > height + 40) continue;
          const key = props.cluster ? `c${props.cluster_id}` : `p${props.idx}`;
          if (next.has(key)) continue;
          next.add(key);
          if (!markers.has(key)) markers.set(key, createMarker(feature));
        }

        for (const [key, marker] of markers) {
          if (!next.has(key)) {
            marker.remove();
            markers.delete(key);
          }
        }

        markerElements = Array.from(markers.values())
          .map((marker) => marker.getElement() as HTMLElement)
          .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
        if (revealed) markerElements.forEach((element) => element.classList.add('is-visible'));
        if (!mapReady) {
          mapReady = true;
          root.classList.add('wm-home-ready');
          reveal();
        }
      }

      map.on('load', () => {
        map.setZoom(map.getZoom() + EUROPE_ZOOM_OFFSET);
        map.addSource('wmHomePlaces', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: places.map((place, idx) => ({
              type: 'Feature',
              properties: {
                idx,
                cat: place.category === 'Werke' ? 'w' : place.category === 'Ausstellungen' ? 'a' : 'o',
              },
              geometry: { type: 'Point', coordinates: [place.lng, place.lat] },
            })),
          },
          cluster: true,
          clusterMaxZoom: 17,
          clusterRadius: 60,
          clusterProperties: {
            firstIdx: ['min', ['get', 'idx']],
            hasW: ['max', ['case', ['==', ['get', 'cat'], 'w'], 1, 0]],
            hasA: ['max', ['case', ['==', ['get', 'cat'], 'a'], 1, 0]],
          },
        });
        map.addLayer({
          id: 'wmHomePlacesHidden',
          type: 'circle',
          source: 'wmHomePlaces',
          paint: { 'circle-radius': 0, 'circle-opacity': 0 },
        });
        map.on('idle', syncMarkers);
      });

      mobileQuery.addEventListener('change', () => {
        window.requestAnimationFrame(() => {
          map.resize();
          map.fitBounds(EUROPE_BOUNDS, { padding: EUROPE_PADDING, duration: 0 });
          map.setZoom(map.getZoom() + EUROPE_ZOOM_OFFSET);
        });
      });
    } catch {
      mount.remove();
    }
  }

  const loadObserver = new IntersectionObserver((entries) => {
    if (!entries[0]?.isIntersecting) return;
    loadObserver.disconnect();
    void start();
  }, { rootMargin: '400px 0px' });
  loadObserver.observe(root);
}

function ready(): void {
  document.querySelectorAll<HTMLElement>('[data-wm-home]').forEach(initHomeMap);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready, { once: true });
} else {
  ready();
}
