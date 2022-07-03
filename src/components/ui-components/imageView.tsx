import React from 'react';
import Image from 'next/image';

interface LogoProps {
  src: string;
  className?: string;
  alt: string;
  height: number;
  width: number;
}

const ImageView = ({ className, src, alt, height, width }: LogoProps) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      unoptimized
      className={className}
      alt={alt}
    />
  );
};

export default ImageView;
