import { useState } from 'react';
import { GoBackConfirmation } from '../Popups/goBackConfirmation';
import { KycDetails } from '../ui/UserEnrollment/KycDetails';
import { KycUpload } from '../ui/UserEnrollment/KycUpload';

export const KycPage = ({
  setKyc,
  upateKycFiles,
  selectedDocumentType,
  setSelectedDocumentType,
  filesSelected,
  setFilesSelected,
}) => {
  const [uploadKyc, setUploadKyc] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [fileArray, setFileArray] = useState<any>(filesSelected);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const uploadDocument = async () => {
    upateKycFiles(fileArray);
    setFilesSelected(fileArray);
  };

  const uploadImage = async (uploadedFile: File, type: string) => {
    const imageUrl = await toBase64(uploadedFile[0]);
    setFileArray([
      ...fileArray,
      {
        documentType: type,
        fileName: uploadedFile[0].name,
        file: imageUrl as string,
        AssetCategoryName: 'kyc',
      },
    ]);
  };

  const goBack = () => {
    if (fileArray?.length !== filesSelected?.length) {
      setOpen(true);
    } else {
      setUploadKyc(false);
      setFileArray([]);
    }
  };

  const selectUploader = (documentType: string) => {
    setUploadKyc(true);
    setSelectedDocumentType(documentType);
    setFileArray(filesSelected);
  };

  const confirmSkip = () => {
    setOpen(false);
    setUploadKyc(false);
    setFileArray([]);
  };

  return (
    <>
      {open && (
        <GoBackConfirmation
          {...{ setOpen }}
          message={
            'The changes you have done is not submitted. Do you still want to go back?'
          }
          type={'warning'}
          skipConfirm={confirmSkip}
        />
      )}
      {uploadKyc ? (
        <KycUpload
          {...{
            uploadImage,
            uploadDocument,
            setUploadKyc,
            fileArray,
            setFileArray,
            selectedDocumentType,
            goBack,
          }}
        />
      ) : (
        <KycDetails
          {...{ setUploadKyc, setKyc, setSelectedDocumentType, selectUploader }}
        />
      )}
    </>
  );
};
