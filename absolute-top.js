/*!
 * @license absolute-top.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/absolute-top.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["absoluteTop"] = factory();
	else
		root["absoluteTop"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var scrollTop = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var db, dd;

	function get() {
	  var result;

	  if (window.pageYOffset !== void 0) {
	    result = window.pageYOffset;
	  } else {
	    db || (db = document.body);
	    dd || (dd = document.documentElement);

	    result = dd.scrollTop || db.parentNode.scrollTop || db.scrollTop;
	  }

	  return result;
	}

	function set(value) {
	  db || (db = document.body);
	  dd || (dd = document.documentElement);

	  db.scrollTop = value;
	  dd.scrollTop = value;
	}

	module.exports = {
	  get: get,
	  set: set
	};


/***/ }
/******/ ])
});
;