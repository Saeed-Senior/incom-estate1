import Nav from '../Header/Nav/Nav';
import {useEffect} from 'react';
import './../Cards/cards.sass';

const SariSliderPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma1.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma2.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma3.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma4.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma5.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma6.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma7.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma8.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma9.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma10.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma11.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma12.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma13.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma14.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma15.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma16.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma17.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma18.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma19.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma20.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma21.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma22.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma23.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma24.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma25.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma26.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma27.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma28.png' alt='img'/>
      <img className='cards-slider-page-image' src='./img/pdf-images/luma29.png' alt='img'/>
      </div>
      </>
   )
}

export default SariSliderPage;