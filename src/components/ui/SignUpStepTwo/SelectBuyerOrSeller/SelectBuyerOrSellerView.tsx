import Logo from '../../../ui-components/imageView';
import BuyerIcon from '../../../../../public/images/buyer-icon.svg';
import SellerIcon from '../../../../../public/images/seller-icon.svg';
import { useRouter } from 'next/router';
import ButtonComponent from '../../../ui-components/button';
import { useAppDispatch } from '../../../../lib/redux/hooks';
import { updateSelection } from '../../../../lib/redux/reducers/session';
import { useTranslation } from 'next-i18next';

export const SelectBuyerOrSellerView = ({
  setSelectedOption,
  selectedOption,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <section className="h-full min-h-screen login_bg p-5 md:p-10 background-image bg-cover bg-center ...">
      <div className="bg-white mb-10 p-5 mx-auto shadow-lg rounded-lg w-full xl:w-2/5 lg:w-1/2 md:w-3/5 sm:p-8">
        <Logo
          height={75}
          width={200}
          src="/images/logo.svg"
          className="inline-block logo"
          alt="Logo"
        />
        <div className="clear-both" />
        <h1 className="mt-8 mb-2 text-2xl ">{t('Sign Up as')}</h1>
        <p className="mb-5">{t('Choose Buyer or Seller')} </p>
        <div className="clear-both" />

        <div className="choose-login-outer">
          <label className="choose-login">
            <div className="choose-login-inner img-outer">
              <Logo
                height={250}
                width={250}
                src={BuyerIcon}
                className="inline-block logo"
                alt="Logo"
              />
            </div>
            <div
              className="choose-login-inner txt-outer"
              data-testid="buyerSelect"
            >
              {t('Buyer')}
            </div>
            <div className="choose-login-inner radio-outer">
              <input
                type="radio"
                // checked={true}
                name="radio"
                value="Buyer"
                onClick={() => setSelectedOption('Buyer')}
                className="checkmark"
                style={{ opacity: 1 }}
              />
            </div>
          </label>
          <label className="choose-login">
            <div className="choose-login-inner img-outer">
              <Logo
                height={250}
                width={250}
                src={SellerIcon}
                className="inline-block logo"
                alt="Logo"
              />
            </div>
            <div
              className="choose-login-inner txt-outer"
              data-testid="sellerSelect"
            >
              {t('Seller')}
            </div>
            <div className="choose-login-inner radio-outer">
              <input
                type="radio"
                name="radio"
                checked={true}
                value="Seller"
                onChange={() => setSelectedOption('Seller')}
                className="checkmark"
                style={{ opacity: 1 }}
              />
            </div>
          </label>
        </div>

        <div className="clear-both" />
        <div className="w-full mt-10 mb-2 flex-auto flex gap-4">
          <ButtonComponent
            type="button"
            className="btt-secondary btn-back mr-2"
            label={t('Back')}
            onClick={() => router.push('/select-category')}
          />
          <ButtonComponent
            type="submit"
            className="btt-primary btn-sign mr-2"
            label={t('Submit')}
            onClick={() => {
              dispatch(updateSelection(selectedOption));
              router.push('/user-details');
            }}
          />
        </div>
      </div>
    </section>
  );
};
