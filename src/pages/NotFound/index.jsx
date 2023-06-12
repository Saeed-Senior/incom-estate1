import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import './_notfound.sass'


const NotFound = () => {
   const { t } = useTranslation();
   return(
      <div className='notfound'>
         <p>{t('notfound')}</p>
         <Link to='/'>
         <button>{t('notfound-back')}</button>
         </Link>
      </div>
   )
}

export default NotFound;