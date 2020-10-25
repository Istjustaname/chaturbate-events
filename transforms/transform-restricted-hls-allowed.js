"use strict";

export default {
	event: "restricted_hls_allowed",
	method: "onNotify",
	match: (data) => data.type === "is_restricted_hls_allowed",
	transform: (allowed) => {
		return {
			allowed: allowed,
		};
	},
};
