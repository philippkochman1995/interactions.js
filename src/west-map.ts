// @ts-nocheck
(function(){
  var catClassMap = {
    'Ausstellungen': 'wm-cat-ausstellungen',
    'Werke': 'wm-cat-werke',
    'Wichtige Orte': 'wm-cat-orte'
  };
  var catCodeMap = { 'Ausstellungen': 'a', 'Werke': 'w', 'Wichtige Orte': 'o' };
  var dotCatMap = { 'wm-dot-ausstellungen': 'Ausstellungen', 'wm-dot-werke': 'Werke', 'wm-dot-orte': 'Wichtige Orte' };

  var ZOOM_IN_SVG = '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="29" height="29" rx="14.5" fill="#444153"/><path d="M13.4152 8V13.068L13.068 13.4152H8V15.5849H13.068L13.4152 15.932V21H15.5848V15.932L15.932 15.5849H21V13.4152H15.932L15.5848 13.068V8H13.4152Z" fill="#FAFDFF"/></svg>';
  var ZOOM_OUT_SVG = '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="29" height="29" rx="14.5" fill="#444153"/><path d="M9 16V13H20V16H9Z" fill="#FAFDFF"/></svg>';
  var FILTER_SVG = '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="29" height="29" rx="14.5" fill="#444153"/><g clip-path="url(#wmFilterClip)"><path d="M14.5075 10.2998H6.60848L6.30859 10.7506L7.3437 12.2998H14.5026H14.5075H21.6582L22.6932 10.7506L22.3933 10.2998H14.5075Z" fill="#FAFDFF"/><path d="M15.1369 14.5H9.29988C9.17037 14.6947 9 14.9508 9 14.9508L10.0351 16.5H15.1321H15.1369H19.2339L20.2689 14.9508C20.1393 14.7561 20.0985 14.6947 19.969 14.5H15.1369Z" fill="#FAFDFF"/><path d="M14.0832 18.7002H12.2999L12 19.151L13.0351 20.7002H14.0783H14.0832H16.1264L17.1613 19.151L16.8614 18.7002H14.0832Z" fill="#FAFDFF"/></g><defs><clipPath id="wmFilterClip"><rect width="17" height="12" fill="white" transform="translate(6 9.5)"/></clipPath></defs></svg>';

  function ready(fn){
    if(document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function(){
    var mapEl = document.getElementById('wmMap');
    if(!mapEl || typeof mapboxgl === 'undefined') return;

    var mapboxToken = mapEl.getAttribute('data-mapbox-token');
    if(!mapboxToken){
      console.error('West Map: #wmMap benötigt das Attribut data-mapbox-token.');
      return;
    }

    mapboxgl.accessToken = mapboxToken;

    var root = mapEl.parentElement;
    root.classList.add('wm-page');

    Array.prototype.forEach.call(root.children, function(ch){
      if(ch.tagName === 'DIV' && !ch.id){
        if(ch.querySelector('a')){
          ch.classList.add('wm-overview-slot');
        } else if(ch.querySelector('svg')){
          ch.classList.add('wm-scrolldown-slot');
        }
      }
    });

    var legend = document.getElementById('wmLegend');
    if(legend) legend.classList.add('wm-legend');

    var sw = document.getElementById('wmLabelsSwitch');
    if(sw){
      sw.classList.add('wm-switch');
      var row = sw.parentElement;
      row.classList.add('wm-legend-toggle-row');

      var prev = row.previousElementSibling;
      if(prev && !prev.classList.length){
        prev.classList.add('wm-legend-divider');
      }
    }

    var src = document.getElementById('wmCmsSource');
    if(src) src.classList.add('wm-cms-source');

    var map = new mapboxgl.Map({
      container: 'wmMap',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [16.3738, 48.2082],
      zoom: 12,
      minZoom: 1,
      maxZoom: 18
    });

    var topBarRight = document.querySelector('.top_bar_right');

    if(topBarRight){
      var zoomWrap = document.createElement('div');
      zoomWrap.className = 'wm-zoom-controls';

      var zoomInBtn = document.createElement('button');
      zoomInBtn.type = 'button';
      zoomInBtn.className = 'wm-zoom-btn';
      zoomInBtn.setAttribute('aria-label','Reinzoomen');
      zoomInBtn.innerHTML = ZOOM_IN_SVG;

      var zoomOutBtn = document.createElement('button');
      zoomOutBtn.type = 'button';
      zoomOutBtn.className = 'wm-zoom-btn';
      zoomOutBtn.setAttribute('aria-label','Rauszoomen');
      zoomOutBtn.innerHTML = ZOOM_OUT_SVG;

      var filterBtn = document.createElement('button');
      filterBtn.type = 'button';
      filterBtn.className = 'wm-zoom-btn wm-filter-btn';
      filterBtn.setAttribute('aria-label','Legende');
      filterBtn.setAttribute('aria-expanded','false');
      filterBtn.innerHTML = FILTER_SVG;

      zoomWrap.appendChild(zoomInBtn);
      zoomWrap.appendChild(zoomOutBtn);
      zoomWrap.appendChild(filterBtn);

      if(legend && legend.parentElement === topBarRight){
        topBarRight.insertBefore(zoomWrap, legend);
      } else {
        topBarRight.appendChild(zoomWrap);
      }

      zoomInBtn.addEventListener('click', function(){
        map.zoomIn();
      });

      zoomOutBtn.addEventListener('click', function(){
        map.zoomOut();
      });

      function positionLegend(){
        if(!legend) return;

        var rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        var btnRect = filterBtn.getBoundingClientRect();

        legend.style.right = Math.max(0, window.innerWidth - btnRect.right - 1.5 * rem) + 'px';
      }

      filterBtn.addEventListener('click', function(){
        if(!legend) return;

        positionLegend();

        var open = legend.classList.toggle('is-open');
        document.body.classList.toggle('wm-legend-open', open);
        filterBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      window.addEventListener('resize', function(){
        if(legend && legend.classList.contains('is-open')){
          positionLegend();
        }
      });

      document.addEventListener('click', function(e){
        if(!legend || !legend.classList.contains('is-open')) return;
        if(legend.contains(e.target) || filterBtn.contains(e.target)) return;

        legend.classList.remove('is-open');
        document.body.classList.remove('wm-legend-open');
        filterBtn.setAttribute('aria-expanded', 'false');
      });
    } else {
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
    }

    var fadeOverlay = document.createElement('div');
    fadeOverlay.className = 'wm-map-fade';
    mapEl.appendChild(fadeOverlay);

    function flyOrFade(center, zoom){
      if(Math.abs(zoom - map.getZoom()) <= 4){
        map.easeTo({ center: center, zoom: zoom });
        return;
      }

      fadeOverlay.classList.add('is-active');

      setTimeout(function(){
        map.jumpTo({ center: center, zoom: zoom });

        var done = false;

        function clear(){
          if(done) return;
          done = true;
          fadeOverlay.classList.remove('is-active');
        }

        map.once('idle', clear);
        setTimeout(clear, 2500);
      }, 280);
    }


function openMapModal(data){
  if(!window.SiteInteractions) return;

  window.SiteInteractions.openContentModal({
    id: 'west-map-detail',
    address: data.name && data.adresse ? data.name + ' | ' + data.adresse : (data.name || data.adresse || ''),
    image: data.bild || '',
    imageAlt: data.name || '',
    caption: data.bildrechte || '',
    html: data.text || ''
  });
}

    if(sw){
      sw.setAttribute('aria-checked','false');

      sw.addEventListener('click', function(){
        var on = sw.classList.toggle('is-on');
        sw.setAttribute('aria-checked', on ? 'true' : 'false');
        document.body.classList.toggle('wm-labels-on', on);
      });

      sw.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          sw.click();
        }
      });
    }

    var orte = [];

    document.querySelectorAll('.wm-cms-item').forEach(function(item){
      var lat = parseFloat(((item.querySelector('.wm-f-lat') || {}).textContent || ''));
      var lng = parseFloat(((item.querySelector('.wm-f-lng') || {}).textContent || ''));

      if(isNaN(lat) || isNaN(lng)) return;

      var imgEl = item.querySelector('.wm-f-bild');
      var textEl = item.querySelector('.wm-f-text');

      orte.push({
        lat: lat,
        lng: lng,
        name: (item.querySelector('.wm-f-name') || {}).textContent || '',
        adresse: (item.querySelector('.wm-f-adresse') || {}).textContent || '',
        kategorie: ((item.querySelector('.wm-f-kategorie') || {}).textContent || '').trim(),
        bildrechte: (item.querySelector('.wm-f-bildrechte') || {}).textContent || '',
        bild: imgEl ? imgEl.getAttribute('src') : '',
        text: textEl ? textEl.innerHTML : ''
      });
    });

    var activeCats = {
      'Ausstellungen': true,
      'Werke': true,
      'Wichtige Orte': true
    };

    function buildFeatures(){
      var feats = [];

      orte.forEach(function(o, i){
        if(activeCats[o.kategorie] === false) return;

        feats.push({
          type:'Feature',
          id:i,
          properties:{
            idx:i,
            kat: catCodeMap[o.kategorie] || 'o'
          },
          geometry:{
            type:'Point',
            coordinates:[o.lng, o.lat]
          }
        });
      });

      return feats;
    }

    function applyFilter(){
      for(var t in removeTimers){
        clearTimeout(removeTimers[t]);
        delete removeTimers[t];
      }

      for(var m in markersCache){
        markersCache[m].remove();
        markersCache[m]._wmAdded = false;
      }

      markersCache = {};
      markersOnScreen = {};

      var s = map.getSource('wmOrte');
      if(s){
        s.setData({
          type:'FeatureCollection',
          features: buildFeatures()
        });
      }
    }

    if(legend){
      legend.querySelectorAll('.wm-legend-item').forEach(function(item){
        item.addEventListener('click', function(){
          var dot = item.querySelector('.wm-dot');
          var cat = null;

          if(dot){
            for(var c in dotCatMap){
              if(dot.classList.contains(c)){
                cat = dotCatMap[c];
              }
            }
          }

          if(!cat) return;

          var off = item.classList.toggle('is-off');
          activeCats[cat] = !off;

          applyFilter();
        });
      });
    }

    function buildMarkerShell(catClass){
      var el = document.createElement('div');
      el.className = 'wm-marker ' + catClass;

      var inner = document.createElement('div');
      inner.className = 'wm-marker-inner';

      el.appendChild(inner);

      return {
        el: el,
        inner: inner
      };
    }

    function createOrtMarker(ort){
      var shell = buildMarkerShell(catClassMap[ort.kategorie] || 'wm-cat-orte');

      var circle = document.createElement('div');
      circle.className = 'wm-marker-circle';

      if(ort.bild){
        circle.style.backgroundImage = 'url(' + ort.bild + ')';
      }

      shell.inner.appendChild(circle);

      if(ort.adresse){
        var tooltip = document.createElement('div');
        tooltip.className = 'wm-marker-tooltip';
        tooltip.textContent = ort.adresse;
        shell.inner.appendChild(tooltip);
      }

      var label = document.createElement('div');
      label.className = 'wm-marker-label';
      label.textContent = ort.name;
      shell.inner.appendChild(label);

      shell.el.addEventListener('click', function(){
        openMapModal(ort);
      });

      return shell.el;
    }

    function createClusterMarker(props, coords){
      var catClass = props.hasW ? 'wm-cat-werke' : (props.hasA ? 'wm-cat-ausstellungen' : 'wm-cat-orte');
      var shell = buildMarkerShell('wm-cluster ' + catClass);

      var circle = document.createElement('div');
      circle.className = 'wm-marker-circle';

      var o = orte[props.firstIdx];
      if(o && o.bild){
        circle.style.backgroundImage = 'url(' + o.bild + ')';
      }

      shell.inner.appendChild(circle);

      var badge = document.createElement('div');
      badge.className = 'wm-cluster-badge';
      badge.textContent = props.point_count_abbreviated;
      shell.inner.appendChild(badge);

      shell.el.addEventListener('click', function(){
        map.getSource('wmOrte').getClusterExpansionZoom(props.cluster_id, function(err, zoom){
          if(err) return;
          flyOrFade(coords, zoom + 0.2);
        });
      });

      return shell.el;
    }

    var markersCache = {};
    var markersOnScreen = {};
    var removeTimers = {};

    function showMarker(key, marker){
      if(removeTimers[key]){
        clearTimeout(removeTimers[key]);
        delete removeTimers[key];
      }

      if(!marker._wmAdded){
        marker.addTo(map);
        marker._wmAdded = true;
      }

      var el = marker.getElement();

      if(!el.classList.contains('wm-visible')){
        void el.offsetWidth;
        el.classList.add('wm-visible');
      }
    }

    function hideMarker(key, marker){
      if(removeTimers[key]) return;

      marker.getElement().classList.remove('wm-visible');

      removeTimers[key] = setTimeout(function(){
        marker.remove();
        marker._wmAdded = false;
        delete removeTimers[key];
      }, 200);
    }

    function updateMarkers(){
      var newMarkers = {};
      var feats = map.querySourceFeatures('wmOrte');

      for(var i=0;i<feats.length;i++){
        var f = feats[i];
        var props = f.properties;
        var coords = f.geometry.coordinates;
        var key = props.cluster ? ('c' + props.cluster_id) : ('p' + props.idx);

        if(newMarkers[key]) continue;

        var marker = markersCache[key];

        if(!marker){
          var el = props.cluster ? createClusterMarker(props, coords) : createOrtMarker(orte[props.idx]);

          marker = new mapboxgl.Marker({
            element: el,
            anchor: 'center'
          }).setLngLat(coords);

          markersCache[key] = marker;
        }

        newMarkers[key] = marker;
        showMarker(key, marker);
      }

      for(var k2 in markersOnScreen){
        if(!newMarkers[k2]){
          hideMarker(k2, markersOnScreen[k2]);
        }
      }

      markersOnScreen = newMarkers;
    }

    map.on('load', function(){
      map.addSource('wmOrte', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: buildFeatures()
        },
        cluster: true,
        clusterMaxZoom: 17,
        clusterRadius: 60,
        clusterProperties: {
          firstIdx: ['min', ['get', 'idx']],
          hasW: ['max', ['case', ['==', ['get', 'kat'], 'w'], 1, 0]],
          hasA: ['max', ['case', ['==', ['get', 'kat'], 'a'], 1, 0]]
        }
      });

      map.addLayer({
        id: 'wmOrteHidden',
        type: 'circle',
        source: 'wmOrte',
        paint: {
          'circle-radius': 0,
          'circle-opacity': 0
        }
      });

      map.on('render', function(){
        if(map.isSourceLoaded('wmOrte')) updateMarkers();
      });

      map.on('moveend', updateMarkers);
    });
  });
})();
