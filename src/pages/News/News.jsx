import { useTranslation } from 'react-i18next';
import Nav from "../../Header/Nav/Nav";
import { useEffect } from "react";
import NewsCard from './NewsCard';
import { HashLink as Link } from 'react-router-hash-link';
import './news.sass'

const News = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className='news'>
      <Nav/>
         <div className='wrap'>
         <div className='news__wrap'>
         <ul className='news__nav'>
            <Link to='/'>
            <li>{t('home')}</li>
            </Link>
            <li>&#707;</li>
            <Link to='/news'>
            <li>{t('news')}</li>
            </Link>
         </ul>
         <h1 className='news__title'>{t('news-title')}</h1>
         <div className='news__cards'>
         <Link to='/news1'>
         <NewsCard image={'./img/news/news1.png'} title={t('news-card1-title')} theme={t('news-card1-theme')} text={t('news-card1-text')}/>
         </Link>
         <Link to='/news2'>
         <NewsCard image={'./img/news/news2.png'} title={t('news-card2-title')} theme={t('news-card2-theme')} text={t('news-card2-text')}/>
         </Link>
            <NewsCard image={'./img/news/news3.png'} title={t('news-card3-title')} theme={t('news-card3-theme')} text={t('news-card3-text')}/>
         </div>
         </div>
         </div>
      </div>
   )
}

export default News;