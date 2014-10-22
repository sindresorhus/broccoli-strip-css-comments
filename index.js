'use strict';
var Filter = require('broccoli-filter');
var stripCssComments = require('strip-css-comments');

function StripCssCommentsFilter(inputTree, options) {
	if (!(this instanceof StripCssCommentsFilter)) {
		return new StripCssCommentsFilter(inputTree);
	}

	this.inputTree = inputTree;
}

StripCssCommentsFilter.prototype = Object.create(Filter.prototype);
StripCssCommentsFilter.prototype.constructor = StripCssCommentsFilter;

StripCssCommentsFilter.prototype.extensions = ['css'];
StripCssCommentsFilter.prototype.targetExtension = 'css';

StripCssCommentsFilter.prototype.processString = function (str) {
	return stripCssComments(str);
};

module.exports = StripCssCommentsFilter;
