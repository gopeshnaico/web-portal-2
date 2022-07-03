import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  UpdateCustomerDetailsMutation,
  useUpdateCustomerDetailsMutation,
  useViewCustomerDetailsQuery,
  ViewCustomerDetailsQuery,
} from '../../domain/api/graphql';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';
import { validationMessages, validationSchemaMessages } from '../../lib/common';
import { ViewProfile } from '../ui/ViewProfile/ViewProfile';
import { useAppSelector } from '../../lib/redux/hooks';
import { selectLoggedCustomerId } from '../../lib/redux/reducers/session';

import { MessageBox } from '../Popups/MessageBox';
import { ErrorHandlingWithResponse } from '../../lib/errorHandling';

export type ProfileInputs = {
  name?: string;
  phone?: string;
  email?: string;
  established_year?: string;
  pan?: string;
  gst?: string;
  description?: string;
  businessType?: string;
};

export const ViewProfilePage = () => {
  const customerId = useAppSelector(selectLoggedCustomerId);
  const editMutation =
    useUpdateCustomerDetailsMutation<UpdateCustomerDetailsMutation>(
      graphQLClient()
    );
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>('success');
  const [message, setMessage] = useState<string>('');

  const validationSchema = yup.object().shape(
    {
      name: yup
        .string()
        .required('Seller Name is required')
        .min(5, 'minimum 5 characters')
        .max(250, 'maximum 250 characters'),
      phone: yup.string(),

      email: yup
        .string()
        .required(validationSchemaMessages.email.required)
        .email(validationSchemaMessages.email.valid)
        .max(250, validationSchemaMessages.email.maxLength),
      established_year: yup
        .string()
        .nullable()
        .notRequired()
        .when('established_year', {
          is: (value) => value?.length,
          then: (rule) =>
            rule
              .matches(/^[0-9]+$/, validationMessages.onlyNumbers)
              .max(4, validationMessages.yearMaximum)
              .min(3, validationMessages.yearMaximum),
        }),
      businessType: yup.string().required('Business Type is required'),
      pan: yup
        .string()
        .nullable()
        .notRequired()
        .when('pan', {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, validationMessages.panNo),
        }),
      gst: yup
        .string()
        .nullable()
        .notRequired()
        .when('gst', {
          is: (value) => value?.length,
          then: (rule) =>
            rule
              .matches(/^[a-zA-Z0-9]+$/, validationMessages.alphaNumerics)
              .min(14, validationMessages.gstMinimum)
              .max(15, validationMessages.gstMaximum),
        }),
      description: yup.string(),
    },
    [
      ['established_year', 'established_year'],
      ['pan', 'pan'],
      ['gst', 'gst'],
    ]
  );

  const { data } = useViewCustomerDetailsQuery<ViewCustomerDetailsQuery>(
    graphQLClient(),
    {
      where: {
        id: customerId,
      },
    }
  );

  const emailId = data?.customer?.CustomerEnrollmentValue?.find(
    (i) => i.Attribute.name === 'email'
  );
  const phoneId = data?.customer?.CustomerEnrollmentValue?.find(
    (i) => i.Attribute.name === 'phone'
  );
  const panId = data?.customer?.CustomerEnrollmentValue?.find(
    (i) => i.Attribute.name === 'pan'
  );
  const gstId = data?.customer?.CustomerEnrollmentValue?.find(
    (i) => i.Attribute.name === 'gst'
  );
  const establishedYearId = data?.customer?.CustomerEnrollmentValue?.find(
    (i) => i.Attribute.name === 'established_year'
  );

  const descriptionId = data?.customer?.CustomerEnrollmentValue?.find(
    (i) => i.Attribute.name === 'description'
  );

  const profileFormValues = {
    name: data?.customer?.name ?? '',
    phone: phoneId?.attributeValueText ?? '',
    email: emailId?.attributeValueText,
    established_year: establishedYearId?.attributeValueText ?? '',
    businessType: data?.customer?.EnrollmentType?.name ?? '',
    pan: panId?.attributeValueText ?? '',
    gst: gstId?.attributeValueText ?? '',
    description: descriptionId?.attributeValueText ?? '',
  };

  const resolver = {
    defaultValues: profileFormValues,
    resolver: yupResolver(validationSchema),
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileInputs>(resolver);

  useEffect(() => {
    reset({
      name: data?.customer?.name ?? '',
      phone: phoneId?.attributeValueText ?? '',
      email: emailId?.attributeValueText,
      established_year: establishedYearId?.attributeValueText ?? '',
      businessType: data?.customer?.EnrollmentType?.name,
      pan: panId?.attributeValueText ?? '',
      gst: gstId?.attributeValueText ?? '',
      description: descriptionId?.attributeValueText ?? '',
    });
  }, [data]);

  const handleProfile = handleSubmit(async (formValues) => {
    const variable = {
      data: {
        customerId: customerId,
        customerName: formValues.name,
        buisnessType: formValues.businessType,
        attributes: [
          {
            attributeId: emailId.attributeId,
            attributeValueText: formValues.email,
          },
          {
            attributeId: phoneId.attributeId,
            attributeValueText: formValues.phone,
          },
          {
            attributeId: panId.attributeId,
            attributeValueText: formValues.pan,
          },
          {
            attributeId: gstId.attributeId,
            attributeValueText: formValues.gst,
          },
          {
            attributeId: establishedYearId.attributeId,
            attributeValueText: formValues.established_year,
          },
          {
            attributeId: descriptionId.attributeId,
            attributeValueText: formValues.description,
          },
        ],
      },
    };
    await editMutation
      .mutateAsync(variable)
      .then((res) => {
        if (res.updateCustomer.id) {
          setMessage('Details updated success');
          setOpen(true);
          setType('success');
        }
      })
      .catch((error) => {
        setErrorOpen(true);
        setMessage(error.response);
      });
  });

  return (
    <>
      {errorOpen && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}

      {open && <MessageBox {...{ open, setOpen, message, type }} />}
      <ViewProfile
        {...{
          register,
          handleProfile,
          handleSubmit,
          errors,
        }}
        data={data}
      />
    </>
  );
};
