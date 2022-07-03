import React from 'react';
import Image from 'next/image';
import TestImag from '../../../public/images/logo-footer.svg';

interface LogoSecondProps {
  className: string;
  alt: string;
  src: string;
}

const LogoSecond = ({ src, className, alt }: LogoSecondProps) => {
  return (
    <Image
      src={TestImag}
      width={80}
      height={108}
      unoptimized
      className={className}
      alt={alt}
    />
  );
};

export default LogoSecond;
