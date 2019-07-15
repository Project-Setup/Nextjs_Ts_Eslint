webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/redux/dynamicReducerWrap.tsx":
/*!************************************************!*\
  !*** ./src/utils/redux/dynamicReducerWrap.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/david.chen/Documents/projects/next9/src/utils/redux/dynamicReducerWrap.tsx";




var DynamicReducer = function DynamicReducer(_ref) {
  var store = _ref.store,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'replace' : _ref$type,
      reducers = _ref.reducers,
      Child = _ref.Child;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('start: ', reducers);

    if (type === 'replace') {
      store.substitueReducers(reducers);
    } else if (type === 'inject') {
      store.injectReducers(reducers);
    }
  }, []);
  return Child ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Child, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }) : null;
};

function dynamicReducerWrap(_ref2) {
  var position = _ref2.position,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'replace' : _ref2$type,
      reducers = _ref2.reducers,
      Child = _ref2.Child;
  console.log(reducers);
  return function () {
    console.log('init: ', reducers, type);
    console.log(position);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, function (_ref3) {
      var store = _ref3.store;
      console.log(reducers);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DynamicReducer, {
        type: type,
        reducers: reducers,
        store: store,
        Child: Child,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      });
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (dynamicReducerWrap);

/***/ })

})
//# sourceMappingURL=index.js.5f209ad90035efe0693f.hot-update.js.map