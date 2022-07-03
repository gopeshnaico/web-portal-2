import { Dispatch, FC, SetStateAction } from 'react';
import router from 'next/router';
import { ProductListQuery } from '../../../../src/domain/api/graphql';
import ImageView from '../../ui-components/imageView';

interface ProductListProps {
  productListData: ProductListQuery;
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
  toggleTabs: (isActive: boolean) => void;
  updateToggle: (isActive: boolean, id: string) => Promise<void>;
}

export const ProductList: FC<ProductListProps> = ({
  productListData,
  toggleTabs,
  active,
  updateToggle,
}) => {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <h1 className="font-semibold text-xl pb-3">My Product List</h1>
        </div>

        <div className="clear-both" />
        <div className="block lg:flex">
          <div className="w-full mb-5 lg:w-6/12 lg:mb-0 relative overflow-hidden">
            <input
              type="text"
              placeholder="Type here"
              className="w-full border-2 border-gray-300 pl-3 pr-10 h-10 leading-10 rounded-md"
            />
            <a className="absolute right-0 top-0 px-2 h-10 py-2 w-10">
              <ImageView
                width={24}
                height={24}
                src="images/search-icon.svg"
                className="max-w-full"
                alt="search"
              />
            </a>
          </div>
          <div className="w-full ml-auto block sm:w-auto sm:flex whitespace-nowrap">
            <button
              onClick={() => router.push('/product/new')}
              className="w-full btt-primary border-2 border-blue-500 ml-0 h-11 leading-10 rounded-md px-4 inline-block bg-blue-500 shadow-lg shadow-blue-500/50 mb-3  sm:w-auto sm:mt-0 mr-auto lg:ml-5 lg:mr-0"
            >
              Add Product
              <div className="ml-3 w-4 inline-block">
                <ImageView
                  width={16}
                  height={16}
                  src="images/add-icon.svg"
                  alt="add-icon"
                />
              </div>
            </button>
            <div className="border-2 border-gray-300 rounded-md w-full h-10 sm:w-auto ml-0 text-center sm:ml-3">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="cursor-pointer h-10 leading-9 text-black px-3 flex border-r-2 border-gray-300"
                >
                  <ImageView
                    width={16}
                    height={40}
                    src="images/filter-icon.svg"
                    className="inline-block w-4"
                    alt="filter icon"
                  />

                  <span className="mx-2">Filter</span>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52 text-sm"
                >
                  <li>
                    <a className="p-2">Approved</a>
                  </li>
                  <li>
                    <a className="p-2">Not Approved</a>
                  </li>
                  <li>
                    <a className="p-2">Rating Top</a>
                  </li>
                  <li>
                    <a className="p-2">Rating Average</a>
                  </li>
                  <li>
                    <a className="p-2">Rating Low</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="cursor-pointer h-10 leading-9 text-black px-3 flex"
                >
                  <ImageView
                    width={16}
                    height={40}
                    src="images/sort-icon.svg"
                    className="inline-block w-4"
                    alt="sort icon"
                  />
                  <span className="mx-2">Sort</span>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52 text-sm"
                >
                  <li>
                    <a className="p-2">Approved</a>
                  </li>
                  <li>
                    <a className="p-2">Not Approved</a>
                  </li>
                  <li>
                    <a className="p-2">Rating Top</a>
                  </li>
                  <li>
                    <a className="p-2">Rating Average</a>
                  </li>
                  <li>
                    <a className="p-2">Rating Low</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-both" />
      </div>
      <div className="clear-both" />
      <div className="text-md font-medium text-center text-gray-400 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px mt-5">
          <li>
            <a
              className={
                active
                  ? 'inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-blue-400 active text-black cursor-pointer'
                  : 'inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer'
              }
              aria-current="page"
              onClick={() => {
                toggleTabs(true);
              }}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={
                active
                  ? 'inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer'
                  : 'inline-block px-4 sm:px-8 py-2 rounded-t-lg border-b-4 border-blue-400 active text-black cursor-pointer'
              }
              onClick={() => {
                toggleTabs(false);
              }}
            >
              Inactive
            </a>
          </li>
        </ul>
      </div>
      <div className="clear-both" />
      <div className="row-outer block flex-wrap md:flex pt-5 product-list-outer">
        {productListData?.products?.map((list) => (
          <div className="w-full px-3 mb-5 md:w-6/12 lg:w-3/12">
            <div className="rounded-lg listing-outer relative">
              <div>
                <ImageView
                  width={208}
                  height={244.73}
                  src="images/demo-list-img-3.jpg"
                  alt="image"
                />
              </div>
              <div className="py-3 px-2 relative contant">
                <div className="w-fit rating-small-outer good absolute left-2">
                  5.0
                  <span className="ml-2">
                    <ImageView
                      width={15}
                      height={13}
                      src="images/star.svg"
                      alt="rating"
                    />
                  </span>
                </div>
                <div className="form-control toggle-outer absolute right-2">
                  <label className="label cursor-pointer p-0">
                    <span className="label-text text-white pr-2 font-xs font-medium">
                      Active
                    </span>
                    {list.isActive ? (
                      <>
                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                          checked={list.isActive}
                          onChange={() => {
                            updateToggle(false, list.id);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                          checked={list.isActive}
                          onChange={() => {
                            updateToggle(true, list.id);
                          }}
                        />
                      </>
                    )}
                  </label>
                </div>

                <h4 className="font-semibold text-base pt-1">{list.name}</h4>
                <p className="text-xs">{list.description}</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-black text-lg font-medium">
                    ₹{list.unitPrice ?? 0}
                  </span>
                  <span className="text-black text-sm ml-2">Per piece</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Min Quantity-{list.moq ?? 0} pcs
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
