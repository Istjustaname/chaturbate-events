"use strict";

import transformUser from "./transform-user";

export default {
	event: "room_entry",
	method: "onNotify",
	match: (data) => data.type === "room_entry",
	transform: (data) => {
		return {
			user: transformUser(data),
		};
	},
};
