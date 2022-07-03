import React from 'react';

interface HeaderProps {
  label: string;
}

const HeaderText = ({ label }: HeaderProps) => {
  return <h1 className="mt-5 mb-2 text-2xl">{label}</h1>;
};

export default HeaderText;
