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
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Elements_BlogDetails_BlogDetailsTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Elements/BlogDetails/BlogDetailsTitle */ "./components/Elements/BlogDetails/BlogDetailsTitle.js");
/* harmony import */ var _components_Elements_BlogDetails_BlogDetailsBlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Elements/BlogDetails/BlogDetailsBlog */ "./components/Elements/BlogDetails/BlogDetailsBlog.js");
/* harmony import */ var _components_Layout_Layout2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/Layout2 */ "./components/Layout/Layout2.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/blog-service */ "./services/blog-service.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\PHJ\\development\\code_kids\\pages\\blog-details.js",
    _s = $RefreshSig$();

// import Loading from "../components/layout/Loading";







function BlogDetails() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var slug = router.query.slug;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
      article = _useState[0],
      setArticle = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    function fetchArticle() {
      return _fetchArticle.apply(this, arguments);
    }

    function _fetchArticle() {
      _fetchArticle = (0,C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var res;
        return C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_services_blog_service__WEBPACK_IMPORTED_MODULE_8__.getBlog)(slug);

              case 2:
                res = _context.sent;
                console.log(res);
                setArticle(res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchArticle.apply(this, arguments);
    }

    if (slug) {
      fetchArticle();
    }
  }, [slug]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout2__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Elements_BlogDetails_BlogDetailsTitle__WEBPACK_IMPORTED_MODULE_3__.default, {
        article: article
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Elements_BlogDetails_BlogDetailsBlog__WEBPACK_IMPORTED_MODULE_4__.default, {
        article: article
      }, void 0, false, {
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

_s(BlogDetails, "APS8V7d8v5HrT5xdJTE4jpuBDUU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1kZXRhaWxzLjY3MGE3NjQ2MjJlODUwNGFlNjlhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTTyxXQUFULEdBQXVCO0FBQUE7O0FBRW5CLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7QUFGbUIsTUFHWE0sSUFIVyxHQUdGRCxNQUFNLENBQUNFLEtBSEwsQ0FHWEQsSUFIVzs7QUFBQSxrQkFJV0osK0NBQVEsQ0FBQyxJQUFELENBSm5CO0FBQUEsTUFJWk0sT0FKWTtBQUFBLE1BSUhDLFVBSkc7O0FBTW5CUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFBQSxhQUNHUyxZQURIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdVQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3NCUCwrREFBTyxDQUFDRyxJQUFELENBRDdCOztBQUFBO0FBQ1VLLGdCQUFBQSxHQURWO0FBRUtDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNERixnQkFBQUEsVUFBVSxDQUFDRSxHQUFELENBQVY7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBTVosUUFBSUwsSUFBSixFQUFVO0FBQ05JLE1BQUFBLFlBQVk7QUFFZjtBQUNKLEdBVlEsRUFVTixDQUFDSixJQUFELENBVk0sQ0FBVDtBQWFBLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsK0RBQUQ7QUFBQSw4QkFFSSw4REFBQyxzRkFBRDtBQUFrQixlQUFPLEVBQUVFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJLDhEQUFDLHFGQUFEO0FBQWlCLGVBQU8sRUFBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBVUg7O0dBN0JRSjtVQUVVSjs7O0tBRlZJO0FBZ0NULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2ctZGV0YWlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTG9hZGluZ1wiO1xyXG5pbXBvcnQgQmxvZ0RldGFpbHNUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbGVtZW50cy9CbG9nRGV0YWlscy9CbG9nRGV0YWlsc1RpdGxlXCI7XHJcbmltcG9ydCBCbG9nRGV0YWlsc0Jsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRWxlbWVudHMvQmxvZ0RldGFpbHMvQmxvZ0RldGFpbHNCbG9nXCI7XHJcbmltcG9ydCBMYXlvdXQyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQyXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtnZXRCbG9nfSBmcm9tIFwiLi4vc2VydmljZXMvYmxvZy1zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEJsb2dEZXRhaWxzKCkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQXJ0aWNsZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0QmxvZyhzbHVnKVxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICBzZXRBcnRpY2xlKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbHVnKSB7XHJcbiAgICAgICAgICAgIGZldGNoQXJ0aWNsZSgpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzbHVnXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dDI+XHJcbiAgICAgICAgICAgICAgICB7LyogTWFpbi1Cb2R5IFN0YXJ0ZWQgKi99XHJcbiAgICAgICAgICAgICAgICA8QmxvZ0RldGFpbHNUaXRsZSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJsb2dEZXRhaWxzQmxvZyBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgey8qIE1haW4tQm9keSBFbmRlZCAqL31cclxuICAgICAgICAgICAgPC9MYXlvdXQyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0RldGFpbHM7Il0sIm5hbWVzIjpbIkJsb2dEZXRhaWxzVGl0bGUiLCJCbG9nRGV0YWlsc0Jsb2ciLCJMYXlvdXQyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRCbG9nIiwiQmxvZ0RldGFpbHMiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImZldGNoQXJ0aWNsZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9