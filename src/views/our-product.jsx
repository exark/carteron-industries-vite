import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import { getAllProducts } from "../data/products";
import "./our-product.css";

function ServiceCard({ title, description, image, buttonLabel, features, index, onButtonClick }) {
  const { t } = useTranslation();

  return (
    <Box
      id={`service-${index + 1}`}
      className="service-card"
      sx={{
        background: '#fff',
        borderRadius: 2,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        marginBottom: 3,
        transition: 'all 0.3s ease',
        minHeight: { xs: 'auto', lg: '400px' },
        height: { xs: 'auto', lg: '400px' },
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }
      }}
    >
      {/* Image Section - Left Side */}
      <Box sx={{
        width: { xs: '100%', md: '40%' },
        height: { xs: 200, md: '100%' },
        background: image ? `url(${image})` : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f5f5f5',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {!image && (
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              textAlign: 'center',
              zIndex: 2,
              position: 'relative'
            }}
          >
            Image à venir
          </Typography>
        )}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: image ? 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.2) 100%)' : 'none',
          zIndex: 1
        }} />
      </Box>

      {/* Content Section - Right Side */}
      <Box sx={{
        width: { xs: '100%', md: '60%' },
        padding: { xs: 2, md: 2.5 },
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        minHeight: { xs: 'auto', lg: '400px' },
        height: '100%'
      }}>
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: 2,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              textAlign: 'left',
              lineHeight: 1.4,
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#666",
              marginBottom: 2,
              lineHeight: 1.7, // Increased line height for better readability
              fontSize: { xs: '0.8rem', md: '0.9rem' }, // Slightly larger font on desktop
              textAlign: 'left',
              flexGrow: 1, // Allow text to take available space
              minHeight: '100px', // Ensure enough space for text
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center' // Vertically center the text
            }}
          >
            {description}
          </Typography>

          <Box sx={{ mb: 2, minHeight: '70px' }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                color: "#1976D2",
                mb: 0.8,
                fontSize: '0.7rem',
                textAlign: 'left'
              }}
            >
              {t('features25.features_label', 'Fonctionnalités clés :')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'flex-start' }}>
              {features && features.slice(0, 3).map((feature, idx) => (
                <Chip
                  key={idx}
                  label={feature}
                  size="small"
                  sx={{
                    background: '#e3f2fd',
                    color: '#1976D2',
                    fontWeight: 500,
                    fontSize: '0.6rem',
                    height: '18px'
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              onClick={onButtonClick}
              sx={{
                color: "#fff", 
                fontWeight: 600, 
                borderRadius: 2,
                backgroundColor: "#0b2244",
                textTransform: "none",
                fontSize: '0.875rem',
                padding: '8px 16px',
                alignSelf: 'flex-start',
                minWidth: '120px',
                height: '40px',
                boxShadow: "0 2px 4px rgba(11, 34, 68, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#21517a",
                  boxShadow: "0 4px 8px rgba(11, 34, 68, 0.3)",
                  transform: "translateY(-1px)",
                }
              }}
            >
              {buttonLabel}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function OurProduct() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);

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
  }, []);

  // Handle video loading for Chrome compatibility
  useEffect(() => {
    const video = videoRef.current;
    videoRef.current.playbackRate = 1.5;
    const fallback = document.querySelector('.video-fallback');
    
    if (video && fallback) {
      const handleCanPlay = () => {
        video.play().then(() => {
          // Video started playing successfully, hide fallback
          fallback.style.display = 'none';
          video.style.display = 'block';
        }).catch((error) => {
          console.warn('Video autoplay failed:', error);
          // Keep fallback visible
          video.style.display = 'none';
          fallback.style.display = 'block';
        });
      };

      const handleLoadedData = () => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          video.play().then(() => {
            fallback.style.display = 'none';
            video.style.display = 'block';
          }).catch(() => {
            video.style.display = 'none';
            fallback.style.display = 'block';
          });
        }
      };

      const handleError = () => {
        video.style.display = 'none';
        fallback.style.display = 'block';
      };

      // Initially hide video and show fallback
      video.style.display = 'none';
      fallback.style.display = 'block';

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handleServiceClick = (productSlug) => {
    navigate(`/product/${productSlug}`);
  };

  // Get products dynamically from database
  const productsData = getAllProducts();
  
  const services = productsData.map(product => ({
    title: t(`${product.translationKey}.title`, 'Product Title'),
    description: t(`${product.translationKey}.description`, 'Product description'),
    image: product.images.main,
    buttonLabel: t('features25.button', 'En savoir plus'),
    features: product.features.slice(0, 5).map(featureKey => 
      t(`${product.translationKey}.features.${featureKey}`, 'Feature')
    ),
    productSlug: product.slug
  }));

  return (
    <>
      <Navbar81>
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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          playbackrate={2}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            backgroundColor: '#f0f0f0'
          }}
          onError={(e) => {
            // Fallback to background image if video fails
            e.target.style.display = 'none';
            const fallback = e.target.nextElementSibling;
            if (fallback && fallback.classList.contains('video-fallback')) {
              fallback.style.display = 'block';
            }
          }}
        >
          <source src="https://github.com/exark/carteron-industries-vite/releases/download/video/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>

        {/* Fallback background image - show by default for Chrome */}
        <Box
          className="video-fallback"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/chariot.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            display: 'block'
          }}
        />

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
            className="animate-fade-in"
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
            className="animate-fade-in"
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
          <Box sx={{ textAlign: 'center', mb: 6 }} className="animate-on-scroll">
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

            <Box sx={{ mt: 8, mb: 6 }}>
            <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
              {services.map((service, index) => (
                <Grid item xs={12} lg={6} key={index} sx={{ display: 'flex', height: { xs: 'auto', lg: '400px' } }}>
                  <div className={`animate-on-scroll animate-stagger-${index + 1}`} style={{ width: '100%', height: '100%' }}>
                    <ServiceCard
                      {...service}
                      index={index}
                      onButtonClick={() => handleServiceClick(service.productSlug)}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
          </Box>
          
          

          {/* Services Section */}
          
        </Container>
        </div>
        
        <Footer31 />
      </Navbar81>
    </>
  );
}
