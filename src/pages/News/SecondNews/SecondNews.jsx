import { useTranslation } from 'react-i18next';
import Nav from "../../../Header/Nav/Nav";
import { useEffect } from "react";
import NewsCard from '../NewsCard';
import SecondNewsCard from './SecondNewsCard';
import { HashLink as Link } from 'react-router-hash-link';
import '../news.sass';
import '../stylesNews/_stylesNews.sass';



const SecondNews = () => {
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
            <h2 className='fn-section__title'>{t('news-card2-title')}</h2>
            <p className='fn-section__over'>{t('news-card2-text')}</p>
            <img className='fn-section__image' src='./img/news/second-news/news2.1.png' alt='img'/>
         </div>
         <SecondNewsCard title={t('sn-section2-title')} image='./img/news/second-news/news2.2.png' li1={t('sn-section2-li1')} li2={t('sn-section2-li2')} li3={t('sn-section2-li3')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.1973,%2055.274243&t=%D0%91%D1%83%D1%80%D0%B4%D0%B6-%D0%A5%D0%B0%D0%BB%D0%B8%D1%84%D0%B0&a=1%20Sheikh%20Mohammed%20bin%20Rashid%20Blvd%20-%20Downtown%20Dubai')} linkText={t('1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai')}/>
         <SecondNewsCard title={t('sn-section3-title')} image='./img/news/second-news/news2.3.png' li1={t('sn-section3-li1')} li2={t('sn-section3-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.195856,%2055.276512&t=%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%84%D0%BE%D0%BD%D1%82%D0%B0%D0%BD&a=Financial%20Centre%20Road%20Dubai%20Mall')} linkText={t('Financial Centre Road Dubai Mall')}/>
         <SecondNewsCard title={t('sn-section4-title')} image='./img/news/second-news/news2.4.png' li1={t('sn-section4-li1')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.073882,%2055.134814&t=%D0%94%D1%83%D0%B1%D0%B0%D0%B9%20%D0%9C%D0%B0%D1%80%D0%B8%D0%BD%D0%B0&a=Al%20Marsa%20St.')} linkText={t('Al Marsa St.')}/>
         <SecondNewsCard title={t('sn-section5-title')} image='./img/news/second-news/news2.5.png' li1={t('sn-section5-li1')} li2={t('sn-section5-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.130411,%2055.117095&t=%D0%9E%D1%82%D0%B5%D0%BB%D1%8C%20%D0%90%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D1%81&a=Crescent%20Rd%20-%20The%20Palm%20Jumeirah')} linkText={t('Crescent Rd - The Palm Jumeirah')}/>
         <SecondNewsCard title={t('sn-section6-title')} image='./img/news/second-news/news2.6.png' li1={t('sn-section6-li1')} li2={t('sn-section6-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.235501,%2055.300404&t=%D0%A0%D0%B0%D0%BC%D0%BA%D0%B0%20%D0%94%D1%83%D0%B1%D0%B0%D1%8F&a=Sheikh%20Rashid%20Road%20Zabeel%20Park,%20Gate%204')} linkText={t('Sheikh Rashid Road Zabeel Park, Gate 4')}/>
         <SecondNewsCard title={t('sn-section7-title')} image='./img/news/second-news/news2.7.png' li1={t('sn-section7-li1')} li2={t('sn-section7-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.198625,%2055.279621&t=%D0%94%D1%83%D0%B1%D0%B0%D0%B9%20%D0%9C%D0%BE%D0%BB%D0%BB&a=Financial%20Center%20Street,%20Along%20Sheikh%20Zayed%20Road,%20Next%20to%20Burj%20Khalifa')} linkText={t('Financial Center Street, Along Sheikh Zayed Road, Next to Burj Khalifa')}/>
         <SecondNewsCard title={t('sn-section8-title')} image='./img/news/second-news/news2.8.png' li1={t('sn-section8-li1')} li2={t('sn-section8-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=24.412349,%2054.474365&t=%D0%9C%D0%B5%D1%87%D0%B5%D1%82%D1%8C%20%D1%88%D0%B5%D0%B9%D1%85%D0%B0%20%D0%97%D0%B0%D0%B9%D0%B4%D0%B0%20%D0%B2%20%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D0%B8&a=Sheikh%20Rashid%20Bin%20Saeed%20Street/5th%20St.,%20Abu%20Dhabi')} linkText={t('Sheikh Rashid Bin Saeed Street/5th St., Abu Dhabi')}/>
         <SecondNewsCard title={t('sn-section9-title')} image='./img/news/second-news/news2.9.png' li1={t('sn-section9-li1')} li2={t('sn-section9-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.141289,%2055.185314&t=%D0%91%D1%83%D1%80%D0%B4%D0%B6-%D1%8D%D0%BB%D1%8C-%D0%90%D1%80%D0%B0%D0%B1&a=Jumeirah%20St%20-%20Umm%20Suqeim%203')} linkText={t('Jumeirah St - Umm Suqeim 3')}/>
         <SecondNewsCard title={t('sn-section10-title')} image='./img/news/second-news/news2.10.png' li1={t('sn-section10-li1')} li2={t('sn-section10-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.133366,%2055.185997&t=%D0%9E%D0%B0%D0%B7%D0%B8%D1%81%20%D0%9C%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%20%D0%94%D0%B6%D1%83%D0%BC%D0%B5%D0%B9%D1%80%D0%B0&a=Madinat%20Jumeirah')} linkText={t('Madinat Jumeirah')}/>
         <SecondNewsCard title={t('sn-section11-title')} image='./img/news/second-news/news2.11.png' li1={t('sn-section11-li1')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.197619,%2055.278626&t=%D0%90%D0%BA%D0%B2%D0%B0%D1%80%D0%B8%D1%83%D0%BC%20%D0%94%D1%83%D0%B1%D0%B0%D0%B9%20%D0%9C%D0%BE%D0%BB%D0%BB&a=Financial%20Center%20Street,%20Along%20Sheikh%20Zayed%20Road,%20Next%20to%20Burj%20Khalifa')} linkText={t('Financial Center Street, Along Sheikh Zayed Road, Next to Burj Khalifa')}/>
         <SecondNewsCard title={t('sn-section12-title')} image='./img/news/second-news/news2.12.png' li1={t('sn-section12-li1')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.082953,%2055.135355&t=%D0%9F%D0%BB%D1%8F%D0%B6%20%D0%9C%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D0%91%D0%B8%D1%87&a=The%20Walk')} linkText={t('The Walk')}/>
         <SecondNewsCard title={t('sn-section13-title')} image='./img/news/second-news/news2.13.png' li1={t('sn-section13-li1')} li2={t('sn-section13-li2')} li3={t('sn-section13-li3')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.235664,%2055.296966&t=%D0%9F%D0%B0%D1%80%D0%BA%20%D0%97%D0%B0%D0%B1%D0%B8%D0%BB%D1%8C&a=D%2075')} linkText={t('D 75')}/>
         <SecondNewsCard title={t('sn-section14-title')} image='./img/news/second-news/news2.14.png' li1={t('sn-section14-li1')} li2={t('sn-section14-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.194104,%2055.27906&t=Address%20Downtown&a=Sheikh%20Mohammed%20Bin%20Rashid%20Boulevard,%20Downtown,%20123234,%20Dubai%20Center')} linkText={t('Sheikh Mohammed Bin Rashid Boulevard, Downtown, 123234, Dubai Center')}/>
         <SecondNewsCard title={t('sn-section15-title')} image='./img/news/second-news/news2.15.png' li1={t('sn-section15-li1')} li2={t('sn-section15-li2')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=25.132161,%2055.117993&t=%D0%90%D0%BA%D0%B2%D0%B0%D1%80%D0%B8%D1%83%D0%BC%20The%20Lost%20Chambers&a=Crescent%20Rd%20-%20The%20Palm%20Jumeirah')} linkText={t('Crescent Rd - The Palm Jumeirah')}/>
         <SecondNewsCard title={t('sn-section16-title')} image='./img/news/second-news/news2.16.png' li1={t('sn-section16-li1')} li2={t('sn-section16-li2')} li3={t('sn-section16-li3')} cardLink={t('https://extraguide.ru/sightmap/?z=14&pt=24.483702,%2054.607041&t=%D0%9F%D0%B0%D1%80%D0%BA%20%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9%20Ferrari%20World%20%D0%B2%20%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D0%B8&a=Yas%20Island,%20Abu%20Dhabi')} linkText={t('Yas Island, Abu Dhabi')}/>
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

export default SecondNews;