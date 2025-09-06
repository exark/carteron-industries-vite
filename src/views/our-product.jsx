import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import "./our-product.css";

export default function OurProduct() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar81 />

      {/* Hero Section */}
      <Box
        className="product-hero"
        sx={{
          position: 'relative',
          height: '60vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          background: 'linear-gradient(135deg, #0b2244 0%, #21517a 100%)'
        }}
      >
        {/* Overlay pattern */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'url("/images/Prototype.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }} />

        {/* Content */}
        <Box sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          padding: 4
        }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              color: 'white'
            }}
          >
            {t('our_product.page_title', 'Notre Produit')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              color: 'white'
            }}
          >
            {t('our_product.page_subtitle', 'Bientôt disponible')}
          </Typography>
        </Box>
      </Box>

      <div className="product-page">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#0b2244'
              }}
            >
              {t('our_product.coming_soon_title', 'En cours de développement')}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                maxWidth: '800px',
                margin: '0 auto',
                color: '#555'
              }}
            >
              {t('our_product.coming_soon_text', 'Nous travaillons actuellement sur notre nouveau produit innovant. Revenez bientôt pour découvrir toutes les fonctionnalités et avantages que nous préparons pour vous.')}
            </Typography>
          </Box>
          
          {/* Product showcase section */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 8 }}>
            <Box sx={{ flex: 1 }}>
              <Box
                component="img"
                src="/images/Prototype.webp"
                alt={t('our_product.product_prototype_alt')}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '350px',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  },
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </Box>
            
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h4" sx={{ mb: 2, color: '#0b2244', fontWeight: 600 }}>
                {t('our_product.features_title', 'Caractéristiques principales')}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                {[1, 2, 3, 4].map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ 
                      minWidth: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      backgroundColor: '#0b2244', 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      {item}
                    </Box>
                    <Typography>
                      {t(`our_product.feature${item}`, `Caractéristique ${item}`)}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                href="https://www.example.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  alignSelf: { xs: 'center', md: 'flex-start' },
                  mt: 2,
                  backgroundColor: '#0b2244',
                  '&:hover': {
                    backgroundColor: '#21517a'
                  },
                  fontWeight: 600,
                  px: 4,
                  py: 1.5
                }}
              >
                {t('our_product.ecommerce_button', 'Visiter notre boutique en ligne')}
                <Box component="span" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                  <OpenInNewIcon fontSize="small" />
                </Box>
              </Button>
            </Box>
          </Box>
          
          {/* Technical specifications section */}
          <Box sx={{ mt: 10, mb: 6 }}>
            <Typography variant="h4" sx={{ mb: 4, color: '#0b2244', fontWeight: 600, textAlign: 'center' }}>
              {t('our_product.specs_title', 'Spécifications techniques')}
            </Typography>
            
            <Box className="specs-container" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
              <Box className="spec-item">
                <Typography variant="h6" sx={{ color: '#0b2244', mb: 1 }}>
                  {t('our_product.dimensions_title', 'Dimensions')}
                </Typography>
                <Typography variant="body1">
                  {t('our_product.dimensions_content', '45cm x 30cm x 20cm')}
                </Typography>
              </Box>
              
              <Box className="spec-item">
                <Typography variant="h6" sx={{ color: '#0b2244', mb: 1 }}>
                  {t('our_product.weight_title', 'Poids')}
                </Typography>
                <Typography variant="body1">
                  {t('our_product.weight_content', '2.5 kg')}
                </Typography>
              </Box>
              
              <Box className="spec-item">
                <Typography variant="h6" sx={{ color: '#0b2244', mb: 1 }}>
                  {t('our_product.battery_title', 'Batterie')}
                </Typography>
                <Typography variant="body1">
                  {t('our_product.battery_content', 'Lithium-ion, 5000mAh, autonomie de 8 heures')}
                </Typography>
              </Box>
              
              <Box className="spec-item">
                <Typography variant="h6" sx={{ color: '#0b2244', mb: 1 }}>
                  {t('our_product.materials_title', 'Matériaux')}
                </Typography>
                <Typography variant="body1">
                  {t('our_product.materials_content', 'Aluminium, plastique renforcé, tissu imperméable')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      
      <Footer31 />
    </>
  );
}
