(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{4413:function(e,n,t){"use strict";t.d(n,{t:function(){return a}});var r=t(7812),s=t(5893),a=function(e){var n=e.totalCount,t=e.tableTake,a=e.pageSelected,i=e.pagination,l=Math.ceil(n/t),o=(0,r.Z)(new Array(l).keys()),c=o.length===a;return(0,s.jsx)("div",{className:"pagination",children:(0,s.jsxs)("ul",{className:"float-right cursor-pointer",children:[(0,s.jsx)("li",{onClick:function(){1!==a&&i(a-2)},children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:"/images/left-arrow.svg"})})}),o.map((function(e,n){return(0,s.jsx)("li",{className:a===e+1?"active":"",onClick:function(){return i(e)},children:(0,s.jsx)("a",{children:e+1})},"pages-".concat(n))})),(0,s.jsx)("li",{onClick:function(){c||i(a)},children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:"/images/right-arrow.svg"})})})]})})}},6246:function(e,n,t){"use strict";var r=t(8687),s=t(6521),a=t(8855),i=t(4155).env.NEXT_PUBLIC_API_URL||"";n.Z=function(e){var n=(0,s.C)(a.sR),t={authorization:"Bearer ".concat(n)};return new r.GraphQLClient(i,{credentials:"include",headers:t})}},7110:function(e,n,t){"use strict";t.d(n,{$N:function(){return k},As:function(){return a},BG:function(){return C},Ei:function(){return y},MB:function(){return u},MO:function(){return $},Mz:function(){return b},W9:function(){return v},ac:function(){return I},ct:function(){return g},gl:function(){return U},lJ:function(){return P},li:function(){return N},n9:function(){return S},o6:function(){return A},o8:function(){return h},qo:function(){return D},sH:function(){return f},tb:function(){return j},te:function(){return L},vp:function(){return m},wE:function(){return O},y0:function(){return x},yY:function(){return p},yi:function(){return B},zh:function(){return w}});var r,s,a,i=t(29),l=t(7794),o=t.n(l),c=t(8767);function d(e,n,t,r){return(0,i.Z)(o().mark((function s(){return o().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",e.request(n,t,r));case 1:case"end":return s.stop()}}),s)})))}!function(e){e.BrandId="brandId",e.CategoryId="categoryId",e.CreatedAt="createdAt",e.CreatedBy="createdBy",e.Description="description",e.Discount="discount",e.Hsn="hsn",e.Id="id",e.IsActive="isActive",e.IsGeoRestricted="isGeoRestricted",e.IsGstInclude="isGstInclude",e.IsPriceVisible="isPriceVisible",e.IsRemoved="isRemoved",e.ListingExpiry="listingExpiry",e.Moq="moq",e.MrPrice="mrPrice",e.Name="name",e.Sku="sku",e.Stock="stock",e.Tags="tags",e.UnitPrice="unitPrice",e.UpdatedAt="updatedAt",e.UpdatedBy="updatedBy",e.WorkFlowContextInstanceId="workFlowContextInstanceId"}(r||(r={})),function(e){e.Default="default",e.Insensitive="insensitive"}(s||(s={})),function(e){e.Asc="asc",e.Desc="desc"}(a||(a={}));var u=function(e,n,t){return(0,c.useMutation)(["SendOtpMutation"],(function(n){return d(e,"\n    mutation SendOtpMutation($data: SendOTPInput!) {\n  sendOTP(data: $data) {\n    isSend\n    message\n    secondsLeft\n    otp\n  }\n}\n    ",n,t)()}),n)},m=function(e,n,t){return(0,c.useMutation)(["VerifyOTP"],(function(n){return d(e,"\n    mutation VerifyOTP($data: VerifyOTPInput!) {\n  verifyOTP(data: $data) {\n    token\n    refreshToken\n    message\n    isVerified\n    loginAttemptsLeft\n    isFirstLogin\n    user {\n      fullName\n      id\n      email\n      phone\n      isLocked\n      failedLoginAttempt\n      Customers {\n        customerId\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},p=function(e,n,t){return(0,c.useMutation)(["UserLogin"],(function(n){return d(e,"\n    mutation UserLogin($data: AuthLoginInput!) {\n  passwordLogin(data: $data) {\n    token\n    user {\n      id\n      fullName\n      Customers {\n        customerId\n      }\n    }\n    message\n    isVerified\n  }\n}\n    ",n,t)()}),n)},x=function(e,n,t){return(0,c.useMutation)(["SendUserPasswordResetLink"],(function(n){return d(e,"\n    mutation SendUserPasswordResetLink($data: SendUserPasswordResetLinkInput!) {\n  sendUserPasswordResetLink(data: $data) {\n    message\n    isSuccess\n  }\n}\n    ",n,t)()}),n)},h=function(e,n,t){return(0,c.useMutation)(["RedeemUserPasswordResetToken"],(function(n){return d(e,"\n    mutation RedeemUserPasswordResetToken($data: RedeemUserPasswordResetTokenInput!) {\n  redeemUserPasswordResetToken(data: $data) {\n    message\n    isVerified\n  }\n}\n    ",n,t)()}),n)},f=function(e,n,t){return(0,c.useMutation)(["AddAddress"],(function(n){return d(e,"\n    mutation AddAddress($data: AddressTypeUpdateInput!) {\n  createAddress(data: $data) {\n    id\n  }\n}\n    ",n,t)()}),n)},b=function(e,n,t,r){return(0,c.useQuery)(void 0===n?["GetAddress"]:["GetAddress",n],d(e,"\n    query GetAddress($where: CustomerAddressWhereInput) {\n  addresses(where: $where) {\n    id\n    shopName\n    contactName\n    phone\n    addressLine1\n    addressLine2\n    landmark\n    pincode\n    gstin\n    defaultBilling\n    defaultShipping\n    isActive\n  }\n}\n    ",n,r),t)},w=function(e,n,t){return(0,c.useMutation)(["UpdateAddress"],(function(n){return d(e,"\n    mutation UpdateAddress($data: UpdateAddressInputDTO!, $where: AddressWhereUniqueInput) {\n  updateAddress(data: $data, where: $where) {\n    id\n    shopName\n    contactName\n    phone\n    addressLine1\n    addressLine2\n    landmark\n    pincode\n    gstin\n    defaultBilling\n    defaultShipping\n  }\n}\n    ",n,t)()}),n)},g=function(e,n,t){return(0,c.useMutation)(["DeleteAddress"],(function(n){return d(e,"\n    mutation DeleteAddress($where: AddressWhereUniqueInput) {\n  deleteAddress(where: $where) {\n    id\n    addressTypeId\n  }\n}\n    ",n,t)()}),n)},j=function(e,n,t){return(0,c.useMutation)(["EnrollUser"],(function(n){return d(e,"\n    mutation EnrollUser($data: EnrollUserInput!) {\n  enrollUser(data: $data) {\n    id\n    name\n    channelId\n    Users {\n      User {\n        fullName\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},v=function(e,n,t,r){return(0,c.useQuery)(["ViewCustomerDetails",n],d(e,"\n    query ViewCustomerDetails($where: CustomerWhereDetailInput!) {\n  customer(where: $where) {\n    name\n    CustomerEnrollmentValue {\n      attributeId\n      attributeValueText\n      Attribute {\n        name\n      }\n    }\n    EnrollmentType {\n      id\n      name\n    }\n  }\n}\n    ",n,r),t)},y=function(e,n,t,r){return(0,c.useQuery)(void 0===n?["Categories"]:["Categories",n],d(e,"\n    query Categories {\n  categories {\n    id\n    name\n    description\n    logoAssetId\n    Asset {\n      id\n      AssetStore {\n        storage\n      }\n    }\n    CategoryLinkedCategoryHeader {\n      Category {\n        id\n        name\n      }\n    }\n  }\n}\n    ",n,r),t)},N=function(e,n,t){return(0,c.useMutation)(["CategoryUpdate"],(function(n){return d(e,"\n    mutation CategoryUpdate($data: UserUpdateInputDto!) {\n  updateUser(data: $data) {\n    email\n    UserPreference {\n      userId\n      channelId\n      categoryHeaderId\n      CategoryHeader {\n        name\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},k=function(e,n,t,r){return(0,c.useQuery)(void 0===n?["UserPreferences"]:["UserPreferences",n],d(e,"\n    query UserPreferences {\n  userPreferences {\n    id\n    userId\n    channelId\n    categoryHeaderId\n    CategoryHeader {\n      id\n      name\n    }\n  }\n}\n    ",n,r),t)},A=function(e,n,t){return(0,c.useMutation)(["UpdateCustomerDetails"],(function(n){return d(e,"\n    mutation UpdateCustomerDetails($data: UpdateCustomerDto!) {\n  updateCustomer(data: $data) {\n    id\n    name\n  }\n}\n    ",n,t)()}),n)},I=function(e,n,t,r){return(0,c.useQuery)(["Brands",n],d(e,"\n    query Brands($where: BrandWhereInputDTO, $take: Int, $skip: Int, $orderBy: [BrandOrderByWithRelationInputDTO!], $brandsCountWhere2: BrandWhereInputDTO!) {\n  brands(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    name\n    decription\n    BrandRelation {\n      id\n      name\n    }\n    WorkFlowContextInstance {\n      WorkFlowStatus {\n        name\n      }\n    }\n    rating\n    logoURL\n  }\n  brandsCount(where: $brandsCountWhere2)\n}\n    ",n,r),t)},$=function(e,n,t){return(0,c.useMutation)(["AddBrand"],(function(n){return d(e,"\n    mutation AddBrand($data: BrandCreateInput!) {\n  createBrand(data: $data) {\n    id\n    name\n    decription\n    customerId\n  }\n}\n    ",n,t)()}),n)},C=function(e,n,t,r){return(0,c.useQuery)(["ProductDetailsAttributeList",n],d(e,"\n    query ProductDetailsAttributeList($where: CategoryWhereUniqueInput!) {\n  ProductDetailsAttributeList(where: $where) {\n    Attributes {\n      Attribute {\n        id\n        name\n        AttributeValue {\n          id\n          name\n          AttributeValue_TL {\n            name\n          }\n        }\n        Attribute_TL {\n          name\n        }\n        AttributeControlTypeValue {\n          controlValue\n          AttributeControlType {\n            controlField\n          }\n        }\n      }\n    }\n  }\n}\n    ",n,r),t)},P=function(e,n,t,r){return(0,c.useQuery)(["BrandDetails",n],d(e,"\n    query BrandDetails($where: BrandWhereUniqueInput!) {\n  brand(where: $where) {\n    id\n    name\n    decription\n    customerId\n    BrandRelation {\n      id\n      name\n    }\n    WorkFlowContextInstance {\n      WorkFlowStatus {\n        name\n      }\n    }\n    Products {\n      id\n      name\n      description\n      categoryId\n      brandId\n      unitPrice\n      discount\n      isActive\n      WorkFlowContextInstance {\n        WorkFlowStatus {\n          name\n        }\n      }\n    }\n    logoAssetId\n    BrandAsset {\n      Asset {\n        AssetStore {\n          storage\n        }\n      }\n    }\n  }\n}\n    ",n,r),t)},B=function(e,n,t,r){return(0,c.useQuery)(void 0===n?["ProductListWithBrandId"]:["ProductListWithBrandId",n],d(e,"\n    query ProductListWithBrandId($where: ProductWhereInput, $take: Int, $skip: Int, $orderBy: [ProductOrderByWithRelationInput!]) {\n  products(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    name\n    isActive\n    brandId\n    unitPrice\n    description\n    moq\n    imageUrl\n    discount\n  }\n  productsCount\n}\n    ",n,r),t)},U=function(e,n,t,r){return(0,c.useQuery)(void 0===n?["BrandsSelect"]:["BrandsSelect",n],d(e,"\n    query BrandsSelect($where: BrandWhereInputDTO) {\n  brands(where: $where) {\n    id\n    name\n    logoURL\n  }\n}\n    ",n,r),t)},S=function(e,n,t){return(0,c.useMutation)(["CreateKYC"],(function(n){return d(e,"\n    mutation CreateKYC($data: KYCCreateInput!) {\n  createKYC(data: $data) {\n    id\n    customerId\n    KYCHeader {\n      name\n    }\n    CustomerKYCAsset {\n      Asset {\n        AssetStore {\n          storage\n        }\n      }\n    }\n  }\n}\n    ",n,t)()}),n)},L=function(e,n,t,r){return(0,c.useQuery)(void 0===n?["ProductList"]:["ProductList",n],d(e,"\n    query ProductList($where: ProductWhereInput, $take: Int, $skip: Int, $orderBy: [ProductOrderByWithRelationInput!]) {\n  products(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {\n    id\n    title\n    name\n    imageUrl\n    description\n    unitPrice\n    isActive\n    moq\n  }\n  productsCount\n}\n    ",n,r),t)},O=function(e,n,t){return(0,c.useMutation)(["UpdateProduct"],(function(n){return d(e,"\n    mutation UpdateProduct($where: ProductWhereUniqueInput!, $data: ProductUpdateInput!) {\n  updateProduct(where: $where, data: $data) {\n    id\n    categoryId\n    isActive\n    name\n  }\n}\n    ",n,t)()}),n)},D=function(e,n,t,r){return(0,c.useQuery)(void 0===n?["Locations"]:["Locations",n],d(e,"\n    query Locations {\n  geoLocations {\n    id\n    name\n    SubGeoLocation {\n      id\n      name\n      parentId\n    }\n  }\n}\n    ",n,r),t)}},6521:function(e,n,t){"use strict";t.d(n,{C:function(){return a},T:function(){return s}});var r=t(9473),s=function(){return(0,r.I0)()},a=r.v9},3881:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(9499),s=t(29),a=t(7794),i=t.n(a),l=t(7294),o=t(8767),c=t(1163),d=t.n(c),u=t(7110),m=t(6246),p=t(5893),x=function(){return(0,p.jsxs)("div",{className:"text-green-500 w-auto inline-block mt-2 whitespace-nowrap",children:[(0,p.jsx)("img",{src:"/images/green-check.svg",className:"float-left mr-2 mt-1 w-5",alt:"Verified"})," ","Approved"]})},h=function(){return(0,p.jsxs)("div",{className:"text-red-500 w-auto inline-block mt-2 whitespace-nowrap",children:[(0,p.jsx)("img",{src:"/images/red-check.svg",className:"float-left mr-2 mt-1 w-5",alt:"Verified"})," ","Rejected"]})},f=function(){return(0,p.jsxs)("div",{className:"text-amber-300 w-auto inline-block mt-2 whitespace-nowrap",children:[(0,p.jsx)("img",{src:"/images/yellow-pending.svg",className:"float-left mr-2 mt-1 w-5",alt:"Verified"})," ","Pending"]})},b=function(e){var n,t,r,s,a,i,l,o=e.setAddGeoFlag,c=e.BrandDetailsData,d=e.ProductListWithBrandId,u=e.updateToggle,m=null===c||void 0===c||null===(n=c.brand)||void 0===n||null===(t=n.BrandAsset[0])||void 0===t||null===(r=t.Asset)||void 0===r||null===(s=r.AssetStore)||void 0===s?void 0:s.storage;return(0,p.jsxs)("div",{className:"w-full",children:[(0,p.jsx)("h1",{className:"font-semibold text-xl pb-3",children:"My Brands"}),(0,p.jsx)("div",{className:"clear-both"}),(0,p.jsxs)("div",{className:"w-full md:w-8/12 lg:w-7/12 rounded-lg shadow-lg bg-white border-2 border-slate-200 mb-6",children:[(0,p.jsxs)("div",{className:"block sm:flex text-center sm:text-left items-center p-4",children:[(0,p.jsxs)("div",{className:"relative mx-auto w-20 inline-block sm:mx-0",children:[(0,p.jsx)("div",{className:"overflow-hidden rounded-full w-20 mr-4 border-2",children:(0,p.jsx)("img",{src:"/images/demo-brand.jpg",alt:"user"})}),(0,p.jsx)("a",{className:"p-2 absolute bottom-0 right-2 rounded-full shadow-lg primary-bg w-8 h-8",children:(0,p.jsx)("img",{src:"/images/camera-white.svg",alt:"edit"})})]}),(0,p.jsxs)("div",{className:"sm:ml-2",children:[(0,p.jsx)("h3",{className:"font-semibold text-lg",children:null===c||void 0===c||null===(a=c.brand)||void 0===a?void 0:a.name}),(0,p.jsx)("div",{className:"font-medium text-gray-400 text-sm",children:null===c||void 0===c||null===(i=c.brand)||void 0===i||null===(l=i.BrandRelation)||void 0===l?void 0:l.name})]}),(0,p.jsxs)("div",{className:"sm:mx-0 sm:ml-auto",children:[(0,p.jsx)("div",{className:"mt-3 mb-2 sm:float-right",children:(0,p.jsxs)("div",{className:"rating-small-outer average",children:["3.5",(0,p.jsx)("img",{src:"/images/star.svg",alt:"rating"})]})}),(0,p.jsx)("div",{className:"clear-both"}),"pending"===(null===c||void 0===c?void 0:c.brand.WorkFlowContextInstance.WorkFlowStatus.name)?(0,p.jsx)(f,{}):"rejected"===(null===c||void 0===c?void 0:c.brand.WorkFlowContextInstance.WorkFlowStatus.name)?(0,p.jsx)(h,{}):(0,p.jsx)(x,{})]})]}),(0,p.jsx)("div",{className:"bg-gray-100 border-t-2 rounded-b-lg flex text-center py-2 px-2 cursor-pointer",onClick:function(){return o(!0)},children:(0,p.jsxs)("a",{className:"w-full py-2 flex justify-between items-center",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"/images/location-black-icon.svg",className:"inline-block w-3 mr-2 ",alt:"delete"})," ","Visibility limited in 0 states"]}),(0,p.jsx)("img",{src:"/images/right-arrow.svg",className:"inline-block w-3 h-3 mr-2",alt:"delete"})]})})]}),(0,p.jsx)("div",{className:"row-outer block flex-wrap sm:flex pt-5 product-list-outer",children:null===d||void 0===d?void 0:d.products.map((function(e){var n;return(0,p.jsx)("div",{className:"w-full px-3 mb-5 sm:w-4/12 md:w-4/12 lg:w-3/12",children:(0,p.jsxs)("div",{className:"rounded-lg listing-outer relative bg-gray-300",children:[(0,p.jsx)("img",{src:"/images/demo-list-img-3.jpg",alt:"image"}),(0,p.jsxs)("div",{className:"py-3 px-2 relative contant bg-white",children:[(0,p.jsxs)("div",{className:"rating-small-outer good absolute left-2",children:["5.0",(0,p.jsx)("img",{src:"/images/star.svg",alt:"rating"})]}),(0,p.jsx)("div",{className:"form-control toggle-outer absolute right-2",children:(0,p.jsx)("label",{className:"label cursor-pointer p-0",children:e.isActive?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"label-text text-white pr-2 font-xs font-medium",children:"Active"}),(0,p.jsx)("input",{type:"checkbox",className:"toggle toggle-accent",checked:e.isActive,onChange:function(){return u(!1,e.id)}})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"label-text text-white pr-2 font-xs font-medium",children:"InActive"}),(0,p.jsx)("input",{type:"checkbox",className:"toggle toggle-accent",checked:e.isActive,onChange:function(){return u(!0,e.id)}})]})})}),(0,p.jsx)("p",{className:"text-xs pt-4",children:e.name}),(0,p.jsxs)("h5",{className:"py-2 text-sm font-medium",children:[(0,p.jsxs)("span",{className:"text-black text-lg font-medium",children:["\u20b9",null!==(n=e.unitPrice)&&void 0!==n?n:0]}),(0,p.jsx)("span",{className:"text-black text-sm",children:" Per piece"})]}),(0,p.jsx)("h5",{className:"text-sm font-medium text-black",children:"Min Quantity - 5 pcs"}),(0,p.jsxs)("div",{className:"flex items-center mt-3",children:[(0,p.jsx)("div",{className:"mx-auto w-10 inline-block sm:mx-0",children:(0,p.jsx)("div",{className:"overflow-hidden rounded-full w-10 mr-4 border-2",children:(0,p.jsx)("img",{src:"https://asset-fawow.s3.ap-south-1.amazonaws.com/fawow-asset/".concat(m)})})}),(0,p.jsx)("div",{className:"ml-2",children:(0,p.jsx)("div",{className:"font-medium text-gray-400 text-sm",children:"S&D Free 13%"})})]})]}),(0,p.jsxs)("div",{className:"bg-white border-t-2 rounded-b-lg flex text-sm",children:[(0,p.jsxs)("a",{className:"w-full p-3 text-left",children:[(0,p.jsx)("img",{src:"/images/edit-icon-1.svg",className:"inline-block w-5 mr-2",alt:"delete"})," ","Edit"]}),(0,p.jsxs)("a",{className:"w-full p-3 text-right",children:[(0,p.jsx)("img",{src:"/images/delete-icon.svg",className:"inline-block w-3 mr-2",alt:"delete"})," ","Delete"]})]})]})})}))})]})},w=t(4413),g=function(){return(0,p.jsxs)("div",{className:"w-full px-3 md:w-7/12 lg:w-7/12 xl:w-8/12 md:pl-9",children:[(0,p.jsx)("div",{className:"overflow-x-auto",children:(0,p.jsxs)("div",{className:"steps mb-8 md:hidden",children:[(0,p.jsx)("a",{className:"w-36 step step-info text-blue-400 font-medium whitespace-nowrap",children:"Select Brand"}),(0,p.jsx)("a",{className:"w-36 step step-info text-blue-400 font-medium whitespace-nowrap",children:"Add Product Images"}),(0,p.jsx)("a",{className:"w-36 step step-info text-blue-400 font-medium whitespace-nowrap",children:"Create Sets"}),(0,p.jsx)("a",{className:"w-36 step step-info text-blue-400 font-medium whitespace-nowrap",children:"Product Details"}),(0,p.jsx)("a",{className:"w-36 step step-info text-blue-400 font-medium whitespace-nowrap",children:"Additional Details"}),(0,p.jsx)("a",{className:"w-36 step step-info text-blue-400 font-medium whitespace-nowrap",children:"Geo Restriction"}),(0,p.jsx)("a",{className:"w-36 step whitespace-nowrap",children:"logistics"})]})}),(0,p.jsx)("h3",{className:"font-medium text-lg mb-1",children:"Geo Restriction"}),(0,p.jsx)("div",{className:"clear-both"}),(0,p.jsx)("div",{className:"text-md font-medium text-center text-gray-400 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700",children:(0,p.jsxs)("ul",{className:"flex flex-wrap -mb-px mt-5",children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{className:"inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-blue-400 active text-black","aria-current":"page",children:"State"})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{className:"inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",children:"District"})})]})}),(0,p.jsx)("div",{className:"clear-both"}),(0,p.jsxs)("div",{className:"pt-4",children:[(0,p.jsxs)("div",{className:"text-md pb-1",children:[" ","Select all states that you would like to your products to be displayed if not checked the products in this brand will not be displayed to buyers from those states."]}),(0,p.jsx)("div",{className:"clear-both"}),(0,p.jsx)("div",{className:"block pt-2 mb-5 sm:flex",children:(0,p.jsxs)("div",{className:"w-full mr-0 mb-3 sm:mr-4 sm:mb-0",children:[(0,p.jsx)("input",{name:"",placeholder:"Search for a State",className:"w-full bg-gray-100 border-2 border-gray-200 px-5 pr-12 rounded-3xl h-10 leading-10 focus:border-gray-300"}),(0,p.jsx)("a",{className:"absolute right-0 top-0 px-2 h-10 py-2 w-10",children:(0,p.jsx)("img",{src:"/images/search-icon.svg",className:"max-w-full",alt:"search"})})]})}),(0,p.jsxs)("div",{className:"pt-2 row-outer block flex-wrap sm:flex",children:[(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Andhra Pradesh"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Assam"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsxs)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:["Kerala"," "]})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsxs)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:["Bihar"," "]})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Chandigarh"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Andhra Pradesh"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Uttar Pradesh"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Delhi"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Karnataka"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Tamil Nadu"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Goa"})]})})}),(0,p.jsx)("div",{className:"px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12",children:(0,p.jsx)("div",{className:"form-control",children:(0,p.jsxs)("label",{className:"label cursor-pointer p-0 pb-3",children:[(0,p.jsx)("input",{type:"checkbox",className:"checkbox checkbox-primary"}),(0,p.jsx)("span",{className:"label-text font-regular text-sm mr-auto ml-2",children:"Rajasthan"})]})})})]})]}),(0,p.jsx)("div",{className:"clear-both"})]})},j=function(e){var n=e.setAddGeoFlag;return(0,p.jsx)(g,{setAddGeoFlag:n})};function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=function(){var e,n=(0,l.useState)(1),t=n[0],r=n[1],a=(0,l.useState)(u.As.Asc)[0],c=(0,l.useState)(!1),x=c[0],h=c[1],f=(0,o.useQueryClient)(),g=(0,u.wE)((0,m.Z)()),v=(0,l.useState)({where:{brandId:{equals:d().query.id}},take:8,skip:0,orderBy:[{name:a}]}),N=v[0],k=v[1],A=(0,u.lJ)((0,m.Z)(),{where:{id:d().query.id}}).data,I=(0,u.yi)((0,m.Z)(),N).data,$=function(){var e=(0,s.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(n+1),t=8*n,k((function(e){return y(y({},e),{},{skip:t})}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=(0,s.Z)(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={where:{id:t},data:{isActive:{set:n}}},e.next=3,g.mutateAsync(r).then((function(){f.invalidateQueries()}));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:x?(0,p.jsx)(j,{setAddGeoFlag:h}):(0,p.jsxs)("div",{className:"w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0",children:[(0,p.jsx)(b,{setAddGeoFlag:h,BrandDetailsData:A,ProductListWithBrandId:I,updateToggle:C}),(null===I||void 0===I?void 0:I.products.length)>0&&(0,p.jsx)(w.t,{totalCount:null!==(e=null===I||void 0===I?void 0:I.productsCount)&&void 0!==e?e:0,tableTake:8,pageSelected:t,pagination:$})]})})},k=function(){return(0,p.jsx)(N,{})}},8958:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-brands/[id]",function(){return t(3881)}])},2587:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},7812:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(2587);var s=t(2937);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,s.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(2587);function s(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}},function(e){e.O(0,[982,774,888,179],(function(){return n=8958,e(e.s=n);var n}));var n=e.O();_N_E=n}]);