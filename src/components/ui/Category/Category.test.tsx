import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CategoryForm } from './category';

const renderCategoryForm = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<CategoryForm {...defaultProps} {...props} />);
};

describe('testing all the elements in the Category form', () => {
  it('should display outer division', () => {
    const { getByTestId } = renderCategoryForm();
    expect(getByTestId('cardDiv')).toBeInTheDocument();
  });
});
