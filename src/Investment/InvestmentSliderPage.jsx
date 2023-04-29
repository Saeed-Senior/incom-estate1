import Nav from '../Header/Nav/Nav';
import './../Cards/cards.sass';
import { useEffect } from 'react';

const InvestmentSliderPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
         <img className='cards-slider-page-image' src='./img/cards/reve1.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/reve2.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/reve3.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/reve4.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/reve5.png' alt='img'/>
      </div>
      </>
   )
}

export default InvestmentSliderPage;