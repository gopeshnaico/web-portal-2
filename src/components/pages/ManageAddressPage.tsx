import { useState } from 'react';
import { useQueryClient } from 'react-query';
import {
  DeleteAddressMutation,
  useDeleteAddressMutation,
  useGetAddressQuery,
} from '../../domain/api/graphql';
import graphQLClient from '../../domain/GqQuery/useGQLQuery';
import { AddressType } from '../../lib/common';
import { useAppSelector } from '../../lib/redux/hooks';
import { selectLoggedCustomerId } from '../../lib/redux/reducers/session';
import { ManageAddress } from '../ui/ManageAddress/ManageAddress';
import { AddAddressPage } from './AddAddressPage';
import { DeleteBox } from '../Popups/DeleteBox';

export const ManageAddressPage = () => {
  const [addFlag, setAddFlag] = useState<boolean>(false);
  const [deleteFlag, setDeleteFlag] = useState<boolean>(false);
  const [editData, setEditData] = useState<AddressType>();
  const customerId = useAppSelector(selectLoggedCustomerId);

  const [message, setMessage] = useState<object>();
  const [open, setOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>();
  const [editDataId, setEditDataId] = useState<string>('');

  const { data: AddressList } = useGetAddressQuery(graphQLClient(), {
    where: {
      customerId: {
        equals: customerId,
      },
    },
  });

  const mutation = useDeleteAddressMutation<DeleteAddressMutation>(
    graphQLClient()
  );

  const queryClient = useQueryClient();

  const deleteAddress = async () => {
    const variable = {
      where: {
        id: deleteId,
      },
    };

    await mutation
      .mutateAsync(variable)
      .then((res) => {
        if (res?.deleteAddress) {
          setAddFlag(false);
        } else {
          setMessage(res?.deleteAddress);
        }
        queryClient.invalidateQueries();
      })
      .catch((err) => {
        setOpen(true);
        setMessage(err.response);
      });
    setDeleteFlag(false);
  };

  return (
    <>
      {addFlag ? (
        <AddAddressPage
          {...{ setAddFlag, editData, editDataId, setEditData, setEditDataId }}
        />
      ) : (
        <>
          {deleteFlag && <DeleteBox {...{ deleteAddress, setDeleteFlag }} />}
          <ManageAddress
            {...{
              setAddFlag,
              setDeleteFlag,
              AddressList,
              setEditData,
              setDeleteId,
              editDataId,
              setEditDataId,
            }}
          />
        </>
      )}
    </>
  );
};
