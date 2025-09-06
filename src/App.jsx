import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Contact from './views/contact'
import Home from './views/home'
import NotFound from './views/not-found'
import Privacy from './views/privacy'
import Services from './views/services'
import OurProduct from './views/our-product'
import PrivacyBanner from './components/PrivacyBanner';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <PrivacyBanner />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-product" element={<OurProduct />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
