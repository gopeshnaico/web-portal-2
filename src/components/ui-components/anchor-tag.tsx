import React from 'react';

interface AnchorTagProps {
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => any;
}

const AnchorTag = ({
  size = 'medium',
  label,
  onClick,
  ...props
}: AnchorTagProps) => {
  return (
    <a
      className="lg:float-right w-full md:w-auto md:float-right float-left width mt-2 text-blue-500 hover:text-black float-sm-left"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default AnchorTag;
