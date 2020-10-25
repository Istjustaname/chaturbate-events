"use strict";

export default {
	event: "group_show_approve",
	method: "onNotifyGroupShowApprove",
	transform: (tokensPerMinute) => {
		return {
			tokensPerMinute: tokensPerMinute,
		};
	},
};
