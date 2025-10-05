import React, { useEffect } from "react";
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
  }, []);
  
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
    <div className="notre-entreprise-page">
      <Navbar81>
        {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg" className="hero-container">
          <Typography variant="h2" component="h1" className="hero-title animate-fade-in">
            {t('notre_entreprise.page_title', 'Notre Entreprise')}
          </Typography>
          <Typography variant="h5" className="hero-subtitle animate-fade-in">
            {t('notre_entreprise.page_subtitle', 'Innovation, passion et expertise au service du golf familial')}
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" className="main-content">
        
        {/* Intro CTA Section */}
        <Box className="cta-section animate-on-scroll">
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
        <Box className="vision-section animate-on-scroll">
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
          <Box className="ambition-card animate-on-scroll-left animate-stagger-1">
            <Typography variant="h4" component="h2" className="card-title">
              {t('notre_entreprise.ambition_title', 'Notre Ambition')}
            </Typography>
            <Typography variant="body1" className="card-text">
              {t('notre_entreprise.ambition_text', 'Réunir sport, technologie et vie familiale dans une solution unique.')}
            </Typography>
          </Box>

          {/* Mission Card */}
          <Box className="mission-card animate-on-scroll-right animate-stagger-2">
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
      </Navbar81>
    </div>
  );
}
