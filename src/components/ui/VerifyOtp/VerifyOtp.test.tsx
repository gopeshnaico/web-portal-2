import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { VerifyOtp } from './VerifyOtp';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const initialState = {};
let store;

const renderOtpForm = (props?: any) => {
  store = mockStore(initialState);
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(
    <Provider store={store}>
      <VerifyOtp {...defaultProps} {...props} />
    </Provider>
  );
};

describe('testing all the elements in the OTP form', () => {
  it('should display label', () => {
    const { getByTestId } = renderOtpForm();
    expect(getByTestId('label')).toBeInTheDocument();
  });
});

describe('testing all the elements in the OTP form', () => {
  it('should display OTP field', () => {
    const { getByTestId } = renderOtpForm();
    expect(getByTestId('otpField')).toHaveTextContent('');
  });
});

describe('testing all the elements in the OTP form', () => {
  it('should display button element', () => {
    const { getByTestId } = renderOtpForm();
    expect(getByTestId('button')).toBeInTheDocument();
  });
});
