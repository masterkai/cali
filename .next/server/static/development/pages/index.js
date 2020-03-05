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

/***/ "./components/BetItem.js":
/*!*******************************!*\
  !*** ./components/BetItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const BetItem = ({
  status
}) => {
  const {
    0: accordian,
    1: setAccordian
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showAccordian = () => {
    setAccordian(!accordian);
  };

  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };
  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.itemContainer
  }, __jsx("div", {
    onClick: showAccordian,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexBasis: '90%'
    }
  }, __jsx("div", {
    style: {
      fontWeight: 300,
      fontSize: '.875rem',
      color: 'black',
      padding: '15px 0'
    }
  }, "2020/02/27/15:28:35"), __jsx("div", {
    style: {
      fontWeight: 300,
      fontSize: '.875rem',
      color: 'black',
      padding: '15px 0'
    }
  }, "\u8F38/\u8D0F\uFF1A", __jsx("span", {
    style: status > 0 ? {
      color: '#0091FF'
    } : {
      color: '#E02020'
    }
  }, status))), __jsx("span", {
    className: _class[accordian],
    style: {
      fontSize: '1rem',
      color: '#9BA2AA'
    }
  })), accordian && __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.dropDownBox
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u55AE\u865F\uFF1A", __jsx("span", null, "xxxxx")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u661F\u7D1A\uFF1A", __jsx("span", null, "\u516D\u661F\u7D1A")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u904A\u6232\u5E73\u53F0\uFF1A", __jsx("span", null, "xxxxx")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u904A\u6232\u985E\u578B\uFF1A", __jsx("span", null, "xxxxx")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u6295\u6CE8\u984D\uFF1A", __jsx("span", null, "1000")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u6D41\u6C34\uFF1A", __jsx("span", null, "1000"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BetItem);

/***/ }),

/***/ "./components/BetRecords.js":
/*!**********************************!*\
  !*** ./components/BetRecords.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BetItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BetItem */ "./components/BetItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const modalStyles = {
  content: {
    maxWidth: '600px',
    maxHeight: '800px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  overrides: {
    // Style sheet name ⚛️
    MuiButtonGroup: {
      root: {
        width: '100%'
      }
    },
    MuiButtonBase: {
      root: {
        flex: '1 1 25%'
      }
    },
    MuiButton: {
      outlinedPrimary: {
        color: 'white',
        border: '1px solid rgba(255,255,255, 0.68)'
      }
    },
    MuiFormLabel: {
      root: {
        color: 'white',
        '&$focused': {
          color: 'rgba(157, 1, 255, 1)'
        }
      }
    },
    MuiInputBase: {
      // Name of the rule
      root: {
        // Some CSS
        color: 'white'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:after': {
          borderBottom: `1px solid rgba(157, 1, 255, 0.85)`
        }
      }
    }
  }
});
const style = {
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  marginBottom: 30
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200
  }
}));
react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement('#__next');

function BetRecords(props) {
  const classes = useStyles();
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("span", {
    onClick: openModal,
    className: "iconfont icon_coins-light",
    "data-tip": "\u6295\u6CE8\u8A18\u9304",
    style: {
      marginLeft: 20
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle = subtitle
  }, "\u6295\u6CE8\u8A18\u9304"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody__BetRecordsLayout}`
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme
  }, __jsx("form", {
    style: {
      marginBottom: 30
    },
    className: classes.container,
    noValidate: true
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: style,
    id: "datetime-local",
    label: "\u958B\u59CB\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-01T00:00",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: style,
    id: "datetime-local",
    label: "\u7D50\u675F\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-29T10:30",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginBottom: 20
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u660E\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u4ECA\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u6628\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u672C\u9031")), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      margin: '0 0 20px'
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u4E0A\u9031"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u672C\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u4E0A\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "\u8FD1\u4E00\u500B\u6708")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained"
  }, "\u6E05\u9664\u6642\u9593"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    color: "primary"
  }, "\u641C\u5C0B")), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer__norecords}`,
    style: {
      height: 48
    }
  }, "\u5C1A\u7121\u4EFB\u4F55\u8A18\u9304"), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: 1000
  }), __jsx(_BetItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    status: -1000
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (BetRecords);

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

/***/ "./components/BonusRecordItem.js":
/*!***************************************!*\
  !*** ./components/BonusRecordItem.js ***!
  \***************************************/
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function BonusRecordItem({
  subject,
  detail,
  status
}) {
  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer,
    style: {
      padding: 0
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  }, __jsx("div", {
    style: {
      textAlign: 'center',
      flexBasis: '50%',
      fontSize: '.875rem',
      color: 'black',
      padding: '15px 0'
    }
  }, subject), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: detail
  }, __jsx("a", {
    style: {
      textAlign: 'center',
      flexBasis: '25%',
      fontSize: '.75rem',
      color: 'black',
      padding: '15px',
      borderRight: '1px solid #ccc',
      borderLeft: '1px solid #ccc'
    }
  }, "\u8A73\u7D30\u5167\u5BB9")), __jsx("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      flexBasis: '25%',
      fontSize: '.75rem',
      color: 'black',
      padding: '15px 0'
    }
  }, status ? __jsx("span", {
    style: {
      padding: '2px 5px',
      color: 'white',
      backgroundColor: '#23d823',
      borderRadius: 3
    }
  }, "\u5DF2\u9818\u53D6") : '前往領取', status ? null : __jsx("span", {
    style: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: 50,
      left: 10,
      height: 10,
      width: 10,
      backgroundColor: 'red'
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BonusRecordItem);

/***/ }),

/***/ "./components/BonusRecords.js":
/*!************************************!*\
  !*** ./components/BonusRecords.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BetItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BetItem */ "./components/BetItem.js");
/* harmony import */ var _BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BonusRecordItem */ "./components/BonusRecordItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const modalStyles = {
  content: {
    width: '100%',
    maxWidth: '600px',
    maxHeight: '800px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement('#__next');

function BetRecords(props) {
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("span", {
    onClick: openModal,
    className: "iconfont icon_gift-light",
    "data-tip": "\u512A\u60E0\u7D00\u9304",
    style: {
      marginLeft: 20
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle = subtitle
  }, "\u512A\u60E0\u8A18\u9304"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody__BetRecordsLayout}`
  }, __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `首儲`,
    detail: '/promotions/post/1',
    status: false
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `二儲`,
    detail: '/promotions/post/2',
    status: true
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `會員(本次2/25)`,
    detail: '/promotions/post/3',
    status: false
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `會員(本次2/25)`,
    detail: '/promotions/post/3',
    status: false
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `會員(本次2/25)`,
    detail: '/promotions/post/3',
    status: false
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `會員(本次2/25)`,
    detail: '/promotions/post/3',
    status: true
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `會員(本次2/25)`,
    detail: '/promotions/post/3',
    status: true
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `會員(本次2/25)`,
    detail: '/promotions/post/3',
    status: false
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: `會員(本次2/25)`,
    detail: '/promotions/post/3',
    status: false
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BetRecords);

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
  constructor(props) {
    super(props);
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
    }, this.props.name), this.state.showMenu ? __jsx("div", {
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

/***/ "./components/DDWallet.js":
/*!********************************!*\
  !*** ./components/DDWallet.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const customStyle = {
  cursor: 'pointer',
  position: 'relative'
};
const customBtn = {
  backgroundColor: 'deepskyblue',
  color: 'white',
  borderRadius: 20
};
const walletData = [{
  name: 'DG百家樂',
  value: 0
}, {
  name: '歐博',
  value: 0
}, {
  name: '沙龍百家樂',
  value: 0
}, {
  name: 'WM百家樂',
  value: 0
}, {
  name: '任你博體育',
  value: 0
}, {
  name: 'Super體育博彩',
  value: 0
}, {
  name: 'AFB88',
  value: '維護中'
}, {
  name: 'RTG天地',
  value: 0
}, {
  name: 'Betsoft',
  value: 0
}, {
  name: 'BTX',
  value: 0
}, {
  name: '9K彩票',
  value: 0
}, {
  name: '六合彩539',
  value: 0
}];

const DDWallet = () => {
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const dropMenu = event => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('click', closeMenu);
    return window.removeEventListener('click', closeMenu);
  });

  const renderItem = data => data.map((d, i) => __jsx("div", {
    key: i,
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemName
  }, d.name), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemValue
  }, d.value)));

  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };
  return __jsx("div", {
    style: customStyle
  }, __jsx("span", {
    onClick: dropMenu,
    className: _class[showMenu]
  }), showMenu ? __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.DDWallet
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemsBox
  }, renderItem(walletData)), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottomBox
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sumBox
  }, __jsx("div", null, "\u7E3D\u984D\u5EA6"), __jsx("div", null, "250")), __jsx("button", {
    className: "btn",
    style: customBtn
  }, "\u5168\u90E8\u8F49\u56DE\u4E3B\u5E33\u6236"))) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (DDWallet);

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
      src: "/images/qrCode.png",
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
      src: "/images/line-messenger.svg",
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
    }, ".drawerBox.jsx-3308944657{max-width:182px;padding:20px;position:fixed;z-index:999;background-color:black;right:-182px;top:8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.drawerBox.active.jsx-3308944657{right:0;}.infoBox.jsx-3308944657{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #979797;}.drawerBox.jsx-3308944657 .infoBox.jsx-3308944657:nth-child(3){border-bottom:unset;}.infoBox.jsx-3308944657 img.jsx-3308944657{margin-bottom:10px;max-width:64px;}.infoBox.jsx-3308944657 p.jsx-3308944657{color:#fff;text-align:center;}.TrapezoidTag.jsx-3308944657{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:-44px;background-color:#00adff;height:calc(223px - 44px);width:44px;color:black;background-image:linear-gradient( 180deg, #827610 3%, #ebdb5a 47%, #805d24 100% );}.TrapezoidTag.jsx-3308944657 p.jsx-3308944657{color:black;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb;writing-mode:vertical-lr;}.TrapezoidTag.jsx-3308944657 span.jsx-3308944657{font-size:2rem;}.triangleTopRight.jsx-3308944657{position:absolute;bottom:-30px;width:0;height:0;border-top:30px solid #805d24;border-left:44px solid transparent;}.triangleBottomRight.jsx-3308944657{position:absolute;top:-30px;width:0;height:0;border-bottom:30px solid #827610;border-left:44px solid transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0RyYXdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFcsQUFHK0IsQUFZUixBQUdLLEFBUU8sQUFHRCxBQUlSLEFBSUMsQUF1QkEsQUFJRyxBQUdHLEFBUUEsUUEzRHBCLEdBa0JvQixDQUlMLEFBdUJZLENBMUNaLEVBOENmLENBN0RlLEVBZ0VBLEFBUUgsQ0E5Q0ssQ0FIakIsUUFrRFUsQ0F4RU8sQUE4QmpCLEVBa0NVLEdBdENWLEVBK0NXLEdBUkEsS0FoRUcsQ0F5RXFCLEdBUkgsUUFoRVAsc0JBaUVZLEFBUUEsQ0F4RXRCLE9BK0JTLENBbkJBLEdBMEN4QixFQXJEUyxPQUNNLGNBK0RmLEFBUUEsbURBekN5QixDQW5CTyxRQVZSLDhFQUNVLFlBNkJiLGlCQW5CQSwyQ0FUckIsaUNBNkJpQixlQUNHLEVBcEJjLGdCQXFCeEIsUUFDbUIsUUFyQjdCLHFGQXNCYSxXQUNjLHlCQUNDLDBCQUNmLFdBQ0MsWUFNWCxrRkFFSCIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9EcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRHJhd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvdzogZmFsc2VcbiAgfTtcblxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiAhdGhpcy5zdGF0ZS5zaG93IH0sICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1lbnUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNsb3NlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTWVudSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IF9jbGFzcyA9IHtcbiAgICAgIHRydWU6ICdkcmF3ZXJCb3ggYWN0aXZlJyxcbiAgICAgIGZhbHNlOiAnZHJhd2VyQm94J1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtfY2xhc3NbdGhpcy5zdGF0ZS5zaG93XX0gb25DbGljaz17dGhpcy5zaG93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvQm94XCI+XG4gICAgICAgICAgPHA+5Zyo57ea5a6i5pyNPC9wPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9xckNvZGUucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvQm94XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9saW5lLW1lc3Nlbmdlci5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwPkA4ODhwaTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb0JveFwiPlxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnLjg1cmVtJyB9fT7mhI/opovlj43ppYsgODg4OHBpcGlwaUBnbWFpbC5jb208L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRyYXBlem9pZFRhZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYW5nbGVCb3R0b21SaWdodFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlhbmdsZVRvcFJpZ2h0XCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uSFJcIiAvPlxuICAgICAgICAgIDxwPuiBr+ezu+aIkeWAkTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5kcmF3ZXJCb3gge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4MnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMTgycHg7XG4gICAgICAgICAgICAgIHRvcDogOCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyYXdlckJveC5hY3RpdmUge1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbmZvQm94IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcmF3ZXJCb3ggLmluZm9Cb3g6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5mb0JveCBpbWcge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5mb0JveCBwIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5UcmFwZXpvaWRUYWcge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgbGVmdDogLTQ0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZmY7XG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygyMjNweCAtIDQ0cHgpO1xuICAgICAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgICAgICM4Mjc2MTAgMyUsXG4gICAgICAgICAgICAgICAgI2ViZGI1YSA0NyUsXG4gICAgICAgICAgICAgICAgIzgwNWQyNCAxMDAlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuVHJhcGV6b2lkVGFnIHAge1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuVHJhcGV6b2lkVGFnIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJpYW5nbGVUb3BSaWdodCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCAjODA1ZDI0O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogNDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50cmlhbmdsZUJvdHRvbVJpZ2h0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkICM4Mjc2MTA7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0NHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/Drawer.js */"));
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
  className: "jsx-2655652923" + " " + "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2655652923" + " " + "container",
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
  className: "jsx-2655652923" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2655652923" + " " + "iconBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("span", {
  style: {
    fontSize: '7rem'
  },
  className: "jsx-2655652923" + " " + "iconfont icon_allbet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-2655652923" + " " + "iconfont icon_DreamGaming",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("span", {
  style: {
    fontSize: '4rem'
  },
  className: "jsx-2655652923" + " " + "iconfont icon_WM",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("span", {
  style: {
    fontSize: '5rem'
  },
  className: "jsx-2655652923" + " " + "iconfont icon_SAgaming",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-2655652923" + " " + "iconfont icon_SUPER",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("span", {
  style: {
    fontSize: '4.5rem'
  },
  className: "jsx-2655652923" + " " + "iconfont icon_AFBCash",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2655652923" + " " + "iconBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2655652923" + " " + "iconfont icon_Klottery",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("span", {
  style: {
    fontSize: '5rem'
  },
  className: "jsx-2655652923" + " " + "iconfont icon_SUPERbingo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("span", {
  style: {
    fontSize: '4.8rem'
  },
  className: "jsx-2655652923" + " " + "iconfont icon_RTGslots",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-2655652923" + " " + "iconfont icon_betixion",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-2655652923" + " " + "iconfont icon_betsoft",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}))), __jsx(_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
  subject: "\u570B\u969B\u5B89\u5168\u8A8D\u8B49",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2655652923" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2655652923" + " " + "securityLogoBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/securityLogo/partner_logo_1.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/securityLogo/partner_logo_2.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/securityLogo/partner_logo_3.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/securityLogo/partner_logo_4.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/securityLogo/partner_logo_5.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/securityLogo/partner_logo_6.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/securityLogo/partner_logo_7.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), __jsx("img", {
  src: "/images/securityLogo/partner_logo_8.png",
  alt: "",
  className: "jsx-2655652923" + " " + "img-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}))), __jsx("p", {
  className: "jsx-2655652923",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "Copyright\xA9 2019 Allbetgaming.com. All Rights Reserved. \u670D\u52D9\u689D\u6B3E|\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56"), __jsx("div", {
  className: "jsx-2655652923" + " " + "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2655652923" + " " + "footerLink",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2655652923",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, "\u5A1B\u6A02\u57CE")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2655652923",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "\u767E\u5BB6\u6A02")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2655652923",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, "\u7403\u7248\u73FE\u91D1\u7248")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2655652923",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, "\u96FB\u5B50\u62C9\u9738")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2655652923",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "\u946B\u57CE\u8CD3\u679C")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2655652923",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, "\u767E\u5BB6\u6A02\u6280\u5DE7\u6559\u5B78")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2655652923",
  __self: undefined
}, "@media (max-width:479px){span.iconfont.jsx-2655652923{font-size:3rem !important;margin:0;padding:0;}}@media (min-width:480px) and (max-width:1024px){.securityLogoBox.jsx-2655652923{margin:0 auto;}.securityLogoBox.jsx-2655652923 img.jsx-2655652923{max-width:40px;margin:5px;}.footer.jsx-2655652923{padding:0;}span.iconfont.jsx-2655652923{font-size:3rem !important;margin:0;padding:0;}.footerLink.jsx-2655652923{margin:0 auto;}.footerLink.jsx-2655652923 a.jsx-2655652923{font-size:0.85rem;}}.footerLink.jsx-2655652923{margin:0 auto;text-align:center;color:#fff;}.footerLink.jsx-2655652923 a.jsx-2655652923{color:#fff;-webkit-text-decoration:none;text-decoration:none;padding:5px 10px;}.securityLogoBox.jsx-2655652923{margin:0 auto;text-align:center;}.securityLogoBox.jsx-2655652923 img.jsx-2655652923{margin:0 10px;}.iconBox.jsx-2655652923:first-child{margin-top:-30px;}.iconBox.jsx-2655652923:last-child{margin-bottom:30px;}.iconBox.jsx-2655652923{margin:0 auto;max-width:800px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:120px;}span.iconfont.jsx-2655652923{font-size:6rem;margin:0 20px;background-image:linear-gradient(0deg,#6236ff 0%,#9a5fc9 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}span.iconfont.jsx-2655652923:hover{color:#ce70ff;text-shadow:0 1px 3px rgba(0,0,0,0.65);background-image:unset;-webkit-background-clip:unset;-webkit-text-fill-color:unset;}p.jsx-2655652923{font-weight:300;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:1.8;max-width:760px;margin:10px auto 38px;color:#fff;text-align:center;text-shadow:0 2px 4px #000000;}.flex.jsx-2655652923{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.subTitle.jsx-2655652923{color:#fff;font-size:2.125rem;margin:-10px auto 20px;text-align:center;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-shadow:0 2px 4px #000000;}.footer.jsx-2655652923::after{content:'';background:url(/images/bg_section_cooperation.png) no-repeat;opacity:1;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.footer.jsx-2655652923{padding:0 0 78px;position:relative;z-index:0;background:unset;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SE8sQUFJdUMsQUFPWixBQUdDLEFBSUwsQUFHZ0IsQUFLWixBQUdJLEFBSU4sQUFLSCxBQUtHLEFBSUEsQUFHRyxBQUdFLEFBR0wsQUFTQyxBQU9ELEFBT0UsQUFVTCxBQUtBLEFBUUEsQUFXTSxVQTlGakIsQ0FvQnFCLEFBbURSLEFBS00sQUFRMEMsR0EzRjdELEFBZUEsQUFPa0IsQUFVQSxBQUlwQixBQVNrQixBQWdCMEIsQ0ExRDdCLEFBbURDLENBY0ssQ0E3QnJCLEFBK0RvQixDQXBGbEIsQ0F3QkYsT0FqRGEsQUFXWCxBQU1XLEdBNkNzRCxDQVRwRCxBQXNDVSxFQTdEWixBQVViLEdBdkNjLEFBaUJBLEFBNEZGLFFBL0VaLEVBN0JFLEFBaUJBLEFBNEZpQixRQTFDTSxBQXVCTCxRQXpERCxDQTZFbkIsU0FuQm1CLENBTVAsSUE3Qm9CLEVBbENoQyxJQWdFUSxHQWR1QixHQWV0QixJQXRDc0IsR0F1Q3BCLFNBaERjLEFBaURmLEVBaENzQixHQUtkLEdBNEJFLFNBeENrQixJQWFwQixLQTRCTCxNQWpDYixLQU13QixBQTRCeEIsZUFaZ0MsQ0E3QmhDLE1BY2EsV0FDTyxZQWVwQixNQWRnQyxXQTFCWCxLQWdDckIsY0FMQSwwRUExQmlCLHlEQUNFLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4vaW5jbHVkZXMvU2VjdGlvblRpdGxlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8U2VjdGlvblRpdGxlIHN1YmplY3Q9XCLljaHliKnlkIjkvZzlqJvmqILlk4HniYxcIiB0ZXh0U2hhZG93PXtmYWxzZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25Cb3hcIj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25mb250IGljb25fYWxsYmV0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICc3cmVtJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fRHJlYW1HYW1pbmdcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9XTVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnNHJlbScgfX0gLz5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25mb250IGljb25fU0FnYW1pbmdcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzVyZW0nIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9TVVBFUlwiIC8+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX0FGQkNhc2hcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzQuNXJlbScgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uQm94XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX0tsb3R0ZXJ5XCIgLz5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25mb250IGljb25fU1VQRVJiaW5nb1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnNXJlbScgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX1JUR3Nsb3RzXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICc0LjhyZW0nIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9iZXRpeGlvblwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2JldHNvZnRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSBzdWJqZWN0PVwi5ZyL6Zqb5a6J5YWo6KqN6K2JXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3VyaXR5TG9nb0JveFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fMS5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fMi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fMy5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fNC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fNS5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fNi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fNy5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlY3VyaXR5TG9nby9wYXJ0bmVyX2xvZ29fOC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ29weXJpZ2h0wqkgMjAxOSBBbGxiZXRnYW1pbmcuY29tLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAgICAgIOacjeWLmeaineasvnzpmrHnp4HmrIrkv53orbfmlL/nrZZcbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJMaW5rXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT7lqJvmqILln448L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT7nmb7lrrbmqII8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT7nkIPniYjnj77ph5HniYg8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT7pm7vlrZDmi4npnLg8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT7pkavln47os5Pmnpw8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT7nmb7lrrbmqILmioDlt6fmlZnlrbg8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgICAgICAgIHNwYW4uaWNvbmZvbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAuc2VjdXJpdHlMb2dvQm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VjdXJpdHlMb2dvQm94IGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuLmljb25mb250IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3Rlckxpbmsge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXJMaW5rIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyTGluayB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXJMaW5rIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdXJpdHlMb2dvQm94IHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3VyaXR5TG9nb0JveCBpbWcge1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pY29uQm94OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbkJveDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pY29uQm94IHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5pY29uZm9udCB7XG4gICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNjIzNmZmIDAlLCAjOWE1ZmM5IDEwMCUpO1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLmljb25mb250OmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2NlNzBmZjtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHVuc2V0O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc2MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDM4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViVGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gICAgICAgICAgbWFyZ2luOiAtMTBweCBhdXRvIDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvYmdfc2VjdGlvbl9jb29wZXJhdGlvbi5wbmcpIG5vLXJlcGVhdDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDc4cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/InfoModify.js":
/*!**********************************!*\
  !*** ./components/InfoModify.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _OutlineBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutlineBtn */ "./components/OutlineBtn.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const modalStyles = {
  content: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement('#__next');

function InfoModify(props) {
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: passModalIsOpen,
    1: setPassModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModal = () => {
    setModalIsOpen(true);
    setPassModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closePassModal = () => {
    setPassModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("span", {
    onClick: openModal,
    className: "iconfont icon_user-alt-light",
    "data-tip": "\u8B8A\u66F4\u8CC7\u6599",
    style: {
      marginLeft: 20
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle = subtitle
  }, "\u8B8A\u66F4\u8CC7\u6599"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody__InfoLayout}`
  }, __jsx("form", {
    style: {
      borderRight: '1px solid white',
      padding: '0 20px'
    }
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "\u8B8A\u66F4\u66B1\u7A31\u8207\u5BC6\u78BC"), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u66B1 \u7A31"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u65B0\u5E33\u865F\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u78BA\u8A8D\u65B0\u5E33\u865F\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u65B0\u63D0\u6B3E\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u78BA\u8A8D\u65B0\u63D0\u6B3E\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck1"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck1"
  }, "\u662F\u5426\u4F7F\u7528\u63D0\u6B3E\u5BC6\u78BC")), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck2"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck2"
  }, "\u662F\u5426\u901A\u904E\u624B\u6A5F\u63A5\u6536\u512A\u60E0\u8A0A\u606F")), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck3"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck3"
  }, "\u63A5\u6536\u5B58\u3001\u63D0\u6B3E\u5B8C\u6210\u901A\u77E5"))), __jsx("form", {
    style: {
      padding: '0 20px'
    }
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "\u8B8A\u66F4\u806F\u7E6B\u8CC7\u6599"), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u624B\u6A5F\u865F\u78BC"), __jsx("input", {
    type: "number",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u96FB\u5B50\u4FE1\u7BB1"), __jsx("input", {
    type: "mail",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-row",
    style: {
      marginBottom: 20
    }
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("label", null, "LINE\u5E33\u865F"), __jsx("input", {
    type: "text",
    className: "form-control"
  }))), __jsx("div", {
    className: "form-row",
    style: {
      marginBottom: 20
    }
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("label", null, "\u5FAE\u4FE1\u5E33\u865F"), __jsx("input", {
    type: "text",
    className: "form-control"
  }))), __jsx("label", null, "\u6536\u8CA8\u5730\u5740"), __jsx("div", {
    className: "form-row",
    style: {
      marginBottom: 20
    }
  }, __jsx("div", {
    className: "form-group col-12"
  }, __jsx("select", {
    id: "inputState",
    className: "form-control",
    defaultValue: "\u8ACB\u9078\u64C7\u57CE\u5E02"
  }, __jsx("option", null, "..."), __jsx("option", null, "..."))), __jsx("div", {
    className: "form-group col-12"
  }, __jsx("select", {
    id: "inputState",
    className: "form-control",
    defaultValue: "\u9109\u93AE\u5E02\u5340"
  }, __jsx("option", null, "..."), __jsx("option", null, "..."))), __jsx("div", {
    className: "form-group col"
  }, __jsx("input", {
    type: "text",
    className: "form-control"
  }))))), __jsx(_OutlineBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "\u78BA\u8A8D\u4FEE\u6539",
    style: {
      margin: '0 auto 30px',
      width: '80%'
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: passModalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closePassModal,
    style: modalStyles,
    contentLabel: "enterPassWords"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle = subtitle
  }, "\u8ACB\u8F38\u5165\u63D0\u6B3E\u5BC6\u78BC"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closePassModal
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody
  }, __jsx("form", {
    className: "jsx-783784817" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup || "")
  }, __jsx("div", {
    className: "jsx-783784817" + " " + "inputWithBtn"
  }, __jsx("input", {
    type: "text",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26",
    className: "jsx-783784817"
  }), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-primary btn-sm"
  }, "\u5FD8\u8A18\u5BC6\u78BC")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "783784817"
  }, ".inputWithBtn.jsx-783784817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;margin-bottom:10px;}.inputWithBtn.jsx-783784817 .btn.jsx-783784817{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;margin-left:10px;}.btn-submit.jsx-783784817{background-color:#32c5ff;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0luZm9Nb2RpZnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeU9lLEFBR2dDLEFBS0EsQUFJWSx5QkFDYixZQUNkLGNBTG1CLGlCQUNuQixNQU5rQixnQkFDRyxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL2NvbXBvbmVudHMvSW5mb01vZGlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZXMvbWFpbi5zY3NzJ1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgVGhlbWVQcm92aWRlciwgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcbmltcG9ydCBPdXRsaW5lQnRuIGZyb20gXCIuL091dGxpbmVCdG5cIjtcblxuY29uc3QgbW9kYWxTdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICBtYXhXaWR0aDogJzgwMHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICBib3JkZXI6ICdub25lJ1xuICB9XG59O1xuTW9kYWwuc2V0QXBwRWxlbWVudCgnI19fbmV4dCcpO1xuXG5mdW5jdGlvbiBJbmZvTW9kaWZ5KHByb3BzKSB7XG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFzc01vZGFsSXNPcGVuLCBzZXRQYXNzTW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XG4gICAgc2V0UGFzc01vZGFsSXNPcGVuKHRydWUpXG4gIH07XG5cblxuICBjb25zdCBhZnRlck9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXG4gICAgTW9kYWwuc3VidGl0bGUuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIE1vZGFsLmRlZmF1bHRTdHlsZXMub3ZlcmxheS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwuNjUpJztcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcblxuICB9O1xuXG5cbiAgY29uc3QgY2xvc2VQYXNzTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UGFzc01vZGFsSXNPcGVuKGZhbHNlKVxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzTmFtZT1cImljb25mb250IGljb25fdXNlci1hbHQtbGlnaHRcIiBkYXRhLXRpcD1cIuiuiuabtOizh+aWmVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMjB9fS8+XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICBvbkFmdGVyT3Blbj17YWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBzdHlsZT17bW9kYWxTdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIndhbGxldFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9kYWxIZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgcmVmPXtzdWJ0aXRsZSA9PiAoTW9kYWwuc3VidGl0bGUgPSBzdWJ0aXRsZSl9PlxuICAgICAgICAgICAg6K6K5pu06LOH5paZXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl90aW1lcy1saWdodFwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MubW9kYWxCb2R5fSAke2Nzcy5tb2RhbEJvZHlfX0luZm9MYXlvdXR9YH0+XG4gICAgICAgICAgPGZvcm0gc3R5bGU9e3tib3JkZXJSaWdodDonMXB4IHNvbGlkIHdoaXRlJywgcGFkZGluZzonMCAyMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50aXRsZX0+6K6K5pu05pqx56ix6IiH5a+G56K8PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaasSDnqLE8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaWsOW4s+iZn+WvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPueiuuiqjeaWsOW4s+iZn+WvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaWsOaPkOasvuWvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPueiuuiqjeaWsOaPkOasvuWvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazFcIj5cbiAgICAgICAgICAgICAgICDmmK/lkKbkvb/nlKjmj5DmrL7lr4bnorxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazJcIj5cbiAgICAgICAgICAgICAgICDmmK/lkKbpgJrpgY7miYvmqZ/mjqXmlLblhKrmg6DoqIrmga9cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazNcIj5cbiAgICAgICAgICAgICAgICDmjqXmlLblrZjjgIHmj5DmrL7lrozmiJDpgJrnn6VcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxmb3JtIHN0eWxlPXt7cGFkZGluZzonMCAyMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50aXRsZX0+6K6K5pu06IGv57mr6LOH5paZPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaJi+apn+iZn+eivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI2LTEw5L2N6Iux44CB5pW45a2X56ymXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7pm7vlrZDkv6HnrrE8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibWFpbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TElOReW4s+iZnzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lvq7kv6HluLPomZ88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+5pS26LKo5Zyw5Z2APC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLoq4vpgbjmk4fln47luIJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPi4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLphInpjq7luILljYBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPi4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxPdXRsaW5lQnRuIG5hbWU9XCLnorroqo3kv67mlLlcIiBzdHlsZT17e21hcmdpbjonMCBhdXRvIDMwcHgnLCB3aWR0aDonODAlJ319Lz5cblxuXG4gICAgICA8L01vZGFsPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXtwYXNzTW9kYWxJc09wZW59XG4gICAgICAgIG9uQWZ0ZXJPcGVuPXthZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlUGFzc01vZGFsfVxuICAgICAgICBzdHlsZT17bW9kYWxTdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cImVudGVyUGFzc1dvcmRzXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGRpdiByZWY9e3N1YnRpdGxlID0+IChNb2RhbC5zdWJ0aXRsZSA9IHN1YnRpdGxlKX0+XG4gICAgICAgICAgICDoq4vovLjlhaXmj5DmrL7lr4bnorxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3RpbWVzLWxpZ2h0XCIgb25DbGljaz17Y2xvc2VQYXNzTW9kYWx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9kYWxCb2R5fT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Nzcy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFdpdGhCdG5cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCI2LTEw5L2N6Iux44CB5pW45a2X56ymXCIvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAg5b+Y6KiY5a+G56K8XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5pbnB1dFdpdGhCdG4ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5wdXRXaXRoQnRuIC5idG4ge1xuICAgICAgICAgICAgICAgICAgZmxleDogMSAxIDQwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnRuLXN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJjNWZmO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Ym1pdCBidG4tc21cIj5cbiAgICAgICAgICAgICAg56K66KqN6YCB5Ye6XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvTW9kaWZ5OyJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/InfoModify.js */"), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-submit btn-sm"
  }, "\u78BA\u8A8D\u9001\u51FA")))));
}

/* harmony default export */ __webpack_exports__["default"] = (InfoModify);

/***/ }),

/***/ "./components/MemberNotification.js":
/*!******************************************!*\
  !*** ./components/MemberNotification.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BetItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BetItem */ "./components/BetItem.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _noticeItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./noticeItem */ "./components/noticeItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const modalStyles = {
  content: {
    width: '100%',
    maxWidth: '600px',
    maxHeight: '800px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  overrides: {
    // Style sheet name ⚛️
    MuiButtonGroup: {
      root: {
        width: '100%'
      }
    },
    MuiButtonBase: {
      root: {
        flex: '1 1 25%'
      }
    },
    MuiButton: {
      outlinedPrimary: {
        color: 'white',
        border: '1px solid rgba(255,255,255, 0.68)'
      }
    },
    MuiFormLabel: {
      root: {
        color: 'white',
        '&$focused': {
          color: 'rgba(157, 1, 255, 1)'
        }
      }
    },
    MuiInputBase: {
      // Name of the rule
      root: {
        // Some CSS
        color: 'white'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:after': {
          borderBottom: `1px solid rgba(157, 1, 255, 0.85)`
        }
      }
    }
  }
});
const style = {
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  marginBottom: 30
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200
  }
}));
react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement('#__next');

function MemberNotification(props) {
  const classes = useStyles();
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };
  const {
    0: accordian,
    1: setAccordian
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showAccordian = () => {
    setAccordian(!accordian);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("span", {
    onClick: openModal,
    className: "iconfont icon_bell-light",
    "data-tip": "\u6703\u54E1\u901A\u77E5",
    style: {
      marginLeft: 20
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle = subtitle
  }, "\u6703\u54E1\u901A\u77E5"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody__BetRecordsLayout}`
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tabs"], {
    defaultIndex: 0,
    onSelect: index => console.log(index)
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabList"], null, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], null, "\u500B\u4EBA\u8A0A\u606F"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_8__["Tab"], null, "\u516C\u544A\u5C08\u5340")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttonGroup
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    color: "primary"
  }, "\u5168\u9078"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    color: "primary"
  }, "\u53D6\u6D88"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default.a, null)
  }, "\u522A\u9664"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/online_message'),
    variant: "contained",
    color: "secondary"
  }, "\u7DDA\u4E0A\u7559\u8A00"))), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: true,
    from: "\u5C08\u5C6C\u5132\u503C\u5E33\u865F\u66F4\u6539\u901A\u77E5",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  }), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: true,
    from: "\u7DDA\u4E0A\u7559\u8A00",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  }), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: true,
    from: "\u7DDA\u4E0A\u7559\u8A00",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  }), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: true,
    from: "\u7DDA\u4E0A\u7559\u8A00",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], null, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer
  }, __jsx("div", {
    onClick: showAccordian,
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: 50
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, __jsx("div", {
    style: {
      fontSize: '1rem',
      color: 'black'
    }
  }, "\u641C\u5C0B\u689D\u4EF6")), __jsx("span", {
    className: _class[accordian],
    style: {
      fontSize: '1rem',
      color: '#9BA2AA'
    }
  })), accordian && __jsx("div", {
    style: {
      width: '100%',
      padding: '20px 0',
      borderTop: '1px solid #979797',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, __jsx("div", {
    style: {
      flexBasis: '50%',
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      border: '1px solid #979797',
      margin: '4px 6px',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: '#c0c0c0'
    }
  }, "\u5168\u90E8")), __jsx("div", {
    style: {
      flexBasis: '50%',
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      border: '1px solid #979797',
      margin: '4px 6px',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: '#c0c0c0'
    }
  }, "\u7CFB\u7D71")), __jsx("div", {
    style: {
      flexBasis: '50%',
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      border: '1px solid #979797',
      margin: '4px 6px',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: '#c0c0c0'
    }
  }, "\u7279\u6B8A")), __jsx("div", {
    style: {
      flexBasis: '50%',
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      border: '1px solid #979797',
      margin: '4px 6px',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: '#c0c0c0'
    }
  }, "\u5B58\u63D0\u6B3E")), __jsx("div", {
    style: {
      flexBasis: '50%',
      textAlign: 'center'
    }
  }, __jsx("div", {
    style: {
      border: '1px solid #979797',
      margin: '4px 6px',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: '#c0c0c0'
    }
  }, "\u9280\u884C\u7DAD\u8B77")))), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: false,
    from: "\u5C08\u5C6C\u5132\u503C\u5E33\u865F\u66F4\u6539\u901A\u77E5",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  }), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: false,
    from: "\u5C08\u5C6C\u5132\u503C\u5E33\u865F\u66F4\u6539\u901A\u77E5",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  }), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: false,
    from: "\u5C08\u5C6C\u5132\u503C\u5E33\u865F\u66F4\u6539\u901A\u77E5",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  }), __jsx(_noticeItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectable: false,
    from: "\u5C08\u5C6C\u5132\u503C\u5E33\u865F\u66F4\u6539\u901A\u77E5",
    content: "\u89AA\u611B\u7684\u6703\u54E1\u60A8\u597D\uFF1A\n\u5373\u65E5\u8D77\uFF0C\u60A8\u7684\u5132\u503C\u5E33\u865F\u5DF2\u7D93\u66F4\u6539\uFF0C\u7531\u65BC\u672C\u516C\u53F8\u5132\u503C\u5E33\u865F\u6703\u4E0D\u5B9A\u6642\u505A\u66F4\u63DB\uFF0C\n\u8ACB\u60A8\u52D9\u5FC5\u5728\u5132\u503C\u524D\u5148\u767B\u5165\u5B98\u7DB2\u67E5\u8A62\u300A\u5132\u503C\u5E33\u865F\u300B\uFF0C\u78BA\u8A8D\u60A8\u7684\u300A\u5C08\u5C6C\u9280\u884C\u5E33\u865F\u300B\uFF0C\n\u5F8C\u518D\u9032\u884C\u5132\u503C\uFF0C\u8F49\u5165\u820A\u5132\u503C\u5E33\u865F\u6055\u4E0D\u63A5\u53D7\u8F49\u63DB\u9EDE\u6578\uFF0C\u4E0D\u4FBF\u4E4B\u8655\uFF0C\u656C\u8ACB\u898B\u8AD2\u3002",
    time: "2020-01-16 07:09"
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (MemberNotification);

/***/ }),

/***/ "./components/OutlineBtn.js":
/*!**********************************!*\
  !*** ./components/OutlineBtn.js ***!
  \**********************************/
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const OutlineBtn = ({
  path,
  func,
  back,
  name,
  style
}) => {
  const handleClick = () => {
    if (path) {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(path);
    } else if (func) {
      func();
    } else if (back) {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.back();
    }
  };

  return __jsx("div", {
    style: style,
    onClick: handleClick,
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.outlineBtn
  }, name);
};

/* harmony default export */ __webpack_exports__["default"] = (OutlineBtn);

/***/ }),

/***/ "./components/Register.js":
/*!********************************!*\
  !*** ./components/Register.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _OutlineBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutlineBtn */ "./components/OutlineBtn.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const modalStyles = {
  content: {
    width: '100%',
    maxWidth: '580px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement('#__next');

function InfoModify(props) {
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: passModalIsOpen,
    1: setPassModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closePassModal = () => {
    setPassModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("button", {
    onClick: openModal,
    style: {
      marginRight: '5px'
    },
    type: "button",
    className: "btn btn-dark btn-sm"
  }, "\u7ACB\u5373\u8A3B\u518A\xA0", __jsx("span", {
    className: "iconfont icon_user-plus-light",
    style: {
      color: 'white'
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle = subtitle
  }, "\u52A0\u5165\u6703\u54E1"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody__InfoLayout}`
  }, __jsx("form", {
    style: {
      padding: '40px 20px'
    }
  }, __jsx("div", {
    className: "form-group row"
  }, __jsx("label", {
    className: "col-sm-3 col-form-label"
  }, __jsx("span", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.red
  }, "*"), "\u7528\u6236\u540D"), __jsx("div", {
    className: "col-sm-9"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "1 ~ 5\u4F4D\u4E2D\u3001\u82F1\u3001\u6578\u5B57\u7B26"
  }))), __jsx("div", {
    className: "form-group row"
  }, __jsx("label", {
    className: "col-sm-3 col-form-label"
  }, __jsx("span", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.red
  }, "*"), "\u5BC6\u78BC"), __jsx("div", {
    className: "col-sm-9"
  }, __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  }))), __jsx("div", {
    className: "form-group row"
  }, __jsx("label", {
    className: "col-sm-3 col-form-label"
  }, __jsx("span", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.red
  }, "*"), "\u78BA\u8A8D\u5BC6\u78BC"), __jsx("div", {
    className: "col-sm-9"
  }, __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC"
  }))), __jsx("div", {
    className: "form-group row"
  }, __jsx("label", {
    className: "col-sm-3 col-form-label"
  }, __jsx("span", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.red
  }, "*"), "\u59D3\u540D"), __jsx("div", {
    className: "col-sm-9"
  }, __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "\u8ACB\u8F38\u5165\u6B63\u78BA\u59D3\u540D"
  }))), __jsx("div", {
    className: "form-group row"
  }, __jsx("label", {
    className: "col-sm-3 col-form-label"
  }, __jsx("span", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.red
  }, "*"), "LineID"), __jsx("div", {
    className: "col-sm-9"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "\u8ACB\u7559\u4E0B\u6B63\u78BAID,\u65B9\u4FBF\u5BA2\u670D\u806F\u7CFB\u8207\u63A5\u6536\u6700\u65B0\u512A\u60E0"
  }))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line
  }), __jsx("div", {
    className: "form-group row"
  }, __jsx("label", {
    className: "col-sm-3 col-form-label"
  }, "\u5E33\u865F/\u624B\u6A5F\u865F\u78BC"), __jsx("div", {
    className: "col-sm-9"
  }, __jsx("input", {
    style: {
      paddingRight: 67
    },
    type: "text",
    className: `form-control ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input_box}`
  }), __jsx("a", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_ver_code} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_ver_code__message}`
  }, "\u7C21\u8A0A"))), __jsx("div", {
    className: "form-group row"
  }, __jsx("label", {
    className: "col-sm-3 col-form-label"
  }, "\u9A57\u8B49\u78BC"), __jsx("div", {
    className: "col-sm-9"
  }, __jsx("input", {
    style: {
      paddingRight: 67
    },
    type: "text",
    className: `form-control ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input_box}`
  }), __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn_ver_code
  }, "\u9001\u51FA"))), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck1"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck1"
  }, "\u662F\u5426\u901A\u904E\u624B\u6A5F\u63A5\u6536\u512A\u60E0\u8A0A\u606F")), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck2"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck2"
  }, "\u6211\u5DF2\u5E74\u6EFF18\u6B72\uFF0C\u4E26\u540C\u610F\u6295\u6CE8\u76F8\u95DC\u898F\u7BC4\u4EE5\u53CA", __jsx("span", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.blue
  }, "\u670D\u52D9\u689D\u6B3E"))))), __jsx(_OutlineBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "\u78BA\u8A8D\u9001\u51FA",
    style: {
      margin: '0 auto 30px',
      width: '80%'
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: passModalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closePassModal,
    style: modalStyles,
    contentLabel: "enterPassWords"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle = subtitle
  }, "\u8ACB\u8F38\u5165\u63D0\u6B3E\u5BC6\u78BC"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closePassModal
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody
  }, __jsx("form", {
    className: "jsx-783784817" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup || "")
  }, __jsx("div", {
    className: "jsx-783784817" + " " + "inputWithBtn"
  }, __jsx("input", {
    type: "text",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26",
    className: "jsx-783784817"
  }), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-primary btn-sm"
  }, "\u5FD8\u8A18\u5BC6\u78BC")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "783784817"
  }, ".inputWithBtn.jsx-783784817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;margin-bottom:10px;}.inputWithBtn.jsx-783784817 .btn.jsx-783784817{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;margin-left:10px;}.btn-submit.jsx-783784817{background-color:#32c5ff;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL1JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVNZSxBQUdnQyxBQUtBLEFBSVkseUJBQ2IsWUFDZCxjQUxtQixpQkFDbkIsTUFOa0IsZ0JBQ0csbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL1JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uL3N0eWxlcy9tYWluLnNjc3MnXG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBUaGVtZVByb3ZpZGVyLCBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IE91dGxpbmVCdG4gZnJvbSBcIi4vT3V0bGluZUJ0blwiO1xuXG5jb25zdCBtb2RhbFN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICc1ODBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgYm9yZGVyOiAnbm9uZSdcbiAgfVxufTtcbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKTtcblxuZnVuY3Rpb24gSW5mb01vZGlmeShwcm9wcykge1xuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcGFzc01vZGFsSXNPcGVuLCBzZXRQYXNzTW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XG4gIH07XG5cblxuICBjb25zdCBhZnRlck9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXG4gICAgTW9kYWwuc3VidGl0bGUuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIE1vZGFsLmRlZmF1bHRTdHlsZXMub3ZlcmxheS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwuNjUpJztcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcblxuICB9O1xuXG5cbiAgY29uc3QgY2xvc2VQYXNzTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UGFzc01vZGFsSXNPcGVuKGZhbHNlKVxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cbiAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXG4gICAgICA+XG4gICAgICAgIOeri+WNs+iou+WGiiZuYnNwO1xuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdXNlci1wbHVzLWxpZ2h0XCJcbiAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX1cbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgb25BZnRlck9wZW49e2FmdGVyT3Blbk1vZGFsfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgc3R5bGU9e21vZGFsU3R5bGVzfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJ3YWxsZXRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1vZGFsSGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IHJlZj17c3VidGl0bGUgPT4gKE1vZGFsLnN1YnRpdGxlID0gc3VidGl0bGUpfT5cbiAgICAgICAgICAgIOWKoOWFpeacg+WToVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdGltZXMtbGlnaHRcIiBvbkNsaWNrPXtjbG9zZU1vZGFsfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MubW9kYWxCb2R5fSAke2Nzcy5tb2RhbEJvZHlfX0luZm9MYXlvdXR9YH0+XG4gICAgICAgICAgPGZvcm0gc3R5bGU9e3twYWRkaW5nOiAnNDBweCAyMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjb2wtc20tMyBjb2wtZm9ybS1sYWJlbCc+PHNwYW4gY2xhc3NOYW1lPXtjc3MucmVkfT4qPC9zcGFuPueUqOaItuWQjTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEgfiA15L2N5Lit44CB6Iux44CB5pW45a2X56ymXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2NvbC1zbS0zIGNvbC1mb3JtLWxhYmVsJz48c3BhbiBjbGFzc05hbWU9e2Nzcy5yZWR9Pio8L3NwYW4+5a+G56K8PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPjxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2NvbC1zbS0zIGNvbC1mb3JtLWxhYmVsJz48c3BhbiBjbGFzc05hbWU9e2Nzcy5yZWR9Pio8L3NwYW4+56K66KqN5a+G56K8PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPjxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuiri+WGjeasoei8uOWFpeWvhueivFwiXG4gICAgICAgICAgICAgIC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY29sLXNtLTMgY29sLWZvcm0tbGFiZWwnPjxzcGFuIGNsYXNzTmFtZT17Y3NzLnJlZH0+Kjwvc3Bhbj7lp5PlkI08L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+PGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6KuL6Ly45YWl5q2j56K65aeT5ZCNXCJcbiAgICAgICAgICAgICAgLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjb2wtc20tMyBjb2wtZm9ybS1sYWJlbCc+PHNwYW4gY2xhc3NOYW1lPXtjc3MucmVkfT4qPC9zcGFuPkxpbmVJRDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj48aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuiri+eVmeS4i+ato+eiuklELOaWueS+v+WuouacjeiBr+ezu+iIh+aOpeaUtuacgOaWsOWEquaDoFwiXG4gICAgICAgICAgICAgIC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubGluZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjb2wtc20tMyBjb2wtZm9ybS1sYWJlbCc+5biz6JmfL+aJi+apn+iZn+eivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiA2N319XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtjc3MuaW5wdXRfYm94fWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake2Nzcy5idG5fdmVyX2NvZGV9ICR7Y3NzLmJ0bl92ZXJfY29kZV9fbWVzc2FnZX1gfT7nsKHoqIo8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2NvbC1zbS0zIGNvbC1mb3JtLWxhYmVsJz7pqZforYnnorw8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogNjd9fVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7Y3NzLmlucHV0X2JveH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MuYnRuX3Zlcl9jb2RlfT7pgIHlh7o8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazFcIj5cbiAgICAgICAgICAgICAgICDmmK/lkKbpgJrpgY7miYvmqZ/mjqXmlLblhKrmg6DoqIrmga9cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazJcIj5cbiAgICAgICAgICAgICAgICDmiJHlt7LlubTmu78xOOatsu+8jOS4puWQjOaEj+aKleazqOebuOmXnOimj+evhOS7peWPijxzcGFuIGNsYXNzTmFtZT17Y3NzLmJsdWV9PuacjeWLmeaineasvjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8T3V0bGluZUJ0biBuYW1lPVwi56K66KqN6YCB5Ye6XCIgc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8gMzBweCcsIHdpZHRoOiAnODAlJ319Lz5cblxuXG4gICAgICA8L01vZGFsPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXtwYXNzTW9kYWxJc09wZW59XG4gICAgICAgIG9uQWZ0ZXJPcGVuPXthZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlUGFzc01vZGFsfVxuICAgICAgICBzdHlsZT17bW9kYWxTdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cImVudGVyUGFzc1dvcmRzXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGRpdiByZWY9e3N1YnRpdGxlID0+IChNb2RhbC5zdWJ0aXRsZSA9IHN1YnRpdGxlKX0+XG4gICAgICAgICAgICDoq4vovLjlhaXmj5DmrL7lr4bnorxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3RpbWVzLWxpZ2h0XCIgb25DbGljaz17Y2xvc2VQYXNzTW9kYWx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9kYWxCb2R5fT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Nzcy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFdpdGhCdG5cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCI2LTEw5L2N6Iux44CB5pW45a2X56ymXCIvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAg5b+Y6KiY5a+G56K8XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5pbnB1dFdpdGhCdG4ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5wdXRXaXRoQnRuIC5idG4ge1xuICAgICAgICAgICAgICAgICAgZmxleDogMSAxIDQwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnRuLXN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJjNWZmO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Ym1pdCBidG4tc21cIj5cbiAgICAgICAgICAgICAg56K66KqN6YCB5Ye6XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvTW9kaWZ5OyJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/Register.js */"), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-submit btn-sm"
  }, "\u78BA\u8A8D\u9001\u51FA")))));
}

/* harmony default export */ __webpack_exports__["default"] = (InfoModify);

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

/***/ "./components/UpMenu.js":
/*!******************************!*\
  !*** ./components/UpMenu.js ***!
  \******************************/
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class UpMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      onClick: this.showMenu,
      style: {
        cursor: 'pointer',
        position: 'relative'
      }
    }, __jsx("a", null, __jsx("span", {
      className: this.props.className
    }), this.props.name), this.state.showMenu ? __jsx("div", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UpMenu,
      ref: element => {
        this.dropdownMenu = element;
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/edit_user_info"
    }, __jsx("a", null, __jsx("p", null, __jsx("span", {
      className: "iconfont icon_user-alt-light"
    }), "\u8B8A\u66F4\u8CC7\u6599"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/transaction_records"
    }, __jsx("a", null, __jsx("p", null, __jsx("span", {
      className: "iconfont icon_file-invoice-dollar-light"
    }), "\u4EA4\u6613\u8A18\u9304"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/bet_records"
    }, __jsx("a", null, __jsx("p", null, __jsx("span", {
      className: "iconfont icon_coins-light"
    }), "\u6295\u6CE8\u8A18\u9304"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/bonus_records"
    }, __jsx("a", null, __jsx("p", null, __jsx("span", {
      className: "iconfont icon_gift-light"
    }), "\u512A\u60E0\u8A18\u9304")))) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UpMenu);

/***/ }),

/***/ "./components/UpSwitch.js":
/*!********************************!*\
  !*** ./components/UpSwitch.js ***!
  \********************************/
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class UpSwitch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      onClick: this.showMenu,
      style: {
        cursor: 'pointer',
        position: 'relative'
      }
    }, __jsx("a", null, __jsx("span", {
      className: this.props.className
    }), this.props.name), this.state.showMenu ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.overlay
    }), __jsx("div", {
      className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UpSwitch,
      ref: element => {
        this.dropdownMenu = element;
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/deposit"
    }, __jsx("a", null, __jsx("p", null, __jsx("span", {
      className: "iconfont icon_turnIN1",
      style: {
        color: '#077F64'
      }
    }), "\u5B58\u6B3E\u5C08\u5340"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/withdrawals"
    }, __jsx("a", null, __jsx("p", null, __jsx("span", {
      className: "iconfont icon_turnOUT1",
      style: {
        color: '#FA6400'
      }
    }), "\u63D0\u6B3E\u5C08\u5340"))))) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UpSwitch);

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

/***/ "./components/Wallet.js":
/*!******************************!*\
  !*** ./components/Wallet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const modalStyles = {
  content: {
    position: 'relative',
    backgroundImage: 'linear-gradient(225deg, #32C5FF 0%, #B620E0 51%, #F7B500 100%)',
    maxWidth: '994px',
    maxHeight: '574px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#d8d8d8',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    overflow: 'unset'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement('#__next');
const walletData = [{
  name: '主錢包',
  value: 250
}, {
  name: 'DG百家樂',
  value: 0
}, {
  name: '歐博',
  value: 0
}, {
  name: '沙龍百家樂',
  value: 0
}, {
  name: 'WM百家樂',
  value: 0
}, {
  name: '任你博體育',
  value: 0
}, {
  name: 'Super體育',
  value: 0
}, {
  name: 'AFB88',
  value: '維護中'
}, {
  name: 'RTG天地',
  value: 0
}, {
  name: 'Betsoft',
  value: 0
}, {
  name: 'BTX',
  value: 0
}, {
  name: '9K彩票',
  value: 0
}, {
  name: '六合彩539',
  value: 0
}];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    width: '100%'
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    // Style sheet name ⚛️
    MuiButtonGroup: {
      root: {
        width: '100%'
      }
    },
    MuiButtonBase: {
      root: {
        flex: '1 1 25%'
      }
    },
    MuiButton: {
      outlinedPrimary: {
        color: 'white',
        border: '1px solid rgba(255,255,255, 0.68)'
      }
    },
    MuiFormLabel: {
      root: {
        color: 'white',
        '&$focused': {
          color: 'rgba(157, 1, 255, 1)'
        }
      }
    },
    MuiInputBase: {
      // Name of the rule
      root: {
        // Some CSS
        color: 'white'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:after': {
          borderBottom: `1px solid rgba(157, 1, 255, 0.85)`
        }
      }
    }
  }
});

function Wallet(props) {
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const classes = useStyles();
  const {
    0: tabsActiveDefault,
    1: setTabsActiveDefault
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([true, false, false, false, false]);

  const ActivateTab = index => {
    const reset = tabsActiveDefault.map(() => false);
    reset[index] = true;
    setTabsActiveDefault(reset);
  };

  const {
    0: switchTab,
    1: setSwitchTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([true, false]);

  const ActivateSwitchTab = index => {
    const reset = switchTab.map(() => false);
    reset[index] = true;
    setSwitchTab(reset);
  };

  const _class = {
    true: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active}`,
    false: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab}`
  };
  const style = {
    true: {
      display: 'flex'
    },
    false: {
      display: 'none'
    }
  };
  const formStyle = {
    true: {
      display: 'block'
    },
    false: {
      display: 'none'
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("span", {
    onClick: openModal,
    "data-tip": "\u96FB\u5B50\u9322\u5305",
    className: "iconfont icon_wallet-light",
    style: {
      marginLeft: 20
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    onClick: closeModal,
    className: "jsx-1356802791" + " " + 'wallet'
  }, __jsx("span", {
    style: {
      fontSize: 26,
      color: '#32C5FF'
    },
    className: "jsx-1356802791" + " " + "iconfont icon_times-light"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1356802791"
  }, ".wallet.jsx-1356802791{position:absolute;top:-18px;right:-18px;box-sizing:border-box;border:6px solid #32C5FF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:black;width:50px;height:50px;border-radius:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL1dhbGxldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTFksQUFHaUMsa0JBQ1IsVUFDRSxZQUNVLHNCQUNHLHlCQUNaLDBFQUNVLG1HQUNKLDZGQUNJLHVCQUNaLFdBQ0MsWUFDTyxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL2NvbXBvbmVudHMvV2FsbGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uL3N0eWxlcy9tYWluLnNjc3MnXG5pbXBvcnQge2NyZWF0ZU11aVRoZW1lLCBUaGVtZVByb3ZpZGVyLCBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuXG5jb25zdCBtb2RhbFN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCgyMjVkZWcsICMzMkM1RkYgMCUsICNCNjIwRTAgNTElLCAjRjdCNTAwIDEwMCUpJyxcbiAgICBtYXhXaWR0aDogJzk5NHB4JyxcbiAgICBtYXhIZWlnaHQ6ICc1NzRweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZDhkOGQ4JyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgb3ZlcmZsb3c6ICd1bnNldCdcbiAgfVxufTtcbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKTtcblxuY29uc3Qgd2FsbGV0RGF0YSA9IFtcbiAge25hbWU6ICfkuLvpjKLljIUnLCB2YWx1ZTogMjUwfSxcbiAge25hbWU6ICdER+eZvuWutuaogicsIHZhbHVlOiAwfSxcbiAge25hbWU6ICfmrZDljZonLCB2YWx1ZTogMH0sXG4gIHtuYW1lOiAn5rKZ6b6N55m+5a625qiCJywgdmFsdWU6IDB9LFxuICB7bmFtZTogJ1dN55m+5a625qiCJywgdmFsdWU6IDB9LFxuICB7bmFtZTogJ+S7u+S9oOWNmumrlOiCsicsIHZhbHVlOiAwfSxcbiAge25hbWU6ICdTdXBlcumrlOiCsicsIHZhbHVlOiAwfSxcbiAge25hbWU6ICdBRkI4OCcsIHZhbHVlOiAn57at6K235LitJ30sXG4gIHtuYW1lOiAnUlRH5aSp5ZywJywgdmFsdWU6IDB9LFxuICB7bmFtZTogJ0JldHNvZnQnLCB2YWx1ZTogMH0sXG4gIHtuYW1lOiAnQlRYJywgdmFsdWU6IDB9LFxuICB7bmFtZTogJzlL5b2p56WoJywgdmFsdWU6IDB9LFxuICB7bmFtZTogJ+WFreWQiOW9qTUzOScsIHZhbHVlOiAwfVxuXTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbn0pKTtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIG92ZXJyaWRlczoge1xuICAgIC8vIFN0eWxlIHNoZWV0IG5hbWUg4pqb77iPXG4gICAgTXVpQnV0dG9uR3JvdXA6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleDogJzEgMSAyNSUnLFxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBvdXRsaW5lZFByaW1hcnk6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LCAwLjY4KSdcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUZvcm1MYWJlbDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMTU3LCAxLCAyNTUsIDEpJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlJbnB1dEJhc2U6IHtcbiAgICAgIC8vIE5hbWUgb2YgdGhlIHJ1bGVcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgLy8gU29tZSBDU1NcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlJbnB1dDoge1xuICAgICAgdW5kZXJsaW5lOiB7XG4gICAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKWBcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCk6bm90KCRmb2N1c2VkKTpub3QoJGVycm9yKTpiZWZvcmUnOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MilgXG4gICAgICAgIH0sXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCByZ2JhKDE1NywgMSwgMjU1LCAwLjg1KWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIFdhbGxldChwcm9wcykge1xuXG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgYWZ0ZXJPcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgLy8gcmVmZXJlbmNlcyBhcmUgbm93IHN5bmMnZCBhbmQgY2FuIGJlIGFjY2Vzc2VkLlxuICAgIE1vZGFsLmRlZmF1bHRTdHlsZXMub3ZlcmxheS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwuNjUpJztcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0YWJzQWN0aXZlRGVmYXVsdCwgc2V0VGFic0FjdGl2ZURlZmF1bHRdID0gdXNlU3RhdGUoW1xuICAgIHRydWUsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2VcbiAgXSk7XG5cbiAgY29uc3QgQWN0aXZhdGVUYWIgPSBpbmRleCA9PiB7XG4gICAgY29uc3QgcmVzZXQgPSB0YWJzQWN0aXZlRGVmYXVsdC5tYXAoKCkgPT4gZmFsc2UpO1xuICAgIHJlc2V0W2luZGV4XSA9IHRydWU7XG4gICAgc2V0VGFic0FjdGl2ZURlZmF1bHQocmVzZXQpO1xuICB9O1xuXG4gIGNvbnN0IFtzd2l0Y2hUYWIsIHNldFN3aXRjaFRhYl0gPSB1c2VTdGF0ZShbdHJ1ZSwgZmFsc2VdKTtcbiAgY29uc3QgQWN0aXZhdGVTd2l0Y2hUYWIgPSBpbmRleCA9PiB7XG4gICAgY29uc3QgcmVzZXQgPSBzd2l0Y2hUYWIubWFwKCgpID0+IGZhbHNlKTtcbiAgICByZXNldFtpbmRleF0gPSB0cnVlO1xuICAgIHNldFN3aXRjaFRhYihyZXNldCk7XG4gIH07XG5cbiAgY29uc3QgX2NsYXNzID0ge1xuICAgIHRydWU6IGAke2Nzcy50YWJ9ICR7Y3NzLmFjdGl2ZX1gLFxuICAgIGZhbHNlOiBgJHtjc3MudGFifWBcbiAgfTtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0cnVlOiB7ZGlzcGxheTogJ2ZsZXgnfSxcbiAgICBmYWxzZToge2Rpc3BsYXk6ICdub25lJ31cbiAgfTtcblxuICBjb25zdCBmb3JtU3R5bGUgPSB7XG4gICAgdHJ1ZToge2Rpc3BsYXk6ICdibG9jayd9LFxuICAgIGZhbHNlOiB7ZGlzcGxheTogJ25vbmUnfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuXG4gICAgICA8c3BhbiBvbkNsaWNrPXtvcGVuTW9kYWx9IGRhdGEtdGlwPVwi6Zu75a2Q6Yyi5YyFXCIgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl93YWxsZXQtbGlnaHRcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDIwfX0vPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgb25BZnRlck9wZW49e2FmdGVyT3Blbk1vZGFsfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgc3R5bGU9e21vZGFsU3R5bGVzfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJ3YWxsZXRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17Y2xvc2VNb2RhbH1cbiAgICAgICAgICBjbGFzc05hbWU9J3dhbGxldCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl90aW1lcy1saWdodFwiIHN0eWxlPXt7Zm9udFNpemU6IDI2LCBjb2xvcjogJyMzMkM1RkYnfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAud2FsbGV0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IC0xOHB4O1xuICAgICAgICAgICAgICByaWdodDogLTE4cHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICMzMkM1RkY7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mud2FsbGV0Qm94fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLndhbGxldE1haW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tYWluTmF2fT5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBBY3RpdmF0ZVRhYigwKX1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc1t0YWJzQWN0aXZlRGVmYXVsdFswXV19Pui9ieW4s1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBBY3RpdmF0ZVRhYigxKX1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc1t0YWJzQWN0aXZlRGVmYXVsdFsxXV19PuWtmOasvlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBBY3RpdmF0ZVRhYigyKX1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc1t0YWJzQWN0aXZlRGVmYXVsdFsyXV19PuaPkOasvlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBBY3RpdmF0ZVRhYigzKX1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc1t0YWJzQWN0aXZlRGVmYXVsdFszXV19Puatt+WPslxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBBY3RpdmF0ZVRhYig0KX1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc1t0YWJzQWN0aXZlRGVmYXVsdFs0XV19PuabtOaUueWvhueivFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVbdGFic0FjdGl2ZURlZmF1bHRbMF1dfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy51aUJveH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudWlDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+5b6e6YCZ6L2J5bizPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7igJQg6KuL6YG45pOHIOKAlDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+6L2J5biz5Y675YiwPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7igJQg6KuL6YG45pOHIOKAlDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+6L2J5biz6YeR6aGNPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy5zdWJtaXRCdG59Pui9ieW4szwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlW3RhYnNBY3RpdmVEZWZhdWx0WzFdXX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MudWlCb3h9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnVpQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnN3aXRjaEJveH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IEFjdGl2YXRlU3dpdGNoVGFiKDApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc1tzd2l0Y2hUYWJbMF1dfT7ntrLkuIrmlK/ku5hcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBBY3RpdmF0ZVN3aXRjaFRhYigxKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtfY2xhc3Nbc3dpdGNoVGFiWzFdXX0+VklQ5a2Y5qy+5Y2AXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBzdHlsZT17Zm9ybVN0eWxlW3N3aXRjaFRhYlswXV19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwIHJvdyAke2Nzcy5mb3JtR3JvdXBDZW50ZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiIHN0eWxlPXt7bWFyZ2luOiAnMCAxMHB4IDEwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ1wiIGlkPVwiY3JlZGl0Q2FyZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjcmVkaXRDYXJkXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+h55So5Y2hXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiIHN0eWxlPXt7bWFyZ2luOiAnMCAxMHB4IDEwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ1wiIGlkPVwiYmFua1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJiYW5rXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAg6YqA6KGMXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+5b6e6YCZ6L2J5bizPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7igJQg6KuL6YG45pOHIOKAlDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+5pW46aGNPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT7lhKrmg6A8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPuKAlCDoq4vpgbjmk4cg4oCUPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnN1Ym1pdEJ0bn0+6L2J5bizPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDEwLCBmb250U2l6ZTogMTJ9fT7lpoLpnIDljZTliqnvvIzoq4vmtL3lnKjnt5rlrqLmnI3oqaLllY8hPC9wPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBzdHlsZT17Zm9ybVN0eWxlW3N3aXRjaFRhYlsxXV19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+6YqA6KGM5oi25Y+jPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7igJQg6KuL6YG45pOHIOKAlDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA1fX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT7mlbjpoY08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIG1hcmdpblRvcDogNSwgZm9udFNpemU6IDEwLCB0ZXh0QWxpZ246ICdyaWdodCd9fT7mnIDkvY4xMDAuMDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PuWCmeiouzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+4oCUIOiri+mBuOaThyDigJQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+5a2Y5qy+5pel5pyfPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMTctMDUtMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+5YSq5oOgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7igJQg6KuL6YG45pOHIOKAlDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnN1Ym1pdEJ0bn0+5o+Q5LqkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDEwLCBmb250U2l6ZTogMTJ9fT7lpoLpnIDljZTliqnvvIzoq4vmtL3lnKjnt5rlrqLmnI3oqaLllY88L3A+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVbdGFic0FjdGl2ZURlZmF1bHRbMl1dfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy51aUJveH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudWlDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+6YqA6KGMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7igJQg6YG45pOH6YqA6KGMIOKAlDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT7pioDooYzmiLblj6PlkI3lrZc8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+6YqA6KGM5oi25Y+j6Jmf56K8PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3Muc3VibWl0QnRufT7ovYnluLM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZVt0YWJzQWN0aXZlRGVmYXVsdFszXV19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLnVpQm94fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy51aUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT7pioDooYw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVwb3NpdFwiPuWtmOasvihWSVApPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVwb3NpdFBHXCI+5a2Y5qy+ICjntrLkuIrmlK/ku5gpPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2l0aGRyYXdhbFwiPuaPkOasvjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRyYW5zZmVyXCI+6L2J5bizPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2FsbGV0XCI+6Yyi5YyFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJvbW90aW9uXCI+5YSq5oOgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmV0XCI+5LiL5rOo5q235Y+yPC9vcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+6ZaL5aeL5pel5pyfPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMjAtMDMtMDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+57WQ5p2f5pel5pyfPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMjAtMDMtMDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy5zdWJtaXRCdG59PuaQnOWwizwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlW3RhYnNBY3RpdmVEZWZhdWx0WzRdXX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MudWlCb3h9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnVpQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PuiIiuWvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PuaWsOWvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PueiuuiqjeaWsOWvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3Muc3VibWl0QnRufT7mj5DkuqQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pdGVtQm94fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaGVhZGVyQm94fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5uYW1lfT5cbiAgICAgICAgICAgICAgICDpjKLljIVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc3VycGx1c30+XG4gICAgICAgICAgICAgICAg6aSY6aGNXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fVHJhbnNmZXInLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3dhbGxldERhdGEubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2Nzcy5saXN0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm5hbWV9PlxuICAgICAgICAgICAgICAgICAge2QubmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnN1cnBsdXN9PlxuICAgICAgICAgICAgICAgICAge2QudmFsdWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX1RyYW5zZmVyJy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnN1Ym1pdEJ0bn0+PHNwYW4gc3R5bGU9e3ttYXJnaW5SaWdodDogMTB9fSBjbGFzc05hbWU9J2ljb25mb250IGljb25fVHJhbnNmZXInLz7kuIDpjbXluLblm55cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXQ7Il19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/Wallet.js */"), __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.walletBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.walletMain || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mainNav || "")
  }, __jsx("div", {
    onClick: () => ActivateTab(0),
    className: "jsx-1356802791" + " " + (_class[tabsActiveDefault[0]] || "")
  }, "\u8F49\u5E33"), __jsx("div", {
    onClick: () => ActivateTab(1),
    className: "jsx-1356802791" + " " + (_class[tabsActiveDefault[1]] || "")
  }, "\u5B58\u6B3E"), __jsx("div", {
    onClick: () => ActivateTab(2),
    className: "jsx-1356802791" + " " + (_class[tabsActiveDefault[2]] || "")
  }, "\u63D0\u6B3E"), __jsx("div", {
    onClick: () => ActivateTab(3),
    className: "jsx-1356802791" + " " + (_class[tabsActiveDefault[3]] || "")
  }, "\u6B77\u53F2"), __jsx("div", {
    onClick: () => ActivateTab(4),
    className: "jsx-1356802791" + " " + (_class[tabsActiveDefault[4]] || "")
  }, "\u66F4\u6539\u5BC6\u78BC")), __jsx("div", {
    style: style[tabsActiveDefault[0]],
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiContainer || "")
  }, __jsx("form", {
    className: "jsx-1356802791"
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u5F9E\u9019\u8F49\u5E33"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u8ACB\u9078\u64C7 \u2014")))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u8F49\u5E33\u53BB\u5230"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u8ACB\u9078\u64C7 \u2014")))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u8F49\u5E33\u91D1\u984D"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "password",
    id: "inputPassword",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }))), __jsx("button", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn || "")
  }, "\u8F49\u5E33")))), __jsx("div", {
    style: style[tabsActiveDefault[1]],
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiContainer || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.switchBox || "")
  }, __jsx("div", {
    onClick: () => ActivateSwitchTab(0),
    className: "jsx-1356802791" + " " + (_class[switchTab[0]] || "")
  }, "\u7DB2\u4E0A\u652F\u4ED8"), __jsx("div", {
    onClick: () => ActivateSwitchTab(1),
    className: "jsx-1356802791" + " " + (_class[switchTab[1]] || "")
  }, "VIP\u5B58\u6B3E\u5340")), __jsx("form", {
    style: formStyle[switchTab[0]],
    className: "jsx-1356802791"
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + `form-group row ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formGroupCenter}`
  }, __jsx("div", {
    style: {
      margin: '0 10px 10px'
    },
    className: "jsx-1356802791" + " " + "form-check"
  }, __jsx("input", {
    type: "radio",
    name: "g",
    id: "creditCard",
    className: "jsx-1356802791" + " " + "form-check-input"
  }), __jsx("label", {
    htmlFor: "creditCard",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "form-check-label"
  }, "\u4FE1\u7528\u5361")), __jsx("div", {
    style: {
      margin: '0 10px 10px'
    },
    className: "jsx-1356802791" + " " + "form-check"
  }, __jsx("input", {
    type: "radio",
    name: "g",
    id: "bank",
    className: "jsx-1356802791" + " " + "form-check-input"
  }), __jsx("label", {
    htmlFor: "bank",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "form-check-label"
  }, "\u9280\u884C"))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u5F9E\u9019\u8F49\u5E33"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u8ACB\u9078\u64C7 \u2014")))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u6578\u984D"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "text",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u512A\u60E0"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u8ACB\u9078\u64C7 \u2014")))), __jsx("button", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn || "")
  }, "\u8F49\u5E33"), __jsx("p", {
    style: {
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
      fontSize: 12
    },
    className: "jsx-1356802791"
  }, "\u5982\u9700\u5354\u52A9\uFF0C\u8ACB\u6D3D\u5728\u7DDA\u5BA2\u670D\u8A62\u554F!")), __jsx("form", {
    style: formStyle[switchTab[1]],
    className: "jsx-1356802791"
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u9280\u884C\u6236\u53E3"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u8ACB\u9078\u64C7 \u2014")))), __jsx("div", {
    style: {
      marginBottom: 5
    },
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u6578\u984D"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "text",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }), __jsx("div", {
    style: {
      color: 'white',
      marginTop: 5,
      fontSize: 10,
      textAlign: 'right'
    },
    className: "jsx-1356802791"
  }, "\u6700\u4F4E100.00"))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u5099\u8A3B"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u8ACB\u9078\u64C7 \u2014")))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u5B58\u6B3E\u65E5\u671F"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "date",
    label: null,
    type: "date",
    defaultValue: "2017-05-24",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  })))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u512A\u60E0"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u8ACB\u9078\u64C7 \u2014")))), __jsx("button", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn || "")
  }, "\u63D0\u4EA4"), __jsx("p", {
    style: {
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
      fontSize: 12
    },
    className: "jsx-1356802791"
  }, "\u5982\u9700\u5354\u52A9\uFF0C\u8ACB\u6D3D\u5728\u7DDA\u5BA2\u670D\u8A62\u554F")))), __jsx("div", {
    style: style[tabsActiveDefault[2]],
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiContainer || "")
  }, __jsx("form", {
    className: "jsx-1356802791"
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u9280\u884C"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    className: "jsx-1356802791"
  }, "\u2014 \u9078\u64C7\u9280\u884C \u2014")))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u9280\u884C\u6236\u53E3\u540D\u5B57"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "text",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u9280\u884C\u6236\u53E3\u865F\u78BC"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "text",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }))), __jsx("button", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn || "")
  }, "\u8F49\u5E33")))), __jsx("div", {
    style: style[tabsActiveDefault[3]],
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiContainer || "")
  }, __jsx("form", {
    className: "jsx-1356802791"
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u9280\u884C"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("select", {
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }, __jsx("option", {
    value: "deposit",
    className: "jsx-1356802791"
  }, "\u5B58\u6B3E(VIP)"), __jsx("option", {
    value: "depositPG",
    className: "jsx-1356802791"
  }, "\u5B58\u6B3E (\u7DB2\u4E0A\u652F\u4ED8)"), __jsx("option", {
    value: "withdrawal",
    className: "jsx-1356802791"
  }, "\u63D0\u6B3E"), __jsx("option", {
    value: "transfer",
    className: "jsx-1356802791"
  }, "\u8F49\u5E33"), __jsx("option", {
    value: "wallet",
    className: "jsx-1356802791"
  }, "\u9322\u5305"), __jsx("option", {
    value: "promotion",
    className: "jsx-1356802791"
  }, "\u512A\u60E0"), __jsx("option", {
    value: "bet",
    className: "jsx-1356802791"
  }, "\u4E0B\u6CE8\u6B77\u53F2")))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u958B\u59CB\u65E5\u671F"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "date",
    label: null,
    type: "date",
    defaultValue: "2020-03-01",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  })))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u7D50\u675F\u65E5\u671F"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "date",
    label: null,
    type: "date",
    defaultValue: "2020-03-04",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  })))), __jsx("button", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn || "")
  }, "\u641C\u5C0B")))), __jsx("div", {
    style: style[tabsActiveDefault[4]],
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.uiContainer || "")
  }, __jsx("form", {
    className: "jsx-1356802791"
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u820A\u5BC6\u78BC"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "password",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u65B0\u5BC6\u78BC"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "password",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }))), __jsx("div", {
    className: "jsx-1356802791" + " " + "form-group row"
  }, __jsx("label", {
    htmlFor: "inputPassword",
    style: {
      color: 'white'
    },
    className: "jsx-1356802791" + " " + "col-sm-3 col-form-label"
  }, "\u78BA\u8A8D\u65B0\u5BC6\u78BC"), __jsx("div", {
    className: "jsx-1356802791" + " " + "col-sm-9"
  }, __jsx("input", {
    type: "password",
    className: "jsx-1356802791" + " " + "form-control form-control-sm"
  }))), __jsx("button", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn || "")
  }, "\u63D0\u4EA4"))))), __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.itemBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.headerBox || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name || "")
  }, "\u9322\u5305"), __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.surplus || "")
  }, "\u9918\u984D"), __jsx("span", {
    className: "jsx-1356802791" + " " + 'iconfont icon_Transfer'
  })), walletData.map((d, i) => __jsx("div", {
    key: i,
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContainer || "")
  }, __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name || "")
  }, d.name), __jsx("div", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.surplus || "")
  }, d.value), __jsx("span", {
    className: "jsx-1356802791" + " " + 'iconfont icon_Transfer'
  }))), __jsx("button", {
    className: "jsx-1356802791" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn || "")
  }, __jsx("span", {
    style: {
      marginRight: 10
    },
    className: "jsx-1356802791" + " " + 'iconfont icon_Transfer'
  }), "\u4E00\u9375\u5E36\u56DE")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Wallet);

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
/* harmony import */ var _UpMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UpMenu */ "./components/UpMenu.js");
/* harmony import */ var _UpSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UpSwitch */ "./components/UpSwitch.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const BottomNav = () => {
  return __jsx("nav", {
    className: `navbar fixed-bottom ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.BottomNav}`
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/platform_transfer"
  }, __jsx("a", null, __jsx("span", {
    className: `iconfont icon_Transfer`
  }), "\u5E73\u53F0\u8F49\u5E33")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/promotions"
  }, __jsx("a", null, __jsx("span", {
    className: `iconfont icon_gift-solid`
  }), "\u6700\u65B0\u512A\u60E0")), __jsx(_UpSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "\u5728\u7DDA\u63D0\u6B3E",
    className: "iconfont icon_sack-dollar-solid"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/customer_service"
  }, __jsx("a", null, __jsx("span", {
    className: `iconfont iconHR`
  }), "\u5728\u7DDA\u5BA2\u670D")), __jsx(_UpMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "\u6703\u54E1\u4E2D\u5FC3",
    className: "iconfont icon_user-solid"
  }));
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
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Register */ "./components/Register.js");

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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerBG || "")
    }, __jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flexContainer || "")
    }, __jsx(_Register__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.flex || "")
    }, __jsx("input", {
      style: {
        marginRight: '5px'
      },
      type: "text",
      placeholder: "\u6703\u54E1\u8CEC\u865F",
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input || "")
    }), __jsx("input", {
      style: {
        marginRight: '5px'
      },
      type: "text",
      placeholder: "\u767B\u5165\u5BC6\u78BC",
      className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input || "")
    })), __jsx("button", {
      onSubmit: this.handleSubmit,
      style: {
        marginRight: '5px'
      },
      type: "button",
      className: "jsx-2250508871" + " " + "btn btn-outline-dark btn-sm"
    }, "\u767B\u5165"), __jsx("button", {
      type: "button",
      className: "jsx-2250508871" + " " + "btn btn-outline-dark btn-sm"
    }, "\u5FD8\u8A18\u5BC6\u78BC"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2250508871"
    }, "@media (max-width:1024px){.flexContainer.jsx-2250508871{-webkit-box-pack:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;}}.headerBG.jsx-2250508871{background-image:linear-gradient( 180deg, #fdf8a2 3%, #f4d97a 47%, #eec462 100% );}.flexContainer.jsx-2250508871{height:45px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding:5px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;max-width:1100px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRFcsQUFJbUQsQUFTbkMsQUFHVyxZQUNDLHNFQUhmLElBSW9CLHlEQWJsQiw0Q0FjWSxZQUNhLGlHQUNSLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlc2tUb3BMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9kZXNrVG9wTGF5b3V0JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vUmVnaXN0ZXJcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJ1xuICB9O1xuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaGVhZGVyQkd9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtjc3MuZmxleENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8UmVnaXN0ZXIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5mbGV4fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5pyD5ZOh6LOs6JmfXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi55m75YWl5a+G56K8XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg55m75YWlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbVwiPlxuICAgICAgICAgICAgICDlv5joqJjlr4bnorxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgLmZsZXhDb250YWluZXIge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJCRyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgICAgICAgI2ZkZjhhMiAzJSxcbiAgICAgICAgICAgICAgICAjZjRkOTdhIDQ3JSxcbiAgICAgICAgICAgICAgICAjZWVjNDYyIDEwMCVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/includes/Header.js */"));
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
    onKeyDown: toggleDrawer(side, false)
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuBlock
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuMain
  }, __jsx("span", {
    className: "iconfont icon_user-circle-solid"
  }), __jsx("p", null, "\u767B\u5165")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuItems
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_home-solid"
  }), __jsx("p", null, "\u9996\u9801"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/online_baccarat"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_baccarat"
  }), __jsx("p", null, "\u771F\u4EBA\u5A1B\u6A02"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_futbol-solid"
  }), __jsx("p", null, "\u9AD4\u80B2\u535A\u5F69"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_ticket-alt-solid"
  }), __jsx("p", null, "\u8CD3\u679C\u5F69\u7968"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_alien-monster-solid"
  }), __jsx("p", null, "\u96FB\u5B50\u904A\u6232"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_fish"
  }), __jsx("p", null, "\u6355\u9B5A\u738B")))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuItems
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/promotions"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_gift-light"
  }), __jsx("p", null, "\u512A\u60E0\u6D3B\u52D5"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_star-solid"
  }), __jsx("p", null, "\u73A9\u5BB6\u8A55\u50F9"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_wallet-light"
  }), __jsx("p", null, "\u5B58\u53D6\u6D41\u7A0B"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_cloud-download-light"
  }), __jsx("p", null, "APP\u4E0B\u8F09"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_handshake-alt-light"
  }), __jsx("p", null, "\u4EE3\u7406\u52A0\u76DF"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_Cali_logo"
  }), __jsx("p", null, "\u95DC\u65BC\u5361\u5229"))))));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("header", {
    className: "jsx-82805793"
  }, __jsx("div", {
    className: "jsx-82805793" + " " + "container"
  }, __jsx("nav", {
    className: "jsx-82805793" + " " + "navbar navbar-expand-lg navbar-light"
  }, isTablet ? __jsx("span", {
    onClick: toggleDrawer('left', true),
    className: "jsx-82805793" + " " + "iconfont icon_bars-light"
  }) : '', __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default.a, {
    open: state.left,
    onClose: toggleDrawer('left', false)
  }, sideList('left')), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-82805793" + " " + `navbar-brand ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo}`
  }, __jsx("img", {
    src: "/images/Cali_logo_02.png",
    alt: "",
    className: "jsx-82805793" + " " + "img-responsive logo"
  }))), isTablet ? '' : __jsx("div", {
    className: "jsx-82805793" + " " + "collapse navbar-collapse"
  }, __jsx("div", {
    className: "jsx-82805793" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.flexContainer || "")
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/online_baccarat"
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link"
  }, "\u771F\u4EBA\u5A1B\u6A02")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sports"
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link"
  }, "\u9AD4\u80B2\u535A\u5F69")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lottery"
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link"
  }, "\u8CD3\u679C\u5F69\u7968")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/electronics"
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link"
  }, "\u96FB\u5B50\u904A\u6232")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/fish"
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link"
  }, "\u6355\u9B5A\u738B")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/promotions"
  }, __jsx("a", {
    style: {
      padding: '.5rem 0'
    },
    className: "jsx-82805793" + " " + "nav-item nav-link"
  }, "\u512A\u60E0\u6D3B\u52D5")), __jsx(_DDM__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "\u66F4\u591A"
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "82805793"
  }, "span.iconfont.jsx-82805793{margin-left:10px;font-size:1.875rem;background:linear-gradient( 180deg, #fdf8a2 3%, #f4d97a 47%, #eec462 100% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL01haW5OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd05XLEFBR2dDLGlCQUNFLG1CQU1sQiw0RUFDNEIsNkJBQ08sb0NBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL01haW5OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gJy4uL0RETSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHdpdGhTaXplcyBmcm9tICdyZWFjdC1zaXplcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGxpc3Q6IHtcbiAgICB3aWR0aDogMzUwXG4gIH0sXG4gIGZ1bGxMaXN0OiB7XG4gICAgd2lkdGg6ICdhdXRvJ1xuICB9XG59KTtcblxuY29uc3QgTWFpbk5hdiA9ICh7IGlzTW9iaWxlLCBpc1RhYmxldCB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdG9wOiBmYWxzZSxcbiAgICBsZWZ0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZVxuICB9KTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoc2lkZSwgb3BlbikgPT4gZXZlbnQgPT4ge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJlxuICAgICAgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtzaWRlXTogb3BlbiB9KTtcbiAgfTtcblxuICBjb25zdCBzaWRlTGlzdCA9IHNpZGUgPT4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saXN0fSAke2Nzcy5zbGlkZU1lbnV9YH1cbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKHNpZGUsIGZhbHNlKX1cbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKHNpZGUsIGZhbHNlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1lbnVCbG9ja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudU1haW59PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdXNlci1jaXJjbGUtc29saWRcIiAvPlxuICAgICAgICAgIDxwPueZu+WFpTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudUl0ZW1zfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2hvbWUtc29saWRcIiAvPlxuICAgICAgICAgICAgICA8cD7pppbpoIE8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb25saW5lX2JhY2NhcmF0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fYmFjY2FyYXRcIiAvPlxuICAgICAgICAgICAgICA8cD7nnJ/kurrlqJvmqII8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BvcnRzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fZnV0Ym9sLXNvbGlkXCIgLz5cbiAgICAgICAgICAgICAgPHA+6auU6IKy5Y2a5b2pPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvdHRlcnlcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl90aWNrZXQtYWx0LXNvbGlkXCIgLz5cbiAgICAgICAgICAgICAgPHA+6LOT5p6c5b2p56WoPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2VsZWN0cm9uaWNzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fYWxpZW4tbW9uc3Rlci1zb2xpZFwiIC8+XG4gICAgICAgICAgICAgIDxwPumbu+WtkOmBiuaIsjwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9maXNoXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fZmlzaFwiIC8+XG4gICAgICAgICAgICAgIDxwPuaNlemtmueOizwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudUl0ZW1zfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb21vdGlvbnNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9naWZ0LWxpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPHA+5YSq5oOg5rS75YuVPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb3J0c1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3N0YXItc29saWRcIiAvPlxuICAgICAgICAgICAgICA8cD7njqnlrrboqZXlg7k8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG90dGVyeVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3dhbGxldC1saWdodFwiIC8+XG4gICAgICAgICAgICAgIDxwPuWtmOWPlua1geeoizwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9lbGVjdHJvbmljc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2Nsb3VkLWRvd25sb2FkLWxpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPHA+QVBQ5LiL6LyJPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Zpc2hcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3NzLmxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9oYW5kc2hha2UtYWx0LWxpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPHA+5Luj55CG5Yqg55ufPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fQ2FsaV9sb2dvXCIgLz5cbiAgICAgICAgICAgICAgPHA+6Zec5pa85Y2h5YipPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICAgIHtpc1RhYmxldCA/IChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoJ2xlZnQnLCB0cnVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX2JhcnMtbGlnaHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8RHJhd2VyIG9wZW49e3N0YXRlLmxlZnR9IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcignbGVmdCcsIGZhbHNlKX0+XG4gICAgICAgICAgICAgIHtzaWRlTGlzdCgnbGVmdCcpfVxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXZiYXItYnJhbmQgJHtjc3MubG9nb31gfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZSBsb2dvXCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvQ2FsaV9sb2dvXzAyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtpc1RhYmxldCA/IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5mbGV4Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb25saW5lX2JhY2NhcmF0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcuNXJlbSAwJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg55yf5Lq65aib5qiCXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcG9ydHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJy41cmVtIDAnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDpq5TogrLljZrlvalcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb3R0ZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcuNXJlbSAwJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg6LOT5p6c5b2p56WoXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZWxlY3Ryb25pY3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJy41cmVtIDAnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDpm7vlrZDpgYrmiLJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9maXNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcuNXJlbSAwJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg5o2V6a2a546LXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvbW90aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnLjVyZW0gMCcgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIOWEquaDoOa0u+WLlVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8RHJvcERvd25NZW51IG5hbWU9XCLmm7TlpJpcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBzcGFuLmljb25mb250IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgICAgICAgI2ZkZjhhMiAzJSxcbiAgICAgICAgICAgICAgICAjZjRkOTdhIDQ3JSxcbiAgICAgICAgICAgICAgICAjZWVjNDYyIDEwMCVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFNpemVzVG9Qcm9wcyA9ICh7IHdpZHRoIH0pID0+ICh7XG4gIGlzTW9iaWxlOiB3aWR0aCA8IDQ4MCxcbiAgaXNUYWJsZXQ6IHdpZHRoID49IDQ4MCAmJiB3aWR0aCA8PSAxMDI0XG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTaXplcyhtYXBTaXplc1RvUHJvcHMpKE1haW5OYXYpO1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/includes/MainNav.js */")));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-measure */ "react-measure");
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_measure__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _includes_UserStateBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../includes/UserStateBar */ "./components/includes/UserStateBar.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const modalStyles = {
  content: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#d8d8d8',
    padding: '0',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement('#__next');
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  list: {
    width: 220
  },
  fullList: {
    width: 'auto'
  }
});

const MainNavMobile = ({
  getHeight
}) => {
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: dimensions,
    1: setDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: -1,
    height: -1
  });
  const {
    width,
    height
  } = dimensions;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle.style.color = '#fff';
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
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
    className: `${classes.list} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slideMenu}`,
    role: "presentation",
    onClick: toggleDrawer(side, false),
    onKeyDown: toggleDrawer(side, false)
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuBlock
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuMainMobile
  }, __jsx("span", {
    className: `iconfont icon_user-circle-solid ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user}`
  }), __jsx("span", {
    className: `iconfont icon_times-light ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon_times}`,
    style: {
      color: 'white'
    }
  }), __jsx("p", {
    onClick: openModal
  }, "\u767B\u5165")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuItemsMobile
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_home-solid"
  }), __jsx("p", null, "\u9996\u9801"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/online_baccarat"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_baccarat"
  }), __jsx("p", null, "\u771F\u4EBA\u5A1B\u6A02"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/sports"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_futbol-solid"
  }), __jsx("p", null, "\u9AD4\u80B2\u535A\u5F69"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/lottery"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_ticket-alt-solid"
  }), __jsx("p", null, "\u8CD3\u679C\u5F69\u7968"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/electronics"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_alien-monster-solid"
  }), __jsx("p", null, "\u96FB\u5B50\u904A\u6232"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/fish"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_fish"
  }), __jsx("p", null, "\u6355\u9B5A\u738B")))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuItemsMobile
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/promotions"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_gift-light"
  }), __jsx("p", null, "\u512A\u60E0\u6D3B\u52D5"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/sports"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_star-solid"
  }), __jsx("p", null, "\u73A9\u5BB6\u8A55\u50F9"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/lottery"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_wallet-light"
  }), __jsx("p", null, "\u5B58\u53D6\u6D41\u7A0B"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/electronics"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_cloud-download-light"
  }), __jsx("p", null, "APP\u4E0B\u8F09"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/fish"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_handshake-alt-light"
  }), __jsx("p", null, "\u4EE3\u7406\u52A0\u76DF"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, __jsx("a", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem
  }, __jsx("span", {
    className: "iconfont icon_Cali_logo"
  }), __jsx("p", null, "\u95DC\u65BC\u5361\u5229"))))));

  const hamburger = {
    marginLeft: '10px',
    fontSize: '1.625rem'
  };
  const {
    0: isUser,
    1: setIsUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_measure__WEBPACK_IMPORTED_MODULE_7___default.a, {
    bounds: true,
    onResize: contentRect => {
      setDimensions(contentRect.bounds);
    }
  }, ({
    measureRef
  }) => __jsx("div", {
    ref: measureRef,
    className: `fixed-top`,
    height: getHeight(height)
  }, __jsx("nav", {
    className: `navbar ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navBarFlex}`
  }, __jsx("span", {
    onClick: toggleDrawer('left', true),
    className: "iconfont icon_bars-light",
    style: hamburger
  }), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default.a, {
    open: state.left,
    onClose: toggleDrawer('left', false)
  }, sideList('left')), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    className: isUser ? _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logoisUser : _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logo
  }, __jsx("img", {
    className: "img-responsive logo_m",
    src: "/images/Cali_logo_mobile.png",
    alt: ""
  }))), isUser ? '' : __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnGroup
  }, __jsx("button", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/register'),
    type: "button",
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnOutLine
  }, "\u8A3B\u518A"), __jsx("button", {
    onClick: openModal,
    type: "button",
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnOutLine
  }, "\u767B\u5165"))), isUser ? __jsx(_includes_UserStateBar__WEBPACK_IMPORTED_MODULE_8__["default"], null) : '', __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "Example Modal"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle = subtitle
  }, "\u6703\u54E1\u767B\u5165"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody
  }, __jsx("form", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup
  }, __jsx("label", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userAccount}`
  }, __jsx("input", {
    type: "text",
    placeholder: "\u5E33\u865F/\u624B\u6A5F\u865F\u78BC"
  })), __jsx("label", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userPassword
  }, __jsx("input", {
    type: "text",
    placeholder: "\u5BC6\u78BC"
  })))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBtnGroup
  }, __jsx("button", {
    type: "button",
    className: "btn btn-warning btn-sm"
  }, "\u7ACB\u5373\u8A3B\u518A"), __jsx("button", {
    type: "button",
    className: "btn btn-primary btn-sm"
  }, "\u767B\u5165"))))));
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

/***/ "./components/includes/StatefulHeader.js":
/*!***********************************************!*\
  !*** ./components/includes/StatefulHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DDWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DDWallet */ "./components/DDWallet.js");
/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Wallet */ "./components/Wallet.js");
/* harmony import */ var _InfoModify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InfoModify */ "./components/InfoModify.js");
/* harmony import */ var _BetRecords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BetRecords */ "./components/BetRecords.js");
/* harmony import */ var _BonusRecords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BonusRecords */ "./components/BonusRecords.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _MemberNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MemberNotification */ "./components/MemberNotification.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const StatefulHeader = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.headerBG
  }, __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flexContainer} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flexContainer__status}`
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userLevel,
    style: {
      color: '#F70000'
    }
  }, __jsx("span", {
    className: "iconfont icon_star-solid",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-solid",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-solid",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-light",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-light",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-light",
    style: {
      fontSize: '1.2rem'
    }
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userInfo,
    style: {
      marginLeft: 20
    }
  }, "\u6B61\u8FCEtest123"), __jsx("span", {
    className: "iconfont icon_usd-circle-light",
    style: {
      marginLeft: 20
    }
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userInfo,
    style: {
      marginLeft: 20,
      marginRight: 20
    }
  }, "250.00"), __jsx(_DDWallet__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Wallet__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_InfoModify__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_BetRecords__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_BonusRecords__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_MemberNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    place: "bottom",
    effect: "solid"
  }), __jsx("span", {
    className: "iconfont icon_sign-out-light",
    style: {
      marginLeft: 20
    },
    "data-tip": "\u6703\u54E1\u767B\u51FA"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (StatefulHeader);

/***/ }),

/***/ "./components/includes/UserStateBar.js":
/*!*********************************************!*\
  !*** ./components/includes/UserStateBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DDWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DDWallet */ "./components/DDWallet.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const UserStateBar = props => {
  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userStateBar
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userStateColumn
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userInfo
  }, "test123"), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userLevel
  }, __jsx("span", {
    className: "iconfont icon_star-solid"
  }), __jsx("span", {
    className: "iconfont icon_star-solid"
  }), __jsx("span", {
    className: "iconfont icon_star-solid"
  }), __jsx("span", {
    className: "iconfont icon_star-light"
  }), __jsx("span", {
    className: "iconfont icon_star-light"
  }), __jsx("span", {
    className: "iconfont icon_star-light"
  })), __jsx("span", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/notice'),
    className: "iconfont icon_bell-light"
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userStateColumn
  }, __jsx("span", {
    className: "iconfont icon_usd-circle-light"
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userInfo
  }, "250.00"), __jsx(_DDWallet__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (UserStateBar);

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const MobileLayout = props => {
  const {
    0: navHeight,
    1: setNavHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const getHeight = height => {
    setNavHeight(height);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("meta", {
    charSet: "UTF-8",
    className: "jsx-1623311844"
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: "jsx-1623311844"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no",
    className: "jsx-1623311844"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional",
    rel: "stylesheet",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
    integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
    crossorigin: "anonymous",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charset: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/styles.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/iconfont.css",
    className: "jsx-1623311844"
  }), __jsx("title", {
    className: "jsx-1623311844"
  }, "\u5361\u5229\u5A1B\u6A02\u57CE")), __jsx(_includes_MainNavMobile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    getHeight: getHeight
  }), __jsx("div", {
    style: {
      marginTop: navHeight
    },
    className: "jsx-1623311844" + " " + "mainBG"
  }, props.children), __jsx(_includes_BottomNav__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1623311844"
  }, ".mainBG.jsx-1623311844::after{content:'';background:url(/images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-1623311844{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvTW9iaWxlTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFUyxBQUd3QixBQWFPLFdBWjJCLE9BYW5DLFVBTVQsNEJBbEJtQixvQkFDRSxvQ0FrQnhCLGdCQWpCZSxhQUNQLE1BQ0MsT0FDRSxTQUNELFFBQ1Usa0JBQ1AsV0FDYiIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9sYXlvdXRzL01vYmlsZUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWFzdXJlIGZyb20gJ3JlYWN0LW1lYXN1cmUnO1xuaW1wb3J0IE1hcnF1ZWUgZnJvbSAncmVhY3Qtc21vb3RoLW1hcnF1ZWUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9pbmNsdWRlcy9IZWFkZXInO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi4vaW5jbHVkZXMvTWFpbk5hdk1vYmlsZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBTY3JvbGxCdXR0b24gZnJvbSAnLi4vU2Nyb2xsQnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vRHJhd2VyJztcbmltcG9ydCBNYWluTmF2TW9iaWxlIGZyb20gJy4uL2luY2x1ZGVzL01haW5OYXZNb2JpbGUnO1xuaW1wb3J0IEJvdHRvbU5hdiBmcm9tICcuLi9pbmNsdWRlcy9Cb3R0b21OYXYnO1xuXG5jb25zdCBNb2JpbGVMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtuYXZIZWlnaHQsIHNldE5hdkhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZ2V0SGVpZ2h0ID0gaGVpZ2h0ID0+IHtcbiAgICBzZXROYXZIZWlnaHQoaGVpZ2h0KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ubywgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zK1RDOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXAmc3Vic2V0PWNoaW5lc2UtdHJhZGl0aW9uYWxcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90d2l0dGVyLWJvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMy4xL2Nzcy9hbGwuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtbXpybUU1cW9ubGpVcmVtRnNxYzAxU0I0Nkp2Uk9TN2JaczNJTzJFbWZGc2QxNXVIdkl0K1k4dkVmN043ZldBVVwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9zdHlsZXMuY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2ljb25mb250LmNzc1wiIC8+XG4gICAgICAgIDx0aXRsZT7ljaHliKnlqJvmqILln448L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1haW5OYXZNb2JpbGUgZ2V0SGVpZ2h0PXtnZXRIZWlnaHR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5CR1wiIHN0eWxlPXt7IG1hcmdpblRvcDogbmF2SGVpZ2h0IH19PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb3R0b21OYXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1haW5CRzo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9zdGFyeV9za3kucG5nKSByZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwJTtcbiAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMTAwJSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjMyO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluQkcge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICAgICAgICMwMDAwMDAgMCUsXG4gICAgICAgICAgICAgICM2ZTQxYzQgNTAlLFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDEpIDEwMCVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/MobileLayout.js */"));
};

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
/* harmony import */ var _includes_StatefulHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../includes/StatefulHeader */ "./components/includes/StatefulHeader.js");
/* harmony import */ var _includes_MainNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/MainNav */ "./components/includes/MainNav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ScrollButton */ "./components/ScrollButton.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Drawer */ "./components/Drawer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const DeskTopLayout = props => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.displayDesktop || "")
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/images/favicon-32x32.png",
    className: "jsx-1623311844"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional",
    rel: "stylesheet",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charset: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/styles.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/iconfont.css",
    className: "jsx-1623311844"
  }), __jsx("title", {
    className: "jsx-1623311844"
  }, "\u5361\u5229\u5A1B\u6A02\u57CE")), user ? __jsx(_includes_StatefulHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null) : __jsx(_includes_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_includes_MainNav__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee || "")
  }, __jsx("span", {
    className: "jsx-1623311844" + " " + "iconfont icon_volume-up-solid"
  }), __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee_flexContainer || "")
  }, __jsx(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default.a, {
    velocity: 0.05
  }, __jsx("p", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee_text || "")
  }, "\u6EAB\u99A8\u63D0\u793A\uFF1A\u5C0A\u656C\u7684\u3010\u5361\u5229\u5A1B\u6A02\u57CE\u3011\u6703\u54E1\u60A8\u597D\uFF01 2020-01-08\u865F\u5929\u5929\u8FD4\u6C34\u6700\u9AD81.8%\uFF0C\u5DF2\u7D93\u8FD4\u56DE\u5230\u60A8\u7684\u904A\u6232\u8CEC\u865F\u4E2D\uFF0C\u8ACB\u60A8\u767B\u5165\u67E5\u6536\uFF01\u8F49\u8CEC\u5230\u516C\u53F8\u6307\u5B9A\u9280\u884C\u5361\uFF0C\u63D0\u4EA4\u5165\u6B3E\u4FE1\u606F\u53EF\u5F97\u5230\u6B21\u6B21\u5B58\u6B21\u6B21\u90011.3%\u5165\u6B3E\u512A\u60E0\uFF0C\u8B1D\u8B1D\u3002")))), __jsx("div", {
    className: "jsx-1623311844" + " " + "mainBG"
  }, props.children, __jsx(_ScrollButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scrollStepInPx: "100",
    delayInMs: "16.66"
  }), __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1623311844"
  }, ".mainBG.jsx-1623311844::after{content:'';background:url(/images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-1623311844{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvZGVza1RvcExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RWEsQUFHd0IsQUFhTyxXQVoyQixPQWFuQyxVQU1ULDRCQWxCbUIsb0JBQ0Usb0NBa0J4QixnQkFqQmUsYUFDUCxNQUNDLE9BQ0UsU0FDRCxRQUNVLGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrVG9wTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFycXVlZSBmcm9tICdyZWFjdC1zbW9vdGgtbWFycXVlZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2luY2x1ZGVzL0hlYWRlcic7XG5pbXBvcnQgU3RhdGVmdWxIZWFkZXIgZnJvbSAnLi4vaW5jbHVkZXMvU3RhdGVmdWxIZWFkZXInO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi4vaW5jbHVkZXMvTWFpbk5hdic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBTY3JvbGxCdXR0b24gZnJvbSAnLi4vU2Nyb2xsQnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vRHJhd2VyJztcblxuY29uc3QgRGVza1RvcExheW91dCA9IHByb3BzID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kaXNwbGF5RGVza3RvcH0+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICB7LyogPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD0xMjgwLCBpbml0aWFsLXNjYWxlPTAuNSwgbWF4aW11bS1zY2FsZT0zLjAsIHVzZXItc2NhbGFibGU9MVwiXG4gICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9pbWFnZXMvZmF2aWNvbi0zMngzMi5wbmdcIi8+XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2FucytUQzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwJnN1YnNldD1jaGluZXNlLXRyYWRpdGlvbmFsXCJcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90d2l0dGVyLWJvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgICAgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlcy5jc3NcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvaWNvbmZvbnQuY3NzXCIvPlxuICAgICAgICAgICAgPHRpdGxlPuWNoeWIqeWom+aoguWfjjwvdGl0bGU+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIHt1c2VyPzxTdGF0ZWZ1bEhlYWRlci8+OjxIZWFkZXIvPn1cblxuXG4gICAgICAgICAgPE1haW5OYXYvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tYXJxdWVlfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdm9sdW1lLXVwLXNvbGlkXCIvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1hcnF1ZWVfZmxleENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxNYXJxdWVlIHZlbG9jaXR5PXswLjA1fT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Nzcy5tYXJxdWVlX3RleHR9PlxuICAgICAgICAgICAgICAgICAg5rqr6aao5o+Q56S677ya5bCK5pWs55qE44CQ5Y2h5Yip5aib5qiC5Z+O44CR5pyD5ZOh5oKo5aW977yBXG4gICAgICAgICAgICAgICAgICAyMDIwLTAxLTA46Jmf5aSp5aSp6L+U5rC05pyA6auYMS44Je+8jOW3sue2k+i/lOWbnuWIsOaCqOeahOmBiuaIsuizrOiZn+S4re+8jOiri+aCqOeZu+WFpeafpeaUtu+8gei9ieizrOWIsOWFrOWPuOaMh+WumumKgOihjOWNoe+8jOaPkOS6pOWFpeasvuS/oeaBr+WPr+W+l+WIsOasoeasoeWtmOasoeasoemAgTEuMyXlhaXmrL7lhKrmg6DvvIzorJ3orJ3jgIJcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvTWFycXVlZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkJHXCI+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8U2Nyb2xsQnV0dG9uIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTYuNjZcIi8+XG4gICAgICAgICAgICA8RHJhd2VyLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAubWFpbkJHOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL3N0YXJ5X3NreS5wbmcpIHJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAlO1xuICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxMDAlKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW5CRyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAgICAgIzAwMDAwMCAwJSxcbiAgICAgICAgICAgICAgIzZlNDFjNCA1MCUsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuO1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrVG9wTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/deskTopLayout.js */")));
};

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

/***/ "./components/noticeItem.js":
/*!**********************************!*\
  !*** ./components/noticeItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NoticeItem = ({
  selectable,
  from,
  time,
  content
}) => {
  const _class = {
    true: 'iconfont icon_chevron-up-light',
    false: 'iconfont icon_chevron-down-light'
  };
  const {
    0: accordian,
    1: setAccordian
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showAccordian = () => {
    setAccordian(!accordian);
  };

  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer
  }, __jsx("div", {
    onClick: showAccordian,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 50
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, selectable ? __jsx("input", {
    type: "checkbox",
    style: {
      marginRight: 10
    }
  }) : null, __jsx("div", {
    style: {
      fontSize: '1rem',
      color: '#231F20'
    }
  }, from)), __jsx("span", {
    className: _class[accordian],
    style: {
      fontSize: '1rem',
      color: '#9BA2AA'
    }
  })), accordian && __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContent,
    style: {
      fontSize: '.875rem',
      width: '100%',
      padding: '20px 0',
      borderTop: '1px solid #979797'
    }
  }, content), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemResult
  }, __jsx("div", {
    style: {
      fontSize: '1rem',
      color: '#6D7278',
      margin: 'auto'
    }
  }, time)));
};

/* harmony default export */ __webpack_exports__["default"] = (NoticeItem);

/***/ }),

/***/ "./data/bonus.js":
/*!***********************!*\
  !*** ./data/bonus.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const bonus = [{
  postid: 1,
  pic: '/images/bonus/img-promotion-1.png',
  mpic: '/images/banner/bonusFull01.jpg',
  title: '周末红利',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}, {
  postid: 2,
  pic: '/images/bonus/img-promotion-2.png',
  mpic: '/images/banner/bonusFull02.jpg',
  title: '賭神賽',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}, {
  postid: 3,
  pic: '/images/bonus/img-promotion-3.png',
  mpic: '/images/banner/bonusFull03.jpg',
  title: '賀聖誕派大獎 贏返水迎元旦',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}, {
  postid: 4,
  pic: '/images/bonus/img-promotion-4.png',
  mpic: '/images/banner/bonusFull04.jpg',
  title: '卡利系統一律返水1%',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}, {
  postid: 5,
  pic: '/images/bonus/img-promotion-5.png',
  mpic: '/images/banner/bonusFull05.jpg',
  title: '賀聖誕 派大獎',
  context: '感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!',
  time: '2020.2.10.Mon'
}];
/* harmony default export */ __webpack_exports__["default"] = (bonus);

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
/* harmony import */ var _data_bonus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/bonus */ "./data/bonus.js");
var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















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
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner01.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner02.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner03.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner04.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  })), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    subject: "\u958B\u59CB\u904A\u73A9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx(_components_StartPlayingDesktop__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    subject: "\u512A\u60E0\u6D3B\u52D5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, settings_bonus, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), _data_bonus__WEBPACK_IMPORTED_MODULE_14__["default"].map((b, i) => __jsx(_components_Bonus__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: i,
    pic: b.pic,
    title: b.title,
    time: b.time,
    context: b.context,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  })))), __jsx(_components_UserEvaluationSec__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx(_components_AboutSec__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  })), isMobile && __jsx(_components_layouts_MobileLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, settings_mobile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner01.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner02.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner03.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), __jsx("img", {
    src: "images/banner/banner04.jpg",
    alt: "",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default.a.marquee,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("span", {
    className: "iconfont icon_volume-up-solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default.a.marquee_flexContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_12___default.a, {
    velocity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("p", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_11___default.a.marquee_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "\u6EAB\u99A8\u63D0\u793A\uFF1A\u5C0A\u656C\u7684\u3010\u5361\u5229\u5A1B\u6A02\u57CE\u3011\u6703\u54E1\u60A8\u597D\uFF01 2020-01-08\u865F\u5929\u5929\u8FD4\u6C34\u6700\u9AD81.8%\uFF0C\u5DF2\u7D93\u8FD4\u56DE\u5230\u60A8\u7684\u904A\u6232\u8CEC\u865F\u4E2D\uFF0C\u8ACB\u60A8\u767B\u5165\u67E5\u6536\uFF01\u8F49\u8CEC\u5230\u516C\u53F8\u6307\u5B9A\u9280\u884C\u5361\uFF0C\u63D0\u4EA4\u5165\u6B3E\u4FE1\u606F\u53EF\u5F97\u5230\u6B21\u6B21\u5B58\u6B21\u6B21\u90011.3%\u5165\u6B3E\u512A\u60E0\uFF0C\u8B1D\u8B1D\u3002")))), __jsx(_components_mobileIndex__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
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
	"userStateBar": "_1UHCW8BBSzll9tTA3VkiiD",
	"userStateColumn": "_3a_3kg6IHEkFAVBYzEu138",
	"userLevel": "_28NZrK6vV5xIXS-FOtmQr9",
	"userInfo": "_11xRv2iuy6DCp8HiT2Q5zp",
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
	"banner": "_7B_vWLaJu1K6OTKaSKDvo",
	"title": "_274UVyVB3dC8LERHqmA5Nc",
	"desc": "_1_o4pe0HZ6awTxiWmssd8l",
	"banner02": "_3YGrc-fSuqhgUQ3GACnhF",
	"tabsBox": "_2X4HS9nUEfcZNViG6UdQwd",
	"tab": "_2tHkPQm7cJOujUIzBJhD92",
	"active": "BtS4lMqTymhFXMzvzKYLF",
	"modalHeader": "SGGi6fM2zTxAuslpjZstV",
	"modalBtnGroup": "_3B9L7l8sCZtp__x1n5U4MI",
	"modalBody": "_2LGCuhfNVpgOUE3ns9Jzv2",
	"line": "_1XIRZSlArPpX5Tr_6ZocYK",
	"modalBody__BetRecordsLayout": "_2boRbeFbG7jhfF64ntigMu",
	"modalBody__InfoLayout": "_3ZPGETtV_TP0jAbGg0xYZ7",
	"blue": "_1y_Hge0OzFUTRQ1sLA2cU8",
	"input_box": "_3PtqpQi5h1CBfIALXR3jk8",
	"btn_ver_code": "_1IgehTYrynCGkwN4BnQDPc",
	"btn_ver_code__message": "_3t1J9kvf9qt2t6tLqYhZnn",
	"formGroup": "_2Icns108kNIA8rYXj5ZUIx",
	"userAccount": "_14T1iesczOnXNDlZn6lYxf",
	"userPassword": "_1bgzpU_HLMsks0h8h4qu50",
	"outlineBtn": "_3VZGSfjg57YdaAX0au-Fml",
	"itemResult": "_1Dy2xXlQv7R8sEdVh5nIR4",
	"itemContent": "_16aKs_Quiz69fxAz419OIW",
	"item": "_1BlYqXx8BQapH_KWzyGRmL",
	"tabs": "_2dnDqpq5ewrAl27RYs8mID",
	"iconTab": "_32xbGpZFzDmv4aV4dk-7wX",
	"iconBtn": "_1HVCht2qgtUvl2cgJeXJEb",
	"contentBox": "_3GQ_syIiXlLQUkB6Ll8rWo",
	"contentIMG": "_2U7052OskOvUUaFma7eLqn",
	"iconBox": "_1D6ZRSn2t00nz6f5Bv0AaO",
	"itemBox": "_2h9y_sha4X5z1W4C_cb6GJ",
	"itemColumn": "_3vSfa0rUeNey95kNFvugva",
	"itemContainer": "_1ZW_Q8q1k_E6nyeyIXucfc",
	"itemContainer__norecords": "_2C-KK7nsipA4BeZWarEhkg",
	"itemContainer__records": "QUD-rN0RUISCzLisBIev0",
	"itemContainer__simple": "_1Gvc7WzlD_A-oXkhxq9HHe",
	"simpleBox": "_2zD7eN3L2Wj9DQ8K0sdrHC",
	"itemPlateTitle": "tpgjtilciX7syFa0OcYPX",
	"itemPlate": "KZ2CFnCprsMAaA04GXhMC",
	"bonus": "_3Ex2gTdtgApvYg9OphvSeC",
	"bottom": "_1cj5fxf6ggoGsXDW_6XJsz",
	"time": "_2SbVwko7eGQaoZuabJBJev",
	"bonusBox": "iUTnm0IDzRX1DJFuKhPb7",
	"bonusBox__innerpage": "_3kYL6iWiqTwNx45_t0XPyi",
	"bonusTitle": "_3EzNWIN13eT7BgxdmF9eC0",
	"bonusContext": "_2MiCZgt5z08i3c49ER7b3L",
	"logo": "_1o2ylA1N57yLHwTzg4Wrep",
	"headerFlex": "_27Ym0bwZnotBqCYJaTiunp",
	"navBarFlex": "_2-cSj3znbz4ZePxscGnrkG",
	"logoisUser": "_18Iq_mg-kh--9WubdVK8h4",
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
	"mobileBox": "nqGZ_uhJUUW5rkTjMW01d",
	"mobileBox_nobg": "_1idHSxhXAYD2-hdy-0ewte",
	"inputGroup": "nluq11Gjh0tJeLna5MaaX",
	"menu": "_3jAwHf9XLIQvSo5JXTbhwG",
	"UpMenu": "_23is1pqpLRAWrLnJHd8baL",
	"UpSwitch": "_3_H1AtPbOZt5QfnhHMzOd9",
	"overlay": "_2QXHzLluR38UV9cW53XI_C",
	"DDWallet": "_1MatM2y-RWvUgnVqfX5nT1",
	"itemsBox": "_3aI0um_e8pcxtMODzzMykS",
	"itemName": "heBQz9BHi_Y8tkz-xPnum",
	"itemValue": "_1qwpv2SGLh2ct15HJwxBXi",
	"bottomBox": "_1tqFJ0NEBiJ6eKpuPHevPI",
	"sumBox": "_2WL2avaGTKQGosSNrYI6Oq",
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
	"gameNavigation": "_1CK-tZ9GJZ_OnWTmlPfTqN",
	"gameBtn": "_2cKCQKVmN6NE1MXgt8JFZr",
	"dropDownBox": "_1wo0mIoE4Hv0eHT4pNaQsO",
	"transferWallet": "_2tsza3fpmi8cv_BQf_zJa",
	"transferItem": "_1e6dZjcVy5-YODgSuETJ8J",
	"transferItem_sum": "VJGPelW_EmZhCm5d7NAbf",
	"transferTitle": "_3g6_lZAjGJ8m7pbujkJOrO",
	"transferValue": "_1pEN7EGN_bd5zIbcB658G7",
	"accountSelector": "aPx1c1uVcZ5gLmgpD3ILm",
	"accountItem": "_2lGfE6FljVbXTxNIf2q2tA",
	"noticeBox": "_1QI0AiIn3WNQkTitIU0INA",
	"ps": "CUOCTTJO4JvCMw6coN6T",
	"noticeTitle": "_3i81ZzflsJQyWQ_8LdpYOt",
	"buttonGroup": "_1HtY1XRDC1unKPxo-tb8b",
	"walletBox": "NCpMvxb5nzPGh7CjPYkSW",
	"walletMain": "_2SzkfxzY3rwKmdTaqJ06Nu",
	"mainNav": "_3dGvUJSgclhF3GfxoUwiQO",
	"uiBox": "_3JcZC5oBAexCyVq_EK2AdZ",
	"uiContainer": "_3x5ks1oc-k4cNi6T13kRCp",
	"formGroupCenter": "JrCximZBw_Lio7aymgCtO",
	"switchBox": "_2HGFXXfFSGARhF0iMh_KH8",
	"submitBtn": "_3gA-PaQ7Z8g-vUwVwojCnY",
	"headerBox": "gozgxqgqnxz4AkzEIJqPV",
	"name": "_2FCv5PYOeNQX3NNTttoBNI",
	"surplus": "CxDDwIeSbNYMwgxX4SjKB",
	"listContainer": "_3fE4VkVnm464xKhiEetW8g",
	"superAwesome": "_22FSOBq6oUnetNYRsYBo43",
	"flexContainer__status": "_2O5Paoyp9uu3zXFcLS2Irp",
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

/***/ "@material-ui/core/ButtonGroup":
/*!************************************************!*\
  !*** external "@material-ui/core/ButtonGroup" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonGroup");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

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

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

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

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

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