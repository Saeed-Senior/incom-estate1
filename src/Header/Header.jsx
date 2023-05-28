import Nav from './Nav/Nav';
import { useTranslation } from 'react-i18next';
import './header.sass';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header" id="header">
        <Nav />
        <div className='main-banner'>
          <div className='main-banner__layer'></div>
          <img className='banner-image' src='./img/header/main-banner.jpg' alt='img'/>
      <div className='main-banner-inner container'>
        <div className='banner__inner-text'>
        <div className='logo-main'>
        <img src='./img/header/logo-main-banner.png' alt='logo'/>
        <div className='logo-main__text'>
        <span className='logo-main__title'>INCOM</span>
        <span className='logo-main__subtitle'>DUB REAL ESTATE</span>
      </div>
        </div>
        <h1 className="header__title">{t('header-title')}</h1>
        <div className="header__description">{t('header-desc')}</div>
          </div>
      </div>
      </div>
      </div>
    </header>
  );
};
export default Header;
