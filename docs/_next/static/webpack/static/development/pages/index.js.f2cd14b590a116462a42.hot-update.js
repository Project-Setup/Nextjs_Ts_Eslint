webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
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
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.tsx");
/* harmony import */ var _src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Head/ManifestHead */ "./src/components/Head/ManifestHead.tsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/utils/redux/dynamicStoreCallbackWrap */ "./src/utils/redux/dynamicStoreCallbackWrap.tsx");
/* harmony import */ var _src_redux_reducers_count__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/redux/reducers/count */ "./src/redux/reducers/count.ts");
/* harmony import */ var _src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/redux/actions/actions */ "./src/redux/actions/actions.ts");
/* harmony import */ var _src_redux_sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/redux/sagas */ "./src/redux/sagas/index.ts");
/* harmony import */ var _src_redux_sagas_saga1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/redux/sagas/saga1 */ "./src/redux/sagas/saga1.ts");
var _jsxFileName = "/Users/david.chen/Documents/projects/next9/pages/index.tsx";













var storeCallback = function storeCallback(store) {
  store.substitueReducers({
    count: _src_redux_reducers_count__WEBPACK_IMPORTED_MODULE_8__["default"]
  });
  store.substitueSagas({
    root: _src_redux_sagas__WEBPACK_IMPORTED_MODULE_10__["default"],
    index: _src_redux_sagas_saga1__WEBPACK_IMPORTED_MODULE_11__["default"]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    numCount: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, 'count.count', 0)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    add2: function add2() {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_9__["addNumber"])(2));
    },
    minus3: function minus3() {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_9__["minusNumber"])(3));
    }
  };
};

var Page = function Page(_ref) {
  var numCount = _ref.numCount,
      minus3 = _ref.minus3,
      add2 = _ref.add2;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Nextjs Typescript Eslint",
    themeColor: "red",
    hrefPage: "/",
    favIconPath: "/static/icons/favicon.ico",
    appleIconPath: "/static/icons/icon192x192.png",
    hrefManifest: "/static/manifest/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "This is index"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Number is ".concat(numCount)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: add2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "add 2"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: minus3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "minus 3"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/stats",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "stats")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/about",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "about")));
};
var ConnectedPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Page);
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_7__["default"])({
  callback: storeCallback,
  Child: ConnectedPage
}));

/***/ }),

/***/ "./src/redux/sagas/saga1.ts":
/*!**********************************!*\
  !*** ./src/redux/sagas/saga1.ts ***!
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
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddAndLog),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(saga1);




function watchAddAndLog() {
  var action;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddAndLog$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ADD);

        case 3:
          action = _context.sent;
          console.log('Logged ADDED', action.payload);
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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(watchAddAndLog)]);

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
//# sourceMappingURL=index.js.f2cd14b590a116462a42.hot-update.js.map