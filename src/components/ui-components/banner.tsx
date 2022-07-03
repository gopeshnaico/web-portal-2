import { FC } from 'react';

interface BannerProps {
  label: string;
}

const Banner: FC<BannerProps> = ({ label }) => {
  return (
    <section className="h-full md:h-screen login_bg p-5 md:p-10  bg-cover bg-center ..."></section>
  );
};

export default Banner;
