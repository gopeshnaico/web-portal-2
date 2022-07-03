import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
  FieldError,
  DeepMap
} from 'react-hook-form';
import LogoImage from '../../../../public/images/logo.svg';
import ButtonComponent from '../../ui-components/button';
import HeadingLabel from '../../ui-components/headingLabel';

import Label from '../../ui-components/label';
import Logo from '../../ui-components/imageView';
import { SignupLayout } from '../AppLayout/SignupLayout';
import InputText from '../../ui-components/inputbox';
import CheckBoxWithoutLabel from '../../ui-components/checkboxWithoutLabel';

export type FieldErrors<
  TFieldValues extends FieldValues = FieldValues
> = DeepMap<TFieldValues, FieldError>;

interface SignupProps {
  register: UseFormRegister<FieldValues>;
  handleSignup: (formValues: object) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors:FieldErrors;
  setFocus: UseFormSetFocus<FieldValues>;
  validateTerms: boolean;
  isCheckedTerms: boolean;
  setIsCheckedTerms: Dispatch<SetStateAction<boolean>>;
}

export const Signup: FC<SignupProps> = ({
  register,
  handleSignup,
  handleSubmit,
  errors,
  setFocus,
  isCheckedTerms,
  setIsCheckedTerms,
}) => {
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const { t } = useTranslation();
  useEffect(() => {
    setFocus && setFocus('phone');
  }, []);

  return (
    <>
      <div className="flex">
        <SignupLayout />
        <div className="w-full md:w-6/12 bg-white min-h-screen relative mx-auto">
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="px-6 w-full lg:w-10/12 mx-auto min-h-screen pt-10 pb-12">
              <div className="text-center">
                <Logo
                  src={LogoImage}
                  className="inline-block logo"
                  alt="Logo"
                  width={200}
                  height={75}
                />
                <HeadingLabel
                  className="mt-2 mb-2 text-2xl font-medium text-gray-700"
                  labelText="The Wow Experience"
                />
              </div>
              <div className="clear-both" />
              <div>
                <HeadingLabel
                  className="mt-8 mb-2 text-xl"
                  labelText="Provide your number"
                />
              </div>
              <div>
                <Label
                  className="mb-8 text-gray-500 mt-0"
                  labelText="Let's Get Started"
                />
              </div>

              <div className="clear-both" />
              <div className="flex mb-3">
                <InputText
                  name="countryCode"
                  type="text"
                  register={register}
                  className="text-center w-20 py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-6"
                  placeholder="+91"
                  disabled={true}
                />
                <label className="w-full">
                  <input
                    type="number"
                    name="phone"
                    {...register('phone')}
                    className={`w-full py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-0 ${
                      errors.phone ? 'is-invalid border-b-red-400' : ''
                    }`}
                    placeholder={'Your mobile number'}
                    onChange={(e) => {
                      if (e.target.value.length === 10) setDisableButton(true);
                      else setDisableButton(false);
                    }}
                  />
                </label>
              </div>

              <div className="errorMessage text-center">
                <p>{errors.phone?.message}</p>
              </div>
              <div className="clear-both" />
              <div className="w-full">
                <label className="text-slate-500">
                  <CheckBoxWithoutLabel
                    isChecked={isCheckedTerms}
                    onChange={() => setIsCheckedTerms(!isCheckedTerms)}
                  />
                  <span>
                    By continuing, I agree to the{' '}
                    <a className="text-black">Terms of Use</a> &amp;{' '}
                    <a className="text-black">Privacy Policy</a>{' '}
                  </span>
                </label>
              </div>

              <div className="w-full mt-6 mb-2 block text-right">
                <div
                  className="w-auto mt-6 mb-2 block text-right flex justify-end"
                  data-testid="submitButton"
                >
                  {isCheckedTerms === true && disableButton === true ? (
                    <ButtonComponent
                      className={`w-auto btt-primary bg-blue-400 rounded-full text-white  hover:bg-blue-500`}
                      label="Get Verification Code"
                      type="submit"
                      name="button"
                    />
                  ) : (
                    <ButtonComponent
                      className={`w-auto btt-primary bg-gray-300 rounded-full text-black `}
                      label="Get Verification Code"
                      type="submit"
                      name="button"
                    />
                  )}
                </div>
                {/* <a className="w-auto px-8 py-3 text-center bg-blue-400 rounded-3xl hover:bg-blue-500 inline-block text-white">
                Get verification code
              </a> */}
              </div>
            </div>
          </form>
          <div className="clear-both" />
          <div className="w-full absolute bottom-4 left-0 text-center text-gray-400">
            Having trouble logging in?{' '}
            <a className="underline text-blue-400 font-medium">Get Help</a>
          </div>
        </div>
      </div>

      {/* <div
        className="min-h-screen login_bg p-5 md:p-10 bg-blue-400"
        data-testid="outerDiv"
      >
        <form onSubmit={handleSubmit(handleSignup)}>
          <div
            className="bg-white mb-10 p-5 mx-auto shadow-lg rounded-lg w-full xl:w-2/5 lg:w-1/2 md:w-3/5 sm:p-8"
            data-testid="cardDiv"
          >
            <Logo
              src={LogoImage}
              className="inline-block logo"
              alt="Logo"
              width={200}
              height={75}
            />
            <HeadingLabel
              className="mt-2 mb-2 text-2xl font-medium text-gray-700"
              labelText={t('The Wow Experience')}
            />
            <div>
              <HeadingLabel
                className="mt-8 mb-2 text-xl"
                labelText={t('Provide your number')}
              />
            </div>
            <div>
              <Label
                className="mb-8 text-gray-500 mt-0"
                labelText={t("Let's Get Started")}
              />
            </div>
            <div className="clear-both" />
            <div className="flex w-full" data-testid="mobileNumber">
              <InputText
                name="countryCode"
                type="text"
                register={register}
                className="text-center w-20 py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-6"
                placeholder="+91"
                disabled={true}
              />
              <label className="w-full">
                <InputText
                  type="number"
                  name="phone"
                  register={register}
                  className={`w-full py-2 mr-2 border-0 border-b-2 focus-visible:outline-0 md:mr-0 ${
                    errors.phone ? 'is-invalid border-b-red-400' : ''
                  }`}
                  placeholder={t('Your mobile number')}
                  onChange={(e) => {
                    if (e.target.value.length === 10) setDisableButton(true);
                    else setDisableButton(false);
                  }}
                />
              </label>
            </div>
            <div className="clear-both" />
            <div className="errorMessage">
              <p>{errors.phone?.message}</p>
            </div>
            <div className="text-gray-500 pt-8">
              <CheckBox
                label={t(
                  'By continuing, I agree to the Terms Of Use & Privacy Policy'
                )}
                isChecked={isCheckedTerms}
                onChange={() => setIsCheckedTerms(!isCheckedTerms)}
              ></CheckBox>
            </div>

            <div
              className="w-full mt-10 mb-2 md:flex"
              data-testid="submitButton"
            >
              {isCheckedTerms === true && disableButton === true ? (
                <ButtonComponent
                  className={`w-full btt-primary bg-blue-400 rounded-full text-white  hover:bg-blue-500`}
                  label={t('Get Verification Code')}
                  type="submit"
                  name="button"
                />
              ) : (
                <ButtonComponent
                  className={`w-full btt bg-gray-300 rounded-full text-black`}
                  label={t('Get Verification Code')}
                  type="submit"
                  name="button"
                />
              )}
            </div>
          </div>
        </form>
        <div className="mx-auto w-full text-center text-white xl:w-2/5 lg:w-1/2 md:w-3/5">
          {t('Having trouble logging in?')}{' '}
          <a className="underline">
            {t('Get Help')}
          </a>
        </div>
      </div> */}
    </>
  );
};
