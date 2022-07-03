import ImageView from '../../ui-components/imageView';

export const BrandsView = () => {
  return (
    <div className="pt-8 pb-8">
      <div className=" pb-3">
        <h2 className="float-left font-regular text-2xl">Brands</h2>
        <a className="float-right flex hover:text-cyan-500">
          <span className="mr-2">View All</span>{' '}
          <ImageView
            height={20}
            width={20}
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
                <ImageView
                  height={200}
                  width={200}
                  src="images/demo-brand.jpg"
                  alt="image"
                />
              </div>
              <div className="w-full text-center pt-2">Brand Name</div>
            </div>
          </a>
          <a>
            <div className="w-40 mx-2">
              <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                <ImageView
                  height={200}
                  width={200}
                  src="images/demo-brand.jpg"
                  alt="image"
                />
              </div>
              <div className="w-full text-center pt-2">Brand Name</div>
            </div>
          </a>
          <a>
            <div className="w-40 mx-2">
              <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                <ImageView
                  height={200}
                  width={200}
                  src="images/demo-brand.jpg"
                  alt="image"
                />
              </div>
              <div className="w-full text-center pt-2">Brand Name</div>
            </div>
          </a>
          <a>
            <div className="w-40 mx-2">
              <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                <ImageView
                  height={200}
                  width={200}
                  src="images/demo-brand.jpg"
                  alt="image"
                />
              </div>
              <div className="w-full text-center pt-2">Brand Name</div>
            </div>
          </a>
          <a>
            <div className="w-40 mx-2">
              <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                <ImageView
                  height={200}
                  width={200}
                  src="images/demo-brand.jpg"
                  alt="image"
                />
              </div>
              <div className="w-full text-center pt-2">Brand Name</div>
            </div>
          </a>
          <a>
            <div className="w-40 mx-2">
              <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                <ImageView
                  height={200}
                  width={200}
                  src="images/demo-brand.jpg"
                  alt="image"
                />
              </div>
              <div className="w-full text-center pt-2">Brand Name</div>
            </div>
          </a>
          <a>
            <div className="w-40 mx-2">
              <div className="w-40 bg-gray-200 rounded-full overflow-hidden h-40 border-2 border-slate-100">
                <ImageView
                  height={200}
                  width={200}
                  src="images/demo-brand.jpg"
                  alt="image"
                />
              </div>
              <div className="w-full text-center pt-2">Brand Name</div>
            </div>
          </a>
        </div>
        <a
          className="absolute z-30 mt-0 top-1/4 left-0 opacity-50"
          style={{ marginLeft: '-20px' }}
        >
          <div className="w-16">
            <ImageView
              height={0}
              width={0}
              src="images/slider-R-arrow.svg"
              alt="image"
            />
          </div>
        </a>
        <a
          className="absolute z-30 mt-0 top-1/4 right-0"
          style={{ marginRight: '-20px' }}
        >
          <div className="w-16">
            <ImageView
              height={100}
              width={100}
              src="images/slider-R-arrow.svg"
              alt="left"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
