# Webflow Custom Code migration

This directory is the source for CSS and JavaScript formerly embedded in Webflow's site and page Custom Code fields. Webflow contains only stylesheet and script references to a pinned Git commit, plus the third-party Lenis, Mapbox and Video.js imports that those features require. The `Biografie Bildnachweise` template retains its robots meta tag.

| Scope | Repository files |
| --- | --- |
| Site | `site.css`, `site-footer.js`; `site-interactions-base.css`, `mobile-typography.css`, `cms-canvas.css`, `dist/site-head.js`, `dist/site-body.js`, `dist/site-interactions.js`, `dist/cms-canvas.js` |
| Home | `home.css`, `home-footer.js`, `dist/home-west-map.js` |
| Biografie | `biography.css`, `biography-footer.js`, `dist/biography-intro.js` |
| Editionen | `editions.css`, `editions-footer.js` |
| Kontakt | `contact-footer.js` |
| News | `news.css` |
| News template | `news-detail.css`, `news-detail-head.js`, `news-detail-footer.js` |
| Werk Überblick | `works-overview.css`, `works-overview-head.js`, `works-overview-footer.js`, `cms-works.css`, `cms-work-detail.css`, `work-overlay.css`, `dist/cms-works.js`, `dist/accordion.js` |
| Werke template | `cms-work-detail.css`, `dist/cms-work-detail.js` |
| Kontexte | `contexts.css`, `contexts-footer.js` |
| West Map | `west-map-page.css`, `west-map.css`, `dist/west-map.js` |

The signature rotation is maintained in `src/modules/logo-variants.ts`; the Home map runs from `src/home-west-map.ts`. Changes to TypeScript require `npm run build` and a new pinned commit in Webflow. Static files in this directory are loaded directly from the commit and need no build step. The remaining Webflow HTML/CMS structure and custom attributes stay in Webflow.
