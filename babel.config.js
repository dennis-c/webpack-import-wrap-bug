/* eslint-env node */

"use strict";

module.exports = {
	"presets": [
		[ "@babel/preset-env", {
			"targets": "last 2 versions, > 2% in NL, not dead", // sensible default, babel will prefer a browserslists config
			"modules": false, // we use webpack so we don't need module transformation
		} ],
		"@babel/preset-typescript",
	],
};