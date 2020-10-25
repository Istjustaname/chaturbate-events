"use strict";

export default {
	event: "promotion",
	method: "onPromotion",
	transform: (toNick, fromNick) => {
		return {
			toNick: toNick,
			fromNick: fromNick,
		};
	},
};
