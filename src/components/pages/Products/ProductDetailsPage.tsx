import {
  ProductDetailsAttributeListQuery,
  useProductDetailsAttributeListQuery,
} from '../../../../src/domain/api/graphql';
import graphQLClient from '../../../..//src/GqQuery/useGQLQuery';
import { ProductDetails } from '../../ui/Product/CreateNewSet/ProductDetails';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../src/lib/redux/hooks';
import {
  selectCategoryDetailsInCreateProduct,
  updateCategoryDetailsInCreateProduct,
} from '../../../../src/lib/redux/reducers/session';
import { useEffect } from 'react';

export const ProductDetailsPage = () => {
  const dispatch = useAppDispatch();
  const categoryDetails = useAppSelector(selectCategoryDetailsInCreateProduct);

  const { data: productDetailsAttributeListData } =
    useProductDetailsAttributeListQuery<ProductDetailsAttributeListQuery>(
      graphQLClient(),
      {
        where: {
          id: categoryDetails?.categoryId,
          name: categoryDetails?.categoryHeaderName,
        },
      }
    );

  return (
    <>
      <ProductDetails {...{ productDetailsAttributeListData }} />
    </>
  );
};
