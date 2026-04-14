import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './contact10.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// ⬇️ On place les valeurs par défaut dans la destructuration des props
const Contact10 = ({ contact10Id = '', location2ImageAlt = 'Email Contact' }) => {
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
              {t('contact10.heading1_prefix', 'Et si on pouvait jouer au golf…')} <span className="text-gradient-green-blue">{t('contact10.heading1_highlight', 'en famille')}</span> {t('contact10.heading1_suffix', '?')}
            </h2>
            <p className="thq-body-large">{t('contact10.content1')}</p>
            <div className="contact10-partnership-section">
              <div 
                className="contact10-partnership-item" 
                onClick={() => navigate('/survey/club')}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src="/images/orgnanisation.webp" 
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
                  src="/images/family.webp" 
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
