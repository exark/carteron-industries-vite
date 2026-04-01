import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './TopHero.css';
import '../assets/fonts/fonts.css';

const Win2kTaskbar = () => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '28px',
      background: '#d4d0c8',
      borderTop: '2px solid #ffffff',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px',
      zIndex: 9999,
      gap: '4px',
      boxShadow: 'inset 0 1px 0 #ffffff',
      fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif",
      fontSize: '11px',
    }}>
      {/* Start button */}
      <button style={{
        background: '#d4d0c8',
        border: '2px solid #ffffff',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        boxShadow: '1px 1px 0 #808080',
        padding: '2px 8px',
        fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif",
        fontSize: '11px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        height: '22px',
        borderRadius: '0',
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
          <rect x="0" y="0" width="5" height="5" fill="#ff0000"/>
          <rect x="7" y="0" width="5" height="5" fill="#00aa00"/>
          <rect x="0" y="7" width="5" height="5" fill="#0000ff"/>
          <rect x="7" y="7" width="5" height="5" fill="#ffff00"/>
        </svg>
        Start
      </button>

      {/* Divider */}
      <div style={{ width: '1px', height: '20px', background: '#808080', marginLeft: '2px' }}></div>

      {/* Active window tab */}
      <div style={{
        background: '#d4d0c8',
        border: '1px solid #808080',
        borderTop: '1px solid #ffffff',
        borderLeft: '1px solid #ffffff',
        padding: '2px 8px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '11px',
        fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif",
        boxShadow: 'inset 1px 1px 0 #ffffff',
        flexShrink: 0,
        maxWidth: '180px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10">
          <rect x="0" y="0" width="10" height="10" fill="#000080"/>
          <rect x="2" y="2" width="6" height="6" fill="#4a90d9"/>
        </svg>
        Carteron Industries
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }}></div>

      {/* System tray */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '0 6px',
        height: '20px',
        background: '#d4d0c8',
        border: '1px solid #808080',
        borderTop: '1px solid #ffffff',
        borderLeft: '1px solid #ffffff',
        fontSize: '11px',
        fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif",
        boxShadow: 'inset 1px 1px 0 #ffffff',
      }}>
        {/* Volume icon */}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4H4L7 2V10L4 8H2V4Z" fill="#404040"/>
          <path d="M9 3C10.1 4 10.1 8 9 9" stroke="#404040" strokeWidth="1"/>
        </svg>
        <span>{time}</span>
      </div>
    </div>
  );
};

const TopHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProductsClick = () => {
    navigate('/our-product');
  };

  const handleDiscoverClick = () => {
    const heroCarouselElement = document.querySelector('.hero-carousel-wrapper');
    if (heroCarouselElement) {
      heroCarouselElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Marquee news bar - classic IE era */}
      <div style={{
        position: 'relative',
        width: '100%',
        background: '#000080',
        color: '#ffff00',
        fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif",
        fontSize: '11px',
        padding: '2px 0',
        overflow: 'hidden',
        zIndex: 2,
        marginTop: '22px', /* below title bar */
        borderBottom: '1px solid #000058',
      }}>
        <marquee scrollamount="3" style={{ margin: 0, display: 'block' }}>
          *** WELCOME TO CARTERON INDUSTRIES OFFICIAL WEBSITE *** NEW: Revolutionary 2-in-1 Hybrid Golf Stroller Now Available *** Motorized Version Coming Soon *** Best Viewed in Internet Explorer 6.0 at 800x600 resolution ***
        </marquee>
      </div>

      <div className="top-hero-container">
        <div className="top-hero-grid">
          {/* Main Content Window */}
          <div className="top-hero-content">
            <div className="top-hero-title">
              <img 
                src="/images/logo.svg" 
                alt="Carteron Industries"
                draggable="false"
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              />
            </div>
            
            {/* Mobile image grid */}
            <div className="top-hero-image-grid mobile-only">
              <div className="grid-image grid-small-top">
                <div><img src="/images/kidsgolf.webp" alt="Kids Golf" /></div>
              </div>
              <div className="grid-image grid-medium">
                <div><img src="/images/golf_image_1.webp" alt="Golf Course" /></div>
              </div>
              <div className="grid-image grid-small-bottom">
                <div><img src="/images/bptg.png" alt="Golf Together" /></div>
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
            </button>
          </div>

          {/* Asymmetrical Image Grid - Win2k style frames */}
          <div className="top-hero-image-grid">
            <div className="grid-image grid-small-top">
              <div><img src="/images/kidsgolf.webp" alt="Kids Golf" /></div>
            </div>
            <div className="grid-image grid-medium">
              <div><img src="/images/golf_image_1.webp" alt="Golf Course" /></div>
            </div>
            <div className="grid-image grid-small-bottom">
              <div><img src="/images/bptg.png" alt="Golf Together" /></div>
            </div>
          </div>
        </div>

        {/* Win2k "About this page" panel at the bottom */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '12px',
          width: '100%',
          maxWidth: '960px',
          background: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #404040',
          borderBottom: '2px solid #404040',
          boxShadow: '1px 1px 0 #808080',
          display: 'flex',
          gap: '8px',
          padding: '4px 8px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          {/* Quick links Win2k toolbar style */}
          {[
            { label: '[ Our Product ]', path: '/our-product' },
            { label: '[ Notre Entreprise ]', path: '/notre-entreprise' },
            { label: '[ FAQ ]', path: '/faq' },
            { label: '[ Contact ]', path: '/contact' },
          ].map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => { e.preventDefault(); navigate(link.path); }}
              style={{
                fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif",
                fontSize: '11px',
                color: '#0000ff',
                textDecoration: 'underline',
                cursor: 'pointer',
                padding: '2px 4px',
              }}
              onMouseEnter={(e) => { e.target.style.background = '#000080'; e.target.style.color = '#ffffff'; }}
              onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#0000ff'; }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginLeft: 'auto', fontSize: '10px', color: '#808080', fontFamily: "'Tahoma', Verdana" }}>
            &copy; {new Date().getFullYear()} Carteron Industries. All rights reserved.
          </div>
        </div>
      </div>

      {/* Win2k Taskbar */}
      <Win2kTaskbar />
    </>
  );
};

export default TopHero;
