import Nav from '../../Header/Nav/Nav';
import './commonStyles.sass';
import './damacMain.sass';
import DamacPage from './Damac-pages/DamacPage';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const DamacMain = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
return(
   <div className='damac'>
      <Nav/>
      <div className='banner'>
      <img className='banner-image' src='./img/damac-page-image/main.png' alt='img'/>
      <div className='damac__logo'>
      <img src='./img/damac-page-image/logo.png' alt='img'/>
      </div>
      </div>
      <div className='container'>
      <h2 className='damac__title'>{t('damac-title')}</h2>
      <div className='damac-pages'>
      <Link to='/safa one'>
      <DamacPage image={'./img/damac-page-image/page1.png'} name={'Safa one'} price={`${t('beginning')} AED 1.6 million`} discription={t('damac-card1')}/>
      </Link>
      <Link to='/chick tower'>
      <DamacPage image={'./img/damac-page-image/page2.png'} name={'Chic Tower'} price={`${t('beginning')} AED 840,000`} discription={t('damac-card2')}/>
      </Link>
      <Link to='/cavalli couture'>
      <DamacPage image={'./img/damac-page-image/page3.jpg'} name={'Cavalli Couture'} price={`${t('beginning')} AED 16.5 million`} discription={t('damac-card3')}/>
      </Link>
      <Link to='/damac lagoons'>
      <DamacPage image={'./img/damac-page-image/page4.png'} name={'Damac Lagoons'} price={`${t('beginning')} AED 1.5 million`} discription={t('damac-card4')}/>
      </Link>
      <Link to='/damac bay'>
      <DamacPage image={'./img/damac-page-image/page5.png'} name={'Damac Bay'}  discription={t('damac-card5')}/>
      </Link>
      <Link to='/damac bay2'>
      <DamacPage image={'./img/damac-page-image/page6.png'} name={'Damac Bay 2'}  discription={t('damac-card6')}/>
      </Link>
      <Link to='/damac hills2'>
      <DamacPage image={'./img/damac-page-image/page7.jpg'} name={'Damac Hills 2'} price={`${t('beginning')} AED 1.3 million`} discription={t('damac-card7')}/>
      </Link>
      </div>
      </div>
   </div>
)
}

export default DamacMain;