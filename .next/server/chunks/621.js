"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 6246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6521);
/* harmony import */ var _lib_redux_reducers_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8855);



const endpoint = process.env.NEXT_PUBLIC_API_URL || '';

const graphQLClient = headers => {
  const token = (0,_lib_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_lib_redux_reducers_session__WEBPACK_IMPORTED_MODULE_2__/* .selectAuthToken */ .sR);
  const requestHeaders = {
    authorization: `Bearer ${token}`
  };
  return new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(endpoint, {
    credentials: 'include',
    headers: requestHeaders
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (graphQLClient);

/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ validationMessages),
/* harmony export */   "v": () => (/* binding */ validationSchemaMessages)
/* harmony export */ });
const validationMessages = {
  name: 'Name is required',
  nameMinimum: 'Minimum 5 characters',
  nameMaximum: 'Maximum 250 characters',
  yearMaximum: 'Must contain 4 characters',
  mobileNumber: 'Mobile Number is required',
  email: 'Email is required',
  establishmentYear: 'Establishment Year is required',
  businessType: 'BusinessType is required',
  gst: 'GST is required',
  gstMinimum: 'Minimum 14 Characters',
  gstMaximum: 'Maximum 15 Characters',
  description: 'Description is required',
  onlyNumbers: 'Must be include only digits',
  alphaNumerics: 'Must only include alphanumerics',
  panNo: 'Must be valid pan format',
  alphabets: 'Must only include alphabets',
  fullName: 'Full Name is required',
  companyPan: 'Company Pan is required',
  companyEmail: 'Company Email is required',
  companyName: 'Company name is required',
  pincodeValidation: 'Pincode is invalid, only contains numbers with 6 digits',
  mobileNumberValidation: 'Phone Number is invalid, must contain only numbers with 10 digits',
  address: 'Address is required',
  state: 'State is required',
  district: 'District is required',
  city: 'City is required',
  pincode: 'Pincode is required',
  emailValidation: 'Email Id is invalid'
};
const validationSchemaMessages = {
  email: {
    required: 'Email Id is required',
    maxLength: 'Email Id should not exceed 255 characters',
    valid: 'Must be a valid email'
  },
  password: {
    required: 'Password is required',
    maxLength: 'Password should not exceed 16 characters',
    minLength: 'Password must be at least 8 characters',
    valid: 'Must be a valid email'
  },
  newPassword: {
    required: 'Password is required',
    maxLength: 'Password should not exceed 16 characters',
    match: 'Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
  },
  confirmPassword: {
    required: 'Email Id is required',
    confirmMatchMessage: 'Your passwords do not match.'
  }
};

/***/ })

};
;