(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{9767:function(e,n,t){"use strict";var r=t(8687),a=t(6521),s=t(4155).env.NEXT_PUBLIC_API_URL||"";n.Z=function(e){var n=(0,a.C)((function(e){return e.authSession})),t={authorization:"Bearer ".concat(n.authToken)};return new r.GraphQLClient(s,{credentials:"include",headers:t})}},391:function(e,n,t){"use strict";var r=t(9499),a=t(4730),s=(t(7294),t(5893)),i=["label","type","className","onClick","name","isDisabled","src"];function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.label,t=e.type,r=e.className,o=e.onClick,u=(e.name,e.isDisabled),c=(e.src,(0,a.Z)(e,i));return(0,s.jsx)("button",d(d({name:"button",type:t,className:r},c),{},{onClick:o,disabled:u,children:n}))}},5007:function(e,n,t){"use strict";var r=t(5893);n.Z=function(e){var n=e.labelText,t=e.className;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h1",{className:t,children:n})})}},970:function(e,n,t){"use strict";var r=t(9499),a=t(4730),s=(t(7294),t(5893)),i=["placeholder","type","className","register","name","disabled","maxLength","onChange","onKeyDown","id"];function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.placeholder,t=e.type,r=e.className,o=e.register,u=e.name,c=e.disabled,l=e.maxLength,m=e.onChange,p=e.onKeyDown,f=e.id,h=(0,a.Z)(e,i);return(0,s.jsx)("input",d(d(d({type:t,className:r},o(u)),{},{placeholder:n,name:u},h),{},{disabled:null!==c&&void 0!==c&&c,maxLength:l,onChange:m,onKeyDown:p,id:f}))}},7705:function(e,n,t){"use strict";var r=t(5893);n.Z=function(e){var n=e.labelText,t=e.className;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{className:t,children:[n," "]})})}},7110:function(e,n,t){"use strict";t.d(n,{$N:function(){return N},As:function(){return s},BG:function(){return C},Ei:function(){return I},MB:function(){return l},MO:function(){return $},Mz:function(){return g},W9:function(){return v},ac:function(){return A},ct:function(){return w},gl:function(){return B},lJ:function(){return P},li:function(){return k},n9:function(){return U},o6:function(){return j},o8:function(){return h},qo:function(){return L},sH:function(){return b},tb:function(){return x},te:function(){return T},vp:function(){return m},wE:function(){return D},y0:function(){return f},yY:function(){return p},yi:function(){return O},zh:function(){return y}});var r,a,s,i=t(29),o=t(7794),d=t.n(o),u=t(8767);function c(e,n,t,r){return(0,i.Z)(d().mark((function a(){return d().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",e.request(n,t,r));case 1:case"end":return a.stop()}}),a)})))}!function(e){e.BrandId="brandId",e.CategoryId="categoryId",e.CreatedAt="createdAt",e.CreatedBy="createdBy",e.Description="description",e.Discount="discount",e.Hsn="hsn",e.Id="id",e.IsActive="isActive",e.IsGeoRestricted="isGeoRestricted",e.IsGstInclude="isGstInclude",e.IsPriceVisible="isPriceVisible",e.IsRemoved="isRemoved",e.ListingExpiry="listingExpiry",e.Moq="moq",e.MrPrice="mrPrice",e.Name="name",e.Sku="sku",e.Stock="stock",e.Tags="tags",e.UnitPrice="unitPrice",e.UpdatedAt="updatedAt",e.UpdatedBy="updatedBy",e.WorkFlowContextInstanceId="workFlowContextInstanceId"}(r||(r={})),function(e){e.Default="default",e.Insensitive="insensitive"}(a||(a={})),function(e){e.Asc="asc",e.Desc="desc"}(s||(s={}));var l=function(e,n,t){return(0,u.useMutation)(["SendOtpMutation"],(function(n){return c(e,"\n    mutation SendOtpMutation($data: SendOTPInput!) {\n  sendOTP(data: $data) {\n    isSend\n    message\n    secondsLeft\n    otp\n  }\n}\n    ",n,t)()}),n)},m=function(e,n,t){return(0,u.useMutation)(["VerifyOTP"],(function(n){return c(e,"\n    mutation VerifyOTP($data: VerifyOTPInput!) {\n  verifyOTP(data: $data) {\n    token\n    refreshToken\n    message\n    isVerified\n    loginAttemptsLeft\n    isFirstLogin\n    user {\n      fullName\n      id\n      email\n      phone\n      isLocked\n      failedLoginAttempt\n      Customers {\n        customerId\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},p=function(e,n,t){return(0,u.useMutation)(["UserLogin"],(function(n){return c(e,"\n    mutation UserLogin($data: AuthLoginInput!) {\n  passwordLogin(data: $data) {\n    token\n    user {\n      id\n      fullName\n      Customers {\n        customerId\n      }\n    }\n    message\n    isVerified\n  }\n}\n    ",n,t)()}),n)},f=function(e,n,t){return(0,u.useMutation)(["SendUserPasswordResetLink"],(function(n){return c(e,"\n    mutation SendUserPasswordResetLink($data: SendUserPasswordResetLinkInput!) {\n  sendUserPasswordResetLink(data: $data) {\n    message\n    isSuccess\n  }\n}\n    ",n,t)()}),n)},h=function(e,n,t){return(0,u.useMutation)(["RedeemUserPasswordResetToken"],(function(n){return c(e,"\n    mutation RedeemUserPasswordResetToken($data: RedeemUserPasswordResetTokenInput!) {\n  redeemUserPasswordResetToken(data: $data) {\n    message\n    isVerified\n  }\n}\n    ",n,t)()}),n)},b=function(e,n,t){return(0,u.useMutation)(["AddAddress"],(function(n){return c(e,"\n    mutation AddAddress($data: AddressTypeUpdateInput!) {\n  createAddress(data: $data) {\n    id\n  }\n}\n    ",n,t)()}),n)},g=function(e,n,t,r){return(0,u.useQuery)(void 0===n?["GetAddress"]:["GetAddress",n],c(e,"\n    query GetAddress($where: CustomerAddressWhereInput) {\n  addresses(where: $where) {\n    id\n    shopName\n    contactName\n    phone\n    addressLine1\n    addressLine2\n    landmark\n    pincode\n    gstin\n    defaultBilling\n    defaultShipping\n    isActive\n  }\n}\n    ",n,r),t)},y=function(e,n,t){return(0,u.useMutation)(["UpdateAddress"],(function(n){return c(e,"\n    mutation UpdateAddress($data: UpdateAddressInputDTO!, $where: AddressWhereUniqueInput) {\n  updateAddress(data: $data, where: $where) {\n    id\n    shopName\n    contactName\n    phone\n    addressLine1\n    addressLine2\n    landmark\n    pincode\n    gstin\n    defaultBilling\n    defaultShipping\n  }\n}\n    ",n,t)()}),n)},w=function(e,n,t){return(0,u.useMutation)(["DeleteAddress"],(function(n){return c(e,"\n    mutation DeleteAddress($where: AddressWhereUniqueInput) {\n  deleteAddress(where: $where) {\n    id\n    addressTypeId\n  }\n}\n    ",n,t)()}),n)},x=function(e,n,t){return(0,u.useMutation)(["EnrollUser"],(function(n){return c(e,"\n    mutation EnrollUser($data: EnrollUserInput!) {\n  enrollUser(data: $data) {\n    id\n    name\n    channelId\n    Users {\n      User {\n        fullName\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},v=function(e,n,t,r){return(0,u.useQuery)(["ViewCustomerDetails",n],c(e,"\n    query ViewCustomerDetails($where: CustomerWhereDetailInput!) {\n  customer(where: $where) {\n    name\n    CustomerEnrollmentValue {\n      attributeId\n      attributeValueText\n      Attribute {\n        name\n      }\n    }\n    EnrollmentType {\n      id\n      name\n    }\n  }\n}\n    ",n,r),t)},I=function(e,n,t,r){return(0,u.useQuery)(void 0===n?["Categories"]:["Categories",n],c(e,"\n    query Categories {\n  categories {\n    id\n    name\n    description\n    logoAssetId\n    Asset {\n      id\n      AssetStore {\n        storage\n      }\n    }\n    CategoryLinkedCategoryHeader {\n      Category {\n        id\n        name\n      }\n    }\n  }\n}\n    ",n,r),t)},k=function(e,n,t){return(0,u.useMutation)(["CategoryUpdate"],(function(n){return c(e,"\n    mutation CategoryUpdate($data: UserUpdateInputDto!) {\n  updateUser(data: $data) {\n    email\n    UserPreference {\n      userId\n      channelId\n      categoryHeaderId\n      CategoryHeader {\n        name\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},N=function(e,n,t,r){return(0,u.useQuery)(void 0===n?["UserPreferences"]:["UserPreferences",n],c(e,"\n    query UserPreferences {\n  userPreferences {\n    id\n    userId\n    channelId\n    categoryHeaderId\n    CategoryHeader {\n      id\n      name\n    }\n  }\n}\n    ",n,r),t)},j=function(e,n,t){return(0,u.useMutation)(["UpdateCustomerDetails"],(function(n){return c(e,"\n    mutation UpdateCustomerDetails($data: UpdateCustomerDto!) {\n  updateCustomer(data: $data) {\n    id\n    name\n  }\n}\n    ",n,t)()}),n)},A=function(e,n,t,r){return(0,u.useQuery)(["Brands",n],c(e,"\n    query Brands($where: BrandWhereInputDTO, $take: Int, $skip: Int, $orderBy: [BrandOrderByWithRelationInputDTO!], $brandsCountWhere2: BrandWhereInputDTO!) {\n  brands(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    name\n    decription\n    BrandRelation {\n      id\n      name\n    }\n    WorkFlowContextInstance {\n      WorkFlowStatus {\n        name\n      }\n    }\n    rating\n    logoURL\n  }\n  brandsCount(where: $brandsCountWhere2)\n}\n    ",n,r),t)},$=function(e,n,t){return(0,u.useMutation)(["AddBrand"],(function(n){return c(e,"\n    mutation AddBrand($data: BrandCreateInput!) {\n  createBrand(data: $data) {\n    id\n    name\n    decription\n    customerId\n  }\n}\n    ",n,t)()}),n)},C=function(e,n,t,r){return(0,u.useQuery)(["ProductDetailsAttributeList",n],c(e,"\n    query ProductDetailsAttributeList($where: CategoryWhereUniqueInput!) {\n  ProductDetailsAttributeList(where: $where) {\n    Attributes {\n      Attribute {\n        id\n        name\n        AttributeValue {\n          id\n          name\n          AttributeValue_TL {\n            name\n          }\n        }\n        Attribute_TL {\n          name\n        }\n        AttributeControlTypeValue {\n          controlValue\n          AttributeControlType {\n            controlField\n          }\n        }\n      }\n    }\n  }\n}\n    ",n,r),t)},P=function(e,n,t,r){return(0,u.useQuery)(["BrandDetails",n],c(e,"\n    query BrandDetails($where: BrandWhereUniqueInput!) {\n  brand(where: $where) {\n    id\n    name\n    decription\n    customerId\n    BrandRelation {\n      id\n      name\n    }\n    WorkFlowContextInstance {\n      WorkFlowStatus {\n        name\n      }\n    }\n    Products {\n      id\n      name\n      description\n      categoryId\n      brandId\n      unitPrice\n      discount\n      isActive\n      WorkFlowContextInstance {\n        WorkFlowStatus {\n          name\n        }\n      }\n    }\n    logoAssetId\n    BrandAsset {\n      Asset {\n        AssetStore {\n          storage\n        }\n      }\n    }\n  }\n}\n    ",n,r),t)},O=function(e,n,t,r){return(0,u.useQuery)(void 0===n?["ProductListWithBrandId"]:["ProductListWithBrandId",n],c(e,"\n    query ProductListWithBrandId($where: ProductWhereInput, $take: Int, $skip: Int, $orderBy: [ProductOrderByWithRelationInput!]) {\n  products(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    name\n    isActive\n    brandId\n    unitPrice\n    description\n    moq\n    imageUrl\n    discount\n  }\n  productsCount\n}\n    ",n,r),t)},B=function(e,n,t,r){return(0,u.useQuery)(void 0===n?["BrandsSelect"]:["BrandsSelect",n],c(e,"\n    query BrandsSelect($where: BrandWhereInputDTO) {\n  brands(where: $where) {\n    id\n    name\n    logoURL\n  }\n}\n    ",n,r),t)},U=function(e,n,t){return(0,u.useMutation)(["CreateKYC"],(function(n){return c(e,"\n    mutation CreateKYC($data: KYCCreateInput!) {\n  createKYC(data: $data) {\n    id\n    customerId\n    KYCHeader {\n      name\n    }\n    CustomerKYCAsset {\n      Asset {\n        AssetStore {\n          storage\n        }\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},T=function(e,n,t,r){return(0,u.useQuery)(void 0===n?["ProductList"]:["ProductList",n],c(e,"\n    query ProductList($where: ProductWhereInput, $take: Int, $skip: Int, $orderBy: [ProductOrderByWithRelationInput!]) {\n  products(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    name\n    imageUrl\n    description\n    unitPrice\n    isActive\n    moq\n  }\n  productsCount\n}\n    ",n,r),t)},D=function(e,n,t){return(0,u.useMutation)(["UpdateProduct"],(function(n){return c(e,"\n    mutation UpdateProduct($where: ProductWhereUniqueInput!, $data: ProductUpdateInput!) {\n  updateProduct(where: $where, data: $data) {\n    id\n    categoryId\n    isActive\n    name\n  }\n}\n    ",n,t)()}),n)},L=function(e,n,t,r){return(0,u.useQuery)(void 0===n?["Locations"]:["Locations",n],c(e,"\n    query Locations {\n  geoLocations {\n    id\n    name\n    SubGeoLocation {\n      id\n      name\n      parentId\n    }\n  }\n}\n    ",n,r),t)}},6521:function(e,n,t){"use strict";t.d(n,{C:function(){return s},T:function(){return a}});var r=t(9473),a=function(){return(0,r.I0)()},s=r.v9},4185:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(29),a=t(7794),s=t.n(a),i=t(5496),o=t(7536),d=t(1163),u=t.n(d),c=t(6144),l=t(391),m=t(5007),p=t(970),f=t(7705),h=t(5893),b=function(e){var n=e.register,t=e.handleAddBrand,r=e.handleSubmit,a=e.setSelectedDocument,s=e.selectedDocument;return(0,h.jsxs)("div",{className:"w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0","data-testid":"outerDiv",children:[(0,h.jsx)(m.Z,{className:"font-semibold text-xl pb-3",labelText:"Add New Brand"}),(0,h.jsxs)("form",{onSubmit:r(t),children:[(0,h.jsx)("div",{className:"row-outer pt-4",children:(0,h.jsx)("div",{className:"w-full mb-8 px-3 float-left md:w-5/12",children:(0,h.jsxs)("div",{className:"relative z-0 ",children:[(0,h.jsx)(p.Z,{register:n,type:"text",name:"brandName",className:"form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "}),(0,h.jsx)(f.Z,{className:" form-control absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",labelText:"Brand Name"})]})})}),(0,h.jsx)("div",{className:"clear-both"}),(0,h.jsx)("h2",{className:"font-regular text-lg",children:"Select your relationship with Brand"}),(0,h.jsx)("div",{className:"clear-both"}),(0,h.jsxs)("div",{className:"row-outer block flex-wrap md:flex pt-3",children:[(0,h.jsx)("div",{className:"w-full px-3 mb-8 md:w-6/12 lg:w-4/12",children:(0,h.jsx)("div",{className:"form-control",children:(0,h.jsxs)("label",{className:"label cursor-pointer p-0 items-start",children:[(0,h.jsx)(p.Z,{register:n,type:"radio",name:"relationshipType",className:"radio mt-2 checked:bg-blue-400",placeholder:" "}),(0,h.jsxs)("div",{className:"label-text ml-2 w-full",children:[(0,h.jsx)("h3",{className:"font-medium text-base pb-1",children:"Brand Owner"}),(0,h.jsx)("p",{children:"I am an Authorized Distributor or Reseller of the brand"})]})]})})}),(0,h.jsx)("div",{className:"w-full px-3 mb-8 md:w-6/12 lg:w-4/12",children:(0,h.jsx)("div",{className:"form-control",children:(0,h.jsxs)("label",{className:"label cursor-pointer p-0 items-start",children:[(0,h.jsx)(p.Z,{register:n,type:"radio",name:"relationshipType",className:"radio mt-2 checked:bg-blue-400",placeholder:" "}),(0,h.jsxs)("div",{className:"label-text ml-2 w-full",children:[(0,h.jsx)("h3",{className:"font-medium text-base pb-1",children:"Authorized Distributor / Reseller"}),(0,h.jsx)("p",{children:"I am an Authorized Distributor or Reseller of the brand"})]})]})})}),(0,h.jsx)("div",{className:"w-full px-3 mb-8 md:w-6/12 lg:w-4/12",children:(0,h.jsx)("div",{className:"form-control",children:(0,h.jsxs)("label",{className:"label cursor-pointer p-0 items-start",children:[(0,h.jsx)(p.Z,{register:n,type:"radio",name:"relationshipType",className:"radio mt-2 checked:bg-blue-400",placeholder:" "}),(0,h.jsxs)("div",{className:"label-text ml-2 w-full",children:[(0,h.jsx)("h3",{className:"font-medium text-base pb-1",children:"Wholesaler / Trader"}),(0,h.jsx)("p",{children:"I am a Third Party Seller of this brand"})]})]})})})]}),(0,h.jsxs)("div",{className:"border-2 border-slate-300 mt-5 p-4 rounded-lg",children:[(0,h.jsx)("h2",{className:"font-regular text-lg pb-2",children:"Upload any document as a proff"}),(0,h.jsx)("div",{className:"row-outer block flex-wrap md:flex",children:null===c.t7||void 0===c.t7?void 0:c.t7.map((function(e,n){return(0,h.jsx)("div",{className:"w-full md:w-6/12 lg:w-4/12 px-3",onClick:function(){a(e)},children:(0,h.jsxs)("div",{className:(null===s||void 0===s?void 0:s.id)==e.id?"p-3 text-white rounded-lg bg-blue-400":"p-3 rounded-lg",children:[(0,h.jsxs)("h3",{className:"font-regular text-base pb-1",children:[e.documentName,(null===s||void 0===s?void 0:s.id)==e.id&&(0,h.jsx)("img",{src:"/images/green-check.svg",className:"bg-white border-2 border-white rounded-full w-5 ml-1 mb-1 inline-block",alt:"check"})]}),(0,h.jsx)("p",{className:"text-xs",children:e.description})]},n)})}))})]}),(0,h.jsxs)("div",{className:"w-full mb-8 pt-8 text-center sm:text-right",children:[(0,h.jsx)("a",{className:"btt-seconday font-medium cursor-pointer",children:"Back"}),(0,h.jsx)("span",{onClick:function(){return u().push("add-brand/".concat(null===s||void 0===s?void 0:s.id))},children:(0,h.jsx)(l.Z,{className:"btt ml-0 mt-5 height-56 line-height-56 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full md:w-100  md:h-full md:w-48 sm:w-48 sm:ml-5 sm:mt-0 hover:bg-cyan-500",label:"Continue",src:"images/right-arrow-white.svg",type:"submit"})})]})]})]})},g=t(4231),y=t(9767),w=t(7294),x=t(7110),v=[{id:1,documentName:"Trademark Certificate",description:"Registered Trademark Certificate issued by the Government of India"},{id:2,documentName:"Trademark Application",description:"Application for registration of a Trademark"},{id:3,documentName:"Letterhead",description:"Declaration printed on Letterhead"}],I=function(){var e=(0,w.useState)(""),n=(e[0],e[1]),t=(0,w.useState)({id:1,documentName:"Trademark Certificate",description:"Registered Trademark Certificate issued by the Government of India"}),a=t[0],d=t[1],u=g.Ry().shape({brandName:g.Z_().required("Brand name is required"),relationshipType:g.Z_().required("Relationship type name is required")}),c=(0,o.cI)({resolver:(0,i.X)(u)}),l=c.register,m=c.handleSubmit,p=(c.formState.errors,(0,x.MO)((0,y.Z)())),f=function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={data:{name:t.brandName,description:t.brandName,relationshiptype:t.relationshipType,assetFile:[{file:null,fileName:null,AssetCategoryName:null}]}},e.next=3,p.mutateAsync(r).then((function(e){console.log(e)})).catch((function(e){n(e.response)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(b,{register:l,handleAddBrand:f,handleSubmit:m,documentUpload:v,setSelectedDocument:d,selectedDocument:a})})},k=function(){return(0,h.jsx)(I,{})}},633:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add-brand",function(){return t(4185)}])}},function(e){e.O(0,[982,809,774,888,179],(function(){return n=633,e(e.s=n);var n}));var n=e.O();_N_E=n}]);