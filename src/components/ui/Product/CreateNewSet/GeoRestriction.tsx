export const GeoRestriction = () => {
  return (
    <>
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
              City
            </a>
          </li>
        </ul>
      </div>
      <div className="clear-both" />
      <div className="pt-4">
        <div className="p-4 pb-0 my-4 w-full bg-slate-100 border-2 border-gray-200 rounded-lg">
          <div className="row-outer block flex-wrap sm:flex">
            <div className="px-3 w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
              <div className="form-control">
                <label className="label cursor-pointer p-0 pb-3">
                  <input
                    type="radio"
                    name="radio-7"
                    className="radio checked:bg-blue-400"
                    // defaultChecked=""
                  />
                  <div className="label-text inline-block mt-0 ml-2 mr-auto">
                    Show
                  </div>
                </label>
              </div>
            </div>
            <div className="px-3 w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
              <div className="form-control">
                <label className="label cursor-pointer p-0 pb-3">
                  <input
                    type="radio"
                    name="radio-7"
                    className="radio checked:bg-blue-400"
                  />
                  <div className="label-text inline-block mt-0 ml-2 mr-auto">
                    Hide
                  </div>
                </label>
              </div>
            </div>
            <div className="px-3 w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
              <div className="form-control">
                <label className="label cursor-pointer p-0 pb-3">
                  <input
                    type="radio"
                    name="radio-7"
                    className="radio checked:bg-blue-400"
                  />
                  <div className="label-text inline-block mt-0 ml-2 mr-auto">
                    Showing in all States
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-both" />
        <div className="block pt-2 mb-5 sm:flex">
          <div className="w-full mr-0 mb-3 sm:mr-4 sm:mb-0">
            <input
              name=""
              placeholder="Search for a State"
              className="w-full bg-gray-100 border-2 border-gray-200 px-5 pr-12 rounded-3xl h-10 leading-10 focus:border-gray-300"
            />
          </div>
          <a className="text-center border-2 border-blue-400 bg-white px-5 rounded-3xl leading-9 whitespace-nowrap text-sm h-10 block sm:inline-block hover:bg-blue-400 hover:text-white">
            Clear All
          </a>
        </div>
        <div className="text-sm pb-1">Listing Expiry*</div>
        <div className="pt-2 row-outer block flex-wrap sm:flex">
          <div className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <div className="form-control">
              <label className="label cursor-pointer p-0 pb-3">
                <input
                  type="checkbox"
                  //   defaultChecked="checked"
                  className="checkbox checkbox-primary"
                />
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
                <input
                  type="checkbox"
                  //   defaultChecked="checked"
                  className="checkbox checkbox-primary"
                />
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
                <input
                  type="checkbox"
                  //   defaultChecked="checked"
                  className="checkbox checkbox-primary"
                />
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
                <input
                  type="checkbox"
                  //   defaultChecked="checked"
                  className="checkbox checkbox-primary"
                />
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
                <input
                  type="checkbox"
                  //   defaultChecked="checked"
                  className="checkbox checkbox-primary"
                />
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
    </>
  );
};
