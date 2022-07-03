import router from 'next/router';
import { Dispatch, FC, SetStateAction } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import AnchorTag from '../../ui-components/anchor-tag';
import CheckBox from '../../ui-components/checkbox';
import HeaderText from '../../ui-components/header';
import Logo from '../../ui-components/imageView';
import Text from '../../ui-components/text';
import TestImage from '../../../../public/images/logo.svg';
import ButtonComponent from '../../ui-components/button';
import InputText from '../../ui-components/inputbox';
import { useTranslation } from 'next-i18next';

interface LoginFormProps {
  register: UseFormRegister<FieldValues>;
  handleLogin: (formValues: object) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setRememberMe: Dispatch<SetStateAction<boolean>>;
  rememberMe: boolean;
  errors: {
    [x: string]: any;
  };
}

export const LoginForm: FC<LoginFormProps> = ({
  register,
  handleLogin,
  handleSubmit,
  setRememberMe,
  rememberMe,
  errors,
}) => {
  const { t } = useTranslation();
  return (
    <div data-testid="outerDiv">
      <div className="login-outer background-color">
        <form onSubmit={handleSubmit(handleLogin)}>
          <section className="h-full min-h-screen login_bg p-5 md:p-10 background-image bg-cover bg-center ...">
            <div className="bg-white mb-10 p-5 ml-0 shadow-lg rounded-lg w-full md:ml-auto lg:w-2/5 md:w-3/5 sm:p-8">
              <div className="inline-block logo" />
              <Logo
                height={75}
                width={200}
                src={TestImage}
                className="inline-block logo"
                alt="Logo"
              />
              <div className="clear-both" />
              <HeaderText label={t('Sign In')} />
              <Text label={t('Please enter your email and password')} />
              <div className="clear-both" />
              <InputText
                register={register}
                name="email"
                type="text"
                className={`w-full py-2 mb-4 border-0 border-b-2 focus-visible:outline-0 ${
                  errors.email ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder={t('Email')}
              />
              <div className="errorMessage details warning-color">
                <p data-testid="emailErrorMessage">{errors.email?.message}</p>
              </div>
              <InputText
                register={register}
                name="password"
                type="password"
                className={`w-full py-2 mb-4 border-0 border-b-2 focus-visible:outline-0 ${
                  errors.password ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder={t('Password')}
              />
              <div className="errorMessage details warning-color">
                <p data-testid="passwordErrorMessage">
                  {errors.password?.message}
                </p>
              </div>
              <div className="clear-both"></div>
              <div className="flex justify-between">
                <div className="float-left">
                  <label className="text-slate-500">
                    <CheckBox
                      label={t('Remember me')}
                      onChange={() => setRememberMe(!rememberMe)}
                      isChecked={rememberMe}
                    />
                  </label>
                </div>
                <AnchorTag
                  label={t('Forgot Password')}
                  onClick={() => router.push(`/forgot-password`)}
                />
              </div>
              <div className="clear-both"></div>
              <div className="w-full mt-10 mb-2 flex-auto flex gap-4">
                <ButtonComponent
                  type="button"
                  className="btt-secondary btn-back mr-2"
                  label={t('Back')}
                  onClick={() => router.push(`/signup/verify-otp`)}
                />
                <ButtonComponent
                  type="submit"
                  className="btt-primary btn-sign mr-2"
                  label={t('Sign In')}
                />
              </div>
            </div>
          </section>
        </form>
      </div>
      <main />
    </div>
  );
};
