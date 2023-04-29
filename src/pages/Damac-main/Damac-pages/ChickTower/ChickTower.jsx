import { useTranslation } from 'react-i18next';
import Nav from "../../../../Header/Nav/Nav";
import '../../commonStyles.sass';
import './chickTower.sass';
import FloorPlans from "../../../../FloorPlans/FloorPlans";
import ChickTowerSlider from '../../../../ChickTowerSlider/ChickTowerSlider';
import { useEffect } from "react";

const ChickTower = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className="chick-tower">
      <Nav/>
      <div className='banner'>
      <img className='banner-image' src='./img/chick-tower/main.jpg' alt='img'/>
      <div className='banner__inner'>
         <img className='banner-logo' src='./img/chick-tower/logo.png' alt='img'/>
      </div>
      </div>
      <div className='chick-tower__inner'>
      <div className='container'>
         <div className='chick-tower__flex-one'>
            <div className='chick-tower__flex-text'>
               <h2>Chic Tower</h2>
               <ul>
                  <li>{t('chick-tower-section1-list-item1')}</li>
                  <li>{t('chick-tower-section1-list-item2')}</li>
               </ul>
            </div>
            <div className='chick-tower__flex-image'>
               <img src='./img/chick-tower/image1.jpg' alt='img'/>
            </div>
         </div>
         <div className='chick-tower__flex-two'>
            <div className='chick-tower__flex-text'>
            <h2>{t('chick-tower-section2-list-title')}</h2>
               <ul>
                  <li>{t('chick-tower-section2-list-item1')}</li>
               </ul>
            </div>
            <div className='chick-tower__flex-image'>
            <img src='./img/chick-tower/image2.jpg' alt='img'/>
            </div>
         </div>
         <div className='chick-tower__flex-one'>
            <div className='chick-tower__flex-text'>
               <h2>{t('chick-tower-section3-list-title')}</h2>
               <p>
               {t('chick-tower-section3-list-item1')}
               </p>
            </div>
            <div className='chick-tower__flex-image'>
               <img src='./img/chick-tower/image3.jpg' alt='img'/>
            </div>
         </div>
         <div className='chick-tower__flex-two'>
            <div className='chick-tower__flex-text'>
            <h2>{t('chick-tower-section4-list-title')}</h2>
               <div className='chick-tower-flex'>
                  <ul>
                     <li>{t('chick-tower-section4-list-item1.1')}</li>
                     <li>{t('chick-tower-section4-list-item1.2')}</li>
                     <li>{t('chick-tower-section4-list-item1.3')}</li>
                  </ul>
                  <ul>
                  <li>{t('chick-tower-section4-list-item2.1')}</li>
                  <li>{t('chick-tower-section4-list-item2.2')}</li>
                  <li>{t('chick-tower-section4-list-item2.3')}</li>
                  </ul>
               </div>
            </div>
            <div className='chick-tower__flex-image'>
            <img src='./img/chick-tower/image4.jpg' alt='img'/>
            </div>
         </div>
         <FloorPlans title1={t('studio')} title2={t('one-bedroom')} title3={t('two-bedroom')}
            image1={'./img/chick-tower/drawing1.jpg'} image2={'./img/chick-tower/drawing2.jpg'} image3={'./img/chick-tower/drawing3.jpg'}/>
         <ChickTowerSlider/>
      </div>
      </div>
      </div>
   )
}

export default ChickTower;