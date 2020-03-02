webpackHotUpdate("static/development/pages/bet_records.js",{

/***/ "./pages/bet_records/index.js":
/*!************************************!*\
  !*** ./pages/bet_records/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_MobileLayoutLevel2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/MobileLayoutLevel2 */ "./components/layouts/MobileLayoutLevel2.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _components_OutlineBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/OutlineBtn */ "./components/OutlineBtn.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
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
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["createMuiTheme"])({
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
var modalStyles = {
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

var BetRecords = function BetRecords() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var openModal = function openModal() {
    setModalIsOpen(true);
  };

  var afterOpenModal = function afterOpenModal() {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle.style.color = '#fff';
    react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  var closeModal = function closeModal() {
    setModalIsOpen(false);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

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
    onSelect: function onSelect(index) {
      return console.log(index);
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabList"], null, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], null, "\u672A\u5B8C\u6210"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], null, "\u5DF2\u5B8C\u6210")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
    theme: theme
  }, __jsx("form", {
    style: {
      marginBottom: 30
    },
    className: classes.container,
    noValidate: true
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: style,
    id: "datetime-local",
    label: "\u958B\u59CB\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-01T00:00",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: style,
    id: "datetime-local",
    label: "\u7D50\u675F\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-29T10:30",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginBottom: 20
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u660E\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u4ECA\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u6628\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u672C\u9031")), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: '0 0 20px'
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u4E0A\u9031"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u672C\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u4E0A\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u8FD1\u4E00\u500B\u6708")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained"
  }, "\u6E05\u9664\u6642\u9593"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "primary"
  }, "\u641C\u5C0B")), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer__norecords),
    style: {
      height: 48
    }
  }, "\u5C1A\u7121\u4EFB\u4F55\u8A18\u9304"), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, __jsx("span", {
    className: "iconfont icon_ATM",
    style: {
      fontSize: '3.5rem',
      color: '#F56F6F',
      marginRight: 10
    }
  }), __jsx("div", {
    style: {
      fontSize: '1rem',
      color: 'black'
    }
  }, "\u9280\u884C\u8F49\u5E33")), __jsx("span", {
    onClick: showAccordian,
    className: _class[accordian],
    style: {
      fontSize: '1rem',
      color: '#9BA2AA'
    }
  })), accordian && __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropDownBox
  }, __jsx("div", null, "\u9280\u884C\u8F49\u5E33"), __jsx("div", null, "\u81E8\u6AC3\u532F\u6B3E"), __jsx("div", null, "\u8D85\u5546\u5132\u503C"))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
    theme: theme
  }, __jsx("form", {
    style: {
      marginBottom: 30
    },
    className: classes.container,
    noValidate: true
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: style,
    id: "datetime-local",
    label: "\u958B\u59CB\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-01T00:00",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: style,
    id: "datetime-local",
    label: "\u7D50\u675F\u6642\u9593",
    type: "datetime-local",
    defaultValue: "2020-02-29T10:30",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginBottom: 20
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u660E\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u4ECA\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u6628\u65E5"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u672C\u9031")), __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      margin: '0 0 20px'
    },
    color: "primary",
    "aria-label": "large outlined primary button group"
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u4E0A\u9031"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u672C\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u4E0A\u6708"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "\u8FD1\u4E00\u500B\u6708")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained"
  }, "\u6E05\u9664\u6642\u9593"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "primary"
  }, "\u641C\u5C0B")), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer__norecords),
    style: {
      height: 48
    }
  }, "\u5C1A\u7121\u4EFB\u4F55\u8A18\u9304"), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer__records),
    style: {
      height: 'auto'
    }
  }, __jsx("div", null, "\u55AE\u865F\uFF1Axxxxx"), __jsx("div", null, "2020/02/27/15:28"), __jsx("div", null, "\u91D1\u984D\uFF1A1000"), __jsx("div", null, "\u72C0\u614B\uFF1A", __jsx("span", {
    style: {
      color: '#0091FF'
    }
  }, "\u6210\u529F")))))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "Example Modal"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.modalHeader
  }, __jsx("div", {
    ref: function ref(subtitle) {
      return react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle = subtitle;
    }
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
  }, ".inputWithBtn.jsx-783784817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;margin-bottom:10px;}.inputWithBtn.jsx-783784817 .btn.jsx-783784817{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;margin-left:10px;}.btn-submit.jsx-783784817{background-color:#32c5ff;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9wYWdlcy9iZXRfcmVjb3Jkcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2U2UsQUFHZ0MsQUFLQSxBQUlZLHlCQUNiLFlBQ2QsY0FMbUIsaUJBQ25CLE1BTmtCLGdCQUNHLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvcGFnZXMvYmV0X3JlY29yZHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2JpbGVMYXlvdXRMZXZlbDIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL01vYmlsZUxheW91dExldmVsMic7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHtUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBPdXRsaW5lQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvT3V0bGluZUJ0bic7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlTXVpVGhlbWUsXG4gIFRoZW1lUHJvdmlkZXIsXG4gIG1ha2VTdHlsZXNcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgLy8gbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAvLyBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB3aWR0aDogMjAwXG4gIH1cbn0pKTtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIG92ZXJyaWRlczoge1xuICAgIC8vIFN0eWxlIHNoZWV0IG5hbWUg4pqb77iPXG4gICAgTXVpQnV0dG9uR3JvdXA6IHtcbiAgICAgIHJvb3Q6e1xuICAgICAgICB3aWR0aDonMTAwJScsXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICByb290OntcbiAgICAgICAgZmxleDonMSAxIDI1JScsXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIG91dGxpbmVkUHJpbWFyeToge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsIDAuNjgpJ1xuICAgICAgfVxuICAgIH0sXG4gICAgTXVpRm9ybUxhYmVsOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAnJiRmb2N1c2VkJzoge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgxNTcsIDEsIDI1NSwgMSknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUlucHV0QmFzZToge1xuICAgICAgLy8gTmFtZSBvZiB0aGUgcnVsZVxuICAgICAgcm9vdDoge1xuICAgICAgICAvLyBTb21lIENTU1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUlucHV0OiB7XG4gICAgICB1bmRlcmxpbmU6IHtcbiAgICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpYFxuICAgICAgICB9LFxuICAgICAgICAnJjpob3Zlcjpub3QoJGRpc2FibGVkKTpub3QoJGZvY3VzZWQpOm5vdCgkZXJyb3IpOmJlZm9yZSc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyKWBcbiAgICAgICAgfSxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkIHJnYmEoMTU3LCAxLCAyNTUsIDAuODUpYFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGJvcmRlclJhZGl1czogMyxcbiAgYm9yZGVyOiAwLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luQm90dG9tOiAzMFxufTtcblxuY29uc3QgbW9kYWxTdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzMyMHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Q4ZDhkOCcsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIHRvcDogJzM1JScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIGJvcmRlcjogJ25vbmUnXG4gIH1cbn07XG5cbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKTtcblxuY29uc3QgQmV0UmVjb3JkcyA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbElzT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBhZnRlck9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXG4gICAgTW9kYWwuc3VidGl0bGUuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgTW9kYWwuZGVmYXVsdFN0eWxlcy5vdmVybGF5LmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLC42NSknO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TW9iaWxlTGF5b3V0TGV2ZWwyIHRpdGxlPVwi5oqV5rOo6KiY6YyEXCIgcGF0aD17dHJ1ZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5tb2JpbGVCb3h9XG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICc3MDBweCcsIHBhZGRpbmdCb3R0b206IDgwLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUYWJzIGRlZmF1bHRJbmRleD17MH0gb25TZWxlY3Q9e2luZGV4ID0+IGNvbnNvbGUubG9nKGluZGV4KX0+XG4gICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgPFRhYj7mnKrlrozmiJA8L1RhYj5cbiAgICAgICAgICAgICAgPFRhYj7lt7LlrozmiJA8L1RhYj5cbiAgICAgICAgICAgIDwvVGFiTGlzdD5cbiAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBzdHlsZT17e21hcmdpbkJvdHRvbTozMH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6ZaL5aeL5pmC6ZaTXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMjAyMC0wMi0wMVQwMDowMFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLntZDmnZ/mmYLplpNcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIyMDIwLTAyLTI5VDEwOjMwXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhcmdlIG91dGxpbmVkIHByaW1hcnkgYnV0dG9uIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5piO5pelPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5LuK5pelPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5pio5pelPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5pys6YCxPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHN0eWxlPXt7bWFyZ2luOiAnMCAwIDIwcHgnfX0gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFyZ2Ugb3V0bGluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7kuIrpgLE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7mnKzmnIg8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7kuIrmnIg8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7ov5HkuIDlgIvmnIg8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj7muIXpmaTmmYLplpM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPuaQnOWwizwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y3NzLml0ZW1Db250YWluZXJ9ICR7Y3NzLml0ZW1Db250YWluZXJfX25vcmVjb3Jkc31gfSBzdHlsZT17e2hlaWdodDo0OH19PlxuICAgICAgICAgICAgICAgICAg5bCa54Sh5Lu75L2V6KiY6YyEXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pdGVtQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl9BVE1cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICczLjVyZW0nLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNGNTZGNkYnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScsIGNvbG9yOiAnYmxhY2snIH19PumKgOihjOi9ieW4szwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBY2NvcmRpYW59XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtfY2xhc3NbYWNjb3JkaWFuXX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nLCBjb2xvcjogJyM5QkEyQUEnIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHthY2NvcmRpYW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRyb3BEb3duQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PumKgOihjOi9ieW4szwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+6Ieo5quD5Yyv5qy+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj7otoXllYblhLLlgLw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gc3R5bGU9e3ttYXJnaW5Cb3R0b206MzB9fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIumWi+Wni+aZgumWk1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMjAtMDItMDFUMDA6MDBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi57WQ5p2f5pmC6ZaTXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMjAyMC0wMi0yOVQxMDozMFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXJnZSBvdXRsaW5lZCBwcmltYXJ5IGJ1dHRvbiBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuaYjuaXpTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuS7iuaXpTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuaYqOaXpTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuacrOmAsTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzdHlsZT17e21hcmdpbjogJzAgMCAyMHB4J319IGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhcmdlIG91dGxpbmVkIHByaW1hcnkgYnV0dG9uIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5LiK6YCxPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5pys5pyIPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+5LiK5pyIPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+6L+R5LiA5YCL5pyIPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+5riF6Zmk5pmC6ZaTPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj7mkJzlsIs8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Nzcy5pdGVtQ29udGFpbmVyfSAke2Nzcy5pdGVtQ29udGFpbmVyX19ub3JlY29yZHN9YH0gc3R5bGU9e3toZWlnaHQ6NDh9fT5cbiAgICAgICAgICAgICAgICAgIOWwmueEoeS7u+S9leiomOmMhFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MuaXRlbUNvbnRhaW5lcn0gJHtjc3MuaXRlbUNvbnRhaW5lcl9fcmVjb3Jkc31gfSBzdHlsZT17e2hlaWdodDonYXV0byd9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+5Zau6Jmf77yaeHh4eHg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+MjAyMC8wMi8yNy8xNToyODwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj7ph5HpoY3vvJoxMDAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PueLgOaFi++8mjxzcGFuIHN0eWxlPXt7Y29sb3I6JyMwMDkxRkYnfX0+5oiQ5YqfPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9iaWxlTGF5b3V0TGV2ZWwyPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgb25BZnRlck9wZW49e2FmdGVyT3Blbk1vZGFsfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgc3R5bGU9e21vZGFsU3R5bGVzfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGRpdiByZWY9e3N1YnRpdGxlID0+IChNb2RhbC5zdWJ0aXRsZSA9IHN1YnRpdGxlKX0+XG4gICAgICAgICAgICDoq4vovLjlhaXmj5DmrL7lr4bnorxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3RpbWVzLWxpZ2h0XCIgb25DbGljaz17Y2xvc2VNb2RhbH0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1vZGFsQm9keX0+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjc3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRXaXRoQnRuXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiNi0xMOS9jeiLseOAgeaVuOWtl+esplwiLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIOW/mOiomOWvhueivFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuaW5wdXRXaXRoQnRuIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmlucHV0V2l0aEJ0biAuYnRuIHtcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSA0MCU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyYzVmZjtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWJtaXQgYnRuLXNtXCI+XG4gICAgICAgICAgICAgIOeiuuiqjemAgeWHulxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJldFJlY29yZHM7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/pages/bet_records/index.js */"), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-submit btn-sm"
  }, "\u78BA\u8A8D\u9001\u51FA")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BetRecords);

/***/ })

})
//# sourceMappingURL=bet_records.js.e1df7c6b5bff25ee4c60.hot-update.js.map