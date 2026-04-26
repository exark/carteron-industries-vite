import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import NotFound from './pages/error/not-found'
import Privacy from './pages/legal/privacy'
import Terms from './pages/legal/terms'
import OurProduct from './pages/products/our-product'
import FAQ from './pages/faq'
import NotreEntreprise from './pages/company/notre-entreprise'
import ProductDetail from './pages/products/product-detail'
import ProductDetailDynamic from './pages/products/product-detail-dynamic'
import ConstructionPage from './pages/error/construction-page'
import PrivacyBanner from './components/ui/PrivacyBanner';
import ScrollToTop from './components/ui/ScrollToTop';
import SplashScreen from './components/ui/SplashScreen';
import ProtectedRoute from './components/layout/ProtectedRoute';
import ClubSurveyPage from './pages/survey/ClubSurveyPage';
import FamilySurveyPage from './pages/survey/FamilySurveyPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

// Create custom Material-UI theme with Inter font
const theme = createTheme({
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    allVariants: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      },
    },
  },
});

const AppContent = () => {
  const location = useLocation();
  
  // Pages that should NOT show the splash screen
  const noSplashPages = ['/privacy', '/terms', '/survey/club', '/survey/family', '/admin/login', '/admin/dashboard'];
  const shouldShowSplash = !noSplashPages.some((p) => location.pathname.startsWith(p));

  const routes = (
    <>
      <PrivacyBanner />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/our-product" element={<OurProduct />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/notre-entreprise" element={<NotreEntreprise />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
        {/* <Route path="/product/:productSlug" element={<ProductDetailDynamic />} /> */}
        <Route path="/construction" element={<ConstructionPage />} />
        {/* Survey routes */}
        <Route path="/survey/club" element={<ClubSurveyPage />} />
        <Route path="/survey/family" element={<FamilySurveyPage />} />
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<Navigate to="/admin/login" />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );

  return (
    <>
      {shouldShowSplash ? (
        <SplashScreen>{routes}</SplashScreen>
      ) : (
        routes
      )}
      <ScrollToTop />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent />
        <SpeedInsights />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
