import Nav from '../Header/Nav/Nav';
import './../Cards/cards.sass';

const SariSliderPage = () => {
   return(
      <>
      <Nav/>
      <div className='cards-slider-page'>
         <img className='cards-slider-page-image' src='./img/cards/sari1.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/sari2.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/sari3.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/sari4.png' alt='img'/>
         <img className='cards-slider-page-image' src='./img/cards/sari5.png' alt='img'/>
      </div>
      </>
   )
}

export default SariSliderPage;