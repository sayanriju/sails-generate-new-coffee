var path = require('path');
var _ = require('lodash');
var packageJSON = require('../json/package.json.js');
var sailsrc = require('../json/sailsrc');




/**
 * sails-generate-new
 *
 * Usage:
 * `sails new foo`
 *
 * @type {Object}
 */

module.exports = {

	moduleDir: require('path').resolve(__dirname, '..'),

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	after: require('./after'),

	targets: {

		'.': ['backend-coffee','gruntfile-coffee', 'frontend-coffee'],
		'./.gitignore': { copy: 'gitignore' },
		'./README.md': { template: './README.md' },
		'./package.json': { jsonfile: packageJSON },
		'./.sailsrc': { jsonfile: sailsrc },
		'./app.coffee': { copy: 'app.coffee' }
	}
};


