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
    const infoSectionElement = document.querySelector('.info-section');
    if (infoSectionElement) {
      infoSectionElement.scrollIntoView({ 
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
        {/* Main Content */}
        <div className="top-hero-content">
          <div className="top-hero-title">
            <img 
              src="/images/logo.svg" 
              alt="Carteron Industries"
              draggable="false"
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            />
          </div>
          
          {/* Image Grid for Mobile - appears after logo */}
          <div className="top-hero-image-grid mobile-only">
            <div className="grid-image grid-small-top">
              <div>
                <img 
                  src="/images/kidsgolf.webp" 
                  alt="Kids Golf"
                />
              </div>
            </div>
            <div className="grid-image grid-medium">
              <div>
                <img 
                  src="/images/golf_image_1.webp" 
                  alt="Golf Course"
                />
              </div>
            </div>
            <div className="grid-image grid-small-bottom">
              <div>
                <img 
                  src="/images/bptgreel.jpeg" 
                  alt="Golf Together"
                />
              </div>
            </div>
          </div>
          
          <p className="top-hero-subtitle">
            {t('carousel.side_title', 'An Innovation Serving Golf and Family')}
          </p>
          <p className="top-hero-description">
            {t('carousel.side_desc', 'Carteron Industries creates solutions at the crossroads of sport, family, and technology. We designed the first 2-in-1 hybrid golf stroller, made to carry both a golf bag and a child effortlessly and safely. Our motorized hybrid solution, currently in development, is specifically adapted to golf courses, combining sporting leisure with family life.')}
          </p>
          
          <button className="top-hero-cta" onClick={handleProductsClick}>
            {t('carousel.our_products_btn', 'Discover Our Products')}
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Asymmetrical Image Grid */}
        <div className="top-hero-image-grid">
          <div className="grid-image grid-small-top">
            <div>
              <img 
                src="/images/kidsgolf.webp" 
                alt="Kids Golf"
              />
            </div>
          </div>
          <div className="grid-image grid-medium">
            <div>
              <img 
                src="/images/golf_image_1.webp" 
                alt="Golf Course"
              />
            </div>
          </div>
          <div className="grid-image grid-small-bottom">
            <div>
              <img 
                src="/images/bptgreel.jpeg" 
                alt="Golf Together"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button - Desktop Only */}
      <div className="chevron-container" onClick={handleDiscoverClick}>
        <span className="chevron"></span>
        <span className="chevron"></span>
        <span className="chevron"></span>
      </div>
    </div>
  );
};

export default TopHero;
