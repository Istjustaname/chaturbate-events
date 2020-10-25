"use strict";

export default {
	event: "revoke",
	method: "onRevoke",
	transform: (toNick, fromNick) => {
		return {
			toNick: toNick,
			fromNick: fromNick,
		};
	},
};
