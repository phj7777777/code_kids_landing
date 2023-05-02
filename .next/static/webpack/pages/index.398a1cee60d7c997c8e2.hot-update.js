"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Elements/Home2/BlogArea2.js":
/*!************************************************!*\
  !*** ./components/Elements/Home2/BlogArea2.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogArea2; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/blog-service */ "./services/blog-service.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\PHJ\\development\\code_kids\\components\\Elements\\Home2\\BlogArea2.js",
    _s = $RefreshSig$();




function BlogArea2() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getBlogs = /*#__PURE__*/function () {
      var _ref = (0,C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var response;
        return C_Users_PHJ_development_code_kids_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_services_blog_service__WEBPACK_IMPORTED_MODULE_5__.getAllBlogs)();

              case 2:
                response = _context.sent;

                if (response.data.length > 3) {
                  setBlogs(response.data.slice(0, 3));
                } else {
                  setBlogs(response.data);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getBlogs() {
        return _ref.apply(this, arguments);
      };
    }();

    getBlogs();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "blog__area pt-30 pb-140 p-relative",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "blog__shape",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "blog-dot",
        src: "/img/icon/blog/home-2/blog-dot.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "blog-triangle",
        src: "/img/icon/blog/home-2/blog-triangle.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "section__title-wrapper section__title-wrapper-2 text-center mb-50 wow fadeInUp section-padding section-padding-2",
            "data-wow-delay": ".3s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "section__title section__title-2",
              children: "Useful Articles For Your Kids"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 22
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: blogs.map(function (blog) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp",
            "data-wow-delay": ".3s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "blog__item white-bg mb-30",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "blog__thumb fix w-img",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/blog-details",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      src: "/img/blog/home-2/blog-1.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 55
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 28
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 25
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "blog__content pt-20",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "blog__meta mb-10",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "date",
                    children: blog.createdBy
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 31
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "tag",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                      href: "#",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: blog.category
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 68
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 31
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 28
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "blog__title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/blog-details?slug=".concat(blog.slug),
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: blog.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 103
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 56
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 28
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 25
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 22
            }, _this)
          }, blog.id, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 19
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-xxl-12 wow fadeInUp",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "blog__more text-center mt-40",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/blog",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "w-btn w-btn-blue w-btn-6",
                children: "View all Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 22
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(BlogArea2, "RDzdeLKEs49XKHWpCIuOQAADm3U=");

_c = BlogArea2;

var _c;

$RefreshReg$(_c, "BlogArea2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk4YTFjZWU2MGQ3Yzk5N2M4ZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0ssU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUVQSCwrQ0FBUSxDQUFDLEVBQUQsQ0FGRDtBQUFBLE1BRTFCSSxLQUYwQjtBQUFBLE1BRW5CQyxRQUZtQjs7QUFJakNOLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNiLFFBQU1PLFFBQVE7QUFBQSwyVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNTSixtRUFBVyxFQURwQjs7QUFBQTtBQUNSSyxnQkFBQUEsUUFEUTs7QUFFZCxvQkFBR0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQWQsR0FBdUIsQ0FBMUIsRUFBNEI7QUFDekJKLGtCQUFBQSxRQUFRLENBQUNFLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRSxLQUFkLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQUQsQ0FBUjtBQUNGLGlCQUZELE1BRUs7QUFDRkwsa0JBQUFBLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDQyxJQUFWLENBQVI7QUFDRjs7QUFOYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFSRixRQUFRO0FBQUE7QUFBQTtBQUFBLE9BQWQ7O0FBU0FBLElBQUFBLFFBQVE7QUFDVixHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUMsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsb0NBQW5CO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNHO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQTBCLFdBQUcsRUFBQyxvQ0FBOUI7QUFBbUUsV0FBRyxFQUFDO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUVHO0FBQUssaUJBQVMsRUFBQyxl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QUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Q0g7O0dBN0R1QmQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRWxlbWVudHMvSG9tZTIvQmxvZ0FyZWEyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7Z2V0QWxsQmxvZ3N9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9ibG9nLXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dBcmVhMigpIHtcclxuXHJcbiAgIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgZ2V0QmxvZ3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QWxsQmxvZ3MoKTtcclxuICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAzKXtcclxuICAgICAgICAgICAgc2V0QmxvZ3MocmVzcG9uc2UuZGF0YS5zbGljZSgwLDMpKTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldEJsb2dzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBnZXRCbG9ncygpO1xyXG4gICB9LCBbXSk7XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9nX19hcmVhIHB0LTMwIHBiLTE0MCBwLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19fc2hhcGVcIj5cclxuICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJibG9nLWRvdFwiIHNyYz1cIi9pbWcvaWNvbi9ibG9nL2hvbWUtMi9ibG9nLWRvdC5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmxvZy10cmlhbmdsZVwiIHNyYz1cIi9pbWcvaWNvbi9ibG9nL2hvbWUtMi9ibG9nLXRyaWFuZ2xlLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXh4bC04IG9mZnNldC14eGwtMiBjb2wteGwtMTAgb2Zmc2V0LXhsLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZS13cmFwcGVyIHNlY3Rpb25fX3RpdGxlLXdyYXBwZXItMiB0ZXh0LWNlbnRlciBtYi01MCB3b3cgZmFkZUluVXAgc2VjdGlvbi1wYWRkaW5nIHNlY3Rpb24tcGFkZGluZy0yXCIgZGF0YS13b3ctZGVsYXk9XCIuM3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlIHNlY3Rpb25fX3RpdGxlLTJcIj5Vc2VmdWwgQXJ0aWNsZXMgRm9yIFlvdXIgS2lkczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jsb2cuaWR9IGNsYXNzTmFtZT1cImNvbC14eGwtNCBjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNiB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIi4zc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2l0ZW0gd2hpdGUtYmcgbWItMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX190aHVtYiBmaXggdy1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2Jsb2cvaG9tZS0yL2Jsb2ctMS5qcGdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2NvbnRlbnQgcHQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19tZXRhIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57YmxvZy5jcmVhdGVkQnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWdcIj48TGluayBocmVmPVwiI1wiPjxhPntibG9nLmNhdGVnb3J5fTwvYT48L0xpbms+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJsb2dfX3RpdGxlXCI+PExpbmsgaHJlZj17YC9ibG9nLWRldGFpbHM/c2x1Zz0ke2Jsb2cuc2x1Z31gfT48YT57YmxvZy50aXRsZX08L2E+PC9MaW5rPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHhsLTEyIHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19fbW9yZSB0ZXh0LWNlbnRlciBtdC00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj48YSBjbGFzc05hbWU9XCJ3LWJ0biB3LWJ0bi1ibHVlIHctYnRuLTZcIj5WaWV3IGFsbCBCbG9nPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJnZXRBbGxCbG9ncyIsIkJsb2dBcmVhMiIsImJsb2dzIiwic2V0QmxvZ3MiLCJnZXRCbG9ncyIsInJlc3BvbnNlIiwiZGF0YSIsImxlbmd0aCIsInNsaWNlIiwibWFwIiwiYmxvZyIsImNyZWF0ZWRCeSIsImNhdGVnb3J5Iiwic2x1ZyIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9