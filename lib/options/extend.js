var extend = require('extend');
var utils = require('uo-node-utils');
var defaultOpts = require('./default');

module.exports = function (userOpts) {
  this.opts = extend(true, defaultOpts, userOpts);

  this._opts = {
    optsPassed: false,
    regexs: {
      // 's' is for single line
      // 'm' is for multi lines
      'sComment': /\s\/\/.*\n/g,
      'mComment': /\s\/[*][\s\S]*?[*]\//g,
      'fontFace': /(@font-face[\s\S]+?{)([\s\S]+?\})/g,
      'sAtRule': /@(import|charset).*/g,
      'mAtRule': /(@[\s\S]+?{)([\s\S]+?\})([\s]+?)\}/g,
      'css': /(?:\$\d+|(\S+(?:,?\s\S*)*?\s*\{)([\s\S]+?)\}+\s?}?\s?)/g,
      'rem': /(-?[0-9]?[.]?[0-9]*)(rem)/g,
      'mqContainer': /(?!@charset|@import|@font-face)(@[\s\S]+?{)([\s\S]+?\})([\s]+?)\}/g,
      'mqCss': /(\S+(?:,?\s\S*)*?\s*\{)([\s\S]+?)\}+\s?}?/g
    }
  };

  utils.silent = this.opts.silent;
};
