import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const mainContent = document.getElementById('main-content');
      const scrollY = mainContent ? mainContent.scrollTop : window.scrollY;
      
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const setupScrollListener = () => {
      const mainContent = document.getElementById('main-content');
      
      if (mainContent) {
        mainContent.addEventListener('scroll', toggleVisibility);
        toggleVisibility();
        return () => mainContent.removeEventListener('scroll', toggleVisibility);
      } else {
        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility();
        return () => window.removeEventListener('scroll', toggleVisibility);
      }
    };

    const timer = setTimeout(() => {
      const cleanup = setupScrollListener();
      return cleanup;
    }, 100);

    return () => {
      clearTimeout(timer);
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.removeEventListener('scroll', toggleVisibility);
      }
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const mainContent = document.getElementById('main-content');
    
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;