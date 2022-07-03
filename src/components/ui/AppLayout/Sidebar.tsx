/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { sidebarMenu } from 'src/lib/SidebarListApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Sidebar = ({ pathName }) => {
  const router = useRouter();
  const [bgcolor, setBgcolor] = useState<number>(1);
  const [isActiveMyAccount, setActiveMyAccount] = useState<boolean>(false);
  const [isSidebarUrl, setSidebarUrl] = useState<boolean>(false);

  useEffect(() => {
    if (pathName === 'profile') {
      setBgcolor(0);
      setActiveMyAccount(true);
    } else {
      setBgcolor(sidebarMenu?.find((i) => i?.url === `/${pathName}`)?.id);
      setActiveMyAccount(false);
    }
  }, [pathName]);

  return (
    <div className="w-full left-contant hidden lg:w-1/5 lg:block pt-5 cursor-pointer">
      {pathName === 'profile' && (
        <div className="flex items-center mt-6 mb-5">
          <div className="relative">
            <div className="overflow-hidden rounded-full w-16 h-16 mr-4">
              <img src="images/demo-user-icon.jpg" alt="user" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-base">Seller Name</h3>
            <div className="font-medium text-gray-400 text-xs">
              +91 - 9605148523
            </div>
          </div>
        </div>
      )}
      <ul>
        {pathName === 'profile' && (
          <li
            className={`${isActiveMyAccount ? `active` : ``}`}
            onClick={() => {
              setActiveMyAccount(true);
              setSidebarUrl(false);
            }}
          >
            <a>{`My Account`}</a>
          </li>
        )}
      </ul>

      {sidebarMenu.map((serve) => (
        <>
          <ul
            key={serve.id}
            onClick={() => {
              setBgcolor(serve.id);
              router?.push(serve?.url);
              setSidebarUrl(true);
            }}
          >
            <li
              onClick={() => {
                setActiveMyAccount(false);
                setSidebarUrl(true);
              }}
              className={`${serve.id === bgcolor ? `active` : ''}`}
            >
              <a>{serve.label}</a>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};
