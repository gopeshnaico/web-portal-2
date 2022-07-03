import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '../../../lib/redux/hooks';
/* eslint-disable-next-line */
export interface DashboardProps {}

export function DashboardPage(props: DashboardProps) {
  const authState = useAppSelector((state) => state.authSession);
  const router = useRouter();

  useEffect(() => {
    if (authState?.authToken === '') {
      router.push('/login');
    }
  }, [authState]);

  return (
    <section>
      <div className="bg-gray-200 home-category">
        <div className="container block lg:flex">
          <div className="block w-12/12 text-center sm:flex lg:w-8/12 xl:w-9/12">
            <a className="py-4 px-1 home-category-outer">
              <img src="images/men-icon.svg" alt="men" />
              <div className="pt-2">Men</div>
            </a>
            <a className="py-4 px-1 home-category-outer">
              <img src="images/woman-icon.svg" alt="woman" />
              <div className="pt-2">Women</div>
            </a>
            <a className="py-4 px-1 home-category-outer">
              <img src="images/boys-icon.svg" alt="boys" />
              <div className="pt-2">Boys</div>
            </a>
            <a className="py-4 px-1 home-category-outer">
              <img src="images/girls-icon.svg" alt="girls" />
              <div className="pt-2">Girls</div>
            </a>
            <a className="py-4 px-1 home-category-outer">
              <img src="images/infants-icon.svg" alt="infants" />
              <div className="pt-2">Infants</div>
            </a>
            <a className="py-4 px-1 home-category-outer">
              <img src="images/accessories-icon.svg" alt="accessories" />
              <div className="pt-2">Accessories</div>
            </a>
          </div>
          <div className="w-12/12 px-5 py-5 bg-slate-300 text-center lg:w-4/12 xl:w-3/12 lg:py-5 lg:pl-5 lg:pr-0">
            <a className="pink-btt">
              Complete Your Shop KYC{' '}
              <img src="images/pink-right-arrow.svg" alt="KYC" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Deal of the day Start*/}
        <div className="pt-8 pb-5">
          <div className=" pb-3">
            <h2 className="float-left font-regular text-2xl">
              Deal of the day
            </h2>
            <a className="float-right flex hover:text-cyan-500">
              View All{' '}
              <img
                src="images/right-arrow-black.svg"
                className="ml-2 w-5"
                alt="Deal of the day"
              />
            </a>
            <div className="clear-both" />
          </div>
          <div className="relative flex slider-outer">
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden">
              <img src="images/demo-list-img-1.jpg" alt="image" />
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden">
              <img src="images/demo-list-img-1.jpg" alt="image" />
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden">
              <img src="images/demo-list-img-1.jpg" alt="image" />
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden">
              <img src="images/demo-list-img-1.jpg" alt="image" />
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden">
              <img src="images/demo-list-img-1.jpg" alt="image" />
            </div>
            <a
              className="absolute z-30 mt-7 top-1/4 left-0 opacity-50"
              style={{ marginLeft: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
            <a
              className="absolute z-30 mt-7 top-1/4 right-0"
              style={{ marginRight: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
          </div>
        </div>
        {/* Deal of the day End*/}
        {/* Top Section Start*/}
        <div className="pt-8 pb-5">
          <div className=" pb-3">
            <h2 className="float-left font-regular text-2xl">Top Section</h2>
            <a className="float-right flex hover:text-cyan-500">
              View All{' '}
              <img
                src="images/right-arrow-black.svg"
                className="ml-2 w-5"
                alt="Top Section"
              />
            </a>
            <div className="clear-both" />
          </div>
          <div className="relative flex slider-outer">
            <div className="w-3/12 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-2.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                <div>
                  <img
                    src="images/demo-brand.jpg"
                    alt="brand"
                    className="rounded-full w-12 mr-3 mt-2"
                  />
                </div>
                <div className="font-semibold text-white">
                  Brand Name
                  <div className="clear-both" />
                  <div className="rating-small-outer average">
                    3.25
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/12 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-2.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                <div>
                  <img
                    src="images/demo-brand.jpg"
                    alt="brand"
                    className="rounded-full w-12 mr-3 mt-2"
                  />
                </div>
                <div className="font-semibold text-white">
                  Brand Name
                  <div className="clear-both" />
                  <div className="rating-small-outer good">
                    5
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/12 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-2.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                <div>
                  <img
                    src="images/demo-brand.jpg"
                    alt="brand"
                    className="rounded-full w-12 mr-3 mt-2"
                  />
                </div>
                <div className="font-semibold text-white">
                  Brand Name
                  <div className="clear-both" />
                  <div className="rating-small-outer good">
                    4.75
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/12 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-2.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                <div>
                  <img
                    src="images/demo-brand.jpg"
                    alt="brand"
                    className="rounded-full w-12 mr-3 mt-2"
                  />
                </div>
                <div className="font-semibold text-white">
                  Brand Name
                  <div className="clear-both" />
                  <div className="rating-small-outer poor">
                    1.5
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="absolute z-30 mt-7 top-1/4 left-0 opacity-50"
              style={{ marginLeft: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
            <a
              className="absolute z-30 mt-7 top-1/4 right-0"
              style={{ marginRight: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
          </div>
        </div>
        {/* Deal of the day End*/}
        {/* Ads Start*/}
        <div className="block pt-8 pb-5 home-ads-outer lg:flex">
          <div className="w-6/12 mx-2">
            <a>
              <img src="images/demo-ads-1.jpg" />
            </a>
          </div>
          <div className="w-6/12 mx-2">
            <a>
              <img src="images/demo-ads-2.jpg" />
            </a>
          </div>
        </div>
        {/* Ads End*/}
        {/* Recommendation Start */}
        <div className="pt-8 pb-5">
          <div className=" pb-3">
            <h2 className="float-left font-regular text-2xl">Recommendation</h2>
            <a className="float-right flex hover:text-cyan-500">
              View All{' '}
              <img
                src="images/right-arrow-black.svg"
                className="ml-2 w-5"
                alt="Recommendation"
              />
            </a>
            <div className="clear-both" />
          </div>
          <div className="relative flex slider-outer">
            <div className="w-2/12 mx-2 rounded-lg listing-outer relative">
              <a className="fav-icon active absolute" />
              <img src="images/demo-list-img-3.jpg" alt="image" />
              <div className="py-3 px-2 relative contant">
                <div className="trending absolute">Trending</div>
                <div className="rating-small-outer average absolute">
                  1.5
                  <img src="images/star.svg" alt="rating" />
                </div>
                <h4 className="font-semibold text-base pt-1">Brand Name</h4>
                <p className="text-xs ">Striped shirt with patch pocket</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-gray-500">₹1,399</span>
                  <span className="text-black">₹372</span>
                  <span className="text-lime-600">72% Off</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Buy 2, Save extra 5%
                </h5>
              </div>
            </div>
            <div className="w-2/12 mx-2 rounded-lg listing-outer relative">
              <a className="fav-icon absolute" />
              <img src="images/demo-list-img-3.jpg" alt="image" />
              <div className="py-3 px-2 relative contant">
                <div className="trending absolute">Trending</div>
                <div className="rating-small-outer average absolute">
                  1.5
                  <img src="images/star.svg" alt="rating" />
                </div>
                <h4 className="font-semibold text-base pt-1">Brand Name</h4>
                <p className="text-xs ">Striped shirt with patch pocket</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-gray-500">₹1,399</span>
                  <span className="text-black">₹372</span>
                  <span className="text-lime-600">72% Off</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Buy 2, Save extra 5%
                </h5>
              </div>
            </div>
            <div className="w-2/12 mx-2 rounded-lg listing-outer relative">
              <a className="fav-icon absolute" />
              <img src="images/demo-list-img-3.jpg" alt="image" />
              <div className="py-3 px-2 relative contant">
                <div className="trending absolute">Trending</div>
                <div className="rating-small-outer average absolute">
                  1.5
                  <img src="images/star.svg" alt="rating" />
                </div>
                <h4 className="font-semibold text-base pt-1">Brand Name</h4>
                <p className="text-xs ">Striped shirt with patch pocket</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-gray-500">₹1,399</span>
                  <span className="text-black">₹372</span>
                  <span className="text-lime-600">72% Off</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Buy 2, Save extra 5%
                </h5>
              </div>
            </div>
            <div className="w-2/12 mx-2 rounded-lg listing-outer relative">
              <a className="fav-icon active absolute" />
              <img src="images/demo-list-img-3.jpg" alt="image" />
              <div className="py-3 px-2 relative contant">
                <div className="trending absolute">Trending</div>
                <div className="rating-small-outer average absolute">
                  1.5
                  <img src="images/star.svg" alt="rating" />
                </div>
                <h4 className="font-semibold text-base pt-1">Brand Name</h4>
                <p className="text-xs ">Striped shirt with patch pocket</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-gray-500">₹1,399</span>
                  <span className="text-black">₹372</span>
                  <span className="text-lime-600">72% Off</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Buy 2, Save extra 5%
                </h5>
              </div>
            </div>
            <div className="w-2/12 mx-2 rounded-lg listing-outer relative">
              <a className="fav-icon absolute" />
              <img src="images/demo-list-img-3.jpg" alt="image" />
              <div className="py-3 px-2 relative contant">
                <div className="trending absolute">Trending</div>
                <div className="rating-small-outer average absolute">
                  1.5
                  <img src="images/star.svg" alt="rating" />
                </div>
                <h4 className="font-semibold text-base pt-1">Brand Name</h4>
                <p className="text-xs ">Striped shirt with patch pocket</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-gray-500">₹1,399</span>
                  <span className="text-black">₹372</span>
                  <span className="text-lime-600">72% Off</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Buy 2, Save extra 5%
                </h5>
              </div>
            </div>
            <div className="w-2/12 mx-2 rounded-lg listing-outer relative">
              <a className="fav-icon absolute" />
              <img src="images/demo-list-img-3.jpg" alt="image" />
              <div className="py-3 px-2 relative contant">
                <div className="trending absolute">Trending</div>
                <div className="rating-small-outer average absolute">
                  1.5
                  <img src="images/star.svg" alt="rating" />
                </div>
                <h4 className="font-semibold text-base pt-1">Brand Name</h4>
                <p className="text-xs ">Striped shirt with patch pocket</p>
                <h5 className="py-2 text-sm font-medium">
                  <span className="text-gray-500">₹1,399</span>
                  <span className="text-black">₹372</span>
                  <span className="text-lime-600">72% Off</span>
                </h5>
                <h5 className="text-sm font-medium text-black">
                  Buy 2, Save extra 5%
                </h5>
              </div>
            </div>
            <a
              className="absolute z-30 mt-7 top-1/4 left-0 opacity-50"
              style={{ marginLeft: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
            <a
              className="absolute z-30 mt-7 top-1/4 right-0"
              style={{ marginRight: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
          </div>
        </div>
        {/* Recommendation End*/}
        {/* Brand Highlights Start*/}
        <div className="pt-8 pb-5">
          <div className=" pb-3">
            <h2 className="float-left font-regular text-2xl">
              Brand Highlights
            </h2>
            <a className="float-right flex hover:text-cyan-500">
              View All{' '}
              <img
                src="images/right-arrow-black.svg"
                className="ml-2 w-5"
                alt="Brand Highlights"
              />
            </a>
            <div className="clear-both" />
          </div>
          <div className="relative flex slider-outer">
            <div className="w-4/12 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <a>
                <img src="images/demo-list-img-4.jpg" alt="image" />
              </a>
              <a>
                <div className="absolute w-14 h-8 bottom-2 right-2 z-30 rounded-md bg-white overflow-hidden text-center">
                  <img
                    src="images/demo-brand.jpg"
                    alt="brand"
                    className="max-h-8 inline-block"
                  />
                </div>
              </a>
            </div>
            <div className="w-4/12 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <a>
                <img src="images/demo-list-img-4.jpg" alt="image" />
              </a>
              <a>
                <div className="absolute w-14 h-8 bottom-2 right-2 z-30 rounded-md bg-white overflow-hidden text-center">
                  <img
                    src="images/demo-brand.jpg"
                    alt="brand"
                    className="max-h-8 inline-block"
                  />
                </div>
              </a>
            </div>
            <div className="w-4/12 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <a>
                <img src="images/demo-list-img-4.jpg" alt="image" />
              </a>
              <a>
                <div className="absolute w-14 h-8 bottom-2 right-2 z-30 rounded-md bg-white overflow-hidden text-center">
                  <img
                    src="images/demo-brand.jpg"
                    alt="brand"
                    className="max-h-8 inline-block"
                  />
                </div>
              </a>
            </div>
            <a
              className="absolute z-30 mt-7 top-1/4 left-0 opacity-50"
              style={{ marginLeft: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
            <a
              className="absolute z-30 mt-7 top-1/4 right-0"
              style={{ marginRight: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
          </div>
        </div>
        {/* Brand Highlights End*/}
        {/* Best Sellers Start*/}
        <div className="pt-8 pb-5">
          <div className=" pb-3">
            <h2 className="float-left font-regular text-2xl">Best Sellers</h2>
            <a className="float-right flex hover:text-cyan-500">
              View All{' '}
              <img
                src="images/right-arrow-black.svg"
                className="ml-2 w-5"
                alt="Best Sellers"
              />
            </a>
            <div className="clear-both" />
          </div>
          <div className="relative flex slider-outer">
            <div className="w-40 mx-2 bg-gray-200 rounded-lg overflow-hidden h-16 border-2 border-slate-100">
              <img src="images/demo-brand.jpg" alt="image" />
            </div>
            <div className="w-40 mx-2 bg-gray-200 rounded-lg overflow-hidden h-16 border-2 border-slate-100">
              <img src="images/demo-brand.jpg" alt="image" />
            </div>
            <div className="w-40 mx-2 bg-gray-200 rounded-lg overflow-hidden h-16 border-2 border-slate-100">
              <img src="images/demo-brand.jpg" alt="image" />
            </div>
            <div className="w-40 mx-2 bg-gray-200 rounded-lg overflow-hidden h-16 border-2 border-slate-100">
              <img src="images/demo-brand.jpg" alt="image" />
            </div>
            <div className="w-40 mx-2 bg-gray-200 rounded-lg overflow-hidden h-16 border-2 border-slate-100">
              <img src="images/demo-brand.jpg" alt="image" />
            </div>
            <div className="w-40 mx-2 bg-gray-200 rounded-lg overflow-hidden h-16 border-2 border-slate-100">
              <img src="images/demo-brand.jpg" alt="image" />
            </div>
            <div className="w-40 mx-2 bg-gray-200 rounded-lg overflow-hidden h-16 border-2 border-slate-100">
              <img src="images/demo-brand.jpg" alt="image" />
            </div>
            <a
              className="absolute z-30 mt-0 top-1/4 left-0 opacity-50"
              style={{ marginLeft: '-20px', top: 0 }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
            <a
              className="absolute z-30 mt-0 top-1/4 right-0"
              style={{ marginRight: '-20px', top: 0 }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
          </div>
        </div>
        {/* Best Sellers End*/}
      </div>
      {/* Sponsored Products Start*/}
      <div className="py-8 bg-gray-100">
        <div className="container">
          <div className="pt-8 pb-5">
            <div className=" pb-3">
              <h2 className="float-left font-regular text-2xl">Top Section</h2>
              <a className="float-right flex hover:text-cyan-500">
                View All{' '}
                <img
                  src="images/right-arrow-black.svg"
                  className="ml-2 w-5"
                  alt="Deal of the day"
                />
              </a>
              <div className="clear-both" />
            </div>
            <div className="relative flex slider-outer">
              <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
                <img src="images/demo-list-img-5.jpg" alt="image" />
                <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                  <div>
                    <img
                      src="images/demo-brand.jpg"
                      alt="brand"
                      className="rounded-full w-12 mr-3 mt-2"
                    />
                  </div>
                  <div className="font-semibold text-white">
                    Brand Name
                    <div className="clear-both" />
                    <div className="rating-small-outer average">
                      3.25
                      <img src="images/star.svg" alt="rating" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
                <img src="images/demo-list-img-5.jpg" alt="image" />
                <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                  <div>
                    <img
                      src="images/demo-brand.jpg"
                      alt="brand"
                      className="rounded-full w-12 mr-3 mt-2"
                    />
                  </div>
                  <div className="font-semibold text-white">
                    Brand Name
                    <div className="clear-both" />
                    <div className="rating-small-outer good">
                      5
                      <img src="images/star.svg" alt="rating" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
                <img src="images/demo-list-img-5.jpg" alt="image" />
                <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                  <div>
                    <img
                      src="images/demo-brand.jpg"
                      alt="brand"
                      className="rounded-full w-12 mr-3 mt-2"
                    />
                  </div>
                  <div className="font-semibold text-white">
                    Brand Name
                    <div className="clear-both" />
                    <div className="rating-small-outer good">
                      4.75
                      <img src="images/star.svg" alt="rating" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
                <img src="images/demo-list-img-5.jpg" alt="image" />
                <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                  <div>
                    <img
                      src="images/demo-brand.jpg"
                      alt="brand"
                      className="rounded-full w-12 mr-3 mt-2"
                    />
                  </div>
                  <div className="font-semibold text-white">
                    Brand Name
                    <div className="clear-both" />
                    <div className="rating-small-outer poor">
                      1.5
                      <img src="images/star.svg" alt="rating" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
                <img src="images/demo-list-img-5.jpg" alt="image" />
                <div className="absolute w-full bottom-0 p-4 z-30 flex bg-gradient-to-t from-black">
                  <div>
                    <img
                      src="images/demo-brand.jpg"
                      alt="brand"
                      className="rounded-full w-12 mr-3 mt-2"
                    />
                  </div>
                  <div className="font-semibold text-white">
                    Brand Name
                    <div className="clear-both" />
                    <div className="rating-small-outer poor">
                      1.5
                      <img src="images/star.svg" alt="rating" />
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="absolute z-30 mt-7 top-1/4 left-0 opacity-50"
                style={{ marginLeft: '-20px' }}
              >
                <img
                  src="images/slider-R-arrow.svg"
                  className="w-16"
                  alt="left"
                />
              </a>
              <a
                className="absolute z-30 mt-7 top-1/4 right-0"
                style={{ marginRight: '-20px' }}
              >
                <img
                  src="images/slider-R-arrow.svg"
                  className="w-16"
                  alt="left"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Sponsored Products End*/}
      <div className="container">
        {/* Brands Start*/}
        <div className="pt-8 pb-8">
          <div className=" pb-3">
            <h2 className="float-left font-regular text-2xl">Brands</h2>
            <a className="float-right flex hover:text-cyan-500">
              View All{' '}
              <img
                src="images/right-arrow-black.svg"
                className="ml-2 w-5"
                alt="Deal of the day"
              />
            </a>
            <div className="clear-both" />
          </div>
          <div className="relative slider-outer">
            <div className="flex  overflow-hidden">
              <a>
                <div className="w-40 mx-2">
                  <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                    <img src="images/demo-brand.jpg" alt="image" />
                  </div>
                  <div className="w-full text-center pt-2">Brand Name</div>
                </div>
              </a>
              <a>
                <div className="w-40 mx-2">
                  <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                    <img src="images/demo-brand.jpg" alt="image" />
                  </div>
                  <div className="w-full text-center pt-2">Brand Name</div>
                </div>
              </a>
              <a>
                <div className="w-40 mx-2">
                  <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                    <img src="images/demo-brand.jpg" alt="image" />
                  </div>
                  <div className="w-full text-center pt-2">Brand Name</div>
                </div>
              </a>
              <a>
                <div className="w-40 mx-2">
                  <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                    <img src="images/demo-brand.jpg" alt="image" />
                  </div>
                  <div className="w-full text-center pt-2">Brand Name</div>
                </div>
              </a>
              <a>
                <div className="w-40 mx-2">
                  <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                    <img src="images/demo-brand.jpg" alt="image" />
                  </div>
                  <div className="w-full text-center pt-2">Brand Name</div>
                </div>
              </a>
              <a>
                <div className="w-40 mx-2">
                  <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                    <img src="images/demo-brand.jpg" alt="image" />
                  </div>
                  <div className="w-full text-center pt-2">Brand Name</div>
                </div>
              </a>
              <a>
                <div className="w-40 mx-2">
                  <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                    <img src="images/demo-brand.jpg" alt="image" />
                  </div>
                  <div className="w-full text-center pt-2">Brand Name</div>
                </div>
              </a>
            </div>
            <a
              className="absolute z-30 mt-0 top-1/4 left-0 opacity-50"
              style={{ marginLeft: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
            <a
              className="absolute z-30 mt-0 top-1/4 right-0"
              style={{ marginRight: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
          </div>
        </div>
        {/* Brands End*/}
        {/* Location Specific Start*/}
        <div className="pt-8 pb-5">
          <div className=" pb-3">
            <h2 className="float-left font-regular text-2xl">
              Location Specific
            </h2>
            <a className="float-right flex hover:text-cyan-500">
              View All{' '}
              <img
                src="images/right-arrow-black.svg"
                className="ml-2 w-5"
                alt="Deal of the day"
              />
            </a>
            <div className="clear-both" />
          </div>
          <div className="relative flex slider-outer">
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-5.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 bg-gradient-to-t from-black">
                <div className="font-semibold text-white">
                  <img
                    src="images/location-icon.svg"
                    className="float-left mr-1 mb-2 w-4"
                    alt="location"
                  />
                  Kurti from Jaipur
                  <div className="clear-both" />
                  <div className="rating-small-outer average">
                    3.25
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-5.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 bg-gradient-to-t from-black">
                <div className="font-semibold text-white">
                  <img
                    src="images/location-icon.svg"
                    className="float-left mr-1 mb-2 w-4"
                    alt="location"
                  />
                  Kurti from Jaipur
                  <div className="clear-both" />
                  <div className="rating-small-outer poor">
                    1.25
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-5.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 bg-gradient-to-t from-black">
                <div className="font-semibold text-white">
                  <img
                    src="images/location-icon.svg"
                    className="float-left mr-1 mb-2 w-4"
                    alt="location"
                  />
                  Kurti from Jaipur
                  <div className="clear-both" />
                  <div className="rating-small-outer average">
                    3.25
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-5.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 bg-gradient-to-t from-black">
                <div className="font-semibold text-white">
                  <img
                    src="images/location-icon.svg"
                    className="float-left mr-1 mb-2 w-4"
                    alt="location"
                  />
                  Kurti from Jaipur
                  <div className="clear-both" />
                  <div className="rating-small-outer good">
                    4.75
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/5 mx-2 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="images/demo-list-img-5.jpg" alt="image" />
              <div className="absolute w-full bottom-0 p-4 z-30 bg-gradient-to-t from-black">
                <div className="font-semibold text-white">
                  <img
                    src="images/location-icon.svg"
                    className="float-left mr-1 mb-2 w-4"
                    alt="location"
                  />
                  Kurti from Jaipur
                  <div className="clear-both" />
                  <div className="rating-small-outer average">
                    3.25
                    <img src="images/star.svg" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="absolute z-30 mt-7 top-1/4 left-0 opacity-50"
              style={{ marginLeft: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
            <a
              className="absolute z-30 mt-7 top-1/4 right-0"
              style={{ marginRight: '-20px' }}
            >
              <img
                src="images/slider-R-arrow.svg"
                className="w-16"
                alt="left"
              />
            </a>
          </div>
        </div>
        {/* Location Specific End*/}
      </div>
    </section>
  );
}
