import Nav from '../Header/Nav/Nav';
import {useEffect} from 'react';
import './../Cards/cards.sass';

const images = [];
   for(let i = 1; i <= 25; i++){
      images.push(i);
   }

const SariSliderPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
      {images.map(item => {
         return <img key={item} className='cards-slider-page-image' src={`./img/pdf-images/adhara/adhara (${item}).png`} alt='img'/>
      })}
      </div>
      </>
   )
}

export default SariSliderPage;