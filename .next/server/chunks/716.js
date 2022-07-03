"use strict";
exports.id = 716;
exports.ids = [716];
exports.modules = {

/***/ 8241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Oops)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(391);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Oops = ({
  setValidateTerms
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "fixed left-0 top-0 z-40 w-full h-full overflow-y-auto overflow-hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "max-w-sm z-50 my-7 px-5 mx-auto relative flex items-center",
        style: {
          minHeight: 'calc(100% - 3.5rem)'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "p-7 bg-white rounded-xl h-full w-full text-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
            src: "images/warning-icon.png",
            className: "mb-4 inline-block w-16",
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
            className: "inline-block text-2xl mb-4 w-full font-semibold ",
            children: [t('Oops'), '!']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            className: "text-center text-gray-600 ",
            children: t('Please accept our terms and conditions to continue')
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "clear-both"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "w-full mt-10 mb-2 text-right flex justify-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ui_components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
              type: "button",
              className: "btt-primary bg-cyan-500 rounded-full",
              label: "Ok",
              onClick: () => setValidateTerms(false)
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full"
    })]
  });
};

/***/ }),

/***/ 3716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1908);
/* harmony import */ var _src_lib_errorHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3443);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _domain_api_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7110);
/* harmony import */ var _domain_GqQuery_useGQLQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6246);
/* harmony import */ var _lib_redux_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6521);
/* harmony import */ var _lib_redux_reducers_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8855);
/* harmony import */ var _Popups_Oops__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8241);
/* harmony import */ var _ui_SignUp_Signup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4294);
/* harmony import */ var _Popups_MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6494);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
















const SignupPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: messageBox,
    1: setMessageBox
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: type,
    1: setType
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('success');
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: validateTerms,
    1: setValidateTerms
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: isCheckedTerms,
    1: setIsCheckedTerms
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const dispatch = (0,_lib_redux_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    phone: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Mobile Number is required').matches(/^\d{10}$/, 'Enter Valid Mobile Number')
  });
  const {
    register,
    handleSubmit,
    setFocus,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__.yupResolver)(validationSchema)
  });
  const mutation = (0,_domain_api_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useSendOtpMutationMutation */ .MB)((0,_domain_GqQuery_useGQLQuery__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)());

  const handleSignup = async formValues => {
    if (isCheckedTerms === true) {
      const variable = {
        data: {
          phone: `+91 ${formValues.phone}`
        }
      };
      dispatch((0,_lib_redux_reducers_session__WEBPACK_IMPORTED_MODULE_9__/* .updatePhone */ .aS)(`+91 ${formValues.phone}`));
      await mutation.mutateAsync(variable).then(res => {
        if (res !== null && res !== void 0 && res.sendOTP.isSend) {
          setOpen(false);
          localStorage.setItem('attempt', '');
          mutation.reset();
          router.push('/signup/verify-otp');
        } else {
          setOpen(true);
          setMessage(res === null || res === void 0 ? void 0 : res.sendOTP.message);
        }
      }).catch(err => {
        setOpen(true);
        setMessage(err === null || err === void 0 ? void 0 : err.response);
      });
    } else setValidateTerms(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [open && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_src_lib_errorHandling__WEBPACK_IMPORTED_MODULE_1__/* .ErrorHandlingWithResponse */ .q, {
      error: message,
      setErrorOpen: setOpen
    }), validateTerms && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Popups_Oops__WEBPACK_IMPORTED_MODULE_10__/* .Oops */ .v, {
      setValidateTerms
    }), messageBox && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Popups_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* .MessageBox */ ._, {
      open: messageBox,
      setOpen: setMessageBox,
      message: message,
      type: type
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ui_SignUp_Signup__WEBPACK_IMPORTED_MODULE_11__/* .Signup */ .A, {
      register,
      handleSignup,
      handleSubmit,
      errors,
      setFocus,
      validateTerms,
      isCheckedTerms,
      setIsCheckedTerms
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2640);
/* harmony import */ var _ui_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(391);
/* harmony import */ var _ui_components_headingLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5007);
/* harmony import */ var _ui_components_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7705);
/* harmony import */ var _ui_components_imageView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5871);
/* harmony import */ var _AppLayout_SignupLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2204);
/* harmony import */ var _ui_components_inputbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(970);
/* harmony import */ var _ui_components_checkboxWithoutLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Signup = ({
  register,
  handleSignup,
  handleSubmit,
  errors,
  setFocus,
  isCheckedTerms,
  setIsCheckedTerms
}) => {
  var _errors$phone;

  const {
    0: disableButton,
    1: setDisableButton
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFocus && setFocus('phone');
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_AppLayout_SignupLayout__WEBPACK_IMPORTED_MODULE_7__/* .SignupLayout */ .j, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "w-full md:w-6/12 bg-white min-h-screen relative mx-auto",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("form", {
          onSubmit: handleSubmit(handleSignup),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "px-6 w-full lg:w-10/12 mx-auto min-h-screen pt-10 pb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_imageView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                className: "inline-block logo",
                alt: "Logo",
                width: 200,
                height: 75
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_headingLabel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "mt-2 mb-2 text-2xl font-medium text-gray-700",
                labelText: "The Wow Experience"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "clear-both"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_headingLabel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "mt-8 mb-2 text-xl",
                labelText: "Provide your number"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "mb-8 text-gray-500 mt-0",
                labelText: "Let's Get Started"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "clear-both"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "flex mb-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_inputbox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                name: "countryCode",
                type: "text",
                register: register,
                className: "text-center w-20 py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-6",
                placeholder: "+91",
                disabled: true
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("label", {
                className: "w-full",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
                  type: "number",
                  name: "phone"
                }, register('phone')), {}, {
                  className: `w-full py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-0 ${errors.phone ? 'is-invalid border-b-red-400' : ''}`,
                  placeholder: 'Your mobile number',
                  onChange: e => {
                    if (e.target.value.length === 10) setDisableButton(true);else setDisableButton(false);
                  }
                }))
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "errorMessage text-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
                children: (_errors$phone = errors.phone) === null || _errors$phone === void 0 ? void 0 : _errors$phone.message
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "clear-both"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                className: "text-slate-500",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_checkboxWithoutLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                  isChecked: isCheckedTerms,
                  onChange: () => setIsCheckedTerms(!isCheckedTerms)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
                  children: ["By continuing, I agree to the", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
                    className: "text-black",
                    children: "Terms of Use"
                  }), " &", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
                    className: "text-black",
                    children: "Privacy Policy"
                  }), ' ']
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "w-full mt-6 mb-2 block text-right",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
                className: "w-auto mt-6 mb-2 block text-right flex justify-end",
                "data-testid": "submitButton",
                children: isCheckedTerms === true && disableButton === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                  className: `w-auto btt-primary bg-blue-400 rounded-full text-white  hover:bg-blue-500`,
                  label: "Get Verification Code",
                  type: "submit",
                  name: "button"
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ui_components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                  className: `w-auto btt-primary bg-gray-300 rounded-full text-black `,
                  label: "Get Verification Code",
                  type: "submit",
                  name: "button"
                })
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: "clear-both"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "w-full absolute bottom-4 left-0 text-center text-gray-400",
          children: ["Having trouble logging in?", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
            className: "underline text-blue-400 font-medium",
            children: "Get Help"
          })]
        })]
      })]
    })
  });
};

/***/ })

};
;