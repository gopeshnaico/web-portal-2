"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./src/pages/_error.js":
/*!*****************************!*\
  !*** ./src/pages/_error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst MyError = ({\n  statusCode,\n  hasGetInitialPropsRun,\n  err\n}) => {\n  if (!hasGetInitialPropsRun && err) {\n    // getInitialProps is not called in case of\n    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass\n    // err via _app.js so it can be captured\n    _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureException(err); // Flushing is not required in this case as it only happens on the client\n  }\n\n  return /*#__PURE__*/React.createElement((next_error__WEBPACK_IMPORTED_MODULE_0___default()), {\n    statusCode: statusCode\n  });\n};\n\nMyError.getInitialProps = async ({\n  res,\n  err\n}) => {\n  const errorInitialProps = await next_error__WEBPACK_IMPORTED_MODULE_0___default().getInitialProps({\n    res,\n    err\n  }); // Workaround for https://github.com/vercel/next.js/issues/8592, mark when\n  // getInitialProps has run\n\n  errorInitialProps.hasGetInitialPropsRun = true; // Running on the server, the response object (`res`) is available.\n  //\n  // Next.js will pass an err on the server if a page's data fetching methods\n  // threw or returned a Promise that rejected\n  //\n  // Running on the client (browser), Next.js will provide an err if:\n  //\n  //  - a page's `getInitialProps` threw or returned a Promise that rejected\n  //  - an exception was thrown somewhere in the React lifecycle (render,\n  //    componentDidMount, etc) that was caught by Next.js's React Error\n  //    Boundary. Read more about what types of exceptions are caught by Error\n  //    Boundaries: https://reactjs.org/docs/error-boundaries.html\n\n  if (err) {\n    _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureException(err); // Flushing before returning is necessary if deploying to Vercel, see\n    // https://vercel.com/docs/platform/limits#streaming-responses\n\n    await _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.flush(2000);\n    return errorInitialProps;\n  } // If this point is reached, getInitialProps was called without any\n  // information about what the error might be. This can be caused by\n  // a falsy value being thrown e.g. throw undefined\n\n\n  return errorInitialProps;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyError);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2Vycm9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNRSxPQUFPLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxVQUFGO0FBQWNDLEVBQUFBLHFCQUFkO0FBQXFDQyxFQUFBQTtBQUFyQyxDQUFELEtBQWdEO0FBQzlELE1BQUksQ0FBQ0QscUJBQUQsSUFBMEJDLEdBQTlCLEVBQW1DO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBSixJQUFBQSw0REFBQSxDQUF3QkksR0FBeEIsRUFKaUMsQ0FLakM7QUFDRDs7QUFFRCxzQkFBTyxvQkFBQyxtREFBRDtBQUFvQixjQUFVLEVBQUVGO0FBQWhDLElBQVA7QUFDRCxDQVZEOztBQVlBRCxPQUFPLENBQUNLLGVBQVIsR0FBMEIsT0FBTztBQUFFQyxFQUFBQSxHQUFGO0FBQU9ILEVBQUFBO0FBQVAsQ0FBUCxLQUF3QjtBQUNoRCxRQUFNSSxpQkFBaUIsR0FBRyxNQUFNVCxpRUFBQSxDQUFtQztBQUNqRVEsSUFBQUEsR0FEaUU7QUFFakVILElBQUFBO0FBRmlFLEdBQW5DLENBQWhDLENBRGdELENBTWhEO0FBQ0E7O0FBQ0FJLEVBQUFBLGlCQUFpQixDQUFDTCxxQkFBbEIsR0FBMEMsSUFBMUMsQ0FSZ0QsQ0FVaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlDLEdBQUosRUFBUztBQUNQSixJQUFBQSw0REFBQSxDQUF3QkksR0FBeEIsRUFETyxDQUdQO0FBQ0E7O0FBQ0EsVUFBTUosaURBQUEsQ0FBYSxJQUFiLENBQU47QUFFQSxXQUFPUSxpQkFBUDtBQUNELEdBL0IrQyxDQWlDaEQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFPQSxpQkFBUDtBQUNELENBckNEOztBQXVDQSxpRUFBZVAsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3NyYy9wYWdlcy9fZXJyb3IuanM/ZTZmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEVycm9yQ29tcG9uZW50IGZyb20gJ25leHQvZXJyb3InO1xyXG5cclxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbmV4dGpzJztcclxuXHJcbmNvbnN0IE15RXJyb3IgPSAoeyBzdGF0dXNDb2RlLCBoYXNHZXRJbml0aWFsUHJvcHNSdW4sIGVyciB9KSA9PiB7XHJcbiAgaWYgKCFoYXNHZXRJbml0aWFsUHJvcHNSdW4gJiYgZXJyKSB7XHJcbiAgICAvLyBnZXRJbml0aWFsUHJvcHMgaXMgbm90IGNhbGxlZCBpbiBjYXNlIG9mXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvaXNzdWVzLzg1OTIuIEFzIGEgd29ya2Fyb3VuZCwgd2UgcGFzc1xyXG4gICAgLy8gZXJyIHZpYSBfYXBwLmpzIHNvIGl0IGNhbiBiZSBjYXB0dXJlZFxyXG4gICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyKTtcclxuICAgIC8vIEZsdXNoaW5nIGlzIG5vdCByZXF1aXJlZCBpbiB0aGlzIGNhc2UgYXMgaXQgb25seSBoYXBwZW5zIG9uIHRoZSBjbGllbnRcclxuICB9XHJcblxyXG4gIHJldHVybiA8TmV4dEVycm9yQ29tcG9uZW50IHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+O1xyXG59O1xyXG5cclxuTXlFcnJvci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMsIGVyciB9KSA9PiB7XHJcbiAgY29uc3QgZXJyb3JJbml0aWFsUHJvcHMgPSBhd2FpdCBOZXh0RXJyb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKHtcclxuICAgIHJlcyxcclxuICAgIGVycixcclxuICB9KTtcclxuXHJcbiAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy84NTkyLCBtYXJrIHdoZW5cclxuICAvLyBnZXRJbml0aWFsUHJvcHMgaGFzIHJ1blxyXG4gIGVycm9ySW5pdGlhbFByb3BzLmhhc0dldEluaXRpYWxQcm9wc1J1biA9IHRydWU7XHJcblxyXG4gIC8vIFJ1bm5pbmcgb24gdGhlIHNlcnZlciwgdGhlIHJlc3BvbnNlIG9iamVjdCAoYHJlc2ApIGlzIGF2YWlsYWJsZS5cclxuICAvL1xyXG4gIC8vIE5leHQuanMgd2lsbCBwYXNzIGFuIGVyciBvbiB0aGUgc2VydmVyIGlmIGEgcGFnZSdzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kc1xyXG4gIC8vIHRocmV3IG9yIHJldHVybmVkIGEgUHJvbWlzZSB0aGF0IHJlamVjdGVkXHJcbiAgLy9cclxuICAvLyBSdW5uaW5nIG9uIHRoZSBjbGllbnQgKGJyb3dzZXIpLCBOZXh0LmpzIHdpbGwgcHJvdmlkZSBhbiBlcnIgaWY6XHJcbiAgLy9cclxuICAvLyAgLSBhIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCB0aHJldyBvciByZXR1cm5lZCBhIFByb21pc2UgdGhhdCByZWplY3RlZFxyXG4gIC8vICAtIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIHNvbWV3aGVyZSBpbiB0aGUgUmVhY3QgbGlmZWN5Y2xlIChyZW5kZXIsXHJcbiAgLy8gICAgY29tcG9uZW50RGlkTW91bnQsIGV0YykgdGhhdCB3YXMgY2F1Z2h0IGJ5IE5leHQuanMncyBSZWFjdCBFcnJvclxyXG4gIC8vICAgIEJvdW5kYXJ5LiBSZWFkIG1vcmUgYWJvdXQgd2hhdCB0eXBlcyBvZiBleGNlcHRpb25zIGFyZSBjYXVnaHQgYnkgRXJyb3JcclxuICAvLyAgICBCb3VuZGFyaWVzOiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItYm91bmRhcmllcy5odG1sXHJcblxyXG4gIGlmIChlcnIpIHtcclxuICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGVycik7XHJcblxyXG4gICAgLy8gRmx1c2hpbmcgYmVmb3JlIHJldHVybmluZyBpcyBuZWNlc3NhcnkgaWYgZGVwbG95aW5nIHRvIFZlcmNlbCwgc2VlXHJcbiAgICAvLyBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9wbGF0Zm9ybS9saW1pdHMjc3RyZWFtaW5nLXJlc3BvbnNlc1xyXG4gICAgYXdhaXQgU2VudHJ5LmZsdXNoKDIwMDApO1xyXG5cclxuICAgIHJldHVybiBlcnJvckluaXRpYWxQcm9wcztcclxuICB9XHJcblxyXG4gIC8vIElmIHRoaXMgcG9pbnQgaXMgcmVhY2hlZCwgZ2V0SW5pdGlhbFByb3BzIHdhcyBjYWxsZWQgd2l0aG91dCBhbnlcclxuICAvLyBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IHRoZSBlcnJvciBtaWdodCBiZS4gVGhpcyBjYW4gYmUgY2F1c2VkIGJ5XHJcbiAgLy8gYSBmYWxzeSB2YWx1ZSBiZWluZyB0aHJvd24gZS5nLiB0aHJvdyB1bmRlZmluZWRcclxuICByZXR1cm4gZXJyb3JJbml0aWFsUHJvcHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUVycm9yO1xyXG4iXSwibmFtZXMiOlsiTmV4dEVycm9yQ29tcG9uZW50IiwiU2VudHJ5IiwiTXlFcnJvciIsInN0YXR1c0NvZGUiLCJoYXNHZXRJbml0aWFsUHJvcHNSdW4iLCJlcnIiLCJjYXB0dXJlRXhjZXB0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyb3JJbml0aWFsUHJvcHMiLCJmbHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_error.js\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/error");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_error.js"));
module.exports = __webpack_exports__;

})();