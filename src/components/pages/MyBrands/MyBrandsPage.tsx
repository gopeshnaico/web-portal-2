import { useState } from 'react';
import {
  BrandsQuery,
  BrandsQueryVariables,
  SortOrder,
  useBrandsQuery,
} from '../../../domain/api/graphql';
import graphQLClient from '../../../domain/GqQuery/useGQLQuery';
import { useAppSelector } from '../../../lib/redux/hooks';
import { selectLoggedCustomerId } from '../../../lib/redux/reducers/session';
import { MyBrandsList } from '../../ui/MyBrands/MyBrandsList';
import { Pagination } from '../../ui/MyBrands/Pagination';

export const MyBrandsPage = () => {
  const take = 10;
  const [pageSelected, setPageSelected] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Asc);
  const customerId = useAppSelector(selectLoggedCustomerId);

  const [variables, setVaribles] = useState<BrandsQueryVariables>({
    where: {
      customerId: {
        equals: customerId,
      },
    },
    take: 20,
    skip: 0,
    orderBy: [
      {
        name: sortOrder,
      },
    ],
    brandsCountWhere2: {
      customerId: {
        equals: customerId,
      },
    },
  });

  const { data: myBrandsList } = useBrandsQuery<BrandsQuery>(
    graphQLClient(),
    variables
  );
  const pagination = async (value: number) => {
    setPageSelected(value + 1);
    const skipvalue = value * take;
    setVaribles((prev: BrandsQueryVariables) => {
      return { ...prev, skip: skipvalue };
    });
  };

  const sortList = (sortKey: string) => {
    setVaribles((prev: BrandsQueryVariables) => {
      return {
        ...prev,
        orderBy: [
          {
            name: sortOrder === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc,
          },
        ],
      };
    });
  };

  return (
    <div className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0">
      <MyBrandsList {...{ myBrandsList, sortList, setSortOrder, sortOrder }} />
      <Pagination
        totalCount={myBrandsList?.brandsCount ?? 0}
        tableTake={take}
        pageSelected={pageSelected}
        pagination={pagination}
      />
    </div>
  );
};
