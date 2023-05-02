"use strict";
self["webpackHotUpdate_N_E"]("pages/blog-details",{

/***/ "./pages/blog-details.js":
/*!*******************************!*\
  !*** ./pages/blog-details.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Elements_BlogDetails_BlogDetailsTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Elements/BlogDetails/BlogDetailsTitle */ "./components/Elements/BlogDetails/BlogDetailsTitle.js");
/* harmony import */ var _components_Elements_BlogDetails_BlogDetailsBlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Elements/BlogDetails/BlogDetailsBlog */ "./components/Elements/BlogDetails/BlogDetailsBlog.js");
/* harmony import */ var _components_Layout_Layout2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/Layout2 */ "./components/Layout/Layout2.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\PHJ\\development\\code_kids\\pages\\blog-details.js";
// import Loading from "../components/layout/Loading";




function BlogDetails(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout_Layout2__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Elements_BlogDetails_BlogDetailsTitle__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Elements_BlogDetails_BlogDetailsBlog__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_c = BlogDetails;

BlogDetails.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {
    var slug;
    return C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = context.query.slug;
            console.log('hi'); // fetch article data based on slug

            console.log(slug);
            return _context.abrupt("return", {
              slug: slug
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (BlogDetails);

var _c;

$RefreshReg$(_c, "BlogDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1kZXRhaWxzLjZlYTFlZWYxM2QwZTQ3ZWFiMzExLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0csV0FBVCxPQUFrQztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUs5QixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLCtEQUFEO0FBQUEsOEJBRUksOERBQUMsc0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0ksOERBQUMscUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBVUg7O0tBZlFEOztBQWtCVEEsV0FBVyxDQUFDRSxlQUFaO0FBQUEsd1RBQThCLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkMsWUFBQUEsSUFEa0IsR0FDVEQsT0FBTyxDQUFDRSxLQURDLENBQ2xCRCxJQURrQjtBQUcxQkUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUgwQixDQUkxQjs7QUFDREQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFMMkIsNkNBU25CO0FBQUVBLGNBQUFBLElBQUksRUFBSkE7QUFBRixhQVRtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZQSwrREFBZUosV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nLWRldGFpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xvYWRpbmdcIjtcclxuaW1wb3J0IEJsb2dEZXRhaWxzVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRWxlbWVudHMvQmxvZ0RldGFpbHMvQmxvZ0RldGFpbHNUaXRsZVwiO1xyXG5pbXBvcnQgQmxvZ0RldGFpbHNCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0VsZW1lbnRzL0Jsb2dEZXRhaWxzL0Jsb2dEZXRhaWxzQmxvZ1wiO1xyXG5pbXBvcnQgTGF5b3V0MiBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0MlwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBCbG9nRGV0YWlscyh7IGFydGljbGUgfSkge1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dDI+XHJcbiAgICAgICAgICAgICAgICB7LyogTWFpbi1Cb2R5IFN0YXJ0ZWQgKi99XHJcbiAgICAgICAgICAgICAgICA8QmxvZ0RldGFpbHNUaXRsZSAvPlxyXG4gICAgICAgICAgICAgICAgPEJsb2dEZXRhaWxzQmxvZyAvPlxyXG4gICAgICAgICAgICAgICAgey8qIE1haW4tQm9keSBFbmRlZCAqL31cclxuICAgICAgICAgICAgPC9MYXlvdXQyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuQmxvZ0RldGFpbHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGknKVxyXG4gICAgLy8gZmV0Y2ggYXJ0aWNsZSBkYXRhIGJhc2VkIG9uIHNsdWdcclxuICAgY29uc29sZS5sb2coc2x1ZylcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7IHNsdWcgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0RldGFpbHM7Il0sIm5hbWVzIjpbIkJsb2dEZXRhaWxzVGl0bGUiLCJCbG9nRGV0YWlsc0Jsb2ciLCJMYXlvdXQyIiwiQmxvZ0RldGFpbHMiLCJhcnRpY2xlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9