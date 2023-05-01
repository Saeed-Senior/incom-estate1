import { useTranslation } from 'react-i18next';
import Nav from "../../../../Header/Nav/Nav";
import { useEffect } from "react";
import '../../commonStyles.sass';
import './damacLagoons.sass';


const DamacLagoons = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className='damac-lagoons'>
         <Nav/>
         <div className='banner'>
      <img className='banner-image' src='./img/damac-lagoons/main.jpg' alt='img'/>
      <h1 className='damac-lagoons__title banner-logo'>{t('damac-lagoons-title')}</h1>
      </div>
      <div className='container'>
      <div className='damac-lagoons__inner'>
         <div className='damac-lagoons__gallery'>
            <img src='./img/damac-lagoons/gallery1.jpg' alt='img'/>
            <img src='./img/damac-lagoons/gallery2.jpg' alt='img'/>
            <img src='./img/damac-lagoons/gallery3.jpg' alt='img'/>
            <img src='./img/damac-lagoons/gallery4.jpg' alt='img'/>
         </div>
         <div className='damac-lagoons__regions'>
            <h2 className="damac-lagoons__regions-title">{t('damac-lagoons-section2-title')}</h2>
            <img src='./img/damac-lagoons/map.jpg' alt='img'/>
         </div>
         <div className='damac-lagoons__details'>
            <h2 className='damac-lagoons__details-title'>{t('damac-lagoons-section3-title')}</h2>
            <img src='./img/damac-lagoons/detail1.jpg' alt='img'/>
            <img src='./img/damac-lagoons/detail2.jpg' alt='img'/>
            <img src='./img/damac-lagoons/detail3.jpg' alt='img'/>
         </div>
      </div>
      </div>
      <section className='damac-lagoons__cards'>
            <div className='lagoon-card lagoon-card1'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Venice</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section4-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section4-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 4 900 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>6 {t('and')} 7</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>4 066 {t('sq')}</h4>
                        <span>{t('minimal-area')}</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card1.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
            <div className='lagoon-card lagoon-card2'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Santorini</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section5-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section5-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 2 687 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>6</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>2 012 {t('sq')}</h4>
                        <span>{t('minimal-area')}</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card2.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
            <div className='lagoon-card lagoon-card3'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Costa Brava</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section6-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section6-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 1 880 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>3, 4 {t('and')} 5</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>2 077 {t('sq')}</h4>
                        <span>{t('minimal-area')}</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card3.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
            <div className='lagoon-card lagoon-card4'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Nice</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section7-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section7-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 1 964 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>4 {t('and')} 5</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>2 268 {t('sq')}</h4>
                        <span>{t('minimal-area')}</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card4.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
            <div className='lagoon-card lagoon-card5'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Malta</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section8-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section8-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 1 764 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>4 {t('and')} 5</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>2 273 {t('sq')}</h4>
                        <span>{t('minimal-area')}</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card5.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
            <div className='lagoon-card lagoon-card6'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Monte Carlo</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section9-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section9-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 1 900 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>4 {t('and')} 5</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>2 275 {t('sq')}</h4>
                        <span>{t('minimal-area')}</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card6.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
            <div className='lagoon-card lagoon-card7'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Ibiza</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section10-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section10-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 2 110 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>4 {t('and')} 5</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>2 273 {t('sq')}</h4>
                        <span>{t('minimal-area')}</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card7.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
            <div className='lagoon-card lagoon-card8'>
               <div className='container'>
               <div className='damac-lagoons__lagoon-card'>
               <div className='lagoon-card__text'>
                  <h3 className='lagoon-card__title'>Portofino</h3>
                  <span className='lagoon-card__sub-title'>{t('damac-lagoons-section11-sub-title')}</span>
                  <p className='lagoon-card__txt'>{t('damac-lagoons-section11-txt')}</p>
                  <ul className='lagoon-card__list'>
                     <li className='lagoon-card__list-item'>
                        <h4>20%</h4>
                        <span>{t('down-payment')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>AED 2 636 000</h4>
                        <span>{t('starting-price')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>7</h4>
                        <span>{t('bedrooms-villas')}</span>
                     </li>
                     <li className='lagoon-card__list-item'>
                        <h4>2 077 {t('sq')}</h4>
                        <span>Minimal area</span>
                     </li>
                  </ul>
               </div>
               <div className='lagoon-card__img'>
                  <img src='./img/damac-lagoons/card8.jpg' alt='img'/>
               </div>
            </div>
               </div>
            </div>
      </section>
      <section className='villas'>
            <h2 className='villas__title'>{t('damac-lagoons-section12-title')}</h2>
            <div className='villas__inner'>
               <div className='villas__container container'>
                  <img src='./img/damac-lagoons/villas1.jpg' alt='img'/>
               </div>
               <div className='villas__container container'>
                  <img src='./img/damac-lagoons/villas2.jpg' alt='img'/>
               </div>
            </div>
      </section>
      </div>
   )
}

export default DamacLagoons;