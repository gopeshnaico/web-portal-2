import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { validationSchemaMessages } from '../../../lib/common';
import { AddBrandForm } from '../../ui/Brands/AddBrand';
import * as yup from 'yup';
import { ValidationMessages } from '../../Popups/ValidationMessages';

import graphQLClient from '../../../GqQuery/useGQLQuery';
import { useState } from 'react';
import {
  AddBrandMutation,
  useAddBrandMutation,
} from '../../../../src/domain/api/graphql';

export const documentUpload = [
  {
    id: 1,
    documentName: 'Trademark Certificate',
    description:
      'Registered Trademark Certificate issued by the Government of India',
  },
  {
    id: 2,
    documentName: 'Trademark Application',
    description: 'Application for registration of a Trademark',
  },
  {
    id: 3,
    documentName: 'Letterhead',
    description: 'Declaration printed on Letterhead',
  },
];

export const AddBrandPage = () => {
  const [message, setMessage] = useState<string>('');
  const [selectedDocument, setSelectedDocument] = useState<object>({
    id: 1,
    documentName: 'Trademark Certificate',
    description:
      'Registered Trademark Certificate issued by the Government of India',
  });

  const validationSchema = yup.object().shape({
    brandName: yup.string().required('Brand name is required'),
    relationshipType: yup
      .string()
      .required('Relationship type name is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const mutation = useAddBrandMutation<AddBrandMutation>(graphQLClient());

  const handleAddBrand = async (formValues) => {
    const variable = {
      data: {
        name: formValues.brandName,
        description: formValues.brandName,
        relationshiptype: formValues.relationshipType,
        assetFile: [
          {
            file: null,
            fileName: null,
            AssetCategoryName: null,
          },
        ],
      },
    };

    const data = await mutation
      .mutateAsync(variable)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setMessage(err.response);
      });
  };

  return (
    <>
      <AddBrandForm
        {...{
          register,
          handleAddBrand,
          handleSubmit,
          documentUpload,
          setSelectedDocument,
          selectedDocument,
        }}
      />
    </>
  );
};
