//#region src/cms-works-filter.ts
const FILTER_ICON = `
  <svg width="14.45" height="10.2" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z" fill="currentColor"/>
    <path d="M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z" fill="currentColor"/>
    <path d="M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z" fill="currentColor"/>
  </svg>
`;
const ARROW_ICON = `
  <svg width="8.5" height="9.35" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M6 9L6 0L4 -8.74228e-08L4 9L6 9Z" fill="currentColor"/>
    <path d="M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z" fill="currentColor"/>
  </svg>
`;
const SORT_LABELS = {
	random: "zufällig",
	year: "Entstehungsjahr"
};
const SORT_MODES = ["year", "random"];
function getCategoryCounts(items) {
	const counts = /* @__PURE__ */ new Map();
	items.forEach((item) => {
		item.categories.forEach((category) => {
			counts.set(category, (counts.get(category) ?? 0) + 1);
		});
	});
	return Array.from(counts, ([name, count]) => ({
		name,
		count
	})).sort((first, second) => first.name.localeCompare(second.name, "de", { sensitivity: "base" }));
}
function createIconMarkup(markup, className) {
	const icon = document.createElement("span");
	icon.className = className;
	icon.innerHTML = markup;
	return icon;
}
function createWorksFilterInterface(items, state, onApply, options = {}) {
	const section = document.createElement("section");
	const container = document.createElement("div");
	const topbar = document.createElement("div");
	const left = document.createElement("span");
	const filterText = document.createElement("span");
	const count = document.createElement("span");
	const right = document.createElement("span");
	const sortLabel = document.createElement("span");
	const panel = document.createElement("div");
	const panelInner = document.createElement("div");
	const categories = document.createElement("div");
	const sortControls = document.createElement("div");
	const mobileSortSection = document.createElement("div");
	const mobileSortHeading = document.createElement("div");
	const mobileSortLabel = document.createElement("span");
	const mobileSortControls = document.createElement("div");
	const applyLink = document.createElement("a");
	const categoryCounts = getCategoryCounts(items);
	const categoryButtons = /* @__PURE__ */ new Map();
	const sortButtons = /* @__PURE__ */ new Map();
	section.className = "cms-works-filter u-section";
	container.className = "cms-works-filter__container u-container";
	topbar.className = "cms-works-filter__bar";
	topbar.setAttribute("role", "button");
	topbar.setAttribute("tabindex", "0");
	topbar.setAttribute("aria-expanded", "false");
	left.className = "cms-works-filter__bar-left";
	filterText.className = "cms-works-filter__label";
	filterText.textContent = "FILTER";
	count.className = "cms-works-filter__count";
	left.append(createIconMarkup(FILTER_ICON, "cms-works-filter__filter-icon"), filterText, count);
	right.className = "cms-works-filter__bar-right";
	sortLabel.className = "cms-works-filter__sort-label";
	sortLabel.textContent = "SORTIERUNG";
	sortControls.className = "cms-works-filter__sort-controls";
	right.append(sortLabel, sortControls, createIconMarkup(ARROW_ICON, "cms-works-filter__arrow-icon"));
	topbar.append(left, right);
	panel.className = "cms-works-filter__panel u-section";
	panelInner.className = "cms-works-filter__panel-inner u-container";
	categories.className = "cms-works-filter__categories";
	mobileSortSection.className = "cms-works-filter__mobile-sort-section";
	mobileSortHeading.className = "cms-works-filter__mobile-sort-heading";
	mobileSortLabel.className = "cms-works-filter__sort-label";
	mobileSortLabel.textContent = "SORTIERUNG";
	mobileSortControls.className = "cms-works-filter__mobile-sort-controls";
	mobileSortHeading.append(createIconMarkup(ARROW_ICON, "cms-works-filter__arrow-icon"), mobileSortLabel);
	mobileSortSection.append(mobileSortHeading, mobileSortControls);
	categoryCounts.forEach((category) => {
		const button = document.createElement("button");
		const label = document.createElement("span");
		const buttonCount = document.createElement("span");
		button.className = "cms-works-filter__pill";
		button.type = "button";
		button.setAttribute("aria-pressed", "false");
		label.textContent = category.name;
		buttonCount.className = "cms-works-filter__pill-count";
		buttonCount.textContent = `[${category.count}]`;
		button.append(label, buttonCount);
		button.addEventListener("click", () => {
			if (state.pendingCategories.has(category.name)) state.pendingCategories.delete(category.name);
			else state.pendingCategories.add(category.name);
			sync();
		});
		categoryButtons.set(category.name, button);
		categories.append(button);
	});
	SORT_MODES.forEach((mode) => {
		const button = document.createElement("button");
		button.className = "cms-works-filter__sort-option";
		button.type = "button";
		button.textContent = SORT_LABELS[mode];
		button.setAttribute("aria-pressed", "false");
		button.addEventListener("click", (event) => {
			event.stopPropagation();
			if (!state.open) openFilter();
			state.pendingSortMode = mode;
			sync();
		});
		sortButtons.set(mode, button);
		sortControls.append(button);
		const mobileButton = document.createElement("button");
		mobileButton.className = "cms-works-filter__mobile-sort-option";
		mobileButton.type = "button";
		mobileButton.textContent = SORT_LABELS[mode];
		mobileButton.setAttribute("aria-pressed", "false");
		mobileButton.addEventListener("click", () => {
			state.pendingSortMode = mode;
			sync();
		});
		mobileSortControls.append(mobileButton);
	});
	applyLink.className = "cms-works-filter__apply";
	applyLink.href = "#";
	applyLink.textContent = "ANWENDEN";
	applyLink.addEventListener("click", (event) => {
		event.preventDefault();
		state.appliedCategories = new Set(state.pendingCategories);
		state.appliedSortMode = state.pendingSortMode;
		closeFilter(false);
		onApply();
	});
	panelInner.append(categories, mobileSortSection);
	panel.append(panelInner, applyLink);
	container.append(topbar);
	section.append(container, panel);
	function sync() {
		count.textContent = `[${state.appliedCategories.size}]`;
		section.classList.toggle("is-open", state.open);
		topbar.setAttribute("aria-expanded", state.open ? "true" : "false");
		categoryButtons.forEach((button, category) => {
			const active = state.pendingCategories.has(category);
			const buttonCount = button.querySelector(".cms-works-filter__pill-count");
			button.classList.toggle("is-active", active);
			button.setAttribute("aria-pressed", active ? "true" : "false");
			button.tabIndex = state.open ? 0 : -1;
			if (!buttonCount) return;
			if (active) {
				buttonCount.textContent = "x";
				return;
			}
			buttonCount.textContent = `[${categoryCounts.find((entry) => entry.name === category)?.count ?? 0}]`;
		});
		sortButtons.forEach((button, mode) => {
			const active = (state.open ? state.pendingSortMode : state.appliedSortMode) === mode;
			const visible = state.open || active;
			button.classList.toggle("is-active", active);
			button.classList.toggle("is-collapsed", !visible);
			button.setAttribute("aria-pressed", active ? "true" : "false");
			button.setAttribute("tabindex", visible ? "0" : "-1");
		});
		mobileSortControls.querySelectorAll("button").forEach((button, index) => {
			const active = SORT_MODES[index] === state.pendingSortMode;
			button.classList.toggle("is-active", active);
			button.setAttribute("aria-pressed", active ? "true" : "false");
			button.tabIndex = state.open || active ? 0 : -1;
		});
		applyLink.tabIndex = state.open ? 0 : -1;
		panel.style.setProperty("--cms-works-filter-categories-height", `${categories.scrollHeight}px`);
		panel.style.setProperty("--cms-works-filter-sort-height", `${mobileSortControls.scrollHeight}px`);
		panel.style.setProperty("--cms-works-filter-panel-height", `${panel.scrollHeight}px`);
	}
	function openFilter() {
		if (state.open) return;
		state.pendingCategories = new Set(state.appliedCategories);
		state.pendingSortMode = state.appliedSortMode;
		state.open = true;
		sync();
		options.onOpenChange?.(true);
	}
	function closeFilter(discardPending) {
		if (!state.open) return;
		if (discardPending) {
			state.pendingCategories = new Set(state.appliedCategories);
			state.pendingSortMode = state.appliedSortMode;
		}
		state.open = false;
		sync();
		options.onOpenChange?.(false);
	}
	topbar.addEventListener("click", (event) => {
		if (sortControls.contains(event.target)) return;
		if (state.open) closeFilter(true);
		else openFilter();
	});
	topbar.addEventListener("keydown", (event) => {
		if (event.target !== topbar || event.key !== "Enter" && event.key !== " ") return;
		event.preventDefault();
		if (state.open) closeFilter(true);
		else openFilter();
	});
	mobileSortSection.addEventListener("click", () => {
		if (!state.open) openFilter();
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && state.open) closeFilter(true);
	});
	document.addEventListener("pointerdown", (event) => {
		if (!state.open || section.contains(event.target)) return;
		closeFilter(true);
	});
	window.addEventListener("resize", () => {
		panel.style.setProperty("--cms-works-filter-panel-height", `${panel.scrollHeight}px`);
	});
	sync();
	return {
		element: section,
		sync,
		close: closeFilter
	};
}
//#endregion
//#region src/modules/work-flip-state.ts
const WORK_FLIP_STORAGE_KEY = "site-work-flip";
const WORKS_VIEW_STORAGE_KEY = "site-works-view";
function readJson(key) {
	try {
		const raw = window.sessionStorage.getItem(key);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function writeJson(key, value) {
	try {
		window.sessionStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function removeKey(key) {
	try {
		window.sessionStorage.removeItem(key);
	} catch {}
}
function isRect(value) {
	if (!value || typeof value !== "object") return false;
	const rect = value;
	return typeof rect.top === "number" && typeof rect.left === "number" && typeof rect.width === "number" && typeof rect.height === "number" && rect.width > 0 && rect.height > 0;
}
function readWorkFlipPayload() {
	const payload = readJson(WORK_FLIP_STORAGE_KEY);
	if (!payload || !isRect(payload.rect) || typeof payload.src !== "string" || !payload.src) return null;
	if (payload.direction !== "forward" && payload.direction !== "back") return null;
	if (typeof payload.ts !== "number" || Date.now() - payload.ts > 8e3) {
		removeKey(WORK_FLIP_STORAGE_KEY);
		return null;
	}
	return payload;
}
function readWorksViewState() {
	const state = readJson(WORKS_VIEW_STORAGE_KEY);
	if (!state || !Array.isArray(state.categories) || typeof state.visibleCount !== "number") return null;
	if (state.sort !== "year" && state.sort !== "random") state.sort = "year";
	return state;
}
function writeWorksViewState(state) {
	writeJson(WORKS_VIEW_STORAGE_KEY, state);
}
function isBackForwardNavigation() {
	try {
		return window.performance.getEntriesByType("navigation")[0]?.type === "back_forward";
	} catch {
		return false;
	}
}
//#endregion
//#region src/cms-works.ts
const ROOT_SELECTOR = "[data-cms-works]";
const SOURCE_SELECTOR = "[data-cms-works-source]";
const ITEM_SELECTOR = "[data-cms-works-item], [data-cms-canvas-item]";
const THUMBNAIL_SELECTOR = "[data-works-thumbnail], [data-canvas-thumbnail]";
const TITLE_SELECTOR = "[data-works-title], [data-canvas-title]";
const YEAR_SELECTOR = "[data-works-year], [data-canvas-year]";
const CATEGORY_SELECTOR = "[data-works-category], [data-works-categories]";
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const LINK_SELECTOR = [
	"[data-works-link]",
	"[data-sheet-calendar-link]",
	"[data-sheet-calender-link]",
	"[data-sheet-claender-link]",
	"[data-calendar-link]",
	"[data-calender-link]",
	"[data-claender-link]",
	"[data-sheet-link]",
	"a[href]"
].join(", ");
const INITIAL_VISIBLE_COUNT = 16;
const LOAD_MORE_INCREMENT = 16;
const LOAD_MORE_TEMPLATE_SELECTOR = "[data-cms-works-load-more-template]";
const WORKS_READY_EVENT = "site:works-ready";
function ready(callback) {
	if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", callback, { once: true });
	else callback();
}
function textFrom(element, selector) {
	return element.querySelector(selector)?.textContent?.trim() ?? "";
}
function directImageChildFrom(element) {
	return Array.from(element.children).find((child) => child instanceof HTMLImageElement) ?? null;
}
function imageFrom(element) {
	const target = element.querySelector(THUMBNAIL_SELECTOR);
	if (target) return target instanceof HTMLImageElement ? target : null;
	return directImageChildFrom(element);
}
function hashString(value) {
	let hash = 2166136261;
	for (let index = 0; index < value.length; index += 1) {
		hash ^= value.charCodeAt(index);
		hash = Math.imul(hash, 16777619);
	}
	return hash >>> 0;
}
function createRandom(seed) {
	let state = seed >>> 0;
	return () => {
		state += 1831565813;
		let value = state;
		value = Math.imul(value ^ value >>> 15, value | 1);
		value ^= value + Math.imul(value ^ value >>> 7, value | 61);
		return ((value ^ value >>> 14) >>> 0) / 4294967296;
	};
}
function readCategories(element) {
	return (element.getAttribute("data-works-categories") ?? element.getAttribute("data-works-category") ?? textFrom(element, CATEGORY_SELECTOR)).split(",").map((category) => category.trim()).filter(Boolean);
}
function readHref(element) {
	return element.getAttribute("data-works-href") ?? element.getAttribute("data-works-url") ?? element.getAttribute("data-sheet-calendar-href") ?? element.getAttribute("data-sheet-calendar-url") ?? element.getAttribute("data-sheet-calender-href") ?? element.getAttribute("data-sheet-calender-url") ?? element.getAttribute("data-sheet-claender-href") ?? element.getAttribute("data-sheet-claender-url") ?? element.getAttribute("data-calendar-href") ?? element.getAttribute("data-calendar-url") ?? element.getAttribute("data-calender-href") ?? element.getAttribute("data-calender-url") ?? element.getAttribute("data-claender-href") ?? element.getAttribute("data-claender-url") ?? element.getAttribute("data-sheet-href") ?? element.getAttribute("data-sheet-url") ?? element.querySelector(LINK_SELECTOR)?.href ?? "";
}
function readItem(element, index) {
	const thumbnailElement = imageFrom(element);
	const thumbnail = thumbnailElement?.currentSrc || thumbnailElement?.src || "";
	if (!thumbnail) return null;
	const title = textFrom(element, TITLE_SELECTOR) || element.getAttribute("data-works-title")?.trim() || element.getAttribute("data-canvas-title")?.trim() || thumbnailElement?.alt.trim() || "";
	return {
		id: element.getAttribute("data-works-id")?.trim() || element.getAttribute("data-canvas-id")?.trim() || element.getAttribute("data-cms-item-id")?.trim() || `work-${index + 1}-${hashString(`${title}-${thumbnail}`)}`,
		title,
		thumbnail,
		thumbnailAlt: thumbnailElement?.alt || title,
		href: readHref(element),
		year: textFrom(element, YEAR_SELECTOR) || element.getAttribute("data-works-year")?.trim() || "",
		categories: readCategories(element),
		index
	};
}
function readItems(source) {
	return Array.from(source.querySelectorAll(ITEM_SELECTOR)).map(readItem).filter((item) => item !== null);
}
function releaseSourceImages(source) {
	for (const element of Array.from(source.querySelectorAll(ITEM_SELECTOR))) {
		const image = imageFrom(element);
		if (!image) continue;
		image.removeAttribute("srcset");
		image.removeAttribute("sizes");
		image.removeAttribute("src");
	}
}
function readSortMode(root) {
	const value = root.getAttribute("data-works-sort")?.trim().toLowerCase();
	if (value === "random" || value === "year") return value;
	return "year";
}
function parseFirstYear(value) {
	const match = value.match(/\b(?:18|19|20)\d{2}\b/);
	return match ? Number.parseInt(match[0], 10) : null;
}
function formatYear(value) {
	const trimmedValue = value.trim();
	return trimmedValue.startsWith("[") && trimmedValue.endsWith("]") ? trimmedValue : `[${trimmedValue}]`;
}
function sortItems(items, mode, root) {
	const nextItems = [...items];
	if (mode === "random") {
		const random = createRandom(hashString(root.getAttribute("data-works-random-seed") || items.map((item) => item.id).join("|")));
		return nextItems.map((item) => ({
			item,
			sortValue: random()
		})).sort((first, second) => first.sortValue - second.sortValue).map(({ item }) => item);
	}
	return nextItems.sort((first, second) => {
		return (parseFirstYear(first.year) ?? Number.POSITIVE_INFINITY) - (parseFirstYear(second.year) ?? Number.POSITIVE_INFINITY) || first.title.localeCompare(second.title, "de", { sensitivity: "base" });
	});
}
function filterItems(items, selectedCategories) {
	if (selectedCategories.size === 0) return items;
	return items.filter((item) => item.categories.some((category) => selectedCategories.has(category)));
}
function createEyeIcon() {
	const svg = document.createElementNS(SVG_NAMESPACE, "svg");
	const pupil = document.createElementNS(SVG_NAMESPACE, "path");
	const outline = document.createElementNS(SVG_NAMESPACE, "path");
	svg.classList.add("cms-works__eye");
	svg.setAttribute("viewBox", "0 0 26 17");
	svg.setAttribute("fill", "none");
	svg.setAttribute("aria-hidden", "true");
	svg.setAttribute("focusable", "false");
	pupil.classList.add("cms-works__eye-pupil");
	pupil.setAttribute("d", "M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z");
	pupil.setAttribute("fill", "currentColor");
	outline.setAttribute("d", "M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z");
	outline.setAttribute("fill", "currentColor");
	svg.append(pupil, outline);
	return svg;
}
function createWorkCard(item, revealIndex = -1) {
	const card = document.createElement(item.href ? "a" : "article");
	const imageWrap = document.createElement("span");
	const image = document.createElement("img");
	const meta = document.createElement("span");
	const label = document.createElement("span");
	const title = document.createElement("span");
	card.className = "cms-works__item";
	card.setAttribute("data-works-rendered-item", item.id);
	card.setAttribute("data-works-categories", item.categories.join(","));
	if (item.href) {
		card.classList.add("cms-works__item--clickable");
		card.setAttribute("href", item.href);
		card.setAttribute("data-work-flip", "");
		card.setAttribute("data-work-flip-id", item.id);
	}
	imageWrap.className = "cms-works__image-wrap";
	if (revealIndex >= 0) {
		imageWrap.classList.add("cms-works__image-wrap--revealing");
		imageWrap.style.setProperty("--cms-works-reveal-delay", `${revealIndex * 100}ms`);
	}
	image.className = "cms-works__image";
	image.src = item.thumbnail;
	image.alt = item.thumbnailAlt;
	image.loading = "lazy";
	image.decoding = "async";
	imageWrap.append(image);
	meta.className = "cms-works__meta";
	label.className = "cms-works__label";
	title.className = "cms-works__title";
	title.textContent = item.title;
	label.append(title);
	if (item.year) {
		const year = document.createElement("span");
		year.className = "cms-works__year";
		year.textContent = formatYear(item.year);
		label.append(year);
	}
	meta.append(label, createEyeIcon());
	card.append(imageWrap, meta);
	return card;
}
function measureImage(src) {
	return new Promise((resolve) => {
		const image = new Image();
		image.onload = () => {
			resolve({
				width: image.naturalWidth || 1,
				height: image.naturalHeight || 1
			});
		};
		image.onerror = () => resolve({
			width: 1,
			height: 1
		});
		image.src = src;
	});
}
function getColumnCount(root) {
	const rawValue = window.getComputedStyle(root).getPropertyValue("--cms-works-active-columns").trim();
	const columnCount = Number.parseInt(rawValue, 10);
	return Number.isFinite(columnCount) && columnCount > 0 ? columnCount : 4;
}
function distributeItems(items, measures, columnCount) {
	const columns = Array.from({ length: columnCount }, () => ({
		items: [],
		height: 0
	}));
	items.forEach((item, index) => {
		const measure = measures.get(item.id) ?? {
			width: 1,
			height: 1
		};
		const column = columns[index % columnCount];
		column.items.push(item);
		column.height += measure.height / Math.max(measure.width, 1);
	});
	return columns;
}
function renderGrid(root, items, measures, revealedIds) {
	const grid = document.createElement("div");
	const columns = distributeItems(items, measures, getColumnCount(root));
	const revealOrder = /* @__PURE__ */ new Map();
	if (revealedIds) items.forEach((item) => {
		if (revealedIds.has(item.id)) revealOrder.set(item.id, revealOrder.size);
	});
	grid.className = "cms-works__grid";
	columns.forEach((columnItems) => {
		const column = document.createElement("div");
		column.className = "cms-works__column";
		columnItems.items.forEach((item) => {
			column.append(createWorkCard(item, revealOrder.get(item.id) ?? -1));
		});
		grid.append(column);
	});
	root.replaceChildren(grid);
	root.classList.add("is-ready");
}
function setButtonText(button, text) {
	const textTarget = button.querySelector("[data-cms-works-load-more-text]") ?? button.querySelector("[data-button-text]") ?? button.querySelector(".button-text") ?? button;
	textTarget.textContent = text;
}
function getLoadMoreButton(root, source) {
	const button = root.querySelector(LOAD_MORE_TEMPLATE_SELECTOR) ?? source.querySelector(LOAD_MORE_TEMPLATE_SELECTOR) ?? document.querySelector(LOAD_MORE_TEMPLATE_SELECTOR);
	if (!button) return null;
	if (button instanceof HTMLButtonElement) button.type = "button";
	if (button instanceof HTMLAnchorElement) button.href = "#";
	button.setAttribute("role", "button");
	button.setAttribute("tabindex", "0");
	button.removeAttribute("hidden");
	button.removeAttribute("aria-hidden");
	button.removeAttribute("data-cms-works-load-more-template");
	button.setAttribute("data-cms-works-load-more", "");
	setButtonText(button, "MEHR ANZEIGEN");
	return button;
}
/**
* Der Ansichtszustand wird nur wiederhergestellt, wenn der Nutzer wirklich von einer
* Werkseite zurueckkommt. Ueber das Menue aufgerufen startet die Uebersicht frisch.
*/
function shouldRestoreView() {
	return isBackForwardNavigation() || readWorkFlipPayload()?.direction === "back";
}
function renderWorks(root, source) {
	const items = readItems(source);
	const storedView = shouldRestoreView() ? readWorksViewState() : null;
	const restoredCategories = storedView?.categories ?? [];
	const state = {
		appliedCategories: new Set(restoredCategories),
		pendingCategories: new Set(restoredCategories),
		appliedSortMode: storedView?.sort ?? readSortMode(root),
		pendingSortMode: storedView?.sort ?? readSortMode(root),
		open: false
	};
	const gridHost = document.createElement("div");
	const collectionOverlay = document.createElement("button");
	const gridMount = document.createElement("div");
	const loadMoreButton = getLoadMoreButton(root, source);
	let animationFrame = 0;
	let previousColumnCount = 0;
	let previousWidth = 0;
	let visibleCount = storedView?.visibleCount ?? INITIAL_VISIBLE_COUNT;
	let pendingScrollRestore = storedView?.scrollY ?? null;
	let currentItems = [];
	let measures = /* @__PURE__ */ new Map();
	const pendingMeasures = /* @__PURE__ */ new Map();
	let renderRevision = 0;
	source.hidden = true;
	source.setAttribute("aria-hidden", "true");
	releaseSourceImages(source);
	root.classList.add("cms-works");
	gridHost.className = "cms-works__grid-host u-section";
	collectionOverlay.className = "cms-works__collection-overlay";
	collectionOverlay.type = "button";
	collectionOverlay.setAttribute("aria-label", "Filter schliessen");
	gridMount.className = "cms-works__grid-mount";
	gridHost.append(gridMount);
	if (loadMoreButton) gridHost.append(loadMoreButton);
	const getRenderedItems = () => sortItems(filterItems(items, state.appliedCategories), state.appliedSortMode, root);
	const renderCurrentItems = (force = false, revealedIds) => {
		const revision = ++renderRevision;
		const visibleItems = currentItems.slice(0, visibleCount);
		Promise.all(visibleItems.map(async (item) => {
			if (measures.has(item.id)) return;
			let pending = pendingMeasures.get(item.thumbnail);
			if (!pending) {
				pending = measureImage(item.thumbnail);
				pendingMeasures.set(item.thumbnail, pending);
			}
			measures.set(item.id, await pending);
		})).then(() => {
			if (revision !== renderRevision) return;
			window.cancelAnimationFrame(animationFrame);
			animationFrame = window.requestAnimationFrame(() => {
				if (revision !== renderRevision) return;
				const nextColumnCount = getColumnCount(root);
				const nextWidth = Math.round(root.getBoundingClientRect().width);
				if (!force && nextColumnCount === previousColumnCount && nextWidth === previousWidth) return;
				previousColumnCount = nextColumnCount;
				previousWidth = nextWidth;
				renderGrid(gridMount, visibleItems, measures, revealedIds);
				if (loadMoreButton) loadMoreButton.hidden = currentItems.length <= visibleCount;
				if (pendingScrollRestore !== null) {
					window.scrollTo(0, pendingScrollRestore);
					pendingScrollRestore = null;
				}
				root.setAttribute("data-site-assets-ready", "");
				document.dispatchEvent(new CustomEvent(WORKS_READY_EVENT, {
					bubbles: true,
					detail: {
						count: visibleItems.length,
						total: currentItems.length
					}
				}));
			});
		});
	};
	const persistView = () => {
		writeWorksViewState({
			categories: Array.from(state.appliedCategories),
			sort: state.appliedSortMode,
			visibleCount,
			scrollY: window.scrollY,
			ts: Date.now()
		});
	};
	const updateOverlayTop = () => {
		const bottom = controls.element.querySelector(".cms-works-filter__panel")?.getBoundingClientRect().bottom ?? controls.element.getBoundingClientRect().bottom;
		collectionOverlay.style.setProperty("--cms-works-overlay-top", `${Math.max(0, bottom)}px`);
	};
	const controls = createWorksFilterInterface(items, state, () => {
		currentItems = getRenderedItems();
		visibleCount = INITIAL_VISIBLE_COUNT;
		renderCurrentItems(true);
		controls.sync();
		persistView();
	}, { onOpenChange: (open) => {
		root.classList.toggle("is-filter-open", open);
		if (open) updateOverlayTop();
	} });
	collectionOverlay.addEventListener("click", () => controls.close(true));
	if (loadMoreButton) {
		const showMoreItems = () => {
			const previousCount = visibleCount;
			visibleCount = Math.min(visibleCount + LOAD_MORE_INCREMENT, currentItems.length);
			const revealedIds = new Set(currentItems.slice(previousCount, visibleCount).map((item) => item.id));
			renderCurrentItems(true, revealedIds);
			persistView();
		};
		loadMoreButton.addEventListener("click", (event) => {
			event.preventDefault();
			showMoreItems();
		});
		loadMoreButton.addEventListener("keydown", (event) => {
			if (event.key !== "Enter" && event.key !== " ") return;
			event.preventDefault();
			showMoreItems();
		});
	}
	currentItems = getRenderedItems();
	root.replaceChildren(controls.element, collectionOverlay, gridHost);
	const resizeObserver = new ResizeObserver(() => renderCurrentItems());
	renderCurrentItems(true);
	controls.sync();
	resizeObserver.observe(root);
	window.addEventListener("orientationchange", () => renderCurrentItems(true));
	window.addEventListener("resize", updateOverlayTop);
	window.addEventListener("scroll", updateOverlayTop, { passive: true });
	window.addEventListener("pagehide", persistView);
}
function mount(root) {
	const source = root.querySelector(SOURCE_SELECTOR) ?? document.querySelector(SOURCE_SELECTOR);
	if (!source) {
		console.error("CMS Works: Element mit data-cms-works-source wurde nicht gefunden.");
		return;
	}
	renderWorks(root, source);
}
ready(() => {
	Array.from(document.querySelectorAll(ROOT_SELECTOR)).forEach(mount);
});
//#endregion
