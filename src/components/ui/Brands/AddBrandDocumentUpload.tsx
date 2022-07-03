import router from 'next/router';
import { FC, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { getDocumentData } from '../../../lib/SidebarListApi';
import ButtonComponent from '../../ui-components/button';
import Button from '../../ui-components/button';
import HeadingLabel from '../../ui-components/headingLabel';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface addBrandDocumentUploadProps {
  register: UseFormRegister<FieldValues>;
  // handleAddBrand: (formValues: object) => Promise<void>;
  // handleSubmit: UseFormHandleSubmit<FieldValues>;
  // errors: {
  //   [x: string]: {message:string};
  // };
  handleChange: any;
  file: any;
  lastSegment: number;
}

export const AddBrandDocumentUpload: FC<addBrandDocumentUploadProps> = ({
  register,
  handleChange,
  file,
  lastSegment,
}) => {
  return (
    <div className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0">
      <HeadingLabel
        className="font-semibold text-xl pb-3"
        labelText="Add New Brand"
      />
      <h3 className="font-regular text-lg pb-2">
        {getDocumentData(lastSegment)?.documentName}
      </h3>
      <p className="text-sm pb-7">
        {getDocumentData(lastSegment)?.description}
      </p>
      <div className="clear-both"></div>

      <div className="w-full sm:w-6/12">
        <label
          htmlFor="dropzone-file"
          className="inline-block w-full h-12 bg-white rounded-lg border-2 border-gray-200 cursor-pointer overflow-hidden relative"
        >
          <img
            src="/images/upload-icon.svg"
            className="w-8 absolute left-3 top-2"
            alt="upload-icon"
          />
          <div>
            <ButtonComponent
              className="float-right bg-blue-400 h-11 leading-10 text-white px-4"
              label="Upload Image"
              type="submit"
            />
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleChange}
          ></input>
          <div className="pl-14 my-2.5">{file?.name}</div>
        </label>
      </div>
      <div className="clear-both"></div>
      <div className="row-outer flex-wrap flex pt-5">
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36">
          <img src="/images/demo-list-img-3.jpg" alt="image" />
        </div>
      </div>
      <div className="clear-both"></div>

      <div className="w-full mb-8 pt-8 text-center sm:text-right">
        <a
          className="btt-seconday font-medium cursor-pointer"
          onClick={() => router.push(`/add-brand`)}
        >
          Back
        </a>
        <span>
          <ButtonComponent
            className="btt ml-0 mt-5 height-56 line-height-56 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full md:w-100  md:h-full md:w-48 sm:w-48 sm:ml-5 sm:mt-0 hover:bg-cyan-500"
            label="Continue"
            // src="/images/right-arrow-white.svg"
            // alt="Continue"
            type="submit"
          />
        </span>
      </div>
    </div>
  );
};
