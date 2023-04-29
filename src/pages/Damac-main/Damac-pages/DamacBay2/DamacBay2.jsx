import { useTranslation } from 'react-i18next';
import Nav from "../../../../Header/Nav/Nav";
import { useEffect } from "react";
import '../../commonStyles.sass';
import './damacBay2.sass';


const DamacBay2 = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className='damac-bay2'>
         <Nav/>
         <div className='banner'>
      <img className='banner-image' src='./img/damac-bay2/main.jpg' alt='img'/>
      <div className='damac-bay2__title-wrap'>
         <span className="damac-bay2__overhead">{t('damac-bay2-overhead')}</span>
         <h1 className="damac-bay2__title">Damac Bay 2</h1>
         <span className="damac-bay2__sub-title">{t('damac-bay2-sub-title')}</span>
      </div>
      </div>
      <div className='container'>
      <div className='damac-bay2__inner'>
         <div className='damac-bay2__flex-one db2-flex'>
            <div className='damac-bay2__flex-text'>
               <h2 className='db2-flex__title'>{t('damac-bay2-section1-title')}</h2>
               <p>{t('damac-bay2-section1-txt')}</p>
               <section className='db2-flex__list'>
                  <div className='db2-flex__list-item'>
                     <img src='./img/damac-bay2/icon1.png' alt='img'/>
                     <span>{t('damac-bay2-section1-list-item1')}</span>
                  </div>
                  <div className='db2-flex__list-item'>
                     <img src='./img/damac-bay2/icon2.png' alt='img'/>
                     <span>{t('damac-bay2-section1-list-item2')}</span>
                  </div>
                  <div className='db2-flex__list-item'>
                     <img src='./img/damac-bay2/icon3.png' alt='img'/>
                     <span>{t('damac-bay2-section1-list-item3')}</span>
                  </div>
                  <div className='db2-flex__list-item'>
                     <img src='./img/damac-bay2/icon4.png' alt='img'/>
                     <span>{t('damac-bay2-section1-list-item4')}</span>
                  </div>
               </section>
            </div>
            <div className='damac-bay2__flex-image'>
               <img src='./img/damac-bay2/image1.jpg' alt='img'/>
            </div>
         </div>
         <div className='damac-bay2__flex-two'>
            <div className='damac-bay2__flex-text'>
            <img src='./img/damac-bay2/damac.png' alt='img'/>
            <h2>{t('damac-bay2-section2-title')}</h2>
               <ul>
                  <li>{t('damac-bay2-section2-txt')}</li>
               </ul>
            </div>
            <div className='damac-bay2__flex-image'>
            <img src='./img/damac-bay2/image2.jpg' alt='img'/>
            </div>
         </div>
      </div>
      </div>
      <div className='damac-bay2__brochure brochure'>
         <div className='container brochure__container'>
         <div className='brochure__text'>
            <h2 className='brochure__title'>{t('damac-bay2-section3-title')} <span>{t('brochure')}</span> {t('about')} Damac Bay 2</h2>
            <ul className='brochure__list'>
               <li className='brochure__list-item'>{t('damac-bay2-section3-list-item1')}</li>
               <li className='brochure__list-item'>{t('damac-bay2-section3-list-item2')}</li>
               <li className='brochure__list-item'>{t('damac-bay2-section3-list-item3')}</li>
               <li className='brochure__list-item'>{t('damac-bay2-section3-list-item4')}</li>
            </ul>
         </div>
         <div className='brochure__img'>
         <img src='./img/damac-bay2/brochure.png' alt='img'/>
         </div>
         </div>
      </div>
      <div className='damac-bay2__db2-map db2-map'>
         <div className='container db2-map__container'>
         <div className='db2-map__text'>
            <h2 className='db2-map__title'>{t('damac-bay2-section4-title')}</h2>
            <p>{t('damac-bay2-section4-txt')}</p>
         </div>
         <div className='db2-map__img'>
         <img src='./img/damac-bay2/map.png' alt='img'/>
         </div>
         </div>
      </div>
      </div>
   )
}

export default DamacBay2;