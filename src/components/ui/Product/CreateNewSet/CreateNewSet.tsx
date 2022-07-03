import { useState } from 'react';
import { ProductDetailsPage } from '../../../pages/Products/ProductDetailsPage';
import { AddProductImagePage } from '../../../pages/Products/AddProductImagePage';
import { SelectBrandPage } from '../../../pages/Products/SelectBrandPage';
import { AdditionalDetails } from './AdditionalDetails';
import { CreateNewSetList } from './CreateNewSetList';
import { CreateSets } from './CreateSets';
import { GeoRestriction } from './GeoRestriction';
import { Logistics } from './Logistics';
import { ProductDetails } from './ProductDetails';

export const CreateNewSet = ({
  selectedOption,
  setSelectedOption,
  productDetails,
  setProductDetails,
}) => {
  return (
    <div className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0">
      <div className="w-full">
        <div className="w-full">
          <h1 className="font-semibold text-xl pb-3">Create a Product Set</h1>
        </div>
        <div className="clear-both" />
        <div className="row-outer block flex-wrap md:flex pt-5">
          <CreateNewSetList {...{ selectedOption, setSelectedOption }} />
          <div className="w-full px-3 md:w-7/12 lg:w-7/12 xl:w-8/12 md:pl-9">
            {selectedOption === 1 && (
              <SelectBrandPage {...{ productDetails, setProductDetails }} />
            )}
            {selectedOption === 2 && (
              <AddProductImagePage {...{ productDetails, setProductDetails }} />
            )}
            {selectedOption === 3 && <CreateSets />}
            {selectedOption === 4 && <ProductDetailsPage />}
            {selectedOption === 5 && <AdditionalDetails />}
            {selectedOption === 6 && <GeoRestriction />}
            {selectedOption === 7 && <Logistics />}
          </div>

          <div className="w-full mb-8 pt-8 px-3 text-center sm:text-right">
            <a className="btt-seconday">Back</a>
            <a className="btt ml-0 mt-5 height-56 line-height-56 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full sm:w-auto sm:ml-5 sm:mt-0">
              Save and Continue{' '}
              <img
                src="images/right-arrow-white.svg"
                className="ml-3 w-6 inline-block"
                alt="Continue"
              />
            </a>
          </div>
        </div>

        <div className="clear-both" />
      </div>
      <div className="clear-both" />
    </div>
  );
};
