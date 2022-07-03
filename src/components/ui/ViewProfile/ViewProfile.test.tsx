import { render } from '@testing-library/react';
import { ViewProfile } from './ViewProfile';

const renderLoginForm = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<ViewProfile {...defaultProps} {...props} />);
};

describe('testing all the elements in the form', () => {
  it('should display a blank form', () => {
    const { getByTestId } = renderLoginForm();
    expect(getByTestId('renderPage'));
  });
});
