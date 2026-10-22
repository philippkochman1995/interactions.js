//#region src/marker-thumbnails.ts
var e = /* @__PURE__ */ new Set(/* @__PURE__ */ "6a4c3c5c2cb610587f836d68.6ab10752a9a61da56b801791.6ab242ad7d6354086b07a452.6ab24b2cfcdaa41fde0ee04f.6ab24d67861d6e5c986d74c1.6ab24f1bf6050fba42eb4241.6ab252fe4228734c1b7c855f.6ab259639845a485a545d51a.6ab25b6b55b2403ae561fb8c.6ab25eedc8995221637aa1c4.6ab265cfa85417b42d227d40.6ab27d97c579512044aee2db.6ab27ffca4092e710849f188.6ab2830b3b4f47ed02974e3a.6ab283e8b9cd411d6b81a674.6ab285f9f7c6afb0f726908b.6ab2888c5c0d00b8884ce533.6ab28ea794ba62bb94195203.6ab2915284ff20b2a297f8c7.6ab296ea5665ea11183a854f.6ab37118ccab88e81180a2e7.6ab3717d1b33e94ff8fbb368.6ab371ba1bc80d741a5eedeb.6ab3723ce752c237d20fb5a3.6ab37c57eb36043b8f1d0c7f.6ab37dbc233d1d60a3b80f36.6ab38076ab1a02308b510f3a.6ab382800df267747ce987e3.6ab3842a7d4a70780590a7f4.6ab3af85fe0b5280e6db068a.6ab3b193bed18187a4095e37.6ab3b97d408c0613631ba3b9.6ab3bdb2408c0613631ed3e6.6ab3c25987c699143d7c15a2.6ab3c594cd66b7974dbd435f.6aba617bffb6d2211890220c.6aba725ef2d973473c45c8fa.6aba77b6307cbc5c680f9c7b.6aba79705e4e5be12cbc5a65.6acde446e39b1fc8939e7c65.6acdf149f0f9c5f45b615d16.6ad72ac9ffa6ee58057fbc5c.6ad72cbe99055b3104318178.6ad883cfd78e22a230a90951".split("."));
function t(t) {
	var n, r;
	if (!t) return "";
	let i = t.getAttribute("src") || "", a = (n = i.match(/\/([0-9a-f]{24})_/i)) == null || (n = n[1]) == null ? void 0 : n.toLowerCase();
	if (a && e.has(a)) return new URL("../assets/west-map-markers/" + a + ".webp", import.meta.url).href;
	let o = (t.getAttribute("srcset") || "").split(",").map((e) => e.trim().match(/^(\S+)\s+(\d+)w$/)).filter((e) => !!e).map((e) => ({
		url: e[1],
		width: Number(e[2])
	})).sort((e, t) => e.width - t.width);
	return ((r = o.find((e) => e.width >= 200) || o[o.length - 1]) == null ? void 0 : r.url) || t.currentSrc || i;
}
//#endregion
export { t };

//# sourceMappingURL=site-interactions-CahnrWDV.js.map