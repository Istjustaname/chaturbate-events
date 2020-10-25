"use strict";

export default {
	event: "personally_kicked",
	method: "onPersonallyKicked",
	transform: (reason) => {
		return {
			reason: reason,
		};
	},
};
