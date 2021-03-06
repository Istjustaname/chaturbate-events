"use strict";

export default {
	event: "log",
	method: "onNotify",
	match: (data) => data.type === "log",
	transform: (data) => {
		return {
			message: data.msg,
		};
	},
};
