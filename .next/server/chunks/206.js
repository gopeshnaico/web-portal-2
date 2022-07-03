"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 7110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$N": () => (/* binding */ useUserPreferencesQuery),
/* harmony export */   "As": () => (/* binding */ SortOrder),
/* harmony export */   "BG": () => (/* binding */ useProductDetailsAttributeListQuery),
/* harmony export */   "Ei": () => (/* binding */ useCategoriesQuery),
/* harmony export */   "MB": () => (/* binding */ useSendOtpMutationMutation),
/* harmony export */   "MO": () => (/* binding */ useAddBrandMutation),
/* harmony export */   "Mz": () => (/* binding */ useGetAddressQuery),
/* harmony export */   "W9": () => (/* binding */ useViewCustomerDetailsQuery),
/* harmony export */   "ac": () => (/* binding */ useBrandsQuery),
/* harmony export */   "ct": () => (/* binding */ useDeleteAddressMutation),
/* harmony export */   "gl": () => (/* binding */ useBrandsSelectQuery),
/* harmony export */   "lJ": () => (/* binding */ useBrandDetailsQuery),
/* harmony export */   "li": () => (/* binding */ useCategoryUpdateMutation),
/* harmony export */   "n9": () => (/* binding */ useCreateKycMutation),
/* harmony export */   "o6": () => (/* binding */ useUpdateCustomerDetailsMutation),
/* harmony export */   "o8": () => (/* binding */ useRedeemUserPasswordResetTokenMutation),
/* harmony export */   "qo": () => (/* binding */ useLocationsQuery),
/* harmony export */   "sH": () => (/* binding */ useAddAddressMutation),
/* harmony export */   "tb": () => (/* binding */ useEnrollUserMutation),
/* harmony export */   "te": () => (/* binding */ useProductListQuery),
/* harmony export */   "vp": () => (/* binding */ useVerifyOtpMutation),
/* harmony export */   "wE": () => (/* binding */ useUpdateProductMutation),
/* harmony export */   "y0": () => (/* binding */ useSendUserPasswordResetLinkMutation),
/* harmony export */   "yY": () => (/* binding */ useUserLoginMutation),
/* harmony export */   "yi": () => (/* binding */ useProductListWithBrandIdQuery),
/* harmony export */   "zh": () => (/* binding */ useUpdateAddressMutation)
/* harmony export */ });
/* unused harmony exports ProductScalarFieldEnum, QueryMode, SendOtpMutationDocument, VerifyOtpDocument, UpdateUserDocument, useUpdateUserMutation, UserLoginDocument, SendUserPasswordResetLinkDocument, RedeemUserPasswordResetTokenDocument, AddAddressDocument, GetAddressDocument, UpdateAddressDocument, DeleteAddressDocument, EnrollUserDocument, ViewCustomerDetailsDocument, CategoriesDocument, CategoryUpdateDocument, UserPreferencesDocument, UpdateCustomerDetailsDocument, BrandsDocument, AddBrandDocument, ProductDetailsAttributeListDocument, BrandDetailsDocument, ProductListWithBrandIdDocument, BrandsSelectDocument, CreateKycDocument, BrandIdGeoLocationsDocument, useBrandIdGeoLocationsQuery, ProductListDocument, UpdateProductDocument, LocationsDocument */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
function fetcher(client,query,variables,headers){return async()=>client.request(query,variables,headers);}/** All built-in and custom scalars, mapped to their actual values */let ProductScalarFieldEnum;(function(ProductScalarFieldEnum){ProductScalarFieldEnum["BrandId"]="brandId";ProductScalarFieldEnum["CategoryId"]="categoryId";ProductScalarFieldEnum["CreatedAt"]="createdAt";ProductScalarFieldEnum["CreatedBy"]="createdBy";ProductScalarFieldEnum["Description"]="description";ProductScalarFieldEnum["Discount"]="discount";ProductScalarFieldEnum["Hsn"]="hsn";ProductScalarFieldEnum["Id"]="id";ProductScalarFieldEnum["IsActive"]="isActive";ProductScalarFieldEnum["IsGeoRestricted"]="isGeoRestricted";ProductScalarFieldEnum["IsGstInclude"]="isGstInclude";ProductScalarFieldEnum["IsPriceVisible"]="isPriceVisible";ProductScalarFieldEnum["IsRemoved"]="isRemoved";ProductScalarFieldEnum["ListingExpiry"]="listingExpiry";ProductScalarFieldEnum["Moq"]="moq";ProductScalarFieldEnum["MrPrice"]="mrPrice";ProductScalarFieldEnum["Name"]="name";ProductScalarFieldEnum["Sku"]="sku";ProductScalarFieldEnum["Stock"]="stock";ProductScalarFieldEnum["Tags"]="tags";ProductScalarFieldEnum["UnitPrice"]="unitPrice";ProductScalarFieldEnum["UpdatedAt"]="updatedAt";ProductScalarFieldEnum["UpdatedBy"]="updatedBy";ProductScalarFieldEnum["WorkFlowContextInstanceId"]="workFlowContextInstanceId";})(ProductScalarFieldEnum||(ProductScalarFieldEnum={}));let QueryMode;(function(QueryMode){QueryMode["Default"]="default";QueryMode["Insensitive"]="insensitive";})(QueryMode||(QueryMode={}));let SortOrder;(function(SortOrder){SortOrder["Asc"]="asc";SortOrder["Desc"]="desc";})(SortOrder||(SortOrder={}));const SendOtpMutationDocument=`
    mutation SendOtpMutation($data: SendOTPInput!) {
  sendOTP(data: $data) {
    isSend
    message
    secondsLeft
    otp
  }
}
    `;const useSendOtpMutationMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['SendOtpMutation'],variables=>fetcher(client,SendOtpMutationDocument,variables,headers)(),options);const VerifyOtpDocument=`
    mutation VerifyOTP($data: VerifyOTPInput!) {
  verifyOTP(data: $data) {
    token
    refreshToken
    message
    isVerified
    loginAttemptsLeft
    isFirstLogin
    user {
      fullName
      id
      email
      phone
      isLocked
      failedLoginAttempt
      Customers {
        customerId
      }
    }
  }
}
    `;const useVerifyOtpMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['VerifyOTP'],variables=>fetcher(client,VerifyOtpDocument,variables,headers)(),options);const UpdateUserDocument=(/* unused pure expression or super */ null && (`
    mutation UpdateUser($data: UserUpdateInputDto!) {
  updateUser(data: $data) {
    id
    fullName
    shortName
    email
  }
}
    `));const useUpdateUserMutation=(client,options,headers)=>useMutation(['UpdateUser'],variables=>fetcher(client,UpdateUserDocument,variables,headers)(),options);const UserLoginDocument=`
    mutation UserLogin($data: AuthLoginInput!) {
  passwordLogin(data: $data) {
    token
    user {
      id
      fullName
      Customers {
        customerId
      }
    }
    message
    isVerified
  }
}
    `;const useUserLoginMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['UserLogin'],variables=>fetcher(client,UserLoginDocument,variables,headers)(),options);const SendUserPasswordResetLinkDocument=`
    mutation SendUserPasswordResetLink($data: SendUserPasswordResetLinkInput!) {
  sendUserPasswordResetLink(data: $data) {
    message
    isSuccess
  }
}
    `;const useSendUserPasswordResetLinkMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['SendUserPasswordResetLink'],variables=>fetcher(client,SendUserPasswordResetLinkDocument,variables,headers)(),options);const RedeemUserPasswordResetTokenDocument=`
    mutation RedeemUserPasswordResetToken($data: RedeemUserPasswordResetTokenInput!) {
  redeemUserPasswordResetToken(data: $data) {
    message
    isVerified
  }
}
    `;const useRedeemUserPasswordResetTokenMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['RedeemUserPasswordResetToken'],variables=>fetcher(client,RedeemUserPasswordResetTokenDocument,variables,headers)(),options);const AddAddressDocument=`
    mutation AddAddress($data: AddressTypeUpdateInput!) {
  createAddress(data: $data) {
    id
  }
}
    `;const useAddAddressMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['AddAddress'],variables=>fetcher(client,AddAddressDocument,variables,headers)(),options);const GetAddressDocument=`
    query GetAddress($where: CustomerAddressWhereInput) {
  addresses(where: $where) {
    id
    shopName
    contactName
    phone
    addressLine1
    addressLine2
    landmark
    pincode
    gstin
    defaultBilling
    defaultShipping
    isActive
  }
}
    `;const useGetAddressQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(variables===undefined?['GetAddress']:['GetAddress',variables],fetcher(client,GetAddressDocument,variables,headers),options);const UpdateAddressDocument=`
    mutation UpdateAddress($data: UpdateAddressInputDTO!, $where: AddressWhereUniqueInput) {
  updateAddress(data: $data, where: $where) {
    id
    shopName
    contactName
    phone
    addressLine1
    addressLine2
    landmark
    pincode
    gstin
    defaultBilling
    defaultShipping
  }
}
    `;const useUpdateAddressMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['UpdateAddress'],variables=>fetcher(client,UpdateAddressDocument,variables,headers)(),options);const DeleteAddressDocument=`
    mutation DeleteAddress($where: AddressWhereUniqueInput) {
  deleteAddress(where: $where) {
    id
    addressTypeId
  }
}
    `;const useDeleteAddressMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['DeleteAddress'],variables=>fetcher(client,DeleteAddressDocument,variables,headers)(),options);const EnrollUserDocument=`
    mutation EnrollUser($data: EnrollUserInput!) {
  enrollUser(data: $data) {
    id
    name
    channelId
    Users {
      User {
        fullName
      }
    }
  }
}
    `;const useEnrollUserMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['EnrollUser'],variables=>fetcher(client,EnrollUserDocument,variables,headers)(),options);const ViewCustomerDetailsDocument=`
    query ViewCustomerDetails($where: CustomerWhereDetailInput!) {
  customer(where: $where) {
    name
    CustomerEnrollmentValue {
      attributeId
      attributeValueText
      Attribute {
        name
      }
    }
    EnrollmentType {
      id
      name
    }
  }
}
    `;const useViewCustomerDetailsQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(['ViewCustomerDetails',variables],fetcher(client,ViewCustomerDetailsDocument,variables,headers),options);const CategoriesDocument=`
    query Categories {
  categories {
    id
    name
    description
    logoAssetId
    Asset {
      id
      AssetStore {
        storage
      }
    }
    CategoryLinkedCategoryHeader {
      Category {
        id
        name
      }
    }
  }
}
    `;const useCategoriesQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(variables===undefined?['Categories']:['Categories',variables],fetcher(client,CategoriesDocument,variables,headers),options);const CategoryUpdateDocument=`
    mutation CategoryUpdate($data: UserUpdateInputDto!) {
  updateUser(data: $data) {
    email
    UserPreference {
      userId
      channelId
      categoryHeaderId
      CategoryHeader {
        name
      }
    }
  }
}
    `;const useCategoryUpdateMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['CategoryUpdate'],variables=>fetcher(client,CategoryUpdateDocument,variables,headers)(),options);const UserPreferencesDocument=`
    query UserPreferences {
  userPreferences {
    id
    userId
    channelId
    categoryHeaderId
    CategoryHeader {
      id
      name
    }
  }
}
    `;const useUserPreferencesQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(variables===undefined?['UserPreferences']:['UserPreferences',variables],fetcher(client,UserPreferencesDocument,variables,headers),options);const UpdateCustomerDetailsDocument=`
    mutation UpdateCustomerDetails($data: UpdateCustomerDto!) {
  updateCustomer(data: $data) {
    id
    name
  }
}
    `;const useUpdateCustomerDetailsMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['UpdateCustomerDetails'],variables=>fetcher(client,UpdateCustomerDetailsDocument,variables,headers)(),options);const BrandsDocument=`
    query Brands($where: BrandWhereInputDTO, $take: Int, $skip: Int, $orderBy: [BrandOrderByWithRelationInputDTO!], $brandsCountWhere2: BrandWhereInputDTO!) {
  brands(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
    id
    name
    decription
    BrandRelation {
      id
      name
    }
    WorkFlowContextInstance {
      WorkFlowStatus {
        name
      }
    }
    rating
    logoURL
  }
  brandsCount(where: $brandsCountWhere2)
}
    `;const useBrandsQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(['Brands',variables],fetcher(client,BrandsDocument,variables,headers),options);const AddBrandDocument=`
    mutation AddBrand($data: BrandCreateInput!) {
  createBrand(data: $data) {
    id
    name
    decription
    customerId
  }
}
    `;const useAddBrandMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['AddBrand'],variables=>fetcher(client,AddBrandDocument,variables,headers)(),options);const ProductDetailsAttributeListDocument=`
    query ProductDetailsAttributeList($where: CategoryWhereUniqueInput!) {
  ProductDetailsAttributeList(where: $where) {
    Attributes {
      Attribute {
        id
        name
        AttributeValue {
          id
          name
          AttributeValue_TL {
            name
          }
        }
        Attribute_TL {
          name
        }
        AttributeControlTypeValue {
          controlValue
          AttributeControlType {
            controlField
          }
        }
      }
    }
  }
}
    `;const useProductDetailsAttributeListQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(['ProductDetailsAttributeList',variables],fetcher(client,ProductDetailsAttributeListDocument,variables,headers),options);const BrandDetailsDocument=`
    query BrandDetails($where: BrandWhereUniqueInput!) {
  brand(where: $where) {
    id
    name
    decription
    customerId
    BrandRelation {
      id
      name
    }
    WorkFlowContextInstance {
      WorkFlowStatus {
        name
      }
    }
    Products {
      id
      name
      description
      categoryId
      brandId
      unitPrice
      discount
      isActive
      WorkFlowContextInstance {
        WorkFlowStatus {
          name
        }
      }
    }
    logoAssetId
    BrandAsset {
      Asset {
        AssetStore {
          storage
        }
      }
    }
  }
}
    `;const useBrandDetailsQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(['BrandDetails',variables],fetcher(client,BrandDetailsDocument,variables,headers),options);const ProductListWithBrandIdDocument=`
    query ProductListWithBrandId($where: ProductWhereInput, $take: Int, $skip: Int, $orderBy: [ProductOrderByWithRelationInput!]) {
  products(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
    id
    title
    name
    isActive
    brandId
    unitPrice
    description
    moq
    imageUrl
    discount
  }
  productsCount
}
    `;const useProductListWithBrandIdQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(variables===undefined?['ProductListWithBrandId']:['ProductListWithBrandId',variables],fetcher(client,ProductListWithBrandIdDocument,variables,headers),options);const BrandsSelectDocument=`
    query BrandsSelect($where: BrandWhereInputDTO) {
  brands(where: $where) {
    id
    name
    logoURL
  }
}
    `;const useBrandsSelectQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(variables===undefined?['BrandsSelect']:['BrandsSelect',variables],fetcher(client,BrandsSelectDocument,variables,headers),options);const CreateKycDocument=`
    mutation CreateKYC($data: KYCCreateInput!) {
  createKYC(data: $data) {
    id
    customerId
    KYCHeader {
      name
    }
    CustomerKYCAsset {
      Asset {
        AssetStore {
          storage
        }
      }
    }
  }
}
    `;const useCreateKycMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['CreateKYC'],variables=>fetcher(client,CreateKycDocument,variables,headers)(),options);const BrandIdGeoLocationsDocument=(/* unused pure expression or super */ null && (`
    query BrandIdGeoLocations {
  geoLocations {
    id
    name
    SubGeoLocation {
      id
      name
    }
  }
}
    `));const useBrandIdGeoLocationsQuery=(client,variables,options,headers)=>useQuery(variables===undefined?['BrandIdGeoLocations']:['BrandIdGeoLocations',variables],fetcher(client,BrandIdGeoLocationsDocument,variables,headers),options);const ProductListDocument=`
    query ProductList($where: ProductWhereInput, $take: Int, $skip: Int, $orderBy: [ProductOrderByWithRelationInput!]) {
  products(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
    id
    title
    name
    imageUrl
    description
    unitPrice
    isActive
    moq
  }
  productsCount
}
    `;const useProductListQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(variables===undefined?['ProductList']:['ProductList',variables],fetcher(client,ProductListDocument,variables,headers),options);const UpdateProductDocument=`
    mutation UpdateProduct($where: ProductWhereUniqueInput!, $data: ProductUpdateInput!) {
  updateProduct(where: $where, data: $data) {
    id
    categoryId
    isActive
    name
  }
}
    `;const useUpdateProductMutation=(client,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(['UpdateProduct'],variables=>fetcher(client,UpdateProductDocument,variables,headers)(),options);const LocationsDocument=`
    query Locations {
  geoLocations {
    id
    name
    SubGeoLocation {
      id
      name
      parentId
    }
  }
}
    `;const useLocationsQuery=(client,variables,options,headers)=>(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(variables===undefined?['Locations']:['Locations',variables],fetcher(client,LocationsDocument,variables,headers),options);

/***/ }),

/***/ 6521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// adding types here already
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ })

};
;