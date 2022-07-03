export const CreateNewSetList = ({ selectedOption, setSelectedOption }) => {
  const list = [
    {
      id: 1,
      label: 'Select Brand',
      description: 'Select a brand to create listing',
    },
    {
      id: 2,
      label: 'Add Product Images',
      description: 'Add all images for this listing',
    },
    {
      id: 3,
      label: 'Create Sets',
      description: 'Create sets for buying options',
    },

    {
      id: 4,
      label: 'Product Details',
      description: 'Select specifications for this listing',
    },
    {
      id: 5,
      label: 'Additional Details',
      description: 'Edit Title, MOQ, GST, etc',
    },
    {
      id: 6,
      label: 'Geo Restriction',
      description: 'Limit the sale in some states',
    },
    {
      id: 7,
      label: 'logistics',
      description: 'Select logistic and Set Shipping Charges',
    },
  ];
  return (
    <div className="w-full px-3 md:w-5/12 lg:w-5/12 xl:w-4/12">
      <ul className="border-2 border-gray-200 border-b-0 rounded-lg hidden md:block">
        {list.map((brand) => (
          <li className="border-b-2 border-gray-200 items-center">
            <a
              onClick={() => setSelectedOption(brand.id)}
              className={`flex items-center cursor-pointer ${
                brand.id === selectedOption
                  ? ' bg-blue-400 text-white '
                  : 'bg-slate-100 text-slate-500'
              } `}
            >
              <div className="p-3 py-4 pr-0">
                <div className="bg-slate-200 text-slate-500 w-10 h-10 leading-10 text-center rounded-full font-medium text-lg mr-3">
                  {brand.id}
                </div>
              </div>
              <div className="p-3 py-4 pl-1">
                <div className="font-medium text-base">{brand.label}</div>
                <div className="text-xs">{brand.description}</div>
              </div>
              {brand.id === selectedOption && (
                <div className="right-arow-product right-0 border-l-blue-400" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
