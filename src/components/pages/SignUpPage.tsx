/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorHandlingWithResponse } from '../../../src/lib/errorHandling';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  SendOtpMutationMutation,
  useSendOtpMutationMutation,
} from '../../domain/api/graphql';

import graphQLClient from '../../domain/GqQuery/useGQLQuery';

import { useAppDispatch } from '../../lib/redux/hooks';
import { updatePhone } from '../../lib/redux/reducers/session';
import { Oops } from '../Popups/Oops';
import { Signup } from '../ui/SignUp/Signup';
import { MessageBox } from '../Popups/MessageBox';

export const SignupPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const [messageBox, setMessageBox] = useState<boolean>(false);
  const [type, setType] = useState<string>('success');
  const [message, setMessage] = useState<string>('');
  const [validateTerms, setValidateTerms] = useState<boolean>(false);
  const [isCheckedTerms, setIsCheckedTerms] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .required('Mobile Number is required')
      .matches(/^\d{10}$/, 'Enter Valid Mobile Number'),
  });

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const mutation = useSendOtpMutationMutation<SendOtpMutationMutation>(
    graphQLClient()
  );

  const handleSignup = async (formValues) => {
    if (isCheckedTerms === true) {
      const variable = {
        data: {
          phone: `+91 ${formValues.phone}`,
        },
      };

      dispatch(updatePhone(`+91 ${formValues.phone}`));
      await mutation
        .mutateAsync(variable)
        .then((res) => {
          if (res?.sendOTP.isSend) {
            setOpen(false);
            localStorage.setItem('attempt', '');
            mutation.reset();
            router.push('/signup/verify-otp');
          } else {
            setOpen(true);
            setMessage(res?.sendOTP.message);
          }
        })
        .catch((err) => {
          setOpen(true);
          setMessage(err?.response);
        });
    } else setValidateTerms(true);
  };

  return (
    <>
      {open && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}
      {validateTerms && <Oops {...{ setValidateTerms }} />}
      {messageBox && (
        <MessageBox
          open={messageBox}
          setOpen={setMessageBox}
          message={message}
          type={type}
        />
      )}
      <Signup
        {...{
          register,
          handleSignup,
          handleSubmit,
          errors,
          setFocus,
          validateTerms,
          isCheckedTerms,
          setIsCheckedTerms,
        }}
      />
    </>
  );
};
