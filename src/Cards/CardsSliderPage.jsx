import { useEffect } from 'react';
import Nav from '../Header/Nav/Nav';
import './cards.sass';

const CardsSliderPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
         <img className='cards-slider-page-image' src='./img/cards/riviera1.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/riviera2.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/riviera3.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/riviera4.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/riviera5.png' alt='img'/>
      </div>
      </>
   )
}

export default CardsSliderPage;