import ButtonComponent from '../ui-components/button';
import { Dispatch, FC, SetStateAction } from 'react';

interface GoBackConfirmationProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: string;
  type: string;
  skipConfirm?: () => void;
}
export const GoBackConfirmation: FC<GoBackConfirmationProps> = ({
  setOpen,
  message,
  type,
  skipConfirm,
}) => {
  return (
    <>
      <div className="fixed left-0 top-0 z-40 w-full h-full overflow-y-auto overflow-hidden">
        <div
          className="max-w-sm z-50 my-7 px-5 mx-auto relative flex items-center"
          style={{ minHeight: 'calc(100% - 3.5rem)' }}
        >
          <div className="p-7 bg-white rounded-xl h-full w-full text-center">
            <img
              src={'/images/warning-icon.png'}
              className={`mb-4 inline-block w-11`}
              alt=""
            />
            <h2
              className={
                'inline-block text-2xl mb-4 w-full font-semibold black'
              }
            >
              {'Warning'}
            </h2>
            <p
              className={`text-center text-gray-600 ${
                type === 'error' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {message}
            </p>

            <div className="clear-both" />
            <div className="w-full mt-10 mb-2 text-right flex justify-between">
              <ButtonComponent
                type="button"
                className="transition-all w-auto inline-block px-8 py-2 rounded-lg text-neutral-600 text-base font-semibold mr-0 mb-4 lg:my-0 mr-4 text-center"
                label="Cancel"
                onClick={() => setOpen(false)}
              />
              <ButtonComponent
                type="button"
                className="px-8 h-10 leading-10 w-auto bg-blue-400 rounded-3xl hover:bg-blue-500 inline-block text-white"
                label="Back"
                onClick={() => skipConfirm()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full" />
    </>
  );
};
