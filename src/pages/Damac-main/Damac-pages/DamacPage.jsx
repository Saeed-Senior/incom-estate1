import '../damacMain.sass'

const DamacPage = ({image, name, price, discription,}) => {
   return(
      <div className='damac-page'>
         <img src={image} alt='img'/>
      <span className='damac-page__OAE'>OAE</span>
      <h3>{name}</h3>
      <span className='damac-page__price'>{price}</span>
      <span className='damac-page__discription'>{discription}</span>
      </div>
   )
}

export default DamacPage;