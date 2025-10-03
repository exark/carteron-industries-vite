import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './HeroOverlay.css';

const HeroOverlay = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOurProductsClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      navigate('/our-product');
    }, 100);
  };

  return (
    <div className="hero-overlay-content">
      <h2 className="overlay-title">{t('carousel.side_title', 'Notre Mission')}</h2>
      <p className="overlay-desc">
        {t('carousel.side_desc')}
      </p>
      <button
        className="overlay-products-btn"
        onClick={handleOurProductsClick}
        aria-label={t('carousel.our_products_aria', 'Découvrir nos produits')}
      >
        {t('carousel.our_products_btn', 'Découvrir nos produits')}
      </button>
    </div>
  );
};

export default HeroOverlay;
