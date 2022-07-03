import { FC } from 'react';

const RedCheck: FC = () => {
  return (
    <div className="text-red-500 w-auto inline-block mt-2 whitespace-nowrap">
      <img
        src="/images/red-check.svg"
        className="float-left mr-2 mt-1 w-5"
        alt="Verified"
      />{' '}
      Rejected
    </div>
  );
};

export default RedCheck;
