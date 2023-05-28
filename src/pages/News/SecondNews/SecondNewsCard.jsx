import { useTranslation } from 'react-i18next';
import '../news.sass';
import '../stylesNews/_stylesNews.sass';



const SecondNewsCard = ({title, image, li1, li2, li3, cardLink, linkText}) => {
   const { t } = useTranslation();
   return(
      <div className='first-news__section fn-section'>
      <h2 className='fn-section__title'>{title}</h2>
      <div className='fn-section__text-wrap'>
      <ul className='fn-section__list'>
         <li>{li1}</li>
         <li>{li2}</li>
         <li>{li3}</li>
      </ul>
      </div>
      <img className='fn-section__image' src={image} alt='img'/>
      <p className='fn-section__txt'>{t('address')}: <a className='fn-section__link' href={cardLink}>{linkText}</a></p>
   </div>
   )
}

export default SecondNewsCard;