"use strict";

export default {
	event: "hidden_show_approve",
	method: "onNotify",
	match: (data) => data.type === "hidden_show_approve",
	transform: (data) => {
		return {
			initialHideCam: data.initial_hide_cam,
		};
	},
};
