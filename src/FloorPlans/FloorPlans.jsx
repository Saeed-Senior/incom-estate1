import { useTranslation } from 'react-i18next';
import './floorPlans.sass';
const { useState } = require("react");




const FloorPlans = ({title1, title2, title3, image1, image2, image3}) => {

   const [floor, setFloor] = useState(image1);
   const { t } = useTranslation();
   function handleClick(img){
      setFloor(img);
   };

   return(
      <>
      <h2>{t('floor-plans')}</h2>
      <div className='floor-plan'>
         <ul>
            <li className={floor === image1 ? "floor-name active" : "floor-name"} onClick={() => handleClick(image1)}>{title1}</li>
            <li className={floor === image2 ? "floor-name active" : "floor-name"} onClick={() => handleClick(image2)}>{title2}</li>
            <li className={floor === image3 ? "floor-name active" : "floor-name"} onClick={() => handleClick(image3)}>{title3}</li>
         </ul>
         <div className="floor">
            <img src={floor} alt='img'/>
         </div>
      </div>
      </>
   )
}

export default FloorPlans;