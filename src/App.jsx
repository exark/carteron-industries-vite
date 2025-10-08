import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"

import Contact from './views/contact'
import Home from './views/home'
import NotFound from './views/not-found'
import Privacy from './views/privacy'
import Terms from './views/terms'
import OurProduct from './views/our-product'
import FAQ from './views/faq'
import NotreEntreprise from './views/notre-entreprise'
import ProductDetail from './views/product-detail'
import ProductDetailDynamic from './views/product-detail-dynamic'
import ConstructionPage from './views/construction-page'
import PrivacyBanner from './components/PrivacyBanner';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';

const AppContent = () => {
  const location = useLocation();
  
  // Pages that should NOT show the splash screen
  const noSplashPages = ['/privacy', '/terms'];
  const shouldShowSplash = !noSplashPages.includes(location.pathname);

  const routes = (
    <>
      <PrivacyBanner />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/our-product" element={<OurProduct />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/notre-entreprise" element={<NotreEntreprise />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product/:productSlug" element={<ProductDetailDynamic />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );

  return shouldShowSplash ? (
    <SplashScreen>{routes}</SplashScreen>
  ) : (
    routes
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
      <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
