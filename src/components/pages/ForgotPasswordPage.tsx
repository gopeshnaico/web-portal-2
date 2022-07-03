import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ForgotPassword } from '../ui/ForgotPassword/ForgotPassword';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorHandlingWithResponse } from '../../lib/errorHandling';
import { MessageBox } from '../Popups/MessageBox';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';
import { validationSchemaMessages } from '../../lib/common';
import {
  useSendUserPasswordResetLinkMutation,
  SendUserPasswordResetLinkMutation,
} from '../../domain/api/graphql';

export const ForgotPasswordPage = () => {
  const [message, setMessage] = useState<any>('');
  const [open, setOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [type, setType] = useState<string>('success');

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(validationSchemaMessages.email.valid)
      .max(255, validationSchemaMessages.email.maxLength)
      .required(validationSchemaMessages.email.required),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const mutation =
    useSendUserPasswordResetLinkMutation<SendUserPasswordResetLinkMutation>(
      graphQLClient()
    );

  const handleSendEmail = async (formValues) => {
    const variable = {
      data: {
        email: formValues?.email,
      },
    };

    const data = await mutation
      .mutateAsync(variable)
      .then((res) => {
        if (res.sendUserPasswordResetLink.isSuccess === 'true') {
          setIsSuccess(true);
          setMessage(res?.sendUserPasswordResetLink.message);
          setType('success');
        } else {
          setIsSuccess(true);
          setMessage(res?.sendUserPasswordResetLink.message);
          setType('error');
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        setMessage(err.response);
        setOpen(true);
      });
  };
  return (
    <>
      {open && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}
      {isSuccess && (
        <MessageBox
          open={isSuccess}
          setOpen={setIsSuccess}
          message={message}
          type={type}
        />
      )}
      <ForgotPassword
        {...{
          register,
          errors,
          handleSendEmail,
          handleSubmit,
        }}
      />
    </>
  );
};
