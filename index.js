'use strict';
var Filter = require('broccoli-filter');
var stripCssComments = require('strip-css-comments');

function StripCssCommentsFilter(inputTree, opts) {
	if (!(this instanceof StripCssCommentsFilter)) {
		return new StripCssCommentsFilter(inputTree);
	}

	Filter.call(this, inputTree, opts);

	this.inputTree = inputTree;
	this.opts = opts;
}

StripCssCommentsFilter.prototype = Object.create(Filter.prototype);
StripCssCommentsFilter.prototype.constructor = StripCssCommentsFilter;

StripCssCommentsFilter.prototype.extensions = ['css'];
StripCssCommentsFilter.prototype.targetExtension = 'css';

StripCssCommentsFilter.prototype.processString = function (str) {
	return stripCssComments(str, this.opts);
};

module.exports = StripCssCommentsFilter;
