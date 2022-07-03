import { FC } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import router from 'next/router';
import HeaderText from '../../ui-components/header';
import Text from '../../ui-components/text';
import ButtonComponent from '../../ui-components/button';
import InputText from '../../ui-components/inputbox';
// import InputText from '../../ui-components/inputBox';
import { useTranslation } from 'next-i18next';
import ImageView from '../../ui-components/imageView';

interface ForgotPasswordProps {
  register: UseFormRegister<FieldValues>;
  handleSendEmail: (formValues: any) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: {
    [x: string]: any;
  };
}
export const ForgotPassword: FC<ForgotPasswordProps> = ({
  register,
  errors,
  handleSendEmail,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {' '}
      <form onSubmit={handleSubmit(handleSendEmail)}>
        <section className="h-full min-h-screen login_bg p-5 md:p-10 background-image bg-cover bg-center ...">
          <div className="bg-white mb-10 p-5 mx-auto shadow-lg rounded-lg w-full xl:w-2/5 lg:w-1/2 md:w-3/5 sm:p-8">
            <div className="inline-block logo background-image" />
            <ImageView
              src="/images/logo.svg"
              className="inline-block logo"
              alt="Logo"
              height={75}
              width={200}
            />
            <div className="clear-both" />
            <HeaderText label={t('Forgot Password')} />
            <Text label={t('Please enter your email')} />
            <div className="clear-both" />
            <InputText
              register={register}
              name="email"
              type="text"
              className={`w-full py-2 mb-4 border-0 border-b-2 focus-visible:outline-0 
                    ${errors.email ? 'is-invalid border-b-red-400' : ''}`}
              placeholder={t('Email Id')}
            />
            <div className="errorMessage details warning-color">
              <p data-testid="email-error">{errors.email?.message}</p>
            </div>
            <div className="clear-both"></div>
            <div className="w-full mt-10 mb-2 flex-auto flex gap-4">
              <ButtonComponent
                type="button"
                className="btt-secondary btn-sign mr-2"
                label={t('Back')}
                onClick={() => router.push(`/login`)}
              />
              <ButtonComponent
                type="submit"
                className="btt-primary btn-sign mr-2"
                label={t('Send')}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
