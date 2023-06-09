import { useTranslation } from 'react-i18next';
import ServicesList from './ServicesList';
import './services.sass';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="services" id="services">
      <div className="wrap services-wrap">
        <div className="services__bg">
          <img src='./img/services/mini-logo.png' alt='logo'/>
          <div className="title">{t('services-title')}</div>
          <div className="services__subtitle">{t('services-subtitle')}</div>
          <div className="services__wrap">
            <div className="service">
              <div className="service__circle">
                <img src="./img/services/plane.svg" alt="" />
              </div>
              <div className="service__text">{t('services-item1')}</div>
            </div>
            <div className="service">
              <div className="service__circle">
                <img src="./img/services/car.svg" alt="" />
              </div>
              <div className="service__text">{t('services-item2')}</div>
            </div>
            <div className="service">
              <div className="service__circle">
                <img src="./img/services/house.svg" alt="" />
              </div>
              <div className="service__text">{t('services-item3')}</div>
            </div>
          </div>
        </div>
        <ServicesList />
      </div>
    </div>
  );
};
export default Services;
