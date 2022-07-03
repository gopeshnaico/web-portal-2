import { useTranslation } from 'next-i18next';
import { Dispatch, FC, SetStateAction } from 'react';
import ButtonComponent from '../ui-components/button';

interface DeleteAddressProps {
  setDeleteFlag: Dispatch<SetStateAction<boolean>>;
  deleteAddress: () => void;
}

export const DeleteBox: FC<DeleteAddressProps> = ({
  setDeleteFlag,
  deleteAddress,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="fixed left-0 top-0 z-40 w-full h-full overflow-y-auto overflow-hidden">
        <div
          className="max-w-lg z-50 my-7 px-5 mx-auto relative flex items-center"
          style={{ minHeight: 'calc(100% - 3.5rem)' }}
        >
          <div className="p-7 bg-white rounded-xl h-full w-full text-center">
            <i className="fa fa-times-circle" aria-hidden="true" />
            <i className="fa-times-circle-o" />

            <h2 className="inline-block text-2xl mb-4 w-full">
              {t('Are you sure')} ?
            </h2>
            <p className="text-center">
              {t('Do you really want to delete this item?')}
            </p>

            <div className="clear-both" />

            <div className="w-full mt-10 mb-2 text-center gap-4">
              <ButtonComponent
                label={t('Cancel')}
                type="button"
                className="transition-all  w-auto inline-block px-8 py-2 rounded-lg text-neutral-600 text-base font-semibold  mb-4 lg:my-0 mr-4 text-center"
                onClick={() => setDeleteFlag(false)}
              />
              <ButtonComponent
                label={t('Delete')}
                type="button"
                className="text-white px-10 h-10 leading-10 bg-blue-400 inline-block w-auto rounded-3xl hover:bg-blue-500"
                onClick={() => deleteAddress()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full" />
    </>
  );
};
