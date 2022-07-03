import { Dispatch, FC, SetStateAction } from 'react';

interface AddProductImagesProps {
  setProductImages: Dispatch<SetStateAction<string[]>>;
  productImages: string[];
}

export const AddProductImages: FC<AddProductImagesProps> = ({
  setProductImages,
  productImages,
}) => {
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader?.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const deleteItem = (url: string) => {
    const updatedImages = productImages.filter((images) => images !== url);
    setProductImages(updatedImages);
  };

  return (
    <>
      <h3 className="font-medium text-lg mb-1">Add Product Images</h3>
      <p className="text-sm mb-3">
        Add all images for this listing(Minimum 2 and recommended 5){' '}
      </p>

      <div className="clear-both" />

      <div className="w-full">
        <label
          htmlFor="dropzone-file"
          className="inline-block w-full h-12 bg-white rounded-lg border-2 border-gray-200 cursor-pointer overflow-hidden relative"
        >
          <button
            className="float-right bg-blue-400 h-11 leading-10 text-white px-4"
            type="button"
          >
            Upload Image
          </button>
          <img
            src="images/upload-icon.svg"
            className="w-8 absolute left-3 top-2"
            alt="upload-icon"
          />

          <input
            onChange={async (event) => {
              const imageUrl = await toBase64(event.target.files[0]);
              setProductImages([...productImages, imageUrl as string]);
            }}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>

      <div className="clear-both" />
      <div className="row-outer flex-wrap flex pt-5">
        {productImages &&
          productImages?.map((image) => {
            return (
              <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mb-4 mx-2 md:mx-3 md:mb-6 border-2 border-slate-200 overflow-hidden rounded-md h-36 relative">
                <a className="bg-white rounded-full top-2 right-2 z-10 absolute">
                  <img
                    src="images/red-close.svg"
                    onClick={() => deleteItem(image)}
                  />
                </a>

                <img src={image} alt="image" className="relative image-width" />
              </div>
            );
          })}
      </div>
      <div className="clear-both" />
    </>
  );
};
