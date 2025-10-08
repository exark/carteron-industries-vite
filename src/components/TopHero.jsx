import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './TopHero.css';
import '../assets/fonts/fonts.css';

const TopHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    const heroCarouselElement = document.querySelector('.hero-carousel-wrapper');
    if (heroCarouselElement) {
      heroCarouselElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleProductsClick = () => {
    navigate('/our-product');
  };

  return (
    <div 
      className="top-hero-container"
      style={{
        backgroundImage: 'url(/images/golf_image_1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
      }}
    >
      <div className="top-hero-overlay">
        <div className="top-hero-content">
          <div className="top-hero-text">
            <h1 className="top-hero-title">
              {t('home.title', 'Carteron Industries')}
            </h1>
            <p className="top-hero-subtitle">
              {t('carousel.side_title', 'An Innovation Serving Golf and Family')}
            </p>
            <p className="top-hero-description">
              {t('carousel.side_desc', 'Driven by innovation, Carteron Industries creates solutions at the crossroads of sport, family, and technology. We designed the first 2-in-1 hybrid golf stroller, made to carry both a golf bag and a child effortlessly and safely. Our motorized hybrid solution, currently in development, is specifically adapted to golf courses, combining sporting leisure with family life.')}
            </p>
          </div>
        </div>
        
        {/* Indicateur de scroll */}
        <div className="scroll-indicator" onClick={handleDiscoverClick}>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="scroll-text">
            {t('carousel.discover_btn', 'Discover more')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
