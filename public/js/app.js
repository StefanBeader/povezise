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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scroller */ "./resources/js/components/scroller.js");
/* harmony import */ var _components_scroller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_scroller__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ "./resources/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./resources/js/components/scroller.js":
/*!*********************************************!*\
  !*** ./resources/js/components/scroller.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var scrollinProgress = false;
var sections = [];
var sectionNumbers = [];
var activeSection = 0;
var currentY = 0;
document.addEventListener('wheel', handleScroll);
document.addEventListener("touchstart", function (e) {
  currentY = e.touches[0].clientY;
});
document.addEventListener("touchend", function (e) {
  if (currentY > e.changedTouches[0].clientY + 50) {
    moveDown();
  } else if (currentY < e.changedTouches[0].clientY - 50) {
    moveUp();
  }
});

function handleScroll(e) {
  console.log('test');

  if (!scrollinProgress) {
    // sections = document.getElementsByTagName("section");
    // sectionNumbers = document.getElementsByTagName("li");
    scrollinProgress = true;
    sections = document.getElementsByClassName("screen");
    sectionNumbers = document.getElementsByTagName("li");

    if (e.deltaY > 0) {
      moveDown();
    } else {
      moveUp();
    }

    setTimeout(function () {
      scrollinProgress = false;
    }, 1000);
  }
}

function moveDown() {
  if (activeSection < sections.length - 1) {
    activeSection++;
    moveSection(activeSection);
  }
}

function moveUp() {
  if (activeSection !== 0) {
    activeSection--;
    moveSection(activeSection);
  }
}

function moveSection(sectionsIndex) {
  var position = sections[sectionsIndex].offsetTop;
  document.getElementById("sections-holder").style["transform"] = "translate3d(0, -" + position + "px, 0)";
} //   for (var i = 0; i < sectionNumbers.length; i++) {
//   sectionNumbers[i].addEventListener('click', function() {
//     activeSection = this.dataset.section;
//     moveSection(activeSection);
//   });
// }

/***/ }),

/***/ "./resources/js/components/slider.js":
/*!*******************************************!*\
  !*** ./resources/js/components/slider.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var slides = [];
var activeSlide = 0;
slides = document.getElementsByClassName('slide');
showSlide(slides[activeSlide]);
setInterval(nextSlide, 2000);

function nextSlide() {
  handleSlideChange('next');
}

function previousSlide() {
  handleSlideChange('previous');
}

function handleSlideChange(direction) {
  var slideToHide = slides[activeSlide];

  if (direction === 'next') {
    if (activeSlide + 1 <= slides.length - 1) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }
  } else {
    if (activeSlide - 1 < 0) {
      activeSlide = slides.length - 1;
    } else {
      activeSlide--;
    }
  }

  hideSlide(slideToHide);
  showSlide(slides[activeSlide]);
}

function showSlide(el) {
  el.style.display = 'block';
}

function hideSlide(el) {
  el.style.display = 'none';
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Projects\povezise\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\Projects\povezise\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });