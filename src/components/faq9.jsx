import React, { useState, Fragment, useMemo } from 'react'

import PropTypes from 'prop-types'

import './faq9.css'
import { useTranslation } from 'react-i18next';

const FAQ9 = ({ fAQ9Id = '' }) => {
  const { t, i18n } = useTranslation();
  
  // Dynamically get all FAQ items from the current language
  const faqItems = useMemo(() => {
    const currentLang = i18n.language || 'fr';
    const resources = i18n.getResourceBundle(currentLang, 'translation');
    const faqData = resources?.faq || {};
    
    // Extract all faq items (faq1, faq2, etc.)
    const items = [];
    Object.keys(faqData).forEach(key => {
      if (key.startsWith('faq') && key !== 'title' && key !== 'subtitle') {
        const faqNumber = key.replace('faq', '');
        if (!isNaN(faqNumber)) {
          items.push({
            id: key,
            number: parseInt(faqNumber),
            question: faqData[key].q,
            answer: faqData[key].a
          });
        }
      }
    });
    
    // Sort by number to ensure correct order
    return items.sort((a, b) => a.number - b.number);
  }, [i18n.language, i18n]);

  // Dynamic state management for FAQ visibility
  const [faqVisibility, setFaqVisibility] = useState({});
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Update visibility state when faqItems change
  React.useEffect(() => {
    const initialState = {};
    faqItems.forEach(item => {
      initialState[item.id] = false;
    });
    setFaqVisibility(initialState);
  }, [faqItems]);

  const toggleFaqVisibility = (faqId) => {
    setFaqVisibility(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const toggleShowAllFaqs = () => {
    setShowAllFaqs(prev => !prev);
  };

  // Get the FAQs to display (first 3 or all)
  const faqsToDisplay = showAllFaqs ? faqItems : faqItems.slice(0, 3);
  const hasMoreFaqs = faqItems.length > 3;
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
          {faqsToDisplay.map((faqItem, index) => {
            const isVisible = faqVisibility[faqItem.id] || false;
            // Use generic classes that work with existing CSS
            const faqClass = faqItem.number <= 4 ? `faq9-faq${faqItem.number}` : 'faq9-faq4';
            const triggerClass = faqItem.number <= 4 ? `faq9-trigger${faqItem.number}` : 'faq9-trigger4';
            const questionClass = faqItem.number === 1 ? 'faq9-faq1-question' : 'faq9-faq2-question1';
            const iconContainerClass = faqItem.number <= 4 ? `faq9-icons-container${faqItem.number}` : 'faq9-icons-container4';
            const containerClass = faqItem.number <= 4 ? `faq9-container${12 + (faqItem.number - 1) * 3}` : 'faq9-container21';
            
            return (
              <div key={faqItem.id} className={`${faqClass} thq-box-shadow thq-section-max-width`}>
                <div 
                  onClick={() => toggleFaqVisibility(faqItem.id)} 
                  className={triggerClass}
                >
                  <p className={`${questionClass} thq-body-large`}>
                    {faqItem.question}
                  </p>
                  <div className={iconContainerClass}>
                    <div className="faq9-icon-wrapper">
                      {isVisible ? (
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
                <div className={`faq9-answer ${isVisible ? 'faq9-answer-visible' : ''}`}>
                  <div className={containerClass}>
                    <span className="thq-body-small">
                      {faqItem.answer}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {hasMoreFaqs && (
          <div className="faq9-more-button-container">
            <button 
              onClick={toggleShowAllFaqs}
              className="faq9-more-button thq-button-filled"
            >
              <span className="faq9-button-text">
                {showAllFaqs ? t('faq.less_questions') : t('faq.more_questions')}
              </span>
              <div className="faq9-button-icon">
                <svg 
                  viewBox="0 0 1024 1024" 
                  className={`faq9-chevron ${showAllFaqs ? 'faq9-chevron-up' : 'faq9-chevron-down'}`}
                >
                  <path d="M316 426l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FAQ9
