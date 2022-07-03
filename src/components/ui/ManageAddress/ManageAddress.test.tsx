import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ManageAddress } from './ManageAddress';

const renderLoginForm = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<ManageAddress {...defaultProps} {...props} />);
};

describe('testing all the elements in the ManageAddress form', () => {
  it('should display a blank Address form', () => {
    const { getByTestId } = renderLoginForm();
    expect(getByTestId('outerDiv'));
  });
});
