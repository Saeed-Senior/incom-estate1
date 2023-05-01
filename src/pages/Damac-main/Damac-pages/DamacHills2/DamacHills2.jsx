import { useTranslation } from 'react-i18next';
import Nav from "../../../../Header/Nav/Nav";
import { useEffect } from "react";
import '../../commonStyles.sass';
import './damacHills2.sass';


const DamacHills2 = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className='damac-hills2'>
         <Nav/>
         <div className='banner damac-hills2__banner'>
      <img className='banner-image' src='./img/damac-hills2/main.jpg' alt='img'/>
      <div className='damac-hills2__title-wrap'>
         <img src='./img/damac-hills2/logo.png' alt='img'/>
         <span>{t('damac-hills2-title1')}</span>
         <span>{t('damac-hills2-title2')}</span>
         <span>{t('damac-hills2-title3')}</span>
      </div>
      </div>
      <div className='container'>
      <div className='damac-hills2__inner'>
      <div className='damac-hills2__searching searching'>
         <h2 className='searching__title'>{t('damac-hills2-section1-title1')}</h2>
         <h2 className='searching__title'>{t('damac-hills2-section1-title2')}</h2>
         <span className='searching__sub-title'>{t('damac-hills2-section1-sub-title1')} <span>AED 650,000</span></span>
         <span className='searching__sub-title'>{t('damac-hills2-section1-sub-title2')} <span>AED 1.3M</span></span>
         <p className='searching__text'>
         {t('damac-hills2-section1-txt')}  
         </p>
         <ul className='searching__list'>
            <li className='searching__list-item'>
            <div>
            <img src='./img/damac-hills2/icon1.1.png' alt='img'/>
            </div>
            <span>{t('damac-hills2-section1-list-item1.1')}</span>
            <span>{t('damac-hills2-section1-list-item1.2')}</span>
            </li>
            <li className='searching__list-item'>
            <div>
            <img src='./img/damac-hills2/icon1.2.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section1-list-item2.1')}</span>
            <span>{t('damac-hills2-section1-list-item2.2')}</span>
            </li>
            <li className='searching__list-item'>
            <div>
            <img src='./img/damac-hills2/icon1.3.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section1-list-item3.1')}</span>
            <span>{t('damac-hills2-section1-list-item3.2')}</span>
            </li>
            <li className='searching__list-item'>
            <div>
            <img src='./img/damac-hills2/icon1.4.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section1-list-item4.1')}</span>
            <span>{t('damac-hills2-section1-list-item4.2')}</span>
            <span>{t('damac-hills2-section1-list-item4.3')}</span>
            </li>
         </ul>
      </div>
      <div className='damac-hills2__community community'>
         <h2 className='community__title'>{t('damac-hills2-section2-title')}</h2>
         <div className='community__list'>
            <div className='community__list-item'>
            <img src='./img/damac-hills2/image1.1.jpg' alt='img'/>
            <span>{t('damac-hills2-section2-list-item1')}</span>
            </div>
            <div className='community__list-item'>
            <img src='./img/damac-hills2/image1.2.jpg' alt='img'/>
            <span>{t('damac-hills2-section2-list-item2')}</span>
            </div>
            <div className='community__list-item'>
            <img src='./img/damac-hills2/image1.3.jpg' alt='img'/>
            <span>{t('damac-hills2-section2-list-item3')}</span>
            </div>
         </div>
      </div>
         <div className='damac-hills2__flex-one'>
            <div className='damac-hills2__flex-text'>
               <p>{t('damac-hills2-section3-txt')}</p>
            </div>
            <div className='damac-hills2__flex-image'>
               <img src='./img/damac-hills2/flex1.jpg' alt='img'/>
            </div>
         </div>
         <div className='damac-hills2__flex-two'>
            <div className='damac-hills2__flex-text'>
               <ul>
               <li>
               {t('damac-hills2-section4-txt1')}
               </li>
               <li>
               {t('damac-hills2-section4-txt2')}
               </li>
               </ul>
            </div>
            <div className='damac-hills2__flex-image'>
            <img src='./img/damac-hills2/flex2.jpg' alt='img'/>
            </div>
         </div>
         <div className='damac-hills2__big-image'>
            <img src='./img/damac-hills2/big-image.jpg' alt='img'/>
         </div>
         <div className='damac-hills2__container'>
         <div className='damac-hills2__choise-home choise-home'>
            <h2 className='choise-home__title'>{t('damac-hills2-section6-title')} <span>{t('damac-hills2-section6-title-home')}</span></h2>
            <p className='choise-home__txt'>{t('damac-hills2-section6-txt')}</p>
            <section className='choise-home__list'>
               <div className='choise-home__list-item'>
                  <div className='choise-home__list-item-image'>
                     <img src='./img/damac-hills2/image1.jpg' alt='img'/>
                  </div>
                  <div className='choise-home__list-item-discription'>
                     <h3>CAMELIA VILLAS</h3>
                     <p>{t('damac-hills2-section6-item1')}</p>
                  </div>
               </div>
               <div className='choise-home__list-item'>
                  <div className='choise-home__list-item-image'>
                     <img src='./img/damac-hills2/image2.jpg' alt='img'/>
                  </div>
                  <div className='choise-home__list-item-discription'>
                     <h3>VIRDIS</h3>
                     <p>{t('damac-hills2-section6-item2')}</p>
                  </div>
               </div>
               <div className='choise-home__list-item'>
                  <div className='choise-home__list-item-image'>
                     <img src='./img/damac-hills2/image3.jpg' alt='img'/>
                  </div>
                  <div className='choise-home__list-item-discription'>
                     <h3>FIORA</h3>
                     <p>{t('damac-hills2-section6-item3')}</p>
                  </div>
               </div>
               <div className='choise-home__list-item'>
                  <div className='choise-home__list-item-image'>
                     <img src='./img/damac-hills2/image4.jpg' alt='img'/>
                  </div>
                  <div className='choise-home__list-item-discription'>
                     <h3>{t('damac-hills2-section6-item4.1')}</h3>
                     <p>{t('damac-hills2-section6-item4.2')}</p>
                  </div>
               </div>
            </section>
         </div>
         <div className='damac-hills2__faq dh2-faq'>
            <h2 className='dh2-faq__title'>{t('damac-hills2-section7-title')}</h2>
            <div className='dh2-faq__list'>
               <div className='dh2-faq__list-item'>
                  <h3>{t('damac-hills2-section7-item1.1')}</h3>
                  <p>{t('damac-hills2-section7-item1.2')}</p>
               </div>
               <div className='dh2-faq__list-item'>
               <h3>{t('damac-hills2-section7-item2.1')}</h3>
                  <p>{t('damac-hills2-section7-item2.2')}</p>
               </div>
            </div>
         </div>
         <div className='damac-hills2__reasoans1 reasons'>
         <div className='reasons__text'>
            <span className='reasons__overhead'>{t('damac-hills2-section8-overhead')}</span>
            <h2 className='reasons__title'>{t('damac-hills2-section8-title')}</h2>
            <ul className='reasons__list'>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon2.1.png' alt='img'/>
            </div>
            <span>{t('damac-hills2-section8-item1.1')}</span>
            <p>{t('damac-hills2-section8-item1.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon2.2.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section8-item2.1')}</span>
            <p>{t('damac-hills2-section8-item2.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon2.3.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section8-item3.1')}</span>
            <p>{t('damac-hills2-section8-item3.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon2.4.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section8-item4.1')}</span>
            <p>{t('damac-hills2-section8-item4.2')}</p>
            </li>
            </ul>
         </div>
         <div className='reasons__image'>
            <img src='./img/damac-hills2/flex3.jpg' alt='img'/>
         </div>
         </div>
         <div className='damac-hills2__reasoans2 reasons'>
         <div className='reasons__text'>
            <ul className='reasons__list'>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon3.1.png' alt='img'/>
            </div>
            <span>{t('damac-hills2-section9-item1.1')}</span>
            <p>{t('damac-hills2-section9-item1.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon3.2.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section9-item2.1')}</span>
            <p>{t('damac-hills2-section9-item2.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon3.3.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section9-item3.1')}</span>
            <p>{t('damac-hills2-section9-item3.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon3.4.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section9-item4.1')}</span>
            <p>{t('damac-hills2-section9-item4.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon3.5.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section9-item5.1')}</span>
            <p>{t('damac-hills2-section9-item5.2')}</p>
            </li>
            <li className='reasons__list-item'>
            <div>
            <img src='./img/damac-hills2/icon3.6.png' alt='img'/>
            </div>            
            <span>{t('damac-hills2-section9-item6.1')}</span>
            <p>{t('damac-hills2-section9-item6.2')}</p>
            </li>
            </ul>
         </div>
         <div className='reasons__image'>
            <img src='./img/damac-hills2/flex4.jpg' alt='img'/>
         </div>
         </div>
         </div>
      </div>
      </div>
      <div className='damac-hills2__properties properties'>
      <img className='properties__bg-image' src='./img/damac-hills2/big-image2.jpg' alt='img'/>
      <div className='properties__text'>
         <h2 className='properties__title'>{t('damac-hills2-section10-title')}</h2>
         <p className='properties__txt'>{t('damac-hills2-section10-txt')}</p>
         <ul className='properties__list'>
            <li className='properties__list-item'>
            <img src='./img/damac-hills2/icon4.1.png' alt='img'/>
            <div>
               <h4>43,700</h4>
               <span>{t('damac-hills2-section10-list-item1')}</span>
            </div>
            </li>
            <li className='properties__list-item'>
            <img src='./img/damac-hills2/icon4.2.png' alt='img'/>
            <div>
               <h4>28,000</h4>
               <span>{t('damac-hills2-section10-list-item2')}</span>
            </div>
            </li>
            <li className='properties__list-item'>
            <img src='./img/damac-hills2/icon4.3.png' alt='img'/>
            <div>
               <h4>100+</h4>
               <span>{t('damac-hills2-section10-list-item3')}</span>
            </div>
            </li>
         </ul>
         <span>{t('damac-hills2-section10-span')}</span>
      </div>
      <div className='damac-hills2__last-block'>
      <h2 className='damac-hills2__last-title'>{t('damac-hills2-section10-title2')}</h2>
      <div className='damac-hills2__last-list'>
      <img src='./img/damac-hills2/icon5.1.png' alt='img'/>
      <img src='./img/damac-hills2/icon5.2.png' alt='img'/>
      <img src='./img/damac-hills2/icon5.3.png' alt='img'/>
      </div>
      </div>
      </div>
      </div>
   )
}

export default DamacHills2;