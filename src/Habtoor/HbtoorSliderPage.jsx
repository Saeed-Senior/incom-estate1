import Nav from '../Header/Nav/Nav';
import {useEffect} from 'react';
import './../Cards/cards.sass';

const images = [];
   for(let i = 1; i <= 34; i++){
      images.push(i);
   }

const HabtoorSliderPage = ({title}) => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
      {images.map(item => {
         return <img key={item} className='cards-slider-page-image' src={`./img/pdf-images/habtoor/habtoor (${item}).png`} alt='img'/>
      })}
      </div>
      </>
   )
}

export default HabtoorSliderPage;