import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginForm } from './LoginForm';

const renderLoginForm = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<LoginForm {...defaultProps} {...props} />);
};

describe('testing all the elements in the login form', () => {
  it('should display a blank login form', () => {
    const { getByTestId } = renderLoginForm();
    expect(getByTestId('emailErrorMessage')).toHaveTextContent('');
  });
});

describe('testing all the elements in the login form', () => {
  it('should display a blank login form', () => {
    const { getByTestId } = renderLoginForm();
    expect(getByTestId('passwordErrorMessage')).toHaveTextContent('');
  });
});
