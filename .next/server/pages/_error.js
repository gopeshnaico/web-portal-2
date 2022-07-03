"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 6513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: external "@sentry/nextjs"
const nextjs_namespaceObject = require("@sentry/nextjs");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_error.js




const MyError = ({
  statusCode,
  hasGetInitialPropsRun,
  err
}) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    nextjs_namespaceObject.captureException(err); // Flushing is not required in this case as it only happens on the client
  }

  return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
    statusCode: statusCode
  });
};

MyError.getInitialProps = async ({
  res,
  err
}) => {
  const errorInitialProps = await error_default().getInitialProps({
    res,
    err
  }); // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run

  errorInitialProps.hasGetInitialPropsRun = true; // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (err) {
    nextjs_namespaceObject.captureException(err); // Flushing before returning is necessary if deploying to Vercel, see
    // https://vercel.com/docs/platform/limits#streaming-responses

    await nextjs_namespaceObject.flush(2000);
    return errorInitialProps;
  } // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This can be caused by
  // a falsy value being thrown e.g. throw undefined


  return errorInitialProps;
};

/* harmony default export */ const _error = (MyError);

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6513));
module.exports = __webpack_exports__;

})();