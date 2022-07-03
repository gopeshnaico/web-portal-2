import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ResetPassword } from './ResetPassword';

const renderResetPassword = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<ResetPassword {...defaultProps} {...props} />);
};

describe('testing all the elements in the ResetPassword', () => {
  it('should display a blank ResetPassword', () => {
    const { getByTestId } = renderResetPassword();
    expect(getByTestId('new-password')).toHaveTextContent('');
  });
});

describe('testing all the elements in the ResetPassword', () => {
  it('should display a blank ResetPassword', () => {
    const { getByTestId } = renderResetPassword();
    expect(getByTestId('confirm-password'));
  });
});
