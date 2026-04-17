import React from "react";
import { Link } from "react-router-dom";
import "./footer31.css";
import { useTranslation } from "react-i18next";

const Footer31 = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <button 
              className="footer-logo-wrapper" 
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll to top"
            >
              <img
                src="/images/logo.webp"
                alt="Carteron Industries Logo"
                className="footer-logo"
              />
            </button>
            <p className="footer-brand-description">
              {t('footer.brand_description', 'Innovative solutions for tomorrow\'s challenges')}
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-links-column">
              <div className="footer-title">{t('footer.navigation')}</div>
              <ul>
                <li>
                  <Link to="/">{t('navbar.home')}</Link>
                </li>
                <li>
                  <Link to="/our-product">{t('navbar.our_product')}</Link>
                </li>
                <li>
                  <Link to="/notre-entreprise">{t('footer.our_company')}</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <div className="footer-title">{t('footer.support')}</div>
              <ul>
                <li>
                  <Link to="/faq">{t('navbar.faq')}</Link>
                </li>
                <li>
                  <Link to="/contact">{t('navbar.contact')}</Link>
                </li>
                <li>
                  <Link to="/admin/login">{t('footer.login')}</Link>
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
          <div className="footer-legal-links">
            <Link to="/privacy">{t('footer.privacy_policy', 'Privacy Policy')}</Link>
            <span className="footer-separator">•</span>
            <Link to="/terms">{t('footer.terms_of_service', 'Terms of Service')}</Link>
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
