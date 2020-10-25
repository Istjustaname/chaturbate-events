"use strict";

export default {
	event: "private_show_approve",
	method: "onNotifyPrivateShowApprove",
	transform: (tokensPerMinute) => {
		return {
			tokensPerMinute: tokensPerMinute,
		};
	},
};
