import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../ui-components/button';
import { Dispatch, FC, SetStateAction } from 'react';

interface SkipConfirmationProps {
  message: string;
  type: string;
  title?: string;
  skipConfirm?: () => void;
  skipCancel?: () => void;
}
export const SkipConfirmation: FC<SkipConfirmationProps> = ({
  message,
  type,
  title,
  skipConfirm,
  skipCancel,
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
              src={`${
                type === 'error'
                  ? '/images/error-icon.png'
                  : type === 'warning'
                  ? '/images/warning-icon.png'
                  : '/images/congratulations.svg'
              }`}
              className={`mb-4 inline-block w-11  `}
              alt=""
            />
            <h2
              className={
                'inline-block text-2xl mb-4 w-full font-semibold text-black'
              }
            >
              {type === 'error'
                ? 'Error'
                : type === 'warning'
                ? title ?? 'Warning'
                : 'Success'}
            </h2>
            <p className={'text-center text-gray-600 text-grey'}>{message}</p>

            <div className="clear-both" />
            <div className="w-full mt-10 mb-2 text-right flex justify-between">
              <ButtonComponent
                type="button"
                className="transition-all w-auto inline-block px-8 py-2 rounded-lg text-neutral-600 text-base font-semibold mr-0 mb-4 lg:my-0 mr-4 text-center"
                label="Skip"
                onClick={() => skipConfirm()}
              />
              <ButtonComponent
                type="button"
                className="px-8 h-10 leading-10 w-auto bg-blue-400 rounded-3xl hover:bg-blue-500 inline-block text-white"
                label="Cancel"
                onClick={() => skipCancel()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full" />
    </>
  );
};
