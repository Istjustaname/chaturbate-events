"use strict";

export default {
	event: "auth",
	method: "onAuthResponse",
	transform: (success) => {
		return {
			success: Boolean(success),
		};
	},
};
