import { Dispatch, FC, SetStateAction } from 'react';
import {
  FieldError,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';
import { AddressInputs } from '../../../pages/AddAddressPage';
import ButtonComponent from '../../../ui-components/button';

type ErrorType = {
  shopName?: FieldError;
  contactName?: FieldError;
  phone?: FieldError;
  addressLine2?: FieldError;
  addressLine1?: FieldError;
  landmark?: FieldError;
  pincode?: FieldError;
  gstin?: FieldError;
};

interface AddAddressPageProps {
  register: UseFormRegister<AddressInputs>;
  submitAddress: (formValues) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setAddFlag: Dispatch<SetStateAction<boolean>>;
  errors: ErrorType;
  editDataId: string;
  reset: UseFormReset<AddressInputs>;
}

export const AddAddressForm: FC<AddAddressPageProps> = ({
  setAddFlag,
  register,
  submitAddress,
  handleSubmit,
  errors,
  editDataId,
  reset,
}) => {
  const header = editDataId !== '' ? 'Edit Address' : 'Add Address';
  return (
    <>
      {/* <div
        className="w-full block p-6 pl-0 pr-0 lg:flex lg:pl-6"
        data-testid="outerDiv"
      > */}
      {/* <div className="w-full lg:w-1/4" /> */}
      <div
        className="w-full pt-5 lg:w-2/4  px-0 pt-8 pb-16 lg:pl-6 pr-0 m-auto"
        data-testid="outerDiv"
      >
        <h1 className="font-semibold text-xl pb-3"> {header}</h1>
        <form onSubmit={handleSubmit(submitAddress)}>
          <div className="border-2 border-gray-300 p-4 rounded-lg md:p-8">
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('shopName')}
                type="text"
                name="shopName"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.shopName ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.shopName?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Shop Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('contactName')}
                type="text"
                name="contactName"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.contactName ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />

              {errors.contactName?.message && (
                <div className="errorMessageAddAddress details warning-color text-sm">
                  <p data-testid="emailErrorMessage">
                    {errors.contactName?.message}
                  </p>
                </div>
              )}
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Contact Person Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('phone')}
                type="text"
                name="phone"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.phone ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage">{errors.phone?.message}</p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Contact Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('addressLine2')}
                type="text"
                name="addressLine2"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.addressLine2 ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage">
                  {errors.addressLine2?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Shop no. with Complex / Bazaar Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('addressLine1')}
                type="text"
                name="addressLine1"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.addressLine1 ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage">
                  {errors.addressLine1?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Address (Street and area)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('landmark')}
                type="text"
                name="landmark"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.landmark ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage">
                  {errors.landmark?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Landmark
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('pincode')}
                type="text"
                name="pincode"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.pincode ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage">{errors.pincode?.message}</p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Pincode
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                {...register('gstin')}
                type="text"
                name="gstin"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.gstin ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage">{errors.gstin?.message}</p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                GSTIN
              </label>
            </div>
          </div>

          <div className="w-full mb-8 pt-8 text-center sm:text-right">
            <ButtonComponent
              type="button"
              className="btt-seconday"
              onClick={() => {
                reset();
                setAddFlag(false);
              }}
              label="Back"
            />

            <ButtonComponent
              type="submit"
              className="btt ml-0 mt-5 height-56 line-height-56 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full sm:w-auto sm:ml-5 sm:mt-0 hover:bg-cyan-500"
              label="Save"
            />
          </div>
        </form>
      </div>
      {/* <div className="w-full lg:w-1/4" /> */}
      {/* </div> */}
    </>
  );
};
