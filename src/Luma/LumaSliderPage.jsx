import Nav from '../Header/Nav/Nav';
import './../Cards/cards.sass';

const SariSliderPage = () => {
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
         <img className='cards-slider-page-image' src='./img/luma/luma1.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/luma/luma2.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/luma/luma3.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/luma/luma4.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/luma/luma5.png' alt='img'/>
      </div>
      </>
   )
}

export default SariSliderPage;