export const KycDetails = ({ setKyc, selectUploader }) => {
  return (
    <div className="py-6 mx-auto w-full sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-6/12">
      <div className="mb-4">
        <div>
          <h1 className="mb-1 text-2xl ">KYC Details</h1>
          <h2 className="mb-2 text-xl">Upload any 1 Document</h2>
          <p className="mb-2">
            We will verify the documents for approval process and keep the
            documents safe and will not share outside of Fawow.
          </p>
          <div className="w-full">
            <a
              onClick={() => {
                selectUploader('udyam_aadhar');
              }}
              className="relative flex w-full mb-5  border-2 border-gray-300 p-3 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              Udyam Aadhar
              <div className="flex ml-auto">
                {/* <img
                  src="images/green-check.svg"
                  className="w-5 mt-1 mr-4"
                  alt="Tick"
                /> */}
                <img
                  src="images/right-arrow.svg"
                  className="w-2 mt-1 mr-2"
                  alt="icon"
                />
              </div>
            </a>
            <a
              className="relative flex w-full mb-5  border-2 border-gray-300 p-3 rounded-lg hover:bg-slate-100 cursor-pointer"
              onClick={() => {
                selectUploader('gst_certificate');
              }}
            >
              GST Certificate
              <div className="flex ml-auto">
                <img
                  src="images/right-arrow.svg"
                  className="w-2 mt-1 mr-2"
                  alt="icon"
                />
              </div>
            </a>
            <a
              className="relative flex w-full mb-5  border-2 border-gray-300 p-3 rounded-lg hover:bg-slate-100 cursor-pointer"
              onClick={() => {
                selectUploader('Current_account_cheque');
              }}
            >
              Current Account Cheque
              <div className="flex ml-auto">
                {/* <img
                  src="images/gray-check.svg"
                  className="w-5 mt-1 mr-4"
                  alt="Tick"
                /> */}
                <img
                  src="images/right-arrow.svg"
                  className="w-2 mt-1 mr-2"
                  alt="icon"
                />
              </div>
            </a>
            <a
              className="relative flex w-full mb-5  border-2 border-gray-300 p-3 rounded-lg hover:bg-slate-100 cursor-pointer"
              onClick={() => {
                selectUploader('shop&establishment_license');
              }}
            >
              Shop &amp; Establishment License
              <div className="flex ml-auto">
                <img
                  src="images/right-arrow.svg"
                  className="w-2 mt-1 mr-2"
                  alt="icon"
                />
              </div>
            </a>
            <a
              className="relative flex w-full mb-5  border-2 border-gray-300 p-3 rounded-lg hover:bg-slate-100 cursor-pointer"
              onClick={() => {
                selectUploader('trade_certificate/license');
              }}
            >
              Trade Certificate / License
              <div className="flex ml-auto">
                {/* <img
                  src="images/red-check.svg"
                  className="w-5 mt-1 mr-4"
                  alt="Tick"
                /> */}
                <img
                  src="images/right-arrow.svg"
                  className="w-2 mt-1 mr-2"
                  alt="icon"
                />
              </div>
            </a>
            <a
              className="relative flex w-full mb-5  border-2 border-gray-300 p-3 rounded-lg hover:bg-slate-100 cursor-pointer"
              onClick={() => {
                selectUploader('other_shop_documents');
              }}
            >
              Other Shop Documents
              <div className="flex ml-auto">
                <img
                  src="images/right-arrow.svg"
                  className="w-2 mt-1 mr-2"
                  alt="icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="clear-both" />
      <div className="w-full mt-4 text-right">
        <button
          className="px-8 h-10 leading-10 w-auto bg-blue-400 rounded-3xl hover:bg-blue-500 inline-block text-white"
          onClick={() => setKyc(false)}
        >
          Back
        </button>
      </div>
    </div>
  );
};
