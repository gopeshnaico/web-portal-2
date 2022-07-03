import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../ui-components/button';
export const MessageBox = ({ open, setOpen, message, type }) => {
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
                  : '/images/congratulations.svg'
              }`}
              className={`mb-4 inline-block w-11  `}
              alt=""
            />
            <h2
              className={`inline-block text-2xl mb-4 w-full font-semibold ${
                type === 'error' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {type === 'error' ? 'Error' : 'Success'}
            </h2>
            <p className={'text-center text-gray-600'}>{message}</p>

            <div className="clear-both" />
            <div className="w-full mt-10 mb-2 text-right flex justify-center">
              <ButtonComponent
                type="button"
                className="btt-primary bg-cyan-500 rounded-full"
                label="Ok"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bg-current left-0 top-0 opacity-40 z-30 w-full h-full" />
    </>
  );
};
