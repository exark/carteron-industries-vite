import React from 'react';
import { useTranslation } from 'react-i18next';
import './FamilyGolfRevolution.css';

const FamilyGolfRevolution = () => {
  const { t } = useTranslation();

  return (
    <section className="family-golf-revolution">
      <div className="revolution-container">
        
        <header className="revolution-header">
          <h2 className="revolution-title">
            {t('revolution.title')}
          </h2>
          <p className="revolution-intro">
            {t('revolution.intro')}
          </p>
        </header>

        <div className="revolution-blocks">
          
          <article className="revolution-block">
            <div className="block-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="block-stat">{t('revolution.block1.stat')}</h3>
            <p className="block-text">
              {t('revolution.block1.text')}
            </p>
          </article>

          <article className="revolution-block">
            <div className="block-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63C19.68 7.55 18.92 7 18.06 7h-.12c-.86 0-1.62.55-1.9 1.37L13.5 16H16v6h4zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5-14c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm.5 2h-2c-1.1 0-2 .9-2 2v5.5h1.5V22h3v-4.5H17V12c0-1.1-.9-2-2-2z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="block-stat">{t('revolution.block2.stat')}</h3>
            <p className="block-text">
              {t('revolution.block2.text')}
            </p>
          </article>

          <article className="revolution-block">
            <div className="block-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" fill="currentColor"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="block-stat">{t('revolution.block3.stat')}</h3>
            <p className="block-text">
              {t('revolution.block3.text')}
            </p>
          </article>

        </div>

        <footer className="revolution-conclusion">
          <p className="conclusion-text">
            {t('revolution.conclusion')}
          </p>
        </footer>

      </div>
    </section>
  );
};

export default FamilyGolfRevolution;
