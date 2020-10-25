"use strict";

export default {
	event: "send_private_message",
	method: "callback",
	callback: (int) => int === 3,
	transform: (success) => {
		return {
			success: success,
		};
	},
};
