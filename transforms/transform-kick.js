"use strict";

export default {
	event: "kick",
	method: "onKick",
	transform: (username) => {
		return {
			username: username,
		};
	},
};
