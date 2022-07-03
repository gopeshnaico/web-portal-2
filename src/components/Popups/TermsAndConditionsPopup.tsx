import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ButtonComponent from '../ui-components/button';

export const TermsAndConditionsPopup = ({ setSuccess }) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <div className="fixed left-0 top-0 z-40 w-full h-full overflow-y-auto overflow-hidden">
        <div
          className="max-w-sm z-50 my-7 px-5 mx-auto relative flex items-center"
          style={{ minHeight: 'calc(100% - 3.5rem)' }}
        >
          <div className="p-7 bg-white rounded-xl h-full w-full text-center">
            <img
              src="images/congratulations.svg"
              className="mb-4 inline-block w-16"
              alt=""
            />
            <h2 className="inline-block text-2xl mb-4 w-full font-semibold ">
              {t('Terms')} {'&'} {t('Conditions')}!
            </h2>
            <p className="text-center">
              {t('Terms for use')}
              <small>
                {t(
                  'By clicking "I Accept",you agree to Fawow\'s Terms of Use and Privacy Policy'
                )}
              </small>
            </p>
            <ButtonComponent
              type="button"
              className="btt-primary"
              label="Accpet"
              onClick={() => router.push('/signup/verify-otp')}
            />
            <hr />
            {t('Recieve Order and account related update on Whatsapp')}
            <div className="flex flex-col">
              <h1 className="text-gray-700 font-medium leading-none">
                {t('Element definition')}
              </h1>
              <p className="text-xs text-gray-500 mt-2 leading-4">
                {t(
                  'A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.'
                )}
              </p>
            </div>
            <div className="clear-both" />
            <div className="w-full mt-10 mb-2 text-right flex">
              <ButtonComponent
                type="button"
                className="transition-all  w-auto inline-block px-8 py-2 rounded-lg text-neutral-600 text-base font-semibold mr-0 mb-4 lg:my-0 mr-4 text-center"
                label="Cancel"
                onClick={() => setSuccess(false)}
              />
              <ButtonComponent
                type="button"
                className="btt-primary"
                label={t('Accept')}
                onClick={() => router.push('/signup/verify-otp')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full" />
    </>
  );
};
