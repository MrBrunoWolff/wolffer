'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var wolffer = exports.wolffer = function wolffer(content, words) {
  return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};