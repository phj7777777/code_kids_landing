"use strict";
self["webpackHotUpdate_N_E"]("pages/blog-details",{

/***/ "./pages/blog-details.js":
/*!*******************************!*\
  !*** ./pages/blog-details.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Elements_BlogDetails_BlogDetailsTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Elements/BlogDetails/BlogDetailsTitle */ "./components/Elements/BlogDetails/BlogDetailsTitle.js");
/* harmony import */ var _components_Elements_BlogDetails_BlogDetailsBlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Elements/BlogDetails/BlogDetailsBlog */ "./components/Elements/BlogDetails/BlogDetailsBlog.js");
/* harmony import */ var _components_Layout_Layout2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Layout2 */ "./components/Layout/Layout2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\PHJ\\development\\code_kids\\pages\\blog-details.js",
    _s = $RefreshSig$();

// import Loading from "../components/layout/Loading";






function BlogDetails(_ref) {
  _s();

  var article = _ref.article;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      blog = _useState[0],
      setBlogs = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var slug = router.query.slug;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // async function fetchData() {
    //     const response = await axios.get(`/api/comments?articleId=${article.id}`);
    //     setComments(response.data);
    // }
    // fetchData();
    console.log('hello');
    console.log(slug);
  }, [slug]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout2__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Elements_BlogDetails_BlogDetailsTitle__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Elements_BlogDetails_BlogDetailsBlog__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(BlogDetails, "+8MDOhEtE5GN7o8PyMAaFLGbYJA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = BlogDetails;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1kZXRhaWxzLjQ5YmQ1ZDZjZDFlZDY5NTA5NDliLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU00sV0FBVCxPQUFrQztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDTEgsK0NBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN2QkksSUFEdUI7QUFBQSxNQUNqQkMsUUFEaUI7O0FBRTlCLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7QUFGOEIsTUFHdEJNLElBSHNCLEdBR2JELE1BQU0sQ0FBQ0UsS0FITSxDQUd0QkQsSUFIc0I7QUFJOUJSLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQVUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUVILEdBWFEsRUFXTixDQUFDQSxJQUFELENBWE0sQ0FBVDtBQWdCQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLCtEQUFEO0FBQUEsOEJBRUksOERBQUMsc0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0ksOERBQUMscUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBVUg7O0dBOUJRTDtVQUVVRDs7O0tBRlZDO0FBa0NULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2ctZGV0YWlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTG9hZGluZ1wiO1xyXG5pbXBvcnQgQmxvZ0RldGFpbHNUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbGVtZW50cy9CbG9nRGV0YWlscy9CbG9nRGV0YWlsc1RpdGxlXCI7XHJcbmltcG9ydCBCbG9nRGV0YWlsc0Jsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRWxlbWVudHMvQmxvZ0RldGFpbHMvQmxvZ0RldGFpbHNCbG9nXCI7XHJcbmltcG9ydCBMYXlvdXQyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQmxvZ0RldGFpbHMoeyBhcnRpY2xlIH0pIHtcclxuICAgIGNvbnN0IFtibG9nLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9jb21tZW50cz9hcnRpY2xlSWQ9JHthcnRpY2xlLmlkfWApO1xyXG4gICAgICAgIC8vICAgICBzZXRDb21tZW50cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2x1ZylcclxuXHJcbiAgICB9LCBbc2x1Z10pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dDI+XHJcbiAgICAgICAgICAgICAgICB7LyogTWFpbi1Cb2R5IFN0YXJ0ZWQgKi99XHJcbiAgICAgICAgICAgICAgICA8QmxvZ0RldGFpbHNUaXRsZSAvPlxyXG4gICAgICAgICAgICAgICAgPEJsb2dEZXRhaWxzQmxvZyAvPlxyXG4gICAgICAgICAgICAgICAgey8qIE1haW4tQm9keSBFbmRlZCAqL31cclxuICAgICAgICAgICAgPC9MYXlvdXQyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWxzOyJdLCJuYW1lcyI6WyJCbG9nRGV0YWlsc1RpdGxlIiwiQmxvZ0RldGFpbHNCbG9nIiwiTGF5b3V0MiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQmxvZ0RldGFpbHMiLCJhcnRpY2xlIiwiYmxvZyIsInNldEJsb2dzIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=