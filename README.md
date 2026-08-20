# Webflow Site Interactions

A small TypeScript interaction layer for reusable Webflow CMS modals and image lightboxes.

The bundle intentionally does not implement Mapbox, canvas, timelines, Spline, sliders, or page-specific behavior. Webflow owns the HTML, CMS fields, localized text, layout, and styling. This code owns state, keyboard behavior, focus management, scroll locking, ARIA basics, and delegated event handling.

## Build

```bash
npm install
npm run check
```

The production file is generated at:

```text
/dist/site-interactions.js
/dist/cms-canvas.js
/dist/cms-work-detail.js
```

The default Vite config outputs an ES module, so include it with `type="module"`.

## Webflow script include

Host `dist/site-interactions.js` on your CDN or static host, then add it globally in Webflow before `</body>`:

```html
<script type="module" src="https://cdn.example.com/site-interactions.js"></script>
```

For cache busting, publish versioned URLs such as:

```html
<script type="module" src="https://cdn.example.com/site-interactions.v1.0.0.js"></script>
```

## Localized UI labels

Add one JSON script tag per page, or globally in the site footer/head if values are shared:

```html
<script type="application/json" data-site-i18n>
{
  "close": "Close",
  "next": "Next",
  "previous": "Previous",
  "openImage": "Open image",
  "openModal": "Open details"
}
</script>
```

The script fails silently if this JSON is missing or invalid. Missing keys fall back to labels passed by the JavaScript module.

## Bottom-up site menu

The global bundle initializes a Webflow-built menu when `[data-site-menu]` exists on the page. Webflow owns the layout, colors, typography, and link content; the script owns open/closed state, focus behavior, active-link detection, the current-page toggle label, and animation.

```html
<nav data-site-menu data-site-menu-closed-label="MENU" data-site-menu-open-label="CLOSE">
  <div data-site-menu-panel>
    <a href="/person" data-site-menu-link>
      <span data-site-menu-indicator></span>
      Person
    </a>
    <a href="/werk" data-site-menu-link>
      <span data-site-menu-indicator></span>
      Werk
    </a>
    <button type="button" data-site-menu-toggle>
      <span data-site-menu-toggle-label>Menu</span>
    </button>
  </div>
</nav>
```

The closed toggle label shows the current active link text, such as `Kontakt` or `West Map`. On hover while closed it switches to `MENU`; while open it switches to `CLOSE`. Set `data-site-menu-label` on a link when the collapsed current-page label should differ from the visible link text:

```html
<a href="/west-map" data-site-menu-link data-site-menu-label="WEST MAP">West Map</a>
```

Open-menu hover shows an arrow at the hovered link's right edge and dims the other menu links to `FW_Dark_Purple_50`. Header links are exempt when they are inside `.site-menu__header`, use `.site-menu__brand` or `.site-menu__language`, or have `data-site-menu-hover-exempt`.

The current page is detected from each link `href` pathname and Webflow's `w--current` class. For manual active-page overrides, set the same value on the root and link:

```html
<nav data-site-menu data-site-menu-current-key="atelier">
  <a href="/news/atelier" data-site-menu-link data-site-menu-key="atelier">Atelier</a>
</nav>
```

## Modal API

### Trigger

```html
<a href="#" data-modal-open="example-modal">Open modal</a>
```

Rich text and CMS body copy can also open modals through hash links:

```html
<a href="#modal:context-example-slug">Open modal</a>
```

### Modal content registry

The bundle creates exactly one modal shell under `body`. Pages only render hidden content records:

```html
<div data-modal-content="example-modal">
  <div data-modal-address>Esteplatz 3, Vienna</div>
  <img data-modal-image src="large-image.jpg" alt="Artwork description">
  <div data-modal-caption>Image credit</div>
  <div data-modal-body class="rich-text">
    <h2>Modal title from CMS</h2>
    <p>CMS rich text content</p>
  </div>
</div>
```

Use a stable CMS-generated slug/id for `data-modal-content` and `data-modal-open`. Do not render modal panels, close buttons, or icons in Webflow.

Legacy `[data-modal]` elements are read into the content registry and removed at boot, which permits a staged Webflow migration.

Recommended ID prefixes:

```text
modal-{slug}
context-{slug}
map-{slug}
```

Examples:

```text
modal-about-project
context-archive-image-01
map-vienna-studio
```

Render only the hidden content registry needed on the current page. Standard pages can render a list from `Modals`, context pages from `Contexts`, and map pages can call the content API directly:

```js
window.SiteInteractions.openContentModal({
  id: 'map-vienna-studio',
  address: 'Vienna',
  image: 'large-image.jpg',
  imageAlt: 'Artwork description',
  caption: 'Image credit',
  html: '<h2>Title</h2><p>Body</p>'
});
```

## West Map

The West Map is delivered by `west-map.css` and `dist/west-map.js`. Webflow keeps only the Mapbox dependencies and these pinned GitHub imports; map behavior and styling must not be copied into Page Custom Code.

Page head:

```html
<link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/west-map.css">
```

Before `</body>`:

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/dist/west-map.js"></script>
```

The global `site-interactions-base.css` and `dist/site-interactions.js` imports must use the same pinned commit.

Set the public Mapbox token once on the existing map element through Webflow custom attributes:

```html
<div id="wmMap" data-mapbox-token="pk..."></div>
```

## CMS Canvas

The CMS Canvas is delivered by `cms-canvas.css` and `dist/cms-canvas.js`. It is a
small React app bundled with GSAP. Webflow still owns the CMS and renders a hidden
Collection List; React reads that list, renders the visible canvas tiles, and opens
the existing `SiteInteractions` modal on click.

Load the shared modal assets first. Pin every jsDelivr URL to the same Git commit.

Page head:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/site-interactions-base.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/cms-canvas.css">
```

Before `</body>`:

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/dist/site-interactions.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/dist/cms-canvas.js"></script>
```

### Webflow structure

Add one canvas wrapper to the page. Its Collection List may be nested inside the
wrapper or placed elsewhere on the same page.

```html
<main
  data-cms-canvas
  data-canvas-column-width="25"
  data-canvas-item-margin-min="4"
  data-canvas-item-margin-max="6"
  data-canvas-item-offset-min="3"
  data-canvas-item-offset-max="6"
>
  <div data-cms-canvas-source>
    <div class="w-dyn-list">
      <div class="w-dyn-items">
        <article
          class="w-dyn-item"
          data-cms-canvas-item
          data-canvas-id="cms-slug"
        >
          <img data-canvas-thumbnail src="thumbnail.jpg" alt="Context title">
          <div data-canvas-title>Hover text shown on the canvas</div>

          <div data-canvas-modal-headline>Modal headline from CMS</div>
          <div data-canvas-modal-body class="rich-text">
            <p>CMS rich text content</p>
            <blockquote>
              <p>Indented quote text from CMS</p>
            </blockquote>
          </div>

          <div data-canvas-modal-work>
            <a data-works-link href="/werke/example"></a>
            <img data-works-thumbnail src="work-thumbnail.jpg" alt="Work title">
            <div data-works-title>Work title</div>
            <div data-works-year>[1992]</div>
          </div>

          <div data-canvas-modal-gallery-item>
            <img data-canvas-modal-gallery-image src="large-image-1.jpg" alt="Image description">
            <div data-canvas-modal-gallery-caption>Image caption 1</div>
          </div>
          <div data-canvas-modal-gallery-item>
            <img data-canvas-modal-gallery-image src="large-image-2.jpg" alt="Image description">
            <div data-canvas-modal-gallery-caption>Image caption 2</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</main>
```

For contexts, apply the attributes to the corresponding Collection Item and its CMS
field elements. Bind `data-canvas-id` to the CMS slug. `data-canvas-thumbnail` is
the preview image. `data-canvas-title` is the hover text and is also used as the
small grey top text in the modal. `data-canvas-modal-headline`,
`data-canvas-modal-body`, `data-canvas-modal-work`, and up to two
`data-canvas-modal-gallery-item` elements are optional. If the headline is
missing, the hover text is used. Older `data-canvas-modal-address`,
`data-canvas-modal-image`, and `data-canvas-modal-caption` fields remain
supported as a context-only fallback. Other modals keep the default image-before-text layout.

All root configuration attributes are optional:

```text
data-canvas-column-width        Column width in vw (default: 25)
data-canvas-mobile-column-width Column width in vw up to the mobile breakpoint (default: 50)
data-canvas-mobile-breakpoint   Mobile layout breakpoint in px (default: 767)
data-canvas-item-margin-min     Minimum item spacing in vw, used vertically and horizontally (default: 4)
data-canvas-item-margin-max     Maximum item spacing in vw, used vertically and horizontally (default: 6)
data-canvas-item-offset-min     Minimum per-item transform offset in % (default: 3)
data-canvas-item-offset-max     Maximum per-item transform offset in % (default: 6)
data-canvas-inertia             Enable release momentum unless set to false (default: true)
data-canvas-ease                Eased panning amount from 0.04 to 1 (default: 0.16)
data-canvas-friction            Momentum friction from 0.5 to 0.98 (default: 0.92)
data-canvas-velocity            Momentum strength from 0.1 to 2 (default: 0.85)
```

The background uses the existing `--fw_off_white` CSS variable. The canvas now uses
an infinite-feeling repeated column pattern. The number of columns is calculated
from the real CMS item count with `Math.round(Math.sqrt(count))`, so 15 items
become 4 columns. Columns are 25vw by default, so about four columns can be
visible horizontally. On screens up to 767px, columns are 50vw by default, so
about two columns are visible. Items are measured first and then assigned to the
currently shortest column, so the distribution balances actual rendered height
instead of only item count. If a column would still be much shorter than the
tallest column, the base pattern fills it with visual copies from other columns.
Those copies open the same modal as their original item. Items are stacked inside
their column, centered on the X axis, keep their natural aspect ratio, and get
individual item spacing plus a small per-item transform offset.
The item spacing is the central layout control: vertically it is added after each
item; horizontally it is applied inside the 25vw column by reducing the rendered
item width, so the same value controls the visual gap to neighboring
columns/items. Set min and max to the same value when you want a more exact grid,
for example `data-canvas-item-margin-min="5"` and
`data-canvas-item-margin-max="5"`. Columns themselves do not get a Y start
offset. The balanced base pattern is rendered around the viewport and wrapped
with GSAP while dragging, so it repeats horizontally and vertically without hard
bounds. On desktop hover and keyboard focus, the image zooms in slightly and the
CMS title slides down from behind the image. Touch devices keep the title hidden.
Users with `prefers-reduced-motion: reduce` get reduced animation and no momentum.

Deprecated legacy attributes such as `data-canvas-column-count`,
`data-canvas-items-per-column`, `data-canvas-grid-gap`, and
`data-canvas-grid-zoom` are ignored by the current layout.

## CMS Work Detail

The CMS Work Detail view is delivered by `cms-work-detail.css` and
`dist/cms-work-detail.js`. Webflow renders the current work fields and a hidden
Collection List of works. The script rebuilds the page into the detail layout and
renders up to four related works from the same category.

Page head:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/cms-work-detail.css">
```

Before `</body>`:

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@COMMIT/dist/cms-work-detail.js"></script>
```

### Webflow structure

```html
<main
  data-cms-work-detail
  data-work-detail-id="current-cms-slug"
  data-work-detail-categories="Möbel, Skulptur"
  data-work-detail-overview-href="/werke"
>
  <h1 data-work-detail-title>Liege (Vermeer) 1989</h1>
  <div data-work-detail-properties class="rich-text">Stahl<br>88 x 136 x 50 cm</div>
  <div data-work-detail-text class="rich-text">
    <p>CMS rich text content.</p>
  </div>
  <img data-work-detail-image src="large-image.jpg" alt="© Archiv Franz West, © Estate Franz West">

  <div data-cms-work-related-source>
    <article data-cms-works-item data-works-id="cms-slug" data-works-categories="Möbel, Skulptur">
      <a data-works-link href="/werke/example"></a>
      <img data-works-thumbnail src="thumbnail.jpg" alt="Project title">
      <div data-works-title>Project title</div>
      <div data-works-year>[1991]</div>
    </article>
  </div>
</main>
```

The related list may also use the existing overview attributes
`data-cms-works-source`, `data-cms-works-item`, `data-works-thumbnail`,
`data-works-title`, `data-works-year`, `data-works-link`, and
`data-works-categories`. Bind `data-work-detail-id` and each related
`data-works-id` to the CMS slug so the current work can be excluded.
If the source is fed by a Sheet calendar, the whole rendered entry can link to
that URL via `data-sheet-calendar-href` on the item or a hidden
`data-sheet-calendar-link` anchor inside the item. The `calender` spelling is
accepted too, as is the typo `claender`.
`data-work-detail-properties` and `data-work-detail-text` may be Webflow Rich Text
elements. Bind the new Single Image field directly to an image element with
`data-work-detail-image`; gallery wrappers and old Multi-image elements are not
read. Overview and related thumbnails follow the same rule: bind the Single Image
field directly to an `<img data-works-thumbnail>`. Remove old separated
Multi-image items from the active layouts so they do not remain inside rendered
work items. If `data-work-detail-caption` is omitted or empty, the image alt text
is used as the caption.

## Lightbox API

### Global class trigger

Add `js-lightbox` to any image or wrapper that should open in the shared lightbox.
For copyright or credit text, bind the CMS value to `data-lightbox-caption`;
keep the image `alt` text as the accessible image description.

```html
<img
  class="js-lightbox"
  src="large-image.jpg"
  alt="Artwork description"
  data-lightbox-caption="Copyright / image credit"
>
```

Wrappers are supported too:

```html
<div class="js-lightbox" data-lightbox-caption="Copyright / image credit">
  <img src="large-image.jpg" alt="Artwork description">
</div>
```

The icon is inserted automatically. If the trigger is an `<img>`, the script wraps
it in a generated `.site-lightbox-trigger` element so the icon can be positioned.

### Standalone image trigger

```html
<a
  href="large-image.jpg"
  data-lightbox-src="large-image.jpg"
  data-lightbox-caption="Caption from CMS"
  data-lightbox-group="project-gallery"
>
  <img src="thumb.jpg" alt="Alt text from CMS">
</a>
```

### Image trigger inside a modal

```html
<a
  href="large-image.jpg"
  data-lightbox-src="large-image.jpg"
  data-lightbox-caption="Caption from CMS"
  data-lightbox-group="modal-example-modal"
>
  <img src="thumb.jpg" alt="Alt text from CMS">
</a>
```

Grouped triggers with the same `data-lightbox-group` can be navigated with previous/next controls and arrow keys.

### Hover-Zoom

Jedes Bild in einem Lightbox-Trigger faehrt beim Hover auf 5% Zoom, in 0,685 s mit
easeOutCubic. Der Wrapper wird beschnitten, das Bild waechst also nach innen und das
Layout bleibt unveraendert. Die Staerke haengt an `--fw-lightbox-zoom`:

```css
.editionen_img { --fw-lightbox-zoom: 1.1; }   /* oder global auf :root */
```

Der Effekt laeuft nur auf Geraeten mit echtem Zeiger (`hover: hover`), sonst bliebe er
nach einem Tap kleben, und entfaellt bei `prefers-reduced-motion: reduce`. Das
Lupen-Icon zoomt nicht mit; es behaelt seinen eigenen Hover-Effekt.

## Page transitions

The global `site-interactions.js` bundle adds a GSAP-powered page transition for
normal same-origin page links. The overlay moves in one direction: from above the
viewport into place, then after the new page loads it continues downward to reveal
the new page.

The script creates the overlay automatically. To reduce the chance of a visible
flash between Webflow page loads, you may also place this element once in the
global Webflow footer before the script include:

```html
<div class="page-transition-overlay" data-page-transition-overlay aria-hidden="true"></div>
```

Style color through Webflow or CSS. The base stylesheet uses:

```css
background: var(--FW_Rose, var(--FW_Rosa, var(--fw_rosa, #ffc0cb)));
```

The transition ignores external links, `mailto:`, `tel:`, hash-only links,
downloads, non-`_self` targets, lightbox triggers, modal triggers, back buttons,
and modifier-clicks. To opt out a specific internal link:

```html
<a href="/example" data-transition="false">No transition</a>
```

## Work flip transition

Werk-Uebersicht und Werk-Detailseite teilen sich ein Bild: beim Klick auf eine Karte
blendet die Uebersicht ihre Inhalte aus, das Bild bleibt stehen und waechst auf der
Detailseite per GSAP Flip an seine neue Position, danach faden Titel, Masse und Text ein.
Der Rueckweg laeuft spiegelverkehrt und gilt auch fuer den Browser-Zurueck-Button.

Weil dazwischen ein echter Seitenwechsel liegt, wandern Geometrie und Bildquelle ueber
`sessionStorage` (`site-work-flip`), und ein `position: fixed` Klon des Bildes ueberlebt
den Wechsel optisch. Fuer alle uebrigen Links bleibt das rosa Overlay zustaendig.

### Inline snippets

`dist/site-interactions.js` laeuft als `type="module"` und damit deferred - zu spaet fuer
den ersten Paint der Zielseite. Beide Bloecke aus `snippets/work-flip-boot.html` gehoeren
darum in "Site settings -> Custom code":

- **Inside `<head>` tag:** setzt `html.is-work-flip-pending`, solange eine Uebergabe offen ist.
- **Before `</body>` tag, vor den Modul-Includes:** baut den Klon an der alten Bildposition auf.

Ohne die Snippets funktioniert der Uebergang weiterhin, die Zielseite blitzt aber kurz auf,
bevor die Animation startet.

### Attribute

Uebersicht und Detailseite werden vom Skript gerendert, die Attribute entstehen also von
selbst:

```text
a.cms-works__item[data-work-flip][data-work-flip-id="cms-slug"]   Karte in der Uebersicht
img[data-work-flip-target][data-work-flip-id="cms-slug"]          Bild auf der Detailseite
a.cms-work-detail__overview-link[data-work-flip-back]             Rueckweg zur Uebersicht
```

Damit Hin- und Rueckweg zusammenfinden, muessen `data-works-id` in der Collection List und
`data-work-detail-id` auf der Detailseite an denselben CMS-Slug gebunden sein. Fehlt der
Treffer, laedt die Seite ohne Animation.

Die Uebersicht merkt sich Filter, Sortierung, Anzahl geladener Werke und Scrollposition
unter `site-works-view`. Wiederhergestellt wird der Stand nur, wenn der Nutzer von einer
Werkseite zurueckkommt; ueber das Menue aufgerufen startet die Uebersicht frisch.

Bei `prefers-reduced-motion: reduce` entfaellt der Uebergang komplett. Findet das Skript
das Zielbild nicht, blendet ein Wachhund die Seite nach 2,6 s regulaer ein; friert der
Browser die Animation ein (Hintergrund-Tab), wird der Uebergang per Timer ohne Animation
abgeschlossen. Die Navigation selbst wird nie blockiert.

## Line reveal

Zeilenweiser Text-Reveal: GSAP SplitText zerlegt den Text, legt pro Zeile eine Maske
darum, und die Zeilen fahren beim Scrollen aus dieser Maske hoch. Der Code liegt in
`src/modules/line-reveal.ts` und laeuft ueber `site-interactions.js` mit - in Webflow ist
also **kein eigener Script-Tag** noetig.

### Testbetrieb

Der Selektor ist aktuell `[data-reveal], h2`, greift also zusaetzlich auf **alle H2**.
Fuer den Dauerbetrieb in `line-reveal.ts` auf `'[data-reveal]'` reduzieren und die
gewuenschten Elemente in Webflow per Attribut markieren.

### Attribute

| Attribut | Werte | Wirkung |
| --- | --- | --- |
| `data-reveal` | *(leer)* / `lines` / `words` / `chars` | Was gestaffelt faehrt. Ohne Wert: `lines`. |
| `data-reveal` | `off` | Nimmt das Element aus, auch wenn es ein H2 ist. |
| `data-reveal-delay` | Sekunden | Verzoegerung vor dem Start. |
| `data-reveal-stagger` | Sekunden | Ueberschreibt den Versatz zwischen den Teilen. |
| `data-reveal-trigger` | `false` | Kein ScrollTrigger, laeuft sofort beim Laden. |

Modal und Lightbox sind fest ausgenommen: die bauen ihre Ueberschriften selbst und
tauschen deren Inhalt bei jedem Oeffnen aus, ein Split wuerde dabei zerreissen.

### Timing

Dauer und Versatz kommen aus einer Skala auf Basis des goldenen Schnitts
(`step(n) = 0.1 * phi^(n-1)`): Dauer 1,109 s, Versatz 0,1 s zwischen Zeilen bzw.
Woertern, 0,062 s zwischen Zeichen. Gesplittet wird erst nach `document.fonts.ready`,
sonst bricht SplitText die Zeilen anhand der Fallback-Schrift um.

### Zwei Fallstricke, die hier bereits geloest sind

`set()` + `to()` statt `from()`: bei `from()` entscheidet GSAP selbst, wann der
Startzustand gerendert wird, und in der Kombination aus `autoSplit` und ScrollTrigger
faellt er weg - der Text steht dann sichtbar da und springt beim Erreichen des Triggers
erst nach unten. Auch `immediateRender: true` reicht dagegen nicht.

Enge Zeilenhoehen (bis `line-height: 1.1`) bekommen `overflow-clip-margin` inline in
Pixeln, damit die Maske Ober- und Unterlaengen nicht abschneidet. Negative Margins
waeren hier falsch: die kollabieren zwischen benachbarten Masken, und die Ueberschrift
wandert dadurch in der Hoehe. Der Wert muss in px kommen, `em` nimmt die Property nicht.
Preis der Loesung: im geweiteten Bereich kann waehrend der Bewegung ein Rest der
Nachbarzeile durchscheinen - bei `line-height` unter 1 ueberlappen sich die Zeilenboxen
physisch, beides gleichzeitig geht nicht.

Bei `prefers-reduced-motion: reduce` wird gar nicht gesplittet.

## CSS hooks

The JavaScript adds and removes these state hooks:

```text
html.is-modal-open
body.is-modal-open
html.is-lightbox-open
body.is-lightbox-open
[data-modal].is-active
[data-modal].is-visible
[data-site-lightbox].is-active
[data-site-lightbox].is-visible
[data-reveal-pending]
[data-reveal-ready]
.fw-reveal-tight
```

Variablen, an denen sich drehen laesst:

```text
--fw-lightbox-zoom   Zoomstaerke der Lightbox-Bilder beim Hover (Default 1.05)
```

Der Zeilen-Reveal erzeugt ausserdem diese Struktur pro Textelement:

```text
.fw-ln-mask   Maske pro Zeile, schneidet ab
.fw-ln        die Zeile
.fw-wd        Wort
.fw-ch        Zeichen
```

The generated lightbox uses these structural classes:

```text
.site-lightbox
.site-lightbox__close
.site-lightbox__previous
.site-lightbox__next
.site-lightbox__figure
.site-lightbox__image
.site-lightbox__caption
```

The file `site-interactions-base.css` contains minimal structural CSS. Prefer rebuilding the final look in Webflow.

## Keyboard and focus behavior

- Escape closes the active modal or lightbox.
- ArrowRight / ArrowLeft navigate grouped lightbox images.
- Focus is moved into the opened modal/lightbox.
- Focus is restored to the original trigger on close when possible.
- Tab focus is contained inside the active modal/lightbox.
- Body scroll is locked while a modal or lightbox is open.
- A lightbox opened above a modal does not close the underlying modal when the lightbox closes.

## Custom events

The bundle dispatches bubbling custom events:

```text
site:modal-open
site:modal-close
site:lightbox-open
site:lightbox-close
```

Example:

```js
document.addEventListener('site:lightbox-open', (event) => {
  console.log(event.detail);
});
```

## Optional debug API

The bundle exposes a small debug object:

```js
window.SiteInteractions.openModal('example-modal');
window.SiteInteractions.closeModal();
window.SiteInteractions.openLightbox(document.querySelector('[data-lightbox-src]'));
window.SiteInteractions.closeLightbox();
```

## Known limitations and handoff notes

- The bundle assumes modern browsers that support ES modules.
- The lightbox DOM is generated automatically. Style it through the provided class hooks or override by supplying compatible markup with `data-site-lightbox`.
- Captions are inserted with `textContent`, so CMS captions are treated as plain text, not HTML.
- Modal IDs and lightbox group names should be unique and stable. Use CMS slugs where possible.
- If a collection list duplicates the same group name across multiple hidden modals, grouped lightbox navigation may include all matching triggers on the page.
- Webflow builders should keep buttons as actual `<button>` elements where possible, especially for close controls.
- The primary integration surface is `data-*` attributes. Avoid binding behavior to class names.
- Der Werk-Flip braucht die beiden Inline-Snippets aus `snippets/work-flip-boot.html` im Site
  Custom Code. Ohne sie laeuft die Seite normal, der Uebergang blitzt aber beim Seitenwechsel.
- CSS hooks des Werk-Flips: `html.is-work-flip-pending`, `.work-flip-ghost`,
  `[data-work-flip-ghost]`.
