"use strict";

const EMOTICON_REGEX = /%%%\[emoticon (.*?)\|.*?\|\d+\|\d+\|.*?\]%%%/g;

export default (txt) => {
	return txt.replace(EMOTICON_REGEX, "($1)");
};
