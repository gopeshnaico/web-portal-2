"use strict";
exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 8855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DZ": () => (/* binding */ updateCustomerId),
/* harmony export */   "JS": () => (/* binding */ updateAuth),
/* harmony export */   "Kk": () => (/* binding */ selectCategoryDetailsInCreateProduct),
/* harmony export */   "Vf": () => (/* binding */ updateCategoryDetailsInCreateProduct),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ZR": () => (/* binding */ selectLoggedCustomerId),
/* harmony export */   "aS": () => (/* binding */ updatePhone),
/* harmony export */   "bD": () => (/* binding */ selectPhone),
/* harmony export */   "sR": () => (/* binding */ selectAuthToken)
/* harmony export */ });
/* unused harmony exports sessionSlice, getAttempt, updateSelection, selectSelection, selectAttempt */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  buyerOrSeller: '',
  authToken: '',
  phone: '',
  attempt: 0,
  loggedCustomerId: '',
  categoryDetailsInCreateProduct: {
    categoryHeaderName: '',
    categoryId: ''
  }
};
const sessionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'authSession',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions.
  reducers: {
    updateAuth: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes
      state.authToken = action.payload;
    },
    updateSelection: (state, action) => {
      state.buyerOrSeller = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    getAttempt: (state, action) => {
      state.attempt = action.payload;
    },
    updateCustomerId: (state, action) => {
      state.loggedCustomerId = action.payload;
    },
    updateCategoryDetailsInCreateProduct: (state, action) => {
      state.categoryDetailsInCreateProduct = action === null || action === void 0 ? void 0 : action.payload;
    }
  }
}); // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.

const {
  updateAuth,
  getAttempt,
  updatePhone,
  updateSelection,
  updateCustomerId,
  updateCategoryDetailsInCreateProduct
} = sessionSlice.actions; // calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.

const selectSelection = state => state.authSession.buyerOrSeller;
const selectPhone = state => state.authSession.phone;
const selectAttempt = state => state.authSession.attempt;
const selectAuthToken = state => state.authSession.authToken;
const selectLoggedCustomerId = state => state.authSession.loggedCustomerId;
const selectCategoryDetailsInCreateProduct = state => state.authSession.categoryDetailsInCreateProduct; // exporting the reducer here, as we need to add this to the store

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionSlice.reducer);

/***/ })

};
;