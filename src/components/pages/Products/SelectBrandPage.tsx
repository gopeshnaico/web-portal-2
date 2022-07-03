import { useState } from 'react';
import {
  BrandsSelectQuery,
  BrandsSelectQueryVariables,
  useBrandsSelectQuery,
} from '../../../../src/domain/api/graphql';
import graphQLClient from '../../../../src/GqQuery/useGQLQuery';
import { useAppSelector } from '../../../../src/lib/redux/hooks';
import { selectLoggedCustomerId } from '../../../../src/lib/redux/reducers/session';

import { SelectBrand } from '../../ui/Product/CreateNewSet/SelectBrand';

export const SelectBrandPage = ({ productDetails, setProductDetails }) => {
  const customerId = useAppSelector(selectLoggedCustomerId);

  const [variables] = useState<BrandsSelectQueryVariables>({
    where: {
      customerId: {
        equals: customerId,
      },
    },
  });

  const { data: selectBrandList } = useBrandsSelectQuery<BrandsSelectQuery>(
    graphQLClient(),
    variables
  );

  return (
    <SelectBrand {...{ selectBrandList, setProductDetails, productDetails }} />
  );
};
