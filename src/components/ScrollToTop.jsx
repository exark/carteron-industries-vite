import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollElementRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      let scrollY = 0;
      
      if (scrollElementRef.current === window) {
        scrollY = window.scrollY;
      } else if (scrollElementRef.current) {
        scrollY = scrollElementRef.current.scrollTop;
      }
      
      setIsVisible(scrollY > 300);
    };

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      
      if (mainContent) {
        scrollElementRef.current = mainContent;
        mainContent.addEventListener('scroll', toggleVisibility);
      } else {
        scrollElementRef.current = window;
        window.addEventListener('scroll', toggleVisibility);
      }
      
      toggleVisibility();
    }, 300);

    return () => {
      clearTimeout(timer);
      if (scrollElementRef.current) {
        scrollElementRef.current.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, [location.pathname]);

  const scrollToTop = () => {
    if (scrollElementRef.current === window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (scrollElementRef.current) {
      scrollElementRef.current.scrollTo({
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