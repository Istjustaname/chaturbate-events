"use strict";

export default {
	event: "leave_private_room",
	method: "onNotifyLeavePrivateRoom",
	transform: (username) => {
		return {
			username: username,
		};
	},
};
