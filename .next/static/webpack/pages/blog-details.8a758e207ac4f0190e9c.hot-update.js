"use strict";
self["webpackHotUpdate_N_E"]("pages/blog-details",{

/***/ "./services/blog-service.js":
/*!**********************************!*\
  !*** ./services/blog-service.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllBlogs": function() { return /* binding */ getAllBlogs; },
/* harmony export */   "getBlog": function() { return /* binding */ getBlog; }
/* harmony export */ });
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var BASE_URL = 'http://localhost:5000/api/v1';
var getAllBlogs = /*#__PURE__*/function () {
  var _ref = (0,C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var res;
    return C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2__.default.get("".concat(BASE_URL, "/blogs"));

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllBlogs() {
    return _ref.apply(this, arguments);
  };
}();
var getBlog = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(slug) {
    var res;
    return C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2__.default.get("".concat(BASE_URL, "/blogs?slug=").concat(slug));

          case 2:
            res = _context2.sent;
            console.log("".concat(BASE_URL, "/blogs?slug=").concat(slug));
            return _context2.abrupt("return", res.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBlog(_x) {
    return _ref2.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1kZXRhaWxzLjhhNzU4ZTIwN2FjNGYwMTkwZTljLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxJQUFNQyxRQUFRLEdBQUcsOEJBQWpCO0FBRU8sSUFBTUMsV0FBVztBQUFBLHVUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1BGLDhDQUFBLFdBQWFDLFFBQWIsWUFETzs7QUFBQTtBQUNuQkcsWUFBQUEsR0FEbUI7QUFBQSw2Q0FFbEJBLEdBQUcsQ0FBQ0MsSUFGYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYSCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCO0FBS0EsSUFBTUksT0FBTztBQUFBLHdUQUFHLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0hQLDhDQUFBLFdBQWFDLFFBQWIseUJBQW9DTSxJQUFwQyxFQURHOztBQUFBO0FBQ2ZILFlBQUFBLEdBRGU7QUFFckJJLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlUixRQUFmLHlCQUFzQ00sSUFBdEM7QUFGcUIsOENBR2RILEdBQUcsQ0FBQ0MsSUFIVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQQyxPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYmxvZy1zZXJ2aWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQmxvZ3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9ibG9nc2ApO1xyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCbG9nID0gYXN5bmMgKHNsdWcpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFTRV9VUkx9L2Jsb2dzP3NsdWc9JHtzbHVnfWApO1xyXG4gIGNvbnNvbGUubG9nKGAke0JBU0VfVVJMfS9ibG9ncz9zbHVnPSR7c2x1Z31gKVxyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJCQVNFX1VSTCIsImdldEFsbEJsb2dzIiwiZ2V0IiwicmVzIiwiZGF0YSIsImdldEJsb2ciLCJzbHVnIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=