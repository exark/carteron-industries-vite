import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './about.css';

const About = () => {
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
            {t('construction.title', 'Website Under Construction')}
          </h1>

          {/* Subtitle */}
          <p className="construction-subtitle">
            {t('construction.subtitle', 'We are working hard to bring you something amazing!')}
          </p>

          {/* Loading Spinner */}
          <div className="progress-container">
            <div className="loader"></div>
          </div>

          {/* Description */}
          <p className="construction-description">
            {t('construction.description', 'Our team is currently developing this page. Please check back soon for updates!')}
          </p>

          {/* Action Buttons */}
          <div className="construction-actions">
            <button 
              className="btn-secondary" 
              onClick={handleGoBack}
            >
              {t('construction.go_back', 'Go Back')}
            </button>
            <button 
              className="btn-primary" 
              onClick={handleGoHome}
            >
              {t('construction.go_home', 'Go Home')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
