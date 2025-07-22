import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq9.css'
import { useTranslation } from 'react-i18next';

const FAQ9 = ({ fAQ9Id = '' }) => {
  const { t } = useTranslation();
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq1Visible, setfaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div id={fAQ9Id} className="faq9faq8 thq-section-padding full-width-bg">
      <div className="faq9-max-width thq-flex-column thq-section-max-width">
        <div className="faq9-section-title thq-flex-column">
          <div className="faq9-content">
            <h2 className="thq-heading-2">{t('faq.title')}</h2>
            <p className="thq-body-large">{t('faq.subtitle')}</p>
          </div>
        </div>
        <div className="faq9-list thq-flex-column">
          <div className="faq9-faq1 thq-box-shadow thq-section-max-width">
            <div onClick={() => setfaq1Visible(!faq1Visible)} className="faq9-trigger1">
              <p className="faq9-faq1-question thq-body-large">
                {t('faq.faq1.q')}
              </p>
              <div className="faq9-icons-container1">
                <div className="faq9-icon-wrapper">
                  {faq1Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon12">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon10">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq1Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container12">
                <span className="thq-body-small">
                  {t('faq.faq1.a')}
                </span>
              </div>
            </div>
          </div>
          <div className="faq9-faq2 thq-box-shadow thq-section-max-width">
            <div onClick={() => setFaq2Visible(!faq2Visible)} className="faq9-trigger2">
              <p className="faq9-faq2-question1 thq-body-large">
                {t('faq.faq2.q')}
              </p>
              <div className="faq9-icons-container2">
                <div className="faq9-icon-wrapper">
                  {faq2Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon16">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon14">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq2Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container15">
                <span className="thq-body-small">
                  {t('faq.faq2.a')}
                </span>
              </div>
            </div>
          </div>
          <div className="faq9-faq3 thq-box-shadow thq-section-max-width">
            <div onClick={() => setFaq3Visible(!faq3Visible)} className="faq9-trigger3">
              <p className="faq9-faq2-question2 thq-body-large">
                {t('faq.faq3.q')}
              </p>
              <div className="faq9-icons-container3">
                <div className="faq9-icon-wrapper">
                  {faq3Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon20">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon18">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq3Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container18">
                <span className="thq-body-small">
                  {t('faq.faq3.a')}
                </span>
              </div>
            </div>
          </div>
          <div className="faq9-faq4 thq-box-shadow thq-section-max-width">
            <div onClick={() => setFaq4Visible(!faq4Visible)} className="faq9-trigger4">
              <p className="faq9-faq2-question3 thq-body-large">
                {t('faq.faq4.q')}
              </p>
              <div className="faq9-icons-container4">
                <div className="faq9-icon-wrapper">
                  {faq4Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon24">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon22">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq4Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container21">
                <span className="thq-body-small">
                  {t('faq.faq4.a')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ9
