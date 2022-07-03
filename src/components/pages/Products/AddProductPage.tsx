import {
  useAppDispatch,
  useAppSelector,
} from '../../../../src/lib/redux/hooks';
import router from 'next/router';
import { useState } from 'react';
import { useCategoriesQuery } from '../../../../src/domain/api/graphql';
import graphQLClient from '../../../../src/GqQuery/useGQLQuery';
import { AddProduct } from '../../ui/Product/AddProduct';
import { ProductDetailsPage } from './ProductDetailsPage';
import {
  selectCategoryDetailsInCreateProduct,
  updateCategoryDetailsInCreateProduct,
} from '../../../../src/lib/redux/reducers/session';

export const AddProductPage = () => {
  const dispatch = useAppDispatch();
  const { data: categoryList } = useCategoriesQuery(graphQLClient(), {});
  const [categoryHeaderDetails, setCategoryHeaderDetails] = useState<{
    categoryHeaderName: string;
    categoryId: string;
  }>({ categoryHeaderName: '', categoryId: '' });

 
  const handleNavigation = (data: any) => {
    
    dispatch(updateCategoryDetailsInCreateProduct(data));
    router.push(`/create-new-set`);
  };

  return (
    <>
      <AddProduct
        {...{
          categoryList,
          handleNavigation,
          categoryHeaderDetails,
          setCategoryHeaderDetails,
        }}
      />
    </>
  );
};
