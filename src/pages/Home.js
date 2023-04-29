import { useEffect } from 'react';
import Cards from '../Cards/Cards';
import ProjectsCard from '../Damac/ProjectsCard';
import Faq from '../Faq/Faq';
import Header from '../Header/Header';
import Hills from '../Hills/Hills';
import Investment from '../Investment/Investment';
import RealEstate from '../RealEstate/RealEstate';
import Sari from '../Sari/Sari';
import Services from '../Services/Services';
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
      <ProjectsCard link='/damac' image='./img/projects-cards/1.jpg' title={'DAMAC Properties'}/>
      <ProjectsCard link='' image='./img/projects-cards/2.jpg' title={'Iman Developers'}/>
      <ProjectsCard link='' image='./img/projects-cards/3.jpg' title={'Oro24 Developments'}/>
      <Services />
      <Faq />
    </div>
  );
};
export default Home;
