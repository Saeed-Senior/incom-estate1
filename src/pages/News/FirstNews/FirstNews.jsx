import { useTranslation } from 'react-i18next';
import Nav from "../../../Header/Nav/Nav";
import { useEffect } from "react";
import NewsCard from '../NewsCard';
import { HashLink as Link } from 'react-router-hash-link';
import '../news.sass';
import '../stylesNews/_stylesNews.sass';



const FirstNews = () => {
   const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return(
      <div className='first-news'>
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
         <div className='first-news__section fn-section'>
            <h2 className='fn-section__title'>{t('fn-section1-title')}</h2>
            <img className='fn-section__image' src='./img/news/news1.png' alt='img'/>
            <p className='fn-section__txt'>{t('fn-section1-txt')}</p>
         </div>
         <div className='first-news__section fn-section'>
            <h2 className='fn-section__title'>{t('fn-section2-title')}</h2>
            <div className='fn-section__text-wrap'>
            <ul className='fn-section__list'>
               <li>{t('fn-section2-list-item1')}</li>
               <li>{t('fn-section2-list-item2')}</li>
               <li>{t('fn-section2-list-item3')}</li>
            </ul>
            </div>
            <img className='fn-section__image' src='./img/news/first-news/2.png' alt='img'/>
            <p className='fn-section__txt'>{t('fn-section2-txt')}</p>
         </div>
         <div className='first-news__section fn-section'>
            <h2 className='fn-section__title'>{t('fn-section3-title')}</h2>
            <div className='fn-section__text-wrap'>
            <p className='fn-section__text'>{t('fn-section3-text')}</p>
            <ul className='fn-section__list'>
               <li><span>{t('fn-section3-list-item1.1')} </span>
               {t('fn-section3-list-item1.2')}</li>
               <li><span>{t('fn-section3-list-item2.1')} </span>
               {t('fn-section3-list-item2.2')}</li>
               <li><span>{t('fn-section3-list-item3.1')} </span>
               {t('fn-section3-list-item3.2')}</li>
               <li><span>{t('fn-section3-list-item4.1')} </span>
               {t('fn-section3-list-item4.2')}</li>
               <li><span>{t('fn-section3-list-item5.1')} </span>
               {t('fn-section3-list-item5.2')}</li>
               <li><span>{t('fn-section3-list-item6.1')} </span>
               {t('fn-section3-list-item6.2')}</li>
               <li><span>{t('fn-section3-list-item7.1')} </span>
               {t('fn-section3-list-item7.2')}</li>
               <li><span>{t('fn-section3-list-item8.1')} </span>
               {t('fn-section3-list-item8.2')}</li>
               <li><span>{t('fn-section3-list-item9.1')} </span>
               {t('fn-section3-list-item9.2')}</li>
               <li><span>{t('fn-section3-list-item10.1')} </span>
               {t('fn-section3-list-item10.2')}</li>
            </ul>
            </div>
            <img className='fn-section__image' src='./img/news/first-news/3.png' alt='img'/>
            <p className='fn-section__txt'>{t('fn-section3-txt')}</p>
         </div>
         <div className='first-news__section fn-section'>
            <h2 className='fn-section__title'>{t('fn-section4-title')}</h2>
            <div className='fn-section__text-wrap'>
            <p className='fn-section__text'>{t('fn-section4-text')}</p>
            <ul className='fn-section__list'>
               <li><span>{t('fn-section4-list-item1.1')} </span>
               {t('fn-section4-list-item1.2')}</li>
               <li><span>{t('fn-section4-list-item2.1')} </span>
               {t('fn-section4-list-item2.2')}</li>
               <li><span>{t('fn-section4-list-item3.1')} </span>
               {t('fn-section4-list-item3.2')}</li>
               <li><span>{t('fn-section4-list-item4.1')} </span>
               {t('fn-section4-list-item4.2')}</li>
               <li><span>{t('fn-section4-list-item5.1')} </span>
               {t('fn-section4-list-item5.2')}</li>
               <li><span>{t('fn-section4-list-item6.1')} </span>
               {t('fn-section4-list-item6.2')}</li>
               <li><span>{t('fn-section4-list-item7.1')} </span>
               {t('fn-section4-list-item7.2')}</li>
               <li><span>{t('fn-section4-list-item8.1')} </span>
               {t('fn-section4-list-item8.2')}</li>
            </ul>
            </div>
            <img className='fn-section__image' src='./img/news/first-news/4.jpg' alt='img'/>
            <p className='fn-section__txt'>{t('fn-section4-txt')}</p>
         </div>
         <div className='first-news__section fn-section'>
            <h2 className='fn-section__title'>{t('fn-section5-title')}</h2>
            <div className='fn-section__text-wrap'>
            <p className='fn-section__text'>{t('fn-section5-text')}</p>
            <ul className='fn-section__list'>
               <li><span>{t('fn-section5-list-item1.1')} </span>
               {t('fn-section5-list-item1.2')}</li>
               <li><span>{t('fn-section5-list-item2.1')} </span>
               {t('fn-section5-list-item2.2')}</li>
               <li><span>{t('fn-section5-list-item3.1')} </span>
               {t('fn-section5-list-item3.2')}</li>
               <li><span>{t('fn-section5-list-item4.1')} </span>
               {t('fn-section5-list-item4.2')}</li>
               <li><span>{t('fn-section5-list-item5.1')} </span>
               {t('fn-section5-list-item5.2')}</li>
            </ul>
            </div>
            <img className='fn-section__image' src='./img/news/first-news/5.png' alt='img'/>
            <p className='fn-section__txt'>{t('fn-section5-txt')}</p>
         </div>
         <div className='first-news__section fn-section'>
            <h2 className='fn-section__title'>{t('fn-section5-title')}</h2>
            <div className='fn-section__text-wrap'>
            <ul className='fn-section__list'>
               <li><span>{t('fn-section6-list-item1.1')} </span>
               {t('fn-section6-list-item1.2')}</li>
               <li><span>{t('fn-section6-list-item2.1')} </span>
               {t('fn-section6-list-item2.2')}</li>
               <li><span>{t('fn-section6-list-item3.1')} </span>
               {t('fn-section6-list-item3.2')}</li>
               <li><span>{t('fn-section6-list-item4.1')} </span>
               {t('fn-section6-list-item4.2')}</li>
               <li><span>{t('fn-section6-list-item5.1')} </span>
               {t('fn-section6-list-item5.2')}</li>
               <li><span>{t('fn-section6-list-item6.1')} </span>
               {t('fn-section6-list-item6.2')}</li>
            </ul>
            </div>
            <img className='fn-section__image' src='./img/news/first-news/6.png' alt='img'/>
            <p className='fn-section__txt'>{t('fn-section6-txt')}</p>
         </div>
         <h2 className='news__cards-read-more'>{t('read-also')}</h2>
         <div className='news__cards'>
         <Link to='/news1'>
         <NewsCard image={'./img/news/news1.png'} title={t('news-card1-title')} theme={t('news-card1-theme')} text={t('news-card1-text')}/>
         </Link>
         <Link to='/news2'>
         <NewsCard image={'./img/news/news2.png'} title={t('news-card2-title')} theme={t('news-card2-theme')} text={t('news-card2-text')}/>
         </Link>
         </div>
         </div>
         </div>
      </div>
   )
}

export default FirstNews;