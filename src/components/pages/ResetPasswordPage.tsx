import { yupResolver } from '@hookform/resolvers/yup';
import router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  RedeemUserPasswordResetTokenMutation,
  useRedeemUserPasswordResetTokenMutation,
} from '../../domain/api/graphql';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';
import { validationSchemaMessages } from '../../lib/common';
import { ErrorHandlingWithResponse } from '../../lib/errorHandling';
import { MessageBox } from '../Popups/MessageBox';

import { ResetPassword } from '../ui/ResetPassword/ResetPassword';

export const ResetPasswordPage = () => {
  const [message, setMessage] = useState<any>('');
  const [open, setOpen] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [type, setType] = useState<string>('success');

  const validationSchema = yup.object().shape({
    newPassword: yup
      .string()
      .max(16, validationSchemaMessages.newPassword.maxLength)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
        validationSchemaMessages.newPassword.match
      )
      .required(validationSchemaMessages.newPassword.required),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('newPassword'), null],
        validationSchemaMessages.confirmPassword.confirmMatchMessage
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const mutation =
    useRedeemUserPasswordResetTokenMutation<RedeemUserPasswordResetTokenMutation>(
      graphQLClient()
    );

  const handleResetPassword = async (formValues) => {
    const variable = {
      data: {
        token: router.query?.k as string,
        password: formValues?.newPassword,
      },
    };
    const data = await mutation
      .mutateAsync(variable)
      .then((res) => {
        if (res?.redeemUserPasswordResetToken?.isVerified === true) {
          setIsVerified(true);
          setMessage(res?.redeemUserPasswordResetToken?.message);
          setType('success');
          setTimeout(() => {
            router.push('/login');
          }, 4000);
        } else {
          setIsVerified(true);
          setMessage(res?.redeemUserPasswordResetToken?.message);
          setType('error');
        }
      })
      .catch((err) => {
        setIsVerified(false);
        setMessage(err.response);
        setOpen(true);
      });
  };

  return (
    <>
      {open && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}
      {isVerified && (
        <MessageBox
          open={isVerified}
          setOpen={setIsVerified}
          message={message}
          type={type}
        />
      )}
      <ResetPassword
        {...{
          register,
          errors,
          handleResetPassword,
          handleSubmit,
        }}
      />
    </>
  );
};
