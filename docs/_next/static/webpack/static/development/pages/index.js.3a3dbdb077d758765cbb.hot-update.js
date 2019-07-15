webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/redux/dynamicReducerWrap.tsx":
/*!************************************************!*\
  !*** ./src/utils/redux/dynamicReducerWrap.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/Users/david.chen/Documents/projects/next9/src/utils/redux/dynamicReducerWrap.tsx";

// @ts-nocheck



(function () {
  // @ts-ignore
  if (typeof Object.id == "undefined") {
    var id = 0; // @ts-ignore

    Object.id = function (o) {
      if (typeof o.__uniqueid == "undefined") {
        _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(o, "__uniqueid", {
          value: ++id,
          enumerable: false,
          // This could go either way, depending on your 
          // interpretation of what an "id" is
          writable: false
        });
      }

      return o.__uniqueid;
    };
  }
})(); // interface DynamicReducerWrapProps extends ReducerProps {
//   Child: ComponentType<any>;
// }


var DynamicReducer = function DynamicReducer(_ref) {
  var store = _ref.store,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'replace' : _ref$type,
      reducers = _ref.reducers,
      Child = _ref.Child;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if ('count' in reducers) {
      window.testReducers = reducers;
    } // @ts-ignore


    console.log('reducers.id: ', Object.id(reducers));
    console.log('start: ', reducers);

    if (type === 'replace') {
      store.substitueReducers(reducers);
    } else if (type === 'inject') {
      store.injectReducers(reducers);
    }
  }, []);
  return Child ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Child, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
    debugger;
    console.log('init: ', reducers, type);
    console.log(position);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["ReactReduxContext"].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, function (_ref3) {
      var store = _ref3.store;
      console.log(reducers);
      console.log(position);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(DynamicReducer, {
        type: type,
        reducers: reducers,
        store: store,
        Child: Child,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      });
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (dynamicReducerWrap);

/***/ })

})
//# sourceMappingURL=index.js.3a3dbdb077d758765cbb.hot-update.js.map