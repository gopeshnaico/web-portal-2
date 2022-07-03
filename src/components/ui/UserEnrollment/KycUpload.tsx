export const KycUpload = ({
  uploadImage,
  uploadDocument,
  fileArray,
  setFileArray,
  selectedDocumentType,
  goBack,
}) => {
  const headerText = () => {
    switch (selectedDocumentType) {
      case 'udyam_aadhar':
        return 'Upload Udyam Aadhar';
      case 'trade_certificate/license':
        return 'Upload Trade Certificate/License';
      case 'gst_certificate':
        return 'Upload GST Certificate';
      case 'other_shop_documents':
        return 'Upload Other shop documents';
      case 'shop&establishment_license':
        return 'Upload Shop & Establishment License';
      case 'Current_account_cheque':
        return 'Upload Current Account Cheque';
      default:
        'Upload Udyam Aadhar';
    }
  };

  const files = fileArray.filter(
    (i) => i.documentType === selectedDocumentType
  );

  const deleteItem = (fileString: string) => {
    const filterItem = files?.filter((i) => i?.file !== fileString);

    const otherUploadedDocs = fileArray?.filter(
      (i) => i?.documentType !== selectedDocumentType
    );

    setFileArray([...otherUploadedDocs, ...filterItem]);
  };
  return (
    <div className="w-full block p-6 pl-0 pr-0 lg:flex lg:pl-6">
      <div className="w-full lg:w-1/4" />
      <div className="w-full pt-5 lg:w-2/4">
        <h1 className="font-semibold text-xl pb-2">{headerText()}</h1>
        <h2 className="font-medium text-lg pb-1">
          Certificate must clearly show
        </h2>
        <p className="pb-5 text-base">
          Upload proof that the business name is same as that in the documents
          uploaded.
        </p>
        <p className="pb-3 pt-4 text-base">
          Using Camera, Gallery or Files. Upload Max 2 images
        </p>
        <div className="w-full">
          <div className="justify-center items-center w-full py-5 rounded-lg text-center border-2 border-gray-300 p-4">
            <div className="border border-dashed border-gray-600 p-10">
              <img
                style={{ display: files?.length === 2 ? 'none' : '' }}
                src="images/upload-icon.svg"
                className="w-16 inline-block"
                alt="upload-icon"
              />

              <div className="row-outer block flex-wrap sm:flex pt-5">
                {files &&
                  files?.map((file) => {
                    return (
                      <div className="w-full px-3 mb-5 sm:w-4/12 md:w-6/12 lg:w-4/12 xl:w-4/12">
                        <div className="w-full relative rounded-lg bg-gray-300">
                          <a className="bg-white rounded-full top-2 right-2 absolute">
                            <img
                              src="images/red-close.svg"
                              onClick={() => deleteItem(file?.file)}
                            />
                          </a>
                          <img
                            src={file?.file}
                            className="rounded-lg inline-block"
                            alt="image"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <label
              className="flex flex-col"
              htmlFor="dropzone-file"
              style={{ display: files?.length === 2 ? 'none' : '' }}
            >
              <div className="pt-5">
                <div className="mt-5 rounded-full py-2  inline-block border border-cyan-600 w-full cursor-pointer sm:w-auto sm:mt-0 px-10 text-cyan-600">
                  Upload
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    uploadImage(e.target.files, selectedDocumentType);
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full mb-8 pt-8 text-center sm:text-right flex justify-end items-center">
            <a className="btt-seconday cursor-pointer" onClick={() => goBack()}>
              Back
            </a>
            <a
              className="btt-primary ml-0 mt-5 height-56 line-height-56 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full sm:w-auto sm:ml-5 sm:mt-0 cursor-pointer"
              onClick={() => uploadDocument()}
            >
              Submit
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4" />
    </div>
  );
};
