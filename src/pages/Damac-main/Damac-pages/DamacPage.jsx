import '../damacMain.sass'

const DamacPage = ({image, name, price, discription,}) => {
   return(
      <div className='damac-page'>
         <div className='damac-page__image'><img src={image} alt='img'/></div>
      <span className='damac-page__OAE'>OAE</span>
      <h3>{name}</h3>
      <span className='damac-page__price'>{price}</span>
      <span className='damac-page__discription'>{discription}</span>
      </div>
   )
}

export default DamacPage;