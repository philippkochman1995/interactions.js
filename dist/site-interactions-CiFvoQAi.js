//#region node_modules/posthog-js/dist/module.mjs
var e = "u" > typeof window ? window : void 0, t = "u" > typeof globalThis ? globalThis : e, n = t == null ? void 0 : t.navigator, r = t == null ? void 0 : t.document, i = t == null ? void 0 : t.location, a = t == null ? void 0 : t.fetch, o = t != null && t.XMLHttpRequest && "withCredentials" in new t.XMLHttpRequest() ? t.XMLHttpRequest : void 0, s = t == null ? void 0 : t.AbortController, c = t == null ? void 0 : t.CompressionStream, l = n == null ? void 0 : n.userAgent, u = typeof globalThis < "u" ? globalThis : e;
u && typeof self > "u" && (u.self = u), u && typeof File > "u" && (u.File = function() {});
var d = e == null ? {} : e, f = "0.13.1", p = {
	DEBUG: !1,
	LIB_VERSION: f,
	LIB_NAME: "browser-common",
	JS_SDK_VERSION: f
}, m = function(e) {
	return e.AnonymousId = "anonymous_id", e.DistinctId = "distinct_id", e.Props = "props", e.EnablePersonProcessing = "enable_person_processing", e.PersonMode = "person_mode", e.FeatureFlagDetails = "feature_flag_details", e.FeatureFlags = "feature_flags", e.FeatureFlagPayloads = "feature_flag_payloads", e.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", e.BootstrapFeatureFlags = "bootstrap_feature_flags", e.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", e.OverrideFeatureFlags = "override_feature_flags", e.Queue = "queue", e.AiQueue = "ai_queue", e.AiCaptureQueue = "ai_capture_queue", e.LogsQueue = "logs_queue", e.OptedOut = "opted_out", e.SessionId = "session_id", e.SessionStartTimestamp = "session_start_timestamp", e.SessionLastTimestamp = "session_timestamp", e.PersonProperties = "person_properties", e.GroupProperties = "group_properties", e.InstalledAppBuild = "installed_app_build", e.InstalledAppVersion = "installed_app_version", e.SessionReplay = "session_replay", e.PushRegistered = "push_registered", e.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", e.SurveyLastSeenDate = "survey_last_seen_date", e.SurveysInProgress = "surveys_in_progress", e.SurveysSeen = "surveys_seen", e.Surveys = "surveys", e.RemoteConfig = "remote_config", e.FlagsEndpointWasHit = "flags_endpoint_was_hit", e.DeviceId = "device_id", e;
}({}), h = function(e) {
	return e.GZipJS = "gzip-js", e.Base64 = "base64", e;
}({}), g = [
	"$snapshot",
	"$pageview",
	"$pageleave",
	"$set",
	"survey dismissed",
	"survey sent",
	"survey shown",
	"$identify",
	"$groupidentify",
	"$create_alias",
	"$$client_ingestion_warning",
	"$web_experiment_applied",
	"$feature_enrollment_update",
	"$feature_flag_called"
], _ = ["token"];
function v(e, t) {
	return e.indexOf(t) !== -1;
}
var y = function(e) {
	return e.trim();
}, b = function(e) {
	return e.replace(/^\$/, "");
};
function x(e) {
	var t;
	let n = [];
	return (t = JSON.stringify(e, function(e, t) {
		if (typeof t == "bigint") return t.toString();
		if (typeof t != "function" && typeof t != "symbol") {
			if (t instanceof Error) return {
				name: t.name,
				message: t.message,
				stack: t.stack
			};
			if (t && typeof t == "object") {
				for (; n.length > 0 && n[n.length - 1] !== this;) n.pop();
				if (n.includes(t)) return "[Circular]";
				n.push(t);
			}
			return t;
		}
	})) == null ? "null" : t;
}
var S = Object.prototype, C = S.hasOwnProperty, w = S.toString, T = Array.isArray || function(e) {
	return w.call(e) === "[object Array]";
}, E = (e) => typeof e == "function", D = (e) => e === Object(e) && !T(e), O = (e) => {
	if (D(e)) {
		for (let t in e) if (C.call(e, t)) return !1;
		return !0;
	}
	return !1;
}, k = (e) => e === void 0, A = (e) => w.call(e) == "[object String]", j = (e) => A(e) && e.trim().length === 0, M = (e) => e === null, N = (e) => k(e) || M(e), P = (e) => w.call(e) == "[object Number]" && e == e, F = (e) => P(e) && e > 0, ee = (e) => w.call(e) === "[object Boolean]", te = (e) => v(g, e), ne = (e) => v(_, e);
function re(e) {
	return typeof e != "object" || !e;
}
function I(e, t) {
	return {}.toString.call(e) === `[object ${t}]`;
}
function ie(e) {
	switch ({}.toString.call(e)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
		case "[object DOMError]":
		case "[object WebAssembly.Exception]": return !0;
		default: return oe(e, Error);
	}
}
function ae(e) {
	return "u" > typeof Event && oe(e, Event);
}
function oe(e, t) {
	try {
		return e instanceof t;
	} catch (e) {
		return !1;
	}
}
var se = [
	!0,
	"true",
	1,
	"1",
	"yes"
], ce = (e) => v(se, e), le = [
	!1,
	"false",
	0,
	"0",
	"no"
];
function ue(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function L(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				ue(a, r, i, o, s, "next", e);
			}
			function s(e) {
				ue(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
var de = /* @__PURE__ */ "amazonbot,amazonproductbot,app.hypefactors.com,applebot,archive.org_bot,awariobot,backlinksextendedbot,baiduspider,bingbot,bingpreview,chrome-lighthouse,dataforseobot,deepscan,duckduckbot,facebookexternal,facebookcatalog,http://yandex.com/bots,hubspot,ia_archiver,leikibot,linkedinbot,meta-externalagent,mj12bot,msnbot,nessus,petalbot,pinterestbot,prerender,rogerbot,screaming frog,sebot-wa,sitebulb,slackbot,slurp,trendictionbot,turnitin,twitterbot,vercel-screenshot,vercelbot,yahoo! slurp,yandexbot,zoombot,bot.htm,bot.php,(bot;,bot/,crawler,ahrefsbot,ahrefssiteaudit,semrushbot,siteauditbot,splitsignalbot,gptbot,oai-searchbot,chatgpt-user,perplexitybot,better uptime bot,sentryuptimebot,uptimerobot,headlesschrome,lightpanda,cypress,google-hoteladsverifier,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleother,google-cloudvertexbot,googleweblight,mediapartners-google,storebot-google,google-inspectiontool,bytespider".split(","), R = /* @__PURE__ */ new Map(), fe = function(e, t = []) {
	if (!e) return !1;
	let n = function(e, t) {
		let n = "";
		for (let e = 0; t.length > e; e++) {
			let r = t[e];
			n += r.length + ":" + r;
		}
		return e.length + ":" + e + "|" + t.length + ":" + n;
	}(e, t), r = R.get(n);
	if (r !== void 0) return r;
	let i = e.toLowerCase(), a = de.concat(t).some((e) => i.indexOf(e.toLowerCase()) !== -1);
	return 256 > R.size || R.clear(), R.set(n, a), a;
};
function z(e, t, n, r, i) {
	return t > n && (r.warn("min cannot be greater than max."), t = n), P(e) ? e > n ? (r.warn(" cannot be  greater than max: " + n + ". Using max value instead."), n) : t > e ? (r.warn(" cannot be less than min: " + t + ". Using min value instead."), t) : e : (r.warn(" must be a number. using max or fallback. max: " + n + ", fallback: " + i), z(i == null ? n : i, t, n, r));
}
var pe = class {
	constructor(e) {
		this.C = {}, this.I = e.I, this.A = z(e.bucketSize, 0, 100, e.R), this.O = z(e.refillRate, 0, this.A, e.R), this.$ = z(e.refillInterval, 0, 864e5, e.R);
	}
	F(e, t) {
		let n = Math.floor((t - e.lastAccess) / this.$);
		n > 0 && (e.tokens = Math.min(e.tokens + n * this.O, this.A), e.lastAccess += n * this.$);
	}
	consumeRateLimit(e) {
		var t;
		let n = Date.now(), r = String(e), i = this.C[r];
		return i ? this.F(i, n) : (i = {
			tokens: this.A,
			lastAccess: n
		}, this.C[r] = i), i.tokens === 0 || (i.tokens--, i.tokens === 0 && ((t = this.I) == null || t.call(this, e)), i.tokens === 0);
	}
	stop() {
		this.C = {};
	}
}, me = "Mobile", he = "Android", ge = "Tablet", _e = "Android Tablet", ve = "iPad", ye = "Apple Watch", be = "Safari", xe = "BlackBerry", Se = "Samsung Internet", Ce = "Chrome", we = "Chrome iOS", Te = "Internet Explorer", Ee = "Internet Explorer Mobile", De = "Opera", Oe = "Microsoft Edge", ke = "Firefox", Ae = "Firefox iOS", je = "Nintendo", Me = "PlayStation", Ne = "Xbox", Pe = "Android Mobile", Fe = "Mobile Safari", Ie = "Windows", Le = "Windows Phone", Re = "Nokia", ze = "Ouya", Be = "Generic tablet", Ve = "Konqueror", He = "Oculus Browser", Ue = "Vivaldi", We = "Yandex", Ge = "Whale", Ke = "DuckDuckGo", qe = "Pale Moon", Je = "Waterfox", Ye = "Brave", Xe = "Claude", Ze = "Codex", Qe = "ChatGPT", $e = "Google Search App", et = /* @__PURE__ */ RegExp("Version/(\\d+(\\.\\d+)?)"), tt = /* @__PURE__ */ RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"), nt = new RegExp(Ne, "i"), rt = /* @__PURE__ */ RegExp("PlayStation \\w+", "i"), it = /* @__PURE__ */ RegExp("Nintendo \\w+", "i"), at = /* @__PURE__ */ RegExp("BlackBerry|PlayBook|BB10", "i"), B = {
	"NT3.51": "NT 3.11",
	"NT4.0": "NT 4.0",
	"5.0": "2000",
	5.1: "XP",
	5.2: "XP",
	"6.0": "Vista",
	6.1: "7",
	6.2: "8",
	6.3: "8.1",
	6.4: "10",
	"10.0": "10"
}, ot = function(e, t, n, r) {
	return t = t || "", function(e) {
		return e != null && e.brave ? Ye : null;
	}(n) || (r != null && r.detectGoogleSearchApp && v(e, "GSA/") ? $e : v(e, " OPR/") && v(e, "Mini") ? "Opera Mini" : v(e, " OPR/") ? De : at.test(e) ? xe : v(e, "IEMobile") || v(e, "WPDesktop") ? Ee : v(e, "OculusBrowser") ? He : v(e, "SamsungBrowser") ? Se : v(e, "Edge") || v(e, "Edg/") ? Oe : v(e, "Vivaldi/") ? Ue : v(e, "YaBrowser/") ? We : v(e, "Whale/") ? Ge : v(e, "DuckDuckGo/") || v(e, "Ddg/") ? Ke : v(e, "Claude/") ? Xe : v(e, "Codex/") ? Ze : v(e, "ChatGPT/") ? Qe : v(e, "FBIOS") ? "Facebook Mobile" : v(e, "UCWEB") || v(e, "UCBrowser") ? "UC Browser" : v(e, "CriOS") ? we : v(e, "CrMo") || v(e, Ce) ? Ce : v(e, he) && v(e, be) ? Pe : v(e, "FxiOS") ? Ae : v(e.toLowerCase(), Ve.toLowerCase()) ? Ve : v(e, "Brave/") ? Ye : ((e, t) => t && v(t, "Apple") || function(e) {
		return v(e, be) && !v(e, Ce) && !v(e, he);
	}(e))(e, t) ? v(e, me) ? Fe : be : v(e, "PaleMoon/") ? qe : v(e, "Waterfox/") ? Je : v(e, ke) ? ke : v(e, "MSIE") || v(e, "Trident/") ? Te : v(e, "Gecko") ? ke : "");
}, st = {
	[Ee]: [/* @__PURE__ */ RegExp("rv:(\\d+(\\.\\d+)?)")],
	[Oe]: [/* @__PURE__ */ RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
	[Ce]: [/* @__PURE__ */ RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
	[we]: [/* @__PURE__ */ RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
	"UC Browser": [/* @__PURE__ */ RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
	[be]: [et],
	[Fe]: [et],
	[De]: [/* @__PURE__ */ RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
	[ke]: [/* @__PURE__ */ RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
	[Ae]: [/* @__PURE__ */ RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
	[Ve]: [/* @__PURE__ */ RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
	[xe]: [/* @__PURE__ */ RegExp("BlackBerry (\\d+(\\.\\d+)?)"), et],
	[Pe]: [/* @__PURE__ */ RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
	[Se]: [/* @__PURE__ */ RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
	[He]: [/* @__PURE__ */ RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
	[Ue]: [/* @__PURE__ */ RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
	[We]: [/* @__PURE__ */ RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
	[Ge]: [/* @__PURE__ */ RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
	[Ye]: [/* @__PURE__ */ RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
	[Xe]: [tt],
	[Ze]: [tt],
	[Qe]: [tt],
	[Ke]: [/* @__PURE__ */ RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
	[qe]: [/* @__PURE__ */ RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
	[Je]: [/* @__PURE__ */ RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
	[$e]: [/* @__PURE__ */ RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
	[Te]: [/* @__PURE__ */ RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
	Mozilla: [/* @__PURE__ */ RegExp("rv:(\\d+(\\.\\d+)?)")]
}, ct = function(e, t, n, r) {
	let i = st[ot(e, t, n, r)];
	if (k(i)) return null;
	for (let t = 0; i.length > t; t++) {
		let n = e.match(i[t]);
		if (n) return parseFloat(n[n.length - 2]);
	}
	return null;
}, lt = [
	[/* @__PURE__ */ RegExp("Xbox; Xbox (.*?)[);]", "i"), (e) => [Ne, e && e[1] || ""]],
	[new RegExp(je, "i"), [je, ""]],
	[new RegExp(Me, "i"), [Me, ""]],
	[at, [xe, ""]],
	[new RegExp(Ie, "i"), (e, t) => {
		if (/Phone/.test(t) || /WPDesktop/.test(t)) return [Le, ""];
		if (new RegExp(me).test(t) && !/IEMobile\b/.test(t)) return ["Windows Mobile", ""];
		let n = /Windows NT ([0-9.]+)/i.exec(t);
		if (n && n[1]) {
			let e = B[n[1]] || "";
			return /arm/i.test(t) && (e = "RT"), [Ie, e];
		}
		return [Ie, ""];
	}],
	[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e) => e && e[3] ? ["iOS", [
		e[3],
		e[4],
		e[5] || "0"
	].join(".")] : ["iOS", ""]],
	[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e) => {
		let t = "";
		return e && e.length >= 3 && (t = k(e[2]) ? e[3] : e[2]), ["watchOS", t];
	}],
	[/* @__PURE__ */ RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), (e) => e && e[2] ? [he, [
		e[2],
		e[3],
		e[4] || "0"
	].join(".")] : [he, ""]],
	[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (e) => {
		let t = ["Mac OS X", ""];
		return e && e[1] && (t[1] = [
			e[1],
			e[2],
			e[3] || "0"
		].join(".")), t;
	}],
	[/Mac/i, ["Mac OS X", ""]],
	[/CrOS/, ["Chrome OS", ""]],
	[/Linux|debian/i, ["Linux", ""]]
], ut = function(e) {
	for (let t = 0; lt.length > t; t++) {
		let [n, r] = lt[t], i = n.exec(e), a = i && (E(r) ? r(i, e) : r);
		if (a) return a;
	}
	return ["", ""];
}, dt = function(e) {
	return it.test(e) ? je : rt.test(e) ? Me : nt.test(e) ? Ne : new RegExp(ze, "i").test(e) ? ze : (/* @__PURE__ */ RegExp("(Windows Phone|WPDesktop)", "i")).test(e) ? Le : /iPad/.test(e) ? ve : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? ye : at.test(e) ? xe : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(Re, "i").test(e) ? Re : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? new RegExp(me).test(e) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) || /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? he : _e : (/* @__PURE__ */ RegExp("(pda|Mobile)", "i")).test(e) ? "Generic mobile" : new RegExp(ge, "i").test(e) && !(/* @__PURE__ */ RegExp("Tablet pc", "i")).test(e) ? Be : "";
}, ft = function(e, t) {
	var n;
	let r = dt(e);
	return r === ve || r === _e || r === "Kobo" || r === "Kindle Fire" || r === Be ? ge : r === je || r === Ne || r === Me || r === ze ? "Console" : r === ye ? "Wearable" : r ? me : (t == null ? void 0 : t.userAgentDataPlatform) === "Android" && ((n = t == null ? void 0 : t.maxTouchPoints) == null ? 0 : n) > 0 ? 600 > Math.min((i = t == null ? void 0 : t.screenWidth) == null ? 0 : i, (a = t == null ? void 0 : t.screenHeight) == null ? 0 : a) / ((o = t == null ? void 0 : t.devicePixelRatio) == null ? 1 : o) ? me : ge : "Desktop";
	var i, a, o;
}, pt = /\bFBAV\/(\d+(?:\.\d+)*)/i, mt = [
	[/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
	[/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
	[
		/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i,
		"Messenger",
		pt
	],
	[
		/\bFBAN\/EMA\b/i,
		"Facebook Lite",
		pt
	],
	[
		/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i,
		"Facebook",
		pt
	],
	[/\bLinkedInApp(?:\]?\/(\d+(?:\.\d+)*))?\b/i, "LinkedIn"],
	[/\bTwitter(?:Android| for (?:iPhone|iPad|Android))(?:\/(\d+(?:\.\d+)*))?\b/i, "Twitter"],
	[
		/\b(?:musical_ly|trill)(?:[_/](\d+\.\d+(?:\.\d+)*))?(?=\b|_)/i,
		"TikTok",
		/\bapp_version\/(\d+(?:\.\d+)*)/i
	],
	[/\b(?:MicroMessenger|WeChat)\/(\d+(?:\.\d+)*)?/i, "WeChat"],
	[/\bLine\/(\d+(?:\.\d+)*)?/i, "Line"],
	[/\bGSA\/(\d+(?:\.\d+)*)?/i, "Google"],
	[/\[Pinterest\/(?:iOS|Android)\b|\bPinterest(?: for (?:Android(?: Tablet)?|iOS))?\/(\d+(?:\.\d+)*)/i, "Pinterest"],
	[/\b(?:WA4A|WAiOS)\/(\d+(?:\.\d+)*)?/i, "WhatsApp"],
	[/\bSnapchat[ /](\d+(?:\.\d+)*)?/i, "Snapchat"],
	[/\bBing(?:Web|Sapphire)\/(\d+(?:\.\d+)*)?/i, "Bing"],
	[
		/\bNAVER\(inapp; search;/i,
		"Naver",
		/\bNAVER\(inapp; search;[^;)]*; (\d+(?:\.\d+)*)/i
	],
	[/\bKAKAOTALK[ /](\d+\.\d+(?:\.\d+)*)?/i, "KakaoTalk"]
], ht = "[Truncated]", gt = "[Unserializable]";
function _t(e) {
	let t = "";
	for (let n = 0; e.length > n; n++) {
		let r = e.charCodeAt(n);
		if (55296 > r || r > 56319) t += 56320 > r || r > 57343 ? e[n] : "�";
		else {
			let r = e.charCodeAt(n + 1);
			56320 > r || r > 57343 ? t += "�" : (t += e[n] + e[n + 1], n++);
		}
	}
	return t;
}
function vt(e, t) {
	if (!t) return e;
	let n = [];
	try {
		n = Object.keys(t);
	} catch (e) {
		n = [];
	}
	for (let r of n) {
		let n;
		try {
			n = t[r];
		} catch (e) {
			n = gt;
		}
		Object.defineProperty(e, r, {
			value: n,
			enumerable: !0,
			writable: !0,
			configurable: !0
		});
	}
	return e;
}
var yt = 3e5, bt = class {
	record(e) {
		if (e.kind === "too-large") return;
		if (e.kind !== "retry-later") return void this.reset();
		if (!e.retryAfterMs) return;
		let t = this.isOpen(), n = Date.now(), r = Math.min(e.retryAfterMs, yt);
		if (!t) return this.ts = n, void (this.es = n + r);
		this.es = Math.max(this.es, Math.min(n + r, this.ts + yt));
	}
	remainingMs() {
		let e = Date.now();
		if (this.ts - 5e3 > e) return this.reset(), 0;
		let t = Math.min(yt, Math.max(0, this.es - e));
		return t === 0 && this.reset(), t;
	}
	isOpen() {
		return this.remainingMs() > 0;
	}
	reset() {
		this.es = 0, this.ts = 0;
	}
	constructor() {
		this.es = 0, this.ts = 0;
	}
}, xt = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function St(e, t) {
	return typeof (n = e) == "string" && xt.test(n) ? e : t();
	var n;
}
function Ct(e, t) {
	let n = Error(t);
	try {
		Object.defineProperty(n, "name", {
			value: e,
			writable: !0,
			enumerable: !0,
			configurable: !0
		});
	} catch (e) {}
	return n;
}
function wt(e) {
	return e && e.split("#")[0];
}
function Tt(e) {
	try {
		return e();
	} catch (e) {
		return;
	}
}
function Et(e, t) {
	let n = setTimeout(e, t);
	return n != null && n.unref && (n == null || n.unref()), n;
}
function Dt(e, t, n) {
	return Ot.apply(this, arguments);
}
function Ot() {
	return (Ot = L(function* (e, t, n) {
		let r;
		try {
			return yield Promise.race([e, new Promise((e, i) => {
				r = Et(() => {
					try {
						n == null || n(), e();
					} catch (e) {
						i(e);
					}
				}, t);
			})]);
		} finally {
			clearTimeout(r);
		}
	})).apply(this, arguments);
}
function kt(e) {
	return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, kt(e);
}
function At(e, t, n) {
	return (t = function(e) {
		var t = function(e) {
			if (kt(e) != "object" || !e) return e;
			var t = e[Symbol.toPrimitive];
			if (t !== void 0) {
				var n = t.call(e, "string");
				if (kt(n) != "object") return n;
				throw TypeError("@@toPrimitive must return a primitive value.");
			}
			return String(e);
		}(e);
		return kt(t) == "symbol" ? t : t + "";
	}(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function jt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function V(e) {
	for (var t = 1; arguments.length > t; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? jt(Object(n), !0).forEach(function(t) {
			At(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Mt, Nt, Pt, Ft;
function It(e) {
	let t = globalThis._posthogChunkIds, n = globalThis._debugIds;
	if (!t && !n) return;
	let r = t ? Object.keys(t) : [], i = n ? Object.keys(n) : [];
	if (Ft && Lt(t, r, Nt) && Lt(n, i, Pt)) return Ft;
	Nt = t ? V({}, t) : void 0, Pt = n ? V({}, n) : void 0, Ft = {}, Mt != null || (Mt = {});
	let a = (t, n) => {
		for (let i of t) {
			let t = n[i];
			if (!t) continue;
			let a = Mt == null ? void 0 : Mt[i];
			if (a) {
				Ft[a] = t;
				continue;
			}
			let o = e(i);
			for (let e = o.length - 1; e >= 0; e--) {
				var r;
				let n = (r = o[e]) == null ? void 0 : r.filename;
				if (n) {
					Ft[n] = t, Mt[i] = n;
					break;
				}
			}
		}
	};
	return n && a(i, n), t && a(r, t), Ft;
}
function Lt(e, t, n) {
	return e && n ? t.length === Object.keys(n).length && t.every((t) => e[t] === n[t]) : e === n;
}
var Rt = class {
	constructor(e, t, n = []) {
		this.coercers = e, this.stackParser = t, this.modifiers = n;
	}
	buildFromUnknown(e, t = {}) {
		let n = t && t.mechanism || {
			handled: !0,
			type: "generic"
		}, r = this.buildCoercingContext(n, t, 0).apply(e), i = this.buildParsingContext(t), a = this.parseStacktrace(r, i);
		return {
			$exception_list: this.convertToExceptionList(a, n),
			$exception_level: "error"
		};
	}
	modifyFrames(e) {
		var t = this;
		return L(function* () {
			for (let n of e) n.stacktrace && n.stacktrace.frames && T(n.stacktrace.frames) && (n.stacktrace.frames = yield t.applyModifiers(n.stacktrace.frames));
			return e;
		})();
	}
	coerceFallback(e) {
		var t;
		return {
			type: "Error",
			value: "Unknown error",
			stack: (t = e.syntheticException) == null ? void 0 : t.stack,
			synthetic: !0
		};
	}
	parseStacktrace(e, t) {
		var n;
		let r, i;
		if (e.cause != null && (r = this.parseStacktrace(e.cause, t)), e.stack != "" && e.stack != null) try {
			i = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? t.skipFirstLines : 0), t.chunkIdMap);
		} catch (e) {}
		return V(V({}, e), {}, {
			cause: r,
			stack: i,
			errors: (n = e.errors) == null ? void 0 : n.map((e) => this.parseStacktrace(e, t))
		});
	}
	applyChunkIds(e, t) {
		return e.map((e) => (e.filename && t && (e.chunk_id = t[e.filename]), e));
	}
	applyCoercers(e, t) {
		for (let n of this.coercers) if (n.match(e)) return n.coerce(e, t);
		return this.coerceFallback(t);
	}
	applyModifiers(e) {
		var t = this;
		return L(function* () {
			let n = e;
			for (let e of t.modifiers) n = yield e(n);
			return n;
		})();
	}
	convertToExceptionList(e, t) {
		let n = [], r = (e, i, a) => {
			var o;
			let s = n.length, c = i === void 0 ? V(V({ type: typeof t.type == "string" && t.type.length > 0 ? t.type : "generic" }, typeof t.handled == "boolean" ? { handled: t.handled } : t.handled === void 0 ? { handled: !0 } : {}), {}, {
				synthetic: typeof t.synthetic == "boolean" ? t.synthetic : e.synthetic,
				exception_id: s
			}) : {
				type: "chained",
				source: a,
				synthetic: e.synthetic,
				exception_id: s,
				parent_id: i
			}, l = {
				type: e.type,
				value: e.value,
				mechanism: c
			};
			e.stack && (l.stacktrace = {
				type: "raw",
				frames: e.stack
			}), n.push(l), e.cause && r(e.cause, s, "cause");
			for (let t of (o = e.errors) == null ? [] : o) r(t, s, "member");
		};
		return r(e), n;
	}
	buildParsingContext(e) {
		var t;
		return {
			chunkIdMap: It(this.stackParser),
			skipFirstLines: (t = e.skipFirstLines) == null ? 1 : t
		};
	}
	getAggregateErrors(e) {
		try {
			if (ie(e)) {
				let n = Object.getPrototypeOf(e);
				for (let r = 0; n && 100 > r; r++) {
					var t;
					let r = (t = Object.getOwnPropertyDescriptor(n, "constructor")) == null ? void 0 : t.value;
					if (typeof r == "function" && r.name === "AggregateError") {
						let t = e.errors;
						return T(t) ? t : void 0;
					}
					n = Object.getPrototypeOf(n);
				}
			}
		} catch (e) {}
	}
	buildCoercingContext(e, t, n = 0) {
		let r = 0, i = 0, a = !1, o = /* @__PURE__ */ new Set(), s = [], c = {}, l = (e, t, n = 0) => {
			let l = u(t, n), d = l.apply;
			if (l.apply = (t) => {
				s.push(e);
				try {
					return d(t);
				} finally {
					s.pop();
				}
			}, n > 4 || n > 0 && s.indexOf(e) !== -1) return this.coerceFallback(l);
			let f = typeof e == "object" && !!e || typeof e == "function";
			if (n === 0 && r >= 50 || f && o.has(e)) return;
			f && o.add(e), n === 0 && r++;
			let p = this.getAggregateErrors(e), m, h;
			a || (a = !!p);
			try {
				if (m = this.applyCoercers(e, l), !m) throw c;
			} catch (e) {
				if (e === c) return void (n === 0 && r--);
				if (!a) throw e;
				m = this.coerceFallback(l);
			}
			if (!p || r >= 50) return m;
			try {
				h = p.length;
			} catch (e) {
				return m;
			}
			if (!Number.isInteger(h) || 0 > h || h > 4294967295) return m;
			let g = [];
			for (let e = 0; 50 > r && 1e3 > i && h > e; e++) {
				let n;
				i++;
				try {
					n = l.next(p[e]);
				} catch (e) {
					r++, n = this.coerceFallback(u(t + 1));
				}
				n && g.push(n);
			}
			return V(V({}, m), {}, { errors: g });
		}, u = (n, r = 0) => V(V({}, t), {}, {
			syntheticException: n == 0 ? t.syntheticException : void 0,
			mechanism: n == 0 ? e : {},
			apply(e) {
				let t = l(e, n, r + 1);
				if (!t) throw c;
				return t;
			},
			next: (e) => l(e, n + 1)
		}), d = u(n);
		return V(V({}, d), {}, { apply: (e) => {
			var t;
			return (t = l(e, n)) == null ? this.coerceFallback(d) : t;
		} });
	}
}, zt = /^([a-z][a-z0-9.+-]+):/i, Bt = [
	"http",
	"https",
	"file",
	"blob",
	"app",
	"capacitor",
	"ionic",
	"webpack",
	"webpack-internal",
	"ng"
];
function Vt(e) {
	if (!e || e === "<anonymous>") return !1;
	let t = zt.exec(e);
	return !t || Bt.includes(t[1].toLowerCase());
}
function Ht(e, t, n, r, i) {
	let a = {
		platform: e,
		filename: t,
		function: n === "<anonymous>" ? "?" : n,
		in_app: Vt(t)
	};
	return k(r) || (a.lineno = r), k(i) || (a.colno = i), a;
}
var Ut = (e, t) => {
	let n = e.indexOf("safari-extension") !== -1, r = e.indexOf("safari-web-extension") !== -1;
	return n || r ? [e.indexOf("@") === -1 ? "?" : e.split("@")[0], n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
}, Wt = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, Gt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Kt = /\((\S*)(?::(\d+))(?::(\d+))\)/, qt = (e, t) => {
	let n = Wt.exec(e);
	if (n) {
		let [, e, r, i] = n;
		return Ht(t, e, "?", +r, +i);
	}
	let r = Gt.exec(e);
	if (r) {
		if (r[2] && r[2].indexOf("eval") === 0) {
			let e = Kt.exec(r[2]);
			e && (r[2] = e[1], r[3] = e[2], r[4] = e[3]);
		}
		let [e, n] = Ut(r[1] || "?", r[2]);
		return Ht(t, n, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
	}
}, Jt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Yt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Xt = (e, t) => {
	let n = Jt.exec(e);
	if (n) {
		if (n[3] && n[3].indexOf(" > eval") > -1) {
			let e = Yt.exec(n[3]);
			e && (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "");
		}
		let e = n[3], r = n[1] || "?";
		return [r, e] = Ut(r, e), Ht(t, e, r, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0);
	}
}, Zt = /\(error: (.*)\)/;
function Qt(e, t) {
	return e.filename === t.filename && e.function === t.function && e.module === t.module && e.lineno === t.lineno && e.colno === t.colno;
}
function $t(e) {
	for (let t = 1; 10 >= t; t++) {
		let n = e.length - 2 * t;
		if (0 > n) break;
		let r = !0;
		for (let i = 0; t > i; i++) if (!Qt(e[n + i], e[n + t + i])) {
			r = !1;
			break;
		}
		if (r) {
			for (let r = 0; t > r; r++) e[n + r] = e[n + t + r];
			return e.length = n + t, {
				start: n,
				length: t
			};
		}
	}
}
function en(e, t) {
	let n = t.start + t.length, r = nn(e, t);
	r && e.splice(n + r === e.length ? n : t.start, r);
}
function tn(e, t) {
	let n = t.start;
	for (; n > 0 && Qt(e[n - 1], e[n - 1 + t.length]);) n--;
	return t.start - n;
}
function nn(e, t) {
	let n = t.start + t.length, r = n;
	for (; e.length > r && Qt(e[r], e[r - t.length]);) r++;
	return r - n;
}
function rn(e, t) {
	let n = t[0], r = e.length - (n ? tn(e, n) : 0);
	for (let n of t) r -= nn(e, n);
	return r;
}
function an(e, t, n) {
	for (let r = 0; e.length > r; r++) {
		let i = e[(t + r) % e.length], a = e[(n + r) % e.length];
		if (i !== a) return a > i;
	}
	return !1;
}
var on = class {
	match(e) {
		return this.isDOMException(e) || this.isDOMError(e);
	}
	coerce(e, t) {
		let n = A(e.stack);
		return {
			type: this.getType(e),
			value: this.getValue(e),
			stack: n ? e.stack : void 0,
			cause: e.cause ? t.next(e.cause) : void 0,
			synthetic: !1
		};
	}
	getType(e) {
		return this.isDOMError(e) ? "DOMError" : "DOMException";
	}
	getValue(e) {
		let t = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
		return e.message ? `${t}: ${e.message}` : t;
	}
	isDOMException(e) {
		return I(e, "DOMException");
	}
	isDOMError(e) {
		return I(e, "DOMError");
	}
}, sn = class {
	match(e) {
		return ie(e);
	}
	coerce(e, t) {
		var n;
		let r = this.getStack(e), i = r === void 0 ? (n = t.syntheticException) == null ? void 0 : n.stack : void 0, a = !!i;
		return {
			type: this.getType(e),
			value: this.getMessage(e, t),
			stack: r == null ? i : r,
			cause: e.cause ? t.next(e.cause) : void 0,
			synthetic: a
		};
	}
	getType(e) {
		return e.name || e.constructor.name;
	}
	getMessage(e, t) {
		let n = e.message;
		return String(n.error && typeof n.error.message == "string" ? n.error.message : n);
	}
	getStack(e) {
		try {
			let t = e.stacktrace;
			if (typeof t == "string" && t.length > 0) return t;
			let n = e.stack;
			return typeof n == "string" && n.length > 0 ? n : void 0;
		} catch (e) {
			return;
		}
	}
}, cn = class {
	match(e) {
		return !!I(e, "ErrorEvent") && (e.error != null || this.Sr(e));
	}
	coerce(e, t) {
		var n;
		if (e.error != null) return t.apply(e.error);
		let r = t.apply(e.message);
		return V(V({}, r), {}, {
			stack: (n = this._r(e)) == null ? r.stack : n,
			synthetic: !0
		});
	}
	Sr(e) {
		return A(e.message) && e.message.length > 0;
	}
	_r(e) {
		var t, n;
		let r = e, i = (t = r.lineno) == null ? 0 : t, a = (n = r.colno) == null ? 0 : n;
		if (A(r.filename) && r.filename.length !== 0 && i !== 0) return `Error\n    at ${r.filename}:${i}:${a}`;
	}
}, ln = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, un = class {
	match(e) {
		return typeof e == "string";
	}
	coerce(e, t) {
		var n;
		let [r, i] = this.getInfos(e);
		return {
			type: r == null ? "Error" : r,
			value: i == null ? e : i,
			stack: (n = t.syntheticException) == null ? void 0 : n.stack,
			synthetic: !0
		};
	}
	getInfos(e) {
		let t = "Error", n = e, r = e.match(ln);
		return r && (t = r[1], n = r[2]), [t, n];
	}
}, dn = [
	"fatal",
	"error",
	"warning",
	"log",
	"info",
	"debug"
];
function fn(e, t = 40) {
	let n = Object.keys(e);
	if (n.sort(), !n.length) return "[object has no keys]";
	let r = "";
	for (let e of n) {
		let n = r ? `${r}, ${e}` : e;
		if (n.length > t) break;
		r = n;
	}
	return r;
}
var pn = class {
	match(e) {
		return typeof e == "object" && !!e;
	}
	coerce(e, t) {
		var n, r;
		let i = this.getErrorPropertyFromObject(e);
		return i ? t.apply(i) : {
			type: this.getType(e),
			value: this.getValue(e),
			stack: (n = this.getStack(e)) == null ? (r = t.syntheticException) == null ? void 0 : r.stack : n,
			level: this.isSeverityLevel(e.level) ? e.level : "error",
			synthetic: !0
		};
	}
	getType(e) {
		if (ae(e)) return e.constructor.name;
		let t = "name" in e ? e.name : void 0;
		return A(t) && !j(t) ? t : "Error";
	}
	getValue(e) {
		if ("name" in e && typeof e.name == "string") {
			let t = `'${e.name}' captured as exception`;
			return "message" in e && typeof e.message == "string" && (t += ` with message: '${e.message}'`), t;
		}
		if ("message" in e && typeof e.message == "string") return e.message;
		let t = this.getObjectClassName(e);
		return `${t && t !== "Object" ? `'${t}'` : "Object"} captured as exception with keys: ${fn(e)}`;
	}
	isSeverityLevel(e) {
		return A(e) && !j(e) && dn.indexOf(e) >= 0;
	}
	getStack(e) {
		try {
			return A(e.stacktrace) && e.stacktrace.length > 0 ? e.stacktrace : A(e.stack) && e.stack.length > 0 ? e.stack : void 0;
		} catch (e) {
			return;
		}
	}
	getErrorPropertyFromObject(e) {
		for (let t in e) if ({}.hasOwnProperty.call(e, t)) {
			let n = e[t];
			if (ie(n)) return n;
		}
	}
	getObjectClassName(e) {
		try {
			let t = Object.getPrototypeOf(e);
			return t ? t.constructor.name : void 0;
		} catch (e) {
			return;
		}
	}
}, mn = class {
	match(e) {
		return ae(e);
	}
	coerce(e, t) {
		var n;
		let r = e.constructor.name;
		return {
			type: r,
			value: `${r} captured as exception with keys: ${fn(e)}`,
			stack: (n = t.syntheticException) == null ? void 0 : n.stack,
			synthetic: !0
		};
	}
}, hn = class {
	match(e) {
		return re(e);
	}
	coerce(e, t) {
		var n;
		return {
			type: "Error",
			value: `Primitive value captured as exception: ${String(e)}`,
			stack: (n = t.syntheticException) == null ? void 0 : n.stack,
			synthetic: !0
		};
	}
}, gn = class {
	match(e) {
		return I(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e);
	}
	isCustomEventWrappingRejection(e) {
		if (!ae(e)) return !1;
		try {
			let t = e.detail;
			return typeof t == "object" && !!t && "reason" in t;
		} catch (e) {
			return !1;
		}
	}
	coerce(e, t) {
		var n;
		let r = this.getUnhandledRejectionReason(e);
		return re(r) ? {
			type: "UnhandledRejection",
			value: `Non-Error promise rejection captured with value: ${String(r)}`,
			stack: (n = t.syntheticException) == null ? void 0 : n.stack,
			synthetic: !0
		} : t.apply(r);
	}
	getUnhandledRejectionReason(e) {
		try {
			if ("reason" in e) return e.reason;
			if ("detail" in e && e.detail != null && typeof e.detail == "object" && "reason" in e.detail) return e.detail.reason;
		} catch (e) {}
		return e;
	}
}, _n = "$message", vn = "$timestamp", yn = /* @__PURE__ */ new Set([_n, vn]), bn = {
	enabled: !0,
	max_bytes: 32768
};
function xn(e) {
	var t;
	return e ? {
		enabled: (t = e.enabled) == null ? bn.enabled : t,
		max_bytes: Cn(e.max_bytes, bn.max_bytes)
	} : V({}, bn);
}
var Sn = class {
	constructor(e) {
		this.ns = [], this.ss = 0, this.Br = xn(e);
	}
	setConfig(e) {
		this.Br = xn(e), this.rs();
	}
	add(e) {
		let t = function(e) {
			let t;
			try {
				t = x(e);
			} catch (e) {
				return;
			}
			try {
				let e = JSON.parse(t);
				if (!D(e)) return;
				let n = e, r = n[_n], i = n[vn];
				return !A(r) || r.trim().length === 0 || !A(i) && !P(i) ? void 0 : {
					step: n,
					json: t
				};
			} catch (e) {
				return;
			}
		}(e);
		if (!t) return;
		let n = function(e) {
			if ("u" > typeof TextEncoder) return new TextEncoder().encode(e).length;
			let t = encodeURIComponent(e), n = 0;
			for (let e = 0; t.length > e; e++) t[e] === "%" ? (n += 1, e += 2) : n += 1;
			return n;
		}(t.json);
		n > this.Br.max_bytes || (this.ns.push({
			step: t.step,
			bytes: n
		}), this.ss += n, this.rs());
	}
	getAttachable() {
		return this.ns.map((e) => e.step);
	}
	clear() {
		this.ns = [], this.ss = 0;
	}
	size() {
		return this.ns.length;
	}
	rs() {
		for (; this.ss > this.Br.max_bytes && this.ns.length > 0;) {
			let e = this.ns.shift();
			e && (this.ss -= e.bytes);
		}
	}
};
function Cn(e, t) {
	if (!P(e) || e === Infinity || e === -Infinity) return t;
	let n = Math.floor(e);
	return 0 > n ? t : n;
}
var wn = (e) => {
	if (typeof e != "string") return e;
	try {
		return JSON.parse(e);
	} catch (t) {
		return e;
	}
};
function Tn(e) {
	return typeof e == "string" || e;
}
function En(e) {
	return typeof e == "string" ? e : void 0;
}
var Dn = /* @__PURE__ */ "$feature_flag.$feature_flag_response.$feature_flag_has_experiment.$feature_flag_id.$feature_flag_version.$feature_flag_reason.$feature_flag_request_id.$feature_flag_evaluated_at.$feature_flag_error.locally_evaluated.$groups.$process_person_profile.$geoip_disable.$current_url.$pathname.$referring_domain.utm_source.utm_medium.utm_campaign.utm_content.utm_term.gad_source.mc_cid.gclid.gclsrc.dclid.gbraid.wbraid.fbclid.msclkid.twclid.li_fat_id.igshid.ttclid.rdt_cid.epik.qclid.sccid.oppref.bfcid.irclid._kx.$session_id.$window_id.$lib.$lib_version.$device_id.$is_server".split("."), On = "NativeGzipValidationError", kn = (e) => e.length >= 2 && e[0] === 31 && e[1] === 139, An = (e, t) => e === h.GZipJS || t === h.GZipJS || t === "gzip", jn = (e) => !(!e || typeof e != "object") && ("name" in e ? String(e.name) : "") === "NotReadableError", Mn, Nn = (e) => {
	throw Ct(On, `Native gzip produced invalid output: ${e}`);
}, Pn = 0, Fn = !1, In = function() {
	var e = L(function* (e, t) {
		18 > e.size && Nn("too-short");
		let n = new Uint8Array(yield e.slice(0, 10).arrayBuffer());
		kn(n) && n[2] === 8 || Nn("invalid-header");
		let r = new DataView(yield e.slice(e.size - 8).arrayBuffer()), i = t.length >>> 0;
		r.getUint32(4, !0) !== i && Nn("invalid-size"), (Fn || 3 > Pn) && (r.getUint32(0, !0) !== ((e) => {
			let t = (() => {
				if (Mn) return Mn;
				Mn = [];
				for (let e = 0; 256 > e; e++) {
					let t = e;
					for (let e = 0; 8 > e; e++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
					Mn[e] = t >>> 0;
				}
				return Mn;
			})(), n = 4294967295;
			for (let r = 0; e.length > r; r++) n = t[255 & (n ^ e[r])] ^ n >>> 8;
			return (4294967295 ^ n) >>> 0;
		})(t) && (Fn = !0, Nn("invalid-crc")), Pn++);
	});
	return function(t, n) {
		return e.apply(this, arguments);
	};
}();
function Ln() {
	return Ln = L(function* (e, t = !0, n) {
		try {
			let t = new TextEncoder().encode(e), n = new globalThis.CompressionStream("gzip"), i = n.writable.getWriter(), a = i.write(t).then(() => i.close()).catch((r = L(function* (e) {
				try {
					yield i.abort(e);
				} catch (e) {}
				throw e;
			}), function(e) {
				return r.apply(this, arguments);
			})), o = new Response(n.readable).blob(), [s] = yield Promise.all([o, a]);
			return yield In(s, t), s;
		} catch (e) {
			if (n != null && n.rethrow) throw e;
			return t && console.error("Failed to gzip compress data", e), null;
		}
		var r;
	}), Ln.apply(this, arguments);
}
function Rn(e, t) {
	if (e == null) return {};
	var n, r, i = function(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
			if (t.includes(r)) continue;
			n[r] = e[r];
		}
		return n;
	}(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; a.length > r; r++) t.includes(n = a[r]) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
var zn = "[redacted]", Bn = /^[A-Za-z0-9+/\n\r]+=*$/, Vn = /^[A-Za-z0-9_-]+={0,2}$/, Hn = /[-_]/, Un = /^data:[^,\s]*;base64,/i, Wn = /^[A-Za-z0-9+/_-]+={0,2}$/, Gn = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g, Kn = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i, qn = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi, Jn = /[\s<>"]/, Yn = new RegExp(qn.source, "i"), Xn = /[a-z][a-z0-9+.-]{0,63}:\/\//i, Zn = RegExp(`^${Xn.source}`, "i"), Qn = new RegExp(Xn.source, "gi"), $n = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i, er = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i, tr = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, nr = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g, rr = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g, ir = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g, ar = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g, or = /\d+/g, sr = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g, cr = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;
function lr(e) {
	return function(e) {
		return Kn.test(e);
	}(e) || $n.test(e) || er.test(e);
}
function ur(e) {
	return e.split("&", 129).length > 128;
}
function dr(e, t, n) {
	return lr(e) || t.includes(";") && function(e) {
		return e.split(";").some((e) => lr(e.split("=", 1)[0]));
	}(t) ? zn : Yn.test(t) ? n ? _r(t, {
		allowNestedUrls: !1,
		stripPunctuation: !0
	}) : zn : t;
}
function fr(e, t) {
	let n = new URLSearchParams(), r = !1, i = !1;
	for (let [a, o] of new URLSearchParams(e)) {
		let e = vr(a), s = vr(o);
		r || (r = e !== a || s !== o);
		let c = dr(e, s, t);
		r || (r = c !== s), i = lr(e) || c !== s, n.append(e, c);
	}
	return {
		changed: r,
		lastFieldSensitive: i,
		serialized: n.toString()
	};
}
function pr(e, t) {
	if (!e.includes("=")) return {
		value: mr(e, t),
		lastFieldSensitive: !1
	};
	let n = fr(e, t);
	return {
		value: n.changed ? n.serialized : e,
		lastFieldSensitive: n.lastFieldSensitive
	};
}
function mr(e, t) {
	return t ? _r(e, {
		allowNestedUrls: !1,
		stripPunctuation: !0
	}) : Yn.test(e) ? zn : e;
}
function hr(e, t, n) {
	return e === "#" ? !t.fragment && (t.fragment = !0) : e === "?" && (t.fragment ? n !== "=" && !t.fragmentQuery && (t.fragmentQuery = !0) : !t.query && (t.query = !0));
}
function gr(e, t) {
	var n;
	if (e.length > 8192 && Zn.test(e)) return zn;
	let { address: r, suffix: i } = t.stripPunctuation ? function(e) {
		let t = e.length;
		for (; t > 0 && ".,;:!?)]}'".includes(e[t - 1]);) t--;
		return {
			address: e.slice(0, t),
			suffix: e.slice(t)
		};
	}(e) : {
		address: e,
		suffix: ""
	}, a;
	try {
		a = new URL(r);
	} catch (e) {
		return zn + i;
	}
	let o = a.search.slice(1), s = a.hash !== "", c = function(e) {
		let t = e.slice(1), n = t.indexOf("?");
		return 0 > n ? {
			head: t,
			tail: null
		} : {
			head: t.slice(0, n),
			tail: t.slice(n + 1)
		};
	}(a.hash);
	if (ur(o) || ur(c.head) || ur((n = c.tail) == null ? "" : n)) return zn + i;
	let l = !1;
	(a.username || a.password) && (a.username = zn, a.password = "", l = !0);
	let u = fr(o, t.allowNestedUrls);
	u.changed && (a.search = u.serialized, l = !0);
	let d = pr(c.head, t.allowNestedUrls), f = c.tail === null ? null : (p = c.tail, d.lastFieldSensitive ? {
		value: p === "" ? "" : zn,
		lastFieldSensitive: !0
	} : pr(p, t.allowNestedUrls));
	var p;
	let m = f === null ? d.value : `${d.value}?${f.value}`;
	m !== a.hash.slice(1) && (a.hash = m, l = !0);
	let h = s ? f == null ? d : f : u;
	return (l ? vr(a.toString()) : r) + (h.lastFieldSensitive ? "" : i);
}
function _r(e, t) {
	return e.replace(qn, (n) => function(e, t) {
		let n = function(e) {
			if (!e.includes("://")) return [];
			let t = [...e.matchAll(Qn)].map((e) => e.index), n = [], r = {
				query: !1,
				fragment: !1,
				fragmentQuery: !1
			}, i = 0, a = !1, o = "";
			for (let s = 0; e.length > s && t.length > i; s++) {
				t[i] === s && (s > 0 && o !== "=" && n.push(s), i++);
				let c = e[s];
				hr(c, r, o) ? (o = c, a = !0) : a && "=&".includes(c) && (o = c);
			}
			return n;
		}(e);
		if (n.length === 0) return gr(e, t);
		let r = "", i = 0;
		for (let a of n) r += gr(e.slice(i, a), V(V({}, t), {}, { stripPunctuation: !1 })), i = a;
		return r + gr(e.slice(i), t);
	}(n, V(V({}, t), {}, { stripPunctuation: t.stripPunctuation && n.length !== e.length })));
}
function vr(e) {
	return e.replace(Gn, zn);
}
function yr(e, t) {
	return function(e) {
		return e.length >= 10240 && (Bn.test(e) || function(e) {
			let t = Un.exec(e);
			if (!t) return !1;
			let n;
			try {
				n = decodeURIComponent(e.slice(t[0].length));
			} catch (e) {
				return !1;
			}
			return Wn.test(n.replace(/[\r\n]/g, ""));
		}(e) || Hn.test(e) && Vn.test(e));
	}(e) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(e, t, n) {
		let r = 4 * n.maxStringLength;
		if (e.length > r) {
			let i = t(e.slice(0, function(e, t) {
				let n = t;
				for (; n > 0 && !Jn.test(e[n - 1]);) n--;
				return n;
			}(e, r)));
			if (i.length >= 2 * n.maxStringLength) return i + n.truncationSuffix;
		}
		return t(e);
	}(e, (e) => function(e) {
		return _r(e, {
			allowNestedUrls: !0,
			stripPunctuation: !0
		});
	}(function(e) {
		let t = e.replace(tr, " ");
		return t = t.replace(nr, zn), t = t.replace(rr, zn), t = t.replace(ir, `$1${zn}`), t = function(e) {
			let t = "", n = 0;
			for (let r = wr(e, 0); r !== null; r = wr(e, r[1])) t += e.slice(n, r[0]) + Tr(e.slice(r[0], r[1])), n = r[1];
			return t + e.slice(n);
		}(t), t = t.replace(ar, zn), t = t.replace(sr, `$1${zn}`), t = t.replace(cr, `$1${zn}`), t;
	}(vr(e))), t);
}
function br(e) {
	let t = 0, n = !1;
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e.charCodeAt(r) - 48;
		if (0 > i || i > 9) return !1;
		n && (i *= 2, i > 9 && (i -= 9)), t += i, n = !n;
	}
	return t % 10 == 0;
}
function xr(e, t) {
	let n = e.charCodeAt(t);
	return n >= 48 && 57 >= n;
}
function Sr(e, t) {
	let n = e.charCodeAt(t);
	return xr(e, t) || n === 95 || n >= 65 && 90 >= n || n >= 97 && 122 >= n;
}
function Cr(e, t) {
	let n = t;
	for (; xr(e, n);) n++;
	return n;
}
function wr(e, t) {
	for (let n = t; e.length > n; n++) {
		if (!xr(e, n) || Sr(e, n - 1)) continue;
		let t = 0, r = -1, i = n;
		for (;;) {
			let n = Cr(e, i);
			if (t += n - i, 13 > t || Sr(e, n) || (r = n), i = n + 1, !" ./-".includes(e.charAt(n)) || !xr(e, i)) break;
		}
		if (r >= 0) return [n, r];
		n = i - 1;
	}
	return null;
}
function Tr(e) {
	let t = [];
	for (let n = or.exec(e); n !== null; n = or.exec(e)) t.push({
		digits: n[0],
		start: n.index,
		end: n.index + n[0].length
	});
	let n = "", r = 0, i = 0;
	for (; t.length > i;) {
		let a = "", o = -1;
		for (let e = i; t.length > e && (a += t[e].digits, 19 >= a.length); e++) a.length >= 13 && br(a) && (o = e);
		0 > o ? i++ : (n += e.slice(r, t[i].start) + zn, r = t[o].end, i = o + 1);
	}
	return n + e.slice(r);
}
var Er = {}.propertyIsEnumerable;
function Dr(e, t) {
	try {
		return Ar(e, t, {
			ancestors: /* @__PURE__ */ new WeakSet(),
			remainingNodes: 1e4
		}, 0);
	} catch (e) {
		return [];
	}
}
function Or(e, t, n, r) {
	if (0 >= n.remainingNodes) return { stringValue: ht };
	if (n.remainingNodes--, ee(e)) return { boolValue: e };
	if (typeof e == "bigint") return function(e, t) {
		let n = e.toString(), r = BigInt("9223372036854775808");
		return e >= r || -r > e ? (t == null || t.debug(`Attribute ${n} is outside the int64 range; encoding it as a string`), { stringValue: n }) : { intValue: n };
	}(e, t);
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return { stringValue: String(e) };
		if (Number.isInteger(e)) {
			if (Number.isSafeInteger(e)) return { intValue: String(e) };
			if (typeof BigInt > "u") return { stringValue: String(e) };
			let n = BigInt(e).toString();
			return e >= 0x8000000000000000 || -0x8000000000000000 > e ? (t == null || t.debug(`Attribute ${n} is outside the int64 range; encoding it as a string`), { stringValue: n }) : { intValue: n };
		}
		return { doubleValue: e };
	}
	if (typeof e == "string") return { stringValue: _t(e) };
	if (typeof e == "function") return { stringValue: "[Function]" };
	if (typeof e == "symbol") return { stringValue: String(e) };
	if (typeof e == "object" && e) {
		if (n.ancestors.has(e)) return { stringValue: "[Circular]" };
		if (r >= 20) return { stringValue: ht };
		if (e instanceof Date) {
			let t = e.getTime(), n = Number.isFinite(t) ? e.toISOString() : String(e);
			return { stringValue: typeof n == "string" ? _t(n) : String(n) };
		}
		n.ancestors.add(e);
		try {
			try {
				let i = e.toJSON;
				if (typeof i == "function") return Or(i.call(e), t, n, r + 1);
			} catch (e) {}
			return T(e) ? { arrayValue: { values: kr(e, t, n, r + 1) } } : { kvlistValue: { values: Ar(e, t, n, r + 1) } };
		} finally {
			n.ancestors.delete(e);
		}
	}
	return { stringValue: _t(String(e)) };
}
function kr(e, t, n, r) {
	let i = [], a = Math.min(e.length, 1e3), o = 0;
	for (; a > o && n.remainingNodes > 0; o++) try {
		let a = o in e ? e[o] : void 0;
		if (N(a)) continue;
		i.push(Or(a, t, n, r));
	} catch (e) {
		i.push({ stringValue: gt });
	}
	return e.length > o && i.push({ stringValue: ht }), i;
}
function Ar(e, t, n, r) {
	let i = [];
	for (let a in e) if (Er.call(e, a)) {
		if (!a) {
			t == null || t.debug("Dropping an attribute with an empty key");
			continue;
		}
		if (i.length >= 1e3 || 0 >= n.remainingNodes) {
			t == null || t.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
			break;
		}
		try {
			let o = e[a];
			if (M(o) || k(o)) continue;
			i.push({
				key: _t(a),
				value: Or(o, t, n, r)
			});
		} catch (e) {
			i.push({
				key: _t(a),
				value: { stringValue: gt }
			});
		}
	}
	return i;
}
function jr(e, t, n) {
	return V(V(V(V({}, vt({}, e.resourceAttributes)), {}, { "service.name": e.serviceName || "unknown_service" }, e.environment && { "deployment.environment": e.environment }), e.serviceVersion && { "service.version": e.serviceVersion }), {}, {
		"telemetry.sdk.name": t,
		"telemetry.sdk.version": n
	});
}
var Mr = [
	"service.name",
	"deployment.environment",
	"service.version",
	"telemetry.sdk.name",
	"telemetry.sdk.version"
];
function Nr(e, t) {
	let n = vt({}, e), r = {};
	for (let e of Mr) ({}).hasOwnProperty.call(n, e) && (r[e] = n[e], delete n[e]);
	return [...Dr(n, t), ...Dr(r, t)];
}
var Pr = {
	darwin: "macOS",
	win32: "Windows",
	cygwin: "Windows",
	linux: "Linux",
	android: "Android",
	freebsd: "FreeBSD",
	openbsd: "OpenBSD",
	netbsd: "NetBSD",
	sunos: "SunOS",
	aix: "AIX",
	haiku: "Haiku",
	"Mac OS X": "macOS"
}, Fr = {
	text: "INFO",
	number: 9
}, Ir = {
	trace: {
		text: "TRACE",
		number: 1
	},
	debug: {
		text: "DEBUG",
		number: 5
	},
	info: Fr,
	warn: {
		text: "WARN",
		number: 13
	},
	error: {
		text: "ERROR",
		number: 17
	},
	fatal: {
		text: "FATAL",
		number: 21
	}
};
function Lr(e) {
	try {
		return _t(String(e));
	} catch (e) {
		return gt;
	}
}
function Rr(e, t, n, r) {
	let { text: i, number: a } = Ir[e.level || "info"] || Fr, o = function(e = Date.now()) {
		return String(e) + "000000";
	}(P(r) ? r : void 0), s = {};
	t.distinctId && (s.posthogDistinctId = t.distinctId), t.sessionId && (s.sessionId = t.sessionId), t.windowId && (s["window.id"] = t.windowId), N(t.sessionStartTimestamp) || (s.sessionStartTimestamp = String(t.sessionStartTimestamp)), N(t.lastActivityTimestamp) || (s.lastActivityTimestamp = String(t.lastActivityTimestamp)), t.currentUrl && (s["url.full"] = t.currentUrl), t.screenName && (s["screen.name"] = t.screenName), t.appState && (s["app.state"] = t.appState), t.activeFeatureFlags && t.activeFeatureFlags.length > 0 && (s.feature_flags = t.activeFeatureFlags);
	let c = V({}, s), l = e.attributes;
	if (l) {
		let e = [];
		try {
			e = Object.keys(l);
		} catch (t) {
			e = [];
		}
		for (let t of e) {
			let e;
			try {
				e = l[t];
			} catch (t) {
				e = gt;
			}
			Object.defineProperty(c, t, {
				value: e,
				enumerable: !0,
				writable: !0,
				configurable: !0
			});
		}
	}
	let u = {
		timeUnixNano: o,
		observedTimeUnixNano: o,
		severityNumber: a,
		severityText: i,
		body: { stringValue: Lr(e.body) },
		attributes: Dr(c, n)
	};
	return e.trace_id && (u.traceId = e.trace_id), e.span_id && (u.spanId = e.span_id), k(e.trace_flags) || (u.flags = e.trace_flags), u;
}
function zr(e, t, n) {
	return jr(e, t, n);
}
function Br(e, t, n, r) {
	return { resourceLogs: [{
		resource: { attributes: Nr(t) },
		scopeLogs: [{
			scope: {
				name: n,
				version: r
			},
			logRecords: e
		}]
	}] };
}
var Vr = class {
	constructor(e) {
		this.ls = e, this.us = 0;
	}
	get pending() {
		return !!this.cs;
	}
	arm(e) {
		this.clear(), this.us = Date.now() + e, this.cs = Et(() => {
			this.cs = void 0, this.ls();
		}, e);
	}
	armNoEarlierThan(e) {
		this.cs && Date.now() + e <= this.us || this.arm(e);
	}
	clear() {
		this.cs && (clearTimeout(this.cs), this.cs = void 0);
	}
};
function Hr() {
	return .75 + .5 * Math.random();
}
function Ur(e, t, n, r) {
	let i = e * 2 ** Math.min(Math.max(0, t - 1), 6);
	return Math.round((r === void 0 ? i : Math.min(i, Math.max(r, e))) * n);
}
var Wr = class {
	constructor(e, t, n, r, i, a = () => Promise.resolve(), o, s = () => !1) {
		var c;
		this._instance = e, this.Br = t, this.R = n, this.hs = r, this.ds = i, this.vs = a, this.fs = o, this.ps = s, this.gs = new Vr(() => this.ys()), this.bs = null, this._s = 0, this.ws = 0, this.ks = null, this.Ss = new bt(), this.xs = 0, this.$s = 1, this.Cs = 0, this.Ts = 0, this.Ms = !1, this.Is = t.maxBufferSize, this.Es = Math.max((c = t.maxQueueSize) == null ? t.maxBufferSize : c, t.maxBufferSize), this.As = t.flushIntervalMs, this.Rs = t.maxBatchRecordsPerPost, this.Ps = t.rateCapWindowMs, this.Os = t.maxLogsPerInterval;
	}
	clearQueue() {
		this.ws++, this._instance.setPersistedProperty(m.LogsQueue, []);
	}
	get throttled() {
		return this.Ss.isOpen();
	}
	reset() {
		this.gs.clear(), this.Cs = 0, this.Ts = 0, this.Ms = !1, this.xs = 0, this.$s = 1, this.Ss.reset(), this.Rs = this.Br.maxBatchRecordsPerPost;
	}
	onReconnect() {
		this.xs = 0, this.$s = 1, this.Ss.isOpen() ? this.Fs() && this.Ls() : this.ys();
	}
	captureLog(e, t) {
		var n;
		if (this._instance.isDisabled || this._instance.optedOut || !(e != null && e.body)) return;
		let r = this.Ds(e);
		if (r === null) return;
		if (!r.body) return void this.R.info("Log was rejected in beforeSend function");
		if (!this.Ns()) return;
		let i = { record: Rr(r, (n = t == null ? void 0 : t.context) == null ? this.hs() : n, this.R, t == null ? void 0 : t.occurredAtMs) };
		this.ds(() => this.js(i));
	}
	Ds(e) {
		let t = this.Br.beforeSend;
		if (!t) return e;
		let n = T(t) ? t : [t], r = e;
		for (let e of n) try {
			let t = e(r);
			if (!t) return this.R.info("Log was rejected in beforeSend function"), null;
			r = t;
		} catch (e) {
			return this.R.error("Error in beforeSend function for log:", e), null;
		}
		return r;
	}
	Ns() {
		if (this.Os === void 0) return !0;
		let e = Date.now(), t = e - this.Cs;
		return this.Ps > t && t >= 0 || (this.Cs = e, this.Ts = 0, this.Ms = !1), this.Os > this.Ts ? (this.Ts++, !0) : (this.Ms || (this.R.warn(`captureLog dropping logs: exceeded ${this.Os} logs per ${this.Ps}ms`), this.Ms = !0), !1);
	}
	flush() {
		var e = this;
		return L(function* () {
			if (!e._instance.isDisabled) return e.bs || (e.bs = e.qs().finally(() => {
				e.bs = null;
			})), e.bs;
		})();
	}
	qs() {
		var e = this;
		return L(function* () {
			var t;
			if (e.gs.clear(), e.Bs()) return;
			let n = (t = e._instance.getPersistedProperty(m.LogsQueue)) == null ? [] : t;
			if (n.length === 0) return;
			let r = n.length, i = 0;
			for (; n.length > 0 && r > i;) {
				var a, o;
				if (e.Bs()) return;
				let t = e.ws;
				e._s = 0;
				let r = Math.min(n.length, e.Rs), s = n.slice(0, r), c = Br(s.map((e) => e.record), e.zs(), (a = e.fs) == null ? e._instance.getLibraryId() : a, e._instance.getLibraryVersion()), l = yield e._instance.Hs(c);
				if (e.ws !== t) return;
				if (l.kind === "too-large" && s.length > 1) e.Rs = Math.max(1, Math.floor(s.length / 2)), e.R.warn(`Logs batch of size ${s.length} was too large for the ingestion endpoint, reducing batch size to ${e.Rs}`);
				else if (e.Ss.record(l), e.gs.pending && e.gs.arm(Math.max(e.As, e.Ss.remainingMs())), l.kind === "retry-later" || (l.kind === "too-large" ? e.R.warn("Dropping a single log record with batch size 1 — the record is larger than the server cap and cannot be split further.") : l.kind === "ok" && e.Br.maxBatchRecordsPerPost > e.Rs && (e.Rs = Math.min(e.Br.maxBatchRecordsPerPost, e.Rs + 1)), yield e.Us(s.length), n = (o = e._instance.getPersistedProperty(m.LogsQueue)) == null ? [] : o, i += s.length, l.kind === "fatal")) throw l.error;
			}
		})();
	}
	Bs() {
		return !!this.ps() && (this.Fs() && this.clearQueue(), !0);
	}
	Us(e) {
		var t = this;
		return L(function* () {
			var n;
			let r = Math.max(0, e - t._s), i = (n = t._instance.getPersistedProperty(m.LogsQueue)) == null ? [] : n;
			t._instance.setPersistedProperty(m.LogsQueue, i.slice(r)), yield t.vs();
		})();
	}
	zs() {
		return zr(this.Br, this._instance.getLibraryId(), this._instance.getLibraryVersion());
	}
	js(e) {
		var t;
		if (this._instance.optedOut) return;
		let n = (t = this._instance.getPersistedProperty(m.LogsQueue)) == null ? [] : t;
		this.Es > n.length || (n.shift(), this._s++, this.R.info("Logs queue is full, dropping oldest record.")), n.push(e), this._instance.setPersistedProperty(m.LogsQueue, n), this.Is > n.length || this.Ss.isOpen() ? this.Ls() : this.ys();
	}
	Ls() {
		this.gs.pending || this.gs.arm(Math.max(this.As, this.Ss.remainingMs()));
	}
	Ws() {
		return Math.max(Ur(this.As, this.xs, this.$s, 3e4), this.Ss.remainingMs());
	}
	Fs() {
		let e = this._instance.getPersistedProperty(m.LogsQueue);
		return !!e && e.length > 0;
	}
	shutdown(e) {
		var t = this;
		return L(function* () {
			t.gs.clear();
			let n = t.flush().catch(() => {});
			e === void 0 ? yield n : yield Dt(n, e);
		})();
	}
	flushWithTimeout(e) {
		var t = this;
		return L(function* () {
			let n = t.flush();
			yield Dt(n, e, () => {
				n.catch(() => {});
			});
		})();
	}
	flushInBackground() {
		if (this.ks) return this.ks;
		let e = this.flush().then(() => {
			this.xs = 0, this.$s = 1;
		}, (e) => {
			this.xs++, this.$s = Hr(), this.R.error("PostHog logs flush failed:", e);
		}).finally(() => {
			this.ks === e && (this.ks = null), !this._instance.isDisabled && this.Fs() && this.gs.armNoEarlierThan(this.Ws());
		});
		return this.ks = e, e;
	}
	ys() {
		this.flushInBackground();
	}
}, Gr = /^[0-9a-f]+$/;
function Kr(e, t, n) {
	return typeof e == "string" && e.length === t && e !== n && Gr.test(e);
}
var qr = /^([0-9a-f]{2})-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})(-.*)?$/, Jr = "00", Yr = [
	0,
	5,
	10,
	25,
	50,
	75,
	100,
	250,
	500,
	750,
	1e3,
	2500,
	5e3,
	7500,
	1e4
];
function Xr(e) {
	return String(e) + "000000";
}
function Zr(e, t, n, r) {
	let i = "";
	return r && (i = Object.keys(r).sort().map((e) => `${JSON.stringify(e)}:${JSON.stringify(r[e])}`).join(",")), `${e}\0${t}\0${n == null ? "" : n}\0${i}`;
}
var Qr = class {
	constructor(e, t, n) {
		this._instance = e, this.Br = t, this.R = n, this.Gs = /* @__PURE__ */ new Map(), this.gs = new Vr(() => this.flush().catch((e) => {
			this.R.error("Metrics flush failed:", e);
		})), this.bs = null, this.Vs = null, this.Qs = !1, this.Js = /* @__PURE__ */ new Map(), this.Zs = /* @__PURE__ */ new Set(), this.Ks = /* @__PURE__ */ new Map(), this.Ys = /* @__PURE__ */ new Set(), this.Xs = !1, this.Ss = new bt(), this.xs = 0, this.$s = 1, this.$o = 0;
	}
	count(e, t = 1, n) {
		this.To({
			name: e,
			type: "count",
			value: t,
			unit: n == null ? void 0 : n.unit,
			attributes: n == null ? void 0 : n.attributes
		});
	}
	gauge(e, t, n) {
		this.To({
			name: e,
			type: "gauge",
			value: t,
			unit: n == null ? void 0 : n.unit,
			attributes: n == null ? void 0 : n.attributes
		});
	}
	histogram(e, t, n) {
		this.To({
			name: e,
			type: "histogram",
			value: t,
			unit: n == null ? void 0 : n.unit,
			attributes: n == null ? void 0 : n.attributes,
			bounds: T(n == null ? void 0 : n.bounds) ? n.bounds.slice() : n == null ? void 0 : n.bounds
		});
	}
	flush() {
		var e = this;
		let t = this.bs, n = function() {
			var n = L(function* () {
				t && (yield t.catch(() => {})), yield e.Mo();
			});
			return function() {
				return n.apply(this, arguments);
			};
		}()().finally(() => {
			this.bs === n && (this.bs = null);
		});
		return this.bs = n, n;
	}
	flushCoalesced() {
		var e, t;
		return this.Io() ? (e = this.bs) == null ? Promise.resolve() : e : (this.Vs || (this.Vs = ((t = this.bs) == null ? Promise.resolve() : t).catch(() => {}).then(() => (this.Vs = null, this.Io() ? void 0 : this.flush()))), this.Vs);
	}
	Io() {
		return this.xs > 0 || this.Ss.remainingMs() > 0;
	}
	drainWindow() {
		if (this.Gs.size === 0) return null;
		let e = this.Gs;
		return this.Eo(), this.Ao(e);
	}
	reset() {
		this.$o++, this.Ss.reset(), this.xs = 0, this.$s = 1, this.gs.clear(), this.bs = null, this.Vs = null, this.Eo(), this.Ks = /* @__PURE__ */ new Map(), this.Xs = !1;
	}
	Eo() {
		this.Gs = /* @__PURE__ */ new Map(), this.Qs = !1, this.Js = /* @__PURE__ */ new Map(), this.Zs = /* @__PURE__ */ new Set(), this.Ys = /* @__PURE__ */ new Set();
	}
	To(e) {
		if (this._instance.isDisabled || this._instance.optedOut) return;
		let t = this.Ds(e);
		if (t === null) return;
		if (!t.name || typeof t.name != "string") return void this.R.warn("Dropping metric with empty name");
		if (typeof t.value != "number" || !Number.isFinite(t.value)) return void this.R.warn(`Dropping metric '${t.name}': value must be a finite number`);
		if (t.type !== "count" && t.type !== "gauge" && t.type !== "histogram") return void this.R.warn(`Dropping metric '${t.name}': unknown type '${String(t.type)}'`);
		if (t.type === "count" && 0 > t.value) return void this.R.warn(`Dropping count '${t.name}': counters are monotonic, value must be >= 0`);
		let n, r;
		try {
			n = t.attributes ? V({}, t.attributes) : void 0, r = Zr(t.type, t.name, t.unit, n);
		} catch (e) {
			this.R.warn(`Dropping metric '${t.name}': attributes could not be serialized`, e);
			return;
		}
		let i, a = this.Gs.get(r);
		if (!a && !this.Ro() || t.type === "histogram" && (i = this.Po(t.name, t.unit, t.bounds), !i)) return;
		a || (a = {
			name: t.name,
			type: t.type,
			unit: t.unit,
			attributes: n,
			windowStartMs: Date.now(),
			hist: i && ei(i)
		}, this.Gs.set(r, a));
		let o = this.Js.get(t.name);
		o === void 0 ? this.Js.set(t.name, t.type) : o === t.type || this.Zs.has(t.name) || (this.Zs.add(t.name), this.R.warn(`Metric name '${t.name}' is already used as a ${o}; recording it as a ${t.type} too will blend both series in charts. Use a distinct name.`)), this.Oo(a, t.value);
		let s = this.Fo();
		s && (a.exemplar = V(V({}, s), {}, {
			value: t.value,
			timeMs: Date.now()
		})), this.Ls();
	}
	Fo() {
		try {
			var e, t;
			let n = function(e) {
				let t = function(e) {
					if (typeof e != "string") return;
					let t = qr.exec(e.trim());
					if (!t) return;
					let [, n, r, i, a, o] = t;
					return n === "ff" || n === "00" && o || !function(e) {
						return Kr(e, 32, "00000000000000000000000000000000");
					}(r) || !function(e) {
						return Kr(e, 16, "0000000000000000");
					}(i) ? void 0 : {
						version: n,
						traceId: r,
						spanId: i,
						flags: a
					};
				}(e);
				return t && {
					traceId: t.traceId,
					spanId: t.spanId,
					flags: (n = t.flags, 1 & parseInt(n, 16) ? "01" : Jr)
				};
				var n;
			}((e = (t = this._instance).getActiveSpan) == null || (e = e.call(t)) == null ? void 0 : e.traceparent());
			if (n && n.flags === "01") return {
				traceId: n.traceId,
				spanId: n.spanId
			};
		} catch (e) {}
	}
	Ro() {
		return this.Br.maxSeriesPerFlush > this.Gs.size || (this.Qs || (this.Qs = !0, this.R.warn(`Metric series cap reached (${this.Br.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1);
	}
	Po(e, t, n) {
		if (n !== void 0 && !function(e) {
			if (!T(e) || e.length === 0) return !1;
			for (let t = 0; e.length > t; t++) if (!Number.isFinite(e[t]) || t > 0 && e[t - 1] >= e[t]) return !1;
			return !0;
		}(n)) return void this.R.warn(`Dropping histogram '${e}': bounds must be a non-empty array of finite, strictly increasing numbers`);
		let r = Zr("histogram", e, t, void 0), i = this.Ks.get(r);
		if (i) return this.Lo(e, r, i, n), i;
		if (this.Ks.size >= this.Br.maxSeriesPerFlush) return this.Xs || (this.Xs = !0, this.R.warn(`Histogram bounds limit reached (${this.Br.maxSeriesPerFlush} distinct histograms); new histograms that pass custom bounds are dropped. Reduce histogram name cardinality.`)), n && !$r(n, Yr) ? void 0 : Yr;
		let a = n ? n.slice() : Yr;
		return this.Ks.set(r, a), a;
	}
	Lo(e, t, n, r) {
		$r(n, r == null ? Yr : r) || this.Ys.has(t) || (this.Ys.add(t), this.R.warn(`Histogram '${e}' already uses the bounds [${n.join(", ")}]; samples that pass different bounds are recorded in those buckets.`));
	}
	Oo(e, t) {
		switch (e.type) {
			case "count":
				var n;
				e.total = ((n = e.total) == null ? 0 : n) + t;
				break;
			case "gauge":
				e.last = t;
				break;
			case "histogram": {
				let n = e.hist;
				n.count += 1, n.sum += t, n.min = Math.min(n.min, t), n.max = Math.max(n.max, t), n.bucketCounts[function(e, t) {
					for (let n = 0; t.length > n; n++) if (t[n] >= e) return n;
					return t.length;
				}(t, n.bounds)] += 1;
				break;
			}
		}
	}
	Ds(e) {
		let t = this.Br.beforeSend;
		if (!t) return e;
		let n = T(t) ? t : [t], r = e;
		for (let e of n) try {
			let t = e(r);
			if (!t) return this.R.info("Metric was rejected in beforeSend function"), null;
			r = t;
		} catch (e) {
			return this.R.error("Error in beforeSend function for metric:", e), null;
		}
		return r;
	}
	Ls() {
		this.gs.pending || this.gs.arm(this.Ws());
	}
	Ws() {
		return Math.max(Ur(this.Br.flushIntervalMs, this.xs, this.$s, 3e4), this.Ss.remainingMs());
	}
	Mo() {
		var e = this;
		return L(function* () {
			if (e.gs.clear(), e.Gs.size === 0) return;
			let t = e.Gs;
			e.Eo();
			let n = e.$o, r = yield e._instance.Do(e.Ao(t));
			if (n === e.$o) switch (e.Ss.record(r), r.kind === "retry-later" ? (e.xs++, e.$s = Hr()) : (e.xs = 0, e.$s = 1), e.gs.pending && e.gs.arm(e.Ws()), r.kind) {
				case "ok": return;
				case "retry-later":
					e.No(t), e.gs.armNoEarlierThan(e.Ws());
					return;
				case "too-large":
					e.R.warn("Metrics batch exceeded the server size limit and was dropped");
					return;
				case "fatal":
					e.R.error("Failed to send metrics batch:", r.error);
					return;
			}
		})();
	}
	Ao(e) {
		return t = this.jo(e), n = function(e, t, n) {
			return jr(e, t, n);
		}(this.Br, this._instance.getLibraryId(), this._instance.getLibraryVersion()), r = this._instance.getLibraryId(), i = this._instance.getLibraryVersion(), { resourceMetrics: [{
			resource: { attributes: Nr(n) },
			scopeMetrics: [{
				scope: {
					name: r,
					version: i
				},
				metrics: t
			}]
		}] };
		var t, n, r, i;
	}
	jo(e) {
		let t = Xr(Date.now()), n = /* @__PURE__ */ new Map();
		for (let o of e.values()) {
			var r;
			let e = Zr(o.type, o.name, o.unit, void 0), s = n.get(e);
			s || (s = V({ name: o.name }, o.unit && { unit: o.unit }), o.type === "count" ? s.sum = {
				aggregationTemporality: 1,
				isMonotonic: !0,
				dataPoints: []
			} : o.type === "gauge" ? s.gauge = { dataPoints: [] } : s.histogram = {
				aggregationTemporality: 1,
				dataPoints: []
			}, n.set(e, s));
			let c = Dr((r = o.attributes) == null ? {} : r, this.R), l = Xr(o.windowStartMs), u = ti(o.exemplar);
			if (o.type === "count") {
				var i;
				let e = V({
					attributes: c,
					startTimeUnixNano: l,
					timeUnixNano: t,
					asDouble: (i = o.total) == null ? 0 : i
				}, u);
				s.sum.dataPoints.push(e);
			} else if (o.type === "gauge") {
				var a;
				let e = V({
					attributes: c,
					timeUnixNano: t,
					asDouble: (a = o.last) == null ? 0 : a
				}, u);
				s.gauge.dataPoints.push(e);
			} else {
				let e = o.hist, n = V({
					attributes: c,
					startTimeUnixNano: l,
					timeUnixNano: t,
					count: e.count,
					sum: e.sum,
					min: e.min,
					max: e.max,
					bucketCounts: e.bucketCounts,
					explicitBounds: e.bounds
				}, u);
				s.histogram.dataPoints.push(n);
			}
		}
		return Array.from(n.values());
	}
	No(e) {
		for (let [i, a] of e) {
			var t;
			let e = this.Gs.get(i);
			if (e) switch (e.windowStartMs = Math.min(e.windowStartMs, a.windowStartMs), e.exemplar = (t = e.exemplar) == null ? a.exemplar : t, e.type) {
				case "count":
					var n, r;
					e.total = ((n = e.total) == null ? 0 : n) + ((r = a.total) == null ? 0 : r);
					break;
				case "gauge": break;
				case "histogram": {
					let t = e.hist, n = a.hist;
					t.count += n.count, t.sum += n.sum, t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max);
					for (let e = 0; t.bucketCounts.length > e; e++) t.bucketCounts[e] += n.bucketCounts[e];
					break;
				}
			}
			else this.Ro() && this.Gs.set(i, a);
		}
	}
};
function $r(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; e.length > n; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function ei(e) {
	return {
		bounds: e,
		count: 0,
		sum: 0,
		min: Infinity,
		max: -Infinity,
		bucketCounts: Array(e.length + 1).fill(0)
	};
}
function ti(e) {
	return e ? { exemplars: [{
		filteredAttributes: [],
		timeUnixNano: Xr(e.timeMs),
		asDouble: e.value,
		traceId: e.traceId,
		spanId: e.spanId
	}] } : {};
}
var ni = (e, { debugEnabled: t } = {}) => {
	let n = {
		N(n, ...r) {
			let i;
			try {
				i = typeof window > "u" ? void 0 : window;
			} catch (e) {
				return;
			}
			i && (p.DEBUG || i.POSTHOG_DEBUG || t) && !k(i.console) && i.console && ("__rrweb_original__" in i.console[n] ? i.console[n].__rrweb_original__ : i.console[n])(e, ...r);
		},
		debug(...e) {
			n.N("debug", ...e);
		},
		info(...e) {
			n.N("log", ...e);
		},
		warn(...e) {
			n.N("warn", ...e);
		},
		error(...e) {
			n.N("error", ...e);
		},
		critical(...t) {
			console.error(e, ...t);
		},
		uninitializedWarning(e) {
			n.error(`You must initialize PostHog before calling ${e}`);
		},
		createLogger: (t, n) => ni(`${e} ${t}`, n)
	};
	return n;
}, H = ni("[PostHog.js]"), U = (e, t) => H.createLogger(e, t), ri = {
	"conversations.js": "sha384-oAejv5s/09pcsJfgqP1jymjv5fl8GEw6mZI8YBQOOJ2DYc7vQUqFajQ6u/afuVBn",
	"crisp-chat-integration.js": "sha384-qVSPPiM5PHJlVNpiLPyETnf0VXOGevtCqjm2K8EmWnKpLQnY/TMu+iLJ8wWLW8iA",
	"dead-clicks-autocapture.js": "sha384-+WOUHLYfulxlnu9CZVlOAeJv3+4bn45d4fioYdJUuzaoiM8ax0ht8QX40J2Fp14f",
	"exception-autocapture.js": "sha384-F/fSZE+cj7O//TRJ+JCQlJGTD5o2XBCDsPXuE1eA7HcBSkFklSQFzyOt2eKBo+iL",
	"intercom-integration.js": "sha384-gWEoUxf+HEPSZ4GZthxep/3LlEectgXxzj8uWkW7dnvRRV6AKkHXtZEmcb0OqOvn",
	"lazy-recorder.js": "sha384-+SHUN/zCSEpZKF6MIx9ArzWQ0vET29Xl7kVpiH5PhyGLjXPaZNJXVGb0g4VCm9Ni",
	"logs.js": "sha384-HGXa+FeVH5JwY3bwubM1EJrP+LG95rh6oU9TbtzHZLs1ECpl5mCXv5FcYF8SgNjk",
	"product-tours.js": "sha384-AxPSB2uUloFM3lwE+tuKuG8hqbz1Kq5RslkgQWrrkBHSCvYp583FcRWgIE6Kwj+M",
	"recorder.js": "sha384-88LswkBOqtAt/RoXzLE7k7Mu58QaEmmnL+18tkw1RT7WaOZPxnbzUoMnHBC+TsPB",
	"surveys.js": "sha384-mkj77uCxsKE5Amwl3eZ7LosN2XerRQgrshLqCYc2al5OjbkCUqr93M8bSNBnjV7d",
	"tracing-headers.js": "sha384-kiUbaGGMgA6klTPefqr6nHeeTCejdA62XyCxqOySP2gLNe+wl/TDX0KflMiSMNJ2",
	"web-vitals-soft-navs.js": "sha384-recN8i2tLQWaeNtCAnErAmFlgg4+33FAHvs8l84aE+SHr6oqLAPwhFVZdP4SfKT6",
	"web-vitals-with-attribution-soft-navs.js": "sha384-f9L4YQQre9lKeUzyvy2Kt4dHLIXECipeMmbr7SPQAOqLi+ZCHbh1I1g/OwsK/zrp",
	"web-vitals-with-attribution.js": "sha384-QVSLDmgzPE1K6g6gBB8QKx/YDQbI2ot0gAcajFIAkGf34SWA3oe6m+WzcmbzpVjD",
	"web-vitals.js": "sha384-wNvgQ2MIesvfVwpUOblaIO/5weiMjR0Ld1eSNtW14MURV24BwfW8Svo6TsBJ3Bk9"
}, ii = /^sha384-[A-Za-z0-9+/]{64}$/, ai, oi = (e) => {
	var t;
	return e != null && e.config.require_subresource_integrity ? e.__loadExternalDependency : (t = d.__PosthogExtensions__) == null ? void 0 : t.loadExternalDependency;
}, si = U("[ExternalScriptsLoader]"), ci = (e) => {
	let t = r == null ? void 0 : r.querySelectorAll("script");
	if (t) {
		for (let n = 0; t.length > n; n++) if (t[n].src === e || t[n].getAttribute("src") === e) return t[n];
	}
}, li = (e, t, n) => {
	n ? si.critical(t) : si.warn(t), e(t);
}, ui = (e, t, n, i) => {
	if (e.config.disable_external_dependency_loading) return si.warn(`${t} was requested but loading of external scripts is disabled.`), n("Loading of external scripts is disabled");
	let a = () => {
		if (r == null || r.removeEventListener("DOMContentLoaded", a), e.config.disable_external_dependency_loading) return n("Loading of external scripts is disabled");
		if (!r) return n("document not found");
		let s = r.createElement("script");
		if (s.type = "text/javascript", s.crossOrigin = "anonymous", i && (s.integrity = i), s.src = t, s.onload = (e) => {
			s.__posthog_loading_callback_fired = !0, n(void 0, e);
		}, s.onerror = (e) => {
			s.__posthog_loading_error = e, n(e);
		}, e.config.prepare_external_dependency_script && (s = e.config.prepare_external_dependency_script(s)), !s) return n("prepare_external_dependency_script returned null");
		if (i && (!s.src || s.integrity !== i || s.crossOrigin !== "anonymous")) return li(n, `prepare_external_dependency_script must keep src, integrity and crossOrigin 'anonymous' for ${t}`, !0);
		if (e.config.disable_external_dependency_loading) return n("Loading of external scripts is disabled");
		let c = ci(s.src);
		if (c) {
			if (c.integrity !== s.integrity || c.crossOrigin !== s.crossOrigin || c.nonce !== s.nonce) return n("Existing script conflicts with prepared script policy");
			if (c.__posthog_loading_callback_fired) return n();
			let e = c.__posthog_loading_error;
			return e ? n(e) : (c.addEventListener("load", (e) => {
				c.__posthog_loading_callback_fired = !0, n(void 0, e);
			}), void c.addEventListener("error", (e) => {
				c.__posthog_loading_error = e, n(e);
			}));
		}
		if (!r.body) return o();
		if (e.config.external_scripts_inject_target === "head") r.head.appendChild(s);
		else {
			let e = r.querySelectorAll("body > script");
			var l;
			e.length > 0 ? (l = e[0].parentNode) == null || l.insertBefore(s, e[0]) : r.body.appendChild(s);
		}
	}, o = () => {
		r == null || r.addEventListener("DOMContentLoaded", a);
	};
	r != null && r.body || ci(t) ? a() : o();
}, di = {}, fi = (e, t) => {
	let n = `/static/${t}.js?v=${e.version}`;
	if (t === "toolbar") {
		let e = 3e5;
		n = `${n}&t=${Math.floor(Date.now() / e) * e}`;
	}
	return e.requestRouter.endpointFor("assets", n);
};
d.__PosthogExtensions__ = d.__PosthogExtensions__ || {};
var pi = (e, t, n) => {
	if (e.config.require_subresource_integrity) {
		if (t === "remote-config" || t === "toolbar") return li(n, `${t} can't be integrity-verified, so it is not loaded with require_subresource_integrity`);
		if (!r || !("integrity" in r.createElement("script"))) return li(n, "This browser does not support Subresource Integrity", !0);
		let i = `${t}.js`, a = ri[i];
		return A(a) && ii.test(a) ? void ui(e, e.requestRouter.endpointFor("assets", `/static/${e.version}/${i}`), n, a) : li(n, `No integrity hash for ${i}`, !0);
	}
	if (t === "remote-config") {
		ui(e, e.requestRouter.endpointFor("assets", `/array/${e.config.token}/config.js`), n);
		return;
	}
	let i = e.config.strict_script_versioning;
	if (i) {
		let r = e.requestRouter.endpointFor("assets", `/static/${e.version}/${t}.js`), a = di[r];
		if (i === "fallback" && a) {
			if (ci(a)) return void ui(e, a, n);
			delete di[r];
		}
		ui(e, r, i === "fallback" ? (i, a) => {
			if (i) if (typeof i == "string") n(i);
			else {
				var o;
				let i = fi(e, t);
				di[r] = i;
				let a = ci(r);
				a == null || (o = a.parentNode) == null || o.removeChild(a), ui(e, i, n);
			}
			else n(void 0, a);
		} : n);
		return;
	}
	ui(e, fi(e, t), n);
};
ai = pi, d.__PosthogExtensions__.loadExternalDependency = pi, d.__PosthogExtensions__.loadSiteApp = (e, t, n) => {
	if (e.config.require_subresource_integrity) return li(n, `Site apps can't be integrity-verified, so ${t} is not loaded with require_subresource_integrity`);
	ui(e, e.requestRouter.endpointFor("api", t), n);
}, p.DEBUG = !1, p.LIB_VERSION = "1.454.2", p.LIB_NAME = "web";
var mi = p, hi = "$early_access_features", gi = "$active_feature_flags", _i = "$feature_flag_details", vi = "$feature_flag_errors", yi = "$feature_flag_evaluated_at", bi = "$feature_flag_request_id", xi = "$minimal_flag_called_events", Si = "$enabled_feature_flags", Ci = "$stored_group_properties", wi = "$stored_person_properties", Ti = "$flag_call_reported", Ei = "$flag_call_reported_session_id", Di = "$feature_flag_payloads", Oi = "$override_feature_flags", ki = "$override_feature_flag_payloads", Ai = "visibilitychange", ji = "$autocapture_disabled_server_side", Mi = "$surveys", Ni = "$surveys_loaded_at", Pi = "PostHog loadExternalDependency extension not found.", Fi = "$surveys_activated", Ii = "$surveys_activated_session", Li = "$surveys_activated_timestamps", Ri = "$people_distinct_id", zi = "distinct_id", Bi = "$device_id", Vi = "$device_model", Hi = "__alias", Ui = "__cmpns", Wi = "$fbc", Gi = "$fbc_persistence", Ki = "$fbp", qi = "$fbp_persistence", Ji = "__timers", Yi = "$heatmaps_enabled_server_side", Xi = "$exception_capture_enabled_server_side", Zi = "$error_tracking_suppression_rules", Qi = "$error_tracking_capture_extension_exceptions", $i = "$web_vitals_enabled_server_side", ea = "$dead_clicks_enabled_server_side", ta = "$product_tours_enabled_server_side", na = "$logs_capture_enabled_server_side", ra = "$web_vitals_allowed_metrics", ia = "$session_recording_remote_config", aa = "$session_recording_enabled_server_side", oa = "$replay_sample_rate", sa = "$replay_override_sampling", ca = "$replay_override_linked_flag", la = "$replay_override_url_trigger", ua = "$replay_override_event_trigger", da = "$sesid", fa = "$session_is_sampled", pa = "$session_past_minimum_duration", ma = "$session_recording_url_trigger_activated_session", ha = "$session_recording_event_trigger_activated_session", ga = "$debug_first_full_snapshot_timestamp", _a = "$sess_rec_flush_size", va = "$groups", ya = "ph_product_tours", ba = "$product_tours_activated", xa = "$product_tours_activated_session", Sa = "$conversations_widget_session_id", Ca = "$conversations_ticket_id", wa = "$conversations_widget_state", Ta = "$conversations_user_traits", Ea = "$user_state", Da = "$client_session_props", Oa = "$capture_rate_limit", ka = "$initial_campaign_params", Aa = "$initial_referrer_info", ja = "$initial_person_info", Ma = "$epp", Na = "$posthog_cookieless", Pa = "$cookieless_mode", Fa = "$sdk_debug_extensions_init_method", Ia = "$sdk_debug_extensions_init_time_ms", La = "$sdk_debug_recording_script_not_loaded", Ra = "$sdk_debug_replay_stale_config", za = "$sdk_debug_replay_event_trigger_status", Ba = "$sdk_debug_replay_linked_flag_trigger_status", Va = "$sdk_debug_replay_matched_recording_trigger_groups", Ha = "$sdk_debug_replay_pending_trigger_conditions", Ua = "$sdk_debug_replay_remote_trigger_matching_config", Wa = "$sdk_debug_replay_trigger_groups_count", Ga = "$sdk_debug_replay_url_trigger_status", Ka = "$session_recording_start_reason", qa = "anonymous", Ja = "identified", Ya = "identified_only", Xa = "beforeunload", Za = "$pageview", Qa = "$pageleave", $a = "$identify", eo = "$groupidentify";
function to(e, t) {
	T(e) && e.forEach(t);
}
function W(e, t) {
	if (!N(e)) if (T(e)) e.forEach(t);
	else if (((e) => e instanceof FormData)(e)) e.forEach((e, n) => t(e, n));
	else for (let n in e) C.call(e, n) && t(e[n], n);
}
var G = function(e, ...t) {
	for (let n of t) for (let t in n) n[t] !== void 0 && (e[t] = n[t]);
	return e;
};
function no(e) {
	let t = Object.keys(e), n = t.length, r = Array(n);
	for (; n--;) r[n] = [t[n], e[t[n]]];
	return r;
}
var ro = function(e) {
	return function(...t) {
		try {
			return e.apply(this, t);
		} catch (e) {
			H.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), H.critical(e);
		}
	};
}, io = function(e) {
	let t = {};
	return W(e, function(e, n) {
		(A(e) && e.length > 0 || P(e)) && (t[n] = e);
	}), t;
};
function ao(e) {
	let t = V({}, e);
	for (let n of [
		"name",
		"message",
		"stack",
		"cause",
		"errors"
	]) try {
		n in e && (t[n] = e[n]);
	} catch (e) {}
	return t;
}
var oo = [
	"herokuapp.com",
	"vercel.app",
	"netlify.app"
];
function so(e) {
	let t = e == null ? void 0 : e.hostname;
	if (!A(t)) return !1;
	let n = t.split(".").slice(-2).join(".");
	for (let e of oo) if (n === e) return !1;
	return !0;
}
function K(e, t, n, r) {
	let { capture: i = !1, passive: a = !0 } = r == null ? {} : r;
	e == null || e.addEventListener(t, n, {
		capture: i,
		passive: a
	});
}
function co(e) {
	return e.name === "ph_toolbar_internal";
}
var lo = (e) => {
	if (r) {
		try {
			let t = e + "=", n = r.cookie.split(";").filter((e) => e.length);
			for (let e = 0; n.length > e; e++) {
				let r = n[e];
				for (; r.charAt(0) == " ";) r = r.substring(1, r.length);
				if (r.indexOf(t) === 0) return decodeURIComponent(r.substring(t.length, r.length));
			}
		} catch (e) {}
		return null;
	}
}, uo = class e {
	constructor(e) {
		if (this.bytes = e, e.length !== 16) throw TypeError("not 128-bit length");
	}
	static fromFieldsV7(t, n, r, i) {
		if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || 0 > t || 0 > n || 0 > r || 0 > i || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295) throw RangeError("invalid field value");
		let a = /* @__PURE__ */ new Uint8Array(16);
		return a[0] = t / 2 ** 40, a[1] = t / 2 ** 32, a[2] = t / 2 ** 24, a[3] = t / 2 ** 16, a[4] = t / 256, a[5] = t, a[6] = 112 | n >>> 8, a[7] = n, a[8] = 128 | r >>> 24, a[9] = r >>> 16, a[10] = r >>> 8, a[11] = r, a[12] = i >>> 24, a[13] = i >>> 16, a[14] = i >>> 8, a[15] = i, new e(a);
	}
	toString() {
		let e = "";
		for (let t = 0; this.bytes.length > t; t++) e = e + (this.bytes[t] >>> 4).toString(16) + (15 & this.bytes[t]).toString(16), t !== 3 && t !== 5 && t !== 7 && t !== 9 || (e += "-");
		if (e.length !== 36) throw Error("Invalid UUIDv7 was generated");
		return e;
	}
	clone() {
		return new e(this.bytes.slice(0));
	}
	equals(e) {
		return this.compareTo(e) === 0;
	}
	compareTo(e) {
		for (let t = 0; 16 > t; t++) {
			let n = this.bytes[t] - e.bytes[t];
			if (n !== 0) return Math.sign(n);
		}
		return 0;
	}
}, fo = class {
	generate() {
		let e = this.generateOrAbort();
		if (!k(e)) return e;
		{
			this.Mt = 0;
			let e = this.generateOrAbort();
			if (k(e)) throw Error("Could not generate UUID after timestamp reset");
			return e;
		}
	}
	generateOrAbort() {
		let e = (() => {
			let e = Date.now();
			return P(e) && isFinite(e) ? Math.min(Math.max(Math.floor(e), 0), 0xffffffffffff) : 0;
		})();
		if (e > this.Mt) this.Mt = e, this.Tt();
		else {
			if (this.Mt >= e + 1e4) return;
			this.It++, this.It > 4398046511103 && (this.Mt++, this.Tt());
		}
		return uo.fromFieldsV7(this.Mt, Math.trunc(this.It / 2 ** 30), this.It & 2 ** 30 - 1, this.At.nextUint32());
	}
	Tt() {
		this.It = 1024 * this.At.nextUint32() + (1023 & this.At.nextUint32());
	}
	constructor() {
		this.Mt = 0, this.It = 0, this.At = new ho();
	}
}, po = (e) => {
	if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
	for (let t = 0; e.length > t; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
	return e;
}, mo, ho = class {
	nextUint32() {
		var e;
		return this.Rt.length > this.Et || (((e = mo) == null ? mo = "u" > typeof window && !k(window.crypto) && crypto.getRandomValues ? (e) => {
			try {
				return crypto.getRandomValues(e);
			} catch (t) {
				return po(e);
			}
		} : po : e)(this.Rt), this.Et = 0), this.Rt[this.Et++];
	}
	constructor() {
		this.Rt = /* @__PURE__ */ new Uint32Array(8), this.Et = Infinity;
	}
}, go, _o = () => vo().toString(), vo = () => (go || (go = new fo())).generate(), yo = "", bo = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i, xo = null, q = {
	Ot() {
		if (!M(xo)) return xo;
		if (xo = !1, r) try {
			let e = `__ph_cookie_support_${_o()}`;
			q.$t(e, "xyz"), xo = lo(e) === "\"xyz\"", q.Dt(e);
		} catch (e) {
			xo = !1;
		}
		return xo;
	},
	Ft(e) {
		H.error("cookieStore error: " + e);
	},
	Lt: lo,
	Pt(e) {
		let t;
		try {
			t = JSON.parse(q.Lt(e)) || {};
		} catch (e) {}
		return t;
	},
	$t(e, t, n, i, a) {
		if (!r) return !1;
		try {
			let o = "", s = "", c = function(e, t) {
				if (t) {
					let t = function(e, t = r) {
						if (yo) return yo;
						if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
						let n = e.split("."), i = Math.min(n.length, 8), a = "dmn_chk_" + _o();
						for (; !yo && i--;) {
							let e = n.slice(i).join("."), r = a + "=1;domain=." + e + ";path=/";
							t.cookie = r + ";max-age=3", t.cookie.includes(a) && (t.cookie = r + ";max-age=0", yo = e);
						}
						return yo;
					}(e);
					if (!t) {
						let n = ((e) => {
							let t = e.match(bo);
							return t ? t[0] : "";
						})(e);
						n !== t && H.info("Warning: cookie subdomain discovery mismatch", n, t), t = n;
					}
					return t ? "; domain=." + t : "";
				}
				return "";
			}(r.location.hostname, i);
			if (n) {
				let e = /* @__PURE__ */ new Date();
				e.setTime(e.getTime() + 864e5 * n), o = "; expires=" + e.toUTCString();
			}
			a && (s = "; secure");
			let l = e + "=" + encodeURIComponent(JSON.stringify(t)) + o + "; SameSite=Lax; path=/" + c + s;
			return l.length > 3686.4 && H.warn("cookieStore warning: large cookie, len=" + l.length), r.cookie = l, !0;
		} catch (e) {
			return !1;
		}
	},
	Dt(e, t) {
		if (r != null && r.cookie && (!t || !M(lo(e)))) try {
			q.$t(e, "", -1, t);
		} catch (e) {
			return;
		}
	}
}, So = null, J = {
	Ot() {
		if (!M(So)) return So;
		let t = !0;
		if (k(e)) t = !1;
		else try {
			let e = "__mplssupport__";
			J.$t(e, "xyz"), J.Lt(e) !== "\"xyz\"" && (t = !1), J.Dt(e);
		} catch (e) {
			t = !1;
		}
		return t || H.error("localStorage unsupported; falling back to cookie store"), So = t, t;
	},
	Ft(e) {
		H.error("localStorage error: " + e);
	},
	Lt(t) {
		try {
			return e == null ? void 0 : e.localStorage.getItem(t);
		} catch (e) {
			J.Ft(e);
		}
		return null;
	},
	Pt(e) {
		try {
			return JSON.parse(J.Lt(e)) || {};
		} catch (e) {}
		return null;
	},
	$t(t, n) {
		try {
			return e == null || e.localStorage.setItem(t, JSON.stringify(n)), !0;
		} catch (e) {
			J.Ft(e);
		}
		return !1;
	},
	Dt(t) {
		try {
			e == null || e.localStorage.removeItem(t);
		} catch (e) {
			J.Ft(e);
		}
	}
}, Co = [
	wi,
	gi,
	Si,
	_i,
	Di,
	bi,
	yi,
	vi,
	Ti
], wo = [
	Bi,
	zi,
	da,
	fa,
	Ma,
	ja,
	Gi,
	Ea
], To = (e) => e + "_cpm", Eo = [
	"__proto__",
	"constructor",
	"prototype"
], Do = (e) => {
	if (!D(e)) return {};
	let t = {};
	return Object.keys(e).forEach((n) => {
		Eo.indexOf(n) === -1 && (t[n] = e[n]);
	}), t;
}, Oo = (e, t = []) => {
	let n = {};
	return [...wo, ...t].forEach((t) => {
		let r = e[t];
		k(r) || M(r) || r === "" || (n[t] = r);
	}), n;
}, ko = (e) => {
	let t = 5381, n = 2166136261;
	for (let r = 0; e.length > r; r++) {
		let i = e.charCodeAt(r);
		t = 33 * t ^ i, n = Math.imul(n ^ i, 16777619);
	}
	return e.length.toString(36) + "." + (t >>> 0).toString(36) + "." + (n >>> 0).toString(36);
}, Ao = (e, t) => ({
	p: t,
	f: ko(JSON.stringify(e))
}), jo = (e, t) => {
	if (!t) return {
		properties: [],
		isValid: !1
	};
	try {
		let n = q.Pt(To(e)), r = (n == null ? void 0 : n.f) === ko(t) && T(n.p);
		return {
			properties: r ? n.p : [],
			isValid: r
		};
	} catch (e) {
		return {
			properties: [],
			isValid: !1
		};
	}
}, Mo = (e, t) => t + "|" + (q.Lt(To(e)) || ""), No = {}, Po = {
	Ot: () => !0,
	Ft(e) {
		H.error("memoryStorage error: " + e);
	},
	Lt: (e) => e in No ? No[e] : null,
	Pt: (e) => e in No ? No[e] : null,
	$t: (e, t) => (No[e] = t, !0),
	Dt(e) {
		delete No[e];
	}
}, Fo = null, Y = {
	Ot() {
		if (!M(Fo)) return Fo;
		if (Fo = !0, k(e)) Fo = !1;
		else try {
			let e = "__support__";
			Y.$t(e, "xyz"), Y.Lt(e) !== "\"xyz\"" && (Fo = !1), Y.Dt(e);
		} catch (e) {
			Fo = !1;
		}
		return Fo;
	},
	Ft(e) {
		H.error("sessionStorage error: ", e);
	},
	Lt(t) {
		try {
			return e == null ? void 0 : e.sessionStorage.getItem(t);
		} catch (e) {
			Y.Ft(e);
		}
		return null;
	},
	Pt(e) {
		try {
			return JSON.parse(Y.Lt(e)) || null;
		} catch (e) {}
		return null;
	},
	$t(t, n) {
		try {
			return e == null || e.sessionStorage.setItem(t, JSON.stringify(n)), !0;
		} catch (e) {
			Y.Ft(e);
		}
		return !1;
	},
	Dt(t) {
		try {
			e == null || e.sessionStorage.removeItem(t);
		} catch (e) {
			Y.Ft(e);
		}
	}
}, Io = class {
	constructor(e) {
		this._instance = e;
	}
	get Br() {
		return this._instance.config;
	}
	get consent() {
		return this.Wa() ? 0 : this.Ga;
	}
	isOptedOut() {
		return this.Br.cookieless_mode === "always" || this.isRejected() || this.consent === -1 && this.Br.cookieless_mode === "on_reject";
	}
	isOptedIn() {
		return !this.isOptedOut();
	}
	isExplicitlyOptedOut() {
		return this.consent === 0;
	}
	isRejected() {
		return this.consent === 0 || this.consent === -1 && this.Br.opt_out_capturing_by_default;
	}
	optInOut(e) {
		this.Va.$t(this.Qa, +!!e, this.Br.cookie_expiration, this.Br.cross_subdomain_cookie, this.Br.secure_cookie);
	}
	reset() {
		this.Va.Dt(this.Qa, this.Br.cross_subdomain_cookie);
	}
	get Qa() {
		let { token: e, opt_out_capturing_cookie_prefix: t, consent_persistence_name: n } = this._instance.config;
		return n || (t ? t + e : "__ph_opt_in_out_" + e);
	}
	get Ga() {
		let e = this.Va.Lt(this.Qa);
		return ce(e) ? 1 : v(le, e) ? 0 : -1;
	}
	get Va() {
		let e = this.Br.opt_out_capturing_persistence_type, t = e === "localStorage" ? J : q, n = t.Ot() ? t : Po;
		if (!this.Ja || this.Ja !== n) {
			this.Ja = n;
			let t = e === "localStorage" ? q : J;
			t.Lt(this.Qa) && (this.Ja.Lt(this.Qa) || this.optInOut(ce(t.Lt(this.Qa))), t.Dt(this.Qa, this.Br.cross_subdomain_cookie));
		}
		return this.Ja;
	}
	Wa() {
		return !!this.Br.respect_dnt && [
			n == null ? void 0 : n.doNotTrack,
			n == null ? void 0 : n.msDoNotTrack,
			d.doNotTrack,
			n == null ? void 0 : n.globalPrivacyControl
		].some((e) => ce(e));
	}
};
function Lo(e, t) {
	var n;
	let r = e == null || (n = e.config) == null ? void 0 : n.get_current_url;
	if (!E(r)) return t;
	try {
		let e = r(t);
		return A(e) && e ? e : t;
	} catch (e) {
		return H.error("Error in get_current_url, falling back to window.location.href", e), t;
	}
}
function Ro(e) {
	var t;
	return e instanceof Element && (e.id === "__POSTHOG_TOOLBAR__" || !!((t = e.closest) != null && t.call(e, ".toolbar-global-fade-container")));
}
function zo(e) {
	return !!e && e.nodeType === 1;
}
function Bo(e, t) {
	return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function Vo(e) {
	return !!e && e.nodeType === 3;
}
function Ho(e) {
	return !!e && e.nodeType === 11 && zo(e.host);
}
function Uo(e) {
	return e ? y(e).split(/\s+/) : [];
}
function Wo(e, t) {
	let n = function(e) {
		var t;
		let n = typeof window > "u" ? void 0 : window, r = n == null || (t = n.location) == null ? void 0 : t.href;
		return k(r) ? void 0 : Lo(e, r);
	}(t);
	return !!(n && e && e.some((e) => n.match(e)));
}
function Go(e) {
	let t = "";
	switch (typeof e.className) {
		case "string":
			t = e.className;
			break;
		case "object":
			t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
			break;
		default: t = "";
	}
	return Uo(t);
}
function Ko(e) {
	return N(e) ? null : y(e).split(/(\s+)/).filter((e) => Cs(e)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function qo(e) {
	let t = "";
	return ms(e) && !hs(e) && e.childNodes && e.childNodes.length && W(e.childNodes, function(e) {
		var n;
		Vo(e) && e.textContent && (t += (n = Ko(e.textContent)) == null ? "" : n);
	}), y(t);
}
function Jo(e) {
	var t;
	return k(e.target) ? e.srcElement || null : (t = e.target) != null && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
}
var Yo = [
	"a",
	"button",
	"form",
	"input",
	"select",
	"textarea",
	"label"
];
function Xo(e, t) {
	let n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
	try {
		return !!n && n.call(e, t);
	} catch (e) {
		return !1;
	}
}
function Zo(e, t) {
	if (k(t)) return !0;
	for (let n of e) if (t.some((e) => Xo(n, e))) return !0;
	return !1;
}
function Qo(e) {
	let t = e.parentNode;
	return !(!t || !zo(t)) && t;
}
var $o = [".ph-no-autocapture", "[data-ph-no-autocapture]"], es = [
	"next",
	"previous",
	"prev",
	">",
	"<",
	"→",
	"←",
	"›",
	"‹",
	"»",
	"«",
	"▶",
	"◀",
	"❯",
	"❮"
], ts = [
	...es,
	"+",
	"-",
	"−",
	"–"
], ns = ts.length + 10, rs = [
	"button",
	"a",
	"input",
	"select",
	"textarea",
	"label"
], is = [
	"button",
	"link",
	"tab",
	"menuitem",
	"option"
], as = (e, t) => /[a-z0-9]/i.test(t) ? v(ts, t) ? RegExp(`\\b${t}\\b`).test(e) : e.includes(t) : e === t, os = (e) => v(rs, e.tagName.toLowerCase()) || v(is, (e.getAttribute("role") || "").toLowerCase());
function ss(e) {
	let t = "", n = "", r = (e) => {
		zo(e) && ms(e) && !hs(e) && (t += ` ${qo(e)}`, n = n || e.getAttribute("aria-label") || "", W(e.childNodes, r));
	};
	r(e), t = y(t.replace(/\s+/g, " "));
	let i = (Cs(t) ? t : "").toLowerCase();
	return {
		safeText: i,
		ariaLabel: y(e.getAttribute("aria-label") || (i ? "" : n)).toLowerCase()
	};
}
var cs = [".ph-no-rageclick", ".ph-no-capture"], ls = [
	"",
	"text",
	"search",
	"email",
	"password",
	"url",
	"tel",
	"number"
];
function us(e, t) {
	if (!(!(typeof window > "u") && window) || ds(e)) return !1;
	let n, r, i;
	var a, o;
	if (ee(t) ? (n = !!t && cs, r = void 0, i = !1) : (n = (a = t == null ? void 0 : t.css_selector_ignorelist) == null ? cs : a, r = t == null ? void 0 : t.content_ignorelist, i = (o = t == null ? void 0 : t.ignore_text_selection) != null && o), !1 === n || i && function(e) {
		return !(!e || !zo(e)) && (!!Bo(e, "textarea") || (Bo(e, "input") ? v(ls, (e.getAttribute("type") || "").toLowerCase()) : function(e) {
			var t;
			if (e.isContentEditable) return !0;
			let n = (t = e.getAttribute) == null ? void 0 : t.call(e, "contenteditable");
			return n === "true" || n === "";
		}(e)));
	}(e)) return !1;
	let { targetElementList: s, isComplete: c } = fs(e, !1);
	return !(!c || r && function(e, { safeText: t, ariaLabel: n }) {
		let r;
		if (!0 === e) r = es;
		else {
			if (!T(e)) return !1;
			if (e.length > ns) return H.error(`[PostHog] content_ignorelist array cannot exceed ${ns} items. Use css_selector_ignorelist for more complex matching.`), !1;
			r = e.map((e) => e.toLowerCase());
		}
		return r.some((e) => as(t, e) || as(n, e));
	}(r, function(e, t) {
		for (let e of t) if (os(e)) return ss(e);
		for (let e of t) {
			try {
				var n;
				if (((n = window) == null ? void 0 : n.getComputedStyle(e).getPropertyValue("cursor")) !== "pointer") break;
			} catch (e) {
				break;
			}
			let t = ss(e);
			if (t.safeText || t.ariaLabel) return t;
		}
		return ss(e);
	}(e, s)) || Zo(s, n));
}
var ds = (e) => !e || Bo(e, "html") || !zo(e), fs = (e, t) => {
	let n = typeof window > "u" ? void 0 : window;
	if (!n || ds(e)) return {
		parentIsUsefulElement: !1,
		targetElementList: [],
		isComplete: !1
	};
	let r = !1, i = [e], a = e, o = /* @__PURE__ */ new Set([e]);
	for (; !Bo(a, "body");) {
		let e = a.assignedSlot || a.parentNode, s = Ho(e) ? e.host : e && zo(e) ? e : null;
		if (!s) break;
		if (o.has(s) || o.size >= 1e3) return {
			parentIsUsefulElement: r,
			targetElementList: i,
			isComplete: !1
		};
		if (o.add(s), Ho(e)) i.push(s), a = s;
		else {
			if (t || Yo.indexOf(s.tagName.toLowerCase()) > -1) r = !0;
			else try {
				let e = n.getComputedStyle(s);
				e && e.getPropertyValue("cursor") === "pointer" && (r = !0);
			} catch (e) {}
			i.push(s), a = s;
		}
	}
	return {
		parentIsUsefulElement: r,
		targetElementList: i,
		isComplete: !0
	};
};
function ps(e) {
	let t = /* @__PURE__ */ new Set(), n = 0, r = e;
	for (; r;) {
		if (n++ >= 1e3 || t.has(r)) return !0;
		t.add(r);
		let e = Go(r);
		if (v(e, "ph-sensitive") || v(e, "ph-no-capture")) return !0;
		let i = r.assignedSlot || r.parentNode;
		r = Ho(i) ? i.host : i && zo(i) ? i : null;
	}
	return !1;
}
function ms(e) {
	if (ps(e)) return !1;
	if (v(Go(e), "ph-include")) return !0;
	let t = e.type || "";
	if (A(t)) switch (t.toLowerCase()) {
		case "hidden":
		case "password": return !1;
	}
	let n = e.name || e.id || "";
	return !A(n) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(n.replace(/[^a-zA-Z0-9]/g, ""));
}
function hs(e) {
	return !!(Bo(e, "input") && ![
		"button",
		"checkbox",
		"submit",
		"reset"
	].includes(e.type) || Bo(e, "select") || Bo(e, "textarea") || e.getAttribute("contenteditable") === "true");
}
var gs = /* @__PURE__ */ RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"), _s = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g, vs = [
	16,
	15,
	14,
	13
], ys = /* @__PURE__ */ RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"), bs = /* @__PURE__ */ RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"), xs = /[0-9A-Za-z_]/;
function Ss(e) {
	let t = 0, n = !1;
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e.charCodeAt(r) - 48;
		n && (i *= 2, i > 9 && (i -= 9)), t += i, n = !n;
	}
	return t % 10 == 0;
}
function Cs(e, t = !0) {
	return !(N(e) || A(e) && (e = y(e), (t ? gs.test((e || "").replace(/[- ]/g, "")) : function(e) {
		let t;
		for (_s.lastIndex = 0; t = _s.exec(e);) {
			let e = t[2];
			if (!e) continue;
			let n = e.replace(/[- ]/g, "");
			for (let e = 0; n.length > e; e++) for (let t of vs) {
				let r = e + t;
				if (n.length >= r) {
					let t = n.slice(e, r);
					if (gs.test(t) && Ss(t)) return !0;
				}
			}
		}
		return !1;
	}(e)) || (t ? ys.test(e) : function(e) {
		let t;
		for (bs.lastIndex = 0; t = bs.exec(e);) {
			let e = t[1], n = t[3];
			if (!(e && n && xs.test(e) && xs.test(n))) return !0;
		}
		return !1;
	}(e))));
}
function ws(e) {
	let t = qo(e);
	return t = `${t} ${Ts(e)}`.trim(), Cs(t) ? t : "";
}
function Ts(e) {
	let t = "";
	return e && e.childNodes && e.childNodes.length && W(e.childNodes, function(e) {
		var n;
		if (e && ((n = e.tagName) == null ? void 0 : n.toLowerCase()) === "span") try {
			let n = qo(e);
			t = `${t} ${n}`.trim(), e.childNodes && e.childNodes.length && (t = `${t} ${Ts(e)}`.trim());
		} catch (e) {
			H.error("[AutoCapture]", e);
		}
	}), t;
}
function Es(e) {
	return e.replace(/"|\\"/g, "\\\"");
}
function Ds(e) {
	let t = e.attr__class;
	if (t) return T(t) ? t : Uo(t);
}
var Os = U("[Dead Clicks]"), ks = () => !0, As = (e) => {
	var t;
	let n = !!((t = e.instance.persistence) != null && t.get_property(ea)), r = e.instance.config.capture_dead_clicks;
	return ee(r) ? r : !!D(r) || n;
}, js = class {
	get lazyLoadedDeadClicksAutocapture() {
		return this.Za;
	}
	constructor(e, t, n) {
		this.instance = e, this.isEnabled = t, this.onCapture = n, this.startIfEnabledOrStop();
	}
	onRemoteConfig(e) {
		if (!e.ok) return;
		let t = e.config;
		"captureDeadClicks" in t && (this.instance.persistence && this.instance.persistence.register({ [ea]: t.captureDeadClicks }), this.startIfEnabledOrStop());
	}
	startIfEnabledOrStop() {
		this.isEnabled(this) ? this.Ka(() => {
			this.Ya();
		}) : this.stop();
	}
	Ka(e) {
		var t, n;
		(t = d.__PosthogExtensions__) != null && t.initDeadClicksAutocapture ? e() : (n = oi(this.instance)) == null || n(this.instance, "dead-clicks-autocapture", (t) => {
			t ? Os.error("failed to load script", t) : e();
		});
	}
	Ya() {
		var e;
		if (r) {
			if (!this.Za && (e = d.__PosthogExtensions__) != null && e.initDeadClicksAutocapture) {
				let e = D(this.instance.config.capture_dead_clicks) ? V({}, this.instance.config.capture_dead_clicks) : {};
				e.__onCapture = this.onCapture, this.onCapture && (e.capture_dead_swipes = !1), this.Za = d.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, e), this.Za.start(r), Os.info("starting...");
			}
		} else Os.error("`document` not found. Cannot start.");
	}
	stop() {
		this.Za && (this.Za.stop(), this.Za = void 0, Os.info("stopping..."));
	}
}, Ms = U("[SegmentIntegration]");
function Ns(e, t, n = !0) {
	let r = e.config.segment;
	if (!r) return t();
	let { analytics: i, filterProperties: a } = ((e) => E(e.register))(o = r) ? { analytics: o } : o;
	var o;
	(function(e, t, n, r) {
		let i = (t) => {
			let i = () => t.anonymousId() || _o();
			e.config.get_device_id = i, r && t.id() && (e.register({
				distinct_id: t.id(),
				$device_id: i()
			}), e.persistence.set_property(Ea, Ja)), n(r ? void 0 : t.anonymousId() || void 0);
		}, a = t.user();
		"then" in a && E(a.then) ? a.then(i) : i(a);
	})(e, i, (n) => {
		i.register(((e, t, { filterProperties: n } = {}) => {
			typeof Promise < "u" && Promise.resolve || Ms.warn("This browser does not have Promise support, and can not use the segment integration");
			let r = (r, i) => {
				if (!i) return r;
				let a = !!t && r.event.anonymousId === t && !r.event.userId;
				a || r.event.userId || r.event.anonymousId === e.get_distinct_id() || (Ms.info("No userId set, resetting PostHog"), e.reset()), a || (t = void 0), r.event.userId && r.event.userId !== e.get_distinct_id() && (Ms.info("UserId set, identifying with PostHog"), e.identify(r.event.userId));
				let o = e.calculateEventProperties(i, r.event.properties);
				if (!N(n)) {
					let e = r.event.properties || {}, t = {};
					for (let n of Object.keys(o)) C.call(e, n) || (t[n] = o[n]);
					let i = ((e, t) => {
						let n = T(e) ? e : [e], r = V({}, t);
						for (let e of n) try {
							if (r = e(r), N(r)) return null;
						} catch (e) {
							return Ms.error("Error in Segment filterProperties:", e), null;
						}
						return r;
					})(n, t);
					if (N(i)) return r;
					o = i;
				}
				return r.event.properties = Object.assign({}, o, r.event.properties), r;
			};
			return {
				name: "PostHog JS",
				type: "enrichment",
				version: "1.0.0",
				isLoaded() {
					return !0;
				},
				load() {
					return Promise.resolve();
				},
				track(e) {
					return r(e, e.event.event);
				},
				page(e) {
					return r(e, Za);
				},
				identify(e) {
					return r(e, $a);
				},
				screen(e) {
					return r(e, "$screen");
				}
			};
		})(e, n, { filterProperties: a })).then(() => {
			t();
		}, (e) => {
			Ms.error("Failed to register the Segment integration", e), t();
		});
	}, n);
}
var Ps = "posthog-js";
function Fs(e, { organization: t, projectId: n, prefix: r, severityAllowList: i = ["error"], sendExceptionsToPostHog: a = !0 } = {}) {
	return (o) => {
		var s, c, l, u, d;
		if (i !== "*" && !i.includes(o.level) || !e.__loaded) return o;
		o.tags || (o.tags = {});
		let f = e.requestRouter.endpointFor("ui", `/project/${e.config.token}/person/${e.get_distinct_id()}`);
		o.tags["PostHog Person URL"] = f, e.sessionRecordingStarted() && (o.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 }));
		let p = ((s = o.exception) == null ? void 0 : s.values) || [], m = p.map((e) => V(V({}, e), {}, { stacktrace: e.stacktrace ? V(V({}, e.stacktrace), {}, {
			type: "raw",
			frames: (e.stacktrace.frames || []).map((e) => V(V({}, e), {}, { platform: "web:javascript" }))
		}) : void 0 })), h = {
			$exception_message: ((c = p[0]) == null ? void 0 : c.value) || o.message,
			$exception_type: (l = p[0]) == null ? void 0 : l.type,
			$exception_level: o.level,
			$exception_list: m,
			$sentry_event_id: o.event_id,
			$sentry_exception: o.exception,
			$sentry_exception_message: ((u = p[0]) == null ? void 0 : u.value) || o.message,
			$sentry_exception_type: (d = p[0]) == null ? void 0 : d.type,
			$sentry_tags: o.tags
		};
		var g;
		return t && n && (h.$sentry_url = (r || "https://sentry.io/organizations/") + t + "/issues/?project=" + n + "&query=" + o.event_id), a && ((g = e.exceptions) == null || g.sendExceptionEvent(h)), o;
	};
}
var Is = class {
	constructor(e, t, n, r, i, a) {
		this.name = Ps, this.setupOnce = function(o) {
			o(Fs(e, {
				organization: t,
				projectId: n,
				prefix: r,
				severityAllowList: i,
				sendExceptionsToPostHog: a == null || a
			}));
		};
	}
}, Ls = class {
	constructor(e) {
		this.Xa = (e, t, n) => {
			n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength || n.crossTabAdoption) && (H.info("[PageViewManager] Session rotated, clearing pageview state", {
				sessionId: e,
				changeReason: n
			}), this.tu = void 0, this._instance.scrollManager.resetContext());
		}, this._instance = e, this.eu();
	}
	eu() {
		var e;
		this.iu = (e = this._instance.sessionManager) == null ? void 0 : e.onSessionId(this.Xa);
	}
	destroy() {
		var e;
		(e = this.iu) == null || e.call(this), this.iu = void 0;
	}
	doPageView(t, n) {
		var r;
		let i = this.nu(t, n);
		return this.tu = {
			pathname: (r = e == null ? void 0 : e.location.pathname) == null ? "" : r,
			pageViewId: n,
			timestamp: t
		}, this._instance.scrollManager.resetContext(), i;
	}
	doPageLeave(e) {
		var t;
		return this.nu(e, (t = this.tu) == null ? void 0 : t.pageViewId);
	}
	doEvent() {
		var e;
		return { $pageview_id: (e = this.tu) == null ? void 0 : e.pageViewId };
	}
	nu(e, t) {
		let n = this.tu;
		if (!n) return { $pageview_id: t };
		let r = {
			$pageview_id: t,
			$prev_pageview_id: n.pageViewId
		}, i = this._instance.scrollManager.getContext();
		if (i && !this._instance.config.disable_scroll_properties) {
			let { maxScrollHeight: e, lastScrollY: t, maxScrollY: n, maxContentHeight: a, lastContentY: o, maxContentY: s } = i;
			if (!(k(e) || k(t) || k(n) || k(a) || k(o) || k(s))) {
				e = Math.ceil(e), t = Math.ceil(t), n = Math.ceil(n), a = Math.ceil(a), o = Math.ceil(o), s = Math.ceil(s);
				let i = e > 1 ? z(t / e, 0, 1, H) : 1, c = e > 1 ? z(n / e, 0, 1, H) : 1, l = a > 1 ? z(o / a, 0, 1, H) : 1, u = a > 1 ? z(s / a, 0, 1, H) : 1;
				r = G(r, {
					$prev_pageview_last_scroll: t,
					$prev_pageview_last_scroll_percentage: i,
					$prev_pageview_max_scroll: n,
					$prev_pageview_max_scroll_percentage: c,
					$prev_pageview_last_content: o,
					$prev_pageview_last_content_percentage: l,
					$prev_pageview_max_content: s,
					$prev_pageview_max_content_percentage: u
				});
			}
		}
		return n.pathname && (r.$prev_pageview_pathname = n.pathname), n.timestamp && (r.$prev_pageview_duration = (e.getTime() - n.timestamp.getTime()) / 1e3), r;
	}
}, Rs = ["flags", "surveys"], zs = {
	[Ri]: { exposure: "hidden" },
	[Hi]: { exposure: "hidden" },
	[Ui]: { exposure: "hidden" },
	[Ji]: { exposure: "hidden" },
	[Gi]: { exposure: "hidden" },
	[qi]: { exposure: "hidden" },
	[ji]: { exposure: "event" },
	[Yi]: { exposure: "hidden" },
	[na]: { exposure: "hidden" },
	[Xi]: { exposure: "event" },
	[Zi]: { exposure: "hidden" },
	[Qi]: { exposure: "event" },
	[$i]: { exposure: "event" },
	[ea]: { exposure: "event" },
	[ta]: { exposure: "hidden" },
	[ra]: { exposure: "event" },
	[ia]: { exposure: "hidden" },
	[aa]: { exposure: "hidden" },
	[da]: { exposure: "hidden" },
	[fa]: { exposure: "event" },
	[oa]: {
		exposure: "event",
		shouldSkipFromEventProperties: (e) => M(e)
	},
	[pa]: { exposure: "event" },
	[ma]: { exposure: "event" },
	[ha]: { exposure: "event" },
	[ga]: { exposure: "event" },
	[_a]: { exposure: "hidden" },
	[Si]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[gi]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[hi]: { exposure: "hidden" },
	[_i]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[Di]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[bi]: {
		exposure: "hidden",
		storageGroup: "flags",
		volatile: !0
	},
	[xi]: {
		exposure: "hidden",
		storageGroup: "flags"
	},
	[Oi]: { exposure: "hidden" },
	[ki]: { exposure: "hidden" },
	[wi]: { exposure: "hidden" },
	[Ci]: { exposure: "hidden" },
	[Mi]: {
		exposure: "hidden",
		storageGroup: "surveys"
	},
	[Ni]: {
		exposure: "hidden",
		storageGroup: "surveys",
		volatile: !0
	},
	[Fi]: { exposure: "event" },
	[Ii]: { exposure: "hidden" },
	[Li]: { exposure: "hidden" },
	[ya]: { exposure: "hidden" },
	[ba]: { exposure: "hidden" },
	[xa]: { exposure: "hidden" },
	[Sa]: { exposure: "event" },
	[Ca]: { exposure: "event" },
	[wa]: { exposure: "event" },
	[Ta]: { exposure: "event" },
	[Ti]: { exposure: "hidden" },
	[Ei]: { exposure: "hidden" },
	[va]: { exposure: "event" },
	[vi]: { exposure: "hidden" },
	[yi]: {
		exposure: "hidden",
		storageGroup: "flags",
		volatile: !0
	},
	[Ea]: { exposure: "hidden" },
	[Da]: { exposure: "hidden" },
	[Oa]: { exposure: "hidden" },
	[ka]: { exposure: "hidden" },
	[Aa]: { exposure: "hidden" },
	[ja]: { exposure: "hidden" },
	[Ma]: { exposure: "hidden" },
	[sa]: { exposure: "event" },
	[ca]: { exposure: "event" },
	[la]: { exposure: "event" },
	[ua]: { exposure: "event" },
	[Fa]: { exposure: "event" },
	[Ia]: { exposure: "event" },
	[La]: { exposure: "hidden" },
	[Ra]: { exposure: "hidden" },
	[za]: { exposure: "hidden" },
	[Ba]: { exposure: "hidden" },
	[Va]: { exposure: "hidden" },
	[Ha]: { exposure: "hidden" },
	[Ua]: { exposure: "hidden" },
	[Wa]: { exposure: "hidden" },
	[Ga]: { exposure: "hidden" },
	[Ka]: { exposure: "event" }
}, Bs = [
	["$posthog_sr_group_event_trigger_", { exposure: "hidden" }],
	["$posthog_sr_group_url_trigger_", { exposure: "hidden" }],
	["$posthog_sr_group_sampling_", { exposure: "hidden" }]
], Vs = (e) => {
	let t = zs[e];
	if (t) return t;
	for (let [t, n] of Bs) if (e.indexOf(t) === 0) return n;
};
function Hs() {
	try {
		return Intl.DateTimeFormat().resolvedOptions().timeZone;
	} catch (e) {
		return;
	}
}
var Us = (e) => {
	let t = typeof document > "u" ? void 0 : document, n = t == null ? void 0 : t.createElement("a");
	return k(n) ? null : (n.href = e, n);
}, Ws = () => {
	try {
		return "u" > typeof window && !1 !== window.navigator.onLine;
	} catch (e) {
		return !1;
	}
}, Gs = (e, t) => e >= t && Ws(), Ks = (e, t, n, r) => {
	if (e === 0) {
		if (Ws()) {
			let e = t + 1;
			return e === n && r(), e;
		}
		return t;
	}
	return 0;
}, qs = (e, t) => {
	try {
		let n;
		return JSON.stringify(e, (e, t) => ie(t) ? (n != null || (n = /* @__PURE__ */ new WeakMap()), n.has(t) || n.set(t, ao(t)), n.get(t)) : typeof t == "bigint" ? t.toString() : t, t);
	} catch (t) {
		return x(e);
	}
}, Js = function(e, t) {
	let n = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), r;
	for (let e = 0; n.length > e; e++) {
		let i = n[e].split(/=(.*)/);
		if (i[0] === t) {
			r = i;
			break;
		}
	}
	if (!T(r) || 2 > r.length) return "";
	{
		let e = r[1].replace(/\+/g, " ");
		try {
			e = decodeURIComponent(e);
		} catch (t) {
			H.error("Skipping decoding for malformed query param: " + e);
		}
		return e;
	}
}, Ys = function(e, t, n) {
	if (!e || !t || !t.length) return e;
	let r = e.split(/#(.*)/), i = r[1], a = (r[0] || "").split(/\?(.*)/), o = a[1], s = a[0], c = (o || "").split("&"), l = [];
	for (let e = 0; c.length > e; e++) {
		let r = c[e].split("?"), i = 0;
		for (; r.length > i && !t.includes(r[i].split("=")[0]);) i++;
		l.push(r.length > i ? r.slice(0, i).concat(r[i].split("=")[0] + "=" + n).join("?") : c[e]);
	}
	let u = s;
	return o != null && (u += "?" + l.join("&")), i != null && (u += "#" + i), u;
}, Xs = function(e, t) {
	let n = e.match(RegExp(t + "=([^&]*)"));
	return n ? n[1] : null;
}, Zs = [
	"gclid",
	"gclsrc",
	"dclid",
	"gbraid",
	"wbraid",
	"fbclid",
	"msclkid",
	"twclid",
	"li_fat_id",
	"igshid",
	"ttclid",
	"rdt_cid",
	"epik",
	"qclid",
	"sccid",
	"oppref",
	"bfcid",
	"irclid",
	"_kx"
], Qs = ["ScCid", "SsCid"], $s = { sccid: Qs }, ec = [
	...Zs,
	...Qs,
	"sscid"
], tc = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gad_source",
	"mc_cid",
	...Zs
], nc = "<masked>", rc = ["li_fat_id"];
function ic(e, t, n) {
	if (!r) return {};
	let i = t ? [...ec, ...n || []] : [], a = ac(Ys(r.URL, i, nc), e);
	return G(function() {
		let e = {};
		return W(rc, function(t) {
			let n = lo(t);
			e[t] = n || null;
		}), e;
	}(), a);
}
function ac(e, t) {
	let n = tc.concat(t || []), r = {};
	return W(n, function(t) {
		let n = Js(e, t);
		!n && C.call($s, t) && to($s[t], function(t) {
			n = n || Js(e, t);
		}), r[t] = n || null;
	}), r;
}
function oc(e) {
	let t = function(e) {
		return e ? e.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : e.search("https?://(.*)bing.com") === 0 ? "bing" : e.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : e.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null : null;
	}(e), n = t == "yahoo" ? "p" : "q", i = {};
	if (!M(t)) {
		i.$search_engine = t;
		let e = r ? Js(r.referrer, n) : "";
		e.length && (i.ph_keyword = e);
	}
	return i;
}
function sc() {
	return navigator.language || navigator.userLanguage;
}
function cc() {
	let e = sc();
	return typeof e == "string" ? e.split("-")[0] : void 0;
}
var lc = "$direct";
function uc() {
	return (r == null ? void 0 : r.referrer) || lc;
}
function dc(e, t, n = !1) {
	let r = e ? [...ec, ...t || []] : [], a = n ? wt(i == null ? void 0 : i.href) : i == null ? void 0 : i.href, o = a == null ? void 0 : a.substring(0, 1e3);
	return {
		r: uc().substring(0, 1e3),
		u: o ? Ys(o, r, nc) : void 0
	};
}
function fc(e, t = !1, n, r) {
	var i;
	let { r: a, u: o } = e, s = t ? wt(o) : o, c = s && n ? Ys(s, [...ec, ...r || []], nc) : s, l = {
		$referrer: a,
		$referring_domain: a == null ? void 0 : a == lc ? lc : (i = Us(a)) == null ? void 0 : i.host
	};
	if (c) {
		l.$current_url = c;
		let e = Us(c);
		l.$host = e == null ? void 0 : e.host, l.$pathname = e == null ? void 0 : e.pathname, G(l, ac(c));
	}
	return a && G(l, oc(a)), l;
}
function pc() {
	try {
		return (/* @__PURE__ */ new Date()).getTimezoneOffset();
	} catch (e) {
		return;
	}
}
var mc = {
	flags: yi,
	surveys: Ni
}, hc = [
	"cookie",
	"localstorage",
	"localstorage+cookie",
	"sessionstorage",
	"memory"
], gc = (e) => `${e}_cookie_identity_change_pending`, _c = (e) => {
	let t = "", n = 0;
	for (let r of e) {
		let e = encodeURIComponent(JSON.stringify(r).slice(1, -1)).length;
		if (n + e > 1e3) break;
		t += r, n += e;
	}
	return t;
}, vc = "main", yc = [
	Si,
	gi,
	_i,
	Di,
	bi,
	yi,
	xi,
	wi
], bc = (e) => yc.indexOf(e) !== -1, xc = [Gi, qi], Sc = (e) => xc.indexOf(e) !== -1, Cc = (e, t) => {
	try {
		return JSON.stringify(e) === JSON.stringify(t);
	} catch (n) {
		return e === t;
	}
}, wc = (e) => {
	if (!e) return {};
	let t = JSON.parse(e);
	return D(t) ? t : {};
}, Tc = (e, t) => {
	W(e, (n, r) => {
		let i = Vs(r);
		i && i.exposure !== "event" || {}.hasOwnProperty.call(t, r) || delete e[r];
	});
}, Ec = class {
	constructor(t, n, r = !0, i = !t.cookieless_mode) {
		if (this.su = {}, this.ru = !1, this.ou = !1, this.lu = !1, this.au = !1, this.uu = !1, this.cu = /* @__PURE__ */ new Map(), this.hu = !1, this.du = !1, this.vu = !1, this.fu = /* @__PURE__ */ new Set(), this.pu = /* @__PURE__ */ new Set(), this.Br = t, this.gu = r, this.props = {}, this.mu = void 0, this.yu = ((e) => {
			let t = "";
			return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
		})(t), this.gi = t.disable_persistence || !!n, this.Va = this.bu(t), this.lu = this._u(t), this.load(i), this.wu(), t.debug && H.info("Persistence loaded", t.persistence, V({}, this.props)), this.update_config(t, t, n), this.save(), e) {
			let t = () => this.flush();
			K(e, "beforeunload", t, { capture: !1 }), K(e, "pagehide", t, { capture: !1 }), this.ku = (t) => {
				if (this.ru && (!t.storageArea || t.storageArea === (e == null ? void 0 : e.localStorage)) && t.key) if (t.key !== this.yu) {
					if (this.lu) {
						let e = Rs.find((e) => t.key === this.Su(e));
						e && this.xu(t.key, e);
					}
				} else this.xu(t.key, vc);
			}, K(e, "storage", this.ku);
		}
	}
	reconcileFeatureFlagsBeforeMerge() {
		return !(this.gi || this.uu || this.hu) && this.$u();
	}
	markCrossTabFeatureFlagChanges(e) {
		Object.entries(e).forEach(([e, t]) => {
			let n = this.cu.get(e);
			if (!bc(e) || !0 === n) return;
			if (!0 === t) return void this.Cu(e, !0);
			let r = new Set(n || []);
			t.forEach((e) => r.add(e)), r.size && this.Cu(e, r);
		});
	}
	onCrossTabFeatureFlagChange(e) {
		return this.pu.add(e), () => this.pu.delete(e);
	}
	destroy() {
		this.ku && e && (e.removeEventListener("storage", this.ku), this.ku = void 0), this.pu.clear();
	}
	xu(e, t, n = !0) {
		if (this.gi) return !1;
		let r, i;
		try {
			if (i = J.Lt(e), M(i)) {
				let e = this.Tu(t);
				return e.storageValue = null, t === vc ? this.Mu({}) : e.persisted = !1, !1;
			}
			r = wc(i);
		} catch (e) {
			return !1;
		}
		t === vc && this.Mu(r);
		let a = t === vc ? r : J.Pt(this.yu);
		if (a && this.Iu(a)) return !1;
		let o = this.Eu(r, t, n);
		return t === vc && this.lu && !Cc(this.Au().main, r) || this.Ru(r, t, !0, i), o;
	}
	Iu(e) {
		let t = this.props[zi], n = e[zi];
		return !k(t) && !k(n) && t !== n;
	}
	Ru(e, t, n, r) {
		let i = this.Tu(t);
		i.storageValue = r, t !== vc && (i.persisted = n);
		try {
			i.fingerprint = this.Pu(e, t);
		} catch (e) {
			i.fingerprint = void 0;
		}
	}
	Eu(e, t, n) {
		let r = !1;
		return yc.forEach((n) => {
			var i;
			let a = (i = Vs(n)) == null ? void 0 : i.storageGroup;
			if (t === vc && this.lu && a || t !== vc && a !== t) return;
			let o = n in e, s = this.Ou(n, o ? e[n] : void 0), c = this.cu.has(n) ? n in this.props : o;
			c === n in this.props && Cc(s, this.props[n]) || (c ? this.Fu(n, s, !1) : this.Lu(n, !1), r = !0);
		}), r && n && this.pu.forEach((e) => e()), r;
	}
	Mu(e) {
		let t = this.ou && this.Br.cookieWinsOnConflict ? [...wo, ...this.Br.cookie_persisted_properties || []] : [];
		xc.forEach((n) => {
			this.fu.has(n) || t.indexOf(n) !== -1 || (n in e ? Cc(e[n], this.props[n]) || this.Fu(n, e[n], !1) : n in this.props && this.Lu(n, !1));
		});
	}
	Du() {
		return this.ou && this.ru && !this.Br.cookieWinsOnConflict;
	}
	Nu() {
		if (!this.Du()) return;
		let e, t;
		try {
			e = q.Lt(this.yu) || void 0;
		} catch (e) {
			return;
		}
		if (e && e !== this.ju) {
			this.ju = e;
			try {
				t = Do(JSON.parse(e));
			} catch (e) {
				return;
			}
			xc.forEach((e) => {
				!(e in t) || e in this.props || this.fu.has(e) || this.Fu(e, t[e], !1);
			});
		}
	}
	qu(e) {
		if (this.Du()) try {
			let t = JSON.stringify(Oo(e, this.Br.cookie_persisted_properties || [])), n = q.Lt(this.yu) || void 0;
			n === t && (this.ju = n);
		} catch (e) {}
	}
	$u() {
		if (!this.ru) return !1;
		try {
			this.vu = !1;
			let e = J.Lt(this.yu), t = this.Tu(vc), n, r = !1, i = !1;
			if (e !== t.storageValue) if (M(e)) A(t.storageValue) && this.Mu({}), t.storageValue = null;
			else {
				if (n = wc(e), this.Mu(n), this.vu = !this.du && this.Iu(n), this.vu) return !1;
				i = this.Eu(n, vc, !1), !this.lu || Cc(this.Au().main, n) ? this.Ru(n, vc, !0, e) : t.storageValue = e, r = !0;
			}
			return this.lu && Rs.forEach((e) => {
				let t = J.Lt(this.Su(e)), a = this.Tu(e), o = n || {}, s = r && yc.some((t) => {
					var n;
					return ((n = Vs(t)) == null ? void 0 : n.storageGroup) === e && t in o;
				});
				if (t === a.storageValue && !s) return;
				if (M(t)) return a.storageValue = null, a.persisted = !1, void (s && (i = this.Eu(o, e, !1) || i));
				let c = wc(t);
				i = this.Eu(c, e, !1) || i, this.Ru(c, e, !0, t);
			}), i;
		} catch (e) {
			return !1;
		}
	}
	Cu(e, t) {
		this.cu.set(e, t);
		let n = Vs(e);
		n != null && n.volatile || (this.Tu((this.lu ? n == null ? void 0 : n.storageGroup : void 0) || vc).fingerprint = void 0, this.Bu(e));
	}
	zu() {
		yc.forEach((e) => this.cu.set(e, !0));
	}
	wu() {
		if (this.ru) try {
			let e = J.Lt(this.yu), t = wc(e);
			this.Tu(vc).storageValue = e, yc.forEach((e) => {
				var n;
				let r = this.lu ? (n = Vs(e)) == null ? void 0 : n.storageGroup : void 0, i = r ? J.Lt(this.Su(r)) : null;
				if (r) {
					let e = this.Tu(r);
					e.storageValue = i, e.persisted = !M(i);
				}
				let a = r && !M(i) ? wc(i) : t;
				e in this.props ? this.Hu(e, a[e], this.props[e]) : e in a && this.Cu(e, !0);
			});
		} catch (e) {}
	}
	Ou(e, t) {
		let n = this.cu.get(e);
		if (!n) return t;
		if (!0 === n) return this.props[e];
		if (e === "$active_feature_flags") {
			let r = new Set(T(t) ? t : []), i = new Set(T(this.props[e]) ? this.props[e] : []);
			return n.forEach((e) => i.has(e) ? r.add(e) : r.delete(e)), Array.from(r);
		}
		let r = D(t) ? V({}, t) : {}, i = D(this.props[e]) ? this.props[e] : {};
		return n.forEach((e) => {
			e in i ? r[e] = i[e] : delete r[e];
		}), r;
	}
	Hu(e, t, n) {
		if (!bc(e)) return;
		let r = this.cu.get(e);
		if (!0 === r) return;
		let i = t;
		if (this.ru) try {
			var a;
			let t = this.lu ? (a = Vs(e)) == null ? void 0 : a.storageGroup : void 0, n = t ? this.Su(t) : this.yu;
			i = wc(J.Lt(n))[e];
		} catch (e) {}
		let o = new Set(r || []);
		if (e === "$active_feature_flags") {
			if (!k(t) && !T(t) || !k(i) && !T(i) || !T(n)) return void this.Cu(e, !0);
			let r = new Set(t || []), a = new Set(i || []), s = new Set(n);
			(/* @__PURE__ */ new Set([...r, ...s])).forEach((e) => {
				r.has(e) !== s.has(e) && o.add(e);
			}), o.forEach((e) => {
				a.has(e) === s.has(e) && o.delete(e);
			});
		} else {
			if (!D(n)) return void (Cc(i, n) ? this.cu.delete(e) : this.Cu(e, !0));
			{
				if (!k(t) && !D(t) || k(t) && O(n) && k(i)) return void this.Cu(e, !0);
				let r = D(t) ? t : {}, a = D(i) ? i : {};
				(/* @__PURE__ */ new Set([...Object.keys(r), ...Object.keys(n)])).forEach((e) => {
					e in r == e in n && Cc(r[e], n[e]) || o.add(e);
				}), o.forEach((e) => {
					e in a == e in n && Cc(a[e], n[e]) && o.delete(e);
				});
			}
		}
		o.size ? this.Cu(e, o) : this.cu.delete(e);
	}
	Uu() {
		var e;
		let t = (e = this.Br) == null ? void 0 : e.persistence_save_debounce_ms;
		return P(t) && t > 0 ? t : 0;
	}
	Wu(e) {
		if (this.Br.cookieWinsOnConflict && this.Br.persistence.toLowerCase() === "localstorage+cookie") if (e) try {
			let t = Oo(e, this.Br.cookie_persisted_properties || []), n = Ao(t, this.Br.cookie_persisted_properties || []), r = JSON.stringify(t) + "|" + JSON.stringify(n), i = q.Lt(this.yu) || void 0;
			i && Mo(this.yu, i) === r && (this.Gu = r, this.Vu = i);
		} catch (e) {}
		else try {
			let e = q.Lt(this.yu) || void 0;
			this.Gu = e ? Mo(this.yu, e) : void 0, this.Vu = e;
		} catch (e) {}
	}
	syncCookieProperties() {
		return this.Qu(this.Br);
	}
	Qu(e, t = !1) {
		if (this.gi && !t || this.uu || !e.cookieWinsOnConflict || e.persistence.toLowerCase() !== "localstorage+cookie") return !1;
		let n;
		try {
			n = q.Lt(this.yu) || void 0;
		} catch (e) {}
		if (!n || n === this.Vu) return !1;
		let r = Mo(this.yu, n), i;
		try {
			i = Do(JSON.parse(n));
		} catch (e) {
			return !1;
		}
		if ((q.Lt(this.yu) || void 0) !== n) return !1;
		this.Gu = r, this.Vu = n;
		let a = jo(this.yu, n), o = [...wo, ...a.properties], s = {};
		if (Object.keys(i).forEach((e) => {
			let t = i[e];
			(k(t) || M(t) || t === "" || e === "$user_state" && t !== "anonymous" && t !== "identified") && (s[e] = !0, delete i[e]);
		}), O(i)) return !1;
		let c = "distinct_id" in i || i.$user_state === "anonymous" || i.$user_state === "identified", l = this.props, u = l[zi], d = l[Ea], f = G({}, l);
		[...wo, ...e.cookie_persisted_properties || []].forEach((e) => {
			if (o.indexOf(e) !== -1 && !(e in i) && !s[e] && (c || e !== "distinct_id" && e !== "$user_state")) {
				let t = f[e];
				(a.isValid || wo.indexOf(e) === -1 || !1 !== t && t !== 0) && delete f[e];
			}
		}), this.props = G(f, i), yc.forEach((e) => {
			let t = e in this.props;
			e in l === t && Cc(l[e], this.props[e]) || (t ? this.Hu(e, l[e], this.props[e]) : this.Cu(e, !0));
		}), !c || "$user_state" in i || "$user_state" in this.props || this.Fu(Ea, qa);
		let p = this.props[zi], m = this.props[Ea];
		return !c || p === u && m === d || (this.du = !0, this.au = !0, Y.$t(gc(this.yu), !0), this.Lu(wi), this.Lu(gi), this.Lu(Si), this.Lu(_i), this.Lu(Di), this.Lu(bi), this.Lu(yi), this.Lu(vi), this.Lu(Ti), m !== "anonymous" || d !== "identified" && i.$user_state !== "anonymous" && (k(u) || p === u) || (Tc(this.props, i), this.Lu(Ci)), m === "identified" ? this.props.$user_id = p : delete this.props.$user_id, this.Lu(Hi)), !0;
	}
	consumeCookieIdentityChange() {
		let e = gc(this.yu), t = this.au || !!Y.Lt(e);
		return this.au = !1, t && Y.Dt(e), t;
	}
	Ju(e = !1) {
		return !(this.uu || this.gi && !e || !this.Br.cookieWinsOnConflict || this.Br.persistence.toLowerCase() !== "localstorage+cookie" || (this.uu = !0, 0));
	}
	Zu() {
		this.uu && (k(this.Ku) || (clearTimeout(this.Ku), this.Ku = void 0), delete this.su[vc], this.Yu(!0));
	}
	Xu(e = !0) {
		if (this.uu) try {
			e ? this.Zu() : k(this.Ku) || (clearTimeout(this.Ku), this.Ku = void 0);
		} finally {
			this.uu = !1;
		}
	}
	isDisabled() {
		return !!this.gi;
	}
	bu(t) {
		hc.indexOf(t.persistence.toLowerCase()) === -1 && (H.critical("Unknown persistence type " + t.persistence + "; falling back to localStorage+cookie"), t.persistence = "localStorage+cookie");
		let n = ((t = [], n = !1, r = () => !1) => {
			let i = [...wo, ...t];
			return V(V({}, J), {}, {
				Pt(e) {
					try {
						let a, o = {};
						try {
							a = q.Lt(e) || void 0, o = a ? Do(JSON.parse(a)) : {};
						} catch (e) {}
						let s = JSON.parse(J.Lt(e) || "{}"), c;
						if (n) {
							let n = jo(e, a), r = [...wo, ...n.properties], l = {};
							Object.keys(o).forEach((e) => {
								let t = o[e];
								M(t) || t === "" || e === "$user_state" && t !== "anonymous" && t !== "identified" || (l[e] = t);
							});
							let u = "distinct_id" in l || l.$user_state === "anonymous" || l.$user_state === "identified";
							if (Object.keys(l).length > 0) {
								var t;
								let e = s[zi], a = (t = s.$user_state) == null ? qa : t;
								i.forEach((e) => {
									if (r.indexOf(e) !== -1 && !(e in o) && (u || e !== "distinct_id" && e !== "$user_state")) {
										let t = s[e];
										(n.isValid || wo.indexOf(e) === -1 || !1 !== t && t !== 0) && delete s[e];
									}
								}), !u || "$user_state" in o || "$user_state" in s || (s[Ea] = qa), !u || ("distinct_id" in l ? l[zi] : s[zi]) === e && ("$user_state" in l ? l[Ea] : s[Ea]) === a || (Co.forEach((e) => delete s[e]), l.$user_state === "identified" && "distinct_id" in l ? s.$user_id = l[zi] : delete s.$user_id, l.$user_state !== "identified" && (delete s[va], delete s[Ci]), delete s.__alias);
							}
							c = G(s, l);
						} else c = G(o, s);
						return r() || J.$t(e, c), c;
					} catch (e) {}
					return null;
				},
				$t(e, r, i, a, o, s) {
					let c = J.$t(e, r, void 0, void 0, s);
					try {
						let l = Oo(r, t);
						if (Object.keys(l).length) {
							if (n) {
								let n = To(e), u = Ao(l, t);
								if (q.$t(n, u, i, a, o, s), q.Lt(n) !== JSON.stringify(u)) {
									q.Dt(n, a);
									let t = Oo(r);
									return q.$t(e, t, i, a, o, s), c;
								}
							}
							q.$t(e, l, i, a, o, s);
						}
					} catch (e) {
						J.Ft(e);
					}
					return c;
				},
				Dt(t, n) {
					try {
						e == null || e.localStorage.removeItem(t), q.Dt(t, n), q.Dt(To(t), n);
					} catch (e) {
						J.Ft(e);
					}
				}
			});
		})(t.cookie_persisted_properties || [], t.cookieWinsOnConflict, () => !!this.gi), r, i = !1, a = !1, o = t.persistence.toLowerCase();
		return o === "localstorage" && J.Ot() ? (r = J, a = !0) : o === "localstorage+cookie" && n.Ot() ? (r = n, a = !0, i = !0) : o === "sessionstorage" && Y.Ot() ? r = Y : o === "memory" ? r = Po : o === "cookie" && q.Ot() ? (r = q, i = !0) : n.Ot() ? (r = n, a = !0, i = !0) : q.Ot() ? (r = q, i = !0) : r = Po, this.ru = a, this.ou = i, r;
	}
	Su(e) {
		return `${this.yu}__${e}`;
	}
	_u(e) {
		return this.ru && !!e.split_storage;
	}
	properties() {
		let e = {};
		return W(this.props, (t, n) => {
			let r = Vs(n);
			if (!r || r.exposure === "event") {
				var i;
				if (!(r == null || (i = r.shouldSkipFromEventProperties) == null) && i.call(r, t)) return;
				e[n] = t;
			}
		}), e;
	}
	load(e = !1) {
		if (this.gi && !e) return;
		let t = this.Br.cookieWinsOnConflict && this.Br.persistence.toLowerCase() === "localstorage+cookie", n = t ? J.Pt(this.yu) : null, r = {};
		if (t) try {
			r = Do(q.Pt(this.yu)), W(r, (e, t) => {
				(k(e) || M(e) || e === "") && delete r[t];
			});
		} catch (e) {}
		let i = this.Va.Pt(this.yu);
		if (i && (this.props = G({}, i)), this.lu && this.tc(), t && i) {
			var a, o;
			let e = n == null ? void 0 : n[zi], t = (a = n == null ? void 0 : n.$user_state) == null ? qa : a, s = i[zi], c = (o = i.$user_state) == null ? qa : o;
			if (s !== e || c !== t) {
				this.au = !0, this.gi || Y.$t(gc(this.yu), !0);
				let n = G({}, this.props);
				Co.forEach((e) => delete n[e]), c !== "anonymous" || t !== "identified" && r.$user_state !== "anonymous" && (k(e) || s === e) || (Tc(n, r), delete n[Ci]), this.props = n;
				let i = /* @__PURE__ */ new Set();
				Co.forEach((e) => {
					var t;
					let n = (t = Vs(e)) == null ? void 0 : t.storageGroup;
					n && i.add(n);
				}), i.forEach((e) => {
					if (this.gi) return;
					let t = {};
					W(this.props, (n, r) => {
						var i;
						((i = Vs(r)) == null ? void 0 : i.storageGroup) === e && (t[r] = n);
					}), O(t) ? (J.Dt(this.Su(e)), this.su[e] = {}) : J.$t(this.Su(e), t) && (this.su[e] = {
						persisted: !0,
						fingerprint: this.Pu(t, e)
					});
				});
			}
		}
		Y.Lt(gc(this.yu)) && (this.au = !0);
	}
	tc() {
		for (let e of Rs) {
			let t = J.Pt(this.Su(e));
			if (t && !O(t)) {
				let n = this.Tu(e);
				n.persisted = !0, this.ec(e) || (n.fingerprint = this.Pu(t, e)), this.nc(e, t) || G(this.props, t);
			}
		}
	}
	ec(e) {
		return Object.keys(this.props).some((t) => {
			var n;
			return ((n = Vs(t)) == null ? void 0 : n.storageGroup) === e;
		});
	}
	nc(e, t) {
		let n = mc[e];
		if (!n) return !1;
		let r = t[n], i = this.props[n];
		return P(r) && P(i) && i > r;
	}
	refreshKey(e) {
		this.sc([e]);
	}
	sc(e) {
		if (this.gi) return;
		let t, n = !1, r = () => (n || (t = this.Va.Pt(this.yu), n = !0), t);
		e.forEach((e) => {
			var t;
			if (this.fu.has(e)) return;
			let n = this.lu ? (t = Vs(e)) == null ? void 0 : t.storageGroup : void 0, i = n ? J.Pt(this.Su(n)) : r();
			if (i && e in i) this.Fu(e, i[e], !1);
			else {
				if (n) {
					let t = r();
					if (t && e in t) return void this.Fu(e, t[e], !1);
				}
				this.Lu(e, !1);
			}
		});
	}
	refreshMetaIdentifiers() {
		this.gi || (this.rc() ? this.oc() : this.sc(xc));
	}
	oc() {
		let e = this.lc();
		(k(e) || e !== this.ac) && (this.sc(xc), this.uc(e));
	}
	uc(e = this.lc()) {
		this.ac = this.fu.size === 0 ? e : void 0;
	}
	refreshMetaIdentifiersBeforeCapture() {
		this.gi || this.uu || (this.rc() || this.Nu(), this.oc());
	}
	rc() {
		return this.Va === q || this.Va === Y || this.Va === Po;
	}
	lc() {
		let e = this.Va.Lt(this.yu);
		return A(e) ? e : void 0;
	}
	save() {
		if (this.gi) return;
		let e = this.Uu();
		e > 0 ? k(this.Ku) && (this.Ku = setTimeout(() => {
			this.Ku = void 0, this.Yu();
		}, e)) : this.Yu();
	}
	flush() {
		k(this.Ku) || (clearTimeout(this.Ku), this.Ku = void 0, this.Yu());
	}
	Yu(e = !1) {
		if (this.gi || this.uu && !e) return;
		e || (this.syncCookieProperties(), this.rc() && this.refreshMetaIdentifiers());
		let t = !e && !this.hu;
		t || (this.vu = !1);
		let n = !!t && this.$u();
		if (this.vu) return void (this.Br.debug && H.warn("skipping persistence write because storage belongs to a different distinct ID"));
		if (e || this.Nu(), this.lu) return this.cc(), void (n && this.pu.forEach((e) => e()));
		let r = this.hc(this.Va, this.yu, this.props, vc);
		r === "written" && (this.Wu(this.props), this.qu(this.props)), r !== "failed" && (this.cu.clear(), this.du = !1, this.fu.clear()), r === "written" && this.uc(), n && this.pu.forEach((e) => e());
	}
	cc() {
		let { main: e, groups: t } = this.Au(), n = this.hc(this.Va, this.yu, e, vc);
		n === "written" && (this.Wu(e), this.qu(e)), n !== "failed" && (this.du = !1, this.fu.clear(), yc.forEach((e) => {
			var t;
			(t = Vs(e)) != null && t.storageGroup || this.cu.delete(e);
		})), n === "written" && this.uc();
		for (let e of Rs) {
			var r;
			let n = t[e];
			if (O(n) && !((r = this.su[e]) != null && r.persisted)) {
				yc.forEach((t) => {
					var n;
					((n = Vs(t)) == null ? void 0 : n.storageGroup) === e && this.cu.delete(t);
				});
				continue;
			}
			let i = this.hc(J, this.Su(e), n, e);
			i !== "failed" && yc.forEach((t) => {
				let n = Vs(t);
				(n == null ? void 0 : n.storageGroup) !== e || i !== "written" && n.volatile || this.cu.delete(t);
			});
		}
	}
	Au() {
		let e = {}, t = {
			flags: {},
			surveys: {}
		};
		return W(this.props, (n, r) => {
			var i;
			let a = (i = Vs(r)) == null ? void 0 : i.storageGroup;
			a ? t[a][r] = n : e[r] = n;
		}), {
			main: e,
			groups: t
		};
	}
	Pu(e, t) {
		if (t === vc) return JSON.stringify(e) + "|" + this.dc + "|" + this.vc + "|" + this.fc;
		let n = {};
		return W(e, (e, t) => {
			var r;
			n[t] = (r = Vs(t)) != null && r.volatile ? "__volatile__" : e;
		}), JSON.stringify(n);
	}
	hc(e, t, n, r) {
		let i = this.Tu(r);
		if (r !== vc && !i.dirty && !k(i.fingerprint)) return "skipped";
		let a;
		try {
			if (a = this.Pu(n, r), a === i.fingerprint) return i.dirty = !1, "skipped";
		} catch (e) {
			a = void 0;
		}
		return e.$t(t, n, this.dc, this.vc, this.fc, this.Br.debug) ? (i.dirty = !1, r !== vc && (i.persisted = !0), k(a) || (i.fingerprint = a), this.ru && (i.storageValue = J.Lt(t)), "written") : (this.Br.debug && H.warn(`failed to persist storage entry "${t}"; will retry on next save`), "failed");
	}
	remove({ keepGroupEntries: e = !1 } = {}) {
		if (this.zu(), k(this.Ku) || (clearTimeout(this.Ku), this.Ku = void 0), this.Va.Dt(this.yu, !1), this.Va.Dt(this.yu, !0), !e && this.gu) for (let e of Rs) J.Dt(this.Su(e));
		e ? delete this.su[vc] : this.su = {}, this.Gu = void 0, this.Vu = void 0, this.ju = void 0;
	}
	clear() {
		this.remove(), this.props = {};
	}
	register_once(e, t, n) {
		if (D(e)) {
			this.syncCookieProperties(), k(t) && (t = "None"), this.dc = k(n) ? this.gc : n;
			let r = !1;
			if (W(e, (e, n) => {
				this.props.hasOwnProperty(n) && this.props[n] !== t || (this.Fu(n, e), r = !0);
			}), r) return this.save(), !0;
		}
		return !1;
	}
	register(e, t) {
		if (D(e)) {
			this.syncCookieProperties(), this.dc = k(t) ? this.gc : t;
			let n = !1;
			if (W(e, (t, r) => {
				e.hasOwnProperty(r) && (this.props[r] !== t || D(t) || T(t)) && (this.Fu(r, t), n = !0);
			}), n) return this.save(), !0;
		}
		return !1;
	}
	unregister(e) {
		this.syncCookieProperties();
		let t = typeof e == "string" ? [e] : e, n = !1;
		for (let e of t) e in this.props && (this.Lu(e), n = !0);
		n && this.save();
	}
	update_campaign_params() {
		let e = r == null ? void 0 : r.URL;
		if (e === this.mu) return;
		let t = ic(this.Br.custom_campaign_params, this.Br.mask_personal_data_properties, this.Br.custom_personal_data_properties), n = !O(io(t));
		return n && this.register(t), this.mu = e, n ? t : void 0;
	}
	update_search_keyword() {
		this.register(function() {
			let e = r == null ? void 0 : r.referrer;
			return e ? oc(e) : {};
		}());
	}
	update_referrer_info() {
		var e;
		this.register_once({
			$referrer: uc(),
			$referring_domain: (r == null ? void 0 : r.referrer) && ((e = Us(r.referrer)) == null ? void 0 : e.host) || lc
		}, void 0);
	}
	set_initial_person_info() {
		if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
		let e = dc(this.Br.mask_personal_data_properties, this.Br.custom_personal_data_properties, this.Br.disable_capture_url_hashes);
		this.register_once({ [ja]: this.ou ? {
			r: _c(e.r),
			u: e.u ? _c(e.u) : void 0
		} : e }, void 0);
	}
	get_initial_props() {
		let e = {};
		W([Aa, ka], (t) => {
			let n = this.props[t];
			n && W(n, function(t, n) {
				e["$initial_" + b(n)] = t;
			});
		});
		let t = this.props[ja];
		return t && G(e, function(e, t = !1, n, r) {
			let i = fc(e, t, n, r), a = {};
			return W(i, function(e, t) {
				a[`$initial_${b(t)}`] = e;
			}), a;
		}(t, this.Br.disable_capture_url_hashes, this.Br.mask_personal_data_properties, this.Br.custom_personal_data_properties)), e;
	}
	safe_merge(e) {
		return W(this.props, function(t, n) {
			n in e || (e[n] = t);
		}), e;
	}
	update_config(e, t, n) {
		let r = e.persistence !== t.persistence, i = !((e, t) => {
			if (e.length !== t.length) return !1;
			let n = [...e].sort(), r = [...t].sort();
			return n.every((e, t) => e === r[t]);
		})(e.cookie_persisted_properties || [], t.cookie_persisted_properties || []), a = r || i, o = e.cookieWinsOnConflict !== t.cookieWinsOnConflict, s = e.disable_persistence || !!n, c = !!this.gi && !s;
		s || this.Qu(t, c), this.Br = e, !s && (r || i || o) && (this.Gu = void 0, this.Vu = void 0, this.ju = void 0, this.Qu(V(V({}, e), {}, { cookie_persisted_properties: t.cookie_persisted_properties }), c));
		let l = a || o ? this.bu(e) : this.Va;
		this.mc();
		let u = this._u(e), d = a || u !== this.lu, f = !s && (d || e.cross_subdomain_cookie !== this.vc || e.secure_cookie !== this.fc) && this.Ju(c);
		this.hu = d;
		try {
			if (this.gc = this.dc = e.cookie_expiration, this.set_disabled(s), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), d) {
				let e = this.props;
				this.clear(), this.Va = l, this.lu = u, this.props = e, this.save();
			} else o && (this.Va = l, s || (delete this.su[vc], this.Yu()));
		} finally {
			this.hu = !1, f && this.Xu();
		}
	}
	mc() {
		let e = this.props[ja];
		if (!this.ou || !D(e) || typeof e.r != "string") return;
		let t = _c(e.r), n = typeof e.u == "string" ? _c(e.u) : e.u;
		t === e.r && n === e.u || this.Fu(ja, V(V({}, e), {}, {
			r: t,
			u: n
		}));
	}
	set_disabled(e) {
		this.gi = e, this.gi ? this.remove() : this.save();
	}
	set_cross_subdomain(e) {
		e !== this.vc && (this.vc = e, this.remove({ keepGroupEntries: !0 }), this.save());
	}
	set_secure(e) {
		e !== this.fc && (this.fc = e, this.remove({ keepGroupEntries: !0 }), this.save());
	}
	set_event_timer(e, t) {
		let n = this.props.__timers || {};
		n[e] = t, this.Fu(Ji, n), this.save();
	}
	remove_event_timer(e) {
		let t = this.props.__timers || {}, n = t[e];
		return k(n) || (delete t[e], this.Fu(Ji, t), this.save()), n;
	}
	get_property(e) {
		return this.props[e];
	}
	set_property(e, t) {
		this.Fu(e, t), this.save();
	}
	Fu(e, t, n = !0) {
		var r;
		let i = this.props[e];
		this.props[e] = t, n && (e !== "distinct_id" && e !== "$user_state" || i === t || (this.du = !0), Sc(e) && !Cc(i, t) && this.fu.add(e), this.Hu(e, i, t), (r = Vs(e)) != null && r.volatile || this.Bu(e));
	}
	Lu(e, t = !0) {
		delete this.props[e], t && (bc(e) && this.Cu(e, !0), Sc(e) && this.fu.add(e), this.Bu(e));
	}
	Bu(e) {
		var t;
		let n = (t = Vs(e)) == null ? void 0 : t.storageGroup;
		n && (this.Tu(n).dirty = !0);
	}
	Tu(e) {
		return this.su[e] || (this.su[e] = {});
	}
}, Dc = {
	GZipJS: "gzip-js",
	Base64: "base64"
}, Oc = {
	Activation: "events",
	Cancellation: "cancelEvents"
}, kc = {
	Popover: "popover",
	API: "api",
	Widget: "widget",
	ExternalSurvey: "external_survey"
}, Ac = {
	SHOWN: "survey shown",
	DISMISSED: "survey dismissed",
	SENT: "survey sent",
	ABANDONED: "survey abandoned"
}, jc = {
	SURVEY_ID: "$survey_id",
	SURVEY_NAME: "$survey_name",
	SURVEY_RESPONSE: "$survey_response",
	SURVEY_ITERATION: "$survey_iteration",
	SURVEY_ITERATION_START_DATE: "$survey_iteration_start_date",
	SURVEY_PARTIALLY_COMPLETED: "$survey_partially_completed",
	SURVEY_SUBMISSION_ID: "$survey_submission_id",
	SURVEY_QUESTIONS: "$survey_questions",
	SURVEY_COMPLETED: "$survey_completed",
	PRODUCT_TOUR_ID: "$product_tour_id",
	SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date",
	SURVEY_LANGUAGE: "$survey_language"
}, Mc = {
	Popover: "popover",
	Inline: "inline"
};
function Nc(e) {
	let t = !0;
	return { dispose() {
		if (t) {
			t = !1;
			let n = e();
			n && E(n.then) && n.then(void 0, () => {});
		}
	} };
}
var Pc = {
	SHOWN: "product tour shown",
	DISMISSED: "product tour dismissed",
	COMPLETED: "product tour completed",
	STEP_SHOWN: "product tour step shown",
	STEP_COMPLETED: "product tour step completed",
	BUTTON_CLICKED: "product tour button clicked",
	STEP_SELECTOR_FAILED: "product tour step selector failed",
	BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed",
	BANNER_ACTION_CLICKED: "product tour banner action clicked"
}, Fc = {
	TOUR_ID: "$product_tour_id",
	TOUR_NAME: "$product_tour_name",
	TOUR_ITERATION: "$product_tour_iteration",
	TOUR_RENDER_REASON: "$product_tour_render_reason",
	TOUR_STEP_ID: "$product_tour_step_id",
	TOUR_STEP_ORDER: "$product_tour_step_order",
	TOUR_STEP_TYPE: "$product_tour_step_type",
	TOUR_DISMISS_REASON: "$product_tour_dismiss_reason",
	TOUR_BUTTON_TEXT: "$product_tour_button_text",
	TOUR_BUTTON_ACTION: "$product_tour_button_action",
	TOUR_BUTTON_LINK: "$product_tour_button_link",
	TOUR_BUTTON_TOUR_ID: "$product_tour_button_tour_id",
	TOUR_STEPS_COUNT: "$product_tour_steps_count",
	TOUR_STEP_SELECTOR: "$product_tour_step_selector",
	TOUR_STEP_SELECTOR_FOUND: "$product_tour_step_selector_found",
	TOUR_STEP_ELEMENT_TAG: "$product_tour_step_element_tag",
	TOUR_STEP_ELEMENT_ID: "$product_tour_step_element_id",
	TOUR_STEP_ELEMENT_CLASSES: "$product_tour_step_element_classes",
	TOUR_STEP_ELEMENT_TEXT: "$product_tour_step_element_text",
	TOUR_ERROR: "$product_tour_error",
	TOUR_MATCHES_COUNT: "$product_tour_matches_count",
	TOUR_FAILURE_PHASE: "$product_tour_failure_phase",
	TOUR_WAITED_FOR_ELEMENT: "$product_tour_waited_for_element",
	TOUR_WAIT_DURATION_MS: "$product_tour_wait_duration_ms",
	TOUR_BANNER_SELECTOR: "$product_tour_banner_selector",
	TOUR_LINKED_SURVEY_ID: "$product_tour_linked_survey_id",
	USE_MANUAL_SELECTOR: "$use_manual_selector",
	INFERENCE_DATA_PRESENT: "$inference_data_present",
	TOUR_LAST_SEEN_DATE: "$product_tour_last_seen_date",
	TOUR_TYPE: "$product_tour_type"
}, Ic = U("[RateLimiter]"), Lc = class {
	constructor(e) {
		this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (e) => {
			let t = e.text;
			if (t && t.length) try {
				(JSON.parse(t).quota_limited || []).forEach((e) => {
					Ic.info(`${e || "events"} is quota limited.`), this.serverLimits[e] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
				});
			} catch (e) {
				Ic.warn(`could not rate limit - continuing. Error: "${e == null ? void 0 : e.message}"`, { text: t });
				return;
			}
		}, this.instance = e, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
	}
	get captureEventsPerSecond() {
		var e;
		return ((e = this.instance.config.rate_limiting) == null ? void 0 : e.events_per_second) || 10;
	}
	get captureEventsBurstLimit() {
		var e;
		return Math.max(((e = this.instance.config.rate_limiting) == null ? void 0 : e.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
	}
	get isClientRateLimited() {
		return 1 > this.yc().tokens;
	}
	clientRateLimitContext(e = !1) {
		var t;
		let n = this.yc(), r = 1 > n.tokens;
		if (r || e || (n.tokens = Math.max(0, n.tokens - 1)), r && !e) {
			let e = (P(n.dropped) ? n.dropped : 0) + 1;
			n.dropped = e, !this.lastEventRateLimited && this.bc(e) && (n.dropped = 0);
		}
		return this.lastEventRateLimited = r, (t = this.instance.persistence) == null || t.set_property("$capture_rate_limit", n), {
			isRateLimited: r,
			remainingTokens: n.tokens
		};
	}
	yc() {
		var e;
		let { captureEventsBurstLimit: t, captureEventsPerSecond: n } = this, r = (/* @__PURE__ */ new Date()).getTime(), i = (e = this.instance.persistence) == null ? void 0 : e.get_property(Oa), a = i ? V({}, i) : {
			tokens: t,
			last: r
		};
		return a.tokens += Math.max(0, r - a.last) / 1e3 * n, a.last = Math.max(a.last, r), a.tokens > t && (a.tokens = t), a;
	}
	_c(e) {
		let t = this.instance.config.property_denylist;
		return !T(t) || !t.includes(e);
	}
	wc() {
		var e;
		if (this._c("$current_url") && this._c("$pathname") && i != null && i.pathname) return `${(e = i.origin) == null ? "" : e}${i.pathname}`;
	}
	bc(e) {
		var t, n;
		let { captureEventsBurstLimit: r, captureEventsPerSecond: i } = this, a = this.wc(), o = this._c("$session_id") ? (t = (n = this.instance).get_session_id) == null ? void 0 : t.call(n) : void 0, s = [
			`${e} event(s) dropped since the last warning`,
			a ? `triggered on ${a}` : void 0,
			o ? `session ${o}` : void 0
		].filter(Boolean).join(", ");
		return !!this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: `posthog-js client rate limited: ${s}. Config is set to ${i} events per second and ${r} events burst limit.` }, { skip_client_rate_limiting: !0 });
	}
	isServerRateLimited(e) {
		let t = this.serverLimits[e || "events"] || !1;
		return !1 !== t && (/* @__PURE__ */ new Date()).getTime() < t;
	}
}, Rc = U("[RemoteConfig]"), zc = class {
	constructor(e) {
		this._instance = e;
	}
	get remoteConfig() {
		var e;
		return (e = d._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config;
	}
	kc(e) {
		let t = oi(this._instance);
		t ? t(this._instance, "remote-config", () => e(this.remoteConfig)) : e();
	}
	Sc(e) {
		let t = this._instance.__pending_remote_config_callbacks;
		if (t) return void t.push(e);
		let n = [e];
		this._instance.__pending_remote_config_callbacks = n;
		try {
			this._instance._send_request({
				method: "GET",
				url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
				batchKey: "remote_config",
				fireCallbackOnDrop: !0,
				callback: (e) => {
					this._instance.__pending_remote_config_callbacks = void 0, n.forEach((t) => t(e));
				}
			});
		} catch (e) {
			throw this._instance.__pending_remote_config_callbacks = void 0, e;
		}
	}
	load() {
		try {
			if (this.remoteConfig) return Rc.info("Using preloaded remote config", this.remoteConfig), void this.xc(this.remoteConfig);
			if (this._instance.$c()) return void Rc.warn("Remote config is disabled. Falling back to local config.");
			if (!this._instance.config.opt_in_site_apps) return void this.Sc((e) => {
				this.xc(e.json, e);
			});
			this.kc((e) => {
				if (!e) return Rc.info("No config found after loading remote JS config. Falling back to JSON."), void this.Sc((e) => {
					this.xc(e.json, e);
				});
				this.xc(e);
			});
		} catch (e) {
			Rc.error("Error loading remote config", e), this.xc();
		}
	}
	xc(e, t) {
		!e && t && (t.statusCode === 0 ? t.error || Rc.warn("Failed to fetch remote config from PostHog.") : Rc.error("Failed to fetch remote config from PostHog."));
		try {
			this._instance.xc(e ? {
				ok: !0,
				config: e
			} : { ok: !1 });
		} catch (e) {
			Rc.error("Error applying remote config", e);
		}
		if (!1 !== (e == null ? void 0 : e.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
			var n;
			(n = this._instance.featureFlags) == null || n.ensureFlagsLoaded();
		} catch (e) {
			Rc.error("Error loading feature flags", e);
		}
	}
}, Bc = Uint8Array, Vc = Uint16Array, Hc = Uint32Array, Uc = new Bc([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), Wc = new Bc([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), Gc = new Bc([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), Kc = function(e, t) {
	for (var n = new Vc(31), r = 0; 31 > r; ++r) n[r] = t += 1 << e[r - 1];
	var i = new Hc(n[30]);
	for (r = 1; 30 > r; ++r) for (var a = n[r]; n[r + 1] > a; ++a) i[a] = a - n[r] << 5 | r;
	return [n, i];
}, qc = Kc(Uc, 2), Jc = qc[1];
qc[0][28] = 258, Jc[258] = 28;
for (var Yc = Kc(Wc, 0)[1], Xc = new Vc(32768), X = 0; 32768 > X; ++X) {
	var Zc = (43690 & X) >>> 1 | (21845 & X) << 1;
	Xc[X] = ((65280 & (Zc = (61680 & (Zc = (52428 & Zc) >>> 2 | (13107 & Zc) << 2)) >>> 4 | (3855 & Zc) << 4)) >>> 8 | (255 & Zc) << 8) >>> 1;
}
var Qc = function(e, t, n) {
	for (var r = e.length, i = 0, a = new Vc(t); r > i; ++i) ++a[e[i] - 1];
	var o, s = new Vc(t);
	for (i = 0; t > i; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
	if (n) {
		o = new Vc(1 << t);
		var c = 15 - t;
		for (i = 0; r > i; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; f >= d; ++d) o[Xc[d] >>> c] = l;
	} else for (o = new Vc(r), i = 0; r > i; ++i) o[i] = Xc[s[e[i] - 1]++] >>> 15 - e[i];
	return o;
}, $c = new Bc(288);
for (X = 0; 144 > X; ++X) $c[X] = 8;
for (X = 144; 256 > X; ++X) $c[X] = 9;
for (X = 256; 280 > X; ++X) $c[X] = 7;
for (X = 280; 288 > X; ++X) $c[X] = 8;
var el = new Bc(32);
for (X = 0; 32 > X; ++X) el[X] = 5;
var tl = Qc($c, 9, 0), nl = Qc(el, 5, 0), rl = function(e) {
	return (e / 8 | 0) + (7 & e && 1);
}, il = function(e, t, n) {
	(t == null || 0 > t) && (t = 0), (n == null || n > e.length) && (n = e.length);
	var r = new (e instanceof Vc ? Vc : e instanceof Hc ? Hc : Bc)(n - t);
	return r.set(e.subarray(t, n)), r;
}, al = function(e, t, n) {
	var r = t / 8 | 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8;
}, ol = function(e, t, n) {
	var r = t / 8 | 0;
	e[r] |= n <<= 7 & t, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, sl = function(e, t) {
	for (var n = [], r = 0; e.length > r; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return [new Bc(0), 0];
	if (i == 1) {
		var o = new Bc(n[0].s + 1);
		return o[n[0].s] = 1, [o, 1];
	}
	n.sort(function(e, t) {
		return e.f - t.f;
	}), n.push({
		s: -1,
		f: 25001
	});
	var s = n[0], c = n[1], l = 0, u = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	}; u != i - 1;) s = n[n[d].f > n[l].f ? l++ : d++], c = n[l != u && n[d].f > n[l].f ? l++ : d++], n[u++] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	};
	var f = a[0].s;
	for (r = 1; i > r; ++r) a[r].s > f && (f = a[r].s);
	var p = new Vc(f + 1), m = cl(n[u - 1], p, 0);
	if (m > t) {
		r = 0;
		var h = 0, g = m - t, _ = 1 << g;
		for (a.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); i > r; ++r) {
			var v = a[r].s;
			if (t >= p[v]) break;
			h += _ - (1 << m - p[v]), p[v] = t;
		}
		for (h >>>= g; h > 0;) {
			var y = a[r].s;
			t > p[y] ? h -= 1 << t - p[y]++ - 1 : ++r;
		}
		for (; r >= 0 && h; --r) {
			var b = a[r].s;
			p[b] == t && (--p[b], ++h);
		}
		m = t;
	}
	return [new Bc(p), m];
}, cl = function(e, t, n) {
	return e.s == -1 ? Math.max(cl(e.l, t, n + 1), cl(e.r, t, n + 1)) : t[e.s] = n;
}, ll = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Vc(++t), r = 0, i = e[0], a = 1, o = function(e) {
		n[r++] = e;
	}, s = 1; t >= s; ++s) if (e[s] == i && s != t) ++a;
	else {
		if (!i && a > 2) {
			for (; a > 138; a -= 138) o(32754);
			a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
		} else if (a > 3) {
			for (o(i), --a; a > 6; a -= 6) o(8304);
			a > 2 && (o(a - 3 << 5 | 8208), a = 0);
		}
		for (; a--;) o(i);
		a = 1, i = e[s];
	}
	return [n.subarray(0, r), t];
}, ul = function(e, t) {
	for (var n = 0, r = 0; t.length > r; ++r) n += e[r] * t[r];
	return n;
}, dl = function(e, t, n) {
	var r = n.length, i = rl(t + 2);
	e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var a = 0; r > a; ++a) e[i + a + 4] = n[a];
	return 8 * (i + 4 + r);
}, fl = function(e, t, n, r, i, a, o, s, c, l, u) {
	al(t, u++, n), ++i[256];
	for (var d = sl(i, 15), f = d[0], p = d[1], m = sl(a, 15), h = m[0], g = m[1], _ = ll(f), v = _[0], y = _[1], b = ll(h), x = b[0], S = b[1], C = new Vc(19), w = 0; v.length > w; ++w) C[31 & v[w]]++;
	for (w = 0; x.length > w; ++w) C[31 & x[w]]++;
	for (var T = sl(C, 7), E = T[0], D = T[1], O = 19; O > 4 && !E[Gc[O - 1]]; --O);
	var k, A, j, M, N = l + 5 << 3, P = ul(i, $c) + ul(a, el) + o, F = ul(i, f) + ul(a, h) + o + 14 + 3 * O + ul(C, E) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
	if (P >= N && F >= N) return dl(t, u, e.subarray(c, c + l));
	if (al(t, u, 1 + (P > F)), u += 2, P > F) {
		k = Qc(f, p, 0), A = f, j = Qc(h, g, 0), M = h;
		var ee = Qc(E, D, 0);
		for (al(t, u, y - 257), al(t, u + 5, S - 1), al(t, u + 10, O - 4), u += 14, w = 0; O > w; ++w) al(t, u + 3 * w, E[Gc[w]]);
		u += 3 * O;
		for (var te = [v, x], ne = 0; 2 > ne; ++ne) {
			var re = te[ne];
			for (w = 0; re.length > w; ++w) al(t, u, ee[I = 31 & re[w]]), u += E[I], I > 15 && (al(t, u, re[w] >>> 5 & 127), u += re[w] >>> 12);
		}
	} else k = tl, A = $c, j = nl, M = el;
	for (w = 0; s > w; ++w) if (r[w] > 255) {
		var I;
		ol(t, u, k[257 + (I = r[w] >>> 18 & 31)]), u += A[I + 257], I > 7 && (al(t, u, r[w] >>> 23 & 31), u += Uc[I]);
		var ie = 31 & r[w];
		ol(t, u, j[ie]), u += M[ie], ie > 3 && (ol(t, u, r[w] >>> 5 & 8191), u += Wc[ie]);
	} else ol(t, u, k[r[w]]), u += A[r[w]];
	return ol(t, u, k[256]), u + A[256];
}, pl = new Hc([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), ml = new Bc(0), hl = function() {
	for (var e = new Hc(256), t = 0; 256 > t; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && 3988292384) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), gl = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function _l(e, t) {
	t === void 0 && (t = {});
	var n = function() {
		var e = 4294967295;
		return {
			p(t) {
				for (var n = e, r = 0; t.length > r; ++r) n = hl[255 & n ^ t[r]] ^ n >>> 8;
				e = n;
			},
			d() {
				return 4294967295 ^ e;
			}
		};
	}(), r = e.length;
	n.p(e);
	var i, a, o, s, c, l, u = (s = 10 + ((i = t).filename && i.filename.length + 1 || 0), c = 8, function(e, t, n, r, i, a) {
		var o = e.length, s = new Bc(r + o + 5 * (1 + Math.floor(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = 0;
		if (!t || 8 > o) for (var u = 0; o >= u; u += 65535) {
			var d = u + 65535;
			o > d ? l = dl(c, l, e.subarray(u, d)) : (c[u] = a, l = dl(c, l, e.subarray(u, o)));
		}
		else {
			for (var f = pl[t - 1], p = f >>> 13, m = 8191 & f, h = (1 << n) - 1, g = new Vc(32768), _ = new Vc(h + 1), v = Math.ceil(n / 3), y = 2 * v, b = function(t) {
				return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h;
			}, x = new Hc(25e3), S = new Vc(288), C = new Vc(32), w = 0, T = 0, E = (u = 0, 0), D = 0, O = 0; o > u; ++u) {
				var k = b(u), A = 32767 & u, j = _[k];
				if (g[A] = j, _[k] = A, u >= D) {
					var M = o - u;
					if ((w > 7e3 || E > 24576) && M > 423) {
						l = fl(e, c, 0, x, S, C, T, E, O, u - O, l), E = w = T = 0, O = u;
						for (var N = 0; 286 > N; ++N) S[N] = 0;
						for (N = 0; 30 > N; ++N) C[N] = 0;
					}
					var P = 2, F = 0, ee = m, te = A - j & 32767;
					if (M > 2 && k == b(u - te)) for (var ne = Math.min(p, M) - 1, re = Math.min(32767, u), I = Math.min(258, M); re >= te && --ee && A != j;) {
						if (e[u + P] == e[u + P - te]) {
							for (var ie = 0; I > ie && e[u + ie] == e[u + ie - te]; ++ie);
							if (ie > P) {
								if (P = ie, F = te, ie > ne) break;
								var ae = Math.min(te, ie - 2), oe = 0;
								for (N = 0; ae > N; ++N) {
									var se = u - te + N + 32768 & 32767, ce = se - g[se] + 32768 & 32767;
									ce > oe && (oe = ce, j = se);
								}
							}
						}
						te += (A = j) - (j = g[A]) + 32768 & 32767;
					}
					if (F) {
						x[E++] = 268435456 | Jc[P] << 18 | Yc[F];
						var le = 31 & Jc[P], ue = 31 & Yc[F];
						T += Uc[le] + Wc[ue], ++S[257 + le], ++C[ue], D = u + P, ++w;
					} else x[E++] = e[u], ++S[e[u]];
				}
			}
			l = fl(e, c, a, x, S, C, T, E, O, u - O, l), a || (l = dl(c, l, ml));
		}
		return il(s, 0, r + rl(l) + i);
	}(a = e, (o = t).level == null ? 6 : o.level, o.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(a.length)))) : 12 + o.mem, s, c, !l)), d = u.length;
	return function(e, t) {
		var n = t.filename;
		if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = 2 > t.level ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && gl(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
			e[3] = 8;
			for (var r = 0; n.length >= r; ++r) e[r + 10] = n.charCodeAt(r);
		}
	}(u, t), gl(u, d - 8, n.d()), gl(u, d - 4, r), u;
}
var vl = !!o || !!a, yl = /* @__PURE__ */ new WeakMap(), bl = "text/plain", xl = 0, Sl = !1, Cl = (e, t) => {
	let [n, r] = e.split("#"), [i, a] = n.split("?");
	if (!a) return e;
	let o = a.split("&").filter((e) => e.split("=")[0] !== t).join("&");
	return `${i}${o ? `?${o}` : ""}${r ? `#${r}` : ""}`;
}, wl = (e, t, n = !0) => {
	var r;
	let [i, a] = e.split("?"), o = V({}, t), s = (r = a == null ? void 0 : a.split("&").map((e) => {
		var t;
		let [r, i] = e.split("="), a = n && (t = o[r]) != null ? t : i;
		return delete o[r], `${r}=${a}`;
	})) == null ? [] : r, c = function(e, t = "&") {
		let n, r, i = [];
		return W(e, function(e, t) {
			k(e) || k(t) || t === "undefined" || (n = encodeURIComponent(((e) => e instanceof File)(e) ? e.name : e.toString()), r = encodeURIComponent(t), i[i.length] = r + "=" + n);
		}), i.join(t);
	}(o);
	return c && s.push(c), s.length > 0 ? `${i}?${s.join("&")}` : i;
}, Tl = (e) => {
	if (e.pr) return e.pr;
	let { data: t, compression: n } = e;
	if (!t) return;
	if (n === Dc.GZipJS) {
		let e = _l(function(e) {
			var t = e.length;
			if (typeof TextEncoder < "u") return new TextEncoder().encode(e);
			for (var n = new Bc(e.length + (e.length >>> 1)), r = 0, i = function(e) {
				n[r++] = e;
			}, a = 0; t > a; ++a) {
				if (r + 5 > n.length) {
					var o = new Bc(r + 8 + (t - a << 1));
					o.set(n), n = o;
				}
				var s = e.charCodeAt(a);
				128 > s ? i(s) : 2048 > s ? (i(192 | s >>> 6), i(128 | 63 & s)) : s > 55295 && 57344 > s ? (i(240 | (s = 65536 + (1047552 & s) | 1023 & e.charCodeAt(++a)) >>> 18), i(128 | s >>> 12 & 63), i(128 | s >>> 6 & 63), i(128 | 63 & s)) : (i(224 | s >>> 12), i(128 | s >>> 6 & 63), i(128 | 63 & s));
			}
			return il(n, 0, r);
		}(qs(t)), { mtime: 0 });
		return {
			contentType: bl,
			body: e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength),
			estimatedSize: e.byteLength
		};
	}
	if (n === Dc.Base64) {
		let n = function(e) {
			return e && btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))));
		}(qs(t)), r = e.transport === "sendBeacon", i = r ? n : ((e) => "data=" + encodeURIComponent(typeof e == "string" ? e : qs(e)))(n);
		return {
			contentType: r ? bl : "application/x-www-form-urlencoded",
			body: i,
			estimatedSize: new Blob([i]).size
		};
	}
	let r = qs(t);
	return {
		contentType: "application/json",
		body: r,
		estimatedSize: new Blob([r]).size
	};
}, El = (e) => {
	let t = () => e.transport === "sendBeacon" ? {
		url: wl(e.url, { compression: Dc.Base64 }),
		encodedBody: Tl(V(V({}, e), {}, {
			compression: Dc.Base64,
			pr: void 0
		}))
	} : {
		url: Cl(e.url, "compression"),
		encodedBody: Tl(V(V({}, e), {}, {
			compression: void 0,
			pr: void 0
		}))
	}, n;
	try {
		n = Tl(e);
	} catch (n) {
		if (An(e.compression, Js(e.url, "compression"))) return H.error("Failed to gzip request body, sending uncompressed payload", n), t();
		throw n;
	}
	return n && An(e.compression, Js(e.url, "compression")) && !((r = n.body) instanceof ArrayBuffer ? kn(new Uint8Array(r)) : ArrayBuffer.isView(r) && kn(new Uint8Array(r.buffer, r.byteOffset, r.byteLength))) ? (Sl = !0, t()) : {
		url: e.url,
		encodedBody: n
	};
	var r;
}, Dl = (e) => {
	try {
		return El(e);
	} catch (n) {
		var t;
		H.error(n), (t = e.callback) == null || t.call(e, {
			statusCode: 0,
			error: n
		});
		return;
	}
}, Ol = function() {
	var e = L(function* (e) {
		let t = yield function(e) {
			return Ln.apply(this, arguments);
		}(qs(e.data), mi.DEBUG, { rethrow: !0 });
		if (!t) return e;
		let n = yield t.arrayBuffer();
		return V(V({}, e), {}, { pr: {
			contentType: bl,
			body: n,
			estimatedSize: n.byteLength
		} });
	});
	return function(t) {
		return e.apply(this, arguments);
	};
}(), kl = (e) => Ct("AbortError", "PostHog request timed out" + (e ? ` after ${e}ms` : "")), Al = /Failed to fetch|NetworkError|Load failed/i, jl = (e) => (e == null ? void 0 : e.name) === "TypeError" && Al.test((e == null ? void 0 : e.message) || ""), Ml = (e) => {
	try {
		let t = function(e, t = Date.now(), n = 3e5) {
			if (typeof e != "string" || !e) return;
			let r = e.trim(), i = /^\d+\s*,/.test(r) ? r.slice(0, r.indexOf(",")).trim() : r;
			if (/^\d+$/.test(i)) {
				let e = 1e3 * Math.min(Number(i), n / 1e3);
				return e > 0 ? e : void 0;
			}
			if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(i)) return;
			let a = /^\w{3} \w{3} /.test(i) ? i + " GMT" : i, o = Date.parse(a) - t;
			return Number.isFinite(o) && o > 0 ? Math.min(o, n) : void 0;
		}(e());
		return k(t) ? void 0 : Math.min(t, 3e4);
	} catch (e) {
		return;
	}
}, Nl = (e) => {
	var t;
	let n = Dl(e);
	if (!n) return;
	let r = new o();
	yl.set(r, !0);
	let { url: i, encodedBody: a } = n;
	r.open(e.method || "GET", i, !0);
	let { contentType: s, body: c } = a == null ? {} : a;
	W(e.headers, function(e, t) {
		r.setRequestHeader(t, e);
	}), s && r.setRequestHeader("Content-Type", s), e.timeout && (r.timeout = e.timeout);
	let l = !1;
	r.ontimeout = () => {
		l = !0;
	}, r.onloadend = () => {
		var t;
		if (l) {
			var n;
			let t = kl(e.timeout);
			H.warn(t), (n = e.callback) == null || n.call(e, {
				statusCode: 0,
				error: t
			});
			return;
		}
		let i = {
			statusCode: r.status,
			text: r.responseText
		};
		if (r.status === 200) try {
			i.json = JSON.parse(r.responseText);
		} catch (e) {}
		(t = e.callback) == null || t.call(e, i, Ml(() => r.getResponseHeader("Retry-After")));
	}, (t = e.onSend) == null || t.call(e, i), r.send(c);
}, Pl = (e) => {
	let t = Dl(e);
	if (!t) return;
	let { url: n, encodedBody: r } = t, { contentType: i, body: o, estimatedSize: c } = r == null ? {} : r, l = new Headers();
	W(e.headers, function(e, t) {
		l.append(t, e);
	}), i && l.append("Content-Type", i);
	let u = null, d = !1;
	if (s) {
		let t = new s();
		u = {
			signal: t.signal,
			timeout: setTimeout(() => {
				d = !0;
				try {
					t.abort(kl(e.timeout));
				} catch (e) {
					p(e);
				}
			}, e.timeout)
		};
	}
	let f = !1, p = (t) => {
		var n;
		f || (f = !0, d && (t == null ? void 0 : t.name) === "AbortError" || jl(t) ? H.warn(t) : H.error(t), (n = e.callback) == null || n.call(e, {
			statusCode: 0,
			error: t
		}));
	}, m = 0, h = () => {
		xl -= m, m = 0, u && clearTimeout(u.timeout);
	};
	try {
		var g;
		let t = V({
			method: (e == null ? void 0 : e.method) || "GET",
			headers: l,
			referrerPolicy: "strict-origin",
			body: o,
			signal: u == null ? void 0 : u.signal
		}, e.fetchOptions);
		(g = e.onSend) == null || g.call(e, n);
		let r = c == null ? k(o) ? 0 : void 0 : c;
		t.keepalive = t.method === "POST" && !e.Ua && !1 !== t.keepalive && t.body === o && !k(r) && r >= 0 && 52428.8 > xl + r, t.keepalive && (m = r, xl += m), a(n, t).then((t) => t.text().then((n) => {
			var r;
			if (f) return;
			let i = {
				statusCode: t.status,
				text: n
			};
			if (t.status === 200) try {
				i.json = JSON.parse(n);
			} catch (e) {
				H.error(e);
			}
			f = !0, h(), (r = e.callback) == null || r.call(e, i, Ml(() => t.headers.get("Retry-After")));
		})).catch((e) => {
			h(), p(e);
		}).finally(h);
	} catch (e) {
		h(), p(e);
	}
}, Fl = (e) => {
	try {
		var t;
		let { url: r, encodedBody: i } = El(e), { contentType: o, body: s, estimatedSize: c } = i == null ? {} : i;
		if (!s) return;
		let l = s instanceof Blob ? s : new Blob([s], { type: o });
		if (n.sendBeacon(r, l)) return;
		let u = T(e.data) ? e.data : (t = e.data) == null ? void 0 : t.batch;
		if (T(u) && u.length > 1 && (c == null ? 0 : c) > 16384) {
			let t = Math.ceil(u.length / 2), n = (t) => T(e.data) ? t : V(V({}, e.data), {}, { batch: t });
			Fl(V(V({}, e), {}, { data: n(u.slice(0, t)) })), Fl(V(V({}, e), {}, { data: n(u.slice(t)) }));
			return;
		}
		H.warn(`Beacon of ~${c == null ? 0 : c} bytes was rejected by the browser, falling back to ${a ? "fetch" : "XHR"}`), a ? Pl(V(V({}, e), {}, { Ua: !0 })) : Nl(e);
	} catch (e) {
		H.warn("Beacon send failed", e);
	}
}, Il = (e, t, n, r) => {
	let i = r === "query" ? t === "POST" ? "sent_at" : "_" : void 0;
	return wl(n === Dc.GZipJS ? Cl(e, "compression") : e, V(V({}, i ? { [i]: Date.now().toString() } : {}), n === Dc.GZipJS ? {} : { compression: n }));
}, Ll = (() => {
	let e = [];
	return a && e.push({
		transport: "fetch",
		method: Pl
	}), o && e.push({
		transport: "XHR",
		method: Nl
	}), n != null && n.sendBeacon && e.push({
		transport: "sendBeacon",
		method: Fl
	}), e;
})(), Rl = !vl && (l == null ? void 0 : l.indexOf("MSIE")) === -1 && (l == null ? void 0 : l.indexOf("Mozilla")) === -1;
function zl(e, t, n) {
	var r, i, a, o;
	n && (t = V(V({}, t), {}, { callback: (e) => n(e) })), e.__loaded ? Rl ? e.__request_queue.push(t) : e.rateLimiter.isServerRateLimited(t.batchKey) ? t.fireCallbackOnDrop && ((a = t.callback) == null || a.call(t, { statusCode: 429 })) : (t.transport = t.transport || e.config.api_transport, t.headers = V(V({}, e.config.request_headers), t.headers), t.compression = t.compression === "best-available" ? (r = e.compression) == null ? t.compressionFallback : r : t.compression, (k(e.config.disable_beacon) ? e.config.__preview_disable_beacon : e.config.disable_beacon) && (t.disableTransport = ["sendBeacon"]), t.fetchOptions = t.fetchOptions || e.config.fetch_options, (i = t.onDispatch) == null || i.call(t), ((e, t) => {
		var n, r, i;
		let a = V(V({}, e), {}, { callback: t == null ? (t) => {
			var n;
			return (n = e.callback) == null ? void 0 : n.call(e, t);
		} : t });
		a.timeout = a.timeout || 6e4;
		let o = (n = a.transport) == null ? "fetch" : n;
		o === "sendBeacon" && k(a.compression) && a.data && (a.compression = Dc.Base64), a.method === "POST" && a.data && (a.timestampMode === "capture-body" ? a.data = ((e) => {
			var t, n;
			let r = (T(e) ? e : [e]).map((e) => V(V({}, e), e.timestamp instanceof Date && !isNaN(e.timestamp.getTime()) ? { timestamp: e.timestamp.toISOString() } : {})), i = r[0];
			return {
				api_key: (t = i == null || (n = i.properties) == null ? void 0 : n.token) == null ? i == null ? void 0 : i.token : t,
				batch: r,
				sent_at: (/* @__PURE__ */ new Date()).toISOString()
			};
		})(a.data) : a.timestampMode === "body" && (a.data = ((e, t = (/* @__PURE__ */ new Date()).toISOString()) => T(e) ? e.map((e) => V(V({}, e), {}, { sent_at: t })) : V(V({}, e), {}, { sent_at: t }))(a.data))), a.url = Il(a.url, a.method, a.compression, a.timestampMode);
		let s = Ll.filter((e) => !a.disableTransport || !e.transport || !a.disableTransport.includes(e.transport)), l = (r = (i = function(e, t) {
			for (let n = 0; e.length > n; n++) if (t(e[n])) return e[n];
		}(s, (e) => e.transport === o)) == null ? void 0 : i.method) == null ? s[0].method : r;
		if (!l) throw Error("No available transport method");
		let u = (e) => {
			try {
				l(e);
			} catch (e) {
				var t;
				jl(e) ? H.warn(e) : H.error(e), (t = a.callback) == null || t.call(a, {
					statusCode: 0,
					error: e
				});
			}
		};
		o !== "sendBeacon" && !a.preferSyncCompression && a.data && a.compression === Dc.GZipJS && c && typeof Promise < "u" && !Sl ? Ol(a).then((e) => {
			u(e);
		}).catch((t) => {
			if (jn(t)) return Sl = !0, void u(V(V({}, a), {}, {
				compression: void 0,
				url: Il(e.url, e.method, void 0, e.timestampMode)
			}));
			((e) => {
				if (!e || typeof e != "object") return !1;
				let t = "name" in e ? String(e.name) : "";
				return jn(e) || t === On;
			})(t) && (Sl = !0), u(a);
		}) : u(a);
	})(t, (r, i) => {
		var a, o, s;
		e.rateLimiter.checkForLimiting(r), 400 > r.statusCode || (a = (o = e.config).on_request_error) == null || a.call(o, r), n ? n(r, i) : (s = t.callback) == null || s.call(t, r);
	})) : t.fireCallbackOnDrop && ((o = t.callback) == null || o.call(t, { statusCode: 0 }));
}
var Bl = class {
	constructor(e, t) {
		this.Cc = !0, this.Tc = [], this.Mc = z((t == null ? void 0 : t.flush_interval_ms) || 3e3, 250, 5e3, H.createLogger("flush interval"), 3e3), this.Ic = e;
	}
	enqueue(e) {
		this.Tc.push(e), this.Ec || this.Ac();
	}
	unload() {
		this.Rc();
		let e = this.Tc.length > 0 ? this.Pc() : {}, t = Object.values(e);
		[...t.filter((e) => e.url.indexOf("/e") === 0), ...t.filter((e) => e.url.indexOf("/e") !== 0)].map((e) => {
			this.Oc(V(V({}, e), {}, { callback: void 0 }), "sendBeacon");
		});
	}
	enable() {
		this.Cc = !1, this.Ac();
	}
	Ac() {
		this.Cc || (this.Ec = setTimeout(() => {
			this.Rc(), this.Fc();
		}, this.Mc));
	}
	Fc() {
		if (this.Tc.length > 0) {
			let e = this.Pc();
			for (let t in e) this.Oc(e[t]);
		}
	}
	Oc(e, t) {
		try {
			this.Ic(e, t);
		} catch (e) {
			H.error(e);
		}
	}
	Rc() {
		clearTimeout(this.Ec), this.Ec = void 0;
	}
	Pc() {
		let e = {}, t = {};
		W(this.Tc, (n) => {
			var r;
			let i = n, a = ((i ? i.batchKey : null) || i.url) + (i.batchGroup ? `:${i.batchGroup}` : "");
			k(e[a]) && (e[a] = V(V({}, i), {}, {
				data: [],
				callback: void 0,
				fireCallbackOnDrop: void 0
			}), t[a] = []), (r = e[a].data) == null || r.push(i.data), i.callback && t[a].push(i.callback);
		});
		for (let n in t) {
			let r = t[n];
			r.length && (e[n].callback = (e) => {
				for (let t of r) t(e);
			});
		}
		return this.Tc = [], e;
	}
}, Vl = ["retriesPerformedSoFar"], Hl = class {
	constructor(e) {
		this._instance = e, this.Lc = !1, this.Dc = 3e3, this.Tc = [], this.Tc = [], this.Nc = !0, this.resume();
	}
	resume() {
		if (!k(e) && "onLine" in e.navigator) {
			if (this.Nc = e.navigator.onLine, this.jc) return;
			this.jc = () => {
				this.Nc = !0, this.Fc();
			}, this.qc = () => {
				this.Nc = !1;
			}, K(e, "online", this.jc), K(e, "offline", this.qc);
		}
	}
	get length() {
		return this.Tc.length;
	}
	retriableRequest(e, t) {
		let { retriesPerformedSoFar: n } = e, r = Rn(e, Vl);
		F(n) && (r.url = wl(r.url, { retry_count: n })), zl(this._instance, t ? V(V({}, r), {}, { transport: t }) : r, (e, t) => {
			var i;
			if (e.statusCode !== 200 && (400 > e.statusCode || e.statusCode >= 500)) {
				if ((e.statusCode === 0 ? 3 : 10) > (n == null ? 0 : n)) return void this.js(V({ retriesPerformedSoFar: n }, r), t);
				e.statusCode === 0 && H.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${n == null ? 0 : n} retries.`);
			}
			(i = r.callback) == null || i.call(r, e);
		});
	}
	js(e, t) {
		let n = e.retriesPerformedSoFar || 0;
		e.retriesPerformedSoFar = n + 1;
		let r = Math.max(function(e) {
			let t = 3e3 * 2 ** e, n = t / 2, r = Math.min(18e5, t), i = (Math.random() - .5) * (r - n);
			return Math.ceil(r + i);
		}(n), t == null ? 0 : t), i = Date.now() + r;
		this.Tc.push({
			retryAt: i,
			requestOptions: e
		});
		let a = `Enqueued failed request for retry in ${r}`;
		navigator.onLine || (a += " (Browser is offline)"), H.warn(a), this.Lc || (this.Lc = !0, this.Bc());
	}
	Bc() {
		if (this.zc && clearTimeout(this.zc), this.Tc.length === 0) return this.Lc = !1, void (this.zc = void 0);
		this.zc = setTimeout(() => {
			this.Nc && this.Tc.length > 0 && this.Fc(), this.Bc();
		}, this.Dc);
	}
	Fc() {
		let e = Date.now(), t = [], n = this.Tc.filter((n) => e > n.retryAt || (t.push(n), !1));
		if (this.Tc = t, n.length > 0) for (let { requestOptions: e } of n) this.retriableRequest(e);
	}
	unload() {
		this.zc && (clearTimeout(this.zc), this.zc = void 0), this.Lc = !1, k(e) || (this.jc && (e.removeEventListener("online", this.jc), this.jc = void 0), this.qc && (e.removeEventListener("offline", this.qc), this.qc = void 0));
		for (let { requestOptions: e } of this.Tc) try {
			this._instance._send_request(V(V({}, e), {}, {
				callback: T(e.data) ? void 0 : e.callback,
				transport: "sendBeacon"
			}));
		} catch (e) {
			H.error(e);
		}
		this.Tc = [];
	}
}, Ul = class {
	constructor(e) {
		this._instance = e, this.Hc = () => {
			var e, t, n, r;
			this.Uc || (this.Uc = {});
			let i = this.scrollElement(), a = this.scrollY(), o = i ? Math.max(0, i.scrollHeight - i.clientHeight) : 0, s = a + ((i == null ? void 0 : i.clientHeight) || 0), c = (i == null ? void 0 : i.scrollHeight) || 0;
			this.Uc.lastScrollY = Math.ceil(a), this.Uc.maxScrollY = Math.max(a, (e = this.Uc.maxScrollY) == null ? 0 : e), this.Uc.maxScrollHeight = Math.max(o, (t = this.Uc.maxScrollHeight) == null ? 0 : t), this.Uc.lastContentY = s, this.Uc.maxContentY = Math.max(s, (n = this.Uc.maxContentY) == null ? 0 : n), this.Uc.maxContentHeight = Math.max(c, (r = this.Uc.maxContentHeight) == null ? 0 : r);
		};
	}
	get Wc() {
		return this._instance.config.scroll_root_selector;
	}
	getContext() {
		return this.Uc;
	}
	resetContext() {
		let e = this.Uc;
		return this.Uc = void 0, setTimeout(this.Hc, 0), e;
	}
	startMeasuringScrollPosition() {
		K(e, "scroll", this.Hc, { capture: !0 }), K(e, "scrollend", this.Hc, { capture: !0 }), K(e, "resize", this.Hc);
	}
	scrollElement() {
		if (this.Wc) {
			let n = T(this.Wc) ? this.Wc : [this.Wc];
			for (let r of n) {
				var t;
				let n = e == null || (t = e.document) == null ? void 0 : t.querySelector(r);
				if (n) return n;
			}
			return;
		}
		var n;
		return e == null || (n = e.document) == null ? void 0 : n.documentElement;
	}
	Gc(t) {
		var n, r;
		let i = t === "y" ? "scrollTop" : "scrollLeft";
		if (this.Wc) {
			let e = this.scrollElement();
			return e && e[i] || 0;
		}
		return e ? t === "y" ? e.scrollY || e.pageYOffset || ((n = e.document) == null || (n = n.documentElement) == null ? void 0 : n.scrollTop) || 0 : e.scrollX || e.pageXOffset || ((r = e.document) == null || (r = r.documentElement) == null ? void 0 : r.scrollLeft) || 0 : 0;
	}
	scrollY() {
		return this.Gc("y");
	}
	scrollX() {
		return this.Gc("x");
	}
}, Wl = (e) => dc(e == null ? void 0 : e.config.mask_personal_data_properties, e == null ? void 0 : e.config.custom_personal_data_properties, e == null ? void 0 : e.config.disable_capture_url_hashes), Gl = class {
	constructor(e, t, n, r) {
		this.ze = (e) => {
			let t = this.Vc();
			if (t && t.sessionId === e) return;
			let n = {
				sessionId: e,
				props: this.Qc(this._instance)
			};
			this.Jc.register({ [Da]: n });
		}, this._instance = e, this.Zc = t, this.Jc = n, this.Qc = r || Wl, this.Zc.onSessionId(this.ze);
	}
	Vc() {
		return this.Jc.props[Da];
	}
	getSetOnceProps() {
		var e;
		let t = (e = this.Vc()) == null ? void 0 : e.props;
		return t ? "r" in t ? fc(t, this._instance.config.disable_capture_url_hashes, this._instance.config.mask_personal_data_properties, this._instance.config.custom_personal_data_properties) : {
			$referring_domain: t.referringDomain,
			$pathname: t.initialPathName,
			utm_source: t.utm_source,
			utm_campaign: t.utm_campaign,
			utm_medium: t.utm_medium,
			utm_content: t.utm_content,
			utm_term: t.utm_term
		} : {};
	}
	getSessionProps() {
		let e = {};
		return W(io(this.getSetOnceProps()), (t, n) => {
			n === "$current_url" && (n = "url"), e[`$session_entry_${b(n)}`] = t;
		}), e;
	}
}, Kl = class {
	on(e, t) {
		return this.qo[e] || (this.qo[e] = []), this.qo[e].push(t), () => {
			this.qo[e] = this.qo[e].filter((e) => e !== t);
		};
	}
	emit(e, t) {
		for (let n of this.qo[e] || []) n(t);
		for (let n of this.qo["*"] || []) n(e, t);
	}
	constructor() {
		this.qo = {};
	}
}, ql = U("[SessionId]"), Jl = 864e5, Yl = class {
	on(e, t) {
		return this.Kc.on(e, t);
	}
	constructor(e, t, n) {
		var r;
		if (this.Yc = null, this.Xc = null, this.eh = [], this.ih = void 0, this.nh = !1, this.Kc = new Kl(), this.sh = (e, t) => !(!F(e) || !F(t)) && Math.abs(e - t) > this.sessionTimeoutMs, !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
		if (e.config.cookieless_mode === "always") throw Error("SessionIdManager cannot be used with cookieless_mode=\"always\"");
		this.Br = e.config, this.Jc = e.persistence, this.Ue = void 0, this.Xt = void 0, this._sessionStartTimestamp = null, this.rh = void 0, this._sessionActivityTimestamp = null, this.oh = t || _o, this.ah = n || _o;
		let i = this.Br.persistence_name || this.Br.token;
		if (this._sessionTimeoutMs = 1e3 * z(this.Br.session_idle_timeout_seconds || 1800, 60, 36e3, ql.createLogger("session_idle_timeout_seconds"), 1800), e.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this.uh(), this.hh = "ph_" + i + "_window_id", this.dh = "ph_" + i + "_primary_window_exists", this.fh()) {
			let e = Y.Pt(this.hh), t = Y.Pt(this.dh);
			e && !t ? this.Ue = e : Y.Dt(this.hh), Y.$t(this.dh, !0);
		}
		(r = this.Br.bootstrap) != null && r.sessionID && this.setBootstrapSessionId(this.Br.bootstrap.sessionID), this.ph();
	}
	get sessionTimeoutMs() {
		return this._sessionTimeoutMs;
	}
	onSessionId(e) {
		return k(this.eh) && (this.eh = []), this.eh.push(e), this.Xt && e(this.Xt, this.Ue), () => {
			this.eh = this.eh.filter((t) => t !== e);
		};
	}
	fh() {
		return this.Br.persistence !== "memory" && !this.Jc.gi && Y.Ot();
	}
	gh(e) {
		e !== this.Ue && (this.Ue = e, this.fh() && Y.$t(this.hh, e));
	}
	mh() {
		return this.Ue ? this.Ue : this.fh() ? Y.Pt(this.hh) : null;
	}
	yh(e) {
		let t = this.Yc;
		return !M(t) && !M(e) && 5e3 > Math.abs(e - t);
	}
	bh(e, t, n) {
		let r = t !== this._sessionActivityTimestamp, i = !(e !== this.Xt || n !== this._sessionStartTimestamp);
		this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this.Xt = e, i && !r || i && this.yh(t) || (this.Yc = t, this.Jc.register({ [da]: [
			t,
			e,
			n
		] }));
	}
	_h() {
		var e;
		let t = (e = this.Br) == null ? void 0 : e.persistence_save_debounce_ms;
		return F(t) && t > 0;
	}
	wh() {
		this._h() ? this.Jc.refreshKey(da) : (this.Jc.flush(), this.Jc.load());
	}
	kh() {
		var e;
		if (M(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this.Yc) return;
		this.wh();
		let [, t, n] = this.Sh();
		t === this.Xt && n === this._sessionStartTimestamp && (this.Yc = this._sessionActivityTimestamp, this.Jc.register({ [da]: [
			this._sessionActivityTimestamp,
			(e = this.Xt) == null ? null : e,
			this._sessionStartTimestamp
		] }), this.Jc.flush());
	}
	xh() {
		let [e] = this.Sh(), t = F(e) ? e : 0, n = F(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
		return Math.max(t, n);
	}
	$h(e) {
		return this.wh(), this.sh(e, this.xh());
	}
	Sh() {
		let e = this.Jc.props[da];
		return T(e) && e.length === 2 && e.push(e[0]), e || [
			0,
			null,
			0
		];
	}
	resetSessionId() {
		this.Yc = null, this.rh = void 0, clearTimeout(this.Ch), this.Ch = void 0, this.bh(null, null, null);
	}
	setBootstrapSessionId(e, t = !1) {
		let n = ((e, t = (/* @__PURE__ */ new Date()).getTime()) => {
			try {
				let n = ((e) => {
					let t = e.replace(/-/g, "");
					if (t.length !== 32) throw Error("Not a valid UUID");
					if (t[12] !== "7") throw Error("Not a UUIDv7");
					return parseInt(t.substring(0, 12), 16);
				})(e);
				return n > t + 6e4 ? void ql.error("Bootstrap sessionID cannot be in the future") : n;
			} catch (e) {
				ql.error("Invalid sessionID in bootstrap", e);
				return;
			}
		})(e);
		return !k(n) && (t ? this.rh = {
			sessionId: e,
			sessionStartTimestamp: n
		} : this.bh(e, (/* @__PURE__ */ new Date()).getTime(), n), !0);
	}
	destroy() {
		this.nh = !0, this.kh(), clearTimeout(this.Ch), this.Ch = void 0, this.ih && e && (e.removeEventListener(Xa, this.ih, { capture: !1 }), this.ih = void 0), this.eh = [];
	}
	ph() {
		this.ih = () => {
			this.kh(), this.fh() && Y.Dt(this.dh);
		}, K(e, Xa, this.ih, { capture: !1 });
	}
	checkAndGetSessionAndWindowId(e = !1, t = null, n = !1) {
		if (this.Br.cookieless_mode === "always") throw Error("checkAndGetSessionAndWindowId should not be called with cookieless_mode=\"always\"");
		let r = t || (/* @__PURE__ */ new Date()).getTime(), i = this.Xt;
		if (n) this.Xc = r;
		else if (M(this.Xc) || this.Xc > r || r - this.Xc >= 1e3) {
			var a, o;
			(a = (o = this.Jc).syncCookieProperties) == null || a.call(o), this.Xc = r;
		}
		let [, s, c] = this.Sh(), l = !k(i) && s !== i, u = this.xh(), d = this.mh(), f = this.rh, p = !!f && (f.sessionStartTimestamp > r + 6e4 || r - f.sessionStartTimestamp > Jl), m = f ? p : F(c) && Math.abs(r - c) > Jl, h = !1, g = l, _ = !s || !!f, v = s, y = !_ && !e && this.sh(r, u);
		if (y && (y = this.$h(r), y || ql.info("cross-tab refresh kept the session alive", { sessionId: s }), [, s, c] = this.Sh(), y || (_ = !s || !!f)), _ || y || m) {
			g = !1;
			let e = f && !p;
			s = e ? f.sessionId : this.oh(), d = this.ah(), ql.info("new session ID assigned", {
				sessionId: s,
				windowId: d,
				bootstrapped: !!e,
				changeReason: {
					noSessionId: _,
					activityTimeout: y,
					sessionPastMaximumLength: m
				}
			}), c = e ? f.sessionStartTimestamp : r, this.rh = void 0, h = !0;
		} else d || (d = this.ah(), h = !0), g = g || s !== v, g && (ql.info("adopted cross-tab session id", {
			sessionId: s,
			windowId: d
		}), h = !0);
		let b = F(u) && e && !m ? u : r, x = F(c) ? c : (/* @__PURE__ */ new Date()).getTime();
		this.gh(d), this.bh(s, b, x), e || this.uh();
		let S = {
			noSessionId: _,
			activityTimeout: y,
			sessionPastMaximumLength: m,
			crossTabAdoption: g
		};
		return h && this.eh.forEach((e) => e(s, d, S)), {
			sessionId: s,
			windowId: d,
			sessionStartTimestamp: x,
			changeReason: h ? S : void 0,
			lastActivityTimestamp: u
		};
	}
	uh() {
		this.nh || (clearTimeout(this.Ch), this.Ch = setTimeout(() => {
			if (!this.nh) if (this.$h((/* @__PURE__ */ new Date()).getTime())) {
				let e = this.Xt;
				this.resetSessionId(), this.Kc.emit("forcedIdleReset", { idleSessionId: e });
			} else this.uh();
		}, 1.1 * this.sessionTimeoutMs));
	}
}, Xl = Object.freeze([
	"2026-08-30",
	"2026-08-29",
	"2026-06-25",
	"2026-05-30",
	"2026-01-30",
	"2025-11-30",
	"2025-05-24"
]), Zl = function(e, t) {
	if (!e) return !1;
	let n = e.userAgent;
	if (n && fe(n, t)) return !0;
	try {
		let n = e == null ? void 0 : e.userAgentData;
		if (n != null && n.brands && n.brands.some((e) => fe(e == null ? void 0 : e.brand, t))) return !0;
	} catch (e) {}
	return !!e.webdriver;
};
function Ql() {
	return (Ql = L(function* () {
		let e = n == null ? void 0 : n.userAgentData;
		if (e != null && e.getHighEntropyValues) try {
			let t = yield e.getHighEntropyValues(["model"]), n = t == null ? void 0 : t.model;
			return A(n) && n.length > 0 ? n : void 0;
		} catch (e) {
			H.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", e);
			return;
		}
	})).apply(this, arguments);
}
function $l(e, t) {
	let n = `$survey_${t}/${e.id}`;
	return e.current_iteration && e.current_iteration > 0 && (n = `$survey_${t}/${e.id}/${e.current_iteration}`), n;
}
function eu(e) {
	var t;
	return !!(!((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null) && t.length);
}
var tu = (e, t) => {
	if (!((e) => {
		try {
			new RegExp(e);
		} catch (e) {
			return !1;
		}
		return !0;
	})(t)) return !1;
	try {
		return new RegExp(t).test(e);
	} catch (e) {
		return !1;
	}
}, nu = (e) => e.toLowerCase(), ru = {
	exact: (e, t) => t.some((t) => e.some((e) => t === e)),
	is_not: (e, t) => t.every((t) => e.every((e) => t !== e)),
	regex: (e, t) => t.some((t) => e.some((e) => tu(t, e))),
	not_regex: (e, t) => t.every((t) => e.every((e) => !tu(t, e))),
	icontains: (e, t) => t.map(nu).some((t) => e.map(nu).some((e) => t.includes(e))),
	not_icontains: (e, t) => t.map(nu).every((t) => e.map(nu).every((e) => !t.includes(e))),
	gt: (e, t) => t.some((t) => {
		let n = parseFloat(t);
		return !isNaN(n) && e.some((e) => n > parseFloat(e));
	}),
	lt: (e, t) => t.some((t) => {
		let n = parseFloat(t);
		return !isNaN(n) && e.some((e) => n < parseFloat(e));
	})
};
function iu(e, t) {
	return !e || Object.entries(e).every(([e, n]) => {
		let r = t == null ? void 0 : t[e];
		if (r == null) return !1;
		let i = ru[n.operator];
		return !!i && i(n.values.map(String), [String(r)]);
	});
}
function au(e, t, n) {
	return qs({
		distinct_id: e,
		userPropertiesToSet: t,
		userPropertiesToSetOnce: n
	});
}
var ou = "custom", su = "i.posthog.com", cu = /^\/static\//, lu = [
	"/s/",
	"/e/",
	"/i/"
], uu = class {
	constructor(e) {
		this.Th = {}, this.instance = e;
	}
	get apiHost() {
		let e = this.instance.config.api_host.trim().replace(/\/$/, "");
		return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e;
	}
	get flagsApiHost() {
		let e = this.instance.config.flags_api_host;
		return e ? e.trim().replace(/\/$/, "") : this.apiHost;
	}
	get uiHost() {
		var e;
		let t = (e = this.instance.config.ui_host) == null ? void 0 : e.replace(/\/$/, "");
		return t || (t = this.apiHost.replace(`.${su}`, ".posthog.com")), t === "https://app.posthog.com" ? "https://us.posthog.com" : t;
	}
	get region() {
		return this.Th[this.apiHost] || (this.Th[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : ou), this.Th[this.apiHost];
	}
	Mh(e) {
		if (!cu.test(e)) return;
		let t = this.instance.config.asset_host;
		return typeof t == "string" && t.trim().replace(/\/$/, "") || void 0;
	}
	Ih(e) {
		let t = Us(e);
		return t ? t.protocol + "//" + t.host + t.pathname : void 0;
	}
	Eh(e, t, n) {
		if (e === "ui") return n;
		let r = n, i = this.instance.config.rewriteRequestPath;
		if (i) {
			var a;
			let e = ((a = Us(n)) == null ? void 0 : a.href) || n;
			r = i(new URL(e)).toString();
		}
		if (i && e === "api" && lu.some((e) => t.indexOf(e) === 0)) {
			let e = this.Ih(r);
			if (e) {
				let t = this.apiHost, n = this.Ah;
				(n == null ? void 0 : n.apiHost) === t && n.rewriteRequestPath === i || (n = {
					apiHost: t,
					rewriteRequestPath: i,
					urls: /* @__PURE__ */ new Set()
				}, this.Ah = n), n.urls.add(e);
			}
		}
		return r;
	}
	isIngestionEndpoint(e) {
		let t = this.Ah, n = this.Ih(e);
		return (t == null ? void 0 : t.apiHost) === this.apiHost && t.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!n && t.urls.has(n);
	}
	endpointFor(e, t = "") {
		if (t && (t = t[0] === "/" ? t : `/${t}`), e === "ui") return this.Eh(e, t, this.uiHost + t);
		if (e === "flags") return this.Eh(e, t, this.flagsApiHost + t);
		if (e === "assets") {
			let n = this.Mh(t);
			if (n) return this.Eh(e, t, `${n}${t}`);
		}
		if (this.region === ou) return this.Eh(e, t, this.apiHost + t);
		let n = su + t;
		switch (e) {
			case "assets": return this.Eh(e, t, `https://${this.region}-assets.${n}`);
			case "api": return this.Eh(e, t, `https://${this.region}.${n}`);
		}
	}
}, Z = U("[Surveys]"), du = (e) => {
	try {
		let t = ((e) => ((e, t) => `seenSurvey_${function(e) {
			return e.current_iteration && e.current_iteration > 0 ? `${e.id}_${e.current_iteration}` : e.id;
		}(t)}`)(0, e))(e);
		if (localStorage.getItem(t)) return;
		localStorage.setItem(t, "true");
	} catch (e) {
		Z.error("Failed to persist survey seen state", e);
	}
}, fu = [
	kc.Popover,
	kc.Widget,
	kc.API
], pu = {
	ignoreConditions: !1,
	ignoreDelay: !1,
	displayType: Mc.Popover
}, mu = U("[PostHog ExternalIntegrations]"), hu = {
	intercom: "intercom-integration",
	crispChat: "crisp-chat-integration"
}, gu = class {
	constructor(e) {
		this._instance = e;
	}
	Ka(e, t) {
		var n;
		(n = oi(this._instance)) == null || n(this._instance, e, (e) => {
			if (e) return mu.error("failed to load script", e);
			t();
		});
	}
	startIfEnabledOrStop() {
		var e;
		for (let [i, a] of Object.entries((e = this._instance.config.integrations) == null ? {} : e)) {
			var t, n, r;
			a && !(!((t = d.__PosthogExtensions__) == null || (t = t.integrations) == null) && t[i]) && this.Ka(hu[i], () => {
				var e;
				(e = d.__PosthogExtensions__) == null || (e = e.integrations) == null || (e = e[i]) == null || e.start(this._instance);
			}), !a && !((n = d.__PosthogExtensions__) == null || (n = n.integrations) == null) && n[i] && ((r = d.__PosthogExtensions__) == null || (r = r.integrations) == null || (r = r[i]) == null || r.stop());
		}
	}
}, _u = class {
	constructor(e) {
		this.disabled = !1 === e;
		let t = D(e) ? e : {};
		this.thresholdPx = t.threshold_px || 30, this.timeoutMs = t.timeout_ms || 1e3, this.clickCount = t.click_count || 3, this.clicks = [];
	}
	isRageClick(e, t, n) {
		if (this.disabled) return !1;
		let r = this.clicks[this.clicks.length - 1];
		if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < this.thresholdPx && this.timeoutMs > n - r.timestamp) {
			if (this.clicks.push({
				x: e,
				y: t,
				timestamp: n
			}), this.clicks.length === this.clickCount) return !0;
		} else this.clicks = [{
			x: e,
			y: t,
			timestamp: n
		}];
		return !1;
	}
}, vu = () => typeof window > "u" ? void 0 : window, yu = () => typeof document > "u" ? void 0 : document, bu = "$copy_autocapture", xu = [
	"password",
	"hidden",
	"file",
	"checkbox",
	"button",
	"submit",
	"reset",
	"image"
], Su = U("[AutoCapture]");
function Cu(e, t) {
	return t.length > e ? t.slice(0, e) + "..." : t;
}
function wu(e) {
	if (e.previousElementSibling) return e.previousElementSibling;
	let t = e;
	do
		t = t.previousSibling;
	while (t && !zo(t));
	return t;
}
function Tu(e, { e: t, maskAllElementAttributes: n, maskAllText: r, elementAttributeIgnoreList: i, elementsChainAsString: a, disableCaptureUrlHashes: o }) {
	var s, c;
	if (!zo(e)) return { props: {} };
	let l = [e], u = /* @__PURE__ */ new Set([e]), d = e;
	for (; !Bo(d, "body") && 1e3 > l.length;) {
		let e = d.assignedSlot || d.parentNode, t = Ho(e) ? e.host : e && zo(e) ? e : null;
		if (!t || u.has(t)) break;
		u.add(t), l.push(t), d = t;
	}
	let f = t.type === "click" && e.namespaceURI === "http://www.w3.org/2000/svg" ? l.findIndex((e) => Bo(e, "button") || Bo(e, "a")) : -1;
	f > 0 && (r = r || l.slice(0, f + 1).some((e) => !ms(e) || hs(e)));
	let p = [], m = {}, h, g = !1, _ = !1;
	if (W(l, (e) => {
		let t = ms(e);
		if (t && Bo(e, "a") && !n && !(i != null && i.includes("href"))) {
			let n = e.getAttribute("href");
			g = !!(t && n && Cs(n)) && (o ? wt(n) : n);
		}
		v(Go(e), "ph-no-capture") && (_ = !0), p.push(function(e, t, n, r, i = !1) {
			let a = e.tagName.toLowerCase(), o = { tag_name: a };
			Yo.indexOf(a) > -1 && !n && (o.$el_text = a.toLowerCase() === "a" || a.toLowerCase() === "button" ? Cu(1024, ws(e)) : Cu(1024, qo(e)));
			let s = Go(e);
			t || r != null && r.includes("class") || 0 >= s.length || (o.classes = s.filter(function(e) {
				return e !== "";
			})), W(ps(e) ? [] : e.attributes, function(n) {
				var a;
				if ((!hs(e) || [
					"name",
					"id",
					"class",
					"aria-label"
				].indexOf(n.name) !== -1) && !(r != null && r.includes(n.name)) && !t && Cs(n.value) && (!A(a = n.name) || a.substring(0, 10) !== "_ngcontent" && a.substring(0, 7) !== "_nghost")) {
					let e = n.value;
					n.name === "class" && (e = Uo(e).join(" ")), o["attr__" + n.name] = Cu(1024, n.name === "href" && i ? wt(e) : e);
				}
			});
			let c = 1, l = 1, u = e;
			for (; u = wu(u);) c++, u.tagName === e.tagName && l++;
			return o.nth_child = c, o.nth_of_type = l, o;
		}(e, n, r, i, o)), W(function(e) {
			if (!ms(e)) return {};
			let t = {};
			return W(e.attributes, function(e) {
				if (e.name && e.name.indexOf("data-ph-capture-attribute") === 0) {
					let n = e.name.replace("data-ph-capture-attribute-", ""), r = e.value;
					n && r && Cs(r) && (t[n] = r);
				}
			}), t;
		}(e), (e, t) => {
			({}).hasOwnProperty.call(m, t) || (m[t] = e);
		});
	}), _) return {
		props: {},
		explicitNoCapture: _
	};
	if (f > 0 && (e = l[f], p.splice(0, f)), r || (p[0].$el_text = Bo(e, "a") || Bo(e, "button") ? ws(e) : qo(e)), g) {
		var y, b;
		p[0].attr__href = g;
		let e = (y = Us(g)) == null ? void 0 : y.host, t = (b = vu()) == null || (b = b.location) == null ? void 0 : b.host;
		e && t && e !== t && (h = g);
	}
	return {
		props: G((S = t.type, {
			$event_type: S,
			$ce_version: 1
		}), a ? {} : { $elements: p }, { $elements_chain: (x = p, T(x) ? function(e) {
			return e.map((e) => {
				var t, n;
				let r = "";
				if (e.tag_name && (r += e.tag_name), e.attr_class) {
					e.attr_class.sort();
					for (let t of e.attr_class) r += `.${t.replace(/"/g, "")}`;
				}
				let i = V(V(V(V({}, e.text ? { text: e.text } : {}), {}, {
					"nth-child": (t = e.nth_child) == null ? 0 : t,
					"nth-of-type": (n = e.nth_of_type) == null ? 0 : n
				}, e.href ? { href: e.href } : {}), e.attr_id ? { attr_id: e.attr_id } : {}), e.attributes), a = {};
				return no(i).sort(([e], [t]) => function(e, t) {
					return t > e ? -1 : +(e > t);
				}(e, t)).forEach(([e, t]) => a[Es(e.toString())] = Es(t.toString())), r += ":", r += no(a).map(([e, t]) => `${e}="${t}"`).join(""), r;
			}).join(";");
		}(function(e) {
			return e.map((e) => {
				var t, n;
				let r = {
					text: (t = e.$el_text) == null ? void 0 : t.slice(0, 400),
					tag_name: e.tag_name,
					href: (n = e.attr__href) == null ? void 0 : n.slice(0, 2048),
					attr_class: Ds(e),
					attr_id: e.attr__id,
					nth_child: e.nth_child,
					nth_of_type: e.nth_of_type,
					attributes: {}
				};
				return no(e).filter(([e]) => e.indexOf("attr__") === 0).forEach(([e, t]) => r.attributes[e] = t), r;
			});
		}(x)) : "") }, (s = p[0]) != null && s.$el_text ? { $el_text: (c = p[0]) == null ? void 0 : c.$el_text } : {}, h && t.type === "click" ? { $external_click_url: h } : {}, m),
		target: e
	};
	var x, S;
}
var Eu = "autocapture", Du = class {
	Sa() {
		this.xa = void 0, clearTimeout(this.$a), this.$a = void 0;
	}
	Ca(e) {
		var t;
		if (!ms(e)) return !0;
		let n = (t = this.Ta().css_selector_ignorelist) == null ? $o : t, r = /* @__PURE__ */ new Set(), i = e;
		for (; i;) {
			if (r.size >= 1e3 || r.has(i)) return !0;
			r.add(i);
			let e = i, t = Go(e);
			if (v(t, "ph-no-capture") || v(t, "ph-sensitive") || hs(e) || n.some((t) => Xo(e, t))) return !0;
			let a = i.assignedSlot || i.parentNode;
			i = Ho(a) ? a.host : a && zo(a) ? a : null;
		}
		return !1;
	}
	Ma(e) {
		if (!this.isEnabled || e.type === "pointercancel") return void this.Sa();
		if (e.type === "pointerdown") {
			var t;
			this.Sa();
			let n = Jo(e);
			e.isPrimary && e.button === 0 && !e.ctrlKey && n && zo(n) && (this.xa = {
				target: n,
				excluded: this.Ca(n),
				id: e.pointerId,
				x: e.clientX,
				y: e.clientY,
				released: !1,
				distinctId: (t = this.Gl) == null ? void 0 : t.distinctId
			});
			return;
		}
		let n = this.xa;
		n && (e.pointerId !== n.id || Math.abs(e.clientX - n.x) > 5 || Math.abs(e.clientY - n.y) > 5 ? this.Sa() : e.type === "pointerup" && (n.released = !0, this.$a = setTimeout(() => this.Sa(), 0)));
	}
	Ia(e) {
		var t;
		let n = this.xa;
		this.Sa();
		let r = Jo(e);
		if (n != null && n.released && n.target.isConnected && n.distinctId === ((t = this.Gl) == null ? void 0 : t.distinctId) && e.pointerId === n.id && (e.detail > 0 || e.pointerType === "touch" || e.pointerType === "pen") && e.button === 0 && 5 >= Math.abs(e.clientX - n.x) && 5 >= Math.abs(e.clientY - n.y) && r && (Bo(r, "html") || Bo(r, "body"))) {
			var i, a, o;
			if (n.excluded) return null;
			let e = (i = this.Ta().css_selector_ignorelist) == null ? $o : i;
			return [
				r,
				(a = yu()) == null ? void 0 : a.documentElement,
				(o = yu()) == null ? void 0 : o.body
			].some((t) => {
				if (!t) return !1;
				let n = Go(t);
				return v(n, "ph-no-capture") || v(n, "ph-sensitive") || !ms(t) || hs(t) || e.some((e) => Xo(t, e));
			}) ? null : n.target;
		}
	}
	constructor(e) {
		this.Jl = e, this.name = Eu, this.Ea = !1, this.Aa = null, this.Ra = !1, this.Pa = /* @__PURE__ */ new Map(), this.Oa = !1, this.Br = {
			enabled: !1,
			rageclick: !1,
			maskAllElementAttributes: !1,
			maskAllText: !1,
			disableCaptureUrlHashes: !1,
			remoteRequestsDisabled: !1
		}, this.Ai = !1, this.Jl.refresh(this.Br), this.rageclicks = new _u(this.Br.rageclick), this.Fa = null;
	}
	setup(e) {
		this.La(), this.Gl = e;
		let t = e.onRemoteConfig(this.onRemoteConfig.bind(this));
		this.Ai ? t.dispose() : (this.la = t, this.startIfEnabled());
	}
	dispose() {
		var e;
		this.Ai || (this.Ai = !0, this.Gl = void 0, (e = this.la) == null || e.dispose(), this.la = void 0, this.Pa.clear(), this.Fa = null, this.Da());
	}
	Ta() {
		return this.Jl.refresh(this.Br), this.Br;
	}
	La() {
		var e, t;
		return this.Ta(), this.Br.url_allowlist = (e = this.Br.url_allowlist) == null ? void 0 : e.map((e) => new RegExp(e)), this.Br.url_ignorelist = (t = this.Br.url_ignorelist) == null ? void 0 : t.map((e) => new RegExp(e)), this.Br;
	}
	Na() {
		let e = vu(), t = yu();
		if (!this.isBrowserSupported()) return void Su.info("Disabling Automatic Event Collection because this browser is not supported");
		if (!e || !t) return;
		this.ja = e, this.qa = t;
		let n = this.Ba = (t) => {
			t = t || (e == null ? void 0 : e.event);
			try {
				if (t.type === "blur") return void this.Sa();
				if (t.type.indexOf("pointer") === 0) return void this.Ma(t);
				let e = t.type === "click" ? this.Ia(t) : void 0;
				if (M(e)) return;
				this.za(t, "$autocapture", e);
			} catch (e) {
				Su.error("Failed to capture event", e);
			}
		};
		if (K(e, "blur", n), K(t, "submit", n, { capture: !0 }), K(t, "change", n, { capture: !0 }), K(t, "click", n, { capture: !0 }), W([
			"pointerdown",
			"pointermove",
			"pointerup",
			"pointercancel"
		], (e) => {
			K(t, e, n, { capture: !0 });
		}), this.Ta().capture_copied_text) {
			let n = this.Ha = (t) => {
				t = t || (e == null ? void 0 : e.event);
				try {
					this.za(t, bu);
				} catch (e) {
					Su.error("Failed to capture clipboard event", e);
				}
			};
			K(t, "copy", n, { capture: !0 }), K(t, "cut", n, { capture: !0 }), K(t, "paste", n, { capture: !0 });
		}
	}
	Da() {
		let e = this.ja, t = this.qa;
		this.Sa(), this.Ba && (e == null || e.removeEventListener("blur", this.Ba), W([
			"pointerdown",
			"pointermove",
			"pointerup",
			"pointercancel"
		], (e) => {
			t == null || t.removeEventListener(e, this.Ba, !0);
		}), t == null || t.removeEventListener("submit", this.Ba, !0), t == null || t.removeEventListener("change", this.Ba, !0), t == null || t.removeEventListener("click", this.Ba, !0), this.Ba = void 0), this.Ha && (t == null || t.removeEventListener("copy", this.Ha, !0), t == null || t.removeEventListener("cut", this.Ha, !0), t == null || t.removeEventListener("paste", this.Ha, !0), this.Ha = void 0), this.ja = void 0, this.qa = void 0, this.Ea = !1;
	}
	startIfEnabled() {
		this.isEnabled || this.Sa(), !this.Ai && this.Gl && this.isEnabled && !this.Ea && (this.Na(), this.Ea = !0);
	}
	onRemoteConfig(e) {
		if (this.Ai) return;
		if (this.Ra = !0, !e.ok) return void this.startIfEnabled();
		let t = e.config;
		t.elementsChainAsString && (this.Oa = t.elementsChainAsString);
		let n = t.autocapture_opt_out;
		var r;
		ee(n) && ((r = this.Gl) == null || r.kv.set("$autocapture_disabled_server_side", n), this.Aa = n), this.startIfEnabled();
	}
	setElementSelectors(e, t = this) {
		if (this.Ai) return;
		e.size ? this.Pa.set(t, new Set(e)) : this.Pa.delete(t);
		let n = /* @__PURE__ */ new Set();
		this.Pa.forEach((e) => {
			e.forEach((e) => n.add(e));
		}), this.Fa = n;
	}
	getElementSelectors(e, t) {
		var n;
		let r = [];
		return (n = this.Fa) == null || n.forEach((n) => {
			var i;
			let a = (i = yu()) == null ? void 0 : i.querySelectorAll(n);
			a == null || a.forEach((i) => {
				e !== i && t !== i || v(r, n) || r.push(n);
			});
		}), r;
	}
	get isEnabled() {
		var e, t;
		if (this.Ai) return !1;
		let n = (e = this.Gl) == null ? void 0 : e.kv.get(ji), r = this.Aa, i = this.Ta();
		if (!i.remoteRequestsDisabled && !this.Ra) return !1;
		let a = i.remoteRequestsDisabled && !this.Ra;
		if (M(r) && !ee(n) && !a) return !1;
		let o = (t = this.Aa) == null ? !!n : t;
		return !!i.enabled && !o;
	}
	za(e, t = "$autocapture", n) {
		if (!this.isEnabled) return void this.Sa();
		let r = n || Jo(e);
		Vo(r) && (r = r.parentNode || null);
		let i = this.La();
		var a;
		t === "$autocapture" && e.type === "click" && e instanceof MouseEvent && i.rageclick && (a = this.rageclicks) != null && a.isRageClick(e.clientX, e.clientY, e.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && us(r, i.rageclick) && this.za(e, "$rageclick", n);
		let o = t === bu, s = o ? V(V({}, i), {}, { dom_event_allowlist: void 0 }) : i;
		if (r && function(e, t, n, r, i, a) {
			var o;
			let s = typeof window > "u" ? void 0 : window;
			if (!s || ds(e) || n != null && n.url_allowlist && !Wo(n.url_allowlist, a) || n != null && n.url_ignorelist && Wo(n.url_ignorelist, a)) return !1;
			if (n != null && n.dom_event_allowlist) {
				let e = n.dom_event_allowlist;
				if (e && !e.some((e) => t.type === e)) return !1;
			}
			let { parentIsUsefulElement: c, targetElementList: l, isComplete: u } = fs(e, r);
			if (!u || !function(e, t) {
				let n = t == null ? void 0 : t.element_allowlist;
				if (k(n)) return !0;
				for (let t of e) if (n.some((e) => t.tagName.toLowerCase() === e)) return !0;
				return !1;
			}(l, n) || !Zo(l, n == null ? void 0 : n.css_selector_allowlist) || Zo(l, (o = n == null ? void 0 : n.css_selector_ignorelist) == null ? $o : o)) return !1;
			try {
				let n = s.getComputedStyle(e);
				if (n && n.getPropertyValue("cursor") === "pointer" && t.type === "click") return !0;
			} catch (e) {}
			let d = e.tagName.toLowerCase();
			switch (d) {
				case "html": return !1;
				case "form": return (i || ["submit"]).indexOf(t.type) >= 0;
				case "input":
				case "select":
				case "textarea": return (i || ["change", "click"]).indexOf(t.type) >= 0;
				default: return c ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (Yo.indexOf(d) > -1 || e.getAttribute("contenteditable") === "true");
			}
		}(r, e, s, o, o ? [
			"copy",
			"cut",
			"paste"
		] : void 0, { config: { get_current_url: i.getCurrentUrl } })) {
			var c;
			let { props: n, explicitNoCapture: a, target: o } = Tu(r, {
				e,
				maskAllElementAttributes: i.maskAllElementAttributes,
				maskAllText: i.maskAllText,
				elementAttributeIgnoreList: i.element_attribute_ignorelist,
				elementsChainAsString: this.Oa,
				disableCaptureUrlHashes: i.disableCaptureUrlHashes
			});
			if (a) return !1;
			let s = this.getElementSelectors(r, o);
			if (s && s.length > 0 && (n.$element_selectors = s), t === bu) {
				let t = e.type || "clipboard";
				if (t !== "paste") {
					var l, u;
					let e = (l = vu()) == null || (l = l.getSelection()) == null ? void 0 : l.toString(), t = Ko(e);
					if (!t) return !1;
					n.$selected_content = t, n.$clipboard_text_length = (u = e == null ? void 0 : e.length) == null ? 0 : u;
				}
				n.$copy_type = t;
			}
			if (t === "$autocapture" && e.type === "change" && i.capture_value_css_selector_allowlist && !i.maskAllText && (Bo(d = r, "input") ? !v(xu, d.type) : Bo(d, "textarea") || Bo(d, "select") && !d.multiple) && function(e, t) {
				var n;
				if (!ms(e)) return !1;
				let r = (n = t.css_selector_ignorelist) == null ? $o : n, i = /* @__PURE__ */ new Set(), a = e;
				for (Bo(e, "select") && (a = e.options[e.selectedIndex] || e); a;) {
					let e = a, t = Go(e);
					if (i.size >= 1e3 || i.has(a) || v(t, "ph-sensitive") || v(t, "ph-no-capture") || r.some((t) => Xo(e, t))) return !1;
					i.add(a);
					let n = a.assignedSlot || a.parentNode;
					a = Ho(n) ? n.host : n && zo(n) ? n : null;
				}
				return !0;
			}(r, i) && !r.querySelector(".ph-no-capture, .ph-sensitive")) {
				let e = i.capture_value_css_selector_allowlist, t = !1;
				try {
					t = E(e) ? !!e(r) : T(e) && e.some((e) => Xo(r, e));
				} catch (e) {
					Su.error("capture_value_css_selector_allowlist threw", e);
				}
				t && (n.$input_value = r.value);
			}
			return (c = this.Gl) == null || c.capture(t, n), !0;
		}
		var d;
	}
	isBrowserSupported() {
		var e;
		return E((e = yu()) == null ? void 0 : e.querySelectorAll);
	}
}, Ou = "featureFlags", ku = "logs", Au = () => {
	var t;
	return !(e == null || (t = e.performance) == null) && t.now ? e.performance.now() : Date.now();
}, ju = [], Mu = [
	50,
	75,
	100,
	150,
	200,
	300,
	400,
	500,
	750,
	1e3,
	1500,
	2e3,
	3e3,
	5e3,
	1e4
], Nu = [
	5,
	10,
	25,
	...Mu
], Pu = class {
	constructor(e) {
		this._instance = e;
	}
	initialize() {}
	get(e) {
		let t = this._instance.persistence;
		if (typeof e == "string") return t == null ? void 0 : t.get_property(e);
		let n = {};
		for (let r of e) {
			let e = t == null ? void 0 : t.get_property(r);
			k(e) || (n[r] = e);
		}
		return n;
	}
	set(e, t) {
		var n;
		(n = this._instance.persistence) == null || n.register(typeof e == "string" ? { [e]: t } : e);
	}
	remove(e) {
		var t;
		(t = this._instance.persistence) == null || t.unregister(e);
	}
}, Fu = class {
	constructor(e) {
		this.instance = e, this.R = H, this.kv = new Pu(e), this.onSession = (e) => Nc(this.instance.onSessionId((t) => {
			try {
				e(t);
			} catch (e) {
				this.R.error("Browser extension session listener failed", e);
			}
		})), this.onEvent = (e) => Nc(this.instance._addCaptureHook((t, n) => {
			if (n) try {
				e({
					event: t,
					properties: n.properties
				});
			} catch (e) {
				this.R.error("Browser extension event listener failed", e);
			}
		})), this.onRemoteConfig = (e) => {
			let t = (t) => {
				try {
					e(t);
				} catch (e) {
					this.R.error("Browser extension remote config listener failed", e);
				}
			}, n = this.instance.mr.on("extensionsRemoteConfig", t);
			return this.instance.gr && t(this.instance.gr), Nc(n);
		};
	}
	get logger() {
		return this.R;
	}
	get distinctId() {
		return this.instance.get_distinct_id();
	}
	get anonymousId() {
		var e;
		return (e = this.instance.get_property("$device_id")) == null ? this.distinctId : e;
	}
	get deviceId() {
		let e = this.instance.get_property(Bi);
		return typeof e == "string" ? e : void 0;
	}
	get library() {
		return {
			name: mi.LIB_NAME,
			version: mi.LIB_VERSION
		};
	}
	get initialPersonProperties() {
		var e, t;
		return (e = (t = this.instance.persistence) == null ? void 0 : t.get_initial_props()) == null ? {} : e;
	}
	get groups() {
		return this.instance.getGroups();
	}
	get session() {
		try {
			var e, t, n, r, i;
			let a = (e = this.instance.sessionManager) == null ? void 0 : e.checkAndGetSessionAndWindowId(!0);
			return {
				sessionId: (t = a == null ? void 0 : a.sessionId) == null ? "" : t,
				windowId: (n = a == null ? void 0 : a.windowId) == null ? "" : n,
				sessionStartTimestamp: (r = a == null ? void 0 : a.sessionStartTimestamp) == null ? 0 : r,
				lastActivityTimestamp: (i = a == null ? void 0 : a.lastActivityTimestamp) == null ? 0 : i
			};
		} catch (e) {
			return {
				sessionId: "",
				windowId: "",
				sessionStartTimestamp: 0,
				lastActivityTimestamp: 0
			};
		}
	}
	get isOptedOut() {
		return this.instance.has_opted_out_capturing();
	}
	get canCapture() {
		return E(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut;
	}
	get isRateLimited() {
		var e;
		return !!((e = this.instance.rateLimiter) != null && e.isClientRateLimited);
	}
	get projectToken() {
		return this.instance.config.token;
	}
	getExtension(e) {
		let t;
		switch (e) {
			case Ou:
			case "featureFlagsCommon":
				t = this.instance.featureFlags;
				break;
			case ku:
				t = this.instance.logs;
				break;
			case "surveys":
				t = this.instance.surveys;
				break;
			case Eu: t = this.instance.autocapture;
		}
		return t;
	}
	capture(e, t, n) {
		if (!n) return this.yr(this.instance.capture(e, t));
		let r = V({
			timestamp: n.timestamp,
			uuid: n.uuid,
			$set: n.set,
			$set_once: n.setOnce
		}, n.delivery === "unload" ? {
			transport: "sendBeacon",
			send_instantly: !0
		} : {});
		return this.yr(this.instance.capture(e, t, r));
	}
	yr(e) {
		var t;
		return !k(e) || !((t = this.instance.rateLimiter) != null && t.lastEventRateLimited);
	}
	registerDynamicEventProperties(e) {
		return Nc(this.instance.br(e));
	}
	sendRequest(t) {
		var n = this;
		return L(function* (t, r = {}) {
			var i;
			let a = (i = r.target) == null ? "api" : i, o = r.query ? wl(t, r.query) : t, s = n.instance.requestRouter.endpointFor(a, o), c = {
				method: r.method,
				url: s,
				data: r.body,
				headers: r.headers,
				timeout: r.timeoutMs,
				fireCallbackOnDrop: !0,
				transport: r.transport,
				compression: r.compression,
				compressionFallback: r.target === "flags" && r.compression === "best-available" ? h.Base64 : void 0,
				timestampMode: r.sentAt
			};
			return a === "api" && t === "/i/v1/logs" && (c.batchKey = "logs"), r.transport === "sendBeacon" ? (n.instance._send_request(c), { statusCode: 202 }) : new Promise((t) => {
				var r;
				if (c.callback = t, a === "flags" && (r = n.instance.config.metrics) != null && r.flags) {
					let r, i;
					c.onDispatch = () => {
						r = Au();
					}, c.onSend = (t) => {
						i = ((t) => {
							try {
								return ((t) => {
									var n;
									let r = e == null ? void 0 : e.PerformanceObserver, i = (n = Us(t)) == null ? void 0 : n.href;
									if (!r || !i) return;
									let a = Au(), o = {
										name: i,
										before: Infinity,
										inFlight: !0
									}, s, c, l, u = Infinity, d = !1, f = () => {
										d || (d = !0, clearTimeout(l), h.disconnect(), ju.splice(ju.indexOf(o), 1));
									}, p = !1, m = (e) => {
										for (let t of e) {
											let e = t.startTime;
											t.name !== i || (p ? a >= e : a > e) || e >= o.before || s && e >= s.startTime || (s = t);
										}
										if (s && c && u >= s.startTime) {
											let e = c;
											f(), e(s);
										}
									}, h = new r((e) => m(e.getEntriesByName(i, "resource")));
									h.observe({ entryTypes: ["resource"] });
									for (let e of ju) e.name === i && (e.before = Math.min(e.before, a), p = p || e.inFlight);
									return ju.push(o), {
										take(e, t) {
											d || (u = e, o.inFlight = !1, c = t, l = setTimeout(f, 5e3), E(h.takeRecords) && m(h.takeRecords()));
										},
										stop: f
									};
								})(t);
							} catch (e) {
								return;
							}
						})(t);
					}, c.callback = (e) => {
						if (t(e), k(r)) return;
						let a = r, o = Au();
						try {
							let t = ((e, t) => {
								var n, r;
								let i = t.statusCode || void 0, a = { "server.address": ((n = (r = Us(e)) == null ? void 0 : r.hostname) == null ? e : n).replace(/^\[(.*)\]$/, "$1") };
								i && (a["http.response.status_code"] = i);
								let o = ((e, t) => e ? 400 > e ? void 0 : String(e) : (t == null ? void 0 : t.name) === "AbortError" ? "timeout" : "_OTHER")(i, t.error);
								o && (a["error.type"] = o);
								let s = Hs();
								return s && (a["client.timezone"] = s), a;
							})(s, e);
							if (n.wr("posthog.flags.request.duration", o - a, Mu, t), e.statusCode && i) return void i.take(o, (e) => n.kr(e, a, o, t));
						} catch (e) {
							H.error("Failed to record the /flags request timing", e);
						}
						i == null || i.stop();
					};
				}
				n.instance._send_request(c);
			});
		}).apply(this, arguments);
	}
	kr(e, t, n, r) {
		if (e.responseEnd >= e.startTime) try {
			let i = Math.min(e.responseEnd, n);
			this.wr("posthog.flags.request.pre_send_duration", e.startTime - t, Nu, r), this.wr("posthog.flags.request.network_duration", i - e.startTime, Mu, r), this.wr("posthog.flags.request.main_thread_duration", n - i, Nu, r);
		} catch (e) {
			H.error("Failed to record the /flags request timing split", e);
		}
	}
	wr(e, t, n, r) {
		var i;
		(i = this.instance.metrics) == null || i.histogram(e, t, {
			unit: "ms",
			attributes: V({}, r),
			bounds: n
		});
	}
}, Iu = {}, Lu = 0, Ru = () => {}, zu = "Consent opt in/out is not valid with cookieless_mode=\"always\" and will be ignored", Bu = "Surveys module not available", Vu = "sanitize_properties is deprecated. Use before_send instead", Hu = "Invalid value for property_denylist config: ", Uu = [
	"$recording_status",
	"$sdk_debug_recording_script_not_loaded",
	"$sdk_debug_replay_url_trigger_status",
	"$sdk_debug_replay_event_trigger_status",
	"$sdk_debug_replay_linked_flag_trigger_status",
	"$sdk_debug_replay_rrweb_error",
	"$sdk_debug_replay_internal_buffer_length",
	"$sdk_debug_replay_flushed_size"
], Wu = [
	"$feature_flag_called",
	"$$heatmap",
	"$snapshot"
], Gu = (e) => e.charAt(0) === "$" && !v(Wu, e), Ku = /^[A-Za-z0-9_-]{1,400}$/, qu = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/, Ju = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/, Yu = [
	"token",
	"distinct_id",
	Pa
], Xu = "posthog", Zu = [...Xl].sort()[Xl.length - 1], Qu = (e) => {
	let t = {};
	return e && e !== "unset" ? ("2025-11-30" > e || (t.strictMinimumDuration = !0), "2026-05-30" > e || (t.canvasCapture = { resolutionScale: .6 }), "2026-06-25" > e || (t.streamNetworkBody = !0), "2026-08-30" > e || (t.captureJsonLd = !0), t) : t;
}, $u = (t) => {
	var n;
	return V({
		api_host: "https://us.i.posthog.com",
		flags_api_host: null,
		ui_host: null,
		asset_host: null,
		token: "",
		autocapture: !0,
		cross_subdomain_cookie: so(r == null ? void 0 : r.location),
		persistence: "localStorage+cookie",
		persistence_name: "",
		cookie_persisted_properties: [],
		loaded: Ru,
		save_campaign_params: !0,
		custom_campaign_params: [],
		custom_blocked_useragents: [],
		save_referrer: !0,
		capture_pageleave: "if_capture_pageview",
		defaults: t == null ? "unset" : t,
		__preview_deferred_init_extensions: !1,
		__preview_replay_sync_fetch: !0,
		__preview_external_dependency_versioned_paths: !1,
		__preview_cookie_wins_on_conflict: !1,
		debug: i && A(i == null ? void 0 : i.search) && i.search.indexOf("__posthog_debug=true") !== -1 || !1,
		cookie_expiration: 365,
		upgrade: !1,
		disable_session_recording: !1,
		disable_persistence: !1,
		disable_web_experiments: !0,
		disable_surveys: !1,
		disable_surveys_automatic_display: !1,
		disable_conversations: !1,
		disable_product_tours: !1,
		disableDeviceModel: !1,
		reuseAnonymousId: !1,
		disable_external_dependency_loading: !1,
		strict_script_versioning: "fallback",
		enable_recording_console_log: void 0,
		secure_cookie: (e == null || (n = e.location) == null ? void 0 : n.protocol) === "https:",
		ip: !1,
		opt_out_capturing_by_default: !1,
		opt_out_persistence_by_default: !1,
		opt_out_useragent_filter: !1,
		opt_out_capturing_persistence_type: "localStorage",
		consent_persistence_name: null,
		opt_out_capturing_cookie_prefix: null,
		opt_in_site_apps: !1,
		property_denylist: [],
		respect_dnt: !1,
		sanitize_properties: null,
		request_headers: {},
		request_batching: !0,
		properties_string_max_length: 65535,
		mask_all_element_attributes: !1,
		mask_all_text: !1,
		mask_personal_data_properties: !1,
		custom_personal_data_properties: [],
		advanced_disable_flags: !1,
		advanced_disable_decide: !1,
		advanced_disable_feature_flags: !1,
		advanced_disable_feature_flags_on_first_load: !1,
		advanced_only_evaluate_survey_feature_flags: !1,
		advanced_feature_flags_dedup_per_session: !1,
		advanced_enable_surveys: !1,
		advanced_disable_toolbar_metrics: !1,
		feature_flag_request_timeout_ms: 3e3,
		feature_flag_request_max_retries: 1,
		surveys_request_timeout_ms: 1e4,
		on_request_error(e) {
			H.error("Bad HTTP status: " + e.statusCode + " " + e.text);
		},
		get_device_id: (e) => e,
		capture_performance: void 0,
		name: "posthog",
		bootstrap: {},
		disable_compression: !1,
		session_idle_timeout_seconds: 1800,
		person_profiles: Ya,
		before_send: void 0,
		get_current_url: void 0,
		request_queue_config: { flush_interval_ms: 3e3 },
		error_tracking: {},
		_onCapture: Ru
	}, ((e) => ({
		rageclick: e && e >= "2026-05-30" ? {
			content_ignorelist: ts,
			ignore_text_selection: !0
		} : !e || "2025-11-30" > e || { content_ignorelist: !0 },
		capture_pageview: !e || "2025-05-24" > e || "history_change",
		session_recording: Qu(e),
		external_scripts_inject_target: e && e >= "2026-01-30" ? "head" : "body",
		internal_or_test_user_hostname: e && e >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
		persistence_save_debounce_ms: e && e >= "2026-05-30" ? 250 : 0,
		split_storage: !(!e || "2026-05-30" > e),
		detect_google_search_app: !(!e || "2026-05-30" > e),
		disable_capture_url_hashes: !(!e || "2026-06-25" > e),
		cookieWinsOnConflict: !(!e || e === "unset" || "2026-08-29" > e)
	}))(t));
}, ed = [
	["process_person", "person_profiles"],
	["xhr_headers", "request_headers"],
	["cookie_name", "persistence_name"],
	["disable_cookie", "disable_persistence"],
	["__preview_disable_beacon", "disable_beacon"],
	["store_google", "save_campaign_params"],
	["verbose", "debug"],
	["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
], td = (e) => {
	let t = {};
	for (let [n, r] of ed) k(e[n]) || (t[r] = e[n]);
	let n = G({}, t, e), r = e.__preview_external_dependency_versioned_paths;
	return k(r) || (k(e.strict_script_versioning) && (n.strict_script_versioning = !!r), A(r) && k(e.asset_host) && (n.asset_host = r)), T(e.property_blacklist) && (k(e.property_denylist) ? n.property_denylist = e.property_blacklist : T(e.property_denylist) ? n.property_denylist = [...e.property_blacklist, ...e.property_denylist] : H.error(Hu + e.property_denylist)), n;
}, nd = class {
	constructor() {
		this.__forceAllowLocalhost = !1;
	}
	get Rh() {
		return this.__forceAllowLocalhost;
	}
	set Rh(e) {
		H.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e;
	}
}, rd = class t {
	Ph(e) {
		if (!e) return;
		let t = this.Oh.indexOf(e);
		t !== -1 && this.Oh.splice(t, 1);
	}
	Fh(e, t) {
		var n;
		return this.Ph(e), this.Oh.push(t), (n = t.initialize) == null || n.call(t), t;
	}
	Lh() {
		return this.config.cookieless_mode === "always" || this.config.cookieless_mode === "on_reject" && this.consent.isRejected();
	}
	Dh() {
		if (this.Nh || !this.jh || !("capture_pageview" in this.jh) || V(V({}, t.__defaultExtensionClasses), this.config.__extensionClasses).historyAutocapture) return;
		let e = this.config.capture_pageview;
		(e === "history_change" || D(e) && (e.path || e.search || e.hash && !this.config.disable_capture_url_hashes)) && (this.Nh = !0, H.warn("capture_pageview is set to capture history changes, but the history autocapture extension is not loaded, so only the first pageview of each page load is captured. With the slim bundle, pass __extensionClasses: { historyAutocapture: AnalyticsExtensions.historyAutocapture } from 'posthog-js/dist/extension-bundles', or set capture_pageview: true to capture page loads only."));
	}
	qh() {
		if (this.Bh || this.config.reuseAnonymousId || this.config.segment || this.Lh()) return;
		let e = this.config.persistence === "memory" || this.config.persistence === "sessionStorage";
		if (!e && !this.config.disable_persistence || this.zh) return;
		let t, n, r;
		e ? (t = `persistence is set to '${this.config.persistence}'`, n = this.config.persistence === "memory" ? "on every page load" : "for every new browser tab or window", r = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (t = "persistence is disabled (disable_persistence is true)", n = "on every page load", r = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this.Bh = !0, console.warn("[PostHog.js]", `${t} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${n}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${r}`);
	}
	Hh() {
		let e = this.persistence;
		if (!e || this.Uh) return;
		if (this.Lh()) return void (this.config.cookieless_mode === "on_reject" && this.get_distinct_id() !== "$posthog_cookieless" && (this.Wh(), this.Gh()));
		if (this.get_distinct_id() !== "$posthog_cookieless") return;
		this.Vh() || e.load(!0);
		let t = this.get_distinct_id();
		if (!t || t === "$posthog_cookieless") {
			let t = this.config.get_device_id(_o());
			this.register({
				distinct_id: t,
				$device_id: t
			}), e.set_property(Ea, qa);
		}
		this.Wh();
	}
	get decideEndpointWasHit() {
		var e, t;
		return (e = (t = this.featureFlags) == null ? void 0 : t.hasLoadedFlags) != null && e;
	}
	get flagsEndpointWasHit() {
		var e, t;
		return (e = (t = this.featureFlags) == null ? void 0 : t.hasLoadedFlags) != null && e;
	}
	constructor() {
		var e;
		this.Qh = !1, this.Jh = !1, this.Zh = !1, this.webPerformance = new nd(), this.Kh = !1, this.version = mi.LIB_VERSION, this.__loadExternalDependency = ai, this.Yh = /* @__PURE__ */ new Set(), this.Xh = "", this.mr = new Kl(), this.Oh = [], this.ed = [], this.nd = !1, this.zh = !1, this.Bh = !1, this.Nh = !1, this.Uh = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = $u(), this.SentryIntegration = Is, this.sentryIntegration = (e) => function(e, t) {
			let n = Fs(e, t);
			return {
				name: Ps,
				processEvent: (e) => n(e)
			};
		}(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.sd = !1, this.rd = null, this.od = null, this.ld = null, this.scrollManager = new Ul(this), this.pageViewManager = new Ls(this), this.rateLimiter = new Lc(this), this.requestRouter = new uu(this), this.consent = new Io(this), this.externalIntegrations = new gu(this);
		let n = (e = t.__defaultExtensionClasses) == null ? {} : e;
		this.featureFlags = n.featureFlags && new n.featureFlags(this), this.toolbar = n.toolbar && new n.toolbar(this), this.surveys = n.surveys && new n.surveys(this), this.conversations = n.conversations && new n.conversations(this), this.logs = n.logs && new n.logs(this), this.metrics = n.metrics && new n.metrics(this), this.experiments = n.experiments && new n.experiments(this), this.exceptions = n.exceptions && new n.exceptions(this), this.people = {
			set: (e, t, n) => {
				let r = A(e) ? { [e]: t } : e;
				this.setPersonProperties(r), n == null || n({});
			},
			set_once: (e, t, n) => {
				let r = A(e) ? { [e]: t } : e;
				this.setPersonProperties(void 0, r), n == null || n({});
			}
		}, this.on("eventCaptured", (e) => H.info(`send "${e == null ? void 0 : e.event}"`, e));
	}
	init(e, n, r) {
		if (r && r !== Xu) {
			var i;
			let a = (i = Iu[r]) == null ? new t() : i;
			return a._init(e, n, r), Iu[r] = a, Iu[Xu][r] = a, a;
		}
		return this._init(e, n, r);
	}
	_init(t, n = {}, r) {
		var i, a, o;
		let s = A(t) ? t.trim() : "";
		if (!s) return H.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
		var c;
		if (this.__loaded) return s === ((c = this.config) == null ? void 0 : c.token) ? console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op") : console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${s}', { ... }, 'project2')`), this;
		this.__loaded = !0, this.config = $u(n.defaults), n.debug = this.ad(n.debug), this.jh = n, this.ud = [], n.person_profiles ? this.od = n.person_profiles : n.process_person && (this.od = n.process_person);
		let l = $u(n.defaults), u = td(n), d = G({}, l, u, {
			name: r,
			token: s
		});
		D(l.rageclick) && D(u.rageclick) && (d.rageclick = G({}, l.rageclick, u.rageclick)), D(l.session_recording) && D(u.session_recording) && (d.session_recording = G({}, l.session_recording, u.session_recording)), this.set_config(d), this.config.on_xhr_error && H.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = n.disable_compression ? void 0 : Dc.GZipJS;
		let f = this.Vh(), p = !this.Lh();
		if (this.persistence = new Ec(this.config, f, !0, p), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new Ec(V(V({}, this.config), {}, { persistence: "sessionStorage" }), f, !1, p), this.Xh = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", this.config.persistence !== "memory" && !f && Y.Ot()) {
			let e = Y.Pt(this.Xh);
			T(e) && e.forEach((e) => {
				A(e) && this.Yh.add(e);
			});
		} else Y.Dt(this.Xh);
		let m = V({}, this.persistence.props), h = V({}, this.sessionPersistence.props);
		this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this.hd = new Bl((e, t) => this.dd(e, t), this.config.request_queue_config), this.vd = new Hl(this), this.__request_queue = [];
		let g = this.Lh();
		g || (this.sessionManager = new Yl(this), this.sessionPropsManager = new Gl(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId((e, t, n) => {
			(n != null && n.activityTimeout || n != null && n.sessionPastMaximumLength || n != null && n.crossTabAdoption) && this.fd();
		})), this.pd(), this.config.__preview_deferred_init_extensions ? (H.info("Deferring extension initialization to improve startup performance"), this.gd = setTimeout(() => {
			this.gd = void 0, this.md(g);
		}, 0)) : (H.info("Initializing extensions synchronously"), this.md(g)), mi.DEBUG = mi.DEBUG || this.config.debug, mi.DEBUG && H.info("Starting in debug mode", {
			this: this,
			config: n,
			thisC: V({}, this.config),
			p: m,
			s: h
		}), this.config.identity_distinct_id && !((i = n.bootstrap) != null && i.distinctID) && (n.bootstrap = V(V({}, n.bootstrap), {}, {
			distinctID: this.config.identity_distinct_id,
			isIdentifiedID: !0
		}));
		let _ = (a = n.bootstrap) == null ? void 0 : a.distinctID;
		if (this.zh = !!_ && !j(_), (o = n.bootstrap) != null && o.distinctID) {
			let e = n.bootstrap.distinctID, t = this.get_distinct_id(), r = this.persistence.get_property(Ea);
			if (n.bootstrap.isIdentifiedID && t != null && t !== e && r === "anonymous") this.identify(e);
			else if (n.bootstrap.isIdentifiedID && t != null && t !== e && r === "identified") H.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
			else {
				let t = this.config.get_device_id(_o()), r = n.bootstrap.isIdentifiedID ? t : e;
				this.persistence.set_property(Ea, n.bootstrap.isIdentifiedID ? Ja : qa), this.register({
					distinct_id: e,
					$device_id: r
				});
			}
		}
		if (g) this.register_once({
			distinct_id: Na,
			$device_id: null
		}, "");
		else if (!this.get_distinct_id()) {
			let e = this.config.get_device_id(_o());
			this.register_once({
				distinct_id: e,
				$device_id: e
			}, ""), this.persistence.set_property(Ea, qa);
		}
		return K(e, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: !1 }), K(e, "pageshow", (e) => {
			if (this.Jh = !1, !this.Zh) {
				var t;
				if (e.persisted && this.persistence) {
					let e = this.persistence.get_property(zi), t = this.persistence.get_property(Ea);
					this.persistence.load(), this.yd() || e === this.persistence.get_property("distinct_id") && t === this.persistence.get_property("$user_state") || this.bd();
				}
				(t = this.vd) == null || t.resume();
			}
		}), n.segment ? Ns(this, () => this._d()) : this._d(), E(this.config._onCapture) && this.config._onCapture !== Ru && (H.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (e) => this.config._onCapture(e.event, e))), this.config.ip && H.warn("The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or \"Discard IP data\" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information."), this.config.disableDeviceModel || function() {
			return Ql.apply(this, arguments);
		}().then((e) => {
			e && this.register({ [Vi]: e });
		}).catch(Ru), this;
	}
	wd(e) {
		let t = e;
		return A(t.name) && E(t.setup);
	}
	kd(e, t) {
		var n = this;
		this.wd(e) ? t.push(L(function* () {
			try {
				yield e.setup(n.Sd());
			} catch (n) {
				H.error(`Failed to set up extension "${e.name}"`, n);
				try {
					var t;
					yield (t = e.dispose) == null ? void 0 : t.call(e);
				} catch (t) {
					H.error(`Failed to dispose extension "${e.name}"`, t);
				}
			}
		})) : this.Oh.push(e);
	}
	pd() {
		var e, n, r, i = this;
		let a = (e = (n = this.config.__extensionClasses) == null ? void 0 : n.featureFlags) == null ? (r = t.__defaultExtensionClasses) == null ? void 0 : r.featureFlags : e;
		var o, s, c;
		if (a) if (this.featureFlags && this.featureFlags instanceof a || ((o = this.xd) == null || o.call(this), this.xd = void 0, this.featureFlags = new a(this)), E(this.featureFlags.onReloading) && E(this.featureFlags.setup)) {
			if (!this.xd) {
				this.xd = this.featureFlags.onReloading(() => {
					this.mr.emit("featureFlagsReloading", !0);
				});
				let e = this.featureFlags;
				L(function* () {
					try {
						yield e.setup(i.Sd());
					} catch (t) {
						H.error("Failed to set up feature flags", t);
						let n = i.xd;
						i.xd = void 0;
						try {
							n == null || n();
						} catch (e) {
							H.error("Failed to unsubscribe feature flag reloading", e);
						}
						try {
							yield e.dispose();
						} catch (e) {
							H.error("Failed to dispose feature flags", e);
						}
					}
				})();
			}
		} else (s = (c = this.featureFlags).initialize) == null || s.call(c);
	}
	md(e) {
		let n = performance.now(), r = V(V({}, t.__defaultExtensionClasses), this.config.__extensionClasses), i = [];
		var a, o, s, c, l, u, d, f;
		r.exceptions && this.Oh.push(this.exceptions = (a = this.exceptions) == null ? new r.exceptions(this) : a), r.historyAutocapture && this.Oh.push(this.historyAutocapture = new r.historyAutocapture(this)), this.Dh(), r.tracingHeaders && this.Oh.push(this.tracingHeaders = new r.tracingHeaders(this)), r.siteApps && this.Oh.push(this.siteApps = new r.siteApps(this)), r.sessionRecording && !e && this.Oh.push(this.sessionRecording = new r.sessionRecording(this)), r.autocapture && this.kd(this.autocapture = new r.autocapture(this), i), r.surveys && this.kd(this.surveys = (o = this.surveys) == null ? new r.surveys(this) : o, i), r.logs && this.kd(this.logs = (s = this.logs) == null ? new r.logs(this) : s, i), r.metrics && this.Oh.push(this.metrics = (c = this.metrics) == null ? new r.metrics(this) : c), r.conversations && this.Oh.push(this.conversations = (l = this.conversations) == null ? new r.conversations(this) : l), r.productTours && this.Oh.push(this.productTours = new r.productTours(this)), r.heatmaps && this.Oh.push(this.heatmaps = new r.heatmaps(this)), r.webVitalsAutocapture && this.Oh.push(this.webVitalsAutocapture = new r.webVitalsAutocapture(this)), r.exceptionObserver && this.Oh.push(this.exceptionObserver = new r.exceptionObserver(this)), r.deadClicksAutocapture && this.Oh.push(this.deadClicksAutocapture = new r.deadClicksAutocapture(this, As)), r.toolbar && this.Oh.push(this.toolbar = (u = this.toolbar) == null ? new r.toolbar(this) : u), r.experiments && this.Oh.push(this.experiments = (d = this.experiments) == null ? new r.experiments(this) : d), r.webMCP && this.Oh.push(this.webMCP = (f = this.webMCP) == null ? new r.webMCP(this) : f);
		let p = this.Oh.length > 0 || i.length > 0;
		this.config.disable_scroll_properties || i.unshift(() => {
			this.scrollManager.startMeasuringScrollPosition();
		}), this.Oh.forEach((e) => {
			e.initialize && i.push(() => {
				var t;
				(t = e.initialize) == null || t.call(e);
			});
		}), i.push(() => {
			if (this.$d) {
				let e = this.$d;
				this.$d = void 0, this.Oh.forEach((t) => {
					var n;
					return (n = t.onRemoteConfig) == null ? void 0 : n.call(t, e);
				});
			}
		}), this.Cd(i, n, p);
	}
	Cd(e, t, n) {
		for (var r, i; e.length > 0;) {
			if (this.config.__preview_deferred_init_extensions && performance.now() - t >= 30 && e.length > 0) return void (this.gd = setTimeout(() => {
				this.gd = void 0, this.Cd(e, t, n);
			}, 0));
			let r = e.shift();
			if (r) try {
				r();
			} catch (e) {
				H.error("Error initializing extension:", e);
			}
		}
		let a = Math.round(performance.now() - t);
		n && a > 0 ? this.register_for_session({
			[Fa]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
			[Ia]: a
		}) : k((r = this.sessionPersistence) == null ? void 0 : r.props.$sdk_debug_extensions_init_method) && k((i = this.sessionPersistence) == null ? void 0 : i.props.$sdk_debug_extensions_init_time_ms) || (this.unregister_for_session(Fa), this.unregister_for_session(Ia)), this.config.__preview_deferred_init_extensions && H.info(`PostHog extensions initialized (${a}ms)`);
	}
	xc(e) {
		if (!r || !r.body) return H.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
			this.xc(e);
		}, 500);
		if (this.config.__preview_deferred_init_extensions && (this.$d = e), this.gr = e, this.compression = void 0, e.ok) {
			var t;
			let n = e.config;
			n.supportedCompression && !this.config.disable_compression && (this.compression = v(n.supportedCompression, Dc.GZipJS) ? Dc.GZipJS : v(n.supportedCompression, Dc.Base64) ? Dc.Base64 : void 0), (t = n.analytics) != null && t.endpoint && (this.analyticsDefaultEndpoint = n.analytics.endpoint);
		}
		this.set_config({ person_profiles: this.od ? this.od : Ya }), this.mr.emit("extensionsRemoteConfig", e), this.Oh.forEach((t) => {
			var n;
			return (n = t.onRemoteConfig) == null ? void 0 : n.call(t, e);
		});
	}
	_d() {
		try {
			this.config.loaded(this);
		} catch (e) {
			H.critical("`loaded` function failed", e);
		}
		if (this.Td(), this.config.internal_or_test_user_hostname && i != null && i.hostname) {
			let e = i.hostname, t = this.config.internal_or_test_user_hostname;
			(typeof t == "string" ? e === t : t.test(e)) && this.setInternalOrTestUser();
		}
		this.config.capture_pageview && setTimeout(() => {
			(this.consent.isOptedIn() || this.Lh()) && this.Md();
		}, 1), this.Id = new zc(this), this.Id.load();
	}
	Td() {
		var e;
		this.is_capturing() && this.config.request_batching && ((e = this.hd) == null || e.enable());
	}
	_dom_loaded() {
		this.is_capturing() && to(this.__request_queue, (e) => this.dd(e)), this.__request_queue = [], this.Td();
	}
	_handle_unload() {
		var e, t, n, r, i, a;
		this.Jh = !0, (e = this.surveys) == null || (t = e.handlePageUnload) == null || t.call(e), (n = this.metrics) == null || n.flush("sendBeacon"), this.config.request_batching ? (this.Ed() && this.capture(Qa), (r = this.logs) == null || r.flushLogs("sendBeacon"), (i = this.hd) == null || i.unload(), (a = this.vd) == null || a.unload()) : this.Ed() && this.capture(Qa, null, { transport: "sendBeacon" });
	}
	_send_request(e) {
		zl(this, e);
	}
	dd(e, t) {
		this.vd ? this.vd.retriableRequest(e, t) : this._send_request(t ? V(V({}, e), {}, { transport: t }) : e);
	}
	_execute_array(e) {
		Lu++;
		try {
			let t, n = [], r = [], i = [];
			to(e, (e) => {
				if (e) if (t = e[0], T(t)) i.push(e);
				else if (E(e)) try {
					e.call(this);
				} catch (t) {
					H.error("Error executing queued PostHog call", e, t);
				}
				else T(e) && t === "alias" ? n.push(e) : T(e) && t.indexOf("capture") !== -1 && E(this[t]) ? i.push(e) : r.push(e);
			});
			let a = function(e, t) {
				to(e, function(e) {
					try {
						if (T(e[0])) {
							let n = t;
							W(e, function(e) {
								n = n[e[0]].apply(n, e.slice(1));
							});
						} else t[e[0]].apply(t, e.slice(1));
					} catch (t) {
						H.error("Error executing queued PostHog call", e, t);
					}
				});
			};
			a(n, this), a(r, this), a(i, this);
		} finally {
			Lu--;
		}
	}
	push(e) {
		if (Lu > 0 && T(e) && A(e[0])) {
			let n = t.prototype[e[0]];
			E(n) && n.apply(this, e.slice(1));
			return;
		}
		this._execute_array([e]);
	}
	get Ad() {
		return {
			property: Wi,
			persistenceKey: Gi,
			cookieName: "_fbc",
			pattern: qu,
			register: (e, t) => {
				var n;
				return (n = this.persistence) == null ? void 0 : n.register({ [Gi]: {
					value: e,
					delivered: t
				} });
			},
			unregister: () => {
				var e;
				return (e = this.persistence) == null ? void 0 : e.unregister(Gi);
			}
		};
	}
	get Rd() {
		return {
			property: Ki,
			persistenceKey: qi,
			cookieName: "_fbp",
			pattern: Ju,
			register: (e, t) => {
				var n;
				return (n = this.persistence) == null ? void 0 : n.register({ [qi]: {
					value: e,
					delivered: t
				} });
			},
			unregister: () => {
				var e;
				return (e = this.persistence) == null ? void 0 : e.unregister(qi);
			}
		};
	}
	Pd(e) {
		var t;
		let n = (t = this.persistence) == null ? void 0 : t.get_property(e.persistenceKey);
		return A(n) && e.pattern.test(n) ? {
			value: n,
			delivered: !1
		} : D(n) && A(n.value) && e.pattern.test(n.value) ? {
			value: n.value,
			delivered: !0 === n.delivered
		} : void 0;
	}
	Od(e, t, n) {
		return t === (n == null ? void 0 : n.value) ? {
			value: t,
			pending: !n.delivered
		} : (e.register(t, !1), {
			value: t,
			pending: !0
		});
	}
	Fd(e) {
		if (!this.config.save_campaign_params || this.Lh()) return;
		let t = lo(e.cookieName);
		return A(t) && e.pattern.test(t) ? t : void 0;
	}
	Ld(e, t, n, r) {
		if (!this.persistence) return;
		let i = this.Ad, a = this.Pd(i);
		if (r) return void i.unregister();
		if (n) return A(t) && qu.test(t) ? this.Od(i, t, a) : void i.unregister();
		let o = A(e) && Ku.test(e) ? e : void 0, s = this.Fd(i);
		return s && ((e, t, n) => {
			let r = e.split(".");
			if (t) return r[3] === t;
			if (!n) return !0;
			let i = n.value.split(".");
			return r[3] === i[3] || Number(r[2]) > Number(i[2]);
		})(s, o, a) ? this.Od(i, s, a) : o ? (a == null ? void 0 : a.value.split(".")[3]) === o ? {
			value: a.value,
			pending: !a.delivered
		} : this.Od(i, `fb.1.${Date.now()}.${o}`, a) : a ? {
			value: a.value,
			pending: !a.delivered
		} : void 0;
	}
	Dd(e, t, n) {
		if (!this.persistence) return;
		let r = this.Rd, i = this.Pd(r);
		if (n) return void r.unregister();
		if (t) return A(e) && Ju.test(e) ? this.Od(r, e, i) : void r.unregister();
		let a = this.Fd(r);
		return a ? this.Od(r, a, i) : i ? {
			value: i.value,
			pending: !i.delivered
		} : void 0;
	}
	Nd(e) {
		if (!this.persistence) return;
		let t = ({ channel: e, value: t }) => {
			let n = this.Pd(e);
			return (n == null ? void 0 : n.value) === t && !n.delivered;
		}, n = e.filter(t);
		n.length && (this.persistence.refreshMetaIdentifiers(), n.filter(t).forEach(({ channel: e, value: t }) => e.register(t, !0)));
	}
	capture(e, t, n) {
		var r, i, a;
		if (!(this.__loaded && this.persistence && this.sessionPersistence && this.hd)) return void H.uninitializedWarning("posthog.capture");
		if (!this.is_capturing()) return void H.info(`Event "${e}" was not captured because capturing is disabled (opted out or consent pending).`);
		if (k(e) || !A(e)) return void H.error("No event name provided to posthog.capture");
		if (this.Hh(), e === "$snapshot" && this.Lh()) return;
		let o = !this.config.opt_out_useragent_filter && this._is_bot();
		if (o && !this.config.__preview_capture_bot_pageviews) return this.Qh || (this.Qh = !0, console.warn("[PostHog.js] Events are being dropped because the user agent looks like a bot. Set `opt_out_useragent_filter: true` to capture them, e.g. in end-to-end tests. Note that logs from `captureLog` are not subject to this filter.")), void H.info(`Event "${e}" was not captured because the user agent looks like a bot. Set \`opt_out_useragent_filter: true\` to capture it.`);
		let s = n != null && n.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
		if (s != null && s.isRateLimited) return void H.critical("This capture call is ignored due to client rate limiting.");
		let c;
		t != null && t.$current_url && !A(t == null ? void 0 : t.$current_url) && (H.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), t == null || delete t.$current_url), e !== "$exception" || n != null && n.jd || H.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (c = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
		let l = /* @__PURE__ */ new Date(), u = (n == null ? void 0 : n.timestamp) || l, d = St(n == null ? void 0 : n.uuid, _o), f = {
			uuid: d,
			event: e,
			properties: this.calculateEventProperties(e, t || {}, u, d)
		};
		e === "$pageview" && this.config.__preview_capture_bot_pageviews && o && (f.event = "$bot_pageview", f.properties.$browser_type = "bot"), s && (f.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens);
		let p = e === "$feature_flag_called" && !1 === f.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
		n != null && n.$set && !p && (f.$set = n == null ? void 0 : n.$set);
		let m = D(t == null ? void 0 : t.$set) ? t.$set : void 0, h = T(t == null ? void 0 : t.$unset) ? t.$unset : [], g = (n == null ? void 0 : n.$unset) || [], _ = (e) => {
			var t;
			let r = !!(n != null && n.$set) && e in n.$set;
			return {
				hasProvided: r || !!m && e in m,
				provided: r ? n == null || (t = n.$set) == null ? void 0 : t[e] : m == null ? void 0 : m[e],
				unset: h.indexOf(e) !== -1 || g.indexOf(e) !== -1
			};
		};
		this.persistence.refreshMetaIdentifiersBeforeCapture();
		let v = _(Wi), y = _(Ki), b = [{
			channel: this.Ad,
			hasProvided: v.hasProvided,
			update: this.Ld(c == null ? void 0 : c.fbclid, v.provided, v.hasProvided, v.unset)
		}, {
			channel: this.Rd,
			hasProvided: y.hasProvided,
			update: this.Dd(y.provided, y.hasProvided, y.unset)
		}];
		for (let { channel: e, hasProvided: t, update: n } of b) n && !0 === f.properties.$process_person_profile && n.pending && !t && !p && (f.$set = V({ [e.property]: n.value }, f.$set));
		let x = n == null ? void 0 : n.$unset;
		x && (f.$unset = x);
		let S = p ? void 0 : this.qd(n == null ? void 0 : n.$set_once, e !== eo, e === $a);
		if (S && (f.$set_once = S), n != null && n._noTruncate || (C = this.config.properties_string_max_length, f = function(e, t) {
			let n = /* @__PURE__ */ new Set();
			return function e(r, i) {
				if (r !== Object(r)) return t ? t(r) : r;
				if (n.has(r)) return;
				let a;
				if (n.add(r), T(r)) a = [], to(r, (t) => {
					a.push(e(t));
				});
				else {
					let t = {};
					W(ie(r) ? ao(r) : r, (r, i) => {
						n.has(r) || (t[i] = e(r, i));
					}), a = t;
				}
				return a;
			}(e);
		}(f, (e) => A(e) ? e.slice(0, C) : e)), f.timestamp = u, k(n == null ? void 0 : n.timestamp) || (f.properties.$event_time_override_provided = !0, f.properties.$event_time_override_system_time = l), p && (f.properties = ((e, t = []) => {
			let n = {}, r = (t) => {
				e[t] !== void 0 && (n[t] = e[t]);
			};
			return Dn.forEach(r), t.forEach(r), n;
		})(f.properties, Yu)), e === Ac.DISMISSED || e === Ac.SENT) {
			let n = t == null ? void 0 : t[jc.SURVEY_ID], r = t == null ? void 0 : t[jc.SURVEY_ITERATION];
			du({
				id: n,
				current_iteration: r
			}), f.$set = V(V({}, f.$set), {}, { [$l({
				id: n,
				current_iteration: r
			}, e === Ac.SENT ? "responded" : "dismissed")]: !0 });
		} else e === Ac.SHOWN && (f.$set = V(V({}, f.$set), {}, { [jc.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
		var C;
		if (e === Pc.SHOWN) {
			let e = t == null ? void 0 : t[Fc.TOUR_TYPE];
			e && (f.$set = V(V({}, f.$set), {}, { [`${Fc.TOUR_LAST_SEEN_DATE}/${e}`]: (/* @__PURE__ */ new Date()).toISOString() }));
		}
		let w = V(V({}, f.properties.$set), f.$set);
		if (O(w) || this.setPersonPropertiesForFlags(w), !N(this.config.before_send)) {
			let e = this.Ds(f);
			if (!e) return;
			f = e, f.uuid = St(f.uuid, _o);
		}
		this.sessionRecording && !this.sessionRecording.isReplayOff && !this.nd && Gu(e) && (this.nd = !0, setTimeout(() => this.nd = !1, 3e4));
		let E = [];
		b.forEach(({ channel: e, update: t }) => {
			var n, r, i;
			let a = (n = (r = f.$set) == null ? void 0 : r[e.property]) == null ? D((i = f.properties) == null ? void 0 : i.$set) ? f.properties.$set[e.property] : void 0 : n;
			t != null && t.pending && a === t.value && E.push({
				channel: e,
				value: t.value
			});
		}), this.mr.emit("eventCaptured", f);
		let j = (r = n == null ? void 0 : n._url) == null ? this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint) : r, M = (n == null ? void 0 : n._batchKey) === "recordings" || /\/s\/(?:\?|$)/.test(j), P = V(V(V({
			method: "POST",
			url: j,
			data: f,
			compression: "best-available",
			preferSyncCompression: n == null ? void 0 : n.send_instantly,
			timestampMode: M ? "body" : "capture-body",
			batchKey: n == null ? void 0 : n._batchKey
		}, M && (i = f.properties) != null && i.$session_id ? { batchGroup: f.properties.$session_id + (f.properties.$window_id ? `-${f.properties.$window_id}` : "") } : {}), n != null && n.transport ? { transport: n.transport } : {}), E.length ? {
			fireCallbackOnDrop: !0,
			callback: (e) => {
				e.statusCode >= 200 && 300 > e.statusCode && this.Nd(E);
			}
		} : {});
		if (!this.config.request_batching || n && !(n != null && n._batchKey) || n != null && n.send_instantly) {
			var F;
			let e;
			!P.transport && !P.callback && O((F = this.config.request_headers) == null ? {} : F) && this.Jh && (e = "sendBeacon"), this.dd(P, e);
		} else this.hd.enqueue(P);
		return (a = this.featureFlags) == null || a.sendFlagCallsPendingCapture(), f;
	}
	_addCaptureHook(e) {
		return this.on("eventCaptured", (t) => e(t.event, t));
	}
	getExtension(e) {
		var t;
		return (t = this.Bd) == null ? void 0 : t.getExtension(e);
	}
	Sd() {
		var e;
		return (e = this.Bd) == null ? this.Bd = new Fu(this) : e;
	}
	br(e) {
		this.ed.push(e);
		let t = !0;
		return () => {
			if (!t) return;
			t = !1;
			let n = this.ed.indexOf(e);
			n !== -1 && this.ed.splice(n, 1);
		};
	}
	yd(e = !0) {
		var t;
		return !!((t = this.persistence) != null && t.consumeCookieIdentityChange()) && (this.bd(e), !0);
	}
	bd(e = !0) {
		var t, n, r;
		this.ld = null, ((t = this.persistence) == null ? void 0 : t.get_property("$user_state")) === "anonymous" && ((r = this.sessionPersistence) == null || r.clear(), this.Yh.clear(), this.zd()), (n = this.featureFlags) == null || n.reset(), e && this.reloadFeatureFlags();
	}
	calculateEventProperties(t, n, a, o, s) {
		if (a = a || /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return n;
		this.Hh(), this.persistence.syncCookieProperties(), this.yd();
		let c = s ? void 0 : this.persistence.remove_event_timer(t), u = V({}, n);
		if (u.token = this.config.token, u.$config_defaults = this.config.defaults === "latest" ? Zu : this.config.defaults, this.Lh() && (u[Pa] = !0), t === "$snapshot") {
			let e = V(V({}, this.persistence.properties()), this.sessionPersistence.properties());
			return u.distinct_id = e.distinct_id, (!A(u.distinct_id) && !P(u.distinct_id) || j(u.distinct_id)) && H.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), u;
		}
		let d = function(t, n, r, a = !1) {
			var o, s, c, u;
			if (!l) return {};
			let d = t ? [...ec, ...n || []] : [], [f, m] = ut(l), [h, g] = function(e) {
				for (let t = 0; mt.length > t; t++) {
					let [n, r, i] = mt[t], a = e.match(n);
					if (a) {
						let t = i && e.match(i) || a;
						return [r, (t == null ? void 0 : t[1]) || ""];
					}
				}
				return ["", ""];
			}(l), _ = function() {
				let e = "u" > typeof navigator ? navigator : void 0;
				return e != null && e.brave ? { brave: !0 } : {};
			}(), v = {};
			k(r) || (v.detectGoogleSearchApp = r);
			let y = {}, b = (o = navigator) == null || (o = o.userAgentData) == null ? void 0 : o.platform, x = (s = navigator) == null ? void 0 : s.maxTouchPoints, S = e == null || (c = e.screen) == null ? void 0 : c.width, C = e == null || (u = e.screen) == null ? void 0 : u.height, w = e == null ? void 0 : e.devicePixelRatio;
			k(b) || (y.userAgentDataPlatform = b), k(x) || (y.maxTouchPoints = x), k(S) || (y.screenWidth = S), k(C) || (y.screenHeight = C), k(w) || (y.devicePixelRatio = w);
			let T = G(io({
				$os: f,
				$os_version: m,
				$browser: ot(l, navigator.vendor, _, v),
				$webview_app: h,
				$webview_app_version: g,
				$device: dt(l),
				$device_type: ft(l, y),
				$timezone: Hs(),
				$timezone_offset: pc()
			}), {
				$current_url: Ys(a ? wt(i == null ? void 0 : i.href) : i == null ? void 0 : i.href, d, nc),
				$host: i == null ? void 0 : i.host,
				$pathname: i == null ? void 0 : i.pathname,
				$raw_user_agent: l.length > 1e3 ? l.substring(0, 997) + "..." : l,
				$browser_version: ct(l, navigator.vendor, _, v),
				$browser_language: sc(),
				$browser_language_prefix: cc(),
				$screen_height: e == null ? void 0 : e.screen.height,
				$screen_width: e == null ? void 0 : e.screen.width,
				$viewport_height: e == null ? void 0 : e.innerHeight,
				$viewport_width: e == null ? void 0 : e.innerWidth,
				$lib: p.LIB_NAME,
				$lib_version: p.LIB_VERSION,
				$insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
				$time: Date.now() / 1e3
			});
			return p.SDK_DIST_CHANNEL && (T.$sdk_dist_channel = p.SDK_DIST_CHANNEL), T;
		}(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
		if (this.sessionManager) {
			let { sessionId: e, windowId: t } = this.sessionManager.checkAndGetSessionAndWindowId(s, a.getTime(), !0);
			u.$session_id = e, u.$window_id = t;
		}
		let f, m;
		this.sessionPropsManager && G(u, this.sessionPropsManager.getSessionProps());
		try {
			var h;
			if (this.sessionRecording) {
				let e = this.sessionRecording.sdkDebugProperties, n = !this.nd && Gu(t);
				for (let t in e) (n || v(Uu, t)) && (u[t] = e[t]);
			}
			f = (h = this.vd) == null ? void 0 : h.length;
		} catch (e) {
			u.$sdk_debug_error_capturing_properties = String(e);
		}
		if (this.requestRouter.region === ou && (u.$lib_custom_api_host = this.config.api_host), m = t !== "$pageview" || s ? t !== "$pageleave" || s ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(a) : this.pageViewManager.doPageView(a, o), u = G(u, m), t === "$pageview" && r && (u.title = r.title), !k(c)) {
			let e = a.getTime() - c;
			u.$duration = parseFloat((e / 1e3).toFixed(3));
		}
		l && this.config.opt_out_useragent_filter && (u.$browser_type = this._is_bot() ? "bot" : "browser");
		let g = this.persistence.properties(), _ = this.sessionPersistence.properties(), y = u.$groups, b = g.$groups;
		D(y) && !O(y) && (u.$groups = V(V({}, D(b) ? b : {}), y)), W(["$referrer", "$referring_domain"], (e) => {
			e in g && delete _[e];
		});
		let x = {};
		if (this.ed.length > 0) for (let e of this.ed.slice()) try {
			G(x, e());
		} catch (e) {
			H.error("Failed to produce browser extension event properties", e);
		}
		u = G({}, d, g, _, V(V({}, x), u)), f ? u.$sdk_debug_retry_queue_size = f : delete u.$sdk_debug_retry_queue_size, u.$is_identified = this._isIdentified(), T(this.config.property_denylist) ? W(this.config.property_denylist, function(e) {
			delete u[e];
		}) : H.error(Hu + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
		let S = this.config.sanitize_properties;
		S && (H.error(Vu), u = S(u, t));
		let C = this.Hd();
		return u.$process_person_profile = C, C && !s && this.Ud("_calculate_event_properties"), u;
	}
	qd(e, t = !0, n = !1) {
		var r;
		if (!this.persistence || !this.Hd() || this.Kh && !n) return e;
		let i = G({}, this.persistence.get_initial_props(), ((r = this.sessionPropsManager) == null ? void 0 : r.getSetOnceProps()) || {}, e || {}), a = this.config.sanitize_properties;
		return a && (H.error(Vu), i = a(i, "$set_once")), t && (this.Kh = !0), O(i) ? void 0 : i;
	}
	register(e, t) {
		var n;
		(n = this.persistence) == null || n.register(e, t);
	}
	register_once(e, t, n) {
		var r;
		(r = this.persistence) == null || r.register_once(e, t, n);
	}
	register_for_session(e) {
		var t, n;
		(t = this.persistence) == null || t.syncCookieProperties(), this.yd(), (n = this.sessionPersistence) == null || n.register(e), Object.keys(e).forEach((e) => this.Yh.add(e)), this.zd();
	}
	unregister(e) {
		var t;
		(t = this.persistence) == null || t.unregister(e);
	}
	unregister_for_session(e) {
		var t;
		(t = this.sessionPersistence) == null || t.unregister(e), this.Yh.delete(e), this.zd();
	}
	Wd(e, t) {
		this.register({ [e]: t });
	}
	fd() {
		this.Yh.forEach((e) => {
			var t;
			(t = this.sessionPersistence) == null || t.unregister(e);
		}), this.Yh.clear(), this.zd();
	}
	zd() {
		var e;
		if (!this.Xh) return;
		if (this.config.persistence === "memory" || (e = this.sessionPersistence) != null && e.gi || !Y.Ot()) return void Y.Dt(this.Xh);
		let t = [];
		this.Yh.forEach((e) => t.push(e)), t.length > 0 ? Y.$t(this.Xh, t) : Y.Dt(this.Xh);
	}
	getFeatureFlag(e, t) {
		var n;
		return (n = this.featureFlags) == null ? void 0 : n.getFeatureFlag(e, t);
	}
	getFeatureFlagPayload(e) {
		var t;
		return (t = this.featureFlags) == null ? void 0 : t.getFeatureFlagPayload(e);
	}
	getFeatureFlagResult(e, t) {
		var n;
		return (n = this.featureFlags) == null ? void 0 : n.getFeatureFlagResult(e, t);
	}
	getAllFeatureFlags() {
		var e, t;
		return (e = (t = this.featureFlags) == null ? void 0 : t.getAllFeatureFlags()) == null ? [] : e;
	}
	isFeatureEnabled(e, t) {
		var n, r;
		return (n = (r = this.featureFlags) == null ? void 0 : r.isFeatureEnabled(e, t)) == null ? t == null ? void 0 : t.defaultValue : n;
	}
	reloadFeatureFlags() {
		var e;
		(e = this.featureFlags) == null || e.reloadFeatureFlags();
	}
	updateFlags(e, t, n) {
		var r;
		(r = this.featureFlags) == null || r.updateFlags(e, t, n);
	}
	updateEarlyAccessFeatureEnrollment(e, t, n) {
		var r;
		(r = this.featureFlags) == null || r.updateEarlyAccessFeatureEnrollment(e, t, n);
	}
	getEarlyAccessFeatures(e, t = !1, n) {
		var r;
		return (r = this.featureFlags) == null ? void 0 : r.getEarlyAccessFeatures(e, t, n);
	}
	on(e, t) {
		return this.mr.on(e, t);
	}
	onFeatureFlags(e) {
		return this.featureFlags ? this.featureFlags.onFeatureFlags(e) : (e([], {}, { errorsLoading: !0 }), () => {});
	}
	onSurveysLoaded(e) {
		return this.surveys ? this.surveys.onSurveysLoaded(e) : (e([], {
			isLoaded: !1,
			error: Bu
		}), () => {});
	}
	onSessionId(e) {
		var t, n;
		return (t = (n = this.sessionManager) == null ? void 0 : n.onSessionId(e)) == null ? () => {} : t;
	}
	getSurveys(e, t = !1) {
		this.surveys ? this.surveys.getSurveys(e, t) : e([], {
			isLoaded: !1,
			error: Bu
		});
	}
	getActiveMatchingSurveys(e, t = !1) {
		this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], {
			isLoaded: !1,
			error: Bu
		});
	}
	onActiveMatchingSurveysChanged(e) {
		return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(e) : (e([], {
			isLoaded: !1,
			error: Bu
		}), () => {});
	}
	renderSurvey(e, t) {
		var n;
		(n = this.surveys) == null || n.renderSurvey(e, t);
	}
	displaySurvey(e, t = pu) {
		var n;
		(n = this.surveys) == null || n.displaySurvey(e, t);
	}
	cancelPendingSurvey(e) {
		var t;
		(t = this.surveys) == null || t.cancelPendingSurvey(e);
	}
	canRenderSurvey(e) {
		var t, n;
		return (t = (n = this.surveys) == null ? void 0 : n.canRenderSurvey(e)) == null ? {
			visible: !1,
			disabledReason: Bu
		} : t;
	}
	canRenderSurveyAsync(e, t = !1) {
		var n, r;
		return (n = (r = this.surveys) == null ? void 0 : r.canRenderSurveyAsync(e, t)) == null ? Promise.resolve({
			visible: !1,
			disabledReason: Bu
		}) : n;
	}
	Gd(e) {
		return !e || j(e) ? (H.critical("Unique user id has not been set in posthog.identify"), !1) : e === "$posthog_cookieless" ? (H.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(e.toLowerCase()) && !["undefined", "null"].includes(e.toLowerCase()) || (H.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1);
	}
	identify(e, t, n) {
		if (!this.__loaded || !this.persistence) return H.uninitializedWarning("posthog.identify");
		if (P(e) && (e = e.toString(), H.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this.Gd(e) || !this.Ud("posthog.identify")) return;
		this.Hh();
		let r = this.get_distinct_id(), i = this.persistence.syncCookieProperties() && this.get_distinct_id() !== r, a = this.yd(!1), o = this.persistence.Ju(), s = !1;
		try {
			let r = this.get_distinct_id();
			this.register({ $user_id: e }), this.get_property("$device_id") || this.register_once({
				$had_persisted_distinct_id: !0,
				$device_id: r
			}, ""), e !== r && e !== this.get_property("__alias") && (this.unregister(Hi), this.register({ distinct_id: e }));
			let o = (this.persistence.get_property("$user_state") || "anonymous") === qa, l = e !== r, u = !l && o;
			if (l && o) {
				var c;
				let i = this.config.reuseAnonymousId ? { distinct_id: e } : {
					distinct_id: e,
					$anon_distinct_id: r
				};
				this.persistence.set_property(Ea, Ja), this.setPersonPropertiesForFlags({
					$set: t || {},
					$set_once: n || {}
				}, !1), this.config.cookieWinsOnConflict && this.persistence.Zu(), this.capture("$identify", i, {
					$set: t || {},
					$set_once: n || {}
				}) && (this.ld = au(e, t, n)), (c = this.featureFlags) == null || c.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : r);
			} else if (u) {
				this.persistence.set_property(Ea, Ja);
				let r = t || {}, i = n || {};
				this.setPersonPropertiesForFlags({
					$set: r,
					$set_once: i
				}, !1), this.config.cookieWinsOnConflict && this.persistence.Zu(), this.capture("$set", {
					$set: r,
					$set_once: i
				}) && (this.ld = au(e, t, n));
			} else (t || n) && this.setPersonProperties(t, n);
			l || i || a ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(Ti)) : u && (t || n) && this.reloadFeatureFlags(), s = !0;
		} finally {
			o && this.persistence.Xu(s);
		}
	}
	setPersonProperties(e, t) {
		if (!e && !t || !this.Ud("posthog.setPersonProperties")) return;
		let n = au(this.get_distinct_id(), e, t);
		this.ld === n ? H.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.") : (this.setPersonPropertiesForFlags({
			$set: e || {},
			$set_once: t || {}
		}, !0), this.capture("$set", {
			$set: e || {},
			$set_once: t || {}
		}) && (this.ld = n));
	}
	unsetPersonProperties(e) {
		var t;
		let n = (T(e) ? e : [e]).filter((e) => A(e) && e.length > 0);
		n.length !== 0 && this.Ud("posthog.unsetPersonProperties") && ((t = this.featureFlags) == null || t.unsetPersonPropertiesForFlags(n, !0), this.capture("$set", { $unset: n }), this.ld = null);
	}
	group(e, t, n) {
		var r;
		if (!e || !t) return void H.error("posthog.group requires a group type and group key");
		(r = this.persistence) == null || r.syncCookieProperties(), this.yd();
		let i = this.getGroups(), a = i[e] !== t;
		if (a && this.resetGroupPropertiesForFlags(e), this.register({ $groups: V(V({}, i), {}, { [e]: t }) }), (a || n) && this.Hd()) {
			let r = {
				$group_type: e,
				$group_key: t
			};
			n && (r.$group_set = n), this.capture(eo, r);
		}
		n && this.setGroupPropertiesForFlags({ [e]: n }), a && !n && this.reloadFeatureFlags();
	}
	resetGroups() {
		this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
	}
	setPersonPropertiesForFlags(e, t = !0) {
		var n;
		(n = this.featureFlags) == null || n.setPersonPropertiesForFlags(e, t);
	}
	resetPersonPropertiesForFlags(e = !0) {
		var t;
		(t = this.featureFlags) == null || t.resetPersonPropertiesForFlags(e);
	}
	setGroupPropertiesForFlags(e, t = !0) {
		var n;
		this.Ud("posthog.setGroupPropertiesForFlags") && ((n = this.featureFlags) == null || n.setGroupPropertiesForFlags(e, t));
	}
	resetGroupPropertiesForFlags(e) {
		var t;
		(t = this.featureFlags) == null || t.resetGroupPropertiesForFlags(e);
	}
	reset(e) {
		let t = ee(e) ? e : e == null ? void 0 : e.resetDeviceID, n = ee(e) || e == null ? void 0 : e.bootstrap;
		this.Vd(t, !1, n);
	}
	Vd(e, t = !1, n) {
		var r, i, a, o, s, c;
		if (H.info("reset"), !this.__loaded) return H.uninitializedWarning("posthog.reset");
		let l = n == null ? void 0 : n.sessionID;
		this.config.bootstrap = n || ((r = this.jh) == null ? void 0 : r.bootstrap) || {}, (i = this.featureFlags) == null || (a = i.updateConfig) == null || a.call(i, this.config, this.$c());
		let u = this.get_property(Bi), d = this.get_property(Vi), f = this.get_property(ia);
		(o = this.sessionRecording) == null || o.flushBeforeIdentityReset();
		let p = this.is_capturing();
		t || this.consent.reset(), t || !p || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
		let m = (s = this.persistence) == null || (c = s.Ju) == null ? void 0 : c.call(s), h = this.Uh;
		this.Uh = h || t;
		let g = !1;
		try {
			var _, v, y, b, x, S, C, w, T, E, D, O, A;
			if ((_ = this.persistence) == null || _.clear(), (v = this.sessionPersistence) == null || v.clear(), this.Yh.clear(), this.zd(), k(f) || (E = this.persistence) == null || E.register({ $session_recording_remote_config: f }), (y = this.surveys) == null || y.reset(), (b = this.featureFlags) == null || b.reset(), (x = this.conversations) == null || x.reset(), (S = this.logs) == null || S.reset(), (C = this.metrics) == null || C.reset(), (w = this.persistence) == null || w.set_property("$user_state", "anonymous"), (T = this.sessionManager) == null || T.resetSessionId(), this.ld = null, this.config.cookieless_mode === "always") this.register_once({
				distinct_id: Na,
				$device_id: null
			}, "");
			else {
				let t = this.config.get_device_id(_o());
				this.register_once({
					distinct_id: t,
					$device_id: e ? t : u
				}, ""), e || k(d) || this.register({ [Vi]: d });
			}
			if (this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), n && (n.distinctID && !this.Lh() && ((A = this.persistence) == null || A.set_property("$user_state", n.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: n.distinctID })), (D = this.featureFlags) == null || D.initialize(), !N(l) && !((O = this.sessionManager) != null && O.setBootstrapSessionId(l, !0)))) {
				let e = V({}, n);
				delete e.sessionID, this.config.bootstrap = e;
			}
			delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, g = !0;
		} finally {
			var j, M;
			this.Uh = h, m && ((j = this.persistence) == null || (M = j.Xu) == null || M.call(j, g));
		}
		var P;
		this.gr && ((P = this.conversations) == null || P.onRemoteConfig(this.gr)), this.reloadFeatureFlags();
	}
	shutdown(e) {
		var t = this;
		return L(function* () {
			if (!t.__loaded) return void H.uninitializedWarning("posthog.shutdown");
			t.Zh = !0, clearTimeout(t.gd), t.gd = void 0;
			let e = t.xd;
			t.xd = void 0;
			for (let n of [
				() => {
					var e;
					return (e = t.sessionRecording) == null ? void 0 : e.dispose();
				},
				() => {
					var e;
					return (e = t.logs) == null ? void 0 : e.flushLogs("sendBeacon");
				},
				() => {
					var e;
					return (e = t.metrics) == null ? void 0 : e.flush("sendBeacon");
				},
				() => {
					var e;
					return (e = t.metrics) == null ? void 0 : e.dispose();
				},
				() => {
					var e;
					return (e = t.logs) == null ? void 0 : e.dispose();
				},
				() => {
					var e;
					return (e = t.surveys) == null ? void 0 : e.dispose();
				},
				() => {
					var e;
					return (e = t.autocapture) == null ? void 0 : e.dispose();
				},
				() => e == null ? void 0 : e(),
				() => {
					var e;
					return (e = t.hd) == null ? void 0 : e.unload();
				},
				() => {
					var e;
					return (e = t.vd) == null ? void 0 : e.unload();
				},
				() => {
					var e;
					return (e = t.featureFlags) == null ? void 0 : e.destroy();
				},
				() => {
					var e;
					return (e = t.persistence) == null ? void 0 : e.destroy();
				},
				() => {
					var e;
					return (e = t.sessionPersistence) == null ? void 0 : e.destroy();
				}
			]) try {
				let e = n();
				e && E(e.then) && e.then(void 0, (e) => {
					H.error("Error during shutdown", e);
				});
			} catch (e) {
				H.error("Error during shutdown", e);
			}
		})();
	}
	setIdentity(e, t) {
		var n;
		delete this.config.identity_claims, this.config.identity_distinct_id = e, this.config.identity_hash = t, this.alias(e), (n = this.conversations) == null || n.Qd();
	}
	clearIdentity() {
		var e;
		delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, (e = this.conversations) == null || e.Jd();
	}
	get_distinct_id() {
		return this.get_property("distinct_id");
	}
	getGroups() {
		return this.get_property("$groups") || {};
	}
	get_session_id() {
		var e, t;
		return (e = (t = this.sessionManager) == null ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) == null ? "" : e;
	}
	get_session_replay_url(e) {
		if (!this.sessionManager) return "";
		let { sessionId: t, sessionStartTimestamp: n } = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${t}`);
		if (e != null && e.withTimestamp && n) {
			var i;
			let t = (i = e.timestampLookBack) == null ? 10 : i;
			if (!n) return r;
			r += `?t=${Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - n) / 1e3) - t, 0)}`;
		}
		return r;
	}
	alias(e, t) {
		return e === this.get_property("$people_distinct_id") ? (H.critical("Attempting to create alias for existing People user - aborting."), -2) : this.Ud("posthog.alias") ? (k(t) && (t = this.get_distinct_id()), e === t ? (H.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1) : (this.Wd(Hi, e), this.capture("$create_alias", {
			alias: e,
			distinct_id: t
		}))) : void 0;
	}
	set_config(e) {
		let t = V({}, this.config);
		if (D(e)) {
			var n, r, i, a, o, s, c, l, u, d, f, p, m, h;
			G(this.config, td(e));
			let b = this.Vh();
			if (this.persistence) {
				let e = this.config.persistence === "sessionStorage" || this.config.persistence === "memory";
				var g, _;
				if (e && this.sessionPersistence !== this.persistence && ((g = this.sessionPersistence) == null || g.remove(), (_ = this.sessionPersistence) == null || _.destroy()), this.persistence.update_config(this.config, t, b), e) this.sessionPersistence = this.persistence;
				else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new Ec(V(V({}, this.config), {}, { persistence: "sessionStorage" }), b, !1);
				else {
					var v;
					(v = this.sessionPersistence) == null || v.update_config(V(V({}, this.config), {}, { persistence: "sessionStorage" }), V(V({}, t), {}, { persistence: "sessionStorage" }), b);
				}
			}
			let x = this.ad(this.config.debug);
			var y;
			ee(x) && (this.config.debug = x), ee(this.config.debug) && (this.config.debug ? (mi.DEBUG = !0, J.Ot() && J.$t("ph_debug", !0), H.info("set_config", {
				config: e,
				oldConfig: t,
				newConfig: V({}, this.config)
			})) : (mi.DEBUG = !1, J.Ot() && J.Dt("ph_debug"))), (n = this.featureFlags) == null || (r = n.updateConfig) == null || r.call(n, this.config, this.$c()), (i = this.exceptionObserver) == null || i.onConfigChange(), (a = this.exceptions) == null || a.onConfigChange(), (o = this.metrics) == null || o.onConfigChange(), (s = this.webMCP) == null || s.startIfEnabled(), (c = this.sessionRecording) == null || c.startIfEnabledOrStop(), (l = this.tracingHeaders) == null || l.startIfEnabledOrStop(), (u = this.autocapture) == null || u.startIfEnabled(), (d = this.heatmaps) == null || d.startIfEnabled(), ("capture_pageview" in e || "disable_capture_url_hashes" in e) && ((y = this.historyAutocapture) == null || y.startIfEnabledOrStop()), (f = this.exceptionObserver) == null || f.startIfEnabledOrStop(), (p = this.deadClicksAutocapture) == null || p.startIfEnabledOrStop(), (m = this.surveys) == null || m.loadIfEnabled(), this.Wh(), (h = this.externalIntegrations) == null || h.startIfEnabledOrStop(), !t.segment && this.config.segment && this.persistence && Ns(this, Ru, !1);
		}
	}
	_overrideSDKInfo(e, t) {
		mi.LIB_NAME = e, mi.LIB_VERSION = t;
	}
	startSessionRecording(e) {
		let t = !0 === e, n = {
			sampling: t || !!(e != null && e.sampling),
			linked_flag: t || !!(e != null && e.linked_flag),
			url_trigger: t || !!(e != null && e.url_trigger),
			event_trigger: t || !!(e != null && e.event_trigger)
		};
		var r, i, a, o, s;
		Object.values(n).some(Boolean) && ((r = this.sessionManager) == null || r.checkAndGetSessionAndWindowId(), n.sampling && ((i = this.sessionRecording) == null || i.overrideSampling()), n.linked_flag && ((a = this.sessionRecording) == null || a.overrideLinkedFlag()), n.url_trigger && ((o = this.sessionRecording) == null || o.overrideTrigger("url")), n.event_trigger && ((s = this.sessionRecording) == null || s.overrideTrigger("event"))), this.set_config({ disable_session_recording: !1 });
	}
	stopSessionRecording() {
		this.set_config({ disable_session_recording: !0 });
	}
	sessionRecordingStarted() {
		var e;
		return !!((e = this.sessionRecording) != null && e.started);
	}
	captureException(e, t) {
		try {
			if (!this.exceptions) return;
			let n = this.exceptions.buildProperties(e, {
				handled: !0,
				syntheticException: /* @__PURE__ */ Error("PostHog syntheticException")
			});
			return this.exceptions.sendExceptionEvent(V(V({}, n), t));
		} catch (e) {
			return;
		}
	}
	addExceptionStep(e, t) {
		var n;
		(n = this.exceptions) == null || n.addExceptionStep(e, t);
	}
	captureLog(e) {
		var t;
		(t = this.logs) == null || t.captureLog(e);
	}
	get logger() {
		var e, n;
		return (e = (n = this.logs) == null ? void 0 : n.logger) == null ? t.Zd : e;
	}
	startExceptionAutocapture(e) {
		this.set_config({ capture_exceptions: e == null || e });
	}
	stopExceptionAutocapture() {
		this.set_config({ capture_exceptions: !1 });
	}
	loadToolbar(e) {
		var t, n;
		return (t = (n = this.toolbar) == null ? void 0 : n.loadToolbar(e)) != null && t;
	}
	get_property(e) {
		var t;
		return (t = this.persistence) == null ? void 0 : t.props[e];
	}
	getSessionProperty(e) {
		var t;
		return (t = this.sessionPersistence) == null ? void 0 : t.props[e];
	}
	toString() {
		var e;
		let t = (e = this.config.name) == null ? Xu : e;
		return t !== Xu && (t = "posthog." + t), t;
	}
	_isIdentified() {
		var e, t;
		return ((e = this.persistence) == null ? void 0 : e.get_property("$user_state")) === "identified" || ((t = this.sessionPersistence) == null ? void 0 : t.get_property("$user_state")) === "identified";
	}
	Hd() {
		var e, t;
		return !(this.config.person_profiles === "never" || this.config.person_profiles === "identified_only" && !this._isIdentified() && O(this.getGroups()) && !(!((e = this.persistence) == null || (e = e.props) == null) && e.__alias) && !(!((t = this.persistence) == null || (t = t.props) == null) && t.$epp));
	}
	Ed() {
		return !0 === this.config.capture_pageleave || this.config.capture_pageleave === "if_capture_pageview" && !!this.config.capture_pageview;
	}
	createPersonProfile() {
		this.Hd() || this.Ud("posthog.createPersonProfile") && this.setPersonProperties({}, {});
	}
	setInternalOrTestUser() {
		this.Ud("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: !0 });
	}
	Ud(e) {
		return this.config.person_profiles === "never" ? (H.error(e + " was called, but process_person is set to \"never\". This call will be ignored."), !1) : (this.qh(), this.Wd(Ma, !0), !0);
	}
	Vh() {
		if (this.config.cookieless_mode === "always") return !0;
		let e = this.consent.isOptedOut();
		return this.config.disable_persistence || e && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== "on_reject");
	}
	Wh() {
		var e, t;
		let n = this.Vh();
		var r, i, a, o;
		return this.is_capturing() || ((r = this.logs) == null || r.Kd(), (i = this.heatmaps) == null || i.discardPending()), ((e = this.persistence) == null ? void 0 : e.gi) !== n && ((a = this.persistence) == null || a.set_disabled(n)), ((t = this.sessionPersistence) == null ? void 0 : t.gi) !== n && ((o = this.sessionPersistence) == null || o.set_disabled(n)), this.zd(), n;
	}
	opt_in_capturing(e) {
		var n, r, i;
		if (this.config.cookieless_mode === "always") return void H.warn(zu);
		if (this.Lh()) {
			var a, o, s, c, l, u;
			(a = this.sessionRecording) == null || a.dispose({ discardBufferedEvents: !0 }), this.Vd(!0, !0), (o = this.sessionManager) == null || o.destroy(), (s = this.pageViewManager) == null || s.destroy(), this.sessionManager = new Yl(this), this.pageViewManager = new Ls(this), this.persistence && (this.sessionPropsManager = new Gl(this, this.sessionManager, this.persistence));
			let e = (c = (l = this.config.__extensionClasses) == null ? void 0 : l.sessionRecording) == null ? (u = t.__defaultExtensionClasses) == null ? void 0 : u.sessionRecording : c;
			var d, f;
			e && (this.sessionRecording = this.Fh(this.sessionRecording, new e(this)), this.gr && ((d = this.sessionRecording) == null || (f = d.onRemoteConfig) == null || f.call(d, this.gr)));
		}
		let p = this.consent.consent === 1;
		var m, h, g, _;
		p ? this.Hh() : (m = this.heatmaps) == null || m.discardPending(), this.consent.optInOut(!0), this.Wh(), this.Td(), (n = this.sessionRecording) == null || n.startIfEnabledOrStop(), this.config.cookieless_mode == "on_reject" && ((h = this.surveys) == null || h.loadIfEnabled(), (g = this.conversations) == null || g.loadIfEnabled()), p || !k(e == null ? void 0 : e.captureEventName) && !(e != null && e.captureEventName) || this.capture((_ = e == null ? void 0 : e.captureEventName) == null ? "$opt_in" : _, e == null ? void 0 : e.captureProperties, { send_instantly: !0 }), (r = this.persistence) == null || r.syncCookieProperties(), this.yd(), (i = this.featureFlags) == null || i.sendFlagCallsPendingCapture(), this.config.capture_pageview && this.Md();
	}
	opt_out_capturing() {
		this.config.cookieless_mode === "always" ? H.warn(zu) : (this.consent.optInOut(!1), this.Wh(), this.config.cookieless_mode === "on_reject" && this.Gh());
	}
	Gh() {
		var e, t, n;
		let r = this.sessionRecording;
		r == null || r.dispose({ discardBufferedEvents: !0 }), (e = this.heatmaps) == null || e.discardPending(), this.get_distinct_id() !== "$posthog_cookieless" && this.Vd(!0, !0), this.register({
			distinct_id: Na,
			$device_id: null
		}), this.Ph(r), this.sessionRecording = void 0, (t = this.sessionManager) == null || t.destroy(), (n = this.pageViewManager) == null || n.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this.Md(), this.Td();
	}
	has_opted_in_capturing() {
		return this.consent.isOptedIn();
	}
	has_opted_out_capturing() {
		return this.consent.isOptedOut();
	}
	get_explicit_consent_status() {
		let e = this.consent.consent;
		return e === 1 ? "granted" : e === 0 ? "denied" : "pending";
	}
	is_capturing() {
		return !this.Uh && (this.config.cookieless_mode === "always" || (this.config.cookieless_mode === "on_reject" ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()));
	}
	clear_opt_in_out_capturing() {
		this.consent.reset(), this.Wh();
	}
	_is_bot() {
		return n ? Zl(n, this.config.custom_blocked_useragents) : void 0;
	}
	Md() {
		r && (r.visibilityState === "visible" ? this.sd || (this.sd = !0, this.capture(Za, { title: r.title }, { send_instantly: !0 }), this.rd && (r.removeEventListener(Ai, this.rd), this.rd = null)) : this.rd || (this.rd = this.Md.bind(this), K(r, Ai, this.rd)));
	}
	debug(t) {
		!1 === t ? (e == null || e.console.log("You've disabled debug mode."), this.set_config({ debug: !1 })) : (e == null || e.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: !0 }));
	}
	$c() {
		let e = this.jh || {};
		return "advanced_disable_flags" in e ? !!e.advanced_disable_flags : !1 === this.config.advanced_disable_flags ? !0 === this.config.advanced_disable_decide ? (H.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(e, t, n, r, i) {
			let a = t in e && !N(e[t]), o = n in e && !N(e[n]);
			return a ? e[t] : !!o && (i && i.warn(`Config field '${n}' is deprecated. Please use '${t}' instead. The old field will be removed in a future major version.`), e[n]);
		}(e, "advanced_disable_flags", "advanced_disable_decide", 0, H) : !!this.config.advanced_disable_flags;
	}
	Ds(e) {
		var t;
		if (N(this.config.before_send)) return e;
		let n = Object.keys((t = e.properties) == null ? {} : t).filter(ne), r = T(this.config.before_send) ? this.config.before_send : [this.config.before_send], i = e;
		for (let t of r) try {
			if (i = t(i), N(i)) {
				let t = `Event '${e.event}' was rejected in beforeSend function`;
				return te(e.event) ? H.warn(`${t}. This can cause unexpected behavior.`) : H.info(t), null;
			}
			i.properties && !O(i.properties) || H.warn(`Event '${e.event}' has no properties after beforeSend function, this is likely an error.`);
		} catch (t) {
			return H.error(`Error in beforeSend function for event '${e.event}':`, t), null;
		}
		for (let t of n) if (i.properties && N(i.properties[t])) return H.warn(`Event '${e.event}' had its '${t}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
		return i;
	}
	getPageViewId() {
		var e;
		return (e = this.pageViewManager.tu) == null ? void 0 : e.pageViewId;
	}
	captureTraceFeedback(e, t) {
		this.capture("$ai_feedback", {
			$ai_trace_id: String(e),
			$ai_feedback_text: t
		});
	}
	captureTraceMetric(e, t, n) {
		this.capture("$ai_metric", {
			$ai_trace_id: String(e),
			$ai_metric_name: t,
			$ai_metric_value: String(n)
		});
	}
	ad(e) {
		let t = ee(e) && !e, n = J.Ot() && J.Lt("ph_debug") === "true";
		return !t && (!!n || e);
	}
};
rd.__defaultExtensionClasses = {}, rd.Zd = (() => {
	let e = () => {};
	return {
		trace: e,
		debug: e,
		info: e,
		warn: e,
		error: e,
		fatal: e
	};
})(), function(e, t) {
	for (let n = 0; t.length > n; n++) e.prototype[t[n]] = ro(e.prototype[t[n]]);
}(rd, ["identify"]);
var id = ["[data-ph-capture-value]"], ad = class {
	constructor(e) {
		this._instance = e;
	}
	refresh(e) {
		var t;
		let n = this._instance.config, r = D(n.autocapture) ? n.autocapture : void 0;
		e.enabled = !!n.autocapture, e.rageclick = n.rageclick, e.maskAllElementAttributes = n.mask_all_element_attributes, e.maskAllText = n.mask_all_text, e.disableCaptureUrlHashes = n.disable_capture_url_hashes, e.getCurrentUrl = n.get_current_url, e.remoteRequestsDisabled = this._instance.$c(), e.url_allowlist = r == null ? void 0 : r.url_allowlist, e.url_ignorelist = r == null ? void 0 : r.url_ignorelist, e.dom_event_allowlist = r == null ? void 0 : r.dom_event_allowlist, e.element_allowlist = r == null ? void 0 : r.element_allowlist, e.css_selector_allowlist = r == null ? void 0 : r.css_selector_allowlist, e.css_selector_ignorelist = r == null ? void 0 : r.css_selector_ignorelist, e.element_attribute_ignorelist = r == null ? void 0 : r.element_attribute_ignorelist, e.capture_copied_text = r == null ? void 0 : r.capture_copied_text, e.capture_value_css_selector_allowlist = (t = r == null ? void 0 : r.capture_value_css_selector_allowlist) == null ? id : t;
	}
}, od = U("[ExceptionAutocapture]"), sd = () => {}, cd = (e) => {
	var t;
	if (E(e)) return (t = e.__posthog_layer__) == null ? e.__rrweb_layer__ : t;
};
function ld(e, t, n) {
	try {
		if (!(t in e)) return sd;
		let r = { next: e[t] }, i = n(function(...e) {
			return r.next.apply(this, e);
		});
		return E(i) && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
			__posthog_wrapped__: {
				enumerable: !1,
				value: !0
			},
			__posthog_layer__: {
				enumerable: !1,
				value: r
			}
		})), e[t] = i, () => {
			if (e[t] === i) return void (e[t] = r.next);
			let n = e[t], a = cd(n);
			for (; a;) {
				if (a.next === i) return void (a.next = r.next);
				n = a.next, a = cd(n);
			}
		};
	} catch (e) {
		return sd;
	}
}
var ud = U("[TracingHeaders]"), dd = U("[Web Vitals]"), fd = 9e5, pd = [
	"CLS",
	"FCP",
	"INP",
	"LCP"
], md = ["INP", "LCP"], hd = [
	"interactionTarget",
	"interactionType",
	"inputDelay",
	"processingDuration",
	"presentationDelay",
	"loadState",
	"target",
	"url",
	"timeToFirstByte",
	"resourceLoadDelay",
	"resourceLoadDuration",
	"elementRenderDelay",
	"largestShiftTarget",
	"largestShiftTime",
	"largestShiftValue",
	"firstByteToFCP"
], gd = "disabled", _d = "lazy_loading";
function vd(e) {
	return "ph_replay_pending_buffer_" + JSON.stringify([e.persistence_name || e.token, e.token]);
}
var yd = U("[SessionRecording]"), bd = [
	La,
	Ra,
	za,
	Ba,
	Va,
	Ha,
	Ua,
	Wa,
	Ga
], xd = U("[Heatmaps]");
function Sd(e) {
	return D(e) && "clientX" in e && "clientY" in e && P(e.clientX) && P(e.clientY);
}
var Cd = U("[Product Tours]"), wd = (e) => {
	var t;
	return !e.config.disable_product_tours && !!((t = e.persistence) != null && t.get_property(ta));
}, Td = ["$set_once", "$set"], Ed = U("[SiteApps]"), Dd = "Error while initializing PostHog app with config id ";
function Od(e, t, n) {
	if (N(e)) return !1;
	switch (n) {
		case "exact": return e === t;
		case "contains": {
			let n = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
			return new RegExp(n, "i").test(e);
		}
		case "regex": try {
			return new RegExp(t).test(e);
		} catch (e) {
			return !1;
		}
		default: return !1;
	}
}
var kd = class {
	constructor(e) {
		this.Fi = e, this.Bo = /* @__PURE__ */ new Set(), this.zo = /* @__PURE__ */ new Set(), this.Ho = new Kl(), this.Uo = (e, t) => this.Wo(e, t) && this.Go(e, t) && this.Vo(e, t) && this.Qo(e, t), this.Wo = (e, t) => !(t != null && t.event) || (e == null ? void 0 : e.event) === (t == null ? void 0 : t.event);
	}
	init() {
		var e, t;
		k((e = this.Fi) == null ? void 0 : e.subscribeCapture) || (this.Jo = (t = this.Fi) == null ? void 0 : t.subscribeCapture((e, t) => {
			this.on(e, t);
		}));
	}
	dispose() {
		var e, t, n;
		(e = this.Jo) == null || e.call(this), this.Jo = void 0, (t = this.Fi) == null || (n = t.setElementSelectors) == null || n.call(t, /* @__PURE__ */ new Set(), this), this.Ho = new Kl();
	}
	register(e) {
		var t, n;
		if (!k((t = this.Fi) == null ? void 0 : t.subscribeCapture) && (e.forEach((e) => {
			var t;
			this.Bo.add(e), (t = e.steps) == null || t.forEach((e) => {
				this.zo.add((e == null ? void 0 : e.event) || "");
			});
		}), (n = this.Fi) != null && n.setElementSelectors)) {
			let e = /* @__PURE__ */ new Set();
			this.Bo.forEach((t) => {
				var n;
				(n = t.steps) == null || n.forEach((t) => {
					t != null && t.selector && e.add(t.selector);
				});
			}), this.Fi.setElementSelectors(e, this);
		}
	}
	replace(e) {
		this.Bo.clear(), this.zo.clear(), this.register(e);
	}
	on(e, t) {
		t != null && e.length != 0 && (this.zo.has(e) || this.zo.has(t.event)) && this.Bo.forEach((e) => {
			this.Zo(t, e) && this.Ho.emit("actionCaptured", e.name);
		});
	}
	Ko(e) {
		this.onAction("actionCaptured", (t) => e(t));
	}
	Zo(e, t) {
		if ((t == null ? void 0 : t.steps) == null) return !1;
		for (let n of t.steps) if (this.Uo(e, n)) return !0;
		return !1;
	}
	onAction(e, t) {
		return this.Ho.on(e, t);
	}
	Go(e, t) {
		if (t != null && t.url) {
			var n;
			let a = e == null || (n = e.properties) == null ? void 0 : n.$current_url;
			if (!(e != null && e.properties) || !("$current_url" in e.properties)) try {
				var r, i;
				a = (r = this.Fi) == null || (i = r.getActionUrl) == null ? void 0 : i.call(r);
			} catch (e) {
				return !1;
			}
			if (!a || typeof a != "string" || !Od(a, t.url, t.url_matching || "contains")) return !1;
		}
		return !0;
	}
	Vo(e, t) {
		return !!this.Yo(e, t) && !!this.Xo(e, t) && !!this.tl(e, t);
	}
	Yo(e, t) {
		var n;
		if (!(t != null && t.href)) return !0;
		let r = this.el(e);
		if (r.length > 0) return r.some((e) => Od(e.href, t.href, t.href_matching || "exact"));
		let i = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!i && Od(function(e) {
			let t = e.match(/(?::|")href="(.*?)"/);
			return t ? t[1] : "";
		}(i), t.href, t.href_matching || "exact");
	}
	Xo(e, t) {
		var n;
		if (!(t != null && t.text)) return !0;
		let r = this.el(e);
		if (r.length > 0) return r.some((e) => Od(e.text, t.text, t.text_matching || "exact") || Od(e.$el_text, t.text, t.text_matching || "exact"));
		let i = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!i && (a = function(e) {
			let t = [], n = /(?::|")text="(.*?)"/g, r;
			for (; !N(r = n.exec(e));) t.includes(r[1]) || t.push(r[1]);
			return t;
		}(i), o = t.text, s = t.text_matching || "exact", a.some((e) => Od(e, o, s)));
		var a, o, s;
	}
	tl(e, t) {
		var n, r;
		if (!(t != null && t.selector)) return !0;
		let i = e == null || (n = e.properties) == null ? void 0 : n.$element_selectors;
		if (i != null && i.includes(t.selector)) return !0;
		let a = (e == null || (r = e.properties) == null ? void 0 : r.$elements_chain) || "";
		if (t.selector_regex && a) try {
			return new RegExp(t.selector_regex).test(a);
		} catch (e) {}
		return !1;
	}
	el(e) {
		var t;
		return (e == null || (t = e.properties) == null ? void 0 : t.$elements) == null ? [] : e == null ? void 0 : e.properties.$elements;
	}
	Qo(e, t) {
		return !(t != null && t.properties) || t.properties.length === 0 || iu(t.properties.reduce((e, t) => {
			let n = T(t.value) ? t.value.map(String) : t.value == null ? [] : [String(t.value)];
			return e[t.key] = {
				values: n,
				operator: t.operator || "exact"
			}, e;
		}, {}), e == null ? void 0 : e.properties);
	}
}, Ad = class {
	constructor(e, t) {
		this.il = t, this.nl = [], this.Fi = e, this.sl = /* @__PURE__ */ new Map(), this.rl = /* @__PURE__ */ new Map(), this.ll = /* @__PURE__ */ new Map();
	}
	al() {
		var e, t;
		this.ul = (e = (t = this.Fi).subscribeSession) == null ? void 0 : e.call(t, (e) => this.cl(e));
	}
	hl(e) {
		return !1;
	}
	dl() {
		return null;
	}
	vl(e) {}
	fl() {}
	pl(e, t) {
		return !!e && iu(e.propertyFilters, t == null ? void 0 : t.properties);
	}
	gl(e, t) {
		let n = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			var r;
			(r = e.conditions) == null || (r = r[t]) == null || (r = r.values) == null || r.forEach((t) => {
				if (t != null && t.name) {
					let r = n.get(t.name) || [];
					r.push(e.id), n.set(t.name, r);
				}
			});
		}), n;
	}
	ml(e, t, n) {
		let r = (n === Oc.Activation ? this.sl : this.rl).get(e), i = [];
		return this.yl((e) => {
			i = e.filter((e) => r == null ? void 0 : r.includes(e.id));
		}), i.filter((r) => {
			var i;
			let a = (i = r.conditions) == null || (i = i[n]) == null || (i = i.values) == null ? void 0 : i.find((t) => t.name === e);
			return this.pl(a, t);
		});
	}
	register(e) {
		this.bl(e, !1);
	}
	replace(e) {
		this.bl(e, !0);
	}
	bl(e, t) {
		k(this.Fi.subscribeCapture) || (this._l(e, t), this.wl(e, t));
	}
	wl(e, t) {
		let n = e.filter((e) => {
			var t;
			return (t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length;
		});
		var r;
		if (t && this.ll.clear(), n.length === 0) return void (t && ((r = this.kl) == null || r.replace([])));
		this.kl || (this.kl = new kd(this.Fi), this.kl.init(), this.kl.Ko((e) => this.onAction(e)));
		let i = [];
		n.forEach((e) => {
			var t;
			(t = e.conditions) == null || (t = t.actions) == null || t.values.forEach((t) => {
				if (i.push(t), t.name) {
					var n;
					let r = (n = this.ll.get(t.name)) == null ? [] : n;
					r.includes(e.id) || r.push(e.id), this.ll.set(t.name, r);
				}
			});
		}), t ? this.kl.replace(i) : this.kl.register(i);
	}
	Sl(e, t) {
		t.forEach((t, n) => {
			var r;
			let i = (r = e.get(n)) == null ? [] : r;
			t.forEach((e) => {
				i.includes(e) || i.push(e);
			}), e.set(n, i);
		});
	}
	_l(e, t) {
		var n, r;
		let i = e.filter((e) => {
			var t, n;
			return ((t = e.conditions) == null ? void 0 : t.events) && ((n = e.conditions) == null || (n = n.events) == null || (n = n.values) == null ? void 0 : n.length) > 0;
		}), a = e.filter((e) => {
			var t, n;
			return ((t = e.conditions) == null ? void 0 : t.cancelEvents) && ((n = e.conditions) == null || (n = n.cancelEvents) == null || (n = n.values) == null ? void 0 : n.length) > 0;
		}), o = this.gl(e, Oc.Activation), s = this.gl(e, Oc.Cancellation);
		t ? (this.sl = o, this.rl = s) : (this.Sl(this.sl, o), this.Sl(this.rl, s)), (i.length !== 0 || a.length !== 0 || e.some((e) => {
			var t;
			return (t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length;
		})) && (this.Jo != null || (this.Jo = (n = (r = this.Fi).subscribeCapture) == null ? void 0 : n.call(r, (e, t) => {
			this.onEvent(e, t);
		})));
	}
	onEvent(e, t) {
		var n, r;
		let i = this.xl(), a = (t == null || (n = t.properties) == null ? void 0 : n.$survey_id) || (t == null || (r = t.properties) == null ? void 0 : r.$product_tour_id);
		if (a && this.getActivatedIds().includes(a)) {
			let n = this.$l(e, a, t);
			if (n === "consume") return i.info("event consumed activated item, removing it", {
				event: e,
				itemId: a
			}), void this.Cl([a]);
			if (n === "persist") return i.info("shown item promoted to persisted activation", {
				event: e,
				itemId: a
			}), this.Tl(a), void this.Ml([a]);
		}
		if (this.rl.has(e)) {
			let n = this.ml(e, t, Oc.Cancellation);
			n.length > 0 && (i.info("cancel event matched, cancelling items", {
				event: e,
				itemsToCancel: n.map((e) => e.id)
			}), this.Cl(n.map((e) => e.id)), n.forEach((e) => this.Il(e.id)));
		}
		if (!this.sl.has(e)) return;
		i.info("event name matched", {
			event: e,
			eventPayload: t,
			items: this.sl.get(e)
		});
		let o = this.ml(e, t, Oc.Activation);
		this.El(o.map((e) => e.id));
	}
	onAction(e) {
		this.ll.has(e) && this.El(this.ll.get(e) || []);
	}
	El(e) {
		if (e.length === 0) return;
		let t = !!this.Fi.getSessionId(), n = [];
		for (let r of e) t && this.hl(r) ? this.Tl(r) && this.Al(r) : n.push(r);
		n.length > 0 && (this.nl = [.../* @__PURE__ */ new Set([...this.nl, ...n])]), this.xl().info("updating activated items", { activatedItems: this.getActivatedIds() }), this.Rl();
	}
	Tl(e) {
		this.nl = this.nl.filter((t) => t !== e);
		let t = this.Pl();
		return !t.includes(e) && (this.Ol([...t, e]), this.Fl(), !0);
	}
	Cl(e) {
		let t = new Set(e);
		this.nl = this.nl.filter((e) => !t.has(e));
		let n = this.Ll(), r = n.filter((e) => !t.has(e));
		r.length !== n.length && (this.Ol(r), r.length === 0 && this.Dl()), this.Ml(e), this.Rl();
	}
	Rl() {
		try {
			var e;
			(e = this.il) == null || e.call(this);
		} catch (e) {
			this.xl().error("Error while handling activated items change", e);
		}
	}
	Nl() {
		let e = this.dl();
		if (!e) return {};
		let t = this.Fi.getProperty(e);
		return t && typeof t == "object" ? t : {};
	}
	Al(e) {
		if (!this.dl()) return;
		let t = this.Nl();
		this.vl(V(V({}, t), {}, { [e]: Date.now() }));
	}
	Ml(e) {
		if (!this.dl()) return;
		let t = this.Nl(), n = {}, r = !1;
		for (let [i, a] of Object.entries(t)) e.includes(i) ? r = !0 : n[i] = a;
		r && (O(n) ? this.fl() : this.vl(n));
	}
	jl() {
		this.dl() && this.fl();
	}
	getActivationTimestamp(e) {
		if (!this.Pl().includes(e)) return;
		let t = this.Nl()[e];
		return P(t) ? t : void 0;
	}
	Ll() {
		let e = this.ql();
		return this.Fi.getProperty(e) || [];
	}
	Pl() {
		let e = this.Ll();
		if (e.length === 0) return [];
		let t = this.Fi.getProperty(this.Bl()), n = this.Fi.getSessionId();
		return n && t === n ? e : [];
	}
	Fl() {
		let e = this.Fi.getSessionId();
		e && this.zl(e);
	}
	Dl() {
		this.Hl();
	}
	cl(e) {
		let t = this.Fi.getProperty(this.Bl());
		if (t && t !== e) {
			let e = this.Ll(), t = this.Nl();
			e.length > 0 && (this.Ol([]), e.filter((e) => P(t[e])).forEach((e) => this.Il(e))), this.Dl(), this.jl(), e.length > 0 && this.Rl();
		}
	}
	getActivatedIds() {
		return [.../* @__PURE__ */ new Set([...this.Pl(), ...this.nl])].filter((e) => !this.Ul(e));
	}
	dispose() {
		var e, t, n;
		(e = this.ul) == null || e.call(this), this.ul = void 0, (t = this.Jo) == null || t.call(this), this.Jo = void 0, (n = this.kl) == null || n.dispose(), this.kl = void 0;
	}
	reset() {
		this.nl = [], this.Ll().length > 0 && this.Ol([]), this.Dl(), this.jl(), this.Rl();
	}
	getEventToItemsMap() {
		return this.sl;
	}
	Wl() {
		return this.kl;
	}
}, jd = class extends Ad {
	constructor(e, t, n, r) {
		var i;
		super({
			subscribeCapture(t) {
				let n = e.onEvent((e) => t(e.event, e));
				return () => n.dispose();
			},
			subscribeSession(t) {
				let n = e.onSession(t);
				return () => n.dispose();
			},
			getSessionId() {
				var t;
				return (t = e.session) == null ? void 0 : t.sessionId;
			},
			getProperty: (t) => e.kv.get(t),
			getActionUrl: n == null ? void 0 : n.getActionUrl,
			setElementSelectors: (i = n == null ? void 0 : n.setElementSelectors) == null ? (t, n) => {
				var r;
				return (r = e.getExtension("autocapture")) == null ? void 0 : r.setElementSelectors(t, n);
			} : i
		}, r), this.Gl = e, this.Vl = t, this.al();
	}
	ql() {
		return Fi;
	}
	Bl() {
		return Ii;
	}
	dl() {
		return Li;
	}
	vl(e) {
		this.Gl.kv.set({ [Li]: e });
	}
	fl() {
		this.Gl.kv.remove(Li);
	}
	hl(e) {
		var t;
		let n;
		this.yl((t) => {
			n = t.find((t) => t.id === e);
		});
		let r = n == null || (t = n.appearance) == null ? void 0 : t.surveyPopupDelaySeconds;
		return P(r) && r > 0;
	}
	Ql() {
		return Ac.SHOWN;
	}
	yl(e) {
		this.Vl.getSurveys(e);
	}
	Il(e) {
		this.Vl.cancelPendingSurvey(e);
	}
	xl() {
		return Z;
	}
	Ol(e) {
		this.Gl.kv.set({ [Fi]: e });
	}
	zl(e) {
		this.Gl.kv.set({ [Ii]: e });
	}
	Hl() {
		this.Gl.kv.remove(Ii);
	}
	Ul() {
		return !1;
	}
	$l(e, t, n) {
		var r;
		if (e === Ac.SENT && !1 === (n == null || (r = n.properties) == null ? void 0 : r.$survey_completed)) return "ignore";
		let i;
		return this.yl((e) => {
			i = e.find((e) => e.id === t);
		}), !i || function(e) {
			var t;
			return eu(e) && !!(!((t = e.conditions) == null || (t = t.events) == null) && t.repeatedActivation) || e.schedule === "always";
		}(i) ? e === Ac.SHOWN ? "consume" : "ignore" : e === Ac.SHOWN ? "persist" : e === Ac.DISMISSED || e === Ac.SENT ? "consume" : "ignore";
	}
	getSurveys() {
		return this.getActivatedIds();
	}
	getEventToSurveys() {
		return this.getEventToItemsMap();
	}
}, Md = (e, t) => e != null && e.then ? e.then(t) : t(e), Nd = "SDK is not enabled or survey functionality is not yet loaded", Pd = "Disabled. Not loading surveys.", Fd = class {
	constructor(e) {
		this.Jl = e, this.name = "surveys", this._surveyEventReceiver = null, this._surveyManager = null, this.Zl = !1, this.Kl = !1, this.Yl = [], this.Xl = [], this.ta = null, this.ea = null, this.Ai = !1, this.ia = /* @__PURE__ */ new Set(), this.onRemoteConfig = (e) => {
			if (this.Ai || this.Br.disableSurveys) return;
			if (!e.ok) return this.Kl = !0, this.na({
				isLoaded: !1,
				error: "Remote config unavailable. Not loading surveys."
			}), Z.warn("Remote config unavailable. Not loading surveys.");
			let t = e.config.surveys;
			if (N(t)) return Z.warn("Flags not loaded yet. Not loading surveys.");
			this.sa = ee(t) ? t : t.length > 0, Z.info(`flags response received, isSurveysEnabled: ${this.sa}`), this.loadIfEnabled();
		}, this.na = (e) => {
			this.Xl.slice().forEach((t) => this.ra(t, e));
		};
	}
	setup(e) {
		if (!this.Ai) return this.oa = e, Md(e.kv.initialize(), () => {
			if (this.oa !== e || this.Ai) return;
			this.oa = void 0, this.Gl = e;
			let t = e.onRemoteConfig(this.onRemoteConfig);
			this.Ai ? t.dispose() : (this.la = t, this.loadIfEnabled());
		});
	}
	dispose() {
		var e, t, n, r, i;
		this.Ai || (this.Ai = !0, this.oa = void 0, this.Gl = void 0, (e = this.la) == null || e.dispose(), this.la = void 0, (t = this._surveyEventReceiver) == null || t.dispose(), this._surveyEventReceiver = null, (n = this._surveyManager) == null || (r = n.dispose) == null || r.call(n), this._surveyManager = null, this.Yl = [], this.Xl.forEach((e) => {
			e.active = !1;
		}), this.Xl = [], (i = this.aa) == null || i.call(this), this.aa = void 0, this.ta = null, this.ia.forEach((e) => clearTimeout(e)), this.ia.clear());
	}
	get Br() {
		return this.Jl.get();
	}
	getRenderContext() {
		if (!this.Gl) return;
		let e = this;
		return {
			client: this.Gl,
			get config() {
				return e.Br;
			},
			surveys: e
		};
	}
	initialize() {
		this.loadIfEnabled();
	}
	reset() {
		var e, t;
		(e = this._surveyManager) == null || (t = e.clearInMemoryInProgressSurveyState) == null || t.call(e);
		try {
			var n;
			(n = this._surveyEventReceiver) == null || n.reset(), localStorage.removeItem("lastSeenSurveyDate");
			let e = [];
			for (let t = 0; t < localStorage.length; t++) {
				let n = localStorage.key(t);
				(n != null && n.startsWith("seenSurvey_") || n != null && n.startsWith("inProgressSurvey_")) && e.push(n);
			}
			e.forEach((e) => localStorage.removeItem(e));
		} catch (e) {}
		this.na();
	}
	loadIfEnabled() {
		if (this.Ai || !this.Gl) return;
		let e = this.Br;
		if (this._surveyManager) return;
		if (this.Zl) return void Z.info("Already initializing surveys, skipping...");
		if (e.disableSurveys) return void Z.info(Pd);
		if (e.cookielessMode && this.Gl.isOptedOut) return void Z.info("Not loading surveys in cookieless mode without consent.");
		let t = this.Jl.getExtensions();
		if (!t) return void this.ua("PostHog Extensions not found.");
		if (k(this.sa) && !e.advancedEnableSurveys) return;
		let n = this.sa || e.advancedEnableSurveys;
		this.Zl = !0, this.Kl = !1;
		try {
			let e = t.generateSurveys;
			if (e) return this.ca(e, n), void (this.Zl = !1);
			let r = t.loadExternalDependency;
			if (!r) return this.ua(Pi), void (this.Zl = !1);
			r((e) => {
				try {
					if (this.Ai) return;
					let t = this.Jl.getExtensions();
					e || !(t != null && t.generateSurveys) ? this.ua("Could not load surveys script", e) : this.ca(t.generateSurveys, n);
				} finally {
					this.Zl = !1;
				}
			});
		} catch (e) {
			throw this.Zl = !1, this.ua("Error initializing surveys", e), e;
		}
	}
	ca(e, t) {
		var n;
		if (this.Ai) return;
		this._surveyManager = e(t), this._surveyEventReceiver = this.ha(this.Gl, this.na);
		let r = (n = this.Gl) == null ? void 0 : n.kv.get(Mi);
		r && this.da(r), Z.info("Surveys loaded successfully"), this.va(), this.na(), this.fa({ isLoaded: !0 });
	}
	ha(e, t) {
		return new jd(e, this, void 0, t);
	}
	ua(e, t) {
		this.Kl = !0, Z.error(e, t), this.na({
			isLoaded: !1,
			error: e
		}), this.fa({
			isLoaded: !1,
			error: e
		});
	}
	onSurveysLoaded(e) {
		return this.Yl.push(e), this._surveyManager && this.fa({ isLoaded: !0 }), () => {
			this.Yl = this.Yl.filter((t) => t !== e);
		};
	}
	getSurveys(e, t = !1) {
		if (this.Ai) return;
		let n = this.Gl;
		if (!n) return e([], {
			isLoaded: !1,
			error: Nd
		});
		if (this.Br.disableSurveys) return Z.info(Pd), e([]);
		let r = n.kv.get(Mi);
		if (r && !t) return e(r, { isLoaded: !0 }), void (this.pa() && this.getSurveys(() => {}, !0));
		if (this.ta) return void this.ta.then(({ surveys: t, context: n }) => {
			this.Ai || e(t, n);
		}).catch((e) => Z.error("Error in survey callback", e));
		let i = n.sendRequest("/api/surveys/", {
			method: "GET",
			query: { token: n.projectToken },
			sentAt: "query",
			timeoutMs: this.Br.requestTimeoutMs
		}).then((e) => {
			try {
				return this.ga(n, e);
			} catch (e) {
				return Z.error("Error processing surveys response", e), this.ga(n, {
					statusCode: 0,
					error: e
				});
			}
		}, (e) => this.ga(n, {
			statusCode: 0,
			error: e
		}));
		this.ta = i;
		let a = () => {
			this.ta === i && (this.ta = null);
		};
		i.then((t) => {
			a(), this.Ai || (this.na(t.context), e(t.surveys, t.context));
		}, a).catch((e) => Z.error("Error in survey callback", e));
	}
	ga(e, t) {
		if (this.Ai) return {
			surveys: [],
			context: {
				isLoaded: !1,
				error: Nd
			}
		};
		let n = t.statusCode;
		if (n !== 200 || !t.json) {
			let e = `Surveys API could not be loaded, status: ${n}`;
			return n === 0 ? t.error || Z.warn(e) : Z.error(e), this.ea = Date.now(), {
				surveys: [],
				context: {
					isLoaded: !1,
					error: e
				}
			};
		}
		this.ea = null;
		let r = t.json.surveys || [];
		return e.kv.set({
			[Mi]: r,
			[Ni]: Date.now()
		}), this.da(r), {
			surveys: r,
			context: { isLoaded: !0 }
		};
	}
	da(e) {
		let t = e.filter((e) => function(e) {
			return !(!e.start_date || e.end_date);
		}(e) && (eu(e) || function(e) {
			var t;
			return !!(!((t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null) && t.length);
		}(e)));
		this.ma(t);
	}
	ma(e) {
		var t;
		(t = this._surveyEventReceiver) == null || t.replace(e);
	}
	pa() {
		return this.ya() && !this.ta && !this.ba();
	}
	ya() {
		var e;
		let t = (e = this.Gl) == null ? void 0 : e.kv.get(Ni);
		return P(t) && Date.now() - t > 3e5;
	}
	ba() {
		return P(this.ea) && 3e5 > Date.now() - this.ea;
	}
	markSurveyAsSeen(e, t) {
		var n;
		du({
			id: e,
			current_iteration: (n = t == null ? void 0 : t.iteration) == null ? null : n
		});
		try {
			localStorage.setItem("lastSeenSurveyDate", (/* @__PURE__ */ new Date()).toISOString());
		} catch (e) {}
		this.na();
	}
	fa(e) {
		for (let t of this.Yl) {
			if (this.Ai) return;
			try {
				e.isLoaded ? this.getSurveys(t) : t([], e);
			} catch (e) {
				Z.error("Error in survey callback", e);
			}
		}
	}
	getActiveMatchingSurveys(e, t = !1) {
		if (!N(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
		Z.warn("init was not called");
	}
	onActiveMatchingSurveysChanged(e) {
		var t;
		if (this.Ai) return () => {};
		let n = {
			callback: e,
			active: !0,
			revision: 0
		};
		this.Xl.push(n), this.va();
		let r = (t = this.Gl) == null ? void 0 : t.kv.get(Mi);
		return this.Br.disableSurveys || !this._surveyManager && this.Kl && !this.Zl || !r && !N(this.ea) && !this.ta ? this.ra(n, { isLoaded: !1 }) : this._surveyManager && this.ra(n), () => {
			var e;
			n.active = !1, this.Xl = this.Xl.filter((e) => e !== n), this.Xl.length === 0 && ((e = this.aa) == null || e.call(this), this.aa = void 0);
		};
	}
	va() {
		var e, t;
		this._surveyManager && this.Xl.length > 0 && (this.aa != null || (this.aa = (e = (t = this.Jl).onMatchingConditionsChanged) == null ? void 0 : e.call(t, this.na)));
	}
	ra(e, t) {
		if (this.Ai || !e.active) return;
		let n = ++e.revision, r = (r) => {
			if (!this.Ai && e.active && n === e.revision) try {
				let n = t == null ? { isLoaded: !0 } : t, i = JSON.stringify([r, n]);
				if (i === e.lastResult) return;
				e.lastResult = i, e.callback(r, n);
			} catch (e) {
				Z.error("Error in active matching surveys callback", e);
			}
		};
		try {
			t && !t.isLoaded ? r([]) : this.getActiveMatchingSurveys(r);
		} catch (e) {
			Z.error("Error in active matching surveys callback", e);
		}
	}
	_a(e) {
		let t = null;
		return this.getSurveys((n) => {
			var r;
			t = (r = n.find((t) => t.id === e)) == null ? null : r;
		}), t;
	}
	wa(e) {
		if (N(this._surveyManager)) return {
			eligible: !1,
			reason: Nd
		};
		let t = typeof e == "string" ? this._a(e) : e;
		return t ? this._surveyManager.checkSurveyEligibility(t) : {
			eligible: !1,
			reason: "Survey not found"
		};
	}
	ka(e) {
		var t;
		if (!((t = this.Gl) != null && t.canCapture)) return {
			eligible: !1,
			reason: "PostHog is not capturing, so a survey response cannot be recorded"
		};
		if (N(this._surveyManager)) return {
			eligible: !1,
			reason: Nd
		};
		let n = typeof e == "string" ? this._a(e) : e;
		return n ? this._surveyManager.checkSurveyRenderability(n) : {
			eligible: !1,
			reason: "Survey not found"
		};
	}
	canRenderSurvey(e) {
		if (N(this._surveyManager)) return Z.warn("init was not called"), {
			visible: !1,
			disabledReason: Nd
		};
		let t = this.ka(e);
		return {
			visible: t.eligible,
			disabledReason: t.reason
		};
	}
	canRenderSurveyAsync(e, t) {
		return N(this._surveyManager) ? (Z.warn("init was not called"), Promise.resolve({
			visible: !1,
			disabledReason: Nd
		})) : new Promise((n) => {
			this.getSurveys((t) => {
				var r;
				let i = (r = t.find((t) => t.id === e)) == null ? null : r;
				if (i) {
					let e = this.ka(i);
					n({
						visible: e.eligible,
						disabledReason: e.reason
					});
				} else n({
					visible: !1,
					disabledReason: "Survey not found"
				});
			}, t);
		});
	}
	renderSurvey(e, t, n) {
		var r, i, a;
		if (!((r = this.Gl) != null && r.canCapture)) return;
		if (N(this._surveyManager)) return void Z.warn("init was not called");
		let o = typeof e == "string" ? this._a(e) : e;
		if (!(o != null && o.id)) return void Z.warn("Survey not found");
		if (!fu.includes(o.type)) return void Z.warn(`Surveys of type ${o.type} cannot be rendered in the app`);
		let s = (i = typeof document > "u" ? void 0 : document) == null ? void 0 : i.querySelector(t);
		if (s) {
			if ((a = o.appearance) != null && a.surveyPopupDelaySeconds) {
				Z.info(`Rendering survey ${o.id} with delay of ${o.appearance.surveyPopupDelaySeconds} seconds`);
				let e = setTimeout(() => {
					var t, r, i;
					this.ia.delete(e), !this.Ai && (t = this.Gl) != null && t.canCapture && (Z.info(`Rendering survey ${o.id} with delay of ${(r = o.appearance) == null ? void 0 : r.surveyPopupDelaySeconds} seconds`), (i = this._surveyManager) == null || i.renderSurvey(o, s, n), Z.info(`Survey ${o.id} rendered`));
				}, 1e3 * o.appearance.surveyPopupDelaySeconds);
				this.ia.add(e);
				return;
			}
			this._surveyManager.renderSurvey(o, s, n);
		} else Z.warn("Survey element not found");
	}
	displaySurvey(e, t) {
		var n, r;
		if (!((n = this.Gl) != null && n.canCapture)) return;
		if (N(this._surveyManager)) return void Z.warn("init was not called");
		let i = this._a(e);
		if (!i) return void Z.warn("Survey not found");
		let a = i;
		if ((r = i.appearance) != null && r.surveyPopupDelaySeconds && t.ignoreDelay && (a = V(V({}, i), {}, { appearance: V(V({}, i.appearance), {}, { surveyPopupDelaySeconds: 0 }) })), t.displayType !== Mc.Popover && t.initialResponses && Z.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === t.ignoreConditions) {
			let e = this.wa(i);
			if (!e.eligible) return void Z.warn("Survey is not eligible to be displayed: ", e.reason);
		}
		t.displayType === Mc.Inline ? this.renderSurvey(a, t.selector, t.properties) : this._surveyManager.handlePopoverSurvey(a, t);
	}
	cancelPendingSurvey(e) {
		N(this._surveyManager) ? Z.warn("init was not called") : this._surveyManager.cancelSurvey(e);
	}
	handlePageUnload() {
		var e, t;
		(e = this._surveyManager) == null || (t = e.handlePageUnload) == null || t.call(e);
	}
}, Id = class {
	constructor(e) {
		this._instance = e;
	}
	get() {
		var e, t, n, r;
		let i = (e = this._instance) == null ? void 0 : e.config;
		return {
			disableSurveys: !!(i != null && i.disable_surveys),
			cookielessMode: !!(i != null && i.cookieless_mode),
			advancedEnableSurveys: !!(i != null && i.advanced_enable_surveys),
			requestTimeoutMs: (t = i == null ? void 0 : i.surveys_request_timeout_ms) == null ? 1e4 : t,
			prefillFromUrl: !!(!(i == null || (n = i.surveys) == null) && n.prefillFromUrl),
			automaticDisplay: !(i != null && i.disable_surveys_automatic_display),
			featureFlagEvaluation: !(i != null && i.advanced_disable_feature_flags),
			overrideLanguage: i == null ? void 0 : i.override_display_language,
			prepareStylesheet: i == null ? void 0 : i.prepare_external_dependency_stylesheet,
			get_current_url: i == null ? void 0 : i.get_current_url,
			uiHost: (r = this._instance) == null || (r = r.requestRouter) == null ? void 0 : r.endpointFor("ui", "")
		};
	}
	getExtensions() {
		let e = d == null ? void 0 : d.__PosthogExtensions__;
		if (!e || !this._instance) return;
		let t = this._instance, { generateSurveys: n } = e, r = oi(t);
		return {
			generateSurveys: n ? (e) => n(t, e) : void 0,
			loadExternalDependency: r ? (e) => r(t, "surveys", e) : void 0
		};
	}
	onMatchingConditionsChanged(t) {
		var n, r;
		let i = (n = this._instance) == null ? void 0 : n._addCaptureHook((e) => {
			e !== "$pageview" && e !== Ac.SHOWN && e !== Ac.DISMISSED && e !== Ac.SENT || t();
		}), a = () => t();
		K(e, "PHSurveyShown", a);
		let o = !1, s = (r = this._instance) == null ? void 0 : r.onFeatureFlags(() => {
			o && t();
		});
		return o = !0, () => {
			o = !1, i == null || i(), s == null || s(), e == null || e.removeEventListener("PHSurveyShown", a);
		};
	}
}, Ld = e != null && e.location ? Xs(e.location.hash, "__posthog") || Xs(location.hash, "state") : null, Rd = "_postHogToolbarParams", zd = U("[Toolbar]"), Bd = U("[FeatureFlags]"), Vd = U("[FeatureFlags]", { debugEnabled: !0 }), Hd = "\" failed. Feature flags didn't load in time.", Ud = [502, 504], Wd = [
	"click",
	"keydown",
	"wheel",
	"touchstart",
	"pointerdown"
], Gd = "connection_error", Kd = (e, t) => {
	let n = Object.keys(t || {}).filter((e) => {
		var n;
		return t == null || (n = t[e]) == null ? void 0 : n.failed;
	});
	if (!n.length) return e || {};
	let r = V({}, e);
	return n.forEach((e) => delete r[e]), r;
}, qd = (e, t) => {
	let n = V({}, e);
	return t.forEach((e) => {
		var t;
		(t = n[e]) != null && t.failed && delete n[e];
	}), n;
}, Jd = (e, t) => !!(t != null && t.partialResponse) || !!e.errorsWhileComputingFlags, Yd = (e) => {
	let t = {};
	for (let n = 0; e.length > n; n++) t[e[n]] = !0;
	return t;
}, Xd = (e) => {
	let t = {};
	for (let [n, r] of no(e || {})) r && (t[n] = r);
	return t;
}, Zd = (e, t) => e.distinctId === t.distinctId && e.sessionId === t.sessionId && ((e, t) => {
	let n = Object.keys(e);
	return n.length === Object.keys(t).length && n.every((n) => e[n] === t[n]);
})(e.groups, t.groups), Qd = class {
	constructor(e) {
		this.name = "featureFlags", this.Yd = !1, this.featureFlagEventHandlers = [], this.R = Bd, this.Xd = {}, this.tv = {}, this.ev = [], this.iv = /* @__PURE__ */ new Set(), this.nv = /* @__PURE__ */ new Set(), this.sv = !1, this.rv = !1, this.ov = 0, this.lv = !1, this.av = !1, this.uv = !1, this.hv = /* @__PURE__ */ new Map(), this.dv = !1, this.vv = !1, this.fv = !1, this.pv = 0, this.gv = !1, this.ln = () => {
			let e = this.mv();
			this.pv = 0, e && this.reloadFeatureFlags();
		}, this.yv = () => {
			var e, t;
			let n = this.bv, r = (e = this._v) == null ? n : e;
			k(n) || k(r) || this.Br.remoteRequestsDisabled || !this.wv || this.wv.visibilityState === "hidden" || Date.now() - ((t = this.Sv) == null ? 0 : t) < r || (this._v = this.gv || !this.Br.idleRefreshBackoff ? n : Math.min(2 * r, 36e5), this.gv = !1, this.reloadFeatureFlags(), this.xv());
		}, this.$v = () => {
			this.gv && this._v === this.bv || this.Cv();
		}, this.un = () => {
			var e;
			((e = this.wv) == null ? void 0 : e.visibilityState) === "visible" && this.Cv();
		}, this.Jl = e;
	}
	get Tv() {}
	Mv() {
		this.Gl && this.Iv();
	}
	setup(e) {
		try {
			this.Ev = typeof window > "u" ? void 0 : window, this.wv = typeof document > "u" ? void 0 : document;
		} catch (e) {
			this.Ev = void 0, this.wv = void 0;
		}
		return this.oa = e, this.R = e.logger.createLogger("[FeatureFlags]"), Md(e.kv.initialize(), () => {
			this.oa === e && (this.oa = void 0, this.Gl = e, this.Av(e));
		});
	}
	Av(e) {
		var t;
		if (this.Gl === e) return this.Ev && K(this.Ev, "online", this.ln), this.Iv(), this.Rv = e.registerDynamicEventProperties(() => this.Pv() ? this.Xd : this.tv), this.Ov = (t = this.Tv) == null ? void 0 : t.onCrossTabFeatureFlagChange(() => {
			this.Fv(), this.Lv(), this.Dv();
		}), this.Lv(), this.initialize();
	}
	Cv() {
		this.gv = !0, this._v = this.bv, this.yv();
	}
	Iv() {
		var e;
		let t = this.Br.refreshIntervalMs, n = !this.Br.remoteRequestsDisabled && this.wv && !k(t) && t > 0 ? t : void 0;
		this.Br.idleRefreshBackoff || (this._v = n), n !== this.bv && (this.Nv(), k(n) || (this.bv = n, this._v = n, this.xv(), (e = this.wv) != null && e.addEventListener && (K(this.wv, Ai, this.un), to(Wd, (e) => {
			K(this.wv, e, this.$v, { capture: !0 });
		}))));
	}
	xv() {
		k(this.bv) || (k(this.jv) || clearInterval(this.jv), this.Sv = Date.now(), this.jv = setInterval(this.yv, this.bv));
	}
	Nv() {
		var e, t;
		k(this.jv) || (clearInterval(this.jv), this.jv = void 0, (e = this.wv) == null || (t = e.removeEventListener) == null || t.call(e, "visibilitychange", this.un), to(Wd, (e) => {
			var t, n;
			(t = this.wv) == null || (n = t.removeEventListener) == null || n.call(t, e, this.$v, { capture: !0 });
		})), this.bv = void 0, this._v = void 0, this.gv = !1, this.Sv = void 0;
	}
	destroy() {
		this.qv();
	}
	dispose() {
		this.qv();
	}
	qv() {
		var e, t, n;
		this.Nv(), this.ov++, this.av = !1, this.oa = void 0, this.Bv(this.iv, "cancelled"), this.Bv(this.nv, "cancelled"), this.Gl && (this.zv(), (e = this.Rv) == null || e.dispose(), this.Rv = void 0, (t = this.Ov) == null || t.call(this), this.Ov = void 0, this.ev = [], (n = this.Ev) == null || n.removeEventListener("online", this.ln), this.Gl = void 0);
	}
	get Br() {
		return this.Jl.get();
	}
	Hv(e) {
		var t;
		return this.Uv && e in this.Uv ? this.Uv[e] : (t = this.Gl) == null ? void 0 : t.kv.get(e);
	}
	Fv() {
		return !!this.Uv && (this.Uv = void 0, !0);
	}
	Wv() {
		var e;
		return !k((e = this.Gl) == null ? void 0 : e.kv.get("$enabled_feature_flags")) && this.Fv();
	}
	$t(e) {
		this.Gv(() => {
			var t;
			return (t = this.Gl) == null ? void 0 : t.kv.set(e);
		});
	}
	Vv(e, t, n) {
		if (!this.Tv || !e.$enabled_feature_flags) return;
		let r = this.Hv("$enabled_feature_flags") || {}, i = e.$enabled_feature_flags || {}, a = t.flags || t.featureFlags, o = t.flags ? Object.entries(t.flags).filter(([, e]) => !(e != null && e.failed)).map(([e]) => e) : [], s = !!t.errorsWhileComputingFlags && !!t.flags, c = s || n && t.flags ? o : n && !T(a) ? Object.keys(a || {}) : Array.from(/* @__PURE__ */ new Set([...Object.keys(r), ...Object.keys(i)])), l = this.Hv("$feature_flag_payloads") || {}, u = e.$feature_flag_payloads || {}, d = s || n ? c : Array.from(/* @__PURE__ */ new Set([...Object.keys(l), ...Object.keys(u)])), f = !s && !n, p = !!f || c, m = !!f || d, h = {
			[gi]: p,
			[Si]: p,
			[Di]: m
		};
		e.$feature_flag_details && (h[_i] = p);
		for (let t of [
			bi,
			yi,
			xi
		]) k(e[t]) || (h[t] = !0);
		this.Tv.markCrossTabFeatureFlagChanges(h);
	}
	Dt(e) {
		this.Gv(() => {
			var t;
			return (t = this.Gl) == null ? void 0 : t.kv.remove(e);
		});
	}
	Gv(e) {
		try {
			e();
		} catch (e) {
			this.R.error("Failed to update feature flag persistence", e);
		}
	}
	Lv() {
		let e = {}, t = this.Hv(_i);
		for (let t of [bi, Oi]) {
			let n = this.Hv(t);
			k(n) || (e[t] = n);
		}
		let n = this.Hv(gi);
		n && (e[gi] = n.filter((e) => {
			var n;
			return !(!(t == null || (n = t[e]) == null) && n.failed);
		}));
		let r = this.Hv(Di);
		r && (e[Di] = Kd(r, t)), this.Xd = e;
		let i = V({}, e), a = Kd(this.Hv(Si), t);
		if (a) for (let [e, t] of Object.entries(a)) i[`$feature/${e}`] = t;
		this.tv = i;
	}
	Pv() {
		let e = this.Br.cacheTtlMs;
		if (!e || 0 >= e) return !1;
		let t = this.Hv(yi);
		return typeof t != "number" || Date.now() - t > e;
	}
	Qv() {
		return !!this.Pv() && (this.fv || this.rv || (this.fv = !0, this.R.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0);
	}
	Jv() {
		let e = this.Br.evaluationContexts;
		return e != null && e.length ? e.filter((e) => {
			let t = e && typeof e == "string" && e.trim().length > 0;
			return t || this.R.error("Invalid evaluation context found:", e, "Expected non-empty string"), t;
		}) : [];
	}
	Zv() {
		let e = this.Br.flagKeys;
		if (!k(e)) return e.filter((e) => {
			let t = e && typeof e == "string" && e.trim().length > 0;
			return t || this.R.error("Invalid flag key found:", e, "Expected non-empty string"), t;
		});
	}
	initialize() {
		var e, t;
		let n = this.Br, r = (e = (t = n.bootstrap) == null ? void 0 : t.featureFlags) == null ? {} : e;
		if (Object.keys(r).length) {
			var i, a;
			let e = (i = (a = n.bootstrap) == null ? void 0 : a.featureFlagPayloads) == null ? {} : i, t = Object.keys(r).filter((e) => !k(r[e])).reduce((e, t) => (e[t] = r[t], e), {}), o = Object.keys(e).filter((e) => t[e]).reduce((t, n) => (t[n] = e[n], t), {});
			return this.Kv({
				featureFlags: t,
				featureFlagPayloads: o
			}, void 0, { persist: !1 });
		}
	}
	updateFlags(e, t, n) {
		let r = n != null && n.merge ? Kd(this.Hv(Si), this.Hv(_i)) : {}, i = n != null && n.merge ? Kd(this.Hv(Di), this.Hv(_i)) : {}, a = V(V({}, r), e), o = V(V({}, i), t), s = {};
		for (let [e, t] of Object.entries(a)) s[e] = {
			key: e,
			enabled: Tn(t),
			variant: En(t),
			reason: void 0,
			metadata: k(o == null ? void 0 : o[e]) ? void 0 : {
				id: 0,
				version: void 0,
				description: void 0,
				payload: o[e]
			}
		};
		this.Kv({ flags: s });
	}
	get hasLoadedFlags() {
		return this.sv;
	}
	getFlags() {
		return Object.keys(this.getFlagVariants());
	}
	getFlagsWithDetails() {
		let e = this.Hv(_i), t = this.Hv(Oi), n = this.Hv(ki);
		if (!n && !t) return e || {};
		let r = G({}, e || {}), i = [.../* @__PURE__ */ new Set([...Object.keys(n || {}), ...Object.keys(t || {})])];
		for (let e of i) {
			var a, o;
			let i = r[e], s = t == null ? void 0 : t[e], c = k(s) ? (a = i == null ? void 0 : i.enabled) != null && a : !!s, l = k(s) ? i == null ? void 0 : i.variant : typeof s == "string" ? s : void 0, u = n == null ? void 0 : n[e], d = V(V({}, i), {}, {
				enabled: c,
				variant: c ? l == null ? i == null ? void 0 : i.variant : l : void 0
			});
			c !== (i == null ? void 0 : i.enabled) && (d.original_enabled = i == null ? void 0 : i.enabled), l !== (i == null ? void 0 : i.variant) && (d.original_variant = i == null ? void 0 : i.variant), u && (d.metadata = V(V({}, i == null ? void 0 : i.metadata), {}, {
				payload: u,
				original_payload: i == null || (o = i.metadata) == null ? void 0 : o.payload
			})), r[e] = d;
		}
		return this.Yd || (this.R.warn(" Overriding feature flag details!", {
			flagDetails: e,
			overriddenPayloads: n,
			finalDetails: r
		}), this.Yd = !0), r;
	}
	getAllFeatureFlags() {
		let e = this.getFlagVariants(), t = this.getFlagPayloads();
		return Object.keys(e).map((n) => {
			let r = e[n];
			return {
				key: n,
				enabled: Tn(r),
				variant: En(r),
				payload: wn(t[n])
			};
		});
	}
	getFlagVariants() {
		let e = Kd(this.Hv(Si), this.Hv(_i)), t = this.Hv(Oi);
		if (!t) return e || {};
		let n = G({}, e || {}), r = Object.keys(t);
		for (let e = 0; r.length > e; e++) n[r[e]] = t[r[e]];
		return this.Yd || (this.R.warn(" Overriding feature flags!", {
			enabledFlags: e,
			overriddenFlags: t,
			finalFlags: n
		}), this.Yd = !0), n;
	}
	getFlagPayloads() {
		let e = Kd(this.Hv(Di), this.Hv(_i)), t = this.Hv(ki);
		if (!t) return e || {};
		let n = G({}, e || {}), r = Object.keys(t);
		for (let e = 0; r.length > e; e++) n[r[e]] = t[r[e]];
		return this.Yd || (this.R.warn(" Overriding feature flag payloads!", {
			flagPayloads: e,
			overriddenPayloads: t,
			finalPayloads: n
		}), this.Yd = !0), n;
	}
	reloadFeatureFlags() {
		this.lv || this.Br.featureFlagsDisabled || this.mv() || (this.uv && this.R.warn("reloadFeatureFlags() was called inside an onFeatureFlags callback. This callback also runs when flags change in other tabs, so this can cause a request loop."), this.rv && (this.av = !0), this.Yv || (this.ev.slice().forEach((e) => {
			try {
				e();
			} catch (e) {
				this.R.error("Error while running feature flags reloading callback", e);
			}
		}), this.Yv = setTimeout(() => {
			this.Xv();
		}, 5)));
	}
	reloadFeatureFlagsAsync() {
		return !this.Gl || this.lv || this.Br.featureFlagsDisabled || this.Br.remoteRequestsDisabled || this.mv() ? Promise.resolve({ status: "skipped" }) : new Promise((e) => {
			this.iv.add(e), this.reloadFeatureFlags();
		});
	}
	Bv(e, t) {
		e.forEach((e) => e({ status: t })), e.clear();
	}
	zv() {
		clearTimeout(this.Yv), this.Yv = void 0;
	}
	onReloading(e) {
		return this.ev.push(e), () => {
			this.ev = this.ev.filter((t) => t !== e);
		};
	}
	ensureFlagsLoaded() {
		this.sv || this.rv || this.Yv || this.reloadFeatureFlags();
	}
	setAnonymousDistinctId(e) {
		this.$anon_distinct_id = e;
	}
	setReloadingPaused(e) {
		this.lv = e;
	}
	resetFlagCallReported() {
		this.Dt(Ti), this.hv = /* @__PURE__ */ new Map();
	}
	sendFlagCallsPendingCapture() {
		var e;
		if (this.hv.size !== 0 && !this.dv && (e = this.Gl) != null && e.canCapture && !this.Gl.isRateLimited) {
			this.dv = !0;
			try {
				let e = this.getFlagVariants();
				for (let t of Array.from(this.hv.keys())) {
					let n = this.hv.get(t);
					if (n) {
						if (n.value !== String(e[t]) || !Zd(n.context, this.tf())) {
							this.hv.delete(t);
							continue;
						}
						if (this.getFeatureFlagResult(t), this.hv.has(t)) break;
					}
				}
			} finally {
				this.dv = !1;
			}
		}
	}
	Xv(e) {
		var t;
		this.zv();
		let n = this.Gl;
		if (!n || this.Br.remoteRequestsDisabled || this.mv()) return void this.Bv(this.iv, "skipped");
		if (this.rv) return void (this.av = !0);
		let r = {
			token: n.projectToken,
			distinct_id: n.distinctId,
			groups: n.groups,
			$anon_distinct_id: this.$anon_distinct_id,
			person_properties: V(V(V({}, n.initialPersonProperties), this.Hv("$stored_person_properties") || {}), {}, {
				$lib: n.library.name,
				$lib_version: n.library.version
			}),
			group_properties: this.Hv(Ci),
			timezone: Hs()
		};
		k(n.deviceId) || (r.$device_id = n.deviceId), (e != null && e.disableFlags || this.Br.featureFlagsDisabled) && (r.disable_flags = !0);
		let i = this.Jv();
		i.length && (r.evaluation_contexts = i);
		let a = this.Zv();
		k(a) || (r.flag_keys = a);
		let o = this.Br.onlyEvaluateSurveyFeatureFlags, s = "/flags/?v=2" + (o ? "&only_evaluate_survey_feature_flags=true" : ""), c = this.ov, l = this.iv;
		this.iv = /* @__PURE__ */ new Set(), this.nv = l, this.rv = !0;
		let u = () => {
			this.av && (this.av = !1, this.Xv());
		}, d = (e) => {
			var t, n;
			let i = (t = e.json) == null ? {} : t, a = e.statusCode !== 200;
			if (this.rv = !1, c !== this.ov) return void u();
			if (this.ef(e.statusCode), a || this.av || (this.$anon_distinct_id = void 0), r.disable_flags && !this.av) return void this.Bv(l, "skipped");
			this.vv = !a;
			let s = [];
			e.error ? s.push(e.error instanceof Error && e.error.name === "AbortError" ? "timeout" : e.error instanceof Error ? Gd : "unknown_error") : e.statusCode !== 200 && s.push(`api_error_${e.statusCode}`), i.errorsWhileComputingFlags && s.push("errors_while_computing_flags");
			let d = !!((n = i.quotaLimited) != null && n.includes("feature_flags"));
			d && s.push("quota_limited"), this.$t({ [vi]: s }), d ? this.R.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : r.disable_flags || this.Kv(i, a, { partialResponse: o }), this.Bv(l, r.disable_flags ? "skipped" : s.length || !i.flags && !i.featureFlags ? "error" : "loaded"), u();
		}, f = (e) => {
			this.rv = !1, c === this.ov ? (this.$t({ [vi]: [Gd] }), this.R.error("Feature flag request failed", e), this.Wv() && this.Dv(!0), this.Bv(l, "error"), u()) : u();
		}, p = (t = this.Br.requestMaxRetries) == null ? 1 : t, m = () => p > 0 && c === this.ov, h = () => {
			if (c !== this.ov || !this.Gl || this.Br.remoteRequestsDisabled) return this.rv = !1, this.Bv(l, "skipped"), void u();
			try {
				n.sendRequest(s, {
					target: "flags",
					method: "POST",
					body: r,
					compression: this.Br.compression,
					sentAt: "body",
					timeoutMs: this.Br.requestTimeoutMs
				}).then((e) => {
					if (((e) => Ud.includes(e.statusCode) || ((e) => e.statusCode === 0 && e.error instanceof Error && e.error.name === "AbortError")(e))(e) && m()) return p--, void setTimeout(h, 500);
					d(e);
				}).catch(f);
			} catch (e) {
				f(e);
			}
		};
		h();
	}
	mv() {
		return Gs(this.pv, 3);
	}
	ef(e) {
		this.pv = Ks(e, this.pv, 3, () => this.R.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes."));
	}
	if(e) {
		var t;
		return !this.sv && !this.getFlags().length && !((t = this.getFeatureFlagDetails(e)) != null && t.failed);
	}
	getFeatureFlag(e, t = {}) {
		var n;
		if (t.fresh && !this.vv) return;
		if (this.if(e)) return void this.R.warn("getFeatureFlag for key \"" + e + Hd);
		if (this.Qv()) return;
		let r = this.getFeatureFlagResult(e, t);
		return (n = r == null ? void 0 : r.variant) == null ? r == null ? void 0 : r.enabled : n;
	}
	getFeatureFlagDetails(e) {
		return this.getFlagsWithDetails()[e];
	}
	getFeatureFlagPayload(e) {
		let t = this.getFeatureFlagResult(e, { send_event: !1 });
		return t == null ? void 0 : t.payload;
	}
	getFeatureFlagResult(e, t = {}) {
		var n;
		if (t.fresh && !this.vv) return;
		if (this.if(e)) return void this.R.warn("getFeatureFlagResult for key \"" + e + Hd);
		if (this.Qv()) return;
		let r = (n = this.Hv("$feature_flag_details")) == null || (n = n[e]) == null ? void 0 : n.failed, i = r ? void 0 : this.Hv(Si), a = r ? void 0 : this.Hv(Di), o = this.Hv(Oi), s = !!o && {}.hasOwnProperty.call(o, e), c = s || !!i && e in i, l = s ? o[e] : i == null ? void 0 : i[e], u = this.Hv(ki), d = u && {}.hasOwnProperty.call(u, e) ? u[e] : a == null ? void 0 : a[e], f = String(l), p = this.Hv("$feature_flag_request_id") || void 0, m = this.Hv("$feature_flag_evaluated_at") || void 0, h, g = this.Hv("$flag_call_reported") || {};
		if (this.Br.deduplicateCallsPerSession) {
			var _;
			let e = (_ = this.Gl) == null || (_ = _.session) == null ? void 0 : _.sessionId, t = this.Hv(Ei);
			e && e !== t && (g = {}, h = e);
		}
		if (!t.send_event && "send_event" in t) h && this.$t({
			[Ti]: g,
			[Ei]: h
		});
		else {
			var v, y, b;
			let t = !((v = this.Gl) != null && v.canCapture), n = !t && !((y = this.Gl) != null && y.isRateLimited);
			var x;
			if (n ? this.hv.delete(e) : (t && Object.keys(g).length > 0 && (g = {}, this.$t({ [Ti]: g })), (x = g[e]) != null && x.includes(f) || this.nf(e, f)), n && !((b = g[e]) != null && b.includes(f))) {
				var S, C, w, E, D, O, A, j, M, N, P, F, ee;
				T(g[e]) ? g[e].push(f) : g[e] = [f], this.$t(V({ [Ti]: g }, h ? { [Ei]: h } : {}));
				let t = this.getFeatureFlagDetails(e), n = [...(S = this.Hv("$feature_flag_errors")) == null ? [] : S];
				k(l) && n.push(t != null && t.failed ? "evaluation_failed" : "flag_missing");
				let r = {
					$feature_flag: e,
					$feature_flag_response: l,
					$feature_flag_payload: d == null ? null : d,
					$feature_flag_request_id: p,
					$feature_flag_evaluated_at: m,
					$feature_flag_bootstrapped_response: (C = (w = this.Br.bootstrap) == null || (w = w.featureFlags) == null ? void 0 : w[e]) == null ? null : C,
					$feature_flag_bootstrapped_payload: (E = (D = this.Br.bootstrap) == null || (D = D.featureFlagPayloads) == null ? void 0 : D[e]) == null ? null : E,
					$used_bootstrap_value: !this.vv
				};
				k(t == null || (O = t.metadata) == null ? void 0 : O.has_experiment) || (r.$feature_flag_has_experiment = t.metadata.has_experiment), k(t == null || (A = t.metadata) == null ? void 0 : A.version) || (r.$feature_flag_version = t.metadata.version);
				let i = (j = t == null || (M = t.reason) == null ? void 0 : M.description) == null ? t == null || (N = t.reason) == null ? void 0 : N.code : j;
				i && (r.$feature_flag_reason = i), !(t == null || (P = t.metadata) == null) && P.id && (r.$feature_flag_id = t.metadata.id), k(t == null ? void 0 : t.original_variant) && k(t == null ? void 0 : t.original_enabled) || (r.$feature_flag_original_response = k(t.original_variant) ? t.original_enabled : t.original_variant), !(t == null || (F = t.metadata) == null) && F.original_payload && (r.$feature_flag_original_payload = t == null || (ee = t.metadata) == null ? void 0 : ee.original_payload), n.length && (r.$feature_flag_error = n.join(",")), this.sf(r) || (this.rf(e, f), this.nf(e, f));
			} else h && this.$t({
				[Ti]: g,
				[Ei]: h
			});
		}
		return c ? {
			key: e,
			enabled: !!l,
			variant: typeof l == "string" ? l : void 0,
			payload: wn(d)
		} : void 0;
	}
	sf(e) {
		try {
			var t;
			return !1 !== ((t = this.Gl) == null ? void 0 : t.capture("$feature_flag_called", e));
		} catch (e) {
			return this.R.error("Failed to capture feature flag call", e), !0;
		}
	}
	nf(e, t) {
		this.hv.set(e, {
			value: t,
			context: this.tf()
		});
	}
	tf() {
		var e, t, n;
		return {
			distinctId: (e = this.Gl) == null ? void 0 : e.distinctId,
			groups: V({}, (t = this.Gl) == null ? void 0 : t.groups),
			sessionId: this.Br.deduplicateCallsPerSession ? (n = this.Gl) == null || (n = n.session) == null ? void 0 : n.sessionId : void 0
		};
	}
	rf(e, t) {
		let n = this.Hv("$flag_call_reported") || {}, r = n[e];
		T(r) && r.includes(t) && (n[e] = r.filter((e) => e !== t), this.$t({ [Ti]: n }));
	}
	getRemoteConfigPayload(e, t) {
		this.lf(e, t);
	}
	lf(e, t) {
		var n = this;
		return L(function* () {
			let r = n.Gl;
			if (!r) return;
			let i = {
				distinct_id: r.distinctId,
				token: r.projectToken,
				person_properties: {
					$lib: r.library.name,
					$lib_version: r.library.version
				}
			}, a = n.Jv();
			a.length && (i.evaluation_contexts = a);
			let o = n.Zv(), s;
			k(o) || (i.flag_keys = o);
			try {
				var c;
				let t = (c = (yield r.sendRequest("/flags/?v=2", {
					target: "flags",
					method: "POST",
					body: i,
					compression: n.Br.compression,
					sentAt: "body",
					timeoutMs: n.Br.requestTimeoutMs
				})).json) == null ? void 0 : c.featureFlagPayloads;
				s = (t == null ? void 0 : t[e]) || void 0;
			} catch (e) {
				n.R.error("Remote config feature flag request failed", e);
				return;
			}
			try {
				t(s);
			} catch (e) {
				n.R.error("Remote config feature flag callback failed", e);
			}
		})();
	}
	isFeatureEnabled(e, t = {}) {
		if (t.fresh && !this.vv) return t.defaultValue;
		if (this.if(e)) return this.R.warn("isFeatureEnabled for key \"" + e + Hd), t.defaultValue;
		let n = this.getFeatureFlag(e, t);
		return k(n) ? t.defaultValue : !!n;
	}
	addFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers.push(e);
	}
	removeFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t) => t !== e);
	}
	receivedFeatureFlags(e, t, n) {
		this.Kv(e, t, n);
	}
	Kv(e, t, n) {
		if (!this.Gl) return;
		var r, i;
		this.sv = !0, !1 !== (n == null ? void 0 : n.persist) && Jd(e, n) && !((r = this.Tv) == null || (i = r.reconcileFeatureFlagsBeforeMerge) == null) && i.call(r) && this.Fv();
		let a = this.getFlagVariants(), o = !e.flags && T(e.featureFlags), s = ((e, t = {}, n = {}, r = {}, i, a = Bd) => {
			let o = ((e, t) => {
				let n = e.flags;
				if (n) {
					let t = Object.fromEntries(Object.keys(n).filter((e) => !n[e].failed).map((e) => {
						var t;
						return [e, (t = n[e].variant) == null ? n[e].enabled : t];
					})), r = Object.fromEntries(Object.keys(n).filter((e) => !n[e].failed && n[e].enabled).filter((e) => {
						var t;
						return !k((t = n[e].metadata) == null ? void 0 : t.payload);
					}).map((e) => {
						var t;
						return [e, (t = n[e].metadata) == null ? void 0 : t.payload];
					}));
					return V(V({}, e), {}, {
						featureFlags: t,
						featureFlagPayloads: r
					});
				}
				return e.featureFlags && t.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), e;
			})(e, a), s = o.flags, c = o.featureFlags, l = o.featureFlagPayloads;
			if (!c) return;
			let u = e.requestId, d = e.evaluatedAt;
			if (T(c)) {
				a.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
				let e = {};
				if (c) for (let t = 0; c.length > t; t++) e[c[t]] = !0;
				return {
					[gi]: c,
					[Si]: e,
					[_i]: qd(r, c),
					[Di]: Kd(n, r),
					[xi]: !1
				};
			}
			let f = c, p = l, m = s;
			if (Jd(e, i)) {
				let e = (e) => ({}).hasOwnProperty.call(t, e) && !k(t[e]), a = Object.keys(f), o = p || {};
				f = V(V({}, t), f), p = V(V({}, n), o), (i != null && i.partialResponse || s) && a.forEach((e) => {
					e in o || p == null || delete p[e];
				}), m = s ? V(V({}, r), Object.fromEntries(Object.entries(s).filter(([t, n]) => !n.failed || !e(t)))) : qd(r, a);
			}
			return V(V({
				[gi]: Object.keys(Xd(f)),
				[Si]: f || {},
				[Di]: p || {},
				[_i]: m || {},
				[xi]: !0 === e.minimalFlagCalledEvents
			}, u ? { [bi]: u } : {}), d ? { [yi]: d } : {});
		})(e, a, o ? this.Hv("$feature_flag_payloads") || {} : this.getFlagPayloads(), o ? this.Hv("$feature_flag_details") || {} : this.getFlagsWithDetails(), n, this.R);
		if (s) if (!1 === (n == null ? void 0 : n.persist)) {
			let e = !k(this.Gl.kv.get(Si));
			this.Uv = s, e || this.$t(s);
		} else this.Fv(), this.Vv(s, e, !!(n != null && n.partialResponse)), this.$t(s);
		else t && this.Wv();
		t || (this.fv = !1), this.Dv(t);
	}
	override(e, t = !1) {
		this.R.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
			flags: e,
			suppressWarning: t
		});
	}
	overrideFeatureFlags(e) {
		this.af(e);
	}
	af(e) {
		if (this.Gl) {
			if (!1 === e) return this.Dt([Oi, ki]), this.Dv(), void Vd.info("All overrides cleared");
			if (T(e)) return this.$t({ [Oi]: Yd(e) }), this.Dv(), void Vd.info("Flag overrides set", { flags: e });
			if (e && typeof e == "object" && ("flags" in e || "payloads" in e)) {
				var t;
				let n = e;
				this.Yd = !!((t = n.suppressWarning) != null && t);
				let r = {}, i = n.flags, a = n.payloads;
				i && (r[Oi] = T(i) ? Yd(i) : i), a && (r[ki] = a), Object.keys(r).length && this.$t(r), !1 === i && !1 === a ? this.Dt([Oi, ki]) : !1 === i ? this.Dt(Oi) : !1 === a && this.Dt(ki), this.Dv(), !1 === i ? Vd.info("Flag overrides cleared") : i && Vd.info("Flag overrides set", { flags: i }), !1 === a ? Vd.info("Payload overrides cleared") : a && Vd.info("Payload overrides set", { payloads: a });
				return;
			}
			if (e && typeof e == "object") return this.$t({ [Oi]: e }), this.Dv(), void Vd.info("Flag overrides set", { flags: e });
			this.R.warn("Invalid overrideOptions provided to overrideFeatureFlags", { overrideOptions: e });
		} else this.R.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready");
	}
	onFeatureFlags(e) {
		if (this.addFeatureFlagsHandler(e), this.sv) {
			let { flags: t, flagVariants: n } = this.uf();
			try {
				e(t, n);
			} catch (e) {
				this.R.error("Error while running feature flags callback", e);
			}
		}
		return () => this.removeFeatureFlagsHandler(e);
	}
	updateEarlyAccessFeatureEnrollment(e, t, n) {
		var r, i;
		let a = (this.Hv("$early_access_features") || []).find((t) => t.flagKey === e), o = { [`$feature_enrollment/${e}`]: t }, s = {
			$feature_flag: e,
			$feature_enrollment: t,
			$set: o
		};
		a && (s.$early_access_feature_name = a.name), n && (s.$feature_enrollment_stage = n);
		let c = V(V({}, this.getFlagVariants()), {}, { [e]: t }), l = V({}, this.Hv(_i)), u = (r = l[e]) == null ? void 0 : r.failed, d = V({}, this.Hv(Di));
		u && (delete l[e], delete d[e]), (i = this.Tv) == null || i.markCrossTabFeatureFlagChanges(V(V({
			$active_feature_flags: [e],
			$enabled_feature_flags: [e]
		}, u ? {
			$feature_flag_details: [e],
			$feature_flag_payloads: [e]
		} : {}), {}, { $stored_person_properties: Object.keys(o) })), this.$t(V(V({
			[gi]: Object.keys(Xd(c)),
			[Si]: c
		}, u ? {
			[_i]: l,
			[Di]: d
		} : {}), {}, { [wi]: V(V({}, this.Hv("$stored_person_properties") || {}), o) })), this.Dv();
		try {
			var f;
			(f = this.Gl) == null || f.capture("$feature_enrollment_update", s);
		} catch (e) {
			this.R.error("Failed to capture early access feature enrollment", e);
		}
	}
	getEarlyAccessFeatures(e, t = !1, n) {
		let r = this.Hv(hi);
		!r || t ? this.cf(e, n) : e(r);
	}
	cf(e, t) {
		var n = this;
		return L(function* () {
			let r = n.Gl;
			if (!r) return;
			let i = t ? `&${t.map((e) => `stage=${e}`).join("&")}` : "", a;
			try {
				let e = yield r.sendRequest(`/api/early_access_features/?token=${r.projectToken}${i}`, {
					target: "api",
					method: "GET",
					sentAt: "query"
				});
				if (!e.json) return;
				a = e.json.earlyAccessFeatures, n.$t({ [hi]: a });
			} catch (e) {
				n.R.error("Early access feature request failed", e);
				return;
			}
			try {
				e(a);
			} catch (e) {
				n.R.error("Early access feature callback failed", e);
			}
		})();
	}
	uf() {
		let e = this.getFlags(), t = this.getFlagVariants();
		return {
			flags: e.filter((e) => t[e]),
			flagVariants: Object.keys(t).filter((e) => t[e]).reduce((e, n) => (e[n] = t[n], e), {})
		};
	}
	Dv(e) {
		this.Lv();
		let { flags: t, flagVariants: n } = this.uf(), r = this.uv;
		this.uv = !0, this.featureFlagEventHandlers.forEach((r) => {
			try {
				r(t, n, { errorsLoading: e });
			} catch (e) {
				this.R.error("Error while running feature flags callback", e);
			}
		}), this.uv = r;
	}
	setPersonPropertiesForFlags(e, t = !0) {
		this.hf(e, t);
	}
	hf(e, t = !0) {
		let n = this.Hv("$stored_person_properties") || {}, r = (e == null ? void 0 : e.$set) || (e != null && e.$set_once ? {} : e), i = e == null ? void 0 : e.$set_once, a = {};
		if (i) for (let e in i) ({}).hasOwnProperty.call(i, e) && (e in n || (a[e] = i[e]));
		this.$t({ [wi]: V(V(V({}, n), a), r) }), t && this.reloadFeatureFlags();
	}
	unsetPersonPropertiesForFlags(e, t = !0) {
		let n = V({}, this.Hv("$stored_person_properties") || {});
		e.forEach((e) => {
			delete n[e];
		}), this.$t({ [wi]: n }), t && this.reloadFeatureFlags();
	}
	resetPersonPropertiesForFlags(e = !0) {
		this.Dt(wi), e && this.reloadFeatureFlags();
	}
	setGroupPropertiesForFlags(e, t = !0) {
		let n = this.Hv("$stored_group_properties") || {}, r = V({}, n);
		for (let t of Object.keys(e)) r[t] = V(V({}, n[t]), e[t]);
		this.$t({ [Ci]: r }), t && this.reloadFeatureFlags();
	}
	resetGroupPropertiesForFlags(e) {
		if (e) {
			let t = this.Hv("$stored_group_properties") || {};
			this.$t({ [Ci]: V(V({}, t), {}, { [e]: {} }) });
		} else this.Dt(Ci);
	}
	reset() {
		this.ov++, this.Bv(this.iv, "cancelled"), this.Bv(this.nv, "cancelled"), this.av = !1, this.Xd = {}, this.tv = {}, this.Uv = void 0, this.sv = !1, this.lv = !1, this.vv = !1, this.$anon_distinct_id = void 0, this.zv(), this.Yd = !1, this.pv = 0, this.hv = /* @__PURE__ */ new Map();
	}
}, $d = U("[FeatureFlags]"), ef = class {
	constructor(e, t = !1) {
		this.df = !1, this.update(e, t);
	}
	update(e, t) {
		this.vf = ((e, t) => {
			var n, r, i, a, o, s, c, l;
			return {
				bootstrap: {
					featureFlags: (n = (r = e.bootstrap) == null ? void 0 : r.featureFlags) == null ? void 0 : n,
					featureFlagPayloads: (i = (a = e.bootstrap) == null ? void 0 : a.featureFlagPayloads) == null ? void 0 : i
				},
				remoteRequestsDisabled: t,
				featureFlagsDisabled: !!e.advanced_disable_feature_flags,
				onlyEvaluateSurveyFeatureFlags: !!e.advanced_only_evaluate_survey_feature_flags,
				deduplicateCallsPerSession: !!e.advanced_feature_flags_dedup_per_session,
				cacheTtlMs: e.feature_flag_cache_ttl_ms,
				refreshIntervalMs: (o = e.remote_config_refresh_interval_ms) == null ? 3e5 : o,
				idleRefreshBackoff: k(e.remote_config_refresh_interval_ms),
				requestTimeoutMs: e.feature_flag_request_timeout_ms,
				requestMaxRetries: Math.max(0, (s = e.feature_flag_request_max_retries) == null ? 1 : s),
				compression: e.disable_compression ? void 0 : "best-available",
				evaluationContexts: (c = (l = e.evaluation_contexts) == null ? e.evaluation_environments : l) == null ? [] : c,
				flagKeys: T(e.flag_keys) ? e.flag_keys : void 0
			};
		})(e, t), !e.evaluation_environments || e.evaluation_contexts || this.df || ($d.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.df = !0), k(e.flag_keys) || T(e.flag_keys) || $d.error("Invalid flag_keys found:", e.flag_keys, "Expected array of non-empty strings");
	}
	get() {
		return this.vf;
	}
}, tf = (e) => ie(e) && (e.name === "RangeError" && e.message.indexOf("Maximum call stack size exceeded") === 0 || e.name === "InternalError" && e.message === "too much recursion"), nf = U("[Error tracking]"), rf = "webkit-masked-url:", af = [{
	value: "isolatedAPI.contexts.topHostname",
	exact: !1
}, {
	value: "No response from target",
	exact: !0
}], of = [
	"chrome-extension://",
	"moz-extension://",
	"safari-extension:",
	"safari-web-extension:",
	rf
], sf = ["__firefox__", "__gCrWeb"];
function cf(e, t) {
	this.v = e, this.k = t;
}
function lf(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); t > n; n++) r[n] = e[n];
	return r;
}
function uf(e, t) {
	return function(e) {
		if (Array.isArray(e)) return e;
	}(e) || function(e, t) {
		var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var r, i, a, o, s = [], c = !0, l = !1;
			try {
				if (a = (n = n.call(e)).next, t === 0) {
					if (Object(n) !== n) return;
					c = !1;
				} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
			} catch (e) {
				l = !0, i = e;
			} finally {
				try {
					if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
				} finally {
					if (l) throw i;
				}
			}
			return s;
		}
	}(e, t) || function(e, t) {
		if (e) {
			if (typeof e == "string") return lf(e, t);
			var n = {}.toString.call(e).slice(8, -1);
			return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lf(e, t) : void 0;
		}
	}(e, t) || function() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}();
}
function df(e) {
	var t, n;
	function r(t, n) {
		try {
			var a = e[t](n), o = a.value, s = o instanceof cf;
			Promise.resolve(s ? o.v : o).then(function(n) {
				if (s) {
					var c = t === "return" && o.k ? t : "next";
					if (!o.k || n.done) return r(c, n);
					n = e[c](n).value;
				}
				i(!!a.done, n);
			}, function(e) {
				r("throw", e);
			});
		} catch (e) {
			i(2, e);
		}
	}
	function i(e, i) {
		e === 2 ? t.reject(i) : t.resolve({
			value: i,
			done: e
		}), (t = t.next) ? r(t.key, t.arg) : n = null;
	}
	this._invoke = function(e, i) {
		return new Promise(function(a, o) {
			var s = {
				key: e,
				arg: i,
				resolve: a,
				reject: o,
				next: null
			};
			n ? n = n.next = s : (t = n = s, r(e, i));
		});
	}, typeof e.return != "function" && (this.return = void 0);
}
df.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
	return this;
}, df.prototype.next = function(e) {
	return this._invoke("next", e);
}, df.prototype.throw = function(e) {
	return this._invoke("throw", e);
}, df.prototype.return = function(e) {
	return this._invoke("return", e);
};
var ff = Object.entries, pf = Object.keys, mf = Object.setPrototypeOf, hf = Object.isFrozen, gf = Object.getPrototypeOf, _f = Object.getOwnPropertyDescriptor, vf = Object.freeze, yf = Object.seal, bf = Object.create, xf = typeof Reflect < "u" && Reflect, Sf = xf.apply, Cf = xf.construct;
vf || (vf = function(e) {
	return e;
}), yf || (yf = function(e) {
	return e;
}), Sf || (Sf = function(e, t) {
	for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
	return e.apply(t, r);
}), Cf || (Cf = function(e) {
	for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
	return new e(...n);
});
var wf = Q([].forEach), Tf = Q([].lastIndexOf), Ef = Q([].pop), Df = Q([].push), Of = Q([].slice), kf = Q([].splice), Af = Array.isArray, jf = Yf(Set), Mf = Q(Set.prototype.add), Nf = Q(Set.prototype.has), Pf = Q("".toLowerCase), Ff = Q("".toString), If = Q("".match), Lf = Q("".replace), Rf = Q("".indexOf), zf = Q("".trim), Bf = Q(0 .toString), Vf = Q(Boolean.prototype.toString), Hf = typeof BigInt > "u" ? null : Q(BigInt.prototype.toString), Uf = typeof Symbol > "u" ? null : Q(Symbol.prototype.toString), Wf = Q({}.hasOwnProperty), Gf = Q({}.toString), Kf = /t/.test, qf = function(e, t) {
	return e instanceof RegExp && (e.lastIndex = 0), Sf(Kf, e, [t]);
}, Jf = Yf(TypeError);
function Q(e) {
	return function(t) {
		for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) r[i - 1] = arguments[i];
		return Sf(e, t, r);
	};
}
function Yf(e) {
	return function() {
		for (var t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
		return Cf(e, n);
	};
}
function $(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pf;
	if (mf && mf(e, null), !Af(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (hf(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Xf(e) {
	for (let t = 0; e.length > t; t++) Wf(e, t) || (e[t] = null);
	return e;
}
function Zf(e) {
	let t = bf(null);
	for (let r of ff(e)) {
		var n = uf(r, 2);
		let i = n[0], a = n[1];
		Wf(e, i) && (t[i] = Af(a) ? Xf(a) : a && typeof a == "object" && a.constructor === Object ? Zf(a) : a);
	}
	return t;
}
function Qf(e) {
	let t = bf(null), n = pf(e), r = n.length;
	for (; r--;) t[n[r]] = e[n[r]];
	return t;
}
function $f(e, t) {
	for (; e !== null;) {
		let n = _f(e, t);
		if (n) {
			if (n.get) return Q(n.get);
			if (typeof n.value == "function") return Q(n.value);
		}
		e = gf(e);
	}
	return function() {
		return null;
	};
}
var ep = vf(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), tp = vf(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.filter.font.g.glyph.glyphref.hkern.image.line.lineargradient.marker.mask.metadata.mpath.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), np = vf([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), rp = vf([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), ip = vf(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), ap = vf([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), op = vf(["#text"]), sp = vf(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), cp = vf(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), lp = vf(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), up = vf([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), dp = yf(/{{[\w\W]*|^[\w\W]*}}/g), fp = yf(/<%[\w\W]*|^[\w\W]*%>/g), pp = yf(/\${[\w\W]*/g), mp = yf(/{{|}}|\${|<%|%>|&lt;%|%&gt;/), hp = yf(/^data-[\-\w.\u00B7-\uFFFF]+$/), gp = yf(/^aria-[\-\w]+$/), _p = yf(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), vp = yf(/^(?:\w+script|data):/i), yp = yf(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), bp = yf(/^html$/i), xp = yf(/^[a-z][.\w]*(-[.\w]+)+$/i), Sp = yf(/<[/\w!]/g), Cp = yf(/<[/\w]/g), wp = yf(/<\/no(script|embed|frames)/i), Tp = yf(/\/>/i), Ep = yf(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i), Dp = yf(/^[\r\n\t ]+/), Op = vf($({}, [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
])), kp = function() {
	return typeof window > "u" ? null : window;
}, Ap = function(e, t, n, r) {
	return Wf(e, t) && Af(e[t]) ? $(r.base ? Qf(r.base) : {}, e[t], r.transform) : n;
}, jp = function(e, t, n) {
	let r = Wf(e, t) ? e[t] : void 0;
	return r && typeof r == "object" ? Zf(r) : n;
}, Mp = function e() {
	let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kp(), n = (t) => e(t);
	if (n.version = "3.4.18", n.removed = [], !t || !t.document || t.document.nodeType !== 9 || !t.Element) return n.isSupported = !1, n;
	let r = t.document, i = r, a = i.currentScript, o = t.HTMLTemplateElement, s = t.Node, c = t.NodeFilter, l = t.DOMParser, u = t.trustedTypes, d = t.Element.prototype, f = $f(d, "cloneNode"), p = $f(d, "remove"), m = $f(d, "removeAttributeNode"), h = $f(d, "nextSibling"), g = $f(d, "childNodes"), _ = $f(d, "parentNode"), v = $f(d, "shadowRoot"), y = $f(d, "attributes"), b = s && s.prototype ? $f(s.prototype, "nodeType") : null, x = s && s.prototype ? $f(s.prototype, "nodeName") : null, S = s && s.prototype ? $f(s.prototype, "ownerDocument") : null, C = function(e) {
		return b ? b(e) : e.nodeType;
	}, w = function(e) {
		return x ? x(e) : e.nodeName;
	}, T = function(e) {
		for (; e !== null;) {
			let t = _f(e, "namespaceURI");
			if (t) return t.get ? Q(t.get) : null;
			e = gf(e);
		}
		return null;
	}(d), E = function(e) {
		return T ? T(e) : e.namespaceURI;
	};
	if (typeof o == "function") {
		let e = r.createElement("template");
		e.content && e.content.ownerDocument && (r = e.content.ownerDocument);
	}
	let D, O, k = "", A = !1, j = 0, M = function() {
		if (j > 0) throw Jf("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, N = function(e) {
		M(), j++;
		try {
			return D.createHTML(e);
		} finally {
			j--;
		}
	}, P = function(e) {
		return D && je ? N(e) : e;
	}, F = r.implementation, ee = r.createNodeIterator, te = r.createDocumentFragment, ne = r.getElementsByTagName, re = i.importNode, I = {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
	n.isSupported = typeof ff == "function" && typeof _ == "function" && F && F.createHTMLDocument !== void 0;
	let ie = dp, ae = fp, oe = pp, se = hp, ce = gp, le = vp, ue = yp, L = xp, de = _p, R = null, fe = $({}, [
		...ep,
		...tp,
		...np,
		...ip,
		...op
	]), z = null, pe = $({}, [
		...sp,
		...cp,
		...lp,
		...up
	]), me = null, he = null, ge = null, _e = Object.seal(bf(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), ve = !0, ye = !0, be = !1, xe = !0, Se = !1, Ce = !0, we = !1, Te = !1, Ee = null, De = null, Oe = !1, ke = !1, Ae = !1, je = !1, Me = !0, Ne = !1, Pe = "user-content-", Fe = !0, Ie = !1, Le = null, Re = !1, ze = null, Be = $({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Ve = null, He = $({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Ue = null, We = $({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Ge = "http://www.w3.org/1998/Math/MathML", Ke = "http://www.w3.org/2000/svg", qe = "http://www.w3.org/1999/xhtml", Je = qe, Ye = !1, Xe = null, Ze = $({}, [
		Ge,
		Ke,
		qe
	], Ff), Qe = vf($({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	])), $e = null, et = vf($({}, ["annotation-xml"])), tt = null, nt = vf(bf(null)), rt = $({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), it = null, at = ["application/xhtml+xml", "text/html"], B = null, ot = null, st = r.createElement("form"), ct = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, lt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		e && typeof e == "object" || (e = {}), e = Zf(e), it = at.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, B = it === "application/xhtml+xml" ? Ff : Pf, R = Ap(e, "ALLOWED_TAGS", fe, { transform: B }), z = Ap(e, "ALLOWED_ATTR", pe, { transform: B }), Xe = Ap(e, "ALLOWED_NAMESPACES", Ze, { transform: Ff }), Ue = Ap(e, "ADD_URI_SAFE_ATTR", We, {
			transform: B,
			base: We
		}), Ve = Ap(e, "ADD_DATA_URI_TAGS", He, {
			transform: B,
			base: He
		}), ze = Ap(e, "FORBID_CONTENTS", Be, { transform: B }), he = Ap(e, "FORBID_TAGS", bf(null), { transform: B }), ge = Ap(e, "FORBID_ATTR", bf(null), { transform: B }), Re = !!Wf(e, "USE_PROFILES") && (e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? Zf(e.USE_PROFILES) : e.USE_PROFILES), ve = !1 !== e.ALLOW_ARIA_ATTR, ye = !1 !== e.ALLOW_DATA_ATTR, be = e.ALLOW_UNKNOWN_PROTOCOLS || !1, xe = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Se = e.SAFE_FOR_TEMPLATES || !1, Ce = !1 !== e.SAFE_FOR_XML, we = e.WHOLE_DOCUMENT || !1, ke = e.RETURN_DOM || !1, Ae = e.RETURN_DOM_FRAGMENT || !1, je = e.RETURN_TRUSTED_TYPE || !1, Oe = e.FORCE_BODY || !1, Me = !1 !== e.SANITIZE_DOM, Ne = e.SANITIZE_NAMED_PROPS || !1, Fe = !1 !== e.KEEP_CONTENT, Ie = e.IN_PLACE || !1, de = function(e) {
			if (!e) return !1;
			try {
				return qf(e, ""), !0;
			} catch (e) {
				return !1;
			}
		}(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : _p, Je = typeof e.NAMESPACE == "string" ? e.NAMESPACE : qe, $e = jp(e, "MATHML_TEXT_INTEGRATION_POINTS", Qe), tt = jp(e, "HTML_INTEGRATION_POINTS", et);
		let t = jp(e, "CUSTOM_ELEMENT_HANDLING", nt);
		if (me = bf(null), Wf(t, "tagNameCheck") && ct(t.tagNameCheck) && (me.tagNameCheck = t.tagNameCheck), Wf(t, "attributeNameCheck") && ct(t.attributeNameCheck) && (me.attributeNameCheck = t.attributeNameCheck), Wf(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), yf(me), Se && (ye = !1), Ae && (ke = !0), Re && ((Wf(e, "ALLOWED_TAGS") || Wf(e, "ALLOWED_ATTR")) && typeof console < "u" && typeof console.warn == "function" && console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."), R = $({}, op), z = bf(null), !0 === Re.html && ($(R, ep), $(z, sp)), !0 === Re.svg && ($(R, tp), $(z, cp), $(z, up)), !0 === Re.svgFilters && ($(R, np), $(z, cp), $(z, up)), !0 === Re.mathMl && ($(R, ip), $(z, lp), $(z, up))), _e.tagCheck = null, _e.attributeCheck = null, Wf(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? _e.tagCheck = e.ADD_TAGS : Af(e.ADD_TAGS) && (R === fe && (R = Qf(R)), $(R, e.ADD_TAGS, B))), Wf(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? _e.attributeCheck = e.ADD_ATTR : Af(e.ADD_ATTR) && (z === pe && (z = Qf(z)), $(z, e.ADD_ATTR, B))), Wf(e, "ADD_FORBID_CONTENTS") && Af(e.ADD_FORBID_CONTENTS) && (ze === Be && (ze = Qf(ze)), $(ze, e.ADD_FORBID_CONTENTS, B)), Fe && (R["#text"] = !0), we && $(R, [
			"html",
			"head",
			"body"
		]), R.table && (R.tbody = !0, delete he.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw Jf("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Jf("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = D;
			D = e.TRUSTED_TYPES_POLICY;
			try {
				k = N("");
			} catch (e) {
				throw D = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (D = void 0, k = "") : (D === void 0 && (A || (O = function(e, t) {
			if (typeof e != "object" || typeof e.createPolicy != "function") return null;
			let n = null, r = "data-tt-policy-suffix";
			t && t.hasAttribute(r) && (n = t.getAttribute(r));
			let i = "dompurify" + (n ? "#" + n : "");
			try {
				return e.createPolicy(i, {
					createHTML: (e) => e,
					createScriptURL: (e) => e
				});
			} catch (e) {
				return console.warn("TrustedTypes policy " + i + " could not be created."), null;
			}
		}(u, a), A = !0), D = O), D && typeof k == "string" && (k = N("")));
		ot = vf(e);
	}, ut = $({}, [
		...tp,
		...np,
		...rp
	]), dt = $({}, [...ip, ...ap]), ft = function(e) {
		Df(n.removed, { element: e });
		try {
			_(e).removeChild(e);
		} catch (t) {
			if (p(e), !_(e)) throw Jf("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, pt = function(e, t, n) {
		try {
			m(e, t);
		} catch (t) {
			try {
				e.removeAttribute(n);
			} catch (e) {}
		}
	}, mt = function(e) {
		vt(e);
		let t = g(e);
		t && wf(Of(t), (e) => {
			try {
				p(e);
			} catch (e) {}
		}), C(e) === 1 && gt(e, !1);
	}, ht = function(e, t, r) {
		if (!r) try {
			r = t.getAttributeNode(e);
		} catch (e) {
			r = null;
		}
		if (Df(n.removed, {
			attribute: r || null,
			from: t
		}), r) pt(t, r, e);
		else try {
			t.removeAttribute(e);
		} catch (e) {}
		if (e === "is") if (ke || Ae) try {
			ft(t);
		} catch (e) {}
		else try {
			t.setAttribute(e, "");
		} catch (e) {}
	}, gt = function(e, t) {
		let n = y(e);
		if (n) for (let r = n.length - 1; r >= 0; --r) {
			let i = n[r], a = i && i.name;
			typeof a != "string" || t && z[B(a)] || pt(e, i, a);
		}
	}, _t = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = [e];
		for (; r.length > 0;) {
			let e = r.pop();
			if (!1 === t(e)) continue;
			if (n && C(e) === 1) {
				let t = v(e);
				At(t) && r.push(t);
			}
			let i = g(e);
			if (i) for (let e = i.length - 1; e >= 0; --e) r.push(i[e]);
		}
	}, vt = function(e) {
		_t(e, (e) => {
			C(e) === 1 && gt(e, !0);
		});
	}, yt = function(e) {
		let t = [];
		return _t(e, (e) => {
			t.push(e);
		}, !0), t;
	}, bt = function(e, t) {
		let r = !1;
		return wf(n.removed, (t) => {
			t.element && (r = r || t.element === e, vt(t.element));
		}), function(e, t) {
			let n = jf();
			wf(yt(e), (e) => {
				C(e) === 1 && Mf(n, e);
			}), wf(t, (e) => {
				C(e) !== 1 || Nf(n, e) || gt(e, !0);
			});
		}(e, t), r;
	}, xt = function(e, t, n, r) {
		let i = wt(e), a;
		for (; a = i.nextNode();) Nf(r, a) && !Nf(Le, a) && (t && V(I.uponSanitizeShadowNode, a, null), Ht(a, n));
	}, St = function(e, t) {
		return !!Ce && (e === "patchsrc" || e === "for" && t !== "label" && t !== "output");
	}, Ct = function(e) {
		let t = null, n = null;
		if (Oe) e = "<remove></remove>" + e;
		else {
			let t = If(e, Dp);
			n = t && t[0];
		}
		it === "application/xhtml+xml" && Je === qe && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = D ? N(e) : e;
		if (Je === qe) try {
			t = new l().parseFromString(i, it);
		} catch (e) {}
		if (!t || !t.documentElement) {
			t = F.createDocument(Je, "template", null);
			try {
				t.documentElement.innerHTML = Ye ? k : i;
			} catch (e) {}
		}
		let a = t.body || t.documentElement;
		return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), Je === qe ? ne.call(t, we ? "html" : "body")[0] : we ? t.documentElement : a;
	}, wt = function(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = S ? S(e) : e.ownerDocument;
		return ee.call(n || e, e, (t ? 0 : c.SHOW_ELEMENT) | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, Tt = function(e) {
		return e = Lf(e, ie, " "), e = Lf(e, ae, " "), Lf(e, oe, " ");
	}, Et = function(e) {
		var t;
		Dt(e);
		let n = (t = e.querySelectorAll) == null ? void 0 : t.call(e, "template");
		n && wf(n, (e) => {
			At(e.content) && Et(e.content);
		});
	}, Dt = function(e) {
		e.normalize();
		let t = wt(e, !0), n = t.nextNode();
		for (; n;) n.data = Tt(n.data), n = t.nextNode();
	}, Ot = function(e) {
		let t = x ? x(e) : null;
		return typeof t == "string" && B(t) === "form" && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== y(e) || typeof e.removeAttribute != "function" || typeof e.removeAttributeNode != "function" || typeof e.getAttributeNode != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== b(e) || e.childNodes !== g(e));
	}, kt = function(e) {
		if (!b || typeof e != "object" || !e) return null;
		try {
			let t = b(e);
			return typeof t == "number" ? t : null;
		} catch (e) {
			return null;
		}
	}, At = function(e) {
		return kt(e) === 11;
	}, jt = function(e) {
		return kt(e) !== null;
	};
	function V(e, t, r) {
		e.length !== 0 && wf(e, (e) => {
			e.call(n, t, r, ot);
		});
	}
	let Mt = function(e, t) {
		if (e instanceof RegExp) return qf(e, t);
		if (e instanceof Function) {
			for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
			return !!e(t, ...r);
		}
		return !1;
	}, Nt = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? Qf(t) : t;
	}, Pt = function(e, t) {
		return e !== t && _(e) === null && (Ie && vt(e), !0);
	}, Ft = function(e, t) {
		if (Le && Mf(Le, e), V(I.beforeSanitizeElements, e, null), Pt(e, t)) return !0;
		if (Ot(e)) return ft(e), !0;
		let r = B(w(e)), i = C(e);
		if (R = Nt(I.uponSanitizeElement, R, fe, Ee), V(I.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: R
		}), Pt(e, t)) return !0;
		if (function(e, t, n) {
			return !!(Ce && n === 1 && e.hasChildNodes() && !jt(e.firstElementChild) && qf(Sp, e.textContent) && qf(Sp, e.innerHTML)) || !!(Ce && Op[t] && n === 1 && E(e) === qe && (jt(e.firstElementChild) || typeof e.textContent == "string" && qf(Sp, e.textContent))) || n === 7 || !(!Ce || n !== 8 || !qf(Cp, e.data));
		}(e, r, i)) return ft(e), !0;
		if (he[r] || !(_e.tagCheck instanceof Function && _e.tagCheck(r)) && !R[r]) {
			let n = function(e, t, n) {
				if (!he[t] && Rt(t) && Mt(me.tagNameCheck, t)) return !1;
				if (Fe && !ze[t] && !ze[Pf(t)]) {
					let t = _(e), r = g(e);
					if (r && t) for (let i = r.length - 1; i >= 0; --i) {
						let a = e === n ? f(r[i], !0) : r[i];
						t.insertBefore(a, h(e));
					}
				}
				return ft(e), !0;
			}(e, r, t);
			return !(!1 !== n || (V(I.afterSanitizeElements, e, null), !Pt(e, t))) || n;
		}
		if (i === 1 && !function(e) {
			let t = E(e), n = Pf(w(e)), r = _(e), i = Je, a = "template";
			return r && C(r) === 1 && (i = E(r), a = Pf(w(r))), !!Xe[t] && (t === Ke ? function(e, t, n) {
				return t === qe ? e === "svg" : t === Ge ? e === "svg" && (n === "annotation-xml" || $e[n]) : !!ut[e];
			}(n, i, a) : t === Ge ? function(e, t, n) {
				return t === qe ? e === "math" : t === Ke ? e === "math" && tt[n] : !!dt[e];
			}(n, i, a) : t === qe ? function(e, t, n) {
				return !(t === Ke && !tt[n]) && !(t === Ge && !$e[n]) && !dt[e] && (rt[e] || !ut[e]);
			}(n, i, a) : it === "application/xhtml+xml");
		}(e) || (r === "noscript" || r === "noembed" || r === "noframes") && qf(wp, e.innerHTML)) return ft(e), !0;
		if (Se && i === 3) {
			let t = e.textContent, r = Tt(t);
			t !== r && (Df(n.removed, { element: e.cloneNode() }), e.textContent = r);
		}
		return V(I.afterSanitizeElements, e, null), Pt(e, t);
	}, It = function(e, t, n) {
		if (ge[t] || St(t, e) || Me && (t === "id" || t === "name") && (n in r || n in st)) return !1;
		let i = z[t] || _e.attributeCheck instanceof Function && _e.attributeCheck(t, e);
		if (ye && qf(se, t) || ve && qf(ce, t)) return !0;
		if (!i) return Rt(e) && Mt(me.tagNameCheck, e) && Mt(me.attributeNameCheck, t, e) || t === "is" && me.allowCustomizedBuiltInElements && Mt(me.tagNameCheck, n);
		if (Ue[t]) return !0;
		let a = Lf(n, ue, "");
		return !(!qf(de, a) && (t !== "src" && t !== "xlink:href" && t !== "href" || e === "script" || Rf(n, "data:") !== 0 || !Ve[e]) && (!be || qf(le, a)) && n);
	}, Lt = $({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), Rt = function(e) {
		return !Lt[Pf(e)] && qf(L, e);
	}, zt = function(e, t, n, r) {
		if (D && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return N(r);
			case "TrustedScriptURL": return function(e) {
				M(), j++;
				try {
					return D.createScriptURL(e);
				} finally {
					j--;
				}
			}(r);
		}
		return r;
	}, Bt = function(e, t, n, r) {
		try {
			return n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r), !Ot(e) || (ft(e), !1);
		} catch (n) {
			return ht(t, e), !1;
		}
	}, Vt = function(e, t) {
		return !(!Ce || !qf(Ep, t)) || Pf(e) === "attributename" && Rf(t, "href") !== -1;
	}, Ht = function(e, t) {
		Ft(e, t), function(e, t) {
			if (V(I.beforeSanitizeAttributes, e, null), Pt(e, t)) return;
			let r = e.attributes;
			if (!r || Ot(e)) return;
			z = Nt(I.uponSanitizeAttribute, z, pe, De);
			let i = {
				attrName: "",
				attrValue: "",
				keepAttr: !0,
				allowedAttributes: z,
				forceKeepAttr: void 0
			}, a = r.length, o = B(w(e));
			for (; a--;) {
				let t = r[a], s = t.name, c = t.namespaceURI, l = t.value, u = B(s), d = l, f = s === "value" ? d : zf(d), p = !1;
				i.attrName = u, i.attrValue = f, i.keepAttr = !0, i.forceKeepAttr = void 0, V(I.uponSanitizeAttribute, e, i), f = i.attrValue, !Ne || u !== "id" && u !== "name" || Rf(f, Pe) === 0 || (ht(s, e, t), f = Pe + f, p = !0), Vt(s, f) ? ht(s, e, t) : i.forceKeepAttr || (!i.keepAttr || !xe && qf(Tp, f) ? ht(s, e, t) : (Se && (f = Tt(f)), It(o, u, f) ? (f = zt(o, u, c, f), f !== d && Bt(e, s, c, f) && p && Ef(n.removed)) : ht(s, e, t)));
			}
			V(I.afterSanitizeAttributes, e, null), Pt(e, t);
		}(e, t), At(e.content) && Ut(e.content);
	}, Ut = function(e) {
		let t = null, n = wt(e);
		for (V(I.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (V(I.uponSanitizeShadowNode, t, null), Ht(t, e), C(t) === 1) {
			let e = v(t);
			At(e) && (Wt(e), Ut(e));
		}
		Se && Dt(e), V(I.afterSanitizeShadowDOM, e, null);
	}, Wt = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				Ut(e.shadow);
				continue;
			}
			let n = e.node, r = C(n) === 1, i = g(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = x ? x(n) : null;
				if (typeof e == "string" && B(e) === "template") {
					let e = n.content;
					At(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = v(n);
				At(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return n.sanitize = function(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = null, a = null, o = null, s = null;
		if (Ye = !e, Ye && (e = "<!-->"), typeof e != "string" && !jt(e) && typeof (e = function(e) {
			switch (typeof e) {
				case "string": return e;
				case "number": return Bf(e);
				case "boolean": return Vf(e);
				case "bigint": return Hf ? Hf(e) : "0";
				case "symbol": return Uf ? Uf(e) : "Symbol()";
				case "undefined":
				default: return Gf(e);
				case "function":
				case "object": {
					if (e === null) return Gf(e);
					let t = e, n = $f(t, "toString");
					if (typeof n == "function") {
						let e = n(t);
						return typeof e == "string" ? e : Gf(e);
					}
					return Gf(e);
				}
			}
		}(e)) != "string") throw Jf("dirty is not a string, aborting");
		if (!n.isSupported) return e;
		Te ? (R = Ee, z = De) : lt(t), n.removed = [];
		let c = Ie && typeof e != "string" && jt(e), l = [], u = Le;
		if (c) {
			Ce && _t(e, (e) => {
				let t = C(e);
				if (t === 7 || t === 8 && qf(Cp, e.data)) {
					try {
						p(e);
					} catch (e) {}
					return !1;
				}
				if (t === 1) {
					let t = e, n = B(w(e));
					try {
						t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && St("for", n) && t.removeAttribute("for");
					} catch (e) {}
				}
				return !0;
			});
			let t = w(e);
			if (typeof t == "string") {
				let n = B(t);
				if (!R[n] || he[n]) throw mt(e), Jf("root node is forbidden and cannot be sanitized in-place");
			}
			if (Ot(e)) throw mt(e), Jf("root node is clobbered and cannot be sanitized in-place");
			l = yt(e), Le = jf();
		} else if (jt(e)) r = Ct("<!---->"), a = r.ownerDocument.importNode(e, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a), Wt(r);
		else {
			if (!ke && !Se && !we && e.indexOf("<") === -1) return P(e);
			if (r = Ct(e), !r) return ke ? null : je ? k : "";
		}
		r && Oe && ft(r.firstChild);
		let d = c ? e : r;
		try {
			c && Wt(e);
			let t = wt(d);
			for (; o = t.nextNode();) Ht(o, d);
			c && function(e, t) {
				let n = Le, r = null, i = () => (r || (r = jf(), wf(t, (e) => {
					Mf(r, e);
				})), r);
				for (let t = 0;; t++) {
					let r = yt(e), a = [e], o = !1;
					if (wf(r, (e) => {
						C(e) === 11 ? Df(a, e) : o || Nf(n, e) || (o = Nf(i(), e));
					}), !o) return;
					if (t >= 8) throw Jf("the tree kept changing during in-place sanitization; refusing to return it");
					wf(a, (t, n) => {
						xt(t, n > 0, e, i());
					});
				}
			}(e, l);
		} catch (t) {
			throw c && (mt(e), bt(e, l)), t;
		} finally {
			Le = u;
		}
		if (c) {
			if (bt(e, l)) throw Jf("a node selected for removal could not be safely returned; refusing to sanitize in place");
			return Se && Et(e), e;
		}
		if (ke) {
			if (Se && Et(r), Ae) for (s = te.call(r.ownerDocument); r.firstChild;) s.appendChild(r.firstChild);
			else s = r;
			return (z.shadowroot || z.shadowrootmode) && (s = re.call(i, s, !0)), s;
		}
		let f = () => we ? r.outerHTML : r.innerHTML, m = f();
		return Se && qf(mp, m) && (Dt(r), m = f()), we && R["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && qf(bp, r.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + m), P(m);
	}, n.setConfig = function() {
		lt(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), Te = !0, Ee = R, De = z;
	}, n.clearConfig = function() {
		ot = null, Te = !1, Ee = null, De = null, D = O, k = "";
	}, n.isValidAttribute = function(e, t, n) {
		ot || lt({});
		let r = B(e), i = B(t);
		return (typeof n != "string" || !(Vt(t, n) || !xe && qf(Tp, n))) && It(r, i, n);
	}, n.addHook = function(e, t) {
		typeof t == "function" && Wf(I, e) && Df(I[e], t);
	}, n.removeHook = function(e, t) {
		if (Wf(I, e)) {
			if (t !== void 0) {
				let n = Tf(I[e], t);
				return n === -1 ? void 0 : kf(I[e], n, 1)[0];
			}
			return Ef(I[e]);
		}
	}, n.removeHooks = function(e) {
		Wf(I, e) && (I[e] = []);
	}, n.removeAllHooks = function() {
		I = {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: []
		};
	}, n;
}(), Np = "Refusing to render web experiment since the viewer is a likely bot", Pp = {
	ADD_ATTR: (e, t) => e === "target" && t === "a" || e === "form" && /^(button|fieldset|input|output|select|textarea)$/.test(t),
	ADD_URI_SAFE_ATTR: ["form"]
}, Fp, Ip = {
	icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) > -1,
	not_icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) === -1,
	regex: (e, t) => tu(t, e),
	not_regex: (e, t) => !tu(t, e),
	exact: (e, t) => t === e,
	is_not: (e, t) => t !== e
}, Lp = U("[Conversations]"), Rp = "Conversations not available yet.";
function zp(e, t) {
	var n, r, i, a, o, s, c;
	let l = (n = e == null ? void 0 : e.flushIntervalMs) == null ? 3e3 : n, u = (r = e == null ? void 0 : e.maxBufferSize) == null ? 100 : r, d = t != null && t.consoleCapture ? void 0 : (i = e == null ? void 0 : e.maxLogsPerInterval) == null ? 1e3 : i, f = k(d) ? Math.max(u, 2048) : Math.max(u, d), p = V(V({}, function() {
		let e = "", t = "";
		try {
			var n;
			let r = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0, i = r == null || (n = r.navigator) == null ? void 0 : n.userAgent;
			i && ([e, t] = ut(i));
		} catch (e) {}
		return function(e, t) {
			let n = function(e) {
				if (e) return {}.hasOwnProperty.call(Pr, e) ? Pr[e] : e;
			}(e);
			return V(V({}, n ? { "os.name": n } : {}), t ? { "os.version": t } : {});
		}(e, t);
	}()), e == null ? void 0 : e.resourceAttributes);
	return {
		serviceName: (a = (o = p == null ? void 0 : p["service.name"]) == null ? e == null ? void 0 : e.serviceName : o) == null ? t == null ? void 0 : t.serviceNameDefault : a,
		serviceVersion: (s = p == null ? void 0 : p["service.version"]) == null ? e == null ? void 0 : e.serviceVersion : s,
		environment: (c = p == null ? void 0 : p["deployment.environment"]) == null ? e == null ? void 0 : e.environment : c,
		resourceAttributes: p,
		beforeSend: e == null ? void 0 : e.beforeSend,
		flushIntervalMs: l,
		maxBufferSize: u,
		maxQueueSize: f,
		maxBatchRecordsPerPost: 100,
		rateCapWindowMs: l,
		maxLogsPerInterval: d,
		backgroundFlushBudgetMs: 0,
		terminationFlushBudgetMs: 0
	};
}
var Bp = [
	"debug",
	"log",
	"warn",
	"error",
	"info"
], Vp = (e) => {
	for (; e != null && e.__rrweb_original__;) e = e.__rrweb_original__;
	return e;
}, Hp = "console", Up = "__posthogHandledLogsRequestError", Wp = (e, t) => {
	let n = e instanceof Error ? e : Error(t);
	return n[Up] = !0, n;
}, Gp = (e) => !!e && typeof e == "object" && !0 === e[Up], Kp = class {
	get ff() {
		return V(V({}, this.R), {}, { error: (...e) => {
			e.some(Gp) || this.R.error(...e);
		} });
	}
	constructor(e, t) {
		var n;
		this.Jl = e, this.pf = t, this.name = "logs", this.gf = !1, this.mf = !1, this.yf = !1, this.R = U("[logs]"), this.Tc = [], this.bf = [], this.pv = 0, this._f = !1, this.Ai = !1, this.wf = [], this.kf = [], this.Sf = !1, this.xf = !1, this.$f = !1, this.Cf = () => {
			var e, t;
			this.Ai || (this.pv = 0, (e = this.Tf) == null || e.onReconnect(), (t = this.Mf) == null || t.onReconnect());
		}, this.gf = !!((n = e.get()) != null && n.captureConsoleLogs);
	}
	get If() {
		return !0;
	}
	Ef() {}
	Af() {
		if (!this.$f) {
			try {
				this.Ev = typeof window > "u" ? void 0 : window;
			} catch (e) {
				this.Ev = void 0;
			}
			this.Ev && (K(this.Ev, "online", this.Cf), this.$f = !0);
		}
	}
	Rf(e, t, n, r) {
		this.Af();
		let i = zp(this.Jl.get(), n);
		return [new Wr(this.Pf(e, t), i, this.ff, () => this.pf(), (e) => e(), void 0, r), i];
	}
	Of() {
		let e = this.Jl.get();
		var t;
		return this.Tf && this.Ff === e || ((t = this.Tf) == null || t.reset(), this.Ff = e, [this.Tf, this.Lf] = this.Rf(() => this.Tc, (e) => {
			this.Tc = e;
		})), this.Tf;
	}
	Df() {
		let e = this.Jl.get();
		var t;
		return this.Mf && this.Nf === e || ((t = this.Mf) == null || t.reset(), this.Nf = e, [this.Mf, this.jf] = this.Rf(() => this.bf, (e) => {
			this.bf = e;
		}, {
			serviceNameDefault: "posthog-browser-logs",
			consoleCapture: !0
		}, Hp)), this.Mf;
	}
	setup(e) {
		if (!this.Ai && !this._f) return this._f = !0, this.Gl = e, this.R = e.logger.createLogger("[logs]"), Md(e.kv.initialize(), () => {
			this.Ai || this.Av(e);
		});
	}
	Av(e) {
		var t;
		this.Af(), (t = this.Jl.get()) != null && t.captureConsoleLogs && (this.gf = !0), (this.gf || this.Jl.remoteConfigWillArrive && e.kv.get(this.Jl.captureHintKey)) && this.qf();
		let n = !1, r = e.onRemoteConfig((e) => {
			var t;
			n = e.ok && !0 === ((t = e.config.logs) == null ? void 0 : t.captureConsoleLogs), this.onRemoteConfig(e);
		});
		this.Ai ? r.dispose() : (this.la = r, n || this.loadIfEnabled());
	}
	dispose() {
		var e, t, n, r, i, a, o;
		this.Ai || (this.Ai = !0, this.Bf(), (e = this.la) == null || e.dispose(), this.la = void 0, this.Gl = void 0, this.yf = !1, (t = this.Ev) == null || t.removeEventListener("online", this.Cf), (n = this.zf) == null || n.call(this), this.zf = void 0, (r = this.Tf) == null || r.clearQueue(), (i = this.Mf) == null || i.clearQueue(), (a = this.Tf) == null || a.reset(), (o = this.Mf) == null || o.reset());
	}
	onRemoteConfig(e) {
		var t, n;
		if (this.Ai) return;
		let r = e.ok ? (t = e.config.logs) == null ? void 0 : t.captureConsoleLogs : void 0;
		N(r) ? this.Hf() : ((n = this.Gl) == null || n.kv.set(this.Jl.captureHintKey, !!r), r ? (this.gf = !0, this.mf || this.qf(), this.loadIfEnabled()) : this.Hf());
	}
	reset() {
		var e, t, n, r;
		this.Bf(), (e = this.Tf) == null || e.clearQueue(), this.Tc = [], (t = this.Tf) == null || t.reset(), (n = this.Mf) == null || n.clearQueue(), this.bf = [], (r = this.Mf) == null || r.reset(), this.pv = 0;
	}
	captureLog(e) {
		!this.Ai && this.Gl && this.Of().captureLog(e);
	}
	captureConsoleLog(e) {
		!this.Ai && this.Gl && this.Df().captureLog(e);
	}
	captureBufferedConsoleLog(e, t, n) {
		!this.Ai && this.Gl && this.Df().captureLog(e, {
			context: t,
			occurredAtMs: n
		});
	}
	Kd() {
		var e;
		this.Bf(), (e = this.Mf) == null || e.clearQueue(), this.bf = [];
	}
	Hf() {
		this.gf || this.Bf();
	}
	qf() {
		var e;
		if (this.Sf || !((e = this.Ev) != null && e.console)) return;
		let t = zp(this.Jl.get()).maxBufferSize, n = !0;
		this.kf.push(() => {
			n = !1;
		});
		for (let e of Bp) {
			let r;
			try {
				r = Vp(this.Ev.console[e]);
			} catch (e) {
				continue;
			}
			r && this.kf.push(ld(this.Ev.console, e, (i) => {
				let a = (...r) => {
					try {
						n && this.Uf(e, r, t);
					} catch (e) {}
					return i.apply(this.Ev.console, r);
				};
				return a.__rrweb_original__ = r, a;
			}));
		}
		this.Sf = !0, this.Wf = setTimeout(() => {
			this.Bf();
		}, 3e4);
	}
	Uf(e, t, n) {
		var r;
		if (this.Sf && !this.xf && t.length !== 0) if ((r = this.Gl) != null && r.canCapture) {
			if (n > this.wf.length) {
				this.xf = !0;
				try {
					this.wf.push({
						level: e,
						args: t,
						occurredAtMs: Date.now(),
						context: this.pf()
					});
				} finally {
					this.xf = !1;
				}
			}
		} else this.Bf();
	}
	Bf() {
		if (this.wf = [], this.Sf) {
			this.Sf = !1, this.Wf && (clearTimeout(this.Wf), this.Wf = void 0);
			for (let e of this.kf) e();
			this.kf = [];
		}
	}
	Gf() {
		let e = this.wf;
		return this.Bf(), e;
	}
	get logger() {
		return this.Vf || (this.Vf = {
			trace: (e, t) => this.captureLog({
				body: e,
				level: "trace",
				attributes: t
			}),
			debug: (e, t) => this.captureLog({
				body: e,
				level: "debug",
				attributes: t
			}),
			info: (e, t) => this.captureLog({
				body: e,
				level: "info",
				attributes: t
			}),
			warn: (e, t) => this.captureLog({
				body: e,
				level: "warn",
				attributes: t
			}),
			error: (e, t) => this.captureLog({
				body: e,
				level: "error",
				attributes: t
			}),
			fatal: (e, t) => this.captureLog({
				body: e,
				level: "fatal",
				attributes: t
			})
		}), this.Vf;
	}
	flushLogs(e) {
		this.Gl && (e ? this.Qf(e) : (this.Tf && this.Tf.flush().catch((e) => this.Jf(e)), this.Mf && this.Mf.flush().catch((e) => this.Jf(e))));
	}
	flush() {
		var e = this;
		return L(function* () {
			var t, n;
			let r = (t = e.Tf) == null ? void 0 : t.flush().catch((t) => e.Jf(t)), i = (n = e.Mf) == null ? void 0 : n.flush().catch((t) => e.Jf(t));
			yield r, yield i;
		})();
	}
	Jf(e) {
		Gp(e) || this.R.error("PostHog logs flush failed:", e);
	}
	loadIfEnabled() {
		if (this.Ai || !this.gf || this.mf || this.yf) return;
		let e = this.Ef();
		if (e) {
			this.yf = !0;
			try {
				e((e, t) => {
					if (this.yf = !1, !this.Ai && this.gf) if (e || !t) this.R.error("Could not load logs script", e), this.Bf();
					else {
						let e = this.Gf();
						this.zf = t.initialize(this.Gl), this.mf = !0, e.length > 0 && t.replay(this.Gl, e);
					}
				});
			} catch (e) {
				throw this.yf = !1, e;
			}
		} else this.Bf();
	}
	Pf(e, t) {
		let n = this.Gl;
		return {
			get isDisabled() {
				return !1;
			},
			get optedOut() {
				return !n.canCapture;
			},
			getPersistedProperty: (t) => t === m.LogsQueue ? e() : void 0,
			setPersistedProperty(e, n) {
				e === m.LogsQueue && t(n == null ? [] : n);
			},
			Hs: (e) => this.Hs(e),
			getLibraryId: () => n.library.name,
			getLibraryVersion: () => n.library.version
		};
	}
	Hs(e) {
		return new Promise((t) => {
			if (Gs(this.pv, 3)) return void t({
				kind: "fatal",
				error: Wp(void 0, "logs endpoint is unreachable, dropping batch")
			});
			let n = !1, r = (e) => {
				n || (n = !0, clearTimeout(i), t(e));
			}, i = setTimeout(() => {
				this.R.warn("Logs request timed out before receiving a response"), r({
					kind: "retry-later",
					error: Wp(void 0, "logs request timed out")
				});
			}, 9e4), a = this.If;
			this.Gl.sendRequest("/i/v1/logs", {
				method: "POST",
				query: { token: this.Gl.projectToken },
				body: e,
				compression: "best-available",
				timeoutMs: 6e4
			}).then((e) => {
				var t;
				let n = e.statusCode;
				this.Zf(n, a), n >= 200 && 300 > n ? r({ kind: "ok" }) : n === 413 ? r({ kind: "too-large" }) : n !== 0 && n !== 408 && n !== 429 && 500 > n ? r({
					kind: "fatal",
					error: /* @__PURE__ */ Error(`logs request failed with status ${n}`)
				}) : n === 0 ? (e.error || this.R.warn("Logs request failed before receiving an HTTP response"), r({
					kind: "retry-later",
					error: Wp(e.error, "logs request failed before receiving an HTTP response")
				})) : r({
					kind: "retry-later",
					error: (t = e.error) == null ? /* @__PURE__ */ Error(`logs request failed with status ${n}`) : t
				});
			}, (e) => {
				r({
					kind: "retry-later",
					error: e
				});
			});
		});
	}
	Zf(e, t) {
		(e !== 0 || t) && (this.pv = Ks(e, this.pv, 3, () => this.R.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes.")));
	}
	Qf(e) {
		this.Tc.length > 0 && this.Kf(e, this.Tc, this.Lf, this.Gl.library.name, (e) => {
			this.Tc = e;
		}), this.bf.length > 0 && this.Kf(e, this.bf, this.jf, Hp, (e) => {
			this.bf = e;
		});
	}
	Kf(e, t, n, r, i) {
		if (t.length === 0) return;
		let a = t.map((e) => e.record);
		i([]);
		let o = Br(a, zr(n, this.Gl.library.name, this.Gl.library.version), r, this.Gl.library.version);
		this.Gl.sendRequest("/i/v1/logs", {
			method: "POST",
			query: { token: this.Gl.projectToken },
			body: o,
			compression: "best-available",
			transport: e,
			timeoutMs: 6e4
		}).catch((e) => this.Jf(e));
	}
}, qp = U("[NetworkMetrics]"), Jp = {
	"http:": 80,
	"https:": 443
}, Yp = /* @__PURE__ */ new Set([
	"CONNECT",
	"DELETE",
	"GET",
	"HEAD",
	"OPTIONS",
	"PATCH",
	"POST",
	"PUT",
	"TRACE"
]), Xp = (e) => A(e) && e.toLowerCase().indexOf("text/event-stream") === 0, Zp = (e) => {
	try {
		return e();
	} catch (e) {
		return;
	}
}, Qp = (e, t) => {
	var n;
	let r = String(t);
	return {
		method: String(e).toUpperCase(),
		url: ((n = Us(r)) == null ? void 0 : n.href) || r
	};
}, $p = (e, t, n, r, i, a, o = !1) => {
	try {
		var s, c;
		let l = i();
		if (!l) return;
		let u = n || void 0, d = Au() - r, f = Us(t.url);
		if (f && f.protocol !== "http:" && f.protocol !== "https:") return;
		let p = {
			url: (f == null ? void 0 : f.href) || t.url,
			method: t.method
		}, m = E(l.name) ? l.name(p) : A(l.name) ? l.name : "http.client.request.duration";
		if (!m) return;
		let h = o && !u ? void 0 : ((e, t) => e ? 400 > e ? void 0 : String(e) : (t == null ? void 0 : t.name) || "_OTHER")(u, a), g = V(V(V(V(V({}, ((e) => {
			let t = Yp.has(e) ? e : "_OTHER";
			return V({ "http.request.method": t }, t === "_OTHER" && e !== t ? { "http.request.method_original": e } : {});
		})(p.method)), f ? ((e) => {
			return {
				"server.address": e.hostname.startsWith("[") && e.hostname.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname,
				"server.port": Number(e.port) || Jp[e.protocol],
				"url.scheme": e.protocol.slice(0, -1),
				"url.template": (t = e.pathname, t.split("/").map((e) => ((e) => /^\d+$/.test(e) || e.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(e))(e) ? ":id" : e).join("/"))
			};
			var t;
		})(f) : {}), u ? { "http.response.status_code": u } : {}), h ? { "error.type": h } : {}), (s = l.attributes) == null ? void 0 : s.call(l, p, {
			status: u,
			durationMs: d
		}));
		(c = e.metrics) == null || c.histogram(m, d, {
			unit: "ms",
			attributes: g
		});
	} catch (e) {
		qp.error("Failed to record network metric", e);
	}
}, em = () => {}, tm = (t, n) => E(e == null ? void 0 : e.fetch) ? ld(e, "fetch", (e) => function(...r) {
	let i = Au(), a = e.apply(this, r);
	if (!n()) return a;
	try {
		var o, s, c;
		let [e, l] = r, u = Qp((o = (s = l == null ? void 0 : l.method) == null ? e == null ? void 0 : e.method : s) == null ? "GET" : o, (c = e == null ? void 0 : e.url) == null ? e : c);
		return a.then((e) => (Xp(Zp(() => {
			var t;
			return e == null || (t = e.headers) == null ? void 0 : t.get("content-type");
		})) || $p(t, u, e == null ? void 0 : e.status, i, n, void 0, !0), e), (e) => {
			throw $p(t, u, void 0, i, n, e), e;
		});
	} catch (e) {
		return qp.error("Failed to observe fetch", e), a;
	}
}) : em, nm = (t, n) => {
	var r;
	let i = e == null || (r = e.XMLHttpRequest) == null ? void 0 : r.prototype;
	if (!i) return em;
	let a = /* @__PURE__ */ new WeakMap(), o = ld(i, "open", (e) => function(...t) {
		try {
			yl.has(this) || a.set(this, Qp(t[0], t[1]));
		} catch (e) {
			qp.error("Failed to observe XHR open", e);
		}
		return e.apply(this, t);
	}), s = ld(i, "send", (e) => function(...r) {
		let i, o;
		try {
			let e = a.get(this);
			if (e && n()) {
				let r = Au(), a = () => Xp(Zp(() => this.getResponseHeader("content-type"))), s = !1;
				o = () => {
					this.readyState === 2 && (s = a());
				}, i = () => {
					this.removeEventListener("loadend", i), this.removeEventListener("readystatechange", o), s || a() || $p(t, e, this.status, r, n);
				}, K(this, "readystatechange", o), K(this, "loadend", i);
			}
		} catch (e) {
			qp.error("Failed to observe XHR send", e);
		}
		try {
			return e.apply(this, r);
		} catch (e) {
			throw i && this.removeEventListener("loadend", i), o && this.removeEventListener("readystatechange", o), e;
		}
	});
	return () => {
		o(), s();
	};
}, rm = /* @__PURE__ */ new WeakMap(), im = /* @__PURE__ */ new Set([
	"$comment",
	"$defs",
	"$id",
	"$schema",
	"additionalProperties",
	"default",
	"definitions",
	"deprecated",
	"description",
	"examples",
	"minProperties",
	"properties",
	"readOnly",
	"required",
	"title",
	"type",
	"writeOnly"
]), am = {
	maxStringLength: 2048,
	truncationSuffix: "..."
}, om = {
	maxStringLength: 2048,
	truncationSuffix: "..."
};
function sm(e) {
	if (e) return !0 === e ? {
		intent: !0,
		model: !0
	} : {
		intent: !1 !== e.intent,
		model: !1 !== e.model
	};
}
function cm(e, t) {
	return {}.hasOwnProperty.call(e, t);
}
function lm(e, t) {
	let n = Object.create(e);
	return t && Object.defineProperty(n, "inputSchema", {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: t
	}), n;
}
function um(e, t, n = !1) {
	if (!A(e)) return;
	let r = e.trim();
	return r ? (n ? yr(r, am) : r).slice(0, t) : void 0;
}
function dm(e) {
	try {
		return D(e) && !0 === e.isError;
	} catch (e) {
		return !1;
	}
}
function fm(e) {
	return yr(e || "Unknown error", om).slice(0, 2048);
}
function pm(e, t) {
	try {
		return fm(t ? function(e) {
			try {
				return !D(e) || !T(e.content) ? void 0 : e.content.filter((e) => D(e) && e.type === "text" && A(e.text)).map((e) => e.text).join(" ").trim() || void 0;
			} catch (e) {
				return;
			}
		}(e) : D(e) && A(e.message) ? e.message : A(e) ? e : String(e));
	} catch (e) {
		return "Unknown error";
	}
}
function mm(e, t, n) {
	return t.errorResult ? [{
		type: "Error",
		value: n,
		mechanism: {
			type: "generic",
			handled: !0,
			synthetic: !0,
			exception_id: 0
		}
	}] : e.buildProperties(t.error, { handled: !0 }).$exception_list.map((e) => V(V({}, e), {}, { value: fm(e.value) }));
}
function hm(e, t) {
	if (t) return "Error";
	try {
		if (!D(e)) return "Error";
		let t = A(e.name) ? e.name.trim() : "", n = e.constructor;
		return t && t !== "Error" || !E(n) || n.name === "Error" || (t = n.name), (t || "Error").slice(0, 256);
	} catch (e) {
		return "Error";
	}
}
function gm(e, t) {
	return {
		message: pm(e, t),
		type: hm(e, t)
	};
}
rd.__defaultExtensionClasses = V({}, {
	featureFlags: class extends Qd {
		constructor(e) {
			let t = new ef(e.config, e.$c());
			super(t), this.name = Ou, this._instance = e, this.Yf = t;
		}
		get Tv() {
			return this._instance.persistence;
		}
		updateConfig(e, t) {
			this.Yf.update(e, t), this.Mv();
		}
	},
	sessionRecording: class {
		get Br() {
			return this._instance.config;
		}
		get Jc() {
			return this._instance.persistence;
		}
		get started() {
			var e;
			return !!((e = this.Xf) != null && e.isStarted);
		}
		get status() {
			var e, t;
			return this.isReplayOff ? gd : this.tp === "awaiting_config" || this.tp === "missing_config" || (e = (t = this.Xf) == null ? void 0 : t.status) == null ? this.tp : e;
		}
		constructor(t) {
			if (this._instance = t, this._forceAllowLocalhostNetworkCapture = !1, this.tp = gd, this.ep = void 0, this.np = !1, this.Yn = void 0, this.Xe = (() => {
				var t, n;
				if (!(r != null && r.visibilityState) || r.visibilityState === "visible") return !0;
				let i = e == null || (t = e.performance) == null || (n = t.getEntriesByType) == null ? void 0 : n.call(t, "visibility-state");
				return !(i != null && i.length) || i.some((e) => e.name === "visible");
			})(), this.un = () => {
				var e, t;
				(r == null ? void 0 : r.visibilityState) === "visible" && (this.Xe = !0, (e = this.Xf) == null || (t = e.setDocumentWasEverVisible) == null || t.call(e, !0));
			}, !this._instance.sessionManager) throw yd.error("started without valid sessionManager"), /* @__PURE__ */ Error("[SessionRecording] started without valid sessionManager. This is a bug.");
			if (this.Br.cookieless_mode === "always") throw Error("[SessionRecording] cannot be used with cookieless_mode=\"always\"");
			let n = this._instance.get_property(fa);
			var i;
			A(n) && n[0] === "!" && ((i = this.Jc) == null || i.unregister("$session_is_sampled")), r != null && r.addEventListener && K(r, "visibilitychange", this.un);
		}
		initialize() {
			this.startIfEnabledOrStop();
		}
		dispose({ discardBufferedEvents: e = !1 } = {}) {
			var t;
			this.np = !0, r == null || (t = r.removeEventListener) == null || t.call(r, "visibilitychange", this.un), e ? this.sp(!0) : this.stopRecording();
		}
		get rp() {
			var t;
			let n = !!((t = this._instance.get_property("$session_recording_remote_config")) != null && t.enabled), r = !this.Br.disable_session_recording, i = this.Br.disable_session_recording || this._instance.consent.isOptedOut();
			return e && n && r && !i;
		}
		get isReplayOff() {
			var e;
			return !!this.Br.disable_session_recording || this._instance.consent.isOptedOut() || !1 === ((e = this._instance.get_property("$session_recording_remote_config")) == null ? void 0 : e.enabled);
		}
		startIfEnabledOrStop(e) {
			if (this.np) return;
			var t;
			if (this.Xf) {
				if (this.Yn !== ((t = this.Br.session_recording) == null ? void 0 : t.selectMaskingFn)) Y.Dt(vd(this.Br)), this.Xf.discard({ discardProducerEvents: !0 }), this.Yn = void 0;
				else if (this.Xf.isStarted && this.rp) return void (this.op() || this.sp(!0));
			}
			let n = !k(Object.assign) && !k(Array.from);
			this.rp && n ? (this.lp(e), yd.info("starting")) : (this.tp = gd, this.stopRecording());
		}
		lp(e) {
			var t, n;
			if (this.rp) if (this.tp !== "awaiting_config" && this.tp !== "missing_config" && (this.tp = _d), !(d == null || (t = d.__PosthogExtensions__) == null || (t = t.rrweb) == null) && t.record && (n = d.__PosthogExtensions__) != null && n.initSessionRecording) this.ap(e);
			else {
				var r;
				let t = this._instance.sessionManager;
				(r = oi(this._instance)) == null || r(this._instance, this.up, (n) => {
					if (!this.np && this.rp && this._instance.sessionManager === t) return n ? (this._instance.register_for_session({ $sdk_debug_recording_script_not_loaded: !0 }), yd.error("could not load recorder", n)) : void this.ap(e);
					this.tp = "disabled";
				});
			}
		}
		stopRecording() {
			var e, t;
			(e = this.ep) == null || e.call(this), this.ep = void 0, (t = this.Xf) == null || t.stop();
		}
		sp(e = !1) {
			var t, n, r;
			e && (this.Yn || (t = this.Br.session_recording) != null && t.selectMaskingFn) && Y.Dt(vd(this.Br)), (n = this.ep) == null || n.call(this), this.ep = void 0, (r = this.Xf) == null || r.discard({ discardProducerEvents: e }), this.Yn = void 0;
		}
		cp() {
			var e, t;
			(e = this.Jc) == null || e.unregister("$session_is_sampled"), (t = this.Jc) == null || t.unregister("$replay_sample_rate");
		}
		hp(e, t) {
			if (N(e)) return null;
			let n = P(e) ? e : parseFloat(e);
			return typeof (r = n) != "number" || !Number.isFinite(r) || 0 > r || r > 1 ? (yd.warn(`${t} must be between 0 and 1. Ignoring invalid value:`, e), null) : n;
			var r;
		}
		dp(e) {
			if (this.Jc) {
				var t, n;
				let r = this.Jc, i = () => {
					var t;
					let n = !1 === e.sessionRecording ? void 0 : e.sessionRecording, i = this.hp((t = this.Br.session_recording) == null ? void 0 : t.sampleRate, "session_recording.sampleRate"), a = this.hp(n == null ? void 0 : n.sampleRate, "remote config sampleRate"), o = i == null ? a : i;
					N(o) && this.cp();
					let s = n == null ? void 0 : n.minimumDurationMilliseconds;
					r.register({ [ia]: V(V({
						cache_timestamp: Date.now(),
						enabled: !!n
					}, n), {}, {
						networkPayloadCapture: V({ capturePerformance: e.capturePerformance }, n == null ? void 0 : n.networkPayloadCapture),
						canvasRecording: {
							enabled: n == null ? void 0 : n.recordCanvas,
							fps: n == null ? void 0 : n.canvasFps,
							quality: n == null ? void 0 : n.canvasQuality
						},
						sampleRate: o,
						minimumDurationMilliseconds: k(s) ? null : s,
						endpoint: n == null ? void 0 : n.endpoint,
						triggerMatchType: n == null ? void 0 : n.triggerMatchType,
						masking: n == null ? void 0 : n.masking,
						urlTriggers: n == null ? void 0 : n.urlTriggers,
						version: n == null ? void 0 : n.version,
						triggerGroups: n == null ? void 0 : n.triggerGroups
					}) });
				};
				i(), (t = this.ep) == null || t.call(this), this.ep = (n = this._instance.sessionManager) == null ? void 0 : n.onSessionId(i);
			}
		}
		onRemoteConfig(e) {
			let t = e.ok ? e.config : void 0;
			t && "sessionRecording" in t ? !1 === t.sessionRecording ? (this.dp(t), this.sp()) : (this.dp(t), this.startIfEnabledOrStop()) : (this.tp === "awaiting_config" && (this.tp = "missing_config", this._instance.register_for_session({ [Ra]: !0 }), yd.warn("config refresh failed, recording will not start until page reload")), this.startIfEnabledOrStop());
		}
		log(e, t = "log") {
			var n;
			(n = this.Xf) != null && n.log ? this.Xf.log(e, t) : yd.warn("log called before recorder was ready");
		}
		get up() {
			var e, t;
			let n = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.get_property(ia);
			return (n == null || (t = n.scriptConfig) == null ? void 0 : t.script) || "lazy-recorder";
		}
		vp() {
			let e = this._instance.get_property(ia);
			if (!e) return !1;
			let t;
			try {
				t = typeof e == "object" ? e : JSON.parse(e);
			} catch (e) {
				return yd.warn("persisted remote config for session recording is invalid and will be ignored", e), !1;
			}
			return !N(t.cache_timestamp) && 36e5 >= Date.now() - t.cache_timestamp;
		}
		op() {
			var e, t, n;
			return !((e = this.Br.session_recording) != null && e.selectMaskingFn) || !(!0 !== ((t = d.__PosthogExtensions__) == null || (t = t.rrweb) == null || (t = t.record) == null ? void 0 : t.supportsSelectMasking) || !0 !== ((n = d.__PosthogExtensions__) == null || (n = n.initSessionRecording) == null ? void 0 : n.supportsSelectMasking) || this.Xf && !0 !== this.Xf.supportsSelectMasking) || (this.tp = gd, yd.error("Session recording has not started: the recorder does not support selectMaskingFn."), !1);
		}
		ap(e) {
			var t, n, r, i, a, o;
			if (this.np || !this.rp || !this._instance.sessionManager) return void (this.tp = gd);
			if (!((t = d.__PosthogExtensions__) != null && t.initSessionRecording)) return yd.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({ [La]: !0 });
			if (!this.op()) return;
			if (this.Xf || (this.Xf = (o = d.__PosthogExtensions__) == null ? void 0 : o.initSessionRecording(this._instance, this.Xe), this.Xf._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.op()) return void this.sp(!0);
			if (!this.vp()) {
				if (this.tp === "missing_config" || this.tp === "awaiting_config") return;
				this.tp = "awaiting_config", yd.info("persisted remote config is stale, requesting fresh config before starting"), new zc(this._instance).load();
				return;
			}
			this.tp = _d, (n = (r = this.Xf).setDocumentWasEverVisible) == null || n.call(r, this.Xe);
			let s = (i = this.Br.session_recording) == null ? void 0 : i.selectMaskingFn;
			this.Xf.start(e), this.Yn = s, this.Xf.isStarted && s !== ((a = this.Br.session_recording) == null ? void 0 : a.selectMaskingFn) && this.startIfEnabledOrStop();
		}
		onRRwebEmit(e) {
			var t, n;
			(t = this.Xf) == null || (n = t.onRRwebEmit) == null || n.call(t, e);
		}
		overrideLinkedFlag() {
			var e, t;
			this.Xf || (t = this.Jc) == null || t.register({ $replay_override_linked_flag: !0 }), (e = this.Xf) == null || e.overrideLinkedFlag();
		}
		overrideSampling() {
			var e, t;
			this.Xf || (t = this.Jc) == null || t.register({ $replay_override_sampling: !0 }), (e = this.Xf) == null || e.overrideSampling();
		}
		overrideTrigger(e) {
			var t, n;
			this.Xf || (n = this.Jc) == null || n.register({ [e === "url" ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0 }), (t = this.Xf) == null || t.overrideTrigger(e);
		}
		get sdkDebugProperties() {
			var e;
			if (this.isReplayOff) return { $recording_status: gd };
			let t = {};
			for (let e of bd) {
				var n;
				let r = (n = this._instance.sessionPersistence) == null ? void 0 : n.get_property(e);
				k(r) || (t[e] = r);
			}
			return V(V({}, t), ((e = this.Xf) == null ? void 0 : e.sdkDebugProperties) || { $recording_status: this.status });
		}
		tryAddCustomEvent(e, t) {
			var n;
			return !!((n = this.Xf) != null && n.tryAddCustomEvent(e, t));
		}
		flushBeforeIdentityReset() {
			var e, t;
			(e = this.Xf) == null || (t = e.flushBeforeIdentityReset) == null || t.call(e);
		}
	},
	autocapture: class extends Du {
		constructor(e) {
			super(new ad(e)), this.instance = e;
		}
	},
	historyAutocapture: class {
		constructor(e) {
			this.fp = !1, this._instance = e, this.pp = this.gp();
		}
		initialize() {
			this.startIfEnabled();
		}
		get isEnabled() {
			let e = this.mp();
			return !!(e.path || e.search || this.yp(e));
		}
		startIfEnabled() {
			this.isEnabled && (H.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
		}
		startIfEnabledOrStop() {
			this.stop(), this.pp = this.gp(), this.startIfEnabled();
		}
		stop() {
			this.bp && this.bp(), this.bp = void 0, this._p && this._p(), this._p = void 0, H.info("History API monitoring stopped");
		}
		monitorHistoryChanges() {
			e && e.history && (this.wp("pushState"), this.wp("replaceState"), this.kp(), this.yp() && this.Sp());
		}
		wp(t) {
			var n;
			if (!e || (n = e.history[t]) != null && n.__posthog_wrapped__) return;
			let r = this;
			ld(e.history, t, (n) => function(i, a, o) {
				var s;
				r.xp(o) && r.$p(), n.call(this, i, a, o), r.Cp(t, !r.fp && (e == null || (s = e.event) == null ? void 0 : s.type) !== "popstate");
			});
		}
		gp() {
			let t = e == null ? void 0 : e.location;
			if (t != null && t.pathname) return {
				pathname: t.pathname,
				search: t.search,
				hash: t.hash
			};
		}
		mp() {
			let e = this._instance.config.capture_pageview;
			return e === "history_change" ? { path: !0 } : D(e) ? e : {};
		}
		yp(e = this.mp()) {
			return !!e.hash && !this._instance.config.disable_capture_url_hashes;
		}
		Tp(e) {
			let t = this.mp(), n = this.pp;
			return !(!n || !(t.path && e.pathname !== n.pathname || t.search && e.search !== n.search || this.yp(t) && e.hash !== n.hash));
		}
		Cp(e, t = !1) {
			try {
				t || this.$p();
				let n = this.gp();
				if (!n) return;
				if (this.Tp(n)) {
					let n = () => this._instance.capture(Za, { navigation_type: e });
					t ? (this.Mp = n, Promise.resolve().then(() => this.$p())) : n();
				}
				this.pp = n;
			} catch (t) {
				H.error(`Error capturing ${e} pageview`, t);
			}
		}
		xp(t) {
			var n, r;
			return !(N(t) || !e) && ((n = Us(String(t))) == null ? void 0 : n.href) !== ((r = e.location) == null ? void 0 : r.href);
		}
		$p() {
			let e = this.Mp;
			if (e) {
				this.Mp = void 0, this.fp = !0;
				try {
					e();
				} catch (e) {
					H.error("Error capturing deferred pageview", e);
				} finally {
					this.fp = !1;
				}
				this.pp = this.gp();
			}
		}
		kp() {
			if (this.bp) return;
			let t = () => {
				this.Cp("popstate");
			};
			K(e, "popstate", t), this.bp = () => {
				e && e.removeEventListener("popstate", t);
			};
		}
		Sp() {
			if (this._p) return;
			let t = () => {
				this.Cp("hashchange");
			};
			K(e, "hashchange", t), this._p = () => {
				e && e.removeEventListener("hashchange", t);
			};
		}
	},
	heatmaps: class {
		get Br() {
			return this.instance.config;
		}
		constructor(e) {
			var t;
			this.Ip = !1, this.Ea = !1, this.Ep = !1, this.Ap = 0, this.Rp = null, this.instance = e, this.Ip = !!((t = this.instance.persistence) != null && t.props[Yi]), this.rageclicks = new _u(e.config.rageclick);
		}
		initialize() {
			this.startIfEnabled();
		}
		get flushIntervalMilliseconds() {
			let e = 5e3;
			return D(this.Br.capture_heatmaps) && this.Br.capture_heatmaps.flush_interval_milliseconds && (e = this.Br.capture_heatmaps.flush_interval_milliseconds), e;
		}
		get isEnabled() {
			return N(this.Br.capture_heatmaps) ? N(this.Br.enable_heatmaps) ? this.Ip : this.Br.enable_heatmaps : !1 !== this.Br.capture_heatmaps;
		}
		startIfEnabled() {
			if (this.isEnabled) {
				if (this.Ea) return;
				xd.info("starting..."), this.Pp(), this.un();
			} else {
				var e;
				clearInterval((e = this.Rp) == null ? void 0 : e), this.Op(), this.getAndClearBuffer();
			}
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("heatmaps" in t)) return;
			let n = !!t.heatmaps;
			this.instance.persistence && this.instance.persistence.register({ [Yi]: n }), this.Ip = n, this.startIfEnabled();
		}
		getAndClearBuffer() {
			let e = this.Rt;
			return this.Rt = void 0, e;
		}
		discardPending() {
			this.Ap = Date.now(), clearTimeout(this.Fp), this.Fp = void 0, this.getAndClearBuffer();
		}
		Lp(e) {
			Sd(e.originalEvent) && e.timestamp > this.Ap && this.jr(e.originalEvent, "deadclick");
		}
		un() {
			this.Rp && clearInterval(this.Rp), this.Rp = (r == null ? void 0 : r.visibilityState) === "visible" ? setInterval(this.Fc.bind(this), this.flushIntervalMilliseconds) : null;
		}
		Pp() {
			e && r && (this.Dp = this.Fc.bind(this), K(e, Xa, this.Dp), this.Np = (t) => this.jr(t || (e == null ? void 0 : e.event)), K(r, "click", this.Np, { capture: !0 }), this.jp = (t) => this.qp(t || (e == null ? void 0 : e.event)), K(r, "mousemove", this.jp, { capture: !0 }), this.Bp = new js(this.instance, ks, this.Lp.bind(this)), this.Bp.startIfEnabledOrStop(), this.zp = this.un.bind(this), K(r, Ai, this.zp), this.Ea = !0);
		}
		Op() {
			var t;
			e && r && (this.Dp && e.removeEventListener(Xa, this.Dp), this.Np && r.removeEventListener("click", this.Np, { capture: !0 }), this.jp && r.removeEventListener("mousemove", this.jp, { capture: !0 }), this.zp && r.removeEventListener(Ai, this.zp), clearTimeout(this.Fp), this.Fp = void 0, (t = this.Bp) == null || t.stop(), this.Ea = !1);
		}
		Hp(t, n) {
			let r = this.instance.scrollManager.scrollY(), i = this.instance.scrollManager.scrollX(), a = this.instance.scrollManager.scrollElement(), o = function(t, n, r) {
				let i = t;
				for (; i && zo(i) && !Bo(i, "body");) {
					if (i === r) return !1;
					let t;
					try {
						var a, o, s;
						t = (a = (o = (s = i.ownerDocument) == null ? void 0 : s.defaultView) == null ? e : o) == null ? void 0 : a.getComputedStyle(i).position;
					} catch (e) {
						return !1;
					}
					if (v(n, t)) return !0;
					i = Qo(i);
				}
				return !1;
			}(Jo(t), ["fixed", "sticky"], a);
			return {
				x: t.clientX + (o ? 0 : i),
				y: t.clientY + (o ? 0 : r),
				target_fixed: o,
				type: n
			};
		}
		jr(e, t = "click") {
			var n;
			if (Ro(e.target) || !Sd(e) || !this.instance.is_capturing()) return;
			let r = this.Hp(e, t);
			(n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, (/* @__PURE__ */ new Date()).getTime()) && us(Jo(e), this.instance.config.rageclick) && this.To(V(V({}, r), {}, { type: "rageclick" })), this.To(r);
		}
		qp(e) {
			!Ro(e.target) && Sd(e) && (k(this.Fp) && (this.Ep = this.instance.is_capturing()), clearTimeout(this.Fp), this.Fp = setTimeout(() => {
				this.Fp = void 0, this.Ep && this.instance.is_capturing() && this.To(this.Hp(e, "mousemove"));
			}, 500));
		}
		To(t) {
			if (!e) return;
			let n = this.Br.disable_capture_url_hashes ? wt(e.location.href) : e.location.href, r = this.Br.custom_personal_data_properties, i = Ys(n, this.Br.mask_personal_data_properties ? [...ec, ...r || []] : [], nc);
			this.Rt = this.Rt || {}, this.Rt[i] || (this.Rt[i] = []), this.Rt[i].push(t);
		}
		Fc() {
			this.Rt && !O(this.Rt) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
		}
	},
	deadClicksAutocapture: js,
	webVitalsAutocapture: class {
		constructor(t) {
			var n;
			this._instance = t, this.Ip = !1, this.Ea = !1, this.Rt = {
				navigationKey: void 0,
				url: void 0,
				metrics: [],
				firstMetricTimestamp: void 0
			}, this.Up = (e = !1) => {
				clearTimeout(this.Wp), this.Wp = void 0, this.Rt.metrics.length !== 0 && (this._instance.capture("$web_vitals", V({ $current_url: this.Rt.url }, this.Rt.metrics.reduce((e, t) => V(V({}, e), {}, {
					[`$web_vitals_${t.name}_event`]: V({}, t),
					[`$web_vitals_${t.name}_value`]: t.value
				}), {})), e ? {
					transport: "sendBeacon",
					send_instantly: !0
				} : void 0), this.Rt = {
					navigationKey: void 0,
					url: void 0,
					metrics: [],
					firstMetricTimestamp: void 0
				});
			}, this.Gp = (e) => {
				var t;
				if (this.Rt = this.Rt || {
					navigationKey: void 0,
					url: void 0,
					metrics: [],
					firstMetricTimestamp: void 0
				}, N(e == null ? void 0 : e.name) || N(e == null ? void 0 : e.value)) return void dd.error("Invalid metric received", e);
				let n = typeof e.navigationURL == "string" ? e.navigationURL : void 0, r = this.Vp(n);
				if (k(r)) return;
				let i = P(e.navigationId) || typeof e.navigationId == "string" ? `navigation:${e.navigationId}` : `url:${r}`;
				if (this.Qp && e.value >= this.Qp) return void dd.error("Ignoring metric with value >= " + this.Qp, e);
				this.Rt.navigationKey !== i && (this.Up(), this.Wp = setTimeout(this.Up, this.flushToCaptureTimeoutMs)), k(this.Rt.navigationKey) && (this.Rt.navigationKey = i, this.Rt.url = r), this.Rt.firstMetricTimestamp = k(this.Rt.firstMetricTimestamp) ? Date.now() : this.Rt.firstMetricTimestamp;
				let a = (t = this._instance.sessionManager) == null ? void 0 : t.checkAndGetSessionAndWindowId(!0), o = V(V(V({}, e), n ? { navigationURL: r } : {}), {}, {
					$current_url: r,
					timestamp: Date.now()
				});
				if (delete o.entries, D(e.attribution) && this.attributionMetrics.indexOf(e.name) > -1) {
					let t = {};
					for (let n of hd) {
						let r = n === "url" && typeof e.attribution[n] == "string" ? this.Vp(e.attribution[n]) : e.attribution[n];
						k(r) || (t[n] = r);
					}
					o.attribution = t;
				} else delete o.attribution;
				k(a) || (o.$session_id = a.sessionId, o.$window_id = a.windowId), this.Rt.metrics.push(o), this.Rt.metrics.length === this.allowedMetrics.length && this.Up();
			}, this.Jp = () => {
				if (this.Ea) return;
				let t, n, r, i, a = !1, o = d.__PosthogExtensions__, s = o == null ? void 0 : o.postHogWebVitalsCallbacksByFlavor, c = (s == null ? void 0 : s[this.Zp]) || (this.Zp === "web-vitals" && k(s) ? o == null ? void 0 : o.postHogWebVitalsCallbacks : void 0);
				if (!k(c)) {
					let e = c.withoutAttribution, o = this.attributionMetrics;
					a = !k(e), t = o.indexOf("LCP") > -1 ? c.onLCP : (e == null ? void 0 : e.onLCP) || c.onLCP, n = o.indexOf("CLS") > -1 ? c.onCLS : (e == null ? void 0 : e.onCLS) || c.onCLS, r = o.indexOf("FCP") > -1 ? c.onFCP : (e == null ? void 0 : e.onFCP) || c.onFCP, i = o.indexOf("INP") > -1 ? c.onINP : (e == null ? void 0 : e.onINP) || c.onINP;
				}
				if (!(t && n && r && i)) return void dd.error("web vitals callbacks not loaded - not starting");
				let l = { reportSoftNavs: this.useSoftNavs }, u = a && this.attributionMetrics.indexOf("INP") > -1 ? V(V({}, l), {}, { includeProcessedEventEntries: !1 }) : l;
				this.allowedMetrics.indexOf("LCP") > -1 && t(this.Gp.bind(this), l), this.allowedMetrics.indexOf("CLS") > -1 && n(this.Gp.bind(this), l), this.allowedMetrics.indexOf("FCP") > -1 && r(this.Gp.bind(this), l), this.allowedMetrics.indexOf("INP") > -1 && i(this.Gp.bind(this), u);
				let f = e == null ? void 0 : e.document;
				K(f, Ai, () => {
					(f == null ? void 0 : f.visibilityState) === "hidden" && this.Up(!0);
				}), K(e, "pagehide", () => this.Up(!0)), this.Ea = !0;
			}, this.Ip = !!((n = this._instance.persistence) != null && n.props[$i]), this.startIfEnabled();
		}
		get Kp() {
			return this._instance.config.capture_performance;
		}
		get allowedMetrics() {
			var e, t;
			let n = D(this.Kp) ? (e = this.Kp) == null ? void 0 : e.web_vitals_allowed_metrics : void 0;
			return N(n) ? ((t = this._instance.persistence) == null ? void 0 : t.props.$web_vitals_allowed_metrics) || pd : n;
		}
		get flushToCaptureTimeoutMs() {
			return (D(this.Kp) ? this.Kp.web_vitals_delayed_flush_ms : void 0) || 5e3;
		}
		get attributionMetrics() {
			let e = D(this.Kp) ? this.Kp.web_vitals_attribution : void 0;
			return ee(e) ? e ? pd : [] : T(e) ? e : md;
		}
		get useAttribution() {
			return this.attributionMetrics.length > 0;
		}
		get useSoftNavs() {
			let e = D(this.Kp) ? this.Kp.__preview_web_vitals_soft_navs : void 0;
			return e != null && e;
		}
		get Qp() {
			let e = D(this.Kp) && P(this.Kp.__web_vitals_max_value) ? this.Kp.__web_vitals_max_value : fd;
			return e > 0 && 6e4 >= e ? fd : e;
		}
		get isEnabled() {
			let e = i == null ? void 0 : i.protocol;
			if (e !== "http:" && e !== "https:") return dd.info("Web Vitals are disabled on non-http/https protocols"), !1;
			let t = D(this.Kp) ? this.Kp.web_vitals : ee(this.Kp) ? this.Kp : void 0;
			return ee(t) ? t : this.Ip;
		}
		startIfEnabled() {
			this.isEnabled && !this.Ea && (dd.info("enabled, starting..."), this.Ka(this.Jp));
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if (!("capturePerformance" in t)) return;
			let n = D(t.capturePerformance) && !!t.capturePerformance.web_vitals, r = D(t.capturePerformance) ? t.capturePerformance.web_vitals_allowed_metrics : void 0;
			this._instance.persistence && (this._instance.persistence.register({ [$i]: n }), this._instance.persistence.register({ [ra]: r })), this.Ip = n, this.startIfEnabled();
		}
		get Zp() {
			return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
		}
		Ka(e) {
			var t;
			let n = d.__PosthogExtensions__, r = this.Zp, i = n == null ? void 0 : n.postHogWebVitalsCallbacksByFlavor;
			i != null && i[r] || r === "web-vitals" && k(i) && n != null && n.postHogWebVitalsCallbacks ? e() : (t = oi(this._instance)) == null || t(this._instance, r, (t) => {
				t ? dd.error("failed to load script", t) : e();
			});
		}
		Vp(t) {
			let n = t || (e == null ? void 0 : e.location.href);
			if (!n) return void dd.error("Could not determine current URL");
			let r = this._instance.config.disable_capture_url_hashes ? wt(n) : n, i = this._instance.config.custom_personal_data_properties;
			return Ys(r, this._instance.config.mask_personal_data_properties ? [...ec, ...i || []] : [], nc);
		}
	},
	exceptionObserver: class {
		constructor(t) {
			var n;
			this.Jp = () => {
				var t;
				if (!e || !this.isEnabled || !((t = d.__PosthogExtensions__) != null && t.errorWrappingFunctions)) return;
				let n = d.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, r = d.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, i = d.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
				try {
					!this.Yp && this.Br.capture_unhandled_errors && (this.Yp = n(this.captureException.bind(this))), !this.Xp && this.Br.capture_unhandled_rejections && (this.Xp = r(this.captureException.bind(this))), !this.tg && this.Br.capture_console_errors && (this.tg = i(this.captureException.bind(this)));
				} catch (e) {
					od.error("failed to start", e), this.eg();
				}
			}, this._instance = t, this.ig = !!((n = this._instance.persistence) != null && n.props[Xi]), this.kt = new pe(V(V({}, function(e = {}) {
				var t, n, r, i;
				return {
					refillRate: (t = (n = e.exceptionRateLimiterRefillRate) == null ? e.__exceptionRateLimiterRefillRate : n) == null ? 1 : t,
					bucketSize: (r = (i = e.exceptionRateLimiterBucketSize) == null ? e.__exceptionRateLimiterBucketSize : i) == null ? 10 : r
				};
			}(this._instance.config.error_tracking)), {}, {
				refillInterval: 1e4,
				R: od
			})), this.Br = this.ng(), this.startIfEnabledOrStop();
		}
		ng() {
			let e = this._instance.config.capture_exceptions, t = {
				capture_unhandled_errors: !1,
				capture_unhandled_rejections: !1,
				capture_console_errors: !1
			};
			return D(e) ? t = V(V({}, t), e) : (k(e) ? this.ig : e) && (t = V(V({}, t), {}, {
				capture_unhandled_errors: !0,
				capture_unhandled_rejections: !0
			})), t;
		}
		get isEnabled() {
			return this.Br.capture_console_errors || this.Br.capture_unhandled_errors || this.Br.capture_unhandled_rejections;
		}
		startIfEnabledOrStop() {
			this.isEnabled ? (od.info("enabled"), this.eg(), this.Ka(this.Jp)) : this.eg();
		}
		Ka(e) {
			var t, n;
			(t = d.__PosthogExtensions__) != null && t.errorWrappingFunctions ? e() : (n = oi(this._instance)) == null || n(this._instance, "exception-autocapture", (t) => {
				if (t) return od.error("failed to load script", t);
				e();
			});
		}
		eg() {
			var e, t, n;
			(e = this.Yp) == null || e.call(this), this.Yp = void 0, (t = this.Xp) == null || t.call(this), this.Xp = void 0, (n = this.tg) == null || n.call(this), this.tg = void 0;
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			"autocaptureExceptions" in t && (this.ig = !!t.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({ [Xi]: this.ig }), this.Br = this.ng(), this.startIfEnabledOrStop());
		}
		onConfigChange() {
			this.Br = this.ng();
		}
		captureException(e) {
			try {
				var t, n, r;
				let i = (t = e == null || (n = e.$exception_list) == null || (n = n[0]) == null ? void 0 : n.type) == null ? "Exception" : t;
				if (this.kt.consumeRateLimit(i)) return void od.info("Skipping exception capture because of client rate limiting.", { exception: i });
				(r = this._instance.exceptions) == null || r.sendExceptionEvent(e);
			} catch (e) {}
		}
	},
	exceptions: class {
		constructor(e) {
			var t, n;
			this.sg = [], this.rg = new Rt([
				new on(),
				new gn(),
				new cn(),
				new sn(),
				new mn(),
				new pn(),
				new un(),
				new hn()
			], function(e, ...t) {
				return (n, r = 0) => {
					let i = [], a = n.split("\n"), o = Math.min(a.length, r + 1e3), s = [];
					for (let n = r; o > n; n++) {
						let r = a[n];
						if (r.length > 1024) continue;
						let o = Zt.test(r) ? r.replace(Zt, "$1") : r;
						if (!o.match(/\S*Error: /)) {
							for (let n of t) {
								let t = n(o, e);
								if (t) {
									i.push(t);
									let e = $t(i);
									if (e) {
										for (let t = s.length - 1; t >= 0; t--) {
											let n = s[t];
											if (e.start >= n.start + n.length) break;
											s.pop();
										}
										s.push(e);
									}
									break;
								}
							}
							if (rn(i, s) >= 50) break;
						}
					}
					let c = [...s].sort((e, t) => t.start - e.start), l = c[c.length - 1];
					if (l) {
						let e = tn(i, l);
						i.splice(l.start - e, e);
						for (let t of c) t.start -= e;
					}
					for (let e of c) en(i, e);
					return s.some((e) => e.start === 0 && i.length === e.length) && function(e) {
						let t = e.map((e) => `${e.function}|${e.filename}|${e.lineno}|${e.colno}|${e.module}`), n = 0;
						for (let e = 1; t.length > e; e++) an(t, e, n) && (n = e);
						e.push(...e.splice(0, n));
					}(i), function(e) {
						if (!e.length) return [];
						let t = Array.from(e);
						return t.reverse(), t.slice(0, 50).map((e) => {
							return V(V({}, e), {}, {
								filename: e.filename || (n = t, n[n.length - 1] || {}).filename,
								function: e.function || "?"
							});
							var n;
						});
					}(i);
				};
			}("web:javascript", qt, Xt)), this._instance = e, this.sg = (t = (n = this._instance.persistence) == null ? void 0 : n.get_property("$error_tracking_suppression_rules")) == null ? [] : t, this.og = xn(this.lg()), this.ag = new Sn(this.og);
		}
		onConfigChange() {
			this.og = xn(this.lg()), this.ag.setConfig(this.og);
		}
		onRemoteConfig(e) {
			var t, n, r;
			if (!e.ok) return;
			let i = e.config;
			if (!("errorTracking" in i)) return;
			let a = (t = (n = i.errorTracking) == null ? void 0 : n.suppressionRules) == null ? [] : t, o = (r = i.errorTracking) == null ? void 0 : r.captureExtensionExceptions;
			this.sg = a, this._instance.persistence && this._instance.persistence.register({
				[Zi]: this.sg,
				[Qi]: o
			});
		}
		get ug() {
			var e;
			let t = !!this._instance.get_property(Qi), n = this._instance.config.error_tracking.captureExtensionExceptions;
			return (e = n == null ? t : n) != null && e;
		}
		buildProperties(e, t) {
			return this.rg.buildFromUnknown(e, {
				syntheticException: t == null ? void 0 : t.syntheticException,
				mechanism: { handled: t == null ? void 0 : t.handled }
			});
		}
		addExceptionStep(e, t) {
			if (this.og.enabled) try {
				if (!A(e) || e.trim().length === 0) return void nf.warn("Ignoring exception step because message must be a non-empty string");
				let { sanitizedProperties: n, droppedKeys: r } = function(e) {
					if (!e) return {
						sanitizedProperties: {},
						droppedKeys: []
					};
					let t = [];
					return {
						sanitizedProperties: Object.keys(e).reduce((n, r) => yn.has(r) ? (t.push(r), n) : (n[r] = e[r], n), {}),
						droppedKeys: t
					};
				}(this.cg(t));
				r.length > 0 && nf.warn("Ignoring reserved exception step fields", { droppedKeys: r }), this.ag.add(V({
					[_n]: e,
					[vn]: (/* @__PURE__ */ new Date()).toISOString()
				}, n));
			} catch (e) {
				nf.error("Failed to add exception step. Ignoring breadcrumb.", e);
			}
		}
		sendExceptionEvent(e) {
			try {
				let t = e.$exception_list;
				if (this.hg(t)) {
					if (this.dg(t)) return this.vg("Exception dropped: matched a suppression rule"), void nf.info("Skipping exception capture because a suppression rule matched");
					if (!this.ug && this.fg(t)) return this.vg("Exception dropped: thrown by a browser extension"), void nf.info("Skipping exception capture because it was thrown by an extension");
					if (!this.ug && this.pg(t)) return this.vg("Exception dropped: thrown by an injected browser script"), void nf.info("Skipping exception capture because it was thrown by an injected browser script");
					if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.gg(t)) return this.vg("Exception dropped: thrown by the PostHog SDK"), void nf.info("Skipping exception capture because it was thrown by the PostHog SDK");
				}
				let n = this.og.enabled && N(e.$exception_steps) ? this.mg(e) : e, r = function() {
					if ("u" > typeof process) {
						var e;
						let t = (e = process.env.POSTHOG_RELEASE_ID) == null ? void 0 : e.trim();
						if (t) return t;
					}
					let t = globalThis._posthogReleaseId;
					return typeof t == "string" && t.length > 0 ? t : void 0;
				}();
				r && (n.$release_id = r);
				try {
					let e = this._instance.capture("$exception", n, {
						_noTruncate: !0,
						_batchKey: "exceptionEvent",
						jd: !0
					});
					return e && this.ag.clear(), e;
				} catch (e) {
					tf(e) || nf.error("Failed to capture exception event. Dropping this exception.", e), this.ag.clear();
					return;
				}
			} catch (e) {
				tf(e) || nf.error("Failed to process exception event. Ignoring this exception.", e);
				return;
			}
		}
		mg(e) {
			try {
				let t = this.ag.getAttachable();
				return t.length === 0 ? e : V(V({}, e), {}, { $exception_steps: t });
			} catch (t) {
				return nf.error("Failed to read buffered exception steps. Capturing exception without steps.", t), e;
			}
		}
		vg(e) {
			this.og.enabled && this.ag.add({
				[_n]: e,
				[vn]: (/* @__PURE__ */ new Date()).toISOString()
			});
		}
		cg(e) {
			return D(e) ? V({}, e) : {};
		}
		lg() {
			var e, t;
			return (e = (t = this._instance.config.error_tracking) == null ? void 0 : t.exception_steps) == null ? {} : e;
		}
		dg(e) {
			if (e.length === 0) return !1;
			try {
				let t = e.reduce((e, { type: t, value: n }) => (A(t) && t.length > 0 && e.$exception_types.push(t), A(n) && n.length > 0 && e.$exception_values.push(n), e), {
					$exception_types: [],
					$exception_values: []
				});
				return this.sg.some((e) => {
					let n = e.values.map((e) => {
						let n = ru[e.operator], r = t[e.key];
						if (!n || !r) return !1;
						let i = T(e.value) ? e.value : [e.value];
						return i.length > 0 && n(i, r);
					});
					return e.type === "OR" ? n.some(Boolean) : n.every(Boolean);
				});
			} catch (e) {
				return nf.warn("Failed to evaluate suppression rules. Capturing the exception.", e), !1;
			}
		}
		fg(e) {
			let t = e.flatMap((e) => {
				var t, n;
				return (t = (n = e.stacktrace) == null ? void 0 : n.frames) == null ? [] : t;
			}), n = t.filter(({ filename: e }) => !!e && of.some((t) => e.startsWith(t)));
			return n.length !== 0 && (!n.every(({ filename: e }) => !!e && e.startsWith(rf)) || e.some(({ type: e, value: t }) => e === "NoResponse" || A(t) && af.some(({ value: e, exact: n }) => n ? t === e : t.includes(e))) && !t.some(({ in_app: e, filename: t }) => e && !(t != null && t.startsWith(rf))));
		}
		pg(e) {
			return e.some(({ value: e }) => A(e) && sf.some((t) => e.includes(t)));
		}
		gg(e) {
			if (e.length > 0) {
				var t, n, r, i;
				let a = (t = (n = e[0].stacktrace) == null ? void 0 : n.frames) == null ? [] : t, o = a[a.length - 1];
				return (r = o == null || (i = o.filename) == null ? void 0 : i.includes("posthog.com/static")) != null && r;
			}
			return !1;
		}
		hg(e) {
			return !N(e) && T(e);
		}
	},
	productTours: class {
		get Jc() {
			return this._instance.persistence;
		}
		constructor(e) {
			this.yg = null, this.bg = null, this._instance = e;
		}
		initialize() {
			this.loadIfEnabled();
		}
		onRemoteConfig(e) {
			if (!e.ok) return;
			let t = e.config;
			if ("productTours" in t) {
				var n, r;
				if (this.Jc && this.Jc.register({ [ta]: !!t.productTours }), !wd(this._instance)) return !this.yg && N((n = this.Jc) == null ? void 0 : n.props.ph_product_tours) || Cd.info("product tours disabled; stopping and clearing cached tours"), (r = this.yg) == null || r.stop(), this.yg = null, void this.clearCache();
				this.loadIfEnabled();
			}
		}
		loadIfEnabled() {
			!this.yg && wd(this._instance) && this.Ka(() => this._g());
		}
		Ka(e) {
			var t, n;
			(t = d.__PosthogExtensions__) != null && t.generateProductTours ? e() : (n = oi(this._instance)) == null || n(this._instance, "product-tours", (t) => {
				t ? Cd.error("Could not load product tours script", t) : e();
			});
		}
		_g() {
			var e;
			!this.yg && (e = d.__PosthogExtensions__) != null && e.generateProductTours && (this.yg = d.__PosthogExtensions__.generateProductTours(this._instance, !0));
		}
		getProductTours(e, t = !1) {
			if (T(this.bg) && !t) return void e(this.bg, { isLoaded: !0 });
			let n = this.Jc;
			if (n) {
				let r = n.props[ya];
				if (T(r) && !t) return this.bg = r, void e(r, { isLoaded: !0 });
			}
			this._instance._send_request({
				url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
				method: "GET",
				timestampMode: "query",
				callback: (t) => {
					if (!wd(this._instance)) return void e([], { isLoaded: !0 });
					let r = t.statusCode;
					if (r !== 200 || !t.json) {
						let n = `Product Tours API could not be loaded, status: ${r}`;
						r === 0 ? t.error || Cd.warn(n) : Cd.error(n), e([], {
							isLoaded: !1,
							error: n
						});
						return;
					}
					let i = T(t.json.product_tours) ? t.json.product_tours : [];
					this.bg = i, n && n.register({ [ya]: i }), e(i, { isLoaded: !0 });
				}
			});
		}
		getActiveProductTours(e) {
			N(this.yg) ? e([], {
				isLoaded: !1,
				error: "Product tours not loaded"
			}) : this.yg.getActiveProductTours(e);
		}
		showProductTour(e) {
			var t;
			(t = this.yg) == null || t.showTourById(e);
		}
		previewTour(e) {
			this.yg ? this.yg.previewTour(e) : this.Ka(() => {
				var t;
				this._g(), (t = this.yg) == null || t.previewTour(e);
			});
		}
		dismissProductTour() {
			var e;
			(e = this.yg) == null || e.dismissTour("user_clicked_skip");
		}
		nextStep() {
			var e;
			(e = this.yg) == null || e.nextStep();
		}
		previousStep() {
			var e;
			(e = this.yg) == null || e.previousStep();
		}
		clearCache() {
			var e;
			this.bg = null, (e = this.Jc) == null || e.unregister("ph_product_tours");
		}
		resetTour(e) {
			var t;
			(t = this.yg) == null || t.resetTour(e);
		}
		resetAllTours() {
			var e;
			(e = this.yg) == null || e.resetAllTours();
		}
		cancelPendingTour(e) {
			var t;
			(t = this.yg) == null || t.cancelPendingTour(e);
		}
	},
	siteApps: class {
		constructor(e) {
			this._instance = e, this.wg = 0, this.kg = [], this.apps = {};
		}
		get isEnabled() {
			return !!this._instance.config.opt_in_site_apps && !this._instance.config.require_subresource_integrity;
		}
		Sg(e, t) {
			if (!t) return;
			let n = this.globalsForEvent(t);
			this.kg.push(n), this.kg.length > 1e3 && (this.kg = this.kg.slice(10));
		}
		get siteAppLoaders() {
			var e;
			return (e = d._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.siteApps;
		}
		initialize() {
			if (this._instance.config.opt_in_site_apps && !this.isEnabled && Ed.critical("opt_in_site_apps is ignored: require_subresource_integrity disables site apps"), this.isEnabled) {
				let e = this._instance._addCaptureHook(this.Sg.bind(this));
				this.xg = () => {
					e(), this.kg = [], this.xg = void 0;
				};
			}
		}
		globalsForEvent(e) {
			var t, n, r, i, a, o, s;
			if (!e) throw Error("Event payload is required");
			let c = {}, l = this._instance.get_property("$groups") || [], u = this._instance.get_property("$stored_group_properties") || {};
			for (let [e, t] of Object.entries(u)) c[e] = {
				id: l[e],
				type: e,
				properties: t
			};
			let { $set_once: d, $set: f } = e;
			return {
				event: V(V({}, Rn(e, Td)), {}, {
					properties: V(V(V({}, e.properties), f ? { $set: V(V({}, (t = (n = e.properties) == null ? void 0 : n.$set) == null ? {} : t), f) } : {}), d ? { $set_once: V(V({}, (r = (i = e.properties) == null ? void 0 : i.$set_once) == null ? {} : r), d) } : {}),
					elements_chain: (a = (o = e.properties) == null ? void 0 : o.$elements_chain) == null ? "" : a,
					distinct_id: (s = e.properties) == null ? void 0 : s.distinct_id
				}),
				person: { properties: this._instance.get_property("$stored_person_properties") },
				groups: c
			};
		}
		$g(e) {
			var t;
			let n = (t = e.tagName) == null ? void 0 : t.toLowerCase();
			return n === "style" && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(e) || (Ed.error("prepare_external_dependency_stylesheet returned null"), null) : n === "script" && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(e) || (Ed.error("prepare_external_dependency_script returned null"), null) : e;
		}
		Cg() {
			var e, t, n, i, a, o, s, c;
			if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
			let l = r == null ? void 0 : r.defaultView, u = l == null || (e = l.Node) == null ? void 0 : e.prototype;
			if (!l || !u) return () => {};
			if (this.wg++, this.Tg) return this.Mg();
			let d = [], f = this, p = /* @__PURE__ */ new WeakSet(), m = (e, t, n) => {
				if (!(e != null && e[t])) return;
				let r = e[t];
				e[t] = n(r), d.push(() => {
					e[t] = r;
				});
			}, h = (e) => {
				if (p.has(e)) return e;
				let t = f.$g(e);
				return t && p.add(t), t;
			}, g = (e) => e.map((e) => typeof e == "string" ? e : h(e)).filter((e) => !M(e));
			return m(u, "appendChild", (e) => function(t) {
				let n = h(t);
				return n ? e.call(this, n) : t;
			}), m(u, "insertBefore", (e) => function(t, n) {
				let r = h(t);
				return r ? e.call(this, r, n) : t;
			}), m(u, "replaceChild", (e) => function(t, n) {
				let r = h(t);
				return r ? e.call(this, r, n) : n;
			}), [
				(t = l.Element) == null ? void 0 : t.prototype,
				(n = l.Document) == null ? void 0 : n.prototype,
				(i = l.DocumentFragment) == null ? void 0 : i.prototype
			].forEach((e) => {
				m(e, "append", (e) => function(...t) {
					return e.apply(this, g(t));
				}), m(e, "prepend", (e) => function(...t) {
					return e.apply(this, g(t));
				});
			}), [
				(a = l.Element) == null ? void 0 : a.prototype,
				(o = l.CharacterData) == null ? void 0 : o.prototype,
				(s = l.DocumentType) == null ? void 0 : s.prototype
			].forEach((e) => {
				m(e, "before", (e) => function(...t) {
					return e.apply(this, g(t));
				}), m(e, "after", (e) => function(...t) {
					return e.apply(this, g(t));
				}), m(e, "replaceWith", (e) => function(...t) {
					let n = g(t);
					return t.length && !n.length ? void 0 : e.apply(this, n);
				});
			}), m((c = l.Element) == null ? void 0 : c.prototype, "insertAdjacentElement", (e) => function(t, n) {
				let r = h(n);
				return r ? e.call(this, t, r) : null;
			}), this.Tg = () => {
				d.forEach((e) => e()), this.Tg = void 0;
			}, this.Mg();
		}
		Mg() {
			let e = !1;
			return () => {
				var t;
				e || (e = !0, this.wg--, this.wg === 0 && ((t = this.Tg) == null || t.call(this)));
			};
		}
		Ig(e, t = !0) {
			let n = this.Cg();
			try {
				let r = e(n);
				return t && n(), r;
			} catch (e) {
				throw n(), e;
			}
		}
		setupSiteApp(e) {
			let t = this.apps[e.id], n = () => {
				var n;
				!t.errored && this.kg.length && (Ed.info(`Processing ${this.kg.length} events for site app with id ${e.id}`), this.kg.forEach((e) => this.Ig(() => {
					var n;
					return (n = t.processEvent) == null ? void 0 : n.call(t, e);
				})), t.processedBuffer = !0), Object.values(this.apps).every((e) => e.processedBuffer || e.errored) && ((n = this.xg) == null || n.call(this));
			}, r = !1, i = (i) => {
				t.errored = !i, t.loaded = !0, Ed.info(`Site app with id ${e.id} ${i ? "loaded" : "errored"}`), r && n();
			};
			try {
				let { processEvent: n } = this.Ig((t) => e.init({
					posthog: this._instance,
					callback(e) {
						t(), i(e);
					}
				}), !1);
				n && (t.processEvent = n), r = !0;
			} catch (t) {
				Ed.error(Dd + e.id, t), i(!1);
			}
			if (r && t.loaded) try {
				n();
			} catch (n) {
				Ed.error(`Error while processing buffered events PostHog app with config id ${e.id}`, n), t.errored = !0;
			}
		}
		Eg() {
			let e = this.siteAppLoaders || [];
			for (let t of e) this.apps[t.id] = {
				id: t.id,
				loaded: !1,
				errored: !1,
				processedBuffer: !1
			};
			for (let t of e) this.setupSiteApp(t);
		}
		Ag(e) {
			if (Object.keys(this.apps).length === 0) return;
			let t = this.globalsForEvent(e);
			for (let n of Object.values(this.apps)) try {
				this.Ig(() => {
					var e;
					return (e = n.processEvent) == null ? void 0 : e.call(n, t);
				});
			} catch (t) {
				Ed.error(`Error while processing event ${e.event} for site app ${n.id}`, t);
			}
		}
		onRemoteConfig(e) {
			var t, n, r;
			if ((t = this.siteAppLoaders) != null && t.length) return this.isEnabled ? (this.Eg(), void this._instance.on("eventCaptured", (e) => this.Ag(e))) : void Ed.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
			if ((n = this.xg) == null || n.call(this), !e.ok) return;
			let i = e.config;
			if ((r = i.siteApps) != null && r.length) if (this.isEnabled) for (let { id: e, url: t } of i.siteApps) {
				var a, o;
				d[`__$$ph_site_app_${e}`] = this._instance, (a = d.__PosthogExtensions__) == null || (o = a.loadSiteApp) == null || o.call(a, this._instance, t, (t) => {
					if (t) return Ed.error(Dd + e, t);
				});
			}
			else Ed.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
		}
	},
	surveys: class extends Fd {
		constructor(e) {
			super(new Id(e));
		}
	},
	tracingHeaders: class {
		constructor(e) {
			this._instance = e, this.Rg = void 0, this.Pg = void 0, this.Og = void 0, this.Fg = void 0, this.Lg = [], this.Jp = () => {
				let { hostnames: e, traceparentTargets: t } = this.Dg();
				var n, r;
				e || t ? (e || T(this.Og) || (this.Og = []), this.Fg !== this.Og && (this.eg(), this.Fg = this.Og), k(this.Rg) && (this.Rg = (n = d.__PosthogExtensions__) == null || (n = n.tracingHeadersPatchFns) == null ? void 0 : n._patchXHR(this.Og, () => this._instance.get_distinct_id(), this._instance.sessionManager, this.Lg)), k(this.Pg) && (this.Pg = (r = d.__PosthogExtensions__) == null || (r = r.tracingHeadersPatchFns) == null ? void 0 : r._patchFetch(this.Og, () => this._instance.get_distinct_id(), this._instance.sessionManager, this.Lg))) : this.eg();
			};
		}
		initialize() {
			this.startIfEnabledOrStop();
		}
		Ka(e) {
			var t, n;
			(t = d.__PosthogExtensions__) != null && t.tracingHeadersPatchFns ? e() : (n = oi(this._instance)) == null || n(this._instance, "tracing-headers", (t) => {
				if (t) return ud.error("failed to load script", t);
				e();
			});
		}
		Ng() {
			var e, t;
			return (e = (t = this._instance.config.tracing_headers) == null ? this._instance.config.addTracingHeaders : t) == null ? this._instance.config.__add_tracing_headers : e;
		}
		jg() {
			let e = this.Ng();
			return T(e) ? (T(this.Og) ? this.Og.splice(0, this.Og.length, ...e) : this.Og = [...e], e.length > 0 ? this.Og : void 0) : !T(this.Og) || (this.Og.splice(0), e) ? (this.Og = e || void 0, this.Og) : void 0;
		}
		qg() {
			let e = this._instance.config.trace_propagation_targets, t = T(e) ? e.filter((e) => A(e) && !!e) : [];
			return this.Lg.splice(0, this.Lg.length, ...t), t.length > 0 ? this.Lg : void 0;
		}
		Dg() {
			return {
				hostnames: this.jg(),
				traceparentTargets: this.qg()
			};
		}
		eg() {
			var e, t;
			(e = this.Rg) == null || e.call(this), (t = this.Pg) == null || t.call(this), this.Rg = void 0, this.Pg = void 0;
		}
		startIfEnabledOrStop() {
			let { hostnames: e, traceparentTargets: t } = this.Dg();
			e || t ? this.Ka(this.Jp) : this.eg();
		}
	},
	toolbar: class {
		constructor(e) {
			this.instance = e;
		}
		Bg(e) {
			d.ph_toolbar_state = e;
		}
		zg() {
			var e;
			return (e = d.ph_toolbar_state) == null ? 0 : e;
		}
		initialize() {
			return this.maybeLoadToolbar();
		}
		maybeLoadToolbar(t = void 0, n = void 0, i = void 0) {
			var a, o;
			if (co(this.instance.config) || !e || !r) return !1;
			t = (a = t) == null ? e.location : a, i = (o = i) == null ? e.history : o;
			try {
				if (!n) {
					try {
						e.localStorage.setItem("test", "test"), e.localStorage.removeItem("test");
					} catch (e) {
						return !1;
					}
					n = e == null ? void 0 : e.localStorage;
				}
				let r = Ld || Xs(t.hash, "__posthog") || Xs(t.hash, "state"), a, o = r ? Tt(() => JSON.parse(atob(decodeURIComponent(r)))) || Tt(() => JSON.parse(decodeURIComponent(r))) : null;
				return o && o.action === "ph_authorize" ? (a = o, a.source = "url", a && Object.keys(a).length > 0 && (o.desiredHash ? t.hash = o.desiredHash : i ? i.replaceState(i.state, "", t.pathname + t.search) : t.hash = "")) : (a = JSON.parse(n.getItem(Rd) || "{}"), a.source = "localstorage", delete a.userIntent), !(!a.token || this.instance.config.token !== a.token || (this.loadToolbar(a), 0));
			} catch (e) {
				return !1;
			}
		}
		Hg(e) {
			let t = d.ph_load_toolbar || d.ph_load_editor;
			!N(t) && E(t) ? t(e, this.instance) : zd.warn("No toolbar load function found");
		}
		loadToolbar(t) {
			let n = !!(r != null && r.getElementById("__POSTHOG_TOOLBAR__"));
			if (!e || n) return !1;
			let i = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics, a = V(V({ token: this.instance.config.token }, t), {}, { apiURL: this.instance.requestRouter.endpointFor("ui") }, i ? { instrument: !1 } : {});
			if (e.localStorage.setItem(Rd, JSON.stringify(V(V({}, a), {}, { source: void 0 }))), this.zg() === 2) this.Hg(a);
			else if (this.zg() === 0) {
				var o;
				this.Bg(1), (o = oi(this.instance)) == null || o(this.instance, "toolbar", (e) => {
					if (e) return zd.error("[Toolbar] Failed to load", e), void this.Bg(0);
					this.Bg(2), this.Hg(a);
				}), K(e, "turbolinks:load", () => {
					this.Bg(0), this.loadToolbar(a);
				});
			}
			return !0;
		}
		Ug(e) {
			return this.loadToolbar(e);
		}
		maybeLoadEditor(e = void 0, t = void 0, n = void 0) {
			return this.maybeLoadToolbar(e, t, n);
		}
	},
	experiments: class t {
		get Br() {
			return this._instance.config;
		}
		constructor(e) {
			this._instance = e, this.getWebExperimentsAndEvaluateDisplayLogic = (e = !1) => {
				this.getWebExperiments((e) => {
					t.Wg("retrieved web experiments from the server"), this.Gg = /* @__PURE__ */ new Map(), e.forEach((e) => {
						if (e.feature_flag_key) {
							var n;
							this.Gg && (t.Wg("setting flag key ", e.feature_flag_key, " to web experiment ", e), (n = this.Gg) == null || n.set(e.feature_flag_key, e));
							let r = this._instance.getFeatureFlag(e.feature_flag_key);
							A(r) && e.variants[r] && this.Vg(e, r);
						} else if (e.variants) for (let n in e.variants) {
							let r = e.variants[n];
							t.Qg(r, this._instance) && this.Jg(e.name, n, r.transforms);
						}
					});
				}, e);
			}, this._instance.onFeatureFlags((e) => {
				this.onFeatureFlags(e);
			});
		}
		initialize() {}
		onFeatureFlags(e) {
			if (this._is_bot()) t.Wg(Np);
			else if (!this.Br.disable_web_experiments) {
				if (N(this.Gg)) return this.Gg = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
				t.Wg("applying feature flags", e), e.forEach((e) => {
					var t;
					if (this.Gg && (t = this.Gg) != null && t.has(e)) {
						var n;
						let t = this._instance.getFeatureFlag(e), r = (n = this.Gg) == null ? void 0 : n.get(e);
						t && r != null && r.variants[t] && this.Vg(r, t);
					}
				});
			}
		}
		previewWebExperiment() {
			let e = t.getWindowLocation();
			if (e != null && e.search) {
				let n = Js(e == null ? void 0 : e.search, "__experiment_id"), r = Js(e == null ? void 0 : e.search, "__experiment_variant");
				n && r && (t.Wg(`previewing web experiments ${n} && ${r}`), this.getWebExperiments((e) => {
					this.Zg(parseInt(n), r, e);
				}, !1, !0));
			}
		}
		loadIfEnabled() {
			this.Br.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
		}
		getWebExperiments(e, t, n) {
			if (this.Br.disable_web_experiments && !n) return e([]);
			let r = this._instance.get_property("$web_experiments");
			if (r && !t) return e(r);
			this._instance._send_request({
				url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this.Br.token}`),
				method: "GET",
				timestampMode: "query",
				callback: (t) => e(t.statusCode === 200 && t.json && t.json.experiments || [])
			});
		}
		Zg(e, n, r) {
			let i = r.filter((t) => t.id === e);
			i && i.length > 0 && (t.Wg(`Previewing web experiment [${i[0].name}] with variant [${n}]`), this.Jg(i[0].name, n, i[0].variants[n].transforms));
		}
		Vg(e, n) {
			let r = e.variants[n];
			t.Kg(r, this._instance) ? this.Jg(e.name, n, r.transforms) : t.Wg(`skipping variant ${n} of experiment ${e.name} because this page does not match its url conditions`);
		}
		static Qg(e, n) {
			return !N(e.conditions) && t.Kg(e, n) && t.Yg(e);
		}
		static Kg(e, n) {
			var r;
			if (N(e.conditions) || N((r = e.conditions) == null ? void 0 : r.url)) return !0;
			let i = t.getWindowLocation();
			if (i) {
				var a, o, s;
				let t = Lo(n, i.href);
				return !((a = e.conditions) != null && a.url) || Ip[(o = (s = e.conditions) == null ? void 0 : s.urlMatchType) == null ? "icontains" : o](e.conditions.url, t);
			}
			return !1;
		}
		static getWindowLocation() {
			return e == null ? void 0 : e.location;
		}
		static Yg(e) {
			var t;
			if (N(e.conditions) || N((t = e.conditions) == null ? void 0 : t.utm)) return !0;
			let n = ic();
			if (n.utm_source) {
				var r, i, a, o, s, c, l, u;
				let t = !(!((r = e.conditions) == null || (r = r.utm) == null) && r.utm_campaign) || ((i = e.conditions) == null || (i = i.utm) == null ? void 0 : i.utm_campaign) == n.utm_campaign, d = !(!((a = e.conditions) == null || (a = a.utm) == null) && a.utm_source) || ((o = e.conditions) == null || (o = o.utm) == null ? void 0 : o.utm_source) == n.utm_source, f = !(!((s = e.conditions) == null || (s = s.utm) == null) && s.utm_medium) || ((c = e.conditions) == null || (c = c.utm) == null ? void 0 : c.utm_medium) == n.utm_medium, p = !(!((l = e.conditions) == null || (l = l.utm) == null) && l.utm_term) || ((u = e.conditions) == null || (u = u.utm) == null ? void 0 : u.utm_term) == n.utm_term;
				return t && f && p && d;
			}
			return !1;
		}
		static Wg(e, ...t) {
			H.info(`[WebExperiments] ${e}`, t);
		}
		static Xg(e, ...t) {
			H.warn(`[WebExperiments] ${e}`, t);
		}
		static tm(e) {
			(e.namespaceURI === "http://www.w3.org/1999/xhtml" && e.localName === "template" ? e.content : e).querySelectorAll("a[target], template").forEach((e) => {
				var n;
				if (e.localName === "template") return void (e.namespaceURI === "http://www.w3.org/1999/xhtml" && t.tm(e));
				if (e.namespaceURI !== "http://www.w3.org/1999/xhtml" || ((n = e.getAttribute("target")) == null ? void 0 : n.toLowerCase()) !== "_blank") return void e.removeAttribute("target");
				let r = (e.getAttribute("rel") || "").split(/\s+/).filter((e) => e && !/^(opener|noopener)$/i.test(e));
				r.push("noopener"), e.setAttribute("rel", r.join(" "));
			});
		}
		Jg(e, n, r) {
			this._is_bot() ? t.Wg(Np) : n === "control" ? t.Wg("Control variants leave the page unmodified.") : r.forEach((r) => {
				if (r.selector) {
					var i;
					t.Wg(`applying transform of variant ${n} for experiment ${e} `, r);
					let a = (i = document) == null ? void 0 : i.querySelectorAll(r.selector);
					if (!(a != null && a.length)) return void t.Xg(`no element on this page matches selector ${r.selector} of variant ${n} for experiment ${e}`);
					let o = /* @__PURE__ */ new Map();
					a == null || a.forEach((e) => {
						if (e.localName.toLowerCase() === "script") return;
						let n = e;
						if (r.html) {
							var i;
							let s = e.namespaceURI === "http://www.w3.org/1998/Math/MathML" && e.localName === "annotation-xml" && ((i = e.getAttribute("encoding")) == null ? void 0 : i.toLowerCase()) || "", c = JSON.stringify([
								e.namespaceURI,
								e.localName,
								s
							]), l = o.get(c);
							if (N(l)) {
								var a;
								let n = (a = Fp) == null ? Fp = Mp() : a, i = e.ownerDocument.implementation.createHTMLDocument(""), u = i.createElementNS(e.namespaceURI, e.localName);
								s && u.setAttribute("encoding", s);
								let d = i.createRange();
								d.selectNodeContents(u);
								let f = e.namespaceURI === "http://www.w3.org/2000/svg" && /^(foreignObject|desc|title)$/.test(e.localName) || /^(text\/html|application\/xhtml\+xml)$/.test(s) ? "http://www.w3.org/1999/xhtml" : e.namespaceURI, p = d.createContextualFragment(r.html);
								e.namespaceURI === "http://www.w3.org/1998/Math/MathML" && /^(mi|mo|mn|ms|mtext)$/.test(e.localName) ? (u.appendChild(p), n.sanitize(u, V(V({}, Pp), {}, {
									NAMESPACE: f || void 0,
									IN_PLACE: !0
								}))) : (u.namespaceURI === "http://www.w3.org/1999/xhtml" && u.localName === "template" ? u.content : u).appendChild(n.sanitize(p, V(V({}, Pp), {}, {
									NAMESPACE: f || void 0,
									RETURN_DOM_FRAGMENT: !0
								}))), t.tm(u), l = u.innerHTML, o.set(c, l);
							}
							n.innerHTML = l;
						}
						r.css && n.setAttribute("style", r.css);
					});
				}
			});
		}
		_is_bot() {
			return n && this._instance ? Zl(n, this.Br.custom_blocked_useragents) : void 0;
		}
	},
	conversations: class {
		constructor(e) {
			this._instance = e, this.im = void 0, this._conversationsManager = null, this.nm = !1, this.ie = null, this.sm = !1, this.rm = 0, this.om = null, this.lm = null;
		}
		initialize() {
			this.loadIfEnabled();
		}
		onRemoteConfig(e) {
			if (this._instance.config.disable_conversations) return void (this.om = null);
			if (this.am = e.ok, !e.ok) return;
			let t = e.config.conversations;
			N(t) ? this.om = null : (ee(t) ? this.im = t : (this.im = t.enabled, this.ie = t), this.im || (this.om = null), this.loadIfEnabled());
		}
		reset() {
			var e;
			(e = this._conversationsManager) == null || e.reset(), this._conversationsManager = null, this.rm++, this.im = void 0, this.ie = null, this.am = void 0, this.sm = !1, this.om = null;
		}
		loadIfEnabled() {
			if (this._conversationsManager || this.nm || this._instance.config.disable_conversations || co(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
			let e = d == null ? void 0 : d.__PosthogExtensions__;
			if (e && !k(this.im) && this.im) if (this.ie && this.ie.token) {
				this.nm = !0;
				try {
					let t = e.initConversations;
					if (t) return this.um(t), void (this.nm = !1);
					let n = oi(this._instance);
					if (!n) return void this.hm(Pi);
					let r = this.rm;
					n(this._instance, "conversations", (t) => {
						if (r !== this.rm) return this.nm = !1, void this.loadIfEnabled();
						t || !e.initConversations ? this.hm("Could not load conversations script", t) : this.um(e.initConversations), this.nm = !1;
					});
				} catch (e) {
					this.hm("Error initializing conversations", e), this.nm = !1;
				}
			} else Lp.error("Conversations enabled but missing token in remote config.");
		}
		um(e) {
			if (this.ie) {
				try {
					this._conversationsManager = e(this.ie, this._instance), this.sm = !1, Lp.info("Conversations loaded successfully");
				} catch (e) {
					this.hm("Error completing conversations initialization", e);
					return;
				}
				this.lm && this._conversationsManager.setTheme(this.lm), this.dm();
			} else Lp.error("Cannot complete initialization: remote config is null");
		}
		dm() {
			let e = this.om;
			this.om = null, this._conversationsManager && e && (e === "open" ? this._conversationsManager.open() : this._conversationsManager.close());
		}
		hm(e, t) {
			Lp.error(e, t), this._conversationsManager = null, this.nm = !1, this.sm = !0;
		}
		show() {
			this._conversationsManager ? this._conversationsManager.show() : Lp.warn("Conversations not loaded yet.");
		}
		hide() {
			this.om === "open" && (this.om = null), this._conversationsManager && this._conversationsManager.hide();
		}
		open() {
			this._conversationsManager ? (this.om = null, this._conversationsManager.open()) : this.om = "open";
		}
		close() {
			this._conversationsManager ? (this.om = null, this._conversationsManager.close()) : this.om = "close";
		}
		setTheme(e) {
			var t, n;
			this.lm = V(V(V({}, this.lm), e), {}, { dark: V(V({}, (t = this.lm) == null ? void 0 : t.dark), e == null ? void 0 : e.dark) }), (n = this._conversationsManager) == null || n.setTheme(e);
		}
		isAvailable() {
			return !0 === this.im && !M(this._conversationsManager);
		}
		getUnavailableReason() {
			return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : co(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this.am ? "remote_config_failed" : k(this.im) ? this.am ? "disabled_in_project" : "remote_config_pending" : this.im ? N(this.ie) || !this.ie.token ? "missing_token" : d != null && d.__PosthogExtensions__ ? this.nm ? "initializing" : this.sm ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project";
		}
		isVisible() {
			var e, t;
			return (e = (t = this._conversationsManager) == null ? void 0 : t.isVisible()) != null && e;
		}
		sendMessage(e, t, n) {
			var r = this;
			return L(function* () {
				return r._conversationsManager ? r._conversationsManager.sendMessage(e, t, n) : (Lp.warn(Rp), null);
			})();
		}
		getMessages(e, t) {
			var n = this;
			return L(function* () {
				return n._conversationsManager ? n._conversationsManager.getMessages(e, t) : (Lp.warn(Rp), null);
			})();
		}
		markAsRead(e) {
			var t = this;
			return L(function* () {
				return t._conversationsManager ? t._conversationsManager.markAsRead(e) : (Lp.warn(Rp), null);
			})();
		}
		getTickets(e) {
			var t = this;
			return L(function* () {
				return t._conversationsManager ? t._conversationsManager.getTickets(e) : (Lp.warn(Rp), null);
			})();
		}
		requestRestoreLink(e) {
			var t = this;
			return L(function* () {
				return t._conversationsManager ? t._conversationsManager.requestRestoreLink(e) : (Lp.warn(Rp), null);
			})();
		}
		restoreFromToken(e) {
			var t = this;
			return L(function* () {
				return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : (Lp.warn(Rp), null);
			})();
		}
		restoreFromUrlToken() {
			var e = this;
			return L(function* () {
				return e._conversationsManager ? e._conversationsManager.restoreFromUrlToken() : (Lp.warn(Rp), null);
			})();
		}
		getCurrentTicketId() {
			var e, t;
			return (e = (t = this._conversationsManager) == null ? void 0 : t.getCurrentTicketId()) == null ? null : e;
		}
		getWidgetSessionId() {
			var e, t;
			return (e = (t = this._conversationsManager) == null ? void 0 : t.getWidgetSessionId()) == null ? null : e;
		}
		Qd() {
			var e;
			(e = this._conversationsManager) == null || e.setIdentity();
		}
		Jd() {
			var e;
			(e = this._conversationsManager) == null || e.clearIdentity();
		}
	},
	logs: class extends Kp {
		constructor(e) {
			super({
				get() {
					var t;
					return e == null || (t = e.config) == null ? void 0 : t.logs;
				},
				captureHintKey: na,
				get remoteConfigWillArrive() {
					var t, n;
					return !((t = e.$c) != null && t.call(e)) || !!(!((n = d._POSTHOG_REMOTE_CONFIG) == null || (n = n[e.config.token]) == null) && n.config);
				}
			}, () => function(e) {
				var t;
				let n = {};
				if (n.distinctId = e.get_distinct_id(), e.sessionManager) {
					let { sessionId: t, windowId: r, sessionStartTimestamp: i, lastActivityTimestamp: a } = e.sessionManager.checkAndGetSessionAndWindowId(!0);
					n.sessionId = t, n.windowId = r, N(i) || (n.sessionStartTimestamp = i), N(a) || (n.lastActivityTimestamp = a);
				}
				if (!(d == null || (t = d.location) == null) && t.href && (n.currentUrl = e.config.disable_capture_url_hashes ? wt(d.location.href) : d.location.href), e.featureFlags) {
					let t = e.featureFlags.getFlags();
					t && t.length > 0 && (n.activeFeatureFlags = t);
				}
				return n;
			}(e)), this._instance = e, this.name = ku, this.Af();
		}
		get If() {
			return this._instance.__loaded;
		}
		Ef() {
			let e = U("[logs]"), t = d == null ? void 0 : d.__PosthogExtensions__;
			if (!t) return void e.error("PostHog Extensions not found.");
			let n = oi(this._instance);
			if (n) return (e) => {
				n(this._instance, "logs", (n) => {
					let r = t.logs;
					e(n, r != null && r.initializeLogs ? {
						initialize: (e) => r.initializeLogs(e),
						replay(e, t) {
							var n;
							return (n = r.replayConsoleBuffer) == null ? void 0 : n.call(r, e, t);
						}
					} : void 0);
				});
			};
			e.error(Pi);
		}
	},
	metrics: class {
		constructor(e) {
			this._instance = e, this.R = U("[metrics]"), this.Ai = !1, this.vm = !1, this.un = () => {
				(r == null ? void 0 : r.visibilityState) === "hidden" && this.flush();
			};
		}
		initialize() {
			this.onConfigChange(), this.Ai || this.vm || !(r != null && r.addEventListener) || (K(r, "visibilitychange", this.un), this.vm = !0);
		}
		onConfigChange() {
			var e;
			if (this.Ai) return;
			let t = !!((e = this._instance.config.metrics) != null && e.network);
			t && !this.fm ? this.fm = ((e) => {
				let t = !0, n = () => t ? ((e) => {
					var t;
					let n = (t = e.config.metrics) == null ? void 0 : t.network;
					return !0 === n ? {} : n || void 0;
				})(e) : void 0, r = tm(e, n), i = nm(e, n);
				return () => {
					t = !1, r(), i();
				};
			})(this._instance) : !t && this.fm && (this.fm(), this.fm = void 0);
		}
		Of() {
			var e;
			if (this.Ai) return;
			let t = (e = this._instance) == null || (e = e.config) == null ? void 0 : e.metrics;
			if (!this.Tf || this.Ff !== t) {
				var n;
				(n = this.Tf) == null || n.reset(), this.Ff = t;
				let e = function(e) {
					var t, n, r, i, a;
					let o = e == null ? void 0 : e.resourceAttributes;
					return {
						serviceName: (t = o == null ? void 0 : o["service.name"]) == null ? e == null ? void 0 : e.serviceName : t,
						serviceVersion: (n = o == null ? void 0 : o["service.version"]) == null ? e == null ? void 0 : e.serviceVersion : n,
						environment: (r = o == null ? void 0 : o["deployment.environment"]) == null ? e == null ? void 0 : e.environment : r,
						resourceAttributes: o,
						beforeSend: e == null ? void 0 : e.beforeSend,
						flushIntervalMs: (i = e == null ? void 0 : e.flushIntervalMs) == null ? 1e4 : i,
						maxSeriesPerFlush: (a = e == null ? void 0 : e.maxSeriesPerFlush) == null ? 1e3 : a
					};
				}(t);
				k(t == null ? void 0 : t.flushIntervalMs) && (e.flushIntervalMs = 6e4), this.Tf = new Qr(this.Pf(), e, this.R);
			}
			return this.Tf;
		}
		count(e, t = 1, n) {
			var r;
			(r = this.Of()) == null || r.count(e, t, n);
		}
		gauge(e, t, n) {
			var r;
			(r = this.Of()) == null || r.gauge(e, t, n);
		}
		histogram(e, t, n) {
			var r;
			(r = this.Of()) == null || r.histogram(e, t, n);
		}
		flush(e) {
			if (!this.Tf) return Promise.resolve();
			if (e) {
				let t = this.Tf.drainWindow();
				return t && this.Do(t, e), Promise.resolve();
			}
			return this.Tf.flush().catch((e) => this.R.error("PostHog metrics flush failed:", e));
		}
		reset() {
			var e;
			(e = this.Tf) == null || e.reset();
		}
		dispose() {
			var e, t, n;
			this.Ai = !0, r == null || (e = r.removeEventListener) == null || e.call(r, "visibilitychange", this.un), this.vm = !1, (t = this.fm) == null || t.call(this), this.fm = void 0, (n = this.Tf) == null || n.reset();
		}
		Pf() {
			let e = this._instance, t = this;
			return {
				get isDisabled() {
					return !1;
				},
				get optedOut() {
					return !e.is_capturing();
				},
				Do: (e) => t.Do(e),
				getLibraryId: () => mi.LIB_NAME,
				getLibraryVersion: () => mi.LIB_VERSION
			};
		}
		Do(e, t) {
			return new Promise((n) => {
				let i = !1, a = (e) => {
					i || (i = !0, clearTimeout(o), n(e));
				}, o = setTimeout(() => a({
					kind: "retry-later",
					error: /* @__PURE__ */ Error("metrics request timed out")
				}), 9e4);
				this._instance._send_request(V(V(V({
					method: "POST",
					url: this.pm(),
					data: e,
					compression: "best-available",
					batchKey: "metrics"
				}, t && { transport: t }), (r == null ? void 0 : r.visibilityState) === "hidden" && { preferSyncCompression: !0 }), {}, {
					fireCallbackOnDrop: !0,
					callback(e) {
						let t = e.statusCode;
						if (t >= 200 && 300 > t) a({ kind: "ok" });
						else if (t === 413) a({ kind: "too-large" });
						else if (t !== 0 && t !== 408 && t !== 429 && 500 > t) a({
							kind: "fatal",
							error: /* @__PURE__ */ Error(`metrics request failed with status ${t}`)
						});
						else {
							var n;
							a({
								kind: "retry-later",
								error: (n = e.error) == null ? /* @__PURE__ */ Error(`metrics request failed with status ${t}`) : n
							});
						}
					}
				}));
			});
		}
		pm() {
			return this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") + "?token=" + encodeURIComponent(this._instance.config.token);
		}
	},
	webMCP: class {
		constructor(e) {
			this._instance = e, this.gm = !1;
		}
		initialize() {
			this.startIfEnabled();
		}
		startIfEnabled() {
			if (!this._instance.config.capture_webmcp || this.gm) return;
			let e = r == null ? void 0 : r.modelContext;
			if (!e || !E(e.registerTool)) return;
			let t = rm.get(e);
			if (t) return t.instances.add(this._instance), void (this.gm = !0);
			let n = { instances: /* @__PURE__ */ new Set([this._instance]) }, i = e.registerTool, a = this;
			ld(e, "registerTool", (e) => {
				let t = e;
				return function(e, ...r) {
					let i = e;
					try {
						i = a.ym(e, n);
					} catch (n) {
						return t.call(this, e, ...r);
					}
					return t.call(this, i, ...r);
				};
			}), e.registerTool !== i && (rm.set(e, n), this.gm = !0);
		}
		ym(e, t) {
			if (!e || !E(e.execute)) return e;
			let n = e.execute, r = this, { tool: i, injected: a } = function(e, t) {
				let n = {
					intent: !1,
					model: !1
				}, r = e.inputSchema;
				if (!function(e) {
					return !!k(e) || D(e) && Object.keys(e).every((e) => im.has(e) || e.startsWith("x-")) && !0 !== e.additionalProperties && !D(e.additionalProperties) && (!e.type || e.type === "object") && (!e.properties || D(e.properties)) && (!e.required || T(e.required));
				}(r)) return {
					tool: lm(e),
					injected: n
				};
				let i = (r == null ? void 0 : r.properties) || {}, a = (e) => cm(i, e) || T(r == null ? void 0 : r.required) && r.required.includes(e);
				if (n.intent = t.intent && !a("context"), n.model = t.model && !a("llm_model"), !n.intent && !n.model) return {
					tool: lm(e),
					injected: n
				};
				let o = V({}, i), s = T(r == null ? void 0 : r.required) ? [...r.required] : [];
				return n.intent && (o.context = {
					type: "string",
					description: "Explain why this tool is called and how it supports the user's goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as \"a customer\"."
				}, s.includes("context") || s.push("context")), n.model && (o.llm_model = {
					type: "string",
					description: "The model identifier you are running as, for example \"claude-opus-4-8\" or \"gpt-5.2\". Pass \"unknown\" if you are not certain. Recorded for the site developer's analytics."
				}, s.includes("llm_model") || s.push("llm_model")), {
					tool: lm(e, V(V({}, r), {}, {
						type: (r == null ? void 0 : r.type) || "object",
						properties: o,
						required: s
					})),
					injected: n
				};
			}(e, function(e) {
				let t = {
					intent: !1,
					model: !1
				};
				for (let n of e.instances) {
					let e = sm(n.config.capture_webmcp);
					t.intent || (t.intent = !0 === (e == null ? void 0 : e.intent)), t.model || (t.model = !0 === (e == null ? void 0 : e.model));
				}
				return t;
			}(t));
			return Object.defineProperty(i, "execute", {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				value(...o) {
					let s = /* @__PURE__ */ new Date(), c = function(e, t) {
						if (!D(e)) return {};
						try {
							let n = t.intent ? um(e.context, 2048, !0) : void 0, r = t.model ? um(e.llm_model, 256) : void 0;
							return V(V({}, n && n !== "{}" ? { intent: n } : {}), r && r.toLowerCase() !== "unknown" ? { model: r } : {});
						} catch (e) {
							return {};
						}
					}(o[0], a), l = function(e, t) {
						let n = e[0];
						if (!D(n)) return e;
						try {
							let r = t.intent && cm(n, "context"), i = t.model && cm(n, "llm_model");
							if (!r && !i) return e;
							let a = V({}, n);
							return r && delete a.context, i && delete a.llm_model, [a, ...e.slice(1)];
						} catch (t) {
							return e;
						}
					}(o, a), u;
					try {
						u = n.apply(this === i ? e : this, l);
					} catch (e) {
						throw r.bm(t, i, s, {
							error: e,
							errorResult: !1
						}, c), e;
					}
					if ((d = u) && typeof d.then == "function") return Promise.resolve(u).then((e) => {
						let n = dm(e) ? {
							error: e,
							errorResult: !0
						} : void 0;
						return r.bm(t, i, s, n, c), e;
					}, (e) => {
						throw r.bm(t, i, s, {
							error: e,
							errorResult: !1
						}, c), e;
					});
					var d;
					let f = dm(u) ? {
						error: u,
						errorResult: !0
					} : void 0;
					return r.bm(t, i, s, f, c), u;
				}
			}), i;
		}
		bm(e, t, n, r, a) {
			let o = Date.now() - n.getTime(), s;
			for (let l of e.instances) {
				var c;
				let e = sm(l.config.capture_webmcp);
				if (e) {
					r && !s && (s = gm(r.error, r.errorResult));
					try {
						l.capture("$mcp_tool_call", V(V(V({
							$mcp_source: "posthog_mcp_analytics",
							$mcp_interface: "webmcp",
							$mcp_tool_name: t.name,
							$mcp_resource_name: t.name,
							$mcp_tool_description: t.description,
							$mcp_server_name: i == null ? void 0 : i.hostname,
							$mcp_duration_ms: o,
							$mcp_is_error: !!r
						}, s ? {
							$mcp_error_type: s.type,
							$mcp_error_message: s.message
						} : {}), e.intent && a.intent ? {
							$mcp_intent: a.intent,
							$mcp_intent_source: "context_parameter"
						} : {}), e.model && a.model ? {
							$mcp_llm_model: a.model,
							$mcp_llm_model_source: "self_reported"
						} : {}), { timestamp: n });
					} catch (e) {
						continue;
					}
					if (r && s && l.exceptions && (c = l.exceptionObserver) != null && c.isEnabled) try {
						let e = {
							$exception_list: mm(l.exceptions, r, s.message),
							$exception_level: "error",
							$exception_source: "mcp.tool_call",
							$mcp_interface: "webmcp",
							$mcp_tool_name: t.name,
							$mcp_resource_name: t.name,
							$mcp_tool_description: t.description,
							$mcp_server_name: i == null ? void 0 : i.hostname
						};
						l.exceptionObserver.captureException(e);
					} catch (e) {}
				}
			}
		}
	}
});
var _m = function() {
	mi.SDK_DIST_CHANNEL = "npm";
	let t = Iu[Xu] = new rd();
	return function() {
		function t() {
			t.done || (t.done = !0, Rl = !1, W(Iu, function(e) {
				e._dom_loaded();
			}));
		}
		r != null && r.addEventListener ? r.readyState === "complete" ? t() : K(r, "DOMContentLoaded", t, { capture: !1 }) : e && H.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
	}(), t;
}(), vm = "phc_mpHXoL5tCR8jHuZCZGborfMuzErXnFkUQPPXpSaEm6iq", ym = "https://eu.i.posthog.com", bm = !!ym;
bm && _m.init(vm, {
	api_host: ym,
	persistence: "memory",
	capture_exceptions: {
		capture_unhandled_errors: !0,
		capture_unhandled_rejections: !0,
		capture_console_errors: !1
	},
	logs: {
		serviceName: "webflow-site-interactions",
		environment: "production"
	}
});
function xm(e, t) {
	bm && _m.capture(e, t);
}
var Sm = { info(e, t) {
	bm && _m.logger.info(e, t);
} };
//#endregion
export { Sm as n, xm as t };

//# sourceMappingURL=site-interactions-CiFvoQAi.js.map