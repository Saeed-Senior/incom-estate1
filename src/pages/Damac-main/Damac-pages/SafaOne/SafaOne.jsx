import Nav from "../../../../Header/Nav/Nav";
import '../../commonStyles.sass';
import './safaOne.sass';
import FloorPlans from "../../../../FloorPlans/FloorPlans";
import SafaOneSlider from '../../../../SafaOneSlider/SafaOneSlider';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';


const SafaOne = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className="safa-one">
      <Nav/>
      <div className='banner'>
      <img className='banner-image' src='./img/safa-one/main.png' alt='img'/>
      <div className='banner__inner'>
         <img className='banner-logo' src='./img/safa-one/logo.png' alt='img'/>
         <span>{t('safa-one-logo')}</span>
      </div>
      </div>
      <div className='safa-one__inner'>
      <div className='container'>
         <div className='safa-one__flex-one'>
            <div className='safa-one__flex-text'>
               <h2>Safa one</h2>
               <ul>
                  <li>{t('safa-one-section1-list-item1')}</li>
                  <li>{t('safa-one-section1-list-item2')}</li>
                  <li>{t('safa-one-section1-list-item3')}</li>
                  <li>{t('safa-one-section1-list-item4')}</li>
               </ul>
            </div>
            <div className='safa-one__flex-image'>
               <img src='./img/safa-one/image1.jpg' alt='img'/>
            </div>
         </div>
         <div className='safa-one__flex-two'>
            <div className='safa-one__flex-text'>
            <h2>Safa two</h2>
               <ul>
                  <li>{t('safa-one-section2-list-item1')}</li>
                  <li>{t('safa-one-section2-list-item2')}</li>
                  <li>{t('safa-one-section2-list-item3')}</li>
                  <li>{t('safa-one-section2-list-item4')}</li>
               </ul>
            </div>
            <div className='safa-one__flex-image'>
            <img src='./img/safa-one/image2.jpg' alt='img'/>
            </div>
         </div>
         <div className='safa-one__flex-one'>
            <div className='safa-one__flex-text'>
               <h2>{t('safa-one-section3-list-title')}</h2>
               <p>
               {t('safa-one-section3-list-item1')}
               </p>
            </div>
            <div className='safa-one__flex-image'>
               <img src='./img/safa-one/image3.jpg' alt='img'/>
            </div>
         </div>
         <div className='safa-one__flex-two'>
            <div className='safa-one__flex-text'>
            <h2>{t('safa-one-section4-list-title')}</h2>
               <p>
               {t('safa-one-section4-list-item1')}
               </p>
            </div>
            <div className='safa-one__flex-image'>
            <img src='./img/safa-one/image4.jpg' alt='img'/>
            </div>
         </div>
         <FloorPlans title1={t('one-bedroom')} title2={t('two-bedroom')} title3={t('three-bedroom')}
            image1={'./img/safa-one/drawing1.jpg'} image2={'./img/safa-one/drawing2.jpg'} image3={'./img/safa-one/drawing3.jpg'}/>
         <SafaOneSlider/>
      </div>
      </div>
      </div>
   )
}

export default SafaOne;