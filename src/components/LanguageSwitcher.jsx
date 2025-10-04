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

  // Simple toggle version for all devices
  return (
    <div className="language-switcher-toggle">
      <button
        className={`lang-toggle-btn ${current === 'fr' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('fr')}
        aria-label="Français"
      >
        <img src="/images/french.png" alt="Français" className="flag-image" />
      </button>
      <div className="lang-separator">|</div>
      <button
        className={`lang-toggle-btn ${current === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="English"
      >
        <img src="/images/english.png" alt="English" className="flag-image" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;