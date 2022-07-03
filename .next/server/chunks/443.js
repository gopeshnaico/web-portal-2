"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 6494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ MessageBox)
/* harmony export */ });
/* harmony import */ var _ui_components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const MessageBox = ({
  open,
  setOpen,
  message,
  type
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "fixed left-0 top-0 z-40 w-full h-full overflow-y-auto overflow-hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "max-w-sm z-50 my-7 px-5 mx-auto relative flex items-center",
        style: {
          minHeight: 'calc(100% - 3.5rem)'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "p-7 bg-white rounded-xl h-full w-full text-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
            src: `${type === 'error' ? '/images/error-icon.png' : '/images/congratulations.svg'}`,
            className: `mb-4 inline-block w-11  `,
            alt: ""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
            className: `inline-block text-2xl mb-4 w-full font-semibold ${type === 'error' ? 'text-red-600' : 'text-green-600'}`,
            children: type === 'error' ? 'Error' : 'Success'
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
            className: 'text-center text-gray-600',
            children: message
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "clear-both"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "w-full mt-10 mb-2 text-right flex justify-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_ui_components_button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
              type: "button",
              className: "btt-primary bg-cyan-500 rounded-full",
              label: "Ok",
              onClick: () => setOpen(false)
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full"
    })]
  });
};

/***/ }),

/***/ 3443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ErrorHandlingWithResponse)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Popups_MessageBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6494);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ErrorHandlingWithResponse = ({
  error,
  setErrorOpen
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: type,
    1: setType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('error');

  const titleCase = str => {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _error$errors;

    if ((error === null || error === void 0 ? void 0 : error.isVerified) === false || (error === null || error === void 0 ? void 0 : error.isVerified) === null) {
      setType('error');
      setOpen(true);
      setMessage(error === null || error === void 0 ? void 0 : error.message);
    } else if ((error === null || error === void 0 ? void 0 : (_error$errors = error.errors) === null || _error$errors === void 0 ? void 0 : _error$errors.length) !== 0) {
      var _error$errors$;

      if (error !== null && error !== void 0 && error.errors && error !== null && error !== void 0 && (_error$errors$ = error.errors[0]) !== null && _error$errors$ !== void 0 && _error$errors$.extensions) {
        var _error$errors$2, _error$errors$2$exten, _error$errors$12, _error$errors$12$exte, _error$errors$13, _error$errors$13$exte, _error$errors$14, _error$errors$14$exte, _error$errors$15, _error$errors$15$exte;

        if (error !== null && error !== void 0 && error.errors && (error === null || error === void 0 ? void 0 : (_error$errors$2 = error.errors[0]) === null || _error$errors$2 === void 0 ? void 0 : (_error$errors$2$exten = _error$errors$2.extensions) === null || _error$errors$2$exten === void 0 ? void 0 : _error$errors$2$exten.code) === 'BAD_USER_INPUT') {
          var _error$errors$3, _error$errors$3$exten, _error$errors$3$exten2;

          if ((error === null || error === void 0 ? void 0 : (_error$errors$3 = error.errors[0]) === null || _error$errors$3 === void 0 ? void 0 : (_error$errors$3$exten = _error$errors$3.extensions) === null || _error$errors$3$exten === void 0 ? void 0 : (_error$errors$3$exten2 = _error$errors$3$exten.message) === null || _error$errors$3$exten2 === void 0 ? void 0 : _error$errors$3$exten2.length) > 0) {
            var _error$errors$4, _error$errors$4$exten, _error$errors$4$exten2, _error$errors$4$exten3;

            if ((error === null || error === void 0 ? void 0 : (_error$errors$4 = error.errors[0]) === null || _error$errors$4 === void 0 ? void 0 : (_error$errors$4$exten = _error$errors$4.extensions) === null || _error$errors$4$exten === void 0 ? void 0 : (_error$errors$4$exten2 = _error$errors$4$exten.message[0]) === null || _error$errors$4$exten2 === void 0 ? void 0 : (_error$errors$4$exten3 = _error$errors$4$exten2.constraints) === null || _error$errors$4$exten3 === void 0 ? void 0 : _error$errors$4$exten3.length) > 0) {
              var _error$errors$5, _error$errors$5$exten, _error$errors$5$exten2, _error$errors$5$exten3, _error$errors$5$exten4;

              if ((error === null || error === void 0 ? void 0 : (_error$errors$5 = error.errors[0]) === null || _error$errors$5 === void 0 ? void 0 : (_error$errors$5$exten = _error$errors$5.extensions) === null || _error$errors$5$exten === void 0 ? void 0 : (_error$errors$5$exten2 = _error$errors$5$exten.message[0]) === null || _error$errors$5$exten2 === void 0 ? void 0 : (_error$errors$5$exten3 = _error$errors$5$exten2.constraints[0]) === null || _error$errors$5$exten3 === void 0 ? void 0 : (_error$errors$5$exten4 = _error$errors$5$exten3.constraints) === null || _error$errors$5$exten4 === void 0 ? void 0 : _error$errors$5$exten4.length) > 0) {
                var _error$errors$6, _error$errors$6$exten, _error$errors$6$exten2, _error$errors$6$exten3, _error$errors$6$exten4, _error$errors$6$exten5;

                const message = error === null || error === void 0 ? void 0 : (_error$errors$6 = error.errors[0]) === null || _error$errors$6 === void 0 ? void 0 : (_error$errors$6$exten = _error$errors$6.extensions) === null || _error$errors$6$exten === void 0 ? void 0 : (_error$errors$6$exten2 = _error$errors$6$exten.message[0]) === null || _error$errors$6$exten2 === void 0 ? void 0 : (_error$errors$6$exten3 = _error$errors$6$exten2.constraints[0]) === null || _error$errors$6$exten3 === void 0 ? void 0 : (_error$errors$6$exten4 = _error$errors$6$exten3.constraints[0]) === null || _error$errors$6$exten4 === void 0 ? void 0 : (_error$errors$6$exten5 = _error$errors$6$exten4.constraints[0]) === null || _error$errors$6$exten5 === void 0 ? void 0 : _error$errors$6$exten5.constraints;
                setType('error');
                setOpen(true);
                setMessage(titleCase(message));
              } else {
                var _error$errors$7, _error$errors$7$exten, _error$errors$7$exten2, _error$errors$7$exten3, _error$errors$8, _error$errors$8$exten, _error$errors$8$exten2, _error$errors$8$exten3;

                const keys = Object === null || Object === void 0 ? void 0 : Object.keys(error === null || error === void 0 ? void 0 : (_error$errors$7 = error.errors[0]) === null || _error$errors$7 === void 0 ? void 0 : (_error$errors$7$exten = _error$errors$7.extensions) === null || _error$errors$7$exten === void 0 ? void 0 : (_error$errors$7$exten2 = _error$errors$7$exten.message[0]) === null || _error$errors$7$exten2 === void 0 ? void 0 : (_error$errors$7$exten3 = _error$errors$7$exten2.constraints[0]) === null || _error$errors$7$exten3 === void 0 ? void 0 : _error$errors$7$exten3.constraints)[0];
                setType('error');
                setOpen(true);
                setMessage(error === null || error === void 0 ? void 0 : (_error$errors$8 = error.errors[0]) === null || _error$errors$8 === void 0 ? void 0 : (_error$errors$8$exten = _error$errors$8.extensions) === null || _error$errors$8$exten === void 0 ? void 0 : (_error$errors$8$exten2 = _error$errors$8$exten.message[0]) === null || _error$errors$8$exten2 === void 0 ? void 0 : (_error$errors$8$exten3 = _error$errors$8$exten2.constraints[0]) === null || _error$errors$8$exten3 === void 0 ? void 0 : _error$errors$8$exten3.constraints[keys]);
              }
            } else {
              var _error$errors$9, _error$errors$9$exten, _error$errors$9$exten2, _error$errors$9$exten3, _error$errors$10, _error$errors$10$exte, _error$errors$10$exte2, _error$errors$10$exte3;

              const keys = Object === null || Object === void 0 ? void 0 : Object.keys(error === null || error === void 0 ? void 0 : (_error$errors$9 = error.errors[0]) === null || _error$errors$9 === void 0 ? void 0 : (_error$errors$9$exten = _error$errors$9.extensions) === null || _error$errors$9$exten === void 0 ? void 0 : (_error$errors$9$exten2 = _error$errors$9$exten.response) === null || _error$errors$9$exten2 === void 0 ? void 0 : (_error$errors$9$exten3 = _error$errors$9$exten2.message[0]) === null || _error$errors$9$exten3 === void 0 ? void 0 : _error$errors$9$exten3.constraints)[0];
              setType('error');
              setOpen(true);
              setMessage(error === null || error === void 0 ? void 0 : (_error$errors$10 = error.errors[0]) === null || _error$errors$10 === void 0 ? void 0 : (_error$errors$10$exte = _error$errors$10.extensions) === null || _error$errors$10$exte === void 0 ? void 0 : (_error$errors$10$exte2 = _error$errors$10$exte.response) === null || _error$errors$10$exte2 === void 0 ? void 0 : (_error$errors$10$exte3 = _error$errors$10$exte2.message[0]) === null || _error$errors$10$exte3 === void 0 ? void 0 : _error$errors$10$exte3.constraints[keys]);
            }
          } else {
            var _error$errors$11;

            setType('error');
            setOpen(true);
            setMessage(error === null || error === void 0 ? void 0 : (_error$errors$11 = error.errors[0]) === null || _error$errors$11 === void 0 ? void 0 : _error$errors$11.message);
          }
        } else if (error !== null && error !== void 0 && error.errors && (error === null || error === void 0 ? void 0 : (_error$errors$12 = error.errors[0]) === null || _error$errors$12 === void 0 ? void 0 : (_error$errors$12$exte = _error$errors$12.extensions) === null || _error$errors$12$exte === void 0 ? void 0 : _error$errors$12$exte.code) === 'FORBIDDEN') {
          if (error !== null && error !== void 0 && error.errors && error !== null && error !== void 0 && error.errors[0]) {
            setType('error');
            setOpen(true);
            setMessage(error === null || error === void 0 ? void 0 : error.errors[0].message);
          }
        } else if (error !== null && error !== void 0 && error.errors && (error === null || error === void 0 ? void 0 : (_error$errors$13 = error.errors[0]) === null || _error$errors$13 === void 0 ? void 0 : (_error$errors$13$exte = _error$errors$13.extensions) === null || _error$errors$13$exte === void 0 ? void 0 : _error$errors$13$exte.code) === 'INTERNAL_SERVER_ERROR') {
          setType('error');
          setOpen(true);
          setMessage(error === null || error === void 0 ? void 0 : error.errors[0].message);
        } else if (error !== null && error !== void 0 && error.errors && (error === null || error === void 0 ? void 0 : (_error$errors$14 = error.errors[0]) === null || _error$errors$14 === void 0 ? void 0 : (_error$errors$14$exte = _error$errors$14.extensions) === null || _error$errors$14$exte === void 0 ? void 0 : _error$errors$14$exte.code) === 'UNAUTHENTICATED') {
          setType('error');
          setOpen(true);
          setMessage(error === null || error === void 0 ? void 0 : error.errors[0].message);
        } else if (error !== null && error !== void 0 && error.errors && (error === null || error === void 0 ? void 0 : (_error$errors$15 = error.errors[0]) === null || _error$errors$15 === void 0 ? void 0 : (_error$errors$15$exte = _error$errors$15.extensions) === null || _error$errors$15$exte === void 0 ? void 0 : _error$errors$15$exte.code) === '500') {
          setType('error');
          setOpen(true);
          setMessage(error === null || error === void 0 ? void 0 : error.errors[0].message);
        } else {
          setType('error');
          setOpen(true);
          setMessage('Something went wrong !');
        }
      } else {
        setType('error');
        setOpen(true);
        setMessage('Something went wrong !');
      }
    }
  }, [error]);

  const closeError = () => {
    setOpen(false);
    setErrorOpen(false);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_Popups_MessageBox__WEBPACK_IMPORTED_MODULE_1__/* .MessageBox */ ._, {
      open,
      message,
      type,
      setOpen: closeError
    })
  });
};

/***/ })

};
;