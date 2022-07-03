interface CheckBoxProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onChange?: () => any;
  isChecked?: boolean;
  className?: string;
  defaultChecked?: boolean;
}

const CheckBoxWithoutLabel = ({
  size = 'medium',
  backgroundColor,
  onChange,
  isChecked,
  className,
  defaultChecked,
  ...props
}: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="default:ring-2 mr-2 mt-3"
      {...props}
      onChange={onChange}
      checked={isChecked}
      defaultChecked={defaultChecked}
    />
  );
};

export default CheckBoxWithoutLabel;
