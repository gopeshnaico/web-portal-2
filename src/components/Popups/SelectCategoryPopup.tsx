import { useTranslation } from 'next-i18next';
import ButtonComponent from '../ui-components/button';

export const SelectCategoryPopup = ({ setSuccess }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="fixed left-0 top-0 z-40 w-full h-full overflow-y-auto overflow-hidden">
        <div
          className="max-w-lg z-50 my-7 px-5 mx-auto relative flex items-center"
          style={{ minHeight: 'calc(100% - 3.5rem)' }}
        >
          <div className="p-7 bg-white rounded-xl h-full w-full text-center">
            <img
              src="images/congratulations.svg"
              className="mb-4 inline-block w-16"
              alt=""
            />
            <h2 className="inline-block text-2xl mb-4 w-full font-semibold ">
              {t('Congratulations')}!
            </h2>
            <p className="text-center">
              {t(
                'Your mobile number verification is successful with guest permission. Kindly complete the sign-up process to get exciting Fawow features'
              )}
            </p>

            <div className="clear-both" />

            <div className="w-full mt-10 mb-2 text-center">
              <ButtonComponent
                label={t('Continue')}
                type="button"
                onClick={() => setSuccess(false)}
                className="text-white px-10 h-10 leading-10 bg-blue-400 inline-block w-auto rounded-3xl hover:bg-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full" />
    </>
  );
};
