(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ImageView = ({
  className,
  src,
  alt,
  height,
  width
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    src: src,
    width: width,
    height: height,
    unoptimized: true,
    className: className,
    alt: alt
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageView);

/***/ }),

/***/ 5774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/logo-footer.svg
/* harmony default export */ const logo_footer = ({"src":"/_next/static/media/logo-footer.c171e5a7.svg","height":176,"width":130});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ui-components/LogoSecond.tsx





const LogoSecond = ({
  src,
  className,
  alt
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
    src: logo_footer,
    width: 80,
    height: 108,
    unoptimized: true,
    className: className,
    alt: alt
  });
};

/* harmony default export */ const ui_components_LogoSecond = (LogoSecond);
// EXTERNAL MODULE: ./src/lib/SidebarListApi.tsx
var SidebarListApi = __webpack_require__(6144);
;// CONCATENATED MODULE: ./src/components/ui/AppLayout/Footer.tsx
/* eslint-disable @nrwl/nx/enforce-module-boundaries */





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "block md:flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full mt-2 mb-5 mr-5 md:w-1/6",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_components_LogoSecond, {
              src: "/images/logo.svg",
              className: "inline-block logo",
              alt: "Logo"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "block w-full md:flex md:w-11/12",
            children: SidebarListApi/* footerData.map */.a5.map(serve => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w-full",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "font-semibold uppercase text-lg",
                children: serve.Header
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: serve.data.map(i => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: i
                  })
                }))
              })]
            }))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "clear-both"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative copyright",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "left",
            children: "Copyright \xA9 2022-23 Fawow Pvt Ltd."
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "right mt flex",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "block p-1 rounded-sm hover:bg-gray-200",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/fb-icon.svg",
                className: "w-6 h-4",
                alt: "Facebook"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "block p-1 rounded-sm hover:bg-gray-200",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/insta-icon.svg",
                className: "w-6 h-4",
                alt: "Instagram"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "block p-1 rounded-sm hover:bg-gray-200",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/twitter-icon.svg",
                className: "w-6 h-4",
                alt: "Twitter"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "block p-1 rounded-sm hover:bg-gray-200",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/msg-icon.svg",
                className: "w-6 h-4",
                alt: "Mail"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "clear-both"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "clear-both"
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/ui/AppLayout/Header.tsx




const Header = ({
  pathName
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container navbar py-3",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "navbar-start w-40",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              tabIndex: 0,
              className: "btn btn-ghost px-2 mr-2 lg:hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M4 6h16M4 12h8m-8 6h16"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              tabIndex: 0,
              className: "menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-b-2xl w-64 rounded-t-none",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex p-3 bg-slate-200",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/offers-icon.svg",
                    className: "w-10",
                    alt: "offers"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "relative ml-8",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/cart-icon.svg",
                    className: "mt-3 mr-5 w-7",
                    alt: "Cart"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "absolute right-0 top-0 bg-red-700 rounded-full text-white w-6 h-6 text-center text-sm leading-5 pt-0.5",
                    children: "88"
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                onClick: () => router.push('/product'),
                className: "flex p-3 bg-slate-100 cursor-pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ml-0",
                  children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "MyBiz"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ml-auto mt-4",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/right-arrow.svg",
                    alt: " ",
                    className: "w-2"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "flex p-3",
                onClick: () => router.push('/profile'),
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/user-icon.svg",
                  className: "w-4 mr-2 cursor-pointer",
                  alt: "user icon"
                }), ' ', "My Account"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "flex p-3 cursor-pointer",
                onClick: () => router.push('/'),
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logout-icon.svg",
                  className: "w-4 mr-2",
                  alt: "logout icon"
                }), ' ', "Logout"]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "normal-case text-xl py-3",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/logo.svg",
              className: "w-40",
              alt: "Fawow Logo"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navbar-center hidden ml-auto lg:flex",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "menu menu-horizontal p-0",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex ml-auto",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex mt-2 ml-6 lg:ml-8 relative",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "header-search h-11 rounded-3xl pl-5 pr-14",
                  type: "text",
                  name: "search",
                  placeholder: "Search for Products, Brands and More"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "absolute right-0 top-0 rounded-r-3xl h-11 pr-5 pl-4 pt-2.5 hover:bg-gray-200",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/search-icon.svg",
                    className: "w-5",
                    alt: "Search"
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex pt-2 items-center",
                children: [pathName != 'product' && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ml-6 lg:ml-8 cursor-pointer",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => router.push('/product'),
                    className: "rounded-3xl bg-blue-400 text-white px-6 h-8 leading-8 inline-block cursor-pointer\t",
                    children: "MyBiz"
                  })
                }), pathName === 'product' && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ml-6 lg:ml-8 cursor-pointer",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => router.push('/dashboard'),
                    className: "rounded-3xl bg-blue-400 text-white px-6 h-8 leading-8 inline-block cursor-pointer",
                    children: "My Fawow"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ml-6 lg:ml-8",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/offers-icon.svg",
                    className: "w-10",
                    alt: "offers"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "relative ml-8",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/cart-icon.svg",
                    className: "mt-3 mr-5 w-7",
                    alt: "Cart"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "absolute right-0 top-0 bg-red-700 rounded-full text-white w-6 h-6 text-center text-sm leading-5 pt-0.5",
                    children: "88"
                  })]
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "dropdown dropdown-end block ml-auto lg:hidden",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            tabIndex: 0,
            className: "inline-flex cursor-pointer",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/search-icon.svg",
              className: "w-5",
              alt: "Search"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            tabIndex: 0,
            className: "dropdown-content menu shadow bg-base-100 rounded-b-2xl w-72 rounded-t-none mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "relative p-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "header-search h-11 rounded-3xl pl-5 pr-14",
                type: "text",
                name: "search",
                placeholder: "Search for Products, Brands and More"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "absolute right-0 top-0 rounded-r-3xl h-11 pr-5 pl-4 pt-2.5 hover:bg-gray-200",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/search-icon.svg",
                  className: "w-5 mt-2",
                  alt: "Search"
                })
              })]
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navbar-end mr-0 ml-auto w-auto md:ml-0 hidden lg:block",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown dropdown-end ml-6 lg:ml-8",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              tabIndex: 0,
              className: "inline-flex cursor-pointer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "float-left rounded-full w-10 h-10 bg-slate-300 mr-2 text-center truncate",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/demo-user-icon.jpg",
                  alt: "User"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "float-left flex whitespace-nowrap mt-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "images/down-arrow.svg",
                  className: "float-right w-3 ml-2",
                  alt: ""
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              tabIndex: 0,
              className: "dropdown-content menu shadow bg-base-100 rounded-b-2xl w-56 rounded-t-none mt-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "cursor-pointer",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  onClick: () => router.push('/profile'),
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/user-icon.svg",
                    className: "w-4",
                    alt: "user icon"
                  }), ' ', "My Account"]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "cursor-pointer",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  onClick: () => router.push('/'),
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/logout-icon.svg",
                    className: "w-4",
                    alt: "logout icon"
                  }), ' ', "Logout"]
                })
              })]
            })]
          })
        })]
      }), pathName === 'home-seller' && /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/demo-banner-seller.jpg",
          alt: "banner",
          className: "w-full"
        })
      }), pathName === 'dashboard' && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cursor-pointer",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/demo-banner-1.jpg",
          alt: "Banner",
          className: "h-30 md:h-auto"
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/ui/AppLayout/Sidebar.tsx
/* eslint-disable @nrwl/nx/enforce-module-boundaries */






const Sidebar = ({
  pathName
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: bgcolor,
    1: setBgcolor
  } = (0,external_react_.useState)(1);
  const {
    0: isActiveMyAccount,
    1: setActiveMyAccount
  } = (0,external_react_.useState)(false);
  const {
    0: isSidebarUrl,
    1: setSidebarUrl
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (pathName === 'profile') {
      setBgcolor(0);
      setActiveMyAccount(true);
    } else {
      var _sidebarMenu$find;

      setBgcolor(SidebarListApi/* sidebarMenu */.s === null || SidebarListApi/* sidebarMenu */.s === void 0 ? void 0 : (_sidebarMenu$find = SidebarListApi/* sidebarMenu.find */.s.find(i => (i === null || i === void 0 ? void 0 : i.url) === `/${pathName}`)) === null || _sidebarMenu$find === void 0 ? void 0 : _sidebarMenu$find.id);
      setActiveMyAccount(false);
    }
  }, [pathName]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-full left-contant hidden lg:w-1/5 lg:block pt-5 cursor-pointer",
    children: [pathName === 'profile' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center mt-6 mb-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "overflow-hidden rounded-full w-16 h-16 mr-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "images/demo-user-icon.jpg",
            alt: "user"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "font-medium text-base",
          children: "Seller Name"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-medium text-gray-400 text-xs",
          children: "+91 - 9605148523"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: pathName === 'profile' && /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: `${isActiveMyAccount ? `active` : ``}`,
        onClick: () => {
          setActiveMyAccount(true);
          setSidebarUrl(false);
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: `My Account`
        })
      })
    }), SidebarListApi/* sidebarMenu.map */.s.map(serve => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        onClick: () => {
          setBgcolor(serve.id);
          router === null || router === void 0 ? void 0 : router.push(serve === null || serve === void 0 ? void 0 : serve.url);
          setSidebarUrl(true);
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: () => {
            setActiveMyAccount(false);
            setSidebarUrl(true);
          },
          className: `${serve.id === bgcolor ? `active` : ''}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: serve.label
          })
        })
      }, serve.id)
    }))]
  });
};
// EXTERNAL MODULE: ./src/components/ui-components/imageView.tsx
var imageView = __webpack_require__(5871);
;// CONCATENATED MODULE: ./src/components/ui/AppLayout/SignupHeader.tsx


const SignupHeader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container navbar py-3",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "navbar-start w-40",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "normal-case text-xl",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-40 py-3",
            children: /*#__PURE__*/jsx_runtime_.jsx(imageView/* default */.Z, {
              src: "/images/logo.svg",
              alt: "Fawow Logo",
              width: 160,
              height: 71
            })
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/ui/AppLayout/Layout.tsx








const Layout = ({
  children
}) => {
  const router = (0,router_.useRouter)();
  const pathName = router.pathname.toLocaleLowerCase().replace(/\//g, '');
  const signupHeaders = pathName === 'user-enroll' || pathName === 'user-enrollcategories' || pathName === 'categories';
  const headerVisibility = !(pathName === '' || pathName === 'login' || pathName === 'translate' || pathName === 'select-buyer-seller' || pathName === 'signupverify-otp' || pathName === 'user-updation' || pathName === 'categories' || pathName === 'forgot-password' || pathName === 'reset-password' || pathName === 'signup');
  const sidebarVisibility = pathName === 'dashboard';
  const page = children;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: signupHeaders ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "main_outer",
      children: [/*#__PURE__*/jsx_runtime_.jsx(SignupHeader, {}), /*#__PURE__*/jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container flex",
          children: page
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "clear-both"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full pb-10 text-center text-gray-400",
        children: ["Having trouble logging in?", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "underline text-blue-400 font-medium",
          children: "Get Help"
        })]
      })]
    }) : headerVisibility ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "main_outer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
          pathName
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "container flex",
            children: [!sidebarVisibility && /*#__PURE__*/jsx_runtime_.jsx(Sidebar, {
              pathName
            }), page]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "clear-both"
        })]
      })
    }) : page
  });
};
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: ./src/lib/redux/reducers/session.ts
var session = __webpack_require__(8855);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: ./src/lib/redux/store.ts





const persistConfig = {
  key: 'root',
  storage: (storage_default()),
  whitelist: ['authSession']
};
const reducers = (0,external_redux_namespaceObject.combineReducers)({
  authSession: session/* default */.ZP
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, reducers);
const store = (0,toolkit_.configureStore)({
  reducer: persistedReducer,
  devTools: false,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [external_redux_persist_namespaceObject.FLUSH, external_redux_persist_namespaceObject.REHYDRATE, external_redux_persist_namespaceObject.PAUSE, external_redux_persist_namespaceObject.PERSIST, external_redux_persist_namespaceObject.PURGE, external_redux_persist_namespaceObject.REGISTER]
    }
  })
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(5800);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















fontawesome_svg_core_namespaceObject.config.autoAddCss = false;

function CustomApp({
  Component,
  pageProps
}) {
  const {
    0: queryClient
  } = (0,external_react_.useState)(() => new external_react_query_.QueryClient());
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Fawow"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
      client: queryClient,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_query_.Hydrate, {
        state: pageProps.dehydratedState,
        children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
              loading: null,
              persistor: persistor,
              children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
            })
          })
        })
      })
    })]
  });
}

/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(CustomApp));

/***/ }),

/***/ 5800:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,855,144], () => (__webpack_exec__(5774)));
module.exports = __webpack_exports__;

})();