# broccoli-strip-css-comments [![Build Status](https://travis-ci.org/sindresorhus/broccoli-strip-css-comments.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-strip-css-comments)

> Strip comments from CSS using [`strip-css-comments`](https://github.com/sindresorhus/strip-css-comments)


## Install

```
$ npm install --save-dev broccoli-strip-css-comments
```


## Usage

```js
var stripCssComments = require('broccoli-strip-css-comments');
tree = stripCssComments(tree, options);
```


## Options

See the `strip-css-comments` [options](https://github.com/sindresorhus/strip-css-comments#options).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
