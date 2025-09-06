import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsArrowUp,
} from "react-icons/bs";
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
              src="/images/Logo.png"
              alt="Carteron Industries Logo"
              className="footer-logo"
            />
            <div className="footer-brand-text">Carteron Industries</div>
            <p className="footer-brand-description">
              {t('footer.brand_description', 'Innovative solutions for tomorrow\'s challenges')}
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-links-column">
              <div className="footer-title">{t('footer.about')}</div>
              <ul>
                <li>
                  <a href="/about">{t('footer.our_company')}</a>
                </li>
                <li>
                  <a href="/services">{t('footer.our_services')}</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <div className="footer-title">{t('footer.follow_us')}</div>
              <ul>
                <li>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li>
                  <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a>
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
          <div className="footer-actions">
            <div className="footer-icons">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <BsFacebook />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <BsInstagram />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <BsTwitter />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <BsGithub />
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <BsDribbble />
              </a>
            </div>
            <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
              <BsArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer31;
