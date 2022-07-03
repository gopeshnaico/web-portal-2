import { useRouter } from 'next/router';
import ImageView from '../../ui-components/imageView';
import { BrandsView } from './BrandsView';

export const SellerHome = () => {
  const router = useRouter();
  return (
    <div className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0">
      <div className="pb-5">
        <div className="p-3 listing-outer w-full rounded-lg sm:w-8/12 md:w-6/12 mx-auto bg-slate-100 shadow-lg">
          <a>
            <div className="w-full block sm:flex">
              <div>
                <div className="w-20 h-20 text-center bg-gray-200 rounded-full overflow-hidden mx-auto sm:ml-0 sm:mr-3 sm:float-left">
                  <div className="inline-block  w-20">
                    <ImageView
                      height={100}
                      width={100}
                      src="images/studio-icon.svg"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="clear-both" />
              </div>
              <div className="float-left w-full lg:w-full text-center sm:text-left">
                <h2 className="font-medium text-lg py-2 pb-0">Fawow Studio</h2>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-1">
        <h2 className="float-left font-regular pb-2 text-2xl">
          Manage Business
        </h2>
        <div className="clear-both" />
        <div className="w-full">
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/orders-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Orders</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/return-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Return</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/my-profile-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">My Profile</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/support-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Support</div>
          </div>
          <div
            className="text-center inline-block m-3 cursor-pointer"
            onClick={() => router.push('/my-brands')}
          >
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/my_brands.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">My Brands</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/listing-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Listings</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/offer-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Offers</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/offer-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Disputes</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/reports-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Reports</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/manage-team-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Manage Team</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/my-store-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">My Store</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/address-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Address</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/bank-account-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Bank Account</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-7 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/events-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Events</div>
          </div>
          <div className="text-center inline-block m-3">
            <a className="inline-block w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-full items-center">
              <div className="w-8 inline-block mt-6">
                <ImageView
                  height={50}
                  width={50}
                  src="images/explore-icon.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="pt-1">Explore</div>
          </div>
        </div>
      </div>
      <BrandsView />
      <div className="clear-both" />
    </div>
  );
};
