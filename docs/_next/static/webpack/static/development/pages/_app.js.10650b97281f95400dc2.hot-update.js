webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/utils/redux/withRedux.tsx":
/*!***************************************!*\
  !*** ./src/utils/redux/withRedux.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defaultConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultConfig */ "./src/utils/redux/defaultConfig.ts");
/* harmony import */ var _common_objectAssign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/objectAssign */ "./src/utils/common/objectAssign.ts");





var _jsxFileName = "/Users/david.chen/Documents/projects/next9/src/utils/redux/withRedux.tsx";





var withRedux = function withRedux(makeStore) {
  var optionalConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_8__["default"])(_defaultConfig__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isServer: "object" === 'undefined'
  }, optionalConfig);
  var storeKey = config.storeKey,
      isServer = config.isServer,
      deserializeState = config.deserializeState,
      serializeState = config.serializeState;

  var serveStore = function serveStore(_ref) {
    var initialState = _ref.initialState,
        ctx = _ref.ctx;

    var createStore = function createStore() {
      return makeStore(deserializeState(initialState), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, ctx, config));
    }; // always create store if server


    if (isServer) return createStore(); // reuse store if client

    window[storeKey] = window[storeKey] || createStore();
    return window[storeKey];
  };

  return function (App) {
    var WrappedApp = function WrappedApp(_ref2) {
      var initialProps = _ref2.initialProps,
          initialState = _ref2.initialState,
          props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["initialProps", "initialState"]);

      var store = serveStore({
        initialState: initialState
      });
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, initialProps, {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }));
    };

    WrappedApp.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appCtx) {
        var store, initialProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = serveStore({
                  ctx: appCtx.ctx
                }); // eslint-disable-next-line no-param-reassign

                appCtx.ctx.store = store; // eslint-disable-next-line no-param-reassign

                appCtx.ctx.isServer = isServer;
                initialProps = {};

                if (!App.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return App.getInitialProps.call(App, appCtx);

              case 7:
                initialProps = _context.sent;

              case 8:
                return _context.abrupt("return", {
                  isServer: isServer,
                  initialState: serializeState(store.getState()),
                  initialProps: initialProps
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    return WrappedApp;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withRedux);

/***/ })

})
//# sourceMappingURL=_app.js.10650b97281f95400dc2.hot-update.js.map