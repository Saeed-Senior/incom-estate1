import { useTranslation } from 'react-i18next';
import './services.sass';

const ServicesList = () => {
   const { t } = useTranslation();

   const servicesList = [t('services-list-item1'), t('services-list-item2'), t('services-list-item3'), t('services-list-item4'), t('services-list-item5'), t('services-list-item6'), t('services-list-item7'), t('services-list-item8'), t('services-list-item9'), t('services-list-item10'), t('services-list-item11'), t('services-list-item12'),]

   return (
      <div className="services-list">
         <ul>
            {servicesList.map((item, index) => {
               return <li key={index}><span>{index + 1}</span> {item}</li>
            })}
         </ul>
      </div>
   );
};
export default ServicesList;