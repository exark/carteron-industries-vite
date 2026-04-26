import React from 'react';
import { useTranslation } from 'react-i18next';
import './FamilyGolfRevolution.css';

const FamilyGolfRevolution = () => {
  const { t } = useTranslation();

  return (
    <section className="family-golf-revolution bg-grey-blue">
      <div className="revolution-container">
        
        <header className="revolution-header">
          <span className="revolution-label">{t('revolution.label')}</span>
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
                <path d="M8 2v4"/>
                <path d="M16 2v4"/>
                <rect width="18" height="18" x="3" y="4" rx="2"/>
                <path d="M3 10h18"/>
                <path d="M8 14h.01"/>
                <path d="M12 14h.01"/>
                <path d="M16 14h.01"/>
                <path d="M8 18h.01"/>
                <path d="M12 18h.01"/>
              </svg>
            </div>
            <div className="block-number">{t('revolution.block2.number')}</div>
            <p className="block-text">{t('revolution.block2.text')}</p>
          </article>

          <article className="revolution-block">
            <div className="block-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
            </div>
            <div className="block-number">{t('revolution.block3.number')}</div>
            <p className="block-text">{t('revolution.block3.text')}</p>
          </article>

          <article className="revolution-block">
            <div className="block-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="17" x2="22" y1="8" y2="13"/>
                <line x1="22" x2="17" y1="8" y2="13"/>
              </svg>
            </div>
            <div className="block-number">{t('revolution.block4.number')}</div>
            <p className="block-text">{t('revolution.block4.text')}</p>
          </article>

        </div>


      </div>
    </section>
  );
};

export default FamilyGolfRevolution;
