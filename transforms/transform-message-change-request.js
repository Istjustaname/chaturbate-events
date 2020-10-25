"use strict";

export default {
	event: "message_change_request",
	method: "onNotifyMessageChangeRequest",
	transform: (subject) => {
		return {
			subject: subject,
		};
	},
};
