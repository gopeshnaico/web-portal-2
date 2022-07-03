import { FC } from 'react';

const GreenCheck: FC = () => {
  return (
    <div className="text-green-500 w-auto inline-block mt-2 whitespace-nowrap">
      <img
        src="/images/green-check.svg"
        className="float-left mr-2 mt-1 w-5"
        alt="Verified"
      />{' '}
      Approved
    </div>
  );
};

export default GreenCheck;
