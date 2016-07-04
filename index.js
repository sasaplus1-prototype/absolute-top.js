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
