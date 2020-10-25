"use strict";

export default {
	event: "refresh_panel",
	method: "onNotify",
	match: (data) => data.type === "refresh_panel",
	transform: (data) => undefined,
};
