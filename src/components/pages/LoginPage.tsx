/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  UserLoginMutation,
  useUserLoginMutation,
} from '../../domain/api/graphql';
import { LoginForm } from '../ui/Login/LoginForm';
import { ErrorHandlingWithResponse } from '../../lib/errorHandling';
import { validationSchemaMessages } from '../../lib/common';
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks';
import { updateAuth, selectAuthToken } from '../../lib/redux/reducers/session';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';

export const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<any>('');
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectAuthToken);
  // form validation rules
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required(validationSchemaMessages.email.required)
      .email(validationSchemaMessages.email.valid)
      .max(255, validationSchemaMessages.email.maxLength),
    password: yup
      .string()
      .min(8, validationSchemaMessages.password.minLength)
      .max(16, validationSchemaMessages.password.maxLength)
      .required(validationSchemaMessages.password.required),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    const savedCredentials: string | null = localStorage.getItem('userDetails');
    if (savedCredentials) {
      const userData = JSON.parse(savedCredentials?.toString());
      if (userData) {
        setValue('email', userData.email);
        setValue('password', userData.password);
        setRememberMe(true);
      } else {
        setRememberMe(false);
      }
    }
  }, [setValue]);

  const mutation = useUserLoginMutation<UserLoginMutation>(graphQLClient());

  const handleLogin = async (formValues) => {
    if (rememberMe) {
      localStorage.setItem('userDetails', JSON.stringify(formValues));
    } else {
      localStorage.removeItem('userDetails');
    }
    const variable = {
      data: {
        email: formValues.email,
        password: formValues.password,
      },
    };

    const data = await mutation
      .mutateAsync(variable)
      .then((res) => {
        if (res?.passwordLogin.isVerified) {
          setOpen(false);
          dispatch(updateAuth(res?.passwordLogin.token));
          router.push('/dashboard');
        } else {
          setOpen(true);
          setMessage(res?.passwordLogin);
        }
      })
      .catch((err) => {
        setOpen(true);
        setMessage(err.response);
      });
  };

  return (
    <>
      {open && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}
      <LoginForm
        {...{
          register,
          handleLogin,
          handleSubmit,
          setRememberMe,
          rememberMe,
          errors,
        }}
      />
    </>
  );
};
