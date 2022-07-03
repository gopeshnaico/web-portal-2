import { render } from '@testing-library/react';
import { MyBrandsList } from './MyBrandsList';

const BrandListForm = (props?: any) => {
  const defaultProps = {
    register: jest.fn(),
    handlelogin: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  };
  return render(<MyBrandsList {...defaultProps} {...props} />);
};

describe('testing all the elements in the BrandList form', () => {
  it('should display a blank BrandList form', () => {
    const { getByTestId } = BrandListForm();
    expect(getByTestId('outerdiv'));
  });
});
