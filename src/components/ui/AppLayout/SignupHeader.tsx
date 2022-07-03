import ImageView from '../../ui-components/imageView';

export const SignupHeader = () => {
  return (
    <header>
      <div className="container navbar py-3">
        <div className="navbar-start w-40">
          <a className="normal-case text-xl">
            <div className="w-40 py-3">
              <ImageView
                src="/images/logo.svg"
                alt="Fawow Logo"
                width={160}
                height={71}
              />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
