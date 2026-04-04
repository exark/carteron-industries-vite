import React from "react";
import "./footer31.css";
import { useTranslation } from "react-i18next";

const Footer31 = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src="/images/logo.svg"
              alt="Carteron Industries Logo"
              className="footer-logo"
            />
            <p className="footer-brand-description">
              {t('footer.brand_description', 'Innovative solutions for tomorrow\'s challenges')}
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-links-column">
              <div className="footer-title">{t('footer.about')}</div>
              <ul>
                <li>
                  <a href="/notre-entreprise">{t('footer.our_company')}</a>
                </li>
                <li>
                  <a href="/our-product">{t('navbar.our_product')}</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <div className="footer-title">{t('footer.legal')}</div>
              <ul>
                <li>
                  <a href="/privacy">{t('footer.privacy')}</a>
                </li>
                <li>
                  <a href="/terms">{t('footer.terms')}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-copyright">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </div>
          <div className="footer-developer">
            <span className="developer-text">Developed by Ahmed Ben Hamouda</span>
            <a href="https://portfolio-exark.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Exark_war.png"
                alt="Exark Logo"
                className="developer-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer31;
