"use strict";

import transformUser from "./transform-user";

export default {
	event: "room_leave",
	method: "onNotify",
	match: (data) => data.type === "room_leave",
	transform: (data) => {
		return {
			user: transformUser(data),
		};
	},
};
