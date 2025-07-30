import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';

const ScrollToTop = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Détecter quand l'utilisateur a scrollé suffisamment pour afficher le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          aria-label={t('scroll_to_top', 'Retour en haut')}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: '#0b2244',
            color: '#fff',
            boxShadow: '0 4px 16px rgba(11, 34, 68, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#21517a',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(11, 34, 68, 0.4)',
            },
            '&:active': {
              transform: 'translateY(0)',
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default ScrollToTop; 