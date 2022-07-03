import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../../ui-components/button';
import HeadingLabel from '../../ui-components/headingLabel';
import CheckBoxWithoutLabel from '../../ui-components/checkboxWithoutLabel';
import { category } from '../../../lib/common';
import { useTranslation } from 'next-i18next';

interface CategoryFormProps {
  updateCategories: () => void;
  categoryData: category;
  setCategoryData: Dispatch<SetStateAction<category>>;
}

export const CategoryForm: FC<CategoryFormProps> = ({
  updateCategories,
  categoryData,
  setCategoryData,
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const isButtonDisabled = categoryData?.find(
    (category) => category.isChecked === true
  )
    ? false
    : true;

  const buttonLabel = router?.pathname === '/categories' ? 'Save' : 'Next';

  const updateChecking = (id: string) => {
    const data = categoryData.map((i) => {
      if (i.id === id) {
        i.isChecked = !i.isChecked;
      }
      return i;
    });
    setCategoryData(data);
  };
  return (
    <div
      className="py-6 mx-auto w-full sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-6/12"
      data-testid="cardDiv"
    >
      <div className="mb-4">
        <div>
          <HeadingLabel
            className="mt-8 mb-2 text-2xl"
            labelText="Select your categories of interest"
          />
          <p className="mb-2">Select atleast one to serve you better</p>
        </div>
      </div>
      <div className="clear-both" />
      <div className="bg-slate-100 border-2 border-slate-200 mb-10 p-3 mx-auto shadow-lg rounded-lg w-full sm:p-4">
        <div className="category-checkbox-main-outer">
          {categoryData?.map((category) => (
            <div
              className="float-left w-full md:w-4/12 lg:w-4/12 w-6/12 category-checkbox-outer"
              key={category.id}
            >
              <label className="category-checkbox">
                <div className="category-checkbox-txt">
                  <Image
                    src={category.Asset.AssetStore.storage}
                    width={70}
                    height={70}
                    unoptimized
                  />
                  <div className="clear-both" />
                  {category.name}
                </div>

                <CheckBoxWithoutLabel
                  isChecked={category.isChecked}
                  onChange={() => updateChecking(category.id)}
                />
                <span className="checkmark" />
              </label>
            </div>
          ))}
        </div>
        <div className="clear-both" />
      </div>
      <div className="clear-both" />
      <div className="w-full mt-4 text-right">
        {router?.pathname === '/categories' && (
          <div className="w-auto mt-4 md:inline-block ">
            <Button
              className="px-8 h-10 leading-10 w-auto bg-gray-200 rounded-3xl mr-3 hover:bg-gray-300 inline-block"
              label="Back"
              type="button"
              onClick={() => router?.back()}
            />
          </div>
        )}
        <Button
          isDisabled={isButtonDisabled}
          onClick={() => {
            updateCategories();
          }}
          className={`px-8 h-10 leading-10 w-auto bg-blue-500 rounded-3xl  inline-block text-white ${
            isButtonDisabled
              ? 'opacity-70 hover:bg-blue-500'
              : 'hover:bg-blue-400'
          }`}
          label={buttonLabel}
          type="button"
        />
      </div>
    </div>
  );
};
