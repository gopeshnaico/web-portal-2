export const Logistics = () => {
  return (
    <>
      <h3 className="font-medium text-lg mb-1">Logistics</h3>

      <div className="clear-both"></div>

      <div className="pt-4">
        <div className="row-outer block flex-wrap sm:flex">
          <div className="px-3 w-full md:w-6/12 lg:w-6/12">
            <div className="w-full mb-5">
              <div className="text-sm text-black mb-2">Select Logistics</div>
              <div className="clear-both"></div>
              <select className="select select-bordered w-full border-2 border-gray-300 rounded-3xl">
                <option disabled selected>
                  Select Logistic Partner
                </option>
                <option>Blue Dart</option>
                <option>FedEx</option>
                <option>DHL</option>
              </select>
            </div>
          </div>
          <div className="px-3 w-full md:w-6/12 lg:w-6/12"></div>
          <div className="px-3 w-full md:w-6/12 lg:w-6/12">
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Shipping Charge for North Area
              </label>
              <div className="text-xs pt-1 text-slate-500">
                (₹ Set amount for shipping all the North side places)
              </div>
            </div>
          </div>
          <div className="px-3 w-full md:w-6/12 lg:w-6/12">
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Shipping Charge for South Area
              </label>
              <div className="text-xs pt-1 text-slate-500">
                (₹ Set amount for shipping all the North side places)
              </div>
            </div>
          </div>
          <div className="px-3 w-full md:w-6/12 lg:w-6/12">
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Shipping Charge for West Area
              </label>
              <div className="text-xs pt-1 text-slate-500">
                (₹ Set amount for shipping all the North side places)
              </div>
            </div>
          </div>
          <div className="px-3 w-full md:w-6/12 lg:w-6/12">
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Shipping Charge for East Area
              </label>
              <div className="text-xs pt-1 text-slate-500">
                (₹ Set amount for shipping all the North side places)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clear-both"></div>
    </>
  );
};
