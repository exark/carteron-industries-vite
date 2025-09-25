import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import "./product-detail.css";

export default function ProductDetail() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/our-product');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0);
  };

  const features = [
    t('product_detail.features.0', 'Transformation rapide poussette/chariot'),
    t('product_detail.features.1', 'Système de sécurité enfants certifié'),
    t('product_detail.features.2', 'Motorisation silencieuse et puissante'),
    t('product_detail.features.3', 'Design compact et pliable'),
    t('product_detail.features.4', 'Accessoires modulaires inclus'),
    t('product_detail.features.5', 'Batterie longue durée (8h d\'autonomie)'),
    t('product_detail.features.6', 'Roues tout-terrain avec suspension'),
    t('product_detail.features.7', 'Interface tactile intuitive')
  ];

  const specifications = [
    { label: t('product_detail.specs.weight', 'Poids'), value: '12 kg' },
    { label: t('product_detail.specs.dimensions', 'Dimensions'), value: '85 x 60 x 45 cm' },
    { label: t('product_detail.specs.battery', 'Batterie'), value: 'Lithium-ion 36V 10Ah' },
    { label: t('product_detail.specs.max_speed', 'Vitesse max'), value: '6 km/h' },
    { label: t('product_detail.specs.capacity', 'Capacité charge'), value: '15 kg (mode poussette) / 30 kg (mode chariot)' },
    { label: t('product_detail.specs.age_range', 'Âge enfant'), value: '6 mois - 4 ans' },
    { label: t('product_detail.specs.charging_time', 'Temps de charge'), value: '4-6 heures' },
    { label: t('product_detail.specs.warranty', 'Garantie'), value: '2 ans' }
  ];

  return (
    <>
      <Navbar81 />
      
      <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleGoBack}
          sx={{ mb: 3, color: '#0b2244' }}
        >
          {t('product_detail.back', 'Retour')}
        </Button>

        {/* Product Header */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/club_de_golf.webp"
              alt="2-in-1 Stroller & Golf Trolley Hybrid"
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
          
          <Grid item xs={12} md={6}>
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
              {t('product_detail.title', 'Poussette & Chariot Golf Hybride 2-en-1')}
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#1976d2',
                fontWeight: 600,
                mb: 3
              }}
            >
              {t('product_detail.subtitle', 'Version Premium')}
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
              {t('product_detail.description', 'Une innovation révolutionnaire qui combine parfaitement les fonctions d\'une poussette haut de gamme et d\'un chariot de golf motorisé. Conçu pour les parents actifs qui ne veulent pas choisir entre leur passion pour le golf et le temps passé avec leurs enfants.')}
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#0b2244',
                  fontWeight: 700,
                  mb: 1
                }}
              >
                {t('product_detail.price', '2 499 €')}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#666' }}
              >
                {t('product_detail.price_note', 'TVA incluse • Livraison gratuite')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                disabled
                sx={{
                  backgroundColor: '#cccccc',
                  color: '#666666',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#cccccc'
                  }
                }}
              >
                {t('product_detail.add_to_cart', 'Ajouter au panier')}
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                disabled
                sx={{
                  borderColor: '#cccccc',
                  color: '#666666',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600
                }}
              >
                {t('product_detail.contact_us', 'Nous contacter')}
              </Button>
            </Box>

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
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
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
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 2,
                    height: '100%'
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
        <Box sx={{ mb: 8 }}>
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
                  sx={{
                    p: 3,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    height: '100%',
                    border: '1px solid #e0e0e0'
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
            {t('product_detail.cta_description', 'Contactez-nous pour être informé dès que ce produit révolutionnaire sera disponible. Soyez parmi les premiers à découvrir l\'avenir de la mobilité familiale sur le golf.')}
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
      
      <Footer31 />
    </>
  );
}
