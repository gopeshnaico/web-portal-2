/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorHandlingWithResponse } from '../../../src/lib/errorHandling';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  SendOtpMutationMutation,
  useSendOtpMutationMutation,
  useVerifyOtpMutation,
  VerifyOtpMutation,
} from '../../domain/api/graphql';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks';
import {
  updateAuth,
  selectPhone,
  updateCustomerId,
} from '../../lib/redux/reducers/session';
import { VerifyOtp } from '../ui/VerifyOtp/VerifyOtp';
import { MessageBox } from '../Popups/MessageBox';

export const VerifyOtpPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const phone = useAppSelector(selectPhone);
  const [open, setOpen] = useState<boolean>(false);
  const [messageBox, setMessageBox] = useState<boolean>(false);
  const [type, setType] = useState<string>('success');

  const [message, setMessage] = useState<string>('');
  const [resetCount, setResetCount] = useState(true);
  const [attempt, setAttempt] = useState<number>();

  const validationSchema = yup.object().shape({
    one: yup.string().required('Please Fill All Fields'),
    two: yup.string().required('Please Fill All Fields'),
    three: yup.string().required('Please Fill All Fields'),
    four: yup.string().required('Please Fill All Fields'),
  });

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const mutation = useVerifyOtpMutation<VerifyOtpMutation>(graphQLClient());

  const resendMutation = useSendOtpMutationMutation<SendOtpMutationMutation>(
    graphQLClient()
  );

  const handleVerifyOTP = async (formValues) => {
    const otp = `${formValues.one}${formValues.two}${formValues.three}${formValues.four}`;
    const variable = {
      data: {
        phone: phone,
        otp: otp,
      },
    };

    await mutation
      .mutateAsync(variable)
      .then((res) => {
        if (res.verifyOTP.isFirstLogin === true) {
          dispatch(updateAuth(res?.verifyOTP.token));
          router.push('/user-enroll');
        } else {
          if (res.verifyOTP.isVerified === true) {
            dispatch(updateAuth(res?.verifyOTP.token));
            dispatch(
              updateCustomerId(res?.verifyOTP.user?.Customers[0]?.customerId)
            );
            router.push('/dashboard');
          } else {
            setAttempt(res?.verifyOTP?.loginAttemptsLeft);
            setOpen(false);
            setMessageBox(true);
            setType('error');
            setMessage(res?.verifyOTP.message);
            reset();
          }
          if (res.verifyOTP.loginAttemptsLeft == 0) {
            setMessage(res?.verifyOTP.message);
          }
        }
      })
      .catch((err) => {
        setMessageBox(false);
        setOpen(true);
        setType('error');
        setMessage(err.response);
      });
  };

  const handleResend = async () => {
    const variable = {
      data: {
        phone: phone,
      },
    };
    const data = await resendMutation.mutateAsync(variable).then((res) => {
      setMessage(res?.sendOTP.message);
      setResetCount(true);
      reset();
    });
  };

  const handleBack = () => {
    router.push('/signup');
  };

  return (
    <>
      {open && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}
      {messageBox && (
        <MessageBox
          open={messageBox}
          setOpen={setMessageBox}
          message={message}
          type={type}
        />
      )}
      <VerifyOtp
        {...{
          register,
          getValues,
          handleVerifyOTP,
          handleResend,
          handleSubmit,
          errors,
          reset,
          resetCount,
          setResetCount,
          attempt,
          setFocus,
          handleBack,
        }}
      />
    </>
  );
};
