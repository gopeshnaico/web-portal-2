import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import {
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
  DeepMap,
  FieldError
} from 'react-hook-form';
import LogoImage from '../../../../public/images/logo.svg';
import ButtonComponent from '../../ui-components/button';
import HeadingLabel from '../../ui-components/headingLabel';
import InputText from '../../ui-components/inputbox';
import Label from '../../ui-components/label';
import Logo from '../../ui-components/imageView';
import { useAppSelector } from '../../../lib/redux/hooks';
import { SignupLayout } from '../AppLayout/SignupLayout';
import { useTranslation } from 'next-i18next';

export type FieldErrors<
  TFieldValues extends FieldValues = FieldValues
> = DeepMap<TFieldValues, FieldError>;

interface OTPFormProps {
  register: UseFormRegister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  handleVerifyOTP: (formValues: object) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleResend: () => void;
  setFocus: UseFormSetFocus<FieldValues>;
  handleBack: () => void;
  setResetCount: (value: React.SetStateAction<boolean>) => void;
  resetCount: boolean;
  errors: FieldErrors;
  attempt: number;
}

export const VerifyOtp: FC<OTPFormProps> = ({
  register,
  getValues,
  handleVerifyOTP,
  handleSubmit,
  handleResend,
  setResetCount,
  setFocus,
  handleBack,
  errors,
  resetCount,
  attempt,
}) => {
  const authSession = useAppSelector((state) => state.authSession);
  const [count, setCount] = useState<number>(30);
  const { t } = useTranslation();
  const exceptThisSymbols = ['e', 'E', '+', '-', '.'];
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const values = getValues && getValues();
  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => {
      setResetCount && setResetCount(false);
      clearInterval(timer);
    };
  }, [count, resetCount === true]);

  useEffect(() => {
    if (
      values?.one === '' &&
      values?.two === '' &&
      values?.three === '' &&
      values?.four === ''
    ) {
      setDisableButton(true);
    } else setDisableButton(false);
  }, [values]);

  useEffect(() => {
    setFocus && setFocus('one');
  }, [setFocus]);

  const roundNumber = (num) => {
    return num < 10 ? '0' + num.toString() : num.toString();
  };

  return (
    <>
      <div className="flex">
        <SignupLayout />
        <div className="w-full md:w-6/12 bg-white min-h-screen relative mx-auto">
          <div className="px-6 w-full lg:w-10/12 mx-auto min-h-screen pt-10 pb-12">
            <form onSubmit={handleSubmit(handleVerifyOTP)}>
              <div className="text-center">
                <Logo
                  src={LogoImage}
                  className="inline-block logo"
                  alt="Logo"
                  width={200}
                  height={75}
                />
              </div>
              <div className="clear-both" />
              <div>
                <HeadingLabel
                  className="mt-8 mb-2 text-2xl"
                  labelText="Verify your number"
                />
              </div>
              <div className="labelFlex flex items-center" data-testid="label">
                <Label
                  className="labelPadding text-gray-700"
                  labelText="4 digit code sent to"
                />
                <span className="text-blue-400 font-medium text-xl w-full block md:w-auto inline-block ml-1">
                  {authSession?.phone}
                </span>
              </div>
              <div className="clear-both" />
              <div className="flex" data-testid="otpField">
                <InputText
                  id="one"
                  type="number"
                  className="w-full py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-6 text-center text-xl font-medium"
                  name={'one'}
                  maxLength={1}
                  register={register}
                  onChange={(e) => {
                    if (e.target.value.length > 1)
                      e.target.value = e.target.value.charAt(0);
                    if (e.target.value !== '') setFocus('two');
                  }}
                  onKeyDown={(e) =>
                    exceptThisSymbols.includes(e.key) && e.preventDefault()
                  }
                />
                <InputText
                  id="two"
                  type="number"
                  className="w-full py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-6 text-center text-xl font-medium"
                  name={'two'}
                  maxLength={1}
                  register={register}
                  onChange={(e) => {
                    if (e.target.value.length > 1)
                      e.target.value = e.target.value.charAt(0);

                    if (e.target.value !== '') setFocus('three');
                    else setFocus('one');
                  }}
                  onKeyDown={(e) => {
                    exceptThisSymbols.includes(e.key) && e.preventDefault();
                  }}
                />
                <InputText
                  id="three"
                  type="number"
                  className="w-full py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-6 text-center text-xl font-medium"
                  name={'three'}
                  maxLength={1}
                  register={register}
                  onChange={(e) => {
                    if (e.target.value.length > 1)
                      e.target.value = e.target.value.charAt(0);

                    if (e.target.value !== '') setFocus('four');
                    else setFocus('two');
                  }}
                  onKeyDown={(e) =>
                    exceptThisSymbols.includes(e.key) && e.preventDefault()
                  }
                />
                <InputText
                  id="four"
                  type="number"
                  className="w-full py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-6 text-center text-xl font-medium"
                  name={'four'}
                  maxLength={1}
                  register={register}
                  onChange={(e) => {
                    if (e.target.value === '') setFocus('three');
                    if (e.target.value.length > 1)
                      e.target.value = e.target.value.charAt(0);
                  }}
                  onKeyDown={(e) =>
                    exceptThisSymbols.includes(e.key) && e.preventDefault()
                  }
                />
              </div>
              <div className="clear-both" />
              <div className="errorMessage mt-2  text-red-600">
                <p>{errors.one?.message}</p>
              </div>
              <div className="flex mt-8 items-center">
                <div className="mr-auto">
                  {count === 0 ? (
                    <ButtonComponent
                      type="button"
                      className="border-cyan-400 border-2 font-medium text-sm text-cyan-400 inline-block h-9 leading-8 rounded-3xl px-5 w-auto"
                      onClick={() => {
                        handleResend();
                        setCount(30);
                      }}
                      label="Resend Code"
                    />
                  ) : (
                    <ButtonComponent
                      type="button"
                      className="border-gray-400 border-2 font-medium text-sm text-gray-400 inline-block h-9 leading-8 rounded-3xl px-5 w-auto"
                      onClick={() => {
                        setCount(0);
                      }}
                      label="Resend Code"
                      isDisabled={disableButton}
                    />
                  )}
                </div>
                {count === 0 && attempt !== undefined ? (
                  <div className="ml-auto flex items-center text-red-600">
                    {attempt != 0
                      ? `${attempt} Attempts Left`
                      : `No Attempts Left`}
                  </div>
                ) : (
                  <div className="ml-auto flex items-center">
                    Resend OTP in{' '}
                    <img
                      src="/images/time.svg"
                      className="mr-2 ml-4 w-5"
                      alt="time"
                    />
                    <span>{`00:${roundNumber(count)}`}</span>
                  </div>
                )}
              </div>

              <div className="w-full mt-5 mb-2 flex" data-testid="button">
                <ButtonComponent
                  className="btt-secondary bg-gray-200 rounded-3xl mr-2 hover:bg-gray-300 flex-1 w-48"
                  type="button"
                  label="Back"
                  onClick={handleBack}
                />

                <ButtonComponent
                  className={`btt-primary bg-blue-400 rounded-3xl hover:bg-blue-500 flex-1 w-48 ml-2 ${
                    disableButton === true ? 'opacity-25' : ''
                  }`}
                  label="Submit"
                  type="submit"
                  onClick={() => {
                    values;
                  }}
                  isDisabled={disableButton}
                />
              </div>
            </form>
            <div className="clear-both" />
          </div>
          <div className="clear-both" />
          <div className="w-full absolute bottom-4 left-0 text-center text-gray-400">
            Having trouble logging in?{' '}
            <a className="underline text-blue-400 font-medium">Get Help</a>
          </div>
        </div>
      </div>
    </>
  );
};
