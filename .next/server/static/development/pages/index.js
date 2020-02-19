module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AboutSec.js":
/*!********************************!*\
  !*** ./components/AboutSec.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./includes/SectionTitle */ "./components/includes/SectionTitle.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/AboutSec.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const cardDataSet = [{
  pic: 'images/about/img-about1.png',
  title: '誠信與服務'
}, {
  pic: 'images/about/img-about2.png',
  title: '付款'
}, {
  pic: 'images/about/img-about3.png',
  title: '責任博彩'
}, {
  pic: 'images/about/img-about4.png',
  title: '嚴格保密及安全性維護'
}];

const AboutSec = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1149472188" + " " + "AboutSec",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1149472188" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
  subject: "\u95DC\u65BC\u5361\u5229",
  textShadow: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1149472188" + " " + "subTitle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "\u4E9E\u6D32\u6700\u65B0\u8208\u7684\u535A\u5F69\u5A1B\u6A02\u96C6\u5718"), __jsx("p", {
  className: "jsx-1149472188",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "\u5361\u5229\u5A1B\u6A02\u57CE (\u5B98\u65B9\u76F4\u71DF\u7DB2\u5740: cali99.net) \u70BA\u5361\u5229\u96C6\u5718\u5C08\u71DF\u7684\u7DDA\u4E0A\u535A\u5955\u5E73\u53F0\uFF0C\u6211\u5011\u79C9\u6301\u8AA0\u4FE1\u7F8E\u8B7D\u3001\u6548\u7387\u5FEB\u901F\u7684\u5B97\u65E8\uFF0C\u70BA\u6703\u54E1\u63D0\u4F9B\u512A\u826F\u5B8C\u5584\u7684\u904A\u6232\u74B0\u5883\u3002"), __jsx("div", {
  className: "jsx-1149472188" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1149472188" + " " + "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, cardDataSet.map((c, index) => __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
  key: index,
  pic: c.pic,
  title: c.title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
})))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1149472188",
  __self: undefined
}, "@media (max-width:479px){.subTitle.jsx-1149472188{font-size:1.5rem!important;margin-top:20px;}}p.jsx-1149472188{font-weight:300;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:1.8;max-width:620px;margin:0 auto 38px;color:#fff;text-align:center;text-shadow:0 2px 4px #000000;}.flex.jsx-1149472188{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.subTitle.jsx-1149472188{color:#fff;font-size:2.125rem;margin:-10px auto 20px;text-align:center;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-shadow:0 2px 4px #000000;}.AboutSec.jsx-1149472188::after{content:'';background:url(images/AboutSecBG.png) no-repeat;background-size:cover;opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;-webkit-filter:blur(3px);filter:blur(3px);}.AboutSec.jsx-1149472188{padding:0 0 78px;position:relative;z-index:0;background:rgba(0,0,0,0.65);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0Fib3V0U2VjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDTyxBQUk0QyxBQUtqQixBQVVMLEFBT0EsQUFRQSxBQWFNLFdBM0JKLEFBT00sQUFRNkIsS0F6QjdCLENBc0NELFVBM0NJLEdBdUJDLEtBcUJiLFFBM0NKLEVBNEN5QixRQXJCYixNQU9JLFlBTkwsRUFxQm5CLFFBZGUsSUFoQkUsU0FpQlQsTUFDQyxPQUNFLEVBN0JPLE9BOEJSLFFBQ1UsQ0E5QkYsZ0JBQ0csQ0FTVSxBQXFCbEIsV0FDTSxHQWJhLElBakJuQixXQUNPLGVBaUJwQixHQWhCZ0MsTUE2QmhDLHdCQTVCQSw4Q0FNQSIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9BYm91dFNlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi9pbmNsdWRlcy9TZWN0aW9uVGl0bGUnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuY29uc3QgY2FyZERhdGFTZXQgPSBbXG4gIHtcbiAgICBwaWM6ICdpbWFnZXMvYWJvdXQvaW1nLWFib3V0MS5wbmcnLFxuICAgIHRpdGxlOiAn6Kqg5L+h6IiH5pyN5YuZJ1xuICB9LFxuICB7XG4gICAgcGljOiAnaW1hZ2VzL2Fib3V0L2ltZy1hYm91dDIucG5nJyxcbiAgICB0aXRsZTogJ+S7mOasvidcbiAgfSxcbiAge1xuICAgIHBpYzogJ2ltYWdlcy9hYm91dC9pbWctYWJvdXQzLnBuZycsXG4gICAgdGl0bGU6ICfosqzku7vljZrlvaknXG4gIH0sXG4gIHtcbiAgICBwaWM6ICdpbWFnZXMvYWJvdXQvaW1nLWFib3V0NC5wbmcnLFxuICAgIHRpdGxlOiAn5Zq05qC85L+d5a+G5Y+K5a6J5YWo5oCn57at6K23J1xuICB9XG5dO1xuXG5jb25zdCBBYm91dFNlYyA9ICgpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWJvdXRTZWNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgc3ViamVjdD1cIumXnOaWvOWNoeWIqVwiIHRleHRTaGFkb3c9e3RydWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj7kup7mtLLmnIDmlrDoiIjnmoTljZrlvanlqJvmqILpm4blnJg8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAg5Y2h5Yip5aib5qiC5Z+OICjlrpjmlrnnm7Tnh5/ntrLlnYA6IGNhbGk5OS5uZXQpXG4gICAgICAgICAg54K65Y2h5Yip6ZuG5ZyY5bCI54ef55qE57ea5LiK5Y2a5aWV5bmz5Y+w77yM5oiR5YCR56eJ5oyB6Kqg5L+h576O6K2944CB5pWI546H5b+r6YCf55qE5a6X5peo77yM54K65pyD5ZOh5o+Q5L6b5YSq6Imv5a6M5ZaE55qE6YGK5oiy55Kw5aKD44CCXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIHtjYXJkRGF0YVNldC5tYXAoKGMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IHBpYz17Yy5waWN9IHRpdGxlPXtjLnRpdGxlfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzlweCl7XG4gICAgICAgICAgICAgICAgLnN1YlRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgIG1heC13aWR0aDogNjIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMzhweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJUaXRsZSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgICAgICAgICBtYXJnaW46IC0xMHB4IGF1dG8gMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5BYm91dFNlYzo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChpbWFnZXMvQWJvdXRTZWNCRy5wbmcpIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgICAgICAgfVxuICAgICAgICAuQWJvdXRTZWMge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCA3OHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0U2VjO1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/AboutSec.js */"));

/* harmony default export */ __webpack_exports__["default"] = (AboutSec);

/***/ }),

/***/ "./components/Bonus.js":
/*!*****************************!*\
  !*** ./components/Bonus.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/Bonus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Bonus = ({
  pic,
  title,
  time,
  context
}) => __jsx("div", {
  className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bonus,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  src: pic,
  alt: "",
  className: "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("div", {
  className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, title), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, context), __jsx("div", {
  className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottom,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("p", {
  className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.time,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, time), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  style: {
    whiteSpace: 'nowrap'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "\u66F4\u591A"))));

/* harmony default export */ __webpack_exports__["default"] = (Bonus);

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Card = props => __jsx("div", {
  style: {
    'width': '16.5rem'
  },
  className: "jsx-85263971" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("img", {
  src: props.pic,
  alt: "...",
  className: "jsx-85263971" + " " + "card-img-top",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-85263971" + " " + "card-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-85263971" + " " + 'title',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "85263971",
  __self: undefined
}, ".card.jsx-85263971{border:none;background-color:unset;box-shadow:1px 1px 3px rgba(0,0,0,.65);}.card-body.jsx-85263971{background:rgba(0,0,0,0.65);text-align:center;}.title.jsx-85263971{-webkit-text-decoration:none;text-decoration:none;color:#FFF3A7;font-size:1.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYVEsQUFHdUIsQUFLZ0IsQUFJUCxZQVJFLGdCQUtMLE9BSnFCLFdBS3ZDLElBR2MsY0FDSSxVQVJsQixRQVVBIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IENhcmQgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7J3dpZHRoJzogJzE2LjVyZW0nfX0+XG4gICAgPGltZyBzcmM9e3Byb3BzLnBpY30gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3RpdGxlJz57cHJvcHMudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7XG4gICAgICAgIGBcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwwLDAsLjY1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjY1KTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjRkZGM0E3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQiXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/Card.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/DDM.js":
/*!***************************!*\
  !*** ./components/DDM.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/DDM.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class DropDownMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: true
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({
      showMenu: false
    }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return __jsx("div", {
      style: {
        cursor: 'pointer',
        position: 'relative'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "nav-item nav-link",
      onClick: this.showMenu,
      style: {
        padding: '.5rem 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "\u66F4\u591A"), this.state.showMenu ? __jsx("div", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menu,
      ref: element => {
        this.dropdownMenu = element;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/user_evaluation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      className: "text-black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\u73A9\u5BB6\u8A55\u50F9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/access_process",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("a", {
      className: "text-black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\u5B58\u53D6\u6D41\u7A0B")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/app_download",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("a", {
      className: "text-black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "APP\u4E0B\u8F09")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/franchise",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      className: "text-black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "\u4EE3\u7406\u52A0\u76DF")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("a", {
      className: "text-black",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "\u95DC\u65BC\u5361\u5229"))) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DropDownMenu);

/***/ }),

/***/ "./components/Drawer.js":
/*!******************************!*\
  !*** ./components/Drawer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/Drawer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Drawer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: false
    });

    _defineProperty(this, "show", () => {
      this.setState({
        show: !this.state.show
      }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    });

    _defineProperty(this, "closeMenu", () => {
      this.setState({
        show: false
      }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    });
  }

  render() {
    const _class = {
      true: 'drawerBox active',
      false: 'drawerBox'
    };
    return __jsx("div", {
      onClick: this.show,
      className: "jsx-3308944657" + " " + (_class[this.state.show] || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3308944657" + " " + "infoBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-3308944657",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "\u5728\u7DDA\u5BA2\u670D"), __jsx("img", {
      src: "images/qrCode.png",
      alt: "",
      className: "jsx-3308944657" + " " + "img-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3308944657" + " " + "infoBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("img", {
      src: "images/line-messenger.svg",
      alt: "",
      className: "jsx-3308944657" + " " + "img-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3308944657",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "@888pi")), __jsx("div", {
      className: "jsx-3308944657" + " " + "infoBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontSize: '.85rem'
      },
      className: "jsx-3308944657",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "\u610F\u898B\u53CD\u994B 8888pipipi@gmail.com")), __jsx("div", {
      className: "jsx-3308944657" + " " + "TrapezoidTag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3308944657" + " " + "triangleBottomRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3308944657" + " " + "triangleTopRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-3308944657" + " " + "iconfont iconHR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3308944657",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\u806F\u7CFB\u6211\u5011")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3308944657",
      __self: this
    }, ".drawerBox.jsx-3308944657{max-width:182px;padding:20px;position:fixed;z-index:999;background-color:black;right:-182px;top:8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.drawerBox.active.jsx-3308944657{right:0;}.infoBox.jsx-3308944657{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #979797;}.drawerBox.jsx-3308944657 .infoBox.jsx-3308944657:nth-child(3){border-bottom:unset;}.infoBox.jsx-3308944657 img.jsx-3308944657{margin-bottom:10px;max-width:64px;}.infoBox.jsx-3308944657 p.jsx-3308944657{color:#fff;text-align:center;}.TrapezoidTag.jsx-3308944657{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:-44px;background-color:#00adff;height:calc(223px - 44px);width:44px;color:black;background-image:linear-gradient( 180deg, #827610 3%, #ebdb5a 47%, #805d24 100% );}.TrapezoidTag.jsx-3308944657 p.jsx-3308944657{color:black;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb;writing-mode:vertical-lr;}.TrapezoidTag.jsx-3308944657 span.jsx-3308944657{font-size:2rem;}.triangleTopRight.jsx-3308944657{position:absolute;bottom:-30px;width:0;height:0;border-top:30px solid #805d24;border-left:44px solid transparent;}.triangleBottomRight.jsx-3308944657{position:absolute;top:-30px;width:0;height:0;border-bottom:30px solid #827610;border-left:44px solid transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0RyYXdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFcsQUFHK0IsQUFZUixBQUdLLEFBUU8sQUFHRCxBQUlSLEFBSUMsQUF1QkEsQUFJRyxBQUdHLEFBUUEsUUEzRHBCLEdBa0JvQixDQUlMLEFBdUJZLENBMUNaLEVBOENmLENBN0RlLEVBZ0VBLEFBUUgsQ0E5Q0ssQ0FIakIsUUFrRFUsQ0F4RU8sQUE4QmpCLEVBa0NVLEdBdENWLEVBK0NXLEdBUkEsS0FoRUcsQ0F5RXFCLEdBUkgsUUFoRVAsc0JBaUVZLEFBUUEsQ0F4RXRCLE9BK0JTLENBbkJBLEdBMEN4QixFQXJEUyxPQUNNLGNBK0RmLEFBUUEsbURBekN5QixDQW5CTyxRQVZSLDhFQUNVLFlBNkJiLGlCQW5CQSwyQ0FUckIsaUNBNkJpQixlQUNHLEVBcEJjLGdCQXFCeEIsUUFDbUIsUUFyQjdCLHFGQXNCYSxXQUNjLHlCQUNDLDBCQUNmLFdBQ0MsWUFNWCxrRkFFSCIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9EcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRHJhd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvdzogZmFsc2VcbiAgfTtcblxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiAhdGhpcy5zdGF0ZS5zaG93IH0sICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNsb3NlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IF9jbGFzcyA9IHtcbiAgICAgIHRydWU6ICdkcmF3ZXJCb3ggYWN0aXZlJyxcbiAgICAgIGZhbHNlOiAnZHJhd2VyQm94J1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtfY2xhc3NbdGhpcy5zdGF0ZS5zaG93XX0gb25DbGljaz17dGhpcy5zaG93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvQm94XCI+XG4gICAgICAgICAgPHA+5Zyo57ea5a6i5pyNPC9wPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3FyQ29kZS5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9Cb3hcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJpbWFnZXMvbGluZS1tZXNzZW5nZXIuc3ZnXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD5AODg4cGk8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9Cb3hcIj5cbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJy44NXJlbScgfX0+5oSP6KaL5Y+N6aWLIDg4ODhwaXBpcGlAZ21haWwuY29tPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUcmFwZXpvaWRUYWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWFuZ2xlQm90dG9tUmlnaHRcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYW5nbGVUb3BSaWdodFwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbkhSXCIgLz5cbiAgICAgICAgICA8cD7oga/ns7vmiJHlgJE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZHJhd2VyQm94IHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxODJweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICByaWdodDogLTE4MnB4O1xuICAgICAgICAgICAgICB0b3A6IDglO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcmF3ZXJCb3guYWN0aXZlIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5mb0JveCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZHJhd2VyQm94IC5pbmZvQm94Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmluZm9Cb3ggaW1nIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmluZm9Cb3ggcCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuVHJhcGV6b2lkVGFnIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgIGxlZnQ6IC00NHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGZmO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMjIzcHggLSA0NHB4KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgIDE4MGRlZyxcbiAgICAgICAgICAgICAgICAjODI3NjEwIDMlLFxuICAgICAgICAgICAgICAgICNlYmRiNWEgNDclLFxuICAgICAgICAgICAgICAgICM4MDVkMjQgMTAwJVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlRyYXBlem9pZFRhZyBwIHtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlRyYXBlem9pZFRhZyBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRyaWFuZ2xlVG9wUmlnaHQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDMwcHggc29saWQgIzgwNWQyNDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDQ0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJpYW5nbGVCb3R0b21SaWdodCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMzBweCBzb2xpZCAjODI3NjEwO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogNDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/Drawer.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./includes/SectionTitle */ "./components/includes/SectionTitle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Footer = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1969635982" + " " + 'footer',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1969635982" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
  subject: "\u5361\u5229\u5408\u4F5C\u5A1B\u6A02\u54C1\u724C",
  textShadow: false,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1969635982" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1969635982" + " " + "iconBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("span", {
  style: {
    'fontSize': '7rem'
  },
  className: "jsx-1969635982" + " " + 'iconfont icon_allbet',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-1969635982" + " " + 'iconfont icon_DreamGaming',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("span", {
  style: {
    'fontSize': '4rem'
  },
  className: "jsx-1969635982" + " " + 'iconfont icon_WM',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("span", {
  style: {
    'fontSize': '5rem'
  },
  className: "jsx-1969635982" + " " + 'iconfont icon_SAgaming',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-1969635982" + " " + 'iconfont icon_SUPER',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("span", {
  style: {
    'fontSize': '4.5rem'
  },
  className: "jsx-1969635982" + " " + 'iconfont icon_AFBCash',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-1969635982" + " " + "iconBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-1969635982" + " " + 'iconfont icon_Klottery',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("span", {
  style: {
    'fontSize': '5rem'
  },
  className: "jsx-1969635982" + " " + 'iconfont icon_SUPERbingo',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("span", {
  style: {
    'fontSize': '4.8rem'
  },
  className: "jsx-1969635982" + " " + 'iconfont icon_RTGslots',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-1969635982" + " " + 'iconfont icon_betixion',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-1969635982" + " " + 'iconfont icon_betsoft',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))), __jsx(_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
  subject: "\u570B\u969B\u5B89\u5168\u8A8D\u8B49",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1969635982" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1969635982" + " " + "securityLogoBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("img", {
  src: "images/securityLogo/partner_logo_1.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("img", {
  src: "images/securityLogo/partner_logo_2.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("img", {
  src: "images/securityLogo/partner_logo_3.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("img", {
  src: "images/securityLogo/partner_logo_4.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("img", {
  src: "images/securityLogo/partner_logo_5.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("img", {
  src: "images/securityLogo/partner_logo_6.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("img", {
  src: "images/securityLogo/partner_logo_7.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("img", {
  src: "images/securityLogo/partner_logo_8.png",
  alt: "",
  className: "jsx-1969635982" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}))), __jsx("p", {
  className: "jsx-1969635982",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Copyright\xA9 2019 Allbetgaming.com. All Rights Reserved. \u670D\u52D9\u689D\u6B3E|\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56"), __jsx("div", {
  className: "jsx-1969635982" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1969635982" + " " + "footerLink",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1969635982",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "\u5A1B\u6A02\u57CE")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1969635982",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "\u767E\u5BB6\u6A02")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1969635982",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "\u7403\u7248\u73FE\u91D1\u7248")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1969635982",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "\u96FB\u5B50\u62C9\u9738")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1969635982",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "\u946B\u57CE\u8CD3\u679C")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1969635982",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "\u767E\u5BB6\u6A02\u6280\u5DE7\u6559\u5B78")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1969635982",
  __self: undefined
}, "@media (max-width:479px){span.iconfont.jsx-1969635982{font-size:3rem!important;margin:0;padding:0;}}@media (min-width:480px) and (max-width:1024px){.securityLogoBox.jsx-1969635982{margin:0 auto;}.securityLogoBox.jsx-1969635982 img.jsx-1969635982{max-width:40px;margin:5px;}.footer.jsx-1969635982{padding:0;}span.iconfont.jsx-1969635982{font-size:3rem!important;margin:0;padding:0;}.footerLink.jsx-1969635982{margin:0 auto;}.footerLink.jsx-1969635982 a.jsx-1969635982{font-size:.85rem;}}.footerLink.jsx-1969635982{margin:0 auto;text-align:center;color:#fff;}.footerLink.jsx-1969635982 a.jsx-1969635982{color:#fff;-webkit-text-decoration:none;text-decoration:none;padding:5px 10px;}.securityLogoBox.jsx-1969635982{margin:0 auto;text-align:center;}.securityLogoBox.jsx-1969635982 img.jsx-1969635982{margin:0 10px;}.iconBox.jsx-1969635982:first-child{margin-top:-30px;}.iconBox.jsx-1969635982:last-child{margin-bottom:30px;}.iconBox.jsx-1969635982{margin:0 auto;max-width:800px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:120px;}span.iconfont.jsx-1969635982{font-size:6rem;margin:0 20px;background-image:linear-gradient(0deg,#6236FF 0%,#9a5fc9 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}span.iconfont.jsx-1969635982:hover{color:#ce70ff;text-shadow:0 1px 3px rgba(0,0,0,.65);background-image:unset;-webkit-background-clip:unset;-webkit-text-fill-color:unset;}p.jsx-1969635982{font-weight:300;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:1.8;max-width:760px;margin:10px auto 38px;color:#fff;text-align:center;text-shadow:0 2px 4px #000000;}.flex.jsx-1969635982{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.subTitle.jsx-1969635982{color:#fff;font-size:2.125rem;margin:-10px auto 20px;text-align:center;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-shadow:0 2px 4px #000000;}.footer.jsx-1969635982::after{content:\"\";background:url(images/bg_section_cooperation.png) no-repeat;opacity:1;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.footer.jsx-1969635982{padding:0 0 78px;position:relative;z-index:0;background:unset;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RU0sQUFJMEMsQUFPWCxBQUdDLEFBSUwsQUFHZSxBQUtYLEFBR0csQUFJUCxBQUtILEFBS0csQUFJQSxBQUdHLEFBR0UsQUFHTCxBQVNDLEFBUUQsQUFPRCxBQVdGLEFBS0EsQUFRRixBQVdNLFVBaEdiLENBb0JtQixBQXFEUixBQUtNLEFBUXVDLEdBN0Z6RCxBQWVDLEFBT2dCLEFBVUEsQUFJcEIsQUFTa0IsQUFpQnNCLENBM0R2QixBQW1ERCxDQWVHLENBbkRmLEFBcUJKLEFBaUVrQixFQTlEbEIsTUFqRGUsQUFpQkEsQ0FOWCxHQW1EK0QsQ0FUckQsQUF3Q1csRUEvRFosQUFVYixFQXZDZ0IsQUFpQkEsQ0E4Rk4sUUFqRlYsQ0E3QkksQUFpQkEsQ0E4RmEsT0EzQ1EsQ0F3QkwsUUEzREQsQ0ErRW5CLFNBbkJtQixBQU1ULElBOUJzQixHQW5DaEMsR0FrRU0sSUFkeUIsRUFleEIsS0F4Q3dCLEVBeUN0QixTQUNELENBbkRpQixDQWtCTyxJQUtoQixFQTZCRSxVQTFDb0IsSUFjdEIsSUE2QkwsTUFsQ1gsS0FtQ0EsQ0E3QnNCLGVBaUJVLENBOUJoQyxNQWNXLFdBQ08sWUFnQmxCLE1BZjhCLFdBM0JULEtBa0NyQixjQUxBLDBFQTVCaUIseURBQ0UsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4vaW5jbHVkZXMvU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSBzdWJqZWN0PSfljaHliKnlkIjkvZzlqJvmqILlk4HniYwnIHRleHRTaGFkb3c9e2ZhbHNlfS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uQm94XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fYWxsYmV0JyBzdHlsZT17eydmb250U2l6ZSc6ICc3cmVtJ319Lz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9EcmVhbUdhbWluZycvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX1dNJyBzdHlsZT17eydmb250U2l6ZSc6ICc0cmVtJ319Lz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9TQWdhbWluZycgc3R5bGU9e3snZm9udFNpemUnOiAnNXJlbSd9fS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fU1VQRVInLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9BRkJDYXNoJyBzdHlsZT17eydmb250U2l6ZSc6ICc0LjVyZW0nfX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbkJveFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX0tsb3R0ZXJ5Jy8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fU1VQRVJiaW5nbycgc3R5bGU9e3snZm9udFNpemUnOiAnNXJlbSd9fS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fUlRHc2xvdHMnIHN0eWxlPXt7J2ZvbnRTaXplJzogJzQuOHJlbSd9fS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fYmV0aXhpb24nLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9iZXRzb2Z0Jy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VjdGlvblRpdGxlIHN1YmplY3Q9J+Wci+mam+WuieWFqOiqjeitiScvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdXJpdHlMb2dvQm94XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzEucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzIucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzMucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzQucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzUucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzYucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzcucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zZWN1cml0eUxvZ28vcGFydG5lcl9sb2dvXzgucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5Db3B5cmlnaHTCqSAyMDE5IEFsbGJldGdhbWluZy5jb20uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIOacjeWLmeaineasvnzpmrHnp4HmrIrkv53orbfmlL/nrZY8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckxpbmtcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8YT7lqJvmqILln448L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgPGE+55m+5a625qiCPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgfFxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxhPueQg+eJiOePvumHkeeJiDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8YT7pm7vlrZDmi4npnLg8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgPGE+6ZGr5Z+O6LOT5p6cPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgfFxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxhPueZvuWutuaoguaKgOW3p+aVmeWtuDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntcbiAgICAgIGBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDc5cHgpe1xuICAgICAgICAgICAgICBzcGFuLmljb25mb250IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW0haW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgIC5zZWN1cml0eUxvZ29Cb3h7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5zZWN1cml0eUxvZ29Cb3ggaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzcGFuLmljb25mb250IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW0haW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mb290ZXJMaW5rIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZm9vdGVyTGluayBhIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44NXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3Rlckxpbmsge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3RlckxpbmsgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VjdXJpdHlMb2dvQm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VjdXJpdHlMb2dvQm94IGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb25Cb3g6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uQm94Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb25Cb3gge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4uaWNvbmZvbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzYyMzZGRiAwJSwgIzlhNWZjOSAxMDAlKTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4uaWNvbmZvbnQ6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNjZTcwZmY7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsLjY1KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHVuc2V0O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXdlaWdodDozMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgIG1heC13aWR0aDogNzYwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMzhweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwMDAwO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViVGl0bGV7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gICAgICAgICAgICBtYXJnaW46IC0xMHB4IGF1dG8gMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCAjMDAwMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VzL2JnX3NlY3Rpb25fY29vcGVyYXRpb24ucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xOyAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCA3OHB4OyAgXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgICAgICAgfWBcbiAgICB9XG5cbiAgICA8L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/ScrollButton.js":
/*!************************************!*\
  !*** ./components/ScrollButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/ScrollButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class ScrollButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }

    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({
      intervalId: intervalId
    });
  }

  render() {
    return __jsx("button", {
      title: "Back to top",
      className: 'scroll active',
      onClick: () => {
        this.scrollToTop();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("span", {
      className: "arrow-up iconfont iconchevron-up-solid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ScrollButton);

/***/ }),

/***/ "./components/StartPlayingDesktop.js":
/*!*******************************************!*\
  !*** ./components/StartPlayingDesktop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs */ "./components/Tabs.js");
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/StartPlayingDesktop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class StartPlayingDesktop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      TabsActiveDefault: [true, false, false, false, false],
      TabsData: [{
        "index": "0",
        "icon": "baccarat",
        "tabName": "真人娛樂",
        "tabImage": "images/startPlay/truePeople_photo.jpg",
        "gameProvider": ["allbet", "DreamGaming", "WM", "SAgaming"]
      }, {
        "index": "1",
        "icon": "futbol-solid",
        "tabName": "體育博彩",
        "tabImage": "images/startPlay/sport_photo.jpg",
        "gameProvider": ["SUPER", "AFBCash"]
      }, {
        "index": "2",
        "icon": "ticket-alt-solid",
        "tabName": "賓果彩票",
        "tabImage": "images/startPlay/lottery_photo.jpg",
        "gameProvider": ["Klottery", "SUPERbingo"]
      }, {
        "index": "3",
        "icon": "alien-monster-solid",
        "tabName": "電子遊戲",
        "tabImage": "images/startPlay/poker_photo.jpg",
        "gameProvider": ["RTGslots", "SAgaming", "betixion", "betsoft"]
      }, {
        "index": "4",
        "icon": "fish",
        "tabName": "捕魚王",
        "tabImage": "images/startPlay/fish_photo.jpg",
        "gameProvider": ["allbet", "SAgaming"]
      }]
    };
    this.expandTab = this.expandTab.bind(this);
  }

  expandTab(index) {
    // console.log('open tab!!', index);
    const reset = this.state.TabsActiveDefault.map(() => false);
    reset[index] = true;
    this.setState({
      TabsActiveDefault: reset
    });
  }

  render() {
    const {
      TabsActiveDefault,
      TabsData
    } = this.state;
    return __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, TabsData.map(Tab => __jsx(_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: parseInt(Tab.index),
      active: TabsActiveDefault[Tab.index],
      open: this.expandTab,
      index: Tab.index,
      icon: Tab.icon,
      tabName: Tab.tabName,
      tabImage: Tab.tabImage,
      gameProvider: Tab.gameProvider,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StartPlayingDesktop);

/***/ }),

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/Tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Tabs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.openTab = this.openTab.bind(this);
  }

  openTab(index) {
    this.props.open(index);
  }

  render() {
    const _class = {
      true: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconTab} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active}`,
      false: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconTab}`
    };
    const {
      icon,
      tabName,
      gameProvider,
      tabImage
    } = this.props;
    return __jsx("li", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tabs,
      onClick: () => this.openTab(this.props.index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: _class[this.props.active],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("span", {
      className: `iconfont icon_${icon}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, tabName)), this.props.active ? __jsx("div", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contentBox,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contentIMG,
      src: tabImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("div", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconBox,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, gameProvider.length > 2 ? gameProvider.map((p, index) => __jsx("div", {
      key: index,
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconBtn,
      style: {
        'maxWidth': '100px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("span", {
      className: `iconfont icon_${p}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))) : gameProvider.map((p, index) => __jsx("div", {
      key: index,
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconBtn,
      style: {
        'maxWidth': '120px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("span", {
      className: `iconfont icon_${p}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))))) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/UserBox.js":
/*!*******************************!*\
  !*** ./components/UserBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/UserBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserBox = () => __jsx("div", {
  className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userBox,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userNumber,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "VIP8 \u6703\u54E11658432"), __jsx("div", {
  className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.starBox,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("span", {
  className: "iconfont icon_star-solid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("span", {
  className: "iconfont icon_star-solid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("span", {
  className: "iconfont icon_star-solid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("span", {
  className: "iconfont icon_star-solid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("span", {
  className: "iconfont icon_star-solid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "\u5361\u5229\u5A1B\u6A02\u57CE\u662F\u771F\u5FC3\u80FD\u4FE1\u8CF4\u7684~\u5C31\u7B97\u6211\u8D0F\u4E8615\u842C\uFF0C\u51FA\u91D1\u4E5F\u5F88\u5FEB\u4E0D\u56C9\u55E6\uFF0C\u800C\u4E14\u904A\u6232\u7A2E\u985E\u5F88\u591A\uFF0C\u4E5F\u6709\u5F88\u591A\u512A\u60E0\uFF0C\u559C\u6B61!"));

/* harmony default export */ __webpack_exports__["default"] = (UserBox);

/***/ }),

/***/ "./components/UserEvaluationSec.js":
/*!*****************************************!*\
  !*** ./components/UserEvaluationSec.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./includes/SectionTitle */ "./components/includes/SectionTitle.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserBox */ "./components/UserBox.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-measure */ "react-measure");
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_measure__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/UserEvaluationSec.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class UserEvaluationSec extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dimensions: {
        width: -1,
        height: -1
      }
    });
  }

  render() {
    const {
      width,
      height
    } = this.state.dimensions;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1923627140" + " " + 'useEvaluationSec',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1923627140" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      subject: "\u5361\u5229\u73A9\u5BB6\u5BE6\u6E2C",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1923627140" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(react_measure__WEBPACK_IMPORTED_MODULE_6___default.a, {
      bounds: true,
      onResize: contentRect => {
        this.setState({
          dimensions: contentRect.bounds
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, ({
      measureRef
    }) => __jsx("div", {
      className: "jsx-1923627140" + " " + "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      ref: measureRef,
      className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userTest || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.top || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      src: "images/userTest.png",
      alt: "",
      className: "jsx-1923627140" + " " + "img-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userTest_title || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "\u5361\u5229\u5A1B\u6A02\u57CE"), __jsx("div", {
      className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.starBox || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-1923627140",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "4.8"), __jsx("span", {
      className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), __jsx("p", {
      className: "jsx-1923627140",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "\u5171168\u5247\u8A55\u8AD6"))), __jsx("p", {
      className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.paragraph || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\u5361\u5229\u73A9\u5BB6\u5BE6\u969B\u904A\u73A9\u56DE\u994B\uFF0CVIP3\u4EE5\u4E0A\u6703\u54E1\u5373\u53EF\u8A55\u50F9\uFF0C\u8A8D\u8B49\u6A5F\u5236\u4FDD\u8B49\u771F\u5BE6\u6027\uFF0C\u5404\u4F4D\u6703\u54E1\u63D0\u51FA\u5C0D\u5361\u5229\u5A1B\u6A02\u57CE\u7684\u610F\u898B\uFF0C\u5361\u5229\u5A1B\u6A02\u57CE\u66F4\u52A0\u9032\u6B65\uFF0C\u6253\u9020\u51FA\u66F4\u8B93\u5404\u70BA\u559C\u611B\u7684\u7DDA\u4E0A\u535A\u5F08\u5E73\u53F0\u3002")))), __jsx("div", {
      style: {
        'maxHeight': this.state.dimensions.height
      },
      className: "jsx-1923627140" + " " + `col ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userFeedBackBox}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_UserBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx(_UserBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx(_UserBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("button", {
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/user_evaluation'),
      type: "button",
      style: {
        'backgroundColor': '#6236FF',
        'color': 'white',
        'width': '80%',
        'margin': '10px auto'
      },
      className: "jsx-1923627140" + " " + "btn btn-block btn-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "\u67E5\u770B\u66F4\u591A"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1923627140",
      __self: this
    }, ".useEvaluationSec.jsx-1923627140::after{content:\"\";background:url(images/userEvaluationSecBg.png) no-repeat;background-size:cover;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.useEvaluationSec.jsx-1923627140{margin-top:20px;padding:0 0 25px;position:relative;z-index:0;background:rgba(0,0,0,.65);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL1VzZXJFdmFsdWF0aW9uU2VjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFVSxBQUdzQixBQWFLLFdBWnlDLEtBYXhDLGlCQUNDLGtCQUNSLFVBQ2lCLE9BZkwsb0JBZ0J0QixFQWZzQixvREFDVCxhQUNQLE1BQ0MsT0FDRSxTQUNELFFBQ1Usa0JBQ1AsV0FDWCIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9Vc2VyRXZhbHVhdGlvblNlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9pbmNsdWRlcy9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9tYWluLnNjc3NcIjtcbmltcG9ydCBVc2VyQm94IGZyb20gXCIuL1VzZXJCb3hcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICdyZWFjdC1tZWFzdXJlJ1xuXG5jbGFzcyBVc2VyRXZhbHVhdGlvblNlYyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgIHdpZHRoOiAtMSxcbiAgICAgIGhlaWdodDogLTEsXG4gICAgfSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5zdGF0ZS5kaW1lbnNpb25zO1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VFdmFsdWF0aW9uU2VjJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSBzdWJqZWN0PSfljaHliKnnjqnlrrblr6bmuKwnLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxNZWFzdXJlXG4gICAgICAgICAgICAgICAgYm91bmRzXG4gICAgICAgICAgICAgICAgb25SZXNpemU9e2NvbnRlbnRSZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RpbWVuc2lvbnM6IGNvbnRlbnRSZWN0LmJvdW5kc30pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsoeyBtZWFzdXJlUmVmIH0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e21lYXN1cmVSZWZ9IGNsYXNzTmFtZT17Y3NzLnVzZXJUZXN0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50b3B9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3VzZXJUZXN0LnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnVzZXJUZXN0X3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg5Y2h5Yip5aib5qiC5Z+OXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc3RhckJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjQuODwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5YWxMTY45YmH6KmV6KuWPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjc3MucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgICAgICAgICDljaHliKnnjqnlrrblr6bpmpvpgYrnjqnlm57ppYvvvIxWSVAz5Lul5LiK5pyD5ZOh5Y2z5Y+v6KmV5YO577yM6KqN6K2J5qmf5Yi25L+d6K2J55yf5a+m5oCn77yM5ZCE5L2N5pyD5ZOh5o+Q5Ye65bCN5Y2h5Yip5aib5qiC5Z+O55qE5oSP6KaL77yM5Y2h5Yip5aib5qiC5Z+O5pu05Yqg6YCy5q2l77yM5omT6YCg5Ye65pu06K6T5ZCE54K65Zac5oSb55qE57ea5LiK5Y2a5byI5bmz5Y+w44CCXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTWVhc3VyZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wgJHtjc3MudXNlckZlZWRCYWNrQm94fWB9IHN0eWxlPXt7J21heEhlaWdodCc6dGhpcy5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodH19PlxuICAgICAgICAgICAgICAgIDxVc2VyQm94Lz5cbiAgICAgICAgICAgICAgICA8VXNlckJveC8+XG4gICAgICAgICAgICAgICAgPFVzZXJCb3gvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvdXNlcl9ldmFsdWF0aW9uJyl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICcjNjIzNkZGJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzgwJScsXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4nOiAnMTBweCBhdXRvJ1xuICAgICAgICAgICAgICAgICAgfX0+5p+l55yL5pu05aSaXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgIGBcbiAgICAgICAgICAudXNlRXZhbHVhdGlvblNlYzo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKGltYWdlcy91c2VyRXZhbHVhdGlvblNlY0JnLnBuZykgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxMDAlKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjMyO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7ICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC51c2VFdmFsdWF0aW9uU2VjIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAyNXB4OyAgXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNjUpO1xuICAgICAgICAgIH1gXG4gICAgICAgIH1cblxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyRXZhbHVhdGlvblNlYyJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/UserEvaluationSec.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserEvaluationSec);

/***/ }),

/***/ "./components/includes/BottomNav.js":
/*!******************************************!*\
  !*** ./components/includes/BottomNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/includes/BottomNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BottomNav = () => {
  return __jsx("nav", {
    className: `navbar fixed-bottom ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.BottomNav}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("span", {
    className: `iconfont icon_Transfer`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), "\u5E73\u53F0\u8F49\u5E33")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("span", {
    className: `iconfont icon_gift-solid`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), "\u6700\u65B0\u512A\u60E0")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("span", {
    className: `iconfont icon_sack-dollar-solid`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), "\u5728\u7DDA\u63D0\u6B3E")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    className: `iconfont iconHR`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), "\u5728\u7DDA\u5BA2\u670D")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("span", {
    className: `iconfont icon_user-solid`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), "\u6703\u54E1\u4E2D\u5FC3")));
};

/* harmony default export */ __webpack_exports__["default"] = (BottomNav);

/***/ }),

/***/ "./components/includes/Header.js":
/*!***************************************!*\
  !*** ./components/includes/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/includes/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: '',
      password: ''
    });

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      console.log(this.state);
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerBG || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexContainer || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("button", {
      style: {
        marginRight: '5px'
      },
      type: "button",
      className: "jsx-2250508871" + " " + "btn btn-dark btn-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "\u7ACB\u5373\u8A3B\u518A\xA0", __jsx("span", {
      style: {
        color: 'white'
      },
      className: "jsx-2250508871" + " " + "iconfont icon_user-plus-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flex || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("input", {
      style: {
        marginRight: '5px'
      },
      type: "text",
      placeholder: "\u6703\u54E1\u8CEC\u865F",
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("input", {
      style: {
        marginRight: '5px'
      },
      type: "text",
      placeholder: "\u767B\u5165\u5BC6\u78BC",
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx("button", {
      onSubmit: this.handleSubmit,
      style: {
        marginRight: '5px'
      },
      type: "button",
      className: "jsx-2250508871" + " " + "btn btn-outline-dark btn-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\u767B\u5165"), __jsx("button", {
      type: "button",
      className: "jsx-2250508871" + " " + "btn btn-outline-dark btn-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\u5FD8\u8A18\u5BC6\u78BC"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2250508871",
      __self: this
    }, "@media (max-width:1024px){.flexContainer.jsx-2250508871{-webkit-box-pack:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;}}.headerBG.jsx-2250508871{background-image:linear-gradient( 180deg, #fdf8a2 3%, #f4d97a 47%, #eec462 100% );}.flexContainer.jsx-2250508871{height:45px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding:5px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;max-width:1100px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRFcsQUFJbUQsQUFTbkMsQUFHVyxZQUNDLHNFQUhmLElBSW9CLHlEQWJsQiw0Q0FjWSxZQUNhLGlHQUNSLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlc2tUb3BMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9kZXNrVG9wTGF5b3V0JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJ1xuICB9O1xuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaGVhZGVyQkd9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtjc3MuZmxleENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOeri+WNs+iou+WGiiZuYnNwO1xuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdXNlci1wbHVzLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmZsZXh9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmnIPlk6Hos6zomZ9cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLnmbvlhaXlr4bnorxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFyayBidG4tc21cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDnmbvlhaVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtXCI+XG4gICAgICAgICAgICAgIOW/mOiomOWvhueivFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAuZmxleENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlckJHIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgIDE4MGRlZyxcbiAgICAgICAgICAgICAgICAjZmRmOGEyIDMlLFxuICAgICAgICAgICAgICAgICNmNGQ5N2EgNDclLFxuICAgICAgICAgICAgICAgICNlZWM0NjIgMTAwJVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZsZXhDb250YWluZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/includes/Header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/includes/MainNav.js":
/*!****************************************!*\
  !*** ./components/includes/MainNav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DDM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DDM */ "./components/DDM.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sizes */ "react-sizes");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/includes/MainNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  list: {
    width: 350
  },
  fullList: {
    width: 'auto'
  }
});

const MainNav = ({
  isMobile,
  isTablet
}) => {
  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread({}, state, {
      [side]: open
    }));
  };

  const sideList = side => __jsx("div", {
    className: `${classes.list} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slideMenu}`,
    role: "presentation",
    onClick: toggleDrawer(side, false),
    onKeyDown: toggleDrawer(side, false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuMain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_user-circle-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "\u767B\u5165")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_home-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "\u9996\u9801"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/online_baccarat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_baccarat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "\u771F\u4EBA\u5A1B\u6A02"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_futbol-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "\u9AD4\u80B2\u535A\u5F69"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_ticket-alt-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "\u8CD3\u679C\u5F69\u7968"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_alien-monster-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "\u96FB\u5B50\u904A\u6232"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "\u6355\u9B5A\u738B")))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/online_baccarat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_gift-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "\u512A\u60E0\u6D3B\u52D5"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_star-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "\u73A9\u5BB6\u8A55\u50F9"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_wallet-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "\u5B58\u53D6\u6D41\u7A0B"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_cloud-download-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "APP\u4E0B\u8F09"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_handshake-alt-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "\u4EE3\u7406\u52A0\u76DF"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_Cali_logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "\u95DC\u65BC\u5361\u5229"))))));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("header", {
    className: "jsx-82805793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-82805793" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-82805793" + " " + "navbar navbar-expand-lg navbar-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, isTablet ? __jsx("span", {
    onClick: toggleDrawer('left', true),
    className: "jsx-82805793" + " " + "iconfont icon_bars-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }) : '', __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default.a, {
    open: state.left,
    onClose: toggleDrawer('left', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, sideList('left')), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-82805793" + " " + `navbar-brand ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/Cali_logo_02.png",
    alt: "",
    className: "jsx-82805793" + " " + "img-responsive logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }))), isTablet ? '' : __jsx("div", {
    className: "jsx-82805793" + " " + "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-82805793" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.flexContainer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/online_baccarat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "\u771F\u4EBA\u5A1B\u6A02")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, "\u9AD4\u80B2\u535A\u5F69")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "\u8CD3\u679C\u5F69\u7968")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, "\u96FB\u5B50\u904A\u6232")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, "\u6355\u9B5A\u738B")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/promotions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, "\u512A\u60E0\u6D3B\u52D5")), __jsx(_DDM__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "82805793",
    __self: undefined
  }, "span.iconfont.jsx-82805793{margin-left:10px;font-size:1.875rem;background:linear-gradient( 180deg, #fdf8a2 3%, #f4d97a 47%, #eec462 100% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL01haW5OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ09XLEFBR2dDLGlCQUNFLG1CQU1sQiw0RUFDNEIsNkJBQ08sb0NBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL01haW5OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gJy4uL0RETSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHdpdGhTaXplcyBmcm9tICdyZWFjdC1zaXplcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGxpc3Q6IHtcbiAgICB3aWR0aDogMzUwXG4gIH0sXG4gIGZ1bGxMaXN0OiB7XG4gICAgd2lkdGg6ICdhdXRvJ1xuICB9XG59KTtcblxuY29uc3QgTWFpbk5hdiA9ICh7IGlzTW9iaWxlLCBpc1RhYmxldCB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdG9wOiBmYWxzZSxcbiAgICBsZWZ0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZVxuICB9KTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoc2lkZSwgb3BlbikgPT4gZXZlbnQgPT4ge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJlxuICAgICAgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtzaWRlXTogb3BlbiB9KTtcbiAgfTtcblxuICBjb25zdCBzaWRlTGlzdCA9IHNpZGUgPT4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saXN0fSAke2Nzcy5zbGlkZU1lbnV9YH1cbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKHNpZGUsIGZhbHNlKX1cbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKHNpZGUsIGZhbHNlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1lbnVCbG9ja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudU1haW59PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdXNlci1jaXJjbGUtc29saWRcIiAvPlxuICAgICAgICAgIDxwPueZu+WFpTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudUl0ZW1zfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2hvbWUtc29saWRcIiAvPlxuICAgICAgICAgICAgICA8cD7pppbpoIE8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb25saW5lX2JhY2NhcmF0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fYmFjY2FyYXRcIiAvPlxuICAgICAgICAgICAgICA8cD7nnJ/kurrlqJvmqII8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BvcnRzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fZnV0Ym9sLXNvbGlkXCIgLz5cbiAgICAgICAgICAgICAgPHA+6auU6IKy5Y2a5b2pPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvdHRlcnlcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl90aWNrZXQtYWx0LXNvbGlkXCIgLz5cbiAgICAgICAgICAgICAgPHA+6LOT5p6c5b2p56WoPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2VsZWN0cm9uaWNzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fYWxpZW4tbW9uc3Rlci1zb2xpZFwiIC8+XG4gICAgICAgICAgICAgIDxwPumbu+WtkOmBiuaIsjwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9maXNoXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fZmlzaFwiIC8+XG4gICAgICAgICAgICAgIDxwPuaNlemtmueOizwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudUl0ZW1zfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL29ubGluZV9iYWNjYXJhdFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2dpZnQtbGlnaHRcIiAvPlxuICAgICAgICAgICAgICA8cD7lhKrmg6DmtLvli5U8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BvcnRzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fc3Rhci1zb2xpZFwiIC8+XG4gICAgICAgICAgICAgIDxwPueOqeWutuipleWDuTwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb3R0ZXJ5XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fd2FsbGV0LWxpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPHA+5a2Y5Y+W5rWB56iLPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2VsZWN0cm9uaWNzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fY2xvdWQtZG93bmxvYWQtbGlnaHRcIiAvPlxuICAgICAgICAgICAgICA8cD5BUFDkuIvovIk8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmlzaFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2hhbmRzaGFrZS1hbHQtbGlnaHRcIiAvPlxuICAgICAgICAgICAgICA8cD7ku6PnkIbliqDnm588L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmlzaFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX0NhbGlfbG9nb1wiIC8+XG4gICAgICAgICAgICAgIDxwPumXnOaWvOWNoeWIqTwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XG4gICAgICAgICAgICB7aXNUYWJsZXQgPyAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKCdsZWZ0JywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9iYXJzLWxpZ2h0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPERyYXdlciBvcGVuPXtzdGF0ZS5sZWZ0fSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoJ2xlZnQnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICB7c2lkZUxpc3QoJ2xlZnQnKX1cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmF2YmFyLWJyYW5kICR7Y3NzLmxvZ299YH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmUgbG9nb1wiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvQ2FsaV9sb2dvXzAyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtpc1RhYmxldCA/IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5mbGV4Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb25saW5lX2JhY2NhcmF0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcuNXJlbSAwJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg55yf5Lq65aib5qiCXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcG9ydHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJy41cmVtIDAnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDpq5TogrLljZrlvalcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb3R0ZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcuNXJlbSAwJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg6LOT5p6c5b2p56WoXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZWxlY3Ryb25pY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJy41cmVtIDAnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDpm7vlrZDpgYrmiLJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9maXNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcuNXJlbSAwJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg5o2V6a2a546LXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvbW90aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnLjVyZW0gMCcgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIOWEquaDoOa0u+WLlVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8RHJvcERvd25NZW51IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIHNwYW4uaWNvbmZvbnQge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgIDE4MGRlZyxcbiAgICAgICAgICAgICAgICAjZmRmOGEyIDMlLFxuICAgICAgICAgICAgICAgICNmNGQ5N2EgNDclLFxuICAgICAgICAgICAgICAgICNlZWM0NjIgMTAwJVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuY29uc3QgbWFwU2l6ZXNUb1Byb3BzID0gKHsgd2lkdGggfSkgPT4gKHtcbiAgaXNNb2JpbGU6IHdpZHRoIDwgNDgwLFxuICBpc1RhYmxldDogd2lkdGggPj0gNDgwICYmIHdpZHRoIDw9IDEwMjRcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFNpemVzKG1hcFNpemVzVG9Qcm9wcykoTWFpbk5hdik7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/includes/MainNav.js */")));
};

const mapSizesToProps = ({
  width
}) => ({
  isMobile: width < 480,
  isTablet: width >= 480 && width <= 1024
});

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(MainNav));

/***/ }),

/***/ "./components/includes/MainNavMobile.js":
/*!**********************************************!*\
  !*** ./components/includes/MainNavMobile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/includes/MainNavMobile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  list: {
    width: 220
  },
  fullList: {
    width: 'auto'
  }
});

const MainNavMobile = () => {
  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread({}, state, {
      [side]: open
    }));
  };

  const sideList = side => __jsx("div", {
    className: `${classes.list} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slideMenu}`,
    role: "presentation",
    onClick: toggleDrawer(side, false),
    onKeyDown: toggleDrawer(side, false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuMainMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("span", {
    className: `iconfont icon_user-circle-solid ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("span", {
    className: `iconfont icon_times-light ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon_times}`,
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "\u767B\u5165")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuItemsMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_home-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "\u9996\u9801"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/online_baccarat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_baccarat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "\u771F\u4EBA\u5A1B\u6A02"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_futbol-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "\u9AD4\u80B2\u535A\u5F69"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_ticket-alt-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "\u8CD3\u679C\u5F69\u7968"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_alien-monster-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "\u96FB\u5B50\u904A\u6232"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "\u6355\u9B5A\u738B")))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuItemsMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/online_baccarat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_gift-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "\u512A\u60E0\u6D3B\u52D5"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_star-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "\u73A9\u5BB6\u8A55\u50F9"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_wallet-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "\u5B58\u53D6\u6D41\u7A0B"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_cloud-download-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "APP\u4E0B\u8F09"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_handshake-alt-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "\u4EE3\u7406\u52A0\u76DF"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_Cali_logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "\u95DC\u65BC\u5361\u5229"))))));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("header", {
    className: "jsx-1293634930",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-1293634930" + " " + `navbar fixed-top ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navBarFlex}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("span", {
    onClick: toggleDrawer('left', true),
    className: "jsx-1293634930" + " " + "iconfont icon_bars-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
    open: state.left,
    onClose: toggleDrawer('left', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, sideList('left')), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1293634930" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/Cali_logo_mobile.png",
    alt: "",
    className: "jsx-1293634930" + " " + "img-responsive logo_m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-1293634930" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnGroup || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, __jsx("button", {
    type: "button",
    className: "jsx-1293634930" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnOutLine || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "\u8A3B\u518A"), __jsx("button", {
    type: "button",
    className: "jsx-1293634930" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnOutLine || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "\u767B\u5165"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1293634930",
    __self: undefined
  }, "span.iconfont.jsx-1293634930{margin-left:10px;font-size:1.625rem;background:linear-gradient( 180deg, #fdf8a2 3%, #f4d97a 47%, #eec462 100% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL01haW5OYXZNb2JpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEtXLEFBR2dDLGlCQUNFLG1CQU1sQiw0RUFDNEIsNkJBQ08sb0NBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL01haW5OYXZNb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBsaXN0OiB7XG4gICAgd2lkdGg6IDIyMFxuICB9LFxuICBmdWxsTGlzdDoge1xuICAgIHdpZHRoOiAnYXV0bydcbiAgfVxufSk7XG5cbmNvbnN0IE1haW5OYXZNb2JpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdG9wOiBmYWxzZSxcbiAgICBsZWZ0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZVxuICB9KTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoc2lkZSwgb3BlbikgPT4gZXZlbnQgPT4ge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJlxuICAgICAgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtzaWRlXTogb3BlbiB9KTtcbiAgfTtcblxuICBjb25zdCBzaWRlTGlzdCA9IHNpZGUgPT4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saXN0fSAke2Nzcy5zbGlkZU1lbnV9YH1cbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKHNpZGUsIGZhbHNlKX1cbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKHNpZGUsIGZhbHNlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1lbnVCbG9ja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudU1haW5Nb2JpbGV9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGljb25mb250IGljb25fdXNlci1jaXJjbGUtc29saWQgJHtjc3MudXNlcn1gfSAvPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uZm9udCBpY29uX3RpbWVzLWxpZ2h0ICR7Y3NzLmljb25fdGltZXN9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD7nmbvlhaU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1lbnVJdGVtc01vYmlsZX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9ob21lLXNvbGlkXCIgLz5cbiAgICAgICAgICAgICAgPHA+6aaW6aCBPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL29ubGluZV9iYWNjYXJhdFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2JhY2NhcmF0XCIgLz5cbiAgICAgICAgICAgICAgPHA+55yf5Lq65aib5qiCPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb3J0c1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2Z1dGJvbC1zb2xpZFwiIC8+XG4gICAgICAgICAgICAgIDxwPumrlOiCsuWNmuW9qTwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb3R0ZXJ5XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdGlja2V0LWFsdC1zb2xpZFwiIC8+XG4gICAgICAgICAgICAgIDxwPuizk+aenOW9qeelqDwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9lbGVjdHJvbmljc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2FsaWVuLW1vbnN0ZXItc29saWRcIiAvPlxuICAgICAgICAgICAgICA8cD7pm7vlrZDpgYrmiLI8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmlzaFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2Zpc2hcIiAvPlxuICAgICAgICAgICAgICA8cD7mjZXprZrnjos8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1lbnVJdGVtc01vYmlsZX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9vbmxpbmVfYmFjY2FyYXRcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9naWZ0LWxpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPHA+5YSq5oOg5rS75YuVPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb3J0c1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3N0YXItc29saWRcIiAvPlxuICAgICAgICAgICAgICA8cD7njqnlrrboqZXlg7k8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG90dGVyeVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3dhbGxldC1saWdodFwiIC8+XG4gICAgICAgICAgICAgIDxwPuWtmOWPlua1geeoizwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9lbGVjdHJvbmljc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2Nsb3VkLWRvd25sb2FkLWxpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPHA+QVBQ5LiL6LyJPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Zpc2hcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9oYW5kc2hha2UtYWx0LWxpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPHA+5Luj55CG5Yqg55ufPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Zpc2hcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9DYWxpX2xvZ29cIiAvPlxuICAgICAgICAgICAgICA8cD7pl5zmlrzljaHliKk8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXZiYXIgZml4ZWQtdG9wICR7Y3NzLm5hdkJhckZsZXh9YH0+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcignbGVmdCcsIHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9iYXJzLWxpZ2h0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEcmF3ZXIgb3Blbj17c3RhdGUubGVmdH0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKCdsZWZ0JywgZmFsc2UpfT5cbiAgICAgICAgICAgIHtzaWRlTGlzdCgnbGVmdCcpfVxuICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5sb2dvfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlIGxvZ29fbVwiXG4gICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL0NhbGlfbG9nb19tb2JpbGUucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJ0bkdyb3VwfT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y3NzLmJ0bk91dExpbmV9PlxuICAgICAgICAgICAgICDoqLvlhopcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjc3MuYnRuT3V0TGluZX0+XG4gICAgICAgICAgICAgIOeZu+WFpVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBzcGFuLmljb25mb250IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42MjVyZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgICAgICAgI2ZkZjhhMiAzJSxcbiAgICAgICAgICAgICAgICAjZjRkOTdhIDQ3JSxcbiAgICAgICAgICAgICAgICAjZWVjNDYyIDEwMCVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZNb2JpbGU7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/includes/MainNavMobile.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (MainNavMobile);

/***/ }),

/***/ "./components/includes/SectionTitle.js":
/*!*********************************************!*\
  !*** ./components/includes/SectionTitle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/includes/SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SectionTitle = props => {
  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sectionTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titleGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      'flex': '1 1 10%',
      'border': '1px solid #979797'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subject,
    style: props.textShadow ? {
      'textShadow': '0 2px 4px black'
    } : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.subject), __jsx("div", {
    style: {
      'flex': '1 1 10%',
      'border': '1px solid #979797'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/layouts/MobileLayout.js":
/*!********************************************!*\
  !*** ./components/layouts/MobileLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-measure */ "react-measure");
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_measure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-smooth-marquee */ "react-smooth-marquee");
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _includes_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../includes/Header */ "./components/includes/Header.js");
/* harmony import */ var _includes_MainNavMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/MainNavMobile */ "./components/includes/MainNavMobile.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ScrollButton */ "./components/ScrollButton.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Drawer */ "./components/Drawer.js");
/* harmony import */ var _includes_BottomNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../includes/BottomNav */ "./components/includes/BottomNav.js");
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/layouts/MobileLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












class MobileLayout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("meta", {
      charSet: "UTF-8",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("meta", {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional",
      rel: "stylesheet",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      charset: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/css/styles.css",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/css/iconfont.css",
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx("title", {
      className: "jsx-3089330349",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\u5361\u5229\u5A1B\u6A02\u57CE")), __jsx(_includes_MainNavMobile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3089330349" + " " + "mainBG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, this.props.children), __jsx(_includes_BottomNav__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3089330349",
      __self: this
    }, ".mainBG.jsx-3089330349::after{content:'';background:url(images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-3089330349{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvTW9iaWxlTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEVyxBQUcwQixBQWFPLFdBWjBCLE9BYWxDLFVBTVQsMkJBbEJtQixvQkFDRSxxQ0FrQnhCLGVBakJlLGFBQ1AsTUFDQyxPQUNFLFNBQ0QsUUFDVSxrQkFDUCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvTW9iaWxlTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICdyZWFjdC1tZWFzdXJlJztcbmltcG9ydCBNYXJxdWVlIGZyb20gJ3JlYWN0LXNtb290aC1tYXJxdWVlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaW5jbHVkZXMvSGVhZGVyJztcbmltcG9ydCBNYWluTmF2IGZyb20gJy4uL2luY2x1ZGVzL01haW5OYXZNb2JpbGUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgU2Nyb2xsQnV0dG9uIGZyb20gJy4uL1Njcm9sbEJ1dHRvbic7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL0RyYXdlcic7XG5pbXBvcnQgTWFpbk5hdk1vYmlsZSBmcm9tICcuLi9pbmNsdWRlcy9NYWluTmF2TW9iaWxlJztcbmltcG9ydCBCb3R0b21OYXYgZnJvbSAnLi4vaW5jbHVkZXMvQm90dG9tTmF2JztcblxuY2xhc3MgTW9iaWxlTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ubywgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnMrVEM6MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcCZzdWJzZXQ9Y2hpbmVzZS10cmFkaXRpb25hbFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90d2l0dGVyLWJvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvc3R5bGVzLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2ljb25mb250LmNzc1wiIC8+XG4gICAgICAgICAgPHRpdGxlPuWNoeWIqeWom+aoguWfjjwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE1haW5OYXZNb2JpbGUgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQkdcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPEJvdHRvbU5hdiAvPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAubWFpbkJHOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VzL3N0YXJ5X3NreS5wbmcpIHJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMCU7XG4gICAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMTAwJSk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYWluQkcge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAgICAgICAjMDAwMDAwIDAlLFxuICAgICAgICAgICAgICAgICM2ZTQxYzQgNTAlLFxuICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/MobileLayout.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MobileLayout);

/***/ }),

/***/ "./components/layouts/deskTopLayout.js":
/*!*********************************************!*\
  !*** ./components/layouts/deskTopLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-smooth-marquee */ "react-smooth-marquee");
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _includes_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../includes/Header */ "./components/includes/Header.js");
/* harmony import */ var _includes_MainNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../includes/MainNav */ "./components/includes/MainNav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ScrollButton */ "./components/ScrollButton.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Drawer */ "./components/Drawer.js");
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/layouts/deskTopLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const DeskTopLayout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2371616039" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.displayDesktop || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("link", {
  rel: "shortcut icon",
  href: "images/favicon-32x32.png",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional",
  rel: "stylesheet",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  charset: "UTF-8",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/css/styles.css",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "/css/iconfont.css",
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx("title", {
  className: "jsx-2371616039",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "\u5361\u5229\u5A1B\u6A02\u57CE")), __jsx(_includes_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx(_includes_MainNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2371616039" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.marquee || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2371616039" + " " + "iconfont icon_volume-up-solid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2371616039" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.marquee_flexContainer || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default.a, {
  velocity: 0.05,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-2371616039" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.marquee_text || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "\u6EAB\u99A8\u63D0\u793A\uFF1A\u5C0A\u656C\u7684\u3010\u5361\u5229\u5A1B\u6A02\u57CE\u3011\u6703\u54E1\u60A8\u597D\uFF01 2020-01-08\u865F\u5929\u5929\u8FD4\u6C34\u6700\u9AD81.8%\uFF0C\u5DF2\u7D93\u8FD4\u56DE\u5230\u60A8\u7684\u904A\u6232\u8CEC\u865F\u4E2D\uFF0C\u8ACB\u60A8\u767B\u5165\u67E5\u6536\uFF01\u8F49\u8CEC\u5230\u516C\u53F8\u6307\u5B9A\u9280\u884C\u5361\uFF0C\u63D0\u4EA4\u5165\u6B3E\u4FE1\u606F\u53EF\u5F97\u5230\u6B21\u6B21\u5B58\u6B21\u6B21\u90011.3%\u5165\u6B3E\u512A\u60E0\uFF0C\u8B1D\u8B1D\u3002")))), __jsx("div", {
  className: "jsx-2371616039" + " " + "mainBG",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, props.children, __jsx(_ScrollButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
  scrollStepInPx: "100",
  delayInMs: "16.66",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}), __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2371616039",
  __self: undefined
}, ".mainBG.jsx-2371616039::after{content:'';background:url(images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-2371616039{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvZGVza1RvcExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RFMsQUFHd0IsQUFhTyxXQVowQixPQWFsQyxVQU1ULDJCQWxCbUIsb0JBQ0UscUNBa0J4QixlQWpCZSxhQUNQLE1BQ0MsT0FDRSxTQUNELFFBQ1Usa0JBQ1AsV0FDYiIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9sYXlvdXRzL2Rlc2tUb3BMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFycXVlZSBmcm9tICdyZWFjdC1zbW9vdGgtbWFycXVlZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2luY2x1ZGVzL0hlYWRlcic7XG5pbXBvcnQgTWFpbk5hdiBmcm9tICcuLi9pbmNsdWRlcy9NYWluTmF2JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IFNjcm9sbEJ1dHRvbiBmcm9tICcuLi9TY3JvbGxCdXR0b24nO1xuaW1wb3J0IERyYXdlciBmcm9tICcuLi9EcmF3ZXInO1xuXG5jb25zdCBEZXNrVG9wTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kaXNwbGF5RGVza3RvcH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJpbWFnZXMvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zK1RDOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXAmc3Vic2V0PWNoaW5lc2UtdHJhZGl0aW9uYWxcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90d2l0dGVyLWJvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9zdHlsZXMuY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2ljb25mb250LmNzc1wiIC8+XG4gICAgICAgIDx0aXRsZT7ljaHliKnlqJvmqILln448L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1haW5OYXYgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tYXJxdWVlfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl92b2x1bWUtdXAtc29saWRcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWFycXVlZV9mbGV4Q29udGFpbmVyfT5cbiAgICAgICAgICA8TWFycXVlZSB2ZWxvY2l0eT17MC4wNX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Nzcy5tYXJxdWVlX3RleHR9PlxuICAgICAgICAgICAgICDmuqvppqjmj5DnpLrvvJrlsIrmlaznmoTjgJDljaHliKnlqJvmqILln47jgJHmnIPlk6Hmgqjlpb3vvIFcbiAgICAgICAgICAgICAgMjAyMC0wMS0wOOiZn+WkqeWkqei/lOawtOacgOmrmDEuOCXvvIzlt7LntpPov5Tlm57liLDmgqjnmoTpgYrmiLLos6zomZ/kuK3vvIzoq4vmgqjnmbvlhaXmn6XmlLbvvIHovYnos6zliLDlhazlj7jmjIflrprpioDooYzljaHvvIzmj5DkuqTlhaXmrL7kv6Hmga/lj6/lvpfliLDmrKHmrKHlrZjmrKHmrKHpgIExLjMl5YWl5qy+5YSq5oOg77yM6Kyd6Kyd44CCXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9NYXJxdWVlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQkdcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsQnV0dG9uIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTYuNjZcIiAvPlxuICAgICAgICA8RHJhd2VyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1haW5CRzo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VzL3N0YXJ5X3NreS5wbmcpIHJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAlO1xuICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxMDAlKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW5CRyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAgICAgIzAwMDAwMCAwJSxcbiAgICAgICAgICAgICAgIzZlNDFjNCA1MCUsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGVza1RvcExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/deskTopLayout.js */")));

/* harmony default export */ __webpack_exports__["default"] = (DeskTopLayout);

/***/ }),

/***/ "./components/mobileIndex.js":
/*!***********************************!*\
  !*** ./components/mobileIndex.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/mobileIndex.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MobileIndex = () => {
  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.stratingPlayMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.stratingPlayMobile_1st,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/online_baccarat'),
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.play01,
    style: {
      backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/mobile/mainpage/Front01.png",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.play02,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/sports'),
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.play02_1,
    style: {
      backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/mobile/mainpage/Front02.png",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx("div", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/electronics'),
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.play02_2,
    style: {
      backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/mobile/mainpage/Front03.png",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.stratingPlayMobile_2nd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/lottery'),
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.play04,
    style: {
      backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/mobile/mainpage/Front04.png",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), __jsx("div", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/fish'),
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.play05,
    style: {
      backgroundImage: 'url(images/mobile/mainpage/BGpattern.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/mobile/mainpage/Front05.png",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileIndex);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sizes */ "react-sizes");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var _components_layouts_MobileLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/MobileLayout */ "./components/layouts/MobileLayout.js");
/* harmony import */ var _components_StartPlayingDesktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StartPlayingDesktop */ "./components/StartPlayingDesktop.js");
/* harmony import */ var _components_UserEvaluationSec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserEvaluationSec */ "./components/UserEvaluationSec.js");
/* harmony import */ var _components_Bonus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Bonus */ "./components/Bonus.js");
/* harmony import */ var _components_AboutSec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AboutSec */ "./components/AboutSec.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/includes/SectionTitle */ "./components/includes/SectionTitle.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-smooth-marquee */ "react-smooth-marquee");
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_mobileIndex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mobileIndex */ "./components/mobileIndex.js");
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















const bonus = [{
  pic: 'images/bonus/img-promotion-2.png',
  title: '賭神賽',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}, {
  pic: 'images/bonus/img-promotion-3.png',
  title: '賀聖誕派大獎 贏返水迎元旦',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}, {
  pic: 'images/bonus/img-promotion-4.png',
  title: '卡利系統一律返水1%',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}, {
  pic: 'images/bonus/img-promotion-5.png',
  title: '賀聖誕 派大獎',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}];
const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  arrows: true,
  fade: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};
const settings_mobile = {
  autoplay: true,
  dots: true,
  infinite: true,
  arrows: false,
  fade: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};
const settings_bonus = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 580,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

const Index = ({
  isMobile,
  isTablet,
  isDesktop
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner01.jpeg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner02.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner03.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner04.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  })), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    subject: "\u958B\u59CB\u904A\u73A9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx(_components_StartPlayingDesktop__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }), __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    subject: "\u512A\u60E0\u6D3B\u52D5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, settings_bonus, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), bonus.map((b, i) => __jsx(_components_Bonus__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: i,
    pic: b.pic,
    title: b.title,
    time: b.time,
    context: b.context,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  })))), __jsx(_components_UserEvaluationSec__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), __jsx(_components_AboutSec__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), isMobile && __jsx(_components_layouts_MobileLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default.a.mobileEmpty,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, settings_mobile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner01.jpeg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner02.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner03.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner04.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default.a.marquee,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_volume-up-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default.a.marquee_flexContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_12___default.a, {
    velocity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("p", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default.a.marquee_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, "\u6EAB\u99A8\u63D0\u793A\uFF1A\u5C0A\u656C\u7684\u3010\u5361\u5229\u5A1B\u6A02\u57CE\u3011\u6703\u54E1\u60A8\u597D\uFF01 2020-01-08\u865F\u5929\u5929\u8FD4\u6C34\u6700\u9AD81.8%\uFF0C\u5DF2\u7D93\u8FD4\u56DE\u5230\u60A8\u7684\u904A\u6232\u8CEC\u865F\u4E2D\uFF0C\u8ACB\u60A8\u767B\u5165\u67E5\u6536\uFF01\u8F49\u8CEC\u5230\u516C\u53F8\u6307\u5B9A\u9280\u884C\u5361\uFF0C\u63D0\u4EA4\u5165\u6B3E\u4FE1\u606F\u53EF\u5F97\u5230\u6B21\u6B21\u5B58\u6B21\u6B21\u90011.3%\u5165\u6B3E\u512A\u60E0\uFF0C\u8B1D\u8B1D\u3002")))), __jsx(_components_mobileIndex__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  })));
};

const mapSizesToProps = ({
  width
}) => ({
  isTablet: width >= 480 && width < 1024,
  isDesktop: width >= 1024,
  isMobile: width <= 480
});

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_1___default()(mapSizesToProps)(Index));

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"mobileEmpty": "_2FfLGnGY1RKZHfRhfZZ5La",
	"displayMobile": "_3v066jtEcMh8h1nLRy8IUG",
	"displayDesktop": "_3ISuKv4g9st7Vsg74hN_cg",
	"slideMenu": "_3h1o0mH-OLr_YAXY4GQhLX",
	"menuBlock": "_3UMH2k7pluApEOaL10D34l",
	"menuMain": "_1PDSetJwupTrBTXTuKPBPu",
	"menuItems": "_38ciJvoBVlM9GFB9Cimxr4",
	"listItem": "_2rJ2jCiOTA7dpLe-_e05Ua",
	"menuMainMobile": "_1OuDEW2K9JiIkBZR-_IcwY",
	"icon_times": "McCmQ8U8oLPc76NeGc9Ug",
	"user": "_1BfgIYnumy0N-zratarq-Z",
	"menuItemsMobile": "_1QnsoLUgmGT-1HbjOa7_N6",
	"sectionTitle": "_3q6mGR7fBdJ6P0ZcsUBl3m",
	"titleGroup": "_17ipSAfMSL0xm8Sk3_Ohdf",
	"subject": "RVn4UuM9tLi5c0BlCjWCQ",
	"subject__withRed": "CxE0fykhZ8RP0jzRelkUu",
	"subject--white": "_2z31HGKKSWE5iTrMLHMoVr",
	"subject--solidBox": "_3Zlh4DYWZTsnoyl18LTmlN",
	"red": "_2uZdcsIe81U9jMmo94GVel",
	"tabs": "_2dnDqpq5ewrAl27RYs8mID",
	"iconTab": "_32xbGpZFzDmv4aV4dk-7wX",
	"active": "BtS4lMqTymhFXMzvzKYLF",
	"iconBtn": "_1HVCht2qgtUvl2cgJeXJEb",
	"contentBox": "_3GQ_syIiXlLQUkB6Ll8rWo",
	"contentIMG": "_2U7052OskOvUUaFma7eLqn",
	"iconBox": "_1D6ZRSn2t00nz6f5Bv0AaO",
	"bonus": "_3Ex2gTdtgApvYg9OphvSeC",
	"title": "_274UVyVB3dC8LERHqmA5Nc",
	"bottom": "_1cj5fxf6ggoGsXDW_6XJsz",
	"time": "_2SbVwko7eGQaoZuabJBJev",
	"logo": "_1o2ylA1N57yLHwTzg4Wrep",
	"headerFlex": "_27Ym0bwZnotBqCYJaTiunp",
	"navBarFlex": "_2-cSj3znbz4ZePxscGnrkG",
	"btnGroup": "ylY7ZAU3GTj8DocacvB2z",
	"btnOutLine": "D8Wk-KQN6G5vLx6aEe2mY",
	"BottomNav": "_1yDI1GEQI2Sg-EBvM6tUj4",
	"stratingPlayMobile": "_1-3o8CmVtwDQMToC053izB",
	"stratingPlayMobile_1st": "_3LT6RBTMlvZH4eeuEkxoYG",
	"play01": "_3tB8F-NgCYWh_DewVuV_US",
	"play02": "_3-v23taVxHik2RkLLSbP3a",
	"play02_1": "_2pjbK5lv8RYEllGmT86Sd",
	"play02_2": "_2lPNKXvn-Dmgh4cE1UIacX",
	"stratingPlayMobile_2nd": "_1wEbblAq2Zbs9KxgCC24yn",
	"play04": "vI06YakxuJ2ippLGOgbqt",
	"play05": "_8oCtPzNftoYjbJL9OcNVk",
	"userTest": "_3FjPixi8IGilRXvqq_IRh4",
	"top": "_4OYpL44QlB-b9MPHFN2di",
	"main": "_3j3X_imGLsNHR0nMQLdROg",
	"starBox": "_16DSXUIQnOqp7JNEcP4GgB",
	"paragraph": "_2EdmzK2xa_Ko_KVjzf3wYu",
	"userTest_title": "_3z5_6iy6_03rmxCqlJ5N0i",
	"userFeedBackBox": "ewMErCvWUw4xj9w5shF57",
	"userBox": "CDZg__UyBRSs2v1Wd4ddx",
	"userNumber": "_2GQAZEYMkPvQgTQ7ard73G",
	"headerBG": "_14p7-rQ4jFdoN2REnglLQ4",
	"flexContainer": "TMwPXLjQpihvUU1uvLKVy",
	"flex": "JK4h-C7w2miKSaDh_0xMg",
	"input": "_38iOWCD9ZxTDa7Kp4NNWdF",
	"menu": "_3jAwHf9XLIQvSo5JXTbhwG",
	"gameFlex": "_2zn0Nh_STDIoAlPTk3f1MZ",
	"gameFlex__fish": "_2rNrxw3qUCqaAcTZ7IMCTd",
	"gameCardVertical__fish": "_3mz9s03f1icgGSRNrkg50S",
	"gameFlex__electronics": "_22twt9894-TRUABoe_qAIk",
	"gameCardVertical__electronics": "_1yo73eOX9GA8qJ4oIIKwM0",
	"gameFlex__bingo": "_3gj_IgE6UXbPMq8mtvUAad",
	"gameCardVertical__bingo": "iBeiuveEy55vM9FJzKM1h",
	"gameFlex__sports": "_26oRSOY0AeLruH2mu9L7vx",
	"gameCardVertical__sports": "_1xq0loI6kvJdKYc1VVgs0E",
	"gameCardVertical": "R6QXwEXq8cjf-AUYjleb_",
	"gameCardGroup": "_3bsQnDCv_W3-PWsGWLcQDR",
	"gameCardGroup__mobile": "_1UEM2wwvECaiqdgnZBL-yK",
	"gameCard": "_2Y3Ur-0W1duo31f9NMejco",
	"outlineBtn": "_3VZGSfjg57YdaAX0au-Fml",
	"gameNavigation": "_1CK-tZ9GJZ_OnWTmlPfTqN",
	"gameBtn": "_2cKCQKVmN6NE1MXgt8JFZr",
	"superAwesome": "_22FSOBq6oUnetNYRsYBo43",
	"marquee": "_2gDmNhYlFiGBcvjgVAGyM_",
	"marquee_flexContainer": "xSxsrduvyvyxsod2tLKhn",
	"marquee_text": "DeuhvKXh7QWgmTnvcLb9l"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liukaiming/WebstormProjects/cali/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-measure":
/*!********************************!*\
  !*** external "react-measure" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-measure");

/***/ }),

/***/ "react-sizes":
/*!******************************!*\
  !*** external "react-sizes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-smooth-marquee":
/*!***************************************!*\
  !*** external "react-smooth-marquee" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-smooth-marquee");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map