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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      navigate('/contact');
    }, 100);
  };

  return (
    <>
      <Navbar81 />

      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg" className="hero-container">
          <Typography variant="h2" component="h1" className="hero-title">
            {t('notre_entreprise.page_title', 'Notre Entreprise')}
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            {t('notre_entreprise.page_subtitle', 'Innovation, passion et expertise au service du golf familial')}
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" className="main-content">
        
        {/* Intro CTA Section */}
        <Box className="cta-section">
          <Typography variant="h3" component="h2" className="cta-title">
            {t('notre_entreprise.cta_title', 'Rejoignez l\'aventure')}
          </Typography>
          <Typography variant="body1" className="cta-text">
            {t('notre_entreprise.cta_text', 'Nous recherchons des partenaires, clubs et investisseurs pour co-construire et tester cette innovation. Rejoignez l\'aventure !')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleContactClick}
            className="cta-button"
          >
            {t('notre_entreprise.contact_button', 'Nous contacter')}
          </Button>
        </Box>

        {/* Vision Section */}
        <Box className="vision-section">
          <Typography variant="h3" component="h2" className="vision-title">
            {t('notre_entreprise.vision_title', 'Notre Vision')}
          </Typography>
          <Typography variant="body1" className="vision-text">
            {t('notre_entreprise.vision_text', 'Réinventer l\'expérience du golf afin de permettre aux parents golfeurs de partager leur passion avec leurs enfants, et aux clubs d\'attirer une nouvelle clientèle familiale.')}
          </Typography>
        </Box>

        {/* Ambition & Mission Cards */}
        <Box className="cards-grid">
          {/* Ambition Card */}
          <Box className="ambition-card">
            <Typography variant="h4" component="h2" className="card-title">
              {t('notre_entreprise.ambition_title', 'Notre Ambition')}
            </Typography>
            <Typography variant="body1" className="card-text">
              {t('notre_entreprise.ambition_text', 'Réunir sport, technologie et vie familiale dans une solution unique.')}
            </Typography>
          </Box>

          {/* Mission Card */}
          <Box className="mission-card">
            <Typography variant="h4" component="h2" className="card-title">
              {t('notre_entreprise.mission_title', 'Notre Mission')}
            </Typography>
            <Typography variant="body1" className="card-text">
              {t('notre_entreprise.mission_text', 'Garantir une approche fiable, innovante et orientée utilisateur, grâce à notre expertise technique et notre passion pour le golf.')}
            </Typography>
          </Box>
        </Box>

      </Container>

      <Footer31 />
    </>
  );
}
