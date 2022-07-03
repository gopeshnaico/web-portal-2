import { FC, useEffect, useState } from 'react';
import { ProductDetailsAttributeListQuery } from '../../../../../src/domain/api/graphql';

interface ProductDetailsAttributeListProps {
  productDetailsAttributeListData: ProductDetailsAttributeListQuery;
}
export const ProductDetails: FC<ProductDetailsAttributeListProps> = ({
  productDetailsAttributeListData,
}) => {
  const [selected, setselected] = useState<string>();

  const [ids, setIds] = useState<any>([]);

  const [subIds, setSubIds] = useState<any>([]);

  console.log(ids);

  return (
    <>
      <h3 className="font-medium text-lg mb-1">Product Details</h3>
      <div className="clear-both"></div>

      {productDetailsAttributeListData?.ProductDetailsAttributeList?.Attributes.map(
        (subHeader, subIndex) => {
          return (
            <div
              key={subIndex}
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-zinc-50 rounded-lg mb-3"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-base border-l-8 border-blue-400">
                {subHeader?.Attribute?.Attribute_TL[0]?.name}
              </div>
              <div className="collapse-content bg-white">
                {subHeader?.Attribute?.AttributeControlTypeValue.map(
                  (subinnerHeader, innerIndex) => {
                    return (
                      <div
                        className="pt-4 row-outer block flex-wrap sm:flex"
                        key={innerIndex}
                      >
                        {subHeader?.Attribute?.AttributeValue.map(
                          (subSubHeading, subSubHeadingIndex) => {
                            return (
                              <div  key={"product-detail"+subSubHeadingIndex} className="px-3 w-full mb-3 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
                                <div className="form-control">
                                  <label
                                    className="label cursor-pointer"
                                   
                                  >
                                    <input
                                      name={
                                        subinnerHeader?.controlValue ===
                                          'false' &&
                                        ids.includes(
                                          (i) => i === subHeader?.Attribute?.id
                                        )
                                          ? 'colored-radio'
                                          : ''
                                      }
                                      type={
                                        subinnerHeader?.controlValue === 'false'
                                          ? 'radio'
                                          : 'checkbox'
                                      }
                                      value={
                                        subinnerHeader?.controlValue === 'false'
                                          ? selected
                                          : ''
                                      }
                                      className={
                                        subinnerHeader?.controlValue === 'false'
                                          ? 'radio w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                          : 'checkbox checkbox-primary'
                                      }
                                      onChange={(e) => {
                                        console.log(
                                          'kkkkk',
                                          ids.includes(
                                            (i) =>
                                              i === subHeader?.Attribute?.id
                                          )
                                        );
                                        if (
                                          ids.includes(
                                            (i) =>
                                              i === subHeader?.Attribute?.id
                                          ) === false
                                        ) {
                                          setIds([
                                            ...ids,
                                            subHeader.Attribute.id,
                                          ]);
                                        }
                                      }}
                                    />
                                    <span className="label-text font-regular text-sm mr-auto ml-2">
                                      {
                                        subSubHeading?.AttributeValue_TL[0]
                                          ?.name
                                      }
                                    </span>
                                  </label>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        }
      )}
      <div className="clear-both" />
    </>
  );
};
