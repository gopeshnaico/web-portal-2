import { useForm } from 'react-hook-form';
import { AddBrandDocumentUpload } from '../../ui/Brands/AddBrandDocumentUpload';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export const AddBrandDocumentUploadPage = () => {
  const [file, setFile] = useState();
  const lastSegment = parseInt(window?.location.href.split('/').pop());

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
  const handleChange = (e) => {
    const [f] = e.target.files;
    setFile(f);
  };

  return (
    <>
      <AddBrandDocumentUpload
        {...{ register, handleChange, file, lastSegment }}
      />
    </>
  );
};
