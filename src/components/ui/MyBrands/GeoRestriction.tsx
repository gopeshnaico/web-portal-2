import { Dispatch, FC, SetStateAction } from 'react';

interface GeoRestrictionProps {
  setAddGeoFlag: Dispatch<SetStateAction<boolean>>;
}

export const GeoRestriction: FC<GeoRestrictionProps> = () => {
  return (
    <div className="w-full px-3 md:w-7/12 lg:w-7/12 xl:w-8/12 md:pl-9">
      <div className="overflow-x-auto">
        <div className="steps mb-8 md:hidden">
          <a className="w-36 step step-info text-blue-400 font-medium whitespace-nowrap">
            Select Brand
          </a>
          <a className="w-36 step step-info text-blue-400 font-medium whitespace-nowrap">
            Add Product Images
          </a>
          <a className="w-36 step step-info text-blue-400 font-medium whitespace-nowrap">
            Create Sets
          </a>
          <a className="w-36 step step-info text-blue-400 font-medium whitespace-nowrap">
            Product Details
          </a>
          <a className="w-36 step step-info text-blue-400 font-medium whitespace-nowrap">
            Additional Details
          </a>
          <a className="w-36 step step-info text-blue-400 font-medium whitespace-nowrap">
            Geo Restriction
          </a>
          <a className="w-36 step whitespace-nowrap">logistics</a>
        </div>
      </div>
      <h3 className="font-medium text-lg mb-1">Geo Restriction</h3>
      <div className="clear-both" />
      <div className="text-md font-medium text-center text-gray-400 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px mt-5">
          <li>
            <a
              className="inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-blue-400 active text-black"
              aria-current="page"
            >
              State
            </a>
          </li>
          <li>
            <a className="inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
              District
            </a>
          </li>
        </ul>
      </div>
      <div className="clear-both" />
      <div className="pt-4">
        <div className="text-md pb-1">
          {' '}
          Select all states that you would like to your products to be displayed
          if not checked the products in this brand will not be displayed to
          buyers from those states.
        </div>

        <div className="clear-both" />
        <div className="block pt-2 mb-5 sm:flex">
          <div className="w-full mr-0 mb-3 sm:mr-4 sm:mb-0">
            <input
              name=""
              placeholder="Search for a State"
              className="w-full bg-gray-100 border-2 border-gray-200 px-5 pr-12 rounded-3xl h-10 leading-10 focus:border-gray-300"
            />
            <a className="absolute right-0 top-0 px-2 h-10 py-2 w-10">
              <img
                src="/images/search-icon.svg"
                className="max-w-full"
                alt="search"
              />
            </a>
          </div>
        </div>

        <div className="pt-2 row-outer block flex-wrap sm:flex">
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Andhra Pradesh
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Assam
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Kerala{' '}
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Bihar{' '}
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Chandigarh
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Andhra Pradesh
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Uttar Pradesh
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Delhi
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Karnataka
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Tamil Nadu
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Goa
                </span>
              </label>
            </div>
          </div>
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text font-regular text-sm mr-auto ml-2">
                  Rajasthan
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="clear-both" />
    </div>
  );
};
