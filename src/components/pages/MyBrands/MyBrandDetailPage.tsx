import { useState } from 'react';
import { useQueryClient } from 'react-query';
import router from 'next/router';
import {
  BrandDetailsQuery,
  ProductListWithBrandIdQuery,
  ProductListWithBrandIdQueryVariables,
  SortOrder,
  UpdateProductMutation,
  useBrandDetailsQuery,
  useProductListWithBrandIdQuery,
  useUpdateProductMutation,
} from '../../../domain/api/graphql';
import graphQLClient from '../../../domain/GqQuery/useGQLQuery';
import { GeoRestriction } from '../../ui/MyBrands/GeoRestriction';
import { BrandDetails } from '../../ui/MyBrands/MyBrandDetails';
import { Pagination } from '../../ui/MyBrands/Pagination';
import { GeoRestrictionPage } from './GeoRestrictionPage';

export const MyBrandDetailPage = () => {
  const take = 8;
  const [pageSelected, setPageSelected] = useState(1);
  const [sortOrder] = useState<SortOrder>(SortOrder.Asc);
  const [addGeoFlag, setAddGeoFlag] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const editToggleMutation = useUpdateProductMutation<UpdateProductMutation>(
    graphQLClient()
  );
  const [variables, setVaribles] =
    useState<ProductListWithBrandIdQueryVariables>({
      where: {
        brandId: {
          equals: router.query.id as string,
        },
      },
      take: 8,
      skip: 0,
      orderBy: [
        {
          name: sortOrder,
        },
      ],
    });

  const { data: BrandDetailsData } = useBrandDetailsQuery<BrandDetailsQuery>(
    graphQLClient(),
    {
      where: {
        id: router.query.id as string,
      },
    }
  );
  const { data: ProductListWithBrandId } =
    useProductListWithBrandIdQuery<ProductListWithBrandIdQuery>(
      graphQLClient(),
      variables
    );

  const pagination = async (value: number) => {
    setPageSelected(value + 1);
    const skipvalue = value * take;
    setVaribles((prev: ProductListWithBrandIdQueryVariables) => {
      return { ...prev, skip: skipvalue };
    });
  };

  const updateToggle = async (isActive: boolean, productId: string) => {
    const variable = {
      where: {
        id: productId,
      },
      data: {
        isActive: {
          set: isActive,
        },
      },
    };

    await editToggleMutation.mutateAsync(variable).then(() => {
      queryClient.invalidateQueries();
    });
  };

  return (
    <>
      {addGeoFlag ? (
        <GeoRestrictionPage {...{ setAddGeoFlag }} />
      ) : (
        <div className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0">
          <BrandDetails
            {...{
              setAddGeoFlag,
              BrandDetailsData,
              ProductListWithBrandId,
              updateToggle,
            }}
          />
          {ProductListWithBrandId?.products.length > 0 && (
            <Pagination
              totalCount={ProductListWithBrandId?.productsCount ?? 0}
              tableTake={take}
              pageSelected={pageSelected}
              pagination={pagination}
            />
          )}
        </div>
      )}
    </>
  );
};
