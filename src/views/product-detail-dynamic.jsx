import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import ConstructionTemp from "../components/ConstructionTemp";
import { getProductBySlug } from "../data/products";
import "./product-detail.css";

export default function ProductDetailDynamic() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productSlug } = useParams();
  
  const product = getProductBySlug(productSlug);

  // Scroll to top instantly when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-fade-in'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [product]);

  // If product not found, show 404 or redirect
  if (!product) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {t('product_detail.not_found', 'Produit non trouvé')}
        </Typography>
        <Button onClick={() => navigate('/our-product')}>
          {t('product_detail.back_to_products', 'Retour aux produits')}
        </Button>
      </div>
    );
  }

  // If product is under construction, show construction page
  if (product.status === 'construction') {
    return <ConstructionTemp />;
  }

  const handleGoBack = () => {
    navigate('/our-product');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0);
  };

  const features = product.features.map((featureKey, index) => 
    t(`${product.translationKey}.features.${featureKey}`, `Feature ${index + 1}`)
  );

  const specifications = Object.entries(product.specifications)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => ({
      label: t(`${product.translationKey}.specs.${key}`, key),
      value: value
    }));

  return (
    <>
      <Navbar81>
        <Box sx={{ backgroundColor: 'white', minHeight: '100vh', width: '100%' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, pt: { xs: 1, md: 4 } }}>
          {/* Back Button */}
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleGoBack}
            sx={{ mb: 3, color: '#0b2244' }}
            className="animate-fade-in"
          >
            {t('product_detail.back', 'Retour')}
          </Button>

          {/* Product Header */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6} className="animate-on-scroll-left">
              <Box
                component="img"
                src={product.images.main}
                alt={t(`${product.translationKey}.title`, 'Product')}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '500px',
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={6} className="animate-on-scroll-right">
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: '#0b2244',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                {t(`${product.translationKey}.title`, 'Product Title')}
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: '#1976d2',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                {t(`${product.translationKey}.subtitle`, 'Product Subtitle')}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#666',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1.1rem'
                }}
              >
                {t(`${product.translationKey}.description`, 'Product description')}
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#0b2244',
                    fontWeight: 700,
                    mb: 1,
                    filter: 'blur(8px)',
                    userSelect: 'none'
                  }}
                >
                  {product.pricing.price} {product.pricing.currency}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#666' }}
                >
                  {t('product_detail.price_note', 'TVA incluse • Livraison gratuite')}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  disabled={true}
                  sx={{
                    backgroundColor: '#cccccc',
                    color: '#666666',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: '#cccccc'
                    },
                    '&::after': {
                      content: '"↗"',
                      position: 'absolute',
                      top: '4px',
                      right: '8px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#999'
                    }
                  }}
                >
                  {t('product_detail.add_to_cart', 'Ajouter au panier')}
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderColor: '#0b2244',
                    color: '#0b2244',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#0b2244',
                      color: 'white'
                    }
                  }}
                >
                  {t('product_detail.contact_us', 'Nous contacter')}
                </Button>
              </Box>

              {product.status !== 'available' && (
                <Typography
                  variant="body2"
                  sx={{
                    color: '#e57373',
                    fontStyle: 'italic',
                    backgroundColor: '#ffebee',
                    padding: 2,
                    borderRadius: 2,
                    border: '1px solid #ffcdd2'
                  }}
                >
                  {t('product_detail.availability', '🚧 Produit en cours de développement - Disponible prochainement')}
                </Typography>
              )}
            </Grid>
          </Grid>

          {/* Features Section */}
          <Box sx={{ mb: 8 }} className="animate-on-scroll">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                color: '#0b2244',
                mb: 4,
                textAlign: 'center'
              }}
            >
              {t('product_detail.features_title', 'Caractéristiques principales')}
            </Typography>
            
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    className={`animate-on-scroll animate-stagger-${index + 1}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      backgroundColor: '#f8f9fa',
                      borderRadius: 2,
                      height: '100%',
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Specifications Section */}
          <Box sx={{ mb: 8 }} className="animate-on-scroll">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                color: '#0b2244',
                mb: 4,
                textAlign: 'center'
              }}
            >
              {t('product_detail.specifications_title', 'Spécifications techniques')}
            </Typography>
            
            <Grid container spacing={3}>
              {specifications.map((spec, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    className={`animate-on-scroll animate-stagger-${index + 1}`}
                    sx={{
                      p: 3,
                      backgroundColor: 'white',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      height: '100%',
                      border: '1px solid #e0e0e0',
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
                      }
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#1976d2',
                        fontWeight: 600,
                        mb: 1,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem'
                      }}
                    >
                      {spec.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333',
                        fontWeight: 500
                      }}
                      className={
                        (spec.label.toLowerCase().includes('dimensions') || 
                         spec.label.toLowerCase().includes('battery') ||
                         spec.label.toLowerCase().includes('weight') ||
                         spec.label.toLowerCase().includes('speed') ||
                         spec.label.toLowerCase().includes('capacity') ||
                         spec.label.toLowerCase().includes('age') ||
                         spec.label.toLowerCase().includes('charging') ||
                         spec.label.toLowerCase().includes('warranty') ||
                         spec.value === '85 x 60 x 45 cm' ||
                         spec.value === 'Lithium-ion 36V 10Ah' ||
                         spec.value === '6 mois - 4 ans' ||
                         spec.value === '12 kg' ||
                         spec.value === '6 km/h' ||
                         spec.value === '15 kg (mode poussette) / 30 kg (mode chariot)' ||
                         spec.value === '4-6 heures' ||
                         spec.value === '2 ans') 
                        ? 'blur-sensitive-info' 
                        : ''
                      }
                    >
                      {spec.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Call to Action */}
          <Box
            className="animate-on-scroll"
            sx={{
              textAlign: 'center',
              py: 6,
              backgroundColor: '#f8f9fa',
              borderRadius: 3,
              mb: 4
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: '#0b2244',
                mb: 2
              }}
            >
              {t('product_detail.cta_title', 'Intéressé par ce produit ?')}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 3,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              {t('product_detail.cta_description', 'Contactez-nous pour plus d\'informations sur ce produit.')}
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                backgroundColor: '#0b2244',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#21517a'
                }
              }}
            >
              {t('product_detail.contact_button', 'Nous contacter')}
            </Button>
          </Box>
          </Container>
        </Box>
        
        <Footer31 />
      </Navbar81>
    </>
  );
}
