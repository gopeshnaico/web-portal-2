import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Signup } from './Signup';

const renderSignupForm = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<Signup {...defaultProps} {...props} />);
};

describe('testing all the elements in the Mobile Number Signup form', () => {
  it('should display Submit button', () => {
    const { getByTestId } = renderSignupForm();
    expect(getByTestId('submitButton')).toBeInTheDocument();
  });
});
