import { useTranslation } from 'react-i18next';
import Nav from "../../../../Header/Nav/Nav";
import { useEffect } from "react";
import '../../commonStyles.sass';
import './damacBay.sass';


const DamacBay = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className='damac-bay'>
         <Nav/>
         <div className='banner'>
      <img className='banner-image' src='./img/damac-bay/main.jpg' alt='img'/>
      </div>
      <div className='container'>
      <div className='damac-bay__inner'>
         <div className='first-gallery'>
         <h2 className='first-gallery__title'>{t('damac-bay-gallery1-title')}</h2>
         <p className='first-gallery__sub-title'>{t('damac-bay-gallery1-sub-title')}</p>
         <div className='damac-bay__gallery'>
            <img src='./img/damac-bay/gallery1.1.jpg' alt='img'/>
            <img src='./img/damac-bay/gallery1.2.jpg' alt='img'/>
            <img src='./img/damac-bay/gallery1.3.jpg' alt='img'/>
            <img src='./img/damac-bay/gallery1.4.jpg' alt='img'/>
         </div>
         </div>
         <div className='damac-bay__harbour'>
         <img src='./img/damac-bay/dubai.jpg' alt='img'/>
         </div>
         <div className='damac-bay__flex-one'>
            <div className='damac-bay__flex-text'>
               <ul>
                  <li>{t('damac-bay-section1-flex1')}</li>
               </ul>
            </div>
            <div className='damac-bay__flex-image'>
               <img src='./img/damac-bay/flex1.jpg' alt='img'/>
            </div>
         </div>
         <div className='damac-bay__flex-two'>
            <div className='damac-bay__flex-text'>
               <ul>
                  <li>{t('damac-bay-section1-flex2')}</li>
               </ul>
            </div>
            <div className='damac-bay__flex-image'>
            <img src='./img/damac-bay/flex2.jpg' alt='img'/>
            </div>
         </div>
         <div className='interior-gallery'>
            <h2 className='interior-gallery__title'>{t('damac-bay-gallery2-title')}</h2>
            <div className='damac-bay__gallery'>
            <img src='./img/damac-bay/gallery2.1.jpg' alt='img'/>
            <img src='./img/damac-bay/gallery2.2.jpg' alt='img'/>
            <img src='./img/damac-bay/gallery2.3.jpg' alt='img'/>
            <img src='./img/damac-bay/gallery2.4.jpg' alt='img'/>
         </div>
         </div>
      </div>
      </div>
      </div>
   )
}

export default DamacBay;