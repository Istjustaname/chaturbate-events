"use strict";

export default {
	event: "app_error_log",
	method: "onNotify",
	match: (data) => data.type === "apperrorlog",
	transform: (data) => {
		return {
			message: data.msg,
		};
	},
};
