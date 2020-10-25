"use strict";

export default {
	event: "clear_app",
	method: "onNotify",
	match: (data) => data.type === "clear_app",
	transform: (data) => undefined,
};
