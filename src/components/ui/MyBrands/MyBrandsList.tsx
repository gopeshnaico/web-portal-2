import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import { BrandsQuery, SortOrder } from '../../../domain/api/graphql';
import ImageView from '../../ui-components/imageView';

interface BrandListProps {
  myBrandsList: BrandsQuery;
  sortList: (sortKey: string) => void;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
  sortOrder: SortOrder;
}

export const MyBrandsList: FC<BrandListProps> = ({
  myBrandsList,
  sortList,
  setSortOrder,
  sortOrder,
}) => {
  const setRatingColor = (rating: number) => {
    if (rating < 3.5) {
      return 'rating-small-outer poor';
    } else if (rating < 5.0) {
      return 'rating-small-outer average';
    } else {
      return 'rating-small-outer good';
    }
  };
  return (
    <>
      <div className="w-full" data-testid="outerdiv">
        <div className="float-left">
          <h1 className="font-semibold text-xl pb-3">My Brands</h1>
        </div>
        <div className="w-full float-right flex sm:w-auto">
          <button className="btt w-full  border-2 border-blue-500 ml-0 h-10 leading-9 rounded-md px-4 inline-block bg-blue-500 shadow-lg shadow-blue-500/50  sm:w-auto sm:ml-5 sm:mt-0 hover:bg-cyan-500">
            Add Brand
            <div className="ml-3 w-4 inline-block">
              <ImageView
                height={75}
                width={75}
                src="images/add-icon.svg"
                alt="add-icon"
              />
            </div>
          </button>

          <div className="dropdown dropdown-end border-2 border-gray-300 ml-3 rounded-md w-full h-10 sm:w-auto">
            <label
              tabIndex={0}
              className="cursor-pointer h-10 leading-9 text-black px-3 flex"
            >
              <div className="inline-block w-4">
                <ImageView
                  height={75}
                  width={75}
                  src="images/sort-icon.svg"
                  alt="sort icon"
                />
              </div>
              <span className="mx-2">Sort</span>
              <div className="inline-block w-3 ml-auto">
                <ImageView
                  height={75}
                  width={75}
                  src="images/dropdown-arrow.svg"
                  alt="sort icon"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52 text-sm"
            >
              <li
                onClick={() => {
                  setSortOrder(
                    sortOrder === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc
                  );
                  sortList('name');
                }}
              >
                <a className="p-2">{'Brand Name'}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear-both" />
      </div>
      <div className="clear-both" />
      <div className="row-outer block flex-wrap md:flex pt-5">
        {myBrandsList?.brands?.map((brand) => (
          <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12" key={brand.id}>
            <Link href={`my-brands/${brand?.id}`}>
              <div className="p-3 listing-outer rounded-lg cursor-pointer">
                <div className="w-full">
                  <div className="float-left w-16 h-16 mr-2 bg-gray-200 rounded-full overflow-hidden border-2 border-slate-100">
                    <ImageView
                      height={75}
                      width={75}
                      src={brand.logoURL}
                      alt="image"
                    />
                  </div>

                  <div className="float-left lg:w-full xl:w-auto">
                    <h3 className="font-semibold pb-2">{brand.name}</h3>
                    <p className="pb-2">
                      {brand.BrandRelation.name === 'owner'
                        ? 'Owner'
                        : brand.BrandRelation.name === 'reseller'
                        ? 'Distributor'
                        : 'Trader'}
                    </p>
                    <div className={setRatingColor(brand.rating)}>
                      <div>
                        {brand.rating}
                        <span className="ml-2">
                          <ImageView
                            height={15}
                            width={15}
                            src="images/star.svg"
                            alt="rating"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className={`absolute right-0 bottom-0 z-10 py-2 px-3 text-white text-sm font-medium 
              ${
                brand.WorkFlowContextInstance.WorkFlowStatus.name === 'pending'
                  ? 'bg-amber-300 hover:bg-amber-400'
                  : brand.WorkFlowContextInstance.WorkFlowStatus.name ===
                    'rejected'
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
              }
              `}
                >
                  {brand.WorkFlowContextInstance.WorkFlowStatus.name ===
                  'approved' ? (
                    <div className="w-4 mt-1 mr-2 float-left">
                      <ImageView
                        height={75}
                        width={75}
                        src="images/tick-white-trans.svg"
                        alt="Approved"
                      />
                    </div>
                  ) : (
                    ''
                  )}{' '}
                  {brand.WorkFlowContextInstance.WorkFlowStatus.name
                    .charAt(0)
                    .toUpperCase() +
                    brand.WorkFlowContextInstance.WorkFlowStatus.name.slice(1)}
                </a>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
