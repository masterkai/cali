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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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
      href: "/app_download"
    }, __jsx("a", null, __jsx("p", null, __jsx("span", {
      className: "iconfont icon_gift-light"
    }), "\u6D3B\u52D5\u9EDE\u6578")))) : null));
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

/***/ "./components/includes/MainNavMobileLevel2.js":
/*!****************************************************!*\
  !*** ./components/includes/MainNavMobileLevel2.js ***!
  \****************************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-measure */ "react-measure");
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_measure__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _includes_UserStateBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/UserStateBar */ "./components/includes/UserStateBar.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const MainNavMobileLevel2 = ({
  getHeight,
  title,
  path,
  back
}) => {
  const hamburger = {
    marginLeft: '10px',
    fontSize: '1.625rem'
  };
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
  const {
    0: isUser,
    1: setIsUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleClick = () => {
    if (path) {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    } else if (back) {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_measure__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
    onClick: handleClick,
    className: "iconfont icon_chevron-left-light",
    style: hamburger
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, title)), isUser ? __jsx(_includes_UserStateBar__WEBPACK_IMPORTED_MODULE_5__["default"], null) : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (MainNavMobileLevel2);

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

/***/ "./components/layouts/MobileLayoutLevel2.js":
/*!**************************************************!*\
  !*** ./components/layouts/MobileLayoutLevel2.js ***!
  \**************************************************/
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
/* harmony import */ var _includes_MainNavMobileLevel2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../includes/MainNavMobileLevel2 */ "./components/includes/MainNavMobileLevel2.js");
/* harmony import */ var _includes_BottomNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../includes/BottomNav */ "./components/includes/BottomNav.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const MobileLayoutLevel2 = props => {
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
    content: "width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0",
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
  }, "\u5361\u5229\u5A1B\u6A02\u57CE")), __jsx(_includes_MainNavMobileLevel2__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: props.title,
    getHeight: getHeight,
    path: props.path,
    back: props.back
  }), __jsx("div", {
    style: {
      marginTop: navHeight
    },
    className: "jsx-1623311844" + " " + "mainBG"
  }, props.children), __jsx(_includes_BottomNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1623311844"
  }, ".mainBG.jsx-1623311844::after{content:'';background:url(/images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-1623311844{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvTW9iaWxlTGF5b3V0TGV2ZWwyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFUyxBQUd3QixBQWFPLFdBWjJCLE9BYW5DLFVBTVQsNEJBbEJtQixvQkFDRSxvQ0FrQnhCLGdCQWpCZSxhQUNQLE1BQ0MsT0FDRSxTQUNELFFBQ1Usa0JBQ1AsV0FDYiIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvY29tcG9uZW50cy9sYXlvdXRzL01vYmlsZUxheW91dExldmVsMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWFzdXJlIGZyb20gJ3JlYWN0LW1lYXN1cmUnO1xuaW1wb3J0IE1hcnF1ZWUgZnJvbSAncmVhY3Qtc21vb3RoLW1hcnF1ZWUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9pbmNsdWRlcy9IZWFkZXInO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi4vaW5jbHVkZXMvTWFpbk5hdk1vYmlsZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBTY3JvbGxCdXR0b24gZnJvbSAnLi4vU2Nyb2xsQnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vRHJhd2VyJztcbmltcG9ydCBNYWluTmF2TW9iaWxlTGV2ZWwyIGZyb20gJy4uL2luY2x1ZGVzL01haW5OYXZNb2JpbGVMZXZlbDInO1xuaW1wb3J0IEJvdHRvbU5hdiBmcm9tICcuLi9pbmNsdWRlcy9Cb3R0b21OYXYnO1xuXG5jb25zdCBNb2JpbGVMYXlvdXRMZXZlbDIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtuYXZIZWlnaHQsIHNldE5hdkhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZ2V0SGVpZ2h0ID0gaGVpZ2h0ID0+IHtcbiAgICBzZXROYXZIZWlnaHQoaGVpZ2h0KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ubywgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnMrVEM6MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcCZzdWJzZXQ9Y2hpbmVzZS10cmFkaXRpb25hbFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R3aXR0ZXItYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4zLjEvY3NzL2FsbC5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1tenJtRTVxb25salVyZW1Gc3FjMDFTQjQ2SnZST1M3YlpzM0lPMkVtZkZzZDE1dUh2SXQrWTh2RWY3TjdmV0FVXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBjaGFyc2V0PVwiVVRGLThcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlcy5jc3NcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvaWNvbmZvbnQuY3NzXCIgLz5cbiAgICAgICAgPHRpdGxlPuWNoeWIqeWom+aoguWfjjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFpbk5hdk1vYmlsZUxldmVsMlxuICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgIGdldEhlaWdodD17Z2V0SGVpZ2h0fVxuICAgICAgICBwYXRoPXtwcm9wcy5wYXRofVxuICAgICAgICBiYWNrPXtwcm9wcy5iYWNrfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkJHXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBuYXZIZWlnaHQgfX0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPEJvdHRvbU5hdiAvPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWFpbkJHOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL3N0YXJ5X3NreS5wbmcpIHJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAlO1xuICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxMDAlKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW5CRyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAgICAgIzAwMDAwMCAwJSxcbiAgICAgICAgICAgICAgIzZlNDFjNCA1MCUsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVMYXlvdXRMZXZlbDI7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/MobileLayoutLevel2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileLayoutLevel2);

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const DeskTopLayout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
  className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.displayDesktop || "")
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("meta", {
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
}, "\u5361\u5229\u5A1B\u6A02\u57CE")), __jsx(_includes_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_includes_MainNav__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
  className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.marquee || "")
}, __jsx("span", {
  className: "jsx-1623311844" + " " + "iconfont icon_volume-up-solid"
}), __jsx("div", {
  className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.marquee_flexContainer || "")
}, __jsx(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default.a, {
  velocity: 0.05
}, __jsx("p", {
  className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default.a.marquee_text || "")
}, "\u6EAB\u99A8\u63D0\u793A\uFF1A\u5C0A\u656C\u7684\u3010\u5361\u5229\u5A1B\u6A02\u57CE\u3011\u6703\u54E1\u60A8\u597D\uFF01 2020-01-08\u865F\u5929\u5929\u8FD4\u6C34\u6700\u9AD81.8%\uFF0C\u5DF2\u7D93\u8FD4\u56DE\u5230\u60A8\u7684\u904A\u6232\u8CEC\u865F\u4E2D\uFF0C\u8ACB\u60A8\u767B\u5165\u67E5\u6536\uFF01\u8F49\u8CEC\u5230\u516C\u53F8\u6307\u5B9A\u9280\u884C\u5361\uFF0C\u63D0\u4EA4\u5165\u6B3E\u4FE1\u606F\u53EF\u5F97\u5230\u6B21\u6B21\u5B58\u6B21\u6B21\u90011.3%\u5165\u6B3E\u512A\u60E0\uFF0C\u8B1D\u8B1D\u3002")))), __jsx("div", {
  className: "jsx-1623311844" + " " + "mainBG"
}, props.children, __jsx(_ScrollButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
  scrollStepInPx: "100",
  delayInMs: "16.66"
}), __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1623311844"
}, ".mainBG.jsx-1623311844::after{content:'';background:url(/images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-1623311844{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvZGVza1RvcExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRVMsQUFHd0IsQUFhTyxXQVoyQixPQWFuQyxVQU1ULDRCQWxCbUIsb0JBQ0Usb0NBa0J4QixnQkFqQmUsYUFDUCxNQUNDLE9BQ0UsU0FDRCxRQUNVLGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrVG9wTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hcnF1ZWUgZnJvbSAncmVhY3Qtc21vb3RoLW1hcnF1ZWUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9pbmNsdWRlcy9IZWFkZXInO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi4vaW5jbHVkZXMvTWFpbk5hdic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBTY3JvbGxCdXR0b24gZnJvbSAnLi4vU2Nyb2xsQnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vRHJhd2VyJztcblxuY29uc3QgRGVza1RvcExheW91dCA9IHByb3BzID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZGlzcGxheURlc2t0b3B9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPTEyODAsIGluaXRpYWwtc2NhbGU9MC41LCBtYXhpbXVtLXNjYWxlPTMuMCwgdXNlci1zY2FsYWJsZT0xXCJcbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2FucytUQzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwJnN1YnNldD1jaGluZXNlLXRyYWRpdGlvbmFsXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdHdpdHRlci1ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIGNoYXJzZXQ9XCJVVEYtOFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvc3R5bGVzLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9pY29uZm9udC5jc3NcIiAvPlxuICAgICAgICA8dGl0bGU+5Y2h5Yip5aib5qiC5Z+OPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNYWluTmF2IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWFycXVlZX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdm9sdW1lLXVwLXNvbGlkXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1hcnF1ZWVfZmxleENvbnRhaW5lcn0+XG4gICAgICAgICAgPE1hcnF1ZWUgdmVsb2NpdHk9ezAuMDV9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjc3MubWFycXVlZV90ZXh0fT5cbiAgICAgICAgICAgICAg5rqr6aao5o+Q56S677ya5bCK5pWs55qE44CQ5Y2h5Yip5aib5qiC5Z+O44CR5pyD5ZOh5oKo5aW977yBXG4gICAgICAgICAgICAgIDIwMjAtMDEtMDjomZ/lpKnlpKnov5TmsLTmnIDpq5gxLjgl77yM5bey57aT6L+U5Zue5Yiw5oKo55qE6YGK5oiy6LOs6Jmf5Lit77yM6KuL5oKo55m75YWl5p+l5pS277yB6L2J6LOs5Yiw5YWs5Y+45oyH5a6a6YqA6KGM5Y2h77yM5o+Q5Lqk5YWl5qy+5L+h5oGv5Y+v5b6X5Yiw5qyh5qyh5a2Y5qyh5qyh6YCBMS4zJeWFpeasvuWEquaDoO+8jOisneisneOAglxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvTWFycXVlZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkJHXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPFNjcm9sbEJ1dHRvbiBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjE2LjY2XCIgLz5cbiAgICAgICAgPERyYXdlciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tYWluQkc6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvc3Rhcnlfc2t5LnBuZykgcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMCU7XG4gICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEwMCUpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zMjtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbkJHIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICAjMDAwMDAwIDAlLFxuICAgICAgICAgICAgICAjNmU0MWM0IDUwJSxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrVG9wTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/deskTopLayout.js */")));

/* harmony default export */ __webpack_exports__["default"] = (DeskTopLayout);

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

/***/ "./pages/bet_records/index.js":
/*!************************************!*\
  !*** ./pages/bet_records/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_MobileLayoutLevel2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/MobileLayoutLevel2 */ "./components/layouts/MobileLayoutLevel2.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_OutlineBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/OutlineBtn */ "./components/OutlineBtn.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "@material-ui/core/ButtonGroup");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_BetItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/BetItem */ "./components/BetItem.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
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
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])({
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
react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.setAppElement('#__next');

const BetRecords = () => {
  const classes = useStyles();
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle.style.color = '#fff';
    react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_layouts_MobileLayoutLevel2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u6295\u6CE8\u8A18\u9304",
    path: true
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileBox,
    style: {
      height: '700px',
      paddingBottom: 80,
      overflowY: 'scroll'
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
    defaultIndex: 0,
    onSelect: index => console.log(index)
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabList"], null, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], null, "\u672C\u9031"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], null, "\u4E0A\u9031")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
    theme: theme
  }, __jsx("form", {
    style: {
      marginBottom: 30
    },
    className: classes.container,
    noValidate: true
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: style,
    id: "datetime-local",
    label: "\u958B\u59CB\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-01T00:00",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: style,
    id: "datetime-local",
    label: "\u7D50\u675F\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-29T10:30",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      marginBottom: 20
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u660E\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u4ECA\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u6628\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u672C\u9031")), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      margin: '0 0 20px'
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u4E0A\u9031"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u672C\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u4E0A\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u8FD1\u4E00\u500B\u6708")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained"
  }, "\u6E05\u9664\u6642\u9593"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary"
  }, "\u641C\u5C0B")), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer__norecords}`,
    style: {
      height: 48
    }
  }, "\u5C1A\u7121\u4EFB\u4F55\u8A18\u9304"), __jsx(_components_BetItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    status: 1000
  }), __jsx(_components_BetItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    status: -1000
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
    theme: theme
  }, __jsx("form", {
    style: {
      marginBottom: 30
    },
    className: classes.container,
    noValidate: true
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: style,
    id: "datetime-local",
    label: "\u958B\u59CB\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-01T00:00",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: style,
    id: "datetime-local",
    label: "\u7D50\u675F\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-29T10:30",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      marginBottom: 20
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u660E\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u4ECA\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u6628\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u672C\u9031")), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      margin: '0 0 20px'
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u4E0A\u9031"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u672C\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u4E0A\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "\u8FD1\u4E00\u500B\u6708")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained"
  }, "\u6E05\u9664\u6642\u9593"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary"
  }, "\u641C\u5C0B")), __jsx("div", {
    className: `${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer} ${_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer__norecords}`,
    style: {
      height: 48
    }
  }, "\u5C1A\u7121\u4EFB\u4F55\u8A18\u9304"), __jsx(_components_BetItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    status: 1000
  }), __jsx(_components_BetItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    status: -1000
  })))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "Example Modal"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.modalHeader
  }, __jsx("div", {
    ref: subtitle => react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle = subtitle
  }, "\u8ACB\u8F38\u5165\u63D0\u6B3E\u5BC6\u78BC"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.modalBody
  }, __jsx("form", {
    className: "jsx-783784817" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup || "")
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
  }, ".inputWithBtn.jsx-783784817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;margin-bottom:10px;}.inputWithBtn.jsx-783784817 .btn.jsx-783784817{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;margin-left:10px;}.btn-submit.jsx-783784817{background-color:#32c5ff;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9wYWdlcy9iZXRfcmVjb3Jkcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5UWUsQUFHZ0MsQUFLQSxBQUlZLHlCQUNiLFlBQ2QsY0FMbUIsaUJBQ25CLE1BTmtCLGdCQUNHLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvcGFnZXMvYmV0X3JlY29yZHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2JpbGVMYXlvdXRMZXZlbDIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL01vYmlsZUxheW91dExldmVsMic7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHtUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBPdXRsaW5lQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvT3V0bGluZUJ0bic7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlTXVpVGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIsXG4gIG1ha2VTdHlsZXNcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCZXRJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JldEl0ZW1cIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgLy8gbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAvLyBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB3aWR0aDogMjAwXG4gIH1cbn0pKTtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIG92ZXJyaWRlczoge1xuICAgIC8vIFN0eWxlIHNoZWV0IG5hbWUg4pqb77iPXG4gICAgTXVpQnV0dG9uR3JvdXA6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleDogJzEgMSAyNSUnLFxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBvdXRsaW5lZFByaW1hcnk6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LCAwLjY4KSdcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUZvcm1MYWJlbDoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMTU3LCAxLCAyNTUsIDEpJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlJbnB1dEJhc2U6IHtcbiAgICAgIC8vIE5hbWUgb2YgdGhlIHJ1bGVcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgLy8gU29tZSBDU1NcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlJbnB1dDoge1xuICAgICAgdW5kZXJsaW5lOiB7XG4gICAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKWBcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCk6bm90KCRmb2N1c2VkKTpub3QoJGVycm9yKTpiZWZvcmUnOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MilgXG4gICAgICAgIH0sXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCByZ2JhKDE1NywgMSwgMjU1LCAwLjg1KWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBib3JkZXJSYWRpdXM6IDMsXG4gIGJvcmRlcjogMCxcbiAgY29sb3I6ICd3aGl0ZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbkJvdHRvbTogMzBcbn07XG5cbmNvbnN0IG1vZGFsU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgd2lkdGg6ICczMjBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNkOGQ4ZDgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB0b3A6ICczNSUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICBib3JkZXI6ICdub25lJ1xuICB9XG59O1xuXG5Nb2RhbC5zZXRBcHBFbGVtZW50KCcjX19uZXh0Jyk7XG5cbmNvbnN0IEJldFJlY29yZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgYWZ0ZXJPcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgLy8gcmVmZXJlbmNlcyBhcmUgbm93IHN5bmMnZCBhbmQgY2FuIGJlIGFjY2Vzc2VkLlxuICAgIE1vZGFsLnN1YnRpdGxlLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgIE1vZGFsLmRlZmF1bHRTdHlsZXMub3ZlcmxheS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwuNjUpJztcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TW9iaWxlTGF5b3V0TGV2ZWwyIHRpdGxlPVwi5oqV5rOo6KiY6YyEXCIgcGF0aD17dHJ1ZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5tb2JpbGVCb3h9XG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICc3MDBweCcsIHBhZGRpbmdCb3R0b206IDgwLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUYWJzIGRlZmF1bHRJbmRleD17MH0gb25TZWxlY3Q9e2luZGV4ID0+IGNvbnNvbGUubG9nKGluZGV4KX0+XG4gICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgPFRhYj7mnKzpgLE8L1RhYj5cbiAgICAgICAgICAgICAgPFRhYj7kuIrpgLE8L1RhYj5cbiAgICAgICAgICAgIDwvVGFiTGlzdD5cbiAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIumWi+Wni+aZgumWk1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMjAtMDItMDFUMDA6MDBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi57WQ5p2f5pmC6ZaTXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMjAyMC0wMi0yOVQxMDozMFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXJnZSBvdXRsaW5lZCBwcmltYXJ5IGJ1dHRvbiBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuaYjuaXpTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuS7iuaXpTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuaYqOaXpTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuacrOmAsTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzdHlsZT17e21hcmdpbjogJzAgMCAyMHB4J319IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhcmdlIG91dGxpbmVkIHByaW1hcnkgYnV0dG9uIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5LiK6YCxPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5pys5pyIPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5LiK5pyIPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+6L+R5LiA5YCL5pyIPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+5riF6Zmk5pmC6ZaTPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj7mkJzlsIs8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Nzcy5pdGVtQ29udGFpbmVyfSAke2Nzcy5pdGVtQ29udGFpbmVyX19ub3JlY29yZHN9YH0gc3R5bGU9e3toZWlnaHQ6IDQ4fX0+XG4gICAgICAgICAgICAgICAgICDlsJrnhKHku7vkvZXoqJjpjIRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QmV0SXRlbSBzdGF0dXM9ezEwMDB9Lz5cbiAgICAgICAgICAgICAgICA8QmV0SXRlbSBzdGF0dXM9ey0xMDAwfS8+XG4gICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLplovlp4vmmYLplpNcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIyMDIwLTAyLTAxVDAwOjAwXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIue1kOadn+aZgumWk1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMjAtMDItMjlUMTA6MzBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFyZ2Ugb3V0bGluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7mmI7ml6U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7ku4rml6U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7mmKjml6U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7mnKzpgLE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc3R5bGU9e3ttYXJnaW46ICcwIDAgMjBweCd9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXJnZSBvdXRsaW5lZCBwcmltYXJ5IGJ1dHRvbiBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuS4iumAsTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuacrOaciDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuS4iuaciDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPui/keS4gOWAi+aciDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPua4hemZpOaZgumWkzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+5pCc5bCLPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MuaXRlbUNvbnRhaW5lcn0gJHtjc3MuaXRlbUNvbnRhaW5lcl9fbm9yZWNvcmRzfWB9IHN0eWxlPXt7aGVpZ2h0OiA0OH19PlxuICAgICAgICAgICAgICAgICAg5bCa54Sh5Lu75L2V6KiY6YyEXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJldEl0ZW0gc3RhdHVzPXsxMDAwfS8+XG4gICAgICAgICAgICAgICAgPEJldEl0ZW0gc3RhdHVzPXstMTAwMH0vPlxuXG4gICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9iaWxlTGF5b3V0TGV2ZWwyPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgb25BZnRlck9wZW49e2FmdGVyT3Blbk1vZGFsfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgc3R5bGU9e21vZGFsU3R5bGVzfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGRpdiByZWY9e3N1YnRpdGxlID0+IChNb2RhbC5zdWJ0aXRsZSA9IHN1YnRpdGxlKX0+XG4gICAgICAgICAgICDoq4vovLjlhaXmj5DmrL7lr4bnorxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3RpbWVzLWxpZ2h0XCIgb25DbGljaz17Y2xvc2VNb2RhbH0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1vZGFsQm9keX0+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjc3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRXaXRoQnRuXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiNi0xMOS9jeiLseOAgeaVuOWtl+esplwiLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIOW/mOiomOWvhueivFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuaW5wdXRXaXRoQnRuIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmlucHV0V2l0aEJ0biAuYnRuIHtcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSA0MCU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyYzVmZjtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWJtaXQgYnRuLXNtXCI+XG4gICAgICAgICAgICAgIOeiuuiqjemAgeWHulxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJldFJlY29yZHM7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/pages/bet_records/index.js */"), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-submit btn-sm"
  }, "\u78BA\u8A8D\u9001\u51FA")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BetRecords);

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
	"superAwesome": "_22FSOBq6oUnetNYRsYBo43",
	"marquee": "_2gDmNhYlFiGBcvjgVAGyM_",
	"marquee_flexContainer": "xSxsrduvyvyxsod2tLKhn",
	"marquee_text": "DeuhvKXh7QWgmTnvcLb9l"
};

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./pages/bet_records/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liukaiming/WebstormProjects/cali/pages/bet_records/index.js */"./pages/bet_records/index.js");


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
//# sourceMappingURL=bet_records.js.map