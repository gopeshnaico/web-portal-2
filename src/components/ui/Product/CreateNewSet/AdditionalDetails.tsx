export const AdditionalDetails = () => {
  return (
    <>
      <h3 className="font-medium text-lg mb-1">Listing Title</h3>
      <p className="text-sm mb-3">
        UF Club Chanderi Cotton Summer Wear Dotted Pritt Shift for Men
      </p>

      <div className="clear-both" />

      <textarea
        className="my-3 textarea text-base bg-gray-100 border-2 border-gray-200 resize-none w-full h-32 placeholder:text-gray-600"
        placeholder="Description"
      />

      <div className="pt-4 row-outer block flex-wrap sm:flex">
        <div className="px-3 w-full mb-8">
          <div className="text-sm pb-3">MOQ (Min. Order Quantity)*</div>
          <div className="flex border-2 border-gray-300 rounded-3xl items-center bg-gray-100 w-40">
            <a className="px-4 py-2 font-medium text-xl">
              <img src="/images/minus-icon.svg" className="w-4" alt="Remove" />
            </a>
            <input
              type="text"
              name=""
              className="py-2 w-16 border-x-2 border-gray-300 text-center focus:border-b-0"
              value="10"
            />
            <a className="px-4 py-2 font-medium text-xl">
              <img src="images/plus-icon.svg" className="w-4" alt="Add" />
            </a>
          </div>
        </div>
        <div className="px-3 w-full mb-3">
          <div className="text-sm pb-3">GST Rate*</div>
          <div>
            <label className="label cursor-pointer w-auto inline-block p-0 pr-3 mb-3">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-400"
                checked
              />
              <span className="label-text float-right mt-1 ml-2">5%</span>
            </label>
            <label className="label cursor-pointer w-auto inline-block p-0 pr-3 mb-3">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-400"
              />
              <span className="label-text float-right mt-1 ml-2">12%</span>
            </label>
            <div className="form-control p-0 w-auto inline-block mb-3">
              <label className="label cursor-pointer p-0">
                <input
                  type="checkbox"
                  checked={true}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text ml-2">
                  Price per piece includes GST
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="text-sm pb-3">Listing Expiry*</div>
        <div className="row-outer block flex-wrap sm:flex">
          <label className="label cursor-pointer w-full md:w-6/12 lg:w-4/12 xl:w-3/12 p-0 px-3 mb-5">
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-blue-400"
              checked
            />
            <div className="label-text inline-block mt-0 ml-2 mr-auto">5%</div>
          </label>
          <label className="label cursor-pointer w-full md:w-6/12 lg:w-4/12 xl:w-3/12 p-0 px-3 mb-5">
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-blue-400"
            />
            <div className="label-text inline-block mt-0 ml-2 mr-auto">
              7 days
            </div>
          </label>
          <label className="label cursor-pointer w-full md:w-6/12 lg:w-4/12 xl:w-3/12 p-0 px-3 mb-5">
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-blue-400"
            />
            <div className="label-text inline-block mt-0 ml-2 mr-auto">
              15 days
            </div>
          </label>
          <label className="label cursor-pointer w-full md:w-6/12 lg:w-4/12 xl:w-3/12 p-0 px-3 mb-5">
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-blue-400"
            />
            <div className="label-text inline-block mt-0 ml-2 mr-auto">
              30 days
            </div>
          </label>
          <label className="label cursor-pointer w-full md:w-6/12 lg:w-4/12 xl:w-3/12 p-0 px-3 mb-5">
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-blue-400"
            />
            <div className="label-text inline-block mt-0 ml-2 mr-auto">
              60 days
            </div>
          </label>
          <label className="label cursor-pointer w-full md:w-6/12 lg:w-4/12 xl:w-3/12 p-0 px-3 mb-5">
            <input
              type="radio"
              name="radio-7"
              className="radio checked:bg-blue-400"
            />
            <div className="label-text inline-block mt-0 ml-2 mr-auto">
              120 days
            </div>
          </label>
        </div>
      </div>

      <div className="clear-both" />
    </>
  );
};
