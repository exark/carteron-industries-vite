import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './TopHero.css';
import '../../assets/fonts/fonts.css';

const TopHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    const familyGolfSection = document.querySelector('.family-golf-revolution');
    if (familyGolfSection) {
      familyGolfSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleProductsClick = () => {
    navigate('/our-product');
  };

  return (
    <div className="top-hero-container">
      <div className="top-hero-grid">
        {/* Image Grid for Mobile - appears first on mobile */}
        <div className="top-hero-image-grid mobile-only">
          <div className="grid-image grid-medium">
            <div>
              <img 
                src="/images/produit.png" 
                alt="Golf Course"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="top-hero-content">
          <div className="top-hero-headline">
            <span className="hero-line">{t('carousel.hero_line1', 'Make golf a family experience.')}</span>
            <span className="hero-line hero-line-green">{t('carousel.hero_line2', 'Maximize every tee time on your course.')}</span>
          </div>
          
          <p className="top-hero-description">
            {t('carousel.side_desc', 'Offer your members the world\'s first motorized hybrid golf trolley & stroller — an innovation designed to sustainably retain a new generation of golfers.')}
          </p>
          
          <div className="top-hero-buttons-container">
            <button className="top-hero-cta" onClick={handleProductsClick}>
              {t('carousel.our_products_btn', 'Discover Our Products')}
              <ArrowRight size={18} />
            </button>
            
            <button 
              className="top-hero-club-button"
              onClick={() => navigate('/survey/club')}
            >
              {t('navbar.club_button', 'Vous êtes un club de golf ?')}
            </button>
          </div>
        </div>

        {/* Image Grid - Desktop */}
        <div className="top-hero-image-grid">
          <div className="grid-image grid-medium">
            <div>
              <img 
                src="/images/produit.png" 
                alt="Golf Course"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TopHero;
