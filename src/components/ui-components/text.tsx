import React from 'react';

interface TextProps {
  label: string;
}

const Text = ({ label }: TextProps) => {
  return (
    <div>
      <p className="mb-5">{label}</p>
    </div>
  );
};

export default Text;
