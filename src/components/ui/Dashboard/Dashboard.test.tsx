import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { DashboardPage } from './Dashboard';

describe('Dashboard', () => {
  const mockStore = configureStore();
  const initialState = {};
  let store;
  it('should render successfully', () => {
    store = mockStore(initialState);
    const { baseElement } = render(
      <Provider store={store}>
        <DashboardPage />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
