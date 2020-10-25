"use strict";

export default {
	event: "leave_room",
	method: "callback",
	callback: (int) => int === 6,
	transform: (success) => {
		return {
			success: success,
		};
	},
};
