"use strict";

import transformEmoticons from "./transform-emoticons";
import transformUser from "./transform-user";

export default {
	event: "private_message",
	method: "onPrivateMsg",
	transform: (fromNick, data, tabNick) => {
		let userData = data;
		if (typeof data === "string") {
			userData = {
				m: data,
			};
		}

		return {
			tabNick: tabNick,
			user: transformUser(userData, fromNick),
			message: transformEmoticons(userData.m),
		};
	},
};
