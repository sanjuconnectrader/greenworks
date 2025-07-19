
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Pricingpage from './pages/Pricingpage';
import Servicepage from './pages/Servicepage';
import Aboutpage from './pages/Aboutpage';
import Privacypage from './pages/Privacypage';
import Termspage from './pages/Termspage';
import TermsAndConditions from './components/Terms/TermsAndConditions';




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
        <Route path='/terms' element={<Termspage/>} />




      </Routes>
    </>
  );
};

export default App;
