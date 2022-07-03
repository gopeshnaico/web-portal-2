import { Dispatch, FC, SetStateAction } from 'react';
import { AddressType } from '../../../lib/common';
import { GetAddressQuery } from '../../../domain/api/graphql';
import ImageView from '../../ui-components/imageView';

interface ManageAddressProps {
  setAddFlag: Dispatch<SetStateAction<boolean>>;
  setDeleteFlag: Dispatch<SetStateAction<boolean>>;
  AddressList: GetAddressQuery;
  setEditData: Dispatch<SetStateAction<AddressType>>;
  setDeleteId: Dispatch<SetStateAction<string>>;
  setEditDataId: Dispatch<SetStateAction<string>>;
}

export const ManageAddress: FC<ManageAddressProps> = ({
  setAddFlag,
  AddressList,
  setEditData,
  setDeleteId,
  setDeleteFlag,
  setEditDataId,
}) => {
  const listAddress = AddressList?.addresses;
  const addressHeightClass =
    AddressList?.addresses.length === 0
      ? 'w-full pt-5 h-0 overflow-y-auto scroll-style-none'
      : 'w-full pt-5  h-3/5 overflow-y-auto scroll-style-none';

  return (
    <>
      <div
        className="w-full pt-5 lg:w-8/12 xl:w-6/12 px-0 pt-8 pb-16 lg:pl-6 pr-0"
        data-testid="outerDiv"
      >
        <div className="block sm:flex items-center pb-5">
          <h1 className="font-semibold text-xl">Manage Address</h1>
          <button
            className="text-center ml-auto text-white px-6 mt-5 h-12 pt-1 leading-10 rounded-lg inline-block bg-blue-500 shadow-lg shadow-blue-500/50 w-full sm:w-auto sm:mt-0"
            onClick={() => {
              setAddFlag(true);
              setEditData(undefined);
              setEditDataId('');
            }}
          >
            Add Address
            <img
              src="images/add-icon.svg"
              alt="add-icon"
              className="ml-3 w-5 inline-block"
            />
          </button>
        </div>
        <div className={addressHeightClass}>
          {listAddress?.map((address) => (
            <div className="relative w-full mb-5 border-2 border-gray-300 p-4 rounded-lg  pb-0">
              <h2 className="font-semibold text-xl py-2 flex">
                <div className="w-10 h-10 mr-3 p-2 rounded-full bg-blue-500">
                  <ImageView
                    src={'images/shop-icon.svg'}
                    alt="shop"
                    width={24}
                    height={19.19}
                  />
                </div>
                {address?.shopName}
              </h2>
              <div className="flex">
                <div>
                  <h3 className="font-semibold text-lg pb-1">
                    {address?.contactName}
                  </h3>
                  <p>
                    {address?.landmark}
                    <br />
                    {address?.addressLine1},
                    <br />
                    GSTIN:{address?.gstin}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  {address.isActive ? (
                    <>
                      <img
                        src="images/green-check.svg"
                        className="w-5 mb-1 inline-block"
                        alt="Tick"
                      />
                      <div className="text-lime-600 text-sm">Active</div>
                    </>
                  ) : (
                    <div className="text-red-600 text-sm">InActive</div>
                  )}
                </div>
              </div>
              <div className="flex text-center">
                <button
                  className="w-full p-6 relative after:content-[''] after:absolute after:w-5 after:h-7 after:top-6 after:right-0 after:-z-10 after:border-r-2 after:border-gray-300"
                  onClick={() => {
                    setDeleteFlag(true);
                    setDeleteId(address.id);
                  }}
                >
                  <div>
                    <ImageView
                      className="inline-block w-3 mr-2"
                      src={'images/delete-icon.svg'}
                      alt="delete"
                      height={17.77}
                      width={20}
                    />
                    <span> Delete</span>
                  </div>
                </button>
                <button
                  className="w-full p-6 "
                  onClick={() => {
                    setEditData(address as unknown as AddressType);
                    setAddFlag(true);
                    setEditDataId(address.id);
                  }}
                >
                  <ImageView
                    src={'images/edit-icon-1.svg'}
                    className="inline-block w-5 mr-2"
                    height={17.75}
                    width={20}
                    alt="delete"
                  />{' '}
                  <span> Edit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
