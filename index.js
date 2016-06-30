/*!
 * @license absolute-top.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/absolute-top.js
 * Released under the MIT license.
 */
'use strict';

var scrollTop = require('scroll-top');

var db, dd;

function get(element) {
  var rect;

  db || (db = document.body);
  dd || (dd = document.documentElement);

  rect = element.getBoundingClientRect();

  return rect.top + scrollTop.get() - (
    dd.clientTop || dd.parentNode.clientTop || db.clientTop
  );
}

module.exports = {
  get: get
};
