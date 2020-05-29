/* eslint-env node */

"use strict";

module.exports = (env, argv) => [
	{
		"entry": {
			"index": "./src/index",
		},
		"output": {
			"path": __dirname + "/public/build",
			"publicPath": "build/",
		},
		"mode": "development",
		"devtool": false,
		"resolve": {
			"extensions": [ ".ts" ],
		},
		"module": {
			"rules": [
				{
					"test": /\.tsx?$/,
					"use": 'ts-loader',
					"exclude": /node_modules/,
				},
			],
		}
	},
];