import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddAddressForm } from './AddAddress';

const renderLoginForm = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<AddAddressForm {...defaultProps} {...props} />);
};

describe('testing all the elements in the Address form', () => {
  it('should display a blank Address form', () => {
    const { getByTestId } = renderLoginForm();
    expect(getByTestId('outerDiv'));
  });
});
