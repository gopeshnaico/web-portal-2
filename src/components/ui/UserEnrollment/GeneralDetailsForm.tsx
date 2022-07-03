import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Control, FieldError, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { ValidationMessages } from '../../Popups/ValidationMessages';
import { FormInputs } from '../../pages/GeneralDetailsPage';
import { LocationsQuery, useLocationsQuery } from '../../../domain/api/graphql';
import graphQLClient from '../../../../src/GqQuery/useGQLQuery';

type ErrorType = {
  fullName?: FieldError;
  companyName?: FieldError;
  mobileNumber?: FieldError;
  companyEmail?: FieldError;
  establishmentYear?: FieldError;
  businessType?: FieldError;
  companyPan?: FieldError;
  gst?: FieldError;
  billingAddress?: FieldError;
  state?: FieldError;
  district?: FieldError;
  city?: FieldError;
  pincode?: FieldError;
  description?: FieldError;
};

interface GeneralDetailsFormProps {
  register: UseFormRegister<FormInputs>;
  errors: ErrorType;
  submitData: () => void;
  skipForm: () => void;
  setKyc: Dispatch<SetStateAction<boolean>>;
  uploadImage: (file: FileList) => void;
  profilePic: any;
  control: Control<FormInputs, any>;
}

export const GeneralDetailsForm: FC<GeneralDetailsFormProps> = ({
  register,
  errors,
  submitData,
  skipForm,
  setKyc,
  uploadImage,
  profilePic,
  control,
}) => {
  const { t } = useTranslation();

  const { data: statesList } = useLocationsQuery<LocationsQuery>(
    graphQLClient(),
    {}
  );

  const [selectedState, setSelectedState] = useState<string>('select');
  const [districts, setDistricts] = useState<any>([]);

  useEffect(() => {
    const selectedId =
      statesList &&
      statesList?.geoLocations.find(
        (location) => location.name === selectedState
      )?.id;
    const districtUnderTheState =
      statesList &&
      statesList?.geoLocations.find((location) => location.id === selectedId)
        ?.SubGeoLocation;
    setDistricts(districtUnderTheState);
  }, [selectedState]);

  const options = [
    { label: t('Retailer'), value: 'buyer' },
    { label: t('Manufacturer'), value: 'seller' },
  ];
  return (
    <>
      <div className="py-6">
        <div className="clear-both" />
        <div className="row-outer block flex-wrap sm:flex">
          <div className="w-full px-3 mb-8 sm:mb-0 md:w-full lg:w-4/12">
            <div className="block sm:flex border-2 border-gray-300 p-2 bg-gray-100 rounded-lg mb-2">
              <div className="relative w-20 mx-auto sm:mr-2 sm:ml-0">
                <div className="overflow-hidden rounded-full w-14 h-14 mr-3 bg-gray-300 text-center">
                  {profilePic?.file !== '' ? (
                    <img
                      src={profilePic?.file}
                      className="inline-block profile-pic"
                      alt="user"
                    />
                  ) : (
                    <img
                      src="images/upload-img-icon.svg"
                      className="w-8 mt-3 opacity-40 inline-block"
                      alt="user"
                    />
                  )}
                </div>
                <label className="flex flex-col" htmlFor="dropzone-file">
                  <div>
                    <a className="p-2 absolute bottom-0 right-2 rounded-full shadow-lg primary-bg w-8 h-8 cursor-pointer">
                      <img src="images/camera-white.svg" alt="edit" />
                    </a>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        uploadImage(e.target.files);
                      }}
                    />
                  </div>
                </label>
              </div>
              <div className="text-gray-500 text-center pt-4">
                {t('Store Photo')}
              </div>
            </div>
          </div>

          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 mt-3 md:mt-3 lg:mt-7">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                focus:ring-0 focus:border-blue-600 peer ${
                  errors.fullName ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('fullName')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Full Name')}
              </label>
              <ValidationMessages message={errors.fullName?.message} />
            </div>
          </div>

          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 mt-2 md:mt-3 lg:mt-7">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.companyName ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('companyName')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Company Name')}
              </label>
              <ValidationMessages message={errors.companyName?.message} />
            </div>
          </div>

          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.mobileNumber ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('mobileNumber')}
                disabled
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-400">
                {t('Mobile Number')}
              </label>
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.companyEmail ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('companyEmail')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Company Email')}
              </label>
              <ValidationMessages message={errors.companyEmail?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-6 ${
                  errors.establishmentYear ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('establishmentYear')}
              />
              <label className="ml-6 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Establishment Year')}
              </label>
              <a className="absolute bottom-3 left-0 ">
                <img
                  src="images/calendar-icon.svg"
                  className="w-4"
                  alt="calendar"
                />
              </a>
            </div>
            <ValidationMessages message={errors.establishmentYear?.message} />
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <select
                {...register('businessType')}
                className={`select select-bordered w-full border-0 rounded-none h-10 pl-0 min-h-0 mt-0.5 border-b-2 border-gray-300 font-normal" 
                ${errors.businessType ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
                style={{ fontWeight: 400, color: 'grey' }}
              >
                <option value={'select'} disabled selected>
                  {t('Business Type')}
                </option>
                {options.map((i, key) => (
                  <option key={`option-${key}`} value={i.value}>{i.label}</option>
                ))}
              </select>

              <ValidationMessages message={errors.businessType?.message} />
            </div>
          </div>

          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.companyPan ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('companyPan')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Company PAN')}
              </label>
              <ValidationMessages message={errors.companyPan?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer${
                  errors.gst ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('gst')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('GST')}
              </label>
              <ValidationMessages message={errors.gst?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer${
                  errors.billingAddress ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('billingAddress')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Billing Address
              </label>
              <ValidationMessages message={errors.billingAddress?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <select
                {...register('state')}
                className={`select select-bordered w-full border-0 rounded-none h-10 pl-0 min-h-0 mt-0.5 border-b-2 border-gray-300 font-normal" 
                ${errors.state ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
                style={{ fontWeight: 400, color: 'grey' }}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                }}
              >
                <option value={'select'} disabled selected>
                  {'State'}
                </option>

                {statesList &&
                  statesList.geoLocations?.map((i, key) => (
                    <option key={`statesList-${key}`} value={i.name}>{i.name}</option>
                  ))}
              </select>

              <ValidationMessages message={errors.state?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <select
                {...register('district')}
                className={`select select-bordered w-full border-0 rounded-none h-10 pl-0 min-h-0 mt-0.5 border-b-2 border-gray-300 font-normal" 
                ${errors.district ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
                style={{ fontWeight: 400, color: 'grey' }}
              >
                <option value={'select'} disabled selected>
                  {'District'}
                </option>

                {districts &&
                  districts?.map((i, key) => <option key={`distrct-${key}`} value={i.id}>{i.name}</option>)}
              </select>
              <ValidationMessages message={errors.district?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer${
                  errors.city ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('city')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                City
              </label>
              <ValidationMessages message={errors.city?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer${
                  errors.pincode ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('pincode')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Pincode
              </label>
              <ValidationMessages message={errors.pincode?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <div className="relative z-0 ">
              <input
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.description ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
                {...register('description')}
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Company Description')}
              </label>
              <ValidationMessages message={errors.description?.message} />
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-6/12 lg:w-4/12">
            <a onClick={() => setKyc(true)}>
              <div className="flex border-2 border-gray-200 p-2 rounded-lg">
                <img
                  src="images/kyc-icon.svg"
                  className="w-5 mt-1 mr-2"
                  alt="Tick"
                />
                {t('KYC Detail')}
                <div className="flex ml-auto">
                  <img
                    src="images/right-arrow.svg"
                    className="w-2 mt-1 mr-2"
                    alt="icon"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="clear-both" />

        <div className="w-full mt-4 text-right">
          <button
            className="px-8 h-10 leading-10 w-auto bg-gray-200 rounded-3xl mr-3 hover:bg-gray-300 inline-block"
            onClick={() => skipForm()}
          >
            {t('Skip')}
          </button>
          <button
            className="px-8 h-10 leading-10 w-auto bg-blue-400 rounded-3xl hover:bg-blue-500 inline-block text-white"
            onClick={() => submitData()}
          >
            {t('Update')}
          </button>
        </div>
      </div>
    </>
  );
};
