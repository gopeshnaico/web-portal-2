import { FC } from 'react';
import {
  FieldError,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import router from 'next/router';
import { ViewCustomerDetailsQuery } from '../../../domain/api/graphql';
import { ValidationMessages } from '../../Popups/ValidationMessages';
import ButtonComponent from '../../ui-components/button';
import React from 'react';
import { useTranslation } from 'next-i18next';

type ErrorType = {
  name?: FieldError;
  phone?: FieldError;
  email?: FieldError;
  established_year?: FieldError;
  pan?: FieldError;
  gst?: FieldError;
  description?: FieldError;
  businessType?: FieldError;
};

interface ViewProfileProps {
  data: ViewCustomerDetailsQuery;
  register: UseFormRegister<FieldValues>;
  handleProfile: (formValues) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: ErrorType;
}

export const ViewProfile: FC<ViewProfileProps> = ({
  register,
  handleProfile,

  errors,
}) => {
  const { t } = useTranslation();
  const options = [
    { value: 'buyer', label: 'Retailer' },
    { value: 'seller', label: 'Manufacturer' },
  ];
  return (
    <div
      data-testid="renderPage"
      className="w-full px-0 py-16 lg:w-4/5 lg:px-16"
    >
      <h1 className="font-semibold text-xl pb-3">{t('My Account')}</h1>

      <div className="w-full mb-8 md:w-2/4 rounded-lg shadow-lg p-6 bg-slate-50 border-2 border-slate-200">
        <div className="flex items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-full w-20 mr-3">
              <img src="images/demo-user.jpg" alt="user" />
            </div>
            <a className="p-2 absolute bottom-0 right-2 rounded-full shadow-lg primary-bg w-8">
              <img src="images/edit-icon.svg" alt="edit" />
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{t('Seller Name')}</h3>
            <div className="font-medium text-gray-400 text-sm" />
            <div className="text-green-500">
              <img
                src="images/green-check.svg"
                className="float-left mr-2 mt-1 w-5"
                alt="Verified"
              />
              {t('Verified')}
            </div>
          </div>
        </div>
      </div>

      <div className="clear-both" />
      <form onSubmit={handleProfile}>
        <div className="row-outer">
          <div className="w-full mb-8 px-3 float-left">
            <div className="relative z-0 ">
              <input
                {...register('name')}
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                ${errors.name ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
              />

              <ValidationMessages message={errors?.name?.message} />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Name')}
              </label>
            </div>
          </div>

          <div className="w-full mb-8 px-3 float-left md:w-2/4">
            <div className="relative z-0 ">
              <input
                {...register('phone')}
                disabled
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                 ${errors.phone ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.phone?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Mobile Number')}
              </label>
            </div>
          </div>

          <div className="w-full mb-8 px-3 float-left md:w-2/4">
            <div className="relative z-0 ">
              <input
                {...register('email')}
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                ${errors.email ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.email?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Email Address')}
              </label>
            </div>
          </div>

          <div className="w-full mb-8 px-3 float-left md:w-2/4">
            <div className="relative z-0 ">
              <input
                {...register('established_year')}
                type="text"
                id="floating_standard"
                className={`pl-5 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                ${
                  errors.established_year ? 'is-invalid border-b-red-400' : ''
                }`}
                placeholder=" "
              />

              <label className="pl-5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Establishment Year')}
              </label>

              <a className="absolute bottom-3 left-0">
                <img
                  src="images/calendar-icon.svg"
                  className="w-4"
                  alt="calendar"
                />
              </a>

              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.established_year?.message}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mb-8 px-3 float-left md:w-2/4">
            <div className="relative z-0 ">
              <select
                {...register('businessType')}
                className={`select select-bordered w-full border-0 rounded-none h-10 pl-0 min-h-0	mt-0.5 border-b-2 border-gray-300"
                ${errors.businessType ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
              >
                <option value={'select'} disabled>
                  {t('Business Type')}
                </option>
                {options.map((i) => (
                  <option key={i.value} value={i.value}>
                    {i.label}
                  </option>
                ))}
              </select>

              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.businessType?.message}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mb-8 px-3 float-left md:w-2/4">
            <div className="relative z-0 ">
              <input
                {...register('pan')}
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                ${errors.pan ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.pan?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('PAN')}
              </label>
            </div>
          </div>

          <div className="w-full mb-8 px-3 float-left md:w-2/4">
            <div className="relative z-0 ">
              <input
                {...register('gst')}
                type="text"
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                ${errors.gst ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.gst?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('GST')}
              </label>
            </div>
          </div>

          <div className="w-full mb-8 px-3 float-left">
            <div className="relative z-0 ">
              <textarea
                {...register('description')}
                id="floating_standard"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                ${errors.description ? 'is-invalid border-b-red-400' : ''}`}
                placeholder=" "
              />
              <div className="errorMessageAddAddress details warning-color text-sm">
                <p data-testid="emailErrorMessage text-sm">
                  {errors.description?.message}
                </p>
              </div>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('Description')}
              </label>
            </div>
          </div>

          <div className="clear-both" />

          <div className="w-full mb-8 pt-4 px-3 text-right">
            <ButtonComponent
              type="button"
              className="height-56 line-height-56 rounded-lg inline-block bg-blue-100 text-black border-slate-300 w-full md:w-100 md:h-full md:w-48 sm:w-48 border-solid border-2 border-color: inherit; hover:bg-white"
              label={t('Back')}
              onClick={() => router.push(`dashboard`)}
            />
            <ButtonComponent
              type="submit"
              className="btt ml-0 mt-5 height-56 line-height-56 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full md:w-100  md:h-full md:w-48 sm:w-48 sm:ml-5 sm:mt-0 hover:bg-cyan-500"
              label={t('Save Changes')}
            />
          </div>

          <div className="clear-both" />
        </div>
      </form>
    </div>
  );
};
