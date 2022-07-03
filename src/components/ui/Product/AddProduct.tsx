import { FC, useState } from 'react';
import { set } from 'react-hook-form';
import { CategoriesQuery } from '../../../../src/domain/api/graphql';

type categoryList = Array<{
  __typename?: 'CategoryLinkedCategoryHeader';
  Category?: {
    __typename?: 'Category';
    id: string;
    name?: string | null;
  } | null;
}>;

type catgoryDetails = {
  categoryHeaderName: string;
  categoryId: string;
};

interface AddProductFormsProps {
  categoryList: CategoriesQuery;
  handleNavigation: (data: catgoryDetails) => void;
  setCategoryHeaderDetails: (details: catgoryDetails) => void;
  categoryHeaderDetails: catgoryDetails;
}

export const AddProduct: FC<AddProductFormsProps> = ({
  categoryList,
  handleNavigation,
  setCategoryHeaderDetails,
  categoryHeaderDetails,
}) => {
  const [bgcolorActive, setBgColorActive] = useState<string>();
  const [filteredId, setFilteredId] = useState<categoryList>([]);

  const imagePath = (categoryData) => categoryData?.Asset?.AssetStore?.storage;

  return (
    <>
      <div className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0">
        <div className="w-full">
          <div className="w-full">
            <h1 className="font-semibold text-xl pb-3">
              Select a Product Type
            </h1>
          </div>
          <div className="clear-both" />
          <div className="block w-12/12 text-center sm:flex cursor-pointer">
            {categoryList?.categories?.map((item) => (
              <a
                key={item?.id}
                className={
                  item?.id === bgcolorActive
                    ? 'py-4 px-1 font-medium product-category-type-outer active '
                    : 'py-4 px-1 font-medium product-category-type-outer'
                }
                onClick={() => {
                  setBgColorActive(item.id);
                  setCategoryHeaderDetails({
                    ...categoryHeaderDetails,
                    categoryHeaderName: item?.name,
                  });

                  const filteredData = categoryList?.categories?.find(
                    (i) => i.id === item.id
                  );
                  setFilteredId(
                    filteredData.CategoryLinkedCategoryHeader as unknown as categoryList
                  );
                }}
              >
                <img src={imagePath(item)} alt="men" />
                <div className="pt-2">{item?.name}</div>
              </a>
            ))}
          </div>

          <div className="row-outer block flex-wrap md:flex pt-5">
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              {filteredId?.map((subCategory, index) => (
                <a
                  key={index}
                  onClick={async () => {
                    await setCategoryHeaderDetails({
                      ...categoryHeaderDetails,
                      categoryId: subCategory?.Category?.id,
                    });
                    handleNavigation({
                      ...categoryHeaderDetails,
                      categoryId: subCategory?.Category?.id,
                    });
                  }}
                >
                  <>
                    <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                      <div className="w-16 mr-3">
                        <img src="/images/demo-thumb-1.jpg" alt="" />
                      </div>
                      <div className="font-medium">
                        {subCategory?.Category?.name}
                      </div>
                      <img
                        src="/images/right-arrow.svg"
                        className="w-3 ml-auto mr-2"
                        alt=""
                      />
                    </div>
                  </>
                </a>
              ))}
            </div>

            {/* <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">T Shirt</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Jeans</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Track Pants</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Socks</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Shorts</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Shirt</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">T Shirt</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Jeans</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Track Pants</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Socks</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-5 md:w-6/12 lg:w-4/12">
              <a>
                <div className="p-3 listing-outer rounded-lg flex items-center justify-center hover:bg-slate-100">
                  <div className="w-16 mr-3">
                    <img src="/images/demo-thumb-1.jpg" alt="" />
                  </div>
                  <div className="font-medium">Shorts</div>
                  <img
                    src="/images/right-arrow.svg"
                    className="w-3 ml-auto mr-2"
                    alt=""
                  />
                </div>
              </a>
            </div> */}
          </div>
          <div className="clear-both" />
        </div>
        <div className="clear-both" />
        <div className="clear-both" />
      </div>
    </>
  );
};
