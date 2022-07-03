import { Dispatch, FC, SetStateAction } from 'react';
import { BrandsSelectQuery } from '../../../../../src/domain/api/graphql';

type SelectedBrand = {
  id: string;
  name: string;
};
interface SelectBrandProps {
  selectBrandList: BrandsSelectQuery;
  setProductDetails: Dispatch<SetStateAction<object>>;
  productDetails: {
    selectedBrand: SelectedBrand;
  };
}

export const SelectBrand: FC<SelectBrandProps> = ({
  selectBrandList,
  setProductDetails,
  productDetails,
}) => {
  return (
    <>
      <h3 className="font-medium text-lg mb-1">
        Select Brand for this product
      </h3>
      <p className="text-sm mb-3">
        You can create listing only with your registered brand. Register your
        brand if not done yet.{' '}
      </p>

      <div className="clear-both" />
      {selectBrandList?.brands?.map((brand) => (
        <label className="custom-radio flex shadow-md border-2 border-gray-200 rounded-lg items-center mb-3 p-3">
          <div className="bg-white border-2 border-gray-200 rounded-full overflow-hidden w-20 h-20 mr-4">
            <img src={brand.logoURL} className="max-w-full" alt="" />
          </div>
          <div className="font-medium text-base">{brand.name}</div>
          <div className="ml-auto mr-4">
            <input
              onClick={() =>
                setProductDetails({
                  ...productDetails,
                  selectedBrand: { id: brand.id, name: brand.name },
                })
              }
              type="radio"
              checked={productDetails?.selectedBrand?.id === brand.id}
              name="radio"
            />
            <span className="checkmark" />
          </div>
        </label>
      ))}
    </>
  );
};
