"use strict";

export default {
	event: "group_show_request",
	method: "onNotifyGroupShowRequest",
	transform: (usersWaiting, usersRequired, tokensPerMinute) => {
		return {
			usersWaiting: usersWaiting,
			usersRequired: usersRequired,
			tokensPerMinute: tokensPerMinute,
		};
	},
};
