import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import './damac.sass';
const ProjectsCard = ({title, image, link}) => {
  const { t } = useTranslation();
  return (
    <div className="wrap show-card">
      <div className="damac">
        <div className="title">{title}</div>
        <div className="flex__description">{t('show-projects')} <span>{title}</span></div>
        <div className="flex">
        <Link to={link} className="flex__item"><img src={image} alt='img'/></Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
