import React from 'react';

interface CheckBoxProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onChange?: () => any;
  isChecked?: boolean;
}

const CheckBox = ({
  size = 'medium',
  backgroundColor,
  label,
  onChange,
  isChecked,
  ...props
}: CheckBoxProps) => {
  return (
    <label className="text-slate-500">
      <input
        type="checkbox"
        className="default:ring-2 mr-2 mt-3"
        {...props}
        onChange={onChange}
        checked={isChecked}
      />
      {label}
    </label>
  );
};

export default CheckBox;
