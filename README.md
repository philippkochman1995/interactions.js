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
  data-canvas-repeat="auto"
  data-canvas-column-count="8"
  data-canvas-items-per-column="8"
  data-canvas-grid-gap="25"
  data-canvas-grid-zoom="1.45"
>
  <div data-cms-canvas-source>
    <div class="w-dyn-list">
      <div class="w-dyn-items">
        <article
          class="w-dyn-item"
          data-cms-canvas-item
          data-canvas-id="cms-slug"
        >
          <img data-canvas-thumbnail src="thumbnail.jpg" alt="Project title">
          <div data-canvas-title>Project title</div>

          <div data-canvas-modal-address>Project title | Vienna</div>
          <img data-canvas-modal-image src="large-image.jpg" alt="Project title">
          <div data-canvas-modal-caption>Image credit</div>
          <div data-canvas-modal-body class="rich-text">
            <p>CMS rich text content</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</main>
```

In Webflow, apply the attributes to the corresponding Collection Item and its CMS
field elements. Bind `data-canvas-id` to the CMS slug. The modal address, large
image, caption, and body are optional. If the large image is missing, the thumbnail
is used.

All root configuration attributes are optional:

```text
data-canvas-repeat              "auto" or a number from 1 to 12 (default: auto)
data-canvas-min-visible-items   Minimum visual tiles when repeat is auto (default: 24; at least columns × rows)
data-canvas-column-count        Desktop columns in the base pattern (default: 8, mobile max: 4)
data-canvas-items-per-column    Items stacked inside each column in the base pattern (default: 8)
data-canvas-grid-gap            Shared gap in pixels between columns and stacked items (default: 25)
data-canvas-grid-zoom           Pattern scale while keeping column count (default: 1.45)
data-canvas-inertia             Enable release momentum unless set to false (default: true)
data-canvas-ease                Eased panning amount from 0.04 to 1 (default: 0.16)
data-canvas-friction            Momentum friction from 0.5 to 0.98 (default: 0.92)
data-canvas-velocity            Momentum strength from 0.1 to 2 (default: 0.85)
```

The background uses the existing `--fw_off_white` CSS variable. The canvas now uses
an infinite-feeling repeated column-stack pattern: by default 8 columns with 8
items stacked inside each column. The same pixel gap is used between columns and
between items inside a column. Each tile is horizontally centered in its column,
keeps its natural aspect ratio, and each column gets a small Y start offset so the
composition does not look completely static. `data-canvas-grid-zoom` makes the
whole pattern larger while keeping 8 columns, so fewer elements are visible at
once. The base pattern is rendered around the viewport and wrapped with GSAP while
dragging, so every column repeats on the Y axis and every row band repeats on the
X axis without hard bounds. Users with `prefers-reduced-motion: reduce` get reduced
animation and no momentum.

## Lightbox API

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
