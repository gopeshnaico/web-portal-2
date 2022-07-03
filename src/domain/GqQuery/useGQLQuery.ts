import { GraphQLClient } from 'graphql-request';
import { useAppSelector } from '../../lib/redux/hooks';
import { selectAuthToken } from '../../lib/redux/reducers/session';

const endpoint = process.env.NEXT_PUBLIC_API_URL || '';

const graphQLClient = (headers?: HeadersInit) => {
  const token = useAppSelector(selectAuthToken);

  const requestHeaders = {
    authorization: `Bearer ${token}`,
  };

  return new GraphQLClient(endpoint, {
    credentials: 'include',
    headers: requestHeaders,
  });
};

export default graphQLClient;
