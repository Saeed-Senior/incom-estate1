import Nav from '../Header/Nav/Nav';
import './../Cards/cards.sass';
import { useEffect } from 'react';

const HillsSliderPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
         <img className='cards-slider-page-image' src='./img/cards/hills1.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/hills2.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/hills3.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/hills4.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/hills5.png' alt='img'/>
      </div>
      </>
   )
}

export default HillsSliderPage;