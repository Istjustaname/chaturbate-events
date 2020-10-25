"use strict";

import transformEmoticons from "./transform-emoticons";

export default {
	event: "app_notice",
	method: "onNotify",
	match: (data) => data.type === "appnotice",
	transform: (data) => {
		return {
			messages: (data.msg || []).map((m) => transformEmoticons(m)),
			foreground: data.foreground || "#000000",
			weight: data.weight || "normal",
			background: data.background || "transparent",
			to: data.to_user || undefined,
		};
	},
};
