import { useRouter } from 'next/router';
import { FC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { SignupHeader } from './SignupHeader';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathName = router.pathname.toLocaleLowerCase().replace(/\//g, '');

  const signupHeaders =
    pathName === 'user-enroll' ||
    pathName === 'user-enrollcategories' ||
    pathName === 'categories';
  const headerVisibility = !(
    pathName === '' ||
    pathName === 'login' ||
    pathName === 'translate' ||
    pathName === 'select-buyer-seller' ||
    pathName === 'signupverify-otp' ||
    pathName === 'user-updation' ||
    pathName === 'categories' ||
    pathName === 'forgot-password' ||
    pathName === 'reset-password' ||
    pathName === 'signup'
  );
  const sidebarVisibility = pathName === 'dashboard';

  const page = children;

  return (
    <>
      {signupHeaders ? (
        <div className="main_outer">
          <SignupHeader />
          <section>
            <div className="container flex">{page}</div>
          </section>
          <div className="clear-both" />
          <div className="w-full pb-10 text-center text-gray-400">
            Having trouble logging in?{' '}
            <a className="underline text-blue-400 font-medium">Get Help</a>
          </div>
        </div>
      ) : headerVisibility ? (
        <div>
          <div className="main_outer">
            <Header {...{ pathName }} />
            <section>
              <div className="container flex">
                {!sidebarVisibility && <Sidebar {...{ pathName }} />}
                {page}
              </div>
            </section>
            <Footer />
            <div className="clear-both" />
          </div>
        </div>
      ) : (
        page
      )}
    </>
  );
};
