import { useState } from 'react';
import { CreateNewSet } from '../../ui/Product/CreateNewSet/CreateNewSet';

export const CreateNewSetPage = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [productDetails, setProductDetails] = useState<object>({});

  return (
    <CreateNewSet
      {...{
        selectedOption,
        setSelectedOption,
        productDetails,
        setProductDetails,
      }}
    />
  );
};
