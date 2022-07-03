import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useAppSelector } from '../../../lib/redux/hooks';
import { selectLoggedCustomerId } from '../../../lib/redux/reducers/session';
import {
  BrandsQueryVariables,
  ProductListQueryVariables,
  SortOrder,
  UpdateProductMutation,
  useProductListQuery,
  useUpdateProductMutation,
} from '../../../../src/domain/api/graphql';
import graphQLClient from '../../../../src/GqQuery/useGQLQuery';
import { ProductList } from '../../ui/Product/ProductList';
import { Pagination } from '../../ui/MyBrands/Pagination';
import { MessageBox } from '../../Popups/MessageBox';
import { ErrorHandlingWithResponse } from '../../../../src/lib/errorHandling';

export const ProductListPage = () => {
  const take = 10;
  const [pageSelected, setPageSelected] = useState(1);
  const [active, setActive] = useState<boolean>(true);
  const customerId = useAppSelector(selectLoggedCustomerId);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const [messageBox, setMessageBox] = useState<boolean>(false);
  const [type, setType] = useState<string>('success');

  const editToggleMutation = useUpdateProductMutation<UpdateProductMutation>(
    graphQLClient()
  );
  const queryClient = useQueryClient();

  const [variables, setVaribles] = useState<ProductListQueryVariables>({
    where: {
      Brand: {
        is: {
          customerId: {
            equals: customerId,
          },
        },
      },
      isActive: {
        equals: active,
      },
    },

    take: take,
    skip: 0,
    orderBy: [
      {
        name: SortOrder.Asc,
      },
    ],
  });

  const { data: productListData } = useProductListQuery(
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

  const toggleTabs = (isActive: boolean) => {
    setActive(isActive);
    setVaribles((prev: BrandsQueryVariables) => {
      return {
        ...prev,
        where: {
          Brand: {
            is: {
              customerId: {
                equals: customerId,
              },
            },
          },
          isActive: {
            equals: isActive,
          },
        },
      };
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

    await editToggleMutation.mutateAsync(variable).then((res) => {
      if (res?.updateProduct?.isActive) {
        setMessageBox(true);
        setType('success');
        setMessage('Product Activated');
      } else {
        setMessageBox(true);
        setType('success');
        setMessage('Product InActivated');
      }

      queryClient.invalidateQueries();
    });
  };

  return (
    <div className="w-full px-0 pt-8 pb-16 lg:w-4/5 lg:pl-6 pr-0">
      {open && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}
      {messageBox && (
        <MessageBox
          open={messageBox}
          setOpen={setMessageBox}
          message={message}
          type={type}
        />
      )}

      <ProductList
        {...{
          productListData,
          setActive,
          active,
          toggleTabs,
          updateToggle,
        }}
      />

      <Pagination
        totalCount={productListData?.productsCount ?? 0}
        tableTake={take}
        pageSelected={pageSelected}
        pagination={pagination}
      />
    </div>
  );
};
