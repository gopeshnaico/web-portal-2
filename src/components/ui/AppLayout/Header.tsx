import { useRouter } from 'next/router';
import ImageView from '../../ui-components/imageView';

export const Header = ({ pathName }) => {
  const router = useRouter();
  return (
    <>
      <header>
        {/* <div className="container navbar py-3">
          <div className="navbar-start w-40 p-2">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost px-2 mr-2 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <div
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-b-2xl w-64 rounded-t-none"
              >
                <div className="flex p-3 bg-slate-200">
                  <a className="">
                    <img
                      src="/images/offers-icon.svg"
                      className="w-10"
                      alt="offers"
                    />
                  </a>
                  <a className="relative ml-8">
                    <span className="absolute right-0 top-0 bg-red-700 rounded-full text-white w-6 h-6 text-center text-sm leading-5 pt-0.5">
                      88
                    </span>
                  </a>
                </div>

                <a className="flex p-3 bg-slate-100">
                  <div className="float-left rounded-full w-10 h-10 bg-slate-300 mr-2 text-center truncate">
                    <img src="/images/demo-user.jpg" alt="User" />
                  </div>
                  <div className="ml-0">
                    <h3>Brand Name</h3>
                    <h4 className="text-gray-400 text-sm">Secondary</h4>
                  </div>
                  <div className="ml-auto mt-4">
                    <img
                      src="/images/right-arrow.svg"
                      alt=" "
                      className="w-2"
                    />
                  </div>
                </a>

                <a className="flex p-3">
                  <img
                    src="/images/user-icon.svg"
                    className="w-4 mr-2"
                    alt="user icon"
                  />{' '}
                  My Account
                </a>
                <a className="flex p-3">
                  <img
                    src="images/logout-icon.svg"
                    className="w-4 mr-2"
                    alt="logout icon"
                  />{' '}
                  Logout
                </a>
              </div>
            </div>
            <a className="normal-case text-xl">
              <ImageView
                width={160}
                height={71}
                src="/images/logo.svg"
                className=""
                alt="Fawow Logo"
              />
            </a>
          </div>
          <div className="navbar-center hidden ml-auto lg:flex">
            <div className="menu menu-horizontal p-0">
              <div className="flex ml-auto">
                <div className="flex">
                  <a className="ml-6 lg:ml-8 new-notification">
                    <img
                      src="/images/notification.svg"
                      className="w-5"
                      alt="notification"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end block ml-auto lg:hidden">
            <label tabIndex={0} className="inline-flex cursor-pointer">
              <img src="/images/search-icon.svg" className="w-5" alt="Search" />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu shadow bg-base-100 rounded-b-2xl w-72 rounded-t-none mt-4"
            >
              <div className="relative p-2">
                <input
                  className="header-search h-11 rounded-3xl pl-5 pr-14"
                  type="text"
                  name="search"
                  placeholder="Search for Products, Brands and More"
                />
                <a className="absolute right-0 top-0 rounded-r-3xl h-11 pr-5 pl-4 pt-2.5 hover:bg-gray-200">
                  <img
                    src="/images/search-icon.svg"
                    className="w-5 mt-2"
                    alt="Search"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end mr-0 ml-auto w-auto md:ml-0 hidden lg:block">
            <div className="dropdown dropdown-end ml-6 lg:ml-8">
              <label tabIndex={0} className="inline-flex cursor-pointer">
                <div className="float-left rounded-full w-10 h-10 bg-slate-300 mr-2 text-center truncate">
                  <img src="/images/demo-user.jpg" alt="User" />
                </div>
                <div className="float-left flex whitespace-nowrap mt-2">
                  <span className="hidden sm:block">John Smith</span>
                  <img
                    src="/images/down-arrow.svg"
                    className="float-right w-3 ml-2"
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-100 rounded-b-2xl w-56 rounded-t-none mt-4"
              >
                <li>
                  <a className="flex bg-slate-100">
                    <div className="float-left rounded-full w-10 h-10 bg-slate-300 mr-0 text-center truncate">
                      <img src="/images/demo-user-icon.jpg" alt="User" />
                    </div>
                    <div className="ml-0">
                      <h3>Brand Name</h3>
                      <h4 className="text-gray-400 text-sm">Primary</h4>
                    </div>
                    <div className="ml-auto">
                      <img
                        src="/images/right-arrow.svg"
                        alt=" "
                        className="w-2"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a onClick={() => router.push('/profile')}>
                    <img
                      src="images/user-icon.svg"
                      className="w-4"
                      alt="user icon"
                    />{' '}
                    My Account
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/logout-icon.svg"
                      className="w-4"
                      alt="logout icon"
                    />{' '}
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="container navbar py-3">
          <div className="navbar-start w-40">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost px-2 mr-2 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <div
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-b-2xl w-64 rounded-t-none"
              >
                <div className="flex p-3 bg-slate-200">
                  <a className="">
                    <img
                      src="/images/offers-icon.svg"
                      className="w-10"
                      alt="offers"
                    />
                  </a>
                  <a className="relative ml-8">
                    <img
                      src="/images/cart-icon.svg"
                      className="mt-3 mr-5 w-7"
                      alt="Cart"
                    />
                    <span className="absolute right-0 top-0 bg-red-700 rounded-full text-white w-6 h-6 text-center text-sm leading-5 pt-0.5">
                      88
                    </span>
                  </a>
                </div>
                <a
                  onClick={() => router.push('/product')}
                  className="flex p-3 bg-slate-100 cursor-pointer"
                >
                  <div className="ml-0">
                    <h3>MyBiz</h3>
                  </div>
                  <div className="ml-auto mt-4">
                    <img
                      src="/images/right-arrow.svg"
                      alt=" "
                      className="w-2"
                    />
                  </div>
                </a>
                <a className="flex p-3" onClick={() => router.push('/profile')}>
                  <img
                    src="/images/user-icon.svg"
                    className="w-4 mr-2 cursor-pointer"
                    alt="user icon"
                  />{' '}
                  My Account
                </a>
                <a
                  className="flex p-3 cursor-pointer"
                  onClick={() => router.push('/')}
                >
                  <img
                    src="/images/logout-icon.svg"
                    className="w-4 mr-2"
                    alt="logout icon"
                  />{' '}
                  Logout
                </a>
              </div>
            </div>
            <a className="normal-case text-xl py-3">
              <img src="/images/logo.svg" className="w-40" alt="Fawow Logo" />
            </a>
          </div>
          <div className="navbar-center hidden ml-auto lg:flex">
            <div className="menu menu-horizontal p-0">
              <div className="flex ml-auto">
                <div className="flex mt-2 ml-6 lg:ml-8 relative">
                  <input
                    className="header-search h-11 rounded-3xl pl-5 pr-14"
                    type="text"
                    name="search"
                    placeholder="Search for Products, Brands and More"
                  />
                  <a className="absolute right-0 top-0 rounded-r-3xl h-11 pr-5 pl-4 pt-2.5 hover:bg-gray-200">
                    <img
                      src="/images/search-icon.svg"
                      className="w-5"
                      alt="Search"
                    />
                  </a>
                </div>
                <div className="flex pt-2 items-center">
                  {pathName != 'product' && (
                    <div className="ml-6 lg:ml-8 cursor-pointer">
                      <a
                        onClick={() => router.push('/product')}
                        className="rounded-3xl bg-blue-400 text-white px-6 h-8 leading-8 inline-block cursor-pointer	"
                      >
                        MyBiz
                      </a>
                    </div>
                  )}
                  {pathName === 'product' && (
                    <div className="ml-6 lg:ml-8 cursor-pointer">
                      <a
                        onClick={() => router.push('/dashboard')}
                        className="rounded-3xl bg-blue-400 text-white px-6 h-8 leading-8 inline-block cursor-pointer"
                      >
                        My Fawow
                      </a>
                    </div>
                  )}
                  <a className="ml-6 lg:ml-8">
                    <img
                      src="/images/offers-icon.svg"
                      className="w-10"
                      alt="offers"
                    />
                  </a>
                  <a className="relative ml-8">
                    <img
                      src="/images/cart-icon.svg"
                      className="mt-3 mr-5 w-7"
                      alt="Cart"
                    />
                    <span className="absolute right-0 top-0 bg-red-700 rounded-full text-white w-6 h-6 text-center text-sm leading-5 pt-0.5">
                      88
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end block ml-auto lg:hidden">
            <label tabIndex={0} className="inline-flex cursor-pointer">
              <img src="/images/search-icon.svg" className="w-5" alt="Search" />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu shadow bg-base-100 rounded-b-2xl w-72 rounded-t-none mt-4"
            >
              <div className="relative p-2">
                <input
                  className="header-search h-11 rounded-3xl pl-5 pr-14"
                  type="text"
                  name="search"
                  placeholder="Search for Products, Brands and More"
                />
                <a className="absolute right-0 top-0 rounded-r-3xl h-11 pr-5 pl-4 pt-2.5 hover:bg-gray-200">
                  <img
                    src="/images/search-icon.svg"
                    className="w-5 mt-2"
                    alt="Search"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end mr-0 ml-auto w-auto md:ml-0 hidden lg:block">
            <div className="dropdown dropdown-end ml-6 lg:ml-8">
              <label tabIndex={0} className="inline-flex cursor-pointer">
                <div className="float-left rounded-full w-10 h-10 bg-slate-300 mr-2 text-center truncate">
                  <img src="/images/demo-user-icon.jpg" alt="User" />
                </div>
                <div className="float-left flex whitespace-nowrap mt-2">
                  <img
                    src="images/down-arrow.svg"
                    className="float-right w-3 ml-2"
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-100 rounded-b-2xl w-56 rounded-t-none mt-4"
              >
                <li className="cursor-pointer">
                  <a onClick={() => router.push('/profile')}>
                    <img
                      src="/images/user-icon.svg"
                      className="w-4"
                      alt="user icon"
                    />{' '}
                    My Account
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a onClick={() => router.push('/')}>
                    <img
                      src="/images/logout-icon.svg"
                      className="w-4"
                      alt="logout icon"
                    />{' '}
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {pathName === 'home-seller' && (
          <div>
            <img
              src="/images/demo-banner-seller.jpg"
              alt="banner"
              className="w-full"
            />
          </div>
        )}
        {pathName === 'dashboard' && (
          <div className="cursor-pointer">
            <img
              src="/images/demo-banner-1.jpg"
              alt="Banner"
              className="h-30 md:h-auto"
            />
          </div>
        )}
      </header>
    </>
  );
};
