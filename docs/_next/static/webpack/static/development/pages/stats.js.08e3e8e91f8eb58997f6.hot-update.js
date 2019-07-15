webpackHotUpdate("static/development/pages/stats.js",{

/***/ "./pages/stats.tsx":
/*!*************************!*\
  !*** ./pages/stats.tsx ***!
  \*************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Head/ManifestHead */ "./src/components/Head/ManifestHead.tsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/utils/redux/dynamicStoreCallbackWrap */ "./src/utils/redux/dynamicStoreCallbackWrap.tsx");
/* harmony import */ var _src_redux_reducers_stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/redux/reducers/stats */ "./src/redux/reducers/stats.ts");
/* harmony import */ var _src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/redux/actions/actions */ "./src/redux/actions/actions.ts");
/* harmony import */ var _src_redux_sagas_saga2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/redux/sagas/saga2 */ "./src/redux/sagas/saga2.ts");
var _jsxFileName = "/Users/david.chen/Documents/projects/next9/pages/stats.tsx";











var storeCallback = function storeCallback(store) {
  store.substitueReducers({
    stats: _src_redux_reducers_stats__WEBPACK_IMPORTED_MODULE_7__["default"]
  });
  store.substitueSagas({
    stats: _src_redux_sagas_saga2__WEBPACK_IMPORTED_MODULE_9__["default"]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    numstats: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, 'stats.stats', 0)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    add8: function add8() {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_8__["addNumber"])(8));
    },
    minus5: function minus5() {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_8__["minusNumber"])(5));
    }
  };
};

var Page = function Page(_ref) {
  var numstats = _ref.numstats,
      minus5 = _ref.minus5,
      add8 = _ref.add8;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Nextjs Typescript Eslint testing",
    themeColor: "red",
    hrefPage: "/stats",
    favIconPath: "/static/icons/favicon.ico",
    appleIconPath: "/static/icons/icon192x192.png",
    hrefManifest: "/static/manifest/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "This is stats"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Number is ".concat(numstats)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: add8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "add 8"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: minus5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "minus 5"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "index")));
};
var ConnectedPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Page);
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_6__["default"])({
  callback: storeCallback,
  Child: ConnectedPage
}));

/***/ }),

/***/ "./src/redux/sagas/saga2.ts":
/*!**********************************!*\
  !*** ./src/redux/sagas/saga2.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/redux/actions/actionTypes.ts");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchMinusAndLog),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(saga1);




function watchMinusAndLog() {
  var action;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchMinusAndLog$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["default"].MINUS);

        case 3:
          action = _context.sent;
          console.log('Logged MINUS', action.payload);
          _context.next = 0;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function saga1() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function saga1$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(watchMinusAndLog)]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/* harmony default export */ __webpack_exports__["default"] = (saga1);

/***/ })

})
//# sourceMappingURL=stats.js.08e3e8e91f8eb58997f6.hot-update.js.map