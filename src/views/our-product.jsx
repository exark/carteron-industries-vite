import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import "./our-product.css";

function ServiceCard({ title, description, image, buttonLabel, features, index }) {
  const { t } = useTranslation();

  return (
    <Box
      id={`service-${index + 1}`}
      className="service-card"
      sx={{
        background: '#fff',
        borderRadius: 3,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        marginBottom: 4,
        transition: 'all 0.4s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 48px rgba(0,0,0,0.15)',
        }
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box sx={{
            height: { xs: 200, md: 300 },
            background: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f5f5f5',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(25,118,210,0.05) 100%)',
              opacity: 0,
              transition: 'opacity 0.4s ease',
              zIndex: 1
            },
            '&:hover::before': {
              opacity: 1
            }
          }}>
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
              zIndex: 2
            }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{
            padding: { xs: 3, md: 4 },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 3,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#666",
                marginBottom: 4,
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}
            >
              {description}
            </Typography>

            {features && features.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#1976D2",
                    mb: 2,
                    fontSize: '1rem'
                  }}
                >
                  {t('features25.features_label', 'Fonctionnalités clés :')}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {features.map((feature, idx) => (
                    <Chip
                      key={idx}
                      label={feature}
                      size="small"
                      sx={{
                        background: '#e3f2fd',
                        color: '#1976D2',
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        '&:hover': {
                          background: '#bbdefb',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(25,118,210,0.3)'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #1976D2 0%, #1565C0 100%)",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0 4px 16px rgba(25,118,210,0.3)",
                transition: "all 0.3s ease",
                fontSize: '1rem',
                padding: '12px 32px',
                alignSelf: 'flex-start',
                '&:hover': {
                  background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
                  boxShadow: "0 8px 24px rgba(25,118,210,0.4)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {buttonLabel}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function OurProduct() {
  const { t } = useTranslation();
  const location = useLocation();

  // Gestion du scroll automatique vers les sections
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          // Calculer la position avec un offset pour la navbar
          const navbarHeight = 100; // Hauteur approximative de la navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - 20; // 20px d'espace supplémentaire

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const services = [
    {
      title: t('features25.card3.title', 'Chariots de Golf Électriques'),
      description: t('features25.card3.desc', "Conçus pour les golfeurs exigeants, nos chariots électriques allient performance, autonomie et ergonomie. Développés avec une motorisation silencieuse et une navigation intuitive, ils améliorent l'expérience sur le green."),
      image: "/images/serivce3.jpg",
      buttonLabel: t('features25.card3.button', 'En savoir plus'),
      features: [
        t('features25.card3.features.0', 'Motorisation silencieuse'),
        t('features25.card3.features.1', 'Navigation intuitive'),
        t('features25.card3.features.2', 'Autonomie étendue'),
        t('features25.card3.features.3', 'Design ergonomique'),
        t('features25.card3.features.4', 'Technologie avancée')
      ]
    },
    {
      title: t('features25.card4.title', 'Poussette & Chariot Golf Hybride 2-en-1'),
      description: t('features25.card4.desc', "Une innovation unique : un chariot hybride pensé pour les jeunes parents actifs, combinant les fonctions d'une poussette et d'un chariot de golf motorisé. Idéal pour concilier sport et famille sans compromis."),
      image: "/images/service4.jpg",
      buttonLabel: t('features25.card4.button', 'En savoir plus'),
      features: [
        t('features25.card4.features.0', 'Transformation rapide'),
        t('features25.card4.features.1', 'Sécurité enfants'),
        t('features25.card4.features.2', 'Motorisation adaptée'),
        t('features25.card4.features.3', 'Design compact'),
        t('features25.card4.features.4', 'Accessoires modulaires')
      ]
    }
  ];

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
          color: 'white'
        }}
      >
        {/* Video Background */}
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="https://github.com/exark/carteron-industries-vite/releases/download/video/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>

        {/* Dark overlay for better text readability */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 1
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
                disabled
                sx={{ 
                  alignSelf: { xs: 'center', md: 'flex-start' },
                  mt: 2,
                  backgroundColor: '#cccccc',
                  color: '#666666',
                  cursor: 'not-allowed',
                  '&:hover': {
                    backgroundColor: '#cccccc'
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

          {/* Services Section */}
          <Box sx={{ mt: 10, mb: 6 }}>
            <Box>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  index={index}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </div>
      
      <Footer31 />
    </>
  );
}
