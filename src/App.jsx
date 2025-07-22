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
import PrivacyBanner from './components/PrivacyBanner';

const App = () => {
  return (
    <BrowserRouter>
      <PrivacyBanner />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
