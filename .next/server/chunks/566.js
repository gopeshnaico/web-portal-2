"use strict";
exports.id = 566;
exports.ids = [566];
exports.modules = {

/***/ 9767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6521);


const endpoint = process.env.NEXT_PUBLIC_API_URL || '';

const graphQLClient = headers => {
  const authState = (0,_lib_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(state => state.authSession);
  const requestHeaders = {
    authorization: `Bearer ${authState.authToken}`
  };
  return new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(endpoint, {
    credentials: 'include',
    headers: requestHeaders
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (graphQLClient);

/***/ }),

/***/ 7566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ CategoryPage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/domain/api/graphql.ts
var graphql = __webpack_require__(7110);
// EXTERNAL MODULE: ./src/GqQuery/useGQLQuery.ts
var useGQLQuery = __webpack_require__(9767);
// EXTERNAL MODULE: ./src/lib/errorHandling.tsx
var errorHandling = __webpack_require__(3443);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui-components/button.tsx
var ui_components_button = __webpack_require__(391);
// EXTERNAL MODULE: ./src/components/ui-components/headingLabel.tsx
var headingLabel = __webpack_require__(5007);
// EXTERNAL MODULE: ./src/components/ui-components/checkboxWithoutLabel.tsx
var checkboxWithoutLabel = __webpack_require__(2410);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ui/Category/category.tsx








const CategoryForm = ({
  updateCategories,
  categoryData,
  setCategoryData
}) => {
  const router = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const isButtonDisabled = categoryData !== null && categoryData !== void 0 && categoryData.find(category => category.isChecked === true) ? false : true;
  const buttonLabel = (router === null || router === void 0 ? void 0 : router.pathname) === '/categories' ? 'Save' : 'Next';

  const updateChecking = id => {
    const data = categoryData.map(i => {
      if (i.id === id) {
        i.isChecked = !i.isChecked;
      }

      return i;
    });
    setCategoryData(data);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-6 mx-auto w-full sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-6/12",
    "data-testid": "cardDiv",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-4",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(headingLabel/* default */.Z, {
          className: "mt-8 mb-2 text-2xl",
          labelText: "Select your categories of interest"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "mb-2",
          children: "Select atleast one to serve you better"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "clear-both"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bg-slate-100 border-2 border-slate-200 mb-10 p-3 mx-auto shadow-lg rounded-lg w-full sm:p-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "category-checkbox-main-outer",
        children: categoryData === null || categoryData === void 0 ? void 0 : categoryData.map(category => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "float-left w-full md:w-4/12 lg:w-4/12 w-6/12 category-checkbox-outer",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            className: "category-checkbox",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "category-checkbox-txt",
              children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: category.Asset.AssetStore.storage,
                width: 70,
                height: 70,
                unoptimized: true
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "clear-both"
              }), category.name]
            }), /*#__PURE__*/jsx_runtime_.jsx(checkboxWithoutLabel/* default */.Z, {
              isChecked: category.isChecked,
              onChange: () => updateChecking(category.id)
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "checkmark"
            })]
          })
        }, category.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "clear-both"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "clear-both"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full mt-4 text-right",
      children: [(router === null || router === void 0 ? void 0 : router.pathname) === '/categories' && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-auto mt-4 md:inline-block ",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_components_button/* default */.Z, {
          className: "px-8 h-10 leading-10 w-auto bg-gray-200 rounded-3xl mr-3 hover:bg-gray-300 inline-block",
          label: "Back",
          type: "button",
          onClick: () => router === null || router === void 0 ? void 0 : router.back()
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_components_button/* default */.Z, {
        isDisabled: isButtonDisabled,
        onClick: () => {
          updateCategories();
        },
        className: `px-8 h-10 leading-10 w-auto bg-blue-500 rounded-3xl  inline-block text-white ${isButtonDisabled ? 'opacity-70 hover:bg-blue-500' : 'hover:bg-blue-400'}`,
        label: buttonLabel,
        type: "button"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/pages/CategoryPage.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const CategoryPage = () => {
  const router = (0,router_.useRouter)();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)({});
  const {
    0: categoryData,
    1: setCategoryData
  } = (0,external_react_.useState)([]);
  const {
    data: categoryList
  } = (0,graphql/* useCategoriesQuery */.Ei)((0,useGQLQuery/* default */.Z)(), {});
  const {
    data: userPreferences
  } = (0,graphql/* useUserPreferencesQuery */.$N)((0,useGQLQuery/* default */.Z)(), {});
  const userPreference = userPreferences === null || userPreferences === void 0 ? void 0 : userPreferences.userPreferences;
  (0,external_react_.useEffect)(() => {
    var _categoryList$categor;

    const categoryUpdated = categoryList === null || categoryList === void 0 ? void 0 : (_categoryList$categor = categoryList.categories) === null || _categoryList$categor === void 0 ? void 0 : _categoryList$categor.map(category => {
      const checkedStatus = userPreference !== null && userPreference !== void 0 && userPreference.find(preference => preference.categoryHeaderId === category.id) ? true : false;
      return _objectSpread(_objectSpread({}, category), {}, {
        isChecked: checkedStatus
      });
    });
    setCategoryData(categoryUpdated);
  }, [categoryList, userPreference]);
  const mutation = (0,graphql/* useCategoryUpdateMutation */.li)((0,useGQLQuery/* default */.Z)());

  const updateCategories = async () => {
    const addedCategories = categoryData.filter(category => category.isChecked === true);
    const deletedCategories = categoryData.filter(category => category.isChecked === false);
    const addCategoryIds = addedCategories.map(i => {
      return {
        categoryHeaderId: i.id
      };
    });
    const deleteCategoryIds = deletedCategories.map(i => {
      var _userPreference$find;

      return {
        channelId: {
          equals: userPreference === null || userPreference === void 0 ? void 0 : (_userPreference$find = userPreference.find(j => j.categoryHeaderId === i.id)) === null || _userPreference$find === void 0 ? void 0 : _userPreference$find.channelId
        },
        categoryHeaderId: {
          equals: i.id
        }
      };
    });

    if (addedCategories.length !== 0) {
      const variable = {
        data: {
          UserPreference: {
            createMany: {
              data: addCategoryIds
            }
          }
        }
      };
      await mutation.mutateAsync(variable).then(response => {
        if (response.updateUser) {
          router.push('/dashboard');
        }
      }).catch(error => {
        setOpen(true);
        setMessage(error.response);
      });
    }

    if (deletedCategories.length !== 0) {
      const variable = {
        data: {
          UserPreference: {
            deleteMany: deleteCategoryIds
          }
        }
      };
      await mutation.mutateAsync(variable).then(response => {
        if (response.updateUser) {
          router.push('/dashboard');
        }
      }).catch(error => {
        setOpen(true);
        setMessage(error.response);
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [open && /*#__PURE__*/jsx_runtime_.jsx(errorHandling/* ErrorHandlingWithResponse */.q, {
      error: message,
      setErrorOpen: setOpen
    }), /*#__PURE__*/jsx_runtime_.jsx(CategoryForm, {
      updateCategories,
      categoryData,
      setCategoryData
    })]
  });
};

/***/ })

};
;