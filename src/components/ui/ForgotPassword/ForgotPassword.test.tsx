import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ForgotPassword } from './ForgotPassword';

const renderForgotPassword = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<ForgotPassword {...defaultProps} {...props} />);
};

describe('testing all the elements in the Forgot Password', () => {
  it('should display a blank Reset Password', () => {
    const { getByTestId } = renderForgotPassword();
    expect(getByTestId('email-error')).toHaveTextContent('');
  });
});
