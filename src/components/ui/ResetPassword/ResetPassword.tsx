import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import ButtonComponent from '../../ui-components/button';
import HeaderText from '../../ui-components/header';
import InputText from '../../ui-components/inputbox';
import Logo from '../../ui-components/imageView';
import Text from '../../ui-components/text';

interface ResetPasswordProps {
  register: UseFormRegister<FieldValues>;
  handleResetPassword: (formValues: any) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: {
    [x: string]: any;
  };
}

export const ResetPassword: FC<ResetPasswordProps> = ({
  register,
  errors,
  handleResetPassword,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="login-outer background-color">
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <section className="h-full min-h-screen login_bg p-5 md:p-10 background-image bg-cover bg-center ...">
              <div className="bg-white mb-10 p-5 mx-auto shadow-lg rounded-lg w-full xl:w-2/5 lg:w-1/2 md:w-3/5 sm:p-8">
                <div className="inline-block logo background-image" />
                <Logo
                  src="/images/logo.svg"
                  className="inline-block logo"
                  alt="Logo"
                  height={75}
                  width={200}
                />
                <div className="clear-both" />
                <HeaderText label={t('Reset Password')} />
                <Text label={t('Please enter your new password')} />
                <div className="clear-both" />
                <InputText
                  register={register}
                  name="newPassword"
                  type="password"
                  className={`w-full py-2 mb-4 border-0 border-b-2 focus-visible:outline-0 
                    ${errors.newPassword ? 'is-invalid border-b-red-400' : ''}`}
                  placeholder={t('New Password')}
                />
                <div className="errorMessage details warning-color">
                  <p data-testid="new-password">
                    {errors.newPassword?.message}
                  </p>
                </div>
                <InputText
                  register={register}
                  name="confirmPassword"
                  type="password"
                  className={`w-full py-2 mb-4 border-0 border-b-2 focus-visible:outline-0 
                    ${
                      errors.confirmPassword
                        ? 'is-invalid border-b-red-400'
                        : ''
                    }`}
                  placeholder={t('Confirm Password')}
                />
                <div className="errorMessage details warning-color">
                  <p data-testid="confirm-password">
                    {errors.confirmPassword?.message}
                  </p>
                </div>
                <div className="clear-both"></div>
                <div className="w-full mt-10 mb-2 flex-auto flex gap-4">
                  <ButtonComponent
                    type="submit"
                    className="btt-primary btn-sign mr-2"
                    label={t('Reset Password')}
                  />
                </div>
              </div>
            </section>
          </form>
        </div>
        <main />
      </div>
    </>
  );
};
