import React from 'react';
import { useTranslation } from 'react-i18next';
import './FamilyGolfRevolution.css';

const FamilyGolfRevolution = () => {
  const { t } = useTranslation();

  return (
    <section className="family-golf-revolution bg-grey-blue">
      <div className="revolution-container">
        
        <header className="revolution-header">
          <h2 className="revolution-title">
            {t('revolution.title_start')}
            <span className="text-gradient-green-blue">{t('revolution.title_highlight')}</span>
          </h2>
          <p className="revolution-intro">
            {t('revolution.intro')}
          </p>
        </header>

        <div className="revolution-blocks">
          
          <article className="revolution-block">
            <div className="block-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12h.01"/>
                <path d="M15 12h.01"/>
                <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
                <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6 9 9 0 0 1 2.1-3.9"/>
                <path d="M12 3c2 0 3.5 1.1 3.5 2.5S14.9 8 14 8c-.8 0-1.5-.4-1.5-1"/>
              </svg>
            </div>
            <div className="block-number">{t('revolution.block1.number')}</div>
            <p className="block-text">{t('revolution.block1.text')}</p>
          </article>

          <article className="revolution-block">
            <div className="block-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 17 9 11 13 15 21 7"/>
                <polyline points="15 7 21 7 21 13"/>
              </svg>
            </div>
            <div className="block-number">{t('revolution.block2.number')}</div>
            <p className="block-text">{t('revolution.block2.text')}</p>
          </article>

          <article className="revolution-block">
            <div className="block-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <div className="block-number">{t('revolution.block3.number')}</div>
            <p className="block-text">{t('revolution.block3.text')}</p>
          </article>

        </div>


      </div>
    </section>
  );
};

export default FamilyGolfRevolution;
