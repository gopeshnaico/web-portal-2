import { GraphQLClient } from 'graphql-request';
import { useAppSelector } from '../lib/redux/hooks';

const endpoint = process.env.NEXT_PUBLIC_API_URL || '';

const graphQLClient = (headers?: HeadersInit) => {
  const authState = useAppSelector((state) => state.authSession);
  const requestHeaders = {
    authorization: `Bearer ${authState.authToken}`,
  };
  return new GraphQLClient(endpoint, {
    credentials: 'include',
    headers: requestHeaders,
  });
};

export default graphQLClient;
