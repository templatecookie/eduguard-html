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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function ($) {\n  $('.hamburger-menu a').on('click', function () {\n    $('#mySidenav').css('left', '0');\n    toggleOverlay();\n  });\n\n  function hideNav() {\n    $('#mySidenav').css('left', '-300px');\n    toggleOverlay();\n  }\n\n  $('#overlayy').on('click', function () {\n    hideNav();\n  });\n  $('.closebtn').on('click', function () {\n    hideNav();\n  });\n\n  function toggleOverlay() {\n    $('#overlayy').toggleClass('active');\n  } //Events Slider\n\n\n  $('.eventsSlider').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    autoplay: false,\n    dots: false,\n    arrows: false,\n    autoplaySpeed: 2000,\n    prevArrow: ' .slider__arrow-left',\n    nextArrow: ' .slider__arrow-right',\n    responsive: [{\n      breakpoint: 1025,\n      settings: {\n        arrows: false\n      }\n    }, {\n      breakpoint: 992,\n      settings: {\n        autoplay: true,\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: false,\n        arrows: false\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        dots: false,\n        autoplay: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: false\n      }\n    }]\n  }); // newCourse\n\n  $('.new__courses').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    autoplay: false,\n    dots: false,\n    arrows: false,\n    autoplaySpeed: 2000,\n    // prevArrow: '.new-course-arrows .prev-arrow',\n    // nextArrow: '.new-course-arrows .next-arrow',\n    responsive: [{\n      breakpoint: 992,\n      settings: {\n        autoplay: true,\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: false,\n        arrows: false\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        dots: false,\n        autoplay: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: false\n      }\n    }]\n  }); // our students\n\n  $('.student-slider').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    dots: false,\n    arrows: false,\n    centerMode: true,\n    centerPadding: '0px',\n    prevArrow: '.student-slider-arrows .prev-arrow',\n    nextArrow: '.student-slider-arrows .next-arrow',\n    responsive: [{\n      breakpoint: 992,\n      settings: {\n        autoplay: true,\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: false,\n        arrows: false\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        dots: false,\n        autoplay: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: false\n      }\n    }]\n  });\n  $('.about__slider').slick({\n    infinite: true,\n    slidesToShow: 2,\n    slidesToScroll: 1,\n    autoplay: true,\n    arrows: false,\n    dots: false,\n    autoplaySpeed: 2000,\n    nextArrow: '.about-slider-arrows .next-arrow',\n    prevArrow: '.about-slider-arrows .prev-arrow',\n    responsive: [{\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: false\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  }); //testimonial_slider\n\n  $('.testimonial__slider--one').slick({\n    autoPlay: true,\n    autoplaySpeed: 2000,\n    infinite: true,\n    slidesToShow: 2,\n    slidesToScroll: 1,\n    arrows: false,\n    responsive: [{\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n  $('.testimonial__slider--two').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    autoplay: true,\n    arrows: false,\n    centerMode: true,\n    centerPadding: '0px',\n    autoplaySpeed: 2000,\n    responsive: [{\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n  $('.testimonial__slider--three').slick({\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: false,\n    arrows: false,\n    autoplaySpeed: 2000\n  });\n  $('.browse-categories-area').slick({\n    infinite: true,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    autoplay: false,\n    arrows: false,\n    dots: true,\n    autoplaySpeed: 2000,\n    responsive: [{\n      breakpoint: 1201,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  });\n  $('.categories__slider').slick({\n    infinite: true,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    autoplay: false,\n    arrows: false,\n    autoplaySpeed: 2000,\n    centerMode: true,\n    centerPadding: '0px',\n    responsive: [{\n      breakpoint: 1260,\n      settings: {\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 1080,\n      settings: {\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  }); //Brand_slider\n\n  $('.brand-area').slick({\n    infinite: true,\n    slidesToShow: 5,\n    slidesToScroll: 1,\n    arrows: false,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 4,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1\n      }\n    }]\n  }); //Mentor _Slider\n\n  $('.ourinstructor-active').slick({\n    infinite: true,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    prevArrow: '.ourinstructor__wrapper .prev-arrow',\n    nextArrow: '.ourinstructor__wrapper .next-arrow',\n    responsive: [{\n      breakpoint: 1200,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        dots: false\n      }\n    }, {\n      breakpoint: 993,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        dots: false\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        dots: false\n      }\n    }]\n  }); //Event _Slider\n\n  $('.ourevent-active').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    autoplay: false,\n    arrows: false,\n    autoplaySpeed: 2000,\n    prevArrow: '.ourevent__wrapper .prev-arrow',\n    nextArrow: '.ourevent__wrapper .next-arrow',\n    responsive: [{\n      breakpoint: 1199,\n      settings: {\n        slidesToShow: 2,\n        dots: false\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        dots: false\n      }\n    }]\n  }); // filter items on button click\n\n  $('.populercourse-ist').on('click', 'li', function () {\n    var filterValue = $(this).attr('data-filter');\n    $grid.isotope({\n      filter: filterValue\n    }); // filter items on button click\n\n    $('.populercourse-ist').on('click', 'li', function () {\n      var filterValue = $(this).attr('data-filter');\n      $grid.isotope({\n        filter: filterValue\n      });\n    });\n  });\n  /* magnificPopup video view */\n\n  $('.popup-video').magnificPopup({\n    type: 'iframe'\n  }); //nice-select\n\n  $(document).ready(function () {\n    $('select').niceSelect();\n  }); // init Isotope\n\n  var $grid = $('.populercourse-item').isotope({// options\n  });\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/scss/main.scss?");

/***/ })

/******/ });