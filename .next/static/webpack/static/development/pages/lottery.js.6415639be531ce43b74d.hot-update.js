webpackHotUpdate("static/development/pages/lottery.js",{

/***/ "./components/BetRecords.js":
/*!**********************************!*\
  !*** ./components/BetRecords.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _BetItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BetItem */ "./components/BetItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var modalStyles = {
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
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
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
          borderBottom: "1px solid rgba(255, 255, 255, 0.42)"
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: "1px solid rgba(255, 255, 255, 0.42)"
        },
        '&:after': {
          borderBottom: "1px solid rgba(157, 1, 255, 0.85)"
        }
      }
    }
  }
});
var style = {
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  marginBottom: 30
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
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
  };
});
react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement('#__next');

function BetRecords(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var openModal = function openModal() {
    setModalIsOpen(true);
  };

  var afterOpenModal = function afterOpenModal() {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  var closeModal = function closeModal() {
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
    ref: function ref(subtitle) {
      return react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle = subtitle;
    }
  }, "\u6295\u6CE8\u8A18\u9304"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody__BetRecordsLayout)
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme
  }, __jsx("form", {
    style: {
      marginBottom: 30
    },
    className: classes.container,
    noValidate: true
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: style,
    id: "datetime-local",
    label: "\u958B\u59CB\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-01T00:00",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: style,
    id: "datetime-local",
    label: "\u7D50\u675F\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-29T10:30",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginBottom: 20
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u660E\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u4ECA\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u6628\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u672C\u9031")), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      margin: '0 0 20px'
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u4E0A\u9031"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u672C\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u4E0A\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u8FD1\u4E00\u500B\u6708")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained"
  }, "\u6E05\u9664\u6642\u9593"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary"
  }, "\u641C\u5C0B")), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer__norecords),
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

/***/ })

})
//# sourceMappingURL=lottery.js.6415639be531ce43b74d.hot-update.js.map