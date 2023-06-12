import Footer from './Footer/Footer';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound'
import About from './pages/About';
import News from './pages/News/News';
import Damac from './pages/Damac-main/DamacMain';

import CardsSliderPage from './Cards/CardsSliderPage';
import HillsSliderPage from './Hills/HillsSliderPage';
import InvestmentSliderPage from './Investment/InvestmentSliderPage';
import SariSliderPage from './Sari/SariSliderPage';
import LumaSliderPage from './Luma/LumaSliderPage';


import SafaOne from './pages/Damac-main/Damac-pages/SafaOne/SafaOne';
import ChickTower from './pages/Damac-main/Damac-pages/ChickTower/ChickTower';
import CavalliCouture from './pages/Damac-main/Damac-pages/CavalliCouture/CavalliCouture';
import DamacLagoons from './pages/Damac-main/Damac-pages/DamacLagoons/DamacLagoons';
import DamacBay from './pages/Damac-main/Damac-pages/DamacBay/DamacBay';
import DamacBay2 from './pages/Damac-main/Damac-pages/DamacBay2/DamacBay2';
import DamacHills2 from './pages/Damac-main/Damac-pages/DamacHills2/DamacHills2';

import FirstNews from './pages/News/FirstNews/FirstNews';
import SecondNews from './pages/News/SecondNews/SecondNews';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/damac" element={<Damac/>}/>

        <Route path="/safa one" element={<SafaOne/>}/>
        <Route path="/chick tower" element={<ChickTower/>}/>
        <Route path="/cavalli couture" element={<CavalliCouture/>}/>
        <Route path="/damac lagoons" element={<DamacLagoons/>}/>
        <Route path="/damac bay" element={<DamacBay/>}/>
        <Route path="/damac bay2" element={<DamacBay2/>}/>
        <Route path="/damac hills2" element={<DamacHills2/>}/>

        <Route path="/slider1" element={<CardsSliderPage />} />
        <Route path="/slider2" element={<HillsSliderPage />} />
        <Route path="/slider3" element={<InvestmentSliderPage />} />
        <Route path="/slider4" element={<SariSliderPage />} />
        <Route path="/slider5" element={<LumaSliderPage />}/>

        <Route path="/news1" element={<FirstNews />} />
        <Route path="/news2" element={<SecondNews />} />

        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Link to=''>
      <a href='https://wa.me/+971554290826' class="fixed-component">
        <img src='img/footer/whatsapp.png' alt='img'/>
      </a>
      </Link>
      <Footer />
    </div>
  );
};

export default App;
