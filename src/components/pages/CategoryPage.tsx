import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  CategoriesQuery,
  CategoryUpdateMutation,
  useCategoriesQuery,
  useCategoryUpdateMutation,
  UserPreferenceInput,
  useUserPreferencesQuery,
} from '../../domain/api/graphql';
import graphQLClient from '../../GqQuery/useGQLQuery';
import { ErrorHandlingWithResponse } from '../../lib/errorHandling';
import { CategoryForm } from '../ui/Category/category';
import { category } from '../../lib/common';

export const CategoryPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<object>({});
  const [categoryData, setCategoryData] = useState<category>([]);
  const { data: categoryList } = useCategoriesQuery<CategoriesQuery>(
    graphQLClient(),
    {}
  );

  const { data: userPreferences } = useUserPreferencesQuery(
    graphQLClient(),
    {}
  );

  const userPreference = userPreferences?.userPreferences;

  useEffect(() => {
    const categoryUpdated = categoryList?.categories?.map((category) => {
      const checkedStatus = userPreference?.find(
        (preference) => preference.categoryHeaderId === category.id
      )
        ? true
        : false;
      return {
        ...category,
        isChecked: checkedStatus,
      };
    });
    setCategoryData(categoryUpdated);
  }, [categoryList, userPreference]);

  const mutation = useCategoryUpdateMutation<CategoryUpdateMutation>(
    graphQLClient()
  );

  const updateCategories = async () => {
    const addedCategories = categoryData.filter(
      (category) => category.isChecked === true
    );

    const deletedCategories = categoryData.filter(
      (category) => category.isChecked === false
    );

    const addCategoryIds = addedCategories.map((i) => {
      return {
        categoryHeaderId: i.id,
      };
    }) as unknown as UserPreferenceInput[];

    const deleteCategoryIds = deletedCategories.map((i) => {
      return {
        channelId: {
          equals: userPreference?.find((j) => j.categoryHeaderId === i.id)
            ?.channelId,
        },
        categoryHeaderId: {
          equals: i.id,
        },
      };
    });

    if (addedCategories.length !== 0) {
      const variable = {
        data: {
          UserPreference: {
            createMany: {
              data: addCategoryIds,
            },
          },
        },
      };

      await mutation
        .mutateAsync(variable)
        .then((response) => {
          if (response.updateUser) {
            router.push('/dashboard');
          }
        })
        .catch((error) => {
          setOpen(true);
          setMessage(error.response);
        });
    }

    if (deletedCategories.length !== 0) {
      const variable = {
        data: {
          UserPreference: {
            deleteMany: deleteCategoryIds,
          },
        },
      };

      await mutation
        .mutateAsync(variable)
        .then((response) => {
          if (response.updateUser) {
            router.push('/dashboard');
          }
        })
        .catch((error) => {
          setOpen(true);
          setMessage(error.response);
        });
    }
  };

  return (
    <>
      {open && (
        <ErrorHandlingWithResponse error={message} setErrorOpen={setOpen} />
      )}
      <CategoryForm
        {...{
          updateCategories,
          categoryData,
          setCategoryData,
        }}
      />
    </>
  );
};
