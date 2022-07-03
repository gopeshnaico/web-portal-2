import { FC } from 'react';

const YellowCheck: FC = () => {
  return (
    <div className="text-amber-300 w-auto inline-block mt-2 whitespace-nowrap">
      <img
        src="/images/yellow-pending.svg"
        className="float-left mr-2 mt-1 w-5"
        alt="Verified"
      />{' '}
      Pending
    </div>
  );
};

export default YellowCheck;
