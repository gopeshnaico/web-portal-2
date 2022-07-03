export const CreateSets = () => {
  return (
    <>
      <h3 className="font-medium text-lg mb-1">Create Set</h3>
      <p className="text-sm mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{' '}
      </p>

      <div className="clear-both" />

      <div className="collapse collapse-plus border border-base-300 bg-zinc-50 rounded-lg mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-base border-l-8 border-lime-500">
          Colors
        </div>
        <div className="collapse-content bg-white">
          <div className="pt-4">
            <p className="pb-2">How many colors this set has?</p>
            <div className="pb-4">
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                01
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-blue-400 mr-2 mb-2 inline-block font-medium bg-blue-400 shadow-lg shadow-blue-500/50 text-white">
                02
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                03
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                04
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                05
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                06
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                07
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                08
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                09
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                10
              </a>
            </div>

            <p className="pb-2">Select number of colors manually</p>
            <div className="flex border-2 border-gray-300 rounded-3xl items-center bg-gray-100 w-40">
              <a className="px-4 py-2 font-medium text-xl">
                <img
                  src="/images/minus-icon.svg"
                  className="w-4"
                  alt="Remove"
                />
              </a>
              <input
                type="text"
                name=""
                className="py-2 w-16 border-x-2 border-gray-300 text-center focus:border-b-0"
                value="10"
              />
              <a className="px-4 py-2 font-medium text-xl">
                <img src="/images/plus-icon.svg" className="w-4" alt="Add" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-plus border border-base-300 bg-zinc-50 rounded-lg mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-base border-l-8 border-blue-400">
          Size
        </div>
        <div className="collapse-content bg-white">
          <div className="pt-4">
            <p className="pb-2">Size Option 1</p>
            <div className="pb-4">
              <a className="py-2 px-3 rounded-md border border-bg-blue-400 mr-2 mb-2 inline-block font-medium bg-blue-400 shadow-lg shadow-blue-500/50 text-white">
                2XS
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-blue-400 mr-2 mb-2 inline-block font-medium bg-blue-400 shadow-lg shadow-blue-500/50 text-white">
                XS
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                S
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                M
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                L
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                XL
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                2XL
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                3XL
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                4XL
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                5XL
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                6XL
              </a>
            </div>

            <p className="pb-2">Size Option 2</p>
            <div className="pb-4">
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                18
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                20
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                22
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                24
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                26
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                28
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                30
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                32
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                34
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                36
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                38
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                40
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                42
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                44
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                46
              </a>
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                48
              </a>
            </div>

            <p className="pb-2">Size Option 3</p>
            <div className="pb-4">
              <a className="py-2 px-3 rounded-md border border-bg-zinc-100 mr-2 mb-2 bg-zinc-50 hover:bg-zinc-100 inline-block font-medium">
                Free Size
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-plus border border-base-300 bg-zinc-50 rounded-lg mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-base border-l-8 border-gray-200">
          Images*
        </div>
        <div className="collapse-content bg-white">
          <div className="pt-4">Data is not avalable</div>
        </div>
      </div>

      <div className="collapse collapse-plus border border-base-300 bg-zinc-50 rounded-lg mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-base border-l-8 border-gray-200">
          Price, MOQ*
        </div>
        <div className="collapse-content bg-white">
          <div className="pt-4">Data is not avalable</div>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-zinc-50 rounded-lg mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-base border-l-8 border-gray-200">
          Bulk Price*
        </div>
        <div className="collapse-content bg-white">
          <div className="pt-4">Data is not avalable</div>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-zinc-50 rounded-lg mb-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-base border-l-8 border-gray-200">
          Miscellaneous*
        </div>
        <div className="collapse-content bg-white">
          <div className="pt-4">Data is not avalable</div>
        </div>
      </div>

      <div className="clear-both" />
    </>
  );
};
