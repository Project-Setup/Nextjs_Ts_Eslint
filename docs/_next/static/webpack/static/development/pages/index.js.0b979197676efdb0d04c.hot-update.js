webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/redux/dynamicReducerWrap.tsx":
/*!************************************************!*\
  !*** ./src/utils/redux/dynamicReducerWrap.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "/Users/david.chen/Documents/projects/next9/src/utils/redux/dynamicReducerWrap.tsx";




var SubstitueReducers =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubstitueReducers, _Component);

  function SubstitueReducers(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubstitueReducers);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubstitueReducers).call(this, props));
    var store = props.store,
        reducers = props.reducers;
    store.substitueReducers(reducers);
    console.log('injecting reducer: ', reducers);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubstitueReducers, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props = this.props,
          store = _this$props.store,
          reducers = _this$props.reducers;
      console.log('remove reducers: ', reducers);
      store.removeUnusedReducers();
    }
  }, {
    key: "render",
    value: function render() {
      var Child = this.props.Child; // const { showChild } = this.state;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Child, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      });
    }
  }]);

  return SubstitueReducers;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function dynamicReducerWrap(_ref) {
  var reducers = _ref.reducers,
      Child = _ref.Child;
  return function () {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, function (_ref2) {
      var store = _ref2.store;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SubstitueReducers, {
        store: store,
        reducers: reducers,
        Child: Child,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }));
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (dynamicReducerWrap);

/***/ })

})
//# sourceMappingURL=index.js.0b979197676efdb0d04c.hot-update.js.map