import React, { useState, Fragment, useMemo, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'

import './faq9.css'
import { useTranslation } from 'react-i18next';

const FAQ9 = ({ fAQ9Id = '' }) => {
  // Reference to the FAQ container
  const faqRef = useRef(null);
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
  const [animatingItems, setAnimatingItems] = useState([]);
  const [exitingItems, setExitingItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Update visibility state when faqItems change
  React.useEffect(() => {
    const initialState = {};
    faqItems.forEach(item => {
      initialState[item.id] = false;
    });
    setFaqVisibility(initialState);
  }, [faqItems]);

  // Scroll to top instantly when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-fade-in'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [faqItems]);  // Re-run when FAQ items change

  const toggleFaqVisibility = (faqId) => {
    setFaqVisibility(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const toggleShowAllFaqs = () => {
    setIsAnimating(true);
    
    if (!showAllFaqs) {
      // When showing more questions, animate them in one by one
      const additionalItems = faqItems.slice(3);
      
      // Start with no additional items visible
      setAnimatingItems([]);
      
      // Set state to track that we're showing all, but don't actually show them yet
      // The items will only appear as they're added to animatingItems
      setShowAllFaqs(true);
      
      // Animate each item with a delay
      additionalItems.forEach((item, index) => {
        setTimeout(() => {
          // Add this item to the animating items
          setAnimatingItems(prev => [...prev, item.id]);
          
          // If this is the last item, reset animation state after it completes
          if (index === additionalItems.length - 1) {
            setTimeout(() => {
              // Keep all items visible after animation completes
              setIsAnimating(false);
            }, 1200); // Animation duration
          }
        }, index * 400); // Stagger each item by 400ms
      });
    } else {
      // When hiding questions, animate all items out at once
      const itemsToRemove = faqItems.slice(3);
      
      // Add all items to exiting state at once
      setExitingItems(itemsToRemove.map(item => item.id));
      
      // Scroll to the FAQ component smoothly
      if (faqRef.current) {
        window.scrollTo({
          top: faqRef.current.offsetTop - 100, // Subtract some pixels to account for any fixed headers
          behavior: 'smooth'
        });
      }
      
      // After animation completes, reset state
      setTimeout(() => {
        setShowAllFaqs(false);
        setExitingItems([]);
        setAnimatingItems([]);
        setIsAnimating(false);
      }, 1200); // Match animation duration
    }
  };
  
  // We don't need this effect anymore since we're handling cleanup in the toggle function
  // Each item will be removed from animation state individually

  // Get the FAQs to display (first 3 + only those currently animating in or out)
  const faqsToDisplay = useMemo(() => {
    // Always show the first 3 items
    const baseItems = faqItems.slice(0, 3);
    
    // Create the list of items to display
    return faqItems.filter(item => {
      // Always show the first 3 base items
      const isBaseItem = item.number <= 3;
      
      // For additional items, only show if they're currently animating in or out
      const isAnimatingIn = animatingItems.includes(item.id);
      const isExiting = exitingItems.includes(item.id);
      
      return isBaseItem || isAnimatingIn || isExiting;
    });
  }, [faqItems, animatingItems, exitingItems]);
  const hasMoreFaqs = faqItems.length > 3;
  return (
    <div ref={faqRef} id={fAQ9Id} className="faq9faq8 thq-section-padding full-width-bg">
      <div className="faq9-max-width thq-flex-column thq-section-max-width">
        <div className="faq9-section-title thq-flex-column animate-fade-in">
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
            
            // Add animation classes for appearing/disappearing items
            let animationClass = '';
            if (animatingItems.includes(faqItem.id)) {
              animationClass = 'faq9-item-entering';
            } else if (exitingItems.includes(faqItem.id)) {
              animationClass = 'faq9-item-exiting';
            }
            
            // Determine animation class based on index for staggered effect
            const staggerClass = index < 8 ? `animate-stagger-${index + 1}` : '';
            const scrollAnimationClass = index % 2 === 0 ? 'animate-on-scroll-left' : 'animate-on-scroll-right';
            
            return (
              <div key={faqItem.id} className={`${faqClass} thq-box-shadow thq-section-max-width ${animationClass} ${scrollAnimationClass} ${staggerClass}`}>
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
          <div className="faq9-more-button-container animate-on-scroll">
            <button 
              onClick={toggleShowAllFaqs}
              className="faq9-more-button thq-button-filled"
              disabled={isAnimating}
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
