import { useState } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {
  CreateKycMutation,
  EnrollUserMutation,
  KycFileInput,
  useCreateKycMutation,
  useEnrollUserMutation,
} from '../../domain/api/graphql';
import { ErrorHandlingWithResponse } from '../../lib/errorHandling';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';
import { validationMessages } from '../../lib/common';
import { useAppSelector } from '../../lib/redux/hooks';
import { selectPhone } from '../../lib/redux/reducers/session';
import { SelectCategoryPopup } from '../Popups/SelectCategoryPopup';
import { useAppDispatch } from '../../lib/redux/hooks';
import { updateCustomerId } from '../../lib/redux/reducers/session';
import { SkipConfirmation } from '../Popups/SkipConfirmation';
import { KycPage } from './KycPage';
import { GeneralDetailsForm } from '../ui/UserEnrollment/GeneralDetailsForm';

export type FormInputs = {
  fullName: string;
  companyName: string;
  mobileNumber: string;
  companyEmail: string;
  establishmentYear: string;
  businessType: string;
  companyPan: string;
  gst: string;
  billingAddress: string;
  state: string;
  district: string;
  city: string;
  pincode: string;
  description: string;
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required(validationMessages.fullName),
  companyName: Yup.string().required(validationMessages.companyName),
  companyEmail: Yup.string()
    .email(validationMessages.emailValidation)
    .required(validationMessages.companyEmail),
  establishmentYear: Yup.string()
    .required(validationMessages.establishmentYear)
    .matches(/^[0-9]+$/, validationMessages.onlyNumbers)
    .max(4, validationMessages.yearMaximum)
    .min(4, validationMessages.yearMaximum),
  businessType: Yup.string()
    .required(validationMessages.businessType)
    .test('', 'Business Type is required', (val) => val !== 'select'),
  companyPan: Yup.string()
    .required('Company Pan is required')
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, validationMessages.panNo),
  gst: Yup.string()
    .required(validationMessages.gst)
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      validationMessages.alphaNumerics
    ),
  billingAddress: Yup.string().required(validationMessages.address),
  state: Yup.string()
    .required(validationMessages.state)
    .test('', validationMessages.state, (val) => val !== 'select'),
  district: Yup.string()
    .required(validationMessages.district)
    .test('', validationMessages.state, (val) => val !== 'select'),
  city: Yup.string().required(validationMessages.city),
  pincode: Yup.string()
    .required(validationMessages.pincode)
    .min(6, validationMessages.pincodeValidation)
    .max(6, validationMessages.pincodeValidation)
    .matches(/^(\d{4}|\d{6})$/, validationMessages.pincodeValidation),
  description: Yup.string().required(validationMessages.description),
});

export const GeneralDetailsPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<object>({});
  const phone = useAppSelector(selectPhone);
  const [success, setSuccess] = useState<boolean>(true);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [kyc, setKyc] = useState<boolean>(false);
  const [skipMessage, setSkipMessage] = useState<string>('');
  const [skipTitle, setSkipTitle] = useState<string>('');
  const [skipFormFlag, setSkipFormFlag] = useState<boolean>(false);
  const [filesSelected, setFilesSelected] = useState<object[]>([]);
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>('');
  const [profilePic, setProfilePic] = useState<{
    fileName: string;
    file: string;
    AssetCategoryName: string;
  }>({
    fileName: '',
    file: '',
    AssetCategoryName: '',
  });

  const dispatch = useAppDispatch();
  const formOptions = {
    defaultValues: {
      fullName: '',
      companyName: '',
      mobileNumber: phone.replace(/\s+/g, ''),
      companyEmail: '',
      establishmentYear: '',
      businessType: 'select',
      companyPan: '',
      gst: '',
      billingAddress: '',
      state: 'select',
      district: 'select',
      city: '',
      pincode: '',
      description: '',
    },
    resolver: yupResolver(validationSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm<FormInputs>(formOptions);

  const enrollmentMutation = useEnrollUserMutation<EnrollUserMutation>(
    graphQLClient()
  );
  const kycMutation = useCreateKycMutation<CreateKycMutation>(graphQLClient());

  const skipKyc = () => {
    setSkipMessage(
      'You will be able to checkout the products only once you complete the KYC. Do you want to complete the KYC now? However you can update the KYC later from KYC Details'
    );
    setSkipTitle('Update KYC');
    setShowWarning(true);
  };

  const skipForm = () => {
    setSkipFormFlag(true);
    setSkipMessage(
      'By skipping you cannot view the price or checkout the products. However you can anytime come back and complete it from your profile page. Do you still want to Skip?'
    );
    setSkipTitle("Don't forget to update");
    setShowWarning(true);
  };

  const upateKycFiles = (fileArray: object[]) => {
    setFilesSelected(fileArray);
    setKyc(false);
  };

  const enrollUser = async (formValues) => {
    const {
      fullName,
      companyName,
      mobileNumber,
      companyEmail,
      establishmentYear,
      businessType,
      companyPan,
      gst,
      billingAddress,
      state,
      district,
      city,
      pincode,
      description,
    } = formValues;

    let dataToPass: any = {
      attributes: [
        {
          name: 'phone',
          value: mobileNumber,
        },
        {
          name: 'email',
          value: companyEmail,
        },
        {
          name: 'established_year',
          value: establishmentYear,
        },
        {
          name: 'pan',
          value: companyPan,
        },
        {
          name: 'gst',
          value: gst,
        },
        {
          name: 'billing_address',
          value: billingAddress,
        },
        {
          name: 'state',
          value: state,
        },
        {
          name: 'district',
          value: district,
        },
        {
          name: 'city',
          value: city,
        },
        {
          name: 'pincode',
          value: pincode,
        },
        {
          name: 'description',
          value: description,
        },
      ],
      name: companyName,
      buisnessType: businessType,
      userName: fullName,
    };

    if (profilePic.file) {
      dataToPass = { ...dataToPass, assetFile: [profilePic] };
    }

    const kycUploads = filesSelected.map((i: any) => {
      delete i.documentType;
      return i;
    });

    const variable = {
      data: dataToPass,
    };

    const kycVariables = {
      data: {
        kycHeaderName: 'udyam_aadhar',
        assetFile: kycUploads as unknown as KycFileInput[],
      },
    };

    await enrollmentMutation
      .mutateAsync(variable)
      .then((res) => {
        dispatch(updateCustomerId(res?.enrollUser.id));
        if (res?.enrollUser) {
          router.push('/user-enroll/categories');
        } else {
          setOpen(true);
          setMessage(res?.enrollUser);
        }
      })
      .catch((err) => {
        setOpen(true);
        setMessage(err.response);
      });

    if (filesSelected.length !== 0) {
      await kycMutation
        .mutateAsync(kycVariables)
        .then((res) => {
          router.push('/user-enroll/categories');
        })
        .catch((err) => {
          console.log('errorrr', err);
        });
    }
  };

  const submitData = handleSubmit(async (formValues) => {
    if (filesSelected.length === 0) {
      skipKyc();
    } else {
      enrollUser(formValues);
    }
  });

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const uploadImage = async (uploadedFile: FileList) => {
    const imageUrl = await toBase64(uploadedFile[0]);
    setProfilePic({
      fileName: uploadedFile[0].name,
      file: imageUrl as string,
      AssetCategoryName: 'company_image',
    });
  };

  const skipConfirm = () => {
    setShowWarning(false);
    const values = getValues();

    if (skipFormFlag) {
      router.push('/user-enroll/categories');
    } else {
      enrollUser(values);
    }
  };

  const skipCancel = () => {
    setShowWarning(false);
    setSkipFormFlag(false);
  };

  return (
    <>
      {kyc ? (
        <KycPage
          {...{
            setKyc,
            upateKycFiles,
            selectedDocumentType,
            setSelectedDocumentType,
            filesSelected,
            setFilesSelected,
          }}
        />
      ) : (
        <>
          {success && <SelectCategoryPopup {...{ setSuccess }} />}
          {open && (
            <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
          )}
          <GeneralDetailsForm
            {...{
              register,
              errors,
              submitData,
              skipForm,
              setKyc,
              uploadImage,
              profilePic,
              control,
            }}
          />

          {showWarning && (
            <SkipConfirmation
              message={skipMessage}
              title={skipTitle}
              type={'warning'}
              skipConfirm={skipConfirm}
              skipCancel={skipCancel}
            />
          )}
        </>
      )}
    </>
  );
};
