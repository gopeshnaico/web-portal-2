import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { SelectBuyerOrSellerView } from './SelectBuyerOrSellerView';

const mockStore = configureStore();
const initialState = {};
let store;

const renderBuyerSellerForm = (props?: any) => {
  store = mockStore(initialState);
  const defaultProps = {
    setSelectedOption: jest.fn(),
    selectedOption: String,
  };
  return render(
    <Provider store={store}>
      <SelectBuyerOrSellerView {...defaultProps} {...props} />
    </Provider>
  );
};

describe('testing all the elements in the page', () => {
  it('label text checking', () => {
    const { getByTestId } = renderBuyerSellerForm();
    expect(getByTestId('buyerSelect')).toHaveTextContent('Buyer');
  });
});

describe('testing all the elements in the page', () => {
  it('label text checking', () => {
    const { getByTestId } = renderBuyerSellerForm();
    expect(getByTestId('sellerSelect')).toHaveTextContent('Seller');
  });
});
