import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  name?: string;
  register?: UseFormRegister<FieldValues>;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (data?: any) => void;
  onKeyDown?: (data?: any) => void;
  id?: string;
}

const InputText = ({
  placeholder,
  type,
  className,
  register,
  name,
  disabled,
  maxLength,
  onChange,
  onKeyDown,
  id,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      {...register(name)}
      placeholder={placeholder}
      name={name}
      {...props}
      disabled={disabled ?? false}
      maxLength={maxLength}
      onChange={onChange}
      onKeyDown={onKeyDown}
      id={id}
    />
  );
};

export default InputText;
