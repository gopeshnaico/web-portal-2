export const validationMessages = {
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
  mobileNumberValidation:
    'Phone Number is invalid, must contain only numbers with 10 digits',
  address: 'Address is required',
  state: 'State is required',
  district: 'District is required',
  city: 'City is required',
  pincode: 'Pincode is required',
  emailValidation: 'Email Id is invalid',
};

export const validationSchemaMessages = {
  email: {
    required: 'Email Id is required',
    maxLength: 'Email Id should not exceed 255 characters',
    valid: 'Must be a valid email',
  },
  password: {
    required: 'Password is required',
    maxLength: 'Password should not exceed 16 characters',
    minLength: 'Password must be at least 8 characters',
    valid: 'Must be a valid email',
  },
  newPassword: {
    required: 'Password is required',
    maxLength: 'Password should not exceed 16 characters',
    match:
      'Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
  },
  confirmPassword: {
    required: 'Email Id is required',
    confirmMatchMessage: 'Your passwords do not match.',
  },
};

export type AddressType = {
  shopName?: string;
  contactName?: string;
  phone?: string;
  addressLine2?: string;
  addressLine1?: string;
  landmark?: string;
  pincode?: string;
  gstin?: string;
  defaultBilling?: boolean;
  defaultShipping?: boolean;
};

export type category = {
  isChecked: boolean;
  __typename?: 'CategoryHeaderDTO';
  id: string;
  name?: string;
  description?: string;
  logoAssetId?: string | null;
  Asset?: {
    __typename?: 'Asset';
    id: string;
    AssetStore?: {
      __typename?: 'AssetStore';
      storage?: string | null;
    } | null;
  } | null;
}[];
export type ProfileType = {
  sellerName?: string;
  phone?: string;
  email?: string;
  established_year?: string;
  pan?: string;
  gst?: string;
  description?: string;
};
