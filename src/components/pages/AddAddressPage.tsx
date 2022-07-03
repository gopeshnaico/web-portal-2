import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorHandlingWithResponse } from '../../lib/errorHandling';
import { AddAddressForm } from '../ui/ManageAddress/AddAddress/AddAddress';
import {
  AddAddressMutation,
  UpdateAddressMutation,
  useAddAddressMutation,
  useUpdateAddressMutation,
} from '../../domain/api/graphql';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';
import { AddressType, validationMessages } from '../../lib/common';
import { useAppSelector } from '../../lib/redux/hooks';
import { selectLoggedCustomerId } from '../../lib/redux/reducers/session';

export type AddressInputs = {
  shopName?: string;
  contactName?: string;
  phone?: string;
  addressLine2?: string;
  addressLine1?: string;
  landmark?: string;
  pincode?: string;
  gstin?: string;
};

export const AddAddressPage = ({
  setAddFlag,
  editData,
  editDataId,
  setEditData,
  setEditDataId,
}) => {
  const [message, setMessage] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);
  const customerId = useAppSelector(selectLoggedCustomerId);

  const validationSchema = yup.object().shape({
    shopName: yup.string().required('Shop Name is required'),

    contactName: yup
      .string()
      .required('Contact Person Name is required')
      .matches(/^[a-zA-Z ]*$/, validationMessages.alphabets),

    phone: yup
      .string()
      .required('Contact Number is required')
      .min(10, 'minimum 10 digits')
      .max(10, 'maximum 10 digits')
      .matches(
        /^([+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6})$/,
        validationMessages.onlyNumbers
      ),
    addressLine2: yup.string().required('Bazaar Name is required'),
    // .matches(/^[a-zA-Z0-9]+$/, validationMessages.alphaNumerics),
    addressLine1: yup.string().required('Address is required'),

    landmark: yup.string().required('Landmark is required'),

    pincode: yup
      .string()
      .required('Pincode is required')
      .min(6, 'minimum 6 digits')
      .max(6, 'maximum 6 digits')
      .matches(/^(\d{6})$/, validationMessages.onlyNumbers),
    gstin: yup
      .string()
      .required('GSTIN is required')
      .matches(/^[a-zA-Z0-9]+$/, validationMessages.alphaNumerics)
      .min(14, 'minimum 14 characters')
      .max(15, 'maximum 15 characters'),
  });

  let addressFormValues: AddressType;

  if (editData) {
    addressFormValues = {
      shopName: editData.shopName,
      contactName: editData.contactName,
      phone: editData.phone,
      addressLine2: editData.addressLine2,
      addressLine1: editData.addressLine1,
      landmark: editData.landmark,
      pincode: editData.pincode,
      gstin: editData.gstin,
    };
  } else {
    addressFormValues = {
      shopName: '',
      contactName: '',
      phone: '',
      addressLine2: '',
      addressLine1: '',
      landmark: '',
      pincode: '',
      gstin: '',
    };
  }

  const resolver = {
    defaultValues: addressFormValues,
    resolver: yupResolver(validationSchema),
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddressInputs>(resolver);

  const addMutation = useAddAddressMutation<AddAddressMutation>(
    graphQLClient()
  );
  const editMutation = useUpdateAddressMutation<UpdateAddressMutation>(
    graphQLClient()
  );

  const queryClient = useQueryClient();

  const submitAddress = async (formValues) => {
    const countryCode = formValues.phone.slice(0, 3).trim();
    if (editData) {
      const variable = {
        where: {
          id: editDataId,
        },
        data: {
          shopName: formValues.shopName,
          contactName: formValues.contactName,
          phone:
            countryCode === '+91' ? formValues.phone : `+91${formValues.phone}`,
          addressLine1: formValues.addressLine1,
          addressLine2: formValues.addressLine2,
          landmark: formValues.landmark,
          pincode: formValues.pincode,
          gstin: formValues.gstin,
        },
      };

      await editMutation
        .mutateAsync(variable)
        .then((res) => {
          if (res?.updateAddress) {
            setAddFlag(false);
          }

          queryClient.invalidateQueries();
        })
        .catch((err) => {
          setOpen(true);
          setMessage(err.response);
        });
    } else {
      const variable = {
        data: {
          Address: {
            create: [
              {
                shopName: formValues.shopName,
                contactName: formValues.contactName,
                phone: formValues.phone,
                addressLine1: formValues.addressLine1,
                addressLine2: formValues.addressLine2,
                district: '',
                landmark: formValues.landmark,
                pincode: formValues.pincode,
                gstin: formValues.gstin,
                state: '',
                defaultShipping: true,
                defaultBilling: true,
                CustomerAddress: {
                  create: [
                    {
                      Customer: {
                        connect: {
                          id: customerId,
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      };
      await addMutation
        .mutateAsync(variable)
        .then((res) => {
          if (res?.createAddress?.id) {
            setAddFlag(false);
          }

          queryClient.invalidateQueries();
        })
        .catch((err) => {
          setOpen(true);
          setMessage(err.response);
        });
    }
    setEditData(undefined);
    setEditDataId('');
    reset();
  };

  return (
    <>
      {/* <div className="flex flex-col w-full"> */}
      <div>
        {' '}
        {open && (
          <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
        )}
      </div>
      <AddAddressForm
        {...{
          register,
          submitAddress,
          handleSubmit,
          setAddFlag,
          errors,
          editDataId,
          reset,
        }}
      />
      {/* </div> */}
    </>
  );
};
