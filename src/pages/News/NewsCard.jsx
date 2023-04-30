import './news.sass'

const NewsCard = ({image, title, theme, text}) => {
   return(
      <div className='news-card'>
         <div className='news-card__image'>
         <img src={image} alt='img'/>
         </div>
         <h3 className='news-card__theme'>{theme}</h3>
         <h2 className='news-card__title'>{title}</h2>
         <p className='news-card__txt'>{text}</p>
      </div>
   )
}

export default NewsCard;