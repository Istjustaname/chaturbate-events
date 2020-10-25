"use strict";

import transformEmoticons from "./transform-emoticons";
import transformUser from "./transform-user";

export default {
	event: "room_message",
	method: "onRoomMsg",
	transform: (username, data) => {
		return {
			message: transformEmoticons(data.m),
			user: transformUser(data),
		};
	},
};
