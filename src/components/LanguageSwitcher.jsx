import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ direction = 'row' }) => {
  const { i18n } = useTranslation();
  const current = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:768px)');

  const languages = [
    { 
      code: 'fr', 
      name: 'Français', 
      flag: (
        <svg width="20" height="15" viewBox="0 0 20 15" className="flag-svg">
          <rect width="6.67" height="15" fill="#002395"/>
          <rect x="6.67" width="6.67" height="15" fill="#fff"/>
          <rect x="13.33" width="6.67" height="15" fill="#ED2939"/>
        </svg>
      )
    },
    { 
      code: 'en', 
      name: 'English', 
      flag: (
        <svg width="20" height="15" viewBox="0 0 20 15" className="flag-svg">
          <rect width="20" height="15" fill="#012169"/>
          <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="1.5"/>
          <path d="M10,0 L10,15 M0,7.5 L20,7.5" stroke="#fff" strokeWidth="3"/>
          <path d="M10,0 L10,15 M0,7.5 L20,7.5" stroke="#C8102E" strokeWidth="1.5"/>
          <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="0.75"/>
        </svg>
      )
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === current);

  // Texte "Language" dans la langue active
  const languageText = current === 'fr' ? 'Langue' : 'Language';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  // Version mobile - switcher simple
  if (isMobile) {
    return (
      <div className="language-switcher-mobile">
        <button
          className={`mobile-lang-btn ${current === 'fr' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('fr')}
          aria-label="Français"
        >
          {languages[0].flag}
        </button>
        <div className="mobile-separator"></div>
        <button
          className={`mobile-lang-btn ${current === 'en' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('en')}
          aria-label="English"
        >
          {languages[1].flag}
        </button>
      </div>
    );
  }

  // Version desktop - menu déroulant
  return (
    <div className="language-switcher-desktop" ref={dropdownRef}>
      <button
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Changer de langue"
        aria-expanded={isOpen}
      >
        <span className="current-lang">{languageText}</span>
        <svg 
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" fill="currentColor"/>
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`dropdown-item ${current === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              aria-label={lang.name}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              {current === lang.code && (
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 