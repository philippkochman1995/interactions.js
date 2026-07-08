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

### Modal

```html
<div data-modal="example-modal" hidden>
  <div data-modal-panel>
    <button type="button" data-modal-close>Close</button>

    <h2>Modal title from CMS</h2>

    <div class="rich-text">
      CMS rich text content
    </div>
  </div>
</div>
```

Use a stable CMS-generated slug/id for `data-modal` and `data-modal-open`. Do not use Webflow-generated class names as JavaScript hooks.

Modal content can come from any CMS collection as long as every rendered registry outputs the same technical structure. The JavaScript does not need to know whether a modal came from a general `Modals` collection, a `Contexts` collection, or a `Map Markers` collection.

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

Render only the hidden modal registry needed on the current page. For example, standard pages can render a hidden list from `Modals`, context pages can render a hidden list from `Contexts`, and map pages can render a hidden list from `Map Markers`. Each item should still output:

```html
<div data-modal="context-example-slug" hidden>
  <div data-modal-panel>
    <button type="button" data-modal-close>Close</button>
    ...
  </div>
</div>
```

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
