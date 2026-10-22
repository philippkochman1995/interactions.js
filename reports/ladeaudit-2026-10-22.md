# Lade- und Bildaudit – Franz West

**Stand:** 22. Oktober 2026 · **Veröffentlichte Webflow-Adresse:** [website-4bff6e.webflow.io](https://website-4bff6e.webflow.io/)

## Ergebnis

13 feste Seiten und 201 CMS-Adressen wurden einzeln abgerufen. 208 antworteten mit HTTP 200. Die sechs Adressen der Sammlung *Modal Items* antworteten mit HTTP 404; die Daten werden offenbar in eingebetteten Modalen verwendet. Die HTML-Prüfung erfasste 268 verschiedene Bildoriginale und 719 responsive Bildvarianten. Zusätzlich wurden 160 nur in CMS-Bildfeldern referenzierte Original-URLs geprüft. Für 1.145 der 1.147 Bild-URLs lieferte HEAD eine Dateigröße. Die vollständigen Zeilen stehen in [seiten-2026-10-22.csv](seiten-2026-10-22.csv) und [bilder-2026-10-22.csv](bilder-2026-10-22.csv).

Die größten tatsächlich gemessenen Desktop-Transfers innerhalb des Beobachtungsfensters sind **Biografie 11,37 MiB**, **West Map 8,40 MiB**, **Werküberblick 8,06 MiB**, **Kontexte 6,66 MiB** und **News 6,50 MiB**. Bilder tragen jeweils den Großteil. Mobil wurden **West Map 10,19 MiB**, **Biografie 9,66 MiB**, **Werküberblick 9,45 MiB** und die **Startseite 7,65 MiB** übertragen.

## Feste Seiten

MiB = 1.048.576 Byte. Die Browserwerte sind tatsächlich empfangene Daten ohne Cache bis etwa 6,5 Sekunden nach DOMContentLoaded; spätere Downloads kommen hinzu. Ein Strich bedeutet, dass diese Seite im mobilen Browserlauf nicht zusätzlich gemessen wurde.

| Seite | Desktop gesamt MiB | Bilder MiB | Mobil gesamt MiB | Bilder MiB | HTML KiB, entpackt | Bildoriginale im HTML |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [Biografie](https://website-4bff6e.webflow.io/biografie) | 11.37 | 10.70 | 9.66 | 9.00 | 177.94 | 82 |
| [West Map](https://website-4bff6e.webflow.io/west-map) | 8.40 | 7.44 | 10.19 | 9.40 | 108.43 | 51 |
| [Werk Überblick](https://website-4bff6e.webflow.io/werk-ueberblick) | 8.06 | 6.06 | 9.45 | 7.46 | 204.35 | 65 |
| [Kontexte](https://website-4bff6e.webflow.io/kontexte) | 6.66 | 6.21 | — | — | 74.40 | 40 |
| [News](https://website-4bff6e.webflow.io/news) | 6.50 | 6.06 | 1.13 | 0.69 | 42.66 | 7 |
| [Home](https://website-4bff6e.webflow.io/) | 5.08 | 2.69 | 7.65 | 5.72 | 116.13 | 58 |
| [Atelier](https://website-4bff6e.webflow.io/atelier) | 3.22 | 2.77 | 3.13 | 2.69 | 34.63 | 6 |
| [Lemuren Test](https://website-4bff6e.webflow.io/lemuren-test) | 1.68 | 0.08 | — | — | 4.36 | 0 |
| [Editionen](https://website-4bff6e.webflow.io/editionen) | 0.86 | 0.47 | — | — | 45.29 | 11 |
| [Kontakt](https://website-4bff6e.webflow.io/kontakt) | 0.79 | 0.35 | — | — | 25.46 | 1 |
| [Datenschutz](https://website-4bff6e.webflow.io/datenschutz) | 0.54 | 0.10 | — | — | 26.75 | 0 |
| [Impressum](https://website-4bff6e.webflow.io/impressum) | 0.54 | 0.10 | — | — | 25.55 | 0 |
| [Style Guide](https://website-4bff6e.webflow.io/style-guide) | 0.50 | 0.08 | — | — | 5.29 | 0 |

### CMS-Seiten

Alle Einträge wurden im HTML und anhand ihrer CMS-Bildfelder geprüft; die Browsertransferwerte in dieser Tabelle stammen jeweils von einem Eintrag als Vertreter der Vorlage. Die größte CMS-Originaldatei ist kein gemessener Transfer und kann im Browser durch eine kleinere Variante ersetzt werden. Werk- und News-Inhalte können je nach Eintrag abweichen.

| Vorlage | Einträge | HTTP 200 | Browserprobe gesamt MiB | Bilder MiB | Größtes CMS-Original MiB |
| --- | ---: | ---: | ---: | ---: | ---: |
| News-Details | 6 | 6 | 1.11 | 0.67 | 3.75 |
| Werk-Details | 58 | 58 | 3.53 | 3.15 | 3.72 |
| Kontext-Details | 17 | 17 | 0.45 | 0.08 | 3.69 |
| Kartenorte | 43 | 43 | 0.45 | 0.08 | 3.80 |
| Biografie-Bildnachweise | 71 | 71 | 0.45 | 0.08 | 1.08 |
| Modal Items | 6 | 0 | — | — | 2.89 |

## Bildladezeiten und konkrete Ursachen

1. **News, Desktop:** Ein News-Bild von 6.001 × 4.450 Pixeln wird in einer etwa **324 Pixel breiten Karte** angezeigt. Das HTML gibt jedoch sizes="(max-width: 991px) 100vw, 6001px" vor. Chrome wählt deshalb die **2,63-MiB-Originaldatei**; die vorhandene 800-Pixel-Variante hat **0,20 MiB**. Ein zweites Bild lädt **1,79 MiB** statt der vorhandenen 800-Pixel-Variante mit **0,15 MiB**. Die beiden Originale sind erst nach ungefähr **2,46 s** beziehungsweise **2,05 s** vollständig. Auf Mobil mit passendem sizes beträgt der Bildtransfer der ganzen News-Seite nur **0,69 MiB** statt **6,06 MiB** am Desktop. **Priorität 1:** sizes der News-Karten an die tatsächliche Kartenbreite anpassen.

2. **West Map:** Die kreisförmigen Kartenmarker messen etwa **3,5 rem** (ungefähr 56 px). [Der Map-Code](../src/west-map.ts) setzt für ihren CSS-Hintergrund die **volle Original-URL** ein. Ein Marker lädt dadurch mobil **3,80 MiB** statt der vorhandenen 500-Pixel-Version mit **0,02 MiB**. Ein weiterer lädt am Desktop **1,82 MiB** statt **0,03 MiB**. Die Kartenbilder laden im Messlauf bis **6,14 s** am Desktop beziehungsweise **6,16 s** mobil weiter. **Priorität 1:** Kleine Webflow-Variante für Marker verwenden; Original für die geöffnete Detailansicht behalten.

3. **Verdeckte Modalbilder:** Auf Startseite, Werküberblick und Biografie sind zwei große fwm-modal__image-Dateien von **2,12 MiB** und **1,22 MiB** in geschlossenen Modalen als sofortige Bildquellen eingebettet. Die Browserproben zeigen Downloads der Originale ohne Öffnen der Modale. Diese Bilder haben dort kein srcset und keine verzögerte Quelle. **Priorität 1:** Modalbild erst beim Öffnen einsetzen; für die Vorschau eine kleinere Variante verwenden. Der Fullsize-Link kann für die Lightbox erhalten bleiben.

4. **Biografie und Kontexte:** Die Biografie überträgt im Messfenster **10,70 MiB Bilder** am Desktop und lädt noch bei **7,55 s** Bilddaten. Das Bild fw-biografie-14.webp wiegt **1,08 MiB** und stand beim Test rund **5.299 px** unterhalb des oberen Viewports. [Der aktuelle Preloader](../src/modules/site-preloader-assets.ts) setzt viele eingesammelte Bilder auf loading="eager" und wärmt weitere Bilder nach dem Intro. Dadurch gelangen auch weit unten liegende Bilder früh in die Lade- und Dekodierwarteschlange. **Priorität 2:** Nur Bilder im ersten sichtbaren Abschnitt sofort laden, spätere Bilder erst nahe am Viewport.

5. **Spline-Seiten:** Die Startseite lädt am Desktop etwa **1,16 MiB Spline-Dateien** und **0,95 MiB Skripte**; der Werküberblick etwa **0,80 MiB Spline-Dateien** und **0,86 MiB Skripte**. Diese Bytezahlen erfassen den GPU- und Renderaufwand nicht. Die Hintergrundpause für Spline ist deshalb weiterhin wichtig; für die Seitengröße sind auf beiden Seiten zusätzlich die Bilder maßgeblich.

## Messmethode und Grenzen

- **Alle 214 Adressen:** HTTP-Status, entpacktes HTML, Bildreferenzen und CMS-Bildfelder; Dateigrößen per HEAD. Die Summe der im HTML oder CMS referenzierten Originale ist **kein tatsächlicher Seiten-Transfer**: responsive Varianten und Lazy Loading ändern die Anfragen.
- **Browserproben:** Google Chrome 155, isoliertes Profil, Cache aus, Desktop 1440 × 900 px bei DPR 1; Mobil 390 × 844 px bei DPR 2. 13 feste und 5 CMS-Seiten wurden am Desktop, 8 bildlastige Seiten zusätzlich mobil geladen. Netzwerk wurde nicht künstlich gedrosselt. Proben wurden etwa 6,5 s nach DOMContentLoaded beendet; spätere Bilder fehlen im Transferwert. Browserzeitpunkte sind Momentaufnahmen dieser Verbindung, keine Garantie für andere Geräte oder Netze.
- **Ladegefühl:** Die Seite zeigt ein Intro-Overlay. Frühe Paint- und LCP-Werte können dieses Overlay erfassen und wurden deshalb nicht als Nutzer-Ladezeit gewertet. Angegebene Bildzeiten sind der Abschluss der jeweiligen Netzwerkantwort ab Navigation.
- **Modal Items:** Sechs CMS-Einträge liefern unter /modal-items/… HTTP 404. Falls diese als öffentliche Einzeladressen gedacht sind, ist das unabhängig von der Bildoptimierung zu prüfen.
