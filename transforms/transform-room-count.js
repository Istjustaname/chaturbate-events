"use strict";

export default {
	event: "room_count",
	method: "onRoomCountUpdate",
	transform: (count) => {
		return {
			count: count,
		};
	},
};
