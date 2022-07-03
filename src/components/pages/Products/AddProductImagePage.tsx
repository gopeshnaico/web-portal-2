import { useEffect, useState } from 'react';
import { AddProductImages } from '../../ui/Product/CreateNewSet/AddProductImages';

export const AddProductImagePage = ({ productDetails, setProductDetails }) => {
  const [productImages, setProductImages] = useState<string[]>([]);

  useEffect(() => {
    setProductDetails({ ...productDetails, productImages: productImages });
  }, [productImages]);

  return <AddProductImages {...{ productImages, setProductImages }} />;
};
