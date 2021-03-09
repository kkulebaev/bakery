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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//= ../../../node_modules/jquery-parallax.js/parallax.js\r\n\r\n$(function () {\r\n    //= components/parallax.js\r\n\r\n    /* Parallax \r\n    ================*/\r\n    $('#parallax').parallax({ imageSrc: 'assets/images/parallax.jpg' })\r\n    $('#intro-parallax').parallax({ imageSrc: 'assets/images/intro.jpg' })\r\n\r\n    /* Fixed Header \r\n    ================*/\r\n    let header = $('#header')\r\n    let intro = $('#intro')\r\n    let introH = intro.innerHeight()\r\n    let scrollPos = $(window).scrollTop()\r\n\r\n    checkScroll(scrollPos, introH)\r\n\r\n    $(window).on('scroll resize', function () {\r\n        let introH = intro.innerHeight()\r\n        scrollPos = $(this).scrollTop()\r\n\r\n        checkScroll(scrollPos, introH)\r\n    })\r\n\r\n    function checkScroll(scrollPos, introH) {\r\n        if (scrollPos > introH / 2) {\r\n            header.addClass('fixed')\r\n        } else {\r\n            header.removeClass('fixed')\r\n        }\r\n    }\r\n\r\n    /* Smooth scroll \r\n    ==================*/\r\n    $('[data-scroll]').on('click', function (event) {\r\n        event.preventDefault()\r\n\r\n        let elementId = $(this).data('scroll')\r\n        let elementOffset = $(elementId).offset().top\r\n\r\n        $('html, body').animate(\r\n            {\r\n                scrollTop: elementOffset,\r\n            },\r\n            1000\r\n        )\r\n\r\n        // $(burger).toggleClass('burger--active')\r\n        // $(nav).toggleClass('nav--active')\r\n    })\r\n\r\n    /* Burger menu \r\n    ========================*/\r\n    // let nav = document.querySelector('#nav')\r\n    // let burger = document.querySelector('#burger')\r\n\r\n    // $(burger).on('click', function (event) {\r\n    //     event.preventDefault()\r\n    //     $(burger).toggleClass('burger--active')\r\n    //     $(nav).toggleClass('nav--active')\r\n    // })\r\n\r\n    /* Filter\r\n    ========================*/\r\n    let filter = $('[data-filter]')\r\n    filter.on('click', function (event) {\r\n        event.preventDefault()\r\n\r\n        let cat = $(this).data('filter')\r\n        filter.each(function () {\r\n            $(this).removeClass('category__item--active')\r\n        })\r\n        $(this).addClass('category__item--active')\r\n\r\n        if (cat == 'all') {\r\n            $('[data-cat]').removeClass('cards__item--hidden')\r\n        } else {\r\n            $('[data-cat]').each(function () {\r\n                let itemCat = $(this).data('cat')\r\n\r\n                if (itemCat != cat) {\r\n                    $(this).addClass('cards__item--hidden')\r\n                } else {\r\n                    $(this).removeClass('cards__item--hidden')\r\n                }\r\n            })\r\n        }\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });