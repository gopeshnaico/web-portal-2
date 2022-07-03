import router from 'next/router';
import { FC } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form';

import { documentUpload } from '../../../lib/SidebarListApi';
import ButtonComponent from '../../ui-components/button';
import Button from '../../ui-components/button';
import HeadingLabel from '../../ui-components/headingLabel';
import InputText from '../../ui-components/inputbox';
import Label from '../../ui-components/label';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface addBrandProps {
  register: UseFormRegister<FieldValues>;
  handleAddBrand: (formValues: object) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setSelectedDocument: any;
  selectedDocument: any;
}

export const AddBrandForm: FC<addBrandProps> = ({
  register,
  handleAddBrand,
  handleSubmit,
  setSelectedDocument,
  selectedDocument,
}) => {
  return (
    <div
      className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0"
      data-testid="outerDiv"
    >
      {/* <form onSubmit={handleSubmit(handleAddBrand)}> */}
      <HeadingLabel
        className="font-semibold text-xl pb-3"
        labelText="Add New Brand"
      />
      <form onSubmit={handleSubmit(handleAddBrand)}>
        <div className="row-outer pt-4">
          <div className="w-full mb-8 px-3 float-left md:w-5/12">
            <div className="relative z-0 ">
              <InputText
                register={register}
                type="text"
                name="brandName"
                className="form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <Label
                className=" form-control absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                labelText="Brand Name"
              />
            </div>
          </div>
        </div>
        <div className="clear-both" />
        <h2 className="font-regular text-lg">
          Select your relationship with Brand
        </h2>
        <div className="clear-both" />
        <div className="row-outer block flex-wrap md:flex pt-3">
          <div className="w-full px-3 mb-8 md:w-6/12 lg:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 items-start">
                <InputText
                  register={register}
                  type="radio"
                  name="relationshipType"
                  className="radio mt-2 checked:bg-blue-400"
                  placeholder=" "
                />
                <div className="label-text ml-2 w-full">
                  <h3 className="font-medium text-base pb-1">Brand Owner</h3>
                  <p>I am an Authorized Distributor or Reseller of the brand</p>
                </div>
              </label>
            </div>
          </div>
          <div className="w-full px-3 mb-8 md:w-6/12 lg:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 items-start">
                <InputText
                  register={register}
                  type="radio"
                  name="relationshipType"
                  className="radio mt-2 checked:bg-blue-400"
                  placeholder=" "
                />
                <div className="label-text ml-2 w-full">
                  <h3 className="font-medium text-base pb-1">
                    Authorized Distributor / Reseller
                  </h3>
                  <p>I am an Authorized Distributor or Reseller of the brand</p>
                </div>
              </label>
            </div>
          </div>
          <div className="w-full px-3 mb-8 md:w-6/12 lg:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 items-start">
                <InputText
                  register={register}
                  type="radio"
                  name="relationshipType"
                  className="radio mt-2 checked:bg-blue-400"
                  placeholder=" "
                />
                <div className="label-text ml-2 w-full">
                  <h3 className="font-medium text-base pb-1">
                    Wholesaler / Trader
                  </h3>
                  <p>I am a Third Party Seller of this brand</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="border-2 border-slate-300 mt-5 p-4 rounded-lg">
          <h2 className="font-regular text-lg pb-2">
            Upload any document as a proff
          </h2>
          <div className="row-outer block flex-wrap md:flex">
            {documentUpload?.map((document, index) => (
              <div
                className="w-full md:w-6/12 lg:w-4/12 px-3"
                onClick={() => {
                  setSelectedDocument(document);
                }}
              >
                <div
                  key={index}
                  className={
                    selectedDocument?.id == document.id
                      ? 'p-3 text-white rounded-lg bg-blue-400'
                      : 'p-3 rounded-lg'
                  }
                >
                  <h3 className="font-regular text-base pb-1">
                    {document.documentName}
                    {selectedDocument?.id == document.id && (
                      <img
                        src="/images/green-check.svg"
                        className="bg-white border-2 border-white rounded-full w-5 ml-1 mb-1 inline-block"
                        alt="check"
                      />
                    )}
                  </h3>
                  <p className="text-xs">{document.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mb-8 pt-8 text-center sm:text-right">
          <a className="btt-seconday font-medium cursor-pointer">Back</a>
          <span
            onClick={() => router.push(`add-brand/${selectedDocument?.id}`)}
          >
            <ButtonComponent
              className="btt ml-0 mt-5 height-56 line-height-56 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full md:w-100  md:h-full md:w-48 sm:w-48 sm:ml-5 sm:mt-0 hover:bg-cyan-500"
              label="Continue"
              src="images/right-arrow-white.svg"
              type="submit"
            />
          </span>
        </div>
      </form>
    </div>
  );
};
