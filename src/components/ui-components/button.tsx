import React from 'react';

interface ButtonProps {
  label: string;
  type: string;
  className: string;
  onClick?: any;
  name?: string;
  isDisabled?: boolean;
  src?: string;
}

const ButtonComponent = ({
  label,
  type,
  className,
  onClick,
  name,
  isDisabled,
  src,
  ...props
}: ButtonProps) => {
  return (
    <button
      name="button"
      type={type as 'button' | 'submit' | 'reset'}
      className={className}
      {...props}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
