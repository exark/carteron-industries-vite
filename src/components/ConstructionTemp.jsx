import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ConstructionTemp.css';

const ConstructionTemp = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 3; // Random increment for realistic loading
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleGoHome = () => {
    navigate('/'); // Go to home page
  };

  return (
    <div className="construction-page">
      <div className="construction-container">
        <div className="construction-content">
          {/* Construction Icon */}
          <div className="construction-icon">
            <img 
              src="/images/outils-de-construction.png" 
              alt="Construction Tools" 
              className="construction-image"
            />
          </div>

          {/* Main Title */}
          <h1 className="construction-title">
            {t('construction.title', 'Page Temporaire - En Construction')}
          </h1>

          {/* Subtitle */}
          <p className="construction-subtitle">
            {t('construction.subtitle', 'Nous travaillons dur pour vous apporter quelque chose d\'incroyable!')}
          </p>

          {/* Loading Spinner */}
          <div className="progress-container">
            <div className="loader"></div>
          </div>

          {/* Description */}
          <p className="construction-description">
            {t('construction.description', 'Notre équipe développe actuellement cette page. Revenez bientôt pour les mises à jour!')}
          </p>

          {/* Action Buttons */}
          <div className="construction-actions">
            <button 
              className="btn-secondary" 
              onClick={handleGoBack}
            >
              {t('construction.go_back', 'Retour')}
            </button>
            <button 
              className="btn-primary" 
              onClick={handleGoHome}
            >
              {t('construction.go_home', 'Accueil')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionTemp;
