import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './contact10.css'
import { useTranslation } from 'react-i18next';

// ⬇️ On place les valeurs par défaut dans la destructuration des props
const Contact10 = ({ contact10Id = '', location2ImageAlt = 'Email Contact' }) => {
  const { t } = useTranslation();
  return (
    <div
      id={contact10Id}
      className="contact10-container1 thq-section-padding"
    >
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">{t('contact10.heading1')}</h2>
            <p className="thq-body-large">{t('contact10.content1')}</p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container4">
            <img
              alt={location2ImageAlt}
              src="/images/terrein1.webp"
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <div className="contact10-info">
              <h3 className="contact10-text14 thq-heading-3">{t('contact10.location2')}</h3>
              <p className="thq-body-large">{t('contact10.location2Description')}</p>
              <div className="contact10-container5">
                <a
                  href="mailto:carteron.industries@gmail.com"
                  className="thq-button-flat thq-body-small"
                >
                  {t('contact10.get_directions')}
                </a>
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
