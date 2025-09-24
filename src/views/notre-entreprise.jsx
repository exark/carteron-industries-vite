import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import "./notre-entreprise.css";

export default function NotreEntreprise() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const handleContactClick = () => {
    // Smooth scroll to top before navigation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Small timeout to ensure smooth scroll completes before navigation
    setTimeout(() => {
      navigate('/contact');
    }, 100);
  };

  return (
    <>
      <Navbar81 />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          backgroundImage: 'url(/images/city.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(11, 34, 68, 0.8) 0%, rgba(25, 118, 210, 0.7) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              color: 'white'
            }}
          >
            {t('notre_entreprise.page_title', 'Notre Entreprise')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              opacity: 0.95,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              color: 'white'
            }}
          >
            {t('notre_entreprise.page_subtitle', 'Innovation, passion et expertise au service du golf familial')}
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        
        {/* Intro CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 8, md: 12 },
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: '#0b2244',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            {t('notre_entreprise.cta_title', 'Rejoignez l\'aventure')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
              margin: '0 auto',
              color: '#555',
              mb: 4
            }}
          >
            {t('notre_entreprise.cta_text', 'Nous recherchons des partenaires, clubs et investisseurs pour co-construire et tester cette innovation. Rejoignez l\'aventure !')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleContactClick}
            sx={{
              backgroundColor: '#0b2244',
              color: 'white',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 16px rgba(11, 34, 68, 0.3)',
              '&:hover': {
                backgroundColor: '#21517a',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(11, 34, 68, 0.4)'
              },
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            {t('notre_entreprise.contact_button', 'Nous contacter')}
          </Button>
        </Box>

        {/* Vision Section */}
        <Box
          sx={{
            mb: { xs: 8, md: 12 },
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: '#0b2244',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            {t('notre_entreprise.vision_title', 'Notre Vision')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '900px',
              margin: '0 auto',
              color: '#555'
            }}
          >
            {t('notre_entreprise.vision_text', 'Réinventer l\'expérience du golf afin de permettre aux parents golfeurs de partager leur passion avec leurs enfants, et aux clubs d\'attirer une nouvelle clientèle familiale.')}
          </Typography>
        </Box>

        {/* Ambition & Mission Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            mb: { xs: 8, md: 12 }
          }}
        >
          {/* Ambition Card */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              background: 'white',
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.12)'
              }
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#0b2244',
                fontSize: { xs: '1.75rem', md: '2rem' }
              }}
            >
              {t('notre_entreprise.ambition_title', 'Notre Ambition')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: '#555'
              }}
            >
              {t('notre_entreprise.ambition_text', 'Réunir sport, technologie et vie familiale dans une solution unique.')}
            </Typography>
          </Box>

          {/* Mission Card */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              background: 'white',
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.12)'
              }
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#0b2244',
                fontSize: { xs: '1.75rem', md: '2rem' }
              }}
            >
              {t('notre_entreprise.mission_title', 'Notre Mission')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: '#555'
              }}
            >
              {t('notre_entreprise.mission_text', 'Garantir une approche fiable, innovante et orientée utilisateur, grâce à notre expertise technique et notre passion pour le golf.')}
            </Typography>
          </Box>
        </Box>

      </Container>

      <Footer31 />
    </>
  );
}
