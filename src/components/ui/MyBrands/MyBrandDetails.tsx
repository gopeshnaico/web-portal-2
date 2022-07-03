import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  BrandDetailsQuery,
  ProductListWithBrandIdQuery,
} from '../../../domain/api/graphql';
import GreenCheck from '../../ui-components/green-check';
import RedCheck from '../../ui-components/red-check';
import YellowCheck from '../../ui-components/yellow-check';

interface BrandDetailsProps {
  setAddGeoFlag: Dispatch<SetStateAction<boolean>>;
  BrandDetailsData: BrandDetailsQuery;
  ProductListWithBrandId: ProductListWithBrandIdQuery;
  updateToggle: (isActive: boolean, productId: string) => Promise<void>;
}

export const BrandDetails: FC<BrandDetailsProps> = ({
  setAddGeoFlag,
  BrandDetailsData,
  ProductListWithBrandId,
  updateToggle,
}) => {
  const brandImage =
    BrandDetailsData?.brand?.BrandAsset[0]?.Asset?.AssetStore?.storage;

  return (
    <div className="w-full">
      <h1 className="font-semibold text-xl pb-3">My Brands</h1>
      <div className="clear-both" />
      <div className="w-full md:w-8/12 lg:w-7/12 rounded-lg shadow-lg bg-white border-2 border-slate-200 mb-6">
        <div className="block sm:flex text-center sm:text-left items-center p-4">
          <div className="relative mx-auto w-20 inline-block sm:mx-0">
            <div className="overflow-hidden rounded-full w-20 mr-4 border-2">
              <img src="/images/demo-brand.jpg" alt="user" />
            </div>
            <a className="p-2 absolute bottom-0 right-2 rounded-full shadow-lg primary-bg w-8 h-8">
              <img src="/images/camera-white.svg" alt="edit" />
            </a>
          </div>
          <div className="sm:ml-2">
            <h3 className="font-semibold text-lg">
              {BrandDetailsData?.brand?.name}
            </h3>
            <div className="font-medium text-gray-400 text-sm">
              {BrandDetailsData?.brand?.BrandRelation?.name}
            </div>
          </div>
          <div className="sm:mx-0 sm:ml-auto">
            <div className="mt-3 mb-2 sm:float-right">
              <div className="rating-small-outer average">
                3.5
                <img src="/images/star.svg" alt="rating" />
              </div>
            </div>
            <div className="clear-both" />
            {BrandDetailsData?.brand.WorkFlowContextInstance.WorkFlowStatus
              .name === 'pending' ? (
              <YellowCheck />
            ) : BrandDetailsData?.brand.WorkFlowContextInstance.WorkFlowStatus
                .name === 'rejected' ? (
              <RedCheck />
            ) : (
              <GreenCheck />
            )}
          </div>
        </div>
        <div
          className="bg-gray-100 border-t-2 rounded-b-lg flex text-center py-2 px-2 cursor-pointer"
          onClick={() => setAddGeoFlag(true)}
        >
          <a className="w-full py-2 flex justify-between items-center">
            <div>
              <img
                src="/images/location-black-icon.svg"
                className="inline-block w-3 mr-2 "
                alt="delete"
              />{' '}
              Visibility limited in 0 states
            </div>

            <img
              src="/images/right-arrow.svg"
              className="inline-block w-3 h-3 mr-2"
              alt="delete"
            />
          </a>
        </div>
      </div>
      <div className="row-outer block flex-wrap sm:flex pt-5 product-list-outer">
        {ProductListWithBrandId?.products.map((product) => (
          <div className="w-full px-3 mb-5 sm:w-4/12 md:w-4/12 lg:w-3/12">
            <div className="rounded-lg listing-outer relative bg-gray-300">
              <img src="/images/demo-list-img-3.jpg" alt="image" />
              <div className="py-3 px-2 relative contant bg-white">
                <div className="rating-small-outer good absolute left-2">
                  5.0
                  <img src="/images/star.svg" alt="rating" />
                </div>
                <div className="form-control toggle-outer absolute right-2">
                  <label className="label cursor-pointer p-0">
                    {product.isActive ? (
                      <>
                        <span className="label-text text-white pr-2 font-xs font-medium">
                          Active
                        </span>

                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                          checked={product.isActive}
                          onChange={() => updateToggle(false, product.id)}
                        />
                      </>
                    ) : (
                      <>
                        <span className="label-text text-white pr-2 font-xs font-medium">
                          InActive
                        </span>
                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                          checked={product.isActive}
                          onChange={() => updateToggle(true, product.id)}
                        />
                      </>
                    )}
                  </label>
                </div>
                <p className="text-xs pt-4">{product.name}</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-black text-lg font-medium">
                    ₹{product.unitPrice ?? 0}
                  </span>
                  <span className="text-black text-sm"> Per piece</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Min Quantity - 5 pcs
                </h5>
                <div className="flex items-center mt-3">
                  <div className="mx-auto w-10 inline-block sm:mx-0">
                    <div className="overflow-hidden rounded-full w-10 mr-4 border-2">
                      <img
                        src={`https://asset-fawow.s3.ap-south-1.amazonaws.com/fawow-asset/${brandImage}`}
                      />
                    </div>
                  </div>
                  <div className="ml-2">
                    <div className="font-medium text-gray-400 text-sm">
                      S&amp;D Free 13%
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-t-2 rounded-b-lg flex text-sm">
                <a className="w-full p-3 text-left">
                  <img
                    src="/images/edit-icon-1.svg"
                    className="inline-block w-5 mr-2"
                    alt="delete"
                  />{' '}
                  Edit
                </a>
                <a className="w-full p-3 text-right">
                  <img
                    src="/images/delete-icon.svg"
                    className="inline-block w-3 mr-2"
                    alt="delete"
                  />{' '}
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
