'use strict';
const path = require('path');
const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		node: false,
		browser: true
	},
	rules: {
		'no-restricted-globals': ['error'].concat(restrictedGlobals)
	}
};
