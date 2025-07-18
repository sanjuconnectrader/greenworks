
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Pricingpage from './pages/Pricingpage';
import Servicepage from './pages/Servicepage';
import Aboutpage from './pages/Aboutpage';
import PrivacyPolicy from './components/Privacy/PrivacyPolicy';
import Privacypage from './pages/Privacypage';




const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/pricing-details' element={<Pricingpage />} />
        <Route path='/services' element={<Servicepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/privacy' element={<Privacypage />} />




      </Routes>
    </>
  );
};

export default App;
