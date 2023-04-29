import { useTranslation } from 'react-i18next';
import Nav from "../../../../Header/Nav/Nav";
import '../../commonStyles.sass';
import './cavalliCouture.sass';
import FloorPlans from "../../../../FloorPlans/FloorPlans";
import { useEffect } from "react";

const SafaOne = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className="cavalli-couture">
      <Nav/>
      <div className='banner'>
      <img className='banner-image' src='./img/cavalli-couture/main.jpg' alt='img'/>
      <div className='banner__inner-cc container'>
         <div>
         <img className='banner-logo' src='./img/cavalli-couture/logo.png' alt='img'/>
         </div>
         <div className='banner__inner-cc-text'>
            <img src='./img/cavalli-couture/mp.png'/>
            <h1>CAVALLI <br/> COUTURE</h1>
            <h3>{t('cavalli-couture-sub-title')}</h3>
            <p>{t('cavalli-couture-subsub-title')}</p>
         </div>
      </div>
      </div>
      <div>
      <div className='container'>
      <div className='cavalli-couture__inner'>
      <div className='cavalli-couture__flex-one'>
            <div className='cavalli-couture__flex-text'>
               <h2>{t('cavalli-couture-section1-list-title')}</h2>
               <ul>
                  <li>{t('cavalli-couture-section1-list-item1')}</li>
               </ul>
            </div>
            <div className='cavalli-couture__flex-image'>
               <img src='./img/cavalli-couture/image1.jpg' alt='img'/>
            </div>
         </div>
         <div className='cavalli-couture__flex-two'>
            <div className='cavalli-couture__flex-text'>
            <h2>{t('cavalli-couture-section2-list-title')}</h2>
               <ul>
                  <li>{t('cavalli-couture-section2-list-item1')}</li>
                  <li>{t('cavalli-couture-section2-list-item2')}</li>
                  <li>{t('cavalli-couture-section2-list-item3')}</li>
               </ul>
            </div>
            <div className='cavalli-couture__flex-image'>
            <img src='./img/cavalli-couture/image2.jpg' alt='img'/>
            </div>
         </div>
         <div className='cavalli-couture__flex-one'>
            <div className='cavalli-couture__flex-text'>
            <h2>{t('cavalli-couture-section2-list-title')}</h2>
               <ul>
                  <li>{t('cavalli-couture-section3-list-item1')}</li>
                  <li>{t('cavalli-couture-section3-list-item2')}</li>
                  <li>{t('cavalli-couture-section3-list-item3')}</li>
               </ul>
            </div>
            <div className='cavalli-couture__flex-image'>
               <img src='./img/cavalli-couture/image3.jpg' alt='img'/>
            </div>
         </div>
         <FloorPlans title1={t('one-bedroom')} title2={t('two-bedroom')} title3={t('three-bedroom')}
            image1={'./img/cavalli-couture/drawing1.jpg'} image2={'./img/cavalli-couture/drawing2.jpg'} image3={'./img/cavalli-couture/drawing3.jpg'}/>
         <div className='cavalli-couture__flex-two'>
            <div className='cavalli-couture__flex-text'>
            <p>
            {t('cavalli-couture-section4-list-item1')}
            </p>
            <h2>{t('cavalli-couture-section4-list-title')}</h2>
               <span>{t('cavalli-couture-section4-list-item2.1')}</span>
               <span>{t('cavalli-couture-section4-list-item2.2')}</span>
               <span>{t('cavalli-couture-section4-list-item2.3')}</span>
               <span>{t('cavalli-couture-section4-list-item2.4')}</span>
               <span>{t('cavalli-couture-section4-list-item2.5')}</span>
               <span>{t('cavalli-couture-section4-list-item2.6')}</span>
               <span>{t('cavalli-couture-section4-list-item2.7')}</span>
            </div>
            <div className='cavalli-couture__flex-image'>
            <img src='./img/cavalli-couture/image4.jpg' alt='img'/>
            </div>
         </div>
         <div>
         <div className='cavalli-couture__gallery'>
            <h2>{t('cavalli-couture-section5-list-title')}</h2>
            <div className='gallery'>
            <div className='gallery__img1'>
            <img src='./img/cavalli-couture/gallery1.jpg' alt='img'/>
            </div>
            <div className='gallery__img2'>
            <img src='./img/cavalli-couture/gallery2.jpg' alt='img'/>
            </div>
            <div className='gallery__img3'>
            <img src='./img/cavalli-couture/gallery3.jpg' alt='img'/>
            </div>
            <div className='gallery__img4'>
            <img src='./img/cavalli-couture/gallery4.jpg' alt='img'/>
            </div>
            <div className='gallery__img5'>
            <img src='./img/cavalli-couture/gallery5.jpg' alt='img'/>
            </div>
            <div className='gallery__img6'>
            <img src='./img/cavalli-couture/gallery6.jpg' alt='img'/>
            </div>
            <div className='gallery__img7'>
            <img src='./img/cavalli-couture/gallery7.jpg' alt='img'/>
            </div>
            </div>
         </div>
         </div>
         <div className='cavalli-couture__flex-two'>
            <div className='cavalli-couture__flex-text'>
            <h2>{t('cavalli-couture-section6-list-title')}</h2>
               <ul>
                  <li>{t('cavalli-couture-section6-list-item1')}</li>
                  <li>{t('cavalli-couture-section6-list-item2')}</li>
                  <li>{t('cavalli-couture-section6-list-item3')}</li>
               </ul>
               <div className='chick-tower-flex'>
                  <ul>
                     <li><h3>{t('cavalli-couture-section6-list-item4.1.1')}</h3></li>
                     <li>{t('cavalli-couture-section6-list-item4.1.2')}</li>
                  </ul>
                  <ul>
                     <li><h3>{t('cavalli-couture-section6-list-item4.2.1')}</h3></li>
                     <li>{t('cavalli-couture-section6-list-item4.2.2')}</li>
                  </ul>
               </div>
            </div>
            <div className='cavalli-couture__flex-image'>
            <img src='./img/cavalli-couture/image5.jpg' alt='img'/>
            </div>
         </div>
         <div className='payment-plan'>
            <h2 className='payment-title'>{t('cavalli-couture-section7-list-title')}</h2>
            <div className='payment-plan-layout'>
            <div className='payment-plan__item payment-plan__item1'>
               <h2 className='payment-plan__item-title'>20%</h2>
               <span>{t('cavalli-couture-section7-list-item1')}</span>
            </div>
            <div className='payment-plan__item payment-plan__item2'>
               <h2 className='payment-plan__item-title'>50%</h2>
               <span>{t('cavalli-couture-section7-list-item2')}</span>
            </div>
            <div className='payment-plan__item payment-plan__item3'>
               <h2 className='payment-plan__item-title'>30%</h2>
               <span>{t('cavalli-couture-section7-list-item3')}</span>
            </div>
            <div className='payment-plan__item payment-plan__item4'>
               <h2 className='payment-plan__item-title'>{t('cavalli-couture-section7-list-item4-title')}</h2>
               <span>{t('cavalli-couture-section7-list-item4.1')}</span>
               <span>{t('cavalli-couture-section7-list-item4.2')}</span>
               <span>{t('cavalli-couture-section7-list-item4.3')}</span>
            </div>
            </div>
         </div>
         <div className='cavalli-couture__flex-one'>
            <div className='cavalli-couture__flex-text'>
            <h2>{t('cavalli-couture-section8-list-title')}</h2>
               <ul>
                  <li>{t('cavalli-couture-section8-list-item1')}</li>
                  <li>{t('cavalli-couture-section8-list-item2')}</li>
               </ul>
            </div>
            <div className='cavalli-couture__flex-image'>
            <img src='./img/cavalli-couture/image6.jpg' alt='img'/>
            </div>
         </div>
      </div>
      </div>
      </div>
      </div>
   )
}

export default SafaOne;