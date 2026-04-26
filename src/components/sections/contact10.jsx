import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './contact10.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// ⬇️ On place les valeurs par défaut dans la destructuration des props
const Contact10 = ({ contact10Id = '', location2ImageAlt = 'Email Contact', hideCta = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      id={contact10Id}
      className="contact10-container1 thq-section-padding"
    >
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {t('contact10.heading_prefix')} <span className="text-gradient-green-blue">{t('contact10.heading_highlight')}</span>
            </h2>
            <p className="thq-body-large">{t('contact10.content1')}</p>
            <div className="contact10-partnership-section">
              <div 
                className="contact10-partnership-item" 
                onClick={() => navigate('/survey/club')}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src="/images/clubhouse.webp" 
                  alt="Golf Club Partnership" 
                  className="contact10-partnership-image"
                />
                <h3 className="thq-heading-3">{t('contact10.golf_club_title')}</h3>
                <button className="contact10-partnership-btn" onClick={(e) => { e.stopPropagation(); navigate('/survey/club'); }}>
                  {t('contact10.golf_club_btn')}
                </button>
              </div>
              
              <div 
                className="contact10-partnership-item"
                onClick={() => navigate('/survey/family')}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src="/images/famillewalk.jpeg" 
                  alt="Family Golf Partnership" 
                  className="contact10-partnership-image"
                />
                <h3 className="thq-heading-3">{t('contact10.golf_family_title')}</h3>
                <button className="contact10-partnership-btn" onClick={(e) => { e.stopPropagation(); navigate('/survey/family'); }}>
                  {t('contact10.golf_family_btn')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Intéressé par ce produit */}
        {!hideCta && <div className="contact10-cta-section">
          <h2 className="contact10-cta-title">
            {t('contact10.cta_title', 'Intéressé par ce produit ?')}
          </h2>
          <p className="contact10-cta-description">
            {t('contact10.cta_description', 'Contactez-nous pour être informé dès que ce produit révolutionnaire sera disponible. Soyez parmi les premiers à découvrir l\'avenir de la mobilité familiale sur le golf.')}
          </p>
          <button 
            className="contact10-cta-btn"
            onClick={() => navigate('/contact')}
          >
            {t('contact10.cta_button', 'Contactez-nous')}
          </button>
        </div>}
      </div>
    </div>
  )
}

Contact10.propTypes = {
  content1: PropTypes.string,
  location2Description: PropTypes.string,
  location2: PropTypes.string,
  contact10Id: PropTypes.string,
  heading1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
