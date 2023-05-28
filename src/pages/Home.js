import { useEffect } from 'react';
import Cards from '../Cards/Cards';
import ProjectsCard from '../Damac/ProjectsCard';
import Faq from '../Faq/Faq';
import Header from '../Header/Header';
import Hills from '../Hills/Hills';
import Investment from '../Investment/Investment';
import RealEstate from '../RealEstate/RealEstate';
import Sari from '../Sari/Sari';
import Luma from '../Luma/Luma';
import Services from '../Services/Services';
import Form from '../Form/Form';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <RealEstate />
      <Cards />
      <Investment />
      <Hills />
      <Sari />
      <Luma />
      <div className='show-cards'>
      <ProjectsCard link='/damac' image='./img/projects-cards/1.jpg' title={'DAMAC Properties'}/>
      <ProjectsCard link='' image='./img/projects-cards/2.png' title={'Iman Developers'}/>
      <ProjectsCard link='' image='./img/projects-cards/3.jpg' title={'Oro24 Developments'}/>
      </div>
      <Services />
      <Form/>
      <Faq />
    </div>
  );
};
export default Home;
