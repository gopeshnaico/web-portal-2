/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import LogoSecond from '../../ui-components/LogoSecond';
import { footerData } from '../../../lib/SidebarListApi';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="block md:flex">
            <div className="w-full mt-2 mb-5 mr-5 md:w-1/6">
              <LogoSecond
                src="/images/logo.svg"
                className="inline-block logo"
                alt="Logo"
              />
            </div>
            <div className="block w-full md:flex md:w-11/12">
              {footerData.map((serve) => (
                <div className="w-full">
                  <h2 className="font-semibold uppercase text-lg">
                    {serve.Header}
                  </h2>
                  <ul>
                    {serve.data.map((i) => (
                      <li>
                        <a>{i}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="clear-both"></div>
          <div className="relative copyright">
            <div className="left">Copyright &copy; 2022-23 Fawow Pvt Ltd.</div>
            <div className="right mt flex">
              <a className="block p-1 rounded-sm hover:bg-gray-200">
                <img
                  src="/images/fb-icon.svg"
                  className="w-6 h-4"
                  alt="Facebook"
                />
              </a>
              <a className="block p-1 rounded-sm hover:bg-gray-200">
                <img
                  src="/images/insta-icon.svg"
                  className="w-6 h-4"
                  alt="Instagram"
                />
              </a>
              <a className="block p-1 rounded-sm hover:bg-gray-200">
                <img
                  src="/images/twitter-icon.svg"
                  className="w-6 h-4"
                  alt="Twitter"
                />
              </a>
              <a className="block p-1 rounded-sm hover:bg-gray-200">
                <img
                  src="/images/msg-icon.svg"
                  className="w-6 h-4"
                  alt="Mail"
                />
              </a>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
        <div className="clear-both"></div>
      </footer>
    </>
  );
};
