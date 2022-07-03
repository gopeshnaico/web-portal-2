"use strict";
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 6144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a5": () => (/* binding */ footerData),
/* harmony export */   "s": () => (/* binding */ sidebarMenu),
/* harmony export */   "t7": () => (/* binding */ documentUpload),
/* harmony export */   "wA": () => (/* binding */ getDocumentData)
/* harmony export */ });
const sidebarMenu = [{
  id: 1,
  label: 'Products',
  url: '/product'
}, {
  id: 2,
  label: 'Brands',
  url: '/my-brands'
}, {
  id: 3,
  label: 'Report',
  url: ''
}, {
  id: 4,
  label: 'My Orders',
  url: ''
}, {
  id: 5,
  label: 'Returns',
  url: ''
}, {
  id: 6,
  label: 'Finance',
  url: ''
}, {
  id: 7,
  label: 'Ratings',
  url: ''
}, {
  id: 8,
  label: 'Offers & Discount',
  url: ''
}, {
  id: 9,
  label: 'Manage Bank Accounts',
  url: ''
}, {
  id: 10,
  label: 'My Store',
  url: ''
}, {
  id: 11,
  label: 'Manage Address',
  url: '/manage-address'
}, {
  id: 12,
  label: 'KYC Details',
  url: ''
}, {
  id: 13,
  label: 'Manage Favorite Categories',
  url: '/categories'
}, {
  id: 14,
  label: 'Manage User Accounts'
}, {
  id: 15,
  label: 'Logout',
  url: '/'
}];
const footerData = [{
  id: 1,
  Header: 'Fawow',
  data: ['Who We Are', 'Join Our Team', 'Terms & Conditions', 'We Respect Your Privacy', 'Fees & Payments', 'Returns & Refunds Policy', 'Promotions', 'Terms & Conditions']
}, {
  id: 2,
  Header: 'Help',
  data: ['Track Your Order', 'Frequently Asked Questions', 'Returns', 'Cancellations', 'Payments', 'Customer Care', 'How Do I Redeem My Coupon']
}, {
  id: 3,
  Header: 'Shop by',
  data: ['Men', 'Women', 'Kids', 'Brand Directory']
}];
const documentUpload = [{
  id: 1,
  documentName: 'Trademark Certificate',
  description: 'Registered Trademark Certificate issued by the Government of India'
}, {
  id: 2,
  documentName: 'Trademark Application',
  description: 'Application for registration of a Trademark'
}, {
  id: 3,
  documentName: 'Letterhead',
  description: 'Declaration printed on Letterhead'
}];
const getDocumentData = id => documentUpload.find(document => document.id == id);

/***/ })

};
;