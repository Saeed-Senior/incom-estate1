import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import './damac.sass';
const Damac = () => {
  const { t } = useTranslation();
  return (
    <div className="wrap">
      <div className="damac">
        <div className="title">DAMAC Properties</div>
        <div className="flex__description">{t('damac')} DAMAC Properties</div>
        <div className="flex">
        <Link to="/damac" className="flex__item"></Link>
        <Link to="/damac" className="flex__item"></Link>
        </div>
      </div>
    </div>
  );
};
export default Damac;
