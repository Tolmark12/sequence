/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Sequence: __webpack_require__(1)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function _class(items) {
    _classCallCheck(this, _class);

    this.items = items;
    this.reset();
    this.totalItems = this.items.length;
  }

  // ------------------------------------ API

  // Go to the next item


  _createClass(_class, [{
    key: "next",
    value: function next() {
      var loopOnOverShoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.incramentItemIndex(1, loopOnOverShoot);
    }
  }, {
    key: "prev",
    value: function prev() {
      var loopOnOverShoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.incramentItemIndex(-1, loopOnOverShoot);
    }
  }, {
    key: "isAtLastItem",
    value: function isAtLastItem() {
      if (this.currentItemIndex === this.totalItems - 1) return true;
      return false;
    }
  }, {
    key: "incramentItemIndex",
    value: function incramentItemIndex(incrament, loopOnOverShoot) {
      if (loopOnOverShoot == null) {
        loopOnOverShoot = false;
      }
      var newIndex = this.currentItemIndex + incrament;

      // Make sure the new index falls within the range of items
      if (newIndex > this.totalItems - 1) newIndex = loopOnOverShoot ? 0 : this.totalItems - 1; // if new index is greater than the last item, show last item.
      else if (newIndex < 0) newIndex = loopOnOverShoot ? this.totalItems - 1 : 0; // if the index is less than 0, show first item.

      // Make sure new item is different than old item, return
      if (this.currentItemIndex !== newIndex) {
        this.currentItemIndex = newIndex;
        return true;
      }
      return false;
    }
  }, {
    key: "changeItemByIndex",
    value: function changeItemByIndex(newIndex) {
      var plusOrMinus = newIndex > this.currentItemIndex ? 1 : -1;
      var incramentDifference = Math.abs(this.currentItemIndex - newIndex) * plusOrMinus;
      this.incramentItemIndex(incramentDifference);
    }
  }, {
    key: "activateItemByParam",
    value: function activateItemByParam(param, val) {
      this.currentItemIndex = this.getIndexByParam(param, val);
    }
  }, {
    key: "getIndexByParam",
    value: function getIndexByParam(param, val) {
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item[param] === val) {
          return i;
        }
      }
      return null;
    }
  }, {
    key: "getItemByParam",
    value: function getItemByParam(param, val) {
      // Add in some checking to make sure it works
      return this.items[this.getIndexByParam(param, val)];
    }
  }, {
    key: "reset",
    value: function reset() {
      this.currentItemIndex = 0;
    }
  }, {
    key: "addItem",
    value: function addItem(item, index) {
      if (index == null) {
        index = this.items.length;
      } else {
        index;
      }
      this.items.splice(index, 0, item);
      this.totalItems++;
    }
  }, {
    key: "removeItembyParam",
    value: function removeItembyParam(param, val) {
      this.removeItemByIndex(this.getIndexByParam(param, val));
    }
  }, {
    key: "removeItemByIndex",
    value: function removeItemByIndex(index) {
      if (index == null) {
        return;
      }
      this.items.splice(index, 1);
      this.totalItems--;
    }
  }, {
    key: "currentItem",
    get: function get() {
      return this.items[this.currentItemIndex];
    }
  }]);

  return _class;
}();

/***/ })
/******/ ]);